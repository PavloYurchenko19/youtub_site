export interface MainContentInterface {
  id: number
  title: string
  description: string
  img: Img
  grapes: Grapes[] | null
}
export interface Img {
  url: string
  name: string
}
export interface Grapes {
  id: number
  name: string
  img: Img
}
