import React from 'react'

const CustomeButton = ({title, backgroundColor, handleClick}) => {
  return (
    <button className={`px-7 py-4 rounded-full text-white text-lg bg-blue-600 hover:bg-blue-700`} onClick={handleClick}>
        {title}
    </button>
  )
}

export default CustomeButton