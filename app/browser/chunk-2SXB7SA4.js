import{a as f}from"./chunk-LQTJ6KB6.js";import{b as g}from"./chunk-ZZBHPNZI.js";import{Kb as d,Lb as m,U as i,d as a,eb as u,nb as l,o as h,s as c}from"./chunk-4RWQR7BF.js";var k=(()=>{class n{constructor(){this.http=c(u),this.router=c(l),this.notificationService=c(d),this.socket=c(f),this.userService=c(g),this.customers=i([]),this.selectedCustomer=i(null),this.customersTotalDebts$=i({id:0,balance:"0"}),this.customerDialogVisible=i(!1),this.newOrder$=new a(null),this.customerBalance$=new a([]),this.signal_submitItemLoading=i(!1),this.signal_tableLoading=i(!1),this.signal_balanceLoading=i(!1),this.api=c(m),this.host=this.api.host,this.debts=i([]),this.debtsLoading=i(!1),this.glowingRowIndex=i(null),this.socketId=this.userService.socketId,this.getCustomers(),this.initializeSockets()}getDebts(){this.debtsLoading.set(!0),this.http.get(`${this.host()}/customers/debts`).subscribe({next:t=>{this.debts.set(t),this.debtsLoading.set(!1)},error:t=>{this.notificationService.handleError(t.error,"home"),this.debtsLoading.set(!1)}})}getCustomers(){this.signal_tableLoading.set(!0),this.http.get(`${this.host()}/customers`).subscribe({next:t=>{this.customers.set(t)},error:t=>{this.notificationService.handleError(t.error,"home"),this.signal_tableLoading.set(!1)},complete:()=>{this.signal_tableLoading.set(!1)}})}createCustomer(t){this.signal_submitItemLoading.set(!0),this.http.post(`${this.host()}/customers`,t).subscribe({next:e=>{this.notificationService.showSuccess("Customer added successfully!","home"),this.customers.set([...this.customers(),e])},error:e=>{this.notificationService.showError(e.error.message,"home"),this.signal_submitItemLoading.set(!1)},complete:()=>{this.customerDialogVisible.set(!1),this.signal_submitItemLoading.set(!1)}})}updateCustomer(t){this.signal_submitItemLoading.set(!0),this.http.put(`${this.host()}/customers/${t.account_id}`,t).subscribe({next:e=>{let o=this.customers().findIndex(s=>s.account_id===e.account_id);this.customers.update(s=>[...s.slice(0,o),e,...s.slice(o+1)]),this.selectedCustomer.set(e),this.notificationService.showSuccess("Data updated successfully!","home")},error:e=>{this.notificationService.showError(e,"home"),this.signal_submitItemLoading.set(!1)},complete:()=>{this.customerDialogVisible.set(!1),this.signal_submitItemLoading.set(!1)}})}deleteCustomer(t){this.http.delete(`${this.host()}/customers/${t.account_id}`).subscribe({next:e=>{this.customers.update(o=>{let s=this.customers().findIndex(r=>r.account_id===t.account_id);return o.splice(s,1),[...o]}),this.selectedCustomer.set(null),this.notificationService.showSuccess(e.message,"home")},error:e=>{this.notificationService.handleError(e.error,"home")}})}getCustomerBalance(t,e,o){this.signal_submitItemLoading.set(!0),this.http.get(`${this.host()}/customers/transactions/${t}&${e}&${o}`).subscribe({next:s=>{this.customerBalance$.next(s)},error:s=>{this.notificationService.handleError(s.error,"home"),this.signal_submitItemLoading.set(!1)},complete:()=>{this.signal_submitItemLoading.set(!1)}})}getAccountTotalBalance(t){this.signal_balanceLoading.set(!0),this.http.get(`${this.host()}/customers/${t}/balance`).subscribe({next:e=>{this.customersTotalDebts$.set(e)},error:e=>{this.notificationService.handleError(e.error,"home"),this.signal_balanceLoading.set(!1)},complete:()=>{this.signal_balanceLoading.set(!1)}})}highlightRow(t){this.glowingRowIndex.set(t),setTimeout(()=>{this.glowingRowIndex.set(null)},2e3)}initializeSockets(){this.socket.on("customerCreated",t=>{let e=t[0];t[1].user_id!=this.socketId()&&(this.customers.set([...this.customers(),e]),this.notificationService.showSocketMessage("New customer created!","home"),this.highlightRow(this.customers().length-1))}),this.socket.on("customerUpdated",t=>{let e=t[0];if(t[1].user_id!=this.socketId()){let s=this.customers().findIndex(r=>r.account_id===e.account_id);this.customers.update(r=>[...r.slice(0,s),e,...r.slice(s+1)]),e.account_id==this.selectedCustomer()?.account_id&&this.selectedCustomer.set(e),this.notificationService.showSocketMessage("A customer has been updated!","home"),this.highlightRow(s)}}),this.socket.on("customerDeleted",t=>{let e=t[0];t[1].user_id!=this.socketId()&&(this.customers.update(s=>{let r=this.customers().findIndex(b=>b.account_id===e.account_id);return s.splice(r,1),[...s]}),e.account_id==this.selectedCustomer()?.account_id&&this.selectedCustomer.set(null),this.notificationService.showSocketMessage("A customer has been deleted!","home"))})}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();export{k as a};
