import {v4 as uuid} from "uuid";
import Cookies from "js-cookie";

export const ID_KEY = "userId";

export function getUserIdFromCookies(): undefined | string {
    return Cookies.get(ID_KEY);
}

export function setUserIdToCookies(): string {
    const userId = uuid();
    Cookies.set(ID_KEY, userId);
    return userId;
}
