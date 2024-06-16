import CoursesNavigation from "./Navigation";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Modules from "./Modules";
import Home from "./Home";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import Grades from "../Grades";
import Quizzes from "./Quizzes";
import Details from "./Quizzes/details";
import DetailsEditor from "./Quizzes/detailsEditor";
import PeopleTable from "./People/Table";

// import { courses } from "../Database";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  return (
    <div id="wd-courses">

  <h2 className="text-danger"><FaAlignJustify className="me-4 fs-4 mb-1" /> 
      {course && course.name} &gt; {pathname.split("/")[4]}</h2>
  <hr />
  
  <div className="d-flex">

    <div className="d-none d-md-block">
      <CoursesNavigation />
    </div>

    <div className="flex-fill">
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Modules" element={<Modules />} />
        <Route path="Assignments" element={<Assignments />} />
        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
        <Route path="Grades" element={<Grades />} />
        <Route path="Quizzes" element={<Quizzes />} />
        <Route path="QuizzesDetails" element={<Details />} />
        <Route path="Quizzes/Details/Editor" element={<DetailsEditor />} />
        <Route path="People" element={<PeopleTable />} />
        <Route path="People/:uid" element={<PeopleTable />} />
      </Routes>
    </div>

  </div>

</div>

 );}