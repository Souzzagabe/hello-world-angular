import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-repo-list',
  imports: [],
  templateUrl: './repo-list.component.html',
  styleUrl: './repo-list.component.css',
})
export class RepoListComponent implements OnInit {
  @Input({ required: true }) repo: any[] = [];

  ngOnInit(): void {}

}
