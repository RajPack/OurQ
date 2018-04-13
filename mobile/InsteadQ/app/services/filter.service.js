"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var FilterService = /** @class */ (function () {
    function FilterService() {
    }
    FilterService.prototype.getFilterList = function () {
        var filterObservable = Observable_1.Observable.create(function (observer) {
            observer.next(sampleFilterData);
            observer.complete();
        });
        return filterObservable;
    };
    FilterService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], FilterService);
    return FilterService;
}());
exports.FilterService = FilterService;
var sampleFilterData = [
    {
        filterCategory: "Building",
        options: [
            { name: "Building 50", checked: false },
            { name: "Building 28", checked: false },
            { name: "Building 18", checked: false },
            { name: "Building 10", checked: false },
            { name: "Building 25", checked: false },
            { name: "Building 42", checked: false }
        ]
    },
    {
        filterCategory: "Cousine",
        options: [
            { name: "South Indian", checked: false },
            { name: "North Indian", checked: false },
            { name: "Punjabi", checked: false },
            { name: "Andhra cousine", checked: false },
            { name: "Italian", checked: false },
            { name: "Chinese", checked: false }
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWx0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw4Q0FBNkM7QUFLN0M7SUFDSTtJQUFjLENBQUM7SUFFZixxQ0FBYSxHQUFiO1FBQ0ksSUFBSSxnQkFBZ0IsR0FBb0IsdUJBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQyxRQUE0QjtZQUNuRixRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDaEMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLGdCQUFnQixDQUFDO0lBQzVCLENBQUM7SUFUUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7O09BQ0EsYUFBYSxDQVV6QjtJQUFELG9CQUFDO0NBQUEsQUFWRCxJQVVDO0FBVlksc0NBQWE7QUFjMUIsSUFBTSxnQkFBZ0IsR0FBYTtJQUMvQjtRQUNJLGNBQWMsRUFBRSxVQUFVO1FBQzFCLE9BQU8sRUFBRTtZQUNMLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDO1lBQ3RDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDO1lBQ3RDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDO1lBQ3RDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDO1lBQ3RDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDO1lBQ3RDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDO1NBQ3pDO0tBQ0o7SUFDRDtRQUNJLGNBQWMsRUFBRSxTQUFTO1FBQ3pCLE9BQU8sRUFBRTtZQUNMLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDO1lBQ3ZDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDO1lBQ3ZDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDO1lBQ2xDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUM7WUFDekMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUM7WUFDbEMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUM7U0FDckM7S0FDSjtDQUNKLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2ZXIgfSBmcm9tIFwicnhqcy9PYnNlcnZlclwiO1xyXG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tIFwiLi4vbW9kZWxzL2ZpbHRlck1vZGVsXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG5cclxuICAgIGdldEZpbHRlckxpc3QoKSB7XHJcbiAgICAgICAgbGV0IGZpbHRlck9ic2VydmFibGU6IE9ic2VydmFibGU8YW55PiA9IE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8RmlsdGVyW10+KT0+e1xyXG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHNhbXBsZUZpbHRlckRhdGEpO1xyXG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmaWx0ZXJPYnNlcnZhYmxlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IHNhbXBsZUZpbHRlckRhdGE6IEZpbHRlcltdID0gW1xyXG4gICAge1xyXG4gICAgICAgIGZpbHRlckNhdGVnb3J5OiBcIkJ1aWxkaW5nXCIsXHJcbiAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgICB7IG5hbWU6IFwiQnVpbGRpbmcgNTBcIiwgY2hlY2tlZDogZmFsc2V9LFxyXG4gICAgICAgICAgICB7IG5hbWU6IFwiQnVpbGRpbmcgMjhcIiwgY2hlY2tlZDogZmFsc2V9LFxyXG4gICAgICAgICAgICB7IG5hbWU6IFwiQnVpbGRpbmcgMThcIiwgY2hlY2tlZDogZmFsc2V9LFxyXG4gICAgICAgICAgICB7IG5hbWU6IFwiQnVpbGRpbmcgMTBcIiwgY2hlY2tlZDogZmFsc2V9LFxyXG4gICAgICAgICAgICB7IG5hbWU6IFwiQnVpbGRpbmcgMjVcIiwgY2hlY2tlZDogZmFsc2V9LFxyXG4gICAgICAgICAgICB7IG5hbWU6IFwiQnVpbGRpbmcgNDJcIiwgY2hlY2tlZDogZmFsc2V9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBmaWx0ZXJDYXRlZ29yeTogXCJDb3VzaW5lXCIsXHJcbiAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgICB7IG5hbWU6IFwiU291dGggSW5kaWFuXCIsIGNoZWNrZWQ6IGZhbHNlfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIk5vcnRoIEluZGlhblwiLCBjaGVja2VkOiBmYWxzZX0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJQdW5qYWJpXCIsIGNoZWNrZWQ6IGZhbHNlfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIkFuZGhyYSBjb3VzaW5lXCIsIGNoZWNrZWQ6IGZhbHNlfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIkl0YWxpYW5cIiwgY2hlY2tlZDogZmFsc2V9LFxyXG4gICAgICAgICAgICB7IG5hbWU6IFwiQ2hpbmVzZVwiLCBjaGVja2VkOiBmYWxzZX1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbl0iXX0=