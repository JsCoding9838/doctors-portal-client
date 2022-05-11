import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from '../Appointment/Service';
import BookingModal from './BookingModal';

const AvailableAppointments = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    } , [])
    return (
        <div>
            <h4 className="text-secondary text-center font-semibold">Available Appointments on {format(date, 'PP')}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
                }
            </div>
            {
                treatment && <BookingModal treatment={treatment} date={date}></BookingModal>
            }
            
        </div>
    );
};

export default AvailableAppointments;