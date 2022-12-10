import React from 'react';
import './Message.css';
import Loading from '../Loading/Loading';
import {BsCheck} from 'react-icons/bs';
const Message = ({loading, status}) => {
	return (
		<section className={`message-main app-flex ${status.status && 'showPannel'}`}>
			{loading && <Loading/>}
			{!loading &&
				<BsCheck style={{fontSize:'2.5rem', color:'white'}}/>
			}	
		</section>
	)
}

export default Message