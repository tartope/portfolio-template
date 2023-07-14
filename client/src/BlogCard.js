import React from 'react'

export const BlogCard = ({ blogItem }) => {
  return (
    <div className='blogCard'>
        BlogCard
        <h3>{blogItem.title}</h3>
        <h4>{blogItem.content}</h4>
    </div>
  )
}
