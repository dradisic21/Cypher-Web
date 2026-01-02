import { Routes, Route } from "react-router-dom";
import HomePage from "./Page/Home";
import AboutPage from "./Page/About";
import ServicePage from "./Page/Service";
import CaseStudiesPage from "./Page/CaseStudies";
import WorksPage from "./Page/Works"
import NotFoundPage from "./Page/NotFound";
import ContactPage from "./Page/Contact";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="service" element={<ServicePage />} />
      <Route path="case_studies" element={<CaseStudiesPage />} />
      <Route path="works" element={<WorksPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="404_page" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRouter;
