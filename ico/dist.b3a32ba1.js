function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
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
var parcelRequire = $parcel$global["parcelRequire716c"];
parcelRequire.register("dJZau", function(module, exports) {

$parcel$export(module.exports, "W3mAccountButton", () => $a00eed0e4f95cd61$export$f039a2838669d98e);
$parcel$export(module.exports, "W3mConnectButton", () => $a00eed0e4f95cd61$export$277240c185e0322e);
$parcel$export(module.exports, "W3mCoreButton", () => $a00eed0e4f95cd61$export$75ba0a4a2108047f);
$parcel$export(module.exports, "W3mModal", () => $a00eed0e4f95cd61$export$8f54aa55129a8184);
$parcel$export(module.exports, "W3mNetworkSwitch", () => $a00eed0e4f95cd61$export$da7ff4df93a68d98);
parcelRequire("iiq12");
var $5Oejw = parcelRequire("5Oejw");
var $hZNzg = parcelRequire("hZNzg");
var $e9IBe = parcelRequire("e9IBe");
parcelRequire("1tJGn");
var $3yucp = parcelRequire("3yucp");
var $fWcHw = parcelRequire("fWcHw");
var $kKKQN = parcelRequire("kKKQN");

var $6sRZo = parcelRequire("6sRZo");
parcelRequire("8PRJl");
var $lpVpn = parcelRequire("lpVpn");

var $hZNzg = parcelRequire("hZNzg");

var $kT2uv = parcelRequire("kT2uv");
var $8HbD4 = parcelRequire("8HbD4");
parcelRequire("6z9RW");
var $ioFkT = parcelRequire("ioFkT");

var $iAFHp = parcelRequire("iAFHp");
var $a00eed0e4f95cd61$var$It = Object.defineProperty, $a00eed0e4f95cd61$var$st = Object.getOwnPropertySymbols, $a00eed0e4f95cd61$var$Et = Object.prototype.hasOwnProperty, $a00eed0e4f95cd61$var$Mt = Object.prototype.propertyIsEnumerable, $a00eed0e4f95cd61$var$ct = (e, t, a)=>t in e ? $a00eed0e4f95cd61$var$It(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : e[t] = a, $a00eed0e4f95cd61$var$dt = (e, t)=>{
    for(var a in t || (t = {}))$a00eed0e4f95cd61$var$Et.call(t, a) && $a00eed0e4f95cd61$var$ct(e, a, t[a]);
    if ($a00eed0e4f95cd61$var$st) for (var a of $a00eed0e4f95cd61$var$st(t))$a00eed0e4f95cd61$var$Mt.call(t, a) && $a00eed0e4f95cd61$var$ct(e, a, t[a]);
    return e;
};
function $a00eed0e4f95cd61$var$ht() {
    return {
        default: {
            light: {
                inverse: "rgb(255,255,255)",
                foreground: "rgb(51,150,255)",
                background: "rgb(232,242,252)"
            },
            dark: {
                inverse: "rgb(255,255,255)",
                foreground: "rgb(71,161,255)",
                background: "rgb(21,38,55)"
            }
        },
        magenta: {
            light: {
                inverse: "rgb(255,255,255)",
                foreground: "rgb(198,83,128)",
                background: "rgb(244,221,230)"
            },
            dark: {
                inverse: "rgb(255,255,255)",
                foreground: "rgb(203,77,140)",
                background: "rgb(57,35,43)"
            }
        },
        blue: {
            light: {
                inverse: "rgb(255,255,255)",
                foreground: "rgb(61,92,245)",
                background: "rgb(232,235,252)"
            },
            dark: {
                inverse: "rgb(255,255,255)",
                foreground: "rgb(81,109,251)",
                background: "rgb(28,33,59)"
            }
        },
        orange: {
            light: {
                inverse: "rgb(255,255,255)",
                foreground: "rgb(234,140,46)",
                background: "rgb(244,236,221)"
            },
            dark: {
                inverse: "rgb(0,0,0)",
                foreground: "rgb(255,166,76)",
                background: "rgb(57,50,34)"
            }
        },
        green: {
            light: {
                inverse: "rgb(255,255,255)",
                foreground: "rgb(38,181,98)",
                background: "rgb(218,246,218)"
            },
            dark: {
                inverse: "rgb(0,0,0)",
                foreground: "rgb(38,217,98)",
                background: "rgb(35,52,40)"
            }
        },
        purple: {
            light: {
                inverse: "rgb(255,255,255)",
                foreground: "rgb(121,76,255)",
                background: "rgb(225,218,246)"
            },
            dark: {
                inverse: "rgb(255,255,255)",
                foreground: "rgb(144,110,247)",
                background: "rgb(36,31,51)"
            }
        },
        teal: {
            light: {
                inverse: "rgb(255,255,255)",
                foreground: "rgb(43,182,182)",
                background: "rgb(217,242,238)"
            },
            dark: {
                inverse: "rgb(0,0,0)",
                foreground: "rgb(54,226,226)",
                background: "rgb(29,48,52)"
            }
        },
        blackWhite: {
            light: {
                inverse: "rgb(255,255,255)",
                foreground: "rgb(20,20,20)",
                background: "rgb(255,255,255)"
            },
            dark: {
                inverse: "rgb(0,0,0)",
                foreground: "rgb(255,255,255)",
                background: "rgb(20,20,20)"
            }
        }
    };
}
function $a00eed0e4f95cd61$var$Wt() {
    return {
        light: {
            foreground: {
                1: "rgb(20,20,20)",
                2: "rgb(121,134,134)",
                3: "rgb(158,169,169)"
            },
            background: {
                1: "rgb(255,255,255)",
                2: "rgb(241,243,243)",
                3: "rgb(228,231,231)"
            },
            overlay: "rgba(0,0,0,0.1)"
        },
        dark: {
            foreground: {
                1: "rgb(228,231,231)",
                2: "rgb(148,158,158)",
                3: "rgb(110,119,119)"
            },
            background: {
                1: "rgb(20,20,20)",
                2: "rgb(39,42,42)",
                3: "rgb(59,64,64)"
            },
            overlay: "rgba(255,255,255,0.1"
        }
    };
}
function $a00eed0e4f95cd61$var$At() {
    return {
        default: {
            1: "#B6B9C9",
            2: "#C653C6",
            3: "#794DFF",
            4: "#2EB8B8"
        },
        blue: {
            1: "#E8EBFD",
            2: "#C653C6",
            3: "#2DD2C5",
            4: "#3D5CF5"
        },
        magenta: {
            1: "#F4DDE6",
            2: "#E0D452",
            3: "#F09475",
            4: "#D1618D"
        },
        orange: {
            1: "#F4ECDD",
            2: "#B4EB47",
            3: "#3075E8",
            4: "#EB9947"
        },
        green: {
            1: "#DAF6DA",
            2: "#E06B92",
            3: "#99E54D",
            4: "#26B562"
        },
        purple: {
            1: "#E1DAF6",
            2: "#EB9947",
            3: "#E06B92",
            4: "#794DFF"
        },
        teal: {
            1: "#D9F2EE",
            2: "#F09475",
            3: "#794DFF",
            4: "#2EB8B8"
        },
        blackWhite: {
            1: "#E3E8E8",
            2: "#98AEAE",
            3: "#516767",
            4: "#242E2E"
        }
    };
}
const $a00eed0e4f95cd61$var$u = {
    color () {
        var e, t;
        const a = (e = (0, $6sRZo.ConfigCtrl).state.themeColor) != null ? e : "default", n = (t = (0, $6sRZo.ConfigCtrl).state.themeMode) != null ? t : "dark", o = $a00eed0e4f95cd61$var$ht()[a][n], r = $a00eed0e4f95cd61$var$Wt()[n], i = $a00eed0e4f95cd61$var$At()[a];
        return {
            foreground: $a00eed0e4f95cd61$var$dt({
                accent: o.foreground,
                inverse: o.inverse
            }, r.foreground),
            background: $a00eed0e4f95cd61$var$dt({
                accent: o.background
            }, r.background),
            gradient: i,
            overlay: r.overlay,
            error: "rgb(242, 90, 103)"
        };
    },
    setTheme () {
        const e = document.querySelector(":root"), { themeZIndex: t  } = (0, $6sRZo.ConfigCtrl).state;
        if (e) {
            const a = {
                "--w3m-color-fg-accent": $a00eed0e4f95cd61$var$u.color().foreground.accent,
                "--w3m-color-fg-inverse": $a00eed0e4f95cd61$var$u.color().foreground.inverse,
                "--w3m-color-fg-1": $a00eed0e4f95cd61$var$u.color().foreground[1],
                "--w3m-color-fg-2": $a00eed0e4f95cd61$var$u.color().foreground[2],
                "--w3m-color-fg-3": $a00eed0e4f95cd61$var$u.color().foreground[3],
                "--w3m-color-bg-1": $a00eed0e4f95cd61$var$u.color().background[1],
                "--w3m-color-bg-2": $a00eed0e4f95cd61$var$u.color().background[2],
                "--w3m-color-bg-3": $a00eed0e4f95cd61$var$u.color().background[3],
                "--w3m-color-overlay": $a00eed0e4f95cd61$var$u.color().overlay,
                "--w3m-color-err": $a00eed0e4f95cd61$var$u.color().error,
                "--w3m-color-success": $a00eed0e4f95cd61$var$ht().green.light.foreground,
                "--w3m-gradient-1": $a00eed0e4f95cd61$var$u.color().gradient[1],
                "--w3m-gradient-2": $a00eed0e4f95cd61$var$u.color().gradient[2],
                "--w3m-gradient-3": $a00eed0e4f95cd61$var$u.color().gradient[3],
                "--w3m-gradient-4": $a00eed0e4f95cd61$var$u.color().gradient[4],
                "--w3m-modal-z-index": `${t}`
            };
            Object.entries(a).forEach(([n, o])=>e.style.setProperty(n, o));
        }
    },
    globalCss: (0, $5Oejw.css)`*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent}button::after{content:'';position:absolute;inset:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button w3m-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--w3m-color-fg-inverse);background:var(--w3m-color-fg-accent)}`
}, $a00eed0e4f95cd61$var$Lt = (0, $5Oejw.css)`button{display:flex;border-radius:10px;flex-direction:column;transition:background-color .2s ease;justify-content:center;padding:5px;width:100px}button:hover{background-color:var(--w3m-color-overlay)}button>div{display:flex;justify-content:center;align-items:center;width:32px;height:32px;box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);background-color:var(--w3m-color-fg-accent);border-radius:50%;margin-bottom:4px}button path{fill:var(--w3m-color-fg-inverse)}`;
var $a00eed0e4f95cd61$var$jt = Object.defineProperty, $a00eed0e4f95cd61$var$St = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$ke = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$St(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$jt(t, a, o), o;
};
let $a00eed0e4f95cd61$var$te = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(...arguments), this.icon = void 0, this.label = "", this.onClick = ()=>null;
    }
    render() {
        return (0, $hZNzg.html)`<button @click="${this.onClick}"><div>${this.icon}</div><w3m-text variant="xsmall-normal" color="accent">${this.label}</w3m-text></button>`;
    }
};
$a00eed0e4f95cd61$var$te.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$Lt
], $a00eed0e4f95cd61$var$ke([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$te.prototype, "icon", 2), $a00eed0e4f95cd61$var$ke([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$te.prototype, "label", 2), $a00eed0e4f95cd61$var$ke([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$te.prototype, "onClick", 2), $a00eed0e4f95cd61$var$te = $a00eed0e4f95cd61$var$ke([
    (0, $fWcHw.customElement)("w3m-box-button")
], $a00eed0e4f95cd61$var$te);
const $a00eed0e4f95cd61$var$Pt = (0, $5Oejw.css)`button{border-radius:28px;height:28px;padding:0 10px;background-color:var(--w3m-color-fg-accent)}button path{fill:var(--w3m-color-fg-inverse)}button::after{border-radius:inherit;border:1px solid var(--w3m-color-overlay)}button:disabled::after{background-color:transparent}.w3m-icon-left svg{margin-right:5px}.w3m-icon-right svg{margin-left:5px}button:hover::after{background-color:var(--w3m-color-overlay)}button:disabled{background-color:var(--w3m-color-bg-3)}`;
var $a00eed0e4f95cd61$var$_t = Object.defineProperty, $a00eed0e4f95cd61$var$Dt = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$le = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$Dt(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$_t(t, a, o), o;
};
let $a00eed0e4f95cd61$var$G = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(...arguments), this.disabled = !1, this.iconLeft = void 0, this.iconRight = void 0, this.onClick = ()=>null;
    }
    render() {
        const e = {
            "w3m-icon-left": this.iconLeft !== void 0,
            "w3m-icon-right": this.iconRight !== void 0
        };
        return (0, $hZNzg.html)`<button class="${(0, $lpVpn.classMap)(e)}" ?disabled="${this.disabled}" @click="${this.onClick}">${this.iconLeft}<w3m-text variant="small-normal" color="inverse"><slot></slot></w3m-text>${this.iconRight}</button>`;
    }
};
$a00eed0e4f95cd61$var$G.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$Pt
], $a00eed0e4f95cd61$var$le([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$G.prototype, "disabled", 2), $a00eed0e4f95cd61$var$le([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$G.prototype, "iconLeft", 2), $a00eed0e4f95cd61$var$le([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$G.prototype, "iconRight", 2), $a00eed0e4f95cd61$var$le([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$G.prototype, "onClick", 2), $a00eed0e4f95cd61$var$G = $a00eed0e4f95cd61$var$le([
    (0, $fWcHw.customElement)("w3m-button")
], $a00eed0e4f95cd61$var$G);
const $a00eed0e4f95cd61$var$Tt = (0, $5Oejw.css)`:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:10px;color:var(--w3m-color-fg-inverse);background-color:var(--w3m-color-fg-accent)}button::after{content:'';inset:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--w3m-color-overlay)}button:hover::after{background-color:var(--w3m-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--w3m-color-bg-3);color:var(--w3m-color-fg-3)}.w3m-secondary{color:var(--w3m-color-fg-accent);background-color:transparent}.w3m-secondary::after{display:none}`;
var $a00eed0e4f95cd61$var$Nt = Object.defineProperty, $a00eed0e4f95cd61$var$Rt = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$Te = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$Rt(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$Nt(t, a, o), o;
};
let $a00eed0e4f95cd61$var$se = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(...arguments), this.disabled = !1, this.variant = "primary";
    }
    render() {
        const e = {
            "w3m-secondary": this.variant === "secondary"
        };
        return (0, $hZNzg.html)`<button ?disabled="${this.disabled}" class="${(0, $lpVpn.classMap)(e)}"><slot></slot></button>`;
    }
};
$a00eed0e4f95cd61$var$se.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$Tt
], $a00eed0e4f95cd61$var$Te([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$se.prototype, "disabled", 2), $a00eed0e4f95cd61$var$Te([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$se.prototype, "variant", 2), $a00eed0e4f95cd61$var$se = $a00eed0e4f95cd61$var$Te([
    (0, $fWcHw.customElement)("w3m-button-big")
], $a00eed0e4f95cd61$var$se);
let $a00eed0e4f95cd61$var$Bt = class {
    constructor(...t){
        this.angle = 0, this.t = 1253106, this.last = 0, this.height = 500, this.amp = 300, this.seed = 15, this.freqX = 14e-5, this.freqY = 29e-5, this.freqDelta = 1e-5, this.activeColors = [
            1,
            1,
            1,
            1
        ], this.isMetaKey = !1, this.playing = !1, $a00eed0e4f95cd61$var$mt(this, "resize", ()=>{
            this.width = window.innerWidth, this.minigl.setSize(this.width, this.height), this.minigl.setOrthographicCamera(), this.xSegCount = Math.ceil(this.width * this.conf.density[0]), this.ySegCount = Math.ceil(this.height * this.conf.density[1]), this.mesh.geometry.setTopology(this.xSegCount, this.ySegCount), this.mesh.geometry.setSize(this.width, this.height), this.mesh.material.uniforms.u_shadow_power.value = this.width < 550 ? 5 : 6;
        }), $a00eed0e4f95cd61$var$mt(this, "animate", (a)=>{
            if (this.playing) {
                if (this.shouldSkipFrame(a) || (this.t += Math.min(a - this.last, 1e3 / 15), this.last = a, this.mesh.material.uniforms.u_time.value = this.t, this.minigl.render()), this.last !== 0 && this.isStatic) return this.minigl.render();
                requestAnimationFrame(this.animate);
            }
        });
    }
    play(t) {
        this.el = t, this.connect();
    }
    stop() {
        this.playing = !1;
    }
    async connect() {
        this.shaderFiles = {
            vertex: "varying vec3 v_color;void main(){float time=u_time*u_global.noiseSpeed;vec2 noiseCoord=resolution*uvNorm*u_global.noiseFreq;vec2 st=1.-uvNorm.xy;float tilt=resolution.y/2.0*uvNorm.y;float incline=resolution.x*uvNorm.x/2.0*u_vertDeform.incline;float offset=resolution.x/2.0*u_vertDeform.incline*mix(u_vertDeform.offsetBottom,u_vertDeform.offsetTop,uv.y);float noise=snoise(vec3(noiseCoord.x*u_vertDeform.noiseFreq.x+time*u_vertDeform.noiseFlow,noiseCoord.y*u_vertDeform.noiseFreq.y,time*u_vertDeform.noiseSpeed+u_vertDeform.noiseSeed))*u_vertDeform.noiseAmp;noise*=1.0-pow(abs(uvNorm.y),2.0);noise=max(0.0,noise);vec3 pos=vec3(position.x,position.y+tilt+incline+noise-offset,position.z);if(u_active_colors[0]==1.){v_color=u_baseColor;}for(int i=0;i<u_waveLayers_length;i++){if(u_active_colors[i+1]==1.){WaveLayers layer=u_waveLayers[i];float noise=smoothstep(layer.noiseFloor,layer.noiseCeil,snoise(vec3(noiseCoord.x*layer.noiseFreq.x+time*layer.noiseFlow,noiseCoord.y*layer.noiseFreq.y,time*layer.noiseSpeed+layer.noiseSeed))/2.0+0.5);v_color=blendNormal(v_color,layer.color,pow(noise,4.));}}gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);}",
            noise: `
// MIT License: Copyright (C) 2011 Ashima Arts. All rights reserved. https://github.com/ashima/webgl-noise, https://github.com/stegu/webgl-noise
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}`,
            blend: `
// MIT Licence: Copyright (C) 2015 Jamie Owen. All rights reserved. https://github.com/jamieowen/glsl-blend
vec3 blendNormal(vec3 base, vec3 blend){return blend;}vec3 blendNormal(vec3 base,vec3 blend,float opacity){return (blendNormal(base,blend)*opacity+base*(1.0-opacity));}float blendScreen(float base,float blend){return 1.0-((1.0-base)*(1.0-blend));}vec3 blendScreen(vec3 base,vec3 blend){return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));}vec3 blendScreen(vec3 base,vec3 blend,float opacity){return (blendScreen(base, blend)*opacity+base*(1.0-opacity));}vec3 blendMultiply(vec3 base,vec3 blend){return base*blend;}vec3 blendMultiply(vec3 base,vec3 blend,float opacity){return (blendMultiply(base,blend)*opacity+base*(1.0-opacity));}float blendOverlay(float base,float blend){return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));}vec3 blendOverlay(vec3 base,vec3 blend){return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));}vec3 blendOverlay(vec3 base,vec3 blend,float opacity){return (blendOverlay(base,blend)*opacity+base*(1.0-opacity));}vec3 blendHardLight(vec3 base,vec3 blend){return blendOverlay(blend,base);}vec3 blendHardLight(vec3 base,vec3 blend,float opacity){return (blendHardLight(base,blend)*opacity+base*(1.0-opacity));}float blendSoftLight(float base,float blend){return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));}vec3 blendSoftLight(vec3 base,vec3 blend){return vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));}vec3 blendSoftLight(vec3 base,vec3 blend,float opacity){return (blendSoftLight(base,blend)*opacity+base*(1.0-opacity));}float blendColorDodge(float base,float blend){return (blend==1.0)?blend:min(base/(1.0-blend),1.0);}vec3 blendColorDodge(vec3 base,vec3 blend){return vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));}vec3 blendColorDodge(vec3 base,vec3 blend,float opacity){return (blendColorDodge(base, blend)*opacity+base*(1.0-opacity));}float blendColorBurn(float base,float blend){return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);}vec3 blendColorBurn(vec3 base,vec3 blend){return vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));}vec3 blendColorBurn(vec3 base,vec3 blend,float opacity){return (blendColorBurn(base, blend)*opacity+base*(1.0-opacity));}float blendVividLight(float base,float blend){return (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));}vec3 blendVividLight(vec3 base,vec3 blend){return vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));}vec3 blendVividLight(vec3 base,vec3 blend,float opacity){return (blendVividLight(base,blend)*opacity+base*(1.0-opacity));}float blendLighten(float base,float blend){return max(blend,base);}vec3 blendLighten(vec3 base,vec3 blend){return vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));}vec3 blendLighten(vec3 base,vec3 blend,float opacity){return (blendLighten(base,blend)*opacity+base*(1.0-opacity));}float blendLinearBurn(float base,float blend){return max(base+blend-1.0,0.0);}vec3 blendLinearBurn(vec3 base,vec3 blend){return max(base+blend-vec3(1.0),vec3(0.0));}vec3 blendLinearBurn(vec3 base,vec3 blend,float opacity){return (blendLinearBurn(base, blend)*opacity+base*(1.0-opacity));}float blendLinearDodge(float base,float blend){return min(base+blend,1.0);}vec3 blendLinearDodge(vec3 base,vec3 blend){return min(base+blend,vec3(1.0));}vec3 blendLinearDodge(vec3 base,vec3 blend,float opacity){return (blendLinearDodge(base,blend)*opacity+base*(1.0-opacity));}float blendLinearLight(float base,float blend){return blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));}vec3 blendLinearLight(vec3 base,vec3 blend){return vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));}vec3 blendLinearLight(vec3 base,vec3 blend,float opacity){return (blendLinearLight(base,blend)*opacity+base*(1.0-opacity));}`,
            fragment: "varying vec3 v_color;void main(){vec3 color=v_color;if(u_darken_top==1.0){vec2 st=gl_FragCoord.xy/resolution.xy;color.g-=pow(st.y+sin(-12.0)*st.x,u_shadow_power)*0.4;}gl_FragColor=vec4(color,1.0);}"
        }, this.conf = {
            density: [
                .06,
                .16
            ]
        }, this.minigl = new $a00eed0e4f95cd61$var$Ht(this.el, null, null, !0), requestAnimationFrame(()=>{
            this.el && (this.computedCanvasStyle = getComputedStyle(this.el), this.waitForCssVars());
        });
    }
    initMaterial() {
        this.uniforms = {
            u_time: new this.minigl.Uniform({
                value: 0
            }),
            u_shadow_power: new this.minigl.Uniform({
                value: 5
            }),
            u_darken_top: new this.minigl.Uniform({
                value: this.el.dataset.jsDarkenTop === "" ? 1 : 0
            }),
            u_active_colors: new this.minigl.Uniform({
                value: this.activeColors,
                type: "vec4"
            }),
            u_global: new this.minigl.Uniform({
                value: {
                    noiseFreq: new this.minigl.Uniform({
                        value: [
                            this.freqX,
                            this.freqY
                        ],
                        type: "vec2"
                    }),
                    noiseSpeed: new this.minigl.Uniform({
                        value: 5e-6
                    })
                },
                type: "struct"
            }),
            u_vertDeform: new this.minigl.Uniform({
                value: {
                    incline: new this.minigl.Uniform({
                        value: Math.sin(this.angle) / Math.cos(this.angle)
                    }),
                    offsetTop: new this.minigl.Uniform({
                        value: -0.5
                    }),
                    offsetBottom: new this.minigl.Uniform({
                        value: -0.5
                    }),
                    noiseFreq: new this.minigl.Uniform({
                        value: [
                            3,
                            4
                        ],
                        type: "vec2"
                    }),
                    noiseAmp: new this.minigl.Uniform({
                        value: this.amp
                    }),
                    noiseSpeed: new this.minigl.Uniform({
                        value: 10
                    }),
                    noiseFlow: new this.minigl.Uniform({
                        value: 3
                    }),
                    noiseSeed: new this.minigl.Uniform({
                        value: this.seed
                    })
                },
                type: "struct",
                excludeFrom: "fragment"
            }),
            u_baseColor: new this.minigl.Uniform({
                value: this.sectionColors[0],
                type: "vec3",
                excludeFrom: "fragment"
            }),
            u_waveLayers: new this.minigl.Uniform({
                value: [],
                excludeFrom: "fragment",
                type: "array"
            })
        };
        for(let t = 1; t < this.sectionColors.length; t += 1)this.uniforms.u_waveLayers.value.push(new this.minigl.Uniform({
            value: {
                color: new this.minigl.Uniform({
                    value: this.sectionColors[t],
                    type: "vec3"
                }),
                noiseFreq: new this.minigl.Uniform({
                    value: [
                        2 + t / this.sectionColors.length,
                        3 + t / this.sectionColors.length
                    ],
                    type: "vec2"
                }),
                noiseSpeed: new this.minigl.Uniform({
                    value: 11 + .3 * t
                }),
                noiseFlow: new this.minigl.Uniform({
                    value: 6.5 + .3 * t
                }),
                noiseSeed: new this.minigl.Uniform({
                    value: this.seed + 10 * t
                }),
                noiseFloor: new this.minigl.Uniform({
                    value: .1
                }),
                noiseCeil: new this.minigl.Uniform({
                    value: .63 + .07 * t
                })
            },
            type: "struct"
        }));
        return this.vertexShader = [
            this.shaderFiles.noise,
            this.shaderFiles.blend,
            this.shaderFiles.vertex
        ].join(""), new this.minigl.Material(this.vertexShader, this.shaderFiles.fragment, this.uniforms);
    }
    initMesh() {
        this.material = this.initMaterial(), this.geometry = new this.minigl.PlaneGeometry, this.mesh = new this.minigl.Mesh(this.geometry, this.material);
    }
    shouldSkipFrame(t) {
        return !!window.document.hidden || parseInt(t, 10) % 2 == 0 || void 0;
    }
    updateFrequency(t) {
        this.freqX += t, this.freqY += t;
    }
    toggleColor(t) {
        this.activeColors[t] = this.activeColors[t] === 0 ? 1 : 0;
    }
    init() {
        this.playing = !0, this.initGradientColors(), this.initMesh(), this.resize(), requestAnimationFrame(this.animate);
    }
    waitForCssVars() {
        this.computedCanvasStyle && this.computedCanvasStyle.getPropertyValue("--w3m-gradient-1").indexOf("#") !== -1 ? this.init() : this.init();
    }
    initGradientColors() {
        this.sectionColors = [
            "--w3m-gradient-1",
            "--w3m-gradient-2",
            "--w3m-gradient-3",
            "--w3m-gradient-4"
        ].map((t)=>{
            let a = this.computedCanvasStyle.getPropertyValue(t).trim();
            return a.length === 4 && (a = `#${a.substr(1).split("").map((n)=>n + n).join("")}`), a && `0x${a.substr(1)}`;
        }).filter(Boolean).map($a00eed0e4f95cd61$var$Ut);
    }
};
function $a00eed0e4f95cd61$var$Ut(e) {
    return [
        (e >> 16 & 255) / 255,
        (e >> 8 & 255) / 255,
        (255 & e) / 255
    ];
}
function $a00eed0e4f95cd61$var$mt(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}
let $a00eed0e4f95cd61$var$Ht = class {
    constructor(t, a, n){
        const o = this;
        o.canvas = t, o.gl = o.canvas.getContext("webgl", {
            antialias: !0
        }), o.meshes = [];
        const r = o.gl;
        a && n && this.setSize(a, n), Object.defineProperties(o, {
            Material: {
                enumerable: !1,
                value: class {
                    constructor(c, m, s = {}){
                        const d = this;
                        function v(N, E) {
                            const x = r.createShader(N);
                            return r.shaderSource(x, E), r.compileShader(x), r.getShaderParameter(x, r.COMPILE_STATUS) || console.error(r.getShaderInfoLog(x)), x;
                        }
                        function O(N, E) {
                            return Object.entries(N).map(([x, A])=>A.getDeclaration(x, E)).join("");
                        }
                        d.uniforms = s, d.uniformInstances = [];
                        const C = "precision highp float;";
                        d.vertexSource = `${C} attribute vec4 position;attribute vec2 uv;attribute vec2 uvNorm;${O(o.commonUniforms, "vertex")} ${O(s, "vertex")} ${c}`, d.Source = `${C} ${O(o.commonUniforms, "fragment")} ${O(s, "fragment")} ${m} `, d.vertexShader = v(r.VERTEX_SHADER, d.vertexSource), d.fragmentShader = v(r.FRAGMENT_SHADER, d.Source), d.program = r.createProgram(), r.attachShader(d.program, d.vertexShader), r.attachShader(d.program, d.fragmentShader), r.linkProgram(d.program), r.getProgramParameter(d.program, r.LINK_STATUS) || console.error(r.getProgramInfoLog(d.program)), r.useProgram(d.program), d.attachUniforms(void 0, o.commonUniforms), d.attachUniforms(void 0, d.uniforms);
                    }
                    attachUniforms(c, m) {
                        const s = this;
                        c === void 0 ? Object.entries(m).forEach(([d, v])=>{
                            s.attachUniforms(d, v);
                        }) : m.type == "array" ? m.value.forEach((d, v)=>s.attachUniforms(`${c}[${v}]`, d)) : m.type == "struct" ? Object.entries(m.value).forEach(([d, v])=>s.attachUniforms(`${c}.${d}`, v)) : s.uniformInstances.push({
                            uniform: m,
                            location: r.getUniformLocation(s.program, c)
                        });
                    }
                }
            },
            Uniform: {
                enumerable: !1,
                value: class {
                    constructor(c){
                        this.type = "float", Object.assign(this, c), this.typeFn = ({
                            float: "1f",
                            int: "1i",
                            vec2: "2fv",
                            vec3: "3fv",
                            vec4: "4fv",
                            mat4: "Matrix4fv"
                        })[this.type] || "1f", this.update();
                    }
                    update(c) {
                        this.value !== void 0 && r[`uniform${this.typeFn}`](c, this.typeFn.indexOf("Matrix") === 0 ? this.transpose : this.value, this.typeFn.indexOf("Matrix") === 0 ? this.value : null);
                    }
                    getDeclaration(c, m, s) {
                        const d = this;
                        if (d.excludeFrom !== m) {
                            if (d.type === "array") return d.value[0].getDeclaration(c, m, d.value.length) + `const int ${c}_length=${d.value.length};`;
                            if (d.type === "struct") {
                                let v = c.replace("u_", "");
                                return v = v.charAt(0).toUpperCase() + v.slice(1), `uniform struct ${v} {` + Object.entries(d.value).map(([O, C])=>C.getDeclaration(O, m).replace(/^uniform/, "")).join("") + `} ${c}${s > 0 ? `[${s}]` : ""};`;
                            }
                            return `uniform ${d.type} ${c}${s > 0 ? `[${s}]` : ""};`;
                        }
                    }
                }
            },
            PlaneGeometry: {
                enumerable: !1,
                value: class {
                    constructor(c, m, s, d, v){
                        r.createBuffer(), this.attributes = {
                            position: new o.Attribute({
                                target: r.ARRAY_BUFFER,
                                size: 3
                            }),
                            uv: new o.Attribute({
                                target: r.ARRAY_BUFFER,
                                size: 2
                            }),
                            uvNorm: new o.Attribute({
                                target: r.ARRAY_BUFFER,
                                size: 2
                            }),
                            index: new o.Attribute({
                                target: r.ELEMENT_ARRAY_BUFFER,
                                size: 3,
                                type: r.UNSIGNED_SHORT
                            })
                        }, this.setTopology(s, d), this.setSize(c, m, v);
                    }
                    setTopology(c = 1, m = 1) {
                        const s = this;
                        s.xSegCount = c, s.ySegCount = m, s.vertexCount = (s.xSegCount + 1) * (s.ySegCount + 1), s.quadCount = s.xSegCount * s.ySegCount * 2, s.attributes.uv.values = new Float32Array(2 * s.vertexCount), s.attributes.uvNorm.values = new Float32Array(2 * s.vertexCount), s.attributes.index.values = new Uint16Array(3 * s.quadCount);
                        for(let d = 0; d <= s.ySegCount; d++)for(let v = 0; v <= s.xSegCount; v++){
                            const O = d * (s.xSegCount + 1) + v;
                            if (s.attributes.uv.values[2 * O] = v / s.xSegCount, s.attributes.uv.values[2 * O + 1] = 1 - d / s.ySegCount, s.attributes.uvNorm.values[2 * O] = v / s.xSegCount * 2 - 1, s.attributes.uvNorm.values[2 * O + 1] = 1 - d / s.ySegCount * 2, v < s.xSegCount && d < s.ySegCount) {
                                const C = d * s.xSegCount + v;
                                s.attributes.index.values[6 * C] = O, s.attributes.index.values[6 * C + 1] = O + 1 + s.xSegCount, s.attributes.index.values[6 * C + 2] = O + 1, s.attributes.index.values[6 * C + 3] = O + 1, s.attributes.index.values[6 * C + 4] = O + 1 + s.xSegCount, s.attributes.index.values[6 * C + 5] = O + 2 + s.xSegCount;
                            }
                        }
                        s.attributes.uv.update(), s.attributes.uvNorm.update(), s.attributes.index.update();
                    }
                    setSize(c = 1, m = 1, s = "xz") {
                        const d = this;
                        d.width = c, d.height = m, d.orientation = s, d.attributes.position.values && d.attributes.position.values.length === 3 * d.vertexCount || (d.attributes.position.values = new Float32Array(3 * d.vertexCount));
                        const v = c / -2, O = m / -2, C = c / d.xSegCount, N = m / d.ySegCount;
                        for(let E = 0; E <= d.ySegCount; E++){
                            const x = O + E * N;
                            for(let A = 0; A <= d.xSegCount; A++){
                                const M = v + A * C, P = E * (d.xSegCount + 1) + A;
                                d.attributes.position.values[3 * P + "xyz".indexOf(s[0])] = M, d.attributes.position.values[3 * P + "xyz".indexOf(s[1])] = -x;
                            }
                        }
                        d.attributes.position.update();
                    }
                }
            },
            Mesh: {
                enumerable: !1,
                value: class {
                    constructor(c, m){
                        const s = this;
                        s.geometry = c, s.material = m, s.attributeInstances = [], Object.entries(s.geometry.attributes).forEach(([d, v])=>{
                            s.attributeInstances.push({
                                attribute: v,
                                location: v.attach(d, s.material.program)
                            });
                        }), o.meshes.push(s);
                    }
                    draw() {
                        r.useProgram(this.material.program), this.material.uniformInstances.forEach(({ uniform: c , location: m  })=>c.update(m)), this.attributeInstances.forEach(({ attribute: c , location: m  })=>c.use(m)), r.drawElements(r.TRIANGLES, this.geometry.attributes.index.values.length, r.UNSIGNED_SHORT, 0);
                    }
                    remove() {
                        o.meshes = o.meshes.filter((c)=>c != this);
                    }
                }
            },
            Attribute: {
                enumerable: !1,
                value: class {
                    constructor(c){
                        this.type = r.FLOAT, this.normalized = !1, this.buffer = r.createBuffer(), Object.assign(this, c), this.update();
                    }
                    update() {
                        this.values !== void 0 && (r.bindBuffer(this.target, this.buffer), r.bufferData(this.target, this.values, r.STATIC_DRAW));
                    }
                    attach(c, m) {
                        const s = r.getAttribLocation(m, c);
                        return this.target === r.ARRAY_BUFFER && (r.enableVertexAttribArray(s), r.vertexAttribPointer(s, this.size, this.type, this.normalized, 0, 0)), s;
                    }
                    use(c) {
                        r.bindBuffer(this.target, this.buffer), this.target === r.ARRAY_BUFFER && (r.enableVertexAttribArray(c), r.vertexAttribPointer(c, this.size, this.type, this.normalized, 0, 0));
                    }
                }
            }
        });
        const i = [
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        ];
        o.commonUniforms = {
            projectionMatrix: new o.Uniform({
                type: "mat4",
                value: i
            }),
            modelViewMatrix: new o.Uniform({
                type: "mat4",
                value: i
            }),
            resolution: new o.Uniform({
                type: "vec2",
                value: [
                    1,
                    1
                ]
            }),
            aspectRatio: new o.Uniform({
                type: "float",
                value: 1
            })
        };
    }
    setSize(t = 640, a = 480) {
        this.width = t, this.height = a, this.canvas.width = t, this.canvas.height = a, this.gl.viewport(0, 0, t, a), this.commonUniforms.resolution.value = [
            t,
            a
        ], this.commonUniforms.aspectRatio.value = t / a;
    }
    setOrthographicCamera(t = 0, a = 0, n = 0, o = -2000, r = 2e3) {
        this.commonUniforms.projectionMatrix.value = [
            2 / this.width,
            0,
            0,
            0,
            0,
            2 / this.height,
            0,
            0,
            0,
            0,
            2 / (o - r),
            0,
            t,
            a,
            n,
            1
        ];
    }
    render() {
        this.gl.clearColor(0, 0, 0, 0), this.gl.clearDepth(1), this.meshes.forEach((t)=>t.draw());
    }
};
const $a00eed0e4f95cd61$var$g = {
    CROSS_ICON: (0, $hZNzg.svg)`<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
    NOISE_TEXTURE: (0, $hZNzg.svg)`<svg id="w3m-transparent-noise"><filter id="w3m-noise"><feTurbulence type="fractalNoise" baseFrequency="0.8"/></filter><rect width="100%" height="100%" filter="url(#w3m-noise)"/></svg>`,
    WALLET_CONNECT_LOGO: (0, $hZNzg.svg)`<svg width="178" height="29" viewBox="0 0 178 29" id="w3m-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
    WALLET_CONNECT_ICON: (0, $hZNzg.svg)`<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
    WALLET_CONNECT_ICON_COLORED: (0, $hZNzg.svg)`<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
    BACK_ICON: (0, $hZNzg.svg)`<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
    COPY_ICON: (0, $hZNzg.svg)`<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
    RETRY_ICON: (0, $hZNzg.svg)`<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
    DESKTOP_ICON: (0, $hZNzg.svg)`<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
    MOBILE_ICON: (0, $hZNzg.svg)`<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
    ARROW_DOWN_ICON: (0, $hZNzg.svg)`<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
    ARROW_UP_RIGHT_ICON: (0, $hZNzg.svg)`<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
    ARROW_RIGHT_ICON: (0, $hZNzg.svg)`<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
    QRCODE_ICON: (0, $hZNzg.svg)`<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
    SCAN_ICON: (0, $hZNzg.svg)`<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
    CHECKMARK_ICON: (0, $hZNzg.svg)`<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
    HELP_ETH_IMG: (0, $hZNzg.svg)`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#j)"><rect width="60" height="60" rx="30" fill="#987DE8"/><path fill-rule="evenodd" clip-rule="evenodd" d="m15.48 28.367 11.966-19.3c1.174-1.892 3.927-1.892 5.1 0l11.97 19.306a6 6 0 0 1 .9 3.142v.028a6 6 0 0 1-1.154 3.56L33.227 50.208c-1.599 2.188-4.864 2.188-6.461 0L15.733 35.095a6 6 0 0 1-1.154-3.538v-.029a6 6 0 0 1 .9-3.161Z" fill="#fff"/><path d="M30.84 10.112a.992.992 0 0 0-.844-.464V24.5l12.598 5.53c.081-.466-.001-.963-.27-1.398L30.84 10.112Z" fill="#643CDD"/><path d="M29.996 9.648a.991.991 0 0 0-.845.465l-11.489 18.53a1.991 1.991 0 0 0-.264 1.387l12.598-5.53V9.648Z" fill="#BDADEB"/><path d="M29.996 50.544a.994.994 0 0 0 .808-.41l11.235-15.38c.307-.434-.193-.988-.658-.72L31.49 39.71a2.998 2.998 0 0 1-1.494.398v10.437Z" fill="#643CDD"/><path d="M17.966 34.762 29.19 50.134c.2.274.503.41.807.41V40.108a2.998 2.998 0 0 1-1.493-.398l-9.884-5.676c-.468-.27-.971.292-.653.728Z" fill="#BDADEB"/><path d="M42.594 30.03 29.996 24.5v13.138a3 3 0 0 0 1.495-.399l10.149-5.83c.525-.31.856-.823.954-1.38Z" fill="#401AB3"/><path d="M29.996 37.638V24.462l-12.598 5.566c.098.564.437 1.083.974 1.392l10.13 5.82c.462.265.978.398 1.494.398Z" fill="#7C5AE2"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="29.5"/><defs><clipPath id="j"><rect width="60" height="60" rx="30" fill="#fff"/></clipPath></defs></svg>`,
    HELP_PAINTING_IMG: (0, $hZNzg.svg)`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#k)"><rect width="60" height="60" rx="3" fill="#C653C6"/><path d="M52.094 47.344c0-4.246-1.436-9.557-5.885-12.4a2.876 2.876 0 0 0-1.615-3.891v-.819a4.037 4.037 0 0 0-1.34-3.007 4.75 4.75 0 0 0-2.41-6.252v-5.506c0-6.248-5.065-11.313-11.313-11.313-6.247 0-11.312 5.065-11.312 11.313v2.152a3.343 3.343 0 0 0-1.18 5.045 4.738 4.738 0 0 0-1.633 3.584 4.73 4.73 0 0 0 .956 2.858 5.218 5.218 0 0 0-2.358 6.815c-3.06 4.129-6.098 8.298-6.098 15.64 0 2.668.364 4.856.731 6.385.184.765.368 1.366.509 1.78a12.721 12.721 0 0 0 .225.611l.015.037.005.011.001.004v.002h.001l.92-.393-.92.394.26.606h38.26l.291-.49-.86-.51.86.51v-.001l.002-.002.002-.005.01-.017.035-.06.127-.225c.108-.195.26-.477.441-.835.363-.714.845-1.732 1.328-2.953.959-2.427 1.945-5.725 1.945-9.068Z" fill="#E87DE8" stroke="#fff" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26.5 29.5c-3-.5-5.5-3-5.503-7l.002-7c0-.466 0-.698.026-.893a3 3 0 0 1 2.582-2.582c.195-.026.428-.026.893-.026 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.398 0 2.097 0 2.648.229a3 3 0 0 1 1.624 1.623c.228.552.228 1.25.228 2.649v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.495 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z" fill="#fff"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="2.5"/><defs><clipPath id="k"><rect width="60" height="60" rx="3" fill="#fff"/></clipPath></defs></svg>`,
    HELP_CHART_IMG: (0, $hZNzg.svg)`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#l)"><path d="M0 25.01C0 15.76 0 11.133 1.97 7.678a15 15 0 0 1 5.598-5.597C11.023.11 15.648.11 24.9.11h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.597C60 11.133 60 15.758 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a15 15 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a14.999 14.999 0 0 1-5.597-5.598C0 49.087 0 44.462 0 35.21v-10.2Z" fill="#1DC956"/><path d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z" stroke="#fff" stroke-opacity=".1"/><path d="M16.109 60c-3.833-.179-6.41-.645-8.541-1.86a15 15 0 0 1-5.598-5.598C.553 50.057.155 46.967.043 41.985l4.146-1.382a4 4 0 0 0 2.48-2.39l4.654-12.409a2 2 0 0 1 2.505-1.195l2.526.842a2 2 0 0 0 2.422-1.003l2.968-5.938c.81-1.62 3.185-1.415 3.705.32l3.774 12.581a2 2 0 0 0 3.025 1.09l3.342-2.228c.27-.18.49-.422.646-.706l5.297-9.712a2 2 0 0 1 1.428-1.016l4.134-.689a2 2 0 0 1 1.61.437l3.892 3.243a2 2 0 0 0 2.694-.122l4.633-4.632C60 19.28 60 21.88 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a14.998 14.998 0 0 1-5.598 5.598c-2.131 1.215-4.708 1.681-8.54 1.86H16.108Z" fill="#2BEE6C"/><path d="M.072 43.03a112.37 112.37 0 0 1-.048-2.093l3.85-1.283a3 3 0 0 0 1.86-1.793l4.653-12.408a3 3 0 0 1 3.758-1.793l2.526.842a1 1 0 0 0 1.21-.501l2.97-5.938c1.214-2.43 4.775-2.123 5.556.48l3.774 12.58a1 1 0 0 0 1.513.545l3.341-2.227a1 1 0 0 0 .323-.353l5.298-9.712a3 3 0 0 1 2.14-1.523l4.135-.69a3 3 0 0 1 2.414.655l3.892 3.244a1 1 0 0 0 1.347-.061l5.28-5.28c.046.845.077 1.752.097 2.732l-3.962 3.962a3 3 0 0 1-4.042.183l-3.893-3.243a1 1 0 0 0-.804-.218l-4.135.689a1 1 0 0 0-.714.507l-5.297 9.712c-.233.427-.565.79-.97 1.06l-3.34 2.228a3 3 0 0 1-4.538-1.635l-3.775-12.58c-.26-.868-1.447-.97-1.852-.16l-2.969 5.937a3 3 0 0 1-3.632 1.505l-2.526-.842a1 1 0 0 0-1.252.597L7.606 38.564a5 5 0 0 1-3.1 2.988L.072 43.029Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z" fill="#2BEE6C"/><path d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" fill="#fff"/><path d="M45 .283v59.654c-.63.042-1.294.074-2 .098V.185c.706.025 1.37.056 2 .098Z" fill="#fff"/><path class="help-img-highlight" d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z"/></g><defs><clipPath id="l"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
    HELP_KEY_IMG: (0, $hZNzg.svg)`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#m)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M39.192 29.192c5.077-5.077 5.077-13.308 0-18.385-5.076-5.077-13.308-5.077-18.384 0-5.077 5.077-5.077 13.308 0 18.385l1.287 1.291c1.137 1.142 1.706 1.712 2.097 2.387.267.462.472.957.608 1.473.2.755.2 1.56.2 3.171V48.75c0 1.077 0 1.615.134 2.119a4 4 0 0 0 .407.984c.262.45.643.831 1.404 1.592l.294.295c.654.654.982.981 1.365 1.086.26.07.533.07.792 0 .383-.105.71-.432 1.365-1.086l3.478-3.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.478-.479c-.655-.654-.982-.981-1.087-1.365a1.5 1.5 0 0 1 0-.791c.105-.384.432-.711 1.087-1.365l.478-.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.492-.493c-.65-.65-.974-.974-1.08-1.355a1.5 1.5 0 0 1-.003-.788c.102-.382.425-.71 1.069-1.364l5.46-5.547Z"/><circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="m"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
    HELP_USER_IMG: (0, $hZNzg.svg)`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#n)"><rect width="60" height="60" fill="#00ACE6" rx="30"/><path fill="#1AC6FF" stroke="#fff" stroke-width="2" d="M59 73c0 16.016-12.984 29-29 29S1 89.016 1 73c0-16.017 11-29 29-29s29 12.983 29 29ZM18.69 19.902a11 11 0 0 1 9.281-8.692 14.842 14.842 0 0 1 4.058 0 11 11 0 0 1 9.28 8.692c.178.866.322 1.75.44 2.625.132.977.132 1.968 0 2.945a39.467 39.467 0 0 1-.44 2.625 11 11 0 0 1-9.28 8.692 14.862 14.862 0 0 1-4.058 0 11 11 0 0 1-9.28-8.692 39.467 39.467 0 0 1-.44-2.625 11.004 11.004 0 0 1 0-2.945c.118-.876.262-1.759.44-2.625Z"/><circle cx="24.5" cy="23.5" r="1.5" fill="#fff"/><circle cx="35.5" cy="23.5" r="1.5" fill="#fff"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m31 20-3 8h4"/></g><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/><defs><clipPath id="n"><rect width="60" height="60" fill="#fff" rx="30"/></clipPath></defs></svg>`,
    HELP_LOCK_IMG: (0, $hZNzg.svg)`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#C653C6" rx="3"/><path fill="#fff" d="M20.034 15.216C20 15.607 20 16.07 20 17v2.808c0 1.13 0 1.696-.2 2.11a1.78 1.78 0 0 1-.584.714c-.366.28-1.051.42-2.423.7a7.076 7.076 0 0 0-1.597.511 9.001 9.001 0 0 0-4.353 4.353C10 30.005 10 32.336 10 37c0 4.663 0 6.995.843 8.804a9.001 9.001 0 0 0 4.353 4.353C17.005 51 19.336 51 24 51h12c4.663 0 6.995 0 8.804-.843a9.001 9.001 0 0 0 4.353-4.353C50 43.995 50 41.664 50 37c0-4.663 0-6.995-.843-8.804a9.001 9.001 0 0 0-4.353-4.353 7.076 7.076 0 0 0-1.597-.511c-1.372-.28-2.057-.42-2.423-.7a1.78 1.78 0 0 1-.583-.715C40 21.505 40 20.94 40 19.809V17c0-.929 0-1.393-.034-1.784a9 9 0 0 0-8.182-8.182C31.393 7 30.93 7 30 7s-1.393 0-1.784.034a9 9 0 0 0-8.182 8.182Z"/><path fill="#E87DE8" d="M22 17c0-.929 0-1.393.044-1.784a7 7 0 0 1 6.172-6.172C28.606 9 29.071 9 30 9s1.393 0 1.784.044a7 7 0 0 1 6.172 6.172c.044.39.044.855.044 1.784v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.394-.077-1.78a4 4 0 0 0-3.143-3.143C31.394 12 30.93 12 30 12s-1.394 0-1.78.077a4 4 0 0 0-3.143 3.143C25 15.606 25 16.07 25 17v4.5a1.5 1.5 0 0 1-3 0V17Z"/><path fill="#E87DE8" fill-rule="evenodd" d="M12 36.62c0-4.317 0-6.476.92-8.088a7 7 0 0 1 2.612-2.612c1.612-.92 3.77-.92 8.088-.92h6.855c.469 0 .703 0 .906.017 2.73.222 4.364 2.438 4.619 4.983.27-2.698 2.111-5 5.015-5A6.985 6.985 0 0 1 48 31.985v5.395c0 4.317 0 6.476-.92 8.088a7 7 0 0 1-2.612 2.612c-1.612.92-3.77.92-8.088.92h-5.855c-.469 0-.703 0-.906-.017-2.73-.222-4.364-2.438-4.619-4.983-.258 2.583-1.943 4.818-4.714 4.99-.155.01-.335.01-.694.01-.55 0-.825 0-1.057-.015a7 7 0 0 1-6.52-6.52C12 42.233 12 41.958 12 41.408V36.62Zm21.24-.273a4 4 0 1 0-6.478 0c.985 1.36 1.479 2.039 1.564 2.229.178.398.176.818.174 1.247V42.5a1.5 1.5 0 0 0 3 0v-2.677c-.002-.429-.004-.85.174-1.247.085-.19.579-.87 1.565-2.229Z" clip-rule="evenodd"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>`,
    HELP_COMPAS_IMG: (0, $hZNzg.svg)`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#1DC956" rx="30"/><circle cx="30" cy="29.999" r="3" fill="#fff"/><path fill="#2BEE6C" stroke="#fff" stroke-width="2" d="m45.316 17.9-.88-.425.88.424a7.9 7.9 0 0 1 .026-.053c.093-.192.21-.432.26-.687l-.819-.162.819.162a2 2 0 0 0-.239-1.405c-.132-.224-.32-.412-.472-.562a8.415 8.415 0 0 1-.042-.042l-.042-.042c-.15-.151-.338-.34-.562-.472l-.508.862.508-.862a2 2 0 0 0-1.405-.239c-.255.05-.495.167-.687.26l-.053.026-15.05 7.246-.108.052c-1.131.545-1.843.887-2.456 1.374a6.994 6.994 0 0 0-1.13 1.13c-.487.613-.83 1.325-1.375 2.457l-.051.108-7.247 15.05-.025.053c-.094.192-.21.431-.26.686a2 2 0 0 0 .239 1.406l.855-.505-.856.505c.133.224.321.411.473.562l.042.042.041.042c.15.151.338.34.563.472a2 2 0 0 0 1.405.239l-.195-.981.195.98c.255-.05.494-.166.686-.26l.054-.025-.419-.87.419.87 15.05-7.247.107-.051c1.132-.545 1.844-.888 2.457-1.374a7.002 7.002 0 0 0 1.13-1.13c.487-.614.83-1.325 1.374-2.457l.052-.108 7.246-15.05Z"/><path fill="#1DC956" d="m33.376 32.723-2.669-3.43-14.85 14.849.206.205a1 1 0 0 0 1.141.194l15.105-7.273a3 3 0 0 0 1.067-4.545Z"/><path fill="#86F999" d="m26.624 27.276 2.669 3.43 14.85-14.849-.206-.205a1 1 0 0 0-1.141-.194L27.69 22.731a3 3 0 0 0-1.067 4.545Z"/><circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/></svg>`,
    HELP_NOUN_IMG: (0, $hZNzg.svg)`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#794CFF" rx="3"/><path fill="#987DE8" stroke="#fff" stroke-width="2" d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"/><path fill="#fff" d="M37.5 25h10v10h-10z"/><path fill="#4019B2" d="M42.5 25h5v10h-5z"/><path fill="#fff" d="M19.5 25h10v10h-10z"/><path fill="#4019B2" d="M24.5 25h5v10h-5z"/><path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>`,
    HELP_DAO_IMG: (0, $hZNzg.svg)`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#o)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M19 52c5.523 0 10-4.477 10-10s-4.477-10-10-10S9 36.477 9 42s4.477 10 10 10Z"/><path fill="#fff" fill-rule="evenodd" d="M42.844 8.326a1 1 0 0 0-1.687 0L28.978 27.463A1 1 0 0 0 29.822 29h24.357a1 1 0 0 0 .843-1.537L42.844 8.326Z" clip-rule="evenodd"/><path fill="#FF974C" fill-rule="evenodd" d="M42.335 11.646c.324.115.571.504 1.066 1.28l7.332 11.523c.562.883.843 1.325.792 1.69a1 1 0 0 1-.342.623c-.28.238-.803.238-1.85.238H34.667c-1.047 0-1.57 0-1.85-.238a1 1 0 0 1-.342-.623c-.051-.365.23-.806.792-1.69l7.332-11.523c.495-.776.742-1.165 1.066-1.28a1 1 0 0 1 .67 0ZM35 27a7 7 0 0 0 7-7 7 7 0 0 0 7 7H35Z" clip-rule="evenodd"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M10.106 9.357c-.109.32-.107.682-.106.975V25.668c-.001.293-.003.654.106.975a2 2 0 0 0 1.251 1.25c.32.11.682.108.975.107H19c5.523 0 10-4.477 10-10S24.523 8 19 8h-6.668c-.293-.001-.654-.003-.975.106a2 2 0 0 0-1.25 1.251Z"/><circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/><circle cx="19" cy="41.999" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="o"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
    SEARCH_ICON: (0, $hZNzg.svg)`<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
    HELP_ICON: (0, $hZNzg.svg)`<svg width="11" height="17" viewBox="0 0 11 17"><path fill="#fff" d="M5.22 2.97c-1.07 0-2.25.843-2.25 2.25a.75.75 0 0 1-1.5 0c0-2.393 2.019-3.75 3.75-3.75 1.73 0 3.75 1.357 3.75 3.75 0 1.64-1.038 2.466-1.785 3.057-.802.635-1.215.984-1.215 1.693a.75.75 0 1 1-1.5 0c0-1.466.985-2.24 1.681-2.788l.103-.081C7.007 6.504 7.47 6.08 7.47 5.22c0-1.407-1.181-2.25-2.25-2.25ZM5.22 14.97a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"/></svg>`,
    WALLET_ICON: (0, $hZNzg.svg)`<svg width="15" height="14" fill="none" viewBox="0 0 15 14"><path fill="#fff" fill-rule="evenodd" d="M.64 9.2v-3h.001c.009-1.857.07-2.886.525-3.682a4 4 0 0 1 1.492-1.493C3.58.5 4.813.5 7.28.5h3.735c.58 0 .871 0 1.114.04A3 3 0 0 1 14.6 3.011c.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041h-.777c.178.307.302.648.362 1.011.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041H4.507A3.867 3.867 0 0 1 .64 9.633V9.2ZM7.28 2h3.735c.64 0 .779.005.87.02a1.5 1.5 0 0 1 1.235 1.236c.015.09.02.229.02.869s-.005.779-.02.87a1.5 1.5 0 0 1-1.236 1.235c-.09.015-.229.02-.869.02H4.023c-.697 0-1.345.21-1.883.572V6.25h.001c.004-.791.015-1.383.059-1.867.056-.629.157-.926.269-1.122a2.5 2.5 0 0 1 .932-.933c.197-.111.494-.212 1.123-.268C5.173 2 6.019 2 7.28 2Zm-.265 5.75H4.023c-1.04 0-1.883.843-1.883 1.883A2.367 2.367 0 0 0 4.507 12h2.508c.64 0 .779-.005.87-.02a1.5 1.5 0 0 0 1.235-1.236c.015-.09.02-.229.02-.869s-.005-.779-.02-.87A1.5 1.5 0 0 0 7.884 7.77c-.09-.015-.228-.02-.869-.02Z" clip-rule="evenodd"/></svg>`,
    NETWORK_PLACEHOLDER: (0, $hZNzg.svg)`<svg width="28" height="28" fill="none" viewBox="0 0 28 28"><mask id="p" width="26" height="28" x="1" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#D9D9D9" d="M12 1.172a4 4 0 0 1 4 0l8.124 4.69a4 4 0 0 1 2 3.465v9.381a4 4 0 0 1-2 3.464L16 26.862a4 4 0 0 1-4 0l-8.124-4.69a4 4 0 0 1-2-3.464V9.327a4 4 0 0 1 2-3.464L12 1.173Z"/></mask><g mask="url(#p)"><path id="network-placeholder-fill" fill="#fff" d="M0 0h28v28H0z"/><path id="network-placeholder-dash" stroke="#000" stroke-dasharray="2 2" d="m8.953 2.931 2.032-1.173.25.433 1.015-.586c.269-.155.553-.271.844-.35l-.13-.483a4.003 4.003 0 0 1 2.071 0l-.13.483c.293.079.576.195.845.35l1.016.586.25-.433 2.03 1.173-.25.433 2.032 1.173.25-.433 2.03 1.172-.25.433 1.016.587c.269.155.512.342.725.556l.354-.354a4.003 4.003 0 0 1 1.035 1.794l-.483.129c.078.292.12.596.12.906v1.172h.5v2.346h-.5v2.345h.5v2.345h-.5v1.173c0 .31-.042.614-.12.906l.483.13a4.003 4.003 0 0 1-1.035 1.793l-.354-.354a3.498 3.498 0 0 1-.725.556l-1.015.586.25.434-2.031 1.172-.25-.433-2.031 1.173.25.433-2.031 1.172-.25-.433-1.016.587a3.494 3.494 0 0 1-.844.35l.13.482a4.003 4.003 0 0 1-2.071 0l.13-.483a3.496 3.496 0 0 1-.845-.35l-1.015-.586-.25.433-2.032-1.172.25-.433-2.03-1.173-.25.433L4.89 22.76l.25-.434-1.015-.586a3.498 3.498 0 0 1-.725-.556l-.354.354a4.003 4.003 0 0 1-1.035-1.794l.483-.13a3.497 3.497 0 0 1-.12-.905v-1.173h-.5V15.19h.5v-2.345h-.5v-2.346h.5V9.327c0-.31.042-.614.12-.906l-.483-.13a4.003 4.003 0 0 1 1.035-1.793l.354.354c.213-.214.456-.401.725-.556l1.015-.587-.25-.433 2.031-1.172.25.433 2.031-1.173-.25-.433Z"/><path fill="#798686" stroke="#fff" d="M14.243 13.563 14 13.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.538.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.538-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#9EA9A9" stroke="#fff" d="M14.243 8.563 14 8.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.316.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.316-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#C9CFCF" stroke="#fff" d="m22.344 9.53-.468-.176.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-3.163-1.758-.09-.05c-1.163-.645-1.856-1.03-2.606-1.161a4.5 4.5 0 0 0-1.544 0c-.75.13-1.443.516-2.607 1.162l-.088.05-3.164 1.757-.024.013c-.432.24-.79.44-1.053.622-.266.185-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722Z"/></g></svg>`,
    WALLET_PLACEHOLDER: (0, $hZNzg.svg)`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
    TOKEN_PLACEHOLDER: (0, $hZNzg.svg)`<svg width="60" height="60" viewBox="0 0 60 60" fill="none"><rect id="token-placeholder-fill" width="58" height="58" x="1" y="1" fill="#fff" rx="29"/><path fill="#3B4040" stroke="#fff" stroke-width="2" d="M32 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5.566c0 .357.192.685.495.875a16.001 16.001 0 0 1 4.256 3.894c.667.88.33 2.113-.627 2.665l-2.494 1.44c-.956.552-2.166.204-2.913-.609a9.12 9.12 0 1 0 .064 12.267c.739-.82 1.945-1.181 2.907-.64l2.509 1.415c.962.542 1.312 1.77.654 2.658a16 16 0 0 1-4.356 4.028c-.303.19-.495.518-.495.875V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.992c0-.602-.528-1.065-1.13-1.032-.579.032-1.16.032-1.74 0-.602-.032-1.13.43-1.13 1.032V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5.566c0-.357-.192-.685-.495-.875a16 16 0 0 1 0-27.118c.303-.19.495-.517.495-.875V10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2.992c0 .601.528 1.064 1.13 1.032.58-.032 1.161-.032 1.74 0 .602.033 1.13-.43 1.13-1.032V10Z"/><rect id="token-placeholder-dash" width="58" height="58" x="1" y="1" stroke="#000" stroke-dasharray="6 6" stroke-width="2" rx="29"/></svg>`,
    ACCOUNT_COPY: (0, $hZNzg.svg)`<svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path fill="#fff" fill-rule="evenodd" d="M4.003 4.005c.012-1.225.074-1.936.391-2.491a3 3 0 0 1 1.12-1.12C6.204 0 7.136 0 9 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C14 2.204 14 3.136 14 5s0 2.795-.394 3.486a3 3 0 0 1-1.12 1.12c-.555.317-1.266.379-2.491.391l.002.003c-.012 1.222-.075 1.932-.391 2.486a3 3 0 0 1-1.12 1.12C7.796 14 6.864 14 5 14s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C0 11.796 0 10.864 0 9s0-2.795.394-3.486a3 3 0 0 1 1.12-1.12c.554-.316 1.264-.379 2.486-.391l.003.002ZM9 8.5c-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.045-.08-.113-.243-.154-.693C5.501 6.58 5.5 5.959 5.5 5c0-.959.001-1.58.043-2.05.04-.45.109-.613.154-.693a1.5 1.5 0 0 1 .56-.56c.08-.045.243-.113.693-.154C7.42 1.501 8.041 1.5 9 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.045.08.113.243.154.693.042.47.043 1.091.043 2.05 0 .959-.001 1.58-.043 2.05-.04.45-.109.613-.154.693a1.5 1.5 0 0 1-.56.56c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043ZM4 5.503a13.77 13.77 0 0 0-1.05.04c-.45.04-.613.109-.693.154a1.5 1.5 0 0 0-.56.56c-.045.08-.113.243-.154.693C1.501 7.42 1.5 8.041 1.5 9c0 .959.001 1.58.043 2.05.04.45.109.613.154.693a1.5 1.5 0 0 0 .56.56c.08.045.243.113.693.154.47.042 1.091.043 2.05.043.959 0 1.58-.001 2.05-.043.45-.04.613-.109.693-.154a1.5 1.5 0 0 0 .56-.56c.045-.08.113-.242.154-.693.025-.283.035-.619.04-1.05-1.534-.003-2.358-.037-2.983-.394a3 3 0 0 1-1.12-1.12c-.357-.625-.39-1.449-.394-2.983Z" clip-rule="evenodd"/></svg>`,
    ACCOUNT_DISCONNECT: (0, $hZNzg.svg)`<svg width="16" height="14" fill="none" viewBox="0 0 16 14"><path fill="#fff" d="M9.677 1.5h-2.61c-1.261 0-2.107.001-2.757.06-.629.056-.926.157-1.122.268a2.5 2.5 0 0 0-.933.933c-.112.196-.212.493-.269 1.122-.058.65-.06 1.496-.06 2.757v.72c0 1.26.002 2.107.06 2.756.057.63.157.927.27 1.123a2.5 2.5 0 0 0 .932.933c.196.111.493.212 1.122.268.65.059 1.496.06 2.757.06h2.61a.75.75 0 1 1 0 1.5h-2.61c-2.467 0-3.7 0-4.622-.525a4 4 0 0 1-1.493-1.493C.427 11.06.427 9.827.427 7.36v-.72c0-2.467 0-3.7.525-4.622A4 4 0 0 1 2.445.525C3.366 0 4.6 0 7.067 0h2.61a.75.75 0 1 1 0 1.5Z"/><path fill="#fff" d="M10.896 11.03a.75.75 0 0 1 0-1.06l1.793-1.793a.25.25 0 0 0-.176-.427H8.177a.75.75 0 0 1 0-1.5h4.336a.25.25 0 0 0 .176-.427L10.896 4.03a.75.75 0 0 1 1.061-1.06l3.323 3.323a1 1 0 0 1 0 1.414l-3.323 3.323a.75.75 0 0 1-1.06 0Z"/></svg>`
}, $a00eed0e4f95cd61$var$Zt = {
    1: "692ed6ba-e569-459a-556a-776476829e00",
    42161: "600a9a04-c1b9-42ca-6785-9b4b6ff85200",
    43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
    56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
    250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
    10: "ab9c186a-c52f-464b-2906-ca59d760a400",
    137: "41d04d42-da3b-4453-8506-668cc0727900",
    100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
    9001: "f926ff41-260d-4028-635e-91913fc28e00",
    324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
    314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
    4689: "34e68754-e536-40da-c153-6ef2e7188a00",
    1088: "3897a66d-40b9-4833-162f-a2c90531c900",
    1284: "161038da-44ae-4ec7-1208-0ea569454b00",
    1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00"
};
var $a00eed0e4f95cd61$var$Z = ((e)=>(e.metaMask = "metaMask", e.trust = "trust", e.phantom = "phantom", e.brave = "brave", e.spotEthWallet = "spotEthWallet", e.exodus = "exodus", e.tokenPocket = "tokenPocket", e.frame = "frame", e.tally = "tally", e.coinbaseWallet = "coinbaseWallet", e.core = "core", e.bitkeep = "bitkeep", e.mathWallet = "mathWallet", e.opera = "opera", e.tokenary = "tokenary", e["1inch"] = "1inch", e.kuCoinWallet = "kuCoinWallet", e.ledger = "ledger", e))($a00eed0e4f95cd61$var$Z || {});
const $a00eed0e4f95cd61$var$J = {
    injectedPreset: {
        metaMask: {
            name: "MetaMask",
            icon: "619537c0-2ff3-4c78-9ed8-a05e7567f300",
            url: "https://metamask.io",
            isMobile: !0,
            isInjected: !0
        },
        trust: {
            name: "Trust",
            icon: "0528ee7e-16d1-4089-21e3-bbfb41933100",
            url: "https://trustwallet.com",
            isMobile: !0,
            isInjected: !0
        },
        spotEthWallet: {
            name: "Spot",
            icon: "1bf33a89-b049-4a1c-d1f6-4dd7419ee400",
            url: "https://www.spot-wallet.com",
            isMobile: !0,
            isInjected: !0
        },
        phantom: {
            name: "Phantom",
            icon: "62471a22-33cb-4e65-5b54-c3d9ea24b900",
            url: "https://phantom.app",
            isInjected: !0
        },
        core: {
            name: "Core",
            icon: "35f9c46e-cc57-4aa7-315d-e6ccb2a1d600",
            url: "https://core.app",
            isMobile: !0,
            isInjected: !0
        },
        bitkeep: {
            name: "BitKeep",
            icon: "3f7075d0-4ab7-4db5-404d-3e4c05e6fe00",
            url: "https://bitkeep.com",
            isMobile: !0,
            isInjected: !0
        },
        tokenPocket: {
            name: "TokenPocket",
            icon: "f3119826-4ef5-4d31-4789-d4ae5c18e400",
            url: "https://www.tokenpocket.pro",
            isMobile: !0,
            isInjected: !0
        },
        mathWallet: {
            name: "MathWallet",
            icon: "26a8f588-3231-4411-60ce-5bb6b805a700",
            url: "https://mathwallet.org",
            isMobile: !0,
            isInjected: !0
        },
        exodus: {
            name: "Exodus",
            icon: "4c16cad4-cac9-4643-6726-c696efaf5200",
            url: "https://www.exodus.com",
            isMobile: !0,
            isDesktop: !0,
            isInjected: !0
        },
        kuCoinWallet: {
            name: "KuCoin Wallet",
            icon: "1e47340b-8fd7-4ad6-17e7-b2bd651fae00",
            url: "https://kuwallet.com",
            isMobile: !0,
            isInjected: !0
        },
        ledger: {
            name: "Ledger",
            icon: "a7f416de-aa03-4c5e-3280-ab49269aef00",
            url: "https://www.ledger.com",
            isDesktop: !0
        },
        brave: {
            name: "Brave",
            icon: "125e828e-9936-4451-a8f2-949c119b7400",
            url: "https://brave.com/wallet",
            isInjected: !0
        },
        frame: {
            name: "Frame",
            icon: "cd492418-ea85-4ef1-aeed-1c9e20b58900",
            url: "https://frame.sh",
            isInjected: !0
        },
        tally: {
            name: "Tally",
            icon: "98d2620c-9fc8-4a1c-31bc-78d59d00a300",
            url: "https://tallyho.org",
            isInjected: !0
        },
        coinbaseWallet: {
            name: "Coinbase",
            icon: "f8068a7f-83d7-4190-1f94-78154a12c600",
            url: "https://www.coinbase.com/wallet",
            isInjected: !0
        },
        opera: {
            name: "Opera",
            icon: "877fa1a4-304d-4d45-ca8e-f76d1a556f00",
            url: "https://www.opera.com/crypto",
            isInjected: !0
        },
        tokenary: {
            name: "Tokenary",
            icon: "5e481041-dc3c-4a81-373a-76bbde91b800",
            url: "https://tokenary.io",
            isDesktop: !0,
            isInjected: !0
        },
        ["1inch"]: {
            name: "1inch Wallet",
            icon: "dce1ee99-403f-44a9-9f94-20de30616500",
            url: "https://1inch.io/wallet",
            isMobile: !0
        }
    },
    getInjectedId (e) {
        if (e.toUpperCase() !== "INJECTED" && e.length) return e;
        const { ethereum: t , spotEthWallet: a , coinbaseWalletExtension: n  } = window;
        return t ? t.isTrust || t.isTrustWallet ? "trust" : t.isPhantom ? "phantom" : t.isBraveWallet ? "brave" : a ? "spotEthWallet" : t.isExodus ? "exodus" : t.isTokenPocket ? "tokenPocket" : t.isFrame ? "frame" : t.isTally ? "tally" : n ? "coinbaseWallet" : t.isAvalanche ? "core" : t.isBitKeep ? "bitkeep" : t.isMathWallet ? "mathWallet" : t.isOpera ? "opera" : t.isTokenary ? "tokenary" : t.isOneInchIOSWallet || t.isOneInchAndroidWallet ? "1inch" : t.isKuCoinWallet ? "kuCoinWallet" : t.isMetaMask ? "metaMask" : "injected" : "metaMask";
    },
    getInjectedName (e) {
        var t, a;
        if (e.length && e.toUpperCase() !== "INJECTED") return e;
        const n = $a00eed0e4f95cd61$var$J.getInjectedId("");
        return (a = (t = $a00eed0e4f95cd61$var$J.injectedPreset[n]) == null ? void 0 : t.name) != null ? a : "Injected";
    }
}, $a00eed0e4f95cd61$var$Ft = {
    ETH: {
        icon: "692ed6ba-e569-459a-556a-776476829e00"
    },
    WETH: {
        icon: "692ed6ba-e569-459a-556a-776476829e00"
    },
    AVAX: {
        icon: "30c46e53-e989-45fb-4549-be3bd4eb3b00"
    },
    FTM: {
        icon: "06b26297-fe0c-4733-5d6b-ffa5498aac00"
    },
    BNB: {
        icon: "93564157-2e8e-4ce7-81df-b264dbee9b00"
    },
    MATIC: {
        icon: "41d04d42-da3b-4453-8506-668cc0727900"
    },
    OP: {
        icon: "ab9c186a-c52f-464b-2906-ca59d760a400"
    },
    xDAI: {
        icon: "02b53f6a-e3d4-479e-1cb4-21178987d100"
    },
    EVMOS: {
        icon: "f926ff41-260d-4028-635e-91913fc28e00"
    },
    METIS: {
        icon: "3897a66d-40b9-4833-162f-a2c90531c900"
    },
    IOTX: {
        icon: "34e68754-e536-40da-c153-6ef2e7188a00"
    }
};
var $a00eed0e4f95cd61$var$zt = Object.defineProperty, $a00eed0e4f95cd61$var$pt = Object.getOwnPropertySymbols, $a00eed0e4f95cd61$var$Vt = Object.prototype.hasOwnProperty, $a00eed0e4f95cd61$var$Gt = Object.prototype.propertyIsEnumerable, $a00eed0e4f95cd61$var$ut = (e, t, a)=>t in e ? $a00eed0e4f95cd61$var$zt(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : e[t] = a, $a00eed0e4f95cd61$var$qt = (e, t)=>{
    for(var a in t || (t = {}))$a00eed0e4f95cd61$var$Vt.call(t, a) && $a00eed0e4f95cd61$var$ut(e, a, t[a]);
    if ($a00eed0e4f95cd61$var$pt) for (var a of $a00eed0e4f95cd61$var$pt(t))$a00eed0e4f95cd61$var$Gt.call(t, a) && $a00eed0e4f95cd61$var$ut(e, a, t[a]);
    return e;
};
const $a00eed0e4f95cd61$var$h = {
    MOBILE_BREAKPOINT: 600,
    W3M_RECENT_WALLET: "W3M_RECENT_WALLET",
    rejectStandaloneButtonComponent () {
        const { isStandalone: e  } = (0, $6sRZo.OptionsCtrl).state;
        if (e) throw new Error("Web3Modal button components are not available in standalone mode.");
    },
    getShadowRootElement (e, t) {
        const a = e.renderRoot.querySelector(t);
        if (!a) throw new Error(`${t} not found`);
        return a;
    },
    getWalletId (e) {
        return $a00eed0e4f95cd61$var$J.getInjectedId(e);
    },
    getWalletIcon (e) {
        var t, a;
        const n = (t = $a00eed0e4f95cd61$var$J.injectedPreset[e]) == null ? void 0 : t.icon, { projectId: o , walletImages: r  } = (0, $6sRZo.ConfigCtrl).state;
        return (a = r?.[e]) != null ? a : o && n ? (0, $6sRZo.ExplorerCtrl).getImageUrl(n) : "";
    },
    getWalletName (e, t = !1) {
        const a = $a00eed0e4f95cd61$var$J.getInjectedName(e);
        return t ? a.split(" ")[0] : a;
    },
    getChainIcon (e) {
        var t;
        const a = $a00eed0e4f95cd61$var$Zt[e], { projectId: n , chainImages: o  } = (0, $6sRZo.ConfigCtrl).state;
        return (t = o?.[e]) != null ? t : n && a ? (0, $6sRZo.ExplorerCtrl).getImageUrl(a) : "";
    },
    getTokenIcon (e) {
        var t, a;
        const n = (t = $a00eed0e4f95cd61$var$Ft[e]) == null ? void 0 : t.icon, { projectId: o , tokenImages: r  } = (0, $6sRZo.ConfigCtrl).state;
        return (a = r?.[e]) != null ? a : o && n ? (0, $6sRZo.ExplorerCtrl).getImageUrl(n) : "";
    },
    isMobileAnimation () {
        return window.innerWidth <= $a00eed0e4f95cd61$var$h.MOBILE_BREAKPOINT;
    },
    async preloadImage (e) {
        return new Promise((t, a)=>{
            const n = new Image;
            n.onload = t, n.onerror = a, n.src = e;
        });
    },
    getErrorMessage (e) {
        return e instanceof Error ? e.message : "Unknown Error";
    },
    debounce (e, t = 500) {
        let a;
        return (...n)=>{
            function o() {
                e(...n);
            }
            a && clearTimeout(a), a = setTimeout(o, t);
        };
    },
    async handleMobileLinking (e) {
        const { standaloneUri: t , selectedChain: a  } = (0, $6sRZo.OptionsCtrl).state, { links: n , name: o  } = e;
        function r(i) {
            let c = "";
            n != null && n.universal ? c = (0, $6sRZo.CoreUtil).formatUniversalUrl(n.universal, i, o) : n != null && n.native && (c = (0, $6sRZo.CoreUtil).formatNativeUrl(n.native, i, o)), (0, $6sRZo.CoreUtil).openHref(c);
        }
        t ? ($a00eed0e4f95cd61$var$h.setRecentWallet(e), r(t)) : (await (0, $6sRZo.ClientCtrl).client().connectWalletConnect((i)=>{
            r(i);
        }, a?.id), $a00eed0e4f95cd61$var$h.setRecentWallet(e), (0, $6sRZo.ModalCtrl).close());
    },
    async handleAndroidLinking () {
        const { standaloneUri: e , selectedChain: t  } = (0, $6sRZo.OptionsCtrl).state;
        e ? (0, $6sRZo.CoreUtil).openHref(e) : (await (0, $6sRZo.ClientCtrl).client().connectWalletConnect((a)=>{
            (0, $6sRZo.CoreUtil).setWalletConnectAndroidDeepLink(a), (0, $6sRZo.CoreUtil).openHref(a);
        }, t?.id), (0, $6sRZo.ModalCtrl).close());
    },
    async handleUriCopy () {
        const { standaloneUri: e  } = (0, $6sRZo.OptionsCtrl).state;
        if (e) await navigator.clipboard.writeText(e);
        else {
            const t = (0, $6sRZo.ClientCtrl).client().walletConnectUri;
            await navigator.clipboard.writeText(t);
        }
        (0, $6sRZo.ToastCtrl).openToast("Link copied", "success");
    },
    async handleConnectorConnection (e, t) {
        try {
            const { selectedChain: a  } = (0, $6sRZo.OptionsCtrl).state;
            await (0, $6sRZo.ClientCtrl).client().connectConnector(e, a?.id), (0, $6sRZo.ModalCtrl).close();
        } catch (a) {
            console.error(a), t ? t() : (0, $6sRZo.ToastCtrl).openToast($a00eed0e4f95cd61$var$h.getErrorMessage(a), "error");
        }
    },
    getCustomWallets () {
        var e;
        const { desktopWallets: t , mobileWallets: a  } = (0, $6sRZo.ConfigCtrl).state;
        return (e = (0, $6sRZo.CoreUtil).isMobile() ? a : t) != null ? e : [];
    },
    getCustomImageUrls () {
        const { chainImages: e , walletImages: t  } = (0, $6sRZo.ConfigCtrl).state, a = Object.values(e ?? {}), n = Object.values(t ?? {});
        return Object.values([
            ...a,
            ...n
        ]);
    },
    getConnectorImageUrls () {
        return (0, $6sRZo.ClientCtrl).client().getConnectors().map(({ id: e  })=>$a00eed0e4f95cd61$var$J.getInjectedId(e)).map((e)=>$a00eed0e4f95cd61$var$h.getWalletIcon(e));
    },
    truncate (e, t = 8) {
        return e.length <= t ? e : `${e.substring(0, 4)}...${e.substring(e.length - 4)}`;
    },
    generateAvatarColors (e) {
        var t;
        const a = (t = e.match(/.{1,7}/g)) == null ? void 0 : t.splice(0, 5), n = [];
        a?.forEach((r)=>{
            let i = 0;
            for(let m = 0; m < r.length; m += 1)i = r.charCodeAt(m) + ((i << 5) - i), i = i & i;
            const c = [
                0,
                0,
                0
            ];
            for(let m = 0; m < 3; m += 1){
                const s = i >> m * 8 & 255;
                c[m] = s;
            }
            n.push(`rgb(${c[0]}, ${c[1]}, ${c[2]})`);
        });
        const o = document.querySelector(":root");
        if (o) {
            const r = {
                "--w3m-color-av-1": n[0],
                "--w3m-color-av-2": n[1],
                "--w3m-color-av-3": n[2],
                "--w3m-color-av-4": n[3],
                "--w3m-color-av-5": n[4]
            };
            Object.entries(r).forEach(([i, c])=>o.style.setProperty(i, c));
        }
    },
    setRecentWallet (e) {
        const { walletConnectVersion: t  } = (0, $6sRZo.OptionsCtrl).state;
        localStorage.setItem($a00eed0e4f95cd61$var$h.W3M_RECENT_WALLET, JSON.stringify({
            [t]: e
        }));
    },
    getRecentWallet () {
        const e = localStorage.getItem($a00eed0e4f95cd61$var$h.W3M_RECENT_WALLET);
        if (e) {
            const { walletConnectVersion: t  } = (0, $6sRZo.OptionsCtrl).state, a = JSON.parse(e);
            if (a[t]) return a[t];
        }
    },
    getExtensionWallets () {
        const e = [];
        for (const [t, a] of Object.entries($a00eed0e4f95cd61$var$J.injectedPreset))t !== $a00eed0e4f95cd61$var$Z.coinbaseWallet && a && a.isInjected && !a.isDesktop && e.push($a00eed0e4f95cd61$var$qt({
            id: t
        }, a));
        return e;
    },
    caseSafeIncludes (e, t) {
        return e.toUpperCase().includes(t.toUpperCase());
    }
}, $a00eed0e4f95cd61$var$Kt = (0, $5Oejw.css)`#w3m-transparent-noise,.w3m-canvas,.w3m-color-placeholder,.w3m-gradient-placeholder,.w3m-highlight{inset:0;position:absolute;display:block;pointer-events:none;width:100%;height:100px;border-radius:8px 8px 0 0;transform:translateY(-5px)}.w3m-gradient-placeholder{background:linear-gradient(var(--w3m-gradient-1),var(--w3m-gradient-2),var(--w3m-gradient-3),var(--w3m-gradient-4))}.w3m-color-placeholder{background-color:var(--w3m-color-fg-accent)}.w3m-highlight{border:1px solid var(--w3m-color-overlay)}.w3m-canvas{opacity:0;transition:opacity 2s ease;box-shadow:0 8px 28px -6px rgba(10,16,31,.12),0 18px 88px -4px rgba(10,16,31,.14)}.w3m-canvas-visible{opacity:1}#w3m-transparent-noise{mix-blend-mode:multiply;opacity:.35}.w3m-toolbar{height:28px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.w3m-toolbar img,.w3m-toolbar svg{height:28px;object-position:left center;object-fit:contain}#w3m-wc-logo path{fill:var(--w3m-color-fg-inverse)}.w3m-action-btn{width:28px;height:28px;border-radius:50%;border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;transition:background-color,.2s ease;background-color:var(--w3m-color-bg-1);box-shadow:0 0 0 1px var(--w3m-color-overlay),0 2px 4px -2px rgba(0,0,0,.12),0 4px 4px -2px rgba(0,0,0,.08)}.w3m-action-btn:hover{background-color:var(--w3m-color-bg-2)}.w3m-action-btn svg{display:block;object-position:center}.w3m-action-btn path{fill:var(--w3m-color-fg-1)}.w3m-actions{display:flex}.w3m-actions button:first-child{margin-right:16px}.w3m-help-active button:first-child{background-color:var(--w3m-color-fg-1)}.w3m-help-active button:first-child path{fill:var(--w3m-color-bg-1)}`;
var $a00eed0e4f95cd61$var$Yt = Object.defineProperty, $a00eed0e4f95cd61$var$Xt = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$Ne = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$Xt(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$Yt(t, a, o), o;
};
const $a00eed0e4f95cd61$var$vt = new $a00eed0e4f95cd61$var$Bt;
let $a00eed0e4f95cd61$var$ce = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(), this.open = !1, this.isHelp = !1, this.unsubscribeRouter = void 0, this.playTimeout = void 0, this.unsubscribeRouter = (0, $6sRZo.RouterCtrl).subscribe((e)=>{
            this.isHelp = e.view === "Help";
        });
    }
    firstUpdated() {
        const { themeBackground: e  } = (0, $6sRZo.ConfigCtrl).state;
        e === "gradient" && (this.playTimeout = setTimeout(()=>{
            $a00eed0e4f95cd61$var$vt.play(this.canvasEl), this.open = !0;
        }, 800));
    }
    disconnectedCallback() {
        var e;
        (e = this.unsubscribeRouter) == null || e.call(this), clearTimeout(this.playTimeout), $a00eed0e4f95cd61$var$vt.stop();
    }
    get canvasEl() {
        return $a00eed0e4f95cd61$var$h.getShadowRootElement(this, ".w3m-canvas");
    }
    onHelp() {
        (0, $6sRZo.RouterCtrl).push("Help");
    }
    render() {
        const { themeBackground: e  } = (0, $6sRZo.ConfigCtrl).state, t = {
            "w3m-canvas": !0,
            "w3m-canvas-visible": this.open
        }, a = {
            "w3m-actions": !0,
            "w3m-help-active": this.isHelp
        };
        return (0, $hZNzg.html)`${e === "themeColor" ? (0, $hZNzg.html)`<div class="w3m-color-placeholder"></div>` : null} ${e === "gradient" ? (0, $hZNzg.html)`<div class="w3m-gradient-placeholder"></div><canvas class="${(0, $lpVpn.classMap)(t)}"></canvas>${$a00eed0e4f95cd61$var$g.NOISE_TEXTURE}` : null}<div class="w3m-highlight"></div><div class="w3m-toolbar">${$a00eed0e4f95cd61$var$g.WALLET_CONNECT_LOGO}<div class="${(0, $lpVpn.classMap)(a)}"><button class="w3m-action-btn" @click="${this.onHelp}">${$a00eed0e4f95cd61$var$g.HELP_ICON}</button> <button class="w3m-action-btn" @click="${(0, $6sRZo.ModalCtrl).close}">${$a00eed0e4f95cd61$var$g.CROSS_ICON}</button></div></div>`;
    }
};
$a00eed0e4f95cd61$var$ce.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$Kt
], $a00eed0e4f95cd61$var$Ne([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$var$ce.prototype, "open", 2), $a00eed0e4f95cd61$var$Ne([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$var$ce.prototype, "isHelp", 2), $a00eed0e4f95cd61$var$ce = $a00eed0e4f95cd61$var$Ne([
    (0, $fWcHw.customElement)("w3m-modal-backcard")
], $a00eed0e4f95cd61$var$ce);
const $a00eed0e4f95cd61$var$Qt = (0, $5Oejw.css)`main{padding:20px;padding-top:0;width:100%}`;
var $a00eed0e4f95cd61$var$Jt = Object.defineProperty, $a00eed0e4f95cd61$var$eo = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$to = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$eo(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$Jt(t, a, o), o;
};
let $a00eed0e4f95cd61$var$Re = class extends (0, $e9IBe.LitElement) {
    render() {
        return (0, $hZNzg.html)`<main><slot></slot></main>`;
    }
};
$a00eed0e4f95cd61$var$Re.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$Qt
], $a00eed0e4f95cd61$var$Re = $a00eed0e4f95cd61$var$to([
    (0, $fWcHw.customElement)("w3m-modal-content")
], $a00eed0e4f95cd61$var$Re);
const $a00eed0e4f95cd61$var$oo = (0, $5Oejw.css)`footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--w3m-color-bg-2)}`;
var $a00eed0e4f95cd61$var$ao = Object.defineProperty, $a00eed0e4f95cd61$var$no = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$ro = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$no(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$ao(t, a, o), o;
};
let $a00eed0e4f95cd61$var$Be = class extends (0, $e9IBe.LitElement) {
    render() {
        return (0, $hZNzg.html)`<footer><slot></slot></footer>`;
    }
};
$a00eed0e4f95cd61$var$Be.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$oo
], $a00eed0e4f95cd61$var$Be = $a00eed0e4f95cd61$var$ro([
    (0, $fWcHw.customElement)("w3m-modal-footer")
], $a00eed0e4f95cd61$var$Be);
const $a00eed0e4f95cd61$var$io = (0, $5Oejw.css)`header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.w3m-border{border-bottom:1px solid var(--w3m-color-bg-2);margin-bottom:20px}header button{padding:15px 20px;transition:opacity .2s ease}@media(hover:hover){header button:hover{opacity:.5}}.w3m-back-btn{position:absolute;left:0}.w3m-action-btn{position:absolute;right:0}path{fill:var(--w3m-color-fg-accent)}`;
var $a00eed0e4f95cd61$var$lo = Object.defineProperty, $a00eed0e4f95cd61$var$so = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$de = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$so(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$lo(t, a, o), o;
};
let $a00eed0e4f95cd61$var$q = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(...arguments), this.title = "", this.onAction = void 0, this.actionIcon = void 0, this.border = !1;
    }
    backBtnTemplate() {
        return (0, $hZNzg.html)`<button class="w3m-back-btn" @click="${(0, $6sRZo.RouterCtrl).goBack}">${$a00eed0e4f95cd61$var$g.BACK_ICON}</button>`;
    }
    actionBtnTemplate() {
        return (0, $hZNzg.html)`<button class="w3m-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`;
    }
    render() {
        const e = {
            "w3m-border": this.border
        }, t = (0, $6sRZo.RouterCtrl).state.history.length > 1, a = this.title ? (0, $hZNzg.html)`<w3m-text variant="large-bold">${this.title}</w3m-text>` : (0, $hZNzg.html)`<slot></slot>`;
        return (0, $hZNzg.html)`<header class="${(0, $lpVpn.classMap)(e)}">${t ? this.backBtnTemplate() : null} ${a} ${this.onAction ? this.actionBtnTemplate() : null}</header>`;
    }
};
$a00eed0e4f95cd61$var$q.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$io
], $a00eed0e4f95cd61$var$de([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$q.prototype, "title", 2), $a00eed0e4f95cd61$var$de([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$q.prototype, "onAction", 2), $a00eed0e4f95cd61$var$de([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$q.prototype, "actionIcon", 2), $a00eed0e4f95cd61$var$de([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$q.prototype, "border", 2), $a00eed0e4f95cd61$var$q = $a00eed0e4f95cd61$var$de([
    (0, $fWcHw.customElement)("w3m-modal-header")
], $a00eed0e4f95cd61$var$q);
const $a00eed0e4f95cd61$var$co = (0, $5Oejw.css)`.w3m-router{overflow:hidden;will-change:transform}.w3m-content{display:flex;flex-direction:column}`;
var $a00eed0e4f95cd61$var$ho = Object.defineProperty, $a00eed0e4f95cd61$var$mo = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$Ue = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$mo(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$ho(t, a, o), o;
};
let $a00eed0e4f95cd61$var$he = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(), this.view = (0, $6sRZo.RouterCtrl).state.view, this.prevView = (0, $6sRZo.RouterCtrl).state.view, this.unsubscribe = void 0, this.oldHeight = "0px", this.resizeObserver = void 0, this.unsubscribe = (0, $6sRZo.RouterCtrl).subscribe((e)=>{
            this.view !== e.view && this.onChangeRoute();
        });
    }
    firstUpdated() {
        this.resizeObserver = new ResizeObserver(([e])=>{
            const t = `${e.contentRect.height}px`;
            this.oldHeight !== "0px" && ((0, $kT2uv.animate)(this.routerEl, {
                height: [
                    this.oldHeight,
                    t
                ]
            }, {
                duration: .2
            }), (0, $kT2uv.animate)(this.routerEl, {
                opacity: [
                    0,
                    1
                ],
                scale: [
                    .99,
                    1
                ]
            }, {
                duration: .37,
                delay: .03
            })), this.oldHeight = t;
        }), this.resizeObserver.observe(this.contentEl);
    }
    disconnectedCallback() {
        var e, t;
        (e = this.unsubscribe) == null || e.call(this), (t = this.resizeObserver) == null || t.disconnect();
    }
    get routerEl() {
        return $a00eed0e4f95cd61$var$h.getShadowRootElement(this, ".w3m-router");
    }
    get contentEl() {
        return $a00eed0e4f95cd61$var$h.getShadowRootElement(this, ".w3m-content");
    }
    viewTemplate() {
        switch(this.view){
            case "ConnectWallet":
                return (0, $hZNzg.html)`<w3m-connect-wallet-view></w3m-connect-wallet-view>`;
            case "SelectNetwork":
                return (0, $hZNzg.html)`<w3m-select-network-view></w3m-select-network-view>`;
            case "InjectedConnector":
                return (0, $hZNzg.html)`<w3m-injected-connector-view></w3m-injected-connector-view>`;
            case "InstallConnector":
                return (0, $hZNzg.html)`<w3m-install-connector-view></w3m-install-connector-view>`;
            case "GetWallet":
                return (0, $hZNzg.html)`<w3m-get-wallet-view></w3m-get-wallet-view>`;
            case "DesktopConnector":
                return (0, $hZNzg.html)`<w3m-desktop-connector-view></w3m-desktop-connector-view>`;
            case "WalletExplorer":
                return (0, $hZNzg.html)`<w3m-wallet-explorer-view></w3m-wallet-explorer-view>`;
            case "Qrcode":
                return (0, $hZNzg.html)`<w3m-qrcode-view></w3m-qrcode-view>`;
            case "Help":
                return (0, $hZNzg.html)`<w3m-help-view></w3m-help-view>`;
            case "Account":
                return (0, $hZNzg.html)`<w3m-account-view></w3m-account-view>`;
            case "SwitchNetwork":
                return (0, $hZNzg.html)`<w3m-switch-network-view></w3m-switch-network-view>`;
            default:
                return (0, $hZNzg.html)`<div>Not Found</div>`;
        }
    }
    async onChangeRoute() {
        await (0, $kT2uv.animate)(this.routerEl, {
            opacity: [
                1,
                0
            ],
            scale: [
                1,
                1.02
            ]
        }, {
            duration: .15
        }).finished, this.view = (0, $6sRZo.RouterCtrl).state.view;
    }
    render() {
        return (0, $hZNzg.html)`<div class="w3m-router"><div class="w3m-content">${this.viewTemplate()}</div></div>`;
    }
};
$a00eed0e4f95cd61$var$he.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$co
], $a00eed0e4f95cd61$var$Ue([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$var$he.prototype, "view", 2), $a00eed0e4f95cd61$var$Ue([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$var$he.prototype, "prevView", 2), $a00eed0e4f95cd61$var$he = $a00eed0e4f95cd61$var$Ue([
    (0, $fWcHw.customElement)("w3m-modal-router")
], $a00eed0e4f95cd61$var$he);
const $a00eed0e4f95cd61$var$po = (0, $5Oejw.css)`div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:10px 15px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:36px;border:1px solid var(--w3m-color-overlay);background-color:var(--w3m-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--w3m-color-bg-3)}}.w3m-success path{fill:var(--w3m-color-fg-accent)}.w3m-error path{fill:var(--w3m-color-err)}`;
var $a00eed0e4f95cd61$var$uo = Object.defineProperty, $a00eed0e4f95cd61$var$vo = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$gt = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$vo(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$uo(t, a, o), o;
};
let $a00eed0e4f95cd61$var$$e = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(), this.open = !1, this.unsubscribe = void 0, this.timeout = void 0, this.unsubscribe = (0, $6sRZo.ToastCtrl).subscribe((e)=>{
            e.open ? (this.open = !0, this.timeout = setTimeout(()=>(0, $6sRZo.ToastCtrl).closeToast(), 2200)) : (this.open = !1, clearTimeout(this.timeout));
        });
    }
    disconnectedCallback() {
        var e;
        (e = this.unsubscribe) == null || e.call(this), clearTimeout(this.timeout), (0, $6sRZo.ToastCtrl).closeToast();
    }
    render() {
        const { message: e , variant: t  } = (0, $6sRZo.ToastCtrl).state, a = {
            "w3m-success": t === "success",
            "w3m-error": t === "error"
        };
        return this.open ? (0, $hZNzg.html)`<div class="${(0, $lpVpn.classMap)(a)}">${t === "success" ? $a00eed0e4f95cd61$var$g.CHECKMARK_ICON : null} ${t === "error" ? $a00eed0e4f95cd61$var$g.CROSS_ICON : null}<w3m-text variant="small-normal">${e}</w3m-text></div>` : null;
    }
};
$a00eed0e4f95cd61$var$$e.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$po
], $a00eed0e4f95cd61$var$gt([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$var$$e.prototype, "open", 2), $a00eed0e4f95cd61$var$$e = $a00eed0e4f95cd61$var$gt([
    (0, $fWcHw.customElement)("w3m-modal-toast")
], $a00eed0e4f95cd61$var$$e);
const $a00eed0e4f95cd61$var$go = (0, $5Oejw.css)`button{padding:5px;border-radius:10px;transition:all .2s ease;display:flex;flex-direction:column;align-items:center;justify-content:center;width:80px;height:90px}w3m-network-image{width:54px;height:59px}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;margin-top:5px}button:hover{background-color:var(--w3m-color-overlay)}`;
var $a00eed0e4f95cd61$var$wo = Object.defineProperty, $a00eed0e4f95cd61$var$bo = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$Oe = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$bo(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$wo(t, a, o), o;
};
let $a00eed0e4f95cd61$var$oe = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(...arguments), this.onClick = ()=>null, this.name = "", this.chainId = "";
    }
    render() {
        return (0, $hZNzg.html)`<button @click="${this.onClick}"><w3m-network-image chainId="${this.chainId}"></w3m-network-image><w3m-text variant="xsmall-normal">${this.name}</w3m-text></button>`;
    }
};
$a00eed0e4f95cd61$var$oe.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$go
], $a00eed0e4f95cd61$var$Oe([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$oe.prototype, "onClick", 2), $a00eed0e4f95cd61$var$Oe([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$oe.prototype, "name", 2), $a00eed0e4f95cd61$var$Oe([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$oe.prototype, "chainId", 2), $a00eed0e4f95cd61$var$oe = $a00eed0e4f95cd61$var$Oe([
    (0, $fWcHw.customElement)("w3m-network-button")
], $a00eed0e4f95cd61$var$oe);
const $a00eed0e4f95cd61$var$fo = (0, $5Oejw.css)`div{width:inherit;height:inherit}.polygon-stroke{stroke:var(--w3m-color-overlay)}svg{width:100%;height:100%;margin:0}#network-placeholder-fill{fill:var(--w3m-color-bg-3)}#network-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
var $a00eed0e4f95cd61$var$yo = Object.defineProperty, $a00eed0e4f95cd61$var$xo = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$wt = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$xo(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$yo(t, a, o), o;
};
let $a00eed0e4f95cd61$var$Ie = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(...arguments), this.chainId = "";
    }
    render() {
        const e = $a00eed0e4f95cd61$var$h.getChainIcon(this.chainId);
        return e ? (0, $hZNzg.html)`<div><svg width="54" height="59" viewBox="0 0 54 59" fill="none"><defs><clipPath id="polygon"><path d="M17.033 4.964c3.852-2.262 5.778-3.393 7.84-3.77a11.807 11.807 0 0 1 4.254 0c2.062.377 3.988 1.508 7.84 3.77l6.066 3.562c3.852 2.263 5.777 3.394 7.13 5.022a12.268 12.268 0 0 1 2.127 3.747c.71 2.006.71 4.268.71 8.793v7.124c0 4.525 0 6.787-.71 8.793a12.268 12.268 0 0 1-2.126 3.747c-1.354 1.628-3.28 2.76-7.131 5.022l-6.066 3.562c-3.852 2.262-5.778 3.393-7.84 3.771a11.814 11.814 0 0 1-4.254 0c-2.062-.378-3.988-1.509-7.84-3.77l-6.066-3.563c-3.852-2.263-5.778-3.394-7.13-5.022a12.268 12.268 0 0 1-2.127-3.747C1 40 1 37.737 1 33.212v-7.124c0-4.525 0-6.787.71-8.793a12.268 12.268 0 0 1 2.127-3.747c1.352-1.628 3.278-2.76 7.13-5.022l6.066-3.562Z"/></clipPath></defs><image clip-path="url(#polygon)" href="${e}" width="58" height="59" x="-2" y="0"/><path class="polygon-stroke" d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z" stroke="#fff"/></svg></div>` : (0, $hZNzg.html)`${$a00eed0e4f95cd61$var$g.NETWORK_PLACEHOLDER}`;
    }
};
$a00eed0e4f95cd61$var$Ie.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$fo
], $a00eed0e4f95cd61$var$wt([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$Ie.prototype, "chainId", 2), $a00eed0e4f95cd61$var$Ie = $a00eed0e4f95cd61$var$wt([
    (0, $fWcHw.customElement)("w3m-network-image")
], $a00eed0e4f95cd61$var$Ie);
const $a00eed0e4f95cd61$var$Co = .1, $a00eed0e4f95cd61$var$bt = 2.5, $a00eed0e4f95cd61$var$F = 7;
function $a00eed0e4f95cd61$var$He(e, t, a) {
    return e === t ? !1 : (e - t < 0 ? t - e : e - t) <= a + $a00eed0e4f95cd61$var$Co;
}
function $a00eed0e4f95cd61$var$ko(e, t) {
    const a = Array.prototype.slice.call((0, (/*@__PURE__*/$parcel$interopDefault($iAFHp))).create(e, {
        errorCorrectionLevel: t
    }).modules.data, 0), n = Math.sqrt(a.length);
    return a.reduce((o, r, i)=>(i % n === 0 ? o.push([
            r
        ]) : o[o.length - 1].push(r)) && o, []);
}
const $a00eed0e4f95cd61$var$$o = {
    generate (e, t, a, n) {
        const o = n === "light" ? "#141414" : "#fff", r = n === "light" ? "#fff" : "#141414", i = [], c = $a00eed0e4f95cd61$var$ko(e, "Q"), m = t / c.length, s = [
            {
                x: 0,
                y: 0
            },
            {
                x: 1,
                y: 0
            },
            {
                x: 0,
                y: 1
            }
        ];
        s.forEach(({ x: E , y: x  })=>{
            const A = (c.length - $a00eed0e4f95cd61$var$F) * m * E, M = (c.length - $a00eed0e4f95cd61$var$F) * m * x, P = .32;
            for(let U = 0; U < s.length; U += 1){
                const ee = m * ($a00eed0e4f95cd61$var$F - U * 2);
                i.push((0, $hZNzg.svg)`<rect fill="${U % 2 === 0 ? o : r}" height="${ee}" rx="${ee * P}" ry="${ee * P}" width="${ee}" x="${A + m * U}" y="${M + m * U}">`);
            }
        });
        const d = Math.floor((a + 25) / m), v = c.length / 2 - d / 2, O = c.length / 2 + d / 2 - 1, C = [];
        c.forEach((E, x)=>{
            E.forEach((A, M)=>{
                if (c[x][M] && !(x < $a00eed0e4f95cd61$var$F && M < $a00eed0e4f95cd61$var$F || x > c.length - ($a00eed0e4f95cd61$var$F + 1) && M < $a00eed0e4f95cd61$var$F || x < $a00eed0e4f95cd61$var$F && M > c.length - ($a00eed0e4f95cd61$var$F + 1)) && !(x > v && x < O && M > v && M < O)) {
                    const P = x * m + m / 2, U = M * m + m / 2;
                    C.push([
                        P,
                        U
                    ]);
                }
            });
        });
        const N = {};
        return C.forEach(([E, x])=>{
            N[E] ? N[E].push(x) : N[E] = [
                x
            ];
        }), Object.entries(N).map(([E, x])=>{
            const A = x.filter((M)=>x.every((P)=>!$a00eed0e4f95cd61$var$He(M, P, m)));
            return [
                Number(E),
                A
            ];
        }).forEach(([E, x])=>{
            x.forEach((A)=>{
                i.push((0, $hZNzg.svg)`<circle cx="${E}" cy="${A}" fill="${o}" r="${m / $a00eed0e4f95cd61$var$bt}">`);
            });
        }), Object.entries(N).filter(([E, x])=>x.length > 1).map(([E, x])=>{
            const A = x.filter((M)=>x.some((P)=>$a00eed0e4f95cd61$var$He(M, P, m)));
            return [
                Number(E),
                A
            ];
        }).map(([E, x])=>{
            x.sort((M, P)=>M < P ? -1 : 1);
            const A = [];
            for (const M of x){
                const P = A.find((U)=>U.some((ee)=>$a00eed0e4f95cd61$var$He(M, ee, m)));
                P ? P.push(M) : A.push([
                    M
                ]);
            }
            return [
                E,
                A.map((M)=>[
                        M[0],
                        M[M.length - 1]
                    ])
            ];
        }).forEach(([E, x])=>{
            x.forEach(([A, M])=>{
                i.push((0, $hZNzg.svg)`<line x1="${E}" x2="${E}" y1="${A}" y2="${M}" stroke="${o}" stroke-width="${m / ($a00eed0e4f95cd61$var$bt / 2)}" stroke-linecap="round">`);
            });
        }), i;
    }
}, $a00eed0e4f95cd61$var$Oo = (0, $5Oejw.css)`@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;width:100%;aspect-ratio:1/1;animation:fadeIn ease .2s}svg:first-child,w3m-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{width:25%;height:25%;border-radius:15px}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--w3m-color-fg-accent)}svg:first-child path:last-child{stroke:var(--w3m-color-overlay)}`;
var $a00eed0e4f95cd61$var$Io = Object.defineProperty, $a00eed0e4f95cd61$var$Eo = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$me = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$Eo(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$Io(t, a, o), o;
};
let $a00eed0e4f95cd61$var$K = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(...arguments), this.uri = "", this.size = 0, this.logoSrc = "", this.walletId = "";
    }
    svgTemplate() {
        var e;
        const t = (e = (0, $6sRZo.ConfigCtrl).state.themeMode) != null ? e : "light";
        return (0, $hZNzg.svg)`<svg height="${this.size}" width="${this.size}">${$a00eed0e4f95cd61$var$$o.generate(this.uri, this.size, this.size / 4, t)}</svg>`;
    }
    render() {
        return (0, $hZNzg.html)`<div>${this.walletId || this.logoSrc ? (0, $hZNzg.html)`<w3m-wallet-image walletId="${(0, $ioFkT.ifDefined)(this.walletId)}" src="${(0, $ioFkT.ifDefined)(this.logoSrc)}"></w3m-wallet-image>` : $a00eed0e4f95cd61$var$g.WALLET_CONNECT_ICON_COLORED} ${this.svgTemplate()}</div>`;
    }
};
$a00eed0e4f95cd61$var$K.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$Oo
], $a00eed0e4f95cd61$var$me([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$K.prototype, "uri", 2), $a00eed0e4f95cd61$var$me([
    (0, $3yucp.property)({
        type: Number
    })
], $a00eed0e4f95cd61$var$K.prototype, "size", 2), $a00eed0e4f95cd61$var$me([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$K.prototype, "logoSrc", 2), $a00eed0e4f95cd61$var$me([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$K.prototype, "walletId", 2), $a00eed0e4f95cd61$var$K = $a00eed0e4f95cd61$var$me([
    (0, $fWcHw.customElement)("w3m-qrcode")
], $a00eed0e4f95cd61$var$K);
const $a00eed0e4f95cd61$var$Mo = (0, $5Oejw.css)`:host{position:relative;height:28px;width:75%}input{width:100%;height:100%;line-height:28px!important;border-radius:28px;font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:transparent;position:absolute;background-color:var(--w3m-color-bg-3);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay)}input::placeholder{color:transparent}svg{margin-right:4px}.w3m-placeholder{top:0;left:50%;transform:translateX(-50%);transition:.2s all ease;pointer-events:none;display:flex;align-items:center;justify-content:center;height:100%;width:fit-content;position:relative}input:focus-within+.w3m-placeholder,input:not(:placeholder-shown)+.w3m-placeholder{transform:translateX(10px);left:0}w3m-text{opacity:1;transition:.2s opacity ease}input:focus-within+.w3m-placeholder w3m-text,input:not(:placeholder-shown)+.w3m-placeholder w3m-text{opacity:0}input:focus-within,input:not(:placeholder-shown){color:var(--w3m-color-fg-1)}input:focus-within{box-shadow:inset 0 0 0 1px var(--w3m-color-fg-accent)}path{fill:var(--w3m-color-fg-2)}`;
var $a00eed0e4f95cd61$var$Wo = Object.defineProperty, $a00eed0e4f95cd61$var$Ao = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$ft = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$Ao(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$Wo(t, a, o), o;
};
let $a00eed0e4f95cd61$var$Ee = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(...arguments), this.onChange = ()=>null;
    }
    render() {
        const e = (0, $6sRZo.CoreUtil).isMobile() ? "Search mobile wallets" : "Search desktop wallets";
        return (0, $hZNzg.html)`<input type="text" @input="${this.onChange}" placeholder="${e}"><div class="w3m-placeholder">${$a00eed0e4f95cd61$var$g.SEARCH_ICON}<w3m-text color="secondary" variant="medium-thin">${e}</w3m-text></div>`;
    }
};
$a00eed0e4f95cd61$var$Ee.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$Mo
], $a00eed0e4f95cd61$var$ft([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$Ee.prototype, "onChange", 2), $a00eed0e4f95cd61$var$Ee = $a00eed0e4f95cd61$var$ft([
    (0, $fWcHw.customElement)("w3m-search-input")
], $a00eed0e4f95cd61$var$Ee);
const $a00eed0e4f95cd61$var$Lo = (0, $5Oejw.css)`@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--w3m-color-fg-accent)}`;
var $a00eed0e4f95cd61$var$jo = Object.defineProperty, $a00eed0e4f95cd61$var$So = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$Po = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$So(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$jo(t, a, o), o;
};
let $a00eed0e4f95cd61$var$Ze = class extends (0, $e9IBe.LitElement) {
    render() {
        return (0, $hZNzg.html)`<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`;
    }
};
$a00eed0e4f95cd61$var$Ze.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$Lo
], $a00eed0e4f95cd61$var$Ze = $a00eed0e4f95cd61$var$Po([
    (0, $fWcHw.customElement)("w3m-spinner")
], $a00eed0e4f95cd61$var$Ze);
const $a00eed0e4f95cd61$var$_o = (0, $5Oejw.css)`span{font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'tnum' on,'lnum' on,'case' on}.w3m-xxsmall-bold{font-weight:700;font-size:10px;line-height:12px;letter-spacing:.02em;text-transform:uppercase}.w3m-xsmall-normal{font-weight:600;font-size:12px;line-height:14px;letter-spacing:-.03em}.w3m-small-thin{font-weight:500;font-size:14px;line-height:16px;letter-spacing:-.03em}.w3m-small-normal{font-weight:600;font-size:14px;line-height:16px;letter-spacing:-.03em}.w3m-medium-thin{font-weight:500;font-size:16px;line-height:20px;letter-spacing:-.03em}.w3m-medium-normal{font-weight:600;font-size:16px;line-height:20px;letter-spacing:-.03em}.w3m-medium-bold{font-weight:700;font-size:16px;line-height:20px;letter-spacing:-.03em}.w3m-large-bold{font-weight:600;font-size:20px;line-height:24px;letter-spacing:-.03em}:host(*){color:var(--w3m-color-fg-1)}.w3m-color-primary{color:var(--w3m-color-fg-1)}.w3m-color-secondary{color:var(--w3m-color-fg-2)}.w3m-color-tertiary{color:var(--w3m-color-fg-3)}.w3m-color-inverse{color:var(--w3m-color-fg-inverse)}.w3m-color-accnt{color:var(--w3m-color-fg-accent)}.w3m-color-error{color:var(--w3m-color-err)}`;
var $a00eed0e4f95cd61$var$Do = Object.defineProperty, $a00eed0e4f95cd61$var$To = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$Fe = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$To(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$Do(t, a, o), o;
};
let $a00eed0e4f95cd61$var$pe = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(...arguments), this.variant = "medium-normal", this.color = "primary";
    }
    render() {
        const e = {
            "w3m-large-bold": this.variant === "large-bold",
            "w3m-medium-bold": this.variant === "medium-bold",
            "w3m-medium-normal": this.variant === "medium-normal",
            "w3m-medium-thin": this.variant === "medium-thin",
            "w3m-small-normal": this.variant === "small-normal",
            "w3m-small-thin": this.variant === "small-thin",
            "w3m-xsmall-normal": this.variant === "xsmall-normal",
            "w3m-xxsmall-bold": this.variant === "xxsmall-bold",
            "w3m-color-primary": this.color === "primary",
            "w3m-color-secondary": this.color === "secondary",
            "w3m-color-tertiary": this.color === "tertiary",
            "w3m-color-inverse": this.color === "inverse",
            "w3m-color-accnt": this.color === "accent",
            "w3m-color-error": this.color === "error"
        };
        return (0, $hZNzg.html)`<span class="${(0, $lpVpn.classMap)(e)}"><slot></slot></span>`;
    }
};
$a00eed0e4f95cd61$var$pe.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$_o
], $a00eed0e4f95cd61$var$Fe([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$pe.prototype, "variant", 2), $a00eed0e4f95cd61$var$Fe([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$pe.prototype, "color", 2), $a00eed0e4f95cd61$var$pe = $a00eed0e4f95cd61$var$Fe([
    (0, $fWcHw.customElement)("w3m-text")
], $a00eed0e4f95cd61$var$pe);
const $a00eed0e4f95cd61$var$No = (0, $5Oejw.css)`div{overflow:hidden;position:relative;border-radius:50%}div::after{content:'';position:absolute;inset:0;border-radius:50%;border:1px solid var(--w3m-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}svg{width:100%;height:100%}#token-placeholder-fill{fill:var(--w3m-color-bg-3)}#token-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
var $a00eed0e4f95cd61$var$Ro = Object.defineProperty, $a00eed0e4f95cd61$var$Bo = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$yt = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$Bo(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$Ro(t, a, o), o;
};
let $a00eed0e4f95cd61$var$Me = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(...arguments), this.symbol = void 0;
    }
    render() {
        var e;
        const t = $a00eed0e4f95cd61$var$h.getTokenIcon((e = this.symbol) != null ? e : "");
        return t ? (0, $hZNzg.html)`<div><img src="${t}" alt="${this.id}"></div>` : $a00eed0e4f95cd61$var$g.TOKEN_PLACEHOLDER;
    }
};
$a00eed0e4f95cd61$var$Me.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$No
], $a00eed0e4f95cd61$var$yt([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$Me.prototype, "symbol", 2), $a00eed0e4f95cd61$var$Me = $a00eed0e4f95cd61$var$yt([
    (0, $fWcHw.customElement)("w3m-token-image")
], $a00eed0e4f95cd61$var$Me);
const $a00eed0e4f95cd61$var$Uo = (0, $5Oejw.css)`button{transition:all .2s ease;width:100%;height:100%;border-radius:10px;display:flex;align-items:flex-start}button:hover{background-color:var(--w3m-color-overlay)}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}w3m-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:15px;margin-bottom:5px}.w3m-sublabel{margin-top:2px}`;
var $a00eed0e4f95cd61$var$Ho = Object.defineProperty, $a00eed0e4f95cd61$var$Zo = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$z = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$Zo(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$Ho(t, a, o), o;
};
let $a00eed0e4f95cd61$var$H = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(...arguments), this.onClick = ()=>null, this.name = "", this.walletId = "", this.label = void 0, this.src = void 0, this.installed = !1, this.recent = !1;
    }
    sublabelTemplate() {
        return this.recent ? (0, $hZNzg.html)`<w3m-text class="w3m-sublabel" variant="xxsmall-bold" color="tertiary">RECENT</w3m-text>` : this.installed ? (0, $hZNzg.html)`<w3m-text class="w3m-sublabel" variant="xxsmall-bold" color="tertiary">INSTALLED</w3m-text>` : null;
    }
    render() {
        var e;
        return (0, $hZNzg.html)`<button @click="${this.onClick}"><div><w3m-wallet-image walletId="${this.walletId}" .src="${this.src}"></w3m-wallet-image><w3m-text variant="xsmall-normal">${(e = this.label) != null ? e : $a00eed0e4f95cd61$var$h.getWalletName(this.name, !0)}</w3m-text>${this.sublabelTemplate()}</div></button>`;
    }
};
$a00eed0e4f95cd61$var$H.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$Uo
], $a00eed0e4f95cd61$var$z([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$H.prototype, "onClick", 2), $a00eed0e4f95cd61$var$z([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$H.prototype, "name", 2), $a00eed0e4f95cd61$var$z([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$H.prototype, "walletId", 2), $a00eed0e4f95cd61$var$z([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$H.prototype, "label", 2), $a00eed0e4f95cd61$var$z([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$H.prototype, "src", 2), $a00eed0e4f95cd61$var$z([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$H.prototype, "installed", 2), $a00eed0e4f95cd61$var$z([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$H.prototype, "recent", 2), $a00eed0e4f95cd61$var$H = $a00eed0e4f95cd61$var$z([
    (0, $fWcHw.customElement)("w3m-wallet-button")
], $a00eed0e4f95cd61$var$H);
const $a00eed0e4f95cd61$var$Fo = (0, $5Oejw.css)`div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;inset:0;border-radius:inherit;border:1px solid var(--w3m-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
var $a00eed0e4f95cd61$var$zo = Object.defineProperty, $a00eed0e4f95cd61$var$Vo = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$ze = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$Vo(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$zo(t, a, o), o;
};
let $a00eed0e4f95cd61$var$ue = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(...arguments), this.walletId = void 0, this.src = void 0;
    }
    render() {
        var e;
        const t = $a00eed0e4f95cd61$var$h.getWalletId((e = this.walletId) != null ? e : ""), a = $a00eed0e4f95cd61$var$h.getWalletId(t), n = this.src ? this.src : $a00eed0e4f95cd61$var$h.getWalletIcon(a);
        return (0, $hZNzg.html)`${n.length ? (0, $hZNzg.html)`<div><img src="${n}" alt="${this.id}"></div>` : $a00eed0e4f95cd61$var$g.WALLET_PLACEHOLDER}`;
    }
};
$a00eed0e4f95cd61$var$ue.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$Fo
], $a00eed0e4f95cd61$var$ze([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$ue.prototype, "walletId", 2), $a00eed0e4f95cd61$var$ze([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$ue.prototype, "src", 2), $a00eed0e4f95cd61$var$ue = $a00eed0e4f95cd61$var$ze([
    (0, $fWcHw.customElement)("w3m-wallet-image")
], $a00eed0e4f95cd61$var$ue);
const $a00eed0e4f95cd61$var$Go = (0, $5Oejw.css)`:host{all:initial}div{display:flex;align-items:center;background-color:var(--w3m-color-overlay);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);border-radius:10px;padding:4px 4px 4px 8px}div button{border-radius:16px;padding:4px 8px 4px 4px;height:auto;margin-left:10px;color:var(--w3m-color-fg-inverse);background-color:var(--w3m-color-fg-accent)}button::after{content:'';inset:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--w3m-color-overlay)}button:hover::after{background-color:var(--w3m-color-overlay)}w3m-avatar{margin-right:6px}w3m-button-big w3m-avatar{margin-left:-5px}`;
var $a00eed0e4f95cd61$var$qo = Object.defineProperty, $a00eed0e4f95cd61$var$Ko = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$xt = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$Ko(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$qo(t, a, o), o;
};
let $a00eed0e4f95cd61$export$f039a2838669d98e = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(), this.balance = "hide", $a00eed0e4f95cd61$var$h.rejectStandaloneButtonComponent();
    }
    onOpen() {
        const { isStandalone: e  } = (0, $6sRZo.OptionsCtrl).state;
        e || (0, $6sRZo.ModalCtrl).open({
            route: "Account"
        });
    }
    accountTemplate() {
        return (0, $hZNzg.html)`<w3m-avatar></w3m-avatar><w3m-address-text></w3m-address-text>`;
    }
    render() {
        return this.balance === "show" ? (0, $hZNzg.html)`<div><w3m-balance></w3m-balance><button @click="${this.onOpen}">${this.accountTemplate()}</button></div>` : (0, $hZNzg.html)`<w3m-button-big @click="${this.onOpen}">${this.accountTemplate()}</w3m-button-big>`;
    }
};
$a00eed0e4f95cd61$export$f039a2838669d98e.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$Go
], $a00eed0e4f95cd61$var$xt([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$export$f039a2838669d98e.prototype, "balance", 2), $a00eed0e4f95cd61$export$f039a2838669d98e = $a00eed0e4f95cd61$var$xt([
    (0, $fWcHw.customElement)("w3m-account-button")
], $a00eed0e4f95cd61$export$f039a2838669d98e);
const $a00eed0e4f95cd61$var$Yo = (0, $5Oejw.css)`button{display:flex;border-radius:10px;flex-direction:column;transition:background-color .2s ease;justify-content:center;padding:5px;width:100px}button:hover{background-color:var(--w3m-color-overlay)}button:disabled{pointer-events:none}w3m-network-image{width:32px;height:32px}w3m-text{margin-top:4px}`;
var $a00eed0e4f95cd61$var$Xo = Object.defineProperty, $a00eed0e4f95cd61$var$Qo = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$Ve = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$Qo(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$Xo(t, a, o), o;
};
let $a00eed0e4f95cd61$var$ve = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(), this.chainId = "", this.label = "", this.unsubscribeNetwork = void 0;
        const { selectedChain: e  } = (0, $6sRZo.OptionsCtrl).state;
        this.chainId = e?.id.toString(), this.label = e?.name, this.unsubscribeNetwork = (0, $6sRZo.OptionsCtrl).subscribe(({ selectedChain: t  })=>{
            this.chainId = t?.id.toString(), this.label = t?.name;
        });
    }
    disconnectedCallback() {
        var e;
        (e = this.unsubscribeNetwork) == null || e.call(this);
    }
    onClick() {
        (0, $6sRZo.RouterCtrl).push("SelectNetwork");
    }
    render() {
        const { chains: e  } = (0, $6sRZo.OptionsCtrl).state, t = e && e.length > 1;
        return (0, $hZNzg.html)`<button @click="${this.onClick}" ?disabled="${!t}"><w3m-network-image chainId="${(0, $ioFkT.ifDefined)(this.chainId)}"></w3m-network-image><w3m-text variant="xsmall-normal" color="accent">${this.label}</w3m-text></button>`;
    }
};
$a00eed0e4f95cd61$var$ve.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$Yo
], $a00eed0e4f95cd61$var$Ve([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$var$ve.prototype, "chainId", 2), $a00eed0e4f95cd61$var$Ve([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$var$ve.prototype, "label", 2), $a00eed0e4f95cd61$var$ve = $a00eed0e4f95cd61$var$Ve([
    (0, $fWcHw.customElement)("w3m-account-network-button")
], $a00eed0e4f95cd61$var$ve);
const $a00eed0e4f95cd61$var$Jo = (0, $5Oejw.css)`@keyframes slide{0%{background-position:0 0}100%{background-position:200px 0}}w3m-text{padding:1px 0}.w3m-loading{background:linear-gradient(270deg,var(--w3m-color-fg-1) 36.33%,var(--w3m-color-fg-3) 42.07%,var(--w3m-color-fg-1) 83.3%);background-size:200px 100%;background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation-name:slide;animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:linear}`;
var $a00eed0e4f95cd61$var$ea = Object.defineProperty, $a00eed0e4f95cd61$var$ta = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$ge = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$ta(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$ea(t, a, o), o;
};
let $a00eed0e4f95cd61$var$Y = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(), this.address = void 0, this.name = void 0, this.loading = !0, this.variant = "button", this.unsubscribeAccount = void 0, this.address = (0, $6sRZo.OptionsCtrl).state.address, this.name = (0, $6sRZo.OptionsCtrl).state.profileName, this.loading = Boolean((0, $6sRZo.OptionsCtrl).state.profileLoading), this.unsubscribeAccount = (0, $6sRZo.OptionsCtrl).subscribe(({ address: e , profileName: t , profileLoading: a  })=>{
            this.address = e, this.name = t, this.loading = Boolean(a);
        });
    }
    disconnectedCallback() {
        var e;
        (e = this.unsubscribeAccount) == null || e.call(this);
    }
    render() {
        var e;
        const t = this.variant === "button", a = {
            "w3m-loading": this.loading
        };
        return (0, $hZNzg.html)`<w3m-text class="${(0, $lpVpn.classMap)(a)}" variant="${t ? "medium-normal" : "large-bold"}" color="${t ? "inverse" : "primary"}">${this.name ? this.name : $a00eed0e4f95cd61$var$h.truncate((e = this.address) != null ? e : "")}</w3m-text>`;
    }
};
$a00eed0e4f95cd61$var$Y.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$Jo
], $a00eed0e4f95cd61$var$ge([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$var$Y.prototype, "address", 2), $a00eed0e4f95cd61$var$ge([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$var$Y.prototype, "name", 2), $a00eed0e4f95cd61$var$ge([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$var$Y.prototype, "loading", 2), $a00eed0e4f95cd61$var$ge([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$Y.prototype, "variant", 2), $a00eed0e4f95cd61$var$Y = $a00eed0e4f95cd61$var$ge([
    (0, $fWcHw.customElement)("w3m-address-text")
], $a00eed0e4f95cd61$var$Y);
const $a00eed0e4f95cd61$var$oa = (0, $5Oejw.css)`@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 10),0,0)}}.w3m-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px}.w3m-slider::after,.w3m-slider::before{content:'';height:100%;width:50px;z-index:2;position:absolute;background:linear-gradient(to right,var(--w3m-color-bg-1) 0,transparent 100%);top:0}.w3m-slider::before{left:0}.w3m-slider::after{right:0;transform:rotateZ(180deg)}.w3m-track{display:flex;width:calc(70px * 20);animation:scroll 20s linear infinite}.w3m-action{padding:30px 0 10px 0;display:flex;justify-content:center;align-items:center;flex-direction:column}.w3m-action w3m-button-big:last-child{margin-top:10px}w3m-wallet-image{width:60px;height:60px;margin:0 5px;box-shadow:0 2px 4px -2px rgba(0,0,0,.12),0 4px 4px -2px rgba(0,0,0,.08);border-radius:15px}`;
var $a00eed0e4f95cd61$var$aa = Object.defineProperty, $a00eed0e4f95cd61$var$na = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$ra = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$na(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$aa(t, a, o), o;
};
let $a00eed0e4f95cd61$var$Ge = class extends (0, $e9IBe.LitElement) {
    onGoToQrcode() {
        (0, $6sRZo.RouterCtrl).push("Qrcode");
    }
    onGoToGetWallet() {
        (0, $6sRZo.RouterCtrl).push("GetWallet");
    }
    render() {
        const { previewWallets: e  } = (0, $6sRZo.ExplorerCtrl).state, t = e.length, a = [
            ...e,
            ...e
        ];
        return (0, $hZNzg.html)`<w3m-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${$a00eed0e4f95cd61$var$g.QRCODE_ICON}"></w3m-modal-header><w3m-modal-content>${t ? (0, $hZNzg.html)`<div class="w3m-slider"><div class="w3m-track">${a.map(({ image_url: n  })=>(0, $hZNzg.html)`<w3m-wallet-image src="${n.lg}"></w3m-wallet-image>`)}</div></div>` : null}<div class="w3m-action"><w3m-button-big @click="${$a00eed0e4f95cd61$var$h.handleAndroidLinking}"><w3m-text variant="medium-normal" color="inverse">Select Wallet</w3m-text></w3m-button-big><w3m-button-big variant="secondary" @click="${this.onGoToGetWallet}"><w3m-text variant="medium-normal" color="accent">I don’t have a wallet</w3m-text></w3m-button-big></div></w3m-modal-content>`;
    }
};
$a00eed0e4f95cd61$var$Ge.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$oa
], $a00eed0e4f95cd61$var$Ge = $a00eed0e4f95cd61$var$ra([
    (0, $fWcHw.customElement)("w3m-android-wallet-selection")
], $a00eed0e4f95cd61$var$Ge);
const $a00eed0e4f95cd61$var$ia = (0, $5Oejw.css)`@keyframes slide{0%{transform:translateX(-50px)}100%{transform:translateX(200px)}}.w3m-placeholder,img{border-radius:50%;box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);display:block;position:relative;overflow:hidden!important;background-color:var(--w3m-color-av-1);background-image:radial-gradient(at 66% 77%,var(--w3m-color-av-2) 0,transparent 50%),radial-gradient(at 29% 97%,var(--w3m-color-av-3) 0,transparent 50%),radial-gradient(at 99% 86%,var(--w3m-color-av-4) 0,transparent 50%),radial-gradient(at 29% 88%,var(--w3m-color-av-5) 0,transparent 50%);transform:translateZ(0)}.w3m-loader{width:50px;height:100%;background:linear-gradient(270deg,transparent 0,rgba(255,255,255,.4) 30%,transparent 100%);animation-name:slide;animation-duration:1.5s;transform:translateX(-50px);animation-iteration-count:infinite;animation-timing-function:linear;animation-delay:.55s}.w3m-small{width:24px;height:24px}.w3m-medium{width:60px;height:60px}`;
var $a00eed0e4f95cd61$var$la = Object.defineProperty, $a00eed0e4f95cd61$var$sa = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$we = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$sa(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$la(t, a, o), o;
};
let $a00eed0e4f95cd61$var$X = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(), this.address = void 0, this.avatar = void 0, this.loading = !0, this.size = "small", this.unsubscribeAccount = void 0, this.address = (0, $6sRZo.OptionsCtrl).state.address, this.avatar = (0, $6sRZo.OptionsCtrl).state.profileAvatar, this.loading = Boolean((0, $6sRZo.OptionsCtrl).state.profileLoading), this.unsubscribeAccount = (0, $6sRZo.OptionsCtrl).subscribe(({ address: e , profileAvatar: t , profileLoading: a  })=>{
            this.address = e, this.avatar = t, this.loading = Boolean(a);
        });
    }
    disconnectedCallback() {
        var e;
        (e = this.unsubscribeAccount) == null || e.call(this);
    }
    render() {
        const e = {
            "w3m-placeholder": !0,
            "w3m-small": this.size === "small",
            "w3m-medium": this.size === "medium"
        };
        return this.avatar ? (0, $hZNzg.html)`<img class="${(0, $lpVpn.classMap)(e)}" src="${this.avatar}">` : this.address ? ($a00eed0e4f95cd61$var$h.generateAvatarColors(this.address), (0, $hZNzg.html)`<div class="${(0, $lpVpn.classMap)(e)}">${this.loading ? (0, $hZNzg.html)`<div class="w3m-loader"></div>` : null}</div>`) : null;
    }
};
$a00eed0e4f95cd61$var$X.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$ia
], $a00eed0e4f95cd61$var$we([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$var$X.prototype, "address", 2), $a00eed0e4f95cd61$var$we([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$var$X.prototype, "avatar", 2), $a00eed0e4f95cd61$var$we([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$var$X.prototype, "loading", 2), $a00eed0e4f95cd61$var$we([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$var$X.prototype, "size", 2), $a00eed0e4f95cd61$var$X = $a00eed0e4f95cd61$var$we([
    (0, $fWcHw.customElement)("w3m-avatar")
], $a00eed0e4f95cd61$var$X);
const $a00eed0e4f95cd61$var$ca = (0, $5Oejw.css)`div{display:flex;align-items:center}w3m-token-image{width:28px;height:28px;margin-right:6px}`;
var $a00eed0e4f95cd61$var$da = Object.defineProperty, $a00eed0e4f95cd61$var$ha = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$qe = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$ha(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$da(t, a, o), o;
};
let $a00eed0e4f95cd61$var$be = class extends (0, $e9IBe.LitElement) {
    constructor(){
        var e, t;
        super(), this.symbol = void 0, this.amount = void 0, this.unsubscribeAccount = void 0, this.symbol = (e = (0, $6sRZo.OptionsCtrl).state.balance) == null ? void 0 : e.symbol, this.amount = (t = (0, $6sRZo.OptionsCtrl).state.balance) == null ? void 0 : t.amount, this.unsubscribeAccount = (0, $6sRZo.OptionsCtrl).subscribe(({ balance: a  })=>{
            this.symbol = a?.symbol, this.amount = a?.amount;
        });
    }
    disconnectedCallback() {
        var e;
        (e = this.unsubscribeAccount) == null || e.call(this);
    }
    render() {
        let e = "_._";
        return this.amount === "0.0" && (e = 0), this.amount && this.amount.length > 6 && (e = parseFloat(this.amount).toFixed(3)), (0, $hZNzg.html)`<div><w3m-token-image symbol="${(0, $ioFkT.ifDefined)(this.symbol)}"></w3m-token-image><w3m-text variant="medium-normal" color="primary">${e} ${this.symbol}</w3m-text></div>`;
    }
};
$a00eed0e4f95cd61$var$be.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$ca
], $a00eed0e4f95cd61$var$qe([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$var$be.prototype, "symbol", 2), $a00eed0e4f95cd61$var$qe([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$var$be.prototype, "amount", 2), $a00eed0e4f95cd61$var$be = $a00eed0e4f95cd61$var$qe([
    (0, $fWcHw.customElement)("w3m-balance")
], $a00eed0e4f95cd61$var$be);
const $a00eed0e4f95cd61$var$ma = (0, $5Oejw.css)`:host{all:initial}svg{width:28px;height:20px;margin:-1px 3px 0 -5px}svg path{fill:var(--w3m-color-fg-inverse)}button:disabled svg path{fill:var(--w3m-color-fg-3)}w3m-spinner{margin:0 10px 0 0}`;
var $a00eed0e4f95cd61$var$pa = Object.defineProperty, $a00eed0e4f95cd61$var$ua = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$Ae = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$ua(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$pa(t, a, o), o;
};
let $a00eed0e4f95cd61$export$277240c185e0322e = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(), this.loading = !1, this.label = "Connect Wallet", this.icon = "show", this.modalUnsub = void 0, $a00eed0e4f95cd61$var$h.rejectStandaloneButtonComponent(), this.modalUnsub = (0, $6sRZo.ModalCtrl).subscribe((e)=>{
            e.open && (this.loading = !0), e.open || (this.loading = !1);
        });
    }
    disconnectedCallback() {
        var e;
        (e = this.modalUnsub) == null || e.call(this);
    }
    iconTemplate() {
        return this.icon === "show" ? $a00eed0e4f95cd61$var$g.WALLET_CONNECT_ICON : null;
    }
    onClick() {
        (0, $6sRZo.OptionsCtrl).state.isConnected ? this.onDisconnect() : this.onConnect();
    }
    onConnect() {
        this.loading = !0;
        const { enableNetworkView: e  } = (0, $6sRZo.ConfigCtrl).state, { chains: t , selectedChain: a  } = (0, $6sRZo.OptionsCtrl).state, n = t?.length && t.length > 1;
        e || n && !a ? (0, $6sRZo.ModalCtrl).open({
            route: "SelectNetwork"
        }) : (0, $6sRZo.ModalCtrl).open({
            route: "ConnectWallet"
        });
    }
    onDisconnect() {
        (0, $6sRZo.ClientCtrl).client().disconnect(), (0, $6sRZo.OptionsCtrl).resetAccount();
    }
    render() {
        return (0, $hZNzg.html)`<w3m-button-big .disabled="${this.loading}" @click="${this.onClick}">${this.loading ? (0, $hZNzg.html)`<w3m-spinner></w3m-spinner><w3m-text variant="medium-normal" color="accent">Connecting...</w3m-text>` : (0, $hZNzg.html)`${this.iconTemplate()}<w3m-text variant="medium-normal" color="inverse">${this.label}</w3m-text>`}</w3m-button-big>`;
    }
};
$a00eed0e4f95cd61$export$277240c185e0322e.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$ma
], $a00eed0e4f95cd61$var$Ae([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$export$277240c185e0322e.prototype, "loading", 2), $a00eed0e4f95cd61$var$Ae([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$export$277240c185e0322e.prototype, "label", 2), $a00eed0e4f95cd61$var$Ae([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$export$277240c185e0322e.prototype, "icon", 2), $a00eed0e4f95cd61$export$277240c185e0322e = $a00eed0e4f95cd61$var$Ae([
    (0, $fWcHw.customElement)("w3m-connect-button")
], $a00eed0e4f95cd61$export$277240c185e0322e);
var $a00eed0e4f95cd61$var$va = Object.defineProperty, $a00eed0e4f95cd61$var$ga = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$fe = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$ga(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$va(t, a, o), o;
};
let $a00eed0e4f95cd61$export$75ba0a4a2108047f = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(), this.isConnected = !1, this.label = "Connect Wallet", this.icon = "show", this.balance = "hide", this.unsubscribeAccount = void 0, $a00eed0e4f95cd61$var$h.rejectStandaloneButtonComponent(), this.isConnected = (0, $6sRZo.OptionsCtrl).state.isConnected, this.unsubscribeAccount = (0, $6sRZo.OptionsCtrl).subscribe(({ isConnected: e  })=>{
            this.isConnected = e;
        });
    }
    disconnectedCallback() {
        var e;
        (e = this.unsubscribeAccount) == null || e.call(this);
    }
    render() {
        const { enableAccountView: e  } = (0, $6sRZo.ConfigCtrl).state;
        return this.isConnected && e ? (0, $hZNzg.html)`<w3m-account-button balance="${(0, $ioFkT.ifDefined)(this.balance)}"></w3m-account-button>` : (0, $hZNzg.html)`<w3m-connect-button label="${this.isConnected ? "Disconnect" : (0, $ioFkT.ifDefined)(this.label)}" icon="${(0, $ioFkT.ifDefined)(this.icon)}"></w3m-connect-button>`;
    }
};
$a00eed0e4f95cd61$var$fe([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$export$75ba0a4a2108047f.prototype, "isConnected", 2), $a00eed0e4f95cd61$var$fe([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$export$75ba0a4a2108047f.prototype, "label", 2), $a00eed0e4f95cd61$var$fe([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$export$75ba0a4a2108047f.prototype, "icon", 2), $a00eed0e4f95cd61$var$fe([
    (0, $3yucp.property)()
], $a00eed0e4f95cd61$export$75ba0a4a2108047f.prototype, "balance", 2), $a00eed0e4f95cd61$export$75ba0a4a2108047f = $a00eed0e4f95cd61$var$fe([
    (0, $fWcHw.customElement)("w3m-core-button")
], $a00eed0e4f95cd61$export$75ba0a4a2108047f);
const $a00eed0e4f95cd61$var$R = {
    allowedExplorerListings (e) {
        const { explorerAllowList: t , explorerDenyList: a  } = (0, $6sRZo.ConfigCtrl).state;
        let n = [
            ...e
        ];
        return t && (n = n.filter((o)=>t.includes(o.id))), a && (n = n.filter((o)=>!a.includes(o.id))), n;
    },
    walletsWithInjected (e) {
        let t = [
            ...e ?? []
        ];
        if (window.ethereum) {
            const a = $a00eed0e4f95cd61$var$h.getWalletName("");
            t = t.filter(({ name: n  })=>!$a00eed0e4f95cd61$var$h.caseSafeIncludes(n, a));
        }
        return t;
    },
    connectorWallets () {
        const { isStandalone: e  } = (0, $6sRZo.OptionsCtrl).state;
        if (e) return [];
        let t = (0, $6sRZo.ClientCtrl).client().getConnectors();
        return !window.ethereum && (0, $6sRZo.CoreUtil).isMobile() && (t = t.filter(({ id: a  })=>a !== "injected" && a !== $a00eed0e4f95cd61$var$Z.metaMask)), t;
    },
    walletTemplatesWithRecent (e, t) {
        let a = [
            ...e
        ];
        if (t) {
            const n = $a00eed0e4f95cd61$var$h.getRecentWallet();
            a = a.filter((o)=>!o.values.includes(n?.name)), a.splice(1, 0, t);
        }
        return a;
    },
    deduplicateExplorerListingsFromConnectors (e) {
        const { isStandalone: t  } = (0, $6sRZo.OptionsCtrl).state;
        if (t) return e;
        const a = (0, $6sRZo.ClientCtrl).client().getConnectors().map(({ name: n  })=>n.toUpperCase());
        return e.filter(({ name: n  })=>!a.includes(n.toUpperCase()));
    }
}, $a00eed0e4f95cd61$var$wa = (0, $5Oejw.css)`.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.w3m-desktop-title,.w3m-mobile-title{display:flex;align-items:center}.w3m-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.w3m-desktop-title{margin-bottom:10px;padding:0 10px}.w3m-subtitle{display:flex;align-items:center}.w3m-subtitle:last-child path{fill:var(--w3m-color-fg-3)}.w3m-desktop-title svg,.w3m-mobile-title svg{margin-right:6px}.w3m-desktop-title path,.w3m-mobile-title path{fill:var(--w3m-color-fg-accent)}`;
var $a00eed0e4f95cd61$var$ba = Object.defineProperty, $a00eed0e4f95cd61$var$fa = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$ya = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$fa(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$ba(t, a, o), o;
};
let $a00eed0e4f95cd61$var$Ke = class extends (0, $e9IBe.LitElement) {
    onDesktopWallet(e) {
        (0, $6sRZo.RouterCtrl).push("DesktopConnector", {
            DesktopConnector: e
        });
    }
    onInjectedWallet() {
        (0, $6sRZo.RouterCtrl).push("InjectedConnector");
    }
    onInstallConnector() {
        (0, $6sRZo.RouterCtrl).push("InstallConnector", {
            InstallConnector: {
                id: "metaMask",
                name: "MetaMask",
                isMobile: !0,
                url: "https://metamask.io"
            }
        });
    }
    async onConnectorWallet(e) {
        window.ethereum ? e === "injected" || e === $a00eed0e4f95cd61$var$Z.metaMask ? this.onInjectedWallet() : await $a00eed0e4f95cd61$var$h.handleConnectorConnection(e) : this.onInstallConnector();
    }
    desktopWalletsTemplate() {
        const { desktopWallets: e  } = (0, $6sRZo.ConfigCtrl).state;
        return e?.map(({ id: t , name: a , links: { universal: n , native: o  }  })=>(0, $hZNzg.html)`<w3m-wallet-button walletId="${t}" name="${a}" .onClick="${()=>this.onDesktopWallet({
                    name: a,
                    walletId: t,
                    universal: n,
                    native: o
                })}"></w3m-wallet-button>`);
    }
    previewWalletsTemplate() {
        let e = $a00eed0e4f95cd61$var$R.allowedExplorerListings((0, $6sRZo.ExplorerCtrl).state.previewWallets);
        return e = $a00eed0e4f95cd61$var$R.deduplicateExplorerListingsFromConnectors(e), e.map(({ name: t , desktop: { universal: a , native: n  } , homepage: o , image_url: r , id: i  })=>(0, $hZNzg.html)`<w3m-wallet-button src="${r.lg}" name="${t}" .onClick="${()=>this.onDesktopWallet({
                    walletId: i,
                    name: t,
                    native: n,
                    universal: a || o,
                    icon: r.lg
                })}"></w3m-wallet-button>`);
    }
    connectorWalletsTemplate() {
        return $a00eed0e4f95cd61$var$R.connectorWallets().map(({ id: e , name: t , ready: a  })=>(0, $hZNzg.html)`<w3m-wallet-button .installed="${[
                "injected",
                "metaMask"
            ].includes(e) && a}" name="${t}" walletId="${e}" .onClick="${async ()=>this.onConnectorWallet(e)}"></w3m-wallet-button>`);
    }
    recentWalletTemplate() {
        const e = $a00eed0e4f95cd61$var$h.getRecentWallet();
        if (!e) return;
        const { id: t , name: a , links: n , image: o  } = e;
        return (0, $hZNzg.html)`<w3m-wallet-button .recent="${!0}" name="${a}" walletId="${(0, $ioFkT.ifDefined)(t)}" src="${(0, $ioFkT.ifDefined)(o)}" .onClick="${()=>this.onDesktopWallet({
                name: a,
                walletId: t,
                universal: n?.universal,
                native: n?.native,
                icon: o
            })}"></w3m-wallet-button>`;
    }
    render() {
        const { standaloneUri: e  } = (0, $6sRZo.OptionsCtrl).state, t = this.desktopWalletsTemplate(), a = this.previewWalletsTemplate(), n = this.connectorWalletsTemplate(), o = this.recentWalletTemplate(), r = [
            ...t ?? [],
            ...a
        ], i = [
            ...n,
            ...r
        ], c = $a00eed0e4f95cd61$var$R.walletTemplatesWithRecent(i, o), m = $a00eed0e4f95cd61$var$R.walletTemplatesWithRecent(r, o), s = e ? m : c, d = s.length > 4;
        let v = [];
        d ? v = s.filter((C)=>!C.values.includes($a00eed0e4f95cd61$var$Z.coinbaseWallet)).slice(0, 3) : v = s;
        const O = Boolean(v.length);
        return (0, $hZNzg.html)`<w3m-modal-header border="${!0}" title="Connect your wallet" .onAction="${$a00eed0e4f95cd61$var$h.handleUriCopy}" .actionIcon="${$a00eed0e4f95cd61$var$g.COPY_ICON}"></w3m-modal-header><w3m-modal-content><div class="w3m-mobile-title"><div class="w3m-subtitle">${$a00eed0e4f95cd61$var$g.MOBILE_ICON}<w3m-text variant="small-normal" color="accent">Mobile</w3m-text></div><div class="w3m-subtitle">${$a00eed0e4f95cd61$var$g.SCAN_ICON}<w3m-text variant="small-normal" color="secondary">Scan with your wallet</w3m-text></div></div><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>${O ? (0, $hZNzg.html)`<w3m-modal-footer><div class="w3m-desktop-title">${$a00eed0e4f95cd61$var$g.DESKTOP_ICON}<w3m-text variant="small-normal" color="accent">Desktop</w3m-text></div><div class="w3m-grid">${v} ${d ? (0, $hZNzg.html)`<w3m-view-all-wallets-button></w3m-view-all-wallets-button>` : null}</div></w3m-modal-footer>` : null}`;
    }
};
$a00eed0e4f95cd61$var$Ke.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$wa
], $a00eed0e4f95cd61$var$Ke = $a00eed0e4f95cd61$var$ya([
    (0, $fWcHw.customElement)("w3m-desktop-wallet-selection")
], $a00eed0e4f95cd61$var$Ke);
const $a00eed0e4f95cd61$var$xa = (0, $5Oejw.css)`div{background-color:var(--w3m-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--w3m-color-bg-3);text-align:center}a{color:var(--w3m-color-fg-accent);text-decoration:none;transition:opacity .2s ease-in-out}a:hover{opacity:.8}`;
var $a00eed0e4f95cd61$var$Ca = Object.defineProperty, $a00eed0e4f95cd61$var$ka = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$$a = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$ka(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$Ca(t, a, o), o;
};
let $a00eed0e4f95cd61$var$Ye = class extends (0, $e9IBe.LitElement) {
    render() {
        const { termsOfServiceUrl: e , privacyPolicyUrl: t  } = (0, $6sRZo.ConfigCtrl).state;
        return e ?? t ? (0, $hZNzg.html)`<div><w3m-text variant="small-normal" color="secondary">By connecting your wallet, you agree to our<br>${e ? (0, $hZNzg.html)`<a href="${e}" target="_blank" rel="noopener noreferrer">Terms of Service</a>` : null} ${e && t ? "and" : null} ${t ? (0, $hZNzg.html)`<a href="${t}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>` : null}</w3m-text></div>` : null;
    }
};
$a00eed0e4f95cd61$var$Ye.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$xa
], $a00eed0e4f95cd61$var$Ye = $a00eed0e4f95cd61$var$$a([
    (0, $fWcHw.customElement)("w3m-legal-notice")
], $a00eed0e4f95cd61$var$Ye);
const $a00eed0e4f95cd61$var$Oa = (0, $5Oejw.css)`.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
var $a00eed0e4f95cd61$var$Ia = Object.defineProperty, $a00eed0e4f95cd61$var$Ea = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$Ma = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$Ea(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$Ia(t, a, o), o;
};
let $a00eed0e4f95cd61$var$Xe = class extends (0, $e9IBe.LitElement) {
    onGoToQrcode() {
        (0, $6sRZo.RouterCtrl).push("Qrcode");
    }
    async onConnectorWallet(e) {
        await $a00eed0e4f95cd61$var$h.handleConnectorConnection(e);
    }
    mobileWalletsTemplate() {
        const { mobileWallets: e  } = (0, $6sRZo.ConfigCtrl).state, t = $a00eed0e4f95cd61$var$R.walletsWithInjected(e);
        if (t.length) return t.map(({ id: a , name: n , links: { universal: o , native: r  }  })=>(0, $hZNzg.html)`<w3m-wallet-button name="${n}" walletId="${a}" .onClick="${async ()=>$a00eed0e4f95cd61$var$h.handleMobileLinking({
                    links: {
                        native: r,
                        universal: o
                    },
                    name: n,
                    id: a
                })}"></w3m-wallet-button>`);
    }
    previewWalletsTemplate() {
        const { previewWallets: e  } = (0, $6sRZo.ExplorerCtrl).state;
        let t = $a00eed0e4f95cd61$var$R.walletsWithInjected(e);
        return t = $a00eed0e4f95cd61$var$R.allowedExplorerListings(t), t = $a00eed0e4f95cd61$var$R.deduplicateExplorerListingsFromConnectors(t), t.map(({ image_url: a , name: n , mobile: { native: o , universal: r  } , id: i  })=>(0, $hZNzg.html)`<w3m-wallet-button name="${n}" src="${a.lg}" .onClick="${async ()=>$a00eed0e4f95cd61$var$h.handleMobileLinking({
                    links: {
                        native: o,
                        universal: r
                    },
                    name: n,
                    id: i,
                    image: a.lg
                })}"></w3m-wallet-button>`);
    }
    connectorWalletsTemplate() {
        let e = $a00eed0e4f95cd61$var$R.connectorWallets();
        return window.ethereum || (e = e.filter(({ id: t  })=>t !== "injected" && t !== $a00eed0e4f95cd61$var$Z.metaMask)), e.map(({ name: t , id: a , ready: n  })=>(0, $hZNzg.html)`<w3m-wallet-button .installed="${[
                "injected",
                "metaMask"
            ].includes(a) && n}" name="${t}" walletId="${a}" .onClick="${async ()=>this.onConnectorWallet(a)}"></w3m-wallet-button>`);
    }
    recentWalletTemplate() {
        const e = $a00eed0e4f95cd61$var$h.getRecentWallet();
        if (!e) return;
        const { id: t , name: a , links: n , image: o  } = e;
        return (0, $hZNzg.html)`<w3m-wallet-button .recent="${!0}" name="${a}" walletId="${(0, $ioFkT.ifDefined)(t)}" src="${(0, $ioFkT.ifDefined)(o)}" .onClick="${async ()=>$a00eed0e4f95cd61$var$h.handleMobileLinking({
                name: a,
                id: t,
                links: n,
                image: o
            })}"></w3m-wallet-button>`;
    }
    render() {
        const { standaloneUri: e  } = (0, $6sRZo.OptionsCtrl).state, t = this.connectorWalletsTemplate(), a = this.mobileWalletsTemplate(), n = this.previewWalletsTemplate(), o = this.recentWalletTemplate(), r = a ?? n, i = [
            ...t,
            ...r
        ], c = $a00eed0e4f95cd61$var$R.walletTemplatesWithRecent(i, o), m = $a00eed0e4f95cd61$var$R.walletTemplatesWithRecent(r, o), s = e ? m : c, d = s.length > 8;
        let v = [];
        d ? v = s.filter((E)=>!E.values.includes($a00eed0e4f95cd61$var$Z.coinbaseWallet)).slice(0, 7) : v = s;
        const O = v.slice(0, 4), C = v.slice(4, 8), N = Boolean(v.length);
        return (0, $hZNzg.html)`<w3m-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${$a00eed0e4f95cd61$var$g.QRCODE_ICON}"></w3m-modal-header>${N ? (0, $hZNzg.html)`<w3m-modal-content><div class="w3m-grid">${O} ${C.length ? (0, $hZNzg.html)`${C} ${d ? (0, $hZNzg.html)`<w3m-view-all-wallets-button></w3m-view-all-wallets-button>` : null}` : null}</div></w3m-modal-content>` : null}`;
    }
};
$a00eed0e4f95cd61$var$Xe.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$Oa
], $a00eed0e4f95cd61$var$Xe = $a00eed0e4f95cd61$var$Ma([
    (0, $fWcHw.customElement)("w3m-mobile-wallet-selection")
], $a00eed0e4f95cd61$var$Xe);
const $a00eed0e4f95cd61$var$Wa = (0, $5Oejw.css)`:host{all:initial}.w3m-overlay{inset:0;position:fixed;z-index:var(--w3m-modal-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,.3);opacity:0;pointer-events:none}.w3m-open{pointer-events:auto}.w3m-container{position:relative;max-width:360px;width:100%;outline:0}.w3m-card{width:100%;position:relative;transform:translateY(5px);border-radius:30px;overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--w3m-color-overlay);background-color:var(--w3m-color-bg-1);color:var(--w3m-color-fg-1)}@media(max-width:600px){.w3m-container{max-width:440px}.w3m-card{border-radius:40px 40px 0 0}.w3m-overlay{align-items:flex-end}}@media(max-width:600px){.w3m-container{max-width:440px}.w3m-card{transform:translateY(5px);border-radius:40px 40px 0 0}.w3m-overlay{align-items:flex-end}}`;
var $a00eed0e4f95cd61$var$Aa = Object.defineProperty, $a00eed0e4f95cd61$var$La = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$Le = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$La(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$Aa(t, a, o), o;
};
let $a00eed0e4f95cd61$export$8f54aa55129a8184 = class extends (0, $e9IBe.LitElement) {
    constructor(){
        if (super(), this.open = !1, this.preload = !0, this.activeChainId = void 0, this.unsubscribeModal = void 0, this.unsubscribeConfig = void 0, this.unwatchAccount = void 0, this.unwatchNetwork = void 0, this.abortController = void 0, $a00eed0e4f95cd61$var$u.setTheme(), this.unsubscribeConfig = (0, $6sRZo.ConfigCtrl).subscribe($a00eed0e4f95cd61$var$u.setTheme), this.unsubscribeModal = (0, $6sRZo.ModalCtrl).subscribe((e)=>{
            e.open ? this.onOpenModalEvent() : this.onCloseModalEvent();
        }), !(0, $6sRZo.OptionsCtrl).state.isStandalone) {
            (0, $6sRZo.OptionsCtrl).getAccount();
            const e = (0, $6sRZo.OptionsCtrl).getSelectedChain();
            this.activeChainId = e?.id, this.fetchEnsProfile(), this.fetchBalance(), this.unwatchNetwork = (0, $6sRZo.ClientCtrl).client().watchNetwork((t)=>{
                const a = t.chain;
                a && this.activeChainId !== a.id && ((0, $6sRZo.OptionsCtrl).setSelectedChain(a), this.activeChainId = a.id, (0, $6sRZo.OptionsCtrl).resetBalance(), this.fetchBalance());
            }), this.unwatchAccount = (0, $6sRZo.ClientCtrl).client().watchAccount((t)=>{
                const { address: a  } = (0, $6sRZo.OptionsCtrl).state;
                t.address !== a && (this.fetchEnsProfile(t.address), this.fetchBalance(t.address)), (0, $6sRZo.OptionsCtrl).setAddress(t.address), (0, $6sRZo.OptionsCtrl).setIsConnected(t.isConnected);
            });
        }
        this.preloadModalData();
    }
    disconnectedCallback() {
        var e, t, a, n;
        (e = this.unsubscribeModal) == null || e.call(this), (t = this.unsubscribeConfig) == null || t.call(this), (a = this.unwatchAccount) == null || a.call(this), (n = this.unwatchNetwork) == null || n.call(this);
    }
    get overlayEl() {
        return $a00eed0e4f95cd61$var$h.getShadowRootElement(this, ".w3m-overlay");
    }
    get containerEl() {
        return $a00eed0e4f95cd61$var$h.getShadowRootElement(this, ".w3m-container");
    }
    async fetchEnsProfile(e) {
        try {
            if ((0, $6sRZo.ConfigCtrl).state.enableAccountView) {
                (0, $6sRZo.OptionsCtrl).setProfileLoading(!0);
                const t = e ?? (0, $6sRZo.OptionsCtrl).state.address, { id: a  } = (0, $6sRZo.ClientCtrl).client().getDefaultChain();
                if (t && a === 1) {
                    const [n, o] = await Promise.all([
                        (0, $6sRZo.ClientCtrl).client().fetchEnsName({
                            address: t,
                            chainId: 1
                        }),
                        (0, $6sRZo.ClientCtrl).client().fetchEnsAvatar({
                            address: t,
                            chainId: 1
                        })
                    ]);
                    o && await $a00eed0e4f95cd61$var$h.preloadImage(o), (0, $6sRZo.OptionsCtrl).setProfileName(n), (0, $6sRZo.OptionsCtrl).setProfileAvatar(o);
                }
            }
        } catch (t) {
            console.error(t), (0, $6sRZo.ToastCtrl).openToast($a00eed0e4f95cd61$var$h.getErrorMessage(t), "error");
        } finally{
            (0, $6sRZo.OptionsCtrl).setProfileLoading(!1);
        }
    }
    async fetchBalance(e) {
        try {
            if ((0, $6sRZo.ConfigCtrl).state.enableAccountView) {
                (0, $6sRZo.OptionsCtrl).setBalanceLoading(!0);
                const t = e ?? (0, $6sRZo.OptionsCtrl).state.address;
                if (t) {
                    const a = await (0, $6sRZo.ClientCtrl).client().fetchBalance({
                        address: t
                    });
                    (0, $6sRZo.OptionsCtrl).setBalance({
                        amount: a.formatted,
                        symbol: a.symbol
                    });
                }
            }
        } catch (t) {
            console.error(t), (0, $6sRZo.ToastCtrl).openToast($a00eed0e4f95cd61$var$h.getErrorMessage(t), "error");
        } finally{
            (0, $6sRZo.OptionsCtrl).setBalanceLoading(!1);
        }
    }
    toggleBodyScroll(e) {
        if (document.querySelector("body")) {
            if (e) {
                const t = document.getElementById("w3m-styles");
                t?.remove();
            } else document.head.insertAdjacentHTML("beforeend", '<style id="w3m-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>');
        }
    }
    async preloadExplorerData() {
        var e;
        const { standaloneChains: t , chains: a , walletConnectVersion: n  } = (0, $6sRZo.OptionsCtrl).state, o = t?.join(",");
        await Promise.all([
            (0, $6sRZo.ExplorerCtrl).getPreviewWallets({
                page: 1,
                entries: 10,
                chains: o,
                device: (0, $6sRZo.CoreUtil).isMobile() ? "mobile" : "desktop",
                version: n
            }),
            (0, $6sRZo.ExplorerCtrl).getRecomendedWallets()
        ]), (0, $6sRZo.OptionsCtrl).setIsDataLoaded(!0);
        const { previewWallets: r , recomendedWallets: i  } = (0, $6sRZo.ExplorerCtrl).state, c = (e = a?.map((s)=>$a00eed0e4f95cd61$var$h.getChainIcon(s.id))) != null ? e : [], m = [
            ...r,
            ...i
        ].map((s)=>s.image_url.lg);
        await this.preloadExplorerImages([
            ...c,
            ...m
        ]);
    }
    async preloadExplorerImages(e) {
        e.length && await Promise.all(e.map(async (t)=>$a00eed0e4f95cd61$var$h.preloadImage(t)));
    }
    async preloadCustomImages() {
        const e = $a00eed0e4f95cd61$var$h.getCustomImageUrls();
        e.length && await Promise.all(e.map(async (t)=>$a00eed0e4f95cd61$var$h.preloadImage(t)));
    }
    async preloadConnectorImages() {
        if (!(0, $6sRZo.OptionsCtrl).state.isStandalone) {
            const e = $a00eed0e4f95cd61$var$h.getConnectorImageUrls();
            e.length && await Promise.all(e.map(async (t)=>$a00eed0e4f95cd61$var$h.preloadImage(t)));
        }
    }
    async preloadModalData() {
        try {
            this.preload && (this.preload = !1, await Promise.all([
                this.preloadExplorerData(),
                this.preloadCustomImages(),
                this.preloadConnectorImages()
            ]));
        } catch (e) {
            console.error(e), (0, $6sRZo.ToastCtrl).openToast("Failed preloading", "error");
        }
    }
    onCloseModal(e) {
        e.target === e.currentTarget && (0, $6sRZo.ModalCtrl).close();
    }
    async onOpenModalEvent() {
        await this.preloadModalData(), this.toggleBodyScroll(!1);
        const e = .2;
        await (0, $kT2uv.animate)(this.containerEl, {
            y: 0
        }, {
            duration: 0
        }).finished, (0, $kT2uv.animate)(this.overlayEl, {
            opacity: [
                0,
                1
            ]
        }, {
            duration: .2,
            delay: e
        }), (0, $kT2uv.animate)(this.containerEl, $a00eed0e4f95cd61$var$h.isMobileAnimation() ? {
            y: [
                "50vh",
                0
            ]
        } : {
            scale: [
                .98,
                1
            ]
        }, {
            scale: {
                easing: (0, $8HbD4.spring)({
                    velocity: .4
                })
            },
            y: {
                easing: (0, $8HbD4.spring)({
                    mass: .5
                })
            },
            delay: e
        }), this.addKeyboardEvents(), this.open = !0;
    }
    async onCloseModalEvent() {
        this.toggleBodyScroll(!0), this.removeKeyboardEvents(), await Promise.all([
            (0, $kT2uv.animate)(this.containerEl, $a00eed0e4f95cd61$var$h.isMobileAnimation() ? {
                y: [
                    0,
                    "50vh"
                ]
            } : {
                scale: [
                    1,
                    .98
                ]
            }, {
                scale: {
                    easing: (0, $8HbD4.spring)({
                        velocity: 0
                    })
                },
                y: {
                    easing: (0, $8HbD4.spring)({
                        mass: .5
                    })
                }
            }).finished,
            (0, $kT2uv.animate)(this.overlayEl, {
                opacity: [
                    1,
                    0
                ]
            }, {
                duration: .2
            }).finished
        ]), this.open = !1;
    }
    addKeyboardEvents() {
        this.abortController = new AbortController, window.addEventListener("keydown", (e)=>{
            var t;
            e.key === "Escape" ? (0, $6sRZo.ModalCtrl).close() : e.key === "Tab" && ((t = e.target) != null && t.tagName.includes("W3M-") || this.containerEl.focus());
        }, this.abortController), this.containerEl.focus();
    }
    removeKeyboardEvents() {
        var e;
        (e = this.abortController) == null || e.abort(), this.abortController = void 0;
    }
    render() {
        const e = {
            "w3m-overlay": !0,
            "w3m-open": this.open
        };
        return (0, $hZNzg.html)`<div id="w3m-modal" class="${(0, $lpVpn.classMap)(e)}" @click="${this.onCloseModal}" role="alertdialog" aria-modal="true"><div class="w3m-container" tabindex="0">${this.open ? (0, $hZNzg.html)`<w3m-modal-backcard></w3m-modal-backcard><div class="w3m-card"><w3m-modal-router></w3m-modal-router><w3m-modal-toast></w3m-modal-toast></div>` : null}</div></div>`;
    }
};
$a00eed0e4f95cd61$export$8f54aa55129a8184.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$Wa
], $a00eed0e4f95cd61$var$Le([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$export$8f54aa55129a8184.prototype, "open", 2), $a00eed0e4f95cd61$var$Le([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$export$8f54aa55129a8184.prototype, "preload", 2), $a00eed0e4f95cd61$var$Le([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$export$8f54aa55129a8184.prototype, "activeChainId", 2), $a00eed0e4f95cd61$export$8f54aa55129a8184 = $a00eed0e4f95cd61$var$Le([
    (0, $fWcHw.customElement)("w3m-modal")
], $a00eed0e4f95cd61$export$8f54aa55129a8184);
const $a00eed0e4f95cd61$var$ja = (0, $5Oejw.css)`:host{all:initial}w3m-network-image{margin-left:-6px;margin-right:6px;width:28px;height:28px}`;
var $a00eed0e4f95cd61$var$Sa = Object.defineProperty, $a00eed0e4f95cd61$var$Pa = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$je = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$Pa(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$Sa(t, a, o), o;
};
let $a00eed0e4f95cd61$export$da7ff4df93a68d98 = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(), this.chainId = "", this.label = "", this.wrongNetwork = !1, this.unsubscribeNetwork = void 0, $a00eed0e4f95cd61$var$h.rejectStandaloneButtonComponent();
        const { selectedChain: e  } = (0, $6sRZo.OptionsCtrl).state;
        this.onSetChainData(e), this.unsubscribeNetwork = (0, $6sRZo.OptionsCtrl).subscribe(({ selectedChain: t  })=>{
            this.onSetChainData(t);
        });
    }
    disconnectedCallback() {
        var e;
        (e = this.unsubscribeNetwork) == null || e.call(this);
    }
    onSetChainData(e) {
        if (e) {
            const { chains: t  } = (0, $6sRZo.OptionsCtrl).state, a = t?.map((n)=>n.id);
            this.chainId = e.id.toString(), this.wrongNetwork = !(a != null && a.includes(e.id)), this.label = this.wrongNetwork ? "Wrong Network" : e.name;
        }
    }
    onClick() {
        (0, $6sRZo.ModalCtrl).open({
            route: "SelectNetwork"
        });
    }
    render() {
        var e;
        const { chains: t  } = (0, $6sRZo.OptionsCtrl).state, a = t && t.length > 1;
        return (0, $hZNzg.html)`<w3m-button-big @click="${this.onClick}" ?disabled="${!a}"><w3m-network-image chainId="${(0, $ioFkT.ifDefined)(this.chainId)}"></w3m-network-image><w3m-text variant="medium-normal" color="inverse">${(e = this.label) != null && e.length ? this.label : "Select Network"}</w3m-text></w3m-button-big>`;
    }
};
$a00eed0e4f95cd61$export$da7ff4df93a68d98.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$ja
], $a00eed0e4f95cd61$var$je([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$export$da7ff4df93a68d98.prototype, "chainId", 2), $a00eed0e4f95cd61$var$je([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$export$da7ff4df93a68d98.prototype, "label", 2), $a00eed0e4f95cd61$var$je([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$export$da7ff4df93a68d98.prototype, "wrongNetwork", 2), $a00eed0e4f95cd61$export$da7ff4df93a68d98 = $a00eed0e4f95cd61$var$je([
    (0, $fWcHw.customElement)("w3m-network-switch")
], $a00eed0e4f95cd61$export$da7ff4df93a68d98);
const $a00eed0e4f95cd61$var$_a = (0, $5Oejw.css)`button{display:flex;flex-direction:column;padding:5px 10px;border-radius:10px;transition:background-color .2s ease;height:100%;justify-content:flex-start}.w3m-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:15px;justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--w3m-color-bg-2);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay)}button:hover{background-color:var(--w3m-color-overlay)}.w3m-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:8px;border:1px solid var(--w3m-color-overlay)}.w3m-icons svg{width:21px;height:21px}.w3m-icons img:nth-child(1),.w3m-icons img:nth-child(2),.w3m-icons svg:nth-child(1),.w3m-icons svg:nth-child(2){margin-bottom:4px}w3m-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
var $a00eed0e4f95cd61$var$Da = Object.defineProperty, $a00eed0e4f95cd61$var$Ta = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$Na = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$Ta(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$Da(t, a, o), o;
};
let $a00eed0e4f95cd61$var$Qe = class extends (0, $e9IBe.LitElement) {
    onClick() {
        (0, $6sRZo.RouterCtrl).push("WalletExplorer");
    }
    render() {
        const { previewWallets: e  } = (0, $6sRZo.ExplorerCtrl).state, t = $a00eed0e4f95cd61$var$h.getCustomWallets(), a = [
            ...e,
            ...t
        ].reverse().slice(0, 4);
        return (0, $hZNzg.html)`<button @click="${this.onClick}"><div class="w3m-icons">${a.map((n)=>{
            var o;
            const r = (o = n.image_url) == null ? void 0 : o.lg;
            if (r) return (0, $hZNzg.html)`<img src="${r}">`;
            const i = $a00eed0e4f95cd61$var$h.getWalletId(n.id), c = $a00eed0e4f95cd61$var$h.getWalletIcon(i);
            return c ? (0, $hZNzg.html)`<img src="${c}">` : $a00eed0e4f95cd61$var$g.WALLET_PLACEHOLDER;
        })}</div><w3m-text variant="xsmall-normal">View All</w3m-text></button>`;
    }
};
$a00eed0e4f95cd61$var$Qe.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$_a
], $a00eed0e4f95cd61$var$Qe = $a00eed0e4f95cd61$var$Na([
    (0, $fWcHw.customElement)("w3m-view-all-wallets-button")
], $a00eed0e4f95cd61$var$Qe);
const $a00eed0e4f95cd61$var$Ra = (0, $5Oejw.css)`.w3m-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
var $a00eed0e4f95cd61$var$Ba = Object.defineProperty, $a00eed0e4f95cd61$var$Ua = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$Ct = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$Ua(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$Ba(t, a, o), o;
};
let $a00eed0e4f95cd61$var$Se = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(), this.uri = "", this.createConnectionAndWait();
    }
    get overlayEl() {
        return $a00eed0e4f95cd61$var$h.getShadowRootElement(this, ".w3m-qr-container");
    }
    async createConnectionAndWait(e = 0) {
        var t;
        try {
            const { standaloneUri: a  } = (0, $6sRZo.OptionsCtrl).state;
            a ? setTimeout(()=>this.uri = a, 0) : (await (0, $6sRZo.ClientCtrl).client().connectWalletConnect((n)=>this.uri = n, (t = (0, $6sRZo.OptionsCtrl).state.selectedChain) == null ? void 0 : t.id), (0, $6sRZo.ModalCtrl).close());
        } catch (a) {
            console.error(a), (0, $6sRZo.ToastCtrl).openToast("Connection request declined", "error"), e < 2 && this.createConnectionAndWait(e + 1);
        }
    }
    render() {
        return (0, $hZNzg.html)`<div class="w3m-qr-container">${this.uri ? (0, $hZNzg.html)`<w3m-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}"></w3m-qrcode>` : (0, $hZNzg.html)`<w3m-spinner></w3m-spinner>`}</div>`;
    }
};
$a00eed0e4f95cd61$var$Se.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$Ra
], $a00eed0e4f95cd61$var$Ct([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$var$Se.prototype, "uri", 2), $a00eed0e4f95cd61$var$Se = $a00eed0e4f95cd61$var$Ct([
    (0, $fWcHw.customElement)("w3m-walletconnect-qr")
], $a00eed0e4f95cd61$var$Se);
const $a00eed0e4f95cd61$var$Ha = (0, $5Oejw.css)`.w3m-profile{display:flex;justify-content:space-between;align-items:flex-start;padding-top:20px}.w3m-connection-badge{background-color:var(--w3m-color-bg-2);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);padding:6px 10px 6px 26px;position:relative;border-radius:28px}.w3m-connection-badge::before{content:'';position:absolute;width:10px;height:10px;left:10px;background-color:var(--w3m-color-success);border-radius:50%;top:50%;margin-top:-5px;box-shadow:0 1px 4px 1px var(--w3m-color-success),inset 0 0 0 1px var(--w3m-color-overlay)}.w3m-footer{display:flex;justify-content:space-between}w3m-address-text{margin-top:10px;display:block}.w3m-balance{border-top:1px solid var(--w3m-color-bg-2);padding:11px 20px}`;
var $a00eed0e4f95cd61$var$Za = Object.defineProperty, $a00eed0e4f95cd61$var$Fa = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$za = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$Fa(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$Za(t, a, o), o;
};
let $a00eed0e4f95cd61$var$Je = class extends (0, $e9IBe.LitElement) {
    onDisconnect() {
        (0, $6sRZo.ModalCtrl).close(), (0, $6sRZo.ClientCtrl).client().disconnect(), (0, $6sRZo.OptionsCtrl).resetAccount();
    }
    async onCopyAddress() {
        var e;
        await navigator.clipboard.writeText((e = (0, $6sRZo.OptionsCtrl).state.address) != null ? e : ""), (0, $6sRZo.ToastCtrl).openToast("Address copied", "success");
    }
    render() {
        return (0, $hZNzg.html)`<w3m-modal-content><div class="w3m-profile"><div class="w3m-info"><w3m-avatar size="medium"></w3m-avatar><w3m-address-text variant="modal"></w3m-address-text></div><div class="w3m-connection-badge"><w3m-text variant="small-normal" color="secondary">Connected</w3m-text></div></div></w3m-modal-content><div class="w3m-balance"><w3m-balance></w3m-balance></div><w3m-modal-footer><div class="w3m-footer"><w3m-account-network-button></w3m-account-network-button><w3m-box-button label="Copy Address" .onClick="${this.onCopyAddress}" .icon="${$a00eed0e4f95cd61$var$g.ACCOUNT_COPY}"></w3m-box-button><w3m-box-button label="Disconnect" .onClick="${this.onDisconnect}" .icon="${$a00eed0e4f95cd61$var$g.ACCOUNT_DISCONNECT}"></w3m-box-button></div></w3m-modal-footer>`;
    }
};
$a00eed0e4f95cd61$var$Je.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$Ha
], $a00eed0e4f95cd61$var$Je = $a00eed0e4f95cd61$var$za([
    (0, $fWcHw.customElement)("w3m-account-view")
], $a00eed0e4f95cd61$var$Je);
var $a00eed0e4f95cd61$var$Va = Object.defineProperty, $a00eed0e4f95cd61$var$Ga = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$qa = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$Ga(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$Va(t, a, o), o;
};
let $a00eed0e4f95cd61$var$et = class extends (0, $e9IBe.LitElement) {
    viewTemplate() {
        return (0, $6sRZo.CoreUtil).isAndroid() ? (0, $hZNzg.html)`<w3m-android-wallet-selection></w3m-android-wallet-selection>` : (0, $6sRZo.CoreUtil).isMobile() ? (0, $hZNzg.html)`<w3m-mobile-wallet-selection></w3m-mobile-wallet-selection>` : (0, $hZNzg.html)`<w3m-desktop-wallet-selection></w3m-desktop-wallet-selection>`;
    }
    render() {
        return (0, $hZNzg.html)`${this.viewTemplate()}<w3m-legal-notice></w3m-legal-notice>`;
    }
};
$a00eed0e4f95cd61$var$et.styles = [
    $a00eed0e4f95cd61$var$u.globalCss
], $a00eed0e4f95cd61$var$et = $a00eed0e4f95cd61$var$qa([
    (0, $fWcHw.customElement)("w3m-connect-wallet-view")
], $a00eed0e4f95cd61$var$et);
const $a00eed0e4f95cd61$var$Ka = (0, $5Oejw.css)`.w3m-wrapper{display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:1/1;flex-direction:column}.w3m-connecting-title{display:flex;align-items:center;justify-content:center;margin-bottom:16px}w3m-spinner{margin-right:10px}w3m-wallet-image{border-radius:15px;width:25%;aspect-ratio:1/1;margin-bottom:20px}.w3m-install-actions{display:flex}.w3m-install-actions w3m-button{margin:0 5px;opacity:1}`;
var $a00eed0e4f95cd61$var$Ya = Object.defineProperty, $a00eed0e4f95cd61$var$Xa = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$kt = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$Xa(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$Ya(t, a, o), o;
};
let $a00eed0e4f95cd61$var$Pe = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(), this.uri = "", this.createConnectionAndWait();
    }
    getRouterData() {
        var e;
        const t = (e = (0, $6sRZo.RouterCtrl).state.data) == null ? void 0 : e.DesktopConnector;
        if (!t) throw new Error("Missing router data");
        return t;
    }
    onFormatAndRedirect(e) {
        const { native: t , universal: a , name: n  } = this.getRouterData();
        if (t) {
            const o = (0, $6sRZo.CoreUtil).formatNativeUrl(t, e, n);
            (0, $6sRZo.CoreUtil).openHref(o);
        } else if (a) {
            const o = (0, $6sRZo.CoreUtil).formatUniversalUrl(a, e, n);
            (0, $6sRZo.CoreUtil).openHref(o, "_blank");
        }
    }
    async createConnectionAndWait(e = 0) {
        var t;
        const { standaloneUri: a  } = (0, $6sRZo.OptionsCtrl).state, { name: n , walletId: o , native: r , universal: i , icon: c  } = this.getRouterData(), m = {
            name: n,
            id: o,
            links: {
                native: r,
                universal: i
            },
            image: c
        };
        if (a) $a00eed0e4f95cd61$var$h.setRecentWallet(m), this.onFormatAndRedirect(a);
        else try {
            await (0, $6sRZo.ClientCtrl).client().connectWalletConnect((s)=>{
                this.uri = s, this.onFormatAndRedirect(s);
            }, (t = (0, $6sRZo.OptionsCtrl).state.selectedChain) == null ? void 0 : t.id), $a00eed0e4f95cd61$var$h.setRecentWallet(m), (0, $6sRZo.ModalCtrl).close();
        } catch (s) {
            console.error(s), (0, $6sRZo.ToastCtrl).openToast("Connection request declined", "error"), e < 2 && this.createConnectionAndWait(e + 1);
        }
    }
    onConnectWithMobile() {
        (0, $6sRZo.RouterCtrl).push("Qrcode");
    }
    onGoToWallet() {
        const { universal: e , name: t  } = this.getRouterData();
        if (e) {
            const a = (0, $6sRZo.CoreUtil).formatUniversalUrl(e, this.uri, t);
            (0, $6sRZo.CoreUtil).openHref(a, "_blank");
        }
    }
    render() {
        const { name: e , icon: t , universal: a , walletId: n  } = this.getRouterData(), o = $a00eed0e4f95cd61$var$h.getWalletName(e);
        return (0, $hZNzg.html)`<w3m-modal-header title="${o}"></w3m-modal-header><w3m-modal-content><div class="w3m-wrapper">${t ? (0, $hZNzg.html)`<w3m-wallet-image src="${t}" size="lg"></w3m-wallet-image>` : (0, $hZNzg.html)`<w3m-wallet-image size="lg" walletid="${(0, $ioFkT.ifDefined)(n)}"></w3m-wallet-image>`}<div class="w3m-connecting-title"><w3m-spinner></w3m-spinner><w3m-text variant="large-bold" color="secondary">${`Continue in ${o}...`}</w3m-text></div><div class="w3m-install-actions"><w3m-button .onClick="${async ()=>this.createConnectionAndWait()}" .iconRight="${$a00eed0e4f95cd61$var$g.RETRY_ICON}">Retry</w3m-button>${a ? (0, $hZNzg.html)`<w3m-button .onClick="${this.onGoToWallet.bind(this)}" .iconLeft="${$a00eed0e4f95cd61$var$g.ARROW_UP_RIGHT_ICON}">Go to Wallet</w3m-button>` : (0, $hZNzg.html)`<w3m-button .onClick="${this.onConnectWithMobile}" .iconLeft="${$a00eed0e4f95cd61$var$g.MOBILE_ICON}">Connect with Mobile</w3m-button>`}</div></div></w3m-modal-content>`;
    }
};
$a00eed0e4f95cd61$var$Pe.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$Ka
], $a00eed0e4f95cd61$var$kt([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$var$Pe.prototype, "uri", 2), $a00eed0e4f95cd61$var$Pe = $a00eed0e4f95cd61$var$kt([
    (0, $fWcHw.customElement)("w3m-desktop-connector-view")
], $a00eed0e4f95cd61$var$Pe);
const $a00eed0e4f95cd61$var$Qa = (0, $5Oejw.css)`.w3m-info-text{margin:5px 0 15px;max-width:320px;text-align:center}.w3m-wallet-item{margin:0 -20px 0 0;padding-right:20px;display:flex;align-items:center;border-bottom:1px solid var(--w3m-color-bg-2)}.w3m-wallet-item:last-child{margin-bottom:-20px;border-bottom:0}.w3m-wallet-content{margin-left:20px;height:60px;display:flex;flex:1;align-items:center;justify-content:space-between}.w3m-footer-actions{display:flex;flex-direction:column;align-items:center;padding:20px 0;border-top:1px solid var(--w3m-color-bg-2)}w3m-wallet-image{display:block;width:40px;height:40px;border-radius:10px}`;
var $a00eed0e4f95cd61$var$Ja = Object.defineProperty, $a00eed0e4f95cd61$var$en = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$tn = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$en(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$Ja(t, a, o), o;
};
let $a00eed0e4f95cd61$var$tt = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(...arguments), this.explorerUrl = "https://explorer.walletconnect.com/";
    }
    onGet(e) {
        (0, $6sRZo.CoreUtil).openHref(e, "_blank");
    }
    onExplore() {
        (0, $6sRZo.CoreUtil).openHref(this.explorerUrl, "_blank");
    }
    render() {
        const { recomendedWallets: e  } = (0, $6sRZo.ExplorerCtrl).state, t = $a00eed0e4f95cd61$var$h.getCustomWallets().slice(0, 6), a = e.length, n = t.length;
        return (0, $hZNzg.html)`<w3m-modal-header title="Get a wallet"></w3m-modal-header><w3m-modal-content>${a ? e.map(({ name: o , image_url: r , homepage: i  })=>(0, $hZNzg.html)`<div class="w3m-wallet-item"><w3m-wallet-image src="${r.lg}"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-normal">${o}</w3m-text><w3m-button .iconRight="${$a00eed0e4f95cd61$var$g.ARROW_RIGHT_ICON}" .onClick="${()=>this.onGet(i)}">Get</w3m-button></div></div>`) : null} ${n ? t.map(({ name: o , id: r , links: i  })=>(0, $hZNzg.html)`<div class="w3m-wallet-item"><w3m-wallet-image walletId="${r}"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-normal">${o}</w3m-text><w3m-button .iconRight="${$a00eed0e4f95cd61$var$g.ARROW_RIGHT_ICON}" .onClick="${()=>this.onGet(i.universal)}">Get</w3m-button></div></div>`) : null}</w3m-modal-content><div class="w3m-footer-actions"><w3m-text variant="medium-normal">Not what you're looking for?</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With hundreds of wallets out there, there's something for everyone</w3m-text><w3m-button .onClick="${this.onExplore.bind(this)}" .iconRight="${$a00eed0e4f95cd61$var$g.ARROW_UP_RIGHT_ICON}">Explore Wallets</w3m-button></div>`;
    }
};
$a00eed0e4f95cd61$var$tt.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$Qa
], $a00eed0e4f95cd61$var$tt = $a00eed0e4f95cd61$var$tn([
    (0, $fWcHw.customElement)("w3m-get-wallet-view")
], $a00eed0e4f95cd61$var$tt);
const $a00eed0e4f95cd61$var$on = (0, $5Oejw.css)`.w3m-footer-actions{display:flex;justify-content:center}.w3m-footer-actions w3m-button{margin:0 5px}.w3m-info-container{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:20px}.w3m-info-container:last-child{margin-bottom:0}.w3m-info-text{margin-top:5px;text-align:center}.w3m-images svg{margin:0 2px 5px;width:55px;height:55px}.help-img-highlight{stroke:var(--w3m-color-overlay)}`;
var $a00eed0e4f95cd61$var$an = Object.defineProperty, $a00eed0e4f95cd61$var$nn = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$rn = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$nn(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$an(t, a, o), o;
};
let $a00eed0e4f95cd61$var$ot = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(...arguments), this.learnUrl = "https://ethereum.org/en/wallets/";
    }
    onGet() {
        (0, $6sRZo.RouterCtrl).push("GetWallet");
    }
    onLearnMore() {
        (0, $6sRZo.CoreUtil).openHref(this.learnUrl, "_blank");
    }
    render() {
        return (0, $hZNzg.html)`<w3m-modal-header title="What is a wallet?"></w3m-modal-header><w3m-modal-content><div class="w3m-info-container"><div class="w3m-images">${$a00eed0e4f95cd61$var$g.HELP_CHART_IMG} ${$a00eed0e4f95cd61$var$g.HELP_PAINTING_IMG} ${$a00eed0e4f95cd61$var$g.HELP_ETH_IMG}</div><w3m-text variant="medium-normal">A home for your digital assets</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs.</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">${$a00eed0e4f95cd61$var$g.HELP_KEY_IMG} ${$a00eed0e4f95cd61$var$g.HELP_USER_IMG} ${$a00eed0e4f95cd61$var$g.HELP_LOCK_IMG}</div><w3m-text variant="medium-normal">One login for all of web3</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">Log in to any app by connecting your wallet. Say goodbye to countless passwords!</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">${$a00eed0e4f95cd61$var$g.HELP_COMPAS_IMG} ${$a00eed0e4f95cd61$var$g.HELP_NOUN_IMG} ${$a00eed0e4f95cd61$var$g.HELP_DAO_IMG}</div><w3m-text variant="medium-normal">Your gateway to a new web</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.</w3m-text></div><div class="w3m-footer-actions"><w3m-button .onClick="${this.onGet.bind(this)}" .iconLeft="${$a00eed0e4f95cd61$var$g.WALLET_ICON}">Get a Wallet</w3m-button><w3m-button .onClick="${this.onLearnMore.bind(this)}" .iconRight="${$a00eed0e4f95cd61$var$g.ARROW_UP_RIGHT_ICON}">Learn More</w3m-button></div></w3m-modal-content>`;
    }
};
$a00eed0e4f95cd61$var$ot.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$on
], $a00eed0e4f95cd61$var$ot = $a00eed0e4f95cd61$var$rn([
    (0, $fWcHw.customElement)("w3m-help-view")
], $a00eed0e4f95cd61$var$ot);
const $a00eed0e4f95cd61$var$ln = (0, $5Oejw.css)`.w3m-injected-wrapper{display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:1/1;flex-direction:column}.w3m-connecting-title{display:flex;align-items:center;justify-content:center;margin-bottom:20px}w3m-spinner{margin-right:10px}w3m-wallet-image{border-radius:15px;width:25%;aspect-ratio:1/1;margin-bottom:20px}w3m-button{opacity:0}.w3m-injected-error w3m-button{opacity:1}`;
var $a00eed0e4f95cd61$var$sn = Object.defineProperty, $a00eed0e4f95cd61$var$cn = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$at = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$cn(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$sn(t, a, o), o;
};
let $a00eed0e4f95cd61$var$ye = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(), this.connecting = !0, this.error = !1, this.connector = (0, $6sRZo.ClientCtrl).client().getConnectorById("injected"), this.onConnect();
    }
    async onConnect() {
        const { ready: e  } = this.connector;
        e && (this.error = !1, this.connecting = !0, await $a00eed0e4f95cd61$var$h.handleConnectorConnection("injected", ()=>{
            this.error = !0, this.connecting = !1;
        }));
    }
    render() {
        const e = $a00eed0e4f95cd61$var$h.getWalletName(this.connector.name), t = $a00eed0e4f95cd61$var$h.getWalletId(this.connector.id), a = {
            "w3m-injected-wrapper": !0,
            "w3m-injected-error": this.error
        };
        return (0, $hZNzg.html)`<w3m-modal-header title="${e}"></w3m-modal-header><w3m-modal-content><div class="${(0, $lpVpn.classMap)(a)}"><w3m-wallet-image walletId="${t}" size="lg"></w3m-wallet-image><div class="w3m-connecting-title">${this.connecting ? (0, $hZNzg.html)`<w3m-spinner></w3m-spinner>` : null}<w3m-text variant="large-bold" color="${this.error ? "error" : "secondary"}">${this.error ? "Connection declined" : `Continue in ${e}...`}</w3m-text></div><w3m-button .onClick="${this.onConnect.bind(this)}" .disabled="${!this.error}" .iconRight="${$a00eed0e4f95cd61$var$g.RETRY_ICON}">Try Again</w3m-button></div></w3m-modal-content>`;
    }
};
$a00eed0e4f95cd61$var$ye.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$ln
], $a00eed0e4f95cd61$var$at([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$var$ye.prototype, "connecting", 2), $a00eed0e4f95cd61$var$at([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$var$ye.prototype, "error", 2), $a00eed0e4f95cd61$var$ye = $a00eed0e4f95cd61$var$at([
    (0, $fWcHw.customElement)("w3m-injected-connector-view")
], $a00eed0e4f95cd61$var$ye);
const $a00eed0e4f95cd61$var$dn = (0, $5Oejw.css)`.w3m-injected-wrapper{display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:1/1;flex-direction:column}.w3m-connecting-title{display:flex;align-items:center;justify-content:center;margin-bottom:16px}.w3m-install-title{display:flex;align-items:center;justify-content:center;flex-direction:column}.w3m-install-title w3m-text:last-child{margin-top:10px;max-width:240px}.w3m-install-actions{display:flex;margin-top:15px;align-items:center;flex-direction:column}@media(max-width:355px){.w3m-install-actions{flex-direction:column;align-items:center}}w3m-wallet-image{border-radius:15px;width:25%;aspect-ratio:1/1;margin-bottom:20px}w3m-button{opacity:0}.w3m-install-actions w3m-button{margin:5px;opacity:1}.w3m-info-text{text-align:center}`;
var $a00eed0e4f95cd61$var$hn = Object.defineProperty, $a00eed0e4f95cd61$var$mn = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$pn = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$mn(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$hn(t, a, o), o;
};
let $a00eed0e4f95cd61$var$nt = class extends (0, $e9IBe.LitElement) {
    getRouterData() {
        var e;
        const t = (e = (0, $6sRZo.RouterCtrl).state.data) == null ? void 0 : e.InstallConnector;
        if (!t) throw new Error("Missing router data");
        return t;
    }
    onInstall() {
        const { url: e  } = this.getRouterData();
        (0, $6sRZo.CoreUtil).openHref(e, "_blank");
    }
    onMobile() {
        const { name: e  } = this.getRouterData();
        (0, $6sRZo.RouterCtrl).push("ConnectWallet"), (0, $6sRZo.ToastCtrl).openToast(`Scan the code with ${e}`, "success");
    }
    render() {
        const { name: e , id: t , isMobile: a  } = this.getRouterData();
        return (0, $hZNzg.html)`<w3m-modal-header title="${e}"></w3m-modal-header><w3m-modal-content><div class="w3m-injected-wrapper"><w3m-wallet-image walletId="${t}" size="lg"></w3m-wallet-image><div class="w3m-install-title"><w3m-text variant="large-bold">Install ${e}</w3m-text><w3m-text color="secondary" variant="medium-thin" class="w3m-info-text">To connect ${e}, install the browser extension.</w3m-text></div><div class="w3m-install-actions"><w3m-button .onClick="${this.onInstall.bind(this)}" .iconLeft="${$a00eed0e4f95cd61$var$g.ARROW_DOWN_ICON}">Install Extension</w3m-button>${a ? (0, $hZNzg.html)`<w3m-button .onClick="${this.onMobile.bind(this)}" .iconLeft="${$a00eed0e4f95cd61$var$g.MOBILE_ICON}">${e} Mobile</w3m-button>` : null}</div></div></w3m-modal-content>`;
    }
};
$a00eed0e4f95cd61$var$nt.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$dn
], $a00eed0e4f95cd61$var$nt = $a00eed0e4f95cd61$var$pn([
    (0, $fWcHw.customElement)("w3m-install-connector-view")
], $a00eed0e4f95cd61$var$nt);
var $a00eed0e4f95cd61$var$un = Object.defineProperty, $a00eed0e4f95cd61$var$vn = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$gn = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$vn(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$un(t, a, o), o;
};
let $a00eed0e4f95cd61$var$rt = class extends (0, $e9IBe.LitElement) {
    render() {
        return (0, $hZNzg.html)`<w3m-modal-header title="Scan the code" .onAction="${$a00eed0e4f95cd61$var$h.handleUriCopy}" .actionIcon="${$a00eed0e4f95cd61$var$g.COPY_ICON}"></w3m-modal-header><w3m-modal-content><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>`;
    }
};
$a00eed0e4f95cd61$var$rt.styles = [
    $a00eed0e4f95cd61$var$u.globalCss
], $a00eed0e4f95cd61$var$rt = $a00eed0e4f95cd61$var$gn([
    (0, $fWcHw.customElement)("w3m-qrcode-view")
], $a00eed0e4f95cd61$var$rt);
const $a00eed0e4f95cd61$var$wn = (0, $5Oejw.css)`.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);margin:-5px -10px;justify-content:space-between}`;
var $a00eed0e4f95cd61$var$bn = Object.defineProperty, $a00eed0e4f95cd61$var$fn = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$yn = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$fn(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$bn(t, a, o), o;
};
let $a00eed0e4f95cd61$var$it = class extends (0, $e9IBe.LitElement) {
    async onSelectChain(e) {
        const { isConnected: t , selectedChain: a , walletConnectVersion: n  } = (0, $6sRZo.OptionsCtrl).state;
        t ? a?.id === e.id ? (0, $6sRZo.RouterCtrl).replace("Account") : n === 2 ? (await (0, $6sRZo.ClientCtrl).client().switchNetwork({
            chainId: e.id
        }), (0, $6sRZo.RouterCtrl).replace("Account")) : (0, $6sRZo.RouterCtrl).push("SwitchNetwork", {
            SwitchNetwork: e
        }) : ((0, $6sRZo.RouterCtrl).push("ConnectWallet"), (0, $6sRZo.OptionsCtrl).setSelectedChain(e));
    }
    render() {
        const { chains: e  } = (0, $6sRZo.OptionsCtrl).state;
        return (0, $hZNzg.html)`<w3m-modal-header title="Select network"></w3m-modal-header><w3m-modal-content><div class="w3m-grid">${e?.map((t)=>(0, $hZNzg.html)`<w3m-network-button name="${t.name}" chainId="${t.id}" .onClick="${async ()=>this.onSelectChain(t)}">${t.name}</w3m-network-button>`)}</div></w3m-modal-content>`;
    }
};
$a00eed0e4f95cd61$var$it.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$wn
], $a00eed0e4f95cd61$var$it = $a00eed0e4f95cd61$var$yn([
    (0, $fWcHw.customElement)("w3m-select-network-view")
], $a00eed0e4f95cd61$var$it);
const $a00eed0e4f95cd61$var$xn = (0, $5Oejw.css)`.w3m-wrapper{display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:1/1;flex-direction:column}.w3m-connecting-title{display:flex;align-items:center;justify-content:center;margin-bottom:16px}w3m-spinner{margin-right:10px}w3m-network-image{width:96px;height:96px;margin-bottom:20px}w3m-button{opacity:0}.w3m-error w3m-button{opacity:1}`;
var $a00eed0e4f95cd61$var$Cn = Object.defineProperty, $a00eed0e4f95cd61$var$kn = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$$t = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$kn(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$Cn(t, a, o), o;
};
let $a00eed0e4f95cd61$var$_e = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(), this.error = !1, this.onSwitchNetwork();
    }
    getRouterData() {
        var e;
        const t = (e = (0, $6sRZo.RouterCtrl).state.data) == null ? void 0 : e.SwitchNetwork;
        if (!t) throw new Error("Missing router data");
        return t;
    }
    async onSwitchNetwork() {
        try {
            this.error = !1;
            const e = this.getRouterData();
            await (0, $6sRZo.ClientCtrl).client().switchNetwork({
                chainId: e.id
            }), (0, $6sRZo.OptionsCtrl).setSelectedChain(e), (0, $6sRZo.RouterCtrl).replace("Account");
        } catch  {
            this.error = !0;
        }
    }
    render() {
        const { id: e , name: t  } = this.getRouterData(), a = {
            "w3m-wrapper": !0,
            "w3m-error": this.error
        };
        return (0, $hZNzg.html)`<w3m-modal-header title="${`Connect to ${t}`}"></w3m-modal-header><w3m-modal-content><div class="${(0, $lpVpn.classMap)(a)}"><w3m-network-image chainId="${e}"></w3m-network-image><div class="w3m-connecting-title">${this.error ? null : (0, $hZNzg.html)`<w3m-spinner></w3m-spinner>`}<w3m-text variant="large-bold" color="${this.error ? "error" : "secondary"}">${this.error ? "Connection declined" : "Approve in your wallet"}</w3m-text></div><w3m-button .onClick="${this.onSwitchNetwork.bind(this)}" .disabled="${!this.error}" .iconRight="${$a00eed0e4f95cd61$var$g.RETRY_ICON}">Try Again</w3m-button></div></w3m-modal-content>`;
    }
};
$a00eed0e4f95cd61$var$_e.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$xn
], $a00eed0e4f95cd61$var$$t([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$var$_e.prototype, "error", 2), $a00eed0e4f95cd61$var$_e = $a00eed0e4f95cd61$var$$t([
    (0, $fWcHw.customElement)("w3m-switch-network-view")
], $a00eed0e4f95cd61$var$_e);
const $a00eed0e4f95cd61$var$$n = (0, $5Oejw.css)`w3m-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}w3m-modal-content::after,w3m-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}w3m-modal-content::before{box-shadow:0 -1px 0 0 var(--w3m-color-bg-1);background:linear-gradient(var(--w3m-color-bg-1),rgba(255,255,255,0))}w3m-modal-content::after{box-shadow:0 1px 0 0 var(--w3m-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--w3m-color-bg-1));top:calc(100% - 20px)}w3m-modal-content::-webkit-scrollbar{display:none}.w3m-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.w3m-empty,.w3m-loading{display:flex}.w3m-loading .w3m-placeholder-block{height:100%}.w3m-end-reached .w3m-placeholder-block{height:0;opacity:0}.w3m-empty .w3m-placeholder-block{opacity:1;height:100%}w3m-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
var $a00eed0e4f95cd61$var$On = Object.defineProperty, $a00eed0e4f95cd61$var$In = Object.getOwnPropertyDescriptor, $a00eed0e4f95cd61$var$xe = (e, t, a, n)=>{
    for(var o = n > 1 ? void 0 : n ? $a00eed0e4f95cd61$var$In(t, a) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (o = (n ? i(t, a, o) : i(o)) || o);
    return n && o && $a00eed0e4f95cd61$var$On(t, a, o), o;
};
const $a00eed0e4f95cd61$var$lt = 40;
let $a00eed0e4f95cd61$var$Q = class extends (0, $e9IBe.LitElement) {
    constructor(){
        super(...arguments), this.loading = !(0, $6sRZo.ExplorerCtrl).state.wallets.listings.length, this.firstFetch = !(0, $6sRZo.ExplorerCtrl).state.wallets.listings.length, this.search = "", this.endReached = !1, this.intersectionObserver = void 0, this.searchDebounce = $a00eed0e4f95cd61$var$h.debounce((e)=>{
            e.length >= 3 ? (this.firstFetch = !0, this.endReached = !1, this.search = e, (0, $6sRZo.ExplorerCtrl).resetSearch(), this.fetchWallets()) : this.search && (this.search = "", this.endReached = this.isLastPage(), (0, $6sRZo.ExplorerCtrl).resetSearch());
        });
    }
    firstUpdated() {
        this.createPaginationObserver();
    }
    disconnectedCallback() {
        var e;
        (e = this.intersectionObserver) == null || e.disconnect();
    }
    get placeholderEl() {
        return $a00eed0e4f95cd61$var$h.getShadowRootElement(this, ".w3m-placeholder-block");
    }
    createPaginationObserver() {
        this.intersectionObserver = new IntersectionObserver(([e])=>{
            e.isIntersecting && !(this.search && this.firstFetch) && this.fetchWallets();
        }), this.intersectionObserver.observe(this.placeholderEl);
    }
    isLastPage() {
        const { wallets: e , search: t  } = (0, $6sRZo.ExplorerCtrl).state, { listings: a , total: n  } = this.search ? t : e;
        return n <= $a00eed0e4f95cd61$var$lt || a.length >= n;
    }
    async fetchWallets() {
        var e;
        const { wallets: t , search: a  } = (0, $6sRZo.ExplorerCtrl).state, n = $a00eed0e4f95cd61$var$h.getExtensionWallets(), { listings: o , total: r , page: i  } = this.search ? a : t;
        if (!this.endReached && (this.firstFetch || r > $a00eed0e4f95cd61$var$lt && o.length < r)) try {
            this.loading = !0;
            const c = (e = (0, $6sRZo.OptionsCtrl).state.standaloneChains) == null ? void 0 : e.join(","), { listings: m  } = await (0, $6sRZo.ExplorerCtrl).getPaginatedWallets({
                page: this.firstFetch ? 1 : i + 1,
                entries: $a00eed0e4f95cd61$var$lt,
                device: (0, $6sRZo.CoreUtil).isMobile() ? "mobile" : "desktop",
                search: this.search,
                version: (0, $6sRZo.OptionsCtrl).state.walletConnectVersion,
                chains: c
            }), s = m.map(({ image_url: v  })=>v.lg), d = n.map(({ id: v  })=>$a00eed0e4f95cd61$var$h.getWalletIcon(v));
            await Promise.all([
                ...s.map(async (v)=>$a00eed0e4f95cd61$var$h.preloadImage(v)),
                ...d.map(async (v)=>$a00eed0e4f95cd61$var$h.preloadImage(v)),
                (0, $6sRZo.CoreUtil).wait(300)
            ]), this.endReached = this.isLastPage();
        } catch (c) {
            console.error(c), (0, $6sRZo.ToastCtrl).openToast($a00eed0e4f95cd61$var$h.getErrorMessage(c), "error");
        } finally{
            this.loading = !1, this.firstFetch = !1;
        }
    }
    onConnectCustom({ name: e , id: t , links: a  }) {
        (0, $6sRZo.CoreUtil).isMobile() ? $a00eed0e4f95cd61$var$h.handleMobileLinking({
            links: a,
            name: e,
            id: t
        }) : (0, $6sRZo.RouterCtrl).push("DesktopConnector", {
            DesktopConnector: {
                name: e,
                walletId: t,
                universal: a.universal,
                native: a.native
            }
        });
    }
    onConnectListing(e) {
        if ((0, $6sRZo.CoreUtil).isMobile()) {
            const { id: t , image_url: a  } = e, { native: n , universal: o  } = e.mobile;
            $a00eed0e4f95cd61$var$h.handleMobileLinking({
                links: {
                    native: n,
                    universal: o
                },
                name: e.name,
                id: t,
                image: a.lg
            });
        } else (0, $6sRZo.RouterCtrl).push("DesktopConnector", {
            DesktopConnector: {
                name: e.name,
                icon: e.image_url.lg,
                universal: e.desktop.universal || e.homepage,
                native: e.desktop.native
            }
        });
    }
    onConnectExtension(e) {
        $a00eed0e4f95cd61$var$h.getWalletId("") === e.id ? (0, $6sRZo.RouterCtrl).push("InjectedConnector") : (0, $6sRZo.RouterCtrl).push("InstallConnector", {
            InstallConnector: e
        });
    }
    onSearchChange(e) {
        const { value: t  } = e.target;
        this.searchDebounce(t);
    }
    coinbaseConnectorTemplate() {
        try {
            const e = (0, $6sRZo.ClientCtrl).client().getConnectorById($a00eed0e4f95cd61$var$Z.coinbaseWallet);
            return (0, $hZNzg.html)`<w3m-wallet-button name="${e.name}" walletId="${e.id}" .onClick="${async ()=>$a00eed0e4f95cd61$var$h.handleConnectorConnection($a00eed0e4f95cd61$var$Z.coinbaseWallet)}"></w3m-wallet-button>`;
        } catch  {
            return null;
        }
    }
    render() {
        const { wallets: e , search: t  } = (0, $6sRZo.ExplorerCtrl).state, { isStandalone: a  } = (0, $6sRZo.OptionsCtrl).state;
        let { listings: n  } = this.search ? t : e;
        n = $a00eed0e4f95cd61$var$R.allowedExplorerListings(n);
        const o = this.loading && !n.length, r = this.search.length >= 3, i = !o && (!r || $a00eed0e4f95cd61$var$h.caseSafeIncludes($a00eed0e4f95cd61$var$Z.coinbaseWallet, this.search));
        let c = !a && !(0, $6sRZo.CoreUtil).isMobile() ? $a00eed0e4f95cd61$var$h.getExtensionWallets() : [], m = $a00eed0e4f95cd61$var$h.getCustomWallets();
        r && (c = c.filter(({ name: O  })=>$a00eed0e4f95cd61$var$h.caseSafeIncludes(O, this.search)), m = m.filter(({ name: O  })=>$a00eed0e4f95cd61$var$h.caseSafeIncludes(O, this.search)));
        const s = !this.loading && !n.length && !c.length && !i, d = Math.max(c.length, n.length), v = {
            "w3m-loading": o,
            "w3m-end-reached": this.endReached || !this.loading,
            "w3m-empty": s
        };
        return (0, $hZNzg.html)`<w3m-modal-header><w3m-search-input .onChange="${this.onSearchChange.bind(this)}"></w3m-search-input></w3m-modal-header><w3m-modal-content class="${(0, $lpVpn.classMap)(v)}"><div class="w3m-grid">${o ? null : [
            ...Array(d)
        ].map((O, C)=>(0, $hZNzg.html)`${m[C] ? (0, $hZNzg.html)`<w3m-wallet-button name="${m[C].name}" walletId="${m[C].id}" .onClick="${()=>this.onConnectCustom(m[C])}"></w3m-wallet-button>` : null} ${c[C] ? (0, $hZNzg.html)`<w3m-wallet-button name="${c[C].name}" walletId="${c[C].id}" .onClick="${()=>this.onConnectExtension(c[C])}"></w3m-wallet-button>` : null} ${n[C] ? (0, $hZNzg.html)`<w3m-wallet-button src="${n[C].image_url.lg}" name="${n[C].name}" walletId="${n[C].id}" .onClick="${()=>this.onConnectListing(n[C])}"></w3m-wallet-button>` : null}`)} ${i ? this.coinbaseConnectorTemplate() : null}</div><div class="w3m-placeholder-block">${s ? (0, $hZNzg.html)`<w3m-text variant="large-bold" color="secondary">No results found</w3m-text>` : null} ${!s && this.loading ? (0, $hZNzg.html)`<w3m-spinner></w3m-spinner>` : null}</div></w3m-modal-content>`;
    }
};
$a00eed0e4f95cd61$var$Q.styles = [
    $a00eed0e4f95cd61$var$u.globalCss,
    $a00eed0e4f95cd61$var$$n
], $a00eed0e4f95cd61$var$xe([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$var$Q.prototype, "loading", 2), $a00eed0e4f95cd61$var$xe([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$var$Q.prototype, "firstFetch", 2), $a00eed0e4f95cd61$var$xe([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$var$Q.prototype, "search", 2), $a00eed0e4f95cd61$var$xe([
    (0, $kKKQN.state)()
], $a00eed0e4f95cd61$var$Q.prototype, "endReached", 2), $a00eed0e4f95cd61$var$Q = $a00eed0e4f95cd61$var$xe([
    (0, $fWcHw.customElement)("w3m-wallet-explorer-view")
], $a00eed0e4f95cd61$var$Q);

});
parcelRequire.register("iiq12", function(module, exports) {
$parcel$export(module.exports, "css", () => (parcelRequire("5Oejw")).css);
$parcel$export(module.exports, "html", () => (parcelRequire("hZNzg")).html);
$parcel$export(module.exports, "LitElement", () => (parcelRequire("e9IBe")).LitElement);
$parcel$export(module.exports, "svg", () => (parcelRequire("hZNzg")).svg);
parcelRequire("dmQr5");
parcelRequire("hZNzg");
parcelRequire("e9IBe");
parcelRequire("1eq6j");

});
parcelRequire.register("dmQr5", function(module, exports) {

$parcel$export(module.exports, "ReactiveElement", () => $9bb6011bc84b5477$export$c7c07a37856565d);
$parcel$export(module.exports, "css", () => (parcelRequire("5Oejw")).css);

var $5Oejw = parcelRequire("5Oejw");

var $5Oejw = parcelRequire("5Oejw");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $9bb6011bc84b5477$var$s;
const $9bb6011bc84b5477$var$e = window, $9bb6011bc84b5477$var$r = $9bb6011bc84b5477$var$e.trustedTypes, $9bb6011bc84b5477$var$h = $9bb6011bc84b5477$var$r ? $9bb6011bc84b5477$var$r.emptyScript : "", $9bb6011bc84b5477$var$o = $9bb6011bc84b5477$var$e.reactiveElementPolyfillSupport, $9bb6011bc84b5477$export$7312b35fbf521afb = {
    toAttribute (t, i) {
        switch(i){
            case Boolean:
                t = t ? $9bb6011bc84b5477$var$h : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, i) {
        let s = t;
        switch(i){
            case Boolean:
                s = null !== t;
                break;
            case Number:
                s = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    s = JSON.parse(t);
                } catch (t) {
                    s = null;
                }
        }
        return s;
    }
}, $9bb6011bc84b5477$export$53a6892c50694894 = (t, i)=>i !== t && (i == i || t == t), $9bb6011bc84b5477$var$l = {
    attribute: !0,
    type: String,
    converter: $9bb6011bc84b5477$export$7312b35fbf521afb,
    reflect: !1,
    hasChanged: $9bb6011bc84b5477$export$53a6892c50694894
};
class $9bb6011bc84b5477$export$c7c07a37856565d extends HTMLElement {
    constructor(){
        super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
    }
    static addInitializer(t) {
        var i;
        this.finalize(), (null !== (i = this.h) && void 0 !== i ? i : this.h = []).push(t);
    }
    static get observedAttributes() {
        this.finalize();
        const t = [];
        return this.elementProperties.forEach((i, s)=>{
            const e = this._$Ep(s, i);
            void 0 !== e && (this._$Ev.set(e, s), t.push(e));
        }), t;
    }
    static createProperty(t, i = $9bb6011bc84b5477$var$l) {
        if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
            const s = "symbol" == typeof t ? Symbol() : "__" + t, e = this.getPropertyDescriptor(t, s, i);
            void 0 !== e && Object.defineProperty(this.prototype, t, e);
        }
    }
    static getPropertyDescriptor(t, i, s) {
        return {
            get () {
                return this[i];
            },
            set (e) {
                const r = this[t];
                this[i] = e, this.requestUpdate(t, r, s);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) || $9bb6011bc84b5477$var$l;
    }
    static finalize() {
        if (this.hasOwnProperty("finalized")) return !1;
        this.finalized = !0;
        const t = Object.getPrototypeOf(this);
        if (t.finalize(), void 0 !== t.h && (this.h = [
            ...t.h
        ]), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
            const t = this.properties, i = [
                ...Object.getOwnPropertyNames(t),
                ...Object.getOwnPropertySymbols(t)
            ];
            for (const s of i)this.createProperty(s, t[s]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), !0;
    }
    static finalizeStyles(i) {
        const s = [];
        if (Array.isArray(i)) {
            const e = new Set(i.flat(1 / 0).reverse());
            for (const i of e)s.unshift((0, $5Oejw.getCompatibleStyle)(i));
        } else void 0 !== i && s.push((0, $5Oejw.getCompatibleStyle)(i));
        return s;
    }
    static _$Ep(t, i) {
        const s = i.attribute;
        return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    u() {
        var t;
        this._$E_ = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach((t)=>t(this));
    }
    addController(t) {
        var i, s;
        (null !== (i = this._$ES) && void 0 !== i ? i : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
    }
    removeController(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
    _$Eg() {
        this.constructor.elementProperties.forEach((t, i)=>{
            this.hasOwnProperty(i) && (this._$Ei.set(i, this[i]), delete this[i]);
        });
    }
    createRenderRoot() {
        var t;
        const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $5Oejw.adoptStyles)(s, this.constructor.elementStyles), s;
    }
    connectedCallback() {
        var t;
        void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        var t;
        null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    attributeChangedCallback(t, i, s) {
        this._$AK(t, s);
    }
    _$EO(t, i, s = $9bb6011bc84b5477$var$l) {
        var e;
        const r = this.constructor._$Ep(t, s);
        if (void 0 !== r && !0 === s.reflect) {
            const h = (void 0 !== (null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) ? s.converter : $9bb6011bc84b5477$export$7312b35fbf521afb).toAttribute(i, s.type);
            this._$El = t, null == h ? this.removeAttribute(r) : this.setAttribute(r, h), this._$El = null;
        }
    }
    _$AK(t, i) {
        var s;
        const e = this.constructor, r = e._$Ev.get(t);
        if (void 0 !== r && this._$El !== r) {
            const t = e.getPropertyOptions(r), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== (null === (s = t.converter) || void 0 === s ? void 0 : s.fromAttribute) ? t.converter : $9bb6011bc84b5477$export$7312b35fbf521afb;
            this._$El = r, this[r] = h.fromAttribute(i, t.type), this._$El = null;
        }
    }
    requestUpdate(t, i, s) {
        let e = !0;
        void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || $9bb6011bc84b5477$export$53a6892c50694894)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
        this.isUpdatePending = !0;
        try {
            await this._$E_;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        var t;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Ei && (this._$Ei.forEach((t, i)=>this[i] = t), this._$Ei = void 0);
        let i = !1;
        const s = this._$AL;
        try {
            i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
                var i;
                return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
            }), this.update(s)) : this._$Ek();
        } catch (t) {
            throw i = !1, this._$Ek(), t;
        }
        i && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.forEach((t)=>{
            var i;
            return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
        }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$Ek() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$E_;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        void 0 !== this._$EC && (this._$EC.forEach((t, i)=>this._$EO(i, this[i], t)), this._$EC = void 0), this._$Ek();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$9bb6011bc84b5477$export$c7c07a37856565d.finalized = !0, $9bb6011bc84b5477$export$c7c07a37856565d.elementProperties = new Map, $9bb6011bc84b5477$export$c7c07a37856565d.elementStyles = [], $9bb6011bc84b5477$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, null == $9bb6011bc84b5477$var$o || $9bb6011bc84b5477$var$o({
    ReactiveElement: $9bb6011bc84b5477$export$c7c07a37856565d
}), (null !== ($9bb6011bc84b5477$var$s = $9bb6011bc84b5477$var$e.reactiveElementVersions) && void 0 !== $9bb6011bc84b5477$var$s ? $9bb6011bc84b5477$var$s : $9bb6011bc84b5477$var$e.reactiveElementVersions = []).push("1.6.1");

});
parcelRequire.register("5Oejw", function(module, exports) {

$parcel$export(module.exports, "css", () => $43acb9b5e95a88bc$export$dbf350e5966cf602);
$parcel$export(module.exports, "adoptStyles", () => $43acb9b5e95a88bc$export$2ca4a66ec4cecb90);
$parcel$export(module.exports, "getCompatibleStyle", () => $43acb9b5e95a88bc$export$ee69dfd951e24778);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $43acb9b5e95a88bc$var$t = window, $43acb9b5e95a88bc$export$b4d10f6001c083c2 = $43acb9b5e95a88bc$var$t.ShadowRoot && (void 0 === $43acb9b5e95a88bc$var$t.ShadyCSS || $43acb9b5e95a88bc$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $43acb9b5e95a88bc$var$s = Symbol(), $43acb9b5e95a88bc$var$n = new WeakMap;
class $43acb9b5e95a88bc$export$505d1e8739bad805 {
    constructor(t, e, n){
        if (this._$cssResult$ = !0, n !== $43acb9b5e95a88bc$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($43acb9b5e95a88bc$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $43acb9b5e95a88bc$var$n.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $43acb9b5e95a88bc$var$n.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $43acb9b5e95a88bc$export$8d80f9cac07cdb3 = (t)=>new $43acb9b5e95a88bc$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $43acb9b5e95a88bc$var$s), $43acb9b5e95a88bc$export$dbf350e5966cf602 = (t, ...e)=>{
    const n = 1 === t.length ? t[0] : e.reduce((e, s, n)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[n + 1], t[0]);
    return new $43acb9b5e95a88bc$export$505d1e8739bad805(n, t, $43acb9b5e95a88bc$var$s);
}, $43acb9b5e95a88bc$export$2ca4a66ec4cecb90 = (s, n)=>{
    $43acb9b5e95a88bc$export$b4d10f6001c083c2 ? s.adoptedStyleSheets = n.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet) : n.forEach((e)=>{
        const n = document.createElement("style"), o = $43acb9b5e95a88bc$var$t.litNonce;
        void 0 !== o && n.setAttribute("nonce", o), n.textContent = e.cssText, s.appendChild(n);
    });
}, $43acb9b5e95a88bc$export$ee69dfd951e24778 = $43acb9b5e95a88bc$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $43acb9b5e95a88bc$export$8d80f9cac07cdb3(e);
    })(t) : t;

});


parcelRequire.register("hZNzg", function(module, exports) {

$parcel$export(module.exports, "html", () => $d19e954e54aed54d$export$c0bb0b647f701bb5);
$parcel$export(module.exports, "svg", () => $d19e954e54aed54d$export$7ed1367e7fa1ad68);
$parcel$export(module.exports, "noChange", () => $d19e954e54aed54d$export$9c068ae9cc5db4e8);
$parcel$export(module.exports, "nothing", () => $d19e954e54aed54d$export$45b790e32b2810ee);
$parcel$export(module.exports, "render", () => $d19e954e54aed54d$export$b3890eb0ae9dca99);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $d19e954e54aed54d$var$t;
const $d19e954e54aed54d$var$i = window, $d19e954e54aed54d$var$s = $d19e954e54aed54d$var$i.trustedTypes, $d19e954e54aed54d$var$e = $d19e954e54aed54d$var$s ? $d19e954e54aed54d$var$s.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $d19e954e54aed54d$var$o = `lit$${(Math.random() + "").slice(9)}$`, $d19e954e54aed54d$var$n = "?" + $d19e954e54aed54d$var$o, $d19e954e54aed54d$var$l = `<${$d19e954e54aed54d$var$n}>`, $d19e954e54aed54d$var$h = document, $d19e954e54aed54d$var$r = (t = "")=>$d19e954e54aed54d$var$h.createComment(t), $d19e954e54aed54d$var$d = (t)=>null === t || "object" != typeof t && "function" != typeof t, $d19e954e54aed54d$var$u = Array.isArray, $d19e954e54aed54d$var$c = (t)=>$d19e954e54aed54d$var$u(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]), $d19e954e54aed54d$var$v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $d19e954e54aed54d$var$a = /-->/g, $d19e954e54aed54d$var$f = />/g, $d19e954e54aed54d$var$_ = RegExp(">|[ 	\n\f\r](?:([^\\s\"'>=/]+)([ 	\n\f\r]*=[ 	\n\f\r]*(?:[^ 	\n\f\r\"'`<>=]|(\"|')|))|$)", "g"), $d19e954e54aed54d$var$m = /'/g, $d19e954e54aed54d$var$p = /"/g, $d19e954e54aed54d$var$$ = /^(?:script|style|textarea|title)$/i, $d19e954e54aed54d$var$g = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $d19e954e54aed54d$export$c0bb0b647f701bb5 = $d19e954e54aed54d$var$g(1), $d19e954e54aed54d$export$7ed1367e7fa1ad68 = $d19e954e54aed54d$var$g(2), $d19e954e54aed54d$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $d19e954e54aed54d$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $d19e954e54aed54d$var$T = new WeakMap, $d19e954e54aed54d$var$A = $d19e954e54aed54d$var$h.createTreeWalker($d19e954e54aed54d$var$h, 129, null, !1), $d19e954e54aed54d$var$E = (t, i)=>{
    const s = t.length - 1, n = [];
    let h, r = 2 === i ? "<svg>" : "", d = $d19e954e54aed54d$var$v;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let e, u, c = -1, g = 0;
        for(; g < s.length && (d.lastIndex = g, u = d.exec(s), null !== u);)g = d.lastIndex, d === $d19e954e54aed54d$var$v ? "!--" === u[1] ? d = $d19e954e54aed54d$var$a : void 0 !== u[1] ? d = $d19e954e54aed54d$var$f : void 0 !== u[2] ? ($d19e954e54aed54d$var$$.test(u[2]) && (h = RegExp("</" + u[2], "g")), d = $d19e954e54aed54d$var$_) : void 0 !== u[3] && (d = $d19e954e54aed54d$var$_) : d === $d19e954e54aed54d$var$_ ? ">" === u[0] ? (d = null != h ? h : $d19e954e54aed54d$var$v, c = -1) : void 0 === u[1] ? c = -2 : (c = d.lastIndex - u[2].length, e = u[1], d = void 0 === u[3] ? $d19e954e54aed54d$var$_ : '"' === u[3] ? $d19e954e54aed54d$var$p : $d19e954e54aed54d$var$m) : d === $d19e954e54aed54d$var$p || d === $d19e954e54aed54d$var$m ? d = $d19e954e54aed54d$var$_ : d === $d19e954e54aed54d$var$a || d === $d19e954e54aed54d$var$f ? d = $d19e954e54aed54d$var$v : (d = $d19e954e54aed54d$var$_, h = void 0);
        const y = d === $d19e954e54aed54d$var$_ && t[i + 1].startsWith("/>") ? " " : "";
        r += d === $d19e954e54aed54d$var$v ? s + $d19e954e54aed54d$var$l : c >= 0 ? (n.push(e), s.slice(0, c) + "$lit$" + s.slice(c) + $d19e954e54aed54d$var$o + y) : s + $d19e954e54aed54d$var$o + (-2 === c ? (n.push(void 0), i) : y);
    }
    const u = r + (t[s] || "<?>") + (2 === i ? "</svg>" : "");
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [
        void 0 !== $d19e954e54aed54d$var$e ? $d19e954e54aed54d$var$e.createHTML(u) : u,
        n
    ];
};
class $d19e954e54aed54d$var$C {
    constructor({ strings: t , _$litType$: i  }, e){
        let l;
        this.parts = [];
        let h = 0, d = 0;
        const u = t.length - 1, c = this.parts, [v, a] = $d19e954e54aed54d$var$E(t, i);
        if (this.el = $d19e954e54aed54d$var$C.createElement(v, e), $d19e954e54aed54d$var$A.currentNode = this.el.content, 2 === i) {
            const t = this.el.content, i = t.firstChild;
            i.remove(), t.append(...i.childNodes);
        }
        for(; null !== (l = $d19e954e54aed54d$var$A.nextNode()) && c.length < u;){
            if (1 === l.nodeType) {
                if (l.hasAttributes()) {
                    const t = [];
                    for (const i of l.getAttributeNames())if (i.endsWith("$lit$") || i.startsWith($d19e954e54aed54d$var$o)) {
                        const s = a[d++];
                        if (t.push(i), void 0 !== s) {
                            const t = l.getAttribute(s.toLowerCase() + "$lit$").split($d19e954e54aed54d$var$o), i = /([.?@])?(.*)/.exec(s);
                            c.push({
                                type: 1,
                                index: h,
                                name: i[2],
                                strings: t,
                                ctor: "." === i[1] ? $d19e954e54aed54d$var$M : "?" === i[1] ? $d19e954e54aed54d$var$k : "@" === i[1] ? $d19e954e54aed54d$var$H : $d19e954e54aed54d$var$S
                            });
                        } else c.push({
                            type: 6,
                            index: h
                        });
                    }
                    for (const i of t)l.removeAttribute(i);
                }
                if ($d19e954e54aed54d$var$$.test(l.tagName)) {
                    const t = l.textContent.split($d19e954e54aed54d$var$o), i = t.length - 1;
                    if (i > 0) {
                        l.textContent = $d19e954e54aed54d$var$s ? $d19e954e54aed54d$var$s.emptyScript : "";
                        for(let s = 0; s < i; s++)l.append(t[s], $d19e954e54aed54d$var$r()), $d19e954e54aed54d$var$A.nextNode(), c.push({
                            type: 2,
                            index: ++h
                        });
                        l.append(t[i], $d19e954e54aed54d$var$r());
                    }
                }
            } else if (8 === l.nodeType) {
                if (l.data === $d19e954e54aed54d$var$n) c.push({
                    type: 2,
                    index: h
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = l.data.indexOf($d19e954e54aed54d$var$o, t + 1));)c.push({
                        type: 7,
                        index: h
                    }), t += $d19e954e54aed54d$var$o.length - 1;
                }
            }
            h++;
        }
    }
    static createElement(t, i) {
        const s = $d19e954e54aed54d$var$h.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $d19e954e54aed54d$var$P(t, i, s = t, e) {
    var o, n, l, h;
    if (i === $d19e954e54aed54d$export$9c068ae9cc5db4e8) return i;
    let r = void 0 !== e ? null === (o = s._$Co) || void 0 === o ? void 0 : o[e] : s._$Cl;
    const u = $d19e954e54aed54d$var$d(i) ? void 0 : i._$litDirective$;
    return (null == r ? void 0 : r.constructor) !== u && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === u ? r = void 0 : (r = new u(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Co) && void 0 !== l ? l : h._$Co = [])[e] = r : s._$Cl = r), void 0 !== r && (i = $d19e954e54aed54d$var$P(t, r._$AS(t, i.values), r, e)), i;
}
class $d19e954e54aed54d$var$V {
    constructor(t, i){
        this.u = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    v(t) {
        var i;
        const { el: { content: s  } , parts: e  } = this._$AD, o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : $d19e954e54aed54d$var$h).importNode(s, !0);
        $d19e954e54aed54d$var$A.currentNode = o;
        let n = $d19e954e54aed54d$var$A.nextNode(), l = 0, r = 0, d = e[0];
        for(; void 0 !== d;){
            if (l === d.index) {
                let i;
                2 === d.type ? i = new $d19e954e54aed54d$var$N(n, n.nextSibling, this, t) : 1 === d.type ? i = new d.ctor(n, d.name, d.strings, this, t) : 6 === d.type && (i = new $d19e954e54aed54d$var$I(n, this, t)), this.u.push(i), d = e[++r];
            }
            l !== (null == d ? void 0 : d.index) && (n = $d19e954e54aed54d$var$A.nextNode(), l++);
        }
        return o;
    }
    p(t) {
        let i = 0;
        for (const s of this.u)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $d19e954e54aed54d$var$N {
    constructor(t, i, s, e){
        var o;
        this.type = 2, this._$AH = $d19e954e54aed54d$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cm = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
    }
    get _$AU() {
        var t, i;
        return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cm;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $d19e954e54aed54d$var$P(this, t, i), $d19e954e54aed54d$var$d(t) ? t === $d19e954e54aed54d$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $d19e954e54aed54d$export$45b790e32b2810ee && this._$AR(), this._$AH = $d19e954e54aed54d$export$45b790e32b2810ee) : t !== this._$AH && t !== $d19e954e54aed54d$export$9c068ae9cc5db4e8 && this.g(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $d19e954e54aed54d$var$c(t) ? this.k(t) : this.g(t);
    }
    O(t, i = this._$AB) {
        return this._$AA.parentNode.insertBefore(t, i);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    g(t) {
        this._$AH !== $d19e954e54aed54d$export$45b790e32b2810ee && $d19e954e54aed54d$var$d(this._$AH) ? this._$AA.nextSibling.data = t : this.T($d19e954e54aed54d$var$h.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        var i;
        const { values: s , _$litType$: e  } = t, o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = $d19e954e54aed54d$var$C.createElement(e.h, this.options)), e);
        if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.p(s);
        else {
            const t = new $d19e954e54aed54d$var$V(o, this), i = t.v(this.options);
            t.p(s), this.T(i), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $d19e954e54aed54d$var$T.get(t.strings);
        return void 0 === i && $d19e954e54aed54d$var$T.set(t.strings, i = new $d19e954e54aed54d$var$C(t)), i;
    }
    k(t) {
        $d19e954e54aed54d$var$u(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const o of t)e === i.length ? i.push(s = new $d19e954e54aed54d$var$N(this.O($d19e954e54aed54d$var$r()), this.O($d19e954e54aed54d$var$r()), this, this.options)) : s = i[e], s._$AI(o), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        var s;
        for(null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        var i;
        void 0 === this._$AM && (this._$Cm = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
    }
}
class $d19e954e54aed54d$var$S {
    constructor(t, i, s, e, o){
        this.type = 1, this._$AH = $d19e954e54aed54d$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $d19e954e54aed54d$export$45b790e32b2810ee;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, i = this, s, e) {
        const o = this.strings;
        let n = !1;
        if (void 0 === o) t = $d19e954e54aed54d$var$P(this, t, i, 0), n = !$d19e954e54aed54d$var$d(t) || t !== this._$AH && t !== $d19e954e54aed54d$export$9c068ae9cc5db4e8, n && (this._$AH = t);
        else {
            const e = t;
            let l, h;
            for(t = o[0], l = 0; l < o.length - 1; l++)h = $d19e954e54aed54d$var$P(this, e[s + l], i, l), h === $d19e954e54aed54d$export$9c068ae9cc5db4e8 && (h = this._$AH[l]), n || (n = !$d19e954e54aed54d$var$d(h) || h !== this._$AH[l]), h === $d19e954e54aed54d$export$45b790e32b2810ee ? t = $d19e954e54aed54d$export$45b790e32b2810ee : t !== $d19e954e54aed54d$export$45b790e32b2810ee && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
        }
        n && !e && this.j(t);
    }
    j(t) {
        t === $d19e954e54aed54d$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
    }
}
class $d19e954e54aed54d$var$M extends $d19e954e54aed54d$var$S {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $d19e954e54aed54d$export$45b790e32b2810ee ? void 0 : t;
    }
}
const $d19e954e54aed54d$var$R = $d19e954e54aed54d$var$s ? $d19e954e54aed54d$var$s.emptyScript : "";
class $d19e954e54aed54d$var$k extends $d19e954e54aed54d$var$S {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        t && t !== $d19e954e54aed54d$export$45b790e32b2810ee ? this.element.setAttribute(this.name, $d19e954e54aed54d$var$R) : this.element.removeAttribute(this.name);
    }
}
class $d19e954e54aed54d$var$H extends $d19e954e54aed54d$var$S {
    constructor(t, i, s, e, o){
        super(t, i, s, e, o), this.type = 5;
    }
    _$AI(t, i = this) {
        var s;
        if ((t = null !== (s = $d19e954e54aed54d$var$P(this, t, i, 0)) && void 0 !== s ? s : $d19e954e54aed54d$export$45b790e32b2810ee) === $d19e954e54aed54d$export$9c068ae9cc5db4e8) return;
        const e = this._$AH, o = t === $d19e954e54aed54d$export$45b790e32b2810ee && e !== $d19e954e54aed54d$export$45b790e32b2810ee || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive, n = t !== $d19e954e54aed54d$export$45b790e32b2810ee && (e === $d19e954e54aed54d$export$45b790e32b2810ee || o);
        o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        var i, s;
        "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
    }
}
class $d19e954e54aed54d$var$I {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $d19e954e54aed54d$var$P(this, t);
    }
}
const $d19e954e54aed54d$export$8613d1ca9052b22e = {
    P: "$lit$",
    A: $d19e954e54aed54d$var$o,
    M: $d19e954e54aed54d$var$n,
    C: 1,
    L: $d19e954e54aed54d$var$E,
    R: $d19e954e54aed54d$var$V,
    D: $d19e954e54aed54d$var$c,
    V: $d19e954e54aed54d$var$P,
    I: $d19e954e54aed54d$var$N,
    H: $d19e954e54aed54d$var$S,
    N: $d19e954e54aed54d$var$k,
    U: $d19e954e54aed54d$var$H,
    B: $d19e954e54aed54d$var$M,
    F: $d19e954e54aed54d$var$I
}, $d19e954e54aed54d$var$z = $d19e954e54aed54d$var$i.litHtmlPolyfillSupport;
null == $d19e954e54aed54d$var$z || $d19e954e54aed54d$var$z($d19e954e54aed54d$var$C, $d19e954e54aed54d$var$N), (null !== ($d19e954e54aed54d$var$t = $d19e954e54aed54d$var$i.litHtmlVersions) && void 0 !== $d19e954e54aed54d$var$t ? $d19e954e54aed54d$var$t : $d19e954e54aed54d$var$i.litHtmlVersions = []).push("2.6.1");
const $d19e954e54aed54d$export$b3890eb0ae9dca99 = (t, i, s)=>{
    var e, o;
    const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
    let l = n._$litPart$;
    if (void 0 === l) {
        const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
        n._$litPart$ = l = new $d19e954e54aed54d$var$N(i.insertBefore($d19e954e54aed54d$var$r(), t), t, void 0, null != s ? s : {});
    }
    return l._$AI(t), l;
};

});

parcelRequire.register("e9IBe", function(module, exports) {
$parcel$export(module.exports, "css", () => (parcelRequire("5Oejw")).css);
$parcel$export(module.exports, "ReactiveElement", () => (parcelRequire("dmQr5")).ReactiveElement);
$parcel$export(module.exports, "html", () => (parcelRequire("hZNzg")).html);
$parcel$export(module.exports, "noChange", () => (parcelRequire("hZNzg")).noChange);
$parcel$export(module.exports, "render", () => (parcelRequire("hZNzg")).render);
$parcel$export(module.exports, "svg", () => (parcelRequire("hZNzg")).svg);

$parcel$export(module.exports, "LitElement", () => $a4e4807748857d25$export$3f2f9f5909897157);

var $dmQr5 = parcelRequire("dmQr5");

var $dmQr5 = parcelRequire("dmQr5");

var $hZNzg = parcelRequire("hZNzg");

var $hZNzg = parcelRequire("hZNzg");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $a4e4807748857d25$var$l, $a4e4807748857d25$var$o;
const $a4e4807748857d25$export$8bf27daf9e8907c9 = (0, $dmQr5.ReactiveElement);
class $a4e4807748857d25$export$3f2f9f5909897157 extends (0, $dmQr5.ReactiveElement) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        var t, e;
        const i = super.createRenderRoot();
        return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
    }
    update(t) {
        const i = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $hZNzg.render)(i, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var t;
        super.connectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
    }
    disconnectedCallback() {
        var t;
        super.disconnectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
    }
    render() {
        return 0, $hZNzg.noChange;
    }
}
$a4e4807748857d25$export$3f2f9f5909897157.finalized = !0, $a4e4807748857d25$export$3f2f9f5909897157._$litElement$ = !0, null === ($a4e4807748857d25$var$l = globalThis.litElementHydrateSupport) || void 0 === $a4e4807748857d25$var$l || $a4e4807748857d25$var$l.call(globalThis, {
    LitElement: $a4e4807748857d25$export$3f2f9f5909897157
});
const $a4e4807748857d25$var$n = globalThis.litElementPolyfillSupport;
null == $a4e4807748857d25$var$n || $a4e4807748857d25$var$n({
    LitElement: $a4e4807748857d25$export$3f2f9f5909897157
});
const $a4e4807748857d25$export$f5c524615a7708d6 = {
    _$AK: (t, e, i)=>{
        t._$AK(e, i);
    },
    _$AL: (t)=>t._$AL
};
(null !== ($a4e4807748857d25$var$o = globalThis.litElementVersions) && void 0 !== $a4e4807748857d25$var$o ? $a4e4807748857d25$var$o : globalThis.litElementVersions = []).push("3.2.2");

});

parcelRequire.register("1eq6j", function(module, exports) {
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $0e5b584dbb7fd909$export$6acf61af03e62db = !1;

});


parcelRequire.register("1tJGn", function(module, exports) {
$parcel$export(module.exports, "customElement", () => (parcelRequire("fWcHw")).customElement);
$parcel$export(module.exports, "property", () => (parcelRequire("3yucp")).property);
$parcel$export(module.exports, "state", () => (parcelRequire("kKKQN")).state);
parcelRequire("fWcHw");
parcelRequire("3yucp");
parcelRequire("kKKQN");
parcelRequire("8LvET");
parcelRequire("j7cET");
parcelRequire("2ltb1");
parcelRequire("fGHjw");
parcelRequire("5GUyR");
parcelRequire("gVlUG");

});
parcelRequire.register("fWcHw", function(module, exports) {

$parcel$export(module.exports, "customElement", () => $b9a61ff030d4fe52$export$da64fc29f17f9d0e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $b9a61ff030d4fe52$export$da64fc29f17f9d0e = (e)=>(n)=>"function" == typeof n ? ((e, n)=>(customElements.define(e, n), n))(e, n) : ((e, n)=>{
            const { kind: t , elements: s  } = n;
            return {
                kind: t,
                elements: s,
                finisher (n) {
                    customElements.define(e, n);
                }
            };
        })(e, n);

});

parcelRequire.register("3yucp", function(module, exports) {

$parcel$export(module.exports, "property", () => $296bf8fa2df1f7c7$export$d541bacb2bda4494);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $296bf8fa2df1f7c7$var$i = (i, e)=>"method" === e.kind && e.descriptor && !("value" in e.descriptor) ? {
        ...e,
        finisher (n) {
            n.createProperty(e.key, i);
        }
    } : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        originalKey: e.key,
        initializer () {
            "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this));
        },
        finisher (n) {
            n.createProperty(e.key, i);
        }
    };
function $296bf8fa2df1f7c7$export$d541bacb2bda4494(e) {
    return (n, t)=>void 0 !== t ? ((i, e, n)=>{
            e.constructor.createProperty(n, i);
        })(e, n, t) : $296bf8fa2df1f7c7$var$i(e, n);
}

});

parcelRequire.register("kKKQN", function(module, exports) {

$parcel$export(module.exports, "state", () => $f1bc720ca80276f2$export$ca000e230c0caa3e);

var $3yucp = parcelRequire("3yucp");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $f1bc720ca80276f2$export$ca000e230c0caa3e(t) {
    return (0, $3yucp.property)({
        ...t,
        state: !0
    });
}

});

parcelRequire.register("8LvET", function(module, exports) {

var $chU0w = parcelRequire("chU0w");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $661b4541b6bb2e6f$export$b2b799818fbabcf3(e) {
    return (0, $chU0w.decorateProperty)({
        finisher: (r, t)=>{
            Object.assign(r.prototype[t], e);
        }
    });
}

});
parcelRequire.register("chU0w", function(module, exports) {

$parcel$export(module.exports, "decorateProperty", () => $8f2284794315615e$export$757d561a932dc1cb);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $8f2284794315615e$export$29fd0ed4087278b5 = (e, t, o)=>{
    Object.defineProperty(t, o, e);
}, $8f2284794315615e$export$18eb0154d0069a01 = (e, t)=>({
        kind: "method",
        placement: "prototype",
        key: t.key,
        descriptor: e
    }), $8f2284794315615e$export$757d561a932dc1cb = ({ finisher: e , descriptor: t  })=>(o, n)=>{
        var r;
        if (void 0 === n) {
            const n = null !== (r = o.originalKey) && void 0 !== r ? r : o.key, i = null != t ? {
                kind: "method",
                placement: "prototype",
                key: n,
                descriptor: t(o.key)
            } : {
                ...o,
                key: n
            };
            return null != e && (i.finisher = function(t) {
                e(t, n);
            }), i;
        }
        {
            const r = o.constructor;
            void 0 !== t && Object.defineProperty(o, n, t(n)), null == e || e(r, n);
        }
    };

});


parcelRequire.register("j7cET", function(module, exports) {

var $chU0w = parcelRequire("chU0w");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $dea87d82a9d530fd$export$2fa187e846a241c4(i, n) {
    return (0, $chU0w.decorateProperty)({
        descriptor: (o)=>{
            const t = {
                get () {
                    var o, n;
                    return null !== (n = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== n ? n : null;
                },
                enumerable: !0,
                configurable: !0
            };
            if (n) {
                const n = "symbol" == typeof o ? Symbol() : "__" + o;
                t.get = function() {
                    var o, t;
                    return void 0 === this[n] && (this[n] = null !== (t = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== t ? t : null), this[n];
                };
            }
            return t;
        }
    });
}

});

parcelRequire.register("2ltb1", function(module, exports) {

var $chU0w = parcelRequire("chU0w");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $1b542cd977a8b157$export$dcd0d083aa86c355(e) {
    return (0, $chU0w.decorateProperty)({
        descriptor: (r)=>({
                get () {
                    var r, o;
                    return null !== (o = null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelectorAll(e)) && void 0 !== o ? o : [];
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

});

parcelRequire.register("fGHjw", function(module, exports) {

var $chU0w = parcelRequire("chU0w");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $b6bc608317df9fc2$export$163dfc35cc43f240(e) {
    return (0, $chU0w.decorateProperty)({
        descriptor: (r)=>({
                async get () {
                    var r;
                    return await this.updateComplete, null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelector(e);
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

});

parcelRequire.register("5GUyR", function(module, exports) {

$parcel$export(module.exports, "queryAssignedElements", () => $424cbfe46109b26d$export$4682af2d9ee91415);

var $chU0w = parcelRequire("chU0w");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $424cbfe46109b26d$var$n;
const $424cbfe46109b26d$var$e = null != (null === ($424cbfe46109b26d$var$n = window.HTMLSlotElement) || void 0 === $424cbfe46109b26d$var$n ? void 0 : $424cbfe46109b26d$var$n.prototype.assignedElements) ? (o, n)=>o.assignedElements(n) : (o, n)=>o.assignedNodes(n).filter((o)=>o.nodeType === Node.ELEMENT_NODE);
function $424cbfe46109b26d$export$4682af2d9ee91415(n) {
    const { slot: l , selector: t  } = null != n ? n : {};
    return (0, $chU0w.decorateProperty)({
        descriptor: (o)=>({
                get () {
                    var o;
                    const r = "slot" + (l ? `[name=${l}]` : ":not([name])"), i = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(r), s = null != i ? $424cbfe46109b26d$var$e(i, n) : [];
                    return t ? s.filter((o)=>o.matches(t)) : s;
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

});

parcelRequire.register("gVlUG", function(module, exports) {

var $chU0w = parcelRequire("chU0w");

var $5GUyR = parcelRequire("5GUyR");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $c522f7bbd62486a1$export$1bdbe53f9df1b8(o, n, r) {
    let l, s = o;
    return "object" == typeof o ? (s = o.slot, l = o) : l = {
        flatten: n
    }, r ? (0, $5GUyR.queryAssignedElements)({
        slot: s,
        flatten: n,
        selector: r
    }) : (0, $chU0w.decorateProperty)({
        descriptor: (e)=>({
                get () {
                    var e, t;
                    const o = "slot" + (s ? `[name=${s}]` : ":not([name])"), n = null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelector(o);
                    return null !== (t = null == n ? void 0 : n.assignedNodes(l)) && void 0 !== t ? t : [];
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

});


parcelRequire.register("8PRJl", function(module, exports) {
$parcel$export(module.exports, "classMap", () => (parcelRequire("lpVpn")).classMap);
parcelRequire("lpVpn");

});
parcelRequire.register("lpVpn", function(module, exports) {

$parcel$export(module.exports, "classMap", () => $f97876dbc2b40cec$export$56cc687933817664);

var $hZNzg = parcelRequire("hZNzg");

var $1rkvG = parcelRequire("1rkvG");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $f97876dbc2b40cec$export$56cc687933817664 = (0, $1rkvG.directive)(class extends (0, $1rkvG.Directive) {
    constructor(t){
        var i;
        if (super(t), t.type !== (0, $1rkvG.PartType).ATTRIBUTE || "class" !== t.name || (null === (i = t.strings) || void 0 === i ? void 0 : i.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t) {
        return " " + Object.keys(t).filter((i)=>t[i]).join(" ") + " ";
    }
    update(i, [s]) {
        var r, o;
        if (void 0 === this.nt) {
            this.nt = new Set, void 0 !== i.strings && (this.st = new Set(i.strings.join(" ").split(/\s/).filter((t)=>"" !== t)));
            for(const t in s)s[t] && !(null === (r = this.st) || void 0 === r ? void 0 : r.has(t)) && this.nt.add(t);
            return this.render(s);
        }
        const e = i.element.classList;
        this.nt.forEach((t)=>{
            t in s || (e.remove(t), this.nt.delete(t));
        });
        for(const t in s){
            const i = !!s[t];
            i === this.nt.has(t) || (null === (o = this.st) || void 0 === o ? void 0 : o.has(t)) || (i ? (e.add(t), this.nt.add(t)) : (e.remove(t), this.nt.delete(t)));
        }
        return 0, $hZNzg.noChange;
    }
});

});
parcelRequire.register("1rkvG", function(module, exports) {

$parcel$export(module.exports, "PartType", () => $10c838e9a0b44cdb$export$9ba3b3f20a85bfa);
$parcel$export(module.exports, "directive", () => $10c838e9a0b44cdb$export$99b43ad1ed32e735);
$parcel$export(module.exports, "Directive", () => $10c838e9a0b44cdb$export$befdefbdce210f91);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $10c838e9a0b44cdb$export$9ba3b3f20a85bfa = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, $10c838e9a0b44cdb$export$99b43ad1ed32e735 = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class $10c838e9a0b44cdb$export$befdefbdce210f91 {
    constructor(t){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, e, i) {
        this._$Ct = t, this._$AM = e, this._$Ci = i;
    }
    _$AS(t, e) {
        return this.update(t, e);
    }
    update(t, e) {
        return this.render(...e);
    }
}

});



parcelRequire.register("kT2uv", function(module, exports) {

$parcel$export(module.exports, "animate", () => $f34ae062baa69159$export$e3607ec2d7a891c4);

var $2GzyX = parcelRequire("2GzyX");
var $3yiQd = parcelRequire("3yiQd");

var $esvtr = parcelRequire("esvtr");

var $irGuO = parcelRequire("irGuO");
function $f34ae062baa69159$export$290670472807ab5b(target, options = {}) {
    return (0, $3yiQd.withControls)([
        ()=>{
            const animation = new (0, $irGuO.Animation)(target, [
                0,
                1
            ], options);
            animation.finished.catch(()=>{});
            return animation;
        }
    ], options, options.duration);
}
function $f34ae062baa69159$export$e3607ec2d7a891c4(target, keyframesOrOptions, options) {
    const factory = (0, $esvtr.isFunction)(target) ? $f34ae062baa69159$export$290670472807ab5b : (0, $2GzyX.animate);
    return factory(target, keyframesOrOptions, options);
}

});
parcelRequire.register("2GzyX", function(module, exports) {

$parcel$export(module.exports, "animate", () => $1f4b170b577ac429$export$e3607ec2d7a891c4);

var $irGuO = parcelRequire("irGuO");

var $9v1FE = parcelRequire("9v1FE");
const $1f4b170b577ac429$export$e3607ec2d7a891c4 = (0, $9v1FE.createAnimate)((0, $irGuO.Animation));

});
parcelRequire.register("irGuO", function(module, exports) {

$parcel$export(module.exports, "Animation", () => $d6dbb67179063149$export$c35d437ae5945fcd);

var $7KzAU = parcelRequire("7KzAU");
var $jhKeO = parcelRequire("jhKeO");
var $dB5Tz = parcelRequire("dB5Tz");
var $hXtFy = parcelRequire("hXtFy");
var $dmk6E = parcelRequire("dmk6E");

var $41k8W = parcelRequire("41k8W");
class $d6dbb67179063149$export$c35d437ae5945fcd {
    constructor(output, keyframes = [
        0,
        1
    ], { easing: easing , duration: initialDuration = (0, $7KzAU.defaults).duration , delay: delay = (0, $7KzAU.defaults).delay , endDelay: endDelay = (0, $7KzAU.defaults).endDelay , repeat: repeat = (0, $7KzAU.defaults).repeat , offset: offset , direction: direction = "normal"  } = {}){
        this.startTime = null;
        this.rate = 1;
        this.t = 0;
        this.cancelTimestamp = null;
        this.easing = (0, $dmk6E.noopReturn);
        this.duration = 0;
        this.totalDuration = 0;
        this.repeat = 0;
        this.playState = "idle";
        this.finished = new Promise((resolve, reject)=>{
            this.resolve = resolve;
            this.reject = reject;
        });
        easing = easing || (0, $7KzAU.defaults).easing;
        if ((0, $dB5Tz.isEasingGenerator)(easing)) {
            const custom = easing.createAnimation(keyframes);
            easing = custom.easing;
            keyframes = custom.keyframes || keyframes;
            initialDuration = custom.duration || initialDuration;
        }
        this.repeat = repeat;
        this.easing = (0, $hXtFy.isEasingList)(easing) ? (0, $dmk6E.noopReturn) : (0, $41k8W.getEasingFunction)(easing);
        this.updateDuration(initialDuration);
        const interpolate$1 = (0, $jhKeO.interpolate)(keyframes, offset, (0, $hXtFy.isEasingList)(easing) ? easing.map((0, $41k8W.getEasingFunction)) : (0, $dmk6E.noopReturn));
        this.tick = (timestamp)=>{
            var _a;
            delay;
            let t = 0;
            if (this.pauseTime !== undefined) t = this.pauseTime;
            else t = (timestamp - this.startTime) * this.rate;
            this.t = t;
            // Convert to seconds
            t /= 1000;
            // Rebase on delay
            t = Math.max(t - delay, 0);
            /**
             * If this animation has finished, set the current time
             * to the total duration.
             */ if (this.playState === "finished" && this.pauseTime === undefined) t = this.totalDuration;
            /**
             * Get the current progress (0-1) of the animation. If t is >
             * than duration we'll get values like 2.5 (midway through the
             * third iteration)
             */ const progress = t / this.duration;
            // TODO progress += iterationStart
            /**
             * Get the current iteration (0 indexed). For instance the floor of
             * 2.5 is 2.
             */ let currentIteration = Math.floor(progress);
            /**
             * Get the current progress of the iteration by taking the remainder
             * so 2.5 is 0.5 through iteration 2
             */ let iterationProgress = progress % 1.0;
            if (!iterationProgress && progress >= 1) iterationProgress = 1;
            /**
             * If iteration progress is 1 we count that as the end
             * of the previous iteration.
             */ iterationProgress === 1 && currentIteration--;
            /**
             * Reverse progress if we're not running in "normal" direction
             */ const iterationIsOdd = currentIteration % 2;
            if (direction === "reverse" || direction === "alternate" && iterationIsOdd || direction === "alternate-reverse" && !iterationIsOdd) iterationProgress = 1 - iterationProgress;
            const p = t >= this.totalDuration ? 1 : Math.min(iterationProgress, 1);
            const latest = interpolate$1(this.easing(p));
            output(latest);
            const isAnimationFinished = this.pauseTime === undefined && (this.playState === "finished" || t >= this.totalDuration + endDelay);
            if (isAnimationFinished) {
                this.playState = "finished";
                (_a = this.resolve) === null || _a === void 0 || _a.call(this, latest);
            } else if (this.playState !== "idle") this.frameRequestId = requestAnimationFrame(this.tick);
        };
        this.play();
    }
    play() {
        const now = performance.now();
        this.playState = "running";
        if (this.pauseTime !== undefined) this.startTime = now - this.pauseTime;
        else if (!this.startTime) this.startTime = now;
        this.cancelTimestamp = this.startTime;
        this.pauseTime = undefined;
        this.frameRequestId = requestAnimationFrame(this.tick);
    }
    pause() {
        this.playState = "paused";
        this.pauseTime = this.t;
    }
    finish() {
        this.playState = "finished";
        this.tick(0);
    }
    stop() {
        var _a;
        this.playState = "idle";
        if (this.frameRequestId !== undefined) cancelAnimationFrame(this.frameRequestId);
        (_a = this.reject) === null || _a === void 0 || _a.call(this, false);
    }
    cancel() {
        this.stop();
        this.tick(this.cancelTimestamp);
    }
    reverse() {
        this.rate *= -1;
    }
    commitStyles() {}
    updateDuration(duration) {
        this.duration = duration;
        this.totalDuration = duration * (this.repeat + 1);
    }
    get currentTime() {
        return this.t;
    }
    set currentTime(t) {
        if (this.pauseTime !== undefined || this.rate === 0) this.pauseTime = t;
        else this.startTime = performance.now() - t / this.rate;
    }
    get playbackRate() {
        return this.rate;
    }
    set playbackRate(rate) {
        this.rate = rate;
    }
}

});
parcelRequire.register("7KzAU", function(module, exports) {

$parcel$export(module.exports, "defaults", () => $5a48708c04f79c82$export$ebe90cb607ad99e);
const $5a48708c04f79c82$export$ebe90cb607ad99e = {
    duration: 0.3,
    delay: 0,
    endDelay: 0,
    repeat: 0,
    easing: "ease"
};

});

parcelRequire.register("jhKeO", function(module, exports) {

$parcel$export(module.exports, "interpolate", () => $e0a378baa0d17c94$export$89e29e4ab65e70a9);

var $1I5IW = parcelRequire("1I5IW");

var $dmk6E = parcelRequire("dmk6E");

var $4pq5n = parcelRequire("4pq5n");

var $cmp0b = parcelRequire("cmp0b");

var $9eiME = parcelRequire("9eiME");

var $d4ps3 = parcelRequire("d4ps3");
function $e0a378baa0d17c94$export$89e29e4ab65e70a9(output, input = (0, $4pq5n.defaultOffset)(output.length), easing = (0, $dmk6E.noopReturn)) {
    const length = output.length;
    /**
     * If the input length is lower than the output we
     * fill the input to match. This currently assumes the input
     * is an animation progress value so is a good candidate for
     * moving outside the function.
     */ const remainder = length - input.length;
    remainder > 0 && (0, $4pq5n.fillOffset)(input, remainder);
    return (t)=>{
        let i = 0;
        for(; i < length - 2; i++){
            if (t < input[i + 1]) break;
        }
        let progressInRange = (0, $d4ps3.clamp)(0, 1, (0, $cmp0b.progress)(input[i], input[i + 1], t));
        const segmentEasing = (0, $9eiME.getEasingForSegment)(easing, i);
        progressInRange = segmentEasing(progressInRange);
        return (0, $1I5IW.mix)(output[i], output[i + 1], progressInRange);
    };
}

});
parcelRequire.register("1I5IW", function(module, exports) {

$parcel$export(module.exports, "mix", () => $13ee57261853e4f0$export$2c9e8a9632a706b2);
const $13ee57261853e4f0$export$2c9e8a9632a706b2 = (min, max, progress)=>-progress * min + progress * max + min;

});

parcelRequire.register("dmk6E", function(module, exports) {

$parcel$export(module.exports, "noop", () => $9b9ced1d350df27a$export$8793edee2d425525);
$parcel$export(module.exports, "noopReturn", () => $9b9ced1d350df27a$export$ea6e51872ab1b721);
const $9b9ced1d350df27a$export$8793edee2d425525 = ()=>{};
const $9b9ced1d350df27a$export$ea6e51872ab1b721 = (v)=>v;

});

parcelRequire.register("4pq5n", function(module, exports) {

$parcel$export(module.exports, "fillOffset", () => $335dbb4f5bbf3b8b$export$dafee61230cf05c6);
$parcel$export(module.exports, "defaultOffset", () => $335dbb4f5bbf3b8b$export$24dbcec0b26e6d9d);

var $1I5IW = parcelRequire("1I5IW");

var $cmp0b = parcelRequire("cmp0b");
function $335dbb4f5bbf3b8b$export$dafee61230cf05c6(offset, remaining) {
    const min = offset[offset.length - 1];
    for(let i = 1; i <= remaining; i++){
        const offsetProgress = (0, $cmp0b.progress)(0, remaining, i);
        offset.push((0, $1I5IW.mix)(min, 1, offsetProgress));
    }
}
function $335dbb4f5bbf3b8b$export$24dbcec0b26e6d9d(length) {
    const offset = [
        0
    ];
    $335dbb4f5bbf3b8b$export$dafee61230cf05c6(offset, length - 1);
    return offset;
}

});
parcelRequire.register("cmp0b", function(module, exports) {

$parcel$export(module.exports, "progress", () => $8ffaeefb3816b1f7$export$504d7abb21fa8c9);
const $8ffaeefb3816b1f7$export$504d7abb21fa8c9 = (min, max, value)=>max - min === 0 ? 1 : (value - min) / (max - min);

});


parcelRequire.register("9eiME", function(module, exports) {

$parcel$export(module.exports, "getEasingForSegment", () => $6b83fded9d727d8d$export$41c5e731255a462);

var $hXtFy = parcelRequire("hXtFy");

var $3p56N = parcelRequire("3p56N");
function $6b83fded9d727d8d$export$41c5e731255a462(easing, i) {
    return (0, $hXtFy.isEasingList)(easing) ? easing[(0, $3p56N.wrap)(0, easing.length, i)] : easing;
}

});
parcelRequire.register("hXtFy", function(module, exports) {

$parcel$export(module.exports, "isEasingList", () => $d12ef60c423828c7$export$981cc9ef33696dc8);

var $l3Cny = parcelRequire("l3Cny");
const $d12ef60c423828c7$export$981cc9ef33696dc8 = (easing)=>Array.isArray(easing) && !(0, $l3Cny.isNumber)(easing[0]);

});
parcelRequire.register("l3Cny", function(module, exports) {

$parcel$export(module.exports, "isNumber", () => $f547a60d4c121f46$export$7e4aa119212bc614);
const $f547a60d4c121f46$export$7e4aa119212bc614 = (value)=>typeof value === "number";

});


parcelRequire.register("3p56N", function(module, exports) {

$parcel$export(module.exports, "wrap", () => $27a7ab58831d2eb1$export$4997ffc0176396a6);
const $27a7ab58831d2eb1$export$4997ffc0176396a6 = (min, max, v)=>{
    const rangeSize = max - min;
    return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

});


parcelRequire.register("d4ps3", function(module, exports) {

$parcel$export(module.exports, "clamp", () => $983f643dd2359728$export$7d15b64cf5a3a4c4);
const $983f643dd2359728$export$7d15b64cf5a3a4c4 = (min, max, v)=>Math.min(Math.max(v, min), max);

});


parcelRequire.register("dB5Tz", function(module, exports) {

$parcel$export(module.exports, "isEasingGenerator", () => $9e634dbb0a31df4f$export$d81a3021299cadf2);
const $9e634dbb0a31df4f$export$d81a3021299cadf2 = (easing)=>typeof easing === "object" && Boolean(easing.createAnimation);

});

parcelRequire.register("41k8W", function(module, exports) {

$parcel$export(module.exports, "getEasingFunction", () => $2ed6e170d67e366d$export$9681b459c1c8f0f4);

var $cuacB = parcelRequire("cuacB");
var $F9Vs0 = parcelRequire("F9Vs0");

var $lbYGt = parcelRequire("lbYGt");
var $esvtr = parcelRequire("esvtr");
var $dmk6E = parcelRequire("dmk6E");
const $2ed6e170d67e366d$var$namedEasings = {
    ease: (0, $cuacB.cubicBezier)(0.25, 0.1, 0.25, 1.0),
    "ease-in": (0, $cuacB.cubicBezier)(0.42, 0.0, 1.0, 1.0),
    "ease-in-out": (0, $cuacB.cubicBezier)(0.42, 0.0, 0.58, 1.0),
    "ease-out": (0, $cuacB.cubicBezier)(0.0, 0.0, 0.58, 1.0)
};
const $2ed6e170d67e366d$var$functionArgsRegex = /\((.*?)\)/;
function $2ed6e170d67e366d$export$9681b459c1c8f0f4(definition) {
    // If already an easing function, return
    if ((0, $esvtr.isFunction)(definition)) return definition;
    // If an easing curve definition, return bezier function
    if ((0, $lbYGt.isCubicBezier)(definition)) return (0, $cuacB.cubicBezier)(...definition);
    // If we have a predefined easing function, return
    if ($2ed6e170d67e366d$var$namedEasings[definition]) return $2ed6e170d67e366d$var$namedEasings[definition];
    // If this is a steps function, attempt to create easing curve
    if (definition.startsWith("steps")) {
        const args = $2ed6e170d67e366d$var$functionArgsRegex.exec(definition);
        if (args) {
            const argsArray = args[1].split(",");
            return (0, $F9Vs0.steps)(parseFloat(argsArray[0]), argsArray[1].trim());
        }
    }
    return 0, $dmk6E.noopReturn;
}

});
parcelRequire.register("cuacB", function(module, exports) {

$parcel$export(module.exports, "cubicBezier", () => $91703357d0c60703$export$2c575fa1d20488bd);

var $dmk6E = parcelRequire("dmk6E");
/*
  Bezier function generator

  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticiably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.

  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.

  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/ // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const $91703357d0c60703$var$calcBezier = (t, a1, a2)=>(((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const $91703357d0c60703$var$subdivisionPrecision = 0.0000001;
const $91703357d0c60703$var$subdivisionMaxIterations = 12;
function $91703357d0c60703$var$binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = $91703357d0c60703$var$calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) upperBound = currentT;
        else lowerBound = currentT;
    }while (Math.abs(currentX) > $91703357d0c60703$var$subdivisionPrecision && ++i < $91703357d0c60703$var$subdivisionMaxIterations);
    return currentT;
}
function $91703357d0c60703$export$2c575fa1d20488bd(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2) return 0, $dmk6E.noopReturn;
    const getTForX = (aX)=>$91703357d0c60703$var$binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t)=>t === 0 || t === 1 ? t : $91703357d0c60703$var$calcBezier(getTForX(t), mY1, mY2);
}

});

parcelRequire.register("F9Vs0", function(module, exports) {

$parcel$export(module.exports, "steps", () => $07bb8778ef840415$export$be3f796aed065412);

var $d4ps3 = parcelRequire("d4ps3");
const $07bb8778ef840415$export$be3f796aed065412 = (steps, direction = "end")=>(progress)=>{
        progress = direction === "end" ? Math.min(progress, 0.999) : Math.max(progress, 0.001);
        const expanded = progress * steps;
        const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
        return (0, $d4ps3.clamp)(0, 1, rounded / steps);
    };

});

parcelRequire.register("lbYGt", function(module, exports) {

$parcel$export(module.exports, "isCubicBezier", () => $f6d9b2a931361b75$export$77290801a62f77a2);

var $l3Cny = parcelRequire("l3Cny");
const $f6d9b2a931361b75$export$77290801a62f77a2 = (easing)=>Array.isArray(easing) && (0, $l3Cny.isNumber)(easing[0]);

});

parcelRequire.register("esvtr", function(module, exports) {

$parcel$export(module.exports, "isFunction", () => $a86c184586e20179$export$f6e2535fb5126e54);
const $a86c184586e20179$export$f6e2535fb5126e54 = (value)=>typeof value === "function";

});



parcelRequire.register("9v1FE", function(module, exports) {

$parcel$export(module.exports, "createAnimate", () => $6ea84e1b5ba319ec$export$2a47ca22dbf0bb08);

var $lJQRE = parcelRequire("lJQRE");

var $hwmg7 = parcelRequire("hwmg7");

var $jPI6V = parcelRequire("jPI6V");

var $gaOW9 = parcelRequire("gaOW9");

var $3yiQd = parcelRequire("3yiQd");

var $bJx7B = parcelRequire("bJx7B");
function $6ea84e1b5ba319ec$export$2a47ca22dbf0bb08(AnimatePolyfill) {
    return function animate(elements, keyframes, options = {}) {
        elements = (0, $gaOW9.resolveElements)(elements);
        const numElements = elements.length;
        (0, $lJQRE.invariant)(Boolean(numElements), "No valid element provided.");
        (0, $lJQRE.invariant)(Boolean(keyframes), "No keyframes defined.");
        /**
         * Create and start new animations
         */ const animationFactories = [];
        for(let i = 0; i < numElements; i++){
            const element = elements[i];
            for(const key in keyframes){
                const valueOptions = (0, $jPI6V.getOptions)(options, key);
                valueOptions.delay = (0, $bJx7B.resolveOption)(valueOptions.delay, i, numElements);
                const animation = (0, $hwmg7.animateStyle)(element, key, keyframes[key], valueOptions, AnimatePolyfill);
                animationFactories.push(animation);
            }
        }
        return (0, $3yiQd.withControls)(animationFactories, options, /**
         * TODO:
         * If easing is set to spring or glide, duration will be dynamically
         * generated. Ideally we would dynamically generate this from
         * animation.effect.getComputedTiming().duration but this isn't
         * supported in iOS13 or our number polyfill. Perhaps it's possible
         * to Proxy animations returned from animateStyle that has duration
         * as a getter.
         */ options.duration);
    };
}

});
parcelRequire.register("lJQRE", function(module, exports) {

$parcel$export(module.exports, "invariant", () => $fd36ceb155c8adbc$export$f5708dca728d7177);
var $fd36ceb155c8adbc$export$491112666e282270 = function() {};
var $fd36ceb155c8adbc$export$f5708dca728d7177 = function() {};

});

parcelRequire.register("hwmg7", function(module, exports) {

$parcel$export(module.exports, "animateStyle", () => $cc16b100433bac3c$export$c76cd972d26986f9);

var $3FQY2 = parcelRequire("3FQY2");

var $brg4o = parcelRequire("brg4o");

var $7KzAU = parcelRequire("7KzAU");
var $dB5Tz = parcelRequire("dB5Tz");
var $hXtFy = parcelRequire("hXtFy");
var $esvtr = parcelRequire("esvtr");
var $l3Cny = parcelRequire("l3Cny");
var $dmk6E = parcelRequire("dmk6E");
var $kPdxV = parcelRequire("kPdxV");

var $hiLcz = parcelRequire("hiLcz");

var $jYM7H = parcelRequire("jYM7H");

var $l3sR4 = parcelRequire("l3sR4");

var $jn7cf = parcelRequire("jn7cf");

var $hdE4h = parcelRequire("hdE4h");

var $fzPrb = parcelRequire("fzPrb");

var $gSnJv = parcelRequire("gSnJv");

var $fwOoz = parcelRequire("fwOoz");
function $cc16b100433bac3c$var$getDevToolsRecord() {
    return window.__MOTION_DEV_TOOLS_RECORD;
}
function $cc16b100433bac3c$export$c76cd972d26986f9(element, key, keyframesDefinition, options = {}, AnimationPolyfill) {
    const record = $cc16b100433bac3c$var$getDevToolsRecord();
    const isRecording = options.record !== false && record;
    let animation;
    let { duration: duration = (0, $7KzAU.defaults).duration , delay: delay = (0, $7KzAU.defaults).delay , endDelay: endDelay = (0, $7KzAU.defaults).endDelay , repeat: repeat = (0, $7KzAU.defaults).repeat , easing: easing = (0, $7KzAU.defaults).easing , persist: persist = false , direction: direction , offset: offset , allowWebkitAcceleration: allowWebkitAcceleration = false  } = options;
    const data = (0, $3FQY2.getAnimationData)(element);
    const valueIsTransform = (0, $hiLcz.isTransform)(key);
    let canAnimateNatively = (0, $l3sR4.supports).waapi();
    /**
     * If this is an individual transform, we need to map its
     * key to a CSS variable and update the element's transform style
     */ valueIsTransform && (0, $hiLcz.addTransformToElement)(element, key);
    const name = (0, $fzPrb.getStyleName)(key);
    const motionValue = (0, $3FQY2.getMotionValue)(data.values, name);
    /**
     * Get definition of value, this will be used to convert numerical
     * keyframes into the default value type.
     */ const definition = (0, $hiLcz.transformDefinitions).get(name);
    /**
     * Stop the current animation, if any. Because this will trigger
     * commitStyles (DOM writes) and we might later trigger DOM reads,
     * this is fired now and we return a factory function to create
     * the actual animation that can get called in batch,
     */ (0, $gSnJv.stopAnimation)(motionValue.animation, !((0, $dB5Tz.isEasingGenerator)(easing) && motionValue.generator) && options.record !== false);
    /**
     * Batchable factory function containing all DOM reads.
     */ return ()=>{
        const readInitialValue = ()=>{
            var _a, _b;
            return (_b = (_a = (0, $hdE4h.style).get(element, name)) !== null && _a !== void 0 ? _a : definition === null || definition === void 0 ? void 0 : definition.initialValue) !== null && _b !== void 0 ? _b : 0;
        };
        /**
         * Replace null values with the previous keyframe value, or read
         * it from the DOM if it's the first keyframe.
         */ let keyframes = (0, $jn7cf.hydrateKeyframes)((0, $jn7cf.keyframesList)(keyframesDefinition), readInitialValue);
        /**
         * Detect unit type of keyframes.
         */ const toUnit = (0, $fwOoz.getUnitConverter)(keyframes, definition);
        if ((0, $dB5Tz.isEasingGenerator)(easing)) {
            const custom = easing.createAnimation(keyframes, key !== "opacity", readInitialValue, name, motionValue);
            easing = custom.easing;
            keyframes = custom.keyframes || keyframes;
            duration = custom.duration || duration;
        }
        /**
         * If this is a CSS variable we need to register it with the browser
         * before it can be animated natively. We also set it with setProperty
         * rather than directly onto the element.style object.
         */ if ((0, $brg4o.isCssVar)(name)) {
            if ((0, $l3sR4.supports).cssRegisterProperty()) (0, $brg4o.registerCssVariable)(name);
            else canAnimateNatively = false;
        }
        /**
         * If we've been passed a custom easing function, and this browser
         * does **not** support linear() easing, and the value is a transform
         * (and thus a pure number) we can still support the custom easing
         * by falling back to the animation polyfill.
         */ if (valueIsTransform && !(0, $l3sR4.supports).linearEasing() && ((0, $esvtr.isFunction)(easing) || (0, $hXtFy.isEasingList)(easing) && easing.some((0, $esvtr.isFunction)))) canAnimateNatively = false;
        /**
         * If we can animate this value with WAAPI, do so.
         */ if (canAnimateNatively) {
            /**
             * Convert numbers to default value types. Currently this only supports
             * transforms but it could also support other value types.
             */ if (definition) keyframes = keyframes.map((value)=>(0, $l3Cny.isNumber)(value) ? definition.toDefaultUnit(value) : value);
            /**
             * If this browser doesn't support partial/implicit keyframes we need to
             * explicitly provide one.
             */ if (keyframes.length === 1 && (!(0, $l3sR4.supports).partialKeyframes() || isRecording)) keyframes.unshift(readInitialValue());
            const animationOptions = {
                delay: (0, $kPdxV.time).ms(delay),
                duration: (0, $kPdxV.time).ms(duration),
                endDelay: (0, $kPdxV.time).ms(endDelay),
                easing: !(0, $hXtFy.isEasingList)(easing) ? (0, $jYM7H.convertEasing)(easing, duration) : undefined,
                direction: direction,
                iterations: repeat + 1,
                fill: "both"
            };
            animation = element.animate({
                [name]: keyframes,
                offset: offset,
                easing: (0, $hXtFy.isEasingList)(easing) ? easing.map((thisEasing)=>(0, $jYM7H.convertEasing)(thisEasing, duration)) : undefined
            }, animationOptions);
            /**
             * Polyfill finished Promise in browsers that don't support it
             */ if (!animation.finished) animation.finished = new Promise((resolve, reject)=>{
                animation.onfinish = resolve;
                animation.oncancel = reject;
            });
            const target = keyframes[keyframes.length - 1];
            animation.finished.then(()=>{
                if (persist) return;
                // Apply styles to target
                (0, $hdE4h.style).set(element, name, target);
                // Ensure fill modes don't persist
                animation.cancel();
            }).catch((0, $dmk6E.noop));
            /**
             * This forces Webkit to run animations on the main thread by exploiting
             * this condition:
             * https://trac.webkit.org/browser/webkit/trunk/Source/WebCore/platform/graphics/ca/GraphicsLayerCA.cpp?rev=281238#L1099
             *
             * This fixes Webkit's timing bugs, like accelerated animations falling
             * out of sync with main thread animations and massive delays in starting
             * accelerated animations in WKWebView.
             */ if (!allowWebkitAcceleration) animation.playbackRate = 1.000001;
        /**
             * If we can't animate the value natively then we can fallback to the numbers-only
             * polyfill for transforms.
             */ } else if (AnimationPolyfill && valueIsTransform) {
            /**
             * If any keyframe is a string (because we measured it from the DOM), we need to convert
             * it into a number before passing to the Animation polyfill.
             */ keyframes = keyframes.map((value)=>typeof value === "string" ? parseFloat(value) : value);
            /**
             * If we only have a single keyframe, we need to create an initial keyframe by reading
             * the current value from the DOM.
             */ if (keyframes.length === 1) keyframes.unshift(parseFloat(readInitialValue()));
            animation = new AnimationPolyfill((latest)=>{
                (0, $hdE4h.style).set(element, name, toUnit ? toUnit(latest) : latest);
            }, keyframes, Object.assign(Object.assign({}, options), {
                duration: duration,
                easing: easing
            }));
        } else {
            const target = keyframes[keyframes.length - 1];
            (0, $hdE4h.style).set(element, name, definition && (0, $l3Cny.isNumber)(target) ? definition.toDefaultUnit(target) : target);
        }
        if (isRecording) record(element, key, keyframes, {
            duration: duration,
            delay: delay,
            easing: easing,
            repeat: repeat,
            offset: offset
        }, "motion-one");
        motionValue.setAnimation(animation);
        return animation;
    };
}

});
parcelRequire.register("3FQY2", function(module, exports) {

$parcel$export(module.exports, "getAnimationData", () => $2ace49a41ba81b76$export$213eea93596b44f);
$parcel$export(module.exports, "getMotionValue", () => $2ace49a41ba81b76$export$c0999ba824977ca6);

var $aRm33 = parcelRequire("aRm33");
const $2ace49a41ba81b76$var$data = new WeakMap();
function $2ace49a41ba81b76$export$213eea93596b44f(element) {
    if (!$2ace49a41ba81b76$var$data.has(element)) $2ace49a41ba81b76$var$data.set(element, {
        transforms: [],
        values: new Map()
    });
    return $2ace49a41ba81b76$var$data.get(element);
}
function $2ace49a41ba81b76$export$c0999ba824977ca6(motionValues, name) {
    if (!motionValues.has(name)) motionValues.set(name, new (0, $aRm33.MotionValue)());
    return motionValues.get(name);
}

});
parcelRequire.register("aRm33", function(module, exports) {

$parcel$export(module.exports, "MotionValue", () => $7e7ff4f7332a515c$export$8cea36d14ee64562);
/**
 * The MotionValue tracks the state of a single animatable
 * value. Currently, updatedAt and current are unused. The
 * long term idea is to use this to minimise the number
 * of DOM reads, and to abstract the DOM interactions here.
 */ class $7e7ff4f7332a515c$export$8cea36d14ee64562 {
    setAnimation(animation) {
        this.animation = animation;
        animation === null || animation === void 0 || animation.finished.then(()=>this.clearAnimation()).catch(()=>{});
    }
    clearAnimation() {
        this.animation = this.generator = undefined;
    }
}

});


parcelRequire.register("brg4o", function(module, exports) {

$parcel$export(module.exports, "isCssVar", () => $853eae793f8077c0$export$30a9abfd5fb9f5f6);
$parcel$export(module.exports, "registerCssVariable", () => $853eae793f8077c0$export$9fdd8c2f6f59adb0);

var $hiLcz = parcelRequire("hiLcz");
const $853eae793f8077c0$export$30a9abfd5fb9f5f6 = (name)=>name.startsWith("--");
const $853eae793f8077c0$export$7a740cb9e3dd106d = new Set();
function $853eae793f8077c0$export$9fdd8c2f6f59adb0(name) {
    if ($853eae793f8077c0$export$7a740cb9e3dd106d.has(name)) return;
    $853eae793f8077c0$export$7a740cb9e3dd106d.add(name);
    try {
        const { syntax: syntax , initialValue: initialValue  } = (0, $hiLcz.transformDefinitions).has(name) ? (0, $hiLcz.transformDefinitions).get(name) : {};
        CSS.registerProperty({
            name: name,
            inherits: false,
            syntax: syntax,
            initialValue: initialValue
        });
    } catch (e) {}
}

});
parcelRequire.register("hiLcz", function(module, exports) {

$parcel$export(module.exports, "transformAlias", () => $c988bb62da7bd0ee$export$97b5d3c90609c212);
$parcel$export(module.exports, "transformDefinitions", () => $c988bb62da7bd0ee$export$a9dad2abc3d443d);
$parcel$export(module.exports, "asTransformCssVar", () => $c988bb62da7bd0ee$export$7bbd29b1fa8b68d4);
$parcel$export(module.exports, "isTransform", () => $c988bb62da7bd0ee$export$8a546e9da811625d);
$parcel$export(module.exports, "addTransformToElement", () => $c988bb62da7bd0ee$export$40eba1f1af915c93);

var $idnuG = parcelRequire("idnuG");
var $dmk6E = parcelRequire("dmk6E");

var $3FQY2 = parcelRequire("3FQY2");
/**
 * A list of all transformable axes. We'll use this list to generated a version
 * of each axes for each transform.
 */ const $c988bb62da7bd0ee$export$a9a762b9618d4a18 = [
    "",
    "X",
    "Y",
    "Z"
];
/**
 * An ordered array of each transformable value. By default, transform values
 * will be sorted to this order.
 */ const $c988bb62da7bd0ee$var$order = [
    "translate",
    "scale",
    "rotate",
    "skew"
];
const $c988bb62da7bd0ee$export$97b5d3c90609c212 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ"
};
const $c988bb62da7bd0ee$var$rotation = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (v)=>v + "deg"
};
const $c988bb62da7bd0ee$var$baseTransformProperties = {
    translate: {
        syntax: "<length-percentage>",
        initialValue: "0px",
        toDefaultUnit: (v)=>v + "px"
    },
    rotate: $c988bb62da7bd0ee$var$rotation,
    scale: {
        syntax: "<number>",
        initialValue: 1,
        toDefaultUnit: (0, $dmk6E.noopReturn)
    },
    skew: $c988bb62da7bd0ee$var$rotation
};
const $c988bb62da7bd0ee$export$a9dad2abc3d443d = new Map();
const $c988bb62da7bd0ee$export$7bbd29b1fa8b68d4 = (name)=>`--motion-${name}`;
/**
 * Generate a list of every possible transform key
 */ const $c988bb62da7bd0ee$var$transforms = [
    "x",
    "y",
    "z"
];
$c988bb62da7bd0ee$var$order.forEach((name)=>{
    $c988bb62da7bd0ee$export$a9a762b9618d4a18.forEach((axis)=>{
        $c988bb62da7bd0ee$var$transforms.push(name + axis);
        $c988bb62da7bd0ee$export$a9dad2abc3d443d.set($c988bb62da7bd0ee$export$7bbd29b1fa8b68d4(name + axis), $c988bb62da7bd0ee$var$baseTransformProperties[name]);
    });
});
/**
 * A function to use with Array.sort to sort transform keys by their default order.
 */ const $c988bb62da7bd0ee$export$11410fe03e8c4042 = (a, b)=>$c988bb62da7bd0ee$var$transforms.indexOf(a) - $c988bb62da7bd0ee$var$transforms.indexOf(b);
/**
 * Provide a quick way to check if a string is the name of a transform
 */ const $c988bb62da7bd0ee$var$transformLookup = new Set($c988bb62da7bd0ee$var$transforms);
const $c988bb62da7bd0ee$export$8a546e9da811625d = (name)=>$c988bb62da7bd0ee$var$transformLookup.has(name);
const $c988bb62da7bd0ee$export$40eba1f1af915c93 = (element, name)=>{
    // Map x to translateX etc
    if ($c988bb62da7bd0ee$export$97b5d3c90609c212[name]) name = $c988bb62da7bd0ee$export$97b5d3c90609c212[name];
    const { transforms: transforms  } = (0, $3FQY2.getAnimationData)(element);
    (0, $idnuG.addUniqueItem)(transforms, name);
    /**
     * TODO: An optimisation here could be to cache the transform in element data
     * and only update if this has changed.
     */ element.style.transform = $c988bb62da7bd0ee$export$785216816cb6f870(transforms);
};
const $c988bb62da7bd0ee$export$785216816cb6f870 = (transforms)=>transforms.sort($c988bb62da7bd0ee$export$11410fe03e8c4042).reduce($c988bb62da7bd0ee$var$transformListToString, "").trim();
const $c988bb62da7bd0ee$var$transformListToString = (template, name)=>`${template} ${name}(var(${$c988bb62da7bd0ee$export$7bbd29b1fa8b68d4(name)}))`;

});
parcelRequire.register("idnuG", function(module, exports) {

$parcel$export(module.exports, "addUniqueItem", () => $d42baa508abb734d$export$20e507e47fae79fd);
function $d42baa508abb734d$export$20e507e47fae79fd(array, item) {
    array.indexOf(item) === -1 && array.push(item);
}
function $d42baa508abb734d$export$fe2d9b4e03920b4c(arr, item) {
    const index = arr.indexOf(item);
    index > -1 && arr.splice(index, 1);
}

});



parcelRequire.register("kPdxV", function(module, exports) {

$parcel$export(module.exports, "time", () => $f293140e7e7f3c7f$export$2da9be4cfdb689b1);
const $f293140e7e7f3c7f$export$2da9be4cfdb689b1 = {
    ms: (seconds)=>seconds * 1000,
    s: (milliseconds)=>milliseconds / 1000
};

});

parcelRequire.register("jYM7H", function(module, exports) {

$parcel$export(module.exports, "convertEasing", () => $e8b8f32a8e96620c$export$284d1118c33f9836);

var $7KzAU = parcelRequire("7KzAU");
var $lbYGt = parcelRequire("lbYGt");
var $esvtr = parcelRequire("esvtr");
var $cmp0b = parcelRequire("cmp0b");

var $l3sR4 = parcelRequire("l3sR4");
// Create a linear easing point for every x second
const $e8b8f32a8e96620c$var$resolution = 0.015;
const $e8b8f32a8e96620c$export$a74bbb7e96c8ced4 = (easing, duration)=>{
    let points = "";
    const numPoints = Math.round(duration / $e8b8f32a8e96620c$var$resolution);
    for(let i = 0; i < numPoints; i++)points += easing((0, $cmp0b.progress)(0, numPoints - 1, i)) + ", ";
    return points.substring(0, points.length - 2);
};
const $e8b8f32a8e96620c$export$284d1118c33f9836 = (easing, duration)=>{
    if ((0, $esvtr.isFunction)(easing)) return (0, $l3sR4.supports).linearEasing() ? `linear(${$e8b8f32a8e96620c$export$a74bbb7e96c8ced4(easing, duration)})` : (0, $7KzAU.defaults).easing;
    else return (0, $lbYGt.isCubicBezier)(easing) ? $e8b8f32a8e96620c$export$2523b8f0bd8f44cb(easing) : easing;
};
const $e8b8f32a8e96620c$export$2523b8f0bd8f44cb = ([a, b, c, d])=>`cubic-bezier(${a}, ${b}, ${c}, ${d})`;

});
parcelRequire.register("l3sR4", function(module, exports) {

$parcel$export(module.exports, "supports", () => $f54042c73912c0ba$export$cde6a56f9669daf6);
const $f54042c73912c0ba$var$testAnimation = (keyframes, options)=>document.createElement("div").animate(keyframes, options);
const $f54042c73912c0ba$var$featureTests = {
    cssRegisterProperty: ()=>typeof CSS !== "undefined" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: ()=>Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: ()=>{
        try {
            $f54042c73912c0ba$var$testAnimation({
                opacity: [
                    1
                ]
            });
        } catch (e) {
            return false;
        }
        return true;
    },
    finished: ()=>Boolean($f54042c73912c0ba$var$testAnimation({
            opacity: [
                0,
                1
            ]
        }, {
            duration: 0.001
        }).finished),
    linearEasing: ()=>{
        try {
            $f54042c73912c0ba$var$testAnimation({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            });
        } catch (e) {
            return false;
        }
        return true;
    }
};
const $f54042c73912c0ba$var$results = {};
const $f54042c73912c0ba$export$cde6a56f9669daf6 = {};
for(const key in $f54042c73912c0ba$var$featureTests)$f54042c73912c0ba$export$cde6a56f9669daf6[key] = ()=>{
    if ($f54042c73912c0ba$var$results[key] === undefined) $f54042c73912c0ba$var$results[key] = $f54042c73912c0ba$var$featureTests[key]();
    return $f54042c73912c0ba$var$results[key];
};

});


parcelRequire.register("jn7cf", function(module, exports) {

$parcel$export(module.exports, "hydrateKeyframes", () => $e1a5bf5d157e6b1f$export$3d2f5b3e7004e0cf);
$parcel$export(module.exports, "keyframesList", () => $e1a5bf5d157e6b1f$export$388e66a97327a012);
function $e1a5bf5d157e6b1f$export$3d2f5b3e7004e0cf(keyframes, readInitialValue) {
    for(let i = 0; i < keyframes.length; i++)if (keyframes[i] === null) keyframes[i] = i ? keyframes[i - 1] : readInitialValue();
    return keyframes;
}
const $e1a5bf5d157e6b1f$export$388e66a97327a012 = (keyframes)=>Array.isArray(keyframes) ? keyframes : [
        keyframes
    ];

});

parcelRequire.register("hdE4h", function(module, exports) {

$parcel$export(module.exports, "style", () => $c892bb416f6a3e85$export$1d567c320f4763bc);

var $brg4o = parcelRequire("brg4o");

var $fzPrb = parcelRequire("fzPrb");

var $hiLcz = parcelRequire("hiLcz");
const $c892bb416f6a3e85$export$1d567c320f4763bc = {
    get: (element, name)=>{
        name = (0, $fzPrb.getStyleName)(name);
        let value = (0, $brg4o.isCssVar)(name) ? element.style.getPropertyValue(name) : getComputedStyle(element)[name];
        if (!value && value !== 0) {
            const definition = (0, $hiLcz.transformDefinitions).get(name);
            if (definition) value = definition.initialValue;
        }
        return value;
    },
    set: (element, name, value)=>{
        name = (0, $fzPrb.getStyleName)(name);
        if ((0, $brg4o.isCssVar)(name)) element.style.setProperty(name, value);
        else element.style[name] = value;
    }
};

});
parcelRequire.register("fzPrb", function(module, exports) {

$parcel$export(module.exports, "getStyleName", () => $b57206479e0649a0$export$b6557f397a74f857);

var $hiLcz = parcelRequire("hiLcz");
function $b57206479e0649a0$export$b6557f397a74f857(key) {
    if ((0, $hiLcz.transformAlias)[key]) key = (0, $hiLcz.transformAlias)[key];
    return (0, $hiLcz.isTransform)(key) ? (0, $hiLcz.asTransformCssVar)(key) : key;
}

});


parcelRequire.register("gSnJv", function(module, exports) {

$parcel$export(module.exports, "stopAnimation", () => $c4941958b958a6bf$export$3cc6f911ef1fd837);
function $c4941958b958a6bf$export$3cc6f911ef1fd837(animation, needsCommit = true) {
    if (!animation || animation.playState === "finished") return;
    // Suppress error thrown by WAAPI
    try {
        if (animation.stop) animation.stop();
        else {
            needsCommit && animation.commitStyles();
            animation.cancel();
        }
    } catch (e) {}
}

});

parcelRequire.register("fwOoz", function(module, exports) {

$parcel$export(module.exports, "getUnitConverter", () => $b4e0efa7dab04116$export$4bcf070800a2fd35);

var $kutGu = parcelRequire("kutGu");
var $dmk6E = parcelRequire("dmk6E");
function $b4e0efa7dab04116$export$4bcf070800a2fd35(keyframes, definition) {
    var _a;
    let toUnit = (definition === null || definition === void 0 ? void 0 : definition.toDefaultUnit) || (0, $dmk6E.noopReturn);
    const finalKeyframe = keyframes[keyframes.length - 1];
    if ((0, $kutGu.isString)(finalKeyframe)) {
        const unit = ((_a = finalKeyframe.match(/(-?[\d.]+)([a-z%]*)/)) === null || _a === void 0 ? void 0 : _a[2]) || "";
        if (unit) toUnit = (value)=>value + unit;
    }
    return toUnit;
}

});
parcelRequire.register("kutGu", function(module, exports) {

$parcel$export(module.exports, "isString", () => $eeada2b1592caf50$export$844ec244b1367d54);
const $eeada2b1592caf50$export$844ec244b1367d54 = (value)=>typeof value === "string";

});



parcelRequire.register("jPI6V", function(module, exports) {

$parcel$export(module.exports, "getOptions", () => $e704ff3227c46425$export$d2312e68e1f5ad00);
const $e704ff3227c46425$export$d2312e68e1f5ad00 = (options, key)=>/**
 * TODO: Make test for this
 * Always return a new object otherwise delay is overwritten by results of stagger
 * and this results in no stagger
 */ options[key] ? Object.assign(Object.assign({}, options), options[key]) : Object.assign({}, options);

});

parcelRequire.register("gaOW9", function(module, exports) {

$parcel$export(module.exports, "resolveElements", () => $bc651788fb0c29c1$export$90ceba2564a894f8);
function $bc651788fb0c29c1$export$90ceba2564a894f8(elements, selectorCache) {
    var _a;
    if (typeof elements === "string") {
        if (selectorCache) {
            (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : selectorCache[elements] = document.querySelectorAll(elements);
            elements = selectorCache[elements];
        } else elements = document.querySelectorAll(elements);
    } else if (elements instanceof Element) elements = [
        elements
    ];
    /**
     * Return an empty array
     */ return Array.from(elements || []);
}

});

parcelRequire.register("3yiQd", function(module, exports) {

$parcel$export(module.exports, "withControls", () => $296329895f1fcd28$export$c5e4bb50450218c1);

var $7KzAU = parcelRequire("7KzAU");
var $dmk6E = parcelRequire("dmk6E");
var $kPdxV = parcelRequire("kPdxV");

var $gSnJv = parcelRequire("gSnJv");
const $296329895f1fcd28$var$createAnimation = (factory)=>factory();
const $296329895f1fcd28$export$c5e4bb50450218c1 = (animationFactory, options, duration = (0, $7KzAU.defaults).duration)=>{
    return new Proxy({
        animations: animationFactory.map($296329895f1fcd28$var$createAnimation).filter(Boolean),
        duration: duration,
        options: options
    }, $296329895f1fcd28$export$cc1adf6fb659c762);
};
/**
 * TODO:
 * Currently this returns the first animation, ideally it would return
 * the first active animation.
 */ const $296329895f1fcd28$var$getActiveAnimation = (state)=>state.animations[0];
const $296329895f1fcd28$export$cc1adf6fb659c762 = {
    get: (target, key)=>{
        const activeAnimation = $296329895f1fcd28$var$getActiveAnimation(target);
        switch(key){
            case "duration":
                return target.duration;
            case "currentTime":
                return (0, $kPdxV.time).s((activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) || 0);
            case "playbackRate":
            case "playState":
                return activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key];
            case "finished":
                if (!target.finished) target.finished = Promise.all(target.animations.map($296329895f1fcd28$var$selectFinished)).catch((0, $dmk6E.noop));
                return target.finished;
            case "stop":
                return ()=>{
                    target.animations.forEach((animation)=>(0, $gSnJv.stopAnimation)(animation));
                };
            case "forEachNative":
                /**
                 * This is for internal use only, fire a callback for each
                 * underlying animation.
                 */ return (callback)=>{
                    target.animations.forEach((animation)=>callback(animation, target));
                };
            default:
                return typeof (activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) === "undefined" ? undefined : ()=>target.animations.forEach((animation)=>animation[key]());
        }
    },
    set: (target, key, value)=>{
        switch(key){
            case "currentTime":
                value = (0, $kPdxV.time).ms(value);
            case "currentTime":
            case "playbackRate":
                for(let i = 0; i < target.animations.length; i++)target.animations[i][key] = value;
                return true;
        }
        return false;
    }
};
const $296329895f1fcd28$var$selectFinished = (animation)=>animation.finished;

});

parcelRequire.register("bJx7B", function(module, exports) {

$parcel$export(module.exports, "resolveOption", () => $88ad96ed4cb2aa58$export$4cf8f03b86be8175);

var $esvtr = parcelRequire("esvtr");
var $l3Cny = parcelRequire("l3Cny");

var $41k8W = parcelRequire("41k8W");
function $88ad96ed4cb2aa58$export$ef0b4d89074db4d0(duration = 0.1, { start: start = 0 , from: from = 0 , easing: easing  } = {}) {
    return (i, total)=>{
        const fromIndex = (0, $l3Cny.isNumber)(from) ? from : $88ad96ed4cb2aa58$export$a7952f4918e96441(from, total);
        const distance = Math.abs(fromIndex - i);
        let delay = duration * distance;
        if (easing) {
            const maxDelay = total * duration;
            const easingFunction = (0, $41k8W.getEasingFunction)(easing);
            delay = easingFunction(delay / maxDelay) * maxDelay;
        }
        return start + delay;
    };
}
function $88ad96ed4cb2aa58$export$a7952f4918e96441(from, total) {
    if (from === "first") return 0;
    else {
        const lastIndex = total - 1;
        return from === "last" ? lastIndex : lastIndex / 2;
    }
}
function $88ad96ed4cb2aa58$export$4cf8f03b86be8175(option, i, total) {
    return (0, $esvtr.isFunction)(option) ? option(i, total) : option;
}

});




parcelRequire.register("8HbD4", function(module, exports) {

$parcel$export(module.exports, "spring", () => $654b5c2dca98c7ac$export$b36281d89752ae66);

var $78hZk = parcelRequire("78hZk");

var $2IeMH = parcelRequire("2IeMH");
const $654b5c2dca98c7ac$export$b36281d89752ae66 = (0, $2IeMH.createGeneratorEasing)((0, $78hZk.spring));

});
parcelRequire.register("78hZk", function(module, exports) {

$parcel$export(module.exports, "spring", () => $53173bd39bca0e91$export$b36281d89752ae66);

var $kPdxV = parcelRequire("kPdxV");

var $jgBsS = parcelRequire("jgBsS");

var $29Rrc = parcelRequire("29Rrc");

var $hZ4JI = parcelRequire("hZ4JI");

var $lo6Wq = parcelRequire("lo6Wq");
const $53173bd39bca0e91$export$b36281d89752ae66 = ({ stiffness: stiffness = (0, $jgBsS.defaults).stiffness , damping: damping = (0, $jgBsS.defaults).damping , mass: mass = (0, $jgBsS.defaults).mass , from: from = 0 , to: to = 1 , velocity: velocity = 0.0 , restSpeed: restSpeed = 2 , restDistance: restDistance = 0.5  } = {})=>{
    velocity = velocity ? (0, $kPdxV.time).s(velocity) : 0.0;
    const state = {
        done: false,
        hasReachedTarget: false,
        current: from,
        target: to
    };
    const initialDelta = to - from;
    const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1000;
    const dampingRatio = (0, $29Rrc.calcDampingRatio)(stiffness, damping, mass);
    let resolveSpring;
    if (dampingRatio < 1) {
        const angularFreq = undampedAngularFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
        // Underdamped spring (bouncy)
        resolveSpring = (t)=>to - Math.exp(-dampingRatio * undampedAngularFreq * t) * ((-velocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
    } else // Critically damped spring
    resolveSpring = (t)=>{
        return to - Math.exp(-undampedAngularFreq * t) * (initialDelta + (-velocity + undampedAngularFreq * initialDelta) * t);
    };
    return (t)=>{
        state.current = resolveSpring(t);
        const currentVelocity = t === 0 ? velocity : (0, $lo6Wq.calcGeneratorVelocity)(resolveSpring, t, state.current);
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(to - state.current) <= restDistance;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
        state.hasReachedTarget = (0, $hZ4JI.hasReachedTarget)(from, to, state.current);
        return state;
    };
};

});
parcelRequire.register("jgBsS", function(module, exports) {

$parcel$export(module.exports, "defaults", () => $e06c92a4d824d7a0$export$ebe90cb607ad99e);
const $e06c92a4d824d7a0$export$ebe90cb607ad99e = {
    stiffness: 100.0,
    damping: 10.0,
    mass: 1.0
};

});

parcelRequire.register("29Rrc", function(module, exports) {

$parcel$export(module.exports, "calcDampingRatio", () => $1925dfaa1469e45e$export$7ce8b555f6ee4ca);

var $jgBsS = parcelRequire("jgBsS");
const $1925dfaa1469e45e$export$7ce8b555f6ee4ca = (stiffness = (0, $jgBsS.defaults).stiffness, damping = (0, $jgBsS.defaults).damping, mass = (0, $jgBsS.defaults).mass)=>damping / (2 * Math.sqrt(stiffness * mass));

});

parcelRequire.register("hZ4JI", function(module, exports) {

$parcel$export(module.exports, "hasReachedTarget", () => $0360f6f26759c1e4$export$f05961a5126db1a3);
function $0360f6f26759c1e4$export$f05961a5126db1a3(origin, target, current) {
    return origin < target && current >= target || origin > target && current <= target;
}

});

parcelRequire.register("lo6Wq", function(module, exports) {

$parcel$export(module.exports, "calcGeneratorVelocity", () => $f921394537ca6616$export$854187271d233eb5);

var $k0Ak3 = parcelRequire("k0Ak3");
const $f921394537ca6616$var$sampleT = 5; // ms
function $f921394537ca6616$export$854187271d233eb5(resolveValue, t, current) {
    const prevT = Math.max(t - $f921394537ca6616$var$sampleT, 0);
    return (0, $k0Ak3.velocityPerSecond)(current - resolveValue(prevT), t - prevT);
}

});
parcelRequire.register("k0Ak3", function(module, exports) {

$parcel$export(module.exports, "velocityPerSecond", () => $e90ffba0fa429ec3$export$eab0632f7ad4f9d7);
/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/ function $e90ffba0fa429ec3$export$eab0632f7ad4f9d7(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}

});



parcelRequire.register("2IeMH", function(module, exports) {

$parcel$export(module.exports, "createGeneratorEasing", () => $1f9b28be61efdf2e$export$7f1511d09ee75a99);

var $lo6Wq = parcelRequire("lo6Wq");
var $fPP0s = parcelRequire("fPP0s");

var $l3Cny = parcelRequire("l3Cny");
var $kutGu = parcelRequire("kutGu");
var $dmk6E = parcelRequire("dmk6E");

var $fwOoz = parcelRequire("fwOoz");

var $hiLcz = parcelRequire("hiLcz");

var $fzPrb = parcelRequire("fzPrb");
function $1f9b28be61efdf2e$var$canGenerate(value) {
    return (0, $l3Cny.isNumber)(value) && !isNaN(value);
}
function $1f9b28be61efdf2e$var$getAsNumber(value) {
    return (0, $kutGu.isString)(value) ? parseFloat(value) : value;
}
function $1f9b28be61efdf2e$export$7f1511d09ee75a99(createGenerator) {
    const keyframesCache = new WeakMap();
    return (options = {})=>{
        const generatorCache = new Map();
        const getGenerator = (from = 0, to = 100, velocity = 0, isScale = false)=>{
            const key = `${from}-${to}-${velocity}-${isScale}`;
            if (!generatorCache.has(key)) generatorCache.set(key, createGenerator(Object.assign({
                from: from,
                to: to,
                velocity: velocity,
                restSpeed: isScale ? 0.05 : 2,
                restDistance: isScale ? 0.01 : 0.5
            }, options)));
            return generatorCache.get(key);
        };
        const getKeyframes = (generator, toUnit)=>{
            if (!keyframesCache.has(generator)) keyframesCache.set(generator, (0, $fPP0s.pregenerateKeyframes)(generator, toUnit));
            return keyframesCache.get(generator);
        };
        return {
            createAnimation: (keyframes, shouldGenerate = true, getOrigin, name, motionValue)=>{
                let settings;
                let origin;
                let target;
                let velocity = 0;
                let toUnit = (0, $dmk6E.noopReturn);
                const numKeyframes = keyframes.length;
                /**
                 * If we should generate an animation for this value, run some preperation
                 * like resolving target/origin, finding a unit (if any) and determine if
                 * it is actually possible to generate.
                 */ if (shouldGenerate) {
                    toUnit = (0, $fwOoz.getUnitConverter)(keyframes, name ? (0, $hiLcz.transformDefinitions).get((0, $fzPrb.getStyleName)(name)) : undefined);
                    const targetDefinition = keyframes[numKeyframes - 1];
                    target = $1f9b28be61efdf2e$var$getAsNumber(targetDefinition);
                    if (numKeyframes > 1 && keyframes[0] !== null) /**
                         * If we have multiple keyframes, take the initial keyframe as the origin.
                         */ origin = $1f9b28be61efdf2e$var$getAsNumber(keyframes[0]);
                    else {
                        const prevGenerator = motionValue === null || motionValue === void 0 ? void 0 : motionValue.generator;
                        /**
                         * If we have an existing generator for this value we can use it to resolve
                         * the animation's current value and velocity.
                         */ if (prevGenerator) {
                            /**
                             * If we have a generator for this value we can use it to resolve
                             * the animations's current value and velocity.
                             */ const { animation: animation , generatorStartTime: generatorStartTime  } = motionValue;
                            const startTime = (animation === null || animation === void 0 ? void 0 : animation.startTime) || generatorStartTime || 0;
                            const currentTime = (animation === null || animation === void 0 ? void 0 : animation.currentTime) || performance.now() - startTime;
                            const prevGeneratorCurrent = prevGenerator(currentTime).current;
                            origin = prevGeneratorCurrent;
                            velocity = (0, $lo6Wq.calcGeneratorVelocity)((t)=>prevGenerator(t).current, currentTime, prevGeneratorCurrent);
                        } else if (getOrigin) /**
                             * As a last resort, read the origin from the DOM.
                             */ origin = $1f9b28be61efdf2e$var$getAsNumber(getOrigin());
                    }
                }
                /**
                 * If we've determined it is possible to generate an animation, do so.
                 */ if ($1f9b28be61efdf2e$var$canGenerate(origin) && $1f9b28be61efdf2e$var$canGenerate(target)) {
                    const generator = getGenerator(origin, target, velocity, name === null || name === void 0 ? void 0 : name.includes("scale"));
                    settings = Object.assign(Object.assign({}, getKeyframes(generator, toUnit)), {
                        easing: "linear"
                    });
                    // TODO Add test for this
                    if (motionValue) {
                        motionValue.generator = generator;
                        motionValue.generatorStartTime = performance.now();
                    }
                }
                /**
                 * If by now we haven't generated a set of keyframes, create a generic generator
                 * based on the provided props that animates from 0-100 to fetch a rough
                 * "overshootDuration" - the moment when the generator first hits the animation target.
                 * Then return animation settings that will run a normal animation for that duration.
                 */ if (!settings) {
                    const keyframesMetadata = getKeyframes(getGenerator(0, 100));
                    settings = {
                        easing: "ease",
                        duration: keyframesMetadata.overshootDuration
                    };
                }
                return settings;
            }
        };
    };
}

});
parcelRequire.register("fPP0s", function(module, exports) {

$parcel$export(module.exports, "pregenerateKeyframes", () => $b8732f3a4fe0a360$export$a3670b55451fed17);

var $dmk6E = parcelRequire("dmk6E");
const $b8732f3a4fe0a360$var$timeStep = 10;
const $b8732f3a4fe0a360$var$maxDuration = 10000;
function $b8732f3a4fe0a360$export$a3670b55451fed17(generator, toUnit = (0, $dmk6E.noopReturn)) {
    let overshootDuration = undefined;
    let timestamp = $b8732f3a4fe0a360$var$timeStep;
    let state = generator(0);
    const keyframes = [
        toUnit(state.current)
    ];
    while(!state.done && timestamp < $b8732f3a4fe0a360$var$maxDuration){
        state = generator(timestamp);
        keyframes.push(toUnit(state.done ? state.target : state.current));
        if (overshootDuration === undefined && state.hasReachedTarget) overshootDuration = timestamp;
        timestamp += $b8732f3a4fe0a360$var$timeStep;
    }
    const duration = timestamp - $b8732f3a4fe0a360$var$timeStep;
    /**
     * If generating an animation that didn't actually move,
     * generate a second keyframe so we have an origin and target.
     */ if (keyframes.length === 1) keyframes.push(state.current);
    return {
        keyframes: keyframes,
        duration: duration / 1000,
        overshootDuration: (overshootDuration !== null && overshootDuration !== void 0 ? overshootDuration : duration) / 1000
    };
}

});



parcelRequire.register("6z9RW", function(module, exports) {
$parcel$export(module.exports, "ifDefined", () => (parcelRequire("ioFkT")).ifDefined);
parcelRequire("ioFkT");

});
parcelRequire.register("ioFkT", function(module, exports) {

$parcel$export(module.exports, "ifDefined", () => $d64a8854bca44a8f$export$f68dd208b5df064d);

var $hZNzg = parcelRequire("hZNzg");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $d64a8854bca44a8f$export$f68dd208b5df064d = (l)=>null != l ? l : (0, $hZNzg.nothing);

});


parcelRequire.register("iAFHp", function(module, exports) {

$parcel$export(module.exports, "create", () => $d88bef588403325c$export$185802fd694ee1f5, (v) => $d88bef588403325c$export$185802fd694ee1f5 = v);
$parcel$export(module.exports, "toCanvas", () => $d88bef588403325c$export$f87f6982d1fd4f81, (v) => $d88bef588403325c$export$f87f6982d1fd4f81 = v);
$parcel$export(module.exports, "toDataURL", () => $d88bef588403325c$export$723e4939e5a27c8, (v) => $d88bef588403325c$export$723e4939e5a27c8 = v);
$parcel$export(module.exports, "toString", () => $d88bef588403325c$export$f84e8e69fd4488a5, (v) => $d88bef588403325c$export$f84e8e69fd4488a5 = v);
var $d88bef588403325c$export$185802fd694ee1f5;
var $d88bef588403325c$export$f87f6982d1fd4f81;
var $d88bef588403325c$export$723e4939e5a27c8;
// only svg for now.
var $d88bef588403325c$export$f84e8e69fd4488a5;

var $9xuFO = parcelRequire("9xuFO");

var $g2UeY = parcelRequire("g2UeY");

var $ff0Dj = parcelRequire("ff0Dj");

var $2TmBX = parcelRequire("2TmBX");
function $d88bef588403325c$var$renderCanvas(renderFunc, canvas, text, opts, cb) {
    const args = [].slice.call(arguments, 1);
    const argsNum = args.length;
    const isLastArgCb = typeof args[argsNum - 1] === "function";
    if (!isLastArgCb && !$9xuFO()) throw new Error("Callback required as last argument");
    if (isLastArgCb) {
        if (argsNum < 2) throw new Error("Too few arguments provided");
        if (argsNum === 2) {
            cb = text;
            text = canvas;
            canvas = opts = undefined;
        } else if (argsNum === 3) {
            if (canvas.getContext && typeof cb === "undefined") {
                cb = opts;
                opts = undefined;
            } else {
                cb = opts;
                opts = text;
                text = canvas;
                canvas = undefined;
            }
        }
    } else {
        if (argsNum < 1) throw new Error("Too few arguments provided");
        if (argsNum === 1) {
            text = canvas;
            canvas = opts = undefined;
        } else if (argsNum === 2 && !canvas.getContext) {
            opts = text;
            text = canvas;
            canvas = undefined;
        }
        return new Promise(function(resolve, reject) {
            try {
                const data = $g2UeY.create(text, opts);
                resolve(renderFunc(data, canvas, opts));
            } catch (e) {
                reject(e);
            }
        });
    }
    try {
        const data = $g2UeY.create(text, opts);
        cb(null, renderFunc(data, canvas, opts));
    } catch (e) {
        cb(e);
    }
}
$d88bef588403325c$export$185802fd694ee1f5 = $g2UeY.create;
$d88bef588403325c$export$f87f6982d1fd4f81 = $d88bef588403325c$var$renderCanvas.bind(null, $ff0Dj.render);
$d88bef588403325c$export$723e4939e5a27c8 = $d88bef588403325c$var$renderCanvas.bind(null, $ff0Dj.renderToDataURL);
$d88bef588403325c$export$f84e8e69fd4488a5 = $d88bef588403325c$var$renderCanvas.bind(null, function(data, _, opts) {
    return $2TmBX.render(data, opts);
});

});
parcelRequire.register("9xuFO", function(module, exports) {
// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157
module.exports = function() {
    return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
};

});

parcelRequire.register("g2UeY", function(module, exports) {

$parcel$export(module.exports, "create", () => $bae87574ae31877e$export$185802fd694ee1f5, (v) => $bae87574ae31877e$export$185802fd694ee1f5 = v);
/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */ var $bae87574ae31877e$export$185802fd694ee1f5;

var $6uaxx = parcelRequire("6uaxx");

var $hEmHB = parcelRequire("hEmHB");

var $aaQSY = parcelRequire("aaQSY");

var $64NyW = parcelRequire("64NyW");

var $1mFLm = parcelRequire("1mFLm");

var $cypE2 = parcelRequire("cypE2");

var $72p1F = parcelRequire("72p1F");

var $aSHBL = parcelRequire("aSHBL");

var $6ZE0Q = parcelRequire("6ZE0Q");

var $8vev4 = parcelRequire("8vev4");

var $2mreP = parcelRequire("2mreP");

var $7nEW4 = parcelRequire("7nEW4");

var $8wYMQ = parcelRequire("8wYMQ");
/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/ /**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */ function $bae87574ae31877e$var$setupFinderPattern(matrix, version) {
    const size = matrix.size;
    const pos = $cypE2.getPositions(version);
    for(let i = 0; i < pos.length; i++){
        const row = pos[i][0];
        const col = pos[i][1];
        for(let r = -1; r <= 7; r++){
            if (row + r <= -1 || size <= row + r) continue;
            for(let c = -1; c <= 7; c++){
                if (col + c <= -1 || size <= col + c) continue;
                if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) matrix.set(row + r, col + c, true, true);
                else matrix.set(row + r, col + c, false, true);
            }
        }
    }
}
/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */ function $bae87574ae31877e$var$setupTimingPattern(matrix) {
    const size = matrix.size;
    for(let r = 8; r < size - 8; r++){
        const value = r % 2 === 0;
        matrix.set(r, 6, value, true);
        matrix.set(6, r, value, true);
    }
}
/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */ function $bae87574ae31877e$var$setupAlignmentPattern(matrix, version) {
    const pos = $1mFLm.getPositions(version);
    for(let i = 0; i < pos.length; i++){
        const row = pos[i][0];
        const col = pos[i][1];
        for(let r = -2; r <= 2; r++){
            for(let c = -2; c <= 2; c++)if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) matrix.set(row + r, col + c, true, true);
            else matrix.set(row + r, col + c, false, true);
        }
    }
}
/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */ function $bae87574ae31877e$var$setupVersionInfo(matrix, version) {
    const size = matrix.size;
    const bits = $8vev4.getEncodedBits(version);
    let row, col, mod;
    for(let i = 0; i < 18; i++){
        row = Math.floor(i / 3);
        col = i % 3 + size - 8 - 3;
        mod = (bits >> i & 1) === 1;
        matrix.set(row, col, mod, true);
        matrix.set(col, row, mod, true);
    }
}
/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */ function $bae87574ae31877e$var$setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
    const size = matrix.size;
    const bits = $2mreP.getEncodedBits(errorCorrectionLevel, maskPattern);
    let i, mod;
    for(i = 0; i < 15; i++){
        mod = (bits >> i & 1) === 1;
        // vertical
        if (i < 6) matrix.set(i, 8, mod, true);
        else if (i < 8) matrix.set(i + 1, 8, mod, true);
        else matrix.set(size - 15 + i, 8, mod, true);
        // horizontal
        if (i < 8) matrix.set(8, size - i - 1, mod, true);
        else if (i < 9) matrix.set(8, 15 - i - 1 + 1, mod, true);
        else matrix.set(8, 15 - i - 1, mod, true);
    }
    // fixed module
    matrix.set(size - 8, 8, 1, true);
}
/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix}  matrix Modules matrix
 * @param  {Uint8Array} data   Data codewords
 */ function $bae87574ae31877e$var$setupData(matrix, data) {
    const size = matrix.size;
    let inc = -1;
    let row = size - 1;
    let bitIndex = 7;
    let byteIndex = 0;
    for(let col = size - 1; col > 0; col -= 2){
        if (col === 6) col--;
        while(true){
            for(let c = 0; c < 2; c++)if (!matrix.isReserved(row, col - c)) {
                let dark = false;
                if (byteIndex < data.length) dark = (data[byteIndex] >>> bitIndex & 1) === 1;
                matrix.set(row, col - c, dark);
                bitIndex--;
                if (bitIndex === -1) {
                    byteIndex++;
                    bitIndex = 7;
                }
            }
            row += inc;
            if (row < 0 || size <= row) {
                row -= inc;
                inc = -inc;
                break;
            }
        }
    }
}
/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Uint8Array}                    Buffer containing encoded codewords
 */ function $bae87574ae31877e$var$createData(version, errorCorrectionLevel, segments) {
    // Prepare data buffer
    const buffer = new $aaQSY();
    segments.forEach(function(data) {
        // prefix data with mode indicator (4 bits)
        buffer.put(data.mode.bit, 4);
        // Prefix data with character count indicator.
        // The character count indicator is a string of bits that represents the
        // number of characters that are being encoded.
        // The character count indicator must be placed after the mode indicator
        // and must be a certain number of bits long, depending on the QR version
        // and data mode
        // @see {@link Mode.getCharCountIndicator}.
        buffer.put(data.getLength(), $7nEW4.getCharCountIndicator(data.mode, version));
        // add binary data sequence to buffer
        data.write(buffer);
    });
    // Calculate required number of bits
    const totalCodewords = $6uaxx.getSymbolTotalCodewords(version);
    const ecTotalCodewords = $aSHBL.getTotalCodewordsCount(version, errorCorrectionLevel);
    const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    // Add a terminator.
    // If the bit string is shorter than the total number of required bits,
    // a terminator of up to four 0s must be added to the right side of the string.
    // If the bit string is more than four bits shorter than the required number of bits,
    // add four 0s to the end.
    if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) buffer.put(0, 4);
    // If the bit string is fewer than four bits shorter, add only the number of 0s that
    // are needed to reach the required number of bits.
    // After adding the terminator, if the number of bits in the string is not a multiple of 8,
    // pad the string on the right with 0s to make the string's length a multiple of 8.
    while(buffer.getLengthInBits() % 8 !== 0)buffer.putBit(0);
    // Add pad bytes if the string is still shorter than the total number of required bits.
    // Extend the buffer to fill the data capacity of the symbol corresponding to
    // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
    // and 00010001 (0x11) alternately.
    const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
    for(let i = 0; i < remainingByte; i++)buffer.put(i % 2 ? 0x11 : 0xEC, 8);
    return $bae87574ae31877e$var$createCodewords(buffer, version, errorCorrectionLevel);
}
/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Uint8Array}                     Buffer containing encoded codewords
 */ function $bae87574ae31877e$var$createCodewords(bitBuffer, version, errorCorrectionLevel) {
    // Total codewords for this QR code version (Data + Error correction)
    const totalCodewords = $6uaxx.getSymbolTotalCodewords(version);
    // Total number of error correction codewords
    const ecTotalCodewords = $aSHBL.getTotalCodewordsCount(version, errorCorrectionLevel);
    // Total number of data codewords
    const dataTotalCodewords = totalCodewords - ecTotalCodewords;
    // Total number of blocks
    const ecTotalBlocks = $aSHBL.getBlocksCount(version, errorCorrectionLevel);
    // Calculate how many blocks each group should contain
    const blocksInGroup2 = totalCodewords % ecTotalBlocks;
    const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
    const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
    const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
    const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
    // Number of EC codewords is the same for both groups
    const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
    // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
    const rs = new $6ZE0Q(ecCount);
    let offset = 0;
    const dcData = new Array(ecTotalBlocks);
    const ecData = new Array(ecTotalBlocks);
    let maxDataSize = 0;
    const buffer = new Uint8Array(bitBuffer.buffer);
    // Divide the buffer into the required number of blocks
    for(let b = 0; b < ecTotalBlocks; b++){
        const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
        // extract a block of data from buffer
        dcData[b] = buffer.slice(offset, offset + dataSize);
        // Calculate EC codewords for this data block
        ecData[b] = rs.encode(dcData[b]);
        offset += dataSize;
        maxDataSize = Math.max(maxDataSize, dataSize);
    }
    // Create final data
    // Interleave the data and error correction codewords from each block
    const data = new Uint8Array(totalCodewords);
    let index = 0;
    let i, r;
    // Add data codewords
    for(i = 0; i < maxDataSize; i++){
        for(r = 0; r < ecTotalBlocks; r++)if (i < dcData[r].length) data[index++] = dcData[r][i];
    }
    // Apped EC codewords
    for(i = 0; i < ecCount; i++)for(r = 0; r < ecTotalBlocks; r++)data[index++] = ecData[r][i];
    return data;
}
/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */ function $bae87574ae31877e$var$createSymbol(data, version, errorCorrectionLevel, maskPattern) {
    let segments;
    if (Array.isArray(data)) segments = $8wYMQ.fromArray(data);
    else if (typeof data === "string") {
        let estimatedVersion = version;
        if (!estimatedVersion) {
            const rawSegments = $8wYMQ.rawSplit(data);
            // Estimate best version that can contain raw splitted segments
            estimatedVersion = $8vev4.getBestVersionForData(rawSegments, errorCorrectionLevel);
        }
        // Build optimized segments
        // If estimated version is undefined, try with the highest version
        segments = $8wYMQ.fromString(data, estimatedVersion || 40);
    } else throw new Error("Invalid data");
    // Get the min version that can contain data
    const bestVersion = $8vev4.getBestVersionForData(segments, errorCorrectionLevel);
    // If no version is found, data cannot be stored
    if (!bestVersion) throw new Error("The amount of data is too big to be stored in a QR Code");
    // If not specified, use min version as default
    if (!version) version = bestVersion;
    else if (version < bestVersion) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n");
    const dataBits = $bae87574ae31877e$var$createData(version, errorCorrectionLevel, segments);
    // Allocate matrix buffer
    const moduleCount = $6uaxx.getSymbolSize(version);
    const modules = new $64NyW(moduleCount);
    // Add function modules
    $bae87574ae31877e$var$setupFinderPattern(modules, version);
    $bae87574ae31877e$var$setupTimingPattern(modules);
    $bae87574ae31877e$var$setupAlignmentPattern(modules, version);
    // Add temporary dummy bits for format info just to set them as reserved.
    // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
    // since the masking operation must be performed only on the encoding region.
    // These blocks will be replaced with correct values later in code.
    $bae87574ae31877e$var$setupFormatInfo(modules, errorCorrectionLevel, 0);
    if (version >= 7) $bae87574ae31877e$var$setupVersionInfo(modules, version);
    // Add data codewords
    $bae87574ae31877e$var$setupData(modules, dataBits);
    if (isNaN(maskPattern)) // Find best mask pattern
    maskPattern = $72p1F.getBestMask(modules, $bae87574ae31877e$var$setupFormatInfo.bind(null, modules, errorCorrectionLevel));
    // Apply mask pattern
    $72p1F.applyMask(maskPattern, modules);
    // Replace format info bits with correct values
    $bae87574ae31877e$var$setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
    return {
        modules: modules,
        version: version,
        errorCorrectionLevel: errorCorrectionLevel,
        maskPattern: maskPattern,
        segments: segments
    };
}
$bae87574ae31877e$export$185802fd694ee1f5 = function create(data, options) {
    if (typeof data === "undefined" || data === "") throw new Error("No input text");
    let errorCorrectionLevel = $hEmHB.M;
    let version;
    let mask;
    if (typeof options !== "undefined") {
        // Use higher error correction level as default
        errorCorrectionLevel = $hEmHB.from(options.errorCorrectionLevel, $hEmHB.M);
        version = $8vev4.from(options.version);
        mask = $72p1F.from(options.maskPattern);
        if (options.toSJISFunc) $6uaxx.setToSJISFunction(options.toSJISFunc);
    }
    return $bae87574ae31877e$var$createSymbol(data, version, errorCorrectionLevel, mask);
};

});
parcelRequire.register("6uaxx", function(module, exports) {

$parcel$export(module.exports, "getSymbolSize", () => $4b8db86fc58e871f$export$8d4a06d3facd414b, (v) => $4b8db86fc58e871f$export$8d4a06d3facd414b = v);
$parcel$export(module.exports, "getSymbolTotalCodewords", () => $4b8db86fc58e871f$export$b05dac13c7a35c32, (v) => $4b8db86fc58e871f$export$b05dac13c7a35c32 = v);
$parcel$export(module.exports, "getBCHDigit", () => $4b8db86fc58e871f$export$ed1d66da50968976, (v) => $4b8db86fc58e871f$export$ed1d66da50968976 = v);
$parcel$export(module.exports, "setToSJISFunction", () => $4b8db86fc58e871f$export$6733b14783f975c2, (v) => $4b8db86fc58e871f$export$6733b14783f975c2 = v);
$parcel$export(module.exports, "isKanjiModeEnabled", () => $4b8db86fc58e871f$export$ce5b1274f8597fa0, (v) => $4b8db86fc58e871f$export$ce5b1274f8597fa0 = v);
$parcel$export(module.exports, "toSJIS", () => $4b8db86fc58e871f$export$43dd553ecded716d, (v) => $4b8db86fc58e871f$export$43dd553ecded716d = v);
/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */ var $4b8db86fc58e871f$export$8d4a06d3facd414b;
/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */ var $4b8db86fc58e871f$export$b05dac13c7a35c32;
/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */ var $4b8db86fc58e871f$export$ed1d66da50968976;
var $4b8db86fc58e871f$export$6733b14783f975c2;
var $4b8db86fc58e871f$export$ce5b1274f8597fa0;
var $4b8db86fc58e871f$export$43dd553ecded716d;
let $4b8db86fc58e871f$var$toSJISFunction;
const $4b8db86fc58e871f$var$CODEWORDS_COUNT = [
    0,
    26,
    44,
    70,
    100,
    134,
    172,
    196,
    242,
    292,
    346,
    404,
    466,
    532,
    581,
    655,
    733,
    815,
    901,
    991,
    1085,
    1156,
    1258,
    1364,
    1474,
    1588,
    1706,
    1828,
    1921,
    2051,
    2185,
    2323,
    2465,
    2611,
    2761,
    2876,
    3034,
    3196,
    3362,
    3532,
    3706
];
$4b8db86fc58e871f$export$8d4a06d3facd414b = function getSymbolSize(version) {
    if (!version) throw new Error('"version" cannot be null or undefined');
    if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
    return version * 4 + 17;
};
$4b8db86fc58e871f$export$b05dac13c7a35c32 = function getSymbolTotalCodewords(version) {
    return $4b8db86fc58e871f$var$CODEWORDS_COUNT[version];
};
$4b8db86fc58e871f$export$ed1d66da50968976 = function(data) {
    let digit = 0;
    while(data !== 0){
        digit++;
        data >>>= 1;
    }
    return digit;
};
$4b8db86fc58e871f$export$6733b14783f975c2 = function setToSJISFunction(f) {
    if (typeof f !== "function") throw new Error('"toSJISFunc" is not a valid function.');
    $4b8db86fc58e871f$var$toSJISFunction = f;
};
$4b8db86fc58e871f$export$ce5b1274f8597fa0 = function() {
    return typeof $4b8db86fc58e871f$var$toSJISFunction !== "undefined";
};
$4b8db86fc58e871f$export$43dd553ecded716d = function toSJIS(kanji) {
    return $4b8db86fc58e871f$var$toSJISFunction(kanji);
};

});

parcelRequire.register("hEmHB", function(module, exports) {

$parcel$export(module.exports, "L", () => $cd97c8497002fe5a$export$61196ced6d74a310, (v) => $cd97c8497002fe5a$export$61196ced6d74a310 = v);
$parcel$export(module.exports, "M", () => $cd97c8497002fe5a$export$3a1a48c8f6ef640e, (v) => $cd97c8497002fe5a$export$3a1a48c8f6ef640e = v);
$parcel$export(module.exports, "Q", () => $cd97c8497002fe5a$export$3722cfe417b6ed86, (v) => $cd97c8497002fe5a$export$3722cfe417b6ed86 = v);
$parcel$export(module.exports, "H", () => $cd97c8497002fe5a$export$7f8ddf7c7c20b3cd, (v) => $cd97c8497002fe5a$export$7f8ddf7c7c20b3cd = v);
$parcel$export(module.exports, "isValid", () => $cd97c8497002fe5a$export$1ea939691cdc45b8, (v) => $cd97c8497002fe5a$export$1ea939691cdc45b8 = v);
$parcel$export(module.exports, "from", () => $cd97c8497002fe5a$export$6788812c4e6611e6, (v) => $cd97c8497002fe5a$export$6788812c4e6611e6 = v);
var $cd97c8497002fe5a$export$61196ced6d74a310;
var $cd97c8497002fe5a$export$3a1a48c8f6ef640e;
var $cd97c8497002fe5a$export$3722cfe417b6ed86;
var $cd97c8497002fe5a$export$7f8ddf7c7c20b3cd;
var $cd97c8497002fe5a$export$1ea939691cdc45b8;
var $cd97c8497002fe5a$export$6788812c4e6611e6;
$cd97c8497002fe5a$export$61196ced6d74a310 = {
    bit: 1
};
$cd97c8497002fe5a$export$3a1a48c8f6ef640e = {
    bit: 0
};
$cd97c8497002fe5a$export$3722cfe417b6ed86 = {
    bit: 3
};
$cd97c8497002fe5a$export$7f8ddf7c7c20b3cd = {
    bit: 2
};
function $cd97c8497002fe5a$var$fromString(string) {
    if (typeof string !== "string") throw new Error("Param is not a string");
    const lcStr = string.toLowerCase();
    switch(lcStr){
        case "l":
        case "low":
            return $cd97c8497002fe5a$export$61196ced6d74a310;
        case "m":
        case "medium":
            return $cd97c8497002fe5a$export$3a1a48c8f6ef640e;
        case "q":
        case "quartile":
            return $cd97c8497002fe5a$export$3722cfe417b6ed86;
        case "h":
        case "high":
            return $cd97c8497002fe5a$export$7f8ddf7c7c20b3cd;
        default:
            throw new Error("Unknown EC Level: " + string);
    }
}
$cd97c8497002fe5a$export$1ea939691cdc45b8 = function isValid(level) {
    return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
};
$cd97c8497002fe5a$export$6788812c4e6611e6 = function from(value, defaultValue) {
    if ($cd97c8497002fe5a$export$1ea939691cdc45b8(value)) return value;
    try {
        return $cd97c8497002fe5a$var$fromString(value);
    } catch (e) {
        return defaultValue;
    }
};

});

parcelRequire.register("aaQSY", function(module, exports) {
function $7683dc880ff87d37$var$BitBuffer() {
    this.buffer = [];
    this.length = 0;
}
$7683dc880ff87d37$var$BitBuffer.prototype = {
    get: function(index) {
        const bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
    },
    put: function(num, length) {
        for(let i = 0; i < length; i++)this.putBit((num >>> length - i - 1 & 1) === 1);
    },
    getLengthInBits: function() {
        return this.length;
    },
    putBit: function(bit) {
        const bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) this.buffer.push(0);
        if (bit) this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
        this.length++;
    }
};
module.exports = $7683dc880ff87d37$var$BitBuffer;

});

parcelRequire.register("64NyW", function(module, exports) {
/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */ function $46c98fe3272efc52$var$BitMatrix(size) {
    if (!size || size < 1) throw new Error("BitMatrix size must be defined and greater than 0");
    this.size = size;
    this.data = new Uint8Array(size * size);
    this.reservedBit = new Uint8Array(size * size);
}
/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */ $46c98fe3272efc52$var$BitMatrix.prototype.set = function(row, col, value, reserved) {
    const index = row * this.size + col;
    this.data[index] = value;
    if (reserved) this.reservedBit[index] = true;
};
/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */ $46c98fe3272efc52$var$BitMatrix.prototype.get = function(row, col) {
    return this.data[row * this.size + col];
};
/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */ $46c98fe3272efc52$var$BitMatrix.prototype.xor = function(row, col, value) {
    this.data[row * this.size + col] ^= value;
};
/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */ $46c98fe3272efc52$var$BitMatrix.prototype.isReserved = function(row, col) {
    return this.reservedBit[row * this.size + col];
};
module.exports = $46c98fe3272efc52$var$BitMatrix;

});

parcelRequire.register("1mFLm", function(module, exports) {

$parcel$export(module.exports, "getRowColCoords", () => $0fe83dbde4e3a092$export$cb05537eb8e57a83, (v) => $0fe83dbde4e3a092$export$cb05537eb8e57a83 = v);
$parcel$export(module.exports, "getPositions", () => $0fe83dbde4e3a092$export$c39457c570f2b189, (v) => $0fe83dbde4e3a092$export$c39457c570f2b189 = v);
/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */ /**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */ var $0fe83dbde4e3a092$export$cb05537eb8e57a83;
/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * let pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */ var $0fe83dbde4e3a092$export$c39457c570f2b189;

var $6uaxx = parcelRequire("6uaxx");
var $0fe83dbde4e3a092$require$getSymbolSize = $6uaxx.getSymbolSize;
$0fe83dbde4e3a092$export$cb05537eb8e57a83 = function getRowColCoords(version) {
    if (version === 1) return [];
    const posCount = Math.floor(version / 7) + 2;
    const size = $0fe83dbde4e3a092$require$getSymbolSize(version);
    const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
    const positions = [
        size - 7
    ] // Last coord is always (size - 7)
    ;
    for(let i = 1; i < posCount - 1; i++)positions[i] = positions[i - 1] - intervals;
    positions.push(6) // First coord is always 6
    ;
    return positions.reverse();
};
$0fe83dbde4e3a092$export$c39457c570f2b189 = function getPositions(version) {
    const coords = [];
    const pos = $0fe83dbde4e3a092$export$cb05537eb8e57a83(version);
    const posLength = pos.length;
    for(let i = 0; i < posLength; i++)for(let j = 0; j < posLength; j++){
        // Skip if position is occupied by finder patterns
        if (i === 0 && j === 0 || // top-left
        i === 0 && j === posLength - 1 || // bottom-left
        i === posLength - 1 && j === 0) continue;
        coords.push([
            pos[i],
            pos[j]
        ]);
    }
    return coords;
};

});

parcelRequire.register("cypE2", function(module, exports) {

$parcel$export(module.exports, "getPositions", () => $923c8d89174c39a4$export$c39457c570f2b189, (v) => $923c8d89174c39a4$export$c39457c570f2b189 = v);
/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */ var $923c8d89174c39a4$export$c39457c570f2b189;

var $6uaxx = parcelRequire("6uaxx");
var $923c8d89174c39a4$require$getSymbolSize = $6uaxx.getSymbolSize;
const $923c8d89174c39a4$var$FINDER_PATTERN_SIZE = 7;
$923c8d89174c39a4$export$c39457c570f2b189 = function getPositions(version) {
    const size = $923c8d89174c39a4$require$getSymbolSize(version);
    return [
        // top-left
        [
            0,
            0
        ],
        // top-right
        [
            size - $923c8d89174c39a4$var$FINDER_PATTERN_SIZE,
            0
        ],
        // bottom-left
        [
            0,
            size - $923c8d89174c39a4$var$FINDER_PATTERN_SIZE
        ]
    ];
};

});

parcelRequire.register("72p1F", function(module, exports) {

$parcel$export(module.exports, "Patterns", () => $51fc21f3892a3c0c$export$7ed115685df827af, (v) => $51fc21f3892a3c0c$export$7ed115685df827af = v);
$parcel$export(module.exports, "isValid", () => $51fc21f3892a3c0c$export$1ea939691cdc45b8, (v) => $51fc21f3892a3c0c$export$1ea939691cdc45b8 = v);
$parcel$export(module.exports, "from", () => $51fc21f3892a3c0c$export$6788812c4e6611e6, (v) => $51fc21f3892a3c0c$export$6788812c4e6611e6 = v);
$parcel$export(module.exports, "getPenaltyN1", () => $51fc21f3892a3c0c$export$a5fd3a02c14d0b3e, (v) => $51fc21f3892a3c0c$export$a5fd3a02c14d0b3e = v);
$parcel$export(module.exports, "getPenaltyN2", () => $51fc21f3892a3c0c$export$9a9385107a518e46, (v) => $51fc21f3892a3c0c$export$9a9385107a518e46 = v);
$parcel$export(module.exports, "getPenaltyN3", () => $51fc21f3892a3c0c$export$ade754353f0dc75e, (v) => $51fc21f3892a3c0c$export$ade754353f0dc75e = v);
$parcel$export(module.exports, "getPenaltyN4", () => $51fc21f3892a3c0c$export$3ff6f04d40d9962b, (v) => $51fc21f3892a3c0c$export$3ff6f04d40d9962b = v);
$parcel$export(module.exports, "applyMask", () => $51fc21f3892a3c0c$export$a1c9aa9c0e8ba394, (v) => $51fc21f3892a3c0c$export$a1c9aa9c0e8ba394 = v);
$parcel$export(module.exports, "getBestMask", () => $51fc21f3892a3c0c$export$fe9625aaceb0e563, (v) => $51fc21f3892a3c0c$export$fe9625aaceb0e563 = v);
/**
 * Data mask pattern reference
 * @type {Object}
 */ var $51fc21f3892a3c0c$export$7ed115685df827af;
/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */ var $51fc21f3892a3c0c$export$1ea939691cdc45b8;
/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */ var $51fc21f3892a3c0c$export$6788812c4e6611e6;
/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/ var $51fc21f3892a3c0c$export$a5fd3a02c14d0b3e;
/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */ var $51fc21f3892a3c0c$export$9a9385107a518e46;
/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */ var $51fc21f3892a3c0c$export$ade754353f0dc75e;
/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */ var $51fc21f3892a3c0c$export$3ff6f04d40d9962b;
/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */ var $51fc21f3892a3c0c$export$a1c9aa9c0e8ba394;
/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */ var $51fc21f3892a3c0c$export$fe9625aaceb0e563;
$51fc21f3892a3c0c$export$7ed115685df827af = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
};
/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */ const $51fc21f3892a3c0c$var$PenaltyScores = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
};
$51fc21f3892a3c0c$export$1ea939691cdc45b8 = function isValid(mask) {
    return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
};
$51fc21f3892a3c0c$export$6788812c4e6611e6 = function from(value) {
    return $51fc21f3892a3c0c$export$1ea939691cdc45b8(value) ? parseInt(value, 10) : undefined;
};
$51fc21f3892a3c0c$export$a5fd3a02c14d0b3e = function getPenaltyN1(data) {
    const size = data.size;
    let points = 0;
    let sameCountCol = 0;
    let sameCountRow = 0;
    let lastCol = null;
    let lastRow = null;
    for(let row = 0; row < size; row++){
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;
        for(let col = 0; col < size; col++){
            let module = data.get(row, col);
            if (module === lastCol) sameCountCol++;
            else {
                if (sameCountCol >= 5) points += $51fc21f3892a3c0c$var$PenaltyScores.N1 + (sameCountCol - 5);
                lastCol = module;
                sameCountCol = 1;
            }
            module = data.get(col, row);
            if (module === lastRow) sameCountRow++;
            else {
                if (sameCountRow >= 5) points += $51fc21f3892a3c0c$var$PenaltyScores.N1 + (sameCountRow - 5);
                lastRow = module;
                sameCountRow = 1;
            }
        }
        if (sameCountCol >= 5) points += $51fc21f3892a3c0c$var$PenaltyScores.N1 + (sameCountCol - 5);
        if (sameCountRow >= 5) points += $51fc21f3892a3c0c$var$PenaltyScores.N1 + (sameCountRow - 5);
    }
    return points;
};
$51fc21f3892a3c0c$export$9a9385107a518e46 = function getPenaltyN2(data) {
    const size = data.size;
    let points = 0;
    for(let row = 0; row < size - 1; row++)for(let col = 0; col < size - 1; col++){
        const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
        if (last === 4 || last === 0) points++;
    }
    return points * $51fc21f3892a3c0c$var$PenaltyScores.N2;
};
$51fc21f3892a3c0c$export$ade754353f0dc75e = function getPenaltyN3(data) {
    const size = data.size;
    let points = 0;
    let bitsCol = 0;
    let bitsRow = 0;
    for(let row = 0; row < size; row++){
        bitsCol = bitsRow = 0;
        for(let col = 0; col < size; col++){
            bitsCol = bitsCol << 1 & 0x7FF | data.get(row, col);
            if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++;
            bitsRow = bitsRow << 1 & 0x7FF | data.get(col, row);
            if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++;
        }
    }
    return points * $51fc21f3892a3c0c$var$PenaltyScores.N3;
};
$51fc21f3892a3c0c$export$3ff6f04d40d9962b = function getPenaltyN4(data) {
    let darkCount = 0;
    const modulesCount = data.data.length;
    for(let i = 0; i < modulesCount; i++)darkCount += data.data[i];
    const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
    return k * $51fc21f3892a3c0c$var$PenaltyScores.N4;
};
/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */ function $51fc21f3892a3c0c$var$getMaskAt(maskPattern, i, j) {
    switch(maskPattern){
        case $51fc21f3892a3c0c$export$7ed115685df827af.PATTERN000:
            return (i + j) % 2 === 0;
        case $51fc21f3892a3c0c$export$7ed115685df827af.PATTERN001:
            return i % 2 === 0;
        case $51fc21f3892a3c0c$export$7ed115685df827af.PATTERN010:
            return j % 3 === 0;
        case $51fc21f3892a3c0c$export$7ed115685df827af.PATTERN011:
            return (i + j) % 3 === 0;
        case $51fc21f3892a3c0c$export$7ed115685df827af.PATTERN100:
            return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
        case $51fc21f3892a3c0c$export$7ed115685df827af.PATTERN101:
            return i * j % 2 + i * j % 3 === 0;
        case $51fc21f3892a3c0c$export$7ed115685df827af.PATTERN110:
            return (i * j % 2 + i * j % 3) % 2 === 0;
        case $51fc21f3892a3c0c$export$7ed115685df827af.PATTERN111:
            return (i * j % 3 + (i + j) % 2) % 2 === 0;
        default:
            throw new Error("bad maskPattern:" + maskPattern);
    }
}
$51fc21f3892a3c0c$export$a1c9aa9c0e8ba394 = function applyMask(pattern, data) {
    const size = data.size;
    for(let col = 0; col < size; col++)for(let row = 0; row < size; row++){
        if (data.isReserved(row, col)) continue;
        data.xor(row, col, $51fc21f3892a3c0c$var$getMaskAt(pattern, row, col));
    }
};
$51fc21f3892a3c0c$export$fe9625aaceb0e563 = function getBestMask(data, setupFormatFunc) {
    const numPatterns = Object.keys($51fc21f3892a3c0c$export$7ed115685df827af).length;
    let bestPattern = 0;
    let lowerPenalty = Infinity;
    for(let p = 0; p < numPatterns; p++){
        setupFormatFunc(p);
        $51fc21f3892a3c0c$export$a1c9aa9c0e8ba394(p, data);
        // Calculate penalty
        const penalty = $51fc21f3892a3c0c$export$a5fd3a02c14d0b3e(data) + $51fc21f3892a3c0c$export$9a9385107a518e46(data) + $51fc21f3892a3c0c$export$ade754353f0dc75e(data) + $51fc21f3892a3c0c$export$3ff6f04d40d9962b(data);
        // Undo previously applied mask
        $51fc21f3892a3c0c$export$a1c9aa9c0e8ba394(p, data);
        if (penalty < lowerPenalty) {
            lowerPenalty = penalty;
            bestPattern = p;
        }
    }
    return bestPattern;
};

});

parcelRequire.register("aSHBL", function(module, exports) {

$parcel$export(module.exports, "getBlocksCount", () => $7ec0c6330cdf80de$export$41a1fc627aca72b9, (v) => $7ec0c6330cdf80de$export$41a1fc627aca72b9 = v);
$parcel$export(module.exports, "getTotalCodewordsCount", () => $7ec0c6330cdf80de$export$683d1b3e8a1a8438, (v) => $7ec0c6330cdf80de$export$683d1b3e8a1a8438 = v);
/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */ var $7ec0c6330cdf80de$export$41a1fc627aca72b9;
/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */ var $7ec0c6330cdf80de$export$683d1b3e8a1a8438;

var $hEmHB = parcelRequire("hEmHB");
const $7ec0c6330cdf80de$var$EC_BLOCKS_TABLE = [
    // L  M  Q  H
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    1,
    2,
    2,
    4,
    1,
    2,
    4,
    4,
    2,
    4,
    4,
    4,
    2,
    4,
    6,
    5,
    2,
    4,
    6,
    6,
    2,
    5,
    8,
    8,
    4,
    5,
    8,
    8,
    4,
    5,
    8,
    11,
    4,
    8,
    10,
    11,
    4,
    9,
    12,
    16,
    4,
    9,
    16,
    16,
    6,
    10,
    12,
    18,
    6,
    10,
    17,
    16,
    6,
    11,
    16,
    19,
    6,
    13,
    18,
    21,
    7,
    14,
    21,
    25,
    8,
    16,
    20,
    25,
    8,
    17,
    23,
    25,
    9,
    17,
    23,
    34,
    9,
    18,
    25,
    30,
    10,
    20,
    27,
    32,
    12,
    21,
    29,
    35,
    12,
    23,
    34,
    37,
    12,
    25,
    34,
    40,
    13,
    26,
    35,
    42,
    14,
    28,
    38,
    45,
    15,
    29,
    40,
    48,
    16,
    31,
    43,
    51,
    17,
    33,
    45,
    54,
    18,
    35,
    48,
    57,
    19,
    37,
    51,
    60,
    19,
    38,
    53,
    63,
    20,
    40,
    56,
    66,
    21,
    43,
    59,
    70,
    22,
    45,
    62,
    74,
    24,
    47,
    65,
    77,
    25,
    49,
    68,
    81
];
const $7ec0c6330cdf80de$var$EC_CODEWORDS_TABLE = [
    // L  M  Q  H
    7,
    10,
    13,
    17,
    10,
    16,
    22,
    28,
    15,
    26,
    36,
    44,
    20,
    36,
    52,
    64,
    26,
    48,
    72,
    88,
    36,
    64,
    96,
    112,
    40,
    72,
    108,
    130,
    48,
    88,
    132,
    156,
    60,
    110,
    160,
    192,
    72,
    130,
    192,
    224,
    80,
    150,
    224,
    264,
    96,
    176,
    260,
    308,
    104,
    198,
    288,
    352,
    120,
    216,
    320,
    384,
    132,
    240,
    360,
    432,
    144,
    280,
    408,
    480,
    168,
    308,
    448,
    532,
    180,
    338,
    504,
    588,
    196,
    364,
    546,
    650,
    224,
    416,
    600,
    700,
    224,
    442,
    644,
    750,
    252,
    476,
    690,
    816,
    270,
    504,
    750,
    900,
    300,
    560,
    810,
    960,
    312,
    588,
    870,
    1050,
    336,
    644,
    952,
    1110,
    360,
    700,
    1020,
    1200,
    390,
    728,
    1050,
    1260,
    420,
    784,
    1140,
    1350,
    450,
    812,
    1200,
    1440,
    480,
    868,
    1290,
    1530,
    510,
    924,
    1350,
    1620,
    540,
    980,
    1440,
    1710,
    570,
    1036,
    1530,
    1800,
    570,
    1064,
    1590,
    1890,
    600,
    1120,
    1680,
    1980,
    630,
    1204,
    1770,
    2100,
    660,
    1260,
    1860,
    2220,
    720,
    1316,
    1950,
    2310,
    750,
    1372,
    2040,
    2430
];
$7ec0c6330cdf80de$export$41a1fc627aca72b9 = function getBlocksCount(version, errorCorrectionLevel) {
    switch(errorCorrectionLevel){
        case $hEmHB.L:
            return $7ec0c6330cdf80de$var$EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
        case $hEmHB.M:
            return $7ec0c6330cdf80de$var$EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
        case $hEmHB.Q:
            return $7ec0c6330cdf80de$var$EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
        case $hEmHB.H:
            return $7ec0c6330cdf80de$var$EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
        default:
            return undefined;
    }
};
$7ec0c6330cdf80de$export$683d1b3e8a1a8438 = function getTotalCodewordsCount(version, errorCorrectionLevel) {
    switch(errorCorrectionLevel){
        case $hEmHB.L:
            return $7ec0c6330cdf80de$var$EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
        case $hEmHB.M:
            return $7ec0c6330cdf80de$var$EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
        case $hEmHB.Q:
            return $7ec0c6330cdf80de$var$EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
        case $hEmHB.H:
            return $7ec0c6330cdf80de$var$EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
        default:
            return undefined;
    }
};

});

parcelRequire.register("6ZE0Q", function(module, exports) {

var $fDKWN = parcelRequire("fDKWN");
function $51777a3b5b9eee7c$var$ReedSolomonEncoder(degree) {
    this.genPoly = undefined;
    this.degree = degree;
    if (this.degree) this.initialize(this.degree);
}
/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */ $51777a3b5b9eee7c$var$ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
    // create an irreducible generator polynomial
    this.degree = degree;
    this.genPoly = $fDKWN.generateECPolynomial(this.degree);
};
/**
 * Encodes a chunk of data
 *
 * @param  {Uint8Array} data Buffer containing input data
 * @return {Uint8Array}      Buffer containing encoded data
 */ $51777a3b5b9eee7c$var$ReedSolomonEncoder.prototype.encode = function encode(data) {
    if (!this.genPoly) throw new Error("Encoder not initialized");
    // Calculate EC for this data block
    // extends data size to data+genPoly size
    const paddedData = new Uint8Array(data.length + this.degree);
    paddedData.set(data);
    // The error correction codewords are the remainder after dividing the data codewords
    // by a generator polynomial
    const remainder = $fDKWN.mod(paddedData, this.genPoly);
    // return EC data blocks (last n byte, where n is the degree of genPoly)
    // If coefficients number in remainder are less than genPoly degree,
    // pad with 0s to the left to reach the needed number of coefficients
    const start = this.degree - remainder.length;
    if (start > 0) {
        const buff = new Uint8Array(this.degree);
        buff.set(remainder, start);
        return buff;
    }
    return remainder;
};
module.exports = $51777a3b5b9eee7c$var$ReedSolomonEncoder;

});
parcelRequire.register("fDKWN", function(module, exports) {

$parcel$export(module.exports, "mul", () => $b62eea4ee1718f2e$export$6e3a27864ab166fe, (v) => $b62eea4ee1718f2e$export$6e3a27864ab166fe = v);
$parcel$export(module.exports, "mod", () => $b62eea4ee1718f2e$export$842a2cf37af977e1, (v) => $b62eea4ee1718f2e$export$842a2cf37af977e1 = v);
$parcel$export(module.exports, "generateECPolynomial", () => $b62eea4ee1718f2e$export$7b8be06a973a9d05, (v) => $b62eea4ee1718f2e$export$7b8be06a973a9d05 = v);
/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Uint8Array} p1 Polynomial
 * @param  {Uint8Array} p2 Polynomial
 * @return {Uint8Array}    Product of p1 and p2
 */ var $b62eea4ee1718f2e$export$6e3a27864ab166fe;
/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Uint8Array} divident Polynomial
 * @param  {Uint8Array} divisor  Polynomial
 * @return {Uint8Array}          Remainder
 */ var $b62eea4ee1718f2e$export$842a2cf37af977e1;
/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Uint8Array}    Buffer containing polynomial coefficients
 */ var $b62eea4ee1718f2e$export$7b8be06a973a9d05;

var $33rGW = parcelRequire("33rGW");
$b62eea4ee1718f2e$export$6e3a27864ab166fe = function mul(p1, p2) {
    const coeff = new Uint8Array(p1.length + p2.length - 1);
    for(let i = 0; i < p1.length; i++)for(let j = 0; j < p2.length; j++)coeff[i + j] ^= $33rGW.mul(p1[i], p2[j]);
    return coeff;
};
$b62eea4ee1718f2e$export$842a2cf37af977e1 = function mod(divident, divisor) {
    let result = new Uint8Array(divident);
    while(result.length - divisor.length >= 0){
        const coeff = result[0];
        for(let i = 0; i < divisor.length; i++)result[i] ^= $33rGW.mul(divisor[i], coeff);
        // remove all zeros from buffer head
        let offset = 0;
        while(offset < result.length && result[offset] === 0)offset++;
        result = result.slice(offset);
    }
    return result;
};
$b62eea4ee1718f2e$export$7b8be06a973a9d05 = function generateECPolynomial(degree) {
    let poly = new Uint8Array([
        1
    ]);
    for(let i = 0; i < degree; i++)poly = $b62eea4ee1718f2e$export$6e3a27864ab166fe(poly, new Uint8Array([
        1,
        $33rGW.exp(i)
    ]));
    return poly;
};

});
parcelRequire.register("33rGW", function(module, exports) {

$parcel$export(module.exports, "exp", () => $239721dec76114f6$export$b310ec824aaee37f, (v) => $239721dec76114f6$export$b310ec824aaee37f = v);
$parcel$export(module.exports, "mul", () => $239721dec76114f6$export$6e3a27864ab166fe, (v) => $239721dec76114f6$export$6e3a27864ab166fe = v);
/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */ var $239721dec76114f6$export$bef1f36f5486a6a3;
/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */ var $239721dec76114f6$export$b310ec824aaee37f;
/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */ var $239721dec76114f6$export$6e3a27864ab166fe;
const $239721dec76114f6$var$EXP_TABLE = new Uint8Array(512);
const $239721dec76114f6$var$LOG_TABLE = new Uint8Array(256) /**
 * Precompute the log and anti-log tables for faster computation later
 *
 * For each possible value in the galois field 2^8, we will pre-compute
 * the logarithm and anti-logarithm (exponential) of this value
 *
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
 */ ;
(function initTables() {
    let x = 1;
    for(let i = 0; i < 255; i++){
        $239721dec76114f6$var$EXP_TABLE[i] = x;
        $239721dec76114f6$var$LOG_TABLE[x] = i;
        x <<= 1 // multiply by 2
        ;
        // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
        // This means that when a number is 256 or larger, it should be XORed with 0x11D.
        if (x & 0x100) x ^= 0x11D;
    }
    // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
    // stay inside the bounds (because we will mainly use this table for the multiplication of
    // two GF numbers, no more).
    // @see {@link mul}
    for(let i = 255; i < 512; i++)$239721dec76114f6$var$EXP_TABLE[i] = $239721dec76114f6$var$EXP_TABLE[i - 255];
})();
$239721dec76114f6$export$bef1f36f5486a6a3 = function log(n) {
    if (n < 1) throw new Error("log(" + n + ")");
    return $239721dec76114f6$var$LOG_TABLE[n];
};
$239721dec76114f6$export$b310ec824aaee37f = function exp(n) {
    return $239721dec76114f6$var$EXP_TABLE[n];
};
$239721dec76114f6$export$6e3a27864ab166fe = function mul(x, y) {
    if (x === 0 || y === 0) return 0;
    // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
    // @see {@link initTables}
    return $239721dec76114f6$var$EXP_TABLE[$239721dec76114f6$var$LOG_TABLE[x] + $239721dec76114f6$var$LOG_TABLE[y]];
};

});



parcelRequire.register("8vev4", function(module, exports) {

$parcel$export(module.exports, "getCapacity", () => $630c776d5a19471b$export$55b283886ec2d3fb, (v) => $630c776d5a19471b$export$55b283886ec2d3fb = v);
$parcel$export(module.exports, "from", () => $630c776d5a19471b$export$6788812c4e6611e6, (v) => $630c776d5a19471b$export$6788812c4e6611e6 = v);
$parcel$export(module.exports, "getBestVersionForData", () => $630c776d5a19471b$export$264e969aa7a8ff7e, (v) => $630c776d5a19471b$export$264e969aa7a8ff7e = v);
$parcel$export(module.exports, "getEncodedBits", () => $630c776d5a19471b$export$eee5438974ef6f0e, (v) => $630c776d5a19471b$export$eee5438974ef6f0e = v);
/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */ var $630c776d5a19471b$export$6788812c4e6611e6;
/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */ var $630c776d5a19471b$export$55b283886ec2d3fb;
/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */ var $630c776d5a19471b$export$264e969aa7a8ff7e;
/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */ var $630c776d5a19471b$export$eee5438974ef6f0e;

var $6uaxx = parcelRequire("6uaxx");

var $aSHBL = parcelRequire("aSHBL");

var $hEmHB = parcelRequire("hEmHB");

var $7nEW4 = parcelRequire("7nEW4");

var $UwJRJ = parcelRequire("UwJRJ");
// Generator polynomial used to encode version information
const $630c776d5a19471b$var$G18 = 7973;
const $630c776d5a19471b$var$G18_BCH = $6uaxx.getBCHDigit($630c776d5a19471b$var$G18);
function $630c776d5a19471b$var$getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
    for(let currentVersion = 1; currentVersion <= 40; currentVersion++){
        if (length <= $630c776d5a19471b$export$55b283886ec2d3fb(currentVersion, errorCorrectionLevel, mode)) return currentVersion;
    }
    return undefined;
}
function $630c776d5a19471b$var$getReservedBitsCount(mode, version) {
    // Character count indicator + mode indicator bits
    return $7nEW4.getCharCountIndicator(mode, version) + 4;
}
function $630c776d5a19471b$var$getTotalBitsFromDataArray(segments, version) {
    let totalBits = 0;
    segments.forEach(function(data) {
        const reservedBits = $630c776d5a19471b$var$getReservedBitsCount(data.mode, version);
        totalBits += reservedBits + data.getBitsLength();
    });
    return totalBits;
}
function $630c776d5a19471b$var$getBestVersionForMixedData(segments, errorCorrectionLevel) {
    for(let currentVersion = 1; currentVersion <= 40; currentVersion++){
        const length = $630c776d5a19471b$var$getTotalBitsFromDataArray(segments, currentVersion);
        if (length <= $630c776d5a19471b$export$55b283886ec2d3fb(currentVersion, errorCorrectionLevel, $7nEW4.MIXED)) return currentVersion;
    }
    return undefined;
}
$630c776d5a19471b$export$6788812c4e6611e6 = function from(value, defaultValue) {
    if ($UwJRJ.isValid(value)) return parseInt(value, 10);
    return defaultValue;
};
$630c776d5a19471b$export$55b283886ec2d3fb = function getCapacity(version, errorCorrectionLevel, mode) {
    if (!$UwJRJ.isValid(version)) throw new Error("Invalid QR Code version");
    // Use Byte mode as default
    if (typeof mode === "undefined") mode = $7nEW4.BYTE;
    // Total codewords for this QR code version (Data + Error correction)
    const totalCodewords = $6uaxx.getSymbolTotalCodewords(version);
    // Total number of error correction codewords
    const ecTotalCodewords = $aSHBL.getTotalCodewordsCount(version, errorCorrectionLevel);
    // Total number of data codewords
    const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    if (mode === $7nEW4.MIXED) return dataTotalCodewordsBits;
    const usableBits = dataTotalCodewordsBits - $630c776d5a19471b$var$getReservedBitsCount(mode, version);
    // Return max number of storable codewords
    switch(mode){
        case $7nEW4.NUMERIC:
            return Math.floor(usableBits / 10 * 3);
        case $7nEW4.ALPHANUMERIC:
            return Math.floor(usableBits / 11 * 2);
        case $7nEW4.KANJI:
            return Math.floor(usableBits / 13);
        case $7nEW4.BYTE:
        default:
            return Math.floor(usableBits / 8);
    }
};
$630c776d5a19471b$export$264e969aa7a8ff7e = function getBestVersionForData(data, errorCorrectionLevel) {
    let seg;
    const ecl = $hEmHB.from(errorCorrectionLevel, $hEmHB.M);
    if (Array.isArray(data)) {
        if (data.length > 1) return $630c776d5a19471b$var$getBestVersionForMixedData(data, ecl);
        if (data.length === 0) return 1;
        seg = data[0];
    } else seg = data;
    return $630c776d5a19471b$var$getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
};
$630c776d5a19471b$export$eee5438974ef6f0e = function getEncodedBits(version) {
    if (!$UwJRJ.isValid(version) || version < 7) throw new Error("Invalid QR Code version");
    let d = version << 12;
    while($6uaxx.getBCHDigit(d) - $630c776d5a19471b$var$G18_BCH >= 0)d ^= $630c776d5a19471b$var$G18 << $6uaxx.getBCHDigit(d) - $630c776d5a19471b$var$G18_BCH;
    return version << 12 | d;
};

});
parcelRequire.register("7nEW4", function(module, exports) {

$parcel$export(module.exports, "NUMERIC", () => $55fa6f537345068d$export$4d318981b5a83836, (v) => $55fa6f537345068d$export$4d318981b5a83836 = v);
$parcel$export(module.exports, "ALPHANUMERIC", () => $55fa6f537345068d$export$376a9ed239d6c1c8, (v) => $55fa6f537345068d$export$376a9ed239d6c1c8 = v);
$parcel$export(module.exports, "BYTE", () => $55fa6f537345068d$export$8f4bf8f7eb581284, (v) => $55fa6f537345068d$export$8f4bf8f7eb581284 = v);
$parcel$export(module.exports, "KANJI", () => $55fa6f537345068d$export$a4d452c2363c8e12, (v) => $55fa6f537345068d$export$a4d452c2363c8e12 = v);
$parcel$export(module.exports, "MIXED", () => $55fa6f537345068d$export$bb410559a65d3418, (v) => $55fa6f537345068d$export$bb410559a65d3418 = v);
$parcel$export(module.exports, "getCharCountIndicator", () => $55fa6f537345068d$export$e79764af6ffaeb8d, (v) => $55fa6f537345068d$export$e79764af6ffaeb8d = v);
$parcel$export(module.exports, "getBestModeForData", () => $55fa6f537345068d$export$1bd4c93ffb42e55e, (v) => $55fa6f537345068d$export$1bd4c93ffb42e55e = v);
$parcel$export(module.exports, "toString", () => $55fa6f537345068d$export$f84e8e69fd4488a5, (v) => $55fa6f537345068d$export$f84e8e69fd4488a5 = v);
$parcel$export(module.exports, "isValid", () => $55fa6f537345068d$export$1ea939691cdc45b8, (v) => $55fa6f537345068d$export$1ea939691cdc45b8 = v);
$parcel$export(module.exports, "from", () => $55fa6f537345068d$export$6788812c4e6611e6, (v) => $55fa6f537345068d$export$6788812c4e6611e6 = v);
/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */ var $55fa6f537345068d$export$4d318981b5a83836;
/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */ var $55fa6f537345068d$export$376a9ed239d6c1c8;
/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */ var $55fa6f537345068d$export$8f4bf8f7eb581284;
/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */ var $55fa6f537345068d$export$a4d452c2363c8e12;
/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */ var $55fa6f537345068d$export$bb410559a65d3418;
/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */ var $55fa6f537345068d$export$e79764af6ffaeb8d;
/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */ var $55fa6f537345068d$export$1bd4c93ffb42e55e;
/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */ var $55fa6f537345068d$export$f84e8e69fd4488a5;
/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */ var $55fa6f537345068d$export$1ea939691cdc45b8;
/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */ var $55fa6f537345068d$export$6788812c4e6611e6;

var $UwJRJ = parcelRequire("UwJRJ");

var $7FgTz = parcelRequire("7FgTz");
$55fa6f537345068d$export$4d318981b5a83836 = {
    id: "Numeric",
    bit: 1,
    ccBits: [
        10,
        12,
        14
    ]
};
$55fa6f537345068d$export$376a9ed239d6c1c8 = {
    id: "Alphanumeric",
    bit: 2,
    ccBits: [
        9,
        11,
        13
    ]
};
$55fa6f537345068d$export$8f4bf8f7eb581284 = {
    id: "Byte",
    bit: 4,
    ccBits: [
        8,
        16,
        16
    ]
};
$55fa6f537345068d$export$a4d452c2363c8e12 = {
    id: "Kanji",
    bit: 8,
    ccBits: [
        8,
        10,
        12
    ]
};
$55fa6f537345068d$export$bb410559a65d3418 = {
    bit: -1
};
$55fa6f537345068d$export$e79764af6ffaeb8d = function getCharCountIndicator(mode, version) {
    if (!mode.ccBits) throw new Error("Invalid mode: " + mode);
    if (!$UwJRJ.isValid(version)) throw new Error("Invalid version: " + version);
    if (version >= 1 && version < 10) return mode.ccBits[0];
    else if (version < 27) return mode.ccBits[1];
    return mode.ccBits[2];
};
$55fa6f537345068d$export$1bd4c93ffb42e55e = function getBestModeForData(dataStr) {
    if ($7FgTz.testNumeric(dataStr)) return $55fa6f537345068d$export$4d318981b5a83836;
    else if ($7FgTz.testAlphanumeric(dataStr)) return $55fa6f537345068d$export$376a9ed239d6c1c8;
    else if ($7FgTz.testKanji(dataStr)) return $55fa6f537345068d$export$a4d452c2363c8e12;
    else return $55fa6f537345068d$export$8f4bf8f7eb581284;
};
$55fa6f537345068d$export$f84e8e69fd4488a5 = function toString(mode) {
    if (mode && mode.id) return mode.id;
    throw new Error("Invalid mode");
};
$55fa6f537345068d$export$1ea939691cdc45b8 = function isValid(mode) {
    return mode && mode.bit && mode.ccBits;
};
/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */ function $55fa6f537345068d$var$fromString(string) {
    if (typeof string !== "string") throw new Error("Param is not a string");
    const lcStr = string.toLowerCase();
    switch(lcStr){
        case "numeric":
            return $55fa6f537345068d$export$4d318981b5a83836;
        case "alphanumeric":
            return $55fa6f537345068d$export$376a9ed239d6c1c8;
        case "kanji":
            return $55fa6f537345068d$export$a4d452c2363c8e12;
        case "byte":
            return $55fa6f537345068d$export$8f4bf8f7eb581284;
        default:
            throw new Error("Unknown mode: " + string);
    }
}
$55fa6f537345068d$export$6788812c4e6611e6 = function from(value, defaultValue) {
    if ($55fa6f537345068d$export$1ea939691cdc45b8(value)) return value;
    try {
        return $55fa6f537345068d$var$fromString(value);
    } catch (e) {
        return defaultValue;
    }
};

});
parcelRequire.register("UwJRJ", function(module, exports) {

$parcel$export(module.exports, "isValid", () => $0a9ea0508c836a8b$export$1ea939691cdc45b8, (v) => $0a9ea0508c836a8b$export$1ea939691cdc45b8 = v);
/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */ var $0a9ea0508c836a8b$export$1ea939691cdc45b8;
$0a9ea0508c836a8b$export$1ea939691cdc45b8 = function isValid(version) {
    return !isNaN(version) && version >= 1 && version <= 40;
};

});

parcelRequire.register("7FgTz", function(module, exports) {

$parcel$export(module.exports, "KANJI", () => $594977ca67a9a62f$export$a4d452c2363c8e12, (v) => $594977ca67a9a62f$export$a4d452c2363c8e12 = v);
$parcel$export(module.exports, "BYTE_KANJI", () => $594977ca67a9a62f$export$9df7c29d562bab83, (v) => $594977ca67a9a62f$export$9df7c29d562bab83 = v);
$parcel$export(module.exports, "BYTE", () => $594977ca67a9a62f$export$8f4bf8f7eb581284, (v) => $594977ca67a9a62f$export$8f4bf8f7eb581284 = v);
$parcel$export(module.exports, "NUMERIC", () => $594977ca67a9a62f$export$4d318981b5a83836, (v) => $594977ca67a9a62f$export$4d318981b5a83836 = v);
$parcel$export(module.exports, "ALPHANUMERIC", () => $594977ca67a9a62f$export$376a9ed239d6c1c8, (v) => $594977ca67a9a62f$export$376a9ed239d6c1c8 = v);
$parcel$export(module.exports, "testKanji", () => $594977ca67a9a62f$export$175f16aef75a4569, (v) => $594977ca67a9a62f$export$175f16aef75a4569 = v);
$parcel$export(module.exports, "testNumeric", () => $594977ca67a9a62f$export$50b7f9bf92c74274, (v) => $594977ca67a9a62f$export$50b7f9bf92c74274 = v);
$parcel$export(module.exports, "testAlphanumeric", () => $594977ca67a9a62f$export$4ba5f52893b4ac97, (v) => $594977ca67a9a62f$export$4ba5f52893b4ac97 = v);
var $594977ca67a9a62f$export$a4d452c2363c8e12;
var $594977ca67a9a62f$export$9df7c29d562bab83;
var $594977ca67a9a62f$export$8f4bf8f7eb581284;
var $594977ca67a9a62f$export$4d318981b5a83836;
var $594977ca67a9a62f$export$376a9ed239d6c1c8;
var $594977ca67a9a62f$export$175f16aef75a4569;
var $594977ca67a9a62f$export$50b7f9bf92c74274;
var $594977ca67a9a62f$export$4ba5f52893b4ac97;
const $594977ca67a9a62f$var$numeric = "[0-9]+";
const $594977ca67a9a62f$var$alphanumeric = "[A-Z $%*+\\-./:]+";
let $594977ca67a9a62f$var$kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
$594977ca67a9a62f$var$kanji = $594977ca67a9a62f$var$kanji.replace(/u/g, "\\u");
const $594977ca67a9a62f$var$byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + $594977ca67a9a62f$var$kanji + ")(?:.|[\r\n]))+";
$594977ca67a9a62f$export$a4d452c2363c8e12 = new RegExp($594977ca67a9a62f$var$kanji, "g");
$594977ca67a9a62f$export$9df7c29d562bab83 = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
$594977ca67a9a62f$export$8f4bf8f7eb581284 = new RegExp($594977ca67a9a62f$var$byte, "g");
$594977ca67a9a62f$export$4d318981b5a83836 = new RegExp($594977ca67a9a62f$var$numeric, "g");
$594977ca67a9a62f$export$376a9ed239d6c1c8 = new RegExp($594977ca67a9a62f$var$alphanumeric, "g");
const $594977ca67a9a62f$var$TEST_KANJI = new RegExp("^" + $594977ca67a9a62f$var$kanji + "$");
const $594977ca67a9a62f$var$TEST_NUMERIC = new RegExp("^" + $594977ca67a9a62f$var$numeric + "$");
const $594977ca67a9a62f$var$TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
$594977ca67a9a62f$export$175f16aef75a4569 = function testKanji(str) {
    return $594977ca67a9a62f$var$TEST_KANJI.test(str);
};
$594977ca67a9a62f$export$50b7f9bf92c74274 = function testNumeric(str) {
    return $594977ca67a9a62f$var$TEST_NUMERIC.test(str);
};
$594977ca67a9a62f$export$4ba5f52893b4ac97 = function testAlphanumeric(str) {
    return $594977ca67a9a62f$var$TEST_ALPHANUMERIC.test(str);
};

});



parcelRequire.register("2mreP", function(module, exports) {

$parcel$export(module.exports, "getEncodedBits", () => $1b82c3c60fb372c6$export$eee5438974ef6f0e, (v) => $1b82c3c60fb372c6$export$eee5438974ef6f0e = v);
/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */ var $1b82c3c60fb372c6$export$eee5438974ef6f0e;

var $6uaxx = parcelRequire("6uaxx");
const $1b82c3c60fb372c6$var$G15 = 1335;
const $1b82c3c60fb372c6$var$G15_MASK = 21522;
const $1b82c3c60fb372c6$var$G15_BCH = $6uaxx.getBCHDigit($1b82c3c60fb372c6$var$G15);
$1b82c3c60fb372c6$export$eee5438974ef6f0e = function getEncodedBits(errorCorrectionLevel, mask) {
    const data = errorCorrectionLevel.bit << 3 | mask;
    let d = data << 10;
    while($6uaxx.getBCHDigit(d) - $1b82c3c60fb372c6$var$G15_BCH >= 0)d ^= $1b82c3c60fb372c6$var$G15 << $6uaxx.getBCHDigit(d) - $1b82c3c60fb372c6$var$G15_BCH;
    // xor final data with mask pattern in order to ensure that
    // no combination of Error Correction Level and data mask pattern
    // will result in an all-zero data string
    return (data << 10 | d) ^ $1b82c3c60fb372c6$var$G15_MASK;
};

});

parcelRequire.register("8wYMQ", function(module, exports) {

$parcel$export(module.exports, "fromArray", () => $636076e8c6bab93b$export$571d59b505e6bb4e, (v) => $636076e8c6bab93b$export$571d59b505e6bb4e = v);
$parcel$export(module.exports, "fromString", () => $636076e8c6bab93b$export$3004f64547af360e, (v) => $636076e8c6bab93b$export$3004f64547af360e = v);
$parcel$export(module.exports, "rawSplit", () => $636076e8c6bab93b$export$89ab1afb9839589b, (v) => $636076e8c6bab93b$export$89ab1afb9839589b = v);
/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */ var $636076e8c6bab93b$export$571d59b505e6bb4e;
/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */ var $636076e8c6bab93b$export$3004f64547af360e;
/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */ var $636076e8c6bab93b$export$89ab1afb9839589b;

var $7nEW4 = parcelRequire("7nEW4");

var $704RX = parcelRequire("704RX");

var $dk7YU = parcelRequire("dk7YU");

var $3pvZJ = parcelRequire("3pvZJ");

var $kVrx4 = parcelRequire("kVrx4");

var $7FgTz = parcelRequire("7FgTz");

var $6uaxx = parcelRequire("6uaxx");

var $bJA0v = parcelRequire("bJA0v");
/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */ function $636076e8c6bab93b$var$getStringByteLength(str) {
    return unescape(encodeURIComponent(str)).length;
}
/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */ function $636076e8c6bab93b$var$getSegments(regex, mode, str) {
    const segments = [];
    let result;
    while((result = regex.exec(str)) !== null)segments.push({
        data: result[0],
        index: result.index,
        mode: mode,
        length: result[0].length
    });
    return segments;
}
/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */ function $636076e8c6bab93b$var$getSegmentsFromString(dataStr) {
    const numSegs = $636076e8c6bab93b$var$getSegments($7FgTz.NUMERIC, $7nEW4.NUMERIC, dataStr);
    const alphaNumSegs = $636076e8c6bab93b$var$getSegments($7FgTz.ALPHANUMERIC, $7nEW4.ALPHANUMERIC, dataStr);
    let byteSegs;
    let kanjiSegs;
    if ($6uaxx.isKanjiModeEnabled()) {
        byteSegs = $636076e8c6bab93b$var$getSegments($7FgTz.BYTE, $7nEW4.BYTE, dataStr);
        kanjiSegs = $636076e8c6bab93b$var$getSegments($7FgTz.KANJI, $7nEW4.KANJI, dataStr);
    } else {
        byteSegs = $636076e8c6bab93b$var$getSegments($7FgTz.BYTE_KANJI, $7nEW4.BYTE, dataStr);
        kanjiSegs = [];
    }
    const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
    return segs.sort(function(s1, s2) {
        return s1.index - s2.index;
    }).map(function(obj) {
        return {
            data: obj.data,
            mode: obj.mode,
            length: obj.length
        };
    });
}
/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */ function $636076e8c6bab93b$var$getSegmentBitsLength(length, mode) {
    switch(mode){
        case $7nEW4.NUMERIC:
            return $704RX.getBitsLength(length);
        case $7nEW4.ALPHANUMERIC:
            return $dk7YU.getBitsLength(length);
        case $7nEW4.KANJI:
            return $kVrx4.getBitsLength(length);
        case $7nEW4.BYTE:
            return $3pvZJ.getBitsLength(length);
    }
}
/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */ function $636076e8c6bab93b$var$mergeSegments(segs) {
    return segs.reduce(function(acc, curr) {
        const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
        if (prevSeg && prevSeg.mode === curr.mode) {
            acc[acc.length - 1].data += curr.data;
            return acc;
        }
        acc.push(curr);
        return acc;
    }, []);
}
/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */ function $636076e8c6bab93b$var$buildNodes(segs) {
    const nodes = [];
    for(let i = 0; i < segs.length; i++){
        const seg = segs[i];
        switch(seg.mode){
            case $7nEW4.NUMERIC:
                nodes.push([
                    seg,
                    {
                        data: seg.data,
                        mode: $7nEW4.ALPHANUMERIC,
                        length: seg.length
                    },
                    {
                        data: seg.data,
                        mode: $7nEW4.BYTE,
                        length: seg.length
                    }
                ]);
                break;
            case $7nEW4.ALPHANUMERIC:
                nodes.push([
                    seg,
                    {
                        data: seg.data,
                        mode: $7nEW4.BYTE,
                        length: seg.length
                    }
                ]);
                break;
            case $7nEW4.KANJI:
                nodes.push([
                    seg,
                    {
                        data: seg.data,
                        mode: $7nEW4.BYTE,
                        length: $636076e8c6bab93b$var$getStringByteLength(seg.data)
                    }
                ]);
                break;
            case $7nEW4.BYTE:
                nodes.push([
                    {
                        data: seg.data,
                        mode: $7nEW4.BYTE,
                        length: $636076e8c6bab93b$var$getStringByteLength(seg.data)
                    }
                ]);
        }
    }
    return nodes;
}
/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */ function $636076e8c6bab93b$var$buildGraph(nodes, version) {
    const table = {};
    const graph = {
        start: {}
    };
    let prevNodeIds = [
        "start"
    ];
    for(let i = 0; i < nodes.length; i++){
        const nodeGroup = nodes[i];
        const currentNodeIds = [];
        for(let j = 0; j < nodeGroup.length; j++){
            const node = nodeGroup[j];
            const key = "" + i + j;
            currentNodeIds.push(key);
            table[key] = {
                node: node,
                lastCount: 0
            };
            graph[key] = {};
            for(let n = 0; n < prevNodeIds.length; n++){
                const prevNodeId = prevNodeIds[n];
                if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
                    graph[prevNodeId][key] = $636076e8c6bab93b$var$getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - $636076e8c6bab93b$var$getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
                    table[prevNodeId].lastCount += node.length;
                } else {
                    if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
                    graph[prevNodeId][key] = $636076e8c6bab93b$var$getSegmentBitsLength(node.length, node.mode) + 4 + $7nEW4.getCharCountIndicator(node.mode, version) // switch cost
                    ;
                }
            }
        }
        prevNodeIds = currentNodeIds;
    }
    for(let n = 0; n < prevNodeIds.length; n++)graph[prevNodeIds[n]].end = 0;
    return {
        map: graph,
        table: table
    };
}
/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */ function $636076e8c6bab93b$var$buildSingleSegment(data, modesHint) {
    let mode;
    const bestMode = $7nEW4.getBestModeForData(data);
    mode = $7nEW4.from(modesHint, bestMode);
    // Make sure data can be encoded
    if (mode !== $7nEW4.BYTE && mode.bit < bestMode.bit) throw new Error('"' + data + '"' + " cannot be encoded with mode " + $7nEW4.toString(mode) + ".\n Suggested mode is: " + $7nEW4.toString(bestMode));
    // Use Mode.BYTE if Kanji support is disabled
    if (mode === $7nEW4.KANJI && !$6uaxx.isKanjiModeEnabled()) mode = $7nEW4.BYTE;
    switch(mode){
        case $7nEW4.NUMERIC:
            return new $704RX(data);
        case $7nEW4.ALPHANUMERIC:
            return new $dk7YU(data);
        case $7nEW4.KANJI:
            return new $kVrx4(data);
        case $7nEW4.BYTE:
            return new $3pvZJ(data);
    }
}
$636076e8c6bab93b$export$571d59b505e6bb4e = function fromArray(array) {
    return array.reduce(function(acc, seg) {
        if (typeof seg === "string") acc.push($636076e8c6bab93b$var$buildSingleSegment(seg, null));
        else if (seg.data) acc.push($636076e8c6bab93b$var$buildSingleSegment(seg.data, seg.mode));
        return acc;
    }, []);
};
$636076e8c6bab93b$export$3004f64547af360e = function fromString(data, version) {
    const segs = $636076e8c6bab93b$var$getSegmentsFromString(data, $6uaxx.isKanjiModeEnabled());
    const nodes = $636076e8c6bab93b$var$buildNodes(segs);
    const graph = $636076e8c6bab93b$var$buildGraph(nodes, version);
    const path = $bJA0v.find_path(graph.map, "start", "end");
    const optimizedSegs = [];
    for(let i = 1; i < path.length - 1; i++)optimizedSegs.push(graph.table[path[i]].node);
    return $636076e8c6bab93b$export$571d59b505e6bb4e($636076e8c6bab93b$var$mergeSegments(optimizedSegs));
};
$636076e8c6bab93b$export$89ab1afb9839589b = function rawSplit(data) {
    return $636076e8c6bab93b$export$571d59b505e6bb4e($636076e8c6bab93b$var$getSegmentsFromString(data, $6uaxx.isKanjiModeEnabled()));
};

});
parcelRequire.register("704RX", function(module, exports) {

var $7nEW4 = parcelRequire("7nEW4");
function $518c4f6c4c0fad87$var$NumericData(data) {
    this.mode = $7nEW4.NUMERIC;
    this.data = data.toString();
}
$518c4f6c4c0fad87$var$NumericData.getBitsLength = function getBitsLength(length) {
    return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
};
$518c4f6c4c0fad87$var$NumericData.prototype.getLength = function getLength() {
    return this.data.length;
};
$518c4f6c4c0fad87$var$NumericData.prototype.getBitsLength = function getBitsLength() {
    return $518c4f6c4c0fad87$var$NumericData.getBitsLength(this.data.length);
};
$518c4f6c4c0fad87$var$NumericData.prototype.write = function write(bitBuffer) {
    let i, group, value;
    // The input data string is divided into groups of three digits,
    // and each group is converted to its 10-bit binary equivalent.
    for(i = 0; i + 3 <= this.data.length; i += 3){
        group = this.data.substr(i, 3);
        value = parseInt(group, 10);
        bitBuffer.put(value, 10);
    }
    // If the number of input digits is not an exact multiple of three,
    // the final one or two digits are converted to 4 or 7 bits respectively.
    const remainingNum = this.data.length - i;
    if (remainingNum > 0) {
        group = this.data.substr(i);
        value = parseInt(group, 10);
        bitBuffer.put(value, remainingNum * 3 + 1);
    }
};
module.exports = $518c4f6c4c0fad87$var$NumericData;

});

parcelRequire.register("dk7YU", function(module, exports) {

var $7nEW4 = parcelRequire("7nEW4");
/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */ const $9b335592a9198a88$var$ALPHA_NUM_CHARS = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
    "$",
    "%",
    "*",
    "+",
    "-",
    ".",
    "/",
    ":"
];
function $9b335592a9198a88$var$AlphanumericData(data) {
    this.mode = $7nEW4.ALPHANUMERIC;
    this.data = data;
}
$9b335592a9198a88$var$AlphanumericData.getBitsLength = function getBitsLength(length) {
    return 11 * Math.floor(length / 2) + 6 * (length % 2);
};
$9b335592a9198a88$var$AlphanumericData.prototype.getLength = function getLength() {
    return this.data.length;
};
$9b335592a9198a88$var$AlphanumericData.prototype.getBitsLength = function getBitsLength() {
    return $9b335592a9198a88$var$AlphanumericData.getBitsLength(this.data.length);
};
$9b335592a9198a88$var$AlphanumericData.prototype.write = function write(bitBuffer) {
    let i;
    // Input data characters are divided into groups of two characters
    // and encoded as 11-bit binary codes.
    for(i = 0; i + 2 <= this.data.length; i += 2){
        // The character value of the first character is multiplied by 45
        let value = $9b335592a9198a88$var$ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
        // The character value of the second digit is added to the product
        value += $9b335592a9198a88$var$ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
        // The sum is then stored as 11-bit binary number
        bitBuffer.put(value, 11);
    }
    // If the number of input data characters is not a multiple of two,
    // the character value of the final character is encoded as a 6-bit binary number.
    if (this.data.length % 2) bitBuffer.put($9b335592a9198a88$var$ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
};
module.exports = $9b335592a9198a88$var$AlphanumericData;

});

parcelRequire.register("3pvZJ", function(module, exports) {

var $dvL5o = parcelRequire("dvL5o");

var $7nEW4 = parcelRequire("7nEW4");
function $27bc865981c1ec07$var$ByteData(data) {
    this.mode = $7nEW4.BYTE;
    if (typeof data === "string") data = $dvL5o(data);
    this.data = new Uint8Array(data);
}
$27bc865981c1ec07$var$ByteData.getBitsLength = function getBitsLength(length) {
    return length * 8;
};
$27bc865981c1ec07$var$ByteData.prototype.getLength = function getLength() {
    return this.data.length;
};
$27bc865981c1ec07$var$ByteData.prototype.getBitsLength = function getBitsLength() {
    return $27bc865981c1ec07$var$ByteData.getBitsLength(this.data.length);
};
$27bc865981c1ec07$var$ByteData.prototype.write = function(bitBuffer) {
    for(let i = 0, l = this.data.length; i < l; i++)bitBuffer.put(this.data[i], 8);
};
module.exports = $27bc865981c1ec07$var$ByteData;

});
parcelRequire.register("dvL5o", function(module, exports) {
"use strict";
module.exports = function encodeUtf8(input) {
    var result = [];
    var size = input.length;
    for(var index = 0; index < size; index++){
        var point = input.charCodeAt(index);
        if (point >= 0xD800 && point <= 0xDBFF && size > index + 1) {
            var second = input.charCodeAt(index + 1);
            if (second >= 0xDC00 && second <= 0xDFFF) {
                // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                point = (point - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
                index += 1;
            }
        }
        // US-ASCII
        if (point < 0x80) {
            result.push(point);
            continue;
        }
        // 2-byte UTF-8
        if (point < 0x800) {
            result.push(point >> 6 | 192);
            result.push(point & 63 | 128);
            continue;
        }
        // 3-byte UTF-8
        if (point < 0xD800 || point >= 0xE000 && point < 0x10000) {
            result.push(point >> 12 | 224);
            result.push(point >> 6 & 63 | 128);
            result.push(point & 63 | 128);
            continue;
        }
        // 4-byte UTF-8
        if (point >= 0x10000 && point <= 0x10FFFF) {
            result.push(point >> 18 | 240);
            result.push(point >> 12 & 63 | 128);
            result.push(point >> 6 & 63 | 128);
            result.push(point & 63 | 128);
            continue;
        }
        // Invalid character
        result.push(0xEF, 0xBF, 0xBD);
    }
    return new Uint8Array(result).buffer;
};

});


parcelRequire.register("kVrx4", function(module, exports) {

var $7nEW4 = parcelRequire("7nEW4");

var $6uaxx = parcelRequire("6uaxx");
function $f3be7ce0413592b6$var$KanjiData(data) {
    this.mode = $7nEW4.KANJI;
    this.data = data;
}
$f3be7ce0413592b6$var$KanjiData.getBitsLength = function getBitsLength(length) {
    return length * 13;
};
$f3be7ce0413592b6$var$KanjiData.prototype.getLength = function getLength() {
    return this.data.length;
};
$f3be7ce0413592b6$var$KanjiData.prototype.getBitsLength = function getBitsLength() {
    return $f3be7ce0413592b6$var$KanjiData.getBitsLength(this.data.length);
};
$f3be7ce0413592b6$var$KanjiData.prototype.write = function(bitBuffer) {
    let i;
    // In the Shift JIS system, Kanji characters are represented by a two byte combination.
    // These byte values are shifted from the JIS X 0208 values.
    // JIS X 0208 gives details of the shift coded representation.
    for(i = 0; i < this.data.length; i++){
        let value = $6uaxx.toSJIS(this.data[i]);
        // For characters with Shift JIS values from 0x8140 to 0x9FFC:
        if (value >= 0x8140 && value <= 0x9FFC) // Subtract 0x8140 from Shift JIS value
        value -= 0x8140;
        else if (value >= 0xE040 && value <= 0xEBBF) // Subtract 0xC140 from Shift JIS value
        value -= 0xC140;
        else throw new Error("Invalid SJIS character: " + this.data[i] + "\n" + "Make sure your charset is UTF-8");
        // Multiply most significant byte of result by 0xC0
        // and add least significant byte to product
        value = (value >>> 8 & 0xff) * 0xC0 + (value & 0xff);
        // Convert result to a 13-bit binary string
        bitBuffer.put(value, 13);
    }
};
module.exports = $f3be7ce0413592b6$var$KanjiData;

});

parcelRequire.register("bJA0v", function(module, exports) {
"use strict";
/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/ var $88afd3f4b4ef4386$var$dijkstra = {
    single_source_shortest_paths: function(graph, s, d) {
        // Predecessor map for each node that has been encountered.
        // node ID => predecessor node ID
        var predecessors = {};
        // Costs of shortest paths from s to all nodes encountered.
        // node ID => cost
        var costs = {};
        costs[s] = 0;
        // Costs of shortest paths from s to all nodes encountered; differs from
        // `costs` in that it provides easy access to the node that currently has
        // the known shortest path from s.
        // XXX: Do we actually need both `costs` and `open`?
        var open = $88afd3f4b4ef4386$var$dijkstra.PriorityQueue.make();
        open.push(s, 0);
        var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
        while(!open.empty()){
            // In the nodes remaining in graph that have a known cost from s,
            // find the node, u, that currently has the shortest path from s.
            closest = open.pop();
            u = closest.value;
            cost_of_s_to_u = closest.cost;
            // Get nodes adjacent to u...
            adjacent_nodes = graph[u] || {};
            // ...and explore the edges that connect u to those nodes, updating
            // the cost of the shortest paths to any or all of those nodes as
            // necessary. v is the node across the current edge from u.
            for(v in adjacent_nodes)if (adjacent_nodes.hasOwnProperty(v)) {
                // Get the cost of the edge running from u to v.
                cost_of_e = adjacent_nodes[v];
                // Cost of s to u plus the cost of u to v across e--this is *a*
                // cost from s to v that may or may not be less than the current
                // known cost to v.
                cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
                // If we haven't visited v yet OR if the current known cost from s to
                // v is greater than the new cost we just found (cost of s to u plus
                // cost of u to v across e), update v's cost in the cost list and
                // update v's predecessor in the predecessor list (it's now u).
                cost_of_s_to_v = costs[v];
                first_visit = typeof costs[v] === "undefined";
                if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                    costs[v] = cost_of_s_to_u_plus_cost_of_e;
                    open.push(v, cost_of_s_to_u_plus_cost_of_e);
                    predecessors[v] = u;
                }
            }
        }
        if (typeof d !== "undefined" && typeof costs[d] === "undefined") {
            var msg = [
                "Could not find a path from ",
                s,
                " to ",
                d,
                "."
            ].join("");
            throw new Error(msg);
        }
        return predecessors;
    },
    extract_shortest_path_from_predecessor_list: function(predecessors, d) {
        var nodes = [];
        var u = d;
        var predecessor;
        while(u){
            nodes.push(u);
            predecessor = predecessors[u];
            u = predecessors[u];
        }
        nodes.reverse();
        return nodes;
    },
    find_path: function(graph, s, d) {
        var predecessors = $88afd3f4b4ef4386$var$dijkstra.single_source_shortest_paths(graph, s, d);
        return $88afd3f4b4ef4386$var$dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d);
    },
    /**
   * A very naive priority queue implementation.
   */ PriorityQueue: {
        make: function(opts) {
            var T = $88afd3f4b4ef4386$var$dijkstra.PriorityQueue, t = {}, key;
            opts = opts || {};
            for(key in T)if (T.hasOwnProperty(key)) t[key] = T[key];
            t.queue = [];
            t.sorter = opts.sorter || T.default_sorter;
            return t;
        },
        default_sorter: function(a, b) {
            return a.cost - b.cost;
        },
        /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */ push: function(value, cost) {
            var item = {
                value: value,
                cost: cost
            };
            this.queue.push(item);
            this.queue.sort(this.sorter);
        },
        /**
     * Return the highest priority element in the queue.
     */ pop: function() {
            return this.queue.shift();
        },
        empty: function() {
            return this.queue.length === 0;
        }
    }
};
module.exports = $88afd3f4b4ef4386$var$dijkstra;

});



parcelRequire.register("ff0Dj", function(module, exports) {

$parcel$export(module.exports, "render", () => $b188bf75acd418df$export$b3890eb0ae9dca99, (v) => $b188bf75acd418df$export$b3890eb0ae9dca99 = v);
$parcel$export(module.exports, "renderToDataURL", () => $b188bf75acd418df$export$c3e5526bbaf70a25, (v) => $b188bf75acd418df$export$c3e5526bbaf70a25 = v);
var $b188bf75acd418df$export$b3890eb0ae9dca99;
var $b188bf75acd418df$export$c3e5526bbaf70a25;

var $kPbAQ = parcelRequire("kPbAQ");
function $b188bf75acd418df$var$clearCanvas(ctx, canvas, size) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!canvas.style) canvas.style = {};
    canvas.height = size;
    canvas.width = size;
    canvas.style.height = size + "px";
    canvas.style.width = size + "px";
}
function $b188bf75acd418df$var$getCanvasElement() {
    try {
        return document.createElement("canvas");
    } catch (e) {
        throw new Error("You need to specify a canvas element");
    }
}
$b188bf75acd418df$export$b3890eb0ae9dca99 = function render(qrData, canvas, options) {
    let opts = options;
    let canvasEl = canvas;
    if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = undefined;
    }
    if (!canvas) canvasEl = $b188bf75acd418df$var$getCanvasElement();
    opts = $kPbAQ.getOptions(opts);
    const size = $kPbAQ.getImageWidth(qrData.modules.size, opts);
    const ctx = canvasEl.getContext("2d");
    const image = ctx.createImageData(size, size);
    $kPbAQ.qrToImageData(image.data, qrData, opts);
    $b188bf75acd418df$var$clearCanvas(ctx, canvasEl, size);
    ctx.putImageData(image, 0, 0);
    return canvasEl;
};
$b188bf75acd418df$export$c3e5526bbaf70a25 = function renderToDataURL(qrData, canvas, options) {
    let opts = options;
    if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = undefined;
    }
    if (!opts) opts = {};
    const canvasEl = $b188bf75acd418df$export$b3890eb0ae9dca99(qrData, canvas, opts);
    const type = opts.type || "image/png";
    const rendererOpts = opts.rendererOpts || {};
    return canvasEl.toDataURL(type, rendererOpts.quality);
};

});
parcelRequire.register("kPbAQ", function(module, exports) {

$parcel$export(module.exports, "getOptions", () => $f2919044dc264dac$export$d2312e68e1f5ad00, (v) => $f2919044dc264dac$export$d2312e68e1f5ad00 = v);
$parcel$export(module.exports, "getScale", () => $f2919044dc264dac$export$5cdac61cf538712e, (v) => $f2919044dc264dac$export$5cdac61cf538712e = v);
$parcel$export(module.exports, "getImageWidth", () => $f2919044dc264dac$export$c3a1a1f268a8142b, (v) => $f2919044dc264dac$export$c3a1a1f268a8142b = v);
$parcel$export(module.exports, "qrToImageData", () => $f2919044dc264dac$export$83136f57c739c5f3, (v) => $f2919044dc264dac$export$83136f57c739c5f3 = v);
var $f2919044dc264dac$export$d2312e68e1f5ad00;
var $f2919044dc264dac$export$5cdac61cf538712e;
var $f2919044dc264dac$export$c3a1a1f268a8142b;
var $f2919044dc264dac$export$83136f57c739c5f3;
function $f2919044dc264dac$var$hex2rgba(hex) {
    if (typeof hex === "number") hex = hex.toString();
    if (typeof hex !== "string") throw new Error("Color should be defined as hex string");
    let hexCode = hex.slice().replace("#", "").split("");
    if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) throw new Error("Invalid hex color: " + hex);
    // Convert from short to long form (fff -> ffffff)
    if (hexCode.length === 3 || hexCode.length === 4) hexCode = Array.prototype.concat.apply([], hexCode.map(function(c) {
        return [
            c,
            c
        ];
    }));
    // Add default alpha value
    if (hexCode.length === 6) hexCode.push("F", "F");
    const hexValue = parseInt(hexCode.join(""), 16);
    return {
        r: hexValue >> 24 & 255,
        g: hexValue >> 16 & 255,
        b: hexValue >> 8 & 255,
        a: hexValue & 255,
        hex: "#" + hexCode.slice(0, 6).join("")
    };
}
$f2919044dc264dac$export$d2312e68e1f5ad00 = function getOptions(options) {
    if (!options) options = {};
    if (!options.color) options.color = {};
    const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
    const width = options.width && options.width >= 21 ? options.width : undefined;
    const scale = options.scale || 4;
    return {
        width: width,
        scale: width ? 4 : scale,
        margin: margin,
        color: {
            dark: $f2919044dc264dac$var$hex2rgba(options.color.dark || "#000000ff"),
            light: $f2919044dc264dac$var$hex2rgba(options.color.light || "#ffffffff")
        },
        type: options.type,
        rendererOpts: options.rendererOpts || {}
    };
};
$f2919044dc264dac$export$5cdac61cf538712e = function getScale(qrSize, opts) {
    return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
};
$f2919044dc264dac$export$c3a1a1f268a8142b = function getImageWidth(qrSize, opts) {
    const scale = $f2919044dc264dac$export$5cdac61cf538712e(qrSize, opts);
    return Math.floor((qrSize + opts.margin * 2) * scale);
};
$f2919044dc264dac$export$83136f57c739c5f3 = function qrToImageData(imgData, qr, opts) {
    const size = qr.modules.size;
    const data = qr.modules.data;
    const scale = $f2919044dc264dac$export$5cdac61cf538712e(size, opts);
    const symbolSize = Math.floor((size + opts.margin * 2) * scale);
    const scaledMargin = opts.margin * scale;
    const palette = [
        opts.color.light,
        opts.color.dark
    ];
    for(let i = 0; i < symbolSize; i++)for(let j = 0; j < symbolSize; j++){
        let posDst = (i * symbolSize + j) * 4;
        let pxColor = opts.color.light;
        if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
            const iSrc = Math.floor((i - scaledMargin) / scale);
            const jSrc = Math.floor((j - scaledMargin) / scale);
            pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
        }
        imgData[posDst++] = pxColor.r;
        imgData[posDst++] = pxColor.g;
        imgData[posDst++] = pxColor.b;
        imgData[posDst] = pxColor.a;
    }
};

});


parcelRequire.register("2TmBX", function(module, exports) {

$parcel$export(module.exports, "render", () => $21b241eea669b8ea$export$b3890eb0ae9dca99, (v) => $21b241eea669b8ea$export$b3890eb0ae9dca99 = v);
var $21b241eea669b8ea$export$b3890eb0ae9dca99;

var $kPbAQ = parcelRequire("kPbAQ");
function $21b241eea669b8ea$var$getColorAttrib(color, attrib) {
    const alpha = color.a / 255;
    const str = attrib + '="' + color.hex + '"';
    return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
}
function $21b241eea669b8ea$var$svgCmd(cmd, x, y) {
    let str = cmd + x;
    if (typeof y !== "undefined") str += " " + y;
    return str;
}
function $21b241eea669b8ea$var$qrToPath(data, size, margin) {
    let path = "";
    let moveBy = 0;
    let newRow = false;
    let lineLength = 0;
    for(let i = 0; i < data.length; i++){
        const col = Math.floor(i % size);
        const row = Math.floor(i / size);
        if (!col && !newRow) newRow = true;
        if (data[i]) {
            lineLength++;
            if (!(i > 0 && col > 0 && data[i - 1])) {
                path += newRow ? $21b241eea669b8ea$var$svgCmd("M", col + margin, 0.5 + row + margin) : $21b241eea669b8ea$var$svgCmd("m", moveBy, 0);
                moveBy = 0;
                newRow = false;
            }
            if (!(col + 1 < size && data[i + 1])) {
                path += $21b241eea669b8ea$var$svgCmd("h", lineLength);
                lineLength = 0;
            }
        } else moveBy++;
    }
    return path;
}
$21b241eea669b8ea$export$b3890eb0ae9dca99 = function render(qrData, options, cb) {
    const opts = $kPbAQ.getOptions(options);
    const size = qrData.modules.size;
    const data = qrData.modules.data;
    const qrcodesize = size + opts.margin * 2;
    const bg = !opts.color.light.a ? "" : "<path " + $21b241eea669b8ea$var$getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
    const path = "<path " + $21b241eea669b8ea$var$getColorAttrib(opts.color.dark, "stroke") + ' d="' + $21b241eea669b8ea$var$qrToPath(data, size, opts.margin) + '"/>';
    const viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
    const width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
    const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + "</svg>\n";
    if (typeof cb === "function") cb(null, svgTag);
    return svgTag;
};

});




//# sourceMappingURL=dist.b3a32ba1.js.map
