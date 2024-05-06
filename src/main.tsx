import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { store } from "./redux";
import { ErrorPage } from "./pages";

ReactDOM.createRoot(document.getElementById("root")!, {}).render(
  <BrowserRouter>
    <ErrorBoundary fallback={<ErrorPage />}>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </BrowserRouter>,
);
