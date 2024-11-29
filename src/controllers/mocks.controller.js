import MockingService from "../services/mocking.service.js";

const getUsers = async (req, res)=>{

    const users = await MockingService.generateUserMocking(50);
    res.send({status:'success',payload: users});

}


const getPets = async (req, res)=>{

   const pets = await MockingService.generatePetsMocking(50);
   res.send({status:'success',payload: pets});

}

const postUserAndPetsData = async (req, res) => {
    try {
        let { users_quantity, pets_quantity } = req.body;

      //  console.log(`${users_quantity} ${pets_quantity}`);

        // Generar ambos conjuntos de datos de forma concurrente para mejorar rendimiento
        const [usersData, petsData] = await Promise.all([
            MockingService.generateAndSaveUserData(users_quantity),
            MockingService.generateAndSavePetData(pets_quantity)
        ]);

        // Enviar una única respuesta con ambos datos
        res.send({
            status: 'success',
            payload: "Registros creados con exito"
        });
    } catch (error) {
        // Manejo de errores
        console.error(error);
        res.status(500).send({
            status: 'error',
            message: 'Ocurrió un error al procesar la solicitud.'
        });
    }
};



export default{

    getUsers,
    getPets,
    postUserAndPetsData

}