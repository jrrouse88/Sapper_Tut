// Start up Sapper and mount it into the host element
import * as sapper from '@sapper/app';
sapper.start({
  target: document.getElementById("root")
});