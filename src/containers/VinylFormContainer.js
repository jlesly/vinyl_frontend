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
                    <br/>

                    <label>Album:</label>
                    <input type="text" value={this.state.album} onChange={this.handleChange} name="album"/>
                    <br/>

                    <label>Year:</label>
                    <input type="text" value={this.state.year} onChange={this.handleChange} name="year"/>
                    <br/>

                    <label>Album Image Link:</label>
                    <input type="text" value={this.state.image_url} onChange={this.handleChange} name="image_url"/>
                    <br/>
                    
                    <label>Category:</label>

                    <input type="submit" value="Add to Collection" />
                    <ul>
                        <ol><input type="radio" value="Rock" checked={this.state.category_id === "Rock"} onChange={this.handleChange} name="category" /> Rock</ol>
                        <ol><input type="radio" value="Electronic" checked={this.state.category_id === "Electronic"} onChange={this.handleChange} name="category" /> Electronic</ol>
                        <ol><input type="radio" value="Hip Hop" checked={this.state.category_id === "Hip Hop"} onChange={this.handleChange} name="category" /> Hip Hop</ol>
                        <ol><input type="radio" value="Folk" checked={this.state.category_id === "Folk"} onChange={this.handleChange} name="category" /> Folk</ol>
                        <ol><input type="radio" value="Jazz" checked={this.state.category_id === "Jazz"} onChange={this.handleChange} name="category" /> Jazz</ol>
                    </ul>

                </form>
            </div>
        )
    }


}



export default VinylFormContainer;