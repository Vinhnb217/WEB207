import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const Category = ({ onRemoveCategory, category }) => {
  const removeHandleCate = (id) => {
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
        onRemoveCategory(id);
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
          
           <Link to="/admin/addcategory" className="btn btn-success">
         
            Thêm danh mục
          </Link> 
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {category.map(({ id, name }, index) => (
                  <tr key={index}>
                    <th scope="row">{id}</th>
                    <td>{name}</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => removeHandleCate(id)}> Xóa</button>
                      <Link className='btn btn-primary ml-2' to={`/admin/editcategory/${id}`}>Sửa</Link>
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

Category.propTypes = {};

export default Category;
