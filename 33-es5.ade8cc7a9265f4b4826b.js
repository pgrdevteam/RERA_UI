function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,_toPropertyKey(r.key),r)}}function _createClass(t,e,a){return e&&_defineProperties(t.prototype,e),a&&_defineProperties(t,a),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"==typeof e?e:String(e)}function _toPrimitive(t,e){if("object"!=typeof t||!t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var r=a.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"+OiR":function(t,e,a){"use strict";a.r(e),e.default=""},"+amc":function(t,e,a){"use strict";a.r(e),e.default='<iframe class="pdf-viewer" src="/resources/staticpage/Affordable_Housing_Policy.pdf"></iframe>\r\n\r\n\r\n'},"/D1D":function(t,e,a){"use strict";a.r(e),e.default='<iframe class="pdf-viewer" src="/resources/staticpage/Tribune-1.pdf"></iframe>\r\n\r\n\r\n\r\n\r\n'},"3ftp":function(t,e,a){"use strict";a.r(e),e.default=""},"3iYC":function(t,e,a){"use strict";a.r(e),e.default=""},"5GNP":function(t,e,a){"use strict";a.r(e),e.default=""},"5ldx":function(t,e,a){"use strict";a.r(e),e.default=""},"6s2o":function(t,e,a){"use strict";a.r(e),e.default=""},Axmy:function(t,e,a){"use strict";a.r(e);var r=a("mrSG"),n=a("8Y7J"),o=a("SVse"),s=a("iInd"),l=a("2Vo4"),i=a("FvaC"),c=a("vTBr"),d=function(){function t(e,a){_classCallCheck(this,t),this._http=e,this._apiURL=a}return _createClass(t,[{key:"getData1",value:function(t){return this._http.get(this._apiURL.cmsAPI+"public/master/staticdeployment/document-type/"+t)}}]),t}();d.ctorParameters=function(){return[{type:c.a},{type:i.a}]},d=r.b([Object(n.B)({providedIn:"root"})],d);var u=function(){function t(e){_classCallCheck(this,t),this._actCircularService=e,this.tableJsonData=new l.a({}),this.paginationCount=10}return _createClass(t,[{key:"ngOnInit",value:function(){this.getCircularDocument()}},{key:"getCircularDocument",value:function(){var t=this;this.type="FORMS",this._actCircularService.getData1(this.type).subscribe((function(e){t.getDocdata=e.data,console.log(Object.keys(t.getDocdata).length),t.dataLength=Object.keys(t.getDocdata).length,console.log(e),console.log(t.getDocdata),t.filterDataArray=e.data,t.tableSortFilter(null,null,null,"default")}),(function(t){}))}},{key:"tableSortFilter",value:function(t,e,a,r){this.sortData="default"==r?{sortType:"DESC",key:"typeno",typ:"number",sort:r}:{sortType:t,key:e,typ:a,sort:r};var n={headers:[{key:"typeno",label:"Sr.No.",type:"number"},{key:"subject",label:"Subject",type:"string"},{key:"createdOn",label:"Created on",type:"date"}],actualArray:this.getDocdata,sortData:this.sortData};this.tableHeader=n.headers,this.tableJsonData.next({exportJson:n}),console.log(n)}},{key:"filterValue",value:function(t){console.log(t),this.filterDataArray=t.filterArray,this.sortData=t.sort,this.getPageNo(1)}},{key:"getPageNo",value:function(t){var e=this;this.currentPageNo=t,this.filterDataArray.length>9&&(this.paginationCount=10*t),0==this.filterDataArray.length&&(this.paginationCount=0),setTimeout((function(){document.querySelector("#foo1").querySelector(".pagination-next").classList.contains("disabled")&&(e.paginationCount=e.filterDataArray.length)}),100)}}]),t}();u.ctorParameters=function(){return[{type:d}]},u=r.b([Object(n.n)({selector:"app-forms-template",template:r.c(a("kOYa")).default,styles:[r.c(a("MmwF")).default]})],u);var h=function(){function t(e,a){_classCallCheck(this,t),this._http=e,this._apiURL=a}return _createClass(t,[{key:"getData",value:function(t){return this._http.get(this._apiURL.cmsAPI+"public/master/staticdeployment/document-type/"+t)}}]),t}();h.ctorParameters=function(){return[{type:c.a},{type:i.a}]},h=r.b([Object(n.B)({providedIn:"root"})],h);var p=function(){function t(e){_classCallCheck(this,t),this._actCircularService=e,this.tableJsonData=new l.a({}),this.paginationCount=10}return _createClass(t,[{key:"ngOnInit",value:function(){this.getCircularDocument()}},{key:"getCircularDocument",value:function(){var t=this;this.type="ORDER",this._actCircularService.getData(this.type).subscribe((function(e){t.getDocdata=e.data,console.log(Object.keys(t.getDocdata).length),t.dataLength=Object.keys(t.getDocdata).length,console.log(e),console.log(t.getDocdata),t.filterDataArray=e.data,t.tableSortFilter(null,null,null,"default")}),(function(t){}))}},{key:"tableSortFilter",value:function(t,e,a,r){this.sortData="default"==r?{sortType:"DESC",key:"typeno",typ:"number",sort:r}:{sortType:t,key:e,typ:a,sort:r};var n={headers:[{key:"typeno",label:"Sr.No.",type:"number"},{key:"subject",label:"Subject",type:"string"},{key:"createdOn",label:"Created on",type:"date"}],actualArray:this.getDocdata,sortData:this.sortData};this.tableHeader=n.headers,this.tableJsonData.next({exportJson:n}),console.log(n)}},{key:"filterValue",value:function(t){console.log(t),this.filterDataArray=t.filterArray,this.sortData=t.sort,this.getPageNo(1)}},{key:"getPageNo",value:function(t){var e=this;this.currentPageNo=t,this.filterDataArray.length>9&&(this.paginationCount=10*t),0==this.filterDataArray.length&&(this.paginationCount=0),setTimeout((function(){document.querySelector("#foo1").querySelector(".pagination-next").classList.contains("disabled")&&(e.paginationCount=e.filterDataArray.length)}),100)}}]),t}();p.ctorParameters=function(){return[{type:h}]},p=r.b([Object(n.n)({selector:"app-authorityorders",template:r.c(a("NoOc")).default,styles:[r.c(a("5GNP")).default]})],p);var f=function(){function t(e,a){_classCallCheck(this,t),this._http=e,this._apiURL=a}return _createClass(t,[{key:"getData",value:function(t){return this._http.get(this._apiURL.cmsAPI+"/public/master/staticdeployment/document-type/"+t)}}]),t}();f.ctorParameters=function(){return[{type:c.a},{type:i.a}]},f=r.b([Object(n.B)({providedIn:"root"})],f);var g=function(){function t(e,a){_classCallCheck(this,t),this._apiURL=e,this._actRuleFeesService=a,this.tableJsonData=new l.a({}),this.paginationCount=10}return _createClass(t,[{key:"ngOnInit",value:function(){this.getActRuleFeesDocument(),this.fileDownlod=this._apiURL.fileDownloadAPI+"download/"}},{key:"getActRuleFeesDocument",value:function(){var t=this;this.type="ACT",this._actRuleFeesService.getData(this.type).subscribe((function(e){t.getDocdata=e.data,t.dataLength=Object.keys(t.getDocdata).length,console.log(e),console.log(t.getDocdata),t.filterDataArray=t.getDocdata,t.dataArray=t.getDocdata,t.tableSortFilter(null,null,null,"default")}),(function(t){}))}},{key:"tableSortFilter",value:function(t,e,a,r){this.sortData="default"==r?{sortType:"DESC",key:"createdOn",typ:"date",sort:r}:{sortType:t,key:e,typ:a,sort:r};var n={headers:[{key:"subject",label:"Subject",type:"string"},{key:"createdOn",label:"Created on",type:"date"}],actualArray:this.getDocdata,sortData:this.sortData};this.tableHeader=n.headers,this.tableJsonData.next({exportJson:n}),console.log(n)}},{key:"filterValue",value:function(t){console.log(t),this.filterDataArray=t.filterArray,this.sortData=t.sort,this.getPageNo(1)}},{key:"getPageNo",value:function(t){var e=this;this.currentPageNo=t,this.filterDataArray.length>9&&(this.paginationCount=10*t),0==this.filterDataArray.length&&(this.paginationCount=0),setTimeout((function(){document.querySelector("#foo1").querySelector(".pagination-next").classList.contains("disabled")&&(e.paginationCount=e.filterDataArray.length)}),100)}}]),t}();g.ctorParameters=function(){return[{type:i.a},{type:f}]},g=r.b([Object(n.n)({selector:"app-acts-rules-fees",template:r.c(a("F1qM")).default,styles:[r.c(a("3iYC")).default]})],g);var y=function(){function t(e,a){_classCallCheck(this,t),this._http=e,this._apiURL=a}return _createClass(t,[{key:"getData",value:function(t){return this._http.get(this._apiURL.cmsAPI+"public/master/staticdeployment/document-type/"+t)}}]),t}();y.ctorParameters=function(){return[{type:c.a},{type:i.a}]},y=r.b([Object(n.B)({providedIn:"root"})],y);var b=function(){function t(e){_classCallCheck(this,t),this._actCircularService=e,this.tableJsonData=new l.a({}),this.paginationCount=10}return _createClass(t,[{key:"ngOnInit",value:function(){this.getCircularDocument()}},{key:"getCircularDocument",value:function(){var t=this;this.type="CIRCULARNOTICE",this._actCircularService.getData(this.type).subscribe((function(e){t.getDocdata=e.data,console.log(Object.keys(t.getDocdata).length),t.dataLength=Object.keys(t.getDocdata).length,console.log(e),console.log(t.getDocdata),t.filterDataArray=e.data,t.tableSortFilter(null,null,null,"default")}),(function(t){}))}},{key:"tableSortFilter",value:function(t,e,a,r){this.sortData="default"==r?{sortType:"DESC",key:"typeno",typ:"number",sort:r}:{sortType:t,key:e,typ:a,sort:r};var n={headers:[{key:"typeno",label:"Sr.No.",type:"number"},{key:"subject",label:"Subject",type:"string"},{key:"createdOn",label:"Created on",type:"date"}],actualArray:this.getDocdata,sortData:this.sortData};this.tableHeader=n.headers,this.tableJsonData.next({exportJson:n}),console.log(n)}},{key:"filterValue",value:function(t){console.log(t),this.filterDataArray=t.filterArray,this.sortData=t.sort,this.getPageNo(1)}},{key:"getPageNo",value:function(t){var e=this;this.currentPageNo=t,this.filterDataArray.length>9&&(this.paginationCount=10*t),0==this.filterDataArray.length&&(this.paginationCount=0),setTimeout((function(){document.querySelector("#foo1").querySelector(".pagination-next").classList.contains("disabled")&&(e.paginationCount=e.filterDataArray.length)}),100)}}]),t}();b.ctorParameters=function(){return[{type:y}]},b=r.b([Object(n.n)({selector:"app-circular-notice-direction",template:r.c(a("Jzr+")).default,styles:[r.c(a("CZE8")).default]})],b);var v=function(){function t(e,a){_classCallCheck(this,t),this._http=e,this._apiURL=a}return _createClass(t,[{key:"getData1",value:function(t){return this._http.get(this._apiURL.cmsAPI+"public/master/staticdeployment/document-type/"+t)}}]),t}();v.ctorParameters=function(){return[{type:c.a},{type:i.a}]},v=r.b([Object(n.B)({providedIn:"root"})],v);var D=function(){function t(e){_classCallCheck(this,t),this._actCircularService=e,this.tableJsonData=new l.a({}),this.paginationCount=10}return _createClass(t,[{key:"ngOnInit",value:function(){this.getCircularDocument()}},{key:"getCircularDocument",value:function(){var t=this;this.type="IMPORTANT DOCUMENT",this._actCircularService.getData1(this.type).subscribe((function(e){t.getDocdata=e.data,console.log(Object.keys(t.getDocdata).length),t.dataLength=Object.keys(t.getDocdata).length,console.log(e),console.log(t.getDocdata),t.filterDataArray=e.data,t.tableSortFilter(null,null,null,"default")}),(function(t){}))}},{key:"tableSortFilter",value:function(t,e,a,r){this.sortData="default"==r?{sortType:"DESC",key:"typeno",typ:"number",sort:r}:{sortType:t,key:e,typ:a,sort:r};var n={headers:[{key:"typeno",label:"Sr.No.",type:"number"},{key:"subject",label:"Subject",type:"string"},{key:"createdOn",label:"Created on",type:"date"}],actualArray:this.getDocdata,sortData:this.sortData};this.tableHeader=n.headers,this.tableJsonData.next({exportJson:n}),console.log(n)}},{key:"filterValue",value:function(t){console.log(t),this.filterDataArray=t.filterArray,this.sortData=t.sort,this.getPageNo(1)}},{key:"getPageNo",value:function(t){var e=this;this.currentPageNo=t,this.filterDataArray.length>9&&(this.paginationCount=10*t),0==this.filterDataArray.length&&(this.paginationCount=0),setTimeout((function(){document.querySelector("#foo1").querySelector(".pagination-next").classList.contains("disabled")&&(e.paginationCount=e.filterDataArray.length)}),100)}}]),t}();D.ctorParameters=function(){return[{type:v}]},D=r.b([Object(n.n)({selector:"app-regulatory-imp-doc",template:r.c(a("gL1c")).default,styles:[r.c(a("XLox")).default]})],D);var m=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}();m=r.b([Object(n.n)({selector:"app-national-urbam-public-framework",template:r.c(a("Ewqj")).default,styles:[r.c(a("vUOh")).default]})],m);var C=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}();C=r.b([Object(n.n)({selector:"app-gujrat-comprehensive-development-control-regulation",template:r.c(a("hozA")).default,styles:[r.c(a("6s2o")).default]})],C);var k=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}();k=r.b([Object(n.n)({selector:"app-pm-speech-at-credai-youtcon2019",template:r.c(a("cQJb")).default,styles:[r.c(a("3ftp")).default]})],k);var w=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}();w=r.b([Object(n.n)({selector:"app-annual-report20172018",template:r.c(a("rmzv")).default,styles:[r.c(a("5ldx")).default]})],w);var _=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}();_=r.b([Object(n.n)({selector:"app-supreme-court-one-side-pacts-not-binding",template:r.c(a("/D1D")).default,styles:[r.c(a("O0so")).default]})],_);var x=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),A=[{path:"acts-rules-fees",component:g},{path:"circular-notice-direction",component:b},{path:"forms-template",component:u},{path:"important-template-doc",component:D},{path:"authorityorders",component:p},{path:"important-documents/national-urban-public-framework",component:m},{path:"important-documents/gujrat-comprehensive-development-control-regulation",component:C},{path:"important-documents/pm-speechat-credai-youtcon2019",component:k},{path:"important-documents/annual-report2017-2018",component:w},{path:"important-documents/supreme-court-one-side-pacts-not-binding",component:_},{path:"important-documents/affordable-housing-property",component:x=r.b([Object(n.n)({selector:"app-affordable-housing-property",template:r.c(a("+amc")).default,styles:[r.c(a("+OiR")).default]})],x)}],F=_createClass((function t(){_classCallCheck(this,t)}));F=r.b([Object(n.J)({imports:[s.f.forChild(A)],exports:[s.f]})],F);var S=a("TSSN"),P=a("ZAI4"),j=a("IheW"),O=a("kdZ/"),R=a("dTlI"),T=a("5c4+"),I=a("UPf0"),N=a("xkgV");a.d(e,"RegularotyDocumentModule",(function(){return J}));var J=_createClass((function t(){_classCallCheck(this,t)}));J=r.b([Object(n.J)({declarations:[D,p,u,g,b,m,C,k,w,_,x],imports:[o.b,F,O.a,R.a,N.a,T.a,I.a,S.b.forChild({loader:{provide:S.a,useFactory:P.b,deps:[j.a]}})],providers:[o.e]})],J)},CZE8:function(t,e,a){"use strict";a.r(e),e.default=""},Ewqj:function(t,e,a){"use strict";a.r(e),e.default='<iframe class="pdf-viewer" src="/resources/staticpage/National_Urban_Public_Framework.pdf"></iframe>\r\n\r\n\r\n'},F1qM:function(t,e,a){"use strict";a.r(e),e.default='\r\n  <div class="row">\r\n    <div class="col-md-12">\r\n      <div class="card shadow"> \r\n        \x3c!-- .card-body --\x3e\r\n      <div class="d-flex justify-content-between align-items-center">\r\n        <h2>{{ \'ACTFees.heading\' | translate }}</h2>\r\n        <div class="tableTotalCount">Total Result - {{paginationCount}}/{{filterDataArray?.length}}</div>\r\n        </div>\r\n        \x3c!-- <div class="card-header font-weight-bold">{{ \'ACTFees.heading\' | translate }}</div> --\x3e\r\n        <div class="card-body">\r\n          <div class="table-responsive">\r\n            <app-filter-table [filterTableData]="{\'tableJson\':tableJsonData}" (myEvent)="filterValue($event)"></app-filter-table>\r\n  \r\n\t\t  <table class="table table-bordered">\r\n                             \r\n    <thead>\r\n      <tr class="bg-light  text-size-small text-center">\r\n        <th >Sr.No.</th>\r\n        \x3c!-- <th >{{ \'RDForm.srno\' | translate }}</th> --\x3e\r\n          <th *ngFor="let th of tableHeader">{{th.label}} <div class="sortTable">\r\n            <a href="javascript:void(0)" [ngClass]="{\'active\':sortData.sortType==\'ASC\' && sortData.key==th.key}" (click)="tableSortFilter(\'ASC\', th.key, th.type,\'sort\')" class="upArrow"><i class="fas fa-arrow-up"></i></a>\r\n            <a href="javascript:void(0)" [ngClass]="{\'active\':sortData.sortType==\'DESC\' && sortData.key==th.key}" (click)="tableSortFilter(\'DESC\', th.key, th.type,\'sort\')" class="downArrow"><i class="fas fa-arrow-down"></i></a>\r\n          </div>\r\n        </th>\r\n        <th>Download</th>\r\n        \x3c!-- <th>{{ \'RDForm.Download\' | translate }}</th> --\x3e\r\n      </tr>\r\n  </thead>\r\n    \x3c!-- <thead class="bg-light">\r\n      <tr>\r\n        <th class="w-10">{{ \'RDForm.srno\' | translate }}</th>\r\n        <th class="w-75">{{ \'RDForm.subject\' | translate }}</th>\r\n        <th>{{ \'RDForm.Download\' | translate }}</th>\r\n      </tr>\r\n    </thead> --\x3e\r\n    <tbody   *ngIf="filterDataArray?.length > 0; else _no_getDocdata">\r\n      <tr *ngFor = "let data of filterDataArray | paginate: { id: \'foo1\', itemsPerPage: 10, currentPage: currentPageNo };">\r\n        <td>{{data?.typeno}}</td>\r\n        <td>{{data?.subject}}</td>\r\n        <td class="text-nowrap">{{data?.createdOn | date:\'dd-MM-yyyy\'}}</td>\r\n        <td>\r\n          <span *ngFor="let doclistFile of data?.docLists">\r\n\r\n              <app-multi-file-view [Uid]="doclistFile?.docUID" ></app-multi-file-view> \r\n          </span>\r\n      </td>\r\n      </tr>\r\n    </tbody>\r\n    <ng-template #_no_getDocdata>\r\n      <tbody>\r\n        <tr class="text-center">\r\n          <td colspan="4"><div class="alert alert-danger">No Record Found!</div></td>\r\n        </tr>\r\n    </tbody>\r\n  </ng-template>\r\n  </table>\r\n  <div class="col-md-12 text-right" *ngIf="filterDataArray?.length > 0">\r\n    <pagination-controls id="foo1" (pageChange)="getPageNo($event)"></pagination-controls>\r\n  </div>\r\n\t\t  </div>\r\n        </div>\r\n       </div>\r\n      </div>\r\n    </div>\r\n'},"Jzr+":function(t,e,a){"use strict";a.r(e),e.default='\r\n  <div class="row">\r\n    <div class="col-md-12">\r\n      <div class="card shadow"> \r\n        \x3c!-- .card-body --\x3e   \r\n          <div class="d-flex justify-content-between align-items-center">\r\n        <h2>{{ \'Circular.heading\' | translate }}</h2>\r\n        <div class="tableTotalCount">Total Result - {{paginationCount}}/{{filterDataArray?.length}}</div>\r\n        </div>\r\n        \x3c!-- <div class="card-header font-weight-bold">{{ \'Circular.heading\' | translate }}</div> --\x3e\r\n        <div class="card-body">\r\n          <div class="table-responsive">\r\n            <app-filter-table [filterTableData]="{\'tableJson\':tableJsonData}" (myEvent)="filterValue($event)"></app-filter-table>\r\n  \r\n\t\t  <table class="table table-bordered">\r\n                                \r\n    <thead>\r\n      <tr class="bg-light  text-size-small text-center">\r\n          <th *ngFor="let th of tableHeader">{{th.label}} <div class="sortTable">\r\n            <a href="javascript:void(0)" [ngClass]="{\'active\':sortData.sortType==\'ASC\' && sortData.key==th.key}" (click)="tableSortFilter(\'ASC\', th.key, th.type,\'sort\')" class="upArrow"><i class="fas fa-arrow-up"></i></a>\r\n            <a href="javascript:void(0)" [ngClass]="{\'active\':sortData.sortType==\'DESC\' && sortData.key==th.key}" (click)="tableSortFilter(\'DESC\', th.key, th.type,\'sort\')" class="downArrow"><i class="fas fa-arrow-down"></i></a>\r\n          </div>\r\n        </th>\r\n        <th>Download</th>\r\n        \x3c!-- <th>{{ \'RDForm.Download\' | translate }}</th> --\x3e\r\n      </tr>\r\n  </thead>\r\n    \x3c!-- <thead class="bg-light">\r\n      <tr>\r\n        <th class="w-10">{{ \'RDForm.srno\' | translate }}</th>\r\n        <th class="w-75">{{ \'RDForm.subject\' | translate }}</th>\r\n        <th>{{ \'RDForm.Download\' | translate }}</th>\r\n      </tr>\r\n    </thead> --\x3e\r\n    <tbody   *ngIf="filterDataArray?.length > 0; else _no_getDocdata">\r\n      <tr *ngFor = "let data of filterDataArray | paginate: { id: \'foo1\', itemsPerPage: 10, currentPage: currentPageNo };">\r\n        <td>{{data?.typeno}}</td>\r\n        <td>{{data?.subject}}</td>\r\n        <td class="text-nowrap">{{data?.createdOn | date:\'dd-MM-yyyy\'}}</td>\r\n        <td>\r\n          <span *ngFor="let doclistFile of data?.docLists">\r\n\r\n              <app-multi-file-view [Uid]="doclistFile?.docUID" ></app-multi-file-view> \r\n          </span>\r\n      </td> \r\n        </tr>\r\n    </tbody>\r\n    <ng-template #_no_getDocdata>\r\n      <tbody>\r\n        <tr class="text-center">\r\n          <td colspan="4"><div class="alert alert-danger">No Record Found!</div></td>\r\n        </tr>\r\n    </tbody>\r\n  </ng-template>\r\n  </table>\r\n  <div class="col-md-12 text-right" *ngIf="filterDataArray?.length > 0">\r\n    <pagination-controls id="foo1" (pageChange)="getPageNo($event)"></pagination-controls>\r\n  </div>\r\n\t\t  </div>\r\n        </div>\r\n       </div>\r\n      </div>\r\n    </div>\r\n\r\n'},MmwF:function(t,e,a){"use strict";a.r(e),e.default=""},NoOc:function(t,e,a){"use strict";a.r(e),e.default='\r\n  <div class="row">\r\n    <div class="col-md-12">\r\n      <div class="card shadow"> \r\n        \x3c!-- .card-body --\x3e\r\n          <div class="d-flex justify-content-between align-items-center">\r\n            <h2>{{ \'OrdersDoc.heading\' | translate }}</h2>\r\n            <div class="tableTotalCount">Total Result - {{paginationCount}}/{{filterDataArray?.length}}</div>\r\n            </div>\r\n        \x3c!-- <div class="card-header font-weight-bold">{{ \'OrdersDoc.heading\' | translate }}</div> --\x3e\r\n        <div class="card-body">\r\n          <div class="table-responsive">\r\n            <app-filter-table [filterTableData]="{\'tableJson\':tableJsonData}" (myEvent)="filterValue($event)"></app-filter-table>\r\n\t\t  <table class="table table-bordered">\r\n                                 \r\n    <thead>\r\n      <tr class="bg-light  text-size-small text-center">\r\n        \x3c!-- <th >{{ \'RDForm.srno\' | translate }}</th> --\x3e\r\n          <th *ngFor="let th of tableHeader">{{th.label}} <div class="sortTable">\r\n            <a href="javascript:void(0)" [ngClass]="{\'active\':sortData.sortType==\'ASC\' && sortData.key==th.key}" (click)="tableSortFilter(\'ASC\', th.key, th.type,\'sort\')" class="upArrow"><i class="fas fa-arrow-up"></i></a>\r\n            <a href="javascript:void(0)" [ngClass]="{\'active\':sortData.sortType==\'DESC\' && sortData.key==th.key}" (click)="tableSortFilter(\'DESC\', th.key, th.type,\'sort\')" class="downArrow"><i class="fas fa-arrow-down"></i></a>\r\n          </div>\r\n        </th>\r\n        <th>Download</th>\r\n        \x3c!-- <th>{{ \'RDForm.Download\' | translate }}</th> --\x3e\r\n      </tr>\r\n  </thead>\r\n    \x3c!-- <thead class="bg-light">\r\n      <tr>\r\n        <th class="w-10">{{ \'RDForm.srno\' | translate }}</th>\r\n        <th class="w-75">{{ \'RDForm.subject\' | translate }}</th>\r\n        <th>{{ \'RDForm.Download\' | translate }}</th>\r\n      </tr>\r\n    </thead> --\x3e\r\n    <tbody  *ngIf="filterDataArray?.length > 0; else _no_getDocdata">\r\n      <tr *ngFor = "let data of filterDataArray | paginate: { id: \'foo1\', itemsPerPage: 10, currentPage: currentPageNo };">\r\n        <td>{{data?.typeno}}</td>\r\n        <td>{{data?.subject}}</td>\r\n        <td class="text-nowrap">{{data?.createdOn | date:\'dd-MM-yyyy\'}}</td>\r\n        <td>\r\n          <span *ngFor="let doclistFile of data?.docLists">\r\n\r\n              <app-multi-file-view [Uid]="doclistFile?.docUID" ></app-multi-file-view> \r\n          </span>\r\n      </td>\r\n        </tr>\r\n    </tbody>\r\n    <ng-template #_no_getDocdata>\r\n      <tbody>\r\n        <tr class="text-center">\r\n          <td colspan="4"><div class="alert alert-danger">No Record Found!</div></td>\r\n        </tr>\r\n    </tbody>\r\n  </ng-template>\r\n  </table>\r\n  <div class="col-md-12 text-right" *ngIf="filterDataArray?.length > 0">\r\n    <pagination-controls id="foo1" (pageChange)="getPageNo($event)"></pagination-controls>\r\n  </div>\r\n\t\t  </div>\r\n        </div>\r\n       </div>\r\n      </div>\r\n    </div>\r\n\r\n'},O0so:function(t,e,a){"use strict";a.r(e),e.default=""},XLox:function(t,e,a){"use strict";a.r(e),e.default=""},cQJb:function(t,e,a){"use strict";a.r(e),e.default='<iframe class="pdf-viewer" src="/resources/staticpage/National_Urban_Public_Framework.pdf"></iframe>\r\n\r\n\r\n'},gL1c:function(t,e,a){"use strict";a.r(e),e.default='\r\n\r\n  <div class="row">\r\n    <div class="col-md-12">\r\n      <div class="card shadow"> \r\n        \x3c!-- .card-body --\x3e  \r\n        <div class="d-flex justify-content-between align-items-center">\r\n            <h2>{{ \'RDForm.impDoc\' | translate }}</h2>\r\n            <div class="tableTotalCount">Total Result - {{paginationCount}}/{{filterDataArray?.length}}</div>\r\n            </div>\r\n        \x3c!-- <div class="card-header font-weight-bold">{{ \'RDForm.heading\' | translate }}</div> --\x3e\r\n        <div class="card-body">\r\n          <div class="table-responsive">\r\n            <app-filter-table [filterTableData]="{\'tableJson\':tableJsonData}" (myEvent)="filterValue($event)"></app-filter-table>\r\n\t\t  <table class="table table-bordered">\r\n                                  \r\n    <thead>\r\n      <tr class="bg-light  text-size-small text-center">\r\n          <th *ngFor="let th of tableHeader">{{th.label}} <div class="sortTable">\r\n            <a href="javascript:void(0)" [ngClass]="{\'active\':sortData.sortType==\'ASC\' && sortData.key==th.key}" (click)="tableSortFilter(\'ASC\', th.key, th.type,\'sort\')" class="upArrow"><i class="fas fa-arrow-up"></i></a>\r\n            <a href="javascript:void(0)" [ngClass]="{\'active\':sortData.sortType==\'DESC\' && sortData.key==th.key}" (click)="tableSortFilter(\'DESC\', th.key, th.type,\'sort\')" class="downArrow"><i class="fas fa-arrow-down"></i></a>\r\n          </div>\r\n        </th>\r\n        <th>Download</th>\r\n        \x3c!-- <th>{{ \'RDForm.Download\' | translate }}</th> --\x3e\r\n      </tr>\r\n  </thead>\r\n    \x3c!-- <thead class="bg-light">\r\n      <tr>\r\n        <th class="w-10">{{ \'RDForm.srno\' | translate }}</th>\r\n        <th class="w-75">{{ \'RDForm.subject\' | translate }}</th>\r\n        <th>{{ \'RDForm.Download\' | translate }}</th>\r\n      </tr>\r\n    </thead> --\x3e\r\n    <tbody  *ngIf="filterDataArray?.length > 0; else _no_getDocdata">\r\n      <tr *ngFor = "let data of filterDataArray | paginate: { id: \'foo1\', itemsPerPage: 10, currentPage: currentPageNo };">\r\n        <td>{{data?.typeno}}</td>\r\n        <td>{{data?.subject}}</td>\r\n        <td class="text-nowrap">{{data?.createdOn | date:\'dd-MM-yyyy\'}}</td>\r\n        <td *ngIf="data?.docLists.length>0">\r\n          <span *ngFor="let doclistFile of data?.docLists">\r\n\r\n              <app-multi-file-view [Uid]="doclistFile?.docUID" ></app-multi-file-view> \r\n          </span>\r\n      </td>\r\n      <td *ngIf="data?.contentText!=null"><a href="{{data?.contentText}}" target="_blank" class="link-color btn btn-primary">Open</a></td>\r\n        </tr>\r\n    </tbody>\r\n    <ng-template #_no_getDocdata>\r\n      <tbody>\r\n        <tr class="text-center">\r\n          <td colspan="4"><div class="alert alert-danger">No Record Found!</div></td>\r\n        </tr>\r\n    </tbody>\r\n  </ng-template>\r\n  </table>\r\n  <div class="col-md-12 text-right" *ngIf="filterDataArray?.length > 0">\r\n    <pagination-controls id="foo1" (pageChange)="getPageNo($event)"></pagination-controls>\r\n  </div>\r\n\t\t  </div>\r\n        </div>\r\n       </div>\r\n      </div>\r\n    </div>\r\n \r\n\r\n\r\n\r\n\r\n\r\n\r\n'},hozA:function(t,e,a){"use strict";a.r(e),e.default='<iframe class="pdf-viewer" src="/resources/staticpage/FINAL_Comprehencive_GDCR.pdf"></iframe>\r\n\r\n\r\n'},kOYa:function(t,e,a){"use strict";a.r(e),e.default='\r\n  <div class="row">\r\n    <div class="col-md-12">\r\n      <div class="card shadow"> \r\n        \x3c!-- .card-body --\x3e  \r\n        <div class="d-flex justify-content-between align-items-center">\r\n            <h2>{{ \'RDForm.heading\' | translate }}</h2>\r\n            <div class="tableTotalCount">Total Result - {{paginationCount}}/{{filterDataArray?.length}}</div>\r\n            </div>\r\n        \x3c!-- <div class="card-header font-weight-bold">{{ \'RDForm.heading\' | translate }}</div> --\x3e\r\n        <div class="card-body">\r\n          <div class="table-responsive">\r\n            <app-filter-table [filterTableData]="{\'tableJson\':tableJsonData}" (myEvent)="filterValue($event)"></app-filter-table>\r\n\t\t  <table class="table table-bordered">\r\n                                  \r\n    <thead>\r\n      <tr class="bg-light  text-size-small text-center">\r\n          <th *ngFor="let th of tableHeader">{{th.label}} <div class="sortTable">\r\n            <a href="javascript:void(0)" [ngClass]="{\'active\':sortData.sortType==\'ASC\' && sortData.key==th.key}" (click)="tableSortFilter(\'ASC\', th.key, th.type,\'sort\')" class="upArrow"><i class="fas fa-arrow-up"></i></a>\r\n            <a href="javascript:void(0)" [ngClass]="{\'active\':sortData.sortType==\'DESC\' && sortData.key==th.key}" (click)="tableSortFilter(\'DESC\', th.key, th.type,\'sort\')" class="downArrow"><i class="fas fa-arrow-down"></i></a>\r\n          </div>\r\n        </th>\r\n        <th>Download</th>\r\n        \x3c!-- <th>{{ \'RDForm.Download\' | translate }}</th> --\x3e\r\n      </tr>\r\n  </thead>\r\n    \x3c!-- <thead class="bg-light">\r\n      <tr>\r\n        <th class="w-10">{{ \'RDForm.srno\' | translate }}</th>\r\n        <th class="w-75">{{ \'RDForm.subject\' | translate }}</th>\r\n        <th>{{ \'RDForm.Download\' | translate }}</th>\r\n      </tr>\r\n    </thead> --\x3e\r\n    <tbody  *ngIf="filterDataArray?.length > 0; else _no_getDocdata">\r\n      <tr *ngFor = "let data of filterDataArray | paginate: { id: \'foo1\', itemsPerPage: 10, currentPage: currentPageNo };">\r\n        <td>{{data?.typeno}}</td>\r\n        <td>{{data?.subject}}</td>\r\n        <td class="text-nowrap">{{data?.createdOn | date:\'dd-MM-yyyy\'}}</td>\r\n        <td>\r\n          <span class="mb-3 d-block" *ngFor="let doclistFile of data?.docLists">\r\n\r\n              <app-multi-file-view [Uid]="doclistFile?.docUID" ></app-multi-file-view> \r\n          </span>\r\n          <span class="d-block" *ngIf="data?.contentText!=null"><a href="{{data?.contentText}}" target="_blank" class="btn btn-primary"><i class="icon icon-download"></i> {{data?.contentText.split(\'.\').pop().toUpperCase()}} File</a></span>\r\n      </td>\r\n        </tr>\r\n    </tbody>\r\n    <ng-template #_no_getDocdata>\r\n      <tbody>\r\n        <tr class="text-center">\r\n          <td colspan="4"><div class="alert alert-danger">No Record Found!</div></td>\r\n        </tr>\r\n    </tbody>\r\n  </ng-template>\r\n  </table>\r\n  <div class="col-md-12 text-right" *ngIf="filterDataArray?.length > 0">\r\n    <pagination-controls id="foo1" (pageChange)="getPageNo($event)"></pagination-controls>\r\n  </div>\r\n\t\t  </div>\r\n        </div>\r\n       </div>\r\n      </div>\r\n    </div>\r\n \r\n\r\n\r\n\r\n\r\n\r\n\r\n'},rmzv:function(t,e,a){"use strict";a.r(e),e.default='<iframe class="pdf-viewer" src="/resources/staticpage/book/Annual_Report.html"></iframe>\r\n\r\n\r\n'},vUOh:function(t,e,a){"use strict";a.r(e),e.default=""}}]);