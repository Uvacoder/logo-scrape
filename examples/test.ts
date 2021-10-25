import { LogoScrape } from '../lib/LogoScrape';

(async () => {
    const url = 'https://www.apple.com'
    // const logo = await LogoScrape.getLogo(url);
    const logos = await LogoScrape.getLogos(url);
    console.log({ logos });
})();
