{"filter":false,"title":"PaginationSpec.js","tooltip":"/lib/SamanthaClosure/samantha/pagination/spec/PaginationSpec.js","undoManager":{"mark":7,"position":7,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":170,"column":0},"action":"insert","lines":["goog.require('tart.Pagination');","","goog.provide('tart.Pagination.SpecRunner');","","describe('Pagination', function() {","    var paginator;","","    beforeEach(function() {","        paginator = new tart.Pagination();","    });","","","    describe('should contain required parameters', function()  {","","        it('should have totalPage', function() {","            expect(paginator.getTotalPage()).toBeGreaterThan(0);","        });","","        it('should have currentPage', function() {","            expect(paginator.getCurrentPage()).toBeGreaterThan(0);","        });","","        it('should have itemPerPage', function() {","            expect(paginator.getItemPerPage()).toBeGreaterThan(0);","        });","","        it('should have totalItems', function() {","            expect(paginator.getTotalItems()).toBeGreaterThan(0);","        });","","","","        it('should set totalPage', function() {","            paginator.setTotalPage(5);","            expect(paginator.getTotalPage()).toEqual(5);","        });","","        it('should set currentPage', function() {","            paginator.setTotalPage(5);","            paginator.setCurrentPage(5);","            expect(paginator.getCurrentPage()).toEqual(5);","        });","","        it('should set itemPerPage', function() {","            paginator.setItemPerPage(2);","            expect(paginator.getItemPerPage()).toEqual(2);","        });","","        it('should set totalItems', function() {","            paginator.setTotalItems(2);","            expect(paginator.getTotalItems()).toEqual(2);","        });","","","        it('should change page count when totalItem count set', function() {","            paginator.setItemPerPage(2);","            paginator.setTotalItems(5);","            expect(paginator.getTotalPage()).toEqual(3);","        });","","","        it('should change item count when totalPage count set', function() {","            paginator.setItemPerPage(2);","            paginator.setTotalPage(4);","            expect(paginator.getTotalItems()).toEqual(8);","        });","","        it('should set page count to totalPageCount if page > totalPageCount', function() {","            paginator.setTotalPage(5);","            paginator.setCurrentPage(6);","            expect(paginator.getCurrentPage()).toEqual(5);","        });","","        it('should set page count to 1 if page < 1', function() {","            paginator.setTotalPage(5);","            paginator.setCurrentPage(0);","            expect(paginator.getCurrentPage()).toEqual(1);","        });","","","","    });","","    describe('controls navigation', function() {","        it('should have a next element if currentPage < totalPage', function() {","            paginator.setCurrentPage(3);","            paginator.setTotalPage(4);","            expect(paginator.hasNext()).toBeTruthy();","        });","","        it('should not have a next element if currentPage >= totalPage', function() {","            paginator.setTotalPage(4).setCurrentPage(4);","            paginator.setTotalPage(4);","            expect(paginator.hasNext()).toBeFalsy();","        });","","        it('should have a previous element if currentPage > 1', function() {","            paginator.setTotalPage(4).setCurrentPage(2);","            expect(paginator.hasPrev()).toBeTruthy();","        });","","        it('should not have a next element if currentPage <= 1', function() {","            paginator.setCurrentPage(1);","            paginator.setTotalPage(4);","            expect(paginator.hasPrev()).toBeFalsy();","        });","","    });","","    describe('triggers pageChanged event on some conditions', function() {","        it('should trigger event on setCurrentPage', function() {","","            var triggeredObject = {};","","            goog.events.listen(paginator, tart.Pagination.EventTypes.PAGE_CHANGED, function(e) {","                triggeredObject = e;","            });","","            paginator.setCurrentPage(10);","","            //check if newValue and oldValue exists","            expect(triggeredObject.oldValue && triggeredObject.newValue).toBeTruthy();","","        });","","","        it('should trigger event on next()', function() {","            paginator.setTotalPage(12);","            paginator.setCurrentPage(10);","","            var triggeredObject = {};","","            goog.events.listen(paginator, tart.Pagination.EventTypes.PAGE_CHANGED, function(e) {","                triggeredObject = e;","            });","","            paginator.next();","","            //check if newValue and oldValue exists","            expect(triggeredObject.oldValue && triggeredObject.newValue).toBeTruthy();","","        });","","        it('should trigger event on prev()', function() {","            paginator.setTotalPage(12);","            paginator.setCurrentPage(10);","","            var triggeredObject = {};","","            goog.events.listen(paginator, tart.Pagination.EventTypes.PAGE_CHANGED, function(e) {","                triggeredObject = e;","            });","","            paginator.prev();","","            //check if newValue and oldValue exists","            expect(triggeredObject.oldValue && triggeredObject.newValue).toBeTruthy();","","        });","    });","});","","","/**"," * Run jasmine spec"," */","tart.Pagination.SpecRunner = function() {","    jasmine.getEnv()['addReporter'](new jasmine.TrivialReporter());","    jasmine.getEnv()['execute']();","}();",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":14},"end":{"row":0,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":0,"column":14},"end":{"row":0,"column":29},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":14},"end":{"row":2,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":2,"column":14},"end":{"row":2,"column":29},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":24},"end":{"row":8,"column":28},"action":"remove","lines":["tart"]},{"start":{"row":8,"column":24},"end":{"row":8,"column":39},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":114,"column":42},"end":{"row":114,"column":46},"action":"remove","lines":["tart"]},{"start":{"row":114,"column":42},"end":{"row":114,"column":57},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":132,"column":42},"end":{"row":132,"column":46},"action":"remove","lines":["tart"]},{"start":{"row":132,"column":42},"end":{"row":132,"column":57},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":42},"end":{"row":149,"column":46},"action":"remove","lines":["tart"]},{"start":{"row":149,"column":42},"end":{"row":149,"column":57},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":166,"column":0},"end":{"row":166,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":166,"column":0},"end":{"row":166,"column":15},"action":"insert","lines":["samanthaClosure"]}]}]]},"ace":{"folds":[],"scrolltop":2452,"scrollleft":0,"selection":{"start":{"row":168,"column":34},"end":{"row":168,"column":34},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":5,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1425194230892,"hash":"6a8f21140c7cb3c3f76ee8b8faa94ce3248e4c12"}