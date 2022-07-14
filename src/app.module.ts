import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContinentSchema } from './continent.models';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Saint-Lieu:Nokia4849@cluster0.exzjzxx.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name: 'continent',schema:ContinentSchema}])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
