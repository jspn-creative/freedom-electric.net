import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export { animateIn } from './animate-in.ts';


/**
 * returns a function that will wrap a string with a tag.
 * designed to be simple without the ability to add attributes and things.
 *
 * its main purpose is for text formatting
 */
const wrapWith = (tag: string) => (s: string) => `<${tag}>${s}</${tag}>`;

/**
 * @example
 *
 * ```typescript
 * const title = 'level 100 computer wizard';
 * const strongTitle = strongify(title);
 * strongTitle; //'<strong>level 100 computer wizard</strong>';
 * ```
 */
export const strongify = wrapWith('strong');
