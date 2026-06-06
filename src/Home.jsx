// import  './Home.css';
// import { useContext,useState } from 'react';
// import { ThemeContext } from './App';
// import { Link } from 'react-router-dom';
// import { CgProfile } from "react-icons/cg";
// export default function Home({ user }) {
//   const { theme,setTheme } = useContext(ThemeContext);
//   return (
//     <div className="home-container">
//         <Link to="/homea">HomeA</Link>
//         <Link to="/homeb">HomeB</Link>
//       <h1>Home</h1>
//       <p>{user.name}</p>
//       <p>{user.age}</p>
//       <p>{user.email}</p>
//       <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
      
//     </div>
//   );
// }

// export function HomeA(porps) {
//     const [formData, setFormData] = useState({
//         name: '',
//         age: '',
//         email: ''
//     }); 
     
//     const hamdleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData);
//         setFormData({
//             name: '',
//             age: '',
//             email: ''
//         });
//     }   
//     return (    
//         <div>
//             <Link to="/">Home</Link>
//             <h1>HomeA</h1>
//             <p>{porps.user.name}</p>
//             <p>{porps.user.age}</p>
//             <p>{porps.user.email}</p>
//             <form onSubmit={handleSubmit}>
//                 <CgProfile /><br />
//             <label htmlFor="name">Name:</label>
//                 <input type="text" name="name" placeholder="Name" value={formData.name} onChange={hamdleChange} /><br />
//                 <label htmlFor="age">Age:</label>
//                 <input type="number" name="age" placeholder="Age" value={formData.age} onChange={hamdleChange} /><br />
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" name="email" placeholder="Email" value={formData.email} onChange={hamdleChange} /><br />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// }

// export function HomeB({ user }) {
//     return (    
//         <div>
//             <Link to="/">Home</Link>
//             <h1>HomeB</h1>
//             <p>{user.name}</p>
//             <p>{user.age}</p>
//             <p>{user.email}</p>
//         </div>
//     );
// }
 

import React from 'react';
import { Link } from 'react-router-dom';
export default function Home({ user }) {
    return (
        <div>
        <Link to="/form">form</Link>
            <h1>Home</h1>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <p>{user.email}</p>
        </div>
    );
}

export function HomeA(porps) {
    return (
        <div>
            <h1>HomeA</h1>
            <p>{porps.user.name}</p>
            <p>{porps.user.age}</p>
            <p>{porps.user.email}</p>
        </div>
    );
}


export function HomeB({ user }) {
    return (
        <div>
            <h1>HomeB</h1>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <p>{user.email}</p>
        </div>
    );
}