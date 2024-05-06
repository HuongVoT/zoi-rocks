import { UserOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import {
  StyledHeaderLayout,
  StyledLogoColumn,
  StyledPageNameColumn,
  UserAvatarStyle,
} from "./header.style";

export function HeaderLayout() {
  return (
    <StyledHeaderLayout>
      <Row>
        <StyledLogoColumn span={4}></StyledLogoColumn>
        <StyledPageNameColumn span={19}>
          <div>Kudos Album</div>
        </StyledPageNameColumn>
        <Col span={1}>
          <Link to="user">
            <UserOutlined style={UserAvatarStyle} />
          </Link>
        </Col>
      </Row>
    </StyledHeaderLayout>
  );
}
