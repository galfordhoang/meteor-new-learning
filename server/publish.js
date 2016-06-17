Meteor.publish('allUsers', function() {
  if(Roles.userIsInRole(this.userId, 'admin')){
    return Meteor.users.find({});
  }
});

Meteor.publish("messages", function () {
  return Messages.find({}, {sort: {createdAt: -1}, limit: 5});
});
