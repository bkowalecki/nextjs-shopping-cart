import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
  <div className="wrapper">
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default App;
