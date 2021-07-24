export type Superpower = string

export interface SuperpowersRepo {
  fetchSuperpowers(): Promise<Superpower[]>
}
