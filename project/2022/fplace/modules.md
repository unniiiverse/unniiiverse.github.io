# Документация по макету и работе с UV модулями.

Авто-обновление страницы через browser-sync (плагин в vs code работает не корректно) <br>
```browser-sync start --server --files "**/**.*"```

## UV-tabs

UV модуль табов. **ОЖИДАЕТ РЕФАКТОРИНГ ARIA-АТРИБУТОВ**
Инициализация модуля через JS ```UVTabsModule();```

```
<div class="uv-tabs">
    <ul class="uv-tabs-list">
        <li class="uv-tabs_item"><button class="uv-tabs_btn uv-tabs_btn-active"
                data-uv-tabs-path="TAB1">TAB</button></li>
        <li class="uv-tabs_item"><button class="uv-tabs_btn" data-uv-tabs-path="TAB2">TAB</button></li>
        <li class="uv-tabs_item"><button class="uv-tabs_btn" data-uv-tabs-path="TAB3">TAB</button></li>
    </ul>
    <div class="uv-tabs_content-container">
        <div class="uv-tabs_content uv-tabs_content-active" data-uv-tabs-target="TAB1">1 CONTENT</div>
        <div class="uv-tabs_content" data-uv-tabs-target="TAB2">2 CONTENT</div>
        <div class="uv-tabs_content" data-uv-tabs-target="TAB3">3 CONTENT</div>
    </div>
</div>
```

## UV-Cards

UV модуль сетки карточек построеной на FLEX и GRID.
Модуль сразу вшит в сборку, но его так же можно отключить в главном файле стилей **scss/style.scss**

**FLEX**
```
<div class="uv-cards-flex">
    <div class="uv-card">
        
    </div>
</div>
```

**GRID**
```
<div class="uv-cards-grid">
    <div class="uv-card">
        
    </div>
</div>
```

## UV-Accordion

UV модуль аккордеона. **ОЖИДАЕТ РЕФАКТОРИНГ ARIA-АТРИБУТОВ**
Инициализация модуля через JS: ```UVAccordionModule();```

```
<ul class="uv-accordion-list">
    <li class="uv-accordion">
        <button class="uv-accordion_control" aria-expanded="false">
            <span class="uv-accordion_title">title</span>
            <svg class="uv-accordion_icon" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M13 26C10.4288 26 7.91543 25.2376 5.77759 23.8091C3.63975 22.3807 1.97351 20.3503 0.989572 17.9749C0.0056327 15.5995 -0.251811 12.9856 0.249797 10.4638C0.751405 7.94208 1.98953 5.6257 3.80762 3.80762C5.6257 1.98953 7.94208 0.751405 10.4638 0.249797C12.9856 -0.251811 15.5995 0.0056327 17.9749 0.989572C20.3503 1.97351 22.3807 3.63975 23.8091 5.77759C25.2376 7.91543 26 10.4288 26 13C26 16.4478 24.6304 19.7544 22.1924 22.1924C19.7544 24.6304 16.4478 26 13 26V26ZM13 2.00001C10.8244 2.00001 8.69767 2.64514 6.88873 3.85384C5.07979 5.06254 3.66989 6.7805 2.83733 8.79049C2.00477 10.8005 1.78693 13.0122 2.21137 15.146C2.63581 17.2798 3.68345 19.2398 5.22183 20.7782C6.76021 22.3166 8.72022 23.3642 10.854 23.7886C12.9878 24.2131 15.1995 23.9952 17.2095 23.1627C19.2195 22.3301 20.9375 20.9202 22.1462 19.1113C23.3549 17.3023 24 15.1756 24 13C24 10.0826 22.8411 7.28473 20.7782 5.22183C18.7153 3.15893 15.9174 2.00001 13 2.00001Z"
                        fill="black" />
                <path
                    d="M13 20C12.7348 20 12.4804 19.8946 12.2929 19.7071C12.1054 19.5196 12 19.2652 12 19V7C12 6.73478 12.1054 6.48043 12.2929 6.29289C12.4804 6.10536 12.7348 6 13 6C13.2652 6 13.5196 6.10536 13.7071 6.29289C13.8946 6.48043 14 6.73478 14 7V19C14 19.2652 13.8946 19.5196 13.7071 19.7071C13.5196 19.8946 13.2652 20 13 20Z"
                        fill="black" />
                <path
                    d="M19 14H7C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13C6 12.7348 6.10536 12.4804 6.29289 12.2929C6.48043 12.1054 6.73478 12 7 12H19C19.2652 12 19.5196 12.1054 19.7071 12.2929C19.8946 12.4804 20 12.7348 20 13C20 13.2652 19.8946 13.5196 19.7071 13.7071C19.5196 13.8946 19.2652 14 19 14Z"
                        fill="black" />
                </svg>
        </button>
        <div class="uv-accordion_content" aria-hidden="true">

        </div>
    </li>
</ul>
```

