import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';

const AddProduct = ({ onAdd, category }) => {
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();
  const onHandleSubmit = (data) => {
    onAdd(data);
    
    history.push("/admin/products");
  };

  return (
    <div class="content-wrapper">
      <section class="content">
        <h3 className="card-title">Thêm sản phẩm</h3>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="inputProductName"
              
              ref={register({ required: true })}
              aria-describedby="nameHelp"
            />
            <small id="nameHelp" className="form-text text-danger">{errors.name && <span>This field is required</span>}</small>

           
            <label htmlFor="inputProductImage">Ảnh sản phẩm</label>
            <input
              type="text"
              name="image"
              className="form-control"
              id="inputProductImage"
              
              ref={register({ required: true })}
              aria-describedby="imageHelp"
            />
              <small id="imageHelp" className="form-text text-danger">{errors.image && <span>This field is required</span>}</small>
              
             
              <label htmlFor="inputProductImage">Danh mục sản phẩm</label>
              <select className = "form-control" name="category_id" ref={register({ required: true })}>
                  {category.map(({id, name},index) =>(
                    <option value = {id}>{name}</option>
                  ))}
                  
              </select>
              
            {/* <div class="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div> */}
          </div>
          <div className="form-group">
            <label htmlFor="inputProductPrice">Giá sản phẩm</label>
            <input
              type="text"
              name="price"
              className="form-control"
              id="inputProductPrice"
              
              ref={register({ required: true })}
              aria-describedby="priceHelp"
            />
             <small id="priceHelp" className="form-text text-danger">{errors.price && <span>This field is required</span>}</small>
            
             <label htmlFor="exampleInputEmail1">Mô tả sản phẩm</label>
                        <textarea className="form-control"
                            name="desc" id="inputProductName"
                            type="text"
                            ref={register({ required: true })} />
                        {errors.desc && <span style={{ color: "red" }}>Mô tả sản phẩm không được để trống</span>}
                    
          </div>
          <button  type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default AddProduct;
