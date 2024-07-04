import React from 'react'


function NavBar(props) {
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">TextModifier</a>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            {/*<li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
            */}
           
          </ul>
          
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:(props.mode==='light'?'black':'white')}}>Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
