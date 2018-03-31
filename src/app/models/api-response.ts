export class ApiResponseMessage {
    constructor() {
        this.data = new Array<any>();
        this.status = new ApiResponseStatus();
    }
    public data: Array<any>;
    public status: ApiResponseStatus;
}

export class ApiResponseStatus {
    constructor() {
        this.success = false;
    }
    public message: string;
    public success: boolean;
}