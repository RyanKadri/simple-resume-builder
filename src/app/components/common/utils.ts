export function flatten<T>(arr: (T | T[])[]) {
    const res: T[] = [];
    for(const el of arr) {
        if(Array.isArray(el)) {
            res.push(...flatten(el))
        } else {
            res.push(el)
        }
    }
    return res;
}