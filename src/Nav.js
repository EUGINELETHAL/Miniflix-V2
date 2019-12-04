import React from 'react'
import './App.css'
import './App.css'
const Nav = () => {
  return (
    <React.Fragment>
    <header className="clearfix">
        <nav className="navbar navbar-default">
          <div className="container">            
            <ul className="nav navbar-nav">    
              <li><a href="" className="navbar-brand">Miniflix</a></li>          
              <li><a href="">Home</a></li>
              <li><a href="">Browse</a></li>
             
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <div className="inset">
                  <img src="http://rs775.pbsrc.com/albums/yy35/PhoenyxStar/link-1.jpg~c200"/>
                </div>
              </li>
            </ul>
          </div>
        </nav>
    </header>
    </React.Fragment>
  )
}

export default Nav
