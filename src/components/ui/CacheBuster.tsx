"use client";

import { useEffect } from "react";

export default function CacheBuster() {
  useEffect(() => {
    // 1. Unregister any stale Service Workers
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const registration of registrations) {
          registration.unregister();
        }
      });
    }

    // 2. Clear browser CacheStorage API
    if ("caches" in window) {
      caches.keys().then((names) => {
        for (const name of names) {
          caches.delete(name);
        }
      });
    }
  }, []);

  return null;
}
