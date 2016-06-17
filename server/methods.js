Meteor.methods({
  toggleAdmin(id) {
      if (Roles.userIsInRole(id, 'admin')) {
          Roles.removeUsersFromRoles(id, 'admin');
      } else {
          Roles.addUsersToRoles(id, 'admin');
      }
  },
  sendMessage: function (messageText) {
    /* add authentication here */

    Messages.insert({
      messageText: messageText,
      createdAt: new Date(),
      username: "anonymous"
    });
  }
})
