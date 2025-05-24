import './styles/_fonts.scss';
import './styles/_general.scss';
import './styles/_media.scss'
import './styles/header.scss';
import './styles/slider.scss';
import './styles/books.scss';
import { renderHeaderForm } from './components/HeaderForm.js';
import { renderSliderForm } from './components/SliderForm.js';
import { renderContentForm } from './components/ContentForm.js';

const app = document.getElementById('app');
/*создаем хэдер*/
app.appendChild(renderHeaderForm())

/*ниже хэдера создаем слайдер*/
app.appendChild(renderSliderForm())

/*ниже слайдера делаем поле дня категорий и книг каждой категории*/
app.appendChild(renderContentForm())

