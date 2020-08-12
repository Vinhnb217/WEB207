import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Category from '../Category';
import Swal from 'sweetalert2';     

    
    const EditPost = ({ post, onUpdatePost,  }) => {
        console.log(post);
        const { register, handleSubmit, errors } = useForm();
        let { id } = useParams();
        let history = useHistory();
        let posts = post.find((data) => data.id == id);
        const [currentPost, setCurrentPost] = useState(posts);
        console.log(currentPost);
        const onHandleSubmit = (e) => {
            Swal.fire(
                'Updated!',
                'Your file has been updated.',
                'success'
            )
            onUpdatePost(currentPost);
          history.push("/admin/post");
        };
        const onHandleChange = (e) => {
          const { name, value } = e.target;
          setCurrentPost({
            ...currentPost,
            [name]: value,
          });
        };
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)} className="w-50" >
                <div className="form-group">
                <h3 className="card-title">Chỉnh sửa bài viết</h3>
                    <label htmlFor="productName">Tiêu đề</label>
                    <input type="text" name="title" value={currentPost.title} onChange = {onHandleChange} className="form-control" ref={register({ required: true })} />
                    {errors.name && <span>This field is required</span>}
                </div>



                <div className="form-group">
                    <label htmlFor="productName">Ảnh sản phẩm</label>
                    <input type="text" name="image" value={currentPost.image} onChange = {onHandleChange} className="form-control" ref={register({ required: true })}/>
                    {errors.image && <span>This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="productName">Mô tả sản phẩm</label>
                    <textarea type="text" name="content" defaultValue={currentPost.content} onChange={onHandleChange} className="form-control" ref={register({ required: true })} />
                </div>
                    {errors.content && <span style={{ color: "red" }}>Mô tả sản phẩm không được để trống</span>}
                
                <button className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    )
}

EditPost.propTypes = {
    products: PropTypes.array
}

export default EditPost