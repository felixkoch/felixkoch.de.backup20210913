import Link from "next/link";

export default () => (
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
)
