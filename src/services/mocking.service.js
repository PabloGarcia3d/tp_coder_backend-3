import {faker} from '@faker-js/faker';
import { createHash } from '../utils/index.js';
import userModel from '../dao/models/User.js';
import petModel from '../dao/models/Pet.js';

class MockingService{


    static async generateUserMocking(num){

        const users=[];

        for (let i = 0; i < num; i++){

            users.push ({

                first_name: faker.person.firstName(),
                last_name: faker.person.lastName(),
                email: faker.internet.email(),
                password: await createHash("coder123"),
                role: faker.helpers.arrayElement(["user", "admin"]),
                pets: []

            })
        }
        return users;

    }


    static async generateAndSaveUserData(num){


        for (let i = 0; i < num; i++){

            try {
            
        
                    // Sino existe creo uno nuevo
                    const newUser = new userModel({
                        first_name: faker.person.firstName(),
                        last_name: faker.person.lastName(),
                        email: faker.internet.email(),
                        password: await createHash("coder123"),
                        role: faker.helpers.arrayElement(["user", "admin"]),
                        pets: []
                    });
                    await newUser.save();
               
            
            
            
                } catch (error) {
                    res.status(500).send("Error al intentar crear registro"); 
                }

         }
    }


    static async generatePetsMocking(num){

        const pets=[];

        for (let i = 0; i < num; i++){

            pets.push ({

                name: faker.animal.dog(),
                specie: faker.animal.type(),
                adopted: false,
                birthDate: faker.date.past(),
                image: "https://via.placeholder.com/150"              

            })
        }
        return pets;

    }

    static async generateAndSavePetData(num){


        for (let i = 0; i < num; i++){

            try {
            
        
                    // Sino existe creo uno nuevo
                    const newPet = new petModel({
                        name: faker.animal.dog(),
                        specie: faker.animal.type(),
                        adopted: false,
                        birthDate: faker.date.past(),
                        image: "https://via.placeholder.com/150"  
                    });
                    await newPet.save();
                
            
            
            
                } catch (error) {
                    res.status(500).send("Error al intentar crear mascota"); 
                }

         }
    }






}

export default MockingService;