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
            observer.next(dummyKioskData.concat(dummyKioskData));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2lvc2tzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJraW9za3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw4Q0FBNkM7QUFJN0M7SUFFSTtJQUVBLENBQUM7SUFDRCx3Q0FBaUIsR0FBakI7UUFFSSxJQUFJLGNBQWMsR0FBRyx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFDLFFBQVE7WUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlCLFFBQVEsQ0FBQyxJQUFJLENBQUssY0FBYyxRQUFLLGNBQWMsRUFBRSxDQUFDO1lBQ3RELFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDMUIsQ0FBQztJQWRRLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTs7T0FDQSxZQUFZLENBZXhCO0lBQUQsbUJBQUM7Q0FBQSxBQWZELElBZUM7QUFmWSxvQ0FBWTtBQWtCekIsSUFBTSxjQUFjLEdBQWlCO0lBQ2pDO1FBQ0ksRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsYUFBYTtRQUNuQixXQUFXLEVBQUUsYUFBYTtRQUMxQixPQUFPLEVBQUUsd0JBQXdCO1FBQ2pDLFFBQVEsRUFBRSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUM7UUFDbkMsSUFBSSxFQUFFLCtDQUErQztRQUNyRCxLQUFLLEVBQUUsSUFBSTtRQUNYLE9BQU8sRUFBRSxzQkFBc0I7UUFDL0IsUUFBUSxFQUFFLCtJQUErSTtLQUM1SjtJQUNEO1FBQ0ksRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsaUJBQWlCO1FBQ3ZCLFdBQVcsRUFBRSxhQUFhO1FBQzFCLE9BQU8sRUFBRSx3QkFBd0I7UUFDakMsUUFBUSxFQUFFLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQztRQUNuQyxJQUFJLEVBQUUsK0NBQStDO1FBQ3JELEtBQUssRUFBRSxJQUFJO1FBQ1gsT0FBTyxFQUFFLHNCQUFzQjtRQUMvQixRQUFRLEVBQUUsbUZBQW1GO0tBQ2hHO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxhQUFhO1FBQ25CLFdBQVcsRUFBRSxhQUFhO1FBQzFCLE9BQU8sRUFBRSx3QkFBd0I7UUFDakMsUUFBUSxFQUFFLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQztRQUNuQyxJQUFJLEVBQUUsK0NBQStDO1FBQ3JELEtBQUssRUFBRSxJQUFJO1FBQ1gsT0FBTyxFQUFFLHNCQUFzQjtRQUMvQixRQUFRLEVBQUUsK0tBQStLO0tBQzVMO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxlQUFlO1FBQ3JCLFdBQVcsRUFBRSxhQUFhO1FBQzFCLE9BQU8sRUFBRSx3QkFBd0I7UUFDakMsUUFBUSxFQUFFLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQztRQUNuQyxJQUFJLEVBQUUsK0NBQStDO1FBQ3JELEtBQUssRUFBRSxJQUFJO1FBQ1gsT0FBTyxFQUFFLHNCQUFzQjtRQUMvQixRQUFRLEVBQUUsMEZBQTBGO0tBQ3ZHO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSx1QkFBdUI7UUFDN0IsV0FBVyxFQUFFLGFBQWE7UUFDMUIsT0FBTyxFQUFFLHdCQUF3QjtRQUNqQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDO1FBQ25DLElBQUksRUFBRSwrQ0FBK0M7UUFDckQsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsc0JBQXNCO1FBQy9CLFFBQVEsRUFBRSx1RkFBdUY7S0FDcEc7Q0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEtpb3NrTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2tpb3NrTW9kZWxcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEtpb3NrU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRIb21lUGFnZUtpb3Nrcygpe1xyXG5cclxuICAgICAgICBsZXQgaG9tZU9ic2VydmFibGUgPSBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIHNlcnZpY2VcIik7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoWy4uLmR1bW15S2lvc2tEYXRhLCAuLi5kdW1teUtpb3NrRGF0YV0pO1xyXG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaG9tZU9ic2VydmFibGU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBkdW1teUtpb3NrRGF0YTogS2lvc2tNb2RlbFtdID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIjEyM1wiLFxyXG4gICAgICAgIG5hbWU6IFwiRG9zYSBDb3JuZXJcIixcclxuICAgICAgICBzdWJMb2NhdGlvbjogXCJCdWlsZGluZyAxMFwiLFxyXG4gICAgICAgIGFkZHJlc3M6IFwiSW5mb3N5cyBjYW1wdXMgLSBFQ2l0eVwiLFxyXG4gICAgICAgIGNvdXNpbmVzOiBbXCJTb3V0aCBJbmRpYW5cIiwgXCJBbmRyYVwiXSxcclxuICAgICAgICBkZXNjOiBcIkRvc2EsIElkbHksIFZhZGEgYW5kIG90aGVyIGJyZWFrZmFzdCBzZXJ2aWNlc1wiLFxyXG4gICAgICAgIHZlZ2FuOiB0cnVlLFxyXG4gICAgICAgIHRpbWluZ3M6IFwiMDg6MDAgQU0gdG8gMTE6MDAgQU1cIixcclxuICAgICAgICBpbWFnZVVSTDogXCJodHRwOi8vd2NtaW1hZ2VzLnZhbmNvdXZlcnN1bi5jb20vaW1hZ2VzP3VybD1odHRwczovL3Bvc3RtZWRpYXZhbmNvdXZlcnN1bjIuZmlsZXMud29yZHByZXNzLmNvbS8yMDE3LzEyLzEyMDctZGF2aWUtZG9zYS0zLWpwZy5qcGcmdz04NDAmaD02MzBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCIxMjNcIixcclxuICAgICAgICBuYW1lOiBcIkljZUNyZWFtIENvcm5lclwiLFxyXG4gICAgICAgIHN1YkxvY2F0aW9uOiBcIkJ1aWxkaW5nIDEwXCIsXHJcbiAgICAgICAgYWRkcmVzczogXCJJbmZvc3lzIGNhbXB1cyAtIEVDaXR5XCIsXHJcbiAgICAgICAgY291c2luZXM6IFtcIlNvdXRoIEluZGlhblwiLCBcIkFuZHJhXCJdLFxyXG4gICAgICAgIGRlc2M6IFwiRG9zYSwgSWRseSwgVmFkYSBhbmQgb3RoZXIgYnJlYWtmYXN0IHNlcnZpY2VzXCIsXHJcbiAgICAgICAgdmVnYW46IHRydWUsXHJcbiAgICAgICAgdGltaW5nczogXCIwODowMCBBTSB0byAxMTowMCBBTVwiLFxyXG4gICAgICAgIGltYWdlVVJMOiBcImh0dHA6Ly93d3cuZGF5dG9uYXJhZGlvLmNvbS93a3JvL3dwLWNvbnRlbnQvdXBsb2Fkcy9zaXRlcy80LzIwMTUvMDcvaWNlLWNyZWFtLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIjEyM1wiLFxyXG4gICAgICAgIG5hbWU6IFwiTWVhbCBDb3JuZXJcIixcclxuICAgICAgICBzdWJMb2NhdGlvbjogXCJCdWlsZGluZyAxMFwiLFxyXG4gICAgICAgIGFkZHJlc3M6IFwiSW5mb3N5cyBjYW1wdXMgLSBFQ2l0eVwiLFxyXG4gICAgICAgIGNvdXNpbmVzOiBbXCJTb3V0aCBJbmRpYW5cIiwgXCJBbmRyYVwiXSxcclxuICAgICAgICBkZXNjOiBcIkRvc2EsIElkbHksIFZhZGEgYW5kIG90aGVyIGJyZWFrZmFzdCBzZXJ2aWNlc1wiLFxyXG4gICAgICAgIHZlZ2FuOiB0cnVlLFxyXG4gICAgICAgIHRpbWluZ3M6IFwiMDg6MDAgQU0gdG8gMTE6MDAgQU1cIixcclxuICAgICAgICBpbWFnZVVSTDogXCJodHRwczovL2kyLndwLmNvbS9tZWRpYS5odW5ncnlmb3JldmVyLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS8yMjE3MDE0My9iZXN0LXNvdXRoLWluZGlhbi1tZWFscy1pbi1jaGVubmFpLmpwZz96b29tPTEuMTAwMDAwMDIzODQxODU4JnNzbD0xP3c9MTI2OSZzdHJpcD1hbGwmcXVhbGl0eT04MFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIjEyM1wiLFxyXG4gICAgICAgIG5hbWU6IFwiQ29mZmVlIFBhbGFjZVwiLFxyXG4gICAgICAgIHN1YkxvY2F0aW9uOiBcIkJ1aWxkaW5nIDEwXCIsXHJcbiAgICAgICAgYWRkcmVzczogXCJJbmZvc3lzIGNhbXB1cyAtIEVDaXR5XCIsXHJcbiAgICAgICAgY291c2luZXM6IFtcIlNvdXRoIEluZGlhblwiLCBcIkFuZHJhXCJdLFxyXG4gICAgICAgIGRlc2M6IFwiRG9zYSwgSWRseSwgVmFkYSBhbmQgb3RoZXIgYnJlYWtmYXN0IHNlcnZpY2VzXCIsXHJcbiAgICAgICAgdmVnYW46IHRydWUsXHJcbiAgICAgICAgdGltaW5nczogXCIwODowMCBBTSB0byAxMTowMCBBTVwiLFxyXG4gICAgICAgIGltYWdlVVJMOiBcImh0dHBzOi8vbWVkaWEtY2RuLnRyaXBhZHZpc29yLmNvbS9tZWRpYS9waG90by1zLzEyLzA1LzRiLzk0LzIwMTgwMjAzLTE0NDMxNi1sYXJnZWpwZy5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCIxMjNcIixcclxuICAgICAgICBuYW1lOiBcIkFub3RoZXIgYm9yaW5nIENvcm5lclwiLFxyXG4gICAgICAgIHN1YkxvY2F0aW9uOiBcIkJ1aWxkaW5nIDEwXCIsXHJcbiAgICAgICAgYWRkcmVzczogXCJJbmZvc3lzIGNhbXB1cyAtIEVDaXR5XCIsXHJcbiAgICAgICAgY291c2luZXM6IFtcIlNvdXRoIEluZGlhblwiLCBcIkFuZHJhXCJdLFxyXG4gICAgICAgIGRlc2M6IFwiRG9zYSwgSWRseSwgVmFkYSBhbmQgb3RoZXIgYnJlYWtmYXN0IHNlcnZpY2VzXCIsXHJcbiAgICAgICAgdmVnYW46IHRydWUsXHJcbiAgICAgICAgdGltaW5nczogXCIwODowMCBBTSB0byAxMTowMCBBTVwiLFxyXG4gICAgICAgIGltYWdlVVJMOiBcImh0dHA6Ly93d3cubm92ZWxiZW5lZGljdGlvbnMuY29tL25iL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDEzLzA3L2Nvcm5lcmhvdXNlY291bnRlci5qcGdcIlxyXG4gICAgfVxyXG5dOyJdfQ==