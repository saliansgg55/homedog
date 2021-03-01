// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
/*
export const environment = {
  production: false
};*/

export const environment = {
  production: false,
   //urlApiGateway:'http://localhost:8090/v1/',
    //cliente:"cliente_test",
    //secret:"secret_test",
   urlApiGateway:'http://54.207.115.134:8090/v1/',
   cliente:"dev2020Winners",
   ssecret:"dev2020Winners",
   tipo:"ventas",
  tokenKey:"U8",
  refreshToken:"U8R"

  
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
