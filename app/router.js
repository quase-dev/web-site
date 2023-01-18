import EmberRouter from '@ember/routing/router';
import config from 'web-site/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('home');
  this.route('gps-generate');
  this.route('gps-roadmap');
});
