import propTypes from 'prop-types';

function Button({
    text,
    //   icon,
    size = 'medium',
    variant = 'primary',
    fullWidth = false,
    isDisabled = false,
    onClick,
    children,
}) {
    return (
        <div
            disabled={isDisabled}
            className={`button ${variant} ${size} ${isDisabled ? 'disabled' : ''} ${fullWidth ? 'full-width' : ''}`}
            onClick={onClick}
        >
            {/* {icon && <span>{icon}</span>} */}
            {children}
        </div>
    );
}

export default Button;

Button.propTypes = {
    text: propTypes.string.isRequired,
    // icon: propTypes.string,
    size: propTypes.oneOf(['small', 'medium', 'large']),
    variant: propTypes.string,
    fullWidth: propTypes.bool,
    isDisabled: propTypes.bool,
    onClick: propTypes.func,
    children: propTypes.any,
};

// Button.defaultProps = {
//     text: 'Some text'
// }
