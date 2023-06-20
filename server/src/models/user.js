import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const User = 

    sequelize.define(
        "user", 
        {
            id:{
                type:DataTypes.UUID,
                defaultValue:DataTypes.UUIDV4,
                primaryKey:true,
            },
            username: {
                type: DataTypes.STRING,
                allowNull:false,
                unique:true,
            },
            email:{
                type:DataTypes.STRING,
                allowNull:false,
            },
            hashedPassword: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            first_name: {
                type: DataTypes.STRING,
            },
            last_name: {
                type: DataTypes.STRING
            },
            address: {
                type: DataTypes.STRING
            },
            city: {
                type: DataTypes.STRING,
            },
            state: {
                type: DataTypes.STRING,
            },
            anull: {
                type: DataTypes.INTEGER,
                defaultValue:0,
            },
            
            date: {
                type: DataTypes.DATEONLY,
             
            }

        }
    )