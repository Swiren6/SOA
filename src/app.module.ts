import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config'; // <-- ajouté
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FreelancerModule } from './freelancer/freelancer.module';
import { LienModule } from './lien/lien.module';
import { CompetenceModule } from './competence/competence.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // <-- charge automatiquement ton .env

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: parseInt(configService.get<string>('DB_PORT') ?? '3306', 10),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),

    FreelancerModule,
    LienModule,
    CompetenceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
