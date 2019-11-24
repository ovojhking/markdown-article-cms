import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'Assets/images/logo.png';

const Header = () => {
	return(
		<div className="header d-flex justify-content-center align-items-center">
			<div className="col-12 col-xl-10 h-100 d-flex justify-content-center align-items-center">
				<Link className="d-flex justify-content-start align-items-center col-7 col-lg-9 h-100" to="/">
					<img className="logo cursor-pointer" src={Logo} alt="logo"/>
				</Link>
				<div className="col-5 col-lg-3 d-flex justify-content-end align-items-center">
					<a className="col-6 text-white d-flex align-items-center no-underline" href="https://gitlab.com/jhtokd/markdown-article-cms">
						<i className="fa-lg fab fa-gitlab" />
						<span className="ml-2 d-none d-sm-block">程式碼</span>
					</a>

					<a className="col-6 text-white d-flex align-items-center no-underline" href="https://www.cakeresume.com/s--7hIWbrdfMy9nVV0UQ_I9cA--/jimmy-eab4dd">
						<i className="fa-lg fas fa-id-card" />
						<span className="ml-2 d-none d-sm-block">履歷</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
