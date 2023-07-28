import { useEffect, useState } from "react";

export default function App01(){
  const [title,setTitle] = useState('happy');

  // 인수 작업조건 -> 시작할때 작업 진행하기
  // useEffect(() => {console.log('effect')})
  // useEffect(() => {console.log('effect')},[])
  useEffect(() => {console.log('effect')},[title])
  return (
    <>
    <h1>{title}</h1>
    <button type="button" onClick={() => setTitle('first')}>first</button>
    <button type="button" onClick={() => setTitle('second')}>second</button>
    </>
  );
}
//  31 - 41