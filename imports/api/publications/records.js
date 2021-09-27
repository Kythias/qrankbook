import { Meteor } from 'meteor/meteor';
import Records from '../collections/Records.js';

Meteor.publish('records', function () {
  return Records.find();
});
