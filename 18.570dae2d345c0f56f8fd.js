(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"g/zR":function(n,t,l){"use strict";l.r(t);var e=l("CcnG"),o=function(){return function(){}}(),i=l("pMnS"),a=l("Ip0R"),d=l("oBZk"),_=l("ZZ/e"),u=l("deqC"),c=l("X7az"),r=l("p6m0"),s=l("ri4K"),g=l("mrSG"),p=l("VLh5"),C=l("fhOw"),O=l("t/Na"),M=l("iw74"),b=function(){function n(n,t){this.http=n,this.storage=t}return n.prototype.getNodes=function(n,t,l){var e=this;return new Promise((function(n,t){e.storage.get("datanow_token").then((function(l){l?n([{nodeId:1,name:"Sandvik-864-groov"},{nodeId:2,name:"Sandvik-863-groov"},{nodeId:3,name:"Sandvik-862-groov"},{nodeId:4,name:"Sandvik-861-groov"}]):t()}))}))},n.ngInjectableDef=e.Ob({factory:function(){return new n(e.Pb(O.c),e.Pb(M.b))},token:n,providedIn:"root"}),n}(),P=l("wd/R"),f=function(){function n(n,t,l,e,o){var i=this;this.authenticationService=n,this.popoverController=t,this.datapointsService=l,this.nodesService=e,this.sitesService=o,this.timeframe="Current Day",setTimeout((function(){i.authenticationService.saveHome("live-data-node")}),1e3),this.getNodes(),this.sitesService.monitorSite().subscribe((function(){i.loading||i.getNodes()})),P.locale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"s",m:"1m",mm:"%dm",h:"1h",hh:"%dh",d:"1d",dd:"%dd",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}})}return n.prototype.ngOnInit=function(){},n.prototype.getNodes=function(){var n=this;this.loading=!0,this.sitesService.getActiveSite().then((function(t){n.sitesService.getActiveProcess().then((function(l){n.nodesService.getNodes(t,l,n.timeframe).then((function(t){n.nodes=t;for(var l=function(t){t.datapoints=[],n.datapointsService.getDatapointsByNode(t.id).then((function(n){t.datapoints=n}))},e=0,o=n.nodes;e<o.length;e++)l(o[e])}))}))}))},n.prototype.openTimeframeFilter=function(n){return g.b(this,void 0,void 0,(function(){var t,l=this;return g.e(this,(function(e){switch(e.label){case 0:return[4,this.popoverController.create({component:p.a,componentProps:{items:["Current Shift","Current Day"],activeItem:this.timeframe},event:n,translucent:!0,mode:"md",showBackdrop:!1,cssClass:"dropdown-popover"})];case 1:return(t=e.sent()).present(),[2,t.onDidDismiss().then((function(n){n&&n.data&&n.data.selected&&(l.timeframe=n.data.selected,l.getNodes())}))]}}))}))},n.prototype.openNodeFilter=function(n){return g.b(this,void 0,void 0,(function(){var t,l,e,o,i=this;return g.e(this,(function(a){switch(a.label){case 0:for(t=["All Nodes"],l=0,e=this.nodes;l<e.length;l++)t.push(e[l].name);return[4,this.popoverController.create({component:p.a,componentProps:{items:t,activeItem:this.selectedNode},event:n,translucent:!0,mode:"md",showBackdrop:!1,cssClass:"dropdown-popover"})];case 1:return(o=a.sent()).present(),[2,o.onDidDismiss().then((function(n){if(n&&n.data&&n.data.selected)if(i.selectedNode=n.data.selected,"All Nodes"===i.selectedNode)for(var t=0,l=i.nodes;t<l.length;t++)(a=l[t]).hide=!1;else for(var e=0,o=i.nodes;e<o.length;e++){var a;(a=o[e]).hide=a.name!==i.selectedNode}}))]}}))}))},n.prototype.formatDateFromNow=function(n){return P(n).fromNow()},n.prototype.formatDate=function(n){return P(n).format("ddd Do MMM HH:mm")},n}(),m=e.rb({encapsulation:0,styles:[[".live-data-node[_ngcontent-%COMP%]{color:#33395d}.live-data-node[_ngcontent-%COMP%]   .live-data-node__filters[_ngcontent-%COMP%]{display:-webkit-box;display:flex;padding:16px 24px;border-bottom:1px solid #eaecee}.live-data-node[_ngcontent-%COMP%]   .live-data-node__filters[_ngcontent-%COMP%]   .live-data-node__filters__filter[_ngcontent-%COMP%]{font-size:14px;line-height:16px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__filters[_ngcontent-%COMP%]   .live-data-node__filters__filter[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{vertical-align:middle;margin-left:5px;font-size:16px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__filters[_ngcontent-%COMP%]   .live-data-node__filters__filter.live-data-node__filters__filter--node[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]{padding:0 24px;margin-bottom:60px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]{margin-top:25px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{font-weight:400;font-size:22px;line-height:26px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]{border-bottom:1px solid #eaecee}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint.datapoint--opened[_ngcontent-%COMP%]{border-bottom:none}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__title[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding:8px 0;cursor:pointer}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{-webkit-transition:-webkit-transform .1s;transition:-webkit-transform .1s ease;transition:transform .1s ease;transition:transform .1s ease,-webkit-transform .1s ease;color:#8ea3b5;font-size:16px;vertical-align:middle}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__title[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:14px;margin-right:15px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__title[_ngcontent-%COMP%]   .datapoint__title__status[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:4px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__title[_ngcontent-%COMP%]   .datapoint__title__name[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__title[_ngcontent-%COMP%]   .datapoint__title__last-added[_ngcontent-%COMP%]{margin-right:0;text-align:center}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__title[_ngcontent-%COMP%]   .datapoint__title__last-added[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0;font-weight:400;font-size:16px;line-height:17px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__title[_ngcontent-%COMP%]   .datapoint__title__last-added[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400;font-size:11px;line-height:12px;color:#8ea3b5}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__info-grid[_ngcontent-%COMP%]{margin-top:5px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__info-grid[_ngcontent-%COMP%]   .datapoint__info-grid__item[_ngcontent-%COMP%]{display:inline-block;width:50%;border:1px solid #eaecee;padding:14px;font-size:14px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__info-grid[_ngcontent-%COMP%]   .datapoint__info-grid__item[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0 0 6px;font-weight:400;font-size:11px;line-height:13px;color:#8ea3b5}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__info-grid[_ngcontent-%COMP%]   .datapoint__info-grid__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__info-grid[_ngcontent-%COMP%]   .datapoint__info-grid__item.datapoint__info-grid__item--name[_ngcontent-%COMP%]{border-right:none;border-top-left-radius:5px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__info-grid[_ngcontent-%COMP%]   .datapoint__info-grid__item.datapoint__info-grid__item--name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__info-grid[_ngcontent-%COMP%]   .datapoint__info-grid__item.datapoint__info-grid__item--device[_ngcontent-%COMP%]{border-top-right-radius:5px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__info-grid[_ngcontent-%COMP%]   .datapoint__info-grid__item.datapoint__info-grid__item--device[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__info-grid[_ngcontent-%COMP%]   .datapoint__info-grid__item.datapoint__info-grid__item--status[_ngcontent-%COMP%]{border-top:none;border-right:none}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__info-grid[_ngcontent-%COMP%]   .datapoint__info-grid__item.datapoint__info-grid__item--status[_ngcontent-%COMP%]   .datapoint__info-grid__item__status[_ngcontent-%COMP%]{display:inline-block;width:8px;height:8px;border-radius:4px;vertical-align:middle;margin-right:5px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__info-grid[_ngcontent-%COMP%]   .datapoint__info-grid__item.datapoint__info-grid__item--role[_ngcontent-%COMP%]{border-top:none}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__info-grid[_ngcontent-%COMP%]   .datapoint__info-grid__item.datapoint__info-grid__item--notes[_ngcontent-%COMP%]{width:100%;display:block;border-top:none}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__info-grid[_ngcontent-%COMP%]   .datapoint__info-grid__item.datapoint__info-grid__item--notes[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{white-space:normal}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__recent-readings[_ngcontent-%COMP%]{border:1px solid #eaecee;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;padding:16px 14px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__recent-readings[_ngcontent-%COMP%] > h6[_ngcontent-%COMP%]{font-weight:400;font-size:11px;line-height:13px;color:#8ea3b5;margin:0}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__recent-readings[_ngcontent-%COMP%]   .datapoint__recent-readings__readings[_ngcontent-%COMP%]   .datapoint__recent-readings__readings__reading[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;margin-top:14px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__recent-readings[_ngcontent-%COMP%]   .datapoint__recent-readings__readings[_ngcontent-%COMP%]   .datapoint__recent-readings__readings__reading[_ngcontent-%COMP%]   .datapoint__recent-readings__readings__reading__value[_ngcontent-%COMP%]{font-weight:400;font-size:14px;line-height:17px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__recent-readings[_ngcontent-%COMP%]   .datapoint__recent-readings__readings[_ngcontent-%COMP%]   .datapoint__recent-readings__readings__reading[_ngcontent-%COMP%]   .datapoint__recent-readings__readings__reading__date[_ngcontent-%COMP%], .live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__recent-readings[_ngcontent-%COMP%]   .datapoint__recent-readings__readings[_ngcontent-%COMP%]   .datapoint__recent-readings__readings__reading[_ngcontent-%COMP%]   .datapoint__recent-readings__readings__reading__from-now[_ngcontent-%COMP%]{font-weight:400;font-size:11px;line-height:13px;color:#8ea3b5}"]],data:{}});function v(n){return e.Lb(0,[(n()(),e.tb(0,0,null,null,4,"div",[["class","datapoint__title__last-added"]],null,null,null,null,null)),(n()(),e.tb(1,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),e.Kb(2,null,["",""])),(n()(),e.tb(3,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Kb(4,null,["",""]))],null,(function(n,t){var l=t.component;n(t,2,0,t.parent.context.$implicit.recent_readings[0].value),n(t,4,0,l.formatDateFromNow(t.parent.context.$implicit.recent_readings[0].date))}))}function h(n){return e.Lb(0,[(n()(),e.tb(0,0,null,null,4,"div",[["class","datapoint__info-grid__item datapoint__info-grid__item--notes"]],null,null,null,null,null)),(n()(),e.tb(1,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,["Notes"])),(n()(),e.tb(3,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Kb(4,null,["",""]))],null,(function(n,t){n(t,4,0,t.parent.parent.context.$implicit.notes)}))}function x(n){return e.Lb(0,[(n()(),e.tb(0,0,null,null,6,"div",[["class","datapoint__recent-readings__readings__reading"]],null,null,null,null,null)),(n()(),e.tb(1,0,null,null,1,"div",[["class","datapoint__recent-readings__readings__reading__value"]],null,null,null,null,null)),(n()(),e.Kb(2,null,["",""])),(n()(),e.tb(3,0,null,null,1,"div",[["class","datapoint__recent-readings__readings__reading__from-now"]],null,null,null,null,null)),(n()(),e.Kb(4,null,["",""])),(n()(),e.tb(5,0,null,null,1,"div",[["class","datapoint__recent-readings__readings__reading__date"]],null,null,null,null,null)),(n()(),e.Kb(6,null,["",""]))],null,(function(n,t){var l=t.component;n(t,2,0,t.context.$implicit.value),n(t,4,0,l.formatDateFromNow(t.context.$implicit.date)),n(t,6,0,l.formatDate(t.context.$implicit.date))}))}function w(n){return e.Lb(0,[(n()(),e.tb(0,0,null,null,33,"div",[],null,null,null,null,null)),(n()(),e.tb(1,0,null,null,26,"div",[["class","datapoint__info-grid"]],null,null,null,null,null)),(n()(),e.tb(2,0,null,null,4,"div",[["class","datapoint__info-grid__item datapoint__info-grid__item--name"]],null,null,null,null,null)),(n()(),e.tb(3,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,["Name"])),(n()(),e.tb(5,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Kb(6,null,["",""])),(n()(),e.tb(7,0,null,null,4,"div",[["class","datapoint__info-grid__item datapoint__info-grid__item--device"]],null,null,null,null,null)),(n()(),e.tb(8,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,["Device"])),(n()(),e.tb(10,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Kb(11,null,["",""])),(n()(),e.tb(12,0,null,null,8,"div",[["class","datapoint__info-grid__item datapoint__info-grid__item--status"]],null,null,null,null,null)),(n()(),e.tb(13,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,["Status"])),(n()(),e.tb(15,0,null,null,3,"div",[["class","datapoint__info-grid__item__status"]],null,null,null,null,null)),e.Hb(512,null,a.t,a.u,[e.k,e.t,e.D]),e.sb(17,278528,null,0,a.m,[a.t],{ngStyle:[0,"ngStyle"]},null),e.Gb(18,{"background-color":0}),(n()(),e.tb(19,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Kb(20,null,["",""])),(n()(),e.tb(21,0,null,null,4,"div",[["class","datapoint__info-grid__item datapoint__info-grid__item--role"]],null,null,null,null,null)),(n()(),e.tb(22,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,["Role"])),(n()(),e.tb(24,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Kb(25,null,["",""])),(n()(),e.ib(16777216,null,null,1,null,h)),e.sb(27,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.tb(28,0,null,null,5,"div",[["class","datapoint__recent-readings"]],null,null,null,null,null)),(n()(),e.tb(29,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,["Latest Readings"])),(n()(),e.tb(31,0,null,null,2,"div",[["class","datapoint__recent-readings__readings"]],null,null,null,null,null)),(n()(),e.ib(16777216,null,null,1,null,x)),e.sb(33,278528,null,0,a.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,t){var l=n(t,18,0,"Online"===t.parent.context.$implicit.status?"#2DCA73":"#FF015B");n(t,17,0,l),n(t,27,0,t.parent.context.$implicit.notes),n(t,33,0,t.parent.context.$implicit.recent_readings)}),(function(n,t){n(t,6,0,t.parent.context.$implicit.name),n(t,11,0,t.parent.context.$implicit.device),n(t,20,0,t.parent.context.$implicit.status),n(t,25,0,t.parent.context.$implicit.role)}))}function k(n){return e.Lb(0,[(n()(),e.tb(0,0,null,null,22,"div",[["class","node__datapoints__datapoint datapoint"]],null,null,null,null,null)),e.Hb(512,null,a.r,a.s,[e.s,e.t,e.k,e.D]),e.sb(2,278528,null,0,a.h,[a.r],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Gb(3,{"datapoint--opened":0}),(n()(),e.tb(4,0,null,null,16,"div",[["class","datapoint__title"]],null,[[null,"click"]],(function(n,t,l){var e=!0;return"click"===t&&(e=0!=(n.context.$implicit.opened=!n.context.$implicit.opened)&&e),e}),null,null)),(n()(),e.tb(5,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),e.tb(6,0,null,null,4,"ion-icon",[["mode","ios"],["name","arrow-forward"]],null,null,null,d.H,d.k)),e.Hb(512,null,a.t,a.u,[e.k,e.t,e.D]),e.sb(8,278528,null,0,a.m,[a.t],{ngStyle:[0,"ngStyle"]},null),e.Gb(9,{transform:0}),e.sb(10,49152,null,0,_.C,[e.h,e.k,e.z],{mode:[0,"mode"],name:[1,"name"]},null),(n()(),e.tb(11,0,null,null,3,"div",[["class","datapoint__title__status"]],null,null,null,null,null)),e.Hb(512,null,a.t,a.u,[e.k,e.t,e.D]),e.sb(13,278528,null,0,a.m,[a.t],{ngStyle:[0,"ngStyle"]},null),e.Gb(14,{"background-color":0}),(n()(),e.tb(15,0,null,null,1,"div",[["class","datapoint__title__id"]],null,null,null,null,null)),(n()(),e.Kb(16,null,[" "," "])),(n()(),e.tb(17,0,null,null,1,"div",[["class","datapoint__title__name"]],null,null,null,null,null)),(n()(),e.Kb(18,null,[" "," "])),(n()(),e.ib(16777216,null,null,1,null,v)),e.sb(20,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.ib(16777216,null,null,1,null,w)),e.sb(22,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],(function(n,t){var l=n(t,3,0,t.context.$implicit.opened);n(t,2,0,"node__datapoints__datapoint datapoint",l);var e=n(t,9,0,t.context.$implicit.opened?"rotate(90deg)":"rotate(0deg)");n(t,8,0,e),n(t,10,0,"ios","arrow-forward");var o=n(t,14,0,"Online"===t.context.$implicit.status?"#2DCA73":"#FF015B");n(t,13,0,o),n(t,20,0,t.context.$implicit.recent_readings.length>0),n(t,22,0,t.context.$implicit.opened)}),(function(n,t){n(t,16,0,t.context.$implicit.datapointId),n(t,18,0,t.context.$implicit.name)}))}function y(n){return e.Lb(0,[(n()(),e.tb(0,0,null,null,5,"div",[["class","live-data-node__nodes__node node"]],null,null,null,null,null)),(n()(),e.tb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Kb(2,null,["",""])),(n()(),e.tb(3,0,null,null,2,"div",[["class","node__datapoints"]],null,null,null,null,null)),(n()(),e.ib(16777216,null,null,1,null,k)),e.sb(5,278528,null,0,a.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,t){n(t,5,0,t.parent.context.$implicit.datapoints)}),(function(n,t){n(t,2,0,t.parent.context.$implicit.name)}))}function z(n){return e.Lb(0,[(n()(),e.tb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),e.ib(16777216,null,null,1,null,y)),e.sb(2,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],(function(n,t){n(t,2,0,!t.context.$implicit.hide)}),null)}function N(n){return e.Lb(0,[(n()(),e.tb(0,0,null,null,13,"ion-header",[["class","datapoints-toolbar"]],null,null,null,d.G,d.j)),e.sb(1,49152,null,0,_.B,[e.h,e.k,e.z],null,null),(n()(),e.tb(2,0,null,0,11,"ion-toolbar",[],null,null,null,d.T,d.w)),e.sb(3,49152,null,0,_.Cb,[e.h,e.k,e.z],null,null),(n()(),e.tb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,d.A,d.d)),e.sb(5,49152,null,0,_.l,[e.h,e.k,e.z],null,null),(n()(),e.tb(6,0,null,0,1,"ion-menu-button",[["color","primary"]],null,null,null,d.M,d.q)),e.sb(7,49152,null,0,_.R,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.tb(8,0,null,0,3,"ion-title",[["text-left",""]],null,null,null,d.S,d.v)),e.sb(9,49152,null,0,_.Ab,[e.h,e.k,e.z],null,null),e.sb(10,16384,null,0,_.d,[e.k],null,null),(n()(),e.Kb(-1,0,[" Live Data "])),(n()(),e.tb(12,0,null,0,1,"app-site-selector",[],null,null,null,u.b,u.a)),e.sb(13,114688,null,0,c.a,[_.Kb,r.a,s.a],null,null),(n()(),e.tb(14,0,null,null,19,"ion-content",[["class","live-data-node"]],null,null,null,d.C,d.f)),e.sb(15,49152,null,0,_.u,[e.h,e.k,e.z],null,null),(n()(),e.tb(16,0,null,0,8,"div",[["class","live-data-node__filters"]],null,null,null,null,null)),(n()(),e.tb(17,0,null,null,3,"div",[["class","live-data-node__filters__filter live-data-node__filters__filter--node"]],null,[[null,"click"]],(function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.openNodeFilter(l)&&e),e}),null,null)),(n()(),e.Kb(18,null,[" "," "])),(n()(),e.tb(19,0,null,null,1,"ion-icon",[["color","primary"],["mode","ios"],["name","arrow-down"]],null,null,null,d.H,d.k)),e.sb(20,49152,null,0,_.C,[e.h,e.k,e.z],{color:[0,"color"],mode:[1,"mode"],name:[2,"name"]},null),(n()(),e.tb(21,0,null,null,3,"div",[["class","live-data-node__filters__filter live-data-node__filters__filter--timeframe"]],null,[[null,"click"]],(function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.openTimeframeFilter(l)&&e),e}),null,null)),(n()(),e.Kb(22,null,[" "," "])),(n()(),e.tb(23,0,null,null,1,"ion-icon",[["color","primary"],["mode","ios"],["name","arrow-down"]],null,null,null,d.H,d.k)),e.sb(24,49152,null,0,_.C,[e.h,e.k,e.z],{color:[0,"color"],mode:[1,"mode"],name:[2,"name"]},null),(n()(),e.tb(25,0,null,0,2,"div",[["class","live-data-node__nodes"]],null,null,null,null,null)),(n()(),e.ib(16777216,null,null,1,null,z)),e.sb(27,278528,null,0,a.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.tb(28,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,d.E,d.g)),e.sb(29,49152,null,0,_.w,[e.h,e.k,e.z],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),e.tb(30,0,null,0,3,"ion-fab-button",[["color","success"]],null,[[null,"click"]],(function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.getNodes()&&e),e}),d.D,d.h)),e.sb(31,49152,null,0,_.x,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.tb(32,0,null,0,1,"ion-icon",[["name","refresh"]],null,null,null,d.H,d.k)),e.sb(33,49152,null,0,_.C,[e.h,e.k,e.z],{name:[0,"name"]},null)],(function(n,t){var l=t.component;n(t,7,0,"primary"),n(t,13,0),n(t,20,0,"primary","ios","arrow-down"),n(t,24,0,"primary","ios","arrow-down"),n(t,27,0,l.nodes),n(t,29,0,"end","bottom"),n(t,31,0,"success"),n(t,33,0,"refresh")}),(function(n,t){var l=t.component;n(t,18,0,l.selectedNode?l.selectedNode:"All Nodes"),n(t,22,0,l.timeframe)}))}function K(n){return e.Lb(0,[(n()(),e.tb(0,0,null,null,1,"app-live-data-node",[],null,null,null,N,m)),e.sb(1,114688,null,0,f,[s.a,_.Kb,C.a,b,r.a],null,null)],(function(n,t){n(t,1,0)}),null)}var S=e.pb("app-live-data-node",f,K,{},{},[]),$=l("gIcY"),D=l("ZYCi"),I=function(){return function(){}}(),L=l("fMU3");l.d(t,"LiveDataNodePageModuleNgFactory",(function(){return F}));var F=e.qb(o,[],(function(n){return e.Bb([e.Cb(512,e.j,e.bb,[[8,[i.a,S]],[3,e.j],e.x]),e.Cb(4608,a.l,a.k,[e.u,[2,a.w]]),e.Cb(4608,$.g,$.g,[]),e.Cb(4608,_.b,_.b,[e.z,e.g]),e.Cb(4608,_.Gb,_.Gb,[_.b,e.j,e.q]),e.Cb(4608,_.Kb,_.Kb,[_.b,e.j,e.q]),e.Cb(1073742336,a.b,a.b,[]),e.Cb(1073742336,$.f,$.f,[]),e.Cb(1073742336,$.a,$.a,[]),e.Cb(1073742336,_.Eb,_.Eb,[]),e.Cb(1073742336,D.q,D.q,[[2,D.v],[2,D.m]]),e.Cb(1073742336,I,I,[]),e.Cb(1073742336,L.a,L.a,[]),e.Cb(1073742336,o,o,[]),e.Cb(1024,D.k,(function(){return[[{path:"",component:f}]]}),[])])}))}}]);