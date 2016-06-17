var postSignUp = function(userId, info) {
  Roles.addUsersToRoles(userId, ['normal-user', info.profile.profession])
}

AccountsTemplates.configure({
  postSignUpHook: postSignUp
});
