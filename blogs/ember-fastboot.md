# ember fastboot notes

The source: https://ember-fastboot.com/

Setup is a bit tricky in Windows environment. I achieved to run it by running with parameter:

`npm install --ignore-scripts`

The problem is jQuery, since we rely on `jQuery.ajax()` and `bootstrap`. It was not easy to run the app.
