import React from "react";

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
        this.props.addVinyl(this.state)
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        {console.log(this.state)}
        return(
            <div>
                Add a New Viny!

                <form onSubmit={this.handleSubmit}>
                    <label>Artist:</label>
                    <input type="text" value={this.state.artist} onChange={this.handleChange} name="artist"/>

                    <label>Album:</label>
                    <input type="text" value={this.state.album} onChange={this.handleChange} name="album"/>

                    <label>Year:</label>
                    <input type="text" value={this.state.year} onChange={this.handleChange} name="year"/>

                    <label>Album Image Link:</label>
                    <input type="text" value={this.state.image_url} onChange={this.handleChange} name="image_url"/>

                    <label>Category:</label>

                    <input type="submit" value="Add to Collection" />

                </form>
            </div>
        )
    }


}



export default VinylFormContainer;