Weather.Location = Ember.Object.extend({

  name: '',
  weather: Ember.Object.create(),

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
      _this.set('weather', Ember.Object.create(response.main))
    });
  }

});
