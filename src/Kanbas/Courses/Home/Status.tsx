import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle, FaHome, FaPlay } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
{/* Find more icons */}
export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap "  style={{marginLeft: '5px'}}>
            <MdDoNotDisturbAlt className="me-2 fs-5" />
            Unpublish
          </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100" style={{marginLeft: '5px'}}>
            <FaCheckCircle className="me-2 fs-5" />
            Publish
          </button>
        </div>
      </div>
      <br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start" style={{marginLeft: '5px'}}>
        <BiImport className="me-2 fs-5" />
        Import Existing Content
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start" style={{marginLeft: '5px'}}>
        <LiaFileImportSolid className="me-2 fs-5" />
        Import from Commons
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start" style={{marginLeft: '5px'}}>
        <FaHome className="me-2 fs-5" />
        Choose Homepage
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start" style={{marginLeft: '5px'}}>
        <FaPlay className="me-2 fs-5" />
        View Course Stream
      </button>
      {/* Complete the rest of the buttons */}
    </div>
  );
}
