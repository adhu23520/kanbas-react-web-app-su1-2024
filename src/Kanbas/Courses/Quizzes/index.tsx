import { FaSearch, FaChevronDown, FaRocket } from "react-icons/fa";
import "./index.css";
export default function Quizzes() {
    return (
        <div id="wd-css-flex" className="column">

            <div className="wd-search-and-buttons d-flex flex-row">
                <div id="wd-search" className="wd-search d-flex flex-row me-15">
                    <FaSearch className="wd-quiz-icon-search" />
                    <input type="text" id="search" name="search" placeholder="Search for quiz" />
                </div>
                <div>
                    <button className="wd-quizadd btn btn-primary d-flex justify-content-flex-end">+Assignment Quiz</button>
                </div>
            </div>

            <ul id="wd-list" className="list-group flex">
                <div id="wd-list-item-1" className="list-group-item flex-start bg-secondary">
                    <FaChevronDown /> Assignment Quizzes
                </div>

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

                </li>


            </ul>

        </div >
    )

}