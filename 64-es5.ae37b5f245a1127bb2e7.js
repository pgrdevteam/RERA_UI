function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"11DW":function(e,n,t){"use strict";t.r(n),n.default='<div class="row">\r\n  <div class="col-md-12 text-center">\r\n    Loading...\r\n  </div>\r\n</div>\r\n<app-loader *ngIf="loadingSpinner"></app-loader>'},"gQW+":function(e,n,t){"use strict";t.r(n);var r=t("mrSG"),a=t("8Y7J"),i=t("SVse"),o=t("iInd"),s=function(){function e(n){_classCallCheck(this,e),this._route=n,this.loadingSpinner=!0}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.loadingSpinner=!0,setTimeout((function(){e._route.navigate(["dashboard-new/authority/excutive-summary"])}),1500)}}]),e}();s.ctorParameters=function(){return[{type:o.e}]};var c=[{path:"loading",component:s=r.b([Object(a.n)({selector:"app-reloading-auth",template:r.c(t("11DW")).default,styles:[r.c(t("oyYQ")).default]})],s)}],l=function e(){_classCallCheck(this,e)};l=r.b([Object(a.J)({imports:[o.f.forChild(c)],exports:[o.f]})],l);var u=t("UPf0");t.d(n,"ReloadingModule",(function(){return f}));var f=function e(){_classCallCheck(this,e)};f=r.b([Object(a.J)({declarations:[s],imports:[i.b,l,u.a]})],f)},oyYQ:function(e,n,t){"use strict";t.r(n),n.default=""}}]);