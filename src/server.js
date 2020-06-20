// Import packages to build server
import * as sapper from "@sapper/server";
import express from "express";
import compression from "compression";
import sirv from "sirv";

// Calculate environment variables for server
const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

// Start up server + build static assets
express().
  use(
    compression({threshold: 0}),
    sirv("static",{dev}),
    sapper.middleware() )
  .listen(PORT);