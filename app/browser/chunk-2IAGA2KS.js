import{Gb as c,Hb as n,R as a,ab as r,m as o,p as s}from"./chunk-D4YDXMC2.js";var g=(()=>{class i{constructor(){this.http=s(r),this.api=s(n),this.notificationService=s(c),this.loading_balance=a(!1),this.balance=a({}),this.cashDialogVisible=a(!1),this.getBalance()}getBalance(){this.loading_balance.set(!0),this.http.get(`${this.api.host()}/balance`).subscribe({next:t=>{this.balance.set(t),this.loading_balance.set(!1)},error:t=>{console.log(t),this.loading_balance.set(!1)}})}submitCash(t){this.http.post(`${this.api.host()}/balance/correct`,t).subscribe({next:e=>{this.notificationService.showSuccess(e.message,"home"),this.cashDialogVisible.set(!1),this.getBalance()},error:e=>{this.notificationService.handleError(e.error,"home")}})}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275prov=o({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();export{g as a};
