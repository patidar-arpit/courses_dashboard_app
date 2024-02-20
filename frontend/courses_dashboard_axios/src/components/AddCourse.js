import React, { useState } from 'react'
import CourseService from '../service/CourseService';
import { useNavigate } from 'react-router-dom';
const AddCourse = () => {

    const [formDetails, setFormDetails] = useState({ id: "", title: "", description: "", price: "" })
    const navigate = useNavigate();
    const handleChange = (event) => {

        let { name, value } = event.target;
        setFormDetails({ ...formDetails, [name]: value })
    }

    const addCourse = () => {

        CourseService.addCourse(formDetails)
            .then((res) => {
                setFormDetails({ id: "", title: "", description: "", price: "" })
                navigate('/view-courses')
            }).catch((err) => { console.log(err) });


    }


    return (
        <div>
            <form style={{ marginTop: "4%", marginLeft: "5%", width: "50%" }}>
                <div class="mb-3">
                    <label for="id" class="form-label">Id</label>
                    <input type="text" class="form-control" id="id" name='id' onChange={handleChange} value={formDetails.id} />
                </div>

                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" class="form-control" id="title" name='title' onChange={handleChange} value={formDetails.title} />
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">description</label>
                    <input type="textarea" class="form-control" id="description" name='description' onChange={handleChange} value={formDetails.description} />
                </div>
                <div class="mb-3">
                    <label for="price" class="form-label">Price</label>
                    <input type="text" class="form-control" id="price" name='price' onChange={handleChange} value={formDetails.price} />
                </div>
                <button type="button" class="btn btn-primary" onClick={addCourse}>Submit</button>
            </form>

        </div>
    )
}

export default AddCourse;