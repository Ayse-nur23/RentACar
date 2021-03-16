import { Car } from "./car";
import { ResponesModel } from "./ResponseModel";

export interface CarResponseModel extends ResponesModel {
    data:Car[]
}