import * as express from "express";
import { DefaultController } from "./";


interface IHealthCheckResponseData {
  message: string;
}

interface IHealthCheckResponseMeta {
  date: string;
  uptime: string;
  version?: string;
}

interface IHealthCheckResponse {
  data: IHealthCheckResponseData;
  meta: IHealthCheckResponseMeta;
}

function getHealthCheck(): IHealthCheckResponse {
  const time = process.uptime();
  const uptime = toDDHHMMSS(time);
  return {
    data: {
      message: "ok",
    },
    meta: {
      date: `${new Date().toISOString()}`,
      uptime: `${uptime}`,
    },
  };
}

/**
 * toDDHHMMSS
 * turns an amount of seconds into days, hours, minutes seconds
 * @param {number} inctime - an amount of seconds to be formatted
 * @return {string} 'dd:hh:mm:ss' days, hours, minutes seconds returned as a string
 */
 function toDDHHMMSS(inctime: number): string {
  let time = inctime;
  const days = Math.floor(time / 86400);
  time -= days * 86400;
  const hours = Math.floor(time / 3600);
  time -= hours * 3600;
  const minutes = Math.floor(time / 60);
  time -= minutes * 60;
  const seconds = Math.floor(time % 60);
  return `${days.toString().padStart(2, "0")}:${hours
    .toString()
    .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

export { IHealthCheckResponseData, IHealthCheckResponseMeta, IHealthCheckResponse, getHealthCheck, toDDHHMMSS};

class HealthCheckController extends DefaultController {
  constructor() {
    super("/health");
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getHealthCheck);
  }

  private getHealthCheck = (
    request: express.Request,
    response: express.Response
  ) => {
    response.status(200).send(getHealthCheck());
  };
}

export default HealthCheckController;
