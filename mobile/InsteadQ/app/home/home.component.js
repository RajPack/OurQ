"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var platform_1 = require("platform");
var sidebar_1 = require("../sideBar/sidebar");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, activatedRoute, changeDetectionRef) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.changeDetectionRef = changeDetectionRef;
        this.radSDzIndex = 1;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showFilters = false;
        this.activatedRoute.data.subscribe(function (data) {
            console.log("resolving");
            _this.kiosks = data.kiosks;
        });
    };
    HomeComponent.prototype.disableSearchFocus = function (args) {
        if (platform_1.isAndroid) {
            var searchBar = args.object;
            searchBar.android.clearFocus();
        }
    };
    HomeComponent.prototype.toggleSideBar = function () {
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.sideBarInit(this.sideDrawerComponent.sideDrawer);
    };
    HomeComponent.prototype.sideBarInit = function (drawer) {
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
    HomeComponent.prototype.toggleFilters = function () {
        this.sideDrawer.close();
        this.showFilters = !this.showFilters;
    };
    HomeComponent.prototype.onSearchChange = function (args) {
    };
    HomeComponent.prototype.onSearchClear = function (args) {
    };
    HomeComponent.prototype.onSearchSubmit = function (args) {
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], HomeComponent.prototype, "sideDrawerComponent", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: "app-home",
            styleUrls: ['./home/home.component.css'],
            templateUrl: "./home/home.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, core_1.ChangeDetectorRef])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUErRjtBQUMvRiwwQ0FBeUQ7QUFDekQsOERBQTRFO0FBRTVFLHFDQUFtQztBQUduQyw4Q0FBa0Q7QUFTbEQ7SUFNSSx1QkFBb0IsTUFBYyxFQUFVLGNBQThCLEVBQVUsa0JBQXFDO1FBQXJHLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBRnpILGdCQUFXLEdBQUcsQ0FBQyxDQUFDO0lBSWhCLENBQUM7SUFDRCxnQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekIsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELDBDQUFrQixHQUFsQixVQUFtQixJQUFJO1FBQ25CLEVBQUUsQ0FBQSxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN2QyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ25DLENBQUM7SUFDTCxDQUFDO0lBQ0QscUNBQWEsR0FBYjtJQUVBLENBQUM7SUFDRCx1Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNELG1DQUFXLEdBQVgsVUFBWSxNQUFxQjtRQUFqQyxpQkFVQztRQVRHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxzQkFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxxQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBQ0Qsc0NBQWMsR0FBZCxVQUFlLElBQUk7SUFFbkIsQ0FBQztJQUNELHFDQUFhLEdBQWIsVUFBYyxJQUFJO0lBRWxCLENBQUM7SUFDRCxzQ0FBYyxHQUFkLFVBQWUsSUFBSTtJQUVuQixDQUFDO0lBbERrQztRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUFzQixnQ0FBc0I7OERBQUM7SUFEdEUsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7WUFDeEMsV0FBVyxFQUFFLDRCQUE0QjtTQUM1QyxDQUFDO3lDQU84QixlQUFNLEVBQTBCLHVCQUFjLEVBQThCLHdCQUFpQjtPQU5oSCxhQUFhLENBb0R6QjtJQUFELG9CQUFDO0NBQUEsQUFwREQsSUFvREM7QUFwRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBWaWV3Q2hpbGQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7aXNBbmRyb2lkfSBmcm9tIFwicGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcclxuXHJcbmltcG9ydCB7IFFsZXNzU2lkZUJhciB9IGZyb20gXCIuLi9zaWRlQmFyL3NpZGViYXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgS2lvc2tNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMva2lvc2tNb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtaG9tZVwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQge1xyXG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBzaWRlRHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG4gICAga2lvc2tzOiBLaW9za01vZGVsW107XHJcbiAgICBzaWRlRHJhd2VyOiBRbGVzc1NpZGVCYXI7XHJcbiAgICByYWRTRHpJbmRleCA9IDE7XHJcbiAgICBzaG93RmlsdGVyczogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGNoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpe1xyXG5cclxuICAgIH1cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5zaG93RmlsdGVycyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuZGF0YS5zdWJzY3JpYmUoKGRhdGEpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzb2x2aW5nXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmtpb3NrcyA9IGRhdGEua2lvc2tzO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBkaXNhYmxlU2VhcmNoRm9jdXMoYXJncyl7XHJcbiAgICAgICAgaWYoaXNBbmRyb2lkKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWFyY2hCYXI6IFNlYXJjaEJhciA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgICAgICAgICBzZWFyY2hCYXIuYW5kcm9pZC5jbGVhckZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdG9nZ2xlU2lkZUJhcigpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgbmdBZnRlclZpZXdJbml0KCl7XHJcbiAgICAgICAgdGhpcy5zaWRlQmFySW5pdCh0aGlzLnNpZGVEcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcik7XHJcbiAgICB9XHJcbiAgICBzaWRlQmFySW5pdChkcmF3ZXI6IFJhZFNpZGVEcmF3ZXIpe1xyXG4gICAgICAgIHRoaXMuc2lkZURyYXdlciA9IG5ldyBRbGVzc1NpZGVCYXIoZHJhd2VyKTtcclxuICAgICAgICB0aGlzLnNpZGVEcmF3ZXIub25PcGVuaW5nKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMucmFkU0R6SW5kZXggPSA0O1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zaWRlRHJhd2VyLm9uQ2xvc2luZygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnJhZFNEekluZGV4ID0gMTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdG9nZ2xlRmlsdGVycygpe1xyXG4gICAgICAgIHRoaXMuc2lkZURyYXdlci5jbG9zZSgpO1xyXG4gICAgICAgIHRoaXMuc2hvd0ZpbHRlcnMgPSAhdGhpcy5zaG93RmlsdGVycztcclxuICAgIH1cclxuICAgIG9uU2VhcmNoQ2hhbmdlKGFyZ3MpIHtcclxuXHJcbiAgICB9XHJcbiAgICBvblNlYXJjaENsZWFyKGFyZ3MpIHtcclxuXHJcbiAgICB9XHJcbiAgICBvblNlYXJjaFN1Ym1pdChhcmdzKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIl19