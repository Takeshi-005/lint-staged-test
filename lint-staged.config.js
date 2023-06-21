module.exports = {
  '**/*.ts': (fileNames) => [
    `tsc --noEmit ${fileNames.join(" ")}`
  ]
}