## Preloader 

Модуль preloader`а.
Для инициализации в JS, необходимо раскомментировать ```window.addEventListener```

```
<div id="preloader" style="background-color: #333;">
    <div class="wyre-cards" style="background-color: #333;">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
    </div>
</div>
```

## UV-Popup

UV модуль попапа.
Инициальзация модуля через JS: ```UVPopupModule();```

```
<div class="uv-popup" data-uv-popup>
    <div class="uv-popup_card" data-uv-popup-id="TARGET"aria-hidden="true">
        <div class="uv-popup_top">
            <strong class="uv-popup_title">Name</strong>
            <button aria-label="Закрыть <ИНФО> попап?" data-uv-popup-close>
                <svg data-uv-popup-close width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path data-uv-popup-close
                            d="M1.06663 18.9334C1.33329 19.2 1.59996 19.3334 1.99996 19.3334C2.39996 19.3334 2.66663 19.2 2.93329 18.9334L9.99996 11.8667L17.0666 18.9334C17.3333 19.2 17.7333 19.3334 18 19.3334C18.2666 19.3334 18.6666 19.2 18.9333 18.9334C19.4666 18.4 19.4666 17.6 18.9333 17.0667L11.8666 10L18.9333 2.93335C19.4666 2.40002 19.4666 1.60002 18.9333 1.06669C18.4 0.533354 17.6 0.533354 17.0666 1.06669L9.99996 8.13335L2.93329 1.06669C2.39996 0.533354 1.59996 0.533354 1.06663 1.06669C0.533293 1.60002 0.533293 2.40002 1.06663 2.93335L8.13329 10L1.06663 17.0667C0.533293 17.6 0.533293 18.4 1.06663 18.9334Z"
                            fill="#808080" />
                    </svg>
            </button>
        </div>
        <!-- CONTAINER -->
    </div>
</div>
<button data-uv-popup-target="TARGET" class="uv-popup_trigger" aria-label="Открыть <ИНФО> попап?"></button>
```

## UV-Burger

UV модуль бургер-меню.
Инициализация через JS: ```UVBurgerModule('<РЕЖИМ>')``` <br> <br>
Доступные режимы работы: <br>
**top** - открытие меню сверху. <br>
**bottom** - открытие меню снизу. <br>
**left** - открытие меню слева. <br>
**right** - открытие меню справа. <br>
**<\пустая строка>** - обычное появление меню. <br>

```
<div class="uv-burger">
    <button class="uv-burger_button" aria-expanded="false" aria-label="Открыть бургер меню">
        <svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="uv-burger_svg">
            <rect y="00" rx="1.5" class="uv-burger_svg--top" />
            <rect y="11" rx="1.5" class="uv-burger_svg--center" />
            <rect y="22"  rx="1.5" class="uv-burger_svg--bottom" />
        </svg>
    </button>
    <div class="uv-burger_menu" aria-hidden="true" aria-label="Бургер меню">
        <div class="uv-menu_wrapper">
        </div>
    </div>
</div>
```

unniiiverse © 2022

<br><br> *unniiiverse © 2022 <br >версия макета **1.1** выпуск от **06/22/2022***