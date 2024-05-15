import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { KudosAlbumPage, NotFoundPage } from "./pages";
import { DefaultLayout, PrivateRoute } from "./ui";
import { RockStarsPage } from "./pages";
import { LoginPage } from "./pages/login-page";
import { LoginLayout } from "./ui/layouts/login-layout";

function App() {
  return (
    <Routes>
      <Route element={<LoginLayout />}>
        <Route path="login" element={<LoginPage />} />
      </Route>
      <Route
        element={
          <PrivateRoute>
            <DefaultLayout />
          </PrivateRoute>
        }
      >
        <Route path="/" element={<Navigate to="/kudos-album" />} />
        <Route path="kudos-album" element={<KudosAlbumPage />} />
        <Route path="rock-stars" element={<RockStarsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
