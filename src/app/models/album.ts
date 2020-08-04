import Song from './song';

export default class Album {
  constructor(
    public index: number,
    public title: string,
    public artist: string,
    public released: number,
    public songs: Song[],
  ){}
}
