export interface IFormFields {
    id?: string;
    name: IOptions;
    document: string;
    count?: number;
}

export interface IFindElement {
    id?: string;
    name: IOptions;
    document: string;
    count: number;
}

export interface IOptions {
    value: string; 
    label: string;
}

export interface IUser {
    name: string; 
    password: string;
}

export interface INotificationState {
    notification: boolean; 
    messageNotification: string;
}
