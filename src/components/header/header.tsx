import React from "react"
import "./header.css"

const Header: React.FC = () => {
  console.log("Header rendered")

  return (
    <header className="header">
      <h1 className="header-title">Welcome to My Website</h1>
      <nav className="header-nav">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
