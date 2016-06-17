var myLogoutFunc = function() {
  FlowRouter.go('/');
}

AccountsTemplates.configure({
  confirmPassword: false,
  privacyUrl: 'privacy',
  termsUrl: 'terms-of-use',
  onLogoutHook: myLogoutFunc,
});

AccountsTemplates.addFields([
    {
      _id: 'firstName',
      type: 'text',
      displayName: 'First Name',
      required: true,
      re: /(?=.*[a-z])(?=.*[A-Z])/,
      errStr: '1 lowercase and 1 uppercase letter required',
    },
    {
      _id: 'profession',
      type: 'select',
      displayName: 'Profession',
      select: [
        {
          text: 'Developer',
          value: 'developer'
        }, {
          text: 'Designer',
          value: 'designer'
        }, {
          text: 'Teamleader',
          value: 'teamleader'
        }, {
          text: 'Other',
          value: 'other'
        }
      ]
    }
]);
