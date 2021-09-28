import { HIDE_ALERT, SHOW_ALERT } from "./types";

const initialState = {
  isVisible: false,
  alert: {
    text: '',
    type: 'success'
  }
};

const handlers = {
  [SHOW_ALERT]: (state, action) => ({isVisible: true, alert: {...action.payload} }),
  [HIDE_ALERT]: (state, action) => ({isVisible: false}),
  DEFAULT: state => state
}

export const alertReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
} 