const loader = require('loader-utils')
const loaderSchema = require('../hy-schema/loader01_schema.json')
const { validate } = require('schema-utils')

module.exports = function(content, map, meta) {
  
  console.log('hy_loader01', content)
  const options = this.getOptions()
  validate(loaderSchema, options)

  return content + "ccc"
}

// module.exports.pitch = function(content, map, meta) {
//   console.log('hy_loader01 pitch', content, map, meta)
// }
