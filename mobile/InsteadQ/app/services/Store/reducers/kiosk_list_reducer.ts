import { Actions } from "../actions"

export function KioskListReducer (state, action) {
        if(action.type === Actions.getHomeKiosks){
                let items = action.payload.items;
                return [...items];
        }
        
}