export interface Filter{
    filterCategory: string,
    options: FilterOptions[]
}

interface FilterOptions {
    name: string,
    checked: boolean
}