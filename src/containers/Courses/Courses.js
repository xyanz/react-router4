import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Courses.css';
import Course from '../Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    courseSelectedHanlder = (id) => {
        this.props.history.push( '/courses/' + id );
    }

    render () {
        // console.log('[Courses.js]', this.props)
        const courses = this.state.courses.map( course => {
            return (
                <Link to={{
                    pathname: '/courses/' + course.id,
                    hash: course.title
                    }} 
                    key={course.id} >
                    <article 
                        className="Course" 
                        id={course.id}
                        >
                        {course.title}
                    </article>
                </Link>
                )
        })
    
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {courses}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={Course} />    
            </div>
        );
    }
}

export default Courses;