import{Db as N,E as T,Eb as g,K as i,L as _,Ta as S,U as l,V as p,Va as E,W as o,Wa as w,Xa as D,_ as v,_a as j,aa as s,ba as c,fa as m,ia as d,ja as C,ka as h,ma as x,n as f,oa as I,pa as M,q as b,r as y}from"./chunk-D4YDXMC2.js";var O=["*"];function k(e,r){e&1&&m(0)}function L(e,r){if(e&1&&(s(0,"div",4),l(1,k,1,0,"ng-container",5),c()),e&2){let t=d();p("data-pc-section","start"),i(),o("ngTemplateOutlet",t.startTemplate)}}function Q(e,r){e&1&&m(0)}function A(e,r){if(e&1&&(s(0,"div",6),l(1,Q,1,0,"ng-container",5),c()),e&2){let t=d();p("data-pc-section","center"),i(),o("ngTemplateOutlet",t.centerTemplate)}}function F(e,r){e&1&&m(0)}function R(e,r){if(e&1&&(s(0,"div",7),l(1,F,1,0,"ng-container",5),c()),e&2){let t=d();p("data-pc-section","end"),i(),o("ngTemplateOutlet",t.endTemplate)}}var G=(()=>{class e{el;style;styleClass;ariaLabelledBy;templates;startTemplate;endTemplate;centerTemplate;constructor(t){this.el=t}getBlockableElement(){return this.el.nativeElement.children[0]}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"start":case"left":this.startTemplate=t.template;break;case"end":case"right":this.endTemplate=t.template;break;case"center":this.centerTemplate=t.template;break}})}static \u0275fac=function(n){return new(n||e)(_(T))};static \u0275cmp=b({type:e,selectors:[["p-toolbar"]],contentQueries:function(n,a,B){if(n&1&&x(B,N,4),n&2){let u;I(u=M())&&(a.templates=u)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy"},ngContentSelectors:O,decls:5,vars:9,consts:[["role","toolbar",3,"ngClass","ngStyle"],["class","p-toolbar-group-left p-toolbar-group-start",4,"ngIf"],["class","p-toolbar-group-center",4,"ngIf"],["class","p-toolbar-group-right p-toolbar-group-end",4,"ngIf"],[1,"p-toolbar-group-left","p-toolbar-group-start"],[4,"ngTemplateOutlet"],[1,"p-toolbar-group-center"],[1,"p-toolbar-group-right","p-toolbar-group-end"]],template:function(n,a){n&1&&(C(),s(0,"div",0),h(1),l(2,L,2,2,"div",1)(3,A,2,2,"div",2)(4,R,2,2,"div",3),c()),n&2&&(v(a.styleClass),o("ngClass","p-toolbar p-component")("ngStyle",a.style),p("aria-labelledby",a.ariaLabelledBy)("data-pc-name","toolbar"),i(2),o("ngIf",a.startTemplate),i(),o("ngIf",a.centerTemplate),i(),o("ngIf",a.endTemplate))},dependencies:[S,E,D,w],styles:[`@layer primeng{.p-toolbar{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}.p-toolbar-group-start,.p-toolbar-group-center,.p-toolbar-group-end,.p-toolbar-group-left,.p-toolbar-group-right{display:flex;align-items:center}}
`],encapsulation:2,changeDetection:0})}return e})(),H=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=y({type:e});static \u0275inj=f({imports:[j,g,g]})}return e})();export{G as a,H as b};
