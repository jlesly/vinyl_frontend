import React from 'react';
import { connect } from 'react-redux';
import { Card, Container, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import DeleteVinyl from './DeleteVinyl';




const Vinyls = ({ vinyls, category }) => {
    return (
        
        <div className='vinylsforcategory'>
            <br></br>
           
            <h1>{category.name} Vinyls:</h1>

            <Container fluid>
            <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
                {vinyls.map(vinylCat=> 
                <Col key={vinylCat.id} className='d-flex'>
                <Card border="dark" style={{ width: '18rem'}} className= 'text-center'>

                <Card.Img variant="top" src={vinylCat.image_url} alt={`Album cover for ${vinylCat.album}`}/>
                <Card.Body>
                    <Card.Title>{vinylCat.artist}</Card.Title>
                    
                </Card.Body>
                 <ListGroup className="list-group-flush">
                <ListGroupItem>Album: {vinylCat.album}</ListGroupItem>
                <ListGroupItem>Released: {vinylCat.year}</ListGroupItem>
                </ListGroup>
                <Link to={`/vinyls/${vinylCat.id}`}>{vinylCat.name}</Link>
                <br></br>
                <DeleteVinyl vinylCat={vinylCat}/>     
                <br></br>      
                </Card>
                </Col>)}
            </Row>
            </Container>  
    
                    
        </div>
    )
}

const mapStateToProps = state => {
    return { vinyls: state.vinyls }
}

export default connect(mapStateToProps)(Vinyls);
