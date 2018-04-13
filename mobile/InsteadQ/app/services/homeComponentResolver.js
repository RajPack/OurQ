"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kiosks_service_1 = require("./kiosks.service");
var HomeComponentResolver = /** @class */ (function () {
    function HomeComponentResolver(kioskService) {
        this.kioskService = kioskService;
    }
    HomeComponentResolver.prototype.resolve = function () {
        console.log("Inside resolver");
        return this.kioskService.getHomePageKiosks();
    };
    HomeComponentResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [kiosks_service_1.KioskService])
    ], HomeComponentResolver);
    return HomeComponentResolver;
}());
exports.HomeComponentResolver = HomeComponentResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZUNvbXBvbmVudFJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZUNvbXBvbmVudFJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSTNDLG1EQUFnRDtBQUloRDtJQUNJLCtCQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUU5QyxDQUFDO0lBQ0QsdUNBQU8sR0FBUDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFQUSxxQkFBcUI7UUFEakMsaUJBQVUsRUFBRTt5Q0FFeUIsNkJBQVk7T0FEckMscUJBQXFCLENBU2pDO0lBQUQsNEJBQUM7Q0FBQSxBQVRELElBU0M7QUFUWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUmVzb2x2ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgS2lvc2tNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMva2lvc2tNb2RlbFwiO1xyXG5pbXBvcnQgeyBLaW9za1NlcnZpY2UgfSBmcm9tIFwiLi9raW9za3Muc2VydmljZVwiO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnRSZXNvbHZlciBpbXBsZW1lbnRzIFJlc29sdmU8T2JzZXJ2YWJsZTxLaW9za01vZGVsW10+PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGtpb3NrU2VydmljZTogS2lvc2tTZXJ2aWNlKXtcclxuXHJcbiAgICB9XHJcbiAgICByZXNvbHZlKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJbnNpZGUgcmVzb2x2ZXJcIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2lvc2tTZXJ2aWNlLmdldEhvbWVQYWdlS2lvc2tzKCk7XHJcbiAgICB9XHJcblxyXG59Il19