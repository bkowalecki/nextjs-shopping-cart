import { Provider } from "react-redux";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import store from "../redux/store";
import toast, { Toaster } from "react-hot-toast";
import "../styles/globals.css";
const notify = () => toast("Here is my toast!");
const sucessNotify = () => toast.success("Sucess!");
const errorNotify = () => toast.error("Error");



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
