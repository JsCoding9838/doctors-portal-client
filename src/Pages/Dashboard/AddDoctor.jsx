import id from 'date-fns/esm/locale/id/index.js';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, } = useForm();

    const {data: services, isLoading} = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))

    /* 
    *
    * 2 ways to store images
    * 1. Third party storage // Free open public storage is ok for Practice project
    * 2. Your own storage in your own server (file system)
    * 3. Database: Mongodb
    * 
    * YUP: to validate file: Search: Yup file validation for react hook from
    */

    const onSubmit = async (data) => {
        console.log("data", data);
    };

    if(isLoading){
        return <Loading />
    }
    return (
        <div>
            <h2 className="text-2xl my-3 font-semibold">Add a New Doctor</h2>

            <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="name"
                        placeholder="Your Name"
                        className="input input-bordered max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Name is required",
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                                {errors.name.message}
                            </span>
                        )}
                    </label>
                </div>

                <div className="form-control max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered max-w-xs"
                        {...register("email", {
                        required: {
                            value: true,
                            message: "Email is required",
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: "Provide a valid Email",
                        },
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                                {errors.email.message}
                            </span>
                        )}

                        {errors.email?.type === "pattern" && (
                            <span className="label-text-alt text-red-500">
                                {errors.email.message}
                            </span>
                        )}
                    </label>
                </div>

                <div className="form-control max-w-xs mb-5">
                    <label className="label">
                        <span className="label-text">Speciality</span>
                    </label>
                    <select {...register('speciality')} className="select input-bordered w-full max-w-xs">
                        {
                            services.map(service => <option key={service._id} value={service.name}>
                                {service.name}
                            </option>)
                        }
                    </select>
                </div>
                <input
                    className="btn w-full max-w-xs text-white"
                    type="submit"
                    value="Add"
                />
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;