import Head from "next/head";
import Link from "next/link";

export default props => (
  <div className="container">
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900"
        rel="stylesheet"
      />
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.7.1/js/all.js"
        integrity="sha384-eVEQC9zshBn0rFj4+TU78eNA19HMNigMviK/PU/FFjLXqa/GKPgX58rvt5Z8PLs7"
        crossOrigin="anonymous"
      />
      <meta
        name="viewport"
        content="width=device-width, height=device-height, initial-scale=1"
      />
      <title>{props.title}</title>
    </Head>

    {props.noHeader || (
      <div className="mt-4 mb-2">
        <Link href="/" prefetch>
          <a className="text-dark">
            <i className="fas fa-arrow-left" />
          </a>
        </Link>
      </div>
    )}
  </div>
);
