import PropTypes from "prop-types"
import React from "react"

const fullScreenHeader = () => (
  <header id='fullscreenheader'
    style={{
      background: `black`,
      marginBottom: `1.25rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        height: `100vh`,
        padding: `10px 0px 2px 20px`
      }}
    >
      <h1 style={{ margin: 0, marginBottom: '5px', color: 'white', paddingTop: '50vh', paddingLeft: '33vw' }}>
        This is my portfolio
      </h1>
    </div>
  </header>
)

fullScreenHeader.propTypes = {
  siteTitle: PropTypes.string,
}

fullScreenHeader.defaultProps = {
  siteTitle: ``,
}

export default fullScreenHeader
