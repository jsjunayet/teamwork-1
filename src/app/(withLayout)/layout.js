import Footer from "@/Component/Footer/Footer";
import Navbar from "@/Component/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
