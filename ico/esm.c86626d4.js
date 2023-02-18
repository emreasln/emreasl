function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var parcelRequire = $parcel$global["parcelRequire716c"];
parcelRequire.register("gNOfV", function(module, exports) {
$parcel$export(module.exports, "JsonRpcProvider", () => (parcelRequire("cPxLc")).JsonRpcProvider);

var $cPxLc = parcelRequire("cPxLc");

var $cPxLc = parcelRequire("cPxLc");
var $c3b834baf8d1142b$export$2e2bcd8739ae039 = (0, $cPxLc.default);

});
parcelRequire.register("cPxLc", function(module, exports) {

$parcel$export(module.exports, "JsonRpcProvider", () => $95746f9086a15ed7$export$da28308012bf6748);
$parcel$export(module.exports, "default", () => $95746f9086a15ed7$export$2e2bcd8739ae039);

var $2fbJO = parcelRequire("2fbJO");
parcelRequire("kOodT");
var $jxMSy = parcelRequire("jxMSy");
var $3tlGJ = parcelRequire("3tlGJ");
var $k43TO = parcelRequire("k43TO");
class $95746f9086a15ed7$export$da28308012bf6748 extends (0, $k43TO.IJsonRpcProvider) {
    constructor(connection){
        super(connection);
        this.events = new (0, $2fbJO.EventEmitter)();
        this.hasRegisteredEventListeners = false;
        this.connection = this.setConnection(connection);
        if (this.connection.connected) this.registerEventListeners();
    }
    async connect(connection = this.connection) {
        await this.open(connection);
    }
    async disconnect() {
        await this.close();
    }
    on(event, listener) {
        this.events.on(event, listener);
    }
    once(event, listener) {
        this.events.once(event, listener);
    }
    off(event, listener) {
        this.events.off(event, listener);
    }
    removeListener(event, listener) {
        this.events.removeListener(event, listener);
    }
    async request(request, context) {
        return this.requestStrict((0, $jxMSy.formatJsonRpcRequest)(request.method, request.params || []), context);
    }
    async requestStrict(request, context) {
        return new Promise(async (resolve, reject)=>{
            if (!this.connection.connected) try {
                await this.open();
            } catch (e) {
                reject(e);
            }
            this.events.on(`${request.id}`, (response)=>{
                if ((0, $3tlGJ.isJsonRpcError)(response)) reject(response.error);
                else resolve(response.result);
            });
            try {
                await this.connection.send(request, context);
            } catch (e) {
                reject(e);
            }
        });
    }
    setConnection(connection = this.connection) {
        return connection;
    }
    onPayload(payload) {
        this.events.emit("payload", payload);
        if ((0, $3tlGJ.isJsonRpcResponse)(payload)) this.events.emit(`${payload.id}`, payload);
        else this.events.emit("message", {
            type: payload.method,
            data: payload.params
        });
    }
    async open(connection = this.connection) {
        if (this.connection === connection && this.connection.connected) return;
        if (this.connection.connected) this.close();
        if (typeof connection === "string") {
            await this.connection.open(connection);
            connection = this.connection;
        }
        this.connection = this.setConnection(connection);
        await this.connection.open();
        this.registerEventListeners();
        this.events.emit("connect");
    }
    async close() {
        await this.connection.close();
    }
    registerEventListeners() {
        if (this.hasRegisteredEventListeners) return;
        this.connection.on("payload", (payload)=>this.onPayload(payload));
        this.connection.on("close", ()=>this.events.emit("disconnect"));
        this.connection.on("error", (error)=>this.events.emit("error", error));
        this.hasRegisteredEventListeners = true;
    }
}
var $95746f9086a15ed7$export$2e2bcd8739ae039 = $95746f9086a15ed7$export$da28308012bf6748;

});
parcelRequire.register("2fbJO", function(module, exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
var $1a261667fe0583e9$var$R = typeof Reflect === "object" ? Reflect : null;
var $1a261667fe0583e9$var$ReflectApply = $1a261667fe0583e9$var$R && typeof $1a261667fe0583e9$var$R.apply === "function" ? $1a261667fe0583e9$var$R.apply : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
};
var $1a261667fe0583e9$var$ReflectOwnKeys;
if ($1a261667fe0583e9$var$R && typeof $1a261667fe0583e9$var$R.ownKeys === "function") $1a261667fe0583e9$var$ReflectOwnKeys = $1a261667fe0583e9$var$R.ownKeys;
else if (Object.getOwnPropertySymbols) $1a261667fe0583e9$var$ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
};
else $1a261667fe0583e9$var$ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
};
function $1a261667fe0583e9$var$ProcessEmitWarning(warning) {
    if (console && console.warn) console.warn(warning);
}
var $1a261667fe0583e9$var$NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
    return value !== value;
};
function $1a261667fe0583e9$var$EventEmitter() {
    $1a261667fe0583e9$var$EventEmitter.init.call(this);
}
module.exports = $1a261667fe0583e9$var$EventEmitter;
module.exports.once = $1a261667fe0583e9$var$once;
// Backwards-compat with node 0.10.x
$1a261667fe0583e9$var$EventEmitter.EventEmitter = $1a261667fe0583e9$var$EventEmitter;
$1a261667fe0583e9$var$EventEmitter.prototype._events = undefined;
$1a261667fe0583e9$var$EventEmitter.prototype._eventsCount = 0;
$1a261667fe0583e9$var$EventEmitter.prototype._maxListeners = undefined;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var $1a261667fe0583e9$var$defaultMaxListeners = 10;
function $1a261667fe0583e9$var$checkListener(listener) {
    if (typeof listener !== "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
}
Object.defineProperty($1a261667fe0583e9$var$EventEmitter, "defaultMaxListeners", {
    enumerable: true,
    get: function() {
        return $1a261667fe0583e9$var$defaultMaxListeners;
    },
    set: function(arg) {
        if (typeof arg !== "number" || arg < 0 || $1a261667fe0583e9$var$NumberIsNaN(arg)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
        $1a261667fe0583e9$var$defaultMaxListeners = arg;
    }
});
$1a261667fe0583e9$var$EventEmitter.init = function() {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
};
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
$1a261667fe0583e9$var$EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || $1a261667fe0583e9$var$NumberIsNaN(n)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
    this._maxListeners = n;
    return this;
};
function $1a261667fe0583e9$var$_getMaxListeners(that) {
    if (that._maxListeners === undefined) return $1a261667fe0583e9$var$EventEmitter.defaultMaxListeners;
    return that._maxListeners;
}
$1a261667fe0583e9$var$EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return $1a261667fe0583e9$var$_getMaxListeners(this);
};
$1a261667fe0583e9$var$EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for(var i = 1; i < arguments.length; i++)args.push(arguments[i]);
    var doError = type === "error";
    var events = this._events;
    if (events !== undefined) doError = doError && events.error === undefined;
    else if (!doError) return false;
    // If there is no 'error' event listener then throw.
    if (doError) {
        var er;
        if (args.length > 0) er = args[0];
        if (er instanceof Error) // Note: The comments on the `throw` lines are intentional, they show
        // up in Node's output if this results in an unhandled exception.
        throw er; // Unhandled 'error' event
        // At least give some kind of context to the user
        var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
        err.context = er;
        throw err; // Unhandled 'error' event
    }
    var handler = events[type];
    if (handler === undefined) return false;
    if (typeof handler === "function") $1a261667fe0583e9$var$ReflectApply(handler, this, args);
    else {
        var len = handler.length;
        var listeners = $1a261667fe0583e9$var$arrayClone(handler, len);
        for(var i = 0; i < len; ++i)$1a261667fe0583e9$var$ReflectApply(listeners[i], this, args);
    }
    return true;
};
function $1a261667fe0583e9$var$_addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;
    $1a261667fe0583e9$var$checkListener(listener);
    events = target._events;
    if (events === undefined) {
        events = target._events = Object.create(null);
        target._eventsCount = 0;
    } else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener !== undefined) {
            target.emit("newListener", type, listener.listener ? listener.listener : listener);
            // Re-assign `events` because a newListener handler could have caused the
            // this._events to be assigned to a new object
            events = target._events;
        }
        existing = events[type];
    }
    if (existing === undefined) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener;
        ++target._eventsCount;
    } else {
        if (typeof existing === "function") // Adding the second element, need to change to array.
        existing = events[type] = prepend ? [
            listener,
            existing
        ] : [
            existing,
            listener
        ];
        else if (prepend) existing.unshift(listener);
        else existing.push(listener);
        // Check for listener leak
        m = $1a261667fe0583e9$var$_getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true;
            // No error code for this since it is a Warning
            // eslint-disable-next-line no-restricted-syntax
            var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners " + "added. Use emitter.setMaxListeners() to " + "increase limit");
            w.name = "MaxListenersExceededWarning";
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            $1a261667fe0583e9$var$ProcessEmitWarning(w);
        }
    }
    return target;
}
$1a261667fe0583e9$var$EventEmitter.prototype.addListener = function addListener(type, listener) {
    return $1a261667fe0583e9$var$_addListener(this, type, listener, false);
};
$1a261667fe0583e9$var$EventEmitter.prototype.on = $1a261667fe0583e9$var$EventEmitter.prototype.addListener;
$1a261667fe0583e9$var$EventEmitter.prototype.prependListener = function prependListener(type, listener) {
    return $1a261667fe0583e9$var$_addListener(this, type, listener, true);
};
function $1a261667fe0583e9$var$onceWrapper() {
    if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
    }
}
function $1a261667fe0583e9$var$_onceWrap(target, type, listener) {
    var state = {
        fired: false,
        wrapFn: undefined,
        target: target,
        type: type,
        listener: listener
    };
    var wrapped = $1a261667fe0583e9$var$onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
}
$1a261667fe0583e9$var$EventEmitter.prototype.once = function once(type, listener) {
    $1a261667fe0583e9$var$checkListener(listener);
    this.on(type, $1a261667fe0583e9$var$_onceWrap(this, type, listener));
    return this;
};
$1a261667fe0583e9$var$EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    $1a261667fe0583e9$var$checkListener(listener);
    this.prependListener(type, $1a261667fe0583e9$var$_onceWrap(this, type, listener));
    return this;
};
// Emits a 'removeListener' event if and only if the listener was removed.
$1a261667fe0583e9$var$EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    var list, events, position, i, originalListener;
    $1a261667fe0583e9$var$checkListener(listener);
    events = this._events;
    if (events === undefined) return this;
    list = events[type];
    if (list === undefined) return this;
    if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) this._events = Object.create(null);
        else {
            delete events[type];
            if (events.removeListener) this.emit("removeListener", type, list.listener || listener);
        }
    } else if (typeof list !== "function") {
        position = -1;
        for(i = list.length - 1; i >= 0; i--)if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
        }
        if (position < 0) return this;
        if (position === 0) list.shift();
        else $1a261667fe0583e9$var$spliceOne(list, position);
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== undefined) this.emit("removeListener", type, originalListener || listener);
    }
    return this;
};
$1a261667fe0583e9$var$EventEmitter.prototype.off = $1a261667fe0583e9$var$EventEmitter.prototype.removeListener;
$1a261667fe0583e9$var$EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events, i;
    events = this._events;
    if (events === undefined) return this;
    // not listening for removeListener, no need to emit
    if (events.removeListener === undefined) {
        if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
        } else if (events[type] !== undefined) {
            if (--this._eventsCount === 0) this._events = Object.create(null);
            else delete events[type];
        }
        return this;
    }
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for(i = 0; i < keys.length; ++i){
            key = keys[i];
            if (key === "removeListener") continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
    }
    listeners = events[type];
    if (typeof listeners === "function") this.removeListener(type, listeners);
    else if (listeners !== undefined) // LIFO order
    for(i = listeners.length - 1; i >= 0; i--)this.removeListener(type, listeners[i]);
    return this;
};
function $1a261667fe0583e9$var$_listeners(target, type, unwrap) {
    var events = target._events;
    if (events === undefined) return [];
    var evlistener = events[type];
    if (evlistener === undefined) return [];
    if (typeof evlistener === "function") return unwrap ? [
        evlistener.listener || evlistener
    ] : [
        evlistener
    ];
    return unwrap ? $1a261667fe0583e9$var$unwrapListeners(evlistener) : $1a261667fe0583e9$var$arrayClone(evlistener, evlistener.length);
}
$1a261667fe0583e9$var$EventEmitter.prototype.listeners = function listeners(type) {
    return $1a261667fe0583e9$var$_listeners(this, type, true);
};
$1a261667fe0583e9$var$EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return $1a261667fe0583e9$var$_listeners(this, type, false);
};
$1a261667fe0583e9$var$EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === "function") return emitter.listenerCount(type);
    else return $1a261667fe0583e9$var$listenerCount.call(emitter, type);
};
$1a261667fe0583e9$var$EventEmitter.prototype.listenerCount = $1a261667fe0583e9$var$listenerCount;
function $1a261667fe0583e9$var$listenerCount(type) {
    var events = this._events;
    if (events !== undefined) {
        var evlistener = events[type];
        if (typeof evlistener === "function") return 1;
        else if (evlistener !== undefined) return evlistener.length;
    }
    return 0;
}
$1a261667fe0583e9$var$EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? $1a261667fe0583e9$var$ReflectOwnKeys(this._events) : [];
};
function $1a261667fe0583e9$var$arrayClone(arr, n) {
    var copy = new Array(n);
    for(var i = 0; i < n; ++i)copy[i] = arr[i];
    return copy;
}
function $1a261667fe0583e9$var$spliceOne(list, index) {
    for(; index + 1 < list.length; index++)list[index] = list[index + 1];
    list.pop();
}
function $1a261667fe0583e9$var$unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for(var i = 0; i < ret.length; ++i)ret[i] = arr[i].listener || arr[i];
    return ret;
}
function $1a261667fe0583e9$var$once(emitter, name) {
    return new Promise(function(resolve, reject) {
        function errorListener(err) {
            emitter.removeListener(name, resolver);
            reject(err);
        }
        function resolver() {
            if (typeof emitter.removeListener === "function") emitter.removeListener("error", errorListener);
            resolve([].slice.call(arguments));
        }
        $1a261667fe0583e9$var$eventTargetAgnosticAddListener(emitter, name, resolver, {
            once: true
        });
        if (name !== "error") $1a261667fe0583e9$var$addErrorHandlerIfEventEmitter(emitter, errorListener, {
            once: true
        });
    });
}
function $1a261667fe0583e9$var$addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === "function") $1a261667fe0583e9$var$eventTargetAgnosticAddListener(emitter, "error", handler, flags);
}
function $1a261667fe0583e9$var$eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === "function") {
        if (flags.once) emitter.once(name, listener);
        else emitter.on(name, listener);
    } else if (typeof emitter.addEventListener === "function") // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
        // IE does not have builtin `{ once: true }` support so we
        // have to do it manually.
        if (flags.once) emitter.removeEventListener(name, wrapListener);
        listener(arg);
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
}

});

