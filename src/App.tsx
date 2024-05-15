import { Navigate, Route, Routes } from "react-router-dom";
import { Amplify } from "aws-amplify";
import { amplifyConfig } from "./configs";
import "./App.css";
import { DefaultLayout, LoginLayout, PrivateRoute } from "./ui";
import {
  KudosAlbumPage,
  NotFoundPage,
  RockStarsPage,
  LoginPage,
} from "./pages";

Amplify.configure(amplifyConfig);

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
