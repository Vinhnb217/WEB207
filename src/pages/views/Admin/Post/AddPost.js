import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';

const AddPost = ({ onAddPost }) => {
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();
  const onHandleSubmit = (data) => {
    onAddPost(data);
    history.push("/admin/post");
  };

  return (
    <div class="content-wrapper">
      <section class="content">
        <h3 className="card-title">Tạo mới bài viết</h3>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Tiêu đề</label>
            <input
              type="text"
              name="title"
              className="form-control"
             
              
              ref={register({ required: true })}
              aria-describedby="nameHelp"
            />
            <small id="nameHelp" className="form-text text-danger">{errors.name && <span>This field is required</span>}</small>

           
            <label htmlFor="inputProductImage">Ảnh bài viết</label>
            <input
              type="text"
              name="image"
              className="form-control"
              id="inputProductImage"
              
              ref={register({ required: true })}
              aria-describedby="imageHelp"
            />
              <small id="imageHelp" className="form-text text-danger">{errors.image && <span>This field is required</span>}</small>
          </div>
          <div className="form-group">            
             <label htmlFor="exampleInputEmail1">Nội dung bài viết</label>
                        <textarea className="form-control"
                            name="content" 
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

export default AddPost;
