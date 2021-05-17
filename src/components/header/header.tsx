import React, { useEffect } from "react";
import { NavLink, useParams, useRouteMatch } from "react-router-dom";
import s from "./header.module.css";
import { Layout, Menu, Breadcrumb, Row, Col, Button } from 'antd';
import "antd/dist/antd.css"
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../redux/Redux_store";
import { logout } from "../../redux/Auth_Reduser";






const Header: React.FC = (props) => {
  
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
  const login = useSelector((state: AppStateType) => state.auth.login)

  const dispatch = useDispatch()

  const logoutCallback = () => {
    dispatch(logout())
  }
  
  
  

  const { Header, Content, Footer } = Layout;
  return (

    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Row>
        <Col span={16} >
        <Menu theme="dark" mode="horizontal" >
            <Menu.Item key="1"> <NavLink to="/Massage"> Massage </NavLink></Menu.Item>
            <Menu.Item key="2"><NavLink to="/Profile">Profile</NavLink></Menu.Item>
        <Menu.Item key="3"><NavLink to="/Users">Developers</NavLink></Menu.Item>
      </Menu>
        </Col>
        <Col span={8} >
          <div>
          {isAuth
            ? <p><Avatar alt={login||''} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} /> <Button onClick={logoutCallback} >Log out</Button> </p>
            : <Button onClick={logoutCallback} ><NavLink to={'/Login'} >Login</NavLink></Button>}
        </div>
        </Col>
      </Row>
        </Header>
    // <div className={s.header}>
    //   <div className={s.container}>
        // <div className={s.logoUser}>
        //   {props.isAuth
        //     ? <p>{props.login} <button onClick={props.logout} >Log out</button> </p>
        //     : <NavLink to={'/Login'} >Login</NavLink>}
        // </div>
    //     <div className="logo">
    //       <NavLink to='/Profile'>
    //         <img
    //           className={s.logo}
    //           src="https://www.instagram.com/static/images/ico/favicon-200.png/ab6eff595bb1.png"
    //           alt="logo"
    //         />
    //       </NavLink>
    //     </div>
    //     <nav>
    //       <ul className={s.nav1}>
    //         <li className={s.nav}>
    //           <NavLink to="/Massage">
    //             Massage
    //           </NavLink>
    //         </li>
    //         <li className={s.nav}>
              // <NavLink to="/Profile">
              //   Profile
              // </NavLink>
    //         </li>
    //         <li className={s.nav}>
              // <NavLink to="/Users">
              //   Users
              // </NavLink>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    // </div>
  );
};

export default Header;
