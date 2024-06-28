import { FaBold, FaItalic, FaPaintBrush, FaTrash, FaUnderline } from "react-icons/fa";
import "./index2.css";
import { MdFormatColorFill } from "react-icons/md";
import { FaEllipsisVertical, FaPencil } from "react-icons/fa6";
export default function QuizFB() {
    return (
    
        <div>
            <div className="d-flex flex-column col-10">
                {/* <div className="beforeHR d-flex p-2">
                    <span className="d-flex"><input type="text" className="textboxbeforeHR d-flex me-2" /></span>
                    <span className="d-flex">
                        <select className="selectbeforeHR d-flex me-2">
                            <option>Multiple Choice</option>
                            <option>Fill in the Blanks</option>
                            <option>True or False</option>
                        </select>
                    </span>
                    <span className="d-flex pointstext me-2 ms-auto">
                        <span className="d-flex pts align-items-center">pts:</span>
                        <input className=" d-flex points" type="text" />
                    </span>
                </div> */}
                <div className="d-flex flex-column">
                    {/* <span className="d-flex ">Enter your questions and multiple answers, then select one correct answer.</span>
                    <br />
                    <span className="d-flex"><b>Question:</b></span>
                    <br />
                    <span className="d-flex"></span>
                    <div className="UserOptions d-flex">
                        <button className="options1 d-flex me-2">Edit</button>
                        <button className="options1 d-flex me-2">View</button>
                        <button className="options1 d-flex me-2">Insert</button>
                        <button className="options1 d-flex me-2">Format</button>
                        <button className="options1 d-flex me-2">Tools</button>
                        <button className="options1 d-flex me-2">Table</button>
                    </div>
                    <hr />
                    <div className="UserOptions2 d-flex">
                        <select className="options2 d-flex me-2">
                            <option>12pts</option>
                            <option>14pts</option>
                            <option>16pts</option>
                            <option>18pts</option>
                            <option>19pts</option>
                            <option>21pts</option>
                        </select>
                        <select className="options2 textOptions d-flex me-2">
                            <option>Paragraph</option>
                            <option>Unordered List</option>
                            <option>Ordered List</option>
                        </select>
                        <span className="options2 d-flex straightLine">|</span>
                        <button className="options2 icons2 d-flex me-2"><FaBold /></button>
                        <button className="options2 icons2 d-flex me-2"><FaItalic /></button>
                        <button className="options2 icons2 d-flex me-2"><FaUnderline /></button>
                        <button className="options2 icons2 d-flex me-2"><FaPaintBrush /></button>
                        <button className="options2 icons2 d-flex me-2"><MdFormatColorFill /></button>
                        <span className="options2 d-flex straightLine">|</span>
                        <button className="options2 icons2 d-flex me-2"><FaEllipsisVertical /></button>
                    </div>
                    <input type="text" className="textBox d-flex m-2"></input>
                    <span className="d-flex m-2"><b>Answers:</b></span> */}
                    <div className="d-flex answerList flex-column">
                        <div className="d-flex m-2">
                            <span className="d-flex m-2">Option 1</span>
                            <span className="d-flex"><input type="text"/></span>
                            <div className="d-flex ms-auto">
                                <span className="d-flex m-2"><FaTrash /></span>
                            </div>
                        </div>
                        <div className="d-flex m-2">
                            <span className="d-flex m-2">Option 1</span>
                            <span className="d-flex"><input type="text"/></span>
                            <div className="d-flex ms-auto">
                                <span className="d-flex m-2"><FaTrash /></span>
                            </div>
                        </div>
                        <div className="d-flex m-2">
                            <span className="d-flex m-2">Option 1</span>
                            <span className="d-flex"><input type="text"/></span>
                            <div className="d-flex ms-auto">
                                <span className="d-flex m-2"><FaTrash /></span>
                            </div>
                        </div>
                        <a href="*" className="d-flex ms-auto m-2 addAnswer">+ Add another answer</a>
                    </div>
                    {/* <div className="d-flex lastButtons">
                        <span className="d-flex m-2"><button className="btn btn-secondary">Cancel</button></span>
                        <span className="d-flex m-2"><button className="btn btn-danger">Update Question</button></span>

                    </div> */}
                </div>

            </div>
        </div>
    );
}