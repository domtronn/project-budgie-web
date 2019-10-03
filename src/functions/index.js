import * as functions from "firebase-functions";
import next from "next";
const dev = process.env.NODE_ENV !== "production";

const app = next({
    dev,
    conf: { distDir: "next" },
});

const handle = app.getRequestHandler();

exports.nextjs = functions.https.onRequest((request, response) => {
    console.log("dtest File: " + request.originalUrl);
    response.set('Cache-Control', 'public, max-age=36000, s-maxage=72000');
    return app.prepare().then(() => handle(request, response));
});
