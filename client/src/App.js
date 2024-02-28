import "./App.css";
import Allroutes from "./Router/Allroutes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <Header/>
      <Navbar />
      <div className="alert alert-danger" role="alert">
      <strong>Beta Mode:</strong> This IDE is currently in beta testing. It may undergo changes, and unexpected issues may arise. Your feedback is valuable in improving the user experience.
      </div>
      <Allroutes />
      <Footer />
    </>
  );
}

export default App;
