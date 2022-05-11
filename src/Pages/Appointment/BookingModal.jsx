import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({date, treatment}) => {
    const {name, slots} = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>

                    <form onSubmit={handleBooking} className="grid grid-col-1 justify-items-center gap-3 mt-3">
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />

                        <select name="slot" class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)    
                            }
                        </select>

                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs uppercase text-white" />
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default BookingModal;