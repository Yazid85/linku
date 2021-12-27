function reveal() {
    for (var e = document.querySelectorAll("#kotak"), t = 0; t < e.length; t++) {
        var a = window.innerHeight,
            n = e[t].getBoundingClientRect().top,
            o = 150;
        a - o > n ? e[t].classList.add("active") : e[t].classList.remove("active")
    }
}
window.addEventListener("scroll", reveal);


/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */

var inputs = qSell('.widget input[type=text],.widget input[type=email],.widget textarea');
for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    input.addEventListener('input', function () {
        var bg = this.value ? 'fl' : 'nfl';
        this.setAttribute('data-text', bg)
    })
}
/* LOCAL STG STU // LS btn STU  cb STU */
let obstuCheckbok = {};
const STRG_CHECK_STU = xId + '-cb-stu';
let obstuValue = {};
const STRG_VAL_STU = xId + '-val-stu';
let ckstuLcl = localStorage.getItem(STRG_CHECK_STU);
let ckstuVcl = localStorage.getItem(STRG_VAL_STU);

// Text STU LCL STRG
var tXtStu1 = "Load Template";
var tXtStu2 = "Do you want to load the last button template?";
var tXtStu3 = "Load";
var tXtStu4 = "No";
var tXtStu5 = "Delete Template";

var tXtStu6 = "Template has been successfully loaded";
var tXtStu7 = "Are you sure you want to delete the template?";
var tXtStu8 = "Yes, Delete it";

var tXtStu9 = "Success";
var tXtStu10 = "Template successfully deleted..";

if (ckstuLcl || ckstuVcl) {
    Swal.fire({
        title: tXtStu1,
        text: tXtStu2,
        icon: 'info',
        showCancelButton: true,
        showDenyButton: true,
        cancelButtonText: tXtStu4,
        denyButtonText: tXtStu5,
        confirmButtonColor: '#0b57cf',
        confirmButtonText: tXtStu3
    }).then((result) => {
        if (result.isConfirmed) {
            if (ckstuLcl) {
                obstuCheckbok = JSON.parse(ckstuLcl);
                for (let key in obstuCheckbok) chkbStu(key, obstuCheckbok[key])
            }
            if (ckstuVcl) {
                obstuValue = JSON.parse(ckstuVcl);
                for (let key in obstuValue) chkvStu(key, obstuValue[key]);
            }

            Swal.fire({
                title: tXtStu6,
                icon: 'success',
                confirmButtonColor: '#0b57cf',
                confirmButtonText: 'Close'
            })

            ;
        } else if (result.isDenied) {
            Swal.fire({
                title: tXtStu7,
                icon: 'warning',
                confirmButtonColor: '#0b57cf',
                cancelButtonColor: '#d33',
                confirmButtonText: tXtStu8,
                showCancelButton: true,
                cancelButtonText: tXtStu4
            }).then((result) => {
                if (result.isConfirmed) {
                    if (ckstuLcl) {
                        localStorage.removeItem(STRG_CHECK_STU);
                    }
                    if (ckstuVcl) {
                        localStorage.removeItem(STRG_VAL_STU);
                    }
                    Swal.fire(tXtStu9, tXtStu10, 'success')
                }
            });
        }
    });
}

function synCstuStrg(activity, item, status = false) {
    switch (activity) {
    case 'ADD':
    case 'UPD':
        obstuCheckbok[item] = status;
        break;
    case 'DEL':
        delete obstuCheckbok[item];
        break;
    default:
        break;
    }
    localStorage.setItem(STRG_CHECK_STU, JSON.stringify(obstuCheckbok));
    return
}

function chkbStu(text, status = !1) {
    var ciStub = text.split('#')[0],
        iiBts = text.split('#')[1];
    var setItemStub = '.rpSTU#' + iiBts + ' > input[type=checkbox]:nth-child(' + ciStub + ')';
    if (qSel(setItemStub) !== null) {
        qSel(setItemStub).checked = true;
    }
}

