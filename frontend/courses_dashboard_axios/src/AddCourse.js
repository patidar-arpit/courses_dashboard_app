import React from 'react'

const AddCourse = () => {
    return (
        <div>
            <form>
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" class="form-control" id="title" />
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">description</label>
                    <input type="textarea" class="form-control" id="description" />
                </div>
                <div class="mb-3 form-check">
                    <label for="price" class="form-label">Price</label>
                    <input type="number" id="price" />

                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default AddCourse;