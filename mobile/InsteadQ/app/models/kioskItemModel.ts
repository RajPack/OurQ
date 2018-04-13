export interface KioskItem {
    id: string,
    name: string,
    additionalInfo: string,
    price: number,
    category: string,
    veg: boolean,
    servingNow: boolean,
    cartCount?: number
}

export interface CategorizedItem {
    name: string,
    items: KioskItem[]
}