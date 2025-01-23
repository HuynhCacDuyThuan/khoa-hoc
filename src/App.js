import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./user/Index";
import LoginForm from "./user/LoginForm";
import ForgotPassword from "./user/ForgotPassword";
import RegistrationForm from "./user/RegistrationForm";
import CourseList from "./user/CourseList";
import CourseDetail from "./user/CourseDetail";
import BlogPage from "./user/BlogPage";
import TournamentCard from "./user/TournamentCard";
import TournamentDetails from "./user/TournamentDetails";
import Profile from "./user/Profile";
import ArticleDetail from "./user/ArticleDetail";
import DanangCourse from "./user/DanangCourse";
import OnlineCourse from "./Component/OnlineCourseSlide";
import OnlineCourseUpgrade from "./Component/OnlineCourseUpgrade";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/course" element={<CourseList/>} />
        <Route path="/course-detail" element={<CourseDetail/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/tournament" element={<TournamentCard/>} />
        <Route path="/tournamentdetails" element={<TournamentDetails/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/articleDetail" element={<ArticleDetail/>} />
        <Route path="/da-nang" element={<DanangCourse/>} />
        <Route path="/khoa-hoc-co-vua-doi-tuyen" element={<OnlineCourseUpgrade/>} />
      </Routes>
    </Router>
  );
};

export default App;
