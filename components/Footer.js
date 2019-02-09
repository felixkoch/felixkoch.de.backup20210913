import Link from "next/link";

export default (props) => (
  <footer className={props.stickyFooter ? "fixed-bottom" : ""}>
    <div className="container">
      <div className="d-flex p-2 justify-content-end small">
        <Link prefetch href="/impressum">
          <a className="mr-4 text-muted">Impressum</a>
        </Link>
        <Link prefetch href="/datenschutz">
          <a className="text-muted">Datenschutz</a>
        </Link>
      </div>
    </div>
  </footer>
)
