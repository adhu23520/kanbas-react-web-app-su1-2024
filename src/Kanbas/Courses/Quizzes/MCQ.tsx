import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

export default function MCQ(){
    return(
        <div>
            <div className="d-flex answerList flex-column">
                        <div className="d-flex m-2">
                            <span className="d-flex m-2"><input type="checkbox" /></span>
                            <span className="d-flex m-2">Option 1</span>
                            <span className="d-flex"><input type="text" /></span>
                            <div className="d-flex ms-auto">
                                <span className="d-flex m-2"><FaPencil /></span>
                                <span className="d-flex m-2"><FaTrash /></span>
                            </div>
                        </div>
                        <div className="d-flex m-2">
                            <span className="d-flex m-2"><input type="checkbox" /></span>
                            <span className="d-flex m-2">Option 1</span>
                            <span className="d-flex"><input type="text" /></span>
                            <div className="d-flex ms-auto">
                                <span className="d-flex m-2"><FaPencil /></span>
                                <span className="d-flex m-2"><FaTrash /></span>
                            </div>
                        </div>
                        <div className="d-flex m-2">
                            <span className="d-flex m-2"><input type="checkbox" /></span>
                            <span className="d-flex m-2">Option 1</span>
                            <span className="d-flex"><input type="text" /></span>
                            <div className="d-flex ms-auto">
                                <span className="d-flex m-2"><FaPencil /></span>
                                <span className="d-flex m-2"><FaTrash /></span>
                            </div>
                        </div>
                        <a href="*" className="d-flex ms-auto m-2 addAnswer">+ Add another answer</a>
                    </div>

        </div>
    )
}