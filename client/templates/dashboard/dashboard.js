Template.dashboard.rendered = function() {

};



Template.dashboard.events({
  'click #deleteItem': function(event, template){
    Items.remove(this._id);
    toast('Item Removed!', 4000);

  }
});
