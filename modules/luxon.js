/* eslint-disable linebreak-style */
/* eslint-disable func-names */
/* eslint-disable consistent-return */
/* eslint-disable default-case */
/* eslint-disable no-fallthrough */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-self-assign */
/* eslint-disable no-useless-escape */
/* eslint-disable no-loop-func */
/* eslint-disable block-scoped-var */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-func-assign */
/* eslint-disable no-plusplus */
/* eslint-disable no-class-assign */
/* eslint-disable eqeqeq */
/* eslint-disable vars-on-top */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-cond-assign */
/* eslint-disable no-void */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-multi-assign */
/* eslint-disable no-redeclare */
/* eslint-disable prefer-const */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable new-cap */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-var */
// eslint-disable-next-line max-classes-per-file
class e extends Error {} class z extends e {constructor(e) { super(`Invalid DateTime: ${e.toMessage()}`); }} class A extends e {constructor(e) { super(`Invalid Interval: ${e.toMessage()}`); }} class q extends e {constructor(e) { super(`Invalid Duration: ${e.toMessage()}`); }} class j extends e {} class _ extends e {constructor(e) { super(`Invalid unit ${e}`); }} class o extends e {} class r extends e {constructor() { super('Zone is an abstract class'); }} var t = 'numeric'; var n = 'short'; var s = 'long'; const U = { year: t, month: t, day: t }; const $ = { year: t, month: n, day: t }; const H = {
  year: t, month: n, day: t, weekday: n,
}; const W = { year: t, month: s, day: t }; const R = {
  year: t, month: s, day: t, weekday: s,
}; const J = { hour: t, minute: t }; const Y = { hour: t, minute: t, second: t }; const P = {
  hour: t, minute: t, second: t, timeZoneName: n,
}; const G = {
  hour: t, minute: t, second: t, timeZoneName: s,
}; const B = { hour: t, minute: t, hourCycle: 'h23' }; const Q = {
  hour: t, minute: t, second: t, hourCycle: 'h23',
}; const K = {
  hour: t, minute: t, second: t, hourCycle: 'h23', timeZoneName: n,
}; const X = {
  hour: t, minute: t, second: t, hourCycle: 'h23', timeZoneName: s,
}; const ee = {
  year: t, month: t, day: t, hour: t, minute: t,
}; const te = {
  year: t, month: t, day: t, hour: t, minute: t, second: t,
}; const re = {
  year: t, month: n, day: t, hour: t, minute: t,
}; const ne = {
  year: t, month: n, day: t, hour: t, minute: t, second: t,
}; const se = {
  year: t, month: n, day: t, weekday: n, hour: t, minute: t,
}; const ie = {
  year: t, month: s, day: t, hour: t, minute: t, timeZoneName: n,
}; const ae = {
  year: t, month: s, day: t, hour: t, minute: t, second: t, timeZoneName: n,
}; const oe = {
  year: t, month: s, day: t, weekday: s, hour: t, minute: t, timeZoneName: s,
}; const ue = {
  year: t, month: s, day: t, weekday: s, hour: t, minute: t, second: t, timeZoneName: s,
}; class i {
  get type() { throw new r(); }

  get name() { throw new r(); }

  get ianaName() { return this.name; }

  get isUniversal() { throw new r(); }

  offsetName(_e, _t) { throw new r(); }

  formatOffset(_e, _t) { throw new r(); }

  offset(_e) { throw new r(); }

  equals(_e) { throw new r(); }

  get isValid() { throw new r(); }
}let le = null; class ce extends i {
  static get instance() { return le = le === null ? new ce() : le; }

  get type() { return 'system'; }

  get name() { return (new Intl.DateTimeFormat()).resolvedOptions().timeZone; }

  get isUniversal() { return !1; }

  offsetName(e, { format: t, locale: r }) { return st(e, t, r); }

  formatOffset(e, t) { return ut(this.offset(e), t); }

  offset(e) { return -new Date(e).getTimezoneOffset(); }

  equals(e) { return e.type === 'system'; }

  get isValid() { return !0; }
}let he = {}; function de(e) {
  return he[e] || (he[e] = new Intl.DateTimeFormat('en-US', {
    hour12: !1, timeZone: e, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', era: 'short',
  })), he[e];
} const me = {
  year: 0, month: 1, day: 2, era: 3, hour: 4, minute: 5, second: 6,
}; function fe(e, t) { var e = e.format(t).replace(/\u200E/g, ''); var [, t, e, r, n, s, i, a] = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(e); return [r, t, e, n, s, i, a]; } function ye(e, t) { const r = e.formatToParts(t); const n = []; for (let e = 0; e < r.length; e++) { const { type: s, value: i } = r[e]; const a = me[s]; s === 'era' ? n[a] = i : w(a) || (n[a] = parseInt(i, 10)); } return n; }let ge = {}; class u extends i {
  static create(e) { return ge[e] || (ge[e] = new u(e)), ge[e]; }

  static resetCache() { ge = {}, he = {}; }

  static isValidSpecifier(e) { return this.isValidZone(e); }

  static isValidZone(e) { if (!e) return !1; try { return new Intl.DateTimeFormat('en-US', { timeZone: e }).format(), !0; } catch (e) { return !1; } }

  constructor(e) { super(), this.zoneName = e, this.valid = u.isValidZone(e); }

  get type() { return 'iana'; }

  get name() { return this.zoneName; }

  get isUniversal() { return !1; }

  offsetName(e, { format: t, locale: r }) { return st(e, t, r, this.name); }

  formatOffset(e, t) { return ut(this.offset(e), t); }

  offset(e) {
    e = new Date(e); if (isNaN(e)) return NaN; let t = de(this.name); let[r, n, s, i, a, o, u] = (t.formatToParts ? ye : fe)(t, e); t = +e, e = t % 1e3; return (tt({
      year: r = i === 'BC' ? 1 - Math.abs(r) : r, month: n, day: s, hour: a === 24 ? 0 : a, minute: o, second: u, millisecond: 0,
    }) - (t -= e >= 0 ? e : 1e3 + e)) / 6e4;
  }

  equals(e) { return e.type === 'iana' && e.name === this.name; }

  get isValid() { return this.valid; }
} const ve = {}; function we(e, t = {}) { const r = JSON.stringify([e, t]); let n = ve[r]; return n || (n = new Intl.ListFormat(e, t), ve[r] = n), n; }let pe = {}; function Te(e, t = {}) { const r = JSON.stringify([e, t]); let n = pe[r]; return n || (n = new Intl.DateTimeFormat(e, t), pe[r] = n), n; }let Se = {}; function Oe(e, t = {}) { const r = JSON.stringify([e, t]); let n = Se[r]; return n || (n = new Intl.NumberFormat(e, t), Se[r] = n), n; }let be = {}; function ke(e, t = {}) { const { base: r, ...n } = t; const s = JSON.stringify([e, n]); let i = be[s]; return i || (i = new Intl.RelativeTimeFormat(e, t), be[s] = i), i; }let Ne = null; function Me() { return Ne = Ne || (new Intl.DateTimeFormat()).resolvedOptions().locale; } function De(n) { var s = n.indexOf('-x-'); var s = (n = s !== -1 ? n.substring(0, s) : n).indexOf('-u-'); if (s === -1) return [n]; { let t; let r; try { t = Te(n).resolvedOptions(), r = n; } catch (e) { n = n.substring(0, s); t = Te(n).resolvedOptions(), r = n; } var { numberingSystem: s, calendar: n } = t; return [r, s, n]; } } function Ee(e, t, r) { return (r || t) && (e.includes('-u-') || (e += '-u'), r && (e += `-ca-${r}`), t) && (e += `-nu-${t}`), e; } function Ve(t) { const r = []; for (let e = 1; e <= 12; e++) { const n = L.utc(2016, e, 1); r.push(t(n)); } return r; } function xe(t) { const r = []; for (let e = 1; e <= 7; e++) { const n = L.utc(2016, 11, 13 + e); r.push(t(n)); } return r; } function Ie(e, t, r, n, s) { e = e.listingMode(r); return e === 'error' ? null : (e === 'en' ? n : s)(t); } function Ce(e) { return (!e.numberingSystem || e.numberingSystem === 'latn') && (e.numberingSystem === 'latn' || !e.locale || e.locale.startsWith('en') || new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem === 'latn'); } class Ze {
  constructor(e, t, r) { this.padTo = r.padTo || 0, this.floor = r.floor || !1; const { padTo: n, floor: s, ...i } = r; (!t || Object.keys(i).length > 0) && (t = { useGrouping: !1, ...r }, r.padTo > 0 && (t.minimumIntegerDigits = r.padTo), this.inf = Oe(e, t)); }

  format(e) { let t; return this.inf ? (t = this.floor ? Math.floor(e) : e, this.inf.format(t)) : m(this.floor ? Math.floor(e) : Qe(e, 3), this.padTo); }
} class Fe {
  constructor(e, t, r) { this.opts = r; let n = this.originalZone = void 0; this.opts.timeZone ? this.dt = e : e.zone.type === 'fixed' ? (r = (r = e.offset / 60 * -1) >= 0 ? `Etc/GMT+${r}` : `Etc/GMT${r}`, e.offset !== 0 && u.create(r).valid ? (n = r, this.dt = e) : (n = 'UTC', this.dt = e.offset === 0 ? e : e.setZone('UTC').plus({ minutes: e.offset }), this.originalZone = e.zone)) : e.zone.type === 'system' ? this.dt = e : e.zone.type === 'iana' ? (this.dt = e, n = e.zone.name) : (n = 'UTC', this.dt = e.setZone('UTC').plus({ minutes: e.offset }), this.originalZone = e.zone); r = { ...this.opts }; r.timeZone = r.timeZone || n, this.dtf = Te(t, r); }

  format() { return this.originalZone ? this.formatToParts().map(({ value: e }) => e).join('') : this.dtf.format(this.dt.toJSDate()); }

  formatToParts() { const e = this.dtf.formatToParts(this.dt.toJSDate()); return this.originalZone ? e.map((e) => { let t; return e.type === 'timeZoneName' ? (t = this.originalZone.offsetName(this.dt.ts, { locale: this.dt.locale, format: this.opts.timeZoneName }), { ...e, value: t }) : e; }) : e; }

  resolvedOptions() { return this.dtf.resolvedOptions(); }
} class Le {
  constructor(e, t, r) { this.opts = { style: 'long', ...r }, !t && Ye() && (this.rtf = ke(e, r)); }

  format(e, t) { return this.rtf ? this.rtf.format(e, t) : Dt(t, e, this.opts.numeric, this.opts.style !== 'long'); }

  formatToParts(e, t) { return this.rtf ? this.rtf.formatToParts(e, t) : []; }
} class y {
  static fromOpts(e) { return y.create(e.locale, e.numberingSystem, e.outputCalendar, e.defaultToEN); }

  static create(e, t, r, n = !1) { e = e || v.defaultLocale, n = e || (n ? 'en-US' : Me()), t = t || v.defaultNumberingSystem, r = r || v.defaultOutputCalendar; return new y(n, t, r, e); }

  static resetCache() { Ne = null, pe = {}, Se = {}, be = {}; }

  static fromObject({ locale: e, numberingSystem: t, outputCalendar: r } = {}) { return y.create(e, t, r); }

  constructor(e, t, r, n) { var [e, s, i] = De(e); this.locale = e, this.numberingSystem = t || s || null, this.outputCalendar = r || i || null, this.intl = Ee(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = n, this.fastNumbersCached = null; }

  get fastNumbers() { return this.fastNumbersCached == null && (this.fastNumbersCached = Ce(this)), this.fastNumbersCached; }

  listingMode() { const e = this.isEnglish(); const t = !(this.numberingSystem !== null && this.numberingSystem !== 'latn' || this.outputCalendar !== null && this.outputCalendar !== 'gregory'); return e && t ? 'en' : 'intl'; }

  clone(e) { return e && Object.getOwnPropertyNames(e).length !== 0 ? y.create(e.locale || this.specifiedLocale, e.numberingSystem || this.numberingSystem, e.outputCalendar || this.outputCalendar, e.defaultToEN || !1) : this; }

  redefaultToEN(e = {}) { return this.clone({ ...e, defaultToEN: !0 }); }

  redefaultToSystem(e = {}) { return this.clone({ ...e, defaultToEN: !1 }); }

  months(r, n = !1, e = !0) { return Ie(this, r, e, mt, () => { const t = n ? { month: r, day: 'numeric' } : { month: r }; const e = n ? 'format' : 'standalone'; return this.monthsCache[e][r] || (this.monthsCache[e][r] = Ve((e) => this.extract(e, t, 'month'))), this.monthsCache[e][r]; }); }

  weekdays(r, n = !1, e = !0) {
    return Ie(this, r, e, vt, () => {
      const t = n ? {
        weekday: r, year: 'numeric', month: 'long', day: 'numeric',
      } : { weekday: r }; const e = n ? 'format' : 'standalone'; return this.weekdaysCache[e][r] || (this.weekdaysCache[e][r] = xe((e) => this.extract(e, t, 'weekday'))), this.weekdaysCache[e][r];
    });
  }

  meridiems(e = !0) { return Ie(this, void 0, e, () => wt, () => { if (!this.meridiemCache) { const t = { hour: 'numeric', hourCycle: 'h12' }; this.meridiemCache = [L.utc(2016, 11, 13, 9), L.utc(2016, 11, 13, 19)].map((e) => this.extract(e, t, 'dayperiod')); } return this.meridiemCache; }); }

  eras(e, t = !0) { return Ie(this, e, t, Ot, () => { const t = { era: e }; return this.eraCache[e] || (this.eraCache[e] = [L.utc(-40, 1, 1), L.utc(2017, 1, 1)].map((e) => this.extract(e, t, 'era'))), this.eraCache[e]; }); }

  extract(e, t, r) { e = this.dtFormatter(e, t).formatToParts().find((e) => e.type.toLowerCase() === r); return e ? e.value : null; }

  numberFormatter(e = {}) { return new Ze(this.intl, e.forceSimple || this.fastNumbers, e); }

  dtFormatter(e, t = {}) { return new Fe(e, this.intl, t); }

  relFormatter(e = {}) { return new Le(this.intl, this.isEnglish(), e); }

  listFormatter(e = {}) { return we(this.intl, e); }

  isEnglish() { return this.locale === 'en' || this.locale.toLowerCase() === 'en-us' || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith('en-us'); }

  equals(e) { return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar; }
}let ze = null; class d extends i {
  static get utcInstance() { return ze = ze === null ? new d(0) : ze; }

  static instance(e) { return e === 0 ? d.utcInstance : new d(e); }

  static parseSpecifier(e) { if (e) { e = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i); if (e) return new d(it(e[1], e[2])); } return null; }

  constructor(e) { super(), this.fixed = e; }

  get type() { return 'fixed'; }

  get name() { return this.fixed === 0 ? 'UTC' : `UTC${ut(this.fixed, 'narrow')}`; }

  get ianaName() { return this.fixed === 0 ? 'Etc/UTC' : `Etc/GMT${ut(-this.fixed, 'narrow')}`; }

  offsetName() { return this.name; }

  formatOffset(_e, t) { return ut(this.fixed, t); }

  get isUniversal() { return !0; }

  offset() { return this.fixed; }

  equals(e) { return e.type === 'fixed' && e.fixed === this.fixed; }

  get isValid() { return !0; }
} class Ae extends i {
  constructor(e) { super(), this.zoneName = e; }

  get type() { return 'invalid'; }

  get name() { return this.zoneName; }

  get isUniversal() { return !1; }

  offsetName() { return null; }

  formatOffset() { return ''; }

  offset() { return NaN; }

  equals() { return !1; }

  get isValid() { return !1; }
} function g(e, t) { let r; return w(e) || e === null ? t : e instanceof i ? e : typeof e === 'string' ? (r = e.toLowerCase()) === 'default' ? t : r === 'local' || r === 'system' ? ce.instance : r === 'utc' || r === 'gmt' ? d.utcInstance : d.parseSpecifier(r) || u.create(e) : c(e) ? d.instance(e) : typeof e === 'object' && e.offset && typeof e.offset === 'number' ? e : new Ae(e); }let qe = () => Date.now(); let je = 'system'; let _e = null; let Ue = null; let $e = null; let He = 60; let We; class v {
  static get now() { return qe; }

  static set now(e) { qe = e; }

  static set defaultZone(e) { je = e; }

  static get defaultZone() { return g(je, ce.instance); }

  static get defaultLocale() { return _e; }

  static set defaultLocale(e) { _e = e; }

  static get defaultNumberingSystem() { return Ue; }

  static set defaultNumberingSystem(e) { Ue = e; }

  static get defaultOutputCalendar() { return $e; }

  static set defaultOutputCalendar(e) { $e = e; }

  static get twoDigitCutoffYear() { return He; }

  static set twoDigitCutoffYear(e) { He = e % 100; }

  static get throwOnInvalid() { return We; }

  static set throwOnInvalid(e) { We = e; }

  static resetCaches() { y.resetCache(), u.resetCache(); }
} function w(e) { return void 0 === e; } function c(e) { return typeof e === 'number'; } function Re(e) { return typeof e === 'number' && e % 1 == 0; } function Je(e) { return Object.prototype.toString.call(e) === '[object Date]'; } function Ye() { try { return typeof Intl !== 'undefined' && !!Intl.RelativeTimeFormat; } catch (e) { return !1; } } function Pe(e) { return Array.isArray(e) ? e : [e]; } function Ge(e, r, n) { if (e.length !== 0) return e.reduce((e, t) => { t = [r(t), t]; return e && n(e[0], t[0]) === e[0] ? e : t; }, null)[1]; } function l(e, t) { return Object.prototype.hasOwnProperty.call(e, t); } function h(e, t, r) { return Re(e) && t <= e && e <= r; } function m(e, t = 2) { return r = e < 0 ? `-${(`${-e}`).padStart(t, '0')}` : (`${e}`).padStart(t, '0'); } function f(e) { if (!w(e) && e !== null && e !== '') return parseInt(e, 10); } function p(e) { if (!w(e) && e !== null && e !== '') return parseFloat(e); } function Be(e) { if (!w(e) && e !== null && e !== '') return e = 1e3 * parseFloat(`0.${e}`), Math.floor(e); } function Qe(e, t, r = !1) { t = 10 ** t; return (r ? Math.trunc : Math.round)(e * t) / t; } function Ke(e) { return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0); } function Xe(e) { return Ke(e) ? 366 : 365; } function et(e, t) { let r; var n = (n = t - 1) - (r = 12) * Math.floor(n / r) + 1; return n == 2 ? Ke(e + (t - n) / 12) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1]; } function tt(e) { let t = Date.UTC(e.year, e.month - 1, e.day, e.hour, e.minute, e.second, e.millisecond); return e.year < 100 && e.year >= 0 && (t = new Date(t)).setUTCFullYear(e.year, e.month - 1, e.day), +t; } function rt(e) { const t = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7; var e = e - 1; var e = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7; return t == 4 || e == 3 ? 53 : 52; } function nt(e) { return e > 99 ? e : e > v.twoDigitCutoffYear ? 1900 + e : 2e3 + e; } function st(e, t, r, n = null) {
  var e = new Date(e); const s = {
    hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit',
  }; var n = (n && (s.timeZone = n), { timeZoneName: t, ...s }); var t = new Intl.DateTimeFormat(r, n).formatToParts(e).find((e) => e.type.toLowerCase() === 'timezonename'); return t ? t.value : null;
} function it(e, t) { let r = parseInt(e, 10); Number.isNaN(r) && (r = 0); e = parseInt(t, 10) || 0, t = r < 0 || Object.is(r, -0) ? -e : e; return 60 * r + t; } function at(e) { const t = Number(e); if (typeof e === 'boolean' || e === '' || Number.isNaN(t)) throw new o(`Invalid unit value ${e}`); return t; } function ot(e, t) { let r; const n = {}; for (const s in e)l(e, s) && (r = e[s]) != null && (n[t(s)] = at(r)); return n; } function ut(e, t) { const r = Math.trunc(Math.abs(e / 60)); const n = Math.trunc(Math.abs(e % 60)); const s = e >= 0 ? '+' : '-'; switch (t) { case 'short': return `${s + m(r, 2)}:${m(n, 2)}`; case 'narrow': return s + r + (n > 0 ? `:${n}` : ''); case 'techie': return s + m(r, 2) + m(n, 2); default: throw new RangeError(`Value format ${t} is out of range for property format`); } } function lt(e) { return r = e, ['hour', 'minute', 'second', 'millisecond'].reduce((e, t) => (e[t] = r[t], e), {}); } const ct = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; const ht = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; const dt = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']; function mt(e) { switch (e) { case 'narrow': return [...dt]; case 'short': return [...ht]; case 'long': return [...ct]; case 'numeric': return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']; case '2-digit': return ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']; default: return null; } } const ft = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; const yt = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; const gt = ['M', 'T', 'W', 'T', 'F', 'S', 'S']; function vt(e) { switch (e) { case 'narrow': return [...gt]; case 'short': return [...yt]; case 'long': return [...ft]; case 'numeric': return ['1', '2', '3', '4', '5', '6', '7']; default: return null; } } const wt = ['AM', 'PM']; const pt = ['Before Christ', 'Anno Domini']; const Tt = ['BC', 'AD']; const St = ['B', 'A']; function Ot(e) { switch (e) { case 'narrow': return [...St]; case 'short': return [...Tt]; case 'long': return [...pt]; default: return null; } } function bt(e) { return wt[e.hour < 12 ? 0 : 1]; } function kt(e, t) { return vt(t)[e.weekday - 1]; } function Nt(e, t) { return mt(t)[e.month - 1]; } function Mt(e, t) { return Ot(t)[e.year < 0 ? 0 : 1]; } function Dt(e, t, r = 'always', n = !1) {
  const s = {
    years: ['year', 'yr.'], quarters: ['quarter', 'qtr.'], months: ['month', 'mo.'], weeks: ['week', 'wk.'], days: ['day', 'day', 'days'], hours: ['hour', 'hr.'], minutes: ['minute', 'min.'], seconds: ['second', 'sec.'],
  }; var i = ['hours', 'minutes', 'seconds'].indexOf(e) === -1; if (r === 'auto' && i) { const a = e === 'days'; switch (t) { case 1: return a ? 'tomorrow' : `next ${s[e][0]}`; case -1: return a ? 'yesterday' : `last ${s[e][0]}`; case 0: return a ? 'today' : `this ${s[e][0]}`; } } var r = Object.is(t, -0) || t < 0; var i = Math.abs(t); var t = i === 1; const o = s[e]; var n = n ? !t && o[2] || o[1] : t ? s[e][0] : e; return r ? `${i} ${n} ago` : `in ${i} ${n}`;
} function Et(e, t) { let r = ''; for (const n of e)n.literal ? r += n.val : r += t(n.val); return r; } const Vt = {
  D: U, DD: $, DDD: W, DDDD: R, t: J, tt: Y, ttt: P, tttt: G, T: B, TT: Q, TTT: K, TTTT: X, f: ee, ff: re, fff: ie, ffff: oe, F: te, FF: ne, FFF: ae, FFFF: ue,
}; class T {
  static create(e, t = {}) { return new T(e, t); }

  static parseFormat(t) { let r = null; let n = ''; let s = !1; const i = []; for (let e = 0; e < t.length; e++) { const a = t.charAt(e); a === "'" ? (n.length > 0 && i.push({ literal: s || /^\s+$/.test(n), val: n }), r = null, n = '', s = !s) : s || a === r ? n += a : (n.length > 0 && i.push({ literal: /^\s+$/.test(n), val: n }), n = a, r = a); } return n.length > 0 && i.push({ literal: s || /^\s+$/.test(n), val: n }), i; }

  static macroTokenToFormatOpts(e) { return Vt[e]; }

  constructor(e, t) { this.opts = t, this.loc = e, this.systemLoc = null; }

  formatWithSystemDefault(e, t) { return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e, { ...this.opts, ...t }).format(); }

  formatDateTime(e, t = {}) { return this.loc.dtFormatter(e, { ...this.opts, ...t }).format(); }

  formatDateTimeParts(e, t = {}) { return this.loc.dtFormatter(e, { ...this.opts, ...t }).formatToParts(); }

  formatInterval(e, t = {}) { return this.loc.dtFormatter(e.start, { ...this.opts, ...t }).dtf.formatRange(e.start.toJSDate(), e.end.toJSDate()); }

  resolvedOptions(e, t = {}) { return this.loc.dtFormatter(e, { ...this.opts, ...t }).resolvedOptions(); }

  num(e, t = 0) { let r; return this.opts.forceSimple ? m(e, t) : (r = { ...this.opts }, t > 0 && (r.padTo = t), this.loc.numberFormatter(r).format(e)); }

  formatDateTimeFromString(r, e) { const n = this.loc.listingMode() === 'en'; const t = this.loc.outputCalendar && this.loc.outputCalendar !== 'gregory'; const s = (e, t) => this.loc.extract(r, e, t); const i = (e) => (r.isOffsetFixed && r.offset === 0 && e.allowZ ? 'Z' : r.isValid ? r.zone.formatOffset(r.ts, e.format) : ''); const a = () => (n ? bt(r) : s({ hour: 'numeric', hourCycle: 'h12' }, 'dayperiod')); const o = (e, t) => (n ? Nt(r, e) : s(t ? { month: e } : { month: e, day: 'numeric' }, 'month')); const u = (e, t) => (n ? kt(r, e) : s(t ? { weekday: e } : { weekday: e, month: 'long', day: 'numeric' }, 'weekday')); const l = (e) => { const t = T.macroTokenToFormatOpts(e); return t ? this.formatWithSystemDefault(r, t) : e; }; const c = (e) => (n ? Mt(r, e) : s({ era: e }, 'era')); return Et(T.parseFormat(e), (e) => { switch (e) { case 'S': return this.num(r.millisecond); case 'u': case 'SSS': return this.num(r.millisecond, 3); case 's': return this.num(r.second); case 'ss': return this.num(r.second, 2); case 'uu': return this.num(Math.floor(r.millisecond / 10), 2); case 'uuu': return this.num(Math.floor(r.millisecond / 100)); case 'm': return this.num(r.minute); case 'mm': return this.num(r.minute, 2); case 'h': return this.num(r.hour % 12 == 0 ? 12 : r.hour % 12); case 'hh': return this.num(r.hour % 12 == 0 ? 12 : r.hour % 12, 2); case 'H': return this.num(r.hour); case 'HH': return this.num(r.hour, 2); case 'Z': return i({ format: 'narrow', allowZ: this.opts.allowZ }); case 'ZZ': return i({ format: 'short', allowZ: this.opts.allowZ }); case 'ZZZ': return i({ format: 'techie', allowZ: this.opts.allowZ }); case 'ZZZZ': return r.zone.offsetName(r.ts, { format: 'short', locale: this.loc.locale }); case 'ZZZZZ': return r.zone.offsetName(r.ts, { format: 'long', locale: this.loc.locale }); case 'z': return r.zoneName; case 'a': return a(); case 'd': return t ? s({ day: 'numeric' }, 'day') : this.num(r.day); case 'dd': return t ? s({ day: '2-digit' }, 'day') : this.num(r.day, 2); case 'c': return this.num(r.weekday); case 'ccc': return u('short', !0); case 'cccc': return u('long', !0); case 'ccccc': return u('narrow', !0); case 'E': return this.num(r.weekday); case 'EEE': return u('short', !1); case 'EEEE': return u('long', !1); case 'EEEEE': return u('narrow', !1); case 'L': return t ? s({ month: 'numeric', day: 'numeric' }, 'month') : this.num(r.month); case 'LL': return t ? s({ month: '2-digit', day: 'numeric' }, 'month') : this.num(r.month, 2); case 'LLL': return o('short', !0); case 'LLLL': return o('long', !0); case 'LLLLL': return o('narrow', !0); case 'M': return t ? s({ month: 'numeric' }, 'month') : this.num(r.month); case 'MM': return t ? s({ month: '2-digit' }, 'month') : this.num(r.month, 2); case 'MMM': return o('short', !1); case 'MMMM': return o('long', !1); case 'MMMMM': return o('narrow', !1); case 'y': return t ? s({ year: 'numeric' }, 'year') : this.num(r.year); case 'yy': return t ? s({ year: '2-digit' }, 'year') : this.num(r.year.toString().slice(-2), 2); case 'yyyy': return t ? s({ year: 'numeric' }, 'year') : this.num(r.year, 4); case 'yyyyyy': return t ? s({ year: 'numeric' }, 'year') : this.num(r.year, 6); case 'G': return c('short'); case 'GG': return c('long'); case 'GGGGG': return c('narrow'); case 'kk': return this.num(r.weekYear.toString().slice(-2), 2); case 'kkkk': return this.num(r.weekYear, 4); case 'W': return this.num(r.weekNumber); case 'WW': return this.num(r.weekNumber, 2); case 'o': return this.num(r.ordinal); case 'ooo': return this.num(r.ordinal, 3); case 'q': return this.num(r.quarter); case 'qq': return this.num(r.quarter, 2); case 'X': return this.num(Math.floor(r.ts / 1e3)); case 'x': return this.num(r.ts); default: return l(e); } }); }

  formatDurationFromString(e, t) { const r = (e) => { switch (e[0]) { case 'S': return 'millisecond'; case 's': return 'second'; case 'm': return 'minute'; case 'h': return 'hour'; case 'd': return 'day'; case 'w': return 'week'; case 'M': return 'month'; case 'y': return 'year'; default: return null; } }; const n = T.parseFormat(t); const s = n.reduce((e, { literal: t, val: r }) => (t ? e : e.concat(r)), []); const i = e.shiftTo(...s.map(r).filter((e) => e)); return Et(n, (a = i, (e) => { const t = r(e); return t ? this.num(a.get(t), e.length) : e; })); }
} class S {
  constructor(e, t) { this.reason = e, this.explanation = t; }

  toMessage() { return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason; }
}n = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/; function a(...e) { e = e.reduce((e, t) => e + t.source, ''); return RegExp(`^${e}$`); } function O(...e) { return (i) => e.reduce(([e, t, r], n) => { var [n, r, s] = n(i, r); return [{ ...e, ...n }, r || t, s]; }, [{}, null, 1]).slice(0, 2); } function b(e, ...t) { if (e != null) for (let[r, n] of t) { r = r.exec(e); if (r) return n(r); } return [null, null]; } function xt(...s) { return (e, t) => { const r = {}; let n; for (n = 0; n < s.length; n++)r[s[n]] = f(e[t + n]); return [r, null, t + n]; }; } var t = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/; var s = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/; const It = RegExp(`${s.source}(?:${t.source}?(?:\\[(${n.source})\\])?)?`); const Ct = RegExp(`(?:T${It.source})?`); const Zt = xt('weekYear', 'weekNumber', 'weekDay'); const Ft = xt('year', 'ordinal'); var t = RegExp(`${s.source} ?(?:${t.source}|(${n.source}))?`); var n = RegExp(`(?: ${t.source})?`); function k(e, t, r) { e = e[t]; return w(e) ? r : f(e); } function N(e, t) {
  return [{
    hours: k(e, t, 0), minutes: k(e, t + 1, 0), seconds: k(e, t + 2, 0), milliseconds: Be(e[t + 3]),
  }, null, t + 4];
} function Lt(e, t) { const r = !e[t] && !e[t + 1]; var e = it(e[t + 1], e[t + 2]); return [{}, r ? null : d.instance(e), t + 3]; } function zt(e, t) { return [{}, e[t] ? u.create(e[t]) : null, t + 1]; } const At = RegExp(`^T?${s.source}$`); const qt = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/; function jt(e) {
  var [e, t, r, n, s, i, a, o, u] = e; const l = e[0] === '-'; var e = o && o[0] === '-'; const c = (e, t = !1) => (void 0 !== e && (t || e && l) ? -e : e); return [{
    years: c(p(t)), months: c(p(r)), weeks: c(p(n)), days: c(p(s)), hours: c(p(i)), minutes: c(p(a)), seconds: c(p(o), o === '-0'), milliseconds: c(Be(u), e),
  }];
} const _t = {
  GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480,
}; function Ut(e, t, r, n, s, i, a) {
  t = {
    year: t.length === 2 ? nt(f(t)) : f(t), month: ht.indexOf(r) + 1, day: f(n), hour: f(s), minute: f(i),
  }; return a && (t.second = f(a)), e && (t.weekday = e.length > 3 ? ft.indexOf(e) + 1 : yt.indexOf(e) + 1), t;
} const $t = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/; function Ht(e) { var [, e, t, r, n, s, i, a, o, u, l, c] = e; var e = Ut(e, n, r, t, s, i, a); let h; return h = o ? _t[o] : u ? 0 : it(l, c), [e, new d(h)]; } const Wt = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/; const Rt = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/; const Jt = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/; function Yt(e) { var [, e, t, r, n, s, i, a] = e; return [Ut(e, n, r, t, s, i, a), d.utcInstance]; } function Pt(e) { var [, e, t, r, n, s, i, a] = e; return [Ut(e, a, t, r, n, s, i), d.utcInstance]; } const Gt = a(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, Ct); const Bt = a(/(\d{4})-?W(\d\d)(?:-?(\d))?/, Ct); const Qt = a(/(\d{4})-?(\d{3})/, Ct); const Kt = a(It); const Xt = O((e, t) => [{ year: k(e, t), month: k(e, t + 1, 1), day: k(e, t + 2, 1) }, null, t + 3], N, Lt, zt); const er = O(Zt, N, Lt, zt); const tr = O(Ft, N, Lt, zt); const rr = O(N, Lt, zt); function nr(e) { return b(e, [Gt, Xt], [Bt, er], [Qt, tr], [Kt, rr]); } function sr(e) { return b(e.replace(/\([^()]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').trim(), [$t, Ht]); } function ir(e) { return b(e, [Wt, Yt], [Rt, Yt], [Jt, Pt]); } function ar(e) { return b(e, [qt, jt]); } const or = O(N); function ur(e) { return b(e, [At, or]); } const lr = a(/(\d{4})-(\d\d)-(\d\d)/, n); const cr = a(t); const hr = O(N, Lt, zt); function dr(e) { return b(e, [lr, Xt], [cr, hr]); } const mr = {
  weeks: {
    days: 7, hours: 168, minutes: 10080, seconds: 604800, milliseconds: 6048e5,
  },
  days: {
    hours: 24, minutes: 1440, seconds: 86400, milliseconds: 864e5,
  },
  hours: { minutes: 60, seconds: 3600, milliseconds: 36e5 },
  minutes: { seconds: 60, milliseconds: 6e4 },
  seconds: { milliseconds: 1e3 },
}; const fr = {
  years: {
    quarters: 4, months: 12, weeks: 52, days: 365, hours: 8760, minutes: 525600, seconds: 31536e3, milliseconds: 31536e6,
  },
  quarters: {
    months: 3, weeks: 13, days: 91, hours: 2184, minutes: 131040, seconds: 7862400, milliseconds: 78624e5,
  },
  months: {
    weeks: 4, days: 30, hours: 720, minutes: 43200, seconds: 2592e3, milliseconds: 2592e6,
  },
  ...mr,
}; const M = 365.2425; const yr = 30.436875; const gr = {
  years: {
    quarters: 4, months: 12, weeks: M / 7, days: M, hours: 24 * M, minutes: 525949.2, seconds: 525949.2 * 60, milliseconds: 525949.2 * 60 * 1e3,
  },
  quarters: {
    months: 3, weeks: M / 28, days: M / 4, hours: 24 * M / 4, minutes: 131487.3, seconds: 525949.2 * 60 / 4, milliseconds: 7889237999.999999,
  },
  months: {
    weeks: yr / 7, days: yr, hours: 24 * yr, minutes: 43829.1, seconds: 2629746, milliseconds: 2629746e3,
  },
  ...mr,
}; const D = ['years', 'quarters', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds', 'milliseconds']; const vr = D.slice(0).reverse(); function E(e, t, r = !1) {
  r = {
    values: r ? t.values : { ...e.values, ...t.values || {} }, loc: e.loc.clone(t.loc), conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy, matrix: t.matrix || e.matrix,
  }; return new V(r);
} function wr(e, t, r, n, s) { var e = e[s][r]; const i = t[r] / e; var a = !(Math.sign(i) === Math.sign(n[s])) && n[s] !== 0 && Math.abs(i) <= 1 ? (a = i) < 0 ? Math.floor(a) : Math.ceil(a) : Math.trunc(i); n[s] += a, t[r] -= a * e; } function pr(r, n) { vr.reduce((e, t) => (w(n[t]) ? e : (e && wr(r, n, e, n, t), t)), null); } function Tr(e) { let t; let r; const n = {}; for ([t, r] of Object.entries(e))r !== 0 && (n[t] = r); return n; } class V {
  constructor(e) { const t = e.conversionAccuracy === 'longterm' || !1; let r = t ? gr : fr; e.matrix && (r = e.matrix), this.values = e.values, this.loc = e.loc || y.create(), this.conversionAccuracy = t ? 'longterm' : 'casual', this.invalid = e.invalid || null, this.matrix = r, this.isLuxonDuration = !0; }

  static fromMillis(e, t) { return V.fromObject({ milliseconds: e }, t); }

  static fromObject(e, t = {}) {
    if (e == null || typeof e !== 'object') throw new o(`Duration.fromObject: argument expected to be an object, got ${e === null ? 'null' : typeof e}`); return new V({
      values: ot(e, V.normalizeUnit), loc: y.fromObject(t), conversionAccuracy: t.conversionAccuracy, matrix: t.matrix,
    });
  }

  static fromDurationLike(e) { if (c(e)) return V.fromMillis(e); if (V.isDuration(e)) return e; if (typeof e === 'object') return V.fromObject(e); throw new o(`Unknown duration argument ${e} of type ${typeof e}`); }

  static fromISO(e, t) { const [r] = ar(e); return r ? V.fromObject(r, t) : V.invalid('unparsable', `the input "${e}" can't be parsed as ISO 8601`); }

  static fromISOTime(e, t) { const [r] = ur(e); return r ? V.fromObject(r, t) : V.invalid('unparsable', `the input "${e}" can't be parsed as ISO 8601`); }

  static invalid(e, t = null) { if (!e) throw new o('need to specify a reason the Duration is invalid'); e = e instanceof S ? e : new S(e, t); if (v.throwOnInvalid) throw new q(e); return new V({ invalid: e }); }

  static normalizeUnit(e) {
    const t = {
      year: 'years', years: 'years', quarter: 'quarters', quarters: 'quarters', month: 'months', months: 'months', week: 'weeks', weeks: 'weeks', day: 'days', days: 'days', hour: 'hours', hours: 'hours', minute: 'minutes', minutes: 'minutes', second: 'seconds', seconds: 'seconds', millisecond: 'milliseconds', milliseconds: 'milliseconds',
    }[e && e.toLowerCase()]; if (t) return t; throw new _(e);
  }

  static isDuration(e) { return e && e.isLuxonDuration || !1; }

  get locale() { return this.isValid ? this.loc.locale : null; }

  get numberingSystem() { return this.isValid ? this.loc.numberingSystem : null; }

  toFormat(e, t = {}) { t = { ...t, floor: !1 !== t.round && !1 !== t.floor }; return this.isValid ? T.create(this.loc, t).formatDurationFromString(this, e) : 'Invalid Duration'; }

  toHuman(r = {}) {
    const e = D.map((e) => {
      const t = this.values[e]; return w(t) ? null : this.loc.numberFormatter({
        style: 'unit', unitDisplay: 'long', ...r, unit: e.slice(0, -1),
      }).format(t);
    }).filter((e) => e); return this.loc.listFormatter({ type: 'conjunction', style: r.listStyle || 'narrow', ...r }).format(e);
  }

  toObject() { return this.isValid ? { ...this.values } : {}; }

  toISO() { if (!this.isValid) return null; let e = 'P'; return this.years !== 0 && (e += `${this.years}Y`), this.months === 0 && this.quarters === 0 || (e += `${this.months + 3 * this.quarters}M`), this.weeks !== 0 && (e += `${this.weeks}W`), this.days !== 0 && (e += `${this.days}D`), this.hours === 0 && this.minutes === 0 && this.seconds === 0 && this.milliseconds === 0 || (e += 'T'), this.hours !== 0 && (e += `${this.hours}H`), this.minutes !== 0 && (e += `${this.minutes}M`), this.seconds === 0 && this.milliseconds === 0 || (e += `${Qe(this.seconds + this.milliseconds / 1e3, 3)}S`), e === 'P' && (e += 'T0S'), e; }

  toISOTime(e = {}) {
    if (!this.isValid) return null; let t = this.toMillis(); if (t < 0 || t >= 864e5) return null; e = {
      suppressMilliseconds: !1, suppressSeconds: !1, includePrefix: !1, format: 'extended', ...e,
    }; t = this.shiftTo('hours', 'minutes', 'seconds', 'milliseconds'); let r = e.format === 'basic' ? 'hhmm' : 'hh:mm'; let n = (e.suppressSeconds && t.seconds === 0 && t.milliseconds === 0 || (r += e.format === 'basic' ? 'ss' : ':ss', e.suppressMilliseconds && t.milliseconds === 0) || (r += '.SSS'), t.toFormat(r)); return n = e.includePrefix ? `T${n}` : n;
  }

  toJSON() { return this.toISO(); }

  toString() { return this.toISO(); }

  toMillis() { return this.as('milliseconds'); }

  valueOf() { return this.toMillis(); }

  plus(e) { if (!this.isValid) return this; const t = V.fromDurationLike(e); const r = {}; for (const n of D)(l(t.values, n) || l(this.values, n)) && (r[n] = t.get(n) + this.get(n)); return E(this, { values: r }, !0); }

  minus(e) { return this.isValid ? (e = V.fromDurationLike(e), this.plus(e.negate())) : this; }

  mapUnits(e) { if (!this.isValid) return this; const t = {}; for (const r of Object.keys(this.values))t[r] = at(e(this.values[r], r)); return E(this, { values: t }, !0); }

  get(e) { return this[V.normalizeUnit(e)]; }

  set(e) { return this.isValid ? E(this, { values: { ...this.values, ...ot(e, V.normalizeUnit) } }) : this; }

  reconfigure({
    locale: e, numberingSystem: t, conversionAccuracy: r, matrix: n,
  } = {}) { e = this.loc.clone({ locale: e, numberingSystem: t }); return E(this, { loc: e, matrix: n, conversionAccuracy: r }); }

  as(e) { return this.isValid ? this.shiftTo(e).get(e) : NaN; }

  normalize() { let e; return this.isValid ? (e = this.toObject(), pr(this.matrix, e), E(this, { values: e }, !0)) : this; }

  rescale() { let e; return this.isValid ? (e = Tr(this.normalize().shiftToAll().toObject()), E(this, { values: e }, !0)) : this; }

  shiftTo(...e) { if (!this.isValid) return this; if (e.length === 0) return this; e = e.map((e) => V.normalizeUnit(e)); const t = {}; const r = {}; const n = this.toObject(); let s; for (const a of D) if (e.indexOf(a) >= 0) { s = a; let e = 0; for (const o in r)e += this.matrix[o][a] * r[o], r[o] = 0; c(n[a]) && (e += n[a]); const i = Math.trunc(e); t[a] = i, r[a] = (1e3 * e - 1e3 * i) / 1e3; for (const u in n)D.indexOf(u) > D.indexOf(a) && wr(this.matrix, n, u, t, a); } else c(n[a]) && (r[a] = n[a]); for (const l in r)r[l] !== 0 && (t[s] += l === s ? r[l] : r[l] / this.matrix[s][l]); return E(this, { values: t }, !0).normalize(); }

  shiftToAll() { return this.isValid ? this.shiftTo('years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds', 'milliseconds') : this; }

  negate() { if (!this.isValid) return this; const e = {}; for (const t of Object.keys(this.values))e[t] = this.values[t] === 0 ? 0 : -this.values[t]; return E(this, { values: e }, !0); }

  get years() { return this.isValid ? this.values.years || 0 : NaN; }

  get quarters() { return this.isValid ? this.values.quarters || 0 : NaN; }

  get months() { return this.isValid ? this.values.months || 0 : NaN; }

  get weeks() { return this.isValid ? this.values.weeks || 0 : NaN; }

  get days() { return this.isValid ? this.values.days || 0 : NaN; }

  get hours() { return this.isValid ? this.values.hours || 0 : NaN; }

  get minutes() { return this.isValid ? this.values.minutes || 0 : NaN; }

  get seconds() { return this.isValid ? this.values.seconds || 0 : NaN; }

  get milliseconds() { return this.isValid ? this.values.milliseconds || 0 : NaN; }

  get isValid() { return this.invalid === null; }

  get invalidReason() { return this.invalid ? this.invalid.reason : null; }

  get invalidExplanation() { return this.invalid ? this.invalid.explanation : null; }

  equals(e) { if (!this.isValid || !e.isValid) return !1; if (!this.loc.equals(e.loc)) return !1; for (const n of D) if (t = this.values[n], r = e.values[n], !(void 0 === t || t === 0 ? void 0 === r || r === 0 : t === r)) return !1; let t; let r; return !0; }
} const Sr = 'Invalid Interval'; function Or(e, t) { return e && e.isValid ? t && t.isValid ? t < e ? x.invalid('end before start', `The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`) : null : x.invalid('missing or invalid end') : x.invalid('missing or invalid start'); } class x {
  constructor(e) { this.s = e.start, this.e = e.end, this.invalid = e.invalid || null, this.isLuxonInterval = !0; }

  static invalid(e, t = null) { if (!e) throw new o('need to specify a reason the Interval is invalid'); e = e instanceof S ? e : new S(e, t); if (v.throwOnInvalid) throw new A(e); return new x({ invalid: e }); }

  static fromDateTimes(e, t) { var e = kn(e); var t = kn(t); const r = Or(e, t); return r == null ? new x({ start: e, end: t }) : r; }

  static after(e, t) { t = V.fromDurationLike(t), e = kn(e); return x.fromDateTimes(e, e.plus(t)); }

  static before(e, t) { t = V.fromDurationLike(t), e = kn(e); return x.fromDateTimes(e.minus(t), e); }

  static fromISO(e, s) { const [i, a] = (e || '').split('/', 2); if (i && a) { let e; let t; try { e = L.fromISO(i, s), t = e.isValid; } catch (a) { t = !1; }let r; let n; try { r = L.fromISO(a, s), n = r.isValid; } catch (a) { n = !1; } if (t && n) return x.fromDateTimes(e, r); if (t) { var o = V.fromISO(a, s); if (o.isValid) return x.after(e, o); } else if (n) { o = V.fromISO(i, s); if (o.isValid) return x.before(r, o); } } return x.invalid('unparsable', `the input "${e}" can't be parsed as ISO 8601`); }

  static isInterval(e) { return e && e.isLuxonInterval || !1; }

  get start() { return this.isValid ? this.s : null; }

  get end() { return this.isValid ? this.e : null; }

  get isValid() { return this.invalidReason === null; }

  get invalidReason() { return this.invalid ? this.invalid.reason : null; }

  get invalidExplanation() { return this.invalid ? this.invalid.explanation : null; }

  length(e = 'milliseconds') { return this.isValid ? this.toDuration(e).get(e) : NaN; }

  count(e = 'milliseconds') { let t; let r; return this.isValid ? (t = this.start.startOf(e), r = this.end.startOf(e), Math.floor(r.diff(t, e).get(e)) + (r.valueOf() !== this.end.valueOf())) : NaN; }

  hasSame(e) { return !!this.isValid && (this.isEmpty() || this.e.minus(1).hasSame(this.s, e)); }

  isEmpty() { return this.s.valueOf() === this.e.valueOf(); }

  isAfter(e) { return !!this.isValid && this.s > e; }

  isBefore(e) { return !!this.isValid && this.e <= e; }

  contains(e) { return !!this.isValid && this.s <= e && this.e > e; }

  set({ start: e, end: t } = {}) { return this.isValid ? x.fromDateTimes(e || this.s, t || this.e) : this; }

  splitAt(...e) {
    if (!this.isValid) return []; const t = e.map(kn).filter((e) => this.contains(e)).sort(); const r = []; let n = this.s; let
      s = 0; for (;n < this.e;) { var i = t[s] || this.e; var i = +i > +this.e ? this.e : i; r.push(x.fromDateTimes(n, i)), n = i, s += 1; } return r;
  }

  splitBy(e) {
    const t = V.fromDurationLike(e); if (!this.isValid || !t.isValid || t.as('milliseconds') === 0) return []; let r = this.s; let n = 1; let
      s; for (var i = []; r < this.e;) { const a = this.start.plus(t.mapUnits((e) => e * n)); s = +a > +this.e ? this.e : a, i.push(x.fromDateTimes(r, s)), r = s, n += 1; } return i;
  }

  divideEqually(e) { return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : []; }

  overlaps(e) { return this.e > e.s && this.s < e.e; }

  abutsStart(e) { return !!this.isValid && +this.e == +e.s; }

  abutsEnd(e) { return !!this.isValid && +e.e == +this.s; }

  engulfs(e) { return !!this.isValid && this.s <= e.s && this.e >= e.e; }

  equals(e) { return !(!this.isValid || !e.isValid) && this.s.equals(e.s) && this.e.equals(e.e); }

  intersection(e) { let t; return this.isValid ? (t = (this.s > e.s ? this : e).s, (e = (this.e < e.e ? this : e).e) <= t ? null : x.fromDateTimes(t, e)) : this; }

  union(e) { let t; return this.isValid ? (t = (this.s < e.s ? this : e).s, e = (this.e > e.e ? this : e).e, x.fromDateTimes(t, e)) : this; }

  static merge(e) { var [e, t] = e.sort((e, t) => e.s - t.s).reduce(([e, t], r) => (t ? t.overlaps(r) || t.abutsStart(r) ? [e, t.union(r)] : [e.concat([t]), r] : [e, r]), [[], null]); return t && e.push(t), e; }

  static xor(e) { let t = null; let r = 0; const n = []; var e = e.map((e) => [{ time: e.s, type: 's' }, { time: e.e, type: 'e' }]); for (const s of Array.prototype.concat(...e).sort((e, t) => e.time - t.time))r += s.type === 's' ? 1 : -1, t = r === 1 ? s.time : (t && +t != +s.time && n.push(x.fromDateTimes(t, s.time)), null); return x.merge(n); }

  difference(...e) { return x.xor([this].concat(e)).map((e) => this.intersection(e)).filter((e) => e && !e.isEmpty()); }

  toString() { return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : Sr; }

  toLocaleString(e = U, t = {}) { return this.isValid ? T.create(this.s.loc.clone(t), e).formatInterval(this) : Sr; }

  toISO(e) { return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : Sr; }

  toISODate() { return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Sr; }

  toISOTime(e) { return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : Sr; }

  toFormat(e, { separator: t = ' – ' } = {}) { return this.isValid ? `${this.s.toFormat(e)}${t}${this.e.toFormat(e)}` : Sr; }

  toDuration(e, t) { return this.isValid ? this.e.diff(this.s, e, t) : V.invalid(this.invalidReason); }

  mapEndpoints(e) { return x.fromDateTimes(e(this.s), e(this.e)); }
} class br {
  static hasDST(e = v.defaultZone) { const t = L.now().setZone(e).set({ month: 12 }); return !e.isUniversal && t.offset !== t.set({ month: 6 }).offset; }

  static isValidIANAZone(e) { return u.isValidZone(e); }

  static normalizeZone(e) { return g(e, v.defaultZone); }

  static months(e = 'long', {
    locale: t = null, numberingSystem: r = null, locObj: n = null, outputCalendar: s = 'gregory',
  } = {}) { return (n || y.create(t, r, s)).months(e); }

  static monthsFormat(e = 'long', {
    locale: t = null, numberingSystem: r = null, locObj: n = null, outputCalendar: s = 'gregory',
  } = {}) { return (n || y.create(t, r, s)).months(e, !0); }

  static weekdays(e = 'long', { locale: t = null, numberingSystem: r = null, locObj: n = null } = {}) { return (n || y.create(t, r, null)).weekdays(e); }

  static weekdaysFormat(e = 'long', { locale: t = null, numberingSystem: r = null, locObj: n = null } = {}) { return (n || y.create(t, r, null)).weekdays(e, !0); }

  static meridiems({ locale: e = null } = {}) { return y.create(e).meridiems(); }

  static eras(e = 'short', { locale: t = null } = {}) { return y.create(t, null, 'gregory').eras(e); }

  static features() { return { relative: Ye() }; }
} function kr(e, t) { const r = (e) => e.toUTC(0, { keepLocalTime: !0 }).startOf('day').valueOf(); var t = r(t) - r(e); return Math.floor(V.fromMillis(t).as('days')); } function Nr(e, t, r, n) { let[s, i, a, o] = (function (e, t, r) { let n; let s; const i = {}; const a = e; let o; let u; for ([n, s] of [['years', (e, t) => t.year - e.year], ['quarters', (e, t) => t.quarter - e.quarter + 4 * (t.year - e.year)], ['months', (e, t) => t.month - e.month + 12 * (t.year - e.year)], ['weeks', (e, t) => { e = kr(e, t); return (e - e % 7) / 7; }], ['days', kr]])r.indexOf(n) >= 0 && (i[o = n] = s(e, t), e = (u = a.plus(i)) > t ? (i[n]--, a.plus(i)) : u); return [e, i, u, o]; }(e, t, r)); e = t - s, r = r.filter((e) => ['hours', 'minutes', 'seconds', 'milliseconds'].indexOf(e) >= 0), r.length === 0 && (a = a < t ? s.plus({ [o]: 1 }) : a) !== s && (i[o] = (i[o] || 0) + e / (a - s)), t = V.fromObject(i, n); return r.length > 0 ? V.fromMillis(e, n).shiftTo(...r).plus(t) : t; } const Mr = {
  arab: '[٠-٩]', arabext: '[۰-۹]', bali: '[᭐-᭙]', beng: '[০-৯]', deva: '[०-९]', fullwide: '[０-９]', gujr: '[૦-૯]', hanidec: '[〇|一|二|三|四|五|六|七|八|九]', khmr: '[០-៩]', knda: '[೦-೯]', laoo: '[໐-໙]', limb: '[᥆-᥏]', mlym: '[൦-൯]', mong: '[᠐-᠙]', mymr: '[၀-၉]', orya: '[୦-୯]', tamldec: '[௦-௯]', telu: '[౦-౯]', thai: '[๐-๙]', tibt: '[༠-༩]', latn: '\\d',
}; const Dr = {
  arab: [1632, 1641], arabext: [1776, 1785], bali: [6992, 7001], beng: [2534, 2543], deva: [2406, 2415], fullwide: [65296, 65303], gujr: [2790, 2799], khmr: [6112, 6121], knda: [3302, 3311], laoo: [3792, 3801], limb: [6470, 6479], mlym: [3430, 3439], mong: [6160, 6169], mymr: [4160, 4169], orya: [2918, 2927], tamldec: [3046, 3055], telu: [3174, 3183], thai: [3664, 3673], tibt: [3872, 3881],
}; const Er = Mr.hanidec.replace(/[\[|\]]/g, '').split(''); function I({ numberingSystem: e }, t = '') { return new RegExp(`${Mr[e || 'latn']}${t}`); } const Vr = 'missing Intl.DateTimeFormat.formatToParts support'; function C(e, t = (e) => e) { return { regex: e, deser: ([e]) => t(function (t) { let r = parseInt(t, 10); if (isNaN(r)) { r = ''; for (let e = 0; e < t.length; e++) { const n = t.charCodeAt(e); if (t[e].search(Mr.hanidec) !== -1)r += Er.indexOf(t[e]); else for (const a in Dr) { const [s, i] = Dr[a]; s <= n && n <= i && (r += n - s); } } return parseInt(r, 10); } return r; }(e)) }; } const xr = `[ ${String.fromCharCode(160)}]`; const Ir = new RegExp(xr, 'g'); function Cr(e) { return e.replace(/\./g, '\\.?').replace(Ir, xr); } function Zr(e) { return e.replace(/\./g, '').replace(Ir, ' ').toLowerCase(); } function Z(e, r) { return e === null ? null : { regex: RegExp(e.map(Cr).join('|')), deser: ([t]) => e.findIndex((e) => Zr(t) === Zr(e)) + r }; } function Fr(e, t) { return { regex: e, deser: ([, e, t]) => it(e, t), groups: t }; } function Lr(e) { return { regex: e, deser: ([e]) => e }; } const zr = {
  year: { '2-digit': 'yy', numeric: 'yyyyy' },
  month: {
    numeric: 'M', '2-digit': 'MM', short: 'MMM', long: 'MMMM',
  },
  day: { numeric: 'd', '2-digit': 'dd' },
  weekday: { short: 'EEE', long: 'EEEE' },
  dayperiod: 'a',
  dayPeriod: 'a',
  hour: { numeric: 'h', '2-digit': 'hh' },
  minute: { numeric: 'm', '2-digit': 'mm' },
  second: { numeric: 's', '2-digit': 'ss' },
  timeZoneName: { long: 'ZZZZZ', short: 'ZZZ' },
}; let Ar = null; function qr(e, r) { return Array.prototype.concat(...e.map((e) => (t = r, (e = e).literal || (t = Ur(T.macroTokenToFormatOpts(e.val), t)) == null || t.includes(void 0) ? e : t))); } function jr(y, e, t) {
  var t = qr(T.parseFormat(t), y); var r = t.map((e) => { { const t = e; const r = y; const n = I(r); const s = I(r, '{2}'); const i = I(r, '{3}'); const a = I(r, '{4}'); const o = I(r, '{6}'); const u = I(r, '{1,2}'); const l = I(r, '{1,3}'); const c = I(r, '{1,6}'); const h = I(r, '{1,9}'); const d = I(r, '{2,4}'); const m = I(r, '{4,6}'); const f = (e) => ({ regex: RegExp(e.val.replace(/[\-\[\]{}()*+?.,\\^$|#\s]/g, '\\$&')), deser: ([e]) => e, literal: !0 }); return (e = ((e) => { if (t.literal) return f(e); switch (e.val) { case 'G': return Z(r.eras('short', !1), 0); case 'GG': return Z(r.eras('long', !1), 0); case 'y': return C(c); case 'yy': return C(d, nt); case 'yyyy': return C(a); case 'yyyyy': return C(m); case 'yyyyyy': return C(o); case 'M': return C(u); case 'MM': return C(s); case 'MMM': return Z(r.months('short', !0, !1), 1); case 'MMMM': return Z(r.months('long', !0, !1), 1); case 'L': return C(u); case 'LL': return C(s); case 'LLL': return Z(r.months('short', !1, !1), 1); case 'LLLL': return Z(r.months('long', !1, !1), 1); case 'd': return C(u); case 'dd': return C(s); case 'o': return C(l); case 'ooo': return C(i); case 'HH': return C(s); case 'H': return C(u); case 'hh': return C(s); case 'h': return C(u); case 'mm': return C(s); case 'm': case 'q': return C(u); case 'qq': return C(s); case 's': return C(u); case 'ss': return C(s); case 'S': return C(l); case 'SSS': return C(i); case 'u': return Lr(h); case 'uu': return Lr(u); case 'uuu': return C(n); case 'a': return Z(r.meridiems(), 0); case 'kkkk': return C(a); case 'kk': return C(d, nt); case 'W': return C(u); case 'WW': return C(s); case 'E': case 'c': return C(n); case 'EEE': return Z(r.weekdays('short', !1, !1), 1); case 'EEEE': return Z(r.weekdays('long', !1, !1), 1); case 'ccc': return Z(r.weekdays('short', !0, !1), 1); case 'cccc': return Z(r.weekdays('long', !0, !1), 1); case 'Z': case 'ZZ': return Fr(new RegExp(`([+-]${u.source})(?::(${s.source}))?`), 2); case 'ZZZ': return Fr(new RegExp(`([+-]${u.source})(${s.source})?`), 2); case 'z': return Lr(/[a-z_+-/]{1,256}?/i); case ' ': return Lr(/[^\S\n\r]/); default: return f(e); } })(t) || { invalidReason: Vr }).token = t, e; } }); var n = r.find((e) => e.invalidReason); if (n) return { input: e, tokens: t, invalidReason: n.invalidReason }; var [r, n] = [`^${(n = r).map((e) => e.regex).reduce((e, t) => `${e}(${t.source})`, '')}$`, n]; var r = RegExp(r, 'i'); var [n, s] = (function (e, t, r) { const n = e.match(t); if (n) { let s; let i; const a = {}; let e = 1; for (const o in r)l(r, o) && (i = (s = r[o]).groups ? s.groups + 1 : 1, !s.literal && s.token && (a[s.token.val[0]] = s.deser(n.slice(e, e + i))), e += i); return [n, a]; } return [n, {}]; }(e, r, n)); const [i, a, o] = s ? (function (n) { let e = null; let t; return w(n.z) || (e = u.create(n.z)), w(n.Z) || (e = e || new d(n.Z), t = n.Z), w(n.q) || (n.M = 3 * (n.q - 1) + 1), w(n.h) || (n.h < 12 && n.a === 1 ? n.h += 12 : n.h === 12 && n.a === 0 && (n.h = 0)), n.G === 0 && n.y && (n.y = -n.y), w(n.u) || (n.S = Be(n.u)), [Object.keys(n).reduce((e, t) => { const r = ((e) => { switch (e) { case 'S': return 'millisecond'; case 's': return 'second'; case 'm': return 'minute'; case 'h': case 'H': return 'hour'; case 'd': return 'day'; case 'o': return 'ordinal'; case 'L': case 'M': return 'month'; case 'y': return 'year'; case 'E': case 'c': return 'weekday'; case 'W': return 'weekNumber'; case 'k': return 'weekYear'; case 'q': return 'quarter'; default: return null; } })(t); return r && (e[r] = n[t]), e; }, {}), e, t]; }(s)) : [null, null, void 0]; if (l(s, 'a') && l(s, 'H')) throw new j("Can't include meridiem when specifying 24-hour format"); return {
    input: e, tokens: t, regex: r, rawMatches: n, matches: s, result: i, zone: a, specificOffset: o,
  };
} function _r(e, t, r) {
  var {
    result: e, zone: t, specificOffset: r, invalidReason: n,
  } = jr(e, t, r); return [e, t, r, n];
} function Ur(i, e) { return i ? T.create(e, i).formatDateTimeParts(Ar = Ar || L.fromMillis(1555555555555)).map((t) => { { const r = i; var { type: t, value: n } = t; if (t === 'literal') return { literal: !(s = /^\s+$/.test(n)), val: s ? ' ' : n }; var s = r[t]; let e = zr[t]; return (e = typeof e === 'object' ? e[s] : e) ? { literal: !1, val: e } : void 0; } }) : null; } const $r = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]; const Hr = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335]; function F(e, t) { return new S('unit out of range', `you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`); } function Wr(e, t, r) { t = new Date(Date.UTC(e, t - 1, r)), e < 100 && e >= 0 && t.setUTCFullYear(t.getUTCFullYear() - 1900), r = t.getUTCDay(); return r === 0 ? 7 : r; } function Rr(e, t, r) { return r + (Ke(e) ? Hr : $r)[t - 1]; } function Jr(e, t) { var e = Ke(e) ? Hr : $r; const r = e.findIndex((e) => e < t); return { month: r + 1, day: t - e[r] }; } function Yr(e) {
  var { year: t, month: r, day: n } = e; const s = Rr(t, r, n); var r = Wr(t, r, n); let i = Math.floor((s - r + 10) / 7); let a; return i < 1 ? (a = t - 1, i = rt(a)) : i > rt(t) ? (a = t + 1, i = 1) : a = t, {
    weekYear: a, weekNumber: i, weekday: r, ...lt(e),
  };
} function Pr(e) {
  var { weekYear: t, weekNumber: r, weekday: n } = e; const s = Wr(t, 1, 4); const i = Xe(t); let a = 7 * r + n - s - 3; let o; a < 1 ? (o = t - 1, a += Xe(o)) : a > i ? (o = t + 1, a -= Xe(t)) : o = t; var { month: r, day: n } = Jr(o, a); return {
    year: o, month: r, day: n, ...lt(e),
  };
} function Gr(e) { const { year: t, month: r, day: n } = e; return { year: t, ordinal: Rr(t, r, n), ...lt(e) }; } function Br(e) {
  var { year: t, ordinal: r } = e; var { month: r, day: n } = Jr(t, r); return {
    year: t, month: r, day: n, ...lt(e),
  };
} function Qr(e) { const t = Re(e.weekYear); const r = h(e.weekNumber, 1, rt(e.weekYear)); const n = h(e.weekday, 1, 7); return t ? r ? !n && F('weekday', e.weekday) : F('week', e.week) : F('weekYear', e.weekYear); } function Kr(e) { const t = Re(e.year); const r = h(e.ordinal, 1, Xe(e.year)); return t ? !r && F('ordinal', e.ordinal) : F('year', e.year); } function Xr(e) { const t = Re(e.year); const r = h(e.month, 1, 12); const n = h(e.day, 1, et(e.year, e.month)); return t ? r ? !n && F('day', e.day) : F('month', e.month) : F('year', e.year); } function en(e) {
  var {
    hour: e, minute: t, second: r, millisecond: n,
  } = e; const s = h(e, 0, 23) || e === 24 && t === 0 && r === 0 && n === 0; const i = h(t, 0, 59); const a = h(r, 0, 59); const o = h(n, 0, 999); return s ? i ? a ? !o && F('millisecond', n) : F('second', r) : F('minute', t) : F('hour', e);
} const tn = 'Invalid DateTime'; function rn(e) { return new S('unsupported zone', `the zone "${e.name}" is not supported`); } function nn(e) { return e.weekData === null && (e.weekData = Yr(e.c)), e.weekData; } function sn(e, t) {
  e = {
    ts: e.ts, zone: e.zone, c: e.c, o: e.o, loc: e.loc, invalid: e.invalid,
  }; return new L({ ...e, ...t, old: e });
} function an(e, t, r) { let n = e - 60 * t * 1e3; const s = r.offset(n); return t === s ? [n, t] : s === (r = r.offset(n -= 60 * (s - t) * 1e3)) ? [n, s] : [e - 60 * Math.min(s, r) * 1e3, Math.max(s, r)]; } function on(e, t) {
  e += 60 * t * 1e3; t = new Date(e); return {
    year: t.getUTCFullYear(), month: t.getUTCMonth() + 1, day: t.getUTCDate(), hour: t.getUTCHours(), minute: t.getUTCMinutes(), second: t.getUTCSeconds(), millisecond: t.getUTCMilliseconds(),
  };
} function un(e, t, r) { return an(tt(e), t, r); } function ln(e, t) {
  const r = e.o; var n = e.c.year + Math.trunc(t.years); var s = e.c.month + Math.trunc(t.months) + 3 * Math.trunc(t.quarters); var n = {
    ...e.c, year: n, month: s, day: Math.min(e.c.day, et(n, s)) + Math.trunc(t.days) + 7 * Math.trunc(t.weeks),
  }; var s = V.fromObject({
    years: t.years - Math.trunc(t.years), quarters: t.quarters - Math.trunc(t.quarters), months: t.months - Math.trunc(t.months), weeks: t.weeks - Math.trunc(t.weeks), days: t.days - Math.trunc(t.days), hours: t.hours, minutes: t.minutes, seconds: t.seconds, milliseconds: t.milliseconds,
  }).as('milliseconds'); let[i, a] = an(tt(n), r, e.zone); return s !== 0 && (i += s, a = e.zone.offset(i)), { ts: i, o: a };
} function cn(e, t, r, n, s, i) { const { setZone: a, zone: o } = r; return e && Object.keys(e).length !== 0 || t ? (t = t || o, e = L.fromObject(e, { ...r, zone: t, specificOffset: i }), a ? e : e.setZone(o)) : L.invalid(new S('unparsable', `the input "${s}" can't be parsed as ${n}`)); } function hn(e, t, r = !0) { return e.isValid ? T.create(y.create('en-US'), { allowZ: r, forceSimple: !0 }).formatDateTimeFromString(e, t) : null; } function dn(e, t) { const r = e.c.year > 9999 || e.c.year < 0; let n = ''; return r && e.c.year >= 0 && (n += '+'), n += m(e.c.year, r ? 6 : 4), n = t ? (n = `${(n += '-') + m(e.c.month)}-`) + m(e.c.day) : (n += m(e.c.month)) + m(e.c.day); } function mn(e, t, r, n, s, i) { let a = m(e.c.hour); return t ? (a = (a += ':') + m(e.c.minute), e.c.second === 0 && r || (a += ':')) : a += m(e.c.minute), e.c.second === 0 && r || (a += m(e.c.second), e.c.millisecond === 0 && n) || (a = (a += '.') + m(e.c.millisecond, 3)), s && (e.isOffsetFixed && e.offset === 0 && !i ? a += 'Z' : a = e.o < 0 ? (a = `${(a += '-') + m(Math.trunc(-e.o / 60))}:`) + m(Math.trunc(-e.o % 60)) : (a = `${(a += '+') + m(Math.trunc(e.o / 60))}:`) + m(Math.trunc(e.o % 60))), i && (a += `[${e.zone.ianaName}]`), a; } const fn = {
  month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0,
}; const yn = {
  weekNumber: 1, weekday: 1, hour: 0, minute: 0, second: 0, millisecond: 0,
}; const gn = {
  ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0,
}; const vn = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond']; const wn = ['weekYear', 'weekNumber', 'weekday', 'hour', 'minute', 'second', 'millisecond']; const pn = ['year', 'ordinal', 'hour', 'minute', 'second', 'millisecond']; function Tn(e) {
  const t = {
    year: 'year', years: 'year', month: 'month', months: 'month', day: 'day', days: 'day', hour: 'hour', hours: 'hour', minute: 'minute', minutes: 'minute', quarter: 'quarter', quarters: 'quarter', second: 'second', seconds: 'second', millisecond: 'millisecond', milliseconds: 'millisecond', weekday: 'weekday', weekdays: 'weekday', weeknumber: 'weekNumber', weeksnumber: 'weekNumber', weeknumbers: 'weekNumber', weekyear: 'weekYear', weekyears: 'weekYear', ordinal: 'ordinal',
  }[e.toLowerCase()]; if (t) return t; throw new _(e);
} function Sn(e, t) {
  const r = g(t.zone, v.defaultZone); var t = y.fromObject(t); const n = v.now(); let s; let i; if (w(e.year))s = n; else { for (const o of vn)w(e[o]) && (e[o] = fn[o]); let a = Xr(e) || en(e); if (a) return L.invalid(a); a = r.offset(n); [s, i] = un(e, a, r); } return new L({
    ts: s, zone: r, loc: t, o: i,
  });
} function On(t, r, n) { const s = !!w(n.round) || n.round; const e = (e, t) => (e = Qe(e, s || n.calendary ? 0 : 2, !0), r.loc.clone(n).relFormatter(n).format(e, t)); const i = (e) => (n.calendary ? r.hasSame(t, e) ? 0 : r.startOf(e).diff(t.startOf(e), e).get(e) : r.diff(t, e).get(e)); if (n.unit) return e(i(n.unit), n.unit); for (const o of n.units) { const a = i(o); if (Math.abs(a) >= 1) return e(a, o); } return e(r < t ? -0 : 0, n.units[n.units.length - 1]); } function bn(e) { let t = {}; let r; return r = e.length > 0 && typeof e[e.length - 1] === 'object' ? (t = e[e.length - 1], Array.from(e).slice(0, e.length - 1)) : Array.from(e), [t, r]; } class L {
  constructor(e) { let t; const r = e.zone || v.defaultZone; let n = e.invalid || (Number.isNaN(e.ts) ? new S('invalid input') : null) || (r.isValid ? null : rn(r)); let s = (this.ts = w(e.ts) ? v.now() : e.ts, null); let i = null; n || (e.old && e.old.ts === this.ts && e.old.zone.equals(r) ? [s, i] = [e.old.c, e.old.o] : (t = r.offset(this.ts), s = on(this.ts, t), n = Number.isNaN(s.year) ? new S('invalid input') : null, s = n ? null : s, i = n ? null : t)), this._zone = r, this.loc = e.loc || y.create(), this.invalid = n, this.weekData = null, this.c = s, this.o = i, this.isLuxonDateTime = !0; }

  static now() { return new L({}); }

  static local() {
    var [e, t] = bn(arguments); var [t, r, n, s, i, a, o] = t; return Sn({
      year: t, month: r, day: n, hour: s, minute: i, second: a, millisecond: o,
    }, e);
  }

  static utc() {
    var [e, t] = bn(arguments); var [t, r, n, s, i, a, o] = t; return e.zone = d.utcInstance, Sn({
      year: t, month: r, day: n, hour: s, minute: i, second: a, millisecond: o,
    }, e);
  }

  static fromJSDate(e, t = {}) { let r; var e = Je(e) ? e.valueOf() : NaN; return Number.isNaN(e) ? L.invalid('invalid input') : (r = g(t.zone, v.defaultZone)).isValid ? new L({ ts: e, zone: r, loc: y.fromObject(t) }) : L.invalid(rn(r)); }

  static fromMillis(e, t = {}) { if (c(e)) return e < -864e13 || e > 864e13 ? L.invalid('Timestamp out of range') : new L({ ts: e, zone: g(t.zone, v.defaultZone), loc: y.fromObject(t) }); throw new o(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`); }

  static fromSeconds(e, t = {}) { if (c(e)) return new L({ ts: 1e3 * e, zone: g(t.zone, v.defaultZone), loc: y.fromObject(t) }); throw new o('fromSeconds requires a numerical input'); }

  static fromObject(e, t = {}) {
    e = e || {}; const r = g(t.zone, v.defaultZone); if (!r.isValid) return L.invalid(rn(r)); let n = v.now(); const s = w(t.specificOffset) ? r.offset(n) : t.specificOffset; const i = ot(e, Tn); const a = !w(i.ordinal); var o = !w(i.year); let u = !w(i.month) || !w(i.day); var o = o || u; var l = i.weekYear || i.weekNumber; var t = y.fromObject(t); if ((o || a) && l) throw new j("Can't mix weekYear/weekNumber units with year/month/day or ordinals"); if (u && a) throw new j("Can't mix ordinal dates with month/day"); u = l || i.weekday && !o; let c; let h; let d = on(n, s); let m = (u ? (c = wn, h = yn, d = Yr(d)) : a ? (c = pn, h = gn, d = Gr(d)) : (c = vn, h = fn), !1); for (const f of c)w(i[f]) ? m ? i[f] = h[f] : i[f] = d[f] : m = !0; var l = (u ? Qr : a ? Kr : Xr)(i) || en(i); return l ? L.invalid(l) : ([n, l] = un(u ? Pr(i) : a ? Br(i) : i, s, r), u = new L({
      ts: n, zone: r, o: l, loc: t,
    }), i.weekday && o && e.weekday !== u.weekday ? L.invalid('mismatched weekday', `you can't specify both a weekday of ${i.weekday} and a date of ${u.toISO()}`) : u);
  }

  static fromISO(e, t = {}) { const [r, n] = nr(e); return cn(r, n, t, 'ISO 8601', e); }

  static fromRFC2822(e, t = {}) { const [r, n] = sr(e); return cn(r, n, t, 'RFC 2822', e); }

  static fromHTTP(e, t = {}) { var [e, r] = ir(e); return cn(e, r, t, 'HTTP', t); }

  static fromFormat(e, t, r = {}) { if (w(e) || w(t)) throw new o('fromFormat requires an input string and a format'); var { locale: n = null, numberingSystem: s = null } = r; var [n, s, i, a] = _r(y.fromOpts({ locale: n, numberingSystem: s, defaultToEN: !0 }), e, t); return a ? L.invalid(a) : cn(n, s, r, `format ${t}`, e, i); }

  static fromString(e, t, r = {}) { return L.fromFormat(e, t, r); }

  static fromSQL(e, t = {}) { const [r, n] = dr(e); return cn(r, n, t, 'SQL', e); }

  static invalid(e, t = null) { if (!e) throw new o('need to specify a reason the DateTime is invalid'); e = e instanceof S ? e : new S(e, t); if (v.throwOnInvalid) throw new z(e); return new L({ invalid: e }); }

  static isDateTime(e) { return e && e.isLuxonDateTime || !1; }

  static parseFormatForOpts(e, t = {}) { e = Ur(e, y.fromObject(t)); return e ? e.map((e) => (e ? e.val : null)).join('') : null; }

  static expandFormat(e, t = {}) { return qr(T.parseFormat(e), y.fromObject(t)).map((e) => e.val).join(''); }

  get(e) { return this[e]; }

  get isValid() { return this.invalid === null; }

  get invalidReason() { return this.invalid ? this.invalid.reason : null; }

  get invalidExplanation() { return this.invalid ? this.invalid.explanation : null; }

  get locale() { return this.isValid ? this.loc.locale : null; }

  get numberingSystem() { return this.isValid ? this.loc.numberingSystem : null; }

  get outputCalendar() { return this.isValid ? this.loc.outputCalendar : null; }

  get zone() { return this._zone; }

  get zoneName() { return this.isValid ? this.zone.name : null; }

  get year() { return this.isValid ? this.c.year : NaN; }

  get quarter() { return this.isValid ? Math.ceil(this.c.month / 3) : NaN; }

  get month() { return this.isValid ? this.c.month : NaN; }

  get day() { return this.isValid ? this.c.day : NaN; }

  get hour() { return this.isValid ? this.c.hour : NaN; }

  get minute() { return this.isValid ? this.c.minute : NaN; }

  get second() { return this.isValid ? this.c.second : NaN; }

  get millisecond() { return this.isValid ? this.c.millisecond : NaN; }

  get weekYear() { return this.isValid ? nn(this).weekYear : NaN; }

  get weekNumber() { return this.isValid ? nn(this).weekNumber : NaN; }

  get weekday() { return this.isValid ? nn(this).weekday : NaN; }

  get ordinal() { return this.isValid ? Gr(this.c).ordinal : NaN; }

  get monthShort() { return this.isValid ? br.months('short', { locObj: this.loc })[this.month - 1] : null; }

  get monthLong() { return this.isValid ? br.months('long', { locObj: this.loc })[this.month - 1] : null; }

  get weekdayShort() { return this.isValid ? br.weekdays('short', { locObj: this.loc })[this.weekday - 1] : null; }

  get weekdayLong() { return this.isValid ? br.weekdays('long', { locObj: this.loc })[this.weekday - 1] : null; }

  get offset() { return this.isValid ? +this.o : NaN; }

  get offsetNameShort() { return this.isValid ? this.zone.offsetName(this.ts, { format: 'short', locale: this.locale }) : null; }

  get offsetNameLong() { return this.isValid ? this.zone.offsetName(this.ts, { format: 'long', locale: this.locale }) : null; }

  get isOffsetFixed() { return this.isValid ? this.zone.isUniversal : null; }

  get isInDST() { return !this.isOffsetFixed && (this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset); }

  get isInLeapYear() { return Ke(this.year); }

  get daysInMonth() { return et(this.year, this.month); }

  get daysInYear() { return this.isValid ? Xe(this.year) : NaN; }

  get weeksInWeekYear() { return this.isValid ? rt(this.weekYear) : NaN; }

  resolvedLocaleOptions(e = {}) { var { locale: e, numberingSystem: t, calendar: r } = T.create(this.loc.clone(e), e).resolvedOptions(this); return { locale: e, numberingSystem: t, outputCalendar: r }; }

  toUTC(e = 0, t = {}) { return this.setZone(d.instance(e), t); }

  toLocal() { return this.setZone(v.defaultZone); }

  setZone(t, { keepLocalTime: r = !1, keepCalendarTime: n = !1 } = {}) { if ((t = g(t, v.defaultZone)).equals(this.zone)) return this; if (t.isValid) { let e = this.ts; return (r || n) && (r = t.offset(this.ts), n = this.toObject(), [e] = un(n, r, t)), sn(this, { ts: e, zone: t }); } return L.invalid(rn(t)); }

  reconfigure({ locale: e, numberingSystem: t, outputCalendar: r } = {}) { e = this.loc.clone({ locale: e, numberingSystem: t, outputCalendar: r }); return sn(this, { loc: e }); }

  setLocale(e) { return this.reconfigure({ locale: e }); }

  set(e) { if (!this.isValid) return this; var e = ot(e, Tn); const t = !w(e.weekYear) || !w(e.weekNumber) || !w(e.weekday); const r = !w(e.ordinal); var n = !w(e.year); const s = !w(e.month) || !w(e.day); var i = e.weekYear || e.weekNumber; if ((n || s || r) && i) throw new j("Can't mix weekYear/weekNumber units with year/month/day or ordinals"); if (s && r) throw new j("Can't mix ordinal dates with month/day"); let a; t ? a = Pr({ ...Yr(this.c), ...e }) : w(e.ordinal) ? (a = { ...this.toObject(), ...e }, w(e.day) && (a.day = Math.min(et(a.year, a.month), a.day))) : a = Br({ ...Gr(this.c), ...e }); var [n, i] = un(a, this.o, this.zone); return sn(this, { ts: n, o: i }); }

  plus(e) { return this.isValid ? sn(this, ln(this, V.fromDurationLike(e))) : this; }

  minus(e) { return this.isValid ? sn(this, ln(this, V.fromDurationLike(e).negate())) : this; }

  startOf(e) { if (!this.isValid) return this; const t = {}; var e = V.normalizeUnit(e); switch (e) { case 'years': t.month = 1; case 'quarters': case 'months': t.day = 1; case 'weeks': case 'days': t.hour = 0; case 'hours': t.minute = 0; case 'minutes': t.second = 0; case 'seconds': t.millisecond = 0; } return e === 'weeks' && (t.weekday = 1), e === 'quarters' && (e = Math.ceil(this.month / 3), t.month = 3 * (e - 1) + 1), this.set(t); }

  endOf(e) { return this.isValid ? this.plus({ [e]: 1 }).startOf(e).minus(1) : this; }

  toFormat(e, t = {}) { return this.isValid ? T.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this, e) : tn; }

  toLocaleString(e = U, t = {}) { return this.isValid ? T.create(this.loc.clone(t), e).formatDateTime(this) : tn; }

  toLocaleParts(e = {}) { return this.isValid ? T.create(this.loc.clone(e), e).formatDateTimeParts(this) : []; }

  toISO({
    format: e = 'extended', suppressSeconds: t = !1, suppressMilliseconds: r = !1, includeOffset: n = !0, extendedZone: s = !1,
  } = {}) { let i; return this.isValid ? (i = dn(this, e = e === 'extended'), (i += 'T') + mn(this, e, t, r, n, s)) : null; }

  toISODate({ format: e = 'extended' } = {}) { return this.isValid ? dn(this, e === 'extended') : null; }

  toISOWeekDate() { return hn(this, "kkkk-'W'WW-c"); }

  toISOTime({
    suppressMilliseconds: e = !1, suppressSeconds: t = !1, includeOffset: r = !0, includePrefix: n = !1, extendedZone: s = !1, format: i = 'extended',
  } = {}) { return this.isValid ? (n ? 'T' : '') + mn(this, i === 'extended', t, e, r, s) : null; }

  toRFC2822() { return hn(this, 'EEE, dd LLL yyyy HH:mm:ss ZZZ', !1); }

  toHTTP() { return hn(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'"); }

  toSQLDate() { return this.isValid ? dn(this, !0) : null; }

  toSQLTime({ includeOffset: e = !0, includeZone: t = !1, includeOffsetSpace: r = !0 } = {}) { let n = 'HH:mm:ss.SSS'; return (t || e) && (r && (n += ' '), t ? n += 'z' : e && (n += 'ZZ')), hn(this, n, !0); }

  toSQL(e = {}) { return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null; }

  toString() { return this.isValid ? this.toISO() : tn; }

  valueOf() { return this.toMillis(); }

  toMillis() { return this.isValid ? this.ts : NaN; }

  toSeconds() { return this.isValid ? this.ts / 1e3 : NaN; }

  toUnixInteger() { return this.isValid ? Math.floor(this.ts / 1e3) : NaN; }

  toJSON() { return this.toISO(); }

  toBSON() { return this.toJSDate(); }

  toObject(e = {}) { let t; return this.isValid ? (t = { ...this.c }, e.includeConfig && (t.outputCalendar = this.outputCalendar, t.numberingSystem = this.loc.numberingSystem, t.locale = this.loc.locale), t) : {}; }

  toJSDate() { return new Date(this.isValid ? this.ts : NaN); }

  diff(e, t = 'milliseconds', r = {}) { let n; return this.isValid && e.isValid ? (r = { locale: this.locale, numberingSystem: this.numberingSystem, ...r }, t = Pe(t).map(V.normalizeUnit), e = Nr((n = e.valueOf() > this.valueOf()) ? this : e, n ? e : this, t, r), n ? e.negate() : e) : V.invalid('created by diffing an invalid DateTime'); }

  diffNow(e = 'milliseconds', t = {}) { return this.diff(L.now(), e, t); }

  until(e) { return this.isValid ? x.fromDateTimes(this, e) : this; }

  hasSame(e, t) { let r; return !!this.isValid && (r = e.valueOf(), (e = this.setZone(e.zone, { keepLocalTime: !0 })).startOf(t) <= r) && r <= e.endOf(t); }

  equals(e) { return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc); }

  toRelative(e = {}) {
    if (!this.isValid) return null; const t = e.base || L.fromObject({}, { zone: this.zone }); const r = e.padding ? this < t ? -e.padding : e.padding : 0; let n = ['years', 'months', 'days', 'hours', 'minutes', 'seconds']; let s = e.unit; return Array.isArray(e.unit) && (n = e.unit, s = void 0), On(t, this.plus(r), {
      ...e, numeric: 'always', units: n, unit: s,
    });
  }

  toRelativeCalendar(e = {}) {
    return this.isValid ? On(e.base || L.fromObject({}, { zone: this.zone }), this, {
      ...e, numeric: 'auto', units: ['years', 'months', 'days'], calendary: !0,
    }) : null;
  }

  static min(...e) { if (e.every(L.isDateTime)) return Ge(e, (e) => e.valueOf(), Math.min); throw new o('min requires all arguments be DateTimes'); }

  static max(...e) { if (e.every(L.isDateTime)) return Ge(e, (e) => e.valueOf(), Math.max); throw new o('max requires all arguments be DateTimes'); }

  static fromFormatExplain(e, t, r = {}) { var { locale: r = null, numberingSystem: n = null } = r; return jr(y.fromOpts({ locale: r, numberingSystem: n, defaultToEN: !0 }), e, t); }

  static fromStringExplain(e, t, r = {}) { return L.fromFormatExplain(e, t, r); }

  static get DATE_SHORT() { return U; }

  static get DATE_MED() { return $; }

  static get DATE_MED_WITH_WEEKDAY() { return H; }

  static get DATE_FULL() { return W; }

  static get DATE_HUGE() { return R; }

  static get TIME_SIMPLE() { return J; }

  static get TIME_WITH_SECONDS() { return Y; }

  static get TIME_WITH_SHORT_OFFSET() { return P; }

  static get TIME_WITH_LONG_OFFSET() { return G; }

  static get TIME_24_SIMPLE() { return B; }

  static get TIME_24_WITH_SECONDS() { return Q; }

  static get TIME_24_WITH_SHORT_OFFSET() { return K; }

  static get TIME_24_WITH_LONG_OFFSET() { return X; }

  static get DATETIME_SHORT() { return ee; }

  static get DATETIME_SHORT_WITH_SECONDS() { return te; }

  static get DATETIME_MED() { return re; }

  static get DATETIME_MED_WITH_SECONDS() { return ne; }

  static get DATETIME_MED_WITH_WEEKDAY() { return se; }

  static get DATETIME_FULL() { return ie; }

  static get DATETIME_FULL_WITH_SECONDS() { return ae; }

  static get DATETIME_HUGE() { return oe; }

  static get DATETIME_HUGE_WITH_SECONDS() { return ue; }
} function kn(e) { if (L.isDateTime(e)) return e; if (e && e.valueOf && c(e.valueOf())) return L.fromJSDate(e); if (e && typeof e === 'object') return L.fromObject(e); throw new o(`Unknown datetime argument: ${e}, of type ${typeof e}`); }s = '3.3.0'; export {
  L as DateTime, V as Duration, d as FixedOffsetZone, u as IANAZone, br as Info, x as Interval, Ae as InvalidZone, v as Settings, ce as SystemZone, s as VERSION, i as Zone,
};