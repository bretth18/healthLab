import { Meteor } from 'meteor/meteor';

if(Meteor.isServer){
  console.log(Meteor.users);
  Meteor.methods({
    emailVerification:function(userInfo){

      console.log(userInfo);
      console.log('server side method reached');
      Accounts.sendVerificationEmail(userId, userInfo.email);
    }
  });
}
