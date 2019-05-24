import React from 'react';

const Card = ({name, username, email, id}) => {
	return(
		<div className='tc bg-light-green dib br3 ma2 grow shadow-5'>
			<img alt='photo' src={`https://robohash.org/${name}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{username}</p>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;