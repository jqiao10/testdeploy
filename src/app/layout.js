import React from 'react';
import Header from '../components/Header'; 
import Footer from '../Components/Footer';
import ClientRendering from '../Components/ClientRendering';
import MainNavigation from '../Components/MainNavigation';
import NavigationBar from '../Components/NavigationBar';
import { FaAlignJustify } from "react-icons/fa";
import { useSidebar } from '../hooks/useSidebar'; 
import '../app/global.css';

export default function RootLayout({ children }) {
  const sidebarModel = useSidebar();

  const toggleSidebar = () => {
    sidebarModel.onOpen();
  }

  return (
    <>
      <ClientRendering>
        <button
          className="absolute left-3 top-3 cursor-pointer md:hidden z-20"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <FaAlignJustify size={25} />
        </button>
        {/* Assuming SideBar component exists and is imported correctly */}
        <SideBar />
        <div className="flex flex-col min-h-screen">
          <MainNavigation />
          <NavigationBar />
          {/* You might need to adjust mt-12 to the combined height of your navigation bars */}
          <main className="mt-12 flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </ClientRendering>
    </>
  );
}
