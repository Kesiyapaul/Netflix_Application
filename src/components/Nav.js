import React, { useState,useEffect } from 'react'
import "../components/Nav.css"
function Nav() {
    const [show, setShow] = useState(false)

    useEffect(() => {
      window.addEventListener("scroll",() => {
        if(window.scrollY > 100){
            setShow(true) 
        }
        else setShow(false)
      })
      return () => window.removeEventListener("scroll",() => { })
    }, [])
    
  return (
    <div className={`nav ${ show && "nav_black"}`}>
        <img className='logo'
        src='https://i.postimg.cc/fRBJkYz2/net.png'
        alt='netflix logo'/>
    </div>
  )
}

export default Nav