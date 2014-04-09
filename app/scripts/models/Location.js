Weather.Location = Ember.Object.extend({

  name: '',
  weather: Ember.Object.create(),
  coordinates: Ember.Object.create(),

  humanWeather: function() {
    return 'Temperature is ' + this.get('weather.temp') + ' and humidity ' + this.get('weather.humidity');
  }.property('weather'),

  init: function() {
    this.updateWeather();
  },

  theCoordinatesChanged: function() {
    this.updateWeather();
  }.observes('coordinates'),

  updateWeather: function() {
    var _this = this;

    var params = {
      units: 'metric'
    };

    if(_this.get('coordinates.lat')) {
      params.lat = this.get('coordinates.lat')
      params.lon = this.get('coordinates.lon')
    }else{
      params.q = this.get('name');
    }

    Ember.$.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather',
      data: params
    }).done(function(response){
      _this.set('weather', Ember.Object.create(response.main));
      _this.set('name', response.name);

      if(!_this.get('coordinates.lat')) {
        _this.set('coordinates', Ember.Object.create(response.coord));
      }
    });
  }

});
