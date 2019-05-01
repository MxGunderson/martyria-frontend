import React from 'react'
import 'react-materialize';
import '../../App.css'

function Footer() {
    return (
        <div>
        <footer className="text-white mt-5 p-10">
      Copyright &copy; {new Date().getFullYear()} Martyria
    </footer>
    </div>
    )
}

export default Footer;
