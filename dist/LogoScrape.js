"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Helpers_1 = require("./Helpers");
const ImageSearch_1 = require("./ImageSearch");
class LogoScrape {
    static async getLogo(url) {
        if (typeof url !== 'string') {
            return Promise.all(url.map((urlItem) => {
                if (!Helpers_1.Helpers.validUrl(urlItem)) {
                    throw new Error(`No valid url found (${urlItem})`);
                }
                return ImageSearch_1.ImageSearch.findImages(urlItem);
            }));
        }
        else {
            if (!Helpers_1.Helpers.validUrl(url)) {
                throw new Error(`No valid url found (${url})`);
            }
            return ImageSearch_1.ImageSearch.findImages(url);
        }
    }
    static async getLogos(url) {
        if (typeof url !== 'string') {
            return Promise.all(url.map((urlItem) => {
                if (!Helpers_1.Helpers.validUrl(urlItem)) {
                    throw new Error(`No valid url found (${urlItem})`);
                }
                return ImageSearch_1.ImageSearch.findImages(urlItem, true);
            }));
        }
        else {
            if (!Helpers_1.Helpers.validUrl(url)) {
                throw new Error(`No valid url found (${url})`);
            }
            return ImageSearch_1.ImageSearch.findImages(url, true);
        }
    }
}
exports.LogoScrape = LogoScrape;
//# sourceMappingURL=LogoScrape.js.map