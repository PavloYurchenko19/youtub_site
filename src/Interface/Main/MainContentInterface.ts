export interface MainContentInterface {
  id: number
  title: string
  description: string
  img: Img
  subTitle: SubTitle[] | null
}
export interface Img {
  url: string
  name: string
}
export interface SubTitle {
  title: string
  description: string
}
