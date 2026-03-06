import propTypes from 'prop-types';

function Section({ children, titleText }) {
  return (
    <section className="component-group">
      <h2>{titleText}</h2>
      <div className="component-card">{children}</div>
    </section>
  );
}

Section.propTypes = {
  children: propTypes.any,
  titleText: propTypes.string,
};

export default Section;
