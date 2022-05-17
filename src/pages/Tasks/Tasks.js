import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import './Tasks.css';

// On definit notre api
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-type": "application/json"
  }
})


function Tasks(){

  const [loading, setLoading] = useState(true);
  const [Tasks, setTasks] = useState([]);

  const params = useParams();


  // For performing side effects
useEffect(() => {
  api.get(`/todos?userId=${params.id}`).then( res => {
    if(res.status == 200){

      setTasks(res.data)
      setLoading(false);

    }
  })
}, [])


// En attendant les données se chargent
if(loading)
    {
        return < div className='tasks-all'><h5 style={{fontSize: 50}}>Loading Tasks .....</h5></div>
    }
    else
    {
        var tasks_table = "";
       
        tasks_table = Tasks.map( (item, index) => {

          var check = item.completed;
          if(check){
            var Status = <h5 className='completed'>completed</h5>
          } else{
            var Status = <h5 className='uncompleted'>uncompleted</h5>
          }
            return (
                <tr key={index}>
                    <td>{item.title}</td>
                    <td>{Status}</td>     
                </tr>
            );
        });
    }

  return  <div className='tasks-all'>
            <div className='tasks-table-container'>
              <table className='tasks-table'>
                    <tr>
                      <th>Title</th>
                      <th>Status</th>
                    </tr>
                    <tbody>
                       {tasks_table}
                    </tbody>
              </table>
            </div>
            <Link to='/' className="button-back">Back</Link>
          </div>   
               
      }



export default Tasks;