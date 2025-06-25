import React, { useState } from 'react';

export default function Input({
    type = 'text',
    label = '',
    name,
    value,
    onChange,
    placeholder = '',
    required = false,
    minLength,
    maxLength,
    className = '',
    errorMessage = '',
    rows = 3,
}) {
    const [touched, setTouched] = useState(false);

    const handleBlur = () => {
        setTouched(true);
    };

    const isError = touched && required && !value;

    return (
        <div className="flex flex-col gap-1 w-full">
            {label && (
                <label htmlFor={name} className="text-base font-medium text-gray-700">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}

            {type === 'textarea' ? (
                <textarea
                    id={name}
                    name={name}
                    rows={rows}
                    className={` rounded-md px-3 py-2 text-sm focus:outline-none ${isError ? 'border-red-500' : 'border-gray-300'} ${className}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={handleBlur}
                    required={required}
                    minLength={minLength}
                    maxLength={maxLength}
                />
            ) : (
                <div className='flex items-center gap-5'>
                <input
                    id={name}
                    name={name}
                    type={type}
                    className={` rounded-md w-[70%] px-3 py-3 text-sm focus:outline-none  ${isError ? 'border-red-500' : 'border-gray-300'} ${className}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={handleBlur}
                    required={required}
                    minLength={minLength}
                    maxLength={maxLength}
                />
               {isError && (
                <p className="text-xs text-red-500 mt-1">
                    {errorMessage || `${ name} is required.`}
                </p>)}
                </div>
            )}


        </div>
    );
}
