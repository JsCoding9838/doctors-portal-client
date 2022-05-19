import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const {data: users, isLoading, refetch} = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("Access_token")}`,
        },
    }).then(res => res.json()));



    if(isLoading){
        return <Loading />
    }

    return (
        <div>
            <h2 className="text-2xl my-3 font-semibold">All Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>#id</th>
                            <th>email</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* <!-- row --> */}
                        {
                            users.map((user, index) => <UserRow key={user._id} user={user} refetch={refetch} index={index} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;