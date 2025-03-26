import MainPage from "../../widgets/public-access/home/main-page/MainPage.jsx";
import Statistics from "../../widgets/public-access/home/statistics-page/Statistics.jsx";
import Why from "../../widgets/public-access/home/why-page/Why.jsx";
import FirstTime from "../../widgets/public-access/home/first-time-page/FirstTime.jsx";
import DonationSection from "../../widgets/public-access/home/donation-section/DonationSection.jsx";
import FAQSection from "../../widgets/public-access/home/FAQ-page/FAQSection.jsx";
import Header from "../../widgets/public-access/header/Header.jsx";
import Form from "../../widgets/public-access/home/form-page/Form.jsx";
import Footer from "../../widgets/public-access/footer/Footer.jsx";
import Test1 from "../../widgets/public-access/home/test-section/Test1.jsx";

function HomePage() {

    return (
        <>
            <Header/>
            <MainPage/>
            <Statistics/>
            <Why/>
            <Test1  />
            <FirstTime/>
            <DonationSection/>
            <FAQSection/>
            <Form/>
            <Footer/>
        </>
    )
}

export default HomePage
