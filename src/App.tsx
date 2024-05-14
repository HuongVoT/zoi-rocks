import { Route, Routes } from "react-router-dom";
import "./App.css";
import { KudosAlbumPage, NotFoundPage } from "./pages";
import { DefaultLayout } from "./ui";
import { RockStarsPage } from "./pages";
import { LoginPage } from "./pages/login-page";
import { LoginLayout } from "./ui/layouts/login-layout";
import { PrivateRoute } from "./ui/containers";

function App() {
  return (
    <Routes>
      <Route element={<LoginLayout />}>
        <Route path="login" element={<LoginPage />} />
      </Route>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="kudos-album" element={<KudosAlbumPage />} />
          <Route path="rock-stars" element={<RockStarsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
