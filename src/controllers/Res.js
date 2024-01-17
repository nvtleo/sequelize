import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const connect = initModels(sequelize);
const Like_res = connect.like_res;
const User = connect.user;

export const getLike = async (req, res) => {
    try {
        const likedUsers = await User.findAll({
            include: [{
                model: Like_res,
                as: 'like_res',
                attributes: [],
                required: true
            }],
            attributes: ['user_id', 'full_name', 'email']
        });

        res.send(likedUsers);
    } catch (error) {
        console.error(`Lỗi: ${error}`);
        res.status(500).json({ error: 'Lỗi Server Nội Bộ' });
    }
}
export const getUnLike = async (req, res) => {
    try {
        const unlikedUsers = await User.findAll({
            include: [{
                model: Like_res,
                as: 'like_res',
                attributes: [],
                required: false
            }],
            where: {
                '$like_res.user_id$': null
            },
            attributes: ['user_id', 'full_name', 'email']
        });

        res.send(unlikedUsers);
    } catch (error) {
        console.error(`Lỗi: ${error}`);
        res.status(500).json({ error: 'Lỗi Server Nội Bộ' });
    }
}
