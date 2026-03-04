function Button({
  text = 'Some text',
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
