import React, { useState } from "react";
import Logo from "./../../media/image/umap-logo.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../cache/umapRoom";

export const UserNav = () => {
  const dispatch = useDispatch();

  const [clickMenu, setClickMenu] = useState(true);

  return (
    <div className="flex items-center justify-around h-[100px] w-screen absolute z-30">
      <div className="logo">
        <img
          src={Logo}
          className="z-50 h-10 object-contain cursor-pointer hover:scale-[0.9] transition-transform "
          alt="umap-logo"
        />
      </div>

      <div className="relative flex-col items-end justify-end gap-10 ">
        <span
          className="hidden p-3 text-2xl font-medium cursor-pointer material-symbols-outlined md:flex"
          onClick={() => {
            setClickMenu(!clickMenu);
          }}
        >
          {clickMenu ? "menu" : "menu_open"}
        </span>

        <ul
          className="flex gap-20 text-lg font-medium text-gray md:hidden "
          id="options"
        >
          <Link
            to="/umap.ustp/umap/profile"
            className=" flex gap-2 items-center transition-transform cursor-pointer  hover:drop-shadow-md hover:scale-[1.1]"
          >
            <span className="material-symbols-outlined">account_box</span>
            Profile
          </Link>
          <Link
            to="/umap.ustp/umap/main"
            className=" flex flex-row gap-2 relative items-center transition-transform cursor-pointer  hover:drop-shadow-md hover:scale-[1.1]"
          >
            <span className="material-symbols-outlined">apartment</span>
            Going-To
          </Link>
          <Link
            to="/umap.ustp"
            className="flex gap-2 items-center transition-transform cursor-pointer  hover:drop-shadow-md hover:scale-[1.1]"
            onClick={() => {
              localStorage.clear();
              dispatch(logout());
            }}
          >
            <span class="material-symbols-outlined">logout</span>
            Logout
          </Link>
        </ul>

        <ul
          className={
            clickMenu
              ? " hidden md:hidden "
              : " text-lg font-medium text-gray  hidden md:flex md:flex-col md:mt-11 md:absolute md:gap-10 md:w-10 md:items-end md:justify-between"
          }
          id="options"
        >
          <Link
            to="/umap.ustp/umap/profile"
            className=" flex gap-2 items-center transition-transform cursor-pointer  hover:drop-shadow-md hover:scale-[1.1]"
          >
            <span className="material-symbols-outlined">account_box</span>
            Profile
          </Link>
          <Link
            to="/umap.ustp/umap/main"
            className=" flex flex-row gap-2 relative items-center transition-transform cursor-pointer  hover:drop-shadow-md hover:scale-[1.1]"
          >
            <span className="material-symbols-outlined">apartment</span>
            Going-To
          </Link>
          <Link
            to="/umap.ustp"
            className="flex gap-2 items-center transition-transform cursor-pointer  hover:drop-shadow-md hover:scale-[1.1]"
            onClick={() => {
              localStorage.clear();
              dispatch(logout());
            }}
          >
            <span class="material-symbols-outlined">logout</span>
            Logout
          </Link>
        </ul>
      </div>
    </div>
  );
};
