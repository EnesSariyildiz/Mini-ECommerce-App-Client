import { Component, OnInit } from '@angular/core';
import {
  AlertifyOptions,
  AlertifyService,
  MessageType,
  Position,
} from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  d() {
    throw new Error('Method not implemented.');
  }

  constructor(private alertify: AlertifyService) {}

  ngOnInit(): void {}

  m() {
    this.alertify.message('merhaba', {
      messageType: MessageType.Succes,
      delay: 5,
      position: Position.TopRight,
    });
  }
  a() {
    this.alertify.dismiss();
  }
}
