import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, refetch, index}) => {
    const {email, role} = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem("Access_token")}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('Faild to make an admin')
            }
            return res.json()
        })
        .then(data => {
            // console.log(data);
            if(data.modifiedCount > 0) {
                refetch();
                toast.success('Successfully made an Admin');
            }
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} className="btn btn-xs">make admin</button> : <button className="bg-green-500 hover:bg-green-700 text-white btn btn-xs">Admin Active</button>}</td>
            <td><button className="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;