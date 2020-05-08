// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const env = {
  production: false,
  apiUrlHttp: 'http://remote-control-server-node.herokuapp.com:80',
  apiUrlWs: 'ws://remote-control-server-node.herokuapp.com:80'
  // apiUrlHttp: 'http://192.168.0.102:49150',
  // apiUrlWs: 'ws://192.168.0.102:49150',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
