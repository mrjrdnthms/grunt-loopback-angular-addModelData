# grunt-loopback-angular-addModelData

> Extends grunt-loopback-angular. auto-generating Angular $resource services for loopback will include model data for use at runtime on angular client

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-loopback-angular-addModelData --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-loopback-angular-addModelData');
```

## The "loopback_angular_addModelData" task

### Overview
In your project's Gruntfile, add a section named `loopback_angular_addModelData` to the data object passed into `grunt.initConfig()`.

Service.options shown are defaults so you can leave them off if using the same. Should look like

```js
loopback_angular_addModelData: {
      services: {
        options: {
          modelConfig: 'server/model-config.json',
          serviceFile: 'client/app/scripts/lb-services.js',
          modelDir: 'common/models/'
        }
      }
    }
```
Register task as part of loopback command

```js
grunt.registerTask('loopback', [
    'loopback_angular',
	  'loopback_angular_addModelData', <-- Add this line
    'docular'
  ]);
```

### Usage Examples
So what do you get for this? Now when you access loopback resources in angular you can get at the model info stored in the model.json file. As in
```js
//Supposing you have exposed a customer model on your loopback api
function(Customer) {
	//figure our what properties the customer model has at runtime
	modelProps = Customer.model.properties;
}
```

I built this becuase I use [angular-formly](https://github.com/nimbly/angular-formly) to automatically generate forms for editing models. By getting access to model properties at runtime and can build out the forms simply based on the fields defined in custmor.json

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
