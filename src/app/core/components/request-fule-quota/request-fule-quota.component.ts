import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ApprovalDialogComponent} from "../../dialogs/approval-dialog/approval-dialog.component";
import {ApprovalDialogConfig} from "../../dialogs/approval-dialog/ApprovalDialogConfig";

@Component({
  selector: 'app-request-fule-quota',
  templateUrl: './request-fule-quota.component.html',
  styleUrls: ['./request-fule-quota.component.scss']
})
export class RequestFuleQuotaComponent implements OnInit {
  formMode: 'SAVE' | 'UPDATE' = 'SAVE';
  auditForm!: FormGroup;
  filteredFuleStations: string[] = ['Delkanda'];
  user = new FormControl();
  payment = new FormControl();
  fuelStation = new FormControl();
  filteredUsers: any[] = [];
  filteredPayments: any[] = [];
  filteredFuelStations: any[] = [];


  constructor(private fb: FormBuilder,
              private matDialog: MatDialog,) {
  }

  ngOnInit(): void {
    this.auditForm = this.fb.group({
      // vehicleRegNo: new FormControl('', Validators.required),
      // tokenExpDate: new FormControl('', Validators.required),
      // status: new FormControl('', Validators.required),
      requestQuota: new FormControl('', Validators.required),
      //fillingTimeAndDate: new FormControl('', Validators.required),

    });

  }

  onSave() {



    this.matDialog.open(ApprovalDialogComponent, {
        width: '350px',
        // height: '200px',
        data: new ApprovalDialogConfig('Alert', 'Request Successfully', '')
      }
    );
  }

  onUpdate() {

  }

  onBack() {
    this.matDialog.open(ApprovalDialogComponent, {
        width: '350px',
        // height: '200px',
        data: new ApprovalDialogConfig('Error', 'Fill All The Required Field', '')
      }
    );
  }

  resetForm() {

  }


}
