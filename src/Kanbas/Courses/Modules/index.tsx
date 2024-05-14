export default function Modules() {
    return (
  <div>
    <button type="button">COLLAPSE ALL</button>
    <button type="button">VIEW PROGRESS</button>
    <select name="Dropdown" id="Dropdown">
    <option value="Publish All">Publish All</option>
    <option value="A1">A1</option>
    <option value="A2">A2</option>
    <option value="A3">A3</option>
  </select>

    <br></br>
    <button type="button">+ MODULE</button>
        {/* Collapse All button, View Progress button, etc. */}
        <ul id="wd-modules">
  <li className="wd-module">
  <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
  </li> </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer Chapter 1</li>
                  <li className="wd-content-item">Full Stack Developer Chapter 2</li>
                </ul>
  </li> </ul>
  </li> </ul>
  </div> );}