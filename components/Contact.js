const Contact = props => {
  const { contact, ruta } = props;

  return (
    <footer className="Contact">
      <div className="u-wrapper">
        <h2 className="g-title">
          {ruta == "/" ? "Estemos en contacto." : "Let's be in touch."}
        </h2>
        <ul className="Contact__menu-list cont-grid">
          {contact.map((el, i) => {
            return (
              <li key={i} className="Contact__menu-item">
                {el.href ? <a href={el.href}>{el.item}</a> : el.item}
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Contact;
