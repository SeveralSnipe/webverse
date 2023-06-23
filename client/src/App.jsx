import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

const App = () => {
   const [posts, setPosts] = useState([]);
   const [token, setToken] = useState();
   // Function to fetch data using GET
   const fetchData = () => {
      axios
         .get('http://localhost:8000/health')
         .then((response) => {
            setPosts(response.data);
            console.log(response.data); // Print the response data
         })
         .catch((err) => {
            console.log(err);
         });
   };

   // Function to create new data using POST
   const createData = () => {
      const newData = {
        name: "Vishwa Kumar",
        regNo: "21BCE1534",
        block: "B",
        password: "plshelpmeeee",
        roomNo: "80085"
      };

      axios
         .post('http://localhost:8000/api/v1/student/auth/register', newData)
         .then((response) => {
            console.log(response.data); // Print the response data
            fetchData(); // Fetch updated data after successful POST request
         })
         .catch((err) => {
            console.log(err);
         });
   };

   const login = () => {
    const newData = {
      regNo: "21BCE1534",
      password: "plshelpmeeee"
    };

    axios
       .post('http://localhost:8000/api/v1/student/auth/login', newData)
       .then((response) => {
          console.log(response.data);
          setToken(response.data.token); // Print the response data
          fetchData(); // Fetch updated data after successful POST request
       })
       .catch((err) => {
          console.log(err);
       });
 };
 const details = () => {
  axios
     .get('http://localhost:8000/api/v1/student/me/', {
      headers: {
        Authorization: `Bearer ${token}` // Pass the token as a single string
      }
    } )
     .then((response) => {
        setPosts(response.data);
        console.log(response.data); // Print the response data
     })
     .catch((err) => {
        console.log(err);
     });
};
const warddetails = () => {
  axios
     .get('http://localhost:8000/api/v1/student/me/my-warden', {
      headers: {
        Authorization: `Bearer ${token}` // Pass the token as a single string
      }
    } )
     .then((response) => {
        setPosts(response.data);
        console.log(response.data); // Print the response data
     })
     .catch((err) => {
        console.log(err);
     });
};

const leavedetails = () => {
  axios
     .get('http://localhost:8000/api/v1/student/leave', {
      headers: {
        Authorization: `Bearer ${token}` // Pass the token as a single string
      }
    } )
     .then((response) => {
        setPosts(response.data);
        console.log(response.data); // Print the response data
     })
     .catch((err) => {
        console.log(err);
     });
};
const applyleave = () => {
  const newData = {
    leaveType: "Goa Trip",
  leaveDate: "24-06-2023",
  leaveTime: "12 am",
  leaveDuration: "31 days"
  };

  axios
     .post('http://localhost:8000/api/v1/student/leave', newData,{
      headers: {
        Authorization: `Bearer ${token}` 
      }
    })
     .then((response) => {
        console.log(response.data); 
        fetchData(); 
     })
     .catch((err) => {
        console.log(err);
     });
};
const updateleave = () => {
  const newData = {
    leaveID: 1,
    leaveType: "Goa Trip",
  leaveDate: "24-06-2023",
  leaveTime: "12 am",
  leaveDuration: "3 days"
  };

  axios
     .put('http://localhost:8000/api/v1/student/leave', newData,{
      headers: {
        Authorization: `Bearer ${token}` 
      }
    })
     .then((response) => {
        console.log(response.data); 
        fetchData(); 
     })
     .catch((err) => {
        console.log(err);
     });
};
const deleteleave = () => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: {
      leaveID: 1
    }
  };
  axios
     .delete('http://localhost:8000/api/v1/student/leave', config)
     .then((response) => {
        console.log(response.data); 
        fetchData(); 
     })
     .catch((err) => {
        console.log(err);
     });
};
const complaintdetails = () => {
  axios
     .get('http://localhost:8000/api/v1/student/complaint', {
      headers: {
        Authorization: `Bearer ${token}` // Pass the token as a single string
      }
    } )
     .then((response) => {
        setPosts(response.data);
        console.log(response.data); // Print the response data
     })
     .catch((err) => {
        console.log(err);
     });
};
const givecomplaint = () => {
  const newData = {
    
      complaintType: "Other",
      complaintDate: "24-06-2023",
      complaintDescription: "Too many assignments :(",
      complaintSeverity: "High"
    
  };

  axios
     .post('http://localhost:8000/api/v1/student/complaint', newData,{
      headers: {
        Authorization: `Bearer ${token}` 
      }
    })
     .then((response) => {
        console.log(response.data); 
        fetchData(); 
     })
     .catch((err) => {
        console.log(err);
     });
};
const updatecomplaint = () => {
  const newData = {
      complaintId: 1,
      complaintType: "Other",
      complaintDate: "24-06-2023",
      complaintDescription: "Too many assignments :(",
      complaintSeverity: "Low"
    
  };

  axios
     .put('http://localhost:8000/api/v1/student/complaint', newData,{
      headers: {
        Authorization: `Bearer ${token}` 
      }
    })
     .then((response) => {
        console.log(response.data); 
        fetchData(); 
     })
     .catch((err) => {
        console.log(err);
     });
};
const deletecomplaint = () => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: {
      complaintId: 1
    }
  };
  axios
     .delete('http://localhost:8000/api/v1/student/complaint', config)
     .then((response) => {
        console.log(response.data);
        fetchData(); 
     })
     .catch((err) => {
        console.log(err);
     });
};
const roomdetails = () => {
  axios
     .get('http://localhost:8000/api/v1/student/room-details', {
      headers: {
        Authorization: `Bearer ${token}` // Pass the token as a single string
      }
    } )
     .then((response) => {
        setPosts(response.data);
        console.log(response.data); // Print the response data
     })
     .catch((err) => {
        console.log(err);
     });
};
const messdetails = () => {
  axios
     .get('http://localhost:8000/api/v1/student/mess-details', {
      headers: {
        Authorization: `Bearer ${token}` // Pass the token as a single string
      }
    } )
     .then((response) => {
        setPosts(response.data);
        console.log(response.data); // Print the response data
     })
     .catch((err) => {
        console.log(err);
     });
};
const updatemess = () => {
  const newData = {
      messType: "Special"
  };

  axios
     .put('http://localhost:8000/api/v1/student/mess-details', newData,{
      headers: {
        Authorization: `Bearer ${token}` 
      }
    })
     .then((response) => {
        console.log(response.data); 
        fetchData(); 
     })
     .catch((err) => {
        console.log(err);
     });
};
const addcourse = () => {
  const newData = {
      courseId: 4
  };

  axios
     .post('http://localhost:8000/api/v1/student/course/add-course', newData,{
      headers: {
        Authorization: `Bearer ${token}` 
      }
    })
     .then((response) => {
        console.log(response.data); 
        fetchData(); 
     })
     .catch((err) => {
        console.log(err);
     });
};
const allregisteredcourses = () => {
  axios
     .get('http://localhost:8000/api/v1/student/course/get-all-registered', {
      headers: {
        Authorization: `Bearer ${token}` // Pass the token as a single string
      }
    } )
     .then((response) => {
        setPosts(response.data);
        console.log(response.data); // Print the response data
     })
     .catch((err) => {
        console.log(err);
     });
};
const addevent = () => {
  const newData = {
      eventName: "sdgdfgdfg",
      eventDescription: "sdfgdfgdgdfgdfg",
      eventDate: "13-03-2323",
      eventTime: "9 pm",
      eventVenue: "mg audi",
      eventOrganiser: "me",
      participantCount: 100,
      hostedBy: "me",
      eventPoster: "me"
  };

  axios
     .post('http://localhost:8000/api/v1/student/event', newData,{
      headers: {
        Authorization: `Bearer ${token}` 
      }
    })
     .then((response) => {
        console.log(response.data); 
        fetchData(); 
     })
     .catch((err) => {
        console.log(err);
     });
};
const allcourses = () => {
  axios
     .get('http://localhost:8000/api/v1/student/course/get-all', {
      headers: {
        Authorization: `Bearer ${token}` // Pass the token as a single string
      }
    } )
     .then((response) => {
        setPosts(response.data);
        console.log(response.data); // Print the response data
     })
     .catch((err) => {
        console.log(err);
     });
};
const showevents = () => {
  axios
     .get('http://localhost:8000/api/v1/student/event', {
      headers: {
        Authorization: `Bearer ${token}` // Pass the token as a single string
      }
    } )
     .then((response) => {
        setPosts(response.data);
        console.log(response.data); // Print the response data
     })
     .catch((err) => {
        console.log(err);
     });
};


   useEffect(() => {
      fetchData(); // Fetch initial data using GET
   }, []);

   return (
    <div>
      <button onClick={createData}>Register
      </button>
      <button onClick={login}>Login</button>
      <button onClick={details}>Details</button>
      <button onClick={warddetails}>Warden Details</button>
      <button onClick={leavedetails}>Leave Details</button>
      <button onClick={applyleave}>Apply Leave</button>
      <button onClick={updateleave}>Update Leave</button>
      <button onClick={deleteleave}>Delete Leave</button>
      <button onClick={complaintdetails}>Complaint Details</button>
      <button onClick={givecomplaint}>Give complaint</button>
      <button onClick={updatecomplaint}>Update complaint</button>
      <button onClick={deletecomplaint}>Delete complaint</button>
      <button onClick={roomdetails}>Room details</button>
      <button onClick={messdetails}>Mess details</button>
      <button onClick={updatemess}>Update Mess</button>
      <button onClick={addcourse}>Add course</button>
      <button onClick={allregisteredcourses}>Display all registered courses</button>
      <button onClick={allcourses}>Display all courses</button>
      <button onClick={addevent}>Add event</button>
      <button onClick={showevents}>Show events</button>
      
      </div>
   );
};

export default App;
