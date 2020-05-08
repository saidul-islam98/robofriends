import React from 'react';

const Card = ({id, name, email}) => {
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw shadow-5">
			<img alt="bots" src={`https://robohash.org/${name}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;