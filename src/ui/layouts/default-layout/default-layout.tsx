import { Col, Row } from "antd";
import { ReactNode } from "react";
import { HeaderLayout, SidebarLayout } from "../../components";

interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <Row className="app">
      <Col span={4} className="sidebar">
        <SidebarLayout />
      </Col>
      <Col span={20} className="body">
        <Row className="header">
          <HeaderLayout />
        </Row>
        <Row className="content">{props.children}</Row>
      </Col>
    </Row>
  );
}
