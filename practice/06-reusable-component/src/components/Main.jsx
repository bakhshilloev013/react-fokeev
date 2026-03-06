import propTypes from 'prop-types';

function Main({ children }) {
  return (
    <main className="component-showcase">
      {children}
    </main>
  );
}

Main.propTypes = {
  children: propTypes.any,
};

export default Main;
