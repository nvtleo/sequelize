import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
const connect = initModels(sequelize);
const getUser = async (req, res) => {
    try {
        let data = await connect.user.findAll();
        res.send(data)
    } catch (error) {
        console.log(`lỗi ${error}`)
    }
}
export {
    getUser
}