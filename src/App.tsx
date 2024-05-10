import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { KudosAlbumPage, NotFoundPage } from "./pages";
import { DefaultLayout } from "./ui";

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Navigate to="kudos-album" replace />} />
        <Route path="kudos-album" element={<KudosAlbumPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
