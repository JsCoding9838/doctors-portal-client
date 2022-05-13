import React from 'react';

const Service = ({service, setTreatment}) => {
    const {name, slots} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-12">
            <div className="card-body text-center">
                <h2 className="text-2xl font-semibold text-secondary">{name}</h2>
                <p>
                    {slots.length > 0 ? <span>{slots[0]}</span> : <span className="text-red-500">Try another date.</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>

                <div className="card-actions justify-center mt-6">
                    <label htmlFor="booking-modal" disabled={slots.length === 0} onClick={ ()=> setTreatment(service)}
                    className="btn btn-sm btn-secondary uppercase text-white bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;