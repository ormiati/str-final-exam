import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Column, User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getAll();

  columns: Column[] = this.userService.columns;
  lastSelectedColumn: string = "";
  sortDir: string = "";
  displayedColumns: Column[] = [];


  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

   onDelete(item: User) {
    this.userService.delete(item).subscribe(i => {});   
    this.update();
  } 

  update(): void {
    this.userService.getAll().pipe(
      finalize(() => { })
    ).subscribe(() => { });
  }

  onColumnSelect(colName: string): void {
    if (this.lastSelectedColumn != colName)
      this.columns.forEach((i) => (i.sortDir = ""));
    this.lastSelectedColumn = colName;

 const state = this.userService.columns.find(i => i.name == colName);
  if (state.sortDir == '') state.sortDir = 'up';
  if (state.sortDir == 'none') state.sortDir = 'up';
    this.sortDir = state.sortDir;
}
}
