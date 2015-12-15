import DS from 'ember-data';

export default DS.Model.extend({
  city: DS.attr(),
  today: DS.attr(),
  forecast: DS.attr()
});
