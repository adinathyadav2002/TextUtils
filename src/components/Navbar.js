import React from 'react'
// have to import this to use propTypes
// import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.navMode} >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <div className="form-check form-switch mx-1" style={{ display:"flex", alignItems:"center"} }>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  defaultChecked=""
                  style={{cursor:'pointer'}}
                  onClick={()=>{
                    if(props.navMode==='light'){
                      props.turnDark()
                    }else {
                      props.turnLight()
                    }
                  }}
                />
                <label className="form-check-label mx-1" htmlFor="flexSwitchCheckChecked" style={{cursor:'pointer', color:props.butStyle}}>Enable Dark Mode
                </label>
              </div>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>

      </nav>
    </>
  );
}
