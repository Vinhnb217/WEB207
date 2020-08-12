import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../pages/layouts/Main";
import MainAdmin from "../pages/layouts/MainAdmin";
//Admin
import Dashboard from "../pages/views/Admin/Dashboard";
import ProductsManager from "../pages/views/Admin/Products";

//Views
import Singleproduct from "../pages/views/Main/Singleproduct";
import Blog from "../pages/views/Main/Blog/index"
import Home from "../pages/views/Main/Home";
import AddProduct from "../pages/views/Admin/Products/AddProducts";
import DetailProduct from "../pages/views/Admin/Products/DetailProduct";
import EditProduct from "../pages/views/Admin/Products/EditProducts";

import Category from "../pages/views/Admin/Category";
import AddCategory from "../pages/views/Admin/Category/AddCategory";
import EditCategory from "../pages/views/Admin/Category/EditCategory";

import Post from "../pages/views/Admin/Post";
import AddPost from "../pages/views/Admin/Post/AddPost";
import EditPost from "../pages/views/Admin/Post/EditPost";

//Category

const Routers = ({ products, onRemove, onAdd, onUpdate, 
                    category, onAddCategory, onRemoveCategory, onUpdateCategory,
                    post, onRemovePost, onAddPost, onUpdatePost
                                                   }) => {
  const onHandleRemove = (id) => {
    onRemove(id);
  };
  const onHandleAdd = (product) => {
    onAdd(product);
  };
  const onHandleUpdate = (id, product) => {
    onUpdate(id, product);
  };
  const onHandleAddCategory = (categories) =>{
    onAddCategory(categories);
  }
  const onHandleRemoveCategory = (id) =>{
    onRemoveCategory(id);
  }
  const onHandleUpdateCategory = (id, categories) =>{
    onUpdateCategory(id, category);
  }

  const onHandleRemovePost = (id) =>{
    onRemovePost(id);
  }

  const onHandleAddPost = (post) =>{
    onAddPost(post);
  }

  const onHandleUpdatePost = (id, post) => {
    onUpdatePost(id, post);
  };
  
  return (
    <Router>
      <Switch>
        <Route path="/admin/:path?/:path?" exact>
          <MainAdmin>
            <Switch>
              <Route path="/admin" exact>
                <Dashboard products={products} post = {post} category = {category} />
              </Route>
              <Route path="/admin/products">
                <ProductsManager products={products} onRemove={onRemove} category = {category}/>
              </Route>

              <Route path="/admin/addproducts">
                <AddProduct onAdd={onAdd} category={category} />
              </Route>

              <Route path="/admin/DetailProduct/:id">
                <DetailProduct products={products} />
              </Route>
              <Route path="/admin/editproducts/:id">
                <EditProduct products={products} onUpdate={onUpdate} category = {category} />
              </Route>
              {/* Danh mục sản phẩm */}
              <Route path="/admin/category">
                <Category category={category} onRemoveCategory ={onRemoveCategory}  />
              </Route>
              <Route path = "/admin/addcategory">
                <AddCategory onAddCategory={onHandleAddCategory}/>
              </Route>
              <Route path = "/admin/editcategory/:id">
                <EditCategory category = {category} onUpdateCategory = {onHandleUpdateCategory}/>
              </Route>

              {/* Danh mục bài viết */}
              <Route path = "/admin/post">
                <Post post = {post} onRemovePost = {onHandleRemovePost}/>
              </Route>
              <Route path = "/admin/addpost">
                <AddPost post = {post} onAddPost = {onHandleAddPost}/>
              </Route>

              <Route path = "/admin/editpost/:id">
                <EditPost post = {post} onUpdatePost = {onHandleUpdatePost} />
              </Route>
            </Switch>
          </MainAdmin>
        </Route>

        <Route>
          <Main>
            <Switch>
              <Route path="/" exact>
                <Home products={products} />
              </Route>
              <Route path="/Singleproduct/:id">
                <Singleproduct products={products} category = {category}/>
              </Route>
              
              <Route path = "/post" exact>
                  <Blog post = {post}/>
              </Route>
            </Switch>
          </Main>
        </Route>
      </Switch>
    </Router>
  );
};

Routers.propTypes = {};

export default Routers;
