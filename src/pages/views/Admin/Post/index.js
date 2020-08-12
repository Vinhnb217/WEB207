import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const Post = ({ onRemovePost, post }) => {
  const onRemoveHandlePost = (id) => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn xóa?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        onRemovePost(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
    // onRemove(id);
    console.log(id);
  };

  return (
    <div>
      {/* Page Heading */}
      <h1 className="h3 mb-2 text-gray-800">Tables</h1>
      <p className="mb-4">
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables, please visit the{" "}
        <a target="_blank" href="https://datatables.net">
          official DataTables documentation
        </a>
        .
      </p>
      {/* DataTales Example */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          
           <Link to="/admin/addpost" className="btn btn-success">
         
            Thêm bài viết
          </Link> 
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Content</th>
                  <th scope="col">Image</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {post.map(({ id, title, content, image }, index) => (
                  <tr key={index}>
                    <th scope="row">{id}</th>
                    <td>{title}</td>
                    <td>{content}</td>
                    <td><img src={image} alt="" width="50" /></td>
                    <td>
                      <button className="btn btn-danger" onClick={() => onRemoveHandlePost(id)}> Xóa</button>
                      <Link className='btn btn-primary ml-2' to={`/admin/editpost/${id}`}>Sửa</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {};

export default Post;
