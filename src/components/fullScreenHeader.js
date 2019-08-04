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
        backgroundImage: `url('paper_spectrum.jpg')`,
      }}
    >
      <h1 style={{ margin: 0, marginBottom: '5px', color: 'white', paddingTop: '50vh', textAlign: 'center'}}>
        Full Stack Developer for Web, Cloud and Emerging Technologies
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
