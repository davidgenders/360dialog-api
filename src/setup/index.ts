// This file is a stud for the documentation.
// You shouldn't import it as it might execute code for different runtimes.

/**
 * @module setup
 *
 * @description
 * Simplify the setup proccess of the WhatsAppAPI for different runtimes.
 *
 * @example
 * ```ts
 * import { WhatsAppAPI } from "whatsapp-api-js";
 * import { NodeNext } from "whatsapp-api-js/setup/node";
 *
 * const Whatsapp = new WhatsAppAPI(NodeNext({
 *     token: "YOUR_TOKEN",
 *     appSecret: "YOUR_APP_SECRET"
 * }));
 * ```
 */

export * from "./bun";
export * from "./deno";
export * from "./web";
export * from "./node";
