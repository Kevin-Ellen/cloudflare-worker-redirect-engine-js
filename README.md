# 👷 Worker that creates redirects on the Edge
Redirects requests on the Edge. The redirects are stored in a JSON file, which reduces the amount of JavaScript processing that is required to read the file effectively.

## Deployment
* Cloudflare Wrangler

## Development language
* JavaScript

## Testing
To test the redirects, make a request to: 
### Example 1
* **URL**: https://cloudflare-worker-redirect-engine-js.croud-testing.workers.dev/hire-sales/
  * **Redirecting URL**: https://example.com/new-destination/hire-sales

### Example 2
* **URL**: https://cloudflare-worker-redirect-engine-js.croud-testing.workers.dev/products/builders-equipment-and-light-access/
  * **Redirecting URL**: https://example.com/new-destination/builders-equipment-and-light-access/

## Implementation
1. Deploy Cloudflare Worker in Cloudflare using Wrangler or the user-interface
1. Route the requests through the Cloudflare Worker
1. Test the redirects by making requests to the 'From' URLs as defined within the JSON file

## Files
* [src/index.js](src/index.js) - the Cloudflare Worker
* [Redirect file on host](http://data.altradgeneration.com.s3-website.eu-west-2.amazonaws.com/hire-sales-redirects.json) - the redirects

### Note
The URLs within the JSON file within this example are for testing purposes only.

## Documentation
* **Cloudflare Workers**: https://developers.cloudflare.com/workers/
* **Cloudflare Workers Examples**: https://developers.cloudflare.com/workers/examples
* **Cloudflare Wrangler**: https://github.com/cloudflare/wrangler

## Developed by
Kevin Ellen, Global Director of Web Experience