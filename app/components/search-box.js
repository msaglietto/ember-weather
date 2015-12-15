import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  submit(e) {
    e.preventDefault();
    this.sendAction('onSearch', this.get('query'));
  }
});
