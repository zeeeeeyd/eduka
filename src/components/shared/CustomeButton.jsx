import React from 'react'

const CustomeButton = ({title, handleClick}) => {
  return (
    <button className={`px-5 py-3 rounded-full text-white text-sm bg-blue hover:bg-blue-700`} onClick={handleClick}>
        {title}
    </button>
  )
}

export default CustomeButton