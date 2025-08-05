import React from 'react';

const Header = () => {
	const tg = window.Telegram.WebApp;
	const onClose = () => {
    tg.close()
  }

	return (
		<div className={'header'}>
			<Button onClick={Onclose}>Закрыть</Button>
			<span className={'username'}>
				{tg.initDataUnsafe?.user?.username}  {/*  ?. чтобы не крякнуть */ }
			</span>
		</div>
	);
}

export default Button;