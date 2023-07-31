import AddApointment from './components/AddApointment';
import Search from './components/Search';
import AddInfo from './components/AddInfo';
// import data from './data.json';
import {BiArchiveIn} from 'react-icons/bi'
import { useCallback, useEffect, useState } from 'react';

export default function App(){
  const [list,setList] = useState([]);
  const [sortBy, setSortBy] = useState('petName');
  const [query,setQuery] = useState('');

  const fetchData = useCallback(() =>{
    fetch('./data.json')
    .then(response => response.json())
    .then(data => setList(data))
  },[])

  useEffect(fetchData,[fetchData]);
  
  // const filterList = list.sort((a,b) =>{
  //   return ( a[sortBy].toLowerCase() < b[sortBy].toLowerCase()? -1 :1)
  // })

  const filterList = list.filter(
    item => {return (
      item.petName.toLowerCase().includes(query.toLowerCase()) ||
      item.ownerName.toLowerCase().includes(query.toLowerCase())
    )}
  ).sort(
    (a,b) => {
      return(
        a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 :1 
      )
    }
  )
  return (
    <article>
      <h3> <BiArchiveIn /> 예약시스템</h3>
      <AddApointment
        lastId = {list.reduce((max,item) => Number(item.id) > max ? Number(item.id) : max,0)} 
        onSendAppoint = {myAppoint => setList([...list, myAppoint])}/>
      <Search
      query={query}
      onQueryChange ={myQuery => setQuery(myQuery)}
      sortBy={sortBy} 
      onSortChange = {mySort => setSortBy(mySort)}
      />
      <div id="list">
        <ul>
          {filterList.map((item) => (
          <AddInfo key={item.id}
                  info={item}
                  onDelete = {(id) => setList(list.filter(item => item.id !== id))} />))}
        </ul>
      </div>
    </article>
  )
}