import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMinimalSearch: boolean = false;
  showMiniBar(){
    console.log(this.isInViewport("topbar"));
    this.showMinimalSearch= this.isInViewport("topbar") ? false: true;
  }


  isInViewport(args) {
    var elem = document.getElementById('topbar');
    var elementTop = elem.clientTop;
    var elementBottom = elementTop + elem.clientHeight;
    var viewportTop = window.pageYOffset;
    var viewportBottom = viewportTop + window.innerHeight	;
    return elementBottom > viewportTop && elementTop < viewportBottom;
    };
}
