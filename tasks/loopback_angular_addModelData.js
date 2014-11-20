/*
 * grunt-loopback-angular-addmodeldata
 * https://github.com/mrjrdnthms/loopback-angular-admin
 *
 * Copyright (c) 2014 Jordan Thomas
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function(grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('loopback_angular_addModelData', 'Extends grunt-loopback-angular. Auto-generated Angular $resource services for loopback will include model data for use at runtime on angular clients', function() {
		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
			modelConfig: 'server/model-config.json',
			modelDir: 'common/models',
			serviceFile: 'client/app/scripts/lb-services.js'
		});

		var serviceFile;
		grunt.log.ok(options.serviceFile);
		try {
			serviceFile = grunt.file.read(options.serviceFile);
			grunt.log.ok('Loaded LoopBack service file %j', options.serviceFile);
		} catch (e) {
			var errService = new Error('Cannot load LoopBack service file ' + options.serviceFile);
			errService.origError = e;
			grunt.fail.warn(errService);
		}

		var models;
		try {
			models = require(path.resolve(options.modelConfig));
			grunt.log.ok('Loaded LoopBack models file %j', options.modelConfig);
		} catch (e) {
			var err = new Error('Cannot load LoopBack models file ' + options.modelConfig);
			err.origError = e;
			grunt.fail.warn(err);
		}
		for (var modelName in models) {
			if (models[modelName].public){
				modelName = modelName.charAt(0).toUpperCase() + modelName.slice(1);
				grunt.log.ok('Check '+modelName);
				try {
					var model = require(path.resolve(options.modelDir+modelName+".json"));
					//grunt.log.ok('Loaded LoopBack model def file %j', modelName);
				} catch (e) {
					var modelErr = new Error('Cannot load LoopBack model file for ' + modelName);
					modelErr.origError = e;
					grunt.fail.warn(modelErr);
				}
				for (var prop in model.properties) {
					model.properties[prop].key = prop;
				}
				var regex = new RegExp("(module\\.factory\\([\\s]*\""+modelName+"\"[\\s\\S]*?)(return R;)");
				var replace = '$1'+'R.model='+JSON.stringify(model)+';\n\n'+'$2';
				serviceFile = serviceFile.replace(regex,replace);
			}
		}

		//grunt.log.ok(serviceFile);
		grunt.file.write(options.serviceFile,serviceFile);
		grunt.log.ok('Modified angular services to include a new property "model" which holds the model json object', options.output);
	});

};
