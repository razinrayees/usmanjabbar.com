type ButtonProps = {
  children: string;
  textColor: string;
  bgColor: string;
};

const Button = ({
  children: btnText,
  textColor,
  bgColor
}: ButtonProps) => {
  return (
    <button className="btn" style={{
      background: bgColor,
      color: textColor,
      borderRadius: '1rem',
      padding: '1.25rem 2rem',
      margin: '1rem 0',
      width: 'fit-content',
      cursor: 'pointer'
    }}>{btnText}</button>
  )
}

Button.defaultProps = {
  children: ''
}

export default Button;
