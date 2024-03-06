import { Body, Controller, Post } from '@nestjs/common';
import { CreateSignupDto, SignupResDto } from '../dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService : AuthService
    ) {}

    @Post('/signup')
    async signup(@Body() createSignupDto : CreateSignupDto) : Promise<SignupResDto> {
        const authSignup = await this.authService.createSignupDto(createSignupDto);
        return {
            id: authSignup.id,
            name: authSignup.name,
            email: authSignup.email,
            phon: authSignup.phon
        }
    }
}
``