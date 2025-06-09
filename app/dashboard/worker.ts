// worker.ts
self.onmessage = () => {
    let t = 0;
    for (let i = 0; i < 1e8; i++) {
      t += i;
    }
    // Post result back to main thread
    self.postMessage(t);
  };
  