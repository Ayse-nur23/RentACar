import { Rental } from "./rental";
import { ResponesModel } from "./ResponseModel";

export interface RentalResponseModel extends ResponesModel{
    data:Rental[]
}