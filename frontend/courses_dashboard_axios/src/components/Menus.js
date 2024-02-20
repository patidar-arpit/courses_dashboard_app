import React from 'react'

import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const Menus = () => {
    return (
        <div className='my-4'>

            <ListGroup>
                <Link className='list-group-item list-group-item-action' to='/' action>Home</Link>
                <Link className='list-group-item list-group-item-action' to='/add-course' action>Add Course</Link>
                <Link className='list-group-item list-group-item-action' to='/view-courses' action>View Courses</Link>
                <Link className='list-group-item list-group-item-action' to='/contact' action>Contact</Link>
            </ListGroup>
        </div>
    )
}

export default Menus