import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import FilmsItem from '@/components/films/FilmsItem.vue';
import Film from '../../src/classes/Film';

describe('FilmsItem.vue', () => {
  // eslint-disable-next-line camelcase
  const episode_id = 1;
  const title = 'Test Film Title';
  // eslint-disable-next-line camelcase
  const opening_crawl = 'Test Opening Crawl';
  const director = 'Test Director';
  const producer = 'Test Producer';
  // eslint-disable-next-line camelcase
  const release_date = new Date();
  const url = 'http://swapi.dev/api/films/1/';

  const film = new Film({
    episode_id, title, opening_crawl, director, producer, release_date, url,
  });

  const wrapper = shallowMount(FilmsItem, {
    propsData: { film },
  });

  it('Shows movie title', () => {
    expect(wrapper.text()).to.include(title);
  });

  it('Shows movie opening crawl', () => {
    expect(wrapper.text()).to.include(opening_crawl);
  });

  it('Shows movie director', () => {
    expect(wrapper.text()).to.include(director);
  });

  it('Shows movie producer', () => {
    expect(wrapper.text()).to.include(producer);
  });
});
