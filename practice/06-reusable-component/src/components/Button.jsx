import propTypes from 'prop-types'

function Button({
  text,
  icon,
  size = 'medium',
  variant = 'primary',
  fullWidth = false,
  isDisabled = false,
  onClick,
}) {
  return (
    <div
      disabled={isDisabled}
      className={`button ${variant} ${size} ${isDisabled ? 'disabled' : ''} ${fullWidth ? 'full-width' : ''}`}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {text}
    </div>
  );
}

export default Button;

Button.propTypes = {
    text: propTypes.string.isRequired,
    icon: propTypes.string,
    size: propTypes.oneOf(['small', 'medium', 'large']),
    variant: propTypes.string,
    fullWidth: propTypes.bool,
    isDisabled: propTypes.bool,
    onClick: propTypes.func
}

Button.defaultProps = {
    text: 'Some text'
}