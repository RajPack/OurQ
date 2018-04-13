import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable()
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Ter Stegen", role: "Goalkeeper", cartCount: 0 },
        { id: 3, name: "Piqué", role: "Defender" , cartCount: 0},
        { id: 4, name: "I. Rakitic", role: "Midfielder" , cartCount: 0},
        { id: 5, name: "Sergio", role: "Midfielder" , cartCount: 0},
        { id: 6, name: "Denis Suárez", role: "Midfielder" , cartCount: 0},
        { id: 7, name: "Arda", role: "Midfielder" , cartCount: 0},
        { id: 8, name: "A. Iniesta", role: "Midfielder" , cartCount: 0},
        { id: 9, name: "Suárez", role: "Forward" , cartCount: 0},
        { id: 10, name: "Messi", role: "Forward" , cartCount: 0},
        { id: 11, name: "Neymar", role: "Forward" , cartCount: 0},
        { id: 12, name: "Rafinha", role: "Midfielder" , cartCount: 0},
        { id: 13, name: "Cillessen", role: "Goalkeeper" , cartCount: 0},
        { id: 14, name: "Mascherano", role: "Defender" , cartCount: 0},
        { id: 17, name: "Paco Alcácer", role: "Forward" , cartCount: 0},
        { id: 18, name: "Jordi Alba", role: "Defender", cartCount: 0 },
        { id: 19, name: "Digne", role: "Defender", cartCount: 0 },
        { id: 20, name: "Sergi Roberto", role: "Midfielder" , cartCount: 0},
        { id: 21, name: "André Gomes", role: "Midfielder" , cartCount: 0},
        { id: 22, name: "Aleix Vidal", role: "Midfielder" , cartCount: 0},
        { id: 23, name: "Umtiti", role: "Defender" , cartCount: 0},
        { id: 24, name: "Mathieu", role: "Defender" , cartCount: 0},
        { id: 25, name: "Masip", role: "Goalkeeper" , cartCount: 0},
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
