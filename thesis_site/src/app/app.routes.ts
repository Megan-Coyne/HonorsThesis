import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EdaComponent } from './eda/eda.component';
import { ResearchComponent } from './research/research.component';
import { FindingsComponent } from './findings/findings.component';
import { GraphsComponent } from './graphs/graphs.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { ReferencesComponent } from './references/references.component';
import { DataComponent } from './data/data.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'eda', component: EdaComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'findings', component: FindingsComponent },
  { path: 'graphs', component: GraphsComponent },
  { path: 'discussion', component: DiscussionComponent },
  { path: 'references', component: ReferencesComponent },
  { path: 'data', component: DataComponent },
  { path: '**', redirectTo: '' } 
];
