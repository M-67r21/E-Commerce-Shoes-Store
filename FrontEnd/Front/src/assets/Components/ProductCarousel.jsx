import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { LinkContainer } from 'react-router-bootstrap';
// import one from "./Images/carousel-1.png";



const ProductCarousel = () => {
    const cursorP = {
        cursor: "pointer" 
    }
  return (
    <>
        <Carousel>
        <Carousel.Item>
            <img 
                crossOrigin='anonymous'
                className='d-block w-100'
                style={{height:'300px', objectFit:'cover'}}
                src="/Images/Nike.webp" 
                alt="This is the first slide" 
            />
            
            <Carousel.Caption>
            <LinkContainer style ={cursorP} to="/productdetails">
                <h1>Nike</h1>
            </LinkContainer>
            
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img 
                className='d-block w-100'
                src="Images/Adidas3.jpg" 
                style={{height:'300px', objectFit:'cover'}}
                alt="This is the Second slide"
            />
            
            <Carousel.Caption>
            <LinkContainer style ={cursorP} to="/productdetails">
                <h1>Adidas</h1>
            </LinkContainer>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img 
                className='d-block w-100'
                src="Images/Puma2.jpg" 
                style={{height:'300px', objectFit:'cover'}}
                alt="This is the third slide" 
            />
            
            <Carousel.Caption>
            <LinkContainer style ={cursorP} to="/productdetails">
                <h1>Puma</h1>
            </LinkContainer>
            
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </>
  )
}

export default ProductCarousel