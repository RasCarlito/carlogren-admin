const html = require('choo/html')

module.exports = () => {
  return html `
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Carl Ogren
          </h1>
          <h2 class="subtitle">
            Admin
          </h2>
        </div>
      </div>
    </section>
  `
}
