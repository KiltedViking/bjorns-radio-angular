export class Album {
  constructor(
    public index: number,
    public title: string,
    public artist: string,
    public released: number,
    public songs: Song[],
  ){}
}

export class Song {
  constructor(
    public index: number,
    public title: string,
  ) {}
}
