var sys = require('sys'),

	exec = require('child_process').exec,

	fs = require('fs'),

	Script = process.binding('evals').Script,

	file = process.ENV.TM_FILEPATH,

	puts = function (error, stdout, stderr) {

		sys.puts(stdout);

	},

	compress = function (src) {

		var cmd = '',
			jar = process.ENV.TM_BUNDLE_SUPPORT,
			reg = /\s/gi;

		// escape spaces in file paths
		src = src.replace(reg, '\\ ');
		jar = jar.replace(reg, '\\ ');

		cmd = 'java -jar ' + jar + '/yuicompressor.jar ' + src + ' -o ' +
			src.replace(/.(js|css)$/i, '.min.$1');

		exec(cmd, puts);

	},

	input = '';

input = fs.readFileSync(file, 'utf8');
input = input.replace(/^\#\!.*/, ""); //remove shebang

if ((/.js$/i).test(file) && !(/.min.js$/i).test(file)) {

	var succuss = false,

		body = '';

	Script.runInThisContext(fs.readFileSync(__dirname + '/fulljslint.js', 'utf8'));

	success = JSLINT(input, {
		es5: true,
		predef: [
			// CommonJS
			"exports",
			"require",
			"module",
			// NodeJS
			"GLOBAL",
			"process",
			"__filename",
			"__dirname"
		]
	});

	if (!success) {

		JSLINT.errors.forEach(function(e) {
			if (e) {
				body += ('<a href="txmt://open?url=file://' + escape(file) + '&line=' + e.line + '&column=' + e.character + '">' + e.reason);
				if (e.evidence) {
					//TODO highlight column
					body += '<pre>' + (e.evidence || '') + '</pre></a>';
				}
			}
		});

		fs.readFile(__dirname + '/output.html', 'utf8', function(e, html) {
			sys.puts(html.replace('{body}', body));
			process.exit(1); //show_html
		});

	} else {

		compress(file);
		process.exit(0);

	}

} else if ((/.css$/i).test(file) && !(/.min.css$/i).test(file)) {

	compress(file);
	process.exit(0);

}