import  { useState,useEffect } from 'react';
import axios from 'axios';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [users, setUsers] = useState([]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/user/getall');
            console.log(response.data);
            setUsers(response.data);
        } catch (error) {
            console.error( error);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/user/register', formData);
            
            setFormData({
                name: '',
                email: '',
                password: ''
            });
            
            fetchUsers();
        } catch (error) {   
            console.error(error);
        }   
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/user/${id}`);
            fetchUsers();
        } catch (error) {
            console.error(error);
        }
    }
    const [updateId, setUpdateId] = useState('');
    const [updateName, setUpdateName] = useState('');
    const [updateEmail, setUpdateEmail] = useState('');

    const startUpdate = (user) => {
        setUpdateId(user._id);
        setUpdateName(user.name || '');
        setUpdateEmail(user.email || '');
    }

    const updateUser = async () => {
        if (!updateId) return;
        try {
            await axios.put(`http://localhost:5000/user/${updateId}`, {
                name: updateName,
                email: updateEmail
            });
            setUpdateId('');
            setUpdateName('');
            setUpdateEmail('');
            fetchUsers();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required /> 
                <button type="submit">Submit</button>
            </form>

            <h2>Users List</h2>

            <table border="1">  
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                        <button onClick={() => handleDelete(user._id)}>Delete</button>
                                        <button onClick={() => startUpdate(user)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            { /* Update section */ }
            <div style={{ marginTop: 20 }}>
                <h2>Update User</h2>
                <input
                    type="text"
                    placeholder="Enter new name"
                    value={updateName}
                    onChange={(e) => setUpdateName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Enter new email"
                    value={updateEmail}
                    onChange={(e) => setUpdateEmail(e.target.value)}
                />
                <button onClick={updateUser} disabled={!updateId}>Update</button>
            </div>
        </div>
    );

}

export default Form;
               