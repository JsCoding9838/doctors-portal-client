import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className="flex justify-center items-center">
            <div className="flex-1 hidden lg:block">
                <img className="mt-[-150px]" src={doctor} alt="" />    
            </div>
            <div className="flex-1 p-4 mg:p-6 space-y-4">
                <h3 className="text-xl text-primary">
                    Appointment
                </h3>
                <h2 className="text-3xl text-white">Make an Appointment Today</h2>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. In placeat, temporibus ducimus facere itaque debitis nesciunt ullam quia ratione, quaerat nisi soluta accusantium quam labore eaque dicta. Tempore unde similique error nam, quidem voluptates porro magni iusto laboriosam! Deleniti, ut.</p>
                <PrimaryButton>get started</PrimaryButton>
            </div>       
        </section>
    );
};

export default MakeAppointment;