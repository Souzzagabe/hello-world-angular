import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush, // Otimização de desempenho
})
export class RepoListComponent implements OnInit {
  @Input({ required: true }) repo: any[] = [];
  isLoading = true; // Estado de carregamento

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.simularCarregamento();
  }

  simularCarregamento(): void {
    setTimeout(() => {
      this.isLoading = false;
      this.cdr.markForCheck(); // Atualiza a view manualmente
    }, 2000); // Simula um carregamento de 2 segundos
  }
}
