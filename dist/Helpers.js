"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Helpers {
    static validUrl(url) {
        const isValidUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
        return isValidUrl.test(url);
    }
    static findJsonLdImages(text) {
        const info = JSON.parse(text);
        return info ? info.logo : null;
    }
    static svgToDataURL(svgStr) {
        if (svgStr && svgStr.indexOf('svg') && svgStr.indexOf('href') === -1) {
            const encoded = encodeURIComponent(svgStr)
                .replace(/'/g, '%27')
                .replace(/"/g, '%22');
            const header = 'data:image/svg+xml,';
            return header + encoded;
        }
        else {
            return null;
        }
    }
}
exports.Helpers = Helpers;
//# sourceMappingURL=Helpers.js.map