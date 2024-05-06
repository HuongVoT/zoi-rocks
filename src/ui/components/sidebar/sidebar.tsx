import type { MenuProps } from "antd";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import {
  MenuStyle,
  SelectionStyle,
  StyledNameWrapper,
  StyledProductName,
  StyledSider,
} from "./sidebar.style";

export function SidebarLayout() {
  type MenuItem = Required<MenuProps>["items"][number];
  const menuSelections: MenuItem[] = [
    {
      key: "1",
      label: (
        <NavLink style={SelectionStyle} to="/kudos-album">
          kudos album
        </NavLink>
      ),
    },
    {
      key: "2",
      label: (
        <NavLink style={SelectionStyle} to="/rock-stars">
          rock stars
        </NavLink>
      ),
    },
  ];
  return (
    <StyledSider width="20vw">
      <StyledProductName>
        <StyledNameWrapper to="/">
          <img src="Zoi_Logo_Dark_Blue_RGB_High.png" alt="Zoi" />
          <span>rocks</span>
        </StyledNameWrapper>
      </StyledProductName>
      <Menu
        style={MenuStyle}
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={menuSelections}
      />
    </StyledSider>
  );
}
