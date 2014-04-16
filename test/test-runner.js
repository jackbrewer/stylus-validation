var testRunnerConfig = {
  describe: 'Stylus Validation',
  testDirPath: './test',
  stylus: {
    use: require('../lib/stylus-validation')(),
    import: '../index.styl'
  }
}

require('stylus-test-runner')(testRunnerConfig)