var cStuid = qSell('.rpSTU');
for (var l = 0; l < cStuid.length; l++) {
    var parStuId = cStuid[l].getAttribute('id');
    if (parStuId != null) {
        var qStuBtn = '.rpSTU#' + parStuId + ' > input[type=checkbox]';
        var gStuBtn = qSell(qStuBtn);
        for (var i = 0; i < gStuBtn.length; i++) {
            gStuBtn[i].setAttribute('data-no', i + 1);
            gStuBtn[i].addEventListener('change', function () {
                var iStuBpar = this.parentElement.id;
                var btnStuN = this.getAttribute('data-no') + '#' + iStuBpar;
                if (this.checked) {
                    synCstuStrg('ADD', btnStuN, 'a')
                } else {
                    synCstuStrg('DEL', btnStuN)
                }
            });
        }
    }
}
// END LS btn STU

// LS value STU
function synVstuStrg(activity, item, status = false) {
    switch (activity) {
    case 'ADD':
    case 'UPD':
        obstuValue[item] = status;
        break;
    case 'DEL':
        delete obstuValue[item];
        break;
    default:
        break;
    }
    localStorage.setItem(STRG_VAL_STU, JSON.stringify(obstuValue));
    return
}

function chkvStu(text, status = !1) {
    var ciStuv = text.split('#')[0],
        iiVs = text.split('#')[1];
    var setItemStuv = '#' + iiVs;
    if (qSel(setItemStuv) !== null) {
        qSel(setItemStuv).value = atob(status);
    }
}

var cStuvid = qSell('.fgSTU');
for (var l = 0; l < cStuvid.length; l++) {
    var parvStuId = cStuvid[l].getAttribute('id');
    if (parvStuId != null) {
        var qStuVal = '.fgSTU#' + parvStuId + ' .cArea label > input[type=text]:not([readonly])';
        var gStuVal = qSell(qStuVal);
        for (var i = 0; i < gStuVal.length; i++) {
            gStuVal[i].setAttribute('data-no', i + 1);
            gStuVal[i].addEventListener('change', function () {
                var iStuVpar = this.getAttribute('id');
                var valStuN = this.getAttribute('data-no') + '#' + iStuVpar;
                if (this.value !== "") {
                    var gtVStu = btoa(this.value);
                    synVstuStrg('ADD', valStuN, gtVStu)
                } else {
                    synVstuStrg('DEL', valStuN)
                }
            });
        }
    }
}
// END LS value STU

