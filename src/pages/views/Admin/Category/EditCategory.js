import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
const EditCategory = ({ category, onUpdateCategory }) => {
    
    const { register, handleSubmit, errors } = useForm();
        let { id } = useParams();
        let history = useHistory();
        let categories = category.find((data) => data.id == id);
        const [currentCategory, setCurrentCategory] = useState(categories);
        console.log(currentCategory);
        const onHandleSubmitCate = (e) => {
        //   e.preventDefault();
          onUpdateCategory(currentCategory);
          history.push("/admin/category");
        };
        const onHandleChangeCate = (e) => {
          const { name, value } = e.target;
          setCurrentCategory({
            ...currentCategory,
            [name]: value,
          });
        };
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmitCate)} className="w-50" >
                <div className="form-group">
                    <label htmlFor="productName">Tên danh mục</label>
                    <input type="text" name="name" value={currentCategory.name} onChange = {onHandleChangeCate} className="form-control" ref={register({ required: true })} />
                    <small id="nameHelp" className="form-text text-danger">{errors.name && <span>Tên sản phẩm không được để trống</span>}</small>
                </div>

                <button className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    )
}
EditCategory.propTypes = {
}
export default EditCategory