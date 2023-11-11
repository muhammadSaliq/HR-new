import { useContext, useEffect } from 'react';
import { Link, json, useNavigate, useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import axios from 'axios';
import Navbars from '../../Ccomponents/Header/Navbar/Navbars';
import Footer from '../../Ccomponents/Footer/Footer';
import './employeedetails.css';

const EmployeeDetails = () => {
    const navigate = useNavigate();
    const [allemployees, setallemployees] = useState([]);
    const [employeeBoolean, setemployeeBoolean] = useState(false);
    const [Delete , setdelete] = useState(false);
    const {id} = useParams();

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
         boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        marginTop: '15px',
        backgroundColor: '#f9f6ee',
        width: '1100px', // Adjust the width as needed
        // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
      };
    

    
    
    
      const getAllemployee = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/employeedetails/${id}`);
          console.log("response: ", response);
          console.log(allemployees);
          setallemployees(response.data.data);
        } catch (error) {
          console.log("error in getting all Departments", error);
        }
      };


    useEffect(() => {
        console.log('asdasd')
        getAllemployee()
        // return () => {
        //   console.log('Cleanup Function');
        //  }
    }, [Delete , employeeBoolean ])
    
    return (
        <>
        <Navbars/>

            <div className='rootcontainer2'>
                <h2 className="heado">{allemployees.emloyeename}Employees</h2>
            </div>


    <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Group name
                </th>
                <th scope="col" className="px-6 py-3">
                    Experience
                </th>
                <th scope="col" className="px-6 py-3">
                    Clients
                </th>
                <th scope="col" className="px-6 py-3">
                    Contact
                </th>
            </tr>
        </thead>
        <tbody>



        <tr className="bg-white border-b">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            value.groupname
        </th>
        <td className="px-6 py-4">
        value.experience
        </td>
        <td className="px-6 py-4">
        value.totalclients
        </td>
        <td className="px-6 py-4">
            value.whatsapp
        </td>
        </tr>


           
        </tbody>
    </table>
</div>

            <Footer/>
        </>
    );
}

export default EmployeeDetails;
