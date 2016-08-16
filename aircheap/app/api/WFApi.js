import 'whatwg-fetch';

let wfApi = {
  fetchForms() {
    return fetch('http://127.0.0.1/wordpress/index.php/wf/custom/form')
    .then((response) => response.json());
  },

  fetchFormById(id) {
    let url = `http://127.0.0.1/wordpress/index.php/wf/wfc/id/${id}`
    return fetch(url)
    .then((response) => response.json());
  }
};

export default wfApi;
