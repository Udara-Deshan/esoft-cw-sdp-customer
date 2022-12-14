import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ApprovalDialogComponent} from "../../dialogs/approval-dialog/approval-dialog.component";
import {ApprovalDialogConfig} from "../../dialogs/approval-dialog/ApprovalDialogConfig";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-get-token',
  templateUrl: './get-token.component.html',
  styleUrls: ['./get-token.component.scss']
})
export class GetTokenComponent implements OnInit {
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
      vehicleRegNo: new FormControl('', Validators.required),
      tokenExpDate: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      requestQuota: new FormControl('', Validators.required),
      fillingTimeAndDate: new FormControl('', Validators.required),

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
