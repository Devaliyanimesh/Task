import React, { useState, useEffect } from 'react'
import { fetchData } from '../../utils/apiCall'
import Cardview from '../Component/Cardview'
import Listview from '../Component/Listview'
import Toggle from '../Component/Toggle'
import Feedback from '../Form/Feedback'
import Loader from '../Component/Loader'
import Pagination from '../Component/Pagination'

export default function Home() {
  const [datalist, setDataList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [viewType, setViewType] = useState("listView")
  const [feedbackForm, setFeedbackForm] = useState(false)
  const [loader, setLoader] = useState(false)
  const itemsPerPage = 6
  const username = 'Reader'

  useEffect(() => {
    async function apiCall() {
      try {
        const response = await fetchData("https://jsonplaceholder.typicode.com/posts", "get")
        if (response?.data) {
          setDataList(response.data)
        } else {
          throw new Error("API did not return data")
        }
      } catch (error) {
        console.error("Error fetching API:", error)
      } finally {
      }
    }

    apiCall()
  }, [])

  function removeElement(indexToRemove) {
    const actualIndex = (currentPage - 1) * itemsPerPage + indexToRemove
    const updatedList = datalist.filter((_, index) => index !== actualIndex)
    setDataList(updatedList)
  }

  const totalPages = Math.ceil(datalist.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentData = datalist.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className='flex flex-col gap-6 bg-[#e4ecf2] px-6 py-6 min-h-screen'>
      <div className='flex gap-6 h-full'>
        
        {/* Sidebar */}
        <div className={`w-fit z-40 ${!feedbackForm ? "shadow-lg" : ""} bg-[#e3eaf0] rounded-md px-[3rem] pt-[2.5rem]`}>
          <div className='flex flex-col gap-[1.5rem]'>

            <div className='bg-white flex gap-4 items-center px-4 py-2 rounded-lg shadow-lg'>
              <img
                className='w-[60px] h-[50px] rounded-full'
                src="data:image/png;base64,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"
                alt="User avatar"
              />
              <div>
                <h4 className='text-lg font-bold w-[12rem] truncate'>
                  <abbr className="no-underline" title={username}>Hi {username}</abbr>
                </h4>
                <p className='text-[1rem] w-[12rem] truncate'>
                  <abbr className="no-underline" title={"Here's your News!"}>Here's your News!</abbr>
                </p>
              </div>
            </div>

            {!feedbackForm &&
              <div className='bg-white flex flex-col justify-center items-center py-[1.5rem] rounded-lg shadow-lg'>
                <h1 className='text-center mb-2 text-[1.5rem] font-bold'>View Toggle</h1>
                <Toggle viewactive={viewType} toggleView={()=>{
                    setLoader(true)
                    setTimeout(()=>{
                    setLoader(false)

                    },3000)
                    setViewType}} />
              </div>
            }

            <div className='bg-white flex flex-col justify-center items-center py-[1.5rem] rounded-lg shadow-lg'>
              <h1 className='text-center mb-2 text-[1.5rem] font-bold'>Have a Feedback?</h1>
              <button
                className={`${feedbackForm ? 'bg-[#eca4a7]' : 'bg-[#93e6c4]'} py-[0.8rem] px-[1.5rem] rounded-lg font-bold`}
                onClick={() => setFeedbackForm(!feedbackForm)}
              >
                We're listening!
              </button>
            </div>

          </div>
        </div>

        {/* Main Content */}
        <div className={`w-[70%] flex  flex-col justify-between gap-6 ${feedbackForm ? "relative" : ""}`}>

          {loader ? (
            <Loader />
          ) : (
            <>
              <div className={`${viewType === "listView" ? 'flex flex-col gap-4' : 'flex flex-wrap gap-4'} ${feedbackForm ? "blur-lg" : ""}`}>
                {currentData.map((e, index) =>
                  viewType === "listView"
                    ? <Listview key={e.id} data={e} fun={() => removeElement(index)} />
                    : <Cardview key={e.id} data={e} fun={() => removeElement(index)} />
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

          {feedbackForm && (
            <div className='absolute z-20  bottom-0 -left-[30px] rounded-r-lg w-full h-screen bg-[#e3eaf0] px-[1.5rem] pt-[2.5rem]'>
              <Feedback />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
