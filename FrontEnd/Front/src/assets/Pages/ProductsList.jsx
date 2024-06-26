import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import SortOptions from '../Components/SortOptions';
import PriceFilter from '../Components/FilterQueryResultsOptions/PriceFilter';
import RatingFilter from '../Components/FilterQueryResultsOptions/RatingFilter';
import CategoryFilter from '../Components/FilterQueryResultsOptions/CategoryFilter';
import AttributeFilter from '../Components/FilterQueryResultsOptions/AttributeFilter';
import ProductForList from '../Components/ProductForList';
import Paginations from '../Components/Paginations';

const ProductsList = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={3}>
          <ListGroup>
            <ListGroup.Item className='mb-3 mt-3'> <SortOptions /> </ListGroup.Item>
            <ListGroup.Item> 
              FILTER <br />
              {<PriceFilter />} </ListGroup.Item>
            <ListGroup.Item> {<RatingFilter />} </ListGroup.Item>
            <ListGroup.Item> {<CategoryFilter />} </ListGroup.Item>
            <ListGroup.Item> {<AttributeFilter />} </ListGroup.Item>
            <ListGroup.Item> 
              <Button variant="primary">Filter</Button>
              <Button variant="danger">Reset Filter</Button>

            </ListGroup.Item>
          </ListGroup>
          </Col>
          <Col md={9}>
            {Array.from({length:5}).map((_, idx)=>(
              <ProductForList 
              key={idx}
              images={[
                "/Images/AirMax90.jpg",
                "/Images/Samba.jpg",
                "/Images/Puma5.jpg",
                "/Images/Amiri.jpg",
                "/Images/Naked Wolf.jpg",
                "/Images/Lv.jpg",
                "/Images/Vans.jpg",
                "/Images/Converse.jpg",
                "/Images/Clarks.jpg",
                "/Images/Bape.jpg",
                "/Images/Dior.jpg",
                "/Images/Clarks.jpg",    
                "/Images/Tommy.jpg", ]}
              idx={idx}
              />  
            ))}
            
            {  <Paginations />  }
          </Col>
          </Row>
      </Container>
    </>
  )
}

export default ProductsList
