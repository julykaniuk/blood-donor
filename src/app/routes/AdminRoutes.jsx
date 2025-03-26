import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "../../features/hooks/ScrollToTop.jsx";
import AdminPageDonor from "../../pages/admin/AdminPageDonor.jsx";
import AdminPageBank from "../../pages/admin/AdminPageBank.jsx";
import AdminPageCalendar from "../../pages/admin/AdminPageCalendar.jsx";

function AdminRoutes() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/admin/" element={<AdminPageDonor/>} />
                <Route path="/admin/bank" element={<AdminPageBank/>} />
                <Route path="/admin/calendar" element={<AdminPageCalendar/>} />

            </Routes>

        </Router>
    );
}

export default AdminRoutes;
