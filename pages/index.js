import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Works from "../components/Works";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import fetch from "isomorphic-fetch";
import Router from "next/router";
import data from "../data.json";

class HomeEsp extends React.Component {
  /* static async getInitialProps({ res }) {
    var misCabeceras = new Headers();

    var miInit = {
      method: "GET",
      headers: misCabeceras,
      mode: "no-cors",
      cache: "default"
    };
    try {
      let req = await fetch("http://leandrovidela.com/data/data.json", miInit);
      let { esp, works, contact } = await req.json();

      return { esp, works, contact, statusCode: req.status };
    } catch (error) {
      res.statusCode = 503;
      return { esp: null, works: null, contact: null, statusCode: 503 };
    }
  } */
  state = {
    ruta: null
  };

  componentDidMount() {
    this.setState({
      ruta: Router.router.route
    });
  }
  render() {
    //const { esp, works, contact, statusCode } = this.props;
    const { esp, works, contact, skills } = data;
    const { ruta } = this.state;

    return (
      <Layout title="Desarrollador Frontend">
        <Hero lang={esp} />
        <Works works={works} ruta={ruta} />
        <Skills skills={skills} ruta={ruta} />
        <Contact contact={contact} ruta={ruta} />
      </Layout>
    );
  }
}

export default HomeEsp;
