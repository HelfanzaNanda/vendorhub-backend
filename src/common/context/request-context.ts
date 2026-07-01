import { AsyncLocalStorage } from 'node:async_hooks';

type Context = { userId?: number };

const als = new AsyncLocalStorage<Context>();

export class RequestContext {
    static run(context: Context, callback: () => void) {
        als.run(context, callback);
    }

    static get userId(): number | undefined {
        return als.getStore()?.userId;
    }
}
