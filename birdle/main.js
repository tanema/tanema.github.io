'use strict';
this.wordle = this.wordle || {}, this.wordle.bundle = function(exports) {
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function _typeof(obj) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    })(obj);
  }
  /**
   * @param {!AudioNode} b
   * @param {!Function} a
   * @return {undefined}
   */
  function extend(b, a) {
    if (!(b instanceof a)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {!Function} a
   * @param {string} d
   * @return {undefined}
   */
  function t(a, d) {
    /** @type {number} */
    var i = 0;
    for (; i < d.length; i++) {
      var desc = d[i];
      desc.enumerable = desc.enumerable || false;
      /** @type {boolean} */
      desc.configurable = true;
      if ("value" in desc) {
        /** @type {boolean} */
        desc.writable = true;
      }
      Object.defineProperty(a, desc.key, desc);
    }
  }
  /**
   * @param {!Function} e
   * @param {!Function} r
   * @param {!Function} n
   * @return {?}
   */
  function test(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  }
  /**
   * @param {!Object} object
   * @param {string} name
   * @param {string} id
   * @return {?}
   */
  function callback(object, name, id) {
    return name in object ? Object.defineProperty(object, name, {
      value : id,
      enumerable : true,
      configurable : true,
      writable : true
    }) : object[name] = id, object;
  }
  /**
   * @param {string} c
   * @param {!Object} t
   * @return {undefined}
   */
  function trigger(c, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function");
    }
    /** @type {!Object} */
    c.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : c,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      fn(c, t);
    }
  }
  /**
   * @param {(!Function|string)} value
   * @return {?}
   */
  function clone(value) {
    return (clone = Object.setPrototypeOf ? Object.getPrototypeOf : function(value) {
      return value.__proto__ || Object.getPrototypeOf(value);
    })(value);
  }
  /**
   * @param {string} pos
   * @param {!Object} source
   * @return {?}
   */
  function fn(pos, source) {
    return (fn = Object.setPrototypeOf || function(m, a) {
      return m.__proto__ = a, m;
    })(pos, source);
  }
  /**
   * @return {?}
   */
  function defer() {
    if ("undefined" == typeof Reflect || !Reflect.construct) {
      return false;
    }
    if (Reflect.construct.sham) {
      return false;
    }
    if ("function" == typeof Proxy) {
      return true;
    }
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch (e) {
      return false;
    }
  }
  /**
   * @param {!Function} path
   * @param {!Array} version
   * @param {!Function} fn
   * @return {?}
   */
  function call(path, version, fn) {
    return (call = defer() ? Reflect.construct : function(func, ctorArgs, e) {
      /** @type {!Array} */
      var or_queue = [null];
      or_queue.push.apply(or_queue, ctorArgs);
      var t = new (Function.bind.apply(func, or_queue));
      return e && fn(t, e.prototype), t;
    }).apply(null, arguments);
  }
  /**
   * @param {string} ctor
   * @return {?}
   */
  function register(ctor) {
    /** @type {(Map|undefined)} */
    var ss = "function" == typeof Map ? new Map : void 0;
    return (register = function(obj) {
      /**
       * @return {?}
       */
      function i() {
        return call(obj, arguments, clone(this).constructor);
      }
      if (null === obj || (s = obj, -1 === Function.toString.call(s).indexOf("[native code]"))) {
        return obj;
      }
      var s;
      if ("function" != typeof obj) {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (void 0 !== ss) {
        if (ss.has(obj)) {
          return ss.get(obj);
        }
        ss.set(obj, i);
      }
      return i.prototype = Object.create(obj.prototype, {
        constructor : {
          value : i,
          enumerable : false,
          writable : true,
          configurable : true
        }
      }), fn(i, obj);
    })(ctor);
  }
  /**
   * @param {number} obj
   * @return {?}
   */
  function validate(obj) {
    if (void 0 === obj) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return obj;
  }
  /**
   * @param {undefined} event
   * @param {string} a
   * @return {?}
   */
  function onChange(event, a) {
    return !a || "object" != typeof a && "function" != typeof a ? validate(event) : a;
  }
  /**
   * @param {!Function} message
   * @return {?}
   */
  function makeRequest(message) {
    var deferred = defer();
    return function() {
      var val;
      var value = clone(message);
      if (deferred) {
        var ctor = clone(this).constructor;
        val = Reflect.construct(value, arguments, ctor);
      } else {
        val = value.apply(this, arguments);
      }
      return onChange(this, val);
    };
  }
  /**
   * @param {!Object} el
   * @param {number} target
   * @return {?}
   */
  function update(el, target) {
    return function(val) {
      if (Array.isArray(val)) {
        return val;
      }
    }(el) || function(s, a) {
      var g = null == s ? null : "undefined" != typeof Symbol && s[Symbol.iterator] || s["@@iterator"];
      if (null == g) {
        return;
      }
      var info;
      var o;
      /** @type {!Array} */
      var m = [];
      /** @type {boolean} */
      var _n = true;
      /** @type {boolean} */
      var i = false;
      try {
        g = g.call(s);
        for (; !(_n = (info = g.next()).done) && (m.push(info.value), !a || m.length !== a); _n = true) {
        }
      } catch (tObj) {
        /** @type {boolean} */
        i = true;
        o = tObj;
      } finally {
        try {
          if (!(_n || null == g.return)) {
            g.return();
          }
        } finally {
          if (i) {
            throw o;
          }
        }
      }
      return m;
    }(el, target) || render(el, target) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  /**
   * @param {!Object} i
   * @return {?}
   */
  function toArray(i) {
    return function(f) {
      if (Array.isArray(f)) {
        return map(f);
      }
    }(i) || function(units) {
      if ("undefined" != typeof Symbol && null != units[Symbol.iterator] || null != units["@@iterator"]) {
        return Array.from(units);
      }
    }(i) || render(i) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  /**
   * @param {!Object} data
   * @param {number} a
   * @return {?}
   */
  function render(data, a) {
    if (data) {
      if ("string" == typeof data) {
        return map(data, a);
      }
      /** @type {string} */
      var object = Object.prototype.toString.call(data).slice(8, -1);
      return "Object" === object && data.constructor && (object = data.constructor.name), "Map" === object || "Set" === object ? Array.from(data) : "Arguments" === object || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(object) ? map(data, a) : void 0;
    }
  }
  /**
   * @param {!Object} data
   * @param {number} length
   * @return {?}
   */
  function map(data, length) {
    if (null == length || length > data.length) {
      length = data.length;
    }
    /** @type {number} */
    var i = 0;
    /** @type {!Array} */
    var values = new Array(length);
    for (; i < length; i++) {
      values[i] = data[i];
    }
    return values;
  }
  /**
   * @param {?} x
   * @param {?} y
   * @return {?}
   */
  function equal(x, y) {
    return x === y || x != x && y != y;
  }
  /**
   * @param {!Array} keys
   * @param {!Object} key
   * @return {?}
   */
  function indexOfIdentical(keys, key) {
    var i = keys.length;
    for (; i--;) {
      if (equal(keys[i][0], key)) {
        return i;
      }
    }
    return -1;
  }
  /**
   * @param {string} entries
   * @return {undefined}
   */
  function ListCache(entries) {
    /** @type {number} */
    var i = -1;
    var length = null == entries ? 0 : entries.length;
    this.clear();
    for (; ++i < length;) {
      var entry = entries[i];
      this.set(entry[0], entry[1]);
    }
  }
  /**
   * @param {?} value
   * @return {?}
   */
  function stringify(value) {
    return null == value ? void 0 === value ? "[object Undefined]" : "[object Null]" : symToStringTag && symToStringTag in Object(value) ? function(key) {
      var itemPromise = has.call(key, i);
      var symbol = key[i];
      try {
        key[i] = void 0;
        /** @type {boolean} */
        var e = true;
      } catch (e) {
      }
      var t = toString.call(key);
      return e && (itemPromise ? key[i] = symbol : delete key[i]), t;
    }(value) : function(obj) {
      return objToString.call(obj);
    }(value);
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function isArray(obj) {
    var type = _typeof(obj);
    return null != obj && ("object" == type || "function" == type);
  }
  /**
   * @param {!Object} e
   * @return {?}
   */
  function replace(e) {
    if (!isArray(e)) {
      return false;
    }
    var style = stringify(e);
    return "[object Function]" == style || "[object GeneratorFunction]" == style || "[object AsyncFunction]" == style || "[object Proxy]" == style;
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function isNative(value) {
    return !(!isArray(value) || (args = value, flagAlias && flagAlias in args)) && (replace(value) ? reIsNative : reIsHostCtor).test(function(value) {
      if (null != value) {
        try {
          return objectToString$2.call(value);
        } catch (e) {
        }
        try {
          return value + "";
        } catch (e) {
        }
      }
      return "";
    }(value));
    var args;
  }
  /**
   * @param {!Function} object
   * @param {string} key
   * @return {?}
   */
  function getNative(object, key) {
    var value = function(object, name) {
      return null == object ? void 0 : object[name];
    }(object, key);
    return isNative(value) ? value : void 0;
  }
  /**
   * @param {string} entries
   * @return {undefined}
   */
  function Hash(entries) {
    /** @type {number} */
    var i = -1;
    var length = null == entries ? 0 : entries.length;
    this.clear();
    for (; ++i < length;) {
      var entry = entries[i];
      this.set(entry[0], entry[1]);
    }
  }
  /**
   * @param {!Object} self
   * @param {!Object} s
   * @return {?}
   */
  function get(self, s) {
    var numrc;
    var type;
    var data = self.__data__;
    return ("string" == (type = _typeof(numrc = s)) || "number" == type || "symbol" == type || "boolean" == type ? "__proto__" !== numrc : null === numrc) ? data["string" == typeof s ? "string" : "hash"] : data.map;
  }
  /**
   * @param {string} values
   * @return {undefined}
   */
  function MapCache(values) {
    /** @type {number} */
    var i = -1;
    var length = null == values ? 0 : values.length;
    this.clear();
    for (; ++i < length;) {
      var entry = values[i];
      this.set(entry[0], entry[1]);
    }
  }
  /**
   * @param {?} entries
   * @return {undefined}
   */
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  /**
   * @param {!Object} obj
   * @param {string} prop
   * @param {!Object} val
   * @return {undefined}
   */
  function debug(obj, prop, val) {
    if ("__proto__" == prop && defineProperty) {
      defineProperty(obj, prop, {
        configurable : true,
        enumerable : true,
        value : val,
        writable : true
      });
    } else {
      /** @type {!Object} */
      obj[prop] = val;
    }
  }
  /**
   * @param {!Object} obj
   * @param {string} key
   * @param {?} value
   * @return {undefined}
   */
  function set(obj, key, value) {
    if (void 0 !== value && !equal(obj[key], value) || void 0 === value && !(key in obj)) {
      debug(obj, key, value);
    }
  }
  /**
   * @param {!Object} typedArray
   * @param {boolean} isDeep
   * @return {?}
   */
  function copy(typedArray, isDeep) {
    var arrayBuffer;
    var lump;
    var buffer = isDeep ? (arrayBuffer = typedArray.buffer, lump = new arrayBuffer.constructor(arrayBuffer.byteLength), (new Uint8Array(lump)).set(new Uint8Array(arrayBuffer)), lump) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function read(value) {
    var obj = value && value.constructor;
    return value === ("function" == typeof obj && obj.prototype || objectProto$12);
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function isObject(obj) {
    return null != obj && "object" == _typeof(obj);
  }
  /**
   * @param {!Array} value
   * @return {?}
   */
  function requiredValueValid(value) {
    return isObject(value) && "[object Arguments]" == stringify(value);
  }
  /**
   * @param {number} length
   * @return {?}
   */
  function isLength(length) {
    return "number" == typeof length && length > -1 && length % 1 == 0 && length <= 9007199254740991;
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function isString(value) {
    return null != value && isLength(value.length) && !replace(value);
  }
  /**
   * @param {!Object} value
   * @param {string} name
   * @return {?}
   */
  function select(value, name) {
    if (("constructor" !== name || "function" != typeof value[name]) && "__proto__" != name) {
      return value[name];
    }
  }
  /**
   * @param {!Object} b
   * @param {string} key
   * @param {?} a
   * @return {undefined}
   */
  function log(b, key, a) {
    var value = b[key];
    if (!(own.call(b, key) && equal(value, a) && (void 0 !== a || key in b))) {
      debug(b, key, a);
    }
  }
  /**
   * @param {?} val
   * @param {number} x
   * @return {?}
   */
  function push(val, x) {
    var type = _typeof(val);
    return !!(x = null == x ? 9007199254740991 : x) && ("number" == type || "symbol" != type && rNum.test(val)) && val > -1 && val % 1 == 0 && val < x;
  }
  /**
   * @param {!Array} value
   * @param {boolean} inherited
   * @return {?}
   */
  function arrayLikeKeys(value, inherited) {
    /** @type {boolean} */
    var isArr = _isArray(value);
    var isBuff = !isArr && isBuffer(value);
    var isTyped = !isArr && !isBuff && add(value);
    var isType = !isArr && !isBuff && !isTyped && isTypedArray(value);
    var skipIndexes = isArr || isBuff || isTyped || isType;
    var result = skipIndexes ? function(length, iteratee) {
      /** @type {number} */
      var i = -1;
      /** @type {!Array} */
      var result = Array(length);
      for (; ++i < length;) {
        /** @type {string} */
        result[i] = iteratee(i);
      }
      return result;
    }(value.length, String) : [];
    var actual = result.length;
    var key;
    for (key in value) {
      if (!(!inherited && !__hasProp.call(value, key) || skipIndexes && ("length" == key || isTyped && ("offset" == key || "parent" == key) || isType && ("buffer" == key || "byteLength" == key || "byteOffset" == key) || push(key, actual)))) {
        result.push(key);
      }
    }
    return result;
  }
  /**
   * @param {!Array} source
   * @return {?}
   */
  function translate(source) {
    if (!isArray(source)) {
      return function(object) {
        /** @type {!Array} */
        var arr = [];
        if (null != object) {
          var key;
          for (key in Object(object)) {
            arr.push(key);
          }
        }
        return arr;
      }(source);
    }
    var contents = read(source);
    /** @type {!Array} */
    var result = [];
    var prop;
    for (prop in source) {
      if ("constructor" != prop || !contents && safeHasOwnProperty.call(source, prop)) {
        result.push(prop);
      }
    }
    return result;
  }
  /**
   * @param {!Array} data
   * @return {?}
   */
  function keys(data) {
    return isString(data) ? arrayLikeKeys(data, true) : translate(data);
  }
  /**
   * @param {!Array} val
   * @return {?}
   */
  function load(val) {
    return function(x, data, options, fn) {
      /** @type {boolean} */
      var missingOption = !options;
      if (!options) {
        options = {};
      }
      /** @type {number} */
      var n = -1;
      var max = data.length;
      for (; ++n < max;) {
        var i = data[n];
        var value = fn ? fn(options[i], x[i], i, options, x) : void 0;
        if (void 0 === value) {
          value = x[i];
        }
        if (missingOption) {
          debug(options, i, value);
        } else {
          log(options, i, value);
        }
      }
      return options;
    }(val, keys(val));
  }
  /**
   * @param {!Object} i
   * @param {!Object} container
   * @param {string} type
   * @param {number} fn
   * @param {!Function} map
   * @param {string} transform
   * @param {!Object} context
   * @return {undefined}
   */
  function check(i, container, type, fn, map, transform, context) {
    var a = select(i, type);
    var data = select(container, type);
    var items = context.get(data);
    if (items) {
      set(i, type, items);
    } else {
      var val;
      var result = transform ? transform(a, data, type + "", i, container, context) : void 0;
      /** @type {boolean} */
      var flag = void 0 === result;
      if (flag) {
        /** @type {boolean} */
        var h = _isArray(data);
        var d = !h && add(data);
        var w = !h && !d && isTypedArray(data);
        result = data;
        if (h || d || w) {
          if (_isArray(a)) {
            result = a;
          } else {
            if (isObject(val = a) && isString(val)) {
              result = function(params, result) {
                /** @type {number} */
                var p = -1;
                var q = params.length;
                if (!result) {
                  /** @type {!Array} */
                  result = Array(q);
                }
                for (; ++p < q;) {
                  result[p] = params[p];
                }
                return result;
              }(a);
            } else {
              if (d) {
                /** @type {boolean} */
                flag = false;
                result = function(message, zoomAware) {
                  if (zoomAware) {
                    return message.slice();
                  }
                  var params = message.length;
                  var t = markupFactory ? markupFactory(params) : new message.constructor(params);
                  return message.copy(t), t;
                }(data, true);
              } else {
                if (w) {
                  /** @type {boolean} */
                  flag = false;
                  result = copy(data, true);
                } else {
                  /** @type {!Array} */
                  result = [];
                }
              }
            }
          }
        } else {
          if (function(value) {
            if (!isObject(value) || "[object Object]" != stringify(value)) {
              return false;
            }
            var proto = $(value);
            if (null === proto) {
              return true;
            }
            var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
            return "function" == typeof Ctor && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
          }(data) || isBuffer(data)) {
            result = a;
            if (isBuffer(a)) {
              result = load(a);
            } else {
              if (!(isArray(a) && !replace(a))) {
                result = function(data) {
                  return "function" != typeof data.constructor || read(data) ? {} : resolve($(data));
                }(data);
              }
            }
          } else {
            /** @type {boolean} */
            flag = false;
          }
        }
      }
      if (flag) {
        context.set(data, result);
        map(result, data, fn, transform, context);
        context.delete(data);
      }
      set(i, type, result);
    }
  }
  /**
   * @param {!Object} object
   * @param {!Object} source
   * @param {number} callback
   * @param {string} customizer
   * @param {?} stack
   * @return {undefined}
   */
  function baseMerge(object, source, callback, customizer, stack) {
    if (object !== source) {
      baseFor(source, function(srcValue, start) {
        if (stack || (stack = new Stack), isArray(srcValue)) {
          check(object, source, start, callback, baseMerge, customizer, stack);
        } else {
          var result = customizer ? customizer(select(object, start), srcValue, start + "", object, source, stack) : void 0;
          if (void 0 === result) {
            /** @type {!Object} */
            result = srcValue;
          }
          set(object, start, result);
        }
      }, keys);
    }
  }
  /**
   * @param {!Array} keys
   * @return {?}
   */
  function key(keys) {
    return keys;
  }
  /**
   * @param {!Function} fn
   * @param {?} thisArg
   * @param {!Object} params
   * @return {?}
   */
  function applyQuick(fn, thisArg, params) {
    switch(params.length) {
      case 0:
        return fn.call(thisArg);
      case 1:
        return fn.call(thisArg, params[0]);
      case 2:
        return fn.call(thisArg, params[0], params[1]);
      case 3:
        return fn.call(thisArg, params[0], params[1], params[2]);
    }
    return fn.apply(thisArg, params);
  }
  /**
   * @param {string} id
   * @param {undefined} val
   * @return {?}
   */
  function exists(id, val) {
    return expect(function(e, i, value) {
      return i = max(void 0 === i ? e.length - 1 : i, 0), function() {
        /** @type {!Arguments} */
        var a = arguments;
        /** @type {number} */
        var j = -1;
        /** @type {number} */
        var m = max(a.length - i, 0);
        /** @type {!Array} */
        var x = Array(m);
        for (; ++j < m;) {
          x[j] = a[i + j];
        }
        /** @type {number} */
        j = -1;
        /** @type {!Array} */
        var params = Array(i + 1);
        for (; ++j < i;) {
          params[j] = a[j];
        }
        return params[i] = value(x), applyQuick(e, this, params);
      };
    }(id, val, key), id + "");
  }
  /**
   * @return {?}
   */
  function parse() {
    /** @type {string} */
    var favs_data = window.localStorage.getItem(url) || JSON.stringify(data);
    return JSON.parse(favs_data);
  }
  /**
   * @param {?} rows
   * @return {undefined}
   */
  function done(rows) {
    var createdRows = parse();
    !function(showThumb) {
      window.localStorage.setItem(url, JSON.stringify(showThumb));
    }(_afterCreateRow(createdRows, rows));
  }
  /**
   * @return {undefined}
   */
  function next() {
    dataLayer.push(arguments);
  }
  /**
   * @param {!Array} errors
   * @param {!NodeList} component
   * @return {?}
   */
  function filter(errors, component) {
    var tableSjis = {};
    return errors.forEach(function(inStyles, methodNameOrFunction) {
      if (component[methodNameOrFunction]) {
        /** @type {number} */
        var stylesLimit = 0;
        for (; stylesLimit < inStyles.length; stylesLimit++) {
          var sjis = inStyles[stylesLimit];
          var counter = component[methodNameOrFunction][stylesLimit];
          var id = tableSjis[sjis] || "unknown";
          if (settings[counter] > settings[id]) {
            tableSjis[sjis] = counter;
          }
        }
      }
    }), tableSjis;
  }
  /**
   * @param {number} number
   * @return {?}
   */
  function ordinal(number) {
    /** @type {!Array} */
    var suffixes = ["th", "st", "nd", "rd"];
    /** @type {number} */
    var a = number % 100;
    return number + (suffixes[(a - 20) % 10] || suffixes[a] || suffixes[0]);
  }
  /**
   * @param {!Date} y
   * @param {!Date} val
   * @return {?}
   */
  function cb(y, val) {
    /** @type {!Date} */
    var d = new Date(y);
    /** @type {number} */
    var filmSteps = (new Date(val)).setHours(0, 0, 0, 0) - d.setHours(0, 0, 0, 0);
    return Math.round(filmSteps / 864E5);
  }
  /**
   * @param {!Date} obj
   * @return {?}
   */
  function isDate(obj) {
    var i;
    var j = join(obj);
    return i = j % options.length, options[i];
  }
  /**
   * @param {!Date} instance
   * @return {?}
   */
  function join(instance) {
    return cb(c, instance);
  }
  /**
   * @param {!NodeList} values
   * @return {?}
   */
  function combine(values) {
    /** @type {string} */
    var ret = "";
    /** @type {number} */
    var j = 0;
    for (; j < values.length; j++) {
      /** @type {number} */
      var braceIndex = choices.indexOf(values[j]);
      /** @type {string} */
      ret = ret + (braceIndex >= 0 ? braces[braceIndex] : "_");
    }
    return ret;
  }
  /**
   * @return {?}
   */
  function deepClone() {
    /** @type {string} */
    var favs_data = window.localStorage.getItem(STORAGE_KEY_MOCKSTORE) || JSON.stringify(train1or);
    return JSON.parse(favs_data);
  }
  /**
   * @param {?} options
   * @return {undefined}
   */
  function draw(options) {
    var stdout = options.isWin;
    var includerReg = options.isStreak;
    var t = options.numGuesses;
    var data = deepClone();
    if (stdout) {
      data.guesses[t] += 1;
      if (includerReg) {
        data.currentStreak += 1;
      } else {
        /** @type {number} */
        data.currentStreak = 1;
      }
    } else {
      /** @type {number} */
      data.currentStreak = 0;
      data.guesses.fail += 1;
    }
    /** @type {number} */
    data.maxStreak = Math.max(data.currentStreak, data.maxStreak);
    data.gamesPlayed += 1;
    data.gamesWon += stdout ? 1 : 0;
    /** @type {number} */
    data.winPercentage = Math.round(data.gamesWon / data.gamesPlayed * 100);
    /** @type {number} */
    data.averageGuesses = Math.round(Object.entries(data.guesses).reduce(function(i, select) {
      var res = update(select, 2);
      var k = res[0];
      var width = res[1];
      return k !== undefined ? i = i + k * width : i;
    }, 0) / data.gamesWon);
    (function(commitData) {
      window.localStorage.setItem(STORAGE_KEY_MOCKSTORE, JSON.stringify(commitData));
    })(data);
  }
  /**
   * @param {?} thisArg
   * @param {number} _arguments
   * @param {!Function} P
   * @param {!Function} generator
   * @return {?}
   */
  function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(expect, reject) {
      /**
       * @param {?} value
       * @return {undefined}
       */
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (createConnectionErr) {
          reject(createConnectionErr);
        }
      }
      /**
       * @param {?} value
       * @return {undefined}
       */
      function rejected(value) {
        try {
          step(generator.throw(value));
        } catch (createConnectionErr) {
          reject(createConnectionErr);
        }
      }
      /**
       * @param {!Object} result
       * @return {undefined}
       */
      function step(result) {
        var x;
        if (result.done) {
          expect(result.value);
        } else {
          (x = result.value, x instanceof P ? x : new P(function(resolve) {
            resolve(x);
          })).then(fulfilled, rejected);
        }
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  /**
   * @param {?} text
   * @param {!Function} a
   * @return {?}
   */
  function send(text, a) {
    /**
     * @param {number} data
     * @return {?}
     */
    function verb(data) {
      return function(i) {
        return function(op) {
          if (pp) {
            throw new TypeError("Generator is already executing.");
          }
          for (; _;) {
            try {
              if (pp = 1, c && (t = 2 & op[0] ? c.return : op[0] ? c.throw || ((t = c.return) && t.call(c), 0) : c.next) && !(t = t.call(c, op[1])).done) {
                return t;
              }
              switch(c = 0, t && (op = [2 & op[0], t.value]), op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  return _.label++, {
                    value : op[1],
                    done : false
                  };
                case 5:
                  _.label++;
                  c = op[1];
                  /** @type {!Array} */
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!((t = (t = _.trys).length > 0 && t[t.length - 1]) || 6 !== op[0] && 2 !== op[0])) {
                    /** @type {number} */
                    _ = 0;
                    continue;
                  }
                  if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (6 === op[0] && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2]) {
                    _.ops.pop();
                  }
                  _.trys.pop();
                  continue;
              }
              op = a.call(text, _);
            } catch (e) {
              /** @type {!Array} */
              op = [6, e];
              /** @type {number} */
              c = 0;
            } finally {
              /** @type {number} */
              pp = t = 0;
            }
          }
          if (5 & op[0]) {
            throw op[1];
          }
          return {
            value : op[0] ? op[1] : void 0,
            done : true
          };
        }([data, i]);
      };
    }
    var pp;
    var c;
    var t;
    var g;
    var _ = {
      label : 0,
      sent : function() {
        if (1 & t[0]) {
          throw t[1];
        }
        return t[1];
      },
      trys : [],
      ops : []
    };
    return g = {
      next : verb(0),
      throw : verb(1),
      return : verb(2)
    }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
      return this;
    }), g;
  }
  /**
   * @param {!Object} text
   * @param {!Object} obj
   * @param {!Event} event
   * @return {undefined}
   */
  function paste(text, obj, event) {
    var key;
    for (key in text.success = true, obj) {
      var value = obj[key];
      var data = event.clipboardData;
      data.setData(key, value);
      if ("text/plain" === key && data.getData(key) !== value) {
        /** @type {boolean} */
        text.success = false;
      }
    }
    event.preventDefault();
  }
  /**
   * @param {!Object} d
   * @return {?}
   */
  function F(d) {
    var b = new e;
    var c = paste.bind(this, b, d);
    document.addEventListener("copy", c);
    try {
      document.execCommand("copy");
    } finally {
      document.removeEventListener("copy", c);
    }
    return b.success;
  }
  /**
   * @param {!Element} t
   * @param {!Object} obj
   * @return {?}
   */
  function wrap(t, obj) {
    selectRange(t);
    var res = F(obj);
    return _moveCursorToEnd(), res;
  }
  /**
   * @param {(Node|Window)} start
   * @return {undefined}
   */
  function selectRange(start) {
    var sel = document.getSelection();
    if (sel) {
      /** @type {(Range|null)} */
      var range = document.createRange();
      range.selectNodeContents(start);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }
  /**
   * @return {undefined}
   */
  function _moveCursorToEnd() {
    var selection = document.getSelection();
    if (selection) {
      selection.removeAllRanges();
    }
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function start(data) {
    return __awaiter(this, void 0, void 0, function() {
      var valid;
      return send(this, function(s) {
        if (valid = "text/plain" in data, "undefined" == typeof ClipboardEvent && void 0 !== state.clipboardData && void 0 !== state.clipboardData.setData) {
          if (!valid) {
            throw new Error("No `text/plain` value was specified.");
          }
          if (content = data["text/plain"], state.clipboardData.setData("Text", content)) {
            return [2, true];
          }
          throw new Error("Copying failed, possibly because the user rejected it.");
        }
        var content;
        return F(data) || navigator.userAgent.indexOf("Edge") > -1 || wrap(document.body, data) || function(parent) {
          /** @type {!Element} */
          var value = document.createElement("div");
          value.setAttribute("style", "-webkit-user-select: text !important");
          /** @type {string} */
          value.textContent = "temporary element";
          document.body.appendChild(value);
          var result = wrap(value, parent);
          return document.body.removeChild(value), result;
        }(data) || function(total) {
          /** @type {!Element} */
          var div = document.createElement("div");
          div.setAttribute("style", "-webkit-user-select: text !important");
          /** @type {!Element} */
          var a = div;
          if (div.attachShadow) {
            a = div.attachShadow({
              mode : "open"
            });
          }
          /** @type {!Element} */
          var t = document.createElement("span");
          /** @type {string} */
          t.innerText = total;
          a.appendChild(t);
          document.body.appendChild(div);
          selectRange(t);
          var bubble = document.execCommand("copy");
          return _moveCursorToEnd(), document.body.removeChild(div), bubble;
        }(data["text/plain"]) ? [2, true] : [2, false];
      });
    });
  }
  /**
   * @param {!Object} e
   * @param {!Function} handle
   * @param {!Function} listener
   * @return {undefined}
   */
  function init(e, handle, listener) {
    try {
      t = navigator.userAgent || navigator.vendor || window.opera;
      if (!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,
      4)) || navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || void 0 === navigator.share || !navigator.canShare || !navigator.canShare(e)) {
        (function(data) {
          return __awaiter(this, void 0, void 0, function() {
            return send(this, function(a) {
              if (renderMachines) {
                return [2, renderMachines(data)];
              }
              if (!start(function(cb) {
                var routes = {};
                return routes["text/plain"] = cb, routes;
              }(data))) {
                throw new Error("writeText() failed");
              }
              return [2];
            });
          });
        })(e.text).then(handle, listener);
      } else {
        navigator.share(e);
      }
    } catch (e) {
      listener();
    }
    var t;
  }
  /** @type {!Element} */
  var conferenceGroupDetailsTemplate = document.createElement("template");
  /** @type {string} */
  conferenceGroupDetailsTemplate.innerHTML = "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
  var Class = function(prop) {
    /**
     * @return {?}
     */
    function update() {
      var element;
      return extend(this, update), callback(validate(element = api.call(this)), "_letter", ""), callback(validate(element), "_state", "empty"), callback(validate(element), "_animation", "idle"), callback(validate(element), "_last", false), callback(validate(element), "_reveal", false), element.attachShadow({
        mode : "open"
      }), element;
    }
    trigger(update, prop);
    var api = makeRequest(update);
    return test(update, [{
      key : "last",
      set : function(text) {
        /** @type {string} */
        this._last = text;
      }
    }, {
      key : "connectedCallback",
      value : function() {
        var self = this;
        this.shadowRoot.appendChild(conferenceGroupDetailsTemplate.content.cloneNode(true));
        this.$tile = this.shadowRoot.querySelector(".tile");
        this.$tile.addEventListener("animationend", function(css) {
          if ("PopIn" === css.animationName) {
            /** @type {string} */
            self._animation = "idle";
          }
          if ("FlipIn" === css.animationName) {
            self.$tile.dataset.state = self._state;
            /** @type {string} */
            self._animation = "flip-out";
          }
          if ("FlipOut" === css.animationName) {
            /** @type {string} */
            self._animation = "idle";
            if (self._last) {
              self.dispatchEvent(new CustomEvent("game-last-tile-revealed-in-row", {
                bubbles : true,
                composed : true
              }));
            }
          }
          self._render();
        });
        this._render();
      }
    }, {
      key : "attributeChangedCallback",
      value : function(matchPattern, test, value) {
        switch(matchPattern) {
          case "letter":
            if (value === test) {
              break;
            }
            var end = "null" === value ? "" : value;
            this._letter = end;
            /** @type {string} */
            this._state = end ? "tbd" : "empty";
            /** @type {string} */
            this._animation = end ? "pop" : "idle";
            break;
          case "evaluation":
            if (!value) {
              break;
            }
            /** @type {string} */
            this._state = value;
            break;
          case "reveal":
            /** @type {string} */
            this._animation = "flip-in";
            /** @type {boolean} */
            this._reveal = true;
        }
        this._render();
      }
    }, {
      key : "_render",
      value : function() {
        if (this.$tile) {
          this.$tile.textContent = this._letter;
          if (["empty", "tbd"].includes(this._state)) {
            this.$tile.dataset.state = this._state;
          }
          if ((["empty", "tbd"].includes(this._state) || this._reveal) && this.$tile.dataset.animation != this._animation) {
            this.$tile.dataset.animation = this._animation;
          }
        }
      }
    }], [{
      key : "observedAttributes",
      get : function() {
        return ["letter", "evaluation", "reveal"];
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-tile", Class);
  /** @type {!Element} */
  var parts = document.createElement("template");
  /** @type {string} */
  parts.innerHTML = '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
  var cls = function(prop) {
    /**
     * @return {?}
     */
    function update() {
      var data;
      return extend(this, update), (data = api.call(this)).attachShadow({
        mode : "open"
      }), data._letters = "", data._evaluation = [], data._length, data;
    }
    trigger(update, prop);
    var api = makeRequest(update);
    return test(update, [{
      key : "evaluation",
      get : function() {
        return this._evaluation;
      },
      set : function(num) {
        var vroot = this;
        /** @type {!Object} */
        this._evaluation = num;
        if (this.$tiles) {
          this.$tiles.forEach(function(table, i) {
            table.setAttribute("evaluation", vroot._evaluation[i]);
            setTimeout(function() {
              table.setAttribute("reveal", "");
            }, 300 * i);
          });
        }
      }
    }, {
      key : "connectedCallback",
      value : function() {
        var data = this;
        this.shadowRoot.appendChild(parts.content.cloneNode(true));
        this.$row = this.shadowRoot.querySelector(".row");
        /**
         * @param {number} index
         * @return {undefined}
         */
        var init = function(index) {
          /** @type {!Element} */
          var node = document.createElement("game-tile");
          var className = data._letters[index];
          if (className && node.setAttribute("letter", className), data._evaluation[index]) {
            node.setAttribute("evaluation", data._evaluation[index]);
            setTimeout(function() {
              node.setAttribute("reveal", "");
            }, 100 * index);
          }
          if (index === data._length - 1) {
            /** @type {boolean} */
            node.last = true;
          }
          data.$row.appendChild(node);
        };
        /** @type {number} */
        var i = 0;
        for (; i < this._length; i++) {
          init(i);
        }
        this.$tiles = this.shadowRoot.querySelectorAll("game-tile");
        this.addEventListener("animationend", function(css) {
          if ("Shake" === css.animationName) {
            data.removeAttribute("invalid");
          }
        });
      }
    }, {
      key : "attributeChangedCallback",
      value : function(name, a, start) {
        switch(name) {
          case "letters":
            this._letters = start || "";
            break;
          case "length":
            /** @type {number} */
            this._length = parseInt(start, 10);
            break;
          case "win":
            if (null === start) {
              this.$tiles.forEach(function(focusedObj) {
                focusedObj.classList.remove("win");
              });
              break;
            }
            this.$tiles.forEach(function(elem, scaleX) {
              elem.classList.add("win");
              /** @type {string} */
              elem.style.animationDelay = "".concat(100 * scaleX, "ms");
            });
        }
        this._render();
      }
    }, {
      key : "_render",
      value : function() {
        var data = this;
        if (this.$row) {
          this.$tiles.forEach(function(a, tag) {
            var group = data._letters[tag];
            if (group) {
              a.setAttribute("letter", group);
            } else {
              a.removeAttribute("letter");
            }
          });
        }
      }
    }], [{
      key : "observedAttributes",
      get : function() {
        return ["letters", "length", "invalid", "win"];
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-row", cls);
  /** @type {!Element} */
  var tokens = document.createElement("template");
  /** @type {string} */
  tokens.innerHTML = "\n  <slot></slot>\n";
  /** @type {string} */
  var shop_id = "darkTheme";
  /** @type {string} */
  var STORE_ID = "colorBlindTheme";
  var SorTable = function(prop) {
    /**
     * @return {?}
     */
    function update() {
      var element;
      extend(this, update);
      callback(validate(element = api.call(this)), "isDarkTheme", false);
      callback(validate(element), "isColorBlindTheme", false);
      element.attachShadow({
        mode : "open"
      });
      /** @type {*} */
      var a = JSON.parse(window.localStorage.getItem(shop_id));
      /** @type {boolean} */
      var oldMatches = window.matchMedia("(prefers-color-scheme: dark)").matches;
      /** @type {*} */
      var addBtnElement = JSON.parse(window.localStorage.getItem(STORE_ID));
      return true === a || false === a ? element.setDarkTheme(a) : oldMatches && element.setDarkTheme(true), true !== addBtnElement && false !== addBtnElement || element.setColorBlindTheme(addBtnElement), element;
    }
    trigger(update, prop);
    var api = makeRequest(update);
    return test(update, [{
      key : "setDarkTheme",
      value : function(e) {
        /** @type {(Element|null)} */
        var a = document.querySelector("body");
        if (e && !a.classList.contains("nightmode")) {
          a.classList.add("nightmode");
        } else {
          a.classList.remove("nightmode");
        }
        /** @type {boolean} */
        this.isDarkTheme = e;
        window.localStorage.setItem(shop_id, JSON.stringify(e));
      }
    }, {
      key : "setColorBlindTheme",
      value : function(e) {
        /** @type {(Element|null)} */
        var a = document.querySelector("body");
        if (e && !a.classList.contains("colorblind")) {
          a.classList.add("colorblind");
        } else {
          a.classList.remove("colorblind");
        }
        /** @type {boolean} */
        this.isColorBlindTheme = e;
        window.localStorage.setItem(STORE_ID, JSON.stringify(e));
      }
    }, {
      key : "connectedCallback",
      value : function() {
        var window_ = this;
        this.shadowRoot.appendChild(tokens.content.cloneNode(true));
        this.shadowRoot.addEventListener("game-setting-change", function(params) {
          var config = params.detail;
          var groupCellClass = config.name;
          var anim = config.checked;
          switch(groupCellClass) {
            case "dark-theme":
              return void window_.setDarkTheme(anim);
            case "color-blind-theme":
              return void window_.setColorBlindTheme(anim);
          }
        });
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-theme-manager", SorTable);
  /** @type {function(this:IArrayLike<T>, *=, *=, ...T): !Array<T>} */
  var splice = Array.prototype.splice;
  /**
   * @return {undefined}
   */
  ListCache.prototype.clear = function() {
    /** @type {!Array} */
    this.__data__ = [];
    /** @type {number} */
    this.size = 0;
  };
  /**
   * @param {(Object|string)} key
   * @return {?}
   */
  ListCache.prototype.delete = function(key) {
    var data = this.__data__;
    var index = indexOfIdentical(data, key);
    return !(index < 0) && (index == data.length - 1 ? data.pop() : splice.call(data, index, 1), --this.size, true);
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  ListCache.prototype.get = function(key) {
    var keys = this.__data__;
    var index = indexOfIdentical(keys, key);
    return index < 0 ? void 0 : keys[index][1];
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  ListCache.prototype.has = function(key) {
    return indexOfIdentical(this.__data__, key) > -1;
  };
  /**
   * @param {!Object} key
   * @param {(!Function|string)} data
   * @return {?}
   */
  ListCache.prototype.set = function(key, data) {
    var keys = this.__data__;
    var index = indexOfIdentical(keys, key);
    return index < 0 ? (++this.size, keys.push([key, data])) : keys[index][1] = data, this;
  };
  var freeGlobal = "object" == ("undefined" == typeof global ? "undefined" : _typeof(global)) && global && global.Object === Object && global;
  /** @type {(Window|boolean)} */
  var freeSelf = "object" == ("undefined" == typeof self ? "undefined" : _typeof(self)) && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  var Symbol = root.Symbol;
  var OP = Object.prototype;
  var has = OP.hasOwnProperty;
  var toString = OP.toString;
  var i = Symbol ? Symbol.toStringTag : void 0;
  /** @type {function(this:*): string} */
  var objToString = Object.prototype.toString;
  var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
  var that;
  var coreJsData = root["__core-js_shared__"];
  /** @type {string} */
  var flagAlias = (that = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "")) ? "Symbol(src)_1." + that : "";
  /** @type {function(this:!Function): string} */
  var objectToString$2 = Function.prototype.toString;
  /** @type {!RegExp} */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var p = Function.prototype;
  var prop = Object.prototype;
  /** @type {function(this:!Function): string} */
  var o = p.toString;
  var func = prop.hasOwnProperty;
  /** @type {!RegExp} */
  var reIsNative = RegExp("^" + o.call(func).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  var Map = getNative(root, "Map");
  var nativeCreate = getNative(Object, "create");
  /** @type {function(this:Object, *): boolean} */
  var hasOwn = Object.prototype.hasOwnProperty;
  /** @type {function(this:Object, *): boolean} */
  var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
  /**
   * @return {undefined}
   */
  Hash.prototype.clear = function() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    /** @type {number} */
    this.size = 0;
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  Hash.prototype.delete = function(key) {
    var result = this.has(key) && delete this.__data__[key];
    return this.size -= result ? 1 : 0, result;
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  Hash.prototype.get = function(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var val = data[key];
      return "__lodash_hash_undefined__" === val ? void 0 : val;
    }
    return hasOwn.call(data, key) ? data[key] : void 0;
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  Hash.prototype.has = function(key) {
    var data = this.__data__;
    return nativeCreate ? void 0 !== data[key] : hasOwnProperty$2.call(data, key);
  };
  /**
   * @param {!Object} type
   * @param {?} value
   * @return {?}
   */
  Hash.prototype.set = function(type, value) {
    var data = this.__data__;
    return this.size += this.has(type) ? 0 : 1, data[type] = nativeCreate && void 0 === value ? "__lodash_hash_undefined__" : value, this;
  };
  /**
   * @return {undefined}
   */
  MapCache.prototype.clear = function() {
    /** @type {number} */
    this.size = 0;
    this.__data__ = {
      hash : new Hash,
      map : new (Map || ListCache),
      string : new Hash
    };
  };
  /**
   * @param {(Object|string)} id
   * @return {?}
   */
  MapCache.prototype.delete = function(id) {
    var result = get(this, id).delete(id);
    return this.size -= result ? 1 : 0, result;
  };
  /**
   * @param {!Object} target
   * @return {?}
   */
  MapCache.prototype.get = function(target) {
    return get(this, target).get(target);
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  MapCache.prototype.has = function(key) {
    return get(this, key).has(key);
  };
  /**
   * @param {(Object|string)} value
   * @param {!Array} item
   * @return {?}
   */
  MapCache.prototype.set = function(value, item) {
    var field = get(this, value);
    var n = field.size;
    return field.set(value, item), this.size += field.size == n ? 0 : 1, this;
  };
  /**
   * @return {undefined}
   */
  Stack.prototype.clear = function() {
    this.__data__ = new ListCache;
    /** @type {number} */
    this.size = 0;
  };
  /**
   * @param {(Object|string)} e
   * @return {?}
   */
  Stack.prototype.delete = function(e) {
    var data = this.__data__;
    var this_area = data.delete(e);
    return this.size = data.size, this_area;
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  Stack.prototype.get = function(key) {
    return this.__data__.get(key);
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  Stack.prototype.has = function(key) {
    return this.__data__.has(key);
  };
  /**
   * @param {(Object|string)} value
   * @param {!Array} item
   * @return {?}
   */
  Stack.prototype.set = function(value, item) {
    var cache = this.__data__;
    if (cache instanceof ListCache) {
      var pairs = cache.__data__;
      if (!Map || pairs.length < 199) {
        return pairs.push([value, item]), this.size = ++cache.size, this;
      }
      cache = this.__data__ = new MapCache(pairs);
    }
    return cache.set(value, item), this.size = cache.size, this;
  };
  var defineProperty = function() {
    try {
      var func = getNative(Object, "defineProperty");
      return func({}, "", {}), func;
    } catch (e) {
    }
  }();
  var fromRight;
  /**
   * @param {!Object} object
   * @param {!Function} cb
   * @param {!Function} keysFunc
   * @return {?}
   */
  var baseFor = function(object, cb, keysFunc) {
    /** @type {number} */
    var index = -1;
    /** @type {!Object} */
    var o = Object(object);
    var props = keysFunc(object);
    var length = props.length;
    for (; length--;) {
      var p = props[fromRight ? length : ++index];
      if (false === cb(o[p], p, o)) {
        break;
      }
    }
    return object;
  };
  /** @type {(boolean|{CountdownTimer: ?, GameApp: ?, GameHelp: ?, GameIcon: ?, GameKeyboard: ?, GameModal: ?, GamePage: ?, GameRow: ?, GameSettings: ?, GameStats: ?, GameSwitch: ?, GameThemeManager: ?, GameTile: ?, GameToast: ?})} */
  var uri = "object" == (void 0 === exports ? "undefined" : _typeof(exports)) && exports && !exports.nodeType && exports;
  var widget = uri && "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module && !module.nodeType && module;
  var Buffer = widget && widget.exports === uri ? root.Buffer : void 0;
  var markupFactory = Buffer ? Buffer.allocUnsafe : void 0;
  var Uint8Array = root.Uint8Array;
  /** @type {function((Object|null), (Object|null)=): !Object} */
  var _create = Object.create;
  var resolve = function() {
    /**
     * @return {undefined}
     */
    function e() {
    }
    return function(obj) {
      if (!isArray(obj)) {
        return {};
      }
      if (_create) {
        return _create(obj);
      }
      /** @type {!Object} */
      e.prototype = obj;
      var b = new e;
      return e.prototype = void 0, b;
    };
  }();
  var getPrototypeOf;
  var ret;
  /** @type {function(!Object): ?} */
  var $ = (getPrototypeOf = Object.getPrototypeOf, ret = Object, function(name) {
    return getPrototypeOf(ret(name));
  });
  var objectProto$12 = Object.prototype;
  var objectProto = Object.prototype;
  var isProperty = objectProto.hasOwnProperty;
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  /** @type {function(!Array): ?} */
  var isBuffer = requiredValueValid(function() {
    return arguments;
  }()) ? requiredValueValid : function(value) {
    return isObject(value) && isProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  /** @type {function(*): boolean} */
  var _isArray = Array.isArray;
  /** @type {(boolean|{CountdownTimer: ?, GameApp: ?, GameHelp: ?, GameIcon: ?, GameKeyboard: ?, GameModal: ?, GamePage: ?, GameRow: ?, GameSettings: ?, GameStats: ?, GameSwitch: ?, GameThemeManager: ?, GameTile: ?, GameToast: ?})} */
  var freeExports = "object" == (void 0 === exports ? "undefined" : _typeof(exports)) && exports && !exports.nodeType && exports;
  var freeModule = freeExports && "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module && !module.nodeType && module;
  var file = freeModule && freeModule.exports === freeExports ? root.Buffer : void 0;
  var add = (file ? file.isBuffer : void 0) || function() {
    return false;
  };
  var funcProto = Function.prototype;
  var ObjProto = Object.prototype;
  /** @type {function(this:!Function): string} */
  var funcToString = funcProto.toString;
  var hasOwnProperty = ObjProto.hasOwnProperty;
  /** @type {string} */
  var objectCtorString = funcToString.call(Object);
  var primaryReplicas = {};
  /** @type {boolean} */
  primaryReplicas["[object Float32Array]"] = primaryReplicas["[object Float64Array]"] = primaryReplicas["[object Int8Array]"] = primaryReplicas["[object Int16Array]"] = primaryReplicas["[object Int32Array]"] = primaryReplicas["[object Uint8Array]"] = primaryReplicas["[object Uint8ClampedArray]"] = primaryReplicas["[object Uint16Array]"] = primaryReplicas["[object Uint32Array]"] = true;
  /** @type {boolean} */
  primaryReplicas["[object Arguments]"] = primaryReplicas["[object Array]"] = primaryReplicas["[object ArrayBuffer]"] = primaryReplicas["[object Boolean]"] = primaryReplicas["[object DataView]"] = primaryReplicas["[object Date]"] = primaryReplicas["[object Error]"] = primaryReplicas["[object Function]"] = primaryReplicas["[object Map]"] = primaryReplicas["[object Number]"] = primaryReplicas["[object Object]"] = primaryReplicas["[object RegExp]"] = primaryReplicas["[object Set]"] = primaryReplicas["[object String]"] =
  primaryReplicas["[object WeakMap]"] = false;
  /** @type {(boolean|{CountdownTimer: ?, GameApp: ?, GameHelp: ?, GameIcon: ?, GameKeyboard: ?, GameModal: ?, GamePage: ?, GameRow: ?, GameSettings: ?, GameStats: ?, GameSwitch: ?, GameThemeManager: ?, GameTile: ?, GameToast: ?})} */
  var a = "object" == (void 0 === exports ? "undefined" : _typeof(exports)) && exports && !exports.nodeType && exports;
  var parent = a && "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module && !module.nodeType && module;
  var freeProcess = parent && parent.exports === a && freeGlobal.process;
  var nodeUtil = function() {
    try {
      var e = parent && parent.require && parent.require("util").types;
      return e || freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  var isTypedArray = nodeIsTypedArray ? function(func) {
    return function(ldata) {
      return func(ldata);
    };
  }(nodeIsTypedArray) : function(value) {
    return isObject(value) && isLength(value.length) && !!primaryReplicas[stringify(value)];
  };
  /** @type {function(this:Object, *): boolean} */
  var own = Object.prototype.hasOwnProperty;
  /** @type {!RegExp} */
  var rNum = /^(?:0|[1-9]\d*)$/;
  /** @type {function(this:Object, *): boolean} */
  var __hasProp = Object.prototype.hasOwnProperty;
  /** @type {function(this:Object, *): boolean} */
  var safeHasOwnProperty = Object.prototype.hasOwnProperty;
  /** @type {function(...?): number} */
  var max = Math.max;
  /** @type {!Function} */
  var id = defineProperty ? function(resourceClass, a) {
    return defineProperty(resourceClass, "toString", {
      configurable : true,
      enumerable : false,
      value : (_x$2 = a, function() {
        return _x$2;
      }),
      writable : true
    });
    var _x$2;
  } : key;
  /** @type {function(): number} */
  var d = Date.now;
  var expect = function(CropAreaRectangle) {
    /** @type {number} */
    var a = 0;
    /** @type {number} */
    var concurency = 0;
    return function() {
      /** @type {number} */
      var connectNumber = d();
      /** @type {number} */
      var first = 16 - (connectNumber - concurency);
      if (concurency = connectNumber, first > 0) {
        if (++a >= 800) {
          return arguments[0];
        }
      } else {
        /** @type {number} */
        a = 0;
      }
      return CropAreaRectangle.apply(void 0, arguments);
    };
  }(id);
  var merge;
  var _afterCreateRow = (merge = function(object, source, callback) {
    baseMerge(object, source, callback);
  }, exists(function(obj, array) {
    /** @type {number} */
    var i = -1;
    var length = array.length;
    var customizer = length > 1 ? array[length - 1] : void 0;
    var el_l = length > 2 ? array[2] : void 0;
    /** @type {(!Function|undefined)} */
    customizer = merge.length > 3 && "function" == typeof customizer ? (length--, customizer) : void 0;
    if (el_l && function(undefined, y, pos) {
      if (!isArray(pos)) {
        return false;
      }
      var type = _typeof(y);
      return !!("number" == type ? isString(pos) && push(y, pos.length) : "string" == type && y in pos) && equal(pos[y], undefined);
    }(array[0], array[1], el_l)) {
      /** @type {(!Function|undefined)} */
      customizer = length < 3 ? void 0 : customizer;
      /** @type {number} */
      length = 1;
    }
    /** @type {!Object} */
    obj = Object(obj);
    for (; ++i < length;) {
      var item = array[i];
      if (item) {
        merge(obj, item, i, customizer);
      }
    }
    return obj;
  }));
  /** @type {string} */
  var url = "gameState";
  var data = {
    boardState : null,
    evaluations : null,
    rowIndex : null,
    solution : null,
    gameStatus : null,
    lastPlayedTs : null,
    lastCompletedTs : null,
    restoringFromLocalStorage : null,
    hardMode : false
  };
  /** @type {!Element} */
  var nodes = document.createElement("template");
  /** @type {string} */
  nodes.innerHTML = '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  #privacy-policy,\n  #copyright {\n    text-align: left;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Hard Mode</div>\n          <div class="description">Any revealed hints must be used in subsequent guesses</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Dark Theme</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Color Blind Mode</div>\n          <div class="description">High contrast colors</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section></div>\n  <div id="footnote">\n    <div>\n      <div id="privacy-policy"><a href="https://www.powerlanguage.co.uk/privacy-policy.html" target="_blank">Privacy Policy</a></div>\n      <div id="copyright">Copyright 2021-2022. All Rights Reserved.</div>\n    </div>\n    <div>\n      <div id="puzzle-number"></div>\n      <div id="hash"></div>\n    </div>\n  </div>\n';
  var XelDemoElement = function(prop) {
    /**
     * @return {?}
     */
    function update() {
      var element;
      return extend(this, update), callback(validate(element = api.call(this)), "gameApp", void 0), element.attachShadow({
        mode : "open"
      }), element;
    }
    trigger(update, prop);
    var api = makeRequest(update);
    return test(update, [{
      key : "connectedCallback",
      value : function() {
        var e;
        var modal = this;
        this.shadowRoot.appendChild(nodes.content.cloneNode(true));
        this.shadowRoot.querySelector("#hash").textContent = null === (e = window.wordle) || void 0 === e ? void 0 : e.hash;
        /** @type {string} */
        this.shadowRoot.querySelector("#puzzle-number").textContent = "#".concat(this.gameApp.dayOffset);
        this.shadowRoot.addEventListener("game-switch-change", function(event) {
          event.stopPropagation();
          var node = event.detail;
          var t = node.name;
          var value = node.checked;
          var isDisabled = node.disabled;
          modal.dispatchEvent(new CustomEvent("game-setting-change", {
            bubbles : true,
            composed : true,
            detail : {
              name : t,
              checked : value,
              disabled : isDisabled
            }
          }));
          modal.render();
        });
        this.render();
      }
    }, {
      key : "render",
      value : function() {
        /** @type {(Element|null)} */
        var e = document.querySelector("body");
        if (e.classList.contains("nightmode")) {
          this.shadowRoot.querySelector("#dark-theme").setAttribute("checked", "");
        }
        if (e.classList.contains("colorblind")) {
          this.shadowRoot.querySelector("#color-blind-theme").setAttribute("checked", "");
        }
        var from = parse();
        if (from.hardMode) {
          this.shadowRoot.querySelector("#hard-mode").setAttribute("checked", "");
        }
        if (!(from.hardMode || "IN_PROGRESS" !== from.gameStatus || 0 === from.rowIndex)) {
          this.shadowRoot.querySelector("#hard-mode").removeAttribute("checked");
          this.shadowRoot.querySelector("#hard-mode").setAttribute("disabled", "");
        }
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-settings", XelDemoElement);
  /** @type {!Element} */
  var content = document.createElement("template");
  /** @type {string} */
  content.innerHTML = '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
  var wndMain;
  var ActionSheetButtonElement = function(prop) {
    /**
     * @return {?}
     */
    function update() {
      var element;
      return extend(this, update), callback(validate(element = api.call(this)), "_duration", void 0), element.attachShadow({
        mode : "open"
      }), element;
    }
    trigger(update, prop);
    var api = makeRequest(update);
    return test(update, [{
      key : "connectedCallback",
      value : function() {
        var gobel = this;
        this.shadowRoot.appendChild(content.content.cloneNode(true));
        var e = this.shadowRoot.querySelector(".toast");
        e.textContent = this.getAttribute("text");
        this._duration = this.getAttribute("duration") || 1E3;
        if ("Infinity" !== this._duration) {
          setTimeout(function() {
            e.classList.add("fade");
          }, this._duration);
        }
        e.addEventListener("transitionend", function(a) {
          gobel.parentNode.removeChild(gobel);
        });
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-toast", ActionSheetButtonElement);
  window.dataLayer = window.dataLayer || [];
  next("js", new Date);
  next("config", "G-2SSGMHY3NP", {
    app_version : null === (wndMain = window.wordle) || void 0 === wndMain ? void 0 : wndMain.hash,
    debug_mode : false
  });
  /** @type {!Array} */
  var options = ["cigar", "rebut", "sissy", "humph", "awake", "blush", "focal", "evade", "naval", "serve", "heath", "dwarf", "model", "karma", "stink", "grade", "quiet", "bench", "abate", "feign", "major", "death", "fresh", "crust", "stool", "colon", "abase", "marry", "react", "batty", "pride", "floss", "helix", "croak", "staff", "paper", "unfed", "whelp", "trawl", "outdo", "adobe", "crazy", "sower", "repay", "digit", "crate", "cluck", "spike", "mimic", "pound", "maxim", "linen", "unmet", "flesh",
  "booby", "forth", "first", "stand", "belly", "ivory", "seedy", "print", "yearn", "drain", "bribe", "stout", "panel", "crass", "flume", "offal", "agree", "error", "swirl", "argue", "bleed", "delta", "flick", "totem", "wooer", "front", "shrub", "parry", "biome", "lapel", "start", "greet", "goner", "golem", "lusty", "loopy", "round", "audit", "lying", "gamma", "labor", "islet", "civic", "forge", "corny", "moult", "basic", "salad", "agate", "spicy", "spray", "essay", "fjord", "spend", "kebab", "guild",
  "aback", "motor", "alone", "hatch", "hyper", "thumb", "dowry", "ought", "belch", "dutch", "pilot", "tweed", "comet", "jaunt", "enema", "steed", "abyss", "growl", "fling", "dozen", "boozy", "erode", "world", "gouge", "click", "briar", "great", "altar", "pulpy", "blurt", "coast", "duchy", "groin", "fixer", "group", "rogue", "badly", "smart", "pithy", "gaudy", "chill", "heron", "vodka", "finer", "surer", "radio", "rouge", "perch", "retch", "wrote", "clock", "tilde", "store", "prove", "bring", "solve",
  "cheat", "grime", "exult", "usher", "epoch", "triad", "break", "rhino", "viral", "conic", "masse", "sonic", "vital", "trace", "using", "peach", "champ", "baton", "brake", "pluck", "craze", "gripe", "weary", "picky", "acute", "ferry", "aside", "tapir", "troll", "unify", "rebus", "boost", "truss", "siege", "tiger", "banal", "slump", "crank", "gorge", "query", "drink", "favor", "abbey", "tangy", "panic", "solar", "shire", "proxy", "point", "robot", "prick", "wince", "crimp", "knoll", "sugar", "whack",
  "mount", "perky", "could", "wrung", "light", "those", "moist", "shard", "pleat", "aloft", "skill", "elder", "frame", "humor", "pause", "ulcer", "ultra", "robin", "cynic", "agora", "aroma", "caulk", "shake", "pupal", "dodge", "swill", "tacit", "other", "thorn", "trove", "bloke", "vivid", "spill", "chant", "choke", "rupee", "nasty", "mourn", "ahead", "brine", "cloth", "hoard", "sweet", "month", "lapse", "watch", "today", "focus", "smelt", "tease", "cater", "movie", "lynch", "saute", "allow", "renew",
  "their", "slosh", "purge", "chest", "depot", "epoxy", "nymph", "found", "shall", "harry", "stove", "lowly", "snout", "trope", "fewer", "shawl", "natal", "fibre", "comma", "foray", "scare", "stair", "black", "squad", "royal", "chunk", "mince", "slave", "shame", "cheek", "ample", "flair", "foyer", "cargo", "oxide", "plant", "olive", "inert", "askew", "heist", "shown", "zesty", "hasty", "trash", "fella", "larva", "forgo", "story", "hairy", "train", "homer", "badge", "midst", "canny", "fetus", "butch",
  "farce", "slung", "tipsy", "metal", "yield", "delve", "being", "scour", "glass", "gamer", "scrap", "money", "hinge", "album", "vouch", "asset", "tiara", "crept", "bayou", "atoll", "manor", "creak", "showy", "phase", "froth", "depth", "gloom", "flood", "trait", "girth", "piety", "payer", "goose", "float", "donor", "atone", "primo", "apron", "blown", "cacao", "loser", "input", "gloat", "awful", "brink", "smite", "beady", "rusty", "retro", "droll", "gawky", "hutch", "pinto", "gaily", "egret", "lilac",
  "sever", "field", "fluff", "hydro", "flack", "agape", "wench", "voice", "stead", "stalk", "berth", "madam", "night", "bland", "liver", "wedge", "augur", "roomy", "wacky", "flock", "angry", "bobby", "trite", "aphid", "tryst", "midge", "power", "elope", "cinch", "motto", "stomp", "upset", "bluff", "cramp", "quart", "coyly", "youth", "rhyme", "buggy", "alien", "smear", "unfit", "patty", "cling", "glean", "label", "hunky", "khaki", "poker", "gruel", "twice", "twang", "shrug", "treat", "unlit", "waste",
  "merit", "woven", "octal", "needy", "clown", "widow", "irony", "ruder", "gauze", "chief", "onset", "prize", "fungi", "charm", "gully", "inter", "whoop", "taunt", "leery", "class", "theme", "lofty", "tibia", "booze", "alpha", "thyme", "eclat", "doubt", "parer", "chute", "stick", "trice", "alike", "sooth", "recap", "saint", "liege", "glory", "grate", "admit", "brisk", "soggy", "usurp", "scald", "scorn", "leave", "twine", "sting", "bough", "marsh", "sloth", "dandy", "vigor", "howdy", "enjoy", "valid",
  "ionic", "equal", "unset", "floor", "catch", "spade", "stein", "exist", "quirk", "denim", "grove", "spiel", "mummy", "fault", "foggy", "flout", "carry", "sneak", "libel", "waltz", "aptly", "piney", "inept", "aloud", "photo", "dream", "stale", "vomit", "ombre", "fanny", "unite", "snarl", "baker", "there", "glyph", "pooch", "hippy", "spell", "folly", "louse", "gulch", "vault", "godly", "threw", "fleet", "grave", "inane", "shock", "crave", "spite", "valve", "skimp", "claim", "rainy", "musty", "pique",
  "daddy", "quasi", "arise", "aging", "valet", "opium", "avert", "stuck", "recut", "mulch", "genre", "plume", "rifle", "count", "incur", "total", "wrest", "mocha", "deter", "study", "lover", "safer", "rivet", "funny", "smoke", "mound", "undue", "sedan", "pagan", "swine", "guile", "gusty", "equip", "tough", "canoe", "chaos", "covet", "human", "udder", "lunch", "blast", "stray", "manga", "melee", "lefty", "quick", "paste", "given", "octet", "risen", "groan", "leaky", "grind", "carve", "loose", "sadly",
  "spilt", "apple", "slack", "honey", "final", "sheen", "eerie", "minty", "slick", "derby", "wharf", "spelt", "coach", "erupt", "singe", "price", "spawn", "fairy", "jiffy", "filmy", "stack", "chose", "sleep", "ardor", "nanny", "niece", "woozy", "handy", "grace", "ditto", "stank", "cream", "usual", "diode", "valor", "angle", "ninja", "muddy", "chase", "reply", "prone", "spoil", "heart", "shade", "diner", "arson", "onion", "sleet", "dowel", "couch", "palsy", "bowel", "smile", "evoke", "creek", "lance",
  "eagle", "idiot", "siren", "built", "embed", "award", "dross", "annul", "goody", "frown", "patio", "laden", "humid", "elite", "lymph", "edify", "might", "reset", "visit", "gusto", "purse", "vapor", "crock", "write", "sunny", "loath", "chaff", "slide", "queer", "venom", "stamp", "sorry", "still", "acorn", "aping", "pushy", "tamer", "hater", "mania", "awoke", "brawn", "swift", "exile", "birch", "lucky", "freer", "risky", "ghost", "plier", "lunar", "winch", "snare", "nurse", "house", "borax", "nicer",
  "lurch", "exalt", "about", "savvy", "toxin", "tunic", "pried", "inlay", "chump", "lanky", "cress", "eater", "elude", "cycle", "kitty", "boule", "moron", "tenet", "place", "lobby", "plush", "vigil", "index", "blink", "clung", "qualm", "croup", "clink", "juicy", "stage", "decay", "nerve", "flier", "shaft", "crook", "clean", "china", "ridge", "vowel", "gnome", "snuck", "icing", "spiny", "rigor", "snail", "flown", "rabid", "prose", "thank", "poppy", "budge", "fiber", "moldy", "dowdy", "kneel", "track",
  "caddy", "quell", "dumpy", "paler", "swore", "rebar", "scuba", "splat", "flyer", "horny", "mason", "doing", "ozone", "amply", "molar", "ovary", "beset", "queue", "cliff", "magic", "truce", "sport", "fritz", "edict", "twirl", "verse", "llama", "eaten", "range", "whisk", "hovel", "rehab", "macaw", "sigma", "spout", "verve", "sushi", "dying", "fetid", "brain", "buddy", "thump", "scion", "candy", "chord", "basin", "march", "crowd", "arbor", "gayly", "musky", "stain", "dally", "bless", "bravo", "stung",
  "title", "ruler", "kiosk", "blond", "ennui", "layer", "fluid", "tatty", "score", "cutie", "zebra", "barge", "matey", "bluer", "aider", "shook", "river", "privy", "betel", "frisk", "bongo", "begun", "azure", "weave", "genie", "sound", "glove", "braid", "scope", "wryly", "rover", "assay", "ocean", "bloom", "irate", "later", "woken", "silky", "wreck", "dwelt", "slate", "smack", "solid", "amaze", "hazel", "wrist", "jolly", "globe", "flint", "rouse", "civil", "vista", "relax", "cover", "alive", "beech",
  "jetty", "bliss", "vocal", "often", "dolly", "eight", "joker", "since", "event", "ensue", "shunt", "diver", "poser", "worst", "sweep", "alley", "creed", "anime", "leafy", "bosom", "dunce", "stare", "pudgy", "waive", "choir", "stood", "spoke", "outgo", "delay", "bilge", "ideal", "clasp", "seize", "hotly", "laugh", "sieve", "block", "meant", "grape", "noose", "hardy", "shied", "drawl", "daisy", "putty", "strut", "burnt", "tulip", "crick", "idyll", "vixen", "furor", "geeky", "cough", "naive", "shoal",
  "stork", "bathe", "aunty", "check", "prime", "brass", "outer", "furry", "razor", "elect", "evict", "imply", "demur", "quota", "haven", "cavil", "swear", "crump", "dough", "gavel", "wagon", "salon", "nudge", "harem", "pitch", "sworn", "pupil", "excel", "stony", "cabin", "unzip", "queen", "trout", "polyp", "earth", "storm", "until", "taper", "enter", "child", "adopt", "minor", "fatty", "husky", "brave", "filet", "slime", "glint", "tread", "steal", "regal", "guest", "every", "murky", "share", "spore",
  "hoist", "buxom", "inner", "otter", "dimly", "level", "sumac", "donut", "stilt", "arena", "sheet", "scrub", "fancy", "slimy", "pearl", "silly", "porch", "dingo", "sepia", "amble", "shady", "bread", "friar", "reign", "dairy", "quill", "cross", "brood", "tuber", "shear", "posit", "blank", "villa", "shank", "piggy", "freak", "which", "among", "fecal", "shell", "would", "algae", "large", "rabbi", "agony", "amuse", "bushy", "copse", "swoon", "knife", "pouch", "ascot", "plane", "crown", "urban", "snide",
  "relay", "abide", "viola", "rajah", "straw", "dilly", "crash", "amass", "third", "trick", "tutor", "woody", "blurb", "grief", "disco", "where", "sassy", "beach", "sauna", "comic", "clued", "creep", "caste", "graze", "snuff", "frock", "gonad", "drunk", "prong", "lurid", "steel", "halve", "buyer", "vinyl", "utile", "smell", "adage", "worry", "tasty", "local", "trade", "finch", "ashen", "modal", "gaunt", "clove", "enact", "adorn", "roast", "speck", "sheik", "missy", "grunt", "snoop", "party", "touch",
  "mafia", "emcee", "array", "south", "vapid", "jelly", "skulk", "angst", "tubal", "lower", "crest", "sweat", "cyber", "adore", "tardy", "swami", "notch", "groom", "roach", "hitch", "young", "align", "ready", "frond", "strap", "puree", "realm", "venue", "swarm", "offer", "seven", "dryer", "diary", "dryly", "drank", "acrid", "heady", "theta", "junto", "pixie", "quoth", "bonus", "shalt", "penne", "amend", "datum", "build", "piano", "shelf", "lodge", "suing", "rearm", "coral", "ramen", "worth", "psalm",
  "infer", "overt", "mayor", "ovoid", "glide", "usage", "poise", "randy", "chuck", "prank", "fishy", "tooth", "ether", "drove", "idler", "swath", "stint", "while", "begat", "apply", "slang", "tarot", "radar", "credo", "aware", "canon", "shift", "timer", "bylaw", "serum", "three", "steak", "iliac", "shirk", "blunt", "puppy", "penal", "joist", "bunny", "shape", "beget", "wheel", "adept", "stunt", "stole", "topaz", "chore", "fluke", "afoot", "bloat", "bully", "dense", "caper", "sneer", "boxer", "jumbo",
  "lunge", "space", "avail", "short", "slurp", "loyal", "flirt", "pizza", "conch", "tempo", "droop", "plate", "bible", "plunk", "afoul", "savoy", "steep", "agile", "stake", "dwell", "knave", "beard", "arose", "motif", "smash", "broil", "glare", "shove", "baggy", "mammy", "swamp", "along", "rugby", "wager", "quack", "squat", "snaky", "debit", "mange", "skate", "ninth", "joust", "tramp", "spurn", "medal", "micro", "rebel", "flank", "learn", "nadir", "maple", "comfy", "remit", "gruff", "ester", "least",
  "mogul", "fetch", "cause", "oaken", "aglow", "meaty", "gaffe", "shyly", "racer", "prowl", "thief", "stern", "poesy", "rocky", "tweet", "waist", "spire", "grope", "havoc", "patsy", "truly", "forty", "deity", "uncle", "swish", "giver", "preen", "bevel", "lemur", "draft", "slope", "annoy", "lingo", "bleak", "ditty", "curly", "cedar", "dirge", "grown", "horde", "drool", "shuck", "crypt", "cumin", "stock", "gravy", "locus", "wider", "breed", "quite", "chafe", "cache", "blimp", "deign", "fiend", "logic",
  "cheap", "elide", "rigid", "false", "renal", "pence", "rowdy", "shoot", "blaze", "envoy", "posse", "brief", "never", "abort", "mouse", "mucky", "sulky", "fiery", "media", "trunk", "yeast", "clear", "skunk", "scalp", "bitty", "cider", "koala", "duvet", "segue", "creme", "super", "grill", "after", "owner", "ember", "reach", "nobly", "empty", "speed", "gipsy", "recur", "smock", "dread", "merge", "burst", "kappa", "amity", "shaky", "hover", "carol", "snort", "synod", "faint", "haunt", "flour", "chair",
  "detox", "shrew", "tense", "plied", "quark", "burly", "novel", "waxen", "stoic", "jerky", "blitz", "beefy", "lyric", "hussy", "towel", "quilt", "below", "bingo", "wispy", "brash", "scone", "toast", "easel", "saucy", "value", "spice", "honor", "route", "sharp", "bawdy", "radii", "skull", "phony", "issue", "lager", "swell", "urine", "gassy", "trial", "flora", "upper", "latch", "wight", "brick", "retry", "holly", "decal", "grass", "shack", "dogma", "mover", "defer", "sober", "optic", "crier", "vying",
  "nomad", "flute", "hippo", "shark", "drier", "obese", "bugle", "tawny", "chalk", "feast", "ruddy", "pedal", "scarf", "cruel", "bleat", "tidal", "slush", "semen", "windy", "dusty", "sally", "igloo", "nerdy", "jewel", "shone", "whale", "hymen", "abuse", "fugue", "elbow", "crumb", "pansy", "welsh", "syrup", "terse", "suave", "gamut", "swung", "drake", "freed", "afire", "shirt", "grout", "oddly", "tithe", "plaid", "dummy", "broom", "blind", "torch", "enemy", "again", "tying", "pesky", "alter", "gazer",
  "noble", "ethos", "bride", "extol", "decor", "hobby", "beast", "idiom", "utter", "these", "sixth", "alarm", "erase", "elegy", "spunk", "piper", "scaly", "scold", "hefty", "chick", "sooty", "canal", "whiny", "slash", "quake", "joint", "swept", "prude", "heavy", "wield", "femme", "lasso", "maize", "shale", "screw", "spree", "smoky", "whiff", "scent", "glade", "spent", "prism", "stoke", "riper", "orbit", "cocoa", "guilt", "humus", "shush", "table", "smirk", "wrong", "noisy", "alert", "shiny", "elate",
  "resin", "whole", "hunch", "pixel", "polar", "hotel", "sword", "cleat", "mango", "rumba", "puffy", "filly", "billy", "leash", "clout", "dance", "ovate", "facet", "chili", "paint", "liner", "curio", "salty", "audio", "snake", "fable", "cloak", "navel", "spurt", "pesto", "balmy", "flash", "unwed", "early", "churn", "weedy", "stump", "lease", "witty", "wimpy", "spoof", "saner", "blend", "salsa", "thick", "warty", "manic", "blare", "squib", "spoon", "probe", "crepe", "knack", "force", "debut", "order",
  "haste", "teeth", "agent", "widen", "icily", "slice", "ingot", "clash", "juror", "blood", "abode", "throw", "unity", "pivot", "slept", "troop", "spare", "sewer", "parse", "morph", "cacti", "tacky", "spool", "demon", "moody", "annex", "begin", "fuzzy", "patch", "water", "lumpy", "admin", "omega", "limit", "tabby", "macho", "aisle", "skiff", "basis", "plank", "verge", "botch", "crawl", "lousy", "slain", "cubic", "raise", "wrack", "guide", "foist", "cameo", "under", "actor", "revue", "fraud", "harpy",
  "scoop", "climb", "refer", "olden", "clerk", "debar", "tally", "ethic", "cairn", "tulle", "ghoul", "hilly", "crude", "apart", "scale", "older", "plain", "sperm", "briny", "abbot", "rerun", "quest", "crisp", "bound", "befit", "drawn", "suite", "itchy", "cheer", "bagel", "guess", "broad", "axiom", "chard", "caput", "leant", "harsh", "curse", "proud", "swing", "opine", "taste", "lupus", "gumbo", "miner", "green", "chasm", "lipid", "topic", "armor", "brush", "crane", "mural", "abled", "habit", "bossy",
  "maker", "dusky", "dizzy", "lithe", "brook", "jazzy", "fifty", "sense", "giant", "surly", "legal", "fatal", "flunk", "began", "prune", "small", "slant", "scoff", "torus", "ninny", "covey", "viper", "taken", "moral", "vogue", "owing", "token", "entry", "booth", "voter", "chide", "elfin", "ebony", "neigh", "minim", "melon", "kneed", "decoy", "voila", "ankle", "arrow", "mushy", "tribe", "cease", "eager", "birth", "graph", "odder", "terra", "weird", "tried", "clack", "color", "rough", "weigh", "uncut",
  "ladle", "strip", "craft", "minus", "dicey", "titan", "lucid", "vicar", "dress", "ditch", "gypsy", "pasta", "taffy", "flame", "swoop", "aloof", "sight", "broke", "teary", "chart", "sixty", "wordy", "sheer", "leper", "nosey", "bulge", "savor", "clamp", "funky", "foamy", "toxic", "brand", "plumb", "dingy", "butte", "drill", "tripe", "bicep", "tenor", "krill", "worse", "drama", "hyena", "think", "ratio", "cobra", "basil", "scrum", "bused", "phone", "court", "camel", "proof", "heard", "angel", "petal",
  "pouty", "throb", "maybe", "fetal", "sprig", "spine", "shout", "cadet", "macro", "dodgy", "satyr", "rarer", "binge", "trend", "nutty", "leapt", "amiss", "split", "myrrh", "width", "sonar", "tower", "baron", "fever", "waver", "spark", "belie", "sloop", "expel", "smote", "baler", "above", "north", "wafer", "scant", "frill", "awash", "snack", "scowl", "frail", "drift", "limbo", "fence", "motel", "ounce", "wreak", "revel", "talon", "prior", "knelt", "cello", "flake", "debug", "anode", "crime", "salve",
  "scout", "imbue", "pinky", "stave", "vague", "chock", "fight", "video", "stone", "teach", "cleft", "frost", "prawn", "booty", "twist", "apnea", "stiff", "plaza", "ledge", "tweak", "board", "grant", "medic", "bacon", "cable", "brawl", "slunk", "raspy", "forum", "drone", "women", "mucus", "boast", "toddy", "coven", "tumor", "truer", "wrath", "stall", "steam", "axial", "purer", "daily", "trail", "niche", "mealy", "juice", "nylon", "plump", "merry", "flail", "papal", "wheat", "berry", "cower", "erect",
  "brute", "leggy", "snipe", "sinew", "skier", "penny", "jumpy", "rally", "umbra", "scary", "modem", "gross", "avian", "greed", "satin", "tonic", "parka", "sniff", "livid", "stark", "trump", "giddy", "reuse", "taboo", "avoid", "quote", "devil", "liken", "gloss", "gayer", "beret", "noise", "gland", "dealt", "sling", "rumor", "opera", "thigh", "tonga", "flare", "wound", "white", "bulky", "etude", "horse", "circa", "paddy", "inbox", "fizzy", "grain", "exert", "surge", "gleam", "belle", "salvo", "crush",
  "fruit", "sappy", "taker", "tract", "ovine", "spiky", "frank", "reedy", "filth", "spasm", "heave", "mambo", "right", "clank", "trust", "lumen", "borne", "spook", "sauce", "amber", "lathe", "carat", "corer", "dirty", "slyly", "affix", "alloy", "taint", "sheep", "kinky", "wooly", "mauve", "flung", "yacht", "fried", "quail", "brunt", "grimy", "curvy", "cagey", "rinse", "deuce", "state", "grasp", "milky", "bison", "graft", "sandy", "baste", "flask", "hedge", "girly", "swash", "boney", "coupe", "endow",
  "abhor", "welch", "blade", "tight", "geese", "miser", "mirth", "cloud", "cabal", "leech", "close", "tenth", "pecan", "droit", "grail", "clone", "guise", "ralph", "tango", "biddy", "smith", "mower", "payee", "serif", "drape", "fifth", "spank", "glaze", "allot", "truck", "kayak", "virus", "testy", "tepee", "fully", "zonal", "metro", "curry", "grand", "banjo", "axion", "bezel", "occur", "chain", "nasal", "gooey", "filer", "brace", "allay", "pubic", "raven", "plead", "gnash", "flaky", "munch", "dully",
  "eking", "thing", "slink", "hurry", "theft", "shorn", "pygmy", "ranch", "wring", "lemon", "shore", "mamma", "froze", "newer", "style", "moose", "antic", "drown", "vegan", "chess", "guppy", "union", "lever", "lorry", "image", "cabby", "druid", "exact", "truth", "dopey", "spear", "cried", "chime", "crony", "stunk", "timid", "batch", "gauge", "rotor", "crack", "curve", "latte", "witch", "bunch", "repel", "anvil", "soapy", "meter", "broth", "madly", "dried", "scene", "known", "magma", "roost", "woman",
  "thong", "punch", "pasty", "downy", "knead", "whirl", "rapid", "clang", "anger", "drive", "goofy", "email", "music", "stuff", "bleep", "rider", "mecca", "folio", "setup", "verso", "quash", "fauna", "gummy", "happy", "newly", "fussy", "relic", "guava", "ratty", "fudge", "femur", "chirp", "forte", "alibi", "whine", "petty", "golly", "plait", "fleck", "felon", "gourd", "brown", "thrum", "ficus", "stash", "decry", "wiser", "junta", "visor", "daunt", "scree", "impel", "await", "press", "whose", "turbo",
  "stoop", "speak", "mangy", "eying", "inlet", "crone", "pulse", "mossy", "staid", "hence", "pinch", "teddy", "sully", "snore", "ripen", "snowy", "attic", "going", "leach", "mouth", "hound", "clump", "tonal", "bigot", "peril", "piece", "blame", "haute", "spied", "undid", "intro", "basal", "shine", "gecko", "rodeo", "guard", "steer", "loamy", "scamp", "scram", "manly", "hello", "vaunt", "organ", "feral", "knock", "extra", "condo", "adapt", "willy", "polka", "rayon", "skirt", "faith", "torso", "match",
  "mercy", "tepid", "sleek", "riser", "twixt", "peace", "flush", "catty", "login", "eject", "roger", "rival", "untie", "refit", "aorta", "adult", "judge", "rower", "artsy", "rural", "shave"];
  /** @type {!Array} */
  var updatedSet = ["aahed", "aalii", "aargh", "aarti", "abaca", "abaci", "abacs", "abaft", "abaka", "abamp", "aband", "abash", "abask", "abaya", "abbas", "abbed", "abbes", "abcee", "abeam", "abear", "abele", "abers", "abets", "abies", "abler", "ables", "ablet", "ablow", "abmho", "abohm", "aboil", "aboma", "aboon", "abord", "abore", "abram", "abray", "abrim", "abrin", "abris", "absey", "absit", "abuna", "abune", "abuts", "abuzz", "abyes", "abysm", "acais", "acari", "accas", "accoy", "acerb", "acers",
  "aceta", "achar", "ached", "aches", "achoo", "acids", "acidy", "acing", "acini", "ackee", "acker", "acmes", "acmic", "acned", "acnes", "acock", "acold", "acred", "acres", "acros", "acted", "actin", "acton", "acyls", "adaws", "adays", "adbot", "addax", "added", "adder", "addio", "addle", "adeem", "adhan", "adieu", "adios", "adits", "adman", "admen", "admix", "adobo", "adown", "adoze", "adrad", "adred", "adsum", "aduki", "adunc", "adust", "advew", "adyta", "adzed", "adzes", "aecia", "aedes", "aegis",
  "aeons", "aerie", "aeros", "aesir", "afald", "afara", "afars", "afear", "aflaj", "afore", "afrit", "afros", "agama", "agami", "agars", "agast", "agave", "agaze", "agene", "agers", "agger", "aggie", "aggri", "aggro", "aggry", "aghas", "agila", "agios", "agism", "agist", "agita", "aglee", "aglet", "agley", "agloo", "aglus", "agmas", "agoge", "agone", "agons", "agood", "agria", "agrin", "agros", "agued", "agues", "aguna", "aguti", "aheap", "ahent", "ahigh", "ahind", "ahing", "ahint", "ahold", "ahull",
  "ahuru", "aidas", "aided", "aides", "aidoi", "aidos", "aiery", "aigas", "aight", "ailed", "aimed", "aimer", "ainee", "ainga", "aioli", "aired", "airer", "airns", "airth", "airts", "aitch", "aitus", "aiver", "aiyee", "aizle", "ajies", "ajiva", "ajuga", "ajwan", "akees", "akela", "akene", "aking", "akita", "akkas", "alaap", "alack", "alamo", "aland", "alane", "alang", "alans", "alant", "alapa", "alaps", "alary", "alate", "alays", "albas", "albee", "alcid", "alcos", "aldea", "alder", "aldol", "aleck",
  "alecs", "alefs", "aleft", "aleph", "alews", "aleye", "alfas", "algal", "algas", "algid", "algin", "algor", "algum", "alias", "alifs", "aline", "alist", "aliya", "alkie", "alkos", "alkyd", "alkyl", "allee", "allel", "allis", "allod", "allyl", "almah", "almas", "almeh", "almes", "almud", "almug", "alods", "aloed", "aloes", "aloha", "aloin", "aloos", "alowe", "altho", "altos", "alula", "alums", "alure", "alvar", "alway", "amahs", "amain", "amate", "amaut", "amban", "ambit", "ambos", "ambry", "ameba",
  "ameer", "amene", "amens", "ament", "amias", "amice", "amici", "amide", "amido", "amids", "amies", "amiga", "amigo", "amine", "amino", "amins", "amirs", "amlas", "amman", "ammon", "ammos", "amnia", "amnic", "amnio", "amoks", "amole", "amort", "amour", "amove", "amowt", "amped", "ampul", "amrit", "amuck", "amyls", "anana", "anata", "ancho", "ancle", "ancon", "andro", "anear", "anele", "anent", "angas", "anglo", "anigh", "anile", "anils", "anima", "animi", "anion", "anise", "anker", "ankhs", "ankus",
  "anlas", "annal", "annas", "annat", "anoas", "anole", "anomy", "ansae", "antae", "antar", "antas", "anted", "antes", "antis", "antra", "antre", "antsy", "anura", "anyon", "apace", "apage", "apaid", "apayd", "apays", "apeak", "apeek", "apers", "apert", "apery", "apgar", "aphis", "apian", "apiol", "apish", "apism", "apode", "apods", "apoop", "aport", "appal", "appay", "appel", "appro", "appui", "appuy", "apres", "apses", "apsis", "apsos", "apted", "apter", "aquae", "aquas", "araba", "araks", "arame",
  "arars", "arbas", "arced", "archi", "arcos", "arcus", "ardeb", "ardri", "aread", "areae", "areal", "arear", "areas", "areca", "aredd", "arede", "arefy", "areic", "arene", "arepa", "arere", "arete", "arets", "arett", "argal", "argan", "argil", "argle", "argol", "argon", "argot", "argus", "arhat", "arias", "ariel", "ariki", "arils", "ariot", "arish", "arked", "arled", "arles", "armed", "armer", "armet", "armil", "arnas", "arnut", "aroba", "aroha", "aroid", "arpas", "arpen", "arrah", "arras", "arret",
  "arris", "arroz", "arsed", "arses", "arsey", "arsis", "artal", "artel", "artic", "artis", "aruhe", "arums", "arval", "arvee", "arvos", "aryls", "asana", "ascon", "ascus", "asdic", "ashed", "ashes", "ashet", "asked", "asker", "askoi", "askos", "aspen", "asper", "aspic", "aspie", "aspis", "aspro", "assai", "assam", "asses", "assez", "assot", "aster", "astir", "astun", "asura", "asway", "aswim", "asyla", "ataps", "ataxy", "atigi", "atilt", "atimy", "atlas", "atman", "atmas", "atmos", "atocs", "atoke",
  "atoks", "atoms", "atomy", "atony", "atopy", "atria", "atrip", "attap", "attar", "atuas", "audad", "auger", "aught", "aulas", "aulic", "auloi", "aulos", "aumil", "aunes", "aunts", "aurae", "aural", "aurar", "auras", "aurei", "aures", "auric", "auris", "aurum", "autos", "auxin", "avale", "avant", "avast", "avels", "avens", "avers", "avgas", "avine", "avion", "avise", "aviso", "avize", "avows", "avyze", "awarn", "awato", "awave", "aways", "awdls", "aweel", "aweto", "awing", "awmry", "awned", "awner",
  "awols", "awork", "axels", "axile", "axils", "axing", "axite", "axled", "axles", "axman", "axmen", "axoid", "axone", "axons", "ayahs", "ayaya", "ayelp", "aygre", "ayins", "ayont", "ayres", "ayrie", "azans", "azide", "azido", "azine", "azlon", "azoic", "azole", "azons", "azote", "azoth", "azuki", "azurn", "azury", "azygy", "azyme", "azyms", "baaed", "baals", "babas", "babel", "babes", "babka", "baboo", "babul", "babus", "bacca", "bacco", "baccy", "bacha", "bachs", "backs", "baddy", "baels", "baffs",
  "baffy", "bafts", "baghs", "bagie", "bahts", "bahus", "bahut", "bails", "bairn", "baisa", "baith", "baits", "baiza", "baize", "bajan", "bajra", "bajri", "bajus", "baked", "baken", "bakes", "bakra", "balas", "balds", "baldy", "baled", "bales", "balks", "balky", "balls", "bally", "balms", "baloo", "balsa", "balti", "balun", "balus", "bambi", "banak", "banco", "bancs", "banda", "bandh", "bands", "bandy", "baned", "banes", "bangs", "bania", "banks", "banns", "bants", "bantu", "banty", "banya", "bapus",
  "barbe", "barbs", "barby", "barca", "barde", "bardo", "bards", "bardy", "bared", "barer", "bares", "barfi", "barfs", "baric", "barks", "barky", "barms", "barmy", "barns", "barny", "barps", "barra", "barre", "barro", "barry", "barye", "basan", "based", "basen", "baser", "bases", "basho", "basij", "basks", "bason", "basse", "bassi", "basso", "bassy", "basta", "basti", "basto", "basts", "bated", "bates", "baths", "batik", "batta", "batts", "battu", "bauds", "bauks", "baulk", "baurs", "bavin", "bawds",
  "bawks", "bawls", "bawns", "bawrs", "bawty", "bayed", "bayer", "bayes", "bayle", "bayts", "bazar", "bazoo", "beads", "beaks", "beaky", "beals", "beams", "beamy", "beano", "beans", "beany", "beare", "bears", "beath", "beats", "beaty", "beaus", "beaut", "beaux", "bebop", "becap", "becke", "becks", "bedad", "bedel", "bedes", "bedew", "bedim", "bedye", "beedi", "beefs", "beeps", "beers", "beery", "beets", "befog", "begad", "begar", "begem", "begot", "begum", "beige", "beigy", "beins", "bekah", "belah",
  "belar", "belay", "belee", "belga", "bells", "belon", "belts", "bemad", "bemas", "bemix", "bemud", "bends", "bendy", "benes", "benet", "benga", "benis", "benne", "benni", "benny", "bento", "bents", "benty", "bepat", "beray", "beres", "bergs", "berko", "berks", "berme", "berms", "berob", "beryl", "besat", "besaw", "besee", "beses", "besit", "besom", "besot", "besti", "bests", "betas", "beted", "betes", "beths", "betid", "beton", "betta", "betty", "bever", "bevor", "bevue", "bevvy", "bewet", "bewig",
  "bezes", "bezil", "bezzy", "bhais", "bhaji", "bhang", "bhats", "bhels", "bhoot", "bhuna", "bhuts", "biach", "biali", "bialy", "bibbs", "bibes", "biccy", "bices", "bided", "bider", "bides", "bidet", "bidis", "bidon", "bield", "biers", "biffo", "biffs", "biffy", "bifid", "bigae", "biggs", "biggy", "bigha", "bight", "bigly", "bigos", "bijou", "biked", "biker", "bikes", "bikie", "bilbo", "bilby", "biled", "biles", "bilgy", "bilks", "bills", "bimah", "bimas", "bimbo", "binal", "bindi", "binds", "biner",
  "bines", "bings", "bingy", "binit", "binks", "bints", "biogs", "biont", "biota", "biped", "bipod", "birds", "birks", "birle", "birls", "biros", "birrs", "birse", "birsy", "bises", "bisks", "bisom", "bitch", "biter", "bites", "bitos", "bitou", "bitsy", "bitte", "bitts", "bivia", "bivvy", "bizes", "bizzo", "bizzy", "blabs", "blads", "blady", "blaer", "blaes", "blaff", "blags", "blahs", "blain", "blams", "blart", "blase", "blash", "blate", "blats", "blatt", "blaud", "blawn", "blaws", "blays", "blear",
  "blebs", "blech", "blees", "blent", "blert", "blest", "blets", "bleys", "blimy", "bling", "blini", "blins", "bliny", "blips", "blist", "blite", "blits", "blive", "blobs", "blocs", "blogs", "blook", "bloop", "blore", "blots", "blows", "blowy", "blubs", "blude", "bluds", "bludy", "blued", "blues", "bluet", "bluey", "bluid", "blume", "blunk", "blurs", "blype", "boabs", "boaks", "boars", "boart", "boats", "bobac", "bobak", "bobas", "bobol", "bobos", "bocca", "bocce", "bocci", "boche", "bocks", "boded",
  "bodes", "bodge", "bodhi", "bodle", "boeps", "boets", "boeuf", "boffo", "boffs", "bogan", "bogey", "boggy", "bogie", "bogle", "bogue", "bogus", "bohea", "bohos", "boils", "boing", "boink", "boite", "boked", "bokeh", "bokes", "bokos", "bolar", "bolas", "bolds", "boles", "bolix", "bolls", "bolos", "bolts", "bolus", "bomas", "bombe", "bombo", "bombs", "bonce", "bonds", "boned", "boner", "bones", "bongs", "bonie", "bonks", "bonne", "bonny", "bonza", "bonze", "booai", "booay", "boobs", "boody", "booed",
  "boofy", "boogy", "boohs", "books", "booky", "bools", "booms", "boomy", "boong", "boons", "boord", "boors", "boose", "boots", "boppy", "borak", "boral", "boras", "borde", "bords", "bored", "boree", "borel", "borer", "bores", "borgo", "boric", "borks", "borms", "borna", "boron", "borts", "borty", "bortz", "bosie", "bosks", "bosky", "boson", "bosun", "botas", "botel", "botes", "bothy", "botte", "botts", "botty", "bouge", "bouks", "boult", "bouns", "bourd", "bourg", "bourn", "bouse", "bousy", "bouts",
  "bovid", "bowat", "bowed", "bower", "bowes", "bowet", "bowie", "bowls", "bowne", "bowrs", "bowse", "boxed", "boxen", "boxes", "boxla", "boxty", "boyar", "boyau", "boyed", "boyfs", "boygs", "boyla", "boyos", "boysy", "bozos", "braai", "brach", "brack", "bract", "brads", "braes", "brags", "brail", "braks", "braky", "brame", "brane", "brank", "brans", "brant", "brast", "brats", "brava", "bravi", "braws", "braxy", "brays", "braza", "braze", "bream", "brede", "breds", "breem", "breer", "brees", "breid",
  "breis", "breme", "brens", "brent", "brere", "brers", "breve", "brews", "breys", "brier", "bries", "brigs", "briki", "briks", "brill", "brims", "brins", "brios", "brise", "briss", "brith", "brits", "britt", "brize", "broch", "brock", "brods", "brogh", "brogs", "brome", "bromo", "bronc", "brond", "brool", "broos", "brose", "brosy", "brows", "brugh", "bruin", "bruit", "brule", "brume", "brung", "brusk", "brust", "bruts", "buats", "buaze", "bubal", "bubas", "bubba", "bubbe", "bubby", "bubus", "buchu",
  "bucko", "bucks", "bucku", "budas", "budis", "budos", "buffa", "buffe", "buffi", "buffo", "buffs", "buffy", "bufos", "bufty", "buhls", "buhrs", "buiks", "buist", "bukes", "bulbs", "bulgy", "bulks", "bulla", "bulls", "bulse", "bumbo", "bumfs", "bumph", "bumps", "bumpy", "bunas", "bunce", "bunco", "bunde", "bundh", "bunds", "bundt", "bundu", "bundy", "bungs", "bungy", "bunia", "bunje", "bunjy", "bunko", "bunks", "bunns", "bunts", "bunty", "bunya", "buoys", "buppy", "buran", "buras", "burbs", "burds",
  "buret", "burfi", "burgh", "burgs", "burin", "burka", "burke", "burks", "burls", "burns", "buroo", "burps", "burqa", "burro", "burrs", "burry", "bursa", "burse", "busby", "buses", "busks", "busky", "bussu", "busti", "busts", "busty", "buteo", "butes", "butle", "butoh", "butts", "butty", "butut", "butyl", "buzzy", "bwana", "bwazi", "byded", "bydes", "byked", "bykes", "byres", "byrls", "byssi", "bytes", "byway", "caaed", "cabas", "caber", "cabob", "caboc", "cabre", "cacas", "cacks", "cacky", "cadee",
  "cades", "cadge", "cadgy", "cadie", "cadis", "cadre", "caeca", "caese", "cafes", "caffs", "caged", "cager", "cages", "cagot", "cahow", "caids", "cains", "caird", "cajon", "cajun", "caked", "cakes", "cakey", "calfs", "calid", "calif", "calix", "calks", "calla", "calls", "calms", "calmy", "calos", "calpa", "calps", "calve", "calyx", "caman", "camas", "cames", "camis", "camos", "campi", "campo", "camps", "campy", "camus", "caned", "caneh", "caner", "canes", "cangs", "canid", "canna", "canns", "canso",
  "canst", "canto", "cants", "canty", "capas", "caped", "capes", "capex", "caphs", "capiz", "caple", "capon", "capos", "capot", "capri", "capul", "carap", "carbo", "carbs", "carby", "cardi", "cards", "cardy", "cared", "carer", "cares", "caret", "carex", "carks", "carle", "carls", "carns", "carny", "carob", "carom", "caron", "carpi", "carps", "carrs", "carse", "carta", "carte", "carts", "carvy", "casas", "casco", "cased", "cases", "casks", "casky", "casts", "casus", "cates", "cauda", "cauks", "cauld",
  "cauls", "caums", "caups", "cauri", "causa", "cavas", "caved", "cavel", "caver", "caves", "cavie", "cawed", "cawks", "caxon", "ceaze", "cebid", "cecal", "cecum", "ceded", "ceder", "cedes", "cedis", "ceiba", "ceili", "ceils", "celeb", "cella", "celli", "cells", "celom", "celts", "cense", "cento", "cents", "centu", "ceorl", "cepes", "cerci", "cered", "ceres", "cerge", "ceria", "ceric", "cerne", "ceroc", "ceros", "certs", "certy", "cesse", "cesta", "cesti", "cetes", "cetyl", "cezve", "chace", "chack",
  "chaco", "chado", "chads", "chaft", "chais", "chals", "chams", "chana", "chang", "chank", "chape", "chaps", "chapt", "chara", "chare", "chark", "charr", "chars", "chary", "chats", "chave", "chavs", "chawk", "chaws", "chaya", "chays", "cheep", "chefs", "cheka", "chela", "chelp", "chemo", "chems", "chere", "chert", "cheth", "chevy", "chews", "chewy", "chiao", "chias", "chibs", "chica", "chich", "chico", "chics", "chiel", "chiks", "chile", "chimb", "chimo", "chimp", "chine", "ching", "chink", "chino",
  "chins", "chips", "chirk", "chirl", "chirm", "chiro", "chirr", "chirt", "chiru", "chits", "chive", "chivs", "chivy", "chizz", "choco", "chocs", "chode", "chogs", "choil", "choko", "choky", "chola", "choli", "cholo", "chomp", "chons", "choof", "chook", "choom", "choon", "chops", "chota", "chott", "chout", "choux", "chowk", "chows", "chubs", "chufa", "chuff", "chugs", "chums", "churl", "churr", "chuse", "chuts", "chyle", "chyme", "chynd", "cibol", "cided", "cides", "ciels", "ciggy", "cilia", "cills",
  "cimar", "cimex", "cinct", "cines", "cinqs", "cions", "cippi", "circs", "cires", "cirls", "cirri", "cisco", "cissy", "cists", "cital", "cited", "citer", "cites", "cives", "civet", "civie", "civvy", "clach", "clade", "clads", "claes", "clags", "clame", "clams", "clans", "claps", "clapt", "claro", "clart", "clary", "clast", "clats", "claut", "clave", "clavi", "claws", "clays", "cleck", "cleek", "cleep", "clefs", "clegs", "cleik", "clems", "clepe", "clept", "cleve", "clews", "clied", "clies", "clift",
  "clime", "cline", "clint", "clipe", "clips", "clipt", "clits", "cloam", "clods", "cloff", "clogs", "cloke", "clomb", "clomp", "clonk", "clons", "cloop", "cloot", "clops", "clote", "clots", "clour", "clous", "clows", "cloye", "cloys", "cloze", "clubs", "clues", "cluey", "clunk", "clype", "cnida", "coact", "coady", "coala", "coals", "coaly", "coapt", "coarb", "coate", "coati", "coats", "cobbs", "cobby", "cobia", "coble", "cobza", "cocas", "cocci", "cocco", "cocks", "cocky", "cocos", "codas", "codec",
  "coded", "coden", "coder", "codes", "codex", "codon", "coeds", "coffs", "cogie", "cogon", "cogue", "cohab", "cohen", "cohoe", "cohog", "cohos", "coifs", "coign", "coils", "coins", "coirs", "coits", "coked", "cokes", "colas", "colby", "colds", "coled", "coles", "coley", "colic", "colin", "colls", "colly", "colog", "colts", "colza", "comae", "comal", "comas", "combe", "combi", "combo", "combs", "comby", "comer", "comes", "comix", "commo", "comms", "commy", "compo", "comps", "compt", "comte", "comus",
  "coned", "cones", "coney", "confs", "conga", "conge", "congo", "conia", "conin", "conks", "conky", "conne", "conns", "conte", "conto", "conus", "convo", "cooch", "cooed", "cooee", "cooer", "cooey", "coofs", "cooks", "cooky", "cools", "cooly", "coomb", "cooms", "coomy", "coons", "coops", "coopt", "coost", "coots", "cooze", "copal", "copay", "coped", "copen", "coper", "copes", "coppy", "copra", "copsy", "coqui", "coram", "corbe", "corby", "cords", "cored", "cores", "corey", "corgi", "coria", "corks",
  "corky", "corms", "corni", "corno", "corns", "cornu", "corps", "corse", "corso", "cosec", "cosed", "coses", "coset", "cosey", "cosie", "costa", "coste", "costs", "cotan", "coted", "cotes", "coths", "cotta", "cotts", "coude", "coups", "courb", "courd", "coure", "cours", "couta", "couth", "coved", "coves", "covin", "cowal", "cowan", "cowed", "cowks", "cowls", "cowps", "cowry", "coxae", "coxal", "coxed", "coxes", "coxib", "coyau", "coyed", "coyer", "coypu", "cozed", "cozen", "cozes", "cozey", "cozie",
  "craal", "crabs", "crags", "craic", "craig", "crake", "crame", "crams", "crans", "crape", "craps", "crapy", "crare", "craws", "crays", "creds", "creel", "crees", "crems", "crena", "creps", "crepy", "crewe", "crews", "crias", "cribs", "cries", "crims", "crine", "crios", "cripe", "crips", "crise", "crith", "crits", "croci", "crocs", "croft", "crogs", "cromb", "crome", "cronk", "crons", "crool", "croon", "crops", "crore", "crost", "crout", "crows", "croze", "cruck", "crudo", "cruds", "crudy", "crues",
  "cruet", "cruft", "crunk", "cruor", "crura", "cruse", "crusy", "cruve", "crwth", "cryer", "ctene", "cubby", "cubeb", "cubed", "cuber", "cubes", "cubit", "cuddy", "cuffo", "cuffs", "cuifs", "cuing", "cuish", "cuits", "cukes", "culch", "culet", "culex", "culls", "cully", "culms", "culpa", "culti", "cults", "culty", "cumec", "cundy", "cunei", "cunit", "cunts", "cupel", "cupid", "cuppa", "cuppy", "curat", "curbs", "curch", "curds", "curdy", "cured", "curer", "cures", "curet", "curfs", "curia", "curie",
  "curli", "curls", "curns", "curny", "currs", "cursi", "curst", "cusec", "cushy", "cusks", "cusps", "cuspy", "cusso", "cusum", "cutch", "cuter", "cutes", "cutey", "cutin", "cutis", "cutto", "cutty", "cutup", "cuvee", "cuzes", "cwtch", "cyano", "cyans", "cycad", "cycas", "cyclo", "cyder", "cylix", "cymae", "cymar", "cymas", "cymes", "cymol", "cysts", "cytes", "cyton", "czars", "daals", "dabba", "daces", "dacha", "dacks", "dadah", "dadas", "dados", "daffs", "daffy", "dagga", "daggy", "dagos", "dahls",
  "daiko", "daine", "daint", "daker", "daled", "dales", "dalis", "dalle", "dalts", "daman", "damar", "dames", "damme", "damns", "damps", "dampy", "dancy", "dangs", "danio", "danks", "danny", "dants", "daraf", "darbs", "darcy", "dared", "darer", "dares", "darga", "dargs", "daric", "daris", "darks", "darky", "darns", "darre", "darts", "darzi", "dashi", "dashy", "datal", "dated", "dater", "dates", "datos", "datto", "daube", "daubs", "dauby", "dauds", "dault", "daurs", "dauts", "daven", "davit", "dawah",
  "dawds", "dawed", "dawen", "dawks", "dawns", "dawts", "dayan", "daych", "daynt", "dazed", "dazer", "dazes", "deads", "deair", "deals", "deans", "deare", "dearn", "dears", "deary", "deash", "deave", "deaws", "deawy", "debag", "debby", "debel", "debes", "debts", "debud", "debur", "debus", "debye", "decad", "decaf", "decan", "decko", "decks", "decos", "dedal", "deeds", "deedy", "deely", "deems", "deens", "deeps", "deere", "deers", "deets", "deeve", "deevs", "defat", "deffo", "defis", "defog", "degas",
  "degum", "degus", "deice", "deids", "deify", "deils", "deism", "deist", "deked", "dekes", "dekko", "deled", "deles", "delfs", "delft", "delis", "dells", "delly", "delos", "delph", "delts", "deman", "demes", "demic", "demit", "demob", "demoi", "demos", "dempt", "denar", "denay", "dench", "denes", "denet", "denis", "dents", "deoxy", "derat", "deray", "dered", "deres", "derig", "derma", "derms", "derns", "derny", "deros", "derro", "derry", "derth", "dervs", "desex", "deshi", "desis", "desks", "desse",
  "devas", "devel", "devis", "devon", "devos", "devot", "dewan", "dewar", "dewax", "dewed", "dexes", "dexie", "dhaba", "dhaks", "dhals", "dhikr", "dhobi", "dhole", "dholl", "dhols", "dhoti", "dhows", "dhuti", "diact", "dials", "diane", "diazo", "dibbs", "diced", "dicer", "dices", "dicht", "dicks", "dicky", "dicot", "dicta", "dicts", "dicty", "diddy", "didie", "didos", "didst", "diebs", "diels", "diene", "diets", "diffs", "dight", "dikas", "diked", "diker", "dikes", "dikey", "dildo", "dilli", "dills",
  "dimbo", "dimer", "dimes", "dimps", "dinar", "dined", "dines", "dinge", "dings", "dinic", "dinks", "dinky", "dinna", "dinos", "dints", "diols", "diota", "dippy", "dipso", "diram", "direr", "dirke", "dirks", "dirls", "dirts", "disas", "disci", "discs", "dishy", "disks", "disme", "dital", "ditas", "dited", "dites", "ditsy", "ditts", "ditzy", "divan", "divas", "dived", "dives", "divis", "divna", "divos", "divot", "divvy", "diwan", "dixie", "dixit", "diyas", "dizen", "djinn", "djins", "doabs", "doats",
  "dobby", "dobes", "dobie", "dobla", "dobra", "dobro", "docht", "docks", "docos", "docus", "doddy", "dodos", "doeks", "doers", "doest", "doeth", "doffs", "dogan", "doges", "dogey", "doggo", "doggy", "dogie", "dohyo", "doilt", "doily", "doits", "dojos", "dolce", "dolci", "doled", "doles", "dolia", "dolls", "dolma", "dolor", "dolos", "dolts", "domal", "domed", "domes", "domic", "donah", "donas", "donee", "doner", "donga", "dongs", "donko", "donna", "donne", "donny", "donsy", "doobs", "dooce", "doody",
  "dooks", "doole", "dools", "dooly", "dooms", "doomy", "doona", "doorn", "doors", "doozy", "dopas", "doped", "doper", "dopes", "dorad", "dorba", "dorbs", "doree", "dores", "doric", "doris", "dorks", "dorky", "dorms", "dormy", "dorps", "dorrs", "dorsa", "dorse", "dorts", "dorty", "dosai", "dosas", "dosed", "doseh", "doser", "doses", "dosha", "dotal", "doted", "doter", "dotes", "dotty", "douar", "douce", "doucs", "douks", "doula", "douma", "doums", "doups", "doura", "douse", "douts", "doved", "doven",
  "dover", "doves", "dovie", "dowar", "dowds", "dowed", "dower", "dowie", "dowle", "dowls", "dowly", "downa", "downs", "dowps", "dowse", "dowts", "doxed", "doxes", "doxie", "doyen", "doyly", "dozed", "dozer", "dozes", "drabs", "drack", "draco", "draff", "drags", "drail", "drams", "drant", "draps", "drats", "drave", "draws", "drays", "drear", "dreck", "dreed", "dreer", "drees", "dregs", "dreks", "drent", "drere", "drest", "dreys", "dribs", "drice", "dries", "drily", "drips", "dript", "droid", "droil",
  "droke", "drole", "drome", "drony", "droob", "droog", "drook", "drops", "dropt", "drouk", "drows", "drubs", "drugs", "drums", "drupe", "druse", "drusy", "druxy", "dryad", "dryas", "dsobo", "dsomo", "duads", "duals", "duans", "duars", "dubbo", "ducal", "ducat", "duces", "ducks", "ducky", "ducts", "duddy", "duded", "dudes", "duels", "duets", "duett", "duffs", "dufus", "duing", "duits", "dukas", "duked", "dukes", "dukka", "dulce", "dules", "dulia", "dulls", "dulse", "dumas", "dumbo", "dumbs", "dumka",
  "dumky", "dumps", "dunam", "dunch", "dunes", "dungs", "dungy", "dunks", "dunno", "dunny", "dunsh", "dunts", "duomi", "duomo", "duped", "duper", "dupes", "duple", "duply", "duppy", "dural", "duras", "dured", "dures", "durgy", "durns", "duroc", "duros", "duroy", "durra", "durrs", "durry", "durst", "durum", "durzi", "dusks", "dusts", "duxes", "dwaal", "dwale", "dwalm", "dwams", "dwang", "dwaum", "dweeb", "dwile", "dwine", "dyads", "dyers", "dyked", "dykes", "dykey", "dykon", "dynel", "dynes", "dzhos",
  "eagre", "ealed", "eales", "eaned", "eards", "eared", "earls", "earns", "earnt", "earst", "eased", "easer", "eases", "easle", "easts", "eathe", "eaved", "eaves", "ebbed", "ebbet", "ebons", "ebook", "ecads", "eched", "eches", "echos", "ecrus", "edema", "edged", "edger", "edges", "edile", "edits", "educe", "educt", "eejit", "eensy", "eeven", "eevns", "effed", "egads", "egers", "egest", "eggar", "egged", "egger", "egmas", "ehing", "eider", "eidos", "eigne", "eiked", "eikon", "eilds", "eisel", "ejido",
  "ekkas", "elain", "eland", "elans", "elchi", "eldin", "elemi", "elfed", "eliad", "elint", "elmen", "eloge", "elogy", "eloin", "elops", "elpee", "elsin", "elute", "elvan", "elven", "elver", "elves", "emacs", "embar", "embay", "embog", "embow", "embox", "embus", "emeer", "emend", "emerg", "emery", "emeus", "emics", "emirs", "emits", "emmas", "emmer", "emmet", "emmew", "emmys", "emoji", "emong", "emote", "emove", "empts", "emule", "emure", "emyde", "emyds", "enarm", "enate", "ended", "ender", "endew",
  "endue", "enews", "enfix", "eniac", "enlit", "enmew", "ennog", "enoki", "enols", "enorm", "enows", "enrol", "ensew", "ensky", "entia", "enure", "enurn", "envoi", "enzym", "eorls", "eosin", "epact", "epees", "ephah", "ephas", "ephod", "ephor", "epics", "epode", "epopt", "epris", "eques", "equid", "erbia", "erevs", "ergon", "ergos", "ergot", "erhus", "erica", "erick", "erics", "ering", "erned", "ernes", "erose", "erred", "erses", "eruct", "erugo", "eruvs", "erven", "ervil", "escar", "escot", "esile",
  "eskar", "esker", "esnes", "esses", "estoc", "estop", "estro", "etage", "etape", "etats", "etens", "ethal", "ethne", "ethyl", "etics", "etnas", "ettin", "ettle", "etuis", "etwee", "etyma", "eughs", "euked", "eupad", "euros", "eusol", "evens", "evert", "evets", "evhoe", "evils", "evite", "evohe", "ewers", "ewest", "ewhow", "ewked", "exams", "exeat", "execs", "exeem", "exeme", "exfil", "exies", "exine", "exing", "exits", "exode", "exome", "exons", "expat", "expos", "exude", "exuls", "exurb", "eyass",
  "eyers", "eyots", "eyras", "eyres", "eyrie", "eyrir", "ezine", "fabby", "faced", "facer", "faces", "facia", "facta", "facts", "faddy", "faded", "fader", "fades", "fadge", "fados", "faena", "faery", "faffs", "faffy", "faggy", "fagin", "fagot", "faiks", "fails", "faine", "fains", "fairs", "faked", "faker", "fakes", "fakey", "fakie", "fakir", "falaj", "falls", "famed", "fames", "fanal", "fands", "fanes", "fanga", "fango", "fangs", "fanks", "fanon", "fanos", "fanum", "faqir", "farad", "farci", "farcy",
  "fards", "fared", "farer", "fares", "farle", "farls", "farms", "faros", "farro", "farse", "farts", "fasci", "fasti", "fasts", "fated", "fates", "fatly", "fatso", "fatwa", "faugh", "fauld", "fauns", "faurd", "fauts", "fauve", "favas", "favel", "faver", "faves", "favus", "fawns", "fawny", "faxed", "faxes", "fayed", "fayer", "fayne", "fayre", "fazed", "fazes", "feals", "feare", "fears", "feart", "fease", "feats", "feaze", "feces", "fecht", "fecit", "fecks", "fedex", "feebs", "feeds", "feels", "feens",
  "feers", "feese", "feeze", "fehme", "feint", "feist", "felch", "felid", "fells", "felly", "felts", "felty", "femal", "femes", "femmy", "fends", "fendy", "fenis", "fenks", "fenny", "fents", "feods", "feoff", "ferer", "feres", "feria", "ferly", "fermi", "ferms", "ferns", "ferny", "fesse", "festa", "fests", "festy", "fetas", "feted", "fetes", "fetor", "fetta", "fetts", "fetwa", "feuar", "feuds", "feued", "feyed", "feyer", "feyly", "fezes", "fezzy", "fiars", "fiats", "fibro", "fices", "fiche", "fichu",
  "ficin", "ficos", "fides", "fidge", "fidos", "fiefs", "fient", "fiere", "fiers", "fiest", "fifed", "fifer", "fifes", "fifis", "figgy", "figos", "fiked", "fikes", "filar", "filch", "filed", "files", "filii", "filks", "fille", "fillo", "fills", "filmi", "films", "filos", "filum", "finca", "finds", "fined", "fines", "finis", "finks", "finny", "finos", "fiord", "fiqhs", "fique", "fired", "firer", "fires", "firie", "firks", "firms", "firns", "firry", "firth", "fiscs", "fisks", "fists", "fisty", "fitch",
  "fitly", "fitna", "fitte", "fitts", "fiver", "fives", "fixed", "fixes", "fixit", "fjeld", "flabs", "flaff", "flags", "flaks", "flamm", "flams", "flamy", "flane", "flans", "flaps", "flary", "flats", "flava", "flawn", "flaws", "flawy", "flaxy", "flays", "fleam", "fleas", "fleek", "fleer", "flees", "flegs", "fleme", "fleur", "flews", "flexi", "flexo", "fleys", "flics", "flied", "flies", "flimp", "flims", "flips", "flirs", "flisk", "flite", "flits", "flitt", "flobs", "flocs", "floes", "flogs", "flong",
  "flops", "flors", "flory", "flosh", "flota", "flote", "flows", "flubs", "flued", "flues", "fluey", "fluky", "flump", "fluor", "flurr", "fluty", "fluyt", "flyby", "flype", "flyte", "foals", "foams", "foehn", "fogey", "fogie", "fogle", "fogou", "fohns", "foids", "foils", "foins", "folds", "foley", "folia", "folic", "folie", "folks", "folky", "fomes", "fonda", "fonds", "fondu", "fones", "fonly", "fonts", "foods", "foody", "fools", "foots", "footy", "foram", "forbs", "forby", "fordo", "fords", "forel",
  "fores", "forex", "forks", "forky", "forme", "forms", "forts", "forza", "forze", "fossa", "fosse", "fouat", "fouds", "fouer", "fouet", "foule", "fouls", "fount", "fours", "fouth", "fovea", "fowls", "fowth", "foxed", "foxes", "foxie", "foyle", "foyne", "frabs", "frack", "fract", "frags", "fraim", "franc", "frape", "fraps", "frass", "frate", "frati", "frats", "fraus", "frays", "frees", "freet", "freit", "fremd", "frena", "freon", "frere", "frets", "fribs", "frier", "fries", "frigs", "frise", "frist",
  "frith", "frits", "fritt", "frize", "frizz", "froes", "frogs", "frons", "frore", "frorn", "frory", "frosh", "frows", "frowy", "frugs", "frump", "frush", "frust", "fryer", "fubar", "fubby", "fubsy", "fucks", "fucus", "fuddy", "fudgy", "fuels", "fuero", "fuffs", "fuffy", "fugal", "fuggy", "fugie", "fugio", "fugle", "fugly", "fugus", "fujis", "fulls", "fumed", "fumer", "fumes", "fumet", "fundi", "funds", "fundy", "fungo", "fungs", "funks", "fural", "furan", "furca", "furls", "furol", "furrs", "furth",
  "furze", "furzy", "fused", "fusee", "fusel", "fuses", "fusil", "fusks", "fusts", "fusty", "futon", "fuzed", "fuzee", "fuzes", "fuzil", "fyces", "fyked", "fykes", "fyles", "fyrds", "fytte", "gabba", "gabby", "gable", "gaddi", "gades", "gadge", "gadid", "gadis", "gadje", "gadjo", "gadso", "gaffs", "gaged", "gager", "gages", "gaids", "gains", "gairs", "gaita", "gaits", "gaitt", "gajos", "galah", "galas", "galax", "galea", "galed", "gales", "galls", "gally", "galop", "galut", "galvo", "gamas", "gamay",
  "gamba", "gambe", "gambo", "gambs", "gamed", "games", "gamey", "gamic", "gamin", "gamme", "gammy", "gamps", "ganch", "gandy", "ganef", "ganev", "gangs", "ganja", "ganof", "gants", "gaols", "gaped", "gaper", "gapes", "gapos", "gappy", "garbe", "garbo", "garbs", "garda", "gares", "garis", "garms", "garni", "garre", "garth", "garum", "gases", "gasps", "gaspy", "gasts", "gatch", "gated", "gater", "gates", "gaths", "gator", "gauch", "gaucy", "gauds", "gauje", "gault", "gaums", "gaumy", "gaups", "gaurs",
  "gauss", "gauzy", "gavot", "gawcy", "gawds", "gawks", "gawps", "gawsy", "gayal", "gazal", "gazar", "gazed", "gazes", "gazon", "gazoo", "geals", "geans", "geare", "gears", "geats", "gebur", "gecks", "geeks", "geeps", "geest", "geist", "geits", "gelds", "gelee", "gelid", "gelly", "gelts", "gemel", "gemma", "gemmy", "gemot", "genal", "genas", "genes", "genet", "genic", "genii", "genip", "genny", "genoa", "genom", "genro", "gents", "genty", "genua", "genus", "geode", "geoid", "gerah", "gerbe", "geres",
  "gerle", "germs", "germy", "gerne", "gesse", "gesso", "geste", "gests", "getas", "getup", "geums", "geyan", "geyer", "ghast", "ghats", "ghaut", "ghazi", "ghees", "ghest", "ghyll", "gibed", "gibel", "giber", "gibes", "gibli", "gibus", "gifts", "gigas", "gighe", "gigot", "gigue", "gilas", "gilds", "gilet", "gills", "gilly", "gilpy", "gilts", "gimel", "gimme", "gimps", "gimpy", "ginch", "ginge", "gings", "ginks", "ginny", "ginzo", "gipon", "gippo", "gippy", "girds", "girls", "girns", "giron", "giros",
  "girrs", "girsh", "girts", "gismo", "gisms", "gists", "gitch", "gites", "giust", "gived", "gives", "gizmo", "glace", "glads", "glady", "glaik", "glair", "glams", "glans", "glary", "glaum", "glaur", "glazy", "gleba", "glebe", "gleby", "glede", "gleds", "gleed", "gleek", "glees", "gleet", "gleis", "glens", "glent", "gleys", "glial", "glias", "glibs", "gliff", "glift", "glike", "glime", "glims", "glisk", "glits", "glitz", "gloam", "globi", "globs", "globy", "glode", "glogg", "gloms", "gloop", "glops",
  "glost", "glout", "glows", "gloze", "glued", "gluer", "glues", "gluey", "glugs", "glume", "glums", "gluon", "glute", "gluts", "gnarl", "gnarr", "gnars", "gnats", "gnawn", "gnaws", "gnows", "goads", "goafs", "goals", "goary", "goats", "goaty", "goban", "gobar", "gobbi", "gobbo", "gobby", "gobis", "gobos", "godet", "godso", "goels", "goers", "goest", "goeth", "goety", "gofer", "goffs", "gogga", "gogos", "goier", "gojis", "golds", "goldy", "goles", "golfs", "golpe", "golps", "gombo", "gomer", "gompa",
  "gonch", "gonef", "gongs", "gonia", "gonif", "gonks", "gonna", "gonof", "gonys", "gonzo", "gooby", "goods", "goofs", "googs", "gooks", "gooky", "goold", "gools", "gooly", "goons", "goony", "goops", "goopy", "goors", "goory", "goosy", "gopak", "gopik", "goral", "goras", "gored", "gores", "goris", "gorms", "gormy", "gorps", "gorse", "gorsy", "gosht", "gosse", "gotch", "goths", "gothy", "gotta", "gouch", "gouks", "goura", "gouts", "gouty", "gowan", "gowds", "gowfs", "gowks", "gowls", "gowns", "goxes",
  "goyim", "goyle", "graal", "grabs", "grads", "graff", "graip", "grama", "grame", "gramp", "grams", "grana", "grans", "grapy", "gravs", "grays", "grebe", "grebo", "grece", "greek", "grees", "grege", "grego", "grein", "grens", "grese", "greve", "grews", "greys", "grice", "gride", "grids", "griff", "grift", "grigs", "grike", "grins", "griot", "grips", "gript", "gripy", "grise", "grist", "grisy", "grith", "grits", "grize", "groat", "grody", "grogs", "groks", "groma", "grone", "groof", "grosz", "grots",
  "grouf", "grovy", "grows", "grrls", "grrrl", "grubs", "grued", "grues", "grufe", "grume", "grump", "grund", "gryce", "gryde", "gryke", "grype", "grypt", "guaco", "guana", "guano", "guans", "guars", "gucks", "gucky", "gudes", "guffs", "gugas", "guids", "guimp", "guiro", "gulag", "gular", "gulas", "gules", "gulet", "gulfs", "gulfy", "gulls", "gulph", "gulps", "gulpy", "gumma", "gummi", "gumps", "gundy", "gunge", "gungy", "gunks", "gunky", "gunny", "guqin", "gurdy", "gurge", "gurls", "gurly", "gurns",
  "gurry", "gursh", "gurus", "gushy", "gusla", "gusle", "gusli", "gussy", "gusts", "gutsy", "gutta", "gutty", "guyed", "guyle", "guyot", "guyse", "gwine", "gyals", "gyans", "gybed", "gybes", "gyeld", "gymps", "gynae", "gynie", "gynny", "gynos", "gyoza", "gypos", "gyppo", "gyppy", "gyral", "gyred", "gyres", "gyron", "gyros", "gyrus", "gytes", "gyved", "gyves", "haafs", "haars", "hable", "habus", "hacek", "hacks", "hadal", "haded", "hades", "hadji", "hadst", "haems", "haets", "haffs", "hafiz", "hafts",
  "haggs", "hahas", "haick", "haika", "haiks", "haiku", "hails", "haily", "hains", "haint", "hairs", "haith", "hajes", "hajis", "hajji", "hakam", "hakas", "hakea", "hakes", "hakim", "hakus", "halal", "haled", "haler", "hales", "halfa", "halfs", "halid", "hallo", "halls", "halma", "halms", "halon", "halos", "halse", "halts", "halva", "halwa", "hamal", "hamba", "hamed", "hames", "hammy", "hamza", "hanap", "hance", "hanch", "hands", "hangi", "hangs", "hanks", "hanky", "hansa", "hanse", "hants", "haole",
  "haoma", "hapax", "haply", "happi", "hapus", "haram", "hards", "hared", "hares", "harim", "harks", "harls", "harms", "harns", "haros", "harps", "harts", "hashy", "hasks", "hasps", "hasta", "hated", "hates", "hatha", "hauds", "haufs", "haugh", "hauld", "haulm", "hauls", "hault", "hauns", "hause", "haver", "haves", "hawed", "hawks", "hawms", "hawse", "hayed", "hayer", "hayey", "hayle", "hazan", "hazed", "hazer", "hazes", "heads", "heald", "heals", "heame", "heaps", "heapy", "heare", "hears", "heast",
  "heats", "heben", "hebes", "hecht", "hecks", "heder", "hedgy", "heeds", "heedy", "heels", "heeze", "hefte", "hefts", "heids", "heigh", "heils", "heirs", "hejab", "hejra", "heled", "heles", "helio", "hells", "helms", "helos", "helot", "helps", "helve", "hemal", "hemes", "hemic", "hemin", "hemps", "hempy", "hench", "hends", "henge", "henna", "henny", "henry", "hents", "hepar", "herbs", "herby", "herds", "heres", "herls", "herma", "herms", "herns", "heros", "herry", "herse", "hertz", "herye", "hesps",
  "hests", "hetes", "heths", "heuch", "heugh", "hevea", "hewed", "hewer", "hewgh", "hexad", "hexed", "hexer", "hexes", "hexyl", "heyed", "hiant", "hicks", "hided", "hider", "hides", "hiems", "highs", "hight", "hijab", "hijra", "hiked", "hiker", "hikes", "hikoi", "hilar", "hilch", "hillo", "hills", "hilts", "hilum", "hilus", "himbo", "hinau", "hinds", "hings", "hinky", "hinny", "hints", "hiois", "hiply", "hired", "hiree", "hirer", "hires", "hissy", "hists", "hithe", "hived", "hiver", "hives", "hizen",
  "hoaed", "hoagy", "hoars", "hoary", "hoast", "hobos", "hocks", "hocus", "hodad", "hodja", "hoers", "hogan", "hogen", "hoggs", "hoghs", "hohed", "hoick", "hoied", "hoiks", "hoing", "hoise", "hokas", "hoked", "hokes", "hokey", "hokis", "hokku", "hokum", "holds", "holed", "holes", "holey", "holks", "holla", "hollo", "holme", "holms", "holon", "holos", "holts", "homas", "homed", "homes", "homey", "homie", "homme", "homos", "honan", "honda", "honds", "honed", "honer", "hones", "hongi", "hongs", "honks",
  "honky", "hooch", "hoods", "hoody", "hooey", "hoofs", "hooka", "hooks", "hooky", "hooly", "hoons", "hoops", "hoord", "hoors", "hoosh", "hoots", "hooty", "hoove", "hopak", "hoped", "hoper", "hopes", "hoppy", "horah", "horal", "horas", "horis", "horks", "horme", "horns", "horst", "horsy", "hosed", "hosel", "hosen", "hoser", "hoses", "hosey", "hosta", "hosts", "hotch", "hoten", "hotty", "houff", "houfs", "hough", "houri", "hours", "houts", "hovea", "hoved", "hoven", "hoves", "howbe", "howes", "howff",
  "howfs", "howks", "howls", "howre", "howso", "hoxed", "hoxes", "hoyas", "hoyed", "hoyle", "hubby", "hucks", "hudna", "hudud", "huers", "huffs", "huffy", "huger", "huggy", "huhus", "huias", "hulas", "hules", "hulks", "hulky", "hullo", "hulls", "hully", "humas", "humfs", "humic", "humps", "humpy", "hunks", "hunts", "hurds", "hurls", "hurly", "hurra", "hurst", "hurts", "hushy", "husks", "husos", "hutia", "huzza", "huzzy", "hwyls", "hydra", "hyens", "hygge", "hying", "hykes", "hylas", "hyleg", "hyles",
  "hylic", "hymns", "hynde", "hyoid", "hyped", "hypes", "hypha", "hyphy", "hypos", "hyrax", "hyson", "hythe", "iambi", "iambs", "ibrik", "icers", "iched", "iches", "ichor", "icier", "icker", "ickle", "icons", "ictal", "ictic", "ictus", "idant", "ideas", "idees", "ident", "idled", "idles", "idola", "idols", "idyls", "iftar", "igapo", "igged", "iglus", "ihram", "ikans", "ikats", "ikons", "ileac", "ileal", "ileum", "ileus", "iliad", "ilial", "ilium", "iller", "illth", "imago", "imams", "imari", "imaum",
  "imbar", "imbed", "imide", "imido", "imids", "imine", "imino", "immew", "immit", "immix", "imped", "impis", "impot", "impro", "imshi", "imshy", "inapt", "inarm", "inbye", "incel", "incle", "incog", "incus", "incut", "indew", "india", "indie", "indol", "indow", "indri", "indue", "inerm", "infix", "infos", "infra", "ingan", "ingle", "inion", "inked", "inker", "inkle", "inned", "innit", "inorb", "inrun", "inset", "inspo", "intel", "intil", "intis", "intra", "inula", "inure", "inurn", "inust", "invar",
  "inwit", "iodic", "iodid", "iodin", "iotas", "ippon", "irade", "irids", "iring", "irked", "iroko", "irone", "irons", "isbas", "ishes", "isled", "isles", "isnae", "issei", "istle", "items", "ither", "ivied", "ivies", "ixias", "ixnay", "ixora", "ixtle", "izard", "izars", "izzat", "jaaps", "jabot", "jacal", "jacks", "jacky", "jaded", "jades", "jafas", "jaffa", "jagas", "jager", "jaggs", "jaggy", "jagir", "jagra", "jails", "jaker", "jakes", "jakey", "jalap", "jalop", "jambe", "jambo", "jambs", "jambu",
  "james", "jammy", "jamon", "janes", "janns", "janny", "janty", "japan", "japed", "japer", "japes", "jarks", "jarls", "jarps", "jarta", "jarul", "jasey", "jaspe", "jasps", "jatos", "jauks", "jaups", "javas", "javel", "jawan", "jawed", "jaxie", "jeans", "jeats", "jebel", "jedis", "jeels", "jeely", "jeeps", "jeers", "jeeze", "jefes", "jeffs", "jehad", "jehus", "jelab", "jello", "jells", "jembe", "jemmy", "jenny", "jeons", "jerid", "jerks", "jerry", "jesse", "jests", "jesus", "jetes", "jeton", "jeune",
  "jewed", "jewie", "jhala", "jiaos", "jibba", "jibbs", "jibed", "jiber", "jibes", "jiffs", "jiggy", "jigot", "jihad", "jills", "jilts", "jimmy", "jimpy", "jingo", "jinks", "jinne", "jinni", "jinns", "jirds", "jirga", "jirre", "jisms", "jived", "jiver", "jives", "jivey", "jnana", "jobed", "jobes", "jocko", "jocks", "jocky", "jocos", "jodel", "joeys", "johns", "joins", "joked", "jokes", "jokey", "jokol", "joled", "joles", "jolls", "jolts", "jolty", "jomon", "jomos", "jones", "jongs", "jonty", "jooks",
  "joram", "jorum", "jotas", "jotty", "jotun", "joual", "jougs", "jouks", "joule", "jours", "jowar", "jowed", "jowls", "jowly", "joyed", "jubas", "jubes", "jucos", "judas", "judgy", "judos", "jugal", "jugum", "jujus", "juked", "jukes", "jukus", "julep", "jumar", "jumby", "jumps", "junco", "junks", "junky", "jupes", "jupon", "jural", "jurat", "jurel", "jures", "justs", "jutes", "jutty", "juves", "juvie", "kaama", "kabab", "kabar", "kabob", "kacha", "kacks", "kadai", "kades", "kadis", "kafir", "kagos",
  "kagus", "kahal", "kaiak", "kaids", "kaies", "kaifs", "kaika", "kaiks", "kails", "kaims", "kaing", "kains", "kakas", "kakis", "kalam", "kales", "kalif", "kalis", "kalpa", "kamas", "kames", "kamik", "kamis", "kamme", "kanae", "kanas", "kandy", "kaneh", "kanes", "kanga", "kangs", "kanji", "kants", "kanzu", "kaons", "kapas", "kaphs", "kapok", "kapow", "kapus", "kaput", "karas", "karat", "karks", "karns", "karoo", "karos", "karri", "karst", "karsy", "karts", "karzy", "kasha", "kasme", "katal", "katas",
  "katis", "katti", "kaugh", "kauri", "kauru", "kaury", "kaval", "kavas", "kawas", "kawau", "kawed", "kayle", "kayos", "kazis", "kazoo", "kbars", "kebar", "kebob", "kecks", "kedge", "kedgy", "keech", "keefs", "keeks", "keels", "keema", "keeno", "keens", "keeps", "keets", "keeve", "kefir", "kehua", "keirs", "kelep", "kelim", "kells", "kelly", "kelps", "kelpy", "kelts", "kelty", "kembo", "kembs", "kemps", "kempt", "kempy", "kenaf", "kench", "kendo", "kenos", "kente", "kents", "kepis", "kerbs", "kerel",
  "kerfs", "kerky", "kerma", "kerne", "kerns", "keros", "kerry", "kerve", "kesar", "kests", "ketas", "ketch", "ketes", "ketol", "kevel", "kevil", "kexes", "keyed", "keyer", "khadi", "khafs", "khans", "khaph", "khats", "khaya", "khazi", "kheda", "kheth", "khets", "khoja", "khors", "khoum", "khuds", "kiaat", "kiack", "kiang", "kibbe", "kibbi", "kibei", "kibes", "kibla", "kicks", "kicky", "kiddo", "kiddy", "kidel", "kidge", "kiefs", "kiers", "kieve", "kievs", "kight", "kikes", "kikoi", "kiley", "kilim",
  "kills", "kilns", "kilos", "kilps", "kilts", "kilty", "kimbo", "kinas", "kinda", "kinds", "kindy", "kines", "kings", "kinin", "kinks", "kinos", "kiore", "kipes", "kippa", "kipps", "kirby", "kirks", "kirns", "kirri", "kisan", "kissy", "kists", "kited", "kiter", "kites", "kithe", "kiths", "kitul", "kivas", "kiwis", "klang", "klaps", "klett", "klick", "klieg", "kliks", "klong", "kloof", "kluge", "klutz", "knags", "knaps", "knarl", "knars", "knaur", "knawe", "knees", "knell", "knish", "knits", "knive",
  "knobs", "knops", "knosp", "knots", "knout", "knowe", "knows", "knubs", "knurl", "knurr", "knurs", "knuts", "koans", "koaps", "koban", "kobos", "koels", "koffs", "kofta", "kogal", "kohas", "kohen", "kohls", "koine", "kojis", "kokam", "kokas", "koker", "kokra", "kokum", "kolas", "kolos", "kombu", "konbu", "kondo", "konks", "kooks", "kooky", "koori", "kopek", "kophs", "kopje", "koppa", "korai", "koras", "korat", "kores", "korma", "koros", "korun", "korus", "koses", "kotch", "kotos", "kotow", "koura",
  "kraal", "krabs", "kraft", "krais", "krait", "krang", "krans", "kranz", "kraut", "krays", "kreep", "kreng", "krewe", "krona", "krone", "kroon", "krubi", "krunk", "ksars", "kubie", "kudos", "kudus", "kudzu", "kufis", "kugel", "kuias", "kukri", "kukus", "kulak", "kulan", "kulas", "kulfi", "kumis", "kumys", "kuris", "kurre", "kurta", "kurus", "kusso", "kutas", "kutch", "kutis", "kutus", "kuzus", "kvass", "kvell", "kwela", "kyack", "kyaks", "kyang", "kyars", "kyats", "kybos", "kydst", "kyles", "kylie",
  "kylin", "kylix", "kyloe", "kynde", "kynds", "kypes", "kyrie", "kytes", "kythe", "laari", "labda", "labia", "labis", "labra", "laced", "lacer", "laces", "lacet", "lacey", "lacks", "laddy", "laded", "lader", "lades", "laers", "laevo", "lagan", "lahal", "lahar", "laich", "laics", "laids", "laigh", "laika", "laiks", "laird", "lairs", "lairy", "laith", "laity", "laked", "laker", "lakes", "lakhs", "lakin", "laksa", "laldy", "lalls", "lamas", "lambs", "lamby", "lamed", "lamer", "lames", "lamia", "lammy",
  "lamps", "lanai", "lanas", "lanch", "lande", "lands", "lanes", "lanks", "lants", "lapin", "lapis", "lapje", "larch", "lards", "lardy", "laree", "lares", "largo", "laris", "larks", "larky", "larns", "larnt", "larum", "lased", "laser", "lases", "lassi", "lassu", "lassy", "lasts", "latah", "lated", "laten", "latex", "lathi", "laths", "lathy", "latke", "latus", "lauan", "lauch", "lauds", "laufs", "laund", "laura", "laval", "lavas", "laved", "laver", "laves", "lavra", "lavvy", "lawed", "lawer", "lawin",
  "lawks", "lawns", "lawny", "laxed", "laxer", "laxes", "laxly", "layed", "layin", "layup", "lazar", "lazed", "lazes", "lazos", "lazzi", "lazzo", "leads", "leady", "leafs", "leaks", "leams", "leans", "leany", "leaps", "leare", "lears", "leary", "leats", "leavy", "leaze", "leben", "leccy", "ledes", "ledgy", "ledum", "leear", "leeks", "leeps", "leers", "leese", "leets", "leeze", "lefte", "lefts", "leger", "leges", "legge", "leggo", "legit", "lehrs", "lehua", "leirs", "leish", "leman", "lemed", "lemel",
  "lemes", "lemma", "lemme", "lends", "lenes", "lengs", "lenis", "lenos", "lense", "lenti", "lento", "leone", "lepid", "lepra", "lepta", "lered", "leres", "lerps", "lesbo", "leses", "lests", "letch", "lethe", "letup", "leuch", "leuco", "leuds", "leugh", "levas", "levee", "leves", "levin", "levis", "lewis", "lexes", "lexis", "lezes", "lezza", "lezzy", "liana", "liane", "liang", "liard", "liars", "liart", "liber", "libra", "libri", "lichi", "licht", "licit", "licks", "lidar", "lidos", "liefs", "liens",
  "liers", "lieus", "lieve", "lifer", "lifes", "lifts", "ligan", "liger", "ligge", "ligne", "liked", "liker", "likes", "likin", "lills", "lilos", "lilts", "liman", "limas", "limax", "limba", "limbi", "limbs", "limby", "limed", "limen", "limes", "limey", "limma", "limns", "limos", "limpa", "limps", "linac", "linch", "linds", "lindy", "lined", "lines", "liney", "linga", "lings", "lingy", "linin", "links", "linky", "linns", "linny", "linos", "lints", "linty", "linum", "linux", "lions", "lipas", "lipes",
  "lipin", "lipos", "lippy", "liras", "lirks", "lirot", "lisks", "lisle", "lisps", "lists", "litai", "litas", "lited", "liter", "lites", "litho", "liths", "litre", "lived", "liven", "lives", "livor", "livre", "llano", "loach", "loads", "loafs", "loams", "loans", "loast", "loave", "lobar", "lobed", "lobes", "lobos", "lobus", "loche", "lochs", "locie", "locis", "locks", "locos", "locum", "loden", "lodes", "loess", "lofts", "logan", "loges", "loggy", "logia", "logie", "logoi", "logon", "logos", "lohan",
  "loids", "loins", "loipe", "loirs", "lokes", "lolls", "lolly", "lolog", "lomas", "lomed", "lomes", "loner", "longa", "longe", "longs", "looby", "looed", "looey", "loofa", "loofs", "looie", "looks", "looky", "looms", "loons", "loony", "loops", "loord", "loots", "loped", "loper", "lopes", "loppy", "loral", "loran", "lords", "lordy", "lorel", "lores", "loric", "loris", "losed", "losel", "losen", "loses", "lossy", "lotah", "lotas", "lotes", "lotic", "lotos", "lotsa", "lotta", "lotte", "lotto", "lotus",
  "loued", "lough", "louie", "louis", "louma", "lound", "louns", "loupe", "loups", "loure", "lours", "loury", "louts", "lovat", "loved", "loves", "lovey", "lovie", "lowan", "lowed", "lowes", "lownd", "lowne", "lowns", "lowps", "lowry", "lowse", "lowts", "loxed", "loxes", "lozen", "luach", "luaus", "lubed", "lubes", "lubra", "luces", "lucks", "lucre", "ludes", "ludic", "ludos", "luffa", "luffs", "luged", "luger", "luges", "lulls", "lulus", "lumas", "lumbi", "lumme", "lummy", "lumps", "lunas", "lunes",
  "lunet", "lungi", "lungs", "lunks", "lunts", "lupin", "lured", "lurer", "lures", "lurex", "lurgi", "lurgy", "lurks", "lurry", "lurve", "luser", "lushy", "lusks", "lusts", "lusus", "lutea", "luted", "luter", "lutes", "luvvy", "luxed", "luxer", "luxes", "lweis", "lyams", "lyard", "lyart", "lyase", "lycea", "lycee", "lycra", "lymes", "lynes", "lyres", "lysed", "lyses", "lysin", "lysis", "lysol", "lyssa", "lyted", "lytes", "lythe", "lytic", "lytta", "maaed", "maare", "maars", "mabes", "macas", "maced",
  "macer", "maces", "mache", "machi", "machs", "macks", "macle", "macon", "madge", "madid", "madre", "maerl", "mafic", "mages", "maggs", "magot", "magus", "mahoe", "mahua", "mahwa", "maids", "maiko", "maiks", "maile", "maill", "mails", "maims", "mains", "maire", "mairs", "maise", "maist", "makar", "makes", "makis", "makos", "malam", "malar", "malas", "malax", "males", "malic", "malik", "malis", "malls", "malms", "malmy", "malts", "malty", "malus", "malva", "malwa", "mamas", "mamba", "mamee", "mamey",
  "mamie", "manas", "manat", "mandi", "maneb", "maned", "maneh", "manes", "manet", "mangs", "manis", "manky", "manna", "manos", "manse", "manta", "manto", "manty", "manul", "manus", "mapau", "maqui", "marae", "marah", "maras", "marcs", "mardy", "mares", "marge", "margs", "maria", "marid", "marka", "marks", "marle", "marls", "marly", "marms", "maron", "maror", "marra", "marri", "marse", "marts", "marvy", "masas", "mased", "maser", "mases", "mashy", "masks", "massa", "massy", "masts", "masty", "masus",
  "matai", "mated", "mater", "mates", "maths", "matin", "matlo", "matte", "matts", "matza", "matzo", "mauby", "mauds", "mauls", "maund", "mauri", "mausy", "mauts", "mauzy", "maven", "mavie", "mavin", "mavis", "mawed", "mawks", "mawky", "mawns", "mawrs", "maxed", "maxes", "maxis", "mayan", "mayas", "mayed", "mayos", "mayst", "mazed", "mazer", "mazes", "mazey", "mazut", "mbira", "meads", "meals", "meane", "means", "meany", "meare", "mease", "meath", "meats", "mebos", "mechs", "mecks", "medii", "medle",
  "meeds", "meers", "meets", "meffs", "meins", "meint", "meiny", "meith", "mekka", "melas", "melba", "melds", "melic", "melik", "mells", "melts", "melty", "memes", "memos", "menad", "mends", "mened", "menes", "menge", "mengs", "mensa", "mense", "mensh", "menta", "mento", "menus", "meous", "meows", "merch", "mercs", "merde", "mered", "merel", "merer", "meres", "meril", "meris", "merks", "merle", "merls", "merse", "mesal", "mesas", "mesel", "meses", "meshy", "mesic", "mesne", "meson", "messy", "mesto",
  "meted", "metes", "metho", "meths", "metic", "metif", "metis", "metol", "metre", "meuse", "meved", "meves", "mewed", "mewls", "meynt", "mezes", "mezze", "mezzo", "mhorr", "miaou", "miaow", "miasm", "miaul", "micas", "miche", "micht", "micks", "micky", "micos", "micra", "middy", "midgy", "midis", "miens", "mieve", "miffs", "miffy", "mifty", "miggs", "mihas", "mihis", "miked", "mikes", "mikra", "mikva", "milch", "milds", "miler", "miles", "milfs", "milia", "milko", "milks", "mille", "mills", "milor",
  "milos", "milpa", "milts", "milty", "miltz", "mimed", "mimeo", "mimer", "mimes", "mimsy", "minae", "minar", "minas", "mincy", "minds", "mined", "mines", "minge", "mings", "mingy", "minis", "minke", "minks", "minny", "minos", "mints", "mired", "mires", "mirex", "mirid", "mirin", "mirks", "mirky", "mirly", "miros", "mirvs", "mirza", "misch", "misdo", "mises", "misgo", "misos", "missa", "mists", "misty", "mitch", "miter", "mites", "mitis", "mitre", "mitts", "mixed", "mixen", "mixer", "mixes", "mixte",
  "mixup", "mizen", "mizzy", "mneme", "moans", "moats", "mobby", "mobes", "mobey", "mobie", "moble", "mochi", "mochs", "mochy", "mocks", "moder", "modes", "modge", "modii", "modus", "moers", "mofos", "moggy", "mohel", "mohos", "mohrs", "mohua", "mohur", "moile", "moils", "moira", "moire", "moits", "mojos", "mokes", "mokis", "mokos", "molal", "molas", "molds", "moled", "moles", "molla", "molls", "molly", "molto", "molts", "molys", "momes", "momma", "mommy", "momus", "monad", "monal", "monas", "monde",
  "mondo", "moner", "mongo", "mongs", "monic", "monie", "monks", "monos", "monte", "monty", "moobs", "mooch", "moods", "mooed", "mooks", "moola", "mooli", "mools", "mooly", "moong", "moons", "moony", "moops", "moors", "moory", "moots", "moove", "moped", "moper", "mopes", "mopey", "moppy", "mopsy", "mopus", "morae", "moras", "morat", "moray", "morel", "mores", "moria", "morne", "morns", "morra", "morro", "morse", "morts", "mosed", "moses", "mosey", "mosks", "mosso", "moste", "mosts", "moted", "moten",
  "motes", "motet", "motey", "moths", "mothy", "motis", "motte", "motts", "motty", "motus", "motza", "mouch", "moues", "mould", "mouls", "moups", "moust", "mousy", "moved", "moves", "mowas", "mowed", "mowra", "moxas", "moxie", "moyas", "moyle", "moyls", "mozed", "mozes", "mozos", "mpret", "mucho", "mucic", "mucid", "mucin", "mucks", "mucor", "mucro", "mudge", "mudir", "mudra", "muffs", "mufti", "mugga", "muggs", "muggy", "muhly", "muids", "muils", "muirs", "muist", "mujik", "mulct", "muled", "mules",
  "muley", "mulga", "mulie", "mulla", "mulls", "mulse", "mulsh", "mumms", "mumps", "mumsy", "mumus", "munga", "munge", "mungo", "mungs", "munis", "munts", "muntu", "muons", "muras", "mured", "mures", "murex", "murid", "murks", "murls", "murly", "murra", "murre", "murri", "murrs", "murry", "murti", "murva", "musar", "musca", "mused", "muser", "muses", "muset", "musha", "musit", "musks", "musos", "musse", "mussy", "musth", "musts", "mutch", "muted", "muter", "mutes", "mutha", "mutis", "muton", "mutts",
  "muxed", "muxes", "muzak", "muzzy", "mvule", "myall", "mylar", "mynah", "mynas", "myoid", "myoma", "myope", "myops", "myopy", "mysid", "mythi", "myths", "mythy", "myxos", "mzees", "naams", "naans", "nabes", "nabis", "nabks", "nabla", "nabob", "nache", "nacho", "nacre", "nadas", "naeve", "naevi", "naffs", "nagas", "naggy", "nagor", "nahal", "naiad", "naifs", "naiks", "nails", "naira", "nairu", "naked", "naker", "nakfa", "nalas", "naled", "nalla", "named", "namer", "names", "namma", "namus", "nanas",
  "nance", "nancy", "nandu", "nanna", "nanos", "nanua", "napas", "naped", "napes", "napoo", "nappa", "nappe", "nappy", "naras", "narco", "narcs", "nards", "nares", "naric", "naris", "narks", "narky", "narre", "nashi", "natch", "nates", "natis", "natty", "nauch", "naunt", "navar", "naves", "navew", "navvy", "nawab", "nazes", "nazir", "nazis", "nduja", "neafe", "neals", "neaps", "nears", "neath", "neats", "nebek", "nebel", "necks", "neddy", "needs", "neeld", "neele", "neemb", "neems", "neeps", "neese",
  "neeze", "negro", "negus", "neifs", "neist", "neive", "nelis", "nelly", "nemas", "nemns", "nempt", "nenes", "neons", "neper", "nepit", "neral", "nerds", "nerka", "nerks", "nerol", "nerts", "nertz", "nervy", "nests", "netes", "netop", "netts", "netty", "neuks", "neume", "neums", "nevel", "neves", "nevus", "newbs", "newed", "newel", "newie", "newsy", "newts", "nexts", "nexus", "ngaio", "ngana", "ngati", "ngoma", "ngwee", "nicad", "nicht", "nicks", "nicol", "nidal", "nided", "nides", "nidor", "nidus",
  "niefs", "nieve", "nifes", "niffs", "niffy", "nifty", "niger", "nighs", "nihil", "nikab", "nikah", "nikau", "nills", "nimbi", "nimbs", "nimps", "niner", "nines", "ninon", "nipas", "nippy", "niqab", "nirls", "nirly", "nisei", "nisse", "nisus", "niter", "nites", "nitid", "niton", "nitre", "nitro", "nitry", "nitty", "nival", "nixed", "nixer", "nixes", "nixie", "nizam", "nkosi", "noahs", "nobby", "nocks", "nodal", "noddy", "nodes", "nodus", "noels", "noggs", "nohow", "noils", "noily", "noint", "noirs",
  "noles", "nolls", "nolos", "nomas", "nomen", "nomes", "nomic", "nomoi", "nomos", "nonas", "nonce", "nones", "nonet", "nongs", "nonis", "nonny", "nonyl", "noobs", "nooit", "nooks", "nooky", "noons", "noops", "nopal", "noria", "noris", "norks", "norma", "norms", "nosed", "noser", "noses", "notal", "noted", "noter", "notes", "notum", "nould", "noule", "nouls", "nouns", "nouny", "noups", "novae", "novas", "novum", "noway", "nowed", "nowls", "nowts", "nowty", "noxal", "noxes", "noyau", "noyed", "noyes",
  "nubby", "nubia", "nucha", "nuddy", "nuder", "nudes", "nudie", "nudzh", "nuffs", "nugae", "nuked", "nukes", "nulla", "nulls", "numbs", "numen", "nummy", "nunny", "nurds", "nurdy", "nurls", "nurrs", "nutso", "nutsy", "nyaff", "nyala", "nying", "nyssa", "oaked", "oaker", "oakum", "oared", "oases", "oasis", "oasts", "oaten", "oater", "oaths", "oaves", "obang", "obeah", "obeli", "obeys", "obias", "obied", "obiit", "obits", "objet", "oboes", "obole", "oboli", "obols", "occam", "ocher", "oches", "ochre",
  "ochry", "ocker", "ocrea", "octad", "octan", "octas", "octyl", "oculi", "odahs", "odals", "odeon", "odeum", "odism", "odist", "odium", "odors", "odour", "odyle", "odyls", "ofays", "offed", "offie", "oflag", "ofter", "ogams", "ogeed", "ogees", "oggin", "ogham", "ogive", "ogled", "ogler", "ogles", "ogmic", "ogres", "ohias", "ohing", "ohmic", "ohone", "oidia", "oiled", "oiler", "oinks", "oints", "ojime", "okapi", "okays", "okehs", "okras", "oktas", "oldie", "oleic", "olein", "olent", "oleos", "oleum",
  "olios", "ollas", "ollav", "oller", "ollie", "ology", "olpae", "olpes", "omasa", "omber", "ombus", "omens", "omers", "omits", "omlah", "omovs", "omrah", "oncer", "onces", "oncet", "oncus", "onely", "oners", "onery", "onium", "onkus", "onlay", "onned", "ontic", "oobit", "oohed", "oomph", "oonts", "ooped", "oorie", "ooses", "ootid", "oozed", "oozes", "opahs", "opals", "opens", "opepe", "oping", "oppos", "opsin", "opted", "opter", "orach", "oracy", "orals", "orang", "orant", "orate", "orbed", "orcas",
  "orcin", "ordos", "oread", "orfes", "orgia", "orgic", "orgue", "oribi", "oriel", "orixa", "orles", "orlon", "orlop", "ormer", "ornis", "orpin", "orris", "ortho", "orval", "orzos", "oscar", "oshac", "osier", "osmic", "osmol", "ossia", "ostia", "otaku", "otary", "ottar", "ottos", "oubit", "oucht", "ouens", "ouija", "oulks", "oumas", "oundy", "oupas", "ouped", "ouphe", "ouphs", "ourie", "ousel", "ousts", "outby", "outed", "outre", "outro", "outta", "ouzel", "ouzos", "ovals", "ovels", "ovens", "overs",
  "ovist", "ovoli", "ovolo", "ovule", "owche", "owies", "owled", "owler", "owlet", "owned", "owres", "owrie", "owsen", "oxbow", "oxers", "oxeye", "oxids", "oxies", "oxime", "oxims", "oxlip", "oxter", "oyers", "ozeki", "ozzie", "paals", "paans", "pacas", "paced", "pacer", "paces", "pacey", "pacha", "packs", "pacos", "pacta", "pacts", "padis", "padle", "padma", "padre", "padri", "paean", "paedo", "paeon", "paged", "pager", "pages", "pagle", "pagod", "pagri", "paiks", "pails", "pains", "paire", "pairs",
  "paisa", "paise", "pakka", "palas", "palay", "palea", "paled", "pales", "palet", "palis", "palki", "palla", "palls", "pally", "palms", "palmy", "palpi", "palps", "palsa", "pampa", "panax", "pance", "panda", "pands", "pandy", "paned", "panes", "panga", "pangs", "panim", "panko", "panne", "panni", "panto", "pants", "panty", "paoli", "paolo", "papas", "papaw", "papes", "pappi", "pappy", "parae", "paras", "parch", "pardi", "pards", "pardy", "pared", "paren", "pareo", "pares", "pareu", "parev", "parge",
  "pargo", "paris", "parki", "parks", "parky", "parle", "parly", "parma", "parol", "parps", "parra", "parrs", "parti", "parts", "parve", "parvo", "paseo", "pases", "pasha", "pashm", "paska", "paspy", "passe", "pasts", "pated", "paten", "pater", "pates", "paths", "patin", "patka", "patly", "patte", "patus", "pauas", "pauls", "pavan", "paved", "paven", "paver", "paves", "pavid", "pavin", "pavis", "pawas", "pawaw", "pawed", "pawer", "pawks", "pawky", "pawls", "pawns", "paxes", "payed", "payor", "paysd",
  "peage", "peags", "peaks", "peaky", "peals", "peans", "peare", "pears", "peart", "pease", "peats", "peaty", "peavy", "peaze", "pebas", "pechs", "pecke", "pecks", "pecky", "pedes", "pedis", "pedro", "peece", "peeks", "peels", "peens", "peeoy", "peepe", "peeps", "peers", "peery", "peeve", "peggy", "peghs", "peins", "peise", "peize", "pekan", "pekes", "pekin", "pekoe", "pelas", "pelau", "peles", "pelfs", "pells", "pelma", "pelon", "pelta", "pelts", "pends", "pendu", "pened", "penes", "pengo", "penie",
  "penis", "penks", "penna", "penni", "pents", "peons", "peony", "pepla", "pepos", "peppy", "pepsi", "perai", "perce", "percs", "perdu", "perdy", "perea", "peres", "peris", "perks", "perms", "perns", "perog", "perps", "perry", "perse", "perst", "perts", "perve", "pervo", "pervs", "pervy", "pesos", "pests", "pesty", "petar", "peter", "petit", "petre", "petri", "petti", "petto", "pewee", "pewit", "peyse", "phage", "phang", "phare", "pharm", "pheer", "phene", "pheon", "phese", "phial", "phish", "phizz",
  "phlox", "phoca", "phono", "phons", "phots", "phpht", "phuts", "phyla", "phyle", "piani", "pians", "pibal", "pical", "picas", "piccy", "picks", "picot", "picra", "picul", "piend", "piers", "piert", "pieta", "piets", "piezo", "pight", "pigmy", "piing", "pikas", "pikau", "piked", "piker", "pikes", "pikey", "pikis", "pikul", "pilae", "pilaf", "pilao", "pilar", "pilau", "pilaw", "pilch", "pilea", "piled", "pilei", "piler", "piles", "pilis", "pills", "pilow", "pilum", "pilus", "pimas", "pimps", "pinas",
  "pined", "pines", "pingo", "pings", "pinko", "pinks", "pinna", "pinny", "pinon", "pinot", "pinta", "pints", "pinup", "pions", "piony", "pious", "pioye", "pioys", "pipal", "pipas", "piped", "pipes", "pipet", "pipis", "pipit", "pippy", "pipul", "pirai", "pirls", "pirns", "pirog", "pisco", "pises", "pisky", "pisos", "pissy", "piste", "pitas", "piths", "piton", "pitot", "pitta", "piums", "pixes", "pized", "pizes", "plaas", "plack", "plage", "plans", "plaps", "plash", "plasm", "plast", "plats", "platt",
  "platy", "playa", "plays", "pleas", "plebe", "plebs", "plena", "pleon", "plesh", "plews", "plica", "plies", "plims", "pling", "plink", "ploat", "plods", "plong", "plonk", "plook", "plops", "plots", "plotz", "plouk", "plows", "ploye", "ploys", "plues", "pluff", "plugs", "plums", "plumy", "pluot", "pluto", "plyer", "poach", "poaka", "poake", "poboy", "pocks", "pocky", "podal", "poddy", "podex", "podge", "podgy", "podia", "poems", "poeps", "poets", "pogey", "pogge", "pogos", "pohed", "poilu", "poind",
  "pokal", "poked", "pokes", "pokey", "pokie", "poled", "poler", "poles", "poley", "polio", "polis", "polje", "polks", "polls", "polly", "polos", "polts", "polys", "pombe", "pomes", "pommy", "pomos", "pomps", "ponce", "poncy", "ponds", "pones", "poney", "ponga", "pongo", "pongs", "pongy", "ponks", "ponts", "ponty", "ponzu", "poods", "pooed", "poofs", "poofy", "poohs", "pooja", "pooka", "pooks", "pools", "poons", "poops", "poopy", "poori", "poort", "poots", "poove", "poovy", "popes", "poppa", "popsy",
  "porae", "poral", "pored", "porer", "pores", "porge", "porgy", "porin", "porks", "porky", "porno", "porns", "porny", "porta", "ports", "porty", "posed", "poses", "posey", "posho", "posts", "potae", "potch", "poted", "potes", "potin", "potoo", "potsy", "potto", "potts", "potty", "pouff", "poufs", "pouke", "pouks", "poule", "poulp", "poult", "poupe", "poupt", "pours", "pouts", "powan", "powin", "pownd", "powns", "powny", "powre", "poxed", "poxes", "poynt", "poyou", "poyse", "pozzy", "praam", "prads",
  "prahu", "prams", "prana", "prang", "praos", "prase", "prate", "prats", "pratt", "praty", "praus", "prays", "predy", "preed", "prees", "preif", "prems", "premy", "prent", "preon", "preop", "preps", "presa", "prese", "prest", "preve", "prexy", "preys", "prial", "pricy", "prief", "prier", "pries", "prigs", "prill", "prima", "primi", "primp", "prims", "primy", "prink", "prion", "prise", "priss", "proas", "probs", "prods", "proem", "profs", "progs", "proin", "proke", "prole", "proll", "promo", "proms",
  "pronk", "props", "prore", "proso", "pross", "prost", "prosy", "proto", "proul", "prows", "proyn", "prunt", "pruta", "pryer", "pryse", "pseud", "pshaw", "psion", "psoae", "psoai", "psoas", "psora", "psych", "psyop", "pubco", "pubes", "pubis", "pucan", "pucer", "puces", "pucka", "pucks", "puddy", "pudge", "pudic", "pudor", "pudsy", "pudus", "puers", "puffa", "puffs", "puggy", "pugil", "puhas", "pujah", "pujas", "pukas", "puked", "puker", "pukes", "pukey", "pukka", "pukus", "pulao", "pulas", "puled",
  "puler", "pules", "pulik", "pulis", "pulka", "pulks", "pulli", "pulls", "pully", "pulmo", "pulps", "pulus", "pumas", "pumie", "pumps", "punas", "punce", "punga", "pungs", "punji", "punka", "punks", "punky", "punny", "punto", "punts", "punty", "pupae", "pupas", "pupus", "purda", "pured", "pures", "purin", "puris", "purls", "purpy", "purrs", "pursy", "purty", "puses", "pusle", "pussy", "putid", "puton", "putti", "putto", "putts", "puzel", "pwned", "pyats", "pyets", "pygal", "pyins", "pylon", "pyned",
  "pynes", "pyoid", "pyots", "pyral", "pyran", "pyres", "pyrex", "pyric", "pyros", "pyxed", "pyxes", "pyxie", "pyxis", "pzazz", "qadis", "qaids", "qajaq", "qanat", "qapik", "qibla", "qophs", "qorma", "quads", "quaff", "quags", "quair", "quais", "quaky", "quale", "quant", "quare", "quass", "quate", "quats", "quayd", "quays", "qubit", "quean", "queme", "quena", "quern", "queyn", "queys", "quich", "quids", "quiff", "quims", "quina", "quine", "quino", "quins", "quint", "quipo", "quips", "quipu", "quire",
  "quirt", "quist", "quits", "quoad", "quods", "quoif", "quoin", "quoit", "quoll", "quonk", "quops", "qursh", "quyte", "rabat", "rabic", "rabis", "raced", "races", "rache", "racks", "racon", "radge", "radix", "radon", "raffs", "rafts", "ragas", "ragde", "raged", "ragee", "rager", "rages", "ragga", "raggs", "raggy", "ragis", "ragus", "rahed", "rahui", "raias", "raids", "raiks", "raile", "rails", "raine", "rains", "raird", "raita", "raits", "rajas", "rajes", "raked", "rakee", "raker", "rakes", "rakia",
  "rakis", "rakus", "rales", "ramal", "ramee", "ramet", "ramie", "ramin", "ramis", "rammy", "ramps", "ramus", "ranas", "rance", "rands", "ranee", "ranga", "rangi", "rangs", "rangy", "ranid", "ranis", "ranke", "ranks", "rants", "raped", "raper", "rapes", "raphe", "rappe", "rared", "raree", "rares", "rarks", "rased", "raser", "rases", "rasps", "rasse", "rasta", "ratal", "ratan", "ratas", "ratch", "rated", "ratel", "rater", "rates", "ratha", "rathe", "raths", "ratoo", "ratos", "ratus", "rauns", "raupo",
  "raved", "ravel", "raver", "raves", "ravey", "ravin", "rawer", "rawin", "rawly", "rawns", "raxed", "raxes", "rayah", "rayas", "rayed", "rayle", "rayne", "razed", "razee", "razer", "razes", "razoo", "readd", "reads", "reais", "reaks", "realo", "reals", "reame", "reams", "reamy", "reans", "reaps", "rears", "reast", "reata", "reate", "reave", "rebbe", "rebec", "rebid", "rebit", "rebop", "rebuy", "recal", "recce", "recco", "reccy", "recit", "recks", "recon", "recta", "recti", "recto", "redan", "redds",
  "reddy", "reded", "redes", "redia", "redid", "redip", "redly", "redon", "redos", "redox", "redry", "redub", "redux", "redye", "reech", "reede", "reeds", "reefs", "reefy", "reeks", "reeky", "reels", "reens", "reest", "reeve", "refed", "refel", "reffo", "refis", "refix", "refly", "refry", "regar", "reges", "reggo", "regie", "regma", "regna", "regos", "regur", "rehem", "reifs", "reify", "reiki", "reiks", "reink", "reins", "reird", "reist", "reive", "rejig", "rejon", "reked", "rekes", "rekey", "relet",
  "relie", "relit", "rello", "reman", "remap", "remen", "remet", "remex", "remix", "renay", "rends", "reney", "renga", "renig", "renin", "renne", "renos", "rente", "rents", "reoil", "reorg", "repeg", "repin", "repla", "repos", "repot", "repps", "repro", "reran", "rerig", "resat", "resaw", "resay", "resee", "reses", "resew", "resid", "resit", "resod", "resow", "resto", "rests", "resty", "resus", "retag", "retax", "retem", "retia", "retie", "retox", "revet", "revie", "rewan", "rewax", "rewed", "rewet",
  "rewin", "rewon", "rewth", "rexes", "rezes", "rheas", "rheme", "rheum", "rhies", "rhime", "rhine", "rhody", "rhomb", "rhone", "rhumb", "rhyne", "rhyta", "riads", "rials", "riant", "riata", "ribas", "ribby", "ribes", "riced", "ricer", "rices", "ricey", "richt", "ricin", "ricks", "rides", "ridgy", "ridic", "riels", "riems", "rieve", "rifer", "riffs", "rifte", "rifts", "rifty", "riggs", "rigol", "riled", "riles", "riley", "rille", "rills", "rimae", "rimed", "rimer", "rimes", "rimus", "rinds", "rindy",
  "rines", "rings", "rinks", "rioja", "riots", "riped", "ripes", "ripps", "rises", "rishi", "risks", "risps", "risus", "rites", "ritts", "ritzy", "rivas", "rived", "rivel", "riven", "rives", "riyal", "rizas", "roads", "roams", "roans", "roars", "roary", "roate", "robed", "robes", "roble", "rocks", "roded", "rodes", "roguy", "rohes", "roids", "roils", "roily", "roins", "roist", "rojak", "rojis", "roked", "roker", "rokes", "rolag", "roles", "rolfs", "rolls", "romal", "roman", "romeo", "romps", "ronde",
  "rondo", "roneo", "rones", "ronin", "ronne", "ronte", "ronts", "roods", "roofs", "roofy", "rooks", "rooky", "rooms", "roons", "roops", "roopy", "roosa", "roose", "roots", "rooty", "roped", "roper", "ropes", "ropey", "roque", "roral", "rores", "roric", "rorid", "rorie", "rorts", "rorty", "rosed", "roses", "roset", "roshi", "rosin", "rosit", "rosti", "rosts", "rotal", "rotan", "rotas", "rotch", "roted", "rotes", "rotis", "rotls", "roton", "rotos", "rotte", "rouen", "roues", "roule", "rouls", "roums",
  "roups", "roupy", "roust", "routh", "routs", "roved", "roven", "roves", "rowan", "rowed", "rowel", "rowen", "rowie", "rowme", "rownd", "rowth", "rowts", "royne", "royst", "rozet", "rozit", "ruana", "rubai", "rubby", "rubel", "rubes", "rubin", "ruble", "rubli", "rubus", "ruche", "rucks", "rudas", "rudds", "rudes", "rudie", "rudis", "rueda", "ruers", "ruffe", "ruffs", "rugae", "rugal", "ruggy", "ruing", "ruins", "rukhs", "ruled", "rules", "rumal", "rumbo", "rumen", "rumes", "rumly", "rummy", "rumpo",
  "rumps", "rumpy", "runch", "runds", "runed", "runes", "rungs", "runic", "runny", "runts", "runty", "rupia", "rurps", "rurus", "rusas", "ruses", "rushy", "rusks", "rusma", "russe", "rusts", "ruths", "rutin", "rutty", "ryals", "rybat", "ryked", "rykes", "rymme", "rynds", "ryots", "ryper", "saags", "sabal", "sabed", "saber", "sabes", "sabha", "sabin", "sabir", "sable", "sabot", "sabra", "sabre", "sacks", "sacra", "saddo", "sades", "sadhe", "sadhu", "sadis", "sados", "sadza", "safed", "safes", "sagas",
  "sager", "sages", "saggy", "sagos", "sagum", "saheb", "sahib", "saice", "saick", "saics", "saids", "saiga", "sails", "saims", "saine", "sains", "sairs", "saist", "saith", "sajou", "sakai", "saker", "sakes", "sakia", "sakis", "sakti", "salal", "salat", "salep", "sales", "salet", "salic", "salix", "salle", "salmi", "salol", "salop", "salpa", "salps", "salse", "salto", "salts", "salue", "salut", "saman", "samas", "samba", "sambo", "samek", "samel", "samen", "sames", "samey", "samfu", "sammy", "sampi",
  "samps", "sands", "saned", "sanes", "sanga", "sangh", "sango", "sangs", "sanko", "sansa", "santo", "sants", "saola", "sapan", "sapid", "sapor", "saran", "sards", "sared", "saree", "sarge", "sargo", "sarin", "saris", "sarks", "sarky", "sarod", "saros", "sarus", "saser", "sasin", "sasse", "satai", "satay", "sated", "satem", "sates", "satis", "sauba", "sauch", "saugh", "sauls", "sault", "saunt", "saury", "sauts", "saved", "saver", "saves", "savey", "savin", "sawah", "sawed", "sawer", "saxes", "sayed",
  "sayer", "sayid", "sayne", "sayon", "sayst", "sazes", "scabs", "scads", "scaff", "scags", "scail", "scala", "scall", "scams", "scand", "scans", "scapa", "scape", "scapi", "scarp", "scars", "scart", "scath", "scats", "scatt", "scaud", "scaup", "scaur", "scaws", "sceat", "scena", "scend", "schav", "schmo", "schul", "schwa", "sclim", "scody", "scogs", "scoog", "scoot", "scopa", "scops", "scots", "scoug", "scoup", "scowp", "scows", "scrab", "scrae", "scrag", "scran", "scrat", "scraw", "scray", "scrim",
  "scrip", "scrob", "scrod", "scrog", "scrow", "scudi", "scudo", "scuds", "scuff", "scuft", "scugs", "sculk", "scull", "sculp", "sculs", "scums", "scups", "scurf", "scurs", "scuse", "scuta", "scute", "scuts", "scuzz", "scyes", "sdayn", "sdein", "seals", "seame", "seams", "seamy", "seans", "seare", "sears", "sease", "seats", "seaze", "sebum", "secco", "sechs", "sects", "seder", "sedes", "sedge", "sedgy", "sedum", "seeds", "seeks", "seeld", "seels", "seely", "seems", "seeps", "seepy", "seers", "sefer",
  "segar", "segni", "segno", "segol", "segos", "sehri", "seifs", "seils", "seine", "seirs", "seise", "seism", "seity", "seiza", "sekos", "sekts", "selah", "seles", "selfs", "sella", "selle", "sells", "selva", "semee", "semes", "semie", "semis", "senas", "sends", "senes", "sengi", "senna", "senor", "sensa", "sensi", "sente", "senti", "sents", "senvy", "senza", "sepad", "sepal", "sepic", "sepoy", "septa", "septs", "serac", "serai", "seral", "sered", "serer", "seres", "serfs", "serge", "seric", "serin",
  "serks", "seron", "serow", "serra", "serre", "serrs", "serry", "servo", "sesey", "sessa", "setae", "setal", "seton", "setts", "sewan", "sewar", "sewed", "sewel", "sewen", "sewin", "sexed", "sexer", "sexes", "sexto", "sexts", "seyen", "shads", "shags", "shahs", "shako", "shakt", "shalm", "shaly", "shama", "shams", "shand", "shans", "shaps", "sharn", "shash", "shaul", "shawm", "shawn", "shaws", "shaya", "shays", "shchi", "sheaf", "sheal", "sheas", "sheds", "sheel", "shend", "shent", "sheol", "sherd",
  "shere", "shero", "shets", "sheva", "shewn", "shews", "shiai", "shiel", "shier", "shies", "shill", "shily", "shims", "shins", "ships", "shirr", "shirs", "shish", "shiso", "shist", "shite", "shits", "shiur", "shiva", "shive", "shivs", "shlep", "shlub", "shmek", "shmoe", "shoat", "shoed", "shoer", "shoes", "shogi", "shogs", "shoji", "shojo", "shola", "shool", "shoon", "shoos", "shope", "shops", "shorl", "shote", "shots", "shott", "showd", "shows", "shoyu", "shred", "shris", "shrow", "shtik", "shtum",
  "shtup", "shule", "shuln", "shuls", "shuns", "shura", "shute", "shuts", "shwas", "shyer", "sials", "sibbs", "sibyl", "sices", "sicht", "sicko", "sicks", "sicky", "sidas", "sided", "sider", "sides", "sidha", "sidhe", "sidle", "sield", "siens", "sient", "sieth", "sieur", "sifts", "sighs", "sigil", "sigla", "signa", "signs", "sijos", "sikas", "siker", "sikes", "silds", "siled", "silen", "siler", "siles", "silex", "silks", "sills", "silos", "silts", "silty", "silva", "simar", "simas", "simba", "simis",
  "simps", "simul", "sinds", "sined", "sines", "sings", "sinhs", "sinks", "sinky", "sinus", "siped", "sipes", "sippy", "sired", "siree", "sires", "sirih", "siris", "siroc", "sirra", "sirup", "sisal", "sises", "sista", "sists", "sitar", "sited", "sites", "sithe", "sitka", "situp", "situs", "siver", "sixer", "sixes", "sixmo", "sixte", "sizar", "sized", "sizel", "sizer", "sizes", "skags", "skail", "skald", "skank", "skart", "skats", "skatt", "skaws", "skean", "skear", "skeds", "skeed", "skeef", "skeen",
  "skeer", "skees", "skeet", "skegg", "skegs", "skein", "skelf", "skell", "skelm", "skelp", "skene", "skens", "skeos", "skeps", "skers", "skets", "skews", "skids", "skied", "skies", "skiey", "skimo", "skims", "skink", "skins", "skint", "skios", "skips", "skirl", "skirr", "skite", "skits", "skive", "skivy", "sklim", "skoal", "skody", "skoff", "skogs", "skols", "skool", "skort", "skosh", "skran", "skrik", "skuas", "skugs", "skyed", "skyer", "skyey", "skyfs", "skyre", "skyrs", "skyte", "slabs", "slade",
  "slaes", "slags", "slaid", "slake", "slams", "slane", "slank", "slaps", "slart", "slats", "slaty", "slaws", "slays", "slebs", "sleds", "sleer", "slews", "sleys", "slier", "slily", "slims", "slipe", "slips", "slipt", "slish", "slits", "slive", "sloan", "slobs", "sloes", "slogs", "sloid", "slojd", "slomo", "sloom", "sloot", "slops", "slopy", "slorm", "slots", "slove", "slows", "sloyd", "slubb", "slubs", "slued", "slues", "sluff", "slugs", "sluit", "slums", "slurb", "slurs", "sluse", "sluts", "slyer",
  "slype", "smaak", "smaik", "smalm", "smalt", "smarm", "smaze", "smeek", "smees", "smeik", "smeke", "smerk", "smews", "smirr", "smirs", "smits", "smogs", "smoko", "smolt", "smoor", "smoot", "smore", "smorg", "smout", "smowt", "smugs", "smurs", "smush", "smuts", "snabs", "snafu", "snags", "snaps", "snarf", "snark", "snars", "snary", "snash", "snath", "snaws", "snead", "sneap", "snebs", "sneck", "sneds", "sneed", "snees", "snell", "snibs", "snick", "snies", "snift", "snigs", "snips", "snipy", "snirt",
  "snits", "snobs", "snods", "snoek", "snoep", "snogs", "snoke", "snood", "snook", "snool", "snoot", "snots", "snowk", "snows", "snubs", "snugs", "snush", "snyes", "soaks", "soaps", "soare", "soars", "soave", "sobas", "socas", "soces", "socko", "socks", "socle", "sodas", "soddy", "sodic", "sodom", "sofar", "sofas", "softa", "softs", "softy", "soger", "sohur", "soils", "soily", "sojas", "sojus", "sokah", "soken", "sokes", "sokol", "solah", "solan", "solas", "solde", "soldi", "soldo", "solds", "soled",
  "solei", "soler", "soles", "solon", "solos", "solum", "solus", "soman", "somas", "sonce", "sonde", "sones", "songs", "sonly", "sonne", "sonny", "sonse", "sonsy", "sooey", "sooks", "sooky", "soole", "sools", "sooms", "soops", "soote", "soots", "sophs", "sophy", "sopor", "soppy", "sopra", "soral", "soras", "sorbo", "sorbs", "sorda", "sordo", "sords", "sored", "soree", "sorel", "sorer", "sores", "sorex", "sorgo", "sorns", "sorra", "sorta", "sorts", "sorus", "soths", "sotol", "souce", "souct", "sough",
  "souks", "souls", "soums", "soups", "soupy", "sours", "souse", "souts", "sowar", "sowce", "sowed", "sowff", "sowfs", "sowle", "sowls", "sowms", "sownd", "sowne", "sowps", "sowse", "sowth", "soyas", "soyle", "soyuz", "sozin", "spacy", "spado", "spaed", "spaer", "spaes", "spags", "spahi", "spail", "spain", "spait", "spake", "spald", "spale", "spall", "spalt", "spams", "spane", "spang", "spans", "spard", "spars", "spart", "spate", "spats", "spaul", "spawl", "spaws", "spayd", "spays", "spaza", "spazz",
  "speal", "spean", "speat", "specs", "spect", "speel", "speer", "speil", "speir", "speks", "speld", "spelk", "speos", "spets", "speug", "spews", "spewy", "spial", "spica", "spick", "spics", "spide", "spier", "spies", "spiff", "spifs", "spiks", "spile", "spims", "spina", "spink", "spins", "spirt", "spiry", "spits", "spitz", "spivs", "splay", "splog", "spode", "spods", "spoom", "spoor", "spoot", "spork", "sposh", "spots", "sprad", "sprag", "sprat", "spred", "sprew", "sprit", "sprod", "sprog", "sprue",
  "sprug", "spuds", "spued", "spuer", "spues", "spugs", "spule", "spume", "spumy", "spurs", "sputa", "spyal", "spyre", "squab", "squaw", "squeg", "squid", "squit", "squiz", "stabs", "stade", "stags", "stagy", "staig", "stane", "stang", "staph", "staps", "starn", "starr", "stars", "stats", "staun", "staws", "stays", "stean", "stear", "stedd", "stede", "steds", "steek", "steem", "steen", "steil", "stela", "stele", "stell", "steme", "stems", "stend", "steno", "stens", "stent", "steps", "stept", "stere",
  "stets", "stews", "stewy", "steys", "stich", "stied", "sties", "stilb", "stile", "stime", "stims", "stimy", "stipa", "stipe", "stire", "stirk", "stirp", "stirs", "stive", "stivy", "stoae", "stoai", "stoas", "stoat", "stobs", "stoep", "stogy", "stoit", "stoln", "stoma", "stond", "stong", "stonk", "stonn", "stook", "stoor", "stope", "stops", "stopt", "stoss", "stots", "stott", "stoun", "stoup", "stour", "stown", "stowp", "stows", "strad", "strae", "strag", "strak", "strep", "strew", "stria", "strig",
  "strim", "strop", "strow", "stroy", "strum", "stubs", "stude", "studs", "stull", "stulm", "stumm", "stums", "stuns", "stupa", "stupe", "sture", "sturt", "styed", "styes", "styli", "stylo", "styme", "stymy", "styre", "styte", "subah", "subas", "subby", "suber", "subha", "succi", "sucks", "sucky", "sucre", "sudds", "sudor", "sudsy", "suede", "suent", "suers", "suete", "suets", "suety", "sugan", "sughs", "sugos", "suhur", "suids", "suint", "suits", "sujee", "sukhs", "sukuk", "sulci", "sulfa", "sulfo",
  "sulks", "sulph", "sulus", "sumis", "summa", "sumos", "sumph", "sumps", "sunis", "sunks", "sunna", "sunns", "sunup", "supes", "supra", "surah", "sural", "suras", "surat", "surds", "sured", "sures", "surfs", "surfy", "surgy", "surra", "sused", "suses", "susus", "sutor", "sutra", "sutta", "swabs", "swack", "swads", "swage", "swags", "swail", "swain", "swale", "swaly", "swamy", "swang", "swank", "swans", "swaps", "swapt", "sward", "sware", "swarf", "swart", "swats", "swayl", "sways", "sweal", "swede",
  "sweed", "sweel", "sweer", "swees", "sweir", "swelt", "swerf", "sweys", "swies", "swigs", "swile", "swims", "swink", "swipe", "swire", "swiss", "swith", "swits", "swive", "swizz", "swobs", "swole", "swoln", "swops", "swopt", "swots", "swoun", "sybbe", "sybil", "syboe", "sybow", "sycee", "syces", "sycon", "syens", "syker", "sykes", "sylis", "sylph", "sylva", "symar", "synch", "syncs", "synds", "syned", "synes", "synth", "syped", "sypes", "syphs", "syrah", "syren", "sysop", "sythe", "syver", "taals",
  "taata", "taber", "tabes", "tabid", "tabis", "tabla", "tabor", "tabun", "tabus", "tacan", "taces", "tacet", "tache", "tacho", "tachs", "tacks", "tacos", "tacts", "taels", "tafia", "taggy", "tagma", "tahas", "tahrs", "taiga", "taigs", "taiko", "tails", "tains", "taira", "taish", "taits", "tajes", "takas", "takes", "takhi", "takin", "takis", "takky", "talak", "talaq", "talar", "talas", "talcs", "talcy", "talea", "taler", "tales", "talks", "talky", "talls", "talma", "talpa", "taluk", "talus", "tamal",
  "tamed", "tames", "tamin", "tamis", "tammy", "tamps", "tanas", "tanga", "tangi", "tangs", "tanhs", "tanka", "tanks", "tanky", "tanna", "tansy", "tanti", "tanto", "tanty", "tapas", "taped", "tapen", "tapes", "tapet", "tapis", "tappa", "tapus", "taras", "tardo", "tared", "tares", "targa", "targe", "tarns", "taroc", "tarok", "taros", "tarps", "tarre", "tarry", "tarsi", "tarts", "tarty", "tasar", "tased", "taser", "tases", "tasks", "tassa", "tasse", "tasso", "tatar", "tater", "tates", "taths", "tatie",
  "tatou", "tatts", "tatus", "taube", "tauld", "tauon", "taupe", "tauts", "tavah", "tavas", "taver", "tawai", "tawas", "tawed", "tawer", "tawie", "tawse", "tawts", "taxed", "taxer", "taxes", "taxis", "taxol", "taxon", "taxor", "taxus", "tayra", "tazza", "tazze", "teade", "teads", "teaed", "teaks", "teals", "teams", "tears", "teats", "teaze", "techs", "techy", "tecta", "teels", "teems", "teend", "teene", "teens", "teeny", "teers", "teffs", "teggs", "tegua", "tegus", "tehrs", "teiid", "teils", "teind",
  "teins", "telae", "telco", "teles", "telex", "telia", "telic", "tells", "telly", "teloi", "telos", "temed", "temes", "tempi", "temps", "tempt", "temse", "tench", "tends", "tendu", "tenes", "tenge", "tenia", "tenne", "tenno", "tenny", "tenon", "tents", "tenty", "tenue", "tepal", "tepas", "tepoy", "terai", "teras", "terce", "terek", "teres", "terfe", "terfs", "terga", "terms", "terne", "terns", "terry", "terts", "tesla", "testa", "teste", "tests", "tetes", "teths", "tetra", "tetri", "teuch", "teugh",
  "tewed", "tewel", "tewit", "texas", "texes", "texts", "thack", "thagi", "thaim", "thale", "thali", "thana", "thane", "thang", "thans", "thanx", "tharm", "thars", "thaws", "thawy", "thebe", "theca", "theed", "theek", "thees", "thegn", "theic", "thein", "thelf", "thema", "thens", "theow", "therm", "thesp", "thete", "thews", "thewy", "thigs", "thilk", "thill", "thine", "thins", "thiol", "thirl", "thoft", "thole", "tholi", "thoro", "thorp", "thous", "thowl", "thrae", "thraw", "thrid", "thrip", "throe",
  "thuds", "thugs", "thuja", "thunk", "thurl", "thuya", "thymi", "thymy", "tians", "tiars", "tical", "ticca", "ticed", "tices", "tichy", "ticks", "ticky", "tiddy", "tided", "tides", "tiers", "tiffs", "tifos", "tifts", "tiges", "tigon", "tikas", "tikes", "tikis", "tikka", "tilak", "tiled", "tiler", "tiles", "tills", "tilly", "tilth", "tilts", "timbo", "timed", "times", "timon", "timps", "tinas", "tinct", "tinds", "tinea", "tined", "tines", "tinge", "tings", "tinks", "tinny", "tints", "tinty", "tipis",
  "tippy", "tired", "tires", "tirls", "tiros", "tirrs", "titch", "titer", "titis", "titre", "titty", "titup", "tiyin", "tiyns", "tizes", "tizzy", "toads", "toady", "toaze", "tocks", "tocky", "tocos", "todde", "toeas", "toffs", "toffy", "tofts", "tofus", "togae", "togas", "toged", "toges", "togue", "tohos", "toile", "toils", "toing", "toise", "toits", "tokay", "toked", "toker", "tokes", "tokos", "tolan", "tolar", "tolas", "toled", "toles", "tolls", "tolly", "tolts", "tolus", "tolyl", "toman", "tombs",
  "tomes", "tomia", "tommy", "tomos", "tondi", "tondo", "toned", "toner", "tones", "toney", "tongs", "tonka", "tonks", "tonne", "tonus", "tools", "tooms", "toons", "toots", "toped", "topee", "topek", "toper", "topes", "tophe", "tophi", "tophs", "topis", "topoi", "topos", "toppy", "toque", "torah", "toran", "toras", "torcs", "tores", "toric", "torii", "toros", "torot", "torrs", "torse", "torsi", "torsk", "torta", "torte", "torts", "tosas", "tosed", "toses", "toshy", "tossy", "toted", "toter", "totes",
  "totty", "touks", "touns", "tours", "touse", "tousy", "touts", "touze", "touzy", "towed", "towie", "towns", "towny", "towse", "towsy", "towts", "towze", "towzy", "toyed", "toyer", "toyon", "toyos", "tozed", "tozes", "tozie", "trabs", "trads", "tragi", "traik", "trams", "trank", "tranq", "trans", "trant", "trape", "traps", "trapt", "trass", "trats", "tratt", "trave", "trayf", "trays", "treck", "treed", "treen", "trees", "trefa", "treif", "treks", "trema", "trems", "tress", "trest", "trets", "trews",
  "treyf", "treys", "triac", "tride", "trier", "tries", "triff", "trigo", "trigs", "trike", "trild", "trill", "trims", "trine", "trins", "triol", "trior", "trios", "trips", "tripy", "trist", "troad", "troak", "troat", "trock", "trode", "trods", "trogs", "trois", "troke", "tromp", "trona", "tronc", "trone", "tronk", "trons", "trooz", "troth", "trots", "trows", "troys", "trued", "trues", "trugo", "trugs", "trull", "tryer", "tryke", "tryma", "tryps", "tsade", "tsadi", "tsars", "tsked", "tsuba", "tsubo",
  "tuans", "tuart", "tuath", "tubae", "tubar", "tubas", "tubby", "tubed", "tubes", "tucks", "tufas", "tuffe", "tuffs", "tufts", "tufty", "tugra", "tuile", "tuina", "tuism", "tuktu", "tules", "tulpa", "tulsi", "tumid", "tummy", "tumps", "tumpy", "tunas", "tunds", "tuned", "tuner", "tunes", "tungs", "tunny", "tupek", "tupik", "tuple", "tuque", "turds", "turfs", "turfy", "turks", "turme", "turms", "turns", "turnt", "turps", "turrs", "tushy", "tusks", "tusky", "tutee", "tutti", "tutty", "tutus", "tuxes",
  "tuyer", "twaes", "twain", "twals", "twank", "twats", "tways", "tweel", "tween", "tweep", "tweer", "twerk", "twerp", "twier", "twigs", "twill", "twilt", "twink", "twins", "twiny", "twire", "twirp", "twite", "twits", "twoer", "twyer", "tyees", "tyers", "tyiyn", "tykes", "tyler", "tymps", "tynde", "tyned", "tynes", "typal", "typed", "types", "typey", "typic", "typos", "typps", "typto", "tyran", "tyred", "tyres", "tyros", "tythe", "tzars", "udals", "udons", "ugali", "ugged", "uhlan", "uhuru", "ukase",
  "ulama", "ulans", "ulema", "ulmin", "ulnad", "ulnae", "ulnar", "ulnas", "ulpan", "ulvas", "ulyie", "ulzie", "umami", "umbel", "umber", "umble", "umbos", "umbre", "umiac", "umiak", "umiaq", "ummah", "ummas", "ummed", "umped", "umphs", "umpie", "umpty", "umrah", "umras", "unais", "unapt", "unarm", "unary", "unaus", "unbag", "unban", "unbar", "unbed", "unbid", "unbox", "uncap", "unces", "uncia", "uncos", "uncoy", "uncus", "undam", "undee", "undos", "undug", "uneth", "unfix", "ungag", "unget", "ungod",
  "ungot", "ungum", "unhat", "unhip", "unica", "units", "unjam", "unked", "unket", "unkid", "unlaw", "unlay", "unled", "unlet", "unlid", "unman", "unmew", "unmix", "unpay", "unpeg", "unpen", "unpin", "unred", "unrid", "unrig", "unrip", "unsaw", "unsay", "unsee", "unsew", "unsex", "unsod", "untax", "untin", "unwet", "unwit", "unwon", "upbow", "upbye", "updos", "updry", "upend", "upjet", "uplay", "upled", "uplit", "upped", "upran", "uprun", "upsee", "upsey", "uptak", "upter", "uptie", "uraei", "urali",
  "uraos", "urare", "urari", "urase", "urate", "urbex", "urbia", "urdee", "ureal", "ureas", "uredo", "ureic", "urena", "urent", "urged", "urger", "urges", "urial", "urite", "urman", "urnal", "urned", "urped", "ursae", "ursid", "urson", "urubu", "urvas", "users", "usnea", "usque", "usure", "usury", "uteri", "uveal", "uveas", "uvula", "vacua", "vaded", "vades", "vagal", "vagus", "vails", "vaire", "vairs", "vairy", "vakas", "vakil", "vales", "valis", "valse", "vamps", "vampy", "vanda", "vaned", "vanes",
  "vangs", "vants", "vaped", "vaper", "vapes", "varan", "varas", "vardy", "varec", "vares", "varia", "varix", "varna", "varus", "varve", "vasal", "vases", "vasts", "vasty", "vatic", "vatus", "vauch", "vaute", "vauts", "vawte", "vaxes", "veale", "veals", "vealy", "veena", "veeps", "veers", "veery", "vegas", "veges", "vegie", "vegos", "vehme", "veils", "veily", "veins", "veiny", "velar", "velds", "veldt", "veles", "vells", "velum", "venae", "venal", "vends", "vendu", "veney", "venge", "venin", "vents",
  "venus", "verbs", "verra", "verry", "verst", "verts", "vertu", "vespa", "vesta", "vests", "vetch", "vexed", "vexer", "vexes", "vexil", "vezir", "vials", "viand", "vibes", "vibex", "vibey", "viced", "vices", "vichy", "viers", "views", "viewy", "vifda", "viffs", "vigas", "vigia", "vilde", "viler", "villi", "vills", "vimen", "vinal", "vinas", "vinca", "vined", "viner", "vines", "vinew", "vinic", "vinos", "vints", "viold", "viols", "vired", "vireo", "vires", "virga", "virge", "virid", "virls", "virtu",
  "visas", "vised", "vises", "visie", "visne", "vison", "visto", "vitae", "vitas", "vitex", "vitro", "vitta", "vivas", "vivat", "vivda", "viver", "vives", "vizir", "vizor", "vleis", "vlies", "vlogs", "voars", "vocab", "voces", "voddy", "vodou", "vodun", "voema", "vogie", "voids", "voile", "voips", "volae", "volar", "voled", "voles", "volet", "volks", "volta", "volte", "volti", "volts", "volva", "volve", "vomer", "voted", "votes", "vouge", "voulu", "vowed", "vower", "voxel", "vozhd", "vraic", "vrils",
  "vroom", "vrous", "vrouw", "vrows", "vuggs", "vuggy", "vughs", "vughy", "vulgo", "vulns", "vulva", "vutty", "waacs", "wacke", "wacko", "wacks", "wadds", "waddy", "waded", "wader", "wades", "wadge", "wadis", "wadts", "waffs", "wafts", "waged", "wages", "wagga", "wagyu", "wahoo", "waide", "waifs", "waift", "wails", "wains", "wairs", "waite", "waits", "wakas", "waked", "waken", "waker", "wakes", "wakfs", "waldo", "walds", "waled", "waler", "wales", "walie", "walis", "walks", "walla", "walls", "wally",
  "walty", "wamed", "wames", "wamus", "wands", "waned", "wanes", "waney", "wangs", "wanks", "wanky", "wanle", "wanly", "wanna", "wants", "wanty", "wanze", "waqfs", "warbs", "warby", "wards", "wared", "wares", "warez", "warks", "warms", "warns", "warps", "warre", "warst", "warts", "wases", "washy", "wasms", "wasps", "waspy", "wasts", "watap", "watts", "wauff", "waugh", "wauks", "waulk", "wauls", "waurs", "waved", "waves", "wavey", "wawas", "wawes", "wawls", "waxed", "waxer", "waxes", "wayed", "wazir",
  "wazoo", "weald", "weals", "weamb", "weans", "wears", "webby", "weber", "wecht", "wedel", "wedgy", "weeds", "weeke", "weeks", "weels", "weems", "weens", "weeny", "weeps", "weepy", "weest", "weete", "weets", "wefte", "wefts", "weids", "weils", "weirs", "weise", "weize", "wekas", "welds", "welke", "welks", "welkt", "wells", "welly", "welts", "wembs", "wends", "wenge", "wenny", "wents", "weros", "wersh", "wests", "wetas", "wetly", "wexed", "wexes", "whamo", "whams", "whang", "whaps", "whare", "whata",
  "whats", "whaup", "whaur", "wheal", "whear", "wheen", "wheep", "wheft", "whelk", "whelm", "whens", "whets", "whews", "wheys", "whids", "whift", "whigs", "whilk", "whims", "whins", "whios", "whips", "whipt", "whirr", "whirs", "whish", "whiss", "whist", "whits", "whity", "whizz", "whomp", "whoof", "whoot", "whops", "whore", "whorl", "whort", "whoso", "whows", "whump", "whups", "whyda", "wicca", "wicks", "wicky", "widdy", "wides", "wiels", "wifed", "wifes", "wifey", "wifie", "wifty", "wigan", "wigga",
  "wiggy", "wikis", "wilco", "wilds", "wiled", "wiles", "wilga", "wilis", "wilja", "wills", "wilts", "wimps", "winds", "wined", "wines", "winey", "winge", "wings", "wingy", "winks", "winna", "winns", "winos", "winze", "wiped", "wiper", "wipes", "wired", "wirer", "wires", "wirra", "wised", "wises", "wisha", "wisht", "wisps", "wists", "witan", "wited", "wites", "withe", "withs", "withy", "wived", "wiver", "wives", "wizen", "wizes", "woads", "woald", "wocks", "wodge", "woful", "wojus", "woker", "wokka",
  "wolds", "wolfs", "wolly", "wolve", "wombs", "womby", "womyn", "wonga", "wongi", "wonks", "wonky", "wonts", "woods", "wooed", "woofs", "woofy", "woold", "wools", "woons", "woops", "woopy", "woose", "woosh", "wootz", "words", "works", "worms", "wormy", "worts", "wowed", "wowee", "woxen", "wrang", "wraps", "wrapt", "wrast", "wrate", "wrawl", "wrens", "wrick", "wried", "wrier", "wries", "writs", "wroke", "wroot", "wroth", "wryer", "wuddy", "wudus", "wulls", "wurst", "wuses", "wushu", "wussy", "wuxia",
  "wyled", "wyles", "wynds", "wynns", "wyted", "wytes", "xebec", "xenia", "xenic", "xenon", "xeric", "xerox", "xerus", "xoana", "xrays", "xylan", "xylem", "xylic", "xylol", "xylyl", "xysti", "xysts", "yaars", "yabas", "yabba", "yabby", "yacca", "yacka", "yacks", "yaffs", "yager", "yages", "yagis", "yahoo", "yaird", "yakka", "yakow", "yales", "yamen", "yampy", "yamun", "yangs", "yanks", "yapok", "yapon", "yapps", "yappy", "yarak", "yarco", "yards", "yarer", "yarfa", "yarks", "yarns", "yarrs", "yarta",
  "yarto", "yates", "yauds", "yauld", "yaups", "yawed", "yawey", "yawls", "yawns", "yawny", "yawps", "ybore", "yclad", "ycled", "ycond", "ydrad", "ydred", "yeads", "yeahs", "yealm", "yeans", "yeard", "years", "yecch", "yechs", "yechy", "yedes", "yeeds", "yeesh", "yeggs", "yelks", "yells", "yelms", "yelps", "yelts", "yenta", "yente", "yerba", "yerds", "yerks", "yeses", "yesks", "yests", "yesty", "yetis", "yetts", "yeuks", "yeuky", "yeven", "yeves", "yewen", "yexed", "yexes", "yfere", "yiked", "yikes",
  "yills", "yince", "yipes", "yippy", "yirds", "yirks", "yirrs", "yirth", "yites", "yitie", "ylems", "ylike", "ylkes", "ymolt", "ympes", "yobbo", "yobby", "yocks", "yodel", "yodhs", "yodle", "yogas", "yogee", "yoghs", "yogic", "yogin", "yogis", "yoick", "yojan", "yoked", "yokel", "yoker", "yokes", "yokul", "yolks", "yolky", "yomim", "yomps", "yonic", "yonis", "yonks", "yoofs", "yoops", "yores", "yorks", "yorps", "youks", "yourn", "yours", "yourt", "youse", "yowed", "yowes", "yowie", "yowls", "yowza",
  "yrapt", "yrent", "yrivd", "yrneh", "ysame", "ytost", "yuans", "yucas", "yucca", "yucch", "yucko", "yucks", "yucky", "yufts", "yugas", "yuked", "yukes", "yukky", "yukos", "yulan", "yules", "yummo", "yummy", "yumps", "yupon", "yuppy", "yurta", "yurts", "yuzus", "zabra", "zacks", "zaida", "zaidy", "zaire", "zakat", "zaman", "zambo", "zamia", "zanja", "zante", "zanza", "zanze", "zappy", "zarfs", "zaris", "zatis", "zaxes", "zayin", "zazen", "zeals", "zebec", "zebub", "zebus", "zedas", "zeins", "zendo",
  "zerda", "zerks", "zeros", "zests", "zetas", "zexes", "zezes", "zhomo", "zibet", "ziffs", "zigan", "zilas", "zilch", "zilla", "zills", "zimbi", "zimbs", "zinco", "zincs", "zincy", "zineb", "zines", "zings", "zingy", "zinke", "zinky", "zippo", "zippy", "ziram", "zitis", "zizel", "zizit", "zlote", "zloty", "zoaea", "zobos", "zobus", "zocco", "zoeae", "zoeal", "zoeas", "zoism", "zoist", "zombi", "zonae", "zonda", "zoned", "zoner", "zones", "zonks", "zooea", "zooey", "zooid", "zooks", "zooms", "zoons",
  "zooty", "zoppa", "zoppo", "zoril", "zoris", "zorro", "zouks", "zowee", "zowie", "zulus", "zupan", "zupas", "zuppa", "zurfs", "zuzim", "zygal", "zygon", "zymes", "zymic"];
  /** @type {string} */
  var f = "present";
  /** @type {string} */
  var y = "correct";
  /** @type {string} */
  var bytes = "absent";
  var settings = {
    unknown : 0,
    absent : 1,
    present : 2,
    correct : 3
  };
  /** @type {!Date} */
  var c = new Date(2021, 5, 19, 0, 0, 0, 0);
  /** @type {string} */
  var choices = "abcdefghijklmnopqrstuvwxyz";
  /** @type {!Array<?>} */
  var braces = [].concat(toArray(choices.split("").slice(13)), toArray(choices.split("").slice(0, 13)));
  /** @type {string} */
  var STORAGE_KEY_MOCKSTORE = "statistics";
  /** @type {string} */
  var undefined = "fail";
  var train1or = {
    currentStreak : 0,
    maxStreak : 0,
    guesses : callback({
      1 : 0,
      2 : 0,
      3 : 0,
      4 : 0,
      5 : 0,
      6 : 0
    }, undefined, 0),
    winPercentage : 0,
    gamesPlayed : 0,
    gamesWon : 0,
    averageGuesses : 0
  };
  /** @type {!Element} */
  var post = document.createElement("template");
  /** @type {string} */
  post.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: ".concat(1E3, ";\n  }\n  #system-toaster {\n    z-index: ").concat(4E3, ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 36px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n    position: absolute;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n\n  @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help-button" class="icon" aria-label="help">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div class="title">\n         BIRDLE\n        </div>\n        <div class="menu">\n          <button id="statistics-button" class="icon" aria-label="statistics">\n            <game-icon icon="statistics"></game-icon>\n          </button>\n          <button id="settings-button" class="icon" aria-label="settings">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n');
  /** @type {!Element} */
  var form = document.createElement("template");
  /** @type {string} */
  form.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
  /** @type {string} */
  var exitCode = "IN_PROGRESS";
  /** @type {string} */
  var CONNECTING = "WIN";
  /** @type {string} */
  var obj = "FAIL";
  /** @type {!Array} */
  var pedalboards = ["Genius", "Magnificent", "Impressive", "Splendid", "Great", "Phew"];
  var DialogElement = function(prop) {
    /**
     * @return {?}
     */
    function init() {
      var self;
      extend(this, init);
      callback(validate(self = request.call(this)), "tileIndex", 0);
      callback(validate(self), "rowIndex", 0);
      callback(validate(self), "solution", void 0);
      callback(validate(self), "boardState", void 0);
      callback(validate(self), "evaluations", void 0);
      callback(validate(self), "canInput", true);
      callback(validate(self), "gameStatus", exitCode);
      callback(validate(self), "letterEvaluations", {});
      callback(validate(self), "$board", void 0);
      callback(validate(self), "$keyboard", void 0);
      callback(validate(self), "$game", void 0);
      callback(validate(self), "today", void 0);
      callback(validate(self), "lastPlayedTs", void 0);
      callback(validate(self), "lastCompletedTs", void 0);
      callback(validate(self), "hardMode", void 0);
      callback(validate(self), "dayOffset", void 0);
      self.attachShadow({
        mode : "open"
      });
      /** @type {!Date} */
      self.today = new Date;
      var data = parse();
      return self.lastPlayedTs = data.lastPlayedTs, !self.lastPlayedTs || cb(new Date(self.lastPlayedTs), self.today) >= 1 ? (self.boardState = (new Array(6)).fill(""), self.evaluations = (new Array(6)).fill(null), self.solution = isDate(self.today), self.dayOffset = join(self.today), self.lastCompletedTs = data.lastCompletedTs, self.hardMode = data.hardMode, self.restoringFromLocalStorage = false, done({
        rowIndex : self.rowIndex,
        boardState : self.boardState,
        evaluations : self.evaluations,
        solution : self.solution,
        gameStatus : self.gameStatus
      }), next("event", "level_start", {
        level_name : combine(self.solution)
      })) : (self.boardState = data.boardState, self.evaluations = data.evaluations, self.rowIndex = data.rowIndex, self.solution = data.solution, self.dayOffset = join(self.today), self.letterEvaluations = filter(self.boardState, self.evaluations), self.gameStatus = data.gameStatus, self.lastCompletedTs = data.lastCompletedTs, self.hardMode = data.hardMode, self.gameStatus !== exitCode && (self.canInput = false), self.restoringFromLocalStorage = true), self;
    }
    trigger(init, prop);
    var request = makeRequest(init);
    return test(init, [{
      key : "evaluateRow",
      value : function() {
        if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
          var value;
          var brickInput = this.$board.querySelectorAll("game-row")[this.rowIndex];
          var integer = this.boardState[this.rowIndex];
          if (value = integer, !updatedSet.includes(value) && !options.includes(value)) {
            return brickInput.setAttribute("invalid", ""), void this.addToast("Not in word list");
          }
          if (this.hardMode) {
            var that = function(x, obj, word) {
              if (!x || !obj || !word) {
                return {
                  validGuess : true
                };
              }
              /** @type {number} */
              var i = 0;
              for (; i < word.length; i++) {
                if (word[i] === y && x[i] !== obj[i]) {
                  return {
                    validGuess : false,
                    errorMessage : "".concat(ordinal(i + 1), " letter must be ").concat(obj[i].toUpperCase())
                  };
                }
              }
              var o = {};
              /** @type {number} */
              var k = 0;
              for (; k < word.length; k++) {
                if ([y, f].includes(word[k])) {
                  if (o[obj[k]]) {
                    o[obj[k]] += 1;
                  } else {
                    /** @type {number} */
                    o[obj[k]] = 1;
                  }
                }
              }
              var newValuesArr = x.split("").reduce(function(eventsDict, event) {
                return eventsDict[event] ? eventsDict[event] += 1 : eventsDict[event] = 1, eventsDict;
              }, {});
              var f;
              for (f in o) {
                if ((newValuesArr[f] || 0) < o[f]) {
                  return {
                    validGuess : false,
                    errorMessage : "Guess must contain ".concat(f.toUpperCase())
                  };
                }
              }
              return {
                validGuess : true
              };
            }(integer, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1]);
            var malakh = that.validGuess;
            var paramErrorMessage = that.errorMessage;
            if (!malakh) {
              return brickInput.setAttribute("invalid", ""), void this.addToast(paramErrorMessage || "Not valid in hard mode");
            }
          }
          var that = function(p, s) {
            /** @type {!IArrayLike<?>} */
            var v = Array(s.length).fill(bytes);
            /** @type {!IArrayLike<?>} */
            var eccBuffer = Array(s.length).fill(true);
            /** @type {!IArrayLike<?>} */
            var fdcache = Array(s.length).fill(true);
            /** @type {number} */
            var i = 0;
            for (; i < p.length; i++) {
              if (p[i] === s[i] && fdcache[i]) {
                /** @type {string} */
                v[i] = y;
                /** @type {boolean} */
                eccBuffer[i] = false;
                /** @type {boolean} */
                fdcache[i] = false;
              }
            }
            /** @type {number} */
            var t = 0;
            for (; t < p.length; t++) {
              var type = p[t];
              if (eccBuffer[t]) {
                /** @type {number} */
                var i = 0;
                for (; i < s.length; i++) {
                  var n = s[i];
                  if (fdcache[i] && type === n) {
                    /** @type {string} */
                    v[t] = f;
                    /** @type {boolean} */
                    fdcache[i] = false;
                    break;
                  }
                }
              }
            }
            return v;
          }(integer, this.solution);
          this.evaluations[this.rowIndex] = that;
          this.letterEvaluations = filter(this.boardState, this.evaluations);
          brickInput.evaluation = this.evaluations[this.rowIndex];
          this.rowIndex += 1;
          /** @type {boolean} */
          var eventName = this.rowIndex >= 6;
          var propertyName = that.every(function(guess) {
            return "correct" === guess;
          });
          if (eventName || propertyName) {
            draw({
              isWin : propertyName,
              isStreak : !!this.lastCompletedTs && 1 === cb(new Date(this.lastCompletedTs), new Date),
              numGuesses : this.rowIndex
            });
            done({
              lastCompletedTs : Date.now()
            });
            /** @type {string} */
            this.gameStatus = propertyName ? CONNECTING : obj;
            next("event", "level_end", {
              level_name : combine(this.solution),
              num_guesses : this.rowIndex,
              success : propertyName
            });
          }
          /** @type {number} */
          this.tileIndex = 0;
          /** @type {boolean} */
          this.canInput = false;
          done({
            rowIndex : this.rowIndex,
            boardState : this.boardState,
            evaluations : this.evaluations,
            solution : this.solution,
            gameStatus : this.gameStatus,
            lastPlayedTs : Date.now()
          });
        }
      }
    }, {
      key : "addLetter",
      value : function(recB) {
        if (this.gameStatus === exitCode) {
          if (this.canInput) {
            if (!(this.tileIndex >= 5)) {
              this.boardState[this.rowIndex] += recB;
              this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]);
              this.tileIndex += 1;
            }
          }
        }
      }
    }, {
      key : "removeLetter",
      value : function() {
        if (this.gameStatus === exitCode && this.canInput && !(this.tileIndex <= 0)) {
          this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
          var _ = this.$board.querySelectorAll("game-row")[this.rowIndex];
          if (this.boardState[this.rowIndex]) {
            _.setAttribute("letters", this.boardState[this.rowIndex]);
          } else {
            _.removeAttribute("letters");
          }
          _.removeAttribute("invalid");
          this.tileIndex -= 1;
        }
      }
    }, {
      key : "submitGuess",
      value : function() {
        if (this.gameStatus === exitCode && this.canInput) {
          if (5 !== this.tileIndex) {
            return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""), void this.addToast("Not enough letters");
          }
          this.evaluateRow();
        }
      }
    }, {
      key : "addToast",
      value : function(reason, label) {
        var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        /** @type {!Element} */
        var t = document.createElement("game-toast");
        t.setAttribute("text", reason);
        if (label) {
          t.setAttribute("duration", label);
        }
        if (s) {
          this.shadowRoot.querySelector("#system-toaster").prepend(t);
        } else {
          this.shadowRoot.querySelector("#game-toaster").prepend(t);
        }
      }
    }, {
      key : "sizeBoard",
      value : function() {
        var scrollbar_handle = this.shadowRoot.querySelector("#board-container");
        /** @type {number} */
        var x = Math.min(Math.floor(scrollbar_handle.clientHeight * (5 / 6)), 350);
        /** @type {number} */
        var predicted_answer = 6 * Math.floor(x / 5);
        /** @type {string} */
        this.$board.style.width = "".concat(x, "px");
        /** @type {string} */
        this.$board.style.height = "".concat(predicted_answer, "px");
      }
    }, {
      key : "showStatsModal",
      value : function() {
        var span = this.$game.querySelector("game-modal");
        /** @type {!Element} */
        var edit = document.createElement("game-stats");
        if (this.gameStatus === CONNECTING && this.rowIndex <= 6) {
          edit.setAttribute("highlight-guess", this.rowIndex);
        }
        edit.gameApp = this;
        span.appendChild(edit);
        span.setAttribute("open", "");
      }
    }, {
      key : "showHelpModal",
      value : function() {
        var e = this.$game.querySelector("game-modal");
        e.appendChild(document.createElement("game-help"));
        e.setAttribute("open", "");
      }
    }, {
      key : "connectedCallback",
      value : function() {
        var self = this;
        this.shadowRoot.appendChild(post.content.cloneNode(true));
        this.$game = this.shadowRoot.querySelector("#game");
        this.$board = this.shadowRoot.querySelector("#board");
        this.$keyboard = this.shadowRoot.querySelector("game-keyboard");
        this.sizeBoard();
        if (!this.lastPlayedTs) {
          setTimeout(function() {
            return self.showHelpModal();
          }, 100);
        }
        /** @type {number} */
        var prop = 0;
        for (; prop < 6; prop++) {
          /** @type {!Element} */
          var model = document.createElement("game-row");
          model.setAttribute("letters", this.boardState[prop]);
          model.setAttribute("length", 5);
          if (this.evaluations[prop]) {
            model.evaluation = this.evaluations[prop];
          }
          this.$board.appendChild(model);
        }
        this.$game.addEventListener("game-key-press", function(sender) {
          var s = sender.detail.key;
          if ("\u2190" === s || "Backspace" === s) {
            self.removeLetter();
          } else {
            if ("\u21b5" === s || "Enter" === s) {
              self.submitGuess();
            } else {
              if (choices.includes(s.toLowerCase())) {
                self.addLetter(s.toLowerCase());
              }
            }
          }
        });
        this.$game.addEventListener("game-last-tile-revealed-in-row", function(event) {
          self.$keyboard.letterEvaluations = self.letterEvaluations;
          if (self.rowIndex < 6) {
            /** @type {boolean} */
            self.canInput = true;
          }
          var r = self.$board.querySelectorAll("game-row")[self.rowIndex - 1];
          if ((event.path || event.composedPath && event.composedPath()).includes(r)) {
            if ([CONNECTING, obj].includes(self.gameStatus)) {
              if (self.restoringFromLocalStorage) {
                self.showStatsModal();
              } else {
                if (self.gameStatus === CONNECTING) {
                  r.setAttribute("win", "");
                  self.addToast(pedalboards[self.rowIndex - 1], 2E3);
                }
                if (self.gameStatus === obj) {
                  self.addToast(self.solution.toUpperCase(), 1 / 0);
                }
                setTimeout(function() {
                  self.showStatsModal();
                }, 2500);
              }
            }
            /** @type {boolean} */
            self.restoringFromLocalStorage = false;
          }
        });
        this.shadowRoot.addEventListener("game-setting-change", function(event) {
          var node = event.detail;
          var variableIdentifier = node.name;
          var connection = node.checked;
          var isDisabled = node.disabled;
          switch(variableIdentifier) {
            case "hard-mode":
              return void(isDisabled ? self.addToast("Hard mode can only be enabled at the start of a round", 1500, true) : (self.hardMode = connection, done({
                hardMode : connection
              })));
          }
        });
        this.shadowRoot.getElementById("settings-button").addEventListener("click", function(a) {
          var body = self.$game.querySelector("game-page");
          /** @type {!Text} */
          var debug = document.createTextNode("Settings");
          body.appendChild(debug);
          /** @type {!Element} */
          var node = document.createElement("game-settings");
          node.setAttribute("slot", "content");
          node.gameApp = self;
          body.appendChild(node);
          body.setAttribute("open", "");
        });
        this.shadowRoot.getElementById("help-button").addEventListener("click", function(a) {
          var s = self.$game.querySelector("game-page");
          /** @type {!Text} */
          var t = document.createTextNode("How to play");
          s.appendChild(t);
          /** @type {!Element} */
          var container = document.createElement("game-help");
          container.setAttribute("page", "");
          container.setAttribute("slot", "content");
          s.appendChild(container);
          s.setAttribute("open", "");
        });
        this.shadowRoot.getElementById("statistics-button").addEventListener("click", function(a) {
          self.showStatsModal();
        });
        window.addEventListener("resize", this.sizeBoard.bind(this));
      }
    }, {
      key : "disconnectedCallback",
      value : function() {
      }
    }, {
      key : "debugTools",
      value : function() {
        var i = this;
        this.shadowRoot.getElementById("debug-tools").appendChild(form.content.cloneNode(true));
        this.shadowRoot.getElementById("toast").addEventListener("click", function(a) {
          i.addToast("hello world");
        });
        this.shadowRoot.getElementById("modal").addEventListener("click", function(a) {
          var s = i.$game.querySelector("game-modal");
          /** @type {string} */
          s.textContent = "hello plz";
          s.setAttribute("open", "");
        });
        this.shadowRoot.getElementById("reveal").addEventListener("click", function() {
          i.evaluateRow();
        });
        this.shadowRoot.getElementById("shake").addEventListener("click", function() {
          i.$board.querySelectorAll("game-row")[i.rowIndex].setAttribute("invalid", "");
        });
        this.shadowRoot.getElementById("bounce").addEventListener("click", function() {
          var context = i.$board.querySelectorAll("game-row")[i.rowIndex - 1];
          if ("" === context.getAttribute("win")) {
            context.removeAttribute("win");
          } else {
            context.setAttribute("win", "");
          }
        });
      }
    }]), init;
  }(register(HTMLElement));
  customElements.define("game-app", DialogElement);
  /** @type {!Element} */
  var tabs = document.createElement("template");
  /** @type {string} */
  tabs.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(3E3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
  var XBabel2 = function(prop) {
    /**
     * @return {?}
     */
    function update() {
      var e;
      return extend(this, update), (e = api.call(this)).attachShadow({
        mode : "open"
      }), e;
    }
    trigger(update, prop);
    var api = makeRequest(update);
    return test(update, [{
      key : "connectedCallback",
      value : function() {
        var menu = this;
        this.shadowRoot.appendChild(tabs.content.cloneNode(true));
        this.addEventListener("click", function(a) {
          menu.shadowRoot.querySelector(".content").classList.add("closing");
        });
        this.shadowRoot.addEventListener("animationend", function(css) {
          if ("SlideOut" === css.animationName) {
            menu.shadowRoot.querySelector(".content").classList.remove("closing");
            menu.removeChild(menu.firstChild);
            menu.removeAttribute("open");
          }
        });
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-modal", XBabel2);
  /** @type {!Element} */
  var fragment = document.createElement("template");
  /** @type {string} */
  fragment.innerHTML = "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
  /** @type {!Element} */
  var templateNode = document.createElement("template");
  /** @type {string} */
  templateNode.innerHTML = "\n  <button>key</button>\n";
  /** @type {!Element} */
  var _temp = document.createElement("template");
  /** @type {string} */
  _temp.innerHTML = '\n  <div class="spacer"></div>\n';
  /** @type {!Array} */
  var pipelets = [["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"], ["-", "a", "s", "d", "f", "g", "h", "j", "k", "l", "-"], ["\u21b5", "z", "x", "c", "v", "b", "n", "m", "\u2190"]];
  var XDefined = function(prop) {
    /**
     * @return {?}
     */
    function update() {
      var element;
      return extend(this, update), callback(validate(element = api.call(this)), "_letterEvaluations", {}), element.attachShadow({
        mode : "open"
      }), element;
    }
    trigger(update, prop);
    var api = makeRequest(update);
    return test(update, [{
      key : "letterEvaluations",
      set : function(num) {
        /** @type {!Object} */
        this._letterEvaluations = num;
        this._render();
      }
    }, {
      key : "dispatchKeyPressEvent",
      value : function(e) {
        this.dispatchEvent(new CustomEvent("game-key-press", {
          bubbles : true,
          composed : true,
          detail : {
            key : e
          }
        }));
      }
    }, {
      key : "connectedCallback",
      value : function() {
        var base = this;
        this.shadowRoot.appendChild(fragment.content.cloneNode(true));
        this.$keyboard = this.shadowRoot.getElementById("keyboard");
        this.$keyboard.addEventListener("click", function(event) {
          var el = event.target.closest("button");
          if (el && base.$keyboard.contains(el)) {
            base.dispatchKeyPressEvent(el.dataset.key);
          }
        });
        window.addEventListener("keydown", function(event) {
          if (true !== event.repeat) {
            var s = event.key;
            /** @type {boolean} */
            var meta = event.metaKey;
            /** @type {boolean} */
            var ctrlPressed = event.ctrlKey;
            if (!(meta || ctrlPressed)) {
              if (choices.includes(s.toLowerCase()) || "Backspace" === s || "Enter" === s) {
                base.dispatchKeyPressEvent(s);
              }
            }
          }
        });
        this.$keyboard.addEventListener("transitionend", function(event) {
          var el = event.target.closest("button");
          if (el && base.$keyboard.contains(el)) {
            el.classList.remove("fade");
          }
        });
        pipelets.forEach(function(wrappersTemplates) {
          /** @type {!Element} */
          var s = document.createElement("div");
          s.classList.add("row");
          wrappersTemplates.forEach(function(char) {
            var span;
            if (char >= "a" && char <= "z" || "\u2190" === char || "\u21b5" === char) {
              if ((span = templateNode.content.cloneNode(true).firstElementChild).dataset.key = char, span.textContent = char, "\u2190" === char) {
                /** @type {!Element} */
                var t = document.createElement("game-icon");
                t.setAttribute("icon", "backspace");
                /** @type {string} */
                span.textContent = "";
                span.appendChild(t);
                span.classList.add("one-and-a-half");
              }
              if ("\u21b5" == char) {
                /** @type {string} */
                span.textContent = "enter";
                span.classList.add("one-and-a-half");
              }
            } else {
              (span = _temp.content.cloneNode(true).firstElementChild).classList.add(1 === char.length ? "half" : "one");
            }
            s.appendChild(span);
          });
          base.$keyboard.appendChild(s);
        });
        this._render();
      }
    }, {
      key : "_render",
      value : function() {
        var i;
        for (i in this._letterEvaluations) {
          var objectDiv = this.$keyboard.querySelector('[data-key="'.concat(i, '"]'));
          objectDiv.dataset.state = this._letterEvaluations[i];
          objectDiv.classList.add("fade");
        }
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-keyboard", XDefined);
  (function() {
    (console.warn || console.log).apply(console, arguments);
  }).bind("[clipboard-polyfill]");
  var dom;
  var list;
  var app;
  var comp;
  /** @type {(Navigator|undefined)} */
  var target = "undefined" == typeof navigator ? void 0 : navigator;
  var clipboard = null == target ? void 0 : target.clipboard;
  if (!(null === (dom = null == clipboard ? void 0 : clipboard.read) || void 0 === dom)) {
    dom.bind(clipboard);
  }
  if (!(null === (list = null == clipboard ? void 0 : clipboard.readText) || void 0 === list)) {
    list.bind(clipboard);
  }
  var renderMachines = (null === (app = null == clipboard ? void 0 : clipboard.write) || void 0 === app || app.bind(clipboard), null === (comp = null == clipboard ? void 0 : clipboard.writeText) || void 0 === comp ? void 0 : comp.bind(clipboard));
  /** @type {(Window|undefined)} */
  var _a = "undefined" == typeof window ? void 0 : window;
  /** @type {(Window|undefined)} */
  var state = (null == _a || _a.ClipboardItem, _a);
  /**
   * @return {undefined}
   */
  var e = function() {
    /** @type {boolean} */
    this.success = false;
  };
  /** @type {!Element} */
  var $template = document.createElement("template");
  /** @type {string} */
  $template.innerHTML = '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Statistics</h1>\n    <div id="statistics"></div>\n    <h1>Guess Distribution</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';
  /** @type {!Element} */
  var tpl = document.createElement("template");
  /** @type {string} */
  tpl.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
  /** @type {!Element} */
  var container = document.createElement("template");
  /** @type {string} */
  container.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
  /** @type {!Element} */
  var cached = document.createElement("template");
  /** @type {string} */
  cached.innerHTML = '\n  <div class="countdown">\n    <h1>Next BIRDLE</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      Share <game-icon icon="share"></game-icon>\n    </button>\n  </div>\n';
  var dragitemhomes = {
    currentStreak : "Current Streak",
    maxStreak : "Max Streak",
    winPercentage : "Win %",
    gamesPlayed : "Played",
    gamesWon : "Won",
    averageGuesses : "Av. Guesses"
  };
  var XProgressbarElement = function(prop) {
    /**
     * @return {?}
     */
    function update() {
      var self;
      return extend(this, update), callback(validate(self = api.call(this)), "stats", {}), callback(validate(self), "gameApp", void 0), self.attachShadow({
        mode : "open"
      }), self.stats = deepClone(), self;
    }
    trigger(update, prop);
    var api = makeRequest(update);
    return test(update, [{
      key : "connectedCallback",
      value : function() {
        var self = this;
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        var years = this.shadowRoot.getElementById("statistics");
        var overlay = this.shadowRoot.getElementById("guess-distribution");
        /** @type {number} */
        var total = Math.max.apply(Math, toArray(Object.values(this.stats.guesses)));
        if (Object.values(this.stats.guesses).every(function(canCreateDiscussions) {
          return 0 === canCreateDiscussions;
        })) {
          /** @type {!Element} */
          var cursor = document.createElement("div");
          cursor.classList.add("no-data");
          /** @type {string} */
          cursor.innerText = "No Data";
          overlay.appendChild(cursor);
        } else {
          /** @type {number} */
          var i = 1;
          for (; i < Object.keys(this.stats.guesses).length; i++) {
            /** @type {number} */
            var funcCode = i;
            var v = this.stats.guesses[i];
            var fragment = container.content.cloneNode(true);
            /** @type {number} */
            var x = Math.max(7, Math.round(v / total * 100));
            /** @type {number} */
            fragment.querySelector(".guess").textContent = funcCode;
            var visualsElement = fragment.querySelector(".graph-bar");
            if (visualsElement.style.width = "".concat(x, "%"), "number" == typeof v) {
              fragment.querySelector(".num-guesses").textContent = v;
              if (v > 0) {
                visualsElement.classList.add("align-right");
              }
              /** @type {number} */
              var t = parseInt(this.getAttribute("highlight-guess"), 10);
              if (t && i === t) {
                visualsElement.classList.add("highlight");
              }
            }
            overlay.appendChild(fragment);
          }
        }
        if (["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach(function(x) {
          var dragitemhome = dragitemhomes[x];
          var subwiki = self.stats[x];
          var span = tpl.content.cloneNode(true);
          span.querySelector(".label").textContent = dragitemhome;
          span.querySelector(".statistic").textContent = subwiki;
          years.appendChild(span);
        }), this.gameApp.gameStatus !== exitCode) {
          var tableRowElementOne = this.shadowRoot.querySelector(".footer");
          var tableDataCellElementOne = cached.content.cloneNode(true);
          tableRowElementOne.appendChild(tableDataCellElementOne);
          this.shadowRoot.querySelector("button#share-button").addEventListener("click", function(event) {
            event.preventDefault();
            event.stopPropagation();
            init(function(data) {
              var a = data.evaluations;
              var datas = data.dayOffset;
              var val = data.rowIndex;
              var currentAnime = data.isHardMode;
              /** @type {boolean} */
              var active = data.isWin;
              /** @type {*} */
              var element = JSON.parse(window.localStorage.getItem(shop_id));
              /** @type {*} */
              var i = JSON.parse(window.localStorage.getItem(STORE_ID));
              /** @type {string} */
              var level = "BIRDLE ".concat(datas);
              /** @type {string} */
              level = level + " ".concat(active ? val : "X", "/").concat(6);
              if (currentAnime) {
                /** @type {string} */
                level = level + "*";
              }
              /** @type {string} */
              var url = "";
              return a.forEach(function(wrappersTemplates) {
                if (wrappersTemplates) {
                  wrappersTemplates.forEach(function(type) {
                    if (type) {
                      /** @type {string} */
                      var p = "";
                      switch(type) {
                        case y:
                          p = function(aRoundNumber) {
                            return aRoundNumber ? "\ud83d\udfe7" : "\ud83d\udfe9";
                          }(i);
                          break;
                        case f:
                          p = function(aRoundNumber) {
                            return aRoundNumber ? "\ud83d\udfe6" : "\ud83d\udfe8";
                          }(i);
                          break;
                        case bytes:
                          p = function(suppressDisabledCheck) {
                            return suppressDisabledCheck ? "\u2b1b" : "\u2b1c";
                          }(element);
                      }
                      url = url + p;
                    }
                  });
                  url = url + "\n";
                }
              }), {
                text : "".concat(level, "\n\n").concat(url.trimEnd())
              };
            }({
              evaluations : self.gameApp.evaluations,
              dayOffset : self.gameApp.dayOffset,
              rowIndex : self.gameApp.rowIndex,
              isHardMode : self.gameApp.hardMode,
              isWin : self.gameApp.gameStatus === CONNECTING
            }), function() {
              self.gameApp.addToast("Copied results to clipboard", 2E3, true);
            }, function() {
              self.gameApp.addToast("Share failed", 2E3, true);
            });
          });
        }
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-stats", XProgressbarElement);
  /** @type {!Element} */
  var result = document.createElement("template");
  /** @type {string} */
  result.innerHTML = '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
  var XBabel = function(prop) {
    /**
     * @return {?}
     */
    function update() {
      var e;
      return extend(this, update), (e = api.call(this)).attachShadow({
        mode : "open"
      }), e;
    }
    trigger(update, prop);
    var api = makeRequest(update);
    return test(update, [{
      key : "connectedCallback",
      value : function() {
        var checkbox = this;
        this.shadowRoot.appendChild(result.content.cloneNode(true));
        this.shadowRoot.querySelector(".container").addEventListener("click", function(event) {
          event.stopPropagation();
          if (checkbox.hasAttribute("checked")) {
            checkbox.removeAttribute("checked");
          } else {
            checkbox.setAttribute("checked", "");
          }
          checkbox.dispatchEvent(new CustomEvent("game-switch-change", {
            bubbles : true,
            composed : true,
            detail : {
              name : checkbox.getAttribute("name"),
              checked : checkbox.hasAttribute("checked"),
              disabled : checkbox.hasAttribute("disabled")
            }
          }));
        });
      }
    }], [{
      key : "observedAttributes",
      get : function() {
        return ["checked"];
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-switch", XBabel);
  /** @type {!Element} */
  var element = document.createElement("template");
  /** @type {string} */
  element.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Guess the <strong>BIRDLE</strong> in 6 tries.</p>\n      <p>Each guess must be a valid 5 letter word. Hit the enter button to submit.</p>\n      <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>\n      <div class="examples">\n        <p><strong>Examples</strong></p>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="w" evaluation="correct" reveal></game-tile>\n            <game-tile letter="e"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="r"></game-tile>\n            <game-tile letter="y"></game-tile>\n          </div>\n          <p>The letter <strong>W</strong> is in the word and in the correct spot.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="p"></game-tile>\n            <game-tile letter="i" evaluation="present" reveal></game-tile>\n            <game-tile letter="l"></game-tile>\n            <game-tile letter="l"></game-tile>\n            <game-tile letter="s"></game-tile>\n          </div>\n          <p>The letter <strong>I</strong> is in the word but in the wrong spot.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="v"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="g"></game-tile>\n            <game-tile letter="u" evaluation="absent" reveal></game-tile>\n            <game-tile letter="e"></game-tile>\n          </div>\n          <p>The letter <strong>U</strong> is not in the word in any spot.</p>\n        </div>\n      </div>\n      <p><strong>A new BIRDLE will be available each day!<strong></p>\n    </div>\n  </section>\n';
  var XDrawerElement = function(prop) {
    /**
     * @return {?}
     */
    function update() {
      var e;
      return extend(this, update), (e = api.call(this)).attachShadow({
        mode : "open"
      }), e;
    }
    trigger(update, prop);
    var api = makeRequest(update);
    return test(update, [{
      key : "connectedCallback",
      value : function() {
        this.shadowRoot.appendChild(element.content.cloneNode(true));
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-help", XDrawerElement);
  /** @type {!Element} */
  var template = document.createElement("template");
  /** @type {string} */
  template.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(2E3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n');
  var XCheckboxElement = function(prop) {
    /**
     * @return {?}
     */
    function update() {
      var e;
      return extend(this, update), (e = api.call(this)).attachShadow({
        mode : "open"
      }), e;
    }
    trigger(update, prop);
    var api = makeRequest(update);
    return test(update, [{
      key : "connectedCallback",
      value : function() {
        var menu = this;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector("game-icon").addEventListener("click", function(a) {
          menu.shadowRoot.querySelector(".overlay").classList.add("closing");
        });
        this.shadowRoot.addEventListener("animationend", function(css) {
          if ("SlideOut" === css.animationName) {
            menu.shadowRoot.querySelector(".overlay").classList.remove("closing");
            Array.from(menu.childNodes).forEach(function(a) {
              menu.removeChild(a);
            });
            menu.removeAttribute("open");
          }
        });
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-page", XCheckboxElement);
  /** @type {!Element} */
  var templateElement = document.createElement("template");
  /** @type {string} */
  templateElement.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
  var opts = {
    help : "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
    settings : "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
    backspace : "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
    close : "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    share : "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
    statistics : "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"
  };
  var XThrobberElement = function(prop) {
    /**
     * @return {?}
     */
    function update() {
      var e;
      return extend(this, update), (e = api.call(this)).attachShadow({
        mode : "open"
      }), e;
    }
    trigger(update, prop);
    var api = makeRequest(update);
    return test(update, [{
      key : "connectedCallback",
      value : function() {
        this.shadowRoot.appendChild(templateElement.content.cloneNode(true));
        var index = this.getAttribute("icon");
        this.shadowRoot.querySelector("path").setAttribute("d", opts[index]);
        if ("backspace" === index) {
          this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)");
        }
        if ("share" === index) {
          this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)");
        }
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-icon", XThrobberElement);
  /** @type {!Element} */
  var s = document.createElement("template");
  /** @type {string} */
  s.innerHTML = '\n  <div id="timer"></div>\n';
  /** @type {number} */
  var msDay = 6E4;
  /** @type {number} */
  var msMonth = 36E5;
  var XIconElement = function(prop) {
    /**
     * @return {?}
     */
    function update() {
      var element;
      extend(this, update);
      callback(validate(element = config.call(this)), "targetEpochMS", void 0);
      callback(validate(element), "intervalId", void 0);
      callback(validate(element), "$timer", void 0);
      element.attachShadow({
        mode : "open"
      });
      /** @type {!Date} */
      var restart = new Date;
      return restart.setDate(restart.getDate() + 1), restart.setHours(0, 0, 0, 0), element.targetEpochMS = restart.getTime(), element;
    }
    trigger(update, prop);
    var config = makeRequest(update);
    return test(update, [{
      key : "padDigit",
      value : function(funcToEval) {
        return funcToEval.toString().padStart(2, "0");
      }
    }, {
      key : "updateTimer",
      value : function() {
        var funcCode;
        /** @type {number} */
        var lastKeyWidth = (new Date).getTime();
        /** @type {number} */
        var ms = Math.floor(this.targetEpochMS - lastKeyWidth);
        if (ms <= 0) {
          /** @type {string} */
          funcCode = "00:00:00";
        } else {
          /** @type {number} */
          var activeTicketIds = Math.floor(ms % 864E5 / msMonth);
          /** @type {number} */
          var objectsExpand = Math.floor(ms % msMonth / msDay);
          /** @type {number} */
          var subVariant = Math.floor(ms % msDay / 1E3);
          /** @type {string} */
          funcCode = "".concat(this.padDigit(activeTicketIds), ":").concat(this.padDigit(objectsExpand), ":").concat(this.padDigit(subVariant));
        }
        /** @type {string} */
        this.$timer.textContent = funcCode;
      }
    }, {
      key : "connectedCallback",
      value : function() {
        var self = this;
        this.shadowRoot.appendChild(s.content.cloneNode(true));
        this.$timer = this.shadowRoot.querySelector("#timer");
        /** @type {number} */
        this.intervalId = setInterval(function() {
          self.updateTimer();
        }, 200);
      }
    }, {
      key : "disconnectedCallback",
      value : function() {
        clearInterval(this.intervalId);
      }
    }]), update;
  }(register(HTMLElement));
  return customElements.define("countdown-timer", XIconElement), exports.CountdownTimer = XIconElement, exports.GameApp = DialogElement, exports.GameHelp = XDrawerElement, exports.GameIcon = XThrobberElement, exports.GameKeyboard = XDefined, exports.GameModal = XBabel2, exports.GamePage = XCheckboxElement, exports.GameRow = cls, exports.GameSettings = XelDemoElement, exports.GameStats = XProgressbarElement, exports.GameSwitch = XBabel, exports.GameThemeManager = SorTable, exports.GameTile = Class,
  exports.GameToast = ActionSheetButtonElement, Object.defineProperty(exports, "__esModule", {
    value : true
  }), exports;
}({});

