#!/usr/bin/env node

const fs = require("fs");
const args = process.argv;
const path = args[args.length - 1];

if (args.length < 3 || !fs.existsSync(path) || !path.endsWith(".bfd")) {
  throw console.error("Please specify a valid file path.");
}

console.log(path);

// TODO:
// Remove comments
// Remove parentheses
// Parse code
