import Link from "next/link";
import Router from "next/router";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.header = React.createRef();
    this.state = {
      hover: false,
      ruta: null
    };
  }

  componentDidMount() {
    this.setState({
      ruta: Router.router.route
    });
    setTimeout(() => {
      this.header.current.classList.add("show");
    }, 3200);
  }

  handleMouseEnter = () => {
    this.setState({
      hover: true
    });
  };

  handleMouseLeave = () => {
    this.setState({
      hover: false
    });
  };

  render() {
    return (
      <header className="Lang" ref={this.header}>
        <ul
          className={`Lang__menu menu ${
            this.state.hover ? "on-selecting" : ""
          }`}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <li className="menu__item">
            <Link href={this.state.ruta == "/" ? "/" : "/eng"}>
              <a
                className="menu__item__link lang-es"
                style={{ color: this.state.hover ? "#000" : "#fff" }}
              >
                {this.state.ruta == "/" ? "esp" : "eng"}
              </a>
            </Link>
          </li>
          <li className="menu__item">
            <Link href={this.state.ruta == "/" ? "/eng" : "/"} prefetch>
              <a
                className="menu__item__link lang-eng"
                style={{ color: this.state.hover ? "#fff" : "#000" }}
              >
                {this.state.ruta == "/" ? "eng" : "esp"}
              </a>
            </Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
