import api from '@/plugins/api';

const fetchAll = () => new Promise((resolve, reject) => {
  const url = 'people';
  api.get(url).then((response) => {
    resolve(response);
  }).catch((error) => {
    reject(error);
  });
});

const fetchOne = (store, data) => new Promise((resolve, reject) => {
  const url = `people/${data.id}`;
  api.get(url).then((response) => {
    resolve(response);
  }).catch((error) => {
    reject(error);
  });
});

export default {
  fetchAll,
  fetchOne,
};
