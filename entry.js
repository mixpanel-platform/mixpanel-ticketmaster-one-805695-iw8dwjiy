// Stylesheets
require('normalize.css');
require('stylus/app');
// Add content to HTML
var content = require('jade/includes/content.jade')();
$('body').html(content);
// Add images
$('#company-logo').attr('src', require('images/ticketmaster-logo@2x'));
var hostName = window.location.hostname;
if (hostName == 'mixpanel.com' || hostName == 'mixpanelplatform.com') {
    mixpanel.init('adc07d1bff38929e7b4d1feb4cac87d3', {}, 'dm');
} else {
    mixpanel.init("e289f04030b8c42c579875fbfa315495", {}, 'dm');
}
require('coffee/platform');
