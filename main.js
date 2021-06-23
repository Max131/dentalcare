'use strict';

const $body = document.body;
const $menuBtn = document.querySelector('#menubtn');
const $menuLbl = document.querySelector('.menulbl');


document.addEventListener('DOMContentLoaded', () => {
	$body.addEventListener('click', e => {
		const compare = e.target !== $menuBtn && e.target !== $menuLbl;
		compare && ($menuBtn.checked = false);
	});
});
