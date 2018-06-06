import React, { Component } from 'react';

class Course extends Component {
    state = {
        currentCourse: null
    }

    componentDidMount () {
        console.log('[DidMount]', this.props)
        this.loadData();
    }
    componentDidUpdate () {
        console.log('[DidUpdate]', this.props)
        console.log('[DidUpdate]', this.state)
        this.loadData();
    }

    loadData () {

            if (!this.state.currentCourse || (this.state.currentCourse && this.state.currentCourse.title !== this.props.location.hash.slice(1))) {
                // const id = this.props.match.params.id;
                this.setState({
                    currentCourse: {
                        id: this.props.match.params.id,
                        title: this.props.location.hash.slice(1)
                    }
                })
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
                        <h1>Title: {this.state.currentCourse.title}</h1>
                        <p>You selected the Course with ID: {this.state.currentCourse.id}</p>
                    </div>
        }
        
        return (course);
    }
}

export default Course;