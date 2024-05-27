import Borders from '../../Labs/Lab2/Borders';
import './index.css';
import { assignments, enrollments, users, grades } from '../Database';
import { FaSearch, FaCog, FaFileImport, FaFileExport, FaFilter } from "react-icons/fa"
import { useParams } from 'react-router-dom';
export default function Grades() {
  const {cid} = useParams();
  const currentUsers = enrollments.filter((enrollment) => enrollment.course === cid);
  const currentAssignments = assignments.filter((assignment)=> assignment.course === cid); 

    return(
        <div id="wd-grades">
            <div id="wd-buttons-top" className="d-flex float-end"> 
                <button className="border 1px solid black me-1">
                        <FaFileImport />
                        Import
                        </button>
                <button className="border 1px solid black me-1 dropdown-toggle show"><FaFileExport />Export</button>
                <button className="btn btn-secondary me-1">
          <FaCog />
        </button>
        
            </div>    
<br/><br/>

<div id="wd-search-names" className="d-flex">
                <div className="d-flex fa-lg">
                <h6>Student Names:</h6>
                <div/>
                
                <h6 style={
                    {marginLeft: '350px'}
                }
                >Assignment Name:</h6>
                </div>
                
            </div>
            <div id="wd-search-boxes" className="d-flex flex-fill">
                <div className="d-flex fa-lg">
                <h3><FaSearch /></h3>
                <div/>
                
                <input type="text" className="form-control d-flex flex-fill" style={
                    {width: '20cm'}
                } placeholder="Search Students" />
                
                <h3 style={
                    {marginLeft: '30px'}
                }><FaSearch /></h3>
                <input type="text" className="form-control d-flex flex-fill" placeholder="Search Assignments" />
                </div>
                
            </div>
<br/>
<div id="wd-apply-button" className="d-flex">
    <button style={{ margin: '10px', border: 'none' }}><FaFilter/>Apply Filters</button>
</div>
<br/>

<div className="table" style={{marginLeft: '15px'}}>
  
  <div className="row header"
  style={{backgroundColor: 'lightgrey'}}>
    <div className="cell">Student Name</div>
    {currentAssignments.map((currentAssignment) => (
      <div className="cell">
        {currentAssignment.title}
      </div>
    ))}
    {/* <div className="cell">A1 Setup</div>
    <div className="cell">A2 HTML</div>
    <div className="cell">A3 CSS</div>
    <div className="cell">A4 Bootstrap</div> */}

  </div>

  {
    currentUsers.map((currentUser) => {
      const user = users.filter((user) => user._id === currentUser.user);
      const userGrades = grades.filter((grade) => grade.student === currentUser.user);
      return(
        <div className="row">
        <div className="cell text-danger">
          {user[0].firstName}
        </div>
        {
          userGrades.map((userGrade) => (
            <div className="cell">
              {
                userGrade.grade
              }
            </div>
          ))
        }
        </div>
      )
    })
  }
  
  {/* <div className="row">
    <div className="cell text-danger">Jane Adams</div>
    <div className="cell">100%</div>
    <div className="cell">96.5%</div>
    <div className="cell">85.4%</div>
    <div className="cell">75.4%</div>
    
  </div>
  <div className="row" style={{backgroundColor: 'lightgrey'}}>
    <div className="cell text-danger">Christina Allen</div>
    <div className="cell">100%</div>
    <div className="cell">100%</div>
    <div className="cell">100%</div>
    <div className="cell">100%</div>
    
  </div>

  <div className="row">
    <div className="cell text-danger">Samreen Ansari</div>
    <div className="cell">100%</div>
    <div className="cell">100%</div>
    <div className="cell">
    <input type="text" className="border none" defaultValue="88.03" />
    </div>
    <div className="cell">100%</div>
    
  </div>

  <div className="row" style={{backgroundColor: 'lightgrey'}}>
    <div className="cell text-danger" >Han Bao</div>
    <div className="cell">100%</div>
    <div className="cell">100%</div>
    <div className="cell">100%</div>
    <div className="cell">100%</div>
    
  </div>

  <div className="row">
    <div className="cell text-danger">Siran Cao</div>
    <div className="cell">100%</div>
    <div className="cell">100%</div>
    <div className="cell">100%</div>
    <div className="cell">100%</div>
    
  </div> */}
  
</div>



</div>
            
    
    );
}