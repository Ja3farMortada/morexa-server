import{Gb as d,Hb as u,R as s,ab as n,b as l,c as g,m as h,p as a}from"./chunk-D4YDXMC2.js";var m=(()=>{class o{constructor(){this.setSellPageViewHeight(),this.setSupplyPageViewHeight(),this.setEditInvoiceDialogHeight(),this.setStockRowsPerPage()}setSellPageViewHeight(){localStorage.getItem("sellTableViewHeight")||localStorage.setItem("sellTableViewHeight","50vh")}getSellPageViewHeight(){return localStorage.getItem("sellTableViewHeight")}setEditInvoiceDialogHeight(){localStorage.getItem("editInvoiceDialogHeight")||localStorage.setItem("editInvoiceDialogHeight","40vh")}getEditInvoiceDialogHeight(){return localStorage.getItem("editInvoiceDialogHeight")}setSupplyPageViewHeight(){localStorage.getItem("supplyTableViewHeight")||localStorage.setItem("supplyTableViewHeight","40vh")}getSupplyPageViewHeight(){return localStorage.getItem("supplyTableViewHeight")||"45vh"}setStockRowsPerPage(e=null){localStorage.getItem("stockRowsPerPage")?e&&localStorage.setItem("stockRowsPerPage",e):localStorage.setItem("stockRowsPerPage","10")}getStockRowsPerPage(){return parseInt(localStorage.getItem("stockRowsPerPage"))}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275prov=h({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();var x=(()=>{class o{constructor(){this.http=a(n),this.notificationService=a(d),this.api=a(u),this.localStorageService=a(m),this.rowsPerPage=s(this.localStorageService.getStockRowsPerPage()),this.categories=s([]),this.categoryDialogVisible=s(!1),this.categoriesLoading=s(!1),this.selectedProduct=s(null),this.selectedCategory=s(null),this.selectedCategorySell=s(null),this.sellFilteredItems=s([]),this.itemSidebarVisible=s(!1),this.products=s([]),this.filteredItems=s([]),this.tableLoading=s(!1),this.submitItemLoading=s(!1),this.first_run=!0,this.barcodeError=new l,this.itemCreated=new l,this.stockDialogVisible=s(!1),this.sellProductsLoading=s(!1),this.selectedItem=s(null),this.exchangeRate=s({rate_value:0}),this.recentRates=s([]),this.rateDialogVisible=s(!1),this.stockHistory=s([]),this.historyLoading=s(!1),this.historyDialogVisible=s(!1),this.generatedBarcode=new g(null),this.getExchangeRate(),this.getCategories(),this.getItems()}updateRowsPerPage(e){this.localStorageService.setStockRowsPerPage(e),this.rowsPerPage.set(this.localStorageService.getStockRowsPerPage())}getCategories(){this.categoriesLoading.set(!0),this.http.get(`${this.api.host()}/stock/categories`).subscribe({next:e=>{this.categories.set(e),this.categoriesLoading.set(!1)},error:e=>{this.notificationService.handleError(e.error,"home"),this.categoriesLoading.set(!1)}})}createCategory(e){this.http.post(`${this.api.host()}/stock/categories`,e).subscribe({next:t=>{this.categories.set([...this.categories(),t]),this.notificationService.showSuccess("Category Created Successfully!","home")},error:t=>{this.notificationService.handleError(t.error,"home")}})}sortCategories(){this.http.patch(`${this.api.host()}/stock/categories/sort`,this.categories()).subscribe({next:e=>{this.categories.set(e),this.notificationService.showSuccess("Rows reordered successfully!","home")},error:e=>{this.notificationService.handleError(e.error,"home")}})}updateCategory(e){this.http.put(`${this.api.host()}/stock/categories`,e).subscribe({next:t=>{this.notificationService.showSuccess("Category updated successfully!","home");let i=this.categories().findIndex(r=>r.category_id===t.category_id);this.categories.update(r=>[...r.slice(0,i),t,...r.slice(i+1)]),this.categoryDialogVisible.set(!1),this.selectedCategory.set(t),this.selectedCategorySell.set(null),this.sellFilteredItems.set([])},error:t=>{this.notificationService.handleError(t.error,"home")}})}deleteCategory(e){this.http.delete(`${this.api.host()}/stock/categories/${e}`).subscribe({next:t=>{this.notificationService.showSuccess(t.message,"home"),this.getCategories(),this.selectedCategory.set(null)},error:t=>{this.notificationService.handleError(t.error,"home")}})}getItems(){this.tableLoading.set(!0),this.http.get(`${this.api.host()}/stock/items`).subscribe({next:e=>{this.products.set(e),this.tableLoading.set(!1)},error:e=>{this.notificationService.handleError(e.error,"home"),this.tableLoading.set(!1)}})}getFilteredItems(e,t){e&&(this.sellProductsLoading.set(!0),this.http.get(`${this.api.host()}/stock/items/${e.category_id}`).subscribe({next:i=>{t=="stock"?this.filteredItems.set(i):this.sellFilteredItems.set(i),this.sellProductsLoading.set(!1)},error:i=>{this.notificationService.handleError(i.error,"home"),this.sellProductsLoading.set(!1)}}))}selectCategory(e){this.selectedCategory.set(e),this.selectedItem.set(0)}selectItem(e){this.selectedItem.set(e)}createItem(e){this.submitItemLoading.set(!0),this.http.post(`${this.api.host()}/stock/items`,e).subscribe({next:t=>{this.itemCreated.next(),this.products.set([...this.products(),t]),this.notificationService.showSuccess("Item Created Successfully!","home"),this.selectedCategory()&&this.getFilteredItems(this.selectedCategory(),"stock")},error:t=>{t.status==400&&this.barcodeError.next(),this.notificationService.handleError(t,"home"),this.submitItemLoading.set(!1)},complete:()=>{this.submitItemLoading.set(!1),this.dt2?.reset()}})}updateItem(e){this.submitItemLoading.set(!0),this.http.put(`${this.api.host()}/stock/items`,e).subscribe({next:t=>{this.products.update(i=>{let r=this.products().findIndex(c=>c.product_id===e.product_id);return[...i.slice(0,r),t,...i.slice(r+1)]}),this.notificationService.showSuccess("Product updated successfully!","home"),this.getFilteredItems(this.selectedCategory(),"stock"),this.selectedProduct.set(t)},error:t=>{t.status==400&&this.barcodeError.next(),this.notificationService.handleError(t,"home"),this.submitItemLoading.set(!1)},complete:()=>{this.itemSidebarVisible.set(!1),this.submitItemLoading.set(!1)}})}deleteItem(e){this.tableLoading.set(!0),this.http.delete(`${this.api.host()}/stock/items/${e.product_id}`).subscribe({next:t=>{this.products.update(i=>{let r=this.products().findIndex(c=>c.product_id===e.product_id);return i.splice(r,1),[...i]}),this.notificationService.showSuccess(t.message,"home"),this.tableLoading.set(!1),this.getFilteredItems(this.selectedCategory(),"stock"),this.selectedProduct.set(null)},error:t=>{this.notificationService.handleError(t.error,"home"),this.tableLoading.set(!1)}})}submitStock(e){this.http.post(`${this.api.host()}/stock/correction`,e).subscribe({next:t=>{this.notificationService.showSuccess(t.message,"home"),this.getItems(),this.selectedCategory()&&this.getFilteredItems(this.selectedCategory(),"stock"),this.resetSellPage(),this.stockDialogVisible.set(!1)},error:t=>{this.notificationService.handleError(t.error,"home")}})}getExchangeRate(){this.http.get(`${this.api.host()}/stock/rate`).subscribe({next:e=>{this.exchangeRate.set(e)},error:e=>{this.notificationService.handleError(e.error,"home")}})}updateExchangeRate(e){this.http.post(`${this.api.host()}/stock/rate`,e).subscribe({next:t=>{this.notificationService.showSuccess("Rate updated successfully!","home"),this.exchangeRate.set(t),this.rateDialogVisible.set(!1)},error:t=>{this.notificationService.handleError(t.error,"home")}})}fetchStockHistory(e){this.historyLoading.set(!0),this.http.get(`${this.api.host()}/stock/history/${e}`).subscribe({next:t=>{this.historyLoading.set(!1),this.stockHistory.set(t),this.historyDialogVisible.set(!0)},error:t=>{this.historyLoading.set(!1),this.notificationService.handleError(t.error,"home")}})}generateBarcode(){this.http.get(`${this.api.host()}/stock/generate-barcode`).subscribe({next:e=>{this.generatedBarcode.next(e)},error:e=>{this.notificationService.showError(e.error,"home")}})}resetSellPage(){this.selectedCategorySell.set(null),this.sellFilteredItems.set([])}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275prov=h({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();export{m as a,x as b};
