# CSS and JS Optimiser TextMate Bundle

A simple [TextMate](http://macromates.com/) bundle based on [Better JsLint in TextMate](http://fgnass.posterous.com/jslint-in-textmate) by Felix Gnass that integrates YUI Compressor and JSLint into your dev workflow.

## Features:

* On save ( ⌘S ) the current:
    * CSS file is compressed using YUI Compressor
    * JS file is validated using JSLint. If valid, the file is then run through YUI Compressor. Otherwise hyperlinked errors are reported back for fixing.
* Can be bypassed with ( ⇧⌘S )
* Output is only shown when errors are found
* Window is automatically closed when it looses focus
* Built on [Node.js](http://nodejs.org/)
* Uses an unmodified versions of [JSLint](http://www.JSLint.com/fulljslint.js) and [YUI Compressor](http://developer.yahoo.com/yui/compressor/)

## Installation

1. Install [Node.js](http://nodejs.org/) (if not already installed)
2. Download the zip and add '.tmbundle' as the extension.
3. Double-click the bundle to install.

### Inspired By
* [Pretty JSLint output for TextMate](http://wonko.com/post/pretty-jslint-output-for-textmate "Pretty JSLint output for TextMate by Ryan Grove") by [Ryan Grove](https://github.com/rgrove "Ryan Grove on GitHub")
* [JSLint on Mac + TextMate integration](http://www.phpied.com/jslint-on-mac-textmate/ "JSLint on Mac + TextMate integration by Stoyan Stefanov") by [Stoyan Stefanov](https://github.com/stoyan "Stoyan Stefanov on GitHub")
* [Better JsLint in TextMate](http://fgnass.posterous.com/jslint-in-textmate) by [Felix Gnass](https://github.com/fgnass "Felix Gnass on GitHub")