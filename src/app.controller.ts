import {Controller, Get, Post, Req, Res} from '@nestjs/common'
import { AppService } from './app.service'
import { Request, Response } from 'express'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(
    @Req() req: Request,
    @Res() res: Response
  ) {
    //return this.appService.getHello()
    console.log(req.query)
    return res.status(201).send()
  }

  @Post('/')
  setHello(
    @Req() req: Request,
    @Res() res: Response
  ) {
    //return this.appService.getHello()
    console.log(req.query)
    return res.status(201).send()
  }
}
