import React, {useState} from 'react'
import Card from './Card';

const Table = (props) => {
    const [Tablenumber, setTablenumber] = useState('');
    const [Tableitem, SetTableitem] = useState('');

    const TablenumbeChangeHandler = (event) => {
        setTablenumber(event.target.value)
    }
    const TableitemChangeHandler = (event) => {
       SetTableitem(event.target.value)
    }

    const TableHandler = (event) => {
        event.preventDefault();
        
        props.onAdd(Tablenumber, Tableitem)
        setTablenumber('')
        SetTableitem('')
    }
    return(
        <Card>
            <div>
            <form onSubmit={TableHandler}>
            <label>TableItem</label>
            <input type='text' onChange={TableitemChangeHandler} required></input>
            <label>TableNumber</label>
            <input type='number' onChange={TablenumbeChangeHandler} required></input>
            <button type='submit'>Add</button>
        </form>
        
        </div>
        </Card>
    )
}
export default Table