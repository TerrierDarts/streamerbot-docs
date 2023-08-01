import { defineMultiCacheOptions } from 'nuxt-multi-cache';
import cloudflareKvHttp from 'unstorage/drivers/cloudflare-kv-http';

export default defineMultiCacheOptions({
  component: {
    storage: {
      driver: cloudflareKvHttp({
        base: 'component:',
        namespaceId: process.env.CLOUDFLARE_KV_NAMESPACE_ID ?? '',
        accountId: process.env.CLOUDFLARE_ACCOUNT_ID ?? '',
        apiToken: process.env.CLOUDFLARE_KV_API_TOKEN ?? ''
      }),
    },
  },
});
