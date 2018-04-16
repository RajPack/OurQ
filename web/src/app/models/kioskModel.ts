export interface KioskModel {
    id: string,
    name: string,
    subLocation: string,
    address: string,
    cousines?: string[],
    desc: string,
    vegan: boolean,
    timings?: string,
    imageURL?: string
}