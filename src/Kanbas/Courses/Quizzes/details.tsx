import { useParams } from "react-router";
import "./index.css";
import { FaPencil } from "react-icons/fa6";
import { quizzes } from "../../Database";
export default function Details() {
    const { qid } = useParams();
    const { cid } = useParams();

    return (
        <div>
            <div className="previewEditButtons d-flex justify-content-center">

                <a
                    href={`#/Kanbas/Courses/${cid}/Quizzes/${qid}/preview`}
                    className="preview btn btn-secondary topButtons d-flex me-2">
                    Preview
                </a>

                <a
                    href={`#/Kanbas/Courses/${cid}/Quizzes/${qid}/Editor`}
                    className="preview btn btn-secondary topButtons d-flex me-2">
                        <span className="pencil d-flex me-2 align-items-center"><FaPencil /></span>
                        <text className="edit d-flex me-2">Edit</text>
                </a>

            </div>
            <hr />

            <div className="heading d-flex flex-column">
                <h2>Q1-HTML</h2>
            </div>

            <div className="quizDetailsContent d-flex">
                <div className="d-flex flex-column pointtitles text-nowrap col-6">
                    <span className="points d-flex flex-column me-2">Quiz Type</span>
                    <span className="points d-flex flex-column me-2">Points</span>
                    <span className="points d-flex flex-column me-2">Assignment Group</span>
                    <span className="points d-flex flex-column me-2">Shuffle Answers</span>
                    <span className="points d-flex flex-column me-2">Time Limit</span>
                    <span className="points d-flex flex-column me-2">Multiple Attempts</span>
                    <span className="points d-flex flex-column me-2">View Response</span>
                    <span className="points d-flex flex-column me-2">Show Correct Answers</span>
                    <span className="points d-flex flex-column me-2">One Question at a time</span>
                    <span className="points d-flex flex-column me-2">Require Respondus Browser Lockdown</span>
                    <span className="points d-flex flex-column me-2">Required to view Quizz Results</span>
                    <span className="points d-flex flex-column me-2">Webcam Required</span>
                    <span className="points d-flex flex-column me-2">Lock Questions After Answering</span>
                </div>
                <div className="d-flex flex-column pointtitleanswers text-nowrap col-6">
                    <span className="points1 d-flex flex-column me-2">Graded Quiz</span>
                    <span className="points1 d-flex flex-column me-2">29</span>
                    <span className="points1 d-flex flex-column me-2">QUIZZES</span>
                    <span className="points1 d-flex flex-column me-2">No</span>
                    <span className="points1 d-flex flex-column me-2">30 minutes</span>
                    <span className="points1 d-flex flex-column me-2">No</span>
                    <span className="points1 d-flex flex-column me-2">Always</span>
                    <span className="points1 d-flex flex-column me-2">Immediately</span>
                    <span className="points1 d-flex flex-column me-2">Yes</span>
                    <span className="points1 d-flex flex-column me-2">No</span>
                    <span className="points1 d-flex flex-column me-2">No</span>
                    <span className="points1 d-flex flex-column me-2">No</span>
                    <span className="points1 d-flex flex-column me-2">No</span>
                </div>
            </div>
            <br />

            <div className="dueDetails d-flex flex-column">
                <div className="topDetails d-flex flex-grow-1">
                    <span className="d-flex col-2">Due</span>
                    <span className="d-flex col-2">For</span>
                    <span className="d-flex col-2">Available From</span>
                    <span className="d-flex col-2">Until</span>
                </div>
                <hr />

                <div className="bottomDetails d-flex flex-grow-1">
                    <span className="d-flex col-2">Sept 21 at 1pm</span>
                    <span className="d-flex col-2">Everyone</span>
                    <span className="d-flex col-2">Sept 1 at 12:00am</span>
                    <span className="d-flex col-2">Sept 21 at 1pm</span>
                </div>

            </div>

        </div>
    );
}