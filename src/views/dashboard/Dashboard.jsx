import React from "react";
import Sidebar from "./Sidebar";
import AdminProfilePage from "./AdminProfilePage";
import { Routes, Route } from 'react-router-dom';
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className='flex h-screen bg-backgroundDark text-gray-100 overflow-hidden'>
			<Sidebar />
			<Outlet />
		</div>
  );
};

export default Dashboard;
