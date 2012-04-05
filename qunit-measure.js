(function () {
  "use strict";
  var store;

  store = {};

  QUnit.done(function (info) {
    console.group("qunit-measure");
    console.log("All", (info.runtime / 1000) + "s");

    //テスト別の所要時間ランキング
    console.groupCollapsed("ranking");
    (function () {
      var moduleName, module, testName, test, ranking;

      ranking = [];
      for (moduleName in store) {
        module = store[moduleName];
        for (testName in module) {
          test = module[testName];
          ranking.push({
            name: (moduleName ? moduleName + " " : "") + testName,
            time: test.end - test.start
          });
        }
      }
      ranking.sort(function (a, b) {
        return b.time - a.time;
      });
      ranking.forEach(function (test) {
        console.log(test.name, test.time + "ms");
      });
    })();
    console.groupEnd();

    console.groupEnd();
  });

  QUnit.testStart(function (info) {
    var moduleName;

    moduleName = info.module || "";

    if (store[moduleName] === undefined) {
      store[moduleName] = {};
    }
    store[moduleName][info.name] = {start: Date.now()};
  });

  QUnit.testDone(function (info) {
    var moduleName;

    moduleName = info.module || "";
    store[moduleName][info.name].end = Date.now();
  });
})();
