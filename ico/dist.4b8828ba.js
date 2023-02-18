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
var parcelRequire = $parcel$global["parcelRequire716c"];
parcelRequire.register("kY2Cw", function(module, exports) {

$parcel$export(module.exports, "Web3Modal", () => $f43b7198c525b064$export$c03599cd5308d12b);

var $6sRZo = parcelRequire("6sRZo");
var $f43b7198c525b064$var$s = Object.defineProperty, $f43b7198c525b064$var$a = Object.getOwnPropertySymbols, $f43b7198c525b064$var$c = Object.prototype.hasOwnProperty, $f43b7198c525b064$var$d = Object.prototype.propertyIsEnumerable, $f43b7198c525b064$var$i = (o, e, t)=>e in o ? $f43b7198c525b064$var$s(o, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : o[e] = t, $f43b7198c525b064$var$b = (o, e)=>{
    for(var t in e || (e = {}))$f43b7198c525b064$var$c.call(e, t) && $f43b7198c525b064$var$i(o, t, e[t]);
    if ($f43b7198c525b064$var$a) for (var t of $f43b7198c525b064$var$a(e))$f43b7198c525b064$var$d.call(e, t) && $f43b7198c525b064$var$i(o, t, e[t]);
    return o;
};

class $f43b7198c525b064$export$c03599cd5308d12b {
    constructor(e){
        this.openModal = (0, $6sRZo.ModalCtrl).open, this.closeModal = (0, $6sRZo.ModalCtrl).close, this.subscribeModal = (0, $6sRZo.ModalCtrl).subscribe, this.setTheme = (0, $6sRZo.ConfigCtrl).setThemeConfig, (0, $6sRZo.ConfigCtrl).setConfig($f43b7198c525b064$var$b({
            enableStandaloneMode: !0
        }, e)), this.initUi();
    }
    async initUi() {
        if (typeof window < "u") {
            await (parcelRequire("aJAgA"));
            const e = document.createElement("w3m-modal");
            document.body.insertAdjacentElement("beforeend", e), (0, $6sRZo.OptionsCtrl).setIsUiLoaded(!0);
        }
    }
}

});
parcelRequire.register("6sRZo", function(module, exports) {

$parcel$export(module.exports, "OptionsCtrl", () => $4b4f3cbab138b44f$export$5f7b08e38aeeee56);
$parcel$export(module.exports, "ClientCtrl", () => $4b4f3cbab138b44f$export$7d2d093f32eecd30);
$parcel$export(module.exports, "CoreUtil", () => $4b4f3cbab138b44f$export$2ff3ceb398d6f444);
$parcel$export(module.exports, "ConfigCtrl", () => $4b4f3cbab138b44f$export$5239b2e4de4e2646);
$parcel$export(module.exports, "ExplorerCtrl", () => $4b4f3cbab138b44f$export$8a0e3ad54b37ee57);
$parcel$export(module.exports, "RouterCtrl", () => $4b4f3cbab138b44f$export$2dd8023fb2cd44c);
$parcel$export(module.exports, "ModalCtrl", () => $4b4f3cbab138b44f$export$f6ef1648e6110c37);
$parcel$export(module.exports, "ToastCtrl", () => $4b4f3cbab138b44f$export$49bec3d5b199c07);

var $crHs7 = parcelRequire("crHs7");

var $ax3hF = parcelRequire("ax3hF");
const $4b4f3cbab138b44f$var$n = (0, $crHs7.proxy)({
    selectedChain: void 0,
    chains: void 0,
    standaloneChains: void 0,
    standaloneUri: void 0,
    address: void 0,
    profileName: void 0,
    profileAvatar: void 0,
    profileLoading: !1,
    balanceLoading: !1,
    balance: void 0,
    isConnected: !1,
    isStandalone: !1,
    isCustomDesktop: !1,
    isCustomMobile: !1,
    isDataLoaded: !1,
    isUiLoaded: !1,
    walletConnectVersion: 1
}), $4b4f3cbab138b44f$export$5f7b08e38aeeee56 = {
    state: $4b4f3cbab138b44f$var$n,
    subscribe (e) {
        return (0, $crHs7.subscribe)($4b4f3cbab138b44f$var$n, ()=>e($4b4f3cbab138b44f$var$n));
    },
    setChains (e) {
        $4b4f3cbab138b44f$var$n.chains = e;
    },
    setStandaloneChains (e) {
        $4b4f3cbab138b44f$var$n.standaloneChains = e;
    },
    setStandaloneUri (e) {
        $4b4f3cbab138b44f$var$n.standaloneUri = e;
    },
    getSelectedChain () {
        const e = $4b4f3cbab138b44f$export$7d2d093f32eecd30.client().getNetwork().chain;
        return e && ($4b4f3cbab138b44f$var$n.selectedChain = e), $4b4f3cbab138b44f$var$n.selectedChain;
    },
    setSelectedChain (e) {
        $4b4f3cbab138b44f$var$n.selectedChain = e;
    },
    setIsStandalone (e) {
        $4b4f3cbab138b44f$var$n.isStandalone = e;
    },
    setIsCustomDesktop (e) {
        $4b4f3cbab138b44f$var$n.isCustomDesktop = e;
    },
    setIsCustomMobile (e) {
        $4b4f3cbab138b44f$var$n.isCustomMobile = e;
    },
    getAccount () {
        const e = $4b4f3cbab138b44f$export$7d2d093f32eecd30.client().getAccount();
        $4b4f3cbab138b44f$var$n.address = e.address, $4b4f3cbab138b44f$var$n.isConnected = e.isConnected;
    },
    setAddress (e) {
        $4b4f3cbab138b44f$var$n.address = e;
    },
    setIsConnected (e) {
        $4b4f3cbab138b44f$var$n.isConnected = e;
    },
    setProfileName (e) {
        $4b4f3cbab138b44f$var$n.profileName = e;
    },
    setProfileAvatar (e) {
        $4b4f3cbab138b44f$var$n.profileAvatar = e;
    },
    setProfileLoading (e) {
        $4b4f3cbab138b44f$var$n.profileLoading = e;
    },
    setBalanceLoading (e) {
        $4b4f3cbab138b44f$var$n.balanceLoading = e;
    },
    setBalance (e) {
        $4b4f3cbab138b44f$var$n.balance = e;
    },
    setIsDataLoaded (e) {
        $4b4f3cbab138b44f$var$n.isDataLoaded = e;
    },
    setIsUiLoaded (e) {
        $4b4f3cbab138b44f$var$n.isUiLoaded = e;
    },
    setWalletConnectVersion (e) {
        $4b4f3cbab138b44f$var$n.walletConnectVersion = e;
    },
    resetEnsProfile () {
        $4b4f3cbab138b44f$var$n.profileName = void 0, $4b4f3cbab138b44f$var$n.profileAvatar = void 0;
    },
    resetBalance () {
        $4b4f3cbab138b44f$var$n.balance = void 0;
    },
    resetAccount () {
        $4b4f3cbab138b44f$var$n.address = void 0, $4b4f3cbab138b44f$var$n.isConnected = !1, $4b4f3cbab138b44f$export$5f7b08e38aeeee56.resetEnsProfile(), $4b4f3cbab138b44f$export$5f7b08e38aeeee56.resetBalance();
    }
}, $4b4f3cbab138b44f$var$h = (0, $crHs7.proxy)({
    initialized: !1,
    ethereumClient: void 0
}), $4b4f3cbab138b44f$export$7d2d093f32eecd30 = {
    setEthereumClient (e) {
        !$4b4f3cbab138b44f$var$h.initialized && e && ($4b4f3cbab138b44f$var$h.ethereumClient = e, $4b4f3cbab138b44f$export$5f7b08e38aeeee56.setChains(e.chains), $4b4f3cbab138b44f$var$h.initialized = !0);
    },
    client () {
        if ($4b4f3cbab138b44f$var$h.ethereumClient) return $4b4f3cbab138b44f$var$h.ethereumClient;
        throw new Error("ClientCtrl has no client set");
    }
}, $4b4f3cbab138b44f$export$2ff3ceb398d6f444 = {
    WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
    isMobile () {
        return typeof window < "u" ? Boolean(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
    },
    isAndroid () {
        return $4b4f3cbab138b44f$export$2ff3ceb398d6f444.isMobile() && navigator.userAgent.toLowerCase().includes("android");
    },
    isEmptyObject (e) {
        return Object.getPrototypeOf(e) === Object.prototype && Object.getOwnPropertyNames(e).length === 0 && Object.getOwnPropertySymbols(e).length === 0;
    },
    isHttpUrl (e) {
        return e.startsWith("http://") || e.startsWith("https://");
    },
    formatNativeUrl (e, t, s) {
        if ($4b4f3cbab138b44f$export$2ff3ceb398d6f444.isHttpUrl(e)) return this.formatUniversalUrl(e, t, s);
        let o = e;
        o.includes("://") || (o = e.replaceAll("/", "").replaceAll(":", ""), o = `${o}://`), this.setWalletConnectDeepLink(o, s);
        const l = encodeURIComponent(t);
        return `${o}wc?uri=${l}`;
    },
    formatUniversalUrl (e, t, s) {
        if (!$4b4f3cbab138b44f$export$2ff3ceb398d6f444.isHttpUrl(e)) return this.formatNativeUrl(e, t, s);
        let o = e;
        e.endsWith("/") && (o = e.slice(0, -1)), this.setWalletConnectDeepLink(o, s);
        const l = encodeURIComponent(t);
        return `${o}/wc?uri=${l}`;
    },
    async wait (e) {
        return new Promise((t)=>{
            setTimeout(t, e);
        });
    },
    openHref (e, t = "_self") {
        window.open(e, t, "noreferrer noopener");
    },
    setWalletConnectDeepLink (e, t) {
        localStorage.setItem($4b4f3cbab138b44f$export$2ff3ceb398d6f444.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
            href: e,
            name: t
        }));
    },
    setWalletConnectAndroidDeepLink (e) {
        const [t] = e.split("?");
        localStorage.setItem($4b4f3cbab138b44f$export$2ff3ceb398d6f444.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
            href: t,
            name: "Android"
        }));
    },
    removeWalletConnectDeepLink () {
        localStorage.removeItem($4b4f3cbab138b44f$export$2ff3ceb398d6f444.WALLETCONNECT_DEEPLINK_CHOICE);
    },
    isNull (e) {
        return e === null;
    }
};
function $4b4f3cbab138b44f$var$S() {
    return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const $4b4f3cbab138b44f$var$f = (0, $crHs7.proxy)({
    projectId: "",
    themeMode: $4b4f3cbab138b44f$var$S() ? "dark" : "light",
    themeColor: "default",
    themeBackground: $4b4f3cbab138b44f$export$2ff3ceb398d6f444.isMobile() ? "themeColor" : "gradient",
    themeZIndex: 89,
    mobileWallets: void 0,
    desktopWallets: void 0,
    walletImages: void 0,
    chainImages: void 0,
    tokenImages: void 0,
    standaloneChains: void 0,
    enableStandaloneMode: !1,
    enableNetworkView: !1,
    enableAccountView: !0,
    defaultChain: void 0,
    explorerAllowList: void 0,
    explorerDenyList: void 0,
    termsOfServiceUrl: void 0,
    privacyPolicyUrl: void 0
}), $4b4f3cbab138b44f$export$5239b2e4de4e2646 = {
    state: $4b4f3cbab138b44f$var$f,
    subscribe (e) {
        return (0, $crHs7.subscribe)($4b4f3cbab138b44f$var$f, ()=>e($4b4f3cbab138b44f$var$f));
    },
    setConfig (e) {
        var t, s, o, l;
        if ($4b4f3cbab138b44f$export$5f7b08e38aeeee56.setStandaloneChains(e.standaloneChains), $4b4f3cbab138b44f$export$5f7b08e38aeeee56.setIsStandalone(Boolean((t = e.standaloneChains) == null ? void 0 : t.length) || Boolean(e.enableStandaloneMode)), $4b4f3cbab138b44f$export$5f7b08e38aeeee56.setIsCustomMobile(Boolean((s = e.mobileWallets) == null ? void 0 : s.length)), $4b4f3cbab138b44f$export$5f7b08e38aeeee56.setIsCustomDesktop(Boolean((o = e.desktopWallets) == null ? void 0 : o.length)), $4b4f3cbab138b44f$export$5f7b08e38aeeee56.setWalletConnectVersion((l = e.walletConnectVersion) != null ? l : 1), e.defaultChain) $4b4f3cbab138b44f$export$5f7b08e38aeeee56.setSelectedChain(e.defaultChain);
        else if (!$4b4f3cbab138b44f$export$5f7b08e38aeeee56.state.isStandalone) {
            const u = $4b4f3cbab138b44f$export$7d2d093f32eecd30.client().getDefaultChain();
            $4b4f3cbab138b44f$export$5f7b08e38aeeee56.setSelectedChain(u);
        }
        Object.assign($4b4f3cbab138b44f$var$f, e);
    },
    setThemeConfig (e) {
        Object.assign($4b4f3cbab138b44f$var$f, e);
    }
}, $4b4f3cbab138b44f$var$I = "https://explorer-api.walletconnect.com";
function $4b4f3cbab138b44f$var$y(e) {
    const t = Object.fromEntries(Object.entries(e).filter(([s, o])=>typeof o < "u" && o !== null && o !== "").map(([s, o])=>[
            s,
            o.toString()
        ]));
    return new URLSearchParams(t).toString();
}
const $4b4f3cbab138b44f$var$v = {
    async fetchWallets (e, t) {
        const s = $4b4f3cbab138b44f$var$y(t), o = `${$4b4f3cbab138b44f$var$I}/v3/wallets?projectId=${e}&${s}`;
        return (await fetch(o)).json();
    },
    formatImageUrl (e, t) {
        return `${$4b4f3cbab138b44f$var$I}/v3/logo/lg/${t}?projectId=${e}`;
    }
}, $4b4f3cbab138b44f$var$r = (0, $crHs7.proxy)({
    wallets: {
        listings: [],
        total: 0,
        page: 1
    },
    search: {
        listings: [],
        total: 0,
        page: 1
    },
    previewWallets: [],
    recomendedWallets: []
});
function $4b4f3cbab138b44f$var$b() {
    const { projectId: e  } = $4b4f3cbab138b44f$export$5239b2e4de4e2646.state;
    if (!e) throw new Error("projectId is required to work with explorer api");
    return e;
}
const $4b4f3cbab138b44f$export$8a0e3ad54b37ee57 = {
    state: $4b4f3cbab138b44f$var$r,
    async getPreviewWallets (e) {
        const { listings: t  } = await $4b4f3cbab138b44f$var$v.fetchWallets($4b4f3cbab138b44f$var$b(), e);
        return $4b4f3cbab138b44f$var$r.previewWallets = Object.values(t), $4b4f3cbab138b44f$var$r.previewWallets;
    },
    async getRecomendedWallets () {
        const { listings: e  } = await $4b4f3cbab138b44f$var$v.fetchWallets($4b4f3cbab138b44f$var$b(), {
            page: 1,
            entries: 6
        });
        $4b4f3cbab138b44f$var$r.recomendedWallets = Object.values(e);
    },
    async getPaginatedWallets (e) {
        const { page: t , search: s  } = e, { listings: o , total: l  } = await $4b4f3cbab138b44f$var$v.fetchWallets($4b4f3cbab138b44f$var$b(), e), u = Object.values(o), w = s ? "search" : "wallets";
        return $4b4f3cbab138b44f$var$r[w] = {
            listings: [
                ...$4b4f3cbab138b44f$var$r[w].listings,
                ...u
            ],
            total: l,
            page: t ?? 1
        }, {
            listings: u,
            total: l
        };
    },
    getImageUrl (e) {
        return $4b4f3cbab138b44f$var$v.formatImageUrl($4b4f3cbab138b44f$var$b(), e);
    },
    resetSearch () {
        $4b4f3cbab138b44f$var$r.search = {
            listings: [],
            total: 0,
            page: 1
        };
    }
}, $4b4f3cbab138b44f$var$i = (0, $crHs7.proxy)({
    history: [
        "ConnectWallet"
    ],
    view: "ConnectWallet",
    data: void 0
}), $4b4f3cbab138b44f$export$2dd8023fb2cd44c = {
    state: $4b4f3cbab138b44f$var$i,
    subscribe (e) {
        return (0, $crHs7.subscribe)($4b4f3cbab138b44f$var$i, ()=>e($4b4f3cbab138b44f$var$i));
    },
    push (e, t) {
        e !== $4b4f3cbab138b44f$var$i.view && ($4b4f3cbab138b44f$var$i.view = e, t && ($4b4f3cbab138b44f$var$i.data = t), $4b4f3cbab138b44f$var$i.history.push(e));
    },
    replace (e) {
        $4b4f3cbab138b44f$var$i.view = e, $4b4f3cbab138b44f$var$i.history = [
            e
        ];
    },
    goBack () {
        if ($4b4f3cbab138b44f$var$i.history.length > 1) {
            $4b4f3cbab138b44f$var$i.history.pop();
            const [e] = $4b4f3cbab138b44f$var$i.history.slice(-1);
            $4b4f3cbab138b44f$var$i.view = e;
        }
    }
}, $4b4f3cbab138b44f$var$C = (0, $crHs7.proxy)({
    open: !1
}), $4b4f3cbab138b44f$export$f6ef1648e6110c37 = {
    state: $4b4f3cbab138b44f$var$C,
    subscribe (e) {
        return (0, $crHs7.subscribe)($4b4f3cbab138b44f$var$C, ()=>e($4b4f3cbab138b44f$var$C));
    },
    async open (e) {
        return new Promise((t)=>{
            const { isConnected: s , isStandalone: o , isUiLoaded: l , isDataLoaded: u  } = $4b4f3cbab138b44f$export$5f7b08e38aeeee56.state, { enableNetworkView: w  } = $4b4f3cbab138b44f$export$5239b2e4de4e2646.state;
            if (o ? ($4b4f3cbab138b44f$export$5f7b08e38aeeee56.setStandaloneUri(e?.uri), $4b4f3cbab138b44f$export$5f7b08e38aeeee56.setStandaloneChains(e?.standaloneChains), $4b4f3cbab138b44f$export$2dd8023fb2cd44c.replace("ConnectWallet")) : e != null && e.route ? $4b4f3cbab138b44f$export$2dd8023fb2cd44c.replace(e.route) : s ? $4b4f3cbab138b44f$export$2dd8023fb2cd44c.replace("Account") : w ? $4b4f3cbab138b44f$export$2dd8023fb2cd44c.replace("SelectNetwork") : $4b4f3cbab138b44f$export$2dd8023fb2cd44c.replace("ConnectWallet"), l && u) $4b4f3cbab138b44f$var$C.open = !0, t();
            else {
                const E = setInterval(()=>{
                    $4b4f3cbab138b44f$export$5f7b08e38aeeee56.state.isUiLoaded && $4b4f3cbab138b44f$export$5f7b08e38aeeee56.state.isDataLoaded && (clearInterval(E), $4b4f3cbab138b44f$var$C.open = !0, t());
                }, 200);
            }
        });
    },
    close () {
        $4b4f3cbab138b44f$var$C.open = !1;
    }
}, $4b4f3cbab138b44f$var$c = (0, $crHs7.proxy)({
    open: !1,
    message: "",
    variant: "success"
}), $4b4f3cbab138b44f$export$49bec3d5b199c07 = {
    state: $4b4f3cbab138b44f$var$c,
    subscribe (e) {
        return (0, $crHs7.subscribe)($4b4f3cbab138b44f$var$c, ()=>e($4b4f3cbab138b44f$var$c));
    },
    openToast (e, t) {
        $4b4f3cbab138b44f$var$c.open = !0, $4b4f3cbab138b44f$var$c.message = e, $4b4f3cbab138b44f$var$c.variant = t;
    },
    closeToast () {
        $4b4f3cbab138b44f$var$c.open = !1;
    }
};
typeof window < "u" && (window.Buffer || (window.Buffer = (0, $ax3hF.Buffer)), window.global || (window.global = window), window.process || (window.process = {
    env: {}
}));

});
parcelRequire.register("crHs7", function(module, exports) {

$parcel$export(module.exports, "proxy", () => $90f9b66947774c05$export$923f96dd5afa9ce6, (v) => $90f9b66947774c05$export$923f96dd5afa9ce6 = v);
$parcel$export(module.exports, "subscribe", () => $90f9b66947774c05$export$ec068583843480e7, (v) => $90f9b66947774c05$export$ec068583843480e7 = v);
var $90f9b66947774c05$export$c506eb22e615ba4a;
var $90f9b66947774c05$export$923f96dd5afa9ce6;
var $90f9b66947774c05$export$eff4d24c3ff7876e;
var $90f9b66947774c05$export$b8801ea43165ed7d;
var $90f9b66947774c05$export$ec068583843480e7;
var $90f9b66947774c05$export$e7b04d37d9502758;
"use strict";

var $15tS0 = parcelRequire("15tS0");
var $90f9b66947774c05$var$isObject = function isObject(x) {
    return typeof x === "object" && x !== null;
};
var $90f9b66947774c05$var$proxyStateMap = new WeakMap();
var $90f9b66947774c05$var$refSet = new WeakSet();
var $90f9b66947774c05$var$buildProxyFunction = function buildProxyFunction(objectIs, newProxy, canProxy, defaultHandlePromise, snapCache, createSnapshot, proxyCache, versionHolder, proxyFunction) {
    if (objectIs === void 0) objectIs = Object.is;
    if (newProxy === void 0) newProxy = function newProxy(target, handler) {
        return new Proxy(target, handler);
    };
    if (canProxy === void 0) canProxy = function canProxy(x) {
        return $90f9b66947774c05$var$isObject(x) && !$90f9b66947774c05$var$refSet.has(x) && (Array.isArray(x) || !(Symbol.iterator in x)) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer);
    };
    if (defaultHandlePromise === void 0) defaultHandlePromise = function defaultHandlePromise(promise) {
        switch(promise.status){
            case "fulfilled":
                return promise.value;
            case "rejected":
                throw promise.reason;
            default:
                throw promise;
        }
    };
    if (snapCache === void 0) snapCache = new WeakMap();
    if (createSnapshot === void 0) createSnapshot = function createSnapshot(target, version, handlePromise) {
        if (handlePromise === void 0) handlePromise = defaultHandlePromise;
        var cache = snapCache.get(target);
        if ((cache == null ? void 0 : cache[0]) === version) return cache[1];
        var snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
        $15tS0.markToTrack(snap, true);
        snapCache.set(target, [
            version,
            snap
        ]);
        Reflect.ownKeys(target).forEach(function(key) {
            var value = Reflect.get(target, key);
            if ($90f9b66947774c05$var$refSet.has(value)) {
                $15tS0.markToTrack(value, false);
                snap[key] = value;
            } else if (value instanceof Promise) Object.defineProperty(snap, key, {
                get: function get() {
                    return handlePromise(value);
                }
            });
            else if ($90f9b66947774c05$var$proxyStateMap.has(value)) snap[key] = $90f9b66947774c05$var$snapshot(value, handlePromise);
            else snap[key] = value;
        });
        return Object.freeze(snap);
    };
    if (proxyCache === void 0) proxyCache = new WeakMap();
    if (versionHolder === void 0) versionHolder = [
        1,
        1
    ];
    if (proxyFunction === void 0) proxyFunction = function proxyFunction(initialObject) {
        if (!$90f9b66947774c05$var$isObject(initialObject)) throw new Error("object required");
        var found = proxyCache.get(initialObject);
        if (found) return found;
        var version = versionHolder[0];
        var listeners = new Set();
        var notifyUpdate = function notifyUpdate(op, nextVersion) {
            if (nextVersion === void 0) nextVersion = ++versionHolder[0];
            if (version !== nextVersion) {
                version = nextVersion;
                listeners.forEach(function(listener) {
                    return listener(op, nextVersion);
                });
            }
        };
        var checkVersion = versionHolder[1];
        var ensureVersion = function ensureVersion(nextCheckVersion) {
            if (nextCheckVersion === void 0) nextCheckVersion = ++versionHolder[1];
            if (checkVersion !== nextCheckVersion && !listeners.size) {
                checkVersion = nextCheckVersion;
                propProxyStates.forEach(function(_ref) {
                    var propProxyState = _ref[0];
                    var propVersion = propProxyState[1](nextCheckVersion);
                    if (propVersion > version) version = propVersion;
                });
            }
            return version;
        };
        var createPropListener = function createPropListener(prop) {
            return function(op, nextVersion) {
                var newOp = [].concat(op);
                newOp[1] = [
                    prop
                ].concat(newOp[1]);
                notifyUpdate(newOp, nextVersion);
            };
        };
        var propProxyStates = new Map();
        var addPropListener = function addPropListener(prop, propProxyState) {
            if (listeners.size) {
                var remove = propProxyState[3](createPropListener(prop));
                propProxyStates.set(prop, [
                    propProxyState,
                    remove
                ]);
            } else propProxyStates.set(prop, [
                propProxyState
            ]);
        };
        var removePropListener = function removePropListener(prop) {
            var entry = propProxyStates.get(prop);
            if (entry) {
                var _entry$;
                propProxyStates.delete(prop);
                (_entry$ = entry[1]) == null || _entry$.call(entry);
            }
        };
        var addListener = function addListener(listener) {
            listeners.add(listener);
            if (listeners.size === 1) propProxyStates.forEach(function(_ref2, prop) {
                var propProxyState = _ref2[0], prevRemove = _ref2[1];
                var remove = propProxyState[3](createPropListener(prop));
                propProxyStates.set(prop, [
                    propProxyState,
                    remove
                ]);
            });
            var removeListener = function removeListener() {
                listeners.delete(listener);
                if (listeners.size === 0) propProxyStates.forEach(function(_ref3, prop) {
                    var propProxyState = _ref3[0], remove = _ref3[1];
                    if (remove) {
                        remove();
                        propProxyStates.set(prop, [
                            propProxyState
                        ]);
                    }
                });
            };
            return removeListener;
        };
        var baseObject = Array.isArray(initialObject) ? [] : Object.create(Object.getPrototypeOf(initialObject));
        var handler = {
            deleteProperty: function deleteProperty(target, prop) {
                var prevValue = Reflect.get(target, prop);
                removePropListener(prop);
                var deleted = Reflect.deleteProperty(target, prop);
                if (deleted) notifyUpdate([
                    "delete",
                    [
                        prop
                    ],
                    prevValue
                ]);
                return deleted;
            },
            set: function set(target, prop, value, receiver) {
                var _Object$getOwnPropert;
                var hasPrevValue = Reflect.has(target, prop);
                var prevValue = Reflect.get(target, prop, receiver);
                if (hasPrevValue && objectIs(prevValue, value)) return true;
                removePropListener(prop);
                if ($90f9b66947774c05$var$isObject(value)) value = $15tS0.getUntracked(value) || value;
                var nextValue = value;
                if ((_Object$getOwnPropert = Object.getOwnPropertyDescriptor(target, prop)) != null && _Object$getOwnPropert.set) ;
                else if (value instanceof Promise) value.then(function(v) {
                    value.status = "fulfilled";
                    value.value = v;
                    notifyUpdate([
                        "resolve",
                        [
                            prop
                        ],
                        v
                    ]);
                }).catch(function(e) {
                    value.status = "rejected";
                    value.reason = e;
                    notifyUpdate([
                        "reject",
                        [
                            prop
                        ],
                        e
                    ]);
                });
                else {
                    if (!$90f9b66947774c05$var$proxyStateMap.has(value) && canProxy(value)) nextValue = $90f9b66947774c05$var$proxy(value);
                    var childProxyState = !$90f9b66947774c05$var$refSet.has(nextValue) && $90f9b66947774c05$var$proxyStateMap.get(nextValue);
                    if (childProxyState) addPropListener(prop, childProxyState);
                }
                Reflect.set(target, prop, nextValue, receiver);
                notifyUpdate([
                    "set",
                    [
                        prop
                    ],
                    value,
                    prevValue
                ]);
                return true;
            }
        };
        var proxyObject = newProxy(baseObject, handler);
        proxyCache.set(initialObject, proxyObject);
        var proxyState = [
            baseObject,
            ensureVersion,
            createSnapshot,
            addListener
        ];
        $90f9b66947774c05$var$proxyStateMap.set(proxyObject, proxyState);
        Reflect.ownKeys(initialObject).forEach(function(key) {
            var desc = Object.getOwnPropertyDescriptor(initialObject, key);
            if (desc.get || desc.set) Object.defineProperty(baseObject, key, desc);
            else proxyObject[key] = initialObject[key];
        });
        return proxyObject;
    };
    return [
        proxyFunction,
        $90f9b66947774c05$var$proxyStateMap,
        $90f9b66947774c05$var$refSet,
        objectIs,
        newProxy,
        canProxy,
        defaultHandlePromise,
        snapCache,
        createSnapshot,
        proxyCache,
        versionHolder
    ];
};
var $90f9b66947774c05$var$_buildProxyFunction = $90f9b66947774c05$var$buildProxyFunction(), $90f9b66947774c05$var$proxyFunction = $90f9b66947774c05$var$_buildProxyFunction[0];
function $90f9b66947774c05$var$proxy(initialObject) {
    if (initialObject === void 0) initialObject = {};
    return $90f9b66947774c05$var$proxyFunction(initialObject);
}
function $90f9b66947774c05$var$getVersion(proxyObject) {
    var proxyState = $90f9b66947774c05$var$proxyStateMap.get(proxyObject);
    return proxyState == null ? void 0 : proxyState[1]();
}
function $90f9b66947774c05$var$subscribe(proxyObject, callback, notifyInSync) {
    var proxyState = $90f9b66947774c05$var$proxyStateMap.get(proxyObject);
    var promise;
    var ops = [];
    var addListener = proxyState[3];
    var isListenerActive = false;
    var listener = function listener(op) {
        ops.push(op);
        if (notifyInSync) {
            callback(ops.splice(0));
            return;
        }
        if (!promise) promise = Promise.resolve().then(function() {
            promise = undefined;
            if (isListenerActive) callback(ops.splice(0));
        });
    };
    var removeListener = addListener(listener);
    isListenerActive = true;
    return function() {
        isListenerActive = false;
        removeListener();
    };
}
function $90f9b66947774c05$var$snapshot(proxyObject, handlePromise) {
    var proxyState = $90f9b66947774c05$var$proxyStateMap.get(proxyObject);
    var _ref4 = proxyState, target = _ref4[0], ensureVersion = _ref4[1], createSnapshot = _ref4[2];
    return createSnapshot(target, ensureVersion(), handlePromise);
}
function $90f9b66947774c05$var$ref(obj) {
    $90f9b66947774c05$var$refSet.add(obj);
    return obj;
}
var $90f9b66947774c05$var$unstable_buildProxyFunction = $90f9b66947774c05$var$buildProxyFunction;
$90f9b66947774c05$export$c506eb22e615ba4a = $90f9b66947774c05$var$getVersion;
$90f9b66947774c05$export$923f96dd5afa9ce6 = $90f9b66947774c05$var$proxy;
$90f9b66947774c05$export$eff4d24c3ff7876e = $90f9b66947774c05$var$ref;
$90f9b66947774c05$export$b8801ea43165ed7d = $90f9b66947774c05$var$snapshot;
$90f9b66947774c05$export$ec068583843480e7 = $90f9b66947774c05$var$subscribe;
$90f9b66947774c05$export$e7b04d37d9502758 = $90f9b66947774c05$var$unstable_buildProxyFunction;

});
parcelRequire.register("15tS0", function(module, exports) {

$parcel$export(module.exports, "getUntracked", () => $0cad6dab7624ea42$export$80d2cee7ee556e99);
$parcel$export(module.exports, "markToTrack", () => $0cad6dab7624ea42$export$2c8383c890e26a1c);
const $0cad6dab7624ea42$var$e = Symbol(), $0cad6dab7624ea42$var$t = Symbol(), $0cad6dab7624ea42$var$r = "a", $0cad6dab7624ea42$var$n = "w";
let $0cad6dab7624ea42$var$o = (e, t)=>new Proxy(e, t);
const $0cad6dab7624ea42$var$s = Object.getPrototypeOf, $0cad6dab7624ea42$var$c = new WeakMap, $0cad6dab7624ea42$var$l = (e)=>e && ($0cad6dab7624ea42$var$c.has(e) ? $0cad6dab7624ea42$var$c.get(e) : $0cad6dab7624ea42$var$s(e) === Object.prototype || $0cad6dab7624ea42$var$s(e) === Array.prototype), $0cad6dab7624ea42$var$f = (e)=>"object" == typeof e && null !== e, $0cad6dab7624ea42$var$i = new WeakMap, $0cad6dab7624ea42$var$a = (e)=>e[$0cad6dab7624ea42$var$t] || e, $0cad6dab7624ea42$export$7865d0c7f908de6b = (c, f, p)=>{
    if (!$0cad6dab7624ea42$var$l(c)) return c;
    const y = $0cad6dab7624ea42$var$a(c), g = ((e)=>Object.isFrozen(e) || Object.values(Object.getOwnPropertyDescriptors(e)).some((e)=>!e.writable))(y);
    let h = p && p.get(y);
    return h && h[1].f === g || (h = ((o, s)=>{
        const c = {
            f: s
        };
        let l = !1;
        const f = (e, t)=>{
            if (!l) {
                let s = c[$0cad6dab7624ea42$var$r].get(o);
                if (s || (s = {}, c[$0cad6dab7624ea42$var$r].set(o, s)), e === $0cad6dab7624ea42$var$n) s[$0cad6dab7624ea42$var$n] = !0;
                else {
                    let r = s[e];
                    r || (r = new Set, s[e] = r), r.add(t);
                }
            }
        }, i = {
            get: (e, n)=>n === $0cad6dab7624ea42$var$t ? o : (f("k", n), $0cad6dab7624ea42$export$7865d0c7f908de6b(Reflect.get(e, n), c[$0cad6dab7624ea42$var$r], c.c)),
            has: (t, n)=>n === $0cad6dab7624ea42$var$e ? (l = !0, c[$0cad6dab7624ea42$var$r].delete(o), !0) : (f("h", n), Reflect.has(t, n)),
            getOwnPropertyDescriptor: (e, t)=>(f("o", t), Reflect.getOwnPropertyDescriptor(e, t)),
            ownKeys: (e)=>(f($0cad6dab7624ea42$var$n), Reflect.ownKeys(e))
        };
        return s && (i.set = i.deleteProperty = ()=>!1), [
            i,
            c
        ];
    })(y, g), h[1].p = $0cad6dab7624ea42$var$o(g ? ((e)=>{
        let t = $0cad6dab7624ea42$var$i.get(e);
        if (!t) {
            if (Array.isArray(e)) t = Array.from(e);
            else {
                const r = Object.getOwnPropertyDescriptors(e);
                Object.values(r).forEach((e)=>{
                    e.configurable = !0;
                }), t = Object.create($0cad6dab7624ea42$var$s(e), r);
            }
            $0cad6dab7624ea42$var$i.set(e, t);
        }
        return t;
    })(y) : y, h[0]), p && p.set(y, h)), h[1][$0cad6dab7624ea42$var$r] = f, h[1].c = p, h[1].p;
}, $0cad6dab7624ea42$export$3a85b3f4caf02b6f = (e, t, r, o)=>{
    if (Object.is(e, t)) return !1;
    if (!$0cad6dab7624ea42$var$f(e) || !$0cad6dab7624ea42$var$f(t)) return !0;
    const s = r.get($0cad6dab7624ea42$var$a(e));
    if (!s) return !0;
    if (o) {
        const r = o.get(e);
        if (r && r.n === t) return r.g;
        o.set(e, {
            n: t,
            g: !1
        });
    }
    let c = null;
    try {
        for (const r of s.h || [])if (c = Reflect.has(e, r) !== Reflect.has(t, r), c) return c;
        if (!0 === s[$0cad6dab7624ea42$var$n]) {
            if (c = ((e, t)=>{
                const r = Reflect.ownKeys(e), n = Reflect.ownKeys(t);
                return r.length !== n.length || r.some((e, t)=>e !== n[t]);
            })(e, t), c) return c;
        } else for (const r of s.o || [])if (c = !!Reflect.getOwnPropertyDescriptor(e, r) != !!Reflect.getOwnPropertyDescriptor(t, r), c) return c;
        for (const n of s.k || [])if (c = $0cad6dab7624ea42$export$3a85b3f4caf02b6f(e[n], t[n], r, o), c) return c;
        return null === c && (c = !0), c;
    } finally{
        o && o.set(e, {
            n: t,
            g: c
        });
    }
}, $0cad6dab7624ea42$export$badc26589cf7bb38 = (t)=>!!$0cad6dab7624ea42$var$l(t) && $0cad6dab7624ea42$var$e in t, $0cad6dab7624ea42$export$80d2cee7ee556e99 = (e)=>$0cad6dab7624ea42$var$l(e) && e[$0cad6dab7624ea42$var$t] || null, $0cad6dab7624ea42$export$2c8383c890e26a1c = (e, t = !0)=>{
    $0cad6dab7624ea42$var$c.set(e, t);
}, $0cad6dab7624ea42$export$10e85fc10e680a16 = (e, t, r)=>{
    const o = [], s = new WeakSet, c = (e, l)=>{
        if (s.has(e)) return;
        $0cad6dab7624ea42$var$f(e) && s.add(e);
        const i = $0cad6dab7624ea42$var$f(e) && t.get($0cad6dab7624ea42$var$a(e));
        if (i) {
            var u, p;
            if (null == (u = i.h) || u.forEach((e)=>{
                const t = `:has(${String(e)})`;
                o.push(l ? [
                    ...l,
                    t
                ] : [
                    t
                ]);
            }), !0 === i[$0cad6dab7624ea42$var$n]) {
                const e = ":ownKeys";
                o.push(l ? [
                    ...l,
                    e
                ] : [
                    e
                ]);
            } else {
                var y;
                null == (y = i.o) || y.forEach((e)=>{
                    const t = `:hasOwn(${String(e)})`;
                    o.push(l ? [
                        ...l,
                        t
                    ] : [
                        t
                    ]);
                });
            }
            null == (p = i.k) || p.forEach((t)=>{
                r && !("value" in (Object.getOwnPropertyDescriptor(e, t) || {})) || c(e[t], l ? [
                    ...l,
                    t
                ] : [
                    t
                ]);
            });
        } else l && o.push(l);
    };
    return c(e), o;
}, $0cad6dab7624ea42$export$9b4d5450dbd8e67e = (e)=>{
    $0cad6dab7624ea42$var$o = e;
};

});



parcelRequire.register("aJAgA", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("6sPnp")).then(()=>parcelRequire("dJZau"));

});



//# sourceMappingURL=dist.4b8828ba.js.map
