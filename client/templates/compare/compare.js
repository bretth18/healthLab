
Template.compare.helpers({
  create: function(){

  },
  rendered: function(){
    //call server-side function to grab api
    //TODO: Pass client side inputs to function
    Meteor.server({
      getDrugJSON();
    });


  },
  destroyed: function(){

  }
});

Template.name.events({
  "click #submit": function(event, template){
    var drug1 = $.(#drug1);
    var drug2 = $.(#drug2);

    

  }
});
