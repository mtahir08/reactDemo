import { Component } from 'react';

class Router extends Component {
    constructor(props) {
        super(props);
        this.state = { hash: window.location.hash }
        this.updateHash = this.updateHash.bind(this);
    }
    updateHash(event) {
        console.log(window.location.hash);
        console.log(this.props.mapping)
        this.setState({ hash: window.location.hash })
    }
    componentDidMount() {
        window.addEventListener('hashchange', this.updateHash, false);
    }
    componentWillUnmount() {
        window.removeEventListener('hashchange', this.updateHash, false);
    }
    render() {
        if (this.props.mapping[this.state.hash])
            return this.props.mapping[this.state.hash]
        else
            return this.props.mapping["*"]
    }
}
export default Router