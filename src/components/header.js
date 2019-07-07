import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header id='header'
    style={{
      background: `black`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `10px 0px 2px 20px`
      }}
    >
      <h1 style={{ margin: 0, marginBottom: '5px' }}>
        <a style={linkStyle}
          href="/"
        >
          {siteTitle}
        </a>
        <div style={smallLinkStyle}>
          <a style={linkStyle} href="#about">
            About
          </a>
          <a style={linkStyle} href="#experience">
            Experience
          </a>  
          <a style={linkStyleEnd} href="#skills">
            Skills
          </a>   
        </div>     
      </h1>
    </div>
  </header>
)

const linkStyle = {
  marginRight: '40px',
  color: 'white',
  textDecoration: 'none'
};

const linkStyleEnd = {
  marginRight: '20px',
  color: 'white',
  textDecoration: 'none'
};

const smallLinkStyle = {
  margin: '0px',
  fontSize: '20px',
  float: 'right',
  width: '50%',
  textAlign: 'right',
  paddingTop: '9px'
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
