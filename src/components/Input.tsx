import React from "react"

const Input = ({title, type, htmlFor}: InputProps) => {
  return (
    <div className="input">
      <label htmlFor={htmlFor}>{title}</label>
      <input type={type} name={htmlFor} id={htmlFor} />
    </div>
  )

}

export default Input

interface InputProps {
  title: string,
  htmlFor: string,
  type: string
  onChange?: void
}