"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Observable_1 = require("rxjs/Observable");
var KioskService = /** @class */ (function () {
    function KioskService(http) {
        this.http = http;
    }
    KioskService.prototype.getHomePageKiosks = function () {
        var homeObservable = Observable_1.Observable.create(function (observer) {
            console.log("inside service");
            observer.next(dummyKioskData.concat(dummyKioskData, dummyKioskData));
            observer.complete();
        });
        return homeObservable;
    };
    KioskService.prototype.pingServer = function () {
        var url = "https://localhost:5000/api/test";
        this.http.get(url).subscribe(function (data) {
            console.log(JSON.stringify(data));
        });
    };
    KioskService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2lvc2tzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJraW9za3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBNkU7QUFDN0UsOENBQTZDO0FBSzdDO0lBRUksc0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFFcEMsQ0FBQztJQUNELHdDQUFpQixHQUFqQjtRQUVJLElBQUksY0FBYyxHQUFHLHVCQUFVLENBQUMsTUFBTSxDQUFDLFVBQUMsUUFBUTtZQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDOUIsUUFBUSxDQUFDLElBQUksQ0FBSyxjQUFjLFFBQUssY0FBYyxFQUFLLGNBQWMsRUFBRSxDQUFDO1lBQ3pFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDMUIsQ0FBQztJQUNELGlDQUFVLEdBQVY7UUFDSSxJQUFJLEdBQUcsR0FBQyxpQ0FBaUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXBCUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBR2lCLGlCQUFVO09BRjNCLFlBQVksQ0FxQnhCO0lBQUQsbUJBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSxvQ0FBWTtBQXdCekIsSUFBTSxjQUFjLEdBQWlCO0lBQ2pDO1FBQ0ksRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsYUFBYTtRQUNuQixXQUFXLEVBQUUsYUFBYTtRQUMxQixPQUFPLEVBQUUsd0JBQXdCO1FBQ2pDLFFBQVEsRUFBRSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUM7UUFDbkMsSUFBSSxFQUFFLCtDQUErQztRQUNyRCxLQUFLLEVBQUUsSUFBSTtRQUNYLE9BQU8sRUFBRSxzQkFBc0I7UUFDL0IsUUFBUSxFQUFFLCtJQUErSTtLQUM1SjtJQUNEO1FBQ0ksRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsaUJBQWlCO1FBQ3ZCLFdBQVcsRUFBRSxhQUFhO1FBQzFCLE9BQU8sRUFBRSx3QkFBd0I7UUFDakMsUUFBUSxFQUFFLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQztRQUNuQyxJQUFJLEVBQUUsK0NBQStDO1FBQ3JELEtBQUssRUFBRSxJQUFJO1FBQ1gsT0FBTyxFQUFFLHNCQUFzQjtRQUMvQixRQUFRLEVBQUUsbUZBQW1GO0tBQ2hHO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxhQUFhO1FBQ25CLFdBQVcsRUFBRSxhQUFhO1FBQzFCLE9BQU8sRUFBRSx3QkFBd0I7UUFDakMsUUFBUSxFQUFFLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQztRQUNuQyxJQUFJLEVBQUUsK0NBQStDO1FBQ3JELEtBQUssRUFBRSxJQUFJO1FBQ1gsT0FBTyxFQUFFLHNCQUFzQjtRQUMvQixRQUFRLEVBQUUsK0tBQStLO0tBQzVMO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxlQUFlO1FBQ3JCLFdBQVcsRUFBRSxhQUFhO1FBQzFCLE9BQU8sRUFBRSx3QkFBd0I7UUFDakMsUUFBUSxFQUFFLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQztRQUNuQyxJQUFJLEVBQUUsK0NBQStDO1FBQ3JELEtBQUssRUFBRSxJQUFJO1FBQ1gsT0FBTyxFQUFFLHNCQUFzQjtRQUMvQixRQUFRLEVBQUUsMEZBQTBGO0tBQ3ZHO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSx1QkFBdUI7UUFDN0IsV0FBVyxFQUFFLGFBQWE7UUFDMUIsT0FBTyxFQUFFLHdCQUF3QjtRQUNqQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDO1FBQ25DLElBQUksRUFBRSwrQ0FBK0M7UUFDckQsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsc0JBQXNCO1FBQy9CLFFBQVEsRUFBRSx1RkFBdUY7S0FDcEc7Q0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgS2lvc2tNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMva2lvc2tNb2RlbFwiO1xyXG5pbXBvcnQgeyBLaW9za0l0ZW0gfSBmcm9tIFwiLi4vbW9kZWxzL2tpb3NrSXRlbU1vZGVsXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBLaW9za1NlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCl7XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0SG9tZVBhZ2VLaW9za3MoKXtcclxuXHJcbiAgICAgICAgbGV0IGhvbWVPYnNlcnZhYmxlID0gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImluc2lkZSBzZXJ2aWNlXCIpO1xyXG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KFsuLi5kdW1teUtpb3NrRGF0YSwgLi4uZHVtbXlLaW9za0RhdGEsIC4uLmR1bW15S2lvc2tEYXRhXSk7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBob21lT2JzZXJ2YWJsZTtcclxuICAgIH1cclxuICAgIHBpbmdTZXJ2ZXIoKXtcclxuICAgICAgICBsZXQgdXJsPVwiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdGVzdFwiO1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQodXJsKS5zdWJzY3JpYmUoKGRhdGEpPT57XHJcbiAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgZHVtbXlLaW9za0RhdGE6IEtpb3NrTW9kZWxbXSA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogXCIxMjNcIixcclxuICAgICAgICBuYW1lOiBcIkRvc2EgQ29ybmVyXCIsXHJcbiAgICAgICAgc3ViTG9jYXRpb246IFwiQnVpbGRpbmcgMTBcIixcclxuICAgICAgICBhZGRyZXNzOiBcIkluZm9zeXMgY2FtcHVzIC0gRUNpdHlcIixcclxuICAgICAgICBjb3VzaW5lczogW1wiU291dGggSW5kaWFuXCIsIFwiQW5kcmFcIl0sXHJcbiAgICAgICAgZGVzYzogXCJEb3NhLCBJZGx5LCBWYWRhIGFuZCBvdGhlciBicmVha2Zhc3Qgc2VydmljZXNcIixcclxuICAgICAgICB2ZWdhbjogdHJ1ZSxcclxuICAgICAgICB0aW1pbmdzOiBcIjA4OjAwIEFNIHRvIDExOjAwIEFNXCIsXHJcbiAgICAgICAgaW1hZ2VVUkw6IFwiaHR0cDovL3djbWltYWdlcy52YW5jb3V2ZXJzdW4uY29tL2ltYWdlcz91cmw9aHR0cHM6Ly9wb3N0bWVkaWF2YW5jb3V2ZXJzdW4yLmZpbGVzLndvcmRwcmVzcy5jb20vMjAxNy8xMi8xMjA3LWRhdmllLWRvc2EtMy1qcGcuanBnJnc9ODQwJmg9NjMwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiMTIzXCIsXHJcbiAgICAgICAgbmFtZTogXCJJY2VDcmVhbSBDb3JuZXJcIixcclxuICAgICAgICBzdWJMb2NhdGlvbjogXCJCdWlsZGluZyAxMFwiLFxyXG4gICAgICAgIGFkZHJlc3M6IFwiSW5mb3N5cyBjYW1wdXMgLSBFQ2l0eVwiLFxyXG4gICAgICAgIGNvdXNpbmVzOiBbXCJTb3V0aCBJbmRpYW5cIiwgXCJBbmRyYVwiXSxcclxuICAgICAgICBkZXNjOiBcIkRvc2EsIElkbHksIFZhZGEgYW5kIG90aGVyIGJyZWFrZmFzdCBzZXJ2aWNlc1wiLFxyXG4gICAgICAgIHZlZ2FuOiB0cnVlLFxyXG4gICAgICAgIHRpbWluZ3M6IFwiMDg6MDAgQU0gdG8gMTE6MDAgQU1cIixcclxuICAgICAgICBpbWFnZVVSTDogXCJodHRwOi8vd3d3LmRheXRvbmFyYWRpby5jb20vd2tyby93cC1jb250ZW50L3VwbG9hZHMvc2l0ZXMvNC8yMDE1LzA3L2ljZS1jcmVhbS5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCIxMjNcIixcclxuICAgICAgICBuYW1lOiBcIk1lYWwgQ29ybmVyXCIsXHJcbiAgICAgICAgc3ViTG9jYXRpb246IFwiQnVpbGRpbmcgMTBcIixcclxuICAgICAgICBhZGRyZXNzOiBcIkluZm9zeXMgY2FtcHVzIC0gRUNpdHlcIixcclxuICAgICAgICBjb3VzaW5lczogW1wiU291dGggSW5kaWFuXCIsIFwiQW5kcmFcIl0sXHJcbiAgICAgICAgZGVzYzogXCJEb3NhLCBJZGx5LCBWYWRhIGFuZCBvdGhlciBicmVha2Zhc3Qgc2VydmljZXNcIixcclxuICAgICAgICB2ZWdhbjogdHJ1ZSxcclxuICAgICAgICB0aW1pbmdzOiBcIjA4OjAwIEFNIHRvIDExOjAwIEFNXCIsXHJcbiAgICAgICAgaW1hZ2VVUkw6IFwiaHR0cHM6Ly9pMi53cC5jb20vbWVkaWEuaHVuZ3J5Zm9yZXZlci5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMTEvMjIxNzAxNDMvYmVzdC1zb3V0aC1pbmRpYW4tbWVhbHMtaW4tY2hlbm5haS5qcGc/em9vbT0xLjEwMDAwMDAyMzg0MTg1OCZzc2w9MT93PTEyNjkmc3RyaXA9YWxsJnF1YWxpdHk9ODBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCIxMjNcIixcclxuICAgICAgICBuYW1lOiBcIkNvZmZlZSBQYWxhY2VcIixcclxuICAgICAgICBzdWJMb2NhdGlvbjogXCJCdWlsZGluZyAxMFwiLFxyXG4gICAgICAgIGFkZHJlc3M6IFwiSW5mb3N5cyBjYW1wdXMgLSBFQ2l0eVwiLFxyXG4gICAgICAgIGNvdXNpbmVzOiBbXCJTb3V0aCBJbmRpYW5cIiwgXCJBbmRyYVwiXSxcclxuICAgICAgICBkZXNjOiBcIkRvc2EsIElkbHksIFZhZGEgYW5kIG90aGVyIGJyZWFrZmFzdCBzZXJ2aWNlc1wiLFxyXG4gICAgICAgIHZlZ2FuOiB0cnVlLFxyXG4gICAgICAgIHRpbWluZ3M6IFwiMDg6MDAgQU0gdG8gMTE6MDAgQU1cIixcclxuICAgICAgICBpbWFnZVVSTDogXCJodHRwczovL21lZGlhLWNkbi50cmlwYWR2aXNvci5jb20vbWVkaWEvcGhvdG8tcy8xMi8wNS80Yi85NC8yMDE4MDIwMy0xNDQzMTYtbGFyZ2VqcGcuanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiMTIzXCIsXHJcbiAgICAgICAgbmFtZTogXCJBbm90aGVyIGJvcmluZyBDb3JuZXJcIixcclxuICAgICAgICBzdWJMb2NhdGlvbjogXCJCdWlsZGluZyAxMFwiLFxyXG4gICAgICAgIGFkZHJlc3M6IFwiSW5mb3N5cyBjYW1wdXMgLSBFQ2l0eVwiLFxyXG4gICAgICAgIGNvdXNpbmVzOiBbXCJTb3V0aCBJbmRpYW5cIiwgXCJBbmRyYVwiXSxcclxuICAgICAgICBkZXNjOiBcIkRvc2EsIElkbHksIFZhZGEgYW5kIG90aGVyIGJyZWFrZmFzdCBzZXJ2aWNlc1wiLFxyXG4gICAgICAgIHZlZ2FuOiB0cnVlLFxyXG4gICAgICAgIHRpbWluZ3M6IFwiMDg6MDAgQU0gdG8gMTE6MDAgQU1cIixcclxuICAgICAgICBpbWFnZVVSTDogXCJodHRwOi8vd3d3Lm5vdmVsYmVuZWRpY3Rpb25zLmNvbS9uYi93cC1jb250ZW50L3VwbG9hZHMvMjAxMy8wNy9jb3JuZXJob3VzZWNvdW50ZXIuanBnXCJcclxuICAgIH1cclxuXTsiXX0=