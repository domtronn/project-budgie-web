import * as functions from "firebase-functions";
import next from "next";

const dev = process.env.NODE_ENV !== "production";

const app = next({
    dev,
    conf: { distDir: "dist/client" },
    // dir: "./src/client",
});

console.log("dtest", app)

const handle = app.getRequestHandler();

exports.nextjs = functions.https.onRequest((request, response) => {
    console.log("File: " + request.originalUrl);
    return app.prepare().then(() => handle(request, response));
});
