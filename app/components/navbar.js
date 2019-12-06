import Component from '@ember/component';

export default Component.extend({
    actions: {
        searchVideo(search){
        this.executeSearch(search)
        }
    }
});
