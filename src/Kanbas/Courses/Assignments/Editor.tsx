import { Link, useNavigate, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import { addAssignment, updateAssignment, deleteAssignment }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { title } from "process";
import { useEffect, useState } from "react";


export default function AssignmentEditor() {
  const {cid} = useParams();
  const {aid} = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const navigate = useNavigate();
  // let currentAssignment = {
  //   _id: "",
  //   title: "",
  //   course: "",
  //   description: ""
  // };
  const [currentAssignment, setCurrentAssignment] = useState({
    _id: new Date().getTime().toString(),
    title: "",
    course: "",
    description: "",
  });

  useEffect(() => {
    if (aid === "newAssignment") {
      setCurrentAssignment({ _id: "0", title: "New Assignment", course: String(cid) , description: "New Assignment"});
    } else {
      const assignment = assignments.find((assignment:any) => assignment._id === aid);
      setCurrentAssignment(assignment)
    }
  }, [])

  console.log(currentAssignment)

  const dispatch = useDispatch();

  const handleSaveButton = () => {
    if (aid === "newAssignment") {
      dispatch(addAssignment(currentAssignment))
    } else {
      dispatch(updateAssignment(currentAssignment))
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  }
  
  return (
    <div id="wd-assignments-editor">
      <tr><b><label htmlFor="wd-name">Assignment Name</label></b></tr>
      <br></br>
      <tr><input id="wd-name" className="form-control d-flex" value={currentAssignment.title} 
      onChange={(e) => {
        setCurrentAssignment({
          ...currentAssignment,
          title: e.target.value
        })
      }}
      /></tr>
      <br></br>
      <textarea id="wd-description" rows={10} cols={10} className="form-control"
      value={currentAssignment.description}
      onChange={(e) => {
        setCurrentAssignment({
          ...currentAssignment,
          description: e.target.value
        })
      }}
      >
        {currentAssignment.description}
        {/* The assignment is available online.
        Submit a link to the landing page of your Web
        application running on Netlify. The landing
        page should include the following: Your full
        name and section Links to each of the lab
        assignments Link to the Kanbas application
        Links to all relevant source code repositories
        The Kanbas application should include a link
        to navigate back to the landing page. */}
      </textarea>
      <br></br>
      <table>
        <br></br>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>

          <td>
            <input id="wd-points" className="form-control" value={100} />
          </td> </tr>
        <br></br>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-grp">Assignment Group</label>
          </td>
          <td>
            <select name="Assignment" id="Assignment" className="form-control dropdown-toggle show">
              <option value="Assignment">Assignment</option>
            </select>
          </td> </tr>
        <br></br>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </td>
          <td>
            <select name="Display-grade" id="Display-grade" className="form-control">
              <option value="Percentage">Percentage</option>
            </select >
          </td> </tr>
        <br></br>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <div className="p-1 d-flex flex-column gap-2" style={{
              border: "2px solid grey"
            }}>
              <select name="submission-type" id="submission-type" className="form-control">
                <option value="Online" >Online</option>
              </select>
              <div className="d-flex flex-column gap-2">
                <b>Online Entry Options</b>
                <label htmlFor="wd-text-entry">
                  <input type="checkbox"></input>
                  Text Entry</label>
                  <label htmlFor="wd-website-url">
            <input type="checkbox" />
              Website URL</label>
              <label htmlFor="wd-media-recordings">
            <input type="checkbox"></input>
              Media Recordings</label>
              <label htmlFor="wd-student-annotation">
            <input type="checkbox"></input>
              Student Annotations</label>
              <label htmlFor="wd-file-ipload">
            <input type="checkbox"></input>
              File Upload</label>
              </div>
            </div>
          </td> </tr>
        <br></br>
        <tr>
          <td></td>
          
        </tr>
        <tr>
          <td></td>
          
        </tr>

        
        <br />


        <tr>
          <td align="right" valign="top">Assign</td>
          <div className="p-2 d-flex flex-column gap-2" style={{
            border: "2px solid grey"
          }}>
            <label htmlFor="wd-assign-to">Assign to:</label>
            <input type="text" id="everyone" name="everyone" placeholder="Everyone" />
            <div className="">
              <label htmlFor="wd-assign-to">Due:</label>
              <input type="date" className="form-control" value="2024-05-01" />
            </div>
            <div className="d-flex flex-row gap-1">
              <div className="">
                <label htmlFor="wd-assign-to">Available From:</label>
                <input type="date" className="form-control" value="2024-05-06" />
              </div>
              <div className="">
                <label htmlFor="wd-assign-to">Until:</label>
                <input type="date" className="form-control" value="2024-03-04" />
              </div>
            </div>
          </div>
        </tr>




        <tr><td></td>
        </tr>


        <tr><td></td>
        </tr>

        <tr><td></td><div className="input-group mb-3">
        </div></tr> 
        <tr>
          <td>
            <hr />
          </td>
          <td>
            <hr />
          </td>
          <td>
            <hr />
          </td>
        </tr>

        <tr>
          <td></td>
          <td></td>
          {/* <td><input className="btn btn-secondary me-1" type="button" id="wd-points" value="CANCEL" />
            <input className="btn btn-danger me-1" type="button" id="wd-points" value="SAVE" /></td> */}
            <td>
              <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-1">Cancel</Link>
              {/* <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger me-1">Save</Link> */}
              <button className="btn btn-danger me-1" onClick={handleSaveButton}>
                Save
              </button>
            </td>
        </tr>

      </table>
    </div>
  );
}