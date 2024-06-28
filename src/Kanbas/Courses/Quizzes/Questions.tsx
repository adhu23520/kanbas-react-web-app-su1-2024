import { FaBan } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";
import "./index2.css";
import { Navigate, Route, Routes, useParams } from "react-router";
import QuizTF from "./QuizTF";
import QuizMCQ from "./QuizMCQ";
import QuizFB from "./QuizFB";
import QuizAdd from "./QuizAdd";
import * as db from "../../Database";
const questions = db.questions;



export default function Questions() {
    const { qid } = useParams();
    const { cid } = useParams();
    // const question = questions.filter((quest) => quest.course === cid);
    console.log(questions);
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
            </div>
            <hr />
            <div>
                {/* ..... */}
                {/* quest.map((description: any) => (
                <div>
                    {description.questionDesc}
                    <br />
                </div>
                ))

                courseAssignments.map((assignment: any) => (
                <>
                    <li className="wd-lesson list-group-item p-3 ps-1
             d-flex flex-row justify-content-between align-items-center gap-3">

                        <div className="d-flex flex-column gap-1">
                                <a className="wd-assignment-link"
                                    href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} style={{ color: 'black', textDecoration: 'none' }}>
                                    <b>{assignment.title}</b><br />
                                </a>
                        </div>
                    </li>
                </>

                )) */}
                {/* ......... */}

            </div>
            <div>
            </div>
            <div>
                <a href={`#/Kanbas/Courses/${cid}/Quizzes/${qid}/questions/Add/MCQ`} className="AddQuestion d-flex btn btn-secondary justify-content-center">
                    + New Question
                </a>

            </div>
            <hr />
            <div className="d-flex mt-2 justify-content-center">
                <button className="btn btn-secondary d-flex p-2 me-2">Cancel</button>
                <button className="btn btn-danger d-flex">Save</button>
            </div>


        </div>
    );
}