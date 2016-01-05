let startup = () => {
   _setEnvironmentVariables();
   _setBrowserPolicies();
   _generateAccounts();
};

let _setEnvironmentVariables = () => Modules.server.setEnvironmentVariables();

let _setBrowserPolicies = () => {};

let _generateAccounts = () => Modules.server.generateAccounts();

Modules.server.startup = startup;
