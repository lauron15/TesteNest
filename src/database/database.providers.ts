import { DataSource } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mysql',            // Alterado para MySQL
                host: 'localhost',        // Host do seu MySQL
                port: 3306,               // Porta do MySQL
                username: 'root',         // Usuário do MySQL
                password: 'Mavis',        // Senha do MySQL
                database: 'developers',   // Nome do seu banco de dados
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',  // Localização das suas entidades
                ],
                synchronize: true,        // Lembre-se de que isso deve ser 'false' em produção
            });

            return dataSource.initialize();  // Inicializando a conexão com o banco
        },
    },
];
