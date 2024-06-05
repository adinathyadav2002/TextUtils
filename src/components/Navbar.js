import React from 'react'
// have to import this to use propTypes
// import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg " style={{backgroundColor:props.navMode.bgColor,borderBottom:"1px solid black" ,borderColor:props.navMode.borColor}} >
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{color:props.navMode.color}}>
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
                <a className="nav-link active" aria-current="page" href="/"  style={{color:props.navMode.color}}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/"  style={{color:props.navMode.color}}>
                  About
                </a>
              </li>
              <div className="form-check form-switch mx-1" style={{ display:"flex", alignItems:"center"} }>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="dark-button"
                  defaultChecked=""
                  style={{cursor:'pointer'}}
                  onClick={()=>{
                    if(props.navMode.bgColor==='white'){
                      props.turnDark()
                    }else {
                      props.turnLight()
                    }
                  }}
                />
                <label className="form-check-label mx-1" htmlFor="dark-button" style={{cursor:'pointer', color:props.butStyle, color:props.navMode.color}}>Dark Mode
                </label>
              </div>
              <div className="form-check form-switch mx-1" style={{ display:"flex", alignItems:"center"} }>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="green-button"
                  defaultChecked=""
                  style={{cursor:'pointer'}}
                  onClick={()=>{
                    if(props.navMode.bgColor==='white'){
                      props.turnGreen()
                    }else {
                      props.turnLight()
                    }
                  }}
                />
                <label className="form-check-label mx-1" htmlFor="green-button" style={{cursor:'pointer', color:props.butStyle,color:props.navMode.color}}>Green Mode
                </label>
              </div>
              <div className="form-check form-switch mx-1" style={{ display:"flex", alignItems:"center"} }>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="blue-button"
                  defaultChecked=""
                  style={{cursor:'pointer'}}
                  onClick={()=>{
                    if(props.navMode.bgColor==='white'){
                      props.turnBlue()
                    }else {
                      props.turnLight()
                    }
                  }}
                />
                <label className="form-check-label mx-1" htmlFor="blue-button" style={{cursor:'pointer', color:props.navMode.color}}>Blue Mode
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
