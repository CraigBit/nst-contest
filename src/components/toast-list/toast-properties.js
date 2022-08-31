import checkIcon from '../../img/toast/check.svg';
import errorIcon from '../../img/toast/error.svg';
import infoIcon from '../../img/toast/info.svg';
import warningIcon from '../../img/toast/warning.svg';

export const TOAST_PROPERTIES = [
  {
    title: 'удалено',
    message: 'Запись удалена',
    backgroundColor: '#5cb85c',
    icon: checkIcon,
  },
  {
    title: 'добавлено',
    message: 'Запись добавлена',
    backgroundColor: '#5cb85c',
    icon: infoIcon,
  },
  {
    title: 'отредактировано',
    message: 'Запись изменена',
    backgroundColor: '#5cb85c',
    icon: infoIcon,
  },
  {
    title: 'ошибка загрузки',
    message: 'Ошибка загрузки',
    backgroundColor: '#d9534f',
    icon: errorIcon,
  },
  {
    title: 'ошибка удаления',
    message: 'Ошибка удаления',
    backgroundColor: '#d9534f',
    icon: errorIcon,
  },
  {
    title: 'ошибка отправки',
    message: 'Ошибка отправки данных',
    backgroundColor: '#d9534f',
    icon: warningIcon,
  },
  {
    title: 'ошибка редактирования',
    message: 'Ошибка редактирования',
    backgroundColor: '#d9534f',
    icon: warningIcon,
  },
];
