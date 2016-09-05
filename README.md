&lt;starcounter-include&gt; [![Build Status](https://travis-ci.org/Starcounter/starcounter-include.svg?branch=gh-pages)](https://travis-ci.org/Starcounter/starcounter-include)
==============

`<starcounter-include>` is a custom element that let's you load HTML partials into your Starcounter page, it uses [`<imported-template>`](https://github.com/Juicy/imported-template), so, you can take full control over loaded `<script>`s and `<link rel="import">`s. Thanks to HTML Imports - caching, script execution, etc. is completely native.

### Small sample

If you have **/app/sub/page/path.html**:
```html
<template>
	<h1>Hello {{username}}</h1>
</template>
```
and JSON view-model
```javascript
SubPageViewModel = {
  username: "World"
  html: "/app/sub/page/path.html"
}
```
You can put it on screen with
```html
<starcounter-include partial="{{ SubPageViewModel }}"></starcounter-include>
```
To produce
```html
<h1>Hello World</h1>
```

## Demo/Examples
:construction:
[Example in Starcounter Fiddle!]()

### [`<imported-template>` Demo/Example](https://github.com/Juicy/imported-template#demoexamples)

### [Test/Use cases](http://starcounter.github.io/starcounter-include/tests)

## Related custom elements

 - [`<starcounter-include>`](https://github.com/Starcounter/starcounter-include) - includes Starcounter Partial,
 - [`<imported-template>`](https://github.com/Juicy/imported-template) - includes HTML Template,
 - [`<juicy-tile-grid>`](https://github.com/Juicy/juicy-tile-grid),
   - x-browser fallback [`<juicy-tile-table>`](https://github.com/Juicy/juicy-tile-table),
 - [`<juicy-tile-list>`](https://github.com/Juicy/juicy-tile-list),
 - [`<juicy-tile-editor>`](https://github.com/Juicy/juicy-tile-editor),
 - [`<juicy-tiles-setup-sync>`](https://github.com/Juicy/juicy-tiles-setup-sync)

## Features

 - Applies two-way databinding, even for nested asynchronously loaded `<polymer-element>`s,
 - Multiple (concatenated) templates per partial,
 - Polymer's `<template>` features (binding, repeat, if, etc.),
 - HTML Imports features:
  - Sends request for template only once (HTML Import's caching),
  - Supports `<script>, <link>, <style>` tags to be executed once,
  - Supports `<script>, <style>` tags per template instance.

## Related wiki articles:
 - https://github.com/StarcounterPrefabs/Launcher/wiki/Partials
 - https://github.com/StarcounterPrefabs/Launcher/wiki/Layout-setup
 - https://github.com/StarcounterPrefabs/Launcher/wiki/include-template-in-Polyjuice

### HTML Partial limitations

 - It should be W3C compliant Document body,
 - It should contain at least one `<template>` tag in root node.

### Partial conventions

 - View-model contains `Html` property with path to file (:construction:, or just inline markup).

## Install

Starcounter has it already pre-installed, under `/sys/starcounter-include/starcounter-include.html`, but if you want to use it separately as well.

Install the component using [Bower](http://bower.io/):

```sh
$ bower install Starcounter/starcounter-include --save
```

Or [download as ZIP](https://github.com/Starcounter/starcounter-include/archive/master.zip).

## Usage

1. Import Web Components' polyfill (if needed):

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/starcounter-include/starcounter-include.html">
    ```

3. Start using it!

    ```html
    <starcounter-include partial="{{ViewModel}}"></starcounter-include>
    ```
    or without mustache-style data-binding:
    ```js
    document.querySelector("starcounter-include").partial = ViewModel;
    ```
    or with inline JSON:
    ```html
    <starcounter-include partial="{&quot;Html&quot;: &quot;/path/to/file.html&quot;, &quot;some&quot;: &quot;data&quot;}"></starcounter-include>
    ```

## Attributes

Attribute     | Options  | Default      | Description
---           | ---      | ---          | ---
`partial`     | *JSON*   |              | Set to provide a partial. It's also a `partial` property.
`partial-id`  | *String* |              | **Read-only** attribute that represents `PartialID` fetched from `partial` JSON. It's also a `partialId` property.

## Properties

Property   | Options           | Default | Description
---         | ---               | ---     | ---
`partial`   | *Object*          |         | Object containing partial view-model, bindable with Polymer
`partialId` | *String*          |         | Partial Id used to identify partial, usually it's fetched from `partial.LauncherLayoutInfo.PartialId`.

## Events

Name                                    | Detail                 | Description
---                                     | ---                    | ---
`starcounter-include-composition-saved` | *String* stored layout | Triggered once composition is saved
`partial-changed`                       | *Object* `{value: storedLayout, path: 'partial.LauncherLayoutInfo.Composition$'}` | Polymer notification protocol compilant event to notify about `partial.LauncherLayoutInfo.Composition$` change, triggered once composition is saved.

## Test suite

 - local browser `./tests/index.html`
 - [online](http://starcounter.github.io/starcounter-include/tests)

## [Contributing and Development](CONTRIBUTING.md)

## History

For detailed changelog, check [Releases](https://github.com/Starcounter/starcounter-include/releases).

## License

MIT
