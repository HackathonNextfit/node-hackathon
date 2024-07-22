import { Controller, Get, Query } from "@nestjs/common";
import { ExemploService } from "./exemplo.service";

@Controller("exemplo")
export class ExemploController {
  constructor(private readonly exemploService: ExemploService) {}

  @Get("GetAmbienteUsuario")
  getAmbienteUsuario(
    @Query("authorization") authorization: string,
    @Query("codigoUsuario") codigoUsuario: string,
    @Query("codigoUnidade") codigoUnidade: string,
  ) {
    return this.exemploService.getAmbienteUsuario(
      authorization,
      codigoUsuario,
      codigoUnidade,
    );
  }

  @Get("GetEnums")
  getEnums(@Query("authorization") authorization: string) {
    return this.exemploService.getEnums(authorization);
  }
}
