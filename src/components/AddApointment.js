import { useState } from 'react';
import {BiCalendarPlus} from 'react-icons/bi';

function AddWrite({toogleWrite,formData,setFormData,formPublish}){
 if(!toogleWrite) {
  return null
 }
return (
<>
<ul>
      <li>
        <label htmlFor="userName">집사명</label>
        <input 
          type="text"
          onChange={e => {setFormData({...formData,owerName:e.target.value})}} />
      </li>
      <li>
        <label htmlFor="useChildren">애기명</label>
        <input 
        type="text"
        onChange={e => {setFormData({...formData,petName:e.target.value})}} />
      </li>
      <li>
        <label htmlFor="useDate">예약일</label>
        <input 
        type="date"
        onChange={e => {setFormData({...formData,aptDate:e.target.value})}} />
      </li>
      <li>
        <label htmlFor="userTime">예약시간</label>
        <input 
        type="time"
        onChange={e => {setFormData({...formData,aptTime:e.target.value})}}
         />
      </li>
      <li>
        <label htmlFor="userMemo">기타설명</label>
        <textarea
        onChange={e => {setFormData({...formData,aptNotes:e.target.value})}}></textarea>
      </li>
    </ul>
    <p>
      <input type="submit" onClick={formPublish} />
    </p>
    </>
  )
}
export default function AddApointment({lastId,onSendAppoint }){
  const clearData ={
    "petName":"" ,
    "ownerName": "",
    "aptNotes": "",
    "aptDate": ""
  }
const [toogleWrite,setToggleWrite] = useState(false);
const [formData,setFormData] = useState(clearData);
function formPublish(){
  //  합본
  const appointInfo = {
    id:lastId + 1,
    petName:formData.petName,
    owerName:formData.ownerName,
    aptNotes:formData.aptNotes,
    aptDate:formData.aptDate + ''+ formData.aptTime,
  }
  onSendAppoint (appointInfo);
  setToggleWrite(!toogleWrite);
  setFormData(clearData)
} 
  return (
  <div id="appoint">
    <h4 onClick={() => {setToggleWrite(!toogleWrite)}}>
      <BiCalendarPlus />
      예약하기</h4>
      <AddWrite 
       toogleWrite = {toogleWrite}
       formData={formData} 
       formPublish ={formPublish}
       setFormData = {setFormData}
       />
  
  </div>
  );
}