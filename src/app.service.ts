import { Injectable } from '@nestjs/common';
import { Continent, ContinentDocument, ContinentSchema } from './continent.models';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('continent') private readonly continentModel: Model<ContinentDocument>
  ){}

  //Créer un continent
  async createContinent(continent: Continent): Promise<Continent>{
    const newContinent = new this.continentModel(continent)
    return newContinent.save()
  }

  // Lecture de la collection continent
  async readContinent(){
    return this.continentModel.find({})
    .then((continent)=>{return continent})
    .catch((err)=>console.log(err))
  }

  //Mise à jour des données
  async updateContinent(id,data) :Promise<Continent>{
    return this.continentModel.findByIdAndUpdate(id, data,{new:true})
  }

  //Suppression des données
  async deleteContinent(id){
    return this.continentModel.findByIdAndDelete(id)
  }
}
