import{a as ht,b as bt,c as gt}from"./chunk-VTF3NHYG.js";import{a as rt,b as lt}from"./chunk-RLNRQHCM.js";import{b as ct}from"./chunk-C7D56P25.js";import"./chunk-CF53W43R.js";import{a as dt,b as _t,d as ft}from"./chunk-FMOYRNA2.js";import{b as ut}from"./chunk-ZAV7LROA.js";import{b as Ke}from"./chunk-FBBXAICZ.js";import{a as ye}from"./chunk-OPS47VDF.js";import{b as ot}from"./chunk-2FZ3X7AU.js";import{a as nt}from"./chunk-FFDJZOVM.js";import{a as Ce}from"./chunk-CM4NZ263.js";import{a as W}from"./chunk-Q67CXJ4Z.js";import{a as at}from"./chunk-V4YX5ONG.js";import"./chunk-2IAGA2KS.js";import"./chunk-JHV34F2Y.js";import{a as it,b as Se}from"./chunk-JTH5INRY.js";import"./chunk-22DMWHJU.js";import{a as mt}from"./chunk-5G6QHU5I.js";import{a as st,b as pt}from"./chunk-R6KW2DC6.js";import{b as tt}from"./chunk-MAZQTZTP.js";import"./chunk-2LVZO5F4.js";import"./chunk-CHNOQELU.js";import{a as ze,b as Qe}from"./chunk-ZTKZ5H54.js";import{E as et,i as fe,j as he,l as Ue,m as be,p as Je,q as ge,t as O,w as Xe,x as Ze}from"./chunk-CGG3ICFJ.js";import{Aa as T,B as we,Ba as k,Bc as de,Ca as J,Cc as _e,Db as j,Gb as je,Hb as qe,J as Re,Ja as B,Jb as te,K as a,Ka as R,Lb as I,Nb as q,Ob as ie,Pb as Le,R as K,Ra as Fe,Rb as L,Sb as Oe,Ta as A,Tb as ne,U as S,Ub as oe,Va as X,Vb as re,W as s,Wb as le,Xb as We,Yb as ae,Z as U,Za as P,Zb as se,_ as Ne,_a as Z,a as H,aa as n,ab as Pe,ba as o,bc as Ye,ca as g,ec as He,fc as Ge,ga as C,gc as $e,ha as c,hc as pe,ia as u,ic as ce,jc as me,kc as ue,m as ke,n as G,na as F,oa as E,p as _,pa as V,pb as Ee,q as N,qa as Te,r as $,ra as l,sa as M,ta as v,ub as ee,v as Be,va as D,w as f,wa as x,x as h,xa as w,za as Ae}from"./chunk-D4YDXMC2.js";import{g as Ie}from"./chunk-TSRGIXR5.js";var St=(()=>{class i{constructor(){this.http=_(Pe),this.api=_(qe),this.notificationService=_(je),this.loading=K(!1),this.dialogVisible=K(!1),this.submitEmitted=K(null)}addManualDebt(e){this.loading.set(!0),this.http.post(`${this.api.host()}/suppliers/debts`,e).subscribe({next:r=>{this.notificationService.showSuccess("Debt added successfully!","home")},error:r=>{this.loading.set(!1),this.notificationService.showError(r.error,"home")},complete:()=>{this.loading.set(!1),this.submitEmitted.set({action:"add"}),this.dialogVisible.set(!this.dialogVisible())}})}static{this.\u0275fac=function(r){return new(r||i)}}static{this.\u0275prov=ke({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var jt=["amountInput"],qt=["supplierDropdown"],Lt=()=>({width:"75vw"}),Ot=()=>({"1199px":"85vw","575px":"95vw"}),ve=i=>({"ng-invalid ng-dirty":i});function Wt(i,m){if(i&1){let e=C();n(0,"form",4),c("ngSubmit",function(){f(e);let t=u();return h(t.submit())}),n(1,"div",5)(2,"div",6)(3,"div",7)(4,"label",8),l(5,"Customer"),n(6,"span",9),l(7," *"),o()(),n(8,"p-dropdown",10),c("onChange",function(){f(e);let t=u();return h(t.getSupplierBalance())}),o()()(),n(9,"div",6)(10,"label"),l(11,"Option"),n(12,"span",11),l(13,"*"),o()(),g(14,"p-dropdown",12),o(),n(15,"div",6)(16,"div",7)(17,"label",13),l(18,"Amount"),n(19,"span",9),l(20," *"),o()(),n(21,"p-inputNumber",14,0),c("onFocus",function(t){f(e);let p=u();return h(p.selectInput(t))}),o()()(),n(23,"div",15)(24,"label"),l(25,"Notes"),n(26,"span",9),l(27," *"),o()(),g(28,"input",16),o()()()}if(i&2){let e=u();s("formGroup",e.correctDebtForm),a(8),s("options",e.accounts)("required",!0)("filter",!0)("showClear",!0)("autoOptionFocus",!1)("ngClass",k(17,ve,(e.selected_account==null?null:e.selected_account.invalid)&&((e.selected_account==null?null:e.selected_account.dirty)||(e.selected_account==null?null:e.selected_account.touched)||e.submitted))),a(6),s("autoOptionFocus",!1)("options",e.transactionOptions)("required",!0)("ngClass",k(19,ve,(e.transaction_type==null?null:e.transaction_type.invalid)&&((e.transaction_type==null?null:e.transaction_type.dirty)||(e.transaction_type==null?null:e.transaction_type.touched)||e.submitted))),a(7),s("required",!0)("autofocus",e.selected_account)("step",1)("min",0)("ngClass",k(21,ve,(e.amount==null?null:e.amount.invalid)&&((e.amount==null?null:e.amount.dirty)||(e.amount==null?null:e.amount.touched)||e.submitted))),a(7),s("ngClass",k(23,ve,(e.transaction_notes==null?null:e.transaction_notes.invalid)&&((e.transaction_notes==null?null:e.transaction_notes.dirty)||(e.transaction_notes==null?null:e.transaction_notes.touched)||e.submitted)))}}function zt(i,m){if(i&1){let e=C();n(0,"p-button",17),c("onClick",function(){f(e);let t=u();return h(t.closeDialog())}),o(),n(1,"p-button",18),c("onClick",function(){f(e);let t=u();return h(t.submit())}),o()}if(i&2){let e=u();s("disabled",e.loading()),a(),s("loading",e.loading())}}var De=(()=>{class i{ngOnChanges(e){e.visible&&e.visible.currentValue&&(this.correctDebtForm.patchValue({selected_account:this.account,amount:0}),this.location==="home"&&this.correctDebtForm.patchValue({transaction_type:"ADD"}),this.getSupplierBalance())}constructor(){this.visible=!1,this.accounts=[],this.dialog_mode="add",this.type="supplier",this.location="",this.onClose=new we,this.onSubmit=new we,this.supplierDebtService=_(St),this.suppliersService=_(W),this.confirmationService=_(ee),this.dateService=_(Ce),this.decimalService=_(nt),this.fb=_(We),this.stockService=_(tt),this.submitted=!1,this.loading=this.supplierDebtService.loading,this.exchangeRate=this.stockService.exchangeRate,this.transactionOptions=[{name:"Add Debt",value:"ADD"},{name:"Remove Debt",value:"REMOVE"}],this.correctDebtForm=this.fb.group({selected_account:[null,I.required],transaction_datetime:[this.dateService.getFullDatetime()],transaction_type:[{value:null,disabled:!1},I.required],amount:[0,[I.required,I.min(.1)]],transaction_notes:[null,I.required],exchange_rate:[this.exchangeRate().rate_value]}),this.supplier_balance_loading=this.suppliersService.signal_balanceLoading,this.supplier_balance=this.suppliersService.supplierBalance$,Fe(()=>{this.supplierDebtService.dialogVisible(),this.onClose.emit()}),Fe(()=>{this.supplierDebtService.submitEmitted(),this.onSubmit.emit()})}get selected_account(){return this.correctDebtForm.get("selected_account")}get transaction_type(){return this.correctDebtForm.get("transaction_type")}get amount(){return this.correctDebtForm.get("amount")}get transaction_notes(){return this.correctDebtForm.get("transaction_notes")}selectInput(e){e.target.select()}closeDialog(){this.visible=!1,this.submitted=!1,this.correctDebtForm.reset({amount:0}),this.onClose.emit()}submit(){this.submitted=!0,this.correctDebtForm.valid&&(this.correctDebtForm.patchValue({transaction_datetime:this.dateService.getFullDatetime()}),this.supplierDebtService.addManualDebt(this.correctDebtForm.value))}getSupplierBalance(){let e=this.correctDebtForm.controls.selected_account.value;e?this.suppliersService.getAccountTotalBalance(e):this.suppliersService.supplierTotalDebts$.set({id:0,balance:"0"})}calculateNewBalance(e=0,r=0){return e=parseFloat(e),this.decimalService.subtract(e,r)}static{this.\u0275fac=function(r){return new(r||i)}}static{this.\u0275cmp=N({type:i,selectors:[["correct-supplier-debt"]],viewQuery:function(r,t){if(r&1&&(F(jt,5),F(qt,5)),r&2){let p;E(p=V())&&(t.amountInput=p.first),E(p=V())&&(t.supplierDropdown=p.first)}},inputs:{visible:"visible",accounts:"accounts",account:"account",selected_payment:"selected_payment",dialog_mode:"dialog_mode",type:"type",location:"location"},outputs:{onClose:"onClose",onSubmit:"onSubmit"},standalone:!0,features:[Be,Ae],decls:3,vars:10,consts:[["amountInput",""],["position","top","header","Modify Debts","styleClass","p-fluid",3,"visibleChange","onHide","modal","visible","breakpoints","closeOnEscape","closable","maximizable"],["pTemplate","content"],["pTemplate","footer"],[3,"ngSubmit","formGroup"],[1,"formgrid","grid"],[1,"field","col-12","md:col-3"],[1,"flex","flex-column","gap-2"],["for","customer"],[1,"text-red-500"],["styleClass","p-inputtext-sm","id","customer","appendTo","body","optionLabel","name","optionValue","account_id","placeholder","Select Customer","formControlName","selected_account","filterBy","name",3,"onChange","options","required","filter","showClear","autoOptionFocus","ngClass"],[1,"text-red-600"],["styleClass","p-inputtext-sm","scrollHeight","400px","appendTo","body","formControlName","transaction_type","optionLabel","name","optionValue","value","placeholder","transaction type ...",3,"autoOptionFocus","options","required","ngClass"],["for","amount"],["styleClass","input-align-center","formControlName","amount","mode","currency","currency","USD","locale","en-US",1,"p-inputtext-sm",3,"onFocus","required","autofocus","step","min","ngClass"],[1,"field","col-12","md:col-6"],["type","text","spellcheck","false","pInputText","","formControlName","transaction_notes",1,"w-full","p-inputtext-sm",3,"ngClass"],["pRipple","","label","Cancel","icon","pi pi-times","severity","secondary","styleClass","w-full mt-2 md:w-auto md:ml-2","size","small",3,"onClick","disabled"],["pRipple","","label","Finish","icon","pi pi-check","severity","success","styleClass","w-full mt-2 md:w-auto md:ml-2","size","small",3,"onClick","loading"]],template:function(r,t){r&1&&(n(0,"p-dialog",1),w("visibleChange",function(d){return x(t.visible,d)||(t.visible=d),d}),c("onHide",function(){return t.closeDialog()}),S(1,Wt,29,25,"ng-template",2)(2,zt,2,2,"ng-template",3),o()),r&2&&(U(T(8,Lt)),s("modal",!0),D("visible",t.visible),s("breakpoints",T(9,Ot))("closeOnEscape",!1)("closable",!0)("maximizable",!0))},dependencies:[_e,de,j,ce,pe,ue,me,be,Ue,he,fe,Z,A,ae,ne,te,q,ie,le,se,oe,re,ge,Se]})}}return i})();var Ht=["dt"],Gt=()=>({"min-width":"45rem"}),$t=(i,m)=>({"text-300":i,"text-red-600":m}),Kt=(i,m)=>({"text-300":i,"text-green-600":m}),Ut=(i,m)=>({"text-green-600":i,"text-red-600":m});function Jt(i,m){i&1&&(n(0,"tr"),g(1,"th"),n(2,"th"),l(3,"Date"),o(),n(4,"th"),l(5,"#"),o(),n(6,"th"),l(7,"Description"),o(),n(8,"th"),l(9,"Notes"),o(),n(10,"th"),l(11,"Debit"),o(),n(12,"th"),l(13,"Credit"),o(),n(14,"th"),l(15,"Balance"),o()())}function Xt(i,m){if(i&1&&g(0,"i",24),i&2){let e=u(),r=e.$implicit,t=e.expanded;Ne(t?"pi pi-chevron-down":"pi pi-chevron-right"),s("pRowToggler",r)}}function Zt(i,m){if(i&1&&(n(0,"tr")(1,"td"),S(2,Xt,1,3,"i",21),o(),n(3,"td"),l(4),o(),n(5,"td"),l(6),o(),n(7,"td"),g(8,"p-tag",22),o(),n(9,"td"),l(10),o(),n(11,"td",23),l(12),B(13,"currency"),o(),n(14,"td",23),l(15),B(16,"currency"),o(),n(17,"td"),l(18),B(19,"currency"),o()()),i&2){let e=m.$implicit,r=m.rowIndex,t=u(2);a(2),s("ngIf",e.order_id),a(2),v(" ",e.journal_date||"Before "+t.startDate," "),a(2),M(e.journal_number||"---"),a(2),s("value",e.journal_description)("severity",t.getSeverity(e.journal_description)),a(2),M(e.journal_notes||"---"),a(),s("ngClass",J(17,$t,e.debit==0,e.debit!=0)),a(),v(" ",R(13,11,e.debit)," "),a(2),s("ngClass",J(20,Kt,e.credit==0,e.credit!=0)),a(),v(" ",R(16,13,e.credit)," "),a(3),v(" ",R(19,15,t.balances[r])," ")}}function ei(i,m){i&1&&(n(0,"tr")(1,"th"),l(2,"Description"),o(),n(3,"th"),l(4,"Purchased Price"),o(),n(5,"th"),l(6,"Quantity"),o(),n(7,"th"),l(8,"Total Price"),o()())}function ti(i,m){if(i&1&&(n(0,"tr",27)(1,"td"),l(2),o(),n(3,"td"),l(4),B(5,"currency"),o(),n(6,"td"),l(7),o(),n(8,"td"),l(9),B(10,"currency"),o()()),i&2){let e=m.$implicit;a(2),v(" ",e.product_name," "),a(2),v(" ",R(5,4,e.unit_cost_usd)," "),a(3),M(e.quantity),a(2),v(" ",R(10,6,e.unit_cost_usd*e.quantity)," ")}}function ii(i,m){if(i&1&&(n(0,"tr"),g(1,"td"),n(2,"td",25)(3,"p-table",26),S(4,ei,9,0,"ng-template",17)(5,ti,11,8,"ng-template",18),o()(),g(6,"td"),o()),i&2){let e=m.$implicit,r=u(2);a(3),s("value",r.getFilteredDetails(e))}}function ni(i,m){if(i&1&&(n(0,"tr"),g(1,"td",28),n(2,"td"),l(3,"Balance Due"),o(),n(4,"td",29),l(5),B(6,"currency"),o()()),i&2){let e=u(2);a(4),s("ngClass",J(4,Ut,e.balances[e.balances.length-1]<0,e.balances[e.balances.length-1]>0)),a(),v(" ",R(6,2,e.balances[e.balances.length-1])," ")}}function oi(i,m){if(i&1){let e=C();n(0,"div",1),g(1,"p-divider"),n(2,"p-table",16),c("onRowExpand",function(){f(e);let t=u();return h(t.onRowExpand())}),S(3,Jt,16,0,"ng-template",17)(4,Zt,20,23,"ng-template",18)(5,ii,7,1,"ng-template",19)(6,ni,7,7,"ng-template",20),o()()}if(i&2){let e=u();a(2),s("value",e.data)("tableStyle",T(3,Gt))("loading",e.tableLoading())}}var xt=(()=>{class i{constructor(){this.suppliersService=_(W),this.dateService=_(Ce),this.historyService=_(at),this.currencyPipe=_(P),this.subscriptions=new H,this.suppliers=this.suppliersService.suppliers,this.startDate=this.dateService.getStartOfMonth(),this.endDate=this.dateService.getCurrentDate(),this.balances=[],this.balances_lbp=[],this.show_dollar=!0,this.data=[],this.paymentDialogVisible=!1,this.suppliersLoading=this.suppliersService.suppliersLoading,this.tableLoading=this.suppliersService.tableLoading,this.selectedPurchaseItems=this.historyService.selectedPurchaseItems,this.correctDebtDialogVisible=!1}ngOnInit(){this.subscriptions.add(this.suppliersService.supplierBalance$.subscribe(e=>{if(this.data=e,e.length>0){this.balances=[],this.balances_lbp=[],this.balances[0]=parseFloat(e[0].balance),this.balances_lbp[0]=parseFloat(e[0].debit_lbp)-parseFloat(e[0].credit_lbp);for(let r=1;r<e.length;r++)this.balances[r]=this.balances[r-1]+parseFloat(e[r].debit)-parseFloat(e[r].credit),this.balances_lbp[r]=this.balances_lbp[r-1]+parseFloat(e[r].debit_lbp)-parseFloat(e[r].credit_lbp);this.onRowExpand()}else this.balances=[],this.balances_lbp=[]}))}ngOnDestroy(){this.subscriptions.unsubscribe(),this.suppliersService.supplierBalance$.next([])}startDateChanged(){this.startDate=this.dateService.formatDate(this.startDate),this.resetTable(),this.getStatements()}endDateChanged(){this.endDate=this.dateService.formatDate(this.endDate),this.resetTable(),this.getStatements()}accountChanged(){this.resetTable(),this.getStatements()}getStatements(){this.selectedSupplier&&this.startDate&&this.endDate&&this.suppliersService.getSupplierTransactions(this.selectedSupplier,this.startDate,this.endDate)}resetTable(){this.data=[],this.balances=[],this.balances_lbp=[]}getSeverity(e){switch(e){case"Supplier Payment":return"danger";case"Supply":return"success";case"Manual Transaction":return"warning";default:return"contrast"}}onRowExpand(){let e=this.data.filter(r=>r.order_id!=null).map(r=>r.order_id);this.data.length>1&&this.historyService.fetchPurchaseItemsById(e)}getFilteredDetails(e){return this.selectedPurchaseItems().filter(r=>r.order_id_fk===e.order_id)}formatCurrency(e){return this.currencyPipe.transform(e,"USD","symbol","1.2-2")||""}exportToPDF(){let e=new ht;e.addFileToVFS("/fonts/cairo-variable.txt","cairo"),e.addFont("/fonts/Cairo-Variable.ttf","Cairo","normal");let r=e.internal.pageSize.width,t=this.suppliers().find(b=>b.account_id===this.selectedSupplier),p=this.dateService.getCurrentDatetime();e.setFontSize(14);let d="Statement of account",y=e.getTextWidth(d);e.text(d,(r-y)/2,10),e.setFontSize(10),e.text(`${t?.name}`,10,20),e.setFontSize(9);let Ve=this.dateService.formatDate(this.startDate,"YYYY-MM-DD"),Ft=this.dateService.formatDate(this.endDate,"YYYY-MM-DD");e.text(`Start Date: ${Ve}`,10,30),e.text(`End Date: ${Ft}`,10,35),e.text(`Generated on: ${p}`,150,30);let Et=["Datetime","Transaction #","Description","Debit","Credit","Balance"],Vt=this.data.map((b,xe)=>[b.journal_date?this.dateService.formatDate(b.journal_date,"YYYY-MM-DD"):`Before ${Ve}`,b.journal_number||"---",b.journal_description||"---",{hiddenValue:b.order_id||null,content:this.formatCurrency(b.debit),styles:{textColor:b.debit==0?"#D1D5DB":"#D9342B"}},{content:this.formatCurrency(b.credit),styles:{textColor:b.credit==0?"#D1D5DB":"#1DA750"}},this.formatCurrency(this.balances[xe])]),Y=[];Vt.forEach((b,xe)=>{if(Y.push(b),xe>0&&b[3].hiddenValue){let Bt={order_id:b[3].hiddenValue},Rt=this.getFilteredDetails(Bt);Y.push([{content:"",styles:{fillColor:"white",border:"1px solid black"}},{content:"Description",styles:{fontStyle:"bold",fontSize:7}},{content:"Unit Price",styles:{fontStyle:"bold",fontSize:7}},{content:"Qty",styles:{fontStyle:"bold",fontSize:7}},{content:"Total",styles:{fontStyle:"bold",fontSize:7}},{content:"",styles:{fillColor:"white"}}]),Rt.forEach(z=>{Y.push([{content:"",styles:{fillColor:"white"}},{content:z.product_name,styles:{fillColor:"#e5e7eb",fontSize:6,font:"Cairo"}},{content:this.formatCurrency(z.unit_cost_usd),styles:{fillColor:"#e5e7eb",fontSize:7}},{content:z.quantity,styles:{fillColor:"#e5e7eb",fontSize:7}},{content:this.formatCurrency(z.unit_cost_usd*z.quantity),styles:{fillColor:"#e5e7eb",fontSize:7}},{content:"",styles:{fillColor:"white"}}])})}});let Mt=[{content:"",colSpan:4},"Due",{content:`${this.formatCurrency(this.balances[this.balances.length-1])}`}];bt(e,{startY:40,head:[Et],body:Y,foot:[Mt],styles:{halign:"center",fontSize:8},headStyles:{fillColor:"F9FAFB",textColor:"#4B5563"},footStyles:{fillColor:"F9FAFB",textColor:"#4B5563"}}),e.setFontSize(10);let It=e.lastAutoTable.finalY||20,Me=`Balance Due: ${this.formatCurrency(this.balances[this.balances.length-1])}`,kt=e.getTextWidth(Me);e.text(Me,r-kt-15,It+10),e.save(`${t?.name}-statement.pdf`)}static{this.\u0275fac=function(r){return new(r||i)}}static{this.\u0275cmp=N({type:i,selectors:[["app-statements"]],viewQuery:function(r,t){if(r&1&&F(Ht,5),r&2){let p;E(p=V())&&(t.dt=p.first)}},decls:30,vars:25,consts:[[1,"grid","m-1"],[1,"col-12"],[1,"grid"],[1,"col-12","md:col-2"],[1,"flex","flex-column","gap-1"],["optionLabel","name","optionValue","account_id","placeholder","Select Supplier","styleClass","p-inputtext-sm",3,"ngModelChange","onChange","options","ngModel","showClear","loading","autoOptionFocus"],["styleClass","p-inputtext-sm w-full","dateFormat","yy-mm-dd",3,"ngModelChange","onSelect","ngModel","showIcon","iconDisplay","readonlyInput"],[1,"col-6","md:col-1","mt-auto"],["label","Refresh","size","small","icon","pi pi-search","styleClass","w-full",3,"onClick","loading","disabled"],["label","Export","severity","help","size","small","icon","pi pi-file-pdf","styleClass","w-full",3,"onClick","disabled"],[1,"col-6","md:col-2","mt-auto"],["label","Payment","size","small","icon","pi pi-dollar","severity","success","styleClass","w-full",3,"onClick","disabled"],["label","Correct Debt","size","small","icon","pi pi-dollar","severity","warning","styleClass","w-full",3,"onClick","disabled"],["class","col-12",4,"ngIf"],["type","supplier",3,"onClose","onSubmit","visible","accounts","selected_account"],[3,"onClose","onSubmit","visible","accounts","account"],["dataKey","journal_id","styleClass","p-datatable-sm",1,"ledger_table",3,"onRowExpand","value","tableStyle","loading"],["pTemplate","header"],["pTemplate","body"],["pTemplate","rowexpansion"],["pTemplate","footer"],["style","cursor: pointer",3,"class","pRowToggler",4,"ngIf"],[3,"value","severity"],[3,"ngClass"],[2,"cursor","pointer",3,"pRowToggler"],["colspan","5"],["styleClass","p-datatable-sm",3,"value"],[1,"bg-success"],["colspan","6"],[1,"font-bold",3,"ngClass"]],template:function(r,t){r&1&&(n(0,"div",0)(1,"div",1)(2,"p-card")(3,"div",2)(4,"div",3)(5,"div",4)(6,"label"),l(7,"Select Supplier:"),o(),n(8,"p-dropdown",5),w("ngModelChange",function(d){return x(t.selectedSupplier,d)||(t.selectedSupplier=d),d}),c("onChange",function(){return t.accountChanged()}),o()()(),n(9,"div",3)(10,"div",4)(11,"label"),l(12,"Start Date:"),o(),n(13,"p-calendar",6),w("ngModelChange",function(d){return x(t.startDate,d)||(t.startDate=d),d}),c("onSelect",function(){return t.startDateChanged()}),o()()(),n(14,"div",3)(15,"div",4)(16,"label"),l(17,"End Date:"),o(),n(18,"p-calendar",6),w("ngModelChange",function(d){return x(t.endDate,d)||(t.endDate=d),d}),c("onSelect",function(){return t.endDateChanged()}),o()()(),n(19,"div",7)(20,"p-button",8),c("onClick",function(){return t.getStatements()}),o()(),n(21,"div",7)(22,"p-button",9),c("onClick",function(){return t.exportToPDF()}),o()(),n(23,"div",10)(24,"p-button",11),c("onClick",function(){return t.paymentDialogVisible=!0}),o()(),n(25,"div",10)(26,"p-button",12),c("onClick",function(){return t.correctDebtDialogVisible=!0}),o()(),S(27,oi,7,4,"div",13),o()()(),n(28,"supplier-payment-dialog",14),c("onClose",function(){return t.paymentDialogVisible=!1})("onSubmit",function(){return t.getStatements()}),o()(),n(29,"correct-supplier-debt",15),c("onClose",function(){return t.correctDebtDialogVisible=!1})("onSubmit",function(){return t.getStatements()}),o()),r&2&&(a(8),s("options",t.suppliers()),D("ngModel",t.selectedSupplier),s("showClear",!0)("loading",t.suppliersLoading())("autoOptionFocus",!1),a(5),D("ngModel",t.startDate),s("showIcon",!0)("iconDisplay","input")("readonlyInput",!0),a(5),D("ngModel",t.endDate),s("showIcon",!0)("iconDisplay","input")("readonlyInput",!0),a(2),s("loading",t.tableLoading())("disabled",!t.selectedSupplier),a(2),s("disabled",!t.selectedSupplier),a(2),s("disabled",!t.selectedSupplier),a(2),s("disabled",!t.selectedSupplier),a(),s("ngIf",t.data.length>0),a(),s("visible",t.paymentDialogVisible)("accounts",t.suppliers())("selected_account",t.selectedSupplier),a(),s("visible",t.correctDebtDialogVisible)("accounts",t.suppliers())("account",t.selectedSupplier))},dependencies:[A,X,q,Oe,j,O,Ze,pe,fe,ze,dt,it,Je,ye,De,P],styles:["[_nghost-%COMP%]  .p-card-content{padding:0!important}"]})}}return i})();var ri=["tableSearch"],li=()=>[10,15,50,100],ai=()=>["name","phone","address"],si=()=>({width:"55vw"}),pi=i=>({"ng-invalid ng-dirty":i});function ci(i,m){if(i&1){let e=C();n(0,"div",14)(1,"span",15),g(2,"i",16),n(3,"input",17,1),c("input",function(t){f(e),u();let p=Te(6);return h(p.filterGlobal(t.target.value,"contains"))}),o()()(),n(5,"button",18),c("click",function(){f(e);let t=u();return h(t.resetTable())}),o(),n(6,"button",19),c("click",function(){f(e);let t=u();return h(t.openSupplierDialog("add"))}),o()}if(i&2){u();let e=Te(6);a(3),s("value",e.filters.global==null?null:e.filters.global.value)}}function mi(i,m){if(i&1){let e=C();n(0,"button",20),c("click",function(){f(e);let t=u();return h(t.openSupplierDialog("edit"))}),o(),n(1,"button",21),c("click",function(){f(e);let t=u();return h(t.deleteSelectedSupplier())}),o()}if(i&2){let e=u();s("disabled",!e.selectedSupplier),a(),s("disabled",!e.selectedSupplier)}}function ui(i,m){i&1&&(n(0,"tr")(1,"th",22),l(2,"Supplier Name"),o(),n(3,"th",23),l(4,"Phone Number"),o(),n(5,"th",24),l(6,"Address"),o()())}function di(i,m){if(i&1&&(n(0,"tr",25)(1,"td"),l(2),o(),n(3,"td"),l(4),o(),n(5,"td"),l(6),o()()),i&2){let e=m.$implicit;s("pSelectableRow",e),a(2),M(e.name),a(2),M(e.phone||" --- "),a(2),M(e.address||" --- ")}}function _i(i,m){i&1&&(n(0,"tr")(1,"td",26),l(2,"No suppliers yet!"),o()())}function fi(i,m){i&1&&(n(0,"small",38),l(1,"Name is required."),o())}function hi(i,m){if(i&1){let e=C();n(0,"form",27),c("ngSubmit",function(){f(e);let t=u();return h(t.submitSupplier())}),n(1,"div",28)(2,"div",29)(3,"label",30),l(4,"Supplier Name"),o(),g(5,"input",31),S(6,fi,2,0,"small",32),o(),n(7,"div",29)(8,"label",33),l(9,"Supplier Phone"),o(),g(10,"input",34),o(),n(11,"div",35)(12,"label",36),l(13,"Address"),o(),n(14,"textarea",37),l(15,"                    "),o()()()()}if(i&2){let e=u();s("formGroup",e.supplierForm),a(5),s("ngClass",k(3,pi,e.submitted&&(e.name==null?null:e.name.invalid)&&((e.name==null?null:e.name.dirty)||(e.name==null?null:e.name.touched)))),a(),s("ngIf",e.submitted&&(e.name==null?null:e.name.invalid)&&((e.name==null?null:e.name.dirty)||(e.name==null?null:e.name.touched)))}}function bi(i,m){if(i&1){let e=C();n(0,"button",39),c("click",function(){f(e);let t=u();return h(t.supplierDialogVisible=!1)}),o(),n(1,"button",40),c("click",function(){f(e);let t=u();return h(t.submitSupplier())}),o()}if(i&2){let e=u();a(),s("loading",e.submitLoading())}}var wt=(()=>{class i{constructor(){this.supplierService=_(W),this.confirmationService=_(ee),this.subscriptions=new H,this.suppliers=this.supplierService.suppliers,this.supplierDialogVisible=!1,this.submitted=!1,this.submitLoading=this.supplierService.submitLoading,this.suppliersLoading=this.supplierService.suppliersLoading,this.supplierForm=new Le({account_id:new L(null),name:new L("",I.required),phone:new L(""),address:new L(""),financial_number:new L("")})}onKeyDown(e){this.supplierDialogVisible||this.tableSearch.nativeElement.focus()}ngOnInit(){this.subscriptions.add(this.supplierService.supplierDialogVisible$.subscribe(e=>{this.supplierDialogVisible=e}))}ngOnDestroy(){this.subscriptions.unsubscribe()}get name(){return this.supplierForm.get("name")}openSupplierDialog(e){this.dialogMode=e,this.dialogMode=="add"?this.supplierDialogVisible=!0:this.dialogMode=="edit"&&(this.supplierForm.patchValue(this.selectedSupplier),this.supplierDialogVisible=!0)}resetDialog(){this.submitted=!1,this.supplierForm.reset({})}submitSupplier(){return Ie(this,null,function*(){this.submitted=!0,this.dialogMode=="add"?this.supplierForm.valid&&(yield this.supplierService.createSupplier(this.supplierForm.value)):this.supplierForm.valid&&(yield this.supplierService.updateSupplier(this.supplierForm.value))})}deleteSelectedSupplier(){this.confirmationService.confirm({key:"home",message:`Are you sure that you want to delete "${this.selectedSupplier.name}"?`,header:"Warning",icon:"pi pi-exclamation-triangle",acceptButtonStyleClass:"p-button-danger",rejectButtonStyleClass:"p-button-secondary",defaultFocus:"reject",accept:()=>{this.supplierService.deleteSupplier(this.selectedSupplier),this.selectedSupplier=null}})}resetTable(){this.selectedSupplier=null,this.ct.reset(),this.ct.sortField="account_id",this.ct.sortOrder=1,this.ct.sortSingle(),this.supplierService.getSuppliers()}static{this.\u0275fac=function(r){return new(r||i)}}static{this.\u0275cmp=N({type:i,selectors:[["app-accounts"]],viewQuery:function(r,t){if(r&1&&(F(O,5),F(ri,5)),r&2){let p;E(p=V())&&(t.ct=p.first),E(p=V())&&(t.tableSearch=p.first)}},hostBindings:function(r,t){r&1&&c("keydown",function(d){return t.onKeyDown(d)},!1,Re)},decls:13,vars:17,consts:[["ct",""],["tableSearch",""],[1,"grid","mr-8","ml-8","mt-1"],[1,"col-12"],["styleClass","p-2"],["pTemplate","left"],["pTemplate","right"],["styleClass","p-datatable-sm p-datatable-striped","selectionMode","single","dataKey","account_id",3,"selectionChange","value","selection","paginator","rows","showCurrentPageReport","rowsPerPageOptions","alwaysShowPaginator","globalFilterFields","filterDelay","loading"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["header","Suppliers","styleClass","p-fluid","position","top",3,"visibleChange","onHide","visible","modal"],["pTemplate","content"],["pTemplate","footer"],[1,"flex"],[1,"p-input-icon-left","mr-auto"],[1,"pi","pi-search"],["pInputText","","type","search","placeholder","Search ...",1,"p-inputtext-sm",3,"input","value"],["pButton","","pRipple","","label","Reset Table","icon","pi pi-refresh",1,"p-button-primary","p-button-sm","mx-2",3,"click"],["pButton","","pRipple","","label","New Supplier","icon","pi pi-plus",1,"p-button-success","mr-2","p-button-sm",3,"click"],["pButton","","pRipple","","label","Edit","icon","pi pi-file-edit",1,"p-button-warning","p-button-sm","mr-2",3,"click","disabled"],["pButton","","pRipple","","label","Delete","icon","pi pi-trash",1,"p-button-danger","p-button-sm",3,"click","disabled"],["width","55%"],["width","%20"],["width","%25"],[3,"pSelectableRow"],["colspan","3"],[3,"ngSubmit","formGroup"],[1,"formgrid","grid"],[1,"field","col-12","md:col-6"],["for","name"],["id","name","type","text","pInputText","","formControlName","name","autocomplete","off","required","","autofocus","","spellcheck","false",3,"ngClass"],["class","p-error",4,"ngIf"],["for","phone"],["id","phone","type","text","autocomplete","on","pInputText","","formControlName","phone","spellcheck","false"],[1,"field","col-12","md:col-12"],["for","address"],["id","address","name","address","rows","3","pInputTextarea","","formControlName","address","spellcheck","false"],[1,"p-error"],["pButton","","pRipple","","label","Cancel","icon","pi pi-times",1,"p-button-secondary",3,"click"],["pButton","","pRipple","","label","Save","icon","pi pi-check",1,"p-button-success",3,"click","loading"]],template:function(r,t){if(r&1){let p=C();n(0,"div",2)(1,"div",3)(2,"p-toolbar",4),S(3,ci,7,1,"ng-template",5)(4,mi,2,2,"ng-template",6),o(),n(5,"p-table",7,0),w("selectionChange",function(y){return f(p),x(t.selectedSupplier,y)||(t.selectedSupplier=y),h(y)}),S(7,ui,7,0,"ng-template",8)(8,di,7,4,"ng-template",9)(9,_i,3,0,"ng-template",10),o()()(),n(10,"p-dialog",11),w("visibleChange",function(y){return f(p),x(t.supplierDialogVisible,y)||(t.supplierDialogVisible=y),h(y)}),c("onHide",function(){return f(p),h(t.resetDialog())}),S(11,hi,16,5,"ng-template",12)(12,bi,2,1,"ng-template",13),o()}r&2&&(a(5),s("value",t.suppliers()),D("selection",t.selectedSupplier),s("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",T(14,li))("alwaysShowPaginator",!0)("globalFilterFields",T(15,ai))("filterDelay",0)("loading",t.suppliersLoading()),a(5),U(T(16,si)),D("visible",t.supplierDialogVisible),s("modal",!0))},dependencies:[A,X,ne,te,q,ie,le,oe,re,j,O,Xe,$e,de,st,He,me,rt]})}}return i})();var gi=[{path:"statements",data:{breadcrumb:"Statements"},component:xt},{path:"accounts",data:{breadcrumb:"Accounts"},component:wt},{path:"**",redirectTo:"/suppliers/statements"}],Tt=(()=>{class i{static{this.\u0275fac=function(r){return new(r||i)}}static{this.\u0275mod=$({type:i})}static{this.\u0275inj=G({imports:[Ee.forChild(gi),Ee]})}}return i})();var oo=(()=>{class i{static{this.\u0275fac=function(r){return new(r||i)}}static{this.\u0275mod=$({type:i})}static{this.\u0275inj=G({providers:[P],imports:[Z,Tt,ae,se,gt,Ke,et,ot,ce,_e,pt,Ge,ue,ut,ft,he,mt,be,lt,Qe,_t,Ye,ct,Se,ge,ye,De]})}}return i})();export{oo as SuppliersModule};
