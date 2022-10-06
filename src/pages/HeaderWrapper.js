import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../components/Header/Header'

function HeaderWrapper({search, setSearch}) {
  return (
    <div>
        <Header search={search} setSearch={setSearch}/>
        <Outlet />
    </div>
  )
}

export default HeaderWrapper