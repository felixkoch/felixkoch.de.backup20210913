import "../scss/styles.scss";

import Header from "./Header";
import Footer from "./Footer";

export default props => (
  <div>
    <Header title={props.title} noHeader={props.noHeader} />
    {props.children}
    <Footer stickyFooter={props.stickyFooter}/>
  </div>
)
