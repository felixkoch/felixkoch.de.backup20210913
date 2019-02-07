import "../scss/styles.scss";

import Header from "./Header";
import Footer from "./Footer";

export default props => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
)
