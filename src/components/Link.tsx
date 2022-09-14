import React from "react"

const Link = ({title, href}: LinkProps) => {
  return (
    <a href={href}>{title}</a>
  )

}

export default Link

interface LinkProps {
  title: string,
  href: string,
  onChange?: void
}