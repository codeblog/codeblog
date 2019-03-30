import { Module } from "commonjs-standalone";
import { DevelopmentErrorBoundary } from "react-error-guard";

const delegate = require("./delegate");

const cache = {};
const mod = new Module("codeblog-previewer", delegate, cache);

module.exports = mod.env().require;
