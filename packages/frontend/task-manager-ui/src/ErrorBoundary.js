import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false,
            error: ''
        };
    }

    static getDerivedStateFromError (error) {
      return {
        isError: true,
        error
      };
    }

    render () {
        const { isError, error } = this.state;
        if (isError) {
            return <h2>Error while loading {JSON.stringify(error)}</h2>
        }
        return this.props.children;
    }
}