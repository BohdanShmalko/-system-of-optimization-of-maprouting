import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';

type DbType =  { [key: string]: any[] };

let mockDb: DbType = {
    active_phones: [],
    devices: [],
    errors: [],
    location_steps: [],
    locations: [],
    rooms: [],
    user_locations: [],
    user_rooms: [],
    users: [],
};

const startDb = JSON.parse(JSON.stringify(mockDb));

@Injectable()
export class MongoService {
    private count = 0;
    
    public get active_phones() {
        return mockDb.active_phones;
    }
    public set active_phones(value) {
        mockDb.active_phones = value;
    }

    public get devices() {
        return mockDb.active_phones;
    }
    public set devices(value) {
        mockDb.active_phones = value;
    }

    public get errors() {
        return mockDb.active_phones;
    }
    public set errors(value) {
        mockDb.active_phones = value;
    }

    public get location_steps() {
        return mockDb.active_phones;
    }
    public set location_steps(value) {
        mockDb.active_phones = value;
    }

    public get locations() {
        return mockDb.active_phones;
    }
    public set locations(value) {
        mockDb.active_phones = value;
    }

    public get rooms() {
        return mockDb.active_phones;
    }
    public set rooms(value) {
        mockDb.active_phones = value;
    }

    public get user_locations() {
        return mockDb.active_phones;
    }
    public set user_locations(value) {
        mockDb.active_phones = value;
    }

    public get user_rooms() {
        return mockDb.active_phones;
    }
    public set user_rooms(value) {
        mockDb.active_phones = value;
    }

    public get users() {
        return mockDb.active_phones;
    }
    public set users(value) {
        mockDb.active_phones = value;
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