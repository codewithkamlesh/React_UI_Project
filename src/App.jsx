import React, { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Rightbar from './component/Rightbar'
import Post from './component/Post'
import Sidebar from './component/Sidebar'
import { data,data2 } from './component/Data'



const App = () => {
  const [bgColor, setbgColor] = useState('#232D3f')
  const [color, setColor] = useState('white')
  const [toggle, setToggle] = useState(true)

  const toggleButton = () => {
    setToggle(!toggle)
    if (toggle){
      setbgColor("rgb(255,255,255)");
      setColor('black')
      document.querySelector('body').style.backgroundColor = "#cbc5c5"
    } else{
      setbgColor('#232D3f');
      setColor('white')
      document.querySelector('body').style.backgroundColor = "black";
    }
  }

  return (
    <>
    <Navbar bgcolor = {bgColor} color ={color} toggleButton = {toggleButton} toggle ={toggle}/>
    <div className="container">
    <div className="side_bar">
    <Sidebar bgColor = {bgColor} color ={color}/>
    </div>
    <div className="post_section">
      {data.map((d) => (
      
      <Post key={d.id} data={d} bgColor = {bgColor} color ={color}/>
      ))}
   
   
    </div>
    <div className="right_bar">
      {data2.map((d)=>(
   <Rightbar  key ={d.id} data = {d} bgColor = {bgColor} color ={color}/>
      ))}
 
    </div>
    </div>
    
    </>
  )
}

export default App