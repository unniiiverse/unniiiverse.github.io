// UVTabsModule(); // Табы
// UVAccordionModule(); // Аккордеон
// UVPopupModule(); // Попапы
UVBurgerModule('right'); // Бургер-меню. //* Режимы работы описаны в modules.md в корне проекта на строке 123.

"use strict"

//* Прелоадер
// window.addEventListener('DOMContentLoaded', () => {
//     document.querySelector('#preloader').style.opacity = 0;
//     document.querySelector('#preloader').style.visibility = 'hidden';
// })

//* ТЕМЫ
const html = document.documentElement;
if (html.hasAttribute('data-themeChange-disabled')) {
	html.classList.remove('theme-dark');
	html.classList.remove('theme-light');
	localStorage.removeItem('theme')
} else {
	const btn = document.querySelector('[data-theme-trigger]');

	if (btn != null) {
		function state(theme) {
			localStorage.setItem('theme', theme);
			html.className = theme;
		}
		state(localStorage.getItem('theme'));

		function toggleTheme() {
			if (localStorage.getItem('theme') == 'theme-dark') {
				state('theme-light');
			} else {
				state('theme-dark');
			}
		}

		btn.addEventListener('click', () => {
			toggleTheme()
		})
	}
}

function UVTabsModule() {
	const uvTabs = document.querySelector('.uv-tabs');
	const uvTabsBtn = document.querySelectorAll('.uv-tabs_btn');
	const uvTabsContent = document.querySelectorAll('.uv-tabs_content');

	if (uvTabs) {
		uvTabs.addEventListener('click', (e) => {
			if (e.target.classList.contains('uv-tabs_btn')) {
				const uvTabsPath = e.target.dataset.uvTabsPath;
				uvTabsHandler(uvTabsPath);
			}
		})
	}

	function uvTabsHandler(path) {
		uvTabsBtn.forEach(el => el.classList.remove('uv-tabs_btn-active'));
		document.querySelector(`[data-uv-tabs-path="${path}"]`).classList.add('uv-tabs_btn-active');

		uvTabsContent.forEach(el => el.classList.remove('uv-tabs_content-active'));
		document.querySelector(`[data-uv-tabs-target="${path}"]`).classList.add('uv-tabs_content-active');
	}
}

function UVAccordionModule() {
	const uvAccordions = document.querySelectorAll('.uv-accordion');
	console.log(uvAccordions)

	if (uvAccordions) {
		uvAccordions.forEach(el => {
			el.addEventListener('click', (e) => {
				const self = e.currentTarget;
				const uvControl = self.querySelector('.uv-accordion_control');
				const uvContent = self.querySelector('.uv-accordion_content');

				self.classList.toggle('uv-accordion-expanded');

				if (self.classList.contains('uv-accordion-expanded')) {
					uvControl.setAttribute('aria-expanded', true);
					uvContent.setAttribute('aria-hidden', false);
					uvContent.style.maxHeight = uvContent.scrollHeight + 'px';
				} else {
					uvControl.setAttribute('aria-expanded', false);
					uvContent.setAttribute('aria-hidden', true);
					uvContent.style.maxHeight = null;
				}
			})
		})
	}
}

function UVPopupModule() {
	const uvPopup = document.querySelector('.uv-popup');

	if (uvPopup.childElementCount != 0) {
		const uvBtns = document.querySelectorAll('.uv-popup_trigger');

		uvBtns.forEach(el => {
			el.addEventListener('click', e => {
				let path = e.currentTarget.getAttribute('data-uv-popup-target');

				uvPopup.querySelectorAll('uv-popup_card').forEach(el => el.classList.remove('uv-popup_card--active'))
				uvPopup.classList.add('uv-popup--active');

				let activeCard = document.querySelector(`[data-uv-popup-id="${path}"]`);
				activeCard.classList.add('uv-popup_card--active');
				activeCard.setAttribute('aria-hidden', false);

				window.addEventListener('click', e => {
					if (e.target.hasAttribute('data-uv-popup-close') || e.target.hasAttribute('data-uv-popup')) {
						uvPopup.classList.remove('uv-popup--active');
						activeCard.classList.remove('uv-popup_card--active');
						activeCard.setAttribute('aria-hidden', true);
					}
				})
			})
		})
	} else {
		throw new TypeError('Количество попапов = 0.')
	}
}

function UVBurgerModule(mode) {
    const html = document.documentElement;
    const button = document.querySelector('.uv-burger_button');
    const menu = document.querySelector('.uv-burger_menu');
    html.classList.add(`uv-burger--mode_${mode}`)

    button.addEventListener('click', () => {
        if (!html.classList.contains('uv-burger--active')) {
            html.classList.add('uv-burger--active');

            button.setAttribute('aria-expanded', true);
            button.setAttribute('aria-label', 'Закрыть меню');
            menu.setAttribute('aria-hidden', false);
        } else {
            html.classList.remove('uv-burger--active');

            button.setAttribute('aria-expanded', false);
            button.setAttribute('aria-label', 'Открыть меню');
            menu.setAttribute('aria-hidden', true);
        }
    })
}