import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GiphyService from './giphy-service.js';

function clearSeach() {
  $('#search').val("");
  $('.showErrors').text("");
}

$(document).ready(function() {
  $(`.giphySearch`).click(function() {
    const searchText = $('.look').val();
    clearSeach();
    const promise = GiphyService.getGiphy(searchText);
    promise.then(function(response) {
      const body = JSON.parse(response);
      body.data.forEach(gifObj => {
        $('.gifs-area').prepend(`<img class='gif-img' src="${gifObj.images.fixed_height.url}" />`)
      });
    });
  });
  $(`.trendy`).click(function() {
    const searchText = $('.look').val();
    clearSeach();
    const promise = GiphyService.getGiphy(searchText);
    promise.then(function(response) {
      const body = JSON.parse(response);
      body.data.forEach(gifObj => {
        $('.gifs-area').prepend(`<img class='gif-img' src="${gifObj.images.fixed_height.url}" />`)
      });
    });
  });
});
