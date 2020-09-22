import AbstractComponent from "./abstract-component.js";

const createWidgetTemplate = (startValue, minValue, maxValue) => {
  return (
    `<section class="page-main__widget-section widget-section">
      <button class="widget-section__controll widget-section__controll--reduce">−</button>
      <label class="visually-hidden">Введите число</label>
      <input class="widget-section__input" type="number" min="${minValue}" max="${maxValue}" value="${startValue}">
      <button class="widget-section__controll widget-section__controll--enlarge">+</button>
    </section>`
  );
};

export default class WidgetComponent extends AbstractComponent {
  constructor(startValue, minValue, maxValue) {
    super();
    this._currentValue = startValue;
    this._minValue = minValue;
    this._maxValue = maxValue;
  }

  getTemplate() {
    return createWidgetTemplate(this._currentValue, this._minValue, this._maxValue, this._handler);
  }

  getInput() {
    return this.getElement().querySelector(`.widget-section__input`);
  }

  setClickHandler(handler) {
    this.getElement().querySelector(`.widget-section__input`).addEventListener(`wheel`, function (evt) {handler(evt)});
    this.getElement().querySelector(`.widget-section__input`).addEventListener(`change`, function (evt) {handler(evt)});
    this.getElement().querySelector(`.widget-section__controll--reduce`).addEventListener(`click`, function (evt) {handler(evt, false)});
    this.getElement().querySelector(`.widget-section__controll--enlarge`).addEventListener(`click`, function (evt) {handler(evt, true)});
  }
}
