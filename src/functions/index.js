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
    return app.prepare().then(() => handle(request, response));
});
