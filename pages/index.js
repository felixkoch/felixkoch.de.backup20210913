import "../scss/styles.scss";

import Head from "next/head";
import Link from "next/link";

export default () => (
  <div>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet"
      />
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.7.1/js/all.js"
        integrity="sha384-eVEQC9zshBn0rFj4+TU78eNA19HMNigMviK/PU/FFjLXqa/GKPgX58rvt5Z8PLs7"
        crossorigin="anonymous"
      />

      <title>Felix Koch</title>
    </Head>
    <div className="container">
      <div className="d-md-flex justify-content-center">
        <div className="p-3">
          <img
            src="/static/web.jpg"
            alt="Felix Koch"
            className="rounded-circle profilbild"
          />
        </div>
        <div className="p-3">
          <h1>
            Felix Koch
            <br />
            <small className="text-muted">Vater, Entwickler, Imker</small>
          </h1>
          <div className="d-flex">
            <a href="https://github.com/felixkoch" className="mr-4">
              <i class="fab fa-github mr-2" />
              GitHub
            </a>

            <a href="https://www.xing.com/profile/Felix_Koch80/">
              <i class="fab fa-xing mr-2" />
              XING
            </a>
          </div>
        </div>
      </div>
    </div>

    <footer className="fixed-bottom">
      <div className="container">
        <div className="d-flex p-2 justify-content-end small">
          <Link href="/impressum">
            <a className="mr-4 text-muted">Impressum</a>
          </Link>
          <Link href="/datenschutz">
            <a className="text-muted">Datenschutz</a>
          </Link>
        </div>
      </div>
    </footer>
  </div>
);
