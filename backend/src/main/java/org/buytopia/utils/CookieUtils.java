package org.buytopia.utils;

import java.util.Arrays;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

public class CookieUtils {
    public static void clearCookie(String cookieName, HttpServletResponse response) {
        Cookie cookie = new Cookie(cookieName, null);
        cookie.setHttpOnly(true);
        cookie.setSecure(true);
        cookie.setPath("/");
        cookie.setMaxAge(0);
        response.addCookie(cookie);
    }

    public static String findCookie(String cookieName, Cookie[] cookies) {
        return Arrays.stream(cookies).filter(cookie -> cookieName.equals(cookie.getName())).map(Cookie::getValue).findAny().orElse(null); 
    }
}
