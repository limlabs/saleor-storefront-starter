import clsx from "clsx";

export function boolOrSize(prefix: string, size?: BoolOrSize) {
    return clsx({
        [prefix + '-none']: size === false,
        [prefix]: size === true,
        [prefix + '-sm']: size === 'sm',
        [prefix + '-md']: size === 'md',
        [prefix + '-lg']: size === 'lg',
        [prefix + '-xl']: size === 'xl',
    })
}

export function sizeClass(prefix: string, size?: Size){
    return clsx({
        [prefix + '-xs']: size === 'xs',
        [prefix + '-sm']: size === 'sm',
        [prefix + '-md']: size === 'md',
        [prefix + '-lg']: size === 'lg',
    });
};

export function bgBlendMode(effect?: BGBlendMode) {
    return clsx({
        'bg-blend-normal': effect === 'normal',
        'bg-blend-multiply': effect === 'multiply',
        'bg-blend-screen': effect === 'screen',
        'bg-blend-overlay': effect === 'overlay',
        'bg-blend-darken': effect === 'darken',
        'bg-blend-lighten': effect === 'lighten',
    });
}