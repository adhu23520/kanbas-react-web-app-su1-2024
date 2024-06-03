import { FaCheckCircle, FaPlus, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";

export default function ModuleControlButtons(
  { moduleId, deleteModule, editModule }: { moduleId: string; deleteModule: (moduleId: string) => void; 
    editModule: (moduleId: string) => void }
) {
  return (
    <div className="float-end d-flex flex-row gap-2">
      <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3" />
      <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)} />
      <FaCheckCircle style={{ top: "2px" }}
        className="text-success me-1 fs-5" />
      <FaPlus style={{ top: "2px" }}
        className="text-success me-1 fs-5" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
