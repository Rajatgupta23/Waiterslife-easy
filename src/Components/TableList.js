// import React from "react";
// import Card from "./Card";

// const TableList = (props) => {
//     const deleteItem = (id) => {
//         let items = JSON.parse(localStorage.getItem('list'));
//         const filtered = items.filter(item => item.id !== id);
//         localStorage.setItem('list', JSON.stringify(filtered))

//     }

//     return (
//         <Card>
//             <ul>
//             {props.prop.map((user) => (
//                 <li key={user.id}>
//                     {user.Tablenumber} {user.Tableitem} 
//                     <button onClick={()=>deleteItem(user.id)}>Delete</button>
//                 </li>
//             ))}
//         </ul>
//         </Card>
//     )
// }

// export default TableList