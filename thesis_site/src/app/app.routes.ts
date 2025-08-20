import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EdaComponent } from './pages/eda/eda.component';
import { ResearchComponent } from './pages/research/research.component';
import { FindingsComponent } from './pages/findings/findings.component';
import { DiscussionComponent } from './pages/discussion/discussion.component';
import { ReferencesComponent } from './pages/references/references.component';
import { DatasetsComponent } from './pages/data/data.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'eda', component: EdaComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'findings', component: FindingsComponent },
  { path: 'discussion', component: DiscussionComponent },
  { path: 'references', component: ReferencesComponent },
  { path: 'data', component: DatasetsComponent },
  { path: '**', redirectTo: '' } 
];
