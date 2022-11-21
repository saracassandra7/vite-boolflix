import { reactive } from "vue";

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/movie',
  //apiUrl:'https://api.themoviedb.org/3/movie',
  apiKey: 'e911febc742e0f9447db3f549a4b6a9e',
  filmToSearch: '',

  //stampo qui i film ottenuti dalla ricerca
  moviesListData: []
})