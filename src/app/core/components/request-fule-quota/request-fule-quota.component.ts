import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ApprovalDialogComponent} from "../../dialogs/approval-dialog/approval-dialog.component";
import {ApprovalDialogConfig} from "../../dialogs/approval-dialog/ApprovalDialogConfig";
import {PaymentService} from "../../services/payment.service";
import {FuelStationService} from "../../services/fuel-station.service";
import {FuelTokenService} from "../../services/fuel-token.service";
import {FuelTokenDTO} from "../../dtos/FuelTokenDTO";
import {AuthService} from "../../auth/auth.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-request-fule-quota',
  templateUrl: './request-fule-quota.component.html',
  styleUrls: ['./request-fule-quota.component.scss'],
  providers: [DatePipe]

})
export class RequestFuleQuotaComponent implements OnInit {
  formMode: 'SAVE' | 'UPDATE' = 'SAVE';
  auditForm!: FormGroup;
  filteredFuleStations: any[] = [];
  fuelStation = new FormControl();


  constructor(private fb: FormBuilder,
              private matDialog: MatDialog,
              private paymentService: PaymentService,
              private fuelStationService: FuelStationService,
              private fuelTokenService: FuelTokenService,
              private authService: AuthService,
              private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.auditForm = this.fb.group({
      vehicleRegNo: new FormControl('', Validators.required),
      tokenExpDate: new FormControl('', Validators.required),
      requestQuota: new FormControl('', Validators.required),
      payment: new FormControl('', Validators.required),
    });
    this.fromSetup();
  }

  fromSetup() {
    this.fuelStationService.getAllFuelStationDetails().subscribe((res: any) => {
      this.filteredFuleStations = res.data;
    })

  }

  onSave() {

    this.fuelTokenService.requestToken(new FuelTokenDTO(
      0,
      // <number>this.auditForm.get('vehicleRegNo')?.value as unknown as number,
      5,
      'Requested',
      this.datePipe.transform(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),"yyyy-MM-dd") as string,
      this.auditForm.get('requestQuota')?.value as number,
      this.datePipe.transform(new Date(),"yyyy-MM-dd") as string,
      {
        username: this.authService.getCurrentUser?.username
      },
      {
        pid: 0,
        paymentStatus: 'Pending',
        paymentDate: this.datePipe.transform(new Date(),"yyyy-MM-dd") as string,
        price: this.auditForm.get('requestQuota')?.value,
      }, {
        fid: this.fuelStation.value?.fid
      }
    )).subscribe(re => {
      console.log(re)
    })
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
    this.auditForm.reset();
    this.fuelStation.reset();
  }


}
