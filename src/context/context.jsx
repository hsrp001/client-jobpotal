import React, { createContext, useEffect, useState } from 'react';
import Loader from '../components/Loader';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [data, setData] = useState(false);
  const [post , setPost] = useState(false);
  const [userdata, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [catagory , setCatagory] = useState(''); // Corrected the spelling to 'category'


  console.log("userdatais " ,userdata);


  useEffect(() => {
    const profile = async () => {
      const token = localStorage.getItem('token');

      if (token) {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/profile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            setUserData(data);
            const userCategory = data.data?.catagory; // Corrected the spelling to 'category'
            setCatagory(userCategory);  

            if (userCategory == "job_seeker") { // Use updated value of 'userCategory'
              setData(true);
            } else {
              setPost(true);
            }
          } else {
            setPost(false);
            setData(false);
          }
        } catch (error) {
          console.log('error is ', error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    profile();
  }, [data,post]); // Removed [data, post] dependencies

  const logout = () => {
    localStorage.removeItem('token');
    setData(false);
    setPost(false);
    setUserData({});
  };

  return (
    <MyContext.Provider value={{ data, setData, userdata, logout, post, setPost, catagory, setCatagory }}>
      {loading ? (
        // Show loading symbol or component while data is loading
       <Loader></Loader>
      ) : (
        // Render children when loading is completed
        children
      )}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
