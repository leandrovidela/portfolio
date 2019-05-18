import Head from "next/head";
import Header from "./Header";
import Grid from "./Grid";
import Loader from "./Loader";
import "../sass/main.sass";

class Layout extends React.Component {
  render() {
    const { children, title } = this.props;
    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no"
          />
          <title>Leandro Videla - {title}</title>
        </Head>
        <Loader />
        <Header />
        <Grid />
        {children}
      </React.Fragment>
    );
  }
}

export default Layout;
