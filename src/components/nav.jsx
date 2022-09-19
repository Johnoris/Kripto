import React from 'react'

const Nav = () => {
  return (
    <nav>
        <span><img src={require('../assets/logo.png')} alt=""/></span>
        <div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Wallet</a></li>
            <li><a href="#">Market</a></li>
            <li><a href="#">Trade</a></li>
          </ul>
          <button>Login</button>
        </div>
    </nav>
  )
}

export default Nav