/*
  Using Cloudflare workers to implement a migration, where the redirects are performed by the Cloudflare Worker opposed to being done by the origin server.

    The external redirect file can be found at: 
*/

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const handleRequest = async (request) => {
  // Store the request URL as an URL object

  const url = new URL(request.url);

  // Get the redirects from the (public) GitHub file. As there are two promises, I wrapped them into a single async method
  const redirectsObj = await(await fetch('https://raw.githubusercontent.com/croud-web-experience/public/master/cloudflare-workers-redirects-file/redirects.json')).json();

// Check if the path is within the redirects object
if(redirectsObj.hasOwnProperty(url.pathname)){

  // Redirect has been found, store the data in a variable for ease of use in this example
  const redirDestination = redirectsObj[url.pathname].to;
    
  // define the URL. If the string does not start with 'http', add the HTTPS scheme and current domain; we can hard-code the current domain

  const redirUrl = redirDestination.substring(0,4) === 'http' ? redirDestination :  'https://'  +url.host + redirDestination;
  // Return the response with the redirecting URL and status
  return Response.redirect(redirUrl, 301);
}

  /* Disabled for now, as there are no resources - But you can make it pass-through by just requesting the origin or have a catch-all redirect
    // Return a normal response, grabbing the original request
    return fetch(request);
  */
  return new Response(
    `
      <h1>Welcome!</h1><p>To view an example redirect, please make a request to /xx-xx/hello-world</p>
    `,
    {
      status:200,
      headers:{
        'content-type':'text/html',
        'x-robots-tag':'noindex'
      }
    }
  );
}