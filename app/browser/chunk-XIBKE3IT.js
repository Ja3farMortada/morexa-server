import{b as Ke}from"./chunk-UTFVGPIS.js";import{b as Be}from"./chunk-PJEHW4JP.js";import"./chunk-CF53W43R.js";import"./chunk-JHV34F2Y.js";import{a as ne,b as Ae}from"./chunk-R6KW2DC6.js";import{a as De,b as V}from"./chunk-2LVZO5F4.js";import{a as ke,b as Ie}from"./chunk-ZTKZ5H54.js";import{$a as xe,Aa as S,B as he,Ba as D,Bc as re,Cc as Ne,Db as z,E as _e,F as we,Gb as Ee,Hb as Ve,Jb as L,K as l,Kb as Fe,L as U,Lb as F,Nb as Q,Oa as be,Ob as W,Pb as $,R as M,Rb as T,Sa as ye,T as Ce,Ta as O,Tb as Y,U as _,Ub as J,Va as q,Vb as X,W as p,Wb as Z,Yb as Te,Z as N,Zb as Pe,_a as G,_b as P,a as I,aa as o,ab as Se,b as ae,ba as n,ca as w,ga as C,gc as ee,ha as u,hc as te,ia as m,ic as Ue,jc as ie,kc as Me,l as de,m as fe,n as b,na as A,oa as B,p as c,pa as K,pb as le,q as y,r as x,ra as d,s as ge,sa as v,ub as E,va as j,w as g,wa as R,x as h,xa as H,ya as ve}from"./chunk-D4YDXMC2.js";import"./chunk-TSRGIXR5.js";var se=(()=>{class i{constructor(){this.http=c(Se),this.notificationService=c(Ee),this.api=c(Ve),this.tokenStorage=c(De),this.userService=c(V),this.host=this.api.host,this.userDialogVisible=M(!1),this.passDialogVisible=M(!1),this.loading=M(!1),this.existedUsernameError=new ae,this.oldPasswordError=new ae}updateUsername(e){this.http.put(`${this.host()}/profile`,e).subscribe({next:t=>{this.tokenStorage.saveUser(t.username),this.tokenStorage.saveToken(t.token),this.userService.loggedInUser.set(t.username),this.notificationService.showSuccess("Username updated successfully!","home")},error:t=>{t.status==406?this.existedUsernameError.next():this.notificationService.handleError(t,"home"),this.loading.set(!1)},complete:()=>{this.userDialogVisible.set(!1),this.loading.set(!1)}})}updatePassword(e){this.http.put(`${this.host()}/profile/password`,e).subscribe({next:t=>{console.log(t),this.notificationService.showSuccess(t.message,"home")},error:t=>{t.status==406?(console.log(t.error.message),this.oldPasswordError.next()):this.notificationService.handleError(t,"home"),this.loading.set(!1)},complete:()=>{this.passDialogVisible.set(!1),this.loading.set(!1)}})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=fe({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var $e={provide:Fe,useExisting:de(()=>pe),multi:!0},je={pint:/^[\d]*$/,int:/^[-]?[\d]*$/,pnum:/^[\d\.]*$/,money:/^[\d\.\s,]*$/,num:/^[-]?[\d\.]*$/,hex:/^[0-9a-f]*$/i,email:/^[a-z0-9_\.\-@]*$/i,alpha:/^[a-z_]*$/i,alphanum:/^[a-z0-9_]*$/i},me={TAB:9,RETURN:13,ESC:27,BACKSPACE:8,DELETE:46},Re={63234:37,63235:39,63232:38,63233:40,63276:33,63277:34,63272:46,63273:36,63275:35},pe=(()=>{class i{document;platformId;el;pValidateOnly;set pattern(e){this._pattern=e,e instanceof RegExp?this.regex=e:e in je?this.regex=je[e]:this.regex=/./}get pattern(){return this._pattern}ngModelChange=new he;regex=/./;_pattern;isAndroid;lastValue;constructor(e,t,r){this.document=e,this.platformId=t,this.el=r,xe(this.platformId)?this.isAndroid=P.isAndroid():this.isAndroid=!1}isNavKeyPress(e){let t=e.keyCode;return t=P.getBrowser().safari&&Re[t]||t,t>=33&&t<=40||t==me.RETURN||t==me.TAB||t==me.ESC}isSpecialKey(e){let t=e.keyCode||e.charCode;return t==9||t==13||t==27||t==16||t==17||t>=18&&t<=20||P.getBrowser().opera&&!e.shiftKey&&(t==8||t>=33&&t<=35||t>=36&&t<=39||t>=44&&t<=45)}getKey(e){let t=e.keyCode||e.charCode;return P.getBrowser().safari&&Re[t]||t}getCharCode(e){return e.charCode||e.keyCode||e.which}findDelta(e,t){let r="";for(let s=0;s<e.length;s++)e.substr(0,s)+e.substr(s+e.length-t.length)===t&&(r=e.substr(s,e.length-t.length));return r}isValidChar(e){return this.regex.test(e)}isValidString(e){for(let t=0;t<e.length;t++)if(!this.isValidChar(e.substr(t,1)))return!1;return!0}onInput(e){if(this.isAndroid&&!this.pValidateOnly){let t=this.el.nativeElement.value,r=this.lastValue||"",s=this.findDelta(t,r),a=this.findDelta(r,t);s.length>1||!s&&!a?this.isValidString(t)||(this.el.nativeElement.value=r,this.ngModelChange.emit(r)):a||this.isValidChar(s)||(this.el.nativeElement.value=r,this.ngModelChange.emit(r)),t=this.el.nativeElement.value,this.isValidString(t)&&(this.lastValue=t)}}onKeyPress(e){if(this.isAndroid||this.pValidateOnly)return;let t=P.getBrowser(),r=this.getKey(e);if(t.mozilla&&(e.ctrlKey||e.altKey))return;if(r==17||r==18||r==13)return;let s=this.getCharCode(e),a=String.fromCharCode(s),oe=!0;if(!t.mozilla&&(this.isSpecialKey(e)||!a))return;let ue=this.el.nativeElement.value||"",Le=e.currentTarget.selectionStart||0,Qe=e.currentTarget.selectionEnd||0,We=ue.substring(0,Le)+a+ue.substring(Qe);oe=this.regex.test(We),oe||e.preventDefault()}onPaste(e){let t=e.clipboardData||this.document.defaultView.clipboardData.getData("text");if(t){let r=/\{[0-9]+\}/,s=t.getData("text");if(r.test(this.regex.toString())){if(!this.regex.test(s)){e.preventDefault();return}}else for(let a of s.toString())if(!this.regex.test(a)){e.preventDefault();return}}}validate(e){if(this.pValidateOnly){let t=this.el.nativeElement.value;if(t&&!this.regex.test(t))return{validatePattern:!1}}}static \u0275fac=function(t){return new(t||i)(U(ye),U(we),U(_e))};static \u0275dir=ge({type:i,selectors:[["","pKeyFilter",""]],hostAttrs:[1,"p-element"],hostBindings:function(t,r){t&1&&u("input",function(a){return r.onInput(a)})("keypress",function(a){return r.onKeyPress(a)})("paste",function(a){return r.onPaste(a)})},inputs:{pValidateOnly:[2,"pValidateOnly","pValidateOnly",be],pattern:[0,"pKeyFilter","pattern"]},outputs:{ngModelChange:"ngModelChange"},features:[ve([$e]),Ce]})}return i})(),He=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=x({type:i});static \u0275inj=b({imports:[G]})}return i})();var nt=["username"],st=()=>({width:"50vw"}),ot=()=>({"1199px":"75vw","575px":"95vw"}),at=i=>({"ng-invalid ng-dirty":i});function lt(i,f){if(i&1&&(o(0,"h2"),d(1," Username: "),o(2,"span",6),d(3),n()()),i&2){let e=m();l(3),v(e.loggedInUser())}}function mt(i,f){if(i&1){let e=C();o(0,"p-button",7),u("click",function(){g(e);let r=m();return h(r.toggleUserDialog(!0))}),n()}}function pt(i,f){if(i&1&&(o(0,"small",13),d(1),n()),i&2){let e=m(2);l(),v(e.new_username.errors.error||"this field is required!")}}function ct(i,f){if(i&1){let e=C();o(0,"form",8),u("ngSubmit",function(){g(e);let r=m();return h(r.submitUsername())}),o(1,"div",9)(2,"label",10),d(3,"New Username"),n(),w(4,"input",11,0),_(6,pt,2,1,"small",12),n()()}if(i&2){let e=m();p("formGroup",e.userForm),l(4),p("ngClass",D(3,at,(e.new_username==null?null:e.new_username.invalid)&&((e.new_username==null?null:e.new_username.dirty)||(e.new_username==null?null:e.new_username.touched)||e.submitted))),l(2),p("ngIf",(e.new_username==null?null:e.new_username.invalid)&&((e.new_username==null?null:e.new_username.dirty)||(e.new_username==null?null:e.new_username.touched)||e.submitted))}}function ut(i,f){if(i&1){let e=C();o(0,"button",14),u("click",function(){g(e);let r=m();return h(r.toggleUserDialog(!1))}),n(),o(1,"p-button",15),u("click",function(){g(e);let r=m();return h(r.submitUsername())}),n()}if(i&2){let e=m();l(),p("loading",e.loading())}}var Oe=(()=>{class i{constructor(){this.userService=c(V),this.profileService=c(se),this.confirmationService=c(E),this.loggedInUser=this.userService.loggedInUser,this.userDialogVisible=this.profileService.userDialogVisible,this.loading=this.profileService.loading,this.subscriptions=new I,this.submitted=!1,this.userForm=new $({new_username:new T(null,F.required)})}ngOnInit(){this.subscriptions.add(this.profileService.existedUsernameError.subscribe(()=>{this.username.nativeElement.select(),this.userForm.controls.new_username.setErrors({error:"Username already exists"})}))}ngOnDestroy(){this.subscriptions.unsubscribe()}toggleUserDialog(e){this.profileService.userDialogVisible.set(e)}get new_username(){return this.userForm.get("new_username")}submitUsername(){this.submitted=!0,this.userForm.valid&&this.confirmationService.confirm({key:"home",message:"Are you sure that you want to update username ?",header:"Warning",icon:"pi pi-exclamation-triangle",acceptButtonStyleClass:"p-button-danger",rejectButtonStyleClass:"p-button-secondary",defaultFocus:"reject",accept:()=>{this.profileService.loading.set(!0),this.profileService.updateUsername(this.userForm.value)},reject:()=>{this.submitted=!1}})}resetDialog(){this.submitted=!1,this.userForm.reset(),this.profileService.loading.set(!1),this.profileService.userDialogVisible.set(!1)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=y({type:i,selectors:[["change-username"]],viewQuery:function(t,r){if(t&1&&A(nt,5),t&2){let s;B(s=K())&&(r.username=s.first)}},decls:6,vars:9,consts:[["username",""],["pTemplate","start"],["pTemplate","end"],["position","top","header","Change Username","styleClass","p-fluid",3,"onHide","visibleChange","visible","modal","breakpoints","draggable","resizable"],["pTemplate","content"],["pTemplate","footer"],[1,"text-green-600"],["icon","pi pi-user-edit pi-fw","styleClass","p-button-primary","label","Change",3,"click"],[3,"ngSubmit","formGroup"],[1,"field","mt-1"],["for","username"],["pInputText","","formControlName","new_username","required","","autofocus","","spellcheck","false","pKeyFilter","alpha",3,"ngClass"],["class","p-error",4,"ngIf"],[1,"p-error"],["pButton","","pRipple","","label","Cancel","icon","pi pi-times",1,"p-button-secondary",3,"click"],["label","Save","icon","pi pi-check","severity","success",3,"click","loading"]],template:function(t,r){t&1&&(o(0,"p-toolbar"),_(1,lt,4,1,"ng-template",1)(2,mt,1,0,"ng-template",2),n(),o(3,"p-dialog",3),u("onHide",function(){return r.resetDialog()}),H("visibleChange",function(a){return R(r.userDialogVisible,a)||(r.userDialogVisible=a),a}),_(4,ct,7,5,"ng-template",4)(5,ut,2,1,"ng-template",5),n()),t&2&&(l(3),N(S(7,st)),j("visible",r.userDialogVisible),p("modal",!0)("breakpoints",S(8,ot))("draggable",!1)("resizable",!1))},dependencies:[O,q,Y,L,Q,W,Z,J,X,z,ee,te,ne,re,ie,pe]})}}return i})();var ft=["currentPassword"],gt=()=>({width:"50vw"}),ht=()=>({"1199px":"75vw","575px":"95vw"}),ce=i=>({"ng-invalid ng-dirty":i});function _t(i,f){i&1&&(o(0,"h2"),d(1,"Password"),n())}function wt(i,f){if(i&1){let e=C();o(0,"p-button",6),u("click",function(){g(e);let r=m();return h(r.togglePassDialog(!0))}),n()}}function Ct(i,f){if(i&1&&(o(0,"small",18),d(1),n()),i&2){let e=m(2);l(),v(e.current_password.errors.error||"this field is required!")}}function vt(i,f){if(i&1&&(o(0,"small",18),d(1),n()),i&2){let e=m(2);l(),v(e.new_password.errors.error||"this field is required!")}}function bt(i,f){if(i&1&&(o(0,"small",18),d(1),n()),i&2){let e=m(2);l(),v(e.confirm_password.errors.error||"this field is required!")}}function yt(i,f){if(i&1){let e=C();o(0,"form",7),u("ngSubmit",function(){g(e);let r=m();return h(r.submitPassword())}),o(1,"div",8)(2,"div",9)(3,"label",10),d(4,"Current Password*"),n(),w(5,"input",11,0),_(7,Ct,2,1,"small",12),n(),o(8,"div",13)(9,"label",14),d(10,"New Password*"),n(),w(11,"input",15),_(12,vt,2,1,"small",12),n(),o(13,"div",13)(14,"label",16),d(15,"Confirm Password*"),n(),w(16,"input",17),_(17,bt,2,1,"small",12),n()()()}if(i&2){let e=m();p("formGroup",e.passForm),l(5),p("ngClass",D(7,ce,(e.current_password==null?null:e.current_password.invalid)&&((e.current_password==null?null:e.current_password.dirty)||(e.current_password==null?null:e.current_password.touched)||e.submitted))),l(2),p("ngIf",(e.current_password==null?null:e.current_password.invalid)&&((e.current_password==null?null:e.current_password.dirty)||(e.current_password==null?null:e.current_password.touched)||e.submitted)),l(4),p("ngClass",D(9,ce,(e.new_password==null?null:e.new_password.invalid)&&((e.new_password==null?null:e.new_password.dirty)||(e.new_password==null?null:e.new_password.touched)||e.submitted))),l(),p("ngIf",(e.new_password==null?null:e.new_password.invalid)&&((e.new_password==null?null:e.new_password.dirty)||(e.new_password==null?null:e.new_password.touched)||e.submitted)),l(4),p("ngClass",D(11,ce,e.confirm_password.invalid&&(e.confirm_password.dirty||e.confirm_password.touched||e.submitted))),l(),p("ngIf",e.confirm_password.invalid&&(e.confirm_password.dirty||e.confirm_password.touched||e.submitted))}}function xt(i,f){if(i&1){let e=C();o(0,"button",19),u("click",function(){g(e);let r=m();return h(r.togglePassDialog(!1))}),n(),o(1,"p-button",20),u("click",function(){g(e);let r=m();return h(r.submitPassword())}),n()}if(i&2){let e=m();l(),p("loading",e.loading())}}var qe=(()=>{class i{constructor(){this.userService=c(V),this.profileService=c(se),this.confirmationService=c(E),this.loggedInUser=this.userService.loggedInUser,this.passDialogVisible=this.profileService.passDialogVisible,this.loading=this.profileService.loading,this.subscriptions=new I,this.submitted=!1,this.oldPasswordError=!1,this.passForm=new $({current_password:new T(null,F.required),new_password:new T(null,[F.required]),confirm_password:new T(null,[F.required])})}ngOnInit(){this.subscriptions.add(this.profileService.oldPasswordError.subscribe(()=>{this.currentPassword.nativeElement.select(),this.oldPasswordError=!0,this.passForm.controls.current_password.setErrors({error:"Old password is incorrect!"})}))}ngOnDestroy(){this.subscriptions.unsubscribe()}togglePassDialog(e){this.profileService.passDialogVisible.set(e)}get current_password(){return this.passForm.get("current_password")}get new_password(){return this.passForm.get("new_password")}get confirm_password(){return this.passForm.get("confirm_password")}submitPassword(){this.submitted=!0,this.passForm.valid&&(this.passForm.value.new_password==this.passForm.value.confirm_password?this.confirmationService.confirm({key:"home",message:"Are you sure that you want to continue ?",header:"Warning",icon:"pi pi-exclamation-triangle",acceptButtonStyleClass:"p-button-danger",rejectButtonStyleClass:"p-button-secondary",defaultFocus:"reject",accept:()=>{this.profileService.loading.set(!0),this.profileService.updatePassword(this.passForm.value)},reject:()=>{this.submitted=!1}}):(this.passForm.controls.new_password.setErrors({error:"password didnt match!"}),this.passForm.controls.confirm_password.setErrors({error:"password didnt match!"})))}resetDialog(){this.submitted=!1,this.passForm.reset(),this.profileService.loading.set(!1),this.profileService.passDialogVisible.set(!1)}currentPasswordError(){this.passForm.controls.current_password.setErrors({error:"old password is incorrect!"})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=y({type:i,selectors:[["change-password"]],viewQuery:function(t,r){if(t&1&&A(ft,5),t&2){let s;B(s=K())&&(r.currentPassword=s.first)}},decls:6,vars:9,consts:[["currentPassword",""],["pTemplate","start"],["pTemplate","end"],["position","top","header","Change Password","styleClass","p-fluid",3,"onHide","visibleChange","visible","modal","breakpoints","draggable","resizable"],["pTemplate","content"],["pTemplate","footer"],["icon","pi pi-key pi-fw","styleClass","p-button-secondary","label","Change",3,"click"],[3,"ngSubmit","formGroup"],[1,"formgrid","grid"],[1,"field","col-12","md:col-12"],["for","current_password"],["type","password","pInputText","","formControlName","current_password","required","","autofocus","","spellcheck","false",3,"ngClass"],["class","p-error",4,"ngIf"],[1,"field","col-12","md:col-6"],["for","password"],["type","password","pInputText","","formControlName","new_password","required","","spellcheck","false",3,"ngClass"],["for","confirm_password"],["type","password","pInputText","","formControlName","confirm_password","required","","spellcheck","false",3,"ngClass"],[1,"p-error"],["pButton","","label","Cancel","icon","pi pi-times",1,"p-button-secondary",3,"click"],["label","Save","icon","pi pi-check","severity","success",3,"click","loading"]],template:function(t,r){t&1&&(o(0,"p-toolbar"),_(1,_t,2,0,"ng-template",1)(2,wt,1,0,"ng-template",2),n(),o(3,"p-dialog",3),u("onHide",function(){return r.resetDialog()}),H("visibleChange",function(a){return R(r.passDialogVisible,a)||(r.passDialogVisible=a),a}),_(4,yt,18,13,"ng-template",4)(5,xt,2,1,"ng-template",5),n()),t&2&&(l(3),N(S(7,gt)),j("visible",r.passDialogVisible),p("modal",!0)("breakpoints",S(8,ht))("draggable",!1)("resizable",!1))},dependencies:[O,q,Y,L,Q,W,Z,J,X,z,ee,te,ne,re,ie]})}}return i})();var Ge=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=y({type:i,selectors:[["app-profile-home"]],decls:6,vars:0,consts:[[1,"grid","m-1"],[1,"col-12","lg:col-6","lg:col-offset-3"]],template:function(t,r){t&1&&(o(0,"div",0)(1,"div",1)(2,"p-card"),w(3,"change-username")(4,"br")(5,"change-password"),n()()())},dependencies:[ke,Oe,qe]})}}return i})();var Dt=[{path:"",component:Ge}],ze=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=x({type:i})}static{this.\u0275inj=b({imports:[le.forChild(Dt),le]})}}return i})();var ki=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=x({type:i})}static{this.\u0275inj=b({providers:[E],imports:[G,Te,Pe,ze,Ie,Ue,Ae,Ne,Me,Ke,Be,He]})}}return i})();export{ki as ProfileModule};
