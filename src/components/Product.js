import React from 'react';
import {Link} from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from '../components/Rating';
const Product = ({product}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}></Link>
            <Card.Img src={product.image} variant='top'/>
        <Card.Body>
        <Link to={`/product/${product._id}`}>
            <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
        </Link>
          <Card.Text as='div'>
            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
          </Card.Text>
        </Card.Body>
        </Card>
    )
}

export default Product
