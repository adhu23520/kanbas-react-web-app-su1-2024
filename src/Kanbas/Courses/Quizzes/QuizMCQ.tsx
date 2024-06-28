import { FaBold, FaItalic, FaPaintBrush, FaTrash, FaUnderline } from "react-icons/fa";
import "./index2.css";
import { MdFormatColorFill } from "react-icons/md";
import { FaEllipsisVertical, FaPencil } from "react-icons/fa6";
import { Route, Routes, useParams } from "react-router";
import QuizTF from "./QuizTF";
import QuizFB from "./QuizFB";
import MCQ from "./MCQ";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
export default function QuizMCQ() {
    const { cid } = useParams();
    const { qid } = useParams();
    const [questionType, setQuestionType] = useState("Multiple Choice");
    console.log(questionType);
    return (

        <div>
            <div className="fullBox d-flex flex-column col-10">
                <div className="beforeHR d-flex p-2">
                    <span className="d-flex"><input type="text" className="textboxbeforeHR d-flex me-2" /></span>
                    <span className="d-flex">
                        <select className="selectbeforeHR d-flex me-2" onChange={(e) => {
                            setQuestionType(e.target.value)
                        }}>
                            <option>Multiple Choice</option>
                            <option>Fill in the Blanks</option>
                            <option>True or False</option>


                            {/* <option><a href={`#/Kanbas/Courses/${cid}/Quizzes/${qid}/questions/Add/MCQ`}>Multiple Choice</a></option>
                            <option><a href={`#/Kanbas/Courses/${cid}/Quizzes/${qid}/questions/Add/FB`}>Fill in the Blanks</a></option>
                            <option><a href={`#/Kanbas/Courses/${cid}/Quizzes/${qid}/questions/Add/TF`}>True or False</a></option>
                             */}
                        </select>

                        {/* <Routes>
                            <Route path="/Quizzes/:qid/Add/TF" element={<QuizTF />} />
                            <Route path="/Quizzes/:qid/Add/FB" element={<QuizFB />} />
                            <Route path="/Quizzes/:qid/Add/MCQ" element={<QuizMCQ />} />
                        </Routes> */}


                    </span>
                    <span className="d-flex pointstext me-2 ms-auto">
                        <span className="d-flex pts align-items-center">pts:</span>
                        <input className=" d-flex points" type="text" />
                    </span>
                </div>
                <hr />
                <div className="d-flex flex-column">
                    <span className="d-flex ">Enter your questions and multiple answers, then select one correct answer.</span>
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
                    <span className="d-flex m-2"><b>Answers:</b></span>
                    {/* ........................................ */}

                    {/* <Routes>
                            <Route path="/Add/TF" element={<QuizTF />} />
                            <Route path="/Add/FB" element={<QuizFB />} />
                            <Route index path="/Add/MCQ" element={<MCQ />} />
                    </Routes> */}

                    <div>
                        {
                        questionType === 'Multiple Choice' ? (
                            <MCQ />
                        ) : questionType === 'True or False' ? (
                            <QuizTF />
                        ) : (
                            <QuizFB />
                        )
                        }
                    </div>





                    {/* ........................................ */}
                    <div className="d-flex lastButtons">
                        <span className="d-flex m-2"><button className="btn btn-secondary">Cancel</button></span>
                        <span className="d-flex m-2"><button className="btn btn-danger">Update Question</button></span>

                    </div>
                </div>

            </div>
        </div>
    );
}