import React from 'react'
import { PageHeader, Divider } from 'antd'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <PageHeader
            title='Source list' 
            ghost={false}
        />
        <Divider />
    </div>
  )
}

export default Header