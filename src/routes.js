import React from "react";
import { Link } from "react-router-dom";
import { UncontrolledDropdown } from "reactstrap";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import Index from "views/Index.js";
import Profile from "views/Profile.js";
import Maps from "views/Maps.js";
import Paymnt from "views/Paymnt.js";
import SubAccounts from "views/Subaccounts.js";
import Register from "views/Register.js";
import Login from "views/Login.js";
import Drivers from "views/Drivers.js";
import AddAdmin from "views/AddAdmin";
import AddDriver from "views/AddDriver";
import PasswordReset from "views/PasswordReset";
import PasswordResetRequest from "views/PasswordResetRequest";
import Admins from "views/Admins";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/subaccount",
    name: "Sub Accounts",
    icon: "ni ni-pin-3 text-orange",
    component: SubAccounts,
    layout: "/admin"
  },
  {
    path: "/payments",
    name: "Payments",
    icon: "ni ni-pin-3 text-orange",
    component: Paymnt,
    layout: "/admin",
    // Add a submenu for "Payments"
    submenu: [
      {
        path: "/payments/new",
        name: "New Payment",
        component: Admins,
        layout: "/admin",
      },
      {
        path: "/payments/history",
        name: "Payment History",
        component: Paymnt,
        layout: "/admin",
      },
      // Add more submenu items as needed
    ],
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  // {
  //   path: "/driver-profile/:id",
  //   name: "Driver Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: DriverProfile,
  //   layout: "/admin",
  // },
  {
    path: "/drivers",
    name: "Drivers",
    icon: "ni ni-bullet-list-67 text-red",
    component: Drivers,
    layout: "/admin",
  },
  {
    path: "/admins",
    name: "Admins",
    icon: "ni ni-bullet-list-67 text-red",
    component: Admins,
    layout: "/admin",
  },
  {
    path: "/add-admin",
    name: "Add new Admin",
    icon: "ni ni-key-25 text-info",
    component: AddAdmin,
    layout: "/admin",
  },
  {
    path: "/add-driver",
    name: "Add New Driver",
    icon: "ni ni-circle-08 text-pink",
    component: AddDriver,
    layout: "/admin",
  },
  {
    path: "/login",
    // name: "Driver Profile",
    // icon: "ni ni-single-02 text-yellow",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/reset-password",
    // name: "Driver Profile",
    // icon: "ni ni-single-02 text-yellow",
    component: PasswordReset,
    layout: "/auth",
  },
  {
    path: "/request-reset-password",
    // name: "Driver Profile",
    // icon: "ni ni-single-02 text-yellow",
    component: PasswordResetRequest,
    layout: "/auth",
  },
];

const renderSubmenu = (submenuItems) => {
  return (
    <DropdownMenu>
      {submenuItems.map((item, index) => (
        <DropdownItem key={index} to={item.layout + item.path} tag={Link}>
          {item.name}
        </DropdownItem>
      ))}
    </DropdownMenu>
  );
};

export { routes, renderSubmenu };
