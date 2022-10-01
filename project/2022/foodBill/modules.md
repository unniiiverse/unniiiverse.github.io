# UV Burger menu 
## Документация <br>

**HTML классы** <br>
```#uv-burger-body-locker``` - Обязательный ID у body-тэга. <br>
``<button class="uv-burger-btn"><span></span></button>`` -  Кнопка меню-бургера.<br>
```<div class="uv-burger-menu" id="uv-burger-menu"><button class="uv-burger-btn uv-burger-btn-transition"><span></span></button><div class="uv-burger-menu-wrapper"></div></div>``` -  Меню-бургер<br>

**SCSS конфигурация** <br>
```$uv-burger-color: value;``` - Параметр определяющий цвет кнопки меню-бургера. <br>
```$uv-burger-menu-openFrom: value;``` - Параметр определяющий с какой стороны появится меню-бургер. Принимает следующие параметры - **< -100% | 100% >** <br>
```$uv-burger-btn-showBreakpoint: value;``` - Параметр определяющий при каком разрешении экрана будет появлятся меню-бургер.<br>
```$uv-burger-btn-menuX: value;``` - Параметр определяющий горизонтальное положение кнопки бургер-меню в бургер-меню.<br>
```$uv-burger-btn-menuY: value;``` - Параметр определяющий вертикальное положение кнопки бургер-меню в бургер-меню.<br> <br>

```
<body class="" id="uv-burger-body-locker">
    <button class="uv-burger-btn">
        <span></span>
    </button>

    <div class="uv-burger-menu" id="uv-burger-menu">
        <button class="uv-burger-btn uv-burger-btn-transition">
            <span></span>
        </button>
        <div class="uv-burger-menu-wrapper">
            
        </div>
    </div>
</body>
```

unniiiverse © 2022

# UV Cards container
## Документация <br>

**HTML классы** <br>
```.uv-card-container-flex``` - Класс родителя flex-блока карточек. <br>
```.uv-card-container-grid``` - Класс родителя grid-блока карточек. <br>
```.uv-card``` - Класс карточки. <br>

**SCSS конфигурация** <br>
```$uv-card-margin: value;``` - Параметр отвечающий за отступ карточек. <br>
```$uv-card-minWidth: value;``` - Параметр отвечающий за минимальную ширину карточки. <br>
```$uv-card-textAlign: value;``` - Параметр отвечающий за позиционирование текста в карточках. Значения - **center right left** <br> <br>

```
<div class="uv-card-container-">
    <div class="uv-card">
    
    </div>
</div>
```

unniiiverse © 2022