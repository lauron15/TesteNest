import { Module } from '@nestjs/common';
import { DevelopersService } from './developers.service';
import { developerProviders } from './entities/developer.providers'; // Certifique-se de importar os provedores corretamente
import { DatabaseModule } from '../database.module'; // Importando o DatabaseModule, que tem a configuração do banco de dados

@Module({
  imports: [DatabaseModule], // Importando o módulo que fornece a conexão com o banco
  providers: [
    ...developerProviders, // Certifique-se de incluir os provedores que você criou
    DevelopersService, // O serviço que utiliza o repositório
  ],
  exports: [DevelopersService], // Exporte o DevelopersService, caso necessário
})
export class DevelopersModule { }

