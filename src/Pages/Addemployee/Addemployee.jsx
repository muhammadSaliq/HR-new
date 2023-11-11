import { useContext, useEffect } from 'react';
import { Link, json, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import './addemployee.css';
import axios from 'axios';
import Navbars from '../../Ccomponents/Header/Navbar/Navbars';
import Footer from '../../Ccomponents/Footer/Footer';
import DashNavbar from '../../Ccomponents/Header/DashboardNavbar/DashNavbar';

const Addemployee = () => {
    const navigate = useNavigate();
    const [emloyeename, setemloyeename] = useState("");
    const [age, setAge] = useState("");
    const [attrition, setAttrition] = useState("");
    const [businessTravel, setBusinessTravel] = useState("");
    const [dailyRate, setDailyRate] = useState("");
    const [department, setDepartment] = useState("");
    const [distanceFromHome, setDistanceFromHome] = useState("");
    const [education, setEducation] = useState("");
    const [educationField, setEducationField] = useState("");
    const [employeeCount, setEmployeeCount] = useState("");
    const [employeeNumber, setEmployeeNumber] = useState("");
    const [environmentSatisfaction, setEnvironmentSatisfaction] = useState("");
    const [gender, setGender] = useState("");
    const [hourlyRate, setHourlyRate] = useState("");
    const [jobInvolvement, setJobInvolvement] = useState("");
    const [jobLevel, setJobLevel] = useState("");
    const [jobRole, setJobRole] = useState("");
    const [jobSatisfaction, setJobSatisfaction] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    const [monthlyIncome, setMonthlyIncome] = useState("");
    const [monthlyRate, setMonthlyRate] = useState("");
    const [numCompaniesWorked, setNumCompaniesWorked] = useState("");
    const [over18, setOver18] = useState("");
    const [overTime, setOverTime] = useState("");
    const [percentSalaryHike, setPercentSalaryHike] = useState("");
    const [performanceRating, setPerformanceRating] = useState("");
    const [relationshipSatisfaction, setRelationshipSatisfaction] = useState("");
    const [standardHours, setStandardHours] = useState("");
    const [stockOptionLevel, setStockOptionLevel] = useState("");
    const [totalWorkingYears, setTotalWorkingYears] = useState("");
    const [trainingTimesLastYear, setTrainingTimesLastYear] = useState("");
    const [workLifeBalance, setWorkLifeBalance] = useState("");
    const [yearsAtCompany, setYearsAtCompany] = useState("");
    const [yearsInCurrentRole, setYearsInCurrentRole] = useState("");
    const [yearsSinceLastPromotion, setYearsSinceLastPromotion] = useState("");
    const [yearsWithCurrManager, setYearsWithCurrManager] = useState("");

    const [alldepartmentss, setalldepartmentss] = useState([]);
    const [departmentBoolean, setdepartmentBoolean] = useState(false);
    const [Delete , setdelete] = useState(false);
    
    
    const [ageerror, setageerror] = useState();
    const [nameError, setnameError] = useState();
    const [businessTravelerror, setBusinessTravelerror] = useState();
    const [dailyRateerror, setDailyRateerror] = useState();
    const [departmenterror, setDepartmenterror] = useState();
    const [distanceFromHomeerror, setDistanceFromHomeerror] = useState();
    const [educationerror, seteducationerror] = useState();
    const [educationFielderror, seteducationFielderror] = useState();
    const [employeeNumbererror, setEmployeeNumbererror] = useState();
    const [environmentSatisfactionerror, setenvironmentSatisfactionerror] = useState();
    const [hourlyRateerror, setHourlyRateerror] = useState();
    const [jobInvolvementerror, setJobInvolvementerror] = useState();
    const [jobLevelerror, setJobLevelerror] = useState();
    const [jobRoleerror, setJobRoleerror] = useState();
    const [jobSatisfactionerror, setJobSatisfactionerror] = useState();
    const [monthlyIncomeerror, setMonthlyIncomeerror] = useState();
    const [monthlyRateerror, setMonthlyRateerror] = useState();
    const [numCompaniesWorkederror, setNumCompaniesWorkederror] = useState();
    const [percentSalaryHikeerror, setPercentSalaryHikeerror] = useState();
    const [performanceRatingerror, setPerformanceRatingerror] = useState();
    const [relationshipSatisfactionerror, setRelationshipSatisfactionerror] = useState();
    const [standardHourserror, setStandardHourserror] = useState();
    const [stockOptionLevelerror, setStockOptionLevelerror] = useState();
    const [totalWorkingYearserror, setTotalWorkingYearserror] = useState();
    const [trainingTimesLastYearerror, setTrainingTimesLastYearerror] = useState();
    const [workLifeBalanceerror, setWorkLifeBalanceerror] = useState();
    const [yearsAtCompanyerror, setYearsAtCompanyerror] = useState();
    const [yearsInCurrentRoleerror, setYearsInCurrentRoleerror] = useState();
    const [yearsSinceLastPromotionerror, setYearsSinceLastPromotionerror] = useState();
    const [yearsWithCurrManagererror, setYearsWithCurrManagererror] = useState();
    
    const [gendererror, setgendererror] = useState("");
    const [over18error, setover18error] = useState("");
    const [overTimeerror, setOverTimeerror] = useState("");
    const [maritalStatuserror, setMaritalStatuserror] = useState("");

    // Snackbar state variables
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    //emp add variable
    const [responce  , setResponce] = useState("");
    const [CreatedbyUser  , setCreatedbyUser] = useState("");

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


    const Addemployeedata = async () => {
      setCreatedbyUser(responce.email)
      console.log("cre",CreatedbyUser)
if (emloyeename && age && businessTravel && dailyRate && department && distanceFromHome && education <= 5 && educationField && employeeNumber &&
    environmentSatisfaction <=4 && gender && hourlyRate && jobInvolvement <=4 && jobLevel <=5 && jobRole && jobSatisfaction <=4 && maritalStatus &&
    monthlyIncome && monthlyRate && numCompaniesWorked && over18 && overTime && percentSalaryHike && performanceRating <=4 &&
    relationshipSatisfaction <=4 && standardHours && stockOptionLevel <=3 && totalWorkingYears && trainingTimesLastYear <=6 && workLifeBalance <=4 &&
    yearsAtCompany && yearsSinceLastPromotion && yearsWithCurrManager && CreatedbyUser
    ) {

          try {
            const response = await axios.post('http://localhost:8000/addemployee', {
                emloyeename,
                age,
                businessTravel,
                dailyRate,
                department,
                distanceFromHome,
                education,
                educationField,
                employeeNumber,

                environmentSatisfaction,
                gender,
                hourlyRate,
                jobInvolvement,
                jobLevel,
                jobRole,
                jobSatisfaction,
                maritalStatus,
                monthlyIncome,
                monthlyRate,
                numCompaniesWorked,
                over18,
                overTime,
                percentSalaryHike,
                performanceRating,
                relationshipSatisfaction,
                standardHours,
                stockOptionLevel,
                totalWorkingYears,
                trainingTimesLastYear,
                workLifeBalance,
                yearsAtCompany,
                yearsSinceLastPromotion,
                yearsWithCurrManager,
                CreatedbyUser
                
            });
    
            // Handle the response according to your needs
            if (response.status === 201) {
              console.log('Employee successfully registered');
              setSnackbarMessage('Employee successfully registered');
              setSnackbarSeverity('success');
              setOpenSnackbar(true);
            } else {
              console.log('Employee failed');
              setSnackbarMessage('Employee registration failed');
              setSnackbarSeverity('error');
              setOpenSnackbar(true);
            }
          } catch (error) {
            console.error(error);
            setSnackbarMessage('An error occurred while adding the employee');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
          }
    
        }
        else {
          setSnackbarMessage('Kindly fill all fields');
          setSnackbarSeverity('error');
          setOpenSnackbar(true);
            
        if (!emloyeename) {
            setnameError("Please enter name");
            //setPasswordError(!password);
            //setReTypePasswordError(!reTypepassword);
            return;
          }
         if (!age) {
              setageerror("please enter age");
              return;
            }
            if (!businessTravel || businessTravel == "Select an option") {
                setBusinessTravel("");
                setBusinessTravelerror("please enter business travel");
                return;
              }
                          if (!department || department == "Enter Department") {
                setDepartment("");
                setDepartmenterror("please enter department");
                return;
              }


              if (!dailyRate) {
                setDailyRateerror("please enter daily rate");
                return;
              }

                       if (!distanceFromHome ) {
                        setDistanceFromHomeerror("please enter distance ");
              return;
            }
            if (!education || education > 5) {
                seteducationerror("please enter eduation B/W 1 to 5");
                return;
              }
                            if (!educationField) {
                                seteducationFielderror("please enter education field");
                return;
              }
              if (!employeeNumber) {
                setEmployeeNumbererror("please enter employee number");
return;
}
if (!environmentSatisfaction  || environmentSatisfaction > 4) {
    setenvironmentSatisfactionerror("please enter employee satisfaction B/W 1 to 4");
return;
}
if (!gender || gender == "Select Gender") {
  setGender("");
setgendererror("please select a gender");
return;
}
if (!hourlyRate) {
    setHourlyRateerror("please enter hourly rate");
return;
}
if (!jobInvolvement || jobInvolvement > 4) {
    setJobInvolvementerror("please enter job involvement B/W 1 to 4");
return;
}
if (!jobLevel || jobLevel > 5) {
    setJobLevelerror("please enter job involvement B/W 1 to 5");
return;
}
if (!jobRole) {
    setJobRoleerror("please enter job role");
return;
}
if (!jobSatisfaction || jobSatisfaction > 4) {
    setJobSatisfactionerror("please enter job satisfation B/W 1 to 4");
return;
}


if (!maritalStatus || maritalStatus == "Enter Marital Status") {
  setMaritalStatus("");
  setMaritalStatuserror("please enter martial status");
  return;
}
if (!monthlyIncome) {
    setMonthlyIncomeerror("please enter monthly income");
return;
}


if (!monthlyRate) {
    setMonthlyRateerror("please enter monthy rate");
return;
}
if (!numCompaniesWorked) {
    setNumCompaniesWorkederror("please enter total companies");
return;
}
                          if (!over18 || over18 == "Over 18") {
                setOver18("");
                setover18error("please select an option");
                return;
              }
                          if (!overTime || overTime == "Over Time") {
                setOverTime("");
                setOverTimeerror("please select an option");
                return;
              }
if (!percentSalaryHike) {
    setPercentSalaryHikeerror("please enter salary hike");
return;
}

if (!performanceRating || performanceRating > 4) {
    setPerformanceRatingerror("please enter performane rating B/W 1 to 4");
return;
}
if (!relationshipSatisfaction || relationshipSatisfaction > 4) {
    setRelationshipSatisfactionerror("please enter satisfaction B/W 1 to 4");
return;
}
if (!stockOptionLevel || stockOptionLevel > 3) {
    setStockOptionLevelerror("please enter stock option B/W 0 to 3");
return;
}
if (!standardHours) {
    setStandardHourserror("please enter standard hours");
return;
}  

if (!totalWorkingYears) {
    setTotalWorkingYearserror("please enter working years");
return;
}
if (!trainingTimesLastYear || trainingTimesLastYear > 6) {
    setTrainingTimesLastYearerror("please enter training times B/W 0 to 6");
return;
}      
if (!workLifeBalance || workLifeBalance > 4) {
    setWorkLifeBalanceerror("please enter work life balance  B/W 1 to 6");
return;
}
if (!yearsAtCompany) {
    setYearsAtCompanyerror("please enter years at company");
return;
}    

if (!yearsInCurrentRole) {
    setYearsInCurrentRoleerror("please enter years of role");
return;
}      
if (!yearsSinceLastPromotion) {
    setYearsSinceLastPromotionerror("please enter last promotion");
return;
}
if (!yearsWithCurrManager) {
    setYearsWithCurrManagererror("please enter years with manager");
return;
}   
        }
    
        
      };
      useEffect(() => {

        const getProfile = async () => {
          try {
            let response = await axios.get(`http://localhost:8000/api/v1/profile`,
              {
                withCredentials: true,
                headers: {
                  'Cache-Control': 'no-cache',
                  'Pragma': 'no-cache',
                  'Expires': '0',
                }
              });
              console.log("response: ", response.data);
              setResponce(response.data)
              setCreatedbyUser(responce.email);
              console.log("res",responce.email);
                            console.log("xx",CreatedbyUser);


          } catch (error) {
            console.log("axios error: ", error);
      
      
          }
      
        }
        getProfile();
      
      }, [])
    
     useEffect(() => {
        console.log('asdasd')
        getAlldepartments()
        // return () => {
        //   console.log('Cleanup Function');
        //  }
    }, [Delete , departmentBoolean ])


    const handleCloseSnackbar = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpenSnackbar(false);
    };
    
    return (
        <>
        <DashNavbar/>
            <div className='rootcontainer'>
                <h2>Employee</h2>
                <TextField fullWidth value={emloyeename} onChange={(event) => { setemloyeename(event.target.value); setnameError("") }}  name="emloyeename"  label="Employee Name" variant="outlined" />
                {nameError && <p className="error-message">{nameError}</p>} 
                <TextField fullWidth value={age} onChange={(event) => { setAge(event.target.value); setageerror("") }} type = "number" name="age" label="Age" variant="outlined" />
                {ageerror && <p className="error-message">{ageerror}</p>} 
               {/*} <TextField fullWidth value={businessTravel} onChange={(event) => { setBusinessTravel(event.target.value); setBusinessTravelerror("") }} name="businessTravel" label="Business Travel" variant="outlined" />
                
    */}
      <select id="businessTravel" onChange={(event) => { setBusinessTravel(event.target.value); setBusinessTravelerror("") }} name='businessTravel' className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Select an option</option>
        <option value="Travel_Frequently" >Travel_Frequently</option>
        <option value="Travel_Rarely">Travel_Rarely</option>
</select>
                {businessTravelerror && <p className="error-message">{businessTravelerror}</p>} 
                <TextField fullWidth value={dailyRate} onChange={(event) => { setDailyRate(event.target.value); setDailyRateerror("") }} type = "number" name="dailyRate" label="Daily Rate ($)" variant="outlined" />
                {dailyRateerror && <p className="error-message">{dailyRateerror}</p>} 

                <select id="department" name='department' onChange={(event) => { setDepartment(event.target.value); setDepartmenterror("")}} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
                <option>Enter Department</option>

                {alldepartmentss.map((value) => (
                            <option value={value.departmentname} >{value.departmentname}</option>

                ))}
                </select>
                {/*<TextField fullWidth value={department} onChange={handleInputChange} name="department" label="Department" variant="outlined" />
                */}
                                {departmenterror && <p className="error-message">{departmenterror}</p>} 
                <TextField fullWidth value={distanceFromHome} onChange={(event) => { setDistanceFromHome(event.target.value); setDistanceFromHomeerror("") }} type = "number" name="distanceFromHome" label="Distance From Home (KM)" variant="outlined" />
                {distanceFromHomeerror && <p className="error-message">{distanceFromHomeerror}</p>} 
                <TextField fullWidth value={education} onChange={(event) => { setEducation(event.target.value); seteducationerror("") }} type = "number" name="education" label="Education" variant="outlined" />
                {educationerror && <p className="error-message">{educationerror}</p>} 
                <TextField fullWidth value={educationField} onChange={(event) => { setEducationField(event.target.value); seteducationFielderror("") }} name="educationField" label="Education Field" variant="outlined" />
                {educationFielderror && <p className="error-message">{educationFielderror}</p>}
                <TextField fullWidth value={employeeNumber}  onChange={(event) => {setEmployeeNumber(event.target.value); setEmployeeNumbererror("") }} type = "number" name="employeeNumber" label="Employee Number" variant="outlined" />
                {employeeNumbererror && <p className="error-message">{employeeNumbererror}</p>}
                <TextField fullWidth value={environmentSatisfaction} onChange={(event) => { setEnvironmentSatisfaction(event.target.value); setenvironmentSatisfactionerror("") }} type = "number" name="environmentSatisfaction" label="Environment Satisfaction" variant="outlined" />
                {environmentSatisfactionerror && <p className="error-message">{environmentSatisfactionerror}</p>}
                <select id="gender" onChange={(event) => { setGender(event.target.value); setgendererror("") }} name='gender' className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Select Gender</option>
        <option value="Male" >Male</option>
        <option value="Female">Female</option>
</select>
{gendererror && <p className="error-message">{gendererror}</p>}

                <TextField fullWidth value={hourlyRate} onChange={(event) => { setHourlyRate(event.target.value); setHourlyRateerror("") }} type = "number" name="hourlyRate" label="Hourly Rate ($)" variant="outlined" />
                {hourlyRateerror && <p className="error-message">{hourlyRateerror}</p>}
                <TextField fullWidth value={jobInvolvement} onChange={(event) => { setJobInvolvement(event.target.value); setJobInvolvementerror("") }} type = "number" name="jobInvolvement" label="Job Involvement" variant="outlined" />
                {jobInvolvementerror && <p className="error-message">{jobInvolvementerror}</p>}
                <TextField fullWidth value={jobLevel} onChange={(event) => { setJobLevel(event.target.value); setJobLevelerror("") }} type = "number" name="jobLevel" label="Job Level" variant="outlined" />
                {jobLevelerror && <p className="error-message">{jobLevelerror}</p>}
                <TextField fullWidth value={jobRole} onChange={(event) => { setJobRole(event.target.value); setJobRoleerror("") }} name="jobRole" label="Job Role" variant="outlined" />
                {jobRoleerror && <p className="error-message">{jobRoleerror}</p>}
                <TextField fullWidth value={jobSatisfaction} onChange={(event) => { setJobSatisfaction(event.target.value); setJobSatisfactionerror("") }} type = "number" name="jobSatisfaction" label="Job Satisfaction" variant="outlined" />
                {jobSatisfactionerror && <p className="error-message">{jobSatisfactionerror}</p>}
                <select id="maritalStatus" name='maritalStatus'onChange={(event) => { setMaritalStatus(event.target.value); setMaritalStatuserror("") }} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Enter Marital Status</option>
        <option value="Single" >Single</option>
        <option value="Married">Married</option>
        <option value="Divorced">Divorced</option>
</select>
{maritalStatuserror && <p className="error-message">{maritalStatuserror}</p>}

                <TextField fullWidth value={monthlyIncome} onChange={(event) => { setMonthlyIncome(event.target.value); setMonthlyIncomeerror("") }} type = "number" name="monthlyIncome" label="Monthly Income" variant="outlined" />
                {monthlyIncomeerror && <p className="error-message">{monthlyIncomeerror}</p>}
                <TextField fullWidth value={monthlyRate} onChange={(event) => { setMonthlyRate(event.target.value); setMonthlyRateerror("") }} type = "number" name="monthlyRate" label="Monthly Rate" variant="outlined" />
                {monthlyRateerror && <p className="error-message">{monthlyRateerror}</p>}
                <TextField fullWidth value={numCompaniesWorked} onChange={(event) => { setNumCompaniesWorked(event.target.value); setNumCompaniesWorkederror("") }} type = "number" name="numCompaniesWorked" label="Num Companies Worked" variant="outlined" />
                {numCompaniesWorkederror && <p className="error-message">{numCompaniesWorkederror}</p>}
                <select id="over18" name='over18' onChange={(event) => { setOver18(event.target.value); setover18error("") }} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Over 18</option>
        <option value="Yes" >Yes</option>
        <option value="No">No</option>
</select>
{over18error && <p className="error-message">{over18error}</p>}

<select id="overTime" name='overTime'onChange={(event) => { setOverTime(event.target.value); setOverTimeerror("") }} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Over Time</option>
        <option value="Yes" >Yes</option>
        <option value="No">No</option>
</select>
                {overTimeerror && <p className="error-message">{overTimeerror}</p>}

                <TextField fullWidth value={percentSalaryHike} onChange={(event) => { setPercentSalaryHike(event.target.value); setPercentSalaryHikeerror("") }} type = "number" name="percentSalaryHike" label="Percent Salary Hike" variant="outlined" />
                {percentSalaryHikeerror && <p className="error-message">{percentSalaryHikeerror}</p>}
                <TextField fullWidth value={performanceRating} onChange={(event) => { setPerformanceRating(event.target.value); setPerformanceRatingerror("") }} type = "number" name="performanceRating" label="Performance Rating" variant="outlined" />
                {performanceRatingerror && <p className="error-message">{performanceRatingerror}</p>}
                <TextField fullWidth value={relationshipSatisfaction} onChange={(event) => { setRelationshipSatisfaction(event.target.value); setRelationshipSatisfactionerror("") }} type = "number" name="relationshipSatisfaction" label="Relationship Satisfaction" variant="outlined" />
                {relationshipSatisfactionerror && <p className="error-message">{relationshipSatisfactionerror}</p>}
                <TextField fullWidth value={standardHours} onChange={(event) => { setStandardHours(event.target.value); setStandardHourserror("") }} type = "number" name="standardHours" label="Standard Hours" variant="outlined" />
                {standardHourserror && <p className="error-message">{standardHourserror}</p>}
                <TextField fullWidth value={stockOptionLevel} onChange={(event) => { setStockOptionLevel(event.target.value); setStockOptionLevelerror("") }} type = "number" name="stockOptionLevel" label="Stock Option Level" variant="outlined" />
                
                {stockOptionLevelerror && <p className="error-message">{stockOptionLevelerror}</p>}
                <TextField fullWidth value={totalWorkingYears} onChange={(event) => { setTotalWorkingYears(event.target.value); setTotalWorkingYearserror("") }} type = "number" name="totalWorkingYears" label="Total Working Years" variant="outlined" />
                {totalWorkingYearserror && <p className="error-message">{totalWorkingYearserror}</p>}
                <TextField fullWidth value={trainingTimesLastYear} onChange={(event) => { setTrainingTimesLastYear(event.target.value); setTrainingTimesLastYearerror("") }} type = "number" name="trainingTimesLastYear" label="Training Times Last Year" variant="outlined" />
                {trainingTimesLastYearerror && <p className="error-message">{trainingTimesLastYearerror}</p>}
                <TextField fullWidth value={workLifeBalance} onChange={(event) => { setWorkLifeBalance(event.target.value); setWorkLifeBalanceerror("") }} type = "number" name="workLifeBalance" label="Work Life Balance" variant="outlined" />
                {workLifeBalanceerror && <p className="error-message">{workLifeBalanceerror}</p>}
                <TextField fullWidth value={yearsAtCompany} onChange={(event) => { setYearsAtCompany(event.target.value); setYearsAtCompanyerror("") }} type = "number" name="yearsAtCompany" label="Years at Company" variant="outlined" />
                {yearsAtCompanyerror && <p className="error-message">{yearsAtCompanyerror}</p>}
                <TextField fullWidth value={yearsInCurrentRole} onChange={(event) => { setYearsInCurrentRole(event.target.value); setYearsInCurrentRoleerror("") }} type = "number" name="yearsInCurrentRole" label="Years in Current Role" variant="outlined" />
                {yearsInCurrentRoleerror && <p className="error-message">{yearsInCurrentRoleerror}</p>}
                <TextField fullWidth value={yearsSinceLastPromotion} onChange={(event) => { setYearsSinceLastPromotion(event.target.value); setYearsSinceLastPromotionerror("") }} type = "number" name="yearsSinceLastPromotion" label="Years Since Last Promotion" variant="outlined" />
                {yearsSinceLastPromotionerror && <p className="error-message">{yearsSinceLastPromotionerror}</p>}
                <TextField fullWidth value={yearsWithCurrManager} onChange={(event) => { setYearsWithCurrManager(event.target.value); setYearsWithCurrManagererror("") }} type = "number" name="yearsWithCurrManager" label="Years with Current Manager" variant="outlined" />
                {yearsWithCurrManagererror && <p className="error-message">{yearsWithCurrManagererror}</p>}
            <Button fullWidth onClick={Addemployeedata} variant="contained">Add Employee</Button>
            <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
            <MuiAlert
            onClose={handleCloseSnackbar}
            severity={snackbarSeverity}
            elevation={6}
            variant="filled"
            >
            {snackbarMessage}
            </MuiAlert>
            </Snackbar>
            </div>


 <Footer/>
        </>
    );
}

export default Addemployee;
