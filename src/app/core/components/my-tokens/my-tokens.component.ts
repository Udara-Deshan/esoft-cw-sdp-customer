import { Component, OnInit } from '@angular/core';
import {FuelTokenService} from "../../services/fuel-token.service";
import {MatDialog} from "@angular/material/dialog";
import {ApprovalDialogComponent} from "../../dialogs/approval-dialog/approval-dialog.component";
import {ApprovalDialogConfig} from "../../dialogs/approval-dialog/ApprovalDialogConfig";
import {QRDialogComponent} from "../qrdialog/qrdialog.component";
import {PaymentService} from "../../services/payment.service";

@Component({
  selector: 'app-my-tokens',
  templateUrl: './my-tokens.component.html',
  styleUrls: ['./my-tokens.component.scss']
})
export class MyTokensComponent implements OnInit {
  displayedColumn: string[] = ['action','tid',  'fillingTimeAnd',  'requestQuota',  'status' ,
    'tokenExp',  'vehicleRegNo',  'fuelStationFk' , 'pidFk' ];
  dataSource:any[] = [];
  constructor(private tokenService:FuelTokenService,
              private paymentService:PaymentService,
              private matDialog:MatDialog,

  ) { }

  ngOnInit(): void {
    this.tokenService.getAllTokenByUsername().subscribe((res:any)=>{
      console.log(res)
      if (res.code==201){
        this.dataSource=res.data;
      }
    })
  }

  onUpdate(element:any) {
  }

  onDelete(element:any) {
    this.matDialog.open(ApprovalDialogComponent, {
        width: '450px',
        // height: '200px',
        data: new ApprovalDialogConfig('Error', 'Token Deleted', '')
      }
    );
  }

  onAction(el: any) {
    this.matDialog.open(QRDialogComponent, {
        width: '450px',
        // height: '200px',
        data: null
      }
    );
  }

  onPay(element:any) {
    console.log(element)

  }
}
