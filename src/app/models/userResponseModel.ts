import { ResponesModel } from "./ResponseModel";
import { User } from "./user";

export interface UserResponseModel extends ResponesModel{
    data:User[]
}