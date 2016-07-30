# Angular 2 (RC4) Redux and Component Router Demo

This demo illustrates usage of the new (RC4) Component Router in a hypothetical application that uses a manually-coded, Redux-style model.  The architecture is Flux-style in that the only interactions allowed by Compoenents with the outside world are action dispatch and (Reactive) subscription to model updates.  The model is implemented by hand to illustrate some of the concepts associated with Redux.  There is no formal dispatcher in the application and there are no formal reducers.  Immutability and state reduction are handled inside the model.  This allows considerable flexibility to experiment with model internals.

A notable feature of this approach is the request of data by various components.  A more traditional MVVM architecture would provide services to fetch data and then have Components declare required services as dependencies.  Services then need to be mocked during early testing.  With a Flux-style architecture, Components dispatch an action requesting data.  A model subscriber acts upon the data returned by the Observable.  While a service may be involved, most Components have only one dependency - the global store.  Only the global store need be mocked during testing, which makes the testing process easier from the beginning.

As a result of simplified dependencies, there is a lot of common Component functionality that can be abstracted away in a base class. 

Unlike some of the prior demos where the template and CSS were in the same file as the Component, everything is separated out into separate .html and .css files in this demo so that regular viewers of these demos can compare the two approaches.

The Angular CLI was used to scaffold the project as well as build/serve the demo.  Bootstrap was used for layout and a navbar.

And, if you like The Three Stooges, then you will really enjoy this demo :)


Some of the demo features include

```sh
- Provide an illustration of the basics of the Flux architecture (minus a formal dispatcher)
- Illustrate how to use the Component router in a setting that is very similar to actual applications
- The entire demo is purely Reactive
- Illustrate how to bind to 'innerHtml' and img 'src' attributes
```

Author:  Jim Armstrong - [The Algorithmist]

@algorithmist

theAlgorithmist [at] gmail [dot] com

Angular 2: RC4

Angular CLI: 1.0 Beta 10

## Installation

Installation involves all the usual suspects

  - npm, typings, and Angular CLI installed globally
  - Clone the repository
  - npm install
  - get coffee (this is the most important step)

## Goals

The goals of this demo are 

* Illustrate usage of (RC4) Component router in an actual application setting
* Add to the body of knowledge on how to create and run Angular 2/Typescript applications
* Show how to implement a Redux-style model by hand 
* Illustrate the basics of a Flux-style architecture
* Pay homage to my favorite comedy series (The Three Stooges)
* Create an excuse for another cup of coffee

I hope that you find something instructive from the code and are interested in improving the demo in some way.

### Version
1.0.0

### Building and Running the demo

After installation, _ng-build_ and _ng-serve_ are your friends.  Build production or dev. as you see fit.  localhost:4200 to run the demo, at which point you should see

![Image of Three Stooges Demo]
(http://algorithmist.net/image/stooges.jpg)

Check out the router configuration in _app.routes.ts_

----
  // route configuration
  
  const routes: RouterConfig = [
  
    // map '/script' to the script component
    
    {
    
      path: 'script',
      
      component: ScriptComponent
      
    },
    
    // map '/history' to the history component
    
    {
    
      path: 'history',
      
      component: HistoryComponent
      
    },
    
    // map '/bios' to the bio component
    
    {
    
      path: 'bios',
      
      component: BiosComponent
      
    },
    
    // map bios children to the StoogeBio component
    
    {
    
      path: 'bios/:id',
      
      component: StoogeBioComponent
      
    },
    
    // map episodes to the Episodes component
    
    {
    
      path: 'episodes',
      
      component: EpisodesComponent
      
    },
    
    // map '/' to '/script', default route
    
    {
    
      path: '',
      
      redirectTo: '/script',
      
      pathMatch: 'full'
      
    },
    
  ];
  
----

Notice that the default path is mapped to localhost:4200/script.


The demo has been tested in late-model Chrome on a Mac. 


### Contributions

Contributions and coffee are highly encouraged as I believe the best demo is one that allows ample room for improvement. The navbar, for example, needs some additional work :)


Submit pull requests to theAlgorithmist [at] gmail [dot] com.


## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


License
----

Apache 2.0

**Free Software? Yeah, Homey plays that**

[//]: # (kudos http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[The Algorithmist]: <http://algorithmist.net>

