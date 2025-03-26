import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarStoreComponent } from './car-store.component';
import { TermsAndConditionsModule } from './pages/terms-and-conditions/terms-and-conditions.module';
import { DragRacingModule } from './pages/drag-racing/drag-racing.module';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CarStoreComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'carInfo',
        loadChildren: () =>
          import('./pages/car-info/car-info.module').then(
            (m) => m.CarInfoModule
          ),
      },
      {
        path: 'tuningCars',
        loadChildren: () =>
          import('./pages/tuning-cars/tuning-cars.module').then(
            (m) => m.TuningCarsModule
          ),
      },
      {
        path: 'bodyKits',
        loadChildren: () =>
          import('./pages/body-kits/body-kits.module').then(
            (m) => m.BodyKitsModule
          ),
      },
      {
        path: 'parts',
        loadChildren: () =>
          import('./pages/parts/parts.module').then((m) => m.PartsModule),
      },
      {
        path: 'bodyKitsInfo',
        loadChildren: () =>
          import('./pages/body-kits-info/body-kits-info.module').then(
            (m) => m.BodyKitsInfoModule
          ),
      },
      {
        path: 'partsInfo',
        loadChildren: () =>
          import('./pages/parts-info/parts-info.module').then(
            (m) => m.PartsInfoModule
          ),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('./pages/cart/cart.module').then((m) => m.CartModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./pages/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'createAccount',
        loadChildren: () =>
          import('./pages/create-account/create-account.module').then(
            (m) => m.CreateAccountModule
          ),
      },
      {
        path: 'termsAndConditions',
        loadChildren: () =>
          import(
            './pages/terms-and-conditions/terms-and-conditions.module'
          ).then((m) => m.TermsAndConditionsModule),
      },
      {
        path: 'we',
        loadChildren: () =>
          import('./pages/we/we.module').then((m) => m.WeModule),
      },
      {
        path: 'pay',
        loadChildren: () =>
          import('./pages/pay/pay.module').then((m) => m.PayModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'dragRacing',
        loadChildren: () =>
          import('./pages/drag-racing/drag-racing.module').then(
            (m) => m.DragRacingModule
          ),
      },
      {
        path: 'dragRacingInfo',
        loadChildren: () =>
          import('./pages/drag-racing-info/drag-racing-info.module').then(
            (m) => m.DragRacingInfoModule
          ),
      },
      {
        path: 'prePurchaseInspection',
        loadChildren: () =>
          import(
            './pages/pre-purchase-inspection/pre-purchase-inspection.module'
          ).then((m) => m.PrePurchaseInspectionModule),
      },
      {
        path: 'contactUs',
        loadChildren: () =>
          import('./pages/contact-us/contact-us.module').then(
            (m) => m.ContactUsModule
          ),
      },
      {
        path: 'privacyPolicy',
        loadChildren: () =>
          import('./pages/privacy-policy/privacy-policy.module').then(
            (m) => m.PrivacyPolicyModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./pages/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
      {
        path: 'projectInformation',
        loadChildren: () =>
          import('./pages/project-information/project-information.module').then(
            (m) => m.ProjectInformationModule
          ),
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarStoreRoutingModule {}
