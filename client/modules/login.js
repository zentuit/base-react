let login = ( options ) => {
   console.log("in login with options: ", options);
   _validate( options.form );
};

let _validate = ( form ) => {
   $( form ).validate( validation() );
};

let validation = () => {
   return {
      rules: {
         emailAddress: {
            required: true,
            email: true
         },
         password: {
            required: true
         }
      },
      messages: {
         emailAddress: {
            required: 'Need an email address here.',
            email: 'Is this email address legit?'
         },
         password: {
            required: 'Need a password here.'
         }
      },
      submitHandler() { _handleLogin(); }
   };
};

let _handleLogin = () => {
   let email    = $( '[name="emailAddress"]' ).val(),
         password = $( '[name="password"]' ).val();

   console.log("in _handleLogin: email: ", email, " :: password: ", password);

   Meteor.loginWithPassword( email, password, ( error ) => {
      console.log("After call to meteor: error: ",error);
      if ( error ) {
         Bert.alert( error.reason, 'warning' );
      } else {
         Bert.alert( 'Logged in!', 'success' );
      }
   });
};

Modules.client.login = login;
