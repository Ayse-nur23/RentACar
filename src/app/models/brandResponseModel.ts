import { Brand } from "./brand";
import { ResponesModel } from "./ResponseModel";

export interface BrandResponseModel extends ResponesModel{
    data:Brand[]
}