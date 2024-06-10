import { BsGripVertical, BsBook } from "react-icons/bs";
import { FaSearch, FaTrash } from "react-icons/fa"
import LessonControlButtons from "../Modules/LessonControlButtons";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
// import assignments from "../../Database/assignments.json"
import { useParams } from "react-router-dom";
import { addAssignment, updateAssignment, deleteAssignment, setAssignments }
  from "./reducer";
import * as client from "./client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";


export default function Assignments() {

  

  
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const dispatch = useDispatch();
  const { cid } = useParams();

  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  
  const courseAssignments = assignments.filter((assignment: any) => assignment.course === cid);

  
  return (
    <div id="wd-assignments">
      {/* <input id="wd-search-assignment"
        placeholder="Search for Assignments" /> */}
      <div className="d-flex flex-row justify-content-between align-items-center">
        <div className="input-group mb-3 w-25">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <FaSearch />
            </span>
          </div>
          <input type="text" className="form-control" placeholder="Search..." />
        </div>
        <div className="float-end">
          <button id="wd-add-assignment-group" className="btn btn-secondary p-1 me-1">+ Group</button>
          <a className="wd-assignment-link"
            href={`#/Kanbas/Courses/${cid}/Assignments/newAssignment`} style={{ textDecoration: 'none' }}>

            <button id="wd-add-assignment" className="btn btn-danger p-1 me-1">+ Assignment</button>
          </a>
        </div>
      </div>
      <br />

      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary
          d-flex flex-row justify-content-between">
            <div className="">
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS
            </div>
            <div className="d-flex gap-2 justify-content-center align-items-center">
              <div className="" style={{
                border: "1px solid grey",
                // width: "30%",
                borderRadius: "25%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}>
                40% of Total
              </div>
              <AssignmentControlButtons />
            </div>

          </div>
          <ul className="wd-lessons list-group rounded-0" style={{
            borderLeft: "2px solid green"
          }}>


            {
              courseAssignments.map((assignment: any) => (
                <>
                  <li className="wd-lesson list-group-item p-3 ps-1
             d-flex flex-row justify-content-between align-items-center gap-3">
                    <BsGripVertical className="me-1 fs-1" />
                    <BsBook className="me-1 fs-1" />
                    <div className="d-flex flex-column gap-1">
                      <span className="heading">

                        <a className="wd-assignment-link"
                          href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} style={{ color: 'black', textDecoration: 'none' }}>
                          <b>{assignment.title}</b><br />
                        </a>

                      </span>
                      <span className="content fs-6">
                        <span className="text-danger">Multiple Modules</span> | Not available untill May 6 at 12:00 am | Due May 13 at 11.59pm | 100pts
                      </span>
                    </div>
                    <LessonControlButtons deleteAssignmentId={assignment._id} />

                  </li>
                </>

              ))
            }




            {/* <li className="wd-lesson list-group-item p-3 ps-1
             d-flex flex-row justify-content-between align-items-center gap-3">
              <BsGripVertical className="me-1 fs-1" />
              <BsBook className="me-1 fs-1" />
              <div className="d-flex flex-column gap-1">
                <span className="heading">
                <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123" style={{color: 'black', textDecoration: 'none'}}>
              <b>A1</b><br/>
  </a> 
                </span>
                <span className="content fs-6">
                  <span className="text-danger">Multiple Modules</span> | Not available untill May 6 at 12:00 am | Due May 13 at 11.59pm | 100pts
                </span>
              </div>
              <LessonControlButtons />

            </li>
            <li className="wd-lesson list-group-item p-3 ps-1
             d-flex flex-row justify-content-between align-items-center gap-3">
              <BsGripVertical className="me-1 fs-1" />
              <BsBook className="me-1 fs-1" />
              <div className="d-flex flex-column gap-1">
                <span className="heading">
                <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123" style={{color: 'black', textDecoration: 'none'}}>
              <b>A2</b><br/>
  </a> 
                </span>
                <span className="content fs-6">
                  <span className="text-danger">Multiple Modules</span> | Not available untill May 6 at 12:00 am | Due May 13 at 11.59pm | 100pts
                </span>
              </div>
              <LessonControlButtons />

            </li>
            <li className="wd-lesson list-group-item p-3 ps-1
             d-flex flex-row justify-content-between align-items-center gap-3">
              <BsGripVertical className="me-1 fs-1" />
              <BsBook className="me-1 fs-1" />
              <div className="d-flex flex-column gap-1">
                <span className="heading">
                <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123" style={{color: 'black', textDecoration: 'none'}}>
              <b>A3</b><br/>
  </a> 
                </span>
                <span className="content fs-6">
                  <span className="text-danger">Multiple Modules</span> | Not available untill May 6 at 12:00 am | Due May 13 at 11.59pm | 100pts
                </span>
              </div>
              <LessonControlButtons />

            </li> */}

          </ul>
        </li>
      </ul>
    </div>
  );
}