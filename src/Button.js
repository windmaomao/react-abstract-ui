import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ Style, children, ...props }) => (
  <Style {...props}>
    {children}
  </Style>
)

Button.propTypes = {
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  outlined: PropTypes.bool,
  text: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
}

Button.defaultProps = {
  block: false,
  disabled: false,
  outlined: false,
  text: false,
  className: '',
  color: 'primary',
  size: 'md'
}

export default Button