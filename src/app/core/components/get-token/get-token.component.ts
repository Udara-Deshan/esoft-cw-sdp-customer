import { Component, OnInit } from '@angular/core';
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

  constructor(private fb:FormBuilder,
              private matDialog:MatDialog,) { }
  ngOnInit(): void {
    this.auditForm=this.fb.group({
      filling_time_and_date:new FormControl('',Validators.required),
      request_quota:new FormControl('',Validators.required),
      status:new FormControl('',Validators.required),
      token_exp_date:new FormControl('',Validators.required),
      vehicle_reg_no:new FormControl('',Validators.required),
      fuel_station_fk:new FormControl('',Validators.required),
      pid_fk:new FormControl('',Validators.required),
      username_fk:new FormControl('',Validators.required)
    });
    this.matDialog.open(ApprovalDialogComponent, {
        width: '350px',
        // height: '200px',
        data: new ApprovalDialogConfig('Error', 'Fill All Required Field', '')
      }
    );
  }

  onSave() {
    this.matDialog.open(ApprovalDialogComponent, {
        width: '350px',
        // height: '200px',
        data: new ApprovalDialogConfig('Alert', 'Update Successfully', '')
      }
    );
  }

  onUpdate() {

  }

  onBack() {

  }

  resetForm() {

  }

}
