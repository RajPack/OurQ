import { KioskListReducer } from "../Store/reducers/kiosk_list_reducer";


export function RootReducer (state, action){
    return {
        kioskList: KioskListReducer(state.kioskList, action)
    }
}