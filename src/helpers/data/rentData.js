import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;
const getBills = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/bills.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
const postBills = (billsObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/bills.json`, billsObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/bills/${response.data.name}.json`, body)
        .then(() => getBills().then((bills) => resolve(bills)));
    })
    .catch((error) => reject(error));
});
export { getBills, postBills };
