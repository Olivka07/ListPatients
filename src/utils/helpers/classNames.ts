type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...Object.entries(mods)
            .filter(([_, flag]) => Boolean(flag))
            .map(([className]) => className),
        ...additional
    ].join(' ');
}