import React from 'react';
import {useTelegram} from '../../hooks/useTelegram.js'

const Header = () => {
		const { user, onClose } = useTelegram();
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