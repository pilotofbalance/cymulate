import { insertUsers } from '../services/user.service';

const seedDb = async () => {
    const authorizedUsers = [
        {email: 'user1@mail.com', password: '1111', role: 'admin'},
        {email: 'user2@mail.com', password: '2222', role: 'admin'},
        {email: 'user3@mail.com', password: '2222', role: 'admin'}
    ];
    // TODO check if already exists before insert
    await insertUsers(authorizedUsers);
}

export { seedDb }