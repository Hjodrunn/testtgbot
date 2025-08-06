import React from 'react';
import {useTelegram} from '../../hooks/useTelegram.js'
// const { user, onClose } = useTelegram();

const Header = () => {
		
  }

	return (
		<div className={'header'}>
			<Button onClick={Onclose}>Закрыть</Button>
			<span className={'username'}>
				{user?.username}  {/*  ?. чтобы не крякнуть */ }
			</span>
		</div>
	);


export default Button;