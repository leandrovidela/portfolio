class Hero extends React.Component {
  showElements = elAniamte => {
    elAniamte.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("el-animate-show");
      }, i * 200);
    });
  };

  componentDidMount() {
    const elAniamte = document.querySelectorAll(".el-animate");
    setTimeout(() => {
      this.showElements(elAniamte);
    }, 1650);
  }

  render() {
    const [data] = this.props.lang;
    const { hero } = data;
    return (
      <div id="HeaderHero">
        <h1>{hero.title}</h1>
        <div className="HeaderHero__innerWrapper u-wrapper">
          <div className="HeaderHero__hello cont-grid">
            <span className="HeaderHero__hello__hi el-animate">{hero.hi}</span>
            <div className="g-item-am">
              {hero.am.map((el, i) => {
                return (
                  <span className="HeaderHero__hello__am el-animate" key={i}>
                    {el}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
