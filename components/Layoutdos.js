import Layout from "./Layout";

class LayoutDos extends React.Component {
  render() {
    const { children } = this.props;
    return <Layout>{children}</Layout>;
  }
}

export default LayoutDos;
