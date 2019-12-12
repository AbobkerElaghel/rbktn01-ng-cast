angular.module('video-player')
.component('videoList', {
  // TODO
  bindings:{
    videos : '<',
    changeVideo:'<',
    url : '<'
  },
  templateUrl: "src/templates/videoList.html"
});
