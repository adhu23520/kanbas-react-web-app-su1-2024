import { useLocation } from "react-router";
export default function TOC() {
  const location = useLocation();
    return (
      <ul className="nav nv-pill">
        <li className="nav-item"><a id="wd-a" href="#/Labs" 
        className={`nav-link ${location.pathname.includes("Labs") ? "active" : ""}`}
        >Labs<br/>{location.pathname}</a></li>
        <li className="nav-item"><a id="wd-a1" href="#/Labs/Lab1"
        className={`nav-link ${location.pathname.includes("Lab 1") ? "active" : ""}`}
        >Lab 1</a></li>
        <li className="nav-item"><a id="wd-a2" href="#/Labs/Lab2"
        className={`nav-link ${location.pathname.includes("Lab 2") ? "active" : ""}`}
        >Lab 2</a></li>
        <li className="nav-item"><a id="wd-a3" href="#/Labs/Lab3"
        className={`nav-link ${location.pathname.includes("Lab 3") ? "active" : ""}`}
        >Lab 3</a></li>
        <li className="nav-item"><a id="wd-k"  href="#/Kanbas"
        className={`nav-link ${location.pathname.includes("Kanbas") ? "active" : ""}`}
        >Kanbas</a></li>
  </ul>
  ); }