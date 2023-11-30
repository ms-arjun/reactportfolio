import {Routes, Route} from 'react-router-dom'


import Contact from "./main/Contact";
import Hero from "./main/Hero";
import Project from "./main/Project";
import Resume from "./main/Resume";
import Nav from "./nav/Nav";


function App() {
  return (
    <div>
       <Nav />
        <Routes>
            <Route path='/' element = {<Hero />} />
            <Route path='/resume' element={<Resume />} />
            <Route path= '/project' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
       </Routes>
    </div>
  );
}

export default App;
