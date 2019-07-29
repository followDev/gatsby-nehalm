import React, {FunctionComponent} from "react";
import {Nav, NavContainer, NavLink, NavMenu, NavMenuItem, NavWrapper, SearchContainer} from "./style";
import {MenuItem} from "../../utils/models";
import {Search} from "../search";
import Logo from "../logo";

interface NavigationProps {
  title: string;
  logo: any;
  menu: MenuItem[];
  showSearch: boolean;
  dark?: boolean;
}

const Navigation: FunctionComponent<NavigationProps> = ({title, menu, dark = false, showSearch = true}) => {
  return (
    <NavContainer dark={dark}>
      <Nav>
        <Logo title={title}/>
        <NavWrapper>
          <NavMenu mobile={true}>
            {menu.map((item, index) => (
              <NavMenuItem key={index}>
                <NavLink to={item.path} key={index}>{item.name}</NavLink>
              </NavMenuItem>
            ))}
          </NavMenu>
          {showSearch &&
          <NavMenu>
            <SearchContainer>
              <Search/>
            </SearchContainer>
          </NavMenu>
          }
        </NavWrapper>
      </Nav>
    </NavContainer>
  );
};

export default Navigation;
