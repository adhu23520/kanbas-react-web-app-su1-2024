import { FaBan, FaCode } from "react-icons/fa";
import { FaEllipsisVertical, FaGrip } from "react-icons/fa6";
import "./index.css";
import { BiCircleHalf } from "react-icons/bi";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";
import { MdFormatColorFill } from "react-icons/md";
import { FaFont } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaKeyboard, FaExpandAlt, FaGripVertical } from "react-icons/fa";
import { useLocation, useParams } from "react-router";

export default function DetailsEditor() {
    // const { pathname } = useLocation();
    const {cid} = useParams();
    const {qid} = useParams();


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
                <a href={`#/Kanbas/Courses/${cid}/Quizzes/${qid}/Editor`}
                    className="btn btn-secondary m-2">
                    Details
                </a>
                <a href={`#/Kanbas/Courses/${cid}/Quizzes/${qid}/questions`}
                    className="btn btn-secondary m-2">
                    Questions
                </a>

                {/* <ul className="detailsNQuestions d-flex nav nav-tabs">
                    <li className="nav-item">
                        <a
                            href="http://localhost:3000/#/Kanbas/Courses/Quizzes/Details/:qid/Editor"
                            className={`nav-link1 ${pathname.includes("Editor") ? "active" : ""}`}>Details</a>
                    </li>

                    <li className="nav-item">
                        <a
                            href="http://localhost:3000/#/Kanbas/Courses/Quizzes/Details/:qid/questions"
                            className={`nav-link ${pathname.includes("questions") ? "active" : ""}`}>Questions</a>
                    </li>
                </ul> */}

            </div>

            <div className="d-flex mt-2 w-20">
                <input className="QuizName" type="text" placeholder="Unnamed Quiz" style={{ width: 500, height: 40, borderRadius: 5, }}></input>
            </div>

            <span className="quizInstructions d-flex">
                <h6>Quiz Instructions:</h6>
            </span>

            <div className="UserOptions d-flex">
                <button className="options1 d-flex me-2">Edit</button>
                {/* <a href={`#/Kanbas/Courses/${cid}/Quizzes/${qid}/Details`}>Edit</a> */}
                <button className="options1 d-flex me-2">View</button>
                <button className="options1 d-flex me-2">Insert</button>
                <button className="options1 d-flex me-2">Format</button>
                <button className="options1 d-flex me-2">Tools</button>
                <button className="options1 d-flex me-2">Table</button>
                <button className="options1 d-flex circleIcon me-2 ms-auto "><BiCircleHalf className="gly-rotate-45 fa-rotate-90" /></button>
            </div>

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

            <input type="text" className="textBox d-flex"></input>



            <div className="belowText d-flex">
                <span className="belowTextBoxp d-flex me-5">p</span>
                <div className="d-flex ms-auto">
                    <button className="belowTextBox"><FaKeyboard /></button>
                    <span className="options2 d-flex straightLine">|</span>
                    <button className="belowTextBox">0 Words</button>
                    <span className="options2 d-flex straightLine">|</span>
                    <button className="belowTextBox"><FaExpandAlt /></button>
                    <span className="options2 d-flex straightLine">|</span>
                    <button className="belowTextBox"><FaCode /></button>
                    <span className="options2 d-flex straightLine">|</span>
                    <button className="belowTextBox"><FaGripVertical /></button>
                </div>
            </div>

            <div className="QuizSettings d-flex">
                <div className="d-flex flex-column me-2">
                    <span className="left d-flex">Quiz Type:</span>
                    <br />
                    <span className="left d-flex">Assignment Group:</span>
                </div>
                <div className="d-flex flex-column">
                    <span className="right d-flex">
                        <select>
                            <option>Graded Quiz</option>
                        </select>
                    </span>
                    <br />
                    <span className="right d-flex">
                        <select>
                            <option>Assignments</option>
                        </select>
                    </span>
                    <br />
                    <span><b>Options:</b></span>
                    <br />
                    <span><input type="checkbox" className="" />  Shuffle Answers</span>
                    <br />
                    <span className="d-flex">
                        <input type="checkbox" className=" d-flex me-2" />
                        <span className="d-flex me-5">Time Limit</span>
                        <input type="text" className=" d-flex me-2 textBoxforTime" />
                        <span >Minutes</span>
                    </span>
                    <br />
                    <div className="d-flex border4textbox flex-grow-1 p-2">
                        <span className="d-flex">
                            <input type="checkbox" className="d-flex me-2" />
                            Allow Multiple Attempts
                        </span>
                    </div>
                    <div className="lastBox d-flex me-5">
                        <div className="d-flex me-2 mt-2">
                            <span>Assign</span>
                        </div>
                        <div className="d-flex flex-column assignDetailsFull p-2">

                            <div className="d-flex flex-column assignDetails p-2">
                                <span className="d-flex p-2">Assign to</span>
                                <input type="text" className="d-flex flex-grow-1 me-2 mt-2 p-2" />

                                <span className=" d-flex p-2">Due</span>
                                <input type="date" className="d-flex flex-grow-1 me-2 mt-2 p-2" />

                                <div className="d-flex p-2">
                                    <div className="d-flex flex-column me-2 mt-2 mb-2 p-2">
                                        <span className="d-flex p-2">Available from:</span>
                                        <input type="date" className="d-flex p-2" />
                                    </div>
                                    <div className="d-flex flex-column me-2 mt-2 mb-2 p-2">
                                        <span className="d-flex p-2">Until:</span>
                                        <input type="date" className="d-flex p-2" />
                                    </div>
                                </div>

                                <div className="addButton d-flex p-2">
                                    <hr />
                                    <button className="addButtonstyle d-flex">+ Add</button>
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex mt-2 justify-content-center">
                                <button className="btn btn-secondary d-flex p-2 me-2">Cancel</button>
                                <button className="btn btn-danger d-flex">Save</button>
                            </div>
                            <hr />

                        </div>

                    </div>


                </div>
            </div>


        </div>
    );
}