import React from 'react';
import { NavLink } from 'react-router-dom';
import css from "..//Header/Header.module.css"
const Header = () => {
  return (
    <nav className={css.navbar}>
			<div className={css.container_fluid}>
				<NavLink className={css.btn_outline_success} to='/'>
					Home
				</NavLink>
				<NavLink className={css.btn_outline_success} to='movies'>
					Movie
				</NavLink>
			</div>
		</nav>
  );
};

export default Header;
