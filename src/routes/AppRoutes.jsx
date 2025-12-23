import { BrowserRouter, Routes, Route } from "react-router-dom";
import PasswordPage from "../pages/Auth/PasswordPage";
import HomePage from "../pages/Home/HomePage";
import MembersPage from "../pages/Members/MembersPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import FamilyGalleryPage from "../pages/Gallery/FamilyGalleryPage";
import ProtectedRoute from "../components/common/ProtectedRoute";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PasswordPage />} />

                <Route
                    path="/home"
                    element={
                        <ProtectedRoute>
                            <HomePage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/members"
                    element={
                        <ProtectedRoute>
                            <MembersPage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/profile/:id"
                    element={
                        <ProtectedRoute>
                            <ProfilePage />
                        </ProtectedRoute>
                    }
                />

                {/* ✅ FAMILY GALLERY ROUTE */}
                <Route
                    path="/family-gallery"
                    element={
                        <ProtectedRoute>
                            <FamilyGalleryPage />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
