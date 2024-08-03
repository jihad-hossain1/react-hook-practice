import React from 'react'

const MemoTitle = ({ title , className}) => {
    console.log("MemoTitle render")
  return (
    <h4 className={`text-2xl font-bold text-gray-700 font-serif text-nowrap ${className}`}>
        {title}
    </h4>
  )
}

export default React.memo(MemoTitle) //MemoTitle