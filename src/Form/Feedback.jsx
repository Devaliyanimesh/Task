import React from 'react';
import Input from '../Element/Input';
import { useDispatch, useSelector } from 'react-redux';
import { updateFeedbackField, resetFeedbackForm } from '../store/slices/allDataSlice';

export default function Feedback() {
  const dispatch = useDispatch();

  const form = useSelector((state) => state.data?.feedbackForm);

  const handleChange = (e) => {
    dispatch(updateFeedbackField({ name: e.target.name, value: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    setTimeout(() => {
      dispatch(resetFeedbackForm());
    }, 1000);
  };

  return (
    <div>
      <h4 className='text-2xl font-bold'>Thank you so much for taking the time!</h4>
      <p className='text-[1rem] font-light'>Please provide below details!</p>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mt-8">
        <Input
          label="First Name:"
          name="firstname"
          type="text"
          value={form.firstname}
          onChange={handleChange}
          placeholder="Enter your firstname"
        />
        <Input
          label="Last Name:"
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
          placeholder="Enter your address"
        />
        <Input
          label="Country:"
          name="country"
          type="text"
          value={form.country}
          onChange={handleChange}
          placeholder="Enter your country"
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
          name="phonenumber" // ✅
          type="text"
          value={form.phonenumber}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />

        <button
          type="submit"
          className="bg-[#36b37e] text-lg font-bold text-white px-4 py-1 rounded"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}
