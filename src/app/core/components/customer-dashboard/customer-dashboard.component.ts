import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {FuelTokenService} from "../../services/fuel-token.service";

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements OnInit {
  imagePath: any;
  availableQuota: number = 0;
  fullQuota: number = 0;

  constructor(private _sanitizer: DomSanitizer,
              private fuelTokenService: FuelTokenService) {
  }

  ngOnInit(): void {

    this.fuelTokenService.getAllQRandDetails().subscribe((res: any) => {
      this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
        + res.data.qrString);
      console.log(res.data.qrString.encodeIntoCompressedBase64)
      this.fullQuota = res.data.fullQuota;
      this.availableQuota = res.data.fullQuota;
    })


  }

}
