import React from 'react'
import { AppBar as MaterialAppBar } from '@material-ui/core'

interface Props {
  
}

const AppBar: React.FC<Props> = ({ children }) => {
  return (
    <>
      <MaterialAppBar position="fixed">{children}</MaterialAppBar>
    </>
  );
}

export default AppBar
