import React,{useState} from 'react';
import Dropdown from '../components/Dropdown/Dropdown';
// import "../components/Dropdown/dropdown.css"
import "./page.css";


const About = () => {
  const [selected, setSelected] = useState("")
  console.log(selected)
  return (
    <div className='about'>
      <Dropdown selected= {selected} setSelected={setSelected}/>
    </div>
  )
}

export default About
