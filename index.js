addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with URL variant A or B
 * @param {Request} request
 */
async function handleRequest(request) {
  try {
    fetch('https://cfw-takehome.developers.workers.dev/api/variants')
    .then((response) => {
      urlArrayJson = response.json();
      var choose = Math.random();
      if (choose == 0){
        // windows.location.replace(urlArrayJson[0]);
        return new Response(urlArrayJson[0]);
      }
      else {
        // windows.location.replace(urlArrayJson[1]);
        return new Response(urlArrayJson[1]);
      }
    })
    .then((data) => {
      console.log(data);
    });
  } catch (error) {
    return new Response(error.stack || error);
  }
}
