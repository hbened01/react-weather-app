import React from 'react';
import './style.css';

const Location = ({city}) => (
	<div id = 'locationCont'>
		<h1>
			<strong>
					<i>
						{city}
					</i>
			</strong>
		</h1>
	</div>
);

export default Location;
