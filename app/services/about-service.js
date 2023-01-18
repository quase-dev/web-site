import Service from '@ember/service';

export default class AboutServiceService extends Service {
  contactLinks() {
    return createContactLinks();
  }

  technologyLinks() {
    return createTechnologyLinks();
  }
}

let makeIconLink = (icon, url) => ({
  icon,
  url,
});

function createContactLinks() {
  return [
    makeIconLink('linkedin', 'https://www.linkedin.com/company/quasedev'),
    makeIconLink('github', 'https://github.com/quase-dev'),
    makeIconLink('instagram', 'https://www.instagram.com/quasedevoficial'),
  ];
}

let makeIconVersionLink = (icon, description, url, version) => ({
  icon,
  description,
  url,
  version,
});

function createTechnologyLinks() {
  return [
    makeIconVersionLink(
      'github',
      'gps-calc',
      'https://github.com/quase-dev/web-site/blob/main/app/services/gps-calculation-service.js#L37',
      '0.0.1'
    ),
    makeIconVersionLink(
      'bootstrap-fill',
      'bootstrap',
      'https://getbootstrap.com/docs/5.3/',
      '5.3.0'
    ),
    makeIconVersionLink(
      'filetype-js',
      'emberjs',
      'https://guides.emberjs.com/v4.9.0/',
      '4.9.0'
    ),
  ];
}
