import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../utils/apiCall';
import { setAllData } from '../store/slices/allDataSlice';
import Sidebar from './Sidebar';
import MainContent from './MainContent';


export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetchData('https://jsonplaceholder.typicode.com/posts', 'get');
        if (response?.data) dispatch(setAllData(response.data));
        else throw new Error('API did not return data');
      } catch (error) {
        console.error('Error fetching API:', error);
      }
    }
    getData();
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-6 bg-[#e4ecf2] px-6 py-6 min-h-screen">
      <div className="flex gap-6 h-full">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
