import axios from 'axios'
const baseurl = "http://localhost:9090/"

class CourseService {

    constructor() {
        this.courses = [{ id: 1, title: "Java Course", description: "Core java begineer friendly Course", price: 100 },
        { id: 2, title: "Javascript Course", description: "JavaSript begineer friendly Course", price: 200 },
        { id: 3, title: "React Course", description: "React begineer friendly Course", price: 2000 },
        { id: 4, title: "Angular Course", description: "Heloo  begineer friendly Course", price: 500 },
        { id: 5, title: "Spring Course", description: "Heloo  begineer friendly Course", price: 450 },
        { id: 6, title: "MERN", description: "Heloo  begineer friendly Course", price: 400 },]
    }

    getCourses() {
        
       // return this.courses;
       return axios.get(baseurl+"courses")
    }

    addCourse(course) {
       // this.courses.push(course);
       return axios.post(baseurl+`course`, course)
    }

    deleteCourse(id) {
        // let pos = this.courses.findIndex(p => p.id == id);
        // console.log("Before Deleting")
        // console.log(this.courses)
        // this.courses.splice(pos, 1);
        // console.log("After Deleting")
        // console.log(this.courses)

        return axios.delete(baseurl+`course/${id}`)
    }

    updateCourse(course) {
        // let pos = this.courses.findIndex(p => p.id == course.id);
        // this.courses.splice(pos, 1, { ...course })

        return axios.put(baseurl+`course/${course.id}`, course)
    }

    findById(id){

       // return this.courses.find(p => p.id == id);

       return axios.get(baseurl+`course/${id}`)
    }


}

export default new CourseService();