import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  Put,
  Delete,
  Param,
  ParseIntPipe,
  Body,
  HttpCode,
  HttpStatus
} from '@nestjs/common'
import { Response, Request } from 'express'

import { UserService } from './user.service'
import { UpdateUserDto } from './dto/updateUser.dto'

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getAllUsers() {
    const users = await this.userService.getAllUsers()
    return users
  }

  @Get('/:id')
  async getUser(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    const userData = await this.userService.getUserData(id)

    return res.send(userData)
  }

  @Post('/')
  async createUser(
    @Req() req: Request,
    @Res() res: Response,
  ) {
    await this.userService.createUser(req.body)
    return res.sendStatus(HttpStatus.CREATED)
  }

  @Put('/:id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUserDto,
    @Res() res: Response,
  ) {
    this.userService.updateUserData(id, body)
    return res.sendStatus(HttpStatus.NO_CONTENT)
  }

  @Delete('/:id')
  async deleteUser(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    this.userService.deleteUser(id)
    return res.sendStatus(HttpStatus.NO_CONTENT)
  }
}
