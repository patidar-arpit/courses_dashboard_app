import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CourseService from '../service/CourseService';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Course(props) {

    const navigate = useNavigate();
    const deleteProduct = (id) => {
        console.log("Inside the delete", id);
        CourseService.deleteCourse(id)
        .then((data)=>{
            props.changedData();
        })
        .catch((err) => {console.log(err)});
        navigate("/view-courses")
    }
    return (
        <Card className='text-center'>
            <Card.Body>
                <Card.Title>{props.course.title}</Card.Title>
                <Card.Text>
                    courseId:{props.course.id}<br></br>
                    {props.course.description}<br></br>
                    Price:{props.course.price}
                </Card.Text>
                <Link to={`/view/${props.course.id}`} state={{ course: props.course /*delete:deleteProduct*/ }}><Button variant="primary">View</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                <Button variant="danger" onClick={() => { deleteProduct(props.course.id) }}>Delete</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={`/edit/${props.course.id}`} state={{ course: props.course }}> <Button variant="secondary">Edit</Button> </Link>
            </Card.Body>
        </Card>
    );
}


export default Course;