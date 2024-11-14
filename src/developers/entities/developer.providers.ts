import { DataSource } from 'typeorm';
import { Developer } from './developer.entity';

export const developerProviders = [
    {
        provide: 'DEVELOPER_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Developer),
        inject: ['DATA_SOURCE'],
    },
];
