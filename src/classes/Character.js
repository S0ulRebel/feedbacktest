import getIdFromURL from '../helpers/functions';

export default class Character {
  constructor({
    // eslint-disable-next-line camelcase
    name, gender, birth_year, url,
  }) {
    Object.assign(this, {
      name, gender, birth_year, url,
    });
  }

  getIdFromURL() {
    return getIdFromURL(this.url);
  }
}
