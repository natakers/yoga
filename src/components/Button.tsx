import React from "react"

const Button = ({title}: ButtonProps) => {
  return <button>{title}</button>

}

export default Button

interface ButtonProps {
  title: string,
  onClick?: void
}