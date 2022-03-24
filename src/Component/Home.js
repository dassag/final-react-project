import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../axios-service';
const Home = () => {
    const [userCount, setUserCount] = useState(0);
    const [todosCount, setTodosCount] = useState(0);
    const [albumsCount, setAlbumsCount] = useState(0);

const fetchData = async () => {
    try {
        const users = await axiosInstance.get('/users');
        const todos = await axiosInstance.get('/todos');
        const albums = await axiosInstance.get('/albums');
      //console.log(result.data.size);
      setUserCount((current) => {
        return users.data.length;
      });
        setTodosCount((current) => {
            return todos.data.length;
        });
        setAlbumsCount((current) => {
            return albums.data.length;
        });
    } catch (error) {
      console.log('Error', error);
    }
    };
    useEffect(() => {
       fetchData();
     }, []);
  return (
    <>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
                  <h3 className='display-4'>Home</h3>
                  <p className='lead'>Users - { userCount}</p>
                  <p className='lead'>Todos - { todosCount}</p>
                  <p className='lead'>Albums - {albumsCount}</p>
        </div>
      </div>
    </>
  );
};

export default Home;
