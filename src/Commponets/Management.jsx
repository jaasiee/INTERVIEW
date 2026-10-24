// import { useEffect, useState } from 'react';

// function Management() {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error('Failed to fetch user data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const filteredUsers = data.filter((item) => {
//     const keyword = searchTerm.toLowerCase();
//     return (
//       item.name.toLowerCase().includes(keyword) ||
//       item.email.toLowerCase().includes(keyword) ||
//       item.phone.toLowerCase().includes(keyword) ||
//       item.company?.name.toLowerCase().includes(keyword)
//     );
//   });

//   return (
//     <div style={{ textAlign: 'center', padding: '20px' }}>
//       <h1>Management</h1>

//       <div style={{ marginBottom: '20px' }}>
//         <label
//           style={{
//             display: 'inline-block',
//             width: '100%',
//             maxWidth: '500px',
//             border: '0px solid',
//             padding: '10px',
//             borderRadius: '1px',
//             backgroundColor: '',
//           }}
//         >
//           <span style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
//             Search User
//           </span>

//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             placeholder=""
//             style={{
//               width: '70%',
//               padding: '8px',
//               border: '1px solid #ccc',
//               borderRadius: '6px',
//             }}
//           />
//         </label>
//       </div>

//       <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
//         {filteredUsers.map((item) => (
//           <li
//             key={item.id}
//             style={{
//               border: '1px solid #ddd',
//               margin: '10px auto',
//               padding: '12px',
//               borderRadius: '1px',
//               maxWidth: '600px',
//               background: '#fff',
//             }}
//           >
//             <h1>{item.name}</h1>
//             <div>{item.email}</div>
//             <div>{item.phone}</div>
//             <div>{item.company.name}</div>
//           </li>
//         ))}
//       </ul>

//       {filteredUsers.length === 0 && searchTerm && (
//         <p>No user found for "{searchTerm}"</p>
//       )}
//     </div>
//   );
// }

// export default Management;