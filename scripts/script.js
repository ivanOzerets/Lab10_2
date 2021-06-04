// script.js

import { router } from './router.js';


const headerText = document.querySelector('header > h1');
const settings = document.querySelector('header > img');

// When the back button is hit, set the state with the new page
window.addEventListener('popstate', e => {
  if (e.state?.page && e.state.page.startsWith('entry')) {
    router.setState('entry', true, Number(e.state.page.substr(5, e.state.page.length)));
  } else {
    router.setState(e.state?.page, true);
  }
});

// Go to header page when header button is clicked
headerText.addEventListener('click', () => {
  router.setState('home', false);
});

// Go to settings page when settings button is clicked
settings.addEventListener('click', () => {
  router.setState('settings', false);
});

document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cse110lab6.herokuapp.com/entries')
    .then(response => response.json())
    .then(entries => {
      entries.forEach(entry => {
        let newPost = document.createElement('journal-entry');
        newPost.entry = entry;
        newPost.addEventListener('click', () => {
          let numEntry = Array.from(document.querySelector('main').childNodes).indexOf(newPost);
          router.setState('entry', false, numEntry + 1);
        });
        document.querySelector('main').appendChild(newPost);
      });
    });

    

    // function getRandomInt(max) {
    //   return Math.floor(Math.random() * max);
    // }
    //     // Instantiate the SDK. CDN will expose splitio globally 
    // var factory = splitio({ 
    //   core: {
    //     authorizationKey: 'ldqvfvnh40n8gil0h206sqa4sapdmg7guuie',
    //     // your internal user id, or the account id that 
    //     // the user belongs to. 
    //     // This coudld also be a cookie you generate
    //     // for anonymous users
    //     key: 'key' + getRandomInt(100000),
    //     // an OPTIONAL traffic type, if provided will be
    //     // used for event tracking with the SDK client.
    //     trafficType: 'A_TRAFFIC_TYPE'
    //   }
    // });

    // // var SplitFactory = require('@splitsoftware/splitio').SplitFactory;
    // // // Instantiate the SDK
    // // var factory = SplitFactory({ 
    // //   core: {
    // //     authorizationKey: 'ldqvfvnh40n8gil0h206sqa4sapdmg7guuie',
    // //     // the key can be the logged in
    // //     // user id, or the account id that 
    // //     // the logged in user belongs to. 
    // //     // The type of customer (user, account, custom)
    // //     // is chosen during Split's sign-up process.
    // //     key: 'key' + getRandomInt(100000),
    // //   },
    // //   startup: {
    // //     readyTimeout: 1.5 // 1.5 sec
    // //   }
    // // });

    // // And get the client instance you'll use
    // var client = factory.client();
        
    // client.on(client.Event.SDK_READY, function() {
    //   var treatment = client.getTreatment("double-column");
    //   if (treatment == "on") {
    //     console.log("Treament is on");
    //       document.getElementsByTagName('main').classList.add("double-column");
    //   } else if (treatment == "off") {
    //     console.log("Treament is off");
    //       document.getElementsByTagName('main').classList.remove("double-column");
    //   } else {
    //       // insert your control treatment code here
    //   }
    // });    

});

    

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
    // Instantiate the SDK. CDN will expose splitio globally 
var factory = splitio({ 
  core: {
    authorizationKey: 'ldqvfvnh40n8gil0h206sqa4sapdmg7guuie',
    // your internal user id, or the account id that 
    // the user belongs to. 
    // This coudld also be a cookie you generate
    // for anonymous users
    key: 'key' + getRandomInt(100000),
    // an OPTIONAL traffic type, if provided will be
    // used for event tracking with the SDK client.
    // trafficType: '3bf86840-c56b-11eb-b11d-12e041211763'
  }
});

// var SplitFactory = require('@splitsoftware/splitio').SplitFactory;
// // Instantiate the SDK
// var factory = SplitFactory({ 
//   core: {
//     authorizationKey: 'ldqvfvnh40n8gil0h206sqa4sapdmg7guuie',
//     // the key can be the logged in
//     // user id, or the account id that 
//     // the logged in user belongs to. 
//     // The type of customer (user, account, custom)
//     // is chosen during Split's sign-up process.
//     key: 'key' + getRandomInt(100000),
//   },
//   startup: {
//     readyTimeout: 1.5 // 1.5 sec
//   }
// });

// And get the client instance you'll use
var client = factory.client();
    
client.on(client.Event.SDK_READY, function() {
  var treatment = client.getTreatment("double_column");
  if (treatment == "on") {
    // console.log("Treament is on");
    document.querySelector('main').classList.add('double-column');
  } else if (treatment == "off") {
    // console.log("Treament is off");
    document.querySelector('main').classList.remove('double-column');
  } else {
      // insert your control treatment code here
  }

});    

