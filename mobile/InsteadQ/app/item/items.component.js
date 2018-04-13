"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var sidebar_1 = require("../sideBar/sidebar");
var kiosksItems_service_1 = require("../services/kiosksItems.service");
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
        var _this = this;
        this.itemService.getKioskItemsbyId("123").subscribe(function (itemsArr) {
            _this.items = itemsArr.map(function (item) {
                item.cartCount = item.cartCount ? item.cartCount : 0;
                return item;
            });
            _this.categoriesItems = _this.itemService.categorizeItems(_this.items);
        });
    };
    ItemsComponent.prototype.ngAfterViewInit = function () {
        this.sideBarInit(this.drawerComponent.sideDrawer);
    };
    ItemsComponent.prototype.addtoCart = function (item) {
        item.cartCount++;
        this.totalcartCount++;
        console.log(this.totalcartCount);
        this.totalPrice += item.price;
    };
    ItemsComponent.prototype.removeFromCart = function (item) {
        item.cartCount--;
        this.totalcartCount--;
        this.totalPrice -= item.price;
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
    ItemsComponent.prototype.onVegFilter = function (args) {
        var _this = this;
        var vegOnly = args.object.checked;
        args.object.color = vegOnly ? "#93CE7A" : "lightgray";
        setTimeout(function () {
            var filtereditems = _this.items.filter(function (item) {
                if (vegOnly && item.veg) {
                    return true;
                }
                else if (!vegOnly) {
                    return true;
                }
            });
            _this.categoriesItems = _this.itemService.categorizeItems(filtereditems);
        }, 400);
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
        __metadata("design:paramtypes", [kiosksItems_service_1.KioskItemsService, router_1.Router, core_1.ChangeDetectorRef])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsOERBQTRFO0FBQzVFLHNDQUE0RztBQUk1RywwQ0FBeUM7QUFDekMsOENBQWtEO0FBQ2xELHVFQUFvRTtBQVdwRTtJQVNJLDZJQUE2STtJQUM3SSxpSEFBaUg7SUFDakgsd0JBQW9CLFdBQThCLEVBQVUsTUFBYyxFQUFVLGtCQUFxQztRQUF6SCxpQkFLQztRQUxtQixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQVJqSCxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsY0FBUyxHQUFHLEtBQUssQ0FBQztRQU10QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixVQUFVLENBQUM7WUFDUCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0QsaUNBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxRQUFRO1lBQ3pELEtBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUk7Z0JBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyRCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0Qsd0NBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0Qsa0NBQVMsR0FBVCxVQUFVLElBQWU7UUFDckIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDakMsQ0FBQztJQUNELHVDQUFjLEdBQWQsVUFBZSxJQUFlO1FBQzFCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxvQ0FBVyxHQUFYLFVBQVksTUFBcUI7UUFBakMsaUJBVUM7UUFURyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksc0JBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztZQUN0QixLQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztZQUN0QixLQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0Qsb0NBQVcsR0FBWCxVQUFZLElBQUk7UUFBaEIsaUJBZ0JDO1FBZkcsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUN0RCxVQUFVLENBQUM7WUFFUCxJQUFJLGFBQWEsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUk7Z0JBQ3ZDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDaEIsQ0FBQztnQkFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUVaLENBQUM7SUFsRWtDO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQWtCLGdDQUFzQjsyREFBQztJQURsRSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUN2QyxDQUFDO3lDQVltQyx1Q0FBaUIsRUFBa0IsZUFBTSxFQUE4Qix3QkFBaUI7T0FYaEgsY0FBYyxDQW9FMUI7SUFBRCxxQkFBQztDQUFBLEFBcEVELElBb0VDO0FBcEVZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFRlbXBsYXRlUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBRbGVzc1NpZGVCYXIgfSBmcm9tIFwiLi4vc2lkZUJhci9zaWRlYmFyXCI7XG5pbXBvcnQgeyBLaW9za0l0ZW1zU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9raW9za3NJdGVtcy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBLaW9za0l0ZW0sIENhdGVnb3JpemVkSXRlbSB9IGZyb20gXCIuLi9tb2RlbHMva2lvc2tJdGVtTW9kZWxcIjtcblxuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2l0ZW1zLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICAgIHByaXZhdGUgc2lkZURyYXdlcjogUWxlc3NTaWRlQmFyO1xuICAgIHByaXZhdGUgcmFkU0R6SW5kZXggPSAxO1xuICAgIHByaXZhdGUgdG90YWxjYXJ0Q291bnQgPSAwO1xuICAgIHByaXZhdGUgdG90YWxQcmljZSA9IDA7XG4gICAgcHJpdmF0ZSBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgICBpdGVtczogS2lvc2tJdGVtW107XG4gICAgY2F0ZWdvcmllc0l0ZW1zOiBDYXRlZ29yaXplZEl0ZW1bXTtcbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuIFxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1TZXJ2aWNlOiBLaW9za0l0ZW1zU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbVNlcnZpY2UuZ2V0S2lvc2tJdGVtc2J5SWQoXCIxMjNcIikuc3Vic2NyaWJlKChpdGVtc0FycikgPT4ge1xuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zQXJyLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2FydENvdW50ID0gaXRlbS5jYXJ0Q291bnQgPyBpdGVtLmNhcnRDb3VudCA6IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllc0l0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5jYXRlZ29yaXplSXRlbXModGhpcy5pdGVtcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuc2lkZUJhckluaXQodGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcik7XG4gICAgfVxuICAgIGFkZHRvQ2FydChpdGVtOiBLaW9za0l0ZW0pIHtcbiAgICAgICAgaXRlbS5jYXJ0Q291bnQrKztcbiAgICAgICAgdGhpcy50b3RhbGNhcnRDb3VudCsrO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRvdGFsY2FydENvdW50KTtcbiAgICAgICAgdGhpcy50b3RhbFByaWNlICs9IGl0ZW0ucHJpY2VcbiAgICB9XG4gICAgcmVtb3ZlRnJvbUNhcnQoaXRlbTogS2lvc2tJdGVtKSB7XG4gICAgICAgIGl0ZW0uY2FydENvdW50LS07XG4gICAgICAgIHRoaXMudG90YWxjYXJ0Q291bnQtLTtcbiAgICAgICAgdGhpcy50b3RhbFByaWNlIC09IGl0ZW0ucHJpY2U7XG4gICAgfVxuICAgIHNpZGVCYXJJbml0KGRyYXdlcjogUmFkU2lkZURyYXdlcikge1xuICAgICAgICB0aGlzLnNpZGVEcmF3ZXIgPSBuZXcgUWxlc3NTaWRlQmFyKGRyYXdlcik7XG4gICAgICAgIHRoaXMuc2lkZURyYXdlci5vbk9wZW5pbmcoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yYWRTRHpJbmRleCA9IDQ7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNpZGVEcmF3ZXIub25DbG9zaW5nKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmFkU0R6SW5kZXggPSAxO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25WZWdGaWx0ZXIoYXJncykge1xuICAgICAgICBsZXQgdmVnT25seSA9IGFyZ3Mub2JqZWN0LmNoZWNrZWQ7XG4gICAgICAgIGFyZ3Mub2JqZWN0LmNvbG9yID0gdmVnT25seSA/IFwiIzkzQ0U3QVwiIDogXCJsaWdodGdyYXlcIjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZGl0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmVnT25seSAmJiBpdGVtLnZlZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXZlZ09ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXNJdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuY2F0ZWdvcml6ZUl0ZW1zKGZpbHRlcmVkaXRlbXMpO1xuICAgICAgICB9LCA0MDApO1xuXG4gICAgfVxufSJdfQ==