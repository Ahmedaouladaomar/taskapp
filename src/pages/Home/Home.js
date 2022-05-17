import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './Home.css';

// On definit notre api
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-type": "application/json"
  }
})


function Home(){

  const [loading, setLoading] = useState(true);
  const [Users, setUsers] = useState([]);

useEffect(() => {
  api.get('/users').then( res => {
    if(res.status == 200){
      setUsers(res.data)
      setLoading(false);

    }
  })
}, [])


// En attendant les données se chargent
if(loading)
    {
        return < div className='users-all'><h5 style={{fontSize: 50}}>Loading users .....</h5></div>
    }
    else
    {
        var users_table = "";
       
        users_table = Users.map( (item, index) => {
            return (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>
                        <Link to={`/Tasks/${item.id}`} className="button">Show tasks</Link>
                    </td>
                </tr>
            );
        });
    }

  return  <div className='users-all'>
              <table className='users-table'>
                    <tr>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Email</th>
                    </tr>
                    <tbody>
                       {users_table}
                    </tbody>
              </table>
          </div>   
               
      }



export default Home;