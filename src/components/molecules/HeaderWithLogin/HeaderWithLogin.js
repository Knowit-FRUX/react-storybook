import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../atoms/Logo';
import Button from '../../atoms/Button';
import Header from '../../atoms/Header';
import './HeaderWithLogin.css';

const HeaderWithLogin = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header className="c-header-with-login">
    <div className="header-wrapper">
      <div className="logo-part">
        <Logo primary={true} size={'medium'}/>
        <Header text="Acme" headerType={1}/>
      </div>
      <div>
        {user ? (
          <Button size="small" onClick={onLogout} label="Log out" />
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);

export default HeaderWithLogin;

HeaderWithLogin.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

HeaderWithLogin.defaultProps = {
  user: null,
};
