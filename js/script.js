//create backbone model
var Person = Backbone.Model.extend();

//instance of model
var person = new Person({
  name: 'Meg'
});

// create backbone view and tell it what its template is
// every view has a template
var PageView = Backbone.View.extend({
  template: Handlebars.compile($('#person-template').html()),
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));

    return this;
  }
});

  // create an instance of the PageView
var pageView = new PageView({
  el: '#container', //tell it what container to insert into
  model: person //tell it its model
});

//render the view
pageView.render();
