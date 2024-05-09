import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NotFoundPage } from "./pages";
import { DefaultLayout } from "./ui";

function App() {
  return (
    <Routes>
      <Route
        path="kudos-album"
        element={
          <DefaultLayout>
            <>Kudos Albumn</>
          </DefaultLayout>
        }
      />
      <Route
        path="rock-stars"
        element={
          <DefaultLayout>
            <>Rock Stars</>
          </DefaultLayout>
        }
      />
      <Route
        path="user"
        element={
          <DefaultLayout>
            <>User</>
          </DefaultLayout>
        }
      />
      <Route
        path="*"
        element={
          <DefaultLayout>
            <NotFoundPage />
          </DefaultLayout>
        }
      />
    </Routes>
  );
}

export default App;
