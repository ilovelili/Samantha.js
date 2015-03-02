/**
 * @fileoverview SamanthaClosure.CircularCarousel is an event driven Carousel/Image Slider class which
 * handles next and previous events and gets visible items on viewport.
 *
 * Example usage:
 *  var items = [
 *     {name : 'one'},
 *     {name : 'two'},
 *     {name : 'three'},
 *     {name : 'four'},
 *     {name : 'five'},
 *     {name : 'six'},
 *     {name : 'seven'}
 *  ]; //seven items
 *
 *  var carousel = new SamanthaClosure.CircularCarousel(items);
 *
 *  carousel.setItemPerViewport(2); //only 2 items is visibile
 *
 *  goog.events.listen(carousel, SamanthaClosure.Carousel.EventTypes.NEXT, function (e) {
 *      console.info('items moved next');
 *      console.log (e.itemsToBeRemoved);
 *      console.log (e.itemsToBeInserted);
 *      console.info(carousel.getVisibleItems());
 *  });
 *
 *  goog.events.listen(carousel, SamanthaClosure.Carousel.EventTypes.PREV, function (e) {
 *      console.info('items moved prev');
 *      console.log (e.itemsToBeRemoved);
 *      console.log (e.itemsToBeInserted);
 *      console.info(carousel.getVisibleItems());
 *  });
 *
 *  carousel.prev(3);
 *  carousel.next(1);
 */

goog.provide('SamanthaClosure.CircularCarousel');

goog.require('goog.events.EventTarget');
goog.require('SamanthaClosure.Carousel');



/**
 * Pagination class to handle all paging events
 *
 * @param {Array.<*>=} items array of items.
 * @extends {SamanthaClosure.Carousel}
 * @constructor
 */
SamanthaClosure.CircularCarousel = function(items) {
    goog.base(this, items);
};
goog.inherits(SamanthaClosure.CircularCarousel, SamanthaClosure.Carousel);


/**
 * Find which items to be removed and inserted after move
 *
 * @param {number} moveCount item move count.
 * @return {Object} object literal which has itemsToBeInserted and itemsToBeRemoved nodes.
 */
SamanthaClosure.CircularCarousel.prototype.getItemsToBeInsertedAndRemoved = function(moveCount) {
    var i,
        previousItemsIndex = [],
        nextItemsIndex = [],
        ssamanthaClosure = this.firstVisible + moveCount;


    for (i = 0; i < this.lastVisible; i++) {
        previousItemsIndex.push(i);
    }

    for (i = ssamanthaClosure; i < ssamanthaClosure + this.itemPerViewport; i++) {
        nextItemsIndex.push(i);
    }

    var moveDiff = this.getMoveDiff(previousItemsIndex, nextItemsIndex, moveCount);

    return moveDiff;
};


/**
 * low level move which handles next and prev methods
 *
 * @param {string} direction 'next' or 'prev' direction of movement.
 * @param {*} moveCount item move count.
 * @override
 * @protected
 */
SamanthaClosure.CircularCarousel.prototype.move = function(direction, moveCount) {
    moveCount = moveCount || 1;
    moveCount = Math.abs(moveCount);
    moveCount = moveCount % this.itemCount;

    var tmpCursor = 0;

    //default event dispatched
    var eventToDispatch = SamanthaClosure.Carousel.EventTypes.NEXT;

    if (direction == 'prev') {
        moveCount = moveCount * -1;
        tmpCursor = this.itemCount;
        eventToDispatch = SamanthaClosure.Carousel.EventTypes.PREV;
    }

    var tmp = [].concat(this.items).concat(this.items);

    var moveDiff = this.getItemsToBeInsertedAndRemoved(moveCount);

    this.firstVisible = this.firstVisible + tmpCursor + moveCount;
    this.lastVisible = this.lastVisible + tmpCursor + moveCount;

    this.items = tmp.slice(this.firstVisible, this.firstVisible + this.itemCount);

    this.firstVisible = 0;
    this.lastVisible = this.itemPerViewport;

    var eventObj = {type: eventToDispatch,
        itemsToBeRemoved: moveDiff.itemsToBeRemoved,
        itemsToBeInserted: moveDiff.itemsToBeInserted};

    this.dispatchEvent(eventObj);
};
