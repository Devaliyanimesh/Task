import React from 'react';

const time = "Mon, 21 Dec 2020 14:25 GMT";

export default function Cardview({ data, fun, index }) {
  return (
    <div className='w-[32%] rounded-lg shadow-xl px-1 py-1 bg-white  '>
      <div
        onClick={fun}
        className="flex justify-end"
        title="Remove"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="22px" height="22px">
          <path fill="#f44336" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" />
          <path fill="#fff" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z" />
          <path fill="#fff" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z" />
        </svg>

      </div>
      <div className="flex flex-col-reverse gap-2 px-4 pb-4">
        {/* Delete Icon */}


        {/* Image */}
    <img
  className="w-full h-40 object-cover rounded-md"
  src={`https://picsum.photos/seed/img-${index}/200/300`}
  alt={`Post thumbnail ${index}`}
/>



        {/* Text Content */}
        <div className="flex flex-col gap-1">
          {data?.title && (
            <h4 className="text-lg font-semibold truncate">
              <abbr className="no-underline" title={data.title}>
                {data.title}
              </abbr>
            </h4>
          )}

          {data?.body && (
            <p className="text-sm text-gray-700 truncate">
              <abbr className="no-underline" title={data.body}>
                {data.body}
              </abbr>
            </p>
          )}
          {time && <p className="text-xs text-gray-500">{time}</p>}
        </div>

      </div>
    </div>


  );
}
