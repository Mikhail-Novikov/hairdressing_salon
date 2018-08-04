# Jade-Sass-Gulp Template
**Шаблон проекта, основанный на Jade, Sass, Gulp, Foundation Grid**

## Состав проекта
1. Jade (_doctype, _index)
2. Gulp (+plugins)
3. Sass (+mixins, variables, basic styles)
4. Modernizr.js (#2.8.2)
5. Normalize-css
6. jQuery
7. Foundation Grid Styles (integrated to _doctype.jade)
8. Default Favicons
9. Old browsers support ([if IE]): html5shiv, es5-shim, respond, jquery 1.12.0

## Инструкция по установке, настройке и использованию
```
1. git clone https://github.com/sunndeath/Jade-Sass-Gulp-Template.git
2. cd !$
3. npm i
4. bower i
5. gulp
6. delete .git
7. настройка сборки, установка дополнительных плагинов и библиотек:
    - css-файлы установленных в dev/plugins/ компонентов подключаются непосредственно в main.scss для корректной конкатенации и компиляции в prod/css/main.min.css;
    - js-файлы установленных в dev/plugins/ компонентов необходимо скопировать в dev/plugins/install для конкатенации и компиляции в prod/js/plugins.main.js, либо подключать их руками при необходимости, если компонент конфликтует или его необходимо подключать отдельно, опционально (для удаления компонента из plugins.min.js необходимо проверить корректность удаления кода самостоятельно и удалить руками при необходимости);
    - модификация favicon: меняются и подключаются непосредственно "руками" в prod/images/favicon/;
    - добавление шрифтов: подключаются непосредственно "руками" в prod/ и main.scss, либо через dev/sass/main.scss, fonts.scss, опционально;
    - создание спрайтов: положить картинки в dev/images, набрать в консоли команду gulp sprite и получить dev/sass/sprite.scss и prod/images/sprite.png.
```

## Структура проекта
```
├── dev/                       # Каталог разработки
│   ├── jade/                  # Индексные jade-файлы
│   │   └──_common/            # Подключаемые jade-файлы
│   ├── sass/                  # Главный sass-файл стилей
│   │   └──_common/            # Подключаемые sass-файлы
│   ├── images/                # PNG-иконки для генерации растрового спрайта
│   ├── js/                    # Собственные js-файлы
│   ├── plugins/               # Установленные компоненты для продакшена
│   │   └── intall/            # Js-файлы установленных компонентов, необходимые на продакшене
│   │
├── prod/                      # Каталог продакшена
│   ├── css/                   # Минифицированные и сконкатенированные стили
│   ├── fonts/                 # Шрифты
│   ├── images/                # Спрайты, картинки, фоны, favicon
│   ├── js/              	   # Все js-файлы
│   │   ├── main.min.js        # Минифицированные и сконкатенированные собственные js-файлы
│   │   └── plugins.min.js     # Минифицированные и сконкатенированные js-файлы установленных библиотек
└── └── index.html             # Индексный файл
```
