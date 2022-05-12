AFRAME.registerComponent('blanklink', {
  schema: {
        on: {default: 'click'},
  navigate: function () {
    window.open(this.data.href, '_blank');
  }
}
});