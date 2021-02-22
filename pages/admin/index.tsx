//import AdminNavbar from "../components/AdminNavbar";
//import AdminNavbar from "../../components/AdminNavbar";
//import Layout from "../../components/Layout";
//import Layout from "../../components/Layout";
import AdminLayout from "../../components/AdminLayout";
import Sidebar from "../../components/Sidebar";

const Admin = () => (
  <div className="home">
    <Sidebar />
    <AdminLayout>
      <div className="container">
        <h1>Welcome to Your Admin Panel</h1>
      </div>
    </AdminLayout>
  </div>
);

export default Admin;
