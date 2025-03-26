
import PublicRoutes from "./app/routes/PublicRoutes.jsx";
import AdminRoutes from "./app/routes/AdminRoutes.jsx";
import DonorPoutes from "./app/routes/DonorPoutes.jsx";

function App() {

  return (
    <>
        <PublicRoutes />
        <AdminRoutes/>
        <DonorPoutes/>
    </>
  )
}

export default App
