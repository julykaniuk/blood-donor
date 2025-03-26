import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ScrollToTop from "../../features/hooks/ScrollToTop.jsx";
import DonorPageHome from "../../pages/donor/DonorPageHome.jsx";
import DonorPageCalendar from "../../pages/donor/DonorPageCalendar.jsx";
import DonorPageSettings from "../../pages/donor/DonorPageSettings.jsx";
import DonorPageCalendar1 from "../../pages/donor/DonorPageCalendar1.jsx";

function DonorRoutes() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/donor/home" element={<DonorPageHome/>} />
                <Route path="/donor/settings" element={<DonorPageSettings/>} />
                <Route path="/donor/calendar" element={<DonorPageCalendar/>} />
                <Route path="/donor/calendar1" element={<DonorPageCalendar1/>} />

            </Routes>

        </Router>
    );
}

export default DonorRoutes;
