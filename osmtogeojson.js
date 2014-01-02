!function(e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):"undefined"!=typeof window?window.osmtogeojson=e():"undefined"!=typeof global?global.osmtogeojson=e():"undefined"!=typeof self&&(self.osmtogeojson=e())}(function(){return function e(n,t,r){function o(i,u){if(!t[i]){if(!n[i]){var s="function"==typeof require&&require;if(!u&&s)return s(i,!0);if(a)return a(i,!0);throw new Error("Cannot find module '"+i+"'")}var l=t[i]={exports:{}};n[i][0].call(l.exports,function(e){var t=n[i][1][e];return o(t?t:e)},l,l.exports,e,n,t,r)}return t[i].exports}for(var a="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,n){var t=e("./lodash.custom.js"),r=e("geojson-rewind"),o=e("./polygon_features.json"),a={};a=function(e,n){function a(e){for(var n=new Array,r=new Array,o=new Array,a=0;a<e.elements.length;a++)switch(e.elements[a].type){case"node":var i=e.elements[a];n.push(i);break;case"way":var s=t.clone(e.elements[a]);s.nodes=t.clone(s.nodes),r.push(s);break;case"relation":var l=t.clone(e.elements[a]);l.members=t.clone(l.members),o.push(l)}return u(n,r,o)}function i(e){function n(e,n,t){e.hasAttribute(t)&&(n[t]=e.getAttribute(t))}var r=new Array,o=new Array,a=new Array;return t.each(e.getElementsByTagName("node"),function(e,o){var a={};t.each(e.getElementsByTagName("tag"),function(e){a[e.getAttribute("k")]=e.getAttribute("v")}),r[o]={type:"node"},n(e,r[o],"id"),n(e,r[o],"lat"),n(e,r[o],"lon"),n(e,r[o],"version"),n(e,r[o],"timestamp"),n(e,r[o],"changeset"),n(e,r[o],"uid"),n(e,r[o],"user"),t.isEmpty(a)||(r[o].tags=a)}),t.each(e.getElementsByTagName("way"),function(e,r){var a={},i=[];t.each(e.getElementsByTagName("tag"),function(e){a[e.getAttribute("k")]=e.getAttribute("v")}),t.each(e.getElementsByTagName("nd"),function(e,n){i[n]=e.getAttribute("ref")}),o[r]={type:"way"},n(e,o[r],"id"),n(e,o[r],"version"),n(e,o[r],"timestamp"),n(e,o[r],"changeset"),n(e,o[r],"uid"),n(e,o[r],"user"),i.length>0&&(o[r].nodes=i),t.isEmpty(a)||(o[r].tags=a)}),t.each(e.getElementsByTagName("relation"),function(e,r){var o={},i=[];t.each(e.getElementsByTagName("tag"),function(e){o[e.getAttribute("k")]=e.getAttribute("v")}),t.each(e.getElementsByTagName("member"),function(e,t){i[t]={},n(e,i[t],"ref"),n(e,i[t],"role"),n(e,i[t],"type")}),a[r]={type:"relation"},n(e,a[r],"id"),n(e,a[r],"version"),n(e,a[r],"timestamp"),n(e,a[r],"changeset"),n(e,a[r],"uid"),n(e,a[r],"user"),i.length>0&&(a[r].members=i),t.isEmpty(o)||(a[r].tags=o)}),u(r,o,a)}function u(e,o,a){function i(e,t){if("object"!=typeof t&&(t={}),"function"==typeof n.uninterestingTags)return!n.uninterestingTags(e,t);for(var r in e)if(n.uninterestingTags[r]!==!0&&t[r]!==!0&&t[r]!==e[r])return!0;return!1}function u(e){for(var n,t,r,o,a,i,u=function(e){return e[0]},s=function(e){return e[e.length-1]},l=[];e.length;)for(n=e.pop().nodes.slice(),l.push(n);e.length&&u(n)!==s(n);){for(t=u(n),r=s(n),o=0;o<e.length;o++){if(i=e[o].nodes,r===u(i)){a=n.push,i=i.slice(1);break}if(r===s(i)){a=n.push,i=i.slice(0,-1).reverse();break}if(t==s(i)){a=n.unshift,i=i.slice(0,-1);break}if(t==u(i)){a=n.unshift,i=i.slice(1).reverse();break}i=a=null}if(!i)break;e.splice(o,1),a.apply(n,i)}return l}function l(e){var n,t,r=function(e,n){for(var t=0;t<n.length;t++)if(a(n[t],e))return!0;return!1},o=function(e){return e.map(function(e){return[+e.lat,+e.lon]})},a=function(e,n){for(var t=e[0],r=e[1],o=!1,a=0,i=n.length-1;a<n.length;i=a++){var u=n[a][0],s=n[a][1],l=n[i][0],f=n[i][1],c=s>r!=f>r&&(l-u)*(r-s)/(f-s)+u>t;c&&(o=!o)}return o};for(e=o(e),n=0;n<M.length;n++)if(t=o(M[n]),r(t,e))return n}for(var f=new Object,c=0;c<e.length;c++)void 0!==e[c].lat&&(f[e[c].id]=e[c]);for(var p=new Object,c=0;c<e.length;c++)"undefined"!=typeof e[c].tags&&i(e[c].tags)&&(p[e[c].id]=!0);for(var c=0;c<a.length;c++)if(t.isArray(a[c].members))for(var g=0;g<a[c].members.length;g++)"node"==a[c].members[g].type&&(p[a[c].members[g].ref]=!0);for(var d=new Object,y=new Object,c=0;c<o.length;c++)if(t.isArray(o[c].nodes)){d[o[c].id]=o[c];for(var g=0;g<o[c].nodes.length;g++)y[o[c].nodes[g]]=!0,o[c].nodes[g]=f[o[c].nodes[g]]}for(var m=new Array,c=0;c<e.length;c++)(!y[e[c].id]||p[e[c].id])&&m.push(e[c]);for(var h=new Array,c=0;c<a.length;c++)t.isArray(a[c].members)&&(h[a[c].id]=a[c]);for(var v={node:{},way:{},relation:{}},c=0;c<a.length;c++)if(t.isArray(a[c].members))for(var g=0;g<a[c].members.length;g++){var b;switch(a[c].members[g].type){case"node":b=f[a[c].members[g].ref];break;case"way":b=d[a[c].members[g].ref];break;case"relation":b=h[a[c].members[g].ref]}if(b){var w=a[c].members[g].type,x=a[c].members[g].ref;"undefined"==typeof v[w][x]&&(v[w][x]=[]),v[w][x].push({role:a[c].members[g].role,rel:a[c].id,reltags:a[c].tags})}}var j,_={type:"FeatureCollection",features:new Array};for(c=0;c<m.length;c++)"undefined"!=typeof m[c].lon&&"undefined"!=typeof m[c].lat&&_.features.push({type:"Feature",id:"node/"+m[c].id,properties:{type:"node",id:m[c].id,tags:m[c].tags||{},relations:v.node[m[c].id]||[],meta:function(e){var n={};for(F in e)void 0!=e[F]&&(n[F]=e[F]);return n}({timestamp:m[c].timestamp,version:m[c].version,changeset:m[c].changeset,user:m[c].user,uid:m[c].uid})},geometry:{type:"Point",coordinates:[+m[c].lon,+m[c].lat]}});for(var A={type:"FeatureCollection",features:new Array},P={type:"FeatureCollection",features:new Array},c=0;c<a.length;c++)if("undefined"!=typeof a[c].tags&&("multipolygon"==a[c].tags.type||"boundary"==a[c].tags.type)){if(!t.isArray(a[c].members))continue;for(var k=0,g=0;g<a[c].members.length;g++)"outer"==a[c].members[g].role&&k++;if(a[c].members.forEach(function(e){d[e.ref]&&("outer"!==e.role||i(d[e.ref].tags,a[c].tags)||(d[e.ref].is_multipolygon_outline=!0),"inner"!==e.role||i(d[e.ref].tags)||(d[e.ref].is_multipolygon_outline=!0))}),0==k)continue;var E=!1;if(1!=k||i(a[c].tags,{type:!0})||(E=!0),E){a[c].tainted=!1;for(var O=new Array,C=new Array,S=void 0,g=0;g<a[c].members.length;g++)if("way"==a[c].members[g].type&&t.contains(["outer","inner"],a[c].members[g].role)){var T=d[a[c].members[g].ref];if("undefined"==typeof T){a[c].tainted=!0;continue}for(var L=new Array,F=0;F<T.nodes.length;F++)"object"==typeof T.nodes[F]?L.push([+T.nodes[F].lon,+T.nodes[F].lat]):a[c].tainted=!0;"outer"==a[c].members[g].role?(O.push(L),S=T,S.is_multipolygon_outline=!0):"inner"==a[c].members[g].role&&C.push(L)}if("undefined"==typeof S)continue;if(0==O[0].length)continue;U="Polygon";var I={type:"Feature",id:"way/"+S.id,properties:{type:"way",id:S.id,tags:S.tags||{},relations:v.way[S.id]||[],meta:function(e){var n={};for(F in e)void 0!=e[F]&&(n[F]=e[F]);return n}({timestamp:S.timestamp,version:S.version,changeset:S.changeset,user:S.user,uid:S.uid})},geometry:{type:U,coordinates:[].concat(O,C)}};a[c].tainted&&(I.properties.tainted=!0),P.features.push(I)}else{var N,D=!1;N=a[c].members.filter(function(e){return"way"===e.type}),N=N.map(function(e){var n=d[e.ref];return void 0===n?(D=!0,void 0):{id:e.ref,role:e.role||"outer",way:n,nodes:n.nodes.filter(function(e){return void 0!==e?!0:(D=!0,!1)})}}),N=t.compact(N);var M,B;M=u(N.filter(function(e){return"outer"===e.role})),B=u(N.filter(function(e){return"inner"===e.role}));var R;R=M.map(function(e){return[e]});for(var g=0;g<B.length;g++){var H=l(B[g]);void 0!==H&&R[H].push(B[g])}var q=[];if(q=t.compact(R.map(function(e){var n=t.compact(e.map(function(e){return e.length<4?void 0:t.compact(e.map(function(e){return[+e.lon,+e.lat]}))}));if(0!=n.length)return n})),0==q.length)continue;var I={type:"Feature",id:"relation/"+a[c].id,properties:{type:"relation",id:a[c].id,tags:a[c].tags||{},relations:v.relation[a[c].id]||[],meta:function(e){var n={};for(F in e)void 0!=e[F]&&(n[F]=e[F]);return n}({timestamp:a[c].timestamp,version:a[c].version,changeset:a[c].changeset,user:a[c].user,uid:a[c].uid})},geometry:{type:"MultiPolygon",coordinates:q}};D&&(I.properties.tainted=!0),P.features.push(I)}}for(var c=0;c<o.length;c++)if(t.isArray(o[c].nodes)&&!o[c].is_multipolygon_outline){for(o[c].tainted=!1,o[c].hidden=!1,L=new Array,g=0;g<o[c].nodes.length;g++)"object"==typeof o[c].nodes[g]?L.push([+o[c].nodes[g].lon,+o[c].nodes[g].lat]):o[c].tainted=!0;if(!(L.length<=1)){var U="LineString";"undefined"!=typeof o[c].nodes[0]&&o[c].nodes[0]===o[c].nodes[o[c].nodes.length-1]&&"undefined"!=typeof o[c].tags&&s(o[c].tags)&&(U="Polygon",L=[L]);var I={type:"Feature",id:"way/"+o[c].id,properties:{type:"way",id:o[c].id,tags:o[c].tags||{},relations:v.way[o[c].id]||[],meta:function(e){var n={};for(F in e)void 0!=e[F]&&(n[F]=e[F]);return n}({timestamp:o[c].timestamp,version:o[c].version,changeset:o[c].changeset,user:o[c].user,uid:o[c].uid})},geometry:{type:U,coordinates:L}};o[c].tainted&&(I.properties.tainted=!0),"LineString"==U?A.features.push(I):P.features.push(I)}}return j={type:"FeatureCollection",features:[]},j.features=j.features.concat(P.features),j.features=j.features.concat(A.features),j.features=j.features.concat(_.features),n.flatProperties&&j.features.forEach(function(e){e.properties=t.merge(e.properties.meta,e.properties.tags,{id:e.properties.type+"/"+e.properties.id})}),j=r(j,!0)}function s(e){var t=n.polygonFeatures;if("function"==typeof t)return t(e);if("no"===e.area)return!1;for(var r in e){var o=e[r],a=t[r];if("undefined"!=typeof a&&"no"!==o){if(a===!0)return!0;if(a.included_values&&a.included_values[o]===!0)return!0;if(a.excluded_values&&a.excluded_values[o]!==!0)return!0}}return!1}n=t.merge({flatProperties:!1,uninterestingTags:{source:!0,source_ref:!0,"source:ref":!0,history:!0,attribution:!0,created_by:!0,"tiger:county":!0,"tiger:tlid":!0,"tiger:upload_uuid":!0},polygonFeatures:o},n);var l;return l="undefined"!=typeof XMLDocument&&e instanceof XMLDocument||"undefined"==typeof XMLDocument&&e.childNodes?i(e):a(e)},a.toGeojson=a,n.exports=a},{"./lodash.custom.js":2,"./polygon_features.json":6,"geojson-rewind":3}],2:[function(e,n,t){var r="undefined"!=typeof self?self:"undefined"!=typeof window?window:{};(function(){function e(e,n,t){for(var r=(t||0)-1,o=e?e.length:0;++r<o;)if(e[r]===n)return r;return-1}function o(){return R.pop()||[]}function a(e){return"function"!=typeof e.toString&&"string"==typeof(e+"")}function i(e){e.length=0,R.length<q&&R.push(e)}function u(e,n,t){n||(n=0),"undefined"==typeof t&&(t=e?e.length:0);for(var r=-1,o=t-n||0,a=Array(0>o?0:o);++r<o;)a[r]=e[n+r];return a}function s(){}function l(e){function n(){if(r){var e=u(r);xn.apply(e,arguments)}if(this instanceof n){var a=c(t.prototype),i=t.apply(a,e||arguments);return P(i)?i:a}return t.apply(o,e||arguments)}var t=e[0],r=e[2],o=e[4];return Fn(n,e),n}function f(e,n,t,r,s){if(t){var l=t(e);if("undefined"!=typeof l)return l}var c=P(e);if(!c)return e;var p=mn.call(e);if(!tn[p]||!Tn.nodeClass&&a(e))return e;var g=Cn[p];switch(p){case z:case J:return new g(+e);case Y:case nn:return new g(e);case en:return l=g(e.source,U.exec(e)),l.lastIndex=e.lastIndex,l}var d=In(e);if(n){var y=!r;r||(r=o()),s||(s=o());for(var m=r.length;m--;)if(r[m]==e)return s[m];l=d?g(e.length):{}}else l=d?u(e):qn({},e);return d&&(wn.call(e,"index")&&(l.index=e.index),wn.call(e,"input")&&(l.input=e.input)),n?(r.push(e),s.push(l),(d?Hn:$n)(e,function(e,o){l[o]=f(e,n,t,r,s)}),y&&(i(r),i(s)),l):l}function c(e){return P(e)?Pn(e):{}}function p(e,n,t){if("function"!=typeof e)return D;if("undefined"==typeof n||!("prototype"in e))return e;var r=e.__bindData__;if("undefined"==typeof r&&(Tn.funcNames&&(r=!e.name),r=r||!Tn.funcDecomp,!r)){var o=vn.call(e);Tn.funcNames||(r=!$.test(o)),r||(r=X.test(o),Fn(e,r))}if(r===!1||r!==!0&&1&r[1])return e;switch(t){case 1:return function(t){return e.call(n,t)};case 2:return function(t,r){return e.call(n,t,r)};case 3:return function(t,r,o){return e.call(n,t,r,o)};case 4:return function(t,r,o,a){return e.call(n,t,r,o,a)}}return I(e,n)}function g(e){function n(){var e=l?i:this;if(o){var m=u(o);xn.apply(m,arguments)}if((a||p)&&(m||(m=u(arguments)),a&&xn.apply(m,a),p&&m.length<s))return r|=16,g([t,d?r:-4&r,m,null,i,s]);if(m||(m=arguments),f&&(t=e[y]),this instanceof n){e=c(t.prototype);var h=t.apply(e,m);return P(h)?h:e}return t.apply(e,m)}var t=e[0],r=e[1],o=e[2],a=e[3],i=e[4],s=e[5],l=1&r,f=2&r,p=4&r,d=8&r,y=t;return Fn(n,e),n}function d(e,n,t,r,u,s){if(t){var l=t(e,n);if("undefined"!=typeof l)return!!l}if(e===n)return 0!==e||1/e==1/n;var f=typeof e,c=typeof n;if(!(e!==e||e&&an[f]||n&&an[c]))return!1;if(null==e||null==n)return e===n;var p=mn.call(e),g=mn.call(n);if(p==V&&(p=Z),g==V&&(g=Z),p!=g)return!1;switch(p){case z:case J:return+e==+n;case Y:return e!=+e?n!=+n:0==e?1/e==1/n:e==+n;case en:case nn:return e==String(n)}var y=p==W;if(!y){var m=wn.call(e,"__wrapped__"),h=wn.call(n,"__wrapped__");if(m||h)return d(m?e.__wrapped__:e,h?n.__wrapped__:n,t,r,u,s);if(p!=Z||!Tn.nodeClass&&(a(e)||a(n)))return!1;var v=!Tn.argsObject&&x(e)?Object:e.constructor,b=!Tn.argsObject&&x(n)?Object:n.constructor;if(v!=b&&!(A(v)&&v instanceof v&&A(b)&&b instanceof b)&&"constructor"in e&&"constructor"in n)return!1}var w=!u;u||(u=o()),s||(s=o());for(var j=u.length;j--;)if(u[j]==e)return s[j]==n;var _=0;if(l=!0,u.push(e),s.push(n),y){if(j=e.length,_=n.length,l=_==j,l||r)for(;_--;){var P=j,k=n[_];if(r)for(;P--&&!(l=d(e[P],k,t,r,u,s)););else if(!(l=d(e[_],k,t,r,u,s)))break}}else Un(n,function(n,o,a){return wn.call(a,o)?(_++,l=wn.call(e,o)&&d(e[o],n,t,r,u,s)):void 0}),l&&!r&&Un(e,function(e,n,t){return wn.call(t,n)?l=--_>-1:void 0});return u.pop(),s.pop(),w&&(i(u),i(s)),l}function y(e,n,t,r,o){(In(n)?S:$n)(n,function(n,a){var i,u,s=n,l=e[a];if(n&&((u=In(n))||Xn(n))){for(var f=r.length;f--;)if(i=r[f]==n){l=o[f];break}if(!i){var c;t&&(s=t(l,n),(c="undefined"!=typeof s)&&(l=s)),c||(l=u?In(l)?l:[]:Xn(l)?l:{}),r.push(n),o.push(l),c||y(l,n,t,r,o)}}else t&&(s=t(l,n),"undefined"==typeof s&&(s=n)),"undefined"!=typeof s&&(l=s);e[a]=l})}function m(e,n,t,r,o,a){var i=1&n,s=2&n,f=4&n,c=16&n,p=32&n;if(!s&&!A(e))throw new TypeError;c&&!t.length&&(n&=-17,c=t=!1),p&&!r.length&&(n&=-33,p=r=!1);var d=e&&e.__bindData__;if(d&&d!==!0)return d=u(d),d[2]&&(d[2]=u(d[2])),d[3]&&(d[3]=u(d[3])),!i||1&d[1]||(d[4]=o),!i&&1&d[1]&&(n|=8),!f||4&d[1]||(d[5]=a),c&&xn.apply(d[2]||(d[2]=[]),t),p&&_n.apply(d[3]||(d[3]=[]),r),d[1]|=n,m.apply(null,d);var y=1==n||17===n?l:g;return y([e,n,t,r,o,a])}function h(){on.shadowedProps=G,on.array=on.bottom=on.loop=on.top="",on.init="iterable",on.useHas=!0;for(var e,n=0;e=arguments[n];n++)for(var t in e)on[t]=e[t];var r=on.args;on.firstArg=/^[^,]+/.exec(r)[0];var o=Function("baseCreateCallback, errorClass, errorProto, hasOwnProperty, indicatorObject, isArguments, isArray, isString, keys, objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString","return function("+r+") {\n"+Ln(on)+"\n}");return o(p,K,gn,wn,H,x,In,E,on.keys,dn,an,Sn,nn,yn,mn)}function v(){var n=(n=s.indexOf)===L?e:n;return n}function b(e){return"function"==typeof e&&hn.test(e)}function w(e){var n,t;return!e||mn.call(e)!=Z||(n=e.constructor,A(n)&&!(n instanceof n))||!Tn.argsClass&&x(e)||!Tn.nodeClass&&a(e)?!1:Tn.ownLast?(Un(e,function(e,n,r){return t=wn.call(r,n),!1}),t!==!1):(Un(e,function(e,n){t=n}),"undefined"==typeof t||wn.call(e,t))}function x(e){return e&&"object"==typeof e&&"number"==typeof e.length&&mn.call(e)==V||!1}function j(e,n,t,r){return"boolean"!=typeof n&&null!=n&&(r=t,t=n,n=!1),f(e,n,"function"==typeof t&&p(t,r,1))}function _(e){var n=!0;if(!e)return n;var t=mn.call(e),r=e.length;return t==W||t==nn||(Tn.argsClass?t==V:x(e))||t==Z&&"number"==typeof r&&A(e.splice)?!r:($n(e,function(){return n=!1}),n)}function A(e){return"function"==typeof e}function P(e){return!(!e||!an[typeof e])}function E(e){return"string"==typeof e||e&&"object"==typeof e&&mn.call(e)==nn||!1}function O(e){var n=arguments,t=2;if(!P(e))return e;if("number"!=typeof n[2]&&(t=n.length),t>3&&"function"==typeof n[t-2])var r=p(n[--t-1],n[t--],2);else t>2&&"function"==typeof n[t-1]&&(r=n[--t]);for(var a=u(arguments,1,t),s=-1,l=o(),f=o();++s<t;)y(e,a[s],r,l,f);return i(l),i(f),e}function C(e,n,t){var r=-1,o=v(),a=e?e.length:0,i=!1;return t=(0>t?On(0,a+t):t)||0,In(e)?i=o(e,n,t)>-1:"number"==typeof a?i=(E(e)?e.indexOf(n,t):o(e,n,t))>-1:Hn(e,function(e){return++r>=t?!(i=e===n):void 0}),i}function S(e,n,t){if(n&&"undefined"==typeof t&&In(e))for(var r=-1,o=e.length;++r<o&&n(e[r],r,e)!==!1;);else Hn(e,n,t);return e}function T(e){for(var n=-1,t=e?e.length:0,r=[];++n<t;){var o=e[n];o&&r.push(o)}return r}function L(n,t,r){if("number"==typeof r){var o=n?n.length:0;r=0>r?On(0,o+r):r||0}else if(r){var a=F(n,t);return n[a]===t?a:-1}return e(n,t,r)}function F(e,n,t,r){var o=0,a=e?e.length:o;for(t=t?s.createCallback(t,r,1):D,n=t(n);a>o;){var i=o+a>>>1;t(e[i])<n?o=i+1:a=i}return o}function I(e,n){return arguments.length>2?m(e,17,u(arguments,2),null,n):m(e,1,null,null,n)}function N(e,n,t){var r=typeof e;if(null==e||"function"==r)return p(e,n,t);if("object"!=r)return B(e);var o=Dn(e),a=o[0],i=e[a];return 1!=o.length||i!==i||P(i)?function(n){for(var t=o.length,r=!1;t--&&(r=d(n[o[t]],e[o[t]],null,!0)););return r}:function(e){var n=e[a];return i===n&&(0!==i||1/i==1/n)}}function D(e){return e}function M(){}function B(e){return function(n){return n[e]}}var R=[],H={},q=40,U=/\w*$/,$=/^\s*function[ \n\r\t]+\w/,X=/\bthis\b/,G=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],V="[object Arguments]",W="[object Array]",z="[object Boolean]",J="[object Date]",K="[object Error]",Q="[object Function]",Y="[object Number]",Z="[object Object]",en="[object RegExp]",nn="[object String]",tn={};tn[Q]=!1,tn[V]=tn[W]=tn[z]=tn[J]=tn[Y]=tn[Z]=tn[en]=tn[nn]=!0;var rn={configurable:!1,enumerable:!1,value:null,writable:!1},on={args:"",array:null,bottom:"",firstArg:"",init:"",keys:null,loop:"",shadowedProps:null,support:null,top:"",useHas:!1},an={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},un=an[typeof window]&&window||this,sn=an[typeof t]&&t&&!t.nodeType&&t,ln=an[typeof n]&&n&&!n.nodeType&&n,fn=ln&&ln.exports===sn&&sn,cn=an[typeof r]&&r;!cn||cn.global!==cn&&cn.window!==cn||(un=cn);var pn=[],gn=Error.prototype,dn=Object.prototype,yn=String.prototype,mn=dn.toString,hn=RegExp("^"+String(mn).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),vn=Function.prototype.toString,bn=b(bn=Object.getPrototypeOf)&&bn,wn=dn.hasOwnProperty,xn=pn.push,jn=dn.propertyIsEnumerable,_n=pn.unshift,An=function(){try{var e={},n=b(n=Object.defineProperty)&&n,t=n(e,e,e)&&n}catch(r){}return t}(),Pn=b(Pn=Object.create)&&Pn,kn=b(kn=Array.isArray)&&kn,En=b(En=Object.keys)&&En,On=Math.max,Cn={};Cn[W]=Array,Cn[z]=Boolean,Cn[J]=Date,Cn[Q]=Function,Cn[Z]=Object,Cn[Y]=Number,Cn[en]=RegExp,Cn[nn]=String;var Sn={};Sn[W]=Sn[J]=Sn[Y]={constructor:!0,toLocaleString:!0,toString:!0,valueOf:!0},Sn[z]=Sn[nn]={constructor:!0,toString:!0,valueOf:!0},Sn[K]=Sn[Q]=Sn[en]={constructor:!0,toString:!0},Sn[Z]={constructor:!0},function(){for(var e=G.length;e--;){var n=G[e];for(var t in Sn)wn.call(Sn,t)&&!wn.call(Sn[t],n)&&(Sn[t][n]=!1)}}();var Tn=s.support={};!function(){var e=function(){this.x=1},n={0:1,length:1},t=[];e.prototype={valueOf:1,y:1};for(var r in new e)t.push(r);for(r in arguments);Tn.argsClass=mn.call(arguments)==V,Tn.argsObject=arguments.constructor==Object&&!(arguments instanceof Array),Tn.enumErrorProps=jn.call(gn,"message")||jn.call(gn,"name"),Tn.enumPrototypes=jn.call(e,"prototype"),Tn.funcDecomp=!b(un.WinRTError)&&X.test(function(){return this}),Tn.funcNames="string"==typeof Function.name,Tn.nonEnumArgs=0!=r,Tn.nonEnumShadows=!/valueOf/.test(t),Tn.ownLast="x"!=t[0],Tn.spliceObjects=(pn.splice.call(n,0,1),!n[0]),Tn.unindexedChars="xx"!="x"[0]+Object("x")[0];try{Tn.nodeClass=!(mn.call(document)==Z&&!({toString:0}+""))}catch(o){Tn.nodeClass=!0}}(1);var Ln=function(e){var n="var index, iterable = "+e.firstArg+", result = "+e.init+";\nif (!iterable) return result;\n"+e.top+";";e.array?(n+="\nvar length = iterable.length; index = -1;\nif ("+e.array+") {  ",Tn.unindexedChars&&(n+="\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  "),n+="\n  while (++index < length) {\n    "+e.loop+";\n  }\n}\nelse {  "):Tn.nonEnumArgs&&(n+="\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      "+e.loop+";\n    }\n  } else {  "),Tn.enumPrototypes&&(n+="\n  var skipProto = typeof iterable == 'function';\n  "),Tn.enumErrorProps&&(n+="\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  ");var t=[];if(Tn.enumPrototypes&&t.push('!(skipProto && index == "prototype")'),Tn.enumErrorProps&&t.push('!(skipErrorProps && (index == "message" || index == "name"))'),e.useHas&&e.keys)n+="\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n",t.length&&(n+="    if ("+t.join(" && ")+") {\n  "),n+=e.loop+";    ",t.length&&(n+="\n    }"),n+="\n  }  ";else if(n+="\n  for (index in iterable) {\n",e.useHas&&t.push("hasOwnProperty.call(iterable, index)"),t.length&&(n+="    if ("+t.join(" && ")+") {\n  "),n+=e.loop+";    ",t.length&&(n+="\n    }"),n+="\n  }    ",Tn.nonEnumShadows){for(n+="\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      ",k=0;7>k;k++)n+="\n    index = '"+e.shadowedProps[k]+"';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))",e.useHas||(n+=" || (!nonEnum[index] && iterable[index] !== objectProto[index])"),n+=") {\n      "+e.loop+";\n    }      ";n+="\n  }    "}return(e.array||Tn.nonEnumArgs)&&(n+="\n}"),n+=e.bottom+";\nreturn result"};Pn||(c=function(){function e(){}return function(n){if(P(n)){e.prototype=n;var t=new e;e.prototype=null}return t||un.Object()}}());var Fn=An?function(e,n){rn.value=n,An(e,"__bindData__",rn)}:M;Tn.argsClass||(x=function(e){return e&&"object"==typeof e&&"number"==typeof e.length&&wn.call(e,"callee")&&!jn.call(e,"callee")||!1});var In=kn||function(e){return e&&"object"==typeof e&&"number"==typeof e.length&&mn.call(e)==W||!1},Nn=h({args:"object",init:"[]",top:"if (!(objectTypes[typeof object])) return result",loop:"result.push(index)"}),Dn=En?function(e){return P(e)?Tn.enumPrototypes&&"function"==typeof e||Tn.nonEnumArgs&&e.length&&x(e)?Nn(e):En(e):[]}:Nn,Mn={args:"collection, callback, thisArg",top:"callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3)",array:"typeof length == 'number'",keys:Dn,loop:"if (callback(iterable[index], index, collection) === false) return result"},Bn={args:"object, source, guard",top:"var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",keys:Dn,loop:"if (typeof result[index] == 'undefined') result[index] = iterable[index]",bottom:"  }\n}"},Rn={top:"if (!objectTypes[typeof iterable]) return result;\n"+Mn.top,array:!1},Hn=h(Mn),qn=h(Bn,{top:Bn.top.replace(";",";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = baseCreateCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),loop:"result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"}),Un=h(Mn,Rn,{useHas:!1}),$n=h(Mn,Rn);A(/x/)&&(A=function(e){return"function"==typeof e&&mn.call(e)==Q});var Xn=bn?function(e){if(!e||mn.call(e)!=Z||!Tn.argsClass&&x(e))return!1;var n=e.valueOf,t=b(n)&&(t=bn(n))&&bn(t);return t?e==t||bn(e)==t:w(e)}:w;s.assign=qn,s.bind=I,s.compact=T,s.createCallback=N,s.forEach=S,s.forIn=Un,s.forOwn=$n,s.keys=Dn,s.merge=O,s.property=B,s.each=S,s.extend=qn,s.clone=j,s.contains=C,s.identity=D,s.indexOf=L,s.isArguments=x,s.isArray=In,s.isEmpty=_,s.isFunction=A,s.isObject=P,s.isPlainObject=Xn,s.isString=E,s.noop=M,s.sortedIndex=F,s.include=C,s.VERSION="2.4.1",sn&&ln&&fn&&((ln.exports=s)._=s)}).call(this)},{}],3:[function(e,n){function t(e,n){switch(e&&e.type||null){case"FeatureCollection":return e.features=e.features.map(r(t,n)),e;case"Feature":return e.geometry=t(e.geometry,n),e;case"Polygon":case"MultiPolygon":return o(e,n);default:return e}}function r(e,n){return function(t){return e(t,n)}}function o(e,n){return"Polygon"===e.type?e.coordinates=a(e.coordinates,n):"MultiPolygon"===e.type&&(e.coordinates=e.coordinates.map(r(a,n))),e}function a(e,n){n=!!n,e[0]=i(e[0],!n);for(var t=1;t<e.length;t++)e[t]=i(e[t],n);return e}function i(e,n){return u(e)===n?e:e.reverse()}function u(e){return s.ring(e)>=0}var s=e("geojson-area");n.exports=t},{"geojson-area":4}],4:[function(e,n){function t(e){if("Polygon"===e.type)return r(e.coordinates);if("MultiPolygon"===e.type){for(var n=0,t=0;t<e.coordinates.length;t++)n+=r(e.coordinates[t]);return n}return null}function r(e){var n=0;if(e&&e.length>0){n+=Math.abs(o(e[0]));for(var t=1;t<e.length;t++)n-=Math.abs(o(e[t]))}return n}function o(e){var n=0;if(e.length>2){for(var t,r,o=0;o<e.length-1;o++)t=e[o],r=e[o+1],n+=a(r[0]-t[0])*(2+Math.sin(a(t[1]))+Math.sin(a(r[1])));n=n*i.RADIUS*i.RADIUS/2}return n}function a(e){return e*Math.PI/180}var i=e("wgs84");n.exports.geometry=t,n.exports.ring=o},{wgs84:5}],5:[function(e,n){n.exports.RADIUS=6378137,n.exports.FLATTENING=1/298.257223563,n.exports.POLAR_RADIUS=6356752.3142},{}],6:[function(e,n){n.exports={building:!0,highway:{included_values:{services:!0,rest_area:!0,escape:!0}},natural:{excluded_values:{coastline:!0,ridge:!0,arete:!0,tree_row:!0}},landuse:!0,waterway:{included_values:{riverbank:!0,dock:!0,boatyard:!0,dam:!0}},amenity:!0,leisure:!0,barrier:{included_values:{city_wall:!0,ditch:!0,hedge:!0,retaining_wall:!0,wall:!0,spikes:!0}},railway:{included_values:{station:!0,turntable:!0,roundhouse:!0,platform:!0}},area:!0,boundary:!0,man_made:{excluded_values:{cutline:!0,embankment:!0,pipeline:!0}},power:{included_values:{generator:!0,station:!0,sub_station:!0,transformer:!0}},place:!0,shop:!0,aeroway:{excluded_values:{taxiway:!0}},tourism:!0,historic:!0,public_transport:!0,office:!0,"building:part":!0,military:!0,ruins:!0,"area:highway":!0,craft:!0}},{}]},{},[1])(1)});