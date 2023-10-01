
Вопросы:
- при установке nanoid 4.0.0 который вызывается как ESM модуль вебпак видимо его преобразует в require и возникает ошибка.
Как отключить данное преобразование при компиляции?

Решено:
- почему не работают короткие адреса в import:
 import { Content } from './shared/Content' - не работает, нужно прописывать файл с расширением import { Content } from './shared/Content/Content.tsx'
 Решено: в webpackconfig 'tsx' было указано без "."
 правильная запись:
 resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },

Полезные команды:
- команда для генерации React кмпонента:
yo react-ts-component-dir <название папки компонента> <адрес папки> в которую положить папку с компонентом если не в текущую


Ссылки:
- https://www.reddit.com/prefs/apps страница своих приложений на reddit
- https://github.com/reddit-archive/reddit/wiki/ общая страница api reddit на github
- https://github.com/reddit-archive/reddit/wiki/OAuth2 инструкция авторизации
- https://www.reddit.com/dev/api/ описание api
-
