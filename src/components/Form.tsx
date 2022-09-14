import React from "react"
import Link from "./Link"

const Form = ({title, description, children}: FormProps) => {
  return (
  <div className="form">
    <h5>{title}</h5>
    <div>{description}<Link href="signup" title="Sign Up"></Link></div>
    {children}
  </div>
  )

}

export default Form

interface FormProps {
  title: string,
  description: string,
  children?: Array<JSX.Element>,
  onClick?: void
}