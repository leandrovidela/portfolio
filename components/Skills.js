const Skills = props => {
  const { skills, ruta } = props;
  return (
    <section className="Skills">
      <div className="u-wrapper">
        <article className="Skills__description">
          <h2 className="g-title">{ruta == "/" ? "Habilidades" : "Skills"}</h2>
        </article>
        <ul className="Skills__list cont-grid">
          {skills.map((el, i) => {
            return (
              <li className="Skills__list__item" key={i}>
                {el}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
