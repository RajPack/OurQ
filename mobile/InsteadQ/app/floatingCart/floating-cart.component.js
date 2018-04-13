"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FloatingCartComponent = /** @class */ (function () {
    function FloatingCartComponent() {
        this.itemsText = "";
        this.fabShadow = {
            elevation: 24,
            bgcolor: '#32CD32',
            cornerRadius: 4,
            translationZ: 30
        };
    }
    FloatingCartComponent.prototype.ngOnChanges = function () {
        this.itemsText = String(this.numberOfItems);
        this.itemsText += (this.numberOfItems > 1 ? " Items" : " Item") + " in your cart";
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], FloatingCartComponent.prototype, "numberOfItems", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], FloatingCartComponent.prototype, "price", void 0);
    FloatingCartComponent = __decorate([
        core_1.Component({
            selector: 'app-floating-cart',
            templateUrl: './floatingCart/floating-cart.component.html',
            styleUrls: ['./floatingCart/floating-cart.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], FloatingCartComponent);
    return FloatingCartComponent;
}());
exports.FloatingCartComponent = FloatingCartComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXRpbmctY2FydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmbG9hdGluZy1jYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RDtBQVE1RDtJQVdJO1FBUFEsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUN2QixjQUFTLEdBQWdCO1lBQ3JCLFNBQVMsRUFBRSxFQUFFO1lBQ2IsT0FBTyxFQUFFLFNBQVM7WUFDbEIsWUFBWSxFQUFFLENBQUM7WUFDZixZQUFZLEVBQUUsRUFBRTtTQUNqQixDQUFBO0lBR0gsQ0FBQztJQUVELDJDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLGVBQWUsQ0FBRTtJQUNyRixDQUFDO0lBakJRO1FBQVIsWUFBSyxFQUFFOztnRUFBdUI7SUFDdEI7UUFBUixZQUFLLEVBQUU7O3dEQUFlO0lBRmQscUJBQXFCO1FBTGpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSw2Q0FBNkM7WUFDMUQsU0FBUyxFQUFDLENBQUMsNENBQTRDLENBQUM7U0FDM0QsQ0FBQzs7T0FDVyxxQkFBcUIsQ0FvQmpDO0lBQUQsNEJBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBbmRyb2lkRGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbmctc2hhZG93XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWZsb2F0aW5nLWNhcnQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Zsb2F0aW5nQ2FydC9mbG9hdGluZy1jYXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczpbJy4vZmxvYXRpbmdDYXJ0L2Zsb2F0aW5nLWNhcnQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbG9hdGluZ0NhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gICAgQElucHV0KCkgbnVtYmVyT2ZJdGVtczogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgcHJpY2U6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIGl0ZW1zVGV4dCA9IFwiXCI7XHJcbiAgICBmYWJTaGFkb3c6IEFuZHJvaWREYXRhID0ge1xyXG4gICAgICAgIGVsZXZhdGlvbjogMjQsXHJcbiAgICAgICAgYmdjb2xvcjogJyMzMkNEMzInLFxyXG4gICAgICAgIGNvcm5lclJhZGl1czogNCxcclxuICAgICAgICB0cmFuc2xhdGlvblo6IDMwXHJcbiAgICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoKXtcclxuICAgICAgICB0aGlzLml0ZW1zVGV4dCA9IFN0cmluZyh0aGlzLm51bWJlck9mSXRlbXMpOyBcclxuICAgICAgICB0aGlzLml0ZW1zVGV4dCArPSAodGhpcy5udW1iZXJPZkl0ZW1zPjEgPyBcIiBJdGVtc1wiIDogXCIgSXRlbVwiKSArIFwiIGluIHlvdXIgY2FydFwiIDtcclxuICAgIH1cclxuXHJcbn0iXX0=