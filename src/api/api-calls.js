import { resolve } from 'url';

// const fetchJsonData = async (url, setStateFunction) => {
//     // const api = fetch(apiLink);
//     // api.json().then(res =>
//     //     {
//     //         return res;
//     //     });
//     fetch(url)
//         .then(response =>
//             {
//                 if(response.ok)
//                 {
//                     return response.json();
//                 }
//             })
//         .then(json =>
//             {
//                 setStateFunction(json);
//             });
// }
async function fetchJsonPromise(url) {
  const response = await fetch(url);
  return response.json();
}

function parseJSON(response) {
  return new Promise(resolve =>
    response.json().then(json =>
      resolve({
        status: response.status,
        ok: response.ok,
        json
      })
    )
  );
}

const alertmessage = message => {
  alert(JSON.stringify(message));
};

const getOptions = data => {
  return {
    method: 'post',
    headers: {
      Accept: 'application/json; charset=utf-8',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
};
export { fetchJsonPromise, getOptions, alertmessage, parseJSON };
