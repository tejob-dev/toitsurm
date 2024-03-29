"use strict";
(self.webpackChunk_typeform_renderer = self.webpackChunk_typeform_renderer || []).push([
    [680], { 86520: (Yt, Ze, c) => { c.d(Ze, { UC: () => ln, yn: () => Ht, d1: () => Qt, eQ: () => vt, Dn: () => jt }); var i = c(56890),
                b = c(64923),
                J = c(98153),
                Se = c(86040),
                De = c(42855),
                me = c(1908),
                Pe = S => S.ref,
                ze = S => (0, me.Z)(S.ref) ? (0, me.Z)(S.value) ? S : S.value : S.ref,
                Me = function() { var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "-",
                        ce = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "YYYYMMDD",
                        ve = arguments.length > 2 ? arguments[2] : void 0,
                        [ge, Ve, Ye] = ve.split("-"); switch (ge = ge ? ge.padStart(4, "0") : "\\_\\_\\_\\_", Ve = Ve ? Ve.padStart(2, "0") : "\\_\\_", Ye = Ye ? Ye.padStart(2, "0") : "\\_\\_", ce) {
                        case "DDMMYYYY":
                            return Ye + x + Ve + x + ge;
                        case "MMDDYYYY":
                            return Ve + x + Ye + x + ge;
                        case "YYYYMMDD":
                            return ge + x + Ve + x + Ye;
                        default:
                            return null } },
                We = (S, x) => { var ce = ze(x),
                        ve; switch (S.type) {
                        case b.aR:
                        case b.Jx:
                        case b.yb:
                        case b.LI:
                            var ge = S.choices.find(Ve => Ve.ref === ce);
                            ve = ge ? ge.label : ce; break;
                        case b.xc:
                        case b.FA:
                            ve = ""; break;
                        case b.Hu:
                            ve = Me(S.separator, S.structure, ce); break;
                        default:
                            typeof ce == "string" ? ve = ce : typeof ce == "number" ? ve = ce.toString() : ve = x.label } return ve || "" };

            function B(S, x) { var ce = [].concat((0, me.Z)(x) ? [] : x).map(ve => { var ge = ze(ve),
                        Ve = We(S, ve); return { value: ge, humanReadableText: Ve } }); return { blockRef: Pe(S), value: ce } }

            function le(S) { return S.value.length === 0 || S.value.every(x => !x.value) } var F = c(44893),
                V = c(47808),
                w = c.n(V),
                I = c(30999),
                L = c(92181),
                E = c(93250),
                R = c(45509),
                Z = c(1513),
                C = () => S => { var [x, ce, ve] = S.split("-"); if (!x || !ce || !ve) return new Z.FU("date"); if (x.length < 4) return new Z.iz;
                    x = x.padStart(4, "0"), ce = ce.padStart(2, "0"), ve = ve.padStart(2, "0"); var ge = new Date("".concat(x, "-").concat(ce, "-").concat(ve)); return isNaN(ge.valueOf()) ? new Z.FU("date") : ge.getUTCFullYear() !== parseInt(x, 10) || ge.getUTCMonth() !== parseInt(ce, 10) - 1 || ge.getUTCDate() !== parseInt(ve, 10) ? new Z.FU("date") : null };

            function a() { return S => S.map(C()).filter(Boolean) } var Ot = function() { var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Number.POSITIVE_INFINITY; return ce => ce.length <= x };

            function wt(S) { return (0, I.$6P)(Ot(S)) } var Tt = S => x => x === S;

            function ue(S) { return (0, I.$6P)(Tt(S)) } var $e = c(62746),
                dt = c(10619),
                gt = c(61270),
                rr = (S, x) => new Z.Kf(S, dt.Z[x.code] || x.message, !0),
                se = S => new Z.Kf(S, "label.paymentError.".concat(S, "Incomplete")),
                A = S => { var x = [],
                        { cardCvc: ce, cardExpiry: ve, cardNumber: ge, cardholdersName: Ve } = S,
                        Ye = {
                            [gt.Z.CardCvc]: ce, [gt.Z.CardExpiry]: ve, [gt.Z.CardNumber]: ge },
                        nt = Object.keys(Ye),
                        Ke = !S || !Ve && nt.every(mt => Ye[mt].empty); return Ke ? [] : (nt.forEach(mt => { Ye[mt].error && x.push(rr(mt, Ye[mt].error)) }), Ve || x.push(se(gt.Z.CardName)), nt.forEach(mt => { Ye[mt].empty && x.push(se(mt)) }), x) };

            function ke() { return S => S.flatMap(A) } var he = (0, I.wEe)(I.xbD, I.kKJ),
                rt = (0, I.$6P)(he),
                ht = S => S.trim(),
                It = S => (0, I.is)(String, S);

            function bt(S) { return x => { if (!S) return !0; var ce = x.map(ve => It(ve) ? ht(ve) : ve); return !rt(ce) } } var zt = new RegExp(/^(https?|ftp):\/\/[-a-zA-Z0-9:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,18}\b/),
                Mt = new RegExp(/[\s]/),
                lr = new RegExp(/^app:\/\/.+$/),
                Nr = S => (0, I.xbD)(S) || zt.test(S) && !Mt.test(S) || lr.test(S);

            function br() { return (0, I.$6P)(Nr) } var Er = S => x => !S || !x.length || x.length >= S,
                Mr = () => () => !0,
                _r = S => { var { minValue: x, maxValue: ce, values: ve } = S; return !(0, me.Z)(ve) && ((0, $e.h)(x) || (0, $e.h)(ce)) },
                Dr = S => { var { minValue: x, maxValue: ce } = S; return ve => ve >= x && ve <= ce },
                rn = S => { var { minValue: x } = S; return ce => ce >= x },
                nn = S => { var { maxValue: x } = S; return ce => ce <= x },
                Zr = S => x => { var { minValue: ce, maxValue: ve } = x; return ge => _r({ minValue: ce, maxValue: ve, values: ge }) ? ge.every($e.h) && ge.every(S({ minValue: ce, maxValue: ve })) : !0 },
                Wr = Zr(Dr),
                Gr = Zr(rn),
                Br = Zr(nn),
                $r = {
                    [R.Z.date]: a, [R.Z.maxLength]: wt, [R.Z.maxSelection]: Mr, [R.Z.maxValue]: Br, [R.Z.minSelection]: Er, [R.Z.minValue]: Gr, [R.Z.mustAccept]: ue, [R.Z.number]: $e.Z, [R.Z.payment]: ke, [R.Z.range]: Wr, [R.Z.required]: bt, [R.Z.url]: br };

            function $t(S, x, ce, ve, ge, Ve, Ye) { try { var nt = S[Ve](Ye),
                        Ke = nt.value } catch (mt) { ce(mt); return }
                nt.done ? x(Ke) : Promise.resolve(Ke).then(ve, ge) }

            function te(S) { return function() { var x = this,
                        ce = arguments; return new Promise(function(ve, ge) { var Ve = S.apply(x, ce);

                        function Ye(Ke) { $t(Ve, ve, ge, Ye, nt, "next", Ke) }

                        function nt(Ke) { $t(Ve, ve, ge, Ye, nt, "throw", Ke) }
                        Ye(void 0) }) } } var Vr = function() { var S = te(function*(x, ce, ve) { for (var ge = Object.keys(ce), Ve = {}, Ye = 0, nt = ge.length; Ye < nt; Ye++) { var Ke = ge[Ye];
                            Ve[Ke] = yield x[Ke](ce[Ke], ve) } return Ve }); return function(ce, ve, ge) { return S.apply(this, arguments) } }(),
                Yr = (0, I.hXT)(S => S !== !0),
                an = (S, x) => te(function*() { var ce = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { validations: {} },
                        ve = yield Vr(S, ce.validations, { featureFlags: x }); return function() { var ge = te(function*(Ve) { var Ye = yield(0, L.p)(ce.definition, Ve),
                                nt = (0, I.IDH)(mt => mt(Ve), ve),
                                Ke = Yr(Ye || nt); return Object.entries(Ke).flatMap(mt => { var [Kt, nr] = mt; return nr === !1 ? [new Z.FU(w()(Kt), ce.validations, Ke)] : typeof nr == "object" ? Array.isArray(nr) ? nr : (0, E.JY)(nr) ? [] : [new Z.FU(null, nr, Ke)] : [] }) }); return function(Ve) { return ge.apply(this, arguments) } }() });

            function gn(S, x) { return an($r, x) }

            function sr(S, x, ce, ve, ge, Ve, Ye) { try { var nt = S[Ve](Ye),
                        Ke = nt.value } catch (mt) { ce(mt); return }
                nt.done ? x(Ke) : Promise.resolve(Ke).then(ve, ge) }

            function Ur(S) { return function() { var x = this,
                        ce = arguments; return new Promise(function(ve, ge) { var Ve = S.apply(x, ce);

                        function Ye(Ke) { sr(Ve, ve, ge, Ye, nt, "next", Ke) }

                        function nt(Ke) { sr(Ve, ve, ge, Ye, nt, "throw", Ke) }
                        Ye(void 0) }) } } var N = function() { var S = Ur(function*(x, ce, ve) { var ge = (0, F.$z)(ce),
                        Ve = gn(x, ve),
                        Ye = yield Ve(x); return Ye(ge) }); return function(ce, ve, ge) { return S.apply(this, arguments) } }();

            function Be(S, x, ce) { return Qe.apply(this, arguments) }

            function Qe() { return Qe = Ur(function*(S, x, ce) { if (!!x) return N(S, x, ce) }), Qe.apply(this, arguments) } var Ct = c(14132),
                ae = c(3547),
                xt = c(68531),
                Lt = c(44376),
                Jt = c(88376);

            function Wt(S, x) { return S.length === x.length && S.every((ce, ve) => ce === x[ve]) } var Or = c(82462),
                xr = c(51053),
                Qr = c(75273),
                on = c(51585),
                O = c(71510),
                Fe = c(37223);

            function Re(S, x, ce, ve, ge, Ve, Ye) { try { var nt = S[Ve](Ye),
                        Ke = nt.value } catch (mt) { ce(mt); return }
                nt.done ? x(Ke) : Promise.resolve(Ke).then(ve, ge) }

            function we(S) { return function() { var x = this,
                        ce = arguments; return new Promise(function(ve, ge) { var Ve = S.apply(x, ce);

                        function Ye(Ke) { Re(Ve, ve, ge, Ye, nt, "next", Ke) }

                        function nt(Ke) { Re(Ve, ve, ge, Ye, nt, "throw", Ke) }
                        Ye(void 0) }) } }

            function vt(S, x, ce) { var { isFromPrefilledAnswer: ve = !1 } = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, ge = (0, Or.G)(ce); return function() { var Ve = we(function*(Ye, nt) { var Ke = nt(),
                            mt = (0, F.GD)(Ke, S),
                            Kt = (0, F.Fx)(Ke, S),
                            nr = (0, ae.cY)(Ke); if (!!Kt && !(0, F.G8)(Ke)) { var Cr = B(Kt, x),
                                sn = (0, F.$z)(mt),
                                hn = (0, F.$z)(Cr); if (!Wt(sn, hn)) { var at = (0, ae.I6)(Ke),
                                    Hr = (0, J.jO)(Ke),
                                    Kr = (Ft, Cn) => { var yt = (0, Ct.s5)((0, ae.Bc)(Cn), Ft.type); return Ft.type !== b.xc && !yt }; if (!at && Kr(Kt, Ke) && !Hr) { var Ln = (0, xt.aD)(Kt);
                                    (0, Jt.lt)(nr, S, { hash: Ln, value: Array.isArray(x) ? x : [x] }) } if (yield Ye({ type: Se.qU, payload: { answer: Cr, navigationType: ge, isFromPrefilledAnswer: ve } }), yield Ye(jt(Kt.ref)), (0, ae.k$)(Ke) && Ye((0, Qr.hl)(!1)), le(Cr)) { var yn = (0, F.X2)(nt());
                                    Ye((0, on.D)(yn)) } if (Kt.application && !ve) { yield(0, xr.YN)(); var kt = (0, Ct.EK)(Ke, Kt.ref);
                                    Ye(kt ? (0, Fe.R2)(ce) : ln(Kt.ref, ce, { isFromPrefilledAnswer: ve })) } } } }); return function(Ye, nt) { return Ve.apply(this, arguments) } }() }

            function jt(S) { return function() { var x = we(function*(ce, ve) { var ge = ve(),
                            Ve = (0, F.Fx)(ge, S); if (!(!Ve || !(0, i.nN)(Ve.type))) { var Ye = (0, F.GD)(ge, S),
                                nt = (0, Lt.BZ)(ge),
                                Ke = yield Be(Ve, { value: Ye.value }, nt),
                                mt = !!De.J.includes(Ve == null ? void 0 : Ve.type);
                            ce({ type: Se.jD, payload: { blockRef: S, validationErrors: Ke, shouldAnswerBeFormatted: mt } }) } }); return function(ce, ve) { return x.apply(this, arguments) } }() } var Qt = S => (x, ce) => { var ve = ce(),
                    ge = (0, F.VX)(ve, S); if (!!ge) { var Ve = new Z.FU("fileUpload");
                    x({ type: Se.jD, payload: { blockRef: ge.ref, validationErrors: [Ve] } }) } };

            function jr(S, x) { return { type: Se.NO, payload: { ref: S, source: x } } }

            function kr(S) { return { type: Se.aR, payload: { ref: S } } }

            function Ht(S) { return { type: Se.fI, payload: { ref: S } } }

            function ln(S, x) { var { source: ce, isFromPrefilledAnswer: ve = !1, callerNavigationType: ge } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, Ve = ge || (0, Or.G)(x); return function() { var Ye = we(function*(nt, Ke) { nt(jr(S, ce)), yield nt(jt(S)); var mt = Ke(),
                            Kt = (0, F.Fx)(mt, S),
                            nr = (0, i.nN)(Kt.type),
                            Cr = (0, F.GD)(mt, S); if (nr && !(0, F.z5)(Cr)) return nt(Ht(S));
                        nt(kr(S)), nt((0, on.D)((0, F.X2)(mt))), nt((0, O.MN)(Kt ? (0, F.F5)(Kt) : void 0, { navigationType: Ve, isFromPrefilledAnswer: ve })) }); return function(nt, Ke) { return Ye.apply(this, arguments) } }() } }, 71510: (Yt, Ze, c) => { c.d(Ze, { MN: () => We, hA: () => Me }); var i = c(14132),
                b = c(44893),
                J = c(84028),
                Se = c(3547),
                De = c(86520),
                me = c(75273);

            function Pe(le, F, V, w, I, L, E) { try { var R = le[L](E),
                        Z = R.value } catch (C) { V(C); return }
                R.done ? F(Z) : Promise.resolve(Z).then(w, I) }

            function ze(le) { return function() { var F = this,
                        V = arguments; return new Promise(function(w, I) { var L = le.apply(F, V);

                        function E(Z) { Pe(L, w, I, E, R, "next", Z) }

                        function R(Z) { Pe(L, w, I, E, R, "throw", Z) }
                        E(void 0) }) } }

            function Me() { var { navigationType: le, isFromPrefilledAnswer: F = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}; return function() { var V = ze(function*(w, I) { var L = I(),
                            E = (0, i.Qi)(L),
                            R = (0, b.tK)(L); if (!E) { var Z = (0, b.Fx)(L, R); return Z.application ? void 0 : w((0, me.hl)(!0)) }
                        yield w((0, De.Dn)(R)); var C = (0, b.GD)(L, R); return C && !(0, b.z5)(C) ? w((0, De.yn)(R)) : w((0, me.IS)(E, { navigationType: le, isFromPrefilledAnswer: F })) }); return function(w, I) { return V.apply(this, arguments) } }() }

            function We(le) { var { navigationType: F, isFromPrefilledAnswer: V } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}; return (w, I) => { var L = I(); return (0, Se.ti)(L) ? w((0, me.Qh)({ navigationType: F, isFromPrefilledAnswer: V })) : w(B(le, { navigationType: F, isFromPrefilledAnswer: V })) } } var B = function(F) { var { navigationType: V, isFromPrefilledAnswer: w } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}; return (I, L) => { var E = L(),
                        R = (0, b.iu)(E, F),
                        Z = (0, b.Jz)(E),
                        C = Z.find(Ot => Ot.ref === R) != null; if (R && C) { var a = (0, J.Fi)(E, R) ? (0, i.mO)(E) : R; return I((0, me.IS)(a, { navigationType: V, isFromPrefilledAnswer: w })) } return I(Me({ navigationType: V })) } } }, 37223: (Yt, Ze, c) => { c.d(Ze, { IC: () => F, R2: () => ze, Rm: () => le, Xf: () => We, bq: () => B }); var i = c(86040),
                b = c(3547),
                J = c(44893),
                Se = c(83562),
                De = c(82462),
                me = c(75273),
                Pe = c(51585);

            function ze(V) { var w = (0, De.G)(V); return (I, L) => { var E = L(); if (I((0, Pe.D)((0, J.X2)(E))), I((0, Pe.Y)()), (0, Se.Bu)(E)) { var R = (0, b.I6)(E);
                        I((0, me.vm)()), I(Me(R, w)) } else { var Z = (0, b.ti)(E);
                        Z || I((0, me.dM)()), I((0, me.Qh)(w)) } } }

            function Me(V, w) { return { type: i.Fu, payload: { isLivePreview: V, navigationType: w } } }

            function We() { return { type: i.Zg } }

            function B(V, w) { return { type: i.p2, error: !0, payload: { retry: { timeout: V }, errorCode: w } } }

            function le(V, w, I, L) { return { type: i.$4, error: !0, payload: { message: V, errorCode: w, errorDescription: I, errorDetails: L } } }

            function F(V, w) { return (I, L) => { var E = L();
                    (0, b.Cf)(E, V) && I(ze(w)) } } }, 29253: (Yt, Ze, c) => { c.d(Ze, { Bu: () => Me, HS: () => w, iX: () => We, mK: () => B, p7: () => F, uw: () => V }); var i = c(18),
                b = c(96512);

            function J(I, L, E, R, Z, C, a) { try { var Ot = I[C](a),
                        wt = Ot.value } catch (Tt) { E(Tt); return }
                Ot.done ? L(wt) : Promise.resolve(wt).then(R, Z) }

            function Se(I) { return function() { var L = this,
                        E = arguments; return new Promise(function(R, Z) { var C = I.apply(L, E);

                        function a(wt) { J(C, R, Z, a, Ot, "next", wt) }

                        function Ot(wt) { J(C, R, Z, a, Ot, "throw", wt) }
                        a(void 0) }) } } var De = "".concat(b.V.apiHost, "/").concat(b.V.endpoints.forms),
                me = { "Content-Type": "application/json; charset=UTF-8", Accept: "application/json" },
                Pe = function() { var I = Se(function*(L) { var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}; try { var R = yield fetch(L, E); return R.ok ? yield R.json() : Promise.reject(Error(R.status, { cause: R.status })) } catch (Z) { return Promise.reject(Z) } }); return function(E) { return I.apply(this, arguments) } }(),
                ze = function() { var I = Se(function*(L, E) { var R = { body: JSON.stringify(E), headers: me, method: "POST" }; try { var Z = yield fetch(L, R); return Z.ok ? Z.json() : Promise.reject(yield Z.json()) } catch (C) { return Promise.reject(C) } }); return function(E, R) { return I.apply(this, arguments) } }(),
                Me = (I, L) => { var E = "".concat(De).concat(I, "/").concat(b.V.endpoints.landings),
                        R = { visit_response_id: L }; return ze(E, R) },
                We = function() { var I = Se(function*(L) { var { formId: E, landingId: R, landingAt: Z, values: C, payment: a, outcome: Ot, formPublicKey: wt, featureFlags: Tt, thankYouScreenRef: ue = "default_tys" } = L, $e = "".concat(De).concat(E, "/").concat(b.V.endpoints.submissions), dt = (yield Promise.all([c.e(246), c.e(89), c.e(680)]).then(c.bind(c, 52949))).default, gt = yield dt({ formId: E, landingAt: Z, landingId: R, payment: a, values: C, outcome: Ot, formPublicKey: wt, featureFlags: Tt, thankYouScreenRef: ue }); return ze($e, gt) }); return function(E) { return I.apply(this, arguments) } }(),
                B = function() { var I = Se(function*(L, E) { var R = "".concat(De).concat(L, "/").concat(b.V.endpoints.uploads).concat(E, "/upload-credentials"); try { return yield Pe(R) } catch (Z) { return Promise.reject(Error("credentials-error")) } }); return function(E, R) { return I.apply(this, arguments) } }(),
                le = I => I.replace(/[`~!@#$%^&*()_|+\-=?;:'",<>{}[\]\\/\s]/g, "_"),
                F = function(L) { var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        R = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : i.Z,
                        Z = le(L.name),
                        { bucket: C } = E,
                        a = "https://".concat(C, ".s3.amazonaws.com"); return new Promise((Ot, wt) => { var Tt = new XMLHttpRequest;
                        Tt.open("POST", a, !0), Tt.setRequestHeader("Access-Control-Allow-Origin", "*"), Tt.onload = () => { if (Tt.status < 200 || Tt.status >= 299) return wt(new Error(Tt.response && Tt.response.code || "s3-upload-error")); var dt = "".concat(E.token, "-").concat(Z);
                            Ot(dt) }, Tt.onerror = () => wt(new Error("s3-connection-error")); var ue = dt => { var gt = dt.loaded / dt.total;
                                R(gt) },
                            $e = new FormData;
                        Tt.upload.addEventListener("progress", ue, !1), $e.append("key", "".concat(E.folder).concat(E.token)), $e.append("AWSAccessKeyId", E.key), E.security_token && $e.append("x-amz-security-token", E.security_token), $e.append("acl", E.acl), $e.append("policy", E.policy), $e.append("signature", E.signature), $e.append("file", L), $e.append("successActionRedirect", E.success_action_redirect), Tt.send($e) }) },
                V = function() { var I = Se(function*(L) { var E = { headers: { Accept: "application/json", "Access-Control-Allow-Origin": "*" } }; try { var R = (yield Pe(L, E)) || { has_alpha: !1 }; return !R.has_alpha } catch (Z) { return Z.cause ? Promise.reject(Z) : Promise.reject(Error("crop-prop-from-image-error")) } }); return function(E) { return I.apply(this, arguments) } }(),
                w = function() { var I = Se(function*(L) { var E = "".concat(De).concat(L, "/insights/submissions"); try { var R = yield Pe(E); return R.submissions } catch (Z) { return Z.cause ? Promise.reject(Z) : Promise.reject(Error("get-number-of-submissions-error")) } }); return function(E) { return I.apply(this, arguments) } }() }, 52949: (Yt, Ze, c) => { c.r(Ze), c.d(Ze, { default: () => rr }); var i = c(30999),
                b = c(6258),
                J = c(64923),
                Se = c(56618),
                De = c(14132),
                me = c(34296);

            function Pe(se, A) { var ke = Object.keys(se); if (Object.getOwnPropertySymbols) { var he = Object.getOwnPropertySymbols(se);
                    A && (he = he.filter(function(rt) { return Object.getOwnPropertyDescriptor(se, rt).enumerable })), ke.push.apply(ke, he) } return ke }

            function ze(se) { for (var A = 1; A < arguments.length; A++) { var ke = arguments[A] != null ? arguments[A] : {};
                    A % 2 ? Pe(Object(ke), !0).forEach(function(he) { Me(se, he, ke[he]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(se, Object.getOwnPropertyDescriptors(ke)) : Pe(Object(ke)).forEach(function(he) { Object.defineProperty(se, he, Object.getOwnPropertyDescriptor(ke, he)) }) } return se }

            function Me(se, A, ke) { return A in se ? Object.defineProperty(se, A, { value: ke, enumerable: !0, configurable: !0, writable: !0 }) : se[A] = ke, se }

            function We(se, A, ke, he, rt, ht, It) { try { var bt = se[ht](It),
                        zt = bt.value } catch (Mt) { ke(Mt); return }
                bt.done ? A(zt) : Promise.resolve(zt).then(he, rt) }

            function B(se) { return function() { var A = this,
                        ke = arguments; return new Promise(function(he, rt) { var ht = se.apply(A, ke);

                        function It(zt) { We(ht, he, rt, It, bt, "next", zt) }

                        function bt(zt) { We(ht, he, rt, It, bt, "throw", zt) }
                        It(void 0) }) } } var le = {
                    [J.Hu]: "date", [J.yb]: "text", [J.ML]: "file_name", [J.l8]: "boolean", [J.oP]: "text", [J.aR]: "choices", [J.Wu]: "number", [J.xg]: "number", [J.Jx]: "choices", [J.Si]: "number", [J.cy]: "url", [J.Xj]: "boolean", [J.xc]: "payment", [J.LI]: "choices" },
                F = (se, A) => A.properties.choices.find(ke => ke.ref === se),
                V = (se, A) => { var ke = se.map(he => { var rt = F(he, A); return rt ? { id: rt.id, label: rt.label } : null }); return ke.filter(he => he !== null) },
                w = (se, A) => { var ke = V(A, se); return ke.length ? ke[0].label : A[0] };

            function I(se) { var [A, ke, he] = se.split("-"), rt = "".concat(A.padStart(4, "0"), "-").concat(ke.padStart(2, "0"), "-").concat(he.padStart(2, "0")); return new Date(rt).toISOString() }

            function L(se, A, ke, he) { return { field: { id: se, type: A }, type: ke, [ke]: he } }

            function E(se, A, ke, he, rt) { return R.apply(this, arguments) }

            function R() { return R = B(function*(se, A, ke, he, rt) { var { block: ht, answer: It } = se, bt = It !== void 0 ? It[0] : "", zt = le[ht.type], Mt = (0, Se.k)(ht.definition, It, { featureFlags: rt }); if (Mt) return Mt; switch (ht.type) {
                        case J.yb:
                            bt = w(ht, It); break;
                        case J.Hu:
                            bt = I(bt); break;
                        case J.ML:
                            bt = bt.s3Filename; break;
                        case J.xc:
                            bt = ze({ amount: A, currency: ht.currency, name: bt.cardholdersName }, ke); break;
                        case J.cy:
                        case J.oP:
                            if (bt === "") return null; if (bt && (0, De.s5)(he, ht.type)) { var { encryptAsAnon: lr } = yield Promise.all([c.e(35), c.e(84)]).then(c.bind(c, 45832));
                                bt = lr(bt, he) } break;
                        default:
                            return L(ht.id, ht.type, zt, bt) } return L(ht.id, ht.type, zt, bt) }), R.apply(this, arguments) } var Z = se => se && se.type !== void 0,
                C = (se, A, ke, he, rt) => Promise.all(se.map(ht => E(ht, A, ke, he, rt))),
                a = function() { var se = B(function*(A, ke, he, rt, ht) { var It = yield C(A, ke, he, rt, ht); return (0, i.xHg)(It).filter(Z) }); return function(ke, he, rt, ht, It) { return se.apply(this, arguments) } }();

            function Ot(se) { return Object.keys(se).map(A => ({ key: A, value: se[A] })) }

            function wt(se, A) { var ke = se[A.variable],
                    he = A.choices.find(rt => rt.ref === ke); if (!he) throw new me.Z("MISSING_WINNING_OUTCOME", "Could not find matching winning outcome", "winningOutcomeRef:  ".concat(se[A.variable])); return he }

            function Tt(se, A) { var ke = (0, i.CEd)(["price"], se); return Object.keys(ke).map(he => { if (A && he === A.variable) { var rt = wt(se, A); return { key: he, type: "outcome_id", outcome_id: rt.id } } var ht = se[he],
                        It = typeof ht == "string" ? "text" : "number"; return { key: he, type: It, [It]: ht } }) }

            function ue(se, A) { if (!A) return null; var ke = wt(se, A); return { id: ke.id, title: ke.title } }

            function $e() { var se = b.Z.get("hubspotutk") || null; return se === null ? null : { hubspot: { utk: se, page_name: document.title, page_url: window.location.href } } }

            function dt(se) { return gt.apply(this, arguments) }

            function gt() { return gt = B(function*(se) { var { formId: A, landingAt: ke = "", landingId: he, payment: rt, values: { answers: ht = [], hidden: It = {}, variables: bt = {} } = {}, outcome: zt, formPublicKey: Mt, featureFlags: lr, thankYouScreenRef: Nr = "default_tys" } = se, br = Ot(It), Er = Tt(bt, zt), Mr = ue(bt, zt), _r = yield a(ht, bt.price, rt, Mt, lr), Dr = $e(); return ze(ze(ze(ze(ze(ze({ signature: he, form_id: A, landed_at: parseInt(ke) }, br.length ? { hidden: br } : null), Er.length ? { variables: Er } : null), _r.length ? { answers: _r } : null), Dr ? { integrations_metadata: Dr } : null), Mr ? { outcome: Mr } : null), {}, { thankyou_screen_ref: Nr }) }), gt.apply(this, arguments) } const rr = dt }, 12209: (Yt, Ze, c) => { c.r(Ze), c.d(Ze, { BTN_MODE: () => Wt, UTM_CONTENT_THANKYOU_FOOTER: () => N, default: () => on, getCustomRedirectUrl: () => Qr }); var i = c(36601),
                b = c(8941),
                J = c(72814),
                Se = c(98153),
                De = c(94476),
                me = c(75273),
                Pe = c(26633),
                ze = c(84028),
                Me = c(44893),
                We = c(3547),
                B = c(91360),
                le = O => !!O.form.outcome,
                F = O => !!(O.form.hidden && Object.keys(O.form.hidden).includes("utm_source")),
                V = c(77923),
                w = c(54325),
                I = c(71383),
                L = c(40102),
                E = c(96105),
                R = c(9034),
                Z = c(68656),
                C = c(33552),
                a = c(2380),
                Ot = c(29770),
                wt = c(23426),
                Tt = c(32315),
                ue = c(81006),
                $e = c(90383),
                dt = c(64354),
                gt = c(99395),
                rr = [{ name: "Facebook", icon: I.createElement($e.Z, null), link: "https://www.facebook.com/sharer/sharer.php?u=", utmSource: "facebook" }, { name: "Twitter", icon: I.createElement(dt.Z, null), link: "https://twitter.com/intent/tweet?url=", utmSource: "twitter" }, { name: "LinkedIn", icon: I.createElement(gt.Z, null), link: "https://www.linkedin.com/shareArticle?url=", utmSource: "linkedin" }]; const se = rr; var A = c(14246),
                ke = c(13796),
                he = c(82462),
                rt = c(72090),
                ht = c(97056),
                It = c(38832),
                bt = c(93276),
                zt = c(10995),
                Mt = c.n(zt),
                lr = c(46284),
                Nr = c(610),
                br = ["link", "utmSource"];

            function Er(O, Fe) { var Re = Object.keys(O); if (Object.getOwnPropertySymbols) { var we = Object.getOwnPropertySymbols(O);
                    Fe && (we = we.filter(function(vt) { return Object.getOwnPropertyDescriptor(O, vt).enumerable })), Re.push.apply(Re, we) } return Re }

            function Mr(O) { for (var Fe = 1; Fe < arguments.length; Fe++) { var Re = arguments[Fe] != null ? arguments[Fe] : {};
                    Fe % 2 ? Er(Object(Re), !0).forEach(function(we) { _r(O, we, Re[we]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(Re)) : Er(Object(Re)).forEach(function(we) { Object.defineProperty(O, we, Object.getOwnPropertyDescriptor(Re, we)) }) } return O }

            function _r(O, Fe, Re) { return Fe in O ? Object.defineProperty(O, Fe, { value: Re, enumerable: !0, configurable: !0, writable: !0 }) : O[Fe] = Re, O }

            function Dr(O, Fe) { if (O == null) return {}; var Re = rn(O, Fe),
                    we, vt; if (Object.getOwnPropertySymbols) { var jt = Object.getOwnPropertySymbols(O); for (vt = 0; vt < jt.length; vt++) we = jt[vt], !(Fe.indexOf(we) >= 0) && (!Object.prototype.propertyIsEnumerable.call(O, we) || (Re[we] = O[we])) } return Re }

            function rn(O, Fe) { if (O == null) return {}; var Re = {},
                    we = Object.keys(O),
                    vt, jt; for (jt = 0; jt < we.length; jt++) vt = we[jt], !(Fe.indexOf(vt) >= 0) && (Re[vt] = O[vt]); return Re } var nn = "typeform-ty-screen-ref",
                Zr = (O, Fe) => { var Re = O.indexOf("?") > 0 ? "&" : "?"; return "".concat(O).concat(Re, "utm_source=").concat(Fe, "&utm_content=typeform_social") },
                Wr = (O, Fe, Re) => { if (!(0, Nr.F)()) return ""; var we = "".concat(window.location.origin).concat(window.location.pathname); return O && (we = "".concat(we, "?").concat(nn, "=").concat(O)), Fe && (we = Zr(we, Re)), we },
                Gr = O => { var { providers: Fe, thankYouScreenRef: Re, appendUtmSourceParam: we } = O; return Fe.map(vt => { var { link: jt, utmSource: Qt } = vt, jr = Dr(vt, br), kr = "".concat(Wr(Re, we, Qt)), Ht = encodeURIComponent(kr); return Mr({ link: "".concat(jt).concat(Ht) }, jr) }) },
                Br = O => { var { providers: Fe, thankYouScreenRef: Re, appendUtmSourceParam: we, layoutType: vt, onClick: jt } = O, Qt = Gr({ providers: Fe, thankYouScreenRef: Re, appendUtmSourceParam: we }); return I.createElement(lr.Z, { layoutType: vt, onClick: jt, providers: Qt }) };
            Br.propTypes = { appendUtmSourceParam: Mt().bool, layoutType: Mt().string, onClick: Mt().func, position: Mt().oneOf(["center", "start"]), providers: Mt().arrayOf(Mt().shape({ icon: Mt().node, link: Mt().string, name: Mt().string })), thankYouScreenRef: Mt().string }, Br.defaultProps = { providers: [] }; const $r = Br;

            function $t() { return $t = Object.assign ? Object.assign.bind() : function(O) { for (var Fe = 1; Fe < arguments.length; Fe++) { var Re = arguments[Fe]; for (var we in Re) Object.prototype.hasOwnProperty.call(Re, we) && (O[we] = Re[we]) } return O }, $t.apply(this, arguments) } var te = { button: Z.Bb, background: Z.Bb, primary: Z.Bb, secondary: Z.Bb, buttonContent: Z.Bb },
                Vr = (O, Fe) => { O ? (0, w.fD)(O, Fe) : window.location.reload() },
                Yr = O => { var Fe, { brandingUrl: Re, brandLogo: we, hasUtmSource: vt = !1, isFocusable: jt, isPulseSurveyVariant: Qt, isRedirectEnabled: jr = !0, isWinningOutcome: kr = !1, screenDetails: Ht, showBranding: ln, showScreen: S, t: x = Nt => Nt, theme: ce, trackBrandingCtaClick: ve, trackButtonClick: ge, trackSocialIconClick: Ve, blockHeightChanging: Ye, formId: nt } = O,
                        Ke = (0, I.useRef)(null),
                        mt = (0, I.useRef)(null),
                        Kt = (0, I.useRef)(null),
                        nr = (0, I.useRef)(),
                        Cr = (0, wt.T)(),
                        [sn, hn] = (0, I.useState)(!Cr),
                        { colors: at = te } = ce,
                        Hr = (0, I.useCallback)(() => { ve(Ht.ref) }, [ve, Ht]); if ((0, I.useLayoutEffect)(() => { if (Ke.current && jt && S) { var Nt = setTimeout(() => { var Je;
                                    (Je = Ke.current) === null || Je === void 0 || Je.focus() }, R.Ok); return () => clearTimeout(Nt) } }, [jt, S]), (0, I.useEffect)(() => { Cr && hn(!1) }, [Cr]), (0, I.useEffect)(() => { if (S) { var Nt, Je, fr = ((mt == null || (Nt = mt.current) === null || Nt === void 0 ? void 0 : Nt.scrollHeight) || 0) + ((Kt == null || (Je = Kt.current) === null || Je === void 0 ? void 0 : Je.clientHeight) || 0);
                                Ye(fr) } }, [Ke.current, S, mt, Kt]), !Ht || !Object.keys(Ht).length) return null; var { layout: Kr, shareIcons: Ln, showButton: yn } = Ht, { description: kt, title: Ft, buttonLabel: Cn = "" } = Ht, yt = ((Fe = Ht.layout) === null || Fe === void 0 ? void 0 : Fe.attachment) || Ht.attachment, Jn = (Kr == null ? void 0 : Kr.type) || (0, C.W)(yt), Sn = () => {!Cr && (yt == null ? void 0 : yt.type) === Ot.k.video && hn(!sn) }, Pn = Nt => {!S || ((0, rt.$o)(Nt.nativeEvent) && Sn(), yn && Nt.key === Tt.Z.ENTER && (Nt.stopPropagation(), Sr(Nt))) }, Sr = Nt => { if (!!jr) { var { ref: Je, redirectUrl: fr, buttonMode: St } = Ht, { buttonLabel: Xn } = Ht, wn = (0, he.G)(Nt);
                            nr.current || ge(Je, St, Xn, wn), nr.current = setTimeout(() => { var Tn = (0, ht.Z)() && !!window.location.search.match(/typeform-embed-handle-ending-button-click=true/i);
                                Tn ? A.UQ(nt) : Vr(fr || "", nt) }, ue.sZ) } }, Fr = Nt => { var Je = Nt.toLowerCase();
                        Ve(Je) }; return I.createElement(R.ZP, { isVisible: S, duration: ue.OI }, I.createElement(bt.Q, { "data-qa": "thank-you-screen-wrapper", isVisible: S, ref: Ke, onKeyDown: Pn, tabIndex: -1 }, I.createElement(L.Z, $t({ attachment: yt, brandingMotto: (0, ke.Z)(x("label.branding.motto")), brandingText: (0, ke.Z)(x("label.branding.create")), brandingUrl: Re }, Qt ? null : { brandLogo: we }, { buttonColor: at.button, buttonContent: (0, ke.Z)(x(Cn)), buttonContentColor: at.buttonContent, buttonDataQa: "thank-you-button", buttonEnabled: !!yn, contentRef: mt, contextBackgroundColor: at.background, dataQa: "thank-you-screen".concat(S ? "-visible" : "", " deep-purple-thank-you-screen").concat(S ? "-visible" : ""), hasAttachmentFixedHeight: (0, It.F)(), helperColor: at.primary, helperText: (0, ke.Z)(x("label.buttonHint.default")), isBrandingEnabled: ln, isVideoPlaying: sn, key: Ht.ref, layoutPlacement: Kr == null ? void 0 : Kr.placement, layoutType: Jn, onBrandingBtnClick: Hr, onButtonClick: Sr, onVideoClick: Sn, pexelsApiKey: "563492ad6f9170000100000155494c9d9440421cbf19eb5eaac4615e", secondaryColor: at == null ? void 0 : at.secondary, showScreen: S, stickyFooterRef: Kt }), I.createElement(I.Fragment, null, Ft && I.createElement(E.ZP, { color: at.primary, htmlTag: "h1", type: a.jA.screenTitle }, Qt ? (0, ke.Z)(`*We appreciate your feedback!*
 We'll use it to make Typeform better.`) : Ft), kt && I.createElement(E.ZP, { color: at.primary, htmlTag: "p", type: a.jA.screenDescription }, kt)), Ln && I.createElement($r, { appendUtmSourceParam: vt, layoutType: Jn, onClick: Fr, providers: se, thankYouScreenRef: kr ? Ht.ref : null })))) }; const an = Yr;

            function gn(O, Fe) { var Re = Object.keys(O); if (Object.getOwnPropertySymbols) { var we = Object.getOwnPropertySymbols(O);
                    Fe && (we = we.filter(function(vt) { return Object.getOwnPropertyDescriptor(O, vt).enumerable })), Re.push.apply(Re, we) } return Re }

            function sr(O) { for (var Fe = 1; Fe < arguments.length; Fe++) { var Re = arguments[Fe] != null ? arguments[Fe] : {};
                    Fe % 2 ? gn(Object(Re), !0).forEach(function(we) { Ur(O, we, Re[we]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(Re)) : gn(Object(Re)).forEach(function(we) { Object.defineProperty(O, we, Object.getOwnPropertyDescriptor(Re, we)) }) } return O }

            function Ur(O, Fe, Re) { return Fe in O ? Object.defineProperty(O, Fe, { value: Re, enumerable: !0, configurable: !0, writable: !0 }) : O[Fe] = Re, O } var N = "typeform-thankyou",
                Be = "typeform-thankyoubutton",
                Qe = "typeform-endscreen",
                Ct = "typeform-endscreenbutton",
                ae = "default_link",
                xt = "custom-endscreenbutton",
                Lt = "typeform-endscreenbutton",
                Jt = "branded-ty-button",
                Wt = { RELOAD: "reload", REDIRECT: "redirect", REDIRECT_DEFAULT: "default_redirect" },
                Or = (O, Fe) => { var Re = (0, ze.pY)(O),
                        we = Qr(O, Re ? N : Qe),
                        vt = (0, ze.un)(O) || {},
                        { redirectUrl: jt, ref: Qt, buttonLabel: jr = Fe.t(Jt), buttonMode: kr } = vt,
                        Ht = () => { switch (kr) {
                                case Wt.RELOAD:
                                    return null;
                                case Wt.REDIRECT:
                                    return jt;
                                case Wt.REDIRECT_DEFAULT:
                                default:
                                    return Qr(O, Qt === ze.f3 ? Be : Ct) } },
                        ln = (0, We.qC)(O) && !(kr === Wt.REDIRECT_DEFAULT && jr === Fe.t(Jt)); return { isDefaultThankyouScreen: Re, isRedirectEnabled: !(0, We.I6)(O), isWinningOutcome: le(O), screenDetails: sr(sr({}, vt), {}, { buttonLabel: jr, redirectUrl: Ht() }), showScreen: (0, Me.Us)(O), theme: (0, B.gh)(O), isFocusable: (0, Me.S1)(O), isPulseSurveyVariant: (0, Se.lA)(O), brandingUrl: we, hasUtmSource: F(O), showBranding: ln, brandLogo: (0, B.uI)(O), formId: (0, We.cY)(O) } },
                xr = O => { var Fe = (we, vt, jt, Qt) => { if (we === ze.f3) return (0, De.JD)(Be); switch (vt) {
                                case Wt.RELOAD:
                                    return (0, De.rm)(ae, Qt);
                                case Wt.REDIRECT:
                                    return (0, De.rm)(xt, Qt, jt);
                                case Wt.REDIRECT_DEFAULT:
                                    return (0, De.JD)(Lt, Qt);
                                default:
                            } },
                        Re = we => { var vt = we === ze.f3 ? N : Qe; return (0, De.JD)(vt) }; return sr({}, (0, b.DE)({ trackBrandingCtaClick: we => Re(we), trackButtonClick: (we, vt, jt, Qt) => Fe(we, vt, jt, Qt), trackSocialIconClick: De.ow, blockHeightChanging: me.Gc }, O)) },
                Qr = (O, Fe) => (0, We.I6)(O) ? null : (0, V.il)(O)(w.OI, Fe); const on = (0, Pe.Z)((0, i.$j)(Or, xr)((0, Pe.Z)((0, J.Ng)(an)))) }, 38295: (Yt, Ze, c) => { c.r(Ze), c.d(Ze, { default: () => F }); var i = c(71383),
                b = c(10995),
                J = c.n(b),
                Se = c(97489),
                De = c(68656),
                me = c(8556),
                Pe = c(11157),
                ze = c(41004),
                Me = c(80951),
                We;

            function B(V, w) { return w || (w = V.slice(0)), Object.freeze(Object.defineProperties(V, { raw: { value: Object.freeze(w) } })) } var le = Se.ZP.div.withConfig({ displayName: "offline-mode-badge__Root", componentId: "sc-ti9iri-0" })(We || (We = B([`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background: `, `;
  color: `, `;
  border-radius: 3px;
  height: 32px;
  width: 32px;
  right: 8px;
  top: 8px;
`])), V => V.backgroundColor, V => V.contentColor);

            function F(V) { var { theme: w } = V, [I, L] = (0, i.useState)(window.navigator.onLine), [E, R] = (0, i.useState)((0, Me.vm)().length); return (0, i.useEffect)(() => { var Z = () => { L(window.navigator.onLine) }; return window.addEventListener("online", Z), window.addEventListener("offline", Z), () => { window.removeEventListener("online", Z), window.removeEventListener("offline", Z) } }, []), (0, i.useEffect)(() => { var Z = setInterval(() => { R((0, Me.vm)().length) }, 1e3); return () => { clearInterval(Z) } }, []), window.navigator.serviceWorker.controller ? E === 0 ? i.createElement(le, { backgroundColor: w.colors.button, contentColor: (0, De.$p)(w.colors.button) }, i.createElement(Pe.Z, { svg: me.Z, color: (0, De.$p)(w.colors.button) })) : I && E > 0 ? i.createElement(le, { backgroundColor: w.colors.button, contentColor: (0, De.$p)(w.colors.button) }, i.createElement(ze.Z, { color: (0, De.$p)(w.colors.button) })) : i.createElement(le, { backgroundColor: w.colors.button, contentColor: (0, De.$p)(w.colors.button) }, E) : null }
            F.propTypes = { theme: J().object } }, 65199: (Yt, Ze, c) => { c.d(Ze, { b: () => i }); var i = "sticky_footer" }, 10619: (Yt, Ze, c) => { c.d(Ze, { Z: () => b }); var i = { approve_with_id: "label.paymentError.unauthorized", not_permitted: "label.paymentError.unauthorized", card_declined: "label.paymentError.declinedCard", call_issuer: "label.paymentError.declinedCard", do_not_honor: "label.paymentError.declinedCard", do_not_try_again: "label.paymentError.declinedCard", generic_decline: "label.paymentError.declinedCard", lost_card: "label.paymentError.declinedCard", merchant_blacklist: "label.paymentError.declinedCard", no_action_taken: "label.paymentError.declinedCard", revocation_of_all_authorizations: "label.paymentError.declinedCard", revocation_of_authorization: "label.paymentError.declinedCard", security_violation: "label.paymentError.declinedCard", service_not_allowed: "label.paymentError.declinedCard", stolen_card: "label.paymentError.declinedCard", stop_payment_order: "label.paymentError.declinedCard", transaction_not_allowed: "label.paymentError.declinedCard", fraudulent: "label.paymentError.declinedCard", pickup_card: "label.paymentError.declinedCard", restricted_card: "label.paymentError.declinedCard", try_again_later: "label.paymentError.declinedCard", card_velocity_exceeded: "label.paymentError.exceededBalance", withdrawal_count_limit_exceeded: "label.paymentError.exceededBalance", currency_not_supported: "label.paymentError.unsupportedCurrency", duplicate_transaction: "label.paymentError.duplicateTransaction", expired_card: "label.paymentError.expiredCard", incorrect_number: "label.paymentError.invalidCardNumber", invalid_number: "label.paymentError.invalidCardNumber", incorrect_cvc: "label.paymentError.invalidCvc", invalid_cvc: "label.paymentError.invalidCvc", incorrect_zip: "label.paymentError.invalidZip", invalid_expiry_year: "label.paymentError.invalidExpiryYear", invalid_expiry_year_past: "label.paymentError.pastExpiryYear", invalid_expiry_month_past: "label.paymentError.pastExpiryMonth", insufficient_funds: "label.paymentError.insufficientFunds", invalid_account: "label.paymentError.invalidAccount", new_account_information_available: "label.paymentError.invalidAccount", issuer_not_available: "label.paymentError.unavailableIssuer", processing_error: "label.paymentError.cardProcessingError", reenter_transaction: "label.paymentError.issuerProcessingError", testmode_decline: "label.paymentError.declinedTestMode", card_not_supported: "label.paymentError.unsupportedCard", live_mode_test_card: "label.paymentError.stripeNotConnected", test_mode_live_card: "label.paymentError.stripeNotConnected", testmode_charges_only: "label.paymentError.stripeNotConnected", invalid_amount: "label.paymentError.invalidAmount", incomplete_number: "label.paymentError.cardNumberIncomplete", incomplete_cvc: "label.paymentError.cardCvcIncomplete", incomplete_expiry: "label.paymentError.cardExpiryIncomplete", api_connection_error: "stripe_connection_error", payment_method_unactivated: "label.paymentError.cardProcessingError", payment_method_unexpected_state: "label.paymentError.cardProcessingError", payment_intent_authentication_failure: "label.paymentError.authenticationFailure", payment_intent_incompatible_payment_method: "label.paymentError.cardProcessingError", payment_intent_invalid_parameter: "label.paymentError.cardProcessingError", payment_intent_payment_attempt_failed: "label.paymentError.cardProcessingError", payment_intent_unexpected_state: "label.paymentError.cardProcessingError" }; const b = i }, 56187: (Yt, Ze, c) => { c.d(Ze, { AJ: () => We, QZ: () => ze, SH: () => Pe, ZP: () => B, jK: () => Me }); var i = c(59748);

            function b(le, F) { var V = Object.keys(le); if (Object.getOwnPropertySymbols) { var w = Object.getOwnPropertySymbols(le);
                    F && (w = w.filter(function(I) { return Object.getOwnPropertyDescriptor(le, I).enumerable })), V.push.apply(V, w) } return V }

            function J(le) { for (var F = 1; F < arguments.length; F++) { var V = arguments[F] != null ? arguments[F] : {};
                    F % 2 ? b(Object(V), !0).forEach(function(w) { Se(le, w, V[w]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(le, Object.getOwnPropertyDescriptors(V)) : b(Object(V)).forEach(function(w) { Object.defineProperty(le, w, Object.getOwnPropertyDescriptor(V, w)) }) } return le }

            function Se(le, F, V) { return F in le ? Object.defineProperty(le, F, { value: V, enumerable: !0, configurable: !0, writable: !0 }) : le[F] = V, le } var De = { parentFormId: "", showAfterSubmission: !1, isActive: !1, submit: {} },
                me = (0, i.oM)({ name: "pulseSurvey", initialState: De, reducers: { setShowAfterSubmission: (le, F) => { le.showAfterSubmission = F.payload }, activate: le => { le.isActive = !0 }, deactivate: le => { le.isActive = !1 }, setSubmitProperties: (le, F) => { le.submit = J({}, F.payload) } } }),
                { setShowAfterSubmission: Pe, activate: ze, deactivate: Me, setSubmitProperties: We } = me.actions; const B = me.reducer }, 26633: (Yt, Ze, c) => { c.d(Ze, { Z: () => b }); var i = c(32592); const b = i.Z }, 21176: (Yt, Ze, c) => { c.d(Ze, { QW: () => De, ZP: () => me, oj: () => Se }); var i = c(59748),
                b = { showBrandHeader: !0 },
                J = (0, i.oM)({ name: "layout", initialState: b, reducers: { showBrandHeader: Pe => { Pe.showBrandHeader = !0 }, hideBrandHeader: Pe => { Pe.showBrandHeader = !1 } } }),
                { showBrandHeader: Se, hideBrandHeader: De } = J.actions; const me = J.reducer }, 21874: (Yt, Ze, c) => { c.d(Ze, { E3: () => b, XN: () => Se, ZP: () => De }); var i = c(59748),
                b = { isActive: !1 },
                J = (0, i.oM)({ name: "portalState", initialState: b, reducers: { setIsPortalActive: (me, Pe) => { me.isActive = Pe.payload } } }),
                { setIsPortalActive: Se } = J.actions; const De = J.reducer }, 5951: (Yt, Ze, c) => { c.d(Ze, { lp: () => Yr, IJ: () => nn, vb: () => lr, jq: () => Zr, Of: () => an }); var i = c(92673),
                b = c(98153),
                J = c(56187),
                Se = c(9970),
                De = c(4567),
                me = c(86040),
                Pe = () => ({ type: me.Ov, payload: {} }),
                ze = () => ({ type: me.Nb, payload: {} }),
                Me = c(37223);

            function We(N) { return { type: me.ab, payload: N } }

            function B(N) { return { type: me.KH, payload: N } } var le = c(75273),
                F = c(86520),
                V = c(29253),
                w = c(10619),
                I = c(81006),
                L = c(3547),
                E = c(44893),
                R = c(11255),
                Z = c(84028),
                C = c(83562),
                a = c(85800),
                Ot = c(45731),
                wt = c(44376),
                Tt = c(77923),
                ue = c(34296),
                $e = c(54325),
                dt = 1e3,
                gt = 1.8,
                rr = 6,
                se = "VALIDATION_ERROR",
                A = "FORM_CHANGED",
                ke = "RULE_MATCHED",
                he = "FILE_NOT_UPLOADED",
                rt = "stripe",
                ht = "PAYMENT_ERROR",
                It = [5, 10, 15, 30],
                bt = N => N * dt,
                zt = N => Math.floor(Math.pow(gt, N)),
                Mt = N => { var Be = It.length,
                        Qe = N > Be ? It[Be - 1] : It[N - I.YW]; return N ? Qe : 1 },
                lr = N => { var { code: Be, details: Qe } = N; return Be === se && Qe && Qe.length && Qe[0].code === ke },
                Nr = N => { var { code: Be, details: Qe } = N; return Be === se && (Qe == null ? void 0 : Qe.length) && Qe[0].code === he },
                br = N => lr(N) ? "label.error.ruleMatched" : N.code === A ? "label.error.formChanged" : "label.error.generic",
                Er = N => N.decline_code || N.code || N.type,
                Mr = N => { var Be = N && N.code; return Be === ht && N.details && N.details.length && (Be = N.details[0].code), Nr(N) && (Be = N.details[0].code), Be },
                _r = N => N && N.description,
                Dr = N => N && N.details,
                rn = (N, Be) => w.Z[Be] || br(N),
                nn = N => N.hasOwnProperty("token") ? N : { response_id: N.submission.response_id, token: N.signature, landed_at: N.submission.landed_at };

            function* Zr() { for (var N, Be = 0, Qe = yield(0, i.Ys)(L.cY), Ct = yield(0, i.Ys)(Tt.MQ), ae = yield(0, i.Ys)(b.jO); !N;) try { N = yield(0, i.RE)(V.Bu, Qe, Ct); var xt = nn(N); if (ae) return yield(0, i.gz)((0, J.AJ)({ landingId: xt.token, landingAt: xt.landed_at, responseId: xt.response_id }));
                    yield(0, i.gz)((0, De.Hm)(xt.token, xt.landed_at, xt.response_id)) } catch (Wt) { if (lr(Wt)) { var Lt = yield(0, i.Ys)(E.G8),
                            Jt = Lt ? ze : Pe;
                        yield(0, i.gz)(Jt()), N = !0; return }
                    ae ? yield(0, i.gz)((0, J.AJ)({})) : yield(0, i.gz)((0, De.NQ)(Wt)), yield(0, i.gw)(bt(zt(Be % rr))), Be++ } }

            function* Wr() { for (; yield(0, i.Ys)(R.SO);) yield(0, i.gw)(dt), yield(0, i.gz)((0, De.U9)()) }

            function* Gr(N, Be) { yield(0, i.gw)(dt / 2), yield(0, i.gz)((0, Me.bq)(N, Be)), yield* Wr(), yield* an() }

            function* Br(N) { var Be, Qe = yield(0, i.Ys)(R.fb),
                    Ct = yield(0, i.Ys)(L.cY),
                    ae = yield(0, i.Ys)(E.uc),
                    xt = yield(0, i.Ys)(L.Bc),
                    Lt = yield(0, i.Ys)(wt.BZ),
                    Jt = (Be = yield(0, i.Ys)(Z.un)) === null || Be === void 0 ? void 0 : Be.ref,
                    Wt = yield(0, i.Ys)(b.jO),
                    Or, xr; return Wt ? (Or = yield(0, i.Ys)(b._e), xr = yield(0, i.Ys)(b.KP)) : (Or = yield(0, i.Ys)(R.d_), xr = yield(0, i.Ys)(R.lI)), yield(0, i.RE)(V.iX, { formId: Ct, landingId: Or, landingAt: xr, values: Qe, payment: N, outcome: ae, formPublicKey: xt, featureFlags: Lt, thankYouScreenRef: Jt }) }

            function* $r() { yield(0, i.gz)(We(null)), yield(0, i.gz)(B(null)) }

            function* $t(N, Be) { var Qe = N.details;
                yield(0, i.$6)(Qe.map(Ct => (0, i.gz)((0, F.d1)(Ct.field)))), yield(0, i.gz)((0, le.dM)()), yield(0, i.gz)((0, le.Qh)()), yield(0, i.gz)((0, Me.Rm)(null, Be, null, null)) }

            function* te(N, Be) { var Qe = Mr(N); if (!Qe) return yield(0, i.RE)(Gr, Be, "connection_error"); if (Qe === he) { yield(0, i.RE)($t, N, Qe); return } var Ct = rn(N, Qe),
                    ae = _r(N),
                    xt = Dr(N);
                yield(0, i.RE)($r), yield(0, i.gz)((0, Me.Rm)(Ct, Qe, ae, xt)), lr(N) && (yield(0, i.gz)(ze())) }

            function* Vr(N) { var Be = Er(N); return yield(0, i.RE)($r), yield(0, i.gz)((0, Me.Rm)(w.Z[Be] || "label.error.generic", Be)) }

            function* Yr() { var N = yield(0, i.Ys)(Z.un),
                    Be = yield(0, i.Ys)(b.cp),
                    Qe = yield(0, i.Ys)(b.jO),
                    Ct; if (N != null && N.autoRedirect) { if (!N.redirectUrl) { var ae = yield(0, i.Ys)(Z.c4); return Be ? yield(0, i.gz)((0, J.SH)(!1)) : (Qe && (yield(0, i.gz)((0, J.jK)()), yield(0, i.gz)({ type: Se.MX })), yield(0, i.gz)((0, le.Nc)(ae))) }
                    Ct = N.redirectUrl } var xt = yield(0, i.Ys)(L.Vt),
                    Lt = Ct || xt; if (Lt) yield(0, i.gw)(I.sZ), (0, $e.FF)(Lt);
                else { if (Be) return yield(0, i.gz)((0, J.SH)(!1));
                    Qe && (yield(0, i.gz)((0, J.jK)()), yield(0, i.gz)({ type: Se.MX })), yield(0, i.gz)((0, le.Nc)(N.ref)) } }

            function* an() { var N = yield(0, i.Ys)(R.Y8),
                    Be = Mt(N); if (yield(0, i.Ys)(Ot.Mp)) return yield(0, i.gz)(ze()); if (!(yield(0, i.Ys)(R.$p))) return yield* Gr(Be, "no_landing"); try { var Qe = yield(0, i.Ys)(C.mm); if (Qe) return yield* gn(Qe, Be);
                    yield(0, i.RE)(Br), yield(0, i.gz)((0, Me.Xf)()) } catch (Ct) { return yield(0, i.RE)(te, Ct, Be) }
                yield(0, i.RE)(Yr) }

            function* gn(N, Be) { try { var Qe = yield(0, i.Ys)(a.$X); if (!Qe) throw new ue.Z("missing_stripe_account", "label.error.generic"); var Ct = yield(0, i.Ys)(a.yD),
                        ae = yield(0, i.Ys)(a.p9); if (Ct && !ae) return yield* sr(Ct, Qe, Be); if (ae) return yield* Ur(ae, Ct, Qe, Be); var xt = yield(0, i.Ys)(a.UL),
                        Lt = yield(0, i.RE)(xt.createPaymentMethod, N); return Lt.error ? yield(0, i.RE)(Vr, Lt.error) : (Ct = Lt.paymentMethod && Lt.paymentMethod.id, yield(0, i.gz)(We(Ct)), yield* sr(Ct, Qe, Be)) } catch (Jt) { return yield(0, i.RE)(te, Jt, Be) } }

            function* sr(N, Be, Qe) { try { var Ct = yield(0, i.RE)(Br, { provider: rt, [rt]: { payment_method: N, account_id: Be } }); if (Ct.provider === rt) { var ae = yield(0, i.Ys)(a.UL),
                            xt = yield(0, i.RE)(ae.handleCardAction, Ct[rt].client_secret); if (xt.error) return yield(0, i.RE)(Vr, xt.error); var Lt = xt.paymentIntent.id; return yield(0, i.gz)(B(Lt)), yield* Ur(Lt, N, Be, Qe) }
                    yield(0, i.gz)((0, Me.Xf)()) } catch (Jt) { return yield(0, i.RE)(te, Jt, Qe) }
                yield(0, i.RE)(Yr) }

            function* Ur(N, Be, Qe, Ct) { try { yield(0, i.RE)(Br, { provider: rt, [rt]: { payment_method: Be, account_id: Qe }, ref: N }), yield(0, i.gz)((0, Me.Xf)()) } catch (ae) { return yield(0, i.RE)(te, ae, Ct) }
                yield(0, i.RE)(Yr) } }, 99612: (Yt, Ze, c) => { c.d(Ze, { ZP: () => ze }); var i = c(92673),
                b = c(98153),
                J = c(86040),
                Se = c(44893),
                De = c(11255),
                me = c(3547),
                Pe = c(14246);

            function* ze() { yield(0, i.rM)(Me), yield(0, i.rM)(We), yield(0, i.rM)(le), yield(0, i.rM)(V) }

            function* Me() { yield(0, i.qn)(J.Ym); var w = yield(0, i.Ys)(me.cY);
                Pe.Ru(w) }

            function* We() { yield(0, i.qn)(J.Zg); var w = yield(0, i.Ys)(b.jO); if (!w) { var I = yield(0, i.Ys)(De.Ch),
                        L = yield(0, i.Ys)(me.cY);
                    Pe.Ps({ response_id: I, responseId: I, formId: L }) } }

            function* B() { var w = yield(0, i.Ys)(b.jO); if (!w) { var I = yield(0, i.Ys)(Se.tK),
                        L = yield(0, i.Ys)(me.cY);
                    Pe.lK({ ref: I, formId: L }) } }

            function* le() { yield(0, i.ib)([J.yL], B) }

            function* F(w) { var { payload: I } = w, L = yield(0, i.Ys)(b.jO); if (!L) { var E = yield(0, i.Ys)(Se.tK),
                        R = yield(0, i.Ys)(me.cY);
                    Pe.wB({ height: I, ref: E, formId: R }) } }

            function* V() { yield(0, i.ib)([J.CV], F) } }, 80951: (Yt, Ze, c) => { c.d(Ze, { ZP: () => a, vm: () => L }); var i = c(92673),
                b = c(37223),
                J = c(29253),
                Se = c(86040),
                De = c(3547),
                me = c(44893),
                Pe = c(11255),
                ze = c(77923),
                Me = () => { var ue = navigator.connection || navigator.mozConnection || navigator.webkitConnection; return !ue || !ue.effectiveType ? null : ue.effectiveType },
                We = () => window.navigator.onLine,
                B = c(5951),
                le = c(99612),
                F = c(2639);

            function V(ue, $e) { var dt = Object.keys(ue); if (Object.getOwnPropertySymbols) { var gt = Object.getOwnPropertySymbols(ue);
                    $e && (gt = gt.filter(function(rr) { return Object.getOwnPropertyDescriptor(ue, rr).enumerable })), dt.push.apply(dt, gt) } return dt }

            function w(ue) { for (var $e = 1; $e < arguments.length; $e++) { var dt = arguments[$e] != null ? arguments[$e] : {};
                    $e % 2 ? V(Object(dt), !0).forEach(function(gt) { I(ue, gt, dt[gt]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(ue, Object.getOwnPropertyDescriptors(dt)) : V(Object(dt)).forEach(function(gt) { Object.defineProperty(ue, gt, Object.getOwnPropertyDescriptor(dt, gt)) }) } return ue }

            function I(ue, $e, dt) { return $e in ue ? Object.defineProperty(ue, $e, { value: dt, enumerable: !0, configurable: !0, writable: !0 }) : ue[$e] = dt, ue } var L = () => { var ue = window.localStorage.getItem("submissions") || "[]"; return JSON.parse(ue) },
                E = ue => { window.localStorage.setItem("submissions", JSON.stringify(ue)) },
                R = () => { var ue = L(),
                        $e = ue.shift(); return E(ue), $e },
                Z = ue => E([ue, ...L()]),
                C = ue => E([...L(), ue]);

            function* a() { var ue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1e3;
                yield(0, i.rM)(le.ZP), yield(0, i.rM)(F.Z), yield(0, i.rM)(Tt, ue), yield(0, i.rM)(Ot) }

            function* Ot() { for (;;) { yield(0, i.qn)(Se.Fu); var ue = yield(0, i.Ys)(Pe.fb),
                        $e = yield(0, i.Ys)(De.cY),
                        dt = yield(0, i.Ys)(me.uc),
                        gt = { formId: $e, landingId: null, landingAt: null, values: ue, outcome: dt };
                    C(gt), yield(0, i.gz)((0, b.Xf)()), yield(0, i.RE)(B.lp) } }
            var wt = ue => new Promise($e => setTimeout($e, ue));

            function* Tt(ue) { for (;;) { if (We()) { var $e = R(); if ($e) try { var dt = yield(0, i.Ys)(ze.MQ),
                                gt = yield(0, i.RE)(J.Bu, $e.formId, dt),
                                rr = (0, B.IJ)(gt);
                            yield(0, i.RE)(J.iX, w(w({}, $e), {}, { landingId: rr.token, landingAt: rr.landed_at })); continue } catch (se) { Z($e) } }
                    yield wt(ue) } } }, 2639: (Yt, Ze, c) => { c.d(Ze, { Z: () => me }); var i = c(92673),
                b = c(86040),
                J = c(3547),
                Se = c(88376);

            function* De() { yield(0, i.qn)(b.Zg); var Pe = yield(0, i.Ys)(J.cY);
                yield(0, i.RE)(Se.F_, Pe) }

            function* me() { yield(0, i.rM)(De) } }, 52734: (Yt, Ze, c) => { c.d(Ze, { O: () => J }); var i = c(44893),
                b = Se => Se.intents,
                J = (Se, De) => { var me, Pe = b(Se); if (!(Pe != null && Pe.length)) return null; var ze = (0, i.Fx)(Se, De); return ze ? (me = Pe.find(Me => Me.id === ze.id)) === null || me === void 0 ? void 0 : me.intent : null } }, 85800: (Yt, Ze, c) => { c.d(Ze, { $X: () => b, UL: () => De, p9: () => Se, yD: () => J }); var i = me => me.paymentProviders.stripe,
                b = me => i(me).accountId,
                J = me => i(me).stripePaymentMethodId,
                Se = me => i(me).stripePaymentIntentId,
                De = me => i(me).service }, 11255: (Yt, Ze, c) => { c.d(Ze, { $n: () => J, $p: () => Se, Ch: () => De, FN: () => B, SO: () => We, Y8: () => Me, d_: () => me, fC: () => Pe, fb: () => le, lI: () => ze }); var i = c(14132),
                b = c(44893),
                J = F => (0, b.iN)(F).isComplete,
                Se = F => me(F) !== null,
                De = F => (0, b.iN)(F).responseId,
                me = F => (0, b.iN)(F).landingId,
                Pe = F => (0, b.iN)(F).navigationType,
                ze = F => (0, b.iN)(F).landingAt,
                Me = F => (0, b.iN)(F).retry.count,
                We = F => (0, b.iN)(F).retry.timeout,
                B = F => (0, b.iN)(F).errorMessage,
                le = F => ({ answers: (0, b.Vl)(F).filter(V => (0, b.JQ)(V) || !(0, b.vQ)(V.type, (0, b.GD)(F, (0, b.F5)(V)))).filter(V => (0, i.Gv)(F, (0, b.F5)(V))).map(V => { var w = (0, b.GD)(F, (0, b.F5)(V)); return { block: V, answer: w && (0, b.nO)(V, w) } }), variables: (0, b.Vc)(F), hidden: (0, b.bP)(F), logic: (0, b.qB)(F) }) }, 32570: (Yt, Ze, c) => { c.r(Ze), c.d(Ze, { default: () => yi }); var i = c(59748),
                b = c(87759),
                J = c(72928),
                Se = c(8941),
                De = c(56187),
                me = c(9970),
                Pe = c(47808),
                ze = c.n(Pe),
                Me = c(47153),
                We = c(72449); const B = JSON.parse(`{"id":"Z1K27wqb","type":"quiz","title":"Respondent Pulse Survey (!don't delete!)","workspace":{"href":"https://api.typeform.com/workspaces/6ck7ew"},"theme":{"href":"https://api.typeform.com/themes/qHWOQ7"},"settings":{"language":"en","progress_bar":"proportion","meta":{"allow_indexing":false},"hide_navigation":true,"is_public":true,"is_trial":false,"show_progress_bar":false,"show_typeform_branding":true,"are_uploads_public":false,"show_time_to_complete":true,"show_number_of_submissions":false,"show_cookie_consent":false,"show_question_number":false,"pro_subdomain_enabled":false,"capabilities":{"e2e_encryption":{"enabled":false,"modifiable":false}}},"thankyou_screens":[{"id":"DefaultTyScreen","ref":"default_tys","title":"Thanks for completing this typeform\\nNow *create your own* \u2014 it's free, easy, & beautiful","type":"thankyou_screen","properties":{"show_button":true,"share_icons":false,"button_mode":"default_redirect","button_text":"Create a *typeform*"},"attachment":{"type":"image","href":"https://images.typeform.com/images/2dpnUBBkz2VN"}}],"fields":[{"id":"YlGEHyET1K0B","title":"*Thanks for your response!*\\nHow was your experience filling out this form?","ref":"tf-pulse-survey-question-1","properties":{"start_at_one":true,"steps":5,"labels":{"left":"Very unsatisfying","center":"Neutral","right":"Very satisfying"}},"validations":{"required":true},"type":"opinion_scale"},{"id":"fX9fygruvCbA","title":"Could you tell us why you chose {{field:tf-pulse-survey-question-1}}?","ref":"tf-pulse-survey-question-2","properties":{},"validations":{"required":false},"type":"long_text"}],"hidden":["parent_form"],"_links":{"display":"https://tfproductops.typeform.com/to/Z1K27wqb"}}`); var le = ["googleTagManager", "googleAnalytics", "facebookPixel", "proSubdomainEnabled"];

            function F(n, l) { var s = Object.keys(n); if (Object.getOwnPropertySymbols) { var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) { return Object.getOwnPropertyDescriptor(n, y).enumerable })), s.push.apply(s, d) } return s }

            function V(n) { for (var l = 1; l < arguments.length; l++) { var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? F(Object(s), !0).forEach(function(d) { w(n, d, s[d]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : F(Object(s)).forEach(function(d) { Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d)) }) } return n }

            function w(n, l, s) { return l in n ? Object.defineProperty(n, l, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : n[l] = s, n }

            function I(n, l) { if (n == null) return {}; var s = L(n, l),
                    d, y; if (Object.getOwnPropertySymbols) { var Q = Object.getOwnPropertySymbols(n); for (y = 0; y < Q.length; y++) d = Q[y], !(l.indexOf(d) >= 0) && (!Object.prototype.propertyIsEnumerable.call(n, d) || (s[d] = n[d])) } return s }

            function L(n, l) { if (n == null) return {}; var s = {},
                    d = Object.keys(n),
                    y, Q; for (Q = 0; Q < d.length; Q++) y = d[Q], !(l.indexOf(y) >= 0) && (s[y] = n[y]); return s } var E = () => ze()(B),
                R = n => { var l = E(),
                        s = n.form.settings,
                        { googleTagManager: d, googleAnalytics: y, facebookPixel: Q, proSubdomainEnabled: Ee } = s,
                        ot = I(s, le),
                        K = V(V({}, n), {}, { analytics: {}, form: V(V({}, n.form), {}, { settings: V(V({}, ot), {}, { capabilities: { e2e_encryption: { enabled: !1, modifiable: !1 } }, showProgressBar: !1, showQuestionNumber: !1, hideNavigation: !0 }), fields: l.fields, logic: [], variables: {}, id: l.id, currentRef: null, currentScreenRef: null, hidden: { parent_form: n.form.id }, theme: V(V({}, n.form.theme), {}, { screens: V(V({}, n.form.theme.screens), {}, { alignment: Me.aj.CENTER }), fields: V(V({}, n.form.theme.fields), {}, { alignment: Me.aj.CENTER }) }) }), answers: { answersList: (0, We.Z)(l.fields) }, pipingAnswers: [], submit: V(V({}, n.submit), {}, { isSubmitting: !1, isSuccess: !1, isComplete: !1, errorMessage: null, retry: { showMessage: !1, timeout: 1, count: 0 } }) }); return K },
                Z = c(23262),
                C = c(86040),
                a = c(64800),
                Ot = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            function wt(n) { for (var l = "", s = 0; s < n; s++) l += Ot.charAt(Math.floor((0, a.Z)() * Ot.length)); return l }

            function Tt(n, l) { var s = Object.keys(n); if (Object.getOwnPropertySymbols) { var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) { return Object.getOwnPropertyDescriptor(n, y).enumerable })), s.push.apply(s, d) } return s }

            function ue(n) { for (var l = 1; l < arguments.length; l++) { var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? Tt(Object(s), !0).forEach(function(d) { $e(n, d, s[d]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : Tt(Object(s)).forEach(function(d) { Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d)) }) } return n }

            function $e(n, l, s) { return l in n ? Object.defineProperty(n, l, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : n[l] = s, n }

            function dt() { var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                    { type: l } = arguments.length > 1 ? arguments[1] : void 0; switch (l) {
                    case C.Ov:
                        return ue(ue({}, n), {}, { isFormMarkAsClosed: !0 });
                    case C.Nb:
                        return ue(ue({}, n), {}, { isFormMarkAsClosed: !0, isCloseScreenVisible: !0 });
                    default:
                        return n } } const gt = dt; var rr = c(30999),
                se = c(83562),
                A = c(44893);

            function ke(n, l) { var s = Object.keys(n); if (Object.getOwnPropertySymbols) { var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) { return Object.getOwnPropertyDescriptor(n, y).enumerable })), s.push.apply(s, d) } return s }

            function he(n) { for (var l = 1; l < arguments.length; l++) { var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? ke(Object(s), !0).forEach(function(d) { rt(n, d, s[d]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : ke(Object(s)).forEach(function(d) { Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d)) }) } return n }

            function rt(n, l, s) { return l in n ? Object.defineProperty(n, l, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : n[l] = s, n } var ht = { answersList: [] },
                It = (n, l) => { var { payload: { validationErrors: s, blockRef: d, shouldAnswerBeFormatted: y } } = l, Q = (0, se.mR)(n.answersList, d), Ee = n.answersList[Q]; return he(he({}, n), {}, { answersList: (0, rr.Vxg)(Q, he(he({}, Ee), {}, { validationErrors: s != null ? s : [], isValid: !s || s.length === 0, shouldAnswerBeFormatted: y }), n.answersList) }) },
                bt = (n, l) => { var { payload: { answer: s } } = l, d = (0, A.tL)(s), y = (0, se.mR)(n.answersList, d); return he(he({}, n), {}, { answersList: (0, rr.Vxg)(y, he(he({}, s), {}, { isCommitted: !1, hasBeenInteractedWith: !0 }), n.answersList) }) },
                zt = (n, l) => { var { payload: { ref: s } } = l, d = n.answersList.find(Ee => (0, A.tL)(Ee) === s), y = [...n.answersList], Q = y.indexOf(d); return y[Q] = he(he({}, d), {}, { isCommitted: !0 }), he(he({}, n), {}, { answersList: y }) },
                Mt = (n, l) => { var { payload: { ref: s } } = l; return he(he({}, n), {}, { answersList: n.answersList.map(d => (0, A.tL)(d) !== s ? d : he(he({}, d), {}, { isCommitted: !0 })) }) },
                lr = n => he(he({}, n), {}, { answersList: n.answersList.map(l => he(he({}, l), {}, { isCommitted: !0 })) }),
                Nr = (n, l, s) => { var d = (0, We.Z)(l); if (s) return d; var y = n.filter(Ee => !!l.find(ot => { var { ref: K } = ot; return K === Ee.blockRef })),
                        Q = [...y, ...d.filter(Ee => !n.find(ot => (0, A.tL)(ot) === (0, A.tL)(Ee)))]; return Q };

            function br() { var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ht,
                    l = arguments.length > 1 ? arguments[1] : void 0; switch (l.type) {
                    case C.jD:
                        return It(n, l);
                    case C.qU:
                        return bt(n, l);
                    case C.aR:
                        return zt(n, l);
                    case C.fI:
                        return Mt(n, l);
                    case C.A3:
                        return lr(n, l);
                    default:
                        return n } } var Er = function() { var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0,
                    s = arguments.length > 1 ? arguments[1] : void 0; switch (s.type) {
                    case C.Gc:
                        return !0;
                    case C.my:
                        return !1;
                    default:
                        return l } }; const Mr = Er;

            function _r() { var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null,
                    l = arguments.length > 1 ? arguments[1] : void 0; switch (l.type) {
                    case C.Y:
                        return !0;
                    case C.Ns:
                        return !1;
                    default:
                        return n } }

            function Dr(n, l) { var s = Object.keys(n); if (Object.getOwnPropertySymbols) { var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) { return Object.getOwnPropertyDescriptor(n, y).enumerable })), s.push.apply(s, d) } return s }

            function rn(n) { for (var l = 1; l < arguments.length; l++) { var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? Dr(Object(s), !0).forEach(function(d) { nn(n, d, s[d]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : Dr(Object(s)).forEach(function(d) { Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d)) }) } return n }

            function nn(n, l, s) { return l in n ? Object.defineProperty(n, l, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : n[l] = s, n } var Zr = { backgroundOpacity: 1, hideHeaders: !1, minimalFooter: !1, mode: null },
                Wr = (n, l) => Object.keys(n).every(s => Object.keys(l).includes(s));

            function Gr() { var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}; return Wr(Zr, n) || (n = rn(rn({}, Zr), n)), n } const Br = Gr;

            function $r(n, l) { var s = Object.keys(n); if (Object.getOwnPropertySymbols) { var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) { return Object.getOwnPropertyDescriptor(n, y).enumerable })), s.push.apply(s, d) } return s }

            function $t(n) { for (var l = 1; l < arguments.length; l++) { var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? $r(Object(s), !0).forEach(function(d) { te(n, d, s[d]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : $r(Object(s)).forEach(function(d) { Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d)) }) } return n }

            function te(n, l, s) { return l in n ? Object.defineProperty(n, l, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : n[l] = s, n } var Vr = (n, l) => { var { payload: { ref: s } } = l; return $t($t({}, n), {}, { currentRef: s, previousRef: n.currentRef, requireStickyFooter: null, forceSubmitButtonVisible: !1 }) },
                Yr = (n, l) => { var { payload: s } = l; return $t($t({}, n), {}, { isBlockChanging: s }) },
                an = (n, l) => { var { payload: s } = l; return $t($t({}, n), {}, { forceSubmitButtonVisible: s }) },
                gn = "block",
                sr = "recenter",
                Ur = "choice";

            function N(n, l) { var s = Object.keys(n); if (Object.getOwnPropertySymbols) { var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) { return Object.getOwnPropertyDescriptor(n, y).enumerable })), s.push.apply(s, d) } return s }

            function Be(n) { for (var l = 1; l < arguments.length; l++) { var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? N(Object(s), !0).forEach(function(d) { Qe(n, d, s[d]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : N(Object(s)).forEach(function(d) { Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d)) }) } return n }

            function Qe(n, l, s) { return l in n ? Object.defineProperty(n, l, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : n[l] = s, n } var Ct = (n, l) => { var { payload: { anchor: s, target: d, fast: y } } = l; return Be(Be({}, n), {}, { scrolling: { scrollType: sr, anchor: s, target: d, fast: y } }) },
                ae = (n, l) => { var { payload: { ref: s } } = l; return Be(Be({}, n), {}, { scrolling: { ref: s, scrollType: Ur } }) },
                xt = (n, l) => { var { payload: { ref: s } } = l; return Be(Be({}, n), {}, { currentScreenRef: s }) },
                Lt = n => Be(Be({}, n), {}, { currentScreenRef: null });

            function Jt(n, l) { var s = Object.keys(n); if (Object.getOwnPropertySymbols) { var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) { return Object.getOwnPropertyDescriptor(n, y).enumerable })), s.push.apply(s, d) } return s }

            function Wt(n) { for (var l = 1; l < arguments.length; l++) { var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? Jt(Object(s), !0).forEach(function(d) { Or(n, d, s[d]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : Jt(Object(s)).forEach(function(d) { Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d)) }) } return n }

            function Or(n, l, s) { return l in n ? Object.defineProperty(n, l, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : n[l] = s, n }

            function xr(n, l) { var { payload: { isScrollNearTop: s } } = l; return Wt(Wt({}, n), {}, { isScrollNearTop: s }) }

            function Qr(n, l) { var s = Object.keys(n); if (Object.getOwnPropertySymbols) { var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) { return Object.getOwnPropertyDescriptor(n, y).enumerable })), s.push.apply(s, d) } return s }

            function on(n) { for (var l = 1; l < arguments.length; l++) { var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? Qr(Object(s), !0).forEach(function(d) { O(n, d, s[d]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : Qr(Object(s)).forEach(function(d) { Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d)) }) } return n }

            function O(n, l, s) { return l in n ? Object.defineProperty(n, l, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : n[l] = s, n }

            function Fe(n, l) { var { payload: { blockRef: s, show: d = !1 } } = l; return !d && n.requireStickyFooter !== s ? n : on(on({}, n), {}, { requireStickyFooter: d ? s : null }) }

            function Re(n, l) { var s = Object.keys(n); if (Object.getOwnPropertySymbols) { var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) { return Object.getOwnPropertyDescriptor(n, y).enumerable })), s.push.apply(s, d) } return s }

            function we(n) { for (var l = 1; l < arguments.length; l++) { var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? Re(Object(s), !0).forEach(function(d) { vt(n, d, s[d]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : Re(Object(s)).forEach(function(d) { Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d)) }) } return n }

            function vt(n, l, s) { return l in n ? Object.defineProperty(n, l, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : n[l] = s, n }

            function jt(n) { return we(we({}, n), {}, { scrolling: null }) }

            function Qt() { var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                    l = arguments.length > 1 ? arguments[1] : void 0; switch (l.type) {
                    case C.yL:
                        return Vr(n, l);
                    case C.M1:
                        return Yr(n, l);
                    case C.c9:
                        return an(n, l);
                    case C.lS:
                        return xt(n, l);
                    case C.Ym:
                        return Lt(n, l);
                    case C.id:
                        return ae(n, l);
                    case C.K9:
                        return Ct(n, l);
                    case C.JZ:
                        return jt(n, l);
                    case C.vR:
                        return xr(n, l);
                    case C.gu:
                        return Fe(n, l);
                    default:
                        return n } } var jr = c(70003);

            function kr(n, l) { var s = Object.keys(n); if (Object.getOwnPropertySymbols) { var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) { return Object.getOwnPropertyDescriptor(n, y).enumerable })), s.push.apply(s, d) } return s }

            function Ht(n) { for (var l = 1; l < arguments.length; l++) { var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? kr(Object(s), !0).forEach(function(d) { ln(n, d, s[d]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : kr(Object(s)).forEach(function(d) { Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d)) }) } return n }

            function ln(n, l, s) { return l in n ? Object.defineProperty(n, l, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : n[l] = s, n }

            function S() { var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : jr.E,
                    { type: l, payload: s } = arguments.length > 1 ? arguments[1] : void 0; switch (l) {
                    case C.OK:
                        return Ht(Ht({}, n), {}, { isInputFocused: s.isInputFocused });
                    default:
                        return n } } const x = S; var ce = c(21176);

            function ve(n, l) { var s = Object.keys(n); if (Object.getOwnPropertySymbols) { var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) { return Object.getOwnPropertyDescriptor(n, y).enumerable })), s.push.apply(s, d) } return s }

            function ge(n) { for (var l = 1; l < arguments.length; l++) { var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? ve(Object(s), !0).forEach(function(d) { Ve(n, d, s[d]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : ve(Object(s)).forEach(function(d) { Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d)) }) } return n }

            function Ve(n, l, s) { return l in n ? Object.defineProperty(n, l, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : n[l] = s, n } var Ye = { stripePaymentMethodId: null, stripePaymentIntentId: null, service: null };

            function nt() { var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ye,
                    { type: l, payload: s } = arguments.length > 1 ? arguments[1] : void 0; switch (l) {
                    case C.ab:
                        return ge(ge({}, n), {}, { stripe: ge(ge({}, n.stripe), {}, { stripePaymentMethodId: s }) });
                    case C.KH:
                        return ge(ge({}, n), {}, { stripe: ge(ge({}, n.stripe), {}, { stripePaymentIntentId: s }) });
                    case C.xN:
                        return ge(ge({}, n), {}, { stripe: ge(ge({}, n.stripe), {}, { service: s }) });
                    default:
                        return n } } var Ke = [];

            function mt() { var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ke,
                    l = arguments.length > 1 ? arguments[1] : void 0; switch (l.type) {
                    case C.Zv:
                        return l.payload;
                    default:
                        return n } } var Kt = c(6156);

            function nr() { var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Kt.E,
                    l = arguments.length > 1 ? arguments[1] : void 0; switch (l.type) {
                    case C.pg:
                        return { isReviewModeEnabled: !0 };
                    case C.sL:
                        return { isReviewModeEnabled: !1 };
                    default:
                        return n } } var Cr = c(81006),
                sn = c(45837);

            function hn(n, l) { var s = Object.keys(n); if (Object.getOwnPropertySymbols) { var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) { return Object.getOwnPropertyDescriptor(n, y).enumerable })), s.push.apply(s, d) } return s }

            function at(n) { for (var l = 1; l < arguments.length; l++) { var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? hn(Object(s), !0).forEach(function(d) { Hr(n, d, s[d]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : hn(Object(s)).forEach(function(d) { Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d)) }) } return n }

            function Hr(n, l, s) { return l in n ? Object.defineProperty(n, l, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : n[l] = s, n } var Kr = 2;

            function Ln() { var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : sn.E,
                    { type: l, payload: s } = arguments.length > 1 ? arguments[1] : void 0; switch (l) {
                    case C.Fu:
                        return at(at({}, n), {}, { isSubmitting: !(s != null && s.isLivePreview), isSuccess: !1, isComplete: !1, errorMessage: null, retry: at(at({}, n.retry), {}, { timeout: 0 }), navigationType: s == null ? void 0 : s.navigationType });
                    case C.Zg:
                        return at(at({}, n), {}, { isSubmitting: !1, isSuccess: !0, isComplete: !0, retry: at(at({}, n.retry), {}, { count: 0, showMessage: !1, timeout: 0 }) });
                    case C.p2:
                        var { showMessage: d, count: y } = n.retry; return at(at({}, n), {}, { isSubmitting: !0, isSuccess: !1, isComplete: !1, retry: at(at({}, n.retry), {}, { count: y + 1, timeout: s.retry.timeout, showMessage: d || y >= Cr.YW }) });
                    case C.GX:
                        var Q = n.retry.timeout - 1; return at(at({}, n), {}, { retry: at(at({}, n.retry), {}, { timeout: Q > 0 ? Q : 0 }) });
                    case C.xM:
                        return at(at({}, n), {}, { retry: at(at({}, n.retry), {}, { count: Kr }) });
                    case C.O3:
                        return at(at({}, n), {}, { responseId: s.responseId, landingId: s.landingId, landingAt: s.landingAt });
                    case C.oo:
                        return n;
                    case C.$4:
                        return at(at({}, n), {}, { isSubmitting: !1, isSuccess: !1, isComplete: !1, errorMessage: s.message, retry: at({}, sn.E.retry) });
                    case C.qU:
                        return at(at({}, n), {}, { errorMessage: null });
                    default:
                        return n } }

            function yn(n, l) { var s = Object.keys(n); if (Object.getOwnPropertySymbols) { var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) { return Object.getOwnPropertyDescriptor(n, y).enumerable })), s.push.apply(s, d) } return s }

            function kt(n) { for (var l = 1; l < arguments.length; l++) { var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? yn(Object(s), !0).forEach(function(d) { Ft(n, d, s[d]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : yn(Object(s)).forEach(function(d) { Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d)) }) } return n }

            function Ft(n, l, s) { return l in n ? Object.defineProperty(n, l, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : n[l] = s, n } var Cn = { legacyAccountId: "", accountUid: "", cookieAccountUids: null, formId: "", initialized: !1, isFormCreator: !1, isFirstConversation: null, sessionId: null, planName: "", blockRefTracking: { answerMethod: null } };

            function yt(n, l) { return !l || n === "voice_text" ? n : n ? n !== l ? "voice_text" : n : l }

            function Jn() { var n, l, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Cn,
                    { type: d, payload: y } = arguments.length > 1 ? arguments[1] : void 0; switch (d) {
                    case C.n4:
                        return kt(kt({}, s), {}, { initialized: !0, isFormCreator: (n = y == null || (l = y.cookieAccountUids) === null || l === void 0 ? void 0 : l.includes(s.accountUid)) !== null && n !== void 0 ? n : !1, isFirstConversation: y == null ? void 0 : y.isFirstConversation, sessionId: wt(12) });
                    case C.Ko:
                        return kt(kt({}, s), {}, { visitCurrentCycle: y.visitCurrentCycle });
                    case C.tJ:
                        { var Q, { responseFilled: Ee, ref: ot } = y,
                                K = ((Q = s.blockRefTracking) === null || Q === void 0 ? void 0 : Q[ot]) || {}; return kt(kt({}, s), {}, { blockRefTracking: kt(kt({}, s.blockRefTracking), {}, {
                                    [ot]: kt(kt({}, K), {}, { responseFilled: Ee }) }) }) }
                    case C.R0:
                        { var Le, { answerMethod: Ue, ref: qe } = y,
                                tt = ((Le = s.blockRefTracking) === null || Le === void 0 ? void 0 : Le[qe]) || {}; return kt(kt({}, s), {}, { blockRefTracking: kt(kt({}, s.blockRefTracking), {}, {
                                    [qe]: kt(kt({}, tt), {}, { answerMethod: yt(tt.answerMethod, Ue) }) }) }) }
                    default:
                        return s } } const Sn = Jn;

            function Pn() { var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null,
                    l = arguments.length > 1 ? arguments[1] : void 0; switch (l.type) {
                    case C.at:
                        return l.payload;
                    default:
                        return n } } var Sr = c(84028),
                Fr = c(14132),
                Nt = c(79324);

            function Je(n, l) { var s = Object.keys(n); if (Object.getOwnPropertySymbols) { var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) { return Object.getOwnPropertyDescriptor(n, y).enumerable })), s.push.apply(s, d) } return s }

            function fr(n) { for (var l = 1; l < arguments.length; l++) { var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? Je(Object(s), !0).forEach(function(d) { St(n, d, s[d]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : Je(Object(s)).forEach(function(d) { Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d)) }) } return n }

            function St(n, l, s) { return l in n ? Object.defineProperty(n, l, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : n[l] = s, n } var Xn = n => !!n;

            function wn(n, l) { var { currentBlockRef: s, paymentProviders: d, resetAnswers: y } = l.payload, Q = (0, Nt.Z)(l.payload, n.isLivePreview), Ee = fr(fr({}, n), {}, { submit: y ? sn.E : n.submit, form: fr(fr({}, Q), {}, { currentRef: n.form.currentRef, currentScreenRef: n.form.currentScreenRef, isScrollNearTop: !0, isLivePreview: n.form.isLivePreview }), paymentProviders: fr(fr({}, n.paymentProviders), d) }), ot = (0, A.Vl)(Ee), K = (0, A.X2)(n), Le = Nr(K, ot, y); if (Ee.answers = { answersList: Le }, Ee.pipingAnswers = Le, s != null) { var Ue = (0, Sr.Fl)(Ee, s) || (0, Sr.Fi)(Ee, s); if (Ue) Ee.form.currentScreenRef = s;
                    else { Ee.form.currentScreenRef = null; var qe = (0, Fr.AF)(Ee, s) ? s : (0, Fr.QJ)(Ee);
                        Xn(qe) && (Ee.form.currentRef = qe) } } return Ee } var Tn = c(45626),
                Na = c(21874);

            function ar(n, l) { var s = Object.keys(n); if (Object.getOwnPropertySymbols) { var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) { return Object.getOwnPropertyDescriptor(n, y).enumerable })), s.push.apply(s, d) } return s }

            function Jr(n) { for (var l = 1; l < arguments.length; l++) { var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? ar(Object(s), !0).forEach(function(d) { Gt(n, d, s[d]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : ar(Object(s)).forEach(function(d) { Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d)) }) } return n }

            function Gt(n, l, s) { return l in n ? Object.defineProperty(n, l, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : n[l] = s, n } var Nn = (0, Se.UY)({ abTests: function() { var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}; return l }, accessScheduling: gt, portal: Na.ZP, analytics: function() { var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}; return l }, answers: br, autoFocus: Mr, cookieConsent: Z.ZP, disableNavigation: _r, disableSubmit: function() { var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1; return l }, disableTracking: function() { var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1; return l }, embedSettings: Br, featureFlags: function() { var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}; return l }, form: Qt, hideSubmitButton: function() { var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1; return l }, input: x, intents: function() { var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []; return l }, isLimitedToParentSize: function() { var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1; return l }, isLivePreview: function() { var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1; return l }, isOfflineMode: function() { var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1; return l }, layout: ce.ZP, numberOfSubmissions: Tn.ZP, paymentProviders: nt, pipingAnswers: mt, reviewMode: nr, submit: Ln, testVariants: function() { var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}; return l }, timeToComplete: function() { var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0; return l }, tracking: Sn, uniqueId: function() { var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : wt(16); return l }, unrecoverableError: Pn, pulseSurvey: De.ZP }),
                pa = (n, l) => { switch (l.type) {
                        case C.O2:
                            return wn(n, l);
                        case me.MX:
                            return Jr(Jr({}, n), {}, { form: Jr(Jr({}, n.form), {}, { id: n.pulseSurvey.parentFormId }) });
                        case me.fb:
                            return R(n);
                        default:
                            return Nn(n, l) } }; const jo = pa; var u = c(92673),
                cn = c(98153),
                In = c(5951),
                Ma = c(61543),
                ma = c.n(Ma),
                Mn = c(4237),
                _n = c(68656),
                qn = c(64923),
                ga = c(94476),
                Zn = c(65199),
                ko = c(45731),
                Fo = c(52734),
                Rt = c(77923),
                ft = c(3547),
                bn = c(76175),
                Lo = c(16054),
                pr = c(11255),
                ha = c(13836),
                un = c(88376),
                ya = ["event"];

            function No(n, l) { if (n == null) return {}; var s = ll(n, l),
                    d, y; if (Object.getOwnPropertySymbols) { var Q = Object.getOwnPropertySymbols(n); for (y = 0; y < Q.length; y++) d = Q[y], !(l.indexOf(d) >= 0) && (!Object.prototype.propertyIsEnumerable.call(n, d) || (s[d] = n[d])) } return s }

            function ll(n, l) { if (n == null) return {}; var s = {},
                    d = Object.keys(n),
                    y, Q; for (Q = 0; Q < d.length; Q++) y = d[Q], !(l.indexOf(y) >= 0) && (s[y] = n[y]); return s }

            function Xr(n, l) { var s = Object.keys(n); if (Object.getOwnPropertySymbols) { var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) { return Object.getOwnPropertyDescriptor(n, y).enumerable })), s.push.apply(s, d) } return s }

            function ea(n) { for (var l = 1; l < arguments.length; l++) { var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? Xr(Object(s), !0).forEach(function(d) { ba(n, d, s[d]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : Xr(Object(s)).forEach(function(d) { Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d)) }) } return n }

            function ba(n, l, s) { return l in n ? Object.defineProperty(n, l, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : n[l] = s, n }

            function qr(n, l, s, d, y, Q, Ee) { try { var ot = n[Q](Ee),
                        K = ot.value } catch (Le) { s(Le); return }
                ot.done ? l(K) : Promise.resolve(K).then(d, y) }

            function _a(n) { return function() { var l = this,
                        s = arguments; return new Promise(function(d, y) { var Q = n.apply(l, s);

                        function Ee(K) { qr(Q, d, y, Ee, ot, "next", K) }

                        function ot(K) { qr(Q, d, y, Ee, ot, "throw", K) }
                        Ee(void 0) }) } } var sl = "renderer",
                Za = { "S3 Datalake": !0 },
                Va = (n, l, s) => new Promise(d => { ma().sendEvent(n, l, s, d) }),
                Ya = n => {
                    (0, un.cm)(n) },
                Ua = function() { var n = _a(function*(l) { yield Promise.all(l.map(s => ({ data: s.data || {}, options: s.options || {} })).map(s => ({ data: ea({}, s.data), options: ea(ea({}, s.options), {}, { context: { ip: "0.0.0.0" }, integrations: s.options.integrations || Za }) })).map(s => { var d = s.data,
                                { event: y } = d,
                                Q = No(d, ya); return Va(y, Q, s.options) })) }); return function(s) { return n.apply(this, arguments) } }(),
                Ha = c(10659),
                ta = c(94947);

            function* Vn(n, l) { var s = yield(0, u.Ys)(ha.N5),
                    d = Object.keys(s); if (!!d.length) { var y = yield(0, u.Ys)(ft.cY),
                        Q = yield(0, u.Ys)(Rt.Ac),
                        Ee = yield(0, u.Ys)(Rt.MQ),
                        ot = yield(0, u.Ys)(A.Yp),
                        K = yield(0, u.Ys)(A.zv),
                        Le = yield(0, u.Ys)(A.WA); for (var Ue of d) { var qe = s[Ue],
                            tt = { account_id: Q.legacyAccountId, account_uid: Q.accountUid, attribution_user_id: Mn.Z.getUser(), event: ta.EW, form_uid: y, has_welcome_screen: ot, payload: { form_length: K, has_logic_jumps: Le }, test_id: Ue, typeform_view_id: Ee, variant_label: qe };
                        yield(0, u.gz)(n, { data: tt, options: l }) } } }

            function* ra(n) { for (;;) { var { type: l, payload: s } = yield(0, u.qn)([C.yL, C.Ym, C.qU, C.Fu, C.fI]); if (l === C.yL) { var d = yield(0, u.Ys)(Fr.pi, s.ref); if (d) continue } if (!((l === C.qU || l === C.yL) && s.isFromPrefilledAnswer)) return yield(0, u.RE)(n, s) } }

            function Ka(n, l) { var s = Object.keys(n); if (Object.getOwnPropertySymbols) { var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) { return Object.getOwnPropertyDescriptor(n, y).enumerable })), s.push.apply(s, d) } return s }

            function ct(n) { for (var l = 1; l < arguments.length; l++) { var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? Ka(Object(s), !0).forEach(function(d) { Mo(n, d, s[d]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : Ka(Object(s)).forEach(function(d) { Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d)) }) } return n }

            function Mo(n, l, s) { return l in n ? Object.defineProperty(n, l, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : n[l] = s, n } var _o = 1e3,
                Zo = 2e3,
                _t = { BLOCK_ANSWERED: "block_answered", BLOCK_FOCUSED: "block_focused", BLOCK_FOOTER_CLICKED: "block_footer_clicked", BLOCK_FOOTER_VISIBLE: "block_footer_visible", CONVERSATION_SUBMITTED: "conversation_submitted", ITEM_CLICKED: "item_clicked", PRESENT_CONVERSATION: "present_conversation", REVIEW_MODE_ENTERED: "review_mode_entered", START_CONVERSATION: "start_conversation", SUBMIT_BUTTON_SHOWN: "submit_button_shown", TYPEFORM_PREVIEWED: "typeform_previewed", TMP_ITEM_CLICKED: "tmp_item_clicked", TMP_BLOCK_ANSWERED: "tmp_block_answered" },
                na = "standard",
                Ea = "louvre",
                Vo = "closed",
                Yo = "opened",
                En = { integrations: { All: !1, "S3 Datalake": !0 } },
                Rn = () => (0, _n.T)() ? "mobile" : "desktop",
                Yn = () => { var n = new Date; return n.getTimezoneOffset() },
                An = () => { try { return Intl.DateTimeFormat().resolvedOptions().timeZone } catch (n) { return null } },
                za = (n, l) => n && l ? "thankyou_button_and_branding" : n ? "thankyou_button" : l ? "branding" : null;

            function* Wa() { var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Zo,
                    l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _o;
                yield(0, u.qn)(C.JJ), yield(0, u.RE)(Uo); var s = yield(0, u.RE)(b.CE, b.Ef.expanding(10));
                yield(0, u.rM)(Ga, s, n), yield(0, u.rM)(Vn, s, En); var d = yield(0, u.Ys)(cn.lA);
                d && (yield(0, u.rM)($o, s, n)); var y = yield(0, u.Ys)(Rt.uu); if (y) { var Q = { integrations: { All: !1, "S3 Datalake": !0, Natero: !0, "Google Analytics": !0, "Facebook Pixel": !0, AdWords: !0 } },
                        Ee = yield(0, u.RE)(qa);
                    yield(0, u.gz)(s, { data: Ee, options: Q }); return } { var ot = yield(0, u.RE)(Oa);
                    yield(0, u.gz)(s, { data: ct({}, ot) }) }
                yield(0, u.rM)(function*() { yield(0, u.RE)(ra, function*(K) { var Le = yield(0, u.Ys)(ft.cY);
                        yield(0, u.RE)(Ya, Le); var Ue = yield(0, u.RE)(un.V9, Le);
                        yield(0, u.gz)((0, ga.EA)(Ue)); var qe = yield(0, u.RE)(Ja, K);
                        yield(0, u.gz)(s, { data: qe }) }) }), yield(0, u.rM)(function*() { yield(0, u.ib)(C.Zg, function*() { var K = yield(0, u.RE)(zr);
                        yield(0, u.gz)(s, { data: K }) }) }), yield(0, u.rM)(function*() { for (var K;;) { var Le = yield(0, u.qn)(C.gu),
                            Ue = yield(0, u.Ys)(A.tK),
                            qe = Le.payload.blockRef; if (!!Le.payload.show && qe === Ue) { if (K === qe) continue;
                            K = qe; var tt = yield(0, u.RE)(Xa, _t.BLOCK_FOOTER_VISIBLE);
                            tt && (yield(0, u.gz)(s, { data: tt, options: En })) } } }), yield(0, u.rM)(function*() { for (;;) { var K = yield(0, u.qn)(C.NO),
                            { source: Le } = K.payload; if (Le === Zn.b) { var Ue = yield(0, u.RE)(Xa, _t.BLOCK_FOOTER_CLICKED);
                            Ue && (yield(0, u.gz)(s, { data: Ue, options: En })) } } }), yield(0, u.rM)(function*() { for (;;) { yield(0, u.qn)(C.pg); var K = yield(0, u.Ys)(se.Dd),
                            Le = { invalid_answers_amount: K },
                            Ue = yield(0, u.RE)(Lr, _t.REVIEW_MODE_ENTERED, Le),
                            qe = En;
                        yield(0, u.gz)(s, { data: Ue, options: qe }) } }), yield(0, u.rM)(function*() { for (;;) { var { payload: K } = yield(0, u.qn)([C.ew]), Le = K.ref, Ue = yield(0, u.Ys)(ft.Cf, Le); if (!!Ue) { var qe = yield(0, u.Ys)(Rt.Ac),
                                tt = yield(0, u.Ys)(ft.cY),
                                At = yield(0, u.Ys)(Rt.MQ),
                                Ut = yield(0, u.Ys)(A.Fx, Le),
                                tr = { account_id: qe.legacyAccountId, account_uid: qe.accountUid, attribution_user_id: Mn.Z.getUser(), block_ref: Le, block_type: Ut ? Ut.type : null, event: _t.SUBMIT_BUTTON_SHOWN, form_uid: tt, typeform_view_id: At, ws_owner_account_id: qe.legacyAccountId },
                                ur = En;
                            yield(0, u.gz)(s, { data: tr, options: ur }) } } }), yield(0, u.rM)(function*() { var K = En,
                        Le = yield(0, u.Ys)(A.co),
                        Ue = !!Le,
                        qe = yield(0, u.Ys)(A.tK),
                        tt, At, Ut; if (tt = yield(0, u.Ys)(Rt.oq), At = tt(qe), Ue) Ut = yield(0, u.RE)(Ho, Le, _t.BLOCK_FOCUSED);
                    else { var tr = yield(0, u.Ys)(se.hx, qe),
                            ur = yield(0, u.RE)(oa, qe, _t.BLOCK_FOCUSED, { prefilled_block: tr, response_prefilled: At.responseFilled || null }),
                            dr = yield(0, u.RE)(Qa, qe);
                        Ut = ct(ct({}, ur), dr) }
                    yield(0, u.gz)(s, { data: Ut, options: K }); for (var xn, jn = function*() { var { payload: vn } = yield(0, u.qn)(C.yL), tn = yield(0, u.Ys)(se.hx, vn.ref);
                            yield(0, u.gw)(), tt = yield(0, u.Ys)(Rt.oq), At = tt(vn.ref); var fn = yield(0, u.RE)(oa, vn.ref, _t.BLOCK_FOCUSED, { navigation_type: vn.navigationType, prefilled_block: tn, response_prefilled: At.responseFilled || null }); if (!fn) return "continue"; var Gn = yield(0, u.RE)(Qa, vn.ref),
                                ua = ct(ct({}, fn), Gn);
                            xn && (yield(0, u.al)(xn)), xn = yield(0, u.rM)(function*() { yield(0, u.gw)(l), yield(0, u.gz)(s, { data: ua, options: K }) }) };;) var ca = yield* jn() }), yield(0, u.rM)(function*() { for (var K = En, Le, Ue = function*() { var { type: At, payload: Ut } = yield(0, u.qn)([C.yL, C.Fu]), tr = yield(0, u.Ys)(A.tK), ur = yield(0, u.Ys)(ft.eS); if (At === C.yL && tr === ur) return "continue"; var dr = At === C.Fu ? tr : ur,
                                xn = yield(0, u.Ys)(A.ny, dr),
                                jn = yield(0, u.Ys)(se.Nh, dr),
                                ca = yield(0, u.Ys)(Rt.oq),
                                kn = ca(dr),
                                vn = yield(0, u.RE)(oa, dr, _t.BLOCK_ANSWERED, { changed_prefilled_value: jn, answered: xn, navigation_type: Ut.navigationType, response_filled: kn.responseFilled || null }),
                                tn = yield(0, u.Ys)(ha.GM),
                                fn = void 0; if (tn && (fn = yield(0, u.RE)(oa, dr, _t.TMP_BLOCK_ANSWERED, { changed_prefilled_value: jn, answered: xn, navigation_type: Ut.navigationType, response_filled: kn.responseFilled || null, answer_type: kn.answerMethod || null })), !vn) return "continue"; var Gn = yield(0, u.RE)(Ko, dr),
                                ua = ct(ct({}, vn), Gn);
                            Le && (yield(0, u.al)(Le)), Le = yield(0, u.rM)(function*() { yield(0, u.gw)(l), yield(0, u.gz)(s, { data: ua, options: K }), tn && (yield(0, u.gz)(s, { data: fn, options: K })) }) };;) var qe = yield* Ue() }), yield(0, u.rM)(function*() { for (;;) { var { payload: K } = yield(0, u.qn)(C.Kr), { label: Le } = K, Ue = yield(0, u.RE)(Go, Le);
                        yield(0, u.gz)(s, { data: Ue }) } }), yield(0, u.rM)(function*() { for (;;) { var { payload: K } = yield(0, u.qn)(C.lS), Le = _t.BLOCK_FOCUSED, Ue = yield(0, u.Ys)(Sr.un), qe = K.ref === (Ue == null ? void 0 : Ue.ref); if (!(!Ue || !qe || Ue != null && Ue.autoRedirect)) { var { showButton: tt } = Ue, At = yield(0, u.Ys)(ft.qC), Ut = za(tt, At), tr = yield(0, u.RE)(zo, K.ref, { typeform_branding: Ut }), ur = yield(0, u.RE)(Lr, Le, tr), dr = ct(ct({}, tr), ur);
                            yield(0, u.gz)(s, { data: dr }) } } }), yield(0, u.rM)(function*() { for (;;) { var { payload: K } = yield(0, u.qn)(C.Oq), { label: Le, navigationType: Ue, buttonText: qe } = K, tt = yield(0, u.RE)(cl, Le, Ue, qe);
                        yield(0, u.gz)(s, { data: tt }) } }), yield(0, u.rM)(function*() { for (;;) { var { payload: K } = yield(0, u.qn)(C.If), { label: Le } = K, Ue = yield(0, u.RE)(ul, Le);
                        yield(0, u.gz)(s, { data: Ue }) } }) }

            function* Uo() { var n = yield(0, u.Ys)(Rt.uE),
                    l = yield(0, u.RE)($a),
                    s = []; if (n) { var d = yield(0, u.Ys)(Rt.NR),
                        y = yield(0, u.Ys)(Rt.iV),
                        Q = { name: Ma.SUPPORTED_PROVIDERS.RUDDERSTACK, config: { key: n, dataPlaneUrl: d, options: { configUrl: y } } };
                    s.push(Q) }
                s.length && (yield(0, u.RE)(ma().initRenderer, s, l)) }

            function* Ga(n, l) { for (;;) { var s = yield(0, u.qn)(n),
                        d = yield(0, u.yl)(n),
                        y = [s, ...d];
                    yield(0, u.RE)(Ua, y); var Q = yield(0, u.Ys)(A.G8),
                        Ee = yield(0, u.Ys)(pr.$n);!Q && !Ee && (yield(0, u.S3)({ delay: (0, u.gw)(l), cancel: (0, u.qn)(C.Fu) })) } }

            function* $a() { var n = yield(0, u.Ys)(ft.cY),
                    l = yield(0, u.Ys)(Rt.MQ),
                    s = yield(0, u.Ys)(Rt.Ac),
                    d = yield(0, u.RE)(un.Xu, n); return { account_id: s.legacyAccountId, account_uid: s.accountUid, attribution_user_id: Mn.Z.getUser(), form_uid: n, form_visitor_id: d, typeform_view_id: l, ws_owner_account_id: s.legacyAccountId } }

            function* aa(n, l) { var s = yield(0, u.Ys)(cn.jO),
                    d = {},
                    y = {}; if (!s) return {};
                l.landing_token && (d = yield(0, u.Ys)(cn.YP)); var Q = me.rA.includes(n); return Q && (y = yield(0, u.Ys)(cn.iV)), ct(ct({}, d), y) }

            function* Lr(n, l) { var s = yield(0, u.RE)($a); return ct(ct({}, s), {}, { event: n }, l) }

            function* Ho(n, l, s) { var d = yield(0, u.Ys)(A.dH); if (!d) return null; var y = yield(0, u.Ys)(pr.d_),
                    Q = window.performance && window.performance.now && window.performance.now(),
                    Ee = window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType("navigation"),
                    ot = Ee && Ee.length && Ee[0].domComplete,
                    K = ct({ attachment_type: d.attachment && d.attachment.type || null, block_index: 0, block_ref: n, block_type: qn.G0, landing_token: y, layout_type: d.layout && d.layout.type || Me.BB.STACK, question_intent: null, question_required: null, response_id: null, prefilled_block: null, response_prefilled: null, time_since_page_load: ot ? Math.round(Q - ot) : 0 }, s),
                    Le = yield(0, u.RE)(Lr, l, K); return Le }

            function* Qa(n) { var l = yield(0, u.Ys)(A.Vl),
                    s = l.find(K => K.ref === n); if (!s) return null; var { properties: d } = s, y = {}; if ((0, Fr.t_)(s)) { var { fields: Q } = d, Ee = Q.filter(K => K.validations.required).map(K => K.subfieldKey).join(","), ot = Q.filter(K => K.validations.required).map(K => K.ref).join(",");
                    y.fields_featured = Q.map(K => K.subfieldKey).join(","), y.fields_featured_refs = Q.map(K => K.ref).join(","), Ee && (y.fields_required = Ee), ot && (y.fields_required_refs = ot) } return y }

            function* oa(n, l, s) { var d = yield(0, u.Ys)(A.Vl),
                    y = d.find(dr => dr.ref === n); if (!y) return null; var Q = yield(0, u.Ys)(pr.d_),
                    Ee = yield(0, u.Ys)(pr.Ch),
                    ot = yield(0, u.Ys)(Fr.U6, n),
                    K = yield(0, u.Ys)(Fo.O, n),
                    Le = d.findIndex(dr => dr.ref === n),
                    Ue = yield(0, u.Ys)(A.dH);
                Ue && Le++; var qe = window.performance && window.performance.now && window.performance.now(),
                    tt = window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType("navigation"),
                    At = tt && tt.length && tt[0].domComplete,
                    Ut = ct({ attachment_type: y.attachment && y.attachment.type || null, block_index: Le, block_ref: n, block_type: y.type, landing_token: Q, layout_type: y.layout && y.layout.type || Me.BB.STACK, question_intent: K || null, question_required: ot, response_id: Ee, time_since_page_load: At ? Math.round(qe - At) : 0 }, s),
                    tr = yield(0, u.RE)(Lr, l, Ut),
                    ur = yield(0, u.RE)(aa, l, tr); return ct(ct({}, tr), ur) }

            function* Ko(n) { var l = yield(0, u.Ys)(A.Fx, n),
                    { properties: s } = l,
                    d = {}; if ((0, Fr.t_)(l)) { var y = yield(0, u.Ys)(A.GD, n),
                        [Q] = (0, A.$z)(y); if (Q) { var Ee = [],
                            ot = [];
                        s.fields.forEach(K => { var Le = K.type,
                                Ue = Q[K.ref],
                                qe = !(0, A.yr)(Le, Ue);
                            qe && (ot.push(K.ref), Ee.push(K.subfieldKey)) }), d = { fields_filled: Ee.join(","), fields_filled_refs: ot.join(","), answered: !!Ee.length } } } return d }

            function* zo(n, l) { var s, d, y = yield(0, u.Ys)(Sr.un),
                    Q = yield(0, u.Ys)(A.Vl),
                    Ee = Q.length,
                    ot = yield(0, u.Ys)(A.dH);
                ot && Ee++; var K = yield(0, u.Ys)(pr.d_),
                    Le = yield(0, u.Ys)(pr.Ch),
                    Ue = window.performance && window.performance.now && window.performance.now(),
                    qe = window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType("navigation"),
                    tt = qe && qe.length && qe[0].domComplete,
                    At = n === Sr.f3 ? "thankyou_screen" : "ending"; return ct({ attachment_type: ((s = y.attachment) === null || s === void 0 ? void 0 : s.type) || null, block_index: Ee, block_ref: n, block_type: At, landing_token: K, layout_type: ((d = y.layout) === null || d === void 0 ? void 0 : d.type) || Me.BB.STACK, response_id: Le, time_since_page_load: tt ? Math.round(Ue - tt) : 0 }, l) }

            function* er() { var n = yield(0, u.Ys)(bn.TJ); return n ? { embedding_mode: yield(0, u.Ys)(bn.IO), headers_displayed: !(yield(0, u.Ys)(bn.oI)), footers_displayed: !(yield(0, u.Ys)(bn.oo)), transparency: 100 - (yield(0, u.Ys)(bn.eG)) * 100 } : { embedding_mode: null } }

            function* Ja(n) { var { navigationType: l } = n, s = yield(0, u.Ys)(ft.cY), d = yield(0, u.Ys)(Rt.o0), y = yield(0, u.Ys)(se.TO), Q = yield(0, u.RE)(un.g6, s), Ee = yield(0, u.Ys)(Rt.qk), ot = yield(0, u.Ys)(A.dH), K = yield(0, u.Ys)(ft.qC), Le = qn.G0; if (!ot) { var Ue = yield(0, u.Ys)(A.Me, 0);
                    Le = Ue == null ? void 0 : Ue.type } var qe = { distribution_channel: na, height: window.innerHeight, is_first_conversation: d, local_time_offset: Yn(), local_timezone: An() || null, natero_feature_name: _t.START_CONVERSATION, navigation_type: l, platform: Rn(), prefilled_data: y, renderer_version: Ea, respondent_method: "web_renderer", visit_number: Q, visit_number_current_cycle: Ee, width: window.innerWidth, block_type: Le, typeform_branding: K },
                    tt = yield(0, u.RE)(Lr, _t.START_CONVERSATION, qe),
                    At = yield(0, u.RE)(er),
                    Ut = yield(0, u.RE)(aa, _t.START_CONVERSATION, tt); return tt = ct(ct(ct({}, tt), At), Ut), tt }

            function* Wo() { var n = yield(0, u.Ys)(ft.cY),
                    l = yield(0, u.RE)(un.qk, n); return yield(0, u.gz)((0, ga.EA)(l)), l }

            function* Oa() { var n = yield(0, u.Ys)(Lo.d),
                    l = yield(0, u.Ys)(ft.H),
                    s = yield(0, u.Ys)(ft.Yo),
                    d = yield(0, u.Ys)(ko.mc),
                    y = d ? Vo : Yo,
                    Q = yield(0, u.Ys)(se.TO),
                    Ee = yield(0, u.Ys)(ft.cY),
                    ot = yield(0, u.RE)(Wo, Ee),
                    K = yield(0, u.RE)(un.g6, Ee),
                    Le = yield(0, u.Ys)(ft.qC),
                    Ue = yield(0, u.Ys)(A.z0),
                    qe = yield(0, u.Ys)(ft.LP),
                    tt = !Ue && Le,
                    At = { distribution_channel: na, embedding_mode: null, form_status: y, local_time_offset: Yn(), local_timezone: An() || null, platform: Rn(), prefilled_data: Q, renderer_version: Ea, respondent_method: "web_renderer", show_navigation_arrows: !s, show_number_of_submissions: qe, typeform_branding: tt, visit_number_current_cycle: ot, visit_number: K };
                l && n && (At = ct(ct({}, At), {}, { estimated_time_to_complete: n })); var Ut = yield(0, u.RE)(Lr, _t.PRESENT_CONVERSATION, At),
                    tr = yield(0, u.RE)(er);
                Ut = ct(ct(ct({}, Ut), tr), Ha.ZP.getEventsToBeTracked()); var ur = yield(0, u.RE)(aa, _t.PRESENT_CONVERSATION, Ut); return ct(ct({}, Ut), ur) }

            function* zr() { var n = yield(0, u.Ys)(ft.cY),
                    l = yield(0, u.Ys)(Rt.o0),
                    s = yield(0, u.Ys)(pr.d_),
                    d = yield(0, u.Ys)(pr.Ch),
                    y = yield(0, u.Ys)(pr.fC),
                    Q = yield(0, u.Ys)(se.TO),
                    Ee = yield(0, u.RE)(un.g6, n),
                    ot = yield(0, u.Ys)(Rt.qk),
                    K = yield(0, u.Ys)(ft.qC),
                    Le = new Date().getTime(),
                    Ue = window.performance && window.performance.timing && window.performance.timing.domComplete,
                    qe = { distribution_channel: na, is_first_conversation: l, landing_token: s, local_time_offset: Yn(), local_timezone: An() || null, natero_feature_name: _t.CONVERSATION_SUBMITTED, navigation_type: y, platform: Rn(), prefilled_data: Q, respondent_method: "web_renderer", response_id: d, time_to_submit: Ue ? Math.round((Le - Ue) / 1e3) : -1, visit_number_current_cycle: ot, visit_number: Ee, typeform_branding: K },
                    tt = yield(0, u.RE)(Lr, _t.CONVERSATION_SUBMITTED, qe),
                    At = yield(0, u.Ys)(ft.Ou),
                    Ut = At ? { online: window.navigator.onLine } : {},
                    tr = yield(0, u.RE)(er);
                tt = ct(ct(ct({}, tt), tr), Ut); var ur = yield(0, u.RE)(aa, _t.CONVERSATION_SUBMITTED, tt); return ct(ct({}, tt), ur) }

            function* Xa(n) { var l = yield(0, u.Ys)(Rt.o0),
                    s = { distribution_channel: na, height: window.innerHeight, is_first_conversation: l, local_time_offset: Yn(), local_timezone: An() || null, natero_feature_name: n, platform: Rn(), renderer_version: Ea, respondent_method: "web_renderer_one_question_per_screen", width: window.innerWidth },
                    d = yield(0, u.RE)(Lr, n, s),
                    y = yield(0, u.RE)(er); return d = ct(ct({}, d), y), d }

            function* qa() { var n = yield(0, u.Ys)(Rt.Ac),
                    l = yield(0, u.Ys)(ft.cY),
                    s = { event: _t.TYPEFORM_PREVIEWED, form_uid: l, account_id: n.legacyAccountId, account_uid: n.accountUid, natero_feature_name: _t.TYPEFORM_PREVIEWED }; return s }

            function* ia(n) { var l = yield(0, u.Ys)(Rt.o0),
                    s = yield(0, u.Ys)(pr.d_),
                    d = yield(0, u.Ys)(pr.Ch),
                    y = yield(0, u.RE)(er),
                    Q = ct(ct({ is_first_conversation: l, landing_token: s, platform: Rn(), response_id: d }, y), n); return Q }

            function* Go(n) { var l = yield(0, u.RE)(ia, { item: "viral_branding", label: n }),
                    s = yield(0, u.RE)(Lr, _t.ITEM_CLICKED, l),
                    d = yield(0, u.Ys)(cn.lA); return d && (s.form_uid = yield(0, u.Ys)(cn.vc), s.form_visitor_id = yield(0, u.RE)(un.Xu, s.form_uid)), ct({}, s) }

            function* cl(n, l, s) { var d = yield(0, u.RE)(ia, { item: "endscreen_cta", label: n, value: s, navigation_type: l }),
                    y = yield(0, u.RE)(Lr, _t.ITEM_CLICKED, d); return y }

            function* ul(n) { var l = yield(0, u.RE)(ia, { item: "thankyou_screen_social", label: n }),
                    s = yield(0, u.RE)(Lr, _t.ITEM_CLICKED, l); return s }

            function eo(n, l) { var s = Object.keys(n); if (Object.getOwnPropertySymbols) { var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) { return Object.getOwnPropertyDescriptor(n, y).enumerable })), s.push.apply(s, d) } return s }

            function Ca(n) { for (var l = 1; l < arguments.length; l++) { var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? eo(Object(s), !0).forEach(function(d) { dl(n, d, s[d]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : eo(Object(s)).forEach(function(d) { Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d)) }) } return n }

            function dl(n, l, s) { return l in n ? Object.defineProperty(n, l, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : n[l] = s, n }

            function* vl(n) { return yield(0, u.RE)(Ja, n) }

            function* fl() { var n = E();
                yield(0, u.qn)(C.Zg), yield(0, u.gz)({ type: me.fb }), yield(0, u.gz)((0, De.QZ)()), yield(0, u.gz)({ type: C.yL, payload: { ref: n.fields[0].ref } }), yield(0, u.RE)(In.jq) }

            function* $o(n) { yield(0, u.qn)(De.QZ.type); var l = yield(0, u.RE)(Oa);
                yield(0, u.gz)(n, { data: Ca({}, l) }); var s = yield(0, u.RE)(ra, vl);
                yield(0, u.gz)(n, { data: Ca({}, s) }) }
            var On = c(38922),
                Sa = c(45152),
                Qo = c(20534);

            function* Jo(n) { var l = yield(0, u.Ys)(ft.BE),
                    s = yield(0, u.Ys)(Qo.Wl),
                    d = yield(0, u.Ys)(ft.I6); if (!(d || !l)) { if ((0, On.jh)({ groups: n.type === Z.e6.type ? s : Sa.o5, timestamp: new Date }), !(0, On.jW)()) { yield(0, u.RE)(On.yn); return }
                    yield(0, u.gz)(ga.MB) } }

            function* Xo() { var n = yield(0, u.Ys)(ft.I6); if (!n) { var l = yield(0, u.Ys)(ft.BE),
                        s = (0, On.Zm)(); if (!l && !s) {
                        (0, On.jh)({ groups: [...Sa.o5], timestamp: new Date, implicitConsent: !0 }); return } if (l && s) { var d = (0, On.kz)(); if (!d) return;
                        (0, On.vV)() } } }

            function* qo() { yield(0, u.RE)(Xo), yield(0, u.Fm)([Z.jk.type, Z.e6.type], Jo) }
            var to = c(44376),
                ro = c(37223),
                no = c(75273);

            function* ei(n) { var l = yield(0, u.Ys)(ft.cY),
                    s = yield(0, u.Ys)(pr.fb),
                    d = yield(0, u.Ys)(Sr.un);
                yield(0, u.gz)((0, ro.Xf)()), yield(0, u.gz)((0, no.Nc)(d.ref)), typeof n == "function" && (yield(0, u.RE)(n, l, s)) }
            var Pr = c(19338),
                wr = c(50945),
                Pa = { prod: "tfprod", dev: "tfdev" },
                ti = ["localhost", "0.0.0.0"],
                ri = () => { var n = window.location.hostname.split("."),
                        l = n.lastIndexOf("typeform"),
                        s = n.slice(0, l); return s.length > 1 ? s[s.length - 1] === "tfdev" ? s[s.length - 2] : s[s.length - 1] : null },
                ao = () => ti.includes(window.location.hostname),
                oo = () => !!ri(),
                io = () => ao() || oo() ? Pa.dev : Pa.prod; const wa = io; var ni = .1;

            function* ai(n, l) { for (;;) { var s = yield(0, u.qn)(n);
                    yield(0, u.RE)(l, s.payload) } }

            function* la(n, l) { yield(0, u.Cs)(ai, n, l) }

            function lo() { wr.v.init({ applicationId: "8ef45d76-7592-4725-a010-baff27b2bb06", clientToken: "pub450c9b28489f3fca4f28525ad316e45e", service: "renderer", env: wa(), version: window.rendererReleaseVersion, sampleRate: 100, premiumSampleRate: 0, useSecureSessionCookie: !0 }) }

            function oi() { Pr.fy.init({ clientToken: "pub450c9b28489f3fca4f28525ad316e45e", env: wa(), forwardConsoleLogs: ["error"], sampleRate: 100, service: "renderer", version: window.rendererReleaseVersion }) }

            function* ii() { yield(0, u.RE)(li) }

            function* so() { var n = yield(0, u.Ys)(Rt.uu); if (!n) { yield(0, u.qn)(C.n4), yield(0, u.RE)(oi); var l = yield(0, u.Ys)(to.WJ),
                        s = l || Math.random() <= ni / 100;
                    s && (yield(0, u.RE)(lo)), yield(0, u.RE)(Ta), yield(0, u.RE)(ci), yield(0, u.RE)(ra, ii), yield* la(C.Zg, si), yield* la(C.$4, Un), yield* la(C.p2, co), yield* la(C.Fu, Ia) } }

            function* Ta() { var n = yield(0, u.Ys)(ft.cY),
                    l = yield(0, u.Ys)(Rt.MQ),
                    s = yield(0, u.Ys)(Rt.Ac);
                Pr.fy.addLoggerGlobalContext("isTouch", (0, _n.T)()), Pr.fy.addLoggerGlobalContext("formUid", n), Pr.fy.addLoggerGlobalContext("sessionId", l), Pr.fy.addLoggerGlobalContext("planName", s == null ? void 0 : s.planName); var d = yield(0, u.Ys)(bn.TJ),
                    y = yield(0, u.Ys)(bn.IO);
                d && Pr.fy.addLoggerGlobalContext("embeddingMode", y), wr.v.setGlobalContextProperty("isTouch", (0, _n.T)()), wr.v.setGlobalContextProperty("formUid", n), wr.v.setGlobalContextProperty("sessionId", l), wr.v.setGlobalContextProperty("planName", s == null ? void 0 : s.planName), d && wr.v.setGlobalContextProperty("embeddingMode", y) }

            function li() { Pr.fy.logger.info("startConversation"), wr.v.addAction("startConversation") }

            function si() { Pr.fy.logger.info("conversationSubmitted"), wr.v.addAction("conversationSubmitted") }

            function Ia() { Pr.fy.logger.info("submitRequest"), wr.v.addAction("submitRequest") }

            function ci() { Pr.fy.logger.info("visit"), wr.v.addAction("visit") }

            function Un(n) { var { errorCode: l, errorDescription: s, errorDetails: d } = n;
                (0, In.vb)({ code: l, details: d }) || (Pr.fy.logger.info("submitFailed", { errorCode: l, errorDescription: s, errorDetails: JSON.stringify(d) }), wr.v.addAction("submitFailed", { errorCode: l, errorDescription: s, errorDetails: JSON.stringify(d) })) }

            function co(n) { var { errorCode: l } = n;
                Pr.fy.logger.info("submitRetry", { errorCode: l }), wr.v.addAction("submitRetry", { errorCode: l }) } var Tr = c(46746),
                en = c(96512);

            function* Pt() { yield(0, u.qn)(C.n4), yield(0, u.Cs)(dn) }

            function* dn() { var n = yield(0, u.Ys)(ft.cY),
                    l = yield(0, u.Ys)(Rt.MQ),
                    s = navigator.userAgent,
                    d = yield(0, u.Ys)(ha.N5),
                    y = d ? Object.keys(d).map(tt => ({ test_id: tt, variant_label: d[tt] })) : []; try { var Q = { formId: n, responseId: l, userAgent: s, runningExperiments: JSON.stringify(y) },
                        Ee = d && d[ta.EM] === ta.c7,
                        ot = Ee ? en.V.endpoints.insightsV3 : en.V.endpoints.insights,
                        K = new Tr.f(Q, { endpoint: "".concat(en.V.apiHost, "/forms/").concat(n, "/").concat(ot) });
                    yield(0, u.ib)(C.lY, function*() { yield(0, u.RE)([K, K.onClose]) }); var Le = yield(0, u.Ys)(A.z0);
                    Le && (yield(0, u.RE)([K, K.onActivateBlock], { id: "WelcomeScreenID" }), yield(0, u.qn)(C.Ym)); var Ue = yield(0, u.Ys)(A.tK),
                        qe = yield(0, u.Ys)(A.Fx, Ue);
                    qe && (yield(0, u.RE)([K, K.onActivateBlock], { id: qe.id })), yield(0, u.ib)(C.yL, function*(tt) { var At = yield(0, u.Ys)(A.Fx, tt.payload.ref);
                        At && (yield(0, u.RE)([K, K.onActivateBlock], { id: At.id })) }), yield(0, u.ib)(C.Zg, function*() { yield(0, u.RE)([K, K.onSubmit]) }) } catch (tt) { console.error(tt) } }
            var sa = c(50481),
                Ra = { sendEvent: (n, l) => { var { formId: s, value: d } = l;
                        window.ga && window.ga("send", "event", s, n, d) }, events: n => { switch (n) {
                            case C.aR:
                                return { eventName: "TypeformQuestionPassed", mapStateToEventData: l => { var s = (0, A.tK)(l),
                                            d = (0, A.Fx)(l, s); return { formId: (0, ft.cY)(l), value: d.title } }, shouldSendEvent: l => { var s = (0, A.tK)(l),
                                            d = (0, A.Fx)(l, s); return !!d && d.type !== qn.mQ && d.type !== qn.wM } };
                            case C.Zg:
                                return { eventName: "TypeformSubmit", mapStateToEventData: l => ({ formId: (0, ft.cY)(l), value: (0, ft.yb)(l) }) };
                            default:
                                return !1 } } }; const uo = Ra; var Hn = !0,
                ui = { sendEvent: (n, l) => { window.fbq && window.fbq("trackSingleCustom", l.pixelId, n) }, events: n => { switch (n) {
                            case C.yL:
                            case C.aR:
                            case C.Ym:
                                return { eventName: "TypeformFirstInteraction", mapStateToEventData: l => ({ pixelId: (0, Rt.gG)(l) }), shouldSendEvent: Aa };
                            case C.Zg:
                                return { eventName: "TypeformSubmit", mapStateToEventData: l => ({ pixelId: (0, Rt.gG)(l) }) };
                            default:
                                return !1 } } };

            function Aa() { return Hn ? (Hn = !1, !0) : !1 } const di = ui; var vo = !0,
                fo = { sendEvent: n => { window.googleTagManager && window.googleTagManager.push({ event: n }) }, events: n => { switch (n) {
                            case C.yL:
                            case C.aR:
                            case C.Ym:
                                return { eventName: "TypeformFirstInteraction", shouldSendEvent: Da };
                            case C.Zg:
                                return { eventName: "TypeformSubmit" };
                            default:
                                return !1 } } };

            function Da() { return vo ? (vo = !1, !0) : !1 } const po = fo; var mo = {
                [sa.D1]: uo, [sa.UR]: di, [sa.qN]: po }; const Dn = mo;

            function* Ba() { var n = yield(0, u.Ys)(Rt.XA);
                yield(0, u.rM)(function*() { var l = yield(0, u.qn)(C.Zg);
                    yield(0, u.RE)(Kn, l, Dn, n) }), yield(0, u.rM)(function*() { for (;;) { var l = yield(0, u.qn)(C.aR);
                        yield(0, u.RE)(Kn, l, Dn, n) } }), yield(0, u.rM)(function*() { var l = yield(0, u.qn)(C.Ym);
                    yield(0, u.RE)(Kn, l, Dn, n) }), yield(0, u.rM)(function*() { for (;;) { var l = yield(0, u.qn)(C.yL);
                        yield(0, u.RE)(Kn, l, Dn, n) } }) }

            function* Kn(n, l, s) { var d = yield(0, u.Ys)(cn.jO); if (!d) { var y = s.filter(Q => l[Q] && !!l[Q].events(n.type));
                    yield(0, u.$6)(y.map(Q => (0, u.RE)(xa, l[Q], n))) } }

            function* xa(n, l) { var s = n.events(l.type),
                    d = s.shouldSendEvent ? yield(0, u.Ys)(s.shouldSendEvent) : !0; if (d) { var y = s.mapStateToEventData ? yield(0, u.Ys)(s.mapStateToEventData) : void 0;
                    yield(0, u.RE)(n.sendEvent, s.eventName, y) } }
            var go = c(99612),
                zn = c(80951),
                vi = c(2639),
                Bn = c(70373),
                fi = c(84092),
                ho = c(60707),
                ja = c(86520),
                ka = c(51053);

            function* yo() { yield(0, u.ib)(C.M1, bo) }

            function* bo() { var n = yield(0, u.Ys)(A.tK),
                    l = yield(0, u.Ys)(A.$8, n),
                    s = yield(0, u.Ys)(A.Fx, n),
                    d = yield(0, u.Ys)(A.GD, n),
                    y = yield(0, u.RE)(A.lJ, d); if (l && s && !y && (0, Bn._6)(s.type)) { var Q = yield(0, u.Ys)(Fr.pi, n),
                        Ee = (0, fi.I)(s, window.location.hash),
                        ot = (0, ho.L)(s, Ee);
                    ot && Ee !== null && Ee !== void 0 && Ee.length && (yield(0, ka.PB)(), yield(0, u.gz)((0, ja.eQ)(s.ref, Ee, {}, { isFromPrefilledAnswer: !0 })), Q && (yield(0, ka.Be)(), yield(0, u.gz)((0, ja.UC)(s.ref, {}, { source: "answer_url", isFromPrefilledAnswer: !0 })))) } }
            var Eo = c(29253);

            function* Wn() { yield(0, u.Cs)(or) }

            function* or() { var n = yield(0, u.Ys)(ft.cY);
                yield(0, u.gz)((0, Tn.CN)()); try { var l = yield(0, u.RE)(Eo.HS, n); return yield(0, u.gz)((0, Tn.TV)(l)) } catch (s) { yield(0, u.gz)((0, Tn.fq)()) } }
            var cr = c(79301);

            function* mr() { yield(0, u.ib)([C.Dv], pi) }

            function* pi() { var n = yield(0, u.Ys)(A.S1);
                n && (yield(0, u.gz)((0, cr.OG)())), yield(0, u.gz)((0, cr.K9)()) }

            function* mi(n) { var l = yield(0, u.Ys)(ft.I6),
                    s = yield(0, u.Ys)(ft._S),
                    d = yield(0, u.Ys)(ft.Ou),
                    y = yield(0, u.Ys)(ft.Q5);
                y && (yield(0, u.Cs)(qo), yield(0, u.Cs)(Wa)), s || l ? yield* hi(n) : d ? yield*(0, zn.ZP)() : yield* gi() }

            function* gi() { var n = yield(0, u.Ys)(ft.Q5),
                    l = yield(0, u.Ys)(cn.cp); if (l && (yield(0, u.Cs)(fl)), n) { yield(0, u.Cs)(Ba), yield(0, u.Cs)(so); var s = yield(0, u.Ys)(to.uz, "res-906-enable-insights-tracking");
                    s && (yield(0, u.Cs)(Pt)) } var d = yield(0, u.Ys)(ft.LP);
                d && (yield(0, u.Cs)(Wn)), yield(0, u.rM)(go.ZP), yield(0, u.rM)(mr), yield(0, u.rM)(vi.Z), yield(0, u.rM)(function*() { yield(0, u.RE)(ra, In.jq) }), yield(0, u.Cs)(yo), yield(0, u.$6)([(0, u.Fm)(C.Fu, In.Of)]) }

            function* hi(n) { yield(0, u.rM)(go.ZP), yield(0, u.$6)([(0, u.ib)(C.Fu, ei, n)]) }

            function yi(n, l) { var s = (0, b.ZP)({ onError: Q => { setTimeout(() => { throw Q }, 0) } }),
                    d = [J.Z, s],
                    y = (0, i.xC)({ reducer: jo, middleware: d, preloadedState: n }); return s.run(mi, l), y } }, 96512: (Yt, Ze, c) => { c.d(Ze, { V: () => J }); var i = c(610),
                b = (0, i.F)() && window.__apiEntrypoint__ ? window.__apiEntrypoint__ : "",
                J = { apiHost: b, endpoints: { forms: "forms/", submissions: "complete-submission", landings: "start-submission", uploads: "fields/", insights: "insights/events/", insightsV3: "insights/events/v3/" } } }, 51053: (Yt, Ze, c) => { c.d(Ze, { Be: () => Pe, PB: () => me, YN: () => ze, i4: () => Se, rJ: () => b }); var i = c(81006),
                b = () => { var Me, We; if (!((Me = window) !== null && Me !== void 0 && (We = Me.location) !== null && We !== void 0 && We.search)) return null; var B = window.location.search.match(/prefilled_answer=\d+/); return B ? [parseInt(B[0].split("=")[1], 10)] : null },
                J = Me => Me.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"),
                Se = Me => { var We, B; if (!((We = window) !== null && We !== void 0 && (B = We.location) !== null && B !== void 0 && B.hash)) return null; var le = window.location.hash.match(new RegExp("answers-".concat(J(Me), "=([^&]+)"))); return le ? le[1].split(",").map(decodeURIComponent).map(F => isNaN(F) ? F : parseInt(F, 10)) : null },
                De = Me => new Promise(We => setTimeout(We, Me)),
                me = () => De(i.km),
                Pe = () => De(i.YJ),
                ze = () => De(i.gG) }, 54325: (Yt, Ze, c) => { c.d(Ze, { FF: () => B, OI: () => me, fD: () => le }); var i = c(62353),
                b = c.n(i),
                J = c(14246),
                Se = c(97056),
                De = c(4586),
                me = "https://www.typeform.com/explore/",
                Pe = "THANK_YOU_SCREEN_REDIRECT",
                ze = "AFTER_SUBMIT_REDIRECT",
                Me = "_parent",
                We = { allowUnknownSchemes: !0 },
                B = (L, E) => { I(L, ze, E) },
                le = (L, E) => { I(L, Pe, E) },
                F = L => b()(L, We),
                V = () => { if (window && window.location) { var L = window.location.search.match(/typeform-embed-redirect-target=(_self|_top|_blank|_parent)/i); if (L && L[1]) return L[1] } return Me },
                w = (L, E) => { var R = new URL(L),
                        Z = new URLSearchParams(new URL(E).search); return Z.forEach((C, a) => { R.searchParams.get(a) || R.searchParams.set(a, C) }), R.toString() },
                I = (L, E, R) => { if (!!F(L)) { var Z = L,
                            C = Z.startsWith(me),
                            a = !C && Z.includes(".typeform.com/"); if (a && (0, Se.Z)() && (0, De.A)() && V() === "_self" && (Z = w(L, window.location.href)), (0, Se.Z)()) switch (E) {
                            case Pe:
                                { J.fD(R, Z); break }
                            case ze:
                                { J.oQ(R, Z); break }
                            default:
                                break }
                        try { var Ot = document.createElement("a"),
                                wt = "";
                            (0, Se.Z)() ? wt = V(): C && (wt = "_blank"), Ot.href = Z, Ot.target = wt, document.body.appendChild(Ot), Ot.click(), document.body.removeChild(Ot); var Tt = window.location.origin + window.location.pathname; if (Z.includes(Tt)) { var ue = (0, Se.Z)() ? window.parent : window;
                                setTimeout(() => ue.location.reload(), 500) } } catch ($e) { console.error($e) } } } }, 34296: (Yt, Ze, c) => { c.d(Ze, { Z: () => i });
            class i extends Error { constructor(J, Se, De) { super("".concat(J, ": ").concat(Se)), this.code = J, this.description = Se, this.details = De } } }, 992: (Yt, Ze, c) => { c.r(Ze), c.d(Ze, { default: () => ld }); var i = c(71383),
                b = c(97489),
                J = c(9034),
                Se = c(23774),
                De = c(74406),
                me = c(12726),
                Pe = c(72814),
                ze = c(98153),
                Me = c(94476),
                We = c(36601),
                B = c(68656),
                le = c(75273),
                F = c(71510),
                V = c(37223),
                w = c(44893),
                I = c(14132),
                L = c(76175),
                E = c(3547),
                R = c(91360),
                Z = c(73485),
                C = c(10995),
                a = c.n(C),
                Ot = c(56966),
                wt = c(37649),
                Tt = c(41069),
                ue = c(47153),
                $e = c(29770),
                dt = c(23426),
                gt = c(9970),
                rr = c(10381),
                se = c(63715),
                A = c(93978),
                ke = c.n(A),
                he;

            function rt(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e }

            function ht(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) } var It = 300,
                bt = 500,
                zt = b.ZP.div.withConfig({ displayName: "MouseWheelTrigger__Root", componentId: "sc-i71xob-0" })(he || (he = ht([`
  outline: none;
  width: 100%;
`])));
            class Mt extends i.Component { constructor() { super(...arguments), rt(this, "Lethargy", new(ke())), rt(this, "accumulated", 0), rt(this, "timeout", null), rt(this, "disableTimeout", null), rt(this, "disabledSwipe", !1), rt(this, "handleWheelScroll", t => { var { upHandler: r, downHandler: o } = this.props, v = this.Lethargy.check(t), f = t.deltaY;!this.disabledSwipe && v !== !1 && (this.accumulated += f, this.setTimeout(() => { this.accumulated = 0 })), this.accumulated < -It && (r(), this.accumulated = 0, this.disableSwipe(bt)), this.accumulated > It && (o(), this.accumulated = 0, this.disableSwipe(bt)) }) }
                setTimeout(t) { this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(t, 500) }
                disableSwipe(t) { this.disableTimeout && clearTimeout(this.disableTimeout), this.disabledSwipe = !0, this.disableTimeout = setTimeout(() => { this.disabledSwipe = !1 }, t) }
                render() { return i.createElement(zt, { style: this.props.customStyle, onWheel: this.handleWheelScroll }, this.props.children) } }
            Mt.propTypes = { children: a().node, customStyle: a().object, downHandler: a().func, upHandler: a().func }; const lr = Mt; var Nr;

            function br() { return br = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, br.apply(this, arguments) }

            function Er(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(v) { return Object.getOwnPropertyDescriptor(e, v).enumerable })), r.push.apply(r, o) } return r }

            function Mr(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t] != null ? arguments[t] : {};
                    t % 2 ? Er(Object(r), !0).forEach(function(o) { _r(e, o, r[o]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Er(Object(r)).forEach(function(o) { Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o)) }) } return e }

            function _r(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e }

            function Dr(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) } var rn = b.ZP.div.withConfig({ displayName: "swipeable__Swipeable", componentId: "sc-1ew37v3-0" })(Nr || (Nr = Dr([`
  `, `
`])), e => { var { fullHeight: t } = e; return t && "height: 100%;" }),
                nn = e => { var { canSwipeNext: t, canSwipePrevious: r, goToNextBlock: o, goToPreviousBlock: v, fullHeight: f, children: m } = e, g = (0, i.useRef)(!1), p = (0, i.useRef)(!1), h = (0, i.useRef)(!1), P = () => { if (g.current) return !1;
                        p.current = !t, h.current = !r, g.current = !0 }, T = z => { g.current = !1; var X = 50; if (!(Math.abs(z.deltaY) <= X / z.velocity)) { if (z.dir === "Up" && t && !p.current) { o({ navigationType: se.j9 }); return }
                            z.dir === "Down" && r && !h.current && v({ navigationType: se.lr }) } }, j = { delta: 10 }, Y = (0, rr.QS)(Mr({ onSwiped: T, onSwiping: P }, j)), re = () => {!r || v({ navigationType: se.B2 }) }, H = () => {!t || o({ navigationType: se.gN }) }, M = f ? { height: "100%" } : {}; return i.createElement(lr, { customStyle: M, downHandler: H, upHandler: re }, i.createElement(rn, br({ fullHeight: f }, Y, j), m)) }; const Zr = nn;

            function Wr() { return Wr = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, Wr.apply(this, arguments) } var Gr = i.createContext(!1),
                Br = Gr.Consumer,
                $r = e => t => i.createElement(Br, null, r => i.createElement(e, Wr({}, t, { isBlockChanging: r }))); const $t = Gr; var te = c(18);

            function Vr() { return Vr = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, Vr.apply(this, arguments) } var Yr = ["INPUT", "TEXTAREA", "LI", "SELECT", "BUTTON"],
                an = ["radio"],
                gn = "aria-haspopup",
                sr = i.createContext();
            sr.displayName = "GlobalEventListenerContext"; var Ur = e => { var { areGlobalListenersDisabled: t, children: r, commonHandleKeydown: o } = e, v = (0, i.useRef)(null), f = m => { t || (v.current = { onGlobalKeyDown: m }) }; return (0, i.useEffect)(() => { if (t) return te.Z; var m = g => { var p, { nodeName: h } = g.target,
                            P = ((p = g.target.attributes) === null || p === void 0 ? void 0 : p.getNamedItem("role")) && g.target.attributes.getNamedItem("role").value,
                            T = g.target.hasAttribute(gn),
                            j = Yr.includes(h) || an.includes(P) || T; if (!j) { var Y, re = (Y = v.current) === null || Y === void 0 ? void 0 : Y.onGlobalKeyDown;
                            re && re(g) }
                        o(g, j) }; return window.addEventListener("keydown", m), () => { window.removeEventListener("keydown", m) } }, [t, o]), i.createElement(sr.Provider, { value: f }, r) };
            Ur.propTypes = { areGlobalListenersDisabled: a().bool, children: a().node, commonHandleKeydown: a().func }; var N = (e, t) => { var r = (0, i.useContext)(sr);
                    (0, i.useEffect)(() => { e && r(t) }, [e, t]) },
                Be = sr.Consumer,
                Qe = e => function(r) { var o = r.isLivePreview; return o ? i.createElement(e, r) : i.createElement(Be, null, v => i.createElement(e, Vr({}, r, { updateGlobalEventListenerRef: v }))) },
                Ct = c(66234),
                ae = c(19516),
                xt = c(44376),
                Lt = c(82462),
                Jt = c(56890),
                Wt, Or, xr, Qr = (Wt = window) === null || Wt === void 0 || (Or = Wt.location) === null || Or === void 0 || (xr = Or.search) === null || xr === void 0 ? void 0 : xr.includes("typeform-render-all-blocks=true"),
                on = (e, t, r, o) => { var { currentRef: v, previousRef: f, previousActiveRef: m, nextRef: g } = r, p = e.ref === v, h = e.ref === m, P = e.ref === f, T = e.ref === g, j = (0, Jt.L6)(e.type), Y = t == null ? void 0 : t.hasBeenInteractedWith, re = o && (p || P || h); return Qr || re || p || P || T || j && Y },
                O = c(72090),
                Fe = c(8941),
                Re = c(30999),
                we = c(86520),
                vt = c(86040);

            function jt(e, t) { return { type: vt.gu, payload: { blockRef: e, show: t } } }

            function Qt(e) { return { type: vt.vR, payload: { isScrollNearTop: !e } } } var jr = c(4567);

            function kr() { return e => { setTimeout(() => { e({ type: vt.OK, payload: { isInputFocused: !1 } }) }, 50) } }

            function Ht() { return { type: vt.OK, payload: { isInputFocused: !0 } } } var ln = "ABSTAIN",
                S = "LOCATION_ADDRESS",
                x = "USER_BIRTHDAY_DATE",
                ce = "LOCATION_COUNTRY",
                ve = "USER_EMAIL",
                ge = "USER_FIRST_NAME",
                Ve = "USER_LAST_NAME",
                Ye = "USER_NAME",
                nt = "COMPANY_NAME",
                Ke = "USER_INFO_JOB_ROLE",
                mt = "USER_PHONE",
                Kt = "LOCATION_ZIP_CODE",
                nr = "USER_GENDER",
                Cr = "USER_WEBSITE",
                sn = {
                    [ln]: "off", [S]: "street-address", [x]: "bday", [ce]: "country", [ve]: "email", [ge]: "given-name", [Ve]: "family-name", [Ye]: "name", [nt]: "organization", [Ke]: "organization-title", [mt]: "tel", [Kt]: "postal-code", [nr]: "sex", [Cr]: "off" },
                hn = c(52734),
                at = c(44179),
                Hr = c(83562),
                Kr = c(68531),
                Ln = c(97949),
                yn = (e, t) => { var r, o = (0, w.Fx)(e, t); if (!!((r = o.application) !== null && r !== void 0 && r.iframeUrl)) { var v = new URL(o.application.iframeUrl),
                            f = new URLSearchParams(v.search),
                            m = (0, at.p0)(t)(e); return m.forEach(g => { g.value !== Ln.Yr && f.set(g.ref, g.value) }), v.search = f, "".concat(v) } },
                kt = c(92027),
                Ft = c(64923),
                Cn = c(67026),
                yt = c(87676),
                Jn = c(11255),
                Sn = c(77923),
                Pn = c(13836),
                Sr = c(84273),
                Fr = c(54889),
                Nt = c(34757),
                Je = c(2380),
                fr = c(13219),
                St = c(81006),
                Xn = c(31424),
                wn = c(97056);

            function Tn(e) { var { boundingClientRect: t = {}, onlyTop: r = !1, offsetTop: o = 0, offsetBottom: v = 0 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}; if (!e || typeof e.getBoundingClientRect != "function") return !1; var f = e.getBoundingClientRect(),
                    m = { height: (0, wn.Z)() ? document.documentElement.clientHeight : t.height || window.innerHeight || document.documentElement.clientHeight, top: t.top || 0 },
                    g = f.top >= m.top + o,
                    p = f.bottom <= m.height - v; return r ? g : g && p } var Na = () => navigator.platform === "MacIntel",
                ar = c(13796),
                Jr = c(44955),
                Gt = c(26633),
                Nn = c(62776),
                pa = ["label.retrySubmit.first", "label.retrySubmit.second", "label.retrySubmit.third", "label.retrySubmit.fourth"],
                jo = e => { var t = pa.length; return e > t ? pa[t - 1] : pa[e - St.YW] },
                u = e => { var { count: t, timeout: r, t: o } = e; return r === 0 ? i.createElement("div", null, o("label.retryLink.retrying")) : i.createElement(i.Fragment, null, i.createElement("div", { "data-qa": "retry-count", "aria-hidden": "true" }, o(jo(t), { timeout: r })), r === 3 ? i.createElement(Nn.Z, { "aria-live": "assertive" }, o("label.retryLink.counter", { timeout: r })) : null) };
            u.propTypes = { count: a().number, timeout: a().number, t: a().func }, u.defaultProps = { t: e => e }; const cn = (0, Gt.Z)(u); var In = e => { var { centered: t, color: r, count: o, messageKey: v, t: f, timeout: m } = e; return i.createElement(Jr.ZP, { role: "timer", "aria-live": "assertive", size: "sizeN1", color: r, useDefaultFont: !0, align: t ? "center" : "left" }, (0, ar.Z)(f(v)), i.createElement(cn, { count: o, timeout: m })) };
            In.propTypes = { centered: a().bool, color: a().string, count: a().number, messageKey: a().string, t: a().func, timeout: a().number }, In.defaultProps = { messageKey: "label.warning.slowSubmission", t: e => e }; const Ma = (0, Gt.Z)(In); var ma = c(95798),
                Mn = c(8556);

            function _n() { return _n = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, _n.apply(this, arguments) } var qn = e => { var { ariaDescribedBy: t, backgroundColor: r = B.Bb, buttonColor: o = B.Bb, buttonContentColor: v, centered: f, disabled: m, helperColor: g = B.Bb, helperText: p = "label.buttonHint.default", hideIcon: h = !1, label: P = "label.button.ok", onClick: T, isVisible: j = !1, buttonRef: Y, t: re = X => X, hideHelperText: H = !1 } = e, M = (0, Se.Pg)(), z = j ? "-visible" : ""; return i.createElement(ma.Z, _n({ ariaDescribedBy: t, centered: f, color: o, contentColor: v, content: (0, ar.Z)(re(P)), contextBackgroundColor: r, dataQa: "ok-button".concat(z, " deep-purple-ok-button").concat(z), disabled: m, helperColor: g, helperText: M ? null : (0, ar.Z)(re(p)) }, h ? {} : { iconSvg: Mn.Z }, { onClick: T, size: "medium", tabIndex: j ? 0 : -1, buttonRef: Y, hideHelperText: H })) }; const ga = qn; var Zn = e => { var { ariaDescribedBy: t, centered: r, disabled: o, fullWidth: v, hasMarginBottom: f, helperText: m, isComplete: g, isLivePreview: p, isPaymentBlockAnswered: h, isSubmitting: P, isVisible: T, onClick: j, price: Y, size: re, t: H, theme: M, buttonRef: z, hideHelperText: X } = e, W = (0, Se.Pg)(), oe = H("label.button.submit");
                h && (oe = H("label.button.submitAndPay", { price: Y })); var G = M.colors.button,
                    $ = "submit-button deep-purple-submit-button"; return i.createElement(ma.Z, { ariaDescribedBy: t, buttonRef: z, centered: r, color: G, contentColor: M.colors.buttonContent, content: oe, contextBackgroundColor: M.colors.background, dataQa: $, disabled: o || !p && (P || g), fullWidth: v, hasMarginBottom: f, helperColor: M.colors.primary, helperText: !W && !r ? (0, ar.Z)(H(m)) : "", isSpinning: !p && P, isTransparent: M.hasTransparentButton, onClick: j, size: re, tabIndex: T ? 0 : -1, hideHelperText: X }) };
            Zn.defaultProps = { centered: !1, helperText: "label.buttonHint.default", size: "large", theme: { colors: { backgroundColor: B.Bb, button: B.Bb, primary: B.Bb }, hasTransparentButton: !1 }, t: e => e }, Zn.propTypes = { ariaDescribedBy: a().string, buttonRef: a().object, centered: a().bool, disabled: a().bool, fullWidth: a().bool, hasMarginBottom: a().bool, helperText: a().string, isComplete: a().bool, isLivePreview: a().bool, isPaymentBlockAnswered: a().bool, isSubmitting: a().bool, isVisible: a().bool, onClick: a().func, price: a().string, size: a().string, t: a().func, theme: a().object, hideHelperText: a().bool }; const ko = (0, Gt.Z)(Zn); var Fo = c(1263),
                Rt;

            function ft(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) } var bn = b.ZP.div.withConfig({ displayName: "error-message__ErrorMessageWrapper", componentId: "sc-1qs1k8z-0" })(Rt || (Rt = ft([`
  `, `;
  `, `;
  `, `
`])), e => e.isFullWidth && "width: 100%;", e => e.centered && "text-align: center", e => e.isErrorIgnorable && `
    position: static;
    margin-bottom: `.concat(2 * Je.bf, `px;
  `)),
                Lo = e => { var { centered: t, errorMessageRef: r, id: o, message: v, visible: f = !1, isErrorIgnorable: m, isFullWidth: g = !0, prefersReducedMotion: p = !1 } = e; return f ? i.createElement(J.ZP, { isVisible: !0, shouldOverrideVisibility: !0, type: p ? "fadeIn" : "slideUp" }, i.createElement(bn, { centered: t, isErrorIgnorable: m, isFullWidth: g }, i.createElement(Fo.Z, { dataQa: "error-message-visible", id: o, message: v, errorMessageRef: r, role: "alert", visible: !0 }))) : null }; const pr = Lo; var ha = c(77124),
                un = c(21203),
                ya = c(44487),
                No = c(47836),
                ll = "center",
                Xr = "bottom",
                ea = c(65199),
                ba = c(69273),
                qr = c(25432),
                _a;

            function sl(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) } var Za = b.ZP.div.withConfig({ displayName: "footer-wrapperstyles__FooterWrapper", componentId: "sc-12dpj1x-0" })(_a || (_a = sl([`
  position: absolute;
  opacity: inherit;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  pointer-events: none;
  display: flex;
  flex-direction: column;
`]))),
                Va, Ya, Ua, Ha, ta;

            function Vn(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) } var ra = (0, b.ZP)(Za).withConfig({ displayName: "mobile-footerstyles__MobileFooterWrapper", componentId: "sc-12orp0-0" })(Va || (Va = Vn([`
  padding: `, `px;
  padding-bottom: `, `px;
  pointer-events: all;
  display: flex;
  flex-direction: column;
  position: fixed;
`])), Je.bf * 2, Je.bf * 1.5),
                Ka = b.ZP.div.withConfig({ displayName: "mobile-footerstyles__ButtonWrapper", componentId: "sc-12orp0-1" })(Ya || (Ya = Vn([`
  display: flex;
  justify-content: space-between;
  flex: 1;
`]))),
                ct = b.ZP.a.withConfig({ displayName: "mobile-footerstyles__BrandingWrapper", componentId: "sc-12orp0-2" })(Ua || (Ua = Vn([`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-top: `, `px;
  font-family: `, `;
  text-decoration: none;
`])), 1.5 * Je.bf, Je.Le),
                Mo = b.ZP.div.withConfig({ displayName: "mobile-footerstyles__BackButtonWrapper", componentId: "sc-12orp0-3" })(Ha || (Ha = Vn([`
  margin-right: `, `px;
  border-radius: `, `px;
  `, `
`])), .5 * Je.bf, .5 * Je.bf, e => { var { bgColor: t } = e; return t && "background-color: ".concat(t) }),
                _o = b.ZP.div.withConfig({ displayName: "mobile-footerstyles__TypeformLogoWrapper", componentId: "sc-12orp0-4" })(ta || (ta = Vn([`
  height: `, `px;
  width: `, `px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: `, `px;
  border-bottom: 1px solid `, `;
`])), 2.25 * Je.bf, 8 * Je.bf, .5 * Je.bf, e => { var { underlineColor: t } = e; return t }),
                Zo = 115,
                _t = "typeform-footer",
                na = "https://www.typeform.com/explore/",
                Ea = () => { var e, t = (0, ae.T)(),
                        r = (0, ae.C)(Pn.bQ),
                        o = (0, ae.C)(ba.KM),
                        v = () => { t((0, Me.JD)(_t)) },
                        f = (0, ae.C)(R.dF),
                        m = (0, ae.C)(w.tK),
                        g = (0, ae.C)(xe => (0, w.Fx)(xe, m)),
                        p = (0, ae.C)(xe => (0, E.qm)(xe, m)),
                        h = (0, ae.C)(E.Lh),
                        P = (0, ae.C)(E.I6),
                        T = (0, ae.C)(Hr.eH),
                        j = (0, ae.C)(w.fG),
                        Y = (0, B.T)() && h,
                        re = !(0, ae.C)(L.oo),
                        H = !(0, w.lv)(g),
                        M = (0, ae.C)(w.iN),
                        z = (0, ae.C)(R.gh),
                        X = (0, ae.C)(E.qC),
                        W = (0, ae.C)(Sn.il),
                        { t: oe } = (0, me.I4)(),
                        G = H && !p ? Mn.Z : null,
                        $ = xe => { t((0, le.AB)(Xr)), t((0, V.R2)(xe)) },
                        U = xe => { t((0, we.UC)(m, xe, { source: ea.b, isFromPrefilledAnswer: !1 })) },
                        fe = xe => { t((0, le.PQ)({ navigationType: (0, Lt.G)(xe) })) },
                        ne = P ? void 0 : W(na, _t),
                        ye = (0, B.Vv)(f) ? "black" : "white"; return i.createElement(J.ZP, { type: "fadeIn", isVisible: re, duration: qr.Z ? 0 : 500, delay: qr.Z ? 0 : 300 }, i.createElement(ra, null, i.createElement(ha.Z, { bgColor: f, blur: 1.5 }), i.createElement(Ka, null, r && i.createElement(Mo, { bgColor: z.colors.button }, i.createElement(ya.ZP, { color: z.colors.button, contentColor: z.colors.buttonContent, contextBackgroundColor: z.colors.background, disabled: !o, "data-tracking": "footer_arrow_left", iconButton: !0, iconSvg: No.Z, onClick: fe, isHoverable: !1, size: "large", transparent: !1, dataQa: "mobile-footer-back-button" })), p ? i.createElement(ko, { centered: !0, fullWidth: !0, hasMargins: !1, helperText: "", isComplete: M.isComplete, isLivePreview: P, isPaymentBlockAnswered: T, isSubmitting: M.isSubmitting, onClick: $, price: j, size: "large", t: oe, theme: z }) : i.createElement(ya.ZP, { isHoverable: !1, fullWidth: !0, onClick: U, iconSvg: G, size: "large", color: z.colors.button, contentColor: z.colors.buttonContent, contextBackgroundColor: z.colors.background, transparent: z.hasTransparentButton, dataQa: "mobile-footer-next-button" }, oe((e = g == null ? void 0 : g.buttonText) !== null && e !== void 0 ? e : "label.button.ok"))), X && !Y && i.createElement(ct, { rel: "noopener noreferrer", target: "_blank", href: ne, onClick: v }, i.createElement("span", { "data-qa": "mobile-footer-brand-button" }, i.createElement(Jr.ZP, { fontWeight: "regular", htmlTag: "span", responsive: !1, size: "sizeN1", color: ye }, "Powered by")), i.createElement(Nt.Z, { left: .5 }), i.createElement(_o, { underlineColor: ye }, i.createElement(un.Z, { color: ye }))))) }; const Vo = Ea; var Yo = e => { var { color: t, warningText: r, actionText: o } = e; return i.createElement(Jr.ZP, { color: t, size: "sizeN1", useDefaultFont: !0, dimmed: !0 }, r, " - ", i.createElement("a", { href: "https://www.typeform.com/help/a/report-abuse-360034113252/", target: "_blank", rel: "noopener noreferrer" }, o)) }; const En = Yo; var Rn, Yn;

            function An() { return An = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, An.apply(this, arguments) }

            function za(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(v) { return Object.getOwnPropertyDescriptor(e, v).enumerable })), r.push.apply(r, o) } return r }

            function Wa(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t] != null ? arguments[t] : {};
                    t % 2 ? za(Object(r), !0).forEach(function(o) { Uo(e, o, r[o]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : za(Object(r)).forEach(function(o) { Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o)) }) } return e }

            function Uo(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e }

            function Ga(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) } var $a = b.ZP.div.withConfig({ displayName: "block-footer__Root", componentId: "sc-1upe4h2-0" })(Rn || (Rn = Ga([`
  position: relative;
`]))),
                aa = b.ZP.div.withConfig({ displayName: "block-footer__SubmitButtonFooter", componentId: "sc-1upe4h2-1" })(Yn || (Yn = Ga([`
  width: 100%;
`]))),
                Lr = Na() ? "label.buttonHint.submit-mac" : "label.buttonHint.submit",
                Ho = e => { var t, r, o, v, f, m, g, { answer: p, application: h, ariaDescribedBy: P, blockError: T, blockRef: j, buttonText: Y, errorMessageId: re = "", errorMessageRef: H, hasFormFooter: M, hideHelperText: z, hideIcon: X, isActive: W, isAnimated: oe, isButtonFullWidth: G, isButtonTypeSubmit: $, isButtonVisible: U, isErrorMessageVisible: fe, isLivePreview: ne, isPaymentBlockAnswered: ye, isSubmitButtonVisibilityForced: xe, layout: Ne, layoutItemsSize: q, onClick: ee, onFocusLost: _, onRequireStickyFooter: k, price: Ae, showPhishingMessage: Ce, submit: He, submitErrorMessageId: _e, submitErrorMessageKey: Ie, submitForm: D, theme: ie, trackInlineSubmit: st, isErrorIgnorable: it, isFooterRedesignExperiment: Et, isPulseSurveyActive: je } = e,
                        pe = (0, i.useRef)(null),
                        Oe = (0, i.useContext)($t),
                        pt = (0, Xn.RF)(j),
                        Zt = (0, dt.T)(),
                        [Xe, de] = (0, i.useState)(!1),
                        Te = (0, Pe.Gc)(),
                        { t: Ge } = (0, me.I4)(),
                        Vt = (0, B.T)() && Et,
                        Xt = (0, ue.qe)(ie == null || (t = ie.fields) === null || t === void 0 ? void 0 : t.alignment, Ne == null ? void 0 : Ne.type),
                        qt = Xt === ue.aj.CENTER,
                        gr = G || qt,
                        ut = (0, i.useCallback)(() => { if (!!pe.current) { var yr = Tn(pe.current, Wa(Wa({}, q), {}, { offsetBottom: M ? 0 : -pe.current.offsetHeight })),
                                    mn = !Oe && U && W && !yr && (!h || Te === "sm" && !!h && !!(p != null && p.length));
                                k && k(j, mn) } }, [p, h, Te, Oe, U, W, j, pe, q, k]);
                    (0, i.useEffect)(() => { var yr, mn = () => { yr = setTimeout(ut, 200) }; return window.addEventListener("resize", mn), () => { clearTimeout(yr), window.removeEventListener("resize", mn) } }, [ut]), (0, fr.Z)(() => { ut() }, [ut, pt]), (0, i.useEffect)(() => { var yr = setTimeout(() => ut(), 1500); return () => clearTimeout(yr) }, []), (0, i.useEffect)(() => { var yr; return U ? yr = setTimeout(() => { de($) }, 200) : de(!1), () => clearTimeout(yr) }, [$, U]), (0, i.useEffect)(() => { W && U && $ && (st == null || st(j)) }, [W, U, $]); var be = U && $,
                        lt = U && !$,
                        Dt = (0, i.useRef)(null),
                        ir = (0, i.useRef)(null);
                    (0, i.useEffect)(() => { var yr = null; return xe && (0, B.T)() && be && (yr = setTimeout(() => { var mn; return ir == null || (mn = ir.current) === null || mn === void 0 ? void 0 : mn.focus() }, St.Ml + 100)), () => clearTimeout(yr) }, [xe, be]); { var Rr = (0, i.useRef)(be),
                            hr = (0, i.useRef)(lt),
                            va = ir.current === document.activeElement,
                            La = Dt.current === document.activeElement,
                            Bt = Rr.current && !be && va,
                            Fn = hr.current && !lt && La;!Oe && (Bt || Fn) && _ && _(), Rr.current = be, hr.current = lt } var Ar = (T == null ? void 0 : T.getPipingValues()) || {}; return i.createElement($a, null, i.createElement(Fr.Z, { top: Je.M6.topBlockFooter }, i.createElement(pr, { centered: qt, errorMessageRef: H, id: re, isErrorIgnorable: it, isFullWidth: !Vt, message: (0, ar.Z)(Ge && Ge(T == null ? void 0 : T.label, Ar)), prefersReducedMotion: Zt, visible: fe }), Vt ? i.createElement(Nt.Z, { top: je ? 0 : Zo / Je.bf }) : i.createElement("div", { ref: pe, "data-qa-button-visible": !!U }, be && i.createElement(aa, null, i.createElement(J.ZP, { type: "slideUp", isVisible: be, delay: U && !Xe ? St.Ml : 0, duration: oe ? St.Ml : 0 }, i.createElement(i.Fragment, null, i.createElement(Sr.ZP, { position: gr ? "center" : "start" }, i.createElement(Zn, { ariaDescribedBy: P, centered: gr, fullWidth: G, helperText: Lr, isComplete: He == null ? void 0 : He.isComplete, disabled: !be, isLivePreview: ne, isPaymentBlockAnswered: ye, isSubmitting: He == null ? void 0 : He.isSubmitting, isVisible: U, onClick: D, price: Ae, size: "medium", t: Ge, theme: ie, buttonRef: ir, hideHelperText: z })), i.createElement(Nt.Z, { top: 2 }, Xe && Ce && !(He != null && He.retry.showMessage) && !Ie && Ge && i.createElement(Sr.ZP, { position: gr ? "center" : "start" }, i.createElement(En, { color: ie == null || (r = ie.colors) === null || r === void 0 ? void 0 : r.primary, warningText: Ge("label.warning.phishing", Ar), actionText: Ge("label.action.phishing", Ar) })), (He == null ? void 0 : He.retry.showMessage) && i.createElement(Ma, { centered: qt, color: ie == null || (o = ie.colors) === null || o === void 0 ? void 0 : o.primary, count: (He == null ? void 0 : He.retry.count) - 1, timeout: He == null ? void 0 : He.retry.timeout }), !!Ie && Ge && i.createElement(pr, { centered: qt, errorMessageRef: H, id: _e, prefersReducedMotion: Zt, message: (0, ar.Z)(Ge(Ie, Ar)), visible: !!Ie }))))), lt && i.createElement(J.ZP, { type: "slideUp", isVisible: lt, delay: U && Xe ? St.Ml : 0, duration: oe ? St.Ml : 0 }, i.createElement(ga, { ariaDescribedBy: P, backgroundColor: ie == null || (v = ie.colors) === null || v === void 0 ? void 0 : v.background, buttonColor: ie == null || (f = ie.colors) === null || f === void 0 ? void 0 : f.button, buttonContentColor: ie == null || (m = ie.colors) === null || m === void 0 ? void 0 : m.buttonContent, centered: qt, helperColor: ie == null || (g = ie.colors) === null || g === void 0 ? void 0 : g.primary, helperText: "label.buttonHint.default", hideIcon: X, disabled: !lt, isVisible: U, label: Y, onClick: ee, t: Ge, buttonRef: Dt, hideHelperText: z }))))) },
                Qa = e => i.createElement(Pe.d7, null, t => { var { width: r } = t, o = r < Je.fl.md, v = o && !e.isLivePreview; return i.createElement(Ho, An({ isButtonFullWidth: v }, e)) }); const oa = Qa; var Ko = (e, t) => { var { blockRef: r, errorMessageId: o, errorMessageRef: v, hideHelperText: f, isErrorMessageVisible: m, isErrorIgnorable: g, hideButton: p } = t, h = (0, w.Fx)(e, r), P = (0, I.ZO)(e, r), T = (0, E.qs)(e), j = P || (0, E.Cf)(e, r); return { errorMessageId: o, errorMessageRef: v, hideHelperText: f != null ? f : (0, Z.Ky)(h), isActive: (0, w.$8)(e, r), isButtonTypeSubmit: (0, E.qm)(e, r), isErrorMessageVisible: m, isLivePreview: (0, E.I6)(e), isSubmitButtonVisibilityForced: (0, E.k$)(e), isPaymentBlockAnswered: (0, Hr.eH)(e), isFooterRedesignExperiment: (0, Pn.fw)(e), isButtonVisible: (!m || g) && !p && !T && j, price: (0, w.fG)(e), showPhishingMessage: (0, Sn.z_)(e), submit: (0, w.iN)(e), submitErrorMessageId: "".concat(r, "-submission-error-message"), submitErrorMessageKey: (0, Jn.FN)(e), theme: (0, R.gh)(e), isPulseSurveyActive: (0, ze.jO)(e) } },
                zo = { onRequireStickyFooter: jt, trackInlineSubmit: jr.zR }; const er = (0, We.$j)(Ko, zo)(oa); var Ja = c(77557),
                Wo = c(63842),
                Oa = c(69103),
                zr = c(96105),
                Xa = c(77516),
                qa = c(11157),
                ia = c(76396);

            function Go() { for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]; return o => { t.forEach(v => { if (!!v) { if (typeof v == "function") { v(o); return }
                            v.current = o } }) } } var cl = null,
                ul = null,
                eo = { language: "en", hideNavigation: !1, isPublic: !0, isTrial: !1, showProgressBar: !0, showTypeformBranding: !0, areUploadsPublic: !0, showTimeToComplete: !0, showNumberOfSubmissions: !1, showCookieConsent: !1, showQuestionNumber: !0, proSubdomainEnabled: !0, enabled: !0, modifiable: !1 },
                Ca = { colors: { primary: "#000000", secondary: "#0445AF", button: "#0445AF", buttonContent: "#FFFFFF", background: "#FFFFFF" }, hasTransparentButton: !1, font: "System font", fields: { alignment: "left", fontSize: "medium" }, screens: { alignment: "center", fontSize: "medium" } },
                dl = { id: "defaultId", fields: [], theme: Ca, settings: eo },
                vl = { ref: "ws-ref", title: "Welcome", showButton: !0, buttonLabel: "Start" },
                fl = { ref: "default_tys", title: `Thanks for completing this typeform
Now *create your own* \u2014 it's free, easy, & beautiful`, type: "thankyou_screen", showButton: !0, buttonLabel: "Create a Typeform" },
                $o = c(38832),
                On = c(30202),
                Sa = c(29567),
                Qo = c(20534),
                Jo = ['area[href]:not([tabindex^="-"])', 'input:not([type="hidden"]):not([disabled]):not([tabindex^="-"])', 'select:not([disabled]):not([tabindex^="-"])', 'textarea:not([disabled]):not([tabindex^="-"])', 'button:not([disabled]):not([tabindex^="-"])', 'a[href]:not([tabindex^="-"])', 'iframe:not([tabindex^="-"])', 'audio[controls]:not([tabindex^="-"])', 'video[controls]:not([tabindex^="-"])', '[contenteditable]:not([tabindex^="-"])', '[tabindex]:not([tabindex^="-"])'];

            function Xo(e) { return typeof window == "undefined" || typeof document == "undefined" || typeof e.contains != "function" ? !1 : e === document.activeElement || e.contains(document.activeElement) } var qo = (e, t) => { var r = Jo.join(","); if (e.matches(r)) return e; if (t) { var o = Array.from(e.querySelectorAll(r)); return o.find(v => !v.hasAttribute("href")) } return e.querySelector(r) },
                to = (e, t) => { var r = Xo(e); if (!r) { var o = qo(e, t); return o != null ? o : document.body } },
                ro = function(t) { var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0; if (!!t) { var o = () => t == null ? void 0 : t.focus(); if (r === 0) { o(); return }
                        setTimeout(o, r) } },
                no = e => e ? !!e.querySelectorAll(":focus").length : !1,
                ei = function(t) { var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
                        o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0; if (!!t) { var v = () => { var f = to(t, o);
                            f == null || f.focus() }; if (r === 0) { v(); return }
                        setTimeout(v, r) } }; const Pr = ei; var wr = c(53120),
                Pa = c(21874),
                ti = e => e.portal || Pa.E3,
                ri = (0, wr.P1)(ti, e => e.isActive),
                ao, oo;

            function io(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) } var wa = 200,
                ni = "easeOutCubic",
                ai = 30,
                la = 30,
                lo = 32,
                oi = b.ZP.div.withConfig({ displayName: "block-scroller__Root", componentId: "sc-1nqcj0x-0" })(ao || (ao = io([`
  width: 100%;
  height: 100%;

  overflow-x: hidden;
  overflow-y: auto;

  &:focus {
    outline: none;
  }
`]))),
                ii = b.ZP.div.withConfig({ displayName: "block-scroller__Positioner", componentId: "sc-1nqcj0x-1" })(oo || (oo = io([`
  width: 100%;
  min-height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`]))),
                so = e => e ? e.scrollTop + la >= e.scrollHeight - e.clientHeight : !1,
                Ta = e => e ? e.scrollTop - ai <= 0 : !1,
                li = e => { var t, { blockRef: r, blockRootRef: o, blockHeightChanging: v, children: f, counterContent: m, focusOnContainer: g, isActive: p, isFieldset: h, onRequireStickyHeader: P, isScrollNearTop: T, scrolling: j, isScrollTop: Y, endAutoScroll: re = te.Z, onKeyDown: H = te.Z, onChangeCanSwipe: M = te.Z, onScroll: z = te.Z, titleText: X, required: W, t: oe, uniqueId: G, blockContentRef: $, canAutoFocus: U, delayFocus: fe, autoFocusableRef: ne, layoutType: ye, additionalHeight: xe = 0, canScrollAndSwipe: Ne = !0 } = e,
                        q = (0, Pe.Gc)(),
                        [ee, _] = (0, i.useState)(void 0),
                        k = (0, i.useRef)(null),
                        Ae = (0, i.useRef)(null),
                        Ce = (0, ae.C)(Qo.mR),
                        He = (0, i.useContext)($t),
                        _e = (0, Xn.YO)(r),
                        Ie = (0, ae.C)(ri),
                        D = () => { if (!(!k.current || !Ne)) { p && (M({ next: so(k.current), previous: Ta(k.current) }), z()); var { scrollTop: it } = k.current;
                                _e(it), it > lo && T ? P(!0) : it <= lo && !T && P(!1) } },
                        ie = () => { Ta(k.current) || !k.current || (k.current.scrollTop = 0) };
                    (0, i.useEffect)(() => { Y && ie() }, [Y]), (0, i.useEffect)(() => {!p && !He && ie() }, [He, p]), (0, i.useEffect)(() => {!k.current || p && Ne && M({ next: so(k.current), previous: Ta(k.current) }) }, [p]), (0, i.useEffect)(() => { if (p && j && j.scrollType === "recenter" && j.anchor === "bottom" && k.current) { var it = qr.Z ? 0 : wa;
                            (0, On.ZP)(k.current, "scrollTop", k.current.scrollHeight - k.current.clientHeight, it, ni, re) } }, [j]); var st = $ == null || (t = $.current) === null || t === void 0 ? void 0 : t.clientHeight; return (0, i.useEffect)(() => { Y && ie(); var it = setTimeout(() => { p && o !== null && o !== void 0 && o.current && v(o.current.clientHeight + xe) }, wa / 2); return () => { clearInterval(it) } }, [p, o]), (0, i.useEffect)(() => { var it, Et, je, pe; if (_(void 0), !(!k.current || !st || !p || Ce || !U || Ie)) { var Oe = (0, B.T)() && q === "sm",
                                pt = ye ? (0, Sa.ci)(q, ye) * Je.bf : 0,
                                Zt = st + pt > k.current.clientHeight,
                                Xe = (ne == null || (it = ne.current) === null || it === void 0 || (Et = it.getBoundingClientRect()) === null || Et === void 0 ? void 0 : Et.top) && (ne == null || (je = ne.current) === null || je === void 0 || (pe = je.getBoundingClientRect()) === null || pe === void 0 ? void 0 : pe.top) > k.current.clientHeight,
                                de = ne != null && ne.current ? Xe : !!Zt,
                                Te = !no(k.current) && (g || Oe || de),
                                Ge = !He && !no(k.current); if (!(!Te && !Ge)) { if (Te) { _(0), ro(k.current, fe); return } if (ne != null && ne.current) { _(0), ro(ne == null ? void 0 : ne.current, fe); return }
                                Pr(k.current, fe) } } }, [ne, U, st, fe, p, He, Ce, Ie, ee]), i.createElement(oi, { key: "block-scroller", "data-qa": "block-scroller", onScroll: D, onKeyDown: H, ref: k, tabIndex: ee, "aria-labelledby": h ? (0, yt._d)(G) : void 0 }, h && i.createElement(Nn.Z, { id: (0, yt._d)(G) }, m && oe("a11y.label.question", { number: m }), X, W && oe("a11y.label.required")), i.createElement(ii, { ref: Ae }, f)) }; const si = li; var Ia = e => { var { children: t, htmlFor: r, id: o, htmlTag: v, required: f, t: m, announceTitle: g } = e, p = ["div", "span", "legend"].includes(v), h = f && i.createElement(Nn.Z, null, m("a11y.label.required")); return i.createElement(zr.ZP, { "aria-live": g ? "polite" : "off", type: Je.jA.blockTitle, htmlTag: v === "legend" ? "span" : v, htmlFor: v === "label" ? r : null, "data-qa": "block-title deep-purple-block-title", role: p ? "heading" : null, "aria-level": p ? 2 : null, id: o }, t, h) };
            Ia.defaultProps = { htmlTag: "span", required: !1, ariaLive: "off" }, Ia.propTypes = { children: a().any, htmlFor: a().string, htmlTag: a().string, id: a().string, announceTitle: a().bool, required: a().bool, t: a().func.isRequired }; const ci = Ia;

            function Un() { return Un = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, Un.apply(this, arguments) } var co = i.forwardRef((e, t) => { var r, o, v, f, m, g, p, h, { application: P, attachment: T, isBlockListVisible: j, blockRef: Y, blockHeightChanging: re = te.Z, children: H, description: M, encryptable: z, endAutoScroll: X, hasBranding: W, hasNavigationArrows: oe, hasProgress: G, isActive: $, isAnswered: U, isScrollNearTop: fe, isScrollTop: ne, isShaking: ye, canAutoFocus: xe, delayFocus: Ne = 0, layout: q, listIndexText: ee, onChangeCanSwipe: _, onKeyDown: k, onRequireStickyHeader: Ae = te.Z, onScroll: Ce = te.Z, scrolling: He, t: _e = fa => fa, theme: Ie = Ca, titleLabelId: D, titleFor: ie, titleTag: st, titleText: it, titleCounterIcon: Et = Oa.u.ARROW, type: je, uniqueId: pe, validations: Oe = {}, isVideoPlaying: pt, onVideoClick: Zt, focusOnContainer: Xe = !1, autoFocusableRef: de } = e,
                    Te = (0, i.useRef)(null),
                    Ge = (0, i.useRef)(null),
                    Vt = (0, i.useRef)(null),
                    [Xt, qt] = (0, i.useState)(0),
                    gr = (0, Pe.Gc)(),
                    ut = (0, ae.C)(R.Tw),
                    be = (0, ae.C)(w.rJ),
                    lt = (0, ae.C)(E.BA),
                    Dt = (0, ae.C)(xt.Fe),
                    ir = (0, ae.C)(ze.jO),
                    Rr = st === "legend",
                    hr = q == null ? void 0 : q.type,
                    va = q == null ? void 0 : q.placement;
                P && (hr = ue.BB.SPLIT, va = ue.$y.RIGHT, gr === "sm" && (hr = ue.BB.WALLPAPER)); var La = hr === ue.BB.STACK,
                    Bt = La ? T : q == null ? void 0 : q.attachment,
                    Fn = (r = Bt == null || (o = Bt.properties) === null || o === void 0 ? void 0 : o.focalPoint) !== null && r !== void 0 ? r : ue.HY,
                    Ar = (0, ue.qe)((v = Ie.fields) === null || v === void 0 ? void 0 : v.alignment, hr),
                    yr = (0, i.useMemo)(() => ut && hr !== ue.BB.SPLIT, [hr, ut]),
                    mn = (0, ae.C)(fa => (0, I.ck)(fa, Y));
                (0, i.useEffect)(() => { if (!!Ge.current) { qt(Ge.current.clientHeight); var fa = () => { Ge.current && qt(Ge.current.clientHeight) }; return window.addEventListener("resize", fa, !0), () => window.removeEventListener("resize", fa, !0) } }, [(f = Ge.current) === null || f === void 0 ? void 0 : f.clientHeight]); var sd = "header-counter-".concat(Y),
                    cd = j && ($ || !(0, B.T)()),
                    Rs = (0, ia.yF)(be, Y) && !!ee,
                    il = Rs ? "".concat(ee, ".") : ee,
                    ud = { counterId: sd, counterIcon: Rs ? null : Et, counterColor: Ie == null || (m = Ie.colors) === null || m === void 0 ? void 0 : m.secondary, counterContent: il },
                    dd = !window.location.search.match(/typeform-embed-disable-scroll=true/i); return i.createElement(Wo.Z, { layoutType: hr, breakpoint: gr, dataQa: "blocktype-".concat(je, " deep-purple-blocktype-").concat(je), hasTransition: !0, id: Y, isActive: $, isAnswered: U, isShaking: $ && ye, isVisible: cd, ref: Go(t, Ge), layoutPlacement: va }, i.createElement(si, Un({ blockRef: Y, blockHeightChanging: re, endAutoScroll: X, isActive: $, onChangeCanSwipe: _, onRequireStickyHeader: Ae, onScroll: Ce, onKeyDown: k, isFieldset: Rr, isScrollNearTop: fe, isScrollTop: ne, scrolling: He, focusOnContainer: Xe, required: Oe == null ? void 0 : Oe.required, t: _e, titleText: it, uniqueId: pe }, lt ? { counterContent: il } : {}, { blockContentRef: Te, canAutoFocus: xe, delayFocus: Ne, autoFocusableRef: de, layoutType: hr, blockRootRef: Vt, additionalHeight: yr ? 4.5 * 8 : 0, canScrollAndSwipe: dd }), yr && i.createElement(Nt.Z, { top: 4.5 }), i.createElement(Ja.Z, Un({ application: P, attachmentFocalPoint: Fn, attachmentHref: Bt == null ? void 0 : Bt.href, attachmentType: Bt == null ? void 0 : Bt.type, attachmentScale: Bt == null ? void 0 : Bt.scale, attachmentAlt: Bt == null || (g = Bt.properties) === null || g === void 0 ? void 0 : g.description, hasAttachmentFixedHeight: (0, $o.F)(), breakpoint: gr, description: M && i.createElement(zr.ZP, { align: Ar, type: Je.jA.blockDescription, color: Ie == null || (p = Ie.colors) === null || p === void 0 ? void 0 : p.primary, htmlTag: "p", dataQa: "block-description" }, M), enableAnimation: Dt, hasBranding: W, hasNavigationArrows: oe, hasProgress: G, isActive: $, isFieldset: Rr, layoutType: hr, pexelsApiKey: "563492ad6f9170000100000155494c9d9440421cbf19eb5eaac4615e", outerHeight: Xt, removeTopBottonMargins: ir, required: Oe == null ? void 0 : Oe.required, textAlign: (0, Jt.k2)(mn) ? ue.aj.LEFT : Ar, title: i.createElement(Oa.Z, Un({ title: i.createElement(ci, { required: Oe == null ? void 0 : Oe.required, t: _e, id: D, htmlFor: ie, htmlTag: st }, it), color: Ie == null || (h = Ie.colors) === null || h === void 0 ? void 0 : h.primary, required: Oe == null ? void 0 : Oe.required, textAlign: Ar }, lt ? ud : {})), isVideoPlaying: pt, onVideoClick: Zt }, lt ? { counterContent: il } : {}, { blockContentRef: Te, rootRef: Vt }), z && i.createElement(Sr.ZP, { align: "center", space: 1 }, i.createElement(qa.Z, { color: Ie.colors.secondary, svg: Xa.Z }), i.createElement(Jr.ZP, { color: Ie.colors.secondary }, _e("block.content.encrypted"))), H))) });
            co.displayName = "BlockWrapper"; const Tr = co; var en = c(21785),
                Pt = c(1513),
                dn = c(32327),
                sa = c(21176);

            function Ra() { return Ra = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, Ra.apply(this, arguments) }

            function uo(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(v) { return Object.getOwnPropertyDescriptor(e, v).enumerable })), r.push.apply(r, o) } return r }

            function Hn(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t] != null ? arguments[t] : {};
                    t % 2 ? uo(Object(r), !0).forEach(function(o) { ui(e, o, r[o]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uo(Object(r)).forEach(function(o) { Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o)) }) } return e }

            function ui(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e } var Aa = e => { var { abTests: t, application: r, applicationInfo: o, blockIndex: v, disableNavigation: f, enableNavigation: m, featureFlags: g, field: p, hasBranding: h, hasDescription: P, hasNavigationArrows: T, hasProgress: j, iframeUrl: Y, isActive: re, isCommitted: H, isFirstBlock: M, isValid: z, language: X, layout: W, layoutItemsSize: oe, onCommitAnswer: G, onInputBlur: $, onInputFocus: U, onStageAnswer: fe, recenter: ne, submitForm: ye, t: xe, theme: Ne, title: q, uniqueId: ee, validationError: _, value: k } = e, [Ae, Ce, He] = (0, dn.Z)(St.Sx), _e = (0, We.I0)(), [Ie, D, ie] = (0, dn.Z)(St.RB), [st, it] = (0, i.useState)(null), [Et, je] = (0, i.useState)(() => (0, Z.Ky)(p)), [pe, Oe] = (0, i.useState)(!1), pt = (0, We.v9)(Hr.n2), Zt = !!(pt && pt.code === null), Xe = (0, i.useRef)(null), de = Hn(Hn({}, g), t);
                (0, i.useEffect)(() => () => { He(), ie() }, []), N(re, (0, i.useCallback)(te.Z, []));

                function Te(Bt) { je(Bt) }

                function Ge(Bt) { ne(Xr), Bt && (f(), _e((0, sa.QW)())) }

                function Vt(Bt) { _e((0, sa.oj)()), Bt && m() }

                function Xt() { U(), (0, B.T)() && ne(Xr) }

                function qt(Bt) { G(p.ref, Bt) }

                function gr(Bt, Fn, Ar) { _e((0, Me.MO)(p.ref, en.U2, Ar == null ? void 0 : Ar.answerMethod)), fe(p.ref, Bt) }

                function ut(Bt, Fn) { var Ar = new Pt.FU(Fn);
                    Oe(Fn === "microphonePermissionDenied" || Fn === "recognitionError"), Ce(Bt), D(Bt), it(Ar) } var be = (0, yt.$w)(ee),
                    lt = H && !z,
                    Dt = lt || Ie,
                    ir = Hn(Hn({}, p.validations), {}, { required: (0, Jt.q9)(p) }),
                    Rr = (0, yt.w7)({ uniqueId: ee, isErrorMessageVisible: Dt, hasDescription: P }),
                    hr = (0, yt._d)(ee),
                    va = h || T || j,
                    La = pe && Dt || !Xe.current; return i.createElement(Tr, Ra({}, e, { validations: ir, titleText: q, titleLabelId: hr, titleTag: "label", delayFocus: M ? St.r$ : 0, isShaking: Ae, focusOnContainer: La, autoFocusableRef: Xe }), i.createElement(Cn.TS, { focusableRef: Xe, isActive: re, answer: k, ariaDescribedBy: Rr, ariaLabelledBy: hr, validationResult: Dt ? _ == null ? void 0 : _.validationResult : [], blockIndex: v, field: p, getCustomMessage: xe, iframeUrl: Y, locale: X, onChange: gr, onCommit: qt, theme: Ne, applicationInfo: o, featureFlags: de, onError: ut, onFocus: Xt, onBlur: $, onOpen: Ge, onClose: Vt, onHideHelperText: Te }), i.createElement(er, { answer: k, application: r, blockError: Ie ? st : (0, Pt.lY)(_, p == null ? void 0 : p.type), blockRef: p.ref, errorMessageId: be, hasFormFooter: va, hideHelperText: Et, isErrorMessageVisible: !Zt && Dt, layout: W, layoutItemsSize: oe, onClick: qt, submitForm: ye })) };
            Aa.defaultProps = { submitForm: te.Z, theme: { colors: { secondary: B.Bb } } }, Aa.propTypes = { abTests: a().object, application: a().object, applicationInfo: a().object, blockIndex: a().number, validationResult: a().object, disableNavigation: a().func, enableNavigation: a().func, featureFlags: a().object, field: a().object, fields: a().array, hasHideHelperText: a().bool, hasBranding: a().bool, hasDescription: a().bool, hasNavigationArrows: a().bool, hasProgress: a().bool, iframeUrl: a().string, inlineSubmit: a().func, isActive: a().bool, isCommitted: a().bool, isFirstBlock: a().bool, isValid: a().bool, language: a().string, layout: a().object, layoutItemsSize: a().object, onCommitAnswer: a().func, onInputBlur: a().func, onInputFocus: a().func, onStageAnswer: a().func, recenter: a().func, submitForm: a().func, t: a().func, theme: a().object, title: a().oneOfType([a().array, a().string]), uniqueId: a().string.isRequired, validationError: a().instanceOf(Pt.FU), value: a().array }; const di = Aa; var vo = c(10054),
                fo = (e, t, r) => e === Ft.Wu && !(0, O.e9)(r) && !(0, O.r$)(r) && !(0, O.fy)(r) ? (r.preventDefault(), { blocked: !0, error: new Pt.ZF }) : e === Ft.Wu && t && t <= r.target.value.length && !(0, O.r$)(r) ? (r.preventDefault(), { blocked: !0, error: new Pt.FU("maxLength") }) : e === Ft.mB && t && t <= r.target.value.length && !(0, O.r$)(r) ? (r.preventDefault(), { blocked: !0, error: new Pt.FU("maxLength") }) : e === Ft.oP && t && t <= r.target.value.length && !(0, O.r$)(r) ? (r.preventDefault(), { blocked: !0, error: new Pt.FU("maxLength") }) : { blocked: !1 },
                Da = (e, t) => { var r = t.nativeEvent || t,
                        o = (0, O.zD)([O.X2, O.LQ, O.r$], r, t.target);
                    (0, O.NC)(r) && (o = !1), Ft.Wu === e && (0, O.ho)(t) && t.preventDefault(), o && t.stopPropagation() },
                po = (e, t) => { var r, o = (r = t.clipboardData) === null || r === void 0 ? void 0 : r.types; if (o && (o.contains && o.contains("text/plain") || o.includes("text/plain"))) { var v = ""; if (t.clipboardData && (v = t.clipboardData.getData("text/plain")), e && e < v.length) return { blocked: !0, error: new Pt.FU("maxLength") } } return {} },
                mo = (e, t) => e.isActive || t.isActive || e.isCommitted !== t.isCommitted || e.layoutItemsSize !== t.layoutItemsSize,
                Dn = (e, t) => !mo(e, t);

            function Ba() { return Ba = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, Ba.apply(this, arguments) } var Kn = 700,
                xa = e => { var { blockRef: t, validationError: r, isActive: o, isCommitted: v, isValid: f, layout: m, layoutItemsSize: g, onCommitAnswer: p, onInputBlur: h, onInputFocus: P, onRequireStickyFooter: T, onStageAnswer: j, placeholder: Y, submitForm: re, t: H, theme: M, title: z, type: X, uniqueId: W, validations: oe, hasDescription: G } = e, $ = (0, Se.Pg)(), [U, fe, ne] = (0, dn.Z)(St.Sx), [ye, xe, Ne] = (0, dn.Z)(St.RB), [q, ee] = (0, i.useState)(""), _ = (0, i.useRef)(), k = (0, i.useRef)(), Ae = (0, i.useMemo)(() => e.value.length > 0 ? e.value[0] : "", [e.value]), [Ce, He] = (0, i.useState)(Ae);
                    (0, i.useEffect)(() => { Ae !== Ce && He(Ae) }, [Ae]); var _e = _.current === document.activeElement,
                        Ie = v && !f,
                        D = Ie || ye,
                        ie = (0, yt.w7)({ uniqueId: W, isErrorMessageVisible: D, hasDescription: G, hasInputInstructions: !0 });
                    (0, i.useEffect)(() => () => { ne(), Ne() }, []), (0, i.useEffect)(() => { _.current && (0, wn.Z)() && (_.current.onclick = st) }, [_]);

                    function st() { $ && (P(), setTimeout(() => {!(0, kt.gn)() && k.current && (k.current.scrollTop = k.current.scrollHeight), _.current && (0, wn.Z)() && _.current.scrollIntoView({ block: "center" }) }, Kn)) }

                    function it(Xe) { var de = _e && $;
                        _.current && de && _.current.blur(), Xe.stopPropagation(), Xe.persist(), setTimeout(() => { o && p(t, Xe) }, de ? Kn : 0) }

                    function Et(Xe) { if (!!o) { var de = Xe.target.value;
                            oe.maxLength && (de = de.slice(0, oe.maxLength)), He(de), j(t, de, Xe) } }

                    function je(Xe) { var { blocked: de, error: Te } = po(oe.maxLength, Xe);
                        fe(de), xe(de), ee(Te) }

                    function pe(Xe) { var { blocked: de, error: Te } = fo(X, oe.maxLength, Xe);
                        fe(de), xe(de), ee(Te) } var Oe = (0, i.useCallback)(Xe => { Da(X, Xe), !$ && (0, O.r$)(Xe) && !(0, O.KL)(Xe) && !(0, O.tk)(Xe) && (Xe.preventDefault(), o && p(t, Xe)) }, [t, o, p, X]);
                    N(o, Oe);

                    function pt(Xe) { if (!!k.current) { var de = Xe.target.value,
                                Te = de.split(`
`).length,
                                Ge = de.substr(0, Xe.target.selectionStart).split(`
`).length,
                                Vt = Te - Ge <= 3;
                            Vt && o && !(0, kt.gn)() && (k.current.scrollTop = k.current.scrollHeight) } }

                    function Zt() { _ && _.current && _.current.focus() } return i.createElement(Tr, Ba({}, e, { isShaking: U, titleFor: W, titleTag: "label", titleText: z, scrollerRef: k }), i.createElement(vo.Z, { ariaDescribedBy: ie, placeholder: H(Y), maxLength: oe.maxLength, onChange: Et, onResize: pt, onKeyDown: Oe, onKeyPress: pe, onPaste: je, onFocus: st, onBlur: h, innerRef: _, id: W, value: Ce, color: M.colors.secondary }), !$ && i.createElement(Fr.Z, { top: Je.M6.topHint }, i.createElement(zr.ZP, { color: M.colors.secondary, fontWeight: "regular", htmlTag: "p", id: (0, yt.Pq)(W), type: Je.jA.answerHint }, (0, ar.Z)(H("block.longText.hint")))), i.createElement(er, { buttonColor: M.colors.button, helperColor: M.colors.primary, backgroundColor: M.colors.background, errorMessageId: (0, yt.$w)(W), blockError: ye ? q : r, isErrorMessageVisible: D, onRequireStickyFooter: T, blockRef: t, onClick: it, layout: m, layoutItemsSize: g, submitForm: re, onFocusLost: Zt })) };
            xa.defaultProps = { onCommitAnswer: te.Z, onStageAnswer: te.Z, t: te.Z, theme: { colors: { backgroundColor: B.Bb, button: B.Bb, primary: B.Bb, secondary: B.Bb } }, validations: { maxLength: null }, value: [] }, xa.propTypes = { blockRef: a().string.isRequired, validationError: a().instanceOf(Pt.FU), index: a().number, isActive: a().bool, isCommitted: a().bool, canAutoFocus: a().bool, isValid: a().bool, layout: a().object, layoutItemsSize: a().object, onCommitAnswer: a().func, onInputBlur: a().func, onInputFocus: a().func, onRequireStickyFooter: a().func, onStageAnswer: a().func, placeholder: a().string, submitForm: a().func, t: a().func, theme: a().object, title: a().oneOfType([a().array, a().string]), type: a().string, validations: a().shape({ maxLength: a().number }), value: a().arrayOf(a().string), uniqueId: a().string.isRequired, hasDescription: a().bool }; const go = (0, i.memo)(xa, Dn); var zn = c(35291),
                vi = c(32592),
                Bn = e => { e.preventDefault(), e.stopPropagation() },
                fi = 500,
                ho = (e, t, r) => { var { nativeEvent: o } = t; if (o != null && o.inputType) return !1; var v = new Date().getTime(); if (e && (e.key && e.key !== "Unidentified" || e.type === "paste") && v - e.timestamp < fi) return !1; var f = t.target.value || ""; return !(f === "" || f.length + 1 <= r.length || f.replace(r, "").length < 2) },
                ja, ka, yo, bo, Eo;

            function Wn(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) } var or = "year",
                cr = "month",
                mr = "day",
                pi = {
                    [or]: "bday-year", [cr]: "bday-month", [mr]: "bday-day" },
                mi = b.ZP.div.withConfig({ displayName: "date-input__Root", componentId: "sc-ieqr10-0" })(ja || (ja = Wn([`
  display: flex;
  align-items: baseline;
  width: fit-content;
  `, `;
`])), e => { var { textAlign: t } = e; return t === ue.aj.CENTER ? "margin:auto" : "" }),
                gi = (0, b.ZP)(zn.Z).withConfig({ displayName: "date-input__DayInput", componentId: "sc-ieqr10-1" })(ka || (ka = Wn([`
  // As ch does not take into account the different widths of different
  // letters, we apply a factor of 1.5 to make sure the placeholder fits in
  // all translations and fonts.
  // In theory there could be a font were some letter is much wider than 1ch
  // and not fitting inside the input, but testing with the most popular fonts
  // on google fonts I found the factor of 1.5 work well for all of them.
  width: calc(2ch * 1.5);
`]))),
                hi = (0, b.ZP)(zn.Z).withConfig({ displayName: "date-input__YearInput", componentId: "sc-ieqr10-2" })(yo || (yo = Wn([`
  width: calc(4ch * 1.5);
`]))),
                yi = (0, b.ZP)(zn.Z).withConfig({ displayName: "date-input__MonthInput", componentId: "sc-ieqr10-3" })(bo || (bo = Wn([`
  width: calc(2ch * 1.5);
`]))),
                n = (0, b.ZP)(Nt.Z).withConfig({ displayName: "date-input__Separator", componentId: "sc-ieqr10-4" })(Eo || (Eo = Wn([`
  align-self: flex-end;
`]))),
                l = e => Math.floor(Math.log10(e)) + 1,
                s = e => e.match(/^\d+$/),
                d = {
                    [or]: hi, [cr]: yi, [mr]: gi },
                y = {
                    [or]: "block.date.label.year", [cr]: "block.date.label.month", [mr]: "block.date.label.day" },
                Q = {
                    [or]: "block.date.placeholder.year", [cr]: "block.date.placeholder.month", [mr]: "block.date.placeholder.day" },
                Ee = {
                    [or]: 9999, [cr]: 12, [mr]: 31 },
                ot = {
                    [or]: "0000", [cr]: "00", [mr]: "00" },
                K = (e, t) => Math.min(Ee[e], Math.max(0, t)),
                Le = (e, t) => { var r = parseInt(t, 10),
                        o = l(Ee[e]); return (t == null ? void 0 : t.length) > o || t === ot[e] ? !1 : r >= 0 && r <= Ee[e] },
                Ue = e => { var { autoComplete: t, ariaDescribedBy: r, color: o, dayValue: v = "", id: f, isActive: m, monthValue: g = "", onDayChange: p = te.Z, onEnterKey: h, onInvalidInput: P, onMonthChange: T = te.Z, onYearChange: j = te.Z, order: Y = [mr, cr, or], readOnly: re, separator: H, textAlign: M, t: z = ee => ee, yearValue: X = "" } = e, W = (0, i.useRef)(null), oe = (0, i.useRef)(null), G = (0, i.useRef)(null), $ = {
                        [or]: W, [cr]: oe, [mr]: G }, U = {
                        [or]: X, [cr]: g, [mr]: v }, fe = {
                        [or]: j, [cr]: T, [mr]: p }, ne = [Y[0], "separator", Y[1], "separator", Y[2]], ye = ee => _ => { var k = _.target.value,
                            Ae = parseInt(k, 10); if ((isNaN(Ae) || !s(k)) && k !== "") { P(new Pt.ZF); return }
                        k === "" || Le(ee, k) ? fe[ee](k, _) : P(new Pt.E5) }, xe = ee => _ => { var k = _.target.value; if (ee !== or && k === "0") { P(new Pt.E5); return }
                        ee === or && k.length < l(Ee[ee]) && P(new Pt.iz) }, Ne = (0, i.useCallback)(ee => _ => { if (ee) { var k = parseInt(U[ee] || "0", 10); if ((0, O.aZ)(_.nativeEvent)) { Bn(_), fe[ee](K(ee, k - 1).toString()); return } if ((0, O.si)(_.nativeEvent)) { Bn(_), fe[ee](K(ee, k + 1).toString()); return } }(0, O.r$)(_.nativeEvent) && !(0, O.tk)(_.nativeEvent) && (_.preventDefault(), h(_)) }, [fe, h]), q = ee => { if (t === "bday") return pi[ee] }; return N(m, Ne(null)), i.createElement(mi, { textAlign: M }, ne.map((ee, _) => { if (ee === "separator") return i.createElement(n, { key: _, bottom: 1, left: H === "/" ? 2.5 : 1.5, right: H === "/" ? 2 : 1.5 }, i.createElement(zr.ZP, { type: Je.jA.inputText, color: o }, H)); var k = d[ee],
                            Ae = q(ee); return i.createElement(i.Fragment, { key: _ }, i.createElement(Sr.ZP, { vertical: !0 }, i.createElement(Nt.Z, { bottom: 1 }, i.createElement(Jr.ZP, { color: o, htmlFor: "".concat(f, "-").concat(ee), htmlTag: "label", size: "sizeN1" }, z(y[ee]))), i.createElement(k, { "aria-describedby": r, autoComplete: Ae, color: o, dataQa: "date-input-".concat(ee.toLowerCase()), getRef: $[ee], inputId: "".concat(f, "-").concat(ee), type: "text", isReadOnly: re, name: Ae, onChange: ye(ee), onBlur: xe(ee), onKeyDown: Ne(ee), placeholder: z(Q[ee]), tabIndex: re ? -1 : 0, value: U[ee] }))) })) }; const qe = (0, vi.Z)(Ue); var tt, At;

            function Ut(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) } var tr = b.ZP.div.withConfig({ displayName: "mobile-date-input__InputWrapper", componentId: "sc-1kq5wwg-0" })(tt || (tt = Ut([`
  position: relative;
`]))),
                ur = b.ZP.input.withConfig({ displayName: "mobile-date-input__GhostInput", componentId: "sc-1kq5wwg-1" })(At || (At = Ut([`
  position: absolute;
  width: 100%;
  height: 90%;
  bottom: 0;
  left: 0;
  opacity: 0;
  min-width: 100%; // iOS width bug

  &::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
`]))),
                dr = e => { var { ariaDescribedBy: t, color: r, dayValue: o, id: v, monthValue: f, onDateChange: m, order: g, separator: p, textAlign: h, yearValue: P } = e, T = j => { var Y = j.target.value;
                        m(Y, j) }; return i.createElement(tr, null, i.createElement("div", { "aria-hidden": !0 }, i.createElement(qe, { color: r, dayValue: o, id: v, monthValue: f, order: g, readOnly: !0, separator: p, textAlign: h, yearValue: P })), i.createElement(ur, { "aria-describedby": t, onChange: T, type: "date" })) }; const xn = dr;

            function jn() { return jn = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, jn.apply(this, arguments) } var ca = { MMDDYYYY: [cr, mr, or], DDMMYYYY: [mr, cr, or], YYYYMMDD: [or, cr, mr] },
                kn = e => { var { autoComplete: t, blockRef: r, field: o, isActive: v, isCommitted: f, isValid: m, layout: g, layoutItemsSize: p, onCommitAnswer: h, onStageAnswer: P, separator: T, structure: j, submitForm: Y, textAlign: re, theme: H, uniqueId: M, validationError: z } = e, [X, W, oe] = (0, dn.Z)(St.Sx), [G, $, U] = (0, dn.Z)(St.RB), [fe, ne] = (0, i.useState)(""), ye = e.value && e.value[0] || "", [xe = "", Ne = "", q = ""] = ye.split("-"), ee = "".concat(M, "-error-message"), _ = f && !m, k = _ || G;
                    (0, i.useEffect)(() => () => { oe(), U() }, []); var Ae = (0, i.useCallback)(je => { je.stopPropagation(), h(r, je) }, [r]),
                        Ce = je => { W(!1), $(!1), h(r, je) },
                        He = (je, pe) => { P(r, je, pe) },
                        _e = (je, pe, Oe, pt) => { var Zt = "".concat(je, "-").concat(pe, "-").concat(Oe);
                            je === "" && pe === "" && Oe === "" && (Zt = null), P(r, Zt, pt) },
                        Ie = (je, pe) => { _e(je, Ne, q, pe) },
                        D = (je, pe) => { _e(xe, je, q, pe) },
                        ie = (je, pe) => { _e(xe, Ne, je, pe) },
                        st = je => { ne(je), W(!0), $(!0) },
                        it = k ? ee : null,
                        Et = (0, B.T)(); return i.createElement(Tr, jn({}, e, { titleTag: "legend", titleText: e.title, isShaking: X, focusOnContainer: Et }), (0, B.T)() ? i.createElement(xn, { ariaDescribedBy: it, id: M, onDateChange: He, order: ca[j], dayValue: q, monthValue: Ne, yearValue: xe, separator: T, textAlign: re, color: H.colors.secondary }) : i.createElement(qe, { autoComplete: t, ariaDescribedBy: it, id: M, onEnterKey: Ce, order: ca[j], dayValue: q, monthValue: Ne, yearValue: xe, separator: T, textAlign: re, onDayChange: ie, onMonthChange: D, onYearChange: Ie, color: H.colors.secondary, onInvalidInput: st, isActive: v }), i.createElement(er, { blockRef: r, errorMessageId: ee, blockError: G ? fe : (0, Pt.lY)(z, o == null ? void 0 : o.type), isErrorMessageVisible: k, layout: g, layoutItemsSize: p, onClick: Ae, submitForm: Y })) };
            kn.defaultProps = { onCommitAnswer: te.Z, onStageAnswer: te.Z, submitForm: te.Z, t: te.Z, theme: { colors: { secondary: B.Bb } }, value: [] }, kn.propTypes = { autoComplete: a().string, blockRef: a().string, canAutoFocus: a().bool, field: a().object, isActive: a().bool, isCommitted: a().bool, isValid: a().bool, layout: a().object, layoutItemsSize: a().object, onCommitAnswer: a().func, onStageAnswer: a().func, separator: a().string, structure: a().string, submitForm: a().func, textAlign: a().oneOf(ue.EC), theme: a().object, title: a().oneOfType([a().array, a().string]), uniqueId: a().string.isRequired, validationError: a().instanceOf(Pt.FU), value: a().array }; const vn = kn; var tn = c(89245),
                fn = c(34423),
                Gn = c(29253);

            function ua(e) { return new Promise((t, r) => { var o = new window.FileReader;
                    o.onload = v => t(v.target.result), o.onerror = r, o.readAsDataURL(e) }) } var As = ["image/png", "image/gif", "image/jpeg", "image/svg+xml"],
                vd = e => e.replace(/(<([^>]+)>)/gi, ""),
                pl = e => As.some(t => e === t);

            function bi() { return bi = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, bi.apply(this, arguments) }

            function ml(e, t, r, o, v, f, m) { try { var g = e[f](m),
                        p = g.value } catch (h) { r(h); return }
                g.done ? t(p) : Promise.resolve(p).then(o, v) }

            function Ei(e) { return function() { var t = this,
                        r = arguments; return new Promise(function(o, v) { var f = e.apply(t, r);

                        function m(p) { ml(f, o, v, m, g, "next", p) }

                        function g(p) { ml(f, o, v, m, g, "throw", p) }
                        m(void 0) }) } } var Oi = e => { var { blockRef: t, field: r, hasDescription: o, isActive: v, isCommitted: f, isLivePreview: m, isValid: g, layout: p, layoutItemsSize: h, onCommitAnswer: P, onStageAnswer: T, submitForm: j, theme: Y, title: re, uniqueId: H, validationError: M, value: z } = e, [X, W] = (0, i.useState)(), [oe, G] = (0, i.useState)(!1), [$, U] = (0, i.useState)(0), [fe, ne] = (0, i.useState)(!1), ye = z && z.length > 0 ? z[0] : void 0, xe = !!X || f && !g, Ne = (0, yt.w7)({ uniqueId: H, isErrorMessageVisible: xe, hasDescription: o }), q = () => oe ? fn.R.UPLOADING : ye ? fn.R.PREVIEW : fn.R.INPUT, ee = q(), _ = (0, i.useRef)(null), k = pe => { pe.stopPropagation(), v && P(t, pe) }, Ae = () => { T(t, []), _.current && (_.current.value = [], _.current.focus()) }, Ce = pe => { var { files: Oe } = pe.target;
                    m ? je(Oe[0]) : Oe.length && it(Oe[0]) }, He = pe => { var { files: Oe } = pe.dataTransfer;
                    m ? je(Oe[0]) : it(Oe[0]) }, _e = pe => {
                    (0, O.r$)(pe) && !(0, O.tk)(pe) && pe.stopPropagation() }, Ie = (0, i.useCallback)(pe => { if (!fe) { pe.stopPropagation(); return }(0, O.r$)(pe) && !(0, O.tk)(pe) && (pe.stopPropagation(), k(pe)) }, [fe, k]);
                N(v, Ie); var D = pe => { U(pe) },
                    ie = pe => { T(t, { value: pe, label: pe.name }), G(!1) },
                    st = pe => { G(!1); var Oe = pe && pe.message,
                            pt = Oe === "file-size-exceeded" ? new Pt.yt : new Pt.DC;
                        W(pt) },
                    it = function() { var pe = Ei(function*(Oe) { try { yield Et(Oe) } catch (pt) { st(pt) } }); return function(pt) { return pe.apply(this, arguments) } }(),
                    Et = function() { var pe = Ei(function*(Oe) { G(!0), U(0), W(null); var { formId: pt, id: Zt } = e, Xe = yield(0, Gn.mK)(pt, Zt), de = Xe.max_size || Xe.maxSize; if (Oe.size > de) throw new Error("file-size-exceeded"); var Te = yield(0, Gn.p7)(Oe, Xe, D),
                                Ge = pl(Oe.type) ? yield ua(Oe) : null;
                            ie({ name: Oe.name, type: Oe.type, s3Filename: Te, blob: Ge }) }); return function(pt) { return pe.apply(this, arguments) } }(),
                    je = function() { var pe = Ei(function*(Oe) { G(!0), U(0), W(null); var pt = pl(Oe.type) ? yield ua(Oe) : null;
                            ie({ name: Oe.name, type: Oe.type, s3Filename: "", blob: pt }) }); return function(pt) { return pe.apply(this, arguments) } }(); return i.createElement(Tr, bi({}, e, { titleFor: H, titleTag: "label", titleText: re, onKeyDown: Ie }), i.createElement(tn.h, { onEnter: () => ne(!0), onLeave: () => ne(!1) }, i.createElement("div", null, i.createElement(fn.Z, { ariaDescribedBy: Ne, fileBlob: ye && ye.blob, handleCancel: Ae, handleChange: Ce, handleDrop: He, handleKeyDown: _e, inputId: H, isActive: v, originalFileName: ye && ye.name, phase: ee, uploadProgress: $, value: ye, theme: Y, ref: _, primaryColor: Y.colors.primary, secondaryColor: Y.colors.secondary }), i.createElement(er, { blockRef: t, blockError: X || (0, Pt.lY)(M, r == null ? void 0 : r.type), errorMessageId: (0, yt.$w)(H), hideHelperText: !0, isErrorMessageVisible: xe, isErrorIgnorable: !!X, layout: p, layoutItemsSize: h, onClick: k, submitForm: j })))) };
            Oi.defaultProps = { file: {}, onCommitAnswer: te.Z, onStageAnswer: te.Z, submitForm: te.Z, theme: { colors: { primary: "#FF00FF", secondary: "#FF00FF" } } }, Oi.propTypes = { blockRef: a().string, validationError: a().instanceOf(Pt.FU), formId: a().string, id: a().string, isActive: a().bool, field: { type: a().string }, isCommitted: a().bool, canAutoFocus: a().bool, isLivePreview: a().bool, isValid: a().bool, layout: a().object, layoutItemsSize: a().object, onCommitAnswer: a().func, onStageAnswer: a().func, shouldClearInput: a().bool, submitForm: a().func, theme: a().object, title: a().oneOfType([a().array, a().string]), uniqueId: a().string.isRequired, value: a().any, hasDescription: a().bool }; const Ds = Oi; var Bs = c(40747),
                xs = c(72056),
                fd = "number",
                Oo = "letter",
                gl = "firstCharacter",
                Ci = "custom";

            function Si(e) { return e >= "a" && e <= "z" } var Co = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                hl = e => { var t = Math.floor(e % Co.length); return Co[t] };

            function yl(e) { var t = e >= Co.length; if (t) { var r = Math.floor(e / Co.length) - 1; return yl(r) + hl(e) } return hl(e) } const js = yl; var $n = c(51053),
                Fa = c(67116),
                bl;

            function ks(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) } var Fs = b.ZP.div.withConfig({ displayName: "dummy-list__Hidden", componentId: "sc-x301ko-0" })(bl || (bl = ks([`
  opacity: 0;
  pointer-events: none;
  position: absolute;
  height: 1px;
  overflow-y: scroll;
`]))),
                Ls = (0, Re.b5p)(JSON.stringify, e => { var { choices: t, t: r } = e; return t.map(o => ({ label: r(o.label), ref: o.ref })) }),
                El = e => { var { choices: t, t: r, allowOtherChoice: o, otherValue: v, vertical: f, onLongestChoiceWidthChanged: m, theme: g } = e, p = (0, i.useRef)(), h = (0, i.useRef)(); return (0, i.useEffect)(() => { if (!!p.current) { var P = p.current.clientWidth;
                            h.current !== P && (h.current = P, m(P)) } }, [t, r, g]), i.createElement(Fs, { tabIndex: -1, ref: p }, Ls({ choices: t, t: r }).map(P => i.createElement(Fa.Z, { tabIndex: -1, key: P.ref, keyHelperLetter: "MM" }, i.createElement(zr.ZP, { type: Je.jA.multipleChoiceLabel }, P.label))), o && f && i.createElement(Fa.Z, { tabIndex: -1, title: v, keyHelperLetter: "MM" })) };
            El.propTypes = { choices: a().array, allowOtherChoice: a().bool, vertical: a().bool, otherValue: a().string, t: a().func, onLongestChoiceWidthChanged: a().func, theme: a().object }; const Ns = (0, i.memo)(El); var Ol = c(48977),
                Pi = c(6662),
                Cl = c(73414),
                Sl = c(27207),
                So = "other-choice-edit",
                Ms = c(56120),
                _s = ["ariaDescribedBy", "ariaLabel", "ChoiceComponent", "disabled", "fontSizeType", "handleEscapeKey", "hovered", "inputId", "isEditing", "keyHelperLetter", "onChange", "onCommit", "onInputBlur", "onShouldFocusOtherChoice", "selected", "setIsEditing", "stagedOtherValue", "t", "theme", "value"];

            function Po() { return Po = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, Po.apply(this, arguments) }

            function Zs(e, t) { if (e == null) return {}; var r = Vs(e, t),
                    o, v; if (Object.getOwnPropertySymbols) { var f = Object.getOwnPropertySymbols(e); for (v = 0; v < f.length; v++) o = f[v], !(t.indexOf(o) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, o) || (r[o] = e[o])) } return r }

            function Vs(e, t) { if (e == null) return {}; var r = {},
                    o = Object.keys(e),
                    v, f; for (f = 0; f < o.length; f++) v = o[f], !(t.indexOf(v) >= 0) && (r[v] = e[v]); return r } var Pl = e => { var { ariaDescribedBy: t, ariaLabel: r, ChoiceComponent: o, disabled: v, fontSizeType: f, handleEscapeKey: m, hovered: g, inputId: p, isEditing: h, keyHelperLetter: P, onChange: T, onCommit: j, onInputBlur: Y, onShouldFocusOtherChoice: re, selected: H, setIsEditing: M, stagedOtherValue: z, t: X, theme: W, value: oe } = e, G = Zs(e, _s), $ = (0, i.useRef)(), U = (0, i.useRef)(), fe = () => { U.current && U.current.focus() };
                (0, i.useEffect)(() => { h && fe() }, [h]), (0, fr.Z)(() => { h || re() }, [h]); var ne = q => { var ee, _, k, Ae, Ce;!(q != null && (ee = q.relatedTarget) !== null && ee !== void 0 && (_ = ee.dataset) !== null && _ !== void 0 && (k = _.qa) !== null && k !== void 0 && k.includes("ok-button-visible")) && ((Ae = $.current) !== null && Ae !== void 0 && Ae.contains(q == null ? void 0 : q.relatedTarget) || (Ce = $.current) !== null && Ce !== void 0 && Ce.contains(q == null ? void 0 : q.currentTarget)) || M(!1) },
                    ye = q => { q.stopPropagation(), (0, O.r$)(q) && j(q), (0, O.$o)(q) && (m(z), M(!1)) },
                    xe = () => { M(!0) },
                    Ne = q => { q.stopPropagation(), T(q.target.value, q) }; return h ? i.createElement(o, Po({}, G, { tagName: "div", role: void 0, tabIndex: -1, selectable: !1, onBlur: ne, ref: $, hovered: g, ariaLabel: r, ariaDescribedBy: t }), i.createElement(Ms.Z, { value: oe, dataQa: "other-choice-editor", dataQaInput: "other-choice-editor/input", dataQaButton: "other-choice-editor/button", ref: U, color: W.colors.secondary, onBlur: Y, onChange: Ne, onKeyDown: ye, fontSizeType: f, disabled: v, id: p })) : i.createElement(o, Po({}, G, { disabled: v, selected: H, keyHelperHint: X("label.hint.key"), keyHelperLetter: P, onClick: xe, ref: $, tabIndex: 0, ariaLabel: r, ariaDescribedBy: t }), i.createElement(zr.ZP, { type: f }, oe || X("block.multipleChoice.other"))) };
            Pl.propTypes = { ariaDescribedBy: a().string, ariaLabel: a().string, ChoiceComponent: a().elementType, disabled: a().bool, fontSizeType: a().string, handleEscapeKey: a().func, hovered: a().bool, inputId: a().string, isEditing: a().bool, keyHelperLetter: a().string, onChange: a().func, onCommit: a().func, onInputBlur: a().func, onShouldFocusOtherChoice: a().func, selected: a().bool, setIsEditing: a().func, stagedOtherValue: a().string, t: a().func, theme: a().object, value: a().string }; const wl = Pl; var Tl = (e, t, r) => { var o, v; return (o = e.attachment) !== null && o !== void 0 && (v = o.properties) !== null && v !== void 0 && v.description ? e.attachment.properties.description : r ? "" : t(e.label) },
                Il, Rl;

            function da() { return da = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, da.apply(this, arguments) }

            function Al(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) } var Ys = b.ZP.div.withConfig({ displayName: "radio-list__Wrapper", componentId: "sc-16rzvkh-0" })(Il || (Il = Al([`
  height: 100%;
`]))),
                Dl = b.ZP.div.withConfig({ displayName: "radio-list__Radio", componentId: "sc-16rzvkh-1" })(Rl || (Rl = Al([`
  outline: none;
  `, `
`])), Sl.i8),
                Bl = e => { var { allowOtherChoice: t, answer: r, ariaDescribedBy: o, choiceProps: v, choices: f, choicesLength: m, createKeyShortcut: g, handleColumnsChanged: p, handleOtherChoiceChange: h, handleOtherChoiceCommit: P, handleOtherChoiceBlur: T, handleSelect: j, isOtherChoiceEditing: Y, longestChoiceWidth: re, otherChoiceProps: H, otherChoiceRef: M, otherLabelAndInputFontSize: z, otherValue: X, setIsOtherChoiceEditing: W, shouldDisableChoices: oe, showLabels: G, t: $, textAlign: U, theme: fe, verticalAlignment: ne, withImage: ye } = e, xe = (0, i.useContext)($t), Ne = (0, i.useRef)(), q = ye ? Cl.Z : Fa.Z, ee = f.map(Ce => Ce.ref);
                    t && ee.push(M); var _ = r.length > 0 && r[0] && r[0] === X,
                        k = oe && !X,
                        Ae = (0, B.T)(); return i.createElement(i.Fragment, null, i.createElement(Pi.E, { items: ee, onChange: j, selected: _ ? M : r[0], isBlockChanging: xe }, i.createElement(Ol.Z, { onChangeColumns: p, vertical: ne, longestChoiceWidth: re, withImage: ye, textAlign: U, tagName: "div" }, f.map((Ce, He) => { var _e = G && (0, ar.Z)($(Ce.label)),
                            Ie = g(He, Ce.label, Ce.keyboardShortcut),
                            D = _e || $("block.multipleChoice.label.keyhelper", { x: Ie }),
                            ie = r.includes(Ce.ref),
                            st = oe && !ie; return i.createElement(Pi.m, { key: Ce.ref, value: Ce.ref }, it => { var Et, { focusedValue: je, props: pe } = it; return i.createElement(Dl, da({}, pe, { "aria-disabled": st }), i.createElement(Ys, null, i.createElement(q, da({}, v, { choiceRef: Ce.ref, dataQa: "choice", dataQaIndex: He, disabled: st, focused: je === Ce.ref, imageAlt: Tl(Ce, $, G), imageHref: (Et = Ce.attachment) === null || Et === void 0 ? void 0 : Et.href, isCropped: Ce.isCropped, keyHelperHint: $("label.hint.key"), keyHelperLetter: Ie, label: _e, selected: ie, withKeyHelperHint: !Ae, ariaLabel: D, ariaDescribedBy: o })))) }) }), t && i.createElement(Pi.m, { value: M }, Ce => { var { focusedValue: He, props: _e } = Ce; return i.createElement(Dl, da({}, _e, { "aria-checked": !!X, "aria-disabled": k, "aria-controls": So, ref: Ne }), i.createElement(wl, da({}, v, H, { ChoiceComponent: q, "aria-describedby": o, disabled: k, focused: He === M, fontSizeType: z, isEditing: Y, keyHelperLetter: g(m - 1, X), onChange: h, onCommit: P, onInputBlur: T, onShouldFocusOtherChoice: () => { var Ie; return (Ie = Ne.current) === null || Ie === void 0 ? void 0 : Ie.focus() }, selected: _, setIsEditing: W, t: $, theme: fe, value: X, withKeyHelperHint: !Ae, inputId: So, ariaLabel: $("block.multipleChoice.otherChoice.placeholderA11y"), ariaDescribedBy: o }))) })))) };
            Bl.propTypes = { allowOtherChoice: a().bool, answer: a().array, ariaDescribedBy: a().string, choiceProps: a().object, choices: a().array, choicesLength: a().number, createKeyShortcut: a().func, handleColumnsChanged: a().func, handleOtherChoiceChange: a().func, handleOtherChoiceCommit: a().func, handleOtherChoiceBlur: a().func, handleSelect: a().func, isOtherChoiceEditing: a().bool, longestChoiceWidth: a().number, otherChoiceProps: a().object, otherChoiceRef: a().string, otherLabelAndInputFontSize: a().any, otherValue: a().string, setIsOtherChoiceEditing: a().func, shouldDisableChoices: a().bool, showLabels: a().bool, t: a().func, textAlign: a().any, theme: a().object, verticalAlignment: a().bool, withImage: a().bool }; const Us = Bl; var xl, jl;

            function wo() { return wo = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, wo.apply(this, arguments) }

            function kl(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) } var Hs = b.ZP.div.withConfig({ displayName: "checkbox-list__Wrapper", componentId: "sc-s0tnfi-0" })(xl || (xl = kl([`
  height: 100%;
`]))),
                Fl = b.ZP.div.withConfig({ displayName: "checkbox-list__Checkbox", componentId: "sc-s0tnfi-1" })(jl || (jl = kl([`
  outline: none;

  `, `
`])), Sl.i8),
                Ll = e => { var { allowOtherChoice: t, answer: r, ariaDescribedBy: o, choiceProps: v, choices: f, choicesLength: m, createKeyShortcut: g, handleColumnsChanged: p, handleOtherChoiceBlur: h, handleOtherChoiceChange: P, handleOtherChoiceCommit: T, handleSelect: j, isOtherChoiceEditing: Y, longestChoiceWidth: re, otherChoiceProps: H, otherChoiceRef: M, otherLabelAndInputFontSize: z, otherValue: X, selected: W, setIsOtherChoiceEditing: oe, shouldDisableChoices: G, showLabels: $, t: U, textAlign: fe, theme: ne, verticalAlignment: ye, withImage: xe } = e, [Ne, q] = (0, i.useState)(), ee = (0, i.useRef)(), _ = xe ? Cl.Z : Fa.Z, k = f.map(D => D.ref);
                    t && k.push(M); var Ae = W,
                        Ce = !H.allowEditOtherChoice,
                        He = D => { if (!Ae) return U("block.multipleChoice.otherChoice.placeholderA11y"); if (Ae && D) return D },
                        _e = (D, ie) => {
                            (0, O.Xq)(ie) && j(D, ie) },
                        Ie = (0, B.T)(); return i.createElement("div", { "data-qa": "checkboxlist" }, i.createElement(Ol.Z, { onChangeColumns: p, vertical: ye, longestChoiceWidth: re, withImage: xe, textAlign: fe, tagName: "div" }, f.map((D, ie) => { var st, it = $ && (0, ar.Z)(U(D.label)),
                            Et = g(ie, D.label, D.keyboardShortcut),
                            je = it || U("block.multipleChoice.label.keyhelper", { x: Et }),
                            pe = r.includes(D.ref),
                            Oe = G && !pe; return i.createElement(Fl, { "aria-disabled": Oe, "data-qa": "other-checkbox", key: D.ref, "aria-checked": pe, onClick: pt => j(D.ref, pt), onKeyDown: pt => _e(D.ref, pt), onFocus: () => q(D.ref), role: "checkbox", tabIndex: 0 }, i.createElement(Hs, null, i.createElement(_, wo({}, v, { focusable: !1, dataQa: "choice", dataQaIndex: ie, choiceRef: D.ref, focused: Ne === D.ref, selected: pe, disabled: Oe, keyHelperHint: U("label.hint.key"), keyHelperLetter: Et, isCropped: D.isCropped, imageHref: (st = D.attachment) === null || st === void 0 ? void 0 : st.href, imageAlt: Tl(D, U, $), label: it, withKeyHelperHint: !Ie, ariaLabel: je, ariaDescribedBy: o })))) }), t && i.createElement(Fl, { "aria-checked": !!X, "aria-disabled": Ce, "aria-controls": So, onClick: D => j(M, D), onKeyDown: D => _e(M, D), onFocus: () => q(M), ref: ee, role: "checkbox", tabIndex: 0 }, i.createElement(wl, wo({}, v, H, { ChoiceComponent: _, keyHelperLetter: g(m - 1, X), t: U, theme: ne, focused: Ne === M, fontSizeType: z, handleSelect: D => j(M, D), isEditing: Y, setIsEditing: oe, disabled: Ce, value: X, onInputBlur: h, onChange: P, onCommit: T, onShouldFocusOtherChoice: () => { var D; return (D = ee.current) === null || D === void 0 ? void 0 : D.focus() }, withKeyHelperHint: !Ie, inputId: So, ariaLabel: He(X), ariaDescribedBy: o }))))) };
            Ll.propTypes = { allowOtherChoice: a().bool, answer: a().array, ariaDescribedBy: a().string, choiceProps: a().object, choices: a().array, choicesLength: a().number, createKeyShortcut: a().func, handleColumnsChanged: a().func, handleOtherChoiceBlur: a().func, handleOtherChoiceChange: a().func, handleOtherChoiceCommit: a().func, handleSelect: a().func, isOtherChoiceEditing: a().bool, longestChoiceWidth: a().number, otherChoiceProps: a().object, otherChoiceRef: a().string, otherLabelAndInputFontSize: a().any, otherValue: a().string, selected: a().bool, setIsOtherChoiceEditing: a().func, shouldDisableChoices: a().bool, showLabels: a().bool, t: a().func, textAlign: a().any, theme: a().object, verticalAlignment: a().bool, withImage: a().bool }; const Ks = Ll; var Nl;

            function wi() { return wi = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, wi.apply(this, arguments) }

            function Ml(e, t, r, o, v, f, m) { try { var g = e[f](m),
                        p = g.value } catch (h) { r(h); return }
                g.done ? t(p) : Promise.resolve(p).then(o, v) }

            function zs(e) { return function() { var t = this,
                        r = arguments; return new Promise(function(o, v) { var f = e.apply(t, r);

                        function m(p) { Ml(f, o, v, m, g, "next", p) }

                        function g(p) { Ml(f, o, v, m, g, "throw", p) }
                        m(void 0) }) } }

            function vr(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e }

            function Ws(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) } var Gs = 65,
                $s = 26,
                Qs = b.ZP.div.withConfig({ displayName: "multiple-choice__StyledBlockHintWrapper", componentId: "sc-1161l39-0" })(Nl || (Nl = Ws([`
  min-height: 30px;
`])));
            class Ti extends i.Component { constructor(t) { super(t), vr(this, "errorMessageRef", i.createRef()), vr(this, "letterShortcutBuffer", i.createRef()), vr(this, "letterShortcutTimeout", i.createRef()), vr(this, "getBlockNode", r => this.blockNode = r), vr(this, "setIsOtherChoiceEditing", r => { this.setState({ isOtherChoiceEditing: r }) }), vr(this, "createKeyShortcut", (r, o, v) => { var { keyboardShortcutType: f } = this.props; if (f === Oo) return js(r); if (f === gl) { var m = o.charAt(0).toUpperCase(); return this.firstCharacterShortcuts.push(m), m } if (f === Ci) return this.props.t(v) }), vr(this, "handleOtherChoiceChange", (r, o) => { if ((0, B.T)() && !(0, kt.gn)()) { var { recenter: v } = this.props;
                            v(Xr, Xr) }
                        this.setState({ otherValue: r }) }), vr(this, "handleContentEntersViewport", () => { this.setState({ contentInViewport: !0 }) }), vr(this, "handleContentLeavesViewport", () => { this.setState({ contentInViewport: !1 }) }), vr(this, "handleKeyDown", r => { var { keyboardShortcutType: o } = this.props; if (!!this.state.contentInViewport && !(0, O.tk)(r)) { if ((0, O.Xq)(r) && r.stopPropagation(), o === Oo && Si(r == null ? void 0 : r.key)) { this.letterShortcutBuffer.current === null ? (this.letterShortcutBuffer.current = [r.key], r.persist && r.persist(), this.letterShortcutTimeout.current = setTimeout(() => this.handleLetterKeyboardShortcut(r), St.uU)) : this.letterShortcutBuffer.current = [...this.letterShortcutBuffer.current, r.key], r.preventDefault(), r.stopPropagation(); return } if (this.letterShortcutTimeout.current !== null && (clearTimeout(this.letterShortcutTimeout.current), this.letterShortcutTimeout.current = null), o === gl && Si(r == null ? void 0 : r.key)) { this.handleFirstCharacterShortcut(r), r.preventDefault(), r.stopPropagation(); return }
                            o === Ci && Si(r == null ? void 0 : r.key) && (this.handleCustomCharacterShortcut(r), r.preventDefault(), r.stopPropagation()) } }), vr(this, "handleOtherChoiceBlur", r => { this.handleOtherChoiceCommit(r), this.props.onInputBlur() }), vr(this, "handleOtherChoiceCommit", r => { var { otherValue: o } = this.state, { onStageAnswer: v, value: f, allowMultipleSelection: m, blockRef: g } = this.props;
                        this.setState({ isOtherChoiceEditing: !1 }); var p = f || [],
                            h = (m ? [...this.removeStagedOtherChoice(p), o] : [o]).filter(Boolean);
                        this.setState({ stagedOtherValue: o }), v(g, h, r), h.length && !m && (r.persist && r.persist(), this.commitAnswerTimeout = setTimeout(() => { this.handleCommitAnswer(r) }, St.YJ)) }), vr(this, "handleSelect", (r, o) => { var { onStageAnswer: v, allowMultipleSelection: f, value: m } = this.props, g = m || []; if (r === this.getOtherChoiceRef() && this.getAllowEditOtherChoice()) { this.setIsOtherChoiceEditing(!0); return } var p = g.includes(r); if (!(!p && !this.canSelectMoreChoices())) { var h;
                            f ? p ? h = g.filter(P => P !== r) : h = [...g, r] : p ? h = [] : h = [r], v(this.props.blockRef, h, o), !f && !p && (o.persist && o.persist(), setTimeout(() => { this.handleCommitAnswer(o) }, St.YJ)) } }), vr(this, "handleLongestChoiceWidthChanged", r => { this.setState({ longestChoiceWidth: r }) }), vr(this, "handleColumnsChanged", r => { this.renderedColumns = r }), vr(this, "handleCommitAnswer", r => { this.props.onCommitAnswer(this.props.blockRef, r) }), this.state = { isOtherChoiceEditing: !1, longestChoiceWidth: null, otherValue: this.getOtherValue(), contentInViewport: !1, stagedOtherValue: this.getOtherValue() }, this.renderedColumns = 1, this.firstCharacterShortcuts = [], this.otherChoiceTimeout = null, this.commitAnswerTimeout = null }
                componentDidMount() { this.props.isActive && this.props.updateGlobalEventListenerRef(this.handleKeyDown), this.prefillAnswer(), this.fillOtherValueWithPartial() }
                shouldComponentUpdate(t, r) { return (0, B.T)() && t.isCommitted && !this.props.isCommitted && !t.isValid && setTimeout(() => { var o = this.errorMessageRef.current;
                        o.focus() }, 100), mo(this.props, t) || this.state.longestChoiceWidth !== r.longestChoiceWidth || t.choices !== this.props.choices }
                componentDidUpdate(t) { if (this.props.isActive && !t.isActive && (this.props.updateGlobalEventListenerRef(this.handleKeyDown), this.prefillAnswer()), !!this.props.isActive) { var r = t.choices.length !== this.props.choices.length;
                        r && this.props.recenter() } }
                componentWillUnmount() { clearTimeout(this.otherChoiceTimeout), clearTimeout(this.commitAnswerTimeout), clearTimeout(this.letterShortcutTimeout) }
                getAllowEditOtherChoice() { return this.getOtherValue() || this.canSelectMoreChoices() }
                getChoicesLength() { var { choices: t, allowOtherChoice: r } = this.props; return r ? t.length + 1 : t.length }
                getOtherValue() { var { choices: t, value: r } = this.props, o = v => t.map(f => f.ref).includes(v); return r && r.find(v => !o(v)) }
                getOtherChoiceRef() { return "".concat(this.props.blockRef, "-other") }
                getStagedOtherValue() { return this.state.stagedOtherValue }
                getPositionRef(t) { var r; return this.props.allowOtherChoice && t === this.getChoicesLength() - 1 ? this.getOtherChoiceRef() : (r = this.props.choices[t]) === null || r === void 0 ? void 0 : r.ref }
                prefillAnswer() { var t = this; return zs(function*() { var { allowMultipleSelection: r, allowOtherChoice: o, blockRef: v, choices: f, hasBeenInteractedWith: m, isActive: g, isFirstBlock: p, onCommitAnswer: h, onStageAnswer: P, value: T } = t.props, j = (0, $n.i4)(v), Y = T && T.some(Boolean); if (!!j) { var re = f.map(G => G.ref);
                            o && re.push(t.getOtherChoiceRef()); var H = j.map(G => ["yes", "no", "other"].includes(G) ? "".concat(v, "-").concat(G) : G),
                                M = H.filter(G => re.includes(G)),
                                z = M.length > 0 ? M : null,
                                X = M.includes(t.getOtherChoiceRef()); if (g && !Y && !m && z) { yield(0, $n.PB)(); var W = z.filter(G => G !== t.getOtherChoiceRef()),
                                    oe = W;!r && W[0] && (oe = [W[0]]), P(v, oe, null, { isFromPrefilledAnswer: !0 }), p && !r && !X && (yield(0, $n.Be)(), h(v, null, { isFromPrefilledAnswer: !0 })), X && (t.otherChoiceTimeout = setTimeout(() => t.setIsOtherChoiceEditing(!0), St.km)) } } })() }
                fillOtherValueWithPartial() { var { partialResponse: t, choices: r, allowOtherChoice: o } = this.props; if (!!t) { var v = r.map(p => p.ref),
                            f = t.find(p => !v.includes(p)); if (!!f) { var m = this.state.otherValue && this.state.otherValue[0],
                                g = f !== m;
                            o && g && this.setState({ otherValue: f }) } } }
                handleLetterKeyboardShortcut(t) { var r = Gs,
                        o = this.letterShortcutBuffer.current.length,
                        v = this.letterShortcutBuffer.current.join("").toUpperCase(),
                        f = v.charCodeAt(o - 1) - r; if (o === 2) { var m = v.charCodeAt(0),
                            g = m - r + 1;
                        f = f + g * $s } var p = this.getPositionRef(f);
                    this.handleKeyboardSelect(p, t), this.letterShortcutBuffer.current = null }
                handleFirstCharacterShortcut(t) { var r = this.firstCharacterShortcuts.findIndex(v => (t == null ? void 0 : t.key.toUpperCase()) === v.toUpperCase()),
                        o = this.getPositionRef(r);
                    this.handleKeyboardSelect(o, t) }
                handleCustomCharacterShortcut(t) { var { choices: r, t: o } = this.props, v = r.find(f => { var { keyboardShortcut: m } = f; return o(m) === (t == null ? void 0 : t.key.toUpperCase()) });
                    this.handleKeyboardSelect(v == null ? void 0 : v.ref, t) }
                removeStagedOtherChoice(t) { return t.filter(r => r !== this.getOtherValue()) }
                unstageOtherChoice(t) { var { onStageAnswer: r, value: o, allowMultipleSelection: v, blockRef: f } = this.props, m = o || [], g = v ? this.removeStagedOtherChoice(m) : [];
                    r(f, g, t), this.setState({ otherValue: "" }) }
                handleKeyboardSelect(t, r) { if (!t) { this.handleCommitAnswer(); return } if (t === this.getOtherChoiceRef()) { this.setIsOtherChoiceEditing(!0); return }
                    this.handleSelect(t, r) }
                canSelectMoreChoices() { var { value: t, validations: r } = this.props, { maxSelection: o } = r, v = t || []; return !o || v.length < o }
                render() { var { allowMultipleSelection: t, allowOtherChoice: r, choices: o, field: v, isActive: f, isCommitted: m, isValid: g, layout: p, onInputBlur: h, showLabels: P, submitForm: T, supersized: j, t: Y, textAlign: re, theme: H, title: M, uniqueId: z, validations: X, validationError: W, value: oe, verticalAlignment: G, withImage: $ } = this.props, { otherValue: U, isOtherChoiceEditing: fe } = this.state, { minSelection: ne, maxSelection: ye } = X, xe = this.getChoicesLength(), Ne = oe || [], q = !this.canSelectMoreChoices(), ee = !G && !this.props.longestChoiceWidth, _ = this.props.longestChoiceWidth || this.state.longestChoiceWidth, k = m && !g && !fe, Ae = !!this.getOtherValue(), Ce = (0, yt.w7)({ isErrorMessageVisible: k, hasInputInstructions: Boolean(t && f), uniqueId: z }), He = { superSizedImage: j, choiceRef: this.getOtherChoiceRef(), color: H.colors.secondary, contextBackgroundColor: H.colors.background }, _e = { allowEditOtherChoice: !!this.getAllowEditOtherChoice(), dataQa: "other-choice", selected: Ae, stagedOtherValue: this.getStagedOtherValue(), imageSvg: xs.Z, choiceRef: this.getOtherChoiceRef(), handleEscapeKey: ie => { this.setState({ otherValue: ie == null ? void 0 : ie.trim() }) } }, Ie = $ ? Je.jA.pictureChoiceAndRatingLabel : Je.jA.multipleChoiceLabel, D = { allowOtherChoice: r, answer: Ne, ariaDescribedBy: Ce, choiceProps: He, choices: o, choicesLength: xe, createKeyShortcut: this.createKeyShortcut, handleColumnsChanged: this.handleColumnsChanged, handleOtherChoiceChange: this.handleOtherChoiceChange, handleOtherChoiceCommit: this.handleOtherChoiceCommit, handleOtherChoiceBlur: this.handleOtherChoiceBlur, handleSelect: this.handleSelect, isOtherChoiceEditing: fe, longestChoiceWidth: _, onInputBlur: h, otherChoiceProps: _e, otherChoiceRef: this.getOtherChoiceRef(), otherLabelAndInputFontSize: Ie, otherValue: U, setIsOtherChoiceEditing: this.setIsOtherChoiceEditing, shouldDisableChoices: q, showLabels: P, t: Y, textAlign: re, theme: H, verticalAlignment: G, withImage: $ }; return i.createElement(Tr, wi({}, this.props, { titleFor: z, titleTag: "legend", titleText: M, onKeyDown: this.handleKeyDown, focusOnContainer: !0 }), o && i.createElement(tn.h, { onEnter: this.handleContentEntersViewport, onLeave: this.handleContentLeavesViewport }, i.createElement(Fr.Z, { top: Je.M6.topMultipleChoiceBlockContent, ref: this.getBlockNode }, t && f && i.createElement(Qs, null, i.createElement(Bs.Z, { color: H.colors.secondary, id: (0, yt.Pq)(z), maxSelection: ye, minSelection: ne, selectionCount: Ne.length })), ee && i.createElement(Ns, { theme: H, onLongestChoiceWidthChanged: this.handleLongestChoiceWidthChanged, choices: o, t: Y, allowOtherChoice: r, otherValue: U, vertical: G }), t ? i.createElement(Ks, D) : i.createElement(Us, D), i.createElement(er, { blockError: (0, Pt.lY)(W, v == null ? void 0 : v.type), blockRef: this.props.blockRef, errorMessageId: (0, yt.$w)(z), errorMessageRef: this.errorMessageRef, isErrorMessageVisible: k, layout: p, layoutItemsSize: this.props.layoutItemsSize, onClick: this.handleCommitAnswer, submitForm: T })))) } }
            Ti.defaultProps = { keyboardShortcutType: Oo, onCommitAnswer: te.Z, onInputBlur: te.Z, onStageAnswer: te.Z, recenter: te.Z, scrollToChoice: te.Z, showLabels: !0, submitForm: te.Z, t: e => e, theme: { colors: { secondary: B.Bb, background: B.Bb } }, updateGlobalEventListenerRef: te.Z, validations: {}, verticalAlignment: !0, withImage: !1 }, Ti.propTypes = { allowMultipleSelection: a().bool, allowOtherChoice: a().bool, blockIndex: a().number, blockRef: a().string, choices: a().arrayOf(a().shape({ id: a().oneOfType([a().string, a().number]), ref: a().string, label: a().string, attachment: a().shape({ resource: a().shape({ default: a().string }) }) })), description: a().oneOfType([a().array, a().string]), field: a().object, hasBeenInteractedWith: a().bool, isActive: a().bool, isCommitted: a().bool, isFirstBlock: a().bool, isValid: a().bool, keyboardShortcutType: a().string, layout: a().object, layoutItemsSize: a().object, longestChoiceWidth: a().number, onCommitAnswer: a().func, onInputBlur: a().func, onStageAnswer: a().func, partialResponse: a().array, recenter: a().func, scrollToChoice: a().func, shouldClearInput: a().bool, showLabels: a().bool, submitForm: a().func, supersized: a().bool, t: a().func, textAlign: a().oneOf(ue.EC), theme: a().object, title: a().oneOfType([a().array, a().string]), uniqueId: a().string, updateGlobalEventListenerRef: a().func.isRequired, validations: a().shape({ minSelection: a().number, maxSelection: a().number }), validationError: a().instanceOf(Pt.FU), value: a().array, verticalAlignment: a().bool, withImage: a().bool }; const To = Qe(Ti);

            function Ii() { return Ii = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, Ii.apply(this, arguments) }

            function _l(e, t, r, o, v, f, m) { try { var g = e[f](m),
                        p = g.value } catch (h) { r(h); return }
                g.done ? t(p) : Promise.resolve(p).then(o, v) }

            function Js(e) { return function() { var t = this,
                        r = arguments; return new Promise(function(o, v) { var f = e.apply(t, r);

                        function m(p) { _l(f, o, v, m, g, "next", p) }

                        function g(p) { _l(f, o, v, m, g, "throw", p) }
                        m(void 0) }) } }

            function Zl(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(v) { return Object.getOwnPropertyDescriptor(e, v).enumerable })), r.push.apply(r, o) } return r }

            function Io(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t] != null ? arguments[t] : {};
                    t % 2 ? Zl(Object(r), !0).forEach(function(o) { Xs(e, o, r[o]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zl(Object(r)).forEach(function(o) { Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o)) }) } return e }

            function Xs(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e } var qs = { sm: 110, md: 140, lg: 150, xl: 150 },
                ec = (0, Re.b5p)(JSON.stringify, e => { var { choices: t, croppedChoiceRefs: r } = e; return t.map(o => Io(Io({}, o), {}, { isCropped: !!r[o.ref] })) });
            class Vl extends i.Component { constructor(t) { super(t), this.state = { croppedChoiceRefs: {} } }
                componentDidMount() { this.updateCroppedChoiceRefs(this.props.supersized, this.props.choices, this.state.croppedChoiceRefs) }
                componentDidUpdate() { this.updateCroppedChoiceRefs(this.props.supersized, this.props.choices, this.state.croppedChoiceRefs) }
                updateCroppedChoiceRefs(t, r, o) { var v = this; return Js(function*() { if (!!t) { var f = {}; if (!v.updatingCroopedChoicesRefs) { v.updatingCroopedChoicesRefs = !0; for (var m in r) { var g = r[m],
                                        p = g.attachment && g.attachment.resource,
                                        h = p && p.src; if (h && o[g.ref] == null) try { var P = yield(0, Gn.uw)(h);
                                        f[g.ref] = P } catch (j) {} } var T = Object.keys(f).length;
                                T && v.setState({ croppedChoiceRefs: Io(Io({}, o), f) }), v.updatingCroopedChoicesRefs = !1 } } })() }
                render() { var { breakpoint: t, supersized: r, choices: o } = this.props, v = qs[t] * (r ? 1.5 : 1), f = r ? ec({ choices: o, croppedChoiceRefs: this.state.croppedChoiceRefs }) : o; return i.createElement(To, Ii({}, this.props, { choices: f, verticalAlignment: !1, longestChoiceWidth: Math.round(v), withImage: !0 })) } }
            a().defaultProps = { choices: [] }, Vl.propTypes = { breakpoint: a().string, choices: a().array, supersized: a().bool }; const tc = (0, Pe.Ng)(Vl); var rc = c(39325),
                nc = c(80550),
                Ri = c(31563),
                Yl = c(23225),
                Ul, Hl, Kl, zl;

            function Ro() { return Ro = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, Ro.apply(this, arguments) }

            function Wl(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(v) { return Object.getOwnPropertyDescriptor(e, v).enumerable })), r.push.apply(r, o) } return r }

            function Ao(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t] != null ? arguments[t] : {};
                    t % 2 ? Wl(Object(r), !0).forEach(function(o) { ac(e, o, r[o]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wl(Object(r)).forEach(function(o) { Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o)) }) } return e }

            function ac(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e }

            function Do(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) } var Gl = -1,
                oc = 800,
                ic = 400,
                lc = 52,
                $l = 1,
                sc = b.ZP.div.withConfig({ displayName: "mobile-dropdown__ContentWrapper", componentId: "sc-rvf6j-0" })(Ul || (Ul = Do([`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  align-items: center;
  padding: 8px 0 8px 8px;
`]))),
                cc = b.ZP.div.withConfig({ displayName: "mobile-dropdown__SelectWrapper", componentId: "sc-rvf6j-1" })(Hl || (Hl = Do([`
  position: relative;
`]))),
                uc = (0, b.ZP)(qa.Z).attrs({ svg: nc.Z }).withConfig({ displayName: "mobile-dropdown__DropdownIcon", componentId: "sc-rvf6j-2" })(Kl || (Kl = Do([`
  position: absolute;
  right: 5px;
  top: 14px;
  user-select: none;
`]))),
                dc = b.ZP.button.withConfig({ displayName: "mobile-dropdown__MobileTrigger", componentId: "sc-rvf6j-3" })(zl || (zl = Do([`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  padding-left: 0;
  padding-right: 26px;
  padding-bottom: 8px;
  border-radius: 0;
  border: none;
  transition: 0.2s;
  text-align: left;
  background-color: transparent;
  box-shadow: 0 1px `, `;
  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 transparent;
  }
  outline: none;
  &:focus {
    outline: none;
  }
`])), e => (0, B.Yv)(e.color)),
                vc = e => { var { blockRef: t, choices: r = [], field: o, isActive: v, isCommitted: f, isValid: m, layout: g, layoutItemsSize: p, onCommitAnswer: h = te.Z, onStageAnswer: P = te.Z, partialResponse: T, placeholder: j, shouldClearInput: Y, submitForm: re = te.Z, t: H = de => de, theme: M = { colors: { secondary: B.Bb, background: B.Bb }, font: "" }, title: z, uniqueId: X, validationError: W, value: oe } = e, G = (0, ae.T)(), $ = (0, i.useRef)(null), [U, fe] = (0, i.useState)(""), [ne, ye] = (0, i.useState)(!1), [xe, Ne] = (0, i.useState)(Gl), [q] = (0, Yl.Z)(M.font), ee = ne, _ = !!(f && !m && !ee), k = (0, yt.w7)({ uniqueId: X, isErrorMessageVisible: _, hasDescription: !1, hasInputInstructions: !1, additionalIds: "" }), Ae = (0, Re.b5p)((de, Te) => Te, (de, Te) => (0, Ri.M)(de.map(Ge => Ao(Ao({}, Ge), {}, { key: Ge.ref || Ge.label })), Te));
                    (0, fr.Z)(() => {!v && ne && _e(!1), Y && fe("") }, [v, Y]), (0, i.useEffect)(() => { G((0, Pa.XN)(ne)) }, [ne]); var Ce = () => Ae(r, U).map(de => Ao(Ao({}, de), {}, { label: (0, Ri.n)(de.label, U), value: de.label, key: de.key })),
                        He = Ce(),
                        _e = de => { de !== ne && ye(de) },
                        Ie = de => { de.persist(), h(t, de) },
                        D = de => { fe(de || "") },
                        ie = de => { de.stopPropagation() },
                        st = () => { ye(!0) },
                        it = () => { var de;
                            ye(!1), $ == null || (de = $.current) === null || de === void 0 || de.focus() },
                        Et = (de, Te) => { if (!(!de || !de.value)) { var Ge = r.findIndex(Xt => Xt.label === de.value); if (xe === Ge) { Ne(Gl), P(t, [], Te); return } var Vt = de.value;
                                de.ref && (Vt = { id: de.id, label: de.value, ref: de.ref, value: de.value }), Ne(Ge), P(t, [Vt], Te), Te.persist(), setTimeout(() => { ye(!1), setTimeout(() => { h(t, Te), fe("") }, ic) }, oc) } },
                        je = "",
                        pe = oe; if ((!oe || !oe.length) && T && (pe = T.map(de => de.ref || de.value || de)), pe && pe.length) { var Oe, pt = r.find(de => de.ref === pe[0] || de.label === pe[0]);
                        je = (Oe = pt == null ? void 0 : pt.label) !== null && Oe !== void 0 ? Oe : null } var Zt = de => de.value === je,
                        Xe = function(Te, Ge) { var Vt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1; return i.createElement(Nt.Z, { bottom: .5, key: Te.key, left: $l, right: $l }, i.createElement(Fa.Z, { role: "option", color: M.colors.secondary, selected: Vt }, i.createElement(sc, null, i.createElement(zr.ZP, { color: M.colors.secondary, ellipsis: Ge, inline: !0, type: Je.jA.multipleChoiceLabel }, Te.label)))) }; return i.createElement(Tr, Ro({}, e, { titleFor: X, titleLabelId: "".concat(X, "-label"), titleText: z, titleTag: "label" }), i.createElement(cc, { onKeyDown: ie }, i.createElement(dc, { "aria-controls": X, "aria-expanded": ee, ref: $, color: M.colors.secondary, onClick: st }, i.createElement(Jr.ZP, { size: "size2", color: M.colors.secondary }, je || H("block.dropdown.placeholderTouch")), i.createElement(uc, { "aria-hidden": !0, color: M.colors.secondary })), i.createElement(rc.Z, Ro({}, k ? { ariaDescribedBy: k } : {}, { backgroundColor: M.colors.background, className: q, color: M.colors.secondary, dataQa: "options-fullscreen-select", disableAnimations: qr.Z, filterText: U, filterTextPlaceholder: H(j || ""), id: X, isVisible: ee, keyProp: "key", noResultsMessage: H("block.dropdown.hint"), onClose: it, onFilterChange: D, onSelect: Et, optionHeight: lc, optionRender: function(Te) { var Ge = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1; return Xe(Te, Ge, Zt(Te)) }, options: He }))), i.createElement(er, { blockRef: t, blockError: (0, Pt.lY)(W, o == null ? void 0 : o.type), errorMessageId: (0, yt.$w)(X), isErrorMessageVisible: _, layout: g, layoutItemsSize: p, onClick: Ie, submitForm: re })) }; const fc = (0, Pe.Ng)(vc); var pc = c(81066),
                mc = c(610);

            function Ai() { return Ai = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, Ai.apply(this, arguments) } var gc = 8,
                hc = 8,
                Qn = -1,
                yc = qr.Z ? 0 : 400,
                bc = new Pt.Gt,
                Ec = (e, t) => { var r = t.find((o, v) => v === e); return r ? r.index : null },
                Oc = e => { var { blockRef: t, choices: r = [], field: o, hasDescription: v, isActive: f, isCommitted: m, isValid: g, labelledBy: p, layout: h, layoutItemsSize: P, onCommitAnswer: T = te.Z, onStageAnswer: j = te.Z, partialResponse: Y, placeholder: re, recenter: H = te.Z, shouldClearInput: M, submitForm: z = te.Z, t: X = be => be, theme: W = { colors: { secondary: B.Bb, background: B.Bb } }, title: oe, uniqueId: G, updateGlobalEventListenerRef: $ = te.Z, validationError: U, value: fe } = e, ne = (0, i.useMemo)(() => { var be = "",
                            lt = (!fe || !fe.length) && Y ? Y.map(Rr => Rr.ref || Rr.value || Rr) : fe; if (lt && lt.length) { var Dt, ir = r.find(Rr => Rr.ref === lt[0] || Rr.label === lt[0]);
                            be = (Dt = ir == null ? void 0 : ir.label) !== null && Dt !== void 0 ? Dt : null } return be }, [fe]), ye = (0, i.useRef)(null), [xe, Ne] = (0, i.useState)(ne), [q, ee] = (0, i.useState)(!1), [_, k] = (0, i.useState)(Qn), [Ae, Ce] = (0, i.useState)(Qn), [He, _e] = (0, i.useState)(!1);
                    (0, i.useEffect)(() => { fe && fe.length && Ne(ne) }, [fe]); var Ie = (0, Re.b5p)((be, lt) => lt, Ri.M);
                    (0, i.useEffect)(() => { f && $(Te) }, []), (0, fr.Z)(() => { $(Te), !f && q && Xe(!1), M && Ne("") }, [f, M]); var D = () => Ie(r, xe),
                        ie = () => { if (!(0, mc.F)()) return 0; var { boundingClientRect: be } = P, lt = (be == null ? void 0 : be.height) || window.innerHeight, Dt = lt / 2 - gc - hc; return Dt },
                        st = () => { _e(!0) },
                        it = () => { _e(!1) },
                        Et = (be, lt) => { j(t, [be], lt) },
                        je = () => { Ce(Qn), j(t, []) },
                        pe = (be, lt) => { var Dt = r[be] || {},
                                ir = Dt.label || "";
                            Dt.ref && (ir = { id: Dt.id, label: Dt.label, ref: Dt.ref, value: Dt.label }), k(Qn), Ce(be), ir && (setTimeout(() => { Xe(!1), Et(ir, lt), Ne(Dt.label || "") }, yc), lt.persist(), setTimeout(() => { T(t, lt) }, St.YJ)) },
                        Oe = be => { be.persist(), T(t, be) },
                        pt = be => { var lt;
                            (lt = ye.current) !== null && lt !== void 0 && lt.contains(be.relatedTarget) || Xe(!1) },
                        Zt = () => { Xe(!0) },
                        Xe = be => { be !== q && (be && setTimeout(() => H(Xr), 200), ee(be), k(Qn)) },
                        de = () => { Xe(!q) },
                        Te = be => { if (!!He) { var lt = D().length; if ((0, O.aZ)(be)) return lt > 0 && (q ? k(Math.min(lt - 1, _ + 1)) : Xe(!0)), Bn(be); if ((0, O.si)(be) && q) return k(Math.max(0, _ - 1)), Bn(be); if ((0, O.$o)(be)) return Xe(!1), Bn(be); if ((0, O.r$)(be) && !(0, O.tk)(be)) { if (q && lt > 0 && _ !== Qn) { var Dt = Ec(_, Ie(r, xe));
                                        pe(Dt, be) } else T(t, be);
                                    Bn(be) } } },
                        Ge = be => { je(); var lt = Ie(r, be || ""),
                                Dt = be != null && lt.length > 0;
                            Xe(Dt), Ne(be || ""), k(Qn) },
                        Vt = D().length === 0,
                        Xt = q === !0,
                        qt = (Vt || !!m && !g) && !Xt,
                        gr = Vt ? bc : (0, Pt.lY)(U, o == null ? void 0 : o.type),
                        ut = (0, yt.w7)({ uniqueId: G, isErrorMessageVisible: qt, hasDescription: v, hasInputInstructions: !1, additionalIds: "" }); return i.createElement(Tr, Ai({}, e, { titleFor: G, titleLabelId: "".concat(G, "-label"), titleText: oe, titleTag: "label", onKeyDown: Te, ref: ye }), i.createElement(tn.h, { onEnter: st, onLeave: it }, i.createElement("div", null, i.createElement(pc.Z, { ariaDescribedBy: ut, id: G, placeholder: X(re || ""), options: r, color: W.colors.secondary, contextBackgroundColor: W.colors.background, filterValue: xe, hoveredIndex: _, labelId: p, selectedIndex: Ae, onFilterChange: Ge, onInputClick: Zt, onArrowClick: de, onOptionClick: pe, onInputBlur: pt, optionsMaxHeight: "".concat(Xt ? ie() : 0, "px"), optionsOpen: Xt }))), i.createElement(er, { blockRef: t, hideButton: Xt, errorMessageId: (0, yt.$w)(G), blockError: gr, isErrorMessageVisible: qt, layout: h, layoutItemsSize: P, onClick: Oe, submitForm: z })) }; const Cc = Qe((0, Pe.Ng)(Oc));

            function Di() { return Di = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, Di.apply(this, arguments) } var Sc = e => { var { isTouch: t = !1, onCommitAnswer: r = te.Z, onStageAnswer: o = te.Z, recenter: v = te.Z, t: f = g => g, theme: m = { colors: { secondary: B.Bb, background: B.Bb }, font: "Comic Sans MS" } } = e; return t ? i.createElement(fc, Di({ onCommitAnswer: r, onStageAnswer: o, recenter: v, t: f, theme: m }, e)) : i.createElement(Cc, e) }; const Pc = (0, Se.t9)(Sc); var Ql;

            function Bi() { return Bi = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, Bi.apply(this, arguments) }

            function wc(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) } var Jl = b.ZP.div.withConfig({ displayName: "Group__ButtonWrapper", componentId: "sc-1un7g9u-0" })(Ql || (Ql = wc([`
  `, `;
  width: 100%;
  outline: none;
  &:focus {
    outline: none;
  }
`])), e => e.isActive ? "" : "pointer-events: none;");
            Jl.displayName = "ButtonWrapper"; var Xl = e => { var { blockRef: t, buttonText: r, children: o, description: v, isActive: f, layout: m, layoutItemsSize: g, submitForm: p, t: h = oe => oe, title: P, uniqueId: T, isScrollTop: j } = e, Y = (0, i.useRef)(), [re, H] = (0, i.useState)(!1), M = oe => { f && e.onCommitAnswer(t, oe) }, z = (0, i.useCallback)(oe => { re || oe.stopPropagation() }, [re]);
                N(f, z); var X = "".concat(T, "-title"),
                    W = `
    `.concat(X, " ").concat(v ? (0, yt.kY)(T) : "", `
  `); return i.createElement(Tr, Bi({}, e, { titleLabelId: X, titleText: P, onKeyDown: z, isScrollTop: j, focusOnContainer: !0 }), i.createElement(tn.h, { onEnter: () => H(!0), onLeave: () => H(!1) }, o), i.createElement(Jl, { ref: Y, isActive: f }, i.createElement(er, { ariaDescribedBy: W, blockRef: t, buttonText: h(r), layout: m, layoutItemsSize: g, onClick: M, isVisible: f, hideIcon: !0, submitForm: p }))) };
            Xl.propTypes = { blockRef: a().string, buttonText: a().string, children: a().node, description: a().oneOfType([a().string, a().array]), isActive: a().bool, layout: a().object, layoutItemsSize: a().object, onCommitAnswer: a().func, submitForm: a().func, t: a().func, title: a().oneOfType([a().string, a().array]), uniqueId: a().string.isRequired, isScrollTop: a().bool }; const ql = (0, i.memo)(Xl, Dn);

            function xi() { return xi = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, xi.apply(this, arguments) } var es = e => i.createElement(ql, xi({ isScrollTop: !0 }, e, { titleCounterIcon: e.hideMarks ? null : "quote" }));
            es.propTypes = { hideMarks: a().bool }; const Tc = es;

            function ji() { return ji = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, ji.apply(this, arguments) } var ki = e => { var t = { true: "".concat(e.blockRef, "-yes"), false: "".concat(e.blockRef, "-no") },
                    r = [{ ref: t[!0], value: !0, label: "label.yes.default", keyboardShortcut: "label.yes.shortcut" }, { ref: t[!1], value: !1, label: "label.no.default", keyboardShortcut: "label.no.shortcut" }],
                    o = function(m, g, p) { var [h] = g, { isFromPrefilledAnswer: P = !1 } = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, T = r.find(Y => Y.ref === h), j = [{ value: T && T.value, label: T && e.t(T.label) }];
                        e.onStageAnswer(e.blockRef, T ? j : [], p, { isFromPrefilledAnswer: P }) },
                    v = Array.isArray(e.value) ? e.value[0] : e.value; return i.createElement(To, ji({ choices: r }, e, { value: [t[v]], onStageAnswer: o, keyboardShortcutType: Ci, verticalAlignment: !0 })) };
            ki.defaultProps = { onCommitAnswer: te.Z, onStageAnswer: te.Z, t: e => e, theme: { colors: { secondary: B.Bb, background: B.Bb } } }, ki.propTypes = { title: a().oneOfType([a().array, a().string]), isActive: a().bool, canAutoFocus: a().bool, blockRef: a().string, onStageAnswer: a().func, onCommitAnswer: a().func, partialResponse: a().array, t: a().func, value: a().array, theme: a().object, layoutItemsSize: a().object }; const Ic = ki;

            function Fi() { return Fi = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, Fi.apply(this, arguments) } var Li = e => { var t = { true: "".concat(e.blockRef, "-accept"), false: "".concat(e.blockRef, "-reject") },
                    r = [{ ref: t[!0], value: !0, label: "block.legal.accept" }, { ref: t[!1], value: !1, label: "block.legal.reject" }],
                    o = (f, m, g) => { var [p] = m, h = r.find(T => T.ref === p), P = [{ value: h && h.value, label: h && e.t(h.label) }];
                        e.onStageAnswer(e.blockRef, h ? P : [], g) },
                    v = Array.isArray(e.value) ? e.value[0] : e.value; return i.createElement(To, Fi({ choices: r }, e, { value: [t[v]], onStageAnswer: o, keyboardShortcutType: Oo, verticalAlignment: !0 })) };
            Li.defaultProps = { onCommitAnswer: te.Z, onStageAnswer: te.Z, t: e => e, theme: { colors: { secondary: "#FF00FF", background: "#FFFFFF" } } }, Li.propTypes = { title: a().oneOfType([a().array, a().string]), isActive: a().bool, canAutoFocus: a().bool, blockRef: a().string, onStageAnswer: a().func, onCommitAnswer: a().func, t: a().func, value: a().array, theme: a().object, layoutItemsSize: a().object }; const Rc = Li;

            function Ni() { return Ni = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, Ni.apply(this, arguments) } var Mi = (0, B.T)() && (0, wn.Z)(),
                _i = Mi ? 700 : 0,
                Zi = e => { var { autoComplete: t, blockRef: r, field: o, hasDescription: v, inlineSubmit: f, inputMode: m, inputPattern: g, inputType: p, isActive: h, isCommitted: P, isFirstBlock: T, isValid: j, layout: Y, layoutItemsSize: re, maxLength: H, onCommitAnswer: M, onInputBlur: z, onInputFocus: X, onStageAnswer: W, placeholder: oe, recenter: G, setBlockTrackingData: $, submitForm: U, t: fe, theme: ne, title: ye, type: xe, uniqueId: Ne, validationError: q } = e, [ee, _, k] = (0, dn.Z)(St.Sx), [Ae, Ce, He] = (0, dn.Z)(St.RB), [_e, Ie] = (0, i.useState)(null), D = (0, i.useRef)(null), ie = (0, i.useRef)(null), st = (0, i.useMemo)(() => e.value.length > 0 ? e.value[0] : "", [e.value]), [it, Et] = (0, i.useState)(st);
                    (0, i.useEffect)(() => { st !== it && Et(st) }, [st]); var je = D.current === document.activeElement;
                    (0, i.useEffect)(() => () => { k(), He() }, []);

                    function pe(ut) { var be = je && (0, B.T)();
                        D && D.current && be && D.current.blur(), ut.persist(), ut.stopPropagation(), setTimeout(() => { h && M(r, ut) }, be ? _i : 0) }

                    function Oe() { D && D.current && D.current.focus() } var pt = () => {
                        (0, B.T)() && setTimeout(() => { G(Xr), Mi && D.current && D.current.scrollIntoView({ block: "center" }) }, _i) };

                    function Zt() { X(), pt() }

                    function Xe() { Mi && this.handleRecenter() } var de = ut => { var { blocked: be, error: lt } = fo(xe, H, ut);
                            _(be), Ce(be), Ie(lt) },
                        Te = ut => { ie.current = { timestamp: new Date().getTime(), type: ut.type }; var { blocked: be, error: lt } = po(H, ut);
                            _(be), Ce(be), Ie(lt) },
                        Ge = (0, i.useCallback)(ut => { Da(xe, ut); var be = ut.nativeEvent || ut;
                            (0, O.r$)(be) && !(0, O.tk)(be) ? ((0, B.T)() && D && D.current && D.current.blur(), ut.persist && ut.persist(), setTimeout(() => { h && M(r, be) }, (0, B.T)() ? _i : 0)) : ie.current = { key: ut.key, keyCode: ut.keyCode, timestamp: new Date().getTime(), type: ut.type }, (0, O.NC)(be) && (ut.stopPropagation(), ut.persist && ut.persist(), f(r, be)) }, [r, h, f, M]);
                    N(h, Ge); var Vt = ut => { if (!!h) { var be = e.value[0] || "",
                                    lt = ho(ie.current, ut, be);
                                lt && $(r, en.Yy, en.Hz.BROWSER_AUTO_COMPLETE); var Dt = ut.target.value;
                                Et(Dt), W(r, Dt.slice(0, H), ut) } },
                        Xt = P && !j,
                        qt = Xt || Ae,
                        gr = (0, yt.w7)({ uniqueId: Ne, isErrorMessageVisible: qt, hasDescription: v }); return i.createElement(Tr, Ni({}, e, { isShaking: ee, titleFor: Ne, titleTag: "label", titleText: ye, delayFocus: T ? St.r$ : 0 }), i.createElement(zn.Z, { autoComplete: t, getRef: D, placeholder: fe(oe), onKeyDown: Ge, onKeyPress: de, onChange: Vt, onPaste: Te, onFocus: Zt, onClick: Xe, onBlur: z, maxLength: H, name: t, inputId: Ne, value: it, color: ne.colors.secondary, type: p, pattern: g, inputMode: m, "aria-describedby": gr, tabIndex: 0 }), i.createElement(er, { blockRef: r, errorMessageId: (0, yt.$w)(Ne), blockError: Ae ? _e : (0, Pt.lY)(q, o == null ? void 0 : o.type), isErrorMessageVisible: qt, layout: Y, layoutItemsSize: re, onClick: pe, onFocusLost: Oe, submitForm: U })) };
            Zi.defaultProps = { inlineSubmit: te.Z, onCommitAnswer: te.Z, onStageAnswer: te.Z, setBlockTrackingData: te.Z, submitForm: te.Z, t: te.Z, theme: { colors: { secondary: B.Bb } }, value: [], autoComplete: void 0 }, Zi.propTypes = { autoComplete: a().string, blockRef: a().string, canAutoFocus: a().bool, field: { type: a().string }, hasDescription: a().bool, index: a().number, inlineSubmit: a().func, inputMode: a().string, inputPattern: a().string, inputType: a().string, isActive: a().bool, isCommitted: a().bool, isValid: a().bool, layout: a().object, layoutItemsSize: a().object, maxLength: a().number, onCommitAnswer: a().func, onInputBlur: a().func, onInputFocus: a().func, onStageAnswer: a().func, placeholder: a().string, recenter: a().func, setBlockTrackingData: a().func, submitForm: a().func, t: a().func, theme: a().object, title: a().oneOfType([a().string, a().array]), type: a().string, uniqueId: a().string.isRequired, validationError: a().instanceOf(Pt.FU), value: a().arrayOf(a().oneOfType([a().string, a().number])), isFirstBlock: a().bool }; const ts = (0, i.memo)(Zi, Dn);

            function Vi() { return Vi = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, Vi.apply(this, arguments) } var Ac = 15,
                Dc = /\D+/g,
                Bc = e => { var t = (r, o, v) => { var f = parseInt(String(o).replace(Dc, ""), 10);
                        e.onStageAnswer(e.blockRef, f, v) }; return i.createElement(ts, Vi({}, e, { inputMode: "numeric", inputPattern: "[0-9]*", autoComplete: "off", maxLength: Ac, onStageAnswer: t })) }; const xc = Bc;

            function Yi() { return Yi = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, Yi.apply(this, arguments) }

            function rs(e, t, r, o, v, f, m) { try { var g = e[f](m),
                        p = g.value } catch (h) { r(h); return }
                g.done ? t(p) : Promise.resolve(p).then(o, v) }

            function Ui(e) { return function() { var t = this,
                        r = arguments; return new Promise(function(o, v) { var f = e.apply(t, r);

                        function m(p) { rs(f, o, v, m, g, "next", p) }

                        function g(p) { rs(f, o, v, m, g, "throw", p) }
                        m(void 0) }) } } var jc = "https://",
                kc = new RegExp(/(https?|ftp|app):\/\//),
                ns = e => { var t = function() { var f = Ui(function*(m) { var { blockRef: g } = e, p = Array.isArray(e.value) ? e.value[0] : e.value; if (p) { var h = p.trim(),
                                        P = kc.test(h) ? h : "".concat(jc).concat(h); return e.onStageAnswer(g, P, m) } }); return function(g) { return f.apply(this, arguments) } }(),
                        r = (f, m) => { t(m), e.onCommitAnswer(f, m) },
                        o = function() { var f = Ui(function*(m) { m.persist && m.persist(); var { submitForm: g } = e;
                                yield t(m), g(m) }); return function(g) { return f.apply(this, arguments) } }(),
                        v = function() { var f = Ui(function*(m, g) { var { inlineSubmit: p } = e;
                                yield t(g), p(m, g) }); return function(g, p) { return f.apply(this, arguments) } }(); return i.createElement(ts, Yi({}, e, { inlineSubmit: v, inputType: "url", onCommitAnswer: r, submitForm: o })) };
            ns.propTypes = { blockRef: a().string, inlineSubmit: a().func, onCommitAnswer: a().func, onStageAnswer: a().func, submitForm: a().func, value: a().array }; const Fc = ns; var Lc = c(10619),
                Nc = c(85800),
                Mc = c(92354),
                _c = c(97140),
                Zc = c(8029),
                et = c(61270),
                as;

            function Vc(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }

            function os(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(v) { return Object.getOwnPropertyDescriptor(e, v).enumerable })), r.push.apply(r, o) } return r }

            function Bo(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t] != null ? arguments[t] : {};
                    t % 2 ? os(Object(r), !0).forEach(function(o) { Yc(e, o, r[o]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : os(Object(r)).forEach(function(o) { Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o)) }) } return e }

            function Yc(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e } var Uc = {
                    [et.Z.CardCvc]: "createCardCvcElement", [et.Z.CardExpiry]: "createCardExpiryElement", [et.Z.CardNumber]: "createCardNumberElement" },
                Hc = e => { var t = document.createElement("span");
                    t.setAttribute("class", e), document.body.appendChild(t); var r = getComputedStyle(t).fontFamily; return t.remove(), r },
                is = (e, t, r) => { var o = { color: "".concat(e), fontFamily: Hc(t), lineHeight: "".concat(Je.ik[r].lineHeight, "px"), fontSize: "".concat(Je.ik[r].fontSize, "px"), fontWeight: "".concat(Je.vC.regular), fontSmoothing: "antialiased", ":-webkit-autofill": { color: "".concat(e) } }; return { base: Bo(Bo({}, o), {}, { "::placeholder": Bo(Bo({}, o), {}, { color: "".concat((0, B.Yv)(e)) }) }), invalid: { color: "#BB3C50" } } },
                Kc = b.ZP.div.withConfig({ displayName: "stripe-element__Root", componentId: "sc-rlnrpo-0" })(as || (as = Vc([`
  padding-bottom: `, `px;
  // needed to override safari autocomplete background color
  background-color: transparent !important;
`])), Je.bf),
                Hi = e => { var { type: t, color: r, onFocus: o, onBlur: v, onChange: f, stripeService: m } = e, g = (0, i.useRef)(), p = (0, i.useRef)(), h = (0, Pe.Gc)(), P = (0, b.Fg)(), [T] = (0, Yl.Z)(P.font), j = (0, zr.rN)(Je.jA.subfieldInputText, h, P.fields.fontSize), Y = re => { var H = !!p.current._autofilled;
                        f(re, H) }; return (0, i.useEffect)(() => { if (m) return p.current = m[Uc[t]]({ style: is(r, T, j) }), p.current.on("change", Y), p.current.on("focus", o), p.current.on("blur", v), p.current.mount(g.current), () => { p.current && p.current.destroy() } }, [m]), (0, i.useEffect)(() => { p.current && p.current.update({ style: is(r, T, j) }) }, [r, h]), i.createElement(Kc, { ref: g }) };
            Hi.propTypes = { type: a().string, color: a().string, onFocus: a().func, onBlur: a().func, onChange: a().func, stripeService: a().object }, Hi.defaultProps = { color: B.Bb, onFocus: te.Z, onBlur: te.Z, onChange: te.Z }; const Ki = Hi;

            function zi() { return zi = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, zi.apply(this, arguments) }

            function ls(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(v) { return Object.getOwnPropertyDescriptor(e, v).enumerable })), r.push.apply(r, o) } return r }

            function Ir(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t] != null ? arguments[t] : {};
                    t % 2 ? ls(Object(r), !0).forEach(function(o) { pn(e, o, r[o]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ls(Object(r)).forEach(function(o) { Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o)) }) } return e }

            function pn(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e } var zc = "Jane Smith";
            class Wi extends i.PureComponent { constructor(t) { super(t), pn(this, "shouldHideHelperText", () => { var r = document.activeElement.tagName !== "BUTTON";
                        this.state.hideHelperText !== r && this.setState({ hideHelperText: r }) }), pn(this, "getAnswerValue", () => { var { value: r } = this.props; return r && r.length && r[0] ? r[0] : {
                            [et.Z.CardCvc]: { empty: !0 }, [et.Z.CardExpiry]: { empty: !0 }, [et.Z.CardNumber]: { empty: !0 } } }), pn(this, "handleInputBlur", r => { this.setState({ focusStates: Ir(Ir({}, this.state.focusStates), {}, {
                                [r]: !1 }) }), this.props.onInputBlur(), this.shouldHideHelperText() }), pn(this, "handleInputFocus", r => { this.setState({ focusStates: Ir(Ir({}, this.state.focusStates), {}, {
                                [r]: !0 }) }), this.props.onInputFocus(), this.shouldHideHelperText() }), pn(this, "handleCommit", r => { r.persist && r.persist(), setTimeout(() => { this.props.isActive && this.props.onCommitAnswer(this.props.blockRef, r) }, 0) }), pn(this, "stage", (r, o) => { if (r && !r.cardholdersName && r[et.Z.CardCvc].empty && r[et.Z.CardExpiry].empty && r[et.Z.CardNumber].empty) { this.props.onStageAnswer(this.props.blockRef, [], o); return }
                        this.props.onStageAnswer(this.props.blockRef, [r], o) }), pn(this, "handleInputChange", (r, o, v) => { var f = o.type ? o : Ir(Ir({}, o), {}, { type: "change" }),
                            m = v; if (r === et.Z.CardName) { var g = this.state.valueStates[r] || "";
                            m = ho(this.lastInputEventRef.current, o, g), this.setState(Ir(Ir({}, this.state), {}, { valueStates: Ir(Ir({}, this.state.valueStates), {}, {
                                    [r]: o.target.value }) })) } if (m) { var { blockRef: p, setBlockTrackingData: h } = this.props;
                            h(p, en.Yy, en.Hz.BROWSER_AUTO_COMPLETE) } if (r === et.Z.CardName) { this.stage(Ir(Ir({}, this.getAnswerValue()), {}, { cardholdersName: o.target.value }), f); return }
                        this.stage(Ir(Ir({}, this.getAnswerValue()), {}, {
                            [r]: { error: o.error, complete: o.complete, empty: o.empty } }), f) }), pn(this, "handleKeyDown", r => { Da(this.props.type, r), (0, O.r$)(r) ? (r.preventDefault(), this.handleCommit(r)) : this.lastInputEventRef.current = { key: r.key, keyCode: r.keyCode, timestamp: new Date().getTime(), type: r.type } }), pn(this, "handlePaste", r => { this.lastInputEventRef.current = { timestamp: new Date().getTime(), type: r.type } }), this.lastInputEventRef = i.createRef(null), this.state = { focusStates: {
                            [et.Z.CardCvc]: !1, [et.Z.CardExpiry]: !1, [et.Z.CardName]: !1, [et.Z.CardNumber]: !1 }, valueStates: {
                            [et.Z.CardName]: !1 }, hideHelperText: !0 } }
                componentDidMount() { this.props.isActive && this.props.updateGlobalEventListenerRef(this.handleKeyDown) }
                componentDidUpdate(t) { this.props.isActive && !t.isActive && this.props.updateGlobalEventListenerRef(this.handleKeyDown) }
                render() { var t, r, o, v, f, m, g, p, h, P, T, j, { blockRef: Y, buttonText: re, hasDescription: H, isCommitted: M, layout: z, layoutItemsSize: X, price: W, submitForm: oe, stripeService: G, textAlign: $, theme: U, t: fe, title: ne, uniqueId: ye, validationErrors: xe } = this.props,
                        Ne = this.getAnswerValue(),
                        { focusStates: q, hideHelperText: ee } = this.state,
                        _ = "".concat(ye, "-card-name"),
                        k = "".concat(ye, "-hint-charge"),
                        Ae = "".concat(ye, "-hint-store"),
                        Ce = "".concat(ye, "-supported-cards"),
                        He = (0, yt.w7)({ uniqueId: ye, hasDescription: H, additionalIds: "".concat(k, " ").concat(Ae, " ").concat(Ce) }),
                        _e = {}; return Object.keys(et.Z).forEach(Ie => { var D = et.Z[Ie],
                            ie = xe.filter(st => st.type === D)[0];
                        _e[D] = { validationError: !!ie && (0, ar.Z)(fe(ie == null ? void 0 : ie.label)), isVisible: !!ie && ((ie == null ? void 0 : ie.showImmediately) || M) } }), i.createElement(Tr, zi({}, this.props, { titleFor: _, titleTag: "label", titleText: ne }), i.createElement(zr.ZP, { type: Je.jA.blockDescription, color: U.colors.primary, htmlTag: "p", id: k }, fe("block.payment.hintCharge"), " ", i.createElement(Mc.Z, null, W)), i.createElement(zr.ZP, { type: Je.jA.blockDescription, color: U.colors.primary, htmlTag: "p", id: Ae }, fe("block.payment.hintStore")), i.createElement(Nn.Z, { id: Ce }, "".concat(fe("block.payment.supportedCards"), " ").concat(_c.e.join(", "))), i.createElement(Zc.Z, { cardNameId: _, cardNameElement: i.createElement("form", null, i.createElement(zn.Z, { "aria-describedby": He, autoComplete: "cc-name", color: U.colors.secondary, inputId: _, onBlur: () => this.handleInputBlur(et.Z.CardName), onChange: Ie => this.handleInputChange(et.Z.CardName, Ie), onFocus: () => this.handleInputFocus(et.Z.CardName), onKeyDown: this.handleKeyDown, onPaste: this.handlePaste, placeholder: zc, fontSizeType: Je.jA.subfieldInputText, value: Ne.cardholdersName || "" })), cardNameErrorMessage: ((t = _e[et.Z.CardName]) === null || t === void 0 ? void 0 : t.isVisible) && ((r = _e[et.Z.CardName]) === null || r === void 0 ? void 0 : r.validationError), cardNumberElement: i.createElement(Ki, { color: U.colors.secondary, onBlur: () => this.handleInputBlur(et.Z.CardNumber), onChange: (Ie, D) => this.handleInputChange(et.Z.CardNumber, Ie, D), onFocus: () => this.handleInputFocus(et.Z.CardNumber), stripeService: G, type: et.Z.CardNumber }), cardNumberErrorMessage: ((o = _e[et.Z.CardNumber]) === null || o === void 0 ? void 0 : o.isVisible) && ((v = _e[et.Z.CardNumber]) === null || v === void 0 ? void 0 : v.validationError), cardExpiryElement: i.createElement(Ki, { color: U.colors.secondary, onBlur: () => this.handleInputBlur(et.Z.CardExpiry), onChange: (Ie, D) => this.handleInputChange(et.Z.CardExpiry, Ie, D), onFocus: () => this.handleInputFocus(et.Z.CardExpiry), stripeService: G, type: et.Z.CardExpiry }), cardExpiryErrorMessage: ((f = _e[et.Z.CardExpiry]) === null || f === void 0 ? void 0 : f.isVisible) && ((m = _e[et.Z.CardExpiry]) === null || m === void 0 ? void 0 : m.validationError), cardCVCElement: i.createElement(Ki, { color: U.colors.secondary, onBlur: () => this.handleInputBlur(et.Z.CardCvc), onChange: (Ie, D) => this.handleInputChange(et.Z.CardCvc, Ie, D), onFocus: () => this.handleInputFocus(et.Z.CardCvc), stripeService: G, type: et.Z.CardCvc }), cardCVCErrorMessage: ((g = _e[et.Z.CardCvc]) === null || g === void 0 ? void 0 : g.isVisible) && ((p = _e[et.Z.CardCvc]) === null || p === void 0 ? void 0 : p.validationError), color: U.colors.secondary, id: ye, isCardNameErrorVisible: (h = _e[et.Z.CardName]) === null || h === void 0 ? void 0 : h.isVisible, isCardNameFocused: q[et.Z.CardName], isCardNumberErrorVisible: (P = _e[et.Z.CardNumber]) === null || P === void 0 ? void 0 : P.isVisible, isCardNumberFocused: q[et.Z.CardNumber], isCardCVCErrorVisible: (T = _e[et.Z.CardCvc]) === null || T === void 0 ? void 0 : T.isVisible, isCardCVCFocused: q[et.Z.CardCvc], isCardExpiryErrorVisible: (j = _e[et.Z.CardExpiry]) === null || j === void 0 ? void 0 : j.isVisible, isCardExpiryFocused: q[et.Z.CardExpiry], stripeLinkText: fe("block.payment.securedBy"), textAlign: $ }), i.createElement(er, { blockRef: Y, buttonText: re, hideHelperText: ee, hideIcon: !0, isErrorMessageVisible: !1, layout: z, layoutItemsSize: X, onClick: this.handleCommit, submitForm: oe })) } }
            Wi.propTypes = { blockRef: a().string, buttonText: a().string, hasDescription: a().bool, isActive: a().bool, isCommitted: a().bool, canAutoFocus: a().bool, layout: a().object, layoutItemsSize: a().object, onCommitAnswer: a().func, onInputBlur: a().func, onInputFocus: a().func, onStageAnswer: a().func, price: a().string, setBlockTrackingData: a().func, submitForm: a().func, stripeErrorCodes: a().object, stripeService: a().object, t: a().func, textAlign: a().oneOf(ue.EC), theme: a().object, title: a().oneOfType([a().array, a().string]), type: a().string, uniqueId: a().string.isRequired, updateGlobalEventListenerRef: a().func.isRequired, validationErrors: a().array, value: a().array }, Wi.defaultProps = { theme: { colors: { primary: B.Bb, secondary: B.Bb } }, onInputFocus: te.Z, onInputBlur: te.Z, setBlockTrackingData: te.Z, t: Re.yRu, validationErrors: [], submitForm: te.Z, value: [{ cardholdersName: "", isCardEmpty: !0, isCardValid: !1 }], stripeErrorCodes: {}, updateGlobalEventListenerRef: te.Z }; const Wc = Qe(Wi); var Gc = e => ({ price: (0, w.fG)(e), stripeErrorCodes: Lc.Z, stripeService: (0, Nc.UL)(e) }); const $c = (0, We.$j)(Gc)($r((0, Pe.Ng)(Wc))); var Qc = c(19086);

            function Jc(e) { return e.reduce((t, r, o) => t + r * Math.pow(10, o), 0) }

            function Xc(e) { var t = (0, i.useRef)([]),
                    r = (0, i.useRef)(null);

                function o() { clearTimeout(r.current), r.current = null } var v = f => {
                    (0, O.fy)(f) ? (r.current === null && (f.persist && f.persist(), t.current = [], r.current = setTimeout(() => { e(Jc(t.current), f) }, St.uU)), t.current.unshift(parseInt(f.key, 10))) : o() }; return { onKeyDown: v, clearNumberTimeout: o } } const ss = Xc;

            function Gi() { return Gi = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, Gi.apply(this, arguments) }

            function cs(e, t, r, o, v, f, m) { try { var g = e[f](m),
                        p = g.value } catch (h) { r(h); return }
                g.done ? t(p) : Promise.resolve(p).then(o, v) }

            function qc(e) { return function() { var t = this,
                        r = arguments; return new Promise(function(o, v) { var f = e.apply(t, r);

                        function m(p) { cs(f, o, v, m, g, "next", p) }

                        function g(p) { cs(f, o, v, m, g, "throw", p) }
                        m(void 0) }) } } var $i = e => { var [t, r] = (0, i.useState)(!1), { blockIndex: o, blockRef: v, field: f, hasBeenInteractedWith: m, isActive: g, isCommitted: p, isFirstBlock: h, isValid: P, labels: T, layout: j, layoutItemsSize: Y, onCommitAnswer: re, onStageAnswer: H, startAtOne: M, steps: z, submitForm: X, theme: W, title: oe, uniqueId: G, validationError: $, value: U } = e, fe = M ? 1 : 0, ne = fe + z - 1, ye = U && U.length > 0 ? U[0] : void 0, xe = (0, yt.$w)(G), Ne = p && !P;
                (0, i.useEffect)(() => { var D = function() { var ie = qc(function*() { var st = o === 0 ? (0, $n.rJ)() : null,
                                it = (0, $n.i4)(v) || st,
                                Et = it && it[0] >= fe && it[0] <= ne,
                                je = U && U.some(Boolean);
                            g && !je && !m && Et && (yield(0, $n.PB)(), H(v, it, null, { isFromPrefilledAnswer: !0 }), h && (yield(0, $n.Be)(), re(v, null, { isFromPrefilledAnswer: !0 }))) }); return function() { return ie.apply(this, arguments) } }();
                    D() }, [g]); var q = Object.keys(T).length > 0,
                    ee = (0, yt.w7)({ isErrorMessageVisible: Ne, hasInputInstructions: q, uniqueId: G }),
                    { onKeyDown: _, clearNumberTimeout: k } = ss(_e),
                    Ae = (0, i.useCallback)(D => {!(0, O.NC)(D) && !(0, O.id)(D) && D.stopPropagation(), t && _(D) }, [t, _]);
                N(g, Ae);

                function Ce(D, ie) { _e(D, ie) }

                function He(D) { D.stopPropagation(), g && re(v, D) }

                function _e(D, ie) { if (k(), ye === D) { H(v, [], ie); return }
                    D <= ne && D >= fe && (H(v, [D], ie), setTimeout(() => { re(v, ie) }, St.YJ)) } var Ie = () => { if (!q) return null; var D = (0, yt.Pq)(G); return i.createElement(Nn.Z, { id: D, tabIndex: "-1" }, T.left, ", ", fe, ", ", T.right, ", ", ne) }; return i.createElement(Tr, Gi({}, e, { titleText: oe, titleTag: "legend", onKeyDown: Ae, focusOnContainer: !0 }), i.createElement(tn.h, { onEnter: () => r(!0), onLeave: () => r(!1) }, i.createElement("div", null, i.createElement(Qc.Z, { ariaDescribedBy: ee, color: W.colors.secondary, labelLeft: T.left, labelCenter: T.center, labelRight: T.right, max: ne, min: fe, onChange: Ce, selectedAmount: ye }), Ie())), i.createElement(er, { blockRef: v, blockError: (0, Pt.lY)($, f == null ? void 0 : f.type), errorMessageId: xe, isErrorMessageVisible: Ne, layout: j, layoutItemsSize: Y, onClick: He, submitForm: X })) };
            $i.defaultProps = { labels: {}, onCommitAnswer: te.Z, onStageAnswer: te.Z, submitForm: te.Z, theme: { colors: { secondary: B.Bb } } }, $i.propTypes = { blockIndex: a().number, blockRef: a().string, canAutoFocus: a().bool, field: a().object, hasBeenInteractedWith: a().bool, isActive: a().bool, isCommitted: a().bool, isFirstBlock: a().bool, isValid: a().bool, labels: a().shape({ left: a().string, center: a().string, right: a().string }), layout: a().object, layoutItemsSize: a().object, max: a().number, min: a().number, onCommitAnswer: a().func, onStageAnswer: a().func, startAtOne: a().bool, steps: a().number, submitForm: a().func, theme: a().object, title: a().oneOfType([a().array, a().string]), type: a().string, uniqueId: a().string.isRequired, validationError: a().instanceOf(Pt.FU), value: a().array }; const eu = $i; var tu = c(65534);

            function Qi() { return Qi = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, Qi.apply(this, arguments) } var Ji = e => { var { blockRef: t, field: r, isActive: o, isCommitted: v, isValid: f, layout: m, layoutItemsSize: g, onCommitAnswer: p, onStageAnswer: h, shape: P, steps: T, submitForm: j, textAlign: Y, theme: re, title: H, uniqueId: M, validationError: z, value: X } = e, W = (0, i.useContext)($t), [oe, G] = (0, i.useState)(!1), $ = 1, U = T, fe = X && X.length > 0 ? X[0] : void 0, ne = (0, yt.$w)(M), ye = v && !f, { onKeyDown: xe, clearNumberTimeout: Ne } = ss(k), q = (0, i.useCallback)(Ae => { var Ce = Ae.nativeEvent || Ae;!(0, O.NC)(Ce) && !(0, O.id)(Ce) && Ae.stopPropagation(), oe && xe(Ae) }, [oe, xe]);
                N(o, q);

                function ee(Ae, Ce) { k(Ae, Ce) }

                function _(Ae) { Ae.stopPropagation(), o && p(t, Ae) }

                function k(Ae, Ce) { if (Ne(), fe === Ae) { h(t, [], Ce); return }
                    Ae <= U && Ae >= $ && (Ce.persist && Ce.persist(), h(t, [Ae], Ce), setTimeout(() => { p(t, Ce) }, St.YJ)) } return i.createElement(Tr, Qi({}, e, { titleText: H, titleTag: "legend", onKeyDown: q, focusOnContainer: !0 }), i.createElement(tn.h, { onEnter: () => G(!0), onLeave: () => G(!1) }, i.createElement("div", null, i.createElement(tu.Z, { ariaDescribedBy: ye ? ne : null, color: re.colors.secondary, iconName: P, max: U, min: $, onChange: ee, selectedAmount: fe, textAlign: Y, isBlockChanging: W }))), i.createElement(er, { blockRef: t, blockError: (0, Pt.lY)(z, r == null ? void 0 : r.type), errorMessageId: ne, isErrorMessageVisible: ye, layout: m, layoutItemsSize: g, onClick: _, submitForm: j })) };
            Ji.defaultProps = { onCommitAnswer: te.Z, onStageAnswer: te.Z, shape: "circle", submitForm: te.Z, theme: { colors: { secondary: B.Bb } } }, Ji.propTypes = { blockRef: a().string, canAutoFocus: a().bool, field: a().object, isActive: a().bool, isCommitted: a().bool, isValid: a().bool, layout: a().object, layoutItemsSize: a().object, max: a().number, min: a().number, onCommitAnswer: a().func, onStageAnswer: a().func, shape: a().string, steps: a().number, submitForm: a().func, textAlign: a().oneOf(ue.EC), theme: a().object, title: a().oneOfType([a().array, a().string]), uniqueId: a().string.isRequired, validationError: a().instanceOf(Pt.FU), value: a().array }; const ru = Ji; var nu = ["type", "featureFlags"];

            function au(e, t) { if (e == null) return {}; var r = ou(e, t),
                    o, v; if (Object.getOwnPropertySymbols) { var f = Object.getOwnPropertySymbols(e); for (v = 0; v < f.length; v++) o = f[v], !(t.indexOf(o) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, o) || (r[o] = e[o])) } return r }

            function ou(e, t) { if (e == null) return {}; var r = {},
                    o = Object.keys(e),
                    v, f; for (f = 0; f < o.length; f++) v = o[f], !(t.indexOf(v) >= 0) && (r[v] = e[v]); return r } var iu = {
                    [Ft.Hu]: { component: (0, Gt.Z)(vn) }, [Ft.yb]: { component: (0, Gt.Z)(Pc) }, [Ft.ML]: { component: (0, Gt.Z)(Ds) }, [Ft.wM]: { component: (0, Gt.Z)(ql) }, [Ft.l8]: { component: (0, Gt.Z)(Rc) }, [Ft.oP]: { component: (0, Gt.Z)(go) }, [Ft.aR]: { component: (0, Gt.Z)(To) }, [Ft.Wu]: { component: (0, Gt.Z)(xc) }, [Ft.Jx]: { component: (0, Gt.Z)(tc) }, [Ft.mQ]: { component: (0, Gt.Z)(Tc) }, [Ft.cy]: { component: (0, Gt.Z)(Fc) }, [Ft.Xj]: { component: (0, Gt.Z)(Ic) }, [Ft.xc]: { component: (0, Gt.Z)($c) }, [Ft.xg]: { component: (0, Gt.Z)(eu) }, [Ft.Si]: { component: (0, Gt.Z)(ru) } },
                lu = { component: (0, Gt.Z)(di) },
                Xi = e => { var { type: t, featureFlags: r } = e, o = au(e, nu);
                    (0, i.useEffect)(() => { var { blockRef: f, isActive: m, isLivePreview: g, onStageAnswer: p, partialResponse: h, setBlockTrackingData: P, value: T } = o;!g && m && h && (T == null || !T.length) && (P(f, en.Yy, en.Hz.PARTIAL_RESPONSE), p(f, h, null, { isFromPrefilledAnswer: !0 })) }, [o.isActive]); var v = (0, Cn.cI)(t, r) ? lu : iu[t]; return v ? i.createElement(v.component, Object.assign({ type: t, featureFlags: r }, o, v.props)) : null };
            Xi.defaultProps = { setBlockTrackingData: te.Z }, Xi.propTypes = { featureFlags: a().object, setBlockTrackingData: a().func, type: a().string }; const su = Xi;

            function us(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(v) { return Object.getOwnPropertyDescriptor(e, v).enumerable })), r.push.apply(r, o) } return r }

            function qi(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t] != null ? arguments[t] : {};
                    t % 2 ? us(Object(r), !0).forEach(function(o) { cu(e, o, r[o]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : us(Object(r)).forEach(function(o) { Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o)) }) } return e }

            function cu(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e } var uu = (0, Re.b5p)(JSON.stringify, w.$z),
                du = (e, t) => { var r = null; return (o, v) => { var f, m = (0, w.Fx)(o, v),
                            g = (0, w.GD)(o, v),
                            p = (0, I.sf)(o, m),
                            h = g && (0, w.Wh)(g),
                            P = (0, R.gh)(o),
                            T = !(0, w.z0)(o) && !(0, w.Us)(o); if (r && !p && r.isActive === p && r.theme === P && r.isCommitted === h && r.isBlockListVisible === T) return r; var j = (0, I.s5)((0, E.Bc)(o), m.type),
                            Y = !(0, w.vQ)(m.type, g),
                            re = g && (0, w.z5)(g),
                            H = g && (0, w.lJ)(g),
                            M = (0, Hr._S)(o, v),
                            z = (0, Hr.Kw)(o, v),
                            X = (0, at.xl)(o),
                            W = e(o),
                            oe = t(o),
                            G = X(W, { allowHyperlinks: !0 }),
                            $ = X(oe, { allowHyperlinks: !0 }),
                            U = m.application ? yn(o, v) : void 0,
                            fe = (0, L.oo)(o),
                            ne = (0, E.qC)(o),
                            ye = !fe && !(0, E.Yo)(o),
                            xe = !fe && !(0, E.Hg)(o),
                            Ne = (0, hn.O)(o, v),
                            q = sn[Ne],
                            ee = (0, ue.qe)((f = P.fields) === null || f === void 0 ? void 0 : f.alignment, m.layout.type),
                            _ = qi(qi({}, m), {}, { abTests: (0, xt.UF)(o), iframeUrl: U, field: (0, w.pw)(o, v), blockIndex: (0, w.mn)(o, v), isFirstBlock: (0, I.pi)(o, v), title: G, description: $, hasBranding: ne, hasNavigationArrows: ye, hasProgress: xe, hasDescription: Boolean(oe && oe.length), formId: (0, E.cY)(o), uniqueId: (0, I.Kh)(o, v), autoComplete: q, encryptable: j, featureFlags: (0, xt.BZ)(o), isAnswered: Y, isActive: p, isValid: re, hasBeenInteractedWith: H, validationError: M, validationErrors: z, theme: P, isCommitted: h, isBlockListVisible: T, isReviewModeEnabled: (0, E.ti)(o), isScrollNearTop: (0, E.F7)(o), isVisibleGroupStickyHeader: (0, w.vi)(o), isLivePreview: (0, E.I6)(o), language: (0, E.G3)(o), shouldClearInput: !Y && (0, E.I6)(o), partialResponse: (0, Kr._1)(o, v), value: uu(g), scrolling: (0, E.ue)(o), ref: void 0, textAlign: ee }); return r = _, _ } },
                vu = () => ((0, kt.gn)() && window.scrollBy(0, 0), kr()),
                fu = (e, t) => { var { blockRef: r } = t, o = (0, at.Ho)(r), v = (0, at.dy)(r), f = du(o, v); return m => f(m, r) },
                pu = e => qi({}, (0, Fe.DE)({ blockHeightChanging: le.Gc, onCommitAnswer: we.UC, onStageAnswer: we.eQ, goToBlock: le.IS, recenter: le.AB, scrollToChoice: le.ki, endAutoScroll: le.pq, onInputFocus: Ht, onInputBlur: vu, onRequireStickyFooter: jt, onRequireStickyHeader: Qt, onUnrecoverableError: jr.dl, setBlockTrackingData: Me.MO, submitForm: V.R2, inlineSubmit: V.IC }, e)); const ds = (0, We.$j)(fu, pu)(su); var mu = e => { var t = (0, ae.C)(w.tK),
                    r = e === t,
                    o = (0, ae.C)(w.S1),
                    v = (0, ae.C)(w.Yp),
                    f = (0, ae.C)(m => (0, I.pi)(m, e)); return r ? !f || v ? !0 : o : !1 }; const gu = mu; var vs;

            function hu(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) } var yu = b.ZP.div.withConfig({ displayName: "BlockListItem__Wrapper", componentId: "sc-veivgj-0" })(vs || (vs = hu([`
  position: absolute;
  width: 100%;
  height: 100%;
  padding-top: `, `px;

  `, `;

  `, `;

  `, `

  `, `;
  `, `
`])), e => e.topOffset, e => !e.isVisible && `
    pointer-events: none;
  `, e => (e.shouldBeBefore || e.shouldBeAfter) && "pointer-events: none", e => { var { prefersReducedMotion: t = !1 } = e; return !t && "transition: transform ".concat(St.YJ, `ms ease,
    opacity `).concat(St.YJ / 2, "ms ease;") }, e => (e.shouldBeBefore || e.shouldBeAfter) && "opacity: 0", e => { var { prefersReducedMotion: t = !1, shouldBeAfter: r, shouldBeBefore: o } = e; if (t) return "transition: opacity ".concat(St.YJ / 2, "ms ease;"); if (o) return "transform: translateY(-100vh);"; if (r) return "transform: translateY(100vh);" }),
                fs = e => { var { answer: t, areBlocksVisible: r, block: o, blockIndex: v, component: f, currentBlockIndex: m, currentRef: g, disableNavigation: p, enableNavigation: h, goToBlock: P, handleCanSwipeChange: T, handleIsVideoPlayingChange: j, isDisplayed: Y, isVideoPlaying: re, layoutItemsSize: H, listIndexText: M, nextRef: z, prefersReducedMotion: X, previousActiveRef: W, previousRef: oe, topOffset: G } = e, $ = o.ref === z, U = o.ref === g, fe = o.ref === W, ne = r && (U || fe), ye = gu(o.ref), xe = { currentRef: g, previousRef: oe, previousActiveRef: W, nextRef: z }, Ne = !on(o, t, xe, r) || !Qr && $ && !r, q = (0, i.useCallback)(k => P(o.ref, { navigationType: (0, Lt.G)(k) }), [P]); if (Ne || !Y) return null; var ee = v > m || !r,
                        _ = v < m; return i.createElement(yu, { isVisible: ne, key: o.ref, onFocus: q, prefersReducedMotion: X, shouldBeAfter: ee, shouldBeBefore: _, topOffset: G }, i.createElement(f, { blockRef: o.ref, canAutoFocus: ye, disableNavigation: p, enableNavigation: h, isVideoPlaying: re, layoutItemsSize: H, listIndexText: M, onChangeCanSwipe: T, onVideoClick: j })) };
            fs.propTypes = { answer: a().object, areBlocksVisible: a().bool, block: a().object, blockIndex: a().number, component: a().elementType, currentBlockIndex: a().number, currentRef: a().string, disableNavigation: a().func, enableNavigation: a().func, goToBlock: a().func, handleCanSwipeChange: a().func, handleIsVideoPlayingChange: a().func, isDisplayed: a().bool, isVideoPlaying: a().bool, layoutItemsSize: a().object, listIndexText: a().string, nextRef: a().string, previousActiveRef: a().string, previousRef: a().string, prefersReducedMotion: a().bool, topOffset: a().number }; const bu = i.memo(fs); var ps, ms, gs, hs;

            function xo(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) } var Eu = b.ZP.div.withConfig({ displayName: "BlockList__Root", componentId: "sc-1xrukay-0" })(ps || (ps = xo([`
  height: 100%;
`]))),
                Ou = b.ZP.div.withConfig({ displayName: "BlockList__BlocksListWrapper", componentId: "sc-1xrukay-1" })(ms || (ms = xo([`
  width: 100%;
  height: `, `;
`])), e => { var { height: t } = e; return t }),
                Cu = b.ZP.div.withConfig({ displayName: "BlockList__BlocksListContainer", componentId: "sc-1xrukay-2" })(gs || (gs = xo([`
  height: 100%;
  `, `
`])), e => { var { isPulseSurveyActive: t } = e; return t && (0, b.iv)(hs || (hs = xo([`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `]))) }),
                Su = (e, t, r, o, v, f, m, g, p) => { var h, P, T, j, Y, re = t.layout || { type: ue.BB.STACK },
                        H = re.type,
                        M = (0, ue.bK)(H, r),
                        { currentRef: z } = o,
                        X = H === ue.BB.STACK,
                        W = X ? t.attachment : (h = t.layout) === null || h === void 0 ? void 0 : h.attachment; if (!Ot.Hm.includes(M) || !W || !on(t, e, o, v)) return null; var oe = W == null ? void 0 : W.href,
                        G = W == null ? void 0 : W.type,
                        $ = (P = W == null || (T = W.properties) === null || T === void 0 ? void 0 : T.focalPoint) !== null && P !== void 0 ? P : ue.HY,
                        U = W == null || (j = W.properties) === null || j === void 0 ? void 0 : j.brightness,
                        fe = W == null || (Y = W.properties) === null || Y === void 0 ? void 0 : Y.description,
                        ne = t.ref === z,
                        ye = g !== oe || !ne; return i.createElement(Tt.Z, { attachmentAlt: fe, attachmentBrightness: U, attachmentFocalPoint: $, attachmentHref: oe, attachmentType: G, breakpoint: r, enableAnimation: p && ye, isVideoPlaying: f && ne, isVisible: ne, key: t.ref, layoutPlacement: re.placement, layoutType: H, onVideoClick: m, pexelsApiKey: "563492ad6f9170000100000155494c9d9440421cbf19eb5eaac4615e" }) },
                el = e => { var t, r, { answers: o, blockChanging: v, blocks: f, canShowSubmitButton: m, component: g, currentPath: p, currentRef: h, disableNavigation: P, enableNavigation: T, forceSubmitButtonVisible: j, goToBlock: Y, goToNextBlock: re, goToNextBlockFollowingLogic: H, goToPreviousBlock: M, inlineSubmit: z, isBlockChanging: X, isLivePreview: W, isSubmitButtonVisible: oe, isVisible: G, layoutItemsSize: $, nextRef: U, originalBlocks: fe, previousActiveRef: ne, previousRef: ye, theme: xe, topOffset: Ne } = e,
                        q = (0, Ct.Z)(fe, p),
                        ee = (0, Z.ob)(f, h),
                        _ = (0, dt.T)(),
                        k = (0, ae.C)(ze.jO),
                        Ae = (0, ae.C)(xt.Fe),
                        [Ce, He] = (0, i.useState)(!1),
                        [_e, Ie] = (0, i.useState)(!1),
                        [D, ie] = (0, i.useState)(!_),
                        [st, it] = (0, i.useState)();
                    (0, i.useEffect)(() => {!D && !_ && ie(!0) }, [h, G]), (0, i.useEffect)(() => { _ && ie(!1) }, [_]), (0, i.useEffect)(() => { G && v() }, [G]); var Et = (0, Pe.Gc)(),
                        je = (0, Z.Fx)(f, h),
                        pe = (je == null || (t = je.layout) === null || t === void 0 ? void 0 : t.type) || ue.BB.STACK,
                        Oe = (je == null || (r = je.layout) === null || r === void 0 ? void 0 : r.attachment) || (je == null ? void 0 : je.attachment),
                        pt = (0, i.useCallback)(Te => { var { next: Ge, previous: Vt } = Te;
                            Ge !== Ce && He(Ge), Vt !== _e && Ie(Vt) }, [Ce, _e]),
                        Zt = (0, i.useCallback)(() => {!_ && (Oe == null ? void 0 : Oe.type) === $e.k.video && ie(Te => !Te) }, [_, Oe, ie]),
                        Xe = (0, i.useCallback)((Te, Ge) => { if ((0, O.$o)(Te) && Zt(), (0, O.id)(Te) && !(0, O.KL)(Te) && !oe && m && Ge) { if (je.type !== "payment" && !(0, Z.wX)("block-".concat(je.ref), Te.srcElement)) return;
                                j(!0), Te.preventDefault(); return } if ((0, O.NC)(Te)) { z(h, Te), Te.preventDefault(); return } if ((0, O.r$)(Te) && !oe && !(0, O.KL)(Te) && !Ge) { var Vt = (0, Lt.G)(Te);
                                H(h, { navigationType: Vt }), Te.preventDefault() } }, [Zt, oe, m, j, z, H, Lt.G, je]),
                        de = { currentRef: h, previousRef: ye, previousActiveRef: ne, nextRef: U }; return (0, i.useEffect)(() => { var Te = (0, Z.Fx)(f, ne); if (Te) { var Ge;
                            it((Ge = Te.attachment) === null || Ge === void 0 ? void 0 : Ge.href) } }, [je]), i.createElement(Eu, null, i.createElement($t.Provider, { value: X }, i.createElement(Ur, { commonHandleKeydown: Xe, areGlobalListenersDisabled: W }, i.createElement(Zr, { goToPreviousBlock: M, goToNextBlock: re, canSwipeNext: Ce, canSwipePrevious: _e, fullHeight: !0 }, i.createElement(Cu, { isPulseSurveyActive: k }, k ? i.createElement(wt.Z, { isVisible: !0, href: gt.Hl }) : null, i.createElement(Ou, { height: k ? gt.Ye : "100%" }, i.createElement(Ot.ZP, { hasAttachment: !!Oe, backgroundColor: xe.colors.background, blocksMedia: f.map(Te => { var Ge = (0, Z.LA)(o, Te.ref); return Su(Ge, Te, Et, de, G, D, Zt, st, Ae) }), breakpoint: Et, isVisible: G, layoutType: pe }, f.map((Te, Ge, Vt) => { var Xt = Te.ref,
                            qt = (0, Z.LA)(o, Xt),
                            gr = (0, Z.Ic)(Te, p),
                            ut = q[(0, Z.ob)(p, Xt)],
                            be = (0, Z.ob)(Vt, Xt); return i.createElement(bu, { answer: qt, areBlocksVisible: G, block: Te, blockIndex: be, component: g, currentBlockIndex: ee, currentRef: h, disableNavigation: P, enableNavigation: T, goToBlock: Y, handleCanSwipeChange: pt, handleIsVideoPlayingChange: Zt, isDisplayed: gr, isVideoPlaying: D, key: Xt, layoutItemsSize: $, listIndexText: ut, nextRef: U, previousActiveRef: ne, previousRef: ye, topOffset: Ne, prefersReducedMotion: _ || k }) })))))))) };
            el.defaultProps = { blocks: [], blockChanging: te.Z, component: ds, goToBlock: te.Z, theme: { colors: { background: B.Bb } } }, el.propTypes = { answers: a().array, blockChanging: a().func, blocks: a().array.isRequired, canShowSubmitButton: a().bool, component: a().elementType, currentPath: a().array, currentRef: a().string, disableNavigation: a().func, enableNavigation: a().func, forceSubmitButtonVisible: a().func, goToBlock: a().func, goToNextBlock: a().func, goToNextBlockFollowingLogic: a().func, goToPreviousBlock: a().func, handleCanSwipeChange: a().func, inlineSubmit: a().func, isBlockChanging: a().bool, isLivePreview: a().bool, isSubmitButtonVisible: a().bool, isVisible: a().bool, layoutItemsSize: a().object, nextRef: a().string, onEndAutoScroll: a().func, originalBlocks: a().array, previousActiveRef: a().string, previousRef: a().string, scrolling: a().shape({ anchor: a().string, scrollType: a().string }), theme: a().object, topOffset: a().number }; const Pu = el; var wu = 60,
                Tu = 88,
                Iu = e => { var t = (0, w.tK)(e),
                        r = (0, B.T)() && (0, E.Lh)(e),
                        o = !(0, L.oI)(e) && !r && (0, w.vi)(e),
                        v = o ? (0, E.Ow)(e) : null,
                        f = (0, Z.uw)(v),
                        m = (0, R.Tw)(e),
                        g = 0; return o && !m && (g = f ? Tu : wu), { answers: (0, w.X2)(e), blocks: (0, w.Vl)(e), canShowSubmitButton: (0, E.Is)(e, t), currentPath: (0, w.Jz)(e), currentRef: t, isBlockChanging: (0, E.ge)(e), isLivePreview: (0, E.I6)(e), isSubmitButtonVisible: (0, E.Cf)(e, t), nextRef: (0, w.iu)(e, t), previousActiveRef: (0, E.eS)(e), previousRef: (0, I.H0)(e), scrolling: (0, E.ue)(e), theme: (0, R.gh)(e), topOffset: g, originalBlocks: (0, w.rJ)(e) } },
                Ru = { blockChanging: le.yQ, disableNavigation: le.DT, enableNavigation: le.An, forceSubmitButtonVisible: le.hl, goToBlock: le.IS, goToNextBlock: F.hA, goToNextBlockFollowingLogic: F.MN, goToPreviousBlock: le.PQ, inlineSubmit: V.IC, onEndAutoScroll: le.pq }; const Au = (0, We.$j)(Iu, Ru)(Pu); var Du = c(28825),
                Bu = function(t) { var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 500,
                        [o, v] = (0, i.useState)(t),
                        [f, m] = (0, i.useState)(!0),
                        g = () => { m(!1), v(t) }; return (0, i.useEffect)(() => { m(!0); var p = setTimeout(g, r); return () => { m(!1), clearTimeout(p) } }, [t, r]), [o, { isPending: f }] }; const pd = null; var xu = (e, t) => { var r = e.displayName || e.name || "Component",
                    o = v => { var [f] = Bu(v, t); return i.createElement(e, f) }; return o.displayName = "withDebounce(".concat(r, ")"), o }; const ju = xu; var ku = ["activeBlockRef", "groupHeaderVisible", "groupTitle", "isBlockChanging", "questionHeaderVisible", "questionTitle"],
                ys;

            function tl() { return tl = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, tl.apply(this, arguments) }

            function Fu(e, t) { if (e == null) return {}; var r = Lu(e, t),
                    o, v; if (Object.getOwnPropertySymbols) { var f = Object.getOwnPropertySymbols(e); for (v = 0; v < f.length; v++) o = f[v], !(t.indexOf(o) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, o) || (r[o] = e[o])) } return r }

            function Lu(e, t) { if (e == null) return {}; var r = {},
                    o = Object.keys(e),
                    v, f; for (f = 0; f < o.length; f++) v = o[f], !(t.indexOf(v) >= 0) && (r[v] = e[v]); return r }

            function Nu(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) } var bs = (e, t) => t ? (0, ia.yF)(e, t.ref) && !!t.listIndexText ? null : t.titleCounterIcon || "arrow" : null,
                Mu = (e, t) => { var r = (0, L.oI)(e),
                        o = (0, E.Lh)(e),
                        v = (0, B.T)() && o,
                        f = (0, R.Tw)(e),
                        m = (0, E.BA)(e),
                        g = !r && (0, E.m5)(e) && t.breakpoint !== "sm" && !v,
                        p = !r && !f && (0, w.vi)(e) && !v,
                        h = g ? (0, E.vR)(e) : null,
                        P = p ? (0, E.Ow)(e) : null,
                        T = (0, w.rJ)(e),
                        j = bs(T, P),
                        Y = bs(T, h),
                        re = (0, at.xl)(e); return { groupHeaderVisible: p, groupTitle: (P == null ? void 0 : P.title) && re(P.title), groupHeaderIcon: j, groupHeaderCounter: m && P && P.listIndexText, groupHeaderImage: (0, Z.uw)(P), questionHeaderVisible: g && !f, questionTitle: (h == null ? void 0 : h.title) && re(h.title), questionHeaderIcon: Y, questionHeaderCounter: m && h && h.listIndexText, contextBackgroundColor: (0, R.dF)(e), contentColor: (0, R.vM)(e), counterColor: (0, R.pw)(e), oldLayout: !0, isBlockChanging: (0, E.ge)(e), activeBlockRef: h ? h.ref : null, groupBlock: P } },
                _u = b.ZP.div.withConfig({ displayName: "sticky-header-container__Wrapper", componentId: "sc-ngowdl-0" })(ys || (ys = Nu([`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  `, `;
  `, `;
`])), e => e.isVisible ? "" : "pointer-events: none;", e => e.isSmallViewport ? "" : "z-index: ".concat(Je.Pi.level3)),
                Es = qr.Z ? 0 : 300,
                Zu = ju(Du.Z, Es),
                Os = e => { var { activeBlockRef: t, groupHeaderVisible: r, groupTitle: o, isBlockChanging: v, questionHeaderVisible: f, questionTitle: m } = e, g = Fu(e, ku), [p, h] = (0, i.useState)(!1);
                    (0, i.useEffect)(() => { if (v) h(!0);
                        else { var T = setTimeout(() => h(!1), Es); return () => clearTimeout(T) } }, [v]); var P = !p && !v && (r || f); return i.createElement(Pe.d7, null, T => { var { width: j } = T, Y = j < Je.fl.sm; return i.createElement(_u, { "aria-hidden": !0, "data-qa-stickyheader-visible": P, "data-qa-stickyheader-blockref": t, isVisible: P, isSmallViewport: Y }, i.createElement(Zu, tl({ questionHeaderVisible: f && !p && !v, groupHeaderVisible: r, questionHeaderContent: m, groupHeaderContent: o }, g))) }) };
            Os.propTypes = { activeBlockRef: a().string, groupHeaderVisible: a().bool, groupTitle: a().oneOfType([a().string, a().array]), isBlockChanging: a().bool, questionHeaderVisible: a().bool, questionTitle: a().oneOfType([a().string, a().array]) }; const Vu = (0, Pe.Ng)((0, We.$j)(Mu)(Os)); var Yu = c(64918),
                Uu = c(12413),
                Cs, Ss, Ps;

            function rl(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) } var Hu = 56,
                Ku = b.ZP.div.withConfig({ displayName: "StickyFooter__CommitButtonWrapper", componentId: "sc-14m6tj2-0" })(Cs || (Cs = rl([`
  display: flex;
  align-items: center;
`]))),
                zu = b.ZP.div.withConfig({ displayName: "StickyFooter__StickyFooterPlaceholder", componentId: "sc-14m6tj2-1" })(Ss || (Ss = rl([`
  pointer-events: all;
  width: 100%;
  overflow: hidden;
  z-index: `, `;
  opacity: `, `;
  visibility: `, `;
`])), e => e.isActive ? Je.Pi.level3 : Je.Pi.level0, e => e.isActive ? "1" : "0", e => e.isActive ? "visible" : "hidden"),
                Wu = b.ZP.div.withConfig({ displayName: "StickyFooter__StickyFooterWrapper", componentId: "sc-14m6tj2-2" })(Ps || (Ps = rl([`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid;
  height: `, `px;
  background-color: `, `;
  border-color: `, `;
`])), e => e.$height, e => (0, B.Zn)((0, B.CD)(e.contextBackgroundColor, e.$color, .2)), e => (0, B.CD)(e.contextBackgroundColor, e.$color, .3)),
                nl = e => { var { blockRef: t, show: r, theme: o, t: v, breakpoint: f, buttonText: m, showButtonIcon: g, hasFormFooter: p, helperText: h, isButtonTypeSubmit: P, isEnabled: T, isLivePreview: j, isPaymentBlockAnswered: Y, onCommitAnswer: re, price: H, recenter: M, submit: z, submitForm: X } = e, W = (0, Se.Pg)(), oe = ne => { re(t, ne, { source: ea.b }) }, G = ne => { M(Xr), X(ne) }; if (!T) return null; var $ = f === "sm",
                        U = !$ && !W ? (0, ar.Z)(v(h)) : "",
                        fe = g ? Mn.Z : null; return i.createElement(zu, { "aria-hidden": !0, "data-qa": "sticky-footer-placeholder", isActive: r, hasFormFooter: p }, i.createElement(J.ZP, { type: "slideUp", isVisible: r }, i.createElement(Wu, { $height: Hu, contextBackgroundColor: o.colors.background, $color: o.colors.secondary, "data-qa": "sticky-footer", "data-qa-visible": r }, i.createElement(Sa.ZP, { noPadding: !1 }, i.createElement(Ku, null, P ? i.createElement(Zn, { centered: $, fullWidth: $, helperText: "", isComplete: z.isComplete, isLivePreview: j, isPaymentBlockAnswered: Y, isSubmitting: z.isSubmitting, onClick: G, price: H, size: "medium", t: v, theme: o }) : i.createElement(ya.ZP, { fullWidth: $, onClick: oe, iconSvg: fe, size: "medium", color: o.colors.button, contentColor: o.colors.buttonContent, contextBackgroundColor: o.colors.background, transparent: o.hasTransparentButton, dataQa: "sticky-footer-button" }, v(m)), U && i.createElement(Nt.Z, { left: 2 }, i.createElement(Yu.Z, { text: U, color: o.colors.secondary })))))), !p && i.createElement(Uu.R1, { "data-qa": "safe-area-bottom" })) };
            nl.defaultProps = { t: e => e, recenter: e => e, buttonText: "label.button.ok", showButtonIcon: !0, isEnabled: !0, theme: { colors: { background: B.Bb, button: B.Bb, secondary: B.Bb } }, submit: { retry: {}, isComplete: !1, isSubmitting: !1 } }, nl.propTypes = { show: a().bool, theme: a().object, blockRef: a().string, breakpoint: a().string, buttonText: a().string, showButtonIcon: a().bool, recenter: a().func, onCommitAnswer: a().func, price: a().string, hasFormFooter: a().bool, helperText: a().string, isButtonTypeSubmit: a().bool, isEnabled: a().bool, isLivePreview: a().bool, isPaymentBlockAnswered: a().bool, submit: a().object, submitForm: a().func, t: a().func }; const Gu = (0, Pe.Ng)((0, Gt.Z)(nl)); var $u = e => { var t = (0, w.tK)(e),
                        r = (0, E.Yg)(e),
                        o = (0, w.Fx)(e, r); if (!o || r !== t) return { show: !1, theme: (0, R.gh)(e) }; var v = (0, B.T)() && (0, E.Lh)(e),
                        f = (0, E.qm)(e, r),
                        m = Na() ? "label.buttonHint.submit-mac" : "label.buttonHint.submit",
                        g = (0, L.oo)(e),
                        p = (0, E.qC)(e),
                        h = !g && !(0, E.Yo)(e),
                        P = !g && !(0, E.Hg)(e),
                        T = p || h || P; return { blockRef: r, buttonText: o.buttonText, hasFormFooter: T, helperText: f ? m : "label.buttonHint.default", isButtonTypeSubmit: f, isEnabled: (0, B.T)(), isLivePreview: (0, E.I6)(e), isPaymentBlockAnswered: (0, Hr.eH)(e), price: (0, w.fG)(e), show: !(0, L.oo)(e) && !v, showButtonIcon: !(0, w.lv)(o), submit: (0, w.iN)(e), theme: (0, R.gh)(e) } },
                Qu = { onCommitAnswer: we.UC, recenter: le.AB, submitForm: V.R2 }; const Ju = (0, We.$j)($u, Qu)(Gu); var al = c(12209),
                Xu = c(67846),
                ws = "typeform-footer",
                qu = "https://www.typeform.com/explore/",
                ed = e => { var { isBlockListVisible: t } = e, { t: r } = (0, me.I4)(), o = (0, ae.T)(), v = (0, ae.C)(Sn.il), f = (0, ae.C)(E.I6), m = f ? void 0 : v(qu, ws), g = (0, ae.C)(L.oo), p = (0, ae.C)(R.pQ), h = (0, ae.C)(R.nH), P = (0, ae.C)(R.dF), T = (0, ae.C)(ba.YJ), j = (0, ae.C)(ba.KM), Y = (0, ae.C)(R.vK), re = (0, ae.C)(E.Lh), H = (0, B.T)() ? !re : !0, M = (0, ae.C)(E.qC), z = (0, ae.C)(E.Yo), X = !g && !z, W = U => { o((0, F.hA)({ navigationType: (0, Lt.G)(U) })) }, oe = U => { o((0, le.PQ)({ navigationType: (0, Lt.G)(U) })) }, G = () => { o((0, Me.JD)(ws)) }, $ = { brandButtonHref: m, brandButtonText: (0, ar.Z)(r("label.branding.poweredby")), buttonsColor: p, buttonsContentColor: h, contextBackgroundColor: P, dataQa: "fixed-footer", nextButtonDisabled: !T, nextButtonOnClick: W, onClickBrandButton: G, previousButtonDisabled: !j, previousButtonOnClick: oe, progressBackgroundColor: P, transparentButtons: Y, visible: H, withBranding: M, withNavigationArrows: X }; return i.createElement(Xu.Z, $) },
                td = c(55895); const rd = Vo; var Ts;

            function ol() { return ol = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }, ol.apply(this, arguments) }

            function nd(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) } var ad = b.ZP.div.withConfig({ displayName: "form__Root", componentId: "sc-19pinwh-0" })(Ts || (Ts = nd([`
  height: 100%;
  overflow: hidden;
`]))),
                Is = "stkv-form-root",
                od = e => { var t = e.target;
                    t.id === Is && (t.scrollTop = 0) },
                id = e => { var { layoutItemsSize: t = {} } = e, r = (0, ae.C)(w.z0), o = (0, ae.C)(w.Us), v = (0, ae.C)(L.TJ), f = (0, ae.C)(Pn.fw), m = (0, ae.C)(Pn._5), g = (0, Se.Pg)(), p = !g || !f && !m, h = !r && !o, P = !!(0, ae.C)(w.co), T = g && f && !P, [j, Y] = (0, i.useState)((0, kt.gn)()), re = (0, ae.C)(ze.jO), { t: H } = (0, me.I4)(), M = (0, Pe.Gc)(), z = (0, ae.C)(R.gh), X = (0, ae.T)(), W = M === "sm", oe = g && W, G = W, $ = G || oe, U = (0, ae.C)(ye => (0, al.getCustomRedirectUrl)(ye, al.UTM_CONTENT_THANKYOU_FOOTER)), fe = (0, i.useCallback)(() => { X((0, Me.JD)(al.UTM_CONTENT_THANKYOU_FOOTER)) }, [X, Me.JD]); if ((0, i.useEffect)(() => { if (h && (0, kt.gn)()) { var ye = setTimeout(() => Y(!1), St.YJ + 200); return () => clearTimeout(ye) } return te.Z }, [h]), v && r) return null; var ne = !T && !re; return i.createElement(ad, { "aria-hidden": o || r, id: Is, onScroll: od }, h && p && i.createElement(J.ZP, { type: "fade", duration: St.E0 }, i.createElement(td.Z, null)), i.createElement(Vu, null), !o && i.createElement(Au, { component: ds, isVisible: h, layoutItemsSize: t }), ne ? i.createElement(J.ZP, { isVisible: h, type: "fadeIn", duration: qr.Z ? 0 : 500, delay: qr.Z ? 0 : 300 }, i.createElement(Za, null, i.createElement("div", { "aria-hidden": j }, !o && i.createElement(Ju, null)), i.createElement(ed, { isBlockListVisible: h }))) : i.createElement(i.Fragment, null, T && i.createElement(rd, null), re && i.createElement(De.Z, ol({ breakpoint: M, buttonColor: z.colors.button, buttonContentColor: z.colors.buttonContent, buttonText: (0, ar.Z)(H("label.branding.create")), color: z.colors.primary, contextBackgroundColor: z.colors.background, isTopPositioned: $, motto: (0, ar.Z)(H("label.branding.motto")), onBtnClick: fe, layoutHasBrandLogo: !1 }, U ? { url: U } : {})), ")")) }; const ld = id } }
]);