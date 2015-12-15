import Ember from 'ember';
import DS from 'ember-data';

const APIKEY = 'f27c7fe2670bd4d110558d5003c93194'; //Extract

export default DS.JSONAPIAdapter.extend({
  query(store, type, query) {
    const URI = 'http://api.openweathermap.org/data/2.5/find?q=' + query.name + '&APPID=' + APIKEY;
    return Ember.$.get(URI);
  }
});
