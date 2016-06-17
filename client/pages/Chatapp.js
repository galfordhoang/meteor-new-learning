Meteor.subscribe("messages");

Template.body.helpers({
 recentMessages: function () {
   return Messages.find({}, {sort: {createdAt: 1}});
 },
 /* unread message helper */
});
