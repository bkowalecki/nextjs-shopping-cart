import { Provider } from "react-redux";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import store from "../redux/store";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
