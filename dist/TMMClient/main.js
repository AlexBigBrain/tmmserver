(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/pjalex/SSDEsterno1/Programmazione/Bando/DeployClient/Client/TMMClient/src/main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class HomeComponent {
    constructor(router, route, viewportScroller) {
        this.router = router;
        this.route = route;
        this.viewportScroller = viewportScroller;
        this.routeFragment = '';
        this.screenWidth = 0;
        this.screenHeight = 0;
    }
    ngAfterViewInit() {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((e) => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["Scroll"])).subscribe(e => {
            console.log('ueue');
            console.log(e);
            console.log(e.anchor);
            if (e.anchor) {
                console.log('kekw');
                switch (true) {
                    case this.screenWidth > 768:
                        myMethod('#' + e.anchor, 145);
                        return;
                    case this.screenWidth > 500:
                        myMethod('#' + e.anchor, 120);
                        return;
                    case this.screenWidth < 500:
                        myMethod('#' + e.anchor, 100);
                        return;
                }
            }
        });
    }
    onResize(event) {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        console.log(this.screenHeight);
        console.log(this.screenWidth);
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["ViewportScroller"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function HomeComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 44, vars: 0, consts: [["id", "center", 1, "p-12"], ["id", "search_result"], ["id", "home_p", 1, "p_title", "anchor"], ["id", "TMM_p", 1, "p_title", "anchor"], ["href", "https://www.tuttomeritomio.it/"], ["id", "TMM", 1, "far", "fa-hand-point-right"], ["id", "BOT_p", 1, "p_title", "anchor"], [1, "rowVideo1"], ["id", "p1_video"], ["src", "../../assets/video/2.mp4", "autoplay", "", "controls", "", 1, "video", "m-auto"], [1, "rowVideo2"], ["src", "../../assets/video/1.mp4", "autoplay", "", "controls", "", 1, "video", "m-auto"], ["id", "p2_video", 1, "self-center"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Home page");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quasi, vitae natus dicta autem provident nostrum, incidunt rem quibusdam molestiae animi maiores! Amet, distinctio est nobis dolore voluptatibus ipsam aut fugiat maxime explicabo eum nihil voluptas magnam iusto cumque nemo qui, ea voluptatem earum officia vero id soluta unde sint. Tempora culpa totam impedit architecto ut recusandae rem, magnam nesciunt natus cum molestiae vero nobis exercitationem mollitia? Officia sunt error eum architecto, nihil perspiciatis eos ipsam saepe dolores a tenetur voluptas rem obcaecati cum qui dolore mollitia commodi animi minima et nam dolor! Quidem, earum sunt. Non asperiores fuga a perspiciatis voluptas? Suscipit illo a beatae recusandae dolorem eveniet asperiores id, repudiandae nostrum ab illum ex possimus consequatur, provident debitis vitae nemo autem officia dignissimos sed nesciunt, exercitationem ipsum veniam? Dolorum hic neque quae. Dolore quibusdam omnis aliquid corporis porro, minus ad, necessitatibus ea consequatur a cum possimus itaque labore, quidem maxime consectetur. Sapiente, exercitationem beatae. Et magni sint veritatis maiores pariatur eum, numquam provident esse atque optio debitis nihil ducimus dicta, molestiae aliquam consectetur a ullam repudiandae illum ipsa mollitia nostrum laboriosam voluptate ipsam. Sit corporis quas laborum rem. Repudiandae tempore illum dicta consequuntur doloremque necessitatibus saepe officia omnis aperiam hic assumenda magni natus dolore, beatae voluptates ratione excepturi velit commodi quasi ut itaque. Quas praesentium repellat illo possimus molestiae earum debitis officia obcaecati fugiat numquam eveniet iure, consequatur rem, quisquam laborum tenetur corporis dignissimos sapiente dolorum impedit repudiandae nulla? Autem omnis qui assumenda recusandae. Totam, libero quidem accusantium voluptates fugit voluptas reprehenderit aliquid sint eos minus architecto cupiditate harum laborum nemo delectus accusamus recusandae, culpa commodi quasi beatae molestias. Sequi consectetur quis consequatur magnam praesentium quasi perferendis ipsa, ea officiis facere delectus minus provident harum repellat cupiditate eum voluptates doloremque eius amet quisquam alias. Atque provident molestias dolor aliquam ducimus. Ea quis ut, repellat cum facilis blanditiis voluptatem. Blanditiis omnis totam repellat? Quod quia deserunt minus debitis delectus aspernatur, laborum ad. Consequuntur, praesentium illo, quasi aperiam eveniet harum quisquam, fugiat aut repellendus voluptatum laborum et ipsa error suscipit in ad! Unde, est quasi qui libero deserunt sunt fugiat laborum repellat officiis in iste a sapiente inventore ducimus ipsum, esse facere. Perspiciatis at, quas debitis, aperiam fugit magnam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " #TuttoMeritoMio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quasi, vitae natus dicta autem provident nostrum, incidunt rem quibusdam molestiae animi maiores! Amet, distinctio est nobis dolore voluptatibus ipsam aut fugiat maxime explicabo eum nihil voluptas magnam iusto cumque nemo qui, ea voluptatem earum officia vero id soluta unde sint. Tempora culpa totam impedit architecto ut recusandae rem, magnam nesciunt natus cum molestiae vero nobis exercitationem mollitia? Officia sunt error eum architecto, nihil perspiciatis eos ipsam saepe dolores a tenetur voluptas rem obcaecati cum qui dolore mollitia commodi animi minima et nam dolor! Quidem, earum sunt. Non asperiores fuga a perspiciatis voluptas? Suscipit illo a beatae recusandae dolorem eveniet asperiores id, repudiandae nostrum ab illum ex possimus consequatur, provident debitis vitae nemo autem officia dignissimos sed nesciunt, exercitationem ipsum veniam? Dolorum hic neque quae. Dolore quibusdam omnis aliquid corporis porro, minus ad, necessitatibus ea consequatur a cum possimus itaque labore, quidem maxime consectetur. Sapiente, exercitationem beatae. Et magni sint veritatis maiores pariatur eum, numquam provident esse atque optio debitis nihil ducimus dicta, molestiae aliquam consectetur a ullam repudiandae illum ipsa mollitia nostrum laboriosam voluptate ipsam. Sit corporis quas laborum rem. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "I gruppi di lavoro");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Gruppo programmazione");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quasi, vitae natus dicta autem provident nostrum, incidunt rem quibusdam molestiae animi maiores! Amet, distinctio est nobis dolore voluptatibus ipsam aut fugiat maxime explicabo eum nihil voluptas magnam iusto cumque nemo qui, ea voluptatem earum officia vero id soluta unde sint. Tempora culpa totam impedit architecto ut recusandae rem, magnam nesciunt natus cum molestiae vero nobis exercitationem mollitia? Officia sunt error eum architecto, nihil perspiciatis eos ipsam saepe dolores a tenetur voluptas rem obcaecati cum qui dolore mollitia commodi animi minima et nam dolor! Quidem, earum sunt. Non asperiores fuga a perspiciatis voluptas? Suscipit illo a beatae recusandae dolorem eveniet asperiores id, repudiandae nostrum ab ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Gruppo database");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quasi, vitae natus dicta autem provident nostrum, incidunt rem quibusdam molestiae animi maiores! Amet, distinctio est nobis dolore voluptatibus ipsam aut fugiat maxime explicabo eum nihil voluptas magnam iusto cumque nemo qui, ea voluptatem earum officia vero id soluta unde sint. Tempora culpa totam impedit architecto ut recusandae rem, magnam nesciunt natus cum molestiae vero nobis exercitationem mollitia? Officia sunt error eum architecto, nihil perspiciatis eos ipsam saepe dolores a tenetur voluptas rem obcaecati cum qui dolore mollitia commodi animi minima et nam dolor! Quidem, earum sunt. Non asperiores fuga a perspiciatis voluptas? Suscipit illo a beatae recusandae dolorem eveniet asperiores id, repudiandae nostrum ab ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Gruppo traduzione");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quasi, vitae natus dicta autem provident nostrum, incidunt rem quibusdam molestiae animi maiores! Amet, distinctio est nobis dolore voluptatibus ipsam aut fugiat maxime explicabo eum nihil voluptas magnam iusto cumque nemo qui, ea voluptatem earum officia vero id soluta unde sint. Tempora culpa totam impedit architecto ut recusandae rem, magnam nesciunt natus cum molestiae vero nobis exercitationem mollitia? Officia sunt error eum architecto, nihil perspiciatis eos ipsam saepe dolores a tenetur voluptas rem obcaecati cum qui dolore mollitia commodi animi minima et nam dolor! Quidem, earum sunt. Non asperiores fuga a perspiciatis voluptas? Suscipit illo a beatae recusandae dolorem eveniet asperiores id, repudiandae nostrum ab ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Gruppo comunicazione");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quasi, vitae natus dicta autem provident nostrum, incidunt rem quibusdam molestiae animi maiores! Amet, distinctio est nobis dolore voluptatibus ipsam aut fugiat maxime explicabo eum nihil voluptas magnam iusto cumque nemo qui, ea voluptatem earum officia vero id soluta unde sint. Tempora culpa totam impedit architecto ut recusandae rem, magnam nesciunt natus cum molestiae vero nobis exercitationem mollitia? Officia sunt error eum architecto, nihil perspiciatis eos ipsam saepe dolores a tenetur voluptas rem obcaecati cum qui dolore mollitia commodi animi minima et nam dolor! Quidem, earum sunt. Non asperiores fuga a perspiciatis voluptas? Suscipit illo a beatae recusandae dolorem eveniet asperiores id, repudiandae nostrum ab ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Cos'\u00E9 un BOT?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quasi, vitae natus dicta autem provident nostrum, incidunt rem quibusdam molestiae animi maiores! Amet, distinctio est nobis dolore voluptatibus ipsam aut fugiat maxime explicabo eum nihil voluptas magnam iusto cumque nemo qui, ea voluptatem earum officia vero id soluta unde sint. Tempora culpa totam impedit architecto ut recusandae rem, magnam nesciunt natus cum molestiae vero nobis exercitationem mollitia? Officia sunt error eum architecto, nihil perspiciatis eos ipsam saepe dolores a tenetur voluptas rem obcaecati cum qui dolore mollitia commodi animi minima et nam dolor! Quidem, earum sunt. Non asperiores fuga a perspiciatis voluptas? Suscipit illo a beatae recusandae dolorem eveniet asperiores id, repudiandae nostrum ab illum ex possimus consequatur, provident debitis vitae nemo autem officia dignissimos sed nesciunt, exercitationem ipsum veniam? Dolorum hic neque quae. Dolore quibusdam omnis aliquid corporis porro, minus ad, necessitatibus ea consequatur a cum possimus itaque labore, quidem maxime consectetur. Sapiente, exercitationem beatae. Et magni sint veritatis maiores pariatur eum, numquam provident esse atque optio debitis nihil ducimus dicta, molestiae aliquam consectetur a ullam repudiandae illum ipsa mollitia nostrum laboriosam voluptate ipsam. Sit corporis quas laborum rem. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "video", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "video", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quasi, vitae natus dicta autem provident nostrum, incidunt rem quibusdam molestiae animi maiores! Amet, distinctio est nobis dolore voluptatibus ipsam aut fugiat maxime explicabo eum nihil voluptas magnam iusto cumque nemo qui, ea voluptatem earum officia vero id soluta unde sint. Tempora culpa totam impedit architecto ut recusandae rem, magnam nesciunt natus cum molestiae vero nobis exercitationem mollitia? Officia sunt error eum architecto, nihil perspiciatis eos ipsam saepe dolores a tenetur voluptas rem obcaecati cum qui dolore mollitia commodi animi minima et nam dolor! Quidem, earum sunt. Non asperiores fuga a perspiciatis voluptas? Suscipit illo a beatae recusandae dolorem eveniet asperiores id, repudiandae nostrum ab illum ex possimus consequatur, provident debitis vitae nemo autem officia dignissimos sed nesciunt, exercitationem ipsum veniam? Dolorum hic neque quae. Dolore quibusdam omnis aliquid corporis porro, minus ad, necessitatibus ea consequatur a cum possimus itaque labore, quidem maxime consectetur. Sapiente, exercitationem beatae. Et magni sint veritatis maiores pariatur eum, numquam provident esse atque optio debitis nihil ducimus dicta, molestiae aliquam consectetur a ullam repudiandae illum ipsa mollitia nostrum laboriosam voluptate ipsam. Sit corporis quas laborum rem. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, styles: ["hr[_ngcontent-%COMP%] {\n  border: 0px;\n  border-top: 2px dashed #1c6b30;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.rowVideo1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column-reverse;\n}\n\n.rowVideo2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n@media screen and (min-width: 1110px) {\n  .rowVideo1[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n\n  .rowVideo2[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n\n\n\n\n\n#center[_ngcontent-%COMP%] {\n  background-image: url('gplay.png');\n  position: relative;\n  font-family: \"Louis George Cafe Regular\";\n  font-size: 20px;\n}\n\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  color: #1c6b30;\n}\n\n#TMM[_ngcontent-%COMP%] {\n  color: #1c6b30;\n  opacity: 0.5;\n  transition: 0.3s;\n}\n\n#TMM[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.p_title[_ngcontent-%COMP%] {\n  font-family: \"Typo Latin Serif Regular\";\n  color: #1c6b30;\n}\n\np[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\n.video[_ngcontent-%COMP%] {\n  width: 500px;\n  \n}\n\n#p1_video[_ngcontent-%COMP%] {\n  padding-right: 50px;\n  margin: auto;\n}\n\n#p2_video[_ngcontent-%COMP%] {\n  padding-left: 50px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxXQUFBO0VBQ0EsOEJBQUE7QUFDSDs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBRUE7RUFDRyxhQUFBO0VBQ0EsOEJBQUE7QUFDSDs7QUFFQTtFQUNHLGFBQUE7RUFDQSxzQkFBQTtBQUNIOztBQUVBO0VBQ0k7SUFDRCxtQkFBQTtFQUNEOztFQUVGO0lBQ0csbUJBQUE7RUFDRDtBQUNGOztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQUFBOztBQXNCQSxtQkFBQTs7QUFDQTtFQUNHLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGVBQUE7QUFGSDs7QUFLQTtFQUNHLGNBQUE7QUFGSDs7QUFLQTtFQUNHLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFGSDs7QUFLQTtFQUNHLFVBQUE7QUFGSDs7QUFNQTtFQUNHLHVDQUFBO0VBQ0EsY0FBQTtBQUhIOztBQU1BO0VBQ0csbUJBQUE7QUFISDs7QUFNQTtFQUNHLFlBQUE7RUFDQSxtQkFBQTtBQUhIOztBQU1BO0VBQ0csbUJBQUE7RUFDQSxZQUFBO0FBSEg7O0FBTUE7RUFDRyxrQkFBQTtFQUNBLFlBQUE7QUFISCIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xuICAgYm9yZGVyOiAwcHg7XG4gICBib3JkZXItdG9wOiAycHggZGFzaGVkIHJnYmEoMjgsIDEwNywgNDgsIDEpO1xufVxuXG4ucm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5yb3dWaWRlbzF7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xufVxuXG4ucm93VmlkZW8ye1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExMTBweCkge1xuICAgIC5yb3dWaWRlbzF7XG4gICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4ucm93VmlkZW8ye1xuICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbn1cblxuXG4vKiAuZmxhZyB7XG4gICBoZWlnaHQ6IDQwcHg7XG4gICBwYWRkaW5nOiAxMHB4O1xufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgb3BhY2l0eTogMDtcbiAgIHdpZHRoOiAwO1xuICAgaGVpZ2h0OiAwO1xufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0raW1nIHtcbiAgIGN1cnNvcjogcG9pbnRlcjtcbiAgIG9wYWNpdHk6IDAuNDtcbiAgIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkK2ltZyB7XG4gICBvcGFjaXR5OiAxO1xufSAqL1xuXG4vKiBjb3JwbyBjZW50cmFsZSAqL1xuI2NlbnRlciB7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdGV4dHVyZXMvZ3BsYXkucG5nXCIpO1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgZm9udC1mYW1pbHk6ICdMb3VpcyBHZW9yZ2UgQ2FmZSBSZWd1bGFyJztcbiAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaDIsIGgzIHtcbiAgIGNvbG9yOiByZ2JhKDI4LCAxMDcsIDQ4LCAxKTtcbn1cblxuI1RNTSB7XG4gICBjb2xvcjogcmdiYSgyOCwgMTA3LCA0OCwgMSk7XG4gICBvcGFjaXR5OiAwLjU7XG4gICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4jVE1NOmhvdmVyIHtcbiAgIG9wYWNpdHk6IDE7XG59XG5cblxuLnBfdGl0bGUge1xuICAgZm9udC1mYW1pbHk6ICdUeXBvIExhdGluIFNlcmlmIFJlZ3VsYXInO1xuICAgY29sb3I6IHJnYmEoMjgsIDEwNywgNDgsIDEpO1xufVxuXG5wIHtcbiAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi52aWRlbyB7XG4gICB3aWR0aDogNTAwcHg7XG4gICAvKiBoZWlnaHQ6IDUwMHB4OyAqL1xufVxuXG4jcDFfdmlkZW8ge1xuICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgIG1hcmdpbjogYXV0bztcbn1cblxuI3AyX3ZpZGVvIHtcbiAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgIG1hcmdpbjogYXV0bztcbn1cblxuIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "E9Qs":
/*!*********************************!*\
  !*** ./src/app/word.service.ts ***!
  \*********************************/
/*! exports provided: WordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordService", function() { return WordService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class WordService {
    constructor(http) {
        this.http = http;
        this.url = 'https://tmmserver3.herokuapp.com/api';
    }
    /*
    private handleError(error: HttpErrorResponse): any {
      if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // Return an observable with a user-facing error message.
      return error.error;
    }
    */
    getWordInfo(Word) {
        const params = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('word', Word) };
        return this.http.get(this.url, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(5000)));
    }
}
WordService.ɵfac = function WordService_Factory(t) { return new (t || WordService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
WordService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: WordService, factory: WordService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "RZyy":
/*!****************************************!*\
  !*** ./src/app/word/word.component.ts ***!
  \****************************************/
/*! exports provided: WordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordComponent", function() { return WordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _word_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../word.service */ "E9Qs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function WordComponent_div_1_div_1_div_6_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ExampleData_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ExampleData_r12.Example);
} }
function WordComponent_div_1_div_1_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WordComponent_div_1_div_1_div_6_div_3_div_1_Template, 3, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ExampleData_r12 = ctx.$implicit;
    const DescriptionData_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", DescriptionData_r10.descriptionID === ExampleData_r12.descriptionID);
} }
function WordComponent_div_1_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WordComponent_div_1_div_1_div_6_div_3_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const DescriptionData_r10 = ctx.$implicit;
    const wordData_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](DescriptionData_r10.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", wordData_r4.Examples);
} }
function WordComponent_div_1_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Sinonim_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](Sinonim_r17);
} }
function WordComponent_div_1_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Sinonim_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](Sinonim_r18);
} }
function WordComponent_div_1_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Traslation_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](Traslation_r19);
} }
function WordComponent_div_1_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Translation_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](Translation_r20);
} }
function WordComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Descrizioni:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WordComponent_div_1_div_1_div_6_Template, 5, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sinonimi Italiani:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WordComponent_div_1_div_1_div_10_Template, 3, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "English Sinonims:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WordComponent_div_1_div_1_div_13_Template, 3, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Traduzioni Italiane:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, WordComponent_div_1_div_1_div_16_Template, 3, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "English Translations:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, WordComponent_div_1_div_1_div_19_Template, 3, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wordData_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", wordData_r4.Word.specificWord, " -- ", wordData_r4.Word.Language, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", wordData_r4.Descriptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", wordData_r4.SinonimsIT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", wordData_r4.SinonimsEN);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", wordData_r4.TranslasionsIT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", wordData_r4.TranslasionsEN);
} }
function WordComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WordComponent_div_1_div_1_Template, 20, 7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.wordInfo.data.usable);
} }
function WordComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "In attesa di risposta dal database");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WordComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Non \u00E8 stato possibile connettersi con il database...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WordComponent {
    constructor(wordService, route) {
        this.wordService = wordService;
        this.route = route;
        this.wordInfo = {
            data: {
                usable: undefined,
                unusable: undefined
            },
            status: "NotLoadedYet"
        };
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.wordInfo = {
                data: {
                    usable: undefined,
                    unusable: undefined
                },
                status: "NotLoadedYet"
            };
            this.wordService.getWordInfo(params.word).subscribe((res) => {
                this.wordInfo = res;
                console.log(res);
            }, (err) => {
                this.wordInfo.status = 'error';
                console.log(this.wordInfo.status);
            });
            setTimeout(() => {
                if (this.wordInfo.status === 'NotLoadedYet') {
                    this.wordInfo.status = 'error';
                }
            }, 5000);
        });
    }
    wordStatus(wordInfo) {
        switch (wordInfo.status) {
            case 'error':
                return -1;
            default: //NotLoadedYet
                return 0;
            case 'NotUsableWord':
                return 1;
            case 'AddedWord':
                return 2;
            case 'FoundWord':
                return 3;
        }
    }
}
WordComponent.ɵfac = function WordComponent_Factory(t) { return new (t || WordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_word_service__WEBPACK_IMPORTED_MODULE_1__["WordService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
WordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WordComponent, selectors: [["app-word"]], decls: 4, vars: 3, consts: [[1, "relative", "p-12"], [4, "ngIf"], [4, "ngFor", "ngForOf"]], template: function WordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WordComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WordComponent_div_2_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WordComponent_div_3_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wordStatus(ctx.wordInfo) === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wordStatus(ctx.wordInfo) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wordStatus(ctx.wordInfo) === -1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3JkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AppComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.mobile_menu = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["home"]; };
function AppComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Chi siamo?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Cos'\u00E8 un BOT?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0));
} }
const _c1 = function () { return ["home/"]; };
function AppComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_14_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.mobile_menu = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_14_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.mobile_menu = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_14_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.mobile_menu = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Chi siamo?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_14_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.mobile_menu = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Cos'\u00E8 un BOT?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("m-0 w-full min-h-screen fixed z-50 right-0 top-0 transform-gpu transition-all duration-500 bg-gray-100 ", ctx_r3.mobileTranslation(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c1));
} }
function AppComponent_h1_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "created by Alessandro Custodi & Design Team, tutti facenti parte del bando #TuttoMeritoMio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(router, route, viewportScroller) {
        this.router = router;
        this.route = route;
        this.viewportScroller = viewportScroller;
        this.screenWidth = 0;
        this.screenHeight = 0;
        this.word = '';
        this.title = 'MyWordBOT';
        this.mobile_menu = false;
        this.data = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('');
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
        this.options = ['One', 'Two', 'Three'];
    }
    mobileTranslation() {
        return this.mobile_menu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0";
    }
    assignColumnStart(element) {
        switch (element) {
            default:
                return "";
            case 1:
                return "col-start-1";
            case 2:
                return "col-start-2";
            case 3:
                return "col-start-3";
            case 4:
                return "col-start-4";
            case 5:
                return "col-start-5";
            case 6:
                return "col-start-6";
            case 7:
                return "col-start-7";
            case 8:
                return "col-start-8";
            case 9:
                return "col-start-9";
            case 10:
                return "col-start-10";
            case 11:
                return "col-start-11";
            case 12:
                return "col-start-12";
        }
    }
    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(value => this._filter(value)));
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
    }
    onResize(event) {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        console.log(this.screenHeight);
        console.log(this.screenWidth);
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["ViewportScroller"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 33, vars: 7, consts: [[1, "relative", "w-full", "min-h-full"], [1, "m-0", "relative"], ["id", "header", 1, "grid", "grid-cols-12", "pt-3", "pb-3"], ["src", "../assets/images/MyWordBOT logo.png", "id", "BOT_logo", 1, "md:col-span-2", "md:col-start-2", "col-span-3", "self-center", "justify-self-center"], ["src", "../assets/logo/logo.svg", "id", "main_header", 1, "w-80", "col-span-7", "md:col-span-6", "self-center", "justify-self-center"], ["href", "https://www.tuttomeritomio.it/", "target", "_blank", "rel", "noopener noreferrer", "class", "col-span-2 self-center justify-self-cente block", 4, "ngIf"], ["class", "flex items-center justify-center cursor-pointer col-start-11 col-span-2", 3, "click", 4, "ngIf"], ["id", "navbar", 1, "sticky", "grid", "grid-cols-12"], ["class", "buttons flex col-span-8 lg:col-start-2 lg:col-span-7", 4, "ngIf"], ["id", "search_bar", 1, "md:col-start-9", "md:col-span-4", "col-span-full", "justify-center", 2, "padding-right", "10px"], ["type", "search", "id", "search_box", "name", "word", "placeholder", "Cerca...", 1, "w-4/5", 3, "ngModel", "ngModelChange"], ["type", "submit", "id", "search_btn", 3, "routerLink"], ["id", "search_img", 1, "fa", "fa-search"], [3, "class", 4, "ngIf"], [2, "padding-bottom", "110px"], [1, "absolute", "bottom-0", "w-full"], ["id", "footer"], ["href", "https://www.tuttomeritomio.it/", "target", "_blank", "rel", "noopener noreferrer"], ["src", "../assets/images/tmm logo.png", "id", "TMM_logo_S"], [1, "row"], ["id", "follow_us"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.instagram.com/tuttomeritomio/", 1, "icon"], [1, "fab", "fa-instagram"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.addtoany.com/add_to/twitter?linkurl=https%3A%2F%2Fwww.tuttomeritomio.it%2F&linkname=TuttoMeritoMio%20-%20Zero%20ostacoli%20al%20talento&linknote=", 1, "icon"], [1, "fab", "fa-twitter"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.facebook.com/tuttomeritomio", 1, "icon"], [1, "fab", "fa-facebook-f"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://api.whatsapp.com/send?text=TuttoMeritoMio%20-%20Zero%20ostacoli%20al%20talento%20https%3A%2F%2Fwww.tuttomeritomio.it%2F", 1, "icon"], [1, "fab", "fa-whatsapp"], ["style", "display: none;", 4, "ngIf"], ["href", "https://www.tuttomeritomio.it/", "target", "_blank", "rel", "noopener noreferrer", 1, "col-span-2", "self-center", "justify-self-cente", "block"], ["src", "../assets/images/tmm logo.png", "id", "TMM_logo_L", 1, ""], [1, "flex", "items-center", "justify-center", "cursor-pointer", "col-start-11", "col-span-2", 3, "click"], ["src", "../assets/images/menu.svg", 1, "h-8"], [1, "buttons", "flex", "col-span-8", "lg:col-start-2", "lg:col-span-7"], ["fragment", "home_p", 3, "routerLink"], [1, "fas", "fa-home"], ["fragment", "TMM_p", 3, "routerLink"], [1, "fas", "fa-users"], ["fragment", "BOT_p", 3, "routerLink"], [1, "fab", "fa-telegram-plane"], [1, "grid", "grid-cols-12", "pt-3", "pb-3"], ["href", "https://www.tuttomeritomio.it/", "target", "_blank", "rel", "noopener noreferrer", 1, "flex", "items-center", "justify-center", "col-span-3"], ["src", "../assets/images/tmm logo.png", 1, "object-contain", 2, "height", "120px"], ["src", "../assets/images/close.svg", 1, "h-8", "text-center"], [1, "mb-auto", "grid", "grid-rows-3", 2, "height", "60vh"], [1, "refmobilemenu", 3, "routerLink", "click"], ["fragment", "TMM_p", 1, "refmobilemenu", 3, "routerLink", "click"], ["fragment", "BOT_p", 1, "refmobilemenu", 3, "routerLink", "click"], [2, "display", "none"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "figure", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AppComponent_a_6_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AppComponent_div_7_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AppComponent_div_9_Template, 10, 6, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_11_listener($event) { return ctx.word = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AppComponent_div_14_Template, 16, 9, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "footer", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Seguici sui social! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, AppComponent_h1_32_Template, 2, 0, "h1", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx.screenWidth < 768));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.screenWidth < 768);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx.screenWidth < 768));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.word);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "word/", ctx.word, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.screenWidth < 768);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.screenWidth === 666);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["hr[_ngcontent-%COMP%] {\n  border: 0px;\n  border-top: 2px dashed #1c6b30;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.rowVideo1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column-reverse;\n}\n\n.rowVideo2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n@media screen and (min-width: 1110px) {\n  .rowVideo1[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n\n  .rowVideo2[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n\n#search_bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n\n\n#header[_ngcontent-%COMP%] {\n  background-image: url('topography.png');\n  background-color: #3ab1e4;\n  background-blend-mode: color-burn;\n}\n\n#main_header[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Typo Latin Serif Regular\";\n  font-size: 60px;\n  text-align: center;\n  padding: 1rem 0px;\n  border: 0px;\n  margin: 0px;\n}\n\n#BOT_logo[_ngcontent-%COMP%] {\n  width: 120px;\n}\n\n@media screen and (min-width: 768px) {\n  #BOT_logo[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n}\n\n#TMM_logo_L[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n\n\n#navbar[_ngcontent-%COMP%] {\n  background-color: #176e96;\n  z-index: 2;\n  width: 100%;\n  overflow: hidden;\n}\n\n.sticky[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n}\n\n.sticky[_ngcontent-%COMP%]    + #center[_ngcontent-%COMP%] {\n  z-index: 1;\n  padding: 50px 50px 50px 50px;\n}\n\n.p_title[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  margin-top: -2em;\n  height: 2em;\n}\n\n.refmobilemenu[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgba(37, 99, 235, var(--tw-bg-opacity));\n}\n\n.refmobilemenu[_ngcontent-%COMP%]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(220, 38, 38, var(--tw-bg-opacity));\n}\n\n.refmobilemenu[_ngcontent-%COMP%] {\n  align-self: center;\n  justify-self: center;\n  margin: 0.75rem;\n  padding: 0.5rem;\n  text-align: center;\n  width: 12rem;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.refmobilemenu[_ngcontent-%COMP%]:hover {\n  --tw-scale-x: 1.1;\n  --tw-scale-y: 1.1;\n  --tw-translate-y: -0.25rem;\n}\n\n.refmobilemenu[_ngcontent-%COMP%] {\n  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 500ms;\n}\n\n#navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Louis George Cafe Regular\";\n  font-size: 20px;\n  text-decoration: none;\n  text-align: center;\n  color: white;\n  opacity: 0.5;\n  padding: 15px 25px;\n  transition: 0.3s;\n}\n\n#navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n\n\n#search_box[_ngcontent-%COMP%] {\n  float: right;\n  font-size: 17px;\n  padding: 10px;\n  border: none;\n  margin: 8px 0px 8px 8px;\n}\n\n@media screen and (min-width: 768px) {\n  #search_box[_ngcontent-%COMP%] {\n    width: 25vw;\n  }\n}\n\n#search_btn[_ngcontent-%COMP%] {\n  margin: 8px 0px;\n  width: 50px;\n  background-color: #3ab1e4;\n  border: none;\n  transition: 0.3s;\n}\n\n#search_btn[_ngcontent-%COMP%]:hover {\n  background-color: #1c6b30;\n  cursor: pointer;\n}\n\n#search_img[_ngcontent-%COMP%] {\n  align-self: center;\n  font-size: 1.5em;\n  color: white;\n}\n\n\n\n#center[_ngcontent-%COMP%] {\n  background-image: url('gplay.png');\n  position: relative;\n  font-family: \"Louis George Cafe Regular\";\n  font-size: 20px;\n  padding: 50px;\n}\n\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  color: #1c6b30;\n}\n\n#TMM[_ngcontent-%COMP%] {\n  color: #1c6b30;\n  opacity: 0.5;\n  transition: 0.3s;\n}\n\n#TMM[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.p_title[_ngcontent-%COMP%] {\n  font-family: \"Typo Latin Serif Regular\";\n  color: #1c6b30;\n}\n\np[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\n.video[_ngcontent-%COMP%] {\n  width: 500px;\n  \n}\n\n#p1_video[_ngcontent-%COMP%] {\n  padding-right: 50px;\n  margin: auto;\n}\n\n#p2_video[_ngcontent-%COMP%] {\n  padding-left: 50px;\n  margin: auto;\n}\n\n\n\n#footer[_ngcontent-%COMP%] {\n  background-image: url('topography.png');\n  background-color: #1d7eb2;\n  background-blend-mode: color-burn;\n  padding: 10px 0px;\n  display: flex;\n  justify-content: space-around;\n}\n\n#TMM_logo_S[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100px;\n}\n\n#social[_ngcontent-%COMP%] {\n  margin: auto 0px;\n}\n\n#follow_us[_ngcontent-%COMP%] {\n  font-family: \"Louis George Cafe Regular\";\n  font-size: 24px;\n  padding-right: 50px;\n  margin: auto;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 2em;\n  color: black;\n  padding: 0px 15px;\n  margin: auto;\n  transition: 0.3s;\n}\n\n.icon[_ngcontent-%COMP%]:hover {\n  font-size: 3em;\n  color: #1c6b30;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy9saWIvbGliL3N1YnN0aXR1dGVDbGFzc0FwcGx5QXRSdWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLFdBQUE7RUFDQSw4QkFBQTtBQUNIOztBQUVBO0VBQ0csYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFDSDs7QUFFQTtFQUNHLGFBQUE7RUFDQSw4QkFBQTtBQUNIOztBQUVBO0VBQ0csYUFBQTtFQUNBLHNCQUFBO0FBQ0g7O0FBRUE7RUFDSTtJQUNELG1CQUFBO0VBQ0Q7O0VBRUY7SUFDRyxtQkFBQTtFQUNEO0FBQ0Y7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQSxXQUFBOztBQUNBO0VBQ0csdUNBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0FBQUg7O0FBR0E7RUFDRyxZQUFBO0VBQ0EsdUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQUg7O0FBR0E7RUFDRyxZQUFBO0FBQUg7O0FBR0E7RUFDRztJQUNHLFlBQUE7RUFBSjtBQUNGOztBQUtBO0VBQ0csWUFBQTtBQUhIOztBQU1BLFdBQUE7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFRQTtFQUNHLGdCQUFBO0VBQ0EsTUFBQTtBQUxIOztBQVFBO0VBQ0csVUFBQTtFQUNBLDRCQUFBO0FBTEg7O0FBUUE7RUFDRyxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUxIOztBQVFBO0VDOUZBLGtCQUFtQjtFQUFuQix5REFBbUI7QUQwRm5COztBQzFGQTtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjs7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkIsb0JBQW1CO0VBQW5CLGVBQW1CO0VBQW5CLGVBQW1CO0VBQW5CLGtCQUFtQjtFQUFuQixZQUFtQjtFQUFuQixtQkFBbUI7RUFBbkIsbUJBQW1CO0VBQW5CLGNBQW1CO0VBQW5CLGNBQW1CO0VBQW5CLGNBQW1CO0VBQW5CLGVBQW1CO0VBQW5CLGVBQW1CO0VBQW5CO0FBQW1COztBQUFuQjtFQUFBLGlCQUFtQjtFQUFuQixpQkFBbUI7RUFBbkI7QUFBbUI7O0FBQW5CO0VBQUEseUlBQW1CO0VBQW5CLGlJQUFtQjtFQUFuQiwwSkFBbUI7RUFBbkIsd0RBQW1CO0VBQW5CLDBCQUFtQjtFQUFuQix3REFBbUI7RUFBbkI7QUFBbUI7O0FEbUduQjtFQUNHLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFOSDs7QUFTQTtFQUNHLFVBQUE7QUFOSDs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FBQTs7QUFxQkE7RUFDRyxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFOSDs7QUFTQTtFQUNJO0lBQ0EsV0FBQTtFQU5GO0FBQ0Y7O0FBVUE7RUFDRyxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBUkg7O0FBV0E7RUFDRyx5QkFBQTtFQUNBLGVBQUE7QUFSSDs7QUFXQTtFQUNHLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBUkg7O0FBV0EsbUJBQUE7O0FBQ0E7RUFDRyxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQVJIOztBQVdBO0VBQ0csY0FBQTtBQVJIOztBQVdBO0VBQ0csY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQVJIOztBQVdBO0VBQ0csVUFBQTtBQVJIOztBQVlBO0VBQ0csdUNBQUE7RUFDQSxjQUFBO0FBVEg7O0FBWUE7RUFDRyxtQkFBQTtBQVRIOztBQVlBO0VBQ0csWUFBQTtFQUNBLG1CQUFBO0FBVEg7O0FBWUE7RUFDRyxtQkFBQTtFQUNBLFlBQUE7QUFUSDs7QUFZQTtFQUNHLGtCQUFBO0VBQ0EsWUFBQTtBQVRIOztBQVlBLFdBQUE7O0FBQ0E7RUFDRyx1Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQVRIOztBQVlBO0VBQ0csYUFBQTtFQUNBLGFBQUE7QUFUSDs7QUFZQTtFQUNHLGdCQUFBO0FBVEg7O0FBWUE7RUFDRyx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFUSDs7QUFZQTtFQUNHLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFUSDs7QUFZQTtFQUNHLGNBQUE7RUFDQSxjQUFBO0FBVEgiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xuICAgYm9yZGVyOiAwcHg7XG4gICBib3JkZXItdG9wOiAycHggZGFzaGVkIHJnYmEoMjgsIDEwNywgNDgsIDEpO1xufVxuXG4ucm93IHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5yb3dWaWRlbzF7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xufVxuXG4ucm93VmlkZW8ye1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExMTBweCkge1xuICAgIC5yb3dWaWRlbzF7XG4gICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4ucm93VmlkZW8ye1xuICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbn1cblxuI3NlYXJjaF9iYXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4vKiBoZWFkZXIgKi9cbiNoZWFkZXIge1xuICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL3RleHR1cmVzL3RvcG9ncmFwaHkucG5nXCIpO1xuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1OCwgMTc3LCAyMjgsIDEpO1xuICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBjb2xvci1idXJuO1xufVxuXG4jbWFpbl9oZWFkZXIge1xuICAgY29sb3I6IGJsYWNrO1xuICAgZm9udC1mYW1pbHk6ICdUeXBvIExhdGluIFNlcmlmIFJlZ3VsYXInO1xuICAgZm9udC1zaXplOiA2MHB4O1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgcGFkZGluZzogMXJlbSAwcHg7XG4gICBib3JkZXI6IDBweDtcbiAgIG1hcmdpbjogMHB4XG59XG5cbiNCT1RfbG9nbyB7XG4gICB3aWR0aDogMTIwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAjQk9UX2xvZ28ge1xuICAgICAgd2lkdGg6IDE1MHB4O1xuICAgfVxufVxuXG5cblxuI1RNTV9sb2dvX0wge1xuICAgd2lkdGg6IDE1MHB4O1xufVxuXG4vKiBuYXZiYXIgKi9cbiNuYXZiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMsIDExMCwgMTUwLCAxKTtcbiAgICB6LWluZGV4OiAyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cblxuXG4uc3RpY2t5IHtcbiAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICB0b3A6IDA7XG59XG5cbi5zdGlja3krI2NlbnRlciB7XG4gICB6LWluZGV4OiAxO1xuICAgcGFkZGluZzogNTBweCA1MHB4IDUwcHggNTBweDtcbn1cblxuLnBfdGl0bGU6YmVmb3JlIHtcbiAgIGNvbnRlbnQ6IFwiXCI7XG4gICBkaXNwbGF5OiBibG9jaztcbiAgIG1hcmdpbi10b3A6IC0yZW07XG4gICBoZWlnaHQ6IDJlbTtcbn1cblxuLnJlZm1vYmlsZW1lbnV7XG4gICBAYXBwbHkganVzdGlmeS1zZWxmLWNlbnRlciB0ZXh0LWNlbnRlciBzZWxmLWNlbnRlciB3LTQ4IHAtMiBtLTMgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgYmctYmx1ZS02MDAgaG92ZXI6YmctcmVkLTYwMCB0cmFuc2Zvcm0gaG92ZXI6LXRyYW5zbGF0ZS15LTEgaG92ZXI6c2NhbGUtMTEwO1xuXG59XG5cbiNuYXZiYXIgYSB7XG4gICBmb250LWZhbWlseTogJ0xvdWlzIEdlb3JnZSBDYWZlIFJlZ3VsYXInO1xuICAgZm9udC1zaXplOiAyMHB4O1xuICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgY29sb3I6IHdoaXRlO1xuICAgb3BhY2l0eTogMC41O1xuICAgcGFkZGluZzogMTVweCAyNXB4O1xuICAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuI25hdmJhciBhOmhvdmVyIHtcbiAgIG9wYWNpdHk6IDE7XG59XG5cbi8qIC5mbGFnIHtcbiAgIGhlaWdodDogNDBweDtcbiAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICBvcGFjaXR5OiAwO1xuICAgd2lkdGg6IDA7XG4gICBoZWlnaHQ6IDA7XG59XG5cbmlucHV0W3R5cGU9XCJyYWRpb1wiXStpbWcge1xuICAgY3Vyc29yOiBwb2ludGVyO1xuICAgb3BhY2l0eTogMC40O1xuICAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQraW1nIHtcbiAgIG9wYWNpdHk6IDE7XG59ICovXG4jc2VhcmNoX2JveCB7XG4gICBmbG9hdDogcmlnaHQ7XG4gICBmb250LXNpemU6IDE3cHg7XG4gICBwYWRkaW5nOiAxMHB4O1xuICAgYm9yZGVyOiBub25lO1xuICAgbWFyZ2luOiA4cHggMHB4IDhweCA4cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgI3NlYXJjaF9ib3gge1xuICAgIHdpZHRoOiAyNXZ3O1xuICAgIH1cbn1cblxuXG4jc2VhcmNoX2J0biB7XG4gICBtYXJnaW46IDhweCAwcHg7XG4gICB3aWR0aDogNTBweDtcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTgsIDE3NywgMjI4LCAxKTtcbiAgIGJvcmRlcjogbm9uZTtcbiAgIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbiNzZWFyY2hfYnRuOmhvdmVyIHtcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjgsIDEwNywgNDgsIDEpO1xuICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jc2VhcmNoX2ltZyB7XG4gICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICBmb250LXNpemU6IDEuNWVtO1xuICAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBjb3JwbyBjZW50cmFsZSAqL1xuI2NlbnRlciB7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvdGV4dHVyZXMvZ3BsYXkucG5nXCIpO1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgZm9udC1mYW1pbHk6ICdMb3VpcyBHZW9yZ2UgQ2FmZSBSZWd1bGFyJztcbiAgIGZvbnQtc2l6ZTogMjBweDtcbiAgIHBhZGRpbmc6IDUwcHg7XG59XG5cbmgyLCBoMyB7XG4gICBjb2xvcjogcmdiYSgyOCwgMTA3LCA0OCwgMSk7XG59XG5cbiNUTU0ge1xuICAgY29sb3I6IHJnYmEoMjgsIDEwNywgNDgsIDEpO1xuICAgb3BhY2l0eTogMC41O1xuICAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuI1RNTTpob3ZlciB7XG4gICBvcGFjaXR5OiAxO1xufVxuXG5cbi5wX3RpdGxlIHtcbiAgIGZvbnQtZmFtaWx5OiAnVHlwbyBMYXRpbiBTZXJpZiBSZWd1bGFyJztcbiAgIGNvbG9yOiByZ2JhKDI4LCAxMDcsIDQ4LCAxKTtcbn1cblxucCB7XG4gICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4udmlkZW8ge1xuICAgd2lkdGg6IDUwMHB4O1xuICAgLyogaGVpZ2h0OiA1MDBweDsgKi9cbn1cblxuI3AxX3ZpZGVvIHtcbiAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICBtYXJnaW46IGF1dG87XG59XG5cbiNwMl92aWRlbyB7XG4gICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICBtYXJnaW46IGF1dG87XG59XG5cbi8qIGZvb3RlciAqL1xuI2Zvb3RlciB7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvdGV4dHVyZXMvdG9wb2dyYXBoeS5wbmdcIik7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI5LCAxMjYsIDE3OCwgMSk7XG4gICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGNvbG9yLWJ1cm47XG4gICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuI1RNTV9sb2dvX1Mge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGhlaWdodDogMTAwcHg7XG59XG5cbiNzb2NpYWwge1xuICAgbWFyZ2luOiBhdXRvIDBweDtcbn1cblxuI2ZvbGxvd191cyB7XG4gICBmb250LWZhbWlseTogJ0xvdWlzIEdlb3JnZSBDYWZlIFJlZ3VsYXInO1xuICAgZm9udC1zaXplOiAyNHB4O1xuICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgIG1hcmdpbjogYXV0bztcbn1cblxuLmljb24ge1xuICAgZm9udC1zaXplOiAyZW07XG4gICBjb2xvcjogYmxhY2s7XG4gICBwYWRkaW5nOiAwcHggMTVweDtcbiAgIG1hcmdpbjogYXV0bztcbiAgIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5pY29uOmhvdmVyIHtcbiAgIGZvbnQtc2l6ZTogM2VtO1xuICAgY29sb3I6IHJnYmEoMjgsIDEwNywgNDgsIDEpO1xufVxuIiwiQHRhaWx3aW5kIGJhc2U7XG5AdGFpbHdpbmQgY29tcG9uZW50cztcbkB0YWlsd2luZCB1dGlsaXRpZXM7Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _word_word_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./word/word.component */ "RZyy");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













/**
 * NgModule that includes all Material modules.
*/
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _word_word_component__WEBPACK_IMPORTED_MODULE_10__["WordComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _word_word_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./word/word.component */ "RZyy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routerOptions = {
    onSameUrlNavigation: 'reload'
    // ...any other options you'd like to use
};
const routes = [
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'word/:word',
        component: _word_word_component__WEBPACK_IMPORTED_MODULE_2__["WordComponent"]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, routerOptions)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map