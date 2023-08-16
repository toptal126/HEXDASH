import moment from 'moment';
import actions from './actions';

const events = [
  {
    title: 'Family Events',
    start: moment().add(1, 'days').format('MM/DD/YYYY/LT'),
    end: moment().add(1, 'days').add(4, 'hours').format('MM/DD/YYYY/LT'),
    id: 1,
    label: 'success',
    type: 'event',
    haxColor: '5840FF',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
  },
  {
    title: 'Product Launch',
    start: moment().subtract(1, 'hours').format('MM/DD/YYYY/LT'),
    end: moment(moment().add(3, 'hours')).format('MM/DD/YYYY/LT'),
    id: 2,
    label: 'primary',
    type: 'reminder',
    haxColor: 'FB3586',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
  },
  {
    title: 'Team Meeting',
    id: 3,
    start: moment(moment().subtract(2, 'days').subtract(5, 'hours')).format('MM/DD/YYYY/LT'),
    end: moment(moment().subtract(2, 'days').add(2, 'hours')).format('MM/DD/YYYY/LT'),
    label: 'secondary',
    type: 'event',
    haxColor: '01B81A',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
  },
  {
    title: 'UI/UX Tasks',
    id: 4,
    start: moment(moment().subtract(3, 'days')).format('MM/DD/YYYY/LT'),
    end: moment(moment().subtract(3, 'days').add(3, 'hours')).format('MM/DD/YYYY/LT'),
    label: 'info',
    type: 'event',
    haxColor: '00AAFF',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
  },
  {
    title: 'Project Update',
    id: 5,
    start: moment(moment().subtract(5, 'days')).format('MM/DD/YYYY/LT'),
    end: moment(moment().subtract(5, 'days')).format('MM/DD/YYYY/LT'),
    label: 'warning',
    type: 'event',
    haxColor: 'FA8B0C',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
  },
];

const initialState = {
  events,
  loading: false,
  error: null,
  eventVisible: false,
};

const {
  CALENDAR_READ_BEGIN,
  CALENDAR_READ_SUCCESS,
  CALENDAR_READ_ERR,
  EVENT_VISIBLE_BEGIN,
  EVENT_VISIBLE_SUCCESS,
  EVENT_VISIBLE_ERR,
  CALENDAR_STAR_UPDATE_BEGIN,
  CALENDAR_STAR_UPDATE_SUCCESS,
  CALENDAR_STAR_UPDATE_ERR,
  CALENDAR_LABEL_UPDATE_BEGIN,
  CALENDAR_LABEL_UPDATE_SUCCESS,
  CALENDAR_LABEL_UPDATE_ERR,
} = actions;

const CalenderReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case CALENDAR_STAR_UPDATE_BEGIN:
      return {
        ...state,
        sLoading: true,
      };
    case CALENDAR_STAR_UPDATE_SUCCESS:
      return {
        ...state,
        events: data,
        sLoading: false,
      };
    case CALENDAR_STAR_UPDATE_ERR:
      return {
        ...state,
        error: err,
        sLoading: false,
      };
    case CALENDAR_LABEL_UPDATE_BEGIN:
      return {
        ...state,
        sLoading: true,
      };
    case CALENDAR_LABEL_UPDATE_SUCCESS:
      return {
        ...state,
        events: data,
        sLoading: false,
      };
    case CALENDAR_LABEL_UPDATE_ERR:
      return {
        ...state,
        error: err,
        sLoading: false,
      };
    case CALENDAR_READ_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case CALENDAR_READ_SUCCESS:
      return {
        ...state,
        events: data,
        loading: false,
      };
    case CALENDAR_READ_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case EVENT_VISIBLE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case EVENT_VISIBLE_SUCCESS:
      return {
        ...state,
        eventVisible: data,
        loading: false,
      };
    case EVENT_VISIBLE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export default CalenderReducer;
