import{a as _e}from"./chunk-IETW5CIO.js";import{a as he}from"./chunk-FFDJZOVM.js";import{a as fe}from"./chunk-CM4NZ263.js";import{a as ne}from"./chunk-2IAGA2KS.js";import{b as de}from"./chunk-JTH5INRY.js";import{b as pe}from"./chunk-MAZQTZTP.js";import{i as ae,j as le,l as ce,m as ue,q as me}from"./chunk-CGG3ICFJ.js";import{Aa as F,B as v,Ba as h,Bc as re,Cc as se,Db as j,Gb as z,Hb as G,Jb as L,K as _,Lb as f,Nb as W,Ob as P,R as b,Ra as V,Ta as R,Tb as U,U as M,Ub as $,Vb as J,W as a,Wb as K,Xb as X,Yb as Y,Z as k,Zb as Z,_a as A,aa as n,ab as Q,ba as s,ca as y,ga as D,ha as m,hc as ee,ia as u,ic as te,jc as ie,kc as oe,m as E,na as S,oa as x,p as r,pa as w,q as T,ra as l,ub as H,v as N,va as I,w as p,wa as q,x as d,xa as O,za as B}from"./chunk-D4YDXMC2.js";var be=(()=>{class i{constructor(){this.http=r(Q),this.api=r(G),this.notificationService=r(z),this.cashBalanceService=r(ne),this.loading=b(!1),this.dialogVisible=b(!1),this.submitEmitted=b(null)}addManualDebt(e){this.loading.set(!0),this.http.post(`${this.api.host()}/customers/debts`,e).subscribe({next:t=>{this.notificationService.showSuccess("Debt added successfully!","home")},error:t=>{this.loading.set(!1),this.notificationService.showError(t.error,"home")},complete:()=>{this.loading.set(!1),this.submitEmitted.set({action:"add"}),this.dialogVisible.set(!this.dialogVisible())}})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=E({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var ve=["amountInput"],ye=["customerDropdown"],De=()=>({width:"75vw"}),Se=()=>({"1199px":"85vw","575px":"95vw"}),g=i=>({"ng-invalid ng-dirty":i});function xe(i,ge){if(i&1){let e=D();n(0,"form",4),m("ngSubmit",function(){p(e);let o=u();return d(o.submit())}),n(1,"div",5)(2,"div",6)(3,"div",7)(4,"label",8),l(5,"Customer"),n(6,"span",9),l(7," *"),s()(),n(8,"p-dropdown",10),m("onChange",function(){p(e);let o=u();return d(o.getCustomerBalance())}),s()()(),n(9,"div",6)(10,"label"),l(11,"Option"),n(12,"span",11),l(13,"*"),s()(),y(14,"p-dropdown",12),s(),n(15,"div",6)(16,"div",7)(17,"label",13),l(18,"Amount"),n(19,"span",9),l(20," *"),s()(),n(21,"p-inputNumber",14,0),m("onFocus",function(o){p(e);let c=u();return d(c.selectInput(o))}),s()()(),n(23,"div",15)(24,"label"),l(25,"Notes"),n(26,"span",9),l(27," *"),s()(),y(28,"input",16),s()()()}if(i&2){let e=u();a("formGroup",e.correctDebtForm),_(8),a("options",e.accounts)("required",!0)("filter",!0)("showClear",!0)("autoOptionFocus",!1)("ngClass",h(17,g,(e.selected_account==null?null:e.selected_account.invalid)&&((e.selected_account==null?null:e.selected_account.dirty)||(e.selected_account==null?null:e.selected_account.touched)||e.submitted))),_(6),a("autoOptionFocus",!1)("options",e.transactionOptions)("required",!0)("ngClass",h(19,g,(e.transaction_type==null?null:e.transaction_type.invalid)&&((e.transaction_type==null?null:e.transaction_type.dirty)||(e.transaction_type==null?null:e.transaction_type.touched)||e.submitted))),_(7),a("required",!0)("autofocus",e.selected_account)("step",1)("min",0)("ngClass",h(21,g,(e.amount==null?null:e.amount.invalid)&&((e.amount==null?null:e.amount.dirty)||(e.amount==null?null:e.amount.touched)||e.submitted))),_(7),a("ngClass",h(23,g,(e.transaction_notes==null?null:e.transaction_notes.invalid)&&((e.transaction_notes==null?null:e.transaction_notes.dirty)||(e.transaction_notes==null?null:e.transaction_notes.touched)||e.submitted)))}}function we(i,ge){if(i&1){let e=D();n(0,"p-button",17),m("onClick",function(){p(e);let o=u();return d(o.closeDialog())}),s(),n(1,"p-button",18),m("onClick",function(){p(e);let o=u();return d(o.submit())}),s()}if(i&2){let e=u();a("disabled",e.loading()),_(),a("loading",e.loading())}}var at=(()=>{class i{ngOnChanges(e){e.visible&&e.visible.currentValue&&(this.correctDebtForm.patchValue({selected_account:this.account,amount:0}),this.location==="home"&&this.correctDebtForm.patchValue({transaction_type:"ADD"}),this.getCustomerBalance())}constructor(){this.visible=!1,this.accounts=[],this.dialog_mode="add",this.type="customer",this.location="",this.onClose=new v,this.onSubmit=new v,this.correctDebtService=r(be),this.customersService=r(_e),this.confirmationService=r(H),this.dateService=r(fe),this.decimalService=r(he),this.fb=r(X),this.stockService=r(pe),this.submitted=!1,this.loading=this.correctDebtService.loading,this.exchangeRate=this.stockService.exchangeRate,this.transactionOptions=[{name:"Add Debt",value:"ADD"},{name:"Remove Debt",value:"REMOVE"}],this.correctDebtForm=this.fb.group({selected_account:[null,f.required],transaction_datetime:[this.dateService.getFullDatetime()],transaction_type:[{value:null,disabled:!1},f.required],amount:[0,[f.required,f.min(.1)]],transaction_notes:[null,f.required],exchange_rate:[this.exchangeRate().rate_value]}),this.customer_balance_loading=this.customersService.signal_balanceLoading,this.customer_balance=this.customersService.customersTotalDebts$,V(()=>{this.correctDebtService.dialogVisible(),this.onClose.emit()}),V(()=>{let e=this.correctDebtService.submitEmitted();this.onSubmit.emit()})}get selected_account(){return this.correctDebtForm.get("selected_account")}get transaction_type(){return this.correctDebtForm.get("transaction_type")}get amount(){return this.correctDebtForm.get("amount")}get transaction_notes(){return this.correctDebtForm.get("transaction_notes")}selectInput(e){e.target.select()}closeDialog(){this.visible=!1,this.submitted=!1,this.correctDebtForm.reset({amount:0}),this.onClose.emit()}submit(){this.submitted=!0,this.correctDebtForm.valid&&(this.correctDebtForm.patchValue({transaction_datetime:this.dateService.getFullDatetime()}),this.correctDebtService.addManualDebt(this.correctDebtForm.value))}getCustomerBalance(){let e=this.correctDebtForm.controls.selected_account.value;e?this.customersService.getAccountTotalBalance(e):this.customersService.customersTotalDebts$.set({id:0,balance:"0"})}calculateNewBalance(e=0,t=0){return e=parseFloat(e),this.decimalService.subtract(e,t)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=T({type:i,selectors:[["correct-debt"]],viewQuery:function(t,o){if(t&1&&(S(ve,5),S(ye,5)),t&2){let c;x(c=w())&&(o.amountInput=c.first),x(c=w())&&(o.customerDropdown=c.first)}},inputs:{visible:"visible",accounts:"accounts",account:"account",selected_payment:"selected_payment",dialog_mode:"dialog_mode",type:"type",location:"location"},outputs:{onClose:"onClose",onSubmit:"onSubmit"},standalone:!0,features:[N,B],decls:3,vars:10,consts:[["amountInput",""],["position","top","header","Modify Debts","styleClass","p-fluid",3,"visibleChange","onHide","modal","visible","breakpoints","closeOnEscape","closable","maximizable"],["pTemplate","content"],["pTemplate","footer"],[3,"ngSubmit","formGroup"],[1,"formgrid","grid"],[1,"field","col-12","md:col-3"],[1,"flex","flex-column","gap-2"],["for","customer"],[1,"text-red-500"],["styleClass","p-inputtext-sm","id","customer","appendTo","body","optionLabel","name","optionValue","account_id","placeholder","Select Customer","formControlName","selected_account","filterBy","name",3,"onChange","options","required","filter","showClear","autoOptionFocus","ngClass"],[1,"text-red-600"],["styleClass","p-inputtext-sm","scrollHeight","400px","appendTo","body","formControlName","transaction_type","optionLabel","name","optionValue","value","placeholder","transaction type ...",3,"autoOptionFocus","options","required","ngClass"],["for","amount"],["styleClass","input-align-center","formControlName","amount","mode","currency","currency","USD","locale","en-US",1,"p-inputtext-sm",3,"onFocus","required","autofocus","step","min","ngClass"],[1,"field","col-12","md:col-6"],["type","text","spellcheck","false","pInputText","","formControlName","transaction_notes",1,"w-full","p-inputtext-sm",3,"ngClass"],["pRipple","","label","Cancel","icon","pi pi-times","severity","secondary","styleClass","w-full mt-2 md:w-auto md:ml-2","size","small",3,"onClick","disabled"],["pRipple","","label","Finish","icon","pi pi-check","severity","success","styleClass","w-full mt-2 md:w-auto md:ml-2","size","small",3,"onClick","loading"]],template:function(t,o){t&1&&(n(0,"p-dialog",1),O("visibleChange",function(C){return q(o.visible,C)||(o.visible=C),C}),m("onHide",function(){return o.closeDialog()}),M(1,xe,29,25,"ng-template",2)(2,we,2,2,"ng-template",3),s()),t&2&&(k(F(8,De)),a("modal",!0),I("visible",o.visible),a("breakpoints",F(9,Se))("closeOnEscape",!1)("closable",!0)("maximizable",!0))},dependencies:[se,re,j,te,ee,oe,ie,ue,ce,le,ae,A,R,Y,U,L,W,P,K,Z,$,J,me,de]})}}return i})();export{at as a};
