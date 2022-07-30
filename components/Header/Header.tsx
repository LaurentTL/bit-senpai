import React, { FC } from 'react'
import Menu from '../Menu/Menu'

const Header: FC = () => {
  return (
    <header className='max-w-7xl z-50'>
      <Menu />
    </header>
  )
}

export default Header