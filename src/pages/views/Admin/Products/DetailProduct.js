import React from 'react'
import PropTypes from 'prop-types'
import {useParams} from 'react-router-dom';



const DetailProduct = ({products}) => {
    let {id} = useParams();
    const product = products.find(product => product.id == id);
    console.log(id);
    return (
        <div class="content-wrapper">
            {product.name}
            
        </div>
    )
}

DetailProduct.propTypes = {

}

export default DetailProduct
