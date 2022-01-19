import { User } from "../dal/schemas/user.schema";

const insertUsers = async (users: any) => {
    try {
        // TODO encript passwords before insert
        console.log('seed users');
        await User.insertMany(users);
    } catch (error: any) {
        throw new Error(error);
    }
}

const findUser = async (user: any) => {
    try {
        return await User.findOne(user);
    } catch (error: any) {
        throw new Error(error);
    }
}

export { insertUsers, findUser };