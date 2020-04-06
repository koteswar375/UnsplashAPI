import React, { Component, createRef } from 'react';

class ImageCard extends Component {
    constructor(props) {
        super(props);
        this.state = {spans:0};
        this.imageRef = createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
       const h = this.imageRef.current.clientHeight;
        this.setState({spans: Math.ceil(h / 10)})
    }
    render() {
        const { description, urls } = this.props.image;

        return (
            <div style = {{gridRowEnd: `span ${this.state.spans}`}}>
                <img  ref={this.imageRef} alt={description} src={urls.small} />
            </div>
        )
    }
}

export default ImageCard;