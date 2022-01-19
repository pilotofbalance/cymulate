import { Victum } from "../dal/schemas/victum.schema";

const createVictum = async (victum: any) => {
    try {
        console.log('create victum');
        return await Victum.create(victum);
    } catch (error: any) {
        throw new Error(error);
    }
}

const findVictums = async () => {
    try {
        return await Victum.find();
    } catch (error: any) {
        throw new Error(error);
    }
}

const updateVictumStatus = async (id: string) => {
    try {
        // TODO define enum for statuses
        await Victum.findByIdAndUpdate(id, {status: 'opened'});
    } catch (error: any) {
        throw new Error(error);
    }
}

export { createVictum, findVictums, updateVictumStatus };