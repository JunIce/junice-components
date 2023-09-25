
function toVal(mix: any): string {
    let k, y, str = '';

    if (typeof mix === 'string' || typeof mix === 'number') {
        str += mix;
    } else if (typeof mix === 'object') {
        if (Array.isArray(mix)) {
            for (k = 0; k < mix.length; k++) {
                if (mix[k]) {
                    if (y = toVal(mix[k])) {
                        str && (str += ' ');
                        str += y;
                    }
                }
            }
        } else {
            for (k in mix) {
                if (mix[k]) {
                    str && (str += ' ');
                    str += k;
                }
            }
        }
    }

    return str;
}


export default function classnames(...args: any[]): string {
    const result: string[] = [];

    for (let i = 0; i < args.length; i++) {
        const val = args[i];
        const tVal = toVal(val);
        if (tVal) {
            result.push(tVal);
        }
    }

    return result.join(' ');
}