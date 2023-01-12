
// // Add your code here
// function submitData(username, useremail)

//     fetch('http://localhost:3000/users', {
//       method: "POST",
//       Headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({username, useremail})
//     })
//     .then(function (response) {
//         return response.json();
//       })
//       //.then function (data)
function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({name, email
    })
  })
  .then(function (response) {
    return response.json();
  })
  .then(function(object){
    document.body.innerHTML=body["id"]
  })
  .catch(function(error) {
    document.body.innerHTML=error.message
  })
  }
