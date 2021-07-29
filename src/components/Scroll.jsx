import React from 'react';
import '../index.css';

const Scroll = ({ children }) => {
	return (
		<div id="scrollBar" style={{ overflowY: 'scroll', border: '5px solid black', height: '800px' }}>
			{children}
		</div>
	);
};

export default Scroll;