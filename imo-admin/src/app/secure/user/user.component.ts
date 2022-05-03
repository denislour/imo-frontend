import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  columns = ['ID', 'name', 'email', 'actions'];
  dataSource = new MatTableDataSource();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.all().subscribe((users) => (this.dataSource.data = users));
  }
}
