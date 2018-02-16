import { Component, Injectable, ChangeDetectorRef, Input, ViewEncapsulation, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MediaMatcher } from '@angular/cdk/layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatListModule, MatSidenavModule } from '@angular/material';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AppComponent {
    constructor() {
        this.TITLE = 'Hazdev Angular Template';
        this.NAVIGATION = [];
        this.SITE_SITENAV = [
            { href: '/earthquakes/', display: 'Earthquakes' },
            { href: '/hazards/', display: 'Hazards' },
            { href: '/data/', display: 'Data & Products' },
            { href: '/learn/', display: 'Learn' },
            { href: '/monitoring/', display: 'Monitoring' },
            { href: '/research/', display: 'Research' }
        ];
        this.SITE_COMMONNAV = [
            { href: '/', display: 'Home' },
            { href: '/aboutus/', display: 'About Us' },
            { href: '/contactus/', display: 'Contacts' },
            { href: '/legal.php', display: 'Legal' }
        ];
    }
}
AppComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-root',
                template: `<app-hazdev-angular-template
    [TITLE]="TITLE"
    [NAVIGATION]="NAVIGATION"
    [SITE_SITENAV]="SITE_SITENAV"
    [SITE_COMMONNAV]="SITE_COMMONNAV">
  <p>Served in a 16-ounce pint glass. Cloudy and dirty-peach-colored, topped with a thick, frothy, creamy foam head with great retention and stick, thanks to the hops. Spicy, floral hop aroma with sweetish pale malts beneath. Near full-bodied, incredibly smooth on the palate, creamy and silky. Sharpish citric snap up front, with notes of grapefruit, lime and lemon; deep floral notes as well. A tad resinous, a little piney, especially in the hop finish, which is puckering and drying. Sweet, bready malts with some fruitiness and a doughy yeast toward the end. Lingering hop spiciness and yeast in the finish. Very moreish and bone dry when the last sip fades away.</p>
  <p>This dark golden brew, lightly tinted orange, is hop-forward, as any self-respecting pale ale should be, with moderate fruit and citrus. Though the hops are the most immediately recognizable factor — again, as they should be in an American pale — they give way to a lightly malty backbone that lends crispness and drinkability. Unlike many pale ales, Dale's Pale Ale resists the temptation to let the hops overwhelm, instead letting them work in a context that ends with just the right bitter snap.</p>
  <p>Oude Tart is our Flemish-style sour red ale that has won back to back World Beer Cup Gold medals in that category, as well as a Great American Beer Festival gold medal for the same. This is that same beer, but now with cherries to compliment the flavors of dark fruit, leather and toasty oak that the original is so well known for. While this beer will certainly age fine, we think that fruited beers are best fresh as the fruit character can dissipate with time.</p>
  <p>Pours a slightly hazed, rich, dark amber beer with orange hues. Massive head on this one, three fingers thick, a white froth with amazing retention; it really sticks to the glass. (Thanks, hop proteins!) The aromatics are unreal, with an aggressive hop scent full of pine, dank resins, spice, grapefruit, rind, pith and a mixed bag of herbal goodies. Beneath it all are sweet, syrupy notes of rich tropical fruit like pineapple, ripe honeydew and mango.</p>
</app-hazdev-angular-template>`,
                styles: [``]
            },] },
];
/** @nocollapse */
AppComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    siteUrl: 'http://localhost.localdomain'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MenuService {
    constructor() {
        this._open = new BehaviorSubject(null);
        this.open = this._open.asObservable();
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setState(state) {
        this._open.next(state);
    }
}
MenuService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MenuService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HazdevAngularTemplateComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} media
     * @param {?} menuService
     */
    constructor(changeDetectorRef, media, menuService) {
        this.menuService = menuService;
        this.href = '';
        this.CONTACT = 'mailto:noreply@example.com';
        this.SOCIAL = [
            {
                display: 'Facebook',
                href: 'https://www.facebook.com/sharer.php?u={URL}',
                class: 'facebook'
            },
            {
                display: 'Twitter',
                href: 'https://twitter.com/intent/tweet?url={URL}&text=USGS%20%7C%20{TITLE}',
                class: 'twitter'
            },
            {
                display: 'Google',
                href: 'https://plusone.google.com/_/+1/confirm?url={URL}',
                class: 'google-plus'
            },
            {
                display: 'Email',
                href: '{CONTACT}?to=&subject={TITLE}&body={URL}',
                class: 'email'
            }
        ];
        this.NAVIGATION = [];
        this.SITE_URL = environment.siteUrl;
        this.mobileQuery = media.matchMedia('(max-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        try {
            this.mobileQuery.removeListener(this._mobileQueryListener);
        }
        catch (/** @type {?} */ e) {
            // Ignore
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSideNavChange(event) {
        // pass true or false indicating the state of the menu
        this.menuService.setState(event);
    }
}
HazdevAngularTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-hazdev-angular-template',
                template: `<app-hazdev-angular-template-header>
  <button
      (click)="sidenav.toggle()"
      class="hazdev-sidenav-toggle"
      mat-raised-button
  >
    Menu
  </button>
</app-hazdev-angular-template-header>
<mat-sidenav-container>
  <mat-sidenav-content>
    <app-hazdev-angular-template-page
        [TITLE]="TITLE"
        [CONTACT]="CONTACT"
        [SOCIAL]="SOCIAL"
    >
      <ng-content></ng-content>
    </app-hazdev-angular-template-page>
  </mat-sidenav-content>
  <mat-sidenav #sidenav
      class="site-footer"
      [mode]="mobileQuery.matches ? 'over' : 'side'"
      [opened]="!mobileQuery.matches"
      (openedChange)="onSideNavChange($event)"
  >
    <app-hazdev-angular-template-navigation
        [NAVIGATION]="NAVIGATION"
        [SITE_SITENAV]="SITE_SITENAV"
        [SITE_URL]="SITE_URL"
    >
      <!-- Custom Section Navigation -->
      <ng-content select="[templateSideNavigation]" templateSideNavigation></ng-content>
    </app-hazdev-angular-template-navigation>
  </mat-sidenav>
</mat-sidenav-container>
<app-hazdev-angular-template-footer
    [SITE_COMMONNAV]="SITE_COMMONNAV"
></app-hazdev-angular-template-footer>`,
                styles: [`.hazdev-site-header > .hazdev-sidenav-toggle{
  float:right;
  margin:10px 14px 0 0;
}
mat-sidenav-container.mat-drawer-container{
  background:#fff;
}
mat-sidenav.site-footer{
  width:228px;
}
@media screen and (min-width: 768px){
  .hazdev-site-header > .hazdev-sidenav-toggle{
    margin:1em 1em 0 0;
  }
  mat-sidenav.site-footer{
    padding-left:1em;
  }
}
@media print{
  .hazdev-site-header > .hazdev-sidenav-toggle{
    display:none;
  }
}
`],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
HazdevAngularTemplateComponent.ctorParameters = () => [
    { type: ChangeDetectorRef, },
    { type: MediaMatcher, },
    { type: MenuService, },
];
HazdevAngularTemplateComponent.propDecorators = {
    "TITLE": [{ type: Input },],
    "CONTACT": [{ type: Input },],
    "SOCIAL": [{ type: Input },],
    "NAVIGATION": [{ type: Input },],
    "SITE_COMMONNAV": [{ type: Input },],
    "SITE_SITENAV": [{ type: Input },],
    "SITE_URL": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HazdevAngularTemplateFooterComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
HazdevAngularTemplateFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-hazdev-angular-template-footer',
                template: `<footer *ngIf="SITE_COMMONNAV" class="site-commonnav">
  <a *ngFor="let item of SITE_COMMONNAV" href="{{ item.href }}">
    {{ item.display }}
  </a>
</footer>`,
                styles: [`.site-commonnav{
  border-top:1px solid #ccc;
  display:block;
  font-size:0.88em;
  margin:1em 0;
  text-align:center;
}
.site-commonnav > a{
  display:inline-block;
  margin:1em;
}
@media print{
  .site-commonnav{
    display:none;
  }
}`]
            },] },
];
/** @nocollapse */
HazdevAngularTemplateFooterComponent.ctorParameters = () => [];
HazdevAngularTemplateFooterComponent.propDecorators = {
    "SITE_COMMONNAV": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HazdevAngularTemplateHeaderComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
HazdevAngularTemplateHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-hazdev-angular-template-header',
                template: `<header role="banner" class="hazdev-site-header">
  <a class="hazdev-site-logo" href="/" title="U.S. Geological Survey">
    <img src="/assets/usgs-logo.svg" alt="U.S. Geological Survey logo"/>
  </a>
  <a class="hazdev-jumplink-navigation" href="#site-sectionnav">Jump to Navigation</a>
  <ng-content></ng-content>
</header>
`,
                styles: [`.mat-elevation-z0{
  -webkit-box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
          box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }
.mat-elevation-z1{
  -webkit-box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
          box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }
.mat-elevation-z2{
  -webkit-box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
          box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }
.mat-elevation-z3{
  -webkit-box-shadow:0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
          box-shadow:0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }
.mat-elevation-z4{
  -webkit-box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
          box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }
.mat-elevation-z5{
  -webkit-box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
          box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }
.mat-elevation-z6{
  -webkit-box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
          box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }
.mat-elevation-z7{
  -webkit-box-shadow:0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);
          box-shadow:0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }
.mat-elevation-z8{
  -webkit-box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
          box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }
.mat-elevation-z9{
  -webkit-box-shadow:0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);
          box-shadow:0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }
.mat-elevation-z10{
  -webkit-box-shadow:0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);
          box-shadow:0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }
.mat-elevation-z11{
  -webkit-box-shadow:0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);
          box-shadow:0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }
.mat-elevation-z12{
  -webkit-box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);
          box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }
.mat-elevation-z13{
  -webkit-box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);
          box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }
.mat-elevation-z14{
  -webkit-box-shadow:0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);
          box-shadow:0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }
.mat-elevation-z15{
  -webkit-box-shadow:0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);
          box-shadow:0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }
.mat-elevation-z16{
  -webkit-box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
          box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }
.mat-elevation-z17{
  -webkit-box-shadow:0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);
          box-shadow:0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }
.mat-elevation-z18{
  -webkit-box-shadow:0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);
          box-shadow:0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }
.mat-elevation-z19{
  -webkit-box-shadow:0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);
          box-shadow:0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }
.mat-elevation-z20{
  -webkit-box-shadow:0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);
          box-shadow:0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }
.mat-elevation-z21{
  -webkit-box-shadow:0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);
          box-shadow:0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }
.mat-elevation-z22{
  -webkit-box-shadow:0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);
          box-shadow:0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }
.mat-elevation-z23{
  -webkit-box-shadow:0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);
          box-shadow:0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }
.mat-elevation-z24{
  -webkit-box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
          box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }
.mat-h1, .mat-headline, .mat-typography h1{
  font:400 24px/32px Roboto, "Helvetica Neue", sans-serif;
  margin:0 0 16px; }
.mat-h2, .mat-title, .mat-typography h2{
  font:500 20px/32px Roboto, "Helvetica Neue", sans-serif;
  margin:0 0 16px; }
.mat-h3, .mat-subheading-2, .mat-typography h3{
  font:400 16px/28px Roboto, "Helvetica Neue", sans-serif;
  margin:0 0 16px; }
.mat-h4, .mat-subheading-1, .mat-typography h4{
  font:400 15px/24px Roboto, "Helvetica Neue", sans-serif;
  margin:0 0 16px; }
.mat-h5, .mat-typography h5{
  font:400 11.62px/20px Roboto, "Helvetica Neue", sans-serif;
  margin:0 0 12px; }
.mat-h6, .mat-typography h6{
  font:400 9.38px/20px Roboto, "Helvetica Neue", sans-serif;
  margin:0 0 12px; }
.mat-body-strong, .mat-body-2{
  font:500 14px/24px Roboto, "Helvetica Neue", sans-serif; }
.mat-body, .mat-body-1, .mat-typography{
  font:400 14px/20px Roboto, "Helvetica Neue", sans-serif; }
  .mat-body p, .mat-body-1 p, .mat-typography p{
    margin:0 0 12px; }
.mat-small, .mat-caption{
  font:400 12px/20px Roboto, "Helvetica Neue", sans-serif; }
.mat-display-4, .mat-typography .mat-display-4{
  font:300 112px/112px Roboto, "Helvetica Neue", sans-serif;
  margin:0 0 56px;
  letter-spacing:-0.05em; }
.mat-display-3, .mat-typography .mat-display-3{
  font:400 56px/56px Roboto, "Helvetica Neue", sans-serif;
  margin:0 0 64px;
  letter-spacing:-0.02em; }
.mat-display-2, .mat-typography .mat-display-2{
  font:400 45px/48px Roboto, "Helvetica Neue", sans-serif;
  margin:0 0 64px;
  letter-spacing:-0.005em; }
.mat-display-1, .mat-typography .mat-display-1{
  font:400 34px/40px Roboto, "Helvetica Neue", sans-serif;
  margin:0 0 64px; }
.mat-button, .mat-raised-button, .mat-icon-button, .mat-stroked-button, .mat-flat-button,
.mat-fab, .mat-mini-fab{
  font-family:Roboto, "Helvetica Neue", sans-serif;
  font-size:14px;
  font-weight:500; }
.mat-button-toggle{
  font-family:Roboto, "Helvetica Neue", sans-serif; }
.mat-card{
  font-family:Roboto, "Helvetica Neue", sans-serif; }
.mat-card-title{
  font-size:24px;
  font-weight:400; }
.mat-card-subtitle,
.mat-card-content,
.mat-card-header .mat-card-title{
  font-size:14px; }
.mat-checkbox{
  font-family:Roboto, "Helvetica Neue", sans-serif; }
.mat-checkbox-layout .mat-checkbox-label{
  line-height:24px; }
.mat-chip{
  font-size:13px;
  line-height:18px; }
  .mat-chip .mat-chip-remove.mat-icon{
    font-size:18px; }
.mat-table{
  font-family:Roboto, "Helvetica Neue", sans-serif; }
.mat-header-cell{
  font-size:12px;
  font-weight:500; }
.mat-cell{
  font-size:14px; }
.mat-calendar{
  font-family:Roboto, "Helvetica Neue", sans-serif; }
.mat-calendar-body{
  font-size:13px; }
.mat-calendar-body-label,
.mat-calendar-period-button{
  font-size:14px;
  font-weight:500; }
.mat-calendar-table-header th{
  font-size:11px;
  font-weight:400; }
.mat-dialog-title{
  font:500 20px/32px Roboto, "Helvetica Neue", sans-serif; }
.mat-expansion-panel-header{
  font-family:Roboto, "Helvetica Neue", sans-serif;
  font-size:15px;
  font-weight:400; }
.mat-expansion-panel-content{
  font:400 14px/20px Roboto, "Helvetica Neue", sans-serif; }
.mat-form-field{
  font-size:inherit;
  font-weight:400;
  line-height:1.125;
  font-family:Roboto, "Helvetica Neue", sans-serif; }
.mat-form-field-wrapper{
  padding-bottom:1.25em; }
.mat-form-field-prefix .mat-icon,
.mat-form-field-suffix .mat-icon{
  font-size:150%;
  line-height:1.125; }
.mat-form-field-prefix .mat-icon-button,
.mat-form-field-suffix .mat-icon-button{
  height:1.5em;
  width:1.5em; }
  .mat-form-field-prefix .mat-icon-button .mat-icon,
  .mat-form-field-suffix .mat-icon-button .mat-icon{
    height:1.125em;
    line-height:1.125; }
.mat-form-field-infix{
  padding:0.4375em 0;
  border-top:0.84375em solid transparent; }
.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,
.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label{
  -webkit-transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);
          transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);
  -ms-transform:translateY(-1.28125em) scale(0.75);
  width:133.33333%; }
.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper
.mat-form-field-label{
  -webkit-transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);
          transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);
  -ms-transform:translateY(-1.28124em) scale(0.75);
  width:133.33334%; }
.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper
.mat-form-field-label{
  -webkit-transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);
          transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);
  -ms-transform:translateY(-1.28123em) scale(0.75);
  width:133.33335%; }
.mat-form-field-label-wrapper{
  top:-0.84375em;
  padding-top:0.84375em; }
.mat-form-field-label{
  top:1.28125em; }
.mat-form-field-underline{
  bottom:1.25em; }
.mat-form-field-subscript-wrapper{
  font-size:75%;
  margin-top:0.54167em;
  top:calc(100% - 1.66667em); }
.mat-grid-tile-header,
.mat-grid-tile-footer{
  font-size:14px; }
  .mat-grid-tile-header .mat-line,
  .mat-grid-tile-footer .mat-line{
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    display:block;
    -webkit-box-sizing:border-box;
            box-sizing:border-box; }
    .mat-grid-tile-header .mat-line:nth-child(n+2),
    .mat-grid-tile-footer .mat-line:nth-child(n+2){
      font-size:12px; }
input.mat-input-element{
  margin-top:-0.0625em; }
.mat-menu-item{
  font-family:Roboto, "Helvetica Neue", sans-serif;
  font-size:16px;
  font-weight:400; }
.mat-paginator,
.mat-paginator-page-size .mat-select-trigger{
  font-family:Roboto, "Helvetica Neue", sans-serif;
  font-size:12px; }
.mat-radio-button{
  font-family:Roboto, "Helvetica Neue", sans-serif; }
.mat-select{
  font-family:Roboto, "Helvetica Neue", sans-serif; }
.mat-select-trigger{
  height:1.125em; }
.mat-slide-toggle-content{
  font:400 14px/20px Roboto, "Helvetica Neue", sans-serif; }
.mat-slider-thumb-label-text{
  font-family:Roboto, "Helvetica Neue", sans-serif;
  font-size:12px;
  font-weight:500; }
.mat-stepper-vertical, .mat-stepper-horizontal{
  font-family:Roboto, "Helvetica Neue", sans-serif; }
.mat-step-label{
  font-size:14px;
  font-weight:400; }
.mat-step-label-selected{
  font-size:14px;
  font-weight:500; }
.mat-tab-group{
  font-family:Roboto, "Helvetica Neue", sans-serif; }
.mat-tab-label, .mat-tab-link{
  font-family:Roboto, "Helvetica Neue", sans-serif;
  font-size:14px;
  font-weight:500; }
.mat-toolbar,
.mat-toolbar h1,
.mat-toolbar h2,
.mat-toolbar h3,
.mat-toolbar h4,
.mat-toolbar h5,
.mat-toolbar h6{
  font:500 20px/32px Roboto, "Helvetica Neue", sans-serif;
  margin:0; }
.mat-tooltip{
  font-family:Roboto, "Helvetica Neue", sans-serif;
  font-size:10px;
  padding-top:6px;
  padding-bottom:6px; }
.mat-tooltip-handset{
  font-size:14px;
  padding-top:9px;
  padding-bottom:9px; }
.mat-list-item{
  font-family:Roboto, "Helvetica Neue", sans-serif; }
.mat-list-option{
  font-family:Roboto, "Helvetica Neue", sans-serif; }
.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item{
  font-size:16px; }
  .mat-list .mat-list-item .mat-line, .mat-nav-list .mat-list-item .mat-line, .mat-selection-list .mat-list-item .mat-line{
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    display:block;
    -webkit-box-sizing:border-box;
            box-sizing:border-box; }
    .mat-list .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list .mat-list-item .mat-line:nth-child(n+2){
      font-size:14px; }
.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option{
  font-size:16px; }
  .mat-list .mat-list-option .mat-line, .mat-nav-list .mat-list-option .mat-line, .mat-selection-list .mat-list-option .mat-line{
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    display:block;
    -webkit-box-sizing:border-box;
            box-sizing:border-box; }
    .mat-list .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list .mat-list-option .mat-line:nth-child(n+2){
      font-size:14px; }
.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader{
  font-family:Roboto, "Helvetica Neue", sans-serif;
  font-size:14px;
  font-weight:500; }
.mat-list[dense] .mat-list-item, .mat-nav-list[dense] .mat-list-item, .mat-selection-list[dense] .mat-list-item{
  font-size:12px; }
  .mat-list[dense] .mat-list-item .mat-line, .mat-nav-list[dense] .mat-list-item .mat-line, .mat-selection-list[dense] .mat-list-item .mat-line{
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    display:block;
    -webkit-box-sizing:border-box;
            box-sizing:border-box; }
    .mat-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2){
      font-size:12px; }
.mat-list[dense] .mat-list-option, .mat-nav-list[dense] .mat-list-option, .mat-selection-list[dense] .mat-list-option{
  font-size:12px; }
  .mat-list[dense] .mat-list-option .mat-line, .mat-nav-list[dense] .mat-list-option .mat-line, .mat-selection-list[dense] .mat-list-option .mat-line{
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    display:block;
    -webkit-box-sizing:border-box;
            box-sizing:border-box; }
    .mat-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2){
      font-size:12px; }
.mat-list[dense] .mat-subheader, .mat-nav-list[dense] .mat-subheader, .mat-selection-list[dense] .mat-subheader{
  font-family:Roboto, "Helvetica Neue", sans-serif;
  font-size:12px;
  font-weight:500; }
.mat-option{
  font-family:Roboto, "Helvetica Neue", sans-serif;
  font-size:16px; }
.mat-optgroup-label{
  font:500 14px/24px Roboto, "Helvetica Neue", sans-serif; }
.mat-simple-snackbar{
  font-family:Roboto, "Helvetica Neue", sans-serif;
  font-size:14px; }
.mat-simple-snackbar-action{
  line-height:1;
  font-family:inherit;
  font-size:inherit;
  font-weight:500; }
.mat-ripple{
  overflow:hidden; }
  @media screen and (-ms-high-contrast: active){
    .mat-ripple{
      display:none; } }
.mat-ripple.mat-ripple-unbounded{
  overflow:visible; }
.mat-ripple-element{
  position:absolute;
  border-radius:50%;
  pointer-events:none;
  -webkit-transition:opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transition:opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transition:opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transition:opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);
  -webkit-transform:scale(0);
          transform:scale(0); }
.cdk-visually-hidden{
  border:0;
  clip:rect(0 0 0 0);
  height:1px;
  margin:-1px;
  overflow:hidden;
  padding:0;
  position:absolute;
  width:1px;
  outline:0;
  -webkit-appearance:none;
  -moz-appearance:none; }
.cdk-overlay-container, .cdk-global-overlay-wrapper{
  pointer-events:none;
  top:0;
  left:0;
  height:100%;
  width:100%; }
.cdk-overlay-container{
  position:fixed;
  z-index:1000; }
.cdk-global-overlay-wrapper{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  position:absolute;
  z-index:1000; }
.cdk-overlay-pane{
  position:absolute;
  pointer-events:auto;
  -webkit-box-sizing:border-box;
          box-sizing:border-box;
  z-index:1000; }
.cdk-overlay-backdrop{
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  z-index:1000;
  pointer-events:auto;
  -webkit-tap-highlight-color:transparent;
  -webkit-transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  opacity:0; }
  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing{
    opacity:1; }
.cdk-overlay-dark-backdrop{
  background:rgba(0, 0, 0, 0.288); }
.cdk-overlay-transparent-backdrop, .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{
  opacity:0; }
.cdk-global-scrollblock{
  position:fixed;
  width:100%;
  overflow-y:scroll; }
.mat-ripple-element{
  background-color:rgba(0, 0, 0, 0.1); }
.mat-option{
  color:rgba(0, 0, 0, 0.87); }
  .mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled){
    background:rgba(0, 0, 0, 0.04); }
  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled){
    color:#3d5e80; }
  .mat-accent .mat-option.mat-selected:not(.mat-option-disabled){
    color:#ff4081; }
  .mat-warn .mat-option.mat-selected:not(.mat-option-disabled){
    color:#ff6d00; }
  .mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){
    background:rgba(0, 0, 0, 0.04); }
  .mat-option.mat-active{
    background:rgba(0, 0, 0, 0.04);
    color:rgba(0, 0, 0, 0.87); }
  .mat-option.mat-option-disabled{
    color:rgba(0, 0, 0, 0.38); }
.mat-optgroup-label{
  color:rgba(0, 0, 0, 0.54); }
.mat-optgroup-disabled .mat-optgroup-label{
  color:rgba(0, 0, 0, 0.38); }
.mat-pseudo-checkbox{
  color:rgba(0, 0, 0, 0.54); }
  .mat-pseudo-checkbox::after{
    color:#fafafa; }
.mat-pseudo-checkbox-checked,
.mat-pseudo-checkbox-indeterminate,
.mat-accent .mat-pseudo-checkbox-checked,
.mat-accent .mat-pseudo-checkbox-indeterminate{
  background:#ff4081; }
.mat-primary .mat-pseudo-checkbox-checked,
.mat-primary .mat-pseudo-checkbox-indeterminate{
  background:#3d5e80; }
.mat-warn .mat-pseudo-checkbox-checked,
.mat-warn .mat-pseudo-checkbox-indeterminate{
  background:#ff6d00; }
.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,
.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{
  background:#b0b0b0; }
.mat-app-background{
  background-color:#fafafa;
  color:rgba(0, 0, 0, 0.87); }
.mat-theme-loaded-marker{
  display:none; }
.mat-autocomplete-panel{
  background:white;
  color:rgba(0, 0, 0, 0.87); }
  .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){
    background:white; }
    .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){
      color:rgba(0, 0, 0, 0.87); }
.mat-button, .mat-icon-button, .mat-stroked-button{
  background:transparent; }
  .mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay, .mat-stroked-button.mat-primary .mat-button-focus-overlay{
    background-color:rgba(61, 94, 128, 0.12); }
  .mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay, .mat-stroked-button.mat-accent .mat-button-focus-overlay{
    background-color:rgba(255, 64, 129, 0.12); }
  .mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay, .mat-stroked-button.mat-warn .mat-button-focus-overlay{
    background-color:rgba(255, 109, 0, 0.12); }
  .mat-button[disabled] .mat-button-focus-overlay, .mat-icon-button[disabled] .mat-button-focus-overlay, .mat-stroked-button[disabled] .mat-button-focus-overlay{
    background-color:transparent; }
  .mat-button.mat-primary, .mat-icon-button.mat-primary, .mat-stroked-button.mat-primary{
    color:#3d5e80; }
  .mat-button.mat-accent, .mat-icon-button.mat-accent, .mat-stroked-button.mat-accent{
    color:#ff4081; }
  .mat-button.mat-warn, .mat-icon-button.mat-warn, .mat-stroked-button.mat-warn{
    color:#ff6d00; }
  .mat-button.mat-primary[disabled], .mat-button.mat-accent[disabled], .mat-button.mat-warn[disabled], .mat-button[disabled][disabled], .mat-icon-button.mat-primary[disabled], .mat-icon-button.mat-accent[disabled], .mat-icon-button.mat-warn[disabled], .mat-icon-button[disabled][disabled], .mat-stroked-button.mat-primary[disabled], .mat-stroked-button.mat-accent[disabled], .mat-stroked-button.mat-warn[disabled], .mat-stroked-button[disabled][disabled]{
    color:rgba(0, 0, 0, 0.26); }
.mat-raised-button, .mat-fab, .mat-mini-fab{
  color:rgba(0, 0, 0, 0.87);
  background-color:white; }
  .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary{
    color:white; }
  .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent{
    color:white; }
  .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn{
    color:black; }
  .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled]{
    color:rgba(0, 0, 0, 0.26); }
  .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary{
    background-color:#3d5e80; }
  .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent{
    background-color:#ff4081; }
  .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn{
    background-color:#ff6d00; }
  .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled]{
    background-color:rgba(0, 0, 0, 0.12); }
  .mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element{
    background-color:rgba(255, 255, 255, 0.2); }
  .mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element{
    background-color:rgba(255, 255, 255, 0.2); }
  .mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element{
    background-color:rgba(0, 0, 0, 0.2); }
.mat-button.mat-primary .mat-ripple-element{
  background-color:rgba(61, 94, 128, 0.1); }
.mat-button.mat-accent .mat-ripple-element{
  background-color:rgba(255, 64, 129, 0.1); }
.mat-button.mat-warn .mat-ripple-element{
  background-color:rgba(255, 109, 0, 0.1); }
.mat-flat-button{
  color:rgba(0, 0, 0, 0.87);
  background-color:white; }
  .mat-flat-button.mat-primary{
    color:white; }
  .mat-flat-button.mat-accent{
    color:white; }
  .mat-flat-button.mat-warn{
    color:black; }
  .mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled]{
    color:rgba(0, 0, 0, 0.26); }
  .mat-flat-button.mat-primary{
    background-color:#3d5e80; }
  .mat-flat-button.mat-accent{
    background-color:#ff4081; }
  .mat-flat-button.mat-warn{
    background-color:#ff6d00; }
  .mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled]{
    background-color:rgba(0, 0, 0, 0.12); }
  .mat-flat-button.mat-primary .mat-ripple-element{
    background-color:rgba(255, 255, 255, 0.2); }
  .mat-flat-button.mat-accent .mat-ripple-element{
    background-color:rgba(255, 255, 255, 0.2); }
  .mat-flat-button.mat-warn .mat-ripple-element{
    background-color:rgba(0, 0, 0, 0.2); }
.mat-icon-button.mat-primary .mat-ripple-element{
  background-color:rgba(61, 94, 128, 0.2); }
.mat-icon-button.mat-accent .mat-ripple-element{
  background-color:rgba(255, 64, 129, 0.2); }
.mat-icon-button.mat-warn .mat-ripple-element{
  background-color:rgba(255, 109, 0, 0.2); }
.mat-button-toggle{
  color:rgba(0, 0, 0, 0.38); }
  .mat-button-toggle.cdk-focused .mat-button-toggle-focus-overlay{
    background-color:rgba(0, 0, 0, 0.12); }
.mat-button-toggle-checked{
  background-color:#e0e0e0;
  color:rgba(0, 0, 0, 0.54); }
.mat-button-toggle-disabled{
  background-color:#eeeeee;
  color:rgba(0, 0, 0, 0.26); }
  .mat-button-toggle-disabled.mat-button-toggle-checked{
    background-color:#bdbdbd; }
.mat-card{
  background:white;
  color:rgba(0, 0, 0, 0.87); }
.mat-card-subtitle{
  color:rgba(0, 0, 0, 0.54); }
.mat-checkbox-frame{
  border-color:rgba(0, 0, 0, 0.54); }
.mat-checkbox-checkmark{
  fill:#fafafa; }
.mat-checkbox-checkmark-path{
  stroke:#fafafa !important; }
.mat-checkbox-mixedmark{
  background-color:#fafafa; }
.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background{
  background-color:#3d5e80; }
.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background{
  background-color:#ff4081; }
.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background{
  background-color:#ff6d00; }
.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{
  background-color:#b0b0b0; }
.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{
  border-color:#b0b0b0; }
.mat-checkbox-disabled .mat-checkbox-label{
  color:#b0b0b0; }
.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element{
  background-color:rgba(61, 94, 128, 0.26); }
.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{
  background-color:rgba(255, 64, 129, 0.26); }
.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element{
  background-color:rgba(255, 109, 0, 0.26); }
.mat-chip:not(.mat-basic-chip){
  background-color:#e0e0e0;
  color:rgba(0, 0, 0, 0.87); }
  .mat-chip:not(.mat-basic-chip) .mat-chip-remove{
    color:rgba(0, 0, 0, 0.87);
    opacity:0.4; }
  .mat-chip:not(.mat-basic-chip) .mat-chip-remove:hover{
    opacity:0.54; }
.mat-chip.mat-chip-selected.mat-primary{
  background-color:#3d5e80;
  color:white; }
  .mat-chip.mat-chip-selected.mat-primary .mat-chip-remove{
    color:white;
    opacity:0.4; }
  .mat-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover{
    opacity:0.54; }
.mat-chip.mat-chip-selected.mat-warn{
  background-color:#ff6d00;
  color:black; }
  .mat-chip.mat-chip-selected.mat-warn .mat-chip-remove{
    color:black;
    opacity:0.4; }
  .mat-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover{
    opacity:0.54; }
.mat-chip.mat-chip-selected.mat-accent{
  background-color:#ff4081;
  color:white; }
  .mat-chip.mat-chip-selected.mat-accent .mat-chip-remove{
    color:white;
    opacity:0.4; }
  .mat-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover{
    opacity:0.54; }
.mat-table{
  background:white; }
.mat-row, .mat-header-row{
  border-bottom-color:rgba(0, 0, 0, 0.12); }
.mat-header-cell{
  color:rgba(0, 0, 0, 0.54); }
.mat-cell{
  color:rgba(0, 0, 0, 0.87); }
.mat-datepicker-content{
  background-color:white;
  color:rgba(0, 0, 0, 0.87); }
.mat-calendar-arrow{
  border-top-color:rgba(0, 0, 0, 0.54); }
.mat-calendar-next-button,
.mat-calendar-previous-button{
  color:rgba(0, 0, 0, 0.54); }
.mat-calendar-table-header{
  color:rgba(0, 0, 0, 0.38); }
.mat-calendar-table-header-divider::after{
  background:rgba(0, 0, 0, 0.12); }
.mat-calendar-body-label{
  color:rgba(0, 0, 0, 0.54); }
.mat-calendar-body-cell-content{
  color:rgba(0, 0, 0, 0.87);
  border-color:transparent; }
  .mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected){
    color:rgba(0, 0, 0, 0.38); }
:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),
.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),
.cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected){
  background-color:rgba(0, 0, 0, 0.04); }
.mat-calendar-body-selected{
  background-color:#3d5e80;
  color:white; }
.mat-calendar-body-disabled > .mat-calendar-body-selected{
  background-color:rgba(61, 94, 128, 0.4); }
.mat-calendar-body-today:not(.mat-calendar-body-selected){
  border-color:rgba(0, 0, 0, 0.38); }
.mat-calendar-body-today.mat-calendar-body-selected{
  -webkit-box-shadow:inset 0 0 0 1px white;
          box-shadow:inset 0 0 0 1px white; }
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected){
  border-color:rgba(0, 0, 0, 0.18); }
.mat-datepicker-toggle-active{
  color:#3d5e80; }
.mat-dialog-container{
  background:white;
  color:rgba(0, 0, 0, 0.87); }
.mat-divider{
  border-top-color:rgba(0, 0, 0, 0.12); }
.mat-divider-vertical{
  border-right-color:rgba(0, 0, 0, 0.12); }
.mat-expansion-panel{
  background:white;
  color:rgba(0, 0, 0, 0.87); }
.mat-action-row{
  border-top-color:rgba(0, 0, 0, 0.12); }
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-keyboard-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-program-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']):hover{
  background:rgba(0, 0, 0, 0.04); }
.mat-expansion-panel-header-title{
  color:rgba(0, 0, 0, 0.87); }
.mat-expansion-panel-header-description,
.mat-expansion-indicator::after{
  color:rgba(0, 0, 0, 0.54); }
.mat-expansion-panel-header[aria-disabled='true']{
  color:rgba(0, 0, 0, 0.26); }
  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-title,
  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-description{
    color:inherit; }
.mat-form-field-label{
  color:rgba(0, 0, 0, 0.54); }
.mat-hint{
  color:rgba(0, 0, 0, 0.54); }
.mat-focused .mat-form-field-label{
  color:#3d5e80; }
  .mat-focused .mat-form-field-label.mat-accent{
    color:#ff4081; }
  .mat-focused .mat-form-field-label.mat-warn{
    color:#ff6d00; }
.mat-focused .mat-form-field-required-marker{
  color:#ff4081; }
.mat-form-field-underline{
  background-color:rgba(0, 0, 0, 0.42); }
.mat-form-field-disabled .mat-form-field-underline{
  background-image:-webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.42)), color-stop(33%, rgba(0, 0, 0, 0.42)), color-stop(0%, transparent));
  background-image:linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);
  background-size:4px 1px;
  background-repeat:repeat-x; }
.mat-form-field-ripple{
  background-color:#3d5e80; }
  .mat-form-field-ripple.mat-accent{
    background-color:#ff4081; }
  .mat-form-field-ripple.mat-warn{
    background-color:#ff6d00; }
.mat-form-field-invalid .mat-form-field-label{
  color:#ff6d00; }
  .mat-form-field-invalid .mat-form-field-label.mat-accent,
  .mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker{
    color:#ff6d00; }
.mat-form-field-invalid .mat-form-field-ripple{
  background-color:#ff6d00; }
.mat-error{
  color:#ff6d00; }
.mat-icon.mat-primary{
  color:#3d5e80; }
.mat-icon.mat-accent{
  color:#ff4081; }
.mat-icon.mat-warn{
  color:#ff6d00; }
.mat-input-element:disabled{
  color:rgba(0, 0, 0, 0.38); }
.mat-input-element{
  caret-color:#3d5e80; }
  .mat-input-element::-webkit-input-placeholder{
    color:rgba(0, 0, 0, 0.42); }
  .mat-input-element:-ms-input-placeholder{
    color:rgba(0, 0, 0, 0.42); }
  .mat-input-element::-ms-input-placeholder{
    color:rgba(0, 0, 0, 0.42); }
  .mat-input-element::placeholder{
    color:rgba(0, 0, 0, 0.42); }
  .mat-input-element::-moz-placeholder{
    color:rgba(0, 0, 0, 0.42); }
  .mat-input-element::-webkit-input-placeholder{
    color:rgba(0, 0, 0, 0.42); }
  .mat-input-element:-ms-input-placeholder{
    color:rgba(0, 0, 0, 0.42); }
.mat-accent .mat-input-element{
  caret-color:#ff4081; }
.mat-warn .mat-input-element,
.mat-form-field-invalid .mat-input-element{
  caret-color:#ff6d00; }
.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item{
  color:rgba(0, 0, 0, 0.87); }
.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option{
  color:rgba(0, 0, 0, 0.87); }
.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader{
  color:rgba(0, 0, 0, 0.54); }
.mat-list-item-disabled{
  background-color:#eeeeee; }
.mat-nav-list .mat-list-item{
  outline:none; }
  .mat-nav-list .mat-list-item:hover, .mat-nav-list .mat-list-item.mat-list-item-focus{
    background:rgba(0, 0, 0, 0.04); }
.mat-list-option{
  outline:none; }
  .mat-list-option:hover, .mat-list-option.mat-list-item-focus{
    background:rgba(0, 0, 0, 0.04); }
.mat-menu-panel{
  background:white; }
.mat-menu-item{
  background:transparent;
  color:rgba(0, 0, 0, 0.87); }
  .mat-menu-item[disabled]{
    color:rgba(0, 0, 0, 0.38); }
.mat-menu-item .mat-icon:not([color]),
.mat-menu-item-submenu-trigger::after{
  color:rgba(0, 0, 0, 0.54); }
.mat-menu-item:hover:not([disabled]),
.mat-menu-item.cdk-program-focused:not([disabled]),
.mat-menu-item.cdk-keyboard-focused:not([disabled]),
.mat-menu-item-highlighted:not([disabled]){
  background:rgba(0, 0, 0, 0.04); }
.mat-paginator{
  background:white; }
.mat-paginator,
.mat-paginator-page-size .mat-select-trigger{
  color:rgba(0, 0, 0, 0.54); }
.mat-paginator-decrement,
.mat-paginator-increment{
  border-top:2px solid rgba(0, 0, 0, 0.54);
  border-right:2px solid rgba(0, 0, 0, 0.54); }
.mat-paginator-first,
.mat-paginator-last{
  border-top:2px solid rgba(0, 0, 0, 0.54); }
.mat-icon-button[disabled] .mat-paginator-decrement,
.mat-icon-button[disabled] .mat-paginator-increment,
.mat-icon-button[disabled] .mat-paginator-first,
.mat-icon-button[disabled] .mat-paginator-last{
  border-color:rgba(0, 0, 0, 0.38); }
.mat-progress-bar-background{
  fill:#5a7693; }
.mat-progress-bar-buffer{
  background-color:#5a7693; }
.mat-progress-bar-fill::after{
  background-color:#3d5e80; }
.mat-progress-bar.mat-accent .mat-progress-bar-background{
  fill:#ff80ab; }
.mat-progress-bar.mat-accent .mat-progress-bar-buffer{
  background-color:#ff80ab; }
.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{
  background-color:#ff4081; }
.mat-progress-bar.mat-warn .mat-progress-bar-background{
  fill:#ffb74d; }
.mat-progress-bar.mat-warn .mat-progress-bar-buffer{
  background-color:#ffb74d; }
.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{
  background-color:#ff6d00; }
.mat-progress-spinner circle, .mat-spinner circle{
  stroke:#3d5e80; }
.mat-progress-spinner.mat-accent circle, .mat-spinner.mat-accent circle{
  stroke:#ff4081; }
.mat-progress-spinner.mat-warn circle, .mat-spinner.mat-warn circle{
  stroke:#ff6d00; }
.mat-radio-outer-circle{
  border-color:rgba(0, 0, 0, 0.54); }
.mat-radio-disabled .mat-radio-outer-circle{
  border-color:rgba(0, 0, 0, 0.38); }
.mat-radio-disabled .mat-radio-ripple .mat-ripple-element, .mat-radio-disabled .mat-radio-inner-circle{
  background-color:rgba(0, 0, 0, 0.38); }
.mat-radio-disabled .mat-radio-label-content{
  color:rgba(0, 0, 0, 0.38); }
.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{
  border-color:#3d5e80; }
.mat-radio-button.mat-primary .mat-radio-inner-circle{
  background-color:#3d5e80; }
.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element{
  background-color:rgba(61, 94, 128, 0.26); }
.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{
  border-color:#ff4081; }
.mat-radio-button.mat-accent .mat-radio-inner-circle{
  background-color:#ff4081; }
.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{
  background-color:rgba(255, 64, 129, 0.26); }
.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{
  border-color:#ff6d00; }
.mat-radio-button.mat-warn .mat-radio-inner-circle{
  background-color:#ff6d00; }
.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element{
  background-color:rgba(255, 109, 0, 0.26); }
.mat-select-content, .mat-select-panel-done-animating{
  background:white; }
.mat-select-value{
  color:rgba(0, 0, 0, 0.87); }
.mat-select-placeholder{
  color:rgba(0, 0, 0, 0.42); }
.mat-select-disabled .mat-select-value{
  color:rgba(0, 0, 0, 0.38); }
.mat-select-arrow{
  color:rgba(0, 0, 0, 0.54); }
.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){
  background:rgba(0, 0, 0, 0.12); }
.mat-form-field.mat-focused.mat-primary .mat-select-arrow{
  color:#3d5e80; }
.mat-form-field.mat-focused.mat-accent .mat-select-arrow{
  color:#ff4081; }
.mat-form-field.mat-focused.mat-warn .mat-select-arrow{
  color:#ff6d00; }
.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{
  color:#ff6d00; }
.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{
  color:rgba(0, 0, 0, 0.38); }
.mat-drawer-container{
  background-color:#fafafa;
  color:rgba(0, 0, 0, 0.87); }
.mat-drawer{
  background-color:white;
  color:rgba(0, 0, 0, 0.87); }
  .mat-drawer.mat-drawer-push{
    background-color:white; }
.mat-drawer-backdrop.mat-drawer-shown{
  background-color:rgba(0, 0, 0, 0.6); }
.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{
  background-color:#e91e63; }
.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{
  background-color:rgba(233, 30, 99, 0.5); }
.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{
  background-color:rgba(0, 0, 0, 0.06); }
.mat-slide-toggle .mat-ripple-element{
  background-color:rgba(233, 30, 99, 0.12); }
.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{
  background-color:#3d5e80; }
.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{
  background-color:rgba(61, 94, 128, 0.5); }
.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element{
  background-color:rgba(0, 0, 0, 0.06); }
.mat-slide-toggle.mat-primary .mat-ripple-element{
  background-color:rgba(61, 94, 128, 0.12); }
.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{
  background-color:#ff9800; }
.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{
  background-color:rgba(255, 152, 0, 0.5); }
.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element{
  background-color:rgba(0, 0, 0, 0.06); }
.mat-slide-toggle.mat-warn .mat-ripple-element{
  background-color:rgba(255, 152, 0, 0.12); }
.mat-disabled .mat-slide-toggle-thumb{
  background-color:#bdbdbd; }
.mat-disabled .mat-slide-toggle-bar{
  background-color:rgba(0, 0, 0, 0.1); }
.mat-slide-toggle-thumb{
  background-color:#fafafa; }
.mat-slide-toggle-bar{
  background-color:rgba(0, 0, 0, 0.38); }
.mat-slider-track-background{
  background-color:rgba(0, 0, 0, 0.26); }
.mat-primary .mat-slider-track-fill,
.mat-primary .mat-slider-thumb,
.mat-primary .mat-slider-thumb-label{
  background-color:#3d5e80; }
.mat-primary .mat-slider-thumb-label-text{
  color:white; }
.mat-accent .mat-slider-track-fill,
.mat-accent .mat-slider-thumb,
.mat-accent .mat-slider-thumb-label{
  background-color:#ff4081; }
.mat-accent .mat-slider-thumb-label-text{
  color:white; }
.mat-warn .mat-slider-track-fill,
.mat-warn .mat-slider-thumb,
.mat-warn .mat-slider-thumb-label{
  background-color:#ff6d00; }
.mat-warn .mat-slider-thumb-label-text{
  color:black; }
.mat-slider-focus-ring{
  background-color:rgba(255, 64, 129, 0.2); }
.mat-slider:hover .mat-slider-track-background,
.cdk-focused .mat-slider-track-background{
  background-color:rgba(0, 0, 0, 0.38); }
.mat-slider-disabled .mat-slider-track-background,
.mat-slider-disabled .mat-slider-track-fill,
.mat-slider-disabled .mat-slider-thumb{
  background-color:rgba(0, 0, 0, 0.26); }
.mat-slider-disabled:hover .mat-slider-track-background{
  background-color:rgba(0, 0, 0, 0.26); }
.mat-slider-min-value .mat-slider-focus-ring{
  background-color:rgba(0, 0, 0, 0.12); }
.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,
.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{
  background-color:rgba(0, 0, 0, 0.87); }
.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,
.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{
  background-color:rgba(0, 0, 0, 0.26); }
.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{
  border-color:rgba(0, 0, 0, 0.26);
  background-color:transparent; }
.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb{
  border-color:rgba(0, 0, 0, 0.38); }
.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb{
  border-color:rgba(0, 0, 0, 0.26); }
.mat-slider-has-ticks .mat-slider-wrapper::after{
  border-color:rgba(0, 0, 0, 0.7); }
.mat-slider-horizontal .mat-slider-ticks{
  background-image:repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);
  background-image:-moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }
.mat-slider-vertical .mat-slider-ticks{
  background-image:repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }
.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused, .mat-step-header:hover{
  background-color:rgba(0, 0, 0, 0.04); }
.mat-step-header .mat-step-label,
.mat-step-header .mat-step-optional{
  color:rgba(0, 0, 0, 0.38); }
.mat-step-header .mat-step-icon{
  background-color:#3d5e80;
  color:white; }
.mat-step-header .mat-step-icon-not-touched{
  background-color:rgba(0, 0, 0, 0.38);
  color:white; }
.mat-step-header .mat-step-label.mat-step-label-active{
  color:rgba(0, 0, 0, 0.87); }
.mat-stepper-horizontal, .mat-stepper-vertical{
  background-color:white; }
.mat-stepper-vertical-line::before{
  border-left-color:rgba(0, 0, 0, 0.12); }
.mat-stepper-horizontal-line{
  border-top-color:rgba(0, 0, 0, 0.12); }
.mat-tab-nav-bar,
.mat-tab-header{
  border-bottom:1px solid rgba(0, 0, 0, 0.12); }
.mat-tab-group-inverted-header .mat-tab-nav-bar,
.mat-tab-group-inverted-header .mat-tab-header{
  border-top:1px solid rgba(0, 0, 0, 0.12);
  border-bottom:none; }
.mat-tab-label, .mat-tab-link{
  color:rgba(0, 0, 0, 0.87); }
  .mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled{
    color:rgba(0, 0, 0, 0.38); }
.mat-tab-header-pagination-chevron{
  border-color:rgba(0, 0, 0, 0.87); }
.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{
  border-color:rgba(0, 0, 0, 0.38); }
.mat-tab-group[class*='mat-background-'] .mat-tab-header,
.mat-tab-nav-bar[class*='mat-background-']{
  border-bottom:none;
  border-top:none; }
.mat-tab-group.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,
.mat-tab-group.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,
.mat-tab-nav-bar.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus{
  background-color:rgba(90, 118, 147, 0.3); }
.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar{
  background-color:#3d5e80; }
.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{
  background-color:white; }
.mat-tab-group.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,
.mat-tab-group.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,
.mat-tab-nav-bar.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus{
  background-color:rgba(255, 128, 171, 0.3); }
.mat-tab-group.mat-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent .mat-ink-bar{
  background-color:#ff4081; }
.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{
  background-color:white; }
.mat-tab-group.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,
.mat-tab-group.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,
.mat-tab-nav-bar.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus{
  background-color:rgba(255, 183, 77, 0.3); }
.mat-tab-group.mat-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn .mat-ink-bar{
  background-color:#ff6d00; }
.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{
  background-color:black; }
.mat-tab-group.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,
.mat-tab-group.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,
.mat-tab-nav-bar.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus{
  background-color:rgba(90, 118, 147, 0.3); }
.mat-tab-group.mat-background-primary .mat-tab-header, .mat-tab-group.mat-background-primary .mat-tab-links, .mat-tab-nav-bar.mat-background-primary .mat-tab-header, .mat-tab-nav-bar.mat-background-primary .mat-tab-links{
  background-color:#3d5e80; }
.mat-tab-group.mat-background-primary .mat-tab-label, .mat-tab-group.mat-background-primary .mat-tab-link, .mat-tab-nav-bar.mat-background-primary .mat-tab-label, .mat-tab-nav-bar.mat-background-primary .mat-tab-link{
  color:white; }
  .mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{
    color:rgba(255, 255, 255, 0.4); }
.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{
  border-color:white; }
.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{
  border-color:rgba(255, 255, 255, 0.4); }
.mat-tab-group.mat-background-primary .mat-ripple-element, .mat-tab-nav-bar.mat-background-primary .mat-ripple-element{
  background-color:rgba(255, 255, 255, 0.12); }
.mat-tab-group.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,
.mat-tab-group.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,
.mat-tab-nav-bar.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus{
  background-color:rgba(255, 128, 171, 0.3); }
.mat-tab-group.mat-background-accent .mat-tab-header, .mat-tab-group.mat-background-accent .mat-tab-links, .mat-tab-nav-bar.mat-background-accent .mat-tab-header, .mat-tab-nav-bar.mat-background-accent .mat-tab-links{
  background-color:#ff4081; }
.mat-tab-group.mat-background-accent .mat-tab-label, .mat-tab-group.mat-background-accent .mat-tab-link, .mat-tab-nav-bar.mat-background-accent .mat-tab-label, .mat-tab-nav-bar.mat-background-accent .mat-tab-link{
  color:white; }
  .mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{
    color:rgba(255, 255, 255, 0.4); }
.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{
  border-color:white; }
.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{
  border-color:rgba(255, 255, 255, 0.4); }
.mat-tab-group.mat-background-accent .mat-ripple-element, .mat-tab-nav-bar.mat-background-accent .mat-ripple-element{
  background-color:rgba(255, 255, 255, 0.12); }
.mat-tab-group.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,
.mat-tab-group.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,
.mat-tab-nav-bar.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus{
  background-color:rgba(255, 183, 77, 0.3); }
.mat-tab-group.mat-background-warn .mat-tab-header, .mat-tab-group.mat-background-warn .mat-tab-links, .mat-tab-nav-bar.mat-background-warn .mat-tab-header, .mat-tab-nav-bar.mat-background-warn .mat-tab-links{
  background-color:#ff6d00; }
.mat-tab-group.mat-background-warn .mat-tab-label, .mat-tab-group.mat-background-warn .mat-tab-link, .mat-tab-nav-bar.mat-background-warn .mat-tab-label, .mat-tab-nav-bar.mat-background-warn .mat-tab-link{
  color:black; }
  .mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{
    color:rgba(0, 0, 0, 0.4); }
.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{
  border-color:black; }
.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{
  border-color:rgba(0, 0, 0, 0.4); }
.mat-tab-group.mat-background-warn .mat-ripple-element, .mat-tab-nav-bar.mat-background-warn .mat-ripple-element{
  background-color:rgba(0, 0, 0, 0.12); }
.mat-toolbar{
  background:whitesmoke;
  color:rgba(0, 0, 0, 0.87); }
  .mat-toolbar.mat-primary{
    background:#3d5e80;
    color:white; }
  .mat-toolbar.mat-accent{
    background:#ff4081;
    color:white; }
  .mat-toolbar.mat-warn{
    background:#ff6d00;
    color:black; }
.mat-tooltip{
  background:rgba(97, 97, 97, 0.9); }
.mat-snack-bar-container{
  background:#323232;
  color:white; }
.mat-simple-snackbar-action{
  color:#ff4081; }
.hazdev-site-header{
  background-color:#3d5e80;
  height:56px;
  position:relative; }
.hazdev-site-header > .hazdev-site-logo{
  display:block;
  height:42px;
  left:0;
  overflow:hidden;
  padding:14px 14px 0;
  position:absolute;
  top:0; }
.hazdev-site-header > .hazdev-site-logo > img{
  height:140%;
  border:none; }
.hazdev-jumplink-navigation{
  display:block;
  left:-9999px;
  position:absolute;
  top:0; }
@media screen and (min-width: 768px){
  .hazdev-site-header{
    background-color:#000000;
    background-image:url("/assets/earthquake/banner.png");
    background-position:186px 0;
    background-repeat:no-repeat;
    background-size:auto 100%;
    height:90px;
    margin-bottom:2.5em; }
  .hazdev-site-header > .hazdev-site-logo{
    height:100%;
    padding:0; }
  .hazdev-site-header > .hazdev-site-logo > img{
    height:100%;
    padding:1em; }
  .hazdev-site-header:after{
    background-color:#3d5e80;
    color:#ffffff;
    content:'Earthquake Hazards Program';
    display:block;
    left:0;
    line-height:2;
    padding:0.25em 0 0.25em 1em;
    position:absolute;
    right:0;
    text-shadow:0 0 2px rgba(0, 0, 0, 0.5);
    top:100%; } }
@media print{
  [role="banner"]{
    background-color:#fff;
    height:0;
    margin:0;
    padding:0;
    visibility:hidden;
    width:100%; }
  [role="banner"]:after{
    color:#333;
    content:'U.S. Geological Survey - ' 'Earthquake Hazards Program';
    display:block;
    visibility:visible; }
  [role="main"]{
    padding:1em 0 0 !important; } }
`]
            },] },
];
/** @nocollapse */
HazdevAngularTemplateHeaderComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HazdevAngularTemplateNavigationComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
HazdevAngularTemplateNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-hazdev-angular-template-navigation',
                template: `<!-- Free form navigation section -->
<ng-content select="[templateSideNavigation]"></ng-content>
<!-- Navigation from NAVIGATION  -->
<mat-nav-list *ngIf="NAVIGATION" class="site-sectionnav">
  <ng-container *ngFor="let item of NAVIGATION">
    <app-navigation-group
        *ngIf="item.header"
        [href]="item.header.href"
        [title]="item.header.display">
      <app-navigation-item
          *ngFor="let link of item.links"
          [href]="link.href"
          [title]="link.display">
      </app-navigation-item>
    </app-navigation-group>
    <app-navigation-item
        *ngIf="item.href"
        [href]="item.href"
        [title]="item.display">
    </app-navigation-item>
  </ng-container>
</mat-nav-list>
<!-- Navigation from SITE_SITENAV  -->
<mat-nav-list
    *ngIf="SITE_SITENAV"
    class="hazdev-navigation-sitenav"
    aria-label="Site Navigation">
  <app-navigation-item
      *ngFor="let item of SITE_SITENAV"
      [href]="item.href"
      [title]="item.display">
  </app-navigation-item>
</mat-nav-list>
<form class="site-search" role="search" action="//search.usa.gov/search" method="get" accept-charset="UTF-8">
    <input name="utf8" type="hidden" value="✓"/>
    <input name="affiliate" type="hidden" value="usgs"/>
    <input name="sitelimit" type="hidden" value="{{ SITE_URL }}" />
  <mat-form-field>
    <input matInput id="query" name="query" type="search" placeholder="Search..." title="Search"/>
  </mat-form-field>
  <button type="submit" mat-raised-button>Search</button>
</form>`,
                styles: [`.mat-elevation-z0{
  -webkit-box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
          box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }
.mat-elevation-z1{
  -webkit-box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
          box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }
.mat-elevation-z2{
  -webkit-box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
          box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }
.mat-elevation-z3{
  -webkit-box-shadow:0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
          box-shadow:0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }
.mat-elevation-z4{
  -webkit-box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
          box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }
.mat-elevation-z5{
  -webkit-box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
          box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }
.mat-elevation-z6{
  -webkit-box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
          box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }
.mat-elevation-z7{
  -webkit-box-shadow:0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);
          box-shadow:0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }
.mat-elevation-z8{
  -webkit-box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
          box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }
.mat-elevation-z9{
  -webkit-box-shadow:0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);
          box-shadow:0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }
.mat-elevation-z10{
  -webkit-box-shadow:0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);
          box-shadow:0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }
.mat-elevation-z11{
  -webkit-box-shadow:0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);
          box-shadow:0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }
.mat-elevation-z12{
  -webkit-box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);
          box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }
.mat-elevation-z13{
  -webkit-box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);
          box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }
.mat-elevation-z14{
  -webkit-box-shadow:0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);
          box-shadow:0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }
.mat-elevation-z15{
  -webkit-box-shadow:0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);
          box-shadow:0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }
.mat-elevation-z16{
  -webkit-box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
          box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }
.mat-elevation-z17{
  -webkit-box-shadow:0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);
          box-shadow:0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }
.mat-elevation-z18{
  -webkit-box-shadow:0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);
          box-shadow:0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }
.mat-elevation-z19{
  -webkit-box-shadow:0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);
          box-shadow:0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }
.mat-elevation-z20{
  -webkit-box-shadow:0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);
          box-shadow:0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }
.mat-elevation-z21{
  -webkit-box-shadow:0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);
          box-shadow:0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }
.mat-elevation-z22{
  -webkit-box-shadow:0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);
          box-shadow:0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }
.mat-elevation-z23{
  -webkit-box-shadow:0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);
          box-shadow:0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }
.mat-elevation-z24{
  -webkit-box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
          box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }
.mat-h1, .mat-headline, .mat-typography h1{
  font:400 24px/32px Roboto, "Helvetica Neue", sans-serif;
  margin:0 0 16px; }
.mat-h2, .mat-title, .mat-typography h2{
  font:500 20px/32px Roboto, "Helvetica Neue", sans-serif;
  margin:0 0 16px; }
.mat-h3, .mat-subheading-2, .mat-typography h3{
  font:400 16px/28px Roboto, "Helvetica Neue", sans-serif;
  margin:0 0 16px; }
.mat-h4, .mat-subheading-1, .mat-typography h4{
  font:400 15px/24px Roboto, "Helvetica Neue", sans-serif;
  margin:0 0 16px; }
.mat-h5, .mat-typography h5{
  font:400 11.62px/20px Roboto, "Helvetica Neue", sans-serif;
  margin:0 0 12px; }
.mat-h6, .mat-typography h6{
  font:400 9.38px/20px Roboto, "Helvetica Neue", sans-serif;
  margin:0 0 12px; }
.mat-body-strong, .mat-body-2{
  font:500 14px/24px Roboto, "Helvetica Neue", sans-serif; }
.mat-body, .mat-body-1, .mat-typography{
  font:400 14px/20px Roboto, "Helvetica Neue", sans-serif; }
  .mat-body p, .mat-body-1 p, .mat-typography p{
    margin:0 0 12px; }
.mat-small, .mat-caption{
  font:400 12px/20px Roboto, "Helvetica Neue", sans-serif; }
.mat-display-4, .mat-typography .mat-display-4{
  font:300 112px/112px Roboto, "Helvetica Neue", sans-serif;
  margin:0 0 56px;
  letter-spacing:-0.05em; }
.mat-display-3, .mat-typography .mat-display-3{
  font:400 56px/56px Roboto, "Helvetica Neue", sans-serif;
  margin:0 0 64px;
  letter-spacing:-0.02em; }
.mat-display-2, .mat-typography .mat-display-2{
  font:400 45px/48px Roboto, "Helvetica Neue", sans-serif;
  margin:0 0 64px;
  letter-spacing:-0.005em; }
.mat-display-1, .mat-typography .mat-display-1{
  font:400 34px/40px Roboto, "Helvetica Neue", sans-serif;
  margin:0 0 64px; }
.mat-button, .mat-raised-button, .mat-icon-button, .mat-stroked-button, .mat-flat-button,
.mat-fab, .mat-mini-fab{
  font-family:Roboto, "Helvetica Neue", sans-serif;
  font-size:14px;
  font-weight:500; }
.mat-button-toggle{
  font-family:Roboto, "Helvetica Neue", sans-serif; }
.mat-card{
  font-family:Roboto, "Helvetica Neue", sans-serif; }
.mat-card-title{
  font-size:24px;
  font-weight:400; }
.mat-card-subtitle,
.mat-card-content,
.mat-card-header .mat-card-title{
  font-size:14px; }
.mat-checkbox{
  font-family:Roboto, "Helvetica Neue", sans-serif; }
.mat-checkbox-layout .mat-checkbox-label{
  line-height:24px; }
.mat-chip{
  font-size:13px;
  line-height:18px; }
  .mat-chip .mat-chip-remove.mat-icon{
    font-size:18px; }
.mat-table{
  font-family:Roboto, "Helvetica Neue", sans-serif; }
.mat-header-cell{
  font-size:12px;
  font-weight:500; }
.mat-cell{
  font-size:14px; }
.mat-calendar{
  font-family:Roboto, "Helvetica Neue", sans-serif; }
.mat-calendar-body{
  font-size:13px; }
.mat-calendar-body-label,
.mat-calendar-period-button{
  font-size:14px;
  font-weight:500; }
.mat-calendar-table-header th{
  font-size:11px;
  font-weight:400; }
.mat-dialog-title{
  font:500 20px/32px Roboto, "Helvetica Neue", sans-serif; }
.mat-expansion-panel-header{
  font-family:Roboto, "Helvetica Neue", sans-serif;
  font-size:15px;
  font-weight:400; }
.mat-expansion-panel-content{
  font:400 14px/20px Roboto, "Helvetica Neue", sans-serif; }
.mat-form-field{
  font-size:inherit;
  font-weight:400;
  line-height:1.125;
  font-family:Roboto, "Helvetica Neue", sans-serif; }
.mat-form-field-wrapper{
  padding-bottom:1.25em; }
.mat-form-field-prefix .mat-icon,
.mat-form-field-suffix .mat-icon{
  font-size:150%;
  line-height:1.125; }
.mat-form-field-prefix .mat-icon-button,
.mat-form-field-suffix .mat-icon-button{
  height:1.5em;
  width:1.5em; }
  .mat-form-field-prefix .mat-icon-button .mat-icon,
  .mat-form-field-suffix .mat-icon-button .mat-icon{
    height:1.125em;
    line-height:1.125; }
.mat-form-field-infix{
  padding:0.4375em 0;
  border-top:0.84375em solid transparent; }
.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,
.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label{
  -webkit-transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);
          transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);
  -ms-transform:translateY(-1.28125em) scale(0.75);
  width:133.33333%; }
.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper
.mat-form-field-label{
  -webkit-transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);
          transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);
  -ms-transform:translateY(-1.28124em) scale(0.75);
  width:133.33334%; }
.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper
.mat-form-field-label{
  -webkit-transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);
          transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);
  -ms-transform:translateY(-1.28123em) scale(0.75);
  width:133.33335%; }
.mat-form-field-label-wrapper{
  top:-0.84375em;
  padding-top:0.84375em; }
.mat-form-field-label{
  top:1.28125em; }
.mat-form-field-underline{
  bottom:1.25em; }
.mat-form-field-subscript-wrapper{
  font-size:75%;
  margin-top:0.54167em;
  top:calc(100% - 1.66667em); }
.mat-grid-tile-header,
.mat-grid-tile-footer{
  font-size:14px; }
  .mat-grid-tile-header .mat-line,
  .mat-grid-tile-footer .mat-line{
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    display:block;
    -webkit-box-sizing:border-box;
            box-sizing:border-box; }
    .mat-grid-tile-header .mat-line:nth-child(n+2),
    .mat-grid-tile-footer .mat-line:nth-child(n+2){
      font-size:12px; }
input.mat-input-element{
  margin-top:-0.0625em; }
.mat-menu-item{
  font-family:Roboto, "Helvetica Neue", sans-serif;
  font-size:16px;
  font-weight:400; }
.mat-paginator,
.mat-paginator-page-size .mat-select-trigger{
  font-family:Roboto, "Helvetica Neue", sans-serif;
  font-size:12px; }
.mat-radio-button{
  font-family:Roboto, "Helvetica Neue", sans-serif; }
.mat-select{
  font-family:Roboto, "Helvetica Neue", sans-serif; }
.mat-select-trigger{
  height:1.125em; }
.mat-slide-toggle-content{
  font:400 14px/20px Roboto, "Helvetica Neue", sans-serif; }
.mat-slider-thumb-label-text{
  font-family:Roboto, "Helvetica Neue", sans-serif;
  font-size:12px;
  font-weight:500; }
.mat-stepper-vertical, .mat-stepper-horizontal{
  font-family:Roboto, "Helvetica Neue", sans-serif; }
.mat-step-label{
  font-size:14px;
  font-weight:400; }
.mat-step-label-selected{
  font-size:14px;
  font-weight:500; }
.mat-tab-group{
  font-family:Roboto, "Helvetica Neue", sans-serif; }
.mat-tab-label, .mat-tab-link{
  font-family:Roboto, "Helvetica Neue", sans-serif;
  font-size:14px;
  font-weight:500; }
.mat-toolbar,
.mat-toolbar h1,
.mat-toolbar h2,
.mat-toolbar h3,
.mat-toolbar h4,
.mat-toolbar h5,
.mat-toolbar h6{
  font:500 20px/32px Roboto, "Helvetica Neue", sans-serif;
  margin:0; }
.mat-tooltip{
  font-family:Roboto, "Helvetica Neue", sans-serif;
  font-size:10px;
  padding-top:6px;
  padding-bottom:6px; }
.mat-tooltip-handset{
  font-size:14px;
  padding-top:9px;
  padding-bottom:9px; }
.mat-list-item{
  font-family:Roboto, "Helvetica Neue", sans-serif; }
.mat-list-option{
  font-family:Roboto, "Helvetica Neue", sans-serif; }
.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item{
  font-size:16px; }
  .mat-list .mat-list-item .mat-line, .mat-nav-list .mat-list-item .mat-line, .mat-selection-list .mat-list-item .mat-line{
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    display:block;
    -webkit-box-sizing:border-box;
            box-sizing:border-box; }
    .mat-list .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list .mat-list-item .mat-line:nth-child(n+2){
      font-size:14px; }
.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option{
  font-size:16px; }
  .mat-list .mat-list-option .mat-line, .mat-nav-list .mat-list-option .mat-line, .mat-selection-list .mat-list-option .mat-line{
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    display:block;
    -webkit-box-sizing:border-box;
            box-sizing:border-box; }
    .mat-list .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list .mat-list-option .mat-line:nth-child(n+2){
      font-size:14px; }
.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader{
  font-family:Roboto, "Helvetica Neue", sans-serif;
  font-size:14px;
  font-weight:500; }
.mat-list[dense] .mat-list-item, .mat-nav-list[dense] .mat-list-item, .mat-selection-list[dense] .mat-list-item{
  font-size:12px; }
  .mat-list[dense] .mat-list-item .mat-line, .mat-nav-list[dense] .mat-list-item .mat-line, .mat-selection-list[dense] .mat-list-item .mat-line{
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    display:block;
    -webkit-box-sizing:border-box;
            box-sizing:border-box; }
    .mat-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2){
      font-size:12px; }
.mat-list[dense] .mat-list-option, .mat-nav-list[dense] .mat-list-option, .mat-selection-list[dense] .mat-list-option{
  font-size:12px; }
  .mat-list[dense] .mat-list-option .mat-line, .mat-nav-list[dense] .mat-list-option .mat-line, .mat-selection-list[dense] .mat-list-option .mat-line{
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    display:block;
    -webkit-box-sizing:border-box;
            box-sizing:border-box; }
    .mat-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2){
      font-size:12px; }
.mat-list[dense] .mat-subheader, .mat-nav-list[dense] .mat-subheader, .mat-selection-list[dense] .mat-subheader{
  font-family:Roboto, "Helvetica Neue", sans-serif;
  font-size:12px;
  font-weight:500; }
.mat-option{
  font-family:Roboto, "Helvetica Neue", sans-serif;
  font-size:16px; }
.mat-optgroup-label{
  font:500 14px/24px Roboto, "Helvetica Neue", sans-serif; }
.mat-simple-snackbar{
  font-family:Roboto, "Helvetica Neue", sans-serif;
  font-size:14px; }
.mat-simple-snackbar-action{
  line-height:1;
  font-family:inherit;
  font-size:inherit;
  font-weight:500; }
.mat-ripple{
  overflow:hidden; }
  @media screen and (-ms-high-contrast: active){
    .mat-ripple{
      display:none; } }
.mat-ripple.mat-ripple-unbounded{
  overflow:visible; }
.mat-ripple-element{
  position:absolute;
  border-radius:50%;
  pointer-events:none;
  -webkit-transition:opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transition:opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transition:opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transition:opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);
  -webkit-transform:scale(0);
          transform:scale(0); }
.cdk-visually-hidden{
  border:0;
  clip:rect(0 0 0 0);
  height:1px;
  margin:-1px;
  overflow:hidden;
  padding:0;
  position:absolute;
  width:1px;
  outline:0;
  -webkit-appearance:none;
  -moz-appearance:none; }
.cdk-overlay-container, .cdk-global-overlay-wrapper{
  pointer-events:none;
  top:0;
  left:0;
  height:100%;
  width:100%; }
.cdk-overlay-container{
  position:fixed;
  z-index:1000; }
.cdk-global-overlay-wrapper{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  position:absolute;
  z-index:1000; }
.cdk-overlay-pane{
  position:absolute;
  pointer-events:auto;
  -webkit-box-sizing:border-box;
          box-sizing:border-box;
  z-index:1000; }
.cdk-overlay-backdrop{
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  z-index:1000;
  pointer-events:auto;
  -webkit-tap-highlight-color:transparent;
  -webkit-transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  opacity:0; }
  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing{
    opacity:1; }
.cdk-overlay-dark-backdrop{
  background:rgba(0, 0, 0, 0.288); }
.cdk-overlay-transparent-backdrop, .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{
  opacity:0; }
.cdk-global-scrollblock{
  position:fixed;
  width:100%;
  overflow-y:scroll; }
.mat-ripple-element{
  background-color:rgba(0, 0, 0, 0.1); }
.mat-option{
  color:rgba(0, 0, 0, 0.87); }
  .mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled){
    background:rgba(0, 0, 0, 0.04); }
  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled){
    color:#3d5e80; }
  .mat-accent .mat-option.mat-selected:not(.mat-option-disabled){
    color:#ff4081; }
  .mat-warn .mat-option.mat-selected:not(.mat-option-disabled){
    color:#ff6d00; }
  .mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){
    background:rgba(0, 0, 0, 0.04); }
  .mat-option.mat-active{
    background:rgba(0, 0, 0, 0.04);
    color:rgba(0, 0, 0, 0.87); }
  .mat-option.mat-option-disabled{
    color:rgba(0, 0, 0, 0.38); }
.mat-optgroup-label{
  color:rgba(0, 0, 0, 0.54); }
.mat-optgroup-disabled .mat-optgroup-label{
  color:rgba(0, 0, 0, 0.38); }
.mat-pseudo-checkbox{
  color:rgba(0, 0, 0, 0.54); }
  .mat-pseudo-checkbox::after{
    color:#fafafa; }
.mat-pseudo-checkbox-checked,
.mat-pseudo-checkbox-indeterminate,
.mat-accent .mat-pseudo-checkbox-checked,
.mat-accent .mat-pseudo-checkbox-indeterminate{
  background:#ff4081; }
.mat-primary .mat-pseudo-checkbox-checked,
.mat-primary .mat-pseudo-checkbox-indeterminate{
  background:#3d5e80; }
.mat-warn .mat-pseudo-checkbox-checked,
.mat-warn .mat-pseudo-checkbox-indeterminate{
  background:#ff6d00; }
.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,
.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{
  background:#b0b0b0; }
.mat-app-background{
  background-color:#fafafa;
  color:rgba(0, 0, 0, 0.87); }
.mat-theme-loaded-marker{
  display:none; }
.mat-autocomplete-panel{
  background:white;
  color:rgba(0, 0, 0, 0.87); }
  .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){
    background:white; }
    .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){
      color:rgba(0, 0, 0, 0.87); }
.mat-button, .mat-icon-button, .mat-stroked-button{
  background:transparent; }
  .mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay, .mat-stroked-button.mat-primary .mat-button-focus-overlay{
    background-color:rgba(61, 94, 128, 0.12); }
  .mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay, .mat-stroked-button.mat-accent .mat-button-focus-overlay{
    background-color:rgba(255, 64, 129, 0.12); }
  .mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay, .mat-stroked-button.mat-warn .mat-button-focus-overlay{
    background-color:rgba(255, 109, 0, 0.12); }
  .mat-button[disabled] .mat-button-focus-overlay, .mat-icon-button[disabled] .mat-button-focus-overlay, .mat-stroked-button[disabled] .mat-button-focus-overlay{
    background-color:transparent; }
  .mat-button.mat-primary, .mat-icon-button.mat-primary, .mat-stroked-button.mat-primary{
    color:#3d5e80; }
  .mat-button.mat-accent, .mat-icon-button.mat-accent, .mat-stroked-button.mat-accent{
    color:#ff4081; }
  .mat-button.mat-warn, .mat-icon-button.mat-warn, .mat-stroked-button.mat-warn{
    color:#ff6d00; }
  .mat-button.mat-primary[disabled], .mat-button.mat-accent[disabled], .mat-button.mat-warn[disabled], .mat-button[disabled][disabled], .mat-icon-button.mat-primary[disabled], .mat-icon-button.mat-accent[disabled], .mat-icon-button.mat-warn[disabled], .mat-icon-button[disabled][disabled], .mat-stroked-button.mat-primary[disabled], .mat-stroked-button.mat-accent[disabled], .mat-stroked-button.mat-warn[disabled], .mat-stroked-button[disabled][disabled]{
    color:rgba(0, 0, 0, 0.26); }
.mat-raised-button, .mat-fab, .mat-mini-fab{
  color:rgba(0, 0, 0, 0.87);
  background-color:white; }
  .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary{
    color:white; }
  .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent{
    color:white; }
  .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn{
    color:black; }
  .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled]{
    color:rgba(0, 0, 0, 0.26); }
  .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary{
    background-color:#3d5e80; }
  .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent{
    background-color:#ff4081; }
  .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn{
    background-color:#ff6d00; }
  .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled]{
    background-color:rgba(0, 0, 0, 0.12); }
  .mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element{
    background-color:rgba(255, 255, 255, 0.2); }
  .mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element{
    background-color:rgba(255, 255, 255, 0.2); }
  .mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element{
    background-color:rgba(0, 0, 0, 0.2); }
.mat-button.mat-primary .mat-ripple-element{
  background-color:rgba(61, 94, 128, 0.1); }
.mat-button.mat-accent .mat-ripple-element{
  background-color:rgba(255, 64, 129, 0.1); }
.mat-button.mat-warn .mat-ripple-element{
  background-color:rgba(255, 109, 0, 0.1); }
.mat-flat-button{
  color:rgba(0, 0, 0, 0.87);
  background-color:white; }
  .mat-flat-button.mat-primary{
    color:white; }
  .mat-flat-button.mat-accent{
    color:white; }
  .mat-flat-button.mat-warn{
    color:black; }
  .mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled]{
    color:rgba(0, 0, 0, 0.26); }
  .mat-flat-button.mat-primary{
    background-color:#3d5e80; }
  .mat-flat-button.mat-accent{
    background-color:#ff4081; }
  .mat-flat-button.mat-warn{
    background-color:#ff6d00; }
  .mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled]{
    background-color:rgba(0, 0, 0, 0.12); }
  .mat-flat-button.mat-primary .mat-ripple-element{
    background-color:rgba(255, 255, 255, 0.2); }
  .mat-flat-button.mat-accent .mat-ripple-element{
    background-color:rgba(255, 255, 255, 0.2); }
  .mat-flat-button.mat-warn .mat-ripple-element{
    background-color:rgba(0, 0, 0, 0.2); }
.mat-icon-button.mat-primary .mat-ripple-element{
  background-color:rgba(61, 94, 128, 0.2); }
.mat-icon-button.mat-accent .mat-ripple-element{
  background-color:rgba(255, 64, 129, 0.2); }
.mat-icon-button.mat-warn .mat-ripple-element{
  background-color:rgba(255, 109, 0, 0.2); }
.mat-button-toggle{
  color:rgba(0, 0, 0, 0.38); }
  .mat-button-toggle.cdk-focused .mat-button-toggle-focus-overlay{
    background-color:rgba(0, 0, 0, 0.12); }
.mat-button-toggle-checked{
  background-color:#e0e0e0;
  color:rgba(0, 0, 0, 0.54); }
.mat-button-toggle-disabled{
  background-color:#eeeeee;
  color:rgba(0, 0, 0, 0.26); }
  .mat-button-toggle-disabled.mat-button-toggle-checked{
    background-color:#bdbdbd; }
.mat-card{
  background:white;
  color:rgba(0, 0, 0, 0.87); }
.mat-card-subtitle{
  color:rgba(0, 0, 0, 0.54); }
.mat-checkbox-frame{
  border-color:rgba(0, 0, 0, 0.54); }
.mat-checkbox-checkmark{
  fill:#fafafa; }
.mat-checkbox-checkmark-path{
  stroke:#fafafa !important; }
.mat-checkbox-mixedmark{
  background-color:#fafafa; }
.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background{
  background-color:#3d5e80; }
.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background{
  background-color:#ff4081; }
.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background{
  background-color:#ff6d00; }
.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{
  background-color:#b0b0b0; }
.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{
  border-color:#b0b0b0; }
.mat-checkbox-disabled .mat-checkbox-label{
  color:#b0b0b0; }
.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element{
  background-color:rgba(61, 94, 128, 0.26); }
.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{
  background-color:rgba(255, 64, 129, 0.26); }
.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element{
  background-color:rgba(255, 109, 0, 0.26); }
.mat-chip:not(.mat-basic-chip){
  background-color:#e0e0e0;
  color:rgba(0, 0, 0, 0.87); }
  .mat-chip:not(.mat-basic-chip) .mat-chip-remove{
    color:rgba(0, 0, 0, 0.87);
    opacity:0.4; }
  .mat-chip:not(.mat-basic-chip) .mat-chip-remove:hover{
    opacity:0.54; }
.mat-chip.mat-chip-selected.mat-primary{
  background-color:#3d5e80;
  color:white; }
  .mat-chip.mat-chip-selected.mat-primary .mat-chip-remove{
    color:white;
    opacity:0.4; }
  .mat-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover{
    opacity:0.54; }
.mat-chip.mat-chip-selected.mat-warn{
  background-color:#ff6d00;
  color:black; }
  .mat-chip.mat-chip-selected.mat-warn .mat-chip-remove{
    color:black;
    opacity:0.4; }
  .mat-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover{
    opacity:0.54; }
.mat-chip.mat-chip-selected.mat-accent{
  background-color:#ff4081;
  color:white; }
  .mat-chip.mat-chip-selected.mat-accent .mat-chip-remove{
    color:white;
    opacity:0.4; }
  .mat-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover{
    opacity:0.54; }
.mat-table{
  background:white; }
.mat-row, .mat-header-row{
  border-bottom-color:rgba(0, 0, 0, 0.12); }
.mat-header-cell{
  color:rgba(0, 0, 0, 0.54); }
.mat-cell{
  color:rgba(0, 0, 0, 0.87); }
.mat-datepicker-content{
  background-color:white;
  color:rgba(0, 0, 0, 0.87); }
.mat-calendar-arrow{
  border-top-color:rgba(0, 0, 0, 0.54); }
.mat-calendar-next-button,
.mat-calendar-previous-button{
  color:rgba(0, 0, 0, 0.54); }
.mat-calendar-table-header{
  color:rgba(0, 0, 0, 0.38); }
.mat-calendar-table-header-divider::after{
  background:rgba(0, 0, 0, 0.12); }
.mat-calendar-body-label{
  color:rgba(0, 0, 0, 0.54); }
.mat-calendar-body-cell-content{
  color:rgba(0, 0, 0, 0.87);
  border-color:transparent; }
  .mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected){
    color:rgba(0, 0, 0, 0.38); }
:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),
.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),
.cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected){
  background-color:rgba(0, 0, 0, 0.04); }
.mat-calendar-body-selected{
  background-color:#3d5e80;
  color:white; }
.mat-calendar-body-disabled > .mat-calendar-body-selected{
  background-color:rgba(61, 94, 128, 0.4); }
.mat-calendar-body-today:not(.mat-calendar-body-selected){
  border-color:rgba(0, 0, 0, 0.38); }
.mat-calendar-body-today.mat-calendar-body-selected{
  -webkit-box-shadow:inset 0 0 0 1px white;
          box-shadow:inset 0 0 0 1px white; }
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected){
  border-color:rgba(0, 0, 0, 0.18); }
.mat-datepicker-toggle-active{
  color:#3d5e80; }
.mat-dialog-container{
  background:white;
  color:rgba(0, 0, 0, 0.87); }
.mat-divider{
  border-top-color:rgba(0, 0, 0, 0.12); }
.mat-divider-vertical{
  border-right-color:rgba(0, 0, 0, 0.12); }
.mat-expansion-panel{
  background:white;
  color:rgba(0, 0, 0, 0.87); }
.mat-action-row{
  border-top-color:rgba(0, 0, 0, 0.12); }
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-keyboard-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-program-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']):hover{
  background:rgba(0, 0, 0, 0.04); }
.mat-expansion-panel-header-title{
  color:rgba(0, 0, 0, 0.87); }
.mat-expansion-panel-header-description,
.mat-expansion-indicator::after{
  color:rgba(0, 0, 0, 0.54); }
.mat-expansion-panel-header[aria-disabled='true']{
  color:rgba(0, 0, 0, 0.26); }
  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-title,
  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-description{
    color:inherit; }
.mat-form-field-label{
  color:rgba(0, 0, 0, 0.54); }
.mat-hint{
  color:rgba(0, 0, 0, 0.54); }
.mat-focused .mat-form-field-label{
  color:#3d5e80; }
  .mat-focused .mat-form-field-label.mat-accent{
    color:#ff4081; }
  .mat-focused .mat-form-field-label.mat-warn{
    color:#ff6d00; }
.mat-focused .mat-form-field-required-marker{
  color:#ff4081; }
.mat-form-field-underline{
  background-color:rgba(0, 0, 0, 0.42); }
.mat-form-field-disabled .mat-form-field-underline{
  background-image:-webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.42)), color-stop(33%, rgba(0, 0, 0, 0.42)), color-stop(0%, transparent));
  background-image:linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);
  background-size:4px 1px;
  background-repeat:repeat-x; }
.mat-form-field-ripple{
  background-color:#3d5e80; }
  .mat-form-field-ripple.mat-accent{
    background-color:#ff4081; }
  .mat-form-field-ripple.mat-warn{
    background-color:#ff6d00; }
.mat-form-field-invalid .mat-form-field-label{
  color:#ff6d00; }
  .mat-form-field-invalid .mat-form-field-label.mat-accent,
  .mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker{
    color:#ff6d00; }
.mat-form-field-invalid .mat-form-field-ripple{
  background-color:#ff6d00; }
.mat-error{
  color:#ff6d00; }
.mat-icon.mat-primary{
  color:#3d5e80; }
.mat-icon.mat-accent{
  color:#ff4081; }
.mat-icon.mat-warn{
  color:#ff6d00; }
.mat-input-element:disabled{
  color:rgba(0, 0, 0, 0.38); }
.mat-input-element{
  caret-color:#3d5e80; }
  .mat-input-element::-webkit-input-placeholder{
    color:rgba(0, 0, 0, 0.42); }
  .mat-input-element:-ms-input-placeholder{
    color:rgba(0, 0, 0, 0.42); }
  .mat-input-element::-ms-input-placeholder{
    color:rgba(0, 0, 0, 0.42); }
  .mat-input-element::placeholder{
    color:rgba(0, 0, 0, 0.42); }
  .mat-input-element::-moz-placeholder{
    color:rgba(0, 0, 0, 0.42); }
  .mat-input-element::-webkit-input-placeholder{
    color:rgba(0, 0, 0, 0.42); }
  .mat-input-element:-ms-input-placeholder{
    color:rgba(0, 0, 0, 0.42); }
.mat-accent .mat-input-element{
  caret-color:#ff4081; }
.mat-warn .mat-input-element,
.mat-form-field-invalid .mat-input-element{
  caret-color:#ff6d00; }
.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item{
  color:rgba(0, 0, 0, 0.87); }
.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option{
  color:rgba(0, 0, 0, 0.87); }
.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader{
  color:rgba(0, 0, 0, 0.54); }
.mat-list-item-disabled{
  background-color:#eeeeee; }
.mat-nav-list .mat-list-item{
  outline:none; }
  .mat-nav-list .mat-list-item:hover, .mat-nav-list .mat-list-item.mat-list-item-focus{
    background:rgba(0, 0, 0, 0.04); }
.mat-list-option{
  outline:none; }
  .mat-list-option:hover, .mat-list-option.mat-list-item-focus{
    background:rgba(0, 0, 0, 0.04); }
.mat-menu-panel{
  background:white; }
.mat-menu-item{
  background:transparent;
  color:rgba(0, 0, 0, 0.87); }
  .mat-menu-item[disabled]{
    color:rgba(0, 0, 0, 0.38); }
.mat-menu-item .mat-icon:not([color]),
.mat-menu-item-submenu-trigger::after{
  color:rgba(0, 0, 0, 0.54); }
.mat-menu-item:hover:not([disabled]),
.mat-menu-item.cdk-program-focused:not([disabled]),
.mat-menu-item.cdk-keyboard-focused:not([disabled]),
.mat-menu-item-highlighted:not([disabled]){
  background:rgba(0, 0, 0, 0.04); }
.mat-paginator{
  background:white; }
.mat-paginator,
.mat-paginator-page-size .mat-select-trigger{
  color:rgba(0, 0, 0, 0.54); }
.mat-paginator-decrement,
.mat-paginator-increment{
  border-top:2px solid rgba(0, 0, 0, 0.54);
  border-right:2px solid rgba(0, 0, 0, 0.54); }
.mat-paginator-first,
.mat-paginator-last{
  border-top:2px solid rgba(0, 0, 0, 0.54); }
.mat-icon-button[disabled] .mat-paginator-decrement,
.mat-icon-button[disabled] .mat-paginator-increment,
.mat-icon-button[disabled] .mat-paginator-first,
.mat-icon-button[disabled] .mat-paginator-last{
  border-color:rgba(0, 0, 0, 0.38); }
.mat-progress-bar-background{
  fill:#5a7693; }
.mat-progress-bar-buffer{
  background-color:#5a7693; }
.mat-progress-bar-fill::after{
  background-color:#3d5e80; }
.mat-progress-bar.mat-accent .mat-progress-bar-background{
  fill:#ff80ab; }
.mat-progress-bar.mat-accent .mat-progress-bar-buffer{
  background-color:#ff80ab; }
.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{
  background-color:#ff4081; }
.mat-progress-bar.mat-warn .mat-progress-bar-background{
  fill:#ffb74d; }
.mat-progress-bar.mat-warn .mat-progress-bar-buffer{
  background-color:#ffb74d; }
.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{
  background-color:#ff6d00; }
.mat-progress-spinner circle, .mat-spinner circle{
  stroke:#3d5e80; }
.mat-progress-spinner.mat-accent circle, .mat-spinner.mat-accent circle{
  stroke:#ff4081; }
.mat-progress-spinner.mat-warn circle, .mat-spinner.mat-warn circle{
  stroke:#ff6d00; }
.mat-radio-outer-circle{
  border-color:rgba(0, 0, 0, 0.54); }
.mat-radio-disabled .mat-radio-outer-circle{
  border-color:rgba(0, 0, 0, 0.38); }
.mat-radio-disabled .mat-radio-ripple .mat-ripple-element, .mat-radio-disabled .mat-radio-inner-circle{
  background-color:rgba(0, 0, 0, 0.38); }
.mat-radio-disabled .mat-radio-label-content{
  color:rgba(0, 0, 0, 0.38); }
.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{
  border-color:#3d5e80; }
.mat-radio-button.mat-primary .mat-radio-inner-circle{
  background-color:#3d5e80; }
.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element{
  background-color:rgba(61, 94, 128, 0.26); }
.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{
  border-color:#ff4081; }
.mat-radio-button.mat-accent .mat-radio-inner-circle{
  background-color:#ff4081; }
.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{
  background-color:rgba(255, 64, 129, 0.26); }
.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{
  border-color:#ff6d00; }
.mat-radio-button.mat-warn .mat-radio-inner-circle{
  background-color:#ff6d00; }
.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element{
  background-color:rgba(255, 109, 0, 0.26); }
.mat-select-content, .mat-select-panel-done-animating{
  background:white; }
.mat-select-value{
  color:rgba(0, 0, 0, 0.87); }
.mat-select-placeholder{
  color:rgba(0, 0, 0, 0.42); }
.mat-select-disabled .mat-select-value{
  color:rgba(0, 0, 0, 0.38); }
.mat-select-arrow{
  color:rgba(0, 0, 0, 0.54); }
.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){
  background:rgba(0, 0, 0, 0.12); }
.mat-form-field.mat-focused.mat-primary .mat-select-arrow{
  color:#3d5e80; }
.mat-form-field.mat-focused.mat-accent .mat-select-arrow{
  color:#ff4081; }
.mat-form-field.mat-focused.mat-warn .mat-select-arrow{
  color:#ff6d00; }
.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{
  color:#ff6d00; }
.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{
  color:rgba(0, 0, 0, 0.38); }
.mat-drawer-container{
  background-color:#fafafa;
  color:rgba(0, 0, 0, 0.87); }
.mat-drawer{
  background-color:white;
  color:rgba(0, 0, 0, 0.87); }
  .mat-drawer.mat-drawer-push{
    background-color:white; }
.mat-drawer-backdrop.mat-drawer-shown{
  background-color:rgba(0, 0, 0, 0.6); }
.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{
  background-color:#e91e63; }
.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{
  background-color:rgba(233, 30, 99, 0.5); }
.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{
  background-color:rgba(0, 0, 0, 0.06); }
.mat-slide-toggle .mat-ripple-element{
  background-color:rgba(233, 30, 99, 0.12); }
.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{
  background-color:#3d5e80; }
.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{
  background-color:rgba(61, 94, 128, 0.5); }
.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element{
  background-color:rgba(0, 0, 0, 0.06); }
.mat-slide-toggle.mat-primary .mat-ripple-element{
  background-color:rgba(61, 94, 128, 0.12); }
.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{
  background-color:#ff9800; }
.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{
  background-color:rgba(255, 152, 0, 0.5); }
.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element{
  background-color:rgba(0, 0, 0, 0.06); }
.mat-slide-toggle.mat-warn .mat-ripple-element{
  background-color:rgba(255, 152, 0, 0.12); }
.mat-disabled .mat-slide-toggle-thumb{
  background-color:#bdbdbd; }
.mat-disabled .mat-slide-toggle-bar{
  background-color:rgba(0, 0, 0, 0.1); }
.mat-slide-toggle-thumb{
  background-color:#fafafa; }
.mat-slide-toggle-bar{
  background-color:rgba(0, 0, 0, 0.38); }
.mat-slider-track-background{
  background-color:rgba(0, 0, 0, 0.26); }
.mat-primary .mat-slider-track-fill,
.mat-primary .mat-slider-thumb,
.mat-primary .mat-slider-thumb-label{
  background-color:#3d5e80; }
.mat-primary .mat-slider-thumb-label-text{
  color:white; }
.mat-accent .mat-slider-track-fill,
.mat-accent .mat-slider-thumb,
.mat-accent .mat-slider-thumb-label{
  background-color:#ff4081; }
.mat-accent .mat-slider-thumb-label-text{
  color:white; }
.mat-warn .mat-slider-track-fill,
.mat-warn .mat-slider-thumb,
.mat-warn .mat-slider-thumb-label{
  background-color:#ff6d00; }
.mat-warn .mat-slider-thumb-label-text{
  color:black; }
.mat-slider-focus-ring{
  background-color:rgba(255, 64, 129, 0.2); }
.mat-slider:hover .mat-slider-track-background,
.cdk-focused .mat-slider-track-background{
  background-color:rgba(0, 0, 0, 0.38); }
.mat-slider-disabled .mat-slider-track-background,
.mat-slider-disabled .mat-slider-track-fill,
.mat-slider-disabled .mat-slider-thumb{
  background-color:rgba(0, 0, 0, 0.26); }
.mat-slider-disabled:hover .mat-slider-track-background{
  background-color:rgba(0, 0, 0, 0.26); }
.mat-slider-min-value .mat-slider-focus-ring{
  background-color:rgba(0, 0, 0, 0.12); }
.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,
.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{
  background-color:rgba(0, 0, 0, 0.87); }
.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,
.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{
  background-color:rgba(0, 0, 0, 0.26); }
.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{
  border-color:rgba(0, 0, 0, 0.26);
  background-color:transparent; }
.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb{
  border-color:rgba(0, 0, 0, 0.38); }
.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb{
  border-color:rgba(0, 0, 0, 0.26); }
.mat-slider-has-ticks .mat-slider-wrapper::after{
  border-color:rgba(0, 0, 0, 0.7); }
.mat-slider-horizontal .mat-slider-ticks{
  background-image:repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);
  background-image:-moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }
.mat-slider-vertical .mat-slider-ticks{
  background-image:repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }
.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused, .mat-step-header:hover{
  background-color:rgba(0, 0, 0, 0.04); }
.mat-step-header .mat-step-label,
.mat-step-header .mat-step-optional{
  color:rgba(0, 0, 0, 0.38); }
.mat-step-header .mat-step-icon{
  background-color:#3d5e80;
  color:white; }
.mat-step-header .mat-step-icon-not-touched{
  background-color:rgba(0, 0, 0, 0.38);
  color:white; }
.mat-step-header .mat-step-label.mat-step-label-active{
  color:rgba(0, 0, 0, 0.87); }
.mat-stepper-horizontal, .mat-stepper-vertical{
  background-color:white; }
.mat-stepper-vertical-line::before{
  border-left-color:rgba(0, 0, 0, 0.12); }
.mat-stepper-horizontal-line{
  border-top-color:rgba(0, 0, 0, 0.12); }
.mat-tab-nav-bar,
.mat-tab-header{
  border-bottom:1px solid rgba(0, 0, 0, 0.12); }
.mat-tab-group-inverted-header .mat-tab-nav-bar,
.mat-tab-group-inverted-header .mat-tab-header{
  border-top:1px solid rgba(0, 0, 0, 0.12);
  border-bottom:none; }
.mat-tab-label, .mat-tab-link{
  color:rgba(0, 0, 0, 0.87); }
  .mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled{
    color:rgba(0, 0, 0, 0.38); }
.mat-tab-header-pagination-chevron{
  border-color:rgba(0, 0, 0, 0.87); }
.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{
  border-color:rgba(0, 0, 0, 0.38); }
.mat-tab-group[class*='mat-background-'] .mat-tab-header,
.mat-tab-nav-bar[class*='mat-background-']{
  border-bottom:none;
  border-top:none; }
.mat-tab-group.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,
.mat-tab-group.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,
.mat-tab-nav-bar.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus{
  background-color:rgba(90, 118, 147, 0.3); }
.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar{
  background-color:#3d5e80; }
.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{
  background-color:white; }
.mat-tab-group.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,
.mat-tab-group.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,
.mat-tab-nav-bar.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus{
  background-color:rgba(255, 128, 171, 0.3); }
.mat-tab-group.mat-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent .mat-ink-bar{
  background-color:#ff4081; }
.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{
  background-color:white; }
.mat-tab-group.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,
.mat-tab-group.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,
.mat-tab-nav-bar.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus{
  background-color:rgba(255, 183, 77, 0.3); }
.mat-tab-group.mat-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn .mat-ink-bar{
  background-color:#ff6d00; }
.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{
  background-color:black; }
.mat-tab-group.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,
.mat-tab-group.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,
.mat-tab-nav-bar.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus{
  background-color:rgba(90, 118, 147, 0.3); }
.mat-tab-group.mat-background-primary .mat-tab-header, .mat-tab-group.mat-background-primary .mat-tab-links, .mat-tab-nav-bar.mat-background-primary .mat-tab-header, .mat-tab-nav-bar.mat-background-primary .mat-tab-links{
  background-color:#3d5e80; }
.mat-tab-group.mat-background-primary .mat-tab-label, .mat-tab-group.mat-background-primary .mat-tab-link, .mat-tab-nav-bar.mat-background-primary .mat-tab-label, .mat-tab-nav-bar.mat-background-primary .mat-tab-link{
  color:white; }
  .mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{
    color:rgba(255, 255, 255, 0.4); }
.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{
  border-color:white; }
.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{
  border-color:rgba(255, 255, 255, 0.4); }
.mat-tab-group.mat-background-primary .mat-ripple-element, .mat-tab-nav-bar.mat-background-primary .mat-ripple-element{
  background-color:rgba(255, 255, 255, 0.12); }
.mat-tab-group.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,
.mat-tab-group.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,
.mat-tab-nav-bar.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus{
  background-color:rgba(255, 128, 171, 0.3); }
.mat-tab-group.mat-background-accent .mat-tab-header, .mat-tab-group.mat-background-accent .mat-tab-links, .mat-tab-nav-bar.mat-background-accent .mat-tab-header, .mat-tab-nav-bar.mat-background-accent .mat-tab-links{
  background-color:#ff4081; }
.mat-tab-group.mat-background-accent .mat-tab-label, .mat-tab-group.mat-background-accent .mat-tab-link, .mat-tab-nav-bar.mat-background-accent .mat-tab-label, .mat-tab-nav-bar.mat-background-accent .mat-tab-link{
  color:white; }
  .mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{
    color:rgba(255, 255, 255, 0.4); }
.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{
  border-color:white; }
.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{
  border-color:rgba(255, 255, 255, 0.4); }
.mat-tab-group.mat-background-accent .mat-ripple-element, .mat-tab-nav-bar.mat-background-accent .mat-ripple-element{
  background-color:rgba(255, 255, 255, 0.12); }
.mat-tab-group.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,
.mat-tab-group.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,
.mat-tab-nav-bar.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus{
  background-color:rgba(255, 183, 77, 0.3); }
.mat-tab-group.mat-background-warn .mat-tab-header, .mat-tab-group.mat-background-warn .mat-tab-links, .mat-tab-nav-bar.mat-background-warn .mat-tab-header, .mat-tab-nav-bar.mat-background-warn .mat-tab-links{
  background-color:#ff6d00; }
.mat-tab-group.mat-background-warn .mat-tab-label, .mat-tab-group.mat-background-warn .mat-tab-link, .mat-tab-nav-bar.mat-background-warn .mat-tab-label, .mat-tab-nav-bar.mat-background-warn .mat-tab-link{
  color:black; }
  .mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{
    color:rgba(0, 0, 0, 0.4); }
.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{
  border-color:black; }
.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{
  border-color:rgba(0, 0, 0, 0.4); }
.mat-tab-group.mat-background-warn .mat-ripple-element, .mat-tab-nav-bar.mat-background-warn .mat-ripple-element{
  background-color:rgba(0, 0, 0, 0.12); }
.mat-toolbar{
  background:whitesmoke;
  color:rgba(0, 0, 0, 0.87); }
  .mat-toolbar.mat-primary{
    background:#3d5e80;
    color:white; }
  .mat-toolbar.mat-accent{
    background:#ff4081;
    color:white; }
  .mat-toolbar.mat-warn{
    background:#ff6d00;
    color:black; }
.mat-tooltip{
  background:rgba(97, 97, 97, 0.9); }
.mat-snack-bar-container{
  background:#323232;
  color:white; }
.mat-simple-snackbar-action{
  color:#ff4081; }
section.hazdev-template-nav-section > app-navigation-item > a.mat-list-item{
  color:#666;
  font-size:0.88em; }
.hazdev-template-nav-section{
  margin:0.5em 0; }
app-navigation-group + app-navigation-item,
.site-sectionnav > app-navigation-item + app-navigation-item{
  display:block;
  border-top:1px solid #ddd; }
mat-nav-list.hazdev-navigation-sitenav{
  background-color:#3d5e80;
  background-color:#3d5e80;
  margin:1em 0;
  padding:0; }
.hazdev-navigation-sitenav > app-navigation-item > a.mat-list-item{
  border-bottom:1px solid rgba(0, 0, 0, 0.1);
  border-left:1px solid rgba(255, 255, 255, 0.1);
  border-right:1px solid rgba(255, 255, 255, 0.1);
  border-top:1px solid rgba(255, 255, 255, 0.1);
  color:#fff;
  display:block;
  font-weight:400;
  text-decoration:none;
  text-shadow:0 0 2px #000;
  -webkit-transition:background .25s ease-out;
  transition:background .25s ease-out; }
.hazdev-navigation-sitenav > a.mat-list-item > .mat-list-item-content{
  color:#fff; }
form.site-search{
  margin:1em 0 0;
  padding:0 1em; }
  form.site-search > button{
    margin:0 0 1em; }
`],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
HazdevAngularTemplateNavigationComponent.ctorParameters = () => [];
HazdevAngularTemplateNavigationComponent.propDecorators = {
    "NAVIGATION": [{ type: Input },],
    "SITE_SITENAV": [{ type: Input },],
    "SITE_URL": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HazdevAngularTemplatePageComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} stub
     * @return {?}
     */
    getSocialHref(stub) {
        return (stub
            .replace('{URL}', encodeURIComponent(window.location.toString()))
            .replace('{TITLE}', this.TITLE)
            .replace('{CONTACT}', this.CONTACT));
    }
}
HazdevAngularTemplatePageComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-hazdev-angular-template-page',
                template: `<main aria-labeled-by="hazdev-page-header">
  <header id="hazdev-page-header">
    <h1>{{ TITLE }}</h1>
  </header>
  <div class="hazdev-page-content">
    <ng-content></ng-content>
  </div>
  <footer *ngIf="CONTACT || SOCIAL" class="page-footer">
    <div *ngIf="CONTACT">
      <a href="{{ CONTACT }}">Questions or comments?</a>
    </div>
    <nav *ngIf="SOCIAL" class="page-social" aria-label="Share this page">
      <a *ngFor="let social of SOCIAL"
        href="{{ getSocialHref(social.href) }}"
        title="Share using {{ social.display }}"
        class="{{ social.class }}"
      >{{ social.display }}</a>
    </nav>
  </footer>
</main>
`,
                styles: [`main{
  padding:0 1em;
}
.page-footer{
  font-size:0.88em;
  margin:1em 0;
}
@media screen and (min-width: 768px){
  .page-footer{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-pack:justify;
        -ms-flex-pack:justify;
            justify-content:space-between;
  }
}
@media print{
  .page-footer{
    display:none;
  }
}
.page-social{
  margin:1em 0;
}
.page-social > a{
  margin-left:1em;
}
.page-social > a:first-child{
  margin:0;
}
@media screen and (max-width: 767px){
  .page-social > a{
    background:url("/assets/social-sprite.png") no-repeat;
    content:' ';
    display:inline-block;
    height:32px;
    margin-top:0;
    overflow:hidden;
    text-indent:-9999px;
    width:32px;
  }
  .page-social > a.facebook{
    background-position:0 0px;
  }
  .page-social > a.twitter{
    background-position:0 -48px;
  }
  .page-social > a.google-plus{
    background-position:0 -96px;
  }
  .page-social > a.email{
    background-position:0 -144px;
  }
}
@media screen and (min-width: 768px){
  .page-social{
    margin:0;
  }
  .page-social > a:before{
    background:url("/assets/social-sprite.png") no-repeat;
    content:' ';
    display:inline-block;
    height:16px;
    margin-right:4px;
    margin-top:-16px;
    position:relative;
    top:2px;
    width:16px;
  }
  .page-social > .facebook:before{
    background-position:0 -32px;
  }
  .page-social > .twitter:before{
    background-position:0 -80px;
  }
  .page-social > .google-plus:before{
    background-position:0 -128px;
  }
  .page-social > .email:before{
    background-position:0 -176px;
  }
}
`]
            },] },
];
/** @nocollapse */
HazdevAngularTemplatePageComponent.ctorParameters = () => [];
HazdevAngularTemplatePageComponent.propDecorators = {
    "CONTACT": [{ type: Input },],
    "SOCIAL": [{ type: Input },],
    "TITLE": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NavigationGroupComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NavigationGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-navigation-group',
                template: `<section class="hazdev-template-nav-section">
  <header>
    <app-navigation-item
        class="hazdev-template-nav-item"
        [href]="href"
        [title]="title">
    </app-navigation-item>
  </header>
  <ng-content></ng-content>
</section>`,
                styles: [``]
            },] },
];
/** @nocollapse */
NavigationGroupComponent.ctorParameters = () => [];
NavigationGroupComponent.propDecorators = {
    "href": [{ type: Input },],
    "title": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NavigationItemComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NavigationItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-navigation-item',
                template: `<a mat-list-item href="{{ href }}">
  {{ title }}
</a>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
NavigationItemComponent.ctorParameters = () => [];
NavigationItemComponent.propDecorators = {
    "href": [{ type: Input },],
    "title": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AppModule {
}
AppModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    AppComponent,
                    HazdevAngularTemplateComponent,
                    HazdevAngularTemplateFooterComponent,
                    HazdevAngularTemplateHeaderComponent,
                    HazdevAngularTemplatePageComponent,
                    NavigationGroupComponent,
                    HazdevAngularTemplateNavigationComponent,
                    NavigationItemComponent
                ],
                imports: [
                    BrowserModule,
                    BrowserAnimationsModule,
                    MatButtonModule,
                    MatDialogModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatListModule,
                    MatSidenavModule
                ],
                exports: [
                    HazdevAngularTemplateComponent,
                    NavigationGroupComponent,
                    NavigationItemComponent
                ],
                providers: [
                    MediaMatcher,
                    MenuService
                ],
                bootstrap: [AppComponent]
            },] },
];
/** @nocollapse */
AppModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { AppModule, AppComponent as ɵa, HazdevAngularTemplateFooterComponent as ɵd, HazdevAngularTemplateHeaderComponent as ɵe, HazdevAngularTemplateNavigationComponent as ɵh, NavigationGroupComponent as ɵg, NavigationItemComponent as ɵi, HazdevAngularTemplatePageComponent as ɵf, HazdevAngularTemplateComponent as ɵb, MenuService as ɵc };
//# sourceMappingURL=hazdev-template.js.map
