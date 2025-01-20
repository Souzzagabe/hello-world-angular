import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RepoListComponent } from './repo-list/repo-list.component';

@Component({
  selector: 'app-contact',
  imports: [RepoListComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private userService: UserService) {}
 gitUser: any;
  async ngOnInit() {
   this.gitUser = await this.getGitUser()
  }

   async getGitUser() {
    return this.userService.getGitUser('souzzagabe')

  }
}
