import React from 'react'

export default function Pagination({ totalPages, currentPage, setCurrentPage }) {
  return (
    <div className='flex justify-center gap-2'>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={`px-3 py-1 rounded-full ${
            currentPage === i + 1 ? 'bg-[#93e6c4]' : 'bg-white text-black border'
          }`}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  )
}
