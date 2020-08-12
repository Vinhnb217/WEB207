import React, { useState, useEffect } from "react";
import "./App.css";
import Routers from "./routers";
import apiRequest from "./api/productApi";
import categoryApi from "./api/categoryApi";
import postApi from "./api/postApi";
// import { useHistory } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([apiRequest]);
  const [category, setCategory] = useState([categoryApi]);
  const [post, setPost] = useState([postApi]);
  // let history = useHistory();

  // Danh sách sản phẩm
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log("failed to request API: ", error);
      }
    };
    getProducts();
  }, []);

  // Xóa sản phẩm
  const onHandleRemove = async (id) => {
    try {
      const { data } = await apiRequest.remove(id);
      const newProducts = products.filter((product) => product.id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
  // Thêm sản phẩm
  const onHandleAdd = async (product) => {
    console.log(product)
    try {
      const { data } = await apiRequest.create(product);
      setProducts([...products, data]);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };

  // Cập nhật Products
  const onHandleUpdate = async (updateProducts) => {
    const newProducts = products.map(
      (Products) =>
        Products.id === updateProducts.id ? updateProducts : Products // Nếu Products.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    const { data } = await apiRequest.update(updateProducts.id, updateProducts);
    setProducts(newProducts);
  };

  //Category 
   
    useEffect(() => {
      const getCatetogory = async () => {
        try {
          const { data } = await categoryApi.getAll();
          setCategory(data);
        } catch (error) {
          console.log("failed to request API: ", error);
        }
      };
      getCatetogory();
    }, []);

  // Add category
      const onHandleAddCategory = async (categories) => {
        try {
          const { data } = await categoryApi.create(categories);
          setCategory([...category, data]);
        } catch (error) {
          console.log("failed to request API: ", error);
        }
          };
  //Del category
  const onHandleRemoveCategory = async (id) => {
    try {
      const { data } = await categoryApi.remove(id);
      const newCategory = category.filter((categories) => categories.id !== id);
      setCategory(newCategory);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
  //Edit category
  const  onHandleUpdateCategory = async (updateCategory) => {
    const newCategories = category.map(
      (Category) =>
      Category.id === updateCategory.id ? updateCategory : Category // Nếu Products.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    const { data } = await categoryApi.update(updateCategory.id, updateCategory);
    setCategory(newCategories);
  };
      //Post
      //List post
  useEffect(() => {
    const getPost = async () => {
      try {
        const { data } = await postApi.getAll();
        setPost(data);
      } catch (error) {
        console.log("failed to request API: ", error);
      }
    };
    getPost();
  }, []);
      //Xóa bài viết
       // Xóa sản phẩm
  const onHandleRemovePost = async (id) => {
    try {
      const { data } = await postApi.remove(id);
      const newPost = post.filter((posts) => posts.id !== id);
      setPost(newPost);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };

    // Thêm bài viết
    const onHandleAddPost = async (posts) => {
      console.log(posts)
      try {
        const { data } = await postApi.create(posts);
        setPost([...post, data]);
      } catch (error) {
        console.log("failed to request API: ", error);
      }
    };
      //Sửa bài viết
  const  onHandleUpdatePost = async (updatePost) => {
    const newPost = post.map(
      (Post) =>
      Post.id === updatePost.id ? updatePost : Post // Nếu Products.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    const { data } = await postApi.update(updatePost.id, updatePost);
    setPost(newPost);
  };




  return (
    <Routers
      products={products}
      onRemove={onHandleRemove}
      onAdd={onHandleAdd}
      onUpdate={onHandleUpdate}

      onAddCategory = {onHandleAddCategory}
      onRemoveCategory = {onHandleRemoveCategory}
      onUpdateCategory = {onHandleUpdateCategory}
      category = {category}

      post = {post}
      onRemovePost = {onHandleRemovePost}
      onAddPost = {onHandleAddPost}
      onUpdatePost = {onHandleUpdatePost}
      
    />
  );
}

export default App;