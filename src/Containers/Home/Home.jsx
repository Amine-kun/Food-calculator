import React from 'react';
import './Home.css';

import Sidebar from '../../Components/Sidebar/Sidebar';

const Home = () => {
	return (
		<section className="homepage full-v app-flex">
			<Sidebar/>
			<div className="pages-container">
				home
			</div>
		</section>
	)
}

export default Home;