import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../axios-service';
const Albums = (props) => {
    const [albums, setAlbums] = useState([]);

const fetchAlbums = async () => {
    try {
      const result = await axiosInstance.get('/albums');
      console.log(result.data);
      setAlbums((current) => {
        return result.data;
      });
    } catch (error) {
      console.log('Error', error);
    }
    };
    
    useEffect(() => {
       fetchAlbums();
     }, []);
    return ( 
        <>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
                    <h3 className='display-4'>Albums</h3>
                          <table className='table table-bordered'>
        <thead>
            <tr>
            <th>Id</th>
            <th>User Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((u) => {
            return (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.userId}</td>
                <td>{u.title}</td>
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
 
export default Albums;