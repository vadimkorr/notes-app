import './Button.css'

export const Button = ({ onClick, children, className }) => {
  const handleClick = () => {
    onClick()
  }
  return (
    <button
      className={`button__button ${className}`}
      type="button"
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
