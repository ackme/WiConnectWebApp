/*global Backbone:true, $:true, _:true, App:true, async:true */
/*jshint multistr:true */
/*jshint browser:true */
/*jshint strict:false */


App.Views.Cloud = Backbone.View.extend({
  els: [],
  views: [],

  template: _.template('\
<div class="content">\
<h1>Cloud Services</h1>\
<p>ACKme modules interoperate with cloud vendors offering services for device monitoring, control and messaging. Cloud services pre-installed on this module need to be enabled by a secure activation process prior to use.</p>\
<div class="clear"></div>\
<hr>\
</div>\
<div class="content">\
<h1>Commercial Services</h1>\
<a class="sdc-logo" href="https://sensors.com" target="_blank"></a>\
<h4>The Complete Silicon-to-Cloud&trade; IoT Framework Solution</h4>\
<div class="clear"></div>\
<hr>\
</div>\
<div class="gohackme"></div>'),

  initialize: function(opts){
    _.bindAll(this, 'render', 'onClose');
    this.delegateEvents();

    this.device = opts.device;
    this.controller = opts.controller;

    this.listenTo(this.controller, 'change:view', this.render);
    this.render();
  },

  onClose: function(){
    this.stopListening();
  },

  events: {},

  render: function(){
    var self = this;

    if(this.controller.get('view') !== 'cloud'){
      $(this.el).removeClass('active');
      return;
    }
    this.$el.html(this.template()).addClass('active');

    self.gohackme = new App.Views.GoHACKme({
      el: $('.gohackme'),
      controller: self.controller,
      device: self.device
    });
  }
});