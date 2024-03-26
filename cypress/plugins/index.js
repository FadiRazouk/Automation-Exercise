const { removeDirectory } = require('cypress-delete-downloads-folder');

module.exports = (on, config) => {
  on('task', { removeDirectory })
}