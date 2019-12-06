import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        submit() {
          this.transitionToRoute('index', { queryParams: { s: 'star' } });

        },
        /*update() {
          this.set('prop1', 'updated');
        }
        */
      }
});
