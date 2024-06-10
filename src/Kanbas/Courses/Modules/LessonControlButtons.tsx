import { FaCheckCircle, FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { deleteAssignment } from "../Assignments/reducer";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import * as client from "../Assignments/client";

export default function LessonControlButtons(deleteAssignmentId: any) {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDeleteAssignment = () => {
    var option = window.confirm("Do you want to delete this assignment?")
    if (option) {
      dispatch(deleteAssignment(deleteAssignmentId.deleteAssignmentId))
      navigate(`/Kanbas/Courses/${cid}/Assignments`)
    } else {
      navigate(`/Kanbas/Courses/${cid}/Assignments`)
    }
  }

  const removeAssignment = async () => {
    var option = window.confirm("Do you want to delete this assignment?")
    if (option) {
      await client.deleteAssignment(deleteAssignmentId.deleteAssignmentId);
      dispatch(deleteAssignment(deleteAssignmentId.deleteAssignmentId));
      navigate(`/Kanbas/Courses/${cid}/Assignments`)
    } else {
      navigate(`/Kanbas/Courses/${cid}/Assignments`)
    }

  };

  return (
    <div className="float-end d-flex flex-row gap-2">
      <button onClick={removeAssignment}>
        <FaTrash className="fs-4" />
      </button>
      <FaCheckCircle style={{ top: "2px" }}
        className="text-success me-1 fs-5" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
