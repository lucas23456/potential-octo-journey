AFRAME.registerComponent('blanklink', {
  navigate: function () {
    window.open(this.data.href, '_blank');
  }
});