import "./style.css";

const Section = ({ title, content, extraHeadercontent }) => (
  <section className="section">
    <header className="section__header">
      <h2 className="section__title">{title}</h2>
      {extraHeadercontent}
    </header>
    <div className="section__content">{content}</div>
  </section>
);

export default Section;
