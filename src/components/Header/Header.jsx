import React from 'react';
import css from "..//Header/Header.module.css"
const Header = () => {
  return (
    <nav className='navbar bg-dark mb-3'>
			<div className={css.container_fluid}>
				<button className='navbar-brand mb-0 h1 text-success'>
					Home
				</button>
				<button className='btn btn-outline-success'>
					Movie
				</button>
			</div>
		</nav>
  );
};

export default Header;
