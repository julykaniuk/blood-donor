
import MenuAdmin from "../../widgets/admin/siderbar/MenuAdmin.jsx";
import BloodDonationTable from "../../widgets/admin/donor/BloodDonationTable.jsx";
import TopBar from "../../widgets/donor/sidebar/TopBar.jsx";

function AdminPageDonor() {

    return (
        <>
            <MenuAdmin/>
            <TopBar/>
            <BloodDonationTable/>
        </>
    )
}

export default AdminPageDonor
