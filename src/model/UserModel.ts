export interface IUserModel {
    name: string
    job: string
    id: number
}
export interface IUserList {
    data?: IUserDetail[]
    singleUser?: IUserDetail
    userModel:IUserModel
}
export interface IUserDetail {
    first_name: string
    email: string
    id: string
    avatar:string
}