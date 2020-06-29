import React from 'react';
import './Display.css';


const Display = ( { onDisplayChange }) => {
	return (
			<div className="display ph3 pv4">{ onDisplayChange }</div>
		)
}

export default Display;