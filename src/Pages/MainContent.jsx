import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeElement } from '../store/slices/allDataSlice';
import Loader from '../Component/Loader';
import Pagination from '../Component/Pagination';
import Listview from '../Component/Listview';
import Cardview from '../Component/Cardview';
import Feedback from '../Form/Feedback';
import usePaginatedData from '../Hooks/usePaginatedData';

export default function MainContent() {
  const dispatch = useDispatch();
  const { data, viewType, viewToggleLoader, feedbackFormDrawer } = useSelector((state) => state.data);
  const {
    currentPage,
    totalPages,
    currentData,
    setCurrentPage,
  } = usePaginatedData(data, 6);

  return (
    <main className={`w-[70%] flex flex-col justify-between gap-6 ${feedbackFormDrawer ? 'relative' : ''}`}>
      {viewToggleLoader ? (
        <Loader />
      ) : (
        <>
          <div className={`${viewType === 'listView' ? 'flex flex-col gap-4' : 'flex flex-wrap gap-4'} ${feedbackFormDrawer ? 'blur-lg' : ''}`}>
            {currentData.map((item,index) =>
              viewType === 'listView'
                ? <Listview key={item.id} data={item}  index={item.id} fun={() => dispatch(removeElement(item.id))} />
                : <Cardview key={item.id} data={item} index={item.id}  fun={() => dispatch(removeElement(item.id))} />
            )}
          </div>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}

      {feedbackFormDrawer && (
        <div className="absolute z-20 top-0 bottom-0 -left-[30px] rounded-r-lg w-full h-[100%] bg-[#e3eaf0] px-[1.5rem] pt-[2.5rem]">
          <Feedback />
        </div>
      )}
    </main>
  );
}
