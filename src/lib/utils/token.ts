const rand = () => Math.random().toString(36).substr(2);

/**
 * Generates a random token.
 * 
 * @param length The length of the generated token
 * @returns A token string
 */
export const token = (length) => (rand()+rand()+rand()+rand()).substr(0,length);
