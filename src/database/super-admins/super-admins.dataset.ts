import { SuperAdmins } from "@db";

/**
* dataset with default admins
* @name defaultAdmins
* @kind constant
*/
export const defaultAdmins: Array<SuperAdmins & { _id: string }> = [
    {
        _id: '624dc1951f63449085ddf1f0',
        name: 'admin',
        apiKey: 'fd9cb975-a09f-436f-8c00-3811b8f4197e',
    }
]