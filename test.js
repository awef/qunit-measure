asyncTest("test0", 0, function () {
  setTimeout(function () { start(); }, 200);
});

asyncTest("test1", 0, function () {
  setTimeout(function () { start(); }, 200);
});

module("module0");

asyncTest("test0", 0, function () {
  setTimeout(function () { start(); }, 200);
});

asyncTest("test1", 0, function () {
  setTimeout(function () { start(); }, 300);
});
