import React, { Component } from 'react';

class Course extends Component {
    state = {
        currentCourse: null
    }

    componentDidMount () {
        console.log('[DidMount]', this.props)
        // const title = this.props.location.hash.slice(1);
        this.loadData();
    }
    componentDidUpdate () {
        console.log('[DidUpdate]', this.props)
        console.log('this.state ', this.state)
        this.loadData();
    }

    loadData () {
        if (this.props.match.params.id) {
            if (!this.state.currentCourse || (this.state.currentCourse && this.state.currentCourse.id !== this.props.match.params.id)) {
                const id = this.props.match.params.id;
                this.setState({
                    currentCourse: {
                        id: this.props.match.params.id
                    }
                })
            }
        }
    }

    render () {
        console.log('[Course.js]', this.state.currentCourse)
        let course = <p style={{textAlign: 'center'}}>Please select a course!</p>
        if (this.props.match.params.id) {
            course = <p style={{textAlign: 'center'}}>Loading...</p>
        }
        if (this.state.currentCourse) {
            course = <div>
                        <h1>Title: {this.props.location.hash}</h1>
                        <p>You selected the Course with ID: {this.state.currentCourse.id}</p>
                    </div>
        }
        
        return (course);
    }
}

export default Course;