function genSTU() {
    var b = O,
        D = O;
    (function (q, d) {
        var c = O,
            I = O,
            C = q();
        while (!![]) {
            try {
                var n = parseInt(c(0x1d1)) / (0x2fc * -0x2 + -0x1f14 + 0x7 * 0x54b) * (-parseInt(I(0x1d0)) / (-0xa75 + -0xbe6 + 0x165d)) + -parseInt(I(0x1ec)) / (0x1e92 + -0x222c + -0x5 * -0xb9) * (-parseInt(c(0x1e1)) / (0x1528 + 0xccb + 0x11 * -0x1ff)) + -parseInt(I(0x1ee)) / (0xe53 + 0x1be5 + -0x2a33) + parseInt(I(0x1e7)) / (0x16cd + 0x1653 + -0x2d1a) * (-parseInt(I(0x1dc)) / (-0x1ebc + 0xb1 * 0xc + 0x51 * 0x47)) + parseInt(c(0x1f0)) / (0x2670 + -0x14f0 + -0x1178) * (-parseInt(I(0x1d3)) / (-0x195a + 0x885 + -0x2 * -0x86f)) + -parseInt(I(0x1cf)) / (-0x154d * 0x1 + 0x18c6 + -0x36f) * (parseInt(c(0x1e2)) / (0xb2 * -0x17 + 0x9ab + 0x65e)) + parseInt(c(0x1e4)) / (0x1 * 0x2231 + -0x21c9 + -0x5c);
                if (n === d) break;
                else C['push'](C['shift']());
            } catch (f) {
                C['push'](C['shift']());
            }
        }
    }(g, 0x317cd + -0x8b49 * -0x2 + 0x7af29));
    var m = (function () {
            var q = !![];
            return function (d, C) {
                var n = q ? function () {
                    if (C) {
                        var f = C['apply'](d, arguments);
                        return C = null, f;
                    }
                } : function () {};
                return q = ![], n;
            };
        }()),
        r = m(this, function () {
            var T = O,
                t = O,
                d = {};
            d[T(0x1e6)] = '(((.+)+)+)' + '+$';
            var C = d;
            return r[T(0x1e0)]()[T(0x1d6)](C['jkvTP'])[T(0x1e0)]()[t(0x1cc) + 'r'](r)[T(0x1d6)](C[T(0x1e6)]);
        });
    r();
    var Y = (function () {
            var q = !![];
            return function (d, C) {
                var n = q ? function () {
                    var K = O;
                    if (C) {
                        var f = C[K(0x1ca)](d, arguments);
                        return C = null, f;
                    }
                } : function () {};
                return q = ![], n;
            };
        }()),
        w = Y(this, function () {
            var L = O,
                G = O,
                q = {
                    'iyJUU': L(0x1de),
                    'EsSDW': function (F, Q) {
                        return F < Q;
                    },
                    'yiVcy': 'log',
                    'hzffY': L(0x1ef),
                    'jUFTD': L(0x1da),
                    'bWjCs': L(0x1db),
                    'RqKzH': 'table',
                    'PlscU': G(0x1dd),
                    'qXxtR': function (F, Q) {
                        return F(Q);
                    },
                    'Dujob': function (F, Q) {
                        return F + Q;
                    }
                },
                d = q[L(0x1f2)]['split']('|'),
                C = -0x1 * 0x367 + -0x2 * 0x837 + 0x13d5;
            while (!![]) {
                switch (d[C++]) {
                case '0':
                    var n = o[L(0x1cb)] = o['console'] || {};
                    continue;
                case '1':
                    for (var f = 0x170c + 0xf * 0x49 + -0x5 * 0x577; q['EsSDW'](f, i[G(0x1eb)]); f++) {
                        var y = Y[L(0x1cc) + 'r'][L(0x1cd)][L(0x1e3)](Y),
                            N = i[f],
                            V = n[N] || y;
                        y[L(0x1e8)] = Y['bind'](Y), y[G(0x1e0)] = V[G(0x1e0)][G(0x1e3)](V), n[N] = y;
                    }
                    continue;
                case '2':
                    var o;
                    continue;
                case '3':
                    var i = [q[L(0x1d5)], q[L(0x1e9)], 'info', q[G(0x1e5)], q[G(0x1d4)], q[L(0x1d8)], q['PlscU']];
                    continue;
                case '4':
                    try {
                        var x = q['qXxtR'](Function, q['Dujob'](G(0x1d2) + G(0x1f1) + (G(0x1ea) + G(0x1d7) + L(0x1d9) + ' )'), ');'));
                        o = x();
                    } catch (F) {
                        o = window;
                    }
                    continue;
                }
                break;
            }
        });
    w();

    function O(w, Y) {
        var r = g();
        return O = function (m, q) {
            m = m - (-0x1f96 + -0x11d + 0x3 * 0xb7f);
            var d = r[m];
            return d;
        }, O(w, Y);
    }
    var pStu = b(0x1ce) + D(0x1df) + '.blogspot.com/p/s' + 'ub-to-unlo' + b(0x1ed);
    
    function g() {
        g = function () {
            return R;
        };
        return g();
    }
    var tEr = "Format yang anda masukkan salah"; // text error input

    getid('rStu').classList.add('hidden');
    var erN = getid("er-m"),
        iPas1 = getid("i-pas1"),
        iYt1 = getid("i-yt1"),
        iYt2 = getid("i-yt2"),
        iYt3 = getid("i-yt3"),
        cYtm1 = getid("c-ytm1"),
        iYtl1 = getid("i-ytl1"),
        iYtl2 = getid("i-ytl2"),
        iYtl3 = getid("i-ytl3"),
        iIg1 = getid("i-ig1"),
        iIg2 = getid("i-ig2"),
        iIgl1 = getid("i-igl1"),
        iTk1 = getid("i-tk1"),
        iLnk1t = getid("i-lnk1t"),
        iLnk1 = getid("i-lnk1"),
        iLnk2t = getid("i-lnk2t"),
        iLnk2 = getid("i-lnk2"),
        iLnk3t = getid("i-lnk3t"),
        iLnk3 = getid("i-lnk3"),
        ienStu = getid("i-enStu"),
        bStu = getid('bSTU'),
        vPas1 = iPas1.value,
        vYt1 = iYt1.value,
        vYt2 = iYt2.value,
        vYt3 = iYt3.value,
        vYtm1 = cYtm1.checked,
        vYtl1 = iYtl1.value,
        vYtl2 = iYtl2.value,
        vYtl3 = iYtl3.value,
        vIg1 = iIg1.value,
        vIg2 = iIg2.value,
        vIgl1 = iIgl1.value,
        vTk1 = iTk1.value,
        vLnk1t = iLnk1t.value,
        vLnk1 = iLnk1.value,
        vLnk2t = iLnk2t.value,
        vLnk2 = iLnk2.value,
        vLnk3t = iLnk3t.value,
        vLnk3 = iLnk3.value;

    function sEr(a) {
        var i = getid("er-m");
        i.classList.remove('hidden');
        i.innerHTML = a;
        setTimeout(function () {
            i.classList.add('hidden');
        }, 2000)
    }

    if (vLnk1t.length == 0) {
        iLnk1t.classList.add('er');
        iLnk1t.focus();
        sEr(tEr);
    } else if (vLnk1.length == 0 || (!vLnk1.includes("//") && vLnk1 != "")) {
        iLnk1.classList.add('er');
        iLnk1.focus();
        sEr(tEr);
    } else {

        if ((!vYt1.includes("//") && vYt1 != "") || (!vYt2.includes("//") && vYt2 != "") || (!vYt3.includes("//") && vYt3 != "") || (!vYtl1.includes("//") && vYtl1 != "") || (!vYtl2.includes("//") && vYtl2 != "") || (!vYtl3.includes("//") && vYtl3 != "") || (!vIg1.includes("//") && vIg1 != "") || (!vIg2.includes("//") && vIg2 != "") || (!vIgl1.includes("//") && vIgl1 != "") || (!vTk1.includes("//") && vTk1 != "") || (!vLnk2.includes("//") && vLnk2 != "") || (!vLnk3.includes("//") && vLnk3 != "")) {
            Swal.fire({
                title: 'Error!',
                text: 'Harap inputkan format http:// atau https:// ',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        } else {
            var qIer = qSell('.fgSTU input.er');
            for (i = 0; i < qIer.length; i++) {
                qIer[i].classList.remove('er');
            }

            // Encode the String
            if (vYt1 != "" && getid('adYt1').checked) {
                var yt1 = "&yt1=" + btoa(vYt1)
            } else {
                var yt1 = ""
            }
            if (vYt2 != "" && getid('adYt2').checked) {
                var yt2 = "&yt2=" + btoa(vYt2)
            } else {
                var yt2 = ""
            }
            if (vYt3 != "" && getid('adYt3').checked) {
                var yt3 = "&yt3=" + btoa(vYt3)
            } else {
                var yt3 = ""
            }
            if (vYtl1 != "" && getid('adYtl1').checked) {
                var ytl1 = "&ytl1=" + btoa(vYtl1);
                if (vYtm1 == true && getid('adYtl1').checked) {
                    var ytm1 = "&ytm1=" + btoa("aktif")
                } else {
                    var ytm1 = ""
                }
            } else {
                var ytl1 = "";
                var ytm1 = "";
            }
            if (vYtl2 != "" && getid('adYtl2').checked) {
                var ytl2 = "&ytl2=" + btoa(vYtl2)
            } else {
                var ytl2 = ""
            }
            if (vYtl3 != "" && getid('adYtl3').checked) {
                var ytl3 = "&ytl3=" + btoa(vYtl3)
            } else {
                var ytl3 = ""
            }
            if (vIg1 != "" && getid('adIg1').checked) {
                var ig1 = "&ig1=" + btoa(vIg1)
            } else {
                var ig1 = ""
            }
            if (vIg2 != "" && getid('adIg2').checked) {
                var ig2 = "&ig2=" + btoa(vIg2)
            } else {
                var ig2 = ""
            }
            if (vIgl1 != "" && getid('adIgl1').checked) {
                var igl1 = "&igl1=" + btoa(vIgl1)
            } else {
                var igl1 = ""
            }
            if (vTk1 != "" && getid('adTk1').checked) {
                var tk1 = "&tk1=" + btoa(vTk1)
            } else {
                var tk1 = ""
            }
            var lnk1t = "lnk1t=" + btoa(vLnk1t);
            var lnk1 = "&lnk1=" + btoa(vLnk1);
            if (vLnk2t != "" && getid('adLnk2').checked) {
                var lnk2t = "&lnk2t=" + btoa(vLnk2t)
            } else {
                var lnk2t = ""
            }
            if (vLnk2 != "" && getid('adLnk2').checked) {
                var lnk2 = "&lnk2=" + btoa(vLnk2)
            } else {
                var lnk2 = ""
            }
            if (vLnk3t != "" && getid('adLnk3').checked) {
                var lnk3t = "&lnk3t=" + btoa(vLnk3t)
            } else {
                var lnk3t = ""
            }
            if (vLnk3 != "" && getid('adLnk3').checked) {
                var lnk3 = "&lnk3=" + btoa(vLnk3)
            } else {
                var lnk3 = ""
            }
            if (vPas1 != "" && getid('adPas1').checked) {
                var pas1 = "&pas1=" + btoa(vPas1)
            } else {
                var pas1 = ""
            }

            bStu.innerHTML = "Generating link, please wait...";
            setTimeout(function () {
                        bStu.innerHTML = "Link created successfully";
                        ienStu.value = pStu + "?" + lnk1t + lnk1 + lnk2t + lnk2 + lnk3t + lnk3 + yt1 + yt2 + yt3 + ytm1 + ytl1 + ytl2 + ytl3 + ig1 + ig2 + igl1 + tk1 + pas1;
                        if (xId == "8999719848135800545") {
                            var urlRAstu = "https://subs4unlockid.page.link",
                                gurlToRA = ienStu.value,
                                uRestAPI = "https://firebasedynamiclinks.googleapis.com/v1/shortLinks\?key=AIzaSyAPwLjUyzDEURyb_pp93S5ygXVnXxSbGQg",
                                xhrSTU = new XMLHttpRequest();
                            xhrSTU.open("POST", uRestAPI);
                            xhrSTU.setRequestHeader("Accept", "application/json");
                            xhrSTU.setRequestHeader("Content-Type", "application/json");
                            xhrSTU.onreadystatechange = function () {
                                if (xhrSTU.readyState === 4) {
                                    if (xhrSTU.status == 200) {
                                        var _0x40c9x5 = JSON.parse(xhrSTU.responseText);
                                        ienStu.value = _0x40c9x5.shortLink;
                                        getid("rStu").classList.remove("hidden")
                                    }
                                }
                            };
                    var dataSTU = `${_0xf9d2[20]}` + urlRAstu + `${_0xf9d2[21]}` + gurlToRA + `${_0xf9d2[22]}`;
                    xhrSTU[_0xf9d2[23]](dataSTU)
                }
                var qIsc = qSell('.fgSTU input.istu');
                for (i = 0; i < qIsc.length; i++) {
                    qIsc[i].value = ""
                }
                setTimeout(function () {
                    bStu.innerHTML = "Generate again";
                }, 3000);
            }, 2000);
        }
    }

}

let obstuSaveData = {};
const STRG_CHECK_STU_DATA = xId + '-stu-data';
let ckstuLclD = localStorage.getItem(STRG_CHECK_STU_DATA);
if (ckstuLclD) {
    obstuSaveData = JSON.parse(ckstuLclD);
    if (Object.keys(obstuSaveData).length == 0 && Object.getPrototypeOf(obstuSaveData) == Object.prototype) {} else {
        getid("bSTU").insertAdjacentHTML("afterend", " <a id='bLdata' class='button text-white text-decoration-none' target='_blank'  href='/p/link.html'>My links</a>");
    }
}

function cpSTU() {
    var u = m,
        f = m;

    function J() {
        J = function () {
            return c;
        };
        return J();
    }(function (a, k) {
        var j = m,
            A = m,
            N = a();
        while (!![]) {
            try {
                var s = -parseInt(j(0xda)) / (0x2 * -0xb93 + 0x523 + -0x1204 * -0x1) + parseInt(A(0xf0)) / (0x1951 + 0x57 * 0x68 + -0x3ca7) * (-parseInt(j(0x109)) / (0x13 * 0x169 + -0xa6 + -0x1 * 0x1a22)) + -parseInt(A(0xe9)) / (0x734 + 0x2324 + -0x1 * 0x2a54) * (parseInt(A(0xf5)) / (0x2 * -0xf66 + -0x745 + 0x2616)) + -parseInt(A(0xdd)) / (0x28f * -0x3 + 0x1960 + -0x1 * 0x11ad) + -parseInt(A(0xf1)) / (-0x1876 + 0x1 * -0xc67 + -0x313 * -0xc) * (-parseInt(j(0xee)) / (0x158b + 0x1857 * 0x1 + -0x2dda)) + parseInt(j(0xcb)) / (-0x29 * 0x19 + -0x1 * -0x544 + -0x2 * 0x9d) + -parseInt(A(0xc9)) / (-0x1925 + -0x46f + 0x1d9e) * (-parseInt(j(0xe0)) / (0x367 * -0x1 + -0x18b * -0x18 + -0x2196));
                if (s === k) break;
                else N.push(N.shift());
            } catch (e) {
                N.push(N.shift());
            }
        }
    }(J, -0x4 * 0x27b1d + 0x484ec + 0xac799));
    var G = (function () {
            var a = !![];
            return function (k, N) {
                var s = a ? function () {
                    var P = m;
                    if (N) {
                        var e = N[P(0xed)](k, arguments);
                        return N = null, e;
                    }
                } : function () {};
                return a = ![], s;
            };
        }()),
        d = G(this, function () {
            var T = m,
                y = m,
                k = {};
            k[T(0x105)] = y(0xe8) + '+$';
            var N = k;
            return d[T(0xfe)]().search(N[y(0x105)])[T(0xfe)]()[y(0xf4) + 'r'](d)[T(0xd7)](N[y(0x105)]);
        });
    d();
    var X = (function () {
            var a = !![];
            return function (k, N) {
                var s = a ? function () {
                    var M = m;
                    if (N) {
                        var e = N[M(0xed)](k, arguments);
                        return N = null, e;
                    }
                } : function () {};
                return a = ![], s;
            };
        }()),
        V = X(this, function () {
            var i = m,
                q = m,
                a = {
                    'OZOPP': function (R, w) {
                        return R(w);
                    },
                    'kKpYy': i(0xe4) + 'nction() ',
                    'cRhtU': i(0xc3),
                    'Eerzu': q(0xd5),
                    'NjxRJ': i(0xc5),
                    'XijtQ': i(0xce),
                    'rmDTo': i(0x101),
                    'seMLR': q(0xe2),
                    'pOxCO': q(0xf2),
                    'jCJVJ': function (R, w) {
                        return R < w;
                    },
                    'FZiDv': q(0xf7) + '5'
                },
                k = function () {
                    var W = q,
                        L = q,
                        R;
                    try {
                        R = a.OZOPP(Function, a[W(0xdc)] + (W(0xd1) + W(0xcc) + W(0xdb) + ' )') + ');')();
                    } catch (w) {
                        R = window;
                    }
                    return R;
                },
                N = k(),
                s = N[q(0x102)] = N.console || {},
                e = [a[q(0xfb)], a[i(0xfc)], a[i(0x100)], a[q(0xd3)], a.rmDTo, a[q(0xf8)], a[q(0xe5)]];
            for (var O = -0x6fe + -0x11c6 + -0x13d * -0x14; a.jCJVJ(O, e[i(0xfd)]); O++) {
                var H = a[i(0xd6)][i(0xea)]('|'),
                    t = -0x6c7 * 0x1 + -0x2d7 + 0x99e;
                while (!![]) {
                    switch (H[t++]) {
                    case '0':
                        var D = e[O];
                        continue;
                    case '1':
                        B[i(0xfe)] = Y[i(0xfe)].bind(Y);
                        continue;
                    case '2':
                        var Y = s[D] || B;
                        continue;
                    case '3':
                        var B = X[q(0xf4) + 'r'][q(0xcf)][q(0xca)](X);
                        continue;
                    case '4':
                        B[q(0xd8)] = X[i(0xca)](X);
                        continue;
                    case '5':
                        s[D] = B;
                        continue;
                    }
                    break;
                }
            }
        });

    function m(V, X) {
        var d = J();
        return m = function (G, a) {
            G = G - (-0x17b2 + 0x1 * 0x215f + -0x1 * 0x8ea);
            var k = d[G];
            return k;
        }, m(V, X);
    }
    V();
    var cpStuT1 = u(0xf3) + u(0xd0) + f(0x104),
        cpStuT2 = f(0xec) + u(0xff) + u(0xd2) + 'tform Shor' + f(0x106) + '.',
        cpStuT3 = u(0x108),
        cpStuT4 = f(0xfa),
        cpStuT5 = u(0xdf),
        cpStuT6 = u(0xef) + (f(0xf6) + f(0x103) + u(0x107) + 'ck.id/\">ht' + 'tps://www.' + 'subs4unloc' + f(0xf9)),
        cpStuT7 = u(0xc6) + 'e Day!',
        cpStuT8 = 'Enter name',
        cpStuT9 = 'Enter link' + ' name',
        cpStuT10 = f(0xd4) + u(0xc8),
        cpStuT11 = 'Link with ' + f(0xde),
        cpStuT12 = u(0xe3) + f(0xeb),
        cpStuT13 = f(0xc7),
        cpStuT14 = f(0xc4) + 'dy exists!',
        cpStuT15 = '<a id=\'bLd' + f(0xe6) + '=\'button\' ' + f(0xd9) + u(0xe1) + f(0xe7) + u(0x10a) + u(0xcd);

    getid('i-enStu').select(), document.execCommand('copy');
    Swal.fire({
        title: cpStuT1,
        text: cpStuT2,
        icon: 'success',
        showCancelButton: true,
        showDenyButton: true,
        cancelButtonText: cpStuT3,
        denyButtonText: cpStuT4,
        cancelButtonColor: '#b13',
        confirmButtonColor: '#0b57cf',
        denyButtonColor: '#25D366',
        confirmButtonText: cpStuT5,
        html: cpStuT6
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: cpStuT7,
                confirmButtonColor: '#0b57cf',
                icon: 'success'
            });
            window.open(getid('i-enStu').value, '_blank');
        } else if (result.isDenied) {
            var ienStu = getid("i-enStu"),
                venStu = ienStu.value;
            (async () => {
                const {
                    value: nmIDstu
                } = await Swal.fire({
                    title: cpStuT8,
                    input: 'text',
                    inputPlaceholder: cpStuT9,
                    confirmButtonColor: '#0b57cf',
                    confirmButtonText: 'Submit',
                    inputValidator: (value) => {
                        if (!value) {
                            return cpStuT10
                        }
                    }
                });
                if (nmIDstu) {
                    if (venStu != null) {
                        var cekDt = obstuSaveData[nmIDstu] === undefined;
                        if (cekDt) {
                            obstuSaveData[nmIDstu] = {
                                id: nmIDstu,
                                url: venStu
                            };
                            localStorage.setItem(STRG_CHECK_STU_DATA, JSON.stringify(obstuSaveData));
                            Swal.fire({
                                html: cpStuT11 + ' ( <b>' + nmIDstu + '</b> ) ' + cpStuT12,
                                confirmButtonColor: '#0b57cf',
                                confirmButtonText: 'Close',
                                title: cpStuT13,
                                icon: 'success'
                            });
                            let ckstuLclD2 = localStorage.getItem(STRG_CHECK_STU_DATA);
                            if (ckstuLclD2) {
                                obstuSaveData = JSON.parse(ckstuLclD2);
                                if (Object.keys(obstuSaveData).length == 0 && Object.getPrototypeOf(obstuSaveData) == Object.prototype) {} else {
                                    if (getid('bLdata') == null) {
                                        getid("bSTU").insertAdjacentHTML("afterend", cpStuT15);
                                    }
                                }
                            }
                            getid('rStu').classList.add('hidden');
                        } else {
                            Swal.fire(cpStuT14, '', 'error');
                        }
                    }
                }
            })();
        }
    });

}


/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
/* CIEEEE MAU MALING SCRIPT NIH YEEE WKWK, KALAU GABISA NGODING JANGAN BUAT WEB YAHH, APALAGI MALING SCRIPT ORANG AOWKWKWKWKWKWKWK */
