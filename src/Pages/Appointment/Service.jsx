import React from 'react';

const Service = ({service}) => {
    const {name, slots} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>
                    {slots.length > 0 ? <span>{slots[0]}</span> : <span className="text-red-500">Try another date.</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center mt-6">
                <button className="btn btn-secondary text-bold uppercase text-white">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;