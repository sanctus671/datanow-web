(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"g/zR":function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),o=function(){return function(){}}(),i=e("pMnS"),a=e("Ip0R"),d=e("oBZk"),_=e("ZZ/e"),u=e("deqC"),c=e("X7az"),r=e("p6m0"),s=e("ri4K"),g=e("mrSG"),p=e("VLh5"),C=e("fhOw"),O=e("t/Na"),M=e("iw74"),P=function(){function n(n,t){this.http=n,this.storage=t}return n.prototype.getNodes=function(n,t,e){var l=this;return new Promise((function(n,t){l.storage.get("datanow_token").then((function(e){e?n([{nodeId:1,name:"Sandvik-864-groov"},{nodeId:2,name:"Sandvik-863-groov"},{nodeId:3,name:"Sandvik-862-groov"},{nodeId:4,name:"Sandvik-861-groov"}]):t()}))}))},n.ngInjectableDef=l.Ob({factory:function(){return new n(l.Pb(O.c),l.Pb(M.b))},token:n,providedIn:"root"}),n}(),b=e("wd/R"),f=function(){function n(n,t,e,l,o){var i=this;this.authenticationService=n,this.popoverController=t,this.datapointsService=e,this.nodesService=l,this.sitesService=o,this.timeframe="Day Totals",this.selectedNode="All Nodes",setTimeout((function(){i.authenticationService.saveHome("live-data-node")}),1e3),this.getNodes(),this.sitesService.monitorSite().subscribe((function(){i.loading||i.getNodes()})),b.locale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"s",m:"1m",mm:"%dm",h:"1h",hh:"%dh",d:"1d",dd:"%dd",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}})}return n.prototype.ngOnInit=function(){},n.prototype.getNodes=function(){var n=this;this.loading=!0,this.sitesService.getActiveSite().then((function(t){n.activeSiteId!==t&&(n.selectedNode="All Nodes"),n.activeSiteId=t,n.sitesService.getActiveProcess().then((function(e){n.activeProcessId!==e&&(n.selectedNode="All Nodes"),n.activeProcessId=e,n.nodesService.getNodes(t,e,n.timeframe).then((function(t){n.nodes=t;for(var e=function(t){t.datapoints=[],n.datapointsService.getDatapointsByNode(t.id).then((function(n){t.datapoints=n}))},l=0,o=n.nodes;l<o.length;l++)e(o[l]);n.applyNodeFilter(),setTimeout((function(){n.loading=!1}),1e3)}))}))}))},n.prototype.openTimeframeFilter=function(n){return g.b(this,void 0,void 0,(function(){var t,e=this;return g.e(this,(function(l){switch(l.label){case 0:return[4,this.popoverController.create({component:p.a,componentProps:{items:["Shift Totals","Day Totals"],activeItem:this.timeframe},event:n,translucent:!0,mode:"md",showBackdrop:!1,cssClass:"dropdown-popover"})];case 1:return(t=l.sent()).present(),[2,t.onDidDismiss().then((function(n){n&&n.data&&n.data.selected&&(e.timeframe=n.data.selected,e.getNodes())}))]}}))}))},n.prototype.openNodeFilter=function(n){return g.b(this,void 0,void 0,(function(){var t,e,l,o,i=this;return g.e(this,(function(a){switch(a.label){case 0:for(t=["All Nodes"],e=0,l=this.nodes;e<l.length;e++)t.push(l[e].name);return[4,this.popoverController.create({component:p.a,componentProps:{items:t,activeItem:this.selectedNode},event:n,translucent:!0,mode:"md",showBackdrop:!1,cssClass:"dropdown-popover"})];case 1:return(o=a.sent()).present(),[2,o.onDidDismiss().then((function(n){n&&n.data&&n.data.selected&&(i.selectedNode=n.data.selected,i.applyNodeFilter())}))]}}))}))},n.prototype.applyNodeFilter=function(){if("All Nodes"===this.selectedNode)for(var n=0,t=this.nodes;n<t.length;n++)(o=t[n]).hide=!1;else for(var e=0,l=this.nodes;e<l.length;e++){var o;(o=l[e]).hide=o.name!==this.selectedNode}},n.prototype.formatDateFromNow=function(n){return b(n).fromNow()},n.prototype.formatDate=function(n){return b(n).format("ddd Do MMM HH:mm")},n}(),v=l.rb({encapsulation:0,styles:[[".live-data-node[_ngcontent-%COMP%]{color:#33395d}.live-data-node.live-data-node--process-selected[_ngcontent-%COMP%]   .live-data-node__filters[_ngcontent-%COMP%]   .live-data-node__filters__filter--node[_ngcontent-%COMP%]{opacity:0;pointer-events:none}.live-data-node.live-data-node--process-selected[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]{margin-top:0}.live-data-node.live-data-node--process-selected[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{display:none}.live-data-node[_ngcontent-%COMP%]   .live-data-node__filters[_ngcontent-%COMP%]{display:-webkit-box;display:flex;padding:16px 24px;border-bottom:1px solid #eaecee}.live-data-node[_ngcontent-%COMP%]   .live-data-node__filters[_ngcontent-%COMP%]   .live-data-node__filters__filter[_ngcontent-%COMP%]{font-size:14px;line-height:16px;cursor:pointer}.live-data-node[_ngcontent-%COMP%]   .live-data-node__filters[_ngcontent-%COMP%]   .live-data-node__filters__filter[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{vertical-align:middle;margin-left:5px;font-size:16px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__filters[_ngcontent-%COMP%]   .live-data-node__filters__filter.live-data-node__filters__filter--node[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]{padding:0 24px;margin-bottom:60px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]{margin-top:25px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{font-weight:400;font-size:22px;line-height:26px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]{border-bottom:1px solid #eaecee}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint.datapoint--opened[_ngcontent-%COMP%]{border-bottom:none}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__title[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding:8px 0;cursor:pointer}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{-webkit-transition:-webkit-transform .1s;transition:-webkit-transform .1s ease;transition:transform .1s ease;transition:transform .1s ease,-webkit-transform .1s ease;color:#8ea3b5;font-size:16px;vertical-align:middle}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__title[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:14px;margin-right:15px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__title[_ngcontent-%COMP%]   .datapoint__title__status[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:4px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__title[_ngcontent-%COMP%]   .datapoint__title__name[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__title[_ngcontent-%COMP%]   .datapoint__title__last-added[_ngcontent-%COMP%]{margin-right:0;text-align:center}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__title[_ngcontent-%COMP%]   .datapoint__title__last-added[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0;font-weight:400;font-size:16px;line-height:17px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__title[_ngcontent-%COMP%]   .datapoint__title__last-added[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400;font-size:11px;line-height:12px;color:#8ea3b5}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__info-grid[_ngcontent-%COMP%]{margin-top:5px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__info-grid[_ngcontent-%COMP%]   .datapoint__info-grid__item[_ngcontent-%COMP%]{display:inline-block;width:50%;border:1px solid #eaecee;padding:14px;font-size:14px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__info-grid[_ngcontent-%COMP%]   .datapoint__info-grid__item[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0 0 6px;font-weight:400;font-size:11px;line-height:13px;color:#8ea3b5}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__info-grid[_ngcontent-%COMP%]   .datapoint__info-grid__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__info-grid[_ngcontent-%COMP%]   .datapoint__info-grid__item.datapoint__info-grid__item--name[_ngcontent-%COMP%]{border-right:none;border-top-left-radius:5px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__info-grid[_ngcontent-%COMP%]   .datapoint__info-grid__item.datapoint__info-grid__item--name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__info-grid[_ngcontent-%COMP%]   .datapoint__info-grid__item.datapoint__info-grid__item--device[_ngcontent-%COMP%]{border-top-right-radius:5px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__info-grid[_ngcontent-%COMP%]   .datapoint__info-grid__item.datapoint__info-grid__item--device[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__info-grid[_ngcontent-%COMP%]   .datapoint__info-grid__item.datapoint__info-grid__item--status[_ngcontent-%COMP%]{border-top:none;border-right:none}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__info-grid[_ngcontent-%COMP%]   .datapoint__info-grid__item.datapoint__info-grid__item--status[_ngcontent-%COMP%]   .datapoint__info-grid__item__status[_ngcontent-%COMP%]{display:inline-block;width:8px;height:8px;border-radius:4px;vertical-align:middle;margin-right:5px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__info-grid[_ngcontent-%COMP%]   .datapoint__info-grid__item.datapoint__info-grid__item--role[_ngcontent-%COMP%]{border-top:none}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__info-grid[_ngcontent-%COMP%]   .datapoint__info-grid__item.datapoint__info-grid__item--notes[_ngcontent-%COMP%]{width:100%;display:block;border-top:none}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__info-grid[_ngcontent-%COMP%]   .datapoint__info-grid__item.datapoint__info-grid__item--notes[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{white-space:normal}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__recent-readings[_ngcontent-%COMP%]{border:1px solid #eaecee;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;padding:16px 14px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__recent-readings[_ngcontent-%COMP%] > h6[_ngcontent-%COMP%]{font-weight:400;font-size:11px;line-height:13px;color:#8ea3b5;margin:0}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__recent-readings[_ngcontent-%COMP%]   .datapoint__recent-readings__readings[_ngcontent-%COMP%]   .datapoint__recent-readings__readings__reading[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;margin-top:14px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__recent-readings[_ngcontent-%COMP%]   .datapoint__recent-readings__readings[_ngcontent-%COMP%]   .datapoint__recent-readings__readings__reading[_ngcontent-%COMP%]   .datapoint__recent-readings__readings__reading__value[_ngcontent-%COMP%]{font-weight:400;font-size:14px;line-height:17px}.live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__recent-readings[_ngcontent-%COMP%]   .datapoint__recent-readings__readings[_ngcontent-%COMP%]   .datapoint__recent-readings__readings__reading[_ngcontent-%COMP%]   .datapoint__recent-readings__readings__reading__date[_ngcontent-%COMP%], .live-data-node[_ngcontent-%COMP%]   .live-data-node__nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node__datapoints[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__recent-readings[_ngcontent-%COMP%]   .datapoint__recent-readings__readings[_ngcontent-%COMP%]   .datapoint__recent-readings__readings__reading[_ngcontent-%COMP%]   .datapoint__recent-readings__readings__reading__from-now[_ngcontent-%COMP%]{font-weight:400;font-size:11px;line-height:13px;color:#8ea3b5}"]],data:{}});function m(n){return l.Lb(0,[(n()(),l.tb(0,0,null,null,4,"div",[["class","datapoint__title__last-added"]],null,null,null,null,null)),(n()(),l.tb(1,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),l.Kb(2,null,["",""])),(n()(),l.tb(3,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),l.Kb(4,null,["",""]))],null,(function(n,t){var e=t.component;n(t,2,0,t.parent.context.$implicit.recent_readings[0].value),n(t,4,0,e.formatDateFromNow(t.parent.context.$implicit.recent_readings[0].date))}))}function h(n){return l.Lb(0,[(n()(),l.tb(0,0,null,null,4,"div",[["class","datapoint__info-grid__item datapoint__info-grid__item--notes"]],null,null,null,null,null)),(n()(),l.tb(1,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),l.Kb(-1,null,["Notes"])),(n()(),l.tb(3,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),l.Kb(4,null,["",""]))],null,(function(n,t){n(t,4,0,t.parent.parent.context.$implicit.notes)}))}function x(n){return l.Lb(0,[(n()(),l.tb(0,0,null,null,6,"div",[["class","datapoint__recent-readings__readings__reading"]],null,null,null,null,null)),(n()(),l.tb(1,0,null,null,1,"div",[["class","datapoint__recent-readings__readings__reading__value"]],null,null,null,null,null)),(n()(),l.Kb(2,null,["",""])),(n()(),l.tb(3,0,null,null,1,"div",[["class","datapoint__recent-readings__readings__reading__from-now"]],null,null,null,null,null)),(n()(),l.Kb(4,null,["",""])),(n()(),l.tb(5,0,null,null,1,"div",[["class","datapoint__recent-readings__readings__reading__date"]],null,null,null,null,null)),(n()(),l.Kb(6,null,["",""]))],null,(function(n,t){var e=t.component;n(t,2,0,t.context.$implicit.value),n(t,4,0,e.formatDateFromNow(t.context.$implicit.date)),n(t,6,0,e.formatDate(t.context.$implicit.date))}))}function w(n){return l.Lb(0,[(n()(),l.tb(0,0,null,null,33,"div",[],null,null,null,null,null)),(n()(),l.tb(1,0,null,null,26,"div",[["class","datapoint__info-grid"]],null,null,null,null,null)),(n()(),l.tb(2,0,null,null,4,"div",[["class","datapoint__info-grid__item datapoint__info-grid__item--name"]],null,null,null,null,null)),(n()(),l.tb(3,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),l.Kb(-1,null,["Name"])),(n()(),l.tb(5,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),l.Kb(6,null,["",""])),(n()(),l.tb(7,0,null,null,4,"div",[["class","datapoint__info-grid__item datapoint__info-grid__item--device"]],null,null,null,null,null)),(n()(),l.tb(8,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),l.Kb(-1,null,["Device"])),(n()(),l.tb(10,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),l.Kb(11,null,["",""])),(n()(),l.tb(12,0,null,null,8,"div",[["class","datapoint__info-grid__item datapoint__info-grid__item--status"]],null,null,null,null,null)),(n()(),l.tb(13,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),l.Kb(-1,null,["Status"])),(n()(),l.tb(15,0,null,null,3,"div",[["class","datapoint__info-grid__item__status"]],null,null,null,null,null)),l.Hb(512,null,a.t,a.u,[l.k,l.t,l.D]),l.sb(17,278528,null,0,a.m,[a.t],{ngStyle:[0,"ngStyle"]},null),l.Gb(18,{"background-color":0}),(n()(),l.tb(19,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),l.Kb(20,null,["",""])),(n()(),l.tb(21,0,null,null,4,"div",[["class","datapoint__info-grid__item datapoint__info-grid__item--role"]],null,null,null,null,null)),(n()(),l.tb(22,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),l.Kb(-1,null,["Role"])),(n()(),l.tb(24,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),l.Kb(25,null,["",""])),(n()(),l.ib(16777216,null,null,1,null,h)),l.sb(27,16384,null,0,a.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.tb(28,0,null,null,5,"div",[["class","datapoint__recent-readings"]],null,null,null,null,null)),(n()(),l.tb(29,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),l.Kb(-1,null,["Latest Readings"])),(n()(),l.tb(31,0,null,null,2,"div",[["class","datapoint__recent-readings__readings"]],null,null,null,null,null)),(n()(),l.ib(16777216,null,null,1,null,x)),l.sb(33,278528,null,0,a.i,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,t){var e=n(t,18,0,"Online"===t.parent.context.$implicit.status?"#2DCA73":"#FF015B");n(t,17,0,e),n(t,27,0,t.parent.context.$implicit.notes),n(t,33,0,t.parent.context.$implicit.recent_readings)}),(function(n,t){n(t,6,0,t.parent.context.$implicit.name),n(t,11,0,t.parent.context.$implicit.device),n(t,20,0,t.parent.context.$implicit.status),n(t,25,0,t.parent.context.$implicit.role)}))}function k(n){return l.Lb(0,[(n()(),l.tb(0,0,null,null,22,"div",[["class","node__datapoints__datapoint datapoint"]],null,null,null,null,null)),l.Hb(512,null,a.r,a.s,[l.s,l.t,l.k,l.D]),l.sb(2,278528,null,0,a.h,[a.r],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l.Gb(3,{"datapoint--opened":0}),(n()(),l.tb(4,0,null,null,16,"div",[["class","datapoint__title"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=0!=(n.context.$implicit.opened=!n.context.$implicit.opened)&&l),l}),null,null)),(n()(),l.tb(5,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),l.tb(6,0,null,null,4,"ion-icon",[["mode","ios"],["name","arrow-forward"]],null,null,null,d.H,d.k)),l.Hb(512,null,a.t,a.u,[l.k,l.t,l.D]),l.sb(8,278528,null,0,a.m,[a.t],{ngStyle:[0,"ngStyle"]},null),l.Gb(9,{transform:0}),l.sb(10,49152,null,0,_.C,[l.h,l.k,l.z],{mode:[0,"mode"],name:[1,"name"]},null),(n()(),l.tb(11,0,null,null,3,"div",[["class","datapoint__title__status"]],null,null,null,null,null)),l.Hb(512,null,a.t,a.u,[l.k,l.t,l.D]),l.sb(13,278528,null,0,a.m,[a.t],{ngStyle:[0,"ngStyle"]},null),l.Gb(14,{"background-color":0}),(n()(),l.tb(15,0,null,null,1,"div",[["class","datapoint__title__id"]],null,null,null,null,null)),(n()(),l.Kb(16,null,[" "," "])),(n()(),l.tb(17,0,null,null,1,"div",[["class","datapoint__title__name"]],null,null,null,null,null)),(n()(),l.Kb(18,null,[" "," "])),(n()(),l.ib(16777216,null,null,1,null,m)),l.sb(20,16384,null,0,a.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.ib(16777216,null,null,1,null,w)),l.sb(22,16384,null,0,a.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null)],(function(n,t){var e=n(t,3,0,t.context.$implicit.opened);n(t,2,0,"node__datapoints__datapoint datapoint",e);var l=n(t,9,0,t.context.$implicit.opened?"rotate(90deg)":"rotate(0deg)");n(t,8,0,l),n(t,10,0,"ios","arrow-forward");var o=n(t,14,0,"Online"===t.context.$implicit.status?"#2DCA73":"#FF015B");n(t,13,0,o),n(t,20,0,t.context.$implicit.recent_readings.length>0),n(t,22,0,t.context.$implicit.opened)}),(function(n,t){n(t,16,0,t.context.$implicit.datapointId),n(t,18,0,t.context.$implicit.name)}))}function y(n){return l.Lb(0,[(n()(),l.tb(0,0,null,null,5,"div",[["class","live-data-node__nodes__node node"]],null,null,null,null,null)),(n()(),l.tb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),l.Kb(2,null,["",""])),(n()(),l.tb(3,0,null,null,2,"div",[["class","node__datapoints"]],null,null,null,null,null)),(n()(),l.ib(16777216,null,null,1,null,k)),l.sb(5,278528,null,0,a.i,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,t){n(t,5,0,t.parent.context.$implicit.datapoints)}),(function(n,t){n(t,2,0,t.parent.context.$implicit.name)}))}function N(n){return l.Lb(0,[(n()(),l.tb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),l.ib(16777216,null,null,1,null,y)),l.sb(2,16384,null,0,a.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null)],(function(n,t){n(t,2,0,!t.context.$implicit.hide)}),null)}function z(n){return l.Lb(0,[(n()(),l.tb(0,0,null,null,13,"ion-header",[["class","datapoints-toolbar"]],null,null,null,d.G,d.j)),l.sb(1,49152,null,0,_.B,[l.h,l.k,l.z],null,null),(n()(),l.tb(2,0,null,0,11,"ion-toolbar",[],null,null,null,d.T,d.w)),l.sb(3,49152,null,0,_.Cb,[l.h,l.k,l.z],null,null),(n()(),l.tb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,d.A,d.d)),l.sb(5,49152,null,0,_.l,[l.h,l.k,l.z],null,null),(n()(),l.tb(6,0,null,0,1,"ion-menu-button",[["color","primary"]],null,null,null,d.M,d.q)),l.sb(7,49152,null,0,_.R,[l.h,l.k,l.z],{color:[0,"color"]},null),(n()(),l.tb(8,0,null,0,3,"ion-title",[["text-left",""]],null,null,null,d.S,d.v)),l.sb(9,49152,null,0,_.Ab,[l.h,l.k,l.z],null,null),l.sb(10,16384,null,0,_.d,[l.k],null,null),(n()(),l.Kb(-1,0,[" Live Data "])),(n()(),l.tb(12,0,null,0,1,"app-site-selector",[],null,null,null,u.b,u.a)),l.sb(13,114688,null,0,c.a,[_.Kb,r.a,s.a],null,null),(n()(),l.tb(14,0,null,null,22,"ion-content",[["class","live-data-node"]],null,null,null,d.C,d.f)),l.Hb(512,null,a.r,a.s,[l.s,l.t,l.k,l.D]),l.sb(16,278528,null,0,a.h,[a.r],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l.Gb(17,{"live-data-node--process-selected":0}),l.sb(18,49152,null,0,_.u,[l.h,l.k,l.z],null,null),(n()(),l.tb(19,0,null,0,8,"div",[["class","live-data-node__filters"]],null,null,null,null,null)),(n()(),l.tb(20,0,null,null,3,"div",[["class","live-data-node__filters__filter live-data-node__filters__filter--node"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.openNodeFilter(e)&&l),l}),null,null)),(n()(),l.Kb(21,null,[" "," "])),(n()(),l.tb(22,0,null,null,1,"ion-icon",[["color","primary"],["mode","ios"],["name","arrow-down"]],null,null,null,d.H,d.k)),l.sb(23,49152,null,0,_.C,[l.h,l.k,l.z],{color:[0,"color"],mode:[1,"mode"],name:[2,"name"]},null),(n()(),l.tb(24,0,null,null,3,"div",[["class","live-data-node__filters__filter live-data-node__filters__filter--timeframe"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.openTimeframeFilter(e)&&l),l}),null,null)),(n()(),l.Kb(25,null,[" "," "])),(n()(),l.tb(26,0,null,null,1,"ion-icon",[["color","primary"],["mode","ios"],["name","arrow-down"]],null,null,null,d.H,d.k)),l.sb(27,49152,null,0,_.C,[l.h,l.k,l.z],{color:[0,"color"],mode:[1,"mode"],name:[2,"name"]},null),(n()(),l.tb(28,0,null,0,2,"div",[["class","live-data-node__nodes"]],null,null,null,null,null)),(n()(),l.ib(16777216,null,null,1,null,N)),l.sb(30,278528,null,0,a.i,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null),(n()(),l.tb(31,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,d.E,d.g)),l.sb(32,49152,null,0,_.w,[l.h,l.k,l.z],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),l.tb(33,0,null,0,3,"ion-fab-button",[["color","success"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.getNodes()&&l),l}),d.D,d.h)),l.sb(34,49152,null,0,_.x,[l.h,l.k,l.z],{color:[0,"color"]},null),(n()(),l.tb(35,0,null,0,1,"ion-icon",[["name","refresh"]],null,null,null,d.H,d.k)),l.sb(36,49152,null,0,_.C,[l.h,l.k,l.z],{name:[0,"name"]},null)],(function(n,t){var e=t.component;n(t,7,0,"primary"),n(t,13,0);var l=n(t,17,0,e.activeProcessId);n(t,16,0,"live-data-node",l),n(t,23,0,"primary","ios","arrow-down"),n(t,27,0,"primary","ios","arrow-down"),n(t,30,0,e.nodes),n(t,32,0,"end","bottom"),n(t,34,0,"success"),n(t,36,0,"refresh")}),(function(n,t){var e=t.component;n(t,21,0,e.selectedNode?e.selectedNode:"All Nodes"),n(t,25,0,e.timeframe)}))}function S(n){return l.Lb(0,[(n()(),l.tb(0,0,null,null,1,"app-live-data-node",[],null,null,null,z,v)),l.sb(1,114688,null,0,f,[s.a,_.Kb,C.a,P,r.a],null,null)],(function(n,t){n(t,1,0)}),null)}var K=l.pb("app-live-data-node",f,S,{},{},[]),D=e("gIcY"),I=e("ZYCi"),$=function(){return function(){}}(),F=e("fMU3");e.d(t,"LiveDataNodePageModuleNgFactory",(function(){return L}));var L=l.qb(o,[],(function(n){return l.Bb([l.Cb(512,l.j,l.bb,[[8,[i.a,K]],[3,l.j],l.x]),l.Cb(4608,a.l,a.k,[l.u,[2,a.w]]),l.Cb(4608,D.g,D.g,[]),l.Cb(4608,_.b,_.b,[l.z,l.g]),l.Cb(4608,_.Gb,_.Gb,[_.b,l.j,l.q]),l.Cb(4608,_.Kb,_.Kb,[_.b,l.j,l.q]),l.Cb(1073742336,a.b,a.b,[]),l.Cb(1073742336,D.f,D.f,[]),l.Cb(1073742336,D.a,D.a,[]),l.Cb(1073742336,_.Eb,_.Eb,[]),l.Cb(1073742336,I.q,I.q,[[2,I.v],[2,I.m]]),l.Cb(1073742336,$,$,[]),l.Cb(1073742336,F.a,F.a,[]),l.Cb(1073742336,o,o,[]),l.Cb(1024,I.k,(function(){return[[{path:"",component:f}]]}),[])])}))}}]);