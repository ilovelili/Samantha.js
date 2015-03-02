{"filter":false,"title":"Model.js","tooltip":"/lib/SamanthaClosure/samantha/components/Carousel/Model.js","undoManager":{"mark":21,"position":21,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":123,"column":0},"action":"insert","lines":["// Copyright 2012 Tart. All Rights Reserved.","//","// @author Firat Yalavuz firat.yalavuz@tart.com.tr","","/**"," * @fileoverview tart.components.Carousel.Model is a base class for all carousel Model's."," */","","","goog.require('goog.events.EventTarget');","goog.require('tart.Carousel');","goog.require('tart.base.Model');","goog.require('tart.dataProxy.CircularLocal');","goog.provide('tart.components.Carousel.Model');","goog.provide('tart.components.Carousel.Model.EventTypes');","","/**"," * All component models should be inherited from goog.events.EventTarget"," * to publish events to controllers"," *"," * @extends {tart.base.Model}"," * @constructor"," */","tart.components.Carousel.Model = function() {","    goog.base(this);","    /** @protected */","    this.proxy = new tart.dataProxy.CircularLocal();","};","goog.inherits(tart.components.Carousel.Model, tart.base.Model);","","","/**"," *  Model's default offset value."," */","tart.components.Carousel.Model.prototype.offset = 0;","","","/**"," * Model's default limit value."," */","tart.components.Carousel.Model.prototype.limit = 0;","","/**"," * WidgetModel's remoteModelClass's default value is  undefined."," */","tart.components.Carousel.Model.prototype.remoteModelClass = undefined;","","","/**"," * WidgetModel's RemoteModelClass's default value is undefined."," */","tart.components.Carousel.Model.prototype.remoteModelClassParams = undefined;","","","/**"," * event types enumaration"," * @enum {string}"," */","tart.components.Carousel.Model.EventTypes = {","    ITEMS_LOADED: 'loaded'","};","","","/**"," * Get carousel items"," * @param {boolean} dispatchEvent whether it dispatches an event."," * @return {Array} modelItems is count of items.."," */","tart.components.Carousel.Model.prototype.getItems = function(dispatchEvent) {","    var that = this;","    var modelItems;","","    this.load(function(items) {","        if (dispatchEvent) {","            var eventObject = {type: tart.components.Carousel.Model.EventTypes.ITEMS_LOADED,","                visibleItems: items,","                totalItemCount: that.getTotalItemCount()","            };","","            that.dispatchEvent(eventObject);","        }","        modelItems = items;","    });","","    return modelItems;","};","","/**"," * @param {Function} callback load callback function."," */","tart.components.Carousel.Model.prototype.load = function(callback) {","    var that = this;","    var remoteModel;","","    var onProxyFetch = function(data) {","        that.setItems(data);","        callback.call(this, data);","    };","","    var getremoteModelData = function() {","        var data = remoteModel.getItems();","        that.proxy.setData(data);","        that.setTotalItemCount(data.length);","        that.proxy.fetch(onProxyFetch);","    };","","","    that.proxy.setParams(this.params);","","    if (that.proxy.getData()) {","        that.proxy.fetch(onProxyFetch);","    }","    else if (this.remoteModelClass) {","        remoteModel = new this.remoteModelClass(this.remoteModelClassParams);","        if (this.pagination) {","            var remoteModelPager = new tart.base.plugin.Pager(remoteModel, this.pagination);","            remoteModelPager.setOffset(this.offset);","            remoteModelPager.setLimit(this.limit);","        }","","        remoteModel.load(getremoteModelData);","    }","};",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":4,"column":0},"action":"remove","lines":["// Copyright 2012 Tart. All Rights Reserved.","//","// @author Firat Yalavuz firat.yalavuz@tart.com.tr","",""]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":17},"end":{"row":1,"column":21},"action":"remove","lines":["tart"]},{"start":{"row":1,"column":17},"end":{"row":1,"column":32},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":14},"end":{"row":6,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":6,"column":14},"end":{"row":6,"column":29},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":14},"end":{"row":7,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":7,"column":14},"end":{"row":7,"column":29},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":14},"end":{"row":8,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":8,"column":14},"end":{"row":8,"column":29},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":14},"end":{"row":9,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":9,"column":14},"end":{"row":9,"column":29},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":14},"end":{"row":10,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":10,"column":14},"end":{"row":10,"column":29},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":13},"end":{"row":16,"column":17},"action":"remove","lines":["tart"]},{"start":{"row":16,"column":13},"end":{"row":16,"column":28},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":0},"end":{"row":19,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":19,"column":0},"end":{"row":19,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":21},"end":{"row":22,"column":25},"action":"remove","lines":["tart"]},{"start":{"row":22,"column":21},"end":{"row":22,"column":36},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":14},"end":{"row":24,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":24,"column":14},"end":{"row":24,"column":29},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":57},"end":{"row":24,"column":61},"action":"remove","lines":["tart"]},{"start":{"row":24,"column":57},"end":{"row":24,"column":72},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":0},"end":{"row":30,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":30,"column":0},"end":{"row":30,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":0},"end":{"row":36,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":36,"column":0},"end":{"row":36,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":41,"column":0},"end":{"row":41,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":41,"column":0},"end":{"row":41,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":0},"end":{"row":47,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":47,"column":0},"end":{"row":47,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":0},"end":{"row":54,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":54,"column":0},"end":{"row":54,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":64,"column":0},"end":{"row":64,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":64,"column":0},"end":{"row":64,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":70,"column":37},"end":{"row":70,"column":41},"action":"remove","lines":["tart"]},{"start":{"row":70,"column":37},"end":{"row":70,"column":52},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":86,"column":0},"end":{"row":86,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":86,"column":0},"end":{"row":86,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":111,"column":39},"end":{"row":111,"column":43},"action":"remove","lines":["tart"]},{"start":{"row":111,"column":39},"end":{"row":111,"column":54},"action":"insert","lines":["samanthaClosure"]}]}]]},"ace":{"folds":[],"scrolltop":1572,"scrollleft":0,"selection":{"start":{"row":118,"column":2},"end":{"row":118,"column":2},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1425189206194,"hash":"3dfc92191deaf6a585e7dce7878075afb7b4e69d"}