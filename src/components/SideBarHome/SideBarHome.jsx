import React from 'react'
import Blog from '../../pages/Blog/Blog'
import "./SideBarHome.css"

const SideBarHome = () => {
  return (
    <div className='sidebar'>
       <Blog />
       <div className='side-bar-home'>
        SideBarHome
       </div>
    </div>
  )
}

export default SideBarHome