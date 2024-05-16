import { Navigate, Route, Routes } from "react-router-dom";
import { Amplify } from "aws-amplify";
import { fetchAuthSession } from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";
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

Hub.listen("auth", async ({ payload }) => {
  switch (payload.event) {
    case "signedIn": {
      const session = await fetchAuthSession();
      localStorage.setItem("token", session.tokens?.idToken?.toString() ?? "");
      break;
    }

    case "signedOut":
      localStorage.setItem("token", "");
      break;
  }
});

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
