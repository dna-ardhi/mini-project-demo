import { Navbar, Sidebar } from "../components";

const DefaultLayout = (props) => {
  return (
    <>
      <Navbar />
      <div className="default-body">
        {props.children}
      </div>
    </>
  )
}

export default DefaultLayout
