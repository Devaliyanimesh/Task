import React from 'react';

export default function Toggle({ viewactive, toggleView }) {
    return (
        <div className='flex rounded-lg overflow-hidden'>
            {/* Card View Toggle */}
            <div
                onClick={() => toggleView('cardView')}
                className={`cursor-pointer px-[1.5rem] py-[1rem] ${viewactive === 'cardView' ? 'bg-[#93e6c4]' : 'bg-[#d8e0e8]'}`}
            >
                <svg fill="#000000" width="25px" height="25px" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50,12.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z" />
                    <path d="M50,28H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z" />
                    <path d="M50,43.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z" />
                </svg>
            </div>

            {/* List View Toggle */}
            <div
                onClick={() => toggleView('listView')}
                className={`cursor-pointer px-[1.5rem] py-[1rem] ${viewactive === 'listView' ? 'bg-[#93e6c4]' : 'bg-[#d8e0e8]'}`}
            >
                <svg fill="#000000" width="25px" height="25px" viewBox="0 0 92 92" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.6,14c0-2.8,2.2-5,5-5H86c2.8,0,5,2.2,5,5s-2.2,5-5,5H30.6C27.8,19,25.6,16.8,25.6,14zM86,41H30.6c-2.8,0-5,2.2-5,5s2.2,5,5,5H86c2.8,0,5-2.2,5-5S88.8,41,86,41zM86,73H30.6c-2.8,0-5,2.2-5,5s2.2,5,5,5H86c2.8,0,5-2.2,5-5S88.8,73,86,73zM9,39.4c-3.9,0-7,3.2-7,7.1s3.1,7.1,7,7.1c3.9,0,7-3.2,7-7.1S12.8,39.4,9,39.4zM9,7c-3.9,0-7,3.2-7,7.1c0,3.9,3.1,7.1,7,7.1c3.9,0,7-3.2,7-7.1C16,10.2,12.8,7,9,7zM9,70.8c-3.9,0-7,3.2-7,7.1C2,81.8,5.1,85,9,85c3.9,0,7-3.2,7-7.1C16,74,12.8,70.8,9,70.8z" />
                </svg>
            </div>
        </div>
    );
}
