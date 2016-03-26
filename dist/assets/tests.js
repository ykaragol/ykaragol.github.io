define('alfabe/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('alfabe/tests/components/game-screen.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/game-screen.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/game-screen.js should pass jshint.\ncomponents/game-screen.js: line 82, col 26, \'event\' is defined but never used.\ncomponents/game-screen.js: line 86, col 27, \'event\' is defined but never used.\ncomponents/game-screen.js: line 7, col 5, \'englishChars\' is defined but never used.\n\n3 errors');
  });
});
define('alfabe/tests/components/image-pane.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/image-pane.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/image-pane.js should pass jshint.');
  });
});
define('alfabe/tests/components/keyboard-component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/keyboard-component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/keyboard-component.js should pass jshint.');
  });
});
define('alfabe/tests/components/menu-header.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/menu-header.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/menu-header.js should pass jshint.');
  });
});
define('alfabe/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('alfabe/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('alfabe/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'alfabe/tests/helpers/start-app', 'alfabe/tests/helpers/destroy-app'], function (exports, _qunit, _alfabeTestsHelpersStartApp, _alfabeTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _alfabeTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _alfabeTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('alfabe/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('alfabe/tests/helpers/resolver', ['exports', 'alfabe/resolver', 'alfabe/config/environment'], function (exports, _alfabeResolver, _alfabeConfigEnvironment) {

  var resolver = _alfabeResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _alfabeConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _alfabeConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('alfabe/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('alfabe/tests/helpers/start-app', ['exports', 'ember', 'alfabe/app', 'alfabe/config/environment'], function (exports, _ember, _alfabeApp, _alfabeConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _alfabeConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _alfabeApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('alfabe/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('alfabe/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('alfabe/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('alfabe/tests/test-helper', ['exports', 'alfabe/tests/helpers/resolver', 'ember-qunit'], function (exports, _alfabeTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_alfabeTestsHelpersResolver['default']);
});
define('alfabe/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('alfabe/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map