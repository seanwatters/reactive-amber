<p align="center">
    <img src="https://camo.githubusercontent.com/97b4f26bedb5faf9f9eb71296095f78b557b124c/68747470733a2f2f7365616e776174746572732e696f2f696d616765732f72656163746976652d616d6265722d6c6162656c2e706e67" alt="reactive-amber" data-canonical-src="https://seanwatters.io/images/reactive-amber-label.png" height="200">
</p>

<p align="center">
    <a href="https://amberframework.org/"><img src="https://img.shields.io/badge/using-amber_framework-black.svg" ></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-lightblue.svg" ></a>
</p>

<p align="center">
    <i>The Speed and Performance of Amber with the features of React</i>
</p>

<br>

# Reactive Amber

The goal of the **reactive-amber** recipe is to quickly provide a full stack sollution that takes full advantages of the best parts of development using a frontend framework (in the way it was designed to be used), with a powerfull backend API.

The intention is to break away from the traditional Rails-y MVC model, without requiring developers to write completely separate frontend/backend codebases. 

<br>

## Creating a Project

To create your project with the **reactive-amber** recipe, you will need to run the following command:

```
amber new <your app name> -r seanwatters/reactive-amber
```

You may also want to specify your database (default is Postgres) by adding the `-d` tag:

```
amber new <your app name> -r seanwatters/reactive-amber -d <pg | mysql | sqlite>
```

Once your app has been created, you will want to run

```
cd <your app name>
amber w
```

Your application will be running on `localhost:9090`.

<br>

## File Structure

With this recipe, we have modularized the file structure to isolate your React frontend from your Amber API.

```
|- bin
|- config
|- db
|- frontend-react   // React file tree structure.
    |- src
        |- assets
        |- components
            |- HelloAmber
                |- index.css
                |- index.js
            |- HelloReact
                |- index.css
                |- index.js
        |- App.css
        |- App.js
    |- index.css
    |- index.js   // WebPack entry point
    
|- lib
|- public
|- spec
|- src
    |- controllers
        |- application_controller.cr
        |- roots_controller.cr    // Controller for the primary route.
        
    |- locales
    |- models
    |- views
        |- layouts
        |- roots
            |- root.slang   // Location of the root #app <div> Vue will render to.
         
```

<br>

## CLI

The scaffold, controller and model generators are currently a work in progress. The scaffold generator can be used currently but the routes need to be set manually in the `config/routes.cr` file to drop `edit` and `new` views. i.e:

```
resources "<pluralized route name>", <route name>Controller, except: [:edit, :new]
```

The README will be updated as soon as the generators have full functionality.

<br>

## Documentation

For any questions specific to the [React](https://reactjs.org/) or [Amber](https://amberframework.org/) frameworks, please feel free to refer to their excellent documentation below:

* [React](https://reactjs.org/docs/getting-started.html)
* [Amber](https://docs.amberframework.org/amber/)

## DevTools

When developing React applications, it is highly recommended to use the [React devtools](https://github.com/vuejs/vue-devtools). Currently only FireFox and Chrome have support for the devtools extension. Their links are provided below:

* FireFox: [devtools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
* Chrome: [devtools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

You can also use the standalone **react-devtools** for any enviornment:

* Remote: [devtools](https://www.npmjs.com/package/react-devtools)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
