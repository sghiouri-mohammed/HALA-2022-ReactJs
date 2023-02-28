import '../assets/styles/nav.css'
import React, {useState, useEffect} from 'react'
import { FaAlignJustify } from "react-icons/fa";
import Logon from '../images/logon.png'

export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

  }, [])

  return (
    <nav className='navo'>
    <img className='imaima' src={Logon} width={68} />
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list ">
            <li className='li-interne'><a href="/" className=' '>Home</a></li>           
            <li className='li-interne'> <a href="/translate" className=' '> Hala 22 Translate</a> </li>
            <li className='li-interne'> <a href="/hotels" className=' '> Hotels</a></li>
            <li className='li-interne'> <a href="/restaurants" className=' '> Restaurants</a></li>
            <li className='li-interne'> <a href="/weather" className=' '> Weather </a></li>
            <li className='li-interne'> <a href="/metro" className=' '> Metro </a></li>
            <li className='li-interne'> <a href="/worldcup" className=' '> World Cup</a></li>
            <li className='li-interne'> <a href="/game" className=' '> Play a game</a></li>
        </ul>
      )}

      

      <button onClick={toggleNav} className="btn togg"><FaAlignJustify/> </button>

    </nav>
    
  )
}