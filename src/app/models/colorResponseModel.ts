import { Color } from "./color";
import { ResponesModel } from "./ResponseModel";

export interface ColorResponseModel extends ResponesModel {
    data:Color[]
}