parcelRequire.register("kOodT", function(module, exports) {
$parcel$export(module.exports, "parseConnectionError", () => (parcelRequire("gAOok")).parseConnectionError);
$parcel$export(module.exports, "formatJsonRpcError", () => (parcelRequire("5aBf0")).formatJsonRpcError);
$parcel$export(module.exports, "formatJsonRpcRequest", () => (parcelRequire("5aBf0")).formatJsonRpcRequest);
$parcel$export(module.exports, "formatJsonRpcResult", () => (parcelRequire("5aBf0")).formatJsonRpcResult);
$parcel$export(module.exports, "IJsonRpcProvider", () => (parcelRequire("5aBf0")).IJsonRpcProvider);
$parcel$export(module.exports, "isHttpUrl", () => (parcelRequire("5aBf0")).isHttpUrl);
$parcel$export(module.exports, "isJsonRpcError", () => (parcelRequire("5aBf0")).isJsonRpcError);
$parcel$export(module.exports, "isJsonRpcRequest", () => (parcelRequire("5aBf0")).isJsonRpcRequest);
$parcel$export(module.exports, "isJsonRpcResponse", () => (parcelRequire("5aBf0")).isJsonRpcResponse);
$parcel$export(module.exports, "isJsonRpcResult", () => (parcelRequire("5aBf0")).isJsonRpcResult);
$parcel$export(module.exports, "isLocalhostUrl", () => (parcelRequire("5aBf0")).isLocalhostUrl);
$parcel$export(module.exports, "isReactNative", () => (parcelRequire("5aBf0")).isReactNative);
$parcel$export(module.exports, "isWsUrl", () => (parcelRequire("5aBf0")).isWsUrl);
$parcel$export(module.exports, "parseConnectionError", () => (parcelRequire("5aBf0")).parseConnectionError);
$parcel$export(module.exports, "payloadId", () => (parcelRequire("5aBf0")).payloadId);
$parcel$export(module.exports, "formatJsonRpcError", () => (parcelRequire("jxMSy")).formatJsonRpcError);
$parcel$export(module.exports, "formatJsonRpcRequest", () => (parcelRequire("jxMSy")).formatJsonRpcRequest);
$parcel$export(module.exports, "formatJsonRpcResult", () => (parcelRequire("jxMSy")).formatJsonRpcResult);
$parcel$export(module.exports, "payloadId", () => (parcelRequire("jxMSy")).payloadId);
$parcel$export(module.exports, "formatJsonRpcError", () => (parcelRequire("buOij")).formatJsonRpcError);
$parcel$export(module.exports, "formatJsonRpcRequest", () => (parcelRequire("buOij")).formatJsonRpcRequest);
$parcel$export(module.exports, "formatJsonRpcResult", () => (parcelRequire("buOij")).formatJsonRpcResult);
$parcel$export(module.exports, "IJsonRpcProvider", () => (parcelRequire("k43TO")).IJsonRpcProvider);
$parcel$export(module.exports, "isHttpUrl", () => (parcelRequire("buOij")).isHttpUrl);
$parcel$export(module.exports, "isJsonRpcError", () => (parcelRequire("buOij")).isJsonRpcError);
$parcel$export(module.exports, "isJsonRpcRequest", () => (parcelRequire("buOij")).isJsonRpcRequest);
$parcel$export(module.exports, "isJsonRpcResponse", () => (parcelRequire("buOij")).isJsonRpcResponse);
$parcel$export(module.exports, "isJsonRpcResult", () => (parcelRequire("buOij")).isJsonRpcResult);
$parcel$export(module.exports, "isLocalhostUrl", () => (parcelRequire("buOij")).isLocalhostUrl);
$parcel$export(module.exports, "isReactNative", () => (parcelRequire("buOij")).isReactNative);
$parcel$export(module.exports, "isWsUrl", () => (parcelRequire("buOij")).isWsUrl);
$parcel$export(module.exports, "parseConnectionError", () => (parcelRequire("buOij")).parseConnectionError);
$parcel$export(module.exports, "payloadId", () => (parcelRequire("buOij")).payloadId);
$parcel$export(module.exports, "isHttpUrl", () => (parcelRequire("3kvYk")).isHttpUrl);
$parcel$export(module.exports, "isLocalhostUrl", () => (parcelRequire("3kvYk")).isLocalhostUrl);
$parcel$export(module.exports, "isWsUrl", () => (parcelRequire("3kvYk")).isWsUrl);
$parcel$export(module.exports, "isJsonRpcError", () => (parcelRequire("3tlGJ")).isJsonRpcError);
$parcel$export(module.exports, "isJsonRpcRequest", () => (parcelRequire("3tlGJ")).isJsonRpcRequest);
$parcel$export(module.exports, "isJsonRpcResponse", () => (parcelRequire("3tlGJ")).isJsonRpcResponse);
$parcel$export(module.exports, "isJsonRpcResult", () => (parcelRequire("3tlGJ")).isJsonRpcResult);
parcelRequire("6BZtS");
parcelRequire("gAOok");
parcelRequire("GHfJQ");
parcelRequire("jxMSy");
parcelRequire("ed5iH");
parcelRequire("eoIjX");
parcelRequire("3kvYk");
parcelRequire("3tlGJ");

});
parcelRequire.register("6BZtS", function(module, exports) {

$parcel$export(module.exports, "INTERNAL_ERROR", () => $4d05e39b6a11d3a1$export$f6e3abf3038d348f);
$parcel$export(module.exports, "SERVER_ERROR", () => $4d05e39b6a11d3a1$export$125ebd30471ac25c);
$parcel$export(module.exports, "RESERVED_ERROR_CODES", () => $4d05e39b6a11d3a1$export$af84821b5448ca78);
$parcel$export(module.exports, "SERVER_ERROR_CODE_RANGE", () => $4d05e39b6a11d3a1$export$fff5b44b15c75f69);
$parcel$export(module.exports, "STANDARD_ERROR_MAP", () => $4d05e39b6a11d3a1$export$cca5387ab287e1ae);
$parcel$export(module.exports, "DEFAULT_ERROR", () => $4d05e39b6a11d3a1$export$d166979eca925bce);
const $4d05e39b6a11d3a1$export$2ecaad7eb5cc1f25 = "PARSE_ERROR";
const $4d05e39b6a11d3a1$export$c77b2f9ece3946ce = "INVALID_REQUEST";
const $4d05e39b6a11d3a1$export$e8d537b30db778d6 = "METHOD_NOT_FOUND";
const $4d05e39b6a11d3a1$export$13aae195c7978fb1 = "INVALID_PARAMS";
const $4d05e39b6a11d3a1$export$f6e3abf3038d348f = "INTERNAL_ERROR";
const $4d05e39b6a11d3a1$export$125ebd30471ac25c = "SERVER_ERROR";
const $4d05e39b6a11d3a1$export$af84821b5448ca78 = [
    -32700,
    -32600,
    -32601,
    -32602,
    -32603
];
const $4d05e39b6a11d3a1$export$fff5b44b15c75f69 = [
    -32000,
    -32099
];
const $4d05e39b6a11d3a1$export$cca5387ab287e1ae = {
    [$4d05e39b6a11d3a1$export$2ecaad7eb5cc1f25]: {
        code: -32700,
        message: "Parse error"
    },
    [$4d05e39b6a11d3a1$export$c77b2f9ece3946ce]: {
        code: -32600,
        message: "Invalid Request"
    },
    [$4d05e39b6a11d3a1$export$e8d537b30db778d6]: {
        code: -32601,
        message: "Method not found"
    },
    [$4d05e39b6a11d3a1$export$13aae195c7978fb1]: {
        code: -32602,
        message: "Invalid params"
    },
    [$4d05e39b6a11d3a1$export$f6e3abf3038d348f]: {
        code: -32603,
        message: "Internal error"
    },
    [$4d05e39b6a11d3a1$export$125ebd30471ac25c]: {
        code: -32000,
        message: "Server error"
    }
};
const $4d05e39b6a11d3a1$export$d166979eca925bce = $4d05e39b6a11d3a1$export$125ebd30471ac25c;

});

