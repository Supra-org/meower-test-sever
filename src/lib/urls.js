/**
 * @file Server-related URL constants.
 */

export const linkUrl =
	localStorage.getItem("meower_linkurl") ||
	"wss://testcl.meower.org/";
export const apiUrl =
	localStorage.getItem("meower_apiurl") || "wss://testapi.meower.org/";
export const encodeApiURLParams =
	localStorage.getItem("meower_encodeapi") || false;
