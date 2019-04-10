import React from 'react'
import 'react-materialize';
import '../../App.css'

function Footer() {
    return (
        <div>
        <footer className="bg-dark text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} Martyria
    </footer>
    </div>
    )
}

export default Footer;
