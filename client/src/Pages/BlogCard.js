import React from "react";

export const BlogCard = ({ blogItem }) => {
  return (
    <div className="blogCard">

      <div className="card mb-3 text-info" style={{ maxWidth: "20rem" }}>
        <div className="card-body">
          <h4 className="card-title">{blogItem.title}</h4>
          <h6 className="card-subtitle mb-2">date</h6>
          <p className="card-text">{blogItem.content}</p>
          <button type="button" class="btn btn-info m-1">Edit</button>
          <button type="button" class="btn btn-info m-1">Delete</button>
        </div>
      </div>

    </div>
  );
};
