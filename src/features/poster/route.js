// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  DefaultPage,
  Form,
} from './';

export default {
  path: 'poster',
  name: 'Poster',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
    { path: 'form', name: 'Form', component: Form },
  ],
};
