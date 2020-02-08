import React from 'react'
import { Link as RouteLink } from 'react-router-dom'
import Typography from '../typography/Typography'

interface Props {
  to: string
}

const Link: React.FC<Props> = ({
  to,
  children
}) => {
  return (
    <Typography >
      <RouteLink to={to}>{children}</RouteLink>
      </Typography>
  )
}

export default Link
