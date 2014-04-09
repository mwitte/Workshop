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

  updateWeather: function() {
    var _this = this;
    Ember.$.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather',
      data: {
        q: this.get('name'),
        units: 'metric'
      }
    }).done(function(response){
      _this.set('weather', Ember.Object.create(response.main));
      _this.set('coordinates', Ember.Object.create(response.coord));
    });
  }

});
