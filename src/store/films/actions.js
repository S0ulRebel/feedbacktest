import api from '@/plugins/api';

const fetchAll = (store, data) => new Promise((resolve, reject) => {
  const url = data.term ? `films?search=${data.term}` : 'films';
  api.get(url).then((response) => {
    resolve(response);
  }).catch((error) => {
    reject(error);
  });
});

const fetchOne = (store, data) => new Promise((resolve, reject) => {
  const url = `films/${data.id}`;
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
