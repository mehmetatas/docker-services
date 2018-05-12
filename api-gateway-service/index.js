const http = require("http");
const redbird = require("redbird");

const proxy = redbird({port: 80});

const domain = "mehmetatas.net";
const gateway = "api";
const services = [
    "auth",
    "image",
    "product",
    "seller",
    "user"
];

services.forEach(service => {
    const vhost = service + "." + domain;
    const internalTarget = `http://${service}.internal.${domain}`;

    // route 'SERVICE.example.com' to 'SERVICE.internal.example.com'
    proxy.register(vhost, internalTarget);
    
    // route 'GATEWAY.example.com/SERVICE/path/to/resource' to 'SERVICE.internal.example.com/path/to/resource'
    proxy.addResolver(routeResolver({
        host: gateway + "." + domain,                   // if request is coming to GATEWAY.example.com
        test: new RegExp("^/" + service + "/", "i"),    // and if path starts with /SERVICE/
        route: {
            url: internalTarget,                        // route to http://SERVICE.internal.example.com
            path: "/" + service                         // remove /SERVICE from path
        }
    }));
});

function routeResolver(opts) {
    const resolver = (host, url, req) => {
        if (host === opts.host && opts.test.test(url)){
            return opts.route;
        }
    };
    resolver.priority = 1;
    return resolver;
}
