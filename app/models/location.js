import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  country: DS.attr(),
  flag: DS.attr(),
  description: DS.attr(),
  main: DS.attr(),
  icon: DS.attr()
});
