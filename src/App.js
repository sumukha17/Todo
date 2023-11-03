import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink} from "react-router-dom";

function App() {
  const [columns,setColumns] = useState([]);
  const [records,setRecords] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/users')
    .then(res=>{
      setColumns(Object.keys(res.data[0]))
      setRecords(res.data);
    })
  },[])
  return (
    <div className="container mt-5">
      <div className="text-end" ><NavLink to="/Add" className="btn btn-primary">Add</NavLink></div>
      <table className="table">
        <thead>
          <tr>
            {columns.map((c , i)=>(
              <th key={i}>{c}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {records.map((d,i)=>(
              <tr key={i}>
                  <td >{d.id}</td>
                  <td >{d.name}</td>
                  <td >{d.email}</td>
                  <td>
                    <NavLink to={`/Update/${d.id}`} className="btn btn-success">Update</NavLink>
                    <NavLink onClick={e=>handleSubmit(d.id)} className="btn btn-danger ms-2">Delete</NavLink>
                  </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
  function handleSubmit(id){
    const confirm = window.confirm('Are you sure you want to delete this data!')
    if(confirm){
      axios.delete('http://localhost:3000/users/'+id)
      .then(res=>alert('Data is deleted.'))
      .catch(err=>console.log(err))
    }
    
  }
}

export default App;
