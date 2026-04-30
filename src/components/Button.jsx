export const Button = ({ className = '', type = 'button', children }) => {
  return (
    <button className={`button ${className}`} type={type}>{children}</button>
  )
}