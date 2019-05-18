class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.loader = React.createRef();
    this.state = {
      body: null
    };
  }

  componentDidMount() {
    this.setState({
      body: document.querySelector("body")
    });
    setTimeout(() => {
      this.loader.current.style.visibility = "hidden";
      this.loader.current.style.opacity = "0";
      this.state.body.style.overflow = "visible";
    }, 1500);
  }

  componentWillUnmount() {
    this.state.body.style.overflow = "hidden";
  }

  render() {
    return (
      <div className="Loader" ref={this.loader}>
        <div className="lds-roller">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}

export default Loader;
