import React from 'react'

export const BlogCard = ({ blogItem }) => {
  return (
    <div className='blogCard'>
      <div className='card boarder-primary mb-3' style={{maxWidth: "20rem"}}>
        <div className='card-header'>
          <h2>{blogItem.title}</h2>
        </div>
        <div className='card-body'>
        <p>{blogItem.content}</p>
        </div>

      </div>


    </div>
  )
}
