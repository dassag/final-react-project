import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../axios-service';

const Users = (props) => {

const [users, setUsers] = useState([]);

const fetchUsers = async () => {
    try {
      const result = await axiosInstance.get('/users');
        console.log(result.data);
        console.log(result.data.length);
      setUsers((current) => {
        return result.data;
      });
    } catch (error) {
      console.log('Error', error);
    }
    };
    
    useEffect(() => {
       fetchUsers();
     }, []);

    return ( 
        <>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
                    <h3 className='display-4'>Users</h3>
                    <table className='table table-bordered'>
        <thead>
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => {
            return (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.username}</td>
                <td>{u.email}</td>
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
 
export default Users;