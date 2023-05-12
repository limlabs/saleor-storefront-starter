import clsx from "clsx";

export function roundedClass(size?: BoolOrSize) {
    return clsx({
        'rounded-none': size === false,
        'rounded': size === true,
        'rounded-sm': size === 'sm',
        'rounded-md': size === 'md',
        'rounded-lg': size === 'lg',
        'rounded-xl': size === 'xl',
    })
}

export function shadowClass(size?: BoolOrSize) {
    return clsx({
        'shadow-none': size === false,
        'shadow': size === true,
        'shadow-sm': size === 'sm',
        'shadow-md': size === 'md',
        'shadow-lg': size === 'lg',
        'shadow-xl': size === 'xl',
    })
}

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