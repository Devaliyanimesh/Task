import React from 'react';

const time = "Mon, 21 Dec 2020 14:25 GMT";

export default function Cardview({ data, fun }) {
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
          src="data:image/jpeg;base64,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"

          alt="Post thumbnail"
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
