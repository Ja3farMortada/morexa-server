import"./chunk-JL4BOEYT.js";import{b as Me}from"./chunk-C7D56P25.js";import{a as Se,b as be}from"./chunk-CF53W43R.js";import{b as re}from"./chunk-FBBXAICZ.js";import{a as Q,b as He,c as Ve}from"./chunk-C2LLDE4X.js";import{a as Pe}from"./chunk-Q67CXJ4Z.js";import{a as F,b as Ie,c as Te}from"./chunk-B5NN6IYX.js";import"./chunk-V4YX5ONG.js";import{c as O}from"./chunk-ISVQSFPG.js";import"./chunk-2IAGA2KS.js";import{a as we}from"./chunk-JHV34F2Y.js";import{a as fe,b as he}from"./chunk-JTH5INRY.js";import{a as qe}from"./chunk-22DMWHJU.js";import{a as ve}from"./chunk-SNM2CLGW.js";import{a as Ee}from"./chunk-5G6QHU5I.js";import{a as xe,b as Ce}from"./chunk-R6KW2DC6.js";import"./chunk-DC3T4MAL.js";import{a as ge,b as ye}from"./chunk-MAZQTZTP.js";import"./chunk-QMM6CLJV.js";import"./chunk-2LVZO5F4.js";import"./chunk-CHNOQELU.js";import{a as te,b as ie}from"./chunk-ZTKZ5H54.js";import{E as _e,i as ae,j as pe,l as se,m as ce,t as me,y as ue,z as de}from"./chunk-CGG3ICFJ.js";import{$ as L,Aa as z,Ba as B,Db as G,Dc as le,E as U,Gb as J,J as j,Ja as C,K as s,Ka as v,Nb as X,Sb as Z,Ta as A,U as _,Va as K,W as u,Yb as ee,Za as Y,_a as D,a as R,aa as l,ba as r,ca as k,ga as h,ha as g,hc as ne,ia as a,ic as oe,n as w,na as I,oa as T,p as b,pa as E,pb as q,q as N,r as M,ra as p,sa as x,ta as S,ub as $,va as H,w as c,wa as V,x as m,xa as P}from"./chunk-D4YDXMC2.js";import{f as Le}from"./chunk-TSRGIXR5.js";var Be=Le(qe());var Qe=["barcodeInput"],We=["invoiceTable"],Re=["editQty"],Ue=["editPrice"],je=["payment_input"],ze=()=>({standalone:!0}),ke=i=>({invalid:i}),De=i=>({"text-red-500":i});function Ae(i,d){if(i&1&&(l(0,"h2",20),p(1),C(2,"currency"),r()),i&2){let e=a();s(),S(" USD: ",v(2,1,e.invoiceTotal.subtotal_dollar)," ")}}function Ke(i,d){if(i&1&&(l(0,"h2",21),p(1),C(2,"dollar"),r()),i&2){let e=a();s(),S(" Total: ",v(2,1,e.invoiceTotal.subtotal_dollar)," ")}}function Ye(i,d){if(i&1){let e=h();l(0,"div",23)(1,"label",27),p(2,"Payment"),r(),l(3,"p-inputNumber",28,2),P("ngModelChange",function(t){c(e);let o=a(2);return V(o.payment_amount,t)||(o.payment_amount=t),m(t)}),g("onFocus",function(t){c(e);let o=a(2);return m(o.select(t.target))}),r()()}if(i&2){let e=a(2);s(3),H("ngModel",e.payment_amount),u("ngModelOptions",z(5,ze))("buttonLayout","horizontal")("step",1)("min",0)}}function $e(i,d){if(i&1&&(l(0,"div",26)(1,"table",29)(2,"tr")(3,"th",30),p(4,"Old Balance:"),r(),l(5,"th")(6,"text-with-loading",31)(7,"span"),p(8),C(9,"currency"),r()()()(),l(10,"tr")(11,"th",30),p(12,"Current Invoice:"),r(),l(13,"th"),p(14),C(15,"currency"),r()(),l(16,"tr")(17,"td",32),k(18,"p-divider",33),r()(),l(19,"tr")(20,"th",30),p(21,"Payment:"),r(),l(22,"th"),p(23),C(24,"currency"),r()(),l(25,"tr")(26,"td",32),k(27,"p-divider",33),r()(),l(28,"tr")(29,"th",30),p(30,"New Balance:"),r(),l(31,"th")(32,"text-with-loading",34)(33,"span"),p(34),C(35,"currency"),r()()()()()()),i&2){let e=a(2);s(6),u("isLoading",e.supplier_balance_loading())("loadingBar",!0),s(2),x(v(9,8,e.supplier_balance().balance)),s(6),S(" ",v(15,10,e.invoiceTotal.subtotal_dollar)," "),s(9),S(" ",v(24,12,e.payment_amount())," "),s(9),u("isLoading",e.supplier_balance_loading())("loadingBar",!0),s(2),x(v(35,14,e.calculateNewBalance(e.invoiceTotal.subtotal_dollar,e.supplier_balance().balance,e.payment_amount())))}}function Ge(i,d){if(i&1){let e=h();l(0,"div",13)(1,"div",22)(2,"div",23)(3,"label",24),p(4,"Supplier"),r(),l(5,"p-dropdown",25),P("ngModelChange",function(t){c(e);let o=a();return V(o.selected_supplier_id,t)||(o.selected_supplier_id=t),m(t)}),g("onShow",function(){c(e);let t=a();return m(t.dropDownVisible=!0)})("onHide",function(){c(e);let t=a();return m(t.dropDownVisible=!1)})("ngModelChange",function(){c(e);let t=a();return m(t.getSupplierBalance())}),r()()(),l(6,"div",22),_(7,Ye,5,6,"div",23),r(),_(8,$e,36,16,"div",26),r()}if(i&2){let e=a();s(5),u("loading",e.suppliersLoading()),H("ngModel",e.selected_supplier_id),u("options",e.suppliers())("filter",!0)("showClear",!0)("autoOptionFocus",!1),s(2),L(e.selected_supplier_id()?7:-1),s(),L(e.selected_supplier_id()?8:-1)}}function Je(i,d){i&1&&(l(0,"tr")(1,"th",35),p(2,"#"),r(),l(3,"th",36),p(4,"Barcode"),r(),l(5,"th",37),p(6,"Description"),r(),l(7,"th",38),p(8,"Price"),r(),l(9,"th",35),p(10,"Qty"),r(),l(11,"th",38),p(12,"Total"),r(),l(13,"th",35),p(14,"Del?"),r()())}function Xe(i,d){if(i&1){let e=h();l(0,"p-inputNumber",46,3),P("ngModelChange",function(t){c(e);let o=a().$implicit;return V(o.unit_price,t)||(o.unit_price=t),m(t)}),g("ngModelChange",function(){c(e);let t=a().$implicit,o=a();return m(o.setPrice(t))})("onFocus",function(t){c(e);let o=a(2);return m(o.select(t.target))}),r()}if(i&2){let e=a().$implicit;H("ngModel",e.unit_price),u("maxFractionDigits",2)("min",0)}}function Ze(i,d){if(i&1&&(l(0,"span",47),p(1),C(2,"currency"),r()),i&2){let e=a().$implicit;u("ngClass",B(4,De,!e.unit_price)),s(),x(v(2,2,e.unit_price))}}function et(i,d){if(i&1){let e=h();l(0,"p-inputNumber",48,4),P("ngModelChange",function(t){c(e);let o=a().$implicit;return V(o.quantity,t)||(o.quantity=t),m(t)}),g("onFocus",function(t){c(e);let o=a(2);return m(o.select(t.target))})("ngModelChange",function(){c(e);let t=a().$implicit,o=a();return m(o.setQty(t))}),r()}if(i&2){let e=a().$implicit;H("ngModel",e.quantity)}}function tt(i,d){if(i&1&&(l(0,"span",47),p(1),r()),i&2){let e=a().$implicit;u("ngClass",B(2,De,!e.quantity)),s(),x(e.quantity)}}function it(i,d){if(i&1&&(l(0,"td"),p(1),r()),i&2){let e=a().$implicit;s(),S(" ",(e.currency=="lira",e.unit_price*e.quantity)," ")}}function nt(i,d){if(i&1&&(l(0,"td"),p(1),C(2,"currency"),r()),i&2){let e=a().$implicit;s(),S(" ",e.currency=="lira"?e.unit_price*e.quantity:v(2,1,e.unit_price*e.quantity)," ")}}function ot(i,d){if(i&1){let e=h();l(0,"tr")(1,"td"),p(2),r(),l(3,"td"),p(4),r(),l(5,"td"),p(6),r(),l(7,"td",39)(8,"p-cellEditor"),_(9,Xe,2,3,"ng-template",40)(10,Ze,3,6,"ng-template",41),r()(),l(11,"td",42)(12,"p-cellEditor"),_(13,et,2,1,"ng-template",40)(14,tt,2,4,"ng-template",41),r()(),_(15,it,2,1,"td",43)(16,nt,3,3,"td",43),l(17,"td",44),g("click",function(){let t=c(e).rowIndex,o=a();return m(o.removeRow(t))}),k(18,"i",45),r()()}if(i&2){let e=d.$implicit,n=d.rowIndex,t=a();s(2),x(n+1),s(2),x(e.barcode||"---"),s(2),x(e.product_name),s(),u("pEditableColumn",e.unit_price)("ngClass",B(9,ke,!e.unit_price)),s(4),u("pEditableColumn",e.quantity)("ngClass",B(11,ke,!e.quantity)),s(4),u("ngIf",t.view_currency=="lira"),s(),u("ngIf",t.view_currency=="dollar")}}function rt(i,d){if(i&1&&(l(0,"h4",50),p(1),r()),i&2){let e=a(2);s(),S(" Total units: ",e.invoiceTotal.total_qty," ")}}function lt(i,d){if(i&1&&_(0,rt,2,1,"h4",49),i&2){let e=a();u("ngIf",e.invoiceTotal.total_qty)}}function at(i,d){i&1&&(l(0,"tr",51)(1,"td",52),p(2,"No data yet!"),r()())}function pt(i,d){if(i&1){let e=h();l(0,"p-autoComplete",53,5),P("ngModelChange",function(t){c(e);let o=a();return V(o.search_product,t)||(o.search_product=t),m(t)}),g("completeMethod",function(t){c(e);let o=a();return m(o.searchItem(t))})("onKeyUp",function(t){c(e);let o=a();return m(o.submitInvoiceInput(t))}),r(),l(2,"p-button",54),g("onClick",function(){c(e);let t=a();return m(t.dialog_products_visible=!0)}),r()}if(i&2){let e=a();H("ngModel",e.search_product),u("suggestions",e.searchedItems)("delay",150)}}function st(i,d){if(i&1){let e=h();l(0,"p-button",55),g("onClick",function(){c(e);let t=a();return m(t.clearInvoice())}),r(),l(1,"p-button",56),g("onClick",function(){c(e);let t=a();return m(t.checkout())}),r()}if(i&2){let e=a();u("disabled",e.invoice().length==0),s(),u("loading",e.loading())("disabled",e.invoice().length==0)}}var Oe=(()=>{class i{constructor(){this.suppliersService=b(Pe),this.stockService=b(ye),this.supplyService=b(Ve),this.notificationsService=b(J),this.confirmationService=b($),this.localStorageService=b(ge),this.dropDownVisible=!1,this.vh=this.localStorageService.getSupplyPageViewHeight(),this.invoiceTotal=new Q,this.search_product=null,this.searchedItems=[],this.suppliers=this.suppliersService.suppliers,this.view_currency="dollar",this.dialog_products_visible=!1,this.invoice=this.supplyService.invoice,this.submited=this.supplyService.signal_submited,this.products=this.stockService.products,this.loading=this.supplyService.signal_submit_loading,this.stockTableLoading=this.stockService.tableLoading,this.suppliersLoading=this.suppliersService.suppliersLoading,this.subscriptions=new R,this.priceTypes=Object.keys(He),this.today=(0,Be.default)().format("YYYY-MM-DD"),this.payment_amount=this.supplyService.payment_amount,this.selected_supplier_id=this.supplyService.selected_customer,this.supplier_balance_loading=this.suppliersService.signal_balanceLoading,this.supplier_balance=this.suppliersService.supplierTotalDebts$}onKeyDown(e){if(this.dropDownVisible||this.dialog_products_visible)return;let n=this.editPrice||this.editQty||this.payment_input;(!n||!n.focused)&&this.focusBarcodeInput()}focusBarcodeInput(){this.barcodeInput.nativeElement.children[0].children[0].focus()}ngOnInit(){this.messages=[{severity:"info",detail:"No Invoice Yet!"}],this.calculateTotal(),this.subscriptions.add(this.supplyService.reset$.subscribe(e=>{e&&(this.init(),this.supplyService.reset$.next(!1))})),this.subscriptions.add(this.supplyService.barcodeResponse.subscribe(e=>{e&&(this.addProduct(e),this.supplyService.barcodeResponse.next(null))}))}ngOnDestroy(){this.subscriptions.unsubscribe()}setPrice(e){this.calculateTotal()}setQty(e){this.calculateTotal()}select(e){e.select()}init(){this.supplyService.selected_customer.set(null),this.supplyService.payment_amount.set(0),this.supplyService.invoice.set([]),this.submited.set(!1),this.calculateTotal()}clearInvoice(){this.confirmationService.confirm({key:"home",message:"Are you sure that you want to clear invoice?",header:"Warning",icon:"pi pi-exclamation-triangle",acceptButtonStyleClass:"p-button-danger",rejectButtonStyleClass:"p-button-secondary",defaultFocus:"reject",accept:()=>{this.init()}})}searchItem(e){let n=this.products(),t=[],o=e.query;for(let y=0;y<n.length;y++){let f=n[y];f.product_name.toLowerCase().indexOf(o.toLowerCase())>-1&&t.push(f)}this.searchedItems=t}addProduct(e){let n=this.supplyService.factor(),t=structuredClone(this.invoice()),o=t.find(y=>y.product_id===e.product_id);o?o.quantity+=n:t.push({product_id:e.product_id,barcode:e.barcode,product_name:e.product_name,unit_cost:e.unit_cost_usd,unit_price:e.unit_cost_usd,quantity:n}),this.invoice.set(t),this.supplyService.factor.set(1),this.calculateTotal()}submitInvoiceInput(e){e.key==="Enter"&&this.search_product&&(typeof this.search_product=="string"?this.submitBarcode(this.search_product):this.supplyService.barcodeResponse.next(this.search_product),this.search_product=null)}submitBarcode(e){if(e){let n=-1,t=["*","+"];for(let f=0;f<t.length;f++)if(e.indexOf(t[f])!==-1){n=e.indexOf(t[f]);break}let o=e.substring(0,n)||1,y=parseInt(e.substring(n+1,e.length));n!=-1&&n!=0?(this.supplyService.factor.set(parseInt(o)),this.supplyService.submitBarcode(y)):this.supplyService.submitBarcode(e)}}removeRow(e){this.invoice().splice(e,1),this.calculateTotal(),this.validateItems()}assignSelectedProducts(e){this.dialog_products_visible=!1,e.forEach(n=>{this.addProduct(n)})}calculateTotal(){let e=new Q,n=this.invoice();return n.length>0&&(n.forEach(t=>{e.total_qty+=t.quantity,e.cost_dollar+=t.unit_cost*t.quantity,e.subtotal_dollar+=t.unit_price*t.quantity}),e.total_dollar=e.subtotal_dollar-e.discount_dollar),this.invoiceTotal=e,e}parseFloat(e){return parseFloat(e)}validateItems(){return!!this.invoice().find(n=>!n.unit_price||!n.quantity)}checkout(){let e=this.validateItems();e?(this.submited.set(!0),e&&this.notificationsService.showError("Please enter price for all items","home")):this.confirmationService.confirm({key:"home",message:'Are you sure that you want to submit invoice"?',header:"Warning",icon:"pi pi-exclamation-triangle",acceptButtonStyleClass:"p-button-success",rejectButtonStyleClass:"p-button-secondary",defaultFocus:"reject",accept:()=>{this.supplyService.checkout({partner_id_fk:this.selected_supplier_id(),exchange_rate:this.stockService.exchangeRate().rate_value,total_cost:this.invoiceTotal.subtotal_dollar,items:this.invoice()},this.payment_amount())}})}getSupplierBalance(){this.selected_supplier_id()?this.suppliersService.getAccountTotalBalance(this.selected_supplier_id()):this.supplier_balance.set({id:0,balance:"0"})}calculateNewBalance(e,n=0,t=0){return n=parseFloat(n),n+e-t}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275cmp=N({type:i,selectors:[["app-supply-home"]],viewQuery:function(n,t){if(n&1&&(I(Qe,5,U),I(We,5),I(Re,5),I(Ue,5),I(je,5)),n&2){let o;T(o=E())&&(t.barcodeInput=o.first),T(o=E())&&(t.invoiceTable=o.first),T(o=E())&&(t.editQty=o.first),T(o=E())&&(t.editPrice=o.first),T(o=E())&&(t.payment_input=o.first)}},hostBindings:function(n,t){n&1&&g("keydown",function(y){return t.onKeyDown(y)},!1,j)},decls:21,vars:4,consts:[["desktopTable",""],["invoiceTable",""],["payment_input",""],["editPrice",""],["editQty",""],["barcodeInput",""],[1,"grid","m-1"],[1,"col-12"],["styleClass","mb-3 p-2"],["pTemplate","left"],["pTemplate","right"],["pTemplate","body"],["styleClass","mt-2"],[1,"grid"],["dataKey","product_id","styleClass","p-datatable-sm ","editMode","cell",3,"value"],["pTemplate","header"],["pTemplate","summary"],["pTemplate","emptymessage"],["styleClass","mt-2 p-2"],["price","cost",3,"onHide","onSubmit","visible","products","tableLoading"],[1,"text-green-600","m-2"],[1,"text-primary","m-2"],[1,"col-2"],[1,"flex","flex-column","gap-2"],["for","supplier"],["styleClass","p-inputtext-sm","id","supplier","appendTo","body","optionLabel","name","optionValue","account_id","placeholder","Select Supplier","filterBy","name",3,"ngModelChange","onShow","onHide","loading","ngModel","options","filter","showClear","autoOptionFocus"],[1,"col-8","flex","justify-content-end"],["for","currency"],["inputId","currency-us","mode","currency","currency","USD","locale","en-US","styleClass","w-full",1,"p-inputtext-sm",3,"ngModelChange","onFocus","ngModel","ngModelOptions","buttonLayout","step","min"],[1,"text-right"],[1,"text-green-500"],["loaderClass","flex-grow-1 flex-shrink-1",2,"width","50%",3,"isLoading","loadingBar"],["colspan","2"],["styleClass","m-0"],["loaderClass","flex-grow-1 flex-shrink-1",2,"width","63%",3,"isLoading","loadingBar"],["width","5%"],["width","20%"],["width","40%"],["width","15%"],["pEditableColumnField","unit_price",3,"pEditableColumn","ngClass"],["pTemplate","input"],["pTemplate","output"],["pEditableColumnField","quantity",3,"pEditableColumn","ngClass"],[4,"ngIf"],[1,"danger-hover",3,"click"],[1,"pi","pi-trash"],["styleClass","input-align-center","step","0",1,"p-inputtext-sm","priceEditable",3,"ngModelChange","onFocus","ngModel","maxFractionDigits","min"],[3,"ngClass"],["min","1","step","0",1,"p-inputtext-sm","editable",3,"ngModelChange","onFocus","ngModel"],["class","text-center m-0",4,"ngIf"],[1,"text-center","m-0"],[1,"surface-300"],["colspan","9"],["field","product_name","name","barcodeInput","placeholder","scan or search ...","spellcheck","false",1,"p-inputtext-sm",3,"ngModelChange","completeMethod","onKeyUp","ngModel","suggestions","delay"],["styleClass","mx-2","label","Multi Select","severity","warning","size","small","icon","pi pi-list",3,"onClick"],["label","Clear","icon","pi pi-times","severity","danger","size","small","styleClass","mx-2",3,"onClick","disabled"],["label","Checkout","icon","pi pi-cart-plus","severity","success","size","small",3,"onClick","loading","disabled"]],template:function(n,t){if(n&1){let o=h();l(0,"div",6)(1,"div",7)(2,"p-toolbar",8),_(3,Ae,3,3,"ng-template",9)(4,Ke,3,3,"ng-template",10),r(),l(5,"p-card"),_(6,Ge,9,8,"ng-template",11),r(),l(7,"p-card",12,0)(9,"div",13)(10,"div",7)(11,"p-table",14,1),_(13,Je,15,0,"ng-template",15)(14,ot,19,13,"ng-template",11)(15,lt,1,1,"ng-template",16)(16,at,3,0,"ng-template",17),r(),l(17,"p-toolbar",18),_(18,pt,3,3,"ng-template",9)(19,st,2,3,"ng-template",10),r()()()()()(),l(20,"products-dialog",19),g("onHide",function(){return c(o),m(t.dialog_products_visible=!1)})("onSubmit",function(f){return c(o),m(t.assignSelectedProducts(f))}),r()}n&2&&(s(11),u("value",t.invoice()),s(9),u("visible",t.dialog_products_visible)("products",t.products)("tableLoading",t.stockTableLoading()))},dependencies:[A,K,F,te,G,fe,ne,Ie,xe,se,me,ue,de,O,ae,X,Z,Y,ve],styles:["[_nghost-%COMP%]  .p-fieldset .p-fieldset-content{padding:.5rem}.editable[_ngcontent-%COMP%]{width:40px;height:28px}.priceEditable[_ngcontent-%COMP%]{width:60px;height:28px;text-align:center}[_nghost-%COMP%]  .p-inputnumber-input{width:100%}td[_ngcontent-%COMP%]:has(span.p-inputnumber.p-component){padding:0}td[_ngcontent-%COMP%]:has(.no-padding){padding:0}.input-align-center[_ngcontent-%COMP%], [_nghost-%COMP%]   .editable[_ngcontent-%COMP%]     span.p-inputnumber.p-component .p-inputnumber-input{text-align:center}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{appearance:textfield;-moz-appearance:textfield}[_nghost-%COMP%]  .small-button{font-size:.5rem!important;padding:.2rem .4rem!important;width:2rem!important}[_nghost-%COMP%]  .small-input>span>input{padding:.3rem!important;width:2rem!important;text-align:center}[_nghost-%COMP%]  .invoice-body>div>div{padding:0!important}[_nghost-%COMP%]  .p-dataview-emptymessage{display:none}[_nghost-%COMP%]  .p-card-content{padding:0!important}.invalid[_ngcontent-%COMP%]{border-color:var(--red-500)!important}.category-cards[_ngcontent-%COMP%]{border-radius:6px;color:#343a40;text-align:center;padding:1rem;box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f}.selected[_ngcontent-%COMP%]{background-color:#343a40;color:#fff}"]})}}return i})();var ct=[{path:"",component:Oe}],Fe=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=M({type:i})}static{this.\u0275inj=w({imports:[q.forChild(ct),q]})}}return i})();var Ne=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=M({type:i});static \u0275inj=w({imports:[D,le,be,we,Se]})}return i})();var Si=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=M({type:i})}static{this.\u0275inj=w({imports:[D,Fe,F,ie,he,re,oe,Ee,Te,Ce,ce,_e,O,pe,Me,Ne,ee]})}}return i})();export{Si as SupplyModule};
