import { useState } from "react";
import { BiSearch,BiCaretDown,BiCheckboxChecked } from "react-icons/bi";

function DropDown({toggle,sortBy,onSortChange}){
  if(!toggle){
    return null
  }
  return (
    <ul>
      <li
      onClick={() => onSortChange('petName')}
      >
        애기명 
        {(sortBy === 'petName') && <BiCheckboxChecked />}
        </li>
      <li
      onClick={() => onSortChange('ownerName')}
      >
        예약자명 
        {(sortBy === 'ownerName') && <BiCheckboxChecked />}
        </li>
      <li
      onClick={() => onSortChange('aptDate')}>
        날짜 
        {(sortBy === 'aptDate') && <BiCheckboxChecked />}
        </li>
    </ul>
  )
}

export default function Search({query,sortBy,onQueryChange,onSortChange}){
  const [toggle, setToggle] = useState(false);
  return (
  <div id="search">
    <p>
      <BiSearch />
      <input 
      type="text"
      onChange = {e => onQueryChange(e.target.value)} 
      value={query}/>
      <button 
        type="button"
        onClick={() =>{setToggle(!toggle)}}>
        <BiCaretDown />
        </button>
      <DropDown 
      toggle = {toggle}
      sortBy ={sortBy}
      onSortChange={mySort =>onSortChange(mySort)}/>
    </p>
    </div>
  );
}
//  19 - 29