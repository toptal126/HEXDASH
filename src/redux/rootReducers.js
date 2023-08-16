import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import authReducer from './authentication/reducers';
import Calender from './calendar/reducers';
import cartData from './cart/reducers';
import { chatReducer, groupChatReducer, SingleChatGroupReducer, SingleChatReducer } from './chat/reducers';
import Contact from './contact/reducers';
import { axiosCrudReducer, axiosSingleCrudReducer } from './crud/axios/reducers';
import dataTable from './data-filter/reducers';
import { emailReducer, SingleEmailReducer } from './email/reducers';
import FileManager from './fileManager/reducers';
import firebaseAuth from './firebase/auth/reducers';
import { fsCrudReducer, fsSingleCrudReducer } from './firebase/firestore/reducers';
import galleryReducer from './gallary/reducers';
import { headerSearchReducer } from './headerSearch/reducers';
import jobs from './jobs/reducers';
import kanbanBoardReducer from './kanban/reducers';
import { readMessageReducer } from './message/reducers';
import Note from './note/reducers';
import { readNotificationReducer } from './notification/reducers';
import orderReducer from './orders/reducers';
import { productReducer, SingleProductReducer } from './product/reducers';
import Profile from './profile/reducers';
import { projectReducer, SingleProjectReducer } from './project/reducers';
import { sellersReducer } from './sellers/reducers';
import tickets from './supportTickets/reducers';
import Task from './task/reducers';
import { teamReducer } from './team/reducers';
import ChangeLayoutMode from './themeLayout/reducers';
import themeUsersReducer from './themeUsers/reducers';
import Todo from './todo/reducers';
import { userGroupReducer, userReducer } from './users/reducers';

const rootReducers = combineReducers({
  fb: firebaseReducer,
  fs: firestoreReducer,
  crud: fsCrudReducer,
  singleCrud: fsSingleCrudReducer,
  firebaseAuth,
  themeUsers: themeUsersReducer,
  headerSearchData: headerSearchReducer,
  message: readMessageReducer,
  notification: readNotificationReducer,
  orders: orderReducer,
  sellers: sellersReducer,
  users: userReducer,
  userGroup: userGroupReducer,
  team: teamReducer,
  auth: authReducer,
  gallery: galleryReducer,
  email: emailReducer,
  emailSingle: SingleEmailReducer,
  products: productReducer,
  product: SingleProductReducer,
  chatSingle: SingleChatReducer,
  chatSingleGroup: SingleChatGroupReducer,
  chat: chatReducer,
  groupChat: groupChatReducer,
  projects: projectReducer,
  project: SingleProjectReducer,
  ChangeLayoutMode,
  cart: cartData,
  Todo,
  Note,
  AxiosCrud: axiosCrudReducer,
  Task,
  KanbanBoard: kanbanBoardReducer,
  Contact,
  Profile,
  Calender,
  FileManager,
  tickets,
  jobs,
  dataTable,
  SingleAxiosCrud: axiosSingleCrudReducer,
});

export default rootReducers;
