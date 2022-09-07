import React from 'react'
import '../styles/footer.css'

const Footer = () => {
    const current = new Date()
    let year = current.getFullYear()

  return (
    <footer>
        <span>copyright &copy; {year}</span>
    </footer>
  )
}

export default Footer