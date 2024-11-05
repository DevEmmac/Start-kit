import React from 'react';

const Button = ({label, backgroundColor, textColor}) => {
  return (
    <div className={`active:bg-opacity-10 w-fit h-10 py-2 px-6 rounded-lg font-semibold max:lg:my-0 cursor-pointer hover:shadow-md hover:text-white '
    ${backgroundColor ? `${backgroundColor} ${textColor}` 
          : "bg-transparent text-coral-red hover:text-[#2a2a41]"}`}>
        {label}
    </div>
  )
}

export default Button;