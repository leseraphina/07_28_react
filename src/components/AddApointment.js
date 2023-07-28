import {BiCalendarPlus} from 'react-icons/bi';


export default function AddApointment(){
  return (
  <div id="appoint">
    <h4>
      <BiCalendarPlus />
      예약하기</h4>
    <ul>
      <li>
        <label htmlFor="userName">집사명</label>
        <input type="text" />
      </li>
      <li>
        <label htmlFor="useChildren">애기명</label>
        <input type="text" />
      </li>
      <li>
        <label htmlFor="useDate">예약일</label>
        <input type="date" />
      </li>
      <li>
        <label htmlFor="userTime">예약시간</label>
        <input type="time" />
      </li>
      <li>
        <label htmlFor="userMemo">기타설명</label>
        <textarea></textarea>
      </li>
    </ul>
    <p>
      <input type="submit" />
    </p>
  </div>
  );
}