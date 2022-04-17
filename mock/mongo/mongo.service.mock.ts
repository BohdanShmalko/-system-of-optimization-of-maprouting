import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';

type DbType =  { [key: string]: any[] };

@Injectable()
export class MongoService {
    mockDb: DbType = {
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
    
    startDb = JSON.parse(JSON.stringify(this.mockDb));

    private count = 0;
    
    public get clients() {
        return this.mockDb.clients;
    }
    public set clients(value) {
        this.mockDb.clients = value;
    }

    public get super_admins() {
        return this.mockDb.super_admins;
    }
    public set super_admins(value) {
        this.mockDb.super_admins = value;
    }

    public get errors() {
        return this.mockDb.errors;
    }
    public set errors(value) {
        this.mockDb.errors = value;
    }

    public get location_steps() {
        return this.mockDb.location_steps;
    }
    public set location_steps(value) {
        this.mockDb.location_steps = value;
    }

    public get locations() {
        return this.mockDb.locations;
    }
    public set locations(value) {
        this.mockDb.locations = value;
    }

    public get rooms() {
        return this.mockDb.rooms;
    }
    public set rooms(value) {
        this.mockDb.rooms = value;
    }

    public get user_history() {
        return this.mockDb.user_history;
    }
    public set user_history(value) {
        this.mockDb.user_history = value;
    }

    public get user_rooms() {
        return this.mockDb.user_rooms;
    }
    public set user_rooms(value) {
        this.mockDb.user_rooms = value;
    }

    public get webhooks() {
        return this.mockDb.webhooks;
    }
    public set webhooks(value) {
        this.mockDb.webhooks = value;
    }

    public get users() {
        return this.mockDb.users;
    }
    public set users(value) {
        this.mockDb.users = value;
    }

    public get webhooks_history() {
        return this.mockDb.webhooks_history;
    }
    public set webhooks_history(value) {
        this.mockDb.webhooks_history = value;
    }
    public clearDb() {
        this.mockDb = JSON.parse(JSON.stringify(this.startDb));
        this.count = 0;
    }
    public newId() {
        const start = '61ade95308cfdf9f43748fec';
        this.count++;
        return start.slice(0, start.length - this.count.toString().length) + this.count;
    }
}