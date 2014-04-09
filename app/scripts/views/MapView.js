Weather.MapView = Ember.View.extend({

  classNames: ['map'],

  templateName: 'map',

  didInsertElement: function() {
    var _this = this;
    var domOfThisView = this.get('element');

    var mapOptions = {
      zoom: 8,
      center: new google.maps.LatLng(this.get('position.lat'), this.get('position.lon'))
    };
    map = new google.maps.Map(domOfThisView, mapOptions);

    google.maps.event.addListener(map, 'idle', function() {
      var currentPosition = map.getCenter();

      _this.set('position', Ember.Object.create({
        lat: currentPosition.k,
        lon: currentPosition.A
      }));
    });
  }

});
