import { FaBan } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";
export default function detailsEditor() {
    return (
        <div className="mainDiv d-flex flex-column">
            <div className="pointsAPublished d-flex ms-auto">
                <div className="points me-2">
                    Points 0
                </div>

                <div className="published me-2">
                    <FaBan className="me-1" />
                    Not published
                </div>

                <div>
                    <button className="btn btn-secondary me-2"><FaEllipsisVertical /></button>
                </div>


            </div>
            <hr />

            <div className="detailsNQuestions d-flex">
                <div className="details d-flex me-2">
                    <button>Details</button>
                </div>

                <div className="questions d-flex">
                    <button>Questions</button>
                </div>
            </div>

            <div className="d-flex mt-2 w-20">
                <input className="QuizName" type="text" placeholder="Unnamed Quiz" style={{ width: 500, height: 40, borderRadius: 5, }}></input>
            </div>



        </div>
    );
}