import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMinimalSearch: boolean = false;
  
  showMiniBar(){
    this.showMinimalSearch= this.isInViewport("topbar") ? false: true;

    console.log(this.showMinimalSearch);

    let elem = document.getElementById('topbarSearch');
    this.showMinimalSearch ? 
      elem.classList.add("fixedTopBar") : 
      elem.classList.remove("fixedTopBar");

    let elemSearch = document.getElementById('topsearchbarcontainer');
    this.showMinimalSearch ? 
      elemSearch.classList.add("topsearchbarstyle") : 
      elemSearch.classList.remove("topsearchbarstyle");

    let elemSearchCont = document.getElementById("topbarSearchcontainer");
    if(this.showMinimalSearch){
      elemSearchCont.classList.remove("col-11");
      elemSearchCont.classList.add("col-12");
    }else{
      elemSearchCont.classList.remove("col-12");
      elemSearchCont.classList.add("col-11");
    }
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
