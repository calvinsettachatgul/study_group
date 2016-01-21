### 01/20/2016 1:15 PM

## Coded out the concept over view found at the getting started Angular docs

### Concepts
#### Modules
  *  These are the building blocks for Dependency Injection and making an Angular app more modular

  *  Define a module with:
  >  angular.module('module_name', [dependency_moddule1, dependency_module2]);

#### Controllers

  *  Attaching state and behavior to a module these are properties and methods that are attached to the module's scope

  >  .controller('controller_name', controller_constructor);

#### controller constructor is where you define your state and functions

  >  var ctrl = function(){
  >  this.property1 = "some data";
  >
  >  this.function1 = function(){
  >     console.log("this is a function")
  >  }
  > }

#### Directives

  >  ng-app

  *  defines the scope of the angular app within the DOM

  >  ng-init

  *  can instatiate a model

  >  ng-model

  *  provides areas in the template where data can be altered


#### Expressions
  *  This is where the state/properties of modules can be rendered with the curly brackets
  *   key benefits of Angular is that the rendering happens with 2 way data binding.

  >  {{ expresion }}

#### Filters

  *  A way to do simple formatting of the data rendered

  *  currency format etc

  > {{ expression | filter }}
