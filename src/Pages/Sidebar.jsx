import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setListView, setViewToggleLoader, setFeedbackFormDrawer } from '../store/slices/allDataSlice';
import Toggle from '../Component/Toggle';

export default function Sidebar() {
  const dispatch = useDispatch();
  const { userName, viewType, feedbackFormDrawer } = useSelector((state) => state.data);

  const toggleView = (newType) => {
    dispatch(setViewToggleLoader(true));
    dispatch(setListView(newType));
    setTimeout(() => dispatch(setViewToggleLoader(false)), 3000);
  };

  return (
    <aside className={`w-fit z-40 ${!feedbackFormDrawer ? 'shadow-2xl' : ''} bg-[#e3eaf0] rounded-2xl px-[3rem] pt-[2.5rem]`}>
      <div className="flex flex-col gap-[1.5rem]">
        {/* User Info */}
        <div className="bg-white flex gap-4 items-center px-4 py-2 rounded-lg shadow-lg">
          <img
            className="w-[60px] h-[50px] rounded-full"
            src="https://avatars.githubusercontent.com/u/1?v=4"
            alt="User avatar"
          />
          <div>
            <h4 className="text-lg font-bold w-[12rem] truncate">
              <abbr className="no-underline" title={userName}>Hi {userName}</abbr>
            </h4>
            <p className="text-[1rem] w-[12rem] truncate">
              <abbr className="no-underline" title="Here's your News!">Here's your News!</abbr>
            </p>
          </div>
        </div>

        {/* Toggle */}
        {!feedbackFormDrawer && (
          <div className="bg-white flex flex-col justify-center items-center py-[1.5rem] rounded-lg shadow-lg">
            <h1 className="text-center mb-2 text-[1.5rem] font-bold">View Toggle</h1>
            <Toggle viewactive={viewType} toggleView={toggleView} />
          </div>
        )}

        {/* Feedback */}
        <div className="bg-white flex flex-col justify-center items-center py-[1.5rem] rounded-lg shadow-lg">
          <h1 className="text-center mb-2 text-[1.5rem] font-bold">Have a Feedback?</h1>
          <button
            className={`py-[0.8rem] px-[1.5rem] rounded-lg font-bold ${feedbackFormDrawer ? 'bg-[#eca4a7]' : 'bg-[#93e6c4]'}`}
            onClick={() => dispatch(setFeedbackFormDrawer(!feedbackFormDrawer))}
          >
            We're listening!
          </button>
        </div>
      </div>
    </aside>
  );
}
