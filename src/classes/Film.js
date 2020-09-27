import getIdFromURL from '../helpers/functions';

export default class Film {
  constructor({
    // eslint-disable-next-line camelcase
    episode_id, title, opening_crawl, director, producer, release_date, url,
  }) {
    Object.assign(this, {
      episode_id, title, opening_crawl, director, producer, release_date, url,
    });
  }

  getIdFromURL() {
    return getIdFromURL(this.url);
  }
}
