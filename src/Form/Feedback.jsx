import React, { useState } from 'react'
import Input from '../Element/Input';

export default function Feedback() {
    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        address: "",
        country: "",
        email: '',
        phonenumner: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setForm({
        firstname: "",
        lastname: "",
        address: "",
        country: "",
        email: '',
        phonenumner: '',
    })
        console.log(form);
    };
    return (
        <div>
            <h4 className='text-2xl font-bold'>Thank you so much for taking the time!</h4>
            <p className='text-[1rem] font-light'> Please provide below details!</p>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md  mt-8">
                <Input
                    label="First Name:"
                    name="firstname"
                    type="text"
                    value={form.firstname}
                    onChange={handleChange}
                    placeholder="Enter your firstname"
                />
                <Input
                    label="lastname:"
                    name="lastname"
                    type="text"
                    value={form.lastname}
                    onChange={handleChange}
                    placeholder="Enter your lastname"
                />
                <Input
                    label="Address:"
                    name="address"
                    type="textarea"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Enter your adress"
                />
                <Input
                    label="Country:"
                    name="country"
                    type="text"
                    value={form.country}
                    onChange={handleChange}
                    placeholder="please enter your country"
                />
                <Input
                    label="Email ID:"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                />
                <Input
                    label="Phone Number:"
                    name="phonenumner"
                    type="number"
                    value={form.phonenumner}
                    onChange={handleChange}
                    minLength="10"
                    placeholder="Enter your phonenumber"
                    required
                />

                <button
                    type="submit"
                    className="bg-[#36b37e] text-lg font-bold text-white px-4 py-1 rounded "
                >
                    Submit Feedback
                </button>
            </form>

        </div>
    )
}