parcelRequire.register("gAOok", function(module, exports) {

$parcel$export(module.exports, "isReservedErrorCode", () => $c14718d6036138fe$export$2ae0ec6393ab16c3);
$parcel$export(module.exports, "getError", () => $c14718d6036138fe$export$e1599abf47b5b568);
$parcel$export(module.exports, "getErrorByCode", () => $c14718d6036138fe$export$60a3bac005957e12);
$parcel$export(module.exports, "parseConnectionError", () => $c14718d6036138fe$export$f555d7d8f922e407);

var $6BZtS = parcelRequire("6BZtS");
function $c14718d6036138fe$export$e463129eb4bc487f(code) {
    return code <= (0, $6BZtS.SERVER_ERROR_CODE_RANGE)[0] && code >= (0, $6BZtS.SERVER_ERROR_CODE_RANGE)[1];
}
function $c14718d6036138fe$export$2ae0ec6393ab16c3(code) {
    return (0, $6BZtS.RESERVED_ERROR_CODES).includes(code);
}
function $c14718d6036138fe$export$7543109e66e1748d(code) {
    return typeof code === "number";
}
function $c14718d6036138fe$export$e1599abf47b5b568(type) {
    if (!Object.keys((0, $6BZtS.STANDARD_ERROR_MAP)).includes(type)) return (0, $6BZtS.STANDARD_ERROR_MAP)[0, $6BZtS.DEFAULT_ERROR];
    return (0, $6BZtS.STANDARD_ERROR_MAP)[type];
}
function $c14718d6036138fe$export$60a3bac005957e12(code) {
    const match = Object.values((0, $6BZtS.STANDARD_ERROR_MAP)).find((e)=>e.code === code);
    if (!match) return (0, $6BZtS.STANDARD_ERROR_MAP)[0, $6BZtS.DEFAULT_ERROR];
    return match;
}
function $c14718d6036138fe$export$6be064b82176dd99(response) {
    if (typeof response.error.code === "undefined") return {
        valid: false,
        error: "Missing code for JSON-RPC error"
    };
    if (typeof response.error.message === "undefined") return {
        valid: false,
        error: "Missing message for JSON-RPC error"
    };
    if (!$c14718d6036138fe$export$7543109e66e1748d(response.error.code)) return {
        valid: false,
        error: `Invalid error code type for JSON-RPC: ${response.error.code}`
    };
    if ($c14718d6036138fe$export$2ae0ec6393ab16c3(response.error.code)) {
        const error = $c14718d6036138fe$export$60a3bac005957e12(response.error.code);
        if (error.message !== (0, $6BZtS.STANDARD_ERROR_MAP)[0, $6BZtS.DEFAULT_ERROR].message && response.error.message === error.message) return {
            valid: false,
            error: `Invalid error code message for JSON-RPC: ${response.error.code}`
        };
    }
    return {
        valid: true
    };
}
function $c14718d6036138fe$export$f555d7d8f922e407(e, url, type) {
    return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${type} RPC url at ${url}`) : e;
}

});

parcelRequire.register("GHfJQ", function(module, exports) {

var $5aBf0 = parcelRequire("5aBf0");

var $5aBf0 = parcelRequire("5aBf0");
const $08057978ec882fce$export$d1694901a048d7c8 = (0, $5aBf0.isNode);
$parcel$exportWildcard(module.exports, $5aBf0);

});
parcelRequire.register("5aBf0", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $frFmb = parcelRequire("frFmb");

$frFmb.__exportStar((parcelRequire("hSiE5")), module.exports);

$frFmb.__exportStar((parcelRequire("hRvet")), module.exports);

});
parcelRequire.register("frFmb", function(module, exports) {

$parcel$export(module.exports, "__awaiter", () => $b3e975389288e776$export$1050f835b63b671e);
$parcel$export(module.exports, "__exportStar", () => $b3e975389288e776$export$f33643c0debef087);
$parcel$export(module.exports, "__importDefault", () => $b3e975389288e776$export$da59b14a69baef04);
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
***************************************************************************** */ /* global Reflect, Promise */ var $b3e975389288e776$var$extendStatics = function(d, b) {
    $b3e975389288e776$var$extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return $b3e975389288e776$var$extendStatics(d, b);
};
function $b3e975389288e776$export$a8ba968b8961cb8a(d, b) {
    $b3e975389288e776$var$extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var $b3e975389288e776$export$18ce0697a983be9b = function() {
    $b3e975389288e776$export$18ce0697a983be9b = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $b3e975389288e776$export$18ce0697a983be9b.apply(this, arguments);
};
function $b3e975389288e776$export$3c9a16f847548506(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function $b3e975389288e776$export$29e00dfd3077644b(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function $b3e975389288e776$export$d5ad3fd78186038f(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function $b3e975389288e776$export$f1db080c865becb9(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function $b3e975389288e776$export$1050f835b63b671e(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function $b3e975389288e776$export$67ebef60e6f28a6(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function $b3e975389288e776$export$45d3717a4c69092e(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}
function $b3e975389288e776$export$f33643c0debef087(m, exports) {
    for(var p in m)if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}
function $b3e975389288e776$export$19a8beecd37a4c45(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function $b3e975389288e776$export$8d051b38c9118094(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function $b3e975389288e776$export$afc72e2116322959() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat($b3e975389288e776$export$8d051b38c9118094(arguments[i]));
    return ar;
}
function $b3e975389288e776$export$6388937ca91ccae8() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function $b3e975389288e776$export$10c90e4f7922046c(v) {
    return this instanceof $b3e975389288e776$export$10c90e4f7922046c ? (this.v = v, this) : new $b3e975389288e776$export$10c90e4f7922046c(v);
}
function $b3e975389288e776$export$e427f37a30a4de9b(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof $b3e975389288e776$export$10c90e4f7922046c ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function $b3e975389288e776$export$bbd80228419bb833(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: $b3e975389288e776$export$10c90e4f7922046c(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
}
function $b3e975389288e776$export$e3b29a3d6162315f(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof $b3e975389288e776$export$19a8beecd37a4c45 === "function" ? $b3e975389288e776$export$19a8beecd37a4c45(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function $b3e975389288e776$export$4fb47efe1390b86f(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
function $b3e975389288e776$export$c21735bcef00d192(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }
    result.default = mod;
    return result;
}
function $b3e975389288e776$export$da59b14a69baef04(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function $b3e975389288e776$export$d5dcaf168c640c35(receiver, privateMap) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return privateMap.get(receiver);
}
function $b3e975389288e776$export$d40a35129aaff81f(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
    privateMap.set(receiver, value);
    return value;
}

});

parcelRequire.register("hSiE5", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.isBrowserCryptoAvailable = module.exports.getSubtleCrypto = module.exports.getBrowerCrypto = void 0;
function $d035f16b802fe59d$var$getBrowerCrypto() {
    return ($parcel$global === null || $parcel$global === void 0 ? void 0 : $parcel$global.crypto) || ($parcel$global === null || $parcel$global === void 0 ? void 0 : $parcel$global.msCrypto) || {};
}
module.exports.getBrowerCrypto = $d035f16b802fe59d$var$getBrowerCrypto;
function $d035f16b802fe59d$var$getSubtleCrypto() {
    const browserCrypto = $d035f16b802fe59d$var$getBrowerCrypto();
    return browserCrypto.subtle || browserCrypto.webkitSubtle;
}
module.exports.getSubtleCrypto = $d035f16b802fe59d$var$getSubtleCrypto;
function $d035f16b802fe59d$var$isBrowserCryptoAvailable() {
    return !!$d035f16b802fe59d$var$getBrowerCrypto() && !!$d035f16b802fe59d$var$getSubtleCrypto();
}
module.exports.isBrowserCryptoAvailable = $d035f16b802fe59d$var$isBrowserCryptoAvailable;

});

parcelRequire.register("hRvet", function(module, exports) {

var $4DZrq = parcelRequire("4DZrq");
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.isBrowser = module.exports.isNode = module.exports.isReactNative = void 0;
function $d00f9d0184e4e8ac$var$isReactNative() {
    return typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative";
}
module.exports.isReactNative = $d00f9d0184e4e8ac$var$isReactNative;
function $d00f9d0184e4e8ac$var$isNode() {
    return typeof $4DZrq !== "undefined" && typeof $4DZrq.versions !== "undefined" && typeof $4DZrq.versions.node !== "undefined";
}
module.exports.isNode = $d00f9d0184e4e8ac$var$isNode;
function $d00f9d0184e4e8ac$var$isBrowser() {
    return !$d00f9d0184e4e8ac$var$isReactNative() && !$d00f9d0184e4e8ac$var$isNode();
}
module.exports.isBrowser = $d00f9d0184e4e8ac$var$isBrowser;

});



parcelRequire.register("jxMSy", function(module, exports) {

$parcel$export(module.exports, "payloadId", () => $e3a703bdd80ef5c9$export$2f5364a5d4b80251);
$parcel$export(module.exports, "formatJsonRpcRequest", () => $e3a703bdd80ef5c9$export$11d081ebb32d4398);
$parcel$export(module.exports, "formatJsonRpcResult", () => $e3a703bdd80ef5c9$export$478fdea01c2a3198);
$parcel$export(module.exports, "formatJsonRpcError", () => $e3a703bdd80ef5c9$export$9f7302ae26c3f77);

var $gAOok = parcelRequire("gAOok");

var $6BZtS = parcelRequire("6BZtS");
function $e3a703bdd80ef5c9$export$2f5364a5d4b80251() {
    const date = Date.now() * Math.pow(10, 3);
    const extra = Math.floor(Math.random() * Math.pow(10, 3));
    return date + extra;
}
function $e3a703bdd80ef5c9$export$11d081ebb32d4398(method, params, id) {
    return {
        id: id || $e3a703bdd80ef5c9$export$2f5364a5d4b80251(),
        jsonrpc: "2.0",
        method: method,
        params: params
    };
}
function $e3a703bdd80ef5c9$export$478fdea01c2a3198(id, result) {
    return {
        id: id,
        jsonrpc: "2.0",
        result: result
    };
}
function $e3a703bdd80ef5c9$export$9f7302ae26c3f77(id, error, data) {
    return {
        id: id,
        jsonrpc: "2.0",
        error: $e3a703bdd80ef5c9$export$5201d50a34753d71(error, data)
    };
}
function $e3a703bdd80ef5c9$export$5201d50a34753d71(error, data) {
    if (typeof error === "undefined") return (0, $gAOok.getError)((0, $6BZtS.INTERNAL_ERROR));
    if (typeof error === "string") error = Object.assign(Object.assign({}, (0, $gAOok.getError)((0, $6BZtS.SERVER_ERROR))), {
        message: error
    });
    if (typeof data !== "undefined") error.data = data;
    if ((0, $gAOok.isReservedErrorCode)(error.code)) error = (0, $gAOok.getErrorByCode)(error.code);
    return error;
}

});

parcelRequire.register("ed5iH", function(module, exports) {
function $a586642f5f544217$export$9f3e656a7f6a3adc(route) {
    if (route.includes("*")) return $a586642f5f544217$export$8e8b9bea55b56df2(route);
    if (/\W/g.test(route)) return false;
    return true;
}
function $a586642f5f544217$export$c7e2040809cad2c4(route) {
    return route === "*";
}
function $a586642f5f544217$export$8e8b9bea55b56df2(route) {
    if ($a586642f5f544217$export$c7e2040809cad2c4(route)) return true;
    if (!route.includes("*")) return false;
    if (route.split("*").length !== 2) return false;
    if (route.split("*").filter((x)=>x.trim() === "").length !== 1) return false;
    return true;
}
function $a586642f5f544217$export$2d48faaafcc8fbdc(route) {
    return !$a586642f5f544217$export$c7e2040809cad2c4(route) && $a586642f5f544217$export$8e8b9bea55b56df2(route) && !route.split("*")[0].trim();
}
function $a586642f5f544217$export$be298a4710fab756(route) {
    return !$a586642f5f544217$export$c7e2040809cad2c4(route) && $a586642f5f544217$export$8e8b9bea55b56df2(route) && !route.split("*")[1].trim();
}

});

parcelRequire.register("eoIjX", function(module, exports) {

var $buOij = parcelRequire("buOij");
$parcel$exportWildcard(module.exports, $buOij);

});
parcelRequire.register("buOij", function(module, exports) {
$parcel$export(module.exports, "IJsonRpcConnection", () => (parcelRequire("k43TO")).IJsonRpcConnection);
$parcel$export(module.exports, "IJsonRpcProvider", () => (parcelRequire("k43TO")).IJsonRpcProvider);

var $4QoSK = parcelRequire("4QoSK");
parcelRequire("cxbj4");
parcelRequire("k43TO");

var $7pFoZ = parcelRequire("7pFoZ");
$parcel$exportWildcard(module.exports, $4QoSK);
$parcel$exportWildcard(module.exports, $7pFoZ);

});
parcelRequire.register("4QoSK", function(module, exports) {

});

parcelRequire.register("cxbj4", function(module, exports) {

$parcel$export(module.exports, "IEvents", () => $9201566002746f5b$export$ab429ec7e240e546);
class $9201566002746f5b$export$ab429ec7e240e546 {
}

});

parcelRequire.register("k43TO", function(module, exports) {

$parcel$export(module.exports, "IJsonRpcConnection", () => $e9b734a873bc6916$export$77d426dd89724fbe);
$parcel$export(module.exports, "IJsonRpcProvider", () => $e9b734a873bc6916$export$46957420a688a16d);

var $cxbj4 = parcelRequire("cxbj4");
class $e9b734a873bc6916$export$77d426dd89724fbe extends (0, $cxbj4.IEvents) {
    constructor(opts){
        super();
    }
}
class $e9b734a873bc6916$export$cb916a2eed49af33 extends (0, $cxbj4.IEvents) {
    constructor(){
        super();
    }
}
class $e9b734a873bc6916$export$46957420a688a16d extends $e9b734a873bc6916$export$cb916a2eed49af33 {
    constructor(connection){
        super();
    }
}

});

parcelRequire.register("7pFoZ", function(module, exports) {

});



parcelRequire.register("3kvYk", function(module, exports) {

$parcel$export(module.exports, "isHttpUrl", () => $26cc0a501c7f7bde$export$206c3129b8bb1b4f);
$parcel$export(module.exports, "isWsUrl", () => $26cc0a501c7f7bde$export$4e4463e75eccf20c);
$parcel$export(module.exports, "isLocalhostUrl", () => $26cc0a501c7f7bde$export$8eb4a0a481601f29);
const $26cc0a501c7f7bde$var$HTTP_REGEX = "^https?:";
const $26cc0a501c7f7bde$var$WS_REGEX = "^wss?:";
function $26cc0a501c7f7bde$var$getUrlProtocol(url) {
    const matches = url.match(new RegExp(/^\w+:/, "gi"));
    if (!matches || !matches.length) return;
    return matches[0];
}
function $26cc0a501c7f7bde$var$matchRegexProtocol(url, regex) {
    const protocol = $26cc0a501c7f7bde$var$getUrlProtocol(url);
    if (typeof protocol === "undefined") return false;
    return new RegExp(regex).test(protocol);
}
function $26cc0a501c7f7bde$export$206c3129b8bb1b4f(url) {
    return $26cc0a501c7f7bde$var$matchRegexProtocol(url, $26cc0a501c7f7bde$var$HTTP_REGEX);
}
function $26cc0a501c7f7bde$export$4e4463e75eccf20c(url) {
    return $26cc0a501c7f7bde$var$matchRegexProtocol(url, $26cc0a501c7f7bde$var$WS_REGEX);
}
function $26cc0a501c7f7bde$export$8eb4a0a481601f29(url) {
    return new RegExp("wss?://localhost(:d{2,5})?").test(url);
}

});

parcelRequire.register("3tlGJ", function(module, exports) {

$parcel$export(module.exports, "isJsonRpcRequest", () => $2874e75cb081f1f7$export$f6e4034abe07d2a5);
$parcel$export(module.exports, "isJsonRpcResponse", () => $2874e75cb081f1f7$export$308ba927de2bcbe8);
$parcel$export(module.exports, "isJsonRpcResult", () => $2874e75cb081f1f7$export$cb3d3b20e3223d77);
$parcel$export(module.exports, "isJsonRpcError", () => $2874e75cb081f1f7$export$5662a1047b4d1d15);
function $2874e75cb081f1f7$export$bf3617e9fafa893f(payload) {
    return typeof payload === "object" && "id" in payload && "jsonrpc" in payload && payload.jsonrpc === "2.0";
}
function $2874e75cb081f1f7$export$f6e4034abe07d2a5(payload) {
    return $2874e75cb081f1f7$export$bf3617e9fafa893f(payload) && "method" in payload;
}
function $2874e75cb081f1f7$export$308ba927de2bcbe8(payload) {
    return $2874e75cb081f1f7$export$bf3617e9fafa893f(payload) && ($2874e75cb081f1f7$export$cb3d3b20e3223d77(payload) || $2874e75cb081f1f7$export$5662a1047b4d1d15(payload));
}
function $2874e75cb081f1f7$export$cb3d3b20e3223d77(payload) {
    return "result" in payload;
}
function $2874e75cb081f1f7$export$5662a1047b4d1d15(payload) {
    return "error" in payload;
}
function $2874e75cb081f1f7$export$ae97720cc2d120d4(validation) {
    return "error" in validation && validation.valid === false;
}

});




parcelRequire.register("5xpVg", function(module, exports) {
$parcel$export(module.exports, "HttpConnection", () => (parcelRequire("6evAQ")).HttpConnection);

$parcel$export(module.exports, "default", () => $408424879c545572$export$2e2bcd8739ae039);

var $6evAQ = parcelRequire("6evAQ");

var $6evAQ = parcelRequire("6evAQ");
var $408424879c545572$export$2e2bcd8739ae039 = (0, $6evAQ.default);

});
parcelRequire.register("6evAQ", function(module, exports) {

$parcel$export(module.exports, "HttpConnection", () => $489c8eaa84c727e9$export$13c1f9cf8a283575);
$parcel$export(module.exports, "default", () => $489c8eaa84c727e9$export$2e2bcd8739ae039);

var $2fbJO = parcelRequire("2fbJO");

var $9lYNs = parcelRequire("9lYNs");

var $2nf8n = parcelRequire("2nf8n");
parcelRequire("kOodT");
var $3kvYk = parcelRequire("3kvYk");
var $jxMSy = parcelRequire("jxMSy");
var $gAOok = parcelRequire("gAOok");
const $489c8eaa84c727e9$var$DEFAULT_HTTP_HEADERS = {
    Accept: "application/json",
    "Content-Type": "application/json"
};
const $489c8eaa84c727e9$var$DEFAULT_HTTP_METHOD = "POST";
const $489c8eaa84c727e9$var$DEFAULT_FETCH_OPTS = {
    headers: $489c8eaa84c727e9$var$DEFAULT_HTTP_HEADERS,
    method: $489c8eaa84c727e9$var$DEFAULT_HTTP_METHOD
};
const $489c8eaa84c727e9$var$EVENT_EMITTER_MAX_LISTENERS_DEFAULT = 10;
class $489c8eaa84c727e9$export$13c1f9cf8a283575 {
    constructor(url){
        this.url = url;
        this.events = new (0, $2fbJO.EventEmitter)();
        this.isAvailable = false;
        this.registering = false;
        if (!(0, $3kvYk.isHttpUrl)(url)) throw new Error(`Provided URL is not compatible with HTTP connection: ${url}`);
        this.url = url;
    }
    get connected() {
        return this.isAvailable;
    }
    get connecting() {
        return this.registering;
    }
    on(event, listener) {
        this.events.on(event, listener);
    }
    once(event, listener) {
        this.events.once(event, listener);
    }
    off(event, listener) {
        this.events.off(event, listener);
    }
    removeListener(event, listener) {
        this.events.removeListener(event, listener);
    }
    async open(url = this.url) {
        await this.register(url);
    }
    async close() {
        if (!this.isAvailable) throw new Error("Connection already closed");
        this.onClose();
    }
    async send(payload, context) {
        if (!this.isAvailable) await this.register();
        try {
            const body = (0, $2nf8n.safeJsonStringify)(payload);
            const res = await (0, (/*@__PURE__*/$parcel$interopDefault($9lYNs)))(this.url, Object.assign(Object.assign({}, $489c8eaa84c727e9$var$DEFAULT_FETCH_OPTS), {
                body: body
            }));
            const data = await res.json();
            this.onPayload({
                data: data
            });
        } catch (e) {
            this.onError(payload.id, e);
        }
    }
    async register(url = this.url) {
        if (!(0, $3kvYk.isHttpUrl)(url)) throw new Error(`Provided URL is not compatible with HTTP connection: ${url}`);
        if (this.registering) {
            const currentMaxListeners = this.events.getMaxListeners();
            if (this.events.listenerCount("register_error") >= currentMaxListeners || this.events.listenerCount("open") >= currentMaxListeners) this.events.setMaxListeners(currentMaxListeners + 1);
            return new Promise((resolve, reject)=>{
                this.events.once("register_error", (error)=>{
                    this.resetMaxListeners();
                    reject(error);
                });
                this.events.once("open", ()=>{
                    this.resetMaxListeners();
                    if (typeof this.isAvailable === "undefined") return reject(new Error("HTTP connection is missing or invalid"));
                    resolve();
                });
            });
        }
        this.url = url;
        this.registering = true;
        try {
            const body = (0, $2nf8n.safeJsonStringify)({
                id: 1,
                jsonrpc: "2.0",
                method: "test",
                params: []
            });
            await (0, (/*@__PURE__*/$parcel$interopDefault($9lYNs)))(url, Object.assign(Object.assign({}, $489c8eaa84c727e9$var$DEFAULT_FETCH_OPTS), {
                body: body
            }));
            this.onOpen();
        } catch (e) {
            const error = this.parseError(e);
            this.events.emit("register_error", error);
            this.onClose();
            throw error;
        }
    }
    onOpen() {
        this.isAvailable = true;
        this.registering = false;
        this.events.emit("open");
    }
    onClose() {
        this.isAvailable = false;
        this.registering = false;
        this.events.emit("close");
    }
    onPayload(e) {
        if (typeof e.data === "undefined") return;
        const payload = typeof e.data === "string" ? (0, $2nf8n.safeJsonParse)(e.data) : e.data;
        this.events.emit("payload", payload);
    }
    onError(id, e) {
        const error = this.parseError(e);
        const message = error.message || error.toString();
        const payload = (0, $jxMSy.formatJsonRpcError)(id, message);
        this.events.emit("payload", payload);
    }
    parseError(e, url = this.url) {
        return (0, $gAOok.parseConnectionError)(e, url, "HTTP");
    }
    resetMaxListeners() {
        if (this.events.getMaxListeners() > $489c8eaa84c727e9$var$EVENT_EMITTER_MAX_LISTENERS_DEFAULT) this.events.setMaxListeners($489c8eaa84c727e9$var$EVENT_EMITTER_MAX_LISTENERS_DEFAULT);
    }
}
var $489c8eaa84c727e9$export$2e2bcd8739ae039 = $489c8eaa84c727e9$export$13c1f9cf8a283575;

});
parcelRequire.register("9lYNs", function(module, exports) {
var global = typeof self !== "undefined" ? self : this;
var __self__ = function() {
    function F() {
        this.fetch = false;
        this.DOMException = global.DOMException;
    }
    F.prototype = global;
    return new F();
}();
(function(self1) {
    var irrelevant = function(exports1) {
        var support = {
            searchParams: "URLSearchParams" in self1,
            iterable: "Symbol" in self1 && "iterator" in Symbol,
            blob: "FileReader" in self1 && "Blob" in self1 && function() {
                try {
                    new Blob();
                    return true;
                } catch (e) {
                    return false;
                }
            }(),
            formData: "FormData" in self1,
            arrayBuffer: "ArrayBuffer" in self1
        };
        function isDataView(obj) {
            return obj && DataView.prototype.isPrototypeOf(obj);
        }
        if (support.arrayBuffer) {
            var viewClasses = [
                "[object Int8Array]",
                "[object Uint8Array]",
                "[object Uint8ClampedArray]",
                "[object Int16Array]",
                "[object Uint16Array]",
                "[object Int32Array]",
                "[object Uint32Array]",
                "[object Float32Array]",
                "[object Float64Array]"
            ];
            var isArrayBufferView = ArrayBuffer.isView || function(obj) {
                return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
            };
        }
        function normalizeName(name) {
            if (typeof name !== "string") name = String(name);
            if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) throw new TypeError("Invalid character in header field name");
            return name.toLowerCase();
        }
        function normalizeValue(value) {
            if (typeof value !== "string") value = String(value);
            return value;
        }
        // Build a destructive iterator for the value list
        function iteratorFor(items) {
            var iterator = {
                next: function() {
                    var value = items.shift();
                    return {
                        done: value === undefined,
                        value: value
                    };
                }
            };
            if (support.iterable) iterator[Symbol.iterator] = function() {
                return iterator;
            };
            return iterator;
        }
        function Headers(headers) {
            this.map = {};
            if (headers instanceof Headers) headers.forEach(function(value, name) {
                this.append(name, value);
            }, this);
            else if (Array.isArray(headers)) headers.forEach(function(header) {
                this.append(header[0], header[1]);
            }, this);
            else if (headers) Object.getOwnPropertyNames(headers).forEach(function(name) {
                this.append(name, headers[name]);
            }, this);
        }
        Headers.prototype.append = function(name, value) {
            name = normalizeName(name);
            value = normalizeValue(value);
            var oldValue = this.map[name];
            this.map[name] = oldValue ? oldValue + ", " + value : value;
        };
        Headers.prototype["delete"] = function(name) {
            delete this.map[normalizeName(name)];
        };
        Headers.prototype.get = function(name) {
            name = normalizeName(name);
            return this.has(name) ? this.map[name] : null;
        };
        Headers.prototype.has = function(name) {
            return this.map.hasOwnProperty(normalizeName(name));
        };
        Headers.prototype.set = function(name, value) {
            this.map[normalizeName(name)] = normalizeValue(value);
        };
        Headers.prototype.forEach = function(callback, thisArg) {
            for(var name in this.map)if (this.map.hasOwnProperty(name)) callback.call(thisArg, this.map[name], name, this);
        };
        Headers.prototype.keys = function() {
            var items = [];
            this.forEach(function(value, name) {
                items.push(name);
            });
            return iteratorFor(items);
        };
        Headers.prototype.values = function() {
            var items = [];
            this.forEach(function(value) {
                items.push(value);
            });
            return iteratorFor(items);
        };
        Headers.prototype.entries = function() {
            var items = [];
            this.forEach(function(value, name) {
                items.push([
                    name,
                    value
                ]);
            });
            return iteratorFor(items);
        };
        if (support.iterable) Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
        function consumed(body) {
            if (body.bodyUsed) return Promise.reject(new TypeError("Already read"));
            body.bodyUsed = true;
        }
        function fileReaderReady(reader) {
            return new Promise(function(resolve, reject) {
                reader.onload = function() {
                    resolve(reader.result);
                };
                reader.onerror = function() {
                    reject(reader.error);
                };
            });
        }
        function readBlobAsArrayBuffer(blob) {
            var reader = new FileReader();
            var promise = fileReaderReady(reader);
            reader.readAsArrayBuffer(blob);
            return promise;
        }
        function readBlobAsText(blob) {
            var reader = new FileReader();
            var promise = fileReaderReady(reader);
            reader.readAsText(blob);
            return promise;
        }
        function readArrayBufferAsText(buf) {
            var view = new Uint8Array(buf);
            var chars = new Array(view.length);
            for(var i = 0; i < view.length; i++)chars[i] = String.fromCharCode(view[i]);
            return chars.join("");
        }
        function bufferClone(buf) {
            if (buf.slice) return buf.slice(0);
            else {
                var view = new Uint8Array(buf.byteLength);
                view.set(new Uint8Array(buf));
                return view.buffer;
            }
        }
        function Body() {
            this.bodyUsed = false;
            this._initBody = function(body) {
                this._bodyInit = body;
                if (!body) this._bodyText = "";
                else if (typeof body === "string") this._bodyText = body;
                else if (support.blob && Blob.prototype.isPrototypeOf(body)) this._bodyBlob = body;
                else if (support.formData && FormData.prototype.isPrototypeOf(body)) this._bodyFormData = body;
                else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this._bodyText = body.toString();
                else if (support.arrayBuffer && support.blob && isDataView(body)) {
                    this._bodyArrayBuffer = bufferClone(body.buffer);
                    // IE 10-11 can't handle a DataView body.
                    this._bodyInit = new Blob([
                        this._bodyArrayBuffer
                    ]);
                } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) this._bodyArrayBuffer = bufferClone(body);
                else this._bodyText = body = Object.prototype.toString.call(body);
                if (!this.headers.get("content-type")) {
                    if (typeof body === "string") this.headers.set("content-type", "text/plain;charset=UTF-8");
                    else if (this._bodyBlob && this._bodyBlob.type) this.headers.set("content-type", this._bodyBlob.type);
                    else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                }
            };
            if (support.blob) {
                this.blob = function() {
                    var rejected = consumed(this);
                    if (rejected) return rejected;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    else if (this._bodyArrayBuffer) return Promise.resolve(new Blob([
                        this._bodyArrayBuffer
                    ]));
                    else if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    else return Promise.resolve(new Blob([
                        this._bodyText
                    ]));
                };
                this.arrayBuffer = function() {
                    if (this._bodyArrayBuffer) return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
                    else return this.blob().then(readBlobAsArrayBuffer);
                };
            }
            this.text = function() {
                var rejected = consumed(this);
                if (rejected) return rejected;
                if (this._bodyBlob) return readBlobAsText(this._bodyBlob);
                else if (this._bodyArrayBuffer) return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
                else if (this._bodyFormData) throw new Error("could not read FormData body as text");
                else return Promise.resolve(this._bodyText);
            };
            if (support.formData) this.formData = function() {
                return this.text().then(decode);
            };
            this.json = function() {
                return this.text().then(JSON.parse);
            };
            return this;
        }
        // HTTP methods whose capitalization should be normalized
        var methods = [
            "DELETE",
            "GET",
            "HEAD",
            "OPTIONS",
            "POST",
            "PUT"
        ];
        function normalizeMethod(method) {
            var upcased = method.toUpperCase();
            return methods.indexOf(upcased) > -1 ? upcased : method;
        }
        function Request(input, options) {
            options = options || {};
            var body = options.body;
            if (input instanceof Request) {
                if (input.bodyUsed) throw new TypeError("Already read");
                this.url = input.url;
                this.credentials = input.credentials;
                if (!options.headers) this.headers = new Headers(input.headers);
                this.method = input.method;
                this.mode = input.mode;
                this.signal = input.signal;
                if (!body && input._bodyInit != null) {
                    body = input._bodyInit;
                    input.bodyUsed = true;
                }
            } else this.url = String(input);
            this.credentials = options.credentials || this.credentials || "same-origin";
            if (options.headers || !this.headers) this.headers = new Headers(options.headers);
            this.method = normalizeMethod(options.method || this.method || "GET");
            this.mode = options.mode || this.mode || null;
            this.signal = options.signal || this.signal;
            this.referrer = null;
            if ((this.method === "GET" || this.method === "HEAD") && body) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(body);
        }
        Request.prototype.clone = function() {
            return new Request(this, {
                body: this._bodyInit
            });
        };
        function decode(body) {
            var form = new FormData();
            body.trim().split("&").forEach(function(bytes) {
                if (bytes) {
                    var split = bytes.split("=");
                    var name = split.shift().replace(/\+/g, " ");
                    var value = split.join("=").replace(/\+/g, " ");
                    form.append(decodeURIComponent(name), decodeURIComponent(value));
                }
            });
            return form;
        }
        function parseHeaders(rawHeaders) {
            var headers = new Headers();
            // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
            // https://tools.ietf.org/html/rfc7230#section-3.2
            var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
            preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
                var parts = line.split(":");
                var key = parts.shift().trim();
                if (key) {
                    var value = parts.join(":").trim();
                    headers.append(key, value);
                }
            });
            return headers;
        }
        Body.call(Request.prototype);
        function Response(bodyInit, options) {
            if (!options) options = {};
            this.type = "default";
            this.status = options.status === undefined ? 200 : options.status;
            this.ok = this.status >= 200 && this.status < 300;
            this.statusText = "statusText" in options ? options.statusText : "OK";
            this.headers = new Headers(options.headers);
            this.url = options.url || "";
            this._initBody(bodyInit);
        }
        Body.call(Response.prototype);
        Response.prototype.clone = function() {
            return new Response(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new Headers(this.headers),
                url: this.url
            });
        };
        Response.error = function() {
            var response = new Response(null, {
                status: 0,
                statusText: ""
            });
            response.type = "error";
            return response;
        };
        var redirectStatuses = [
            301,
            302,
            303,
            307,
            308
        ];
        Response.redirect = function(url, status) {
            if (redirectStatuses.indexOf(status) === -1) throw new RangeError("Invalid status code");
            return new Response(null, {
                status: status,
                headers: {
                    location: url
                }
            });
        };
        exports1.DOMException = self1.DOMException;
        try {
            new exports1.DOMException();
        } catch (err) {
            exports1.DOMException = function(message, name) {
                this.message = message;
                this.name = name;
                var error = Error(message);
                this.stack = error.stack;
            };
            exports1.DOMException.prototype = Object.create(Error.prototype);
            exports1.DOMException.prototype.constructor = exports1.DOMException;
        }
        function fetch(input, init) {
            return new Promise(function(resolve, reject) {
                var request = new Request(input, init);
                if (request.signal && request.signal.aborted) return reject(new exports1.DOMException("Aborted", "AbortError"));
                var xhr = new XMLHttpRequest();
                function abortXhr() {
                    xhr.abort();
                }
                xhr.onload = function() {
                    var options = {
                        status: xhr.status,
                        statusText: xhr.statusText,
                        headers: parseHeaders(xhr.getAllResponseHeaders() || "")
                    };
                    options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
                    var body = "response" in xhr ? xhr.response : xhr.responseText;
                    resolve(new Response(body, options));
                };
                xhr.onerror = function() {
                    reject(new TypeError("Network request failed"));
                };
                xhr.ontimeout = function() {
                    reject(new TypeError("Network request failed"));
                };
                xhr.onabort = function() {
                    reject(new exports1.DOMException("Aborted", "AbortError"));
                };
                xhr.open(request.method, request.url, true);
                if (request.credentials === "include") xhr.withCredentials = true;
                else if (request.credentials === "omit") xhr.withCredentials = false;
                if ("responseType" in xhr && support.blob) xhr.responseType = "blob";
                request.headers.forEach(function(value, name) {
                    xhr.setRequestHeader(name, value);
                });
                if (request.signal) {
                    request.signal.addEventListener("abort", abortXhr);
                    xhr.onreadystatechange = function() {
                        // DONE (success or failure)
                        if (xhr.readyState === 4) request.signal.removeEventListener("abort", abortXhr);
                    };
                }
                xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
            });
        }
        fetch.polyfill = true;
        if (!self1.fetch) {
            self1.fetch = fetch;
            self1.Headers = Headers;
            self1.Request = Request;
            self1.Response = Response;
        }
        exports1.Headers = Headers;
        exports1.Request = Request;
        exports1.Response = Response;
        exports1.fetch = fetch;
        Object.defineProperty(exports1, "__esModule", {
            value: true
        });
        return exports1;
    }({});
})(__self__);
__self__.fetch.ponyfill = true;
// Remove "polyfill" property added by whatwg-fetch
delete __self__.fetch.polyfill;
// Choose between native implementation (global) or custom implementation (__self__)
// var ctx = global.fetch ? global : __self__;
var ctx = __self__; // this line disable service worker support temporarily
exports = ctx.fetch // To enable: import fetch from 'cross-fetch'
;
exports.default = ctx.fetch // For TypeScript consumers without esModuleInterop.
;
exports.fetch = ctx.fetch // To enable: import {fetch} from 'cross-fetch'
;
exports.Headers = ctx.Headers;
exports.Request = ctx.Request;
exports.Response = ctx.Response;
module.exports = exports;

});

parcelRequire.register("2nf8n", function(module, exports) {

$parcel$export(module.exports, "safeJsonParse", () => $1ba9781478607fc1$export$84137bb44359aed5);
$parcel$export(module.exports, "safeJsonStringify", () => $1ba9781478607fc1$export$abc3f407e87918a4);
function $1ba9781478607fc1$export$84137bb44359aed5(value) {
    if (typeof value !== "string") throw new Error(`Cannot safe json parse value of type ${typeof value}`);
    try {
        return JSON.parse(value);
    } catch (_a) {
        return value;
    }
}
function $1ba9781478607fc1$export$abc3f407e87918a4(value) {
    return typeof value === "string" ? value : JSON.stringify(value);
}

});



parcelRequire.register("jeE37", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getLocalStorage = module.exports.getLocalStorageOrThrow = module.exports.getCrypto = module.exports.getCryptoOrThrow = module.exports.getLocation = module.exports.getLocationOrThrow = module.exports.getNavigator = module.exports.getNavigatorOrThrow = module.exports.getDocument = module.exports.getDocumentOrThrow = module.exports.getFromWindowOrThrow = module.exports.getFromWindow = void 0;
function $e00e641aa9e28f5f$var$getFromWindow(name) {
    let res = undefined;
    if (typeof window !== "undefined" && typeof window[name] !== "undefined") res = window[name];
    return res;
}
module.exports.getFromWindow = $e00e641aa9e28f5f$var$getFromWindow;
function $e00e641aa9e28f5f$var$getFromWindowOrThrow(name) {
    const res = $e00e641aa9e28f5f$var$getFromWindow(name);
    if (!res) throw new Error(`${name} is not defined in Window`);
    return res;
}
module.exports.getFromWindowOrThrow = $e00e641aa9e28f5f$var$getFromWindowOrThrow;
function $e00e641aa9e28f5f$var$getDocumentOrThrow() {
    return $e00e641aa9e28f5f$var$getFromWindowOrThrow("document");
}
module.exports.getDocumentOrThrow = $e00e641aa9e28f5f$var$getDocumentOrThrow;
function $e00e641aa9e28f5f$var$getDocument() {
    return $e00e641aa9e28f5f$var$getFromWindow("document");
}
module.exports.getDocument = $e00e641aa9e28f5f$var$getDocument;
function $e00e641aa9e28f5f$var$getNavigatorOrThrow() {
    return $e00e641aa9e28f5f$var$getFromWindowOrThrow("navigator");
}
module.exports.getNavigatorOrThrow = $e00e641aa9e28f5f$var$getNavigatorOrThrow;
function $e00e641aa9e28f5f$var$getNavigator() {
    return $e00e641aa9e28f5f$var$getFromWindow("navigator");
}
module.exports.getNavigator = $e00e641aa9e28f5f$var$getNavigator;
function $e00e641aa9e28f5f$var$getLocationOrThrow() {
    return $e00e641aa9e28f5f$var$getFromWindowOrThrow("location");
}
module.exports.getLocationOrThrow = $e00e641aa9e28f5f$var$getLocationOrThrow;
function $e00e641aa9e28f5f$var$getLocation() {
    return $e00e641aa9e28f5f$var$getFromWindow("location");
}
module.exports.getLocation = $e00e641aa9e28f5f$var$getLocation;
function $e00e641aa9e28f5f$var$getCryptoOrThrow() {
    return $e00e641aa9e28f5f$var$getFromWindowOrThrow("crypto");
}
module.exports.getCryptoOrThrow = $e00e641aa9e28f5f$var$getCryptoOrThrow;
function $e00e641aa9e28f5f$var$getCrypto() {
    return $e00e641aa9e28f5f$var$getFromWindow("crypto");
}
module.exports.getCrypto = $e00e641aa9e28f5f$var$getCrypto;
function $e00e641aa9e28f5f$var$getLocalStorageOrThrow() {
    return $e00e641aa9e28f5f$var$getFromWindowOrThrow("localStorage");
}
module.exports.getLocalStorageOrThrow = $e00e641aa9e28f5f$var$getLocalStorageOrThrow;
function $e00e641aa9e28f5f$var$getLocalStorage() {
    return $e00e641aa9e28f5f$var$getFromWindow("localStorage");
}
module.exports.getLocalStorage = $e00e641aa9e28f5f$var$getLocalStorage;

});

parcelRequire.register("lvgdx", function(module, exports) {
"use strict";
module.exports = (str)=>encodeURIComponent(str).replace(/[!'()*]/g, (x)=>`%${x.charCodeAt(0).toString(16).toUpperCase()}`);

});

parcelRequire.register("7zHv8", function(module, exports) {
"use strict";
var $583d8bb4dce94825$var$token = "%[a-f0-9]{2}";
var $583d8bb4dce94825$var$singleMatcher = new RegExp("(" + $583d8bb4dce94825$var$token + ")|([^%]+?)", "gi");
var $583d8bb4dce94825$var$multiMatcher = new RegExp("(" + $583d8bb4dce94825$var$token + ")+", "gi");
function $583d8bb4dce94825$var$decodeComponents(components, split) {
    try {
        // Try to decode the entire string first
        return [
            decodeURIComponent(components.join(""))
        ];
    } catch (err) {
    // Do nothing
    }
    if (components.length === 1) return components;
    split = split || 1;
    // Split the array in 2 parts
    var left = components.slice(0, split);
    var right = components.slice(split);
    return Array.prototype.concat.call([], $583d8bb4dce94825$var$decodeComponents(left), $583d8bb4dce94825$var$decodeComponents(right));
}
function $583d8bb4dce94825$var$decode(input) {
    try {
        return decodeURIComponent(input);
    } catch (err) {
        var tokens = input.match($583d8bb4dce94825$var$singleMatcher) || [];
        for(var i = 1; i < tokens.length; i++){
            input = $583d8bb4dce94825$var$decodeComponents(tokens, i).join("");
            tokens = input.match($583d8bb4dce94825$var$singleMatcher) || [];
        }
        return input;
    }
}
function $583d8bb4dce94825$var$customDecodeURIComponent(input) {
    // Keep track of all the replacements and prefill the map with the `BOM`
    var replaceMap = {
        "%FE%FF": "��",
        "%FF%FE": "��"
    };
    var match = $583d8bb4dce94825$var$multiMatcher.exec(input);
    while(match){
        try {
            // Decode as big chunks as possible
            replaceMap[match[0]] = decodeURIComponent(match[0]);
        } catch (err) {
            var result = $583d8bb4dce94825$var$decode(match[0]);
            if (result !== match[0]) replaceMap[match[0]] = result;
        }
        match = $583d8bb4dce94825$var$multiMatcher.exec(input);
    }
    // Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
    replaceMap["%C2"] = "�";
    var entries = Object.keys(replaceMap);
    for(var i = 0; i < entries.length; i++){
        // Replace all decoded components
        var key = entries[i];
        input = input.replace(new RegExp(key, "g"), replaceMap[key]);
    }
    return input;
}
module.exports = function(encodedURI) {
    if (typeof encodedURI !== "string") throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof encodedURI + "`");
    try {
        encodedURI = encodedURI.replace(/\+/g, " ");
        // Try the built in decoder first
        return decodeURIComponent(encodedURI);
    } catch (err) {
        // Fallback to a more advanced decoder
        return $583d8bb4dce94825$var$customDecodeURIComponent(encodedURI);
    }
};

});

parcelRequire.register("ed263", function(module, exports) {
"use strict";
module.exports = (string, separator)=>{
    if (!(typeof string === "string" && typeof separator === "string")) throw new TypeError("Expected the arguments to be of type `string`");
    if (separator === "") return [
        string
    ];
    const separatorIndex = string.indexOf(separator);
    if (separatorIndex === -1) return [
        string
    ];
    return [
        string.slice(0, separatorIndex),
        string.slice(separatorIndex + separator.length)
    ];
};

});


//# sourceMappingURL=esm.c86626d4.js.map
