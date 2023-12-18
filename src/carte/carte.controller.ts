import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import * as ecoregions from '../carte/ecoregions.json';
import * as carte from '../carte/ne_10m_land.json';
import * as pays from '../carte/ne_10m_admin_0_countries.json';

@Controller('/api/carte')
export class CarteController {
  @Get()
  getCarte(@Res() res: Response) {
    try {
      res.status(HttpStatus.OK).json(carte);
    } catch (error) {
      // Gérez les erreurs ici
      res
        .status(500)
        .send("Une erreur s'est produite lors de la récupération du GeoJSON.");
    }
  }

  @Get('climat')
  getClimatLayer(@Res() res: Response) {
    try {
      res.status(HttpStatus.OK).json(ecoregions);
    } catch (error) {
      // Gérez les erreurs ici
      res
        .status(500)
        .send("Une erreur s'est produite lors de la récupération du GeoJSON.");
    }
  }

  @Get('pays')
  getPaystLayer(@Res() res: Response) {
    try {
      res.status(HttpStatus.OK).json(pays);
    } catch (error) {
      // Gérez les erreurs ici
      res
        .status(500)
        .send("Une erreur s'est produite lors de la récupération du GeoJSON.");
    }
  }
}
