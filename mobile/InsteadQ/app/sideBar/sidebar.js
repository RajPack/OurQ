"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_ui_sidedrawer_1 = require("nativescript-ui-sidedrawer");
//Sidebar functionalities
var QlessSideBar = /** @class */ (function () {
    function QlessSideBar(drawer) {
        this.drawer = drawer;
    }
    QlessSideBar.prototype.toggle = function () {
        this.drawer.toggleDrawerState();
    };
    QlessSideBar.prototype.close = function () {
        this.drawer.closeDrawer();
    };
    QlessSideBar.prototype.onOpening = function (callback) {
        this.drawer.addEventListener(nativescript_ui_sidedrawer_1.RadSideDrawer.drawerOpeningEvent, callback);
    };
    QlessSideBar.prototype.onClosing = function (callback) {
        this.drawer.addEventListener(nativescript_ui_sidedrawer_1.RadSideDrawer.drawerClosedEvent, callback);
    };
    QlessSideBar.prototype.navigate = function (router, path) {
        this.close();
        router.navigate(path);
    };
    return QlessSideBar;
}());
exports.QlessSideBar = QlessSideBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZGViYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5RUFBMkQ7QUFHM0QseUJBQXlCO0FBRXpCO0lBQ0ksc0JBQW1CLE1BQXFCO1FBQXJCLFdBQU0sR0FBTixNQUFNLENBQWU7SUFDeEMsQ0FBQztJQUVELDZCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUNELDRCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFDRCxnQ0FBUyxHQUFULFVBQVUsUUFBUTtRQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsMENBQWEsQ0FBQyxrQkFBa0IsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBQ0QsZ0NBQVMsR0FBVCxVQUFVLFFBQVE7UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLDBDQUFhLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUNELCtCQUFRLEdBQVIsVUFBUyxNQUFjLEVBQUUsSUFBSTtRQUN6QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbi8vU2lkZWJhciBmdW5jdGlvbmFsaXRpZXNcclxuXHJcbmV4cG9ydCBjbGFzcyBRbGVzc1NpZGVCYXIge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGRyYXdlcjogUmFkU2lkZURyYXdlcikge1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZSgpe1xyXG4gICAgICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XHJcbiAgICB9XHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xyXG4gICAgfVxyXG4gICAgb25PcGVuaW5nKGNhbGxiYWNrKXtcclxuICAgICAgICB0aGlzLmRyYXdlci5hZGRFdmVudExpc3RlbmVyKFJhZFNpZGVEcmF3ZXIuZHJhd2VyT3BlbmluZ0V2ZW50LCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBvbkNsb3NpbmcoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmRyYXdlci5hZGRFdmVudExpc3RlbmVyKFJhZFNpZGVEcmF3ZXIuZHJhd2VyQ2xvc2VkRXZlbnQsIGNhbGxiYWNrKTtcclxuICAgIH1cclxuICAgIG5hdmlnYXRlKHJvdXRlcjogUm91dGVyLCBwYXRoKXtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgcm91dGVyLm5hdmlnYXRlKHBhdGgpO1xyXG4gICAgfVxyXG59Il19