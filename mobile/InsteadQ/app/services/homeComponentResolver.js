"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kiosks_service_1 = require("./kiosks.service");
var HomeComponentResolver = /** @class */ (function () {
    function HomeComponentResolver(kioskService) {
        this.kioskService = kioskService;
    }
    HomeComponentResolver.prototype.resolve = function () {
        this.kioskService.pingServer();
        return this.kioskService.getHomePageKiosks();
    };
    HomeComponentResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [kiosks_service_1.KioskService])
    ], HomeComponentResolver);
    return HomeComponentResolver;
}());
exports.HomeComponentResolver = HomeComponentResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZUNvbXBvbmVudFJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZUNvbXBvbmVudFJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSTNDLG1EQUFnRDtBQUloRDtJQUNJLCtCQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUU5QyxDQUFDO0lBQ0QsdUNBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBUFEscUJBQXFCO1FBRGpDLGlCQUFVLEVBQUU7eUNBRXlCLDZCQUFZO09BRHJDLHFCQUFxQixDQVNqQztJQUFELDRCQUFDO0NBQUEsQUFURCxJQVNDO0FBVFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJlc29sdmUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEtpb3NrTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2tpb3NrTW9kZWxcIjtcclxuaW1wb3J0IHsgS2lvc2tTZXJ2aWNlIH0gZnJvbSBcIi4va2lvc2tzLnNlcnZpY2VcIjtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50UmVzb2x2ZXIgaW1wbGVtZW50cyBSZXNvbHZlPE9ic2VydmFibGU8S2lvc2tNb2RlbFtdPj4ge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBraW9za1NlcnZpY2U6IEtpb3NrU2VydmljZSl7XHJcblxyXG4gICAgfVxyXG4gICAgcmVzb2x2ZSgpe1xyXG4gICAgICAgIHRoaXMua2lvc2tTZXJ2aWNlLnBpbmdTZXJ2ZXIoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5raW9za1NlcnZpY2UuZ2V0SG9tZVBhZ2VLaW9za3MoKTtcclxuICAgIH1cclxuXHJcbn0iXX0=