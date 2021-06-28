# Important note

In order to run this project on your device without any problem, you need to somehow create or use a server where you save and fetch recipes from. If you would like to use your firebase url as your backend like I did, you just need to create a file with the name 'backend.ts' inside the shared folder and in this file add the expression bellow then write your firebase link with '.json' end-point inside the single qoutation mark:

export const myFirebaseUrl = '';


# ShoppingApp

This project is an E-commerce web application where you can create and optimize your own recipes and add the ingredients in to your shopping list, edit and delete it all in one place.
It was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
