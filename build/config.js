const path = require('path')
// eslint-disable-next-line import/no-extraneous-dependencies
const Rupture = require('rupture')

// path
const context = path.resolve(__dirname, '../')
const assets = path.resolve(context, 'src/assets')
const project = path.resolve(context, 'src')
const output = path.resolve(context, 'dist')
const public = path.resolve(context, 'public')

const common = {
  path: {
    assets,
    project,
    output,
    context,
    public,
    tsconfig: path.resolve(context, 'tsconfig.json'),
  },
  stylus: {
    plugins: [Rupture()],
  },
  gzip: false,
  analyzer: false,
  workerpool: {
    workers: require('os').cpus().length - 1,
    poolTimeout: process.env.NODE_ENV === 'development' ? Infinity : 2000,
  },
}

module.exports = common
