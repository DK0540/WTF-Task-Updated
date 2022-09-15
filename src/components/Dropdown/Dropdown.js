import React, {useState} from 'react';
import "./dropdown.css";

const Dropdown = ({allUsers, setUsers}) => {
 const [isActive, setIsActive] = useState(false)
 const [selected, setSelected] = useState("")
 const options = ["New Dehli","Ghajiabad", "Creater noida", "Dehli", "Noida"]
 
//  console.log(selected)


const filterCardsBycity = (option)=>{
  const value = option.toLowerCase();
  const filteredUsers = allUsers.filter(
      user =>(`${user.city}`.toLowerCase().includes(value))
  );
  setUsers(filteredUsers)
}
console.log(selected)

  return (
    <div className='dropdown'>
    <div placeholder='Select' className="dropdown-btn" onClick={(e)=>setIsActive(!isActive)}> {selected} <span className="fas fa-caret-down">Search</span>
    </div>

     {isActive && (
        <div className="dropdown-content">
        {options.map((option) => (
          
            <div  onClick={(e) => {
             setSelected(option) 
            console.log(option)
            


            filterCardsBycity(option)
          
            
             
             setIsActive(false)
            }}
            className="dropdown-item">
            {option}
            </div>
        ))}
    </div>
    )}



   </div>
  );
}

export default Dropdown;