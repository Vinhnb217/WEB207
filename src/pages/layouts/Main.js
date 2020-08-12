import React from 'react';
import Header from '../../components/Main/Header'
import Footer from '../../components/Main/Footer'


export default ({ children }) => {
    console.log(children)
    return (
        <div>
            <Header />
            {children}
            {/* <Content/> */}
            <Footer />
        </div>
    )
}
