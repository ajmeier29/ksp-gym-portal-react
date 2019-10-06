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

async function postData(url, data) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.send(JSON.stringify(data));
  // // Default options are marked with *
  // const response = await fetch(url, {
  //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //   mode: 'cors', // no-cors, *cors, same-origin
  //   //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //   //credentials: 'same-origin', // include, *same-origin, omit
  //   headers: {
  //     'Content-Type': 'application/json'
  //     // 'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   //redirect: 'follow', // manual, *follow, error
  //   //referrer: 'no-referrer', // no-referrer, *client
  //   body: data // body data type must match "Content-Type" header
  // });
  // return await response.json(); // parses JSON response into native JavaScript objects
}
export { fetchJsonPromise, postData };
