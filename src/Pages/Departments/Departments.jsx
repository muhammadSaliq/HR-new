import { useContext, useEffect } from 'react';
import { Link, json, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import axios from 'axios';
import Navbars from '../../Ccomponents/Header/Navbar/Navbars';
import Footer from '../../Ccomponents/Footer/Footer';
import './department.css';
import DashNavbar from '../../Ccomponents/Header/DashboardNavbar/DashNavbar';

const Department = () => {
    const navigate = useNavigate();
    const [departmentname, setdepartmentname] = useState("");
    const [alldepartmentss, setalldepartmentss] = useState([]);
    const [departmentBoolean, setdepartmentBoolean] = useState(false);
    const [Delete , setdelete] = useState(false);
    const buttonStyle = {
        background: '#EC0C36',
        color: 'white',
        fontWeight: 'bold',
        padding: '8px 16px',
        borderRadius: '8px',
        marginTop: '12px',
        cursor: 'pointer',
      };
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'start',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginTop: '15px',
        width: '500px', // Adjust the width as needed
        // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
      };
    

    
    
    
      const getAlldepartments = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/alldepartments`);
          console.log("response: ", response);
          console.log(alldepartmentss);
          setalldepartmentss(response.data.data);
        } catch (error) {
          console.log("error in getting all Departments", error);
        }
      };

    const AddDepartment = async () => {

          try {
            const response = await axios.post('http://localhost:8000/adddepartments', {
                departmentname,
                
            });
    
            // Handle the response according to your needs
            if (response.status === 201) {
              console.log('Signup successful');
              alert("Department successfully Entered");
              window.location.reload(false);
            } else {
              console.log('Employee failed');
            }
          } catch (error) {
            console.error(error);
          }
    
      };

    useEffect(() => {
        console.log('asdasd')
        getAlldepartments()
        // return () => {
        //   console.log('Cleanup Function');
        //  }
    }, [Delete , departmentBoolean ])
    
    return (
        <>
        <DashNavbar/>

        <div className='rootcontainer'>
                <h2>Add Department</h2>
                <TextField fullWidth value={departmentname}  onChange={(event) => { setdepartmentname(event.target.value); }} name="departmentname" label="department Name" variant="outlined" />
        <Button fullWidth onClick={AddDepartment} variant="contained">Add Department</Button>
            </div>
            <div className='rootcontainer2'>
                <h2 className="heado">Departments</h2>
            </div>
            <div className='flex  justify-evenly flex-wrap my-4' >

               {alldepartmentss.map((value) => (

      <div style={containerStyle}>
        <h1 className="headoo">{value.departmentname}</h1>
        <div className="flex mt-4 space-x-3 md:mt-6 justify-center">
        <a onClick={()=>{navigate(`/departmentEmployee/${value.departmentname}`, { replace: true }) }} className="inline-flex items-center bg-black text-yellow-500 px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">View</a> 
        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">Edit</a> 

       <a href="#" className="inline-flex bg-black text-red-500 items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ">Delete</a>
        </div>

      </div>



               ))}
               </div>

            <Footer/>
        </>
    );
}

export default Department;
