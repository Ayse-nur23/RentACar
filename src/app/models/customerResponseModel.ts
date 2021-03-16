import { Customer } from "./customer";
import { ResponesModel } from "./ResponseModel";

export interface CustomeResponseModel extends ResponesModel{
    data:Customer[]
}