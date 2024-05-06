import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NotFoundPage } from "./pages";
import { DefaultLayout } from "./ui";

function App() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<>Home Page</>} />
        <Route path="user" element={<>User page</>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
