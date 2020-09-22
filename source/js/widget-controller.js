import WidgetComponent from "./widget-component";
import {RenderPosition, render, replace} from "./render";

export default class WidgetController {
  constructor(container, startValue, minValue, maxValue) {
    this._container = container;
    this._widgetComponent = null;

    this._minValue = minValue;
    this._maxValue = maxValue;
    this._currentValue = startValue;

    this._valueChangeHandler = this._valueChangeHandler.bind(this);
  }

  _valueChangeHandler(evt, props) {
    evt.preventDefault();

    if (evt.type === `wheel`) {
      if (evt.deltaY * -0.02 > 0) {
        this._currentValue++;
      } else {
        this._currentValue--;
      }
    }

    if (evt.type !== `wheel`) {
      switch (props) {
        case true:
          this._currentValue++;
          break;
        case false:
          this._currentValue--;
          break;
        default:
          this._currentValue = evt.target.value;
          if (evt.target.value >= this._maxValue) {
            this._currentValue = this._maxValue;
          }
          if (evt.target.value <= this._minValue) {
            this._currentValue = this._minValue;
          }
      }
    }

    if (this._currentValue > this._maxValue) {
      this._currentValue = this._maxValue;
    }
    if (this._currentValue < this._minValue) {
      this._currentValue = this._minValue;
    }

    this._widgetComponent.getInput().value = this._currentValue;
  }

  render() {
    const oldWidgetComponent = this._widgetComponent;
    this._widgetComponent = new WidgetComponent(this._currentValue, this._minValue, this._maxValue);

    if (oldWidgetComponent) {
      replace(this._widgetComponent, oldWidgetComponent);
      this._widgetComponent.setClickHandler(this._valueChangeHandler);
    } else {
      render(this._container, this._widgetComponent, RenderPosition.BEFOREEND);
      this._widgetComponent.setClickHandler(this._valueChangeHandler);
    }
  }
}
