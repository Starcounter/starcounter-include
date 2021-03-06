chai.Assertion.addChainableMethod('descendant', function (selector) {
    var descendant,
        obj = chai.util.flag(this, 'object');

    expect(obj, 'element should be instance of object').to.be.instanceof(Object);
    expect(obj, 'element should respond to `querySelector`').to.respondTo('querySelector');
    descendant = obj.querySelector(selector);
    expect(descendant, 'element should have descendant matching `' + selector + '`').to.be.not.null;

    chai.util.flag(this, 'object', descendant);
});

chai.Assertion.addProperty('clearImportedTemplate', function () {
    var obj = chai.util.flag(this, 'object');

    expect(obj.model, '`imported-template` should have falsy model property').to.be.falsy;
    expect(obj.hasAttribute("model"), '`imported-template` should not have `model` attribute set').to.be.falsy;
    expect(obj.hasAttribute("href"), '`imported-template` should not have `href` attribute set').to.be.false;
    expect(obj.href, '`imported-template` should have falsy `href` property').to.be.falsy;
});
chai.Assertion.addChainableMethod('HTMLAttribute', function (str) {
    var obj = chai.util.flag(this, 'object');
    new chai.Assertion(obj).to.respondTo('getAttribute');
    chai.util.flag(this, 'object', obj.getAttribute(str));
});
