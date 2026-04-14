"use client";

import React from "react";
import Navbar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/Sidebar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={` flex w-full min-h-screen bg-gray-50 text-gray-900`}>
      <Sidebar />
      <main className="flex flex-col h-full w-full py-7 px-9 bg-gray-50 md:pl-24">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
