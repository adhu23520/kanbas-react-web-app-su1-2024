import { FaCheckCircle } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
export default function LessonControlButtons() {
  return (
    <div className="float-end d-flex flex-row gap-2">
      <FaCheckCircle style={{ top: "2px" }}
        className="text-success me-1 fs-5" />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
