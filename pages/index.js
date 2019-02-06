import "../scss/styles.scss";

import Head from "next/head";
import Link from 'next/link'

export default () => (
  <div>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet"
      />
      <title>Felix Koch</title>
    </Head>
    <div class="container">
      <h1>
        Felix Koch
        <br />
        <small class="text-muted">Vater, Entwickler, Imker</small>
      </h1>
      <p>
        <Link ><a href="">GutHub</a></Link>
        <br />
        Xing
      </p>
      
    </div>

    <footer class="fixed-bottom"><div className="container">Impressum Datenschutz</div></footer>
  </div>
);
