import title_white from '../assets/newers/SVG/header.svg'

import banner_1 from '../assets/newers/SVG/banner1.svg'
import banner_2 from '../assets/newers/SVG/banner2.svg'
import banner_3 from '../assets/newers/SVG/banner3.svg'
import banner_4 from '../assets/newers/SVG/banner4.svg'
import banner_5 from '../assets/newers/SVG/banner5.svg'
import banner_6 from '../assets/newers/SVG/banner6.svg'
import banner_7 from '../assets/newers/SVG/banner7.svg'
import banner_8 from '../assets/newers/SVG/banner8.svg'
import banner_9 from '../assets/newers/SVG/banner9.svg'
import banner_10 from '../assets/newers/SVG/banner10.svg'
import banner_11 from '../assets/newers/SVG/banner11.svg'
// import banner_12 from '../assets/newers/SVG/head_12.svg'
// import banner_13 from '../assets/newers/SVG/head_13.svg'

import img_1 from '../assets/newers/SVG/img_1.svg'
import img_2 from '../assets/newers/SVG/img_2.svg'
import img_3 from '../assets/newers/SVG/img_3.svg'
import img_4 from '../assets/newers/SVG/img_4.svg'
import img_5 from '../assets/newers/SVG/img_5.svg'
import img_6 from '../assets/newers/SVG/img_6.svg'
import img_7 from '../assets/newers/SVG/img_7.svg'
import img_8 from '../assets/newers/SVG/img_8.svg'
import img_9 from '../assets/newers/SVG/img_9.svg'


export const titles = {
    title_white
}

export function handleBanners(index) {
    switch (index) {
        case 1: return banner_1
        case 2: return banner_2
        case 3: return banner_3
        case 4: return banner_4
        case 5: return banner_5
        case 6: return banner_6
        case 7: return banner_7
        case 8: return banner_8
        case 9: return banner_9
        case 10: return banner_10
        case 11: return banner_11
        // case 12: return banner_12
        // case 13: return banner_13
        default:
            break;
    }
}

export function handleImages(index) {
    switch (index) {
        case 1: return img_1
        case 2: return img_2
        case 3: return img_3
        case 4: return img_4
        case 5: return img_5
        case 6: return img_6
        case 7: return img_7
        case 8: return img_8
        case 9: return img_9
        default:
            break;
    }
}
