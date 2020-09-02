import React from 'react'
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom'
import { authAPI } from '../../api/api';
import { PageHeader, Button} from 'antd';
import { setUserAC } from '../../redux/Reducer/authReducer'

const Header = (props) => {
  const logout = () => {
    authAPI.logout(props.id).then(response => {
      if (response.status === 204) {
        props.setUserAC(null, null, null, null, false)
      }
    })
  }

  const onChangePhoto = e => {
    authAPI.loadFile(e.target.files[0])
  };

  return (
    <PageHeader
      ghost={false}
      title="Галерея"
      extra={props.isAuth ? [
        <input key="2" type={"file"} onChange={onChangePhoto}/>,
        <Button key="1" type="primary" onClick={logout}>Выход</Button>
      ] : [
          <NavLink key="2" to='/registration'>Регистрация</NavLink>,
          <NavLink key="1" to='/login'>Вход</NavLink>
        ]}
    >
    </PageHeader>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  id: state.auth.id
});

let WithUrlRoure = withRouter(connect(mapStateToProps, { setUserAC })(Header));

export default WithUrlRoure