import computed from 'ember-addons/ember-computed-decorators';

const ACTIONS = ['delete', 'edit', 'none'];
export default Ember.Component.extend({
  tagName: '',
  postAction: 'delete',

  @computed
  penaltyActions() {
    return ACTIONS.map(id => {
      return { id, name: I18n.t(`admin.user.penalty_post_${id}`) };
    });
  },

  editing: Ember.computed.equal('postAction', 'edit'),

  actions: {
    onSelect() {
      console.log('xysz');
    }
  }
});
