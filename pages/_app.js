import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
<div className="wrapper">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default App;
