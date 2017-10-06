export default class ApiInfo {

  constructor() {
    this.api_key = '5371851126da3d4384babc7d8b415039';
    this.image_base_url = 'http://image.tmdb.org/t/p' ;
  }

  getImagePath(path, size) {
    return `${this.image_base_url}/w${size ? size : 90}/${path.replace(/^\//, '')}`;
  }

  search(string) {
    return `https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&language=es-ES&query=${string}` ;
  }
}

