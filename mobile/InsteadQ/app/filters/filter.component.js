"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var filter_service_1 = require("../services/filter.service");
var FilterComponent = /** @class */ (function () {
    function FilterComponent(filterService) {
        this.filterService = filterService;
    }
    FilterComponent.prototype.ngOnInit = function () {
        this.listObservable = this.filterService.getFilterList();
    };
    FilterComponent.prototype.onOptionChecked = function (args) {
    };
    FilterComponent = __decorate([
        core_1.Component({
            templateUrl: './filters/filter.component.html',
            selector: 'filter-widget',
            styleUrls: ['./filters/filter.component.css']
        }),
        __metadata("design:paramtypes", [filter_service_1.FilterService])
    ], FilterComponent);
    return FilterComponent;
}());
exports.FilterComponent = FilterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsNkRBQTJEO0FBUzNEO0lBRUkseUJBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBRWhELENBQUM7SUFDRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdELENBQUM7SUFDRCx5Q0FBZSxHQUFmLFVBQWdCLElBQUk7SUFFcEIsQ0FBQztJQVZRLGVBQWU7UUFMM0IsZ0JBQVMsQ0FBQztZQUNQLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7U0FDaEQsQ0FBQzt5Q0FHcUMsOEJBQWE7T0FGdkMsZUFBZSxDQVczQjtJQUFELHNCQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpbHRlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZmlsdGVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSBcIi4uL21vZGVscy9maWx0ZXJNb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZmlsdGVycy9maWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc2VsZWN0b3I6ICdmaWx0ZXItd2lkZ2V0JyxcclxuICAgIHN0eWxlVXJsczogWycuL2ZpbHRlcnMvZmlsdGVyLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgbGlzdE9ic2VydmFibGU6IE9ic2VydmFibGU8RmlsdGVyW10+XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpbHRlclNlcnZpY2U6IEZpbHRlclNlcnZpY2Upe1xyXG5cclxuICAgIH1cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5saXN0T2JzZXJ2YWJsZSA9IHRoaXMuZmlsdGVyU2VydmljZS5nZXRGaWx0ZXJMaXN0KCk7XHJcbiAgICB9XHJcbiAgICBvbk9wdGlvbkNoZWNrZWQoYXJncyl7XHJcblxyXG4gICAgfVxyXG59Il19