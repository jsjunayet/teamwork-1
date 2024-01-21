import Footer from "@/Component/Footer/Footer";
import Navbar from "@/Component/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
