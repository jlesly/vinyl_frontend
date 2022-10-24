import React from "react";
import { connect } from "react-redux";
import { addVinyl } from '../actions/vinylsActions';
import { fetchCategories } from '../actions/categoriesActions';
import {Form, Button, Container} from 'react-bootstrap'


class VinylFormContainer extends React.Component {
    state = {
        artist: '',
        album: '', 
        year: '', 
        image_url: '',
        category_id: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addVinyl(this.state, this.props.history);

    }

    handleChange= e => {
        const { name, value } = e.target
        this.setState({
        [name]: value
     })
    }

    render() {
        return(
            <Container>
                <br></br>
                <h3>Add a New Vinyl:</h3>
                <br></br>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Label>Artist:</Form.Label>
                    <Form.Control type="text" name="artist" value={this.state.artist} onChange={this.handleChange} required/>
                    <br/>

                    <Form.Label>Album:</Form.Label>
                    <Form.Control type="text" name="album" value={this.state.album} onChange={this.handleChange} required/>
                    <br/>

                    <Form.Label>Year:</Form.Label>
                    <Form.Control type="text" name="year" value={this.state.year} onChange={this.handleChange} required/>
                    <br/>

                    <Form.Label>Album Image Link:</Form.Label>
                    <Form.Control type="text" name="image_url" value={this.state.image_url} onChange={this.handleChange} required/>
                    <br/>

                    <Form.Label>Category:</Form.Label>

                    <ul>
                        <ol><input type="radio" value="1" checked={this.state.category_id === "1"} onChange={this.handleChange} name="category_id" /> Rock</ol>
                        <ol><input type="radio" value="2" checked={this.state.category_id === "2"} onChange={this.handleChange} name="category_id" /> Electronic</ol>
                        <ol><input type="radio" value="3" checked={this.state.category_id === "3"} onChange={this.handleChange} name="category_id" /> Folk</ol>
                        <ol><input type="radio" value="4" checked={this.state.category_id === "4"} onChange={this.handleChange} name="category_id" /> Jazz</ol>
                        <ol><input type="radio" value="5" checked={this.state.category_id === "5"} onChange={this.handleChange} name="category_id" /> Hip Hop</ol>
                    </ul>
                    <Button variant="primary" type="submit">Add to the collection</Button>
                
                </Form>
            </Container>
        )
    }


}


export default connect(null, { addVinyl, fetchCategories })(VinylFormContainer);