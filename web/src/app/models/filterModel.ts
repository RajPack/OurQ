export interface Filter{
    filterCategory: string,
    options: FilterOptions[]
}

export interface FilterOptions {
    name: string,
    checked: boolean
}