import { ISearch } from '@common';
import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';

/**
* CommonDb service
* @name CommonDbService
* @kind class
*/
export class CommonDbService {
    constructor(
        protected model: any,
    ) {}
    public search({pipeline, sort, limit, skip, select}: ISearch) {
        const findPromise = this.model.find(pipeline);
        if(sort) findPromise.sort(sort);
        if(limit) findPromise.limit(limit);
        if(skip) findPromise.skip(skip);
        if(select) findPromise.select(select);
        return findPromise;
    }

    public deleteByUserId(userId: string | ObjectId) {
        return this.model.deleteMany({ userId });
    }

    public deleteByClientId(clientId: string | ObjectId) {
        return this.model.deleteMany({ clientId });
    }

    public findById(_id: string | ObjectId) {
        return this.model.deleteMany({ _id });
    }

    async findByIdAndClient(_id: string | ObjectId, clientId: string | ObjectId): Promise<any | null> {
        return this.model.findOne({ _id, clientId });
    }

    async deleteById(_id: string | ObjectId) {
        return this.model.deleteOne({ _id });
    }

    createWatcher() {
        return this.model.watch();
    }
}
