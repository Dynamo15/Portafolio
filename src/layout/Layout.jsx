import Navbar from "../componentes/Navbar/Navbar";
import ThreeScene from "../componentes/ThreeScene";


const Layout = ({ children }) => {
  return (
    <div className="text-white min-h-screen">
      <ThreeScene /> 
      <Navbar />

      <main className="pt-20">
        {children}
      </main>

      <footer className="text-center p-6">
        Ricardo Sánchez
      </footer>
    </div>
  );
};

export default Layout;