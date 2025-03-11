import{a as ge}from"./chunk-25VGR7JS.js";import{a as I}from"./chunk-IVDZPP3D.js";import{a as he,b as fe}from"./chunk-UCUUKJUF.js";import{a as _e}from"./chunk-2NI67QZK.js";import{c as T}from"./chunk-UHFQUA5D.js";import"./chunk-7THMIGUD.js";import{a as V}from"./chunk-HY5F37U4.js";import"./chunk-6AMBXUQL.js";import{b as pe}from"./chunk-3TMRKM3A.js";import{f as D,q as ue}from"./chunk-V5RHMPQH.js";import"./chunk-LQTJ6KB6.js";import"./chunk-OVJQWTCG.js";import{b as X}from"./chunk-ZZBHPNZI.js";import{a as ie,b as ne}from"./chunk-H6U4N3TG.js";import{j as me,m as de,n as ce}from"./chunk-LH73PZKM.js";import{A as d,Aa as E,Ba as C,Ea as B,Hb as K,Kb as U,Lb as J,N as a,Na as w,Nb as Z,Oa as M,Rb as $,U as h,Ua as z,Wb as ee,X as W,Z as u,ac as te,bb as A,cb as q,da as e,ea as n,eb as G,fa as x,ja as H,ka as f,kc as oe,la as k,lc as re,mc as se,nc as le,o as j,oc as ae,p as S,ra as R,s as c,sa as Y,t as O,ta as L,tb as N,u as b,ua as F,va as l,wa as g,xa as Q,z as m,za as y}from"./chunk-4RWQR7BF.js";import"./chunk-WWX6BADO.js";var xe=(()=>{class t{constructor(){this.http=c(G),this.api=c(J),this.notificationService=c(U),this.dateService=c(V),this.reportsService=c(ge),this.decimalService=c(_e),this.expenses=h([]),this.loading_table=h(!1),this.user_balance=h({}),this.laoding_balance=h(!1),this.expenseNumber=h(null),this.from_date=h(this.dateService.getStartOfMonth()),this.to_date=h(this.dateService.getCurrentDate()),this.loadingTotalExpenses=h(!1),this.totalExpenses=z(()=>this.expenses().reduce((o,s)=>this.decimalService.add(o,s.total_value),0)),this.getExpenses()}getExpenses(){this.loading_table.set(!0);let o=this.from_date()?this.dateService.formatDate(this.from_date(),"YYYY-MM-DD"):null,s=this.to_date()?this.dateService.formatDate(this.to_date(),"YYYY-MM-DD"):null,i={expense:this.expenseNumber(),start:o,end:s};this.http.post(`${this.api.host()}/expense`,i).subscribe({next:r=>{this.expenses.set(r),this.loading_table.set(!1)},error:r=>{this.notificationService.showError(r.error,"home"),this.loading_table.set(!1)}})}static{this.\u0275fac=function(s){return new(s||t)}}static{this.\u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var ye=()=>[10,25,50],Ee=()=>["journal_number","journal_description","payment_date"];function Ce(t,v){t&1&&(e(0,"tr")(1,"th"),l(2,"Expense #"),n(),e(3,"th"),l(4,"Description"),n(),e(5,"th"),l(6,"Datetime"),n(),e(7,"th"),l(8,"total"),n(),e(9,"th",34),l(10,"Options"),n()())}function we(t,v){if(t&1){let o=H();e(0,"tr")(1,"td"),l(2),n(),e(3,"td"),l(4),n(),e(5,"td"),l(6),n(),e(7,"td"),l(8),w(9,"currency"),n(),e(10,"td")(11,"button",35),f("click",function(){let i=m(o).$implicit,r=k();return d(r.openEditDialog(i))}),n()()()}if(t&2){let o=v.$implicit;a(2),g(o.journal_number),a(2),g(o.journal_description),a(2),g(o.payment_date),a(2),g(M(9,4,o.total_value))}}function Me(t,v){if(t&1&&(e(0,"tr"),x(1,"td",36),e(2,"td"),l(3," Total: "),e(4,"span",37),l(5),w(6,"currency"),n()(),x(7,"td"),n()),t&2){let o=k();a(5),g(M(6,1,o.totalExpenses()))}}function Te(t,v){t&1&&(e(0,"tr")(1,"td",38),l(2,"No Records Found!"),n()())}var ve=(()=>{class t{constructor(){this.userService=c(X),this.expensesService=c(xe),this.dateService=c(V),this.expenses=this.expensesService.expenses,this.expenses_dialog_visible=!1,this.loading=this.expensesService.loading_table,this.loading_balance=this.expensesService.laoding_balance,this.dialog_mode="add",this.balance=this.expensesService.user_balance,this.userType=this.userService.userType,this.expenseNumber=this.expensesService.expenseNumber,this.from_date=this.expensesService.from_date,this.to_date=this.expensesService.to_date,this.loadingTotalExpenses=this.expensesService.loadingTotalExpenses,this.totalExpenses=this.expensesService.totalExpenses}submit(o){o.key==="Enter"&&this.submitSearch()}submitSearch(){this.expensesService.getExpenses()}clearSearch(){this.expensesService.expenseNumber.set(null),this.expensesService.from_date.set(null),this.expensesService.to_date.set(null)}addExpense(){this.dialog_mode="add",this.expenses_dialog_visible=!0}openEditDialog(o){this.dialog_mode="edit",this.selected_payment=o,this.expenses_dialog_visible=!0}closeDialog(){this.expenses_dialog_visible=!1}static{this.\u0275fac=function(s){return new(s||t)}}static{this.\u0275cmp=O({type:t,selectors:[["app-expenses-home"]],viewQuery:function(s,i){if(s&1&&R(D,5),s&2){let r;Y(r=L())&&(i.ct=r.first)}},decls:51,vars:33,consts:[["tableSearch",""],["ct",""],[1,"grid","m-1"],[1,"col-12"],[1,"grid"],[1,"col-12","lg:col-9"],["legend","Search Form",3,"toggleable"],[1,"col-12","md:col-6","lg:col-3"],["type","search","placeholder","Invoice #","pInputText","","spellcheck","false",1,"p-inputtext-sm","w-full",3,"ngModelChange","keyup","ngModel"],["styleClass","p-inputtext-sm w-full","dateFormat","yy-mm-dd","placeholder","From Date:",3,"ngModelChange","ngModel","showIcon","showClear","readonlyInput","showButtonBar"],[1,"col-12","md:col-6","lg:col-3","flex","align-items-end"],["type","submit","label","search","icon","pi pi-search","pRipple","","size","small","severity","success",1,"mr-2",3,"onClick","loading"],["icon","pi pi-times","label","Clear","styleClass","p-button-primary p-button-sm","severity","danger",3,"onClick","disabled"],[1,"col-12","lg:col-3","align-self-center"],[1,"surface-card","shadow-2","p-3","border-round"],[1,"flex","justify-content-between","mb-1"],[1,"block","text-500","font-medium","mb-3"],["loaderStyle","w-2rem h-2rem",3,"isLoading"],[1,"text-red-600","font-medium","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-red-100","border-round",2,"width","2.5rem","height","2.5rem"],[1,"pi","pi-dollar","text-red-600","text-xl"],[1,"grid","mb-2"],[1,"col-7","md:col-2"],[1,"p-input-icon-left","w-full"],[1,"pi","pi-search"],["id","globalFilter","pInputText","","type","search","placeholder","Search in results ...",1,"p-inputtext-sm","w-full",3,"input","value"],[1,"col-6","md:col-2"],["label","Add Expense","severity","success","icon","pi pi-plus","size","small","styleClass","w-full",3,"onClick"],["dataKey","order_id","styleClass","p-datatable-sm",3,"value","paginator","rows","showCurrentPageReport","rowsPerPageOptions","alwaysShowPaginator","loading","globalFilterFields","filterDelay"],["pTemplate","header"],["pTemplate","body"],["pTemplate","footer"],["pTemplate","emptymessage"],[3,"OnClose","OnSubmit","visible","selected_payment","dialog_mode"],["width","10%"],["size","small","pButton","","pRipple","","icon","fas fa-edit","severity","warning",3,"click"],["colspan","3"],[1,"text-red-600"],["colspan","11"]],template:function(s,i){if(s&1){let r=H();e(0,"div",2)(1,"div",3)(2,"p-card")(3,"div",4)(4,"div",5)(5,"p-fieldset",6)(6,"div",4)(7,"div",7)(8,"label"),l(9,"Expense #:"),n(),e(10,"input",8),C("ngModelChange",function(p){return m(r),E(i.expenseNumber,p)||(i.expenseNumber=p),d(p)}),f("keyup",function(p){return m(r),d(i.submit(p))}),n()(),e(11,"div",7)(12,"label"),l(13,"From Date:"),n(),e(14,"p-calendar",9),C("ngModelChange",function(p){return m(r),E(i.from_date,p)||(i.from_date=p),d(p)}),n()(),e(15,"div",7)(16,"label"),l(17,"To Date:"),n(),e(18,"p-calendar",9),C("ngModelChange",function(p){return m(r),E(i.to_date,p)||(i.to_date=p),d(p)}),n()(),e(19,"div",10)(20,"p-button",11),f("onClick",function(){return m(r),d(i.submitSearch())}),n(),e(21,"p-button",12),f("onClick",function(){return m(r),d(i.clearSearch())}),n()()()()(),e(22,"div",13)(23,"div",14)(24,"div",15)(25,"div")(26,"span",16),l(27,"Total Expenses"),n(),e(28,"text-with-loading",17)(29,"div",18),l(30),w(31,"currency"),n()()(),e(32,"div",19),x(33,"i",20),n()()()()()()(),e(34,"div",3)(35,"p-card")(36,"div",21)(37,"div",22)(38,"span",23),x(39,"i",24),e(40,"input",25,0),f("input",function(p){m(r);let be=F(45);return d(be.filterGlobal(p.target.value,"contains"))}),n()()(),e(42,"div",26)(43,"p-button",27),f("onClick",function(){return m(r),d(i.addExpense())}),n()()(),e(44,"p-table",28,1),W(46,Ce,11,0,"ng-template",29)(47,we,12,6,"ng-template",30)(48,Me,8,3,"ng-template",31)(49,Te,3,0,"ng-template",32),n()()()(),e(50,"expenses-dialog",33),f("OnClose",function(){return m(r),d(i.closeDialog())})("OnSubmit",function(){return m(r),d(i.submitSearch())}),n()}if(s&2){let r=F(45);a(5),u("toggleable",!1),a(5),y("ngModel",i.expenseNumber),a(4),y("ngModel",i.from_date),u("showIcon",!1)("showClear",!0)("readonlyInput",!0)("showButtonBar",!0),a(4),y("ngModel",i.to_date),u("showIcon",!1)("showClear",!0)("readonlyInput",!0)("showButtonBar",!0),a(2),u("loading",i.loading()),a(),u("disabled",i.loading()),a(7),u("isLoading",i.loadingTotalExpenses()),a(2),Q(" ",M(31,29,i.totalExpenses()||0)," "),a(10),u("value",r.filters.global==null?null:r.filters.global.value),a(4),u("value",i.expenses())("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",B(31,ye))("alwaysShowPaginator",!0)("loading",i.loading())("globalFilterFields",B(32,Ee))("filterDelay",0),a(6),u("visible",i.expenses_dialog_visible)("selected_payment",i.selected_payment)("dialog_mode",i.dialog_mode)}},dependencies:[Z,$,ee,oe,re,K,I,ie,D,de,he,le,T,A],styles:["[_nghost-%COMP%]  .p-fieldset .p-fieldset-content{padding-top:.5rem!important;padding-bottom:.5rem!important}[_nghost-%COMP%]  .p-fieldset .p-fieldset-legend{padding-top:.8rem!important;padding-bottom:.8rem!important}[_nghost-%COMP%]  .p-card .p-card-content{padding:.75rem 0!important}"]})}}return t})();var De=[{path:"",component:ve}],Se=(()=>{class t{static{this.\u0275fac=function(s){return new(s||t)}}static{this.\u0275mod=b({type:t})}static{this.\u0275inj=S({imports:[N.forChild(De),N]})}}return t})();var bt=(()=>{class t{static{this.\u0275fac=function(s){return new(s||t)}}static{this.\u0275mod=b({type:t})}static{this.\u0275inj=S({imports:[q,te,Se,se,I,ne,ue,ce,me,fe,ae,pe,T]})}}return t})();export{bt as ExpensesModule};
