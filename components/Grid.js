class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.grid = React.createRef();
  }

  componentDidMount() {
    this.timeOutID = setTimeout(() => {
      this.grid.current.style.transition =
        "transform 1.2s cubic-bezier(0.22, 0.88, 0.76, 0.98) ";
      this.grid.current.style.transform = "translate3d(0, 0, 0)";
    }, 1800);
  }

  componentWillUnmount() {
    clearInterval(this.timeOutID);
  }

  render() {
    return (
      <div className="grid">
        <div className={`u-wrapper grid__g-container`} ref={this.grid}>
          <div className="grid__item-line" />
          <div className="grid__item-line" />
          <div className="grid__item-line" />
          <div className="grid__item-line" />
          <div className="grid__item-line" />
          <div className="grid__item-line" />
        </div>
      </div>
    );
  }
}

export default Grid;
