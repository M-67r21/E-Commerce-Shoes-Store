import React from 'react'
import ProductCarousel from '../Components/ProductCarousel'
import Cards from '../Components/Cards'
import Row from 'react-bootstrap/esm/Row'
import Container from 'react-bootstrap/esm/Container'

const Homepage = () => {
  const categories = [
    'Nike',
    'Adidas',
    'Puma',
    'Amiri',
    'Naked Wolfe',
    'Luis Vuitton',
    'Vans',
    'Converse',
    'Gucci',
    'BapeStar',
    'Dior',
    'Clarks',
    'Tommy Hilfiger'
  ] 
  return (
    <>
      <ProductCarousel />
      <Container fluid>
        <Row xs={1} md={2} className="g-4 mt-5">
          {
            categories.map((category,idx ) => 
            <Cards key={idx} category={category} idx={idx} /> )
          }
        </Row>
      </Container>
    </>
  )
}

export default Homepage