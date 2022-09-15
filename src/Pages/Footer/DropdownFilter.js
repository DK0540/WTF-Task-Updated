import React from 'react';
import "../page.css";


const DropdownFilter = ({userData}) => {
  return (
    <>
  <div className='search-box2'>{userData.address1}{userData.address2}</div>
 </>
)
}
export default DropdownFilter;