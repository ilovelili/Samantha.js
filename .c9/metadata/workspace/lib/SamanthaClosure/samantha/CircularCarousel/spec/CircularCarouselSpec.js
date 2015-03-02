{"filter":false,"title":"CircularCarouselSpec.js","tooltip":"/lib/SamanthaClosure/samantha/CircularCarousel/spec/CircularCarouselSpec.js","undoManager":{"mark":12,"position":12,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":122,"column":0},"action":"insert","lines":["goog.require('tart.CircularCarousel');","","goog.provide('tart.CircularCarousel.SpecRunner');","","describe('CircularCarousel', function() {","    var carousel;","","    var items = [","        {name: 'one'},","        {name: 'two'},","        {name: 'three'},","        {name: 'four'},","        {name: 'five'},","        {name: 'six'},","        {name: 'seven'}","    ];","","    beforeEach(function() {","        carousel = new tart.CircularCarousel(items);","    });","","    describe('extends from tart.Carousel', function() {","        it('is an isstance of tart.Carousel', function() {","            expect(carousel instanceof tart.Carousel).toBeTruthy();","        });","    });","","    describe('has circular navigation', function() {","","        it('will navigate to seventh element after prev if current item is first item', function() {","            carousel.setItemPerViewport(2);","","            var previousItems = carousel.getVisibleItems(),","                nextItems;","","","            goog.events.listen(carousel, tart.Carousel.EventTypes.PREV, function(e) {","                nextItems = carousel.getVisibleItems();","            });","","            carousel.prev(1);","","            expect(previousItems[0].name == 'one' && nextItems[0].name == 'seven').toBeTruthy();","        });","","","        it('will navigate to second element after 6 previous steps', function() {","            carousel.setItemPerViewport(2);","","            var previousItems = carousel.getVisibleItems(),","                nextItems;","","","            goog.events.listen(carousel, tart.Carousel.EventTypes.PREV, function(e) {","                nextItems = carousel.getVisibleItems();","            });","","            carousel.prev(6);","","            expect(previousItems[0].name == 'one' && nextItems[0].name == 'two').toBeTruthy();","        });","","","        it('will navigate to seventh element after 8 previous steps which it means circular', function() {","            carousel.setItemPerViewport(2);","","            var previousItems = carousel.getVisibleItems(),","                nextItems;","","","            goog.events.listen(carousel, tart.Carousel.EventTypes.PREV, function(e) {","                nextItems = carousel.getVisibleItems();","            });","","            carousel.prev(8);","","            expect(previousItems[0].name == 'one' && nextItems[0].name == 'seven').toBeTruthy();","        });","","","        it('will navigate to second element after 8 next steps which it means circular', function() {","            carousel.setItemPerViewport(2);","","            var previousItems = carousel.getVisibleItems(),","                nextItems;","","            goog.events.listen(carousel, tart.Carousel.EventTypes.NEXT, function(e) {","                nextItems = carousel.getVisibleItems();","            });","","            carousel.next(8);","","            expect(previousItems[0].name == 'one' && nextItems[0].name == 'two').toBeTruthy();","        });","","        it('will navigate to third element after 2 next steps', function() {","            carousel.setItemPerViewport(2);","","            var previousItems = carousel.getVisibleItems(),","                nextItems;","","            goog.events.listen(carousel, tart.Carousel.EventTypes.NEXT, function(e) {","                nextItems = carousel.getVisibleItems();","            });","","            carousel.next(2);","","            expect(previousItems[0].name == 'one' && nextItems[0].name == 'three').toBeTruthy();","        });","","    });","","});","","","/**"," * Run jasmine spec"," */","tart.CircularCarousel.SpecRunner = function() {","    jasmine.getEnv()['addReporter'](new jasmine.TrivialReporter());","    jasmine.getEnv()['execute']();","}();",""]}]}],[{"group":"doc","deltas":[{"start":{"row":118,"column":0},"end":{"row":118,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":118,"column":0},"end":{"row":118,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":101,"column":41},"end":{"row":101,"column":45},"action":"remove","lines":["tart"]},{"start":{"row":101,"column":41},"end":{"row":101,"column":56},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":86,"column":41},"end":{"row":86,"column":45},"action":"remove","lines":["tart"]},{"start":{"row":86,"column":41},"end":{"row":86,"column":56},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":70,"column":41},"end":{"row":70,"column":45},"action":"remove","lines":["tart"]},{"start":{"row":70,"column":41},"end":{"row":70,"column":56},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":41},"end":{"row":53,"column":45},"action":"remove","lines":["tart"]},{"start":{"row":53,"column":41},"end":{"row":53,"column":56},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":41},"end":{"row":36,"column":45},"action":"remove","lines":["tart"]},{"start":{"row":36,"column":41},"end":{"row":36,"column":56},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":23,"column":39},"end":{"row":23,"column":43},"action":"remove","lines":["tart"]},{"start":{"row":23,"column":39},"end":{"row":23,"column":54},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":30},"end":{"row":22,"column":34},"action":"remove","lines":["tart"]},{"start":{"row":22,"column":30},"end":{"row":22,"column":45},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":27},"end":{"row":21,"column":31},"action":"remove","lines":["tart"]},{"start":{"row":21,"column":27},"end":{"row":21,"column":42},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":23},"end":{"row":18,"column":27},"action":"remove","lines":["tart"]},{"start":{"row":18,"column":23},"end":{"row":18,"column":38},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":14},"end":{"row":2,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":2,"column":14},"end":{"row":2,"column":29},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":14},"end":{"row":0,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":0,"column":14},"end":{"row":0,"column":29},"action":"insert","lines":["samanthaClosure"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":18,"column":63},"end":{"row":18,"column":63},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1425188362647,"hash":"e4cdeb957d7d048ffa0a90c455a0e2c513e7b106"}