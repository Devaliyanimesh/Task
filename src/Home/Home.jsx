import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../utils/apiCall';
import Cardview from '../Component/Cardview';
import Listview from '../Component/Listview';
import Toggle from '../Component/Toggle';
import Feedback from '../Form/Feedback';
import Loader from '../Component/Loader';
import Pagination from '../Component/Pagination';
import {
  removeElement,
  setAllData,
  setFeedbackFormDrawer,
  setListView,
  setViewToggleLoader,
} from '../store/slices/allDataSlice';

export default function Home() {
  const dispatch = useDispatch();
  const {
    data,
    userName,
    viewType,
    viewToggleLoader,
    feedbackFormDrawer,
  } = useSelector((state) => state.data);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetchData('https://jsonplaceholder.typicode.com/posts', 'get');
        if (response?.data) {
          dispatch(setAllData(response.data));
        } else {
          throw new Error('API did not return data');
        }
      } catch (error) {
        console.error('Error fetching API:', error);
      }
    }

    getData();
  }, [dispatch]);

  const totalPages = Math.ceil((data?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data?.slice(startIndex, startIndex + itemsPerPage) || [];

  return (
    <div className="flex flex-col gap-6 bg-[#e4ecf2] px-6 py-6 min-h-screen">
      <div className="flex gap-6 h-full">
        {/* Sidebar */}
        <aside className={`w-fit z-40 ${!feedbackFormDrawer ? 'shadow-lg' : ''} bg-[#e3eaf0] rounded-md px-[3rem] pt-[2.5rem]`}>
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

            {/* Toggle View */}
            {!feedbackFormDrawer && (
              <div className="bg-white flex flex-col justify-center items-center py-[1.5rem] rounded-lg shadow-lg">
                <h1 className="text-center mb-2 text-[1.5rem] font-bold">View Toggle</h1>
                <Toggle
                  viewactive={viewType}
                  toggleView={(newType) => {
                    dispatch(setViewToggleLoader(true));
                    dispatch(setListView(newType));
                    setTimeout(() => dispatch(setViewToggleLoader(false)), 3000);
                  }}
                />
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

        {/* Main Content */}
        <main className={`w-[70%] flex flex-col justify-between gap-6 ${feedbackFormDrawer ? 'relative' : ''}`}>
          {viewToggleLoader ? (
            <Loader />
          ) : (
            <>
              <div className={`${viewType === 'listView' ? 'flex flex-col gap-4' : 'flex flex-wrap gap-4'} ${feedbackFormDrawer ? 'blur-lg' : ''}`}>
                {currentData.map((item) =>
                  viewType === 'listView'
                    ? <Listview key={item.id} data={item} fun={() => dispatch(removeElement(item.id))} />
                    : <Cardview key={item.id} data={item} fun={() => dispatch(removeElement(item.id))} />
                )}
              </div>

              {/* Pagination */}
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </>
          )}

          {/* Feedback Drawer */}
          {feedbackFormDrawer && (
            <div className="absolute z-20 bottom-0 -left-[30px] rounded-r-lg w-full h-screen bg-[#e3eaf0] px-[1.5rem] pt-[2.5rem]">
              <Feedback />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
