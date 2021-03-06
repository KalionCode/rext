var global$1 = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function e(e3, o2, n2, i2) {
  return new (n2 || (n2 = Promise))(function(a2, r2) {
    function t2(e4) {
      try {
        m2(i2.next(e4));
      } catch (e5) {
        r2(e5);
      }
    }
    function s2(e4) {
      try {
        m2(i2.throw(e4));
      } catch (e5) {
        r2(e5);
      }
    }
    function m2(e4) {
      var o3;
      e4.done ? a2(e4.value) : (o3 = e4.value, o3 instanceof n2 ? o3 : new n2(function(e5) {
        e5(o3);
      })).then(t2, s2);
    }
    m2((i2 = i2.apply(e3, o2 || [])).next());
  });
}
!function(e3, o2) {
  o2 === void 0 && (o2 = {});
  var n2 = o2.insertAt;
  if (e3 && typeof document != "undefined") {
    var i2 = document.head || document.getElementsByTagName("head")[0], a2 = document.createElement("style");
    a2.type = "text/css", n2 === "top" && i2.firstChild ? i2.insertBefore(a2, i2.firstChild) : i2.appendChild(a2), a2.styleSheet ? a2.styleSheet.cssText = e3 : a2.appendChild(document.createTextNode(e3));
  }
}('@keyframes show {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.8, 0.8, 0.8);\n  }\n\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  100% {\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes hide {\n  0% {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n\n  100% {\n    opacity: 0;\n    transform: scale3d(0.8, 0.8, 0.8);\n  }\n}\n\n@keyframes grow {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.8, 0.8, 0.8); \n  }\n\n  100% { \n    opacity: 1;\n    transform: scale3d(1, 1, 1); \n  }\n}\n\n@keyframes shrink {\n  0% { \n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n\n  100% { \n    opacity: 0;\n    transform: scale3d(0.8, 0.8, 0.8); \n  }\n}\n\n@keyframes fade-in {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n\n@keyframes fade-out {\n  0% { opacity: 1; }\n  100% { opacity: 0; }\n}\n\n.emoji-picker {\n  --animation-duration: 0.2s;\n  --animation-easing: ease-in-out;\n\n  --emoji-size: 1.8em;\n  --emoji-size-multiplier: 1.5;\n  --emoji-preview-size: 2em;\n  --emoji-per-row: 8;\n  --row-count: 6;\n\n  --content-height: calc((var(--emoji-size) * var(--emoji-size-multiplier)) * var(--row-count) + var(--category-name-size) + var(--category-button-height) + 0.5em);\n\n  --category-name-size: 0.85em;\n\n  --category-button-height: 2em;\n  --category-button-size: 1.1em;\n  --category-border-bottom-size: 4px;\n\n  --focus-indicator-color: #999999;\n\n  --search-height: 2em;\n\n  --blue-color: #4F81E5;\n\n  --border-color: #CCCCCC;\n  --background-color: #FFFFFF;\n  --text-color: #000000;\n  --secondary-text-color: #666666;\n  --hover-color: #E8F4F9;\n  --search-focus-border-color: var(--blue-color);\n  --search-icon-color: #CCCCCC;\n  --overlay-background-color: rgba(0, 0, 0, 0.8);\n  --popup-background-color: #FFFFFF;\n  --category-button-color: #666666;\n  --category-button-active-color: var(--blue-color);\n\n  --dark-border-color: #666666;\n  --dark-background-color: #333333;\n  --dark-text-color: #FFFFFF;\n  --dark-secondary-text-color: #999999;\n  --dark-hover-color: #666666;\n  --dark-search-background-color: #666666;\n  --dark-search-border-color: #999999;\n  --dark-search-placeholder-color: #999999;\n  --dark-search-focus-border-color: #DBE5F9;\n  --dark-popup-background-color: #333333;\n  --dark-category-button-color: #FFFFFF;\n\n  --font: Arial, Helvetica, sans-serif;\n  --font-size: 16px;\n}\n\n.emoji-picker {\n  font-size: var(--font-size);\n  border: 1px solid var(--border-color);\n  border-radius: 5px;\n  background: var(--background-color);\n  width: calc(var(--emoji-per-row) * var(--emoji-size) * var(--emoji-size-multiplier) + 1em + 1.5rem);\n  font-family: var(--font);\n  overflow: hidden;\n  animation: show var(--animation-duration) var(--animation-easing);\n}\n\n.emoji-picker * {\n  font-family: var(--font);\n  box-sizing: content-box;\n}\n\n.emoji-picker__overlay {\n  background: rgba(0, 0, 0, 0.75);\n  z-index: 1000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.emoji-picker.hiding {\n  animation: hide var(--animation-duration) var(--animation-easing);\n}\n\n.emoji-picker.dark {\n  background: var(--dark-background-color);\n  color: var(--dark-text-color);\n  border-color: var(--dark-border-color);\n}\n\n.emoji-picker__content {\n  padding: 0.5em;\n  height: var(--content-height);\n  position: relative;\n}\n\n.emoji-picker__preview {\n  height: var(--emoji-preview-size);\n  padding: 0.5em;\n  border-top: 1px solid var(--border-color);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.emoji-picker.dark .emoji-picker__preview {\n  border-top-color: var(--dark-border-color);\n}\n\n.emoji-picker__preview-emoji {\n  font-size: var(--emoji-preview-size);\n  margin-right: 0.25em;\n  font-family: "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "EmojiOne Color", "Android Emoji";\n}\n\n.emoji-picker__preview-emoji img.emoji {\n  height: 1em;\n  width: 1em;\n  margin: 0 .05em 0 .1em;\n  vertical-align: -0.1em;\n}\n\n.emoji-picker__preview-name {\n  color: var(--text-color);\n  font-size: 0.85em;\n  overflow-wrap: break-word;\n  word-break: break-all;\n}\n\n.emoji-picker.dark .emoji-picker__preview-name {\n  color: var(--dark-text-color);\n}\n\n.emoji-picker__container {\n  display: grid;\n  justify-content: center;\n  grid-template-columns: repeat(var(--emoji-per-row), calc(var(--emoji-size) * var(--emoji-size-multiplier)));\n  grid-auto-rows: calc(var(--emoji-size) * var(--emoji-size-multiplier));\n}\n\n.emoji-picker__container.search-results {\n  height: var(--content-height);\n  overflow-y: auto;\n}\n\n.emoji-picker__custom-emoji {\n  width: 1em;\n  height: 1em;\n}\n\n.emoji-picker__emoji {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  overflow: hidden;\n  font-size: var(--emoji-size);\n  width: 1.5em;\n  height: 1.5em;\n  padding: 0;\n  margin: 0;\n  outline: none;\n  font-family: "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "EmojiOne Color", "Android Emoji";\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.emoji-picker__emoji img.emoji {\n  height: 1em;\n  width: 1em;\n  margin: 0 .05em 0 .1em;\n  vertical-align: -0.1em;\n}\n\n.emoji-picker__emoji:focus, .emoji-picker__emoji:hover {\n  background: var(--hover-color);\n}\n\n.emoji-picker__emoji:focus {\n  outline: 1px dotted var(--focus-indicator-color);\n}\n\n.emoji-picker.dark .emoji-picker__emoji:focus, .emoji-picker.dark .emoji-picker__emoji:hover {\n  background: var(--dark-hover-color);\n}\n\n.emoji-picker__plugin-container {\n  margin: 0.5em;\n  display: flex;\n  flex-direction: row;\n}\n\n.emoji-picker__search-container {\n  margin: 0.5em;\n  position: relative;\n  height: var(--search-height);\n  display: flex;\n}\n\n.emoji-picker__search {\n  box-sizing: border-box;\n  width: 100%;\n  border-radius: 3px;\n  border: 1px solid var(--border-color);\n  padding-right: 2em;\n  padding: 0.5em 2.25em 0.5em 0.5em;\n  font-size: 0.85em;\n  outline: none;\n}\n\n.emoji-picker.dark .emoji-picker__search {\n  background: var(--dark-search-background-color);\n  color: var(--dark-text-color);\n  border-color: var(--dark-search-border-color);\n}\n\n.emoji-picker.dark .emoji-picker__search::placeholder {\n  color: var(--dark-search-placeholder-color);\n}\n\n.emoji-picker__search:focus {\n  border: 1px solid var(--search-focus-border-color);\n}\n\n.emoji-picker.dark .emoji-picker__search:focus {\n  border-color: var(--dark-search-focus-border-color);\n}\n\n.emoji-picker__search-icon {\n  position: absolute;\n  color: var(--search-icon-color);\n  width: 1em;\n  height: 1em;\n  right: 0.75em;\n  top: calc(50% - 0.5em);\n}\n\n.emoji-picker__search-icon img {\n  width: 1em;\n  height: 1em;\n}\n\n.emoji-picker__search-not-found {\n  color: var(--secondary-text-color);\n  text-align: center;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.emoji-picker__search-not-found h2 {\n  color: var(--secondary-text-color);\n}\n\n.emoji-picker.dark .emoji-picker__search-not-found {\n  color: var(--dark-secondary-text-color);\n}\n\n.emoji-picker.dark .emoji-picker__search-not-found h2 {\n  color: var(--dark-secondary-text-color);\n}\n\n.emoji-picker__search-not-found-icon {\n  font-size: 3em;\n}\n\n.emoji-picker__search-not-found-icon img {\n  width: 1em;\n  height: 1em;\n}\n\n.emoji-picker__search-not-found h2 {\n  margin: 0.5em 0;\n  font-size: 1em;\n}\n\n.emoji-picker__variant-overlay {\n  background: var(--overlay-background-color);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  animation: fade-in var(--animation-duration) var(--animation-easing);\n}\n\n.emoji-picker__variant-overlay.hiding {\n  animation: fade-out var(--animation-duration) var(--animation-easing);\n}\n\n.emoji-picker__variant-popup {\n  background: var(--popup-background-color);\n  margin: 0.5em;\n  padding: 0.5em;\n  text-align: center;\n  border-radius: 5px;\n  animation: grow var(--animation-duration) var(--animation-easing);\n  user-select: none;\n}\n\n.emoji-picker__variant-overlay.hiding .emoji-picker__variant-popup {\n  animation: shrink var(--animation-duration) var(--animation-easing);\n}\n\n.emoji-picker.dark .emoji-picker__variant-popup {\n  background: var(--dark-popup-background-color);\n}\n\n.emoji-picker__emojis {\n  overflow-y: auto;\n  position: relative;\n  height: calc((var(--emoji-size) * var(--emoji-size-multiplier)) * var(--row-count) + var(--category-name-size));\n}\n\n.emoji-picker__emojis.hiding {\n  animation: fade-out 0.05s var(--animation-easing);\n}\n\n.emoji-picker__emojis h2.emoji-picker__category-name {\n  font-size: 0.85em;\n  color: var(--secondary-text-color);\n  text-transform: uppercase;\n  margin: 0.25em 0;\n  text-align: left;\n}\n\n.emoji-picker.dark h2.emoji-picker__category-name {\n  color: var(--dark-secondary-text-color);\n}\n\n.emoji-picker__category-buttons {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  height: var(--category-button-height);\n  margin-bottom: 0.5em;\n}\n\nbutton.emoji-picker__category-button {\n  flex-grow: 1;\n  background: transparent;\n  padding: 0;\n  border: none;\n  cursor: pointer;\n  font-size: var(--category-button-size);\n  vertical-align: middle;\n  color: var(--category-button-color);\n  border-bottom: var(--category-border-bottom-size) solid transparent;\n  outline: none;\n}\n\nbutton.emoji-picker__category-button img {\n  width: var(--category-button-size);\n  height: var(--category-button-size);\n}\n\n.emoji-picker.keyboard button.emoji-picker__category-button:focus {\n  outline: 1px dotted var(--focus-indicator-color);\n}\n\n.emoji-picker.dark button.emoji-picker__category-button.active {\n  color: var(--category-button-active-color);\n}\n\n.emoji-picker.dark button.emoji-picker__category-button {\n  color: var(--dark-category-button-color);\n}\n\nbutton.emoji-picker__category-button.active {\n  color: var(--category-button-active-color);\n  border-bottom: var(--category-border-bottom-size) solid var(--category-button-active-color);\n}\n\n@media (prefers-color-scheme: dark) {\n  .emoji-picker.auto {\n    background: var(--dark-background-color);\n    color: var(--dark-text-color);\n    border-color: var(--dark-border-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__preview {\n    border-top-color: var(--dark-border-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__preview-name {\n    color: var(--dark-text-color);\n  }\n\n  .emoji-picker.auto button.emoji-picker__category-button {\n    color: var(--dark-category-button-color);\n  }\n\n  .emoji-picker.auto button.emoji-picker__category-button.active {\n    color: var(--category-button-active-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__emoji:focus, .emoji-picker.auto .emoji-picker__emoji:hover {\n    background: var(--dark-hover-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__search {\n    background: var(--dark-search-background-color);\n    color: var(--dark-text-color);\n    border-color: var(--dark-search-border-color);\n  }\n \n  .emoji-picker.auto h2.emoji-picker__category-name {\n    color: var(--dark-secondary-text-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__search::placeholder {\n    color: var(--dark-search-placeholder-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__search:focus {\n    border-color: var(--dark-search-focus-border-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__search-not-found {\n    color: var(--dark-secondary-text-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__search-not-found h2 {\n    color: var(--dark-secondary-text-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__variant-popup {\n    background: var(--dark-popup-background-color);\n  }\n}');
var o = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'], n = o.join(","), i = typeof Element == "undefined" ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
function a(e3, o2) {
  o2 = o2 || {};
  var a2, t2, s2, d2 = [], g2 = [], u2 = e3.querySelectorAll(n);
  for (o2.includeContainer && i.call(e3, n) && (u2 = Array.prototype.slice.apply(u2)).unshift(e3), a2 = 0; a2 < u2.length; a2++)
    r(t2 = u2[a2]) && ((s2 = m(t2)) === 0 ? d2.push(t2) : g2.push({documentOrder: a2, tabIndex: s2, node: t2}));
  return g2.sort(c).map(function(e4) {
    return e4.node;
  }).concat(d2);
}
function r(e3) {
  return !(!t(e3) || function(e4) {
    return function(e5) {
      return d(e5) && e5.type === "radio";
    }(e4) && !function(e5) {
      if (!e5.name)
        return true;
      var o2 = function(e6) {
        for (var o3 = 0; o3 < e6.length; o3++)
          if (e6[o3].checked)
            return e6[o3];
      }(e5.ownerDocument.querySelectorAll('input[type="radio"][name="' + e5.name + '"]'));
      return !o2 || o2 === e5;
    }(e4);
  }(e3) || m(e3) < 0);
}
function t(e3) {
  return !(e3.disabled || function(e4) {
    return d(e4) && e4.type === "hidden";
  }(e3) || function(e4) {
    return e4.offsetParent === null || getComputedStyle(e4).visibility === "hidden";
  }(e3));
}
a.isTabbable = function(e3) {
  if (!e3)
    throw new Error("No node provided");
  return i.call(e3, n) !== false && r(e3);
}, a.isFocusable = function(e3) {
  if (!e3)
    throw new Error("No node provided");
  return i.call(e3, s) !== false && t(e3);
};
var s = o.concat("iframe").join(",");
function m(e3) {
  var o2 = parseInt(e3.getAttribute("tabindex"), 10);
  return isNaN(o2) ? function(e4) {
    return e4.contentEditable === "true";
  }(e3) ? 0 : e3.tabIndex : o2;
}
function c(e3, o2) {
  return e3.tabIndex === o2.tabIndex ? e3.documentOrder - o2.documentOrder : e3.tabIndex - o2.tabIndex;
}
function d(e3) {
  return e3.tagName === "INPUT";
}
var g, u = a, l = function() {
  for (var e3 = {}, o2 = 0; o2 < arguments.length; o2++) {
    var n2 = arguments[o2];
    for (var i2 in n2)
      v.call(n2, i2) && (e3[i2] = n2[i2]);
  }
  return e3;
}, v = Object.prototype.hasOwnProperty;
var y, f = (y = [], {activateTrap: function(e3) {
  if (y.length > 0) {
    var o2 = y[y.length - 1];
    o2 !== e3 && o2.pause();
  }
  var n2 = y.indexOf(e3);
  n2 === -1 || y.splice(n2, 1), y.push(e3);
}, deactivateTrap: function(e3) {
  var o2 = y.indexOf(e3);
  o2 !== -1 && y.splice(o2, 1), y.length > 0 && y[y.length - 1].unpause();
}});
function j(e3) {
  return setTimeout(e3, 0);
}
var h = function(e3, o2) {
  var n2 = document, i2 = typeof e3 == "string" ? n2.querySelector(e3) : e3, a2 = l({returnFocusOnDeactivate: true, escapeDeactivates: true}, o2), r2 = {firstTabbableNode: null, lastTabbableNode: null, nodeFocusedBeforeActivation: null, mostRecentlyFocusedNode: null, active: false, paused: false}, t2 = {activate: function(e4) {
    if (r2.active)
      return;
    w2(), r2.active = true, r2.paused = false, r2.nodeFocusedBeforeActivation = n2.activeElement;
    var o3 = e4 && e4.onActivate ? e4.onActivate : a2.onActivate;
    o3 && o3();
    return m2(), t2;
  }, deactivate: s2, pause: function() {
    if (r2.paused || !r2.active)
      return;
    r2.paused = true, c2();
  }, unpause: function() {
    if (!r2.paused || !r2.active)
      return;
    r2.paused = false, w2(), m2();
  }};
  return t2;
  function s2(e4) {
    if (r2.active) {
      clearTimeout(g), c2(), r2.active = false, r2.paused = false, f.deactivateTrap(t2);
      var o3 = e4 && e4.onDeactivate !== void 0 ? e4.onDeactivate : a2.onDeactivate;
      return o3 && o3(), (e4 && e4.returnFocus !== void 0 ? e4.returnFocus : a2.returnFocusOnDeactivate) && j(function() {
        var e5;
        k2((e5 = r2.nodeFocusedBeforeActivation, d2("setReturnFocus") || e5));
      }), t2;
    }
  }
  function m2() {
    if (r2.active)
      return f.activateTrap(t2), g = j(function() {
        k2(v2());
      }), n2.addEventListener("focusin", h2, true), n2.addEventListener("mousedown", y2, {capture: true, passive: false}), n2.addEventListener("touchstart", y2, {capture: true, passive: false}), n2.addEventListener("click", b2, {capture: true, passive: false}), n2.addEventListener("keydown", p2, {capture: true, passive: false}), t2;
  }
  function c2() {
    if (r2.active)
      return n2.removeEventListener("focusin", h2, true), n2.removeEventListener("mousedown", y2, true), n2.removeEventListener("touchstart", y2, true), n2.removeEventListener("click", b2, true), n2.removeEventListener("keydown", p2, true), t2;
  }
  function d2(e4) {
    var o3 = a2[e4], i3 = o3;
    if (!o3)
      return null;
    if (typeof o3 == "string" && !(i3 = n2.querySelector(o3)))
      throw new Error("`" + e4 + "` refers to no known node");
    if (typeof o3 == "function" && !(i3 = o3()))
      throw new Error("`" + e4 + "` did not return a node");
    return i3;
  }
  function v2() {
    var e4;
    if (!(e4 = d2("initialFocus") !== null ? d2("initialFocus") : i2.contains(n2.activeElement) ? n2.activeElement : r2.firstTabbableNode || d2("fallbackFocus")))
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return e4;
  }
  function y2(e4) {
    i2.contains(e4.target) || (a2.clickOutsideDeactivates ? s2({returnFocus: !u.isFocusable(e4.target)}) : a2.allowOutsideClick && a2.allowOutsideClick(e4) || e4.preventDefault());
  }
  function h2(e4) {
    i2.contains(e4.target) || e4.target instanceof Document || (e4.stopImmediatePropagation(), k2(r2.mostRecentlyFocusedNode || v2()));
  }
  function p2(e4) {
    if (a2.escapeDeactivates !== false && function(e5) {
      return e5.key === "Escape" || e5.key === "Esc" || e5.keyCode === 27;
    }(e4))
      return e4.preventDefault(), void s2();
    (function(e5) {
      return e5.key === "Tab" || e5.keyCode === 9;
    })(e4) && function(e5) {
      if (w2(), e5.shiftKey && e5.target === r2.firstTabbableNode)
        return e5.preventDefault(), void k2(r2.lastTabbableNode);
      if (!e5.shiftKey && e5.target === r2.lastTabbableNode)
        e5.preventDefault(), k2(r2.firstTabbableNode);
    }(e4);
  }
  function b2(e4) {
    a2.clickOutsideDeactivates || i2.contains(e4.target) || a2.allowOutsideClick && a2.allowOutsideClick(e4) || (e4.preventDefault(), e4.stopImmediatePropagation());
  }
  function w2() {
    var e4 = u(i2);
    r2.firstTabbableNode = e4[0] || v2(), r2.lastTabbableNode = e4[e4.length - 1] || v2();
  }
  function k2(e4) {
    e4 !== n2.activeElement && (e4 && e4.focus ? (e4.focus(), r2.mostRecentlyFocusedNode = e4, function(e5) {
      return e5.tagName && e5.tagName.toLowerCase() === "input" && typeof e5.select == "function";
    }(e4) && e4.select()) : k2(v2()));
  }
};
function p() {
}
p.prototype = {on: function(e3, o2, n2) {
  var i2 = this.e || (this.e = {});
  return (i2[e3] || (i2[e3] = [])).push({fn: o2, ctx: n2}), this;
}, once: function(e3, o2, n2) {
  var i2 = this;
  function a2() {
    i2.off(e3, a2), o2.apply(n2, arguments);
  }
  return a2._ = o2, this.on(e3, a2, n2);
}, emit: function(e3) {
  for (var o2 = [].slice.call(arguments, 1), n2 = ((this.e || (this.e = {}))[e3] || []).slice(), i2 = 0, a2 = n2.length; i2 < a2; i2++)
    n2[i2].fn.apply(n2[i2].ctx, o2);
  return this;
}, off: function(e3, o2) {
  var n2 = this.e || (this.e = {}), i2 = n2[e3], a2 = [];
  if (i2 && o2)
    for (var r2 = 0, t2 = i2.length; r2 < t2; r2++)
      i2[r2].fn !== o2 && i2[r2].fn._ !== o2 && a2.push(i2[r2]);
  return a2.length ? n2[e3] = a2 : delete n2[e3], this;
}};
var b = p;
function w(e3) {
  var o2 = e3.getBoundingClientRect();
  return {width: o2.width, height: o2.height, top: o2.top, right: o2.right, bottom: o2.bottom, left: o2.left, x: o2.left, y: o2.top};
}
function k(e3) {
  if (e3.toString() !== "[object Window]") {
    var o2 = e3.ownerDocument;
    return o2 ? o2.defaultView : window;
  }
  return e3;
}
function x(e3) {
  var o2 = k(e3);
  return {scrollLeft: o2.pageXOffset, scrollTop: o2.pageYOffset};
}
function C(e3) {
  return e3 instanceof k(e3).Element || e3 instanceof Element;
}
function E(e3) {
  return e3 instanceof k(e3).HTMLElement || e3 instanceof HTMLElement;
}
function _(e3) {
  return e3 ? (e3.nodeName || "").toLowerCase() : null;
}
function z(e3) {
  return (C(e3) ? e3.ownerDocument : e3.document).documentElement;
}
function O(e3) {
  return w(z(e3)).left + x(e3).scrollLeft;
}
function I(e3) {
  return k(e3).getComputedStyle(e3);
}
function S(e3) {
  var o2 = I(e3), n2 = o2.overflow, i2 = o2.overflowX, a2 = o2.overflowY;
  return /auto|scroll|overlay|hidden/.test(n2 + a2 + i2);
}
function P(e3, o2, n2) {
  n2 === void 0 && (n2 = false);
  var i2, a2, r2 = z(o2), t2 = w(e3), s2 = {scrollLeft: 0, scrollTop: 0}, m2 = {x: 0, y: 0};
  return n2 || ((_(o2) !== "body" || S(r2)) && (s2 = (i2 = o2) !== k(i2) && E(i2) ? {scrollLeft: (a2 = i2).scrollLeft, scrollTop: a2.scrollTop} : x(i2)), E(o2) ? ((m2 = w(o2)).x += o2.clientLeft, m2.y += o2.clientTop) : r2 && (m2.x = O(r2))), {x: t2.left + s2.scrollLeft - m2.x, y: t2.top + s2.scrollTop - m2.y, width: t2.width, height: t2.height};
}
function M(e3) {
  return {x: e3.offsetLeft, y: e3.offsetTop, width: e3.offsetWidth, height: e3.offsetHeight};
}
function A(e3) {
  return _(e3) === "html" ? e3 : e3.assignedSlot || e3.parentNode || e3.host || z(e3);
}
function L(e3) {
  return ["html", "body", "#document"].indexOf(_(e3)) >= 0 ? e3.ownerDocument.body : E(e3) && S(e3) ? e3 : L(A(e3));
}
function T(e3, o2) {
  o2 === void 0 && (o2 = []);
  var n2 = L(e3), i2 = _(n2) === "body", a2 = k(n2), r2 = i2 ? [a2].concat(a2.visualViewport || [], S(n2) ? n2 : []) : n2, t2 = o2.concat(r2);
  return i2 ? t2 : t2.concat(T(A(r2)));
}
function N(e3) {
  return ["table", "td", "th"].indexOf(_(e3)) >= 0;
}
function F(e3) {
  return E(e3) && I(e3).position !== "fixed" ? e3.offsetParent : null;
}
function B(e3) {
  for (var o2 = k(e3), n2 = F(e3); n2 && N(n2); )
    n2 = F(n2);
  return n2 && _(n2) === "body" && I(n2).position === "static" ? o2 : n2 || o2;
}
p.TinyEmitter = b;
var D = "top", R = "bottom", q = "right", V = "left", H = [D, R, q, V], U = H.reduce(function(e3, o2) {
  return e3.concat([o2 + "-start", o2 + "-end"]);
}, []), W = [].concat(H, ["auto"]).reduce(function(e3, o2) {
  return e3.concat([o2, o2 + "-start", o2 + "-end"]);
}, []), K = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
function J(e3) {
  var o2 = new Map(), n2 = new Set(), i2 = [];
  function a2(e4) {
    n2.add(e4.name), [].concat(e4.requires || [], e4.requiresIfExists || []).forEach(function(e5) {
      if (!n2.has(e5)) {
        var i3 = o2.get(e5);
        i3 && a2(i3);
      }
    }), i2.push(e4);
  }
  return e3.forEach(function(e4) {
    o2.set(e4.name, e4);
  }), e3.forEach(function(e4) {
    n2.has(e4.name) || a2(e4);
  }), i2;
}
function G(e3) {
  return e3.split("-")[0];
}
var X = {placement: "bottom", modifiers: [], strategy: "absolute"};
function Y() {
  for (var e3 = arguments.length, o2 = new Array(e3), n2 = 0; n2 < e3; n2++)
    o2[n2] = arguments[n2];
  return !o2.some(function(e4) {
    return !(e4 && typeof e4.getBoundingClientRect == "function");
  });
}
function $(e3) {
  e3 === void 0 && (e3 = {});
  var o2 = e3, n2 = o2.defaultModifiers, i2 = n2 === void 0 ? [] : n2, a2 = o2.defaultOptions, r2 = a2 === void 0 ? X : a2;
  return function(e4, o3, n3) {
    n3 === void 0 && (n3 = r2);
    var a3, t2, s2 = {placement: "bottom", orderedModifiers: [], options: Object.assign({}, X, {}, r2), modifiersData: {}, elements: {reference: e4, popper: o3}, attributes: {}, styles: {}}, m2 = [], c2 = false, d2 = {state: s2, setOptions: function(n4) {
      g2(), s2.options = Object.assign({}, r2, {}, s2.options, {}, n4), s2.scrollParents = {reference: C(e4) ? T(e4) : e4.contextElement ? T(e4.contextElement) : [], popper: T(o3)};
      var a4, t3, c3 = function(e5) {
        var o4 = J(e5);
        return K.reduce(function(e6, n5) {
          return e6.concat(o4.filter(function(e7) {
            return e7.phase === n5;
          }));
        }, []);
      }((a4 = [].concat(i2, s2.options.modifiers), t3 = a4.reduce(function(e5, o4) {
        var n5 = e5[o4.name];
        return e5[o4.name] = n5 ? Object.assign({}, n5, {}, o4, {options: Object.assign({}, n5.options, {}, o4.options), data: Object.assign({}, n5.data, {}, o4.data)}) : o4, e5;
      }, {}), Object.keys(t3).map(function(e5) {
        return t3[e5];
      })));
      return s2.orderedModifiers = c3.filter(function(e5) {
        return e5.enabled;
      }), s2.orderedModifiers.forEach(function(e5) {
        var o4 = e5.name, n5 = e5.options, i3 = n5 === void 0 ? {} : n5, a5 = e5.effect;
        if (typeof a5 == "function") {
          var r3 = a5({state: s2, name: o4, instance: d2, options: i3}), t4 = function() {
          };
          m2.push(r3 || t4);
        }
      }), d2.update();
    }, forceUpdate: function() {
      if (!c2) {
        var e5 = s2.elements, o4 = e5.reference, n4 = e5.popper;
        if (Y(o4, n4)) {
          s2.rects = {reference: P(o4, B(n4), s2.options.strategy === "fixed"), popper: M(n4)}, s2.reset = false, s2.placement = s2.options.placement, s2.orderedModifiers.forEach(function(e6) {
            return s2.modifiersData[e6.name] = Object.assign({}, e6.data);
          });
          for (var i3 = 0; i3 < s2.orderedModifiers.length; i3++)
            if (s2.reset !== true) {
              var a4 = s2.orderedModifiers[i3], r3 = a4.fn, t3 = a4.options, m3 = t3 === void 0 ? {} : t3, g3 = a4.name;
              typeof r3 == "function" && (s2 = r3({state: s2, options: m3, name: g3, instance: d2}) || s2);
            } else
              s2.reset = false, i3 = -1;
        }
      }
    }, update: (a3 = function() {
      return new Promise(function(e5) {
        d2.forceUpdate(), e5(s2);
      });
    }, function() {
      return t2 || (t2 = new Promise(function(e5) {
        Promise.resolve().then(function() {
          t2 = void 0, e5(a3());
        });
      })), t2;
    }), destroy: function() {
      g2(), c2 = true;
    }};
    if (!Y(e4, o3))
      return d2;
    function g2() {
      m2.forEach(function(e5) {
        return e5();
      }), m2 = [];
    }
    return d2.setOptions(n3).then(function(e5) {
      !c2 && n3.onFirstUpdate && n3.onFirstUpdate(e5);
    }), d2;
  };
}
var Z = {passive: true};
function Q(e3) {
  return e3.split("-")[1];
}
function ee(e3) {
  return ["top", "bottom"].indexOf(e3) >= 0 ? "x" : "y";
}
function oe(e3) {
  var o2, n2 = e3.reference, i2 = e3.element, a2 = e3.placement, r2 = a2 ? G(a2) : null, t2 = a2 ? Q(a2) : null, s2 = n2.x + n2.width / 2 - i2.width / 2, m2 = n2.y + n2.height / 2 - i2.height / 2;
  switch (r2) {
    case D:
      o2 = {x: s2, y: n2.y - i2.height};
      break;
    case R:
      o2 = {x: s2, y: n2.y + n2.height};
      break;
    case q:
      o2 = {x: n2.x + n2.width, y: m2};
      break;
    case V:
      o2 = {x: n2.x - i2.width, y: m2};
      break;
    default:
      o2 = {x: n2.x, y: n2.y};
  }
  var c2 = r2 ? ee(r2) : null;
  if (c2 != null) {
    var d2 = c2 === "y" ? "height" : "width";
    switch (t2) {
      case "start":
        o2[c2] = Math.floor(o2[c2]) - Math.floor(n2[d2] / 2 - i2[d2] / 2);
        break;
      case "end":
        o2[c2] = Math.floor(o2[c2]) + Math.ceil(n2[d2] / 2 - i2[d2] / 2);
    }
  }
  return o2;
}
var ne = {top: "auto", right: "auto", bottom: "auto", left: "auto"};
function ie(e3) {
  var o2, n2 = e3.popper, i2 = e3.popperRect, a2 = e3.placement, r2 = e3.offsets, t2 = e3.position, s2 = e3.gpuAcceleration, m2 = e3.adaptive, c2 = function(e4) {
    var o3 = e4.x, n3 = e4.y, i3 = window.devicePixelRatio || 1;
    return {x: Math.round(o3 * i3) / i3 || 0, y: Math.round(n3 * i3) / i3 || 0};
  }(r2), d2 = c2.x, g2 = c2.y, u2 = r2.hasOwnProperty("x"), l2 = r2.hasOwnProperty("y"), v2 = V, y2 = D, f2 = window;
  if (m2) {
    var j2 = B(n2);
    j2 === k(n2) && (j2 = z(n2)), a2 === D && (y2 = R, g2 -= j2.clientHeight - i2.height, g2 *= s2 ? 1 : -1), a2 === V && (v2 = q, d2 -= j2.clientWidth - i2.width, d2 *= s2 ? 1 : -1);
  }
  var h2, p2 = Object.assign({position: t2}, m2 && ne);
  return s2 ? Object.assign({}, p2, ((h2 = {})[y2] = l2 ? "0" : "", h2[v2] = u2 ? "0" : "", h2.transform = (f2.devicePixelRatio || 1) < 2 ? "translate(" + d2 + "px, " + g2 + "px)" : "translate3d(" + d2 + "px, " + g2 + "px, 0)", h2)) : Object.assign({}, p2, ((o2 = {})[y2] = l2 ? g2 + "px" : "", o2[v2] = u2 ? d2 + "px" : "", o2.transform = "", o2));
}
var ae = {left: "right", right: "left", bottom: "top", top: "bottom"};
function re(e3) {
  return e3.replace(/left|right|bottom|top/g, function(e4) {
    return ae[e4];
  });
}
var te = {start: "end", end: "start"};
function se(e3) {
  return e3.replace(/start|end/g, function(e4) {
    return te[e4];
  });
}
function me(e3) {
  return parseFloat(e3) || 0;
}
function ce(e3) {
  var o2 = k(e3), n2 = function(e4) {
    var o3 = E(e4) ? I(e4) : {};
    return {top: me(o3.borderTopWidth), right: me(o3.borderRightWidth), bottom: me(o3.borderBottomWidth), left: me(o3.borderLeftWidth)};
  }(e3), i2 = _(e3) === "html", a2 = O(e3), r2 = e3.clientWidth + n2.right, t2 = e3.clientHeight + n2.bottom;
  return i2 && o2.innerHeight - e3.clientHeight > 50 && (t2 = o2.innerHeight - n2.bottom), {top: i2 ? 0 : e3.clientTop, right: e3.clientLeft > n2.left ? n2.right : i2 ? o2.innerWidth - r2 - a2 : e3.offsetWidth - r2, bottom: i2 ? o2.innerHeight - t2 : e3.offsetHeight - t2, left: i2 ? a2 : e3.clientLeft};
}
function de(e3, o2) {
  var n2 = Boolean(o2.getRootNode && o2.getRootNode().host);
  if (e3.contains(o2))
    return true;
  if (n2) {
    var i2 = o2;
    do {
      if (i2 && e3.isSameNode(i2))
        return true;
      i2 = i2.parentNode || i2.host;
    } while (i2);
  }
  return false;
}
function ge(e3) {
  return Object.assign({}, e3, {left: e3.x, top: e3.y, right: e3.x + e3.width, bottom: e3.y + e3.height});
}
function ue(e3, o2) {
  return o2 === "viewport" ? ge(function(e4) {
    var o3 = k(e4), n2 = o3.visualViewport, i2 = o3.innerWidth, a2 = o3.innerHeight;
    return n2 && /iPhone|iPod|iPad/.test(navigator.platform) && (i2 = n2.width, a2 = n2.height), {width: i2, height: a2, x: 0, y: 0};
  }(e3)) : E(o2) ? w(o2) : ge(function(e4) {
    var o3 = k(e4), n2 = x(e4), i2 = P(z(e4), o3);
    return i2.height = Math.max(i2.height, o3.innerHeight), i2.width = Math.max(i2.width, o3.innerWidth), i2.x = -n2.scrollLeft, i2.y = -n2.scrollTop, i2;
  }(z(e3)));
}
function le(e3, o2, n2) {
  var i2 = o2 === "clippingParents" ? function(e4) {
    var o3 = T(e4), n3 = ["absolute", "fixed"].indexOf(I(e4).position) >= 0 && E(e4) ? B(e4) : e4;
    return C(n3) ? o3.filter(function(e5) {
      return C(e5) && de(e5, n3);
    }) : [];
  }(e3) : [].concat(o2), a2 = [].concat(i2, [n2]), r2 = a2[0], t2 = a2.reduce(function(o3, n3) {
    var i3 = ue(e3, n3), a3 = ce(E(n3) ? n3 : z(e3));
    return o3.top = Math.max(i3.top + a3.top, o3.top), o3.right = Math.min(i3.right - a3.right, o3.right), o3.bottom = Math.min(i3.bottom - a3.bottom, o3.bottom), o3.left = Math.max(i3.left + a3.left, o3.left), o3;
  }, ue(e3, r2));
  return t2.width = t2.right - t2.left, t2.height = t2.bottom - t2.top, t2.x = t2.left, t2.y = t2.top, t2;
}
function ve(e3) {
  return Object.assign({}, {top: 0, right: 0, bottom: 0, left: 0}, {}, e3);
}
function ye(e3, o2) {
  return o2.reduce(function(o3, n2) {
    return o3[n2] = e3, o3;
  }, {});
}
function fe(e3, o2) {
  o2 === void 0 && (o2 = {});
  var n2 = o2, i2 = n2.placement, a2 = i2 === void 0 ? e3.placement : i2, r2 = n2.boundary, t2 = r2 === void 0 ? "clippingParents" : r2, s2 = n2.rootBoundary, m2 = s2 === void 0 ? "viewport" : s2, c2 = n2.elementContext, d2 = c2 === void 0 ? "popper" : c2, g2 = n2.altBoundary, u2 = g2 !== void 0 && g2, l2 = n2.padding, v2 = l2 === void 0 ? 0 : l2, y2 = ve(typeof v2 != "number" ? v2 : ye(v2, H)), f2 = d2 === "popper" ? "reference" : "popper", j2 = e3.elements.reference, h2 = e3.rects.popper, p2 = e3.elements[u2 ? f2 : d2], b2 = le(C(p2) ? p2 : p2.contextElement || z(e3.elements.popper), t2, m2), k2 = w(j2), x2 = oe({reference: k2, element: h2, strategy: "absolute", placement: a2}), E2 = ge(Object.assign({}, h2, {}, x2)), _2 = d2 === "popper" ? E2 : k2, O2 = {top: b2.top - _2.top + y2.top, bottom: _2.bottom - b2.bottom + y2.bottom, left: b2.left - _2.left + y2.left, right: _2.right - b2.right + y2.right}, I2 = e3.modifiersData.offset;
  if (d2 === "popper" && I2) {
    var S2 = I2[a2];
    Object.keys(O2).forEach(function(e4) {
      var o3 = [q, R].indexOf(e4) >= 0 ? 1 : -1, n3 = [D, R].indexOf(e4) >= 0 ? "y" : "x";
      O2[e4] += S2[n3] * o3;
    });
  }
  return O2;
}
function je(e3, o2) {
  o2 === void 0 && (o2 = {});
  var n2 = o2, i2 = n2.placement, a2 = n2.boundary, r2 = n2.rootBoundary, t2 = n2.padding, s2 = n2.flipVariations, m2 = n2.allowedAutoPlacements, c2 = m2 === void 0 ? W : m2, d2 = Q(i2), g2 = (d2 ? s2 ? U : U.filter(function(e4) {
    return Q(e4) === d2;
  }) : H).filter(function(e4) {
    return c2.indexOf(e4) >= 0;
  }).reduce(function(o3, n3) {
    return o3[n3] = fe(e3, {placement: n3, boundary: a2, rootBoundary: r2, padding: t2})[G(n3)], o3;
  }, {});
  return Object.keys(g2).sort(function(e4, o3) {
    return g2[e4] - g2[o3];
  });
}
function he(e3, o2, n2) {
  return Math.max(e3, Math.min(o2, n2));
}
function pe(e3, o2, n2) {
  return n2 === void 0 && (n2 = {x: 0, y: 0}), {top: e3.top - o2.height - n2.y, right: e3.right - o2.width + n2.x, bottom: e3.bottom - o2.height + n2.y, left: e3.left - o2.width - n2.x};
}
function be(e3) {
  return [D, q, R, V].some(function(o2) {
    return e3[o2] >= 0;
  });
}
var we = $({defaultModifiers: [{name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: function(e3) {
  var o2 = e3.state, n2 = e3.instance, i2 = e3.options, a2 = i2.scroll, r2 = a2 === void 0 || a2, t2 = i2.resize, s2 = t2 === void 0 || t2, m2 = k(o2.elements.popper), c2 = [].concat(o2.scrollParents.reference, o2.scrollParents.popper);
  return r2 && c2.forEach(function(e4) {
    e4.addEventListener("scroll", n2.update, Z);
  }), s2 && m2.addEventListener("resize", n2.update, Z), function() {
    r2 && c2.forEach(function(e4) {
      e4.removeEventListener("scroll", n2.update, Z);
    }), s2 && m2.removeEventListener("resize", n2.update, Z);
  };
}, data: {}}, {name: "popperOffsets", enabled: true, phase: "read", fn: function(e3) {
  var o2 = e3.state, n2 = e3.name;
  o2.modifiersData[n2] = oe({reference: o2.rects.reference, element: o2.rects.popper, strategy: "absolute", placement: o2.placement});
}, data: {}}, {name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(e3) {
  var o2 = e3.state, n2 = e3.options, i2 = n2.gpuAcceleration, a2 = i2 === void 0 || i2, r2 = n2.adaptive, t2 = r2 === void 0 || r2, s2 = {placement: G(o2.placement), popper: o2.elements.popper, popperRect: o2.rects.popper, gpuAcceleration: a2};
  o2.modifiersData.popperOffsets != null && (o2.styles.popper = Object.assign({}, o2.styles.popper, {}, ie(Object.assign({}, s2, {offsets: o2.modifiersData.popperOffsets, position: o2.options.strategy, adaptive: t2})))), o2.modifiersData.arrow != null && (o2.styles.arrow = Object.assign({}, o2.styles.arrow, {}, ie(Object.assign({}, s2, {offsets: o2.modifiersData.arrow, position: "absolute", adaptive: false})))), o2.attributes.popper = Object.assign({}, o2.attributes.popper, {"data-popper-placement": o2.placement});
}, data: {}}, {name: "applyStyles", enabled: true, phase: "write", fn: function(e3) {
  var o2 = e3.state;
  Object.keys(o2.elements).forEach(function(e4) {
    var n2 = o2.styles[e4] || {}, i2 = o2.attributes[e4] || {}, a2 = o2.elements[e4];
    E(a2) && _(a2) && (Object.assign(a2.style, n2), Object.keys(i2).forEach(function(e5) {
      var o3 = i2[e5];
      o3 === false ? a2.removeAttribute(e5) : a2.setAttribute(e5, o3 === true ? "" : o3);
    }));
  });
}, effect: function(e3) {
  var o2 = e3.state, n2 = {popper: {position: o2.options.strategy, left: "0", top: "0", margin: "0"}, arrow: {position: "absolute"}, reference: {}};
  return Object.assign(o2.elements.popper.style, n2.popper), o2.elements.arrow && Object.assign(o2.elements.arrow.style, n2.arrow), function() {
    Object.keys(o2.elements).forEach(function(e4) {
      var i2 = o2.elements[e4], a2 = o2.attributes[e4] || {}, r2 = Object.keys(o2.styles.hasOwnProperty(e4) ? o2.styles[e4] : n2[e4]).reduce(function(e5, o3) {
        return e5[o3] = "", e5;
      }, {});
      E(i2) && _(i2) && (Object.assign(i2.style, r2), Object.keys(a2).forEach(function(e5) {
        i2.removeAttribute(e5);
      }));
    });
  };
}, requires: ["computeStyles"]}, {name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: function(e3) {
  var o2 = e3.state, n2 = e3.options, i2 = e3.name, a2 = n2.offset, r2 = a2 === void 0 ? [0, 0] : a2, t2 = W.reduce(function(e4, n3) {
    return e4[n3] = function(e5, o3, n4) {
      var i3 = G(e5), a3 = [V, D].indexOf(i3) >= 0 ? -1 : 1, r3 = typeof n4 == "function" ? n4(Object.assign({}, o3, {placement: e5})) : n4, t3 = r3[0], s3 = r3[1];
      return t3 = t3 || 0, s3 = (s3 || 0) * a3, [V, q].indexOf(i3) >= 0 ? {x: s3, y: t3} : {x: t3, y: s3};
    }(n3, o2.rects, r2), e4;
  }, {}), s2 = t2[o2.placement], m2 = s2.x, c2 = s2.y;
  o2.modifiersData.popperOffsets != null && (o2.modifiersData.popperOffsets.x += m2, o2.modifiersData.popperOffsets.y += c2), o2.modifiersData[i2] = t2;
}}, {name: "flip", enabled: true, phase: "main", fn: function(e3) {
  var o2 = e3.state, n2 = e3.options, i2 = e3.name;
  if (!o2.modifiersData[i2]._skip) {
    for (var a2 = n2.mainAxis, r2 = a2 === void 0 || a2, t2 = n2.altAxis, s2 = t2 === void 0 || t2, m2 = n2.fallbackPlacements, c2 = n2.padding, d2 = n2.boundary, g2 = n2.rootBoundary, u2 = n2.altBoundary, l2 = n2.flipVariations, v2 = l2 === void 0 || l2, y2 = n2.allowedAutoPlacements, f2 = o2.options.placement, j2 = G(f2), h2 = m2 || (j2 === f2 || !v2 ? [re(f2)] : function(e4) {
      if (G(e4) === "auto")
        return [];
      var o3 = re(e4);
      return [se(e4), o3, se(o3)];
    }(f2)), p2 = [f2].concat(h2).reduce(function(e4, n3) {
      return e4.concat(G(n3) === "auto" ? je(o2, {placement: n3, boundary: d2, rootBoundary: g2, padding: c2, flipVariations: v2, allowedAutoPlacements: y2}) : n3);
    }, []), b2 = o2.rects.reference, w2 = o2.rects.popper, k2 = new Map(), x2 = true, C2 = p2[0], E2 = 0; E2 < p2.length; E2++) {
      var _2 = p2[E2], z2 = G(_2), O2 = Q(_2) === "start", I2 = [D, R].indexOf(z2) >= 0, S2 = I2 ? "width" : "height", P2 = fe(o2, {placement: _2, boundary: d2, rootBoundary: g2, altBoundary: u2, padding: c2}), M2 = I2 ? O2 ? q : V : O2 ? R : D;
      b2[S2] > w2[S2] && (M2 = re(M2));
      var A2 = re(M2), L2 = [];
      if (r2 && L2.push(P2[z2] <= 0), s2 && L2.push(P2[M2] <= 0, P2[A2] <= 0), L2.every(function(e4) {
        return e4;
      })) {
        C2 = _2, x2 = false;
        break;
      }
      k2.set(_2, L2);
    }
    if (x2)
      for (var T2 = function(e4) {
        var o3 = p2.find(function(o4) {
          var n3 = k2.get(o4);
          if (n3)
            return n3.slice(0, e4).every(function(e5) {
              return e5;
            });
        });
        if (o3)
          return C2 = o3, "break";
      }, N2 = v2 ? 3 : 1; N2 > 0; N2--) {
        if (T2(N2) === "break")
          break;
      }
    o2.placement !== C2 && (o2.modifiersData[i2]._skip = true, o2.placement = C2, o2.reset = true);
  }
}, requiresIfExists: ["offset"], data: {_skip: false}}, {name: "preventOverflow", enabled: true, phase: "main", fn: function(e3) {
  var o2 = e3.state, n2 = e3.options, i2 = e3.name, a2 = n2.mainAxis, r2 = a2 === void 0 || a2, t2 = n2.altAxis, s2 = t2 !== void 0 && t2, m2 = n2.boundary, c2 = n2.rootBoundary, d2 = n2.altBoundary, g2 = n2.padding, u2 = n2.tether, l2 = u2 === void 0 || u2, v2 = n2.tetherOffset, y2 = v2 === void 0 ? 0 : v2, f2 = fe(o2, {boundary: m2, rootBoundary: c2, padding: g2, altBoundary: d2}), j2 = G(o2.placement), h2 = Q(o2.placement), p2 = !h2, b2 = ee(j2), w2 = b2 === "x" ? "y" : "x", k2 = o2.modifiersData.popperOffsets, x2 = o2.rects.reference, C2 = o2.rects.popper, E2 = typeof y2 == "function" ? y2(Object.assign({}, o2.rects, {placement: o2.placement})) : y2, _2 = {x: 0, y: 0};
  if (k2) {
    if (r2) {
      var z2 = b2 === "y" ? D : V, O2 = b2 === "y" ? R : q, I2 = b2 === "y" ? "height" : "width", S2 = k2[b2], P2 = k2[b2] + f2[z2], A2 = k2[b2] - f2[O2], L2 = l2 ? -C2[I2] / 2 : 0, T2 = h2 === "start" ? x2[I2] : C2[I2], N2 = h2 === "start" ? -C2[I2] : -x2[I2], F2 = o2.elements.arrow, H2 = l2 && F2 ? M(F2) : {width: 0, height: 0}, U2 = o2.modifiersData["arrow#persistent"] ? o2.modifiersData["arrow#persistent"].padding : {top: 0, right: 0, bottom: 0, left: 0}, W2 = U2[z2], K2 = U2[O2], J2 = he(0, x2[I2], H2[I2]), X2 = p2 ? x2[I2] / 2 - L2 - J2 - W2 - E2 : T2 - J2 - W2 - E2, Y2 = p2 ? -x2[I2] / 2 + L2 + J2 + K2 + E2 : N2 + J2 + K2 + E2, $2 = o2.elements.arrow && B(o2.elements.arrow), Z2 = $2 ? b2 === "y" ? $2.clientTop || 0 : $2.clientLeft || 0 : 0, oe2 = o2.modifiersData.offset ? o2.modifiersData.offset[o2.placement][b2] : 0, ne2 = k2[b2] + X2 - oe2 - Z2, ie2 = k2[b2] + Y2 - oe2, ae2 = he(l2 ? Math.min(P2, ne2) : P2, S2, l2 ? Math.max(A2, ie2) : A2);
      k2[b2] = ae2, _2[b2] = ae2 - S2;
    }
    if (s2) {
      var re2 = b2 === "x" ? D : V, te2 = b2 === "x" ? R : q, se2 = k2[w2], me2 = he(se2 + f2[re2], se2, se2 - f2[te2]);
      k2[w2] = me2, _2[w2] = me2 - se2;
    }
    o2.modifiersData[i2] = _2;
  }
}, requiresIfExists: ["offset"]}, {name: "arrow", enabled: true, phase: "main", fn: function(e3) {
  var o2, n2 = e3.state, i2 = e3.name, a2 = n2.elements.arrow, r2 = n2.modifiersData.popperOffsets, t2 = G(n2.placement), s2 = ee(t2), m2 = [V, q].indexOf(t2) >= 0 ? "height" : "width";
  if (a2 && r2) {
    var c2 = n2.modifiersData[i2 + "#persistent"].padding, d2 = M(a2), g2 = s2 === "y" ? D : V, u2 = s2 === "y" ? R : q, l2 = n2.rects.reference[m2] + n2.rects.reference[s2] - r2[s2] - n2.rects.popper[m2], v2 = r2[s2] - n2.rects.reference[s2], y2 = B(a2), f2 = y2 ? s2 === "y" ? y2.clientHeight || 0 : y2.clientWidth || 0 : 0, j2 = l2 / 2 - v2 / 2, h2 = c2[g2], p2 = f2 - d2[m2] - c2[u2], b2 = f2 / 2 - d2[m2] / 2 + j2, w2 = he(h2, b2, p2), k2 = s2;
    n2.modifiersData[i2] = ((o2 = {})[k2] = w2, o2.centerOffset = w2 - b2, o2);
  }
}, effect: function(e3) {
  var o2 = e3.state, n2 = e3.options, i2 = e3.name, a2 = n2.element, r2 = a2 === void 0 ? "[data-popper-arrow]" : a2, t2 = n2.padding, s2 = t2 === void 0 ? 0 : t2;
  r2 != null && (typeof r2 != "string" || (r2 = o2.elements.popper.querySelector(r2))) && de(o2.elements.popper, r2) && (o2.elements.arrow = r2, o2.modifiersData[i2 + "#persistent"] = {padding: ve(typeof s2 != "number" ? s2 : ye(s2, H))});
}, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"]}, {name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(e3) {
  var o2 = e3.state, n2 = e3.name, i2 = o2.rects.reference, a2 = o2.rects.popper, r2 = o2.modifiersData.preventOverflow, t2 = fe(o2, {elementContext: "reference"}), s2 = fe(o2, {altBoundary: true}), m2 = pe(t2, i2), c2 = pe(s2, a2, r2), d2 = be(m2), g2 = be(c2);
  o2.modifiersData[n2] = {referenceClippingOffsets: m2, popperEscapeOffsets: c2, isReferenceHidden: d2, hasPopperEscaped: g2}, o2.attributes.popper = Object.assign({}, o2.attributes.popper, {"data-popper-reference-hidden": d2, "data-popper-escaped": g2});
}}]}), ke = function() {
  var e3 = {base: "https://twemoji.maxcdn.com/v/12.1.2/", ext: ".png", size: "72x72", className: "emoji", convert: {fromCodePoint: function(e4) {
    var o3 = typeof e4 == "string" ? parseInt(e4, 16) : e4;
    if (o3 < 65536)
      return s2(o3);
    return s2(55296 + ((o3 -= 65536) >> 10), 56320 + (1023 & o3));
  }, toCodePoint: j2}, onerror: function() {
    this.parentNode && this.parentNode.replaceChild(m2(this.alt, false), this);
  }, parse: function(o3, n3) {
    n3 && typeof n3 != "function" || (n3 = {callback: n3});
    return (typeof o3 == "string" ? l2 : u2)(o3, {callback: n3.callback || c2, attributes: typeof n3.attributes == "function" ? n3.attributes : y2, base: typeof n3.base == "string" ? n3.base : e3.base, ext: n3.ext || e3.ext, size: n3.folder || (i3 = n3.size || e3.size, typeof i3 == "number" ? i3 + "x" + i3 : i3), className: n3.className || e3.className, onerror: n3.onerror || e3.onerror});
    var i3;
  }, replace: f2, test: function(e4) {
    n2.lastIndex = 0;
    var o3 = n2.test(e4);
    return n2.lastIndex = 0, o3;
  }}, o2 = {"&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"}, n2 = /(?:\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffb|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c\udffb|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udffb|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb\udffc]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udffd]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d])|(?:\ud83d[\udc68\udc69])(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f)|[#*0-9]\ufe0f?\u20e3|(?:[????\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a-\udc6d\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5\udeeb\udeec\udef4-\udefa\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd71\udd73-\udd76\udd7a-\udda2\udda5-\uddaa\uddae-\uddb4\uddb7\uddba\uddbc-\uddca\uddd0\uddde-\uddff\ude70-\ude73\ude78-\ude7a\ude80-\ude82\ude90-\ude95]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g, i2 = /\uFE0F/g, a2 = String.fromCharCode(8205), r2 = /[&<>'"]/g, t2 = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/, s2 = String.fromCharCode;
  return e3;
  function m2(e4, o3) {
    return document.createTextNode(o3 ? e4.replace(i2, "") : e4);
  }
  function c2(e4, o3) {
    return "".concat(o3.base, o3.size, "/", e4, o3.ext);
  }
  function d2(e4, o3) {
    for (var n3, i3, a3 = e4.childNodes, r3 = a3.length; r3--; )
      (i3 = (n3 = a3[r3]).nodeType) === 3 ? o3.push(n3) : i3 !== 1 || "ownerSVGElement" in n3 || t2.test(n3.nodeName.toLowerCase()) || d2(n3, o3);
    return o3;
  }
  function g2(e4) {
    return j2(e4.indexOf(a2) < 0 ? e4.replace(i2, "") : e4);
  }
  function u2(e4, o3) {
    for (var i3, a3, r3, t3, s3, c3, u3, l3, v3, y3, f3, j3, h2, p2 = d2(e4, []), b2 = p2.length; b2--; ) {
      for (r3 = false, t3 = document.createDocumentFragment(), c3 = (s3 = p2[b2]).nodeValue, l3 = 0; u3 = n2.exec(c3); ) {
        if ((v3 = u3.index) !== l3 && t3.appendChild(m2(c3.slice(l3, v3), true)), j3 = g2(f3 = u3[0]), l3 = v3 + f3.length, h2 = o3.callback(j3, o3), j3 && h2) {
          for (a3 in (y3 = new Image()).onerror = o3.onerror, y3.setAttribute("draggable", "false"), i3 = o3.attributes(f3, j3))
            i3.hasOwnProperty(a3) && a3.indexOf("on") !== 0 && !y3.hasAttribute(a3) && y3.setAttribute(a3, i3[a3]);
          y3.className = o3.className, y3.alt = f3, y3.src = h2, r3 = true, t3.appendChild(y3);
        }
        y3 || t3.appendChild(m2(f3, false)), y3 = null;
      }
      r3 && (l3 < c3.length && t3.appendChild(m2(c3.slice(l3), true)), s3.parentNode.replaceChild(t3, s3));
    }
    return e4;
  }
  function l2(e4, o3) {
    return f2(e4, function(e5) {
      var n3, i3, a3 = e5, t3 = g2(e5), s3 = o3.callback(t3, o3);
      if (t3 && s3) {
        for (i3 in a3 = "<img ".concat('class="', o3.className, '" ', 'draggable="false" ', 'alt="', e5, '"', ' src="', s3, '"'), n3 = o3.attributes(e5, t3))
          n3.hasOwnProperty(i3) && i3.indexOf("on") !== 0 && a3.indexOf(" " + i3 + "=") === -1 && (a3 = a3.concat(" ", i3, '="', n3[i3].replace(r2, v2), '"'));
        a3 = a3.concat("/>");
      }
      return a3;
    });
  }
  function v2(e4) {
    return o2[e4];
  }
  function y2() {
    return null;
  }
  function f2(e4, o3) {
    return String(e4).replace(n2, o3);
  }
  function j2(e4, o3) {
    for (var n3 = [], i3 = 0, a3 = 0, r3 = 0; r3 < e4.length; )
      i3 = e4.charCodeAt(r3++), a3 ? (n3.push((65536 + (a3 - 55296 << 10) + (i3 - 56320)).toString(16)), a3 = 0) : 55296 <= i3 && i3 <= 56319 ? a3 = i3 : n3.push(i3.toString(16));
    return n3.join(o3 || "-");
  }
}(), xe = {categories: ["smileys", "people", "animals", "food", "travel", "activities", "objects", "symbols", "flags"], emoji: [{emoji: "\u{1F600}", category: 0, name: "grinning face", version: "1.0"}, {emoji: "\u{1F603}", category: 0, name: "grinning face with big eyes", version: "1.0"}, {emoji: "\u{1F604}", category: 0, name: "grinning face with smiling eyes", version: "1.0"}, {emoji: "\u{1F601}", category: 0, name: "beaming face with smiling eyes", version: "1.0"}, {emoji: "\u{1F606}", category: 0, name: "grinning squinting face", version: "1.0"}, {emoji: "\u{1F605}", category: 0, name: "grinning face with sweat", version: "1.0"}, {emoji: "\u{1F923}", category: 0, name: "rolling on the floor laughing", version: "3.0"}, {emoji: "\u{1F602}", category: 0, name: "face with tears of joy", version: "1.0"}, {emoji: "\u{1F642}", category: 0, name: "slightly smiling face", version: "1.0"}, {emoji: "\u{1F643}", category: 0, name: "upside-down face", version: "1.0"}, {emoji: "\u{1F609}", category: 0, name: "winking face", version: "1.0"}, {emoji: "\u{1F60A}", category: 0, name: "smiling face with smiling eyes", version: "1.0"}, {emoji: "\u{1F607}", category: 0, name: "smiling face with halo", version: "1.0"}, {emoji: "\u{1F970}", category: 0, name: "smiling face with hearts", version: "11.0"}, {emoji: "\u{1F60D}", category: 0, name: "smiling face with heart-eyes", version: "1.0"}, {emoji: "\u{1F929}", category: 0, name: "star-struck", version: "5.0"}, {emoji: "\u{1F618}", category: 0, name: "face blowing a kiss", version: "1.0"}, {emoji: "\u{1F617}", category: 0, name: "kissing face", version: "1.0"}, {emoji: "\u263A\uFE0F", category: 0, name: "smiling face", version: "1.0"}, {emoji: "\u{1F61A}", category: 0, name: "kissing face with closed eyes", version: "1.0"}, {emoji: "\u{1F619}", category: 0, name: "kissing face with smiling eyes", version: "1.0"}, {emoji: "\u{1F972}", category: 0, name: "smiling face with tear", version: "13.0"}, {emoji: "\u{1F60B}", category: 0, name: "face savoring food", version: "1.0"}, {emoji: "\u{1F61B}", category: 0, name: "face with tongue", version: "1.0"}, {emoji: "\u{1F61C}", category: 0, name: "winking face with tongue", version: "1.0"}, {emoji: "\u{1F92A}", category: 0, name: "zany face", version: "5.0"}, {emoji: "\u{1F61D}", category: 0, name: "squinting face with tongue", version: "1.0"}, {emoji: "\u{1F911}", category: 0, name: "money-mouth face", version: "1.0"}, {emoji: "\u{1F917}", category: 0, name: "hugging face", version: "1.0"}, {emoji: "\u{1F92D}", category: 0, name: "face with hand over mouth", version: "5.0"}, {emoji: "\u{1F92B}", category: 0, name: "shushing face", version: "5.0"}, {emoji: "\u{1F914}", category: 0, name: "thinking face", version: "1.0"}, {emoji: "\u{1F910}", category: 0, name: "zipper-mouth face", version: "1.0"}, {emoji: "\u{1F928}", category: 0, name: "face with raised eyebrow", version: "5.0"}, {emoji: "\u{1F610}", category: 0, name: "neutral face", version: "1.0"}, {emoji: "\u{1F611}", category: 0, name: "expressionless face", version: "1.0"}, {emoji: "\u{1F636}", category: 0, name: "face without mouth", version: "1.0"}, {emoji: "\u{1F60F}", category: 0, name: "smirking face", version: "1.0"}, {emoji: "\u{1F612}", category: 0, name: "unamused face", version: "1.0"}, {emoji: "\u{1F644}", category: 0, name: "face with rolling eyes", version: "1.0"}, {emoji: "\u{1F62C}", category: 0, name: "grimacing face", version: "1.0"}, {emoji: "\u{1F925}", category: 0, name: "lying face", version: "3.0"}, {emoji: "\u{1F60C}", category: 0, name: "relieved face", version: "1.0"}, {emoji: "\u{1F614}", category: 0, name: "pensive face", version: "1.0"}, {emoji: "\u{1F62A}", category: 0, name: "sleepy face", version: "1.0"}, {emoji: "\u{1F924}", category: 0, name: "drooling face", version: "3.0"}, {emoji: "\u{1F634}", category: 0, name: "sleeping face", version: "1.0"}, {emoji: "\u{1F637}", category: 0, name: "face with medical mask", version: "1.0"}, {emoji: "\u{1F912}", category: 0, name: "face with thermometer", version: "1.0"}, {emoji: "\u{1F915}", category: 0, name: "face with head-bandage", version: "1.0"}, {emoji: "\u{1F922}", category: 0, name: "nauseated face", version: "3.0"}, {emoji: "\u{1F92E}", category: 0, name: "face vomiting", version: "5.0"}, {emoji: "\u{1F927}", category: 0, name: "sneezing face", version: "3.0"}, {emoji: "\u{1F975}", category: 0, name: "hot face", version: "11.0"}, {emoji: "\u{1F976}", category: 0, name: "cold face", version: "11.0"}, {emoji: "\u{1F974}", category: 0, name: "woozy face", version: "11.0"}, {emoji: "\u{1F635}", category: 0, name: "dizzy face", version: "1.0"}, {emoji: "\u{1F92F}", category: 0, name: "exploding head", version: "5.0"}, {emoji: "\u{1F920}", category: 0, name: "cowboy hat face", version: "3.0"}, {emoji: "\u{1F973}", category: 0, name: "partying face", version: "11.0"}, {emoji: "\u{1F978}", category: 0, name: "disguised face", version: "13.0"}, {emoji: "\u{1F60E}", category: 0, name: "smiling face with sunglasses", version: "1.0"}, {emoji: "\u{1F913}", category: 0, name: "nerd face", version: "1.0"}, {emoji: "\u{1F9D0}", category: 0, name: "face with monocle", version: "5.0"}, {emoji: "\u{1F615}", category: 0, name: "confused face", version: "1.0"}, {emoji: "\u{1F61F}", category: 0, name: "worried face", version: "1.0"}, {emoji: "\u{1F641}", category: 0, name: "slightly frowning face", version: "1.0"}, {emoji: "\u2639\uFE0F", category: 0, name: "frowning face", version: "1.0"}, {emoji: "\u{1F62E}", category: 0, name: "face with open mouth", version: "1.0"}, {emoji: "\u{1F62F}", category: 0, name: "hushed face", version: "1.0"}, {emoji: "\u{1F632}", category: 0, name: "astonished face", version: "1.0"}, {emoji: "\u{1F633}", category: 0, name: "flushed face", version: "1.0"}, {emoji: "\u{1F97A}", category: 0, name: "pleading face", version: "11.0"}, {emoji: "\u{1F626}", category: 0, name: "frowning face with open mouth", version: "1.0"}, {emoji: "\u{1F627}", category: 0, name: "anguished face", version: "1.0"}, {emoji: "\u{1F628}", category: 0, name: "fearful face", version: "1.0"}, {emoji: "\u{1F630}", category: 0, name: "anxious face with sweat", version: "1.0"}, {emoji: "\u{1F625}", category: 0, name: "sad but relieved face", version: "1.0"}, {emoji: "\u{1F622}", category: 0, name: "crying face", version: "1.0"}, {emoji: "\u{1F62D}", category: 0, name: "loudly crying face", version: "1.0"}, {emoji: "\u{1F631}", category: 0, name: "face screaming in fear", version: "1.0"}, {emoji: "\u{1F616}", category: 0, name: "confounded face", version: "1.0"}, {emoji: "\u{1F623}", category: 0, name: "persevering face", version: "1.0"}, {emoji: "\u{1F61E}", category: 0, name: "disappointed face", version: "1.0"}, {emoji: "\u{1F613}", category: 0, name: "downcast face with sweat", version: "1.0"}, {emoji: "\u{1F629}", category: 0, name: "weary face", version: "1.0"}, {emoji: "\u{1F62B}", category: 0, name: "tired face", version: "1.0"}, {emoji: "\u{1F971}", category: 0, name: "yawning face", version: "12.0"}, {emoji: "\u{1F624}", category: 0, name: "face with steam from nose", version: "1.0"}, {emoji: "\u{1F621}", category: 0, name: "pouting face", version: "1.0"}, {emoji: "\u{1F620}", category: 0, name: "angry face", version: "1.0"}, {emoji: "\u{1F92C}", category: 0, name: "face with symbols on mouth", version: "5.0"}, {emoji: "\u{1F608}", category: 0, name: "smiling face with horns", version: "1.0"}, {emoji: "\u{1F47F}", category: 0, name: "angry face with horns", version: "1.0"}, {emoji: "\u{1F480}", category: 0, name: "skull", version: "1.0"}, {emoji: "\u2620\uFE0F", category: 0, name: "skull and crossbones", version: "1.0"}, {emoji: "\u{1F4A9}", category: 0, name: "pile of poo", version: "1.0"}, {emoji: "\u{1F921}", category: 0, name: "clown face", version: "3.0"}, {emoji: "\u{1F479}", category: 0, name: "ogre", version: "1.0"}, {emoji: "\u{1F47A}", category: 0, name: "goblin", version: "1.0"}, {emoji: "\u{1F47B}", category: 0, name: "ghost", version: "1.0"}, {emoji: "\u{1F47D}", category: 0, name: "alien", version: "1.0"}, {emoji: "\u{1F47E}", category: 0, name: "alien monster", version: "1.0"}, {emoji: "\u{1F916}", category: 0, name: "robot", version: "1.0"}, {emoji: "\u{1F63A}", category: 0, name: "grinning cat", version: "1.0"}, {emoji: "\u{1F638}", category: 0, name: "grinning cat with smiling eyes", version: "1.0"}, {emoji: "\u{1F639}", category: 0, name: "cat with tears of joy", version: "1.0"}, {emoji: "\u{1F63B}", category: 0, name: "smiling cat with heart-eyes", version: "1.0"}, {emoji: "\u{1F63C}", category: 0, name: "cat with wry smile", version: "1.0"}, {emoji: "\u{1F63D}", category: 0, name: "kissing cat", version: "1.0"}, {emoji: "\u{1F640}", category: 0, name: "weary cat", version: "1.0"}, {emoji: "\u{1F63F}", category: 0, name: "crying cat", version: "1.0"}, {emoji: "\u{1F63E}", category: 0, name: "pouting cat", version: "1.0"}, {emoji: "\u{1F648}", category: 0, name: "see-no-evil monkey", version: "1.0"}, {emoji: "\u{1F649}", category: 0, name: "hear-no-evil monkey", version: "1.0"}, {emoji: "\u{1F64A}", category: 0, name: "speak-no-evil monkey", version: "1.0"}, {emoji: "\u{1F48B}", category: 0, name: "kiss mark", version: "1.0"}, {emoji: "\u{1F48C}", category: 0, name: "love letter", version: "1.0"}, {emoji: "\u{1F498}", category: 0, name: "heart with arrow", version: "1.0"}, {emoji: "\u{1F49D}", category: 0, name: "heart with ribbon", version: "1.0"}, {emoji: "\u{1F496}", category: 0, name: "sparkling heart", version: "1.0"}, {emoji: "\u{1F497}", category: 0, name: "growing heart", version: "1.0"}, {emoji: "\u{1F493}", category: 0, name: "beating heart", version: "1.0"}, {emoji: "\u{1F49E}", category: 0, name: "revolving hearts", version: "1.0"}, {emoji: "\u{1F495}", category: 0, name: "two hearts", version: "1.0"}, {emoji: "\u{1F49F}", category: 0, name: "heart decoration", version: "1.0"}, {emoji: "\u2763\uFE0F", category: 0, name: "heart exclamation", version: "1.0"}, {emoji: "\u{1F494}", category: 0, name: "broken heart", version: "1.0"}, {emoji: "\u2764\uFE0F", category: 0, name: "red heart", version: "1.0"}, {emoji: "\u{1F9E1}", category: 0, name: "orange heart", version: "5.0"}, {emoji: "\u{1F49B}", category: 0, name: "yellow heart", version: "1.0"}, {emoji: "\u{1F49A}", category: 0, name: "green heart", version: "1.0"}, {emoji: "\u{1F499}", category: 0, name: "blue heart", version: "1.0"}, {emoji: "\u{1F49C}", category: 0, name: "purple heart", version: "1.0"}, {emoji: "\u{1F90E}", category: 0, name: "brown heart", version: "12.0"}, {emoji: "\u{1F5A4}", category: 0, name: "black heart", version: "3.0"}, {emoji: "\u{1F90D}", category: 0, name: "white heart", version: "12.0"}, {emoji: "\u{1F4AF}", category: 0, name: "hundred points", version: "1.0"}, {emoji: "\u{1F4A2}", category: 0, name: "anger symbol", version: "1.0"}, {emoji: "\u{1F4A5}", category: 0, name: "collision", version: "1.0"}, {emoji: "\u{1F4AB}", category: 0, name: "dizzy", version: "1.0"}, {emoji: "\u{1F4A6}", category: 0, name: "sweat droplets", version: "1.0"}, {emoji: "\u{1F4A8}", category: 0, name: "dashing away", version: "1.0"}, {emoji: "\u{1F573}\uFE0F", category: 0, name: "hole", version: "1.0"}, {emoji: "\u{1F4A3}", category: 0, name: "bomb", version: "1.0"}, {emoji: "\u{1F4AC}", category: 0, name: "speech balloon", version: "1.0"}, {emoji: "\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F", category: 0, name: "eye in speech bubble", version: "2.0"}, {emoji: "\u{1F5E8}\uFE0F", category: 0, name: "left speech bubble", version: "2.0"}, {emoji: "\u{1F5EF}\uFE0F", category: 0, name: "right anger bubble", version: "1.0"}, {emoji: "\u{1F4AD}", category: 0, name: "thought balloon", version: "1.0"}, {emoji: "\u{1F4A4}", category: 0, name: "zzz", version: "1.0"}, {emoji: "\u{1F44B}", category: 1, name: "waving hand", variations: ["\u{1F44B}\u{1F3FB}", "\u{1F44B}\u{1F3FC}", "\u{1F44B}\u{1F3FD}", "\u{1F44B}\u{1F3FE}", "\u{1F44B}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F91A}", category: 1, name: "raised back of hand", variations: ["\u{1F91A}\u{1F3FB}", "\u{1F91A}\u{1F3FC}", "\u{1F91A}\u{1F3FD}", "\u{1F91A}\u{1F3FE}", "\u{1F91A}\u{1F3FF}"], version: "3.0"}, {emoji: "\u{1F590}\uFE0F", category: 1, name: "hand with fingers splayed", variations: ["\u{1F590}\u{1F3FB}", "\u{1F590}\u{1F3FC}", "\u{1F590}\u{1F3FD}", "\u{1F590}\u{1F3FE}", "\u{1F590}\u{1F3FF}"], version: "1.0"}, {emoji: "\u270B", category: 1, name: "raised hand", variations: ["\u270B\u{1F3FB}", "\u270B\u{1F3FC}", "\u270B\u{1F3FD}", "\u270B\u{1F3FE}", "\u270B\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F596}", category: 1, name: "vulcan salute", variations: ["\u{1F596}\u{1F3FB}", "\u{1F596}\u{1F3FC}", "\u{1F596}\u{1F3FD}", "\u{1F596}\u{1F3FE}", "\u{1F596}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F44C}", category: 1, name: "OK hand", variations: ["\u{1F44C}\u{1F3FB}", "\u{1F44C}\u{1F3FC}", "\u{1F44C}\u{1F3FD}", "\u{1F44C}\u{1F3FE}", "\u{1F44C}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F90C}", category: 1, name: "pinched fingers", variations: ["\u{1F90C}\u{1F3FB}", "\u{1F90C}\u{1F3FC}", "\u{1F90C}\u{1F3FD}", "\u{1F90C}\u{1F3FE}", "\u{1F90C}\u{1F3FF}"], version: "13.0"}, {emoji: "\u{1F90F}", category: 1, name: "pinching hand", variations: ["\u{1F90F}\u{1F3FB}", "\u{1F90F}\u{1F3FC}", "\u{1F90F}\u{1F3FD}", "\u{1F90F}\u{1F3FE}", "\u{1F90F}\u{1F3FF}"], version: "12.0"}, {emoji: "\u270C\uFE0F", category: 1, name: "victory hand", variations: ["\u270C\u{1F3FB}", "\u270C\u{1F3FC}", "\u270C\u{1F3FD}", "\u270C\u{1F3FE}", "\u270C\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F91E}", category: 1, name: "crossed fingers", variations: ["\u{1F91E}\u{1F3FB}", "\u{1F91E}\u{1F3FC}", "\u{1F91E}\u{1F3FD}", "\u{1F91E}\u{1F3FE}", "\u{1F91E}\u{1F3FF}"], version: "3.0"}, {emoji: "\u{1F91F}", category: 1, name: "love-you gesture", variations: ["\u{1F91F}\u{1F3FB}", "\u{1F91F}\u{1F3FC}", "\u{1F91F}\u{1F3FD}", "\u{1F91F}\u{1F3FE}", "\u{1F91F}\u{1F3FF}"], version: "5.0"}, {emoji: "\u{1F918}", category: 1, name: "sign of the horns", variations: ["\u{1F918}\u{1F3FB}", "\u{1F918}\u{1F3FC}", "\u{1F918}\u{1F3FD}", "\u{1F918}\u{1F3FE}", "\u{1F918}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F919}", category: 1, name: "call me hand", variations: ["\u{1F919}\u{1F3FB}", "\u{1F919}\u{1F3FC}", "\u{1F919}\u{1F3FD}", "\u{1F919}\u{1F3FE}", "\u{1F919}\u{1F3FF}"], version: "3.0"}, {emoji: "\u{1F448}", category: 1, name: "backhand index pointing left", variations: ["\u{1F448}\u{1F3FB}", "\u{1F448}\u{1F3FC}", "\u{1F448}\u{1F3FD}", "\u{1F448}\u{1F3FE}", "\u{1F448}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F449}", category: 1, name: "backhand index pointing right", variations: ["\u{1F449}\u{1F3FB}", "\u{1F449}\u{1F3FC}", "\u{1F449}\u{1F3FD}", "\u{1F449}\u{1F3FE}", "\u{1F449}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F446}", category: 1, name: "backhand index pointing up", variations: ["\u{1F446}\u{1F3FB}", "\u{1F446}\u{1F3FC}", "\u{1F446}\u{1F3FD}", "\u{1F446}\u{1F3FE}", "\u{1F446}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F595}", category: 1, name: "middle finger", variations: ["\u{1F595}\u{1F3FB}", "\u{1F595}\u{1F3FC}", "\u{1F595}\u{1F3FD}", "\u{1F595}\u{1F3FE}", "\u{1F595}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F447}", category: 1, name: "backhand index pointing down", variations: ["\u{1F447}\u{1F3FB}", "\u{1F447}\u{1F3FC}", "\u{1F447}\u{1F3FD}", "\u{1F447}\u{1F3FE}", "\u{1F447}\u{1F3FF}"], version: "1.0"}, {emoji: "\u261D\uFE0F", category: 1, name: "index pointing up", variations: ["\u261D\u{1F3FB}", "\u261D\u{1F3FC}", "\u261D\u{1F3FD}", "\u261D\u{1F3FE}", "\u261D\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F44D}", category: 1, name: "thumbs up", variations: ["\u{1F44D}\u{1F3FB}", "\u{1F44D}\u{1F3FC}", "\u{1F44D}\u{1F3FD}", "\u{1F44D}\u{1F3FE}", "\u{1F44D}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F44E}", category: 1, name: "thumbs down", variations: ["\u{1F44E}\u{1F3FB}", "\u{1F44E}\u{1F3FC}", "\u{1F44E}\u{1F3FD}", "\u{1F44E}\u{1F3FE}", "\u{1F44E}\u{1F3FF}"], version: "1.0"}, {emoji: "\u270A", category: 1, name: "raised fist", variations: ["\u270A\u{1F3FB}", "\u270A\u{1F3FC}", "\u270A\u{1F3FD}", "\u270A\u{1F3FE}", "\u270A\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F44A}", category: 1, name: "oncoming fist", variations: ["\u{1F44A}\u{1F3FB}", "\u{1F44A}\u{1F3FC}", "\u{1F44A}\u{1F3FD}", "\u{1F44A}\u{1F3FE}", "\u{1F44A}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F91B}", category: 1, name: "left-facing fist", variations: ["\u{1F91B}\u{1F3FB}", "\u{1F91B}\u{1F3FC}", "\u{1F91B}\u{1F3FD}", "\u{1F91B}\u{1F3FE}", "\u{1F91B}\u{1F3FF}"], version: "3.0"}, {emoji: "\u{1F91C}", category: 1, name: "right-facing fist", variations: ["\u{1F91C}\u{1F3FB}", "\u{1F91C}\u{1F3FC}", "\u{1F91C}\u{1F3FD}", "\u{1F91C}\u{1F3FE}", "\u{1F91C}\u{1F3FF}"], version: "3.0"}, {emoji: "\u{1F44F}", category: 1, name: "clapping hands", variations: ["\u{1F44F}\u{1F3FB}", "\u{1F44F}\u{1F3FC}", "\u{1F44F}\u{1F3FD}", "\u{1F44F}\u{1F3FE}", "\u{1F44F}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F64C}", category: 1, name: "raising hands", variations: ["\u{1F64C}\u{1F3FB}", "\u{1F64C}\u{1F3FC}", "\u{1F64C}\u{1F3FD}", "\u{1F64C}\u{1F3FE}", "\u{1F64C}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F450}", category: 1, name: "open hands", variations: ["\u{1F450}\u{1F3FB}", "\u{1F450}\u{1F3FC}", "\u{1F450}\u{1F3FD}", "\u{1F450}\u{1F3FE}", "\u{1F450}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F932}", category: 1, name: "palms up together", variations: ["\u{1F932}\u{1F3FB}", "\u{1F932}\u{1F3FC}", "\u{1F932}\u{1F3FD}", "\u{1F932}\u{1F3FE}", "\u{1F932}\u{1F3FF}"], version: "5.0"}, {emoji: "\u{1F91D}", category: 1, name: "handshake", version: "3.0"}, {emoji: "\u{1F64F}", category: 1, name: "folded hands", variations: ["\u{1F64F}\u{1F3FB}", "\u{1F64F}\u{1F3FC}", "\u{1F64F}\u{1F3FD}", "\u{1F64F}\u{1F3FE}", "\u{1F64F}\u{1F3FF}"], version: "1.0"}, {emoji: "\u270D\uFE0F", category: 1, name: "writing hand", variations: ["\u270D\u{1F3FB}", "\u270D\u{1F3FC}", "\u270D\u{1F3FD}", "\u270D\u{1F3FE}", "\u270D\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F485}", category: 1, name: "nail polish", variations: ["\u{1F485}\u{1F3FB}", "\u{1F485}\u{1F3FC}", "\u{1F485}\u{1F3FD}", "\u{1F485}\u{1F3FE}", "\u{1F485}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F933}", category: 1, name: "selfie", variations: ["\u{1F933}\u{1F3FB}", "\u{1F933}\u{1F3FC}", "\u{1F933}\u{1F3FD}", "\u{1F933}\u{1F3FE}", "\u{1F933}\u{1F3FF}"], version: "3.0"}, {emoji: "\u{1F4AA}", category: 1, name: "flexed biceps", variations: ["\u{1F4AA}\u{1F3FB}", "\u{1F4AA}\u{1F3FC}", "\u{1F4AA}\u{1F3FD}", "\u{1F4AA}\u{1F3FE}", "\u{1F4AA}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F9BE}", category: 1, name: "mechanical arm", version: "12.0"}, {emoji: "\u{1F9BF}", category: 1, name: "mechanical leg", version: "12.0"}, {emoji: "\u{1F9B5}", category: 1, name: "leg", variations: ["\u{1F9B5}\u{1F3FB}", "\u{1F9B5}\u{1F3FC}", "\u{1F9B5}\u{1F3FD}", "\u{1F9B5}\u{1F3FE}", "\u{1F9B5}\u{1F3FF}"], version: "11.0"}, {emoji: "\u{1F9B6}", category: 1, name: "foot", variations: ["\u{1F9B6}\u{1F3FB}", "\u{1F9B6}\u{1F3FC}", "\u{1F9B6}\u{1F3FD}", "\u{1F9B6}\u{1F3FE}", "\u{1F9B6}\u{1F3FF}"], version: "11.0"}, {emoji: "\u{1F442}", category: 1, name: "ear", variations: ["\u{1F442}\u{1F3FB}", "\u{1F442}\u{1F3FC}", "\u{1F442}\u{1F3FD}", "\u{1F442}\u{1F3FE}", "\u{1F442}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F9BB}", category: 1, name: "ear with hearing aid", variations: ["\u{1F9BB}\u{1F3FB}", "\u{1F9BB}\u{1F3FC}", "\u{1F9BB}\u{1F3FD}", "\u{1F9BB}\u{1F3FE}", "\u{1F9BB}\u{1F3FF}"], version: "12.0"}, {emoji: "\u{1F443}", category: 1, name: "nose", variations: ["\u{1F443}\u{1F3FB}", "\u{1F443}\u{1F3FC}", "\u{1F443}\u{1F3FD}", "\u{1F443}\u{1F3FE}", "\u{1F443}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F9E0}", category: 1, name: "brain", version: "5.0"}, {emoji: "\u{1FAC0}", category: 1, name: "anatomical heart", version: "13.0"}, {emoji: "\u{1FAC1}", category: 1, name: "lungs", version: "13.0"}, {emoji: "\u{1F9B7}", category: 1, name: "tooth", version: "11.0"}, {emoji: "\u{1F9B4}", category: 1, name: "bone", version: "11.0"}, {emoji: "\u{1F440}", category: 1, name: "eyes", version: "1.0"}, {emoji: "\u{1F441}\uFE0F", category: 1, name: "eye", version: "1.0"}, {emoji: "\u{1F445}", category: 1, name: "tongue", version: "1.0"}, {emoji: "\u{1F444}", category: 1, name: "mouth", version: "1.0"}, {emoji: "\u{1F476}", category: 1, name: "baby", variations: ["\u{1F476}\u{1F3FB}", "\u{1F476}\u{1F3FC}", "\u{1F476}\u{1F3FD}", "\u{1F476}\u{1F3FE}", "\u{1F476}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F9D2}", category: 1, name: "child", variations: ["\u{1F9D2}\u{1F3FB}", "\u{1F9D2}\u{1F3FC}", "\u{1F9D2}\u{1F3FD}", "\u{1F9D2}\u{1F3FE}", "\u{1F9D2}\u{1F3FF}"], version: "5.0"}, {emoji: "\u{1F466}", category: 1, name: "boy", variations: ["\u{1F466}\u{1F3FB}", "\u{1F466}\u{1F3FC}", "\u{1F466}\u{1F3FD}", "\u{1F466}\u{1F3FE}", "\u{1F466}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F467}", category: 1, name: "girl", variations: ["\u{1F467}\u{1F3FB}", "\u{1F467}\u{1F3FC}", "\u{1F467}\u{1F3FD}", "\u{1F467}\u{1F3FE}", "\u{1F467}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F9D1}", category: 1, name: "person", variations: ["\u{1F9D1}\u{1F3FB}", "\u{1F9D1}\u{1F3FC}", "\u{1F9D1}\u{1F3FD}", "\u{1F9D1}\u{1F3FE}", "\u{1F9D1}\u{1F3FF}"], version: "5.0"}, {emoji: "\u{1F471}", category: 1, name: "person with blond hair", variations: ["\u{1F471}\u{1F3FB}", "\u{1F471}\u{1F3FC}", "\u{1F471}\u{1F3FD}", "\u{1F471}\u{1F3FE}", "\u{1F471}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F468}", category: 1, name: "man", variations: ["\u{1F468}\u{1F3FB}", "\u{1F468}\u{1F3FC}", "\u{1F468}\u{1F3FD}", "\u{1F468}\u{1F3FE}", "\u{1F468}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F9D4}", category: 1, name: "man with beard", variations: ["\u{1F9D4}\u{1F3FB}", "\u{1F9D4}\u{1F3FC}", "\u{1F9D4}\u{1F3FD}", "\u{1F9D4}\u{1F3FE}", "\u{1F9D4}\u{1F3FF}"], version: "5.0"}, {emoji: "\u{1F468}\u200D\u{1F9B0}", category: 1, name: "man with red hair", variations: ["\u{1F468}\u{1F3FB}\u200D\u{1F9B0}", "\u{1F468}\u{1F3FC}\u200D\u{1F9B0}", "\u{1F468}\u{1F3FD}\u200D\u{1F9B0}", "\u{1F468}\u{1F3FE}\u200D\u{1F9B0}", "\u{1F468}\u{1F3FF}\u200D\u{1F9B0}"], version: "11.0"}, {emoji: "\u{1F468}\u200D\u{1F9B1}", category: 1, name: "man with curly hair", variations: ["\u{1F468}\u{1F3FB}\u200D\u{1F9B1}", "\u{1F468}\u{1F3FC}\u200D\u{1F9B1}", "\u{1F468}\u{1F3FD}\u200D\u{1F9B1}", "\u{1F468}\u{1F3FE}\u200D\u{1F9B1}", "\u{1F468}\u{1F3FF}\u200D\u{1F9B1}"], version: "11.0"}, {emoji: "\u{1F468}\u200D\u{1F9B3}", category: 1, name: "man with white hair", variations: ["\u{1F468}\u{1F3FB}\u200D\u{1F9B3}", "\u{1F468}\u{1F3FC}\u200D\u{1F9B3}", "\u{1F468}\u{1F3FD}\u200D\u{1F9B3}", "\u{1F468}\u{1F3FE}\u200D\u{1F9B3}", "\u{1F468}\u{1F3FF}\u200D\u{1F9B3}"], version: "11.0"}, {emoji: "\u{1F468}\u200D\u{1F9B2}", category: 1, name: "man with no hair", variations: ["\u{1F468}\u{1F3FB}\u200D\u{1F9B2}", "\u{1F468}\u{1F3FC}\u200D\u{1F9B2}", "\u{1F468}\u{1F3FD}\u200D\u{1F9B2}", "\u{1F468}\u{1F3FE}\u200D\u{1F9B2}", "\u{1F468}\u{1F3FF}\u200D\u{1F9B2}"], version: "11.0"}, {emoji: "\u{1F469}", category: 1, name: "woman", variations: ["\u{1F469}\u{1F3FB}", "\u{1F469}\u{1F3FC}", "\u{1F469}\u{1F3FD}", "\u{1F469}\u{1F3FE}", "\u{1F469}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F469}\u200D\u{1F9B0}", category: 1, name: "woman with red hair", variations: ["\u{1F469}\u{1F3FB}\u200D\u{1F9B0}", "\u{1F469}\u{1F3FC}\u200D\u{1F9B0}", "\u{1F469}\u{1F3FD}\u200D\u{1F9B0}", "\u{1F469}\u{1F3FE}\u200D\u{1F9B0}", "\u{1F469}\u{1F3FF}\u200D\u{1F9B0}"], version: "11.0"}, {emoji: "\u{1F9D1}\u200D\u{1F9B0}", category: 1, name: "person with red hair", variations: ["\u{1F9D1}\u{1F3FB}\u200D\u{1F9B0}", "\u{1F9D1}\u{1F3FC}\u200D\u{1F9B0}", "\u{1F9D1}\u{1F3FD}\u200D\u{1F9B0}", "\u{1F9D1}\u{1F3FE}\u200D\u{1F9B0}", "\u{1F9D1}\u{1F3FF}\u200D\u{1F9B0}"], version: "12.1"}, {emoji: "\u{1F469}\u200D\u{1F9B1}", category: 1, name: "woman with curly hair", variations: ["\u{1F469}\u{1F3FB}\u200D\u{1F9B1}", "\u{1F469}\u{1F3FC}\u200D\u{1F9B1}", "\u{1F469}\u{1F3FD}\u200D\u{1F9B1}", "\u{1F469}\u{1F3FE}\u200D\u{1F9B1}", "\u{1F469}\u{1F3FF}\u200D\u{1F9B1}"], version: "11.0"}, {emoji: "\u{1F9D1}\u200D\u{1F9B1}", category: 1, name: "person with curly hair", variations: ["\u{1F9D1}\u{1F3FB}\u200D\u{1F9B1}", "\u{1F9D1}\u{1F3FC}\u200D\u{1F9B1}", "\u{1F9D1}\u{1F3FD}\u200D\u{1F9B1}", "\u{1F9D1}\u{1F3FE}\u200D\u{1F9B1}", "\u{1F9D1}\u{1F3FF}\u200D\u{1F9B1}"], version: "12.1"}, {emoji: "\u{1F469}\u200D\u{1F9B3}", category: 1, name: "woman with white hair", variations: ["\u{1F469}\u{1F3FB}\u200D\u{1F9B3}", "\u{1F469}\u{1F3FC}\u200D\u{1F9B3}", "\u{1F469}\u{1F3FD}\u200D\u{1F9B3}", "\u{1F469}\u{1F3FE}\u200D\u{1F9B3}", "\u{1F469}\u{1F3FF}\u200D\u{1F9B3}"], version: "11.0"}, {emoji: "\u{1F9D1}\u200D\u{1F9B3}", category: 1, name: "person with white hair", variations: ["\u{1F9D1}\u{1F3FB}\u200D\u{1F9B3}", "\u{1F9D1}\u{1F3FC}\u200D\u{1F9B3}", "\u{1F9D1}\u{1F3FD}\u200D\u{1F9B3}", "\u{1F9D1}\u{1F3FE}\u200D\u{1F9B3}", "\u{1F9D1}\u{1F3FF}\u200D\u{1F9B3}"], version: "12.1"}, {emoji: "\u{1F469}\u200D\u{1F9B2}", category: 1, name: "woman with no hair", variations: ["\u{1F469}\u{1F3FB}\u200D\u{1F9B2}", "\u{1F469}\u{1F3FC}\u200D\u{1F9B2}", "\u{1F469}\u{1F3FD}\u200D\u{1F9B2}", "\u{1F469}\u{1F3FE}\u200D\u{1F9B2}", "\u{1F469}\u{1F3FF}\u200D\u{1F9B2}"], version: "11.0"}, {emoji: "\u{1F9D1}\u200D\u{1F9B2}", category: 1, name: "person with no hair", variations: ["\u{1F9D1}\u{1F3FB}\u200D\u{1F9B2}", "\u{1F9D1}\u{1F3FC}\u200D\u{1F9B2}", "\u{1F9D1}\u{1F3FD}\u200D\u{1F9B2}", "\u{1F9D1}\u{1F3FE}\u200D\u{1F9B2}", "\u{1F9D1}\u{1F3FF}\u200D\u{1F9B2}"], version: "12.1"}, {emoji: "\u{1F471}\u200D\u2640\uFE0F", category: 1, name: "woman with blond hair", variations: ["\u{1F471}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F471}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F471}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F471}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F471}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F471}\u200D\u2642\uFE0F", category: 1, name: "man with blond hair", variations: ["\u{1F471}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F471}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F471}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F471}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F471}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F9D3}", category: 1, name: "older person", variations: ["\u{1F9D3}\u{1F3FB}", "\u{1F9D3}\u{1F3FC}", "\u{1F9D3}\u{1F3FD}", "\u{1F9D3}\u{1F3FE}", "\u{1F9D3}\u{1F3FF}"], version: "5.0"}, {emoji: "\u{1F474}", category: 1, name: "old man", variations: ["\u{1F474}\u{1F3FB}", "\u{1F474}\u{1F3FC}", "\u{1F474}\u{1F3FD}", "\u{1F474}\u{1F3FE}", "\u{1F474}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F475}", category: 1, name: "old woman", variations: ["\u{1F475}\u{1F3FB}", "\u{1F475}\u{1F3FC}", "\u{1F475}\u{1F3FD}", "\u{1F475}\u{1F3FE}", "\u{1F475}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F64D}", category: 1, name: "person frowning", variations: ["\u{1F64D}\u{1F3FB}", "\u{1F64D}\u{1F3FC}", "\u{1F64D}\u{1F3FD}", "\u{1F64D}\u{1F3FE}", "\u{1F64D}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F64D}\u200D\u2642\uFE0F", category: 1, name: "man frowning", variations: ["\u{1F64D}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F64D}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F64D}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F64D}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F64D}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F64D}\u200D\u2640\uFE0F", category: 1, name: "woman frowning", variations: ["\u{1F64D}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F64D}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F64D}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F64D}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F64D}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F64E}", category: 1, name: "person pouting", variations: ["\u{1F64E}\u{1F3FB}", "\u{1F64E}\u{1F3FC}", "\u{1F64E}\u{1F3FD}", "\u{1F64E}\u{1F3FE}", "\u{1F64E}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F64E}\u200D\u2642\uFE0F", category: 1, name: "man pouting", variations: ["\u{1F64E}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F64E}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F64E}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F64E}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F64E}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F64E}\u200D\u2640\uFE0F", category: 1, name: "woman pouting", variations: ["\u{1F64E}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F64E}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F64E}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F64E}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F64E}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F645}", category: 1, name: "person gesturing NO", variations: ["\u{1F645}\u{1F3FB}", "\u{1F645}\u{1F3FC}", "\u{1F645}\u{1F3FD}", "\u{1F645}\u{1F3FE}", "\u{1F645}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F645}\u200D\u2642\uFE0F", category: 1, name: "man gesturing NO", variations: ["\u{1F645}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F645}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F645}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F645}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F645}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F645}\u200D\u2640\uFE0F", category: 1, name: "woman gesturing NO", variations: ["\u{1F645}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F645}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F645}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F645}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F645}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F646}", category: 1, name: "person gesturing OK", variations: ["\u{1F646}\u{1F3FB}", "\u{1F646}\u{1F3FC}", "\u{1F646}\u{1F3FD}", "\u{1F646}\u{1F3FE}", "\u{1F646}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F646}\u200D\u2642\uFE0F", category: 1, name: "man gesturing OK", variations: ["\u{1F646}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F646}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F646}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F646}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F646}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F646}\u200D\u2640\uFE0F", category: 1, name: "woman gesturing OK", variations: ["\u{1F646}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F646}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F646}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F646}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F646}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F481}", category: 1, name: "person tipping hand", variations: ["\u{1F481}\u{1F3FB}", "\u{1F481}\u{1F3FC}", "\u{1F481}\u{1F3FD}", "\u{1F481}\u{1F3FE}", "\u{1F481}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F481}\u200D\u2642\uFE0F", category: 1, name: "man tipping hand", variations: ["\u{1F481}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F481}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F481}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F481}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F481}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F481}\u200D\u2640\uFE0F", category: 1, name: "woman tipping hand", variations: ["\u{1F481}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F481}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F481}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F481}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F481}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F64B}", category: 1, name: "person raising hand", variations: ["\u{1F64B}\u{1F3FB}", "\u{1F64B}\u{1F3FC}", "\u{1F64B}\u{1F3FD}", "\u{1F64B}\u{1F3FE}", "\u{1F64B}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F64B}\u200D\u2642\uFE0F", category: 1, name: "man raising hand", variations: ["\u{1F64B}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F64B}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F64B}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F64B}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F64B}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F64B}\u200D\u2640\uFE0F", category: 1, name: "woman raising hand", variations: ["\u{1F64B}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F64B}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F64B}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F64B}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F64B}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F9CF}", category: 1, name: "deaf person", variations: ["\u{1F9CF}\u{1F3FB}", "\u{1F9CF}\u{1F3FC}", "\u{1F9CF}\u{1F3FD}", "\u{1F9CF}\u{1F3FE}", "\u{1F9CF}\u{1F3FF}"], version: "12.0"}, {emoji: "\u{1F9CF}\u200D\u2642\uFE0F", category: 1, name: "deaf man", variations: ["\u{1F9CF}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F9CF}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F9CF}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F9CF}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F9CF}\u{1F3FF}\u200D\u2642\uFE0F"], version: "12.0"}, {emoji: "\u{1F9CF}\u200D\u2640\uFE0F", category: 1, name: "deaf woman", variations: ["\u{1F9CF}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F9CF}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F9CF}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F9CF}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F9CF}\u{1F3FF}\u200D\u2640\uFE0F"], version: "12.0"}, {emoji: "\u{1F647}", category: 1, name: "person bowing", variations: ["\u{1F647}\u{1F3FB}", "\u{1F647}\u{1F3FC}", "\u{1F647}\u{1F3FD}", "\u{1F647}\u{1F3FE}", "\u{1F647}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F647}\u200D\u2642\uFE0F", category: 1, name: "man bowing", variations: ["\u{1F647}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F647}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F647}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F647}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F647}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F647}\u200D\u2640\uFE0F", category: 1, name: "woman bowing", variations: ["\u{1F647}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F647}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F647}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F647}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F647}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F926}", category: 1, name: "person facepalming", variations: ["\u{1F926}\u{1F3FB}", "\u{1F926}\u{1F3FC}", "\u{1F926}\u{1F3FD}", "\u{1F926}\u{1F3FE}", "\u{1F926}\u{1F3FF}"], version: "3.0"}, {emoji: "\u{1F926}\u200D\u2642\uFE0F", category: 1, name: "man facepalming", variations: ["\u{1F926}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F926}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F926}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F926}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F926}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F926}\u200D\u2640\uFE0F", category: 1, name: "woman facepalming", variations: ["\u{1F926}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F926}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F926}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F926}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F926}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F937}", category: 1, name: "person shrugging", variations: ["\u{1F937}\u{1F3FB}", "\u{1F937}\u{1F3FC}", "\u{1F937}\u{1F3FD}", "\u{1F937}\u{1F3FE}", "\u{1F937}\u{1F3FF}"], version: "3.0"}, {emoji: "\u{1F937}\u200D\u2642\uFE0F", category: 1, name: "man shrugging", variations: ["\u{1F937}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F937}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F937}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F937}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F937}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F937}\u200D\u2640\uFE0F", category: 1, name: "woman shrugging", variations: ["\u{1F937}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F937}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F937}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F937}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F937}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F9D1}\u200D\u2695\uFE0F", category: 1, name: "health worker", variations: ["\u{1F9D1}\u{1F3FB}\u200D\u2695\uFE0F", "\u{1F9D1}\u{1F3FC}\u200D\u2695\uFE0F", "\u{1F9D1}\u{1F3FD}\u200D\u2695\uFE0F", "\u{1F9D1}\u{1F3FE}\u200D\u2695\uFE0F", "\u{1F9D1}\u{1F3FF}\u200D\u2695\uFE0F"], version: "12.1"}, {emoji: "\u{1F468}\u200D\u2695\uFE0F", category: 1, name: "man health worker", variations: ["\u{1F468}\u{1F3FB}\u200D\u2695\uFE0F", "\u{1F468}\u{1F3FC}\u200D\u2695\uFE0F", "\u{1F468}\u{1F3FD}\u200D\u2695\uFE0F", "\u{1F468}\u{1F3FE}\u200D\u2695\uFE0F", "\u{1F468}\u{1F3FF}\u200D\u2695\uFE0F"], version: "4.0"}, {emoji: "\u{1F469}\u200D\u2695\uFE0F", category: 1, name: "woman health worker", variations: ["\u{1F469}\u{1F3FB}\u200D\u2695\uFE0F", "\u{1F469}\u{1F3FC}\u200D\u2695\uFE0F", "\u{1F469}\u{1F3FD}\u200D\u2695\uFE0F", "\u{1F469}\u{1F3FE}\u200D\u2695\uFE0F", "\u{1F469}\u{1F3FF}\u200D\u2695\uFE0F"], version: "4.0"}, {emoji: "\u{1F9D1}\u200D\u{1F393}", category: 1, name: "student", variations: ["\u{1F9D1}\u{1F3FB}\u200D\u{1F393}", "\u{1F9D1}\u{1F3FC}\u200D\u{1F393}", "\u{1F9D1}\u{1F3FD}\u200D\u{1F393}", "\u{1F9D1}\u{1F3FE}\u200D\u{1F393}", "\u{1F9D1}\u{1F3FF}\u200D\u{1F393}"], version: "12.1"}, {emoji: "\u{1F468}\u200D\u{1F393}", category: 1, name: "man student", variations: ["\u{1F468}\u{1F3FB}\u200D\u{1F393}", "\u{1F468}\u{1F3FC}\u200D\u{1F393}", "\u{1F468}\u{1F3FD}\u200D\u{1F393}", "\u{1F468}\u{1F3FE}\u200D\u{1F393}", "\u{1F468}\u{1F3FF}\u200D\u{1F393}"], version: "4.0"}, {emoji: "\u{1F469}\u200D\u{1F393}", category: 1, name: "woman student", variations: ["\u{1F469}\u{1F3FB}\u200D\u{1F393}", "\u{1F469}\u{1F3FC}\u200D\u{1F393}", "\u{1F469}\u{1F3FD}\u200D\u{1F393}", "\u{1F469}\u{1F3FE}\u200D\u{1F393}", "\u{1F469}\u{1F3FF}\u200D\u{1F393}"], version: "4.0"}, {emoji: "\u{1F9D1}\u200D\u{1F3EB}", category: 1, name: "teacher", variations: ["\u{1F9D1}\u{1F3FB}\u200D\u{1F3EB}", "\u{1F9D1}\u{1F3FC}\u200D\u{1F3EB}", "\u{1F9D1}\u{1F3FD}\u200D\u{1F3EB}", "\u{1F9D1}\u{1F3FE}\u200D\u{1F3EB}", "\u{1F9D1}\u{1F3FF}\u200D\u{1F3EB}"], version: "12.1"}, {emoji: "\u{1F468}\u200D\u{1F3EB}", category: 1, name: "man teacher", variations: ["\u{1F468}\u{1F3FB}\u200D\u{1F3EB}", "\u{1F468}\u{1F3FC}\u200D\u{1F3EB}", "\u{1F468}\u{1F3FD}\u200D\u{1F3EB}", "\u{1F468}\u{1F3FE}\u200D\u{1F3EB}", "\u{1F468}\u{1F3FF}\u200D\u{1F3EB}"], version: "4.0"}, {emoji: "\u{1F469}\u200D\u{1F3EB}", category: 1, name: "woman teacher", variations: ["\u{1F469}\u{1F3FB}\u200D\u{1F3EB}", "\u{1F469}\u{1F3FC}\u200D\u{1F3EB}", "\u{1F469}\u{1F3FD}\u200D\u{1F3EB}", "\u{1F469}\u{1F3FE}\u200D\u{1F3EB}", "\u{1F469}\u{1F3FF}\u200D\u{1F3EB}"], version: "4.0"}, {emoji: "\u{1F9D1}\u200D\u2696\uFE0F", category: 1, name: "judge", variations: ["\u{1F9D1}\u{1F3FB}\u200D\u2696\uFE0F", "\u{1F9D1}\u{1F3FC}\u200D\u2696\uFE0F", "\u{1F9D1}\u{1F3FD}\u200D\u2696\uFE0F", "\u{1F9D1}\u{1F3FE}\u200D\u2696\uFE0F", "\u{1F9D1}\u{1F3FF}\u200D\u2696\uFE0F"], version: "12.1"}, {emoji: "\u{1F468}\u200D\u2696\uFE0F", category: 1, name: "man judge", variations: ["\u{1F468}\u{1F3FB}\u200D\u2696\uFE0F", "\u{1F468}\u{1F3FC}\u200D\u2696\uFE0F", "\u{1F468}\u{1F3FD}\u200D\u2696\uFE0F", "\u{1F468}\u{1F3FE}\u200D\u2696\uFE0F", "\u{1F468}\u{1F3FF}\u200D\u2696\uFE0F"], version: "4.0"}, {emoji: "\u{1F469}\u200D\u2696\uFE0F", category: 1, name: "woman judge", variations: ["\u{1F469}\u{1F3FB}\u200D\u2696\uFE0F", "\u{1F469}\u{1F3FC}\u200D\u2696\uFE0F", "\u{1F469}\u{1F3FD}\u200D\u2696\uFE0F", "\u{1F469}\u{1F3FE}\u200D\u2696\uFE0F", "\u{1F469}\u{1F3FF}\u200D\u2696\uFE0F"], version: "4.0"}, {emoji: "\u{1F9D1}\u200D\u{1F33E}", category: 1, name: "farmer", variations: ["\u{1F9D1}\u{1F3FB}\u200D\u{1F33E}", "\u{1F9D1}\u{1F3FC}\u200D\u{1F33E}", "\u{1F9D1}\u{1F3FD}\u200D\u{1F33E}", "\u{1F9D1}\u{1F3FE}\u200D\u{1F33E}", "\u{1F9D1}\u{1F3FF}\u200D\u{1F33E}"], version: "12.1"}, {emoji: "\u{1F468}\u200D\u{1F33E}", category: 1, name: "man farmer", variations: ["\u{1F468}\u{1F3FB}\u200D\u{1F33E}", "\u{1F468}\u{1F3FC}\u200D\u{1F33E}", "\u{1F468}\u{1F3FD}\u200D\u{1F33E}", "\u{1F468}\u{1F3FE}\u200D\u{1F33E}", "\u{1F468}\u{1F3FF}\u200D\u{1F33E}"], version: "4.0"}, {emoji: "\u{1F469}\u200D\u{1F33E}", category: 1, name: "woman farmer", variations: ["\u{1F469}\u{1F3FB}\u200D\u{1F33E}", "\u{1F469}\u{1F3FC}\u200D\u{1F33E}", "\u{1F469}\u{1F3FD}\u200D\u{1F33E}", "\u{1F469}\u{1F3FE}\u200D\u{1F33E}", "\u{1F469}\u{1F3FF}\u200D\u{1F33E}"], version: "4.0"}, {emoji: "\u{1F9D1}\u200D\u{1F373}", category: 1, name: "cook", variations: ["\u{1F9D1}\u{1F3FB}\u200D\u{1F373}", "\u{1F9D1}\u{1F3FC}\u200D\u{1F373}", "\u{1F9D1}\u{1F3FD}\u200D\u{1F373}", "\u{1F9D1}\u{1F3FE}\u200D\u{1F373}", "\u{1F9D1}\u{1F3FF}\u200D\u{1F373}"], version: "12.1"}, {emoji: "\u{1F468}\u200D\u{1F373}", category: 1, name: "man cook", variations: ["\u{1F468}\u{1F3FB}\u200D\u{1F373}", "\u{1F468}\u{1F3FC}\u200D\u{1F373}", "\u{1F468}\u{1F3FD}\u200D\u{1F373}", "\u{1F468}\u{1F3FE}\u200D\u{1F373}", "\u{1F468}\u{1F3FF}\u200D\u{1F373}"], version: "4.0"}, {emoji: "\u{1F469}\u200D\u{1F373}", category: 1, name: "woman cook", variations: ["\u{1F469}\u{1F3FB}\u200D\u{1F373}", "\u{1F469}\u{1F3FC}\u200D\u{1F373}", "\u{1F469}\u{1F3FD}\u200D\u{1F373}", "\u{1F469}\u{1F3FE}\u200D\u{1F373}", "\u{1F469}\u{1F3FF}\u200D\u{1F373}"], version: "4.0"}, {emoji: "\u{1F9D1}\u200D\u{1F527}", category: 1, name: "mechanic", variations: ["\u{1F9D1}\u{1F3FB}\u200D\u{1F527}", "\u{1F9D1}\u{1F3FC}\u200D\u{1F527}", "\u{1F9D1}\u{1F3FD}\u200D\u{1F527}", "\u{1F9D1}\u{1F3FE}\u200D\u{1F527}", "\u{1F9D1}\u{1F3FF}\u200D\u{1F527}"], version: "12.1"}, {emoji: "\u{1F468}\u200D\u{1F527}", category: 1, name: "man mechanic", variations: ["\u{1F468}\u{1F3FB}\u200D\u{1F527}", "\u{1F468}\u{1F3FC}\u200D\u{1F527}", "\u{1F468}\u{1F3FD}\u200D\u{1F527}", "\u{1F468}\u{1F3FE}\u200D\u{1F527}", "\u{1F468}\u{1F3FF}\u200D\u{1F527}"], version: "4.0"}, {emoji: "\u{1F469}\u200D\u{1F527}", category: 1, name: "woman mechanic", variations: ["\u{1F469}\u{1F3FB}\u200D\u{1F527}", "\u{1F469}\u{1F3FC}\u200D\u{1F527}", "\u{1F469}\u{1F3FD}\u200D\u{1F527}", "\u{1F469}\u{1F3FE}\u200D\u{1F527}", "\u{1F469}\u{1F3FF}\u200D\u{1F527}"], version: "4.0"}, {emoji: "\u{1F9D1}\u200D\u{1F3ED}", category: 1, name: "factory worker", variations: ["\u{1F9D1}\u{1F3FB}\u200D\u{1F3ED}", "\u{1F9D1}\u{1F3FC}\u200D\u{1F3ED}", "\u{1F9D1}\u{1F3FD}\u200D\u{1F3ED}", "\u{1F9D1}\u{1F3FE}\u200D\u{1F3ED}", "\u{1F9D1}\u{1F3FF}\u200D\u{1F3ED}"], version: "12.1"}, {emoji: "\u{1F468}\u200D\u{1F3ED}", category: 1, name: "man factory worker", variations: ["\u{1F468}\u{1F3FB}\u200D\u{1F3ED}", "\u{1F468}\u{1F3FC}\u200D\u{1F3ED}", "\u{1F468}\u{1F3FD}\u200D\u{1F3ED}", "\u{1F468}\u{1F3FE}\u200D\u{1F3ED}", "\u{1F468}\u{1F3FF}\u200D\u{1F3ED}"], version: "4.0"}, {emoji: "\u{1F469}\u200D\u{1F3ED}", category: 1, name: "woman factory worker", variations: ["\u{1F469}\u{1F3FB}\u200D\u{1F3ED}", "\u{1F469}\u{1F3FC}\u200D\u{1F3ED}", "\u{1F469}\u{1F3FD}\u200D\u{1F3ED}", "\u{1F469}\u{1F3FE}\u200D\u{1F3ED}", "\u{1F469}\u{1F3FF}\u200D\u{1F3ED}"], version: "4.0"}, {emoji: "\u{1F9D1}\u200D\u{1F4BC}", category: 1, name: "office worker", variations: ["\u{1F9D1}\u{1F3FB}\u200D\u{1F4BC}", "\u{1F9D1}\u{1F3FC}\u200D\u{1F4BC}", "\u{1F9D1}\u{1F3FD}\u200D\u{1F4BC}", "\u{1F9D1}\u{1F3FE}\u200D\u{1F4BC}", "\u{1F9D1}\u{1F3FF}\u200D\u{1F4BC}"], version: "12.1"}, {emoji: "\u{1F468}\u200D\u{1F4BC}", category: 1, name: "man office worker", variations: ["\u{1F468}\u{1F3FB}\u200D\u{1F4BC}", "\u{1F468}\u{1F3FC}\u200D\u{1F4BC}", "\u{1F468}\u{1F3FD}\u200D\u{1F4BC}", "\u{1F468}\u{1F3FE}\u200D\u{1F4BC}", "\u{1F468}\u{1F3FF}\u200D\u{1F4BC}"], version: "4.0"}, {emoji: "\u{1F469}\u200D\u{1F4BC}", category: 1, name: "woman office worker", variations: ["\u{1F469}\u{1F3FB}\u200D\u{1F4BC}", "\u{1F469}\u{1F3FC}\u200D\u{1F4BC}", "\u{1F469}\u{1F3FD}\u200D\u{1F4BC}", "\u{1F469}\u{1F3FE}\u200D\u{1F4BC}", "\u{1F469}\u{1F3FF}\u200D\u{1F4BC}"], version: "4.0"}, {emoji: "\u{1F9D1}\u200D\u{1F52C}", category: 1, name: "scientist", variations: ["\u{1F9D1}\u{1F3FB}\u200D\u{1F52C}", "\u{1F9D1}\u{1F3FC}\u200D\u{1F52C}", "\u{1F9D1}\u{1F3FD}\u200D\u{1F52C}", "\u{1F9D1}\u{1F3FE}\u200D\u{1F52C}", "\u{1F9D1}\u{1F3FF}\u200D\u{1F52C}"], version: "12.1"}, {emoji: "\u{1F468}\u200D\u{1F52C}", category: 1, name: "man scientist", variations: ["\u{1F468}\u{1F3FB}\u200D\u{1F52C}", "\u{1F468}\u{1F3FC}\u200D\u{1F52C}", "\u{1F468}\u{1F3FD}\u200D\u{1F52C}", "\u{1F468}\u{1F3FE}\u200D\u{1F52C}", "\u{1F468}\u{1F3FF}\u200D\u{1F52C}"], version: "4.0"}, {emoji: "\u{1F469}\u200D\u{1F52C}", category: 1, name: "woman scientist", variations: ["\u{1F469}\u{1F3FB}\u200D\u{1F52C}", "\u{1F469}\u{1F3FC}\u200D\u{1F52C}", "\u{1F469}\u{1F3FD}\u200D\u{1F52C}", "\u{1F469}\u{1F3FE}\u200D\u{1F52C}", "\u{1F469}\u{1F3FF}\u200D\u{1F52C}"], version: "4.0"}, {emoji: "\u{1F9D1}\u200D\u{1F4BB}", category: 1, name: "technologist", variations: ["\u{1F9D1}\u{1F3FB}\u200D\u{1F4BB}", "\u{1F9D1}\u{1F3FC}\u200D\u{1F4BB}", "\u{1F9D1}\u{1F3FD}\u200D\u{1F4BB}", "\u{1F9D1}\u{1F3FE}\u200D\u{1F4BB}", "\u{1F9D1}\u{1F3FF}\u200D\u{1F4BB}"], version: "12.1"}, {emoji: "\u{1F468}\u200D\u{1F4BB}", category: 1, name: "man technologist", variations: ["\u{1F468}\u{1F3FB}\u200D\u{1F4BB}", "\u{1F468}\u{1F3FC}\u200D\u{1F4BB}", "\u{1F468}\u{1F3FD}\u200D\u{1F4BB}", "\u{1F468}\u{1F3FE}\u200D\u{1F4BB}", "\u{1F468}\u{1F3FF}\u200D\u{1F4BB}"], version: "4.0"}, {emoji: "\u{1F469}\u200D\u{1F4BB}", category: 1, name: "woman technologist", variations: ["\u{1F469}\u{1F3FB}\u200D\u{1F4BB}", "\u{1F469}\u{1F3FC}\u200D\u{1F4BB}", "\u{1F469}\u{1F3FD}\u200D\u{1F4BB}", "\u{1F469}\u{1F3FE}\u200D\u{1F4BB}", "\u{1F469}\u{1F3FF}\u200D\u{1F4BB}"], version: "4.0"}, {emoji: "\u{1F9D1}\u200D\u{1F3A4}", category: 1, name: "singer", variations: ["\u{1F9D1}\u{1F3FB}\u200D\u{1F3A4}", "\u{1F9D1}\u{1F3FC}\u200D\u{1F3A4}", "\u{1F9D1}\u{1F3FD}\u200D\u{1F3A4}", "\u{1F9D1}\u{1F3FE}\u200D\u{1F3A4}", "\u{1F9D1}\u{1F3FF}\u200D\u{1F3A4}"], version: "12.1"}, {emoji: "\u{1F468}\u200D\u{1F3A4}", category: 1, name: "man singer", variations: ["\u{1F468}\u{1F3FB}\u200D\u{1F3A4}", "\u{1F468}\u{1F3FC}\u200D\u{1F3A4}", "\u{1F468}\u{1F3FD}\u200D\u{1F3A4}", "\u{1F468}\u{1F3FE}\u200D\u{1F3A4}", "\u{1F468}\u{1F3FF}\u200D\u{1F3A4}"], version: "4.0"}, {emoji: "\u{1F469}\u200D\u{1F3A4}", category: 1, name: "woman singer", variations: ["\u{1F469}\u{1F3FB}\u200D\u{1F3A4}", "\u{1F469}\u{1F3FC}\u200D\u{1F3A4}", "\u{1F469}\u{1F3FD}\u200D\u{1F3A4}", "\u{1F469}\u{1F3FE}\u200D\u{1F3A4}", "\u{1F469}\u{1F3FF}\u200D\u{1F3A4}"], version: "4.0"}, {emoji: "\u{1F9D1}\u200D\u{1F3A8}", category: 1, name: "artist", variations: ["\u{1F9D1}\u{1F3FB}\u200D\u{1F3A8}", "\u{1F9D1}\u{1F3FC}\u200D\u{1F3A8}", "\u{1F9D1}\u{1F3FD}\u200D\u{1F3A8}", "\u{1F9D1}\u{1F3FE}\u200D\u{1F3A8}", "\u{1F9D1}\u{1F3FF}\u200D\u{1F3A8}"], version: "12.1"}, {emoji: "\u{1F468}\u200D\u{1F3A8}", category: 1, name: "man artist", variations: ["\u{1F468}\u{1F3FB}\u200D\u{1F3A8}", "\u{1F468}\u{1F3FC}\u200D\u{1F3A8}", "\u{1F468}\u{1F3FD}\u200D\u{1F3A8}", "\u{1F468}\u{1F3FE}\u200D\u{1F3A8}", "\u{1F468}\u{1F3FF}\u200D\u{1F3A8}"], version: "4.0"}, {emoji: "\u{1F469}\u200D\u{1F3A8}", category: 1, name: "woman artist", variations: ["\u{1F469}\u{1F3FB}\u200D\u{1F3A8}", "\u{1F469}\u{1F3FC}\u200D\u{1F3A8}", "\u{1F469}\u{1F3FD}\u200D\u{1F3A8}", "\u{1F469}\u{1F3FE}\u200D\u{1F3A8}", "\u{1F469}\u{1F3FF}\u200D\u{1F3A8}"], version: "4.0"}, {emoji: "\u{1F9D1}\u200D\u2708\uFE0F", category: 1, name: "pilot", variations: ["\u{1F9D1}\u{1F3FB}\u200D\u2708\uFE0F", "\u{1F9D1}\u{1F3FC}\u200D\u2708\uFE0F", "\u{1F9D1}\u{1F3FD}\u200D\u2708\uFE0F", "\u{1F9D1}\u{1F3FE}\u200D\u2708\uFE0F", "\u{1F9D1}\u{1F3FF}\u200D\u2708\uFE0F"], version: "12.1"}, {emoji: "\u{1F468}\u200D\u2708\uFE0F", category: 1, name: "man pilot", variations: ["\u{1F468}\u{1F3FB}\u200D\u2708\uFE0F", "\u{1F468}\u{1F3FC}\u200D\u2708\uFE0F", "\u{1F468}\u{1F3FD}\u200D\u2708\uFE0F", "\u{1F468}\u{1F3FE}\u200D\u2708\uFE0F", "\u{1F468}\u{1F3FF}\u200D\u2708\uFE0F"], version: "4.0"}, {emoji: "\u{1F469}\u200D\u2708\uFE0F", category: 1, name: "woman pilot", variations: ["\u{1F469}\u{1F3FB}\u200D\u2708\uFE0F", "\u{1F469}\u{1F3FC}\u200D\u2708\uFE0F", "\u{1F469}\u{1F3FD}\u200D\u2708\uFE0F", "\u{1F469}\u{1F3FE}\u200D\u2708\uFE0F", "\u{1F469}\u{1F3FF}\u200D\u2708\uFE0F"], version: "4.0"}, {emoji: "\u{1F9D1}\u200D\u{1F680}", category: 1, name: "astronaut", variations: ["\u{1F9D1}\u{1F3FB}\u200D\u{1F680}", "\u{1F9D1}\u{1F3FC}\u200D\u{1F680}", "\u{1F9D1}\u{1F3FD}\u200D\u{1F680}", "\u{1F9D1}\u{1F3FE}\u200D\u{1F680}", "\u{1F9D1}\u{1F3FF}\u200D\u{1F680}"], version: "12.1"}, {emoji: "\u{1F468}\u200D\u{1F680}", category: 1, name: "man astronaut", variations: ["\u{1F468}\u{1F3FB}\u200D\u{1F680}", "\u{1F468}\u{1F3FC}\u200D\u{1F680}", "\u{1F468}\u{1F3FD}\u200D\u{1F680}", "\u{1F468}\u{1F3FE}\u200D\u{1F680}", "\u{1F468}\u{1F3FF}\u200D\u{1F680}"], version: "4.0"}, {emoji: "\u{1F469}\u200D\u{1F680}", category: 1, name: "woman astronaut", variations: ["\u{1F469}\u{1F3FB}\u200D\u{1F680}", "\u{1F469}\u{1F3FC}\u200D\u{1F680}", "\u{1F469}\u{1F3FD}\u200D\u{1F680}", "\u{1F469}\u{1F3FE}\u200D\u{1F680}", "\u{1F469}\u{1F3FF}\u200D\u{1F680}"], version: "4.0"}, {emoji: "\u{1F9D1}\u200D\u{1F692}", category: 1, name: "firefighter", variations: ["\u{1F9D1}\u{1F3FB}\u200D\u{1F692}", "\u{1F9D1}\u{1F3FC}\u200D\u{1F692}", "\u{1F9D1}\u{1F3FD}\u200D\u{1F692}", "\u{1F9D1}\u{1F3FE}\u200D\u{1F692}", "\u{1F9D1}\u{1F3FF}\u200D\u{1F692}"], version: "12.1"}, {emoji: "\u{1F468}\u200D\u{1F692}", category: 1, name: "man firefighter", variations: ["\u{1F468}\u{1F3FB}\u200D\u{1F692}", "\u{1F468}\u{1F3FC}\u200D\u{1F692}", "\u{1F468}\u{1F3FD}\u200D\u{1F692}", "\u{1F468}\u{1F3FE}\u200D\u{1F692}", "\u{1F468}\u{1F3FF}\u200D\u{1F692}"], version: "4.0"}, {emoji: "\u{1F469}\u200D\u{1F692}", category: 1, name: "woman firefighter", variations: ["\u{1F469}\u{1F3FB}\u200D\u{1F692}", "\u{1F469}\u{1F3FC}\u200D\u{1F692}", "\u{1F469}\u{1F3FD}\u200D\u{1F692}", "\u{1F469}\u{1F3FE}\u200D\u{1F692}", "\u{1F469}\u{1F3FF}\u200D\u{1F692}"], version: "4.0"}, {emoji: "\u{1F46E}", category: 1, name: "police officer", variations: ["\u{1F46E}\u{1F3FB}", "\u{1F46E}\u{1F3FC}", "\u{1F46E}\u{1F3FD}", "\u{1F46E}\u{1F3FE}", "\u{1F46E}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F46E}\u200D\u2642\uFE0F", category: 1, name: "man police officer", variations: ["\u{1F46E}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F46E}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F46E}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F46E}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F46E}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F46E}\u200D\u2640\uFE0F", category: 1, name: "woman police officer", variations: ["\u{1F46E}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F46E}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F46E}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F46E}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F46E}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F575}\uFE0F", category: 1, name: "detective", variations: ["\u{1F575}\u{1F3FB}", "\u{1F575}\u{1F3FC}", "\u{1F575}\u{1F3FD}", "\u{1F575}\u{1F3FE}", "\u{1F575}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F575}\uFE0F\u200D\u2642\uFE0F", category: 1, name: "man detective", variations: ["\u{1F575}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F575}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F575}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F575}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F575}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F575}\uFE0F\u200D\u2640\uFE0F", category: 1, name: "woman detective", variations: ["\u{1F575}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F575}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F575}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F575}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F575}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F482}", category: 1, name: "guard", variations: ["\u{1F482}\u{1F3FB}", "\u{1F482}\u{1F3FC}", "\u{1F482}\u{1F3FD}", "\u{1F482}\u{1F3FE}", "\u{1F482}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F482}\u200D\u2642\uFE0F", category: 1, name: "man guard", variations: ["\u{1F482}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F482}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F482}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F482}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F482}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F482}\u200D\u2640\uFE0F", category: 1, name: "woman guard", variations: ["\u{1F482}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F482}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F482}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F482}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F482}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F977}", category: 1, name: "ninja", variations: ["\u{1F977}\u{1F3FB}", "\u{1F977}\u{1F3FC}", "\u{1F977}\u{1F3FD}", "\u{1F977}\u{1F3FE}", "\u{1F977}\u{1F3FF}"], version: "13.0"}, {emoji: "\u{1F477}", category: 1, name: "construction worker", variations: ["\u{1F477}\u{1F3FB}", "\u{1F477}\u{1F3FC}", "\u{1F477}\u{1F3FD}", "\u{1F477}\u{1F3FE}", "\u{1F477}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F477}\u200D\u2642\uFE0F", category: 1, name: "man construction worker", variations: ["\u{1F477}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F477}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F477}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F477}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F477}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F477}\u200D\u2640\uFE0F", category: 1, name: "woman construction worker", variations: ["\u{1F477}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F477}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F477}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F477}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F477}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F934}", category: 1, name: "prince", variations: ["\u{1F934}\u{1F3FB}", "\u{1F934}\u{1F3FC}", "\u{1F934}\u{1F3FD}", "\u{1F934}\u{1F3FE}", "\u{1F934}\u{1F3FF}"], version: "3.0"}, {emoji: "\u{1F478}", category: 1, name: "princess", variations: ["\u{1F478}\u{1F3FB}", "\u{1F478}\u{1F3FC}", "\u{1F478}\u{1F3FD}", "\u{1F478}\u{1F3FE}", "\u{1F478}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F473}", category: 1, name: "person wearing turban", variations: ["\u{1F473}\u{1F3FB}", "\u{1F473}\u{1F3FC}", "\u{1F473}\u{1F3FD}", "\u{1F473}\u{1F3FE}", "\u{1F473}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F473}\u200D\u2642\uFE0F", category: 1, name: "man wearing turban", variations: ["\u{1F473}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F473}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F473}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F473}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F473}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F473}\u200D\u2640\uFE0F", category: 1, name: "woman wearing turban", variations: ["\u{1F473}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F473}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F473}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F473}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F473}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F472}", category: 1, name: "person with skullcap", variations: ["\u{1F472}\u{1F3FB}", "\u{1F472}\u{1F3FC}", "\u{1F472}\u{1F3FD}", "\u{1F472}\u{1F3FE}", "\u{1F472}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F9D5}", category: 1, name: "woman with headscarf", variations: ["\u{1F9D5}\u{1F3FB}", "\u{1F9D5}\u{1F3FC}", "\u{1F9D5}\u{1F3FD}", "\u{1F9D5}\u{1F3FE}", "\u{1F9D5}\u{1F3FF}"], version: "5.0"}, {emoji: "\u{1F935}", category: 1, name: "person in tuxedo", variations: ["\u{1F935}\u{1F3FB}", "\u{1F935}\u{1F3FC}", "\u{1F935}\u{1F3FD}", "\u{1F935}\u{1F3FE}", "\u{1F935}\u{1F3FF}"], version: "3.0"}, {emoji: "\u{1F935}\u200D\u2642\uFE0F", category: 1, name: "man in tuxedo", variations: ["\u{1F935}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F935}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F935}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F935}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F935}\u{1F3FF}\u200D\u2642\uFE0F"], version: "13.0"}, {emoji: "\u{1F935}\u200D\u2640\uFE0F", category: 1, name: "woman in tuxedo", variations: ["\u{1F935}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F935}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F935}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F935}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F935}\u{1F3FF}\u200D\u2640\uFE0F"], version: "13.0"}, {emoji: "\u{1F470}", category: 1, name: "person with veil", variations: ["\u{1F470}\u{1F3FB}", "\u{1F470}\u{1F3FC}", "\u{1F470}\u{1F3FD}", "\u{1F470}\u{1F3FE}", "\u{1F470}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F470}\u200D\u2642\uFE0F", category: 1, name: "man with veil", variations: ["\u{1F470}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F470}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F470}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F470}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F470}\u{1F3FF}\u200D\u2642\uFE0F"], version: "13.0"}, {emoji: "\u{1F470}\u200D\u2640\uFE0F", category: 1, name: "woman with veil", variations: ["\u{1F470}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F470}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F470}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F470}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F470}\u{1F3FF}\u200D\u2640\uFE0F"], version: "13.0"}, {emoji: "\u{1F930}", category: 1, name: "pregnant woman", variations: ["\u{1F930}\u{1F3FB}", "\u{1F930}\u{1F3FC}", "\u{1F930}\u{1F3FD}", "\u{1F930}\u{1F3FE}", "\u{1F930}\u{1F3FF}"], version: "3.0"}, {emoji: "\u{1F931}", category: 1, name: "breast-feeding", variations: ["\u{1F931}\u{1F3FB}", "\u{1F931}\u{1F3FC}", "\u{1F931}\u{1F3FD}", "\u{1F931}\u{1F3FE}", "\u{1F931}\u{1F3FF}"], version: "5.0"}, {emoji: "\u{1F469}\u200D\u{1F37C}", category: 1, name: "woman feeding baby", variations: ["\u{1F469}\u{1F3FB}\u200D\u{1F37C}", "\u{1F469}\u{1F3FC}\u200D\u{1F37C}", "\u{1F469}\u{1F3FD}\u200D\u{1F37C}", "\u{1F469}\u{1F3FE}\u200D\u{1F37C}", "\u{1F469}\u{1F3FF}\u200D\u{1F37C}"], version: "13.0"}, {emoji: "\u{1F468}\u200D\u{1F37C}", category: 1, name: "man feeding baby", variations: ["\u{1F468}\u{1F3FB}\u200D\u{1F37C}", "\u{1F468}\u{1F3FC}\u200D\u{1F37C}", "\u{1F468}\u{1F3FD}\u200D\u{1F37C}", "\u{1F468}\u{1F3FE}\u200D\u{1F37C}", "\u{1F468}\u{1F3FF}\u200D\u{1F37C}"], version: "13.0"}, {emoji: "\u{1F9D1}\u200D\u{1F37C}", category: 1, name: "person feeding baby", variations: ["\u{1F9D1}\u{1F3FB}\u200D\u{1F37C}", "\u{1F9D1}\u{1F3FC}\u200D\u{1F37C}", "\u{1F9D1}\u{1F3FD}\u200D\u{1F37C}", "\u{1F9D1}\u{1F3FE}\u200D\u{1F37C}", "\u{1F9D1}\u{1F3FF}\u200D\u{1F37C}"], version: "13.0"}, {emoji: "\u{1F47C}", category: 1, name: "baby angel", variations: ["\u{1F47C}\u{1F3FB}", "\u{1F47C}\u{1F3FC}", "\u{1F47C}\u{1F3FD}", "\u{1F47C}\u{1F3FE}", "\u{1F47C}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F385}", category: 1, name: "Santa Claus", variations: ["\u{1F385}\u{1F3FB}", "\u{1F385}\u{1F3FC}", "\u{1F385}\u{1F3FD}", "\u{1F385}\u{1F3FE}", "\u{1F385}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F936}", category: 1, name: "Mrs. Claus", variations: ["\u{1F936}\u{1F3FB}", "\u{1F936}\u{1F3FC}", "\u{1F936}\u{1F3FD}", "\u{1F936}\u{1F3FE}", "\u{1F936}\u{1F3FF}"], version: "3.0"}, {emoji: "\u{1F9D1}\u200D\u{1F384}", category: 1, name: "mx claus", variations: ["\u{1F9D1}\u{1F3FB}\u200D\u{1F384}", "\u{1F9D1}\u{1F3FC}\u200D\u{1F384}", "\u{1F9D1}\u{1F3FD}\u200D\u{1F384}", "\u{1F9D1}\u{1F3FE}\u200D\u{1F384}", "\u{1F9D1}\u{1F3FF}\u200D\u{1F384}"], version: "13.0"}, {emoji: "\u{1F9B8}", category: 1, name: "superhero", variations: ["\u{1F9B8}\u{1F3FB}", "\u{1F9B8}\u{1F3FC}", "\u{1F9B8}\u{1F3FD}", "\u{1F9B8}\u{1F3FE}", "\u{1F9B8}\u{1F3FF}"], version: "11.0"}, {emoji: "\u{1F9B8}\u200D\u2642\uFE0F", category: 1, name: "man superhero", variations: ["\u{1F9B8}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F9B8}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F9B8}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F9B8}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F9B8}\u{1F3FF}\u200D\u2642\uFE0F"], version: "11.0"}, {emoji: "\u{1F9B8}\u200D\u2640\uFE0F", category: 1, name: "woman superhero", variations: ["\u{1F9B8}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F9B8}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F9B8}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F9B8}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F9B8}\u{1F3FF}\u200D\u2640\uFE0F"], version: "11.0"}, {emoji: "\u{1F9B9}", category: 1, name: "supervillain", variations: ["\u{1F9B9}\u{1F3FB}", "\u{1F9B9}\u{1F3FC}", "\u{1F9B9}\u{1F3FD}", "\u{1F9B9}\u{1F3FE}", "\u{1F9B9}\u{1F3FF}"], version: "11.0"}, {emoji: "\u{1F9B9}\u200D\u2642\uFE0F", category: 1, name: "man supervillain", variations: ["\u{1F9B9}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F9B9}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F9B9}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F9B9}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F9B9}\u{1F3FF}\u200D\u2642\uFE0F"], version: "11.0"}, {emoji: "\u{1F9B9}\u200D\u2640\uFE0F", category: 1, name: "woman supervillain", variations: ["\u{1F9B9}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F9B9}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F9B9}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F9B9}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F9B9}\u{1F3FF}\u200D\u2640\uFE0F"], version: "11.0"}, {emoji: "\u{1F9D9}", category: 1, name: "mage", variations: ["\u{1F9D9}\u{1F3FB}", "\u{1F9D9}\u{1F3FC}", "\u{1F9D9}\u{1F3FD}", "\u{1F9D9}\u{1F3FE}", "\u{1F9D9}\u{1F3FF}"], version: "5.0"}, {emoji: "\u{1F9D9}\u200D\u2642\uFE0F", category: 1, name: "man mage", variations: ["\u{1F9D9}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F9D9}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F9D9}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F9D9}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F9D9}\u{1F3FF}\u200D\u2642\uFE0F"], version: "5.0"}, {emoji: "\u{1F9D9}\u200D\u2640\uFE0F", category: 1, name: "woman mage", variations: ["\u{1F9D9}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F9D9}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F9D9}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F9D9}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F9D9}\u{1F3FF}\u200D\u2640\uFE0F"], version: "5.0"}, {emoji: "\u{1F9DA}", category: 1, name: "fairy", variations: ["\u{1F9DA}\u{1F3FB}", "\u{1F9DA}\u{1F3FC}", "\u{1F9DA}\u{1F3FD}", "\u{1F9DA}\u{1F3FE}", "\u{1F9DA}\u{1F3FF}"], version: "5.0"}, {emoji: "\u{1F9DA}\u200D\u2642\uFE0F", category: 1, name: "man fairy", variations: ["\u{1F9DA}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F9DA}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F9DA}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F9DA}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F9DA}\u{1F3FF}\u200D\u2642\uFE0F"], version: "5.0"}, {emoji: "\u{1F9DA}\u200D\u2640\uFE0F", category: 1, name: "woman fairy", variations: ["\u{1F9DA}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F9DA}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F9DA}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F9DA}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F9DA}\u{1F3FF}\u200D\u2640\uFE0F"], version: "5.0"}, {emoji: "\u{1F9DB}", category: 1, name: "vampire", variations: ["\u{1F9DB}\u{1F3FB}", "\u{1F9DB}\u{1F3FC}", "\u{1F9DB}\u{1F3FD}", "\u{1F9DB}\u{1F3FE}", "\u{1F9DB}\u{1F3FF}"], version: "5.0"}, {emoji: "\u{1F9DB}\u200D\u2642\uFE0F", category: 1, name: "man vampire", variations: ["\u{1F9DB}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F9DB}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F9DB}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F9DB}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F9DB}\u{1F3FF}\u200D\u2642\uFE0F"], version: "5.0"}, {emoji: "\u{1F9DB}\u200D\u2640\uFE0F", category: 1, name: "woman vampire", variations: ["\u{1F9DB}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F9DB}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F9DB}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F9DB}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F9DB}\u{1F3FF}\u200D\u2640\uFE0F"], version: "5.0"}, {emoji: "\u{1F9DC}", category: 1, name: "merperson", variations: ["\u{1F9DC}\u{1F3FB}", "\u{1F9DC}\u{1F3FC}", "\u{1F9DC}\u{1F3FD}", "\u{1F9DC}\u{1F3FE}", "\u{1F9DC}\u{1F3FF}"], version: "5.0"}, {emoji: "\u{1F9DC}\u200D\u2642\uFE0F", category: 1, name: "merman", variations: ["\u{1F9DC}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F9DC}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F9DC}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F9DC}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F9DC}\u{1F3FF}\u200D\u2642\uFE0F"], version: "5.0"}, {emoji: "\u{1F9DC}\u200D\u2640\uFE0F", category: 1, name: "mermaid", variations: ["\u{1F9DC}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F9DC}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F9DC}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F9DC}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F9DC}\u{1F3FF}\u200D\u2640\uFE0F"], version: "5.0"}, {emoji: "\u{1F9DD}", category: 1, name: "elf", variations: ["\u{1F9DD}\u{1F3FB}", "\u{1F9DD}\u{1F3FC}", "\u{1F9DD}\u{1F3FD}", "\u{1F9DD}\u{1F3FE}", "\u{1F9DD}\u{1F3FF}"], version: "5.0"}, {emoji: "\u{1F9DD}\u200D\u2642\uFE0F", category: 1, name: "man elf", variations: ["\u{1F9DD}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F9DD}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F9DD}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F9DD}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F9DD}\u{1F3FF}\u200D\u2642\uFE0F"], version: "5.0"}, {emoji: "\u{1F9DD}\u200D\u2640\uFE0F", category: 1, name: "woman elf", variations: ["\u{1F9DD}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F9DD}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F9DD}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F9DD}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F9DD}\u{1F3FF}\u200D\u2640\uFE0F"], version: "5.0"}, {emoji: "\u{1F9DE}", category: 1, name: "genie", version: "5.0"}, {emoji: "\u{1F9DE}\u200D\u2642\uFE0F", category: 1, name: "man genie", version: "5.0"}, {emoji: "\u{1F9DE}\u200D\u2640\uFE0F", category: 1, name: "woman genie", version: "5.0"}, {emoji: "\u{1F9DF}", category: 1, name: "zombie", version: "5.0"}, {emoji: "\u{1F9DF}\u200D\u2642\uFE0F", category: 1, name: "man zombie", version: "5.0"}, {emoji: "\u{1F9DF}\u200D\u2640\uFE0F", category: 1, name: "woman zombie", version: "5.0"}, {emoji: "\u{1F486}", category: 1, name: "person getting massage", variations: ["\u{1F486}\u{1F3FB}", "\u{1F486}\u{1F3FC}", "\u{1F486}\u{1F3FD}", "\u{1F486}\u{1F3FE}", "\u{1F486}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F486}\u200D\u2642\uFE0F", category: 1, name: "man getting massage", variations: ["\u{1F486}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F486}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F486}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F486}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F486}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F486}\u200D\u2640\uFE0F", category: 1, name: "woman getting massage", variations: ["\u{1F486}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F486}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F486}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F486}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F486}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F487}", category: 1, name: "person getting haircut", variations: ["\u{1F487}\u{1F3FB}", "\u{1F487}\u{1F3FC}", "\u{1F487}\u{1F3FD}", "\u{1F487}\u{1F3FE}", "\u{1F487}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F487}\u200D\u2642\uFE0F", category: 1, name: "man getting haircut", variations: ["\u{1F487}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F487}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F487}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F487}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F487}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F487}\u200D\u2640\uFE0F", category: 1, name: "woman getting haircut", variations: ["\u{1F487}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F487}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F487}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F487}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F487}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F6B6}", category: 1, name: "person walking", variations: ["\u{1F6B6}\u{1F3FB}", "\u{1F6B6}\u{1F3FC}", "\u{1F6B6}\u{1F3FD}", "\u{1F6B6}\u{1F3FE}", "\u{1F6B6}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F6B6}\u200D\u2642\uFE0F", category: 1, name: "man walking", variations: ["\u{1F6B6}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F6B6}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F6B6}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F6B6}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F6B6}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F6B6}\u200D\u2640\uFE0F", category: 1, name: "woman walking", variations: ["\u{1F6B6}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F6B6}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F6B6}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F6B6}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F6B6}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F9CD}", category: 1, name: "person standing", variations: ["\u{1F9CD}\u{1F3FB}", "\u{1F9CD}\u{1F3FC}", "\u{1F9CD}\u{1F3FD}", "\u{1F9CD}\u{1F3FE}", "\u{1F9CD}\u{1F3FF}"], version: "12.0"}, {emoji: "\u{1F9CD}\u200D\u2642\uFE0F", category: 1, name: "man standing", variations: ["\u{1F9CD}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F9CD}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F9CD}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F9CD}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F9CD}\u{1F3FF}\u200D\u2642\uFE0F"], version: "12.0"}, {emoji: "\u{1F9CD}\u200D\u2640\uFE0F", category: 1, name: "woman standing", variations: ["\u{1F9CD}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F9CD}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F9CD}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F9CD}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F9CD}\u{1F3FF}\u200D\u2640\uFE0F"], version: "12.0"}, {emoji: "\u{1F9CE}", category: 1, name: "person kneeling", variations: ["\u{1F9CE}\u{1F3FB}", "\u{1F9CE}\u{1F3FC}", "\u{1F9CE}\u{1F3FD}", "\u{1F9CE}\u{1F3FE}", "\u{1F9CE}\u{1F3FF}"], version: "12.0"}, {emoji: "\u{1F9CE}\u200D\u2642\uFE0F", category: 1, name: "man kneeling", variations: ["\u{1F9CE}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F9CE}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F9CE}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F9CE}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F9CE}\u{1F3FF}\u200D\u2642\uFE0F"], version: "12.0"}, {emoji: "\u{1F9CE}\u200D\u2640\uFE0F", category: 1, name: "woman kneeling", variations: ["\u{1F9CE}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F9CE}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F9CE}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F9CE}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F9CE}\u{1F3FF}\u200D\u2640\uFE0F"], version: "12.0"}, {emoji: "\u{1F9D1}\u200D\u{1F9AF}", category: 1, name: "person with white cane", variations: ["\u{1F9D1}\u{1F3FB}\u200D\u{1F9AF}", "\u{1F9D1}\u{1F3FC}\u200D\u{1F9AF}", "\u{1F9D1}\u{1F3FD}\u200D\u{1F9AF}", "\u{1F9D1}\u{1F3FE}\u200D\u{1F9AF}", "\u{1F9D1}\u{1F3FF}\u200D\u{1F9AF}"], version: "12.1"}, {emoji: "\u{1F468}\u200D\u{1F9AF}", category: 1, name: "man with white cane", variations: ["\u{1F468}\u{1F3FB}\u200D\u{1F9AF}", "\u{1F468}\u{1F3FC}\u200D\u{1F9AF}", "\u{1F468}\u{1F3FD}\u200D\u{1F9AF}", "\u{1F468}\u{1F3FE}\u200D\u{1F9AF}", "\u{1F468}\u{1F3FF}\u200D\u{1F9AF}"], version: "12.0"}, {emoji: "\u{1F469}\u200D\u{1F9AF}", category: 1, name: "woman with white cane", variations: ["\u{1F469}\u{1F3FB}\u200D\u{1F9AF}", "\u{1F469}\u{1F3FC}\u200D\u{1F9AF}", "\u{1F469}\u{1F3FD}\u200D\u{1F9AF}", "\u{1F469}\u{1F3FE}\u200D\u{1F9AF}", "\u{1F469}\u{1F3FF}\u200D\u{1F9AF}"], version: "12.0"}, {emoji: "\u{1F9D1}\u200D\u{1F9BC}", category: 1, name: "person in motorized wheelchair", variations: ["\u{1F9D1}\u{1F3FB}\u200D\u{1F9BC}", "\u{1F9D1}\u{1F3FC}\u200D\u{1F9BC}", "\u{1F9D1}\u{1F3FD}\u200D\u{1F9BC}", "\u{1F9D1}\u{1F3FE}\u200D\u{1F9BC}", "\u{1F9D1}\u{1F3FF}\u200D\u{1F9BC}"], version: "12.1"}, {emoji: "\u{1F468}\u200D\u{1F9BC}", category: 1, name: "man in motorized wheelchair", variations: ["\u{1F468}\u{1F3FB}\u200D\u{1F9BC}", "\u{1F468}\u{1F3FC}\u200D\u{1F9BC}", "\u{1F468}\u{1F3FD}\u200D\u{1F9BC}", "\u{1F468}\u{1F3FE}\u200D\u{1F9BC}", "\u{1F468}\u{1F3FF}\u200D\u{1F9BC}"], version: "12.0"}, {emoji: "\u{1F469}\u200D\u{1F9BC}", category: 1, name: "woman in motorized wheelchair", variations: ["\u{1F469}\u{1F3FB}\u200D\u{1F9BC}", "\u{1F469}\u{1F3FC}\u200D\u{1F9BC}", "\u{1F469}\u{1F3FD}\u200D\u{1F9BC}", "\u{1F469}\u{1F3FE}\u200D\u{1F9BC}", "\u{1F469}\u{1F3FF}\u200D\u{1F9BC}"], version: "12.0"}, {emoji: "\u{1F9D1}\u200D\u{1F9BD}", category: 1, name: "person in manual wheelchair", variations: ["\u{1F9D1}\u{1F3FB}\u200D\u{1F9BD}", "\u{1F9D1}\u{1F3FC}\u200D\u{1F9BD}", "\u{1F9D1}\u{1F3FD}\u200D\u{1F9BD}", "\u{1F9D1}\u{1F3FE}\u200D\u{1F9BD}", "\u{1F9D1}\u{1F3FF}\u200D\u{1F9BD}"], version: "12.1"}, {emoji: "\u{1F468}\u200D\u{1F9BD}", category: 1, name: "man in manual wheelchair", variations: ["\u{1F468}\u{1F3FB}\u200D\u{1F9BD}", "\u{1F468}\u{1F3FC}\u200D\u{1F9BD}", "\u{1F468}\u{1F3FD}\u200D\u{1F9BD}", "\u{1F468}\u{1F3FE}\u200D\u{1F9BD}", "\u{1F468}\u{1F3FF}\u200D\u{1F9BD}"], version: "12.0"}, {emoji: "\u{1F469}\u200D\u{1F9BD}", category: 1, name: "woman in manual wheelchair", variations: ["\u{1F469}\u{1F3FB}\u200D\u{1F9BD}", "\u{1F469}\u{1F3FC}\u200D\u{1F9BD}", "\u{1F469}\u{1F3FD}\u200D\u{1F9BD}", "\u{1F469}\u{1F3FE}\u200D\u{1F9BD}", "\u{1F469}\u{1F3FF}\u200D\u{1F9BD}"], version: "12.0"}, {emoji: "\u{1F3C3}", category: 1, name: "person running", variations: ["\u{1F3C3}\u{1F3FB}", "\u{1F3C3}\u{1F3FC}", "\u{1F3C3}\u{1F3FD}", "\u{1F3C3}\u{1F3FE}", "\u{1F3C3}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F3C3}\u200D\u2642\uFE0F", category: 1, name: "man running", variations: ["\u{1F3C3}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F3C3}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F3C3}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F3C3}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F3C3}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F3C3}\u200D\u2640\uFE0F", category: 1, name: "woman running", variations: ["\u{1F3C3}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F3C3}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F3C3}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F3C3}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F3C3}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F483}", category: 1, name: "woman dancing", variations: ["\u{1F483}\u{1F3FB}", "\u{1F483}\u{1F3FC}", "\u{1F483}\u{1F3FD}", "\u{1F483}\u{1F3FE}", "\u{1F483}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F57A}", category: 1, name: "man dancing", variations: ["\u{1F57A}\u{1F3FB}", "\u{1F57A}\u{1F3FC}", "\u{1F57A}\u{1F3FD}", "\u{1F57A}\u{1F3FE}", "\u{1F57A}\u{1F3FF}"], version: "3.0"}, {emoji: "\u{1F574}\uFE0F", category: 1, name: "person in suit levitating", variations: ["\u{1F574}\u{1F3FB}", "\u{1F574}\u{1F3FC}", "\u{1F574}\u{1F3FD}", "\u{1F574}\u{1F3FE}", "\u{1F574}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F46F}", category: 1, name: "people with bunny ears", version: "1.0"}, {emoji: "\u{1F46F}\u200D\u2642\uFE0F", category: 1, name: "men with bunny ears", version: "4.0"}, {emoji: "\u{1F46F}\u200D\u2640\uFE0F", category: 1, name: "women with bunny ears", version: "4.0"}, {emoji: "\u{1F9D6}", category: 1, name: "person in steamy room", variations: ["\u{1F9D6}\u{1F3FB}", "\u{1F9D6}\u{1F3FC}", "\u{1F9D6}\u{1F3FD}", "\u{1F9D6}\u{1F3FE}", "\u{1F9D6}\u{1F3FF}"], version: "5.0"}, {emoji: "\u{1F9D6}\u200D\u2642\uFE0F", category: 1, name: "man in steamy room", variations: ["\u{1F9D6}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F9D6}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F9D6}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F9D6}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F9D6}\u{1F3FF}\u200D\u2642\uFE0F"], version: "5.0"}, {emoji: "\u{1F9D6}\u200D\u2640\uFE0F", category: 1, name: "woman in steamy room", variations: ["\u{1F9D6}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F9D6}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F9D6}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F9D6}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F9D6}\u{1F3FF}\u200D\u2640\uFE0F"], version: "5.0"}, {emoji: "\u{1F9D7}", category: 1, name: "person climbing", variations: ["\u{1F9D7}\u{1F3FB}", "\u{1F9D7}\u{1F3FC}", "\u{1F9D7}\u{1F3FD}", "\u{1F9D7}\u{1F3FE}", "\u{1F9D7}\u{1F3FF}"], version: "5.0"}, {emoji: "\u{1F9D7}\u200D\u2642\uFE0F", category: 1, name: "man climbing", variations: ["\u{1F9D7}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F9D7}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F9D7}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F9D7}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F9D7}\u{1F3FF}\u200D\u2642\uFE0F"], version: "5.0"}, {emoji: "\u{1F9D7}\u200D\u2640\uFE0F", category: 1, name: "woman climbing", variations: ["\u{1F9D7}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F9D7}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F9D7}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F9D7}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F9D7}\u{1F3FF}\u200D\u2640\uFE0F"], version: "5.0"}, {emoji: "\u{1F93A}", category: 1, name: "person fencing", version: "3.0"}, {emoji: "\u{1F3C7}", category: 1, name: "horse racing", variations: ["\u{1F3C7}\u{1F3FB}", "\u{1F3C7}\u{1F3FC}", "\u{1F3C7}\u{1F3FD}", "\u{1F3C7}\u{1F3FE}", "\u{1F3C7}\u{1F3FF}"], version: "1.0"}, {emoji: "\u26F7\uFE0F", category: 1, name: "skier", version: "1.0"}, {emoji: "\u{1F3C2}", category: 1, name: "snowboarder", variations: ["\u{1F3C2}\u{1F3FB}", "\u{1F3C2}\u{1F3FC}", "\u{1F3C2}\u{1F3FD}", "\u{1F3C2}\u{1F3FE}", "\u{1F3C2}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F3CC}\uFE0F", category: 1, name: "person golfing", variations: ["\u{1F3CC}\u{1F3FB}", "\u{1F3CC}\u{1F3FC}", "\u{1F3CC}\u{1F3FD}", "\u{1F3CC}\u{1F3FE}", "\u{1F3CC}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F3CC}\uFE0F\u200D\u2642\uFE0F", category: 1, name: "man golfing", variations: ["\u{1F3CC}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F3CC}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F3CC}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F3CC}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F3CC}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F3CC}\uFE0F\u200D\u2640\uFE0F", category: 1, name: "woman golfing", variations: ["\u{1F3CC}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F3CC}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F3CC}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F3CC}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F3CC}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F3C4}", category: 1, name: "person surfing", variations: ["\u{1F3C4}\u{1F3FB}", "\u{1F3C4}\u{1F3FC}", "\u{1F3C4}\u{1F3FD}", "\u{1F3C4}\u{1F3FE}", "\u{1F3C4}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F3C4}\u200D\u2642\uFE0F", category: 1, name: "man surfing", variations: ["\u{1F3C4}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F3C4}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F3C4}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F3C4}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F3C4}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F3C4}\u200D\u2640\uFE0F", category: 1, name: "woman surfing", variations: ["\u{1F3C4}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F3C4}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F3C4}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F3C4}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F3C4}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F6A3}", category: 1, name: "person rowing boat", variations: ["\u{1F6A3}\u{1F3FB}", "\u{1F6A3}\u{1F3FC}", "\u{1F6A3}\u{1F3FD}", "\u{1F6A3}\u{1F3FE}", "\u{1F6A3}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F6A3}\u200D\u2642\uFE0F", category: 1, name: "man rowing boat", variations: ["\u{1F6A3}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F6A3}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F6A3}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F6A3}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F6A3}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F6A3}\u200D\u2640\uFE0F", category: 1, name: "woman rowing boat", variations: ["\u{1F6A3}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F6A3}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F6A3}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F6A3}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F6A3}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F3CA}", category: 1, name: "person swimming", variations: ["\u{1F3CA}\u{1F3FB}", "\u{1F3CA}\u{1F3FC}", "\u{1F3CA}\u{1F3FD}", "\u{1F3CA}\u{1F3FE}", "\u{1F3CA}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F3CA}\u200D\u2642\uFE0F", category: 1, name: "man swimming", variations: ["\u{1F3CA}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F3CA}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F3CA}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F3CA}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F3CA}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F3CA}\u200D\u2640\uFE0F", category: 1, name: "woman swimming", variations: ["\u{1F3CA}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F3CA}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F3CA}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F3CA}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F3CA}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u26F9\uFE0F", category: 1, name: "person bouncing ball", variations: ["\u26F9\u{1F3FB}", "\u26F9\u{1F3FC}", "\u26F9\u{1F3FD}", "\u26F9\u{1F3FE}", "\u26F9\u{1F3FF}"], version: "1.0"}, {emoji: "\u26F9\uFE0F\u200D\u2642\uFE0F", category: 1, name: "man bouncing ball", variations: ["\u26F9\u{1F3FB}\u200D\u2642\uFE0F", "\u26F9\u{1F3FC}\u200D\u2642\uFE0F", "\u26F9\u{1F3FD}\u200D\u2642\uFE0F", "\u26F9\u{1F3FE}\u200D\u2642\uFE0F", "\u26F9\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u26F9\uFE0F\u200D\u2640\uFE0F", category: 1, name: "woman bouncing ball", variations: ["\u26F9\u{1F3FB}\u200D\u2640\uFE0F", "\u26F9\u{1F3FC}\u200D\u2640\uFE0F", "\u26F9\u{1F3FD}\u200D\u2640\uFE0F", "\u26F9\u{1F3FE}\u200D\u2640\uFE0F", "\u26F9\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F3CB}\uFE0F", category: 1, name: "person lifting weights", variations: ["\u{1F3CB}\u{1F3FB}", "\u{1F3CB}\u{1F3FC}", "\u{1F3CB}\u{1F3FD}", "\u{1F3CB}\u{1F3FE}", "\u{1F3CB}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F3CB}\uFE0F\u200D\u2642\uFE0F", category: 1, name: "man lifting weights", variations: ["\u{1F3CB}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F3CB}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F3CB}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F3CB}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F3CB}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F3CB}\uFE0F\u200D\u2640\uFE0F", category: 1, name: "woman lifting weights", variations: ["\u{1F3CB}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F3CB}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F3CB}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F3CB}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F3CB}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F6B4}", category: 1, name: "person biking", variations: ["\u{1F6B4}\u{1F3FB}", "\u{1F6B4}\u{1F3FC}", "\u{1F6B4}\u{1F3FD}", "\u{1F6B4}\u{1F3FE}", "\u{1F6B4}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F6B4}\u200D\u2642\uFE0F", category: 1, name: "man biking", variations: ["\u{1F6B4}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F6B4}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F6B4}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F6B4}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F6B4}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F6B4}\u200D\u2640\uFE0F", category: 1, name: "woman biking", variations: ["\u{1F6B4}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F6B4}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F6B4}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F6B4}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F6B4}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F6B5}", category: 1, name: "person mountain biking", variations: ["\u{1F6B5}\u{1F3FB}", "\u{1F6B5}\u{1F3FC}", "\u{1F6B5}\u{1F3FD}", "\u{1F6B5}\u{1F3FE}", "\u{1F6B5}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F6B5}\u200D\u2642\uFE0F", category: 1, name: "man mountain biking", variations: ["\u{1F6B5}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F6B5}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F6B5}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F6B5}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F6B5}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F6B5}\u200D\u2640\uFE0F", category: 1, name: "woman mountain biking", variations: ["\u{1F6B5}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F6B5}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F6B5}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F6B5}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F6B5}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F938}", category: 1, name: "person cartwheeling", variations: ["\u{1F938}\u{1F3FB}", "\u{1F938}\u{1F3FC}", "\u{1F938}\u{1F3FD}", "\u{1F938}\u{1F3FE}", "\u{1F938}\u{1F3FF}"], version: "3.0"}, {emoji: "\u{1F938}\u200D\u2642\uFE0F", category: 1, name: "man cartwheeling", variations: ["\u{1F938}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F938}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F938}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F938}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F938}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F938}\u200D\u2640\uFE0F", category: 1, name: "woman cartwheeling", variations: ["\u{1F938}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F938}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F938}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F938}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F938}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F93C}", category: 1, name: "people wrestling", version: "3.0"}, {emoji: "\u{1F93C}\u200D\u2642\uFE0F", category: 1, name: "men wrestling", version: "4.0"}, {emoji: "\u{1F93C}\u200D\u2640\uFE0F", category: 1, name: "women wrestling", version: "4.0"}, {emoji: "\u{1F93D}", category: 1, name: "person playing water polo", variations: ["\u{1F93D}\u{1F3FB}", "\u{1F93D}\u{1F3FC}", "\u{1F93D}\u{1F3FD}", "\u{1F93D}\u{1F3FE}", "\u{1F93D}\u{1F3FF}"], version: "3.0"}, {emoji: "\u{1F93D}\u200D\u2642\uFE0F", category: 1, name: "man playing water polo", variations: ["\u{1F93D}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F93D}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F93D}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F93D}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F93D}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F93D}\u200D\u2640\uFE0F", category: 1, name: "woman playing water polo", variations: ["\u{1F93D}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F93D}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F93D}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F93D}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F93D}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F93E}", category: 1, name: "person playing handball", variations: ["\u{1F93E}\u{1F3FB}", "\u{1F93E}\u{1F3FC}", "\u{1F93E}\u{1F3FD}", "\u{1F93E}\u{1F3FE}", "\u{1F93E}\u{1F3FF}"], version: "3.0"}, {emoji: "\u{1F93E}\u200D\u2642\uFE0F", category: 1, name: "man playing handball", variations: ["\u{1F93E}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F93E}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F93E}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F93E}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F93E}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F93E}\u200D\u2640\uFE0F", category: 1, name: "woman playing handball", variations: ["\u{1F93E}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F93E}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F93E}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F93E}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F93E}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F939}", category: 1, name: "person juggling", variations: ["\u{1F939}\u{1F3FB}", "\u{1F939}\u{1F3FC}", "\u{1F939}\u{1F3FD}", "\u{1F939}\u{1F3FE}", "\u{1F939}\u{1F3FF}"], version: "3.0"}, {emoji: "\u{1F939}\u200D\u2642\uFE0F", category: 1, name: "man juggling", variations: ["\u{1F939}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F939}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F939}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F939}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F939}\u{1F3FF}\u200D\u2642\uFE0F"], version: "4.0"}, {emoji: "\u{1F939}\u200D\u2640\uFE0F", category: 1, name: "woman juggling", variations: ["\u{1F939}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F939}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F939}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F939}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F939}\u{1F3FF}\u200D\u2640\uFE0F"], version: "4.0"}, {emoji: "\u{1F9D8}", category: 1, name: "person in lotus position", variations: ["\u{1F9D8}\u{1F3FB}", "\u{1F9D8}\u{1F3FC}", "\u{1F9D8}\u{1F3FD}", "\u{1F9D8}\u{1F3FE}", "\u{1F9D8}\u{1F3FF}"], version: "5.0"}, {emoji: "\u{1F9D8}\u200D\u2642\uFE0F", category: 1, name: "man in lotus position", variations: ["\u{1F9D8}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F9D8}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F9D8}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F9D8}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F9D8}\u{1F3FF}\u200D\u2642\uFE0F"], version: "5.0"}, {emoji: "\u{1F9D8}\u200D\u2640\uFE0F", category: 1, name: "woman in lotus position", variations: ["\u{1F9D8}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F9D8}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F9D8}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F9D8}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F9D8}\u{1F3FF}\u200D\u2640\uFE0F"], version: "5.0"}, {emoji: "\u{1F6C0}", category: 1, name: "person taking bath", variations: ["\u{1F6C0}\u{1F3FB}", "\u{1F6C0}\u{1F3FC}", "\u{1F6C0}\u{1F3FD}", "\u{1F6C0}\u{1F3FE}", "\u{1F6C0}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F6CC}", category: 1, name: "person in bed", variations: ["\u{1F6CC}\u{1F3FB}", "\u{1F6CC}\u{1F3FC}", "\u{1F6CC}\u{1F3FD}", "\u{1F6CC}\u{1F3FE}", "\u{1F6CC}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F9D1}\u200D\u{1F91D}\u200D\u{1F9D1}", category: 1, name: "people holding hands", variations: ["\u{1F9D1}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FB}", "\u{1F9D1}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FC}", "\u{1F9D1}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FD}", "\u{1F9D1}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FE}", "\u{1F9D1}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FF}", "\u{1F9D1}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FB}", "\u{1F9D1}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FC}", "\u{1F9D1}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FD}", "\u{1F9D1}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FE}", "\u{1F9D1}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FF}", "\u{1F9D1}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FB}", "\u{1F9D1}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FC}", "\u{1F9D1}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FD}", "\u{1F9D1}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FE}", "\u{1F9D1}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FF}", "\u{1F9D1}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FB}", "\u{1F9D1}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FC}", "\u{1F9D1}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FD}", "\u{1F9D1}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FE}", "\u{1F9D1}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FF}", "\u{1F9D1}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FB}", "\u{1F9D1}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FC}", "\u{1F9D1}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FD}", "\u{1F9D1}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FE}", "\u{1F9D1}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FF}"], version: "12.0"}, {emoji: "\u{1F46D}", category: 1, name: "women holding hands", variations: ["\u{1F46D}\u{1F3FB}", "\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FC}", "\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FD}", "\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FE}", "\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FF}", "\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FB}", "\u{1F46D}\u{1F3FC}", "\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FD}", "\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FE}", "\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FF}", "\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FB}", "\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FC}", "\u{1F46D}\u{1F3FD}", "\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FE}", "\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FF}", "\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FB}", "\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FC}", "\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FD}", "\u{1F46D}\u{1F3FE}", "\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FF}", "\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FB}", "\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FC}", "\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FD}", "\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FE}", "\u{1F46D}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F46B}", category: 1, name: "woman and man holding hands", variations: ["\u{1F46B}\u{1F3FB}", "\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}", "\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}", "\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}", "\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}", "\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}", "\u{1F46B}\u{1F3FC}", "\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}", "\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}", "\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}", "\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}", "\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}", "\u{1F46B}\u{1F3FD}", "\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}", "\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}", "\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}", "\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}", "\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}", "\u{1F46B}\u{1F3FE}", "\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}", "\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}", "\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}", "\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}", "\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}", "\u{1F46B}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F46C}", category: 1, name: "men holding hands", variations: ["\u{1F46C}\u{1F3FB}", "\u{1F468}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}", "\u{1F468}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}", "\u{1F468}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}", "\u{1F468}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}", "\u{1F468}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}", "\u{1F46C}\u{1F3FC}", "\u{1F468}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}", "\u{1F468}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}", "\u{1F468}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}", "\u{1F468}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}", "\u{1F468}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}", "\u{1F46C}\u{1F3FD}", "\u{1F468}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}", "\u{1F468}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}", "\u{1F468}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}", "\u{1F468}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}", "\u{1F468}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}", "\u{1F46C}\u{1F3FE}", "\u{1F468}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}", "\u{1F468}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}", "\u{1F468}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}", "\u{1F468}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}", "\u{1F468}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}", "\u{1F46C}\u{1F3FF}"], version: "1.0"}, {emoji: "\u{1F48F}", category: 1, name: "kiss", variations: ["\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}", "\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}", "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}"], version: "1.0"}, {emoji: "\u{1F491}", category: 1, name: "couple with heart", variations: ["\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F468}", "\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F468}", "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F469}"], version: "1.0"}, {emoji: "\u{1F46A}", category: 1, name: "family", version: "1.0"}, {emoji: "\u{1F468}\u200D\u{1F469}\u200D\u{1F466}", category: 1, name: "family: man, woman, boy", version: "2.0"}, {emoji: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}", category: 1, name: "family: man, woman, girl", version: "2.0"}, {emoji: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}", category: 1, name: "family: man, woman, girl, boy", version: "2.0"}, {emoji: "\u{1F468}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}", category: 1, name: "family: man, woman, boy, boy", version: "2.0"}, {emoji: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}", category: 1, name: "family: man, woman, girl, girl", version: "2.0"}, {emoji: "\u{1F468}\u200D\u{1F468}\u200D\u{1F466}", category: 1, name: "family: man, man, boy", version: "2.0"}, {emoji: "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}", category: 1, name: "family: man, man, girl", version: "2.0"}, {emoji: "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F466}", category: 1, name: "family: man, man, girl, boy", version: "2.0"}, {emoji: "\u{1F468}\u200D\u{1F468}\u200D\u{1F466}\u200D\u{1F466}", category: 1, name: "family: man, man, boy, boy", version: "2.0"}, {emoji: "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F467}", category: 1, name: "family: man, man, girl, girl", version: "2.0"}, {emoji: "\u{1F469}\u200D\u{1F469}\u200D\u{1F466}", category: 1, name: "family: woman, woman, boy", version: "2.0"}, {emoji: "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}", category: 1, name: "family: woman, woman, girl", version: "2.0"}, {emoji: "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}", category: 1, name: "family: woman, woman, girl, boy", version: "2.0"}, {emoji: "\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}", category: 1, name: "family: woman, woman, boy, boy", version: "2.0"}, {emoji: "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}", category: 1, name: "family: woman, woman, girl, girl", version: "2.0"}, {emoji: "\u{1F468}\u200D\u{1F466}", category: 1, name: "family: man, boy", version: "4.0"}, {emoji: "\u{1F468}\u200D\u{1F466}\u200D\u{1F466}", category: 1, name: "family: man, boy, boy", version: "4.0"}, {emoji: "\u{1F468}\u200D\u{1F467}", category: 1, name: "family: man, girl", version: "4.0"}, {emoji: "\u{1F468}\u200D\u{1F467}\u200D\u{1F466}", category: 1, name: "family: man, girl, boy", version: "4.0"}, {emoji: "\u{1F468}\u200D\u{1F467}\u200D\u{1F467}", category: 1, name: "family: man, girl, girl", version: "4.0"}, {emoji: "\u{1F469}\u200D\u{1F466}", category: 1, name: "family: woman, boy", version: "4.0"}, {emoji: "\u{1F469}\u200D\u{1F466}\u200D\u{1F466}", category: 1, name: "family: woman, boy, boy", version: "4.0"}, {emoji: "\u{1F469}\u200D\u{1F467}", category: 1, name: "family: woman, girl", version: "4.0"}, {emoji: "\u{1F469}\u200D\u{1F467}\u200D\u{1F466}", category: 1, name: "family: woman, girl, boy", version: "4.0"}, {emoji: "\u{1F469}\u200D\u{1F467}\u200D\u{1F467}", category: 1, name: "family: woman, girl, girl", version: "4.0"}, {emoji: "\u{1F5E3}\uFE0F", category: 1, name: "speaking head", version: "1.0"}, {emoji: "\u{1F464}", category: 1, name: "bust in silhouette", version: "1.0"}, {emoji: "\u{1F465}", category: 1, name: "busts in silhouette", version: "1.0"}, {emoji: "\u{1FAC2}", category: 1, name: "people hugging", version: "13.0"}, {emoji: "\u{1F463}", category: 1, name: "footprints", version: "1.0"}, {emoji: "\u{1F435}", category: 2, name: "monkey face", version: "1.0"}, {emoji: "\u{1F412}", category: 2, name: "monkey", version: "1.0"}, {emoji: "\u{1F98D}", category: 2, name: "gorilla", version: "3.0"}, {emoji: "\u{1F9A7}", category: 2, name: "orangutan", version: "12.0"}, {emoji: "\u{1F436}", category: 2, name: "dog face", version: "1.0"}, {emoji: "\u{1F415}", category: 2, name: "dog", version: "1.0"}, {emoji: "\u{1F9AE}", category: 2, name: "guide dog", version: "12.0"}, {emoji: "\u{1F415}\u200D\u{1F9BA}", category: 2, name: "service dog", version: "12.0"}, {emoji: "\u{1F429}", category: 2, name: "poodle", version: "1.0"}, {emoji: "\u{1F43A}", category: 2, name: "wolf", version: "1.0"}, {emoji: "\u{1F98A}", category: 2, name: "fox", version: "3.0"}, {emoji: "\u{1F99D}", category: 2, name: "raccoon", version: "11.0"}, {emoji: "\u{1F431}", category: 2, name: "cat face", version: "1.0"}, {emoji: "\u{1F408}", category: 2, name: "cat", version: "1.0"}, {emoji: "\u{1F408}\u200D\u2B1B", category: 2, name: "black cat", version: "13.0"}, {emoji: "\u{1F981}", category: 2, name: "lion", version: "1.0"}, {emoji: "\u{1F42F}", category: 2, name: "tiger face", version: "1.0"}, {emoji: "\u{1F405}", category: 2, name: "tiger", version: "1.0"}, {emoji: "\u{1F406}", category: 2, name: "leopard", version: "1.0"}, {emoji: "\u{1F434}", category: 2, name: "horse face", version: "1.0"}, {emoji: "\u{1F40E}", category: 2, name: "horse", version: "1.0"}, {emoji: "\u{1F984}", category: 2, name: "unicorn", version: "1.0"}, {emoji: "\u{1F993}", category: 2, name: "zebra", version: "5.0"}, {emoji: "\u{1F98C}", category: 2, name: "deer", version: "3.0"}, {emoji: "\u{1F9AC}", category: 2, name: "bison", version: "13.0"}, {emoji: "\u{1F42E}", category: 2, name: "cow face", version: "1.0"}, {emoji: "\u{1F402}", category: 2, name: "ox", version: "1.0"}, {emoji: "\u{1F403}", category: 2, name: "water buffalo", version: "1.0"}, {emoji: "\u{1F404}", category: 2, name: "cow", version: "1.0"}, {emoji: "\u{1F437}", category: 2, name: "pig face", version: "1.0"}, {emoji: "\u{1F416}", category: 2, name: "pig", version: "1.0"}, {emoji: "\u{1F417}", category: 2, name: "boar", version: "1.0"}, {emoji: "\u{1F43D}", category: 2, name: "pig nose", version: "1.0"}, {emoji: "\u{1F40F}", category: 2, name: "ram", version: "1.0"}, {emoji: "\u{1F411}", category: 2, name: "ewe", version: "1.0"}, {emoji: "\u{1F410}", category: 2, name: "goat", version: "1.0"}, {emoji: "\u{1F42A}", category: 2, name: "camel", version: "1.0"}, {emoji: "\u{1F42B}", category: 2, name: "two-hump camel", version: "1.0"}, {emoji: "\u{1F999}", category: 2, name: "llama", version: "11.0"}, {emoji: "\u{1F992}", category: 2, name: "giraffe", version: "5.0"}, {emoji: "\u{1F418}", category: 2, name: "elephant", version: "1.0"}, {emoji: "\u{1F9A3}", category: 2, name: "mammoth", version: "13.0"}, {emoji: "\u{1F98F}", category: 2, name: "rhinoceros", version: "3.0"}, {emoji: "\u{1F99B}", category: 2, name: "hippopotamus", version: "11.0"}, {emoji: "\u{1F42D}", category: 2, name: "mouse face", version: "1.0"}, {emoji: "\u{1F401}", category: 2, name: "mouse", version: "1.0"}, {emoji: "\u{1F400}", category: 2, name: "rat", version: "1.0"}, {emoji: "\u{1F439}", category: 2, name: "hamster", version: "1.0"}, {emoji: "\u{1F430}", category: 2, name: "rabbit face", version: "1.0"}, {emoji: "\u{1F407}", category: 2, name: "rabbit", version: "1.0"}, {emoji: "\u{1F43F}\uFE0F", category: 2, name: "chipmunk", version: "1.0"}, {emoji: "\u{1F9AB}", category: 2, name: "beaver", version: "13.0"}, {emoji: "\u{1F994}", category: 2, name: "hedgehog", version: "5.0"}, {emoji: "\u{1F987}", category: 2, name: "bat", version: "3.0"}, {emoji: "\u{1F43B}", category: 2, name: "bear", version: "1.0"}, {emoji: "\u{1F43B}\u200D\u2744\uFE0F", category: 2, name: "polar bear", version: "13.0"}, {emoji: "\u{1F428}", category: 2, name: "koala", version: "1.0"}, {emoji: "\u{1F43C}", category: 2, name: "panda", version: "1.0"}, {emoji: "\u{1F9A5}", category: 2, name: "sloth", version: "12.0"}, {emoji: "\u{1F9A6}", category: 2, name: "otter", version: "12.0"}, {emoji: "\u{1F9A8}", category: 2, name: "skunk", version: "12.0"}, {emoji: "\u{1F998}", category: 2, name: "kangaroo", version: "11.0"}, {emoji: "\u{1F9A1}", category: 2, name: "badger", version: "11.0"}, {emoji: "\u{1F43E}", category: 2, name: "paw prints", version: "1.0"}, {emoji: "\u{1F983}", category: 2, name: "turkey", version: "1.0"}, {emoji: "\u{1F414}", category: 2, name: "chicken", version: "1.0"}, {emoji: "\u{1F413}", category: 2, name: "rooster", version: "1.0"}, {emoji: "\u{1F423}", category: 2, name: "hatching chick", version: "1.0"}, {emoji: "\u{1F424}", category: 2, name: "baby chick", version: "1.0"}, {emoji: "\u{1F425}", category: 2, name: "front-facing baby chick", version: "1.0"}, {emoji: "\u{1F426}", category: 2, name: "bird", version: "1.0"}, {emoji: "\u{1F427}", category: 2, name: "penguin", version: "1.0"}, {emoji: "\u{1F54A}\uFE0F", category: 2, name: "dove", version: "1.0"}, {emoji: "\u{1F985}", category: 2, name: "eagle", version: "3.0"}, {emoji: "\u{1F986}", category: 2, name: "duck", version: "3.0"}, {emoji: "\u{1F9A2}", category: 2, name: "swan", version: "11.0"}, {emoji: "\u{1F989}", category: 2, name: "owl", version: "3.0"}, {emoji: "\u{1F9A4}", category: 2, name: "dodo", version: "13.0"}, {emoji: "\u{1FAB6}", category: 2, name: "feather", version: "13.0"}, {emoji: "\u{1F9A9}", category: 2, name: "flamingo", version: "12.0"}, {emoji: "\u{1F99A}", category: 2, name: "peacock", version: "11.0"}, {emoji: "\u{1F99C}", category: 2, name: "parrot", version: "11.0"}, {emoji: "\u{1F438}", category: 2, name: "frog", version: "1.0"}, {emoji: "\u{1F40A}", category: 2, name: "crocodile", version: "1.0"}, {emoji: "\u{1F422}", category: 2, name: "turtle", version: "1.0"}, {emoji: "\u{1F98E}", category: 2, name: "lizard", version: "3.0"}, {emoji: "\u{1F40D}", category: 2, name: "snake", version: "1.0"}, {emoji: "\u{1F432}", category: 2, name: "dragon face", version: "1.0"}, {emoji: "\u{1F409}", category: 2, name: "dragon", version: "1.0"}, {emoji: "\u{1F995}", category: 2, name: "sauropod", version: "5.0"}, {emoji: "\u{1F996}", category: 2, name: "T-Rex", version: "5.0"}, {emoji: "\u{1F433}", category: 2, name: "spouting whale", version: "1.0"}, {emoji: "\u{1F40B}", category: 2, name: "whale", version: "1.0"}, {emoji: "\u{1F42C}", category: 2, name: "dolphin", version: "1.0"}, {emoji: "\u{1F9AD}", category: 2, name: "seal", version: "13.0"}, {emoji: "\u{1F41F}", category: 2, name: "fish", version: "1.0"}, {emoji: "\u{1F420}", category: 2, name: "tropical fish", version: "1.0"}, {emoji: "\u{1F421}", category: 2, name: "blowfish", version: "1.0"}, {emoji: "\u{1F988}", category: 2, name: "shark", version: "3.0"}, {emoji: "\u{1F419}", category: 2, name: "octopus", version: "1.0"}, {emoji: "\u{1F41A}", category: 2, name: "spiral shell", version: "1.0"}, {emoji: "\u{1F40C}", category: 2, name: "snail", version: "1.0"}, {emoji: "\u{1F98B}", category: 2, name: "butterfly", version: "3.0"}, {emoji: "\u{1F41B}", category: 2, name: "bug", version: "1.0"}, {emoji: "\u{1F41C}", category: 2, name: "ant", version: "1.0"}, {emoji: "\u{1F41D}", category: 2, name: "honeybee", version: "1.0"}, {emoji: "\u{1FAB2}", category: 2, name: "beetle", version: "13.0"}, {emoji: "\u{1F41E}", category: 2, name: "lady beetle", version: "1.0"}, {emoji: "\u{1F997}", category: 2, name: "cricket", version: "5.0"}, {emoji: "\u{1FAB3}", category: 2, name: "cockroach", version: "13.0"}, {emoji: "\u{1F577}\uFE0F", category: 2, name: "spider", version: "1.0"}, {emoji: "\u{1F578}\uFE0F", category: 2, name: "spider web", version: "1.0"}, {emoji: "\u{1F982}", category: 2, name: "scorpion", version: "1.0"}, {emoji: "\u{1F99F}", category: 2, name: "mosquito", version: "11.0"}, {emoji: "\u{1FAB0}", category: 2, name: "fly", version: "13.0"}, {emoji: "\u{1FAB1}", category: 2, name: "worm", version: "13.0"}, {emoji: "\u{1F9A0}", category: 2, name: "microbe", version: "11.0"}, {emoji: "\u{1F490}", category: 2, name: "bouquet", version: "1.0"}, {emoji: "\u{1F338}", category: 2, name: "cherry blossom", version: "1.0"}, {emoji: "\u{1F4AE}", category: 2, name: "white flower", version: "1.0"}, {emoji: "\u{1F3F5}\uFE0F", category: 2, name: "rosette", version: "1.0"}, {emoji: "\u{1F339}", category: 2, name: "rose", version: "1.0"}, {emoji: "\u{1F940}", category: 2, name: "wilted flower", version: "3.0"}, {emoji: "\u{1F33A}", category: 2, name: "hibiscus", version: "1.0"}, {emoji: "\u{1F33B}", category: 2, name: "sunflower", version: "1.0"}, {emoji: "\u{1F33C}", category: 2, name: "blossom", version: "1.0"}, {emoji: "\u{1F337}", category: 2, name: "tulip", version: "1.0"}, {emoji: "\u{1F331}", category: 2, name: "seedling", version: "1.0"}, {emoji: "\u{1FAB4}", category: 2, name: "potted plant", version: "13.0"}, {emoji: "\u{1F332}", category: 2, name: "evergreen tree", version: "1.0"}, {emoji: "\u{1F333}", category: 2, name: "deciduous tree", version: "1.0"}, {emoji: "\u{1F334}", category: 2, name: "palm tree", version: "1.0"}, {emoji: "\u{1F335}", category: 2, name: "cactus", version: "1.0"}, {emoji: "\u{1F33E}", category: 2, name: "sheaf of rice", version: "1.0"}, {emoji: "\u{1F33F}", category: 2, name: "herb", version: "1.0"}, {emoji: "\u2618\uFE0F", category: 2, name: "shamrock", version: "1.0"}, {emoji: "\u{1F340}", category: 2, name: "four leaf clover", version: "1.0"}, {emoji: "\u{1F341}", category: 2, name: "maple leaf", version: "1.0"}, {emoji: "\u{1F342}", category: 2, name: "fallen leaf", version: "1.0"}, {emoji: "\u{1F343}", category: 2, name: "leaf fluttering in wind", version: "1.0"}, {emoji: "\u{1F347}", category: 3, name: "grapes", version: "1.0"}, {emoji: "\u{1F348}", category: 3, name: "melon", version: "1.0"}, {emoji: "\u{1F349}", category: 3, name: "watermelon", version: "1.0"}, {emoji: "\u{1F34A}", category: 3, name: "tangerine", version: "1.0"}, {emoji: "\u{1F34B}", category: 3, name: "lemon", version: "1.0"}, {emoji: "\u{1F34C}", category: 3, name: "banana", version: "1.0"}, {emoji: "\u{1F34D}", category: 3, name: "pineapple", version: "1.0"}, {emoji: "\u{1F96D}", category: 3, name: "mango", version: "11.0"}, {emoji: "\u{1F34E}", category: 3, name: "red apple", version: "1.0"}, {emoji: "\u{1F34F}", category: 3, name: "green apple", version: "1.0"}, {emoji: "\u{1F350}", category: 3, name: "pear", version: "1.0"}, {emoji: "\u{1F351}", category: 3, name: "peach", version: "1.0"}, {emoji: "\u{1F352}", category: 3, name: "cherries", version: "1.0"}, {emoji: "\u{1F353}", category: 3, name: "strawberry", version: "1.0"}, {emoji: "\u{1FAD0}", category: 3, name: "blueberries", version: "13.0"}, {emoji: "\u{1F95D}", category: 3, name: "kiwi fruit", version: "3.0"}, {emoji: "\u{1F345}", category: 3, name: "tomato", version: "1.0"}, {emoji: "\u{1FAD2}", category: 3, name: "olive", version: "13.0"}, {emoji: "\u{1F965}", category: 3, name: "coconut", version: "5.0"}, {emoji: "\u{1F951}", category: 3, name: "avocado", version: "3.0"}, {emoji: "\u{1F346}", category: 3, name: "eggplant", version: "1.0"}, {emoji: "\u{1F954}", category: 3, name: "potato", version: "3.0"}, {emoji: "\u{1F955}", category: 3, name: "carrot", version: "3.0"}, {emoji: "\u{1F33D}", category: 3, name: "ear of corn", version: "1.0"}, {emoji: "\u{1F336}\uFE0F", category: 3, name: "hot pepper", version: "1.0"}, {emoji: "\u{1FAD1}", category: 3, name: "bell pepper", version: "13.0"}, {emoji: "\u{1F952}", category: 3, name: "cucumber", version: "3.0"}, {emoji: "\u{1F96C}", category: 3, name: "leafy green", version: "11.0"}, {emoji: "\u{1F966}", category: 3, name: "broccoli", version: "5.0"}, {emoji: "\u{1F9C4}", category: 3, name: "garlic", version: "12.0"}, {emoji: "\u{1F9C5}", category: 3, name: "onion", version: "12.0"}, {emoji: "\u{1F344}", category: 3, name: "mushroom", version: "1.0"}, {emoji: "\u{1F95C}", category: 3, name: "peanuts", version: "3.0"}, {emoji: "\u{1F330}", category: 3, name: "chestnut", version: "1.0"}, {emoji: "\u{1F35E}", category: 3, name: "bread", version: "1.0"}, {emoji: "\u{1F950}", category: 3, name: "croissant", version: "3.0"}, {emoji: "\u{1F956}", category: 3, name: "baguette bread", version: "3.0"}, {emoji: "\u{1FAD3}", category: 3, name: "flatbread", version: "13.0"}, {emoji: "\u{1F968}", category: 3, name: "pretzel", version: "5.0"}, {emoji: "\u{1F96F}", category: 3, name: "bagel", version: "11.0"}, {emoji: "\u{1F95E}", category: 3, name: "pancakes", version: "3.0"}, {emoji: "\u{1F9C7}", category: 3, name: "waffle", version: "12.0"}, {emoji: "\u{1F9C0}", category: 3, name: "cheese wedge", version: "1.0"}, {emoji: "\u{1F356}", category: 3, name: "meat on bone", version: "1.0"}, {emoji: "\u{1F357}", category: 3, name: "poultry leg", version: "1.0"}, {emoji: "\u{1F969}", category: 3, name: "cut of meat", version: "5.0"}, {emoji: "\u{1F953}", category: 3, name: "bacon", version: "3.0"}, {emoji: "\u{1F354}", category: 3, name: "hamburger", version: "1.0"}, {emoji: "\u{1F35F}", category: 3, name: "french fries", version: "1.0"}, {emoji: "\u{1F355}", category: 3, name: "pizza", version: "1.0"}, {emoji: "\u{1F32D}", category: 3, name: "hot dog", version: "1.0"}, {emoji: "\u{1F96A}", category: 3, name: "sandwich", version: "5.0"}, {emoji: "\u{1F32E}", category: 3, name: "taco", version: "1.0"}, {emoji: "\u{1F32F}", category: 3, name: "burrito", version: "1.0"}, {emoji: "\u{1FAD4}", category: 3, name: "tamale", version: "13.0"}, {emoji: "\u{1F959}", category: 3, name: "stuffed flatbread", version: "3.0"}, {emoji: "\u{1F9C6}", category: 3, name: "falafel", version: "12.0"}, {emoji: "\u{1F95A}", category: 3, name: "egg", version: "3.0"}, {emoji: "\u{1F373}", category: 3, name: "cooking", version: "1.0"}, {emoji: "\u{1F958}", category: 3, name: "shallow pan of food", version: "3.0"}, {emoji: "\u{1F372}", category: 3, name: "pot of food", version: "1.0"}, {emoji: "\u{1FAD5}", category: 3, name: "fondue", version: "13.0"}, {emoji: "\u{1F963}", category: 3, name: "bowl with spoon", version: "5.0"}, {emoji: "\u{1F957}", category: 3, name: "green salad", version: "3.0"}, {emoji: "\u{1F37F}", category: 3, name: "popcorn", version: "1.0"}, {emoji: "\u{1F9C8}", category: 3, name: "butter", version: "12.0"}, {emoji: "\u{1F9C2}", category: 3, name: "salt", version: "11.0"}, {emoji: "\u{1F96B}", category: 3, name: "canned food", version: "5.0"}, {emoji: "\u{1F371}", category: 3, name: "bento box", version: "1.0"}, {emoji: "\u{1F358}", category: 3, name: "rice cracker", version: "1.0"}, {emoji: "\u{1F359}", category: 3, name: "rice ball", version: "1.0"}, {emoji: "\u{1F35A}", category: 3, name: "cooked rice", version: "1.0"}, {emoji: "\u{1F35B}", category: 3, name: "curry rice", version: "1.0"}, {emoji: "\u{1F35C}", category: 3, name: "steaming bowl", version: "1.0"}, {emoji: "\u{1F35D}", category: 3, name: "spaghetti", version: "1.0"}, {emoji: "\u{1F360}", category: 3, name: "roasted sweet potato", version: "1.0"}, {emoji: "\u{1F362}", category: 3, name: "oden", version: "1.0"}, {emoji: "\u{1F363}", category: 3, name: "sushi", version: "1.0"}, {emoji: "\u{1F364}", category: 3, name: "fried shrimp", version: "1.0"}, {emoji: "\u{1F365}", category: 3, name: "fish cake with swirl", version: "1.0"}, {emoji: "\u{1F96E}", category: 3, name: "moon cake", version: "11.0"}, {emoji: "\u{1F361}", category: 3, name: "dango", version: "1.0"}, {emoji: "\u{1F95F}", category: 3, name: "dumpling", version: "5.0"}, {emoji: "\u{1F960}", category: 3, name: "fortune cookie", version: "5.0"}, {emoji: "\u{1F961}", category: 3, name: "takeout box", version: "5.0"}, {emoji: "\u{1F980}", category: 3, name: "crab", version: "1.0"}, {emoji: "\u{1F99E}", category: 3, name: "lobster", version: "11.0"}, {emoji: "\u{1F990}", category: 3, name: "shrimp", version: "3.0"}, {emoji: "\u{1F991}", category: 3, name: "squid", version: "3.0"}, {emoji: "\u{1F9AA}", category: 3, name: "oyster", version: "12.0"}, {emoji: "\u{1F366}", category: 3, name: "soft ice cream", version: "1.0"}, {emoji: "\u{1F367}", category: 3, name: "shaved ice", version: "1.0"}, {emoji: "\u{1F368}", category: 3, name: "ice cream", version: "1.0"}, {emoji: "\u{1F369}", category: 3, name: "doughnut", version: "1.0"}, {emoji: "\u{1F36A}", category: 3, name: "cookie", version: "1.0"}, {emoji: "\u{1F382}", category: 3, name: "birthday cake", version: "1.0"}, {emoji: "\u{1F370}", category: 3, name: "shortcake", version: "1.0"}, {emoji: "\u{1F9C1}", category: 3, name: "cupcake", version: "11.0"}, {emoji: "\u{1F967}", category: 3, name: "pie", version: "5.0"}, {emoji: "\u{1F36B}", category: 3, name: "chocolate bar", version: "1.0"}, {emoji: "\u{1F36C}", category: 3, name: "candy", version: "1.0"}, {emoji: "\u{1F36D}", category: 3, name: "lollipop", version: "1.0"}, {emoji: "\u{1F36E}", category: 3, name: "custard", version: "1.0"}, {emoji: "\u{1F36F}", category: 3, name: "honey pot", version: "1.0"}, {emoji: "\u{1F37C}", category: 3, name: "baby bottle", version: "1.0"}, {emoji: "\u{1F95B}", category: 3, name: "glass of milk", version: "3.0"}, {emoji: "\u2615", category: 3, name: "hot beverage", version: "1.0"}, {emoji: "\u{1FAD6}", category: 3, name: "teapot", version: "13.0"}, {emoji: "\u{1F375}", category: 3, name: "teacup without handle", version: "1.0"}, {emoji: "\u{1F376}", category: 3, name: "sake", version: "1.0"}, {emoji: "\u{1F37E}", category: 3, name: "bottle with popping cork", version: "1.0"}, {emoji: "\u{1F377}", category: 3, name: "wine glass", version: "1.0"}, {emoji: "\u{1F378}", category: 3, name: "cocktail glass", version: "1.0"}, {emoji: "\u{1F379}", category: 3, name: "tropical drink", version: "1.0"}, {emoji: "\u{1F37A}", category: 3, name: "beer mug", version: "1.0"}, {emoji: "\u{1F37B}", category: 3, name: "clinking beer mugs", version: "1.0"}, {emoji: "\u{1F942}", category: 3, name: "clinking glasses", version: "3.0"}, {emoji: "\u{1F943}", category: 3, name: "tumbler glass", version: "3.0"}, {emoji: "\u{1F964}", category: 3, name: "cup with straw", version: "5.0"}, {emoji: "\u{1F9CB}", category: 3, name: "bubble tea", version: "13.0"}, {emoji: "\u{1F9C3}", category: 3, name: "beverage box", version: "12.0"}, {emoji: "\u{1F9C9}", category: 3, name: "mate", version: "12.0"}, {emoji: "\u{1F9CA}", category: 3, name: "ice", version: "12.0"}, {emoji: "\u{1F962}", category: 3, name: "chopsticks", version: "5.0"}, {emoji: "\u{1F37D}\uFE0F", category: 3, name: "fork and knife with plate", version: "1.0"}, {emoji: "\u{1F374}", category: 3, name: "fork and knife", version: "1.0"}, {emoji: "\u{1F944}", category: 3, name: "spoon", version: "3.0"}, {emoji: "\u{1F52A}", category: 3, name: "kitchen knife", version: "1.0"}, {emoji: "\u{1F3FA}", category: 3, name: "amphora", version: "1.0"}, {emoji: "\u{1F30D}", category: 4, name: "globe showing Europe-Africa", version: "1.0"}, {emoji: "\u{1F30E}", category: 4, name: "globe showing Americas", version: "1.0"}, {emoji: "\u{1F30F}", category: 4, name: "globe showing Asia-Australia", version: "1.0"}, {emoji: "\u{1F310}", category: 4, name: "globe with meridians", version: "1.0"}, {emoji: "\u{1F5FA}\uFE0F", category: 4, name: "world map", version: "1.0"}, {emoji: "\u{1F5FE}", category: 4, name: "map of Japan", version: "1.0"}, {emoji: "\u{1F9ED}", category: 4, name: "compass", version: "11.0"}, {emoji: "\u{1F3D4}\uFE0F", category: 4, name: "snow-capped mountain", version: "1.0"}, {emoji: "\u26F0\uFE0F", category: 4, name: "mountain", version: "1.0"}, {emoji: "\u{1F30B}", category: 4, name: "volcano", version: "1.0"}, {emoji: "\u{1F5FB}", category: 4, name: "mount fuji", version: "1.0"}, {emoji: "\u{1F3D5}\uFE0F", category: 4, name: "camping", version: "1.0"}, {emoji: "\u{1F3D6}\uFE0F", category: 4, name: "beach with umbrella", version: "1.0"}, {emoji: "\u{1F3DC}\uFE0F", category: 4, name: "desert", version: "1.0"}, {emoji: "\u{1F3DD}\uFE0F", category: 4, name: "desert island", version: "1.0"}, {emoji: "\u{1F3DE}\uFE0F", category: 4, name: "national park", version: "1.0"}, {emoji: "\u{1F3DF}\uFE0F", category: 4, name: "stadium", version: "1.0"}, {emoji: "\u{1F3DB}\uFE0F", category: 4, name: "classical building", version: "1.0"}, {emoji: "\u{1F3D7}\uFE0F", category: 4, name: "building construction", version: "1.0"}, {emoji: "\u{1F9F1}", category: 4, name: "brick", version: "11.0"}, {emoji: "\u{1FAA8}", category: 4, name: "rock", version: "13.0"}, {emoji: "\u{1FAB5}", category: 4, name: "wood", version: "13.0"}, {emoji: "\u{1F6D6}", category: 4, name: "hut", version: "13.0"}, {emoji: "\u{1F3D8}\uFE0F", category: 4, name: "houses", version: "1.0"}, {emoji: "\u{1F3DA}\uFE0F", category: 4, name: "derelict house", version: "1.0"}, {emoji: "\u{1F3E0}", category: 4, name: "house", version: "1.0"}, {emoji: "\u{1F3E1}", category: 4, name: "house with garden", version: "1.0"}, {emoji: "\u{1F3E2}", category: 4, name: "office building", version: "1.0"}, {emoji: "\u{1F3E3}", category: 4, name: "Japanese post office", version: "1.0"}, {emoji: "\u{1F3E4}", category: 4, name: "post office", version: "1.0"}, {emoji: "\u{1F3E5}", category: 4, name: "hospital", version: "1.0"}, {emoji: "\u{1F3E6}", category: 4, name: "bank", version: "1.0"}, {emoji: "\u{1F3E8}", category: 4, name: "hotel", version: "1.0"}, {emoji: "\u{1F3E9}", category: 4, name: "love hotel", version: "1.0"}, {emoji: "\u{1F3EA}", category: 4, name: "convenience store", version: "1.0"}, {emoji: "\u{1F3EB}", category: 4, name: "school", version: "1.0"}, {emoji: "\u{1F3EC}", category: 4, name: "department store", version: "1.0"}, {emoji: "\u{1F3ED}", category: 4, name: "factory", version: "1.0"}, {emoji: "\u{1F3EF}", category: 4, name: "Japanese castle", version: "1.0"}, {emoji: "\u{1F3F0}", category: 4, name: "castle", version: "1.0"}, {emoji: "\u{1F492}", category: 4, name: "wedding", version: "1.0"}, {emoji: "\u{1F5FC}", category: 4, name: "Tokyo tower", version: "1.0"}, {emoji: "\u{1F5FD}", category: 4, name: "Statue of Liberty", version: "1.0"}, {emoji: "\u26EA", category: 4, name: "church", version: "1.0"}, {emoji: "\u{1F54C}", category: 4, name: "mosque", version: "1.0"}, {emoji: "\u{1F6D5}", category: 4, name: "hindu temple", version: "12.0"}, {emoji: "\u{1F54D}", category: 4, name: "synagogue", version: "1.0"}, {emoji: "\u26E9\uFE0F", category: 4, name: "shinto shrine", version: "1.0"}, {emoji: "\u{1F54B}", category: 4, name: "kaaba", version: "1.0"}, {emoji: "\u26F2", category: 4, name: "fountain", version: "1.0"}, {emoji: "\u26FA", category: 4, name: "tent", version: "1.0"}, {emoji: "\u{1F301}", category: 4, name: "foggy", version: "1.0"}, {emoji: "\u{1F303}", category: 4, name: "night with stars", version: "1.0"}, {emoji: "\u{1F3D9}\uFE0F", category: 4, name: "cityscape", version: "1.0"}, {emoji: "\u{1F304}", category: 4, name: "sunrise over mountains", version: "1.0"}, {emoji: "\u{1F305}", category: 4, name: "sunrise", version: "1.0"}, {emoji: "\u{1F306}", category: 4, name: "cityscape at dusk", version: "1.0"}, {emoji: "\u{1F307}", category: 4, name: "sunset", version: "1.0"}, {emoji: "\u{1F309}", category: 4, name: "bridge at night", version: "1.0"}, {emoji: "\u2668\uFE0F", category: 4, name: "hot springs", version: "1.0"}, {emoji: "\u{1F3A0}", category: 4, name: "carousel horse", version: "1.0"}, {emoji: "\u{1F3A1}", category: 4, name: "ferris wheel", version: "1.0"}, {emoji: "\u{1F3A2}", category: 4, name: "roller coaster", version: "1.0"}, {emoji: "\u{1F488}", category: 4, name: "barber pole", version: "1.0"}, {emoji: "\u{1F3AA}", category: 4, name: "circus tent", version: "1.0"}, {emoji: "\u{1F682}", category: 4, name: "locomotive", version: "1.0"}, {emoji: "\u{1F683}", category: 4, name: "railway car", version: "1.0"}, {emoji: "\u{1F684}", category: 4, name: "high-speed train", version: "1.0"}, {emoji: "\u{1F685}", category: 4, name: "bullet train", version: "1.0"}, {emoji: "\u{1F686}", category: 4, name: "train", version: "1.0"}, {emoji: "\u{1F687}", category: 4, name: "metro", version: "1.0"}, {emoji: "\u{1F688}", category: 4, name: "light rail", version: "1.0"}, {emoji: "\u{1F689}", category: 4, name: "station", version: "1.0"}, {emoji: "\u{1F68A}", category: 4, name: "tram", version: "1.0"}, {emoji: "\u{1F69D}", category: 4, name: "monorail", version: "1.0"}, {emoji: "\u{1F69E}", category: 4, name: "mountain railway", version: "1.0"}, {emoji: "\u{1F68B}", category: 4, name: "tram car", version: "1.0"}, {emoji: "\u{1F68C}", category: 4, name: "bus", version: "1.0"}, {emoji: "\u{1F68D}", category: 4, name: "oncoming bus", version: "1.0"}, {emoji: "\u{1F68E}", category: 4, name: "trolleybus", version: "1.0"}, {emoji: "\u{1F690}", category: 4, name: "minibus", version: "1.0"}, {emoji: "\u{1F691}", category: 4, name: "ambulance", version: "1.0"}, {emoji: "\u{1F692}", category: 4, name: "fire engine", version: "1.0"}, {emoji: "\u{1F693}", category: 4, name: "police car", version: "1.0"}, {emoji: "\u{1F694}", category: 4, name: "oncoming police car", version: "1.0"}, {emoji: "\u{1F695}", category: 4, name: "taxi", version: "1.0"}, {emoji: "\u{1F696}", category: 4, name: "oncoming taxi", version: "1.0"}, {emoji: "\u{1F697}", category: 4, name: "automobile", version: "1.0"}, {emoji: "\u{1F698}", category: 4, name: "oncoming automobile", version: "1.0"}, {emoji: "\u{1F699}", category: 4, name: "sport utility vehicle", version: "1.0"}, {emoji: "\u{1F6FB}", category: 4, name: "pickup truck", version: "13.0"}, {emoji: "\u{1F69A}", category: 4, name: "delivery truck", version: "1.0"}, {emoji: "\u{1F69B}", category: 4, name: "articulated lorry", version: "1.0"}, {emoji: "\u{1F69C}", category: 4, name: "tractor", version: "1.0"}, {emoji: "\u{1F3CE}\uFE0F", category: 4, name: "racing car", version: "1.0"}, {emoji: "\u{1F3CD}\uFE0F", category: 4, name: "motorcycle", version: "1.0"}, {emoji: "\u{1F6F5}", category: 4, name: "motor scooter", version: "3.0"}, {emoji: "\u{1F9BD}", category: 4, name: "manual wheelchair", version: "12.0"}, {emoji: "\u{1F9BC}", category: 4, name: "motorized wheelchair", version: "12.0"}, {emoji: "\u{1F6FA}", category: 4, name: "auto rickshaw", version: "12.0"}, {emoji: "\u{1F6B2}", category: 4, name: "bicycle", version: "1.0"}, {emoji: "\u{1F6F4}", category: 4, name: "kick scooter", version: "3.0"}, {emoji: "\u{1F6F9}", category: 4, name: "skateboard", version: "11.0"}, {emoji: "\u{1F6FC}", category: 4, name: "roller skate", version: "13.0"}, {emoji: "\u{1F68F}", category: 4, name: "bus stop", version: "1.0"}, {emoji: "\u{1F6E3}\uFE0F", category: 4, name: "motorway", version: "1.0"}, {emoji: "\u{1F6E4}\uFE0F", category: 4, name: "railway track", version: "1.0"}, {emoji: "\u{1F6E2}\uFE0F", category: 4, name: "oil drum", version: "1.0"}, {emoji: "\u26FD", category: 4, name: "fuel pump", version: "1.0"}, {emoji: "\u{1F6A8}", category: 4, name: "police car light", version: "1.0"}, {emoji: "\u{1F6A5}", category: 4, name: "horizontal traffic light", version: "1.0"}, {emoji: "\u{1F6A6}", category: 4, name: "vertical traffic light", version: "1.0"}, {emoji: "\u{1F6D1}", category: 4, name: "stop sign", version: "3.0"}, {emoji: "\u{1F6A7}", category: 4, name: "construction", version: "1.0"}, {emoji: "\u2693", category: 4, name: "anchor", version: "1.0"}, {emoji: "\u26F5", category: 4, name: "sailboat", version: "1.0"}, {emoji: "\u{1F6F6}", category: 4, name: "canoe", version: "3.0"}, {emoji: "\u{1F6A4}", category: 4, name: "speedboat", version: "1.0"}, {emoji: "\u{1F6F3}\uFE0F", category: 4, name: "passenger ship", version: "1.0"}, {emoji: "\u26F4\uFE0F", category: 4, name: "ferry", version: "1.0"}, {emoji: "\u{1F6E5}\uFE0F", category: 4, name: "motor boat", version: "1.0"}, {emoji: "\u{1F6A2}", category: 4, name: "ship", version: "1.0"}, {emoji: "\u2708\uFE0F", category: 4, name: "airplane", version: "1.0"}, {emoji: "\u{1F6E9}\uFE0F", category: 4, name: "small airplane", version: "1.0"}, {emoji: "\u{1F6EB}", category: 4, name: "airplane departure", version: "1.0"}, {emoji: "\u{1F6EC}", category: 4, name: "airplane arrival", version: "1.0"}, {emoji: "\u{1FA82}", category: 4, name: "parachute", version: "12.0"}, {emoji: "\u{1F4BA}", category: 4, name: "seat", version: "1.0"}, {emoji: "\u{1F681}", category: 4, name: "helicopter", version: "1.0"}, {emoji: "\u{1F69F}", category: 4, name: "suspension railway", version: "1.0"}, {emoji: "\u{1F6A0}", category: 4, name: "mountain cableway", version: "1.0"}, {emoji: "\u{1F6A1}", category: 4, name: "aerial tramway", version: "1.0"}, {emoji: "\u{1F6F0}\uFE0F", category: 4, name: "satellite", version: "1.0"}, {emoji: "\u{1F680}", category: 4, name: "rocket", version: "1.0"}, {emoji: "\u{1F6F8}", category: 4, name: "flying saucer", version: "5.0"}, {emoji: "\u{1F6CE}\uFE0F", category: 4, name: "bellhop bell", version: "1.0"}, {emoji: "\u{1F9F3}", category: 4, name: "luggage", version: "11.0"}, {emoji: "\u231B", category: 4, name: "hourglass done", version: "1.0"}, {emoji: "\u23F3", category: 4, name: "hourglass not done", version: "1.0"}, {emoji: "\u231A", category: 4, name: "watch", version: "1.0"}, {emoji: "\u23F0", category: 4, name: "alarm clock", version: "1.0"}, {emoji: "\u23F1\uFE0F", category: 4, name: "stopwatch", version: "1.0"}, {emoji: "\u23F2\uFE0F", category: 4, name: "timer clock", version: "1.0"}, {emoji: "\u{1F570}\uFE0F", category: 4, name: "mantelpiece clock", version: "1.0"}, {emoji: "\u{1F55B}", category: 4, name: "twelve o\u2019clock", version: "1.0"}, {emoji: "\u{1F567}", category: 4, name: "twelve-thirty", version: "1.0"}, {emoji: "\u{1F550}", category: 4, name: "one o\u2019clock", version: "1.0"}, {emoji: "\u{1F55C}", category: 4, name: "one-thirty", version: "1.0"}, {emoji: "\u{1F551}", category: 4, name: "two o\u2019clock", version: "1.0"}, {emoji: "\u{1F55D}", category: 4, name: "two-thirty", version: "1.0"}, {emoji: "\u{1F552}", category: 4, name: "three o\u2019clock", version: "1.0"}, {emoji: "\u{1F55E}", category: 4, name: "three-thirty", version: "1.0"}, {emoji: "\u{1F553}", category: 4, name: "four o\u2019clock", version: "1.0"}, {emoji: "\u{1F55F}", category: 4, name: "four-thirty", version: "1.0"}, {emoji: "\u{1F554}", category: 4, name: "five o\u2019clock", version: "1.0"}, {emoji: "\u{1F560}", category: 4, name: "five-thirty", version: "1.0"}, {emoji: "\u{1F555}", category: 4, name: "six o\u2019clock", version: "1.0"}, {emoji: "\u{1F561}", category: 4, name: "six-thirty", version: "1.0"}, {emoji: "\u{1F556}", category: 4, name: "seven o\u2019clock", version: "1.0"}, {emoji: "\u{1F562}", category: 4, name: "seven-thirty", version: "1.0"}, {emoji: "\u{1F557}", category: 4, name: "eight o\u2019clock", version: "1.0"}, {emoji: "\u{1F563}", category: 4, name: "eight-thirty", version: "1.0"}, {emoji: "\u{1F558}", category: 4, name: "nine o\u2019clock", version: "1.0"}, {emoji: "\u{1F564}", category: 4, name: "nine-thirty", version: "1.0"}, {emoji: "\u{1F559}", category: 4, name: "ten o\u2019clock", version: "1.0"}, {emoji: "\u{1F565}", category: 4, name: "ten-thirty", version: "1.0"}, {emoji: "\u{1F55A}", category: 4, name: "eleven o\u2019clock", version: "1.0"}, {emoji: "\u{1F566}", category: 4, name: "eleven-thirty", version: "1.0"}, {emoji: "\u{1F311}", category: 4, name: "new moon", version: "1.0"}, {emoji: "\u{1F312}", category: 4, name: "waxing crescent moon", version: "1.0"}, {emoji: "\u{1F313}", category: 4, name: "first quarter moon", version: "1.0"}, {emoji: "\u{1F314}", category: 4, name: "waxing gibbous moon", version: "1.0"}, {emoji: "\u{1F315}", category: 4, name: "full moon", version: "1.0"}, {emoji: "\u{1F316}", category: 4, name: "waning gibbous moon", version: "1.0"}, {emoji: "\u{1F317}", category: 4, name: "last quarter moon", version: "1.0"}, {emoji: "\u{1F318}", category: 4, name: "waning crescent moon", version: "1.0"}, {emoji: "\u{1F319}", category: 4, name: "crescent moon", version: "1.0"}, {emoji: "\u{1F31A}", category: 4, name: "new moon face", version: "1.0"}, {emoji: "\u{1F31B}", category: 4, name: "first quarter moon face", version: "1.0"}, {emoji: "\u{1F31C}", category: 4, name: "last quarter moon face", version: "1.0"}, {emoji: "\u{1F321}\uFE0F", category: 4, name: "thermometer", version: "1.0"}, {emoji: "\u2600\uFE0F", category: 4, name: "sun", version: "1.0"}, {emoji: "\u{1F31D}", category: 4, name: "full moon face", version: "1.0"}, {emoji: "\u{1F31E}", category: 4, name: "sun with face", version: "1.0"}, {emoji: "\u{1FA90}", category: 4, name: "ringed planet", version: "12.0"}, {emoji: "\u2B50", category: 4, name: "star", version: "1.0"}, {emoji: "\u{1F31F}", category: 4, name: "glowing star", version: "1.0"}, {emoji: "\u{1F320}", category: 4, name: "shooting star", version: "1.0"}, {emoji: "\u{1F30C}", category: 4, name: "milky way", version: "1.0"}, {emoji: "\u2601\uFE0F", category: 4, name: "cloud", version: "1.0"}, {emoji: "\u26C5", category: 4, name: "sun behind cloud", version: "1.0"}, {emoji: "\u26C8\uFE0F", category: 4, name: "cloud with lightning and rain", version: "1.0"}, {emoji: "\u{1F324}\uFE0F", category: 4, name: "sun behind small cloud", version: "1.0"}, {emoji: "\u{1F325}\uFE0F", category: 4, name: "sun behind large cloud", version: "1.0"}, {emoji: "\u{1F326}\uFE0F", category: 4, name: "sun behind rain cloud", version: "1.0"}, {emoji: "\u{1F327}\uFE0F", category: 4, name: "cloud with rain", version: "1.0"}, {emoji: "\u{1F328}\uFE0F", category: 4, name: "cloud with snow", version: "1.0"}, {emoji: "\u{1F329}\uFE0F", category: 4, name: "cloud with lightning", version: "1.0"}, {emoji: "\u{1F32A}\uFE0F", category: 4, name: "tornado", version: "1.0"}, {emoji: "\u{1F32B}\uFE0F", category: 4, name: "fog", version: "1.0"}, {emoji: "\u{1F32C}\uFE0F", category: 4, name: "wind face", version: "1.0"}, {emoji: "\u{1F300}", category: 4, name: "cyclone", version: "1.0"}, {emoji: "\u{1F308}", category: 4, name: "rainbow", version: "1.0"}, {emoji: "\u{1F302}", category: 4, name: "closed umbrella", version: "1.0"}, {emoji: "\u2602\uFE0F", category: 4, name: "umbrella", version: "1.0"}, {emoji: "\u2614", category: 4, name: "umbrella with rain drops", version: "1.0"}, {emoji: "\u26F1\uFE0F", category: 4, name: "umbrella on ground", version: "1.0"}, {emoji: "\u26A1", category: 4, name: "high voltage", version: "1.0"}, {emoji: "\u2744\uFE0F", category: 4, name: "snowflake", version: "1.0"}, {emoji: "\u2603\uFE0F", category: 4, name: "snowman", version: "1.0"}, {emoji: "\u26C4", category: 4, name: "snowman without snow", version: "1.0"}, {emoji: "\u2604\uFE0F", category: 4, name: "comet", version: "1.0"}, {emoji: "\u{1F525}", category: 4, name: "fire", version: "1.0"}, {emoji: "\u{1F4A7}", category: 4, name: "droplet", version: "1.0"}, {emoji: "\u{1F30A}", category: 4, name: "water wave", version: "1.0"}, {emoji: "\u{1F383}", category: 5, name: "jack-o-lantern", version: "1.0"}, {emoji: "\u{1F384}", category: 5, name: "Christmas tree", version: "1.0"}, {emoji: "\u{1F386}", category: 5, name: "fireworks", version: "1.0"}, {emoji: "\u{1F387}", category: 5, name: "sparkler", version: "1.0"}, {emoji: "\u{1F9E8}", category: 5, name: "firecracker", version: "11.0"}, {emoji: "\u2728", category: 5, name: "sparkles", version: "1.0"}, {emoji: "\u{1F388}", category: 5, name: "balloon", version: "1.0"}, {emoji: "\u{1F389}", category: 5, name: "party popper", version: "1.0"}, {emoji: "\u{1F38A}", category: 5, name: "confetti ball", version: "1.0"}, {emoji: "\u{1F38B}", category: 5, name: "tanabata tree", version: "1.0"}, {emoji: "\u{1F38D}", category: 5, name: "pine decoration", version: "1.0"}, {emoji: "\u{1F38E}", category: 5, name: "Japanese dolls", version: "1.0"}, {emoji: "\u{1F38F}", category: 5, name: "carp streamer", version: "1.0"}, {emoji: "\u{1F390}", category: 5, name: "wind chime", version: "1.0"}, {emoji: "\u{1F391}", category: 5, name: "moon viewing ceremony", version: "1.0"}, {emoji: "\u{1F9E7}", category: 5, name: "red envelope", version: "11.0"}, {emoji: "\u{1F380}", category: 5, name: "ribbon", version: "1.0"}, {emoji: "\u{1F381}", category: 5, name: "wrapped gift", version: "1.0"}, {emoji: "\u{1F397}\uFE0F", category: 5, name: "reminder ribbon", version: "1.0"}, {emoji: "\u{1F39F}\uFE0F", category: 5, name: "admission tickets", version: "1.0"}, {emoji: "\u{1F3AB}", category: 5, name: "ticket", version: "1.0"}, {emoji: "\u{1F396}\uFE0F", category: 5, name: "military medal", version: "1.0"}, {emoji: "\u{1F3C6}", category: 5, name: "trophy", version: "1.0"}, {emoji: "\u{1F3C5}", category: 5, name: "sports medal", version: "1.0"}, {emoji: "\u{1F947}", category: 5, name: "1st place medal", version: "3.0"}, {emoji: "\u{1F948}", category: 5, name: "2nd place medal", version: "3.0"}, {emoji: "\u{1F949}", category: 5, name: "3rd place medal", version: "3.0"}, {emoji: "\u26BD", category: 5, name: "soccer ball", version: "1.0"}, {emoji: "\u26BE", category: 5, name: "baseball", version: "1.0"}, {emoji: "\u{1F94E}", category: 5, name: "softball", version: "11.0"}, {emoji: "\u{1F3C0}", category: 5, name: "basketball", version: "1.0"}, {emoji: "\u{1F3D0}", category: 5, name: "volleyball", version: "1.0"}, {emoji: "\u{1F3C8}", category: 5, name: "american football", version: "1.0"}, {emoji: "\u{1F3C9}", category: 5, name: "rugby football", version: "1.0"}, {emoji: "\u{1F3BE}", category: 5, name: "tennis", version: "1.0"}, {emoji: "\u{1F94F}", category: 5, name: "flying disc", version: "11.0"}, {emoji: "\u{1F3B3}", category: 5, name: "bowling", version: "1.0"}, {emoji: "\u{1F3CF}", category: 5, name: "cricket game", version: "1.0"}, {emoji: "\u{1F3D1}", category: 5, name: "field hockey", version: "1.0"}, {emoji: "\u{1F3D2}", category: 5, name: "ice hockey", version: "1.0"}, {emoji: "\u{1F94D}", category: 5, name: "lacrosse", version: "11.0"}, {emoji: "\u{1F3D3}", category: 5, name: "ping pong", version: "1.0"}, {emoji: "\u{1F3F8}", category: 5, name: "badminton", version: "1.0"}, {emoji: "\u{1F94A}", category: 5, name: "boxing glove", version: "3.0"}, {emoji: "\u{1F94B}", category: 5, name: "martial arts uniform", version: "3.0"}, {emoji: "\u{1F945}", category: 5, name: "goal net", version: "3.0"}, {emoji: "\u26F3", category: 5, name: "flag in hole", version: "1.0"}, {emoji: "\u26F8\uFE0F", category: 5, name: "ice skate", version: "1.0"}, {emoji: "\u{1F3A3}", category: 5, name: "fishing pole", version: "1.0"}, {emoji: "\u{1F93F}", category: 5, name: "diving mask", version: "12.0"}, {emoji: "\u{1F3BD}", category: 5, name: "running shirt", version: "1.0"}, {emoji: "\u{1F3BF}", category: 5, name: "skis", version: "1.0"}, {emoji: "\u{1F6F7}", category: 5, name: "sled", version: "5.0"}, {emoji: "\u{1F94C}", category: 5, name: "curling stone", version: "5.0"}, {emoji: "\u{1F3AF}", category: 5, name: "direct hit", version: "1.0"}, {emoji: "\u{1FA80}", category: 5, name: "yo-yo", version: "12.0"}, {emoji: "\u{1FA81}", category: 5, name: "kite", version: "12.0"}, {emoji: "\u{1F3B1}", category: 5, name: "pool 8 ball", version: "1.0"}, {emoji: "\u{1F52E}", category: 5, name: "crystal ball", version: "1.0"}, {emoji: "\u{1FA84}", category: 5, name: "magic wand", version: "13.0"}, {emoji: "\u{1F9FF}", category: 5, name: "nazar amulet", version: "11.0"}, {emoji: "\u{1F3AE}", category: 5, name: "video game", version: "1.0"}, {emoji: "\u{1F579}\uFE0F", category: 5, name: "joystick", version: "1.0"}, {emoji: "\u{1F3B0}", category: 5, name: "slot machine", version: "1.0"}, {emoji: "\u{1F3B2}", category: 5, name: "game die", version: "1.0"}, {emoji: "\u{1F9E9}", category: 5, name: "puzzle piece", version: "11.0"}, {emoji: "\u{1F9F8}", category: 5, name: "teddy bear", version: "11.0"}, {emoji: "\u{1FA85}", category: 5, name: "pi\xF1ata", version: "13.0"}, {emoji: "\u{1FA86}", category: 5, name: "nesting dolls", version: "13.0"}, {emoji: "\u2660\uFE0F", category: 5, name: "spade suit", version: "1.0"}, {emoji: "\u2665\uFE0F", category: 5, name: "heart suit", version: "1.0"}, {emoji: "\u2666\uFE0F", category: 5, name: "diamond suit", version: "1.0"}, {emoji: "\u2663\uFE0F", category: 5, name: "club suit", version: "1.0"}, {emoji: "\u265F\uFE0F", category: 5, name: "chess pawn", version: "11.0"}, {emoji: "\u{1F0CF}", category: 5, name: "joker", version: "1.0"}, {emoji: "\u{1F004}", category: 5, name: "mahjong red dragon", version: "1.0"}, {emoji: "\u{1F3B4}", category: 5, name: "flower playing cards", version: "1.0"}, {emoji: "\u{1F3AD}", category: 5, name: "performing arts", version: "1.0"}, {emoji: "\u{1F5BC}\uFE0F", category: 5, name: "framed picture", version: "1.0"}, {emoji: "\u{1F3A8}", category: 5, name: "artist palette", version: "1.0"}, {emoji: "\u{1F9F5}", category: 5, name: "thread", version: "11.0"}, {emoji: "\u{1FAA1}", category: 5, name: "sewing needle", version: "13.0"}, {emoji: "\u{1F9F6}", category: 5, name: "yarn", version: "11.0"}, {emoji: "\u{1FAA2}", category: 5, name: "knot", version: "13.0"}, {emoji: "\u{1F453}", category: 6, name: "glasses", version: "1.0"}, {emoji: "\u{1F576}\uFE0F", category: 6, name: "sunglasses", version: "1.0"}, {emoji: "\u{1F97D}", category: 6, name: "goggles", version: "11.0"}, {emoji: "\u{1F97C}", category: 6, name: "lab coat", version: "11.0"}, {emoji: "\u{1F9BA}", category: 6, name: "safety vest", version: "12.0"}, {emoji: "\u{1F454}", category: 6, name: "necktie", version: "1.0"}, {emoji: "\u{1F455}", category: 6, name: "t-shirt", version: "1.0"}, {emoji: "\u{1F456}", category: 6, name: "jeans", version: "1.0"}, {emoji: "\u{1F9E3}", category: 6, name: "scarf", version: "5.0"}, {emoji: "\u{1F9E4}", category: 6, name: "gloves", version: "5.0"}, {emoji: "\u{1F9E5}", category: 6, name: "coat", version: "5.0"}, {emoji: "\u{1F9E6}", category: 6, name: "socks", version: "5.0"}, {emoji: "\u{1F457}", category: 6, name: "dress", version: "1.0"}, {emoji: "\u{1F458}", category: 6, name: "kimono", version: "1.0"}, {emoji: "\u{1F97B}", category: 6, name: "sari", version: "12.0"}, {emoji: "\u{1FA71}", category: 6, name: "one-piece swimsuit", version: "12.0"}, {emoji: "\u{1FA72}", category: 6, name: "briefs", version: "12.0"}, {emoji: "\u{1FA73}", category: 6, name: "shorts", version: "12.0"}, {emoji: "\u{1F459}", category: 6, name: "bikini", version: "1.0"}, {emoji: "\u{1F45A}", category: 6, name: "woman\u2019s clothes", version: "1.0"}, {emoji: "\u{1F45B}", category: 6, name: "purse", version: "1.0"}, {emoji: "\u{1F45C}", category: 6, name: "handbag", version: "1.0"}, {emoji: "\u{1F45D}", category: 6, name: "clutch bag", version: "1.0"}, {emoji: "\u{1F6CD}\uFE0F", category: 6, name: "shopping bags", version: "1.0"}, {emoji: "\u{1F392}", category: 6, name: "backpack", version: "1.0"}, {emoji: "\u{1FA74}", category: 6, name: "thong sandal", version: "13.0"}, {emoji: "\u{1F45E}", category: 6, name: "man\u2019s shoe", version: "1.0"}, {emoji: "\u{1F45F}", category: 6, name: "running shoe", version: "1.0"}, {emoji: "\u{1F97E}", category: 6, name: "hiking boot", version: "11.0"}, {emoji: "\u{1F97F}", category: 6, name: "flat shoe", version: "11.0"}, {emoji: "\u{1F460}", category: 6, name: "high-heeled shoe", version: "1.0"}, {emoji: "\u{1F461}", category: 6, name: "woman\u2019s sandal", version: "1.0"}, {emoji: "\u{1FA70}", category: 6, name: "ballet shoes", version: "12.0"}, {emoji: "\u{1F462}", category: 6, name: "woman\u2019s boot", version: "1.0"}, {emoji: "\u{1F451}", category: 6, name: "crown", version: "1.0"}, {emoji: "\u{1F452}", category: 6, name: "woman\u2019s hat", version: "1.0"}, {emoji: "\u{1F3A9}", category: 6, name: "top hat", version: "1.0"}, {emoji: "\u{1F393}", category: 6, name: "graduation cap", version: "1.0"}, {emoji: "\u{1F9E2}", category: 6, name: "billed cap", version: "5.0"}, {emoji: "\u{1FA96}", category: 6, name: "military helmet", version: "13.0"}, {emoji: "\u26D1\uFE0F", category: 6, name: "rescue worker\u2019s helmet", version: "1.0"}, {emoji: "\u{1F4FF}", category: 6, name: "prayer beads", version: "1.0"}, {emoji: "\u{1F484}", category: 6, name: "lipstick", version: "1.0"}, {emoji: "\u{1F48D}", category: 6, name: "ring", version: "1.0"}, {emoji: "\u{1F48E}", category: 6, name: "gem stone", version: "1.0"}, {emoji: "\u{1F507}", category: 6, name: "muted speaker", version: "1.0"}, {emoji: "\u{1F508}", category: 6, name: "speaker low volume", version: "1.0"}, {emoji: "\u{1F509}", category: 6, name: "speaker medium volume", version: "1.0"}, {emoji: "\u{1F50A}", category: 6, name: "speaker high volume", version: "1.0"}, {emoji: "\u{1F4E2}", category: 6, name: "loudspeaker", version: "1.0"}, {emoji: "\u{1F4E3}", category: 6, name: "megaphone", version: "1.0"}, {emoji: "\u{1F4EF}", category: 6, name: "postal horn", version: "1.0"}, {emoji: "\u{1F514}", category: 6, name: "bell", version: "1.0"}, {emoji: "\u{1F515}", category: 6, name: "bell with slash", version: "1.0"}, {emoji: "\u{1F3BC}", category: 6, name: "musical score", version: "1.0"}, {emoji: "\u{1F3B5}", category: 6, name: "musical note", version: "1.0"}, {emoji: "\u{1F3B6}", category: 6, name: "musical notes", version: "1.0"}, {emoji: "\u{1F399}\uFE0F", category: 6, name: "studio microphone", version: "1.0"}, {emoji: "\u{1F39A}\uFE0F", category: 6, name: "level slider", version: "1.0"}, {emoji: "\u{1F39B}\uFE0F", category: 6, name: "control knobs", version: "1.0"}, {emoji: "\u{1F3A4}", category: 6, name: "microphone", version: "1.0"}, {emoji: "\u{1F3A7}", category: 6, name: "headphone", version: "1.0"}, {emoji: "\u{1F4FB}", category: 6, name: "radio", version: "1.0"}, {emoji: "\u{1F3B7}", category: 6, name: "saxophone", version: "1.0"}, {emoji: "\u{1FA97}", category: 6, name: "accordion", version: "13.0"}, {emoji: "\u{1F3B8}", category: 6, name: "guitar", version: "1.0"}, {emoji: "\u{1F3B9}", category: 6, name: "musical keyboard", version: "1.0"}, {emoji: "\u{1F3BA}", category: 6, name: "trumpet", version: "1.0"}, {emoji: "\u{1F3BB}", category: 6, name: "violin", version: "1.0"}, {emoji: "\u{1FA95}", category: 6, name: "banjo", version: "12.0"}, {emoji: "\u{1F941}", category: 6, name: "drum", version: "3.0"}, {emoji: "\u{1FA98}", category: 6, name: "long drum", version: "13.0"}, {emoji: "\u{1F4F1}", category: 6, name: "mobile phone", version: "1.0"}, {emoji: "\u{1F4F2}", category: 6, name: "mobile phone with arrow", version: "1.0"}, {emoji: "\u260E\uFE0F", category: 6, name: "telephone", version: "1.0"}, {emoji: "\u{1F4DE}", category: 6, name: "telephone receiver", version: "1.0"}, {emoji: "\u{1F4DF}", category: 6, name: "pager", version: "1.0"}, {emoji: "\u{1F4E0}", category: 6, name: "fax machine", version: "1.0"}, {emoji: "\u{1F50B}", category: 6, name: "battery", version: "1.0"}, {emoji: "\u{1F50C}", category: 6, name: "electric plug", version: "1.0"}, {emoji: "\u{1F4BB}", category: 6, name: "laptop", version: "1.0"}, {emoji: "\u{1F5A5}\uFE0F", category: 6, name: "desktop computer", version: "1.0"}, {emoji: "\u{1F5A8}\uFE0F", category: 6, name: "printer", version: "1.0"}, {emoji: "\u2328\uFE0F", category: 6, name: "keyboard", version: "1.0"}, {emoji: "\u{1F5B1}\uFE0F", category: 6, name: "computer mouse", version: "1.0"}, {emoji: "\u{1F5B2}\uFE0F", category: 6, name: "trackball", version: "1.0"}, {emoji: "\u{1F4BD}", category: 6, name: "computer disk", version: "1.0"}, {emoji: "\u{1F4BE}", category: 6, name: "floppy disk", version: "1.0"}, {emoji: "\u{1F4BF}", category: 6, name: "optical disk", version: "1.0"}, {emoji: "\u{1F4C0}", category: 6, name: "dvd", version: "1.0"}, {emoji: "\u{1F9EE}", category: 6, name: "abacus", version: "11.0"}, {emoji: "\u{1F3A5}", category: 6, name: "movie camera", version: "1.0"}, {emoji: "\u{1F39E}\uFE0F", category: 6, name: "film frames", version: "1.0"}, {emoji: "\u{1F4FD}\uFE0F", category: 6, name: "film projector", version: "1.0"}, {emoji: "\u{1F3AC}", category: 6, name: "clapper board", version: "1.0"}, {emoji: "\u{1F4FA}", category: 6, name: "television", version: "1.0"}, {emoji: "\u{1F4F7}", category: 6, name: "camera", version: "1.0"}, {emoji: "\u{1F4F8}", category: 6, name: "camera with flash", version: "1.0"}, {emoji: "\u{1F4F9}", category: 6, name: "video camera", version: "1.0"}, {emoji: "\u{1F4FC}", category: 6, name: "videocassette", version: "1.0"}, {emoji: "\u{1F50D}", category: 6, name: "magnifying glass tilted left", version: "1.0"}, {emoji: "\u{1F50E}", category: 6, name: "magnifying glass tilted right", version: "1.0"}, {emoji: "\u{1F56F}\uFE0F", category: 6, name: "candle", version: "1.0"}, {emoji: "\u{1F4A1}", category: 6, name: "light bulb", version: "1.0"}, {emoji: "\u{1F526}", category: 6, name: "flashlight", version: "1.0"}, {emoji: "\u{1F3EE}", category: 6, name: "red paper lantern", version: "1.0"}, {emoji: "\u{1FA94}", category: 6, name: "diya lamp", version: "12.0"}, {emoji: "\u{1F4D4}", category: 6, name: "notebook with decorative cover", version: "1.0"}, {emoji: "\u{1F4D5}", category: 6, name: "closed book", version: "1.0"}, {emoji: "\u{1F4D6}", category: 6, name: "open book", version: "1.0"}, {emoji: "\u{1F4D7}", category: 6, name: "green book", version: "1.0"}, {emoji: "\u{1F4D8}", category: 6, name: "blue book", version: "1.0"}, {emoji: "\u{1F4D9}", category: 6, name: "orange book", version: "1.0"}, {emoji: "\u{1F4DA}", category: 6, name: "books", version: "1.0"}, {emoji: "\u{1F4D3}", category: 6, name: "notebook", version: "1.0"}, {emoji: "\u{1F4D2}", category: 6, name: "ledger", version: "1.0"}, {emoji: "\u{1F4C3}", category: 6, name: "page with curl", version: "1.0"}, {emoji: "\u{1F4DC}", category: 6, name: "scroll", version: "1.0"}, {emoji: "\u{1F4C4}", category: 6, name: "page facing up", version: "1.0"}, {emoji: "\u{1F4F0}", category: 6, name: "newspaper", version: "1.0"}, {emoji: "\u{1F5DE}\uFE0F", category: 6, name: "rolled-up newspaper", version: "1.0"}, {emoji: "\u{1F4D1}", category: 6, name: "bookmark tabs", version: "1.0"}, {emoji: "\u{1F516}", category: 6, name: "bookmark", version: "1.0"}, {emoji: "\u{1F3F7}\uFE0F", category: 6, name: "label", version: "1.0"}, {emoji: "\u{1F4B0}", category: 6, name: "money bag", version: "1.0"}, {emoji: "\u{1FA99}", category: 6, name: "coin", version: "13.0"}, {emoji: "\u{1F4B4}", category: 6, name: "yen banknote", version: "1.0"}, {emoji: "\u{1F4B5}", category: 6, name: "dollar banknote", version: "1.0"}, {emoji: "\u{1F4B6}", category: 6, name: "euro banknote", version: "1.0"}, {emoji: "\u{1F4B7}", category: 6, name: "pound banknote", version: "1.0"}, {emoji: "\u{1F4B8}", category: 6, name: "money with wings", version: "1.0"}, {emoji: "\u{1F4B3}", category: 6, name: "credit card", version: "1.0"}, {emoji: "\u{1F9FE}", category: 6, name: "receipt", version: "11.0"}, {emoji: "\u{1F4B9}", category: 6, name: "chart increasing with yen", version: "1.0"}, {emoji: "\u2709\uFE0F", category: 6, name: "envelope", version: "1.0"}, {emoji: "\u{1F4E7}", category: 6, name: "e-mail", version: "1.0"}, {emoji: "\u{1F4E8}", category: 6, name: "incoming envelope", version: "1.0"}, {emoji: "\u{1F4E9}", category: 6, name: "envelope with arrow", version: "1.0"}, {emoji: "\u{1F4E4}", category: 6, name: "outbox tray", version: "1.0"}, {emoji: "\u{1F4E5}", category: 6, name: "inbox tray", version: "1.0"}, {emoji: "\u{1F4E6}", category: 6, name: "package", version: "1.0"}, {emoji: "\u{1F4EB}", category: 6, name: "closed mailbox with raised flag", version: "1.0"}, {emoji: "\u{1F4EA}", category: 6, name: "closed mailbox with lowered flag", version: "1.0"}, {emoji: "\u{1F4EC}", category: 6, name: "open mailbox with raised flag", version: "1.0"}, {emoji: "\u{1F4ED}", category: 6, name: "open mailbox with lowered flag", version: "1.0"}, {emoji: "\u{1F4EE}", category: 6, name: "postbox", version: "1.0"}, {emoji: "\u{1F5F3}\uFE0F", category: 6, name: "ballot box with ballot", version: "1.0"}, {emoji: "\u270F\uFE0F", category: 6, name: "pencil", version: "1.0"}, {emoji: "\u2712\uFE0F", category: 6, name: "black nib", version: "1.0"}, {emoji: "\u{1F58B}\uFE0F", category: 6, name: "fountain pen", version: "1.0"}, {emoji: "\u{1F58A}\uFE0F", category: 6, name: "pen", version: "1.0"}, {emoji: "\u{1F58C}\uFE0F", category: 6, name: "paintbrush", version: "1.0"}, {emoji: "\u{1F58D}\uFE0F", category: 6, name: "crayon", version: "1.0"}, {emoji: "\u{1F4DD}", category: 6, name: "memo", version: "1.0"}, {emoji: "\u{1F4BC}", category: 6, name: "briefcase", version: "1.0"}, {emoji: "\u{1F4C1}", category: 6, name: "file folder", version: "1.0"}, {emoji: "\u{1F4C2}", category: 6, name: "open file folder", version: "1.0"}, {emoji: "\u{1F5C2}\uFE0F", category: 6, name: "card index dividers", version: "1.0"}, {emoji: "\u{1F4C5}", category: 6, name: "calendar", version: "1.0"}, {emoji: "\u{1F4C6}", category: 6, name: "tear-off calendar", version: "1.0"}, {emoji: "\u{1F5D2}\uFE0F", category: 6, name: "spiral notepad", version: "1.0"}, {emoji: "\u{1F5D3}\uFE0F", category: 6, name: "spiral calendar", version: "1.0"}, {emoji: "\u{1F4C7}", category: 6, name: "card index", version: "1.0"}, {emoji: "\u{1F4C8}", category: 6, name: "chart increasing", version: "1.0"}, {emoji: "\u{1F4C9}", category: 6, name: "chart decreasing", version: "1.0"}, {emoji: "\u{1F4CA}", category: 6, name: "bar chart", version: "1.0"}, {emoji: "\u{1F4CB}", category: 6, name: "clipboard", version: "1.0"}, {emoji: "\u{1F4CC}", category: 6, name: "pushpin", version: "1.0"}, {emoji: "\u{1F4CD}", category: 6, name: "round pushpin", version: "1.0"}, {emoji: "\u{1F4CE}", category: 6, name: "paperclip", version: "1.0"}, {emoji: "\u{1F587}\uFE0F", category: 6, name: "linked paperclips", version: "1.0"}, {emoji: "\u{1F4CF}", category: 6, name: "straight ruler", version: "1.0"}, {emoji: "\u{1F4D0}", category: 6, name: "triangular ruler", version: "1.0"}, {emoji: "\u2702\uFE0F", category: 6, name: "scissors", version: "1.0"}, {emoji: "\u{1F5C3}\uFE0F", category: 6, name: "card file box", version: "1.0"}, {emoji: "\u{1F5C4}\uFE0F", category: 6, name: "file cabinet", version: "1.0"}, {emoji: "\u{1F5D1}\uFE0F", category: 6, name: "wastebasket", version: "1.0"}, {emoji: "\u{1F512}", category: 6, name: "locked", version: "1.0"}, {emoji: "\u{1F513}", category: 6, name: "unlocked", version: "1.0"}, {emoji: "\u{1F50F}", category: 6, name: "locked with pen", version: "1.0"}, {emoji: "\u{1F510}", category: 6, name: "locked with key", version: "1.0"}, {emoji: "\u{1F511}", category: 6, name: "key", version: "1.0"}, {emoji: "\u{1F5DD}\uFE0F", category: 6, name: "old key", version: "1.0"}, {emoji: "\u{1F528}", category: 6, name: "hammer", version: "1.0"}, {emoji: "\u{1FA93}", category: 6, name: "axe", version: "12.0"}, {emoji: "\u26CF\uFE0F", category: 6, name: "pick", version: "1.0"}, {emoji: "\u2692\uFE0F", category: 6, name: "hammer and pick", version: "1.0"}, {emoji: "\u{1F6E0}\uFE0F", category: 6, name: "hammer and wrench", version: "1.0"}, {emoji: "\u{1F5E1}\uFE0F", category: 6, name: "dagger", version: "1.0"}, {emoji: "\u2694\uFE0F", category: 6, name: "crossed swords", version: "1.0"}, {emoji: "\u{1F52B}", category: 6, name: "pistol", version: "1.0"}, {emoji: "\u{1FA83}", category: 6, name: "boomerang", version: "13.0"}, {emoji: "\u{1F3F9}", category: 6, name: "bow and arrow", version: "1.0"}, {emoji: "\u{1F6E1}\uFE0F", category: 6, name: "shield", version: "1.0"}, {emoji: "\u{1FA9A}", category: 6, name: "carpentry saw", version: "13.0"}, {emoji: "\u{1F527}", category: 6, name: "wrench", version: "1.0"}, {emoji: "\u{1FA9B}", category: 6, name: "screwdriver", version: "13.0"}, {emoji: "\u{1F529}", category: 6, name: "nut and bolt", version: "1.0"}, {emoji: "\u2699\uFE0F", category: 6, name: "gear", version: "1.0"}, {emoji: "\u{1F5DC}\uFE0F", category: 6, name: "clamp", version: "1.0"}, {emoji: "\u2696\uFE0F", category: 6, name: "balance scale", version: "1.0"}, {emoji: "\u{1F9AF}", category: 6, name: "white cane", version: "12.0"}, {emoji: "\u{1F517}", category: 6, name: "link", version: "1.0"}, {emoji: "\u26D3\uFE0F", category: 6, name: "chains", version: "1.0"}, {emoji: "\u{1FA9D}", category: 6, name: "hook", version: "13.0"}, {emoji: "\u{1F9F0}", category: 6, name: "toolbox", version: "11.0"}, {emoji: "\u{1F9F2}", category: 6, name: "magnet", version: "11.0"}, {emoji: "\u{1FA9C}", category: 6, name: "ladder", version: "13.0"}, {emoji: "\u2697\uFE0F", category: 6, name: "alembic", version: "1.0"}, {emoji: "\u{1F9EA}", category: 6, name: "test tube", version: "11.0"}, {emoji: "\u{1F9EB}", category: 6, name: "petri dish", version: "11.0"}, {emoji: "\u{1F9EC}", category: 6, name: "dna", version: "11.0"}, {emoji: "\u{1F52C}", category: 6, name: "microscope", version: "1.0"}, {emoji: "\u{1F52D}", category: 6, name: "telescope", version: "1.0"}, {emoji: "\u{1F4E1}", category: 6, name: "satellite antenna", version: "1.0"}, {emoji: "\u{1F489}", category: 6, name: "syringe", version: "1.0"}, {emoji: "\u{1FA78}", category: 6, name: "drop of blood", version: "12.0"}, {emoji: "\u{1F48A}", category: 6, name: "pill", version: "1.0"}, {emoji: "\u{1FA79}", category: 6, name: "adhesive bandage", version: "12.0"}, {emoji: "\u{1FA7A}", category: 6, name: "stethoscope", version: "12.0"}, {emoji: "\u{1F6AA}", category: 6, name: "door", version: "1.0"}, {emoji: "\u{1F6D7}", category: 6, name: "elevator", version: "13.0"}, {emoji: "\u{1FA9E}", category: 6, name: "mirror", version: "13.0"}, {emoji: "\u{1FA9F}", category: 6, name: "window", version: "13.0"}, {emoji: "\u{1F6CF}\uFE0F", category: 6, name: "bed", version: "1.0"}, {emoji: "\u{1F6CB}\uFE0F", category: 6, name: "couch and lamp", version: "1.0"}, {emoji: "\u{1FA91}", category: 6, name: "chair", version: "12.0"}, {emoji: "\u{1F6BD}", category: 6, name: "toilet", version: "1.0"}, {emoji: "\u{1FAA0}", category: 6, name: "plunger", version: "13.0"}, {emoji: "\u{1F6BF}", category: 6, name: "shower", version: "1.0"}, {emoji: "\u{1F6C1}", category: 6, name: "bathtub", version: "1.0"}, {emoji: "\u{1FAA4}", category: 6, name: "mouse trap", version: "13.0"}, {emoji: "\u{1FA92}", category: 6, name: "razor", version: "12.0"}, {emoji: "\u{1F9F4}", category: 6, name: "lotion bottle", version: "11.0"}, {emoji: "\u{1F9F7}", category: 6, name: "safety pin", version: "11.0"}, {emoji: "\u{1F9F9}", category: 6, name: "broom", version: "11.0"}, {emoji: "\u{1F9FA}", category: 6, name: "basket", version: "11.0"}, {emoji: "\u{1F9FB}", category: 6, name: "roll of paper", version: "11.0"}, {emoji: "\u{1FAA3}", category: 6, name: "bucket", version: "13.0"}, {emoji: "\u{1F9FC}", category: 6, name: "soap", version: "11.0"}, {emoji: "\u{1FAA5}", category: 6, name: "toothbrush", version: "13.0"}, {emoji: "\u{1F9FD}", category: 6, name: "sponge", version: "11.0"}, {emoji: "\u{1F9EF}", category: 6, name: "fire extinguisher", version: "11.0"}, {emoji: "\u{1F6D2}", category: 6, name: "shopping cart", version: "3.0"}, {emoji: "\u{1F6AC}", category: 6, name: "cigarette", version: "1.0"}, {emoji: "\u26B0\uFE0F", category: 6, name: "coffin", version: "1.0"}, {emoji: "\u{1FAA6}", category: 6, name: "headstone", version: "13.0"}, {emoji: "\u26B1\uFE0F", category: 6, name: "funeral urn", version: "1.0"}, {emoji: "\u{1F5FF}", category: 6, name: "moai", version: "1.0"}, {emoji: "\u{1FAA7}", category: 6, name: "placard", version: "13.0"}, {emoji: "\u{1F3E7}", category: 7, name: "ATM sign", version: "1.0"}, {emoji: "\u{1F6AE}", category: 7, name: "litter in bin sign", version: "1.0"}, {emoji: "\u{1F6B0}", category: 7, name: "potable water", version: "1.0"}, {emoji: "\u267F", category: 7, name: "wheelchair symbol", version: "1.0"}, {emoji: "\u{1F6B9}", category: 7, name: "men\u2019s room", version: "1.0"}, {emoji: "\u{1F6BA}", category: 7, name: "women\u2019s room", version: "1.0"}, {emoji: "\u{1F6BB}", category: 7, name: "restroom", version: "1.0"}, {emoji: "\u{1F6BC}", category: 7, name: "baby symbol", version: "1.0"}, {emoji: "\u{1F6BE}", category: 7, name: "water closet", version: "1.0"}, {emoji: "\u{1F6C2}", category: 7, name: "passport control", version: "1.0"}, {emoji: "\u{1F6C3}", category: 7, name: "customs", version: "1.0"}, {emoji: "\u{1F6C4}", category: 7, name: "baggage claim", version: "1.0"}, {emoji: "\u{1F6C5}", category: 7, name: "left luggage", version: "1.0"}, {emoji: "\u26A0\uFE0F", category: 7, name: "warning", version: "1.0"}, {emoji: "\u{1F6B8}", category: 7, name: "children crossing", version: "1.0"}, {emoji: "\u26D4", category: 7, name: "no entry", version: "1.0"}, {emoji: "\u{1F6AB}", category: 7, name: "prohibited", version: "1.0"}, {emoji: "\u{1F6B3}", category: 7, name: "no bicycles", version: "1.0"}, {emoji: "\u{1F6AD}", category: 7, name: "no smoking", version: "1.0"}, {emoji: "\u{1F6AF}", category: 7, name: "no littering", version: "1.0"}, {emoji: "\u{1F6B1}", category: 7, name: "non-potable water", version: "1.0"}, {emoji: "\u{1F6B7}", category: 7, name: "no pedestrians", version: "1.0"}, {emoji: "\u{1F4F5}", category: 7, name: "no mobile phones", version: "1.0"}, {emoji: "\u{1F51E}", category: 7, name: "no one under eighteen", version: "1.0"}, {emoji: "\u2622\uFE0F", category: 7, name: "radioactive", version: "1.0"}, {emoji: "\u2623\uFE0F", category: 7, name: "biohazard", version: "1.0"}, {emoji: "\u2B06\uFE0F", category: 7, name: "up arrow", version: "1.0"}, {emoji: "\u2197\uFE0F", category: 7, name: "up-right arrow", version: "1.0"}, {emoji: "\u27A1\uFE0F", category: 7, name: "right arrow", version: "1.0"}, {emoji: "\u2198\uFE0F", category: 7, name: "down-right arrow", version: "1.0"}, {emoji: "\u2B07\uFE0F", category: 7, name: "down arrow", version: "1.0"}, {emoji: "\u2199\uFE0F", category: 7, name: "down-left arrow", version: "1.0"}, {emoji: "\u2B05\uFE0F", category: 7, name: "left arrow", version: "1.0"}, {emoji: "\u2196\uFE0F", category: 7, name: "up-left arrow", version: "1.0"}, {emoji: "\u2195\uFE0F", category: 7, name: "up-down arrow", version: "1.0"}, {emoji: "\u2194\uFE0F", category: 7, name: "left-right arrow", version: "1.0"}, {emoji: "\u21A9\uFE0F", category: 7, name: "right arrow curving left", version: "1.0"}, {emoji: "\u21AA\uFE0F", category: 7, name: "left arrow curving right", version: "1.0"}, {emoji: "\u2934\uFE0F", category: 7, name: "right arrow curving up", version: "1.0"}, {emoji: "\u2935\uFE0F", category: 7, name: "right arrow curving down", version: "1.0"}, {emoji: "\u{1F503}", category: 7, name: "clockwise vertical arrows", version: "1.0"}, {emoji: "\u{1F504}", category: 7, name: "counterclockwise arrows button", version: "1.0"}, {emoji: "\u{1F519}", category: 7, name: "BACK arrow", version: "1.0"}, {emoji: "\u{1F51A}", category: 7, name: "END arrow", version: "1.0"}, {emoji: "\u{1F51B}", category: 7, name: "ON! arrow", version: "1.0"}, {emoji: "\u{1F51C}", category: 7, name: "SOON arrow", version: "1.0"}, {emoji: "\u{1F51D}", category: 7, name: "TOP arrow", version: "1.0"}, {emoji: "\u{1F6D0}", category: 7, name: "place of worship", version: "1.0"}, {emoji: "\u269B\uFE0F", category: 7, name: "atom symbol", version: "1.0"}, {emoji: "\u{1F549}\uFE0F", category: 7, name: "om", version: "1.0"}, {emoji: "\u2721\uFE0F", category: 7, name: "star of David", version: "1.0"}, {emoji: "\u2638\uFE0F", category: 7, name: "wheel of dharma", version: "1.0"}, {emoji: "\u262F\uFE0F", category: 7, name: "yin yang", version: "1.0"}, {emoji: "\u271D\uFE0F", category: 7, name: "latin cross", version: "1.0"}, {emoji: "\u2626\uFE0F", category: 7, name: "orthodox cross", version: "1.0"}, {emoji: "\u262A\uFE0F", category: 7, name: "star and crescent", version: "1.0"}, {emoji: "\u262E\uFE0F", category: 7, name: "peace symbol", version: "1.0"}, {emoji: "\u{1F54E}", category: 7, name: "menorah", version: "1.0"}, {emoji: "\u{1F52F}", category: 7, name: "dotted six-pointed star", version: "1.0"}, {emoji: "\u2648", category: 7, name: "Aries", version: "1.0"}, {emoji: "\u2649", category: 7, name: "Taurus", version: "1.0"}, {emoji: "\u264A", category: 7, name: "Gemini", version: "1.0"}, {emoji: "\u264B", category: 7, name: "Cancer", version: "1.0"}, {emoji: "\u264C", category: 7, name: "Leo", version: "1.0"}, {emoji: "\u264D", category: 7, name: "Virgo", version: "1.0"}, {emoji: "\u264E", category: 7, name: "Libra", version: "1.0"}, {emoji: "\u264F", category: 7, name: "Scorpio", version: "1.0"}, {emoji: "\u2650", category: 7, name: "Sagittarius", version: "1.0"}, {emoji: "\u2651", category: 7, name: "Capricorn", version: "1.0"}, {emoji: "\u2652", category: 7, name: "Aquarius", version: "1.0"}, {emoji: "\u2653", category: 7, name: "Pisces", version: "1.0"}, {emoji: "\u26CE", category: 7, name: "Ophiuchus", version: "1.0"}, {emoji: "\u{1F500}", category: 7, name: "shuffle tracks button", version: "1.0"}, {emoji: "\u{1F501}", category: 7, name: "repeat button", version: "1.0"}, {emoji: "\u{1F502}", category: 7, name: "repeat single button", version: "1.0"}, {emoji: "\u25B6\uFE0F", category: 7, name: "play button", version: "1.0"}, {emoji: "\u23E9", category: 7, name: "fast-forward button", version: "1.0"}, {emoji: "\u23ED\uFE0F", category: 7, name: "next track button", version: "1.0"}, {emoji: "\u23EF\uFE0F", category: 7, name: "play or pause button", version: "1.0"}, {emoji: "\u25C0\uFE0F", category: 7, name: "reverse button", version: "1.0"}, {emoji: "\u23EA", category: 7, name: "fast reverse button", version: "1.0"}, {emoji: "\u23EE\uFE0F", category: 7, name: "last track button", version: "1.0"}, {emoji: "\u{1F53C}", category: 7, name: "upwards button", version: "1.0"}, {emoji: "\u23EB", category: 7, name: "fast up button", version: "1.0"}, {emoji: "\u{1F53D}", category: 7, name: "downwards button", version: "1.0"}, {emoji: "\u23EC", category: 7, name: "fast down button", version: "1.0"}, {emoji: "\u23F8\uFE0F", category: 7, name: "pause button", version: "1.0"}, {emoji: "\u23F9\uFE0F", category: 7, name: "stop button", version: "1.0"}, {emoji: "\u23FA\uFE0F", category: 7, name: "record button", version: "1.0"}, {emoji: "\u23CF\uFE0F", category: 7, name: "eject button", version: "1.0"}, {emoji: "\u{1F3A6}", category: 7, name: "cinema", version: "1.0"}, {emoji: "\u{1F505}", category: 7, name: "dim button", version: "1.0"}, {emoji: "\u{1F506}", category: 7, name: "bright button", version: "1.0"}, {emoji: "\u{1F4F6}", category: 7, name: "antenna bars", version: "1.0"}, {emoji: "\u{1F4F3}", category: 7, name: "vibration mode", version: "1.0"}, {emoji: "\u{1F4F4}", category: 7, name: "mobile phone off", version: "1.0"}, {emoji: "\u2640\uFE0F", category: 7, name: "female sign", version: "4.0"}, {emoji: "\u2642\uFE0F", category: 7, name: "male sign", version: "4.0"}, {emoji: "\u26A7\uFE0F", category: 7, name: "transgender symbol", version: "13.0"}, {emoji: "\u2716\uFE0F", category: 7, name: "multiply", version: "1.0"}, {emoji: "\u2795", category: 7, name: "plus", version: "1.0"}, {emoji: "\u2796", category: 7, name: "minus", version: "1.0"}, {emoji: "\u2797", category: 7, name: "divide", version: "1.0"}, {emoji: "\u267E\uFE0F", category: 7, name: "infinity", version: "11.0"}, {emoji: "\u203C\uFE0F", category: 7, name: "double exclamation mark", version: "1.0"}, {emoji: "\u2049\uFE0F", category: 7, name: "exclamation question mark", version: "1.0"}, {emoji: "\u2753", category: 7, name: "question mark", version: "1.0"}, {emoji: "\u2754", category: 7, name: "white question mark", version: "1.0"}, {emoji: "\u2755", category: 7, name: "white exclamation mark", version: "1.0"}, {emoji: "\u2757", category: 7, name: "exclamation mark", version: "1.0"}, {emoji: "\u3030\uFE0F", category: 7, name: "wavy dash", version: "1.0"}, {emoji: "\u{1F4B1}", category: 7, name: "currency exchange", version: "1.0"}, {emoji: "\u{1F4B2}", category: 7, name: "heavy dollar sign", version: "1.0"}, {emoji: "\u2695\uFE0F", category: 7, name: "medical symbol", version: "4.0"}, {emoji: "\u267B\uFE0F", category: 7, name: "recycling symbol", version: "1.0"}, {emoji: "\u269C\uFE0F", category: 7, name: "fleur-de-lis", version: "1.0"}, {emoji: "\u{1F531}", category: 7, name: "trident emblem", version: "1.0"}, {emoji: "\u{1F4DB}", category: 7, name: "name badge", version: "1.0"}, {emoji: "\u{1F530}", category: 7, name: "Japanese symbol for beginner", version: "1.0"}, {emoji: "\u2B55", category: 7, name: "hollow red circle", version: "1.0"}, {emoji: "\u2705", category: 7, name: "check mark button", version: "1.0"}, {emoji: "\u2611\uFE0F", category: 7, name: "check box with check", version: "1.0"}, {emoji: "\u2714\uFE0F", category: 7, name: "check mark", version: "1.0"}, {emoji: "\u274C", category: 7, name: "cross mark", version: "1.0"}, {emoji: "\u274E", category: 7, name: "cross mark button", version: "1.0"}, {emoji: "\u27B0", category: 7, name: "curly loop", version: "1.0"}, {emoji: "\u27BF", category: 7, name: "double curly loop", version: "1.0"}, {emoji: "\u303D\uFE0F", category: 7, name: "part alternation mark", version: "1.0"}, {emoji: "\u2733\uFE0F", category: 7, name: "eight-spoked asterisk", version: "1.0"}, {emoji: "\u2734\uFE0F", category: 7, name: "eight-pointed star", version: "1.0"}, {emoji: "\u2747\uFE0F", category: 7, name: "sparkle", version: "1.0"}, {emoji: "\xA9\uFE0F", category: 7, name: "copyright", version: "1.0"}, {emoji: "\xAE\uFE0F", category: 7, name: "registered", version: "1.0"}, {emoji: "\u2122\uFE0F", category: 7, name: "trade mark", version: "1.0"}, {emoji: "#\uFE0F\u20E3", category: 7, name: "keycap: #", version: "1.0"}, {emoji: "*\uFE0F\u20E3", category: 7, name: "keycap: *", version: "2.0"}, {emoji: "0\uFE0F\u20E3", category: 7, name: "keycap: 0", version: "1.0"}, {emoji: "1\uFE0F\u20E3", category: 7, name: "keycap: 1", version: "1.0"}, {emoji: "2\uFE0F\u20E3", category: 7, name: "keycap: 2", version: "1.0"}, {emoji: "3\uFE0F\u20E3", category: 7, name: "keycap: 3", version: "1.0"}, {emoji: "4\uFE0F\u20E3", category: 7, name: "keycap: 4", version: "1.0"}, {emoji: "5\uFE0F\u20E3", category: 7, name: "keycap: 5", version: "1.0"}, {emoji: "6\uFE0F\u20E3", category: 7, name: "keycap: 6", version: "1.0"}, {emoji: "7\uFE0F\u20E3", category: 7, name: "keycap: 7", version: "1.0"}, {emoji: "8\uFE0F\u20E3", category: 7, name: "keycap: 8", version: "1.0"}, {emoji: "9\uFE0F\u20E3", category: 7, name: "keycap: 9", version: "1.0"}, {emoji: "\u{1F51F}", category: 7, name: "keycap: 10", version: "1.0"}, {emoji: "\u{1F520}", category: 7, name: "input latin uppercase", version: "1.0"}, {emoji: "\u{1F521}", category: 7, name: "input latin lowercase", version: "1.0"}, {emoji: "\u{1F522}", category: 7, name: "input numbers", version: "1.0"}, {emoji: "\u{1F523}", category: 7, name: "input symbols", version: "1.0"}, {emoji: "\u{1F524}", category: 7, name: "input latin letters", version: "1.0"}, {emoji: "\u{1F170}\uFE0F", category: 7, name: "A button (blood type)", version: "1.0"}, {emoji: "\u{1F18E}", category: 7, name: "AB button (blood type)", version: "1.0"}, {emoji: "\u{1F171}\uFE0F", category: 7, name: "B button (blood type)", version: "1.0"}, {emoji: "\u{1F191}", category: 7, name: "CL button", version: "1.0"}, {emoji: "\u{1F192}", category: 7, name: "COOL button", version: "1.0"}, {emoji: "\u{1F193}", category: 7, name: "FREE button", version: "1.0"}, {emoji: "\u2139\uFE0F", category: 7, name: "information", version: "1.0"}, {emoji: "\u{1F194}", category: 7, name: "ID button", version: "1.0"}, {emoji: "\u24C2\uFE0F", category: 7, name: "circled M", version: "1.0"}, {emoji: "\u{1F195}", category: 7, name: "NEW button", version: "1.0"}, {emoji: "\u{1F196}", category: 7, name: "NG button", version: "1.0"}, {emoji: "\u{1F17E}\uFE0F", category: 7, name: "O button (blood type)", version: "1.0"}, {emoji: "\u{1F197}", category: 7, name: "OK button", version: "1.0"}, {emoji: "\u{1F17F}\uFE0F", category: 7, name: "P button", version: "1.0"}, {emoji: "\u{1F198}", category: 7, name: "SOS button", version: "1.0"}, {emoji: "\u{1F199}", category: 7, name: "UP! button", version: "1.0"}, {emoji: "\u{1F19A}", category: 7, name: "VS button", version: "1.0"}, {emoji: "\u{1F201}", category: 7, name: "Japanese \u201Chere\u201D button", version: "1.0"}, {emoji: "\u{1F202}\uFE0F", category: 7, name: "Japanese \u201Cservice charge\u201D button", version: "1.0"}, {emoji: "\u{1F237}\uFE0F", category: 7, name: "Japanese \u201Cmonthly amount\u201D button", version: "1.0"}, {emoji: "\u{1F236}", category: 7, name: "Japanese \u201Cnot free of charge\u201D button", version: "1.0"}, {emoji: "\u{1F22F}", category: 7, name: "Japanese \u201Creserved\u201D button", version: "1.0"}, {emoji: "\u{1F250}", category: 7, name: "Japanese \u201Cbargain\u201D button", version: "1.0"}, {emoji: "\u{1F239}", category: 7, name: "Japanese \u201Cdiscount\u201D button", version: "1.0"}, {emoji: "\u{1F21A}", category: 7, name: "Japanese \u201Cfree of charge\u201D button", version: "1.0"}, {emoji: "\u{1F232}", category: 7, name: "Japanese \u201Cprohibited\u201D button", version: "1.0"}, {emoji: "\u{1F251}", category: 7, name: "Japanese \u201Cacceptable\u201D button", version: "1.0"}, {emoji: "\u{1F238}", category: 7, name: "Japanese \u201Capplication\u201D button", version: "1.0"}, {emoji: "\u{1F234}", category: 7, name: "Japanese \u201Cpassing grade\u201D button", version: "1.0"}, {emoji: "\u{1F233}", category: 7, name: "Japanese \u201Cvacancy\u201D button", version: "1.0"}, {emoji: "\u3297\uFE0F", category: 7, name: "Japanese \u201Ccongratulations\u201D button", version: "1.0"}, {emoji: "\u3299\uFE0F", category: 7, name: "Japanese \u201Csecret\u201D button", version: "1.0"}, {emoji: "\u{1F23A}", category: 7, name: "Japanese \u201Copen for business\u201D button", version: "1.0"}, {emoji: "\u{1F235}", category: 7, name: "Japanese \u201Cno vacancy\u201D button", version: "1.0"}, {emoji: "\u{1F534}", category: 7, name: "red circle", version: "1.0"}, {emoji: "\u{1F7E0}", category: 7, name: "orange circle", version: "12.0"}, {emoji: "\u{1F7E1}", category: 7, name: "yellow circle", version: "12.0"}, {emoji: "\u{1F7E2}", category: 7, name: "green circle", version: "12.0"}, {emoji: "\u{1F535}", category: 7, name: "blue circle", version: "1.0"}, {emoji: "\u{1F7E3}", category: 7, name: "purple circle", version: "12.0"}, {emoji: "\u{1F7E4}", category: 7, name: "brown circle", version: "12.0"}, {emoji: "\u26AB", category: 7, name: "black circle", version: "1.0"}, {emoji: "\u26AA", category: 7, name: "white circle", version: "1.0"}, {emoji: "\u{1F7E5}", category: 7, name: "red square", version: "12.0"}, {emoji: "\u{1F7E7}", category: 7, name: "orange square", version: "12.0"}, {emoji: "\u{1F7E8}", category: 7, name: "yellow square", version: "12.0"}, {emoji: "\u{1F7E9}", category: 7, name: "green square", version: "12.0"}, {emoji: "\u{1F7E6}", category: 7, name: "blue square", version: "12.0"}, {emoji: "\u{1F7EA}", category: 7, name: "purple square", version: "12.0"}, {emoji: "\u{1F7EB}", category: 7, name: "brown square", version: "12.0"}, {emoji: "\u2B1B", category: 7, name: "black large square", version: "1.0"}, {emoji: "\u2B1C", category: 7, name: "white large square", version: "1.0"}, {emoji: "\u25FC\uFE0F", category: 7, name: "black medium square", version: "1.0"}, {emoji: "\u25FB\uFE0F", category: 7, name: "white medium square", version: "1.0"}, {emoji: "\u25FE", category: 7, name: "black medium-small square", version: "1.0"}, {emoji: "\u25FD", category: 7, name: "white medium-small square", version: "1.0"}, {emoji: "\u25AA\uFE0F", category: 7, name: "black small square", version: "1.0"}, {emoji: "\u25AB\uFE0F", category: 7, name: "white small square", version: "1.0"}, {emoji: "\u{1F536}", category: 7, name: "large orange diamond", version: "1.0"}, {emoji: "\u{1F537}", category: 7, name: "large blue diamond", version: "1.0"}, {emoji: "\u{1F538}", category: 7, name: "small orange diamond", version: "1.0"}, {emoji: "\u{1F539}", category: 7, name: "small blue diamond", version: "1.0"}, {emoji: "\u{1F53A}", category: 7, name: "red triangle pointed up", version: "1.0"}, {emoji: "\u{1F53B}", category: 7, name: "red triangle pointed down", version: "1.0"}, {emoji: "\u{1F4A0}", category: 7, name: "diamond with a dot", version: "1.0"}, {emoji: "\u{1F518}", category: 7, name: "radio button", version: "1.0"}, {emoji: "\u{1F533}", category: 7, name: "white square button", version: "1.0"}, {emoji: "\u{1F532}", category: 7, name: "black square button", version: "1.0"}, {emoji: "\u{1F3C1}", category: 8, name: "chequered flag", version: "1.0"}, {emoji: "\u{1F6A9}", category: 8, name: "triangular flag", version: "1.0"}, {emoji: "\u{1F38C}", category: 8, name: "crossed flags", version: "1.0"}, {emoji: "\u{1F3F4}", category: 8, name: "black flag", version: "1.0"}, {emoji: "\u{1F3F3}\uFE0F", category: 8, name: "white flag", version: "1.0"}, {emoji: "\u{1F3F3}\uFE0F\u200D\u{1F308}", category: 8, name: "rainbow flag", version: "4.0"}, {emoji: "\u{1F3F3}\uFE0F\u200D\u26A7\uFE0F", category: 8, name: "transgender flag", version: "13.0"}, {emoji: "\u{1F3F4}\u200D\u2620\uFE0F", category: 8, name: "pirate flag", version: "11.0"}, {emoji: "\u{1F1E6}\u{1F1E8}", category: 8, name: "flag: Ascension Island", version: "2.0"}, {emoji: "\u{1F1E6}\u{1F1E9}", category: 8, name: "flag: Andorra", version: "2.0"}, {emoji: "\u{1F1E6}\u{1F1EA}", category: 8, name: "flag: United Arab Emirates", version: "2.0"}, {emoji: "\u{1F1E6}\u{1F1EB}", category: 8, name: "flag: Afghanistan", version: "2.0"}, {emoji: "\u{1F1E6}\u{1F1EC}", category: 8, name: "flag: Antigua & Barbuda", version: "2.0"}, {emoji: "\u{1F1E6}\u{1F1EE}", category: 8, name: "flag: Anguilla", version: "2.0"}, {emoji: "\u{1F1E6}\u{1F1F1}", category: 8, name: "flag: Albania", version: "2.0"}, {emoji: "\u{1F1E6}\u{1F1F2}", category: 8, name: "flag: Armenia", version: "2.0"}, {emoji: "\u{1F1E6}\u{1F1F4}", category: 8, name: "flag: Angola", version: "2.0"}, {emoji: "\u{1F1E6}\u{1F1F6}", category: 8, name: "flag: Antarctica", version: "2.0"}, {emoji: "\u{1F1E6}\u{1F1F7}", category: 8, name: "flag: Argentina", version: "2.0"}, {emoji: "\u{1F1E6}\u{1F1F8}", category: 8, name: "flag: American Samoa", version: "2.0"}, {emoji: "\u{1F1E6}\u{1F1F9}", category: 8, name: "flag: Austria", version: "2.0"}, {emoji: "\u{1F1E6}\u{1F1FA}", category: 8, name: "flag: Australia", version: "2.0"}, {emoji: "\u{1F1E6}\u{1F1FC}", category: 8, name: "flag: Aruba", version: "2.0"}, {emoji: "\u{1F1E6}\u{1F1FD}", category: 8, name: "flag: \xC5land Islands", version: "2.0"}, {emoji: "\u{1F1E6}\u{1F1FF}", category: 8, name: "flag: Azerbaijan", version: "2.0"}, {emoji: "\u{1F1E7}\u{1F1E6}", category: 8, name: "flag: Bosnia & Herzegovina", version: "2.0"}, {emoji: "\u{1F1E7}\u{1F1E7}", category: 8, name: "flag: Barbados", version: "2.0"}, {emoji: "\u{1F1E7}\u{1F1E9}", category: 8, name: "flag: Bangladesh", version: "2.0"}, {emoji: "\u{1F1E7}\u{1F1EA}", category: 8, name: "flag: Belgium", version: "2.0"}, {emoji: "\u{1F1E7}\u{1F1EB}", category: 8, name: "flag: Burkina Faso", version: "2.0"}, {emoji: "\u{1F1E7}\u{1F1EC}", category: 8, name: "flag: Bulgaria", version: "2.0"}, {emoji: "\u{1F1E7}\u{1F1ED}", category: 8, name: "flag: Bahrain", version: "2.0"}, {emoji: "\u{1F1E7}\u{1F1EE}", category: 8, name: "flag: Burundi", version: "2.0"}, {emoji: "\u{1F1E7}\u{1F1EF}", category: 8, name: "flag: Benin", version: "2.0"}, {emoji: "\u{1F1E7}\u{1F1F1}", category: 8, name: "flag: St. Barth\xE9lemy", version: "2.0"}, {emoji: "\u{1F1E7}\u{1F1F2}", category: 8, name: "flag: Bermuda", version: "2.0"}, {emoji: "\u{1F1E7}\u{1F1F3}", category: 8, name: "flag: Brunei", version: "2.0"}, {emoji: "\u{1F1E7}\u{1F1F4}", category: 8, name: "flag: Bolivia", version: "2.0"}, {emoji: "\u{1F1E7}\u{1F1F6}", category: 8, name: "flag: Caribbean Netherlands", version: "2.0"}, {emoji: "\u{1F1E7}\u{1F1F7}", category: 8, name: "flag: Brazil", version: "2.0"}, {emoji: "\u{1F1E7}\u{1F1F8}", category: 8, name: "flag: Bahamas", version: "2.0"}, {emoji: "\u{1F1E7}\u{1F1F9}", category: 8, name: "flag: Bhutan", version: "2.0"}, {emoji: "\u{1F1E7}\u{1F1FB}", category: 8, name: "flag: Bouvet Island", version: "2.0"}, {emoji: "\u{1F1E7}\u{1F1FC}", category: 8, name: "flag: Botswana", version: "2.0"}, {emoji: "\u{1F1E7}\u{1F1FE}", category: 8, name: "flag: Belarus", version: "2.0"}, {emoji: "\u{1F1E7}\u{1F1FF}", category: 8, name: "flag: Belize", version: "2.0"}, {emoji: "\u{1F1E8}\u{1F1E6}", category: 8, name: "flag: Canada", version: "2.0"}, {emoji: "\u{1F1E8}\u{1F1E8}", category: 8, name: "flag: Cocos (Keeling) Islands", version: "2.0"}, {emoji: "\u{1F1E8}\u{1F1E9}", category: 8, name: "flag: Congo - Kinshasa", version: "2.0"}, {emoji: "\u{1F1E8}\u{1F1EB}", category: 8, name: "flag: Central African Republic", version: "2.0"}, {emoji: "\u{1F1E8}\u{1F1EC}", category: 8, name: "flag: Congo - Brazzaville", version: "2.0"}, {emoji: "\u{1F1E8}\u{1F1ED}", category: 8, name: "flag: Switzerland", version: "2.0"}, {emoji: "\u{1F1E8}\u{1F1EE}", category: 8, name: "flag: C\xF4te d\u2019Ivoire", version: "2.0"}, {emoji: "\u{1F1E8}\u{1F1F0}", category: 8, name: "flag: Cook Islands", version: "2.0"}, {emoji: "\u{1F1E8}\u{1F1F1}", category: 8, name: "flag: Chile", version: "2.0"}, {emoji: "\u{1F1E8}\u{1F1F2}", category: 8, name: "flag: Cameroon", version: "2.0"}, {emoji: "\u{1F1E8}\u{1F1F3}", category: 8, name: "flag: China", version: "1.0"}, {emoji: "\u{1F1E8}\u{1F1F4}", category: 8, name: "flag: Colombia", version: "2.0"}, {emoji: "\u{1F1E8}\u{1F1F5}", category: 8, name: "flag: Clipperton Island", version: "2.0"}, {emoji: "\u{1F1E8}\u{1F1F7}", category: 8, name: "flag: Costa Rica", version: "2.0"}, {emoji: "\u{1F1E8}\u{1F1FA}", category: 8, name: "flag: Cuba", version: "2.0"}, {emoji: "\u{1F1E8}\u{1F1FB}", category: 8, name: "flag: Cape Verde", version: "2.0"}, {emoji: "\u{1F1E8}\u{1F1FC}", category: 8, name: "flag: Cura\xE7ao", version: "2.0"}, {emoji: "\u{1F1E8}\u{1F1FD}", category: 8, name: "flag: Christmas Island", version: "2.0"}, {emoji: "\u{1F1E8}\u{1F1FE}", category: 8, name: "flag: Cyprus", version: "2.0"}, {emoji: "\u{1F1E8}\u{1F1FF}", category: 8, name: "flag: Czechia", version: "2.0"}, {emoji: "\u{1F1E9}\u{1F1EA}", category: 8, name: "flag: Germany", version: "1.0"}, {emoji: "\u{1F1E9}\u{1F1EC}", category: 8, name: "flag: Diego Garcia", version: "2.0"}, {emoji: "\u{1F1E9}\u{1F1EF}", category: 8, name: "flag: Djibouti", version: "2.0"}, {emoji: "\u{1F1E9}\u{1F1F0}", category: 8, name: "flag: Denmark", version: "2.0"}, {emoji: "\u{1F1E9}\u{1F1F2}", category: 8, name: "flag: Dominica", version: "2.0"}, {emoji: "\u{1F1E9}\u{1F1F4}", category: 8, name: "flag: Dominican Republic", version: "2.0"}, {emoji: "\u{1F1E9}\u{1F1FF}", category: 8, name: "flag: Algeria", version: "2.0"}, {emoji: "\u{1F1EA}\u{1F1E6}", category: 8, name: "flag: Ceuta & Melilla", version: "2.0"}, {emoji: "\u{1F1EA}\u{1F1E8}", category: 8, name: "flag: Ecuador", version: "2.0"}, {emoji: "\u{1F1EA}\u{1F1EA}", category: 8, name: "flag: Estonia", version: "2.0"}, {emoji: "\u{1F1EA}\u{1F1EC}", category: 8, name: "flag: Egypt", version: "2.0"}, {emoji: "\u{1F1EA}\u{1F1ED}", category: 8, name: "flag: Western Sahara", version: "2.0"}, {emoji: "\u{1F1EA}\u{1F1F7}", category: 8, name: "flag: Eritrea", version: "2.0"}, {emoji: "\u{1F1EA}\u{1F1F8}", category: 8, name: "flag: Spain", version: "1.0"}, {emoji: "\u{1F1EA}\u{1F1F9}", category: 8, name: "flag: Ethiopia", version: "2.0"}, {emoji: "\u{1F1EA}\u{1F1FA}", category: 8, name: "flag: European Union", version: "2.0"}, {emoji: "\u{1F1EB}\u{1F1EE}", category: 8, name: "flag: Finland", version: "2.0"}, {emoji: "\u{1F1EB}\u{1F1EF}", category: 8, name: "flag: Fiji", version: "2.0"}, {emoji: "\u{1F1EB}\u{1F1F0}", category: 8, name: "flag: Falkland Islands", version: "2.0"}, {emoji: "\u{1F1EB}\u{1F1F2}", category: 8, name: "flag: Micronesia", version: "2.0"}, {emoji: "\u{1F1EB}\u{1F1F4}", category: 8, name: "flag: Faroe Islands", version: "2.0"}, {emoji: "\u{1F1EB}\u{1F1F7}", category: 8, name: "flag: France", version: "1.0"}, {emoji: "\u{1F1EC}\u{1F1E6}", category: 8, name: "flag: Gabon", version: "2.0"}, {emoji: "\u{1F1EC}\u{1F1E7}", category: 8, name: "flag: United Kingdom", version: "1.0"}, {emoji: "\u{1F1EC}\u{1F1E9}", category: 8, name: "flag: Grenada", version: "2.0"}, {emoji: "\u{1F1EC}\u{1F1EA}", category: 8, name: "flag: Georgia", version: "2.0"}, {emoji: "\u{1F1EC}\u{1F1EB}", category: 8, name: "flag: French Guiana", version: "2.0"}, {emoji: "\u{1F1EC}\u{1F1EC}", category: 8, name: "flag: Guernsey", version: "2.0"}, {emoji: "\u{1F1EC}\u{1F1ED}", category: 8, name: "flag: Ghana", version: "2.0"}, {emoji: "\u{1F1EC}\u{1F1EE}", category: 8, name: "flag: Gibraltar", version: "2.0"}, {emoji: "\u{1F1EC}\u{1F1F1}", category: 8, name: "flag: Greenland", version: "2.0"}, {emoji: "\u{1F1EC}\u{1F1F2}", category: 8, name: "flag: Gambia", version: "2.0"}, {emoji: "\u{1F1EC}\u{1F1F3}", category: 8, name: "flag: Guinea", version: "2.0"}, {emoji: "\u{1F1EC}\u{1F1F5}", category: 8, name: "flag: Guadeloupe", version: "2.0"}, {emoji: "\u{1F1EC}\u{1F1F6}", category: 8, name: "flag: Equatorial Guinea", version: "2.0"}, {emoji: "\u{1F1EC}\u{1F1F7}", category: 8, name: "flag: Greece", version: "2.0"}, {emoji: "\u{1F1EC}\u{1F1F8}", category: 8, name: "flag: South Georgia & South Sandwich Islands", version: "2.0"}, {emoji: "\u{1F1EC}\u{1F1F9}", category: 8, name: "flag: Guatemala", version: "2.0"}, {emoji: "\u{1F1EC}\u{1F1FA}", category: 8, name: "flag: Guam", version: "2.0"}, {emoji: "\u{1F1EC}\u{1F1FC}", category: 8, name: "flag: Guinea-Bissau", version: "2.0"}, {emoji: "\u{1F1EC}\u{1F1FE}", category: 8, name: "flag: Guyana", version: "2.0"}, {emoji: "\u{1F1ED}\u{1F1F0}", category: 8, name: "flag: Hong Kong SAR China", version: "2.0"}, {emoji: "\u{1F1ED}\u{1F1F2}", category: 8, name: "flag: Heard & McDonald Islands", version: "2.0"}, {emoji: "\u{1F1ED}\u{1F1F3}", category: 8, name: "flag: Honduras", version: "2.0"}, {emoji: "\u{1F1ED}\u{1F1F7}", category: 8, name: "flag: Croatia", version: "2.0"}, {emoji: "\u{1F1ED}\u{1F1F9}", category: 8, name: "flag: Haiti", version: "2.0"}, {emoji: "\u{1F1ED}\u{1F1FA}", category: 8, name: "flag: Hungary", version: "2.0"}, {emoji: "\u{1F1EE}\u{1F1E8}", category: 8, name: "flag: Canary Islands", version: "2.0"}, {emoji: "\u{1F1EE}\u{1F1E9}", category: 8, name: "flag: Indonesia", version: "2.0"}, {emoji: "\u{1F1EE}\u{1F1EA}", category: 8, name: "flag: Ireland", version: "2.0"}, {emoji: "\u{1F1EE}\u{1F1F1}", category: 8, name: "flag: Israel", version: "2.0"}, {emoji: "\u{1F1EE}\u{1F1F2}", category: 8, name: "flag: Isle of Man", version: "2.0"}, {emoji: "\u{1F1EE}\u{1F1F3}", category: 8, name: "flag: India", version: "2.0"}, {emoji: "\u{1F1EE}\u{1F1F4}", category: 8, name: "flag: British Indian Ocean Territory", version: "2.0"}, {emoji: "\u{1F1EE}\u{1F1F6}", category: 8, name: "flag: Iraq", version: "2.0"}, {emoji: "\u{1F1EE}\u{1F1F7}", category: 8, name: "flag: Iran", version: "2.0"}, {emoji: "\u{1F1EE}\u{1F1F8}", category: 8, name: "flag: Iceland", version: "2.0"}, {emoji: "\u{1F1EE}\u{1F1F9}", category: 8, name: "flag: Italy", version: "1.0"}, {emoji: "\u{1F1EF}\u{1F1EA}", category: 8, name: "flag: Jersey", version: "2.0"}, {emoji: "\u{1F1EF}\u{1F1F2}", category: 8, name: "flag: Jamaica", version: "2.0"}, {emoji: "\u{1F1EF}\u{1F1F4}", category: 8, name: "flag: Jordan", version: "2.0"}, {emoji: "\u{1F1EF}\u{1F1F5}", category: 8, name: "flag: Japan", version: "1.0"}, {emoji: "\u{1F1F0}\u{1F1EA}", category: 8, name: "flag: Kenya", version: "2.0"}, {emoji: "\u{1F1F0}\u{1F1EC}", category: 8, name: "flag: Kyrgyzstan", version: "2.0"}, {emoji: "\u{1F1F0}\u{1F1ED}", category: 8, name: "flag: Cambodia", version: "2.0"}, {emoji: "\u{1F1F0}\u{1F1EE}", category: 8, name: "flag: Kiribati", version: "2.0"}, {emoji: "\u{1F1F0}\u{1F1F2}", category: 8, name: "flag: Comoros", version: "2.0"}, {emoji: "\u{1F1F0}\u{1F1F3}", category: 8, name: "flag: St. Kitts & Nevis", version: "2.0"}, {emoji: "\u{1F1F0}\u{1F1F5}", category: 8, name: "flag: North Korea", version: "2.0"}, {emoji: "\u{1F1F0}\u{1F1F7}", category: 8, name: "flag: South Korea", version: "1.0"}, {emoji: "\u{1F1F0}\u{1F1FC}", category: 8, name: "flag: Kuwait", version: "2.0"}, {emoji: "\u{1F1F0}\u{1F1FE}", category: 8, name: "flag: Cayman Islands", version: "2.0"}, {emoji: "\u{1F1F0}\u{1F1FF}", category: 8, name: "flag: Kazakhstan", version: "2.0"}, {emoji: "\u{1F1F1}\u{1F1E6}", category: 8, name: "flag: Laos", version: "2.0"}, {emoji: "\u{1F1F1}\u{1F1E7}", category: 8, name: "flag: Lebanon", version: "2.0"}, {emoji: "\u{1F1F1}\u{1F1E8}", category: 8, name: "flag: St. Lucia", version: "2.0"}, {emoji: "\u{1F1F1}\u{1F1EE}", category: 8, name: "flag: Liechtenstein", version: "2.0"}, {emoji: "\u{1F1F1}\u{1F1F0}", category: 8, name: "flag: Sri Lanka", version: "2.0"}, {emoji: "\u{1F1F1}\u{1F1F7}", category: 8, name: "flag: Liberia", version: "2.0"}, {emoji: "\u{1F1F1}\u{1F1F8}", category: 8, name: "flag: Lesotho", version: "2.0"}, {emoji: "\u{1F1F1}\u{1F1F9}", category: 8, name: "flag: Lithuania", version: "2.0"}, {emoji: "\u{1F1F1}\u{1F1FA}", category: 8, name: "flag: Luxembourg", version: "2.0"}, {emoji: "\u{1F1F1}\u{1F1FB}", category: 8, name: "flag: Latvia", version: "2.0"}, {emoji: "\u{1F1F1}\u{1F1FE}", category: 8, name: "flag: Libya", version: "2.0"}, {emoji: "\u{1F1F2}\u{1F1E6}", category: 8, name: "flag: Morocco", version: "2.0"}, {emoji: "\u{1F1F2}\u{1F1E8}", category: 8, name: "flag: Monaco", version: "2.0"}, {emoji: "\u{1F1F2}\u{1F1E9}", category: 8, name: "flag: Moldova", version: "2.0"}, {emoji: "\u{1F1F2}\u{1F1EA}", category: 8, name: "flag: Montenegro", version: "2.0"}, {emoji: "\u{1F1F2}\u{1F1EB}", category: 8, name: "flag: St. Martin", version: "2.0"}, {emoji: "\u{1F1F2}\u{1F1EC}", category: 8, name: "flag: Madagascar", version: "2.0"}, {emoji: "\u{1F1F2}\u{1F1ED}", category: 8, name: "flag: Marshall Islands", version: "2.0"}, {emoji: "\u{1F1F2}\u{1F1F0}", category: 8, name: "flag: North Macedonia", version: "2.0"}, {emoji: "\u{1F1F2}\u{1F1F1}", category: 8, name: "flag: Mali", version: "2.0"}, {emoji: "\u{1F1F2}\u{1F1F2}", category: 8, name: "flag: Myanmar (Burma)", version: "2.0"}, {emoji: "\u{1F1F2}\u{1F1F3}", category: 8, name: "flag: Mongolia", version: "2.0"}, {emoji: "\u{1F1F2}\u{1F1F4}", category: 8, name: "flag: Macao SAR China", version: "2.0"}, {emoji: "\u{1F1F2}\u{1F1F5}", category: 8, name: "flag: Northern Mariana Islands", version: "2.0"}, {emoji: "\u{1F1F2}\u{1F1F6}", category: 8, name: "flag: Martinique", version: "2.0"}, {emoji: "\u{1F1F2}\u{1F1F7}", category: 8, name: "flag: Mauritania", version: "2.0"}, {emoji: "\u{1F1F2}\u{1F1F8}", category: 8, name: "flag: Montserrat", version: "2.0"}, {emoji: "\u{1F1F2}\u{1F1F9}", category: 8, name: "flag: Malta", version: "2.0"}, {emoji: "\u{1F1F2}\u{1F1FA}", category: 8, name: "flag: Mauritius", version: "2.0"}, {emoji: "\u{1F1F2}\u{1F1FB}", category: 8, name: "flag: Maldives", version: "2.0"}, {emoji: "\u{1F1F2}\u{1F1FC}", category: 8, name: "flag: Malawi", version: "2.0"}, {emoji: "\u{1F1F2}\u{1F1FD}", category: 8, name: "flag: Mexico", version: "2.0"}, {emoji: "\u{1F1F2}\u{1F1FE}", category: 8, name: "flag: Malaysia", version: "2.0"}, {emoji: "\u{1F1F2}\u{1F1FF}", category: 8, name: "flag: Mozambique", version: "2.0"}, {emoji: "\u{1F1F3}\u{1F1E6}", category: 8, name: "flag: Namibia", version: "2.0"}, {emoji: "\u{1F1F3}\u{1F1E8}", category: 8, name: "flag: New Caledonia", version: "2.0"}, {emoji: "\u{1F1F3}\u{1F1EA}", category: 8, name: "flag: Niger", version: "2.0"}, {emoji: "\u{1F1F3}\u{1F1EB}", category: 8, name: "flag: Norfolk Island", version: "2.0"}, {emoji: "\u{1F1F3}\u{1F1EC}", category: 8, name: "flag: Nigeria", version: "2.0"}, {emoji: "\u{1F1F3}\u{1F1EE}", category: 8, name: "flag: Nicaragua", version: "2.0"}, {emoji: "\u{1F1F3}\u{1F1F1}", category: 8, name: "flag: Netherlands", version: "2.0"}, {emoji: "\u{1F1F3}\u{1F1F4}", category: 8, name: "flag: Norway", version: "2.0"}, {emoji: "\u{1F1F3}\u{1F1F5}", category: 8, name: "flag: Nepal", version: "2.0"}, {emoji: "\u{1F1F3}\u{1F1F7}", category: 8, name: "flag: Nauru", version: "2.0"}, {emoji: "\u{1F1F3}\u{1F1FA}", category: 8, name: "flag: Niue", version: "2.0"}, {emoji: "\u{1F1F3}\u{1F1FF}", category: 8, name: "flag: New Zealand", version: "2.0"}, {emoji: "\u{1F1F4}\u{1F1F2}", category: 8, name: "flag: Oman", version: "2.0"}, {emoji: "\u{1F1F5}\u{1F1E6}", category: 8, name: "flag: Panama", version: "2.0"}, {emoji: "\u{1F1F5}\u{1F1EA}", category: 8, name: "flag: Peru", version: "2.0"}, {emoji: "\u{1F1F5}\u{1F1EB}", category: 8, name: "flag: French Polynesia", version: "2.0"}, {emoji: "\u{1F1F5}\u{1F1EC}", category: 8, name: "flag: Papua New Guinea", version: "2.0"}, {emoji: "\u{1F1F5}\u{1F1ED}", category: 8, name: "flag: Philippines", version: "2.0"}, {emoji: "\u{1F1F5}\u{1F1F0}", category: 8, name: "flag: Pakistan", version: "2.0"}, {emoji: "\u{1F1F5}\u{1F1F1}", category: 8, name: "flag: Poland", version: "2.0"}, {emoji: "\u{1F1F5}\u{1F1F2}", category: 8, name: "flag: St. Pierre & Miquelon", version: "2.0"}, {emoji: "\u{1F1F5}\u{1F1F3}", category: 8, name: "flag: Pitcairn Islands", version: "2.0"}, {emoji: "\u{1F1F5}\u{1F1F7}", category: 8, name: "flag: Puerto Rico", version: "2.0"}, {emoji: "\u{1F1F5}\u{1F1F8}", category: 8, name: "flag: Palestinian Territories", version: "2.0"}, {emoji: "\u{1F1F5}\u{1F1F9}", category: 8, name: "flag: Portugal", version: "2.0"}, {emoji: "\u{1F1F5}\u{1F1FC}", category: 8, name: "flag: Palau", version: "2.0"}, {emoji: "\u{1F1F5}\u{1F1FE}", category: 8, name: "flag: Paraguay", version: "2.0"}, {emoji: "\u{1F1F6}\u{1F1E6}", category: 8, name: "flag: Qatar", version: "2.0"}, {emoji: "\u{1F1F7}\u{1F1EA}", category: 8, name: "flag: R\xE9union", version: "2.0"}, {emoji: "\u{1F1F7}\u{1F1F4}", category: 8, name: "flag: Romania", version: "2.0"}, {emoji: "\u{1F1F7}\u{1F1F8}", category: 8, name: "flag: Serbia", version: "2.0"}, {emoji: "\u{1F1F7}\u{1F1FA}", category: 8, name: "flag: Russia", version: "1.0"}, {emoji: "\u{1F1F7}\u{1F1FC}", category: 8, name: "flag: Rwanda", version: "2.0"}, {emoji: "\u{1F1F8}\u{1F1E6}", category: 8, name: "flag: Saudi Arabia", version: "2.0"}, {emoji: "\u{1F1F8}\u{1F1E7}", category: 8, name: "flag: Solomon Islands", version: "2.0"}, {emoji: "\u{1F1F8}\u{1F1E8}", category: 8, name: "flag: Seychelles", version: "2.0"}, {emoji: "\u{1F1F8}\u{1F1E9}", category: 8, name: "flag: Sudan", version: "2.0"}, {emoji: "\u{1F1F8}\u{1F1EA}", category: 8, name: "flag: Sweden", version: "2.0"}, {emoji: "\u{1F1F8}\u{1F1EC}", category: 8, name: "flag: Singapore", version: "2.0"}, {emoji: "\u{1F1F8}\u{1F1ED}", category: 8, name: "flag: St. Helena", version: "2.0"}, {emoji: "\u{1F1F8}\u{1F1EE}", category: 8, name: "flag: Slovenia", version: "2.0"}, {emoji: "\u{1F1F8}\u{1F1EF}", category: 8, name: "flag: Svalbard & Jan Mayen", version: "2.0"}, {emoji: "\u{1F1F8}\u{1F1F0}", category: 8, name: "flag: Slovakia", version: "2.0"}, {emoji: "\u{1F1F8}\u{1F1F1}", category: 8, name: "flag: Sierra Leone", version: "2.0"}, {emoji: "\u{1F1F8}\u{1F1F2}", category: 8, name: "flag: San Marino", version: "2.0"}, {emoji: "\u{1F1F8}\u{1F1F3}", category: 8, name: "flag: Senegal", version: "2.0"}, {emoji: "\u{1F1F8}\u{1F1F4}", category: 8, name: "flag: Somalia", version: "2.0"}, {emoji: "\u{1F1F8}\u{1F1F7}", category: 8, name: "flag: Suriname", version: "2.0"}, {emoji: "\u{1F1F8}\u{1F1F8}", category: 8, name: "flag: South Sudan", version: "2.0"}, {emoji: "\u{1F1F8}\u{1F1F9}", category: 8, name: "flag: S\xE3o Tom\xE9 & Pr\xEDncipe", version: "2.0"}, {emoji: "\u{1F1F8}\u{1F1FB}", category: 8, name: "flag: El Salvador", version: "2.0"}, {emoji: "\u{1F1F8}\u{1F1FD}", category: 8, name: "flag: Sint Maarten", version: "2.0"}, {emoji: "\u{1F1F8}\u{1F1FE}", category: 8, name: "flag: Syria", version: "2.0"}, {emoji: "\u{1F1F8}\u{1F1FF}", category: 8, name: "flag: Eswatini", version: "2.0"}, {emoji: "\u{1F1F9}\u{1F1E6}", category: 8, name: "flag: Tristan da Cunha", version: "2.0"}, {emoji: "\u{1F1F9}\u{1F1E8}", category: 8, name: "flag: Turks & Caicos Islands", version: "2.0"}, {emoji: "\u{1F1F9}\u{1F1E9}", category: 8, name: "flag: Chad", version: "2.0"}, {emoji: "\u{1F1F9}\u{1F1EB}", category: 8, name: "flag: French Southern Territories", version: "2.0"}, {emoji: "\u{1F1F9}\u{1F1EC}", category: 8, name: "flag: Togo", version: "2.0"}, {emoji: "\u{1F1F9}\u{1F1ED}", category: 8, name: "flag: Thailand", version: "2.0"}, {emoji: "\u{1F1F9}\u{1F1EF}", category: 8, name: "flag: Tajikistan", version: "2.0"}, {emoji: "\u{1F1F9}\u{1F1F0}", category: 8, name: "flag: Tokelau", version: "2.0"}, {emoji: "\u{1F1F9}\u{1F1F1}", category: 8, name: "flag: Timor-Leste", version: "2.0"}, {emoji: "\u{1F1F9}\u{1F1F2}", category: 8, name: "flag: Turkmenistan", version: "2.0"}, {emoji: "\u{1F1F9}\u{1F1F3}", category: 8, name: "flag: Tunisia", version: "2.0"}, {emoji: "\u{1F1F9}\u{1F1F4}", category: 8, name: "flag: Tonga", version: "2.0"}, {emoji: "\u{1F1F9}\u{1F1F7}", category: 8, name: "flag: Turkey", version: "2.0"}, {emoji: "\u{1F1F9}\u{1F1F9}", category: 8, name: "flag: Trinidad & Tobago", version: "2.0"}, {emoji: "\u{1F1F9}\u{1F1FB}", category: 8, name: "flag: Tuvalu", version: "2.0"}, {emoji: "\u{1F1F9}\u{1F1FC}", category: 8, name: "flag: Taiwan", version: "2.0"}, {emoji: "\u{1F1F9}\u{1F1FF}", category: 8, name: "flag: Tanzania", version: "2.0"}, {emoji: "\u{1F1FA}\u{1F1E6}", category: 8, name: "flag: Ukraine", version: "2.0"}, {emoji: "\u{1F1FA}\u{1F1EC}", category: 8, name: "flag: Uganda", version: "2.0"}, {emoji: "\u{1F1FA}\u{1F1F2}", category: 8, name: "flag: U.S. Outlying Islands", version: "2.0"}, {emoji: "\u{1F1FA}\u{1F1F3}", category: 8, name: "flag: United Nations", version: "4.0"}, {emoji: "\u{1F1FA}\u{1F1F8}", category: 8, name: "flag: United States", version: "1.0"}, {emoji: "\u{1F1FA}\u{1F1FE}", category: 8, name: "flag: Uruguay", version: "2.0"}, {emoji: "\u{1F1FA}\u{1F1FF}", category: 8, name: "flag: Uzbekistan", version: "2.0"}, {emoji: "\u{1F1FB}\u{1F1E6}", category: 8, name: "flag: Vatican City", version: "2.0"}, {emoji: "\u{1F1FB}\u{1F1E8}", category: 8, name: "flag: St. Vincent & Grenadines", version: "2.0"}, {emoji: "\u{1F1FB}\u{1F1EA}", category: 8, name: "flag: Venezuela", version: "2.0"}, {emoji: "\u{1F1FB}\u{1F1EC}", category: 8, name: "flag: British Virgin Islands", version: "2.0"}, {emoji: "\u{1F1FB}\u{1F1EE}", category: 8, name: "flag: U.S. Virgin Islands", version: "2.0"}, {emoji: "\u{1F1FB}\u{1F1F3}", category: 8, name: "flag: Vietnam", version: "2.0"}, {emoji: "\u{1F1FB}\u{1F1FA}", category: 8, name: "flag: Vanuatu", version: "2.0"}, {emoji: "\u{1F1FC}\u{1F1EB}", category: 8, name: "flag: Wallis & Futuna", version: "2.0"}, {emoji: "\u{1F1FC}\u{1F1F8}", category: 8, name: "flag: Samoa", version: "2.0"}, {emoji: "\u{1F1FD}\u{1F1F0}", category: 8, name: "flag: Kosovo", version: "2.0"}, {emoji: "\u{1F1FE}\u{1F1EA}", category: 8, name: "flag: Yemen", version: "2.0"}, {emoji: "\u{1F1FE}\u{1F1F9}", category: 8, name: "flag: Mayotte", version: "2.0"}, {emoji: "\u{1F1FF}\u{1F1E6}", category: 8, name: "flag: South Africa", version: "2.0"}, {emoji: "\u{1F1FF}\u{1F1F2}", category: 8, name: "flag: Zambia", version: "2.0"}, {emoji: "\u{1F1FF}\u{1F1FC}", category: 8, name: "flag: Zimbabwe", version: "2.0"}, {emoji: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}", category: 8, name: "flag: England", version: "5.0"}, {emoji: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}", category: 8, name: "flag: Scotland", version: "5.0"}, {emoji: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}", category: 8, name: "flag: Wales", version: "5.0"}]};
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var Ce = /["'&<>]/, Ee = function(e3) {
  var o2, n2 = "" + e3, i2 = Ce.exec(n2);
  if (!i2)
    return n2;
  var a2 = "", r2 = 0, t2 = 0;
  for (r2 = i2.index; r2 < n2.length; r2++) {
    switch (n2.charCodeAt(r2)) {
      case 34:
        o2 = "&quot;";
        break;
      case 38:
        o2 = "&amp;";
        break;
      case 39:
        o2 = "&#39;";
        break;
      case 60:
        o2 = "&lt;";
        break;
      case 62:
        o2 = "&gt;";
        break;
      default:
        continue;
    }
    t2 !== r2 && (a2 += n2.substring(t2, r2)), t2 = r2 + 1, a2 += o2;
  }
  return t2 !== r2 ? a2 + n2.substring(t2, r2) : a2;
};
const _e = "emoji-picker__emoji";
function ze(e3, o2) {
  const n2 = document.createElement(e3);
  return o2 && (n2.className = o2), n2;
}
function Oe(e3) {
  for (; e3.firstChild; )
    e3.removeChild(e3.firstChild);
}
function Ie(e3, o2) {
  e3.dataset.loaded || (e3.dataset.custom ? function(e4) {
    const o3 = ze("img", "emoji-picker__custom-emoji");
    e4.dataset.emoji && (o3.src = Ee(e4.dataset.emoji), e4.innerText = "", e4.appendChild(o3));
  }(e3) : o2.style === "twemoji" && function(e4, o3) {
    e4.dataset.emoji && (e4.innerHTML = ke.parse(e4.dataset.emoji, o3.twemojiOptions));
  }(e3, o2), e3.dataset.loaded = "true", e3.style.opacity = "1");
}
class Se {
  constructor(e3, o2) {
    this.events = e3, this.options = o2;
  }
  render() {
    const e3 = ze("div", "emoji-picker__preview");
    return this.emoji = ze("div", "emoji-picker__preview-emoji"), e3.appendChild(this.emoji), this.name = ze("div", "emoji-picker__preview-name"), e3.appendChild(this.name), this.events.on("showPreview", (e4) => this.showPreview(e4)), this.events.on("hidePreview", () => this.hidePreview()), e3;
  }
  showPreview(e3) {
    let o2 = e3.emoji;
    e3.custom ? o2 = `<img class="emoji-picker__custom-emoji" src="${Ee(e3.emoji)}">` : this.options.style === "twemoji" && (o2 = ke.parse(e3.emoji, this.options.twemojiOptions)), this.emoji.innerHTML = o2, this.name.innerHTML = Ee(e3.name);
  }
  hidePreview() {
    this.emoji.innerHTML = "", this.name.innerHTML = "";
  }
}
function Pe(e3, o2) {
  for (var n2 = 0; n2 < o2.length; n2++) {
    var i2 = o2[n2];
    i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e3, i2.key, i2);
  }
}
function Me(e3, o2, n2) {
  return o2 in e3 ? Object.defineProperty(e3, o2, {value: n2, enumerable: true, configurable: true, writable: true}) : e3[o2] = n2, e3;
}
function Ae(e3) {
  for (var o2 = 1; o2 < arguments.length; o2++) {
    var n2 = arguments[o2] != null ? arguments[o2] : {}, i2 = Object.keys(n2);
    typeof Object.getOwnPropertySymbols == "function" && (i2 = i2.concat(Object.getOwnPropertySymbols(n2).filter(function(e4) {
      return Object.getOwnPropertyDescriptor(n2, e4).enumerable;
    }))), i2.forEach(function(o3) {
      Me(e3, o3, n2[o3]);
    });
  }
  return e3;
}
function Le(e3, o2) {
  return function(e4) {
    if (Array.isArray(e4))
      return e4;
  }(e3) || function(e4, o3) {
    var n2 = [], i2 = true, a2 = false, r2 = void 0;
    try {
      for (var t2, s2 = e4[Symbol.iterator](); !(i2 = (t2 = s2.next()).done) && (n2.push(t2.value), !o3 || n2.length !== o3); i2 = true)
        ;
    } catch (e5) {
      a2 = true, r2 = e5;
    } finally {
      try {
        i2 || s2.return == null || s2.return();
      } finally {
        if (a2)
          throw r2;
      }
    }
    return n2;
  }(e3, o2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }();
}
var Te = function() {
}, Ne = {}, Fe = {}, Be = {mark: Te, measure: Te};
try {
  typeof window != "undefined" && (Ne = window), typeof document != "undefined" && (Fe = document), typeof MutationObserver != "undefined" && MutationObserver, typeof performance != "undefined" && (Be = performance);
} catch (e3) {
}
var De = (Ne.navigator || {}).userAgent, Re = De === void 0 ? "" : De, qe = Ne, Ve = Fe, He = Be, Ue = (qe.document, !!Ve.documentElement && !!Ve.head && typeof Ve.addEventListener == "function" && typeof Ve.createElement == "function"), We = (~Re.indexOf("MSIE") || Re.indexOf("Trident/"), "group"), Ke = "primary", Je = "secondary", Ge = qe.FontAwesomeConfig || {};
if (Ve && typeof Ve.querySelector == "function") {
  [["data-family-prefix", "familyPrefix"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach(function(e3) {
    var o2 = Le(e3, 2), n2 = o2[0], i2 = o2[1], a2 = function(e4) {
      return e4 === "" || e4 !== "false" && (e4 === "true" || e4);
    }(function(e4) {
      var o3 = Ve.querySelector("script[" + e4 + "]");
      if (o3)
        return o3.getAttribute(e4);
    }(n2));
    a2 != null && (Ge[i2] = a2);
  });
}
var Xe = Ae({}, {familyPrefix: "fa", replacementClass: "svg-inline--fa", autoReplaceSvg: true, autoAddCss: true, autoA11y: true, searchPseudoElements: false, observeMutations: true, mutateApproach: "async", keepOriginalSource: true, measurePerformance: false, showMissingIcons: true}, Ge);
Xe.autoReplaceSvg || (Xe.observeMutations = false);
var Ye = Ae({}, Xe);
qe.FontAwesomeConfig = Ye;
var $e = qe || {};
$e.___FONT_AWESOME___ || ($e.___FONT_AWESOME___ = {}), $e.___FONT_AWESOME___.styles || ($e.___FONT_AWESOME___.styles = {}), $e.___FONT_AWESOME___.hooks || ($e.___FONT_AWESOME___.hooks = {}), $e.___FONT_AWESOME___.shims || ($e.___FONT_AWESOME___.shims = []);
var Ze = $e.___FONT_AWESOME___, Qe = [];
Ue && ((Ve.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Ve.readyState) || Ve.addEventListener("DOMContentLoaded", function e2() {
  Ve.removeEventListener("DOMContentLoaded", e2), Qe.map(function(e3) {
    return e3();
  });
}));
typeof global$1 != "undefined" && global$1.process !== void 0 && global$1.process.emit, typeof setImmediate == "undefined" ? setTimeout : setImmediate;
var eo = {size: 16, x: 0, y: 0, rotate: 0, flipX: false, flipY: false};
function oo() {
  for (var e3 = 12, o2 = ""; e3-- > 0; )
    o2 += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62 * Math.random() | 0];
  return o2;
}
function no(e3) {
  return "".concat(e3).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function io(e3) {
  return Object.keys(e3 || {}).reduce(function(o2, n2) {
    return o2 + "".concat(n2, ": ").concat(e3[n2], ";");
  }, "");
}
function ao(e3) {
  return e3.size !== eo.size || e3.x !== eo.x || e3.y !== eo.y || e3.rotate !== eo.rotate || e3.flipX || e3.flipY;
}
function ro(e3) {
  var o2 = e3.transform, n2 = e3.containerWidth, i2 = e3.iconWidth, a2 = {transform: "translate(".concat(n2 / 2, " 256)")}, r2 = "translate(".concat(32 * o2.x, ", ").concat(32 * o2.y, ") "), t2 = "scale(".concat(o2.size / 16 * (o2.flipX ? -1 : 1), ", ").concat(o2.size / 16 * (o2.flipY ? -1 : 1), ") "), s2 = "rotate(".concat(o2.rotate, " 0 0)");
  return {outer: a2, inner: {transform: "".concat(r2, " ").concat(t2, " ").concat(s2)}, path: {transform: "translate(".concat(i2 / 2 * -1, " -256)")}};
}
var to = {x: 0, y: 0, width: "100%", height: "100%"};
function so(e3) {
  var o2 = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
  return e3.attributes && (e3.attributes.fill || o2) && (e3.attributes.fill = "black"), e3;
}
function mo(e3) {
  var o2 = e3.icons, n2 = o2.main, i2 = o2.mask, a2 = e3.prefix, r2 = e3.iconName, t2 = e3.transform, s2 = e3.symbol, m2 = e3.title, c2 = e3.maskId, d2 = e3.titleId, g2 = e3.extra, u2 = e3.watchable, l2 = u2 !== void 0 && u2, v2 = i2.found ? i2 : n2, y2 = v2.width, f2 = v2.height, j2 = "fa-w-".concat(Math.ceil(y2 / f2 * 16)), h2 = [Ye.replacementClass, r2 ? "".concat(Ye.familyPrefix, "-").concat(r2) : "", j2].filter(function(e4) {
    return g2.classes.indexOf(e4) === -1;
  }).concat(g2.classes).join(" "), p2 = {children: [], attributes: Ae({}, g2.attributes, {"data-prefix": a2, "data-icon": r2, class: h2, role: g2.attributes.role || "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 ".concat(y2, " ").concat(f2)})};
  l2 && (p2.attributes["data-fa-i2svg"] = ""), m2 && p2.children.push({tag: "title", attributes: {id: p2.attributes["aria-labelledby"] || "title-".concat(d2 || oo())}, children: [m2]});
  var b2 = Ae({}, p2, {prefix: a2, iconName: r2, main: n2, mask: i2, maskId: c2, transform: t2, symbol: s2, styles: g2.styles}), w2 = i2.found && n2.found ? function(e4) {
    var o3, n3 = e4.children, i3 = e4.attributes, a3 = e4.main, r3 = e4.mask, t3 = e4.maskId, s3 = e4.transform, m3 = a3.width, c3 = a3.icon, d3 = r3.width, g3 = r3.icon, u3 = ro({transform: s3, containerWidth: d3, iconWidth: m3}), l3 = {tag: "rect", attributes: Ae({}, to, {fill: "white"})}, v3 = c3.children ? {children: c3.children.map(so)} : {}, y3 = {tag: "g", attributes: Ae({}, u3.inner), children: [so(Ae({tag: c3.tag, attributes: Ae({}, c3.attributes, u3.path)}, v3))]}, f3 = {tag: "g", attributes: Ae({}, u3.outer), children: [y3]}, j3 = "mask-".concat(t3 || oo()), h3 = "clip-".concat(t3 || oo()), p3 = {tag: "mask", attributes: Ae({}, to, {id: j3, maskUnits: "userSpaceOnUse", maskContentUnits: "userSpaceOnUse"}), children: [l3, f3]}, b3 = {tag: "defs", children: [{tag: "clipPath", attributes: {id: h3}, children: (o3 = g3, o3.tag === "g" ? o3.children : [o3])}, p3]};
    return n3.push(b3, {tag: "rect", attributes: Ae({fill: "currentColor", "clip-path": "url(#".concat(h3, ")"), mask: "url(#".concat(j3, ")")}, to)}), {children: n3, attributes: i3};
  }(b2) : function(e4) {
    var o3 = e4.children, n3 = e4.attributes, i3 = e4.main, a3 = e4.transform, r3 = io(e4.styles);
    if (r3.length > 0 && (n3.style = r3), ao(a3)) {
      var t3 = ro({transform: a3, containerWidth: i3.width, iconWidth: i3.width});
      o3.push({tag: "g", attributes: Ae({}, t3.outer), children: [{tag: "g", attributes: Ae({}, t3.inner), children: [{tag: i3.icon.tag, children: i3.icon.children, attributes: Ae({}, i3.icon.attributes, t3.path)}]}]});
    } else
      o3.push(i3.icon);
    return {children: o3, attributes: n3};
  }(b2), k2 = w2.children, x2 = w2.attributes;
  return b2.children = k2, b2.attributes = x2, s2 ? function(e4) {
    var o3 = e4.prefix, n3 = e4.iconName, i3 = e4.children, a3 = e4.attributes, r3 = e4.symbol;
    return [{tag: "svg", attributes: {style: "display: none;"}, children: [{tag: "symbol", attributes: Ae({}, a3, {id: r3 === true ? "".concat(o3, "-").concat(Ye.familyPrefix, "-").concat(n3) : r3}), children: i3}]}];
  }(b2) : function(e4) {
    var o3 = e4.children, n3 = e4.main, i3 = e4.mask, a3 = e4.attributes, r3 = e4.styles, t3 = e4.transform;
    if (ao(t3) && n3.found && !i3.found) {
      var s3 = {x: n3.width / n3.height / 2, y: 0.5};
      a3.style = io(Ae({}, r3, {"transform-origin": "".concat(s3.x + t3.x / 16, "em ").concat(s3.y + t3.y / 16, "em")}));
    }
    return [{tag: "svg", attributes: a3, children: o3}];
  }(b2);
}
var go = (Ye.measurePerformance && He && He.mark && He.measure, function(e3, o2, n2, i2) {
  var a2, r2, t2, s2 = Object.keys(e3), m2 = s2.length, c2 = i2 !== void 0 ? function(e4, o3) {
    return function(n3, i3, a3, r3) {
      return e4.call(o3, n3, i3, a3, r3);
    };
  }(o2, i2) : o2;
  for (n2 === void 0 ? (a2 = 1, t2 = e3[s2[0]]) : (a2 = 0, t2 = n2); a2 < m2; a2++)
    t2 = c2(t2, e3[r2 = s2[a2]], r2, e3);
  return t2;
});
function uo(e3, o2) {
  var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i2 = n2.skipHooks, a2 = i2 !== void 0 && i2, r2 = Object.keys(o2).reduce(function(e4, n3) {
    var i3 = o2[n3];
    return !!i3.icon ? e4[i3.iconName] = i3.icon : e4[n3] = i3, e4;
  }, {});
  typeof Ze.hooks.addPack != "function" || a2 ? Ze.styles[e3] = Ae({}, Ze.styles[e3] || {}, r2) : Ze.hooks.addPack(e3, r2), e3 === "fas" && uo("fa", o2);
}
var lo = Ze.styles, vo = Ze.shims, yo = function() {
  var e3 = function(e4) {
    return go(lo, function(o3, n2, i2) {
      return o3[i2] = go(n2, e4, {}), o3;
    }, {});
  };
  e3(function(e4, o3, n2) {
    return o3[3] && (e4[o3[3]] = n2), e4;
  }), e3(function(e4, o3, n2) {
    var i2 = o3[2];
    return e4[n2] = n2, i2.forEach(function(o4) {
      e4[o4] = n2;
    }), e4;
  });
  var o2 = "far" in lo;
  go(vo, function(e4, n2) {
    var i2 = n2[0], a2 = n2[1], r2 = n2[2];
    return a2 !== "far" || o2 || (a2 = "fas"), e4[i2] = {prefix: a2, iconName: r2}, e4;
  }, {});
};
yo();
Ze.styles;
function fo(e3, o2, n2) {
  if (e3 && e3[o2] && e3[o2][n2])
    return {prefix: o2, iconName: n2, icon: e3[o2][n2]};
}
function jo(e3) {
  var o2 = e3.tag, n2 = e3.attributes, i2 = n2 === void 0 ? {} : n2, a2 = e3.children, r2 = a2 === void 0 ? [] : a2;
  return typeof e3 == "string" ? no(e3) : "<".concat(o2, " ").concat(function(e4) {
    return Object.keys(e4 || {}).reduce(function(o3, n3) {
      return o3 + "".concat(n3, '="').concat(no(e4[n3]), '" ');
    }, "").trim();
  }(i2), ">").concat(r2.map(jo).join(""), "</").concat(o2, ">");
}
function ho(e3) {
  this.name = "MissingIcon", this.message = e3 || "Icon unavailable", this.stack = new Error().stack;
}
ho.prototype = Object.create(Error.prototype), ho.prototype.constructor = ho;
var po = {fill: "currentColor"}, bo = {attributeType: "XML", repeatCount: "indefinite", dur: "2s"}, wo = (Ae({}, po, {d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}), Ae({}, bo, {attributeName: "opacity"}));
Ae({}, po, {cx: "256", cy: "364", r: "28"}), Ae({}, bo, {attributeName: "r", values: "28;14;28;28;14;28;"}), Ae({}, wo, {values: "1;0;1;1;0;1;"}), Ae({}, po, {opacity: "1", d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}), Ae({}, wo, {values: "1;0;0;0;0;1;"}), Ae({}, po, {opacity: "0", d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}), Ae({}, wo, {values: "0;0;1;1;0;0;"}), Ze.styles;
function ko(e3) {
  var o2 = e3[0], n2 = e3[1], i2 = Le(e3.slice(4), 1)[0];
  return {found: true, width: o2, height: n2, icon: Array.isArray(i2) ? {tag: "g", attributes: {class: "".concat(Ye.familyPrefix, "-").concat(We)}, children: [{tag: "path", attributes: {class: "".concat(Ye.familyPrefix, "-").concat(Je), fill: "currentColor", d: i2[0]}}, {tag: "path", attributes: {class: "".concat(Ye.familyPrefix, "-").concat(Ke), fill: "currentColor", d: i2[1]}}]} : {tag: "path", attributes: {fill: "currentColor", d: i2}}};
}
Ze.styles;
function xo() {
  Ye.autoAddCss && !Oo && (!function(e3) {
    if (e3 && Ue) {
      var o2 = Ve.createElement("style");
      o2.setAttribute("type", "text/css"), o2.innerHTML = e3;
      for (var n2 = Ve.head.childNodes, i2 = null, a2 = n2.length - 1; a2 > -1; a2--) {
        var r2 = n2[a2], t2 = (r2.tagName || "").toUpperCase();
        ["STYLE", "LINK"].indexOf(t2) > -1 && (i2 = r2);
      }
      Ve.head.insertBefore(o2, i2);
    }
  }(function() {
    var e3 = "fa", o2 = "svg-inline--fa", n2 = Ye.familyPrefix, i2 = Ye.replacementClass, a2 = 'svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';
    if (n2 !== e3 || i2 !== o2) {
      var r2 = new RegExp("\\.".concat(e3, "\\-"), "g"), t2 = new RegExp("\\--".concat(e3, "\\-"), "g"), s2 = new RegExp("\\.".concat(o2), "g");
      a2 = a2.replace(r2, ".".concat(n2, "-")).replace(t2, "--".concat(n2, "-")).replace(s2, ".".concat(i2));
    }
    return a2;
  }()), Oo = true);
}
function Co(e3, o2) {
  return Object.defineProperty(e3, "abstract", {get: o2}), Object.defineProperty(e3, "html", {get: function() {
    return e3.abstract.map(function(e4) {
      return jo(e4);
    });
  }}), Object.defineProperty(e3, "node", {get: function() {
    if (Ue) {
      var o3 = Ve.createElement("div");
      return o3.innerHTML = e3.html, o3.children;
    }
  }}), e3;
}
function Eo(e3) {
  var o2 = e3.prefix, n2 = o2 === void 0 ? "fa" : o2, i2 = e3.iconName;
  if (i2)
    return fo(zo.definitions, n2, i2) || fo(Ze.styles, n2, i2);
}
var _o, zo = new (function() {
  function e3() {
    !function(e4, o3) {
      if (!(e4 instanceof o3))
        throw new TypeError("Cannot call a class as a function");
    }(this, e3), this.definitions = {};
  }
  var o2, n2;
  return o2 = e3, (n2 = [{key: "add", value: function() {
    for (var e4 = this, o3 = arguments.length, n3 = new Array(o3), i2 = 0; i2 < o3; i2++)
      n3[i2] = arguments[i2];
    var a2 = n3.reduce(this._pullDefinitions, {});
    Object.keys(a2).forEach(function(o4) {
      e4.definitions[o4] = Ae({}, e4.definitions[o4] || {}, a2[o4]), uo(o4, a2[o4]), yo();
    });
  }}, {key: "reset", value: function() {
    this.definitions = {};
  }}, {key: "_pullDefinitions", value: function(e4, o3) {
    var n3 = o3.prefix && o3.iconName && o3.icon ? {0: o3} : o3;
    return Object.keys(n3).map(function(o4) {
      var i2 = n3[o4], a2 = i2.prefix, r2 = i2.iconName, t2 = i2.icon;
      e4[a2] || (e4[a2] = {}), e4[a2][r2] = t2;
    }), e4;
  }}]) && Pe(o2.prototype, n2), e3;
}())(), Oo = false, Io = (_o = function(e3) {
  var o2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n2 = o2.transform, i2 = n2 === void 0 ? eo : n2, a2 = o2.symbol, r2 = a2 !== void 0 && a2, t2 = o2.mask, s2 = t2 === void 0 ? null : t2, m2 = o2.maskId, c2 = m2 === void 0 ? null : m2, d2 = o2.title, g2 = d2 === void 0 ? null : d2, u2 = o2.titleId, l2 = u2 === void 0 ? null : u2, v2 = o2.classes, y2 = v2 === void 0 ? [] : v2, f2 = o2.attributes, j2 = f2 === void 0 ? {} : f2, h2 = o2.styles, p2 = h2 === void 0 ? {} : h2;
  if (e3) {
    var b2 = e3.prefix, w2 = e3.iconName, k2 = e3.icon;
    return Co(Ae({type: "icon"}, e3), function() {
      return xo(), Ye.autoA11y && (g2 ? j2["aria-labelledby"] = "".concat(Ye.replacementClass, "-title-").concat(l2 || oo()) : (j2["aria-hidden"] = "true", j2.focusable = "false")), mo({icons: {main: ko(k2), mask: s2 ? ko(s2.icon) : {found: false, width: null, height: null, icon: {}}}, prefix: b2, iconName: w2, transform: Ae({}, eo, i2), symbol: r2, title: g2, maskId: c2, titleId: l2, extra: {attributes: j2, styles: p2, classes: y2}});
    });
  }
}, function(e3) {
  var o2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n2 = (e3 || {}).icon ? e3 : Eo(e3 || {}), i2 = o2.mask;
  return i2 && (i2 = (i2 || {}).icon ? i2 : Eo(i2 || {})), _o(n2, Ae({}, o2, {mask: i2}));
});
zo.add({prefix: "far", iconName: "building", icon: [448, 512, [], "f1ad", "M128 148v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zm140 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-128 96h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm128 0h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-76 84v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm76 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm180 124v36H0v-36c0-6.6 5.4-12 12-12h19.5V24c0-13.3 10.7-24 24-24h337c13.3 0 24 10.7 24 24v440H436c6.6 0 12 5.4 12 12zM79.5 463H192v-67c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v67h112.5V49L80 48l-.5 415z"]}, {prefix: "fas", iconName: "cat", icon: [512, 512, [], "f6be", "M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"]}, {prefix: "fas", iconName: "coffee", icon: [640, 512, [], "f0f4", "M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"]}, {prefix: "far", iconName: "flag", icon: [512, 512, [], "f024", "M336.174 80c-49.132 0-93.305-32-161.913-32-31.301 0-58.303 6.482-80.721 15.168a48.04 48.04 0 0 0 2.142-20.727C93.067 19.575 74.167 1.594 51.201.104 23.242-1.71 0 20.431 0 48c0 17.764 9.657 33.262 24 41.562V496c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-83.443C109.869 395.28 143.259 384 199.826 384c49.132 0 93.305 32 161.913 32 58.479 0 101.972-22.617 128.548-39.981C503.846 367.161 512 352.051 512 335.855V95.937c0-34.459-35.264-57.768-66.904-44.117C409.193 67.309 371.641 80 336.174 80zM464 336c-21.783 15.412-60.824 32-102.261 32-59.945 0-102.002-32-161.913-32-43.361 0-96.379 9.403-127.826 24V128c21.784-15.412 60.824-32 102.261-32 59.945 0 102.002 32 161.913 32 43.271 0 96.32-17.366 127.826-32v240z"]}, {prefix: "far", iconName: "frown", icon: [496, 512, [], "f119", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-80 128c-40.2 0-78 17.7-103.8 48.6-8.5 10.2-7.1 25.3 3.1 33.8 10.2 8.4 25.3 7.1 33.8-3.1 16.6-19.9 41-31.4 66.9-31.4s50.3 11.4 66.9 31.4c8.1 9.7 23.1 11.9 33.8 3.1 10.2-8.5 11.5-23.6 3.1-33.8C326 321.7 288.2 304 248 304z"]}, {prefix: "fas", iconName: "futbol", icon: [512, 512, [], "f1e3", "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-48 0l-.003-.282-26.064 22.741-62.679-58.5 16.454-84.355 34.303 3.072c-24.889-34.216-60.004-60.089-100.709-73.141l13.651 31.939L256 139l-74.953-41.525 13.651-31.939c-40.631 13.028-75.78 38.87-100.709 73.141l34.565-3.073 16.192 84.355-62.678 58.5-26.064-22.741-.003.282c0 43.015 13.497 83.952 38.472 117.991l7.704-33.897 85.138 10.447 36.301 77.826-29.902 17.786c40.202 13.122 84.29 13.148 124.572 0l-29.902-17.786 36.301-77.826 85.138-10.447 7.704 33.897C442.503 339.952 456 299.015 456 256zm-248.102 69.571l-29.894-91.312L256 177.732l77.996 56.527-29.622 91.312h-96.476z"]}, {prefix: "fas", iconName: "history", icon: [512, 512, [], "f1da", "M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"]}, {prefix: "fas", iconName: "icons", icon: [512, 512, [], "f86d", "M116.65 219.35a15.68 15.68 0 0 0 22.65 0l96.75-99.83c28.15-29 26.5-77.1-4.91-103.88C203.75-7.7 163-3.5 137.86 22.44L128 32.58l-9.85-10.14C93.05-3.5 52.25-7.7 24.86 15.64c-31.41 26.78-33 74.85-5 103.88zm143.92 100.49h-48l-7.08-14.24a27.39 27.39 0 0 0-25.66-17.78h-71.71a27.39 27.39 0 0 0-25.66 17.78l-7 14.24h-48A27.45 27.45 0 0 0 0 347.3v137.25A27.44 27.44 0 0 0 27.43 512h233.14A27.45 27.45 0 0 0 288 484.55V347.3a27.45 27.45 0 0 0-27.43-27.46zM144 468a52 52 0 1 1 52-52 52 52 0 0 1-52 52zm355.4-115.9h-60.58l22.36-50.75c2.1-6.65-3.93-13.21-12.18-13.21h-75.59c-6.3 0-11.66 3.9-12.5 9.1l-16.8 106.93c-1 6.3 4.88 11.89 12.5 11.89h62.31l-24.2 83c-1.89 6.65 4.2 12.9 12.23 12.9a13.26 13.26 0 0 0 10.92-5.25l92.4-138.91c4.88-6.91-1.16-15.7-10.87-15.7zM478.08.33L329.51 23.17C314.87 25.42 304 38.92 304 54.83V161.6a83.25 83.25 0 0 0-16-1.7c-35.35 0-64 21.48-64 48s28.65 48 64 48c35.2 0 63.73-21.32 64-47.66V99.66l112-17.22v47.18a83.25 83.25 0 0 0-16-1.7c-35.35 0-64 21.48-64 48s28.65 48 64 48c35.2 0 63.73-21.32 64-47.66V32c0-19.48-16-34.42-33.92-31.67z"]}, {prefix: "far", iconName: "lightbulb", icon: [352, 512, [], "f0eb", "M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"]}, {prefix: "fas", iconName: "music", icon: [512, 512, [], "f001", "M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"]}, {prefix: "fas", iconName: "search", icon: [512, 512, [], "f002", "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"]}, {prefix: "far", iconName: "smile", icon: [496, 512, [], "f118", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"]}, {prefix: "fas", iconName: "times", icon: [352, 512, [], "f00d", "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]}, {prefix: "fas", iconName: "user", icon: [448, 512, [], "f007", "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"]});
const So = Io({prefix: "far", iconName: "building"}).html[0], Po = Io({prefix: "fas", iconName: "cat"}).html[0], Mo = Io({prefix: "fas", iconName: "coffee"}).html[0], Ao = Io({prefix: "far", iconName: "flag"}).html[0], Lo = Io({prefix: "fas", iconName: "futbol"}).html[0], To = Io({prefix: "far", iconName: "frown"}).html[0], No = Io({prefix: "fas", iconName: "history"}).html[0], Fo = Io({prefix: "fas", iconName: "icons"}).html[0], Bo = Io({prefix: "far", iconName: "lightbulb"}).html[0], Do = Io({prefix: "fas", iconName: "music"}).html[0], Ro = Io({prefix: "fas", iconName: "search"}).html[0], qo = Io({prefix: "far", iconName: "smile"}).html[0], Vo = Io({prefix: "fas", iconName: "times"}).html[0], Ho = Io({prefix: "fas", iconName: "user"}).html[0];
function Uo(e3) {
  const o2 = document.createElement("img");
  return o2.src = e3, o2;
}
function Wo() {
  const e3 = localStorage.getItem("emojiPicker.recent");
  return (e3 ? JSON.parse(e3) : []).filter((e4) => !!e4.emoji);
}
class Ko {
  constructor(e3, o2, n2, i2, a2, r2 = true) {
    this.emoji = e3, this.showVariants = o2, this.showPreview = n2, this.events = i2, this.options = a2, this.lazy = r2;
  }
  render() {
    this.emojiButton = ze("button", _e);
    let e3 = this.emoji.emoji;
    return this.emoji.custom ? e3 = this.lazy ? qo : `<img class="emoji-picker__custom-emoji" src="${Ee(this.emoji.emoji)}">` : this.options.style === "twemoji" && (e3 = this.lazy ? qo : ke.parse(this.emoji.emoji, this.options.twemojiOptions)), this.emojiButton.innerHTML = e3, this.emojiButton.tabIndex = -1, this.emojiButton.dataset.emoji = this.emoji.emoji, this.emoji.custom && (this.emojiButton.dataset.custom = "true"), this.emojiButton.title = this.emoji.name, this.emojiButton.addEventListener("focus", () => this.onEmojiHover()), this.emojiButton.addEventListener("blur", () => this.onEmojiLeave()), this.emojiButton.addEventListener("click", () => this.onEmojiClick()), this.emojiButton.addEventListener("mouseover", () => this.onEmojiHover()), this.emojiButton.addEventListener("mouseout", () => this.onEmojiLeave()), this.options.style === "twemoji" && this.lazy && (this.emojiButton.style.opacity = "0.25"), this.emojiButton;
  }
  onEmojiClick() {
    this.emoji.variations && this.showVariants && this.options.showVariants || !this.options.showRecents || function(e3, o2) {
      const n2 = Wo(), i2 = {emoji: e3.emoji, name: e3.name, key: e3.key || e3.name, custom: e3.custom};
      localStorage.setItem("emojiPicker.recent", JSON.stringify([i2, ...n2.filter((e4) => !!e4.emoji && e4.key !== i2.key)].slice(0, o2.recentsCount)));
    }(this.emoji, this.options), this.events.emit("emoji", {emoji: this.emoji, showVariants: this.showVariants, button: this.emojiButton});
  }
  onEmojiHover() {
    this.showPreview && this.events.emit("showPreview", this.emoji);
  }
  onEmojiLeave() {
    this.showPreview && this.events.emit("hidePreview");
  }
}
class Jo {
  constructor(e3, o2, n2, i2, a2 = true) {
    this.showVariants = o2, this.events = n2, this.options = i2, this.lazy = a2, this.emojis = e3.filter((e4) => !e4.version || parseFloat(e4.version) <= parseFloat(i2.emojiVersion));
  }
  render() {
    const e3 = ze("div", "emoji-picker__container");
    return this.emojis.forEach((o2) => e3.appendChild(new Ko(o2, this.showVariants, true, this.events, this.options, this.lazy).render())), e3;
  }
}
var Go = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global$1 != "undefined" ? global$1 : typeof self != "undefined" ? self : {};
var Xo, Yo = (function(e3) {
  var o2, n2;
  o2 = Go, n2 = function() {
    var e4 = typeof window == "undefined", o3 = new Map(), n3 = new Map(), i2 = [];
    i2.total = 0;
    var a2 = [], r2 = [];
    function t2() {
      o3.clear(), n3.clear(), a2 = [], r2 = [];
    }
    function s2(e5) {
      for (var o4 = -9007199254740991, n4 = e5.length - 1; n4 >= 0; --n4) {
        var i3 = e5[n4];
        if (i3 !== null) {
          var a3 = i3.score;
          a3 > o4 && (o4 = a3);
        }
      }
      return o4 === -9007199254740991 ? null : o4;
    }
    function m2(e5, o4) {
      var n4 = e5[o4];
      if (n4 !== void 0)
        return n4;
      var i3 = o4;
      Array.isArray(o4) || (i3 = o4.split("."));
      for (var a3 = i3.length, r3 = -1; e5 && ++r3 < a3; )
        e5 = e5[i3[r3]];
      return e5;
    }
    function c2(e5) {
      return typeof e5 == "object";
    }
    var d2 = function() {
      var e5 = [], o4 = 0, n4 = {};
      function i3() {
        for (var n5 = 0, i4 = e5[n5], a3 = 1; a3 < o4; ) {
          var r3 = a3 + 1;
          n5 = a3, r3 < o4 && e5[r3].score < e5[a3].score && (n5 = r3), e5[n5 - 1 >> 1] = e5[n5], a3 = 1 + (n5 << 1);
        }
        for (var t3 = n5 - 1 >> 1; n5 > 0 && i4.score < e5[t3].score; t3 = (n5 = t3) - 1 >> 1)
          e5[n5] = e5[t3];
        e5[n5] = i4;
      }
      return n4.add = function(n5) {
        var i4 = o4;
        e5[o4++] = n5;
        for (var a3 = i4 - 1 >> 1; i4 > 0 && n5.score < e5[a3].score; a3 = (i4 = a3) - 1 >> 1)
          e5[i4] = e5[a3];
        e5[i4] = n5;
      }, n4.poll = function() {
        if (o4 !== 0) {
          var n5 = e5[0];
          return e5[0] = e5[--o4], i3(), n5;
        }
      }, n4.peek = function(n5) {
        if (o4 !== 0)
          return e5[0];
      }, n4.replaceTop = function(o5) {
        e5[0] = o5, i3();
      }, n4;
    }, g2 = d2();
    return function u2(l2) {
      var v2 = {single: function(e5, o4, n4) {
        return e5 ? (c2(e5) || (e5 = v2.getPreparedSearch(e5)), o4 ? (c2(o4) || (o4 = v2.getPrepared(o4)), ((n4 && n4.allowTypo !== void 0 ? n4.allowTypo : !l2 || l2.allowTypo === void 0 || l2.allowTypo) ? v2.algorithm : v2.algorithmNoTypo)(e5, o4, e5[0])) : null) : null;
      }, go: function(e5, o4, n4) {
        if (!e5)
          return i2;
        var a3 = (e5 = v2.prepareSearch(e5))[0], r3 = n4 && n4.threshold || l2 && l2.threshold || -9007199254740991, t3 = n4 && n4.limit || l2 && l2.limit || 9007199254740991, d3 = (n4 && n4.allowTypo !== void 0 ? n4.allowTypo : !l2 || l2.allowTypo === void 0 || l2.allowTypo) ? v2.algorithm : v2.algorithmNoTypo, u3 = 0, y2 = 0, f2 = o4.length;
        if (n4 && n4.keys)
          for (var j2 = n4.scoreFn || s2, h2 = n4.keys, p2 = h2.length, b2 = f2 - 1; b2 >= 0; --b2) {
            for (var w2 = o4[b2], k2 = new Array(p2), x2 = p2 - 1; x2 >= 0; --x2)
              (_2 = m2(w2, E2 = h2[x2])) ? (c2(_2) || (_2 = v2.getPrepared(_2)), k2[x2] = d3(e5, _2, a3)) : k2[x2] = null;
            k2.obj = w2;
            var C2 = j2(k2);
            C2 !== null && (C2 < r3 || (k2.score = C2, u3 < t3 ? (g2.add(k2), ++u3) : (++y2, C2 > g2.peek().score && g2.replaceTop(k2))));
          }
        else if (n4 && n4.key) {
          var E2 = n4.key;
          for (b2 = f2 - 1; b2 >= 0; --b2)
            (_2 = m2(w2 = o4[b2], E2)) && (c2(_2) || (_2 = v2.getPrepared(_2)), (z2 = d3(e5, _2, a3)) !== null && (z2.score < r3 || (z2 = {target: z2.target, _targetLowerCodes: null, _nextBeginningIndexes: null, score: z2.score, indexes: z2.indexes, obj: w2}, u3 < t3 ? (g2.add(z2), ++u3) : (++y2, z2.score > g2.peek().score && g2.replaceTop(z2)))));
        } else
          for (b2 = f2 - 1; b2 >= 0; --b2) {
            var _2, z2;
            (_2 = o4[b2]) && (c2(_2) || (_2 = v2.getPrepared(_2)), (z2 = d3(e5, _2, a3)) !== null && (z2.score < r3 || (u3 < t3 ? (g2.add(z2), ++u3) : (++y2, z2.score > g2.peek().score && g2.replaceTop(z2)))));
          }
        if (u3 === 0)
          return i2;
        var O2 = new Array(u3);
        for (b2 = u3 - 1; b2 >= 0; --b2)
          O2[b2] = g2.poll();
        return O2.total = u3 + y2, O2;
      }, goAsync: function(o4, n4, a3) {
        var r3 = false, t3 = new Promise(function(t4, g3) {
          if (!o4)
            return t4(i2);
          var u3 = (o4 = v2.prepareSearch(o4))[0], y2 = d2(), f2 = n4.length - 1, j2 = a3 && a3.threshold || l2 && l2.threshold || -9007199254740991, h2 = a3 && a3.limit || l2 && l2.limit || 9007199254740991, p2 = (a3 && a3.allowTypo !== void 0 ? a3.allowTypo : !l2 || l2.allowTypo === void 0 || l2.allowTypo) ? v2.algorithm : v2.algorithmNoTypo, b2 = 0, w2 = 0;
          function k2() {
            if (r3)
              return g3("canceled");
            var d3 = Date.now();
            if (a3 && a3.keys)
              for (var l3 = a3.scoreFn || s2, x2 = a3.keys, C2 = x2.length; f2 >= 0; --f2) {
                for (var E2 = n4[f2], _2 = new Array(C2), z2 = C2 - 1; z2 >= 0; --z2)
                  (S2 = m2(E2, I2 = x2[z2])) ? (c2(S2) || (S2 = v2.getPrepared(S2)), _2[z2] = p2(o4, S2, u3)) : _2[z2] = null;
                _2.obj = E2;
                var O2 = l3(_2);
                if (O2 !== null && !(O2 < j2) && (_2.score = O2, b2 < h2 ? (y2.add(_2), ++b2) : (++w2, O2 > y2.peek().score && y2.replaceTop(_2)), f2 % 1e3 == 0 && Date.now() - d3 >= 10))
                  return void (e4 ? setImmediate(k2) : setTimeout(k2));
              }
            else if (a3 && a3.key) {
              for (var I2 = a3.key; f2 >= 0; --f2)
                if ((S2 = m2(E2 = n4[f2], I2)) && (c2(S2) || (S2 = v2.getPrepared(S2)), (P2 = p2(o4, S2, u3)) !== null && !(P2.score < j2) && (P2 = {target: P2.target, _targetLowerCodes: null, _nextBeginningIndexes: null, score: P2.score, indexes: P2.indexes, obj: E2}, b2 < h2 ? (y2.add(P2), ++b2) : (++w2, P2.score > y2.peek().score && y2.replaceTop(P2)), f2 % 1e3 == 0 && Date.now() - d3 >= 10)))
                  return void (e4 ? setImmediate(k2) : setTimeout(k2));
            } else
              for (; f2 >= 0; --f2) {
                var S2, P2;
                if ((S2 = n4[f2]) && (c2(S2) || (S2 = v2.getPrepared(S2)), (P2 = p2(o4, S2, u3)) !== null && !(P2.score < j2) && (b2 < h2 ? (y2.add(P2), ++b2) : (++w2, P2.score > y2.peek().score && y2.replaceTop(P2)), f2 % 1e3 == 0 && Date.now() - d3 >= 10)))
                  return void (e4 ? setImmediate(k2) : setTimeout(k2));
              }
            if (b2 === 0)
              return t4(i2);
            for (var M2 = new Array(b2), A2 = b2 - 1; A2 >= 0; --A2)
              M2[A2] = y2.poll();
            M2.total = b2 + w2, t4(M2);
          }
          e4 ? setImmediate(k2) : k2();
        });
        return t3.cancel = function() {
          r3 = true;
        }, t3;
      }, highlight: function(e5, o4, n4) {
        if (e5 === null)
          return null;
        o4 === void 0 && (o4 = "<b>"), n4 === void 0 && (n4 = "</b>");
        for (var i3 = "", a3 = 0, r3 = false, t3 = e5.target, s3 = t3.length, m3 = e5.indexes, c3 = 0; c3 < s3; ++c3) {
          var d3 = t3[c3];
          if (m3[a3] === c3) {
            if (r3 || (r3 = true, i3 += o4), ++a3 === m3.length) {
              i3 += d3 + n4 + t3.substr(c3 + 1);
              break;
            }
          } else
            r3 && (r3 = false, i3 += n4);
          i3 += d3;
        }
        return i3;
      }, prepare: function(e5) {
        if (e5)
          return {target: e5, _targetLowerCodes: v2.prepareLowerCodes(e5), _nextBeginningIndexes: null, score: null, indexes: null, obj: null};
      }, prepareSlow: function(e5) {
        if (e5)
          return {target: e5, _targetLowerCodes: v2.prepareLowerCodes(e5), _nextBeginningIndexes: v2.prepareNextBeginningIndexes(e5), score: null, indexes: null, obj: null};
      }, prepareSearch: function(e5) {
        if (e5)
          return v2.prepareLowerCodes(e5);
      }, getPrepared: function(e5) {
        if (e5.length > 999)
          return v2.prepare(e5);
        var n4 = o3.get(e5);
        return n4 !== void 0 || (n4 = v2.prepare(e5), o3.set(e5, n4)), n4;
      }, getPreparedSearch: function(e5) {
        if (e5.length > 999)
          return v2.prepareSearch(e5);
        var o4 = n3.get(e5);
        return o4 !== void 0 || (o4 = v2.prepareSearch(e5), n3.set(e5, o4)), o4;
      }, algorithm: function(e5, o4, n4) {
        for (var i3 = o4._targetLowerCodes, t3 = e5.length, s3 = i3.length, m3 = 0, c3 = 0, d3 = 0, g3 = 0; ; ) {
          if (n4 === i3[c3]) {
            if (a2[g3++] = c3, ++m3 === t3)
              break;
            n4 = e5[d3 === 0 ? m3 : d3 === m3 ? m3 + 1 : d3 === m3 - 1 ? m3 - 1 : m3];
          }
          if (++c3 >= s3)
            for (; ; ) {
              if (m3 <= 1)
                return null;
              if (d3 === 0) {
                if (n4 === e5[--m3])
                  continue;
                d3 = m3;
              } else {
                if (d3 === 1)
                  return null;
                if ((n4 = e5[1 + (m3 = --d3)]) === e5[m3])
                  continue;
              }
              c3 = a2[(g3 = m3) - 1] + 1;
              break;
            }
        }
        m3 = 0;
        var u3 = 0, l3 = false, y2 = 0, f2 = o4._nextBeginningIndexes;
        f2 === null && (f2 = o4._nextBeginningIndexes = v2.prepareNextBeginningIndexes(o4.target));
        var j2 = c3 = a2[0] === 0 ? 0 : f2[a2[0] - 1];
        if (c3 !== s3)
          for (; ; )
            if (c3 >= s3) {
              if (m3 <= 0) {
                if (++u3 > t3 - 2)
                  break;
                if (e5[u3] === e5[u3 + 1])
                  continue;
                c3 = j2;
                continue;
              }
              --m3, c3 = f2[r2[--y2]];
            } else if (e5[u3 === 0 ? m3 : u3 === m3 ? m3 + 1 : u3 === m3 - 1 ? m3 - 1 : m3] === i3[c3]) {
              if (r2[y2++] = c3, ++m3 === t3) {
                l3 = true;
                break;
              }
              ++c3;
            } else
              c3 = f2[c3];
        if (l3)
          var h2 = r2, p2 = y2;
        else
          h2 = a2, p2 = g3;
        for (var b2 = 0, w2 = -1, k2 = 0; k2 < t3; ++k2)
          w2 !== (c3 = h2[k2]) - 1 && (b2 -= c3), w2 = c3;
        for (l3 ? u3 !== 0 && (b2 += -20) : (b2 *= 1e3, d3 !== 0 && (b2 += -20)), b2 -= s3 - t3, o4.score = b2, o4.indexes = new Array(p2), k2 = p2 - 1; k2 >= 0; --k2)
          o4.indexes[k2] = h2[k2];
        return o4;
      }, algorithmNoTypo: function(e5, o4, n4) {
        for (var i3 = o4._targetLowerCodes, t3 = e5.length, s3 = i3.length, m3 = 0, c3 = 0, d3 = 0; ; ) {
          if (n4 === i3[c3]) {
            if (a2[d3++] = c3, ++m3 === t3)
              break;
            n4 = e5[m3];
          }
          if (++c3 >= s3)
            return null;
        }
        m3 = 0;
        var g3 = false, u3 = 0, l3 = o4._nextBeginningIndexes;
        if (l3 === null && (l3 = o4._nextBeginningIndexes = v2.prepareNextBeginningIndexes(o4.target)), (c3 = a2[0] === 0 ? 0 : l3[a2[0] - 1]) !== s3)
          for (; ; )
            if (c3 >= s3) {
              if (m3 <= 0)
                break;
              --m3, c3 = l3[r2[--u3]];
            } else if (e5[m3] === i3[c3]) {
              if (r2[u3++] = c3, ++m3 === t3) {
                g3 = true;
                break;
              }
              ++c3;
            } else
              c3 = l3[c3];
        if (g3)
          var y2 = r2, f2 = u3;
        else
          y2 = a2, f2 = d3;
        for (var j2 = 0, h2 = -1, p2 = 0; p2 < t3; ++p2)
          h2 !== (c3 = y2[p2]) - 1 && (j2 -= c3), h2 = c3;
        for (g3 || (j2 *= 1e3), j2 -= s3 - t3, o4.score = j2, o4.indexes = new Array(f2), p2 = f2 - 1; p2 >= 0; --p2)
          o4.indexes[p2] = y2[p2];
        return o4;
      }, prepareLowerCodes: function(e5) {
        for (var o4 = e5.length, n4 = [], i3 = e5.toLowerCase(), a3 = 0; a3 < o4; ++a3)
          n4[a3] = i3.charCodeAt(a3);
        return n4;
      }, prepareBeginningIndexes: function(e5) {
        for (var o4 = e5.length, n4 = [], i3 = 0, a3 = false, r3 = false, t3 = 0; t3 < o4; ++t3) {
          var s3 = e5.charCodeAt(t3), m3 = s3 >= 65 && s3 <= 90, c3 = m3 || s3 >= 97 && s3 <= 122 || s3 >= 48 && s3 <= 57, d3 = m3 && !a3 || !r3 || !c3;
          a3 = m3, r3 = c3, d3 && (n4[i3++] = t3);
        }
        return n4;
      }, prepareNextBeginningIndexes: function(e5) {
        for (var o4 = e5.length, n4 = v2.prepareBeginningIndexes(e5), i3 = [], a3 = n4[0], r3 = 0, t3 = 0; t3 < o4; ++t3)
          a3 > t3 ? i3[t3] = a3 : (a3 = n4[++r3], i3[t3] = a3 === void 0 ? o4 : a3);
        return i3;
      }, cleanup: t2, new: u2};
      return v2;
    }();
  }, e3.exports ? e3.exports = n2() : o2.fuzzysort = n2();
}(Xo = {exports: {}}, Xo.exports), Xo.exports);
class $o {
  constructor(e3, o2) {
    this.message = e3, this.iconUrl = o2;
  }
  render() {
    const e3 = ze("div", "emoji-picker__search-not-found"), o2 = ze("div", "emoji-picker__search-not-found-icon");
    this.iconUrl ? o2.appendChild(Uo(this.iconUrl)) : o2.innerHTML = To, e3.appendChild(o2);
    const n2 = ze("h2");
    return n2.innerHTML = Ee(this.message), e3.appendChild(n2), e3;
  }
}
class Zo {
  constructor(e3, o2, n2, i2, a2) {
    if (this.events = e3, this.i18n = o2, this.options = n2, this.focusedEmojiIndex = 0, this.emojisPerRow = this.options.emojisPerRow || 8, this.emojiData = i2.filter((e4) => e4.version && parseFloat(e4.version) <= parseFloat(n2.emojiVersion) && e4.category !== void 0 && a2.indexOf(e4.category) >= 0), this.options.custom) {
      const e4 = this.options.custom.map((e5) => Object.assign(Object.assign({}, e5), {custom: true}));
      this.emojiData = [...this.emojiData, ...e4];
    }
    this.events.on("hideVariantPopup", () => {
      setTimeout(() => this.setFocusedEmoji(this.focusedEmojiIndex));
    });
  }
  render() {
    return this.searchContainer = ze("div", "emoji-picker__search-container"), this.searchField = ze("input", "emoji-picker__search"), this.searchField.placeholder = this.i18n.search, this.searchContainer.appendChild(this.searchField), this.searchIcon = ze("span", "emoji-picker__search-icon"), this.options.icons && this.options.icons.search ? this.searchIcon.appendChild(Uo(this.options.icons.search)) : this.searchIcon.innerHTML = Ro, this.searchIcon.addEventListener("click", (e3) => this.onClearSearch(e3)), this.searchContainer.appendChild(this.searchIcon), this.searchField.addEventListener("keydown", (e3) => this.onKeyDown(e3)), this.searchField.addEventListener("keyup", (e3) => this.onKeyUp(e3)), this.searchContainer;
  }
  clear() {
    this.searchField.value = "";
  }
  focus() {
    this.searchField.focus();
  }
  onClearSearch(e3) {
    e3.stopPropagation(), this.searchField.value && (this.searchField.value = "", this.resultsContainer = null, this.options.icons && this.options.icons.search ? (Oe(this.searchIcon), this.searchIcon.appendChild(Uo(this.options.icons.search))) : this.searchIcon.innerHTML = Ro, this.searchIcon.style.cursor = "default", this.events.emit("hideSearchResults"), setTimeout(() => this.searchField.focus()));
  }
  setFocusedEmoji(e3) {
    if (this.resultsContainer) {
      const o2 = this.resultsContainer.querySelectorAll("." + _e);
      o2[this.focusedEmojiIndex].tabIndex = -1, this.focusedEmojiIndex = e3;
      const n2 = o2[this.focusedEmojiIndex];
      n2.tabIndex = 0, n2.focus();
    }
  }
  handleResultsKeydown(e3) {
    if (this.resultsContainer) {
      const o2 = this.resultsContainer.querySelectorAll("." + _e);
      e3.key === "ArrowRight" ? this.setFocusedEmoji(Math.min(this.focusedEmojiIndex + 1, o2.length - 1)) : e3.key === "ArrowLeft" ? this.setFocusedEmoji(Math.max(0, this.focusedEmojiIndex - 1)) : e3.key === "ArrowDown" ? (e3.preventDefault(), this.focusedEmojiIndex < o2.length - this.emojisPerRow && this.setFocusedEmoji(this.focusedEmojiIndex + this.emojisPerRow)) : e3.key === "ArrowUp" ? (e3.preventDefault(), this.focusedEmojiIndex >= this.emojisPerRow && this.setFocusedEmoji(this.focusedEmojiIndex - this.emojisPerRow)) : e3.key === "Escape" && this.onClearSearch(e3);
    }
  }
  onKeyDown(e3) {
    e3.key === "Escape" && this.searchField.value && this.onClearSearch(e3);
  }
  onKeyUp(e3) {
    if (e3.key !== "Tab" && e3.key !== "Shift")
      if (this.searchField.value) {
        this.options.icons && this.options.icons.clearSearch ? (Oe(this.searchIcon), this.searchIcon.appendChild(Uo(this.options.icons.clearSearch))) : this.searchIcon.innerHTML = Vo, this.searchIcon.style.cursor = "pointer";
        const e4 = Yo.go(this.searchField.value, this.emojiData, {allowTypo: true, limit: 100, key: "name"}).map((e5) => e5.obj);
        this.events.emit("hidePreview"), e4.length ? (this.resultsContainer = new Jo(e4, true, this.events, this.options, false).render(), this.resultsContainer && (this.resultsContainer.querySelector("." + _e).tabIndex = 0, this.focusedEmojiIndex = 0, this.resultsContainer.addEventListener("keydown", (e5) => this.handleResultsKeydown(e5)), this.events.emit("showSearchResults", this.resultsContainer))) : this.events.emit("showSearchResults", new $o(this.i18n.notFound, this.options.icons && this.options.icons.notFound).render());
      } else
        this.options.icons && this.options.icons.search ? (Oe(this.searchIcon), this.searchIcon.appendChild(Uo(this.options.icons.search))) : this.searchIcon.innerHTML = Ro, this.searchIcon.style.cursor = "default", this.events.emit("hideSearchResults");
  }
}
class Qo {
  constructor(e3, o2, n2) {
    this.events = e3, this.emoji = o2, this.options = n2, this.focusedEmojiIndex = 0;
  }
  getEmoji(e3) {
    return this.popup.querySelectorAll("." + _e)[e3];
  }
  setFocusedEmoji(e3) {
    this.getEmoji(this.focusedEmojiIndex).tabIndex = -1, this.focusedEmojiIndex = e3;
    const o2 = this.getEmoji(this.focusedEmojiIndex);
    o2.tabIndex = 0, o2.focus();
  }
  render() {
    this.popup = ze("div", "emoji-picker__variant-popup");
    const e3 = ze("div", "emoji-picker__variant-overlay");
    e3.addEventListener("click", (e4) => {
      e4.stopPropagation(), this.popup.contains(e4.target) || this.events.emit("hideVariantPopup");
    }), this.popup.appendChild(new Ko(this.emoji, false, false, this.events, this.options, false).render()), (this.emoji.variations || []).forEach((e4, o3) => this.popup.appendChild(new Ko({name: this.emoji.name, emoji: e4, key: this.emoji.name + o3}, false, false, this.events, this.options, false).render()));
    const o2 = this.popup.querySelector("." + _e);
    return this.focusedEmojiIndex = 0, o2.tabIndex = 0, setTimeout(() => o2.focus()), this.popup.addEventListener("keydown", (e4) => {
      e4.key === "ArrowRight" ? this.setFocusedEmoji(Math.min(this.focusedEmojiIndex + 1, this.popup.querySelectorAll("." + _e).length - 1)) : e4.key === "ArrowLeft" ? this.setFocusedEmoji(Math.max(this.focusedEmojiIndex - 1, 0)) : e4.key === "Escape" && (e4.stopPropagation(), this.events.emit("hideVariantPopup"));
    }), e3.appendChild(this.popup), e3;
  }
}
const en = {search: "Search emojis...", categories: {recents: "Recent Emojis", smileys: "Smileys & Emotion", people: "People & Body", animals: "Animals & Nature", food: "Food & Drink", activities: "Activities", travel: "Travel & Places", objects: "Objects", symbols: "Symbols", flags: "Flags", custom: "Custom"}, notFound: "No emojis found"}, on = {recents: No, smileys: qo, people: Ho, animals: Po, food: Mo, activities: Lo, travel: So, objects: Bo, symbols: Do, flags: Ao, custom: Fo};
class nn {
  constructor(e3, o2, n2) {
    this.options = e3, this.events = o2, this.i18n = n2, this.activeButton = 0, this.buttons = [];
  }
  render() {
    var e3;
    const o2 = ze("div", "emoji-picker__category-buttons"), n2 = this.options.categories || ((e3 = this.options.emojiData) === null || e3 === void 0 ? void 0 : e3.categories) || xe.categories;
    let i2 = this.options.showRecents ? ["recents", ...n2] : n2;
    return this.options.custom && (i2 = [...i2, "custom"]), i2.forEach((e4) => {
      const n3 = ze("button", "emoji-picker__category-button");
      this.options.icons && this.options.icons.categories && this.options.icons.categories[e4] ? n3.appendChild(Uo(this.options.icons.categories[e4])) : n3.innerHTML = on[e4], n3.tabIndex = -1, n3.title = this.i18n.categories[e4], o2.appendChild(n3), this.buttons.push(n3), n3.addEventListener("click", () => {
        this.events.emit("categoryClicked", e4);
      });
    }), o2.addEventListener("keydown", (e4) => {
      switch (e4.key) {
        case "ArrowRight":
          this.events.emit("categoryClicked", i2[(this.activeButton + 1) % this.buttons.length]);
          break;
        case "ArrowLeft":
          this.events.emit("categoryClicked", i2[this.activeButton === 0 ? this.buttons.length - 1 : this.activeButton - 1]);
          break;
        case "ArrowUp":
        case "ArrowDown":
          e4.stopPropagation(), e4.preventDefault();
      }
    }), o2;
  }
  setActiveButton(e3, o2 = true) {
    let n2 = this.buttons[this.activeButton];
    n2.classList.remove("active"), n2.tabIndex = -1, this.activeButton = e3, n2 = this.buttons[this.activeButton], n2.classList.add("active"), n2.tabIndex = 0, o2 && n2.focus();
  }
}
const an = ["recents", "smileys", "people", "animals", "food", "activities", "travel", "objects", "symbols", "flags", "custom"];
class rn {
  constructor(e3, o2, n2, i2) {
    var a2;
    this.events = e3, this.i18n = o2, this.options = n2, this.emojiCategories = i2, this.currentCategory = 0, this.headers = [], this.focusedIndex = 0, this.handleKeyDown = (e4) => {
      switch (this.emojis.removeEventListener("scroll", this.highlightCategory), e4.key) {
        case "ArrowRight":
          this.focusedEmoji.tabIndex = -1, this.focusedIndex === this.currentEmojiCount - 1 && this.currentCategory < this.categories.length - 1 ? (this.options.showCategoryButtons && this.categoryButtons.setActiveButton(++this.currentCategory), this.setFocusedEmoji(0)) : this.focusedIndex < this.currentEmojiCount - 1 && this.setFocusedEmoji(this.focusedIndex + 1);
          break;
        case "ArrowLeft":
          this.focusedEmoji.tabIndex = -1, this.focusedIndex === 0 && this.currentCategory > 0 ? (this.options.showCategoryButtons && this.categoryButtons.setActiveButton(--this.currentCategory), this.setFocusedEmoji(this.currentEmojiCount - 1)) : this.setFocusedEmoji(Math.max(0, this.focusedIndex - 1));
          break;
        case "ArrowDown":
          e4.preventDefault(), this.focusedEmoji.tabIndex = -1, this.focusedIndex + this.emojisPerRow >= this.currentEmojiCount && this.currentCategory < this.categories.length - 1 ? (this.currentCategory++, this.options.showCategoryButtons && this.categoryButtons.setActiveButton(this.currentCategory), this.setFocusedEmoji(Math.min(this.focusedIndex % this.emojisPerRow, this.currentEmojiCount - 1))) : this.currentEmojiCount - this.focusedIndex > this.emojisPerRow && this.setFocusedEmoji(this.focusedIndex + this.emojisPerRow);
          break;
        case "ArrowUp":
          if (e4.preventDefault(), this.focusedEmoji.tabIndex = -1, this.focusedIndex < this.emojisPerRow && this.currentCategory > 0) {
            const e5 = this.getEmojiCount(this.currentCategory - 1);
            let o3 = e5 % this.emojisPerRow;
            o3 === 0 && (o3 = this.emojisPerRow);
            const n3 = this.focusedIndex, i3 = n3 > o3 - 1 ? e5 - 1 : e5 - o3 + n3;
            this.currentCategory--, this.options.showCategoryButtons && this.categoryButtons.setActiveButton(this.currentCategory), this.setFocusedEmoji(i3);
          } else
            this.setFocusedEmoji(this.focusedIndex >= this.emojisPerRow ? this.focusedIndex - this.emojisPerRow : this.focusedIndex);
      }
      requestAnimationFrame(() => this.emojis.addEventListener("scroll", this.highlightCategory));
    }, this.addCategory = (e4, o3) => {
      const n3 = ze("h2", "emoji-picker__category-name");
      n3.innerHTML = Ee(this.i18n.categories[e4] || en.categories[e4]), this.emojis.appendChild(n3), this.headers.push(n3), this.emojis.appendChild(new Jo(o3, true, this.events, this.options, e4 !== "recents").render());
    }, this.selectCategory = (e4, o3 = true) => {
      this.emojis.removeEventListener("scroll", this.highlightCategory), this.focusedEmoji && (this.focusedEmoji.tabIndex = -1);
      const n3 = this.categories.indexOf(e4);
      this.currentCategory = n3, this.setFocusedEmoji(0, false), this.options.showCategoryButtons && this.categoryButtons.setActiveButton(this.currentCategory, o3);
      const i3 = this.headerOffsets[n3];
      this.emojis.scrollTop = i3, requestAnimationFrame(() => this.emojis.addEventListener("scroll", this.highlightCategory));
    }, this.highlightCategory = () => {
      if (document.activeElement && document.activeElement.classList.contains("emoji-picker__emoji"))
        return;
      let e4 = this.headerOffsets.findIndex((e5) => e5 >= Math.round(this.emojis.scrollTop));
      this.emojis.scrollTop + this.emojis.offsetHeight === this.emojis.scrollHeight && (e4 = -1), e4 === 0 ? e4 = 1 : e4 < 0 && (e4 = this.headerOffsets.length), this.headerOffsets[e4] === this.emojis.scrollTop && e4++, this.currentCategory = e4 - 1, this.options.showCategoryButtons && this.categoryButtons.setActiveButton(this.currentCategory);
    }, this.emojisPerRow = n2.emojisPerRow || 8, this.categories = ((a2 = n2.emojiData) === null || a2 === void 0 ? void 0 : a2.categories) || n2.categories || xe.categories, n2.showRecents && (this.categories = ["recents", ...this.categories]), n2.custom && (this.categories = [...this.categories, "custom"]), this.categories.sort((e4, o3) => an.indexOf(e4) - an.indexOf(o3));
  }
  updateRecents() {
    if (this.options.showRecents) {
      this.emojiCategories.recents = Wo();
      const e3 = this.emojis.querySelector(".emoji-picker__container");
      e3 && e3.parentNode && e3.parentNode.replaceChild(new Jo(this.emojiCategories.recents, true, this.events, this.options, false).render(), e3);
    }
  }
  render() {
    this.container = ze("div", "emoji-picker__emoji-area"), this.options.showCategoryButtons && (this.categoryButtons = new nn(this.options, this.events, this.i18n), this.container.appendChild(this.categoryButtons.render())), this.emojis = ze("div", "emoji-picker__emojis"), this.options.showRecents && (this.emojiCategories.recents = Wo()), this.options.custom && (this.emojiCategories.custom = this.options.custom.map((e3) => Object.assign(Object.assign({}, e3), {custom: true}))), this.categories.forEach((e3) => this.addCategory(e3, this.emojiCategories[e3])), requestAnimationFrame(() => {
      setTimeout(() => {
        setTimeout(() => this.emojis.addEventListener("scroll", this.highlightCategory));
      });
    }), this.emojis.addEventListener("keydown", this.handleKeyDown), this.events.on("categoryClicked", this.selectCategory), this.container.appendChild(this.emojis);
    return this.container.querySelectorAll("." + _e)[0].tabIndex = 0, this.container;
  }
  reset() {
    this.headerOffsets = Array.prototype.map.call(this.headers, (e3) => e3.offsetTop), this.selectCategory(this.options.initialCategory || "smileys", false), this.currentCategory = this.categories.indexOf(this.options.initialCategory || "smileys"), this.options.showCategoryButtons && this.categoryButtons.setActiveButton(this.currentCategory, false);
  }
  get currentCategoryEl() {
    return this.emojis.querySelectorAll(".emoji-picker__container")[this.currentCategory];
  }
  get focusedEmoji() {
    return this.currentCategoryEl.querySelectorAll("." + _e)[this.focusedIndex];
  }
  get currentEmojiCount() {
    return this.currentCategoryEl.querySelectorAll("." + _e).length;
  }
  getEmojiCount(e3) {
    return this.emojis.querySelectorAll(".emoji-picker__container")[e3].querySelectorAll("." + _e).length;
  }
  setFocusedEmoji(e3, o2 = true) {
    this.focusedIndex = e3, this.focusedEmoji && (this.focusedEmoji.tabIndex = 0, o2 && this.focusedEmoji.focus());
  }
}
const tn = {position: "auto", autoHide: true, autoFocusSearch: true, showAnimation: true, showPreview: true, showSearch: true, showRecents: true, showVariants: true, showCategoryButtons: true, recentsCount: 50, emojiData: xe, emojiVersion: "12.1", theme: "light", categories: ["smileys", "people", "animals", "food", "activities", "travel", "objects", "symbols", "flags"], style: "native", twemojiOptions: {ext: ".svg", folder: "svg"}, emojisPerRow: 8, rows: 6, emojiSize: "1.8em", initialCategory: "smileys"};
class sn {
  constructor(e3 = {}) {
    this.events = new b(), this.publicEvents = new b(), this.pickerVisible = false, this.options = Object.assign(Object.assign({}, tn), e3), this.options.rootElement || (this.options.rootElement = document.body), this.i18n = Object.assign(Object.assign({}, en), e3.i18n), this.onDocumentClick = this.onDocumentClick.bind(this), this.onDocumentKeydown = this.onDocumentKeydown.bind(this), this.theme = this.options.theme || "light", this.emojiCategories = function(e4) {
      const o2 = {};
      return e4.emoji.forEach((n2) => {
        let i2 = o2[e4.categories[n2.category || 0]];
        i2 || (i2 = o2[e4.categories[n2.category || 0]] = []), i2.push(n2);
      }), o2;
    }(this.options.emojiData || xe), this.buildPicker();
  }
  on(e3, o2) {
    this.publicEvents.on(e3, o2);
  }
  off(e3, o2) {
    this.publicEvents.off(e3, o2);
  }
  setStyleProperties() {
    this.options.showAnimation || this.pickerEl.style.setProperty("--animation-duration", "0s"), this.options.emojisPerRow && this.pickerEl.style.setProperty("--emoji-per-row", this.options.emojisPerRow.toString()), this.options.rows && this.pickerEl.style.setProperty("--row-count", this.options.rows.toString()), this.options.emojiSize && this.pickerEl.style.setProperty("--emoji-size", this.options.emojiSize), this.options.showCategoryButtons || this.pickerEl.style.setProperty("--category-button-height", "0"), this.options.styleProperties && Object.keys(this.options.styleProperties).forEach((e3) => {
      this.options.styleProperties && this.pickerEl.style.setProperty(e3, this.options.styleProperties[e3]);
    });
  }
  showSearchResults(e3) {
    Oe(this.pickerContent), e3.classList.add("search-results"), this.pickerContent.appendChild(e3);
  }
  hideSearchResults() {
    this.pickerContent.firstChild !== this.emojiArea.container && (Oe(this.pickerContent), this.pickerContent.appendChild(this.emojiArea.container)), this.emojiArea.reset();
  }
  emitEmoji({emoji: o2, showVariants: n2}) {
    return e(this, void 0, void 0, function* () {
      if (o2.variations && n2 && this.options.showVariants)
        this.showVariantPopup(o2);
      else {
        let e3;
        setTimeout(() => this.emojiArea.updateRecents()), e3 = o2.custom ? this.emitCustomEmoji(o2) : this.options.style === "twemoji" ? yield this.emitTwemoji(o2) : this.emitNativeEmoji(o2), this.publicEvents.emit("emoji", e3), this.options.autoHide && this.hidePicker();
      }
    });
  }
  emitNativeEmoji(e3) {
    return {emoji: e3.emoji, name: e3.name};
  }
  emitCustomEmoji(e3) {
    return {url: e3.emoji, name: e3.name, custom: true};
  }
  emitTwemoji(e3) {
    return new Promise((o2) => {
      ke.parse(e3.emoji, Object.assign(Object.assign({}, this.options.twemojiOptions), {callback: (n2, {base: i2, size: a2, ext: r2}) => {
        const t2 = `${i2}${a2}/${n2}${r2}`;
        return o2({url: t2, emoji: e3.emoji, name: e3.name}), t2;
      }}));
    });
  }
  buildSearch() {
    var e3;
    this.options.showSearch && (this.search = new Zo(this.events, this.i18n, this.options, ((e3 = this.options.emojiData) === null || e3 === void 0 ? void 0 : e3.emoji) || xe.emoji, (this.options.categories || []).map((e4) => (this.options.emojiData || xe).categories.indexOf(e4))), this.pickerEl.appendChild(this.search.render()));
  }
  buildPreview() {
    this.options.showPreview && this.pickerEl.appendChild(new Se(this.events, this.options).render());
  }
  initPlugins() {
    if (this.options.plugins) {
      const e3 = ze("div", "emoji-picker__plugin-container");
      this.options.plugins.forEach((o2) => {
        if (!o2.render)
          throw new Error('Emoji Button plugins must have a "render" function.');
        e3.appendChild(o2.render(this));
      }), this.pickerEl.appendChild(e3);
    }
  }
  initFocusTrap() {
    this.focusTrap = h(this.pickerEl, {clickOutsideDeactivates: true, initialFocus: this.options.showSearch && this.options.autoFocusSearch ? ".emoji-picker__search" : '.emoji-picker__emoji[tabindex="0"]'});
  }
  buildPicker() {
    this.pickerEl = ze("div", "emoji-picker"), this.pickerEl.classList.add(this.theme), this.setStyleProperties(), this.initFocusTrap(), this.pickerContent = ze("div", "emoji-picker__content"), this.initPlugins(), this.buildSearch(), this.pickerEl.appendChild(this.pickerContent), this.emojiArea = new rn(this.events, this.i18n, this.options, this.emojiCategories), this.pickerContent.appendChild(this.emojiArea.render()), this.events.on("showSearchResults", this.showSearchResults.bind(this)), this.events.on("hideSearchResults", this.hideSearchResults.bind(this)), this.events.on("emoji", this.emitEmoji.bind(this)), this.buildPreview(), this.wrapper = ze("div", "emoji-picker__wrapper"), this.wrapper.appendChild(this.pickerEl), this.wrapper.style.display = "none", this.options.zIndex && (this.wrapper.style.zIndex = this.options.zIndex + ""), this.options.rootElement && this.options.rootElement.appendChild(this.wrapper), this.observeForLazyLoad();
  }
  showVariantPopup(e3) {
    const o2 = new Qo(this.events, e3, this.options).render();
    o2 && this.pickerEl.appendChild(o2), this.events.on("hideVariantPopup", () => {
      o2 && (o2.classList.add("hiding"), setTimeout(() => {
        o2 && this.pickerEl.removeChild(o2);
      }, 175)), this.events.off("hideVariantPopup");
    });
  }
  observeForLazyLoad() {
    this.observer = new IntersectionObserver(this.handleIntersectionChange.bind(this), {root: this.emojiArea.emojis}), this.emojiArea.emojis.querySelectorAll("." + _e).forEach((e3) => {
      this.shouldLazyLoad(e3) && this.observer.observe(e3);
    });
  }
  handleIntersectionChange(e3) {
    Array.prototype.filter.call(e3, (e4) => e4.intersectionRatio > 0).map((e4) => e4.target).forEach((e4) => {
      Ie(e4, this.options);
    });
  }
  shouldLazyLoad(e3) {
    return this.options.style === "twemoji" || e3.dataset.custom === "true";
  }
  onDocumentClick(e3) {
    this.pickerEl.contains(e3.target) || this.hidePicker();
  }
  destroyPicker() {
    this.events.off("emoji"), this.events.off("hideVariantPopup"), this.options.rootElement && (this.options.rootElement.removeChild(this.wrapper), this.popper && this.popper.destroy()), this.observer && this.observer.disconnect(), this.options.plugins && this.options.plugins.forEach((e3) => {
      e3.destroy && e3.destroy();
    });
  }
  hidePicker() {
    this.hideInProgress = true, this.focusTrap.deactivate(), this.pickerVisible = false, this.overlay && (document.body.removeChild(this.overlay), this.overlay = void 0), this.emojiArea.emojis.removeEventListener("scroll", this.emojiArea.highlightCategory), this.pickerEl.classList.add("hiding"), setTimeout(() => {
      this.wrapper.style.display = "none", this.pickerEl.classList.remove("hiding"), this.pickerContent.firstChild !== this.emojiArea.container && (Oe(this.pickerContent), this.pickerContent.appendChild(this.emojiArea.container)), this.search && this.search.clear(), this.events.emit("hideVariantPopup"), this.hideInProgress = false, this.popper && this.popper.destroy(), this.publicEvents.emit("hidden");
    }, this.options.showAnimation ? 170 : 0), setTimeout(() => {
      document.removeEventListener("click", this.onDocumentClick), document.removeEventListener("keydown", this.onDocumentKeydown);
    });
  }
  showPicker(e3) {
    this.hideInProgress ? setTimeout(() => this.showPicker(e3), 100) : (this.pickerVisible = true, this.wrapper.style.display = "block", this.determineDisplay(e3), this.focusTrap.activate(), setTimeout(() => {
      this.addEventListeners(), this.setInitialFocus();
    }), this.emojiArea.reset());
  }
  determineDisplay(e3) {
    window.matchMedia("screen and (max-width: 450px)").matches ? this.showMobileView() : typeof this.options.position == "string" ? this.setRelativePosition(e3) : this.setFixedPosition();
  }
  setInitialFocus() {
    this.pickerEl.querySelector(this.options.showSearch && this.options.autoFocusSearch ? ".emoji-picker__search" : `.${_e}[tabindex="0"]`).focus();
  }
  addEventListeners() {
    document.addEventListener("click", this.onDocumentClick), document.addEventListener("keydown", this.onDocumentKeydown);
  }
  setRelativePosition(e3) {
    this.popper = we(e3, this.wrapper, {placement: this.options.position});
  }
  setFixedPosition() {
    var e3;
    if ((e3 = this.options) === null || e3 === void 0 ? void 0 : e3.position) {
      this.wrapper.style.position = "fixed";
      const e4 = this.options.position;
      Object.keys(e4).forEach((o2) => {
        this.wrapper.style[o2] = e4[o2];
      });
    }
  }
  showMobileView() {
    const e3 = window.getComputedStyle(this.pickerEl), o2 = document.querySelector("html"), n2 = o2 && o2.clientHeight, i2 = o2 && o2.clientWidth, a2 = parseInt(e3.height), r2 = n2 ? n2 / 2 - a2 / 2 : 0, t2 = parseInt(e3.width), s2 = i2 ? i2 / 2 - t2 / 2 : 0;
    this.wrapper.style.position = "fixed", this.wrapper.style.top = r2 + "px", this.wrapper.style.left = s2 + "px", this.wrapper.style.zIndex = "5000", this.overlay = ze("div", "emoji-picker__overlay"), document.body.appendChild(this.overlay);
  }
  togglePicker(e3) {
    this.pickerVisible ? this.hidePicker() : this.showPicker(e3);
  }
  isPickerVisible() {
    return this.pickerVisible;
  }
  onDocumentKeydown(e3) {
    e3.key === "Escape" ? this.hidePicker() : e3.key === "Tab" ? this.pickerEl.classList.add("keyboard") : e3.key.match(/^[\w]$/) && this.search && this.search.focus();
  }
  setTheme(e3) {
    e3 !== this.theme && (this.pickerEl.classList.remove(this.theme), this.theme = e3, this.pickerEl.classList.add(e3));
  }
}
export {sn as EmojiButton};
export default null;