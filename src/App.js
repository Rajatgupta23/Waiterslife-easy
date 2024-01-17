import React, {useState,useEffect} from 'react';
import './App.css';
import Table from './Components/Table';
// import TableList from './Components/TableList';



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
    
    // if(myList){
    // } else{
    //   settableItemList((prevList)=>{
    //     return [...prevList, 
    //       {Tablenumber: tnum, 
    //         Tableitem: titem, 
    //         id: Math.random().toString()
    //       }]
    //   })
    //   setMyList('')
    // }
    
  }

  useEffect(()=>{
    localStorage.setItem('list', JSON.stringify(tableItemList))
  },[tableItemList])

  const deleteItem = (id) => {
    let items = JSON.parse(localStorage.getItem('list'));
    const filtered = items.filter(item => item.id !== id);
    localStorage.setItem('list', JSON.stringify(filtered))
    settableItemList(filtered)
}


  return (
    <div className="App">
      <Table onAdd={tableItemListHandler}/>
      {/* <TableList prop={tableItemList}/> */}
      {/* <StudentList studs={studentsList}/> */}

      <ul>
            {tableItemList.map((user) => (
                <li key={user.id}>
                    {user.Tablenumber} {user.Tableitem}
                    <button onClick={()=>deleteItem(user.id)}>Delete</button>
                </li>
            ))}

        </ul>
    </div>
  );
}

export default App;
