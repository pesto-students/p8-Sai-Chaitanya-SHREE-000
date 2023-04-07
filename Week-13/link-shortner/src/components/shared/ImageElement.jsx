import React from 'react'
import PropTypes from 'prop-types';

export const ImageElement = ({
    alt,
    src,
}) => {
  return (
    <img 
    src={src}
    alt={alt}
    />
  )
}

ImageElement.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
}
