import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/Header';
import Menus from './components/Menus';
import Home from './components/Home';
import AllCourses from './components/AllCourses';
import About from './components/About';
import Contact from './components/Contact';
import AddCourse from './components/AddCourse';
import ViewCourse from './components/ViewCourse';
import EditCourse from './components/EditCourse';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <div className="App">

        <Header />
        <Container>
          <Row>
            <Col md={3}><Menus /></Col>
            <Col md={9}>

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/view-courses" element={<AllCourses />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/view/:id" element={<ViewCourse />} />
                <Route path="/edit/:id" element={<EditCourse />} />
              </Routes>

            </Col>

          </Row>
        </Container>

      </div>


    </BrowserRouter>
  );
}

export default App;
