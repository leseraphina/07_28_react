import { BiSearch,BiCaretDown,BiCheckboxChecked } from "react-icons/bi";

function DropDown(){
  return (
    <ul>
      <li>애기명 <BiCheckboxChecked /></li>
      <li>예약자명 <BiCheckboxChecked /></li>
      <li>날짜 <BiCheckboxChecked /></li>
    </ul>
  )
}

export default function Search(){
  return (
  <div id="search">
    <p>
      <BiSearch />
      <input type="text" />
      <button type="button">
        <BiCaretDown />
        </button>
      <DropDown />
    </p>
    </div>
  );
}