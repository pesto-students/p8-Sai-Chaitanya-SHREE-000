const memoize = (func) => {
    const cache = new Map();
    return ((...args) => {
        const key = args.toString();
        if (cache.has(key)) return cache.get(key);
        cache.set(key, func(...args))
        console.log(cache);
        return cache.get(key)
    });
}

const add = (a = 0, b = 0) => {
    return (a + b);
}

const memoizeAdd = memoize(add);

memoizeAdd(100, 100);
memoizeAdd(100);
memoizeAdd(100, 200);
memoizeAdd(100, 200);
