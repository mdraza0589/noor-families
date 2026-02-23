import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import HomePage from "../pages/Home/HomePage";
import MembersPage from "../pages/Members/MembersPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import FamilyGalleryPage from "../pages/Gallery/FamilyGalleryPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/members"
          element={
            <MembersPage />
          }
        />

        <Route
          path="/profile/:id"
          element={
            <ProfilePage />
          }
        />

        <Route
          path="/family-gallery"
          element={
            <FamilyGalleryPage />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
