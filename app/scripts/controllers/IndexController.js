Weather.IndexController = Ember.Controller.extend({

  name: 'Kolbermoor',

  locationsBinding: 'Weather.Storage.locations',

  actions: {
    create: function() {
      var newLocation = Weather.Location.create({
        name: this.get('name')
      });
      Weather.Storage.get('locations').addObject(newLocation);
      this.set('name', '');
    }
  }
});
