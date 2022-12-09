export class TokenDTO {
  tid:number;
  filling_time_and_date:string;
  request_quota:string;
  status:string;
  token_exp_date:string;
  vehicle_reg_no:string;
  fuel_station_fk:string;
  pid_fk:string;
  username_fk:string;


  constructor(tid: number, filling_time_and_date: string, request_quota: string, status: string, token_exp_date: string,
              vehicle_reg_no: string, fuel_station_fk: string, pid_fk: string, username_fk: string) {
    this.tid = tid;
    this.filling_time_and_date = filling_time_and_date;
    this.request_quota = request_quota;
    this.status = status;
    this.token_exp_date = token_exp_date;
    this.vehicle_reg_no = vehicle_reg_no;
    this.fuel_station_fk = fuel_station_fk;
    this.pid_fk = pid_fk;
    this.username_fk = username_fk;
  }
}
