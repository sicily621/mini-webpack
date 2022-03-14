;(function(modules){
    function require(filePath) {
        const module = {
            exports: {}
        }
        const fn = modules[filePath];
        fn(require, module, module.exports)
        return module.exports;
    }
    require("./main.js")
})({
    "./foo.js": function (require, module, exports) {
        function foo() {
            console.log('foo')
        }
        module.exports = {
            foo
        }
    },
    "./main.js": function (require, module, exports) {
        let {
            foo
        } = require("./foo.js");
        foo()
        console.log('main')
    }
});
