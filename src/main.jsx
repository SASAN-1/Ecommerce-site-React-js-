import "./index.css";
import "./App.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import ScrollToTop from "./ScrollToTop";
import ScrollToHash from "./pages/components/utils/ScrolltoHash";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <ScrollToHash />
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
