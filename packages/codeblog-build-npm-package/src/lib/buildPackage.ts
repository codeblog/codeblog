import { flatMap } from "lodash";
import npa from "npm-package-arg";
import { basename, join } from "path";
import { findImports } from "./findImports";
import { transformMDX } from "./transformMDX";
import { runBabel } from "runBabel";

const PEER_DEPENDNENCIES = {
  react: ">=16.8.0",
  "@mdx-js/mdx": "1.0.8",
  "@mdx-js/react": "1.0.6"
};

const getJSFiles = files =>
  Object.keys(files).filter(key => basename(key).endsWith(".js"));

const getImportsFromPackage = pkg => {
  const jsFiles = getJSFiles(pkg);
  const moduleNames = jsFiles
    .map(name => basename(name, "js"))
    .map(string => string.substr(0, string.length - 1));

  return flatMap(moduleNames, moduleName =>
    findImports(pkg[moduleName + ".js"])
  );
};

const compileJSFiles = (pkg, skipFiles = ["index.js"], basePath?: string) => {
  const jsFiles = getJSFiles(pkg);

  return new Promise((resolve, reject) => {
    const output = {};

    Promise.all(
      jsFiles.map(file => {
        if (!skipFiles.includes(file)) {
          return runBabel(pkg[file], join(basePath, file)).then(
            code => (output[file] = code)
          );
        } else {
          return true;
        }
      })
    ).then(() => {
      resolve(output);
    });
  });
};

export const createPackageJSON = ({
  files,
  name,
  indexFileName,
  license,
  version,
  description,
  defaultImports,
  peerDependencies,
  website,
  dependencies = {}
}) => {
  const allImports = getImportsFromPackage(files);

  const _dependencies = { ...dependencies };
  [...defaultImports, ...allImports].forEach(importName => {
    if (PEER_DEPENDNENCIES[importName]) {
      return;
    }

    const depName = npa(importName).name;

    // TODO: make this lock a specific version
    if (!_dependencies[depName]) {
      _dependencies[depName] = "latest";
    }
  });

  return {
    name: npa(name).name,
    version,
    license,
    dependencies: _dependencies,
    browser: indexFileName,
    main: indexFileName,
    description,
    peerDependencies,
    website
  };
};

export const buildPackage = async ({
  files = {},
  indexFileName = "index.js",
  skipFiles,
  basePath,
  version,
  description,
  name,
  dependencies,
  defaultImports = [],
  peerDependencies = PEER_DEPENDNENCIES,
  website,
  license = "UNCLIENSED"
}: any) => {
  const jsFiles = await compileJSFiles(files, skipFiles, basePath);
  const _files = { ...files, ...(jsFiles || {}) };

  if (!_files["package.json"]) {
    _files["package.json"] = createPackageJSON({
      files: _files,
      dependencies,
      name,
      indexFileName,
      version,
      description,
      defaultImports,
      peerDependencies,
      website,
      license
    });
  }

  return _files;
};

export const buildPackageFromTemplate = ({ template, name, version }) => {
  const { files } = template;

  return buildPackage({
    files: files,
    defaultImports: [],
    basePath: "/node_modules/codeblog-template/",
    skipFiles: [],
    version,
    description:
      template.title ||
      template.description ||
      `Codeblog Template by @${template.author}`,
    website: `https://${template.author}.codeblog.com`,
    name
  });
};

export const buildPackageFromPost = async (
  { post, name, version },
  _runBabel = runBabel,
  dependencies
) => {
  const { body } = post;

  const code = await transformMDX(body, _runBabel, "/post/index.js");
  const files = post.files || {};

  return buildPackage({
    files: {
      ...files,
      "index.js": code,
      "post.mdx": body
    },
    dependencies,
    basePath: "/post/",
    skipFiles: ["index.js"],
    defaultImports: findImports(code),
    version,
    description: post.summary || post.title,
    website: post.url,
    name
  });
};
