import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ExemploService {
  constructor(private readonly httpService: HttpService) {}

  async getAmbienteUsuario(
    authorization: string,
    codigoUsuario: string,
    codigoUnidade: string,
  ) {
    const apiURL = 'https://api-sandbox.appnext.fit/api/';

    const headers = {
      Authorization: `${authorization}`,
    };

    const params = {
      CodigoUsuario: codigoUsuario,
      CodigoUnidade: 7
    };

    const response = await firstValueFrom(
      this.httpService.get(`${apiURL}Usuario/RecuperarAmbienteUsuario`, { headers, params }),
    );

    return response.data;
  }

  async getEnums(authorization: string) {
    const apiURL = 'https://api-sandbox.appnext.fit/api/';

    const headers = {
      Authorization: `${authorization}`,
    };

    const response = await firstValueFrom(
      this.httpService.get(`${apiURL}Enum/RecuperarTodos`, { headers }),
    );

    return response.data;
  }
}
