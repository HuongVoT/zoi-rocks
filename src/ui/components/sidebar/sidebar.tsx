import type { MenuProps } from "antd";
import { Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import {
  MenuStyle,
  SelectionStyle,
  StyledNameWrapper,
  StyledProductName,
  StyledSider,
} from "./sidebar.style";

export function SidebarLayout() {
  const location = useLocation();
  const pathname = location.pathname;
  const selected = pathname.slice(1);

  type MenuItem = Required<MenuProps>["items"][number];
  const menuSelections: MenuItem[] = [
    {
      key: "kudos-album",
      label: (
        <NavLink style={SelectionStyle} to="/kudos-album">
          <h4>kudos album</h4>
        </NavLink>
      ),
    },
    {
      key: "rock-stars",
      label: (
        <NavLink style={SelectionStyle} to="/rock-stars">
          <h4>rock stars</h4>
        </NavLink>
      ),
    },
  ];
  return (
    <StyledSider width="20vw">
      <StyledProductName>
        <StyledNameWrapper to="/kudos-album">
          <img src="Zoi_Logo_Dark_Blue_RGB_High.png" alt="Zoi" />
          <h3>rocks</h3>
        </StyledNameWrapper>
      </StyledProductName>
      <Menu
        style={MenuStyle}
        defaultSelectedKeys={["kudos-album"]}
        selectedKeys={[selected]}
        mode="inline"
        items={menuSelections}
      />
    </StyledSider>
  );
}
