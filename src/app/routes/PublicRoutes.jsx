import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/public-access/HomePage.jsx";
import AboutUsPage from "../../pages/public-access/AboutUsPage.jsx";
import BloodPage from "../../pages/public-access/BloodPage.jsx";
import BloodTypePage from "../../pages/public-access/BloodTypePage.jsx";
import ContactPage from "../../pages/public-access/ContactPage.jsx";
import FaqPage from "../../pages/public-access/FaqPage.jsx";
import WhyPage from "../../pages/public-access/WhyPage.jsx";
import PlacePage from "../../pages/public-access/PlacePage.jsx";
import NeedDonorsPage from "../../pages/public-access/NeedDonorsPage.jsx";
import Login from "../../widgets/authentication/Login.jsx";
import SingUp from "../../widgets/authentication/SingUp.jsx";
import DemandPage from "../../pages/public-access/DemandPage.jsx";
import UsingPage from "../../pages/public-access/UsingPage.jsx";
import ScrollToTop from "../../features/hooks/ScrollToTop.jsx";

function PublicRoutes() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about_us" element={<AboutUsPage />} />
                <Route path="/article" element={<BloodTypePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/why" element={<WhyPage />} />
                <Route path="/demand" element={<DemandPage />} />
                <Route path="/using" element={<UsingPage />} />
                <Route path="/article_place" element={<PlacePage />} />
                <Route path="/need_donors" element={<NeedDonorsPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sing_up" element={<SingUp />} />
                <Route path="/article/:id" element={<BloodPage />} />
            </Routes>
        </Router>
    );
}

export default PublicRoutes;
