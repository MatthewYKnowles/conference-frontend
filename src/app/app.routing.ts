import {RouterModule} from '@angular/router';
import {StandardComponent} from './standard/standard.component';
import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './home/home.component';
import {SubmissionComponent} from './submission/submission.component';
import {SubmissionsComponent} from './submissions/submissions.component';

export const routing = RouterModule.forRoot([
  { path: '',
    component: StandardComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'submission',
        component: SubmissionComponent
      },
      {
        path: 'submissions',
        component: SubmissionsComponent
      }
    ] },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'submission',
        component: SubmissionComponent
      },
      {
        path: 'submissions',
        component: SubmissionsComponent
      }
    ]
  }
]);