import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';

type DbType =  { [key: string]: any[] };

let mockDb: DbType = {
    clients: [
        {
            _id: '625aff2b0eb8b15a9867eb5d',
            adminCreated: '625afebe1e6f8eee5bf3528b',
            adminUpdated: '625afebe1e6f8eee5bf3528b',
            name: 'testClient',
            apiKey: '93704f8b-d536-4737-86ec-73f06631140c',
        }
    ],
    errors: [],
    location_steps: [],
    locations: [],
    rooms: [],
    super_admins: [
        {
            _id: '625afebe1e6f8eee5bf3528b',
            name: 'testAdmin',
            apiKey: '3b9cbc9a-56e5-4100-a359-eed7742be21a',
        }
    ],
    user_history: [],
    user_rooms: [],
    users: [],
    webhooks: [],
    webhooks_history: [],
};

const startDb = JSON.parse(JSON.stringify(mockDb));

@Injectable()
export class MongoService {
    private count = 0;
    
    public get clients() {
        return mockDb.clients;
    }
    public set clients(value) {
        mockDb.clients = value;
    }

    public get super_admins() {
        return mockDb.super_admins;
    }
    public set super_admins(value) {
        mockDb.super_admins = value;
    }

    public get errors() {
        return mockDb.errors;
    }
    public set errors(value) {
        mockDb.errors = value;
    }

    public get location_steps() {
        return mockDb.location_steps;
    }
    public set location_steps(value) {
        mockDb.location_steps = value;
    }

    public get locations() {
        return mockDb.locations;
    }
    public set locations(value) {
        mockDb.locations = value;
    }

    public get rooms() {
        return mockDb.rooms;
    }
    public set rooms(value) {
        mockDb.rooms = value;
    }

    public get user_history() {
        return mockDb.user_history;
    }
    public set user_history(value) {
        mockDb.user_history = value;
    }

    public get user_rooms() {
        return mockDb.user_rooms;
    }
    public set user_rooms(value) {
        mockDb.user_rooms = value;
    }

    public get webhooks() {
        return mockDb.webhooks;
    }
    public set webhooks(value) {
        mockDb.webhooks = value;
    }

    public get users() {
        return mockDb.users;
    }
    public set users(value) {
        mockDb.users = value;
    }

    public get webhooks_history() {
        return mockDb.webhooks_history;
    }
    public set webhooks_history(value) {
        mockDb.webhooks_history = value;
    }
    public clearDb() {
        mockDb = JSON.parse(JSON.stringify(startDb));
        this.count = 0;
    }
    public newId() {
        const start = '61ade95308cfdf9f43748fec';
        this.count++;
        return start.slice(0, start.length - this.count.toString().length) + this.count;
    }
}