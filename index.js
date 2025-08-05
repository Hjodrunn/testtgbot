// "start": "react-scripts start",
import {token} from './token.js'
const TelegramBot = require('node-telegram-bot-api');

const webAppUrl = "https://yandex.ru";

const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
	const text = msg.text

	
	if(text === '/start') {
		await bot.sendMessage(chatId, 'Запуск!', {
			reply_markup: {
				keyboard: [ // кнопка в ниже чата
					[{text: 'Кнопка', web_app: {url: webAppUrl}}]
				]
			}})}

	if(text === '/start') {
		await bot.sendMessage(chatId, 'Добрейший вечерочек дорогие друзья!', {
			reply_markup: {
				inline_keyboard: [ // web 
					[{text: 'Кнопка', web_app: {url: webAppUrl}}]
				]
			}})}
  
});