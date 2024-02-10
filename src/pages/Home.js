import React from 'react'
import Sidebar from "../components/Sidebar"
import DataGrid from '../components/DataGrid'
import "../style/Home.css"

const Home = () => {
  return (
    <div className='homemaincontainer'>
      <Sidebar/>
      <DataGrid/>
    </div>
  )
}

export default Home