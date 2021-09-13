# 👷 Worker that creates redirects on the Edge
Redirects requests on the Edge. The redirects are stored in a JSON file, which reduces the amount of JavaScript processing that is required to read the file effectively.

## Deployment
* Cloudflare Wrangler

## Development language
* JavaScript

## Testing
To test the redirects, make a request to: 
* **URL**: https://redirects-inspiration-contained-js-wrangler.croud-testing.workers.dev/hire-sales/
* **Redirecting URL**: https://example.com/new-destination/hire-sales

* **URL**: https://redirects-inspiration-contained-js-wrangler.croud-testing.workers.dev/products/builders-equipment-and-light-access/
* **Redirecting URL**: https://example.com/new-destination/builders-equipment-and-light-access/

A simple mapping with from and to URLs can be found in src/data/redirects.json

## Implementation
1. Deploy Cloudflare Worker in Cloudflare using Wrangler or the user-interface
1. Upload the CSV file to a publicly accessible resource, such as FTP on the server or on a GitHub page
1. Change the location of the JSON file within the Cloudflare Worker
1. Route the requests through the Cloudflare Worker
1. Test the redirects by making requests to the 'From' URLs as defined within the JSON file

### Note
Fully completed mapping (JSON) file will be delivered in due time prior to the migration. The URLs within the JSON file within this repo are for testing purposes only.

## Files
* src/index.js - the Cloudflare Worker
* src/data/redirects.js - the redirects

## Documentation
* **Cloudflare Workers**: https://developers.cloudflare.com/workers/
* **Cloudflare Workers Examples**: https://developers.cloudflare.com/workers/examples
* **Cloudflare Wrangler**: https://github.com/cloudflare/wrangler

## Developed by
Kevin Ellen, Global Director of Web Experience