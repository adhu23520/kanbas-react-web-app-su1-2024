import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import "./styles.css";
export default function Kanbas() {
    return (
      <div id="wd-kanbas" className="h-100">
  <div className="d-flex">

    <div className="bg-black d-md-black h-100">
      <KanbasNavigation />
    </div>

    <div className="flex-fill p-4">
      <Routes>
        <Route path="/" element={<Navigate to="Dashboard" />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Courses/:cid/*" element={<Courses />} />
      </Routes>
    </div>

  </div>
</div>

  );
  }