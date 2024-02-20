import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import CourseService from '../service/CourseService';


const ViewCourse = (props) => {

    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className='container' style={{ marginTop: "8%" }}>
            <div className='row'>

                <div className='col-sm-12 col-md-5 ' >

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.classcentral.com/report/wp-content/uploads/2022/05/Java-BCG-Banner.png" />
                        <Card.Body class="p-3 mb-2 bg-info-subtle text-emphasis-info">
                            <Card.Title>{location.state.course.title}</Card.Title>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                </div>
                <div className='col-sm-12 col-md-7'>
                    <ul class="list-group list-group-flush mb-5 ">
                        <li class="list-group-item">Best {location.state.course.title}</li>
                        <li class="list-group-item">Instructor:Arpit Patidar</li>
                        <li class="list-group-item">Validity:3 years from purchase date</li>
                        <li class="list-group-item">Price:{location.state.course.price}</li>
                    </ul>
                    <Button variant="secondary" onClick={() => {
                        navigate("/edit/" + params.id);
                    }}>Edit</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant="danger" onClick={() => {
                        alert(params.id);
                        CourseService.deleteCourse(params.id);
                        navigate("/view-courses");

                    }}>
                        Delete
                    </Button>


                </div>


            </div>

        </div>
    )
}

export default ViewCourse