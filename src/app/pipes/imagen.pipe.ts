import { Pipe, PipeTransform } from '@angular/core';

import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = 'usuario'): string {
    let url = `${URL_SERVICIOS}/img`;

    if (!img) {
      return `${url}/${tipo}/123456`;
    } else if (img.indexOf('https') >= 0) {
      return img;
    }

    switch (tipo) {
      case 'usuario':
        url += `/usuarios/${img}`;
      break;

      case 'hospitales':
        url += `/hospitales/${img}`;
      break;

      case 'medicos':
        url += `/medicos/${img}`;
      break;

      default:
        url += `/${tipo}/123456`;
    }

    return url;
  }

}
