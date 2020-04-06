import React, { Component } from 'react';
// import FileBase64 from 'react-file-base64';
import Search from './components/Search';
import axios from './api/axiosclient';
import Images from './components/ImageList';

export default class App extends Component {

    state = {keyword:'', imagesList:[]}

    async onSubmit(e) {
        let response = await axios.get('/search/photos', {
            params: {
                query: this.state.keyword,
                per_page: 15
            }
        });
        this.setState({imagesList: response.data.results})
    }

    onUserInput(e) {
        this.setState({keyword:e.target.value})
    }

    render() {
        return (
            <div className="container p-5">
                <Search onUserInput={this.onUserInput.bind(this)} onSubmit={this.onSubmit.bind(this)}></Search>
                <Images images={this.state.imagesList}/>
            </div>
        )
    }
}