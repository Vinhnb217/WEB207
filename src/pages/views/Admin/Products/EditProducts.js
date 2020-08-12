import React, { useState } from "react";
import PropTypes from "prop-types";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Category from "../Category";
import Swal from "sweetalert2";

const EditProduct = ({ products, onUpdate, category }) => {
  const { register, handleSubmit, errors } = useForm();
  let { id } = useParams();
  let history = useHistory();
  let product = products.find((data) => data.id == id);
  const [currentProduct, setCurrentProduct] = useState(product);
  console.log(currentProduct);
  const onHandleSubmit = (e) => {
    Swal.fire("Updated!", "Your file has been updated.", "success");

    //   e.preventDefault();
    onUpdate(currentProduct);
    history.push("/admin/products");
  };
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({
      ...currentProduct,
      [name]: value,
    });
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onHandleSubmit)} className="w-50">
        <div className="form-group">
          <h3 className="card-title">Sửa sản phẩm</h3>
          <label htmlFor="productName">Tên sản phẩm</label>
          <input
            type="text"
            name="name"
            value={currentProduct.name}
            onChange={onHandleChange}
            className="form-control"
            ref={register({ required: true })}
          />
          {errors.name && <span>This field is required</span>}
        </div>

        <label htmlFor="inputProductImage">Danh mục sản phẩm</label>
        <select
          type="text"
          name="category_id"
          defaultValue={currentProduct.category_id}
          onChange={onHandleChange}
          className="form-control"
          ref={register({ required: true })}
        >
          {category &&
            category.map(({ id, name }, index) => (
              <option value={id}>{name}</option>
            ))}
        </select>

        <div className="form-group">
          <label htmlFor="productName">Ảnh sản phẩm</label>
          <input
            type="text"
            name="image"
            value={currentProduct.image}
            onChange={onHandleChange}
            className="form-control"
            ref={register({ required: true })}
          />
          {errors.image && <span>This field is required</span>}
        </div>

        <div className="form-group">
          <label htmlFor="productName">Giá sản phẩm</label>
          <input
            type="text"
            name="price"
            value={currentProduct.price}
            onChange={onHandleChange}
            className="form-control"
            ref={register({ required: true })}
          />
          {errors.price && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="productName">Mô tả sản phẩm</label>
          <textarea
            type="text"
            name="desc"
            defaultValue={currentProduct.desc}
            onChange={onHandleChange}
            className="form-control"
            ref={register({ required: true })}
          />
        </div>
        {errors.desc && (
          <span style={{ color: "red" }}>
            Mô tả sản phẩm không được để trống
          </span>
        )}

        <button className="btn btn-primary">Cập nhật</button>
      </form>
    </div>
  );
};

EditProduct.propTypes = {
  products: PropTypes.array,
};

export default EditProduct;
