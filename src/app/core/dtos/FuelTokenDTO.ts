export class FuelTokenDTO {
    tid:number;
    vehicleRegNo:number;
    status:string;
    tokenExpDate:string;
    requestQuota:number;
    fillingTimeAndDate:string;
    usernameFk:any;
    pidFk:any;
    fuelStationFk:any;


    constructor(tid: number, vehicleRegNo: number, status: string, tokenExpDate: string, requestQuota: number, fillingTimeAndDate: string, usernameFk: any, pidFk: any, fuelStationFk: any) {
        this.tid = tid;
        this.vehicleRegNo = vehicleRegNo;
        this.status = status;
        this.tokenExpDate = tokenExpDate;
        this.requestQuota = requestQuota;
        this.fillingTimeAndDate = fillingTimeAndDate;
        this.usernameFk = usernameFk;
        this.pidFk = pidFk;
        this.fuelStationFk = fuelStationFk;
    }
}
