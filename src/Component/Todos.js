import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../axios-service';
const Todos = (props) => {

    const [todos, setTodos] = useState([]);

const fetchTodos = async () => {
    try {
      const result = await axiosInstance.get('/todos');
      console.log(result.data);
      setTodos((current) => {
        return result.data;
      });
    } catch (error) {
      console.log('Error', error);
    }
    };
    
    useEffect(() => {
       fetchTodos();
     }, []);
    return ( 
        <>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
                    <h3 className='display-4'>Todos</h3>
                    <table className='table table-bordered'>
        <thead>
            <tr>
            <th>Id</th>
            <th>User Id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((u) => {
            return (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.userId}</td>
                <td>{u.title}</td>
                <td>{u.completed.toString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
        </div>
      </div>
        </>
     );
}
 
export default Todos;