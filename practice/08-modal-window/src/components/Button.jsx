
function Button({classList, onClick, children}) {
  return (
    <button className={classList} onClick={onClick}>{children}</button>
  )
}

export default Button