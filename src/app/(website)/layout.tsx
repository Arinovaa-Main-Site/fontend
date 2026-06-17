import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";
import React from "react";

const WebsiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header/>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
