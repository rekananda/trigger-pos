import Link from "next/link";

const SidebarLogo = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="app-logo">
      <Link className="logo d-inline-block" href="/">
        <img src="/images/logo/1.png" alt="#" />
      </Link>
      <span
          className="bg-light-light toggle-semi-nav"
          onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <i className="ph ph-circles-four f-s-20"></i>
      </span>
    </div>
  );
};

export default SidebarLogo;
