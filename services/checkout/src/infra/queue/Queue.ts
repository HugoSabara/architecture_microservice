export default interface Queue {
    connect (): Promise<void>;
    consume (event: string, callback: Function): Promise<void>;
    publish (event: string, data: any): Promise<void>;    
}

