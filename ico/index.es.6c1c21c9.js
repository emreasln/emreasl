function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
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
var parcelRequire = $parcel$global["parcelRequire716c"];
parcelRequire.register("8QmCb", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $6704b8ea905d519e$export$2e2bcd8739ae039);
$parcel$export(module.exports, "UniversalProvider", () => $6704b8ea905d519e$export$63bc40680ab52599);

var $aq96k = parcelRequire("aq96k");

var $et0Rx = parcelRequire("et0Rx");

var $aVlNn = parcelRequire("aVlNn");

var $giNA3 = parcelRequire("giNA3");

var $gNOfV = parcelRequire("gNOfV");

var $5xpVg = parcelRequire("5xpVg");

var $2fbJO = parcelRequire("2fbJO");
function $6704b8ea905d519e$var$y(i) {
    var t;
    const e = (t = i[Object.keys(i)[0]]) == null ? void 0 : t.chains[0];
    return [
        e.split(":")[0],
        e.split(":")[1]
    ];
}
function $6704b8ea905d519e$var$r(i, t) {
    let e;
    return t.rpcMap && (e = t.rpcMap[$6704b8ea905d519e$var$O([
        i
    ])]), e;
}
function $6704b8ea905d519e$var$O(i) {
    return Number(i[0].split(":")[1]);
}
class $6704b8ea905d519e$var$E {
    constructor(t){
        this.name = "eip155", this.namespace = t.namespace, this.client = t.client, this.events = t.events, this.httpProviders = this.createHttpProviders(), this.chainId = this.getDefaultChainId();
    }
    async request(t) {
        var e;
        switch(t.request.method){
            case "eth_requestAccounts":
                return this.getAccounts();
            case "eth_accounts":
                return this.getAccounts();
            case "wallet_switchEthereumChain":
                {
                    const s = t.request.params ? (e = t.request.params[0]) == null ? void 0 : e.chainId : "0x0";
                    return this.setDefaultChain(parseInt(s, 16).toString()), null;
                }
            case "eth_chainId":
                return this.getDefaultChainId();
        }
        return this.namespace.methods.includes(t.request.method) ? await this.client.request(t) : this.getHttpProvider().request(t.request);
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t);
    }
    setDefaultChain(t, e) {
        if (this.chainId = parseInt(t), !this.httpProviders[t]) {
            const s = e || $6704b8ea905d519e$var$r(`${this.name}:${t}`, this.namespace);
            if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
            this.setHttpProvider(t, s);
        }
        this.events.emit("chainChanged", this.chainId);
    }
    requestAccounts() {
        return this.getAccounts();
    }
    createHttpProvider(t, e) {
        const s = e || $6704b8ea905d519e$var$r(t, this.namespace);
        return typeof s > "u" ? void 0 : new (0, $gNOfV.JsonRpcProvider)(new (0, $5xpVg.HttpConnection)(s));
    }
    setHttpProvider(t, e) {
        const s = this.createHttpProvider(t, e);
        s && (this.httpProviders[t] = s);
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach((e)=>{
            t[e] = this.createHttpProvider(e);
        }), t;
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? t.filter((e)=>e.split(":")[1] === this.chainId.toString()).map((e)=>e.split(":")[2]) || [] : [];
    }
    getDefaultChainId() {
        if (this.chainId) return this.chainId;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return parseInt(t.split(":")[1]);
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
        if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return e;
    }
}
class $6704b8ea905d519e$var$q {
    constructor(t){
        this.name = "solana", this.namespace = t.namespace, this.events = t.events, this.client = t.client, this.chainId = this.getDefaultChainId(), this.httpProviders = this.createHttpProviders();
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t);
    }
    requestAccounts() {
        return this.getAccounts();
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? t.filter((e)=>e.split(":")[1] === this.chainId.toString()).map((e)=>e.split(":")[2]) || [] : [];
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach((e)=>{
            t[e] = this.createHttpProvider(e);
        }), t;
    }
    getDefaultChainId() {
        if (this.chainId) return this.chainId;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1];
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
        if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return e;
    }
    setDefaultChain(t, e) {
        if (this.chainId = t, !this.httpProviders[t]) {
            const s = e || $6704b8ea905d519e$var$r(`${this.name}:${t}`, this.namespace);
            if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
            this.setHttpProvider(t, s);
        }
        this.events.emit("chainChanged", this.chainId);
    }
    setHttpProvider(t, e) {
        const s = this.createHttpProvider(t, e);
        s && (this.httpProviders[t] = s);
    }
    createHttpProvider(t, e) {
        const s = e || $6704b8ea905d519e$var$r(t, this.namespace);
        return typeof s > "u" ? void 0 : new (0, $gNOfV.JsonRpcProvider)(new (0, $5xpVg.default)(s));
    }
}
class $6704b8ea905d519e$var$H {
    constructor(t){
        this.name = "cosmos", this.namespace = t.namespace, this.events = t.events, this.client = t.client, this.chainId = this.getDefaultChainId(), this.httpProviders = this.createHttpProviders();
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t);
    }
    requestAccounts() {
        return this.getAccounts();
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? t.filter((e)=>e.split(":")[1] === this.chainId.toString()).map((e)=>e.split(":")[2]) || [] : [];
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach((e)=>{
            t[e] = this.createHttpProvider(e);
        }), t;
    }
    getDefaultChainId() {
        if (this.chainId) return this.chainId;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1];
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
        if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return e;
    }
    setDefaultChain(t, e) {
        if (this.chainId = t, !this.httpProviders[t]) {
            const s = e || $6704b8ea905d519e$var$r(`${this.name}:${t}`, this.namespace);
            if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
            this.setHttpProvider(t, s);
        }
        this.events.emit("chainChanged", this.chainId);
    }
    setHttpProvider(t, e) {
        const s = this.createHttpProvider(t, e);
        s && (this.httpProviders[t] = s);
    }
    createHttpProvider(t, e) {
        const s = e || $6704b8ea905d519e$var$r(t, this.namespace);
        return typeof s > "u" ? void 0 : new (0, $gNOfV.JsonRpcProvider)(new (0, $5xpVg.default)(s));
    }
}
class $6704b8ea905d519e$var$$ {
    constructor(t){
        this.name = "cip34", this.namespace = t.namespace, this.events = t.events, this.client = t.client, this.chainId = this.getDefaultChainId(), this.httpProviders = this.createHttpProviders();
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t);
    }
    requestAccounts() {
        return this.getAccounts();
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? t.filter((e)=>e.split(":")[1] === this.chainId.toString()).map((e)=>e.split(":")[2]) || [] : [];
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach((e)=>{
            t[e] = this.createHttpProvider(e);
        }), t;
    }
    getDefaultChainId() {
        if (this.chainId) return this.chainId;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1];
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
        if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return e;
    }
    setDefaultChain(t, e) {
        if (this.chainId = t, !this.httpProviders[t]) {
            const s = e || $6704b8ea905d519e$var$r(`${this.name}:${t}`, this.namespace);
            if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
            this.setHttpProvider(t, s);
        }
        this.events.emit("chainChanged", this.chainId);
    }
    setHttpProvider(t, e) {
        const s = this.createHttpProvider(t, e);
        s && (this.httpProviders[t] = s);
    }
    createHttpProvider(t, e) {
        const s = e || $6704b8ea905d519e$var$r(t, this.namespace);
        return typeof s > "u" ? void 0 : new (0, $gNOfV.JsonRpcProvider)(new (0, $5xpVg.default)(s));
    }
}
const $6704b8ea905d519e$var$h = "error", $6704b8ea905d519e$var$b = "wss://relay.walletconnect.com", $6704b8ea905d519e$var$S = "wc", $6704b8ea905d519e$var$A = "universal_provider", $6704b8ea905d519e$var$p = `${$6704b8ea905d519e$var$S}@${2}:${$6704b8ea905d519e$var$A}:`;
var $6704b8ea905d519e$var$N = Object.defineProperty, $6704b8ea905d519e$var$D = Object.defineProperties, $6704b8ea905d519e$var$j = Object.getOwnPropertyDescriptors, $6704b8ea905d519e$var$d = Object.getOwnPropertySymbols, $6704b8ea905d519e$var$k = Object.prototype.hasOwnProperty, $6704b8ea905d519e$var$R = Object.prototype.propertyIsEnumerable, $6704b8ea905d519e$var$l = (i, t, e)=>t in i ? $6704b8ea905d519e$var$N(i, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : i[t] = e, $6704b8ea905d519e$var$u = (i, t)=>{
    for(var e in t || (t = {}))$6704b8ea905d519e$var$k.call(t, e) && $6704b8ea905d519e$var$l(i, e, t[e]);
    if ($6704b8ea905d519e$var$d) for (var e of $6704b8ea905d519e$var$d(t))$6704b8ea905d519e$var$R.call(t, e) && $6704b8ea905d519e$var$l(i, e, t[e]);
    return i;
}, $6704b8ea905d519e$var$_ = (i, t)=>$6704b8ea905d519e$var$D(i, $6704b8ea905d519e$var$j(t));
class $6704b8ea905d519e$export$2e2bcd8739ae039 {
    constructor(t){
        this.events = new (0, (/*@__PURE__*/$parcel$interopDefault($2fbJO))), this.rpcProviders = {}, this.providerOpts = t, this.logger = typeof t?.logger < "u" && typeof t?.logger != "string" ? t.logger : (0, (/*@__PURE__*/$parcel$interopDefault($aq96k)))((0, $giNA3.getDefaultLoggerOptions)({
            level: t?.logger || $6704b8ea905d519e$var$h
        }));
    }
    static async init(t) {
        const e = new $6704b8ea905d519e$export$2e2bcd8739ae039(t);
        return await e.initialize(), e;
    }
    async request(t, e) {
        const [s, n] = this.validateChain(e);
        if (!this.session) throw new Error("Please call connect() before request()");
        return await this.getProvider(s).request({
            request: $6704b8ea905d519e$var$u({}, t),
            chainId: `${s}:${n}`,
            topic: this.session.topic
        });
    }
    sendAsync(t, e, s) {
        this.request(t, s).then((n)=>e(null, n)).catch((n)=>e(n, void 0));
    }
    async enable() {
        if (!this.client) throw new Error("Sign Client not initialized");
        return this.session || await this.connect({
            namespaces: this.namespaces
        }), await this.requestAccounts();
    }
    async disconnect() {
        var t;
        if (!this.session) throw new Error("Please call connect() before enable()");
        await this.client.disconnect({
            topic: (t = this.session) == null ? void 0 : t.topic,
            reason: (0, $aVlNn.getSdkError)("USER_DISCONNECTED")
        }), await this.cleanup();
    }
    async connect(t) {
        if (!this.client) throw new Error("Sign Client not initialized");
        const { namespaces: e  } = t;
        return this.setNamespaces(e), this.createProviders(), await this.cleanupPendingPairings(), t.skipPairing === !0 ? void 0 : await this.pair(t.pairingTopic);
    }
    on(t, e) {
        this.events.on(t, e);
    }
    once(t, e) {
        this.events.once(t, e);
    }
    removeListener(t, e) {
        this.events.removeListener(t, e);
    }
    off(t, e) {
        this.events.off(t, e);
    }
    get isWalletConnect() {
        return !0;
    }
    async pair(t) {
        const { uri: e , approval: s  } = await this.client.connect({
            pairingTopic: t,
            requiredNamespaces: this.namespaces
        });
        return e && (this.uri = e, this.events.emit("display_uri", e)), this.session = await s(), this.onSessionUpdate(), this.onConnect(), this.session;
    }
    setDefaultChain(t, e) {
        try {
            const [s, n] = this.validateChain(t);
            this.getProvider(s).setDefaultChain(n, e);
        } catch (s) {
            if (!/Please call connect/.test(s.message)) throw s;
        }
    }
    async cleanupPendingPairings(t = {}) {
        this.logger.info("Cleaning up inactive pairings...");
        const e = this.client.pairing.getAll();
        if ((0, $aVlNn.isValidArray)(e)) {
            for (const s of e)t.deletePairings ? this.client.core.expirer.set(s.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(s.topic);
            this.logger.info(`Inactive pairings cleared: ${e.length}`);
        }
    }
    async checkStorage() {
        if (this.namespaces = await this.client.core.storage.getItem(`${$6704b8ea905d519e$var$p}/namespaces`) || {}, this.namespaces && this.createProviders(), this.client.session.length) {
            const t = this.client.session.keys.length - 1;
            this.session = this.client.session.get(this.client.session.keys[t]), this.onSessionUpdate();
        }
    }
    async initialize() {
        this.logger.trace("Initialized"), await this.createClient(), this.checkStorage(), this.registerEventListeners();
    }
    async createClient() {
        this.client = this.providerOpts.client || await (0, $et0Rx.default).init({
            logger: this.providerOpts.logger || $6704b8ea905d519e$var$h,
            relayUrl: this.providerOpts.relayUrl || $6704b8ea905d519e$var$b,
            projectId: this.providerOpts.projectId,
            metadata: this.providerOpts.metadata,
            storageOptions: this.providerOpts.storageOptions,
            name: this.providerOpts.name
        }), this.logger.trace("SignClient Initialized");
    }
    createProviders() {
        if (!this.client) throw new Error("Sign Client not initialized");
        Object.keys(this.namespaces).forEach((t)=>{
            switch(t){
                case "eip155":
                    this.rpcProviders[t] = new $6704b8ea905d519e$var$E({
                        client: this.client,
                        namespace: this.namespaces[t],
                        events: this.events
                    });
                    break;
                case "solana":
                    this.rpcProviders[t] = new $6704b8ea905d519e$var$q({
                        client: this.client,
                        namespace: this.namespaces[t],
                        events: this.events
                    });
                    break;
                case "cosmos":
                    this.rpcProviders[t] = new $6704b8ea905d519e$var$H({
                        client: this.client,
                        namespace: this.namespaces[t],
                        events: this.events
                    });
                    break;
                case "polkadot":
                    break;
                case "cip34":
                    this.rpcProviders[t] = new $6704b8ea905d519e$var$$({
                        client: this.client,
                        namespace: this.namespaces[t],
                        events: this.events
                    });
                    break;
            }
        });
    }
    registerEventListeners() {
        if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
        this.client.on("session_ping", (t)=>{
            this.events.emit("session_ping", t);
        }), this.client.on("session_event", (t)=>{
            const { params: e  } = t, { event: s  } = e;
            s.name === "accountsChanged" ? this.events.emit("accountsChanged", s.data) : s.name === "chainChanged" ? this.onChainChanged(s.data, e.chainId) : this.events.emit(s.name, s.data), this.events.emit("session_event", t);
        }), this.client.on("session_update", ({ topic: t , params: e  })=>{
            var s;
            const { namespaces: n  } = e, v = (s = this.client) == null ? void 0 : s.session.get(t);
            this.session = $6704b8ea905d519e$var$_($6704b8ea905d519e$var$u({}, v), {
                namespaces: n
            }), this.onSessionUpdate(), this.events.emit("session_update", {
                topic: t,
                params: e
            });
        }), this.client.on("session_delete", async (t)=>{
            await this.cleanup(), this.events.emit("session_delete", t);
        });
    }
    getProvider(t) {
        if (!this.rpcProviders[t]) throw new Error(`Provider not found: ${t}`);
        return this.rpcProviders[t];
    }
    onSessionUpdate() {
        Object.keys(this.rpcProviders).forEach((t)=>{
            var e;
            this.getProvider(t).updateNamespace((e = this.session) == null ? void 0 : e.namespaces[t]);
        });
    }
    setNamespaces(t) {
        if (!t || !Object.keys(t).length) throw new Error("Namespaces must be not empty");
        this.client.core.storage.setItem(`${$6704b8ea905d519e$var$p}/namespaces`, t), this.namespaces = t;
    }
    validateChain(t) {
        const [e, s] = t?.split(":") || [
            "",
            ""
        ];
        if (e && !Object.keys(this.namespaces).includes(e)) throw new Error(`Namespace '${e}' is not configured. Please call connect() first with namespace config.`);
        return !e || !s ? $6704b8ea905d519e$var$y(this.namespaces) : [
            e,
            s
        ];
    }
    async requestAccounts() {
        const [t] = this.validateChain();
        return await this.getProvider(t).requestAccounts();
    }
    onChainChanged(t, e) {
        const [s, n] = this.validateChain(e);
        this.getProvider(s).setDefaultChain(n), this.events.emit("chainChanged", t);
    }
    onConnect() {
        this.events.emit("connect", {
            session: this.session
        });
    }
    async cleanup() {
        this.session = void 0, await this.cleanupPendingPairings({
            deletePairings: !0
        });
    }
}
const $6704b8ea905d519e$export$63bc40680ab52599 = $6704b8ea905d519e$export$2e2bcd8739ae039;

});
parcelRequire.register("aq96k", function(module, exports) {
"use strict";

var $fuUIq = parcelRequire("fuUIq");
module.exports = $796364640db8c068$var$pino;
const $796364640db8c068$var$_console = $796364640db8c068$var$pfGlobalThisOrFallback().console || {};
const $796364640db8c068$var$stdSerializers = {
    mapHttpRequest: $796364640db8c068$var$mock,
    mapHttpResponse: $796364640db8c068$var$mock,
    wrapRequestSerializer: $796364640db8c068$var$passthrough,
    wrapResponseSerializer: $796364640db8c068$var$passthrough,
    wrapErrorSerializer: $796364640db8c068$var$passthrough,
    req: $796364640db8c068$var$mock,
    res: $796364640db8c068$var$mock,
    err: $796364640db8c068$var$asErrValue
};
function $796364640db8c068$var$shouldSerialize(serialize, serializers) {
    if (Array.isArray(serialize)) {
        const hasToFilter = serialize.filter(function(k) {
            return k !== "!stdSerializers.err";
        });
        return hasToFilter;
    } else if (serialize === true) return Object.keys(serializers);
    return false;
}
function $796364640db8c068$var$pino(opts) {
    opts = opts || {};
    opts.browser = opts.browser || {};
    const transmit = opts.browser.transmit;
    if (transmit && typeof transmit.send !== "function") throw Error("pino: transmit option must have a send function");
    const proto = opts.browser.write || $796364640db8c068$var$_console;
    if (opts.browser.write) opts.browser.asObject = true;
    const serializers = opts.serializers || {};
    const serialize = $796364640db8c068$var$shouldSerialize(opts.browser.serialize, serializers);
    let stdErrSerialize = opts.browser.serialize;
    if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf("!stdSerializers.err") > -1) stdErrSerialize = false;
    const levels = [
        "error",
        "fatal",
        "warn",
        "info",
        "debug",
        "trace"
    ];
    if (typeof proto === "function") proto.error = proto.fatal = proto.warn = proto.info = proto.debug = proto.trace = proto;
    if (opts.enabled === false) opts.level = "silent";
    const level = opts.level || "info";
    const logger = Object.create(proto);
    if (!logger.log) logger.log = $796364640db8c068$var$noop;
    Object.defineProperty(logger, "levelVal", {
        get: getLevelVal
    });
    Object.defineProperty(logger, "level", {
        get: getLevel,
        set: setLevel
    });
    const setOpts = {
        transmit: transmit,
        serialize: serialize,
        asObject: opts.browser.asObject,
        levels: levels,
        timestamp: $796364640db8c068$var$getTimeFunction(opts)
    };
    logger.levels = $796364640db8c068$var$pino.levels;
    logger.level = level;
    logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = $796364640db8c068$var$noop;
    logger.serializers = serializers;
    logger._serialize = serialize;
    logger._stdErrSerialize = stdErrSerialize;
    logger.child = child;
    if (transmit) logger._logEvent = $796364640db8c068$var$createLogEventShape();
    function getLevelVal() {
        return this.level === "silent" ? Infinity : this.levels.values[this.level];
    }
    function getLevel() {
        return this._level;
    }
    function setLevel(level) {
        if (level !== "silent" && !this.levels.values[level]) throw Error("unknown level " + level);
        this._level = level;
        $796364640db8c068$var$set(setOpts, logger, "error", "log") // <-- must stay first
        ;
        $796364640db8c068$var$set(setOpts, logger, "fatal", "error");
        $796364640db8c068$var$set(setOpts, logger, "warn", "error");
        $796364640db8c068$var$set(setOpts, logger, "info", "log");
        $796364640db8c068$var$set(setOpts, logger, "debug", "log");
        $796364640db8c068$var$set(setOpts, logger, "trace", "log");
    }
    function child(bindings, childOptions) {
        if (!bindings) throw new Error("missing bindings for child Pino");
        childOptions = childOptions || {};
        if (serialize && bindings.serializers) childOptions.serializers = bindings.serializers;
        const childOptionsSerializers = childOptions.serializers;
        if (serialize && childOptionsSerializers) {
            var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
            var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize;
            delete bindings.serializers;
            $796364640db8c068$var$applySerializers([
                bindings
            ], childSerialize, childSerializers, this._stdErrSerialize);
        }
        function Child(parent) {
            this._childLevel = (parent._childLevel | 0) + 1;
            this.error = $796364640db8c068$var$bind(parent, bindings, "error");
            this.fatal = $796364640db8c068$var$bind(parent, bindings, "fatal");
            this.warn = $796364640db8c068$var$bind(parent, bindings, "warn");
            this.info = $796364640db8c068$var$bind(parent, bindings, "info");
            this.debug = $796364640db8c068$var$bind(parent, bindings, "debug");
            this.trace = $796364640db8c068$var$bind(parent, bindings, "trace");
            if (childSerializers) {
                this.serializers = childSerializers;
                this._serialize = childSerialize;
            }
            if (transmit) this._logEvent = $796364640db8c068$var$createLogEventShape([].concat(parent._logEvent.bindings, bindings));
        }
        Child.prototype = this;
        return new Child(this);
    }
    return logger;
}
$796364640db8c068$var$pino.levels = {
    values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10
    },
    labels: {
        10: "trace",
        20: "debug",
        30: "info",
        40: "warn",
        50: "error",
        60: "fatal"
    }
};
$796364640db8c068$var$pino.stdSerializers = $796364640db8c068$var$stdSerializers;
$796364640db8c068$var$pino.stdTimeFunctions = Object.assign({}, {
    nullTime: $796364640db8c068$var$nullTime,
    epochTime: $796364640db8c068$var$epochTime,
    unixTime: $796364640db8c068$var$unixTime,
    isoTime: $796364640db8c068$var$isoTime
});
function $796364640db8c068$var$set(opts, logger, level, fallback) {
    const proto = Object.getPrototypeOf(logger);
    logger[level] = logger.levelVal > logger.levels.values[level] ? $796364640db8c068$var$noop : proto[level] ? proto[level] : $796364640db8c068$var$_console[level] || $796364640db8c068$var$_console[fallback] || $796364640db8c068$var$noop;
    $796364640db8c068$var$wrap(opts, logger, level);
}
function $796364640db8c068$var$wrap(opts, logger, level) {
    if (!opts.transmit && logger[level] === $796364640db8c068$var$noop) return;
    logger[level] = function(write) {
        return function LOG() {
            const ts = opts.timestamp();
            const args = new Array(arguments.length);
            const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === $796364640db8c068$var$_console ? $796364640db8c068$var$_console : this;
            for(var i = 0; i < args.length; i++)args[i] = arguments[i];
            if (opts.serialize && !opts.asObject) $796364640db8c068$var$applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
            if (opts.asObject) write.call(proto, $796364640db8c068$var$asObject(this, level, args, ts));
            else write.apply(proto, args);
            if (opts.transmit) {
                const transmitLevel = opts.transmit.level || logger.level;
                const transmitValue = $796364640db8c068$var$pino.levels.values[transmitLevel];
                const methodValue = $796364640db8c068$var$pino.levels.values[level];
                if (methodValue < transmitValue) return;
                $796364640db8c068$var$transmit(this, {
                    ts: ts,
                    methodLevel: level,
                    methodValue: methodValue,
                    transmitLevel: transmitLevel,
                    transmitValue: $796364640db8c068$var$pino.levels.values[opts.transmit.level || logger.level],
                    send: opts.transmit.send,
                    val: logger.levelVal
                }, args);
            }
        };
    }(logger[level]);
}
function $796364640db8c068$var$asObject(logger, level, args, ts) {
    if (logger._serialize) $796364640db8c068$var$applySerializers(args, logger._serialize, logger.serializers, logger._stdErrSerialize);
    const argsCloned = args.slice();
    let msg = argsCloned[0];
    const o = {};
    if (ts) o.time = ts;
    o.level = $796364640db8c068$var$pino.levels.values[level];
    let lvl = (logger._childLevel | 0) + 1;
    if (lvl < 1) lvl = 1;
    // deliberate, catching objects, arrays
    if (msg !== null && typeof msg === "object") {
        while(lvl-- && typeof argsCloned[0] === "object")Object.assign(o, argsCloned.shift());
        msg = argsCloned.length ? $fuUIq(argsCloned.shift(), argsCloned) : undefined;
    } else if (typeof msg === "string") msg = $fuUIq(argsCloned.shift(), argsCloned);
    if (msg !== undefined) o.msg = msg;
    return o;
}
function $796364640db8c068$var$applySerializers(args, serialize, serializers, stdErrSerialize) {
    for(const i in args){
        if (stdErrSerialize && args[i] instanceof Error) args[i] = $796364640db8c068$var$pino.stdSerializers.err(args[i]);
        else if (typeof args[i] === "object" && !Array.isArray(args[i])) {
            for(const k in args[i])if (serialize && serialize.indexOf(k) > -1 && k in serializers) args[i][k] = serializers[k](args[i][k]);
        }
    }
}
function $796364640db8c068$var$bind(parent, bindings, level) {
    return function() {
        const args = new Array(1 + arguments.length);
        args[0] = bindings;
        for(var i = 1; i < args.length; i++)args[i] = arguments[i - 1];
        return parent[level].apply(this, args);
    };
}
function $796364640db8c068$var$transmit(logger, opts, args) {
    const send = opts.send;
    const ts = opts.ts;
    const methodLevel = opts.methodLevel;
    const methodValue = opts.methodValue;
    const val = opts.val;
    const bindings = logger._logEvent.bindings;
    $796364640db8c068$var$applySerializers(args, logger._serialize || Object.keys(logger.serializers), logger.serializers, logger._stdErrSerialize === undefined ? true : logger._stdErrSerialize);
    logger._logEvent.ts = ts;
    logger._logEvent.messages = args.filter(function(arg) {
        // bindings can only be objects, so reference equality check via indexOf is fine
        return bindings.indexOf(arg) === -1;
    });
    logger._logEvent.level.label = methodLevel;
    logger._logEvent.level.value = methodValue;
    send(methodLevel, logger._logEvent, val);
    logger._logEvent = $796364640db8c068$var$createLogEventShape(bindings);
}
function $796364640db8c068$var$createLogEventShape(bindings) {
    return {
        ts: 0,
        messages: [],
        bindings: bindings || [],
        level: {
            label: "",
            value: 0
        }
    };
}
function $796364640db8c068$var$asErrValue(err) {
    const obj = {
        type: err.constructor.name,
        msg: err.message,
        stack: err.stack
    };
    for(const key in err)if (obj[key] === undefined) obj[key] = err[key];
    return obj;
}
function $796364640db8c068$var$getTimeFunction(opts) {
    if (typeof opts.timestamp === "function") return opts.timestamp;
    if (opts.timestamp === false) return $796364640db8c068$var$nullTime;
    return $796364640db8c068$var$epochTime;
}
function $796364640db8c068$var$mock() {
    return {};
}
function $796364640db8c068$var$passthrough(a) {
    return a;
}
function $796364640db8c068$var$noop() {}
function $796364640db8c068$var$nullTime() {
    return false;
}
function $796364640db8c068$var$epochTime() {
    return Date.now();
}
function $796364640db8c068$var$unixTime() {
    return Math.round(Date.now() / 1000.0);
}
function $796364640db8c068$var$isoTime() {
    return new Date(Date.now()).toISOString();
} // using Date.now() for testability
/* eslint-disable */ /* istanbul ignore next */ function $796364640db8c068$var$pfGlobalThisOrFallback() {
    function defd(o) {
        return typeof o !== "undefined" && o;
    }
    try {
        if (typeof globalThis !== "undefined") return globalThis;
        Object.defineProperty(Object.prototype, "globalThis", {
            get: function() {
                delete Object.prototype.globalThis;
                return this.globalThis = this;
            },
            configurable: true
        });
        return globalThis;
    } catch (e) {
        return defd(self) || defd(window) || defd(this) || {};
    }
} /* eslint-enable */ 

});
parcelRequire.register("fuUIq", function(module, exports) {
"use strict";
function $b485a6e80adc74eb$var$tryStringify(o) {
    try {
        return JSON.stringify(o);
    } catch (e) {
        return '"[Circular]"';
    }
}
module.exports = $b485a6e80adc74eb$var$format;
function $b485a6e80adc74eb$var$format(f, args, opts) {
    var ss = opts && opts.stringify || $b485a6e80adc74eb$var$tryStringify;
    var offset = 1;
    if (typeof f === "object" && f !== null) {
        var len = args.length + offset;
        if (len === 1) return f;
        var objects = new Array(len);
        objects[0] = ss(f);
        for(var index = 1; index < len; index++)objects[index] = ss(args[index]);
        return objects.join(" ");
    }
    if (typeof f !== "string") return f;
    var argLen = args.length;
    if (argLen === 0) return f;
    var str = "";
    var a = 1 - offset;
    var lastPos = -1;
    var flen = f && f.length || 0;
    for(var i = 0; i < flen;){
        if (f.charCodeAt(i) === 37 && i + 1 < flen) {
            lastPos = lastPos > -1 ? lastPos : 0;
            switch(f.charCodeAt(i + 1)){
                case 100:
                case 102:
                    if (a >= argLen) break;
                    if (args[a] == null) break;
                    if (lastPos < i) str += f.slice(lastPos, i);
                    str += Number(args[a]);
                    lastPos = i + 2;
                    i++;
                    break;
                case 105:
                    if (a >= argLen) break;
                    if (args[a] == null) break;
                    if (lastPos < i) str += f.slice(lastPos, i);
                    str += Math.floor(Number(args[a]));
                    lastPos = i + 2;
                    i++;
                    break;
                case 79:
                case 111:
                case 106:
                    if (a >= argLen) break;
                    if (args[a] === undefined) break;
                    if (lastPos < i) str += f.slice(lastPos, i);
                    var type = typeof args[a];
                    if (type === "string") {
                        str += "'" + args[a] + "'";
                        lastPos = i + 2;
                        i++;
                        break;
                    }
                    if (type === "function") {
                        str += args[a].name || "<anonymous>";
                        lastPos = i + 2;
                        i++;
                        break;
                    }
                    str += ss(args[a]);
                    lastPos = i + 2;
                    i++;
                    break;
                case 115:
                    if (a >= argLen) break;
                    if (lastPos < i) str += f.slice(lastPos, i);
                    str += String(args[a]);
                    lastPos = i + 2;
                    i++;
                    break;
                case 37:
                    if (lastPos < i) str += f.slice(lastPos, i);
                    str += "%";
                    lastPos = i + 2;
                    i++;
                    a--;
                    break;
            }
            ++a;
        }
        ++i;
    }
    if (lastPos === -1) return f;
    else if (lastPos < flen) str += f.slice(lastPos);
    return str;
}

});


parcelRequire.register("et0Rx", function(module, exports) {

$parcel$export(module.exports, "default", () => $a8847164ffcc6917$export$2e2bcd8739ae039);

var $aq96k = parcelRequire("aq96k");

var $8Qwm1 = parcelRequire("8Qwm1");

var $giNA3 = parcelRequire("giNA3");

var $2S958 = parcelRequire("2S958");

var $3xtlW = parcelRequire("3xtlW");

var $2fbJO = parcelRequire("2fbJO");

var $gm49L = parcelRequire("gm49L");

var $kOodT = parcelRequire("kOodT");
const $a8847164ffcc6917$export$4fa962fc67384e02 = "wc", $a8847164ffcc6917$export$61085c48796ff049 = 2, $a8847164ffcc6917$export$94715592c220319a = "client", $a8847164ffcc6917$export$7fa6f9ee1e2cab96 = `${$a8847164ffcc6917$export$4fa962fc67384e02}@${$a8847164ffcc6917$export$61085c48796ff049}:${$a8847164ffcc6917$export$94715592c220319a}:`, $a8847164ffcc6917$export$8dffb3242f2c5f72 = {
    name: $a8847164ffcc6917$export$94715592c220319a,
    logger: "error",
    controller: !1,
    relayUrl: "wss://relay.walletconnect.com"
}, $a8847164ffcc6917$export$fb2c3ad2a2bc26e9 = {
    session_proposal: "session_proposal",
    session_update: "session_update",
    session_extend: "session_extend",
    session_ping: "session_ping",
    session_delete: "session_delete",
    session_expire: "session_expire",
    session_request: "session_request",
    session_event: "session_event",
    proposal_expire: "proposal_expire"
}, $a8847164ffcc6917$export$2e2bb8505f95527b = {
    database: ":memory:"
}, $a8847164ffcc6917$export$a682338b5ffca937 = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync"
}, $a8847164ffcc6917$export$160142c73cb99dc3 = "history", $a8847164ffcc6917$export$8eba9ce85616c607 = "0.3", $a8847164ffcc6917$export$ae6c7a4f7ed730a1 = "proposal", $a8847164ffcc6917$export$6db28e89b135a53c = (0, $gm49L.THIRTY_DAYS), $a8847164ffcc6917$export$a069e98a8dfeec1e = "session", $a8847164ffcc6917$export$84b1b9dbcdea0475 = (0, $gm49L.SEVEN_DAYS), $a8847164ffcc6917$export$2db42d5151ad6eb8 = "engine", $a8847164ffcc6917$export$4edb1ca37014192d = {
    wc_sessionPropose: {
        req: {
            ttl: (0, $gm49L.FIVE_MINUTES),
            prompt: !0,
            tag: 1100
        },
        res: {
            ttl: (0, $gm49L.FIVE_MINUTES),
            prompt: !1,
            tag: 1101
        }
    },
    wc_sessionSettle: {
        req: {
            ttl: (0, $gm49L.FIVE_MINUTES),
            prompt: !1,
            tag: 1102
        },
        res: {
            ttl: (0, $gm49L.FIVE_MINUTES),
            prompt: !1,
            tag: 1103
        }
    },
    wc_sessionUpdate: {
        req: {
            ttl: (0, $gm49L.ONE_DAY),
            prompt: !1,
            tag: 1104
        },
        res: {
            ttl: (0, $gm49L.ONE_DAY),
            prompt: !1,
            tag: 1105
        }
    },
    wc_sessionExtend: {
        req: {
            ttl: (0, $gm49L.ONE_DAY),
            prompt: !1,
            tag: 1106
        },
        res: {
            ttl: (0, $gm49L.ONE_DAY),
            prompt: !1,
            tag: 1107
        }
    },
    wc_sessionRequest: {
        req: {
            ttl: (0, $gm49L.FIVE_MINUTES),
            prompt: !0,
            tag: 1108
        },
        res: {
            ttl: (0, $gm49L.FIVE_MINUTES),
            prompt: !1,
            tag: 1109
        }
    },
    wc_sessionEvent: {
        req: {
            ttl: (0, $gm49L.FIVE_MINUTES),
            prompt: !0,
            tag: 1110
        },
        res: {
            ttl: (0, $gm49L.FIVE_MINUTES),
            prompt: !1,
            tag: 1111
        }
    },
    wc_sessionDelete: {
        req: {
            ttl: (0, $gm49L.ONE_DAY),
            prompt: !1,
            tag: 1112
        },
        res: {
            ttl: (0, $gm49L.ONE_DAY),
            prompt: !1,
            tag: 1113
        }
    },
    wc_sessionPing: {
        req: {
            ttl: (0, $gm49L.THIRTY_SECONDS),
            prompt: !1,
            tag: 1114
        },
        res: {
            ttl: (0, $gm49L.THIRTY_SECONDS),
            prompt: !1,
            tag: 1115
        }
    }
}, $a8847164ffcc6917$export$409f0c0a13a1b7c6 = {
    min: (0, $gm49L.FIVE_MINUTES),
    max: (0, $gm49L.SEVEN_DAYS)
}, $a8847164ffcc6917$export$40b296af21bd38a4 = "request";
var $a8847164ffcc6917$var$Ye = Object.defineProperty, $a8847164ffcc6917$var$ke = Object.defineProperties, $a8847164ffcc6917$var$Xe = Object.getOwnPropertyDescriptors, $a8847164ffcc6917$var$te = Object.getOwnPropertySymbols, $a8847164ffcc6917$var$Je = Object.prototype.hasOwnProperty, $a8847164ffcc6917$var$He = Object.prototype.propertyIsEnumerable, $a8847164ffcc6917$var$ie = (h, n, e)=>n in h ? $a8847164ffcc6917$var$Ye(h, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : h[n] = e, $a8847164ffcc6917$var$y = (h, n)=>{
    for(var e in n || (n = {}))$a8847164ffcc6917$var$Je.call(n, e) && $a8847164ffcc6917$var$ie(h, e, n[e]);
    if ($a8847164ffcc6917$var$te) for (var e of $a8847164ffcc6917$var$te(n))$a8847164ffcc6917$var$He.call(n, e) && $a8847164ffcc6917$var$ie(h, e, n[e]);
    return h;
}, $a8847164ffcc6917$var$j = (h, n)=>$a8847164ffcc6917$var$ke(h, $a8847164ffcc6917$var$Xe(n));
class $a8847164ffcc6917$var$Fe extends (0, $2S958.IEngine) {
    constructor(n){
        super(n), this.name = $a8847164ffcc6917$export$2db42d5151ad6eb8, this.events = new (0, (/*@__PURE__*/$parcel$interopDefault($2fbJO))), this.initialized = !1, this.ignoredPayloadTypes = [
            (0, $3xtlW.TYPE_1)
        ], this.init = async ()=>{
            this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({
                methods: Object.keys($a8847164ffcc6917$export$4edb1ca37014192d)
            }), this.initialized = !0);
        }, this.connect = async (e)=>{
            this.isInitialized(), await this.isValidConnect(e);
            const { pairingTopic: s , requiredNamespaces: t , relays: i  } = e;
            let r = s, o, a = !1;
            if (r && (a = this.client.core.pairing.pairings.get(r).active), !r || !a) {
                const { topic: E , uri: g  } = await this.client.core.pairing.create();
                r = E, o = g;
            }
            const l = await this.client.core.crypto.generateKeyPair(), d = {
                requiredNamespaces: t,
                relays: i ?? [
                    {
                        protocol: (0, $8Qwm1.RELAYER_DEFAULT_PROTOCOL)
                    }
                ],
                proposer: {
                    publicKey: l,
                    metadata: this.client.metadata
                }
            }, { reject: S , resolve: w , done: V  } = (0, $3xtlW.createDelayedPromise)();
            if (this.events.once((0, $3xtlW.engineEvent)("session_connect"), async ({ error: E , session: g  })=>{
                if (E) S(E);
                else if (g) {
                    g.self.publicKey = l;
                    const O = $a8847164ffcc6917$var$j($a8847164ffcc6917$var$y({}, g), {
                        requiredNamespaces: g.requiredNamespaces
                    });
                    await this.client.session.set(g.topic, O), await this.setExpiry(g.topic, g.expiry), r && await this.client.core.pairing.updateMetadata({
                        topic: r,
                        metadata: g.peer.metadata
                    }), w(O);
                }
            }), !r) {
                const { message: E  } = (0, $3xtlW.getInternalError)("NO_MATCHING_KEY", `connect() pairing topic: ${r}`);
                throw new Error(E);
            }
            const x = await this.sendRequest(r, "wc_sessionPropose", d), G = (0, $3xtlW.calcExpiry)((0, $gm49L.FIVE_MINUTES));
            return await this.setProposal(x, $a8847164ffcc6917$var$y({
                id: x,
                expiry: G
            }, d)), {
                uri: o,
                approval: V
            };
        }, this.pair = async (e)=>(this.isInitialized(), await this.client.core.pairing.pair(e)), this.approve = async (e)=>{
            this.isInitialized(), await this.isValidApprove(e);
            const { id: s , relayProtocol: t , namespaces: i  } = e, r = this.client.proposal.get(s);
            let { pairingTopic: o , proposer: a , requiredNamespaces: l  } = r;
            (0, $3xtlW.isValidObject)(l) || (l = (0, $3xtlW.getRequiredNamespacesFromNamespaces)(i, "approve()"), this.client.proposal.set(s, $a8847164ffcc6917$var$j($a8847164ffcc6917$var$y({}, r), {
                requiredNamespaces: l
            })));
            const d = await this.client.core.crypto.generateKeyPair(), S = a.publicKey, w = await this.client.core.crypto.generateSharedKey(d, S), V = {
                relay: {
                    protocol: t ?? "irn"
                },
                namespaces: i,
                requiredNamespaces: l,
                controller: {
                    publicKey: d,
                    metadata: this.client.metadata
                },
                expiry: (0, $3xtlW.calcExpiry)($a8847164ffcc6917$export$84b1b9dbcdea0475)
            };
            await this.client.core.relayer.subscribe(w);
            const x = await this.sendRequest(w, "wc_sessionSettle", V), { done: G , resolve: E , reject: g  } = (0, $3xtlW.createDelayedPromise)();
            this.events.once((0, $3xtlW.engineEvent)("session_approve", x), ({ error: Y  })=>{
                Y ? g(Y) : E(this.client.session.get(w));
            });
            const O = $a8847164ffcc6917$var$j($a8847164ffcc6917$var$y({}, V), {
                topic: w,
                acknowledged: !1,
                self: V.controller,
                peer: {
                    publicKey: a.publicKey,
                    metadata: a.metadata
                },
                controller: d
            });
            return await this.client.session.set(w, O), await this.setExpiry(w, (0, $3xtlW.calcExpiry)($a8847164ffcc6917$export$84b1b9dbcdea0475)), o && await this.client.core.pairing.updateMetadata({
                topic: o,
                metadata: O.peer.metadata
            }), o && s && (await this.sendResult(s, o, {
                relay: {
                    protocol: t ?? "irn"
                },
                responderPublicKey: d
            }), await this.client.proposal.delete(s, (0, $3xtlW.getSdkError)("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                topic: o
            })), {
                topic: w,
                acknowledged: G
            };
        }, this.reject = async (e)=>{
            this.isInitialized(), await this.isValidReject(e);
            const { id: s , reason: t  } = e, { pairingTopic: i  } = this.client.proposal.get(s);
            i && (await this.sendError(s, i, t), await this.client.proposal.delete(s, (0, $3xtlW.getSdkError)("USER_DISCONNECTED")));
        }, this.update = async (e)=>{
            this.isInitialized(), await this.isValidUpdate(e);
            const { topic: s , namespaces: t  } = e, i = await this.sendRequest(s, "wc_sessionUpdate", {
                namespaces: t
            }), { done: r , resolve: o , reject: a  } = (0, $3xtlW.createDelayedPromise)();
            return this.events.once((0, $3xtlW.engineEvent)("session_update", i), ({ error: l  })=>{
                l ? a(l) : o();
            }), await this.client.session.update(s, {
                namespaces: t
            }), {
                acknowledged: r
            };
        }, this.extend = async (e)=>{
            this.isInitialized(), await this.isValidExtend(e);
            const { topic: s  } = e, t = await this.sendRequest(s, "wc_sessionExtend", {}), { done: i , resolve: r , reject: o  } = (0, $3xtlW.createDelayedPromise)();
            return this.events.once((0, $3xtlW.engineEvent)("session_extend", t), ({ error: a  })=>{
                a ? o(a) : r();
            }), await this.setExpiry(s, (0, $3xtlW.calcExpiry)($a8847164ffcc6917$export$84b1b9dbcdea0475)), {
                acknowledged: i
            };
        }, this.request = async (e)=>{
            this.isInitialized(), await this.isValidRequest(e);
            const { chainId: s , request: t , topic: i , expiry: r  } = e, o = await this.sendRequest(i, "wc_sessionRequest", {
                request: t,
                chainId: s
            }, r), { done: a , resolve: l , reject: d  } = (0, $3xtlW.createDelayedPromise)(r);
            return this.events.once((0, $3xtlW.engineEvent)("session_request", o), ({ error: S , result: w  })=>{
                S ? d(S) : l(w);
            }), await a();
        }, this.respond = async (e)=>{
            this.isInitialized(), await this.isValidRespond(e);
            const { topic: s , response: t  } = e, { id: i  } = t;
            (0, $kOodT.isJsonRpcResult)(t) ? await this.sendResult(i, s, t.result) : (0, $kOodT.isJsonRpcError)(t) && await this.sendError(i, s, t.error), this.deletePendingSessionRequest(e.response.id, {
                message: "fulfilled",
                code: 0
            });
        }, this.ping = async (e)=>{
            this.isInitialized(), await this.isValidPing(e);
            const { topic: s  } = e;
            if (this.client.session.keys.includes(s)) {
                const t = await this.sendRequest(s, "wc_sessionPing", {}), { done: i , resolve: r , reject: o  } = (0, $3xtlW.createDelayedPromise)();
                this.events.once((0, $3xtlW.engineEvent)("session_ping", t), ({ error: a  })=>{
                    a ? o(a) : r();
                }), await i();
            } else this.client.core.pairing.pairings.keys.includes(s) && await this.client.core.pairing.ping({
                topic: s
            });
        }, this.emit = async (e)=>{
            this.isInitialized(), await this.isValidEmit(e);
            const { topic: s , event: t , chainId: i  } = e;
            await this.sendRequest(s, "wc_sessionEvent", {
                event: t,
                chainId: i
            });
        }, this.disconnect = async (e)=>{
            this.isInitialized(), await this.isValidDisconnect(e);
            const { topic: s  } = e;
            this.client.session.keys.includes(s) ? (await this.sendRequest(s, "wc_sessionDelete", (0, $3xtlW.getSdkError)("USER_DISCONNECTED")), await this.deleteSession(s)) : await this.client.core.pairing.disconnect({
                topic: s
            });
        }, this.find = (e)=>(this.isInitialized(), this.client.session.getAll().filter((s)=>(0, $3xtlW.isSessionCompatible)(s, e))), this.getPendingSessionRequests = ()=>(this.isInitialized(), this.client.pendingRequest.getAll()), this.deleteSession = async (e, s)=>{
            const { self: t  } = this.client.session.get(e);
            await this.client.core.relayer.unsubscribe(e), await Promise.all([
                this.client.session.delete(e, (0, $3xtlW.getSdkError)("USER_DISCONNECTED")),
                this.client.core.crypto.deleteKeyPair(t.publicKey),
                this.client.core.crypto.deleteSymKey(e),
                s ? Promise.resolve() : this.client.core.expirer.del(e)
            ]);
        }, this.deleteProposal = async (e, s)=>{
            await Promise.all([
                this.client.proposal.delete(e, (0, $3xtlW.getSdkError)("USER_DISCONNECTED")),
                s ? Promise.resolve() : this.client.core.expirer.del(e)
            ]);
        }, this.deletePendingSessionRequest = async (e, s, t = !1)=>{
            await Promise.all([
                this.client.pendingRequest.delete(e, s),
                t ? Promise.resolve() : this.client.core.expirer.del(e)
            ]);
        }, this.setExpiry = async (e, s)=>{
            this.client.session.keys.includes(e) && await this.client.session.update(e, {
                expiry: s
            }), this.client.core.expirer.set(e, s);
        }, this.setProposal = async (e, s)=>{
            await this.client.proposal.set(e, s), this.client.core.expirer.set(e, s.expiry);
        }, this.setPendingSessionRequest = async (e)=>{
            const s = $a8847164ffcc6917$export$4edb1ca37014192d.wc_sessionRequest.req.ttl, { id: t , topic: i , params: r  } = e;
            await this.client.pendingRequest.set(t, {
                id: t,
                topic: i,
                params: r
            }), s && this.client.core.expirer.set(t, (0, $3xtlW.calcExpiry)(s));
        }, this.sendRequest = async (e, s, t, i)=>{
            const r = (0, $kOodT.formatJsonRpcRequest)(s, t), o = await this.client.core.crypto.encode(e, r), a = $a8847164ffcc6917$export$4edb1ca37014192d[s].req;
            return i && (a.ttl = i), this.client.core.history.set(e, r), this.client.core.relayer.publish(e, o, a), r.id;
        }, this.sendResult = async (e, s, t)=>{
            const i = (0, $kOodT.formatJsonRpcResult)(e, t), r = await this.client.core.crypto.encode(s, i), o = await this.client.core.history.get(s, e), a = $a8847164ffcc6917$export$4edb1ca37014192d[o.request.method].res;
            this.client.core.relayer.publish(s, r, a), await this.client.core.history.resolve(i);
        }, this.sendError = async (e, s, t)=>{
            const i = (0, $kOodT.formatJsonRpcError)(e, t), r = await this.client.core.crypto.encode(s, i), o = await this.client.core.history.get(s, e), a = $a8847164ffcc6917$export$4edb1ca37014192d[o.request.method].res;
            this.client.core.relayer.publish(s, r, a), await this.client.core.history.resolve(i);
        }, this.cleanup = async ()=>{
            const e = [], s = [];
            this.client.session.getAll().forEach((t)=>{
                (0, $3xtlW.isExpired)(t.expiry) && e.push(t.topic);
            }), this.client.proposal.getAll().forEach((t)=>{
                (0, $3xtlW.isExpired)(t.expiry) && s.push(t.id);
            }), await Promise.all([
                ...e.map((t)=>this.deleteSession(t)),
                ...s.map((t)=>this.deleteProposal(t))
            ]);
        }, this.onRelayEventRequest = (e)=>{
            const { topic: s , payload: t  } = e, i = t.method;
            switch(i){
                case "wc_sessionPropose":
                    return this.onSessionProposeRequest(s, t);
                case "wc_sessionSettle":
                    return this.onSessionSettleRequest(s, t);
                case "wc_sessionUpdate":
                    return this.onSessionUpdateRequest(s, t);
                case "wc_sessionExtend":
                    return this.onSessionExtendRequest(s, t);
                case "wc_sessionPing":
                    return this.onSessionPingRequest(s, t);
                case "wc_sessionDelete":
                    return this.onSessionDeleteRequest(s, t);
                case "wc_sessionRequest":
                    return this.onSessionRequest(s, t);
                case "wc_sessionEvent":
                    return this.onSessionEventRequest(s, t);
                default:
                    return this.client.logger.info(`Unsupported request method ${i}`);
            }
        }, this.onRelayEventResponse = async (e)=>{
            const { topic: s , payload: t  } = e, i = (await this.client.core.history.get(s, t.id)).request.method;
            switch(i){
                case "wc_sessionPropose":
                    return this.onSessionProposeResponse(s, t);
                case "wc_sessionSettle":
                    return this.onSessionSettleResponse(s, t);
                case "wc_sessionUpdate":
                    return this.onSessionUpdateResponse(s, t);
                case "wc_sessionExtend":
                    return this.onSessionExtendResponse(s, t);
                case "wc_sessionPing":
                    return this.onSessionPingResponse(s, t);
                case "wc_sessionRequest":
                    return this.onSessionRequestResponse(s, t);
                default:
                    return this.client.logger.info(`Unsupported response method ${i}`);
            }
        }, this.onSessionProposeRequest = async (e, s)=>{
            const { params: t , id: i  } = s;
            try {
                this.isValidConnect($a8847164ffcc6917$var$y({}, s.params));
                const r = (0, $3xtlW.calcExpiry)((0, $gm49L.FIVE_MINUTES)), o = $a8847164ffcc6917$var$y({
                    id: i,
                    pairingTopic: e,
                    expiry: r
                }, t);
                await this.setProposal(i, o), this.client.events.emit("session_proposal", {
                    id: i,
                    params: o
                });
            } catch (r) {
                await this.sendError(i, e, r), this.client.logger.error(r);
            }
        }, this.onSessionProposeResponse = async (e, s)=>{
            const { id: t  } = s;
            if ((0, $kOodT.isJsonRpcResult)(s)) {
                const { result: i  } = s;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    result: i
                });
                const r = this.client.proposal.get(t);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    proposal: r
                });
                const o = r.proposer.publicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    selfPublicKey: o
                });
                const a = i.responderPublicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    peerPublicKey: a
                });
                const l = await this.client.core.crypto.generateSharedKey(o, a);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    sessionTopic: l
                });
                const d = await this.client.core.relayer.subscribe(l);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    subscriptionId: d
                }), await this.client.core.pairing.activate({
                    topic: e
                });
            } else (0, $kOodT.isJsonRpcError)(s) && (await this.client.proposal.delete(t, (0, $3xtlW.getSdkError)("USER_DISCONNECTED")), this.events.emit((0, $3xtlW.engineEvent)("session_connect"), {
                error: s.error
            }));
        }, this.onSessionSettleRequest = async (e, s)=>{
            const { id: t , params: i  } = s;
            try {
                this.isValidSessionSettleRequest(i);
                const { relay: r , controller: o , expiry: a , namespaces: l , requiredNamespaces: d  } = s.params, S = {
                    topic: e,
                    relay: r,
                    expiry: a,
                    namespaces: l,
                    acknowledged: !0,
                    requiredNamespaces: d,
                    controller: o.publicKey,
                    self: {
                        publicKey: "",
                        metadata: this.client.metadata
                    },
                    peer: {
                        publicKey: o.publicKey,
                        metadata: o.metadata
                    }
                };
                await this.sendResult(s.id, e, !0), this.events.emit((0, $3xtlW.engineEvent)("session_connect"), {
                    session: S
                });
            } catch (r) {
                await this.sendError(t, e, r), this.client.logger.error(r);
            }
        }, this.onSessionSettleResponse = async (e, s)=>{
            const { id: t  } = s;
            (0, $kOodT.isJsonRpcResult)(s) ? (await this.client.session.update(e, {
                acknowledged: !0
            }), this.events.emit((0, $3xtlW.engineEvent)("session_approve", t), {})) : (0, $kOodT.isJsonRpcError)(s) && (await this.client.session.delete(e, (0, $3xtlW.getSdkError)("USER_DISCONNECTED")), this.events.emit((0, $3xtlW.engineEvent)("session_approve", t), {
                error: s.error
            }));
        }, this.onSessionUpdateRequest = async (e, s)=>{
            const { params: t , id: i  } = s;
            try {
                this.isValidUpdate($a8847164ffcc6917$var$y({
                    topic: e
                }, t)), await this.client.session.update(e, {
                    namespaces: t.namespaces
                }), await this.sendResult(i, e, !0), this.client.events.emit("session_update", {
                    id: i,
                    topic: e,
                    params: t
                });
            } catch (r) {
                await this.sendError(i, e, r), this.client.logger.error(r);
            }
        }, this.onSessionUpdateResponse = (e, s)=>{
            const { id: t  } = s;
            (0, $kOodT.isJsonRpcResult)(s) ? this.events.emit((0, $3xtlW.engineEvent)("session_update", t), {}) : (0, $kOodT.isJsonRpcError)(s) && this.events.emit((0, $3xtlW.engineEvent)("session_update", t), {
                error: s.error
            });
        }, this.onSessionExtendRequest = async (e, s)=>{
            const { id: t  } = s;
            try {
                this.isValidExtend({
                    topic: e
                }), await this.setExpiry(e, (0, $3xtlW.calcExpiry)($a8847164ffcc6917$export$84b1b9dbcdea0475)), await this.sendResult(t, e, !0), this.client.events.emit("session_extend", {
                    id: t,
                    topic: e
                });
            } catch (i) {
                await this.sendError(t, e, i), this.client.logger.error(i);
            }
        }, this.onSessionExtendResponse = (e, s)=>{
            const { id: t  } = s;
            (0, $kOodT.isJsonRpcResult)(s) ? this.events.emit((0, $3xtlW.engineEvent)("session_extend", t), {}) : (0, $kOodT.isJsonRpcError)(s) && this.events.emit((0, $3xtlW.engineEvent)("session_extend", t), {
                error: s.error
            });
        }, this.onSessionPingRequest = async (e, s)=>{
            const { id: t  } = s;
            try {
                this.isValidPing({
                    topic: e
                }), await this.sendResult(t, e, !0), this.client.events.emit("session_ping", {
                    id: t,
                    topic: e
                });
            } catch (i) {
                await this.sendError(t, e, i), this.client.logger.error(i);
            }
        }, this.onSessionPingResponse = (e, s)=>{
            const { id: t  } = s;
            setTimeout(()=>{
                (0, $kOodT.isJsonRpcResult)(s) ? this.events.emit((0, $3xtlW.engineEvent)("session_ping", t), {}) : (0, $kOodT.isJsonRpcError)(s) && this.events.emit((0, $3xtlW.engineEvent)("session_ping", t), {
                    error: s.error
                });
            }, 500);
        }, this.onSessionDeleteRequest = async (e, s)=>{
            const { id: t  } = s;
            try {
                this.isValidDisconnect({
                    topic: e,
                    reason: s.params
                }), this.client.core.relayer.once((0, $8Qwm1.RELAYER_EVENTS).publish, async ()=>{
                    await this.deleteSession(e);
                }), await this.sendResult(t, e, !0), this.client.events.emit("session_delete", {
                    id: t,
                    topic: e
                });
            } catch (i) {
                await this.sendError(t, e, i), this.client.logger.error(i);
            }
        }, this.onSessionRequest = async (e, s)=>{
            const { id: t , params: i  } = s;
            try {
                this.isValidRequest($a8847164ffcc6917$var$y({
                    topic: e
                }, i)), await this.setPendingSessionRequest({
                    id: t,
                    topic: e,
                    params: i
                }), this.client.events.emit("session_request", {
                    id: t,
                    topic: e,
                    params: i
                });
            } catch (r) {
                await this.sendError(t, e, r), this.client.logger.error(r);
            }
        }, this.onSessionRequestResponse = (e, s)=>{
            const { id: t  } = s;
            (0, $kOodT.isJsonRpcResult)(s) ? this.events.emit((0, $3xtlW.engineEvent)("session_request", t), {
                result: s.result
            }) : (0, $kOodT.isJsonRpcError)(s) && this.events.emit((0, $3xtlW.engineEvent)("session_request", t), {
                error: s.error
            });
        }, this.onSessionEventRequest = async (e, s)=>{
            const { id: t , params: i  } = s;
            try {
                this.isValidEmit($a8847164ffcc6917$var$y({
                    topic: e
                }, i)), this.client.events.emit("session_event", {
                    id: t,
                    topic: e,
                    params: i
                });
            } catch (r) {
                await this.sendError(t, e, r), this.client.logger.error(r);
            }
        }, this.isValidConnect = async (e)=>{
            if (!(0, $3xtlW.isValidParams)(e)) {
                const { message: o  } = (0, $3xtlW.getInternalError)("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
                throw new Error(o);
            }
            const { pairingTopic: s , requiredNamespaces: t , relays: i  } = e;
            if ((0, $3xtlW.isUndefined)(s) || await this.isValidPairingTopic(s), !(0, $3xtlW.isUndefined)(t) && (0, $3xtlW.isValidObject)(t) === 0) return;
            const r = (0, $3xtlW.isValidRequiredNamespaces)(t, "connect()");
            if (r) throw new Error(r.message);
            if (!(0, $3xtlW.isValidRelays)(i, !0)) {
                const { message: o  } = (0, $3xtlW.getInternalError)("MISSING_OR_INVALID", `connect() relays: ${i}`);
                throw new Error(o);
            }
        }, this.isValidApprove = async (e)=>{
            if (!(0, $3xtlW.isValidParams)(e)) throw new Error((0, $3xtlW.getInternalError)("MISSING_OR_INVALID", `approve() params: ${e}`).message);
            const { id: s , namespaces: t , relayProtocol: i  } = e;
            await this.isValidProposalId(s);
            const r = this.client.proposal.get(s), o = (0, $3xtlW.isValidNamespaces)(t, "approve()");
            if (o) throw new Error(o.message);
            const a = (0, $3xtlW.isConformingNamespaces)(r.requiredNamespaces, t, "update()");
            if (a) throw new Error(a.message);
            if (!(0, $3xtlW.isValidString)(i, !0)) {
                const { message: l  } = (0, $3xtlW.getInternalError)("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
                throw new Error(l);
            }
        }, this.isValidReject = async (e)=>{
            if (!(0, $3xtlW.isValidParams)(e)) {
                const { message: i  } = (0, $3xtlW.getInternalError)("MISSING_OR_INVALID", `reject() params: ${e}`);
                throw new Error(i);
            }
            const { id: s , reason: t  } = e;
            if (await this.isValidProposalId(s), !(0, $3xtlW.isValidErrorReason)(t)) {
                const { message: i  } = (0, $3xtlW.getInternalError)("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(t)}`);
                throw new Error(i);
            }
        }, this.isValidSessionSettleRequest = (e)=>{
            if (!(0, $3xtlW.isValidParams)(e)) {
                const { message: l  } = (0, $3xtlW.getInternalError)("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
                throw new Error(l);
            }
            const { relay: s , controller: t , namespaces: i , expiry: r  } = e;
            if (!(0, $3xtlW.isValidRelay)(s)) {
                const { message: l  } = (0, $3xtlW.getInternalError)("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                throw new Error(l);
            }
            const o = (0, $3xtlW.isValidController)(t, "onSessionSettleRequest()");
            if (o) throw new Error(o.message);
            const a = (0, $3xtlW.isValidNamespaces)(i, "onSessionSettleRequest()");
            if (a) throw new Error(a.message);
            if ((0, $3xtlW.isExpired)(r)) {
                const { message: l  } = (0, $3xtlW.getInternalError)("EXPIRED", "onSessionSettleRequest()");
                throw new Error(l);
            }
        }, this.isValidUpdate = async (e)=>{
            if (!(0, $3xtlW.isValidParams)(e)) {
                const { message: a  } = (0, $3xtlW.getInternalError)("MISSING_OR_INVALID", `update() params: ${e}`);
                throw new Error(a);
            }
            const { topic: s , namespaces: t  } = e;
            await this.isValidSessionTopic(s);
            const i = this.client.session.get(s), r = (0, $3xtlW.isValidNamespaces)(t, "update()");
            if (r) throw new Error(r.message);
            const o = (0, $3xtlW.isConformingNamespaces)(i.requiredNamespaces, t, "update()");
            if (o) throw new Error(o.message);
        }, this.isValidExtend = async (e)=>{
            if (!(0, $3xtlW.isValidParams)(e)) {
                const { message: t  } = (0, $3xtlW.getInternalError)("MISSING_OR_INVALID", `extend() params: ${e}`);
                throw new Error(t);
            }
            const { topic: s  } = e;
            await this.isValidSessionTopic(s);
        }, this.isValidRequest = async (e)=>{
            if (!(0, $3xtlW.isValidParams)(e)) {
                const { message: a  } = (0, $3xtlW.getInternalError)("MISSING_OR_INVALID", `request() params: ${e}`);
                throw new Error(a);
            }
            const { topic: s , request: t , chainId: i , expiry: r  } = e;
            await this.isValidSessionTopic(s);
            const { namespaces: o  } = this.client.session.get(s);
            if (!(0, $3xtlW.isValidNamespacesChainId)(o, i)) {
                const { message: a  } = (0, $3xtlW.getInternalError)("MISSING_OR_INVALID", `request() chainId: ${i}`);
                throw new Error(a);
            }
            if (!(0, $3xtlW.isValidRequest)(t)) {
                const { message: a  } = (0, $3xtlW.getInternalError)("MISSING_OR_INVALID", `request() ${JSON.stringify(t)}`);
                throw new Error(a);
            }
            if (!(0, $3xtlW.isValidNamespacesRequest)(o, i, t.method)) {
                const { message: a  } = (0, $3xtlW.getInternalError)("MISSING_OR_INVALID", `request() method: ${t.method}`);
                throw new Error(a);
            }
            if (r && !(0, $3xtlW.isValidRequestExpiry)(r, $a8847164ffcc6917$export$409f0c0a13a1b7c6)) {
                const { message: a  } = (0, $3xtlW.getInternalError)("MISSING_OR_INVALID", `request() expiry: ${r}. Expiry must be a number (in seconds) between ${$a8847164ffcc6917$export$409f0c0a13a1b7c6.min} and ${$a8847164ffcc6917$export$409f0c0a13a1b7c6.max}`);
                throw new Error(a);
            }
        }, this.isValidRespond = async (e)=>{
            if (!(0, $3xtlW.isValidParams)(e)) {
                const { message: i  } = (0, $3xtlW.getInternalError)("MISSING_OR_INVALID", `respond() params: ${e}`);
                throw new Error(i);
            }
            const { topic: s , response: t  } = e;
            if (await this.isValidSessionTopic(s), !(0, $3xtlW.isValidResponse)(t)) {
                const { message: i  } = (0, $3xtlW.getInternalError)("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(t)}`);
                throw new Error(i);
            }
        }, this.isValidPing = async (e)=>{
            if (!(0, $3xtlW.isValidParams)(e)) {
                const { message: t  } = (0, $3xtlW.getInternalError)("MISSING_OR_INVALID", `ping() params: ${e}`);
                throw new Error(t);
            }
            const { topic: s  } = e;
            await this.isValidSessionOrPairingTopic(s);
        }, this.isValidEmit = async (e)=>{
            if (!(0, $3xtlW.isValidParams)(e)) {
                const { message: o  } = (0, $3xtlW.getInternalError)("MISSING_OR_INVALID", `emit() params: ${e}`);
                throw new Error(o);
            }
            const { topic: s , event: t , chainId: i  } = e;
            await this.isValidSessionTopic(s);
            const { namespaces: r  } = this.client.session.get(s);
            if (!(0, $3xtlW.isValidNamespacesChainId)(r, i)) {
                const { message: o  } = (0, $3xtlW.getInternalError)("MISSING_OR_INVALID", `emit() chainId: ${i}`);
                throw new Error(o);
            }
            if (!(0, $3xtlW.isValidEvent)(t)) {
                const { message: o  } = (0, $3xtlW.getInternalError)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(t)}`);
                throw new Error(o);
            }
            if (!(0, $3xtlW.isValidNamespacesEvent)(r, i, t.name)) {
                const { message: o  } = (0, $3xtlW.getInternalError)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(t)}`);
                throw new Error(o);
            }
        }, this.isValidDisconnect = async (e)=>{
            if (!(0, $3xtlW.isValidParams)(e)) {
                const { message: t  } = (0, $3xtlW.getInternalError)("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                throw new Error(t);
            }
            const { topic: s  } = e;
            await this.isValidSessionOrPairingTopic(s);
        };
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: n  } = (0, $3xtlW.getInternalError)("NOT_INITIALIZED", this.name);
            throw new Error(n);
        }
    }
    registerRelayerEvents() {
        this.client.core.relayer.on((0, $8Qwm1.RELAYER_EVENTS).message, async (n)=>{
            const { topic: e , message: s  } = n;
            if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(s))) return;
            const t = await this.client.core.crypto.decode(e, s);
            (0, $kOodT.isJsonRpcRequest)(t) ? (this.client.core.history.set(e, t), this.onRelayEventRequest({
                topic: e,
                payload: t
            })) : (0, $kOodT.isJsonRpcResponse)(t) && (await this.client.core.history.resolve(t), this.onRelayEventResponse({
                topic: e,
                payload: t
            }));
        });
    }
    registerExpirerEvents() {
        this.client.core.expirer.on((0, $8Qwm1.EXPIRER_EVENTS).expired, async (n)=>{
            const { topic: e , id: s  } = (0, $3xtlW.parseExpirerTarget)(n.target);
            if (s && this.client.pendingRequest.keys.includes(s)) return await this.deletePendingSessionRequest(s, (0, $3xtlW.getInternalError)("EXPIRED"), !0);
            e ? this.client.session.keys.includes(e) && (await this.deleteSession(e, !0), this.client.events.emit("session_expire", {
                topic: e
            })) : s && (await this.deleteProposal(s, !0), this.client.events.emit("proposal_expire", {
                id: s
            }));
        });
    }
    isValidPairingTopic(n) {
        if (!(0, $3xtlW.isValidString)(n, !1)) {
            const { message: e  } = (0, $3xtlW.getInternalError)("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
            throw new Error(e);
        }
        if (!this.client.core.pairing.pairings.keys.includes(n)) {
            const { message: e  } = (0, $3xtlW.getInternalError)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
            throw new Error(e);
        }
        if ((0, $3xtlW.isExpired)(this.client.core.pairing.pairings.get(n).expiry)) {
            const { message: e  } = (0, $3xtlW.getInternalError)("EXPIRED", `pairing topic: ${n}`);
            throw new Error(e);
        }
    }
    async isValidSessionTopic(n) {
        if (!(0, $3xtlW.isValidString)(n, !1)) {
            const { message: e  } = (0, $3xtlW.getInternalError)("MISSING_OR_INVALID", `session topic should be a string: ${n}`);
            throw new Error(e);
        }
        if (!this.client.session.keys.includes(n)) {
            const { message: e  } = (0, $3xtlW.getInternalError)("NO_MATCHING_KEY", `session topic doesn't exist: ${n}`);
            throw new Error(e);
        }
        if ((0, $3xtlW.isExpired)(this.client.session.get(n).expiry)) {
            await this.deleteSession(n);
            const { message: e  } = (0, $3xtlW.getInternalError)("EXPIRED", `session topic: ${n}`);
            throw new Error(e);
        }
    }
    async isValidSessionOrPairingTopic(n) {
        if (this.client.session.keys.includes(n)) await this.isValidSessionTopic(n);
        else if (this.client.core.pairing.pairings.keys.includes(n)) this.isValidPairingTopic(n);
        else if ((0, $3xtlW.isValidString)(n, !1)) {
            const { message: e  } = (0, $3xtlW.getInternalError)("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${n}`);
            throw new Error(e);
        } else {
            const { message: e  } = (0, $3xtlW.getInternalError)("MISSING_OR_INVALID", `session or pairing topic should be a string: ${n}`);
            throw new Error(e);
        }
    }
    async isValidProposalId(n) {
        if (!(0, $3xtlW.isValidId)(n)) {
            const { message: e  } = (0, $3xtlW.getInternalError)("MISSING_OR_INVALID", `proposal id should be a number: ${n}`);
            throw new Error(e);
        }
        if (!this.client.proposal.keys.includes(n)) {
            const { message: e  } = (0, $3xtlW.getInternalError)("NO_MATCHING_KEY", `proposal id doesn't exist: ${n}`);
            throw new Error(e);
        }
        if ((0, $3xtlW.isExpired)(this.client.proposal.get(n).expiry)) {
            await this.deleteProposal(n);
            const { message: e  } = (0, $3xtlW.getInternalError)("EXPIRED", `proposal id: ${n}`);
            throw new Error(e);
        }
    }
}
class $a8847164ffcc6917$var$Qe extends (0, $8Qwm1.Store) {
    constructor(n, e){
        super(n, e, $a8847164ffcc6917$export$ae6c7a4f7ed730a1, $a8847164ffcc6917$export$7fa6f9ee1e2cab96), this.core = n, this.logger = e;
    }
}
class $a8847164ffcc6917$var$Be extends (0, $8Qwm1.Store) {
    constructor(n, e){
        super(n, e, $a8847164ffcc6917$export$a069e98a8dfeec1e, $a8847164ffcc6917$export$7fa6f9ee1e2cab96), this.core = n, this.logger = e;
    }
}
class $a8847164ffcc6917$var$Ze extends (0, $8Qwm1.Store) {
    constructor(n, e){
        super(n, e, $a8847164ffcc6917$export$40b296af21bd38a4, $a8847164ffcc6917$export$7fa6f9ee1e2cab96), this.core = n, this.logger = e;
    }
}
class $a8847164ffcc6917$export$2e2bcd8739ae039 extends (0, $2S958.ISignClient) {
    constructor(n){
        super(n), this.protocol = $a8847164ffcc6917$export$4fa962fc67384e02, this.version = $a8847164ffcc6917$export$61085c48796ff049, this.name = $a8847164ffcc6917$export$8dffb3242f2c5f72.name, this.events = new (0, $2fbJO.EventEmitter), this.on = (s, t)=>this.events.on(s, t), this.once = (s, t)=>this.events.once(s, t), this.off = (s, t)=>this.events.off(s, t), this.removeListener = (s, t)=>this.events.removeListener(s, t), this.removeAllListeners = (s)=>this.events.removeAllListeners(s), this.connect = async (s)=>{
            try {
                return await this.engine.connect(s);
            } catch (t) {
                throw this.logger.error(t.message), t;
            }
        }, this.pair = async (s)=>{
            try {
                return await this.engine.pair(s);
            } catch (t) {
                throw this.logger.error(t.message), t;
            }
        }, this.approve = async (s)=>{
            try {
                return await this.engine.approve(s);
            } catch (t) {
                throw this.logger.error(t.message), t;
            }
        }, this.reject = async (s)=>{
            try {
                return await this.engine.reject(s);
            } catch (t) {
                throw this.logger.error(t.message), t;
            }
        }, this.update = async (s)=>{
            try {
                return await this.engine.update(s);
            } catch (t) {
                throw this.logger.error(t.message), t;
            }
        }, this.extend = async (s)=>{
            try {
                return await this.engine.extend(s);
            } catch (t) {
                throw this.logger.error(t.message), t;
            }
        }, this.request = async (s)=>{
            try {
                return await this.engine.request(s);
            } catch (t) {
                throw this.logger.error(t.message), t;
            }
        }, this.respond = async (s)=>{
            try {
                return await this.engine.respond(s);
            } catch (t) {
                throw this.logger.error(t.message), t;
            }
        }, this.ping = async (s)=>{
            try {
                return await this.engine.ping(s);
            } catch (t) {
                throw this.logger.error(t.message), t;
            }
        }, this.emit = async (s)=>{
            try {
                return await this.engine.emit(s);
            } catch (t) {
                throw this.logger.error(t.message), t;
            }
        }, this.disconnect = async (s)=>{
            try {
                return await this.engine.disconnect(s);
            } catch (t) {
                throw this.logger.error(t.message), t;
            }
        }, this.find = (s)=>{
            try {
                return this.engine.find(s);
            } catch (t) {
                throw this.logger.error(t.message), t;
            }
        }, this.getPendingSessionRequests = ()=>{
            try {
                return this.engine.getPendingSessionRequests();
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.name = n?.name || $a8847164ffcc6917$export$8dffb3242f2c5f72.name, this.metadata = n?.metadata || (0, $3xtlW.getAppMetadata)();
        const e = typeof n?.logger < "u" && typeof n?.logger != "string" ? n.logger : (0, (/*@__PURE__*/$parcel$interopDefault($aq96k)))((0, $giNA3.getDefaultLoggerOptions)({
            level: n?.logger || $a8847164ffcc6917$export$8dffb3242f2c5f72.logger
        }));
        this.core = n?.core || new (0, $8Qwm1.Core)(n), this.logger = (0, $giNA3.generateChildLogger)(e, this.name), this.session = new $a8847164ffcc6917$var$Be(this.core, this.logger), this.proposal = new $a8847164ffcc6917$var$Qe(this.core, this.logger), this.pendingRequest = new $a8847164ffcc6917$var$Ze(this.core, this.logger), this.engine = new $a8847164ffcc6917$var$Fe(this);
    }
    static async init(n) {
        const e = new $a8847164ffcc6917$export$2e2bcd8739ae039(n);
        return await e.initialize(), e;
    }
    get context() {
        return (0, $giNA3.getLoggerContext)(this.logger);
    }
    get pairing() {
        return this.core.pairing.pairings;
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.logger.info("SignClient Initialization Success");
        } catch (n) {
            throw this.logger.info("SignClient Initialization Failure"), this.logger.error(n.message), n;
        }
    }
}
const $a8847164ffcc6917$export$bdf4ba258ec679dc = $a8847164ffcc6917$export$2e2bcd8739ae039;

});
parcelRequire.register("8Qwm1", function(module, exports) {

$parcel$export(module.exports, "RELAYER_DEFAULT_PROTOCOL", () => $670c46ebf751391c$export$822d0bd1635d5360);
$parcel$export(module.exports, "RELAYER_EVENTS", () => $670c46ebf751391c$export$d56245796e2837d);
$parcel$export(module.exports, "EXPIRER_EVENTS", () => $670c46ebf751391c$export$9013719d9206b0c1);
$parcel$export(module.exports, "Store", () => $670c46ebf751391c$export$390f32400eaf98c9);
$parcel$export(module.exports, "Core", () => $670c46ebf751391c$export$4143ab5b91744744);

var $2fbJO = parcelRequire("2fbJO");

var $aq96k = parcelRequire("aq96k");

var $2hLdL = parcelRequire("2hLdL");

var $j1oI8 = parcelRequire("j1oI8");

var $giNA3 = parcelRequire("giNA3");

var $3nb8V = parcelRequire("3nb8V");

var $2nf8n = parcelRequire("2nf8n");
parcelRequire("bJ1HC");
var $cta69 = parcelRequire("cta69");
var $7xryO = parcelRequire("7xryO");

var $2mLND = parcelRequire("2mLND");

var $gm49L = parcelRequire("gm49L");

var $gNOfV = parcelRequire("gNOfV");

var $kOodT = parcelRequire("kOodT");

var $aeCHe = parcelRequire("aeCHe");

var $jX1rv = parcelRequire("jX1rv");
function $670c46ebf751391c$var$wi(r, e) {
    if (r.length >= 255) throw new TypeError("Alphabet too long");
    for(var t = new Uint8Array(256), i = 0; i < t.length; i++)t[i] = 255;
    for(var s = 0; s < r.length; s++){
        var n = r.charAt(s), a = n.charCodeAt(0);
        if (t[a] !== 255) throw new TypeError(n + " is ambiguous");
        t[a] = s;
    }
    var o = r.length, h = r.charAt(0), d = Math.log(o) / Math.log(256), l = Math.log(256) / Math.log(o);
    function g(u) {
        if (u instanceof Uint8Array || (ArrayBuffer.isView(u) ? u = new Uint8Array(u.buffer, u.byteOffset, u.byteLength) : Array.isArray(u) && (u = Uint8Array.from(u))), !(u instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
        if (u.length === 0) return "";
        for(var y = 0, O = 0, E = 0, _ = u.length; E !== _ && u[E] === 0;)E++, y++;
        for(var R = (_ - E) * l + 1 >>> 0, b = new Uint8Array(R); E !== _;){
            for(var S = u[E], x = 0, f = R - 1; (S !== 0 || x < O) && f !== -1; f--, x++)S += 256 * b[f] >>> 0, b[f] = S % o >>> 0, S = S / o >>> 0;
            if (S !== 0) throw new Error("Non-zero carry");
            O = x, E++;
        }
        for(var T = R - O; T !== R && b[T] === 0;)T++;
        for(var K = h.repeat(y); T < R; ++T)K += r.charAt(b[T]);
        return K;
    }
    function U(u) {
        if (typeof u != "string") throw new TypeError("Expected String");
        if (u.length === 0) return new Uint8Array;
        var y = 0;
        if (u[y] !== " ") {
            for(var O = 0, E = 0; u[y] === h;)O++, y++;
            for(var _ = (u.length - y) * d + 1 >>> 0, R = new Uint8Array(_); u[y];){
                var b = t[u.charCodeAt(y)];
                if (b === 255) return;
                for(var S = 0, x = _ - 1; (b !== 0 || S < E) && x !== -1; x--, S++)b += o * R[x] >>> 0, R[x] = b % 256 >>> 0, b = b / 256 >>> 0;
                if (b !== 0) throw new Error("Non-zero carry");
                E = S, y++;
            }
            if (u[y] !== " ") {
                for(var f = _ - E; f !== _ && R[f] === 0;)f++;
                for(var T = new Uint8Array(O + (_ - f)), K = O; f !== _;)T[K++] = R[f++];
                return T;
            }
        }
    }
    function q(u) {
        var y = U(u);
        if (y) return y;
        throw new Error(`Non-${e} character`);
    }
    return {
        encode: g,
        decodeUnsafe: U,
        decode: q
    };
}
var $670c46ebf751391c$var$vi = $670c46ebf751391c$var$wi, $670c46ebf751391c$var$Ii = $670c46ebf751391c$var$vi;
const $670c46ebf751391c$var$Ie = (r)=>{
    if (r instanceof Uint8Array && r.constructor.name === "Uint8Array") return r;
    if (r instanceof ArrayBuffer) return new Uint8Array(r);
    if (ArrayBuffer.isView(r)) return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
    throw new Error("Unknown type, must be binary type");
}, $670c46ebf751391c$var$Ci = (r)=>new TextEncoder().encode(r), $670c46ebf751391c$var$_i = (r)=>new TextDecoder().decode(r);
class $670c46ebf751391c$var$Ri {
    constructor(e, t, i){
        this.name = e, this.prefix = t, this.baseEncode = i;
    }
    encode(e) {
        if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
        throw Error("Unknown type, must be binary type");
    }
}
class $670c46ebf751391c$var$Si {
    constructor(e, t, i){
        if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
        this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i;
    }
    decode(e) {
        if (typeof e == "string") {
            if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(e.slice(this.prefix.length));
        } else throw Error("Can only multibase decode strings");
    }
    or(e) {
        return $670c46ebf751391c$var$Ce(this, e);
    }
}
class $670c46ebf751391c$var$Ti {
    constructor(e){
        this.decoders = e;
    }
    or(e) {
        return $670c46ebf751391c$var$Ce(this, e);
    }
    decode(e) {
        const t = e[0], i = this.decoders[t];
        if (i) return i.decode(e);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
}
const $670c46ebf751391c$var$Ce = (r, e)=>new $670c46ebf751391c$var$Ti({
        ...r.decoders || {
            [r.prefix]: r
        },
        ...e.decoders || {
            [e.prefix]: e
        }
    });
class $670c46ebf751391c$var$Pi {
    constructor(e, t, i, s){
        this.name = e, this.prefix = t, this.baseEncode = i, this.baseDecode = s, this.encoder = new $670c46ebf751391c$var$Ri(e, t, i), this.decoder = new $670c46ebf751391c$var$Si(e, t, s);
    }
    encode(e) {
        return this.encoder.encode(e);
    }
    decode(e) {
        return this.decoder.decode(e);
    }
}
const $670c46ebf751391c$var$k = ({ name: r , prefix: e , encode: t , decode: i  })=>new $670c46ebf751391c$var$Pi(r, e, t, i), $670c46ebf751391c$var$F = ({ prefix: r , name: e , alphabet: t  })=>{
    const { encode: i , decode: s  } = $670c46ebf751391c$var$Ii(t, e);
    return $670c46ebf751391c$var$k({
        prefix: r,
        name: e,
        encode: i,
        decode: (n)=>$670c46ebf751391c$var$Ie(s(n))
    });
}, $670c46ebf751391c$var$xi = (r, e, t, i)=>{
    const s = {};
    for(let l = 0; l < e.length; ++l)s[e[l]] = l;
    let n = r.length;
    for(; r[n - 1] === "=";)--n;
    const a = new Uint8Array(n * t / 8 | 0);
    let o = 0, h = 0, d = 0;
    for(let l = 0; l < n; ++l){
        const g = s[r[l]];
        if (g === void 0) throw new SyntaxError(`Non-${i} character`);
        h = h << t | g, o += t, o >= 8 && (o -= 8, a[d++] = 255 & h >> o);
    }
    if (o >= t || 255 & h << 8 - o) throw new SyntaxError("Unexpected end of data");
    return a;
}, $670c46ebf751391c$var$Oi = (r, e, t)=>{
    const i = e[e.length - 1] === "=", s = (1 << t) - 1;
    let n = "", a = 0, o = 0;
    for(let h = 0; h < r.length; ++h)for(o = o << 8 | r[h], a += 8; a > t;)a -= t, n += e[s & o >> a];
    if (a && (n += e[s & o << t - a]), i) for(; n.length * t & 7;)n += "=";
    return n;
}, $670c46ebf751391c$var$p = ({ name: r , prefix: e , bitsPerChar: t , alphabet: i  })=>$670c46ebf751391c$var$k({
        prefix: e,
        name: r,
        encode (s) {
            return $670c46ebf751391c$var$Oi(s, i, t);
        },
        decode (s) {
            return $670c46ebf751391c$var$xi(s, i, t, r);
        }
    }), $670c46ebf751391c$var$Ai = $670c46ebf751391c$var$k({
    prefix: "\0",
    name: "identity",
    encode: (r)=>$670c46ebf751391c$var$_i(r),
    decode: (r)=>$670c46ebf751391c$var$Ci(r)
});
var $670c46ebf751391c$var$zi = Object.freeze({
    __proto__: null,
    identity: $670c46ebf751391c$var$Ai
});
const $670c46ebf751391c$var$Ni = $670c46ebf751391c$var$p({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
});
var $670c46ebf751391c$var$Ui = Object.freeze({
    __proto__: null,
    base2: $670c46ebf751391c$var$Ni
});
const $670c46ebf751391c$var$Li = $670c46ebf751391c$var$p({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
});
var $670c46ebf751391c$var$Fi = Object.freeze({
    __proto__: null,
    base8: $670c46ebf751391c$var$Li
});
const $670c46ebf751391c$var$Mi = $670c46ebf751391c$var$F({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
});
var $670c46ebf751391c$var$Ki = Object.freeze({
    __proto__: null,
    base10: $670c46ebf751391c$var$Mi
});
const $670c46ebf751391c$var$$i = $670c46ebf751391c$var$p({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
}), $670c46ebf751391c$var$ki = $670c46ebf751391c$var$p({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
});
var $670c46ebf751391c$var$Bi = Object.freeze({
    __proto__: null,
    base16: $670c46ebf751391c$var$$i,
    base16upper: $670c46ebf751391c$var$ki
});
const $670c46ebf751391c$var$ji = $670c46ebf751391c$var$p({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
}), $670c46ebf751391c$var$Vi = $670c46ebf751391c$var$p({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
}), $670c46ebf751391c$var$qi = $670c46ebf751391c$var$p({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
}), $670c46ebf751391c$var$Gi = $670c46ebf751391c$var$p({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
}), $670c46ebf751391c$var$Yi = $670c46ebf751391c$var$p({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
}), $670c46ebf751391c$var$Ji = $670c46ebf751391c$var$p({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
}), $670c46ebf751391c$var$Hi = $670c46ebf751391c$var$p({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
}), $670c46ebf751391c$var$Xi = $670c46ebf751391c$var$p({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
}), $670c46ebf751391c$var$Wi = $670c46ebf751391c$var$p({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
});
var $670c46ebf751391c$var$Zi = Object.freeze({
    __proto__: null,
    base32: $670c46ebf751391c$var$ji,
    base32upper: $670c46ebf751391c$var$Vi,
    base32pad: $670c46ebf751391c$var$qi,
    base32padupper: $670c46ebf751391c$var$Gi,
    base32hex: $670c46ebf751391c$var$Yi,
    base32hexupper: $670c46ebf751391c$var$Ji,
    base32hexpad: $670c46ebf751391c$var$Hi,
    base32hexpadupper: $670c46ebf751391c$var$Xi,
    base32z: $670c46ebf751391c$var$Wi
});
const $670c46ebf751391c$var$Qi = $670c46ebf751391c$var$F({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), $670c46ebf751391c$var$es = $670c46ebf751391c$var$F({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
var $670c46ebf751391c$var$ts = Object.freeze({
    __proto__: null,
    base36: $670c46ebf751391c$var$Qi,
    base36upper: $670c46ebf751391c$var$es
});
const $670c46ebf751391c$var$is = $670c46ebf751391c$var$F({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), $670c46ebf751391c$var$ss = $670c46ebf751391c$var$F({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
var $670c46ebf751391c$var$rs = Object.freeze({
    __proto__: null,
    base58btc: $670c46ebf751391c$var$is,
    base58flickr: $670c46ebf751391c$var$ss
});
const $670c46ebf751391c$var$ns = $670c46ebf751391c$var$p({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
}), $670c46ebf751391c$var$as = $670c46ebf751391c$var$p({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
}), $670c46ebf751391c$var$os = $670c46ebf751391c$var$p({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
}), $670c46ebf751391c$var$hs = $670c46ebf751391c$var$p({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
});
var $670c46ebf751391c$var$cs = Object.freeze({
    __proto__: null,
    base64: $670c46ebf751391c$var$ns,
    base64pad: $670c46ebf751391c$var$as,
    base64url: $670c46ebf751391c$var$os,
    base64urlpad: $670c46ebf751391c$var$hs
});
const $670c46ebf751391c$var$_e = Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"), $670c46ebf751391c$var$us = $670c46ebf751391c$var$_e.reduce((r, e, t)=>(r[t] = e, r), []), $670c46ebf751391c$var$ls = $670c46ebf751391c$var$_e.reduce((r, e, t)=>(r[e.codePointAt(0)] = t, r), []);
function $670c46ebf751391c$var$ds(r) {
    return r.reduce((e, t)=>(e += $670c46ebf751391c$var$us[t], e), "");
}
function $670c46ebf751391c$var$gs(r) {
    const e = [];
    for (const t of r){
        const i = $670c46ebf751391c$var$ls[t.codePointAt(0)];
        if (i === void 0) throw new Error(`Non-base256emoji character: ${t}`);
        e.push(i);
    }
    return new Uint8Array(e);
}
const $670c46ebf751391c$var$ps = $670c46ebf751391c$var$k({
    prefix: "\uD83D\uDE80",
    name: "base256emoji",
    encode: $670c46ebf751391c$var$ds,
    decode: $670c46ebf751391c$var$gs
});
var $670c46ebf751391c$var$Ds = Object.freeze({
    __proto__: null,
    base256emoji: $670c46ebf751391c$var$ps
}), $670c46ebf751391c$var$ys = $670c46ebf751391c$var$Se, $670c46ebf751391c$var$Re = 128, $670c46ebf751391c$var$bs = 127, $670c46ebf751391c$var$ms = ~$670c46ebf751391c$var$bs, $670c46ebf751391c$var$Es = Math.pow(2, 31);
function $670c46ebf751391c$var$Se(r, e, t) {
    e = e || [], t = t || 0;
    for(var i = t; r >= $670c46ebf751391c$var$Es;)e[t++] = r & 255 | $670c46ebf751391c$var$Re, r /= 128;
    for(; r & $670c46ebf751391c$var$ms;)e[t++] = r & 255 | $670c46ebf751391c$var$Re, r >>>= 7;
    return e[t] = r | 0, $670c46ebf751391c$var$Se.bytes = t - i + 1, e;
}
var $670c46ebf751391c$var$fs = $670c46ebf751391c$var$ie, $670c46ebf751391c$var$ws = 128, $670c46ebf751391c$var$Te = 127;
function $670c46ebf751391c$var$ie(r, i) {
    var t = 0, i = i || 0, s = 0, n = i, a, o = r.length;
    do {
        if (n >= o) throw $670c46ebf751391c$var$ie.bytes = 0, new RangeError("Could not decode varint");
        a = r[n++], t += s < 28 ? (a & $670c46ebf751391c$var$Te) << s : (a & $670c46ebf751391c$var$Te) * Math.pow(2, s), s += 7;
    }while (a >= $670c46ebf751391c$var$ws);
    return $670c46ebf751391c$var$ie.bytes = n - i, t;
}
var $670c46ebf751391c$var$vs = Math.pow(2, 7), $670c46ebf751391c$var$Is = Math.pow(2, 14), $670c46ebf751391c$var$Cs = Math.pow(2, 21), $670c46ebf751391c$var$_s = Math.pow(2, 28), $670c46ebf751391c$var$Rs = Math.pow(2, 35), $670c46ebf751391c$var$Ss = Math.pow(2, 42), $670c46ebf751391c$var$Ts = Math.pow(2, 49), $670c46ebf751391c$var$Ps = Math.pow(2, 56), $670c46ebf751391c$var$xs = Math.pow(2, 63), $670c46ebf751391c$var$Os = function(r) {
    return r < $670c46ebf751391c$var$vs ? 1 : r < $670c46ebf751391c$var$Is ? 2 : r < $670c46ebf751391c$var$Cs ? 3 : r < $670c46ebf751391c$var$_s ? 4 : r < $670c46ebf751391c$var$Rs ? 5 : r < $670c46ebf751391c$var$Ss ? 6 : r < $670c46ebf751391c$var$Ts ? 7 : r < $670c46ebf751391c$var$Ps ? 8 : r < $670c46ebf751391c$var$xs ? 9 : 10;
}, $670c46ebf751391c$var$As = {
    encode: $670c46ebf751391c$var$ys,
    decode: $670c46ebf751391c$var$fs,
    encodingLength: $670c46ebf751391c$var$Os
}, $670c46ebf751391c$var$Pe = $670c46ebf751391c$var$As;
const $670c46ebf751391c$var$xe = (r, e, t = 0)=>($670c46ebf751391c$var$Pe.encode(r, e, t), e), $670c46ebf751391c$var$Oe = (r)=>$670c46ebf751391c$var$Pe.encodingLength(r), $670c46ebf751391c$var$se = (r, e)=>{
    const t = e.byteLength, i = $670c46ebf751391c$var$Oe(r), s = i + $670c46ebf751391c$var$Oe(t), n = new Uint8Array(s + t);
    return $670c46ebf751391c$var$xe(r, n, 0), $670c46ebf751391c$var$xe(t, n, i), n.set(e, s), new $670c46ebf751391c$var$zs(r, t, e, n);
};
class $670c46ebf751391c$var$zs {
    constructor(e, t, i, s){
        this.code = e, this.size = t, this.digest = i, this.bytes = s;
    }
}
const $670c46ebf751391c$var$Ae = ({ name: r , code: e , encode: t  })=>new $670c46ebf751391c$var$Ns(r, e, t);
class $670c46ebf751391c$var$Ns {
    constructor(e, t, i){
        this.name = e, this.code = t, this.encode = i;
    }
    digest(e) {
        if (e instanceof Uint8Array) {
            const t = this.encode(e);
            return t instanceof Uint8Array ? $670c46ebf751391c$var$se(this.code, t) : t.then((i)=>$670c46ebf751391c$var$se(this.code, i));
        } else throw Error("Unknown type, must be binary type");
    }
}
const $670c46ebf751391c$var$ze = (r)=>async (e)=>new Uint8Array(await crypto.subtle.digest(r, e)), $670c46ebf751391c$var$Us = $670c46ebf751391c$var$Ae({
    name: "sha2-256",
    code: 18,
    encode: $670c46ebf751391c$var$ze("SHA-256")
}), $670c46ebf751391c$var$Ls = $670c46ebf751391c$var$Ae({
    name: "sha2-512",
    code: 19,
    encode: $670c46ebf751391c$var$ze("SHA-512")
});
var $670c46ebf751391c$var$Fs = Object.freeze({
    __proto__: null,
    sha256: $670c46ebf751391c$var$Us,
    sha512: $670c46ebf751391c$var$Ls
});
const $670c46ebf751391c$var$Ne = 0, $670c46ebf751391c$var$Ms = "identity", $670c46ebf751391c$var$Ue = $670c46ebf751391c$var$Ie, $670c46ebf751391c$var$Ks = (r)=>$670c46ebf751391c$var$se($670c46ebf751391c$var$Ne, $670c46ebf751391c$var$Ue(r)), $670c46ebf751391c$var$$s = {
    code: $670c46ebf751391c$var$Ne,
    name: $670c46ebf751391c$var$Ms,
    encode: $670c46ebf751391c$var$Ue,
    digest: $670c46ebf751391c$var$Ks
};
var $670c46ebf751391c$var$ks = Object.freeze({
    __proto__: null,
    identity: $670c46ebf751391c$var$$s
});
new TextEncoder, new TextDecoder;
const $670c46ebf751391c$var$Le = {
    ...$670c46ebf751391c$var$zi,
    ...$670c46ebf751391c$var$Ui,
    ...$670c46ebf751391c$var$Fi,
    ...$670c46ebf751391c$var$Ki,
    ...$670c46ebf751391c$var$Bi,
    ...$670c46ebf751391c$var$Zi,
    ...$670c46ebf751391c$var$ts,
    ...$670c46ebf751391c$var$rs,
    ...$670c46ebf751391c$var$cs,
    ...$670c46ebf751391c$var$Ds
};
({
    ...$670c46ebf751391c$var$Fs,
    ...$670c46ebf751391c$var$ks
});
function $670c46ebf751391c$var$Bs(r = 0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(r) : new Uint8Array(r);
}
function $670c46ebf751391c$var$Fe(r, e, t, i) {
    return {
        name: r,
        prefix: e,
        encoder: {
            name: r,
            prefix: e,
            encode: t
        },
        decoder: {
            decode: i
        }
    };
}
const $670c46ebf751391c$var$Me = $670c46ebf751391c$var$Fe("utf8", "u", (r)=>"u" + new TextDecoder("utf8").decode(r), (r)=>new TextEncoder().encode(r.substring(1))), $670c46ebf751391c$var$re = $670c46ebf751391c$var$Fe("ascii", "a", (r)=>{
    let e = "a";
    for(let t = 0; t < r.length; t++)e += String.fromCharCode(r[t]);
    return e;
}, (r)=>{
    r = r.substring(1);
    const e = $670c46ebf751391c$var$Bs(r.length);
    for(let t = 0; t < r.length; t++)e[t] = r.charCodeAt(t);
    return e;
}), $670c46ebf751391c$var$js = {
    utf8: $670c46ebf751391c$var$Me,
    "utf-8": $670c46ebf751391c$var$Me,
    hex: $670c46ebf751391c$var$Le.base16,
    latin1: $670c46ebf751391c$var$re,
    ascii: $670c46ebf751391c$var$re,
    binary: $670c46ebf751391c$var$re,
    ...$670c46ebf751391c$var$Le
};
function $670c46ebf751391c$var$Vs(r, e = "utf8") {
    const t = $670c46ebf751391c$var$js[e];
    if (!t) throw new Error(`Unsupported encoding "${e}"`);
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(r, "utf8") : t.decoder.decode(`${t.prefix}${r}`);
}
const $670c46ebf751391c$export$51b1c900ac262bdf = "wc", $670c46ebf751391c$export$f30bd3c8747cdfbe = 2, $670c46ebf751391c$export$d47601f9de5ee22b = "core", $670c46ebf751391c$export$f258d29ae5e3d545 = `${$670c46ebf751391c$export$51b1c900ac262bdf}@${2}:${$670c46ebf751391c$export$d47601f9de5ee22b}:`, $670c46ebf751391c$export$db0fdb6d486555c2 = {
    name: $670c46ebf751391c$export$d47601f9de5ee22b,
    logger: "error"
}, $670c46ebf751391c$export$ba920abfe854b85d = {
    database: ":memory:"
}, $670c46ebf751391c$export$92a79f21481c803d = "crypto", $670c46ebf751391c$export$3613aa6e652146e4 = "client_ed25519_seed", $670c46ebf751391c$export$c4bc5e31a4d0ec78 = (0, $gm49L.ONE_DAY), $670c46ebf751391c$export$9d7218f72e8dc49b = "keychain", $670c46ebf751391c$export$34f82f4ba0c3d769 = "0.3", $670c46ebf751391c$export$9662bbc7d10cf481 = "messages", $670c46ebf751391c$export$19dfd1896412c038 = "0.3", $670c46ebf751391c$export$8ddbe6611b67d926 = (0, $gm49L.SIX_HOURS), $670c46ebf751391c$export$9d92662178f2abd1 = "publisher", $670c46ebf751391c$export$822d0bd1635d5360 = "irn", $670c46ebf751391c$export$5176ffa6778d6637 = "error", $670c46ebf751391c$export$a68061e6c48f332a = "wss://relay.walletconnect.com", $670c46ebf751391c$export$602d6e27611c3fcb = "relayer", $670c46ebf751391c$export$d56245796e2837d = {
    message: "relayer_message",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish"
}, $670c46ebf751391c$export$119b4645f6b233c8 = "_subscription", $670c46ebf751391c$export$58062acf2f31ddf8 = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error"
}, $670c46ebf751391c$export$11ccd39be2c57d6 = (0, $gm49L.ONE_SECOND), $670c46ebf751391c$export$44b621f74f0f4c93 = {
    database: ":memory:"
}, $670c46ebf751391c$export$5f30917a6f8c9025 = "2.3.3", $670c46ebf751391c$export$629a342182ba24b = "0.3", $670c46ebf751391c$export$24ff3e54e94ef413 = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed"
}, $670c46ebf751391c$export$9d35d0a6a3599be = (0, $gm49L.THIRTY_DAYS), $670c46ebf751391c$export$9c3a96bb670cddb8 = "subscription", $670c46ebf751391c$export$fb57e03bef4c4cea = "0.3", $670c46ebf751391c$export$9a2ddbfe54f8af77 = (0, $gm49L.FIVE_SECONDS) * 1e3, $670c46ebf751391c$export$390360ea476c6145 = "pairing", $670c46ebf751391c$export$5593ec74b27d1b18 = "0.3", $670c46ebf751391c$export$ee4b1978d0aedfad = (0, $gm49L.THIRTY_DAYS), $670c46ebf751391c$export$d94d6986a8185883 = {
    wc_pairingDelete: {
        req: {
            ttl: (0, $gm49L.ONE_DAY),
            prompt: !1,
            tag: 1e3
        },
        res: {
            ttl: (0, $gm49L.ONE_DAY),
            prompt: !1,
            tag: 1001
        }
    },
    wc_pairingPing: {
        req: {
            ttl: (0, $gm49L.THIRTY_SECONDS),
            prompt: !1,
            tag: 1002
        },
        res: {
            ttl: (0, $gm49L.THIRTY_SECONDS),
            prompt: !1,
            tag: 1003
        }
    },
    unregistered_method: {
        req: {
            ttl: (0, $gm49L.ONE_DAY),
            prompt: !1,
            tag: 0
        },
        res: {
            ttl: (0, $gm49L.ONE_DAY),
            prompt: !1,
            tag: 0
        }
    }
}, $670c46ebf751391c$export$a682338b5ffca937 = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync"
}, $670c46ebf751391c$export$160142c73cb99dc3 = "history", $670c46ebf751391c$export$8eba9ce85616c607 = "0.3", $670c46ebf751391c$export$4ddf883392bbc828 = "expirer", $670c46ebf751391c$export$9013719d9206b0c1 = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync"
}, $670c46ebf751391c$export$717295846191925d = "0.3", $670c46ebf751391c$export$3cfe73d6765db74 = (0, $gm49L.ONE_DAY);
class $670c46ebf751391c$export$dd4508d2540f08d3 {
    constructor(e, t){
        this.core = e, this.logger = t, this.keychain = new Map, this.name = $670c46ebf751391c$export$9d7218f72e8dc49b, this.version = $670c46ebf751391c$export$34f82f4ba0c3d769, this.initialized = !1, this.storagePrefix = $670c46ebf751391c$export$f258d29ae5e3d545, this.init = async ()=>{
            if (!this.initialized) {
                const i = await this.getKeyChain();
                typeof i < "u" && (this.keychain = i), this.initialized = !0;
            }
        }, this.has = (i)=>(this.isInitialized(), this.keychain.has(i)), this.set = async (i, s)=>{
            this.isInitialized(), this.keychain.set(i, s), await this.persist();
        }, this.get = (i)=>{
            this.isInitialized();
            const s = this.keychain.get(i);
            if (typeof s > "u") {
                const { message: n  } = (0, $2mLND.getInternalError)("NO_MATCHING_KEY", `${this.name}: ${i}`);
                throw new Error(n);
            }
            return s;
        }, this.del = async (i)=>{
            this.isInitialized(), this.keychain.delete(i), await this.persist();
        }, this.core = e, this.logger = (0, $giNA3.generateChildLogger)(t, this.name);
    }
    get context() {
        return (0, $giNA3.getLoggerContext)(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name;
    }
    async setKeyChain(e) {
        await this.core.storage.setItem(this.storageKey, (0, $2mLND.mapToObj)(e));
    }
    async getKeyChain() {
        const e = await this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? (0, $2mLND.objToMap)(e) : void 0;
    }
    async persist() {
        await this.setKeyChain(this.keychain);
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e  } = (0, $2mLND.getInternalError)("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class $670c46ebf751391c$export$8ac8b6291b7ccf24 {
    constructor(e, t, i){
        this.core = e, this.logger = t, this.name = $670c46ebf751391c$export$92a79f21481c803d, this.initialized = !1, this.init = async ()=>{
            this.initialized || (await this.keychain.init(), this.initialized = !0);
        }, this.hasKeys = (s)=>(this.isInitialized(), this.keychain.has(s)), this.getClientId = async ()=>{
            this.isInitialized();
            const s = await this.getClientSeed(), n = $cta69.generateKeyPair(s);
            return $7xryO.encodeIss(n.publicKey);
        }, this.generateKeyPair = ()=>{
            this.isInitialized();
            const s = (0, $2mLND.generateKeyPair)();
            return this.setPrivateKey(s.publicKey, s.privateKey);
        }, this.signJWT = async (s)=>{
            this.isInitialized();
            const n = await this.getClientSeed(), a = $cta69.generateKeyPair(n), o = (0, $2mLND.generateRandomBytes32)(), h = $670c46ebf751391c$export$c4bc5e31a4d0ec78;
            return await $cta69.signJWT(o, s, h, a);
        }, this.generateSharedKey = (s, n, a)=>{
            this.isInitialized();
            const o = this.getPrivateKey(s), h = (0, $2mLND.deriveSymKey)(o, n);
            return this.setSymKey(h, a);
        }, this.setSymKey = async (s, n)=>{
            this.isInitialized();
            const a = n || (0, $2mLND.hashKey)(s);
            return await this.keychain.set(a, s), a;
        }, this.deleteKeyPair = async (s)=>{
            this.isInitialized(), await this.keychain.del(s);
        }, this.deleteSymKey = async (s)=>{
            this.isInitialized(), await this.keychain.del(s);
        }, this.encode = async (s, n, a)=>{
            this.isInitialized();
            const o = (0, $2mLND.validateEncoding)(a), h = (0, $2nf8n.safeJsonStringify)(n);
            if ((0, $2mLND.isTypeOneEnvelope)(o)) {
                const U = o.senderPublicKey, q = o.receiverPublicKey;
                s = await this.generateSharedKey(U, q);
            }
            const d = this.getSymKey(s), { type: l , senderPublicKey: g  } = o;
            return (0, $2mLND.encrypt)({
                type: l,
                symKey: d,
                message: h,
                senderPublicKey: g
            });
        }, this.decode = async (s, n, a)=>{
            this.isInitialized();
            const o = (0, $2mLND.validateDecoding)(n, a);
            if ((0, $2mLND.isTypeOneEnvelope)(o)) {
                const l = o.receiverPublicKey, g = o.senderPublicKey;
                s = await this.generateSharedKey(l, g);
            }
            const h = this.getSymKey(s), d = (0, $2mLND.decrypt)({
                symKey: h,
                encoded: n
            });
            return (0, $2nf8n.safeJsonParse)(d);
        }, this.core = e, this.logger = (0, $giNA3.generateChildLogger)(t, this.name), this.keychain = i || new $670c46ebf751391c$export$dd4508d2540f08d3(this.core, this.logger);
    }
    get context() {
        return (0, $giNA3.getLoggerContext)(this.logger);
    }
    getPayloadType(e) {
        const t = (0, $2mLND.deserialize)(e);
        return (0, $2mLND.decodeTypeByte)(t.type);
    }
    async setPrivateKey(e, t) {
        return await this.keychain.set(e, t), e;
    }
    getPrivateKey(e) {
        return this.keychain.get(e);
    }
    async getClientSeed() {
        let e = "";
        try {
            e = this.keychain.get($670c46ebf751391c$export$3613aa6e652146e4);
        } catch  {
            e = (0, $2mLND.generateRandomBytes32)(), await this.keychain.set($670c46ebf751391c$export$3613aa6e652146e4, e);
        }
        return $670c46ebf751391c$var$Vs(e, "base16");
    }
    getSymKey(e) {
        return this.keychain.get(e);
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e  } = (0, $2mLND.getInternalError)("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class $670c46ebf751391c$export$4a2542d0790ac2fd extends (0, $3nb8V.IMessageTracker) {
    constructor(e, t){
        super(e, t), this.logger = e, this.core = t, this.messages = new Map, this.name = $670c46ebf751391c$export$9662bbc7d10cf481, this.version = $670c46ebf751391c$export$19dfd1896412c038, this.initialized = !1, this.storagePrefix = $670c46ebf751391c$export$f258d29ae5e3d545, this.init = async ()=>{
            if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                    const i = await this.getRelayerMessages();
                    typeof i < "u" && (this.messages = i), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                        type: "method",
                        method: "restore",
                        size: this.messages.size
                    });
                } catch (i) {
                    this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i);
                } finally{
                    this.initialized = !0;
                }
            }
        }, this.set = async (i, s)=>{
            this.isInitialized();
            const n = (0, $2mLND.hashMessage)(s);
            let a = this.messages.get(i);
            return typeof a > "u" && (a = {}), typeof a[n] < "u" || (a[n] = s, this.messages.set(i, a), await this.persist()), n;
        }, this.get = (i)=>{
            this.isInitialized();
            let s = this.messages.get(i);
            return typeof s > "u" && (s = {}), s;
        }, this.has = (i, s)=>{
            this.isInitialized();
            const n = this.get(i), a = (0, $2mLND.hashMessage)(s);
            return typeof n[a] < "u";
        }, this.del = async (i)=>{
            this.isInitialized(), this.messages.delete(i), await this.persist();
        }, this.logger = (0, $giNA3.generateChildLogger)(e, this.name), this.core = t;
    }
    get context() {
        return (0, $giNA3.getLoggerContext)(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name;
    }
    async setRelayerMessages(e) {
        await this.core.storage.setItem(this.storageKey, (0, $2mLND.mapToObj)(e));
    }
    async getRelayerMessages() {
        const e = await this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? (0, $2mLND.objToMap)(e) : void 0;
    }
    async persist() {
        await this.setRelayerMessages(this.messages);
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e  } = (0, $2mLND.getInternalError)("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class $670c46ebf751391c$var$Hs extends (0, $3nb8V.IPublisher) {
    constructor(e, t){
        super(e, t), this.relayer = e, this.logger = t, this.events = new (0, $2fbJO.EventEmitter), this.name = $670c46ebf751391c$export$9d92662178f2abd1, this.queue = new Map, this.publishTimeout = 1e4, this.publish = async (i, s, n)=>{
            this.logger.debug("Publishing Payload"), this.logger.trace({
                type: "method",
                method: "publish",
                params: {
                    topic: i,
                    message: s,
                    opts: n
                }
            });
            try {
                const a = n?.ttl || $670c46ebf751391c$export$8ddbe6611b67d926, o = (0, $2mLND.getRelayProtocolName)(n), h = n?.prompt || !1, d = n?.tag || 0, l = {
                    topic: i,
                    message: s,
                    opts: {
                        ttl: a,
                        relay: o,
                        prompt: h,
                        tag: d
                    }
                }, g = (0, $2mLND.hashMessage)(s);
                this.queue.set(g, l);
                try {
                    await await (0, $2mLND.createExpiringPromise)(this.rpcPublish(i, s, a, o, h, d), this.publishTimeout), this.relayer.events.emit($670c46ebf751391c$export$d56245796e2837d.publish, l);
                } catch  {
                    this.logger.debug("Publishing Payload stalled"), this.relayer.events.emit($670c46ebf751391c$export$d56245796e2837d.connection_stalled);
                    return;
                }
                this.onPublish(g, l), this.logger.debug("Successfully Published Payload"), this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: {
                        topic: i,
                        message: s,
                        opts: n
                    }
                });
            } catch (a) {
                throw this.logger.debug("Failed to Publish Payload"), this.logger.error(a), a;
            }
        }, this.on = (i, s)=>{
            this.events.on(i, s);
        }, this.once = (i, s)=>{
            this.events.once(i, s);
        }, this.off = (i, s)=>{
            this.events.off(i, s);
        }, this.removeListener = (i, s)=>{
            this.events.removeListener(i, s);
        }, this.relayer = e, this.logger = (0, $giNA3.generateChildLogger)(t, this.name), this.registerEventListeners();
    }
    get context() {
        return (0, $giNA3.getLoggerContext)(this.logger);
    }
    rpcPublish(e, t, i, s, n, a) {
        var o, h, d, l;
        const g = {
            method: (0, $2mLND.getRelayProtocolApi)(s.protocol).publish,
            params: {
                topic: e,
                message: t,
                ttl: i,
                prompt: n,
                tag: a
            }
        };
        return (0, $2mLND.isUndefined)((o = g.params) == null ? void 0 : o.prompt) && ((h = g.params) == null || delete h.prompt), (0, $2mLND.isUndefined)((d = g.params) == null ? void 0 : d.tag) && ((l = g.params) == null || delete l.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "message",
            direction: "outgoing",
            request: g
        }), this.relayer.provider.request(g);
    }
    onPublish(e, t) {
        this.queue.delete(e);
    }
    checkQueue() {
        this.queue.forEach(async (e)=>{
            const { topic: t , message: i , opts: s  } = e;
            await this.publish(t, i, s);
        });
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on((0, $j1oI8.HEARTBEAT_EVENTS).pulse, ()=>{
            this.checkQueue();
        });
    }
}
class $670c46ebf751391c$var$Xs {
    constructor(){
        this.map = new Map, this.set = (e, t)=>{
            const i = this.get(e);
            this.exists(e, t) || this.map.set(e, [
                ...i,
                t
            ]);
        }, this.get = (e)=>this.map.get(e) || [], this.exists = (e, t)=>this.get(e).includes(t), this.delete = (e, t)=>{
            if (typeof t > "u") {
                this.map.delete(e);
                return;
            }
            if (!this.map.has(e)) return;
            const i = this.get(e);
            if (!this.exists(e, t)) return;
            const s = i.filter((n)=>n !== t);
            if (!s.length) {
                this.map.delete(e);
                return;
            }
            this.map.set(e, s);
        }, this.clear = ()=>{
            this.map.clear();
        };
    }
    get topics() {
        return Array.from(this.map.keys());
    }
}
var $670c46ebf751391c$var$Ws = Object.defineProperty, $670c46ebf751391c$var$Zs = Object.defineProperties, $670c46ebf751391c$var$Qs = Object.getOwnPropertyDescriptors, $670c46ebf751391c$var$Dt = Object.getOwnPropertySymbols, $670c46ebf751391c$var$er = Object.prototype.hasOwnProperty, $670c46ebf751391c$var$tr = Object.prototype.propertyIsEnumerable, $670c46ebf751391c$var$yt = (r, e, t)=>e in r ? $670c46ebf751391c$var$Ws(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, $670c46ebf751391c$var$j = (r, e)=>{
    for(var t in e || (e = {}))$670c46ebf751391c$var$er.call(e, t) && $670c46ebf751391c$var$yt(r, t, e[t]);
    if ($670c46ebf751391c$var$Dt) for (var t of $670c46ebf751391c$var$Dt(e))$670c46ebf751391c$var$tr.call(e, t) && $670c46ebf751391c$var$yt(r, t, e[t]);
    return r;
}, $670c46ebf751391c$var$he = (r, e)=>$670c46ebf751391c$var$Zs(r, $670c46ebf751391c$var$Qs(e));
class $670c46ebf751391c$export$60959659b2c22881 extends (0, $3nb8V.ISubscriber) {
    constructor(e, t){
        super(e, t), this.relayer = e, this.logger = t, this.subscriptions = new Map, this.topicMap = new $670c46ebf751391c$var$Xs, this.events = new (0, $2fbJO.EventEmitter), this.name = $670c46ebf751391c$export$9c3a96bb670cddb8, this.version = $670c46ebf751391c$export$fb57e03bef4c4cea, this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pendingSubInterval = 20, this.storagePrefix = $670c46ebf751391c$export$f258d29ae5e3d545, this.subscribeTimeout = 1e4, this.init = async ()=>{
            this.initialized || (this.logger.trace("Initialized"), await this.restart(), this.registerEventListeners(), this.onEnable());
        }, this.subscribe = async (i, s)=>{
            this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                type: "method",
                method: "subscribe",
                params: {
                    topic: i,
                    opts: s
                }
            });
            try {
                const n = (0, $2mLND.getRelayProtocolName)(s), a = {
                    topic: i,
                    relay: n
                };
                this.pending.set(i, a);
                const o = await this.rpcSubscribe(i, n);
                return this.onSubscribe(o, a), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: {
                        topic: i,
                        opts: s
                    }
                }), o;
            } catch (n) {
                throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(n), n;
            }
        }, this.unsubscribe = async (i, s)=>{
            this.isInitialized(), typeof s?.id < "u" ? await this.unsubscribeById(i, s.id, s) : await this.unsubscribeByTopic(i, s);
        }, this.isSubscribed = async (i)=>this.topics.includes(i) ? !0 : await new Promise((s, n)=>{
                const a = new (0, $gm49L.Watch);
                a.start(this.pendingSubscriptionWatchLabel);
                const o = setInterval(()=>{
                    !this.pending.has(i) && this.topics.includes(i) && (clearInterval(o), a.stop(this.pendingSubscriptionWatchLabel), s(!0)), a.elapsed(this.pendingSubscriptionWatchLabel) >= $670c46ebf751391c$export$9a2ddbfe54f8af77 && (clearInterval(o), a.stop(this.pendingSubscriptionWatchLabel), n(!1));
                }, this.pendingSubInterval);
            }), this.on = (i, s)=>{
            this.events.on(i, s);
        }, this.once = (i, s)=>{
            this.events.once(i, s);
        }, this.off = (i, s)=>{
            this.events.off(i, s);
        }, this.removeListener = (i, s)=>{
            this.events.removeListener(i, s);
        }, this.restart = async ()=>{
            await this.restore(), await this.reset();
        }, this.relayer = e, this.logger = (0, $giNA3.generateChildLogger)(t, this.name);
    }
    get context() {
        return (0, $giNA3.getLoggerContext)(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name;
    }
    get length() {
        return this.subscriptions.size;
    }
    get ids() {
        return Array.from(this.subscriptions.keys());
    }
    get values() {
        return Array.from(this.subscriptions.values());
    }
    get topics() {
        return this.topicMap.topics;
    }
    hasSubscription(e, t) {
        let i = !1;
        try {
            i = this.getSubscription(e).topic === t;
        } catch  {}
        return i;
    }
    onEnable() {
        this.cached = [], this.initialized = !0;
    }
    onDisable() {
        this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear(), this.initialized = !1;
    }
    async unsubscribeByTopic(e, t) {
        const i = this.topicMap.get(e);
        await Promise.all(i.map(async (s)=>await this.unsubscribeById(e, s, t)));
    }
    async unsubscribeById(e, t, i) {
        this.logger.debug("Unsubscribing Topic"), this.logger.trace({
            type: "method",
            method: "unsubscribe",
            params: {
                topic: e,
                id: t,
                opts: i
            }
        });
        try {
            const s = (0, $2mLND.getRelayProtocolName)(i);
            await this.rpcUnsubscribe(e, t, s);
            const n = (0, $2mLND.getSdkError)("USER_DISCONNECTED", `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: {
                    topic: e,
                    id: t,
                    opts: i
                }
            });
        } catch (s) {
            throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s;
        }
    }
    async rpcSubscribe(e, t) {
        const i = {
            method: (0, $2mLND.getRelayProtocolApi)(t.protocol).subscribe,
            params: {
                topic: e
            }
        };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: i
        });
        let s;
        try {
            s = await await (0, $2mLND.createExpiringPromise)(this.relayer.provider.request(i), this.subscribeTimeout);
        } catch  {
            this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit($670c46ebf751391c$export$d56245796e2837d.connection_stalled);
        }
        return s;
    }
    rpcUnsubscribe(e, t, i) {
        const s = {
            method: (0, $2mLND.getRelayProtocolApi)(i.protocol).unsubscribe,
            params: {
                topic: e,
                id: t
            }
        };
        return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: s
        }), this.relayer.provider.request(s);
    }
    onSubscribe(e, t) {
        this.setSubscription(e, $670c46ebf751391c$var$he($670c46ebf751391c$var$j({}, t), {
            id: e
        })), this.pending.delete(t.topic);
    }
    onResubscribe(e, t) {
        this.addSubscription(e, $670c46ebf751391c$var$he($670c46ebf751391c$var$j({}, t), {
            id: e
        })), this.pending.delete(t.topic);
    }
    async onUnsubscribe(e, t, i) {
        this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, i), await this.relayer.messages.del(e);
    }
    async setRelayerSubscriptions(e) {
        await this.relayer.core.storage.setItem(this.storageKey, e);
    }
    async getRelayerSubscriptions() {
        return await this.relayer.core.storage.getItem(this.storageKey);
    }
    setSubscription(e, t) {
        this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({
            type: "method",
            method: "setSubscription",
            id: e,
            subscription: t
        }), this.addSubscription(e, t));
    }
    addSubscription(e, t) {
        this.subscriptions.set(e, $670c46ebf751391c$var$j({}, t)), this.topicMap.set(t.topic, e), this.events.emit($670c46ebf751391c$export$24ff3e54e94ef413.created, t);
    }
    getSubscription(e) {
        this.logger.debug("Getting subscription"), this.logger.trace({
            type: "method",
            method: "getSubscription",
            id: e
        });
        const t = this.subscriptions.get(e);
        if (!t) {
            const { message: i  } = (0, $2mLND.getInternalError)("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(i);
        }
        return t;
    }
    deleteSubscription(e, t) {
        this.logger.debug("Deleting subscription"), this.logger.trace({
            type: "method",
            method: "deleteSubscription",
            id: e,
            reason: t
        });
        const i = this.getSubscription(e);
        this.subscriptions.delete(e), this.topicMap.delete(i.topic, e), this.events.emit($670c46ebf751391c$export$24ff3e54e94ef413.deleted, $670c46ebf751391c$var$he($670c46ebf751391c$var$j({}, i), {
            reason: t
        }));
    }
    async persist() {
        await this.setRelayerSubscriptions(this.values), this.events.emit($670c46ebf751391c$export$24ff3e54e94ef413.sync);
    }
    async reset() {
        this.cached.length && await Promise.all(this.cached.map(async (e)=>await this.resubscribe(e))), this.events.emit($670c46ebf751391c$export$24ff3e54e94ef413.resubscribed);
    }
    async restore() {
        try {
            const e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length) return;
            if (this.subscriptions.size) {
                const { message: t  } = (0, $2mLND.getInternalError)("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), new Error(t);
            }
            this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values
            });
        } catch (e) {
            this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
        }
    }
    async resubscribe(e) {
        if (!this.ids.includes(e.id)) {
            const { topic: t , relay: i  } = e, s = {
                topic: t,
                relay: i
            };
            this.pending.set(s.topic, s);
            const n = await this.rpcSubscribe(s.topic, s.relay);
            this.onResubscribe(n, s);
        }
    }
    async onConnect() {
        await this.restart(), this.onEnable();
    }
    onDisconnect() {
        this.onDisable();
    }
    checkPending() {
        this.relayer.transportExplicitlyClosed || this.pending.forEach(async (e)=>{
            const t = await this.rpcSubscribe(e.topic, e.relay);
            this.onSubscribe(t, e);
        });
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on((0, $j1oI8.HEARTBEAT_EVENTS).pulse, ()=>{
            this.checkPending();
        }), this.relayer.on($670c46ebf751391c$export$d56245796e2837d.connect, async ()=>{
            await this.onConnect();
        }), this.relayer.on($670c46ebf751391c$export$d56245796e2837d.disconnect, ()=>{
            this.onDisconnect();
        }), this.events.on($670c46ebf751391c$export$24ff3e54e94ef413.created, async (e)=>{
            const t = $670c46ebf751391c$export$24ff3e54e94ef413.created;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), await this.persist();
        }), this.events.on($670c46ebf751391c$export$24ff3e54e94ef413.deleted, async (e)=>{
            const t = $670c46ebf751391c$export$24ff3e54e94ef413.deleted;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), await this.persist();
        });
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e  } = (0, $2mLND.getInternalError)("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
var $670c46ebf751391c$var$ir = Object.defineProperty, $670c46ebf751391c$var$mt = Object.getOwnPropertySymbols, $670c46ebf751391c$var$sr = Object.prototype.hasOwnProperty, $670c46ebf751391c$var$rr = Object.prototype.propertyIsEnumerable, $670c46ebf751391c$var$Et = (r, e, t)=>e in r ? $670c46ebf751391c$var$ir(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, $670c46ebf751391c$var$nr = (r, e)=>{
    for(var t in e || (e = {}))$670c46ebf751391c$var$sr.call(e, t) && $670c46ebf751391c$var$Et(r, t, e[t]);
    if ($670c46ebf751391c$var$mt) for (var t of $670c46ebf751391c$var$mt(e))$670c46ebf751391c$var$rr.call(e, t) && $670c46ebf751391c$var$Et(r, t, e[t]);
    return r;
};
class $670c46ebf751391c$export$70e73aa29a3d4407 extends (0, $3nb8V.IRelayer) {
    constructor(e){
        super(e), this.protocol = "wc", this.version = 2, this.events = new (0, $2fbJO.EventEmitter), this.name = $670c46ebf751391c$export$602d6e27611c3fcb, this.transportExplicitlyClosed = !1, this.initialized = !1, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? (0, $giNA3.generateChildLogger)(e.logger, this.name) : (0, (/*@__PURE__*/$parcel$interopDefault($aq96k)))((0, $giNA3.getDefaultLoggerOptions)({
            level: e.logger || $670c46ebf751391c$export$5176ffa6778d6637
        })), this.messages = new $670c46ebf751391c$export$4a2542d0790ac2fd(this.logger, e.core), this.subscriber = new $670c46ebf751391c$export$60959659b2c22881(this, this.logger), this.publisher = new $670c46ebf751391c$var$Hs(this, this.logger), this.relayUrl = e?.relayUrl || $670c46ebf751391c$export$a68061e6c48f332a, this.projectId = e.projectId, this.provider = {};
    }
    async init() {
        this.logger.trace("Initialized"), this.provider = await this.createProvider(), await Promise.all([
            this.messages.init(),
            this.transportOpen(),
            this.subscriber.init()
        ]), this.registerEventListeners(), this.initialized = !0;
    }
    get context() {
        return (0, $giNA3.getLoggerContext)(this.logger);
    }
    get connected() {
        return this.provider.connection.connected;
    }
    get connecting() {
        return this.provider.connection.connecting;
    }
    async publish(e, t, i) {
        this.isInitialized(), await this.publisher.publish(e, t, i), await this.recordMessageEvent({
            topic: e,
            message: t
        });
    }
    async subscribe(e, t) {
        this.isInitialized();
        let i = "";
        return await Promise.all([
            new Promise((s)=>{
                this.subscriber.once($670c46ebf751391c$export$24ff3e54e94ef413.created, (n)=>{
                    n.topic === e && s();
                });
            }),
            new Promise(async (s)=>{
                i = await this.subscriber.subscribe(e, t), s();
            })
        ]), i;
    }
    async unsubscribe(e, t) {
        this.isInitialized(), await this.subscriber.unsubscribe(e, t);
    }
    on(e, t) {
        this.events.on(e, t);
    }
    once(e, t) {
        this.events.once(e, t);
    }
    off(e, t) {
        this.events.off(e, t);
    }
    removeListener(e, t) {
        this.events.removeListener(e, t);
    }
    async transportClose() {
        this.transportExplicitlyClosed = !0, this.connected && (await this.provider.disconnect(), this.events.emit($670c46ebf751391c$export$d56245796e2837d.transport_closed));
    }
    async transportOpen(e) {
        this.relayUrl = e || this.relayUrl, this.transportExplicitlyClosed = !1;
        try {
            await Promise.all([
                new Promise((t)=>{
                    this.initialized || t(), this.subscriber.once($670c46ebf751391c$export$24ff3e54e94ef413.resubscribed, ()=>{
                        t();
                    });
                }),
                await Promise.race([
                    this.provider.connect(),
                    new Promise((t, i)=>this.once($670c46ebf751391c$export$d56245796e2837d.transport_closed, ()=>{
                            i(new Error("closeTransport called before connection was established"));
                        }))
                ])
            ]);
        } catch (t) {
            const i = t;
            if (!/socket hang up/i.test(i.message)) throw new Error(i.message);
            this.logger.error(i), this.events.emit($670c46ebf751391c$export$d56245796e2837d.transport_closed);
        }
    }
    async restartTransport(e) {
        await this.transportClose(), await new Promise((t)=>setTimeout(t, $670c46ebf751391c$export$11ccd39be2c57d6)), await this.transportOpen(e);
    }
    async createProvider() {
        const e = await this.core.crypto.signJWT(this.relayUrl);
        return new (0, $gNOfV.JsonRpcProvider)(new (0, $aeCHe.default)((0, $2mLND.formatRelayRpcUrl)({
            sdkVersion: $670c46ebf751391c$export$5f30917a6f8c9025,
            protocol: this.protocol,
            version: this.version,
            relayUrl: this.relayUrl,
            projectId: this.projectId,
            auth: e
        })));
    }
    async recordMessageEvent(e) {
        const { topic: t , message: i  } = e;
        await this.messages.set(t, i);
    }
    async shouldIgnoreMessageEvent(e) {
        const { topic: t , message: i  } = e;
        return await this.subscriber.isSubscribed(t) ? this.messages.has(t, i) : !0;
    }
    async onProviderPayload(e) {
        if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "incoming",
            payload: e
        }), (0, $kOodT.isJsonRpcRequest)(e)) {
            if (!e.method.endsWith($670c46ebf751391c$export$119b4645f6b233c8)) return;
            const t = e.params, { topic: i , message: s  } = t.data, n = {
                topic: i,
                message: s
            };
            this.logger.debug("Emitting Relayer Payload"), this.logger.trace($670c46ebf751391c$var$nr({
                type: "event",
                event: t.id
            }, n)), this.events.emit(t.id, n), await this.acknowledgePayload(e), await this.onMessageEvent(n);
        }
    }
    async onMessageEvent(e) {
        await this.shouldIgnoreMessageEvent(e) || (this.events.emit($670c46ebf751391c$export$d56245796e2837d.message, e), await this.recordMessageEvent(e));
    }
    async acknowledgePayload(e) {
        const t = (0, $kOodT.formatJsonRpcResult)(e.id, !0);
        await this.provider.connection.send(t);
    }
    registerEventListeners() {
        this.provider.on($670c46ebf751391c$export$58062acf2f31ddf8.payload, (e)=>this.onProviderPayload(e)), this.provider.on($670c46ebf751391c$export$58062acf2f31ddf8.connect, ()=>{
            this.events.emit($670c46ebf751391c$export$d56245796e2837d.connect);
        }), this.provider.on($670c46ebf751391c$export$58062acf2f31ddf8.disconnect, ()=>{
            this.events.emit($670c46ebf751391c$export$d56245796e2837d.disconnect), this.attemptToReconnect();
        }), this.provider.on($670c46ebf751391c$export$58062acf2f31ddf8.error, (e)=>this.events.emit($670c46ebf751391c$export$d56245796e2837d.error, e)), this.events.on($670c46ebf751391c$export$d56245796e2837d.connection_stalled, async ()=>{
            await this.restartTransport();
        });
    }
    attemptToReconnect() {
        this.transportExplicitlyClosed || setTimeout(async ()=>{
            await this.transportOpen();
        }, (0, $gm49L.toMiliseconds)($670c46ebf751391c$export$11ccd39be2c57d6));
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e  } = (0, $2mLND.getInternalError)("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
var $670c46ebf751391c$var$ar = Object.defineProperty, $670c46ebf751391c$var$wt = Object.getOwnPropertySymbols, $670c46ebf751391c$var$or = Object.prototype.hasOwnProperty, $670c46ebf751391c$var$hr = Object.prototype.propertyIsEnumerable, $670c46ebf751391c$var$vt = (r, e, t)=>e in r ? $670c46ebf751391c$var$ar(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, $670c46ebf751391c$var$It = (r, e)=>{
    for(var t in e || (e = {}))$670c46ebf751391c$var$or.call(e, t) && $670c46ebf751391c$var$vt(r, t, e[t]);
    if ($670c46ebf751391c$var$wt) for (var t of $670c46ebf751391c$var$wt(e))$670c46ebf751391c$var$hr.call(e, t) && $670c46ebf751391c$var$vt(r, t, e[t]);
    return r;
};
class $670c46ebf751391c$export$390f32400eaf98c9 extends (0, $3nb8V.IStore) {
    constructor(e, t, i, s = $670c46ebf751391c$export$f258d29ae5e3d545, n){
        super(e, t, i, s), this.core = e, this.logger = t, this.name = i, this.map = new Map, this.version = $670c46ebf751391c$export$629a342182ba24b, this.cached = [], this.initialized = !1, this.storagePrefix = $670c46ebf751391c$export$f258d29ae5e3d545, this.init = async ()=>{
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((a)=>{
                (0, $2mLND.isProposalStruct)(a) ? this.map.set(a.id, a) : (0, $2mLND.isSessionStruct)(a) ? this.map.set(a.topic, a) : this.getKey && a !== null && !(0, $2mLND.isUndefined)(a) && this.map.set(this.getKey(a), a);
            }), this.cached = [], this.initialized = !0);
        }, this.set = async (a, o)=>{
            this.isInitialized(), this.map.has(a) ? await this.update(a, o) : (this.logger.debug("Setting value"), this.logger.trace({
                type: "method",
                method: "set",
                key: a,
                value: o
            }), this.map.set(a, o), await this.persist());
        }, this.get = (a)=>(this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                type: "method",
                method: "get",
                key: a
            }), this.getData(a)), this.getAll = (a)=>(this.isInitialized(), a ? this.values.filter((o)=>Object.keys(a).every((h)=>(0, (/*@__PURE__*/$parcel$interopDefault($jX1rv)))(o[h], a[h]))) : this.values), this.update = async (a, o)=>{
            this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                type: "method",
                method: "update",
                key: a,
                update: o
            });
            const h = $670c46ebf751391c$var$It($670c46ebf751391c$var$It({}, this.getData(a)), o);
            this.map.set(a, h), await this.persist();
        }, this.delete = async (a, o)=>{
            this.isInitialized(), this.map.has(a) && (this.logger.debug("Deleting value"), this.logger.trace({
                type: "method",
                method: "delete",
                key: a,
                reason: o
            }), this.map.delete(a), await this.persist());
        }, this.logger = (0, $giNA3.generateChildLogger)(t, this.name), this.storagePrefix = s, this.getKey = n;
    }
    get context() {
        return (0, $giNA3.getLoggerContext)(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name;
    }
    get length() {
        return this.map.size;
    }
    get keys() {
        return Array.from(this.map.keys());
    }
    get values() {
        return Array.from(this.map.values());
    }
    async setDataStore(e) {
        await this.core.storage.setItem(this.storageKey, e);
    }
    async getDataStore() {
        return await this.core.storage.getItem(this.storageKey);
    }
    getData(e) {
        const t = this.map.get(e);
        if (!t) {
            const { message: i  } = (0, $2mLND.getInternalError)("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.error(i), new Error(i);
        }
        return t;
    }
    async persist() {
        await this.setDataStore(this.values);
    }
    async restore() {
        try {
            const e = await this.getDataStore();
            if (typeof e > "u" || !e.length) return;
            if (this.map.size) {
                const { message: t  } = (0, $2mLND.getInternalError)("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), new Error(t);
            }
            this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values
            });
        } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e  } = (0, $2mLND.getInternalError)("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class $670c46ebf751391c$export$3370ee24730992a3 {
    constructor(e, t){
        this.core = e, this.logger = t, this.name = $670c46ebf751391c$export$390360ea476c6145, this.version = $670c46ebf751391c$export$5593ec74b27d1b18, this.events = new (0, (/*@__PURE__*/$parcel$interopDefault($2fbJO))), this.initialized = !1, this.storagePrefix = $670c46ebf751391c$export$f258d29ae5e3d545, this.ignoredPayloadTypes = [
            (0, $2mLND.TYPE_1)
        ], this.registeredMethods = [], this.init = async ()=>{
            this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
        }, this.register = ({ methods: i  })=>{
            this.isInitialized(), this.registeredMethods = [
                ...new Set([
                    ...this.registeredMethods,
                    ...i
                ])
            ];
        }, this.create = async ()=>{
            this.isInitialized();
            const i = (0, $2mLND.generateRandomBytes32)(), s = await this.core.crypto.setSymKey(i), n = (0, $2mLND.calcExpiry)((0, $gm49L.FIVE_MINUTES)), a = {
                protocol: $670c46ebf751391c$export$822d0bd1635d5360
            }, o = {
                topic: s,
                expiry: n,
                relay: a,
                active: !1
            }, h = (0, $2mLND.formatUri)({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: s,
                symKey: i,
                relay: a
            });
            return await this.pairings.set(s, o), await this.core.relayer.subscribe(s), this.core.expirer.set(s, n), {
                topic: s,
                uri: h
            };
        }, this.pair = async (i)=>{
            this.isInitialized(), this.isValidPair(i);
            const { topic: s , symKey: n , relay: a  } = (0, $2mLND.parseUri)(i.uri), o = (0, $2mLND.calcExpiry)((0, $gm49L.FIVE_MINUTES)), h = {
                topic: s,
                relay: a,
                expiry: o,
                active: !1
            };
            return await this.pairings.set(s, h), await this.core.crypto.setSymKey(n, s), await this.core.relayer.subscribe(s, {
                relay: a
            }), this.core.expirer.set(s, o), i.activatePairing && await this.activate({
                topic: s
            }), h;
        }, this.activate = async ({ topic: i  })=>{
            this.isInitialized();
            const s = (0, $2mLND.calcExpiry)((0, $gm49L.THIRTY_DAYS));
            await this.pairings.update(i, {
                active: !0,
                expiry: s
            }), this.core.expirer.set(i, s);
        }, this.ping = async (i)=>{
            this.isInitialized(), await this.isValidPing(i);
            const { topic: s  } = i;
            if (this.pairings.keys.includes(s)) {
                const n = await this.sendRequest(s, "wc_pairingPing", {}), { done: a , resolve: o , reject: h  } = (0, $2mLND.createDelayedPromise)();
                this.events.once((0, $2mLND.engineEvent)("pairing_ping", n), ({ error: d  })=>{
                    d ? h(d) : o();
                }), await a();
            }
        }, this.updateExpiry = async ({ topic: i , expiry: s  })=>{
            this.isInitialized(), await this.pairings.update(i, {
                expiry: s
            });
        }, this.updateMetadata = async ({ topic: i , metadata: s  })=>{
            this.isInitialized(), await this.pairings.update(i, {
                peerMetadata: s
            });
        }, this.getPairings = ()=>(this.isInitialized(), this.pairings.values), this.disconnect = async (i)=>{
            this.isInitialized(), await this.isValidDisconnect(i);
            const { topic: s  } = i;
            this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", (0, $2mLND.getSdkError)("USER_DISCONNECTED")), await this.deletePairing(s));
        }, this.sendRequest = async (i, s, n)=>{
            const a = (0, $kOodT.formatJsonRpcRequest)(s, n), o = await this.core.crypto.encode(i, a), h = $670c46ebf751391c$export$d94d6986a8185883[s].req;
            return this.core.history.set(i, a), await this.core.relayer.publish(i, o, h), a.id;
        }, this.sendResult = async (i, s, n)=>{
            const a = (0, $kOodT.formatJsonRpcResult)(i, n), o = await this.core.crypto.encode(s, a), h = await this.core.history.get(s, i), d = $670c46ebf751391c$export$d94d6986a8185883[h.request.method].res;
            await this.core.relayer.publish(s, o, d), await this.core.history.resolve(a);
        }, this.sendError = async (i, s, n)=>{
            const a = (0, $kOodT.formatJsonRpcError)(i, n), o = await this.core.crypto.encode(s, a), h = await this.core.history.get(s, i), d = $670c46ebf751391c$export$d94d6986a8185883[h.request.method] ? $670c46ebf751391c$export$d94d6986a8185883[h.request.method].res : $670c46ebf751391c$export$d94d6986a8185883.unregistered_method.res;
            await this.core.relayer.publish(s, o, d), await this.core.history.resolve(a);
        }, this.deletePairing = async (i, s)=>{
            await this.core.relayer.unsubscribe(i), await Promise.all([
                this.pairings.delete(i, (0, $2mLND.getSdkError)("USER_DISCONNECTED")),
                this.core.crypto.deleteSymKey(i),
                s ? Promise.resolve() : this.core.expirer.del(i)
            ]);
        }, this.cleanup = async ()=>{
            const i = this.pairings.getAll().filter((s)=>(0, $2mLND.isExpired)(s.expiry));
            await Promise.all(i.map((s)=>this.deletePairing(s.topic)));
        }, this.onRelayEventRequest = (i)=>{
            const { topic: s , payload: n  } = i, a = n.method;
            if (this.pairings.keys.includes(s)) switch(a){
                case "wc_pairingPing":
                    return this.onPairingPingRequest(s, n);
                case "wc_pairingDelete":
                    return this.onPairingDeleteRequest(s, n);
                default:
                    return this.onUnknownRpcMethodRequest(s, n);
            }
        }, this.onRelayEventResponse = async (i)=>{
            const { topic: s , payload: n  } = i, a = (await this.core.history.get(s, n.id)).request.method;
            if (this.pairings.keys.includes(s)) switch(a){
                case "wc_pairingPing":
                    return this.onPairingPingResponse(s, n);
                default:
                    return this.onUnknownRpcMethodResponse(a);
            }
        }, this.onPairingPingRequest = async (i, s)=>{
            const { id: n  } = s;
            try {
                this.isValidPing({
                    topic: i
                }), await this.sendResult(n, i, !0), this.events.emit("pairing_ping", {
                    id: n,
                    topic: i
                });
            } catch (a) {
                await this.sendError(n, i, a), this.logger.error(a);
            }
        }, this.onPairingPingResponse = (i, s)=>{
            const { id: n  } = s;
            setTimeout(()=>{
                (0, $kOodT.isJsonRpcResult)(s) ? this.events.emit((0, $2mLND.engineEvent)("pairing_ping", n), {}) : (0, $kOodT.isJsonRpcError)(s) && this.events.emit((0, $2mLND.engineEvent)("pairing_ping", n), {
                    error: s.error
                });
            }, 500);
        }, this.onPairingDeleteRequest = async (i, s)=>{
            const { id: n  } = s;
            try {
                this.isValidDisconnect({
                    topic: i
                }), await this.sendResult(n, i, !0), await this.deletePairing(i), this.events.emit("pairing_delete", {
                    id: n,
                    topic: i
                });
            } catch (a) {
                await this.sendError(n, i, a), this.logger.error(a);
            }
        }, this.onUnknownRpcMethodRequest = async (i, s)=>{
            const { id: n , method: a  } = s;
            try {
                if (this.registeredMethods.includes(a)) return;
                const o = (0, $2mLND.getSdkError)("WC_METHOD_UNSUPPORTED", a);
                await this.sendError(n, i, o), this.logger.error(o);
            } catch (o) {
                await this.sendError(n, i, o), this.logger.error(o);
            }
        }, this.onUnknownRpcMethodResponse = (i)=>{
            this.registeredMethods.includes(i) || this.logger.error((0, $2mLND.getSdkError)("WC_METHOD_UNSUPPORTED", i));
        }, this.isValidPair = (i)=>{
            if (!(0, $2mLND.isValidParams)(i)) {
                const { message: s  } = (0, $2mLND.getInternalError)("MISSING_OR_INVALID", `pair() params: ${i}`);
                throw new Error(s);
            }
            if (!(0, $2mLND.isValidUrl)(i.uri)) {
                const { message: s  } = (0, $2mLND.getInternalError)("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
                throw new Error(s);
            }
        }, this.isValidPing = async (i)=>{
            if (!(0, $2mLND.isValidParams)(i)) {
                const { message: n  } = (0, $2mLND.getInternalError)("MISSING_OR_INVALID", `ping() params: ${i}`);
                throw new Error(n);
            }
            const { topic: s  } = i;
            await this.isValidPairingTopic(s);
        }, this.isValidDisconnect = async (i)=>{
            if (!(0, $2mLND.isValidParams)(i)) {
                const { message: n  } = (0, $2mLND.getInternalError)("MISSING_OR_INVALID", `disconnect() params: ${i}`);
                throw new Error(n);
            }
            const { topic: s  } = i;
            await this.isValidPairingTopic(s);
        }, this.isValidPairingTopic = async (i)=>{
            if (!(0, $2mLND.isValidString)(i, !1)) {
                const { message: s  } = (0, $2mLND.getInternalError)("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
                throw new Error(s);
            }
            if (!this.pairings.keys.includes(i)) {
                const { message: s  } = (0, $2mLND.getInternalError)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
                throw new Error(s);
            }
            if ((0, $2mLND.isExpired)(this.pairings.get(i).expiry)) {
                await this.deletePairing(i);
                const { message: s  } = (0, $2mLND.getInternalError)("EXPIRED", `pairing topic: ${i}`);
                throw new Error(s);
            }
        }, this.core = e, this.logger = (0, $giNA3.generateChildLogger)(t, this.name), this.pairings = new $670c46ebf751391c$export$390f32400eaf98c9(this.core, this.logger, this.name, this.storagePrefix);
    }
    get context() {
        return (0, $giNA3.getLoggerContext)(this.logger);
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e  } = (0, $2mLND.getInternalError)("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
    registerRelayerEvents() {
        this.core.relayer.on($670c46ebf751391c$export$d56245796e2837d.message, async (e)=>{
            const { topic: t , message: i  } = e;
            if (this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i))) return;
            const s = await this.core.crypto.decode(t, i);
            (0, $kOodT.isJsonRpcRequest)(s) ? (this.core.history.set(t, s), this.onRelayEventRequest({
                topic: t,
                payload: s
            })) : (0, $kOodT.isJsonRpcResponse)(s) && (await this.core.history.resolve(s), this.onRelayEventResponse({
                topic: t,
                payload: s
            }));
        });
    }
    registerExpirerEvents() {
        this.core.expirer.on($670c46ebf751391c$export$9013719d9206b0c1.expired, async (e)=>{
            const { topic: t  } = (0, $2mLND.parseExpirerTarget)(e.target);
            t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit("pairing_expire", {
                topic: t
            }));
        });
    }
}
class $670c46ebf751391c$export$eeb4f10f25d479cb extends (0, $3nb8V.IJsonRpcHistory) {
    constructor(e, t){
        super(e, t), this.core = e, this.logger = t, this.records = new Map, this.events = new (0, $2fbJO.EventEmitter), this.name = $670c46ebf751391c$export$160142c73cb99dc3, this.version = $670c46ebf751391c$export$8eba9ce85616c607, this.cached = [], this.initialized = !1, this.storagePrefix = $670c46ebf751391c$export$f258d29ae5e3d545, this.init = async ()=>{
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i)=>this.records.set(i.id, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
        }, this.set = (i, s, n)=>{
            if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                type: "method",
                method: "set",
                topic: i,
                request: s,
                chainId: n
            }), this.records.has(s.id)) return;
            const a = {
                id: s.id,
                topic: i,
                request: {
                    method: s.method,
                    params: s.params || null
                },
                chainId: n
            };
            this.records.set(a.id, a), this.events.emit($670c46ebf751391c$export$a682338b5ffca937.created, a);
        }, this.resolve = async (i)=>{
            if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                type: "method",
                method: "update",
                response: i
            }), !this.records.has(i.id)) return;
            const s = await this.getRecord(i.id);
            typeof s.response > "u" && (s.response = (0, $kOodT.isJsonRpcError)(i) ? {
                error: i.error
            } : {
                result: i.result
            }, this.records.set(s.id, s), this.events.emit($670c46ebf751391c$export$a682338b5ffca937.updated, s));
        }, this.get = async (i, s)=>(this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
                type: "method",
                method: "get",
                topic: i,
                id: s
            }), await this.getRecord(s)), this.delete = (i, s)=>{
            this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                type: "method",
                method: "delete",
                id: s
            }), this.values.forEach((n)=>{
                if (n.topic === i) {
                    if (typeof s < "u" && n.id !== s) return;
                    this.records.delete(n.id), this.events.emit($670c46ebf751391c$export$a682338b5ffca937.deleted, n);
                }
            });
        }, this.exists = async (i, s)=>(this.isInitialized(), this.records.has(s) ? (await this.getRecord(s)).topic === i : !1), this.on = (i, s)=>{
            this.events.on(i, s);
        }, this.once = (i, s)=>{
            this.events.once(i, s);
        }, this.off = (i, s)=>{
            this.events.off(i, s);
        }, this.removeListener = (i, s)=>{
            this.events.removeListener(i, s);
        }, this.logger = (0, $giNA3.generateChildLogger)(t, this.name);
    }
    get context() {
        return (0, $giNA3.getLoggerContext)(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name;
    }
    get size() {
        return this.records.size;
    }
    get keys() {
        return Array.from(this.records.keys());
    }
    get values() {
        return Array.from(this.records.values());
    }
    get pending() {
        const e = [];
        return this.values.forEach((t)=>{
            if (typeof t.response < "u") return;
            const i = {
                topic: t.topic,
                request: (0, $kOodT.formatJsonRpcRequest)(t.request.method, t.request.params, t.id),
                chainId: t.chainId
            };
            return e.push(i);
        }), e;
    }
    async setJsonRpcRecords(e) {
        await this.core.storage.setItem(this.storageKey, e);
    }
    async getJsonRpcRecords() {
        return await this.core.storage.getItem(this.storageKey);
    }
    getRecord(e) {
        this.isInitialized();
        const t = this.records.get(e);
        if (!t) {
            const { message: i  } = (0, $2mLND.getInternalError)("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(i);
        }
        return t;
    }
    async persist() {
        await this.setJsonRpcRecords(this.values), this.events.emit($670c46ebf751391c$export$a682338b5ffca937.sync);
    }
    async restore() {
        try {
            const e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length) return;
            if (this.records.size) {
                const { message: t  } = (0, $2mLND.getInternalError)("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), new Error(t);
            }
            this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values
            });
        } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
        }
    }
    registerEventListeners() {
        this.events.on($670c46ebf751391c$export$a682338b5ffca937.created, (e)=>{
            const t = $670c46ebf751391c$export$a682338b5ffca937.created;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                record: e
            }), this.persist();
        }), this.events.on($670c46ebf751391c$export$a682338b5ffca937.updated, (e)=>{
            const t = $670c46ebf751391c$export$a682338b5ffca937.updated;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                record: e
            }), this.persist();
        }), this.events.on($670c46ebf751391c$export$a682338b5ffca937.deleted, (e)=>{
            const t = $670c46ebf751391c$export$a682338b5ffca937.deleted;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                record: e
            }), this.persist();
        });
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e  } = (0, $2mLND.getInternalError)("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class $670c46ebf751391c$export$e76805ce609031cb extends (0, $3nb8V.IExpirer) {
    constructor(e, t){
        super(e, t), this.core = e, this.logger = t, this.expirations = new Map, this.events = new (0, $2fbJO.EventEmitter), this.name = $670c46ebf751391c$export$4ddf883392bbc828, this.version = $670c46ebf751391c$export$717295846191925d, this.cached = [], this.initialized = !1, this.storagePrefix = $670c46ebf751391c$export$f258d29ae5e3d545, this.init = async ()=>{
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i)=>this.expirations.set(i.target, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
        }, this.has = (i)=>{
            try {
                const s = this.formatTarget(i);
                return typeof this.getExpiration(s) < "u";
            } catch  {
                return !1;
            }
        }, this.set = (i, s)=>{
            this.isInitialized();
            const n = this.formatTarget(i), a = {
                target: n,
                expiry: s
            };
            this.expirations.set(n, a), this.checkExpiry(n, a), this.events.emit($670c46ebf751391c$export$9013719d9206b0c1.created, {
                target: n,
                expiration: a
            });
        }, this.get = (i)=>{
            this.isInitialized();
            const s = this.formatTarget(i);
            return this.getExpiration(s);
        }, this.del = (i)=>{
            if (this.isInitialized(), this.has(i)) {
                const s = this.formatTarget(i), n = this.getExpiration(s);
                this.expirations.delete(s), this.events.emit($670c46ebf751391c$export$9013719d9206b0c1.deleted, {
                    target: s,
                    expiration: n
                });
            }
        }, this.on = (i, s)=>{
            this.events.on(i, s);
        }, this.once = (i, s)=>{
            this.events.once(i, s);
        }, this.off = (i, s)=>{
            this.events.off(i, s);
        }, this.removeListener = (i, s)=>{
            this.events.removeListener(i, s);
        }, this.logger = (0, $giNA3.generateChildLogger)(t, this.name);
    }
    get context() {
        return (0, $giNA3.getLoggerContext)(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name;
    }
    get length() {
        return this.expirations.size;
    }
    get keys() {
        return Array.from(this.expirations.keys());
    }
    get values() {
        return Array.from(this.expirations.values());
    }
    formatTarget(e) {
        if (typeof e == "string") return (0, $2mLND.formatTopicTarget)(e);
        if (typeof e == "number") return (0, $2mLND.formatIdTarget)(e);
        const { message: t  } = (0, $2mLND.getInternalError)("UNKNOWN_TYPE", `Target type: ${typeof e}`);
        throw new Error(t);
    }
    async setExpirations(e) {
        await this.core.storage.setItem(this.storageKey, e);
    }
    async getExpirations() {
        return await this.core.storage.getItem(this.storageKey);
    }
    async persist() {
        await this.setExpirations(this.values), this.events.emit($670c46ebf751391c$export$9013719d9206b0c1.sync);
    }
    async restore() {
        try {
            const e = await this.getExpirations();
            if (typeof e > "u" || !e.length) return;
            if (this.expirations.size) {
                const { message: t  } = (0, $2mLND.getInternalError)("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), new Error(t);
            }
            this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values
            });
        } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
        }
    }
    getExpiration(e) {
        const t = this.expirations.get(e);
        if (!t) {
            const { message: i  } = (0, $2mLND.getInternalError)("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.error(i), new Error(i);
        }
        return t;
    }
    checkExpiry(e, t) {
        const { expiry: i  } = t;
        (0, $gm49L.toMiliseconds)(i) - Date.now() <= 0 && this.expire(e, t);
    }
    expire(e, t) {
        this.expirations.delete(e), this.events.emit($670c46ebf751391c$export$9013719d9206b0c1.expired, {
            target: e,
            expiration: t
        });
    }
    checkExpirations() {
        this.expirations.forEach((e, t)=>this.checkExpiry(t, e));
    }
    registerEventListeners() {
        this.core.heartbeat.on((0, $j1oI8.HEARTBEAT_EVENTS).pulse, ()=>this.checkExpirations()), this.events.on($670c46ebf751391c$export$9013719d9206b0c1.created, (e)=>{
            const t = $670c46ebf751391c$export$9013719d9206b0c1.created;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), this.persist();
        }), this.events.on($670c46ebf751391c$export$9013719d9206b0c1.expired, (e)=>{
            const t = $670c46ebf751391c$export$9013719d9206b0c1.expired;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), this.persist();
        }), this.events.on($670c46ebf751391c$export$9013719d9206b0c1.deleted, (e)=>{
            const t = $670c46ebf751391c$export$9013719d9206b0c1.deleted;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), this.persist();
        });
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e  } = (0, $2mLND.getInternalError)("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
var $670c46ebf751391c$var$cr = Object.defineProperty, $670c46ebf751391c$var$Tt = Object.getOwnPropertySymbols, $670c46ebf751391c$var$ur = Object.prototype.hasOwnProperty, $670c46ebf751391c$var$lr = Object.prototype.propertyIsEnumerable, $670c46ebf751391c$var$Pt = (r, e, t)=>e in r ? $670c46ebf751391c$var$cr(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, $670c46ebf751391c$var$xt = (r, e)=>{
    for(var t in e || (e = {}))$670c46ebf751391c$var$ur.call(e, t) && $670c46ebf751391c$var$Pt(r, t, e[t]);
    if ($670c46ebf751391c$var$Tt) for (var t of $670c46ebf751391c$var$Tt(e))$670c46ebf751391c$var$lr.call(e, t) && $670c46ebf751391c$var$Pt(r, t, e[t]);
    return r;
};
class $670c46ebf751391c$export$2e2bcd8739ae039 extends (0, $3nb8V.ICore) {
    constructor(e){
        super(e), this.protocol = $670c46ebf751391c$export$51b1c900ac262bdf, this.version = $670c46ebf751391c$export$f30bd3c8747cdfbe, this.name = $670c46ebf751391c$export$d47601f9de5ee22b, this.events = new (0, $2fbJO.EventEmitter), this.initialized = !1, this.on = (i, s)=>this.events.on(i, s), this.once = (i, s)=>this.events.once(i, s), this.off = (i, s)=>this.events.off(i, s), this.removeListener = (i, s)=>this.events.removeListener(i, s), this.projectId = e?.projectId;
        const t = typeof e?.logger < "u" && typeof e?.logger != "string" ? e.logger : (0, (/*@__PURE__*/$parcel$interopDefault($aq96k)))((0, $giNA3.getDefaultLoggerOptions)({
            level: e?.logger || $670c46ebf751391c$export$db0fdb6d486555c2.logger
        }));
        this.logger = (0, $giNA3.generateChildLogger)(t, this.name), this.heartbeat = new (0, $j1oI8.HeartBeat), this.crypto = new $670c46ebf751391c$export$8ac8b6291b7ccf24(this, this.logger, e?.keychain), this.history = new $670c46ebf751391c$export$eeb4f10f25d479cb(this, this.logger), this.expirer = new $670c46ebf751391c$export$e76805ce609031cb(this, this.logger), this.storage = e != null && e.storage ? e.storage : new (0, (/*@__PURE__*/$parcel$interopDefault($2hLdL)))($670c46ebf751391c$var$xt($670c46ebf751391c$var$xt({}, $670c46ebf751391c$export$ba920abfe854b85d), e?.storageOptions)), this.relayer = new $670c46ebf751391c$export$70e73aa29a3d4407({
            core: this,
            logger: this.logger,
            relayUrl: e?.relayUrl,
            projectId: this.projectId
        }), this.pairing = new $670c46ebf751391c$export$3370ee24730992a3(this, this.logger);
    }
    static async init(e) {
        const t = new $670c46ebf751391c$export$2e2bcd8739ae039(e);
        return await t.initialize(), t;
    }
    get context() {
        return (0, $giNA3.getLoggerContext)(this.logger);
    }
    async start() {
        this.initialized || await this.initialize();
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success");
        } catch (e) {
            throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
        }
    }
}
const $670c46ebf751391c$export$4143ab5b91744744 = $670c46ebf751391c$export$2e2bcd8739ae039;

});
parcelRequire.register("2hLdL", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.KeyValueStorage = void 0;

var $frFmb = parcelRequire("frFmb");

var $kPcpz = parcelRequire("kPcpz");

const $1aa1cc62cdf795f5$var$localStorage_1 = $frFmb.__importDefault((parcelRequire("6eAs8")));

var $bwLX0 = parcelRequire("bwLX0");
class $1aa1cc62cdf795f5$var$KeyValueStorage {
    constructor(){
        this.localStorage = $1aa1cc62cdf795f5$var$localStorage_1.default;
    }
    getKeys() {
        return $frFmb.__awaiter(this, void 0, void 0, function*() {
            return Object.keys(this.localStorage);
        });
    }
    getEntries() {
        return $frFmb.__awaiter(this, void 0, void 0, function*() {
            return Object.entries(this.localStorage).map($bwLX0.parseEntry);
        });
    }
    getItem(key) {
        return $frFmb.__awaiter(this, void 0, void 0, function*() {
            const item = this.localStorage.getItem(key);
            if (item === null) return undefined;
            return $kPcpz.safeJsonParse(item);
        });
    }
    setItem(key, value) {
        return $frFmb.__awaiter(this, void 0, void 0, function*() {
            this.localStorage.setItem(key, $kPcpz.safeJsonStringify(value));
        });
    }
    removeItem(key) {
        return $frFmb.__awaiter(this, void 0, void 0, function*() {
            this.localStorage.removeItem(key);
        });
    }
}
module.exports.KeyValueStorage = $1aa1cc62cdf795f5$var$KeyValueStorage;
module.exports.default = $1aa1cc62cdf795f5$var$KeyValueStorage;

});
parcelRequire.register("kPcpz", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
function $f29232b357a9a701$var$safeJsonParse(value) {
    if (typeof value !== "string") throw new Error(`Cannot safe json parse value of type ${typeof value}`);
    try {
        return JSON.parse(value);
    } catch (_a) {
        return value;
    }
}
module.exports.safeJsonParse = $f29232b357a9a701$var$safeJsonParse;
function $f29232b357a9a701$var$safeJsonStringify(value) {
    return typeof value === "string" ? value : JSON.stringify(value, (key, value)=>typeof value === "undefined" ? null : value);
}
module.exports.safeJsonStringify = $f29232b357a9a701$var$safeJsonStringify;

});

parcelRequire.register("6eAs8", function(module, exports) {
"use strict";
(function() {
    "use strict";
    let db;
    function LocalStorage() {}
    db = LocalStorage;
    db.prototype.getItem = function(key) {
        if (this.hasOwnProperty(key)) return String(this[key]);
        return null;
    };
    db.prototype.setItem = function(key, val) {
        this[key] = String(val);
    };
    db.prototype.removeItem = function(key) {
        delete this[key];
    };
    db.prototype.clear = function() {
        const self = this;
        Object.keys(self).forEach(function(key) {
            self[key] = undefined;
            delete self[key];
        });
    };
    db.prototype.key = function(i) {
        i = i || 0;
        return Object.keys(this)[i];
    };
    db.prototype.__defineGetter__("length", function() {
        return Object.keys(this).length;
    });
    if (typeof $parcel$global !== "undefined" && $parcel$global.localStorage) module.exports = $parcel$global.localStorage;
    else if (typeof window !== "undefined" && window.localStorage) module.exports = window.localStorage;
    else module.exports = new LocalStorage();
})();

});

parcelRequire.register("bwLX0", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $frFmb = parcelRequire("frFmb");

$frFmb.__exportStar((parcelRequire("gNYTI")), module.exports);

$frFmb.__exportStar((parcelRequire("iR06V")), module.exports);

});
parcelRequire.register("gNYTI", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.IKeyValueStorage = void 0;
class $c3c075f053731930$var$IKeyValueStorage {
}
module.exports.IKeyValueStorage = $c3c075f053731930$var$IKeyValueStorage;

});

parcelRequire.register("iR06V", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.parseEntry = void 0;

var $kPcpz = parcelRequire("kPcpz");
function $db9d433228396258$var$parseEntry(entry) {
    var _a;
    return [
        entry[0],
        $kPcpz.safeJsonParse((_a = entry[1]) !== null && _a !== void 0 ? _a : "")
    ];
}
module.exports.parseEntry = $db9d433228396258$var$parseEntry;

});



parcelRequire.register("j1oI8", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $frFmb = parcelRequire("frFmb");

$frFmb.__exportStar((parcelRequire("1gQM6")), module.exports);

$frFmb.__exportStar((parcelRequire("1Bbcb")), module.exports);

$frFmb.__exportStar((parcelRequire("5PaV3")), module.exports);

});
parcelRequire.register("1gQM6", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.HeartBeat = void 0;

var $frFmb = parcelRequire("frFmb");

var $2fbJO = parcelRequire("2fbJO");

var $gm49L = parcelRequire("gm49L");

var $1Bbcb = parcelRequire("1Bbcb");

var $5PaV3 = parcelRequire("5PaV3");
class $0ed03910bf133458$var$HeartBeat extends $1Bbcb.IHeartBeat {
    constructor(opts){
        super(opts);
        this.events = new $2fbJO.EventEmitter();
        this.interval = $5PaV3.HEARTBEAT_INTERVAL;
        this.interval = (opts === null || opts === void 0 ? void 0 : opts.interval) || $5PaV3.HEARTBEAT_INTERVAL;
    }
    static init(opts) {
        return $frFmb.__awaiter(this, void 0, void 0, function*() {
            const heartbeat = new $0ed03910bf133458$var$HeartBeat(opts);
            yield heartbeat.init();
            return heartbeat;
        });
    }
    init() {
        return $frFmb.__awaiter(this, void 0, void 0, function*() {
            yield this.initialize();
        });
    }
    stop() {
        clearInterval(this.intervalRef);
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
    initialize() {
        return $frFmb.__awaiter(this, void 0, void 0, function*() {
            this.intervalRef = setInterval(()=>this.pulse(), $gm49L.toMiliseconds(this.interval));
        });
    }
    pulse() {
        this.events.emit($5PaV3.HEARTBEAT_EVENTS.pulse);
    }
}
module.exports.HeartBeat = $0ed03910bf133458$var$HeartBeat;

});
parcelRequire.register("gm49L", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $frFmb = parcelRequire("frFmb");

$frFmb.__exportStar((parcelRequire("caHb0")), module.exports);

$frFmb.__exportStar((parcelRequire("cQhdh")), module.exports);

$frFmb.__exportStar((parcelRequire("kz7Ts")), module.exports);

$frFmb.__exportStar((parcelRequire("ecXNm")), module.exports);

});
parcelRequire.register("caHb0", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $frFmb = parcelRequire("frFmb");

$frFmb.__exportStar((parcelRequire("8PkCZ")), module.exports);

$frFmb.__exportStar((parcelRequire("3ncPS")), module.exports);

});
parcelRequire.register("8PkCZ", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.delay = void 0;
function $66d3166472bc2bb5$var$delay(timeout) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(true);
        }, timeout);
    });
}
module.exports.delay = $66d3166472bc2bb5$var$delay;

});

parcelRequire.register("3ncPS", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.fromMiliseconds = module.exports.toMiliseconds = void 0;

var $ecXNm = parcelRequire("ecXNm");
function $274d79fb39307f5c$var$toMiliseconds(seconds) {
    return seconds * $ecXNm.ONE_THOUSAND;
}
module.exports.toMiliseconds = $274d79fb39307f5c$var$toMiliseconds;
function $274d79fb39307f5c$var$fromMiliseconds(miliseconds) {
    return Math.floor(miliseconds / $ecXNm.ONE_THOUSAND);
}
module.exports.fromMiliseconds = $274d79fb39307f5c$var$fromMiliseconds;

});
parcelRequire.register("ecXNm", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $frFmb = parcelRequire("frFmb");

$frFmb.__exportStar((parcelRequire("e69mI")), module.exports);

$frFmb.__exportStar((parcelRequire("9HoNF")), module.exports);

});
parcelRequire.register("e69mI", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.ONE_THOUSAND = module.exports.ONE_HUNDRED = void 0;
module.exports.ONE_HUNDRED = 100;
module.exports.ONE_THOUSAND = 1000;

});

parcelRequire.register("9HoNF", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.ONE_YEAR = module.exports.FOUR_WEEKS = module.exports.THREE_WEEKS = module.exports.TWO_WEEKS = module.exports.ONE_WEEK = module.exports.THIRTY_DAYS = module.exports.SEVEN_DAYS = module.exports.FIVE_DAYS = module.exports.THREE_DAYS = module.exports.ONE_DAY = module.exports.TWENTY_FOUR_HOURS = module.exports.TWELVE_HOURS = module.exports.SIX_HOURS = module.exports.THREE_HOURS = module.exports.ONE_HOUR = module.exports.SIXTY_MINUTES = module.exports.THIRTY_MINUTES = module.exports.TEN_MINUTES = module.exports.FIVE_MINUTES = module.exports.ONE_MINUTE = module.exports.SIXTY_SECONDS = module.exports.THIRTY_SECONDS = module.exports.TEN_SECONDS = module.exports.FIVE_SECONDS = module.exports.ONE_SECOND = void 0;
module.exports.ONE_SECOND = 1;
module.exports.FIVE_SECONDS = 5;
module.exports.TEN_SECONDS = 10;
module.exports.THIRTY_SECONDS = 30;
module.exports.SIXTY_SECONDS = 60;
module.exports.ONE_MINUTE = module.exports.SIXTY_SECONDS;
module.exports.FIVE_MINUTES = module.exports.ONE_MINUTE * 5;
module.exports.TEN_MINUTES = module.exports.ONE_MINUTE * 10;
module.exports.THIRTY_MINUTES = module.exports.ONE_MINUTE * 30;
module.exports.SIXTY_MINUTES = module.exports.ONE_MINUTE * 60;
module.exports.ONE_HOUR = module.exports.SIXTY_MINUTES;
module.exports.THREE_HOURS = module.exports.ONE_HOUR * 3;
module.exports.SIX_HOURS = module.exports.ONE_HOUR * 6;
module.exports.TWELVE_HOURS = module.exports.ONE_HOUR * 12;
module.exports.TWENTY_FOUR_HOURS = module.exports.ONE_HOUR * 24;
module.exports.ONE_DAY = module.exports.TWENTY_FOUR_HOURS;
module.exports.THREE_DAYS = module.exports.ONE_DAY * 3;
module.exports.FIVE_DAYS = module.exports.ONE_DAY * 5;
module.exports.SEVEN_DAYS = module.exports.ONE_DAY * 7;
module.exports.THIRTY_DAYS = module.exports.ONE_DAY * 30;
module.exports.ONE_WEEK = module.exports.SEVEN_DAYS;
module.exports.TWO_WEEKS = module.exports.ONE_WEEK * 2;
module.exports.THREE_WEEKS = module.exports.ONE_WEEK * 3;
module.exports.FOUR_WEEKS = module.exports.ONE_WEEK * 4;
module.exports.ONE_YEAR = module.exports.ONE_DAY * 365;

});




parcelRequire.register("cQhdh", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Watch = void 0;
class $9597b190cfa3a65d$var$Watch {
    constructor(){
        this.timestamps = new Map();
    }
    start(label) {
        if (this.timestamps.has(label)) throw new Error(`Watch already started for label: ${label}`);
        this.timestamps.set(label, {
            started: Date.now()
        });
    }
    stop(label) {
        const timestamp = this.get(label);
        if (typeof timestamp.elapsed !== "undefined") throw new Error(`Watch already stopped for label: ${label}`);
        const elapsed = Date.now() - timestamp.started;
        this.timestamps.set(label, {
            started: timestamp.started,
            elapsed: elapsed
        });
    }
    get(label) {
        const timestamp = this.timestamps.get(label);
        if (typeof timestamp === "undefined") throw new Error(`No timestamp found for label: ${label}`);
        return timestamp;
    }
    elapsed(label) {
        const timestamp = this.get(label);
        const elapsed = timestamp.elapsed || Date.now() - timestamp.started;
        return elapsed;
    }
}
module.exports.Watch = $9597b190cfa3a65d$var$Watch;
module.exports.default = $9597b190cfa3a65d$var$Watch;

});

parcelRequire.register("kz7Ts", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $frFmb = parcelRequire("frFmb");

$frFmb.__exportStar((parcelRequire("26Pzt")), module.exports);

});
parcelRequire.register("26Pzt", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.IWatch = void 0;
class $1894254193dbca10$var$IWatch {
}
module.exports.IWatch = $1894254193dbca10$var$IWatch;

});



parcelRequire.register("1Bbcb", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $frFmb = parcelRequire("frFmb");

$frFmb.__exportStar((parcelRequire("dIHms")), module.exports);

});
parcelRequire.register("dIHms", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.IHeartBeat = void 0;
parcelRequire("gBjeF");
var $fxPfU = parcelRequire("fxPfU");
class $9fd105152042df29$var$IHeartBeat extends $fxPfU.IEvents {
    constructor(opts){
        super();
    }
}
module.exports.IHeartBeat = $9fd105152042df29$var$IHeartBeat;

});
parcelRequire.register("gBjeF", function(module, exports) {
$parcel$export(module.exports, "IEvents", () => (parcelRequire("fxPfU")).IEvents);
parcelRequire("fxPfU");

});
parcelRequire.register("fxPfU", function(module, exports) {

$parcel$export(module.exports, "IEvents", () => $b511b26566aad146$export$ab429ec7e240e546);
class $b511b26566aad146$export$ab429ec7e240e546 {
}

});




parcelRequire.register("5PaV3", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $frFmb = parcelRequire("frFmb");

$frFmb.__exportStar((parcelRequire("jW4WW")), module.exports);

});
parcelRequire.register("jW4WW", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.HEARTBEAT_EVENTS = module.exports.HEARTBEAT_INTERVAL = void 0;

var $gm49L = parcelRequire("gm49L");
module.exports.HEARTBEAT_INTERVAL = $gm49L.FIVE_SECONDS;
module.exports.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
};

});




parcelRequire.register("giNA3", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.pino = void 0;

var $frFmb = parcelRequire("frFmb");

const $bde4c96c4348e805$var$pino_1 = $frFmb.__importDefault((parcelRequire("aq96k")));
Object.defineProperty(module.exports, "pino", {
    enumerable: true,
    get: function() {
        return $bde4c96c4348e805$var$pino_1.default;
    }
});

$frFmb.__exportStar((parcelRequire("4IcdB")), module.exports);

$frFmb.__exportStar((parcelRequire("20Poz")), module.exports);

});
parcelRequire.register("4IcdB", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.PINO_CUSTOM_CONTEXT_KEY = module.exports.PINO_LOGGER_DEFAULTS = void 0;
module.exports.PINO_LOGGER_DEFAULTS = {
    level: "info"
};
module.exports.PINO_CUSTOM_CONTEXT_KEY = "custom_context";

});

parcelRequire.register("20Poz", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.generateChildLogger = module.exports.formatChildLoggerContext = module.exports.getLoggerContext = module.exports.setBrowserLoggerContext = module.exports.getBrowserLoggerContext = module.exports.getDefaultLoggerOptions = void 0;

var $4IcdB = parcelRequire("4IcdB");
function $177372e222536085$var$getDefaultLoggerOptions(opts) {
    return Object.assign(Object.assign({}, opts), {
        level: (opts === null || opts === void 0 ? void 0 : opts.level) || $4IcdB.PINO_LOGGER_DEFAULTS.level
    });
}
module.exports.getDefaultLoggerOptions = $177372e222536085$var$getDefaultLoggerOptions;
function $177372e222536085$var$getBrowserLoggerContext(logger, customContextKey = $4IcdB.PINO_CUSTOM_CONTEXT_KEY) {
    return logger[customContextKey] || "";
}
module.exports.getBrowserLoggerContext = $177372e222536085$var$getBrowserLoggerContext;
function $177372e222536085$var$setBrowserLoggerContext(logger, context, customContextKey = $4IcdB.PINO_CUSTOM_CONTEXT_KEY) {
    logger[customContextKey] = context;
    return logger;
}
module.exports.setBrowserLoggerContext = $177372e222536085$var$setBrowserLoggerContext;
function $177372e222536085$var$getLoggerContext(logger, customContextKey = $4IcdB.PINO_CUSTOM_CONTEXT_KEY) {
    let context = "";
    if (typeof logger.bindings === "undefined") context = $177372e222536085$var$getBrowserLoggerContext(logger, customContextKey);
    else context = logger.bindings().context || "";
    return context;
}
module.exports.getLoggerContext = $177372e222536085$var$getLoggerContext;
function $177372e222536085$var$formatChildLoggerContext(logger, childContext, customContextKey = $4IcdB.PINO_CUSTOM_CONTEXT_KEY) {
    const parentContext = $177372e222536085$var$getLoggerContext(logger, customContextKey);
    const context = parentContext.trim() ? `${parentContext}/${childContext}` : childContext;
    return context;
}
module.exports.formatChildLoggerContext = $177372e222536085$var$formatChildLoggerContext;
function $177372e222536085$var$generateChildLogger(logger, childContext, customContextKey = $4IcdB.PINO_CUSTOM_CONTEXT_KEY) {
    const context = $177372e222536085$var$formatChildLoggerContext(logger, childContext, customContextKey);
    const child = logger.child({
        context: context
    });
    return $177372e222536085$var$setBrowserLoggerContext(child, context, customContextKey);
}
module.exports.generateChildLogger = $177372e222536085$var$generateChildLogger;

});


parcelRequire.register("3nb8V", function(module, exports) {

$parcel$export(module.exports, "ICore", () => $274c29d31f1f70c3$export$ed533416df113881);
$parcel$export(module.exports, "IJsonRpcHistory", () => $274c29d31f1f70c3$export$45b2c2643615b67);
$parcel$export(module.exports, "IMessageTracker", () => $274c29d31f1f70c3$export$e67570fe0a885c47);
$parcel$export(module.exports, "IPublisher", () => $274c29d31f1f70c3$export$3b0872bbd7e675a2);
$parcel$export(module.exports, "IRelayer", () => $274c29d31f1f70c3$export$9a0f755fd4f79434);
$parcel$export(module.exports, "IStore", () => $274c29d31f1f70c3$export$a7f17ba6c54777e7);
$parcel$export(module.exports, "ISubscriber", () => $274c29d31f1f70c3$export$300eed987e764b57);
$parcel$export(module.exports, "IExpirer", () => $274c29d31f1f70c3$export$41aaa3c39f6f2861);
parcelRequire("gBjeF");
var $fxPfU = parcelRequire("fxPfU");

var $2fbJO = parcelRequire("2fbJO");
class $274c29d31f1f70c3$export$ed533416df113881 extends (0, $fxPfU.IEvents) {
    constructor(s){
        super(), this.opts = s, this.protocol = "wc", this.version = 2;
    }
}
class $274c29d31f1f70c3$export$a4e7e56f03915894 {
    constructor(s, t, o){
        this.core = s, this.logger = t;
    }
}
class $274c29d31f1f70c3$export$45b2c2643615b67 extends (0, $fxPfU.IEvents) {
    constructor(s, t){
        super(), this.core = s, this.logger = t, this.records = new Map;
    }
}
class $274c29d31f1f70c3$export$e67570fe0a885c47 {
    constructor(s, t){
        this.logger = s, this.core = t;
    }
}
class $274c29d31f1f70c3$export$3b0872bbd7e675a2 extends (0, $fxPfU.IEvents) {
    constructor(s, t){
        super(), this.relayer = s, this.logger = t;
    }
}
class $274c29d31f1f70c3$export$9a0f755fd4f79434 extends (0, $fxPfU.IEvents) {
    constructor(s){
        super();
    }
}
class $274c29d31f1f70c3$export$a7f17ba6c54777e7 {
    constructor(s, t, o, S){
        this.core = s, this.logger = t, this.name = o;
    }
}
class $274c29d31f1f70c3$export$5746ea6dad01660a {
    constructor(){
        this.map = new Map;
    }
}
class $274c29d31f1f70c3$export$300eed987e764b57 extends (0, $fxPfU.IEvents) {
    constructor(s, t){
        super(), this.relayer = s, this.logger = t;
    }
}
class $274c29d31f1f70c3$export$be56d986c75c3691 {
    constructor(s, t){
        this.core = s, this.logger = t;
    }
}
class $274c29d31f1f70c3$export$41aaa3c39f6f2861 extends (0, $fxPfU.IEvents) {
    constructor(s, t){
        super(), this.core = s, this.logger = t;
    }
}
class $274c29d31f1f70c3$export$d6c2d698ffb743f1 {
    constructor(s, t){
        this.logger = s, this.core = t;
    }
}
class $274c29d31f1f70c3$export$235ef727e8a26483 extends (0, (/*@__PURE__*/$parcel$interopDefault($2fbJO))) {
    constructor(){
        super();
    }
}
class $274c29d31f1f70c3$export$2ebcf6eeacedad44 {
    constructor(s){
        this.opts = s, this.protocol = "wc", this.version = 2;
    }
}
class $274c29d31f1f70c3$export$623dd0f793f15643 extends (0, $2fbJO.EventEmitter) {
    constructor(){
        super();
    }
}
class $274c29d31f1f70c3$export$87df43c730effa30 {
    constructor(s){
        this.client = s;
    }
}

});

parcelRequire.register("bJ1HC", function(module, exports) {
$parcel$export(module.exports, "generateKeyPair", () => (parcelRequire("cta69")).generateKeyPair);
$parcel$export(module.exports, "signJWT", () => (parcelRequire("cta69")).signJWT);
$parcel$export(module.exports, "encodeIss", () => (parcelRequire("7xryO")).encodeIss);
parcelRequire("cta69");
parcelRequire("jPKif");

var $fHsWu = parcelRequire("fHsWu");
parcelRequire("7xryO");
$parcel$exportWildcard(module.exports, $fHsWu);

});
parcelRequire.register("cta69", function(module, exports) {

$parcel$export(module.exports, "generateKeyPair", () => $914006c97b70cbba$export$a949d36eab55b41f);
$parcel$export(module.exports, "signJWT", () => $914006c97b70cbba$export$a8dda30659d36d45);

var $1v2KK = parcelRequire("1v2KK");

var $2SEZb = parcelRequire("2SEZb");

var $gm49L = parcelRequire("gm49L");

var $jPKif = parcelRequire("jPKif");

var $7xryO = parcelRequire("7xryO");
function $914006c97b70cbba$export$a949d36eab55b41f(seed = (0, $2SEZb.randomBytes)((0, $jPKif.KEY_PAIR_SEED_LENGTH))) {
    return $1v2KK.generateKeyPairFromSeed(seed);
}
async function $914006c97b70cbba$export$a8dda30659d36d45(sub, aud, ttl, keyPair, iat = (0, $gm49L.fromMiliseconds)(Date.now())) {
    const header = {
        alg: (0, $jPKif.JWT_IRIDIUM_ALG),
        typ: (0, $jPKif.JWT_IRIDIUM_TYP)
    };
    const iss = (0, $7xryO.encodeIss)(keyPair.publicKey);
    const exp = iat + ttl;
    const payload = {
        iss: iss,
        sub: sub,
        aud: aud,
        iat: iat,
        exp: exp
    };
    const data = (0, $7xryO.encodeData)({
        header: header,
        payload: payload
    });
    const signature = $1v2KK.sign(keyPair.secretKey, data);
    return (0, $7xryO.encodeJWT)({
        header: header,
        payload: payload,
        signature: signature
    });
}
async function $914006c97b70cbba$export$7b6fc79aa8c5b79c(jwt) {
    const { header: header , payload: payload , data: data , signature: signature  } = (0, $7xryO.decodeJWT)(jwt);
    if (header.alg !== (0, $jPKif.JWT_IRIDIUM_ALG) || header.typ !== (0, $jPKif.JWT_IRIDIUM_TYP)) throw new Error("JWT must use EdDSA algorithm");
    const publicKey = (0, $7xryO.decodeIss)(payload.iss);
    return $1v2KK.verify(publicKey, data, signature);
}

});
parcelRequire.register("1v2KK", function(module, exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.convertSecretKeyToX25519 = module.exports.convertPublicKeyToX25519 = module.exports.verify = module.exports.sign = module.exports.extractPublicKeyFromSecretKey = module.exports.generateKeyPair = module.exports.generateKeyPairFromSeed = module.exports.SEED_LENGTH = module.exports.SECRET_KEY_LENGTH = module.exports.PUBLIC_KEY_LENGTH = module.exports.SIGNATURE_LENGTH = void 0;

var $2SEZb = parcelRequire("2SEZb");

var $4WKmN = parcelRequire("4WKmN");

var $6n5DJ = parcelRequire("6n5DJ");
module.exports.SIGNATURE_LENGTH = 64;
module.exports.PUBLIC_KEY_LENGTH = 32;
module.exports.SECRET_KEY_LENGTH = 64;
module.exports.SEED_LENGTH = 32;
// Returns new zero-filled 16-element GF (Float64Array).
// If passed an array of numbers, prefills the returned
// array with them.
//
// We use Float64Array, because we need 48-bit numbers
// for this implementation.
function $117ad2627eed074a$var$gf(init) {
    const r = new Float64Array(16);
    if (init) for(let i = 0; i < init.length; i++)r[i] = init[i];
    return r;
}
// Base point.
const $117ad2627eed074a$var$_9 = new Uint8Array(32);
$117ad2627eed074a$var$_9[0] = 9;
const $117ad2627eed074a$var$gf0 = $117ad2627eed074a$var$gf();
const $117ad2627eed074a$var$gf1 = $117ad2627eed074a$var$gf([
    1
]);
const $117ad2627eed074a$var$D = $117ad2627eed074a$var$gf([
    0x78a3,
    0x1359,
    0x4dca,
    0x75eb,
    0xd8ab,
    0x4141,
    0x0a4d,
    0x0070,
    0xe898,
    0x7779,
    0x4079,
    0x8cc7,
    0xfe73,
    0x2b6f,
    0x6cee,
    0x5203
]);
const $117ad2627eed074a$var$D2 = $117ad2627eed074a$var$gf([
    0xf159,
    0x26b2,
    0x9b94,
    0xebd6,
    0xb156,
    0x8283,
    0x149a,
    0x00e0,
    0xd130,
    0xeef3,
    0x80f2,
    0x198e,
    0xfce7,
    0x56df,
    0xd9dc,
    0x2406
]);
const $117ad2627eed074a$var$X = $117ad2627eed074a$var$gf([
    0xd51a,
    0x8f25,
    0x2d60,
    0xc956,
    0xa7b2,
    0x9525,
    0xc760,
    0x692c,
    0xdc5c,
    0xfdd6,
    0xe231,
    0xc0a4,
    0x53fe,
    0xcd6e,
    0x36d3,
    0x2169
]);
const $117ad2627eed074a$var$Y = $117ad2627eed074a$var$gf([
    0x6658,
    0x6666,
    0x6666,
    0x6666,
    0x6666,
    0x6666,
    0x6666,
    0x6666,
    0x6666,
    0x6666,
    0x6666,
    0x6666,
    0x6666,
    0x6666,
    0x6666,
    0x6666
]);
const $117ad2627eed074a$var$I = $117ad2627eed074a$var$gf([
    0xa0b0,
    0x4a0e,
    0x1b27,
    0xc4ee,
    0xe478,
    0xad2f,
    0x1806,
    0x2f43,
    0xd7a7,
    0x3dfb,
    0x0099,
    0x2b4d,
    0xdf0b,
    0x4fc1,
    0x2480,
    0x2b83
]);
function $117ad2627eed074a$var$set25519(r, a) {
    for(let i = 0; i < 16; i++)r[i] = a[i] | 0;
}
function $117ad2627eed074a$var$car25519(o) {
    let c = 1;
    for(let i = 0; i < 16; i++){
        let v = o[i] + c + 65535;
        c = Math.floor(v / 65536);
        o[i] = v - c * 65536;
    }
    o[0] += c - 1 + 37 * (c - 1);
}
function $117ad2627eed074a$var$sel25519(p, q, b) {
    const c = ~(b - 1);
    for(let i = 0; i < 16; i++){
        const t = c & (p[i] ^ q[i]);
        p[i] ^= t;
        q[i] ^= t;
    }
}
function $117ad2627eed074a$var$pack25519(o, n) {
    const m = $117ad2627eed074a$var$gf();
    const t = $117ad2627eed074a$var$gf();
    for(let i = 0; i < 16; i++)t[i] = n[i];
    $117ad2627eed074a$var$car25519(t);
    $117ad2627eed074a$var$car25519(t);
    $117ad2627eed074a$var$car25519(t);
    for(let j = 0; j < 2; j++){
        m[0] = t[0] - 0xffed;
        for(let i = 1; i < 15; i++){
            m[i] = t[i] - 0xffff - (m[i - 1] >> 16 & 1);
            m[i - 1] &= 0xffff;
        }
        m[15] = t[15] - 0x7fff - (m[14] >> 16 & 1);
        const b = m[15] >> 16 & 1;
        m[14] &= 0xffff;
        $117ad2627eed074a$var$sel25519(t, m, 1 - b);
    }
    for(let i = 0; i < 16; i++){
        o[2 * i] = t[i] & 0xff;
        o[2 * i + 1] = t[i] >> 8;
    }
}
function $117ad2627eed074a$var$verify32(x, y) {
    let d = 0;
    for(let i = 0; i < 32; i++)d |= x[i] ^ y[i];
    return (1 & d - 1 >>> 8) - 1;
}
function $117ad2627eed074a$var$neq25519(a, b) {
    const c = new Uint8Array(32);
    const d = new Uint8Array(32);
    $117ad2627eed074a$var$pack25519(c, a);
    $117ad2627eed074a$var$pack25519(d, b);
    return $117ad2627eed074a$var$verify32(c, d);
}
function $117ad2627eed074a$var$par25519(a) {
    const d = new Uint8Array(32);
    $117ad2627eed074a$var$pack25519(d, a);
    return d[0] & 1;
}
function $117ad2627eed074a$var$unpack25519(o, n) {
    for(let i = 0; i < 16; i++)o[i] = n[2 * i] + (n[2 * i + 1] << 8);
    o[15] &= 0x7fff;
}
function $117ad2627eed074a$var$add(o, a, b) {
    for(let i = 0; i < 16; i++)o[i] = a[i] + b[i];
}
function $117ad2627eed074a$var$sub(o, a, b) {
    for(let i = 0; i < 16; i++)o[i] = a[i] - b[i];
}
function $117ad2627eed074a$var$mul(o, a, b) {
    let v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
    v = a[0];
    t0 += v * b0;
    t1 += v * b1;
    t2 += v * b2;
    t3 += v * b3;
    t4 += v * b4;
    t5 += v * b5;
    t6 += v * b6;
    t7 += v * b7;
    t8 += v * b8;
    t9 += v * b9;
    t10 += v * b10;
    t11 += v * b11;
    t12 += v * b12;
    t13 += v * b13;
    t14 += v * b14;
    t15 += v * b15;
    v = a[1];
    t1 += v * b0;
    t2 += v * b1;
    t3 += v * b2;
    t4 += v * b3;
    t5 += v * b4;
    t6 += v * b5;
    t7 += v * b6;
    t8 += v * b7;
    t9 += v * b8;
    t10 += v * b9;
    t11 += v * b10;
    t12 += v * b11;
    t13 += v * b12;
    t14 += v * b13;
    t15 += v * b14;
    t16 += v * b15;
    v = a[2];
    t2 += v * b0;
    t3 += v * b1;
    t4 += v * b2;
    t5 += v * b3;
    t6 += v * b4;
    t7 += v * b5;
    t8 += v * b6;
    t9 += v * b7;
    t10 += v * b8;
    t11 += v * b9;
    t12 += v * b10;
    t13 += v * b11;
    t14 += v * b12;
    t15 += v * b13;
    t16 += v * b14;
    t17 += v * b15;
    v = a[3];
    t3 += v * b0;
    t4 += v * b1;
    t5 += v * b2;
    t6 += v * b3;
    t7 += v * b4;
    t8 += v * b5;
    t9 += v * b6;
    t10 += v * b7;
    t11 += v * b8;
    t12 += v * b9;
    t13 += v * b10;
    t14 += v * b11;
    t15 += v * b12;
    t16 += v * b13;
    t17 += v * b14;
    t18 += v * b15;
    v = a[4];
    t4 += v * b0;
    t5 += v * b1;
    t6 += v * b2;
    t7 += v * b3;
    t8 += v * b4;
    t9 += v * b5;
    t10 += v * b6;
    t11 += v * b7;
    t12 += v * b8;
    t13 += v * b9;
    t14 += v * b10;
    t15 += v * b11;
    t16 += v * b12;
    t17 += v * b13;
    t18 += v * b14;
    t19 += v * b15;
    v = a[5];
    t5 += v * b0;
    t6 += v * b1;
    t7 += v * b2;
    t8 += v * b3;
    t9 += v * b4;
    t10 += v * b5;
    t11 += v * b6;
    t12 += v * b7;
    t13 += v * b8;
    t14 += v * b9;
    t15 += v * b10;
    t16 += v * b11;
    t17 += v * b12;
    t18 += v * b13;
    t19 += v * b14;
    t20 += v * b15;
    v = a[6];
    t6 += v * b0;
    t7 += v * b1;
    t8 += v * b2;
    t9 += v * b3;
    t10 += v * b4;
    t11 += v * b5;
    t12 += v * b6;
    t13 += v * b7;
    t14 += v * b8;
    t15 += v * b9;
    t16 += v * b10;
    t17 += v * b11;
    t18 += v * b12;
    t19 += v * b13;
    t20 += v * b14;
    t21 += v * b15;
    v = a[7];
    t7 += v * b0;
    t8 += v * b1;
    t9 += v * b2;
    t10 += v * b3;
    t11 += v * b4;
    t12 += v * b5;
    t13 += v * b6;
    t14 += v * b7;
    t15 += v * b8;
    t16 += v * b9;
    t17 += v * b10;
    t18 += v * b11;
    t19 += v * b12;
    t20 += v * b13;
    t21 += v * b14;
    t22 += v * b15;
    v = a[8];
    t8 += v * b0;
    t9 += v * b1;
    t10 += v * b2;
    t11 += v * b3;
    t12 += v * b4;
    t13 += v * b5;
    t14 += v * b6;
    t15 += v * b7;
    t16 += v * b8;
    t17 += v * b9;
    t18 += v * b10;
    t19 += v * b11;
    t20 += v * b12;
    t21 += v * b13;
    t22 += v * b14;
    t23 += v * b15;
    v = a[9];
    t9 += v * b0;
    t10 += v * b1;
    t11 += v * b2;
    t12 += v * b3;
    t13 += v * b4;
    t14 += v * b5;
    t15 += v * b6;
    t16 += v * b7;
    t17 += v * b8;
    t18 += v * b9;
    t19 += v * b10;
    t20 += v * b11;
    t21 += v * b12;
    t22 += v * b13;
    t23 += v * b14;
    t24 += v * b15;
    v = a[10];
    t10 += v * b0;
    t11 += v * b1;
    t12 += v * b2;
    t13 += v * b3;
    t14 += v * b4;
    t15 += v * b5;
    t16 += v * b6;
    t17 += v * b7;
    t18 += v * b8;
    t19 += v * b9;
    t20 += v * b10;
    t21 += v * b11;
    t22 += v * b12;
    t23 += v * b13;
    t24 += v * b14;
    t25 += v * b15;
    v = a[11];
    t11 += v * b0;
    t12 += v * b1;
    t13 += v * b2;
    t14 += v * b3;
    t15 += v * b4;
    t16 += v * b5;
    t17 += v * b6;
    t18 += v * b7;
    t19 += v * b8;
    t20 += v * b9;
    t21 += v * b10;
    t22 += v * b11;
    t23 += v * b12;
    t24 += v * b13;
    t25 += v * b14;
    t26 += v * b15;
    v = a[12];
    t12 += v * b0;
    t13 += v * b1;
    t14 += v * b2;
    t15 += v * b3;
    t16 += v * b4;
    t17 += v * b5;
    t18 += v * b6;
    t19 += v * b7;
    t20 += v * b8;
    t21 += v * b9;
    t22 += v * b10;
    t23 += v * b11;
    t24 += v * b12;
    t25 += v * b13;
    t26 += v * b14;
    t27 += v * b15;
    v = a[13];
    t13 += v * b0;
    t14 += v * b1;
    t15 += v * b2;
    t16 += v * b3;
    t17 += v * b4;
    t18 += v * b5;
    t19 += v * b6;
    t20 += v * b7;
    t21 += v * b8;
    t22 += v * b9;
    t23 += v * b10;
    t24 += v * b11;
    t25 += v * b12;
    t26 += v * b13;
    t27 += v * b14;
    t28 += v * b15;
    v = a[14];
    t14 += v * b0;
    t15 += v * b1;
    t16 += v * b2;
    t17 += v * b3;
    t18 += v * b4;
    t19 += v * b5;
    t20 += v * b6;
    t21 += v * b7;
    t22 += v * b8;
    t23 += v * b9;
    t24 += v * b10;
    t25 += v * b11;
    t26 += v * b12;
    t27 += v * b13;
    t28 += v * b14;
    t29 += v * b15;
    v = a[15];
    t15 += v * b0;
    t16 += v * b1;
    t17 += v * b2;
    t18 += v * b3;
    t19 += v * b4;
    t20 += v * b5;
    t21 += v * b6;
    t22 += v * b7;
    t23 += v * b8;
    t24 += v * b9;
    t25 += v * b10;
    t26 += v * b11;
    t27 += v * b12;
    t28 += v * b13;
    t29 += v * b14;
    t30 += v * b15;
    t0 += 38 * t16;
    t1 += 38 * t17;
    t2 += 38 * t18;
    t3 += 38 * t19;
    t4 += 38 * t20;
    t5 += 38 * t21;
    t6 += 38 * t22;
    t7 += 38 * t23;
    t8 += 38 * t24;
    t9 += 38 * t25;
    t10 += 38 * t26;
    t11 += 38 * t27;
    t12 += 38 * t28;
    t13 += 38 * t29;
    t14 += 38 * t30;
    // t15 left as is
    // first car
    c = 1;
    v = t0 + c + 65535;
    c = Math.floor(v / 65536);
    t0 = v - c * 65536;
    v = t1 + c + 65535;
    c = Math.floor(v / 65536);
    t1 = v - c * 65536;
    v = t2 + c + 65535;
    c = Math.floor(v / 65536);
    t2 = v - c * 65536;
    v = t3 + c + 65535;
    c = Math.floor(v / 65536);
    t3 = v - c * 65536;
    v = t4 + c + 65535;
    c = Math.floor(v / 65536);
    t4 = v - c * 65536;
    v = t5 + c + 65535;
    c = Math.floor(v / 65536);
    t5 = v - c * 65536;
    v = t6 + c + 65535;
    c = Math.floor(v / 65536);
    t6 = v - c * 65536;
    v = t7 + c + 65535;
    c = Math.floor(v / 65536);
    t7 = v - c * 65536;
    v = t8 + c + 65535;
    c = Math.floor(v / 65536);
    t8 = v - c * 65536;
    v = t9 + c + 65535;
    c = Math.floor(v / 65536);
    t9 = v - c * 65536;
    v = t10 + c + 65535;
    c = Math.floor(v / 65536);
    t10 = v - c * 65536;
    v = t11 + c + 65535;
    c = Math.floor(v / 65536);
    t11 = v - c * 65536;
    v = t12 + c + 65535;
    c = Math.floor(v / 65536);
    t12 = v - c * 65536;
    v = t13 + c + 65535;
    c = Math.floor(v / 65536);
    t13 = v - c * 65536;
    v = t14 + c + 65535;
    c = Math.floor(v / 65536);
    t14 = v - c * 65536;
    v = t15 + c + 65535;
    c = Math.floor(v / 65536);
    t15 = v - c * 65536;
    t0 += c - 1 + 37 * (c - 1);
    // second car
    c = 1;
    v = t0 + c + 65535;
    c = Math.floor(v / 65536);
    t0 = v - c * 65536;
    v = t1 + c + 65535;
    c = Math.floor(v / 65536);
    t1 = v - c * 65536;
    v = t2 + c + 65535;
    c = Math.floor(v / 65536);
    t2 = v - c * 65536;
    v = t3 + c + 65535;
    c = Math.floor(v / 65536);
    t3 = v - c * 65536;
    v = t4 + c + 65535;
    c = Math.floor(v / 65536);
    t4 = v - c * 65536;
    v = t5 + c + 65535;
    c = Math.floor(v / 65536);
    t5 = v - c * 65536;
    v = t6 + c + 65535;
    c = Math.floor(v / 65536);
    t6 = v - c * 65536;
    v = t7 + c + 65535;
    c = Math.floor(v / 65536);
    t7 = v - c * 65536;
    v = t8 + c + 65535;
    c = Math.floor(v / 65536);
    t8 = v - c * 65536;
    v = t9 + c + 65535;
    c = Math.floor(v / 65536);
    t9 = v - c * 65536;
    v = t10 + c + 65535;
    c = Math.floor(v / 65536);
    t10 = v - c * 65536;
    v = t11 + c + 65535;
    c = Math.floor(v / 65536);
    t11 = v - c * 65536;
    v = t12 + c + 65535;
    c = Math.floor(v / 65536);
    t12 = v - c * 65536;
    v = t13 + c + 65535;
    c = Math.floor(v / 65536);
    t13 = v - c * 65536;
    v = t14 + c + 65535;
    c = Math.floor(v / 65536);
    t14 = v - c * 65536;
    v = t15 + c + 65535;
    c = Math.floor(v / 65536);
    t15 = v - c * 65536;
    t0 += c - 1 + 37 * (c - 1);
    o[0] = t0;
    o[1] = t1;
    o[2] = t2;
    o[3] = t3;
    o[4] = t4;
    o[5] = t5;
    o[6] = t6;
    o[7] = t7;
    o[8] = t8;
    o[9] = t9;
    o[10] = t10;
    o[11] = t11;
    o[12] = t12;
    o[13] = t13;
    o[14] = t14;
    o[15] = t15;
}
function $117ad2627eed074a$var$square(o, a) {
    $117ad2627eed074a$var$mul(o, a, a);
}
function $117ad2627eed074a$var$inv25519(o, i) {
    const c = $117ad2627eed074a$var$gf();
    let a;
    for(a = 0; a < 16; a++)c[a] = i[a];
    for(a = 253; a >= 0; a--){
        $117ad2627eed074a$var$square(c, c);
        if (a !== 2 && a !== 4) $117ad2627eed074a$var$mul(c, c, i);
    }
    for(a = 0; a < 16; a++)o[a] = c[a];
}
function $117ad2627eed074a$var$pow2523(o, i) {
    const c = $117ad2627eed074a$var$gf();
    let a;
    for(a = 0; a < 16; a++)c[a] = i[a];
    for(a = 250; a >= 0; a--){
        $117ad2627eed074a$var$square(c, c);
        if (a !== 1) $117ad2627eed074a$var$mul(c, c, i);
    }
    for(a = 0; a < 16; a++)o[a] = c[a];
}
function $117ad2627eed074a$var$edadd(p, q) {
    const a = $117ad2627eed074a$var$gf(), b = $117ad2627eed074a$var$gf(), c = $117ad2627eed074a$var$gf(), d = $117ad2627eed074a$var$gf(), e = $117ad2627eed074a$var$gf(), f = $117ad2627eed074a$var$gf(), g = $117ad2627eed074a$var$gf(), h = $117ad2627eed074a$var$gf(), t = $117ad2627eed074a$var$gf();
    $117ad2627eed074a$var$sub(a, p[1], p[0]);
    $117ad2627eed074a$var$sub(t, q[1], q[0]);
    $117ad2627eed074a$var$mul(a, a, t);
    $117ad2627eed074a$var$add(b, p[0], p[1]);
    $117ad2627eed074a$var$add(t, q[0], q[1]);
    $117ad2627eed074a$var$mul(b, b, t);
    $117ad2627eed074a$var$mul(c, p[3], q[3]);
    $117ad2627eed074a$var$mul(c, c, $117ad2627eed074a$var$D2);
    $117ad2627eed074a$var$mul(d, p[2], q[2]);
    $117ad2627eed074a$var$add(d, d, d);
    $117ad2627eed074a$var$sub(e, b, a);
    $117ad2627eed074a$var$sub(f, d, c);
    $117ad2627eed074a$var$add(g, d, c);
    $117ad2627eed074a$var$add(h, b, a);
    $117ad2627eed074a$var$mul(p[0], e, f);
    $117ad2627eed074a$var$mul(p[1], h, g);
    $117ad2627eed074a$var$mul(p[2], g, f);
    $117ad2627eed074a$var$mul(p[3], e, h);
}
function $117ad2627eed074a$var$cswap(p, q, b) {
    for(let i = 0; i < 4; i++)$117ad2627eed074a$var$sel25519(p[i], q[i], b);
}
function $117ad2627eed074a$var$pack(r, p) {
    const tx = $117ad2627eed074a$var$gf(), ty = $117ad2627eed074a$var$gf(), zi = $117ad2627eed074a$var$gf();
    $117ad2627eed074a$var$inv25519(zi, p[2]);
    $117ad2627eed074a$var$mul(tx, p[0], zi);
    $117ad2627eed074a$var$mul(ty, p[1], zi);
    $117ad2627eed074a$var$pack25519(r, ty);
    r[31] ^= $117ad2627eed074a$var$par25519(tx) << 7;
}
function $117ad2627eed074a$var$scalarmult(p, q, s) {
    $117ad2627eed074a$var$set25519(p[0], $117ad2627eed074a$var$gf0);
    $117ad2627eed074a$var$set25519(p[1], $117ad2627eed074a$var$gf1);
    $117ad2627eed074a$var$set25519(p[2], $117ad2627eed074a$var$gf1);
    $117ad2627eed074a$var$set25519(p[3], $117ad2627eed074a$var$gf0);
    for(let i = 255; i >= 0; --i){
        const b = s[i / 8 | 0] >> (i & 7) & 1;
        $117ad2627eed074a$var$cswap(p, q, b);
        $117ad2627eed074a$var$edadd(q, p);
        $117ad2627eed074a$var$edadd(p, p);
        $117ad2627eed074a$var$cswap(p, q, b);
    }
}
function $117ad2627eed074a$var$scalarbase(p, s) {
    const q = [
        $117ad2627eed074a$var$gf(),
        $117ad2627eed074a$var$gf(),
        $117ad2627eed074a$var$gf(),
        $117ad2627eed074a$var$gf()
    ];
    $117ad2627eed074a$var$set25519(q[0], $117ad2627eed074a$var$X);
    $117ad2627eed074a$var$set25519(q[1], $117ad2627eed074a$var$Y);
    $117ad2627eed074a$var$set25519(q[2], $117ad2627eed074a$var$gf1);
    $117ad2627eed074a$var$mul(q[3], $117ad2627eed074a$var$X, $117ad2627eed074a$var$Y);
    $117ad2627eed074a$var$scalarmult(p, q, s);
}
// Generates key pair from secret 32-byte seed.
function $117ad2627eed074a$var$generateKeyPairFromSeed(seed) {
    if (seed.length !== module.exports.SEED_LENGTH) throw new Error(`ed25519: seed must be ${module.exports.SEED_LENGTH} bytes`);
    const d = (0, $4WKmN.hash)(seed);
    d[0] &= 248;
    d[31] &= 127;
    d[31] |= 64;
    const publicKey = new Uint8Array(32);
    const p = [
        $117ad2627eed074a$var$gf(),
        $117ad2627eed074a$var$gf(),
        $117ad2627eed074a$var$gf(),
        $117ad2627eed074a$var$gf()
    ];
    $117ad2627eed074a$var$scalarbase(p, d);
    $117ad2627eed074a$var$pack(publicKey, p);
    const secretKey = new Uint8Array(64);
    secretKey.set(seed);
    secretKey.set(publicKey, 32);
    return {
        publicKey: publicKey,
        secretKey: secretKey
    };
}
module.exports.generateKeyPairFromSeed = $117ad2627eed074a$var$generateKeyPairFromSeed;
function $117ad2627eed074a$var$generateKeyPair(prng) {
    const seed = (0, $2SEZb.randomBytes)(32, prng);
    const result = $117ad2627eed074a$var$generateKeyPairFromSeed(seed);
    (0, $6n5DJ.wipe)(seed);
    return result;
}
module.exports.generateKeyPair = $117ad2627eed074a$var$generateKeyPair;
function $117ad2627eed074a$var$extractPublicKeyFromSecretKey(secretKey) {
    if (secretKey.length !== module.exports.SECRET_KEY_LENGTH) throw new Error(`ed25519: secret key must be ${module.exports.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(secretKey.subarray(32));
}
module.exports.extractPublicKeyFromSecretKey = $117ad2627eed074a$var$extractPublicKeyFromSecretKey;
const $117ad2627eed074a$var$L = new Float64Array([
    0xed,
    0xd3,
    0xf5,
    0x5c,
    0x1a,
    0x63,
    0x12,
    0x58,
    0xd6,
    0x9c,
    0xf7,
    0xa2,
    0xde,
    0xf9,
    0xde,
    0x14,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0x10
]);
function $117ad2627eed074a$var$modL(r, x) {
    let carry;
    let i;
    let j;
    let k;
    for(i = 63; i >= 32; --i){
        carry = 0;
        for(j = i - 32, k = i - 12; j < k; ++j){
            x[j] += carry - 16 * x[i] * $117ad2627eed074a$var$L[j - (i - 32)];
            carry = Math.floor((x[j] + 128) / 256);
            x[j] -= carry * 256;
        }
        x[j] += carry;
        x[i] = 0;
    }
    carry = 0;
    for(j = 0; j < 32; j++){
        x[j] += carry - (x[31] >> 4) * $117ad2627eed074a$var$L[j];
        carry = x[j] >> 8;
        x[j] &= 255;
    }
    for(j = 0; j < 32; j++)x[j] -= carry * $117ad2627eed074a$var$L[j];
    for(i = 0; i < 32; i++){
        x[i + 1] += x[i] >> 8;
        r[i] = x[i] & 255;
    }
}
function $117ad2627eed074a$var$reduce(r) {
    const x = new Float64Array(64);
    for(let i = 0; i < 64; i++)x[i] = r[i];
    for(let i = 0; i < 64; i++)r[i] = 0;
    $117ad2627eed074a$var$modL(r, x);
}
// Returns 64-byte signature of the message under the 64-byte secret key.
function $117ad2627eed074a$var$sign(secretKey, message) {
    const x = new Float64Array(64);
    const p = [
        $117ad2627eed074a$var$gf(),
        $117ad2627eed074a$var$gf(),
        $117ad2627eed074a$var$gf(),
        $117ad2627eed074a$var$gf()
    ];
    const d = (0, $4WKmN.hash)(secretKey.subarray(0, 32));
    d[0] &= 248;
    d[31] &= 127;
    d[31] |= 64;
    const signature = new Uint8Array(64);
    signature.set(d.subarray(32), 32);
    const hs = new $4WKmN.SHA512();
    hs.update(signature.subarray(32));
    hs.update(message);
    const r = hs.digest();
    hs.clean();
    $117ad2627eed074a$var$reduce(r);
    $117ad2627eed074a$var$scalarbase(p, r);
    $117ad2627eed074a$var$pack(signature, p);
    hs.reset();
    hs.update(signature.subarray(0, 32));
    hs.update(secretKey.subarray(32));
    hs.update(message);
    const h = hs.digest();
    $117ad2627eed074a$var$reduce(h);
    for(let i = 0; i < 32; i++)x[i] = r[i];
    for(let i = 0; i < 32; i++)for(let j = 0; j < 32; j++)x[i + j] += h[i] * d[j];
    $117ad2627eed074a$var$modL(signature.subarray(32), x);
    return signature;
}
module.exports.sign = $117ad2627eed074a$var$sign;
function $117ad2627eed074a$var$unpackneg(r, p) {
    const t = $117ad2627eed074a$var$gf(), chk = $117ad2627eed074a$var$gf(), num = $117ad2627eed074a$var$gf(), den = $117ad2627eed074a$var$gf(), den2 = $117ad2627eed074a$var$gf(), den4 = $117ad2627eed074a$var$gf(), den6 = $117ad2627eed074a$var$gf();
    $117ad2627eed074a$var$set25519(r[2], $117ad2627eed074a$var$gf1);
    $117ad2627eed074a$var$unpack25519(r[1], p);
    $117ad2627eed074a$var$square(num, r[1]);
    $117ad2627eed074a$var$mul(den, num, $117ad2627eed074a$var$D);
    $117ad2627eed074a$var$sub(num, num, r[2]);
    $117ad2627eed074a$var$add(den, r[2], den);
    $117ad2627eed074a$var$square(den2, den);
    $117ad2627eed074a$var$square(den4, den2);
    $117ad2627eed074a$var$mul(den6, den4, den2);
    $117ad2627eed074a$var$mul(t, den6, num);
    $117ad2627eed074a$var$mul(t, t, den);
    $117ad2627eed074a$var$pow2523(t, t);
    $117ad2627eed074a$var$mul(t, t, num);
    $117ad2627eed074a$var$mul(t, t, den);
    $117ad2627eed074a$var$mul(t, t, den);
    $117ad2627eed074a$var$mul(r[0], t, den);
    $117ad2627eed074a$var$square(chk, r[0]);
    $117ad2627eed074a$var$mul(chk, chk, den);
    if ($117ad2627eed074a$var$neq25519(chk, num)) $117ad2627eed074a$var$mul(r[0], r[0], $117ad2627eed074a$var$I);
    $117ad2627eed074a$var$square(chk, r[0]);
    $117ad2627eed074a$var$mul(chk, chk, den);
    if ($117ad2627eed074a$var$neq25519(chk, num)) return -1;
    if ($117ad2627eed074a$var$par25519(r[0]) === p[31] >> 7) $117ad2627eed074a$var$sub(r[0], $117ad2627eed074a$var$gf0, r[0]);
    $117ad2627eed074a$var$mul(r[3], r[0], r[1]);
    return 0;
}
function $117ad2627eed074a$var$verify(publicKey, message, signature) {
    const t = new Uint8Array(32);
    const p = [
        $117ad2627eed074a$var$gf(),
        $117ad2627eed074a$var$gf(),
        $117ad2627eed074a$var$gf(),
        $117ad2627eed074a$var$gf()
    ];
    const q = [
        $117ad2627eed074a$var$gf(),
        $117ad2627eed074a$var$gf(),
        $117ad2627eed074a$var$gf(),
        $117ad2627eed074a$var$gf()
    ];
    if (signature.length !== module.exports.SIGNATURE_LENGTH) throw new Error(`ed25519: signature must be ${module.exports.SIGNATURE_LENGTH} bytes`);
    if ($117ad2627eed074a$var$unpackneg(q, publicKey)) return false;
    const hs = new $4WKmN.SHA512();
    hs.update(signature.subarray(0, 32));
    hs.update(publicKey);
    hs.update(message);
    const h = hs.digest();
    $117ad2627eed074a$var$reduce(h);
    $117ad2627eed074a$var$scalarmult(p, q, h);
    $117ad2627eed074a$var$scalarbase(q, signature.subarray(32));
    $117ad2627eed074a$var$edadd(p, q);
    $117ad2627eed074a$var$pack(t, p);
    if ($117ad2627eed074a$var$verify32(signature, t)) return false;
    return true;
}
module.exports.verify = $117ad2627eed074a$var$verify;
/**
 * Convert Ed25519 public key to X25519 public key.
 *
 * Throws if given an invalid public key.
 */ function $117ad2627eed074a$var$convertPublicKeyToX25519(publicKey) {
    let q = [
        $117ad2627eed074a$var$gf(),
        $117ad2627eed074a$var$gf(),
        $117ad2627eed074a$var$gf(),
        $117ad2627eed074a$var$gf()
    ];
    if ($117ad2627eed074a$var$unpackneg(q, publicKey)) throw new Error("Ed25519: invalid public key");
    // Formula: montgomeryX = (edwardsY + 1)*inverse(1 - edwardsY) mod p
    let a = $117ad2627eed074a$var$gf();
    let b = $117ad2627eed074a$var$gf();
    let y = q[1];
    $117ad2627eed074a$var$add(a, $117ad2627eed074a$var$gf1, y);
    $117ad2627eed074a$var$sub(b, $117ad2627eed074a$var$gf1, y);
    $117ad2627eed074a$var$inv25519(b, b);
    $117ad2627eed074a$var$mul(a, a, b);
    let z = new Uint8Array(32);
    $117ad2627eed074a$var$pack25519(z, a);
    return z;
}
module.exports.convertPublicKeyToX25519 = $117ad2627eed074a$var$convertPublicKeyToX25519;
/**
 *  Convert Ed25519 secret (private) key to X25519 secret key.
 */ function $117ad2627eed074a$var$convertSecretKeyToX25519(secretKey) {
    const d = (0, $4WKmN.hash)(secretKey.subarray(0, 32));
    d[0] &= 248;
    d[31] &= 127;
    d[31] |= 64;
    const o = new Uint8Array(d.subarray(0, 32));
    (0, $6n5DJ.wipe)(d);
    return o;
}
module.exports.convertSecretKeyToX25519 = $117ad2627eed074a$var$convertSecretKeyToX25519;

});
parcelRequire.register("2SEZb", function(module, exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.randomStringForEntropy = module.exports.randomString = module.exports.randomUint32 = module.exports.randomBytes = module.exports.defaultRandomSource = void 0;

var $jo6Jh = parcelRequire("jo6Jh");

var $fC3Ge = parcelRequire("fC3Ge");

var $6n5DJ = parcelRequire("6n5DJ");
module.exports.defaultRandomSource = new $jo6Jh.SystemRandomSource();
function $21906ad53be419dc$var$randomBytes(length, prng = module.exports.defaultRandomSource) {
    return prng.randomBytes(length);
}
module.exports.randomBytes = $21906ad53be419dc$var$randomBytes;
/**
 * Returns a uniformly random unsigned 32-bit integer.
 */ function $21906ad53be419dc$var$randomUint32(prng = module.exports.defaultRandomSource) {
    // Generate 4-byte random buffer.
    const buf = $21906ad53be419dc$var$randomBytes(4, prng);
    // Convert bytes from buffer into a 32-bit integer.
    // It's not important which byte order to use, since
    // the result is random.
    const result = (0, $fC3Ge.readUint32LE)(buf);
    // Clean the buffer.
    (0, $6n5DJ.wipe)(buf);
    return result;
}
module.exports.randomUint32 = $21906ad53be419dc$var$randomUint32;
/** 62 alphanumeric characters for default charset of randomString() */ const $21906ad53be419dc$var$ALPHANUMERIC = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
/**
 * Returns a uniform random string of the given length
 * with characters from the given charset.
 *
 * Charset must not have more than 256 characters.
 *
 * Default charset generates case-sensitive alphanumeric
 * strings (0-9, A-Z, a-z).
 */ function $21906ad53be419dc$var$randomString(length, charset = $21906ad53be419dc$var$ALPHANUMERIC, prng = module.exports.defaultRandomSource) {
    if (charset.length < 2) throw new Error("randomString charset is too short");
    if (charset.length > 256) throw new Error("randomString charset is too long");
    let out = "";
    const charsLen = charset.length;
    const maxByte = 256 - 256 % charsLen;
    while(length > 0){
        const buf = $21906ad53be419dc$var$randomBytes(Math.ceil(length * 256 / maxByte), prng);
        for(let i = 0; i < buf.length && length > 0; i++){
            const randomByte = buf[i];
            if (randomByte < maxByte) {
                out += charset.charAt(randomByte % charsLen);
                length--;
            }
        }
        (0, $6n5DJ.wipe)(buf);
    }
    return out;
}
module.exports.randomString = $21906ad53be419dc$var$randomString;
/**
 * Returns uniform random string containing at least the given
 * number of bits of entropy.
 *
 * For example, randomStringForEntropy(128) will return a 22-character
 * alphanumeric string, while randomStringForEntropy(128, "0123456789")
 * will return a 39-character numeric string, both will contain at
 * least 128 bits of entropy.
 *
 * Default charset generates case-sensitive alphanumeric
 * strings (0-9, A-Z, a-z).
 */ function $21906ad53be419dc$var$randomStringForEntropy(bits, charset = $21906ad53be419dc$var$ALPHANUMERIC, prng = module.exports.defaultRandomSource) {
    const length = Math.ceil(bits / (Math.log(charset.length) / Math.LN2));
    return $21906ad53be419dc$var$randomString(length, charset, prng);
}
module.exports.randomStringForEntropy = $21906ad53be419dc$var$randomStringForEntropy;

});
parcelRequire.register("jo6Jh", function(module, exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.SystemRandomSource = void 0;

var $5uT3m = parcelRequire("5uT3m");

var $cUlMI = parcelRequire("cUlMI");
class $e1d57a7defa884e5$var$SystemRandomSource {
    constructor(){
        this.isAvailable = false;
        this.name = "";
        // Try browser.
        this._source = new $5uT3m.BrowserRandomSource();
        if (this._source.isAvailable) {
            this.isAvailable = true;
            this.name = "Browser";
            return;
        }
        // If no browser source, try Node.
        this._source = new $cUlMI.NodeRandomSource();
        if (this._source.isAvailable) {
            this.isAvailable = true;
            this.name = "Node";
            return;
        }
    // No sources, we're out of options.
    }
    randomBytes(length) {
        if (!this.isAvailable) throw new Error("System random byte generator is not available.");
        return this._source.randomBytes(length);
    }
}
module.exports.SystemRandomSource = $e1d57a7defa884e5$var$SystemRandomSource;

});
parcelRequire.register("5uT3m", function(module, exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.BrowserRandomSource = void 0;
const $400a7580ffead897$var$QUOTA = 65536;
class $400a7580ffead897$var$BrowserRandomSource {
    constructor(){
        this.isAvailable = false;
        this.isInstantiated = false;
        const browserCrypto = typeof self !== "undefined" ? self.crypto || self.msCrypto // IE11 has msCrypto
         : null;
        if (browserCrypto && browserCrypto.getRandomValues !== undefined) {
            this._crypto = browserCrypto;
            this.isAvailable = true;
            this.isInstantiated = true;
        }
    }
    randomBytes(length) {
        if (!this.isAvailable || !this._crypto) throw new Error("Browser random byte generator is not available.");
        const out = new Uint8Array(length);
        for(let i = 0; i < out.length; i += $400a7580ffead897$var$QUOTA)this._crypto.getRandomValues(out.subarray(i, i + Math.min(out.length - i, $400a7580ffead897$var$QUOTA)));
        return out;
    }
}
module.exports.BrowserRandomSource = $400a7580ffead897$var$BrowserRandomSource;

});

parcelRequire.register("cUlMI", function(module, exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.NodeRandomSource = void 0;

var $6n5DJ = parcelRequire("6n5DJ");

class $965b9cff1da44efc$var$NodeRandomSource {
    constructor(){
        this.isAvailable = false;
        this.isInstantiated = false;
        {
            const nodeCrypto = (parcelRequire("XDU19"));
            if (nodeCrypto && nodeCrypto.randomBytes) {
                this._crypto = nodeCrypto;
                this.isAvailable = true;
                this.isInstantiated = true;
            }
        }
    }
    randomBytes(length) {
        if (!this.isAvailable || !this._crypto) throw new Error("Node.js random byte generator is not available.");
        // Get random bytes (result is Buffer).
        let buffer = this._crypto.randomBytes(length);
        // Make sure we got the length that we requested.
        if (buffer.length !== length) throw new Error("NodeRandomSource: got fewer bytes than requested");
        // Allocate output array.
        const out = new Uint8Array(length);
        // Copy bytes from buffer to output.
        for(let i = 0; i < out.length; i++)out[i] = buffer[i];
        // Cleanup.
        (0, $6n5DJ.wipe)(buffer);
        return out;
    }
}
module.exports.NodeRandomSource = $965b9cff1da44efc$var$NodeRandomSource;

});
parcelRequire.register("6n5DJ", function(module, exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
/**
 * Sets all values in the given array to zero and returns it.
 *
 * The fact that it sets bytes to zero can be relied on.
 *
 * There is no guarantee that this function makes data disappear from memory,
 * as runtime implementation can, for example, have copying garbage collector
 * that will make copies of sensitive data before we wipe it. Or that an
 * operating system will write our data to swap or sleep image. Another thing
 * is that an optimizing compiler can remove calls to this function or make it
 * no-op. There's nothing we can do with it, so we just do our best and hope
 * that everything will be okay and good will triumph over evil.
 */ function $4a394404271ea983$var$wipe(array) {
    // Right now it's similar to array.fill(0). If it turns
    // out that runtimes optimize this call away, maybe
    // we can try something else.
    for(var i = 0; i < array.length; i++)array[i] = 0;
    return array;
}
module.exports.wipe = $4a394404271ea983$var$wipe;

});



parcelRequire.register("fC3Ge", function(module, exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jEPGJ = parcelRequire("jEPGJ");
// TODO(dchest): add asserts for correct value ranges and array offsets.
/**
 * Reads 2 bytes from array starting at offset as big-endian
 * signed 16-bit integer and returns it.
 */ function $b5dd4271dc46b957$var$readInt16BE(array, offset) {
    if (offset === void 0) offset = 0;
    return (array[offset + 0] << 8 | array[offset + 1]) << 16 >> 16;
}
module.exports.readInt16BE = $b5dd4271dc46b957$var$readInt16BE;
/**
 * Reads 2 bytes from array starting at offset as big-endian
 * unsigned 16-bit integer and returns it.
 */ function $b5dd4271dc46b957$var$readUint16BE(array, offset) {
    if (offset === void 0) offset = 0;
    return (array[offset + 0] << 8 | array[offset + 1]) >>> 0;
}
module.exports.readUint16BE = $b5dd4271dc46b957$var$readUint16BE;
/**
 * Reads 2 bytes from array starting at offset as little-endian
 * signed 16-bit integer and returns it.
 */ function $b5dd4271dc46b957$var$readInt16LE(array, offset) {
    if (offset === void 0) offset = 0;
    return (array[offset + 1] << 8 | array[offset]) << 16 >> 16;
}
module.exports.readInt16LE = $b5dd4271dc46b957$var$readInt16LE;
/**
 * Reads 2 bytes from array starting at offset as little-endian
 * unsigned 16-bit integer and returns it.
 */ function $b5dd4271dc46b957$var$readUint16LE(array, offset) {
    if (offset === void 0) offset = 0;
    return (array[offset + 1] << 8 | array[offset]) >>> 0;
}
module.exports.readUint16LE = $b5dd4271dc46b957$var$readUint16LE;
/**
 * Writes 2-byte big-endian representation of 16-bit unsigned
 * value to byte array starting at offset.
 *
 * If byte array is not given, creates a new 2-byte one.
 *
 * Returns the output byte array.
 */ function $b5dd4271dc46b957$var$writeUint16BE(value, out, offset) {
    if (out === void 0) out = new Uint8Array(2);
    if (offset === void 0) offset = 0;
    out[offset + 0] = value >>> 8;
    out[offset + 1] = value >>> 0;
    return out;
}
module.exports.writeUint16BE = $b5dd4271dc46b957$var$writeUint16BE;
module.exports.writeInt16BE = $b5dd4271dc46b957$var$writeUint16BE;
/**
 * Writes 2-byte little-endian representation of 16-bit unsigned
 * value to array starting at offset.
 *
 * If byte array is not given, creates a new 2-byte one.
 *
 * Returns the output byte array.
 */ function $b5dd4271dc46b957$var$writeUint16LE(value, out, offset) {
    if (out === void 0) out = new Uint8Array(2);
    if (offset === void 0) offset = 0;
    out[offset + 0] = value >>> 0;
    out[offset + 1] = value >>> 8;
    return out;
}
module.exports.writeUint16LE = $b5dd4271dc46b957$var$writeUint16LE;
module.exports.writeInt16LE = $b5dd4271dc46b957$var$writeUint16LE;
/**
 * Reads 4 bytes from array starting at offset as big-endian
 * signed 32-bit integer and returns it.
 */ function $b5dd4271dc46b957$var$readInt32BE(array, offset) {
    if (offset === void 0) offset = 0;
    return array[offset] << 24 | array[offset + 1] << 16 | array[offset + 2] << 8 | array[offset + 3];
}
module.exports.readInt32BE = $b5dd4271dc46b957$var$readInt32BE;
/**
 * Reads 4 bytes from array starting at offset as big-endian
 * unsigned 32-bit integer and returns it.
 */ function $b5dd4271dc46b957$var$readUint32BE(array, offset) {
    if (offset === void 0) offset = 0;
    return (array[offset] << 24 | array[offset + 1] << 16 | array[offset + 2] << 8 | array[offset + 3]) >>> 0;
}
module.exports.readUint32BE = $b5dd4271dc46b957$var$readUint32BE;
/**
 * Reads 4 bytes from array starting at offset as little-endian
 * signed 32-bit integer and returns it.
 */ function $b5dd4271dc46b957$var$readInt32LE(array, offset) {
    if (offset === void 0) offset = 0;
    return array[offset + 3] << 24 | array[offset + 2] << 16 | array[offset + 1] << 8 | array[offset];
}
module.exports.readInt32LE = $b5dd4271dc46b957$var$readInt32LE;
/**
 * Reads 4 bytes from array starting at offset as little-endian
 * unsigned 32-bit integer and returns it.
 */ function $b5dd4271dc46b957$var$readUint32LE(array, offset) {
    if (offset === void 0) offset = 0;
    return (array[offset + 3] << 24 | array[offset + 2] << 16 | array[offset + 1] << 8 | array[offset]) >>> 0;
}
module.exports.readUint32LE = $b5dd4271dc46b957$var$readUint32LE;
/**
 * Writes 4-byte big-endian representation of 32-bit unsigned
 * value to byte array starting at offset.
 *
 * If byte array is not given, creates a new 4-byte one.
 *
 * Returns the output byte array.
 */ function $b5dd4271dc46b957$var$writeUint32BE(value, out, offset) {
    if (out === void 0) out = new Uint8Array(4);
    if (offset === void 0) offset = 0;
    out[offset + 0] = value >>> 24;
    out[offset + 1] = value >>> 16;
    out[offset + 2] = value >>> 8;
    out[offset + 3] = value >>> 0;
    return out;
}
module.exports.writeUint32BE = $b5dd4271dc46b957$var$writeUint32BE;
module.exports.writeInt32BE = $b5dd4271dc46b957$var$writeUint32BE;
/**
 * Writes 4-byte little-endian representation of 32-bit unsigned
 * value to array starting at offset.
 *
 * If byte array is not given, creates a new 4-byte one.
 *
 * Returns the output byte array.
 */ function $b5dd4271dc46b957$var$writeUint32LE(value, out, offset) {
    if (out === void 0) out = new Uint8Array(4);
    if (offset === void 0) offset = 0;
    out[offset + 0] = value >>> 0;
    out[offset + 1] = value >>> 8;
    out[offset + 2] = value >>> 16;
    out[offset + 3] = value >>> 24;
    return out;
}
module.exports.writeUint32LE = $b5dd4271dc46b957$var$writeUint32LE;
module.exports.writeInt32LE = $b5dd4271dc46b957$var$writeUint32LE;
/**
 * Reads 8 bytes from array starting at offset as big-endian
 * signed 64-bit integer and returns it.
 *
 * IMPORTANT: due to JavaScript limitation, supports exact
 * numbers in range -9007199254740991 to 9007199254740991.
 * If the number stored in the byte array is outside this range,
 * the result is not exact.
 */ function $b5dd4271dc46b957$var$readInt64BE(array, offset) {
    if (offset === void 0) offset = 0;
    var hi = $b5dd4271dc46b957$var$readInt32BE(array, offset);
    var lo = $b5dd4271dc46b957$var$readInt32BE(array, offset + 4);
    return hi * 0x100000000 + lo - (lo >> 31) * 0x100000000;
}
module.exports.readInt64BE = $b5dd4271dc46b957$var$readInt64BE;
/**
 * Reads 8 bytes from array starting at offset as big-endian
 * unsigned 64-bit integer and returns it.
 *
 * IMPORTANT: due to JavaScript limitation, supports values up to 2^53-1.
 */ function $b5dd4271dc46b957$var$readUint64BE(array, offset) {
    if (offset === void 0) offset = 0;
    var hi = $b5dd4271dc46b957$var$readUint32BE(array, offset);
    var lo = $b5dd4271dc46b957$var$readUint32BE(array, offset + 4);
    return hi * 0x100000000 + lo;
}
module.exports.readUint64BE = $b5dd4271dc46b957$var$readUint64BE;
/**
 * Reads 8 bytes from array starting at offset as little-endian
 * signed 64-bit integer and returns it.
 *
 * IMPORTANT: due to JavaScript limitation, supports exact
 * numbers in range -9007199254740991 to 9007199254740991.
 * If the number stored in the byte array is outside this range,
 * the result is not exact.
 */ function $b5dd4271dc46b957$var$readInt64LE(array, offset) {
    if (offset === void 0) offset = 0;
    var lo = $b5dd4271dc46b957$var$readInt32LE(array, offset);
    var hi = $b5dd4271dc46b957$var$readInt32LE(array, offset + 4);
    return hi * 0x100000000 + lo - (lo >> 31) * 0x100000000;
}
module.exports.readInt64LE = $b5dd4271dc46b957$var$readInt64LE;
/**
 * Reads 8 bytes from array starting at offset as little-endian
 * unsigned 64-bit integer and returns it.
 *
 * IMPORTANT: due to JavaScript limitation, supports values up to 2^53-1.
 */ function $b5dd4271dc46b957$var$readUint64LE(array, offset) {
    if (offset === void 0) offset = 0;
    var lo = $b5dd4271dc46b957$var$readUint32LE(array, offset);
    var hi = $b5dd4271dc46b957$var$readUint32LE(array, offset + 4);
    return hi * 0x100000000 + lo;
}
module.exports.readUint64LE = $b5dd4271dc46b957$var$readUint64LE;
/**
 * Writes 8-byte big-endian representation of 64-bit unsigned
 * value to byte array starting at offset.
 *
 * Due to JavaScript limitation, supports values up to 2^53-1.
 *
 * If byte array is not given, creates a new 8-byte one.
 *
 * Returns the output byte array.
 */ function $b5dd4271dc46b957$var$writeUint64BE(value, out, offset) {
    if (out === void 0) out = new Uint8Array(8);
    if (offset === void 0) offset = 0;
    $b5dd4271dc46b957$var$writeUint32BE(value / 0x100000000 >>> 0, out, offset);
    $b5dd4271dc46b957$var$writeUint32BE(value >>> 0, out, offset + 4);
    return out;
}
module.exports.writeUint64BE = $b5dd4271dc46b957$var$writeUint64BE;
module.exports.writeInt64BE = $b5dd4271dc46b957$var$writeUint64BE;
/**
 * Writes 8-byte little-endian representation of 64-bit unsigned
 * value to byte array starting at offset.
 *
 * Due to JavaScript limitation, supports values up to 2^53-1.
 *
 * If byte array is not given, creates a new 8-byte one.
 *
 * Returns the output byte array.
 */ function $b5dd4271dc46b957$var$writeUint64LE(value, out, offset) {
    if (out === void 0) out = new Uint8Array(8);
    if (offset === void 0) offset = 0;
    $b5dd4271dc46b957$var$writeUint32LE(value >>> 0, out, offset);
    $b5dd4271dc46b957$var$writeUint32LE(value / 0x100000000 >>> 0, out, offset + 4);
    return out;
}
module.exports.writeUint64LE = $b5dd4271dc46b957$var$writeUint64LE;
module.exports.writeInt64LE = $b5dd4271dc46b957$var$writeUint64LE;
/**
 * Reads bytes from array starting at offset as big-endian
 * unsigned bitLen-bit integer and returns it.
 *
 * Supports bit lengths divisible by 8, up to 48.
 */ function $b5dd4271dc46b957$var$readUintBE(bitLength, array, offset) {
    if (offset === void 0) offset = 0;
    // TODO(dchest): implement support for bitLengths non-divisible by 8
    if (bitLength % 8 !== 0) throw new Error("readUintBE supports only bitLengths divisible by 8");
    if (bitLength / 8 > array.length - offset) throw new Error("readUintBE: array is too short for the given bitLength");
    var result = 0;
    var mul = 1;
    for(var i = bitLength / 8 + offset - 1; i >= offset; i--){
        result += array[i] * mul;
        mul *= 256;
    }
    return result;
}
module.exports.readUintBE = $b5dd4271dc46b957$var$readUintBE;
/**
 * Reads bytes from array starting at offset as little-endian
 * unsigned bitLen-bit integer and returns it.
 *
 * Supports bit lengths divisible by 8, up to 48.
 */ function $b5dd4271dc46b957$var$readUintLE(bitLength, array, offset) {
    if (offset === void 0) offset = 0;
    // TODO(dchest): implement support for bitLengths non-divisible by 8
    if (bitLength % 8 !== 0) throw new Error("readUintLE supports only bitLengths divisible by 8");
    if (bitLength / 8 > array.length - offset) throw new Error("readUintLE: array is too short for the given bitLength");
    var result = 0;
    var mul = 1;
    for(var i = offset; i < offset + bitLength / 8; i++){
        result += array[i] * mul;
        mul *= 256;
    }
    return result;
}
module.exports.readUintLE = $b5dd4271dc46b957$var$readUintLE;
/**
 * Writes a big-endian representation of bitLen-bit unsigned
 * value to array starting at offset.
 *
 * Supports bit lengths divisible by 8, up to 48.
 *
 * If byte array is not given, creates a new one.
 *
 * Returns the output byte array.
 */ function $b5dd4271dc46b957$var$writeUintBE(bitLength, value, out, offset) {
    if (out === void 0) out = new Uint8Array(bitLength / 8);
    if (offset === void 0) offset = 0;
    // TODO(dchest): implement support for bitLengths non-divisible by 8
    if (bitLength % 8 !== 0) throw new Error("writeUintBE supports only bitLengths divisible by 8");
    if (!$jEPGJ.isSafeInteger(value)) throw new Error("writeUintBE value must be an integer");
    var div = 1;
    for(var i = bitLength / 8 + offset - 1; i >= offset; i--){
        out[i] = value / div & 0xff;
        div *= 256;
    }
    return out;
}
module.exports.writeUintBE = $b5dd4271dc46b957$var$writeUintBE;
/**
 * Writes a little-endian representation of bitLen-bit unsigned
 * value to array starting at offset.
 *
 * Supports bit lengths divisible by 8, up to 48.
 *
 * If byte array is not given, creates a new one.
 *
 * Returns the output byte array.
 */ function $b5dd4271dc46b957$var$writeUintLE(bitLength, value, out, offset) {
    if (out === void 0) out = new Uint8Array(bitLength / 8);
    if (offset === void 0) offset = 0;
    // TODO(dchest): implement support for bitLengths non-divisible by 8
    if (bitLength % 8 !== 0) throw new Error("writeUintLE supports only bitLengths divisible by 8");
    if (!$jEPGJ.isSafeInteger(value)) throw new Error("writeUintLE value must be an integer");
    var div = 1;
    for(var i = offset; i < offset + bitLength / 8; i++){
        out[i] = value / div & 0xff;
        div *= 256;
    }
    return out;
}
module.exports.writeUintLE = $b5dd4271dc46b957$var$writeUintLE;
/**
 * Reads 4 bytes from array starting at offset as big-endian
 * 32-bit floating-point number and returns it.
 */ function $b5dd4271dc46b957$var$readFloat32BE(array, offset) {
    if (offset === void 0) offset = 0;
    var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
    return view.getFloat32(offset);
}
module.exports.readFloat32BE = $b5dd4271dc46b957$var$readFloat32BE;
/**
 * Reads 4 bytes from array starting at offset as little-endian
 * 32-bit floating-point number and returns it.
 */ function $b5dd4271dc46b957$var$readFloat32LE(array, offset) {
    if (offset === void 0) offset = 0;
    var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
    return view.getFloat32(offset, true);
}
module.exports.readFloat32LE = $b5dd4271dc46b957$var$readFloat32LE;
/**
 * Reads 8 bytes from array starting at offset as big-endian
 * 64-bit floating-point number ("double") and returns it.
 */ function $b5dd4271dc46b957$var$readFloat64BE(array, offset) {
    if (offset === void 0) offset = 0;
    var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
    return view.getFloat64(offset);
}
module.exports.readFloat64BE = $b5dd4271dc46b957$var$readFloat64BE;
/**
 * Reads 8 bytes from array starting at offset as little-endian
 * 64-bit floating-point number ("double") and returns it.
 */ function $b5dd4271dc46b957$var$readFloat64LE(array, offset) {
    if (offset === void 0) offset = 0;
    var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
    return view.getFloat64(offset, true);
}
module.exports.readFloat64LE = $b5dd4271dc46b957$var$readFloat64LE;
/**
 * Writes 4-byte big-endian floating-point representation of value
 * to byte array starting at offset.
 *
 * If byte array is not given, creates a new 4-byte one.
 *
 * Returns the output byte array.
 */ function $b5dd4271dc46b957$var$writeFloat32BE(value, out, offset) {
    if (out === void 0) out = new Uint8Array(4);
    if (offset === void 0) offset = 0;
    var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    view.setFloat32(offset, value);
    return out;
}
module.exports.writeFloat32BE = $b5dd4271dc46b957$var$writeFloat32BE;
/**
 * Writes 4-byte little-endian floating-point representation of value
 * to byte array starting at offset.
 *
 * If byte array is not given, creates a new 4-byte one.
 *
 * Returns the output byte array.
 */ function $b5dd4271dc46b957$var$writeFloat32LE(value, out, offset) {
    if (out === void 0) out = new Uint8Array(4);
    if (offset === void 0) offset = 0;
    var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    view.setFloat32(offset, value, true);
    return out;
}
module.exports.writeFloat32LE = $b5dd4271dc46b957$var$writeFloat32LE;
/**
 * Writes 8-byte big-endian floating-point representation of value
 * to byte array starting at offset.
 *
 * If byte array is not given, creates a new 8-byte one.
 *
 * Returns the output byte array.
 */ function $b5dd4271dc46b957$var$writeFloat64BE(value, out, offset) {
    if (out === void 0) out = new Uint8Array(8);
    if (offset === void 0) offset = 0;
    var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    view.setFloat64(offset, value);
    return out;
}
module.exports.writeFloat64BE = $b5dd4271dc46b957$var$writeFloat64BE;
/**
 * Writes 8-byte little-endian floating-point representation of value
 * to byte array starting at offset.
 *
 * If byte array is not given, creates a new 8-byte one.
 *
 * Returns the output byte array.
 */ function $b5dd4271dc46b957$var$writeFloat64LE(value, out, offset) {
    if (out === void 0) out = new Uint8Array(8);
    if (offset === void 0) offset = 0;
    var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    view.setFloat64(offset, value, true);
    return out;
}
module.exports.writeFloat64LE = $b5dd4271dc46b957$var$writeFloat64LE;

});
parcelRequire.register("jEPGJ", function(module, exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
/**
 * Package int provides helper functions for integerss.
 */ // Shim using 16-bit pieces.
function $e4f9d8f46a50752b$var$imulShim(a, b) {
    var ah = a >>> 16 & 0xffff, al = a & 0xffff;
    var bh = b >>> 16 & 0xffff, bl = b & 0xffff;
    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
}
/** 32-bit integer multiplication.  */ // Use system Math.imul if available, otherwise use our shim.
module.exports.mul = Math.imul || $e4f9d8f46a50752b$var$imulShim;
/** 32-bit integer addition.  */ function $e4f9d8f46a50752b$var$add(a, b) {
    return a + b | 0;
}
module.exports.add = $e4f9d8f46a50752b$var$add;
/**  32-bit integer subtraction.  */ function $e4f9d8f46a50752b$var$sub(a, b) {
    return a - b | 0;
}
module.exports.sub = $e4f9d8f46a50752b$var$sub;
/** 32-bit integer left rotation */ function $e4f9d8f46a50752b$var$rotl(x, n) {
    return x << n | x >>> 32 - n;
}
module.exports.rotl = $e4f9d8f46a50752b$var$rotl;
/** 32-bit integer left rotation */ function $e4f9d8f46a50752b$var$rotr(x, n) {
    return x << 32 - n | x >>> n;
}
module.exports.rotr = $e4f9d8f46a50752b$var$rotr;
function $e4f9d8f46a50752b$var$isIntegerShim(n) {
    return typeof n === "number" && isFinite(n) && Math.floor(n) === n;
}
/**
 * Returns true if the argument is an integer number.
 *
 * In ES2015, Number.isInteger.
 */ module.exports.isInteger = Number.isInteger || $e4f9d8f46a50752b$var$isIntegerShim;
/**
 *  Math.pow(2, 53) - 1
 *
 *  In ES2015 Number.MAX_SAFE_INTEGER.
 */ module.exports.MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Returns true if the argument is a safe integer number
 * (-MIN_SAFE_INTEGER < number <= MAX_SAFE_INTEGER)
 *
 * In ES2015, Number.isSafeInteger.
 */ module.exports.isSafeInteger = function(n) {
    return module.exports.isInteger(n) && n >= -module.exports.MAX_SAFE_INTEGER && n <= module.exports.MAX_SAFE_INTEGER;
};

});



parcelRequire.register("4WKmN", function(module, exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $fC3Ge = parcelRequire("fC3Ge");

var $6n5DJ = parcelRequire("6n5DJ");
module.exports.DIGEST_LENGTH = 64;
module.exports.BLOCK_SIZE = 128;
/**
 * SHA-2-512 cryptographic hash algorithm.
 */ var $39a08bae29e4c520$var$SHA512 = /** @class */ function() {
    function SHA512() {
        /** Length of hash output */ this.digestLength = module.exports.DIGEST_LENGTH;
        /** Block size */ this.blockSize = module.exports.BLOCK_SIZE;
        // Note: Int32Array is used instead of Uint32Array for performance reasons.
        this._stateHi = new Int32Array(8); // hash state, high bytes
        this._stateLo = new Int32Array(8); // hash state, low bytes
        this._tempHi = new Int32Array(16); // temporary state, high bytes
        this._tempLo = new Int32Array(16); // temporary state, low bytes
        this._buffer = new Uint8Array(256); // buffer for data to hash
        this._bufferLength = 0; // number of bytes in buffer
        this._bytesHashed = 0; // number of total bytes hashed
        this._finished = false; // indicates whether the hash was finalized
        this.reset();
    }
    SHA512.prototype._initState = function() {
        this._stateHi[0] = 0x6a09e667;
        this._stateHi[1] = 0xbb67ae85;
        this._stateHi[2] = 0x3c6ef372;
        this._stateHi[3] = 0xa54ff53a;
        this._stateHi[4] = 0x510e527f;
        this._stateHi[5] = 0x9b05688c;
        this._stateHi[6] = 0x1f83d9ab;
        this._stateHi[7] = 0x5be0cd19;
        this._stateLo[0] = 0xf3bcc908;
        this._stateLo[1] = 0x84caa73b;
        this._stateLo[2] = 0xfe94f82b;
        this._stateLo[3] = 0x5f1d36f1;
        this._stateLo[4] = 0xade682d1;
        this._stateLo[5] = 0x2b3e6c1f;
        this._stateLo[6] = 0xfb41bd6b;
        this._stateLo[7] = 0x137e2179;
    };
    /**
     * Resets hash state making it possible
     * to re-use this instance to hash other data.
     */ SHA512.prototype.reset = function() {
        this._initState();
        this._bufferLength = 0;
        this._bytesHashed = 0;
        this._finished = false;
        return this;
    };
    /**
     * Cleans internal buffers and resets hash state.
     */ SHA512.prototype.clean = function() {
        $6n5DJ.wipe(this._buffer);
        $6n5DJ.wipe(this._tempHi);
        $6n5DJ.wipe(this._tempLo);
        this.reset();
    };
    /**
     * Updates hash state with the given data.
     *
     * Throws error when trying to update already finalized hash:
     * instance must be reset to update it again.
     */ SHA512.prototype.update = function(data, dataLength) {
        if (dataLength === void 0) dataLength = data.length;
        if (this._finished) throw new Error("SHA512: can't update because hash was finished.");
        var dataPos = 0;
        this._bytesHashed += dataLength;
        if (this._bufferLength > 0) {
            while(this._bufferLength < module.exports.BLOCK_SIZE && dataLength > 0){
                this._buffer[this._bufferLength++] = data[dataPos++];
                dataLength--;
            }
            if (this._bufferLength === this.blockSize) {
                $39a08bae29e4c520$var$hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize);
                this._bufferLength = 0;
            }
        }
        if (dataLength >= this.blockSize) {
            dataPos = $39a08bae29e4c520$var$hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, data, dataPos, dataLength);
            dataLength %= this.blockSize;
        }
        while(dataLength > 0){
            this._buffer[this._bufferLength++] = data[dataPos++];
            dataLength--;
        }
        return this;
    };
    /**
     * Finalizes hash state and puts hash into out.
     * If hash was already finalized, puts the same value.
     */ SHA512.prototype.finish = function(out) {
        if (!this._finished) {
            var bytesHashed = this._bytesHashed;
            var left = this._bufferLength;
            var bitLenHi = bytesHashed / 0x20000000 | 0;
            var bitLenLo = bytesHashed << 3;
            var padLength = bytesHashed % 128 < 112 ? 128 : 256;
            this._buffer[left] = 0x80;
            for(var i = left + 1; i < padLength - 8; i++)this._buffer[i] = 0;
            $fC3Ge.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
            $fC3Ge.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
            $39a08bae29e4c520$var$hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, padLength);
            this._finished = true;
        }
        for(var i = 0; i < this.digestLength / 8; i++){
            $fC3Ge.writeUint32BE(this._stateHi[i], out, i * 8);
            $fC3Ge.writeUint32BE(this._stateLo[i], out, i * 8 + 4);
        }
        return this;
    };
    /**
     * Returns the final hash digest.
     */ SHA512.prototype.digest = function() {
        var out = new Uint8Array(this.digestLength);
        this.finish(out);
        return out;
    };
    /**
     * Function useful for HMAC/PBKDF2 optimization. Returns hash state to be
     * used with restoreState(). Only chain value is saved, not buffers or
     * other state variables.
     */ SHA512.prototype.saveState = function() {
        if (this._finished) throw new Error("SHA256: cannot save finished state");
        return {
            stateHi: new Int32Array(this._stateHi),
            stateLo: new Int32Array(this._stateLo),
            buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : undefined,
            bufferLength: this._bufferLength,
            bytesHashed: this._bytesHashed
        };
    };
    /**
     * Function useful for HMAC/PBKDF2 optimization. Restores state saved by
     * saveState() and sets bytesHashed to the given value.
     */ SHA512.prototype.restoreState = function(savedState) {
        this._stateHi.set(savedState.stateHi);
        this._stateLo.set(savedState.stateLo);
        this._bufferLength = savedState.bufferLength;
        if (savedState.buffer) this._buffer.set(savedState.buffer);
        this._bytesHashed = savedState.bytesHashed;
        this._finished = false;
        return this;
    };
    /**
     * Cleans state returned by saveState().
     */ SHA512.prototype.cleanSavedState = function(savedState) {
        $6n5DJ.wipe(savedState.stateHi);
        $6n5DJ.wipe(savedState.stateLo);
        if (savedState.buffer) $6n5DJ.wipe(savedState.buffer);
        savedState.bufferLength = 0;
        savedState.bytesHashed = 0;
    };
    return SHA512;
}();
module.exports.SHA512 = $39a08bae29e4c520$var$SHA512;
// Constants
var $39a08bae29e4c520$var$K = new Int32Array([
    0x428a2f98,
    0xd728ae22,
    0x71374491,
    0x23ef65cd,
    0xb5c0fbcf,
    0xec4d3b2f,
    0xe9b5dba5,
    0x8189dbbc,
    0x3956c25b,
    0xf348b538,
    0x59f111f1,
    0xb605d019,
    0x923f82a4,
    0xaf194f9b,
    0xab1c5ed5,
    0xda6d8118,
    0xd807aa98,
    0xa3030242,
    0x12835b01,
    0x45706fbe,
    0x243185be,
    0x4ee4b28c,
    0x550c7dc3,
    0xd5ffb4e2,
    0x72be5d74,
    0xf27b896f,
    0x80deb1fe,
    0x3b1696b1,
    0x9bdc06a7,
    0x25c71235,
    0xc19bf174,
    0xcf692694,
    0xe49b69c1,
    0x9ef14ad2,
    0xefbe4786,
    0x384f25e3,
    0x0fc19dc6,
    0x8b8cd5b5,
    0x240ca1cc,
    0x77ac9c65,
    0x2de92c6f,
    0x592b0275,
    0x4a7484aa,
    0x6ea6e483,
    0x5cb0a9dc,
    0xbd41fbd4,
    0x76f988da,
    0x831153b5,
    0x983e5152,
    0xee66dfab,
    0xa831c66d,
    0x2db43210,
    0xb00327c8,
    0x98fb213f,
    0xbf597fc7,
    0xbeef0ee4,
    0xc6e00bf3,
    0x3da88fc2,
    0xd5a79147,
    0x930aa725,
    0x06ca6351,
    0xe003826f,
    0x14292967,
    0x0a0e6e70,
    0x27b70a85,
    0x46d22ffc,
    0x2e1b2138,
    0x5c26c926,
    0x4d2c6dfc,
    0x5ac42aed,
    0x53380d13,
    0x9d95b3df,
    0x650a7354,
    0x8baf63de,
    0x766a0abb,
    0x3c77b2a8,
    0x81c2c92e,
    0x47edaee6,
    0x92722c85,
    0x1482353b,
    0xa2bfe8a1,
    0x4cf10364,
    0xa81a664b,
    0xbc423001,
    0xc24b8b70,
    0xd0f89791,
    0xc76c51a3,
    0x0654be30,
    0xd192e819,
    0xd6ef5218,
    0xd6990624,
    0x5565a910,
    0xf40e3585,
    0x5771202a,
    0x106aa070,
    0x32bbd1b8,
    0x19a4c116,
    0xb8d2d0c8,
    0x1e376c08,
    0x5141ab53,
    0x2748774c,
    0xdf8eeb99,
    0x34b0bcb5,
    0xe19b48a8,
    0x391c0cb3,
    0xc5c95a63,
    0x4ed8aa4a,
    0xe3418acb,
    0x5b9cca4f,
    0x7763e373,
    0x682e6ff3,
    0xd6b2b8a3,
    0x748f82ee,
    0x5defb2fc,
    0x78a5636f,
    0x43172f60,
    0x84c87814,
    0xa1f0ab72,
    0x8cc70208,
    0x1a6439ec,
    0x90befffa,
    0x23631e28,
    0xa4506ceb,
    0xde82bde9,
    0xbef9a3f7,
    0xb2c67915,
    0xc67178f2,
    0xe372532b,
    0xca273ece,
    0xea26619c,
    0xd186b8c7,
    0x21c0c207,
    0xeada7dd6,
    0xcde0eb1e,
    0xf57d4f7f,
    0xee6ed178,
    0x06f067aa,
    0x72176fba,
    0x0a637dc5,
    0xa2c898a6,
    0x113f9804,
    0xbef90dae,
    0x1b710b35,
    0x131c471b,
    0x28db77f5,
    0x23047d84,
    0x32caab7b,
    0x40c72493,
    0x3c9ebe0a,
    0x15c9bebc,
    0x431d67c4,
    0x9c100d4c,
    0x4cc5d4be,
    0xcb3e42b6,
    0x597f299c,
    0xfc657e2a,
    0x5fcb6fab,
    0x3ad6faec,
    0x6c44198c,
    0x4a475817
]);
function $39a08bae29e4c520$var$hashBlocks(wh, wl, hh, hl, m, pos, len) {
    var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
    var h, l;
    var th, tl;
    var a, b, c, d;
    while(len >= 128){
        for(var i = 0; i < 16; i++){
            var j = 8 * i + pos;
            wh[i] = $fC3Ge.readUint32BE(m, j);
            wl[i] = $fC3Ge.readUint32BE(m, j + 4);
        }
        for(var i = 0; i < 80; i++){
            var bh0 = ah0;
            var bh1 = ah1;
            var bh2 = ah2;
            var bh3 = ah3;
            var bh4 = ah4;
            var bh5 = ah5;
            var bh6 = ah6;
            var bh7 = ah7;
            var bl0 = al0;
            var bl1 = al1;
            var bl2 = al2;
            var bl3 = al3;
            var bl4 = al4;
            var bl5 = al5;
            var bl6 = al6;
            var bl7 = al7;
            // add
            h = ah7;
            l = al7;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            // Sigma1
            h = (ah4 >>> 14 | al4 << 18) ^ (ah4 >>> 18 | al4 << 14) ^ (al4 >>> 9 | ah4 << 23);
            l = (al4 >>> 14 | ah4 << 18) ^ (al4 >>> 18 | ah4 << 14) ^ (ah4 >>> 9 | al4 << 23);
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            // Ch
            h = ah4 & ah5 ^ ~ah4 & ah6;
            l = al4 & al5 ^ ~al4 & al6;
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            // K
            h = $39a08bae29e4c520$var$K[i * 2];
            l = $39a08bae29e4c520$var$K[i * 2 + 1];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            // w
            h = wh[i % 16];
            l = wl[i % 16];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            th = c & 0xffff | d << 16;
            tl = a & 0xffff | b << 16;
            // add
            h = th;
            l = tl;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            // Sigma0
            h = (ah0 >>> 28 | al0 << 4) ^ (al0 >>> 2 | ah0 << 30) ^ (al0 >>> 7 | ah0 << 25);
            l = (al0 >>> 28 | ah0 << 4) ^ (ah0 >>> 2 | al0 << 30) ^ (ah0 >>> 7 | al0 << 25);
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            // Maj
            h = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
            l = al0 & al1 ^ al0 & al2 ^ al1 & al2;
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            bh7 = c & 0xffff | d << 16;
            bl7 = a & 0xffff | b << 16;
            // add
            h = bh3;
            l = bl3;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = th;
            l = tl;
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            bh3 = c & 0xffff | d << 16;
            bl3 = a & 0xffff | b << 16;
            ah1 = bh0;
            ah2 = bh1;
            ah3 = bh2;
            ah4 = bh3;
            ah5 = bh4;
            ah6 = bh5;
            ah7 = bh6;
            ah0 = bh7;
            al1 = bl0;
            al2 = bl1;
            al3 = bl2;
            al4 = bl3;
            al5 = bl4;
            al6 = bl5;
            al7 = bl6;
            al0 = bl7;
            if (i % 16 === 15) for(var j = 0; j < 16; j++){
                // add
                h = wh[j];
                l = wl[j];
                a = l & 0xffff;
                b = l >>> 16;
                c = h & 0xffff;
                d = h >>> 16;
                h = wh[(j + 9) % 16];
                l = wl[(j + 9) % 16];
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;
                // sigma0
                th = wh[(j + 1) % 16];
                tl = wl[(j + 1) % 16];
                h = (th >>> 1 | tl << 31) ^ (th >>> 8 | tl << 24) ^ th >>> 7;
                l = (tl >>> 1 | th << 31) ^ (tl >>> 8 | th << 24) ^ (tl >>> 7 | th << 25);
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;
                // sigma1
                th = wh[(j + 14) % 16];
                tl = wl[(j + 14) % 16];
                h = (th >>> 19 | tl << 13) ^ (tl >>> 29 | th << 3) ^ th >>> 6;
                l = (tl >>> 19 | th << 13) ^ (th >>> 29 | tl << 3) ^ (tl >>> 6 | th << 26);
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;
                b += a >>> 16;
                c += b >>> 16;
                d += c >>> 16;
                wh[j] = c & 0xffff | d << 16;
                wl[j] = a & 0xffff | b << 16;
            }
        }
        // add
        h = ah0;
        l = al0;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[0];
        l = hl[0];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[0] = ah0 = c & 0xffff | d << 16;
        hl[0] = al0 = a & 0xffff | b << 16;
        h = ah1;
        l = al1;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[1];
        l = hl[1];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[1] = ah1 = c & 0xffff | d << 16;
        hl[1] = al1 = a & 0xffff | b << 16;
        h = ah2;
        l = al2;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[2];
        l = hl[2];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[2] = ah2 = c & 0xffff | d << 16;
        hl[2] = al2 = a & 0xffff | b << 16;
        h = ah3;
        l = al3;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[3];
        l = hl[3];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[3] = ah3 = c & 0xffff | d << 16;
        hl[3] = al3 = a & 0xffff | b << 16;
        h = ah4;
        l = al4;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[4];
        l = hl[4];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[4] = ah4 = c & 0xffff | d << 16;
        hl[4] = al4 = a & 0xffff | b << 16;
        h = ah5;
        l = al5;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[5];
        l = hl[5];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[5] = ah5 = c & 0xffff | d << 16;
        hl[5] = al5 = a & 0xffff | b << 16;
        h = ah6;
        l = al6;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[6];
        l = hl[6];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[6] = ah6 = c & 0xffff | d << 16;
        hl[6] = al6 = a & 0xffff | b << 16;
        h = ah7;
        l = al7;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[7];
        l = hl[7];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[7] = ah7 = c & 0xffff | d << 16;
        hl[7] = al7 = a & 0xffff | b << 16;
        pos += 128;
        len -= 128;
    }
    return pos;
}
function $39a08bae29e4c520$var$hash(data) {
    var h = new $39a08bae29e4c520$var$SHA512();
    h.update(data);
    var digest = h.digest();
    h.clean();
    return digest;
}
module.exports.hash = $39a08bae29e4c520$var$hash;

});


parcelRequire.register("jPKif", function(module, exports) {

$parcel$export(module.exports, "JWT_IRIDIUM_ALG", () => $e706b09dc44d9b0c$export$51745f7832485c34);
$parcel$export(module.exports, "JWT_IRIDIUM_TYP", () => $e706b09dc44d9b0c$export$f51b45e220f2ba98);
$parcel$export(module.exports, "JWT_DELIMITER", () => $e706b09dc44d9b0c$export$a3e35a0f952eb3ef);
$parcel$export(module.exports, "JWT_ENCODING", () => $e706b09dc44d9b0c$export$d2e6fe38c55f8e23);
$parcel$export(module.exports, "JSON_ENCODING", () => $e706b09dc44d9b0c$export$c09c2801e10a2b95);
$parcel$export(module.exports, "DATA_ENCODING", () => $e706b09dc44d9b0c$export$1e9219c0b91a4257);
$parcel$export(module.exports, "DID_DELIMITER", () => $e706b09dc44d9b0c$export$d4057275de9d060b);
$parcel$export(module.exports, "DID_PREFIX", () => $e706b09dc44d9b0c$export$acf13c61a1a0ccf3);
$parcel$export(module.exports, "DID_METHOD", () => $e706b09dc44d9b0c$export$b908fe81ccf30934);
$parcel$export(module.exports, "MULTICODEC_ED25519_ENCODING", () => $e706b09dc44d9b0c$export$7bd18b7a7a4d0471);
$parcel$export(module.exports, "MULTICODEC_ED25519_BASE", () => $e706b09dc44d9b0c$export$6d6d3d2e39be8d68);
$parcel$export(module.exports, "MULTICODEC_ED25519_HEADER", () => $e706b09dc44d9b0c$export$9902a33a5776d1fc);
$parcel$export(module.exports, "MULTICODEC_ED25519_LENGTH", () => $e706b09dc44d9b0c$export$ca477e91394a742a);
$parcel$export(module.exports, "KEY_PAIR_SEED_LENGTH", () => $e706b09dc44d9b0c$export$f09ad228919f26fb);
const $e706b09dc44d9b0c$export$51745f7832485c34 = "EdDSA";
const $e706b09dc44d9b0c$export$f51b45e220f2ba98 = "JWT";
const $e706b09dc44d9b0c$export$a3e35a0f952eb3ef = ".";
const $e706b09dc44d9b0c$export$d2e6fe38c55f8e23 = "base64url";
const $e706b09dc44d9b0c$export$c09c2801e10a2b95 = "utf8";
const $e706b09dc44d9b0c$export$1e9219c0b91a4257 = "utf8";
const $e706b09dc44d9b0c$export$d4057275de9d060b = ":";
const $e706b09dc44d9b0c$export$acf13c61a1a0ccf3 = "did";
const $e706b09dc44d9b0c$export$b908fe81ccf30934 = "key";
const $e706b09dc44d9b0c$export$7bd18b7a7a4d0471 = "base58btc";
const $e706b09dc44d9b0c$export$6d6d3d2e39be8d68 = "z";
const $e706b09dc44d9b0c$export$9902a33a5776d1fc = "K36";
const $e706b09dc44d9b0c$export$ca477e91394a742a = 32;
const $e706b09dc44d9b0c$export$f09ad228919f26fb = 32;

});

parcelRequire.register("7xryO", function(module, exports) {

$parcel$export(module.exports, "encodeIss", () => $57d0fe6a10a989fd$export$1b29ef9371459e10);
$parcel$export(module.exports, "decodeIss", () => $57d0fe6a10a989fd$export$86ac046d72244356);
$parcel$export(module.exports, "encodeData", () => $57d0fe6a10a989fd$export$cfdd1f2478131e3d);
$parcel$export(module.exports, "encodeJWT", () => $57d0fe6a10a989fd$export$1b70f4551c751d68);
$parcel$export(module.exports, "decodeJWT", () => $57d0fe6a10a989fd$export$9a62e6c0a30e00bc);

var $7ZPgG = parcelRequire("7ZPgG");

var $bicDu = parcelRequire("bicDu");

var $9llMP = parcelRequire("9llMP");

var $2nf8n = parcelRequire("2nf8n");

var $jPKif = parcelRequire("jPKif");
function $57d0fe6a10a989fd$export$2030d1af6cd0ef93(str) {
    return (0, $2nf8n.safeJsonParse)((0, $bicDu.toString)((0, $9llMP.fromString)(str, (0, $jPKif.JWT_ENCODING)), (0, $jPKif.JSON_ENCODING)));
}
function $57d0fe6a10a989fd$export$84046f8082657cdf(val) {
    return (0, $bicDu.toString)((0, $9llMP.fromString)((0, $2nf8n.safeJsonStringify)(val), (0, $jPKif.JSON_ENCODING)), (0, $jPKif.JWT_ENCODING));
}
function $57d0fe6a10a989fd$export$1b29ef9371459e10(publicKey) {
    const header = (0, $9llMP.fromString)((0, $jPKif.MULTICODEC_ED25519_HEADER), (0, $jPKif.MULTICODEC_ED25519_ENCODING));
    const multicodec = (0, $jPKif.MULTICODEC_ED25519_BASE) + (0, $bicDu.toString)((0, $7ZPgG.concat)([
        header,
        publicKey
    ]), (0, $jPKif.MULTICODEC_ED25519_ENCODING));
    return [
        (0, $jPKif.DID_PREFIX),
        (0, $jPKif.DID_METHOD),
        multicodec
    ].join((0, $jPKif.DID_DELIMITER));
}
function $57d0fe6a10a989fd$export$86ac046d72244356(issuer) {
    const [prefix, method, multicodec] = issuer.split((0, $jPKif.DID_DELIMITER));
    if (prefix !== (0, $jPKif.DID_PREFIX) || method !== (0, $jPKif.DID_METHOD)) throw new Error(`Issuer must be a DID with method "key"`);
    const base = multicodec.slice(0, 1);
    if (base !== (0, $jPKif.MULTICODEC_ED25519_BASE)) throw new Error(`Issuer must be a key in mulicodec format`);
    const bytes = (0, $9llMP.fromString)(multicodec.slice(1), (0, $jPKif.MULTICODEC_ED25519_ENCODING));
    const type = (0, $bicDu.toString)(bytes.slice(0, 2), (0, $jPKif.MULTICODEC_ED25519_ENCODING));
    if (type !== (0, $jPKif.MULTICODEC_ED25519_HEADER)) throw new Error(`Issuer must be a public key with type "Ed25519"`);
    const publicKey = bytes.slice(2);
    if (publicKey.length !== (0, $jPKif.MULTICODEC_ED25519_LENGTH)) throw new Error(`Issuer must be a public key with length 32 bytes`);
    return publicKey;
}
function $57d0fe6a10a989fd$export$d9746ef301b2089b(bytes) {
    return (0, $bicDu.toString)(bytes, (0, $jPKif.JWT_ENCODING));
}
function $57d0fe6a10a989fd$export$c37aeb372ac07c0e(encoded) {
    return (0, $9llMP.fromString)(encoded, (0, $jPKif.JWT_ENCODING));
}
function $57d0fe6a10a989fd$export$cfdd1f2478131e3d(params) {
    return (0, $9llMP.fromString)([
        $57d0fe6a10a989fd$export$84046f8082657cdf(params.header),
        $57d0fe6a10a989fd$export$84046f8082657cdf(params.payload)
    ].join((0, $jPKif.JWT_DELIMITER)), (0, $jPKif.DATA_ENCODING));
}
function $57d0fe6a10a989fd$export$13923bea59211b58(data) {
    const params = (0, $bicDu.toString)(data, (0, $jPKif.DATA_ENCODING)).split((0, $jPKif.JWT_DELIMITER));
    const header = $57d0fe6a10a989fd$export$2030d1af6cd0ef93(params[0]);
    const payload = $57d0fe6a10a989fd$export$2030d1af6cd0ef93(params[1]);
    return {
        header: header,
        payload: payload
    };
}
function $57d0fe6a10a989fd$export$1b70f4551c751d68(params) {
    return [
        $57d0fe6a10a989fd$export$84046f8082657cdf(params.header),
        $57d0fe6a10a989fd$export$84046f8082657cdf(params.payload),
        $57d0fe6a10a989fd$export$d9746ef301b2089b(params.signature)
    ].join((0, $jPKif.JWT_DELIMITER));
}
function $57d0fe6a10a989fd$export$9a62e6c0a30e00bc(jwt) {
    const params = jwt.split((0, $jPKif.JWT_DELIMITER));
    const header = $57d0fe6a10a989fd$export$2030d1af6cd0ef93(params[0]);
    const payload = $57d0fe6a10a989fd$export$2030d1af6cd0ef93(params[1]);
    const signature = $57d0fe6a10a989fd$export$c37aeb372ac07c0e(params[2]);
    const data = (0, $9llMP.fromString)(params.slice(0, 2).join((0, $jPKif.JWT_DELIMITER)), (0, $jPKif.DATA_ENCODING));
    return {
        header: header,
        payload: payload,
        signature: signature,
        data: data
    };
}

});
parcelRequire.register("7ZPgG", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $3bH25 = parcelRequire("3bH25");

var $bo2fP = parcelRequire("bo2fP");
function $5d25ffb38908bd43$var$concat(arrays, length) {
    if (!length) length = arrays.reduce((acc, curr)=>acc + curr.length, 0);
    const output = $3bH25.allocUnsafe(length);
    let offset = 0;
    for (const arr of arrays){
        output.set(arr, offset);
        offset += arr.length;
    }
    return $bo2fP.asUint8Array(output);
}
module.exports.concat = $5d25ffb38908bd43$var$concat;

});
parcelRequire.register("3bH25", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $bo2fP = parcelRequire("bo2fP");
function $2523c790a09cb287$var$alloc(size = 0) {
    if (globalThis.Buffer != null && globalThis.Buffer.alloc != null) return $bo2fP.asUint8Array(globalThis.Buffer.alloc(size));
    return new Uint8Array(size);
}
function $2523c790a09cb287$var$allocUnsafe(size = 0) {
    if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) return $bo2fP.asUint8Array(globalThis.Buffer.allocUnsafe(size));
    return new Uint8Array(size);
}
module.exports.alloc = $2523c790a09cb287$var$alloc;
module.exports.allocUnsafe = $2523c790a09cb287$var$allocUnsafe;

});
parcelRequire.register("bo2fP", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
function $84a3af3b9b850d27$var$asUint8Array(buf) {
    if (globalThis.Buffer != null) return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    return buf;
}
module.exports.asUint8Array = $84a3af3b9b850d27$var$asUint8Array;

});



parcelRequire.register("bicDu", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $hPjKM = parcelRequire("hPjKM");
function $838b2d654b7f05e4$var$toString(array, encoding = "utf8") {
    const base = $hPjKM[encoding];
    if (!base) throw new Error(`Unsupported encoding "${encoding}"`);
    if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString("utf8");
    return base.encoder.encode(array).substring(1);
}
module.exports.toString = $838b2d654b7f05e4$var$toString;

});
parcelRequire.register("hPjKM", function(module, exports) {
"use strict";

var $6Aqgg = parcelRequire("6Aqgg");

var $3bH25 = parcelRequire("3bH25");
function $cfa685bed0f95a42$var$createCodec(name, prefix, encode, decode) {
    return {
        name: name,
        prefix: prefix,
        encoder: {
            name: name,
            prefix: prefix,
            encode: encode
        },
        decoder: {
            decode: decode
        }
    };
}
const $cfa685bed0f95a42$var$string = $cfa685bed0f95a42$var$createCodec("utf8", "u", (buf)=>{
    const decoder = new TextDecoder("utf8");
    return "u" + decoder.decode(buf);
}, (str)=>{
    const encoder = new TextEncoder();
    return encoder.encode(str.substring(1));
});
const $cfa685bed0f95a42$var$ascii = $cfa685bed0f95a42$var$createCodec("ascii", "a", (buf)=>{
    let string = "a";
    for(let i = 0; i < buf.length; i++)string += String.fromCharCode(buf[i]);
    return string;
}, (str)=>{
    str = str.substring(1);
    const buf = $3bH25.allocUnsafe(str.length);
    for(let i = 0; i < str.length; i++)buf[i] = str.charCodeAt(i);
    return buf;
});
const $cfa685bed0f95a42$var$BASES = {
    utf8: $cfa685bed0f95a42$var$string,
    "utf-8": $cfa685bed0f95a42$var$string,
    hex: $6Aqgg.bases.base16,
    latin1: $cfa685bed0f95a42$var$ascii,
    ascii: $cfa685bed0f95a42$var$ascii,
    binary: $cfa685bed0f95a42$var$ascii,
    ...$6Aqgg.bases
};
module.exports = $cfa685bed0f95a42$var$BASES;

});
parcelRequire.register("6Aqgg", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $Zv3Tc = parcelRequire("Zv3Tc");

var $a5WVv = parcelRequire("a5WVv");

var $jU9xv = parcelRequire("jU9xv");

var $4h0de = parcelRequire("4h0de");

var $a2FY2 = parcelRequire("a2FY2");

var $b2ifj = parcelRequire("b2ifj");

var $cgxOn = parcelRequire("cgxOn");

var $kafhT = parcelRequire("kafhT");

var $51F8w = parcelRequire("51F8w");

var $dExdf = parcelRequire("dExdf");

var $aQlUX = parcelRequire("aQlUX");

var $8knlt = parcelRequire("8knlt");

var $4pDkF = parcelRequire("4pDkF");

var $404C4 = parcelRequire("404C4");
parcelRequire("2VxCk");

var $bC3pk = parcelRequire("bC3pk");

var $buy2e = parcelRequire("buy2e");

var $hVQZm = parcelRequire("hVQZm");

var $iWB9Z = parcelRequire("iWB9Z");

var $lPD3B = parcelRequire("lPD3B");
const $4cba79d37e351ea7$var$bases = {
    ...$Zv3Tc,
    ...$a5WVv,
    ...$jU9xv,
    ...$4h0de,
    ...$a2FY2,
    ...$b2ifj,
    ...$cgxOn,
    ...$kafhT,
    ...$51F8w,
    ...$dExdf
};
const $4cba79d37e351ea7$var$hashes = {
    ...$aQlUX,
    ...$8knlt
};
const $4cba79d37e351ea7$var$codecs = {
    raw: $4pDkF,
    json: $404C4
};
module.exports.CID = $bC3pk.CID;
module.exports.hasher = $buy2e;
module.exports.digest = $hVQZm;
module.exports.varint = $iWB9Z;
module.exports.bytes = $lPD3B;
module.exports.bases = $4cba79d37e351ea7$var$bases;
module.exports.codecs = $4cba79d37e351ea7$var$codecs;
module.exports.hashes = $4cba79d37e351ea7$var$hashes;

});
parcelRequire.register("Zv3Tc", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $h17pu = parcelRequire("h17pu");

var $lPD3B = parcelRequire("lPD3B");
const $0b8dcad51b01fcb1$var$identity = $h17pu.from({
    prefix: "\0",
    name: "identity",
    encode: (buf)=>$lPD3B.toString(buf),
    decode: (str)=>$lPD3B.fromString(str)
});
module.exports.identity = $0b8dcad51b01fcb1$var$identity;

});
parcelRequire.register("h17pu", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $a5L38 = parcelRequire("a5L38");

var $lPD3B = parcelRequire("lPD3B");
class $c638472b1a11d540$var$Encoder {
    constructor(name, prefix, baseEncode){
        this.name = name;
        this.prefix = prefix;
        this.baseEncode = baseEncode;
    }
    encode(bytes) {
        if (bytes instanceof Uint8Array) return `${this.prefix}${this.baseEncode(bytes)}`;
        else throw Error("Unknown type, must be binary type");
    }
}
class $c638472b1a11d540$var$Decoder {
    constructor(name, prefix, baseDecode){
        this.name = name;
        this.prefix = prefix;
        if (prefix.codePointAt(0) === undefined) throw new Error("Invalid prefix character");
        this.prefixCodePoint = prefix.codePointAt(0);
        this.baseDecode = baseDecode;
    }
    decode(text) {
        if (typeof text === "string") {
            if (text.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(text.slice(this.prefix.length));
        } else throw Error("Can only multibase decode strings");
    }
    or(decoder) {
        return $c638472b1a11d540$var$or(this, decoder);
    }
}
class $c638472b1a11d540$var$ComposedDecoder {
    constructor(decoders){
        this.decoders = decoders;
    }
    or(decoder) {
        return $c638472b1a11d540$var$or(this, decoder);
    }
    decode(input) {
        const prefix = input[0];
        const decoder = this.decoders[prefix];
        if (decoder) return decoder.decode(input);
        else throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
}
const $c638472b1a11d540$var$or = (left, right)=>new $c638472b1a11d540$var$ComposedDecoder({
        ...left.decoders || {
            [left.prefix]: left
        },
        ...right.decoders || {
            [right.prefix]: right
        }
    });
class $c638472b1a11d540$var$Codec {
    constructor(name, prefix, baseEncode, baseDecode){
        this.name = name;
        this.prefix = prefix;
        this.baseEncode = baseEncode;
        this.baseDecode = baseDecode;
        this.encoder = new $c638472b1a11d540$var$Encoder(name, prefix, baseEncode);
        this.decoder = new $c638472b1a11d540$var$Decoder(name, prefix, baseDecode);
    }
    encode(input) {
        return this.encoder.encode(input);
    }
    decode(input) {
        return this.decoder.decode(input);
    }
}
const $c638472b1a11d540$var$from = ({ name: name , prefix: prefix , encode: encode , decode: decode  })=>new $c638472b1a11d540$var$Codec(name, prefix, encode, decode);
const $c638472b1a11d540$var$baseX = ({ prefix: prefix , name: name , alphabet: alphabet  })=>{
    const { encode: encode , decode: decode  } = $a5L38(alphabet, name);
    return $c638472b1a11d540$var$from({
        prefix: prefix,
        name: name,
        encode: encode,
        decode: (text)=>$lPD3B.coerce(decode(text))
    });
};
const $c638472b1a11d540$var$decode = (string, alphabet, bitsPerChar, name)=>{
    const codes = {};
    for(let i = 0; i < alphabet.length; ++i)codes[alphabet[i]] = i;
    let end = string.length;
    while(string[end - 1] === "=")--end;
    const out = new Uint8Array(end * bitsPerChar / 8 | 0);
    let bits = 0;
    let buffer = 0;
    let written = 0;
    for(let i = 0; i < end; ++i){
        const value = codes[string[i]];
        if (value === undefined) throw new SyntaxError(`Non-${name} character`);
        buffer = buffer << bitsPerChar | value;
        bits += bitsPerChar;
        if (bits >= 8) {
            bits -= 8;
            out[written++] = 255 & buffer >> bits;
        }
    }
    if (bits >= bitsPerChar || 255 & buffer << 8 - bits) throw new SyntaxError("Unexpected end of data");
    return out;
};
const $c638472b1a11d540$var$encode = (data, alphabet, bitsPerChar)=>{
    const pad = alphabet[alphabet.length - 1] === "=";
    const mask = (1 << bitsPerChar) - 1;
    let out = "";
    let bits = 0;
    let buffer = 0;
    for(let i = 0; i < data.length; ++i){
        buffer = buffer << 8 | data[i];
        bits += 8;
        while(bits > bitsPerChar){
            bits -= bitsPerChar;
            out += alphabet[mask & buffer >> bits];
        }
    }
    if (bits) out += alphabet[mask & buffer << bitsPerChar - bits];
    if (pad) while(out.length * bitsPerChar & 7)out += "=";
    return out;
};
const $c638472b1a11d540$var$rfc4648 = ({ name: name , prefix: prefix , bitsPerChar: bitsPerChar , alphabet: alphabet  })=>{
    return $c638472b1a11d540$var$from({
        prefix: prefix,
        name: name,
        encode (input) {
            return $c638472b1a11d540$var$encode(input, alphabet, bitsPerChar);
        },
        decode (input) {
            return $c638472b1a11d540$var$decode(input, alphabet, bitsPerChar, name);
        }
    });
};
module.exports.Codec = $c638472b1a11d540$var$Codec;
module.exports.baseX = $c638472b1a11d540$var$baseX;
module.exports.from = $c638472b1a11d540$var$from;
module.exports.or = $c638472b1a11d540$var$or;
module.exports.rfc4648 = $c638472b1a11d540$var$rfc4648;

});
parcelRequire.register("a5L38", function(module, exports) {
"use strict";
function $758ede16ed191d63$var$base(ALPHABET, name) {
    if (ALPHABET.length >= 255) throw new TypeError("Alphabet too long");
    var BASE_MAP = new Uint8Array(256);
    for(var j = 0; j < BASE_MAP.length; j++)BASE_MAP[j] = 255;
    for(var i = 0; i < ALPHABET.length; i++){
        var x = ALPHABET.charAt(i);
        var xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) throw new TypeError(x + " is ambiguous");
        BASE_MAP[xc] = i;
    }
    var BASE = ALPHABET.length;
    var LEADER = ALPHABET.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256);
    var iFACTOR = Math.log(256) / Math.log(BASE);
    function encode(source) {
        if (source instanceof Uint8Array) ;
        else if (ArrayBuffer.isView(source)) source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
        else if (Array.isArray(source)) source = Uint8Array.from(source);
        if (!(source instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
        if (source.length === 0) return "";
        var zeroes = 0;
        var length = 0;
        var pbegin = 0;
        var pend = source.length;
        while(pbegin !== pend && source[pbegin] === 0){
            pbegin++;
            zeroes++;
        }
        var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        var b58 = new Uint8Array(size);
        while(pbegin !== pend){
            var carry = source[pbegin];
            var i = 0;
            for(var it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++){
                carry += 256 * b58[it1] >>> 0;
                b58[it1] = carry % BASE >>> 0;
                carry = carry / BASE >>> 0;
            }
            if (carry !== 0) throw new Error("Non-zero carry");
            length = i;
            pbegin++;
        }
        var it2 = size - length;
        while(it2 !== size && b58[it2] === 0)it2++;
        var str = LEADER.repeat(zeroes);
        for(; it2 < size; ++it2)str += ALPHABET.charAt(b58[it2]);
        return str;
    }
    function decodeUnsafe(source) {
        if (typeof source !== "string") throw new TypeError("Expected String");
        if (source.length === 0) return new Uint8Array();
        var psz = 0;
        if (source[psz] === " ") return;
        var zeroes = 0;
        var length = 0;
        while(source[psz] === LEADER){
            zeroes++;
            psz++;
        }
        var size = (source.length - psz) * FACTOR + 1 >>> 0;
        var b256 = new Uint8Array(size);
        while(source[psz]){
            var carry = BASE_MAP[source.charCodeAt(psz)];
            if (carry === 255) return;
            var i = 0;
            for(var it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++){
                carry += BASE * b256[it3] >>> 0;
                b256[it3] = carry % 256 >>> 0;
                carry = carry / 256 >>> 0;
            }
            if (carry !== 0) throw new Error("Non-zero carry");
            length = i;
            psz++;
        }
        if (source[psz] === " ") return;
        var it4 = size - length;
        while(it4 !== size && b256[it4] === 0)it4++;
        var vch = new Uint8Array(zeroes + (size - it4));
        var j = zeroes;
        while(it4 !== size)vch[j++] = b256[it4++];
        return vch;
    }
    function decode(string) {
        var buffer = decodeUnsafe(string);
        if (buffer) return buffer;
        throw new Error(`Non-${name} character`);
    }
    return {
        encode: encode,
        decodeUnsafe: decodeUnsafe,
        decode: decode
    };
}
var $758ede16ed191d63$var$src = $758ede16ed191d63$var$base;
var $758ede16ed191d63$var$_brrp__multiformats_scope_baseX = $758ede16ed191d63$var$src;
module.exports = $758ede16ed191d63$var$_brrp__multiformats_scope_baseX;

});

parcelRequire.register("lPD3B", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
const $fe4ca851bd80dcf6$var$empty = new Uint8Array(0);
const $fe4ca851bd80dcf6$var$toHex = (d)=>d.reduce((hex, byte)=>hex + byte.toString(16).padStart(2, "0"), "");
const $fe4ca851bd80dcf6$var$fromHex = (hex)=>{
    const hexes = hex.match(/../g);
    return hexes ? new Uint8Array(hexes.map((b)=>parseInt(b, 16))) : $fe4ca851bd80dcf6$var$empty;
};
const $fe4ca851bd80dcf6$var$equals = (aa, bb)=>{
    if (aa === bb) return true;
    if (aa.byteLength !== bb.byteLength) return false;
    for(let ii = 0; ii < aa.byteLength; ii++){
        if (aa[ii] !== bb[ii]) return false;
    }
    return true;
};
const $fe4ca851bd80dcf6$var$coerce = (o)=>{
    if (o instanceof Uint8Array && o.constructor.name === "Uint8Array") return o;
    if (o instanceof ArrayBuffer) return new Uint8Array(o);
    if (ArrayBuffer.isView(o)) return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
    throw new Error("Unknown type, must be binary type");
};
const $fe4ca851bd80dcf6$var$isBinary = (o)=>o instanceof ArrayBuffer || ArrayBuffer.isView(o);
const $fe4ca851bd80dcf6$var$fromString = (str)=>new TextEncoder().encode(str);
const $fe4ca851bd80dcf6$var$toString = (b)=>new TextDecoder().decode(b);
module.exports.coerce = $fe4ca851bd80dcf6$var$coerce;
module.exports.empty = $fe4ca851bd80dcf6$var$empty;
module.exports.equals = $fe4ca851bd80dcf6$var$equals;
module.exports.fromHex = $fe4ca851bd80dcf6$var$fromHex;
module.exports.fromString = $fe4ca851bd80dcf6$var$fromString;
module.exports.isBinary = $fe4ca851bd80dcf6$var$isBinary;
module.exports.toHex = $fe4ca851bd80dcf6$var$toHex;
module.exports.toString = $fe4ca851bd80dcf6$var$toString;

});



parcelRequire.register("a5WVv", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $h17pu = parcelRequire("h17pu");
const $7598149966783290$var$base2 = $h17pu.rfc4648({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
});
module.exports.base2 = $7598149966783290$var$base2;

});

parcelRequire.register("jU9xv", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $h17pu = parcelRequire("h17pu");
const $e7daa59faae82c61$var$base8 = $h17pu.rfc4648({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
});
module.exports.base8 = $e7daa59faae82c61$var$base8;

});

parcelRequire.register("4h0de", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $h17pu = parcelRequire("h17pu");
const $31c8ea2012724618$var$base10 = $h17pu.baseX({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
});
module.exports.base10 = $31c8ea2012724618$var$base10;

});

parcelRequire.register("a2FY2", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $h17pu = parcelRequire("h17pu");
const $74faa51f015e2a58$var$base16 = $h17pu.rfc4648({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
});
const $74faa51f015e2a58$var$base16upper = $h17pu.rfc4648({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
});
module.exports.base16 = $74faa51f015e2a58$var$base16;
module.exports.base16upper = $74faa51f015e2a58$var$base16upper;

});

parcelRequire.register("b2ifj", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $h17pu = parcelRequire("h17pu");
const $808e08e356bc25a0$var$base32 = $h17pu.rfc4648({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
});
const $808e08e356bc25a0$var$base32upper = $h17pu.rfc4648({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
});
const $808e08e356bc25a0$var$base32pad = $h17pu.rfc4648({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
});
const $808e08e356bc25a0$var$base32padupper = $h17pu.rfc4648({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
});
const $808e08e356bc25a0$var$base32hex = $h17pu.rfc4648({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
});
const $808e08e356bc25a0$var$base32hexupper = $h17pu.rfc4648({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
});
const $808e08e356bc25a0$var$base32hexpad = $h17pu.rfc4648({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
});
const $808e08e356bc25a0$var$base32hexpadupper = $h17pu.rfc4648({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
});
const $808e08e356bc25a0$var$base32z = $h17pu.rfc4648({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
});
module.exports.base32 = $808e08e356bc25a0$var$base32;
module.exports.base32hex = $808e08e356bc25a0$var$base32hex;
module.exports.base32hexpad = $808e08e356bc25a0$var$base32hexpad;
module.exports.base32hexpadupper = $808e08e356bc25a0$var$base32hexpadupper;
module.exports.base32hexupper = $808e08e356bc25a0$var$base32hexupper;
module.exports.base32pad = $808e08e356bc25a0$var$base32pad;
module.exports.base32padupper = $808e08e356bc25a0$var$base32padupper;
module.exports.base32upper = $808e08e356bc25a0$var$base32upper;
module.exports.base32z = $808e08e356bc25a0$var$base32z;

});

parcelRequire.register("cgxOn", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $h17pu = parcelRequire("h17pu");
const $8ee134ef0cf77d61$var$base36 = $h17pu.baseX({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
});
const $8ee134ef0cf77d61$var$base36upper = $h17pu.baseX({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
module.exports.base36 = $8ee134ef0cf77d61$var$base36;
module.exports.base36upper = $8ee134ef0cf77d61$var$base36upper;

});

parcelRequire.register("kafhT", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $h17pu = parcelRequire("h17pu");
const $eae09998ad3904ab$var$base58btc = $h17pu.baseX({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
});
const $eae09998ad3904ab$var$base58flickr = $h17pu.baseX({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
module.exports.base58btc = $eae09998ad3904ab$var$base58btc;
module.exports.base58flickr = $eae09998ad3904ab$var$base58flickr;

});

parcelRequire.register("51F8w", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $h17pu = parcelRequire("h17pu");
const $3a8cf49290fe32f5$var$base64 = $h17pu.rfc4648({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
});
const $3a8cf49290fe32f5$var$base64pad = $h17pu.rfc4648({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
});
const $3a8cf49290fe32f5$var$base64url = $h17pu.rfc4648({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
});
const $3a8cf49290fe32f5$var$base64urlpad = $h17pu.rfc4648({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
});
module.exports.base64 = $3a8cf49290fe32f5$var$base64;
module.exports.base64pad = $3a8cf49290fe32f5$var$base64pad;
module.exports.base64url = $3a8cf49290fe32f5$var$base64url;
module.exports.base64urlpad = $3a8cf49290fe32f5$var$base64urlpad;

});

parcelRequire.register("dExdf", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $h17pu = parcelRequire("h17pu");
const $9f08c61e9b393bfe$var$alphabet = Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42");
const $9f08c61e9b393bfe$var$alphabetBytesToChars = $9f08c61e9b393bfe$var$alphabet.reduce((p, c, i)=>{
    p[i] = c;
    return p;
}, []);
const $9f08c61e9b393bfe$var$alphabetCharsToBytes = $9f08c61e9b393bfe$var$alphabet.reduce((p, c, i)=>{
    p[c.codePointAt(0)] = i;
    return p;
}, []);
function $9f08c61e9b393bfe$var$encode(data) {
    return data.reduce((p, c)=>{
        p += $9f08c61e9b393bfe$var$alphabetBytesToChars[c];
        return p;
    }, "");
}
function $9f08c61e9b393bfe$var$decode(str) {
    const byts = [];
    for (const char of str){
        const byt = $9f08c61e9b393bfe$var$alphabetCharsToBytes[char.codePointAt(0)];
        if (byt === undefined) throw new Error(`Non-base256emoji character: ${char}`);
        byts.push(byt);
    }
    return new Uint8Array(byts);
}
const $9f08c61e9b393bfe$var$base256emoji = $h17pu.from({
    prefix: "\uD83D\uDE80",
    name: "base256emoji",
    encode: $9f08c61e9b393bfe$var$encode,
    decode: $9f08c61e9b393bfe$var$decode
});
module.exports.base256emoji = $9f08c61e9b393bfe$var$base256emoji;

});

parcelRequire.register("aQlUX", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $buy2e = parcelRequire("buy2e");
const $7e4fc31599fc1265$var$sha = (name)=>async (data)=>new Uint8Array(await crypto.subtle.digest(name, data));
const $7e4fc31599fc1265$var$sha256 = $buy2e.from({
    name: "sha2-256",
    code: 18,
    encode: $7e4fc31599fc1265$var$sha("SHA-256")
});
const $7e4fc31599fc1265$var$sha512 = $buy2e.from({
    name: "sha2-512",
    code: 19,
    encode: $7e4fc31599fc1265$var$sha("SHA-512")
});
module.exports.sha256 = $7e4fc31599fc1265$var$sha256;
module.exports.sha512 = $7e4fc31599fc1265$var$sha512;

});
parcelRequire.register("buy2e", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $hVQZm = parcelRequire("hVQZm");
const $85dce5b1d70160c7$var$from = ({ name: name , code: code , encode: encode  })=>new $85dce5b1d70160c7$var$Hasher(name, code, encode);
class $85dce5b1d70160c7$var$Hasher {
    constructor(name, code, encode){
        this.name = name;
        this.code = code;
        this.encode = encode;
    }
    digest(input) {
        if (input instanceof Uint8Array) {
            const result = this.encode(input);
            return result instanceof Uint8Array ? $hVQZm.create(this.code, result) : result.then((digest$1)=>$hVQZm.create(this.code, digest$1));
        } else throw Error("Unknown type, must be binary type");
    }
}
module.exports.Hasher = $85dce5b1d70160c7$var$Hasher;
module.exports.from = $85dce5b1d70160c7$var$from;

});
parcelRequire.register("hVQZm", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $lPD3B = parcelRequire("lPD3B");

var $iWB9Z = parcelRequire("iWB9Z");
const $d0e0dcfaf38e3744$var$create = (code, digest)=>{
    const size = digest.byteLength;
    const sizeOffset = $iWB9Z.encodingLength(code);
    const digestOffset = sizeOffset + $iWB9Z.encodingLength(size);
    const bytes = new Uint8Array(digestOffset + size);
    $iWB9Z.encodeTo(code, bytes, 0);
    $iWB9Z.encodeTo(size, bytes, sizeOffset);
    bytes.set(digest, digestOffset);
    return new $d0e0dcfaf38e3744$var$Digest(code, size, digest, bytes);
};
const $d0e0dcfaf38e3744$var$decode = (multihash)=>{
    const bytes$1 = $lPD3B.coerce(multihash);
    const [code, sizeOffset] = $iWB9Z.decode(bytes$1);
    const [size, digestOffset] = $iWB9Z.decode(bytes$1.subarray(sizeOffset));
    const digest = bytes$1.subarray(sizeOffset + digestOffset);
    if (digest.byteLength !== size) throw new Error("Incorrect length");
    return new $d0e0dcfaf38e3744$var$Digest(code, size, digest, bytes$1);
};
const $d0e0dcfaf38e3744$var$equals = (a, b)=>{
    if (a === b) return true;
    else return a.code === b.code && a.size === b.size && $lPD3B.equals(a.bytes, b.bytes);
};
class $d0e0dcfaf38e3744$var$Digest {
    constructor(code, size, digest, bytes){
        this.code = code;
        this.size = size;
        this.digest = digest;
        this.bytes = bytes;
    }
}
module.exports.Digest = $d0e0dcfaf38e3744$var$Digest;
module.exports.create = $d0e0dcfaf38e3744$var$create;
module.exports.decode = $d0e0dcfaf38e3744$var$decode;
module.exports.equals = $d0e0dcfaf38e3744$var$equals;

});
parcelRequire.register("iWB9Z", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $hbxgL = parcelRequire("hbxgL");
const $dcaa78026ed8584f$var$decode = (data, offset = 0)=>{
    const code = $hbxgL.decode(data, offset);
    return [
        code,
        $hbxgL.decode.bytes
    ];
};
const $dcaa78026ed8584f$var$encodeTo = (int, target, offset = 0)=>{
    $hbxgL.encode(int, target, offset);
    return target;
};
const $dcaa78026ed8584f$var$encodingLength = (int)=>{
    return $hbxgL.encodingLength(int);
};
module.exports.decode = $dcaa78026ed8584f$var$decode;
module.exports.encodeTo = $dcaa78026ed8584f$var$encodeTo;
module.exports.encodingLength = $dcaa78026ed8584f$var$encodingLength;

});
parcelRequire.register("hbxgL", function(module, exports) {
"use strict";
var $c82d455e2828d5cb$var$encode_1 = $c82d455e2828d5cb$var$encode;
var $c82d455e2828d5cb$var$MSB = 128, $c82d455e2828d5cb$var$REST = 127, $c82d455e2828d5cb$var$MSBALL = ~$c82d455e2828d5cb$var$REST, $c82d455e2828d5cb$var$INT = Math.pow(2, 31);
function $c82d455e2828d5cb$var$encode(num, out, offset) {
    out = out || [];
    offset = offset || 0;
    var oldOffset = offset;
    while(num >= $c82d455e2828d5cb$var$INT){
        out[offset++] = num & 255 | $c82d455e2828d5cb$var$MSB;
        num /= 128;
    }
    while(num & $c82d455e2828d5cb$var$MSBALL){
        out[offset++] = num & 255 | $c82d455e2828d5cb$var$MSB;
        num >>>= 7;
    }
    out[offset] = num | 0;
    $c82d455e2828d5cb$var$encode.bytes = offset - oldOffset + 1;
    return out;
}
var $c82d455e2828d5cb$var$decode = $c82d455e2828d5cb$var$read;
var $c82d455e2828d5cb$var$MSB$1 = 128, $c82d455e2828d5cb$var$REST$1 = 127;
function $c82d455e2828d5cb$var$read(buf, offset) {
    var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;
    do {
        if (counter >= l) {
            $c82d455e2828d5cb$var$read.bytes = 0;
            throw new RangeError("Could not decode varint");
        }
        b = buf[counter++];
        res += shift < 28 ? (b & $c82d455e2828d5cb$var$REST$1) << shift : (b & $c82d455e2828d5cb$var$REST$1) * Math.pow(2, shift);
        shift += 7;
    }while (b >= $c82d455e2828d5cb$var$MSB$1);
    $c82d455e2828d5cb$var$read.bytes = counter - offset;
    return res;
}
var $c82d455e2828d5cb$var$N1 = Math.pow(2, 7);
var $c82d455e2828d5cb$var$N2 = Math.pow(2, 14);
var $c82d455e2828d5cb$var$N3 = Math.pow(2, 21);
var $c82d455e2828d5cb$var$N4 = Math.pow(2, 28);
var $c82d455e2828d5cb$var$N5 = Math.pow(2, 35);
var $c82d455e2828d5cb$var$N6 = Math.pow(2, 42);
var $c82d455e2828d5cb$var$N7 = Math.pow(2, 49);
var $c82d455e2828d5cb$var$N8 = Math.pow(2, 56);
var $c82d455e2828d5cb$var$N9 = Math.pow(2, 63);
var $c82d455e2828d5cb$var$length = function(value) {
    return value < $c82d455e2828d5cb$var$N1 ? 1 : value < $c82d455e2828d5cb$var$N2 ? 2 : value < $c82d455e2828d5cb$var$N3 ? 3 : value < $c82d455e2828d5cb$var$N4 ? 4 : value < $c82d455e2828d5cb$var$N5 ? 5 : value < $c82d455e2828d5cb$var$N6 ? 6 : value < $c82d455e2828d5cb$var$N7 ? 7 : value < $c82d455e2828d5cb$var$N8 ? 8 : value < $c82d455e2828d5cb$var$N9 ? 9 : 10;
};
var $c82d455e2828d5cb$var$varint = {
    encode: $c82d455e2828d5cb$var$encode_1,
    decode: $c82d455e2828d5cb$var$decode,
    encodingLength: $c82d455e2828d5cb$var$length
};
var $c82d455e2828d5cb$var$_brrp_varint = $c82d455e2828d5cb$var$varint;
var $c82d455e2828d5cb$var$varint$1 = $c82d455e2828d5cb$var$_brrp_varint;
module.exports = $c82d455e2828d5cb$var$varint$1;

});





parcelRequire.register("8knlt", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $lPD3B = parcelRequire("lPD3B");

var $hVQZm = parcelRequire("hVQZm");
const $61024cddae16bb2d$var$code = 0;
const $61024cddae16bb2d$var$name = "identity";
const $61024cddae16bb2d$var$encode = $lPD3B.coerce;
const $61024cddae16bb2d$var$digest = (input)=>$hVQZm.create($61024cddae16bb2d$var$code, $61024cddae16bb2d$var$encode(input));
const $61024cddae16bb2d$var$identity = {
    code: $61024cddae16bb2d$var$code,
    name: $61024cddae16bb2d$var$name,
    encode: $61024cddae16bb2d$var$encode,
    digest: $61024cddae16bb2d$var$digest
};
module.exports.identity = $61024cddae16bb2d$var$identity;

});

parcelRequire.register("4pDkF", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $lPD3B = parcelRequire("lPD3B");
const $336801c83eb9e48f$var$name = "raw";
const $336801c83eb9e48f$var$code = 85;
const $336801c83eb9e48f$var$encode = (node)=>$lPD3B.coerce(node);
const $336801c83eb9e48f$var$decode = (data)=>$lPD3B.coerce(data);
module.exports.code = $336801c83eb9e48f$var$code;
module.exports.decode = $336801c83eb9e48f$var$decode;
module.exports.encode = $336801c83eb9e48f$var$encode;
module.exports.name = $336801c83eb9e48f$var$name;

});

parcelRequire.register("404C4", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
const $2e9abd9587115e8c$var$textEncoder = new TextEncoder();
const $2e9abd9587115e8c$var$textDecoder = new TextDecoder();
const $2e9abd9587115e8c$var$name = "json";
const $2e9abd9587115e8c$var$code = 512;
const $2e9abd9587115e8c$var$encode = (node)=>$2e9abd9587115e8c$var$textEncoder.encode(JSON.stringify(node));
const $2e9abd9587115e8c$var$decode = (data)=>JSON.parse($2e9abd9587115e8c$var$textDecoder.decode(data));
module.exports.code = $2e9abd9587115e8c$var$code;
module.exports.decode = $2e9abd9587115e8c$var$decode;
module.exports.encode = $2e9abd9587115e8c$var$encode;
module.exports.name = $2e9abd9587115e8c$var$name;

});

parcelRequire.register("2VxCk", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $bC3pk = parcelRequire("bC3pk");

var $iWB9Z = parcelRequire("iWB9Z");

var $lPD3B = parcelRequire("lPD3B");

var $buy2e = parcelRequire("buy2e");

var $hVQZm = parcelRequire("hVQZm");
module.exports.CID = $bC3pk.CID;
module.exports.varint = $iWB9Z;
module.exports.bytes = $lPD3B;
module.exports.hasher = $buy2e;
module.exports.digest = $hVQZm;

});
parcelRequire.register("bC3pk", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $iWB9Z = parcelRequire("iWB9Z");

var $hVQZm = parcelRequire("hVQZm");

var $kafhT = parcelRequire("kafhT");

var $b2ifj = parcelRequire("b2ifj");

var $lPD3B = parcelRequire("lPD3B");
class $8745e2fc478519f8$var$CID {
    constructor(version, code, multihash, bytes){
        this.code = code;
        this.version = version;
        this.multihash = multihash;
        this.bytes = bytes;
        this.byteOffset = bytes.byteOffset;
        this.byteLength = bytes.byteLength;
        this.asCID = this;
        this._baseCache = new Map();
        Object.defineProperties(this, {
            byteOffset: $8745e2fc478519f8$var$hidden,
            byteLength: $8745e2fc478519f8$var$hidden,
            code: $8745e2fc478519f8$var$readonly,
            version: $8745e2fc478519f8$var$readonly,
            multihash: $8745e2fc478519f8$var$readonly,
            bytes: $8745e2fc478519f8$var$readonly,
            _baseCache: $8745e2fc478519f8$var$hidden,
            asCID: $8745e2fc478519f8$var$hidden
        });
    }
    toV0() {
        switch(this.version){
            case 0:
                return this;
            default:
                {
                    const { code: code , multihash: multihash  } = this;
                    if (code !== $8745e2fc478519f8$var$DAG_PB_CODE) throw new Error("Cannot convert a non dag-pb CID to CIDv0");
                    if (multihash.code !== $8745e2fc478519f8$var$SHA_256_CODE) throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
                    return $8745e2fc478519f8$var$CID.createV0(multihash);
                }
        }
    }
    toV1() {
        switch(this.version){
            case 0:
                {
                    const { code: code , digest: digest$1  } = this.multihash;
                    const multihash = $hVQZm.create(code, digest$1);
                    return $8745e2fc478519f8$var$CID.createV1(this.code, multihash);
                }
            case 1:
                return this;
            default:
                throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`);
        }
    }
    equals(other) {
        return other && this.code === other.code && this.version === other.version && $hVQZm.equals(this.multihash, other.multihash);
    }
    toString(base) {
        const { bytes: bytes , version: version , _baseCache: _baseCache  } = this;
        switch(version){
            case 0:
                return $8745e2fc478519f8$var$toStringV0(bytes, _baseCache, base || $kafhT.base58btc.encoder);
            default:
                return $8745e2fc478519f8$var$toStringV1(bytes, _baseCache, base || $b2ifj.base32.encoder);
        }
    }
    toJSON() {
        return {
            code: this.code,
            version: this.version,
            hash: this.multihash.bytes
        };
    }
    get [Symbol.toStringTag]() {
        return "CID";
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        return "CID(" + this.toString() + ")";
    }
    static isCID(value) {
        $8745e2fc478519f8$var$deprecate(/^0\.0/, $8745e2fc478519f8$var$IS_CID_DEPRECATION);
        return !!(value && (value[$8745e2fc478519f8$var$cidSymbol] || value.asCID === value));
    }
    get toBaseEncodedString() {
        throw new Error("Deprecated, use .toString()");
    }
    get codec() {
        throw new Error('"codec" property is deprecated, use integer "code" property instead');
    }
    get buffer() {
        throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead");
    }
    get multibaseName() {
        throw new Error('"multibaseName" property is deprecated');
    }
    get prefix() {
        throw new Error('"prefix" property is deprecated');
    }
    static asCID(value) {
        if (value instanceof $8745e2fc478519f8$var$CID) return value;
        else if (value != null && value.asCID === value) {
            const { version: version , code: code , multihash: multihash , bytes: bytes  } = value;
            return new $8745e2fc478519f8$var$CID(version, code, multihash, bytes || $8745e2fc478519f8$var$encodeCID(version, code, multihash.bytes));
        } else if (value != null && value[$8745e2fc478519f8$var$cidSymbol] === true) {
            const { version: version , multihash: multihash , code: code  } = value;
            const digest$1 = $hVQZm.decode(multihash);
            return $8745e2fc478519f8$var$CID.create(version, code, digest$1);
        } else return null;
    }
    static create(version, code, digest) {
        if (typeof code !== "number") throw new Error("String codecs are no longer supported");
        switch(version){
            case 0:
                if (code !== $8745e2fc478519f8$var$DAG_PB_CODE) throw new Error(`Version 0 CID must use dag-pb (code: ${$8745e2fc478519f8$var$DAG_PB_CODE}) block encoding`);
                else return new $8745e2fc478519f8$var$CID(version, code, digest, digest.bytes);
            case 1:
                {
                    const bytes = $8745e2fc478519f8$var$encodeCID(version, code, digest.bytes);
                    return new $8745e2fc478519f8$var$CID(version, code, digest, bytes);
                }
            default:
                throw new Error("Invalid version");
        }
    }
    static createV0(digest) {
        return $8745e2fc478519f8$var$CID.create(0, $8745e2fc478519f8$var$DAG_PB_CODE, digest);
    }
    static createV1(code, digest) {
        return $8745e2fc478519f8$var$CID.create(1, code, digest);
    }
    static decode(bytes) {
        const [cid, remainder] = $8745e2fc478519f8$var$CID.decodeFirst(bytes);
        if (remainder.length) throw new Error("Incorrect length");
        return cid;
    }
    static decodeFirst(bytes$1) {
        const specs = $8745e2fc478519f8$var$CID.inspectBytes(bytes$1);
        const prefixSize = specs.size - specs.multihashSize;
        const multihashBytes = $lPD3B.coerce(bytes$1.subarray(prefixSize, prefixSize + specs.multihashSize));
        if (multihashBytes.byteLength !== specs.multihashSize) throw new Error("Incorrect length");
        const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
        const digest$1 = new $hVQZm.Digest(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
        const cid = specs.version === 0 ? $8745e2fc478519f8$var$CID.createV0(digest$1) : $8745e2fc478519f8$var$CID.createV1(specs.codec, digest$1);
        return [
            cid,
            bytes$1.subarray(specs.size)
        ];
    }
    static inspectBytes(initialBytes) {
        let offset = 0;
        const next = ()=>{
            const [i, length] = $iWB9Z.decode(initialBytes.subarray(offset));
            offset += length;
            return i;
        };
        let version = next();
        let codec = $8745e2fc478519f8$var$DAG_PB_CODE;
        if (version === 18) {
            version = 0;
            offset = 0;
        } else if (version === 1) codec = next();
        if (version !== 0 && version !== 1) throw new RangeError(`Invalid CID version ${version}`);
        const prefixSize = offset;
        const multihashCode = next();
        const digestSize = next();
        const size = offset + digestSize;
        const multihashSize = size - prefixSize;
        return {
            version: version,
            codec: codec,
            multihashCode: multihashCode,
            digestSize: digestSize,
            multihashSize: multihashSize,
            size: size
        };
    }
    static parse(source, base) {
        const [prefix, bytes] = $8745e2fc478519f8$var$parseCIDtoBytes(source, base);
        const cid = $8745e2fc478519f8$var$CID.decode(bytes);
        cid._baseCache.set(prefix, source);
        return cid;
    }
}
const $8745e2fc478519f8$var$parseCIDtoBytes = (source, base)=>{
    switch(source[0]){
        case "Q":
            {
                const decoder = base || $kafhT.base58btc;
                return [
                    $kafhT.base58btc.prefix,
                    decoder.decode(`${$kafhT.base58btc.prefix}${source}`)
                ];
            }
        case $kafhT.base58btc.prefix:
            {
                const decoder = base || $kafhT.base58btc;
                return [
                    $kafhT.base58btc.prefix,
                    decoder.decode(source)
                ];
            }
        case $b2ifj.base32.prefix:
            {
                const decoder = base || $b2ifj.base32;
                return [
                    $b2ifj.base32.prefix,
                    decoder.decode(source)
                ];
            }
        default:
            if (base == null) throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
            return [
                source[0],
                base.decode(source)
            ];
    }
};
const $8745e2fc478519f8$var$toStringV0 = (bytes, cache, base)=>{
    const { prefix: prefix  } = base;
    if (prefix !== $kafhT.base58btc.prefix) throw Error(`Cannot string encode V0 in ${base.name} encoding`);
    const cid = cache.get(prefix);
    if (cid == null) {
        const cid = base.encode(bytes).slice(1);
        cache.set(prefix, cid);
        return cid;
    } else return cid;
};
const $8745e2fc478519f8$var$toStringV1 = (bytes, cache, base)=>{
    const { prefix: prefix  } = base;
    const cid = cache.get(prefix);
    if (cid == null) {
        const cid = base.encode(bytes);
        cache.set(prefix, cid);
        return cid;
    } else return cid;
};
const $8745e2fc478519f8$var$DAG_PB_CODE = 112;
const $8745e2fc478519f8$var$SHA_256_CODE = 18;
const $8745e2fc478519f8$var$encodeCID = (version, code, multihash)=>{
    const codeOffset = $iWB9Z.encodingLength(version);
    const hashOffset = codeOffset + $iWB9Z.encodingLength(code);
    const bytes = new Uint8Array(hashOffset + multihash.byteLength);
    $iWB9Z.encodeTo(version, bytes, 0);
    $iWB9Z.encodeTo(code, bytes, codeOffset);
    bytes.set(multihash, hashOffset);
    return bytes;
};
const $8745e2fc478519f8$var$cidSymbol = Symbol.for("@ipld/js-cid/CID");
const $8745e2fc478519f8$var$readonly = {
    writable: false,
    configurable: false,
    enumerable: true
};
const $8745e2fc478519f8$var$hidden = {
    writable: false,
    enumerable: false,
    configurable: false
};
const $8745e2fc478519f8$var$version = "0.0.0-dev";
const $8745e2fc478519f8$var$deprecate = (range, message)=>{
    if (range.test($8745e2fc478519f8$var$version)) console.warn(message);
    else throw new Error(message);
};
const $8745e2fc478519f8$var$IS_CID_DEPRECATION = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;
module.exports.CID = $8745e2fc478519f8$var$CID;

});





parcelRequire.register("9llMP", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $hPjKM = parcelRequire("hPjKM");

var $bo2fP = parcelRequire("bo2fP");
function $6cd6f9930a93cb72$var$fromString(string, encoding = "utf8") {
    const base = $hPjKM[encoding];
    if (!base) throw new Error(`Unsupported encoding "${encoding}"`);
    if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) return $bo2fP.asUint8Array(globalThis.Buffer.from(string, "utf-8"));
    return base.decoder.decode(`${base.prefix}${string}`);
}
module.exports.fromString = $6cd6f9930a93cb72$var$fromString;

});



parcelRequire.register("fHsWu", function(module, exports) {

});


parcelRequire.register("2mLND", function(module, exports) {

$parcel$export(module.exports, "TYPE_1", () => $1b92b6d978e01582$export$406e97c329f0f3d4);
$parcel$export(module.exports, "generateKeyPair", () => $1b92b6d978e01582$export$a949d36eab55b41f);
$parcel$export(module.exports, "generateRandomBytes32", () => $1b92b6d978e01582$export$d15a28e4f1821243);
$parcel$export(module.exports, "deriveSymKey", () => $1b92b6d978e01582$export$f8378f68e053f5c6);
$parcel$export(module.exports, "hashKey", () => $1b92b6d978e01582$export$1e87d19d4aab5805);
$parcel$export(module.exports, "hashMessage", () => $1b92b6d978e01582$export$d4c241cec96564c1);
$parcel$export(module.exports, "decodeTypeByte", () => $1b92b6d978e01582$export$7547a514ee29b9d4);
$parcel$export(module.exports, "encrypt", () => $1b92b6d978e01582$export$5b0f6292f11d1d18);
$parcel$export(module.exports, "decrypt", () => $1b92b6d978e01582$export$e85a0c9a1067c5d3);
$parcel$export(module.exports, "deserialize", () => $1b92b6d978e01582$export$efcd34ab6248d3cd);
$parcel$export(module.exports, "validateDecoding", () => $1b92b6d978e01582$export$177f3e316562333d);
$parcel$export(module.exports, "validateEncoding", () => $1b92b6d978e01582$export$7949f60f2444aef2);
$parcel$export(module.exports, "isTypeOneEnvelope", () => $1b92b6d978e01582$export$8c165704db2d5c15);
$parcel$export(module.exports, "formatRelayRpcUrl", () => $1b92b6d978e01582$export$d875b3963ef774f5);
$parcel$export(module.exports, "mapToObj", () => $1b92b6d978e01582$export$c4b8dfeb6e237eb9);
$parcel$export(module.exports, "objToMap", () => $1b92b6d978e01582$export$ac31b37c726bc3ba);
$parcel$export(module.exports, "calcExpiry", () => $1b92b6d978e01582$export$b136d03015bfc12);
$parcel$export(module.exports, "isExpired", () => $1b92b6d978e01582$export$57947cfd429801a2);
$parcel$export(module.exports, "createDelayedPromise", () => $1b92b6d978e01582$export$cbf9e3cc9ffc85cb);
$parcel$export(module.exports, "createExpiringPromise", () => $1b92b6d978e01582$export$3da2293b007ed708);
$parcel$export(module.exports, "formatTopicTarget", () => $1b92b6d978e01582$export$43ab92477f8713b9);
$parcel$export(module.exports, "formatIdTarget", () => $1b92b6d978e01582$export$bd13103c2e5cc0c3);
$parcel$export(module.exports, "parseExpirerTarget", () => $1b92b6d978e01582$export$93adeb0f16e8e51d);
$parcel$export(module.exports, "engineEvent", () => $1b92b6d978e01582$export$e3eb27ce66c0f6d9);
$parcel$export(module.exports, "getRelayProtocolName", () => $1b92b6d978e01582$export$cf77af25151525db);
$parcel$export(module.exports, "getRelayProtocolApi", () => $1b92b6d978e01582$export$604e3deb95e1b734);
$parcel$export(module.exports, "parseUri", () => $1b92b6d978e01582$export$59f58847421cfb28);
$parcel$export(module.exports, "formatUri", () => $1b92b6d978e01582$export$b2786ede34fb2350);
$parcel$export(module.exports, "getInternalError", () => $1b92b6d978e01582$export$500d4c4a8fafe35);
$parcel$export(module.exports, "getSdkError", () => $1b92b6d978e01582$export$8203ef1531c8b5b5);
$parcel$export(module.exports, "isUndefined", () => $1b92b6d978e01582$export$fce6876652108ab);
$parcel$export(module.exports, "isValidString", () => $1b92b6d978e01582$export$ee898ca48ab56c74);
$parcel$export(module.exports, "isValidUrl", () => $1b92b6d978e01582$export$bef94a5618bf18bf);
$parcel$export(module.exports, "isProposalStruct", () => $1b92b6d978e01582$export$f657f7976bb2769d);
$parcel$export(module.exports, "isSessionStruct", () => $1b92b6d978e01582$export$c96d5113768aaf5e);
$parcel$export(module.exports, "isValidParams", () => $1b92b6d978e01582$export$b3f5fcca1d210454);

var $3TRbz = parcelRequire("3TRbz");

var $5E4JY = parcelRequire("5E4JY");

var $2SEZb = parcelRequire("2SEZb");

var $46Gtt = parcelRequire("46Gtt");

var $2FSze = parcelRequire("2FSze");

var $6yXrI = parcelRequire("6yXrI");

var $jtnEP = parcelRequire("jtnEP");

var $gm49L = parcelRequire("gm49L");

var $jeE37 = parcelRequire("jeE37");

var $1j5GI = parcelRequire("1j5GI");

var $ecEnX = parcelRequire("ecEnX");
parcelRequire("akZap");
var $5G6lt = parcelRequire("5G6lt");

var $4DZrq = parcelRequire("4DZrq");
const $1b92b6d978e01582$var$P = ":";
function $1b92b6d978e01582$export$4764229d78de4437(e) {
    const [n, t] = e.split($1b92b6d978e01582$var$P);
    return {
        namespace: n,
        reference: t
    };
}
function $1b92b6d978e01582$export$a5999672e4930644(e) {
    const { namespace: n , reference: t  } = e;
    return [
        n,
        t
    ].join($1b92b6d978e01582$var$P);
}
function $1b92b6d978e01582$export$276ab0158c66e3d(e) {
    const [n, t, r] = e.split($1b92b6d978e01582$var$P);
    return {
        namespace: n,
        reference: t,
        address: r
    };
}
function $1b92b6d978e01582$export$566a25328fb93a18(e) {
    const { namespace: n , reference: t , address: r  } = e;
    return [
        n,
        t,
        r
    ].join($1b92b6d978e01582$var$P);
}
function $1b92b6d978e01582$export$d579bc26e95946b5(e, n) {
    const t = [];
    return e.forEach((r)=>{
        const o = n(r);
        t.includes(o) || t.push(o);
    }), t;
}
function $1b92b6d978e01582$export$2806d446053abd1d(e) {
    const { address: n  } = $1b92b6d978e01582$export$276ab0158c66e3d(e);
    return n;
}
function $1b92b6d978e01582$export$93512919ec2ab555(e) {
    const { namespace: n , reference: t  } = $1b92b6d978e01582$export$276ab0158c66e3d(e);
    return $1b92b6d978e01582$export$a5999672e4930644({
        namespace: n,
        reference: t
    });
}
function $1b92b6d978e01582$export$40283ddc77f27f6e(e, n) {
    const { namespace: t , reference: r  } = $1b92b6d978e01582$export$4764229d78de4437(n);
    return $1b92b6d978e01582$export$566a25328fb93a18({
        namespace: t,
        reference: r,
        address: e
    });
}
function $1b92b6d978e01582$export$aa4a6b630dfcfa83(e) {
    return $1b92b6d978e01582$export$d579bc26e95946b5(e, $1b92b6d978e01582$export$2806d446053abd1d);
}
function $1b92b6d978e01582$export$d5ee58c6b13696e9(e) {
    return $1b92b6d978e01582$export$d579bc26e95946b5(e, $1b92b6d978e01582$export$93512919ec2ab555);
}
function $1b92b6d978e01582$export$23329703ad972840(e, n = []) {
    const t = [];
    return Object.keys(e).forEach((r)=>{
        if (n.length && !n.includes(r)) return;
        const o = e[r];
        t.push(...o.accounts);
    }), t;
}
function $1b92b6d978e01582$export$6281ff29da5f85fe(e, n = []) {
    const t = [];
    return Object.keys(e).forEach((r)=>{
        if (n.length && !n.includes(r)) return;
        const o = e[r];
        t.push(...$1b92b6d978e01582$export$d5ee58c6b13696e9(o.accounts));
    }), t;
}
function $1b92b6d978e01582$export$d1109eeb751412cf(e, n = []) {
    const t = [];
    return Object.keys(e).forEach((r)=>{
        if (n.length && !n.includes(r)) return;
        const o = e[r];
        t.push(...o.chains);
    }), t;
}
const $1b92b6d978e01582$export$a524ae552db7912 = (e)=>e?.split(":"), $1b92b6d978e01582$export$85f23c05c80b194 = (e)=>{
    const n = e && $1b92b6d978e01582$export$a524ae552db7912(e);
    if (n) return n[3];
}, $1b92b6d978e01582$export$a8b149927aef7051 = (e)=>{
    const n = e && $1b92b6d978e01582$export$a524ae552db7912(e);
    if (n) return n[2] + ":" + n[3];
}, $1b92b6d978e01582$export$bf43cfbb4bd95de9 = (e)=>{
    const n = e && $1b92b6d978e01582$export$a524ae552db7912(e);
    if (n) return n.pop();
}, $1b92b6d978e01582$export$25868d1e8e76735f = (e, n)=>{
    const t = `${e.domain} wants you to sign in with your Ethereum account:`, r = $1b92b6d978e01582$export$bf43cfbb4bd95de9(n), o = e.statement, s = `URI: ${e.aud}`, i = `Version: ${e.version}`, u = `Chain ID: ${$1b92b6d978e01582$export$85f23c05c80b194(n)}`, f = `Nonce: ${e.nonce}`, g = `Issued At: ${e.iat}`, O = e.resources && e.resources.length > 0 ? `Resources:
${e.resources.map((p)=>`- ${p}`).join(`
`)}` : void 0;
    return [
        t,
        r,
        "",
        o,
        "",
        s,
        i,
        u,
        f,
        g,
        O
    ].filter((p)=>p != null).join(`
`);
}, $1b92b6d978e01582$export$f7403969428298bd = "base10", $1b92b6d978e01582$export$49eb910ab2518105 = "base16", $1b92b6d978e01582$export$9bff723d552e6bcf = "base64pad", $1b92b6d978e01582$export$9560dad2a83e4f04 = "utf8", $1b92b6d978e01582$export$3425bd336a9673d8 = 0, $1b92b6d978e01582$export$406e97c329f0f3d4 = 1, $1b92b6d978e01582$var$sn = 0, $1b92b6d978e01582$var$de = 1, $1b92b6d978e01582$var$K = 12, $1b92b6d978e01582$var$k = 32;
function $1b92b6d978e01582$export$a949d36eab55b41f() {
    const e = $2FSze.generateKeyPair();
    return {
        privateKey: (0, $6yXrI.toString)(e.secretKey, $1b92b6d978e01582$export$49eb910ab2518105),
        publicKey: (0, $6yXrI.toString)(e.publicKey, $1b92b6d978e01582$export$49eb910ab2518105)
    };
}
function $1b92b6d978e01582$export$d15a28e4f1821243() {
    const e = (0, $2SEZb.randomBytes)($1b92b6d978e01582$var$k);
    return (0, $6yXrI.toString)(e, $1b92b6d978e01582$export$49eb910ab2518105);
}
function $1b92b6d978e01582$export$f8378f68e053f5c6(e, n) {
    const t = $2FSze.sharedKey((0, $6yXrI.fromString)(e, $1b92b6d978e01582$export$49eb910ab2518105), (0, $6yXrI.fromString)(n, $1b92b6d978e01582$export$49eb910ab2518105)), r = new (0, $5E4JY.HKDF)((0, $46Gtt.SHA256), t).expand($1b92b6d978e01582$var$k);
    return (0, $6yXrI.toString)(r, $1b92b6d978e01582$export$49eb910ab2518105);
}
function $1b92b6d978e01582$export$1e87d19d4aab5805(e) {
    const n = (0, $46Gtt.hash)((0, $6yXrI.fromString)(e, $1b92b6d978e01582$export$49eb910ab2518105));
    return (0, $6yXrI.toString)(n, $1b92b6d978e01582$export$49eb910ab2518105);
}
function $1b92b6d978e01582$export$d4c241cec96564c1(e) {
    const n = (0, $46Gtt.hash)((0, $6yXrI.fromString)(e, $1b92b6d978e01582$export$9560dad2a83e4f04));
    return (0, $6yXrI.toString)(n, $1b92b6d978e01582$export$49eb910ab2518105);
}
function $1b92b6d978e01582$export$e9d2f9ba70428fb6(e) {
    return (0, $6yXrI.fromString)(`${e}`, $1b92b6d978e01582$export$f7403969428298bd);
}
function $1b92b6d978e01582$export$7547a514ee29b9d4(e) {
    return Number((0, $6yXrI.toString)(e, $1b92b6d978e01582$export$f7403969428298bd));
}
function $1b92b6d978e01582$export$5b0f6292f11d1d18(e) {
    const n = $1b92b6d978e01582$export$e9d2f9ba70428fb6(typeof e.type < "u" ? e.type : $1b92b6d978e01582$export$3425bd336a9673d8);
    if ($1b92b6d978e01582$export$7547a514ee29b9d4(n) === $1b92b6d978e01582$export$406e97c329f0f3d4 && typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    const t = typeof e.senderPublicKey < "u" ? (0, $6yXrI.fromString)(e.senderPublicKey, $1b92b6d978e01582$export$49eb910ab2518105) : void 0, r = typeof e.iv < "u" ? (0, $6yXrI.fromString)(e.iv, $1b92b6d978e01582$export$49eb910ab2518105) : (0, $2SEZb.randomBytes)($1b92b6d978e01582$var$K), o = new (0, $3TRbz.ChaCha20Poly1305)((0, $6yXrI.fromString)(e.symKey, $1b92b6d978e01582$export$49eb910ab2518105)).seal(r, (0, $6yXrI.fromString)(e.message, $1b92b6d978e01582$export$9560dad2a83e4f04));
    return $1b92b6d978e01582$export$dfdc1655ccc5b9cb({
        type: n,
        sealed: o,
        iv: r,
        senderPublicKey: t
    });
}
function $1b92b6d978e01582$export$e85a0c9a1067c5d3(e) {
    const n = new (0, $3TRbz.ChaCha20Poly1305)((0, $6yXrI.fromString)(e.symKey, $1b92b6d978e01582$export$49eb910ab2518105)), { sealed: t , iv: r  } = $1b92b6d978e01582$export$efcd34ab6248d3cd(e.encoded), o = n.open(r, t);
    if (o === null) throw new Error("Failed to decrypt");
    return (0, $6yXrI.toString)(o, $1b92b6d978e01582$export$9560dad2a83e4f04);
}
function $1b92b6d978e01582$export$dfdc1655ccc5b9cb(e) {
    if ($1b92b6d978e01582$export$7547a514ee29b9d4(e.type) === $1b92b6d978e01582$export$406e97c329f0f3d4) {
        if (typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
        return (0, $6yXrI.toString)((0, $6yXrI.concat)([
            e.type,
            e.senderPublicKey,
            e.iv,
            e.sealed
        ]), $1b92b6d978e01582$export$9bff723d552e6bcf);
    }
    return (0, $6yXrI.toString)((0, $6yXrI.concat)([
        e.type,
        e.iv,
        e.sealed
    ]), $1b92b6d978e01582$export$9bff723d552e6bcf);
}
function $1b92b6d978e01582$export$efcd34ab6248d3cd(e) {
    const n = (0, $6yXrI.fromString)(e, $1b92b6d978e01582$export$9bff723d552e6bcf), t = n.slice($1b92b6d978e01582$var$sn, $1b92b6d978e01582$var$de), r = $1b92b6d978e01582$var$de;
    if ($1b92b6d978e01582$export$7547a514ee29b9d4(t) === $1b92b6d978e01582$export$406e97c329f0f3d4) {
        const u = r + $1b92b6d978e01582$var$k, f = u + $1b92b6d978e01582$var$K, g = n.slice(r, u), O = n.slice(u, f), p = n.slice(f);
        return {
            type: t,
            sealed: p,
            iv: O,
            senderPublicKey: g
        };
    }
    const o = r + $1b92b6d978e01582$var$K, s = n.slice(r, o), i = n.slice(o);
    return {
        type: t,
        sealed: i,
        iv: s
    };
}
function $1b92b6d978e01582$export$177f3e316562333d(e, n) {
    const t = $1b92b6d978e01582$export$efcd34ab6248d3cd(e);
    return $1b92b6d978e01582$export$7949f60f2444aef2({
        type: $1b92b6d978e01582$export$7547a514ee29b9d4(t.type),
        senderPublicKey: typeof t.senderPublicKey < "u" ? (0, $6yXrI.toString)(t.senderPublicKey, $1b92b6d978e01582$export$49eb910ab2518105) : void 0,
        receiverPublicKey: n?.receiverPublicKey
    });
}
function $1b92b6d978e01582$export$7949f60f2444aef2(e) {
    const n = e?.type || $1b92b6d978e01582$export$3425bd336a9673d8;
    if (n === $1b92b6d978e01582$export$406e97c329f0f3d4) {
        if (typeof e?.senderPublicKey > "u") throw new Error("missing sender public key");
        if (typeof e?.receiverPublicKey > "u") throw new Error("missing receiver public key");
    }
    return {
        type: n,
        senderPublicKey: e?.senderPublicKey,
        receiverPublicKey: e?.receiverPublicKey
    };
}
function $1b92b6d978e01582$export$8c165704db2d5c15(e) {
    return e.type === $1b92b6d978e01582$export$406e97c329f0f3d4 && typeof e.senderPublicKey == "string" && typeof e.receiverPublicKey == "string";
}
var $1b92b6d978e01582$var$En = Object.defineProperty, $1b92b6d978e01582$var$me = Object.getOwnPropertySymbols, $1b92b6d978e01582$var$gn = Object.prototype.hasOwnProperty, $1b92b6d978e01582$var$hn = Object.prototype.propertyIsEnumerable, $1b92b6d978e01582$var$ye = (e, n, t)=>n in e ? $1b92b6d978e01582$var$En(e, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[n] = t, $1b92b6d978e01582$var$Ee = (e, n)=>{
    for(var t in n || (n = {}))$1b92b6d978e01582$var$gn.call(n, t) && $1b92b6d978e01582$var$ye(e, t, n[t]);
    if ($1b92b6d978e01582$var$me) for (var t of $1b92b6d978e01582$var$me(n))$1b92b6d978e01582$var$hn.call(n, t) && $1b92b6d978e01582$var$ye(e, t, n[t]);
    return e;
};
const $1b92b6d978e01582$export$f12873d77424d47b = "ReactNative", $1b92b6d978e01582$export$86b1301a63b15dd9 = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown"
}, $1b92b6d978e01582$export$657dee6d5648750a = " ", $1b92b6d978e01582$export$96c3628b3b9d2079 = ":", $1b92b6d978e01582$export$98238152dfccf046 = "/", $1b92b6d978e01582$export$7f882bb969de14a3 = 2, $1b92b6d978e01582$export$77baccb4c6bd5852 = 1e3, $1b92b6d978e01582$export$e08b61c98317d88c = "js";
function $1b92b6d978e01582$export$8ee0fc9ee280b4ee() {
    return typeof $4DZrq < "u" && typeof $4DZrq.versions < "u" && typeof $4DZrq.versions.node < "u";
}
function $1b92b6d978e01582$export$f7a1e23e542d38e3() {
    return !(0, $jeE37.getDocument)() && !!(0, $jeE37.getNavigator)() && navigator.product === $1b92b6d978e01582$export$f12873d77424d47b;
}
function $1b92b6d978e01582$export$4e09c449d6c407f7() {
    return !$1b92b6d978e01582$export$8ee0fc9ee280b4ee() && !!(0, $jeE37.getNavigator)();
}
function $1b92b6d978e01582$export$57570b1603cf6adb() {
    return $1b92b6d978e01582$export$f7a1e23e542d38e3() ? $1b92b6d978e01582$export$86b1301a63b15dd9.reactNative : $1b92b6d978e01582$export$8ee0fc9ee280b4ee() ? $1b92b6d978e01582$export$86b1301a63b15dd9.node : $1b92b6d978e01582$export$4e09c449d6c407f7() ? $1b92b6d978e01582$export$86b1301a63b15dd9.browser : $1b92b6d978e01582$export$86b1301a63b15dd9.unknown;
}
function $1b92b6d978e01582$export$c4147c69f6845da(e, n) {
    let t = $ecEnX.parse(e);
    return t = $1b92b6d978e01582$var$Ee($1b92b6d978e01582$var$Ee({}, t), n), e = $ecEnX.stringify(t), e;
}
function $1b92b6d978e01582$export$ba31e015127122bb() {
    return (0, $1j5GI.getWindowMetadata)() || {
        name: "",
        description: "",
        url: "",
        icons: [
            ""
        ]
    };
}
function $1b92b6d978e01582$export$6b05aa0115b6fc2d(e, n) {
    var t;
    const r = $1b92b6d978e01582$export$57570b1603cf6adb(), o = {
        protocol: e,
        version: n,
        env: r
    };
    return r === "browser" && (o.host = ((t = (0, $jeE37.getLocation)()) == null ? void 0 : t.host) || "unknown"), o;
}
function $1b92b6d978e01582$export$20d4a3cb5829b8b6() {
    const e = (0, $jtnEP.detect)();
    if (e === null) return "unknown";
    const n = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
    return e.type === "browser" ? [
        n,
        e.name,
        e.version
    ].join("-") : [
        n,
        e.version
    ].join("-");
}
function $1b92b6d978e01582$export$4389b0987726d52d() {
    var e;
    const n = $1b92b6d978e01582$export$57570b1603cf6adb();
    return n === $1b92b6d978e01582$export$86b1301a63b15dd9.browser ? [
        n,
        ((e = (0, $jeE37.getLocation)()) == null ? void 0 : e.host) || "unknown"
    ].join(":") : n;
}
function $1b92b6d978e01582$export$b55a4c6e272b719f(e, n, t) {
    const r = $1b92b6d978e01582$export$20d4a3cb5829b8b6(), o = $1b92b6d978e01582$export$4389b0987726d52d();
    return [
        [
            e,
            n
        ].join("-"),
        [
            $1b92b6d978e01582$export$e08b61c98317d88c,
            t
        ].join("-"),
        r,
        o
    ].join("/");
}
function $1b92b6d978e01582$export$d875b3963ef774f5({ protocol: e , version: n , relayUrl: t , sdkVersion: r , auth: o , projectId: s  }) {
    const i = t.split("?"), u = $1b92b6d978e01582$export$b55a4c6e272b719f(e, n, r), f = {
        auth: o,
        ua: u,
        projectId: s
    }, g = $1b92b6d978e01582$export$c4147c69f6845da(i[1] || "", f);
    return i[0] + "?" + g;
}
function $1b92b6d978e01582$export$ed08891a8a54eb(e) {
    let n = (e.match(/^[^:]+(?=:\/\/)/gi) || [])[0];
    const t = typeof n < "u" ? e.split("://")[1] : e;
    return n = n === "wss" ? "https" : "http", [
        n,
        t
    ].join("://");
}
function $1b92b6d978e01582$export$804de46662e4ac95(e, n, t) {
    if (!e[n] || typeof e[n] !== t) throw new Error(`Missing or invalid "${n}" param`);
}
function $1b92b6d978e01582$export$1e21530e896c0b0b(e, n = $1b92b6d978e01582$export$7f882bb969de14a3) {
    return $1b92b6d978e01582$export$7f00885504704576(e.split($1b92b6d978e01582$export$98238152dfccf046), n);
}
function $1b92b6d978e01582$export$80bffd46c37a96f6(e) {
    return $1b92b6d978e01582$export$1e21530e896c0b0b(e).join($1b92b6d978e01582$export$657dee6d5648750a);
}
function $1b92b6d978e01582$export$1468a49de573f7f9(e, n) {
    return e.filter((t)=>n.includes(t)).length === e.length;
}
function $1b92b6d978e01582$export$7f00885504704576(e, n = $1b92b6d978e01582$export$7f882bb969de14a3) {
    return e.slice(Math.max(e.length - n, 0));
}
function $1b92b6d978e01582$export$c4b8dfeb6e237eb9(e) {
    return Object.fromEntries(e.entries());
}
function $1b92b6d978e01582$export$ac31b37c726bc3ba(e) {
    return new Map(Object.entries(e));
}
function $1b92b6d978e01582$export$592ef47eabb05614(e, n) {
    const t = {};
    return Object.keys(e).forEach((r)=>{
        t[r] = n(e[r]);
    }), t;
}
const $1b92b6d978e01582$export$85c927578394b28b = (e)=>e;
function $1b92b6d978e01582$export$e9f8fcacef3bca4b(e) {
    return e.trim().replace(/^\w/, (n)=>n.toUpperCase());
}
function $1b92b6d978e01582$export$9a00dee1beb8f576(e) {
    return e.split($1b92b6d978e01582$export$657dee6d5648750a).map((n)=>$1b92b6d978e01582$export$e9f8fcacef3bca4b(n)).join($1b92b6d978e01582$export$657dee6d5648750a);
}
function $1b92b6d978e01582$export$b136d03015bfc12(e, n) {
    return (0, $gm49L.fromMiliseconds)((n || Date.now()) + (0, $gm49L.toMiliseconds)(e));
}
function $1b92b6d978e01582$export$57947cfd429801a2(e) {
    return (0, $gm49L.fromMiliseconds)(Date.now()) >= (0, $gm49L.toMiliseconds)(e);
}
function $1b92b6d978e01582$export$cbf9e3cc9ffc85cb(e) {
    const n = (0, $gm49L.toMiliseconds)(e || (0, $gm49L.FIVE_MINUTES));
    let t, r, o;
    return {
        resolve: (s)=>{
            o && t && (clearTimeout(o), t(s));
        },
        reject: (s)=>{
            o && r && (clearTimeout(o), r(s));
        },
        done: ()=>new Promise((s, i)=>{
                o = setTimeout(i, n), t = s, r = i;
            })
    };
}
function $1b92b6d978e01582$export$3da2293b007ed708(e, n) {
    return new Promise(async (t, r)=>{
        const o = setTimeout(()=>r(), n), s = await e;
        clearTimeout(o), t(s);
    });
}
function $1b92b6d978e01582$export$187ab6574b2ae23f(e, n) {
    if (typeof n == "string" && n.startsWith(`${e}:`)) return n;
    if (e.toLowerCase() === "topic") {
        if (typeof n != "string") throw new Error('Value must be "string" for expirer target type: topic');
        return `topic:${n}`;
    } else if (e.toLowerCase() === "id") {
        if (typeof n != "number") throw new Error('Value must be "number" for expirer target type: id');
        return `id:${n}`;
    }
    throw new Error(`Unknown expirer target type: ${e}`);
}
function $1b92b6d978e01582$export$43ab92477f8713b9(e) {
    return $1b92b6d978e01582$export$187ab6574b2ae23f("topic", e);
}
function $1b92b6d978e01582$export$bd13103c2e5cc0c3(e) {
    return $1b92b6d978e01582$export$187ab6574b2ae23f("id", e);
}
function $1b92b6d978e01582$export$93adeb0f16e8e51d(e) {
    const [n, t] = e.split(":"), r = {
        id: void 0,
        topic: void 0
    };
    if (n === "topic" && typeof t == "string") r.topic = t;
    else if (n === "id" && Number.isInteger(Number(t))) r.id = Number(t);
    else throw new Error(`Invalid target, expected id:number or topic:string, got ${n}:${t}`);
    return r;
}
function $1b92b6d978e01582$export$e3eb27ce66c0f6d9(e, n) {
    return `${e}${n ? `:${n}` : ""}`;
}
const $1b92b6d978e01582$export$822d0bd1635d5360 = "irn";
function $1b92b6d978e01582$export$cf77af25151525db(e) {
    return e?.relay || {
        protocol: $1b92b6d978e01582$export$822d0bd1635d5360
    };
}
function $1b92b6d978e01582$export$604e3deb95e1b734(e) {
    const n = (0, $5G6lt.RELAY_JSONRPC)[e];
    if (typeof n > "u") throw new Error(`Relay Protocol not supported: ${e}`);
    return n;
}
var $1b92b6d978e01582$var$Fn = Object.defineProperty, $1b92b6d978e01582$var$Ae = Object.getOwnPropertySymbols, $1b92b6d978e01582$var$Hn = Object.prototype.hasOwnProperty, $1b92b6d978e01582$var$qn = Object.prototype.propertyIsEnumerable, $1b92b6d978e01582$var$we = (e, n, t)=>n in e ? $1b92b6d978e01582$var$Fn(e, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[n] = t, $1b92b6d978e01582$var$Bn = (e, n)=>{
    for(var t in n || (n = {}))$1b92b6d978e01582$var$Hn.call(n, t) && $1b92b6d978e01582$var$we(e, t, n[t]);
    if ($1b92b6d978e01582$var$Ae) for (var t of $1b92b6d978e01582$var$Ae(n))$1b92b6d978e01582$var$qn.call(n, t) && $1b92b6d978e01582$var$we(e, t, n[t]);
    return e;
};
function $1b92b6d978e01582$export$3d24f408c2ac468a(e, n = "-") {
    const t = {}, r = "relay" + n;
    return Object.keys(e).forEach((o)=>{
        if (o.startsWith(r)) {
            const s = o.replace(r, ""), i = e[o];
            t[s] = i;
        }
    }), t;
}
function $1b92b6d978e01582$export$59f58847421cfb28(e) {
    const n = e.indexOf(":"), t = e.indexOf("?") !== -1 ? e.indexOf("?") : void 0, r = e.substring(0, n), o = e.substring(n + 1, t).split("@"), s = typeof t < "u" ? e.substring(t) : "", i = $ecEnX.parse(s);
    return {
        protocol: r,
        topic: o[0],
        version: parseInt(o[1], 10),
        symKey: i.symKey,
        relay: $1b92b6d978e01582$export$3d24f408c2ac468a(i)
    };
}
function $1b92b6d978e01582$export$65c55c7ccd19bb8f(e, n = "-") {
    const t = "relay", r = {};
    return Object.keys(e).forEach((o)=>{
        const s = t + n + o;
        e[o] && (r[s] = e[o]);
    }), r;
}
function $1b92b6d978e01582$export$b2786ede34fb2350(e) {
    return `${e.protocol}:${e.topic}@${e.version}?` + $ecEnX.stringify($1b92b6d978e01582$var$Bn({
        symKey: e.symKey
    }, $1b92b6d978e01582$export$65c55c7ccd19bb8f(e.relay)));
}
function $1b92b6d978e01582$export$d46695d9c3664fe9(e) {
    const n = [];
    return e.forEach((t)=>{
        const [r, o] = t.split(":");
        n.push(`${r}:${o}`);
    }), n;
}
function $1b92b6d978e01582$export$fb6db6038e742b14(e) {
    const n = [];
    return Object.values(e).forEach((t)=>{
        n.push(...$1b92b6d978e01582$export$d46695d9c3664fe9(t.accounts));
    }), n;
}
function $1b92b6d978e01582$export$7dcf4808e17b15ac(e, n) {
    const t = [];
    return Object.values(e).forEach((r)=>{
        $1b92b6d978e01582$export$d46695d9c3664fe9(r.accounts).includes(n) && t.push(...r.methods);
    }), t;
}
function $1b92b6d978e01582$export$94ee6d00e384a22(e, n) {
    const t = [];
    return Object.values(e).forEach((r)=>{
        $1b92b6d978e01582$export$d46695d9c3664fe9(r.accounts).includes(n) && t.push(...r.events);
    }), t;
}
function $1b92b6d978e01582$export$a8daa26a7c60ef90(e, n) {
    const t = $1b92b6d978e01582$export$93f7b81dc815a714(e, n);
    if (t) throw new Error(t.message);
    const r = {};
    for (const [o, s] of Object.entries(e))r[o] = {
        methods: s.methods,
        events: s.events,
        chains: s.accounts.map((i)=>`${i.split(":")[0]}:${i.split(":")[1]}`)
    };
    return r;
}
const $1b92b6d978e01582$var$Wn = {
    INVALID_METHOD: {
        message: "Invalid method.",
        code: 1001
    },
    INVALID_EVENT: {
        message: "Invalid event.",
        code: 1002
    },
    INVALID_UPDATE_REQUEST: {
        message: "Invalid update request.",
        code: 1003
    },
    INVALID_EXTEND_REQUEST: {
        message: "Invalid extend request.",
        code: 1004
    },
    INVALID_SESSION_SETTLE_REQUEST: {
        message: "Invalid session settle request.",
        code: 1005
    },
    UNAUTHORIZED_METHOD: {
        message: "Unauthorized method.",
        code: 3001
    },
    UNAUTHORIZED_EVENT: {
        message: "Unauthorized event.",
        code: 3002
    },
    UNAUTHORIZED_UPDATE_REQUEST: {
        message: "Unauthorized update request.",
        code: 3003
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
        message: "Unauthorized extend request.",
        code: 3004
    },
    USER_REJECTED: {
        message: "User rejected.",
        code: 5e3
    },
    USER_REJECTED_CHAINS: {
        message: "User rejected chains.",
        code: 5001
    },
    USER_REJECTED_METHODS: {
        message: "User rejected methods.",
        code: 5002
    },
    USER_REJECTED_EVENTS: {
        message: "User rejected events.",
        code: 5003
    },
    UNSUPPORTED_CHAINS: {
        message: "Unsupported chains.",
        code: 5100
    },
    UNSUPPORTED_METHODS: {
        message: "Unsupported methods.",
        code: 5101
    },
    UNSUPPORTED_EVENTS: {
        message: "Unsupported events.",
        code: 5102
    },
    UNSUPPORTED_ACCOUNTS: {
        message: "Unsupported accounts.",
        code: 5103
    },
    UNSUPPORTED_NAMESPACE_KEY: {
        message: "Unsupported namespace key.",
        code: 5104
    },
    USER_DISCONNECTED: {
        message: "User disconnected.",
        code: 6e3
    },
    SESSION_SETTLEMENT_FAILED: {
        message: "Session settlement failed.",
        code: 7e3
    },
    WC_METHOD_UNSUPPORTED: {
        message: "Unsupported wc_ method.",
        code: 10001
    }
}, $1b92b6d978e01582$var$Jn = {
    NOT_INITIALIZED: {
        message: "Not initialized.",
        code: 1
    },
    NO_MATCHING_KEY: {
        message: "No matching key.",
        code: 2
    },
    RESTORE_WILL_OVERRIDE: {
        message: "Restore will override.",
        code: 3
    },
    RESUBSCRIBED: {
        message: "Resubscribed.",
        code: 4
    },
    MISSING_OR_INVALID: {
        message: "Missing or invalid.",
        code: 5
    },
    EXPIRED: {
        message: "Expired.",
        code: 6
    },
    UNKNOWN_TYPE: {
        message: "Unknown type.",
        code: 7
    },
    MISMATCHED_TOPIC: {
        message: "Mismatched topic.",
        code: 8
    },
    NON_CONFORMING_NAMESPACES: {
        message: "Non conforming namespaces.",
        code: 9
    }
};
function $1b92b6d978e01582$export$500d4c4a8fafe35(e, n) {
    const { message: t , code: r  } = $1b92b6d978e01582$var$Jn[e];
    return {
        message: n ? `${t} ${n}` : t,
        code: r
    };
}
function $1b92b6d978e01582$export$8203ef1531c8b5b5(e, n) {
    const { message: t , code: r  } = $1b92b6d978e01582$var$Wn[e];
    return {
        message: n ? `${t} ${n}` : t,
        code: r
    };
}
function $1b92b6d978e01582$export$41dd3d480aac4a71(e, n) {
    return Array.isArray(e) ? typeof n < "u" && e.length ? e.every(n) : !0 : !1;
}
function $1b92b6d978e01582$export$16a0268bc22b47b0(e) {
    return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
}
function $1b92b6d978e01582$export$fce6876652108ab(e) {
    return typeof e > "u";
}
function $1b92b6d978e01582$export$ee898ca48ab56c74(e, n) {
    return n && $1b92b6d978e01582$export$fce6876652108ab(e) ? !0 : typeof e == "string" && Boolean(e.trim().length);
}
function $1b92b6d978e01582$export$d6781b696a0576d1(e, n) {
    return n && $1b92b6d978e01582$export$fce6876652108ab(e) ? !0 : typeof e == "number" && !isNaN(e);
}
function $1b92b6d978e01582$export$6fc4971bf8f326a(e, n) {
    const { requiredNamespaces: t  } = n, r = Object.keys(e.namespaces), o = Object.keys(t);
    let s = !0;
    return $1b92b6d978e01582$export$1468a49de573f7f9(o, r) ? (r.forEach((i)=>{
        const { accounts: u , methods: f , events: g  } = e.namespaces[i], O = $1b92b6d978e01582$export$d46695d9c3664fe9(u), p = t[i];
        (!$1b92b6d978e01582$export$1468a49de573f7f9(p.chains, O) || !$1b92b6d978e01582$export$1468a49de573f7f9(p.methods, f) || !$1b92b6d978e01582$export$1468a49de573f7f9(p.events, g)) && (s = !1);
    }), s) : !1;
}
function $1b92b6d978e01582$export$e544b39f0a22e47a(e) {
    return $1b92b6d978e01582$export$ee898ca48ab56c74(e, !1) && e.includes(":") ? e.split(":").length === 2 : !1;
}
function $1b92b6d978e01582$export$49e4a5b6862e3c71(e) {
    if ($1b92b6d978e01582$export$ee898ca48ab56c74(e, !1) && e.includes(":")) {
        const n = e.split(":");
        if (n.length === 3) {
            const t = n[0] + ":" + n[1];
            return !!n[2] && $1b92b6d978e01582$export$e544b39f0a22e47a(t);
        }
    }
    return !1;
}
function $1b92b6d978e01582$export$bef94a5618bf18bf(e) {
    if ($1b92b6d978e01582$export$ee898ca48ab56c74(e, !1)) try {
        return typeof new URL(e) < "u";
    } catch  {
        return !1;
    }
    return !1;
}
function $1b92b6d978e01582$export$f657f7976bb2769d(e) {
    var n;
    return (n = e?.proposer) == null ? void 0 : n.publicKey;
}
function $1b92b6d978e01582$export$c96d5113768aaf5e(e) {
    return e?.topic;
}
function $1b92b6d978e01582$export$5e1c5c89613c213f(e, n) {
    let t = null;
    return $1b92b6d978e01582$export$ee898ca48ab56c74(e?.publicKey, !1) || (t = $1b92b6d978e01582$export$500d4c4a8fafe35("MISSING_OR_INVALID", `${n} controller public key should be a string`)), t;
}
function $1b92b6d978e01582$export$c12fced8176774f3(e) {
    let n = !0;
    return $1b92b6d978e01582$export$41dd3d480aac4a71(e) ? e.length && (n = e.every((t)=>$1b92b6d978e01582$export$ee898ca48ab56c74(t, !1))) : n = !1, n;
}
function $1b92b6d978e01582$export$df46c123d7e298ce(e, n, t) {
    let r = null;
    return $1b92b6d978e01582$export$41dd3d480aac4a71(n) ? n.forEach((o)=>{
        r || (!$1b92b6d978e01582$export$e544b39f0a22e47a(o) || !o.includes(e)) && (r = $1b92b6d978e01582$export$8203ef1531c8b5b5("UNSUPPORTED_CHAINS", `${t}, chain ${o} should be a string and conform to "namespace:chainId" format`));
    }) : r = $1b92b6d978e01582$export$8203ef1531c8b5b5("UNSUPPORTED_CHAINS", `${t}, chains ${n} should be an array of strings conforming to "namespace:chainId" format`), r;
}
function $1b92b6d978e01582$export$94ae96fb66f29e08(e, n) {
    let t = null;
    return Object.entries(e).forEach(([r, o])=>{
        if (t) return;
        const s = $1b92b6d978e01582$export$df46c123d7e298ce(r, o?.chains, `${n} requiredNamespace`);
        s && (t = s);
    }), t;
}
function $1b92b6d978e01582$export$d5644026aaffb9e7(e, n) {
    let t = null;
    return $1b92b6d978e01582$export$41dd3d480aac4a71(e) ? e.forEach((r)=>{
        t || $1b92b6d978e01582$export$49e4a5b6862e3c71(r) || (t = $1b92b6d978e01582$export$8203ef1531c8b5b5("UNSUPPORTED_ACCOUNTS", `${n}, account ${r} should be a string and conform to "namespace:chainId:address" format`));
    }) : t = $1b92b6d978e01582$export$8203ef1531c8b5b5("UNSUPPORTED_ACCOUNTS", `${n}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), t;
}
function $1b92b6d978e01582$export$2a2012e7bfa1cfb4(e, n) {
    let t = null;
    return Object.values(e).forEach((r)=>{
        if (t) return;
        const o = $1b92b6d978e01582$export$d5644026aaffb9e7(r?.accounts, `${n} namespace`);
        o && (t = o);
    }), t;
}
function $1b92b6d978e01582$export$b32541d63753af56(e, n) {
    let t = null;
    return $1b92b6d978e01582$export$c12fced8176774f3(e?.methods) ? $1b92b6d978e01582$export$c12fced8176774f3(e?.events) || (t = $1b92b6d978e01582$export$8203ef1531c8b5b5("UNSUPPORTED_EVENTS", `${n}, events should be an array of strings or empty array for no events`)) : t = $1b92b6d978e01582$export$8203ef1531c8b5b5("UNSUPPORTED_METHODS", `${n}, methods should be an array of strings or empty array for no methods`), t;
}
function $1b92b6d978e01582$export$27682c78deeca9d7(e, n) {
    let t = null;
    return Object.values(e).forEach((r)=>{
        if (t) return;
        const o = $1b92b6d978e01582$export$b32541d63753af56(r, `${n}, namespace`);
        o && (t = o);
    }), t;
}
function $1b92b6d978e01582$export$9e2b2cae22c6a8b3(e, n) {
    let t = null;
    if (e && $1b92b6d978e01582$export$16a0268bc22b47b0(e)) {
        const r = $1b92b6d978e01582$export$27682c78deeca9d7(e, n);
        r && (t = r);
        const o = $1b92b6d978e01582$export$94ae96fb66f29e08(e, n);
        o && (t = o);
    } else t = $1b92b6d978e01582$export$500d4c4a8fafe35("MISSING_OR_INVALID", `${n}, requiredNamespaces should be an object with data`);
    return t;
}
function $1b92b6d978e01582$export$93f7b81dc815a714(e, n) {
    let t = null;
    if (e && $1b92b6d978e01582$export$16a0268bc22b47b0(e)) {
        const r = $1b92b6d978e01582$export$27682c78deeca9d7(e, n);
        r && (t = r);
        const o = $1b92b6d978e01582$export$2a2012e7bfa1cfb4(e, n);
        o && (t = o);
    } else t = $1b92b6d978e01582$export$500d4c4a8fafe35("MISSING_OR_INVALID", `${n}, namespaces should be an object with data`);
    return t;
}
function $1b92b6d978e01582$export$1b3fc298be8c9a7b(e) {
    return $1b92b6d978e01582$export$ee898ca48ab56c74(e.protocol, !0);
}
function $1b92b6d978e01582$export$6294c30b976bd21e(e, n) {
    let t = !1;
    return n && !e ? t = !0 : e && $1b92b6d978e01582$export$41dd3d480aac4a71(e) && e.length && e.forEach((r)=>{
        t = $1b92b6d978e01582$export$1b3fc298be8c9a7b(r);
    }), t;
}
function $1b92b6d978e01582$export$53551be28ad5e34d(e) {
    return typeof e == "number";
}
function $1b92b6d978e01582$export$b3f5fcca1d210454(e) {
    return typeof e < "u" && true;
}
function $1b92b6d978e01582$export$766fe78377d96f2a(e) {
    return !(!e || typeof e != "object" || !e.code || !$1b92b6d978e01582$export$d6781b696a0576d1(e.code, !1) || !e.message || !$1b92b6d978e01582$export$ee898ca48ab56c74(e.message, !1));
}
function $1b92b6d978e01582$export$1a2af3c017fb6d42(e) {
    return !($1b92b6d978e01582$export$fce6876652108ab(e) || !$1b92b6d978e01582$export$ee898ca48ab56c74(e.method, !1));
}
function $1b92b6d978e01582$export$1ae38cf0a848f651(e) {
    return !($1b92b6d978e01582$export$fce6876652108ab(e) || $1b92b6d978e01582$export$fce6876652108ab(e.result) && $1b92b6d978e01582$export$fce6876652108ab(e.error) || !$1b92b6d978e01582$export$d6781b696a0576d1(e.id, !1) || !$1b92b6d978e01582$export$ee898ca48ab56c74(e.jsonrpc, !1));
}
function $1b92b6d978e01582$export$cbe4cdc5960cfa11(e) {
    return !($1b92b6d978e01582$export$fce6876652108ab(e) || !$1b92b6d978e01582$export$ee898ca48ab56c74(e.name, !1));
}
function $1b92b6d978e01582$export$144fc36610eb6522(e, n) {
    return !(!$1b92b6d978e01582$export$e544b39f0a22e47a(n) || !$1b92b6d978e01582$export$fb6db6038e742b14(e).includes(n));
}
function $1b92b6d978e01582$export$8db4804e3a6de711(e, n, t) {
    return $1b92b6d978e01582$export$ee898ca48ab56c74(t, !1) ? $1b92b6d978e01582$export$7dcf4808e17b15ac(e, n).includes(t) : !1;
}
function $1b92b6d978e01582$export$df2c67ef8baad16b(e, n, t) {
    return $1b92b6d978e01582$export$ee898ca48ab56c74(t, !1) ? $1b92b6d978e01582$export$94ee6d00e384a22(e, n).includes(t) : !1;
}
function $1b92b6d978e01582$export$ba5b0a4b585cd1b4(e, n, t) {
    let r = null;
    const o = Object.keys(e), s = Object.keys(n);
    return $1b92b6d978e01582$export$1468a49de573f7f9(o, s) ? o.forEach((i)=>{
        if (r) return;
        const u = e[i].chains, f = $1b92b6d978e01582$export$d46695d9c3664fe9(n[i].accounts);
        $1b92b6d978e01582$export$1468a49de573f7f9(u, f) ? $1b92b6d978e01582$export$1468a49de573f7f9(e[i].methods, n[i].methods) ? $1b92b6d978e01582$export$1468a49de573f7f9(e[i].events, n[i].events) || (r = $1b92b6d978e01582$export$500d4c4a8fafe35("NON_CONFORMING_NAMESPACES", `${t} namespaces events don't satisfy requiredNamespaces events for ${i}`)) : r = $1b92b6d978e01582$export$500d4c4a8fafe35("NON_CONFORMING_NAMESPACES", `${t} namespaces methods don't satisfy requiredNamespaces methods for ${i}`) : r = $1b92b6d978e01582$export$500d4c4a8fafe35("NON_CONFORMING_NAMESPACES", `${t} namespaces accounts don't satisfy requiredNamespaces chains for ${i}`);
    }) : r = $1b92b6d978e01582$export$500d4c4a8fafe35("NON_CONFORMING_NAMESPACES", `${t} namespaces keys don't satisfy requiredNamespaces`), r;
}
function $1b92b6d978e01582$export$59fba2af1ac782b(e, n) {
    return $1b92b6d978e01582$export$d6781b696a0576d1(e, !1) && e <= n.max && e >= n.min;
}

});
parcelRequire.register("3TRbz", function(module, exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $k8qmH = parcelRequire("k8qmH");

var $fGIMZ = parcelRequire("fGIMZ");

var $6n5DJ = parcelRequire("6n5DJ");

var $fC3Ge = parcelRequire("fC3Ge");

var $aFKYd = parcelRequire("aFKYd");
module.exports.KEY_LENGTH = 32;
module.exports.NONCE_LENGTH = 12;
module.exports.TAG_LENGTH = 16;
var $2d6fc3af26fcefba$var$ZEROS = new Uint8Array(16);
/**
 * ChaCha20-Poly1305 Authenticated Encryption with Associated Data.
 *
 * Defined in RFC7539.
 */ var $2d6fc3af26fcefba$var$ChaCha20Poly1305 = /** @class */ function() {
    /**
     * Creates a new instance with the given 32-byte key.
     */ function ChaCha20Poly1305(key) {
        this.nonceLength = module.exports.NONCE_LENGTH;
        this.tagLength = module.exports.TAG_LENGTH;
        if (key.length !== module.exports.KEY_LENGTH) throw new Error("ChaCha20Poly1305 needs 32-byte key");
        // Copy key.
        this._key = new Uint8Array(key);
    }
    /**
     * Encrypts and authenticates plaintext, authenticates associated data,
     * and returns sealed ciphertext, which includes authentication tag.
     *
     * RFC7539 specifies 12 bytes for nonce. It may be this 12-byte nonce
     * ("IV"), or full 16-byte counter (called "32-bit fixed-common part")
     * and nonce.
     *
     * If dst is given (it must be the size of plaintext + the size of tag
     * length) the result will be put into it. Dst and plaintext must not
     * overlap.
     */ ChaCha20Poly1305.prototype.seal = function(nonce, plaintext, associatedData, dst) {
        if (nonce.length > 16) throw new Error("ChaCha20Poly1305: incorrect nonce length");
        // Allocate space for counter, and set nonce as last bytes of it.
        var counter = new Uint8Array(16);
        counter.set(nonce, counter.length - nonce.length);
        // Generate authentication key by taking first 32-bytes of stream.
        // We pass full counter, which has 12-byte nonce and 4-byte block counter,
        // and it will get incremented after generating the block, which is
        // exactly what we need: we only use the first 32 bytes of 64-byte
        // ChaCha block and discard the next 32 bytes.
        var authKey = new Uint8Array(32);
        $k8qmH.stream(this._key, counter, authKey, 4);
        // Allocate space for sealed ciphertext.
        var resultLength = plaintext.length + this.tagLength;
        var result;
        if (dst) {
            if (dst.length !== resultLength) throw new Error("ChaCha20Poly1305: incorrect destination length");
            result = dst;
        } else result = new Uint8Array(resultLength);
        // Encrypt plaintext.
        $k8qmH.streamXOR(this._key, counter, plaintext, result, 4);
        // Authenticate.
        // XXX: can "simplify" here: pass full result (which is already padded
        // due to zeroes prepared for tag), and ciphertext length instead of
        // subarray of result.
        this._authenticate(result.subarray(result.length - this.tagLength, result.length), authKey, result.subarray(0, result.length - this.tagLength), associatedData);
        // Cleanup.
        $6n5DJ.wipe(counter);
        return result;
    };
    /**
     * Authenticates sealed ciphertext (which includes authentication tag) and
     * associated data, decrypts ciphertext and returns decrypted plaintext.
     *
     * RFC7539 specifies 12 bytes for nonce. It may be this 12-byte nonce
     * ("IV"), or full 16-byte counter (called "32-bit fixed-common part")
     * and nonce.
     *
     * If authentication fails, it returns null.
     *
     * If dst is given (it must be of ciphertext length minus tag length),
     * the result will be put into it. Dst and plaintext must not overlap.
     */ ChaCha20Poly1305.prototype.open = function(nonce, sealed, associatedData, dst) {
        if (nonce.length > 16) throw new Error("ChaCha20Poly1305: incorrect nonce length");
        // Sealed ciphertext should at least contain tag.
        if (sealed.length < this.tagLength) // TODO(dchest): should we throw here instead?
        return null;
        // Allocate space for counter, and set nonce as last bytes of it.
        var counter = new Uint8Array(16);
        counter.set(nonce, counter.length - nonce.length);
        // Generate authentication key by taking first 32-bytes of stream.
        var authKey = new Uint8Array(32);
        $k8qmH.stream(this._key, counter, authKey, 4);
        // Authenticate.
        // XXX: can simplify and avoid allocation: since authenticate()
        // already allocates tag (from Poly1305.digest(), it can return)
        // it instead of copying to calculatedTag. But then in seal()
        // we'll need to copy it.
        var calculatedTag = new Uint8Array(this.tagLength);
        this._authenticate(calculatedTag, authKey, sealed.subarray(0, sealed.length - this.tagLength), associatedData);
        // Constant-time compare tags and return null if they differ.
        if (!$aFKYd.equal(calculatedTag, sealed.subarray(sealed.length - this.tagLength, sealed.length))) return null;
        // Allocate space for decrypted plaintext.
        var resultLength = sealed.length - this.tagLength;
        var result;
        if (dst) {
            if (dst.length !== resultLength) throw new Error("ChaCha20Poly1305: incorrect destination length");
            result = dst;
        } else result = new Uint8Array(resultLength);
        // Decrypt.
        $k8qmH.streamXOR(this._key, counter, sealed.subarray(0, sealed.length - this.tagLength), result, 4);
        // Cleanup.
        $6n5DJ.wipe(counter);
        return result;
    };
    ChaCha20Poly1305.prototype.clean = function() {
        $6n5DJ.wipe(this._key);
        return this;
    };
    ChaCha20Poly1305.prototype._authenticate = function(tagOut, authKey, ciphertext, associatedData) {
        // Initialize Poly1305 with authKey.
        var h = new $fGIMZ.Poly1305(authKey);
        // Authenticate padded associated data.
        if (associatedData) {
            h.update(associatedData);
            if (associatedData.length % 16 > 0) h.update($2d6fc3af26fcefba$var$ZEROS.subarray(associatedData.length % 16));
        }
        // Authenticate padded ciphertext.
        h.update(ciphertext);
        if (ciphertext.length % 16 > 0) h.update($2d6fc3af26fcefba$var$ZEROS.subarray(ciphertext.length % 16));
        // Authenticate length of associated data.
        // XXX: can avoid allocation here?
        var length = new Uint8Array(8);
        if (associatedData) $fC3Ge.writeUint64LE(associatedData.length, length);
        h.update(length);
        // Authenticate length of ciphertext.
        $fC3Ge.writeUint64LE(ciphertext.length, length);
        h.update(length);
        // Get tag and copy it into tagOut.
        var tag = h.digest();
        for(var i = 0; i < tag.length; i++)tagOut[i] = tag[i];
        // Cleanup.
        h.clean();
        $6n5DJ.wipe(tag);
        $6n5DJ.wipe(length);
    };
    return ChaCha20Poly1305;
}();
module.exports.ChaCha20Poly1305 = $2d6fc3af26fcefba$var$ChaCha20Poly1305;

});
parcelRequire.register("k8qmH", function(module, exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $fC3Ge = parcelRequire("fC3Ge");

var $6n5DJ = parcelRequire("6n5DJ");
// Number of ChaCha rounds (ChaCha20).
var $ea8901942d597fa7$var$ROUNDS = 20;
// Applies the ChaCha core function to 16-byte input,
// 32-byte key key, and puts the result into 64-byte array out.
function $ea8901942d597fa7$var$core(out, input, key) {
    var j0 = 0x61707865; // "expa"  -- ChaCha's "sigma" constant
    var j1 = 0x3320646E; // "nd 3"     for 32-byte keys
    var j2 = 0x79622D32; // "2-by"
    var j3 = 0x6B206574; // "te k"
    var j4 = key[3] << 24 | key[2] << 16 | key[1] << 8 | key[0];
    var j5 = key[7] << 24 | key[6] << 16 | key[5] << 8 | key[4];
    var j6 = key[11] << 24 | key[10] << 16 | key[9] << 8 | key[8];
    var j7 = key[15] << 24 | key[14] << 16 | key[13] << 8 | key[12];
    var j8 = key[19] << 24 | key[18] << 16 | key[17] << 8 | key[16];
    var j9 = key[23] << 24 | key[22] << 16 | key[21] << 8 | key[20];
    var j10 = key[27] << 24 | key[26] << 16 | key[25] << 8 | key[24];
    var j11 = key[31] << 24 | key[30] << 16 | key[29] << 8 | key[28];
    var j12 = input[3] << 24 | input[2] << 16 | input[1] << 8 | input[0];
    var j13 = input[7] << 24 | input[6] << 16 | input[5] << 8 | input[4];
    var j14 = input[11] << 24 | input[10] << 16 | input[9] << 8 | input[8];
    var j15 = input[15] << 24 | input[14] << 16 | input[13] << 8 | input[12];
    var x0 = j0;
    var x1 = j1;
    var x2 = j2;
    var x3 = j3;
    var x4 = j4;
    var x5 = j5;
    var x6 = j6;
    var x7 = j7;
    var x8 = j8;
    var x9 = j9;
    var x10 = j10;
    var x11 = j11;
    var x12 = j12;
    var x13 = j13;
    var x14 = j14;
    var x15 = j15;
    for(var i = 0; i < $ea8901942d597fa7$var$ROUNDS; i += 2){
        x0 = x0 + x4 | 0;
        x12 ^= x0;
        x12 = x12 >>> 16 | x12 << 16;
        x8 = x8 + x12 | 0;
        x4 ^= x8;
        x4 = x4 >>> 20 | x4 << 12;
        x1 = x1 + x5 | 0;
        x13 ^= x1;
        x13 = x13 >>> 16 | x13 << 16;
        x9 = x9 + x13 | 0;
        x5 ^= x9;
        x5 = x5 >>> 20 | x5 << 12;
        x2 = x2 + x6 | 0;
        x14 ^= x2;
        x14 = x14 >>> 16 | x14 << 16;
        x10 = x10 + x14 | 0;
        x6 ^= x10;
        x6 = x6 >>> 20 | x6 << 12;
        x3 = x3 + x7 | 0;
        x15 ^= x3;
        x15 = x15 >>> 16 | x15 << 16;
        x11 = x11 + x15 | 0;
        x7 ^= x11;
        x7 = x7 >>> 20 | x7 << 12;
        x2 = x2 + x6 | 0;
        x14 ^= x2;
        x14 = x14 >>> 24 | x14 << 8;
        x10 = x10 + x14 | 0;
        x6 ^= x10;
        x6 = x6 >>> 25 | x6 << 7;
        x3 = x3 + x7 | 0;
        x15 ^= x3;
        x15 = x15 >>> 24 | x15 << 8;
        x11 = x11 + x15 | 0;
        x7 ^= x11;
        x7 = x7 >>> 25 | x7 << 7;
        x1 = x1 + x5 | 0;
        x13 ^= x1;
        x13 = x13 >>> 24 | x13 << 8;
        x9 = x9 + x13 | 0;
        x5 ^= x9;
        x5 = x5 >>> 25 | x5 << 7;
        x0 = x0 + x4 | 0;
        x12 ^= x0;
        x12 = x12 >>> 24 | x12 << 8;
        x8 = x8 + x12 | 0;
        x4 ^= x8;
        x4 = x4 >>> 25 | x4 << 7;
        x0 = x0 + x5 | 0;
        x15 ^= x0;
        x15 = x15 >>> 16 | x15 << 16;
        x10 = x10 + x15 | 0;
        x5 ^= x10;
        x5 = x5 >>> 20 | x5 << 12;
        x1 = x1 + x6 | 0;
        x12 ^= x1;
        x12 = x12 >>> 16 | x12 << 16;
        x11 = x11 + x12 | 0;
        x6 ^= x11;
        x6 = x6 >>> 20 | x6 << 12;
        x2 = x2 + x7 | 0;
        x13 ^= x2;
        x13 = x13 >>> 16 | x13 << 16;
        x8 = x8 + x13 | 0;
        x7 ^= x8;
        x7 = x7 >>> 20 | x7 << 12;
        x3 = x3 + x4 | 0;
        x14 ^= x3;
        x14 = x14 >>> 16 | x14 << 16;
        x9 = x9 + x14 | 0;
        x4 ^= x9;
        x4 = x4 >>> 20 | x4 << 12;
        x2 = x2 + x7 | 0;
        x13 ^= x2;
        x13 = x13 >>> 24 | x13 << 8;
        x8 = x8 + x13 | 0;
        x7 ^= x8;
        x7 = x7 >>> 25 | x7 << 7;
        x3 = x3 + x4 | 0;
        x14 ^= x3;
        x14 = x14 >>> 24 | x14 << 8;
        x9 = x9 + x14 | 0;
        x4 ^= x9;
        x4 = x4 >>> 25 | x4 << 7;
        x1 = x1 + x6 | 0;
        x12 ^= x1;
        x12 = x12 >>> 24 | x12 << 8;
        x11 = x11 + x12 | 0;
        x6 ^= x11;
        x6 = x6 >>> 25 | x6 << 7;
        x0 = x0 + x5 | 0;
        x15 ^= x0;
        x15 = x15 >>> 24 | x15 << 8;
        x10 = x10 + x15 | 0;
        x5 ^= x10;
        x5 = x5 >>> 25 | x5 << 7;
    }
    $fC3Ge.writeUint32LE(x0 + j0 | 0, out, 0);
    $fC3Ge.writeUint32LE(x1 + j1 | 0, out, 4);
    $fC3Ge.writeUint32LE(x2 + j2 | 0, out, 8);
    $fC3Ge.writeUint32LE(x3 + j3 | 0, out, 12);
    $fC3Ge.writeUint32LE(x4 + j4 | 0, out, 16);
    $fC3Ge.writeUint32LE(x5 + j5 | 0, out, 20);
    $fC3Ge.writeUint32LE(x6 + j6 | 0, out, 24);
    $fC3Ge.writeUint32LE(x7 + j7 | 0, out, 28);
    $fC3Ge.writeUint32LE(x8 + j8 | 0, out, 32);
    $fC3Ge.writeUint32LE(x9 + j9 | 0, out, 36);
    $fC3Ge.writeUint32LE(x10 + j10 | 0, out, 40);
    $fC3Ge.writeUint32LE(x11 + j11 | 0, out, 44);
    $fC3Ge.writeUint32LE(x12 + j12 | 0, out, 48);
    $fC3Ge.writeUint32LE(x13 + j13 | 0, out, 52);
    $fC3Ge.writeUint32LE(x14 + j14 | 0, out, 56);
    $fC3Ge.writeUint32LE(x15 + j15 | 0, out, 60);
}
/**
 * Encrypt src with ChaCha20 stream generated for the given 32-byte key and
 * 8-byte (as in original implementation) or 12-byte (as in RFC7539) nonce and
 * write the result into dst and return it.
 *
 * dst and src may be the same, but otherwise must not overlap.
 *
 * If nonce is 12 bytes, users should not encrypt more than 256 GiB with the
 * same key and nonce, otherwise the stream will repeat. The function will
 * throw error if counter overflows to prevent this.
 *
 * If nonce is 8 bytes, the output is practically unlimited (2^70 bytes, which
 * is more than a million petabytes). However, it is not recommended to
 * generate 8-byte nonces randomly, as the chance of collision is high.
 *
 * Never use the same key and nonce to encrypt more than one message.
 *
 * If nonceInplaceCounterLength is not 0, the nonce is assumed to be a 16-byte
 * array with stream counter in first nonceInplaceCounterLength bytes and nonce
 * in the last remaining bytes. The counter will be incremented inplace for
 * each ChaCha block. This is useful if you need to encrypt one stream of data
 * in chunks.
 */ function $ea8901942d597fa7$var$streamXOR(key, nonce, src, dst, nonceInplaceCounterLength) {
    if (nonceInplaceCounterLength === void 0) nonceInplaceCounterLength = 0;
    // We only support 256-bit keys.
    if (key.length !== 32) throw new Error("ChaCha: key size must be 32 bytes");
    if (dst.length < src.length) throw new Error("ChaCha: destination is shorter than source");
    var nc;
    var counterLength;
    if (nonceInplaceCounterLength === 0) {
        if (nonce.length !== 8 && nonce.length !== 12) throw new Error("ChaCha nonce must be 8 or 12 bytes");
        nc = new Uint8Array(16);
        // First counterLength bytes of nc are counter, starting with zero.
        counterLength = nc.length - nonce.length;
        // Last bytes of nc after counterLength are nonce, set them.
        nc.set(nonce, counterLength);
    } else {
        if (nonce.length !== 16) throw new Error("ChaCha nonce with counter must be 16 bytes");
        // This will update passed nonce with counter inplace.
        nc = nonce;
        counterLength = nonceInplaceCounterLength;
    }
    // Allocate temporary space for ChaCha block.
    var block = new Uint8Array(64);
    for(var i = 0; i < src.length; i += 64){
        // Generate a block.
        $ea8901942d597fa7$var$core(block, nc, key);
        // XOR block bytes with src into dst.
        for(var j = i; j < i + 64 && j < src.length; j++)dst[j] = src[j] ^ block[j - i];
        // Increment counter.
        $ea8901942d597fa7$var$incrementCounter(nc, 0, counterLength);
    }
    // Cleanup temporary space.
    $6n5DJ.wipe(block);
    if (nonceInplaceCounterLength === 0) // Cleanup counter.
    $6n5DJ.wipe(nc);
    return dst;
}
module.exports.streamXOR = $ea8901942d597fa7$var$streamXOR;
/**
 * Generate ChaCha20 stream for the given 32-byte key and 8-byte or 12-byte
 * nonce and write it into dst and return it.
 *
 * Never use the same key and nonce to generate more than one stream.
 *
 * If nonceInplaceCounterLength is not 0, it behaves the same with respect to
 * the nonce as described in the streamXOR documentation.
 *
 * stream is like streamXOR with all-zero src.
 */ function $ea8901942d597fa7$var$stream(key, nonce, dst, nonceInplaceCounterLength) {
    if (nonceInplaceCounterLength === void 0) nonceInplaceCounterLength = 0;
    $6n5DJ.wipe(dst);
    return $ea8901942d597fa7$var$streamXOR(key, nonce, dst, dst, nonceInplaceCounterLength);
}
module.exports.stream = $ea8901942d597fa7$var$stream;
function $ea8901942d597fa7$var$incrementCounter(counter, pos, len) {
    var carry = 1;
    while(len--){
        carry = carry + (counter[pos] & 0xff) | 0;
        counter[pos] = carry & 0xff;
        carry >>>= 8;
        pos++;
    }
    if (carry > 0) throw new Error("ChaCha: counter overflow");
}

});

parcelRequire.register("fGIMZ", function(module, exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $aFKYd = parcelRequire("aFKYd");

var $6n5DJ = parcelRequire("6n5DJ");
module.exports.DIGEST_LENGTH = 16;
// Port of Andrew Moon's Poly1305-donna-16. Public domain.
// https://github.com/floodyberry/poly1305-donna
/**
 * Poly1305 computes 16-byte authenticator of message using
 * a one-time 32-byte key.
 *
 * Important: key should be used for only one message,
 * it should never repeat.
 */ var $b6bd8576447967a8$var$Poly1305 = /** @class */ function() {
    function Poly1305(key) {
        this.digestLength = module.exports.DIGEST_LENGTH;
        this._buffer = new Uint8Array(16);
        this._r = new Uint16Array(10);
        this._h = new Uint16Array(10);
        this._pad = new Uint16Array(8);
        this._leftover = 0;
        this._fin = 0;
        this._finished = false;
        var t0 = key[0] | key[1] << 8;
        this._r[0] = t0 & 0x1fff;
        var t1 = key[2] | key[3] << 8;
        this._r[1] = (t0 >>> 13 | t1 << 3) & 0x1fff;
        var t2 = key[4] | key[5] << 8;
        this._r[2] = (t1 >>> 10 | t2 << 6) & 0x1f03;
        var t3 = key[6] | key[7] << 8;
        this._r[3] = (t2 >>> 7 | t3 << 9) & 0x1fff;
        var t4 = key[8] | key[9] << 8;
        this._r[4] = (t3 >>> 4 | t4 << 12) & 0x00ff;
        this._r[5] = t4 >>> 1 & 0x1ffe;
        var t5 = key[10] | key[11] << 8;
        this._r[6] = (t4 >>> 14 | t5 << 2) & 0x1fff;
        var t6 = key[12] | key[13] << 8;
        this._r[7] = (t5 >>> 11 | t6 << 5) & 0x1f81;
        var t7 = key[14] | key[15] << 8;
        this._r[8] = (t6 >>> 8 | t7 << 8) & 0x1fff;
        this._r[9] = t7 >>> 5 & 0x007f;
        this._pad[0] = key[16] | key[17] << 8;
        this._pad[1] = key[18] | key[19] << 8;
        this._pad[2] = key[20] | key[21] << 8;
        this._pad[3] = key[22] | key[23] << 8;
        this._pad[4] = key[24] | key[25] << 8;
        this._pad[5] = key[26] | key[27] << 8;
        this._pad[6] = key[28] | key[29] << 8;
        this._pad[7] = key[30] | key[31] << 8;
    }
    Poly1305.prototype._blocks = function(m, mpos, bytes) {
        var hibit = this._fin ? 0 : 2048;
        var h0 = this._h[0], h1 = this._h[1], h2 = this._h[2], h3 = this._h[3], h4 = this._h[4], h5 = this._h[5], h6 = this._h[6], h7 = this._h[7], h8 = this._h[8], h9 = this._h[9];
        var r0 = this._r[0], r1 = this._r[1], r2 = this._r[2], r3 = this._r[3], r4 = this._r[4], r5 = this._r[5], r6 = this._r[6], r7 = this._r[7], r8 = this._r[8], r9 = this._r[9];
        while(bytes >= 16){
            var t0 = m[mpos + 0] | m[mpos + 1] << 8;
            h0 += t0 & 0x1fff;
            var t1 = m[mpos + 2] | m[mpos + 3] << 8;
            h1 += (t0 >>> 13 | t1 << 3) & 0x1fff;
            var t2 = m[mpos + 4] | m[mpos + 5] << 8;
            h2 += (t1 >>> 10 | t2 << 6) & 0x1fff;
            var t3 = m[mpos + 6] | m[mpos + 7] << 8;
            h3 += (t2 >>> 7 | t3 << 9) & 0x1fff;
            var t4 = m[mpos + 8] | m[mpos + 9] << 8;
            h4 += (t3 >>> 4 | t4 << 12) & 0x1fff;
            h5 += t4 >>> 1 & 0x1fff;
            var t5 = m[mpos + 10] | m[mpos + 11] << 8;
            h6 += (t4 >>> 14 | t5 << 2) & 0x1fff;
            var t6 = m[mpos + 12] | m[mpos + 13] << 8;
            h7 += (t5 >>> 11 | t6 << 5) & 0x1fff;
            var t7 = m[mpos + 14] | m[mpos + 15] << 8;
            h8 += (t6 >>> 8 | t7 << 8) & 0x1fff;
            h9 += t7 >>> 5 | hibit;
            var c = 0;
            var d0 = c;
            d0 += h0 * r0;
            d0 += h1 * (5 * r9);
            d0 += h2 * (5 * r8);
            d0 += h3 * (5 * r7);
            d0 += h4 * (5 * r6);
            c = d0 >>> 13;
            d0 &= 0x1fff;
            d0 += h5 * (5 * r5);
            d0 += h6 * (5 * r4);
            d0 += h7 * (5 * r3);
            d0 += h8 * (5 * r2);
            d0 += h9 * (5 * r1);
            c += d0 >>> 13;
            d0 &= 0x1fff;
            var d1 = c;
            d1 += h0 * r1;
            d1 += h1 * r0;
            d1 += h2 * (5 * r9);
            d1 += h3 * (5 * r8);
            d1 += h4 * (5 * r7);
            c = d1 >>> 13;
            d1 &= 0x1fff;
            d1 += h5 * (5 * r6);
            d1 += h6 * (5 * r5);
            d1 += h7 * (5 * r4);
            d1 += h8 * (5 * r3);
            d1 += h9 * (5 * r2);
            c += d1 >>> 13;
            d1 &= 0x1fff;
            var d2 = c;
            d2 += h0 * r2;
            d2 += h1 * r1;
            d2 += h2 * r0;
            d2 += h3 * (5 * r9);
            d2 += h4 * (5 * r8);
            c = d2 >>> 13;
            d2 &= 0x1fff;
            d2 += h5 * (5 * r7);
            d2 += h6 * (5 * r6);
            d2 += h7 * (5 * r5);
            d2 += h8 * (5 * r4);
            d2 += h9 * (5 * r3);
            c += d2 >>> 13;
            d2 &= 0x1fff;
            var d3 = c;
            d3 += h0 * r3;
            d3 += h1 * r2;
            d3 += h2 * r1;
            d3 += h3 * r0;
            d3 += h4 * (5 * r9);
            c = d3 >>> 13;
            d3 &= 0x1fff;
            d3 += h5 * (5 * r8);
            d3 += h6 * (5 * r7);
            d3 += h7 * (5 * r6);
            d3 += h8 * (5 * r5);
            d3 += h9 * (5 * r4);
            c += d3 >>> 13;
            d3 &= 0x1fff;
            var d4 = c;
            d4 += h0 * r4;
            d4 += h1 * r3;
            d4 += h2 * r2;
            d4 += h3 * r1;
            d4 += h4 * r0;
            c = d4 >>> 13;
            d4 &= 0x1fff;
            d4 += h5 * (5 * r9);
            d4 += h6 * (5 * r8);
            d4 += h7 * (5 * r7);
            d4 += h8 * (5 * r6);
            d4 += h9 * (5 * r5);
            c += d4 >>> 13;
            d4 &= 0x1fff;
            var d5 = c;
            d5 += h0 * r5;
            d5 += h1 * r4;
            d5 += h2 * r3;
            d5 += h3 * r2;
            d5 += h4 * r1;
            c = d5 >>> 13;
            d5 &= 0x1fff;
            d5 += h5 * r0;
            d5 += h6 * (5 * r9);
            d5 += h7 * (5 * r8);
            d5 += h8 * (5 * r7);
            d5 += h9 * (5 * r6);
            c += d5 >>> 13;
            d5 &= 0x1fff;
            var d6 = c;
            d6 += h0 * r6;
            d6 += h1 * r5;
            d6 += h2 * r4;
            d6 += h3 * r3;
            d6 += h4 * r2;
            c = d6 >>> 13;
            d6 &= 0x1fff;
            d6 += h5 * r1;
            d6 += h6 * r0;
            d6 += h7 * (5 * r9);
            d6 += h8 * (5 * r8);
            d6 += h9 * (5 * r7);
            c += d6 >>> 13;
            d6 &= 0x1fff;
            var d7 = c;
            d7 += h0 * r7;
            d7 += h1 * r6;
            d7 += h2 * r5;
            d7 += h3 * r4;
            d7 += h4 * r3;
            c = d7 >>> 13;
            d7 &= 0x1fff;
            d7 += h5 * r2;
            d7 += h6 * r1;
            d7 += h7 * r0;
            d7 += h8 * (5 * r9);
            d7 += h9 * (5 * r8);
            c += d7 >>> 13;
            d7 &= 0x1fff;
            var d8 = c;
            d8 += h0 * r8;
            d8 += h1 * r7;
            d8 += h2 * r6;
            d8 += h3 * r5;
            d8 += h4 * r4;
            c = d8 >>> 13;
            d8 &= 0x1fff;
            d8 += h5 * r3;
            d8 += h6 * r2;
            d8 += h7 * r1;
            d8 += h8 * r0;
            d8 += h9 * (5 * r9);
            c += d8 >>> 13;
            d8 &= 0x1fff;
            var d9 = c;
            d9 += h0 * r9;
            d9 += h1 * r8;
            d9 += h2 * r7;
            d9 += h3 * r6;
            d9 += h4 * r5;
            c = d9 >>> 13;
            d9 &= 0x1fff;
            d9 += h5 * r4;
            d9 += h6 * r3;
            d9 += h7 * r2;
            d9 += h8 * r1;
            d9 += h9 * r0;
            c += d9 >>> 13;
            d9 &= 0x1fff;
            c = (c << 2) + c | 0;
            c = c + d0 | 0;
            d0 = c & 0x1fff;
            c = c >>> 13;
            d1 += c;
            h0 = d0;
            h1 = d1;
            h2 = d2;
            h3 = d3;
            h4 = d4;
            h5 = d5;
            h6 = d6;
            h7 = d7;
            h8 = d8;
            h9 = d9;
            mpos += 16;
            bytes -= 16;
        }
        this._h[0] = h0;
        this._h[1] = h1;
        this._h[2] = h2;
        this._h[3] = h3;
        this._h[4] = h4;
        this._h[5] = h5;
        this._h[6] = h6;
        this._h[7] = h7;
        this._h[8] = h8;
        this._h[9] = h9;
    };
    Poly1305.prototype.finish = function(mac, macpos) {
        if (macpos === void 0) macpos = 0;
        var g = new Uint16Array(10);
        var c;
        var mask;
        var f;
        var i;
        if (this._leftover) {
            i = this._leftover;
            this._buffer[i++] = 1;
            for(; i < 16; i++)this._buffer[i] = 0;
            this._fin = 1;
            this._blocks(this._buffer, 0, 16);
        }
        c = this._h[1] >>> 13;
        this._h[1] &= 0x1fff;
        for(i = 2; i < 10; i++){
            this._h[i] += c;
            c = this._h[i] >>> 13;
            this._h[i] &= 0x1fff;
        }
        this._h[0] += c * 5;
        c = this._h[0] >>> 13;
        this._h[0] &= 0x1fff;
        this._h[1] += c;
        c = this._h[1] >>> 13;
        this._h[1] &= 0x1fff;
        this._h[2] += c;
        g[0] = this._h[0] + 5;
        c = g[0] >>> 13;
        g[0] &= 0x1fff;
        for(i = 1; i < 10; i++){
            g[i] = this._h[i] + c;
            c = g[i] >>> 13;
            g[i] &= 0x1fff;
        }
        g[9] -= 8192;
        mask = (c ^ 1) - 1;
        for(i = 0; i < 10; i++)g[i] &= mask;
        mask = ~mask;
        for(i = 0; i < 10; i++)this._h[i] = this._h[i] & mask | g[i];
        this._h[0] = (this._h[0] | this._h[1] << 13) & 0xffff;
        this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 0xffff;
        this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 0xffff;
        this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 0xffff;
        this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 0xffff;
        this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 0xffff;
        this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 0xffff;
        this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 0xffff;
        f = this._h[0] + this._pad[0];
        this._h[0] = f & 0xffff;
        for(i = 1; i < 8; i++){
            f = (this._h[i] + this._pad[i] | 0) + (f >>> 16) | 0;
            this._h[i] = f & 0xffff;
        }
        mac[macpos + 0] = this._h[0] >>> 0;
        mac[macpos + 1] = this._h[0] >>> 8;
        mac[macpos + 2] = this._h[1] >>> 0;
        mac[macpos + 3] = this._h[1] >>> 8;
        mac[macpos + 4] = this._h[2] >>> 0;
        mac[macpos + 5] = this._h[2] >>> 8;
        mac[macpos + 6] = this._h[3] >>> 0;
        mac[macpos + 7] = this._h[3] >>> 8;
        mac[macpos + 8] = this._h[4] >>> 0;
        mac[macpos + 9] = this._h[4] >>> 8;
        mac[macpos + 10] = this._h[5] >>> 0;
        mac[macpos + 11] = this._h[5] >>> 8;
        mac[macpos + 12] = this._h[6] >>> 0;
        mac[macpos + 13] = this._h[6] >>> 8;
        mac[macpos + 14] = this._h[7] >>> 0;
        mac[macpos + 15] = this._h[7] >>> 8;
        this._finished = true;
        return this;
    };
    Poly1305.prototype.update = function(m) {
        var mpos = 0;
        var bytes = m.length;
        var want;
        if (this._leftover) {
            want = 16 - this._leftover;
            if (want > bytes) want = bytes;
            for(var i = 0; i < want; i++)this._buffer[this._leftover + i] = m[mpos + i];
            bytes -= want;
            mpos += want;
            this._leftover += want;
            if (this._leftover < 16) return this;
            this._blocks(this._buffer, 0, 16);
            this._leftover = 0;
        }
        if (bytes >= 16) {
            want = bytes - bytes % 16;
            this._blocks(m, mpos, want);
            mpos += want;
            bytes -= want;
        }
        if (bytes) {
            for(var i = 0; i < bytes; i++)this._buffer[this._leftover + i] = m[mpos + i];
            this._leftover += bytes;
        }
        return this;
    };
    Poly1305.prototype.digest = function() {
        // TODO(dchest): it behaves differently than other hashes/HMAC,
        // because it throws when finished — others just return saved result.
        if (this._finished) throw new Error("Poly1305 was finished");
        var mac = new Uint8Array(16);
        this.finish(mac);
        return mac;
    };
    Poly1305.prototype.clean = function() {
        $6n5DJ.wipe(this._buffer);
        $6n5DJ.wipe(this._r);
        $6n5DJ.wipe(this._h);
        $6n5DJ.wipe(this._pad);
        this._leftover = 0;
        this._fin = 0;
        this._finished = true; // mark as finished even if not
        return this;
    };
    return Poly1305;
}();
module.exports.Poly1305 = $b6bd8576447967a8$var$Poly1305;
/**
 * Returns 16-byte authenticator of data using a one-time 32-byte key.
 *
 * Important: key should be used for only one message, it should never repeat.
 */ function $b6bd8576447967a8$var$oneTimeAuth(key, data) {
    var h = new $b6bd8576447967a8$var$Poly1305(key);
    h.update(data);
    var digest = h.digest();
    h.clean();
    return digest;
}
module.exports.oneTimeAuth = $b6bd8576447967a8$var$oneTimeAuth;
/**
 * Returns true if two authenticators are 16-byte long and equal.
 * Uses contant-time comparison to avoid leaking timing information.
 */ function $b6bd8576447967a8$var$equal(a, b) {
    if (a.length !== module.exports.DIGEST_LENGTH || b.length !== module.exports.DIGEST_LENGTH) return false;
    return $aFKYd.equal(a, b);
}
module.exports.equal = $b6bd8576447967a8$var$equal;

});
parcelRequire.register("aFKYd", function(module, exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
/**
 * Package constant-time provides functions for performing algorithmically constant-time operations.
 */ /**
 * NOTE! Due to the inability to guarantee real constant time evaluation of
 * anything in JavaScript VM, this is module is the best effort.
 */ /**
 * Returns resultIfOne if subject is 1, or resultIfZero if subject is 0.
 *
 * Supports only 32-bit integers, so resultIfOne or resultIfZero are not
 * integers, they'll be converted to them with bitwise operations.
 */ function $7c522b05da4bf53d$var$select(subject, resultIfOne, resultIfZero) {
    return ~(subject - 1) & resultIfOne | subject - 1 & resultIfZero;
}
module.exports.select = $7c522b05da4bf53d$var$select;
/**
 * Returns 1 if a <= b, or 0 if not.
 * Arguments must be positive 32-bit integers less than or equal to 2^31 - 1.
 */ function $7c522b05da4bf53d$var$lessOrEqual(a, b) {
    return (a | 0) - (b | 0) - 1 >>> 31 & 1;
}
module.exports.lessOrEqual = $7c522b05da4bf53d$var$lessOrEqual;
/**
 * Returns 1 if a and b are of equal length and their contents
 * are equal, or 0 otherwise.
 *
 * Note that unlike in equal(), zero-length inputs are considered
 * the same, so this function will return 1.
 */ function $7c522b05da4bf53d$var$compare(a, b) {
    if (a.length !== b.length) return 0;
    var result = 0;
    for(var i = 0; i < a.length; i++)result |= a[i] ^ b[i];
    return 1 & result - 1 >>> 8;
}
module.exports.compare = $7c522b05da4bf53d$var$compare;
/**
 * Returns true if a and b are of equal non-zero length,
 * and their contents are equal, or false otherwise.
 *
 * Note that unlike in compare() zero-length inputs are considered
 * _not_ equal, so this function will return false.
 */ function $7c522b05da4bf53d$var$equal(a, b) {
    if (a.length === 0 || b.length === 0) return false;
    return $7c522b05da4bf53d$var$compare(a, b) !== 0;
}
module.exports.equal = $7c522b05da4bf53d$var$equal;

});



parcelRequire.register("5E4JY", function(module, exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $9DeJL = parcelRequire("9DeJL");

var $6n5DJ = parcelRequire("6n5DJ");
/**
 * HMAC-based Extract-and-Expand Key Derivation Function.
 *
 * Implements HKDF from RFC5869.
 *
 * Expands the given master key with salt and info into
 * a limited stream of key material.
 */ var $41c45d8f2c03faee$var$HKDF = /** @class */ function() {
    /**
     * Create a new HKDF instance for the given hash function
     * with the master key, optional salt, and info.
     *
     * - Master key is a high-entropy secret key (not a password).
     * - Salt is a non-secret random value.
     * - Info is application- and/or context-specific information.
     */ function HKDF(hash, key, salt, info) {
        if (salt === void 0) salt = new Uint8Array(0);
        this._counter = new Uint8Array(1); // starts with zero
        this._hash = hash;
        this._info = info;
        // HKDF-Extract uses salt as HMAC key, and key as data.
        var okm = $9DeJL.hmac(this._hash, salt, key);
        // Initialize HMAC for expanding with extracted key.
        this._hmac = new $9DeJL.HMAC(hash, okm);
        // Allocate buffer.
        this._buffer = new Uint8Array(this._hmac.digestLength);
        this._bufpos = this._buffer.length;
    }
    // Fill buffer with new block of HKDF-Extract output.
    HKDF.prototype._fillBuffer = function() {
        // Increment counter.
        this._counter[0]++;
        var ctr = this._counter[0];
        // Check if counter overflowed.
        if (ctr === 0) throw new Error("hkdf: cannot expand more");
        // Prepare HMAC instance for new data with old key.
        this._hmac.reset();
        // Hash in previous output if it was generated
        // (i.e. counter is greater than 1).
        if (ctr > 1) this._hmac.update(this._buffer);
        // Hash in info if it exists.
        if (this._info) this._hmac.update(this._info);
        // Hash in the counter.
        this._hmac.update(this._counter);
        // Output result to buffer and clean HMAC instance.
        this._hmac.finish(this._buffer);
        // Reset buffer position.
        this._bufpos = 0;
    };
    /**
     * Expand returns next key material of the given length.
     *
     * It throws if expansion limit is reached (which is
     * 254 digests of the underlying HMAC function).
     */ HKDF.prototype.expand = function(length) {
        var out = new Uint8Array(length);
        for(var i = 0; i < out.length; i++){
            if (this._bufpos === this._buffer.length) this._fillBuffer();
            out[i] = this._buffer[this._bufpos++];
        }
        return out;
    };
    HKDF.prototype.clean = function() {
        this._hmac.clean();
        $6n5DJ.wipe(this._buffer);
        $6n5DJ.wipe(this._counter);
        this._bufpos = 0;
    };
    return HKDF;
}();
module.exports.HKDF = $41c45d8f2c03faee$var$HKDF; // TODO(dchest): maybe implement deriveKey?

});
parcelRequire.register("9DeJL", function(module, exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $fUjGR = parcelRequire("fUjGR");

var $aFKYd = parcelRequire("aFKYd");

var $6n5DJ = parcelRequire("6n5DJ");
/**
 *  HMAC implements hash-based message authentication algorithm.
 */ var $7033300e78f3bbf4$var$HMAC = /** @class */ function() {
    /**
     * Constructs a new HMAC with the given Hash and secret key.
     */ function HMAC(hash, key) {
        this._finished = false; // true if HMAC was finalized
        // Initialize inner and outer hashes.
        this._inner = new hash();
        this._outer = new hash();
        // Set block and digest sizes for this HMAC
        // instance to values from the hash.
        this.blockSize = this._outer.blockSize;
        this.digestLength = this._outer.digestLength;
        // Pad temporary stores a key (or its hash) padded with zeroes.
        var pad = new Uint8Array(this.blockSize);
        if (key.length > this.blockSize) // If key is bigger than hash block size, it must be
        // hashed and this hash is used as a key instead.
        this._inner.update(key).finish(pad).clean();
        else // Otherwise, copy the key into pad.
        pad.set(key);
        // Now two different keys are derived from padded key
        // by xoring a different byte value to each.
        // To make inner hash key, xor byte 0x36 into pad.
        for(var i = 0; i < pad.length; i++)pad[i] ^= 0x36;
        // Update inner hash with the result.
        this._inner.update(pad);
        // To make outer hash key, xor byte 0x5c into pad.
        // But since we already xored 0x36 there, we must
        // first undo this by xoring it again.
        for(var i = 0; i < pad.length; i++)pad[i] ^= 106;
        // Update outer hash with the result.
        this._outer.update(pad);
        // Save states of both hashes, so that we can quickly restore
        // them later in reset() without the need to remember the actual
        // key and perform this initialization again.
        if ($fUjGR.isSerializableHash(this._inner) && $fUjGR.isSerializableHash(this._outer)) {
            this._innerKeyedState = this._inner.saveState();
            this._outerKeyedState = this._outer.saveState();
        }
        // Clean pad.
        $6n5DJ.wipe(pad);
    }
    /**
     * Returns HMAC state to the state initialized with key
     * to make it possible to run HMAC over the other data with the same
     * key without creating a new instance.
     */ HMAC.prototype.reset = function() {
        if (!$fUjGR.isSerializableHash(this._inner) || !$fUjGR.isSerializableHash(this._outer)) throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
        // Restore keyed states of inner and outer hashes.
        this._inner.restoreState(this._innerKeyedState);
        this._outer.restoreState(this._outerKeyedState);
        this._finished = false;
        return this;
    };
    /**
     * Cleans HMAC state.
     */ HMAC.prototype.clean = function() {
        if ($fUjGR.isSerializableHash(this._inner)) this._inner.cleanSavedState(this._innerKeyedState);
        if ($fUjGR.isSerializableHash(this._outer)) this._outer.cleanSavedState(this._outerKeyedState);
        this._inner.clean();
        this._outer.clean();
    };
    /**
     * Updates state with provided data.
     */ HMAC.prototype.update = function(data) {
        this._inner.update(data);
        return this;
    };
    /**
     * Finalizes HMAC and puts the result in out.
     */ HMAC.prototype.finish = function(out) {
        if (this._finished) {
            // If HMAC was finalized, outer hash is also finalized,
            // so it produces the same digest it produced when it
            // was finalized.
            this._outer.finish(out);
            return this;
        }
        // Finalize inner hash and store the result temporarily.
        this._inner.finish(out);
        // Update outer hash with digest of inner hash and and finalize it.
        this._outer.update(out.subarray(0, this.digestLength)).finish(out);
        this._finished = true;
        return this;
    };
    /**
     * Returns the computed message authentication code.
     */ HMAC.prototype.digest = function() {
        var out = new Uint8Array(this.digestLength);
        this.finish(out);
        return out;
    };
    /**
     * Saves HMAC state.
     * This function is needed for PBKDF2 optimization.
     */ HMAC.prototype.saveState = function() {
        if (!$fUjGR.isSerializableHash(this._inner)) throw new Error("hmac: can't saveState() because hash doesn't implement it");
        return this._inner.saveState();
    };
    HMAC.prototype.restoreState = function(savedState) {
        if (!$fUjGR.isSerializableHash(this._inner) || !$fUjGR.isSerializableHash(this._outer)) throw new Error("hmac: can't restoreState() because hash doesn't implement it");
        this._inner.restoreState(savedState);
        this._outer.restoreState(this._outerKeyedState);
        this._finished = false;
        return this;
    };
    HMAC.prototype.cleanSavedState = function(savedState) {
        if (!$fUjGR.isSerializableHash(this._inner)) throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
        this._inner.cleanSavedState(savedState);
    };
    return HMAC;
}();
module.exports.HMAC = $7033300e78f3bbf4$var$HMAC;
/**
 * Returns HMAC using the given hash constructor for the key over data.
 */ function $7033300e78f3bbf4$var$hmac(hash, key, data) {
    var h = new $7033300e78f3bbf4$var$HMAC(hash, key);
    h.update(data);
    var digest = h.digest();
    h.clean();
    return digest;
}
module.exports.hmac = $7033300e78f3bbf4$var$hmac;
/**
 * Returns true if two HMAC digests are equal.
 * Uses constant-time comparison to avoid leaking timing information.
 *
 * Example:
 *
 *    const receivedDigest = ...
 *    const realDigest = hmac(SHA256, key, data);
 *    if (!equal(receivedDigest, realDigest)) {
 *        throw new Error("Authentication error");
 *    }
 */ module.exports.equal = $aFKYd.equal;

});
parcelRequire.register("fUjGR", function(module, exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
function $b94b5c0cbbc4557e$var$isSerializableHash(h) {
    return typeof h.saveState !== "undefined" && typeof h.restoreState !== "undefined" && typeof h.cleanSavedState !== "undefined";
}
module.exports.isSerializableHash = $b94b5c0cbbc4557e$var$isSerializableHash; // TODO(dchest): figure out the standardized interface for XOF such as
 // SHAKE and BLAKE2X.

});



parcelRequire.register("46Gtt", function(module, exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $fC3Ge = parcelRequire("fC3Ge");

var $6n5DJ = parcelRequire("6n5DJ");
module.exports.DIGEST_LENGTH = 32;
module.exports.BLOCK_SIZE = 64;
/**
 * SHA2-256 cryptographic hash algorithm.
 */ var $2fd8ab7d62c08c64$var$SHA256 = /** @class */ function() {
    function SHA256() {
        /** Length of hash output */ this.digestLength = module.exports.DIGEST_LENGTH;
        /** Block size */ this.blockSize = module.exports.BLOCK_SIZE;
        // Note: Int32Array is used instead of Uint32Array for performance reasons.
        this._state = new Int32Array(8); // hash state
        this._temp = new Int32Array(64); // temporary state
        this._buffer = new Uint8Array(128); // buffer for data to hash
        this._bufferLength = 0; // number of bytes in buffer
        this._bytesHashed = 0; // number of total bytes hashed
        this._finished = false; // indicates whether the hash was finalized
        this.reset();
    }
    SHA256.prototype._initState = function() {
        this._state[0] = 0x6a09e667;
        this._state[1] = 0xbb67ae85;
        this._state[2] = 0x3c6ef372;
        this._state[3] = 0xa54ff53a;
        this._state[4] = 0x510e527f;
        this._state[5] = 0x9b05688c;
        this._state[6] = 0x1f83d9ab;
        this._state[7] = 0x5be0cd19;
    };
    /**
     * Resets hash state making it possible
     * to re-use this instance to hash other data.
     */ SHA256.prototype.reset = function() {
        this._initState();
        this._bufferLength = 0;
        this._bytesHashed = 0;
        this._finished = false;
        return this;
    };
    /**
     * Cleans internal buffers and resets hash state.
     */ SHA256.prototype.clean = function() {
        $6n5DJ.wipe(this._buffer);
        $6n5DJ.wipe(this._temp);
        this.reset();
    };
    /**
     * Updates hash state with the given data.
     *
     * Throws error when trying to update already finalized hash:
     * instance must be reset to update it again.
     */ SHA256.prototype.update = function(data, dataLength) {
        if (dataLength === void 0) dataLength = data.length;
        if (this._finished) throw new Error("SHA256: can't update because hash was finished.");
        var dataPos = 0;
        this._bytesHashed += dataLength;
        if (this._bufferLength > 0) {
            while(this._bufferLength < this.blockSize && dataLength > 0){
                this._buffer[this._bufferLength++] = data[dataPos++];
                dataLength--;
            }
            if (this._bufferLength === this.blockSize) {
                $2fd8ab7d62c08c64$var$hashBlocks(this._temp, this._state, this._buffer, 0, this.blockSize);
                this._bufferLength = 0;
            }
        }
        if (dataLength >= this.blockSize) {
            dataPos = $2fd8ab7d62c08c64$var$hashBlocks(this._temp, this._state, data, dataPos, dataLength);
            dataLength %= this.blockSize;
        }
        while(dataLength > 0){
            this._buffer[this._bufferLength++] = data[dataPos++];
            dataLength--;
        }
        return this;
    };
    /**
     * Finalizes hash state and puts hash into out.
     * If hash was already finalized, puts the same value.
     */ SHA256.prototype.finish = function(out) {
        if (!this._finished) {
            var bytesHashed = this._bytesHashed;
            var left = this._bufferLength;
            var bitLenHi = bytesHashed / 0x20000000 | 0;
            var bitLenLo = bytesHashed << 3;
            var padLength = bytesHashed % 64 < 56 ? 64 : 128;
            this._buffer[left] = 0x80;
            for(var i = left + 1; i < padLength - 8; i++)this._buffer[i] = 0;
            $fC3Ge.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
            $fC3Ge.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
            $2fd8ab7d62c08c64$var$hashBlocks(this._temp, this._state, this._buffer, 0, padLength);
            this._finished = true;
        }
        for(var i = 0; i < this.digestLength / 4; i++)$fC3Ge.writeUint32BE(this._state[i], out, i * 4);
        return this;
    };
    /**
     * Returns the final hash digest.
     */ SHA256.prototype.digest = function() {
        var out = new Uint8Array(this.digestLength);
        this.finish(out);
        return out;
    };
    /**
     * Function useful for HMAC/PBKDF2 optimization.
     * Returns hash state to be used with restoreState().
     * Only chain value is saved, not buffers or other
     * state variables.
     */ SHA256.prototype.saveState = function() {
        if (this._finished) throw new Error("SHA256: cannot save finished state");
        return {
            state: new Int32Array(this._state),
            buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : undefined,
            bufferLength: this._bufferLength,
            bytesHashed: this._bytesHashed
        };
    };
    /**
     * Function useful for HMAC/PBKDF2 optimization.
     * Restores state saved by saveState() and sets bytesHashed
     * to the given value.
     */ SHA256.prototype.restoreState = function(savedState) {
        this._state.set(savedState.state);
        this._bufferLength = savedState.bufferLength;
        if (savedState.buffer) this._buffer.set(savedState.buffer);
        this._bytesHashed = savedState.bytesHashed;
        this._finished = false;
        return this;
    };
    /**
     * Cleans state returned by saveState().
     */ SHA256.prototype.cleanSavedState = function(savedState) {
        $6n5DJ.wipe(savedState.state);
        if (savedState.buffer) $6n5DJ.wipe(savedState.buffer);
        savedState.bufferLength = 0;
        savedState.bytesHashed = 0;
    };
    return SHA256;
}();
module.exports.SHA256 = $2fd8ab7d62c08c64$var$SHA256;
// Constants
var $2fd8ab7d62c08c64$var$K = new Int32Array([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);
function $2fd8ab7d62c08c64$var$hashBlocks(w, v, p, pos, len) {
    while(len >= 64){
        var a = v[0];
        var b = v[1];
        var c = v[2];
        var d = v[3];
        var e = v[4];
        var f = v[5];
        var g = v[6];
        var h = v[7];
        for(var i = 0; i < 16; i++){
            var j = pos + i * 4;
            w[i] = $fC3Ge.readUint32BE(p, j);
        }
        for(var i = 16; i < 64; i++){
            var u = w[i - 2];
            var t1 = (u >>> 17 | u << 15) ^ (u >>> 19 | u << 13) ^ u >>> 10;
            u = w[i - 15];
            var t2 = (u >>> 7 | u << 25) ^ (u >>> 18 | u << 14) ^ u >>> 3;
            w[i] = (t1 + w[i - 7] | 0) + (t2 + w[i - 16] | 0);
        }
        for(var i = 0; i < 64; i++){
            var t1 = (((e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7)) + (e & f ^ ~e & g) | 0) + (h + ($2fd8ab7d62c08c64$var$K[i] + w[i] | 0) | 0) | 0;
            var t2 = ((a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10)) + (a & b ^ a & c ^ b & c) | 0;
            h = g;
            g = f;
            f = e;
            e = d + t1 | 0;
            d = c;
            c = b;
            b = a;
            a = t1 + t2 | 0;
        }
        v[0] += a;
        v[1] += b;
        v[2] += c;
        v[3] += d;
        v[4] += e;
        v[5] += f;
        v[6] += g;
        v[7] += h;
        pos += 64;
        len -= 64;
    }
    return pos;
}
function $2fd8ab7d62c08c64$var$hash(data) {
    var h = new $2fd8ab7d62c08c64$var$SHA256();
    h.update(data);
    var digest = h.digest();
    h.clean();
    return digest;
}
module.exports.hash = $2fd8ab7d62c08c64$var$hash;

});

parcelRequire.register("2FSze", function(module, exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.sharedKey = module.exports.generateKeyPair = module.exports.generateKeyPairFromSeed = module.exports.scalarMultBase = module.exports.scalarMult = module.exports.SHARED_KEY_LENGTH = module.exports.SECRET_KEY_LENGTH = module.exports.PUBLIC_KEY_LENGTH = void 0;

var $2SEZb = parcelRequire("2SEZb");

var $6n5DJ = parcelRequire("6n5DJ");
module.exports.PUBLIC_KEY_LENGTH = 32;
module.exports.SECRET_KEY_LENGTH = 32;
module.exports.SHARED_KEY_LENGTH = 32;
// Returns new zero-filled 16-element GF (Float64Array).
// If passed an array of numbers, prefills the returned
// array with them.
//
// We use Float64Array, because we need 48-bit numbers
// for this implementation.
function $1f29bd0bc9564780$var$gf(init) {
    const r = new Float64Array(16);
    if (init) for(let i = 0; i < init.length; i++)r[i] = init[i];
    return r;
}
// Base point.
const $1f29bd0bc9564780$var$_9 = new Uint8Array(32);
$1f29bd0bc9564780$var$_9[0] = 9;
const $1f29bd0bc9564780$var$_121665 = $1f29bd0bc9564780$var$gf([
    0xdb41,
    1
]);
function $1f29bd0bc9564780$var$car25519(o) {
    let c = 1;
    for(let i = 0; i < 16; i++){
        let v = o[i] + c + 65535;
        c = Math.floor(v / 65536);
        o[i] = v - c * 65536;
    }
    o[0] += c - 1 + 37 * (c - 1);
}
function $1f29bd0bc9564780$var$sel25519(p, q, b) {
    const c = ~(b - 1);
    for(let i = 0; i < 16; i++){
        const t = c & (p[i] ^ q[i]);
        p[i] ^= t;
        q[i] ^= t;
    }
}
function $1f29bd0bc9564780$var$pack25519(o, n) {
    const m = $1f29bd0bc9564780$var$gf();
    const t = $1f29bd0bc9564780$var$gf();
    for(let i = 0; i < 16; i++)t[i] = n[i];
    $1f29bd0bc9564780$var$car25519(t);
    $1f29bd0bc9564780$var$car25519(t);
    $1f29bd0bc9564780$var$car25519(t);
    for(let j = 0; j < 2; j++){
        m[0] = t[0] - 0xffed;
        for(let i = 1; i < 15; i++){
            m[i] = t[i] - 0xffff - (m[i - 1] >> 16 & 1);
            m[i - 1] &= 0xffff;
        }
        m[15] = t[15] - 0x7fff - (m[14] >> 16 & 1);
        const b = m[15] >> 16 & 1;
        m[14] &= 0xffff;
        $1f29bd0bc9564780$var$sel25519(t, m, 1 - b);
    }
    for(let i = 0; i < 16; i++){
        o[2 * i] = t[i] & 0xff;
        o[2 * i + 1] = t[i] >> 8;
    }
}
function $1f29bd0bc9564780$var$unpack25519(o, n) {
    for(let i = 0; i < 16; i++)o[i] = n[2 * i] + (n[2 * i + 1] << 8);
    o[15] &= 0x7fff;
}
function $1f29bd0bc9564780$var$add(o, a, b) {
    for(let i = 0; i < 16; i++)o[i] = a[i] + b[i];
}
function $1f29bd0bc9564780$var$sub(o, a, b) {
    for(let i = 0; i < 16; i++)o[i] = a[i] - b[i];
}
function $1f29bd0bc9564780$var$mul(o, a, b) {
    let v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
    v = a[0];
    t0 += v * b0;
    t1 += v * b1;
    t2 += v * b2;
    t3 += v * b3;
    t4 += v * b4;
    t5 += v * b5;
    t6 += v * b6;
    t7 += v * b7;
    t8 += v * b8;
    t9 += v * b9;
    t10 += v * b10;
    t11 += v * b11;
    t12 += v * b12;
    t13 += v * b13;
    t14 += v * b14;
    t15 += v * b15;
    v = a[1];
    t1 += v * b0;
    t2 += v * b1;
    t3 += v * b2;
    t4 += v * b3;
    t5 += v * b4;
    t6 += v * b5;
    t7 += v * b6;
    t8 += v * b7;
    t9 += v * b8;
    t10 += v * b9;
    t11 += v * b10;
    t12 += v * b11;
    t13 += v * b12;
    t14 += v * b13;
    t15 += v * b14;
    t16 += v * b15;
    v = a[2];
    t2 += v * b0;
    t3 += v * b1;
    t4 += v * b2;
    t5 += v * b3;
    t6 += v * b4;
    t7 += v * b5;
    t8 += v * b6;
    t9 += v * b7;
    t10 += v * b8;
    t11 += v * b9;
    t12 += v * b10;
    t13 += v * b11;
    t14 += v * b12;
    t15 += v * b13;
    t16 += v * b14;
    t17 += v * b15;
    v = a[3];
    t3 += v * b0;
    t4 += v * b1;
    t5 += v * b2;
    t6 += v * b3;
    t7 += v * b4;
    t8 += v * b5;
    t9 += v * b6;
    t10 += v * b7;
    t11 += v * b8;
    t12 += v * b9;
    t13 += v * b10;
    t14 += v * b11;
    t15 += v * b12;
    t16 += v * b13;
    t17 += v * b14;
    t18 += v * b15;
    v = a[4];
    t4 += v * b0;
    t5 += v * b1;
    t6 += v * b2;
    t7 += v * b3;
    t8 += v * b4;
    t9 += v * b5;
    t10 += v * b6;
    t11 += v * b7;
    t12 += v * b8;
    t13 += v * b9;
    t14 += v * b10;
    t15 += v * b11;
    t16 += v * b12;
    t17 += v * b13;
    t18 += v * b14;
    t19 += v * b15;
    v = a[5];
    t5 += v * b0;
    t6 += v * b1;
    t7 += v * b2;
    t8 += v * b3;
    t9 += v * b4;
    t10 += v * b5;
    t11 += v * b6;
    t12 += v * b7;
    t13 += v * b8;
    t14 += v * b9;
    t15 += v * b10;
    t16 += v * b11;
    t17 += v * b12;
    t18 += v * b13;
    t19 += v * b14;
    t20 += v * b15;
    v = a[6];
    t6 += v * b0;
    t7 += v * b1;
    t8 += v * b2;
    t9 += v * b3;
    t10 += v * b4;
    t11 += v * b5;
    t12 += v * b6;
    t13 += v * b7;
    t14 += v * b8;
    t15 += v * b9;
    t16 += v * b10;
    t17 += v * b11;
    t18 += v * b12;
    t19 += v * b13;
    t20 += v * b14;
    t21 += v * b15;
    v = a[7];
    t7 += v * b0;
    t8 += v * b1;
    t9 += v * b2;
    t10 += v * b3;
    t11 += v * b4;
    t12 += v * b5;
    t13 += v * b6;
    t14 += v * b7;
    t15 += v * b8;
    t16 += v * b9;
    t17 += v * b10;
    t18 += v * b11;
    t19 += v * b12;
    t20 += v * b13;
    t21 += v * b14;
    t22 += v * b15;
    v = a[8];
    t8 += v * b0;
    t9 += v * b1;
    t10 += v * b2;
    t11 += v * b3;
    t12 += v * b4;
    t13 += v * b5;
    t14 += v * b6;
    t15 += v * b7;
    t16 += v * b8;
    t17 += v * b9;
    t18 += v * b10;
    t19 += v * b11;
    t20 += v * b12;
    t21 += v * b13;
    t22 += v * b14;
    t23 += v * b15;
    v = a[9];
    t9 += v * b0;
    t10 += v * b1;
    t11 += v * b2;
    t12 += v * b3;
    t13 += v * b4;
    t14 += v * b5;
    t15 += v * b6;
    t16 += v * b7;
    t17 += v * b8;
    t18 += v * b9;
    t19 += v * b10;
    t20 += v * b11;
    t21 += v * b12;
    t22 += v * b13;
    t23 += v * b14;
    t24 += v * b15;
    v = a[10];
    t10 += v * b0;
    t11 += v * b1;
    t12 += v * b2;
    t13 += v * b3;
    t14 += v * b4;
    t15 += v * b5;
    t16 += v * b6;
    t17 += v * b7;
    t18 += v * b8;
    t19 += v * b9;
    t20 += v * b10;
    t21 += v * b11;
    t22 += v * b12;
    t23 += v * b13;
    t24 += v * b14;
    t25 += v * b15;
    v = a[11];
    t11 += v * b0;
    t12 += v * b1;
    t13 += v * b2;
    t14 += v * b3;
    t15 += v * b4;
    t16 += v * b5;
    t17 += v * b6;
    t18 += v * b7;
    t19 += v * b8;
    t20 += v * b9;
    t21 += v * b10;
    t22 += v * b11;
    t23 += v * b12;
    t24 += v * b13;
    t25 += v * b14;
    t26 += v * b15;
    v = a[12];
    t12 += v * b0;
    t13 += v * b1;
    t14 += v * b2;
    t15 += v * b3;
    t16 += v * b4;
    t17 += v * b5;
    t18 += v * b6;
    t19 += v * b7;
    t20 += v * b8;
    t21 += v * b9;
    t22 += v * b10;
    t23 += v * b11;
    t24 += v * b12;
    t25 += v * b13;
    t26 += v * b14;
    t27 += v * b15;
    v = a[13];
    t13 += v * b0;
    t14 += v * b1;
    t15 += v * b2;
    t16 += v * b3;
    t17 += v * b4;
    t18 += v * b5;
    t19 += v * b6;
    t20 += v * b7;
    t21 += v * b8;
    t22 += v * b9;
    t23 += v * b10;
    t24 += v * b11;
    t25 += v * b12;
    t26 += v * b13;
    t27 += v * b14;
    t28 += v * b15;
    v = a[14];
    t14 += v * b0;
    t15 += v * b1;
    t16 += v * b2;
    t17 += v * b3;
    t18 += v * b4;
    t19 += v * b5;
    t20 += v * b6;
    t21 += v * b7;
    t22 += v * b8;
    t23 += v * b9;
    t24 += v * b10;
    t25 += v * b11;
    t26 += v * b12;
    t27 += v * b13;
    t28 += v * b14;
    t29 += v * b15;
    v = a[15];
    t15 += v * b0;
    t16 += v * b1;
    t17 += v * b2;
    t18 += v * b3;
    t19 += v * b4;
    t20 += v * b5;
    t21 += v * b6;
    t22 += v * b7;
    t23 += v * b8;
    t24 += v * b9;
    t25 += v * b10;
    t26 += v * b11;
    t27 += v * b12;
    t28 += v * b13;
    t29 += v * b14;
    t30 += v * b15;
    t0 += 38 * t16;
    t1 += 38 * t17;
    t2 += 38 * t18;
    t3 += 38 * t19;
    t4 += 38 * t20;
    t5 += 38 * t21;
    t6 += 38 * t22;
    t7 += 38 * t23;
    t8 += 38 * t24;
    t9 += 38 * t25;
    t10 += 38 * t26;
    t11 += 38 * t27;
    t12 += 38 * t28;
    t13 += 38 * t29;
    t14 += 38 * t30;
    // t15 left as is
    // first car
    c = 1;
    v = t0 + c + 65535;
    c = Math.floor(v / 65536);
    t0 = v - c * 65536;
    v = t1 + c + 65535;
    c = Math.floor(v / 65536);
    t1 = v - c * 65536;
    v = t2 + c + 65535;
    c = Math.floor(v / 65536);
    t2 = v - c * 65536;
    v = t3 + c + 65535;
    c = Math.floor(v / 65536);
    t3 = v - c * 65536;
    v = t4 + c + 65535;
    c = Math.floor(v / 65536);
    t4 = v - c * 65536;
    v = t5 + c + 65535;
    c = Math.floor(v / 65536);
    t5 = v - c * 65536;
    v = t6 + c + 65535;
    c = Math.floor(v / 65536);
    t6 = v - c * 65536;
    v = t7 + c + 65535;
    c = Math.floor(v / 65536);
    t7 = v - c * 65536;
    v = t8 + c + 65535;
    c = Math.floor(v / 65536);
    t8 = v - c * 65536;
    v = t9 + c + 65535;
    c = Math.floor(v / 65536);
    t9 = v - c * 65536;
    v = t10 + c + 65535;
    c = Math.floor(v / 65536);
    t10 = v - c * 65536;
    v = t11 + c + 65535;
    c = Math.floor(v / 65536);
    t11 = v - c * 65536;
    v = t12 + c + 65535;
    c = Math.floor(v / 65536);
    t12 = v - c * 65536;
    v = t13 + c + 65535;
    c = Math.floor(v / 65536);
    t13 = v - c * 65536;
    v = t14 + c + 65535;
    c = Math.floor(v / 65536);
    t14 = v - c * 65536;
    v = t15 + c + 65535;
    c = Math.floor(v / 65536);
    t15 = v - c * 65536;
    t0 += c - 1 + 37 * (c - 1);
    // second car
    c = 1;
    v = t0 + c + 65535;
    c = Math.floor(v / 65536);
    t0 = v - c * 65536;
    v = t1 + c + 65535;
    c = Math.floor(v / 65536);
    t1 = v - c * 65536;
    v = t2 + c + 65535;
    c = Math.floor(v / 65536);
    t2 = v - c * 65536;
    v = t3 + c + 65535;
    c = Math.floor(v / 65536);
    t3 = v - c * 65536;
    v = t4 + c + 65535;
    c = Math.floor(v / 65536);
    t4 = v - c * 65536;
    v = t5 + c + 65535;
    c = Math.floor(v / 65536);
    t5 = v - c * 65536;
    v = t6 + c + 65535;
    c = Math.floor(v / 65536);
    t6 = v - c * 65536;
    v = t7 + c + 65535;
    c = Math.floor(v / 65536);
    t7 = v - c * 65536;
    v = t8 + c + 65535;
    c = Math.floor(v / 65536);
    t8 = v - c * 65536;
    v = t9 + c + 65535;
    c = Math.floor(v / 65536);
    t9 = v - c * 65536;
    v = t10 + c + 65535;
    c = Math.floor(v / 65536);
    t10 = v - c * 65536;
    v = t11 + c + 65535;
    c = Math.floor(v / 65536);
    t11 = v - c * 65536;
    v = t12 + c + 65535;
    c = Math.floor(v / 65536);
    t12 = v - c * 65536;
    v = t13 + c + 65535;
    c = Math.floor(v / 65536);
    t13 = v - c * 65536;
    v = t14 + c + 65535;
    c = Math.floor(v / 65536);
    t14 = v - c * 65536;
    v = t15 + c + 65535;
    c = Math.floor(v / 65536);
    t15 = v - c * 65536;
    t0 += c - 1 + 37 * (c - 1);
    o[0] = t0;
    o[1] = t1;
    o[2] = t2;
    o[3] = t3;
    o[4] = t4;
    o[5] = t5;
    o[6] = t6;
    o[7] = t7;
    o[8] = t8;
    o[9] = t9;
    o[10] = t10;
    o[11] = t11;
    o[12] = t12;
    o[13] = t13;
    o[14] = t14;
    o[15] = t15;
}
function $1f29bd0bc9564780$var$square(o, a) {
    $1f29bd0bc9564780$var$mul(o, a, a);
}
function $1f29bd0bc9564780$var$inv25519(o, inp) {
    const c = $1f29bd0bc9564780$var$gf();
    for(let i = 0; i < 16; i++)c[i] = inp[i];
    for(let i = 253; i >= 0; i--){
        $1f29bd0bc9564780$var$square(c, c);
        if (i !== 2 && i !== 4) $1f29bd0bc9564780$var$mul(c, c, inp);
    }
    for(let i = 0; i < 16; i++)o[i] = c[i];
}
function $1f29bd0bc9564780$var$scalarMult(n, p) {
    const z = new Uint8Array(32);
    const x = new Float64Array(80);
    const a = $1f29bd0bc9564780$var$gf(), b = $1f29bd0bc9564780$var$gf(), c = $1f29bd0bc9564780$var$gf(), d = $1f29bd0bc9564780$var$gf(), e = $1f29bd0bc9564780$var$gf(), f = $1f29bd0bc9564780$var$gf();
    for(let i = 0; i < 31; i++)z[i] = n[i];
    z[31] = n[31] & 127 | 64;
    z[0] &= 248;
    $1f29bd0bc9564780$var$unpack25519(x, p);
    for(let i = 0; i < 16; i++)b[i] = x[i];
    a[0] = d[0] = 1;
    for(let i = 254; i >= 0; --i){
        const r = z[i >>> 3] >>> (i & 7) & 1;
        $1f29bd0bc9564780$var$sel25519(a, b, r);
        $1f29bd0bc9564780$var$sel25519(c, d, r);
        $1f29bd0bc9564780$var$add(e, a, c);
        $1f29bd0bc9564780$var$sub(a, a, c);
        $1f29bd0bc9564780$var$add(c, b, d);
        $1f29bd0bc9564780$var$sub(b, b, d);
        $1f29bd0bc9564780$var$square(d, e);
        $1f29bd0bc9564780$var$square(f, a);
        $1f29bd0bc9564780$var$mul(a, c, a);
        $1f29bd0bc9564780$var$mul(c, b, e);
        $1f29bd0bc9564780$var$add(e, a, c);
        $1f29bd0bc9564780$var$sub(a, a, c);
        $1f29bd0bc9564780$var$square(b, a);
        $1f29bd0bc9564780$var$sub(c, d, f);
        $1f29bd0bc9564780$var$mul(a, c, $1f29bd0bc9564780$var$_121665);
        $1f29bd0bc9564780$var$add(a, a, d);
        $1f29bd0bc9564780$var$mul(c, c, a);
        $1f29bd0bc9564780$var$mul(a, d, f);
        $1f29bd0bc9564780$var$mul(d, b, x);
        $1f29bd0bc9564780$var$square(b, e);
        $1f29bd0bc9564780$var$sel25519(a, b, r);
        $1f29bd0bc9564780$var$sel25519(c, d, r);
    }
    for(let i = 0; i < 16; i++){
        x[i + 16] = a[i];
        x[i + 32] = c[i];
        x[i + 48] = b[i];
        x[i + 64] = d[i];
    }
    const x32 = x.subarray(32);
    const x16 = x.subarray(16);
    $1f29bd0bc9564780$var$inv25519(x32, x32);
    $1f29bd0bc9564780$var$mul(x16, x16, x32);
    const q = new Uint8Array(32);
    $1f29bd0bc9564780$var$pack25519(q, x16);
    return q;
}
module.exports.scalarMult = $1f29bd0bc9564780$var$scalarMult;
function $1f29bd0bc9564780$var$scalarMultBase(n) {
    return $1f29bd0bc9564780$var$scalarMult(n, $1f29bd0bc9564780$var$_9);
}
module.exports.scalarMultBase = $1f29bd0bc9564780$var$scalarMultBase;
function $1f29bd0bc9564780$var$generateKeyPairFromSeed(seed) {
    if (seed.length !== module.exports.SECRET_KEY_LENGTH) throw new Error(`x25519: seed must be ${module.exports.SECRET_KEY_LENGTH} bytes`);
    const secretKey = new Uint8Array(seed);
    const publicKey = $1f29bd0bc9564780$var$scalarMultBase(secretKey);
    return {
        publicKey: publicKey,
        secretKey: secretKey
    };
}
module.exports.generateKeyPairFromSeed = $1f29bd0bc9564780$var$generateKeyPairFromSeed;
function $1f29bd0bc9564780$var$generateKeyPair(prng) {
    const seed = (0, $2SEZb.randomBytes)(32, prng);
    const result = $1f29bd0bc9564780$var$generateKeyPairFromSeed(seed);
    (0, $6n5DJ.wipe)(seed);
    return result;
}
module.exports.generateKeyPair = $1f29bd0bc9564780$var$generateKeyPair;
/**
 * Returns a shared key between our secret key and a peer's public key.
 *
 * Throws an error if the given keys are of wrong length.
 *
 * If rejectZero is true throws if the calculated shared key is all-zero.
 * From RFC 7748:
 *
 * > Protocol designers using Diffie-Hellman over the curves defined in
 * > this document must not assume "contributory behavior".  Specially,
 * > contributory behavior means that both parties' private keys
 * > contribute to the resulting shared key.  Since curve25519 and
 * > curve448 have cofactors of 8 and 4 (respectively), an input point of
 * > small order will eliminate any contribution from the other party's
 * > private key.  This situation can be detected by checking for the all-
 * > zero output, which implementations MAY do, as specified in Section 6.
 * > However, a large number of existing implementations do not do this.
 *
 * IMPORTANT: the returned key is a raw result of scalar multiplication.
 * To use it as a key material, hash it with a cryptographic hash function.
 */ function $1f29bd0bc9564780$var$sharedKey(mySecretKey, theirPublicKey, rejectZero = false) {
    if (mySecretKey.length !== module.exports.PUBLIC_KEY_LENGTH) throw new Error("X25519: incorrect secret key length");
    if (theirPublicKey.length !== module.exports.PUBLIC_KEY_LENGTH) throw new Error("X25519: incorrect public key length");
    const result = $1f29bd0bc9564780$var$scalarMult(mySecretKey, theirPublicKey);
    if (rejectZero) {
        let zeros = 0;
        for(let i = 0; i < result.length; i++)zeros |= result[i];
        if (zeros === 0) throw new Error("X25519: invalid shared key");
    }
    return result;
}
module.exports.sharedKey = $1f29bd0bc9564780$var$sharedKey;

});

parcelRequire.register("6yXrI", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $lAwFh = parcelRequire("lAwFh");

var $lRrMK = parcelRequire("lRrMK");

var $5WWq8 = parcelRequire("5WWq8");

var $khrnE = parcelRequire("khrnE");

var $eDZ6G = parcelRequire("eDZ6G");

var $29jpH = parcelRequire("29jpH");
module.exports.compare = $lAwFh.compare;
module.exports.concat = $lRrMK.concat;
module.exports.equals = $5WWq8.equals;
module.exports.fromString = $khrnE.fromString;
module.exports.toString = $eDZ6G.toString;
module.exports.xor = $29jpH.xor;

});
parcelRequire.register("lAwFh", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
function $fb764c520345f20c$var$compare(a, b) {
    for(let i = 0; i < a.byteLength; i++){
        if (a[i] < b[i]) return -1;
        if (a[i] > b[i]) return 1;
    }
    if (a.byteLength > b.byteLength) return 1;
    if (a.byteLength < b.byteLength) return -1;
    return 0;
}
module.exports.compare = $fb764c520345f20c$var$compare;

});

parcelRequire.register("lRrMK", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $lD5lg = parcelRequire("lD5lg");
function $fea419c40f033df8$var$concat(arrays, length) {
    if (!length) length = arrays.reduce((acc, curr)=>acc + curr.length, 0);
    const output = $lD5lg.allocUnsafe(length);
    let offset = 0;
    for (const arr of arrays){
        output.set(arr, offset);
        offset += arr.length;
    }
    return output;
}
module.exports.concat = $fea419c40f033df8$var$concat;

});
parcelRequire.register("lD5lg", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
function $fbf162523b861f81$var$alloc(size = 0) {
    if (globalThis.Buffer != null && globalThis.Buffer.alloc != null) return globalThis.Buffer.alloc(size);
    return new Uint8Array(size);
}
function $fbf162523b861f81$var$allocUnsafe(size = 0) {
    if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) return globalThis.Buffer.allocUnsafe(size);
    return new Uint8Array(size);
}
module.exports.alloc = $fbf162523b861f81$var$alloc;
module.exports.allocUnsafe = $fbf162523b861f81$var$allocUnsafe;

});


parcelRequire.register("5WWq8", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
function $454faf9c3109588f$var$equals(a, b) {
    if (a === b) return true;
    if (a.byteLength !== b.byteLength) return false;
    for(let i = 0; i < a.byteLength; i++){
        if (a[i] !== b[i]) return false;
    }
    return true;
}
module.exports.equals = $454faf9c3109588f$var$equals;

});

parcelRequire.register("khrnE", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $b90LX = parcelRequire("b90LX");
function $ec3aa263666abb15$var$fromString(string, encoding = "utf8") {
    const base = $b90LX[encoding];
    if (!base) throw new Error(`Unsupported encoding "${encoding}"`);
    if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) return globalThis.Buffer.from(string, "utf8");
    return base.decoder.decode(`${base.prefix}${string}`);
}
module.exports.fromString = $ec3aa263666abb15$var$fromString;

});
parcelRequire.register("b90LX", function(module, exports) {
"use strict";

var $6Aqgg = parcelRequire("6Aqgg");

var $lD5lg = parcelRequire("lD5lg");
function $81d122606af7f414$var$createCodec(name, prefix, encode, decode) {
    return {
        name: name,
        prefix: prefix,
        encoder: {
            name: name,
            prefix: prefix,
            encode: encode
        },
        decoder: {
            decode: decode
        }
    };
}
const $81d122606af7f414$var$string = $81d122606af7f414$var$createCodec("utf8", "u", (buf)=>{
    const decoder = new TextDecoder("utf8");
    return "u" + decoder.decode(buf);
}, (str)=>{
    const encoder = new TextEncoder();
    return encoder.encode(str.substring(1));
});
const $81d122606af7f414$var$ascii = $81d122606af7f414$var$createCodec("ascii", "a", (buf)=>{
    let string = "a";
    for(let i = 0; i < buf.length; i++)string += String.fromCharCode(buf[i]);
    return string;
}, (str)=>{
    str = str.substring(1);
    const buf = $lD5lg.allocUnsafe(str.length);
    for(let i = 0; i < str.length; i++)buf[i] = str.charCodeAt(i);
    return buf;
});
const $81d122606af7f414$var$BASES = {
    utf8: $81d122606af7f414$var$string,
    "utf-8": $81d122606af7f414$var$string,
    hex: $6Aqgg.bases.base16,
    latin1: $81d122606af7f414$var$ascii,
    ascii: $81d122606af7f414$var$ascii,
    binary: $81d122606af7f414$var$ascii,
    ...$6Aqgg.bases
};
module.exports = $81d122606af7f414$var$BASES;

});


parcelRequire.register("eDZ6G", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $b90LX = parcelRequire("b90LX");
function $aa941bb87293883b$var$toString(array, encoding = "utf8") {
    const base = $b90LX[encoding];
    if (!base) throw new Error(`Unsupported encoding "${encoding}"`);
    if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString("utf8");
    return base.encoder.encode(array).substring(1);
}
module.exports.toString = $aa941bb87293883b$var$toString;

});

parcelRequire.register("29jpH", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $lD5lg = parcelRequire("lD5lg");
function $190b7b2c2336b277$var$xor(a, b) {
    if (a.length !== b.length) throw new Error("Inputs should have the same length");
    const result = $lD5lg.allocUnsafe(a.length);
    for(let i = 0; i < a.length; i++)result[i] = a[i] ^ b[i];
    return result;
}
module.exports.xor = $190b7b2c2336b277$var$xor;

});


parcelRequire.register("jtnEP", function(module, exports) {

$parcel$export(module.exports, "detect", () => $e2d313a837ae24f7$export$17b446b869dad473, (v) => $e2d313a837ae24f7$export$17b446b869dad473 = v);

var $4DZrq = parcelRequire("4DZrq");
var $e2d313a837ae24f7$var$__spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var $e2d313a837ae24f7$export$8fa985da04a86f0 = /** @class */ function() {
    function BrowserInfo(name, version, os) {
        this.name = name;
        this.version = version;
        this.os = os;
        this.type = "browser";
    }
    return BrowserInfo;
}();
var $e2d313a837ae24f7$export$62457c674e0167c0 = /** @class */ function() {
    function NodeInfo(version) {
        this.version = version;
        this.type = "node";
        this.name = "node";
        this.os = $4DZrq.platform;
    }
    return NodeInfo;
}();
var $e2d313a837ae24f7$export$775de176f06fc21 = /** @class */ function() {
    function SearchBotDeviceInfo(name, version, os, bot) {
        this.name = name;
        this.version = version;
        this.os = os;
        this.bot = bot;
        this.type = "bot-device";
    }
    return SearchBotDeviceInfo;
}();
var $e2d313a837ae24f7$export$cb435e1e9f86c1ff = /** @class */ function() {
    function BotInfo() {
        this.type = "bot";
        this.bot = true; // NOTE: deprecated test name instead
        this.name = "bot";
        this.version = null;
        this.os = null;
    }
    return BotInfo;
}();
var $e2d313a837ae24f7$export$7c78fe95a9d9b03e = /** @class */ function() {
    function ReactNativeInfo() {
        this.type = "react-native";
        this.name = "react-native";
        this.version = null;
        this.os = null;
    }
    return ReactNativeInfo;
}();
// tslint:disable-next-line:max-line-length
var $e2d313a837ae24f7$var$SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var $e2d313a837ae24f7$var$SEARCHBOT_OS_REGEX = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var $e2d313a837ae24f7$var$REQUIRED_VERSION_PARTS = 3;
var $e2d313a837ae24f7$var$userAgentRules = [
    [
        "aol",
        /AOLShield\/([0-9\._]+)/
    ],
    [
        "edge",
        /Edge\/([0-9\._]+)/
    ],
    [
        "edge-ios",
        /EdgiOS\/([0-9\._]+)/
    ],
    [
        "yandexbrowser",
        /YaBrowser\/([0-9\._]+)/
    ],
    [
        "kakaotalk",
        /KAKAOTALK\s([0-9\.]+)/
    ],
    [
        "samsung",
        /SamsungBrowser\/([0-9\.]+)/
    ],
    [
        "silk",
        /\bSilk\/([0-9._-]+)\b/
    ],
    [
        "miui",
        /MiuiBrowser\/([0-9\.]+)$/
    ],
    [
        "beaker",
        /BeakerBrowser\/([0-9\.]+)/
    ],
    [
        "edge-chromium",
        /EdgA?\/([0-9\.]+)/
    ],
    [
        "chromium-webview",
        /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
    ],
    [
        "chrome",
        /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
    ],
    [
        "phantomjs",
        /PhantomJS\/([0-9\.]+)(:?\s|$)/
    ],
    [
        "crios",
        /CriOS\/([0-9\.]+)(:?\s|$)/
    ],
    [
        "firefox",
        /Firefox\/([0-9\.]+)(?:\s|$)/
    ],
    [
        "fxios",
        /FxiOS\/([0-9\.]+)/
    ],
    [
        "opera-mini",
        /Opera Mini.*Version\/([0-9\.]+)/
    ],
    [
        "opera",
        /Opera\/([0-9\.]+)(?:\s|$)/
    ],
    [
        "opera",
        /OPR\/([0-9\.]+)(:?\s|$)/
    ],
    [
        "pie",
        /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/
    ],
    [
        "pie",
        /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/
    ],
    [
        "netfront",
        /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/
    ],
    [
        "ie",
        /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/
    ],
    [
        "ie",
        /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/
    ],
    [
        "ie",
        /MSIE\s(7\.0)/
    ],
    [
        "bb10",
        /BB10;\sTouch.*Version\/([0-9\.]+)/
    ],
    [
        "android",
        /Android\s([0-9\.]+)/
    ],
    [
        "ios",
        /Version\/([0-9\._]+).*Mobile.*Safari.*/
    ],
    [
        "safari",
        /Version\/([0-9\._]+).*Safari/
    ],
    [
        "facebook",
        /FB[AS]V\/([0-9\.]+)/
    ],
    [
        "instagram",
        /Instagram\s([0-9\.]+)/
    ],
    [
        "ios-webview",
        /AppleWebKit\/([0-9\.]+).*Mobile/
    ],
    [
        "ios-webview",
        /AppleWebKit\/([0-9\.]+).*Gecko\)$/
    ],
    [
        "curl",
        /^curl\/([0-9\.]+)$/
    ],
    [
        "searchbot",
        $e2d313a837ae24f7$var$SEARCHBOX_UA_REGEX
    ]
];
var $e2d313a837ae24f7$var$operatingSystemRules = [
    [
        "iOS",
        /iP(hone|od|ad)/
    ],
    [
        "Android OS",
        /Android/
    ],
    [
        "BlackBerry OS",
        /BlackBerry|BB10/
    ],
    [
        "Windows Mobile",
        /IEMobile/
    ],
    [
        "Amazon OS",
        /Kindle/
    ],
    [
        "Windows 3.11",
        /Win16/
    ],
    [
        "Windows 95",
        /(Windows 95)|(Win95)|(Windows_95)/
    ],
    [
        "Windows 98",
        /(Windows 98)|(Win98)/
    ],
    [
        "Windows 2000",
        /(Windows NT 5.0)|(Windows 2000)/
    ],
    [
        "Windows XP",
        /(Windows NT 5.1)|(Windows XP)/
    ],
    [
        "Windows Server 2003",
        /(Windows NT 5.2)/
    ],
    [
        "Windows Vista",
        /(Windows NT 6.0)/
    ],
    [
        "Windows 7",
        /(Windows NT 6.1)/
    ],
    [
        "Windows 8",
        /(Windows NT 6.2)/
    ],
    [
        "Windows 8.1",
        /(Windows NT 6.3)/
    ],
    [
        "Windows 10",
        /(Windows NT 10.0)/
    ],
    [
        "Windows ME",
        /Windows ME/
    ],
    [
        "Windows CE",
        /Windows CE|WinCE|Microsoft Pocket Internet Explorer/
    ],
    [
        "Open BSD",
        /OpenBSD/
    ],
    [
        "Sun OS",
        /SunOS/
    ],
    [
        "Chrome OS",
        /CrOS/
    ],
    [
        "Linux",
        /(Linux)|(X11)/
    ],
    [
        "Mac OS",
        /(Mac_PowerPC)|(Macintosh)/
    ],
    [
        "QNX",
        /QNX/
    ],
    [
        "BeOS",
        /BeOS/
    ],
    [
        "OS/2",
        /OS\/2/
    ]
];
function $e2d313a837ae24f7$export$17b446b869dad473(userAgent) {
    if (!!userAgent) return $e2d313a837ae24f7$export$1184956100eddc3c(userAgent);
    if (typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative") return new $e2d313a837ae24f7$export$7c78fe95a9d9b03e();
    if (typeof navigator !== "undefined") return $e2d313a837ae24f7$export$1184956100eddc3c(navigator.userAgent);
    return $e2d313a837ae24f7$export$bf2c6630ab904918();
}
function $e2d313a837ae24f7$var$matchUserAgent(ua) {
    // opted for using reduce here rather than Array#first with a regex.test call
    // this is primarily because using the reduce we only perform the regex
    // execution once rather than once for the test and for the exec again below
    // probably something that needs to be benchmarked though
    return ua !== "" && $e2d313a837ae24f7$var$userAgentRules.reduce(function(matched, _a) {
        var browser = _a[0], regex = _a[1];
        if (matched) return matched;
        var uaMatch = regex.exec(ua);
        return !!uaMatch && [
            browser,
            uaMatch
        ];
    }, false);
}
function $e2d313a837ae24f7$export$89ca9f8ca1a50fd5(ua) {
    var data = $e2d313a837ae24f7$var$matchUserAgent(ua);
    return data ? data[0] : null;
}
function $e2d313a837ae24f7$export$1184956100eddc3c(ua) {
    var matchedRule = $e2d313a837ae24f7$var$matchUserAgent(ua);
    if (!matchedRule) return null;
    var name = matchedRule[0], match = matchedRule[1];
    if (name === "searchbot") return new $e2d313a837ae24f7$export$cb435e1e9f86c1ff();
    // Do not use RegExp for split operation as some browser do not support it (See: http://blog.stevenlevithan.com/archives/cross-browser-split)
    var versionParts = match[1] && match[1].split(".").join("_").split("_").slice(0, 3);
    if (versionParts) {
        if (versionParts.length < $e2d313a837ae24f7$var$REQUIRED_VERSION_PARTS) versionParts = $e2d313a837ae24f7$var$__spreadArray($e2d313a837ae24f7$var$__spreadArray([], versionParts, true), $e2d313a837ae24f7$var$createVersionParts($e2d313a837ae24f7$var$REQUIRED_VERSION_PARTS - versionParts.length), true);
    } else versionParts = [];
    var version = versionParts.join(".");
    var os = $e2d313a837ae24f7$export$3070bd282ec37ea8(ua);
    var searchBotMatch = $e2d313a837ae24f7$var$SEARCHBOT_OS_REGEX.exec(ua);
    if (searchBotMatch && searchBotMatch[1]) return new $e2d313a837ae24f7$export$775de176f06fc21(name, version, os, searchBotMatch[1]);
    return new $e2d313a837ae24f7$export$8fa985da04a86f0(name, version, os);
}
function $e2d313a837ae24f7$export$3070bd282ec37ea8(ua) {
    for(var ii = 0, count = $e2d313a837ae24f7$var$operatingSystemRules.length; ii < count; ii++){
        var _a = $e2d313a837ae24f7$var$operatingSystemRules[ii], os = _a[0], regex = _a[1];
        var match = regex.exec(ua);
        if (match) return os;
    }
    return null;
}
function $e2d313a837ae24f7$export$bf2c6630ab904918() {
    var isNode = typeof $4DZrq !== "undefined" && $4DZrq.version;
    return isNode ? new $e2d313a837ae24f7$export$62457c674e0167c0($4DZrq.version.slice(1)) : null;
}
function $e2d313a837ae24f7$var$createVersionParts(count) {
    var output = [];
    for(var ii = 0; ii < count; ii++)output.push("0");
    return output;
}

});

parcelRequire.register("1j5GI", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getWindowMetadata = void 0;

var $jeE37 = parcelRequire("jeE37");
function $0f3bfa49c5615d47$var$getWindowMetadata() {
    let doc;
    let loc;
    try {
        doc = $jeE37.getDocumentOrThrow();
        loc = $jeE37.getLocationOrThrow();
    } catch (e) {
        return null;
    }
    function getIcons() {
        const links = doc.getElementsByTagName("link");
        const icons = [];
        for(let i = 0; i < links.length; i++){
            const link = links[i];
            const rel = link.getAttribute("rel");
            if (rel) {
                if (rel.toLowerCase().indexOf("icon") > -1) {
                    const href = link.getAttribute("href");
                    if (href) {
                        if (href.toLowerCase().indexOf("https:") === -1 && href.toLowerCase().indexOf("http:") === -1 && href.indexOf("//") !== 0) {
                            let absoluteHref = loc.protocol + "//" + loc.host;
                            if (href.indexOf("/") === 0) absoluteHref += href;
                            else {
                                const path = loc.pathname.split("/");
                                path.pop();
                                const finalPath = path.join("/");
                                absoluteHref += finalPath + "/" + href;
                            }
                            icons.push(absoluteHref);
                        } else if (href.indexOf("//") === 0) {
                            const absoluteUrl = loc.protocol + href;
                            icons.push(absoluteUrl);
                        } else icons.push(href);
                    }
                }
            }
        }
        return icons;
    }
    function getWindowMetadataOfAny(...args) {
        const metaTags = doc.getElementsByTagName("meta");
        for(let i = 0; i < metaTags.length; i++){
            const tag = metaTags[i];
            const attributes = [
                "itemprop",
                "property",
                "name"
            ].map((target)=>tag.getAttribute(target)).filter((attr)=>{
                if (attr) return args.includes(attr);
                return false;
            });
            if (attributes.length && attributes) {
                const content = tag.getAttribute("content");
                if (content) return content;
            }
        }
        return "";
    }
    function getName() {
        let name = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title");
        if (!name) name = doc.title;
        return name;
    }
    function getDescription() {
        const description = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
        return description;
    }
    const name = getName();
    const description = getDescription();
    const url = loc.origin;
    const icons = getIcons();
    const meta = {
        description: description,
        url: url,
        icons: icons,
        name: name
    };
    return meta;
}
module.exports.getWindowMetadata = $0f3bfa49c5615d47$var$getWindowMetadata;

});

parcelRequire.register("ecEnX", function(module, exports) {

$parcel$export(module.exports, "extract", () => $a571835a8537696f$export$f9380c9a627682d3, (v) => $a571835a8537696f$export$f9380c9a627682d3 = v);
$parcel$export(module.exports, "parse", () => $a571835a8537696f$export$98e6a39c04603d36, (v) => $a571835a8537696f$export$98e6a39c04603d36 = v);
$parcel$export(module.exports, "stringify", () => $a571835a8537696f$export$fac44ee5b035f737, (v) => $a571835a8537696f$export$fac44ee5b035f737 = v);
$parcel$export(module.exports, "parseUrl", () => $a571835a8537696f$export$7a5253c0f62e0150, (v) => $a571835a8537696f$export$7a5253c0f62e0150 = v);
$parcel$export(module.exports, "stringifyUrl", () => $a571835a8537696f$export$a8c1621ea79325d3, (v) => $a571835a8537696f$export$a8c1621ea79325d3 = v);
$parcel$export(module.exports, "pick", () => $a571835a8537696f$export$357523c63a2253b9, (v) => $a571835a8537696f$export$357523c63a2253b9 = v);
var $a571835a8537696f$export$f9380c9a627682d3;
var $a571835a8537696f$export$98e6a39c04603d36;
var $a571835a8537696f$export$fac44ee5b035f737;
var $a571835a8537696f$export$7a5253c0f62e0150;
var $a571835a8537696f$export$a8c1621ea79325d3;
var $a571835a8537696f$export$357523c63a2253b9;
var $a571835a8537696f$export$44c361b8ec72ef7f;
"use strict";

var $lvgdx = parcelRequire("lvgdx");

var $7zHv8 = parcelRequire("7zHv8");

var $ed263 = parcelRequire("ed263");

var $ihAQe = parcelRequire("ihAQe");
const $a571835a8537696f$var$isNullOrUndefined = (value)=>value === null || value === undefined;
const $a571835a8537696f$var$encodeFragmentIdentifier = Symbol("encodeFragmentIdentifier");
function $a571835a8537696f$var$encoderForArrayFormat(options) {
    switch(options.arrayFormat){
        case "index":
            return (key)=>(result, value)=>{
                    const index = result.length;
                    if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") return result;
                    if (value === null) return [
                        ...result,
                        [
                            $a571835a8537696f$var$encode(key, options),
                            "[",
                            index,
                            "]"
                        ].join("")
                    ];
                    return [
                        ...result,
                        [
                            $a571835a8537696f$var$encode(key, options),
                            "[",
                            $a571835a8537696f$var$encode(index, options),
                            "]=",
                            $a571835a8537696f$var$encode(value, options)
                        ].join("")
                    ];
                };
        case "bracket":
            return (key)=>(result, value)=>{
                    if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") return result;
                    if (value === null) return [
                        ...result,
                        [
                            $a571835a8537696f$var$encode(key, options),
                            "[]"
                        ].join("")
                    ];
                    return [
                        ...result,
                        [
                            $a571835a8537696f$var$encode(key, options),
                            "[]=",
                            $a571835a8537696f$var$encode(value, options)
                        ].join("")
                    ];
                };
        case "colon-list-separator":
            return (key)=>(result, value)=>{
                    if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") return result;
                    if (value === null) return [
                        ...result,
                        [
                            $a571835a8537696f$var$encode(key, options),
                            ":list="
                        ].join("")
                    ];
                    return [
                        ...result,
                        [
                            $a571835a8537696f$var$encode(key, options),
                            ":list=",
                            $a571835a8537696f$var$encode(value, options)
                        ].join("")
                    ];
                };
        case "comma":
        case "separator":
        case "bracket-separator":
            {
                const keyValueSep = options.arrayFormat === "bracket-separator" ? "[]=" : "=";
                return (key)=>(result, value)=>{
                        if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") return result;
                        // Translate null to an empty string so that it doesn't serialize as 'null'
                        value = value === null ? "" : value;
                        if (result.length === 0) return [
                            [
                                $a571835a8537696f$var$encode(key, options),
                                keyValueSep,
                                $a571835a8537696f$var$encode(value, options)
                            ].join("")
                        ];
                        return [
                            [
                                result,
                                $a571835a8537696f$var$encode(value, options)
                            ].join(options.arrayFormatSeparator)
                        ];
                    };
            }
        default:
            return (key)=>(result, value)=>{
                    if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") return result;
                    if (value === null) return [
                        ...result,
                        $a571835a8537696f$var$encode(key, options)
                    ];
                    return [
                        ...result,
                        [
                            $a571835a8537696f$var$encode(key, options),
                            "=",
                            $a571835a8537696f$var$encode(value, options)
                        ].join("")
                    ];
                };
    }
}
function $a571835a8537696f$var$parserForArrayFormat(options) {
    let result;
    switch(options.arrayFormat){
        case "index":
            return (key, value, accumulator)=>{
                result = /\[(\d*)\]$/.exec(key);
                key = key.replace(/\[\d*\]$/, "");
                if (!result) {
                    accumulator[key] = value;
                    return;
                }
                if (accumulator[key] === undefined) accumulator[key] = {};
                accumulator[key][result[1]] = value;
            };
        case "bracket":
            return (key, value, accumulator)=>{
                result = /(\[\])$/.exec(key);
                key = key.replace(/\[\]$/, "");
                if (!result) {
                    accumulator[key] = value;
                    return;
                }
                if (accumulator[key] === undefined) {
                    accumulator[key] = [
                        value
                    ];
                    return;
                }
                accumulator[key] = [].concat(accumulator[key], value);
            };
        case "colon-list-separator":
            return (key, value, accumulator)=>{
                result = /(:list)$/.exec(key);
                key = key.replace(/:list$/, "");
                if (!result) {
                    accumulator[key] = value;
                    return;
                }
                if (accumulator[key] === undefined) {
                    accumulator[key] = [
                        value
                    ];
                    return;
                }
                accumulator[key] = [].concat(accumulator[key], value);
            };
        case "comma":
        case "separator":
            return (key, value, accumulator)=>{
                const isArray = typeof value === "string" && value.includes(options.arrayFormatSeparator);
                const isEncodedArray = typeof value === "string" && !isArray && $a571835a8537696f$var$decode(value, options).includes(options.arrayFormatSeparator);
                value = isEncodedArray ? $a571835a8537696f$var$decode(value, options) : value;
                const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map((item)=>$a571835a8537696f$var$decode(item, options)) : value === null ? value : $a571835a8537696f$var$decode(value, options);
                accumulator[key] = newValue;
            };
        case "bracket-separator":
            return (key, value, accumulator)=>{
                const isArray = /(\[\])$/.test(key);
                key = key.replace(/\[\]$/, "");
                if (!isArray) {
                    accumulator[key] = value ? $a571835a8537696f$var$decode(value, options) : value;
                    return;
                }
                const arrayValue = value === null ? [] : value.split(options.arrayFormatSeparator).map((item)=>$a571835a8537696f$var$decode(item, options));
                if (accumulator[key] === undefined) {
                    accumulator[key] = arrayValue;
                    return;
                }
                accumulator[key] = [].concat(accumulator[key], arrayValue);
            };
        default:
            return (key, value, accumulator)=>{
                if (accumulator[key] === undefined) {
                    accumulator[key] = value;
                    return;
                }
                accumulator[key] = [].concat(accumulator[key], value);
            };
    }
}
function $a571835a8537696f$var$validateArrayFormatSeparator(value) {
    if (typeof value !== "string" || value.length !== 1) throw new TypeError("arrayFormatSeparator must be single character string");
}
function $a571835a8537696f$var$encode(value, options) {
    if (options.encode) return options.strict ? $lvgdx(value) : encodeURIComponent(value);
    return value;
}
function $a571835a8537696f$var$decode(value, options) {
    if (options.decode) return $7zHv8(value);
    return value;
}
function $a571835a8537696f$var$keysSorter(input) {
    if (Array.isArray(input)) return input.sort();
    if (typeof input === "object") return $a571835a8537696f$var$keysSorter(Object.keys(input)).sort((a, b)=>Number(a) - Number(b)).map((key)=>input[key]);
    return input;
}
function $a571835a8537696f$var$removeHash(input) {
    const hashStart = input.indexOf("#");
    if (hashStart !== -1) input = input.slice(0, hashStart);
    return input;
}
function $a571835a8537696f$var$getHash(url) {
    let hash = "";
    const hashStart = url.indexOf("#");
    if (hashStart !== -1) hash = url.slice(hashStart);
    return hash;
}
function $a571835a8537696f$var$extract(input) {
    input = $a571835a8537696f$var$removeHash(input);
    const queryStart = input.indexOf("?");
    if (queryStart === -1) return "";
    return input.slice(queryStart + 1);
}
function $a571835a8537696f$var$parseValue(value, options) {
    if (options.parseNumbers && !Number.isNaN(Number(value)) && typeof value === "string" && value.trim() !== "") value = Number(value);
    else if (options.parseBooleans && value !== null && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) value = value.toLowerCase() === "true";
    return value;
}
function $a571835a8537696f$var$parse(query, options) {
    options = Object.assign({
        decode: true,
        sort: true,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: false,
        parseBooleans: false
    }, options);
    $a571835a8537696f$var$validateArrayFormatSeparator(options.arrayFormatSeparator);
    const formatter = $a571835a8537696f$var$parserForArrayFormat(options);
    // Create an object with no prototype
    const ret = Object.create(null);
    if (typeof query !== "string") return ret;
    query = query.trim().replace(/^[?#&]/, "");
    if (!query) return ret;
    for (const param of query.split("&")){
        if (param === "") continue;
        let [key, value] = $ed263(options.decode ? param.replace(/\+/g, " ") : param, "=");
        // Missing `=` should be `null`:
        // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
        value = value === undefined ? null : [
            "comma",
            "separator",
            "bracket-separator"
        ].includes(options.arrayFormat) ? value : $a571835a8537696f$var$decode(value, options);
        formatter($a571835a8537696f$var$decode(key, options), value, ret);
    }
    for (const key of Object.keys(ret)){
        const value = ret[key];
        if (typeof value === "object" && value !== null) for (const k of Object.keys(value))value[k] = $a571835a8537696f$var$parseValue(value[k], options);
        else ret[key] = $a571835a8537696f$var$parseValue(value, options);
    }
    if (options.sort === false) return ret;
    return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key)=>{
        const value = ret[key];
        if (Boolean(value) && typeof value === "object" && !Array.isArray(value)) // Sort object keys, not values
        result[key] = $a571835a8537696f$var$keysSorter(value);
        else result[key] = value;
        return result;
    }, Object.create(null));
}
$a571835a8537696f$export$f9380c9a627682d3 = $a571835a8537696f$var$extract;
$a571835a8537696f$export$98e6a39c04603d36 = $a571835a8537696f$var$parse;
$a571835a8537696f$export$fac44ee5b035f737 = (object, options)=>{
    if (!object) return "";
    options = Object.assign({
        encode: true,
        strict: true,
        arrayFormat: "none",
        arrayFormatSeparator: ","
    }, options);
    $a571835a8537696f$var$validateArrayFormatSeparator(options.arrayFormatSeparator);
    const shouldFilter = (key)=>options.skipNull && $a571835a8537696f$var$isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === "";
    const formatter = $a571835a8537696f$var$encoderForArrayFormat(options);
    const objectCopy = {};
    for (const key of Object.keys(object))if (!shouldFilter(key)) objectCopy[key] = object[key];
    const keys = Object.keys(objectCopy);
    if (options.sort !== false) keys.sort(options.sort);
    return keys.map((key)=>{
        const value = object[key];
        if (value === undefined) return "";
        if (value === null) return $a571835a8537696f$var$encode(key, options);
        if (Array.isArray(value)) {
            if (value.length === 0 && options.arrayFormat === "bracket-separator") return $a571835a8537696f$var$encode(key, options) + "[]";
            return value.reduce(formatter(key), []).join("&");
        }
        return $a571835a8537696f$var$encode(key, options) + "=" + $a571835a8537696f$var$encode(value, options);
    }).filter((x)=>x.length > 0).join("&");
};
$a571835a8537696f$export$7a5253c0f62e0150 = (url, options)=>{
    options = Object.assign({
        decode: true
    }, options);
    const [url_, hash] = $ed263(url, "#");
    return Object.assign({
        url: url_.split("?")[0] || "",
        query: $a571835a8537696f$var$parse($a571835a8537696f$var$extract(url), options)
    }, options && options.parseFragmentIdentifier && hash ? {
        fragmentIdentifier: $a571835a8537696f$var$decode(hash, options)
    } : {});
};
$a571835a8537696f$export$a8c1621ea79325d3 = (object, options)=>{
    options = Object.assign({
        encode: true,
        strict: true,
        [$a571835a8537696f$var$encodeFragmentIdentifier]: true
    }, options);
    const url = $a571835a8537696f$var$removeHash(object.url).split("?")[0] || "";
    const queryFromUrl = $a571835a8537696f$export$f9380c9a627682d3(object.url);
    const parsedQueryFromUrl = $a571835a8537696f$export$98e6a39c04603d36(queryFromUrl, {
        sort: false
    });
    const query = Object.assign(parsedQueryFromUrl, object.query);
    let queryString = $a571835a8537696f$export$fac44ee5b035f737(query, options);
    if (queryString) queryString = `?${queryString}`;
    let hash = $a571835a8537696f$var$getHash(object.url);
    if (object.fragmentIdentifier) hash = `#${options[$a571835a8537696f$var$encodeFragmentIdentifier] ? $a571835a8537696f$var$encode(object.fragmentIdentifier, options) : object.fragmentIdentifier}`;
    return `${url}${queryString}${hash}`;
};
$a571835a8537696f$export$357523c63a2253b9 = (input, filter, options)=>{
    options = Object.assign({
        parseFragmentIdentifier: true,
        [$a571835a8537696f$var$encodeFragmentIdentifier]: false
    }, options);
    const { url: url , query: query , fragmentIdentifier: fragmentIdentifier  } = $a571835a8537696f$export$7a5253c0f62e0150(input, options);
    return $a571835a8537696f$export$a8c1621ea79325d3({
        url: url,
        query: $ihAQe(query, filter),
        fragmentIdentifier: fragmentIdentifier
    }, options);
};
$a571835a8537696f$export$44c361b8ec72ef7f = (input, filter, options)=>{
    const exclusionFilter = Array.isArray(filter) ? (key)=>!filter.includes(key) : (key, value)=>!filter(key, value);
    return $a571835a8537696f$export$357523c63a2253b9(input, exclusionFilter, options);
};

});
parcelRequire.register("ihAQe", function(module, exports) {
"use strict";
module.exports = function(obj, predicate) {
    var ret = {};
    var keys = Object.keys(obj);
    var isArr = Array.isArray(predicate);
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        var val = obj[key];
        if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) ret[key] = val;
    }
    return ret;
};

});


parcelRequire.register("akZap", function(module, exports) {
$parcel$export(module.exports, "RELAY_JSONRPC", () => (parcelRequire("5G6lt")).RELAY_JSONRPC);

var $1nuny = parcelRequire("1nuny");
parcelRequire("eD7OH");
parcelRequire("5G6lt");
parcelRequire("ggP9b");
$parcel$exportWildcard(module.exports, $1nuny);

});
parcelRequire.register("1nuny", function(module, exports) {

});

parcelRequire.register("eD7OH", function(module, exports) {

var $8qrJE = parcelRequire("8qrJE");

var $ggP9b = parcelRequire("ggP9b");
function $aa6ac576a38a6eab$export$abdf96c288cb375(request) {
    if (!(0, $ggP9b.isSubscribeMethod)(request.method)) throw new Error("JSON-RPC Request has invalid subscribe method");
    if (!(0, $ggP9b.isSubscribeParams)(request.params)) throw new Error("JSON-RPC Request has invalid subscribe params");
    const params = request.params;
    (0, $8qrJE.assertType)(params, "topic");
    return params;
}
function $aa6ac576a38a6eab$export$eac3e45ac5c5c9fa(request) {
    if (!(0, $ggP9b.isPublishMethod)(request.method)) throw new Error("JSON-RPC Request has invalid publish method");
    if (!(0, $ggP9b.isPublishParams)(request.params)) throw new Error("JSON-RPC Request has invalid publish params");
    const params = request.params;
    (0, $8qrJE.assertType)(params, "topic");
    (0, $8qrJE.assertType)(params, "message");
    (0, $8qrJE.assertType)(params, "ttl", "number");
    return params;
}
function $aa6ac576a38a6eab$export$78baa72f78156594(request) {
    if (!(0, $ggP9b.isUnsubscribeMethod)(request.method)) throw new Error("JSON-RPC Request has invalid unsubscribe method");
    if (!(0, $ggP9b.isUnsubscribeParams)(request.params)) throw new Error("JSON-RPC Request has invalid unsubscribe params");
    const params = request.params;
    (0, $8qrJE.assertType)(params, "id");
    return params;
}
function $aa6ac576a38a6eab$export$4d5822edd41f3b48(request) {
    if (!(0, $ggP9b.isSubscriptionMethod)(request.method)) throw new Error("JSON-RPC Request has invalid subscription method");
    if (!(0, $ggP9b.isSubscriptionParams)(request.params)) throw new Error("JSON-RPC Request has invalid subscription params");
    const params = request.params;
    (0, $8qrJE.assertType)(params, "id");
    (0, $8qrJE.assertType)(params, "data");
    return params;
}

});
parcelRequire.register("8qrJE", function(module, exports) {

$parcel$export(module.exports, "assertType", () => $622644135ccaa797$export$804de46662e4ac95);
$parcel$export(module.exports, "checkParams", () => $622644135ccaa797$export$19e8e281e27dafad);
$parcel$export(module.exports, "methodEndsWith", () => $622644135ccaa797$export$18337b4ba58d5c33);
function $622644135ccaa797$export$804de46662e4ac95(obj, key, type = "string") {
    if (!obj[key] || typeof obj[key] !== type) throw new Error(`Missing or invalid "${key}" param`);
}
function $622644135ccaa797$export$c538c02216fcdc03(params, required) {
    let matches = true;
    required.forEach((key)=>{
        const exists = key in params;
        if (!exists) matches = false;
    });
    return matches;
}
function $622644135ccaa797$export$e4b3f942a6d00ef9(params, length) {
    return Array.isArray(params) ? params.length === length : Object.keys(params).length === length;
}
function $622644135ccaa797$export$8fcd263f2845753e(params, minLength) {
    return Array.isArray(params) ? params.length >= minLength : Object.keys(params).length >= minLength;
}
function $622644135ccaa797$export$19e8e281e27dafad(params, required, optional) {
    const exact = !optional.length;
    const matchesLength = exact ? $622644135ccaa797$export$e4b3f942a6d00ef9(params, required.length) : $622644135ccaa797$export$8fcd263f2845753e(params, required.length);
    if (!matchesLength) return false;
    return $622644135ccaa797$export$c538c02216fcdc03(params, required);
}
function $622644135ccaa797$export$18337b4ba58d5c33(method, expected, separator = "_") {
    const split = method.split(separator);
    return split[split.length - 1].trim().toLowerCase() === expected.trim().toLowerCase();
}

});

parcelRequire.register("ggP9b", function(module, exports) {

$parcel$export(module.exports, "isSubscribeMethod", () => $bd85d0b9c8b6366d$export$f576347163de0984);
$parcel$export(module.exports, "isSubscribeParams", () => $bd85d0b9c8b6366d$export$dae2311546d43680);
$parcel$export(module.exports, "isPublishMethod", () => $bd85d0b9c8b6366d$export$71d4d33ac7f7a269);
$parcel$export(module.exports, "isPublishParams", () => $bd85d0b9c8b6366d$export$71e8d1aa48c3e86f);
$parcel$export(module.exports, "isUnsubscribeMethod", () => $bd85d0b9c8b6366d$export$568d956f39536025);
$parcel$export(module.exports, "isUnsubscribeParams", () => $bd85d0b9c8b6366d$export$cbc597c53c3b4f80);
$parcel$export(module.exports, "isSubscriptionMethod", () => $bd85d0b9c8b6366d$export$3cb4ad320e3a46a4);
$parcel$export(module.exports, "isSubscriptionParams", () => $bd85d0b9c8b6366d$export$6366ff9a39f2da4c);

var $8qrJE = parcelRequire("8qrJE");
function $bd85d0b9c8b6366d$export$c75580565fa025bd(request) {
    return $bd85d0b9c8b6366d$export$f576347163de0984(request.method) && $bd85d0b9c8b6366d$export$dae2311546d43680(request.params);
}
function $bd85d0b9c8b6366d$export$f576347163de0984(method) {
    return (0, $8qrJE.methodEndsWith)(method, "subscribe");
}
function $bd85d0b9c8b6366d$export$dae2311546d43680(params) {
    const required = [
        "topic"
    ];
    const optional = [];
    return (0, $8qrJE.checkParams)(params, required, optional);
}
function $bd85d0b9c8b6366d$export$8fa7cf76b41caee0(request) {
    return $bd85d0b9c8b6366d$export$71d4d33ac7f7a269(request.method) && $bd85d0b9c8b6366d$export$71e8d1aa48c3e86f(request.params);
}
function $bd85d0b9c8b6366d$export$71d4d33ac7f7a269(method) {
    return (0, $8qrJE.methodEndsWith)(method, "publish");
}
function $bd85d0b9c8b6366d$export$71e8d1aa48c3e86f(params) {
    const required = [
        "message",
        "topic",
        "ttl"
    ];
    const optional = [
        "prompt",
        "tag"
    ];
    return (0, $8qrJE.checkParams)(params, required, optional);
}
function $bd85d0b9c8b6366d$export$83e292763180b41b(request) {
    return $bd85d0b9c8b6366d$export$568d956f39536025(request.method) && $bd85d0b9c8b6366d$export$cbc597c53c3b4f80(request.params);
}
function $bd85d0b9c8b6366d$export$568d956f39536025(method) {
    return (0, $8qrJE.methodEndsWith)(method, "unsubscribe");
}
function $bd85d0b9c8b6366d$export$cbc597c53c3b4f80(params) {
    const required = [
        "id",
        "topic"
    ];
    const optional = [];
    return (0, $8qrJE.checkParams)(params, required, optional);
}
function $bd85d0b9c8b6366d$export$43cf4100d6287b8e(request) {
    return $bd85d0b9c8b6366d$export$3cb4ad320e3a46a4(request.method) && $bd85d0b9c8b6366d$export$6366ff9a39f2da4c(request.params);
}
function $bd85d0b9c8b6366d$export$3cb4ad320e3a46a4(method) {
    return (0, $8qrJE.methodEndsWith)(method, "subscription");
}
function $bd85d0b9c8b6366d$export$6366ff9a39f2da4c(params) {
    const required = [
        "id",
        "data"
    ];
    const optional = [];
    return (0, $8qrJE.checkParams)(params, required, optional);
}

});


parcelRequire.register("5G6lt", function(module, exports) {

$parcel$export(module.exports, "RELAY_JSONRPC", () => $4225cc10df9a9e88$export$af490b3b9a6de00f);
const $4225cc10df9a9e88$export$af490b3b9a6de00f = {
    waku: {
        publish: "waku_publish",
        subscribe: "waku_subscribe",
        subscription: "waku_subscription",
        unsubscribe: "waku_unsubscribe"
    },
    irn: {
        publish: "irn_publish",
        subscribe: "irn_subscribe",
        subscription: "irn_subscription",
        unsubscribe: "irn_unsubscribe"
    },
    iridium: {
        publish: "iridium_publish",
        subscribe: "iridium_subscribe",
        subscription: "iridium_subscription",
        unsubscribe: "iridium_unsubscribe"
    }
};

});



parcelRequire.register("aeCHe", function(module, exports) {

$parcel$export(module.exports, "default", () => $77393a792b94220e$export$2e2bcd8739ae039);

var $h6hBZ = parcelRequire("h6hBZ");

var $h6hBZ = parcelRequire("h6hBZ");
var $77393a792b94220e$export$2e2bcd8739ae039 = (0, $h6hBZ.default);

});
parcelRequire.register("h6hBZ", function(module, exports) {

$parcel$export(module.exports, "default", () => $c730a88d1cc2d3fa$export$2e2bcd8739ae039);

var $2fbJO = parcelRequire("2fbJO");

var $2nf8n = parcelRequire("2nf8n");

var $kOodT = parcelRequire("kOodT");
const $c730a88d1cc2d3fa$var$EVENT_EMITTER_MAX_LISTENERS_DEFAULT = 10;

const $c730a88d1cc2d3fa$var$resolveWebSocketImplementation = ()=>{
    if (typeof $parcel$global !== "undefined" && typeof $parcel$global.WebSocket !== "undefined") return $parcel$global.WebSocket;
    if (typeof window !== "undefined" && typeof window.WebSocket !== "undefined") return window.WebSocket;
    return (parcelRequire("eJI70"));
};
const $c730a88d1cc2d3fa$var$isBrowser = ()=>typeof window !== "undefined";
const $c730a88d1cc2d3fa$var$WS = $c730a88d1cc2d3fa$var$resolveWebSocketImplementation();
class $c730a88d1cc2d3fa$export$ea0df116fa892998 {
    constructor(url){
        this.url = url;
        this.events = new (0, $2fbJO.EventEmitter)();
        this.registering = false;
        if (!(0, $kOodT.isWsUrl)(url)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${url}`);
        this.url = url;
    }
    get connected() {
        return typeof this.socket !== "undefined";
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
        return new Promise((resolve, reject)=>{
            if (typeof this.socket === "undefined") {
                reject(new Error("Connection already closed"));
                return;
            }
            this.socket.onclose = ()=>{
                this.onClose();
                resolve();
            };
            this.socket.close();
        });
    }
    async send(payload, context) {
        if (typeof this.socket === "undefined") this.socket = await this.register();
        try {
            this.socket.send((0, $2nf8n.safeJsonStringify)(payload));
        } catch (e) {
            this.onError(payload.id, e);
        }
    }
    register(url = this.url) {
        if (!(0, $kOodT.isWsUrl)(url)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${url}`);
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
                    if (typeof this.socket === "undefined") return reject(new Error("WebSocket connection is missing or invalid"));
                    resolve(this.socket);
                });
            });
        }
        this.url = url;
        this.registering = true;
        return new Promise((resolve, reject)=>{
            const opts = !(0, $kOodT.isReactNative)() ? {
                rejectUnauthorized: !(0, $kOodT.isLocalhostUrl)(url)
            } : undefined;
            const socket = new $c730a88d1cc2d3fa$var$WS(url, [], opts);
            if ($c730a88d1cc2d3fa$var$isBrowser()) socket.onerror = (event)=>{
                const errorEvent = event;
                reject(this.emitError(errorEvent.error));
            };
            else socket.on("error", (errorEvent)=>{
                reject(this.emitError(errorEvent));
            });
            socket.onopen = ()=>{
                this.onOpen(socket);
                resolve(socket);
            };
        });
    }
    onOpen(socket) {
        socket.onmessage = (event)=>this.onPayload(event);
        socket.onclose = ()=>this.onClose();
        this.socket = socket;
        this.registering = false;
        this.events.emit("open");
    }
    onClose() {
        this.socket = undefined;
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
        const payload = (0, $kOodT.formatJsonRpcError)(id, message);
        this.events.emit("payload", payload);
    }
    parseError(e, url = this.url) {
        return (0, $kOodT.parseConnectionError)(e, url, "WS");
    }
    resetMaxListeners() {
        if (this.events.getMaxListeners() > $c730a88d1cc2d3fa$var$EVENT_EMITTER_MAX_LISTENERS_DEFAULT) this.events.setMaxListeners($c730a88d1cc2d3fa$var$EVENT_EMITTER_MAX_LISTENERS_DEFAULT);
    }
    emitError(errorEvent) {
        const error = this.parseError(new Error((errorEvent === null || errorEvent === void 0 ? void 0 : errorEvent.message) || `WebSocket connection failed for URL: ${this.url}`));
        this.events.emit("register_error", error);
        return error;
    }
}
var $c730a88d1cc2d3fa$export$2e2bcd8739ae039 = $c730a88d1cc2d3fa$export$ea0df116fa892998;

});
parcelRequire.register("eJI70", function(module, exports) {
"use strict";
module.exports = function() {
    throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object");
};

});



parcelRequire.register("jX1rv", function(module, exports) {
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the size to enable large array optimizations. */ var LARGE_ARRAY_SIZE = 200;
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = "__lodash_hash_undefined__";
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER = 9007199254740991;
/** `Object#toString` result references. */ var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */ var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
/** Used to identify `toStringTag` values of typed arrays. */ var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/** Detect free variable `global` from Node.js. */ var freeGlobal = typeof $parcel$global == "object" && $parcel$global && $parcel$global.Object === Object && $parcel$global;
/** Detect free variable `self`. */ var freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function("return this")();
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */ var nodeUtil = function() {
    try {
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {}
}();
/* Node.js helper references. */ var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */ function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while(++index < length){
        var value = array[index];
        if (predicate(value, index, array)) result[resIndex++] = value;
    }
    return result;
}
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */ function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while(++index < length)array[offset + index] = values[index];
    return array;
}
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */ function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        if (predicate(array[index], index, array)) return true;
    }
    return false;
}
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while(++index < n)result[index] = iteratee(index);
    return result;
}
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */ function baseUnary(func) {
    return function(value) {
        return func(value);
    };
}
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function cacheHas(cache, key) {
    return cache.has(key);
}
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function getValue(object, key) {
    return object == null ? undefined : object[key];
}
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */ function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
        result[++index] = [
            key,
            value
        ];
    });
    return result;
}
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */ function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
        result[++index] = value;
    });
    return result;
}
/** Used for built-in method references. */ var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to detect overreaching core-js shims. */ var coreJsData = root["__core-js_shared__"];
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
}();
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/** Used to detect if a method is native. */ var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
/** Built-in value references. */ var Buffer = moduleExports ? root.Buffer : undefined, Symbol = root.Symbol, Uint8Array = root.Uint8Array, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeGetSymbols = Object.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined, nativeKeys = overArg(Object.keys, Object);
/* Built-in method references that are verified to be native. */ var DataView = getNative(root, "DataView"), Map = getNative(root, "Map"), Promise = getNative(root, "Promise"), Set = getNative(root, "Set"), WeakMap = getNative(root, "WeakMap"), nativeCreate = getNative(Object, "create");
/** Used to detect maps, sets, and weakmaps. */ var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol ? Symbol.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
}
// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) return false;
    var lastIndex = data.length - 1;
    if (index == lastIndex) data.pop();
    else splice.call(data, index, 1);
    --this.size;
    return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
        ++this.size;
        data.push([
            key,
            value
        ]);
    } else data[index][1] = value;
    return this;
}
// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
        "hash": new Hash,
        "map": new (Map || ListCache),
        "string": new Hash
    };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function mapCacheGet(key) {
    return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function mapCacheHas(key) {
    return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
}
// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */ function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache;
    while(++index < length)this.add(values[index]);
}
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */ function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
}
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */ function setCacheHas(value) {
    return this.__data__.has(value);
}
// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
}
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */ function stackClear() {
    this.__data__ = new ListCache;
    this.size = 0;
}
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
}
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function stackGet(key) {
    return this.__data__.get(key);
}
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function stackHas(key) {
    return this.__data__.has(key);
}
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */ function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([
                key,
                value
            ]);
            this.size = ++data.size;
            return this;
        }
        data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
}
// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for(var key in value)if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex(key, length)))) result.push(key);
    return result;
}
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if (eq(array[length][0], key)) return length;
    }
    return -1;
}
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */ function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) return value === undefined ? undefinedTag : nullTag;
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */ function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
}
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */ function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) return true;
    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) return value !== value && other !== other;
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) return false;
        objIsArr = true;
        objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack);
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
    }
    if (!isSameTag) return false;
    stack || (stack = new Stack);
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) return false;
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
}
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */ function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeys(object) {
    if (!isPrototype(object)) return nativeKeys(object);
    var result = [];
    for(var key in Object(object))if (hasOwnProperty.call(object, key) && key != "constructor") result.push(key);
    return result;
}
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */ function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
    // Assume cyclic values are equal.
    var stacked = stack.get(array);
    if (stacked && stack.get(other)) return stacked == other;
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache : undefined;
    stack.set(array, other);
    stack.set(other, array);
    // Ignore non-index properties.
    while(++index < arrLength){
        var arrValue = array[index], othValue = other[index];
        if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        if (compared !== undefined) {
            if (compared) continue;
            result = false;
            break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
            if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
            })) {
                result = false;
                break;
            }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
        }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
}
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch(tag){
        case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
            object = object.buffer;
            other = other.buffer;
        case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) return false;
            return true;
        case boolTag:
        case dateTag:
        case numberTag:
            // Coerce booleans to `1` or `0` and dates to milliseconds.
            // Invalid dates are coerced to `NaN`.
            return eq(+object, +other);
        case errorTag:
            return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
            // Coerce regexes to strings and treat strings, primitives and objects,
            // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
            // for more details.
            return object == other + "";
        case mapTag:
            var convert = mapToArray;
        case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) return false;
            // Assume cyclic values are equal.
            var stacked = stack.get(object);
            if (stacked) return stacked == other;
            bitmask |= COMPARE_UNORDERED_FLAG;
            // Recursively compare objects (susceptible to call stack limits).
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
        case symbolTag:
            if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
    }
    return false;
}
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) return false;
    var index = objLength;
    while(index--){
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) return false;
    }
    // Assume cyclic values are equal.
    var stacked = stack.get(object);
    if (stacked && stack.get(other)) return stacked == other;
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while(++index < objLength){
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
        }
        skipCtor || (skipCtor = key == "constructor");
    }
    if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) result = false;
    }
    stack["delete"](object);
    stack["delete"](other);
    return result;
}
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */ function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
}
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) value[symToStringTag] = tag;
        else delete value[symToStringTag];
    }
    return result;
}
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */ var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) return [];
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
    });
};
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ var getTag = baseGetTag;
// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set) != setTag || WeakMap && getTag(new WeakMap) != weakMapTag) getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) switch(ctorString){
        case dataViewCtorString:
            return dataViewTag;
        case mapCtorString:
            return mapTag;
        case promiseCtorString:
            return promiseTag;
        case setCtorString:
            return setTag;
        case weakMapCtorString:
            return weakMapTag;
    }
    return result;
};
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == "number" || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
}
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
}
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */ function toSource(func) {
    if (func != null) {
        try {
            return funcToString.call(func);
        } catch (e) {}
        try {
            return func + "";
        } catch (e) {}
    }
    return "";
}
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ function eq(value, other) {
    return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ var isArguments = baseIsArguments(function() {
    return arguments;
}()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */ var isBuffer = nativeIsBuffer || stubFalse;
/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */ function isEqual(value, other) {
    return baseIsEqual(value, other);
}
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    if (!isObject(value)) return false;
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return value != null && typeof value == "object";
}
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */ var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */ function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */ function stubArray() {
    return [];
}
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */ function stubFalse() {
    return false;
}
module.exports = isEqual;

});


parcelRequire.register("2S958", function(module, exports) {

$parcel$export(module.exports, "ISignClient", () => $2177ab6276846008$export$2ebcf6eeacedad44);
$parcel$export(module.exports, "IEngine", () => $2177ab6276846008$export$87df43c730effa30);
parcelRequire("gBjeF");
var $fxPfU = parcelRequire("fxPfU");

var $2fbJO = parcelRequire("2fbJO");
class $2177ab6276846008$export$ed533416df113881 extends (0, $fxPfU.IEvents) {
    constructor(s){
        super(), this.opts = s, this.protocol = "wc", this.version = 2;
    }
}
class $2177ab6276846008$export$a4e7e56f03915894 {
    constructor(s, t, o){
        this.core = s, this.logger = t;
    }
}
class $2177ab6276846008$export$45b2c2643615b67 extends (0, $fxPfU.IEvents) {
    constructor(s, t){
        super(), this.core = s, this.logger = t, this.records = new Map;
    }
}
class $2177ab6276846008$export$e67570fe0a885c47 {
    constructor(s, t){
        this.logger = s, this.core = t;
    }
}
class $2177ab6276846008$export$3b0872bbd7e675a2 extends (0, $fxPfU.IEvents) {
    constructor(s, t){
        super(), this.relayer = s, this.logger = t;
    }
}
class $2177ab6276846008$export$9a0f755fd4f79434 extends (0, $fxPfU.IEvents) {
    constructor(s){
        super();
    }
}
class $2177ab6276846008$export$a7f17ba6c54777e7 {
    constructor(s, t, o, S){
        this.core = s, this.logger = t, this.name = o;
    }
}
class $2177ab6276846008$export$5746ea6dad01660a {
    constructor(){
        this.map = new Map;
    }
}
class $2177ab6276846008$export$300eed987e764b57 extends (0, $fxPfU.IEvents) {
    constructor(s, t){
        super(), this.relayer = s, this.logger = t;
    }
}
class $2177ab6276846008$export$be56d986c75c3691 {
    constructor(s, t){
        this.core = s, this.logger = t;
    }
}
class $2177ab6276846008$export$41aaa3c39f6f2861 extends (0, $fxPfU.IEvents) {
    constructor(s, t){
        super(), this.core = s, this.logger = t;
    }
}
class $2177ab6276846008$export$d6c2d698ffb743f1 {
    constructor(s, t){
        this.logger = s, this.core = t;
    }
}
class $2177ab6276846008$export$235ef727e8a26483 extends (0, (/*@__PURE__*/$parcel$interopDefault($2fbJO))) {
    constructor(){
        super();
    }
}
class $2177ab6276846008$export$2ebcf6eeacedad44 {
    constructor(s){
        this.opts = s, this.protocol = "wc", this.version = 2;
    }
}
class $2177ab6276846008$export$623dd0f793f15643 extends (0, $2fbJO.EventEmitter) {
    constructor(){
        super();
    }
}
class $2177ab6276846008$export$87df43c730effa30 {
    constructor(s){
        this.client = s;
    }
}

});

parcelRequire.register("3xtlW", function(module, exports) {

$parcel$export(module.exports, "TYPE_1", () => $293b390ef9459a6c$export$406e97c329f0f3d4);
$parcel$export(module.exports, "getAppMetadata", () => $293b390ef9459a6c$export$ba31e015127122bb);
$parcel$export(module.exports, "calcExpiry", () => $293b390ef9459a6c$export$b136d03015bfc12);
$parcel$export(module.exports, "isExpired", () => $293b390ef9459a6c$export$57947cfd429801a2);
$parcel$export(module.exports, "createDelayedPromise", () => $293b390ef9459a6c$export$cbf9e3cc9ffc85cb);
$parcel$export(module.exports, "parseExpirerTarget", () => $293b390ef9459a6c$export$93adeb0f16e8e51d);
$parcel$export(module.exports, "engineEvent", () => $293b390ef9459a6c$export$e3eb27ce66c0f6d9);
$parcel$export(module.exports, "getRequiredNamespacesFromNamespaces", () => $293b390ef9459a6c$export$a8daa26a7c60ef90);
$parcel$export(module.exports, "isValidNamespaces", () => $293b390ef9459a6c$export$93f7b81dc815a714);
$parcel$export(module.exports, "getInternalError", () => $293b390ef9459a6c$export$500d4c4a8fafe35);
$parcel$export(module.exports, "getSdkError", () => $293b390ef9459a6c$export$8203ef1531c8b5b5);
$parcel$export(module.exports, "isValidObject", () => $293b390ef9459a6c$export$16a0268bc22b47b0);
$parcel$export(module.exports, "isUndefined", () => $293b390ef9459a6c$export$fce6876652108ab);
$parcel$export(module.exports, "isValidString", () => $293b390ef9459a6c$export$ee898ca48ab56c74);
$parcel$export(module.exports, "isSessionCompatible", () => $293b390ef9459a6c$export$6fc4971bf8f326a);
$parcel$export(module.exports, "isValidController", () => $293b390ef9459a6c$export$5e1c5c89613c213f);
$parcel$export(module.exports, "isValidRequiredNamespaces", () => $293b390ef9459a6c$export$9e2b2cae22c6a8b3);
$parcel$export(module.exports, "isValidRelay", () => $293b390ef9459a6c$export$1b3fc298be8c9a7b);
$parcel$export(module.exports, "isValidRelays", () => $293b390ef9459a6c$export$6294c30b976bd21e);
$parcel$export(module.exports, "isValidId", () => $293b390ef9459a6c$export$53551be28ad5e34d);
$parcel$export(module.exports, "isValidParams", () => $293b390ef9459a6c$export$b3f5fcca1d210454);
$parcel$export(module.exports, "isValidErrorReason", () => $293b390ef9459a6c$export$766fe78377d96f2a);
$parcel$export(module.exports, "isValidRequest", () => $293b390ef9459a6c$export$1a2af3c017fb6d42);
$parcel$export(module.exports, "isValidResponse", () => $293b390ef9459a6c$export$1ae38cf0a848f651);
$parcel$export(module.exports, "isValidEvent", () => $293b390ef9459a6c$export$cbe4cdc5960cfa11);
$parcel$export(module.exports, "isValidNamespacesChainId", () => $293b390ef9459a6c$export$144fc36610eb6522);
$parcel$export(module.exports, "isValidNamespacesRequest", () => $293b390ef9459a6c$export$8db4804e3a6de711);
$parcel$export(module.exports, "isValidNamespacesEvent", () => $293b390ef9459a6c$export$df2c67ef8baad16b);
$parcel$export(module.exports, "isConformingNamespaces", () => $293b390ef9459a6c$export$ba5b0a4b585cd1b4);
$parcel$export(module.exports, "isValidRequestExpiry", () => $293b390ef9459a6c$export$59fba2af1ac782b);

var $3TRbz = parcelRequire("3TRbz");

var $5E4JY = parcelRequire("5E4JY");

var $2SEZb = parcelRequire("2SEZb");

var $46Gtt = parcelRequire("46Gtt");

var $2FSze = parcelRequire("2FSze");

var $6yXrI = parcelRequire("6yXrI");

var $22Zln = parcelRequire("22Zln");

var $gm49L = parcelRequire("gm49L");

var $jeE37 = parcelRequire("jeE37");

var $vntIm = parcelRequire("vntIm");

var $jplpt = parcelRequire("jplpt");
parcelRequire("akZap");
var $5G6lt = parcelRequire("5G6lt");

var $4DZrq = parcelRequire("4DZrq");
const $293b390ef9459a6c$var$P = ":";
function $293b390ef9459a6c$export$4764229d78de4437(e) {
    const [n, t] = e.split($293b390ef9459a6c$var$P);
    return {
        namespace: n,
        reference: t
    };
}
function $293b390ef9459a6c$export$a5999672e4930644(e) {
    const { namespace: n , reference: t  } = e;
    return [
        n,
        t
    ].join($293b390ef9459a6c$var$P);
}
function $293b390ef9459a6c$export$276ab0158c66e3d(e) {
    const [n, t, r] = e.split($293b390ef9459a6c$var$P);
    return {
        namespace: n,
        reference: t,
        address: r
    };
}
function $293b390ef9459a6c$export$566a25328fb93a18(e) {
    const { namespace: n , reference: t , address: r  } = e;
    return [
        n,
        t,
        r
    ].join($293b390ef9459a6c$var$P);
}
function $293b390ef9459a6c$export$d579bc26e95946b5(e, n) {
    const t = [];
    return e.forEach((r)=>{
        const o = n(r);
        t.includes(o) || t.push(o);
    }), t;
}
function $293b390ef9459a6c$export$2806d446053abd1d(e) {
    const { address: n  } = $293b390ef9459a6c$export$276ab0158c66e3d(e);
    return n;
}
function $293b390ef9459a6c$export$93512919ec2ab555(e) {
    const { namespace: n , reference: t  } = $293b390ef9459a6c$export$276ab0158c66e3d(e);
    return $293b390ef9459a6c$export$a5999672e4930644({
        namespace: n,
        reference: t
    });
}
function $293b390ef9459a6c$export$40283ddc77f27f6e(e, n) {
    const { namespace: t , reference: r  } = $293b390ef9459a6c$export$4764229d78de4437(n);
    return $293b390ef9459a6c$export$566a25328fb93a18({
        namespace: t,
        reference: r,
        address: e
    });
}
function $293b390ef9459a6c$export$aa4a6b630dfcfa83(e) {
    return $293b390ef9459a6c$export$d579bc26e95946b5(e, $293b390ef9459a6c$export$2806d446053abd1d);
}
function $293b390ef9459a6c$export$d5ee58c6b13696e9(e) {
    return $293b390ef9459a6c$export$d579bc26e95946b5(e, $293b390ef9459a6c$export$93512919ec2ab555);
}
function $293b390ef9459a6c$export$23329703ad972840(e, n = []) {
    const t = [];
    return Object.keys(e).forEach((r)=>{
        if (n.length && !n.includes(r)) return;
        const o = e[r];
        t.push(...o.accounts);
    }), t;
}
function $293b390ef9459a6c$export$6281ff29da5f85fe(e, n = []) {
    const t = [];
    return Object.keys(e).forEach((r)=>{
        if (n.length && !n.includes(r)) return;
        const o = e[r];
        t.push(...$293b390ef9459a6c$export$d5ee58c6b13696e9(o.accounts));
    }), t;
}
function $293b390ef9459a6c$export$d1109eeb751412cf(e, n = []) {
    const t = [];
    return Object.keys(e).forEach((r)=>{
        if (n.length && !n.includes(r)) return;
        const o = e[r];
        t.push(...o.chains);
    }), t;
}
const $293b390ef9459a6c$export$a524ae552db7912 = (e)=>e?.split(":"), $293b390ef9459a6c$export$85f23c05c80b194 = (e)=>{
    const n = e && $293b390ef9459a6c$export$a524ae552db7912(e);
    if (n) return n[3];
}, $293b390ef9459a6c$export$a8b149927aef7051 = (e)=>{
    const n = e && $293b390ef9459a6c$export$a524ae552db7912(e);
    if (n) return n[2] + ":" + n[3];
}, $293b390ef9459a6c$export$bf43cfbb4bd95de9 = (e)=>{
    const n = e && $293b390ef9459a6c$export$a524ae552db7912(e);
    if (n) return n.pop();
}, $293b390ef9459a6c$export$25868d1e8e76735f = (e, n)=>{
    const t = `${e.domain} wants you to sign in with your Ethereum account:`, r = $293b390ef9459a6c$export$bf43cfbb4bd95de9(n), o = e.statement, s = `URI: ${e.aud}`, i = `Version: ${e.version}`, u = `Chain ID: ${$293b390ef9459a6c$export$85f23c05c80b194(n)}`, f = `Nonce: ${e.nonce}`, g = `Issued At: ${e.iat}`, O = e.resources && e.resources.length > 0 ? `Resources:
${e.resources.map((p)=>`- ${p}`).join(`
`)}` : void 0;
    return [
        t,
        r,
        "",
        o,
        "",
        s,
        i,
        u,
        f,
        g,
        O
    ].filter((p)=>p != null).join(`
`);
}, $293b390ef9459a6c$export$f7403969428298bd = "base10", $293b390ef9459a6c$export$49eb910ab2518105 = "base16", $293b390ef9459a6c$export$9bff723d552e6bcf = "base64pad", $293b390ef9459a6c$export$9560dad2a83e4f04 = "utf8", $293b390ef9459a6c$export$3425bd336a9673d8 = 0, $293b390ef9459a6c$export$406e97c329f0f3d4 = 1, $293b390ef9459a6c$var$sn = 0, $293b390ef9459a6c$var$de = 1, $293b390ef9459a6c$var$K = 12, $293b390ef9459a6c$var$k = 32;
function $293b390ef9459a6c$export$a949d36eab55b41f() {
    const e = $2FSze.generateKeyPair();
    return {
        privateKey: (0, $6yXrI.toString)(e.secretKey, $293b390ef9459a6c$export$49eb910ab2518105),
        publicKey: (0, $6yXrI.toString)(e.publicKey, $293b390ef9459a6c$export$49eb910ab2518105)
    };
}
function $293b390ef9459a6c$export$d15a28e4f1821243() {
    const e = (0, $2SEZb.randomBytes)($293b390ef9459a6c$var$k);
    return (0, $6yXrI.toString)(e, $293b390ef9459a6c$export$49eb910ab2518105);
}
function $293b390ef9459a6c$export$f8378f68e053f5c6(e, n) {
    const t = $2FSze.sharedKey((0, $6yXrI.fromString)(e, $293b390ef9459a6c$export$49eb910ab2518105), (0, $6yXrI.fromString)(n, $293b390ef9459a6c$export$49eb910ab2518105)), r = new (0, $5E4JY.HKDF)((0, $46Gtt.SHA256), t).expand($293b390ef9459a6c$var$k);
    return (0, $6yXrI.toString)(r, $293b390ef9459a6c$export$49eb910ab2518105);
}
function $293b390ef9459a6c$export$1e87d19d4aab5805(e) {
    const n = (0, $46Gtt.hash)((0, $6yXrI.fromString)(e, $293b390ef9459a6c$export$49eb910ab2518105));
    return (0, $6yXrI.toString)(n, $293b390ef9459a6c$export$49eb910ab2518105);
}
function $293b390ef9459a6c$export$d4c241cec96564c1(e) {
    const n = (0, $46Gtt.hash)((0, $6yXrI.fromString)(e, $293b390ef9459a6c$export$9560dad2a83e4f04));
    return (0, $6yXrI.toString)(n, $293b390ef9459a6c$export$49eb910ab2518105);
}
function $293b390ef9459a6c$export$e9d2f9ba70428fb6(e) {
    return (0, $6yXrI.fromString)(`${e}`, $293b390ef9459a6c$export$f7403969428298bd);
}
function $293b390ef9459a6c$export$7547a514ee29b9d4(e) {
    return Number((0, $6yXrI.toString)(e, $293b390ef9459a6c$export$f7403969428298bd));
}
function $293b390ef9459a6c$export$5b0f6292f11d1d18(e) {
    const n = $293b390ef9459a6c$export$e9d2f9ba70428fb6(typeof e.type < "u" ? e.type : $293b390ef9459a6c$export$3425bd336a9673d8);
    if ($293b390ef9459a6c$export$7547a514ee29b9d4(n) === $293b390ef9459a6c$export$406e97c329f0f3d4 && typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    const t = typeof e.senderPublicKey < "u" ? (0, $6yXrI.fromString)(e.senderPublicKey, $293b390ef9459a6c$export$49eb910ab2518105) : void 0, r = typeof e.iv < "u" ? (0, $6yXrI.fromString)(e.iv, $293b390ef9459a6c$export$49eb910ab2518105) : (0, $2SEZb.randomBytes)($293b390ef9459a6c$var$K), o = new (0, $3TRbz.ChaCha20Poly1305)((0, $6yXrI.fromString)(e.symKey, $293b390ef9459a6c$export$49eb910ab2518105)).seal(r, (0, $6yXrI.fromString)(e.message, $293b390ef9459a6c$export$9560dad2a83e4f04));
    return $293b390ef9459a6c$export$dfdc1655ccc5b9cb({
        type: n,
        sealed: o,
        iv: r,
        senderPublicKey: t
    });
}
function $293b390ef9459a6c$export$e85a0c9a1067c5d3(e) {
    const n = new (0, $3TRbz.ChaCha20Poly1305)((0, $6yXrI.fromString)(e.symKey, $293b390ef9459a6c$export$49eb910ab2518105)), { sealed: t , iv: r  } = $293b390ef9459a6c$export$efcd34ab6248d3cd(e.encoded), o = n.open(r, t);
    if (o === null) throw new Error("Failed to decrypt");
    return (0, $6yXrI.toString)(o, $293b390ef9459a6c$export$9560dad2a83e4f04);
}
function $293b390ef9459a6c$export$dfdc1655ccc5b9cb(e) {
    if ($293b390ef9459a6c$export$7547a514ee29b9d4(e.type) === $293b390ef9459a6c$export$406e97c329f0f3d4) {
        if (typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
        return (0, $6yXrI.toString)((0, $6yXrI.concat)([
            e.type,
            e.senderPublicKey,
            e.iv,
            e.sealed
        ]), $293b390ef9459a6c$export$9bff723d552e6bcf);
    }
    return (0, $6yXrI.toString)((0, $6yXrI.concat)([
        e.type,
        e.iv,
        e.sealed
    ]), $293b390ef9459a6c$export$9bff723d552e6bcf);
}
function $293b390ef9459a6c$export$efcd34ab6248d3cd(e) {
    const n = (0, $6yXrI.fromString)(e, $293b390ef9459a6c$export$9bff723d552e6bcf), t = n.slice($293b390ef9459a6c$var$sn, $293b390ef9459a6c$var$de), r = $293b390ef9459a6c$var$de;
    if ($293b390ef9459a6c$export$7547a514ee29b9d4(t) === $293b390ef9459a6c$export$406e97c329f0f3d4) {
        const u = r + $293b390ef9459a6c$var$k, f = u + $293b390ef9459a6c$var$K, g = n.slice(r, u), O = n.slice(u, f), p = n.slice(f);
        return {
            type: t,
            sealed: p,
            iv: O,
            senderPublicKey: g
        };
    }
    const o = r + $293b390ef9459a6c$var$K, s = n.slice(r, o), i = n.slice(o);
    return {
        type: t,
        sealed: i,
        iv: s
    };
}
function $293b390ef9459a6c$export$177f3e316562333d(e, n) {
    const t = $293b390ef9459a6c$export$efcd34ab6248d3cd(e);
    return $293b390ef9459a6c$export$7949f60f2444aef2({
        type: $293b390ef9459a6c$export$7547a514ee29b9d4(t.type),
        senderPublicKey: typeof t.senderPublicKey < "u" ? (0, $6yXrI.toString)(t.senderPublicKey, $293b390ef9459a6c$export$49eb910ab2518105) : void 0,
        receiverPublicKey: n?.receiverPublicKey
    });
}
function $293b390ef9459a6c$export$7949f60f2444aef2(e) {
    const n = e?.type || $293b390ef9459a6c$export$3425bd336a9673d8;
    if (n === $293b390ef9459a6c$export$406e97c329f0f3d4) {
        if (typeof e?.senderPublicKey > "u") throw new Error("missing sender public key");
        if (typeof e?.receiverPublicKey > "u") throw new Error("missing receiver public key");
    }
    return {
        type: n,
        senderPublicKey: e?.senderPublicKey,
        receiverPublicKey: e?.receiverPublicKey
    };
}
function $293b390ef9459a6c$export$8c165704db2d5c15(e) {
    return e.type === $293b390ef9459a6c$export$406e97c329f0f3d4 && typeof e.senderPublicKey == "string" && typeof e.receiverPublicKey == "string";
}
var $293b390ef9459a6c$var$En = Object.defineProperty, $293b390ef9459a6c$var$me = Object.getOwnPropertySymbols, $293b390ef9459a6c$var$gn = Object.prototype.hasOwnProperty, $293b390ef9459a6c$var$hn = Object.prototype.propertyIsEnumerable, $293b390ef9459a6c$var$ye = (e, n, t)=>n in e ? $293b390ef9459a6c$var$En(e, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[n] = t, $293b390ef9459a6c$var$Ee = (e, n)=>{
    for(var t in n || (n = {}))$293b390ef9459a6c$var$gn.call(n, t) && $293b390ef9459a6c$var$ye(e, t, n[t]);
    if ($293b390ef9459a6c$var$me) for (var t of $293b390ef9459a6c$var$me(n))$293b390ef9459a6c$var$hn.call(n, t) && $293b390ef9459a6c$var$ye(e, t, n[t]);
    return e;
};
const $293b390ef9459a6c$export$f12873d77424d47b = "ReactNative", $293b390ef9459a6c$export$86b1301a63b15dd9 = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown"
}, $293b390ef9459a6c$export$657dee6d5648750a = " ", $293b390ef9459a6c$export$96c3628b3b9d2079 = ":", $293b390ef9459a6c$export$98238152dfccf046 = "/", $293b390ef9459a6c$export$7f882bb969de14a3 = 2, $293b390ef9459a6c$export$77baccb4c6bd5852 = 1e3, $293b390ef9459a6c$export$e08b61c98317d88c = "js";
function $293b390ef9459a6c$export$8ee0fc9ee280b4ee() {
    return typeof $4DZrq < "u" && typeof $4DZrq.versions < "u" && typeof $4DZrq.versions.node < "u";
}
function $293b390ef9459a6c$export$f7a1e23e542d38e3() {
    return !(0, $jeE37.getDocument)() && !!(0, $jeE37.getNavigator)() && navigator.product === $293b390ef9459a6c$export$f12873d77424d47b;
}
function $293b390ef9459a6c$export$4e09c449d6c407f7() {
    return !$293b390ef9459a6c$export$8ee0fc9ee280b4ee() && !!(0, $jeE37.getNavigator)();
}
function $293b390ef9459a6c$export$57570b1603cf6adb() {
    return $293b390ef9459a6c$export$f7a1e23e542d38e3() ? $293b390ef9459a6c$export$86b1301a63b15dd9.reactNative : $293b390ef9459a6c$export$8ee0fc9ee280b4ee() ? $293b390ef9459a6c$export$86b1301a63b15dd9.node : $293b390ef9459a6c$export$4e09c449d6c407f7() ? $293b390ef9459a6c$export$86b1301a63b15dd9.browser : $293b390ef9459a6c$export$86b1301a63b15dd9.unknown;
}
function $293b390ef9459a6c$export$c4147c69f6845da(e, n) {
    let t = $jplpt.parse(e);
    return t = $293b390ef9459a6c$var$Ee($293b390ef9459a6c$var$Ee({}, t), n), e = $jplpt.stringify(t), e;
}
function $293b390ef9459a6c$export$ba31e015127122bb() {
    return (0, $vntIm.getWindowMetadata)() || {
        name: "",
        description: "",
        url: "",
        icons: [
            ""
        ]
    };
}
function $293b390ef9459a6c$export$6b05aa0115b6fc2d(e, n) {
    var t;
    const r = $293b390ef9459a6c$export$57570b1603cf6adb(), o = {
        protocol: e,
        version: n,
        env: r
    };
    return r === "browser" && (o.host = ((t = (0, $jeE37.getLocation)()) == null ? void 0 : t.host) || "unknown"), o;
}
function $293b390ef9459a6c$export$20d4a3cb5829b8b6() {
    const e = (0, $22Zln.detect)();
    if (e === null) return "unknown";
    const n = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
    return e.type === "browser" ? [
        n,
        e.name,
        e.version
    ].join("-") : [
        n,
        e.version
    ].join("-");
}
function $293b390ef9459a6c$export$4389b0987726d52d() {
    var e;
    const n = $293b390ef9459a6c$export$57570b1603cf6adb();
    return n === $293b390ef9459a6c$export$86b1301a63b15dd9.browser ? [
        n,
        ((e = (0, $jeE37.getLocation)()) == null ? void 0 : e.host) || "unknown"
    ].join(":") : n;
}
function $293b390ef9459a6c$export$b55a4c6e272b719f(e, n, t) {
    const r = $293b390ef9459a6c$export$20d4a3cb5829b8b6(), o = $293b390ef9459a6c$export$4389b0987726d52d();
    return [
        [
            e,
            n
        ].join("-"),
        [
            $293b390ef9459a6c$export$e08b61c98317d88c,
            t
        ].join("-"),
        r,
        o
    ].join("/");
}
function $293b390ef9459a6c$export$d875b3963ef774f5({ protocol: e , version: n , relayUrl: t , sdkVersion: r , auth: o , projectId: s  }) {
    const i = t.split("?"), u = $293b390ef9459a6c$export$b55a4c6e272b719f(e, n, r), f = {
        auth: o,
        ua: u,
        projectId: s
    }, g = $293b390ef9459a6c$export$c4147c69f6845da(i[1] || "", f);
    return i[0] + "?" + g;
}
function $293b390ef9459a6c$export$ed08891a8a54eb(e) {
    let n = (e.match(/^[^:]+(?=:\/\/)/gi) || [])[0];
    const t = typeof n < "u" ? e.split("://")[1] : e;
    return n = n === "wss" ? "https" : "http", [
        n,
        t
    ].join("://");
}
function $293b390ef9459a6c$export$804de46662e4ac95(e, n, t) {
    if (!e[n] || typeof e[n] !== t) throw new Error(`Missing or invalid "${n}" param`);
}
function $293b390ef9459a6c$export$1e21530e896c0b0b(e, n = $293b390ef9459a6c$export$7f882bb969de14a3) {
    return $293b390ef9459a6c$export$7f00885504704576(e.split($293b390ef9459a6c$export$98238152dfccf046), n);
}
function $293b390ef9459a6c$export$80bffd46c37a96f6(e) {
    return $293b390ef9459a6c$export$1e21530e896c0b0b(e).join($293b390ef9459a6c$export$657dee6d5648750a);
}
function $293b390ef9459a6c$export$1468a49de573f7f9(e, n) {
    return e.filter((t)=>n.includes(t)).length === e.length;
}
function $293b390ef9459a6c$export$7f00885504704576(e, n = $293b390ef9459a6c$export$7f882bb969de14a3) {
    return e.slice(Math.max(e.length - n, 0));
}
function $293b390ef9459a6c$export$c4b8dfeb6e237eb9(e) {
    return Object.fromEntries(e.entries());
}
function $293b390ef9459a6c$export$ac31b37c726bc3ba(e) {
    return new Map(Object.entries(e));
}
function $293b390ef9459a6c$export$592ef47eabb05614(e, n) {
    const t = {};
    return Object.keys(e).forEach((r)=>{
        t[r] = n(e[r]);
    }), t;
}
const $293b390ef9459a6c$export$85c927578394b28b = (e)=>e;
function $293b390ef9459a6c$export$e9f8fcacef3bca4b(e) {
    return e.trim().replace(/^\w/, (n)=>n.toUpperCase());
}
function $293b390ef9459a6c$export$9a00dee1beb8f576(e) {
    return e.split($293b390ef9459a6c$export$657dee6d5648750a).map((n)=>$293b390ef9459a6c$export$e9f8fcacef3bca4b(n)).join($293b390ef9459a6c$export$657dee6d5648750a);
}
function $293b390ef9459a6c$export$b136d03015bfc12(e, n) {
    return (0, $gm49L.fromMiliseconds)((n || Date.now()) + (0, $gm49L.toMiliseconds)(e));
}
function $293b390ef9459a6c$export$57947cfd429801a2(e) {
    return (0, $gm49L.fromMiliseconds)(Date.now()) >= (0, $gm49L.toMiliseconds)(e);
}
function $293b390ef9459a6c$export$cbf9e3cc9ffc85cb(e) {
    const n = (0, $gm49L.toMiliseconds)(e || (0, $gm49L.FIVE_MINUTES));
    let t, r, o;
    return {
        resolve: (s)=>{
            o && t && (clearTimeout(o), t(s));
        },
        reject: (s)=>{
            o && r && (clearTimeout(o), r(s));
        },
        done: ()=>new Promise((s, i)=>{
                o = setTimeout(i, n), t = s, r = i;
            })
    };
}
function $293b390ef9459a6c$export$3da2293b007ed708(e, n) {
    return new Promise(async (t, r)=>{
        const o = setTimeout(()=>r(), n), s = await e;
        clearTimeout(o), t(s);
    });
}
function $293b390ef9459a6c$export$187ab6574b2ae23f(e, n) {
    if (typeof n == "string" && n.startsWith(`${e}:`)) return n;
    if (e.toLowerCase() === "topic") {
        if (typeof n != "string") throw new Error('Value must be "string" for expirer target type: topic');
        return `topic:${n}`;
    } else if (e.toLowerCase() === "id") {
        if (typeof n != "number") throw new Error('Value must be "number" for expirer target type: id');
        return `id:${n}`;
    }
    throw new Error(`Unknown expirer target type: ${e}`);
}
function $293b390ef9459a6c$export$43ab92477f8713b9(e) {
    return $293b390ef9459a6c$export$187ab6574b2ae23f("topic", e);
}
function $293b390ef9459a6c$export$bd13103c2e5cc0c3(e) {
    return $293b390ef9459a6c$export$187ab6574b2ae23f("id", e);
}
function $293b390ef9459a6c$export$93adeb0f16e8e51d(e) {
    const [n, t] = e.split(":"), r = {
        id: void 0,
        topic: void 0
    };
    if (n === "topic" && typeof t == "string") r.topic = t;
    else if (n === "id" && Number.isInteger(Number(t))) r.id = Number(t);
    else throw new Error(`Invalid target, expected id:number or topic:string, got ${n}:${t}`);
    return r;
}
function $293b390ef9459a6c$export$e3eb27ce66c0f6d9(e, n) {
    return `${e}${n ? `:${n}` : ""}`;
}
const $293b390ef9459a6c$export$822d0bd1635d5360 = "irn";
function $293b390ef9459a6c$export$cf77af25151525db(e) {
    return e?.relay || {
        protocol: $293b390ef9459a6c$export$822d0bd1635d5360
    };
}
function $293b390ef9459a6c$export$604e3deb95e1b734(e) {
    const n = (0, $5G6lt.RELAY_JSONRPC)[e];
    if (typeof n > "u") throw new Error(`Relay Protocol not supported: ${e}`);
    return n;
}
var $293b390ef9459a6c$var$Fn = Object.defineProperty, $293b390ef9459a6c$var$Ae = Object.getOwnPropertySymbols, $293b390ef9459a6c$var$Hn = Object.prototype.hasOwnProperty, $293b390ef9459a6c$var$qn = Object.prototype.propertyIsEnumerable, $293b390ef9459a6c$var$we = (e, n, t)=>n in e ? $293b390ef9459a6c$var$Fn(e, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[n] = t, $293b390ef9459a6c$var$Bn = (e, n)=>{
    for(var t in n || (n = {}))$293b390ef9459a6c$var$Hn.call(n, t) && $293b390ef9459a6c$var$we(e, t, n[t]);
    if ($293b390ef9459a6c$var$Ae) for (var t of $293b390ef9459a6c$var$Ae(n))$293b390ef9459a6c$var$qn.call(n, t) && $293b390ef9459a6c$var$we(e, t, n[t]);
    return e;
};
function $293b390ef9459a6c$export$3d24f408c2ac468a(e, n = "-") {
    const t = {}, r = "relay" + n;
    return Object.keys(e).forEach((o)=>{
        if (o.startsWith(r)) {
            const s = o.replace(r, ""), i = e[o];
            t[s] = i;
        }
    }), t;
}
function $293b390ef9459a6c$export$59f58847421cfb28(e) {
    const n = e.indexOf(":"), t = e.indexOf("?") !== -1 ? e.indexOf("?") : void 0, r = e.substring(0, n), o = e.substring(n + 1, t).split("@"), s = typeof t < "u" ? e.substring(t) : "", i = $jplpt.parse(s);
    return {
        protocol: r,
        topic: o[0],
        version: parseInt(o[1], 10),
        symKey: i.symKey,
        relay: $293b390ef9459a6c$export$3d24f408c2ac468a(i)
    };
}
function $293b390ef9459a6c$export$65c55c7ccd19bb8f(e, n = "-") {
    const t = "relay", r = {};
    return Object.keys(e).forEach((o)=>{
        const s = t + n + o;
        e[o] && (r[s] = e[o]);
    }), r;
}
function $293b390ef9459a6c$export$b2786ede34fb2350(e) {
    return `${e.protocol}:${e.topic}@${e.version}?` + $jplpt.stringify($293b390ef9459a6c$var$Bn({
        symKey: e.symKey
    }, $293b390ef9459a6c$export$65c55c7ccd19bb8f(e.relay)));
}
function $293b390ef9459a6c$export$d46695d9c3664fe9(e) {
    const n = [];
    return e.forEach((t)=>{
        const [r, o] = t.split(":");
        n.push(`${r}:${o}`);
    }), n;
}
function $293b390ef9459a6c$export$fb6db6038e742b14(e) {
    const n = [];
    return Object.values(e).forEach((t)=>{
        n.push(...$293b390ef9459a6c$export$d46695d9c3664fe9(t.accounts));
    }), n;
}
function $293b390ef9459a6c$export$7dcf4808e17b15ac(e, n) {
    const t = [];
    return Object.values(e).forEach((r)=>{
        $293b390ef9459a6c$export$d46695d9c3664fe9(r.accounts).includes(n) && t.push(...r.methods);
    }), t;
}
function $293b390ef9459a6c$export$94ee6d00e384a22(e, n) {
    const t = [];
    return Object.values(e).forEach((r)=>{
        $293b390ef9459a6c$export$d46695d9c3664fe9(r.accounts).includes(n) && t.push(...r.events);
    }), t;
}
function $293b390ef9459a6c$export$a8daa26a7c60ef90(e, n) {
    const t = $293b390ef9459a6c$export$93f7b81dc815a714(e, n);
    if (t) throw new Error(t.message);
    const r = {};
    for (const [o, s] of Object.entries(e))r[o] = {
        methods: s.methods,
        events: s.events,
        chains: s.accounts.map((i)=>`${i.split(":")[0]}:${i.split(":")[1]}`)
    };
    return r;
}
const $293b390ef9459a6c$var$Wn = {
    INVALID_METHOD: {
        message: "Invalid method.",
        code: 1001
    },
    INVALID_EVENT: {
        message: "Invalid event.",
        code: 1002
    },
    INVALID_UPDATE_REQUEST: {
        message: "Invalid update request.",
        code: 1003
    },
    INVALID_EXTEND_REQUEST: {
        message: "Invalid extend request.",
        code: 1004
    },
    INVALID_SESSION_SETTLE_REQUEST: {
        message: "Invalid session settle request.",
        code: 1005
    },
    UNAUTHORIZED_METHOD: {
        message: "Unauthorized method.",
        code: 3001
    },
    UNAUTHORIZED_EVENT: {
        message: "Unauthorized event.",
        code: 3002
    },
    UNAUTHORIZED_UPDATE_REQUEST: {
        message: "Unauthorized update request.",
        code: 3003
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
        message: "Unauthorized extend request.",
        code: 3004
    },
    USER_REJECTED: {
        message: "User rejected.",
        code: 5e3
    },
    USER_REJECTED_CHAINS: {
        message: "User rejected chains.",
        code: 5001
    },
    USER_REJECTED_METHODS: {
        message: "User rejected methods.",
        code: 5002
    },
    USER_REJECTED_EVENTS: {
        message: "User rejected events.",
        code: 5003
    },
    UNSUPPORTED_CHAINS: {
        message: "Unsupported chains.",
        code: 5100
    },
    UNSUPPORTED_METHODS: {
        message: "Unsupported methods.",
        code: 5101
    },
    UNSUPPORTED_EVENTS: {
        message: "Unsupported events.",
        code: 5102
    },
    UNSUPPORTED_ACCOUNTS: {
        message: "Unsupported accounts.",
        code: 5103
    },
    UNSUPPORTED_NAMESPACE_KEY: {
        message: "Unsupported namespace key.",
        code: 5104
    },
    USER_DISCONNECTED: {
        message: "User disconnected.",
        code: 6e3
    },
    SESSION_SETTLEMENT_FAILED: {
        message: "Session settlement failed.",
        code: 7e3
    },
    WC_METHOD_UNSUPPORTED: {
        message: "Unsupported wc_ method.",
        code: 10001
    }
}, $293b390ef9459a6c$var$Jn = {
    NOT_INITIALIZED: {
        message: "Not initialized.",
        code: 1
    },
    NO_MATCHING_KEY: {
        message: "No matching key.",
        code: 2
    },
    RESTORE_WILL_OVERRIDE: {
        message: "Restore will override.",
        code: 3
    },
    RESUBSCRIBED: {
        message: "Resubscribed.",
        code: 4
    },
    MISSING_OR_INVALID: {
        message: "Missing or invalid.",
        code: 5
    },
    EXPIRED: {
        message: "Expired.",
        code: 6
    },
    UNKNOWN_TYPE: {
        message: "Unknown type.",
        code: 7
    },
    MISMATCHED_TOPIC: {
        message: "Mismatched topic.",
        code: 8
    },
    NON_CONFORMING_NAMESPACES: {
        message: "Non conforming namespaces.",
        code: 9
    }
};
function $293b390ef9459a6c$export$500d4c4a8fafe35(e, n) {
    const { message: t , code: r  } = $293b390ef9459a6c$var$Jn[e];
    return {
        message: n ? `${t} ${n}` : t,
        code: r
    };
}
function $293b390ef9459a6c$export$8203ef1531c8b5b5(e, n) {
    const { message: t , code: r  } = $293b390ef9459a6c$var$Wn[e];
    return {
        message: n ? `${t} ${n}` : t,
        code: r
    };
}
function $293b390ef9459a6c$export$41dd3d480aac4a71(e, n) {
    return Array.isArray(e) ? typeof n < "u" && e.length ? e.every(n) : !0 : !1;
}
function $293b390ef9459a6c$export$16a0268bc22b47b0(e) {
    return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
}
function $293b390ef9459a6c$export$fce6876652108ab(e) {
    return typeof e > "u";
}
function $293b390ef9459a6c$export$ee898ca48ab56c74(e, n) {
    return n && $293b390ef9459a6c$export$fce6876652108ab(e) ? !0 : typeof e == "string" && Boolean(e.trim().length);
}
function $293b390ef9459a6c$export$d6781b696a0576d1(e, n) {
    return n && $293b390ef9459a6c$export$fce6876652108ab(e) ? !0 : typeof e == "number" && !isNaN(e);
}
function $293b390ef9459a6c$export$6fc4971bf8f326a(e, n) {
    const { requiredNamespaces: t  } = n, r = Object.keys(e.namespaces), o = Object.keys(t);
    let s = !0;
    return $293b390ef9459a6c$export$1468a49de573f7f9(o, r) ? (r.forEach((i)=>{
        const { accounts: u , methods: f , events: g  } = e.namespaces[i], O = $293b390ef9459a6c$export$d46695d9c3664fe9(u), p = t[i];
        (!$293b390ef9459a6c$export$1468a49de573f7f9(p.chains, O) || !$293b390ef9459a6c$export$1468a49de573f7f9(p.methods, f) || !$293b390ef9459a6c$export$1468a49de573f7f9(p.events, g)) && (s = !1);
    }), s) : !1;
}
function $293b390ef9459a6c$export$e544b39f0a22e47a(e) {
    return $293b390ef9459a6c$export$ee898ca48ab56c74(e, !1) && e.includes(":") ? e.split(":").length === 2 : !1;
}
function $293b390ef9459a6c$export$49e4a5b6862e3c71(e) {
    if ($293b390ef9459a6c$export$ee898ca48ab56c74(e, !1) && e.includes(":")) {
        const n = e.split(":");
        if (n.length === 3) {
            const t = n[0] + ":" + n[1];
            return !!n[2] && $293b390ef9459a6c$export$e544b39f0a22e47a(t);
        }
    }
    return !1;
}
function $293b390ef9459a6c$export$bef94a5618bf18bf(e) {
    if ($293b390ef9459a6c$export$ee898ca48ab56c74(e, !1)) try {
        return typeof new URL(e) < "u";
    } catch  {
        return !1;
    }
    return !1;
}
function $293b390ef9459a6c$export$f657f7976bb2769d(e) {
    var n;
    return (n = e?.proposer) == null ? void 0 : n.publicKey;
}
function $293b390ef9459a6c$export$c96d5113768aaf5e(e) {
    return e?.topic;
}
function $293b390ef9459a6c$export$5e1c5c89613c213f(e, n) {
    let t = null;
    return $293b390ef9459a6c$export$ee898ca48ab56c74(e?.publicKey, !1) || (t = $293b390ef9459a6c$export$500d4c4a8fafe35("MISSING_OR_INVALID", `${n} controller public key should be a string`)), t;
}
function $293b390ef9459a6c$export$c12fced8176774f3(e) {
    let n = !0;
    return $293b390ef9459a6c$export$41dd3d480aac4a71(e) ? e.length && (n = e.every((t)=>$293b390ef9459a6c$export$ee898ca48ab56c74(t, !1))) : n = !1, n;
}
function $293b390ef9459a6c$export$df46c123d7e298ce(e, n, t) {
    let r = null;
    return $293b390ef9459a6c$export$41dd3d480aac4a71(n) ? n.forEach((o)=>{
        r || (!$293b390ef9459a6c$export$e544b39f0a22e47a(o) || !o.includes(e)) && (r = $293b390ef9459a6c$export$8203ef1531c8b5b5("UNSUPPORTED_CHAINS", `${t}, chain ${o} should be a string and conform to "namespace:chainId" format`));
    }) : r = $293b390ef9459a6c$export$8203ef1531c8b5b5("UNSUPPORTED_CHAINS", `${t}, chains ${n} should be an array of strings conforming to "namespace:chainId" format`), r;
}
function $293b390ef9459a6c$export$94ae96fb66f29e08(e, n) {
    let t = null;
    return Object.entries(e).forEach(([r, o])=>{
        if (t) return;
        const s = $293b390ef9459a6c$export$df46c123d7e298ce(r, o?.chains, `${n} requiredNamespace`);
        s && (t = s);
    }), t;
}
function $293b390ef9459a6c$export$d5644026aaffb9e7(e, n) {
    let t = null;
    return $293b390ef9459a6c$export$41dd3d480aac4a71(e) ? e.forEach((r)=>{
        t || $293b390ef9459a6c$export$49e4a5b6862e3c71(r) || (t = $293b390ef9459a6c$export$8203ef1531c8b5b5("UNSUPPORTED_ACCOUNTS", `${n}, account ${r} should be a string and conform to "namespace:chainId:address" format`));
    }) : t = $293b390ef9459a6c$export$8203ef1531c8b5b5("UNSUPPORTED_ACCOUNTS", `${n}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), t;
}
function $293b390ef9459a6c$export$2a2012e7bfa1cfb4(e, n) {
    let t = null;
    return Object.values(e).forEach((r)=>{
        if (t) return;
        const o = $293b390ef9459a6c$export$d5644026aaffb9e7(r?.accounts, `${n} namespace`);
        o && (t = o);
    }), t;
}
function $293b390ef9459a6c$export$b32541d63753af56(e, n) {
    let t = null;
    return $293b390ef9459a6c$export$c12fced8176774f3(e?.methods) ? $293b390ef9459a6c$export$c12fced8176774f3(e?.events) || (t = $293b390ef9459a6c$export$8203ef1531c8b5b5("UNSUPPORTED_EVENTS", `${n}, events should be an array of strings or empty array for no events`)) : t = $293b390ef9459a6c$export$8203ef1531c8b5b5("UNSUPPORTED_METHODS", `${n}, methods should be an array of strings or empty array for no methods`), t;
}
function $293b390ef9459a6c$export$27682c78deeca9d7(e, n) {
    let t = null;
    return Object.values(e).forEach((r)=>{
        if (t) return;
        const o = $293b390ef9459a6c$export$b32541d63753af56(r, `${n}, namespace`);
        o && (t = o);
    }), t;
}
function $293b390ef9459a6c$export$9e2b2cae22c6a8b3(e, n) {
    let t = null;
    if (e && $293b390ef9459a6c$export$16a0268bc22b47b0(e)) {
        const r = $293b390ef9459a6c$export$27682c78deeca9d7(e, n);
        r && (t = r);
        const o = $293b390ef9459a6c$export$94ae96fb66f29e08(e, n);
        o && (t = o);
    } else t = $293b390ef9459a6c$export$500d4c4a8fafe35("MISSING_OR_INVALID", `${n}, requiredNamespaces should be an object with data`);
    return t;
}
function $293b390ef9459a6c$export$93f7b81dc815a714(e, n) {
    let t = null;
    if (e && $293b390ef9459a6c$export$16a0268bc22b47b0(e)) {
        const r = $293b390ef9459a6c$export$27682c78deeca9d7(e, n);
        r && (t = r);
        const o = $293b390ef9459a6c$export$2a2012e7bfa1cfb4(e, n);
        o && (t = o);
    } else t = $293b390ef9459a6c$export$500d4c4a8fafe35("MISSING_OR_INVALID", `${n}, namespaces should be an object with data`);
    return t;
}
function $293b390ef9459a6c$export$1b3fc298be8c9a7b(e) {
    return $293b390ef9459a6c$export$ee898ca48ab56c74(e.protocol, !0);
}
function $293b390ef9459a6c$export$6294c30b976bd21e(e, n) {
    let t = !1;
    return n && !e ? t = !0 : e && $293b390ef9459a6c$export$41dd3d480aac4a71(e) && e.length && e.forEach((r)=>{
        t = $293b390ef9459a6c$export$1b3fc298be8c9a7b(r);
    }), t;
}
function $293b390ef9459a6c$export$53551be28ad5e34d(e) {
    return typeof e == "number";
}
function $293b390ef9459a6c$export$b3f5fcca1d210454(e) {
    return typeof e < "u" && true;
}
function $293b390ef9459a6c$export$766fe78377d96f2a(e) {
    return !(!e || typeof e != "object" || !e.code || !$293b390ef9459a6c$export$d6781b696a0576d1(e.code, !1) || !e.message || !$293b390ef9459a6c$export$ee898ca48ab56c74(e.message, !1));
}
function $293b390ef9459a6c$export$1a2af3c017fb6d42(e) {
    return !($293b390ef9459a6c$export$fce6876652108ab(e) || !$293b390ef9459a6c$export$ee898ca48ab56c74(e.method, !1));
}
function $293b390ef9459a6c$export$1ae38cf0a848f651(e) {
    return !($293b390ef9459a6c$export$fce6876652108ab(e) || $293b390ef9459a6c$export$fce6876652108ab(e.result) && $293b390ef9459a6c$export$fce6876652108ab(e.error) || !$293b390ef9459a6c$export$d6781b696a0576d1(e.id, !1) || !$293b390ef9459a6c$export$ee898ca48ab56c74(e.jsonrpc, !1));
}
function $293b390ef9459a6c$export$cbe4cdc5960cfa11(e) {
    return !($293b390ef9459a6c$export$fce6876652108ab(e) || !$293b390ef9459a6c$export$ee898ca48ab56c74(e.name, !1));
}
function $293b390ef9459a6c$export$144fc36610eb6522(e, n) {
    return !(!$293b390ef9459a6c$export$e544b39f0a22e47a(n) || !$293b390ef9459a6c$export$fb6db6038e742b14(e).includes(n));
}
function $293b390ef9459a6c$export$8db4804e3a6de711(e, n, t) {
    return $293b390ef9459a6c$export$ee898ca48ab56c74(t, !1) ? $293b390ef9459a6c$export$7dcf4808e17b15ac(e, n).includes(t) : !1;
}
function $293b390ef9459a6c$export$df2c67ef8baad16b(e, n, t) {
    return $293b390ef9459a6c$export$ee898ca48ab56c74(t, !1) ? $293b390ef9459a6c$export$94ee6d00e384a22(e, n).includes(t) : !1;
}
function $293b390ef9459a6c$export$ba5b0a4b585cd1b4(e, n, t) {
    let r = null;
    const o = Object.keys(e), s = Object.keys(n);
    return $293b390ef9459a6c$export$1468a49de573f7f9(o, s) ? o.forEach((i)=>{
        if (r) return;
        const u = e[i].chains, f = $293b390ef9459a6c$export$d46695d9c3664fe9(n[i].accounts);
        $293b390ef9459a6c$export$1468a49de573f7f9(u, f) ? $293b390ef9459a6c$export$1468a49de573f7f9(e[i].methods, n[i].methods) ? $293b390ef9459a6c$export$1468a49de573f7f9(e[i].events, n[i].events) || (r = $293b390ef9459a6c$export$500d4c4a8fafe35("NON_CONFORMING_NAMESPACES", `${t} namespaces events don't satisfy requiredNamespaces events for ${i}`)) : r = $293b390ef9459a6c$export$500d4c4a8fafe35("NON_CONFORMING_NAMESPACES", `${t} namespaces methods don't satisfy requiredNamespaces methods for ${i}`) : r = $293b390ef9459a6c$export$500d4c4a8fafe35("NON_CONFORMING_NAMESPACES", `${t} namespaces accounts don't satisfy requiredNamespaces chains for ${i}`);
    }) : r = $293b390ef9459a6c$export$500d4c4a8fafe35("NON_CONFORMING_NAMESPACES", `${t} namespaces keys don't satisfy requiredNamespaces`), r;
}
function $293b390ef9459a6c$export$59fba2af1ac782b(e, n) {
    return $293b390ef9459a6c$export$d6781b696a0576d1(e, !1) && e <= n.max && e >= n.min;
}

});
parcelRequire.register("22Zln", function(module, exports) {

$parcel$export(module.exports, "detect", () => $17db5a41fb44df49$export$17b446b869dad473, (v) => $17db5a41fb44df49$export$17b446b869dad473 = v);

var $4DZrq = parcelRequire("4DZrq");
var $17db5a41fb44df49$var$__spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var $17db5a41fb44df49$export$8fa985da04a86f0 = /** @class */ function() {
    function BrowserInfo(name, version, os) {
        this.name = name;
        this.version = version;
        this.os = os;
        this.type = "browser";
    }
    return BrowserInfo;
}();
var $17db5a41fb44df49$export$62457c674e0167c0 = /** @class */ function() {
    function NodeInfo(version) {
        this.version = version;
        this.type = "node";
        this.name = "node";
        this.os = $4DZrq.platform;
    }
    return NodeInfo;
}();
var $17db5a41fb44df49$export$775de176f06fc21 = /** @class */ function() {
    function SearchBotDeviceInfo(name, version, os, bot) {
        this.name = name;
        this.version = version;
        this.os = os;
        this.bot = bot;
        this.type = "bot-device";
    }
    return SearchBotDeviceInfo;
}();
var $17db5a41fb44df49$export$cb435e1e9f86c1ff = /** @class */ function() {
    function BotInfo() {
        this.type = "bot";
        this.bot = true; // NOTE: deprecated test name instead
        this.name = "bot";
        this.version = null;
        this.os = null;
    }
    return BotInfo;
}();
var $17db5a41fb44df49$export$7c78fe95a9d9b03e = /** @class */ function() {
    function ReactNativeInfo() {
        this.type = "react-native";
        this.name = "react-native";
        this.version = null;
        this.os = null;
    }
    return ReactNativeInfo;
}();
// tslint:disable-next-line:max-line-length
var $17db5a41fb44df49$var$SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var $17db5a41fb44df49$var$SEARCHBOT_OS_REGEX = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var $17db5a41fb44df49$var$REQUIRED_VERSION_PARTS = 3;
var $17db5a41fb44df49$var$userAgentRules = [
    [
        "aol",
        /AOLShield\/([0-9\._]+)/
    ],
    [
        "edge",
        /Edge\/([0-9\._]+)/
    ],
    [
        "edge-ios",
        /EdgiOS\/([0-9\._]+)/
    ],
    [
        "yandexbrowser",
        /YaBrowser\/([0-9\._]+)/
    ],
    [
        "kakaotalk",
        /KAKAOTALK\s([0-9\.]+)/
    ],
    [
        "samsung",
        /SamsungBrowser\/([0-9\.]+)/
    ],
    [
        "silk",
        /\bSilk\/([0-9._-]+)\b/
    ],
    [
        "miui",
        /MiuiBrowser\/([0-9\.]+)$/
    ],
    [
        "beaker",
        /BeakerBrowser\/([0-9\.]+)/
    ],
    [
        "edge-chromium",
        /EdgA?\/([0-9\.]+)/
    ],
    [
        "chromium-webview",
        /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
    ],
    [
        "chrome",
        /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
    ],
    [
        "phantomjs",
        /PhantomJS\/([0-9\.]+)(:?\s|$)/
    ],
    [
        "crios",
        /CriOS\/([0-9\.]+)(:?\s|$)/
    ],
    [
        "firefox",
        /Firefox\/([0-9\.]+)(?:\s|$)/
    ],
    [
        "fxios",
        /FxiOS\/([0-9\.]+)/
    ],
    [
        "opera-mini",
        /Opera Mini.*Version\/([0-9\.]+)/
    ],
    [
        "opera",
        /Opera\/([0-9\.]+)(?:\s|$)/
    ],
    [
        "opera",
        /OPR\/([0-9\.]+)(:?\s|$)/
    ],
    [
        "pie",
        /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/
    ],
    [
        "pie",
        /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/
    ],
    [
        "netfront",
        /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/
    ],
    [
        "ie",
        /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/
    ],
    [
        "ie",
        /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/
    ],
    [
        "ie",
        /MSIE\s(7\.0)/
    ],
    [
        "bb10",
        /BB10;\sTouch.*Version\/([0-9\.]+)/
    ],
    [
        "android",
        /Android\s([0-9\.]+)/
    ],
    [
        "ios",
        /Version\/([0-9\._]+).*Mobile.*Safari.*/
    ],
    [
        "safari",
        /Version\/([0-9\._]+).*Safari/
    ],
    [
        "facebook",
        /FB[AS]V\/([0-9\.]+)/
    ],
    [
        "instagram",
        /Instagram\s([0-9\.]+)/
    ],
    [
        "ios-webview",
        /AppleWebKit\/([0-9\.]+).*Mobile/
    ],
    [
        "ios-webview",
        /AppleWebKit\/([0-9\.]+).*Gecko\)$/
    ],
    [
        "curl",
        /^curl\/([0-9\.]+)$/
    ],
    [
        "searchbot",
        $17db5a41fb44df49$var$SEARCHBOX_UA_REGEX
    ]
];
var $17db5a41fb44df49$var$operatingSystemRules = [
    [
        "iOS",
        /iP(hone|od|ad)/
    ],
    [
        "Android OS",
        /Android/
    ],
    [
        "BlackBerry OS",
        /BlackBerry|BB10/
    ],
    [
        "Windows Mobile",
        /IEMobile/
    ],
    [
        "Amazon OS",
        /Kindle/
    ],
    [
        "Windows 3.11",
        /Win16/
    ],
    [
        "Windows 95",
        /(Windows 95)|(Win95)|(Windows_95)/
    ],
    [
        "Windows 98",
        /(Windows 98)|(Win98)/
    ],
    [
        "Windows 2000",
        /(Windows NT 5.0)|(Windows 2000)/
    ],
    [
        "Windows XP",
        /(Windows NT 5.1)|(Windows XP)/
    ],
    [
        "Windows Server 2003",
        /(Windows NT 5.2)/
    ],
    [
        "Windows Vista",
        /(Windows NT 6.0)/
    ],
    [
        "Windows 7",
        /(Windows NT 6.1)/
    ],
    [
        "Windows 8",
        /(Windows NT 6.2)/
    ],
    [
        "Windows 8.1",
        /(Windows NT 6.3)/
    ],
    [
        "Windows 10",
        /(Windows NT 10.0)/
    ],
    [
        "Windows ME",
        /Windows ME/
    ],
    [
        "Windows CE",
        /Windows CE|WinCE|Microsoft Pocket Internet Explorer/
    ],
    [
        "Open BSD",
        /OpenBSD/
    ],
    [
        "Sun OS",
        /SunOS/
    ],
    [
        "Chrome OS",
        /CrOS/
    ],
    [
        "Linux",
        /(Linux)|(X11)/
    ],
    [
        "Mac OS",
        /(Mac_PowerPC)|(Macintosh)/
    ],
    [
        "QNX",
        /QNX/
    ],
    [
        "BeOS",
        /BeOS/
    ],
    [
        "OS/2",
        /OS\/2/
    ]
];
function $17db5a41fb44df49$export$17b446b869dad473(userAgent) {
    if (!!userAgent) return $17db5a41fb44df49$export$1184956100eddc3c(userAgent);
    if (typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative") return new $17db5a41fb44df49$export$7c78fe95a9d9b03e();
    if (typeof navigator !== "undefined") return $17db5a41fb44df49$export$1184956100eddc3c(navigator.userAgent);
    return $17db5a41fb44df49$export$bf2c6630ab904918();
}
function $17db5a41fb44df49$var$matchUserAgent(ua) {
    // opted for using reduce here rather than Array#first with a regex.test call
    // this is primarily because using the reduce we only perform the regex
    // execution once rather than once for the test and for the exec again below
    // probably something that needs to be benchmarked though
    return ua !== "" && $17db5a41fb44df49$var$userAgentRules.reduce(function(matched, _a) {
        var browser = _a[0], regex = _a[1];
        if (matched) return matched;
        var uaMatch = regex.exec(ua);
        return !!uaMatch && [
            browser,
            uaMatch
        ];
    }, false);
}
function $17db5a41fb44df49$export$89ca9f8ca1a50fd5(ua) {
    var data = $17db5a41fb44df49$var$matchUserAgent(ua);
    return data ? data[0] : null;
}
function $17db5a41fb44df49$export$1184956100eddc3c(ua) {
    var matchedRule = $17db5a41fb44df49$var$matchUserAgent(ua);
    if (!matchedRule) return null;
    var name = matchedRule[0], match = matchedRule[1];
    if (name === "searchbot") return new $17db5a41fb44df49$export$cb435e1e9f86c1ff();
    // Do not use RegExp for split operation as some browser do not support it (See: http://blog.stevenlevithan.com/archives/cross-browser-split)
    var versionParts = match[1] && match[1].split(".").join("_").split("_").slice(0, 3);
    if (versionParts) {
        if (versionParts.length < $17db5a41fb44df49$var$REQUIRED_VERSION_PARTS) versionParts = $17db5a41fb44df49$var$__spreadArray($17db5a41fb44df49$var$__spreadArray([], versionParts, true), $17db5a41fb44df49$var$createVersionParts($17db5a41fb44df49$var$REQUIRED_VERSION_PARTS - versionParts.length), true);
    } else versionParts = [];
    var version = versionParts.join(".");
    var os = $17db5a41fb44df49$export$3070bd282ec37ea8(ua);
    var searchBotMatch = $17db5a41fb44df49$var$SEARCHBOT_OS_REGEX.exec(ua);
    if (searchBotMatch && searchBotMatch[1]) return new $17db5a41fb44df49$export$775de176f06fc21(name, version, os, searchBotMatch[1]);
    return new $17db5a41fb44df49$export$8fa985da04a86f0(name, version, os);
}
function $17db5a41fb44df49$export$3070bd282ec37ea8(ua) {
    for(var ii = 0, count = $17db5a41fb44df49$var$operatingSystemRules.length; ii < count; ii++){
        var _a = $17db5a41fb44df49$var$operatingSystemRules[ii], os = _a[0], regex = _a[1];
        var match = regex.exec(ua);
        if (match) return os;
    }
    return null;
}
function $17db5a41fb44df49$export$bf2c6630ab904918() {
    var isNode = typeof $4DZrq !== "undefined" && $4DZrq.version;
    return isNode ? new $17db5a41fb44df49$export$62457c674e0167c0($4DZrq.version.slice(1)) : null;
}
function $17db5a41fb44df49$var$createVersionParts(count) {
    var output = [];
    for(var ii = 0; ii < count; ii++)output.push("0");
    return output;
}

});

parcelRequire.register("vntIm", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getWindowMetadata = void 0;

var $jeE37 = parcelRequire("jeE37");
function $05e51ba8e518adad$var$getWindowMetadata() {
    let doc;
    let loc;
    try {
        doc = $jeE37.getDocumentOrThrow();
        loc = $jeE37.getLocationOrThrow();
    } catch (e) {
        return null;
    }
    function getIcons() {
        const links = doc.getElementsByTagName("link");
        const icons = [];
        for(let i = 0; i < links.length; i++){
            const link = links[i];
            const rel = link.getAttribute("rel");
            if (rel) {
                if (rel.toLowerCase().indexOf("icon") > -1) {
                    const href = link.getAttribute("href");
                    if (href) {
                        if (href.toLowerCase().indexOf("https:") === -1 && href.toLowerCase().indexOf("http:") === -1 && href.indexOf("//") !== 0) {
                            let absoluteHref = loc.protocol + "//" + loc.host;
                            if (href.indexOf("/") === 0) absoluteHref += href;
                            else {
                                const path = loc.pathname.split("/");
                                path.pop();
                                const finalPath = path.join("/");
                                absoluteHref += finalPath + "/" + href;
                            }
                            icons.push(absoluteHref);
                        } else if (href.indexOf("//") === 0) {
                            const absoluteUrl = loc.protocol + href;
                            icons.push(absoluteUrl);
                        } else icons.push(href);
                    }
                }
            }
        }
        return icons;
    }
    function getWindowMetadataOfAny(...args) {
        const metaTags = doc.getElementsByTagName("meta");
        for(let i = 0; i < metaTags.length; i++){
            const tag = metaTags[i];
            const attributes = [
                "itemprop",
                "property",
                "name"
            ].map((target)=>tag.getAttribute(target)).filter((attr)=>{
                if (attr) return args.includes(attr);
                return false;
            });
            if (attributes.length && attributes) {
                const content = tag.getAttribute("content");
                if (content) return content;
            }
        }
        return "";
    }
    function getName() {
        let name = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title");
        if (!name) name = doc.title;
        return name;
    }
    function getDescription() {
        const description = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
        return description;
    }
    const name = getName();
    const description = getDescription();
    const url = loc.origin;
    const icons = getIcons();
    const meta = {
        description: description,
        url: url,
        icons: icons,
        name: name
    };
    return meta;
}
module.exports.getWindowMetadata = $05e51ba8e518adad$var$getWindowMetadata;

});

parcelRequire.register("jplpt", function(module, exports) {

$parcel$export(module.exports, "extract", () => $e210f5aa45198c06$export$f9380c9a627682d3, (v) => $e210f5aa45198c06$export$f9380c9a627682d3 = v);
$parcel$export(module.exports, "parse", () => $e210f5aa45198c06$export$98e6a39c04603d36, (v) => $e210f5aa45198c06$export$98e6a39c04603d36 = v);
$parcel$export(module.exports, "stringify", () => $e210f5aa45198c06$export$fac44ee5b035f737, (v) => $e210f5aa45198c06$export$fac44ee5b035f737 = v);
$parcel$export(module.exports, "parseUrl", () => $e210f5aa45198c06$export$7a5253c0f62e0150, (v) => $e210f5aa45198c06$export$7a5253c0f62e0150 = v);
$parcel$export(module.exports, "stringifyUrl", () => $e210f5aa45198c06$export$a8c1621ea79325d3, (v) => $e210f5aa45198c06$export$a8c1621ea79325d3 = v);
$parcel$export(module.exports, "pick", () => $e210f5aa45198c06$export$357523c63a2253b9, (v) => $e210f5aa45198c06$export$357523c63a2253b9 = v);
var $e210f5aa45198c06$export$f9380c9a627682d3;
var $e210f5aa45198c06$export$98e6a39c04603d36;
var $e210f5aa45198c06$export$fac44ee5b035f737;
var $e210f5aa45198c06$export$7a5253c0f62e0150;
var $e210f5aa45198c06$export$a8c1621ea79325d3;
var $e210f5aa45198c06$export$357523c63a2253b9;
var $e210f5aa45198c06$export$44c361b8ec72ef7f;
"use strict";

var $lvgdx = parcelRequire("lvgdx");

var $7zHv8 = parcelRequire("7zHv8");

var $ed263 = parcelRequire("ed263");

var $ihAQe = parcelRequire("ihAQe");
const $e210f5aa45198c06$var$isNullOrUndefined = (value)=>value === null || value === undefined;
const $e210f5aa45198c06$var$encodeFragmentIdentifier = Symbol("encodeFragmentIdentifier");
function $e210f5aa45198c06$var$encoderForArrayFormat(options) {
    switch(options.arrayFormat){
        case "index":
            return (key)=>(result, value)=>{
                    const index = result.length;
                    if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") return result;
                    if (value === null) return [
                        ...result,
                        [
                            $e210f5aa45198c06$var$encode(key, options),
                            "[",
                            index,
                            "]"
                        ].join("")
                    ];
                    return [
                        ...result,
                        [
                            $e210f5aa45198c06$var$encode(key, options),
                            "[",
                            $e210f5aa45198c06$var$encode(index, options),
                            "]=",
                            $e210f5aa45198c06$var$encode(value, options)
                        ].join("")
                    ];
                };
        case "bracket":
            return (key)=>(result, value)=>{
                    if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") return result;
                    if (value === null) return [
                        ...result,
                        [
                            $e210f5aa45198c06$var$encode(key, options),
                            "[]"
                        ].join("")
                    ];
                    return [
                        ...result,
                        [
                            $e210f5aa45198c06$var$encode(key, options),
                            "[]=",
                            $e210f5aa45198c06$var$encode(value, options)
                        ].join("")
                    ];
                };
        case "colon-list-separator":
            return (key)=>(result, value)=>{
                    if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") return result;
                    if (value === null) return [
                        ...result,
                        [
                            $e210f5aa45198c06$var$encode(key, options),
                            ":list="
                        ].join("")
                    ];
                    return [
                        ...result,
                        [
                            $e210f5aa45198c06$var$encode(key, options),
                            ":list=",
                            $e210f5aa45198c06$var$encode(value, options)
                        ].join("")
                    ];
                };
        case "comma":
        case "separator":
        case "bracket-separator":
            {
                const keyValueSep = options.arrayFormat === "bracket-separator" ? "[]=" : "=";
                return (key)=>(result, value)=>{
                        if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") return result;
                        // Translate null to an empty string so that it doesn't serialize as 'null'
                        value = value === null ? "" : value;
                        if (result.length === 0) return [
                            [
                                $e210f5aa45198c06$var$encode(key, options),
                                keyValueSep,
                                $e210f5aa45198c06$var$encode(value, options)
                            ].join("")
                        ];
                        return [
                            [
                                result,
                                $e210f5aa45198c06$var$encode(value, options)
                            ].join(options.arrayFormatSeparator)
                        ];
                    };
            }
        default:
            return (key)=>(result, value)=>{
                    if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") return result;
                    if (value === null) return [
                        ...result,
                        $e210f5aa45198c06$var$encode(key, options)
                    ];
                    return [
                        ...result,
                        [
                            $e210f5aa45198c06$var$encode(key, options),
                            "=",
                            $e210f5aa45198c06$var$encode(value, options)
                        ].join("")
                    ];
                };
    }
}
function $e210f5aa45198c06$var$parserForArrayFormat(options) {
    let result;
    switch(options.arrayFormat){
        case "index":
            return (key, value, accumulator)=>{
                result = /\[(\d*)\]$/.exec(key);
                key = key.replace(/\[\d*\]$/, "");
                if (!result) {
                    accumulator[key] = value;
                    return;
                }
                if (accumulator[key] === undefined) accumulator[key] = {};
                accumulator[key][result[1]] = value;
            };
        case "bracket":
            return (key, value, accumulator)=>{
                result = /(\[\])$/.exec(key);
                key = key.replace(/\[\]$/, "");
                if (!result) {
                    accumulator[key] = value;
                    return;
                }
                if (accumulator[key] === undefined) {
                    accumulator[key] = [
                        value
                    ];
                    return;
                }
                accumulator[key] = [].concat(accumulator[key], value);
            };
        case "colon-list-separator":
            return (key, value, accumulator)=>{
                result = /(:list)$/.exec(key);
                key = key.replace(/:list$/, "");
                if (!result) {
                    accumulator[key] = value;
                    return;
                }
                if (accumulator[key] === undefined) {
                    accumulator[key] = [
                        value
                    ];
                    return;
                }
                accumulator[key] = [].concat(accumulator[key], value);
            };
        case "comma":
        case "separator":
            return (key, value, accumulator)=>{
                const isArray = typeof value === "string" && value.includes(options.arrayFormatSeparator);
                const isEncodedArray = typeof value === "string" && !isArray && $e210f5aa45198c06$var$decode(value, options).includes(options.arrayFormatSeparator);
                value = isEncodedArray ? $e210f5aa45198c06$var$decode(value, options) : value;
                const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map((item)=>$e210f5aa45198c06$var$decode(item, options)) : value === null ? value : $e210f5aa45198c06$var$decode(value, options);
                accumulator[key] = newValue;
            };
        case "bracket-separator":
            return (key, value, accumulator)=>{
                const isArray = /(\[\])$/.test(key);
                key = key.replace(/\[\]$/, "");
                if (!isArray) {
                    accumulator[key] = value ? $e210f5aa45198c06$var$decode(value, options) : value;
                    return;
                }
                const arrayValue = value === null ? [] : value.split(options.arrayFormatSeparator).map((item)=>$e210f5aa45198c06$var$decode(item, options));
                if (accumulator[key] === undefined) {
                    accumulator[key] = arrayValue;
                    return;
                }
                accumulator[key] = [].concat(accumulator[key], arrayValue);
            };
        default:
            return (key, value, accumulator)=>{
                if (accumulator[key] === undefined) {
                    accumulator[key] = value;
                    return;
                }
                accumulator[key] = [].concat(accumulator[key], value);
            };
    }
}
function $e210f5aa45198c06$var$validateArrayFormatSeparator(value) {
    if (typeof value !== "string" || value.length !== 1) throw new TypeError("arrayFormatSeparator must be single character string");
}
function $e210f5aa45198c06$var$encode(value, options) {
    if (options.encode) return options.strict ? $lvgdx(value) : encodeURIComponent(value);
    return value;
}
function $e210f5aa45198c06$var$decode(value, options) {
    if (options.decode) return $7zHv8(value);
    return value;
}
function $e210f5aa45198c06$var$keysSorter(input) {
    if (Array.isArray(input)) return input.sort();
    if (typeof input === "object") return $e210f5aa45198c06$var$keysSorter(Object.keys(input)).sort((a, b)=>Number(a) - Number(b)).map((key)=>input[key]);
    return input;
}
function $e210f5aa45198c06$var$removeHash(input) {
    const hashStart = input.indexOf("#");
    if (hashStart !== -1) input = input.slice(0, hashStart);
    return input;
}
function $e210f5aa45198c06$var$getHash(url) {
    let hash = "";
    const hashStart = url.indexOf("#");
    if (hashStart !== -1) hash = url.slice(hashStart);
    return hash;
}
function $e210f5aa45198c06$var$extract(input) {
    input = $e210f5aa45198c06$var$removeHash(input);
    const queryStart = input.indexOf("?");
    if (queryStart === -1) return "";
    return input.slice(queryStart + 1);
}
function $e210f5aa45198c06$var$parseValue(value, options) {
    if (options.parseNumbers && !Number.isNaN(Number(value)) && typeof value === "string" && value.trim() !== "") value = Number(value);
    else if (options.parseBooleans && value !== null && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) value = value.toLowerCase() === "true";
    return value;
}
function $e210f5aa45198c06$var$parse(query, options) {
    options = Object.assign({
        decode: true,
        sort: true,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: false,
        parseBooleans: false
    }, options);
    $e210f5aa45198c06$var$validateArrayFormatSeparator(options.arrayFormatSeparator);
    const formatter = $e210f5aa45198c06$var$parserForArrayFormat(options);
    // Create an object with no prototype
    const ret = Object.create(null);
    if (typeof query !== "string") return ret;
    query = query.trim().replace(/^[?#&]/, "");
    if (!query) return ret;
    for (const param of query.split("&")){
        if (param === "") continue;
        let [key, value] = $ed263(options.decode ? param.replace(/\+/g, " ") : param, "=");
        // Missing `=` should be `null`:
        // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
        value = value === undefined ? null : [
            "comma",
            "separator",
            "bracket-separator"
        ].includes(options.arrayFormat) ? value : $e210f5aa45198c06$var$decode(value, options);
        formatter($e210f5aa45198c06$var$decode(key, options), value, ret);
    }
    for (const key of Object.keys(ret)){
        const value = ret[key];
        if (typeof value === "object" && value !== null) for (const k of Object.keys(value))value[k] = $e210f5aa45198c06$var$parseValue(value[k], options);
        else ret[key] = $e210f5aa45198c06$var$parseValue(value, options);
    }
    if (options.sort === false) return ret;
    return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key)=>{
        const value = ret[key];
        if (Boolean(value) && typeof value === "object" && !Array.isArray(value)) // Sort object keys, not values
        result[key] = $e210f5aa45198c06$var$keysSorter(value);
        else result[key] = value;
        return result;
    }, Object.create(null));
}
$e210f5aa45198c06$export$f9380c9a627682d3 = $e210f5aa45198c06$var$extract;
$e210f5aa45198c06$export$98e6a39c04603d36 = $e210f5aa45198c06$var$parse;
$e210f5aa45198c06$export$fac44ee5b035f737 = (object, options)=>{
    if (!object) return "";
    options = Object.assign({
        encode: true,
        strict: true,
        arrayFormat: "none",
        arrayFormatSeparator: ","
    }, options);
    $e210f5aa45198c06$var$validateArrayFormatSeparator(options.arrayFormatSeparator);
    const shouldFilter = (key)=>options.skipNull && $e210f5aa45198c06$var$isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === "";
    const formatter = $e210f5aa45198c06$var$encoderForArrayFormat(options);
    const objectCopy = {};
    for (const key of Object.keys(object))if (!shouldFilter(key)) objectCopy[key] = object[key];
    const keys = Object.keys(objectCopy);
    if (options.sort !== false) keys.sort(options.sort);
    return keys.map((key)=>{
        const value = object[key];
        if (value === undefined) return "";
        if (value === null) return $e210f5aa45198c06$var$encode(key, options);
        if (Array.isArray(value)) {
            if (value.length === 0 && options.arrayFormat === "bracket-separator") return $e210f5aa45198c06$var$encode(key, options) + "[]";
            return value.reduce(formatter(key), []).join("&");
        }
        return $e210f5aa45198c06$var$encode(key, options) + "=" + $e210f5aa45198c06$var$encode(value, options);
    }).filter((x)=>x.length > 0).join("&");
};
$e210f5aa45198c06$export$7a5253c0f62e0150 = (url, options)=>{
    options = Object.assign({
        decode: true
    }, options);
    const [url_, hash] = $ed263(url, "#");
    return Object.assign({
        url: url_.split("?")[0] || "",
        query: $e210f5aa45198c06$var$parse($e210f5aa45198c06$var$extract(url), options)
    }, options && options.parseFragmentIdentifier && hash ? {
        fragmentIdentifier: $e210f5aa45198c06$var$decode(hash, options)
    } : {});
};
$e210f5aa45198c06$export$a8c1621ea79325d3 = (object, options)=>{
    options = Object.assign({
        encode: true,
        strict: true,
        [$e210f5aa45198c06$var$encodeFragmentIdentifier]: true
    }, options);
    const url = $e210f5aa45198c06$var$removeHash(object.url).split("?")[0] || "";
    const queryFromUrl = $e210f5aa45198c06$export$f9380c9a627682d3(object.url);
    const parsedQueryFromUrl = $e210f5aa45198c06$export$98e6a39c04603d36(queryFromUrl, {
        sort: false
    });
    const query = Object.assign(parsedQueryFromUrl, object.query);
    let queryString = $e210f5aa45198c06$export$fac44ee5b035f737(query, options);
    if (queryString) queryString = `?${queryString}`;
    let hash = $e210f5aa45198c06$var$getHash(object.url);
    if (object.fragmentIdentifier) hash = `#${options[$e210f5aa45198c06$var$encodeFragmentIdentifier] ? $e210f5aa45198c06$var$encode(object.fragmentIdentifier, options) : object.fragmentIdentifier}`;
    return `${url}${queryString}${hash}`;
};
$e210f5aa45198c06$export$357523c63a2253b9 = (input, filter, options)=>{
    options = Object.assign({
        parseFragmentIdentifier: true,
        [$e210f5aa45198c06$var$encodeFragmentIdentifier]: false
    }, options);
    const { url: url , query: query , fragmentIdentifier: fragmentIdentifier  } = $e210f5aa45198c06$export$7a5253c0f62e0150(input, options);
    return $e210f5aa45198c06$export$a8c1621ea79325d3({
        url: url,
        query: $ihAQe(query, filter),
        fragmentIdentifier: fragmentIdentifier
    }, options);
};
$e210f5aa45198c06$export$44c361b8ec72ef7f = (input, filter, options)=>{
    const exclusionFilter = Array.isArray(filter) ? (key)=>!filter.includes(key) : (key, value)=>!filter(key, value);
    return $e210f5aa45198c06$export$357523c63a2253b9(input, exclusionFilter, options);
};

});



parcelRequire.register("aVlNn", function(module, exports) {

$parcel$export(module.exports, "getSdkError", () => $7f40226359758d22$export$8203ef1531c8b5b5);
$parcel$export(module.exports, "isValidArray", () => $7f40226359758d22$export$41dd3d480aac4a71);

var $3TRbz = parcelRequire("3TRbz");

var $5E4JY = parcelRequire("5E4JY");

var $2SEZb = parcelRequire("2SEZb");

var $46Gtt = parcelRequire("46Gtt");

var $2FSze = parcelRequire("2FSze");

var $6yXrI = parcelRequire("6yXrI");

var $MK84t = parcelRequire("MK84t");

var $gm49L = parcelRequire("gm49L");

var $jeE37 = parcelRequire("jeE37");

var $3kcDi = parcelRequire("3kcDi");

var $5E0Ij = parcelRequire("5E0Ij");
parcelRequire("akZap");
var $5G6lt = parcelRequire("5G6lt");

var $4DZrq = parcelRequire("4DZrq");
const $7f40226359758d22$var$P = ":";
function $7f40226359758d22$export$4764229d78de4437(e) {
    const [n, t] = e.split($7f40226359758d22$var$P);
    return {
        namespace: n,
        reference: t
    };
}
function $7f40226359758d22$export$a5999672e4930644(e) {
    const { namespace: n , reference: t  } = e;
    return [
        n,
        t
    ].join($7f40226359758d22$var$P);
}
function $7f40226359758d22$export$276ab0158c66e3d(e) {
    const [n, t, r] = e.split($7f40226359758d22$var$P);
    return {
        namespace: n,
        reference: t,
        address: r
    };
}
function $7f40226359758d22$export$566a25328fb93a18(e) {
    const { namespace: n , reference: t , address: r  } = e;
    return [
        n,
        t,
        r
    ].join($7f40226359758d22$var$P);
}
function $7f40226359758d22$export$d579bc26e95946b5(e, n) {
    const t = [];
    return e.forEach((r)=>{
        const o = n(r);
        t.includes(o) || t.push(o);
    }), t;
}
function $7f40226359758d22$export$2806d446053abd1d(e) {
    const { address: n  } = $7f40226359758d22$export$276ab0158c66e3d(e);
    return n;
}
function $7f40226359758d22$export$93512919ec2ab555(e) {
    const { namespace: n , reference: t  } = $7f40226359758d22$export$276ab0158c66e3d(e);
    return $7f40226359758d22$export$a5999672e4930644({
        namespace: n,
        reference: t
    });
}
function $7f40226359758d22$export$40283ddc77f27f6e(e, n) {
    const { namespace: t , reference: r  } = $7f40226359758d22$export$4764229d78de4437(n);
    return $7f40226359758d22$export$566a25328fb93a18({
        namespace: t,
        reference: r,
        address: e
    });
}
function $7f40226359758d22$export$aa4a6b630dfcfa83(e) {
    return $7f40226359758d22$export$d579bc26e95946b5(e, $7f40226359758d22$export$2806d446053abd1d);
}
function $7f40226359758d22$export$d5ee58c6b13696e9(e) {
    return $7f40226359758d22$export$d579bc26e95946b5(e, $7f40226359758d22$export$93512919ec2ab555);
}
function $7f40226359758d22$export$23329703ad972840(e, n = []) {
    const t = [];
    return Object.keys(e).forEach((r)=>{
        if (n.length && !n.includes(r)) return;
        const o = e[r];
        t.push(...o.accounts);
    }), t;
}
function $7f40226359758d22$export$6281ff29da5f85fe(e, n = []) {
    const t = [];
    return Object.keys(e).forEach((r)=>{
        if (n.length && !n.includes(r)) return;
        const o = e[r];
        t.push(...$7f40226359758d22$export$d5ee58c6b13696e9(o.accounts));
    }), t;
}
function $7f40226359758d22$export$d1109eeb751412cf(e, n = []) {
    const t = [];
    return Object.keys(e).forEach((r)=>{
        if (n.length && !n.includes(r)) return;
        const o = e[r];
        t.push(...o.chains);
    }), t;
}
const $7f40226359758d22$export$a524ae552db7912 = (e)=>e?.split(":"), $7f40226359758d22$export$85f23c05c80b194 = (e)=>{
    const n = e && $7f40226359758d22$export$a524ae552db7912(e);
    if (n) return n[3];
}, $7f40226359758d22$export$a8b149927aef7051 = (e)=>{
    const n = e && $7f40226359758d22$export$a524ae552db7912(e);
    if (n) return n[2] + ":" + n[3];
}, $7f40226359758d22$export$bf43cfbb4bd95de9 = (e)=>{
    const n = e && $7f40226359758d22$export$a524ae552db7912(e);
    if (n) return n.pop();
}, $7f40226359758d22$export$25868d1e8e76735f = (e, n)=>{
    const t = `${e.domain} wants you to sign in with your Ethereum account:`, r = $7f40226359758d22$export$bf43cfbb4bd95de9(n), o = e.statement, s = `URI: ${e.aud}`, i = `Version: ${e.version}`, u = `Chain ID: ${$7f40226359758d22$export$85f23c05c80b194(n)}`, f = `Nonce: ${e.nonce}`, g = `Issued At: ${e.iat}`, O = e.resources && e.resources.length > 0 ? `Resources:
${e.resources.map((p)=>`- ${p}`).join(`
`)}` : void 0;
    return [
        t,
        r,
        "",
        o,
        "",
        s,
        i,
        u,
        f,
        g,
        O
    ].filter((p)=>p != null).join(`
`);
}, $7f40226359758d22$export$f7403969428298bd = "base10", $7f40226359758d22$export$49eb910ab2518105 = "base16", $7f40226359758d22$export$9bff723d552e6bcf = "base64pad", $7f40226359758d22$export$9560dad2a83e4f04 = "utf8", $7f40226359758d22$export$3425bd336a9673d8 = 0, $7f40226359758d22$export$406e97c329f0f3d4 = 1, $7f40226359758d22$var$sn = 0, $7f40226359758d22$var$de = 1, $7f40226359758d22$var$K = 12, $7f40226359758d22$var$k = 32;
function $7f40226359758d22$export$a949d36eab55b41f() {
    const e = $2FSze.generateKeyPair();
    return {
        privateKey: (0, $6yXrI.toString)(e.secretKey, $7f40226359758d22$export$49eb910ab2518105),
        publicKey: (0, $6yXrI.toString)(e.publicKey, $7f40226359758d22$export$49eb910ab2518105)
    };
}
function $7f40226359758d22$export$d15a28e4f1821243() {
    const e = (0, $2SEZb.randomBytes)($7f40226359758d22$var$k);
    return (0, $6yXrI.toString)(e, $7f40226359758d22$export$49eb910ab2518105);
}
function $7f40226359758d22$export$f8378f68e053f5c6(e, n) {
    const t = $2FSze.sharedKey((0, $6yXrI.fromString)(e, $7f40226359758d22$export$49eb910ab2518105), (0, $6yXrI.fromString)(n, $7f40226359758d22$export$49eb910ab2518105)), r = new (0, $5E4JY.HKDF)((0, $46Gtt.SHA256), t).expand($7f40226359758d22$var$k);
    return (0, $6yXrI.toString)(r, $7f40226359758d22$export$49eb910ab2518105);
}
function $7f40226359758d22$export$1e87d19d4aab5805(e) {
    const n = (0, $46Gtt.hash)((0, $6yXrI.fromString)(e, $7f40226359758d22$export$49eb910ab2518105));
    return (0, $6yXrI.toString)(n, $7f40226359758d22$export$49eb910ab2518105);
}
function $7f40226359758d22$export$d4c241cec96564c1(e) {
    const n = (0, $46Gtt.hash)((0, $6yXrI.fromString)(e, $7f40226359758d22$export$9560dad2a83e4f04));
    return (0, $6yXrI.toString)(n, $7f40226359758d22$export$49eb910ab2518105);
}
function $7f40226359758d22$export$e9d2f9ba70428fb6(e) {
    return (0, $6yXrI.fromString)(`${e}`, $7f40226359758d22$export$f7403969428298bd);
}
function $7f40226359758d22$export$7547a514ee29b9d4(e) {
    return Number((0, $6yXrI.toString)(e, $7f40226359758d22$export$f7403969428298bd));
}
function $7f40226359758d22$export$5b0f6292f11d1d18(e) {
    const n = $7f40226359758d22$export$e9d2f9ba70428fb6(typeof e.type < "u" ? e.type : $7f40226359758d22$export$3425bd336a9673d8);
    if ($7f40226359758d22$export$7547a514ee29b9d4(n) === $7f40226359758d22$export$406e97c329f0f3d4 && typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    const t = typeof e.senderPublicKey < "u" ? (0, $6yXrI.fromString)(e.senderPublicKey, $7f40226359758d22$export$49eb910ab2518105) : void 0, r = typeof e.iv < "u" ? (0, $6yXrI.fromString)(e.iv, $7f40226359758d22$export$49eb910ab2518105) : (0, $2SEZb.randomBytes)($7f40226359758d22$var$K), o = new (0, $3TRbz.ChaCha20Poly1305)((0, $6yXrI.fromString)(e.symKey, $7f40226359758d22$export$49eb910ab2518105)).seal(r, (0, $6yXrI.fromString)(e.message, $7f40226359758d22$export$9560dad2a83e4f04));
    return $7f40226359758d22$export$dfdc1655ccc5b9cb({
        type: n,
        sealed: o,
        iv: r,
        senderPublicKey: t
    });
}
function $7f40226359758d22$export$e85a0c9a1067c5d3(e) {
    const n = new (0, $3TRbz.ChaCha20Poly1305)((0, $6yXrI.fromString)(e.symKey, $7f40226359758d22$export$49eb910ab2518105)), { sealed: t , iv: r  } = $7f40226359758d22$export$efcd34ab6248d3cd(e.encoded), o = n.open(r, t);
    if (o === null) throw new Error("Failed to decrypt");
    return (0, $6yXrI.toString)(o, $7f40226359758d22$export$9560dad2a83e4f04);
}
function $7f40226359758d22$export$dfdc1655ccc5b9cb(e) {
    if ($7f40226359758d22$export$7547a514ee29b9d4(e.type) === $7f40226359758d22$export$406e97c329f0f3d4) {
        if (typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
        return (0, $6yXrI.toString)((0, $6yXrI.concat)([
            e.type,
            e.senderPublicKey,
            e.iv,
            e.sealed
        ]), $7f40226359758d22$export$9bff723d552e6bcf);
    }
    return (0, $6yXrI.toString)((0, $6yXrI.concat)([
        e.type,
        e.iv,
        e.sealed
    ]), $7f40226359758d22$export$9bff723d552e6bcf);
}
function $7f40226359758d22$export$efcd34ab6248d3cd(e) {
    const n = (0, $6yXrI.fromString)(e, $7f40226359758d22$export$9bff723d552e6bcf), t = n.slice($7f40226359758d22$var$sn, $7f40226359758d22$var$de), r = $7f40226359758d22$var$de;
    if ($7f40226359758d22$export$7547a514ee29b9d4(t) === $7f40226359758d22$export$406e97c329f0f3d4) {
        const u = r + $7f40226359758d22$var$k, f = u + $7f40226359758d22$var$K, g = n.slice(r, u), O = n.slice(u, f), p = n.slice(f);
        return {
            type: t,
            sealed: p,
            iv: O,
            senderPublicKey: g
        };
    }
    const o = r + $7f40226359758d22$var$K, s = n.slice(r, o), i = n.slice(o);
    return {
        type: t,
        sealed: i,
        iv: s
    };
}
function $7f40226359758d22$export$177f3e316562333d(e, n) {
    const t = $7f40226359758d22$export$efcd34ab6248d3cd(e);
    return $7f40226359758d22$export$7949f60f2444aef2({
        type: $7f40226359758d22$export$7547a514ee29b9d4(t.type),
        senderPublicKey: typeof t.senderPublicKey < "u" ? (0, $6yXrI.toString)(t.senderPublicKey, $7f40226359758d22$export$49eb910ab2518105) : void 0,
        receiverPublicKey: n?.receiverPublicKey
    });
}
function $7f40226359758d22$export$7949f60f2444aef2(e) {
    const n = e?.type || $7f40226359758d22$export$3425bd336a9673d8;
    if (n === $7f40226359758d22$export$406e97c329f0f3d4) {
        if (typeof e?.senderPublicKey > "u") throw new Error("missing sender public key");
        if (typeof e?.receiverPublicKey > "u") throw new Error("missing receiver public key");
    }
    return {
        type: n,
        senderPublicKey: e?.senderPublicKey,
        receiverPublicKey: e?.receiverPublicKey
    };
}
function $7f40226359758d22$export$8c165704db2d5c15(e) {
    return e.type === $7f40226359758d22$export$406e97c329f0f3d4 && typeof e.senderPublicKey == "string" && typeof e.receiverPublicKey == "string";
}
var $7f40226359758d22$var$En = Object.defineProperty, $7f40226359758d22$var$me = Object.getOwnPropertySymbols, $7f40226359758d22$var$gn = Object.prototype.hasOwnProperty, $7f40226359758d22$var$hn = Object.prototype.propertyIsEnumerable, $7f40226359758d22$var$ye = (e, n, t)=>n in e ? $7f40226359758d22$var$En(e, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[n] = t, $7f40226359758d22$var$Ee = (e, n)=>{
    for(var t in n || (n = {}))$7f40226359758d22$var$gn.call(n, t) && $7f40226359758d22$var$ye(e, t, n[t]);
    if ($7f40226359758d22$var$me) for (var t of $7f40226359758d22$var$me(n))$7f40226359758d22$var$hn.call(n, t) && $7f40226359758d22$var$ye(e, t, n[t]);
    return e;
};
const $7f40226359758d22$export$f12873d77424d47b = "ReactNative", $7f40226359758d22$export$86b1301a63b15dd9 = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown"
}, $7f40226359758d22$export$657dee6d5648750a = " ", $7f40226359758d22$export$96c3628b3b9d2079 = ":", $7f40226359758d22$export$98238152dfccf046 = "/", $7f40226359758d22$export$7f882bb969de14a3 = 2, $7f40226359758d22$export$77baccb4c6bd5852 = 1e3, $7f40226359758d22$export$e08b61c98317d88c = "js";
function $7f40226359758d22$export$8ee0fc9ee280b4ee() {
    return typeof $4DZrq < "u" && typeof $4DZrq.versions < "u" && typeof $4DZrq.versions.node < "u";
}
function $7f40226359758d22$export$f7a1e23e542d38e3() {
    return !(0, $jeE37.getDocument)() && !!(0, $jeE37.getNavigator)() && navigator.product === $7f40226359758d22$export$f12873d77424d47b;
}
function $7f40226359758d22$export$4e09c449d6c407f7() {
    return !$7f40226359758d22$export$8ee0fc9ee280b4ee() && !!(0, $jeE37.getNavigator)();
}
function $7f40226359758d22$export$57570b1603cf6adb() {
    return $7f40226359758d22$export$f7a1e23e542d38e3() ? $7f40226359758d22$export$86b1301a63b15dd9.reactNative : $7f40226359758d22$export$8ee0fc9ee280b4ee() ? $7f40226359758d22$export$86b1301a63b15dd9.node : $7f40226359758d22$export$4e09c449d6c407f7() ? $7f40226359758d22$export$86b1301a63b15dd9.browser : $7f40226359758d22$export$86b1301a63b15dd9.unknown;
}
function $7f40226359758d22$export$c4147c69f6845da(e, n) {
    let t = $5E0Ij.parse(e);
    return t = $7f40226359758d22$var$Ee($7f40226359758d22$var$Ee({}, t), n), e = $5E0Ij.stringify(t), e;
}
function $7f40226359758d22$export$ba31e015127122bb() {
    return (0, $3kcDi.getWindowMetadata)() || {
        name: "",
        description: "",
        url: "",
        icons: [
            ""
        ]
    };
}
function $7f40226359758d22$export$6b05aa0115b6fc2d(e, n) {
    var t;
    const r = $7f40226359758d22$export$57570b1603cf6adb(), o = {
        protocol: e,
        version: n,
        env: r
    };
    return r === "browser" && (o.host = ((t = (0, $jeE37.getLocation)()) == null ? void 0 : t.host) || "unknown"), o;
}
function $7f40226359758d22$export$20d4a3cb5829b8b6() {
    const e = (0, $MK84t.detect)();
    if (e === null) return "unknown";
    const n = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
    return e.type === "browser" ? [
        n,
        e.name,
        e.version
    ].join("-") : [
        n,
        e.version
    ].join("-");
}
function $7f40226359758d22$export$4389b0987726d52d() {
    var e;
    const n = $7f40226359758d22$export$57570b1603cf6adb();
    return n === $7f40226359758d22$export$86b1301a63b15dd9.browser ? [
        n,
        ((e = (0, $jeE37.getLocation)()) == null ? void 0 : e.host) || "unknown"
    ].join(":") : n;
}
function $7f40226359758d22$export$b55a4c6e272b719f(e, n, t) {
    const r = $7f40226359758d22$export$20d4a3cb5829b8b6(), o = $7f40226359758d22$export$4389b0987726d52d();
    return [
        [
            e,
            n
        ].join("-"),
        [
            $7f40226359758d22$export$e08b61c98317d88c,
            t
        ].join("-"),
        r,
        o
    ].join("/");
}
function $7f40226359758d22$export$d875b3963ef774f5({ protocol: e , version: n , relayUrl: t , sdkVersion: r , auth: o , projectId: s  }) {
    const i = t.split("?"), u = $7f40226359758d22$export$b55a4c6e272b719f(e, n, r), f = {
        auth: o,
        ua: u,
        projectId: s
    }, g = $7f40226359758d22$export$c4147c69f6845da(i[1] || "", f);
    return i[0] + "?" + g;
}
function $7f40226359758d22$export$ed08891a8a54eb(e) {
    let n = (e.match(/^[^:]+(?=:\/\/)/gi) || [])[0];
    const t = typeof n < "u" ? e.split("://")[1] : e;
    return n = n === "wss" ? "https" : "http", [
        n,
        t
    ].join("://");
}
function $7f40226359758d22$export$804de46662e4ac95(e, n, t) {
    if (!e[n] || typeof e[n] !== t) throw new Error(`Missing or invalid "${n}" param`);
}
function $7f40226359758d22$export$1e21530e896c0b0b(e, n = $7f40226359758d22$export$7f882bb969de14a3) {
    return $7f40226359758d22$export$7f00885504704576(e.split($7f40226359758d22$export$98238152dfccf046), n);
}
function $7f40226359758d22$export$80bffd46c37a96f6(e) {
    return $7f40226359758d22$export$1e21530e896c0b0b(e).join($7f40226359758d22$export$657dee6d5648750a);
}
function $7f40226359758d22$export$1468a49de573f7f9(e, n) {
    return e.filter((t)=>n.includes(t)).length === e.length;
}
function $7f40226359758d22$export$7f00885504704576(e, n = $7f40226359758d22$export$7f882bb969de14a3) {
    return e.slice(Math.max(e.length - n, 0));
}
function $7f40226359758d22$export$c4b8dfeb6e237eb9(e) {
    return Object.fromEntries(e.entries());
}
function $7f40226359758d22$export$ac31b37c726bc3ba(e) {
    return new Map(Object.entries(e));
}
function $7f40226359758d22$export$592ef47eabb05614(e, n) {
    const t = {};
    return Object.keys(e).forEach((r)=>{
        t[r] = n(e[r]);
    }), t;
}
const $7f40226359758d22$export$85c927578394b28b = (e)=>e;
function $7f40226359758d22$export$e9f8fcacef3bca4b(e) {
    return e.trim().replace(/^\w/, (n)=>n.toUpperCase());
}
function $7f40226359758d22$export$9a00dee1beb8f576(e) {
    return e.split($7f40226359758d22$export$657dee6d5648750a).map((n)=>$7f40226359758d22$export$e9f8fcacef3bca4b(n)).join($7f40226359758d22$export$657dee6d5648750a);
}
function $7f40226359758d22$export$b136d03015bfc12(e, n) {
    return (0, $gm49L.fromMiliseconds)((n || Date.now()) + (0, $gm49L.toMiliseconds)(e));
}
function $7f40226359758d22$export$57947cfd429801a2(e) {
    return (0, $gm49L.fromMiliseconds)(Date.now()) >= (0, $gm49L.toMiliseconds)(e);
}
function $7f40226359758d22$export$cbf9e3cc9ffc85cb(e) {
    const n = (0, $gm49L.toMiliseconds)(e || (0, $gm49L.FIVE_MINUTES));
    let t, r, o;
    return {
        resolve: (s)=>{
            o && t && (clearTimeout(o), t(s));
        },
        reject: (s)=>{
            o && r && (clearTimeout(o), r(s));
        },
        done: ()=>new Promise((s, i)=>{
                o = setTimeout(i, n), t = s, r = i;
            })
    };
}
function $7f40226359758d22$export$3da2293b007ed708(e, n) {
    return new Promise(async (t, r)=>{
        const o = setTimeout(()=>r(), n), s = await e;
        clearTimeout(o), t(s);
    });
}
function $7f40226359758d22$export$187ab6574b2ae23f(e, n) {
    if (typeof n == "string" && n.startsWith(`${e}:`)) return n;
    if (e.toLowerCase() === "topic") {
        if (typeof n != "string") throw new Error('Value must be "string" for expirer target type: topic');
        return `topic:${n}`;
    } else if (e.toLowerCase() === "id") {
        if (typeof n != "number") throw new Error('Value must be "number" for expirer target type: id');
        return `id:${n}`;
    }
    throw new Error(`Unknown expirer target type: ${e}`);
}
function $7f40226359758d22$export$43ab92477f8713b9(e) {
    return $7f40226359758d22$export$187ab6574b2ae23f("topic", e);
}
function $7f40226359758d22$export$bd13103c2e5cc0c3(e) {
    return $7f40226359758d22$export$187ab6574b2ae23f("id", e);
}
function $7f40226359758d22$export$93adeb0f16e8e51d(e) {
    const [n, t] = e.split(":"), r = {
        id: void 0,
        topic: void 0
    };
    if (n === "topic" && typeof t == "string") r.topic = t;
    else if (n === "id" && Number.isInteger(Number(t))) r.id = Number(t);
    else throw new Error(`Invalid target, expected id:number or topic:string, got ${n}:${t}`);
    return r;
}
function $7f40226359758d22$export$e3eb27ce66c0f6d9(e, n) {
    return `${e}${n ? `:${n}` : ""}`;
}
const $7f40226359758d22$export$822d0bd1635d5360 = "irn";
function $7f40226359758d22$export$cf77af25151525db(e) {
    return e?.relay || {
        protocol: $7f40226359758d22$export$822d0bd1635d5360
    };
}
function $7f40226359758d22$export$604e3deb95e1b734(e) {
    const n = (0, $5G6lt.RELAY_JSONRPC)[e];
    if (typeof n > "u") throw new Error(`Relay Protocol not supported: ${e}`);
    return n;
}
var $7f40226359758d22$var$Fn = Object.defineProperty, $7f40226359758d22$var$Ae = Object.getOwnPropertySymbols, $7f40226359758d22$var$Hn = Object.prototype.hasOwnProperty, $7f40226359758d22$var$qn = Object.prototype.propertyIsEnumerable, $7f40226359758d22$var$we = (e, n, t)=>n in e ? $7f40226359758d22$var$Fn(e, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[n] = t, $7f40226359758d22$var$Bn = (e, n)=>{
    for(var t in n || (n = {}))$7f40226359758d22$var$Hn.call(n, t) && $7f40226359758d22$var$we(e, t, n[t]);
    if ($7f40226359758d22$var$Ae) for (var t of $7f40226359758d22$var$Ae(n))$7f40226359758d22$var$qn.call(n, t) && $7f40226359758d22$var$we(e, t, n[t]);
    return e;
};
function $7f40226359758d22$export$3d24f408c2ac468a(e, n = "-") {
    const t = {}, r = "relay" + n;
    return Object.keys(e).forEach((o)=>{
        if (o.startsWith(r)) {
            const s = o.replace(r, ""), i = e[o];
            t[s] = i;
        }
    }), t;
}
function $7f40226359758d22$export$59f58847421cfb28(e) {
    const n = e.indexOf(":"), t = e.indexOf("?") !== -1 ? e.indexOf("?") : void 0, r = e.substring(0, n), o = e.substring(n + 1, t).split("@"), s = typeof t < "u" ? e.substring(t) : "", i = $5E0Ij.parse(s);
    return {
        protocol: r,
        topic: o[0],
        version: parseInt(o[1], 10),
        symKey: i.symKey,
        relay: $7f40226359758d22$export$3d24f408c2ac468a(i)
    };
}
function $7f40226359758d22$export$65c55c7ccd19bb8f(e, n = "-") {
    const t = "relay", r = {};
    return Object.keys(e).forEach((o)=>{
        const s = t + n + o;
        e[o] && (r[s] = e[o]);
    }), r;
}
function $7f40226359758d22$export$b2786ede34fb2350(e) {
    return `${e.protocol}:${e.topic}@${e.version}?` + $5E0Ij.stringify($7f40226359758d22$var$Bn({
        symKey: e.symKey
    }, $7f40226359758d22$export$65c55c7ccd19bb8f(e.relay)));
}
function $7f40226359758d22$export$d46695d9c3664fe9(e) {
    const n = [];
    return e.forEach((t)=>{
        const [r, o] = t.split(":");
        n.push(`${r}:${o}`);
    }), n;
}
function $7f40226359758d22$export$fb6db6038e742b14(e) {
    const n = [];
    return Object.values(e).forEach((t)=>{
        n.push(...$7f40226359758d22$export$d46695d9c3664fe9(t.accounts));
    }), n;
}
function $7f40226359758d22$export$7dcf4808e17b15ac(e, n) {
    const t = [];
    return Object.values(e).forEach((r)=>{
        $7f40226359758d22$export$d46695d9c3664fe9(r.accounts).includes(n) && t.push(...r.methods);
    }), t;
}
function $7f40226359758d22$export$94ee6d00e384a22(e, n) {
    const t = [];
    return Object.values(e).forEach((r)=>{
        $7f40226359758d22$export$d46695d9c3664fe9(r.accounts).includes(n) && t.push(...r.events);
    }), t;
}
function $7f40226359758d22$export$a8daa26a7c60ef90(e, n) {
    const t = $7f40226359758d22$export$93f7b81dc815a714(e, n);
    if (t) throw new Error(t.message);
    const r = {};
    for (const [o, s] of Object.entries(e))r[o] = {
        methods: s.methods,
        events: s.events,
        chains: s.accounts.map((i)=>`${i.split(":")[0]}:${i.split(":")[1]}`)
    };
    return r;
}
const $7f40226359758d22$var$Wn = {
    INVALID_METHOD: {
        message: "Invalid method.",
        code: 1001
    },
    INVALID_EVENT: {
        message: "Invalid event.",
        code: 1002
    },
    INVALID_UPDATE_REQUEST: {
        message: "Invalid update request.",
        code: 1003
    },
    INVALID_EXTEND_REQUEST: {
        message: "Invalid extend request.",
        code: 1004
    },
    INVALID_SESSION_SETTLE_REQUEST: {
        message: "Invalid session settle request.",
        code: 1005
    },
    UNAUTHORIZED_METHOD: {
        message: "Unauthorized method.",
        code: 3001
    },
    UNAUTHORIZED_EVENT: {
        message: "Unauthorized event.",
        code: 3002
    },
    UNAUTHORIZED_UPDATE_REQUEST: {
        message: "Unauthorized update request.",
        code: 3003
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
        message: "Unauthorized extend request.",
        code: 3004
    },
    USER_REJECTED: {
        message: "User rejected.",
        code: 5e3
    },
    USER_REJECTED_CHAINS: {
        message: "User rejected chains.",
        code: 5001
    },
    USER_REJECTED_METHODS: {
        message: "User rejected methods.",
        code: 5002
    },
    USER_REJECTED_EVENTS: {
        message: "User rejected events.",
        code: 5003
    },
    UNSUPPORTED_CHAINS: {
        message: "Unsupported chains.",
        code: 5100
    },
    UNSUPPORTED_METHODS: {
        message: "Unsupported methods.",
        code: 5101
    },
    UNSUPPORTED_EVENTS: {
        message: "Unsupported events.",
        code: 5102
    },
    UNSUPPORTED_ACCOUNTS: {
        message: "Unsupported accounts.",
        code: 5103
    },
    UNSUPPORTED_NAMESPACE_KEY: {
        message: "Unsupported namespace key.",
        code: 5104
    },
    USER_DISCONNECTED: {
        message: "User disconnected.",
        code: 6e3
    },
    SESSION_SETTLEMENT_FAILED: {
        message: "Session settlement failed.",
        code: 7e3
    },
    WC_METHOD_UNSUPPORTED: {
        message: "Unsupported wc_ method.",
        code: 10001
    }
}, $7f40226359758d22$var$Jn = {
    NOT_INITIALIZED: {
        message: "Not initialized.",
        code: 1
    },
    NO_MATCHING_KEY: {
        message: "No matching key.",
        code: 2
    },
    RESTORE_WILL_OVERRIDE: {
        message: "Restore will override.",
        code: 3
    },
    RESUBSCRIBED: {
        message: "Resubscribed.",
        code: 4
    },
    MISSING_OR_INVALID: {
        message: "Missing or invalid.",
        code: 5
    },
    EXPIRED: {
        message: "Expired.",
        code: 6
    },
    UNKNOWN_TYPE: {
        message: "Unknown type.",
        code: 7
    },
    MISMATCHED_TOPIC: {
        message: "Mismatched topic.",
        code: 8
    },
    NON_CONFORMING_NAMESPACES: {
        message: "Non conforming namespaces.",
        code: 9
    }
};
function $7f40226359758d22$export$500d4c4a8fafe35(e, n) {
    const { message: t , code: r  } = $7f40226359758d22$var$Jn[e];
    return {
        message: n ? `${t} ${n}` : t,
        code: r
    };
}
function $7f40226359758d22$export$8203ef1531c8b5b5(e, n) {
    const { message: t , code: r  } = $7f40226359758d22$var$Wn[e];
    return {
        message: n ? `${t} ${n}` : t,
        code: r
    };
}
function $7f40226359758d22$export$41dd3d480aac4a71(e, n) {
    return Array.isArray(e) ? typeof n < "u" && e.length ? e.every(n) : !0 : !1;
}
function $7f40226359758d22$export$16a0268bc22b47b0(e) {
    return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
}
function $7f40226359758d22$export$fce6876652108ab(e) {
    return typeof e > "u";
}
function $7f40226359758d22$export$ee898ca48ab56c74(e, n) {
    return n && $7f40226359758d22$export$fce6876652108ab(e) ? !0 : typeof e == "string" && Boolean(e.trim().length);
}
function $7f40226359758d22$export$d6781b696a0576d1(e, n) {
    return n && $7f40226359758d22$export$fce6876652108ab(e) ? !0 : typeof e == "number" && !isNaN(e);
}
function $7f40226359758d22$export$6fc4971bf8f326a(e, n) {
    const { requiredNamespaces: t  } = n, r = Object.keys(e.namespaces), o = Object.keys(t);
    let s = !0;
    return $7f40226359758d22$export$1468a49de573f7f9(o, r) ? (r.forEach((i)=>{
        const { accounts: u , methods: f , events: g  } = e.namespaces[i], O = $7f40226359758d22$export$d46695d9c3664fe9(u), p = t[i];
        (!$7f40226359758d22$export$1468a49de573f7f9(p.chains, O) || !$7f40226359758d22$export$1468a49de573f7f9(p.methods, f) || !$7f40226359758d22$export$1468a49de573f7f9(p.events, g)) && (s = !1);
    }), s) : !1;
}
function $7f40226359758d22$export$e544b39f0a22e47a(e) {
    return $7f40226359758d22$export$ee898ca48ab56c74(e, !1) && e.includes(":") ? e.split(":").length === 2 : !1;
}
function $7f40226359758d22$export$49e4a5b6862e3c71(e) {
    if ($7f40226359758d22$export$ee898ca48ab56c74(e, !1) && e.includes(":")) {
        const n = e.split(":");
        if (n.length === 3) {
            const t = n[0] + ":" + n[1];
            return !!n[2] && $7f40226359758d22$export$e544b39f0a22e47a(t);
        }
    }
    return !1;
}
function $7f40226359758d22$export$bef94a5618bf18bf(e) {
    if ($7f40226359758d22$export$ee898ca48ab56c74(e, !1)) try {
        return typeof new URL(e) < "u";
    } catch  {
        return !1;
    }
    return !1;
}
function $7f40226359758d22$export$f657f7976bb2769d(e) {
    var n;
    return (n = e?.proposer) == null ? void 0 : n.publicKey;
}
function $7f40226359758d22$export$c96d5113768aaf5e(e) {
    return e?.topic;
}
function $7f40226359758d22$export$5e1c5c89613c213f(e, n) {
    let t = null;
    return $7f40226359758d22$export$ee898ca48ab56c74(e?.publicKey, !1) || (t = $7f40226359758d22$export$500d4c4a8fafe35("MISSING_OR_INVALID", `${n} controller public key should be a string`)), t;
}
function $7f40226359758d22$export$c12fced8176774f3(e) {
    let n = !0;
    return $7f40226359758d22$export$41dd3d480aac4a71(e) ? e.length && (n = e.every((t)=>$7f40226359758d22$export$ee898ca48ab56c74(t, !1))) : n = !1, n;
}
function $7f40226359758d22$export$df46c123d7e298ce(e, n, t) {
    let r = null;
    return $7f40226359758d22$export$41dd3d480aac4a71(n) ? n.forEach((o)=>{
        r || (!$7f40226359758d22$export$e544b39f0a22e47a(o) || !o.includes(e)) && (r = $7f40226359758d22$export$8203ef1531c8b5b5("UNSUPPORTED_CHAINS", `${t}, chain ${o} should be a string and conform to "namespace:chainId" format`));
    }) : r = $7f40226359758d22$export$8203ef1531c8b5b5("UNSUPPORTED_CHAINS", `${t}, chains ${n} should be an array of strings conforming to "namespace:chainId" format`), r;
}
function $7f40226359758d22$export$94ae96fb66f29e08(e, n) {
    let t = null;
    return Object.entries(e).forEach(([r, o])=>{
        if (t) return;
        const s = $7f40226359758d22$export$df46c123d7e298ce(r, o?.chains, `${n} requiredNamespace`);
        s && (t = s);
    }), t;
}
function $7f40226359758d22$export$d5644026aaffb9e7(e, n) {
    let t = null;
    return $7f40226359758d22$export$41dd3d480aac4a71(e) ? e.forEach((r)=>{
        t || $7f40226359758d22$export$49e4a5b6862e3c71(r) || (t = $7f40226359758d22$export$8203ef1531c8b5b5("UNSUPPORTED_ACCOUNTS", `${n}, account ${r} should be a string and conform to "namespace:chainId:address" format`));
    }) : t = $7f40226359758d22$export$8203ef1531c8b5b5("UNSUPPORTED_ACCOUNTS", `${n}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), t;
}
function $7f40226359758d22$export$2a2012e7bfa1cfb4(e, n) {
    let t = null;
    return Object.values(e).forEach((r)=>{
        if (t) return;
        const o = $7f40226359758d22$export$d5644026aaffb9e7(r?.accounts, `${n} namespace`);
        o && (t = o);
    }), t;
}
function $7f40226359758d22$export$b32541d63753af56(e, n) {
    let t = null;
    return $7f40226359758d22$export$c12fced8176774f3(e?.methods) ? $7f40226359758d22$export$c12fced8176774f3(e?.events) || (t = $7f40226359758d22$export$8203ef1531c8b5b5("UNSUPPORTED_EVENTS", `${n}, events should be an array of strings or empty array for no events`)) : t = $7f40226359758d22$export$8203ef1531c8b5b5("UNSUPPORTED_METHODS", `${n}, methods should be an array of strings or empty array for no methods`), t;
}
function $7f40226359758d22$export$27682c78deeca9d7(e, n) {
    let t = null;
    return Object.values(e).forEach((r)=>{
        if (t) return;
        const o = $7f40226359758d22$export$b32541d63753af56(r, `${n}, namespace`);
        o && (t = o);
    }), t;
}
function $7f40226359758d22$export$9e2b2cae22c6a8b3(e, n) {
    let t = null;
    if (e && $7f40226359758d22$export$16a0268bc22b47b0(e)) {
        const r = $7f40226359758d22$export$27682c78deeca9d7(e, n);
        r && (t = r);
        const o = $7f40226359758d22$export$94ae96fb66f29e08(e, n);
        o && (t = o);
    } else t = $7f40226359758d22$export$500d4c4a8fafe35("MISSING_OR_INVALID", `${n}, requiredNamespaces should be an object with data`);
    return t;
}
function $7f40226359758d22$export$93f7b81dc815a714(e, n) {
    let t = null;
    if (e && $7f40226359758d22$export$16a0268bc22b47b0(e)) {
        const r = $7f40226359758d22$export$27682c78deeca9d7(e, n);
        r && (t = r);
        const o = $7f40226359758d22$export$2a2012e7bfa1cfb4(e, n);
        o && (t = o);
    } else t = $7f40226359758d22$export$500d4c4a8fafe35("MISSING_OR_INVALID", `${n}, namespaces should be an object with data`);
    return t;
}
function $7f40226359758d22$export$1b3fc298be8c9a7b(e) {
    return $7f40226359758d22$export$ee898ca48ab56c74(e.protocol, !0);
}
function $7f40226359758d22$export$6294c30b976bd21e(e, n) {
    let t = !1;
    return n && !e ? t = !0 : e && $7f40226359758d22$export$41dd3d480aac4a71(e) && e.length && e.forEach((r)=>{
        t = $7f40226359758d22$export$1b3fc298be8c9a7b(r);
    }), t;
}
function $7f40226359758d22$export$53551be28ad5e34d(e) {
    return typeof e == "number";
}
function $7f40226359758d22$export$b3f5fcca1d210454(e) {
    return typeof e < "u" && true;
}
function $7f40226359758d22$export$766fe78377d96f2a(e) {
    return !(!e || typeof e != "object" || !e.code || !$7f40226359758d22$export$d6781b696a0576d1(e.code, !1) || !e.message || !$7f40226359758d22$export$ee898ca48ab56c74(e.message, !1));
}
function $7f40226359758d22$export$1a2af3c017fb6d42(e) {
    return !($7f40226359758d22$export$fce6876652108ab(e) || !$7f40226359758d22$export$ee898ca48ab56c74(e.method, !1));
}
function $7f40226359758d22$export$1ae38cf0a848f651(e) {
    return !($7f40226359758d22$export$fce6876652108ab(e) || $7f40226359758d22$export$fce6876652108ab(e.result) && $7f40226359758d22$export$fce6876652108ab(e.error) || !$7f40226359758d22$export$d6781b696a0576d1(e.id, !1) || !$7f40226359758d22$export$ee898ca48ab56c74(e.jsonrpc, !1));
}
function $7f40226359758d22$export$cbe4cdc5960cfa11(e) {
    return !($7f40226359758d22$export$fce6876652108ab(e) || !$7f40226359758d22$export$ee898ca48ab56c74(e.name, !1));
}
function $7f40226359758d22$export$144fc36610eb6522(e, n) {
    return !(!$7f40226359758d22$export$e544b39f0a22e47a(n) || !$7f40226359758d22$export$fb6db6038e742b14(e).includes(n));
}
function $7f40226359758d22$export$8db4804e3a6de711(e, n, t) {
    return $7f40226359758d22$export$ee898ca48ab56c74(t, !1) ? $7f40226359758d22$export$7dcf4808e17b15ac(e, n).includes(t) : !1;
}
function $7f40226359758d22$export$df2c67ef8baad16b(e, n, t) {
    return $7f40226359758d22$export$ee898ca48ab56c74(t, !1) ? $7f40226359758d22$export$94ee6d00e384a22(e, n).includes(t) : !1;
}
function $7f40226359758d22$export$ba5b0a4b585cd1b4(e, n, t) {
    let r = null;
    const o = Object.keys(e), s = Object.keys(n);
    return $7f40226359758d22$export$1468a49de573f7f9(o, s) ? o.forEach((i)=>{
        if (r) return;
        const u = e[i].chains, f = $7f40226359758d22$export$d46695d9c3664fe9(n[i].accounts);
        $7f40226359758d22$export$1468a49de573f7f9(u, f) ? $7f40226359758d22$export$1468a49de573f7f9(e[i].methods, n[i].methods) ? $7f40226359758d22$export$1468a49de573f7f9(e[i].events, n[i].events) || (r = $7f40226359758d22$export$500d4c4a8fafe35("NON_CONFORMING_NAMESPACES", `${t} namespaces events don't satisfy requiredNamespaces events for ${i}`)) : r = $7f40226359758d22$export$500d4c4a8fafe35("NON_CONFORMING_NAMESPACES", `${t} namespaces methods don't satisfy requiredNamespaces methods for ${i}`) : r = $7f40226359758d22$export$500d4c4a8fafe35("NON_CONFORMING_NAMESPACES", `${t} namespaces accounts don't satisfy requiredNamespaces chains for ${i}`);
    }) : r = $7f40226359758d22$export$500d4c4a8fafe35("NON_CONFORMING_NAMESPACES", `${t} namespaces keys don't satisfy requiredNamespaces`), r;
}
function $7f40226359758d22$export$59fba2af1ac782b(e, n) {
    return $7f40226359758d22$export$d6781b696a0576d1(e, !1) && e <= n.max && e >= n.min;
}

});
parcelRequire.register("MK84t", function(module, exports) {

$parcel$export(module.exports, "detect", () => $0928441a7624ae62$export$17b446b869dad473, (v) => $0928441a7624ae62$export$17b446b869dad473 = v);

var $4DZrq = parcelRequire("4DZrq");
var $0928441a7624ae62$var$__spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var $0928441a7624ae62$export$8fa985da04a86f0 = /** @class */ function() {
    function BrowserInfo(name, version, os) {
        this.name = name;
        this.version = version;
        this.os = os;
        this.type = "browser";
    }
    return BrowserInfo;
}();
var $0928441a7624ae62$export$62457c674e0167c0 = /** @class */ function() {
    function NodeInfo(version) {
        this.version = version;
        this.type = "node";
        this.name = "node";
        this.os = $4DZrq.platform;
    }
    return NodeInfo;
}();
var $0928441a7624ae62$export$775de176f06fc21 = /** @class */ function() {
    function SearchBotDeviceInfo(name, version, os, bot) {
        this.name = name;
        this.version = version;
        this.os = os;
        this.bot = bot;
        this.type = "bot-device";
    }
    return SearchBotDeviceInfo;
}();
var $0928441a7624ae62$export$cb435e1e9f86c1ff = /** @class */ function() {
    function BotInfo() {
        this.type = "bot";
        this.bot = true; // NOTE: deprecated test name instead
        this.name = "bot";
        this.version = null;
        this.os = null;
    }
    return BotInfo;
}();
var $0928441a7624ae62$export$7c78fe95a9d9b03e = /** @class */ function() {
    function ReactNativeInfo() {
        this.type = "react-native";
        this.name = "react-native";
        this.version = null;
        this.os = null;
    }
    return ReactNativeInfo;
}();
// tslint:disable-next-line:max-line-length
var $0928441a7624ae62$var$SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var $0928441a7624ae62$var$SEARCHBOT_OS_REGEX = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var $0928441a7624ae62$var$REQUIRED_VERSION_PARTS = 3;
var $0928441a7624ae62$var$userAgentRules = [
    [
        "aol",
        /AOLShield\/([0-9\._]+)/
    ],
    [
        "edge",
        /Edge\/([0-9\._]+)/
    ],
    [
        "edge-ios",
        /EdgiOS\/([0-9\._]+)/
    ],
    [
        "yandexbrowser",
        /YaBrowser\/([0-9\._]+)/
    ],
    [
        "kakaotalk",
        /KAKAOTALK\s([0-9\.]+)/
    ],
    [
        "samsung",
        /SamsungBrowser\/([0-9\.]+)/
    ],
    [
        "silk",
        /\bSilk\/([0-9._-]+)\b/
    ],
    [
        "miui",
        /MiuiBrowser\/([0-9\.]+)$/
    ],
    [
        "beaker",
        /BeakerBrowser\/([0-9\.]+)/
    ],
    [
        "edge-chromium",
        /EdgA?\/([0-9\.]+)/
    ],
    [
        "chromium-webview",
        /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
    ],
    [
        "chrome",
        /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
    ],
    [
        "phantomjs",
        /PhantomJS\/([0-9\.]+)(:?\s|$)/
    ],
    [
        "crios",
        /CriOS\/([0-9\.]+)(:?\s|$)/
    ],
    [
        "firefox",
        /Firefox\/([0-9\.]+)(?:\s|$)/
    ],
    [
        "fxios",
        /FxiOS\/([0-9\.]+)/
    ],
    [
        "opera-mini",
        /Opera Mini.*Version\/([0-9\.]+)/
    ],
    [
        "opera",
        /Opera\/([0-9\.]+)(?:\s|$)/
    ],
    [
        "opera",
        /OPR\/([0-9\.]+)(:?\s|$)/
    ],
    [
        "pie",
        /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/
    ],
    [
        "pie",
        /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/
    ],
    [
        "netfront",
        /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/
    ],
    [
        "ie",
        /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/
    ],
    [
        "ie",
        /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/
    ],
    [
        "ie",
        /MSIE\s(7\.0)/
    ],
    [
        "bb10",
        /BB10;\sTouch.*Version\/([0-9\.]+)/
    ],
    [
        "android",
        /Android\s([0-9\.]+)/
    ],
    [
        "ios",
        /Version\/([0-9\._]+).*Mobile.*Safari.*/
    ],
    [
        "safari",
        /Version\/([0-9\._]+).*Safari/
    ],
    [
        "facebook",
        /FB[AS]V\/([0-9\.]+)/
    ],
    [
        "instagram",
        /Instagram\s([0-9\.]+)/
    ],
    [
        "ios-webview",
        /AppleWebKit\/([0-9\.]+).*Mobile/
    ],
    [
        "ios-webview",
        /AppleWebKit\/([0-9\.]+).*Gecko\)$/
    ],
    [
        "curl",
        /^curl\/([0-9\.]+)$/
    ],
    [
        "searchbot",
        $0928441a7624ae62$var$SEARCHBOX_UA_REGEX
    ]
];
var $0928441a7624ae62$var$operatingSystemRules = [
    [
        "iOS",
        /iP(hone|od|ad)/
    ],
    [
        "Android OS",
        /Android/
    ],
    [
        "BlackBerry OS",
        /BlackBerry|BB10/
    ],
    [
        "Windows Mobile",
        /IEMobile/
    ],
    [
        "Amazon OS",
        /Kindle/
    ],
    [
        "Windows 3.11",
        /Win16/
    ],
    [
        "Windows 95",
        /(Windows 95)|(Win95)|(Windows_95)/
    ],
    [
        "Windows 98",
        /(Windows 98)|(Win98)/
    ],
    [
        "Windows 2000",
        /(Windows NT 5.0)|(Windows 2000)/
    ],
    [
        "Windows XP",
        /(Windows NT 5.1)|(Windows XP)/
    ],
    [
        "Windows Server 2003",
        /(Windows NT 5.2)/
    ],
    [
        "Windows Vista",
        /(Windows NT 6.0)/
    ],
    [
        "Windows 7",
        /(Windows NT 6.1)/
    ],
    [
        "Windows 8",
        /(Windows NT 6.2)/
    ],
    [
        "Windows 8.1",
        /(Windows NT 6.3)/
    ],
    [
        "Windows 10",
        /(Windows NT 10.0)/
    ],
    [
        "Windows ME",
        /Windows ME/
    ],
    [
        "Windows CE",
        /Windows CE|WinCE|Microsoft Pocket Internet Explorer/
    ],
    [
        "Open BSD",
        /OpenBSD/
    ],
    [
        "Sun OS",
        /SunOS/
    ],
    [
        "Chrome OS",
        /CrOS/
    ],
    [
        "Linux",
        /(Linux)|(X11)/
    ],
    [
        "Mac OS",
        /(Mac_PowerPC)|(Macintosh)/
    ],
    [
        "QNX",
        /QNX/
    ],
    [
        "BeOS",
        /BeOS/
    ],
    [
        "OS/2",
        /OS\/2/
    ]
];
function $0928441a7624ae62$export$17b446b869dad473(userAgent) {
    if (!!userAgent) return $0928441a7624ae62$export$1184956100eddc3c(userAgent);
    if (typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative") return new $0928441a7624ae62$export$7c78fe95a9d9b03e();
    if (typeof navigator !== "undefined") return $0928441a7624ae62$export$1184956100eddc3c(navigator.userAgent);
    return $0928441a7624ae62$export$bf2c6630ab904918();
}
function $0928441a7624ae62$var$matchUserAgent(ua) {
    // opted for using reduce here rather than Array#first with a regex.test call
    // this is primarily because using the reduce we only perform the regex
    // execution once rather than once for the test and for the exec again below
    // probably something that needs to be benchmarked though
    return ua !== "" && $0928441a7624ae62$var$userAgentRules.reduce(function(matched, _a) {
        var browser = _a[0], regex = _a[1];
        if (matched) return matched;
        var uaMatch = regex.exec(ua);
        return !!uaMatch && [
            browser,
            uaMatch
        ];
    }, false);
}
function $0928441a7624ae62$export$89ca9f8ca1a50fd5(ua) {
    var data = $0928441a7624ae62$var$matchUserAgent(ua);
    return data ? data[0] : null;
}
function $0928441a7624ae62$export$1184956100eddc3c(ua) {
    var matchedRule = $0928441a7624ae62$var$matchUserAgent(ua);
    if (!matchedRule) return null;
    var name = matchedRule[0], match = matchedRule[1];
    if (name === "searchbot") return new $0928441a7624ae62$export$cb435e1e9f86c1ff();
    // Do not use RegExp for split operation as some browser do not support it (See: http://blog.stevenlevithan.com/archives/cross-browser-split)
    var versionParts = match[1] && match[1].split(".").join("_").split("_").slice(0, 3);
    if (versionParts) {
        if (versionParts.length < $0928441a7624ae62$var$REQUIRED_VERSION_PARTS) versionParts = $0928441a7624ae62$var$__spreadArray($0928441a7624ae62$var$__spreadArray([], versionParts, true), $0928441a7624ae62$var$createVersionParts($0928441a7624ae62$var$REQUIRED_VERSION_PARTS - versionParts.length), true);
    } else versionParts = [];
    var version = versionParts.join(".");
    var os = $0928441a7624ae62$export$3070bd282ec37ea8(ua);
    var searchBotMatch = $0928441a7624ae62$var$SEARCHBOT_OS_REGEX.exec(ua);
    if (searchBotMatch && searchBotMatch[1]) return new $0928441a7624ae62$export$775de176f06fc21(name, version, os, searchBotMatch[1]);
    return new $0928441a7624ae62$export$8fa985da04a86f0(name, version, os);
}
function $0928441a7624ae62$export$3070bd282ec37ea8(ua) {
    for(var ii = 0, count = $0928441a7624ae62$var$operatingSystemRules.length; ii < count; ii++){
        var _a = $0928441a7624ae62$var$operatingSystemRules[ii], os = _a[0], regex = _a[1];
        var match = regex.exec(ua);
        if (match) return os;
    }
    return null;
}
function $0928441a7624ae62$export$bf2c6630ab904918() {
    var isNode = typeof $4DZrq !== "undefined" && $4DZrq.version;
    return isNode ? new $0928441a7624ae62$export$62457c674e0167c0($4DZrq.version.slice(1)) : null;
}
function $0928441a7624ae62$var$createVersionParts(count) {
    var output = [];
    for(var ii = 0; ii < count; ii++)output.push("0");
    return output;
}

});

parcelRequire.register("3kcDi", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getWindowMetadata = void 0;

var $jeE37 = parcelRequire("jeE37");
function $26bd09f3e0fc6927$var$getWindowMetadata() {
    let doc;
    let loc;
    try {
        doc = $jeE37.getDocumentOrThrow();
        loc = $jeE37.getLocationOrThrow();
    } catch (e) {
        return null;
    }
    function getIcons() {
        const links = doc.getElementsByTagName("link");
        const icons = [];
        for(let i = 0; i < links.length; i++){
            const link = links[i];
            const rel = link.getAttribute("rel");
            if (rel) {
                if (rel.toLowerCase().indexOf("icon") > -1) {
                    const href = link.getAttribute("href");
                    if (href) {
                        if (href.toLowerCase().indexOf("https:") === -1 && href.toLowerCase().indexOf("http:") === -1 && href.indexOf("//") !== 0) {
                            let absoluteHref = loc.protocol + "//" + loc.host;
                            if (href.indexOf("/") === 0) absoluteHref += href;
                            else {
                                const path = loc.pathname.split("/");
                                path.pop();
                                const finalPath = path.join("/");
                                absoluteHref += finalPath + "/" + href;
                            }
                            icons.push(absoluteHref);
                        } else if (href.indexOf("//") === 0) {
                            const absoluteUrl = loc.protocol + href;
                            icons.push(absoluteUrl);
                        } else icons.push(href);
                    }
                }
            }
        }
        return icons;
    }
    function getWindowMetadataOfAny(...args) {
        const metaTags = doc.getElementsByTagName("meta");
        for(let i = 0; i < metaTags.length; i++){
            const tag = metaTags[i];
            const attributes = [
                "itemprop",
                "property",
                "name"
            ].map((target)=>tag.getAttribute(target)).filter((attr)=>{
                if (attr) return args.includes(attr);
                return false;
            });
            if (attributes.length && attributes) {
                const content = tag.getAttribute("content");
                if (content) return content;
            }
        }
        return "";
    }
    function getName() {
        let name = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title");
        if (!name) name = doc.title;
        return name;
    }
    function getDescription() {
        const description = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
        return description;
    }
    const name = getName();
    const description = getDescription();
    const url = loc.origin;
    const icons = getIcons();
    const meta = {
        description: description,
        url: url,
        icons: icons,
        name: name
    };
    return meta;
}
module.exports.getWindowMetadata = $26bd09f3e0fc6927$var$getWindowMetadata;

});

parcelRequire.register("5E0Ij", function(module, exports) {

$parcel$export(module.exports, "extract", () => $41c13de5e43cc602$export$f9380c9a627682d3, (v) => $41c13de5e43cc602$export$f9380c9a627682d3 = v);
$parcel$export(module.exports, "parse", () => $41c13de5e43cc602$export$98e6a39c04603d36, (v) => $41c13de5e43cc602$export$98e6a39c04603d36 = v);
$parcel$export(module.exports, "stringify", () => $41c13de5e43cc602$export$fac44ee5b035f737, (v) => $41c13de5e43cc602$export$fac44ee5b035f737 = v);
$parcel$export(module.exports, "parseUrl", () => $41c13de5e43cc602$export$7a5253c0f62e0150, (v) => $41c13de5e43cc602$export$7a5253c0f62e0150 = v);
$parcel$export(module.exports, "stringifyUrl", () => $41c13de5e43cc602$export$a8c1621ea79325d3, (v) => $41c13de5e43cc602$export$a8c1621ea79325d3 = v);
$parcel$export(module.exports, "pick", () => $41c13de5e43cc602$export$357523c63a2253b9, (v) => $41c13de5e43cc602$export$357523c63a2253b9 = v);
var $41c13de5e43cc602$export$f9380c9a627682d3;
var $41c13de5e43cc602$export$98e6a39c04603d36;
var $41c13de5e43cc602$export$fac44ee5b035f737;
var $41c13de5e43cc602$export$7a5253c0f62e0150;
var $41c13de5e43cc602$export$a8c1621ea79325d3;
var $41c13de5e43cc602$export$357523c63a2253b9;
var $41c13de5e43cc602$export$44c361b8ec72ef7f;
"use strict";

var $lvgdx = parcelRequire("lvgdx");

var $7zHv8 = parcelRequire("7zHv8");

var $ed263 = parcelRequire("ed263");

var $ihAQe = parcelRequire("ihAQe");
const $41c13de5e43cc602$var$isNullOrUndefined = (value)=>value === null || value === undefined;
const $41c13de5e43cc602$var$encodeFragmentIdentifier = Symbol("encodeFragmentIdentifier");
function $41c13de5e43cc602$var$encoderForArrayFormat(options) {
    switch(options.arrayFormat){
        case "index":
            return (key)=>(result, value)=>{
                    const index = result.length;
                    if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") return result;
                    if (value === null) return [
                        ...result,
                        [
                            $41c13de5e43cc602$var$encode(key, options),
                            "[",
                            index,
                            "]"
                        ].join("")
                    ];
                    return [
                        ...result,
                        [
                            $41c13de5e43cc602$var$encode(key, options),
                            "[",
                            $41c13de5e43cc602$var$encode(index, options),
                            "]=",
                            $41c13de5e43cc602$var$encode(value, options)
                        ].join("")
                    ];
                };
        case "bracket":
            return (key)=>(result, value)=>{
                    if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") return result;
                    if (value === null) return [
                        ...result,
                        [
                            $41c13de5e43cc602$var$encode(key, options),
                            "[]"
                        ].join("")
                    ];
                    return [
                        ...result,
                        [
                            $41c13de5e43cc602$var$encode(key, options),
                            "[]=",
                            $41c13de5e43cc602$var$encode(value, options)
                        ].join("")
                    ];
                };
        case "colon-list-separator":
            return (key)=>(result, value)=>{
                    if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") return result;
                    if (value === null) return [
                        ...result,
                        [
                            $41c13de5e43cc602$var$encode(key, options),
                            ":list="
                        ].join("")
                    ];
                    return [
                        ...result,
                        [
                            $41c13de5e43cc602$var$encode(key, options),
                            ":list=",
                            $41c13de5e43cc602$var$encode(value, options)
                        ].join("")
                    ];
                };
        case "comma":
        case "separator":
        case "bracket-separator":
            {
                const keyValueSep = options.arrayFormat === "bracket-separator" ? "[]=" : "=";
                return (key)=>(result, value)=>{
                        if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") return result;
                        // Translate null to an empty string so that it doesn't serialize as 'null'
                        value = value === null ? "" : value;
                        if (result.length === 0) return [
                            [
                                $41c13de5e43cc602$var$encode(key, options),
                                keyValueSep,
                                $41c13de5e43cc602$var$encode(value, options)
                            ].join("")
                        ];
                        return [
                            [
                                result,
                                $41c13de5e43cc602$var$encode(value, options)
                            ].join(options.arrayFormatSeparator)
                        ];
                    };
            }
        default:
            return (key)=>(result, value)=>{
                    if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") return result;
                    if (value === null) return [
                        ...result,
                        $41c13de5e43cc602$var$encode(key, options)
                    ];
                    return [
                        ...result,
                        [
                            $41c13de5e43cc602$var$encode(key, options),
                            "=",
                            $41c13de5e43cc602$var$encode(value, options)
                        ].join("")
                    ];
                };
    }
}
function $41c13de5e43cc602$var$parserForArrayFormat(options) {
    let result;
    switch(options.arrayFormat){
        case "index":
            return (key, value, accumulator)=>{
                result = /\[(\d*)\]$/.exec(key);
                key = key.replace(/\[\d*\]$/, "");
                if (!result) {
                    accumulator[key] = value;
                    return;
                }
                if (accumulator[key] === undefined) accumulator[key] = {};
                accumulator[key][result[1]] = value;
            };
        case "bracket":
            return (key, value, accumulator)=>{
                result = /(\[\])$/.exec(key);
                key = key.replace(/\[\]$/, "");
                if (!result) {
                    accumulator[key] = value;
                    return;
                }
                if (accumulator[key] === undefined) {
                    accumulator[key] = [
                        value
                    ];
                    return;
                }
                accumulator[key] = [].concat(accumulator[key], value);
            };
        case "colon-list-separator":
            return (key, value, accumulator)=>{
                result = /(:list)$/.exec(key);
                key = key.replace(/:list$/, "");
                if (!result) {
                    accumulator[key] = value;
                    return;
                }
                if (accumulator[key] === undefined) {
                    accumulator[key] = [
                        value
                    ];
                    return;
                }
                accumulator[key] = [].concat(accumulator[key], value);
            };
        case "comma":
        case "separator":
            return (key, value, accumulator)=>{
                const isArray = typeof value === "string" && value.includes(options.arrayFormatSeparator);
                const isEncodedArray = typeof value === "string" && !isArray && $41c13de5e43cc602$var$decode(value, options).includes(options.arrayFormatSeparator);
                value = isEncodedArray ? $41c13de5e43cc602$var$decode(value, options) : value;
                const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map((item)=>$41c13de5e43cc602$var$decode(item, options)) : value === null ? value : $41c13de5e43cc602$var$decode(value, options);
                accumulator[key] = newValue;
            };
        case "bracket-separator":
            return (key, value, accumulator)=>{
                const isArray = /(\[\])$/.test(key);
                key = key.replace(/\[\]$/, "");
                if (!isArray) {
                    accumulator[key] = value ? $41c13de5e43cc602$var$decode(value, options) : value;
                    return;
                }
                const arrayValue = value === null ? [] : value.split(options.arrayFormatSeparator).map((item)=>$41c13de5e43cc602$var$decode(item, options));
                if (accumulator[key] === undefined) {
                    accumulator[key] = arrayValue;
                    return;
                }
                accumulator[key] = [].concat(accumulator[key], arrayValue);
            };
        default:
            return (key, value, accumulator)=>{
                if (accumulator[key] === undefined) {
                    accumulator[key] = value;
                    return;
                }
                accumulator[key] = [].concat(accumulator[key], value);
            };
    }
}
function $41c13de5e43cc602$var$validateArrayFormatSeparator(value) {
    if (typeof value !== "string" || value.length !== 1) throw new TypeError("arrayFormatSeparator must be single character string");
}
function $41c13de5e43cc602$var$encode(value, options) {
    if (options.encode) return options.strict ? $lvgdx(value) : encodeURIComponent(value);
    return value;
}
function $41c13de5e43cc602$var$decode(value, options) {
    if (options.decode) return $7zHv8(value);
    return value;
}
function $41c13de5e43cc602$var$keysSorter(input) {
    if (Array.isArray(input)) return input.sort();
    if (typeof input === "object") return $41c13de5e43cc602$var$keysSorter(Object.keys(input)).sort((a, b)=>Number(a) - Number(b)).map((key)=>input[key]);
    return input;
}
function $41c13de5e43cc602$var$removeHash(input) {
    const hashStart = input.indexOf("#");
    if (hashStart !== -1) input = input.slice(0, hashStart);
    return input;
}
function $41c13de5e43cc602$var$getHash(url) {
    let hash = "";
    const hashStart = url.indexOf("#");
    if (hashStart !== -1) hash = url.slice(hashStart);
    return hash;
}
function $41c13de5e43cc602$var$extract(input) {
    input = $41c13de5e43cc602$var$removeHash(input);
    const queryStart = input.indexOf("?");
    if (queryStart === -1) return "";
    return input.slice(queryStart + 1);
}
function $41c13de5e43cc602$var$parseValue(value, options) {
    if (options.parseNumbers && !Number.isNaN(Number(value)) && typeof value === "string" && value.trim() !== "") value = Number(value);
    else if (options.parseBooleans && value !== null && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) value = value.toLowerCase() === "true";
    return value;
}
function $41c13de5e43cc602$var$parse(query, options) {
    options = Object.assign({
        decode: true,
        sort: true,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: false,
        parseBooleans: false
    }, options);
    $41c13de5e43cc602$var$validateArrayFormatSeparator(options.arrayFormatSeparator);
    const formatter = $41c13de5e43cc602$var$parserForArrayFormat(options);
    // Create an object with no prototype
    const ret = Object.create(null);
    if (typeof query !== "string") return ret;
    query = query.trim().replace(/^[?#&]/, "");
    if (!query) return ret;
    for (const param of query.split("&")){
        if (param === "") continue;
        let [key, value] = $ed263(options.decode ? param.replace(/\+/g, " ") : param, "=");
        // Missing `=` should be `null`:
        // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
        value = value === undefined ? null : [
            "comma",
            "separator",
            "bracket-separator"
        ].includes(options.arrayFormat) ? value : $41c13de5e43cc602$var$decode(value, options);
        formatter($41c13de5e43cc602$var$decode(key, options), value, ret);
    }
    for (const key of Object.keys(ret)){
        const value = ret[key];
        if (typeof value === "object" && value !== null) for (const k of Object.keys(value))value[k] = $41c13de5e43cc602$var$parseValue(value[k], options);
        else ret[key] = $41c13de5e43cc602$var$parseValue(value, options);
    }
    if (options.sort === false) return ret;
    return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key)=>{
        const value = ret[key];
        if (Boolean(value) && typeof value === "object" && !Array.isArray(value)) // Sort object keys, not values
        result[key] = $41c13de5e43cc602$var$keysSorter(value);
        else result[key] = value;
        return result;
    }, Object.create(null));
}
$41c13de5e43cc602$export$f9380c9a627682d3 = $41c13de5e43cc602$var$extract;
$41c13de5e43cc602$export$98e6a39c04603d36 = $41c13de5e43cc602$var$parse;
$41c13de5e43cc602$export$fac44ee5b035f737 = (object, options)=>{
    if (!object) return "";
    options = Object.assign({
        encode: true,
        strict: true,
        arrayFormat: "none",
        arrayFormatSeparator: ","
    }, options);
    $41c13de5e43cc602$var$validateArrayFormatSeparator(options.arrayFormatSeparator);
    const shouldFilter = (key)=>options.skipNull && $41c13de5e43cc602$var$isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === "";
    const formatter = $41c13de5e43cc602$var$encoderForArrayFormat(options);
    const objectCopy = {};
    for (const key of Object.keys(object))if (!shouldFilter(key)) objectCopy[key] = object[key];
    const keys = Object.keys(objectCopy);
    if (options.sort !== false) keys.sort(options.sort);
    return keys.map((key)=>{
        const value = object[key];
        if (value === undefined) return "";
        if (value === null) return $41c13de5e43cc602$var$encode(key, options);
        if (Array.isArray(value)) {
            if (value.length === 0 && options.arrayFormat === "bracket-separator") return $41c13de5e43cc602$var$encode(key, options) + "[]";
            return value.reduce(formatter(key), []).join("&");
        }
        return $41c13de5e43cc602$var$encode(key, options) + "=" + $41c13de5e43cc602$var$encode(value, options);
    }).filter((x)=>x.length > 0).join("&");
};
$41c13de5e43cc602$export$7a5253c0f62e0150 = (url, options)=>{
    options = Object.assign({
        decode: true
    }, options);
    const [url_, hash] = $ed263(url, "#");
    return Object.assign({
        url: url_.split("?")[0] || "",
        query: $41c13de5e43cc602$var$parse($41c13de5e43cc602$var$extract(url), options)
    }, options && options.parseFragmentIdentifier && hash ? {
        fragmentIdentifier: $41c13de5e43cc602$var$decode(hash, options)
    } : {});
};
$41c13de5e43cc602$export$a8c1621ea79325d3 = (object, options)=>{
    options = Object.assign({
        encode: true,
        strict: true,
        [$41c13de5e43cc602$var$encodeFragmentIdentifier]: true
    }, options);
    const url = $41c13de5e43cc602$var$removeHash(object.url).split("?")[0] || "";
    const queryFromUrl = $41c13de5e43cc602$export$f9380c9a627682d3(object.url);
    const parsedQueryFromUrl = $41c13de5e43cc602$export$98e6a39c04603d36(queryFromUrl, {
        sort: false
    });
    const query = Object.assign(parsedQueryFromUrl, object.query);
    let queryString = $41c13de5e43cc602$export$fac44ee5b035f737(query, options);
    if (queryString) queryString = `?${queryString}`;
    let hash = $41c13de5e43cc602$var$getHash(object.url);
    if (object.fragmentIdentifier) hash = `#${options[$41c13de5e43cc602$var$encodeFragmentIdentifier] ? $41c13de5e43cc602$var$encode(object.fragmentIdentifier, options) : object.fragmentIdentifier}`;
    return `${url}${queryString}${hash}`;
};
$41c13de5e43cc602$export$357523c63a2253b9 = (input, filter, options)=>{
    options = Object.assign({
        parseFragmentIdentifier: true,
        [$41c13de5e43cc602$var$encodeFragmentIdentifier]: false
    }, options);
    const { url: url , query: query , fragmentIdentifier: fragmentIdentifier  } = $41c13de5e43cc602$export$7a5253c0f62e0150(input, options);
    return $41c13de5e43cc602$export$a8c1621ea79325d3({
        url: url,
        query: $ihAQe(query, filter),
        fragmentIdentifier: fragmentIdentifier
    }, options);
};
$41c13de5e43cc602$export$44c361b8ec72ef7f = (input, filter, options)=>{
    const exclusionFilter = Array.isArray(filter) ? (key)=>!filter.includes(key) : (key, value)=>!filter(key, value);
    return $41c13de5e43cc602$export$357523c63a2253b9(input, exclusionFilter, options);
};

});




//# sourceMappingURL=index.es.6c1c21c9.js.map
