import { FaSearch, FaChevronDown, FaRocket } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import "./index.css";
import * as db from "../../Database";
import { Route, Routes, useParams } from "react-router";
import Details from "./details";
import QuizFB from "./QuizFB";
import DetailsEditor from "./detailsEditor";
import QuizTF from "./QuizTF";
import QuizMCQ from "./QuizMCQ";
import quizzes from "../../Database/quizzes.json"
import Questions from "./Questions";

// const quizzes = db.quizzes;

export default function Quizzes() {
    const { cid } = useParams();
    const { qid } = useParams();

    return (
        <div id="wd-css-flex" className="column">
            <div className="wd-search-and-buttons d-flex flex-row">
                <div id="wd-search" className="wd-search d-flex flex-row me-15">
                    <FaSearch className="d-flex wd-quiz-icon-search" />
                    <input type="text" id="search" className="d-flex search align-middle" placeholder="Search for quiz" />
                </div>



                <div className="d-flex flex-row justify-content-end ms-auto mb-3">
                    
                    <a href={`#/Kanbas/Courses/${cid}/Quizzes/${qid}/Editor`} className="btn btn-danger me-2">+ Quiz</a>


                    <div className="dropdown">
                        <button className="dropbtn"><FaEllipsisVertical /></button>
                        <div className="dropdown-content">
                            <a href={`#/Kanbas/Courses/${cid}/Quizzes/${qid}/Details`}>Edit</a>
                            <a href="#">Delete</a>
                            {/* Removes quiz and stays in quiz list screen */}
                            <a href="#">Publish</a>
                            {/* Big task */}
                            <a href="#">Copy</a>
                            <a href="#">Sort</a>
                        </div>
                    </div>
                </div>

            </div>

            <ul id="wd-list" className="list-group flex">
                <div id="wd-list-item-1" className="list-group-item flex-start bg-secondary">
                    <FaChevronDown /> Assignment Quizzes
                </div>


                {quizzes.map((quiz) => (
                    <li className="wd-quiz-entries list-group-item d-flex flex-row bl-2">
                        <FaRocket className="wd-quiz-icons me-3 justify-content-center" />
                        <div className="d-flex flex-column">
                            <span className="wd-bold">
                                <a href={`#/Kanbas/Courses/${cid}/Quizzes/${quiz._id}/Details`} className="wd-links">{quiz.title}</a>
                            </span>
                            <span>
                                <span className="wd-bold">Closed Due </span>{quiz.due} | {quiz.points} pts | {quiz.questions} Questions
                            </span>
                        </div>

                        <div className="endIcons d-flex ms-auto align-items-center">
                            <FaCheckCircle className="CheckMark me-3 justify-content-center" />
                            <FaEllipsisVertical className="CheckMark" />
                        </div>

                    </li>

                ))

                }










                {/* <li className="wd-quiz-entries list-group-item d-flex flex-row bl-2">
                    <FaRocket className="wd-quiz-icons me-3 justify-content-center" />
                    <div className="d-flex flex-column">
                        <span className="wd-bold">
                            <a href="" className="wd-links">Q1</a>
                        </span>
                        <span>
                            <span className="wd-bold">Closed Due </span>May 17 at 11:59pm May 17 at 11:59pm 29 pts 11 Questions
                        </span>
                    </div>

                    <div className="endIcons d-flex ms-auto align-items-center">
                        <FaCheckCircle className="CheckMark me-3 justify-content-center" />
                        <FaEllipsisVertical className="CheckMark" />
                    </div>

                </li>









                <li className="wd-quiz-entries list-group-item d-flex flex-row">

                    <div>
                        <FaRocket className="wd-quiz-icons me-3 justify-content-center" />
                    </div>

                    <div className="d-flex flex-column">
                        <span className="wd-bold">
                            <a href="" className="wd-links">Q1</a>
                        </span>
                        <span>
                            <span className="wd-bold">Closed Due </span>May 17 at 11:59pm May 17 at 11:59pm 29 pts 11 Questions
                        </span>
                    </div>

                    <div className="endIcons d-flex ms-auto align-items-center">
                        <FaCheckCircle className="CheckMark me-3 justify-content-center" />
                        <FaEllipsisVertical className="CheckMark" />
                    </div>


                </li>

                <li className="wd-quiz-entries list-group-item d-flex flex-row">
                    <FaRocket className="wd-quiz-icons me-3 justify-content-center" />
                    <div className="d-flex flex-column">
                        <span className="wd-bold">
                            <a href="" className="wd-links">Q1</a>
                        </span>
                        <span>
                            <span className="wd-bold">Closed Due </span>May 17 at 11:59pm May 17 at 11:59pm 29 pts 11 Questions
                        </span>
                    </div>

                    <div className="endIcons d-flex ms-auto align-items-center">
                        <FaCheckCircle className="CheckMark me-3 justify-content-center" />
                        <FaEllipsisVertical className="CheckMark" />
                    </div>

                </li>

                <li className="wd-quiz-entries list-group-item d-flex flex-row">
                    <FaRocket className="wd-quiz-icons me-3 justify-content-center" />
                    <div className="d-flex flex-column">
                        <span className="wd-bold">
                            <a href="" className="wd-links">Q1</a>
                        </span>
                        <span>
                            <span className="wd-bold">Closed Due </span>May 17 at 11:59pm May 17 at 11:59pm 29 pts 11 Questions
                        </span>
                    </div>

                    <div className="endIcons d-flex ms-auto align-items-center">
                        <FaCheckCircle className="CheckMark me-3 justify-content-center" />
                        <FaEllipsisVertical className="CheckMark" />
                    </div>

                </li>

                <li className="wd-quiz-entries list-group-item d-flex flex-row">
                    <FaRocket className="wd-quiz-icons me-3 justify-content-center" />
                    <div className="d-flex flex-column">
                        <span className="wd-bold">
                            <a href="" className="wd-links">Q1</a>
                        </span>
                        <span>
                            <span className="wd-bold">Closed Due </span>May 17 at 11:59pm May 17 at 11:59pm 29 pts 11 Questions
                        </span>
                    </div>

                    <div className="endIcons d-flex ms-auto align-items-center">
                        <FaCheckCircle className="CheckMark me-3 justify-content-center" />
                        <FaEllipsisVertical className="CheckMark" />
                    </div>

                </li> */}


            </ul>

        </div >
    )

}