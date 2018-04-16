import { BackendService } from "../../backend.service";
import { Injectable } from "@angular/core";
import { Actions } from "../../Store/actions";

@Injectable()
export class ActionCreatorService {
    constructor(private backendService: BackendService){

    }

    generateAction (actionType: string, options?: any) {
        
        if(actionType === Actions.updateHomeKiosks){
            return {
                type: actionType,
                payload: options.kiosks
            }
        }

        return {
            type: actionType,
            payloadObservable : this.getKioskList({})
        }
    }

    getKioskList(args){
        //pre - processing
        let url = "./API/Kiosk/getAll"
        return this.backendService.getData(url, args);
    }

    updateKioskList(args){
        //pre - processing
        let kiosks = args.
    }
}