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

```js
grunt.initConfig({
  loopback_angular_addModelData: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples
Add Task to your gruntfile
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

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
