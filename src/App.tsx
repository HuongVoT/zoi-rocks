import { Col, Row } from "antd";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NotFoundPage } from "./pages";
import { HeaderLayout, SidebarLayout } from "./ui";

function App() {
  return (
    <Row className="app">
      <Col span={4} className="sidebar">
        <SidebarLayout />
      </Col>
      <Col span={20} className="body">
        <Row className="header">
          <HeaderLayout />
        </Row>
        <Row className="content">
          <Routes>
            <Route path="/" element={<>Home page</>} />
            <Route path="user" element={<>User page</>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Row>
      </Col>
    </Row>
  );
}

export default App;
