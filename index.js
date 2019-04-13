const { html, render, map } = require("./util");

function value() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Human");
    }, 500);
  });
}

function list() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["toy", "bed", "chair"]);
    }, 500);
  });
}

function Page({ children }) {
  return html`
    <html>
      <head>
        <title>Serverless Pre-Rendering Demo</title>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <link rel="stylesheet" href="/main.css" />
      </head>
      <body>
        <div id="wrapper">${children}</div>
      </body>
    </html>
  `;
}

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
  res.end(
    `<!doctype html>` +
      (await render(
        html`
        <${Page}>
          <section class="intro">
            <header>
              <h1>Paradigm Shift</h1>
              <p>A free responsive site template designed by <a href="https://twitter.com/ajlkn">@ajlkn</a> / <a href="https://html5up.net">HTML5 UP</a></p>
              <ul class="actions">
                <li><a href="#first" class="arrow scrolly"><span class="label">Next</span></a></li>
              </ul>
            </header>
            <div class="content">
              <span class="image fill" data-position="center"><img src="images/pic01.jpg" alt="" /></span>
            </div>
          </section>
          <section id="first">
            <header>
              <h2>Magna sed nullam nisl adipiscing</h2>
            </header>
            <div class="content">
              <p><strong>Lorem ipsum dolor</strong> sit amet consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor amet fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies condimentum. Magna sed etiam consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et dolor libero, feugiat magna tempus, sed et lorem adipiscing.</p>
              <span class="image main"><img src="images/pic02.jpg" alt="" /></span>
            </div>
          </section>
          <section>
            <header>
              <h2>Feugiat consequat tempus ultrices</h2>
            </header>
            <div class="content">
              <p><strong>Etiam tristique libero</strong> eu nibh porttitor amet fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies condimentum.</p>
              <ul class="feature-icons">
                <li class="icon fa-laptop">Consequat tempus</li>
                <li class="icon fa-bolt">Etiam adipiscing</li>
                <li class="icon fa-signal">Libero nullam</li>
                <li class="icon fa-gear">Blandit condimentum</li>
                <li class="icon fa-map-marker">Lorem ipsum dolor</li>
                <li class="icon fa-code">Nibh amet venenatis</li>
              </ul>
              <p>Vehicula ultrices sed ultricies condimentum. Magna sed etiam consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et dolor libero, feugiat magna tempus, sed et lorem adipiscing.</p>
            </div>
          </section>
          <section>
            <header>
              <h2>Ultrices erat magna sed condimentum</h2>
            </header>
            <div class="content">
              <p><strong>Integer mollis egestas</strong> nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
              <section>
                <header>
                  <h3>Erat aliquam</h3>
                  <p>Vehicula ultrices dolor amet ultricies et condimentum. Magna sed etiam consequat, et lorem adipiscing sed dolor sit amet, consectetur amet do eiusmod tempor incididunt  ipsum suspendisse ultrices gravida.</p>
                </header>
                <div class="content">
                  <div class="gallery">
                    <a href="images/gallery/fulls/01.jpg" class="landscape"><img src="images/gallery/thumbs/01.jpg" alt="" /></a>
                    <a href="images/gallery/fulls/02.jpg"><img src="images/gallery/thumbs/02.jpg" alt="" /></a>
                    <a href="images/gallery/fulls/03.jpg"><img src="images/gallery/thumbs/03.jpg" alt="" /></a>
                    <a href="images/gallery/fulls/04.jpg" class="landscape"><img src="images/gallery/thumbs/04.jpg" alt="" /></a>
                  </div>
                </div>
              </section>
              <section>
                <header>
                  <h3>Nisl consequat</h3>
                  <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam sed facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet mauris. Ut magna finibus nisi nec lacinia ipsum maximus.</p>
                </header>
                <div class="content">
                  <div class="gallery">
                    <a href="images/gallery/fulls/05.jpg" class="landscape"><img src="images/gallery/thumbs/05.jpg" alt="" /></a>
                    <a href="images/gallery/fulls/06.jpg"><img src="images/gallery/thumbs/06.jpg" alt="" /></a>
                    <a href="images/gallery/fulls/07.jpg"><img src="images/gallery/thumbs/07.jpg" alt="" /></a>
                  </div>
                </div>
              </section>
              <section>
                <header>
                  <h3>Lorem gravida</h3>
                  <p>Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aenean ornare velit lacus, ac varius sed enim lorem ullamcorper dolore.  ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis.</p>
                </header>
                <div class="content">
                  <div class="gallery">
                    <a href="images/gallery/fulls/08.jpg" class="portrait"><img src="images/gallery/thumbs/08.jpg" alt="" /></a>
                    <a href="images/gallery/fulls/09.jpg" class="portrait"><img src="images/gallery/thumbs/09.jpg" alt="" /></a>
                    <a href="images/gallery/fulls/10.jpg" class="landscape"><img src="images/gallery/thumbs/10.jpg" alt="" /></a>
                  </div>
                </div>
              </section>
            </div>
          </section>
          <section>
            <header>
              <h2>Duis sed adpiscing veroeros amet</h2>
            </header>
            <div class="content">
              <p><strong>Proin tempus feugiat</strong> sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.</p>
              <ul class="actions">
                <li><a href="#" class="button primary large">Get Started</a></li>
                <li><a href="#" class="button large">Learn More</a></li>
              </ul>
            </div>
          </section>
          <div class="copyright">Created by <a href="https://zeit.co" target="_blank">ZEIT</a> &mdash; Template Design by: <a href="https://html5up.net/license">HTML5 UP</a>.</div>
        <//>
      `
      ))
  );
};
