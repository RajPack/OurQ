"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var router_1 = require("@angular/router");
var sidebar_1 = require("../sideBar/sidebar");
var ItemsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService, router, changeDetectionRef) {
        var _this = this;
        this.itemService = itemService;
        this.router = router;
        this.changeDetectionRef = changeDetectionRef;
        this.radSDzIndex = 1;
        this.totalcartCount = 0;
        this.totalPrice = 0;
        this.isLoading = false;
        this.isLoading = true;
        setTimeout(function () {
            _this.isLoading = false;
        }, 1000);
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
    };
    ItemsComponent.prototype.ngAfterViewInit = function () {
        this.sideBarInit(this.drawerComponent.sideDrawer);
    };
    ItemsComponent.prototype.addtoCart = function (item) {
        item.cartCount++;
        this.totalcartCount++;
        console.log(this.totalcartCount);
        this.totalPrice += 60;
    };
    ItemsComponent.prototype.removeFromCart = function (item) {
        item.cartCount--;
        this.totalcartCount--;
        this.totalPrice -= 60;
    };
    ItemsComponent.prototype.sideBarInit = function (drawer) {
        var _this = this;
        this.sideDrawer = new sidebar_1.QlessSideBar(drawer);
        this.sideDrawer.onOpening(function () {
            _this.radSDzIndex = 4;
            _this.changeDetectionRef.detectChanges();
        });
        this.sideDrawer.onClosing(function () {
            _this.radSDzIndex = 1;
            _this.changeDetectionRef.detectChanges();
        });
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], ItemsComponent.prototype, "drawerComponent", void 0);
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
            styleUrls: ["./items.component.css"]
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService, router_1.Router, core_1.ChangeDetectorRef])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsOERBQTRFO0FBQzVFLHNDQUE2RztBQUc3RywrQ0FBNkM7QUFDN0MsMENBQXlDO0FBQ3pDLDhDQUFrRDtBQVVsRDtJQVFJLDZJQUE2STtJQUM3SSxpSEFBaUg7SUFDakgsd0JBQW9CLFdBQXdCLEVBQVUsTUFBYyxFQUFVLGtCQUFxQztRQUFuSCxpQkFLRTtRQUxrQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBUDNHLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBS3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLFVBQVUsQ0FBQztZQUNQLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRixpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFDRCx3Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxrQ0FBUyxHQUFULFVBQVUsSUFBVTtRQUNoQixJQUFJLENBQUMsU0FBUyxFQUFHLENBQUM7UUFDbEIsSUFBSSxDQUFDLGNBQWMsRUFBRyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCx1Q0FBYyxHQUFkLFVBQWUsSUFBVTtRQUNyQixJQUFJLENBQUMsU0FBUyxFQUFHLENBQUM7UUFDbEIsSUFBSSxDQUFDLGNBQWMsRUFBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCxvQ0FBVyxHQUFYLFVBQVksTUFBcUI7UUFBakMsaUJBVUM7UUFURyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksc0JBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztZQUN0QixLQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztZQUN0QixLQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBMUNrQztRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUFrQixnQ0FBc0I7MkRBQUM7SUFEbEUsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdkMsQ0FBQzt5Q0FXbUMsMEJBQVcsRUFBa0IsZUFBTSxFQUE4Qix3QkFBaUI7T0FWMUcsY0FBYyxDQTRDMUI7SUFBRCxxQkFBQztDQUFBLEFBNUNELElBNENDO0FBNUNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCAgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFFsZXNzU2lkZUJhciB9IGZyb20gXCIuLi9zaWRlQmFyL3NpZGViYXJcIjtcblxuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2l0ZW1zLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICAgIHByaXZhdGUgc2lkZURyYXdlcjogUWxlc3NTaWRlQmFyO1xuICAgIHByaXZhdGUgcmFkU0R6SW5kZXggPSAxO1xuICAgIHByaXZhdGUgdG90YWxjYXJ0Q291bnQgPSAwO1xuICAgIHByaXZhdGUgdG90YWxQcmljZSA9IDA7XG4gICAgcHJpdmF0ZSBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgICBpdGVtczogSXRlbVtdO1xuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy4gXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGNoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9LDEwMDApO1xuICAgICB9XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG4gICAgfVxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgICAgICB0aGlzLnNpZGVCYXJJbml0KHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIpO1xuICAgIH1cbiAgICBhZGR0b0NhcnQoaXRlbTogSXRlbSkge1xuICAgICAgICBpdGVtLmNhcnRDb3VudCArKztcbiAgICAgICAgdGhpcy50b3RhbGNhcnRDb3VudCArKztcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50b3RhbGNhcnRDb3VudCk7XG4gICAgICAgIHRoaXMudG90YWxQcmljZSArPSA2MDtcbiAgICB9XG4gICAgcmVtb3ZlRnJvbUNhcnQoaXRlbTogSXRlbSl7XG4gICAgICAgIGl0ZW0uY2FydENvdW50IC0tO1xuICAgICAgICB0aGlzLnRvdGFsY2FydENvdW50IC0tO1xuICAgICAgICB0aGlzLnRvdGFsUHJpY2UgLT0gNjA7XG4gICAgfVxuICAgIHNpZGVCYXJJbml0KGRyYXdlcjogUmFkU2lkZURyYXdlcil7XG4gICAgICAgIHRoaXMuc2lkZURyYXdlciA9IG5ldyBRbGVzc1NpZGVCYXIoZHJhd2VyKTtcbiAgICAgICAgdGhpcy5zaWRlRHJhd2VyLm9uT3BlbmluZygoKT0+e1xuICAgICAgICAgICAgdGhpcy5yYWRTRHpJbmRleCA9IDQ7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNpZGVEcmF3ZXIub25DbG9zaW5nKCgpPT57XG4gICAgICAgICAgICB0aGlzLnJhZFNEekluZGV4ID0gMTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==