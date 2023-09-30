import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

const SideBar = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout !",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("access_token");
        navigate("/login");
        Swal.fire("success!", "You has been logout.", "success");
      }
    });
  };

  return (
    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
      <a
        href="/"
        className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <img
          src="https://i.ibb.co/hBVVy6X/ayamkeepci.png"
          alt="Logo"
          width="200"
          className="rounded-circle"
        />
      </a>
      <ul
        className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start text-white"
        id="menu"
      >
        <li>
          <Link
            to={"/"}
            className="nav-link px-0 align-middle text-white"
            // onClick={() => navigate("/")}
          >
            <i className="fs-4 bi-speedometer2"></i>{" "}
            <span className="ms-1 d-none d-sm-inline">Dashboard</span>{" "}
          </Link>
        </li>
        <li>
          <Link
            to={"/products"}
            className="nav-link px-0 align-middle text-white"
          >
            <i className="fs-4 bi-grid"></i>{" "}
            <span className="ms-1 d-none d-sm-inline">Products</span>
          </Link>
        </li>
        <li>
          <Link
            to={"/categories"}
            className="nav-link px-0 align-middle text-white"
          >
            <i className="fs-4 bi-table"></i>{" "}
            <span className="ms-1 d-none d-sm-inline">Category</span>
          </Link>
        </li>
        <li>
          <Link
            to={"/register"}
            className="nav-link px-0 align-middle text-white"
          >
            <i className="fs-4 bi-people me-1"></i>
            <span className="ms-1 d-none d-sm-inline">Register</span>
          </Link>
        </li>
        <li style={{cursor:"pointer"}}>
          <span onClick={handleLogout} className="ms-1 d-none d-sm-inline" href="">
            <i className="fas fa-sign-out-alt me-1"></i> Sign out
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
