import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
    
        clickAction(search) {
        //this.set('prop1', 'cake');
        this.transitionToRoute('index', { queryParams: { s: search} });
      }
    }
});
