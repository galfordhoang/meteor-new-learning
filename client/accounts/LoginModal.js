import { Session } from 'meteor/session'

Template.LoginModal.events({
  'click .close-login': function(){
    Session.set('nav-toggle','');
  }
});
