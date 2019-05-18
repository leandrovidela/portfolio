const Works = props => {
  const { works, ruta } = props;

  return (
    <section id="Wokrs" className="Works">
      <div className="u-wrapper">
        <article className="Works__description">
          <h2 className="g-title">{ruta == "/" ? "Trabajos." : "Projects."}</h2>
          <ul className="Works__menu cont-grid">
            {works.map((item, i) => {
              return (
                <li className="Works__menu__item" key={i}>
                  <a
                    className="Works__menu__link to-work"
                    href={item.href}
                    target="_blank"
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Works;
