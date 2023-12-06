

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BookRequests = ({ userId}) => {
//   const [bookRequests, setBookRequests] = useState([]);

//   useEffect(() => {
//     // Fetch book requests when the component mounts
//     fetchBookRequests();
//   }, []);

//   const fetchBookRequests = async () => {
//     try {
//       // Fetch book requests received by the user
//       const response = await axios.get(`http://localhost:5001/bookrequests/${userId}`, {
//         headers: {
//           'Content-type': 'application/json',
//           Authorization: 'Bearer ' + localStorage.getItem('TOKEN'),
//         },
//       });

//       if (response.status === 200) {
//         setBookRequests(response.data.bookRequests);
//       } else {
//         console.error('Failed to fetch book requests');
//       }
//     } catch (error) {
//       console.error('Error fetching book requests', error);
//     }
//   };

//   const handleAcceptRequest = async (requestId) => {
//     try {
//       // Send a request to accept the book request
//       const response = await axios.put(
//         'http://localhost:5001/acceptRequest',
//         { requestId },
//         {
//           headers: {
//             'Content-type': 'application/json',
//         Authorization: 'Bearer ' + localStorage.getItem('TOKEN'),
//           },
//         }
//       );

//       if (response.status === 200) {
//         // Book request accepted successfully, update the UI
//         fetchBookRequests();
//       } else {
//         console.error('Failed to accept book request');
//       }
//     } catch (error) {
//       console.error('Error accepting book request', error);
//     }
//   };

//   const handleDeclineRequest = async (requestId) => {
//     try {
//       // Send a request to decline the book request
//       const response = await axios.delete(`http://localhost:5001/declineRequest/${requestId}`, {
//         headers: {
//           'Content-type': 'application/json',
//           Authorization: 'Bearer ' + localStorage.getItem('TOKEN'),
//         },
//       });

//       if (response.status === 200) {
//         // Book request declined successfully, update the UI
//         fetchBookRequests();
//       } else {
//         console.error('Failed to decline book request');
//       }
//     } catch (error) {
//       console.error('Error declining book request', error);
//     }
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <table style={{ width: '100%', border: '1px solid #ddd', borderCollapse: 'collapse' }}>
//         <thead>
//           <tr>
//             <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>Book Requests</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookRequests.map((request) => (
//             <tr key={request._id}>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                 {request.bookName} requested by {request.fname} {request.lname}
//               </td>
//               <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
//                 <button onClick={() => handleAcceptRequest(request._id)}>Accept</button>
//                 <button onClick={() => handleDeclineRequest(request._id)}>Decline</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BookRequests;



// components/BookRequests.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookRequests = ({ userId }) => {
  const [bookRequests, setBookRequests] = useState([]);

  useEffect(() => {
    // Fetch book requests when the component mounts
    fetchBookRequests();
  }, []);

  const fetchBookRequests = async () => {
    try {
      // Fetch book requests received by the user
      const response = await axios.get(`http://localhost:5001/bookrequest/${userId}`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('TOKEN'),
        },
      });

      if (response.status === 200) {
        setBookRequests(response.data.bookRequests);
      } else {
        console.error('Failed to fetch book requests');
      }
    } catch (error) {
      console.error('Error fetching book requests', error);
    }
  };

  const handleAcceptRequest = async (requestId) => {
    try {
      // Send a request to accept the book request
      const response = await axios.put(
        'http://localhost:5001/acceptRequest',
        { requestId },
        {
          headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('TOKEN'),
          },
        }
      );

      if (response.status === 200) {
        // Book request accepted successfully, update the UI
        fetchBookRequests();
      } else {
        console.error('Failed to accept book request');
      }
    } catch (error) {
      console.error('Error accepting book request', error);
    }
  };

  const handleDeclineRequest = async (requestId) => {
    try {
      // Send a request to decline the book request
      const response = await axios.delete(`http://localhost:5001/declineRequest/${requestId}`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('TOKEN'),
        },
      });

      if (response.status === 200) {
        // Book request declined successfully, update the UI
        fetchBookRequests();
      } else {
        console.error('Failed to decline book request');
      }
    } catch (error) {
      console.error('Error declining book request', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <table style={{ width: '100%', border: '1px solid #ddd', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>Book Requests</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookRequests.map((request) => (
            <tr key={request._id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {request.bookName} requested by {request.fname} {request.lname}
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                <button onClick={() => handleAcceptRequest(request._id)}>Accept</button>
                <button onClick={() => handleDeclineRequest(request._id)}>Decline</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookRequests;











































