import { Injectable } from '@angular/core';
import { MainLink } from './main-link/main-link';
import { MAINLINKS} from './main-link/main-link.data';
import { Picture } from "./carousel-basic/picture-carousel";
import { PICTURES } from "./carousel-basic/picture-data";
import { SiteLink } from "./site-link/site-link";
import { SITELINKS } from "./site-link/site-link.data";
import { PictureAbout } from "./about/about";
import { PICTURESABOUT } from "./about/about-data";
import { Kurs } from "./kurs/kurs";
import { KURS } from "./kurs/kurs-data";
import { KURSSTRUCT } from "./kurs/kurs-data";
import { KURSADVICE } from "./kurs/kurs-data";
import { Diplom } from "./diplom/diplom";
import { DIPLOM } from "./diplom/diplom-data";
import { DIPLOMSTRUCT } from "./diplom/diplom-data";
import { DIPLOMADVICE } from "./diplom/diplom-data";
import { Price } from "./price/price";
import { PRICEDATA } from "./price/price-data";


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

    getPicturesAbout(): PictureAbout[]{
        return PICTURESABOUT;
    }

    getKurs(): Kurs[]{
        return KURS;
    }
    getKursStruct(): Kurs[]{
        return KURSSTRUCT;
    }

    getDiplom(): Diplom[]{
        return DIPLOM;
    }
    getDiplomStruct(): Diplom[]{
        return DIPLOMSTRUCT;
    }
    getDiplomAdvice(): Diplom[]{
        return DIPLOMADVICE;
    }

    getPrice(): Price[]{
        return PRICEDATA;
    }
    getKursAdvice(): Kurs[]{
        return KURSADVICE;
    }

}
