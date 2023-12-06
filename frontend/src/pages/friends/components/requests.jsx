// import React, { useState, useEffect } from 'react';

// const FriendRequests = ({ userId, authToken }) => {
//  /* const [sentRequests, setSentRequests] = useState([]);
//   const [receivedRequests, setReceivedRequests] = useState([]);*/

//  /* useEffect(() => {
//     // Fetch friend requests when the component mounts
//     fetchFriendRequests();
//   }, []);*/
// /*
//   const fetchFriendRequests = async () => {
//     try {
//       // Fetch requests sent by the user
//       const sentResponse = await fetch(`http://localhost:5001/sent-requests/${userId}`, {
//         method: 'GET',
//         headers: {
//           'Content-type': 'application/json',
//           Authorization: `Bearer ${authToken}`,
//         },
//       });

//       // Fetch requests received by the user
//       const receivedResponse = await fetch(`http://localhost:5001/received-requests/${userId}`, {
//         method: 'GET',
//         headers: {
//           'Content-type': 'application/json',
//           Authorization: `Bearer ${authToken}`,
//         },
//       });

//       if (sentResponse.status === 200) {
//         const sentData = await sentResponse.json();
//         setSentRequests(sentData.sentRequests);
//       } else {
//         console.error('Failed to fetch sent requests');
//       }

//       if (receivedResponse.status === 200) {
//         const receivedData = await receivedResponse.json();
//         setReceivedRequests(receivedData.receivedRequests);
//       } else {
//         console.error('Failed to fetch received requests');
//       }
//     } catch (error) {
//       console.error('Error fetching friend requests', error);
//     }
//   };*/

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <table style={{ width: '60%', border: '1px solid #ddd', borderCollapse: 'collapse' }}>
//         <thead>
//           <tr>
//             <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>Requests Sent</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>Requests Received</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//               <h3>Requests Sent</h3>
//               <ul>
//                 {/* {sentRequests.map((request) => (
//                   <li key={request.id}>
//                     Request sent to {request.receiverName}
//                   </li>
//                 ))} */}
//               </ul>
//             </td>
//             <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//               <h3>Requests Received</h3>
//               <ul>
//                 {/* {receivedRequests.map((request) => (
//                   <li key={request.id}>
//                     {request.senderName} sent you a friend request
//                   </li>
//                 ))} */}
//               </ul>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default FriendRequests;
