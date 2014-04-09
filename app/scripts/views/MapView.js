Weather.MapView = Ember.View.extend({

  classNames: ['map'],

  templateName: 'map',

  didInsertElement: function() {

    var domOfThisView = this.get('element');
    console.log(domOfThisView);

    var mapOptions = {
      zoom: 8,
      center: new google.maps.LatLng(-34.397, 150.644)
    };
    map = new google.maps.Map(domOfThisView, mapOptions);
  }
});
