"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio = require("cheerio");
const Helpers_1 = require("./Helpers");
const HtmlLoader_1 = require("./HtmlLoader");
class ImageSearch {
    static async findImages(url, showAllImages) {
        const response = await HtmlLoader_1.HtmlLoader.getHTML(url);
        const $ = cheerio.load(response.html);
        const logos = [
            { type: 'og:logo', url: $('meta[property="og:logo"]').attr('content') },
            { type: 'meta-itemprop/logo', url: $('meta[itemprop="logo"]').attr('content') },
            ...$('link[rel*="icon"]')
                .map((i, el) => {
                return { type: 'link-rel/icon', url: $(el).attr('href'), size: $(el).attr('sizes') };
            })
                .get(),
            { type: 'img-itemprop/logo', url: $('img[itemprop="logo"]').attr('src') },
            {
                type: 'meta-name/msapplication-TileImage',
                url: $('meta[name*="msapplication-TileImage"]').attr('content'),
            },
            { type: 'meta-content/logo', url: $('meta[content*="logo"]').attr('content') },
            { type: 'meta-content/image', url: $('meta[itemprop*="image"]').attr('content') },
            ...$('script[type*="application/ld+json"]')
                .map((i, el) => {
                return { type: 'json-ld-logo', url: Helpers_1.Helpers.findJsonLdImages($(el).html()) };
            })
                .get(),
            { type: 'img-alt/logo', url: $('img[alt*="logo"]').attr('src') },
            { type: 'img-alt/logo-class', url: $('img[class*="logo"]').attr('src') },
            { type: 'img-src/logo', url: $('img[src*="logo"]').attr('src') },
            { type: 'og:image', url: $('meta[property="og:image"]').attr('content') },
        ].filter(e => e.url);
        const correctLogos = logos.map((image) => {
            return !Helpers_1.Helpers.validUrl(image.url) && image.url.indexOf('data:') === -1
                ? {
                    ...image,
                    url: response.url + image.url.substring(1),
                }
                : image;
        });
        if (showAllImages) {
            return correctLogos;
        }
        else {
            const [logo] = correctLogos;
            return logo;
        }
    }
}
exports.ImageSearch = ImageSearch;
//# sourceMappingURL=ImageSearch.js.map