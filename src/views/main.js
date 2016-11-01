const html = require('choo/html')

const header = require('components/header')

module.exports = (state, prev, send) => {
  return html `
    <div>
      ${header()}
    </div>
  `
}
