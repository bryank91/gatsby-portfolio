import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.25rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `10px 0px 2px 20px`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link style={linkStyle}
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h4>
      <Link style={linkStyle} to="#about">
          About
      </Link>
      <Link style={linkStyle} to="#experience">
          Experience
        </Link>  
      <Link style={linkStyle} to="#projects">
          Projects
        </Link>
      </h4>
    </div>
  </header>
)

const linkStyle = {
  marginRight: '20px',
  color: 'white',
  textDecoration: 'none'
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
