import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.sass']
})
export class ConnectionComponent implements OnInit {

  username: string
  password: string

  constructor(private srv: UserService) { }

  ngOnInit(): void {
  }

  connect() {
    document.getElementById('banAlert').hidden = true
    document.getElementById('unknownUser').hidden = true
    this.srv.find(this.username, this.password, () => {
      document.getElementById('banAlert').hidden = false
    }, () => {
      document.getElementById('unknownUser').hidden = false
    })
  }
}
