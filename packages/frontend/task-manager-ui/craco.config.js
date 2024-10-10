const path = require('path');
const dotEnv = require('dotenv');
dotEnv.config({
  path: './development.env'
});

module.exports = {
    webpack: {
      configure: (config, { paths }) => {
        config.mode = 'development';
        config.entry = './src/index.js';
        const buildPath = process.env.BUILD_PATH || paths.appBuild;
        config.output.publicPath = 'auto';
        config.output.filename = 'static/js/[name].js';
        paths.appBuild = config.output.path = path.resolve(__dirname, buildPath);
        /*config.optimization = {
          splitChunks: {
            chunks: 'all'
          }
        };*/
        return config;
      }
    },
    style: {

    },
    eslint: {

    },
    typescript: {

    },
    jest: {
      configure: (jestConfig) => {
        jestConfig.moduleDirectories = ['node_modules'];
        jestConfig.collectCoverage = true;
        jestConfig.coverageDirectory = 'results/coverage';
        jestConfig.collectCoverageFrom = [
          '<rootDir>/src/components/**/*.{js, jsx}'
        ];
        jestConfig.reporters = [
          'default',
          ['jest-stare', {
            resultDir: 'results/jest-stare',
            reportHeadline: 'MFE Shopping list',
            reportTitle: 'Unit Test Report',
            coverageLink: '../coverage/lcov-report/index.html',
            jestStareConfigJson: 'jest-stare.json',
            jestGlobalConfigJson: 'globalStuff.json'
          }]
        ]
        jestConfig.transform = {
          '^.+\\.(js|jsx)$': 'babel-jest'
        };
        jestConfig.setupFilesAfterEnv= ["<rootDir>src/setupTests.js"];
        jestConfig.transformIgnorePatterns= ['/node_modules/', '/setupTests.js/'];
        jestConfig.moduleFileExtensions = ['js', 'ts', 'jsx', 'tsx', 'json', 'node', 'mjs', 'cjs'];
        return jestConfig;
      }
    },
    devServer: {

    }
};