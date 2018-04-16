import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";


@Injectable()
export class BackendService {

    constructor(private http: HttpClient) {

    }

    getData(url, options) {
        let backendObservable = Observable.create((observer: Observer<any>)=>{
            this.http.get(url).subscribe((serverData)=>{
                observer.next(serverData);
                observer.complete();
            });
        });
        return backendObservable;
    }
}