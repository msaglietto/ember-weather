import {
  moduleForComponent, test
}
from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('search-box', 'Integration | Component | search box', {
  integration: true
});

test('it renders and input with a button', function(assert) {
  this.render(hbs `{{search-box}}`);

  assert.equal(this.$('input').length, 1);
  assert.equal(this.$('button').length, 1);
});

test('it allows to set a placeholder', function(assert) {
  this.render(hbs `{{search-box placeholder="Something"}}`);

  assert.equal(this.$('input').attr('placeholder'), 'Something');
});

test('it send an action on submit with the input value', function(assert) {
  assert.expect(1);

  this.render(hbs `{{search-box onSearch=(action testAction)}}`);

  this.set('testAction', (val) => {
    assert.equal(val, 'Test Search', 'Submitted value is passed to external action');
  });

  this.$('input').val('Test Search');
  this.$('input').change();

  this.$('button').click();
});
