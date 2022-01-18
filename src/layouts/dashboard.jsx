import { Navbar, Sidebar } from "../components";

const DashboardLayout = (props) => {
  return (
    <div className="dashboard-layout">
      <Navbar />
      <div className="dashboard-body">
        <Sidebar />
        <div>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
