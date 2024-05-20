import { FaPlus } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </button>
      <div className="dropdown d-inline me-1 float-end">
        <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle"
          type="button" data-bs-toggle="dropdown">
          <FaCheckCircle style={{ top: "2px" }}
        className="text-success me-1 position-absolute fs-5" />

          Publish All
        </button>
        <ul className="dropdown-menu">
          <li>
            <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
            <FaCheckCircle style={{ top: "2px" }}
        className="text-success me-1 position-absolute fs-5" />

              Publish all modules and items
            </a>
          </li>
          <li>
            <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
            <FaCheckCircle style={{ top: "2px" }}
        className="text-success me-1 position-absolute fs-5" />

              Publish modules only
            </a>
          </li>
          {/* Create two more items with IDs wd-unpublish-all-modules-and-items and
              wd-unpublish-modules-only with labels Unpublish all modules and items
              and Unpublish modules only */}
        </ul>
      </div>
      {/* Implement the View Progress and Collapse All buttons
          with IDs wd-view-progress and wd-collapse-all */}
    </div>
  );
}