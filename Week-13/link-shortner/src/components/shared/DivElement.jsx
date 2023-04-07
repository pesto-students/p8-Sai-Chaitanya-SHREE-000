import React from 'react'
import PropTypes from 'prop-types';

export const DivElement = ({
    style = {},
    textElem = "",
}) => {
  return (
    <div style={style}>{textElem}</div>
  )
}

DivElement.propTypes = {
    style: PropTypes.object,
    textElem: PropTypes.string,
}


