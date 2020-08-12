import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Blog = ({post}) =>{
    return(
      <div className= "container">
          <section className="blog_area">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="blog_left_sidebar">          
         {post.map((post, index)=>      
         (
            <article className="row blog_item">
            <div className="col-md-9">
              <div className="blog_post">
                <img src={post.image} alt />
                <div className="blog_details">
                  <a href="single-blog.html">
                    <h2>{post.title}</h2>
                  </a>
                    <p>{post.content}</p>
                  <a href="single-blog.html" className="white_bg_btn">View More</a>
                </div>
              </div>
            </div>
          </article>
         )
         )}

          <nav className="blog-pagination justify-content-center d-flex">
            <ul className="pagination">
              <li className="page-item">
                <a href="#" className="page-link" aria-label="Previous">
                  <span aria-hidden="true">
                    <span className="lnr lnr-chevron-left" />
                  </span>
                </a>
              </li>
              <li className="page-item"><a href="#" className="page-link">01</a></li>
              <li className="page-item active"><a href="#" className="page-link">02</a></li>
              <li className="page-item"><a href="#" className="page-link">03</a></li>
              <li className="page-item"><a href="#" className="page-link">04</a></li>
              <li className="page-item"><a href="#" className="page-link">09</a></li>
              <li className="page-item">
                <a href="#" className="page-link" aria-label="Next">
                  <span aria-hidden="true">
                    <span className="lnr lnr-chevron-right" />
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="blog_right_sidebar">
          <aside className="single_sidebar_widget search_widget">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search Posts" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search Posts'" />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button"><i className="lnr lnr-magnifier" /></button>
              </span>
            </div>{/* /input-group */}
            <div className="br" />
          </aside>
          <aside className="single_sidebar_widget author_widget">
            <img className="author_img rounded-circle" src="/client/img/blog/author.png" alt />
            <h4>Vinh Nguyen Ba</h4>
            <p>Senior blog writer</p>
            <div className="social_icon">
              <a href="https://www.facebook.com/vinh.nguyenba.217/"><i className="fa fa-facebook" /></a>
              <a href="#"><i className="fa fa-twitter" /></a>
              <a href="#"><i className="fa fa-github" /></a>
              <a href="#"><i className="fa fa-behance" /></a>
            </div>
            <p>Boot camps have its supporters andit sdetractors. Some people do not understand why you
              should have to spend money on boot camp when you can get. Boot camps have itssuppor
              ters andits detractors.</p>
            <div className="br" />
          </aside>
          
          
         
          
        </div>
      </div>
    </div>
  </div>
</section>

      </div>


    )
}

Blog.propTypes = {

    }
    
export default Blog