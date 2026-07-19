type statusValue = "online" | "offline"

export interface UserData {
    id: number;
    name: string;
    age: number;
    profession: string;
    status: statusValue
    email?: string;
}