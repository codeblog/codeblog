# remark-mdx-to-plain-text

[![Downloads][downloads-badge]][downloads]

Remove MDX formatting with [**remark**][remark]. This essentially removes
everything but paragraphs and text nodes.

This plugin is a fork of https://github.com/remarkjs/strip-markdown, but for MDX. It completely removes `jsx`, `import`, and `export` nodes, leaving you with the text in the mdx file.

## Installation

[npm][]:

```bash
npm install remark-mdx-to-plain-text remark-mdx
```

**You'll need to have `remark-mdx` installed for this to work.**

## Usage

```javascript
let remark = require('remark')
let mdx = require('remark-mdx')
let strip = require('remark-mdx-to-plain-text')

let sample = [
  "import Bagel from './bagel';",
  'Some _emphasis_, **importance**, and `code`.',
  '<Bagel />'
].join('\n')

remark()
  .use(mdx)
  .use(strip)
  .process(sample, function(err, file) {
    if (err) throw err
    console.log(String(file))
  })
```

Yields:

```text
Some emphasis, importance, and code.
```

You might want to call `.trim()` on the result, since this can leave empty lines. It doesn't do that automatically because this shouldn't quite so opinioniated.

## API

### `remark().use(mdx).use(strip)`

Modifies **remark** to expose plain-text.

- Removes `jsx`, 'import', 'export', `code`, `horizontalRule`, `table`, `yaml`, `toml`, and their
  content
- Render everything else as simple paragraphs without formatting
- Uses `alt` text for images

## License

[MIT][license] © [Jarred Sumner][author]
