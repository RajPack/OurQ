"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var KioskService = /** @class */ (function () {
    function KioskService() {
    }
    KioskService.prototype.getHomePageKiosks = function () {
        var homeObservable = Observable_1.Observable.create(function (observer) {
            console.log("inside service");
            observer.next(dummyKioskData.concat(dummyKioskData, dummyKioskData));
            observer.complete();
        });
        return homeObservable;
    };
    KioskService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], KioskService);
    return KioskService;
}());
exports.KioskService = KioskService;
var dummyKioskData = [
    {
        id: "123",
        name: "Dosa Corner",
        subLocation: "Building 10",
        address: "Infosys campus - ECity",
        cousines: ["South Indian", "Andra"],
        desc: "Dosa, Idly, Vada and other breakfast services",
        vegan: true,
        timings: "08:00 AM to 11:00 AM",
        imageURL: "http://wcmimages.vancouversun.com/images?url=https://postmediavancouversun2.files.wordpress.com/2017/12/1207-davie-dosa-3-jpg.jpg&w=840&h=630"
    },
    {
        id: "123",
        name: "IceCream Corner",
        subLocation: "Building 10",
        address: "Infosys campus - ECity",
        cousines: ["South Indian", "Andra"],
        desc: "Dosa, Idly, Vada and other breakfast services",
        vegan: true,
        timings: "08:00 AM to 11:00 AM",
        imageURL: "http://www.daytonaradio.com/wkro/wp-content/uploads/sites/4/2015/07/ice-cream.jpg"
    },
    {
        id: "123",
        name: "Meal Corner",
        subLocation: "Building 10",
        address: "Infosys campus - ECity",
        cousines: ["South Indian", "Andra"],
        desc: "Dosa, Idly, Vada and other breakfast services",
        vegan: true,
        timings: "08:00 AM to 11:00 AM",
        imageURL: "https://i2.wp.com/media.hungryforever.com/wp-content/uploads/2016/11/22170143/best-south-indian-meals-in-chennai.jpg?zoom=1.100000023841858&ssl=1?w=1269&strip=all&quality=80"
    },
    {
        id: "123",
        name: "Coffee Palace",
        subLocation: "Building 10",
        address: "Infosys campus - ECity",
        cousines: ["South Indian", "Andra"],
        desc: "Dosa, Idly, Vada and other breakfast services",
        vegan: true,
        timings: "08:00 AM to 11:00 AM",
        imageURL: "https://media-cdn.tripadvisor.com/media/photo-s/12/05/4b/94/20180203-144316-largejpg.jpg"
    },
    {
        id: "123",
        name: "Another boring Corner",
        subLocation: "Building 10",
        address: "Infosys campus - ECity",
        cousines: ["South Indian", "Andra"],
        desc: "Dosa, Idly, Vada and other breakfast services",
        vegan: true,
        timings: "08:00 AM to 11:00 AM",
        imageURL: "http://www.novelbenedictions.com/nb/wp-content/uploads/2013/07/cornerhousecounter.jpg"
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2lvc2tzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJraW9za3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw4Q0FBNkM7QUFLN0M7SUFFSTtJQUVBLENBQUM7SUFDRCx3Q0FBaUIsR0FBakI7UUFFSSxJQUFJLGNBQWMsR0FBRyx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFDLFFBQVE7WUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlCLFFBQVEsQ0FBQyxJQUFJLENBQUssY0FBYyxRQUFLLGNBQWMsRUFBSyxjQUFjLEVBQUUsQ0FBQztZQUN6RSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQzFCLENBQUM7SUFkUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7O09BQ0EsWUFBWSxDQWV4QjtJQUFELG1CQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksb0NBQVk7QUFrQnpCLElBQU0sY0FBYyxHQUFpQjtJQUNqQztRQUNJLEVBQUUsRUFBRSxLQUFLO1FBQ1QsSUFBSSxFQUFFLGFBQWE7UUFDbkIsV0FBVyxFQUFFLGFBQWE7UUFDMUIsT0FBTyxFQUFFLHdCQUF3QjtRQUNqQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDO1FBQ25DLElBQUksRUFBRSwrQ0FBK0M7UUFDckQsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsc0JBQXNCO1FBQy9CLFFBQVEsRUFBRSwrSUFBK0k7S0FDNUo7SUFDRDtRQUNJLEVBQUUsRUFBRSxLQUFLO1FBQ1QsSUFBSSxFQUFFLGlCQUFpQjtRQUN2QixXQUFXLEVBQUUsYUFBYTtRQUMxQixPQUFPLEVBQUUsd0JBQXdCO1FBQ2pDLFFBQVEsRUFBRSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUM7UUFDbkMsSUFBSSxFQUFFLCtDQUErQztRQUNyRCxLQUFLLEVBQUUsSUFBSTtRQUNYLE9BQU8sRUFBRSxzQkFBc0I7UUFDL0IsUUFBUSxFQUFFLG1GQUFtRjtLQUNoRztJQUNEO1FBQ0ksRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsYUFBYTtRQUNuQixXQUFXLEVBQUUsYUFBYTtRQUMxQixPQUFPLEVBQUUsd0JBQXdCO1FBQ2pDLFFBQVEsRUFBRSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUM7UUFDbkMsSUFBSSxFQUFFLCtDQUErQztRQUNyRCxLQUFLLEVBQUUsSUFBSTtRQUNYLE9BQU8sRUFBRSxzQkFBc0I7UUFDL0IsUUFBUSxFQUFFLCtLQUErSztLQUM1TDtJQUNEO1FBQ0ksRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsZUFBZTtRQUNyQixXQUFXLEVBQUUsYUFBYTtRQUMxQixPQUFPLEVBQUUsd0JBQXdCO1FBQ2pDLFFBQVEsRUFBRSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUM7UUFDbkMsSUFBSSxFQUFFLCtDQUErQztRQUNyRCxLQUFLLEVBQUUsSUFBSTtRQUNYLE9BQU8sRUFBRSxzQkFBc0I7UUFDL0IsUUFBUSxFQUFFLDBGQUEwRjtLQUN2RztJQUNEO1FBQ0ksRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsdUJBQXVCO1FBQzdCLFdBQVcsRUFBRSxhQUFhO1FBQzFCLE9BQU8sRUFBRSx3QkFBd0I7UUFDakMsUUFBUSxFQUFFLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQztRQUNuQyxJQUFJLEVBQUUsK0NBQStDO1FBQ3JELEtBQUssRUFBRSxJQUFJO1FBQ1gsT0FBTyxFQUFFLHNCQUFzQjtRQUMvQixRQUFRLEVBQUUsdUZBQXVGO0tBQ3BHO0NBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBLaW9za01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9raW9za01vZGVsXCI7XHJcbmltcG9ydCB7IEtpb3NrSXRlbSB9IGZyb20gXCIuLi9tb2RlbHMva2lvc2tJdGVtTW9kZWxcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEtpb3NrU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRIb21lUGFnZUtpb3Nrcygpe1xyXG5cclxuICAgICAgICBsZXQgaG9tZU9ic2VydmFibGUgPSBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIHNlcnZpY2VcIik7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoWy4uLmR1bW15S2lvc2tEYXRhLCAuLi5kdW1teUtpb3NrRGF0YSwgLi4uZHVtbXlLaW9za0RhdGFdKTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhvbWVPYnNlcnZhYmxlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgZHVtbXlLaW9za0RhdGE6IEtpb3NrTW9kZWxbXSA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogXCIxMjNcIixcclxuICAgICAgICBuYW1lOiBcIkRvc2EgQ29ybmVyXCIsXHJcbiAgICAgICAgc3ViTG9jYXRpb246IFwiQnVpbGRpbmcgMTBcIixcclxuICAgICAgICBhZGRyZXNzOiBcIkluZm9zeXMgY2FtcHVzIC0gRUNpdHlcIixcclxuICAgICAgICBjb3VzaW5lczogW1wiU291dGggSW5kaWFuXCIsIFwiQW5kcmFcIl0sXHJcbiAgICAgICAgZGVzYzogXCJEb3NhLCBJZGx5LCBWYWRhIGFuZCBvdGhlciBicmVha2Zhc3Qgc2VydmljZXNcIixcclxuICAgICAgICB2ZWdhbjogdHJ1ZSxcclxuICAgICAgICB0aW1pbmdzOiBcIjA4OjAwIEFNIHRvIDExOjAwIEFNXCIsXHJcbiAgICAgICAgaW1hZ2VVUkw6IFwiaHR0cDovL3djbWltYWdlcy52YW5jb3V2ZXJzdW4uY29tL2ltYWdlcz91cmw9aHR0cHM6Ly9wb3N0bWVkaWF2YW5jb3V2ZXJzdW4yLmZpbGVzLndvcmRwcmVzcy5jb20vMjAxNy8xMi8xMjA3LWRhdmllLWRvc2EtMy1qcGcuanBnJnc9ODQwJmg9NjMwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiMTIzXCIsXHJcbiAgICAgICAgbmFtZTogXCJJY2VDcmVhbSBDb3JuZXJcIixcclxuICAgICAgICBzdWJMb2NhdGlvbjogXCJCdWlsZGluZyAxMFwiLFxyXG4gICAgICAgIGFkZHJlc3M6IFwiSW5mb3N5cyBjYW1wdXMgLSBFQ2l0eVwiLFxyXG4gICAgICAgIGNvdXNpbmVzOiBbXCJTb3V0aCBJbmRpYW5cIiwgXCJBbmRyYVwiXSxcclxuICAgICAgICBkZXNjOiBcIkRvc2EsIElkbHksIFZhZGEgYW5kIG90aGVyIGJyZWFrZmFzdCBzZXJ2aWNlc1wiLFxyXG4gICAgICAgIHZlZ2FuOiB0cnVlLFxyXG4gICAgICAgIHRpbWluZ3M6IFwiMDg6MDAgQU0gdG8gMTE6MDAgQU1cIixcclxuICAgICAgICBpbWFnZVVSTDogXCJodHRwOi8vd3d3LmRheXRvbmFyYWRpby5jb20vd2tyby93cC1jb250ZW50L3VwbG9hZHMvc2l0ZXMvNC8yMDE1LzA3L2ljZS1jcmVhbS5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCIxMjNcIixcclxuICAgICAgICBuYW1lOiBcIk1lYWwgQ29ybmVyXCIsXHJcbiAgICAgICAgc3ViTG9jYXRpb246IFwiQnVpbGRpbmcgMTBcIixcclxuICAgICAgICBhZGRyZXNzOiBcIkluZm9zeXMgY2FtcHVzIC0gRUNpdHlcIixcclxuICAgICAgICBjb3VzaW5lczogW1wiU291dGggSW5kaWFuXCIsIFwiQW5kcmFcIl0sXHJcbiAgICAgICAgZGVzYzogXCJEb3NhLCBJZGx5LCBWYWRhIGFuZCBvdGhlciBicmVha2Zhc3Qgc2VydmljZXNcIixcclxuICAgICAgICB2ZWdhbjogdHJ1ZSxcclxuICAgICAgICB0aW1pbmdzOiBcIjA4OjAwIEFNIHRvIDExOjAwIEFNXCIsXHJcbiAgICAgICAgaW1hZ2VVUkw6IFwiaHR0cHM6Ly9pMi53cC5jb20vbWVkaWEuaHVuZ3J5Zm9yZXZlci5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMTEvMjIxNzAxNDMvYmVzdC1zb3V0aC1pbmRpYW4tbWVhbHMtaW4tY2hlbm5haS5qcGc/em9vbT0xLjEwMDAwMDAyMzg0MTg1OCZzc2w9MT93PTEyNjkmc3RyaXA9YWxsJnF1YWxpdHk9ODBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCIxMjNcIixcclxuICAgICAgICBuYW1lOiBcIkNvZmZlZSBQYWxhY2VcIixcclxuICAgICAgICBzdWJMb2NhdGlvbjogXCJCdWlsZGluZyAxMFwiLFxyXG4gICAgICAgIGFkZHJlc3M6IFwiSW5mb3N5cyBjYW1wdXMgLSBFQ2l0eVwiLFxyXG4gICAgICAgIGNvdXNpbmVzOiBbXCJTb3V0aCBJbmRpYW5cIiwgXCJBbmRyYVwiXSxcclxuICAgICAgICBkZXNjOiBcIkRvc2EsIElkbHksIFZhZGEgYW5kIG90aGVyIGJyZWFrZmFzdCBzZXJ2aWNlc1wiLFxyXG4gICAgICAgIHZlZ2FuOiB0cnVlLFxyXG4gICAgICAgIHRpbWluZ3M6IFwiMDg6MDAgQU0gdG8gMTE6MDAgQU1cIixcclxuICAgICAgICBpbWFnZVVSTDogXCJodHRwczovL21lZGlhLWNkbi50cmlwYWR2aXNvci5jb20vbWVkaWEvcGhvdG8tcy8xMi8wNS80Yi85NC8yMDE4MDIwMy0xNDQzMTYtbGFyZ2VqcGcuanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiMTIzXCIsXHJcbiAgICAgICAgbmFtZTogXCJBbm90aGVyIGJvcmluZyBDb3JuZXJcIixcclxuICAgICAgICBzdWJMb2NhdGlvbjogXCJCdWlsZGluZyAxMFwiLFxyXG4gICAgICAgIGFkZHJlc3M6IFwiSW5mb3N5cyBjYW1wdXMgLSBFQ2l0eVwiLFxyXG4gICAgICAgIGNvdXNpbmVzOiBbXCJTb3V0aCBJbmRpYW5cIiwgXCJBbmRyYVwiXSxcclxuICAgICAgICBkZXNjOiBcIkRvc2EsIElkbHksIFZhZGEgYW5kIG90aGVyIGJyZWFrZmFzdCBzZXJ2aWNlc1wiLFxyXG4gICAgICAgIHZlZ2FuOiB0cnVlLFxyXG4gICAgICAgIHRpbWluZ3M6IFwiMDg6MDAgQU0gdG8gMTE6MDAgQU1cIixcclxuICAgICAgICBpbWFnZVVSTDogXCJodHRwOi8vd3d3Lm5vdmVsYmVuZWRpY3Rpb25zLmNvbS9uYi93cC1jb250ZW50L3VwbG9hZHMvMjAxMy8wNy9jb3JuZXJob3VzZWNvdW50ZXIuanBnXCJcclxuICAgIH1cclxuXTsiXX0=