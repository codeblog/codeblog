import { Module } from "commonjs-standalone";
const delegate = require("./delegate");

const cache = {};
const mod = new Module("codeblog-previewer", delegate, cache);

module.exports = mod.env().require;
