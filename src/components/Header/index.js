import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '../../store/modules/auth/actions';

// import Notifications from '~/components/Notifications';

import logo from '../../assets/logo.svg';
// eslint-disable-next-line import/named
import { Container, Content, Profile, SignOut } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Meetapp" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
          </Profile>
          <SignOut>
            <div>
              <button type="button" onClick={handleSignOut}>
                Sair
              </button>
            </div>
          </SignOut>
        </aside>
      </Content>
    </Container>
  );
}
