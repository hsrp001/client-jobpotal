import React, { useState } from 'react';
import Home from "./Pages/Home/Home";
import './App.css';
import Signup from "./Pages/Auth/Signup";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Findjobhome from "./Pages/jobget/Home";
import Findjobprotected from "./Pages/Protected/findjob";
import { useContext } from "react";
import { MyContext } from "./context/context";
import Layout from "./Pages/Layout/Layout";
import Profile from "./Pages/Profilepage/Profile";
import PostJobForm from "./Pages/Postjob/PostJobForm";
import Conatctform from "./Pages/Conatctform";
import Relatedjobreult from "./Pages/jobget/Relatedjobreult";
import JobApplyForm from "./Pages/jobget/JobApplyForm";
import Jobactivety from "./Pages/jobget/Jobactivety";
import Allcandidateform from "./Pages/Postjob/Allcandidateform";
import Notifation from "./Pages/notification/Notifation";

function App() {
  const { data, post } = useContext(MyContext);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout></Layout>} >
          <Route index element={<Home />}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/siginup" element={<Signup></Signup>}></Route>
          <Route path="/contact" element={<Conatctform></Conatctform>}></Route>
          <Route path="/getjobs" element={<Findjobprotected user={data}></Findjobprotected>} >
            <Route path="" element={<Findjobhome />} />
            <Route path="alljjobapplied/:id" element={<Jobactivety />} />
            <Route path="apply/:id" element={<JobApplyForm></JobApplyForm>}></Route>
            <Route path=":id" element={<Relatedjobreult></Relatedjobreult>}></Route>
          </Route>
          <Route path="/profile" element={<Findjobprotected user={data || post }></Findjobprotected>} >
            <Route path="" element={<Profile />} />
          </Route>
          <Route path="/postjob" element={<Findjobprotected user={post}  ></Findjobprotected>} >
            <Route path="" element={<PostJobForm />} />
            <Route path="Allcandidateform/:id" element={<Allcandidateform></Allcandidateform>}></Route>
          </Route>
          <Route path="/notification" element={<Notifation />}></Route>
        </Route>
      </>
    )
  );

 
  return (
    <>
      <RouterProvider router={router} />
     
    </>
  );
}

export default App;
