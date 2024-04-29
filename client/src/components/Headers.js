// import React, { useEffect, useState } from 'react'
// import "./headers.css"
// import axios from "axios"
// import { NavLink } from 'react-router-dom'
// import logo from "../../src/logo.svg"
// export default function Headers() {

//   const [userdata, setUserdata] = useState({});

//   const getUser = async()=>{
//     try {
//       const response = await axios.get("http://localhost:5000/login/success",{withCredentials:true});

//       console.log("response",response)
//       setUserdata(response.data.userdata)
      
//     } catch (error) {
//       console.log("error")
      
//     }
//   }

//   useEffect(()=>{
//     getUser()
//   },[])



//   return (
//     <>
//     <header>
//       <nav>
//         <div className='left'>
//           <h1>Dhara Thakkar</h1>

//         </div>
//         <div className='right'>
//           <ul>
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             {}




//             <li> <NavLink to="/login">Login</NavLink></li>

//             <li> <NavLink to="/dashboard">Dashboard</NavLink></li>

//             <li>
//               <img src={logo} style={{ width:'50px' }} alt=''/>
//             </li>

//           </ul>

//         </div>
//       </nav>
//     </header>
      
//     </>
//   )
// }




import React, { useEffect, useState } from 'react';
import "./headers.css";
import axios from "axios";
import { NavLink } from 'react-router-dom';
import logo from "../../src/logo.svg";

export default function Headers() {
  const [userdata, setUserdata] = useState({});

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:5000/login/success", { withCredentials: true });
      console.log("response", response);
      setUserdata(response.data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <header>
      <nav>
        <div className='left'>
          <h1>Dhara Thakkar</h1>
        </div>
        <div className='right'>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {
              userdata?.displayName ? (
                <>
                  <li>{userdata.displayName}</li>
                  <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                  <li>Logout</li>
                </>
              ) : (
                <li><NavLink to="/login">Login</NavLink></li>
              )
            }
            <li>
              <img src={logo} style={{ width: '50px' }} alt=''/>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
