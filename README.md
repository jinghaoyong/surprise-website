# SurpriseWebsite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

to push code & deploy  to firebase : 
1> firebase login (for device which didn;t sign in yet)
2> firebase init , `dist`, options: outputpath : "dist" << careful , need to be correct,
3> ng build
4> see under the /dist is whether got the files like assets 3rdpartylicenses.txt , css js file, if under another inside folder like browser, then cut them to under /dist in order to work
5> firebase deploy