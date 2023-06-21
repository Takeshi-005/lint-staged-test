module.exports = {
  '**/*.ts': (fileNames) => [
    `tsc --noEmit -strict ${fileNames.join(" ")}`
  ]
}
