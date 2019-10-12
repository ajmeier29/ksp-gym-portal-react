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

  // await fetch(url, options)
  // .then(parseJSON)
  // .then(response => {
  //   console.log(response)
  //   if(response.status !== 200){
  //     //const errormsg = response.json.meta.error;
  //     alertmessage(response.json.errors)
  //   }
  //   else if(response.ok)
  //   {
  //     return response.json();
  //   }
  // if (response.ok) {
  //   return response.json();
  // } else {
  //   const errormsg = response.json();
  //   throw new Error(errormsg);
  // }
  // })
  // .then(data => {
  //   console.log("SUCESSFULLY IN THEN!")
  // })
  // .catch(error => {
  //   console.log(`Error Happend: ${error.message}`)
  // });
  // var xhr = new XMLHttpRequest();
  // xhr.open('POST', url);
  // xhr.send(JSON.stringify(data));
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
};
export { fetchJsonPromise, getOptions, alertmessage, parseJSON };
