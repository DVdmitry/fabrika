import { Injectable } from '@angular/core';
import { MainLink } from './main-link/main-link';
import { MAINLINKS} from './main-link/main-link.data';
import { Picture } from "./carousel-basic/picture-carousel";
import { PICTURES } from "./carousel-basic/picture-data";
import { SiteLink } from "./site-link/site-link";
import { SITELINKS } from "./site-link/site-link.data";

@Injectable()
export class Service {
    getLinkInfo(): MainLink[]{
        return MAINLINKS;
    }

    getPictures(): Picture[]{
        return PICTURES;
    }

    getSiteLinks(): SiteLink[]{
        return SITELINKS;
    }
}
