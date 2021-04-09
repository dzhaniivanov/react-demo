import { Component } from 'react'

class CustomErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromMethod(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('error from componentdidcatch', error);
    }

    render() {
        if (this.state.hasError) {
            return <h1>some error here</h1>
        }
        return this.props.children;
    }
}
export default CustomErrorBoundary;

