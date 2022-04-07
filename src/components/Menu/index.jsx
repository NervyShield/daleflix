import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import Button from '../Button';
// import ButtonLink from "./components/ButtonLink";
import styles from './Menu.module.scss';

export default function Menu() {
  return (
    <nav className={styles.Menu}>
      <Link to="/">
        <img className={styles.Logo} src={Logo} alt="DaleFlix Logo" />
      </Link>
      <Button as={Link} className={styles.ButtonLink} to="/cadastro/video">
        Novo Vídeo
      </Button>

    </nav>
  );
}
