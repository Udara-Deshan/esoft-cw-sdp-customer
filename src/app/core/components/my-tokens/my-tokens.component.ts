import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../services/token.service";
import {MatDialog} from "@angular/material/dialog";
import {ApprovalDialogComponent} from "../../dialogs/approval-dialog/approval-dialog.component";
import {ApprovalDialogConfig} from "../../dialogs/approval-dialog/ApprovalDialogConfig";

@Component({
  selector: 'app-my-tokens',
  templateUrl: './my-tokens.component.html',
  styleUrls: ['./my-tokens.component.scss']
})
export class MyTokensComponent implements OnInit {
  // displayedColumns: string[] = ['action','categoryID', 'categoryName', 'categoryDesc'];
  displayedColumn: string[] = ['action','tid',  'filling_time_and_date',  'request_quota',  'status' ,   'token_exp_date',  'vehicle_reg_no',  'fuel_station_fk' , 'pid_fk' , 'username_fk'];
  dataSource = [];
  constructor(private tokenService:TokenService,
              private matDialog:MatDialog,

  ) { }

  ngOnInit(): void {
    // this.tokenService.
    // getAll().subscribe((res:any)=>{
    //   if (res.code=='00'){
    //     this.dataSource=res.content;
    //   }
    // });



  }


  onUpdate(element:any) {
  }

  onDelete(element:any) {
  }

}
