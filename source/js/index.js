import WidgetController from "./widget-controller";

const START_VALUE = 10;
const MIN_VALUE = -10;
const MAX_VALUE = 25;

const siteMainElement = document.querySelector(`main`);
const widgetController = new WidgetController(siteMainElement, START_VALUE, MIN_VALUE, MAX_VALUE);
widgetController.render();
