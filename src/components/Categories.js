import React from 'react';
import { connect } from 'react-redux';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Categories = ({ categories }) => {
    return(
        <Container fluid>
        <h2>Explore the collection by clicking a genre below.</h2>

        <Row xs={1} md={1} lg={2} xl={6}>    
            {categories.map(category => 
            <Col key={category.id} className='d-flex'>
            <Card border="dark" style={{ width: '18rem'}} className= 'bg-dark text-white text-center'>
            <Card.Body>
                <Card.Title>{category.name}</Card.Title>  
                <Card.Link href={`/categories/${category.id}/vinyls`}>Check it out!</Card.Link> 
            </Card.Body> 
            </Card>
        </Col>)}
        </Row>
        </Container>
    )
}


const mapStateToProps = state => {
    return { categories: state.categories }
}


export default connect(mapStateToProps)(Categories);