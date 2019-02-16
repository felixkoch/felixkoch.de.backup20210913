import "../scss/styles.scss";

import Header from "./Header";
import Footer from "./Footer";

import ReactGA from 'react-ga';
ReactGA.initialize('UA-134614561-1');
ReactGA.pageview("/");

export default props => (
  <div>
    <Header title={props.title} noHeader={props.noHeader} />
    {props.children}
    <Footer stickyFooter={props.stickyFooter}/>
  </div>
)
