import React, {useState,useEffect} from 'react';
import './App.css';
import Table from './Components/Table';

import TableList from './Components/TableList';

function App() {
  

  const getLocalItem = () => {
    let lists = localStorage.getItem('list')
    console.log(lists)
    if(lists){
      return JSON.parse(localStorage.getItem('list'))
    }
    else{
      return []
    }
  }

  // const [myList, setMyList] = useState('')

  const [tableItemList, settableItemList] = useState(getLocalItem())


  const tableItemListHandler = (titem, tnum) => {
    settableItemList((prevList)=>{
      return [...prevList, 
        {Tablenumber: tnum, 
          Tableitem: titem, 
          id: Math.random().toString()
        }]
    })
    
    // if(tableItemList){
    // } else{
    //   settableItemList((prevList)=>{
    //     return [...prevList, 
    //       {Tablenumber: tnum, 
    //         Tableitem: titem, 
    //         id: Math.random().toString()
    //       }]
    //   })
    //   //setMyList('')
    // }
    
  }

  useEffect(()=>{
    localStorage.setItem('list', JSON.stringify(tableItemList))
  },[tableItemList])

  return (
    <div className="App">
      <Table onAdd={tableItemListHandler}/>
      <TableList studs={tableItemList}/>
    </div>
  );
}

export default App;
