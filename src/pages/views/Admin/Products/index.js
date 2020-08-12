import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import categoryApi from "../../../../api/categoryApi";

const ProductsManager = ({ onRemove, products, category }) => {
  let { id } = useParams();
  // const categories = category.find(category => category.id == id);
  const [filter, setFilter] = useState("");
  const removeHandle = (id) => {
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
        onRemove(id);
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
          {/* <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6> */}

          <Link to="/admin/addproducts" className="btn btn-success">
            {" "}
            Thêm sản phẩm
          </Link>

          <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
              <input
                className="form-control bg-light border-0 small"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Search for..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-search fa-sm" />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Image</th>
                  <th scope="col">Price</th>
                  <th scope="col">Category</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => {
                  if (filter.length !== 0) {
                    if (product.name.startsWith(filter)) {
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>
                            <Link to={`/admin/DetailProduct/${product.id}`}>{product.name}</Link>
                          </td>
                          <td>
                            <img src={product.image} alt="" width="50" />
                          </td>
                          <td>{product.price}</td>
                          <td>
                            {category.map((cate) => cate.id == product.category_id && (<p>{cate.name}</p>))}
                          </td>
                          <td>
                            <button className="btn btn-danger" onClick={() => removeHandle(product.id)}>
                              Xóa
                            </button>
                            <Link className="btn btn-primary ml-2" to={`/admin/edit-product/${product.id}`}>
                              Sửa
                            </Link>
                          </td>
                        </tr>
                      );
                    } else {
                      return null;
                    }
                  }
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <Link to={`/admin/detail-product/${product.id}`}>
                          {product.name}
                        </Link>
                      </td>
                      <td>
                        <img src={product.image} alt="" width="50" />
                      </td>
                      <td>{product.price}</td>
                      <td>
                        {category.map(
                          (cate) =>
                            cate.id == product.category_id && <p>{cate.name}</p>
                        )}
                      </td>
                      <td>
                        <button className="btn btn-danger" onClick={() => removeHandle(product.id)}>
                          Xóa
                        </button>
                        <Link className="btn btn-primary ml-2" to={`/admin/editproducts/${product.id}`}>
                          Sửa
                        </Link>
                        <Link className="btn btn-info ml-2"
                          to={`/admin/DetailProduct/${product.id}`}
                        >
                          Chi tiết
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductsManager.propTypes = {};

export default ProductsManager;
