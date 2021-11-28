import React,{useState} from 'react'
import '../App.css';
import Cards from './Cards'


const Layout = () => {
  const [visible,setVisible]=useState(false);
  const showData=(e)=>{
    setVisible(true);
  }
  if(visible){
    return (
      <div className="layout">
        <Cards/>
      </div>
    )
  }
  return (
    <div className="layout">
       
      <button onClick={showData}>Get Users</button>
      </div>
  )
}

export default Layout
