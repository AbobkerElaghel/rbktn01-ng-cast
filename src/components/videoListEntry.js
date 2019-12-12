angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video : '<',
    changeVideo: '<',
    url : '<'
  },

  templateUrl: "src/templates/videoListEntry.html"
});

