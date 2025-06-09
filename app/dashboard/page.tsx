"use client";

import React, { useState, useEffect } from 'react';

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);

  useEffect(() => {
    // Create a new Web Worker
    const worker = new Worker(new URL('./worker.ts', import.meta.url));

    worker.onmessage = (event) => {
      setD(event.data);
      worker.terminate();
    };

    // Start the worker
    worker.postMessage('start');

    // Cleanup in case component unmounts before worker finishes
    return () => {
      worker.terminate();
    };
  }, []);

  return <div>{d !== null ? d : 'Calculating...'}</div>;
}
