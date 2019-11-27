(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'KObserve'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('KObserve'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ascii-register'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ascii-register'.");
    }
    if (typeof KObserve === 'undefined') {
      throw new Error("Error loading module 'ascii-register'. Its dependency 'KObserve' was not found. Please, check whether 'KObserve' is loaded prior to 'ascii-register'.");
    }
    root['ascii-register'] = factory(typeof this['ascii-register'] === 'undefined' ? {} : this['ascii-register'], kotlin, KObserve);
  }
}(this, function (_, Kotlin, $module$KObserve) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var mapBinding = $module$KObserve.de.westermann.kobserve.property.mapBinding_z4jc1y$;
  var join = $module$KObserve.de.westermann.kobserve.property.join_fac9v2$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var property = $module$KObserve.de.westermann.kobserve.property.property_mh5how$;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var flatMapBinding = $module$KObserve.de.westermann.kobserve.property.flatMapBinding_ytxfux$;
  var flatMapBinding_0 = $module$KObserve.de.westermann.kobserve.property.flatMapBinding_k0as1z$;
  var throwUPAE = Kotlin.throwUPAE;
  var L0 = Kotlin.Long.ZERO;
  var equals = Kotlin.equals;
  var property_0 = $module$KObserve.de.westermann.kobserve.property.property_w7kr7o$;
  var flatten = $module$KObserve.de.westermann.kobserve.property.flatten_mq2fl1$;
  var emit = $module$KObserve.de.westermann.kobserve.event.emit_issdgt$;
  var constProperty = $module$KObserve.de.westermann.kobserve.property.constProperty_mh5how$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var event = $module$KObserve.de.westermann.kobserve.event;
  var getKClass = Kotlin.getKClass;
  var times = $module$KObserve.de.westermann.kobserve.times_nzphua$;
  var plus = $module$KObserve.de.westermann.kobserve.plus_lbvlqn$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparator = Kotlin.kotlin.Comparator;
  var minus = $module$KObserve.de.westermann.kobserve.minus_lbvlqn$;
  var minus_0 = $module$KObserve.de.westermann.kobserve.minus_u8e4hj$;
  var drop = Kotlin.kotlin.text.drop_6ic1pp$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var FunctionAccessor = $module$KObserve.de.westermann.kobserve.property.FunctionAccessor;
  var property_1 = $module$KObserve.de.westermann.kobserve.property.property_v7f81y$;
  var numberToInt = Kotlin.numberToInt;
  var getCallableRef = Kotlin.getCallableRef;
  var Math_0 = Math;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var removePrefix = Kotlin.kotlin.text.removePrefix_gsj5wt$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var drop_0 = Kotlin.kotlin.collections.drop_ba2ldo$;
  var Error_0 = Kotlin.kotlin.Error;
  var EventHandler = $module$KObserve.de.westermann.kobserve.event.EventHandler;
  var observableListOf = $module$KObserve.de.westermann.kobserve.list.observableListOf_i5x0yv$;
  var sortObservable = $module$KObserve.de.westermann.kobserve.list.sortObservable_htv74t$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var toShort = Kotlin.toShort;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var unboxChar = Kotlin.unboxChar;
  var toBoxedChar = Kotlin.toBoxedChar;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var round = Kotlin.kotlin.math.round_14dthe$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var Property = $module$KObserve.de.westermann.kobserve.Property;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var Map = Kotlin.kotlin.collections.Map;
  var throwCCE = Kotlin.throwCCE;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var Annotation = Kotlin.kotlin.Annotation;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var clear = Kotlin.kotlin.dom.clear_asww5s$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var Random = Kotlin.kotlin.random.Random;
  var abs = Kotlin.kotlin.math.abs_s8cxhz$;
  var toString = Kotlin.kotlin.text.toString_if0zpk$;
  var take = Kotlin.kotlin.text.take_6ic1pp$;
  var NullPointerException = Kotlin.kotlin.NullPointerException;
  var minus_1 = Kotlin.kotlin.collections.minus_2ws7j4$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var indexOf = Kotlin.kotlin.text.indexOf_l5u8uk$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var not = $module$KObserve.de.westermann.kobserve.not_nwpeaj$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var replaceFirst = Kotlin.kotlin.text.replaceFirst_680rmw$;
  var numberToDouble = Kotlin.numberToDouble;
  var asList = Kotlin.kotlin.collections.asList_us0mfu$;
  ViewCollection.prototype = Object.create(View.prototype);
  ViewCollection.prototype.constructor = ViewCollection;
  BookDialog.prototype = Object.create(ViewCollection.prototype);
  BookDialog.prototype.constructor = BookDialog;
  CashBox.prototype = Object.create(ViewCollection.prototype);
  CashBox.prototype.constructor = CashBox;
  Mode.prototype = Object.create(Enum.prototype);
  Mode.prototype.constructor = Mode;
  Envelope.prototype = Object.create(ViewCollection.prototype);
  Envelope.prototype.constructor = Envelope;
  EnvelopeEntry.prototype = Object.create(ViewCollection.prototype);
  EnvelopeEntry.prototype.constructor = EnvelopeEntry;
  History.prototype = Object.create(ViewCollection.prototype);
  History.prototype.constructor = History;
  MoneyGroup.prototype = Object.create(ViewCollection.prototype);
  MoneyGroup.prototype.constructor = MoneyGroup;
  Settings.prototype = Object.create(ViewCollection.prototype);
  Settings.prototype.constructor = Settings;
  Coin.prototype = Object.create(View.prototype);
  Coin.prototype.constructor = Coin;
  CoinBox.prototype = Object.create(ViewCollection.prototype);
  CoinBox.prototype.constructor = CoinBox;
  CoinGroup.prototype = Object.create(MoneyGroup.prototype);
  CoinGroup.prototype.constructor = CoinGroup;
  CoinStack.prototype = Object.create(ViewCollection.prototype);
  CoinStack.prototype.constructor = CoinStack;
  CoinStackGroup.prototype = Object.create(ViewCollection.prototype);
  CoinStackGroup.prototype.constructor = CoinStackGroup;
  Note.prototype = Object.create(ViewCollection.prototype);
  Note.prototype.constructor = Note;
  NoteBox.prototype = Object.create(ViewCollection.prototype);
  NoteBox.prototype.constructor = NoteBox;
  NoteGroup.prototype = Object.create(MoneyGroup.prototype);
  NoteGroup.prototype.constructor = NoteGroup;
  NoteStack.prototype = Object.create(ViewCollection.prototype);
  NoteStack.prototype.constructor = NoteStack;
  ViewForLabel.prototype = Object.create(View.prototype);
  ViewForLabel.prototype.constructor = ViewForLabel;
  Body.prototype = Object.create(ViewCollection.prototype);
  Body.prototype.constructor = Body;
  BoxView.prototype = Object.create(ViewCollection.prototype);
  BoxView.prototype.constructor = BoxView;
  Button.prototype = Object.create(ViewCollection.prototype);
  Button.prototype.constructor = Button;
  Checkbox.prototype = Object.create(ViewForLabel.prototype);
  Checkbox.prototype.constructor = Checkbox;
  FilterList.prototype = Object.create(ViewCollection.prototype);
  FilterList.prototype.constructor = FilterList;
  Heading$Type.prototype = Object.create(Enum.prototype);
  Heading$Type.prototype.constructor = Heading$Type;
  Heading.prototype = Object.create(View.prototype);
  Heading.prototype.constructor = Heading;
  IconView.prototype = Object.create(View.prototype);
  IconView.prototype.constructor = IconView;
  ImageView.prototype = Object.create(View.prototype);
  ImageView.prototype.constructor = ImageView;
  InputView.prototype = Object.create(ViewForLabel.prototype);
  InputView.prototype.constructor = InputView;
  InputType.prototype = Object.create(Enum.prototype);
  InputType.prototype.constructor = InputType;
  Label.prototype = Object.create(View.prototype);
  Label.prototype.constructor = Label;
  Link.prototype = Object.create(ViewCollection.prototype);
  Link.prototype.constructor = Link;
  MaterialIcon.prototype = Object.create(Enum.prototype);
  MaterialIcon.prototype.constructor = MaterialIcon;
  OptionView.prototype = Object.create(View.prototype);
  OptionView.prototype.constructor = OptionView;
  SelectView.prototype = Object.create(ViewCollection.prototype);
  SelectView.prototype.constructor = SelectView;
  Table.prototype = Object.create(ViewCollection.prototype);
  Table.prototype.constructor = Table;
  TableCaption.prototype = Object.create(ViewCollection.prototype);
  TableCaption.prototype.constructor = TableCaption;
  TableCell.prototype = Object.create(ViewCollection.prototype);
  TableCell.prototype.constructor = TableCell;
  TableRow.prototype = Object.create(ViewCollection.prototype);
  TableRow.prototype.constructor = TableRow;
  TableSection$Type.prototype = Object.create(Enum.prototype);
  TableSection$Type.prototype.constructor = TableSection$Type;
  TableSection.prototype = Object.create(ViewCollection.prototype);
  TableSection.prototype.constructor = TableSection;
  TextView.prototype = Object.create(View.prototype);
  TextView.prototype.constructor = TextView;
  function BookDialog(cash) {
    ViewCollection.call(this);
    this.cash_0 = cash;
    Document_getInstance().onKeyPress.invoke_qlkmfe$(BookDialog_init$lambda(this));
    this.onClick.invoke_qlkmfe$(BookDialog_init$lambda_0(this));
    boxView(this, [], BookDialog_init$lambda_1(this));
  }
  Object.defineProperty(BookDialog.prototype, 'visible_0', {
    get: function () {
      return this.classList.contains_61zpoe$('active');
    }
  });
  BookDialog.prototype.show = function () {
    this.classList.plusAssign_61zpoe$('active');
  };
  BookDialog.prototype.hide = function () {
    this.classList.minusAssign_61zpoe$('active');
  };
  function BookDialog_init$lambda(this$BookDialog) {
    return function (it) {
      if (it.keyCode === 27 && this$BookDialog.visible_0) {
        this$BookDialog.hide();
        it.stopPropagation();
        it.preventDefault();
      }
      return Unit;
    };
  }
  function BookDialog_init$lambda_0(this$BookDialog) {
    return function (it) {
      this$BookDialog.hide();
      return Unit;
    };
  }
  function BookDialog_init$lambda$lambda(it) {
    it.stopPropagation();
    return Unit;
  }
  function BookDialog_init$lambda$lambda$lambda$lambda(this$BookDialog) {
    return function (it) {
      this$BookDialog.hide();
      return Unit;
    };
  }
  function BookDialog_init$lambda$lambda$lambda(this$BookDialog) {
    return function ($receiver) {
      $receiver.onClick.invoke_qlkmfe$(BookDialog_init$lambda$lambda$lambda$lambda(this$BookDialog));
      return Unit;
    };
  }
  function BookDialog_init$lambda$lambda_0(this$BookDialog) {
    return function ($receiver) {
      textView_0($receiver, t('cash-book'));
      iconView($receiver, MaterialIcon$CLOSE_getInstance(), BookDialog_init$lambda$lambda$lambda(this$BookDialog));
      return Unit;
    };
  }
  function BookDialog_init$lambda$lambda$lambda_0(it) {
    return format(it, 2) + ' \u20AC';
  }
  function BookDialog_init$lambda$lambda$lambda_1(current, old) {
    return format(old - current, 2) + ' \u20AC';
  }
  function BookDialog_init$lambda$lambda$lambda_2(it) {
    return format(it, 2) + ' \u20AC';
  }
  function BookDialog_init$lambda$lambda$lambda_3(it) {
    return it.toString();
  }
  function BookDialog_init$lambda$lambda$lambda_4(it) {
    return it.toString();
  }
  function BookDialog_init$lambda$lambda$lambda_5(it) {
    return it.toString();
  }
  function BookDialog_init$lambda$lambda$lambda_6(it) {
    return it.toString();
  }
  function BookDialog_init$lambda$lambda$lambda_7(it) {
    return it.toString();
  }
  function BookDialog_init$lambda$lambda$lambda_8(it) {
    return it.toString();
  }
  function BookDialog_init$lambda$lambda$lambda_9(it) {
    return it.toString();
  }
  function BookDialog_init$lambda$lambda$lambda_10(it) {
    return it.toString();
  }
  function BookDialog_init$lambda$lambda$lambda_11(it) {
    return it.toString();
  }
  function BookDialog_init$lambda$lambda$lambda_12(it) {
    return it.toString();
  }
  function BookDialog_init$lambda$lambda$lambda_13(it) {
    return it.toString();
  }
  function BookDialog_init$lambda$lambda$lambda_14(it) {
    return it.toString();
  }
  function BookDialog_init$lambda$lambda$lambda_15(it) {
    return it.toString();
  }
  function BookDialog_init$lambda$lambda$lambda_16(it) {
    return format(it, 2) + ' \u20AC';
  }
  function BookDialog_init$lambda$lambda_1(this$BookDialog) {
    return function ($receiver) {
      textView_0($receiver, mapBinding(this$BookDialog.cash_0.previousTotalProperty, BookDialog_init$lambda$lambda$lambda_0));
      textView_0($receiver, join(this$BookDialog.cash_0.totalProperty, this$BookDialog.cash_0.previousTotalProperty, BookDialog_init$lambda$lambda$lambda_1));
      textView_0($receiver, mapBinding(this$BookDialog.cash_0.totalProperty, BookDialog_init$lambda$lambda$lambda_2));
      textView($receiver, '-');
      textView($receiver, Envelope$Companion_getInstance().dateString);
      textView_0($receiver, mapBinding(this$BookDialog.cash_0.previousNote100Property, BookDialog_init$lambda$lambda$lambda_3));
      textView_0($receiver, mapBinding(this$BookDialog.cash_0.previousNote50Property, BookDialog_init$lambda$lambda$lambda_4));
      textView_0($receiver, mapBinding(this$BookDialog.cash_0.previousNote20Property, BookDialog_init$lambda$lambda$lambda_5));
      textView_0($receiver, mapBinding(this$BookDialog.cash_0.previousNote10Property, BookDialog_init$lambda$lambda$lambda_6));
      textView_0($receiver, mapBinding(this$BookDialog.cash_0.previousNote5Property, BookDialog_init$lambda$lambda$lambda_7));
      textView_0($receiver, mapBinding(this$BookDialog.cash_0.previousCoin200Property, BookDialog_init$lambda$lambda$lambda_8));
      textView_0($receiver, mapBinding(this$BookDialog.cash_0.previousCoin100Property, BookDialog_init$lambda$lambda$lambda_9));
      textView_0($receiver, mapBinding(this$BookDialog.cash_0.previousCoin50Property, BookDialog_init$lambda$lambda$lambda_10));
      textView_0($receiver, mapBinding(this$BookDialog.cash_0.previousCoin20Property, BookDialog_init$lambda$lambda$lambda_11));
      textView_0($receiver, mapBinding(this$BookDialog.cash_0.previousCoin10Property, BookDialog_init$lambda$lambda$lambda_12));
      textView_0($receiver, mapBinding(this$BookDialog.cash_0.previousCoin5Property, BookDialog_init$lambda$lambda$lambda_13));
      textView_0($receiver, mapBinding(this$BookDialog.cash_0.previousCoin2Property, BookDialog_init$lambda$lambda$lambda_14));
      textView_0($receiver, mapBinding(this$BookDialog.cash_0.previousCoin1Property, BookDialog_init$lambda$lambda$lambda_15));
      textView_0($receiver, mapBinding(this$BookDialog.cash_0.previousTotalProperty, BookDialog_init$lambda$lambda$lambda_16));
      return Unit;
    };
  }
  function BookDialog_init$lambda_1(this$BookDialog) {
    return function ($receiver) {
      $receiver.onClick.invoke_qlkmfe$(BookDialog_init$lambda$lambda);
      boxView($receiver, [], BookDialog_init$lambda$lambda_0(this$BookDialog));
      boxView($receiver, [], BookDialog_init$lambda$lambda_1(this$BookDialog));
      return Unit;
    };
  }
  BookDialog.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BookDialog',
    interfaces: [ViewCollection]
  };
  function Cash(currentCash, previousCash) {
    Cash$Companion_getInstance();
    if (currentCash === void 0)
      currentCash = new CashEntry();
    if (previousCash === void 0)
      previousCash = new CashEntry();
    this.currentCashProperty = property(currentCash);
    this.currentCash_apyl3z$_0 = this.currentCashProperty;
    this.previousCashProperty = property(previousCash);
    this.previousCash_e5imzj$_0 = this.previousCashProperty;
    this.note100Property = flatMapBinding(this.currentCashProperty, getPropertyCallableRef('note100Property', 1, function ($receiver) {
      return $receiver.note100Property;
    }));
    this.note50Property = flatMapBinding(this.currentCashProperty, getPropertyCallableRef('note50Property', 1, function ($receiver) {
      return $receiver.note50Property;
    }));
    this.note20Property = flatMapBinding(this.currentCashProperty, getPropertyCallableRef('note20Property', 1, function ($receiver) {
      return $receiver.note20Property;
    }));
    this.note10Property = flatMapBinding(this.currentCashProperty, getPropertyCallableRef('note10Property', 1, function ($receiver) {
      return $receiver.note10Property;
    }));
    this.note5Property = flatMapBinding(this.currentCashProperty, getPropertyCallableRef('note5Property', 1, function ($receiver) {
      return $receiver.note5Property;
    }));
    this.coin200Property = flatMapBinding(this.currentCashProperty, getPropertyCallableRef('coin200Property', 1, function ($receiver) {
      return $receiver.coin200Property;
    }));
    this.coin100Property = flatMapBinding(this.currentCashProperty, getPropertyCallableRef('coin100Property', 1, function ($receiver) {
      return $receiver.coin100Property;
    }));
    this.coin50Property = flatMapBinding(this.currentCashProperty, getPropertyCallableRef('coin50Property', 1, function ($receiver) {
      return $receiver.coin50Property;
    }));
    this.coin20Property = flatMapBinding(this.currentCashProperty, getPropertyCallableRef('coin20Property', 1, function ($receiver) {
      return $receiver.coin20Property;
    }));
    this.coin10Property = flatMapBinding(this.currentCashProperty, getPropertyCallableRef('coin10Property', 1, function ($receiver) {
      return $receiver.coin10Property;
    }));
    this.coin5Property = flatMapBinding(this.currentCashProperty, getPropertyCallableRef('coin5Property', 1, function ($receiver) {
      return $receiver.coin5Property;
    }));
    this.coin2Property = flatMapBinding(this.currentCashProperty, getPropertyCallableRef('coin2Property', 1, function ($receiver) {
      return $receiver.coin2Property;
    }));
    this.coin1Property = flatMapBinding(this.currentCashProperty, getPropertyCallableRef('coin1Property', 1, function ($receiver) {
      return $receiver.coin1Property;
    }));
    this.totalProperty = flatMapBinding_0(this.currentCashProperty, getPropertyCallableRef('totalProperty', 1, function ($receiver) {
      return $receiver.totalProperty;
    }));
    this.previousNote100Property = flatMapBinding(this.previousCashProperty, getPropertyCallableRef('note100Property', 1, function ($receiver) {
      return $receiver.note100Property;
    }));
    this.previousNote50Property = flatMapBinding(this.previousCashProperty, getPropertyCallableRef('note50Property', 1, function ($receiver) {
      return $receiver.note50Property;
    }));
    this.previousNote20Property = flatMapBinding(this.previousCashProperty, getPropertyCallableRef('note20Property', 1, function ($receiver) {
      return $receiver.note20Property;
    }));
    this.previousNote10Property = flatMapBinding(this.previousCashProperty, getPropertyCallableRef('note10Property', 1, function ($receiver) {
      return $receiver.note10Property;
    }));
    this.previousNote5Property = flatMapBinding(this.previousCashProperty, getPropertyCallableRef('note5Property', 1, function ($receiver) {
      return $receiver.note5Property;
    }));
    this.previousCoin200Property = flatMapBinding(this.previousCashProperty, getPropertyCallableRef('coin200Property', 1, function ($receiver) {
      return $receiver.coin200Property;
    }));
    this.previousCoin100Property = flatMapBinding(this.previousCashProperty, getPropertyCallableRef('coin100Property', 1, function ($receiver) {
      return $receiver.coin100Property;
    }));
    this.previousCoin50Property = flatMapBinding(this.previousCashProperty, getPropertyCallableRef('coin50Property', 1, function ($receiver) {
      return $receiver.coin50Property;
    }));
    this.previousCoin20Property = flatMapBinding(this.previousCashProperty, getPropertyCallableRef('coin20Property', 1, function ($receiver) {
      return $receiver.coin20Property;
    }));
    this.previousCoin10Property = flatMapBinding(this.previousCashProperty, getPropertyCallableRef('coin10Property', 1, function ($receiver) {
      return $receiver.coin10Property;
    }));
    this.previousCoin5Property = flatMapBinding(this.previousCashProperty, getPropertyCallableRef('coin5Property', 1, function ($receiver) {
      return $receiver.coin5Property;
    }));
    this.previousCoin2Property = flatMapBinding(this.previousCashProperty, getPropertyCallableRef('coin2Property', 1, function ($receiver) {
      return $receiver.coin2Property;
    }));
    this.previousCoin1Property = flatMapBinding(this.previousCashProperty, getPropertyCallableRef('coin1Property', 1, function ($receiver) {
      return $receiver.coin1Property;
    }));
    this.previousTotalProperty = flatMapBinding_0(this.previousCashProperty, getPropertyCallableRef('totalProperty', 1, function ($receiver) {
      return $receiver.totalProperty;
    }));
  }
  var Cash$currentCash_metadata = new PropertyMetadata('currentCash');
  Object.defineProperty(Cash.prototype, 'currentCash', {
    get: function () {
      return this.currentCash_apyl3z$_0.getValue_n5byny$(this, Cash$currentCash_metadata);
    },
    set: function (currentCash) {
      this.currentCash_apyl3z$_0.setValue_sq4zib$(this, Cash$currentCash_metadata, currentCash);
    }
  });
  var Cash$previousCash_metadata = new PropertyMetadata('previousCash');
  Object.defineProperty(Cash.prototype, 'previousCash', {
    get: function () {
      return this.previousCash_e5imzj$_0.getValue_n5byny$(this, Cash$previousCash_metadata);
    },
    set: function (previousCash) {
      this.previousCash_e5imzj$_0.setValue_sq4zib$(this, Cash$previousCash_metadata, previousCash);
    }
  });
  Cash.prototype.shift_cd2r9u$ = function (cash, animate) {
    if (animate === void 0)
      animate = false;
    this.previousCash = this.currentCash;
    this.currentCash = cash;
    if (animate) {
      var note100P = this.note100Property.value;
      var note50P = this.note50Property.value;
      var note20P = this.note20Property.value;
      var note10P = this.note10Property.value;
      var note5P = this.note5Property.value;
      var coin200P = this.coin200Property.value;
      var coin100P = this.coin100Property.value;
      var coin50P = this.coin50Property.value;
      var coin20P = this.coin20Property.value;
      var coin10P = this.coin10Property.value;
      var coin5P = this.coin5Property.value;
      var coin2P = this.coin2Property.value;
      var coin1P = this.coin1Property.value;
      this.note100Property.value = this.previousNote100Property.value;
      this.note50Property.value = this.previousNote50Property.value;
      this.note20Property.value = this.previousNote20Property.value;
      this.note10Property.value = this.previousNote10Property.value;
      this.note5Property.value = this.previousNote5Property.value;
      this.coin200Property.value = this.previousCoin200Property.value;
      this.coin100Property.value = this.previousCoin100Property.value;
      this.coin50Property.value = this.previousCoin50Property.value;
      this.coin20Property.value = this.previousCoin20Property.value;
      this.coin10Property.value = this.previousCoin10Property.value;
      this.coin5Property.value = this.previousCoin5Property.value;
      this.coin2Property.value = this.previousCoin2Property.value;
      this.coin1Property.value = this.previousCoin1Property.value;
      this.currentCash = cash;
      Cash$Companion_getInstance().animate_6miplt$(this.note100Property, this.previousNote100Property.value, note100P);
      Cash$Companion_getInstance().animate_6miplt$(this.note50Property, this.previousNote50Property.value, note50P);
      Cash$Companion_getInstance().animate_6miplt$(this.note20Property, this.previousNote20Property.value, note20P);
      Cash$Companion_getInstance().animate_6miplt$(this.note10Property, this.previousNote10Property.value, note10P);
      Cash$Companion_getInstance().animate_6miplt$(this.note5Property, this.previousNote5Property.value, note5P);
      Cash$Companion_getInstance().animate_6miplt$(this.coin200Property, this.previousCoin200Property.value, coin200P);
      Cash$Companion_getInstance().animate_6miplt$(this.coin100Property, this.previousCoin100Property.value, coin100P);
      Cash$Companion_getInstance().animate_6miplt$(this.coin50Property, this.previousCoin50Property.value, coin50P);
      Cash$Companion_getInstance().animate_6miplt$(this.coin20Property, this.previousCoin20Property.value, coin20P);
      Cash$Companion_getInstance().animate_6miplt$(this.coin10Property, this.previousCoin10Property.value, coin10P);
      Cash$Companion_getInstance().animate_6miplt$(this.coin5Property, this.previousCoin5Property.value, coin5P);
      Cash$Companion_getInstance().animate_6miplt$(this.coin2Property, this.previousCoin2Property.value, coin2P);
      Cash$Companion_getInstance().animate_6miplt$(this.coin1Property, this.previousCoin1Property.value, coin1P);
    }
     else {
      this.currentCash = cash;
    }
  };
  Cash.prototype.calculate = function () {
    var result = this.currentCash.copy_w4s6ji$();
    CashProblem_getInstance().solve_p2lkh7$(result);
    this.shift_cd2r9u$(result, true);
  };
  function Cash$Companion() {
    Cash$Companion_instance = this;
    this.ANIMATION_TIME = 400;
  }
  Cash$Companion.prototype.ease_0 = function (t) {
    var tmp$;
    var t2 = t * 2;
    if (t2 <= 1)
      tmp$ = t2 * t2 * t2;
    else {
      t2 -= 2;
      tmp$ = t2 * t2 * t2 + 2;
    }
    return tmp$ / 2.0;
  };
  function Cash$Companion$animate$step$lambda(closure$step) {
    return function () {
      closure$step();
      return Unit;
    };
  }
  function Cash$Companion$animate$step(closure$end, closure$to, closure$property, closure$start, closure$duration, this$Cash$, closure$from, closure$delta) {
    return function closure$step() {
      var now = Date.now();
      if (now > closure$end) {
        closure$property.value = closure$to;
      }
       else {
        var progress = this$Cash$.ease_0((now - closure$start) / closure$duration);
        closure$property.value = closure$from + roundToInt(progress * closure$delta) | 0;
        async(10, Cash$Companion$animate$step$lambda(closure$step));
      }
    };
  }
  function Cash$Companion$animate$lambda(closure$step) {
    return function () {
      closure$step();
      return Unit;
    };
  }
  Cash$Companion.prototype.animate_6miplt$ = function (property, from, to) {
    property.value = from;
    var start = Date.now();
    var duration = 400;
    var end = start + duration;
    var delta = to - from | 0;
    var step = Cash$Companion$animate$step(end, to, property, start, duration, this, from, delta);
    async(10, Cash$Companion$animate$lambda(step));
  };
  Cash$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Cash$Companion_instance = null;
  function Cash$Companion_getInstance() {
    if (Cash$Companion_instance === null) {
      new Cash$Companion();
    }
    return Cash$Companion_instance;
  }
  Cash.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Cash',
    interfaces: []
  };
  function CashBox() {
    ViewCollection.call(this);
    this.cash_0 = new Cash();
    this.modeProperty_0 = property(Mode$EDIT_getInstance());
    this.mode_r8ucdz$_0 = this.modeProperty_0;
    this.saveCash_0 = true;
    this.hideSnapshot_0 = false;
    this.editable_0 = mapBinding(this.modeProperty_0, CashBox$editable$lambda);
    this.targetView_432sv0$_0 = this.targetView_432sv0$_0;
    this.totalErrorProperty_0 = join(this.modeProperty_0, this.cash_0.totalProperty, CashBox$totalErrorProperty$lambda);
    this.snapshotDiffProperty_0 = join(Snapshot$Companion_getInstance().currentSnapshotProperty, Snapshot$Companion_getInstance().nowProperty, CashBox$snapshotDiffProperty$lambda);
    this.snapshotStringProperty_0 = join(this.snapshotDiffProperty_0, this.modeProperty_0, CashBox$snapshotStringProperty$lambda(this));
    this.bookDialog_0 = new BookDialog(this.cash_0);
    var tmp$;
    if ((tmp$ = Snapshot$Companion_getInstance().newestSnapshot.value) != null) {
      this.cash_0.currentCash.load_p2lkh7$(tmp$.cash);
    }
    this.cash_0.totalProperty.onChange.invoke_qlkmfe$(CashBox_init$lambda(this));
    boxView(this, [], CashBox_init$lambda_0(this));
    boxView(this, [], CashBox_init$lambda_1(this));
    this.modeProperty_0.onChange.invoke_qlkmfe$(CashBox_init$lambda_2(this));
    this.classList.set_ivxn3r$('calculate', this.mode_0 === Mode$CALCULATE_getInstance());
    this.classList.set_ivxn3r$('history-mode', this.mode_0 === Mode$HISOTRY_getInstance());
    Snapshot$Companion_getInstance().onLoad.invoke_qlkmfe$(CashBox_init$lambda_3(this));
    event.GlobalEventBus.subscribe_8bdrlz$(getKClass(CalculateEvent), CashBox_init$lambda_4(this));
    event.GlobalEventBus.subscribe_8bdrlz$(getKClass(ResetEvent), CashBox_init$lambda_5(this));
    this.unaryPlus_o71kt9$(this.bookDialog_0);
  }
  var CashBox$mode_metadata = new PropertyMetadata('mode');
  Object.defineProperty(CashBox.prototype, 'mode_0', {
    get: function () {
      return this.mode_r8ucdz$_0.getValue_n5byny$(this, CashBox$mode_metadata);
    },
    set: function (mode) {
      this.mode_r8ucdz$_0.setValue_sq4zib$(this, CashBox$mode_metadata, mode);
    }
  });
  Object.defineProperty(CashBox.prototype, 'targetView_0', {
    get: function () {
      if (this.targetView_432sv0$_0 == null)
        return throwUPAE('targetView');
      return this.targetView_432sv0$_0;
    },
    set: function (targetView) {
      this.targetView_432sv0$_0 = targetView;
    }
  });
  function CashBox$editable$lambda(it) {
    return it === Mode$EDIT_getInstance();
  }
  function CashBox$totalErrorProperty$lambda(calc, total) {
    return calc === Mode$CALCULATE_getInstance() && total !== CashEntry$Companion_getInstance().default.totalProperty.value;
  }
  function CashBox$snapshotDiffProperty$lambda(snapshot, now) {
    var tmp$;
    return now.subtract((tmp$ = snapshot != null ? snapshot.date : null) != null ? tmp$ : L0);
  }
  function CashBox$snapshotStringProperty$lambda(this$CashBox) {
    return function (snapshot, mode) {
      if (mode === Mode$HISOTRY_getInstance() || mode === Mode$SETTINGS_getInstance())
        return '';
      var diff = snapshot.div(Kotlin.Long.fromInt(1000));
      return equals(snapshot, L0) || diff.toNumber() < 300 || this$CashBox.cash_0.totalProperty.value === 0.0 || this$CashBox.hideSnapshot_0 ? '' : Snapshot$Companion_getInstance().formatTimeDiff_s8cxhz$(diff);
    };
  }
  function CashBox_init$lambda(this$CashBox) {
    return function (it) {
      if (this$CashBox.saveCash_0)
        Snapshot$Companion_getInstance().save_p2lkh7$(this$CashBox.cash_0.currentCash);
      return Unit;
    };
  }
  function CashBox_init$lambda$lambda$lambda$lambda(it) {
    return it === Mode$EDIT_getInstance() ? MaterialIcon$CLEAR_getInstance() : MaterialIcon$ARROW_BACK_getInstance();
  }
  function CashBox_init$lambda$lambda$lambda$lambda_0(it) {
    return it === Mode$EDIT_getInstance() ? t('reset') : t('back');
  }
  function CashBox_init$lambda$lambda$lambda$lambda$lambda(it) {
    emit(ResetEvent_getInstance());
    return Unit;
  }
  function CashBox_init$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.onClick.invoke_qlkmfe$(CashBox_init$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function CashBox_init$lambda$lambda$lambda$lambda$lambda_0(this$CashBox) {
    return function (it) {
      if (this$CashBox.mode_0 === Mode$CALCULATE_getInstance()) {
        emit(ResetEvent_getInstance());
      }
      this$CashBox.mode_0 = Mode$HISOTRY_getInstance();
      return Unit;
    };
  }
  function CashBox_init$lambda$lambda$lambda$lambda_2(this$CashBox) {
    return function ($receiver) {
      property_0(getPropertyCallableRef('title', 0, function ($receiver) {
        return $receiver.title;
      }.bind(null, $receiver), function ($receiver, value) {
        $receiver.title = value;
      }.bind(null, $receiver))).bind_ybyx9l$(t('history'));
      $receiver.onClick.invoke_qlkmfe$(CashBox_init$lambda$lambda$lambda$lambda$lambda_0(this$CashBox));
      return Unit;
    };
  }
  function CashBox_init$lambda$lambda$lambda$lambda$lambda_1(this$CashBox) {
    return function (it) {
      if (this$CashBox.mode_0 === Mode$CALCULATE_getInstance()) {
        emit(ResetEvent_getInstance());
      }
      this$CashBox.mode_0 = Mode$SETTINGS_getInstance();
      return Unit;
    };
  }
  function CashBox_init$lambda$lambda$lambda$lambda_3(this$CashBox) {
    return function ($receiver) {
      property_0(getPropertyCallableRef('title', 0, function ($receiver) {
        return $receiver.title;
      }.bind(null, $receiver), function ($receiver, value) {
        $receiver.title = value;
      }.bind(null, $receiver))).bind_ybyx9l$(t('settings'));
      $receiver.onClick.invoke_qlkmfe$(CashBox_init$lambda$lambda$lambda$lambda$lambda_1(this$CashBox));
      return Unit;
    };
  }
  function CashBox_init$lambda$lambda$lambda(this$CashBox) {
    return function ($receiver) {
      $receiver.classList.bind_pwxjbw$('error', this$CashBox.totalErrorProperty_0);
      var iconProperty = mapBinding(this$CashBox.modeProperty_0, CashBox_init$lambda$lambda$lambda$lambda);
      property_0(getPropertyCallableRef('title', 0, function ($receiver) {
        return $receiver.title;
      }.bind(null, $receiver), function ($receiver, value) {
        $receiver.title = value;
      }.bind(null, $receiver))).bind_ybyx9l$(flatten(mapBinding(this$CashBox.modeProperty_0, CashBox_init$lambda$lambda$lambda$lambda_0)));
      iconView_0($receiver, iconProperty, CashBox_init$lambda$lambda$lambda$lambda_1);
      iconView($receiver, MaterialIcon$HISTORY_getInstance(), CashBox_init$lambda$lambda$lambda$lambda_2(this$CashBox));
      iconView($receiver, MaterialIcon$SETTINGS_getInstance(), CashBox_init$lambda$lambda$lambda$lambda_3(this$CashBox));
      return Unit;
    };
  }
  function CashBox_init$lambda$lambda$lambda_0(mode, total) {
    switch (mode.name) {
      case 'EDIT':
      case 'CALCULATE':
        return constProperty(format(total, 2) + ' \u20AC');
      case 'SETTINGS':
        return t('settings');
      case 'HISOTRY':
        return t('history');
      default:return Kotlin.noWhenBranchMatched();
    }
  }
  function CashBox_init$lambda$lambda$lambda_1(this$CashBox) {
    return function ($receiver) {
      $receiver.classList.bind_pwxjbw$('error', this$CashBox.totalErrorProperty_0);
      return Unit;
    };
  }
  function CashBox_init$lambda$lambda$lambda_2($receiver) {
    $receiver.classList.plusAssign_61zpoe$('target');
    return Unit;
  }
  function CashBox_init$lambda$lambda$lambda_3($receiver) {
    $receiver.classList.plusAssign_61zpoe$('snapshot');
    return Unit;
  }
  function CashBox_init$lambda$lambda$lambda$lambda$lambda_2(it) {
    emit(CalculateEvent_getInstance());
    return Unit;
  }
  function CashBox_init$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.onClick.invoke_qlkmfe$(CashBox_init$lambda$lambda$lambda$lambda$lambda_2);
    return Unit;
  }
  function CashBox_init$lambda$lambda$lambda_4(this$CashBox) {
    return function ($receiver) {
      $receiver.classList.bind_pwxjbw$('error', this$CashBox.totalErrorProperty_0);
      textView_0($receiver, t('calculate'), CashBox_init$lambda$lambda$lambda$lambda_4);
      return Unit;
    };
  }
  function CashBox_init$lambda$lambda(this$CashBox) {
    return function ($receiver) {
      $receiver.classList.plusAssign_61zpoe$('header-box');
      boxView($receiver, [], CashBox_init$lambda$lambda$lambda(this$CashBox));
      textView_0($receiver, flatten(join(this$CashBox.modeProperty_0, this$CashBox.cash_0.totalProperty, CashBox_init$lambda$lambda$lambda_0)), CashBox_init$lambda$lambda$lambda_1(this$CashBox));
      this$CashBox.targetView_0 = textView($receiver, void 0, CashBox_init$lambda$lambda$lambda_2);
      textView_0($receiver, this$CashBox.snapshotStringProperty_0, CashBox_init$lambda$lambda$lambda_3);
      boxView($receiver, [], CashBox_init$lambda$lambda$lambda_4(this$CashBox));
      return Unit;
    };
  }
  function CashBox_init$lambda$lambda$lambda_5(this$CashBox, closure$box, closure$settings, closure$history) {
    return function () {
      switch (this$CashBox.mode_0.name) {
        case 'EDIT':
          return closure$box;
        case 'CALCULATE':
          return closure$box;
        case 'SETTINGS':
          return closure$settings;
        case 'HISOTRY':
          return closure$history;
        default:return Kotlin.noWhenBranchMatched();
      }
    };
  }
  function CashBox_init$lambda$lambda_0(this$CashBox) {
    return function ($receiver) {
      var $receiver_0 = new BoxView();
      var this$CashBox_0 = this$CashBox;
      $receiver_0.unaryPlus_o71kt9$(new CoinBox(this$CashBox_0.cash_0, this$CashBox_0.editable_0));
      $receiver_0.unaryPlus_o71kt9$(new NoteBox(this$CashBox_0.cash_0, this$CashBox_0.editable_0));
      var box = $receiver_0;
      var settings = new Settings();
      var history = new History();
      bindView($receiver, [this$CashBox.modeProperty_0], CashBox_init$lambda$lambda$lambda_5(this$CashBox, box, settings, history));
      return Unit;
    };
  }
  function CashBox_init$lambda_0(this$CashBox) {
    return function ($receiver) {
      boxView($receiver, [], CashBox_init$lambda$lambda(this$CashBox));
      boxView($receiver, ['container'], CashBox_init$lambda$lambda_0(this$CashBox));
      return Unit;
    };
  }
  function CashBox_init$lambda_1(this$CashBox) {
    return function ($receiver) {
      $receiver.unaryPlus_o71kt9$(new Envelope(this$CashBox.cash_0, this$CashBox.totalErrorProperty_0));
      return Unit;
    };
  }
  function CashBox_init$lambda_2(this$CashBox) {
    return function (it) {
      this$CashBox.classList.set_ivxn3r$('calculate', this$CashBox.mode_0 === Mode$CALCULATE_getInstance());
      this$CashBox.classList.set_ivxn3r$('history-mode', this$CashBox.mode_0 === Mode$HISOTRY_getInstance());
      return Unit;
    };
  }
  function CashBox_init$lambda_3(this$CashBox) {
    return function (it) {
      var oldSave = this$CashBox.saveCash_0;
      this$CashBox.saveCash_0 = false;
      this$CashBox.cash_0.currentCash.load_p2lkh7$(it.cash);
      this$CashBox.saveCash_0 = oldSave;
      this$CashBox.mode_0 = Mode$EDIT_getInstance();
      return Unit;
    };
  }
  function CashBox_init$lambda$lambda_1(this$CashBox) {
    return function () {
      this$CashBox.mode_0 = Mode$CALCULATE_getInstance();
      this$CashBox.bookDialog_0.show();
      return Unit;
    };
  }
  function CashBox_init$lambda_4(this$CashBox) {
    return function (it) {
      if (this$CashBox.mode_0 === Mode$EDIT_getInstance()) {
        this$CashBox.saveCash_0 = false;
        this$CashBox.cash_0.calculate();
        async(600, CashBox_init$lambda$lambda_1(this$CashBox));
      }
      return Unit;
    };
  }
  function CashBox_init$lambda$lambda$lambda_6(this$CashBox) {
    return function () {
      this$CashBox.cash_0.previousCash = new CashEntry();
      this$CashBox.saveCash_0 = true;
      return Unit;
    };
  }
  function CashBox_init$lambda$lambda_2(this$CashBox) {
    return function () {
      var current = this$CashBox.cash_0.previousCash.copy_w4s6ji$();
      this$CashBox.cash_0.shift_cd2r9u$(this$CashBox.cash_0.previousCash, true);
      this$CashBox.cash_0.previousCash = current;
      async(400, CashBox_init$lambda$lambda$lambda_6(this$CashBox));
      return Unit;
    };
  }
  function CashBox_init$lambda$lambda_3(this$CashBox) {
    return function () {
      this$CashBox.saveCash_0 = true;
      return Unit;
    };
  }
  function CashBox_init$lambda_5(this$CashBox) {
    return function (it) {
      if (this$CashBox.mode_0 === Mode$CALCULATE_getInstance()) {
        this$CashBox.bookDialog_0.hide();
        async(300, CashBox_init$lambda$lambda_2(this$CashBox));
      }
       else if (this$CashBox.mode_0 === Mode$EDIT_getInstance()) {
        this$CashBox.saveCash_0 = false;
        this$CashBox.cash_0.shift_cd2r9u$(new CashEntry(), true);
        this$CashBox.cash_0.previousCash = new CashEntry();
        async(400, CashBox_init$lambda$lambda_3(this$CashBox));
      }
      this$CashBox.mode_0 = Mode$EDIT_getInstance();
      return Unit;
    };
  }
  CashBox.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CashBox',
    interfaces: [ViewCollection]
  };
  function CalculateEvent() {
    CalculateEvent_instance = this;
  }
  CalculateEvent.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CalculateEvent',
    interfaces: []
  };
  var CalculateEvent_instance = null;
  function CalculateEvent_getInstance() {
    if (CalculateEvent_instance === null) {
      new CalculateEvent();
    }
    return CalculateEvent_instance;
  }
  function ResetEvent() {
    ResetEvent_instance = this;
  }
  ResetEvent.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ResetEvent',
    interfaces: []
  };
  var ResetEvent_instance = null;
  function ResetEvent_getInstance() {
    if (ResetEvent_instance === null) {
      new ResetEvent();
    }
    return ResetEvent_instance;
  }
  function Mode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Mode_initFields() {
    Mode_initFields = function () {
    };
    Mode$EDIT_instance = new Mode('EDIT', 0);
    Mode$CALCULATE_instance = new Mode('CALCULATE', 1);
    Mode$SETTINGS_instance = new Mode('SETTINGS', 2);
    Mode$HISOTRY_instance = new Mode('HISOTRY', 3);
  }
  var Mode$EDIT_instance;
  function Mode$EDIT_getInstance() {
    Mode_initFields();
    return Mode$EDIT_instance;
  }
  var Mode$CALCULATE_instance;
  function Mode$CALCULATE_getInstance() {
    Mode_initFields();
    return Mode$CALCULATE_instance;
  }
  var Mode$SETTINGS_instance;
  function Mode$SETTINGS_getInstance() {
    Mode_initFields();
    return Mode$SETTINGS_instance;
  }
  var Mode$HISOTRY_instance;
  function Mode$HISOTRY_getInstance() {
    Mode_initFields();
    return Mode$HISOTRY_instance;
  }
  Mode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mode',
    interfaces: [Enum]
  };
  function Mode$values() {
    return [Mode$EDIT_getInstance(), Mode$CALCULATE_getInstance(), Mode$SETTINGS_getInstance(), Mode$HISOTRY_getInstance()];
  }
  Mode.values = Mode$values;
  function Mode$valueOf(name) {
    switch (name) {
      case 'EDIT':
        return Mode$EDIT_getInstance();
      case 'CALCULATE':
        return Mode$CALCULATE_getInstance();
      case 'SETTINGS':
        return Mode$SETTINGS_getInstance();
      case 'HISOTRY':
        return Mode$HISOTRY_getInstance();
      default:throwISE('No enum constant de.ascii.Mode.' + name);
    }
  }
  Mode.valueOf_61zpoe$ = Mode$valueOf;
  function CashEntry(note100, note50, note20, note10, note5, coin200, coin100, coin50, coin20, coin10, coin5, coin2, coin1) {
    CashEntry$Companion_getInstance();
    if (note100 === void 0)
      note100 = 0;
    if (note50 === void 0)
      note50 = 0;
    if (note20 === void 0)
      note20 = 0;
    if (note10 === void 0)
      note10 = 0;
    if (note5 === void 0)
      note5 = 0;
    if (coin200 === void 0)
      coin200 = 0;
    if (coin100 === void 0)
      coin100 = 0;
    if (coin50 === void 0)
      coin50 = 0;
    if (coin20 === void 0)
      coin20 = 0;
    if (coin10 === void 0)
      coin10 = 0;
    if (coin5 === void 0)
      coin5 = 0;
    if (coin2 === void 0)
      coin2 = 0;
    if (coin1 === void 0)
      coin1 = 0;
    this.note100_0 = note100;
    this.note50_0 = note50;
    this.note20_0 = note20;
    this.note10_0 = note10;
    this.note5_0 = note5;
    this.coin200_0 = coin200;
    this.coin100_0 = coin100;
    this.coin50_0 = coin50;
    this.coin20_0 = coin20;
    this.coin10_0 = coin10;
    this.coin5_0 = coin5;
    this.coin2_0 = coin2;
    this.coin1_0 = coin1;
    this.note100Property = property_0(getPropertyCallableRef('note100', 0, function ($receiver) {
      return $receiver.note100_0;
    }.bind(null, this), function ($receiver, value) {
      $receiver.note100_0 = value;
    }.bind(null, this)));
    this.note50Property = property_0(getPropertyCallableRef('note50', 0, function ($receiver) {
      return $receiver.note50_0;
    }.bind(null, this), function ($receiver, value) {
      $receiver.note50_0 = value;
    }.bind(null, this)));
    this.note20Property = property_0(getPropertyCallableRef('note20', 0, function ($receiver) {
      return $receiver.note20_0;
    }.bind(null, this), function ($receiver, value) {
      $receiver.note20_0 = value;
    }.bind(null, this)));
    this.note10Property = property_0(getPropertyCallableRef('note10', 0, function ($receiver) {
      return $receiver.note10_0;
    }.bind(null, this), function ($receiver, value) {
      $receiver.note10_0 = value;
    }.bind(null, this)));
    this.note5Property = property_0(getPropertyCallableRef('note5', 0, function ($receiver) {
      return $receiver.note5_0;
    }.bind(null, this), function ($receiver, value) {
      $receiver.note5_0 = value;
    }.bind(null, this)));
    this.coin200Property = property_0(getPropertyCallableRef('coin200', 0, function ($receiver) {
      return $receiver.coin200_0;
    }.bind(null, this), function ($receiver, value) {
      $receiver.coin200_0 = value;
    }.bind(null, this)));
    this.coin100Property = property_0(getPropertyCallableRef('coin100', 0, function ($receiver) {
      return $receiver.coin100_0;
    }.bind(null, this), function ($receiver, value) {
      $receiver.coin100_0 = value;
    }.bind(null, this)));
    this.coin50Property = property_0(getPropertyCallableRef('coin50', 0, function ($receiver) {
      return $receiver.coin50_0;
    }.bind(null, this), function ($receiver, value) {
      $receiver.coin50_0 = value;
    }.bind(null, this)));
    this.coin20Property = property_0(getPropertyCallableRef('coin20', 0, function ($receiver) {
      return $receiver.coin20_0;
    }.bind(null, this), function ($receiver, value) {
      $receiver.coin20_0 = value;
    }.bind(null, this)));
    this.coin10Property = property_0(getPropertyCallableRef('coin10', 0, function ($receiver) {
      return $receiver.coin10_0;
    }.bind(null, this), function ($receiver, value) {
      $receiver.coin10_0 = value;
    }.bind(null, this)));
    this.coin5Property = property_0(getPropertyCallableRef('coin5', 0, function ($receiver) {
      return $receiver.coin5_0;
    }.bind(null, this), function ($receiver, value) {
      $receiver.coin5_0 = value;
    }.bind(null, this)));
    this.coin2Property = property_0(getPropertyCallableRef('coin2', 0, function ($receiver) {
      return $receiver.coin2_0;
    }.bind(null, this), function ($receiver, value) {
      $receiver.coin2_0 = value;
    }.bind(null, this)));
    this.coin1Property = property_0(getPropertyCallableRef('coin1', 0, function ($receiver) {
      return $receiver.coin1_0;
    }.bind(null, this), function ($receiver, value) {
      $receiver.coin1_0 = value;
    }.bind(null, this)));
    this.totalProperty = plus(plus(plus(plus(plus(plus(plus(plus(plus(plus(plus(plus(times(this.note100Property, 100.0), times(this.note50Property, 50.0)), times(this.note20Property, 20.0)), times(this.note10Property, 10.0)), times(this.note5Property, 5.0)), times(this.coin200Property, 2.0)), times(this.coin100Property, 1.0)), times(this.coin50Property, 0.5)), times(this.coin20Property, 0.2)), times(this.coin10Property, 0.1)), times(this.coin5Property, 0.05)), times(this.coin2Property, 0.02)), times(this.coin1Property, 0.01));
  }
  CashEntry.prototype.load_p2lkh7$ = function (cash) {
    this.note100Property.value = cash.note100Property.value;
    this.note50Property.value = cash.note50Property.value;
    this.note20Property.value = cash.note20Property.value;
    this.note10Property.value = cash.note10Property.value;
    this.note5Property.value = cash.note5Property.value;
    this.coin200Property.value = cash.coin200Property.value;
    this.coin100Property.value = cash.coin100Property.value;
    this.coin50Property.value = cash.coin50Property.value;
    this.coin20Property.value = cash.coin20Property.value;
    this.coin10Property.value = cash.coin10Property.value;
    this.coin5Property.value = cash.coin5Property.value;
    this.coin2Property.value = cash.coin2Property.value;
    this.coin1Property.value = cash.coin1Property.value;
  };
  function CashEntry$Companion() {
    CashEntry$Companion_instance = this;
  }
  Object.defineProperty(CashEntry$Companion.prototype, 'default', {
    get: function () {
      return new CashEntry(0, 0, 0, 2, 2, 13, 25, 23, 25, 25, 0, 0, 0);
    }
  });
  CashEntry$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CashEntry$Companion_instance = null;
  function CashEntry$Companion_getInstance() {
    if (CashEntry$Companion_instance === null) {
      new CashEntry$Companion();
    }
    return CashEntry$Companion_instance;
  }
  CashEntry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CashEntry',
    interfaces: []
  };
  CashEntry.prototype.component1_0 = function () {
    return this.note100_0;
  };
  CashEntry.prototype.component2_0 = function () {
    return this.note50_0;
  };
  CashEntry.prototype.component3_0 = function () {
    return this.note20_0;
  };
  CashEntry.prototype.component4_0 = function () {
    return this.note10_0;
  };
  CashEntry.prototype.component5_0 = function () {
    return this.note5_0;
  };
  CashEntry.prototype.component6_0 = function () {
    return this.coin200_0;
  };
  CashEntry.prototype.component7_0 = function () {
    return this.coin100_0;
  };
  CashEntry.prototype.component8_0 = function () {
    return this.coin50_0;
  };
  CashEntry.prototype.component9_0 = function () {
    return this.coin20_0;
  };
  CashEntry.prototype.component10_0 = function () {
    return this.coin10_0;
  };
  CashEntry.prototype.component11_0 = function () {
    return this.coin5_0;
  };
  CashEntry.prototype.component12_0 = function () {
    return this.coin2_0;
  };
  CashEntry.prototype.component13_0 = function () {
    return this.coin1_0;
  };
  CashEntry.prototype.copy_w4s6ji$ = function (note100, note50, note20, note10, note5, coin200, coin100, coin50, coin20, coin10, coin5, coin2, coin1) {
    return new CashEntry(note100 === void 0 ? this.note100_0 : note100, note50 === void 0 ? this.note50_0 : note50, note20 === void 0 ? this.note20_0 : note20, note10 === void 0 ? this.note10_0 : note10, note5 === void 0 ? this.note5_0 : note5, coin200 === void 0 ? this.coin200_0 : coin200, coin100 === void 0 ? this.coin100_0 : coin100, coin50 === void 0 ? this.coin50_0 : coin50, coin20 === void 0 ? this.coin20_0 : coin20, coin10 === void 0 ? this.coin10_0 : coin10, coin5 === void 0 ? this.coin5_0 : coin5, coin2 === void 0 ? this.coin2_0 : coin2, coin1 === void 0 ? this.coin1_0 : coin1);
  };
  CashEntry.prototype.toString = function () {
    return 'CashEntry(note100=' + Kotlin.toString(this.note100_0) + (', note50=' + Kotlin.toString(this.note50_0)) + (', note20=' + Kotlin.toString(this.note20_0)) + (', note10=' + Kotlin.toString(this.note10_0)) + (', note5=' + Kotlin.toString(this.note5_0)) + (', coin200=' + Kotlin.toString(this.coin200_0)) + (', coin100=' + Kotlin.toString(this.coin100_0)) + (', coin50=' + Kotlin.toString(this.coin50_0)) + (', coin20=' + Kotlin.toString(this.coin20_0)) + (', coin10=' + Kotlin.toString(this.coin10_0)) + (', coin5=' + Kotlin.toString(this.coin5_0)) + (', coin2=' + Kotlin.toString(this.coin2_0)) + (', coin1=' + Kotlin.toString(this.coin1_0)) + ')';
  };
  CashEntry.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.note100_0) | 0;
    result = result * 31 + Kotlin.hashCode(this.note50_0) | 0;
    result = result * 31 + Kotlin.hashCode(this.note20_0) | 0;
    result = result * 31 + Kotlin.hashCode(this.note10_0) | 0;
    result = result * 31 + Kotlin.hashCode(this.note5_0) | 0;
    result = result * 31 + Kotlin.hashCode(this.coin200_0) | 0;
    result = result * 31 + Kotlin.hashCode(this.coin100_0) | 0;
    result = result * 31 + Kotlin.hashCode(this.coin50_0) | 0;
    result = result * 31 + Kotlin.hashCode(this.coin20_0) | 0;
    result = result * 31 + Kotlin.hashCode(this.coin10_0) | 0;
    result = result * 31 + Kotlin.hashCode(this.coin5_0) | 0;
    result = result * 31 + Kotlin.hashCode(this.coin2_0) | 0;
    result = result * 31 + Kotlin.hashCode(this.coin1_0) | 0;
    return result;
  };
  CashEntry.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.note100_0, other.note100_0) && Kotlin.equals(this.note50_0, other.note50_0) && Kotlin.equals(this.note20_0, other.note20_0) && Kotlin.equals(this.note10_0, other.note10_0) && Kotlin.equals(this.note5_0, other.note5_0) && Kotlin.equals(this.coin200_0, other.coin200_0) && Kotlin.equals(this.coin100_0, other.coin100_0) && Kotlin.equals(this.coin50_0, other.coin50_0) && Kotlin.equals(this.coin20_0, other.coin20_0) && Kotlin.equals(this.coin10_0, other.coin10_0) && Kotlin.equals(this.coin5_0, other.coin5_0) && Kotlin.equals(this.coin2_0, other.coin2_0) && Kotlin.equals(this.coin1_0, other.coin1_0)))));
  };
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function CashProblem() {
    CashProblem_instance = this;
  }
  function CashProblem$solve$lambda(it) {
    return it.diffWeighted;
  }
  CashProblem.prototype.solve_p2lkh7$ = function (cash) {
    var tmp$, tmp$_0;
    var target = CashEntry$Companion_getInstance().default;
    var targetTotal = target.totalProperty.value;
    while (cash.totalProperty.value > targetTotal) {
      var $receiver = listOf([new CashProblem$Help(100.0, cash.note100Property, target.note100Property), new CashProblem$Help(50.0, cash.note50Property, target.note50Property), new CashProblem$Help(20.0, cash.note20Property, target.note20Property), new CashProblem$Help(10.0, cash.note10Property, target.note10Property), new CashProblem$Help(5.0, cash.note5Property, target.note5Property), new CashProblem$Help(2.0, cash.coin200Property, target.coin200Property), new CashProblem$Help(1.0, cash.coin100Property, target.coin100Property), new CashProblem$Help(0.5, cash.coin50Property, target.coin50Property), new CashProblem$Help(0.2, cash.coin20Property, target.coin20Property), new CashProblem$Help(0.1, cash.coin10Property, target.coin10Property), new CashProblem$Help(0.05, cash.coin5Property, target.coin5Property), new CashProblem$Help(0.02, cash.coin2Property, target.coin2Property), new CashProblem$Help(0.01, cash.coin1Property, target.coin1Property)]);
      var destination = ArrayList_init();
      var tmp$_1;
      tmp$_1 = $receiver.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        if (cash.totalProperty.value - element.value >= targetTotal && element.property.value > 0)
          destination.add_11rb$(element);
      }
      tmp$ = firstOrNull(sortedWith(destination, new Comparator$ObjectLiteral(compareBy$lambda(CashProblem$solve$lambda))));
      if (tmp$ == null) {
        return;
      }
      var first = tmp$;
      tmp$_0 = first.property;
      tmp$_0.value = tmp$_0.value - 1 | 0;
    }
  };
  function CashProblem$Help(value, property, target) {
    this.value = value;
    this.property = property;
    this.target = target;
    this.diff_0 = this.target.value - this.property.value | 0;
    var tmp$, tmp$_0;
    tmp$ = this.value;
    if (tmp$ === 100.0)
      tmp$_0 = 10.0;
    else if (tmp$ === 50.0)
      tmp$_0 = 10.0;
    else if (tmp$ === 20.0)
      tmp$_0 = 4.0;
    else if (tmp$ === 10.0)
      tmp$_0 = 1.1;
    else if (tmp$ === 5.0)
      tmp$_0 = 1.1;
    else if (tmp$ === 2.0)
      tmp$_0 = 1.0;
    else if (tmp$ === 1.0)
      tmp$_0 = 0.9;
    else if (tmp$ === 0.5)
      tmp$_0 = 0.9;
    else if (tmp$ === 0.2)
      tmp$_0 = 1.2;
    else if (tmp$ === 0.1)
      tmp$_0 = 1.5;
    else if (tmp$ === 0.05)
      tmp$_0 = 6.0;
    else if (tmp$ === 0.02)
      tmp$_0 = 9.0;
    else if (tmp$ === 0.01)
      tmp$_0 = 9.0;
    else
      tmp$_0 = 1.0;
    this.weight_0 = tmp$_0;
    this.diffWeighted = this.diff_0 * this.weight_0;
  }
  CashProblem$Help.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Help',
    interfaces: []
  };
  CashProblem$Help.prototype.component1 = function () {
    return this.value;
  };
  CashProblem$Help.prototype.component2 = function () {
    return this.property;
  };
  CashProblem$Help.prototype.component3 = function () {
    return this.target;
  };
  CashProblem$Help.prototype.copy_i7da8o$ = function (value, property, target) {
    return new CashProblem$Help(value === void 0 ? this.value : value, property === void 0 ? this.property : property, target === void 0 ? this.target : target);
  };
  CashProblem$Help.prototype.toString = function () {
    return 'Help(value=' + Kotlin.toString(this.value) + (', property=' + Kotlin.toString(this.property)) + (', target=' + Kotlin.toString(this.target)) + ')';
  };
  CashProblem$Help.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.property) | 0;
    result = result * 31 + Kotlin.hashCode(this.target) | 0;
    return result;
  };
  CashProblem$Help.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.value, other.value) && Kotlin.equals(this.property, other.property) && Kotlin.equals(this.target, other.target)))));
  };
  CashProblem.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CashProblem',
    interfaces: []
  };
  var CashProblem_instance = null;
  function CashProblem_getInstance() {
    if (CashProblem_instance === null) {
      new CashProblem();
    }
    return CashProblem_instance;
  }
  function Envelope(cash, errorProperty) {
    Envelope$Companion_getInstance();
    ViewCollection.call(this);
    this.cash = cash;
    this.errorProperty = errorProperty;
    this.sumProperty_0 = minus(this.cash.previousTotalProperty, this.cash.totalProperty);
    boxView(this, ['envelope-header'], Envelope_init$lambda(this));
    boxView(this, ['envelope-body'], Envelope_init$lambda_0(this));
    boxView(this, ['envelope-total'], Envelope_init$lambda_1(this));
    boxView(this, ['envelope-cover'], Envelope_init$lambda_2(this));
  }
  function Envelope$Companion() {
    Envelope$Companion_instance = this;
    var date = new Date();
    var it = date.getDate();
    var tmp$ = (it < 10 ? '0' + it : it).toString() + '.';
    var it_0 = date.getMonth() + 1 | 0;
    this.dateString = tmp$ + (it_0 < 10 ? '0' + it_0 : it_0).toString() + '.' + date.getFullYear();
  }
  Envelope$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Envelope$Companion_instance = null;
  function Envelope$Companion_getInstance() {
    if (Envelope$Companion_instance === null) {
      new Envelope$Companion();
    }
    return Envelope$Companion_instance;
  }
  function Envelope_init$lambda(this$Envelope) {
    return function ($receiver) {
      $receiver.classList.bind_pwxjbw$('error', this$Envelope.errorProperty);
      textView_0($receiver, t('envelope'));
      return Unit;
    };
  }
  function Envelope_init$lambda_0(this$Envelope) {
    return function ($receiver) {
      $receiver.unaryPlus_o71kt9$(new EnvelopeEntry('100 EURO', 100.0, this$Envelope.cash.note100Property, this$Envelope.cash.previousNote100Property));
      $receiver.unaryPlus_o71kt9$(new EnvelopeEntry('50 EURO', 50.0, this$Envelope.cash.note50Property, this$Envelope.cash.previousNote50Property));
      $receiver.unaryPlus_o71kt9$(new EnvelopeEntry('20 EURO', 20.0, this$Envelope.cash.note20Property, this$Envelope.cash.previousNote20Property));
      $receiver.unaryPlus_o71kt9$(new EnvelopeEntry('10 EURO', 10.0, this$Envelope.cash.note10Property, this$Envelope.cash.previousNote10Property));
      $receiver.unaryPlus_o71kt9$(new EnvelopeEntry('5 EURO', 5.0, this$Envelope.cash.note5Property, this$Envelope.cash.previousNote5Property));
      $receiver.unaryPlus_o71kt9$(new EnvelopeEntry('2 EURO', 2.0, this$Envelope.cash.coin200Property, this$Envelope.cash.previousCoin200Property));
      $receiver.unaryPlus_o71kt9$(new EnvelopeEntry('1 EURO', 1.0, this$Envelope.cash.coin100Property, this$Envelope.cash.previousCoin100Property));
      $receiver.unaryPlus_o71kt9$(new EnvelopeEntry('50 CENT', 0.5, this$Envelope.cash.coin50Property, this$Envelope.cash.previousCoin50Property));
      $receiver.unaryPlus_o71kt9$(new EnvelopeEntry('20 CENT', 0.2, this$Envelope.cash.coin20Property, this$Envelope.cash.previousCoin20Property));
      $receiver.unaryPlus_o71kt9$(new EnvelopeEntry('10 CENT', 0.1, this$Envelope.cash.coin10Property, this$Envelope.cash.previousCoin10Property));
      $receiver.unaryPlus_o71kt9$(new EnvelopeEntry('5 CENT', 0.05, this$Envelope.cash.coin5Property, this$Envelope.cash.previousCoin5Property));
      $receiver.unaryPlus_o71kt9$(new EnvelopeEntry('2 CENT', 0.02, this$Envelope.cash.coin2Property, this$Envelope.cash.previousCoin2Property));
      $receiver.unaryPlus_o71kt9$(new EnvelopeEntry('1 CENT', 0.01, this$Envelope.cash.coin1Property, this$Envelope.cash.previousCoin1Property));
      return Unit;
    };
  }
  function Envelope_init$lambda$lambda(it) {
    return it + ': ';
  }
  function Envelope_init$lambda$lambda_0(it) {
    return format(it, 2) + ' \u20AC';
  }
  function Envelope_init$lambda$lambda_1($receiver) {
    $receiver.readonly = true;
    $receiver.preventTabStop();
    return Unit;
  }
  function Envelope_init$lambda_1(this$Envelope) {
    return function ($receiver) {
      textView_0($receiver, mapBinding(t('total'), Envelope_init$lambda$lambda));
      inputView_0($receiver, mapBinding(this$Envelope.sumProperty_0, Envelope_init$lambda$lambda_0), Envelope_init$lambda$lambda_1);
      return Unit;
    };
  }
  function Envelope_init$lambda$lambda$lambda$lambda$lambda(it) {
    return it + ': ';
  }
  function Envelope_init$lambda$lambda$lambda$lambda($receiver) {
    textView_0($receiver, mapBinding(t('name'), Envelope_init$lambda$lambda$lambda$lambda$lambda));
    return Unit;
  }
  function Envelope_init$lambda$lambda$lambda$lambda$lambda$lambda(this$) {
    return function (it) {
      window.localStorage['username'] = this$.value;
      return Unit;
    };
  }
  function Envelope_init$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.valueProperty.onChange.invoke_qlkmfe$(Envelope_init$lambda$lambda$lambda$lambda$lambda$lambda($receiver));
    property_0(getPropertyCallableRef('placeholder', 0, function ($receiver) {
      return $receiver.placeholder;
    }.bind(null, $receiver), function ($receiver, value) {
      $receiver.placeholder = value;
    }.bind(null, $receiver))).bind_ybyx9l$(t('your_name'));
    return Unit;
  }
  function Envelope_init$lambda$lambda$lambda$lambda_0($receiver) {
    var tmp$;
    inputView($receiver, (tmp$ = window.localStorage['username']) != null ? tmp$ : '', Envelope_init$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function Envelope_init$lambda$lambda$lambda($receiver) {
    cell($receiver, void 0, Envelope_init$lambda$lambda$lambda$lambda);
    cell($receiver, void 0, Envelope_init$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function Envelope_init$lambda$lambda$lambda$lambda$lambda_1(it) {
    return it + ': ';
  }
  function Envelope_init$lambda$lambda$lambda$lambda_1($receiver) {
    textView_0($receiver, mapBinding(t('date'), Envelope_init$lambda$lambda$lambda$lambda$lambda_1));
    return Unit;
  }
  function Envelope_init$lambda$lambda$lambda$lambda_2($receiver) {
    textView($receiver, Envelope$Companion_getInstance().dateString);
    return Unit;
  }
  function Envelope_init$lambda$lambda$lambda_0($receiver) {
    cell($receiver, void 0, Envelope_init$lambda$lambda$lambda$lambda_1);
    cell($receiver, void 0, Envelope_init$lambda$lambda$lambda$lambda_2);
    return Unit;
  }
  function Envelope_init$lambda$lambda$lambda$lambda$lambda_2(it) {
    return it + ': ';
  }
  function Envelope_init$lambda$lambda$lambda$lambda_3($receiver) {
    textView_0($receiver, mapBinding(t('money'), Envelope_init$lambda$lambda$lambda$lambda$lambda_2));
    return Unit;
  }
  function Envelope_init$lambda$lambda$lambda$lambda$lambda_3(it) {
    return format(it, 2) + ' \u20AC';
  }
  function Envelope_init$lambda$lambda$lambda$lambda_4(this$Envelope) {
    return function ($receiver) {
      textView_0($receiver, mapBinding(this$Envelope.sumProperty_0, Envelope_init$lambda$lambda$lambda$lambda$lambda_3));
      return Unit;
    };
  }
  function Envelope_init$lambda$lambda$lambda_1(this$Envelope) {
    return function ($receiver) {
      cell($receiver, void 0, Envelope_init$lambda$lambda$lambda$lambda_3);
      cell($receiver, void 0, Envelope_init$lambda$lambda$lambda$lambda_4(this$Envelope));
      return Unit;
    };
  }
  function Envelope_init$lambda$lambda_2(this$Envelope) {
    return function ($receiver) {
      row($receiver, [], Envelope_init$lambda$lambda$lambda);
      row($receiver, [], Envelope_init$lambda$lambda$lambda_0);
      row($receiver, [], Envelope_init$lambda$lambda$lambda_1(this$Envelope));
      return Unit;
    };
  }
  function Envelope_init$lambda_2(this$Envelope) {
    return function ($receiver) {
      table($receiver, [], Envelope_init$lambda$lambda_2(this$Envelope));
      return Unit;
    };
  }
  Envelope.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Envelope',
    interfaces: [ViewCollection]
  };
  function EnvelopeEntry(label, value, property, previousProperty) {
    ViewCollection.call(this);
    this.value = value;
    this.property = property;
    this.difference_0 = minus_0(previousProperty, this.property);
    textView(this, label);
    textView(this, '\u2715');
    inputView(this, void 0, EnvelopeEntry_init$lambda(this));
  }
  function EnvelopeEntry_init$lambda$lambda(it) {
    return it.toString();
  }
  function EnvelopeEntry_init$lambda(this$EnvelopeEntry) {
    return function ($receiver) {
      $receiver.readonly = true;
      $receiver.preventTabStop();
      $receiver.bind_vbud5z$(mapBinding(this$EnvelopeEntry.difference_0, EnvelopeEntry_init$lambda$lambda));
      return Unit;
    };
  }
  EnvelopeEntry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EnvelopeEntry',
    interfaces: [ViewCollection]
  };
  function History() {
    ViewCollection.call(this);
    table(this, [], History_init$lambda);
  }
  function History_init$lambda$lambda$lambda($receiver) {
    textView_0($receiver, t('date'));
    return Unit;
  }
  function History_init$lambda$lambda$lambda_0($receiver) {
    textView_0($receiver, t('total'));
    return Unit;
  }
  function History_init$lambda$lambda$lambda_1($receiver) {
    textView_0($receiver, t('action'));
    return Unit;
  }
  function History_init$lambda$lambda($receiver) {
    head($receiver, void 0, History_init$lambda$lambda$lambda);
    head($receiver, void 0, History_init$lambda$lambda$lambda_0);
    head($receiver, void 0, History_init$lambda$lambda$lambda_1);
    return Unit;
  }
  function History_init$lambda$lambda$lambda$lambda$lambda$lambda(closure$snapshot) {
    return function (it) {
      return Snapshot$Companion_getInstance().formatTimeDiff_s8cxhz$(it.subtract(closure$snapshot.date).div(Kotlin.Long.fromInt(1000)));
    };
  }
  function History_init$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$snapshot) {
    return function (it) {
      return (new Date(closure$snapshot.date)).toLocaleString(i18n_getInstance().locale.id);
    };
  }
  function History_init$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$snapshot) {
    return function (it) {
      closure$snapshot.load();
      return Unit;
    };
  }
  function History_init$lambda$lambda$lambda$lambda$lambda(closure$snapshot) {
    return function ($receiver) {
      textView_0($receiver, mapBinding(Snapshot$Companion_getInstance().nowProperty, History_init$lambda$lambda$lambda$lambda$lambda$lambda(closure$snapshot)));
      property_0(getPropertyCallableRef('title', 0, function ($receiver) {
        return $receiver.title;
      }.bind(null, $receiver), function ($receiver, value) {
        $receiver.title = value;
      }.bind(null, $receiver))).bind_ybyx9l$(mapBinding(Snapshot$Companion_getInstance().nowProperty, History_init$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$snapshot)));
      $receiver.onClick.invoke_qlkmfe$(History_init$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$snapshot));
      return Unit;
    };
  }
  function History_init$lambda$lambda$lambda$lambda$lambda$lambda_2(it) {
    return format(it, 2) + ' \u20AC';
  }
  function History_init$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$snapshot) {
    return function (it) {
      closure$snapshot.load();
      return Unit;
    };
  }
  function History_init$lambda$lambda$lambda$lambda$lambda_0(closure$snapshot) {
    return function ($receiver) {
      textView_0($receiver, mapBinding(closure$snapshot.cash.totalProperty, History_init$lambda$lambda$lambda$lambda$lambda$lambda_2));
      $receiver.onClick.invoke_qlkmfe$(History_init$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$snapshot));
      return Unit;
    };
  }
  function History_init$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$snapshot) {
    return function (it) {
      closure$snapshot.delete();
      return Unit;
    };
  }
  function History_init$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$snapshot) {
    return function ($receiver) {
      property_0(getPropertyCallableRef('title', 0, function ($receiver) {
        return $receiver.title;
      }.bind(null, $receiver), function ($receiver, value) {
        $receiver.title = value;
      }.bind(null, $receiver))).bind_ybyx9l$(t('delete'));
      $receiver.onClick.invoke_qlkmfe$(History_init$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$snapshot));
      return Unit;
    };
  }
  function History_init$lambda$lambda$lambda$lambda$lambda_1(closure$snapshot) {
    return function ($receiver) {
      iconView($receiver, MaterialIcon$DELETE_getInstance(), History_init$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$snapshot));
      return Unit;
    };
  }
  function History_init$lambda$lambda$lambda_2(snapshot) {
    var $receiver = new TableRow();
    cell($receiver, void 0, History_init$lambda$lambda$lambda$lambda$lambda(snapshot));
    cell($receiver, void 0, History_init$lambda$lambda$lambda$lambda$lambda_0(snapshot));
    cell($receiver, void 0, History_init$lambda$lambda$lambda$lambda$lambda_1(snapshot));
    return $receiver;
  }
  function History_init$lambda$lambda_0($receiver) {
    listFactory($receiver, Snapshot$Companion_getInstance().sorted, History_init$lambda$lambda$lambda_2, void 0, 400);
    return Unit;
  }
  function History_init$lambda($receiver) {
    row($receiver, [], History_init$lambda$lambda);
    tbody($receiver, History_init$lambda$lambda_0);
    return Unit;
  }
  History.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'History',
    interfaces: [ViewCollection]
  };
  function MoneyGroup(property, editable, maximum) {
    MoneyGroup$Companion_getInstance();
    ViewCollection.call(this);
    this.property = property;
    this.editable = editable;
    this.maximum = maximum;
    this.stringProperty = property_1(new MoneyGroup$stringProperty$ObjectLiteral(this), [this.property]);
    this.wheelCounter_29igfg$_0 = 0;
    this.wheelUpwards_yr8lg4$_0 = null;
    this.isHovered_9zb3da$_0 = false;
    this.onMouseEnter.invoke_qlkmfe$(MoneyGroup_init$lambda(this));
    this.onMouseLeave.invoke_qlkmfe$(MoneyGroup_init$lambda_0(this));
    this.onWheel.invoke_qlkmfe$(MoneyGroup_init$lambda_1(this));
    Document_getInstance().onKeyDown.invoke_qlkmfe$(getCallableRef('onKeyDown', function ($receiver, event) {
      return $receiver.onKeyDown_kc24xn$(event), Unit;
    }.bind(null, this)));
    MoneyGroup$Companion_getInstance().groups_0.add_11rb$(this);
  }
  MoneyGroup.prototype.onKeyDown_kc24xn$ = function (event) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var input = (tmp$_0 = Kotlin.isType(tmp$ = event.target, HTMLInputElement) ? tmp$ : null) != null ? equals(tmp$_0, this.input.html) ? this.input : null : null;
    if (this.editable.value && this.isHovered_9zb3da$_0 && input == null || equals(input, this.input)) {
      event.stopPropagation();
      switch (event.keyCode) {
        case 33:
        case 38:
        case 75:
          if (event.keyCode === 33 || get_modifierKey(event)) {
            this.property.value = ((this.property.value / 5 | 0) + 1 | 0) * 5 | 0;
          }
           else {
            tmp$_1 = this.property;
            tmp$_1.value = tmp$_1.value + 1 | 0;
          }

          event.preventDefault();
          return;
        case 34:
        case 40:
        case 74:
          if (this.property.value > 0) {
            if (event.keyCode === 34 || get_modifierKey(event)) {
              if (this.property.value % 5 === 0) {
                this.property.value = ((this.property.value / 5 | 0) - 1 | 0) * 5 | 0;
              }
               else {
                this.property.value = (this.property.value / 5 | 0) * 5 | 0;
              }
            }
             else {
              tmp$_2 = this.property;
              tmp$_2.value = tmp$_2.value - 1 | 0;
            }
          }

          event.preventDefault();
          return;
      }
      if (input == null)
        return;
      tmp$_3 = event.keyCode;
      if (tmp$_3 >= 48 && tmp$_3 <= 57) {
        if (input.value.length >= 3) {
          input.value = drop(input.value, 1);
        }
      }
       else if (tmp$_3 !== 8 && tmp$_3 !== 9 && tmp$_3 !== 46 && (tmp$_3 < 112 || tmp$_3 > 123))
        switch (tmp$_3) {
          case 72:
            event.preventDefault();
            MoneyGroup$Companion_getInstance().previousView_0(this);
            break;
          case 37:
            if (input.selectionStart === 0 && input.selectionStart == input.selectionEnd || get_modifierKey(event)) {
              MoneyGroup$Companion_getInstance().previousView_0(this);
            }
             else {
              var start = input.selectionStart;
              if (start == null || start === 0) {
                input.selectRange_vux9f0$(0);
              }
               else {
                input.selectRange_vux9f0$(start - 1 | 0);
              }
            }

            break;
          case 76:
            event.preventDefault();
            MoneyGroup$Companion_getInstance().nextView_0(this);
            break;
          case 39:
            if (input.selectionStart === input.value.length && input.selectionStart == input.selectionEnd || get_modifierKey(event)) {
              MoneyGroup$Companion_getInstance().nextView_0(this);
            }
             else {
              var start_0 = input.selectionStart;
              if (start_0 == null || start_0 === input.value.length) {
                input.selectRange_vux9f0$(input.value.length);
              }
               else {
                input.selectRange_vux9f0$(start_0 + 1 | 0);
              }
            }

            break;
          case 13:
            emit(CalculateEvent_getInstance());
            break;
          default:event.preventDefault();
            break;
        }
    }
  };
  function MoneyGroup$Companion() {
    MoneyGroup$Companion_instance = this;
    this.groups_0 = ArrayList_init();
    this.WHEEL_THRESHOLD = 4;
  }
  MoneyGroup$Companion.prototype.nextView_0 = function (current) {
    var index = this.groups_0.indexOf_11rb$(current);
    if (index < 0)
      return;
    this.groups_0.get_za3lpa$((index + 1 | 0) % this.groups_0.size).input.focus();
  };
  MoneyGroup$Companion.prototype.previousView_0 = function (current) {
    var index = this.groups_0.indexOf_11rb$(current);
    if (index < 0)
      return;
    this.groups_0.get_za3lpa$((this.groups_0.size + index - 1 | 0) % this.groups_0.size).input.focus();
  };
  MoneyGroup$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MoneyGroup$Companion_instance = null;
  function MoneyGroup$Companion_getInstance() {
    if (MoneyGroup$Companion_instance === null) {
      new MoneyGroup$Companion();
    }
    return MoneyGroup$Companion_instance;
  }
  function MoneyGroup$stringProperty$ObjectLiteral(this$MoneyGroup) {
    this.this$MoneyGroup = this$MoneyGroup;
  }
  MoneyGroup$stringProperty$ObjectLiteral.prototype.set_11rb$ = function (value) {
    var tmp$;
    if (this.this$MoneyGroup.editable.value) {
      var number = (tmp$ = toIntOrNull(value)) != null ? tmp$ : 0;
      this.this$MoneyGroup.property.value = Math_0.max(number, 0);
      if (number < 0) {
        this.this$MoneyGroup.property.onChange.emit_11rb$(Unit);
      }
    }
    return true;
  };
  MoneyGroup$stringProperty$ObjectLiteral.prototype.get = function () {
    return this.this$MoneyGroup.property.value.toString();
  };
  MoneyGroup$stringProperty$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [FunctionAccessor]
  };
  function MoneyGroup_init$lambda(this$MoneyGroup) {
    return function (it) {
      this$MoneyGroup.isHovered_9zb3da$_0 = true;
      return Unit;
    };
  }
  function MoneyGroup_init$lambda_0(this$MoneyGroup) {
    return function (it) {
      this$MoneyGroup.isHovered_9zb3da$_0 = false;
      return Unit;
    };
  }
  function MoneyGroup_init$lambda_1(this$MoneyGroup) {
    return function (it) {
      if (this$MoneyGroup.editable.value) {
        if (it.deltaY > 0 && this$MoneyGroup.wheelUpwards_yr8lg4$_0 !== false) {
          this$MoneyGroup.wheelUpwards_yr8lg4$_0 = false;
          this$MoneyGroup.wheelCounter_29igfg$_0 = 0;
        }
         else if (it.deltaY < 0 && this$MoneyGroup.wheelUpwards_yr8lg4$_0 !== true) {
          this$MoneyGroup.wheelUpwards_yr8lg4$_0 = true;
          this$MoneyGroup.wheelCounter_29igfg$_0 = 0;
        }
        var tmp$ = this$MoneyGroup;
        var tmp$_0 = this$MoneyGroup.wheelCounter_29igfg$_0;
        var $receiver = it.deltaY;
        var x = Math_0.abs($receiver);
        tmp$.wheelCounter_29igfg$_0 = tmp$_0 + roundToInt(Math_0.sqrt(x)) | 0;
        var $receiver_0 = it.deltaY;
        var toAdd = Kotlin.imul(-numberToInt(Math_0.sign($receiver_0)) | 0, this$MoneyGroup.wheelCounter_29igfg$_0 / 4 | 0);
        this$MoneyGroup.wheelCounter_29igfg$_0 = this$MoneyGroup.wheelCounter_29igfg$_0 % 4;
        var tmp$_1 = this$MoneyGroup.property;
        var b = this$MoneyGroup.property.value + toAdd | 0;
        var a = Math_0.max(0, b);
        var b_0 = this$MoneyGroup.maximum;
        tmp$_1.value = Math_0.min(a, b_0);
      }
      it.preventDefault();
      it.stopPropagation();
      return Unit;
    };
  }
  MoneyGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MoneyGroup',
    interfaces: [ViewCollection]
  };
  function Settings() {
    ViewCollection.call(this);
    boxView(this, [], Settings_init$lambda);
  }
  function Settings_init$lambda$lambda(locale) {
    return locale.name + ' (' + locale.id + ')';
  }
  function Settings_init$lambda($receiver) {
    textView_0($receiver, t('language'));
    selectView_1($receiver, i18n_getInstance().availableLocales, i18n_getInstance().localeProperty, Settings_init$lambda$lambda);
    return Unit;
  }
  Settings.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Settings',
    interfaces: [ViewCollection]
  };
  function Comparator$ObjectLiteral_0(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_0.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function Snapshot(id, date, cash) {
    Snapshot$Companion_getInstance();
    this.id = id;
    this.date = date;
    this.cash = cash;
    this.key_0 = Snapshot$Companion_getInstance().PREFIX_0 + '-' + this.id;
  }
  Snapshot.prototype.save = function () {
    if (this.cash.totalProperty.value <= 0.0) {
      this.delete();
    }
     else {
      this.date = Kotlin.Long.fromNumber(Date.now());
      var value = joinToString(listOf([this.date, this.cash.note100Property.value, this.cash.note50Property.value, this.cash.note20Property.value, this.cash.note10Property.value, this.cash.note5Property.value, this.cash.coin200Property.value, this.cash.coin100Property.value, this.cash.coin50Property.value, this.cash.coin20Property.value, this.cash.coin10Property.value, this.cash.coin5Property.value, this.cash.coin2Property.value, this.cash.coin1Property.value]), Snapshot$Companion_getInstance().SEPARATOR_0);
      window.localStorage[this.key_0] = value;
    }
  };
  Snapshot.prototype.load = function () {
    Snapshot$Companion_getInstance().allowAdd_0 = false;
    Snapshot$Companion_getInstance().currentSnapshot = this;
    Snapshot$Companion_getInstance().onLoad.emit_11rb$(this);
  };
  Snapshot.prototype.delete = function () {
    window.localStorage.removeItem(this.key_0);
    Snapshot$Companion_getInstance().list.remove_11rb$(this);
  };
  function Snapshot$Companion() {
    Snapshot$Companion_instance = this;
    this.PREFIX_0 = 'ascii-snapshot';
    this.SEPARATOR_0 = '|';
    this.THRESHOLD_0 = 300000;
    this.allowAdd_0 = false;
    this.onLoad = new EventHandler();
    this.list = observableListOf([]);
    this.sorted = sortObservable(this.list, new Comparator$ObjectLiteral_0(Snapshot$Companion$sorted$lambda));
    this.newestSnapshot = mapBinding(this.sorted, Snapshot$Companion$newestSnapshot$lambda);
    this.currentSnapshotProperty = property(this.newestSnapshot.value);
    this.currentSnapshot_f5x3jz$_0 = this.currentSnapshotProperty;
    var tmp$, tmp$_0;
    var length = window.localStorage.length;
    for (var i = 0; i < length; i++) {
      tmp$ = window.localStorage.key(i);
      if (tmp$ == null) {
        continue;
      }
      var key = tmp$;
      if (startsWith(key, this.PREFIX_0)) {
        tmp$_0 = window.localStorage[key];
        if (tmp$_0 == null) {
          continue;
        }
        var value = tmp$_0;
        this.parse_0(key, value);
      }
    }
    this.newestSnapshot.onChange.invoke_qlkmfe$(Snapshot$Snapshot$Companion_init$lambda(this));
    this.currentSnapshot = this.newestSnapshot.value;
    interval(1000, Snapshot$Snapshot$Companion_init$lambda_0(this));
    this.nowProperty = property(Kotlin.Long.fromNumber(Date.now()));
  }
  Snapshot$Companion.prototype.save_p2lkh7$ = function (cash) {
    var tmp$, tmp$_0;
    if (cash.totalProperty.value <= 0.0) {
      this.allowAdd_0 = false;
      return;
    }
    var last = this.newestSnapshot.value;
    var now = Kotlin.Long.fromNumber(Date.now());
    if (this.allowAdd_0 && last != null && last.date.add(Kotlin.Long.fromInt(300000)).compareTo_11rb$(now) > 0) {
      last.cash.load_p2lkh7$(cash);
      last.save();
    }
     else {
      var $receiver = this.list;
      var maxBy$result;
      maxBy$break: do {
        var iterator = $receiver.iterator();
        if (!iterator.hasNext()) {
          maxBy$result = null;
          break maxBy$break;
        }
        var maxElem = iterator.next();
        var maxValue = maxElem.id;
        while (iterator.hasNext()) {
          var e = iterator.next();
          var v = e.id;
          if (Kotlin.compareTo(maxValue, v) < 0) {
            maxElem = e;
            maxValue = v;
          }
        }
        maxBy$result = maxElem;
      }
       while (false);
      var id = ((tmp$_0 = (tmp$ = maxBy$result) != null ? tmp$.id : null) != null ? tmp$_0 : -1) + 1 | 0;
      var snap = new Snapshot(id, now, cash);
      snap.save();
      this.list.add_11rb$(snap);
      this.allowAdd_0 = true;
    }
  };
  var Snapshot$Companion$currentSnapshot_metadata = new PropertyMetadata('currentSnapshot');
  Object.defineProperty(Snapshot$Companion.prototype, 'currentSnapshot', {
    get: function () {
      return this.currentSnapshot_f5x3jz$_0.getValue_n5byny$(this, Snapshot$Companion$currentSnapshot_metadata);
    },
    set: function (currentSnapshot) {
      this.currentSnapshot_f5x3jz$_0.setValue_sq4zib$(this, Snapshot$Companion$currentSnapshot_metadata, currentSnapshot);
    }
  });
  Snapshot$Companion.prototype.parse_0 = function (key, value) {
    try {
      var id = toInt(removePrefix(key, 'ascii-snapshot-'));
      var split_0 = split(value, [this.SEPARATOR_0]);
      var date = toLong(split_0.get_za3lpa$(0));
      var $receiver = drop_0(split_0, 1);
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(toInt(item));
      }
      var data = destination;
      var cash = new CashEntry(data.get_za3lpa$(0), data.get_za3lpa$(1), data.get_za3lpa$(2), data.get_za3lpa$(3), data.get_za3lpa$(4), data.get_za3lpa$(5), data.get_za3lpa$(6), data.get_za3lpa$(7), data.get_za3lpa$(8), data.get_za3lpa$(9), data.get_za3lpa$(10), data.get_za3lpa$(11), data.get_za3lpa$(12));
      var $receiver_0 = this.list;
      var element = new Snapshot(id, date, cash);
      $receiver_0.add_11rb$(element);
    }
     catch (e) {
      if (!Kotlin.isType(e, Error_0))
        throw e;
    }
  };
  Snapshot$Companion.prototype.formatTimeDiff_s8cxhz$ = function (seconds) {
    var diff = seconds;
    if (diff.toNumber() < 60) {
      return t_3(diff, 'second', [diff]).value;
    }
    diff = diff.div(Kotlin.Long.fromInt(60));
    if (diff.toNumber() < 60) {
      return t_3(diff, 'minute', [diff]).value;
    }
    diff = diff.div(Kotlin.Long.fromInt(60));
    if (diff.toNumber() < 24) {
      return t_3(diff, 'hour', [diff]).value;
    }
    diff = diff.div(Kotlin.Long.fromInt(24));
    if (diff.toNumber() < 30) {
      return t_3(diff, 'day', [diff]).value;
    }
    diff = diff.div(Kotlin.Long.fromInt(30));
    if (diff.toNumber() < 12) {
      return t_3(diff, 'month', [diff]).value;
    }
    diff = diff.div(Kotlin.Long.fromInt(12));
    return t_3(diff, 'year', [diff]).value;
  };
  function Snapshot$Companion$sorted$lambda(a, b) {
    return b.date.compareTo_11rb$(a.date);
  }
  function Snapshot$Companion$newestSnapshot$lambda(it) {
    return firstOrNull(it);
  }
  function Snapshot$Snapshot$Companion_init$lambda(this$Snapshot$) {
    return function (it) {
      this$Snapshot$.currentSnapshot = this$Snapshot$.newestSnapshot.value;
      return Unit;
    };
  }
  function Snapshot$Snapshot$Companion_init$lambda_0(this$Snapshot$) {
    return function () {
      this$Snapshot$.nowProperty.value = Kotlin.Long.fromNumber(Date.now());
      return Unit;
    };
  }
  Snapshot$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Snapshot$Companion_instance = null;
  function Snapshot$Companion_getInstance() {
    if (Snapshot$Companion_instance === null) {
      new Snapshot$Companion();
    }
    return Snapshot$Companion_instance;
  }
  Snapshot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Snapshot',
    interfaces: []
  };
  function Coin(index) {
    View.call(this);
    this.index = index;
    this.position = 0;
  }
  Coin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Coin',
    interfaces: [View]
  };
  function CoinBox(cash, editable) {
    ViewCollection.call(this);
    this.cash = cash;
    boxView(this, [], CoinBox_init$lambda(this, editable));
    boxView(this, [], CoinBox_init$lambda_0(this, editable));
    boxView(this, [], CoinBox_init$lambda_1(this, editable));
    boxView(this, [], CoinBox_init$lambda_2(this, editable));
    boxView(this, [], CoinBox_init$lambda_3(this, editable));
    boxView(this, [], CoinBox_init$lambda_4(this, editable));
    boxView(this, [], CoinBox_init$lambda_5(this, editable));
  }
  function CoinBox_init$lambda(this$CoinBox, closure$editable) {
    return function ($receiver) {
      $receiver.unaryPlus_o71kt9$(new CoinGroup('2 EURO', 12, 200, this$CoinBox.cash.coin200Property, this$CoinBox.cash.previousCoin200Property, closure$editable));
      return Unit;
    };
  }
  function CoinBox_init$lambda_0(this$CoinBox, closure$editable) {
    return function ($receiver) {
      $receiver.unaryPlus_o71kt9$(new CoinGroup('1 EURO', 11, 100, this$CoinBox.cash.coin100Property, this$CoinBox.cash.previousCoin100Property, closure$editable));
      return Unit;
    };
  }
  function CoinBox_init$lambda_1(this$CoinBox, closure$editable) {
    return function ($receiver) {
      $receiver.unaryPlus_o71kt9$(new CoinGroup('50 CENT', 11, 50, this$CoinBox.cash.coin50Property, this$CoinBox.cash.previousCoin50Property, closure$editable));
      return Unit;
    };
  }
  function CoinBox_init$lambda_2(this$CoinBox, closure$editable) {
    return function ($receiver) {
      $receiver.unaryPlus_o71kt9$(new CoinGroup('20 CENT', 12, 20, this$CoinBox.cash.coin20Property, this$CoinBox.cash.previousCoin20Property, closure$editable));
      return Unit;
    };
  }
  function CoinBox_init$lambda_3(this$CoinBox, closure$editable) {
    return function ($receiver) {
      $receiver.unaryPlus_o71kt9$(new CoinGroup('10 CENT', 13, 10, this$CoinBox.cash.coin10Property, this$CoinBox.cash.previousCoin10Property, closure$editable));
      return Unit;
    };
  }
  function CoinBox_init$lambda_4(this$CoinBox, closure$editable) {
    return function ($receiver) {
      $receiver.unaryPlus_o71kt9$(new CoinGroup('5 CENT', 15, 5, this$CoinBox.cash.coin5Property, this$CoinBox.cash.previousCoin5Property, closure$editable));
      return Unit;
    };
  }
  function CoinBox_init$lambda_5(this$CoinBox, closure$editable) {
    return function ($receiver) {
      $receiver.unaryPlus_o71kt9$(new CoinGroup('2 CENT', 6, 2, this$CoinBox.cash.coin2Property, this$CoinBox.cash.previousCoin2Property, closure$editable));
      $receiver.unaryPlus_o71kt9$(new CoinGroup('1 CENT', 7, 1, this$CoinBox.cash.coin1Property, this$CoinBox.cash.previousCoin1Property, closure$editable));
      return Unit;
    };
  }
  CoinBox.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CoinBox',
    interfaces: [ViewCollection]
  };
  function Comparator$ObjectLiteral_1(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_1.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_1.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda_0 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function CoinGroup(name, stackCount, value, property, previousProperty, editable) {
    MoneyGroup.call(this, property, editable, stackCount * 5 | 0);
    this.value_0 = value;
    this.previousProperty_0 = previousProperty;
    this.input_l28g3$_0 = this.input_l28g3$_0;
    var tmp$, tmp$_0;
    textView(this, name, CoinGroup_init$lambda);
    var coins = LinkedHashMap_init();
    var type = 'coin' + this.value_0;
    property.onChange.invoke_qlkmfe$(CoinGroup_init$lambda_0(coins, this));
    this.previousProperty_0.onChange.invoke_qlkmfe$(CoinGroup_init$lambda_1(coins, this));
    var stack = new CoinStackGroup(stackCount, type, this.value_0 / 100.0);
    this.unaryPlus_o71kt9$(stack);
    tmp$ = stack.iterator();
    while (tmp$.hasNext()) {
      var s = tmp$.next();
      tmp$_0 = s.iterator();
      while (tmp$_0.hasNext()) {
        var c = tmp$_0.next();
        var position = c.position;
        coins.put_xwzc9p$(position, c);
        this.updateCoin_0(c);
      }
    }
    var references = ArrayList_init();
    var updatemove = CoinGroup_init$updatemove(coins, property);
    var mousemove = CoinGroup_init$lambda_2(references, updatemove);
    var touchmove = CoinGroup_init$lambda_3(references, updatemove);
    this.onMouseDown.invoke_qlkmfe$(CoinGroup_init$lambda_4(editable, mousemove, references));
    this.onTouchStart.invoke_qlkmfe$(CoinGroup_init$lambda_5(editable, touchmove, references));
    boxView(this, [], CoinGroup_init$lambda_6(this, editable, property));
  }
  Object.defineProperty(CoinGroup.prototype, 'input', {
    get: function () {
      if (this.input_l28g3$_0 == null)
        return throwUPAE('input');
      return this.input_l28g3$_0;
    },
    set: function (input) {
      this.input_l28g3$_0 = input;
    }
  });
  CoinGroup.prototype.updateCoin_0 = function (coin) {
    coin.classList.set_ivxn3r$('active', coin.position < this.property.value);
    coin.classList.set_ivxn3r$('overflow', (coin.position + this.maximum | 0) < this.property.value);
    coin.classList.set_ivxn3r$('dead', (2 * this.maximum | 0) < this.property.value);
    coin.classList.set_ivxn3r$('previous', coin.position < this.previousProperty_0.value);
  };
  function CoinGroup_init$lambda$lambda(it) {
    it.stopPropagation();
    return Unit;
  }
  function CoinGroup_init$lambda($receiver) {
    $receiver.onMouseDown.invoke_qlkmfe$(CoinGroup_init$lambda$lambda);
    return Unit;
  }
  function CoinGroup_init$lambda_0(closure$coins, this$CoinGroup) {
    return function (it) {
      var tmp$;
      tmp$ = closure$coins.values.iterator();
      while (tmp$.hasNext()) {
        var c = tmp$.next();
        this$CoinGroup.updateCoin_0(c);
      }
      return Unit;
    };
  }
  function CoinGroup_init$lambda_1(closure$coins, this$CoinGroup) {
    return function (it) {
      var tmp$;
      tmp$ = closure$coins.values.iterator();
      while (tmp$.hasNext()) {
        var c = tmp$.next();
        this$CoinGroup.updateCoin_0(c);
      }
      return Unit;
    };
  }
  function CoinGroup_init$updatemove$lambda(it) {
    return it.key;
  }
  function CoinGroup_init$updatemove(closure$coins, closure$property) {
    return function (pageY) {
      var tmp$, tmp$_0;
      tmp$ = closure$coins.get_11rb$(0);
      if (tmp$ == null) {
        return;
      }
      var c0 = tmp$;
      if ((c0.offsetTopTotal + c0.clientHeight | 0) < pageY) {
        closure$property.value = 0;
        return;
      }
      var max = c0;
      tmp$_0 = sortedWith(closure$coins.entries, new Comparator$ObjectLiteral_1(compareBy$lambda_0(CoinGroup_init$updatemove$lambda))).iterator();
      while (tmp$_0.hasNext()) {
        var tmp$_1 = tmp$_0.next();
        var coin = tmp$_1.value;
        var top = coin.offsetTopTotal;
        if (top < pageY) {
          closure$property.value = coin.position + 1 | 0;
          return;
        }
        max = coin;
      }
      closure$property.value = max.position + 1 | 0;
    };
  }
  function CoinGroup_init$lambda_2(closure$references, closure$updatemove) {
    return function (event) {
      if (equals(event.type, 'mouseup') || event.buttons === toShort(0)) {
        var tmp$;
        tmp$ = closure$references.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          element.detach();
        }
        closure$references.clear();
      }
      closure$updatemove(event.pageY);
      return Unit;
    };
  }
  function CoinGroup_init$lambda_3(closure$references, closure$updatemove) {
    return function (event) {
      var touches = all(event.touches);
      if (equals(event.type, 'touchend') || equals(event.type, 'touchcancel') || touches.size !== 1) {
        var tmp$;
        tmp$ = closure$references.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          element.detach();
        }
        closure$references.clear();
      }
       else {
        event.preventDefault();
      }
      if (touches.size === 1) {
        closure$updatemove(touches.get_za3lpa$(0).pageY);
      }
      return Unit;
    };
  }
  function CoinGroup_init$lambda_4(closure$editable, closure$mousemove, closure$references) {
    return function (it) {
      if (closure$editable.value) {
        closure$mousemove(it);
        var $receiver = closure$references;
        var element = Body_getInstance().onMouseMove.reference_qlkmfe$(closure$mousemove);
        $receiver.add_11rb$(element);
        var $receiver_0 = closure$references;
        var element_0 = Body_getInstance().onMouseUp.reference_qlkmfe$(closure$mousemove);
        $receiver_0.add_11rb$(element_0);
      }
      return Unit;
    };
  }
  function CoinGroup_init$lambda_5(closure$editable, closure$touchmove, closure$references) {
    return function (it) {
      if (closure$editable.value) {
        closure$touchmove(it);
        var $receiver = closure$references;
        var element = Body_getInstance().onTouchMove.reference_qlkmfe$(closure$touchmove);
        $receiver.add_11rb$(element);
        var $receiver_0 = closure$references;
        var element_0 = Body_getInstance().onTouchEnd.reference_qlkmfe$(closure$touchmove);
        $receiver_0.add_11rb$(element_0);
        var $receiver_1 = closure$references;
        var element_1 = Body_getInstance().onTouchCancel.reference_qlkmfe$(closure$touchmove);
        $receiver_1.add_11rb$(element_1);
      }
      return Unit;
    };
  }
  function CoinGroup_init$lambda$lambda_0(it) {
    it.stopPropagation();
    return Unit;
  }
  function CoinGroup_init$lambda$lambda$lambda(closure$editable, this$) {
    return function (it) {
      this$.readonly = !closure$editable.value;
      return Unit;
    };
  }
  function CoinGroup_init$lambda$lambda$lambda$lambda(this$) {
    return function () {
      this$.selectRange_vux9f0$(0, this$.value.length);
      return Unit;
    };
  }
  function CoinGroup_init$lambda$lambda$lambda_0(closure$focused, this$) {
    return function (it) {
      if (!closure$focused.v) {
        closure$focused.v = true;
        async(void 0, CoinGroup_init$lambda$lambda$lambda$lambda(this$));
      }
      return Unit;
    };
  }
  function CoinGroup_init$lambda$lambda$lambda_1(closure$focused) {
    return function (it) {
      closure$focused.v = false;
      return Unit;
    };
  }
  function CoinGroup_init$lambda$lambda_1(this$CoinGroup, closure$editable) {
    return function ($receiver) {
      $receiver.maxLength = 3;
      $receiver.bind_e5den9$(this$CoinGroup.stringProperty);
      closure$editable.onChange.invoke_qlkmfe$(CoinGroup_init$lambda$lambda$lambda(closure$editable, $receiver));
      $receiver.readonly = !closure$editable.value;
      var focused = {v: false};
      $receiver.onFocus.invoke_qlkmfe$(CoinGroup_init$lambda$lambda$lambda_0(focused, $receiver));
      $receiver.onBlur.invoke_qlkmfe$(CoinGroup_init$lambda$lambda$lambda_1(focused));
      $receiver.onKeyDown.invoke_qlkmfe$(getCallableRef('onKeyDown', function ($receiver, event) {
        return $receiver.onKeyDown_kc24xn$(event), Unit;
      }.bind(null, this$CoinGroup)));
      return Unit;
    };
  }
  function CoinGroup_init$lambda$lambda$lambda_2(this$CoinGroup) {
    return function (it) {
      return format(it * (this$CoinGroup.value_0 / 100.0), 2) + ' \u20AC';
    };
  }
  function CoinGroup_init$lambda$lambda_2(closure$property, this$CoinGroup) {
    return function ($receiver) {
      $receiver.readonly = true;
      $receiver.preventTabStop();
      $receiver.bind_vbud5z$(mapBinding(closure$property, CoinGroup_init$lambda$lambda$lambda_2(this$CoinGroup)));
      return Unit;
    };
  }
  function CoinGroup_init$lambda_6(this$CoinGroup, closure$editable, closure$property) {
    return function ($receiver) {
      $receiver.onMouseDown.invoke_qlkmfe$(CoinGroup_init$lambda$lambda_0);
      $receiver.classList.plusAssign_61zpoe$('coin-input');
      this$CoinGroup.input = inputView($receiver, void 0, CoinGroup_init$lambda$lambda_1(this$CoinGroup, closure$editable));
      inputView($receiver, void 0, CoinGroup_init$lambda$lambda_2(closure$property, this$CoinGroup));
      return Unit;
    };
  }
  CoinGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CoinGroup',
    interfaces: [MoneyGroup]
  };
  function CoinStack(type) {
    ViewCollection.call(this);
    for (var i = 4; i >= 0; i--) {
      var coin = new Coin(i);
      coin.classList.plusAssign_61zpoe$(type);
      this.unaryPlus_o71kt9$(coin);
    }
  }
  CoinStack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CoinStack',
    interfaces: [ViewCollection]
  };
  function CoinStackGroup(stackCount, type, value) {
    ViewCollection.call(this);
    this.superMap_0 = mapOf([to(toBoxedChar(48), toBoxedChar(8304)), to(toBoxedChar(49), toBoxedChar(185)), to(toBoxedChar(50), toBoxedChar(178)), to(toBoxedChar(51), toBoxedChar(179)), to(toBoxedChar(52), toBoxedChar(8308)), to(toBoxedChar(53), toBoxedChar(8309)), to(toBoxedChar(54), toBoxedChar(8310)), to(toBoxedChar(55), toBoxedChar(8311)), to(toBoxedChar(56), toBoxedChar(8312)), to(toBoxedChar(57), toBoxedChar(8313))]);
    var tmp$;
    for (var i = stackCount - 1 | 0; i >= 0; i--) {
      var stack = new CoinStack(type);
      tmp$ = stack.iterator();
      while (tmp$.hasNext()) {
        var c = tmp$.next();
        c.position = (i * 5 | 0) + c.index | 0;
      }
      var money = value * (i + 1 | 0) * 5;
      var x = money - Math_0.floor(money);
      if (Math_0.abs(x) < 0.001) {
        stack.dataset.set_jyasbz$('value', Math_0.floor(money).toString());
      }
       else {
        stack.dataset.set_jyasbz$('value', this.transformMoney_0(format(round(money * 100) / 100, 2)));
      }
      this.unaryPlus_o71kt9$(stack);
    }
  }
  CoinStackGroup.prototype.transformMoney_0 = function (value) {
    var split_0 = split(value, ['.']);
    var tmp$ = first(split_0);
    var $receiver = last(split_0);
    var destination = ArrayList_init_0($receiver.length);
    var tmp$_0;
    tmp$_0 = iterator($receiver);
    while (tmp$_0.hasNext()) {
      var item = unboxChar(tmp$_0.next());
      destination.add_11rb$(this.superMap_0.get_11rb$(toBoxedChar(item)));
    }
    return tmp$ + joinToString(destination, '');
  };
  CoinStackGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CoinStackGroup',
    interfaces: [ViewCollection]
  };
  function main$lambda$lambda$lambda(it) {
    window.localStorage['language'] = i18n_getInstance().locale.id;
    return Unit;
  }
  function main$lambda$lambda() {
    Body_getInstance().plusAssign_4q8e84$(new CashBox());
    i18n_getInstance().localeProperty.onChange.invoke_qlkmfe$(main$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda(it) {
    var tmp$;
    i18n_getInstance().load_a4mwiz$((tmp$ = window.localStorage['language']) != null ? tmp$ : 'en', main$lambda$lambda);
    return Unit;
  }
  function main(args) {
    i18n_getInstance().register_shg59h$('en', 'English', 'languages/en.json', true);
    i18n_getInstance().register_shg59h$('de', 'Deutsch', 'languages/de.json');
    window.onload = main$lambda;
  }
  function Note(value, position) {
    Note$Companion_getInstance();
    ViewCollection.call(this);
    this.value = value;
    imageView(this, 'images/note' + this.value + '.png', Note_init$lambda(position));
  }
  function Note$Companion() {
    Note$Companion_instance = this;
    this.MAX_ANGLE = 20;
  }
  Note$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Note$Companion_instance = null;
  function Note$Companion_getInstance() {
    if (Note$Companion_instance === null) {
      new Note$Companion();
    }
    return Note$Companion_instance;
  }
  function Note_init$lambda$lambda(closure$position) {
    return function ($receiver) {
      var tmp$ = 2.0 * 20 + 1;
      var n = -closure$position | 0;
      var angle = tmp$ * Math_0.pow(1.2, n);
      $receiver.transform = 'rotate(' + (-angle + 20) + 'deg)';
      $receiver.boxShadow = '0 1px 4px rgba(0, 0, 0, ' + angle / 41 + ')';
      return Unit;
    };
  }
  function Note_init$lambda$lambda_0(it) {
    it.preventDefault();
    return Unit;
  }
  function Note_init$lambda(closure$position) {
    return function ($receiver) {
      $receiver.style_ro3e7h$(Note_init$lambda$lambda(closure$position));
      $receiver.onMouseDown.invoke_qlkmfe$(Note_init$lambda$lambda_0);
      return Unit;
    };
  }
  Note.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Note',
    interfaces: [ViewCollection]
  };
  function NoteBox(cash, editable) {
    ViewCollection.call(this);
    this.cash_0 = cash;
    boxView(this, [], NoteBox_init$lambda(this, editable));
    boxView(this, [], NoteBox_init$lambda_0(this, editable));
    boxView(this, [], NoteBox_init$lambda_1(this, editable));
    boxView(this, [], NoteBox_init$lambda_2(this, editable));
    boxView(this, [], NoteBox_init$lambda_3(this, editable));
  }
  function NoteBox_init$lambda(this$NoteBox, closure$editable) {
    return function ($receiver) {
      $receiver.unaryPlus_o71kt9$(new NoteGroup(100, this$NoteBox.cash_0.note100Property, closure$editable));
      return Unit;
    };
  }
  function NoteBox_init$lambda_0(this$NoteBox, closure$editable) {
    return function ($receiver) {
      $receiver.unaryPlus_o71kt9$(new NoteGroup(50, this$NoteBox.cash_0.note50Property, closure$editable));
      return Unit;
    };
  }
  function NoteBox_init$lambda_1(this$NoteBox, closure$editable) {
    return function ($receiver) {
      $receiver.unaryPlus_o71kt9$(new NoteGroup(20, this$NoteBox.cash_0.note20Property, closure$editable));
      return Unit;
    };
  }
  function NoteBox_init$lambda_2(this$NoteBox, closure$editable) {
    return function ($receiver) {
      $receiver.unaryPlus_o71kt9$(new NoteGroup(10, this$NoteBox.cash_0.note10Property, closure$editable));
      return Unit;
    };
  }
  function NoteBox_init$lambda_3(this$NoteBox, closure$editable) {
    return function ($receiver) {
      $receiver.unaryPlus_o71kt9$(new NoteGroup(5, this$NoteBox.cash_0.note5Property, closure$editable));
      return Unit;
    };
  }
  NoteBox.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NoteBox',
    interfaces: [ViewCollection]
  };
  function NoteGroup(value, property, editable) {
    MoneyGroup.call(this, property, editable, 40);
    this.value = value;
    this.input_yp8ijn$_0 = this.input_yp8ijn$_0;
    textView(this, this.value.toString() + ' EURO', NoteGroup_init$lambda);
    this.unaryPlus_o71kt9$(new NoteStack(this.value, property));
    boxView(this, [], NoteGroup_init$lambda_0(editable, property));
    boxView(this, [], NoteGroup_init$lambda_1(this, editable, property));
  }
  Object.defineProperty(NoteGroup.prototype, 'input', {
    get: function () {
      if (this.input_yp8ijn$_0 == null)
        return throwUPAE('input');
      return this.input_yp8ijn$_0;
    },
    set: function (input) {
      this.input_yp8ijn$_0 = input;
    }
  });
  function NoteGroup_init$lambda$lambda(it) {
    it.stopPropagation();
    return Unit;
  }
  function NoteGroup_init$lambda($receiver) {
    $receiver.onMouseDown.invoke_qlkmfe$(NoteGroup_init$lambda$lambda);
    return Unit;
  }
  function NoteGroup_init$lambda$lambda$lambda(closure$editable, closure$property) {
    return function (it) {
      it.preventDefault();
      if (closure$editable.value) {
        closure$property.value = closure$property.value + 1 | 0;
      }
      return Unit;
    };
  }
  function NoteGroup_init$lambda$lambda_0(closure$editable, closure$property) {
    return function ($receiver) {
      $receiver.onClick.invoke_qlkmfe$(NoteGroup_init$lambda$lambda$lambda(closure$editable, closure$property));
      return Unit;
    };
  }
  function NoteGroup_init$lambda$lambda$lambda_0(closure$editable, closure$property) {
    return function (it) {
      it.preventDefault();
      if (closure$editable.value && closure$property.value > 0) {
        closure$property.value = closure$property.value - 1 | 0;
      }
      return Unit;
    };
  }
  function NoteGroup_init$lambda$lambda_1(closure$editable, closure$property) {
    return function ($receiver) {
      $receiver.onClick.invoke_qlkmfe$(NoteGroup_init$lambda$lambda$lambda_0(closure$editable, closure$property));
      return Unit;
    };
  }
  function NoteGroup_init$lambda$lambda$lambda_1(closure$editable, this$) {
    return function (it) {
      this$.display = closure$editable.value ? 'block' : 'none';
      return Unit;
    };
  }
  function NoteGroup_init$lambda$lambda_2(closure$editable) {
    return function ($receiver) {
      closure$editable.onChange.invoke_qlkmfe$(NoteGroup_init$lambda$lambda$lambda_1(closure$editable, $receiver));
      $receiver.display = closure$editable.value ? 'block' : 'none';
      return Unit;
    };
  }
  function NoteGroup_init$lambda_0(closure$editable, closure$property) {
    return function ($receiver) {
      $receiver.classList.plusAssign_61zpoe$('note-button');
      textView($receiver, '+', NoteGroup_init$lambda$lambda_0(closure$editable, closure$property));
      textView($receiver, '-', NoteGroup_init$lambda$lambda_1(closure$editable, closure$property));
      $receiver.style_ro3e7h$(NoteGroup_init$lambda$lambda_2(closure$editable));
      return Unit;
    };
  }
  function NoteGroup_init$lambda$lambda$lambda_2(closure$editable, this$) {
    return function (it) {
      this$.readonly = !closure$editable.value;
      return Unit;
    };
  }
  function NoteGroup_init$lambda$lambda$lambda$lambda(this$) {
    return function () {
      this$.selectRange_vux9f0$(0, this$.value.length);
      return Unit;
    };
  }
  function NoteGroup_init$lambda$lambda$lambda_3(closure$focused, this$) {
    return function (it) {
      if (!closure$focused.v) {
        closure$focused.v = true;
        async(void 0, NoteGroup_init$lambda$lambda$lambda$lambda(this$));
      }
      return Unit;
    };
  }
  function NoteGroup_init$lambda$lambda$lambda_4(closure$focused) {
    return function (it) {
      closure$focused.v = false;
      return Unit;
    };
  }
  function NoteGroup_init$lambda$lambda_3(this$NoteGroup, closure$editable) {
    return function ($receiver) {
      $receiver.maxLength = 3;
      $receiver.bind_e5den9$(this$NoteGroup.stringProperty);
      closure$editable.onChange.invoke_qlkmfe$(NoteGroup_init$lambda$lambda$lambda_2(closure$editable, $receiver));
      $receiver.readonly = !closure$editable.value;
      var focused = {v: false};
      $receiver.onFocus.invoke_qlkmfe$(NoteGroup_init$lambda$lambda$lambda_3(focused, $receiver));
      $receiver.onBlur.invoke_qlkmfe$(NoteGroup_init$lambda$lambda$lambda_4(focused));
      $receiver.onKeyDown.invoke_qlkmfe$(getCallableRef('onKeyDown', function ($receiver, event) {
        return $receiver.onKeyDown_kc24xn$(event), Unit;
      }.bind(null, this$NoteGroup)));
      return Unit;
    };
  }
  function NoteGroup_init$lambda$lambda$lambda_5(this$NoteGroup) {
    return function (it) {
      return format(it * this$NoteGroup.value, 2) + ' \u20AC';
    };
  }
  function NoteGroup_init$lambda$lambda_4(closure$property, this$NoteGroup) {
    return function ($receiver) {
      $receiver.readonly = true;
      $receiver.preventTabStop();
      $receiver.bind_vbud5z$(mapBinding(closure$property, NoteGroup_init$lambda$lambda$lambda_5(this$NoteGroup)));
      return Unit;
    };
  }
  function NoteGroup_init$lambda_1(this$NoteGroup, closure$editable, closure$property) {
    return function ($receiver) {
      $receiver.classList.plusAssign_61zpoe$('note-input');
      this$NoteGroup.input = inputView($receiver, void 0, NoteGroup_init$lambda$lambda_3(this$NoteGroup, closure$editable));
      inputView($receiver, void 0, NoteGroup_init$lambda$lambda_4(closure$property, this$NoteGroup));
      return Unit;
    };
  }
  NoteGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NoteGroup',
    interfaces: [MoneyGroup]
  };
  function NoteStack(value, property) {
    ViewCollection.call(this);
    this.value = value;
    this.property = property;
    this.unaryPlus_o71kt9$(new Note(this.value, 0));
    this.property.onChange.invoke_qlkmfe$(NoteStack_init$lambda(this));
    this.update_0();
  }
  NoteStack.prototype.update_0 = function () {
    var count = this.property.value;
    while ((this.size - 1 | 0) > count) {
      this.remove_4q8e84$(this.last());
    }
    while ((this.size - 1 | 0) < count) {
      this.append_4q8e84$(new Note(this.value, this.size - 1 | 0));
    }
  };
  function NoteStack_init$lambda(this$NoteStack) {
    return function (it) {
      this$NoteStack.update_0();
      return Unit;
    };
  }
  NoteStack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NoteStack',
    interfaces: [ViewCollection]
  };
  function AttributeDelegate(paramName) {
    if (paramName === void 0)
      paramName = null;
    this.paramName_0 = paramName;
  }
  AttributeDelegate.prototype.getParamName_0 = function (property) {
    var tmp$;
    return (tmp$ = this.paramName_0) != null ? tmp$ : property.callableName.toLowerCase();
  };
  AttributeDelegate.prototype.getValue_g92zoq$ = function (container, property) {
    return container.html.getAttribute(this.getParamName_0(property));
  };
  AttributeDelegate.prototype.setValue_wcp6fr$ = function (container, property, value) {
    if (value == null) {
      container.html.removeAttribute(this.getParamName_0(property));
    }
     else {
      container.html.setAttribute(this.getParamName_0(property), value.toString());
    }
  };
  AttributeDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AttributeDelegate',
    interfaces: []
  };
  function ClassDelegate(className) {
    if (className === void 0)
      className = null;
    this.container_52mgvt$_0 = this.container_52mgvt$_0;
    this.paramName_9waf8i$_0 = this.paramName_9waf8i$_0;
    this.classProperty_irsmlv$_0 = this.classProperty_irsmlv$_0;
    if (className != null) {
      this.paramName_0 = className;
    }
  }
  Object.defineProperty(ClassDelegate.prototype, 'container_0', {
    get: function () {
      if (this.container_52mgvt$_0 == null)
        return throwUPAE('container');
      return this.container_52mgvt$_0;
    },
    set: function (container) {
      this.container_52mgvt$_0 = container;
    }
  });
  Object.defineProperty(ClassDelegate.prototype, 'paramName_0', {
    get: function () {
      if (this.paramName_9waf8i$_0 == null)
        return throwUPAE('paramName');
      return this.paramName_9waf8i$_0;
    },
    set: function (paramName) {
      this.paramName_9waf8i$_0 = paramName;
    }
  });
  Object.defineProperty(ClassDelegate.prototype, 'classProperty_0', {
    get: function () {
      if (this.classProperty_irsmlv$_0 == null)
        return throwUPAE('classProperty');
      return this.classProperty_irsmlv$_0;
    },
    set: function (classProperty) {
      this.classProperty_irsmlv$_0 = classProperty;
    }
  });
  function ClassDelegate$getValue$lambda(closure$container, this$ClassDelegate) {
    return function (it) {
      closure$container.html.classList.toggle(this$ClassDelegate.paramName_0, this$ClassDelegate.classProperty_0.value);
      return Unit;
    };
  }
  ClassDelegate.prototype.getValue_g92zoq$ = function (container, property_0) {
    if (this.container_52mgvt$_0 == null) {
      this.container_0 = container;
    }
    if (this.paramName_9waf8i$_0 == null) {
      var name = toDashCase(property_0.callableName);
      if (endsWith(name, '-property')) {
        name = replace(name, '-property', '');
      }
      this.paramName_0 = name;
    }
    if (this.classProperty_irsmlv$_0 == null) {
      this.classProperty_0 = property(container.html.classList.contains(this.paramName_0));
      this.classProperty_0.onChange.invoke_qlkmfe$(ClassDelegate$getValue$lambda(container, this));
    }
    return this.classProperty_0;
  };
  ClassDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClassDelegate',
    interfaces: []
  };
  function ClassList(list) {
    this.list_0 = list;
    this.bound_0 = LinkedHashMap_init();
  }
  ClassList.prototype.add_61zpoe$ = function (clazz) {
    var tmp$;
    var $receiver = this.bound_0;
    var tmp$_0;
    if ((Kotlin.isType(tmp$_0 = $receiver, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(clazz)) {
      tmp$ = this.bound_0.get_11rb$(clazz);
      if (tmp$ == null) {
        return;
      }
      var p = tmp$;
      if (Kotlin.isType(p.property, Property)) {
        p.property.value = true;
      }
       else {
        throw IllegalStateException_init('The given class is bound and cannot be modified manually!');
      }
    }
     else {
      this.list_0.add(clazz);
    }
  };
  ClassList.prototype.plusAssign_61zpoe$ = function (clazz) {
    this.add_61zpoe$(clazz);
  };
  ClassList.prototype.remove_61zpoe$ = function (clazz) {
    var tmp$;
    var $receiver = this.bound_0;
    var tmp$_0;
    if ((Kotlin.isType(tmp$_0 = $receiver, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(clazz)) {
      tmp$ = this.bound_0.get_11rb$(clazz);
      if (tmp$ == null) {
        return;
      }
      var p = tmp$;
      if (Kotlin.isType(p.property, Property)) {
        p.property.value = false;
      }
       else {
        throw IllegalStateException_init('The given class is bound and cannot be modified manually!');
      }
    }
     else {
      this.list_0.remove(clazz);
    }
  };
  ClassList.prototype.minusAssign_61zpoe$ = function (clazz) {
    this.remove_61zpoe$(clazz);
  };
  ClassList.prototype.get_61zpoe$ = function (clazz) {
    return this.list_0.contains(clazz);
  };
  ClassList.prototype.contains_61zpoe$ = function (clazz) {
    return this.list_0.contains(clazz);
  };
  ClassList.prototype.set_ivxn3r$ = function (clazz, present) {
    if (present) {
      this.add_61zpoe$(clazz);
    }
     else {
      this.remove_61zpoe$(clazz);
    }
  };
  ClassList.prototype.toggle_h92gdm$ = function (clazz, force) {
    if (force === void 0)
      force = null;
    this.set_ivxn3r$(clazz, force != null ? force : !this.contains_61zpoe$(clazz));
  };
  function ClassList$bind$lambda(this$ClassList, closure$clazz, closure$property) {
    return function (it) {
      this$ClassList.list_0.toggle(closure$clazz, closure$property.value);
      return Unit;
    };
  }
  ClassList.prototype.bind_pwxjbw$ = function (clazz, property) {
    var $receiver = this.bound_0;
    var tmp$;
    if ((Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(clazz)) {
      throw IllegalArgumentException_init('Class is already bound!');
    }
    this.set_ivxn3r$(clazz, property.value);
    var $receiver_0 = this.bound_0;
    var value = new ClassList$Bound(property, property.onChange.reference_qlkmfe$(ClassList$bind$lambda(this, clazz, property)));
    $receiver_0.put_xwzc9p$(clazz, value);
  };
  ClassList.prototype.unbind_61zpoe$ = function (clazz) {
    var tmp$, tmp$_0;
    var $receiver = this.bound_0;
    var tmp$_1;
    if (!(Kotlin.isType(tmp$_1 = $receiver, Map) ? tmp$_1 : throwCCE()).containsKey_11rb$(clazz)) {
      throw IllegalArgumentException_init('Class is not bound!');
    }
    (tmp$_0 = (tmp$ = this.bound_0.get_11rb$(clazz)) != null ? tmp$.reference : null) != null ? tmp$_0.detach() : null;
    this.bound_0.remove_11rb$(clazz);
  };
  ClassList.prototype.iterator = function () {
    var tmp$ = this.toString();
    return Regex_init(' +').split_905azu$(tmp$, 0).iterator();
  };
  ClassList.prototype.toString = function () {
    return this.list_0.value;
  };
  function ClassList$Bound(property, reference) {
    this.property = property;
    this.reference = reference;
  }
  ClassList$Bound.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bound',
    interfaces: []
  };
  ClassList$Bound.prototype.component1 = function () {
    return this.property;
  };
  ClassList$Bound.prototype.component2 = function () {
    return this.reference;
  };
  ClassList$Bound.prototype.copy_a4lnrt$ = function (property, reference) {
    return new ClassList$Bound(property === void 0 ? this.property : property, reference === void 0 ? this.reference : reference);
  };
  ClassList$Bound.prototype.toString = function () {
    return 'Bound(property=' + Kotlin.toString(this.property) + (', reference=' + Kotlin.toString(this.reference)) + ')';
  };
  ClassList$Bound.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.property) | 0;
    result = result * 31 + Kotlin.hashCode(this.reference) | 0;
    return result;
  };
  ClassList$Bound.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.property, other.property) && Kotlin.equals(this.reference, other.reference)))));
  };
  ClassList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClassList',
    interfaces: [Iterable]
  };
  function DataSet(map) {
    this.map_0 = map;
    this.bound_0 = LinkedHashMap_init();
  }
  DataSet.prototype.plusAssign_mdsbjt$ = function (entry) {
    var tmp$;
    var $receiver = this.bound_0;
    var key = entry.first;
    var tmp$_0;
    if ((Kotlin.isType(tmp$_0 = $receiver, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(key)) {
      (tmp$ = this.bound_0.get_11rb$(entry.first)) != null ? (tmp$.set_pdl1vj$(entry.second), Unit) : null;
    }
     else {
      this.map_0[entry.first] = entry.second;
    }
  };
  DataSet.prototype.minusAssign_61zpoe$ = function (key) {
    var tmp$;
    var $receiver = this.bound_0;
    var tmp$_0;
    if ((Kotlin.isType(tmp$_0 = $receiver, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(key)) {
      (tmp$ = this.bound_0.get_11rb$(key)) != null ? (tmp$.set_pdl1vj$(null), Unit) : null;
    }
     else {
      delete_0(this.map_0, key);
    }
  };
  DataSet.prototype.get_61zpoe$ = function (key) {
    return this.map_0[key];
  };
  DataSet.prototype.set_jyasbz$ = function (key, value) {
    if (value == null) {
      this.minusAssign_61zpoe$(key);
    }
     else {
      this.plusAssign_mdsbjt$(to(key, value));
    }
  };
  DataSet.prototype.bind_uidmrr$ = function (key, property) {
    var $receiver = this.bound_0;
    var tmp$;
    if ((Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(key)) {
      throw IllegalArgumentException_init('Class is already bound!');
    }
    var $receiver_0 = this.bound_0;
    var value = new DataSet$Bound(this, key, null, property);
    $receiver_0.put_xwzc9p$(key, value);
  };
  DataSet.prototype.bind_mf9wae$ = function (key, property) {
    var $receiver = this.bound_0;
    var tmp$;
    if ((Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(key)) {
      throw IllegalArgumentException_init('Class is already bound!');
    }
    var $receiver_0 = this.bound_0;
    var value = new DataSet$Bound(this, key, property, null);
    $receiver_0.put_xwzc9p$(key, value);
  };
  DataSet.prototype.unbind_61zpoe$ = function (key) {
    var tmp$, tmp$_0;
    var $receiver = this.bound_0;
    var tmp$_1;
    if (!(Kotlin.isType(tmp$_1 = $receiver, Map) ? tmp$_1 : throwCCE()).containsKey_11rb$(key)) {
      throw IllegalArgumentException_init('Class is not bound!');
    }
    (tmp$_0 = (tmp$ = this.bound_0.get_11rb$(key)) != null ? tmp$.reference : null) != null ? tmp$_0.detach() : null;
    this.bound_0.remove_11rb$(key);
  };
  function DataSet$Bound($outer, key, propertyNullable, property) {
    this.$outer = $outer;
    this.key = key;
    this.propertyNullable = propertyNullable;
    this.property = property;
    this.reference_f105uk$_0 = this.reference_f105uk$_0;
    if (this.propertyNullable != null) {
      this.reference = this.propertyNullable.onChange.reference_qlkmfe$(DataSet$DataSet$Bound_init$lambda(this, this.$outer));
      var value = this.propertyNullable.value;
      if (value == null) {
        delete_0(this.$outer.map_0, this.key);
      }
       else {
        this.$outer.map_0[this.key] = value;
      }
    }
     else if (this.property != null) {
      this.reference = this.property.onChange.reference_qlkmfe$(DataSet$DataSet$Bound_init$lambda_0(this, this.$outer));
      this.$outer.map_0[this.key] = this.property.value;
    }
  }
  Object.defineProperty(DataSet$Bound.prototype, 'reference', {
    get: function () {
      if (this.reference_f105uk$_0 == null)
        return throwUPAE('reference');
      return this.reference_f105uk$_0;
    },
    set: function (reference) {
      this.reference_f105uk$_0 = reference;
    }
  });
  DataSet$Bound.prototype.set_pdl1vj$ = function (value) {
    if (this.propertyNullable != null && Kotlin.isType(this.propertyNullable, Property)) {
      this.propertyNullable.value = value;
    }
     else if (this.property != null && Kotlin.isType(this.property, Property) && value != null) {
      this.property.value = value;
    }
     else {
      throw IllegalStateException_init('The given class is bound and cannot be modified manually!');
    }
  };
  function DataSet$DataSet$Bound_init$lambda(this$Bound, this$DataSet) {
    return function (it) {
      var value = this$Bound.propertyNullable.value;
      if (value == null) {
        delete_0(this$DataSet.map_0, this$Bound.key);
      }
       else {
        this$DataSet.map_0[this$Bound.key] = value;
      }
      return Unit;
    };
  }
  function DataSet$DataSet$Bound_init$lambda_0(this$Bound, this$DataSet) {
    return function (it) {
      this$DataSet.map_0[this$Bound.key] = this$Bound.property.value;
      return Unit;
    };
  }
  DataSet$Bound.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bound',
    interfaces: []
  };
  DataSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DataSet',
    interfaces: []
  };
  function Dimension(left, top, width, height) {
    Dimension$Companion_getInstance();
    if (width === void 0)
      width = 0.0;
    if (height === void 0)
      height = 0.0;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
  }
  Object.defineProperty(Dimension.prototype, 'position', {
    get: function () {
      return new Point(this.left, this.top);
    }
  });
  Object.defineProperty(Dimension.prototype, 'size', {
    get: function () {
      return new Point(this.width, this.height);
    }
  });
  Object.defineProperty(Dimension.prototype, 'right', {
    get: function () {
      return this.left + this.width;
    }
  });
  Object.defineProperty(Dimension.prototype, 'bottom', {
    get: function () {
      return this.top + this.height;
    }
  });
  Object.defineProperty(Dimension.prototype, 'edges', {
    get: function () {
      return setOf([new Point(this.left, this.top), new Point(this.right, this.top), new Point(this.left, this.bottom), new Point(this.right, this.bottom)]);
    }
  });
  Object.defineProperty(Dimension.prototype, 'normalized', {
    get: function () {
      var a = this.left;
      var b = this.right;
      var l = Math_0.min(a, b);
      var a_0 = this.top;
      var b_0 = this.bottom;
      var t = Math_0.min(a_0, b_0);
      var x = this.width;
      var tmp$ = Math_0.abs(x);
      var x_0 = this.width;
      return new Dimension(l, t, tmp$, Math_0.abs(x_0));
    }
  });
  Dimension.prototype.contains_wi5w89$ = function (other) {
    return !(other.left > this.right || other.right < this.left || other.top > this.bottom || other.bottom < this.top);
  };
  Dimension.prototype.contains_lw9iv3$ = function (other) {
    var n = this.normalized;
    return n.left <= other.x && n.left + this.width >= other.x && (n.top <= other.y && n.top + this.height >= other.y);
  };
  Dimension.prototype.plus_lw9iv3$ = function (point) {
    return this.copy_6y0v78$(this.left + point.x, this.top + point.y);
  };
  function Dimension$Companion() {
    Dimension$Companion_instance = this;
    this.ZERO = new Dimension(0.0, 0.0);
  }
  Dimension$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Dimension$Companion_instance = null;
  function Dimension$Companion_getInstance() {
    if (Dimension$Companion_instance === null) {
      new Dimension$Companion();
    }
    return Dimension$Companion_instance;
  }
  Dimension.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dimension',
    interfaces: []
  };
  function Dimension_init(position, size, $this) {
    if (size === void 0)
      size = Point$Companion_getInstance().ZERO;
    $this = $this || Object.create(Dimension.prototype);
    Dimension.call($this, position.x, position.y, size.x, size.y);
    return $this;
  }
  Dimension.prototype.component1 = function () {
    return this.left;
  };
  Dimension.prototype.component2 = function () {
    return this.top;
  };
  Dimension.prototype.component3 = function () {
    return this.width;
  };
  Dimension.prototype.component4 = function () {
    return this.height;
  };
  Dimension.prototype.copy_6y0v78$ = function (left, top, width, height) {
    return new Dimension(left === void 0 ? this.left : left, top === void 0 ? this.top : top, width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  Dimension.prototype.toString = function () {
    return 'Dimension(left=' + Kotlin.toString(this.left) + (', top=' + Kotlin.toString(this.top)) + (', width=' + Kotlin.toString(this.width)) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  Dimension.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.left) | 0;
    result = result * 31 + Kotlin.hashCode(this.top) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  Dimension.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.left, other.left) && Kotlin.equals(this.top, other.top) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  function bind$ObjectLiteral(this$bind, isT, typeClosure$T) {
    this.this$bind = this$bind;
    this.isT = isT;
    this.typeClosure$T = typeClosure$T;
  }
  bind$ObjectLiteral.prototype.handleEvent = function (event) {
    var tmp$;
    this.this$bind.emit_11rb$(this.isT(tmp$ = event) ? tmp$ : throwCCE());
  };
  bind$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function bind$lambda(this$bind, closure$isAttached, closure$element, closure$event, closure$listener) {
    return function () {
      if (this$bind.isEmpty() && closure$isAttached.v) {
        closure$element.removeEventListener(closure$event, closure$listener);
        closure$isAttached.v = false;
      }
       else if (!this$bind.isEmpty() && !closure$isAttached.v) {
        closure$element.addEventListener(closure$event, closure$listener);
        closure$isAttached.v = true;
      }
      return Unit;
    };
  }
  function Document() {
    Document_instance = this;
    this.onClick = new EventHandler();
    this.onDblClick = new EventHandler();
    this.onContext = new EventHandler();
    this.onMouseDown = new EventHandler();
    this.onMouseMove = new EventHandler();
    this.onMouseUp = new EventHandler();
    this.onMouseEnter = new EventHandler();
    this.onMouseLeave = new EventHandler();
    this.onWheel = new EventHandler();
    this.onKeyDown = new EventHandler();
    this.onKeyPress = new EventHandler();
    this.onKeyUp = new EventHandler();
    this.onFocus = new EventHandler();
    this.onBlur = new EventHandler();
    var $receiver = this.onClick;
    var element = document;
    var listener = new bind$ObjectLiteral($receiver, Kotlin.isInstanceOf(MouseEvent), MouseEvent);
    var isAttached = {v: false};
    var updateState = bind$lambda($receiver, isAttached, element, 'click', listener);
    $receiver.onAttach = updateState;
    $receiver.onDetach = updateState;
    updateState();
    var $receiver_0 = this.onDblClick;
    var element_0 = document;
    var event = 'dblclick';
    var listener_0 = new bind$ObjectLiteral($receiver_0, Kotlin.isInstanceOf(MouseEvent), MouseEvent);
    var isAttached_0 = {v: false};
    var updateState_0 = bind$lambda($receiver_0, isAttached_0, element_0, event, listener_0);
    $receiver_0.onAttach = updateState_0;
    $receiver_0.onDetach = updateState_0;
    updateState_0();
    var $receiver_1 = this.onContext;
    var element_1 = document;
    var event_0 = 'contextmenu';
    var listener_1 = new bind$ObjectLiteral($receiver_1, Kotlin.isInstanceOf(MouseEvent), MouseEvent);
    var isAttached_1 = {v: false};
    var updateState_1 = bind$lambda($receiver_1, isAttached_1, element_1, event_0, listener_1);
    $receiver_1.onAttach = updateState_1;
    $receiver_1.onDetach = updateState_1;
    updateState_1();
    var $receiver_2 = this.onMouseDown;
    var element_2 = document;
    var event_1 = 'mousedown';
    var listener_2 = new bind$ObjectLiteral($receiver_2, Kotlin.isInstanceOf(MouseEvent), MouseEvent);
    var isAttached_2 = {v: false};
    var updateState_2 = bind$lambda($receiver_2, isAttached_2, element_2, event_1, listener_2);
    $receiver_2.onAttach = updateState_2;
    $receiver_2.onDetach = updateState_2;
    updateState_2();
    var $receiver_3 = this.onMouseMove;
    var element_3 = document;
    var event_2 = 'mousemove';
    var listener_3 = new bind$ObjectLiteral($receiver_3, Kotlin.isInstanceOf(MouseEvent), MouseEvent);
    var isAttached_3 = {v: false};
    var updateState_3 = bind$lambda($receiver_3, isAttached_3, element_3, event_2, listener_3);
    $receiver_3.onAttach = updateState_3;
    $receiver_3.onDetach = updateState_3;
    updateState_3();
    var $receiver_4 = this.onMouseUp;
    var element_4 = document;
    var listener_4 = new bind$ObjectLiteral($receiver_4, Kotlin.isInstanceOf(MouseEvent), MouseEvent);
    var isAttached_4 = {v: false};
    var updateState_4 = bind$lambda($receiver_4, isAttached_4, element_4, 'mouseup', listener_4);
    $receiver_4.onAttach = updateState_4;
    $receiver_4.onDetach = updateState_4;
    updateState_4();
    var $receiver_5 = this.onMouseEnter;
    var element_5 = document;
    var event_3 = 'mouseenter';
    var listener_5 = new bind$ObjectLiteral($receiver_5, Kotlin.isInstanceOf(MouseEvent), MouseEvent);
    var isAttached_5 = {v: false};
    var updateState_5 = bind$lambda($receiver_5, isAttached_5, element_5, event_3, listener_5);
    $receiver_5.onAttach = updateState_5;
    $receiver_5.onDetach = updateState_5;
    updateState_5();
    var $receiver_6 = this.onMouseLeave;
    var element_6 = document;
    var event_4 = 'mouseleave';
    var listener_6 = new bind$ObjectLiteral($receiver_6, Kotlin.isInstanceOf(MouseEvent), MouseEvent);
    var isAttached_6 = {v: false};
    var updateState_6 = bind$lambda($receiver_6, isAttached_6, element_6, event_4, listener_6);
    $receiver_6.onAttach = updateState_6;
    $receiver_6.onDetach = updateState_6;
    updateState_6();
    var $receiver_7 = this.onWheel;
    var element_7 = document;
    var listener_7 = new bind$ObjectLiteral($receiver_7, Kotlin.isInstanceOf(WheelEvent), WheelEvent);
    var isAttached_7 = {v: false};
    var updateState_7 = bind$lambda($receiver_7, isAttached_7, element_7, 'wheel', listener_7);
    $receiver_7.onAttach = updateState_7;
    $receiver_7.onDetach = updateState_7;
    updateState_7();
    var $receiver_8 = this.onKeyDown;
    var element_8 = document;
    var listener_8 = new bind$ObjectLiteral($receiver_8, Kotlin.isInstanceOf(KeyboardEvent), KeyboardEvent);
    var isAttached_8 = {v: false};
    var updateState_8 = bind$lambda($receiver_8, isAttached_8, element_8, 'keydown', listener_8);
    $receiver_8.onAttach = updateState_8;
    $receiver_8.onDetach = updateState_8;
    updateState_8();
    var $receiver_9 = this.onKeyPress;
    var element_9 = document;
    var event_5 = 'keypress';
    var listener_9 = new bind$ObjectLiteral($receiver_9, Kotlin.isInstanceOf(KeyboardEvent), KeyboardEvent);
    var isAttached_9 = {v: false};
    var updateState_9 = bind$lambda($receiver_9, isAttached_9, element_9, event_5, listener_9);
    $receiver_9.onAttach = updateState_9;
    $receiver_9.onDetach = updateState_9;
    updateState_9();
    var $receiver_10 = this.onKeyUp;
    var element_10 = document;
    var listener_10 = new bind$ObjectLiteral($receiver_10, Kotlin.isInstanceOf(KeyboardEvent), KeyboardEvent);
    var isAttached_10 = {v: false};
    var updateState_10 = bind$lambda($receiver_10, isAttached_10, element_10, 'keyup', listener_10);
    $receiver_10.onAttach = updateState_10;
    $receiver_10.onDetach = updateState_10;
    updateState_10();
    var $receiver_11 = this.onFocus;
    var element_11 = document;
    var listener_11 = new bind$ObjectLiteral($receiver_11, Kotlin.isInstanceOf(FocusEvent), FocusEvent);
    var isAttached_11 = {v: false};
    var updateState_11 = bind$lambda($receiver_11, isAttached_11, element_11, 'focus', listener_11);
    $receiver_11.onAttach = updateState_11;
    $receiver_11.onDetach = updateState_11;
    updateState_11();
    var $receiver_12 = this.onBlur;
    var element_12 = document;
    var listener_12 = new bind$ObjectLiteral($receiver_12, Kotlin.isInstanceOf(FocusEvent), FocusEvent);
    var isAttached_12 = {v: false};
    var updateState_12 = bind$lambda($receiver_12, isAttached_12, element_12, 'blur', listener_12);
    $receiver_12.onAttach = updateState_12;
    $receiver_12.onDetach = updateState_12;
    updateState_12();
  }
  Document.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Document',
    interfaces: []
  };
  var Document_instance = null;
  function Document_getInstance() {
    if (Document_instance === null) {
      new Document();
    }
    return Document_instance;
  }
  function KWebViewDsl() {
  }
  KWebViewDsl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KWebViewDsl',
    interfaces: [Annotation]
  };
  function Point(x, y) {
    Point$Companion_getInstance();
    this.x = x;
    this.y = y;
  }
  Point.prototype.plus_za3lpa$ = function (number) {
    return new Point(this.x + number, this.y + number);
  };
  Point.prototype.plus_14dthe$ = function (number) {
    return new Point(this.x + number, this.y + number);
  };
  Point.prototype.plus_lw9iv3$ = function (point) {
    return new Point(this.x + point.x, this.y + point.y);
  };
  Point.prototype.minus_za3lpa$ = function (number) {
    return new Point(this.x - number, this.y - number);
  };
  Point.prototype.minus_14dthe$ = function (number) {
    return new Point(this.x - number, this.y - number);
  };
  Point.prototype.minus_lw9iv3$ = function (point) {
    return new Point(this.x - point.x, this.y - point.y);
  };
  Point.prototype.times_za3lpa$ = function (number) {
    return new Point(this.x * number, this.y * number);
  };
  Point.prototype.times_14dthe$ = function (number) {
    return new Point(this.x * number, this.y * number);
  };
  Point.prototype.times_lw9iv3$ = function (point) {
    return new Point(this.x * point.x, this.y * point.y);
  };
  Point.prototype.div_za3lpa$ = function (number) {
    return new Point(this.x / number, this.y / number);
  };
  Point.prototype.div_14dthe$ = function (number) {
    return new Point(this.x / number, this.y / number);
  };
  Point.prototype.div_lw9iv3$ = function (point) {
    return new Point(this.x / point.x, this.y / point.y);
  };
  Point.prototype.unaryMinus = function () {
    return new Point(-this.x, -this.y);
  };
  Point.prototype.min = function () {
    var a = this.x;
    var b = this.y;
    return Math_0.min(a, b);
  };
  Point.prototype.max = function () {
    var a = this.x;
    var b = this.y;
    return Math_0.max(a, b);
  };
  Object.defineProperty(Point.prototype, 'isZero', {
    get: function () {
      return this.x === 0.0 && this.y === 0.0;
    }
  });
  function Point$Companion() {
    Point$Companion_instance = this;
    this.ZERO = new Point(0.0, 0.0);
  }
  Point$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Point$Companion_instance = null;
  function Point$Companion_getInstance() {
    if (Point$Companion_instance === null) {
      new Point$Companion();
    }
    return Point$Companion_instance;
  }
  Object.defineProperty(Point.prototype, 'asPx', {
    get: function () {
      return this.x.toString() + 'px, ' + this.y + 'px';
    }
  });
  Point.prototype.distance = function () {
    var x = this.x * this.x + this.y * this.y;
    return Math_0.sqrt(x);
  };
  Point.prototype.distance_lw9iv3$ = function (other) {
    return this.minus_lw9iv3$(other).distance();
  };
  Point.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Point',
    interfaces: []
  };
  function Point_init(x, y, $this) {
    $this = $this || Object.create(Point.prototype);
    Point.call($this, x, y);
    return $this;
  }
  Point.prototype.component1 = function () {
    return this.x;
  };
  Point.prototype.component2 = function () {
    return this.y;
  };
  Point.prototype.copy_lu1900$ = function (x, y) {
    return new Point(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Point.prototype.toString = function () {
    return 'Point(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  Point.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Point.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function get_0($receiver, index) {
    return $receiver.item(index);
  }
  function all($receiver) {
    var $receiver_0 = new IntRange(0, $receiver.length);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      if ((tmp$_0 = $receiver.item(element)) != null) {
        destination.add_11rb$(tmp$_0);
      }
    }
    return destination;
  }
  function find($receiver, identifier) {
    var $receiver_0 = all($receiver);
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.identifier === identifier) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  }
  function bind$ObjectLiteral_0(this$bind, isT, typeClosure$T) {
    this.this$bind = this$bind;
    this.isT = isT;
    this.typeClosure$T = typeClosure$T;
  }
  bind$ObjectLiteral_0.prototype.handleEvent = function (event) {
    var tmp$;
    this.this$bind.emit_11rb$(this.isT(tmp$ = event) ? tmp$ : throwCCE());
  };
  bind$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function bind$lambda_0(this$bind, closure$isAttached, closure$element, closure$event, closure$listener) {
    return function () {
      if (this$bind.isEmpty() && closure$isAttached.v) {
        closure$element.removeEventListener(closure$event, closure$listener);
        closure$isAttached.v = false;
      }
       else if (!this$bind.isEmpty() && !closure$isAttached.v) {
        closure$element.addEventListener(closure$event, closure$listener);
        closure$isAttached.v = true;
      }
      return Unit;
    };
  }
  function View(view) {
    if (view === void 0) {
      var tmp$;
      var tagName;
      if (null != null) {
        tagName = null;
      }
       else {
        var tmp$_0 = get_js(getKClass(HTMLElement)).name.toLowerCase();
        tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
        if (isBlank(tagName)) {
          tagName = 'div';
        }
      }
      view = Kotlin.isType(tmp$ = document.createElement(tagName), HTMLElement) ? tmp$ : throwCCE();
    }
    var $receiver = view;
    var tmp$_1;
    if ((tmp$_1 = Kotlin.getKClassFromExpression(this).simpleName) != null) {
      $receiver.classList.add(toDashCase(tmp$_1));
    }
    this.html_2h1ff9$_0 = $receiver;
    this.classList = new ClassList(view.classList);
    this.dataset = new DataSet(view.dataset);
    this.id_ly6v17$_0 = new AttributeDelegate();
    this.title_b5qgcc$_0 = new AttributeDelegate();
    this.style = view.style;
    this.onClick = new EventHandler();
    this.onDblClick = new EventHandler();
    this.onContext = new EventHandler();
    this.onMouseDown = new EventHandler();
    this.onMouseMove = new EventHandler();
    this.onMouseUp = new EventHandler();
    this.onMouseEnter = new EventHandler();
    this.onMouseLeave = new EventHandler();
    this.onTouchStart = new EventHandler();
    this.onTouchEnd = new EventHandler();
    this.onTouchMove = new EventHandler();
    this.onTouchCancel = new EventHandler();
    this.onWheel = new EventHandler();
    this.onKeyDown = new EventHandler();
    this.onKeyPress = new EventHandler();
    this.onKeyUp = new EventHandler();
    this.onFocus = new EventHandler();
    this.onBlur = new EventHandler();
    var $receiver_0 = this.onClick;
    var element = view;
    var listener = new bind$ObjectLiteral_0($receiver_0, Kotlin.isInstanceOf(MouseEvent), MouseEvent);
    var isAttached = {v: false};
    var updateState = bind$lambda_0($receiver_0, isAttached, element, 'click', listener);
    $receiver_0.onAttach = updateState;
    $receiver_0.onDetach = updateState;
    updateState();
    var $receiver_1 = this.onDblClick;
    var element_0 = view;
    var event = 'dblclick';
    var listener_0 = new bind$ObjectLiteral_0($receiver_1, Kotlin.isInstanceOf(MouseEvent), MouseEvent);
    var isAttached_0 = {v: false};
    var updateState_0 = bind$lambda_0($receiver_1, isAttached_0, element_0, event, listener_0);
    $receiver_1.onAttach = updateState_0;
    $receiver_1.onDetach = updateState_0;
    updateState_0();
    var $receiver_2 = this.onContext;
    var element_1 = view;
    var event_0 = 'contextmenu';
    var listener_1 = new bind$ObjectLiteral_0($receiver_2, Kotlin.isInstanceOf(MouseEvent), MouseEvent);
    var isAttached_1 = {v: false};
    var updateState_1 = bind$lambda_0($receiver_2, isAttached_1, element_1, event_0, listener_1);
    $receiver_2.onAttach = updateState_1;
    $receiver_2.onDetach = updateState_1;
    updateState_1();
    var $receiver_3 = this.onMouseDown;
    var element_2 = view;
    var event_1 = 'mousedown';
    var listener_2 = new bind$ObjectLiteral_0($receiver_3, Kotlin.isInstanceOf(MouseEvent), MouseEvent);
    var isAttached_2 = {v: false};
    var updateState_2 = bind$lambda_0($receiver_3, isAttached_2, element_2, event_1, listener_2);
    $receiver_3.onAttach = updateState_2;
    $receiver_3.onDetach = updateState_2;
    updateState_2();
    var $receiver_4 = this.onMouseMove;
    var element_3 = view;
    var event_2 = 'mousemove';
    var listener_3 = new bind$ObjectLiteral_0($receiver_4, Kotlin.isInstanceOf(MouseEvent), MouseEvent);
    var isAttached_3 = {v: false};
    var updateState_3 = bind$lambda_0($receiver_4, isAttached_3, element_3, event_2, listener_3);
    $receiver_4.onAttach = updateState_3;
    $receiver_4.onDetach = updateState_3;
    updateState_3();
    var $receiver_5 = this.onMouseUp;
    var element_4 = view;
    var listener_4 = new bind$ObjectLiteral_0($receiver_5, Kotlin.isInstanceOf(MouseEvent), MouseEvent);
    var isAttached_4 = {v: false};
    var updateState_4 = bind$lambda_0($receiver_5, isAttached_4, element_4, 'mouseup', listener_4);
    $receiver_5.onAttach = updateState_4;
    $receiver_5.onDetach = updateState_4;
    updateState_4();
    var $receiver_6 = this.onMouseEnter;
    var element_5 = view;
    var event_3 = 'mouseenter';
    var listener_5 = new bind$ObjectLiteral_0($receiver_6, Kotlin.isInstanceOf(MouseEvent), MouseEvent);
    var isAttached_5 = {v: false};
    var updateState_5 = bind$lambda_0($receiver_6, isAttached_5, element_5, event_3, listener_5);
    $receiver_6.onAttach = updateState_5;
    $receiver_6.onDetach = updateState_5;
    updateState_5();
    var $receiver_7 = this.onMouseLeave;
    var element_6 = view;
    var event_4 = 'mouseleave';
    var listener_6 = new bind$ObjectLiteral_0($receiver_7, Kotlin.isInstanceOf(MouseEvent), MouseEvent);
    var isAttached_6 = {v: false};
    var updateState_6 = bind$lambda_0($receiver_7, isAttached_6, element_6, event_4, listener_6);
    $receiver_7.onAttach = updateState_6;
    $receiver_7.onDetach = updateState_6;
    updateState_6();
    if (!!window.TouchEvent == true) {
      var $receiver_8 = this.onTouchStart;
      var element_7 = view;
      var event_5 = 'touchstart';
      var listener_7 = new bind$ObjectLiteral_0($receiver_8, Kotlin.isInstanceOf(TouchEvent), TouchEvent);
      var isAttached_7 = {v: false};
      var updateState_7 = bind$lambda_0($receiver_8, isAttached_7, element_7, event_5, listener_7);
      $receiver_8.onAttach = updateState_7;
      $receiver_8.onDetach = updateState_7;
      updateState_7();
      var $receiver_9 = this.onTouchEnd;
      var element_8 = view;
      var event_6 = 'touchend';
      var listener_8 = new bind$ObjectLiteral_0($receiver_9, Kotlin.isInstanceOf(TouchEvent), TouchEvent);
      var isAttached_8 = {v: false};
      var updateState_8 = bind$lambda_0($receiver_9, isAttached_8, element_8, event_6, listener_8);
      $receiver_9.onAttach = updateState_8;
      $receiver_9.onDetach = updateState_8;
      updateState_8();
      var $receiver_10 = this.onTouchMove;
      var element_9 = view;
      var event_7 = 'touchmove';
      var listener_9 = new bind$ObjectLiteral_0($receiver_10, Kotlin.isInstanceOf(TouchEvent), TouchEvent);
      var isAttached_9 = {v: false};
      var updateState_9 = bind$lambda_0($receiver_10, isAttached_9, element_9, event_7, listener_9);
      $receiver_10.onAttach = updateState_9;
      $receiver_10.onDetach = updateState_9;
      updateState_9();
      var $receiver_11 = this.onTouchCancel;
      var element_10 = view;
      var event_8 = 'touchcancel';
      var listener_10 = new bind$ObjectLiteral_0($receiver_11, Kotlin.isInstanceOf(TouchEvent), TouchEvent);
      var isAttached_10 = {v: false};
      var updateState_10 = bind$lambda_0($receiver_11, isAttached_10, element_10, event_8, listener_10);
      $receiver_11.onAttach = updateState_10;
      $receiver_11.onDetach = updateState_10;
      updateState_10();
    }
    var $receiver_12 = this.onWheel;
    var element_11 = view;
    var listener_11 = new bind$ObjectLiteral_0($receiver_12, Kotlin.isInstanceOf(WheelEvent), WheelEvent);
    var isAttached_11 = {v: false};
    var updateState_11 = bind$lambda_0($receiver_12, isAttached_11, element_11, 'wheel', listener_11);
    $receiver_12.onAttach = updateState_11;
    $receiver_12.onDetach = updateState_11;
    updateState_11();
    var $receiver_13 = this.onKeyDown;
    var element_12 = view;
    var listener_12 = new bind$ObjectLiteral_0($receiver_13, Kotlin.isInstanceOf(KeyboardEvent), KeyboardEvent);
    var isAttached_12 = {v: false};
    var updateState_12 = bind$lambda_0($receiver_13, isAttached_12, element_12, 'keydown', listener_12);
    $receiver_13.onAttach = updateState_12;
    $receiver_13.onDetach = updateState_12;
    updateState_12();
    var $receiver_14 = this.onKeyPress;
    var element_13 = view;
    var event_9 = 'keypress';
    var listener_13 = new bind$ObjectLiteral_0($receiver_14, Kotlin.isInstanceOf(KeyboardEvent), KeyboardEvent);
    var isAttached_13 = {v: false};
    var updateState_13 = bind$lambda_0($receiver_14, isAttached_13, element_13, event_9, listener_13);
    $receiver_14.onAttach = updateState_13;
    $receiver_14.onDetach = updateState_13;
    updateState_13();
    var $receiver_15 = this.onKeyUp;
    var element_14 = view;
    var listener_14 = new bind$ObjectLiteral_0($receiver_15, Kotlin.isInstanceOf(KeyboardEvent), KeyboardEvent);
    var isAttached_14 = {v: false};
    var updateState_14 = bind$lambda_0($receiver_15, isAttached_14, element_14, 'keyup', listener_14);
    $receiver_15.onAttach = updateState_14;
    $receiver_15.onDetach = updateState_14;
    updateState_14();
    var $receiver_16 = this.onFocus;
    var element_15 = view;
    var listener_15 = new bind$ObjectLiteral_0($receiver_16, Kotlin.isInstanceOf(FocusEvent), FocusEvent);
    var isAttached_15 = {v: false};
    var updateState_15 = bind$lambda_0($receiver_16, isAttached_15, element_15, 'focus', listener_15);
    $receiver_16.onAttach = updateState_15;
    $receiver_16.onDetach = updateState_15;
    updateState_15();
    var $receiver_17 = this.onBlur;
    var element_16 = view;
    var listener_16 = new bind$ObjectLiteral_0($receiver_17, Kotlin.isInstanceOf(FocusEvent), FocusEvent);
    var isAttached_16 = {v: false};
    var updateState_16 = bind$lambda_0($receiver_17, isAttached_16, element_16, 'blur', listener_16);
    $receiver_17.onAttach = updateState_16;
    $receiver_17.onDetach = updateState_16;
    updateState_16();
  }
  Object.defineProperty(View.prototype, 'html', {
    get: function () {
      return this.html_2h1ff9$_0;
    }
  });
  var View$id_metadata = new PropertyMetadata('id');
  Object.defineProperty(View.prototype, 'id', {
    get: function () {
      return this.id_ly6v17$_0.getValue_g92zoq$(this, View$id_metadata);
    },
    set: function (id) {
      this.id_ly6v17$_0.setValue_wcp6fr$(this, View$id_metadata, id);
    }
  });
  Object.defineProperty(View.prototype, 'clientLeft', {
    get: function () {
      return this.html.clientLeft;
    }
  });
  Object.defineProperty(View.prototype, 'clientTop', {
    get: function () {
      return this.html.clientTop;
    }
  });
  Object.defineProperty(View.prototype, 'clientWidth', {
    get: function () {
      return this.html.clientWidth;
    }
  });
  Object.defineProperty(View.prototype, 'clientHeight', {
    get: function () {
      return this.html.clientHeight;
    }
  });
  Object.defineProperty(View.prototype, 'offsetLeft', {
    get: function () {
      return this.html.offsetLeft;
    }
  });
  Object.defineProperty(View.prototype, 'offsetTop', {
    get: function () {
      return this.html.offsetTop;
    }
  });
  Object.defineProperty(View.prototype, 'offsetWidth', {
    get: function () {
      return this.html.offsetWidth;
    }
  });
  Object.defineProperty(View.prototype, 'offsetHeight', {
    get: function () {
      return this.html.offsetHeight;
    }
  });
  Object.defineProperty(View.prototype, 'offsetLeftTotal', {
    get: function () {
      var tmp$;
      var element = this.html;
      var offset = 0;
      while (element != null) {
        offset = offset + element.offsetLeft | 0;
        element = Kotlin.isType(tmp$ = element.offsetParent, HTMLElement) ? tmp$ : null;
      }
      return offset;
    }
  });
  Object.defineProperty(View.prototype, 'offsetTopTotal', {
    get: function () {
      var tmp$;
      var element = this.html;
      var offset = 0;
      while (element != null) {
        offset = offset + element.offsetTop | 0;
        element = Kotlin.isType(tmp$ = element.offsetParent, HTMLElement) ? tmp$ : null;
      }
      return offset;
    }
  });
  Object.defineProperty(View.prototype, 'dimension', {
    get: function () {
      return toDimension(this.html.getBoundingClientRect());
    }
  });
  var View$title_metadata = new PropertyMetadata('title');
  Object.defineProperty(View.prototype, 'title', {
    get: function () {
      return this.title_b5qgcc$_0.getValue_g92zoq$(this, View$title_metadata);
    },
    set: function (title) {
      this.title_b5qgcc$_0.setValue_wcp6fr$(this, View$title_metadata, title);
    }
  });
  View.prototype.style_ro3e7h$ = function (block) {
    block(this.style);
  };
  View.prototype.focus = function () {
    this.html.focus();
  };
  View.prototype.blur = function () {
    this.html.blur();
  };
  View.prototype.click = function () {
    this.html.click();
  };
  View.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'View',
    interfaces: []
  };
  function ViewCollection(view) {
    if (view === void 0) {
      var tmp$;
      var tagName;
      if (null != null) {
        tagName = null;
      }
       else {
        var tmp$_0 = get_js(getKClass(HTMLElement)).name.toLowerCase();
        tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
        if (isBlank(tagName)) {
          tagName = 'div';
        }
      }
      view = Kotlin.isType(tmp$ = document.createElement(tagName), HTMLElement) ? tmp$ : throwCCE();
    }
    View.call(this, view);
    this.children_bxh70f$_0 = ArrayList_init();
  }
  ViewCollection.prototype.append_4q8e84$ = function (view) {
    this.children_bxh70f$_0.add_11rb$(view);
    this.html.appendChild(view.html);
  };
  ViewCollection.prototype.plusAssign_4q8e84$ = function (view) {
    this.append_4q8e84$(view);
  };
  ViewCollection.prototype.prepand_4q8e84$ = function (view) {
    this.children_bxh70f$_0.add_wxm5ur$(0, view);
    this.html.insertBefore(view.html, this.html.firstChild);
  };
  ViewCollection.prototype.remove_4q8e84$ = function (view) {
    if (this.children_bxh70f$_0.contains_11rb$(view)) {
      this.children_bxh70f$_0.remove_11rb$(view);
      this.html.removeChild(view.html);
    }
  };
  ViewCollection.prototype.replace_6kgn13$ = function (oldView, newView) {
    if (this.children_bxh70f$_0.contains_11rb$(oldView)) {
      this.children_bxh70f$_0.add_wxm5ur$(this.children_bxh70f$_0.indexOf_11rb$(oldView), newView);
      this.html.insertBefore(newView.html, oldView.html);
      this.children_bxh70f$_0.remove_11rb$(oldView);
      this.html.removeChild(oldView.html);
    }
  };
  ViewCollection.prototype.add_4q8e84$ = function (view) {
    this.append_4q8e84$(view);
  };
  ViewCollection.prototype.add_3kdhji$ = function (index, view) {
    if (index >= this.size) {
      this.append_4q8e84$(view);
    }
     else {
      this.html.insertBefore(view.html, this.children_bxh70f$_0.get_za3lpa$(index).html);
      this.children_bxh70f$_0.add_wxm5ur$(index, view);
    }
  };
  ViewCollection.prototype.get_za3lpa$ = function (index) {
    return this.children_bxh70f$_0.get_za3lpa$(index);
  };
  ViewCollection.prototype.removeAt_za3lpa$ = function (index) {
    var tmp$;
    tmp$ = this.size;
    if (0 <= index && index < tmp$) {
      this.remove_4q8e84$(this.children_bxh70f$_0.get_za3lpa$(index));
    }
  };
  ViewCollection.prototype.toForeground_4q8e84$ = function (view) {
    if (this.children_bxh70f$_0.contains_11rb$(view) && this.children_bxh70f$_0.indexOf_11rb$(view) < (this.children_bxh70f$_0.size - 1 | 0)) {
      this.remove_4q8e84$(view);
      this.append_4q8e84$(view);
    }
  };
  ViewCollection.prototype.toBackground_4q8e84$ = function (view) {
    if (this.children_bxh70f$_0.contains_11rb$(view) && this.children_bxh70f$_0.indexOf_11rb$(view) > 0) {
      this.remove_4q8e84$(view);
      this.prepand_4q8e84$(view);
    }
  };
  ViewCollection.prototype.first = function () {
    return first(this.children_bxh70f$_0);
  };
  ViewCollection.prototype.last = function () {
    return last(this.children_bxh70f$_0);
  };
  ViewCollection.prototype.minusAssign_4q8e84$ = function (view) {
    this.remove_4q8e84$(view);
  };
  ViewCollection.prototype.isEmpty = function () {
    return this.children_bxh70f$_0.isEmpty();
  };
  ViewCollection.prototype.clear = function () {
    this.children_bxh70f$_0.clear();
    clear(this.html);
  };
  ViewCollection.prototype.iterator = function () {
    return this.children_bxh70f$_0.iterator();
  };
  Object.defineProperty(ViewCollection.prototype, 'size', {
    get: function () {
      return this.children_bxh70f$_0.size;
    }
  });
  ViewCollection.prototype.contains_11rb$ = function (element) {
    return this.children_bxh70f$_0.contains_11rb$(element);
  };
  ViewCollection.prototype.containsAll_brywnq$ = function (elements) {
    return this.children_bxh70f$_0.containsAll_brywnq$(elements);
  };
  ViewCollection.prototype.unaryPlus_o71kt9$ = function ($receiver) {
    this.append_4q8e84$($receiver);
  };
  ViewCollection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ViewCollection',
    interfaces: [Collection, View]
  };
  function ViewForLabel() {
    ViewForLabel$Companion_getInstance();
    var tmp$;
    var tagName;
    if (null != null) {
      tagName = null;
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLInputElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName)) {
        tagName = 'div';
      }
    }
    View.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLInputElement) ? tmp$ : throwCCE());
    var tmp$_1;
    this.html_nn8o4g$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, View.prototype, 'html'), HTMLInputElement) ? tmp$_1 : throwCCE();
    this.label_l3sykr$_0 = null;
    this.requiredInternal_voook1$_awav3d$_0 = new AttributeDelegate('required');
    this.readonlyInternal_y59ok4$_8ilbr2$_0 = new AttributeDelegate('readonly');
    this.tabindex_ht064y$_0 = new AttributeDelegate();
  }
  Object.defineProperty(ViewForLabel.prototype, 'html', {
    get: function () {
      return this.html_nn8o4g$_0;
    }
  });
  ViewForLabel.prototype.setLabel_f5v1jf$ = function (label) {
    var tmp$;
    if (this.label_l3sykr$_0 != null) {
      throw IllegalStateException_init('Label already set!');
    }
    this.label_l3sykr$_0 = label;
    var id = this.id;
    if ((id != null ? !isBlank(id) : null) === true) {
      label.html.htmlFor = id;
    }
     else {
      var newId = ((tmp$ = Kotlin.getKClassFromExpression(this).simpleName) != null ? toDashCase(tmp$) : null) + '-' + ViewForLabel$Companion_getInstance().generateId_za3lpa$();
      this.id = newId;
      label.html.htmlFor = newId;
    }
  };
  var ViewForLabel$requiredInternal_metadata = new PropertyMetadata('requiredInternal');
  Object.defineProperty(ViewForLabel.prototype, 'requiredInternal_voook1$_0', {
    get: function () {
      return this.requiredInternal_voook1$_awav3d$_0.getValue_g92zoq$(this, ViewForLabel$requiredInternal_metadata);
    },
    set: function (requiredInternal) {
      this.requiredInternal_voook1$_awav3d$_0.setValue_wcp6fr$(this, ViewForLabel$requiredInternal_metadata, requiredInternal);
    }
  });
  Object.defineProperty(ViewForLabel.prototype, 'required', {
    get: function () {
      return this.requiredInternal_voook1$_0 != null;
    },
    set: function (value) {
      this.requiredInternal_voook1$_0 = value ? 'required' : null;
    }
  });
  var ViewForLabel$readonlyInternal_metadata = new PropertyMetadata('readonlyInternal');
  Object.defineProperty(ViewForLabel.prototype, 'readonlyInternal_y59ok4$_0', {
    get: function () {
      return this.readonlyInternal_y59ok4$_8ilbr2$_0.getValue_g92zoq$(this, ViewForLabel$readonlyInternal_metadata);
    },
    set: function (readonlyInternal) {
      this.readonlyInternal_y59ok4$_8ilbr2$_0.setValue_wcp6fr$(this, ViewForLabel$readonlyInternal_metadata, readonlyInternal);
    }
  });
  Object.defineProperty(ViewForLabel.prototype, 'readonly', {
    get: function () {
      return this.readonlyInternal_y59ok4$_0 != null;
    },
    set: function (value) {
      this.readonlyInternal_y59ok4$_0 = value ? 'readonly' : null;
    }
  });
  var ViewForLabel$tabindex_metadata = new PropertyMetadata('tabindex');
  Object.defineProperty(ViewForLabel.prototype, 'tabindex', {
    get: function () {
      return this.tabindex_ht064y$_0.getValue_g92zoq$(this, ViewForLabel$tabindex_metadata);
    },
    set: function (tabindex) {
      this.tabindex_ht064y$_0.setValue_wcp6fr$(this, ViewForLabel$tabindex_metadata, tabindex);
    }
  });
  ViewForLabel.prototype.preventTabStop = function () {
    this.tabindex = '-1';
  };
  function ViewForLabel$Companion() {
    ViewForLabel$Companion_instance = this;
  }
  ViewForLabel$Companion.prototype.generateId_za3lpa$ = function (length) {
    if (length === void 0)
      length = 16;
    var str = '';
    while (str.length <= length) {
      str += toString(abs(Random.Default.nextLong()), 36);
    }
    return take(str, length);
  };
  ViewForLabel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ViewForLabel$Companion_instance = null;
  function ViewForLabel$Companion_getInstance() {
    if (ViewForLabel$Companion_instance === null) {
      new ViewForLabel$Companion();
    }
    return ViewForLabel$Companion_instance;
  }
  ViewForLabel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ViewForLabel',
    interfaces: [View]
  };
  function Body() {
    Body_instance = this;
    tmp$ = document.body;
    if (tmp$ == null) {
      throw new NullPointerException('Access to body before body was loaded');
    }
    var tmp$;
    ViewCollection.call(this, tmp$);
    var tmp$_0;
    this.html_eoe4bw$_0 = Kotlin.isType(tmp$_0 = Kotlin.callGetter(this, ViewCollection.prototype, 'html'), HTMLBodyElement) ? tmp$_0 : throwCCE();
  }
  Object.defineProperty(Body.prototype, 'html', {
    get: function () {
      return this.html_eoe4bw$_0;
    }
  });
  Body.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Body',
    interfaces: [ViewCollection]
  };
  var Body_instance = null;
  function Body_getInstance() {
    if (Body_instance === null) {
      new Body();
    }
    return Body_instance;
  }
  function init$lambda(closure$done, closure$block) {
    return function (it) {
      closure$done.v = closure$done.v - 1 | 0;
      if (closure$done.v <= 0) {
        closure$block(Body_getInstance());
      }
      return Unit;
    };
  }
  function init$lambda_0(closure$done, closure$block) {
    return function () {
      closure$done.v = closure$done.v - 1 | 0;
      if (closure$done.v <= 0) {
        closure$block(Body_getInstance());
      }
      return Unit;
    };
  }
  function init(language, block) {
    if (language === void 0)
      language = null;
    var done = {v: language == null ? 1 : 2};
    window.onload = init$lambda(done, block);
    if (language != null) {
      i18n_getInstance().load_a4mwiz$(language, init$lambda_0(done, block));
    }
  }
  function BoxView() {
    var tmp$;
    var tagName;
    if (null != null) {
      tagName = null;
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLDivElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName)) {
        tagName = 'div';
      }
    }
    ViewCollection.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLDivElement) ? tmp$ : throwCCE());
    var tmp$_1;
    this.html_kguaso$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, ViewCollection.prototype, 'html'), HTMLDivElement) ? tmp$_1 : throwCCE();
  }
  Object.defineProperty(BoxView.prototype, 'html', {
    get: function () {
      return this.html_kguaso$_0;
    }
  });
  BoxView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoxView',
    interfaces: [ViewCollection]
  };
  function boxView$lambda($receiver) {
    return Unit;
  }
  function boxView($receiver, classes, init) {
    if (init === void 0)
      init = boxView$lambda;
    var tmp$;
    var view = new BoxView();
    for (tmp$ = 0; tmp$ !== classes.length; ++tmp$) {
      var c = classes[tmp$];
      view.classList.plusAssign_61zpoe$(c);
    }
    $receiver.append_4q8e84$(view);
    init(view);
    return view;
  }
  function Button() {
    var tmp$;
    var tagName;
    if (null != null) {
      tagName = null;
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLButtonElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName)) {
        tagName = 'div';
      }
    }
    ViewCollection.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLButtonElement) ? tmp$ : throwCCE());
    var tmp$_1;
    this.html_tbrays$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, ViewCollection.prototype, 'html'), HTMLButtonElement) ? tmp$_1 : throwCCE();
    this.textProperty = property_0(getPropertyCallableRef('text', 0, function ($receiver) {
      return $receiver.text;
    }.bind(null, this), function ($receiver, value) {
      $receiver.text = value;
    }.bind(null, this)));
  }
  Object.defineProperty(Button.prototype, 'html', {
    get: function () {
      return this.html_tbrays$_0;
    }
  });
  Button.prototype.bind_vbud5z$ = function (property) {
    this.textProperty.bind_ybyx9l$(property);
  };
  Button.prototype.unbind = function () {
    this.textProperty.unbind();
  };
  Object.defineProperty(Button.prototype, 'text', {
    get: function () {
      var tmp$;
      return (tmp$ = this.html.textContent) != null ? tmp$ : '';
    },
    set: function (value) {
      this.html.textContent = value;
      this.textProperty.invalidate();
    }
  });
  Button.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Button',
    interfaces: [ViewCollection]
  };
  function Button_init(text, $this) {
    $this = $this || Object.create(Button.prototype);
    Button.call($this);
    $this.text = text;
    return $this;
  }
  function button$lambda($receiver) {
    return Unit;
  }
  function button($receiver, text, init) {
    if (text === void 0)
      text = '';
    if (init === void 0)
      init = button$lambda;
    var $receiver_0 = Button_init(text);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function button$lambda_0($receiver) {
    return Unit;
  }
  function button_0($receiver, text, init) {
    if (init === void 0)
      init = button$lambda_0;
    var $receiver_0 = Button_init(text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_vbud5z$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function button$lambda_1($receiver) {
    return Unit;
  }
  function button_1($receiver, init) {
    if (init === void 0)
      init = button$lambda_1;
    var $receiver_0 = new Button();
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function Checkbox(initValue) {
    if (initValue === void 0)
      initValue = false;
    ViewForLabel.call(this);
    this.checkedProperty = property_0(getPropertyCallableRef('checked', 0, function ($receiver) {
      return $receiver.checked;
    }.bind(null, this), function ($receiver, value) {
      $receiver.checked = value;
    }.bind(null, this)));
    this.checked = initValue;
    this.html.type = 'checkbox';
    var lastValue = {v: this.checked};
    var changeListener = new Checkbox_init$ObjectLiteral(this, lastValue);
    this.html.addEventListener('change', changeListener);
    this.html.addEventListener('keyup', changeListener);
    this.html.addEventListener('keypress', changeListener);
  }
  Checkbox.prototype.bind_qq32mi$ = function (property) {
    this.checkedProperty.bind_ybyx9l$(property);
    this.readonly = true;
  };
  Checkbox.prototype.bind_8y7n20$ = function (property) {
    this.checkedProperty.bindBidirectional_8xvv9u$(property);
  };
  Checkbox.prototype.unbind = function () {
    this.checkedProperty.unbind();
  };
  Object.defineProperty(Checkbox.prototype, 'checked', {
    get: function () {
      return this.html.checked;
    },
    set: function (value) {
      this.html.checked = value;
      this.checkedProperty.invalidate();
    }
  });
  function Checkbox_init$ObjectLiteral(this$Checkbox, closure$lastValue) {
    this.this$Checkbox = this$Checkbox;
    this.closure$lastValue = closure$lastValue;
  }
  Checkbox_init$ObjectLiteral.prototype.handleEvent = function (event) {
    var value = this.this$Checkbox.checked;
    if (value !== this.this$Checkbox.checkedProperty.value || value !== this.closure$lastValue.v) {
      this.closure$lastValue.v = value;
      this.this$Checkbox.checkedProperty.value = value;
    }
  };
  Checkbox_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  Checkbox.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Checkbox',
    interfaces: [ViewForLabel]
  };
  function checkbox$lambda($receiver) {
    return Unit;
  }
  function checkbox($receiver, value, init) {
    if (value === void 0)
      value = false;
    if (init === void 0)
      init = checkbox$lambda;
    var $receiver_0 = new Checkbox(value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function checkbox$lambda_0($receiver) {
    return Unit;
  }
  function checkbox_0($receiver, value, init) {
    if (init === void 0)
      init = checkbox$lambda_0;
    var $receiver_0 = new Checkbox(value.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_qq32mi$(value);
    init($receiver_0);
    return $receiver_0;
  }
  function checkbox$lambda_1($receiver) {
    return Unit;
  }
  function checkbox_1($receiver, value, init) {
    if (init === void 0)
      init = checkbox$lambda_1;
    var $receiver_0 = new Checkbox(value.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_8y7n20$(value);
    init($receiver_0);
    return $receiver_0;
  }
  function Comparator$ObjectLiteral_2(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_2.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_2.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda_1 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function FilterList(property, filter) {
    var tmp$;
    var tagName;
    if (null != null) {
      tagName = null;
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName)) {
        tagName = 'div';
      }
    }
    ViewCollection.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLElement) ? tmp$ : throwCCE());
    this.property = property;
    this.filter = filter;
    this.content_0 = LinkedHashMap_init();
    this.update();
    this.property.onChange.invoke_qlkmfe$(FilterList_init$lambda(this));
  }
  function FilterList$update$lambda(closure$element, this$FilterList) {
    return function (it) {
      this$FilterList.property.value = closure$element;
      return Unit;
    };
  }
  FilterList.prototype.update = function () {
    var tmp$, tmp$_0, tmp$_1;
    var list = this.filter.filter_11rb$(this.property.value);
    var missing = list;
    tmp$ = this.content_0.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_2 = tmp$.next();
      var element = tmp$_2.key;
      var view = tmp$_2.value;
      if (list.contains_11rb$(element)) {
        missing = minus_1(missing, element);
      }
       else {
        if (this.contains_11rb$(view)) {
          this.remove_4q8e84$(view);
        }
        if (!this.filter.useCache) {
          this.content_0.remove_11rb$(element);
        }
      }
    }
    tmp$_0 = missing.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      var view_0 = this.filter.render_11rb$(element_0);
      this.append_4q8e84$(view_0);
      if (Kotlin.isType(this.property, Property)) {
        view_0.onClick.invoke_qlkmfe$(FilterList$update$lambda(element_0, this));
      }
      this.content_0.put_xwzc9p$(element_0, view_0);
    }
    this.clear();
    tmp$_1 = list.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      this.append_4q8e84$(ensureNotNull(this.content_0.get_11rb$(element_1)));
    }
  };
  function FilterList_init$lambda(this$FilterList) {
    return function (it) {
      this$FilterList.update();
      return Unit;
    };
  }
  FilterList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FilterList',
    interfaces: [ViewCollection]
  };
  function Filter() {
  }
  Filter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Filter',
    interfaces: []
  };
  function StringFilter(dataSet) {
    this.dataSet_0 = dataSet;
    this.useCache_uti5lv$_0 = true;
  }
  function StringFilter$filter$lambda(closure$partial) {
    return function (it) {
      return it.length + (indexOf(it.toLowerCase(), closure$partial) * 2 | 0) | 0;
    };
  }
  StringFilter.prototype.filter_11rb$ = function (partial) {
    var tmp$;
    var lower = trim(Kotlin.isCharSequence(tmp$ = partial) ? tmp$ : throwCCE()).toString().toLowerCase();
    var $receiver = this.dataSet_0;
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (contains(element.toLowerCase(), lower))
        destination.add_11rb$(element);
    }
    return sortedWith(destination, new Comparator$ObjectLiteral_2(compareBy$lambda_1(StringFilter$filter$lambda(partial))));
  };
  StringFilter.prototype.render_11rb$ = function (element) {
    return new TextView(element);
  };
  Object.defineProperty(StringFilter.prototype, 'useCache', {
    get: function () {
      return this.useCache_uti5lv$_0;
    }
  });
  StringFilter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StringFilter',
    interfaces: [Filter]
  };
  function StaticStringFilter(dataSet) {
    this.dataSet_0 = dataSet;
    this.useCache_h5ipm9$_0 = true;
  }
  StaticStringFilter.prototype.filter_11rb$ = function (partial) {
    return this.dataSet_0;
  };
  StaticStringFilter.prototype.render_11rb$ = function (element) {
    return new TextView(element);
  };
  Object.defineProperty(StaticStringFilter.prototype, 'useCache', {
    get: function () {
      return this.useCache_h5ipm9$_0;
    }
  });
  StaticStringFilter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StaticStringFilter',
    interfaces: [Filter]
  };
  function DynamicStringFilter(filter) {
    this.filter_0 = filter;
    this.useCache_6r3q28$_0 = false;
  }
  DynamicStringFilter.prototype.filter_11rb$ = function (partial) {
    return this.filter_0(partial);
  };
  DynamicStringFilter.prototype.render_11rb$ = function (element) {
    return new TextView(element);
  };
  Object.defineProperty(DynamicStringFilter.prototype, 'useCache', {
    get: function () {
      return this.useCache_6r3q28$_0;
    }
  });
  DynamicStringFilter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicStringFilter',
    interfaces: [Filter]
  };
  function filterList$lambda($receiver) {
    return Unit;
  }
  function filterList($receiver, property, filter, init) {
    if (init === void 0)
      init = filterList$lambda;
    var $receiver_0 = new FilterList(property, filter);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function Heading(type, value) {
    if (value === void 0)
      value = '';
    var tag = type.tagName;
    var tmp$;
    var tagName;
    if (tag != null) {
      tagName = tag;
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLHeadingElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName)) {
        tagName = 'div';
      }
    }
    View.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLHeadingElement) ? tmp$ : throwCCE());
    this.type = type;
    var tmp$_1;
    this.html_6orzhi$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, View.prototype, 'html'), HTMLHeadingElement) ? tmp$_1 : throwCCE();
    this.textProperty = property_0(getPropertyCallableRef('text', 0, function ($receiver) {
      return $receiver.text;
    }.bind(null, this), function ($receiver, value) {
      $receiver.text = value;
    }.bind(null, this)));
    this.text = value;
  }
  Object.defineProperty(Heading.prototype, 'html', {
    get: function () {
      return this.html_6orzhi$_0;
    }
  });
  Heading.prototype.bind_vbud5z$ = function (property) {
    this.textProperty.bind_ybyx9l$(property);
  };
  Heading.prototype.unbind = function () {
    this.textProperty.unbind();
  };
  Object.defineProperty(Heading.prototype, 'text', {
    get: function () {
      var tmp$;
      return (tmp$ = this.html.textContent) != null ? tmp$ : '';
    },
    set: function (value) {
      this.html.textContent = value;
      this.textProperty.invalidate();
    }
  });
  function Heading$Type(name, ordinal, tagName) {
    Enum.call(this);
    this.tagName = tagName;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Heading$Type_initFields() {
    Heading$Type_initFields = function () {
    };
    Heading$Type$H1_instance = new Heading$Type('H1', 0, 'h1');
    Heading$Type$H2_instance = new Heading$Type('H2', 1, 'h2');
    Heading$Type$H3_instance = new Heading$Type('H3', 2, 'h3');
    Heading$Type$H4_instance = new Heading$Type('H4', 3, 'h4');
    Heading$Type$H5_instance = new Heading$Type('H5', 4, 'h5');
    Heading$Type$H6_instance = new Heading$Type('H6', 5, 'h6');
  }
  var Heading$Type$H1_instance;
  function Heading$Type$H1_getInstance() {
    Heading$Type_initFields();
    return Heading$Type$H1_instance;
  }
  var Heading$Type$H2_instance;
  function Heading$Type$H2_getInstance() {
    Heading$Type_initFields();
    return Heading$Type$H2_instance;
  }
  var Heading$Type$H3_instance;
  function Heading$Type$H3_getInstance() {
    Heading$Type_initFields();
    return Heading$Type$H3_instance;
  }
  var Heading$Type$H4_instance;
  function Heading$Type$H4_getInstance() {
    Heading$Type_initFields();
    return Heading$Type$H4_instance;
  }
  var Heading$Type$H5_instance;
  function Heading$Type$H5_getInstance() {
    Heading$Type_initFields();
    return Heading$Type$H5_instance;
  }
  var Heading$Type$H6_instance;
  function Heading$Type$H6_getInstance() {
    Heading$Type_initFields();
    return Heading$Type$H6_instance;
  }
  Heading$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function Heading$Type$values() {
    return [Heading$Type$H1_getInstance(), Heading$Type$H2_getInstance(), Heading$Type$H3_getInstance(), Heading$Type$H4_getInstance(), Heading$Type$H5_getInstance(), Heading$Type$H6_getInstance()];
  }
  Heading$Type.values = Heading$Type$values;
  function Heading$Type$valueOf(name) {
    switch (name) {
      case 'H1':
        return Heading$Type$H1_getInstance();
      case 'H2':
        return Heading$Type$H2_getInstance();
      case 'H3':
        return Heading$Type$H3_getInstance();
      case 'H4':
        return Heading$Type$H4_getInstance();
      case 'H5':
        return Heading$Type$H5_getInstance();
      case 'H6':
        return Heading$Type$H6_getInstance();
      default:throwISE('No enum constant de.westermann.kwebview.components.Heading.Type.' + name);
    }
  }
  Heading$Type.valueOf_61zpoe$ = Heading$Type$valueOf;
  Heading.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Heading',
    interfaces: [View]
  };
  function h1$lambda($receiver) {
    return Unit;
  }
  function h1($receiver, text, init) {
    if (text === void 0)
      text = '';
    if (init === void 0)
      init = h1$lambda;
    var $receiver_0 = new Heading(Heading$Type$H1_getInstance(), text);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function h1$lambda_0($receiver) {
    return Unit;
  }
  function h1_0($receiver, text, init) {
    if (init === void 0)
      init = h1$lambda_0;
    var $receiver_0 = new Heading(Heading$Type$H1_getInstance(), text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_vbud5z$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function h2$lambda($receiver) {
    return Unit;
  }
  function h2($receiver, text, init) {
    if (text === void 0)
      text = '';
    if (init === void 0)
      init = h2$lambda;
    var $receiver_0 = new Heading(Heading$Type$H2_getInstance(), text);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function h2$lambda_0($receiver) {
    return Unit;
  }
  function h2_0($receiver, text, init) {
    if (init === void 0)
      init = h2$lambda_0;
    var $receiver_0 = new Heading(Heading$Type$H2_getInstance(), text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_vbud5z$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function h3$lambda($receiver) {
    return Unit;
  }
  function h3($receiver, text, init) {
    if (text === void 0)
      text = '';
    if (init === void 0)
      init = h3$lambda;
    var $receiver_0 = new Heading(Heading$Type$H3_getInstance(), text);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function h3$lambda_0($receiver) {
    return Unit;
  }
  function h3_0($receiver, text, init) {
    if (init === void 0)
      init = h3$lambda_0;
    var $receiver_0 = new Heading(Heading$Type$H3_getInstance(), text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_vbud5z$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function h4$lambda($receiver) {
    return Unit;
  }
  function h4($receiver, text, init) {
    if (text === void 0)
      text = '';
    if (init === void 0)
      init = h4$lambda;
    var $receiver_0 = new Heading(Heading$Type$H4_getInstance(), text);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function h4$lambda_0($receiver) {
    return Unit;
  }
  function h4_0($receiver, text, init) {
    if (init === void 0)
      init = h4$lambda_0;
    var $receiver_0 = new Heading(Heading$Type$H4_getInstance(), text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_vbud5z$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function h5$lambda($receiver) {
    return Unit;
  }
  function h5($receiver, text, init) {
    if (text === void 0)
      text = '';
    if (init === void 0)
      init = h5$lambda;
    var $receiver_0 = new Heading(Heading$Type$H5_getInstance(), text);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function h5$lambda_0($receiver) {
    return Unit;
  }
  function h5_0($receiver, text, init) {
    if (init === void 0)
      init = h5$lambda_0;
    var $receiver_0 = new Heading(Heading$Type$H5_getInstance(), text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_vbud5z$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function h6$lambda($receiver) {
    return Unit;
  }
  function h6($receiver, text, init) {
    if (text === void 0)
      text = '';
    if (init === void 0)
      init = h6$lambda;
    var $receiver_0 = new Heading(Heading$Type$H6_getInstance(), text);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function h6$lambda_0($receiver) {
    return Unit;
  }
  function h6_0($receiver, text, init) {
    if (init === void 0)
      init = h6$lambda_0;
    var $receiver_0 = new Heading(Heading$Type$H6_getInstance(), text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_vbud5z$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function Icon() {
  }
  Icon.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Icon',
    interfaces: []
  };
  function IconView(icon) {
    var tmp$;
    var tagName;
    if (null != null) {
      tagName = null;
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLSpanElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName)) {
        tagName = 'div';
      }
    }
    View.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLSpanElement) ? tmp$ : throwCCE());
    var tmp$_1;
    this.html_dso3rc$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, View.prototype, 'html'), HTMLSpanElement) ? tmp$_1 : throwCCE();
    this.icon_dsx33u$_0 = null;
    this.iconProperty = property_0(getPropertyCallableRef('icon', 0, function ($receiver) {
      return $receiver.icon;
    }.bind(null, this), function ($receiver, value) {
      $receiver.icon = value;
    }.bind(null, this)));
    this.icon = icon;
  }
  Object.defineProperty(IconView.prototype, 'html', {
    get: function () {
      return this.html_dso3rc$_0;
    }
  });
  IconView.prototype.bind_gvhbgm$ = function (property) {
    this.iconProperty.bind_ybyx9l$(property);
  };
  IconView.prototype.unbind = function () {
    this.iconProperty.unbind();
  };
  Object.defineProperty(IconView.prototype, 'icon', {
    get: function () {
      return this.icon_dsx33u$_0;
    },
    set: function (value) {
      this.icon_dsx33u$_0 = value;
      clear(this.html);
      if (value != null) {
        this.html.appendChild(value.element);
      }
      this.iconProperty.invalidate();
    }
  });
  IconView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IconView',
    interfaces: [View]
  };
  function iconView$lambda($receiver) {
    return Unit;
  }
  function iconView($receiver, icon, init) {
    if (icon === void 0)
      icon = null;
    if (init === void 0)
      init = iconView$lambda;
    var $receiver_0 = new IconView(icon);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function iconView$lambda_0($receiver) {
    return Unit;
  }
  function iconView_0($receiver, icon, init) {
    if (init === void 0)
      init = iconView$lambda_0;
    var $receiver_0 = new IconView(icon.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_gvhbgm$(icon);
    init($receiver_0);
    return $receiver_0;
  }
  function ImageView(src) {
    var tmp$;
    var tagName;
    if ('img' != null) {
      tagName = 'img';
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLImageElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName)) {
        tagName = 'div';
      }
    }
    View.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLImageElement) ? tmp$ : throwCCE());
    var tmp$_1;
    this.html_7oytxk$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, View.prototype, 'html'), HTMLImageElement) ? tmp$_1 : throwCCE();
    this.sourceProperty = property_0(getPropertyCallableRef('source', 0, function ($receiver) {
      return $receiver.source;
    }.bind(null, this), function ($receiver, value) {
      $receiver.source = value;
    }.bind(null, this)));
    this.alt_kvg7zs$_0 = new AttributeDelegate('alt');
    this.source = src;
  }
  Object.defineProperty(ImageView.prototype, 'html', {
    get: function () {
      return this.html_7oytxk$_0;
    }
  });
  ImageView.prototype.bind_vbud5z$ = function (property) {
    this.sourceProperty.bind_ybyx9l$(property);
  };
  ImageView.prototype.unbind = function () {
    this.sourceProperty.unbind();
  };
  Object.defineProperty(ImageView.prototype, 'source', {
    get: function () {
      return this.html.src;
    },
    set: function (value) {
      this.html.src = value;
      this.sourceProperty.invalidate();
    }
  });
  var ImageView$alt_metadata = new PropertyMetadata('alt');
  Object.defineProperty(ImageView.prototype, 'alt', {
    get: function () {
      return this.alt_kvg7zs$_0.getValue_g92zoq$(this, ImageView$alt_metadata);
    },
    set: function (alt) {
      this.alt_kvg7zs$_0.setValue_wcp6fr$(this, ImageView$alt_metadata, alt);
    }
  });
  ImageView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageView',
    interfaces: [View]
  };
  function imageView$lambda($receiver) {
    return Unit;
  }
  function imageView($receiver, src, init) {
    if (src === void 0)
      src = '';
    if (init === void 0)
      init = imageView$lambda;
    var $receiver_0 = new ImageView(src);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function imageView$lambda_0($receiver) {
    return Unit;
  }
  function imageView_0($receiver, src, init) {
    if (init === void 0)
      init = imageView$lambda_0;
    var $receiver_0 = new ImageView(src.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_vbud5z$(src);
    init($receiver_0);
    return $receiver_0;
  }
  function InputView(type, initValue) {
    if (initValue === void 0)
      initValue = '';
    ViewForLabel.call(this);
    this.valueProperty = property_0(getPropertyCallableRef('value', 0, function ($receiver) {
      return $receiver.value;
    }.bind(null, this), function ($receiver, value) {
      $receiver.value = value;
    }.bind(null, this)));
    this.placeholderProperty = property_0(getPropertyCallableRef('placeholder', 0, function ($receiver) {
      return $receiver.placeholder;
    }.bind(null, this), function ($receiver, value) {
      $receiver.placeholder = value;
    }.bind(null, this)));
    this.invalidProperty_37x0iy$_0 = new ClassDelegate('invalid');
    this.invalid_bm4ajv$_0 = this.invalidProperty;
    this.typeInternal_mhbykb$_0 = new AttributeDelegate('type');
    this.maxLengthInternal_2kqpk5$_0 = new AttributeDelegate('maxLength');
    this.minInternal_fe6219$_0 = new AttributeDelegate('min');
    this.maxInternal_n8mnj3$_0 = new AttributeDelegate('max');
    this.stepInternal_nor8tl$_0 = new AttributeDelegate('step');
    this.value = initValue;
    this.type = type;
    var lastValue = {v: this.value};
    var changeListener = new InputView_init$ObjectLiteral(this, lastValue);
    this.html.addEventListener('change', changeListener);
    this.html.addEventListener('keyup', changeListener);
    this.html.addEventListener('keypress', changeListener);
  }
  InputView.prototype.bind_vbud5z$ = function (property) {
    this.valueProperty.bind_ybyx9l$(property);
    this.readonly = true;
  };
  InputView.prototype.bind_e5den9$ = function (property) {
    this.valueProperty.bindBidirectional_8xvv9u$(property);
  };
  InputView.prototype.bind_tz5vj6$ = function (property) {
    this.valueProperty.bindBidirectional_8xvv9u$(property);
    this.invalidProperty.bind_ybyx9l$(not(property.validProperty));
  };
  InputView.prototype.unbind = function () {
    this.valueProperty.unbind();
    if (this.invalidProperty.isBound) {
      this.invalidProperty.unbind();
    }
  };
  Object.defineProperty(InputView.prototype, 'value', {
    get: function () {
      return this.html.value;
    },
    set: function (value) {
      this.html.value = value;
      this.valueProperty.invalidate();
    }
  });
  Object.defineProperty(InputView.prototype, 'placeholder', {
    get: function () {
      return this.html.placeholder;
    },
    set: function (value) {
      this.html.placeholder = value;
      this.placeholderProperty.invalidate();
    }
  });
  var InputView$invalidProperty_metadata = new PropertyMetadata('invalidProperty');
  Object.defineProperty(InputView.prototype, 'invalidProperty', {
    get: function () {
      return this.invalidProperty_37x0iy$_0.getValue_g92zoq$(this, InputView$invalidProperty_metadata);
    }
  });
  var InputView$invalid_metadata = new PropertyMetadata('invalid');
  Object.defineProperty(InputView.prototype, 'invalid', {
    get: function () {
      return this.invalid_bm4ajv$_0.getValue_n5byny$(this, InputView$invalid_metadata);
    },
    set: function (invalid) {
      this.invalid_bm4ajv$_0.setValue_sq4zib$(this, InputView$invalid_metadata, invalid);
    }
  });
  var InputView$typeInternal_metadata = new PropertyMetadata('typeInternal');
  Object.defineProperty(InputView.prototype, 'typeInternal_0', {
    get: function () {
      return this.typeInternal_mhbykb$_0.getValue_g92zoq$(this, InputView$typeInternal_metadata);
    },
    set: function (typeInternal) {
      this.typeInternal_mhbykb$_0.setValue_wcp6fr$(this, InputView$typeInternal_metadata, typeInternal);
    }
  });
  Object.defineProperty(InputView.prototype, 'type', {
    get: function () {
      var tmp$;
      return (tmp$ = this.typeInternal_0) != null ? getCallableRef('find', function ($receiver, html) {
        return $receiver.find_61zpoe$(html);
      }.bind(null, InputType$Companion_getInstance()))(tmp$) : null;
    },
    set: function (value) {
      this.typeInternal_0 = value != null ? value.html : null;
    }
  });
  var InputView$maxLengthInternal_metadata = new PropertyMetadata('maxLengthInternal');
  Object.defineProperty(InputView.prototype, 'maxLengthInternal_0', {
    get: function () {
      return this.maxLengthInternal_2kqpk5$_0.getValue_g92zoq$(this, InputView$maxLengthInternal_metadata);
    },
    set: function (maxLengthInternal) {
      this.maxLengthInternal_2kqpk5$_0.setValue_wcp6fr$(this, InputView$maxLengthInternal_metadata, maxLengthInternal);
    }
  });
  Object.defineProperty(InputView.prototype, 'maxLength', {
    get: function () {
      var tmp$;
      return (tmp$ = this.maxLengthInternal_0) != null ? toIntOrNull(tmp$) : null;
    },
    set: function (value) {
      this.maxLengthInternal_0 = value != null ? value.toString() : null;
    }
  });
  var InputView$minInternal_metadata = new PropertyMetadata('minInternal');
  Object.defineProperty(InputView.prototype, 'minInternal_0', {
    get: function () {
      return this.minInternal_fe6219$_0.getValue_g92zoq$(this, InputView$minInternal_metadata);
    },
    set: function (minInternal) {
      this.minInternal_fe6219$_0.setValue_wcp6fr$(this, InputView$minInternal_metadata, minInternal);
    }
  });
  Object.defineProperty(InputView.prototype, 'min', {
    get: function () {
      var tmp$;
      return (tmp$ = this.minInternal_0) != null ? toDoubleOrNull(tmp$) : null;
    },
    set: function (value) {
      this.minInternal_0 = value != null ? value.toString() : null;
    }
  });
  var InputView$maxInternal_metadata = new PropertyMetadata('maxInternal');
  Object.defineProperty(InputView.prototype, 'maxInternal_0', {
    get: function () {
      return this.maxInternal_n8mnj3$_0.getValue_g92zoq$(this, InputView$maxInternal_metadata);
    },
    set: function (maxInternal) {
      this.maxInternal_n8mnj3$_0.setValue_wcp6fr$(this, InputView$maxInternal_metadata, maxInternal);
    }
  });
  Object.defineProperty(InputView.prototype, 'max', {
    get: function () {
      var tmp$;
      return (tmp$ = this.maxInternal_0) != null ? toDoubleOrNull(tmp$) : null;
    },
    set: function (value) {
      this.maxInternal_0 = value != null ? value.toString() : null;
    }
  });
  var InputView$stepInternal_metadata = new PropertyMetadata('stepInternal');
  Object.defineProperty(InputView.prototype, 'stepInternal_0', {
    get: function () {
      return this.stepInternal_nor8tl$_0.getValue_g92zoq$(this, InputView$stepInternal_metadata);
    },
    set: function (stepInternal) {
      this.stepInternal_nor8tl$_0.setValue_wcp6fr$(this, InputView$stepInternal_metadata, stepInternal);
    }
  });
  Object.defineProperty(InputView.prototype, 'step', {
    get: function () {
      var tmp$;
      return (tmp$ = this.stepInternal_0) != null ? toDoubleOrNull(tmp$) : null;
    },
    set: function (value) {
      this.stepInternal_0 = value != null ? value.toString() : null;
    }
  });
  Object.defineProperty(InputView.prototype, 'selectionStart', {
    get: function () {
      return this.html.selectionStart;
    }
  });
  Object.defineProperty(InputView.prototype, 'selectionEnd', {
    get: function () {
      return this.html.selectionEnd;
    }
  });
  InputView.prototype.selectRange_vux9f0$ = function (start, end) {
    if (end === void 0)
      end = start;
    this.html.setSelectionRange(start, end);
  };
  function InputView_init$ObjectLiteral(this$InputView, closure$lastValue) {
    this.this$InputView = this$InputView;
    this.closure$lastValue = closure$lastValue;
  }
  InputView_init$ObjectLiteral.prototype.handleEvent = function (event) {
    var tmp$, tmp$_0;
    var value = this.this$InputView.value;
    if (!equals(value, this.this$InputView.valueProperty.value) || !equals(value, this.closure$lastValue.v)) {
      this.closure$lastValue.v = value;
      this.this$InputView.valueProperty.value = value;
    }
    if ((tmp$_0 = Kotlin.isType(tmp$ = event, KeyboardEvent) ? tmp$ : null) != null) {
      this.this$InputView;
      var this$InputView = this.this$InputView;
      switch (tmp$_0.keyCode) {
        case 13:
        case 27:
          this$InputView.blur();
          break;
      }
    }
  };
  InputView_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  InputView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InputView',
    interfaces: [ViewForLabel]
  };
  function InputType(name, ordinal, html) {
    Enum.call(this);
    this.html = html;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function InputType_initFields() {
    InputType_initFields = function () {
    };
    InputType$TEXT_instance = new InputType('TEXT', 0, 'text');
    InputType$NUMBER_instance = new InputType('NUMBER', 1, 'number');
    InputType$PASSWORD_instance = new InputType('PASSWORD', 2, 'password');
    InputType$Companion_getInstance();
  }
  var InputType$TEXT_instance;
  function InputType$TEXT_getInstance() {
    InputType_initFields();
    return InputType$TEXT_instance;
  }
  var InputType$NUMBER_instance;
  function InputType$NUMBER_getInstance() {
    InputType_initFields();
    return InputType$NUMBER_instance;
  }
  var InputType$PASSWORD_instance;
  function InputType$PASSWORD_getInstance() {
    InputType_initFields();
    return InputType$PASSWORD_instance;
  }
  function InputType$Companion() {
    InputType$Companion_instance = this;
  }
  InputType$Companion.prototype.find_61zpoe$ = function (html) {
    var $receiver = InputType$values();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (equals(element.html, html)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  };
  InputType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var InputType$Companion_instance = null;
  function InputType$Companion_getInstance() {
    InputType_initFields();
    if (InputType$Companion_instance === null) {
      new InputType$Companion();
    }
    return InputType$Companion_instance;
  }
  InputType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InputType',
    interfaces: [Enum]
  };
  function InputType$values() {
    return [InputType$TEXT_getInstance(), InputType$NUMBER_getInstance(), InputType$PASSWORD_getInstance()];
  }
  InputType.values = InputType$values;
  function InputType$valueOf(name) {
    switch (name) {
      case 'TEXT':
        return InputType$TEXT_getInstance();
      case 'NUMBER':
        return InputType$NUMBER_getInstance();
      case 'PASSWORD':
        return InputType$PASSWORD_getInstance();
      default:throwISE('No enum constant de.westermann.kwebview.components.InputType.' + name);
    }
  }
  InputType.valueOf_61zpoe$ = InputType$valueOf;
  function inputView$lambda($receiver) {
    return Unit;
  }
  function inputView($receiver, text, init) {
    if (text === void 0)
      text = '';
    if (init === void 0)
      init = inputView$lambda;
    var $receiver_0 = new InputView(InputType$TEXT_getInstance(), text);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function inputView$lambda_0($receiver) {
    return Unit;
  }
  function inputView_0($receiver, text, init) {
    if (init === void 0)
      init = inputView$lambda_0;
    var $receiver_0 = new InputView(InputType$TEXT_getInstance(), text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_vbud5z$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function inputView$lambda_1($receiver) {
    return Unit;
  }
  function inputView_1($receiver, text, init) {
    if (init === void 0)
      init = inputView$lambda_1;
    var $receiver_0 = new InputView(InputType$TEXT_getInstance(), text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_e5den9$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function inputView$lambda_2($receiver) {
    return Unit;
  }
  function inputView_2($receiver, text, init) {
    if (init === void 0)
      init = inputView$lambda_2;
    var $receiver_0 = new InputView(InputType$TEXT_getInstance(), text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_tz5vj6$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function inputView$lambda_3($receiver) {
    return Unit;
  }
  function inputView_3($receiver, type, text, init) {
    if (type === void 0)
      type = InputType$TEXT_getInstance();
    if (text === void 0)
      text = '';
    if (init === void 0)
      init = inputView$lambda_3;
    var $receiver_0 = new InputView(type, text);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function inputView$lambda_4($receiver) {
    return Unit;
  }
  function inputView_4($receiver, type, text, init) {
    if (type === void 0)
      type = InputType$TEXT_getInstance();
    if (init === void 0)
      init = inputView$lambda_4;
    var $receiver_0 = new InputView(type, text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_vbud5z$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function inputView$lambda_5($receiver) {
    return Unit;
  }
  function inputView_5($receiver, type, text, init) {
    if (type === void 0)
      type = InputType$TEXT_getInstance();
    if (init === void 0)
      init = inputView$lambda_5;
    var $receiver_0 = new InputView(type, text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_e5den9$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function inputView$lambda_6($receiver) {
    return Unit;
  }
  function inputView_6($receiver, type, text, init) {
    if (type === void 0)
      type = InputType$TEXT_getInstance();
    if (init === void 0)
      init = inputView$lambda_6;
    var $receiver_0 = new InputView(type, text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_tz5vj6$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function Label(inputElement, value) {
    if (value === void 0)
      value = '';
    var tmp$;
    var tagName;
    if (null != null) {
      tagName = null;
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLLabelElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName)) {
        tagName = 'div';
      }
    }
    View.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLLabelElement) ? tmp$ : throwCCE());
    var tmp$_1;
    this.html_rwv64$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, View.prototype, 'html'), HTMLLabelElement) ? tmp$_1 : throwCCE();
    this.textProperty = property_0(getPropertyCallableRef('text', 0, function ($receiver) {
      return $receiver.text;
    }.bind(null, this), function ($receiver, value) {
      $receiver.text = value;
    }.bind(null, this)));
    this.text = value;
    inputElement.setLabel_f5v1jf$(this);
  }
  Object.defineProperty(Label.prototype, 'html', {
    get: function () {
      return this.html_rwv64$_0;
    }
  });
  Label.prototype.bind_vbud5z$ = function (property) {
    this.textProperty.bind_ybyx9l$(property);
  };
  Label.prototype.unbind = function () {
    this.textProperty.unbind();
  };
  Object.defineProperty(Label.prototype, 'text', {
    get: function () {
      var tmp$;
      return (tmp$ = this.html.textContent) != null ? tmp$ : '';
    },
    set: function (value) {
      this.html.textContent = value;
      this.textProperty.invalidate();
    }
  });
  Label.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Label',
    interfaces: [View]
  };
  function label$lambda($receiver) {
    return Unit;
  }
  function label($receiver, inputElement, text, init) {
    if (text === void 0)
      text = '';
    if (init === void 0)
      init = label$lambda;
    var $receiver_0 = new Label(inputElement, text);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function label$lambda_0($receiver) {
    return Unit;
  }
  function label_0($receiver, inputElement, text, init) {
    if (init === void 0)
      init = label$lambda_0;
    var $receiver_0 = new Label(inputElement, text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_vbud5z$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function Link(target) {
    var tmp$;
    var tagName;
    if ('a' != null) {
      tagName = 'a';
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLAnchorElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName)) {
        tagName = 'div';
      }
    }
    ViewCollection.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLAnchorElement) ? tmp$ : throwCCE());
    var tmp$_1;
    this.html_v6f6pw$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, ViewCollection.prototype, 'html'), HTMLAnchorElement) ? tmp$_1 : throwCCE();
    this.target = target;
  }
  Object.defineProperty(Link.prototype, 'html', {
    get: function () {
      return this.html_v6f6pw$_0;
    }
  });
  Object.defineProperty(Link.prototype, 'text', {
    get: function () {
      return this.html.textContent;
    },
    set: function (value) {
      this.html.textContent = value;
    }
  });
  Object.defineProperty(Link.prototype, 'target', {
    get: function () {
      return this.html.href;
    },
    set: function (value) {
      this.html.href = value;
    }
  });
  Link.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Link',
    interfaces: [ViewCollection]
  };
  function link$lambda($receiver) {
    return Unit;
  }
  function link($receiver, target, text, init) {
    if (text === void 0)
      text = null;
    if (init === void 0)
      init = link$lambda;
    var view = new Link(target);
    if (text != null) {
      view.text = text;
    }
    $receiver.append_4q8e84$(view);
    init(view);
    return view;
  }
  function MaterialIcon(name, ordinal, ligature) {
    Enum.call(this);
    this.ligature_6ddpre$_0 = ligature;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MaterialIcon_initFields() {
    MaterialIcon_initFields = function () {
    };
    MaterialIcon$ROTATION_3D_instance = new MaterialIcon('ROTATION_3D', 0, '3d_rotation');
    MaterialIcon$AC_UNIT_instance = new MaterialIcon('AC_UNIT', 1, 'ac_unit');
    MaterialIcon$ACCESS_ALARM_instance = new MaterialIcon('ACCESS_ALARM', 2, 'access_alarm ');
    MaterialIcon$ACCESS_ALARMS_instance = new MaterialIcon('ACCESS_ALARMS', 3, 'access_alarms');
    MaterialIcon$ACCESS_TIME_instance = new MaterialIcon('ACCESS_TIME', 4, 'access_time');
    MaterialIcon$ACCESSIBILITY_instance = new MaterialIcon('ACCESSIBILITY', 5, 'accessibility');
    MaterialIcon$ACCESSIBLE_instance = new MaterialIcon('ACCESSIBLE', 6, 'accessible');
    MaterialIcon$ACCOUNT_BALANCE_instance = new MaterialIcon('ACCOUNT_BALANCE', 7, 'account_balance');
    MaterialIcon$ACCOUNT_BALANCE_WALLET_instance = new MaterialIcon('ACCOUNT_BALANCE_WALLET', 8, 'account_balance_wallet');
    MaterialIcon$ACCOUNT_BOX_instance = new MaterialIcon('ACCOUNT_BOX', 9, 'account_box');
    MaterialIcon$ACCOUNT_CIRCLE_instance = new MaterialIcon('ACCOUNT_CIRCLE', 10, 'account_circle');
    MaterialIcon$ADB_instance = new MaterialIcon('ADB', 11, 'adb');
    MaterialIcon$ADD_instance = new MaterialIcon('ADD', 12, 'add');
    MaterialIcon$ADD_A_PHOTO_instance = new MaterialIcon('ADD_A_PHOTO', 13, 'add_a_photo');
    MaterialIcon$ADD_ALARM_instance = new MaterialIcon('ADD_ALARM', 14, 'add_alarm');
    MaterialIcon$ADD_ALERT_instance = new MaterialIcon('ADD_ALERT', 15, 'add_alert');
    MaterialIcon$ADD_BOX_instance = new MaterialIcon('ADD_BOX', 16, 'add_box');
    MaterialIcon$ADD_CIRCLE_instance = new MaterialIcon('ADD_CIRCLE', 17, 'add_circle');
    MaterialIcon$ADD_CIRCLE_OUTLINE_instance = new MaterialIcon('ADD_CIRCLE_OUTLINE', 18, 'add_circle_outline');
    MaterialIcon$ADD_LOCATION_instance = new MaterialIcon('ADD_LOCATION', 19, 'add_location ');
    MaterialIcon$ADD_SHOPPING_CART_instance = new MaterialIcon('ADD_SHOPPING_CART', 20, 'add_shopping_cart');
    MaterialIcon$ADD_TO_PHOTOS_instance = new MaterialIcon('ADD_TO_PHOTOS', 21, 'add_to_photos');
    MaterialIcon$ADD_TO_QUEUE_instance = new MaterialIcon('ADD_TO_QUEUE', 22, 'add_to_queue ');
    MaterialIcon$ADJUST_instance = new MaterialIcon('ADJUST', 23, 'adjust');
    MaterialIcon$AIRLINE_SEAT_FLAT_instance = new MaterialIcon('AIRLINE_SEAT_FLAT', 24, 'airline_seat_flat');
    MaterialIcon$AIRLINE_SEAT_FLAT_ANGLED_instance = new MaterialIcon('AIRLINE_SEAT_FLAT_ANGLED', 25, 'airline_seat_flat_angled');
    MaterialIcon$AIRLINE_SEAT_INDIVIDUAL_SUITE_instance = new MaterialIcon('AIRLINE_SEAT_INDIVIDUAL_SUITE', 26, 'airline_seat_individual_suite');
    MaterialIcon$AIRLINE_SEAT_LEGROOM_EXTRA_instance = new MaterialIcon('AIRLINE_SEAT_LEGROOM_EXTRA', 27, 'airline_seat_legroom_extra');
    MaterialIcon$AIRLINE_SEAT_LEGROOM_NORMAL_instance = new MaterialIcon('AIRLINE_SEAT_LEGROOM_NORMAL', 28, 'airline_seat_legroom_normal');
    MaterialIcon$AIRLINE_SEAT_LEGROOM_REDUCED_instance = new MaterialIcon('AIRLINE_SEAT_LEGROOM_REDUCED', 29, 'airline_seat_legroom_reduced');
    MaterialIcon$AIRLINE_SEAT_RECLINE_EXTRA_instance = new MaterialIcon('AIRLINE_SEAT_RECLINE_EXTRA', 30, 'airline_seat_recline_extra');
    MaterialIcon$AIRLINE_SEAT_RECLINE_NORMAL_instance = new MaterialIcon('AIRLINE_SEAT_RECLINE_NORMAL', 31, 'airline_seat_recline_normal');
    MaterialIcon$AIRPLANEMODE_ACTIVE_instance = new MaterialIcon('AIRPLANEMODE_ACTIVE', 32, 'airplanemode_active');
    MaterialIcon$AIRPLANEMODE_INACTIVE_instance = new MaterialIcon('AIRPLANEMODE_INACTIVE', 33, 'airplanemode_inactive');
    MaterialIcon$AIRPLAY_instance = new MaterialIcon('AIRPLAY', 34, 'airplay');
    MaterialIcon$AIRPORT_SHUTTLE_instance = new MaterialIcon('AIRPORT_SHUTTLE', 35, 'airport_shuttle');
    MaterialIcon$ALARM_instance = new MaterialIcon('ALARM', 36, 'alarm');
    MaterialIcon$ALARM_ADD_instance = new MaterialIcon('ALARM_ADD', 37, 'alarm_add');
    MaterialIcon$ALARM_OFF_instance = new MaterialIcon('ALARM_OFF', 38, 'alarm_off');
    MaterialIcon$ALARM_ON_instance = new MaterialIcon('ALARM_ON', 39, 'alarm_on');
    MaterialIcon$ALBUM_instance = new MaterialIcon('ALBUM', 40, 'album');
    MaterialIcon$ALL_INCLUSIVE_instance = new MaterialIcon('ALL_INCLUSIVE', 41, 'all_inclusive');
    MaterialIcon$ALL_OUT_instance = new MaterialIcon('ALL_OUT', 42, 'all_out');
    MaterialIcon$ANDROID_instance = new MaterialIcon('ANDROID', 43, 'android');
    MaterialIcon$ANNOUNCEMENT_instance = new MaterialIcon('ANNOUNCEMENT', 44, 'announcement ');
    MaterialIcon$APPS_instance = new MaterialIcon('APPS', 45, 'apps');
    MaterialIcon$ARCHIVE_instance = new MaterialIcon('ARCHIVE', 46, 'archive');
    MaterialIcon$ARROW_BACK_instance = new MaterialIcon('ARROW_BACK', 47, 'arrow_back');
    MaterialIcon$ARROW_DOWNWARD_instance = new MaterialIcon('ARROW_DOWNWARD', 48, 'arrow_downward');
    MaterialIcon$ARROW_DROP_DOWN_instance = new MaterialIcon('ARROW_DROP_DOWN', 49, 'arrow_drop_down');
    MaterialIcon$ARROW_DROP_DOWN_CIRCLE_instance = new MaterialIcon('ARROW_DROP_DOWN_CIRCLE', 50, 'arrow_drop_down_circle');
    MaterialIcon$ARROW_DROP_UP_instance = new MaterialIcon('ARROW_DROP_UP', 51, 'arrow_drop_up');
    MaterialIcon$ARROW_FORWARD_instance = new MaterialIcon('ARROW_FORWARD', 52, 'arrow_forward');
    MaterialIcon$ARROW_UPWARD_instance = new MaterialIcon('ARROW_UPWARD', 53, 'arrow_upward ');
    MaterialIcon$ART_TRACK_instance = new MaterialIcon('ART_TRACK', 54, 'art_track');
    MaterialIcon$ASPECT_RATIO_instance = new MaterialIcon('ASPECT_RATIO', 55, 'aspect_ratio ');
    MaterialIcon$ASSESSMENT_instance = new MaterialIcon('ASSESSMENT', 56, 'assessment');
    MaterialIcon$ASSIGNMENT_instance = new MaterialIcon('ASSIGNMENT', 57, 'assignment');
    MaterialIcon$ASSIGNMENT_IND_instance = new MaterialIcon('ASSIGNMENT_IND', 58, 'assignment_ind');
    MaterialIcon$ASSIGNMENT_LATE_instance = new MaterialIcon('ASSIGNMENT_LATE', 59, 'assignment_late');
    MaterialIcon$ASSIGNMENT_RETURN_instance = new MaterialIcon('ASSIGNMENT_RETURN', 60, 'assignment_return');
    MaterialIcon$ASSIGNMENT_RETURNED_instance = new MaterialIcon('ASSIGNMENT_RETURNED', 61, 'assignment_returned');
    MaterialIcon$ASSIGNMENT_TURNED_IN_instance = new MaterialIcon('ASSIGNMENT_TURNED_IN', 62, 'assignment_turned_in');
    MaterialIcon$ASSISTANT_instance = new MaterialIcon('ASSISTANT', 63, 'assistant');
    MaterialIcon$ASSISTANT_PHOTO_instance = new MaterialIcon('ASSISTANT_PHOTO', 64, 'assistant_photo');
    MaterialIcon$ATTACH_FILE_instance = new MaterialIcon('ATTACH_FILE', 65, 'attach_file');
    MaterialIcon$ATTACH_MONEY_instance = new MaterialIcon('ATTACH_MONEY', 66, 'attach_money ');
    MaterialIcon$ATTACHMENT_instance = new MaterialIcon('ATTACHMENT', 67, 'attachment');
    MaterialIcon$AUDIOTRACK_instance = new MaterialIcon('AUDIOTRACK', 68, 'audiotrack');
    MaterialIcon$AUTORENEW_instance = new MaterialIcon('AUTORENEW', 69, 'autorenew');
    MaterialIcon$AV_TIMER_instance = new MaterialIcon('AV_TIMER', 70, 'av_timer');
    MaterialIcon$BACKSPACE_instance = new MaterialIcon('BACKSPACE', 71, 'backspace');
    MaterialIcon$BACKUP_instance = new MaterialIcon('BACKUP', 72, 'backup');
    MaterialIcon$BATTERY_ALERT_instance = new MaterialIcon('BATTERY_ALERT', 73, 'battery_alert');
    MaterialIcon$BATTERY_CHARGING_FULL_instance = new MaterialIcon('BATTERY_CHARGING_FULL', 74, 'battery_charging_full');
    MaterialIcon$BATTERY_FULL_instance = new MaterialIcon('BATTERY_FULL', 75, 'battery_full ');
    MaterialIcon$BATTERY_STD_instance = new MaterialIcon('BATTERY_STD', 76, 'battery_std');
    MaterialIcon$BATTERY_UNKNOWN_instance = new MaterialIcon('BATTERY_UNKNOWN', 77, 'battery_unknown');
    MaterialIcon$BEACH_ACCESS_instance = new MaterialIcon('BEACH_ACCESS', 78, 'beach_access ');
    MaterialIcon$BEENHERE_instance = new MaterialIcon('BEENHERE', 79, 'beenhere');
    MaterialIcon$BLOCK_instance = new MaterialIcon('BLOCK', 80, 'block');
    MaterialIcon$BLUETOOTH_instance = new MaterialIcon('BLUETOOTH', 81, 'bluetooth');
    MaterialIcon$BLUETOOTH_AUDIO_instance = new MaterialIcon('BLUETOOTH_AUDIO', 82, 'bluetooth_audio');
    MaterialIcon$BLUETOOTH_CONNECTED_instance = new MaterialIcon('BLUETOOTH_CONNECTED', 83, 'bluetooth_connected');
    MaterialIcon$BLUETOOTH_DISABLED_instance = new MaterialIcon('BLUETOOTH_DISABLED', 84, 'bluetooth_disabled');
    MaterialIcon$BLUETOOTH_SEARCHING_instance = new MaterialIcon('BLUETOOTH_SEARCHING', 85, 'bluetooth_searching');
    MaterialIcon$BLUR_CIRCULAR_instance = new MaterialIcon('BLUR_CIRCULAR', 86, 'blur_circular');
    MaterialIcon$BLUR_LINEAR_instance = new MaterialIcon('BLUR_LINEAR', 87, 'blur_linear');
    MaterialIcon$BLUR_OFF_instance = new MaterialIcon('BLUR_OFF', 88, 'blur_off');
    MaterialIcon$BLUR_ON_instance = new MaterialIcon('BLUR_ON', 89, 'blur_on');
    MaterialIcon$BOOK_instance = new MaterialIcon('BOOK', 90, 'book');
    MaterialIcon$BOOKMARK_instance = new MaterialIcon('BOOKMARK', 91, 'bookmark');
    MaterialIcon$BOOKMARK_BORDER_instance = new MaterialIcon('BOOKMARK_BORDER', 92, 'bookmark_border');
    MaterialIcon$BORDER_ALL_instance = new MaterialIcon('BORDER_ALL', 93, 'border_all');
    MaterialIcon$BORDER_BOTTOM_instance = new MaterialIcon('BORDER_BOTTOM', 94, 'border_bottom');
    MaterialIcon$BORDER_CLEAR_instance = new MaterialIcon('BORDER_CLEAR', 95, 'border_clear ');
    MaterialIcon$BORDER_COLOR_instance = new MaterialIcon('BORDER_COLOR', 96, 'border_color ');
    MaterialIcon$BORDER_HORIZONTAL_instance = new MaterialIcon('BORDER_HORIZONTAL', 97, 'border_horizontal');
    MaterialIcon$BORDER_INNER_instance = new MaterialIcon('BORDER_INNER', 98, 'border_inner ');
    MaterialIcon$BORDER_LEFT_instance = new MaterialIcon('BORDER_LEFT', 99, 'border_left');
    MaterialIcon$BORDER_OUTER_instance = new MaterialIcon('BORDER_OUTER', 100, 'border_outer ');
    MaterialIcon$BORDER_RIGHT_instance = new MaterialIcon('BORDER_RIGHT', 101, 'border_right ');
    MaterialIcon$BORDER_STYLE_instance = new MaterialIcon('BORDER_STYLE', 102, 'border_style ');
    MaterialIcon$BORDER_TOP_instance = new MaterialIcon('BORDER_TOP', 103, 'border_top');
    MaterialIcon$BORDER_VERTICAL_instance = new MaterialIcon('BORDER_VERTICAL', 104, 'border_vertical');
    MaterialIcon$BRANDING_WATERMARK_instance = new MaterialIcon('BRANDING_WATERMARK', 105, 'branding_watermark');
    MaterialIcon$BRIGHTNESS_1_instance = new MaterialIcon('BRIGHTNESS_1', 106, 'brightness_1 ');
    MaterialIcon$BRIGHTNESS_2_instance = new MaterialIcon('BRIGHTNESS_2', 107, 'brightness_2 ');
    MaterialIcon$BRIGHTNESS_3_instance = new MaterialIcon('BRIGHTNESS_3', 108, 'brightness_3 ');
    MaterialIcon$BRIGHTNESS_4_instance = new MaterialIcon('BRIGHTNESS_4', 109, 'brightness_4 ');
    MaterialIcon$BRIGHTNESS_5_instance = new MaterialIcon('BRIGHTNESS_5', 110, 'brightness_5 ');
    MaterialIcon$BRIGHTNESS_6_instance = new MaterialIcon('BRIGHTNESS_6', 111, 'brightness_6 ');
    MaterialIcon$BRIGHTNESS_7_instance = new MaterialIcon('BRIGHTNESS_7', 112, 'brightness_7 ');
    MaterialIcon$BRIGHTNESS_AUTO_instance = new MaterialIcon('BRIGHTNESS_AUTO', 113, 'brightness_auto');
    MaterialIcon$BRIGHTNESS_HIGH_instance = new MaterialIcon('BRIGHTNESS_HIGH', 114, 'brightness_high');
    MaterialIcon$BRIGHTNESS_LOW_instance = new MaterialIcon('BRIGHTNESS_LOW', 115, 'brightness_low');
    MaterialIcon$BRIGHTNESS_MEDIUM_instance = new MaterialIcon('BRIGHTNESS_MEDIUM', 116, 'brightness_medium');
    MaterialIcon$BROKEN_IMAGE_instance = new MaterialIcon('BROKEN_IMAGE', 117, 'broken_image ');
    MaterialIcon$BRUSH_instance = new MaterialIcon('BRUSH', 118, 'brush');
    MaterialIcon$BUBBLE_CHART_instance = new MaterialIcon('BUBBLE_CHART', 119, 'bubble_chart ');
    MaterialIcon$BUG_REPORT_instance = new MaterialIcon('BUG_REPORT', 120, 'bug_report');
    MaterialIcon$BUILD_instance = new MaterialIcon('BUILD', 121, 'build');
    MaterialIcon$BURST_MODE_instance = new MaterialIcon('BURST_MODE', 122, 'burst_mode');
    MaterialIcon$BUSINESS_instance = new MaterialIcon('BUSINESS', 123, 'business');
    MaterialIcon$BUSINESS_CENTER_instance = new MaterialIcon('BUSINESS_CENTER', 124, 'business_center');
    MaterialIcon$CACHED_instance = new MaterialIcon('CACHED', 125, 'cached');
    MaterialIcon$CAKE_instance = new MaterialIcon('CAKE', 126, 'cake');
    MaterialIcon$CALL_instance = new MaterialIcon('CALL', 127, 'call');
    MaterialIcon$CALL_END_instance = new MaterialIcon('CALL_END', 128, 'call_end');
    MaterialIcon$CALL_MADE_instance = new MaterialIcon('CALL_MADE', 129, 'call_made');
    MaterialIcon$CALL_MERGE_instance = new MaterialIcon('CALL_MERGE', 130, 'call_merge');
    MaterialIcon$CALL_MISSED_instance = new MaterialIcon('CALL_MISSED', 131, 'call_missed');
    MaterialIcon$CALL_MISSED_OUTGOING_instance = new MaterialIcon('CALL_MISSED_OUTGOING', 132, 'call_missed_outgoing');
    MaterialIcon$CALL_RECEIVED_instance = new MaterialIcon('CALL_RECEIVED', 133, 'call_received');
    MaterialIcon$CALL_SPLIT_instance = new MaterialIcon('CALL_SPLIT', 134, 'call_split');
    MaterialIcon$CALL_TO_ACTION_instance = new MaterialIcon('CALL_TO_ACTION', 135, 'call_to_action');
    MaterialIcon$CAMERA_instance = new MaterialIcon('CAMERA', 136, 'camera');
    MaterialIcon$CAMERA_ALT_instance = new MaterialIcon('CAMERA_ALT', 137, 'camera_alt');
    MaterialIcon$CAMERA_ENHANCE_instance = new MaterialIcon('CAMERA_ENHANCE', 138, 'camera_enhance');
    MaterialIcon$CAMERA_FRONT_instance = new MaterialIcon('CAMERA_FRONT', 139, 'camera_front ');
    MaterialIcon$CAMERA_REAR_instance = new MaterialIcon('CAMERA_REAR', 140, 'camera_rear');
    MaterialIcon$CAMERA_ROLL_instance = new MaterialIcon('CAMERA_ROLL', 141, 'camera_roll');
    MaterialIcon$CANCEL_instance = new MaterialIcon('CANCEL', 142, 'cancel');
    MaterialIcon$CARD_GIFTCARD_instance = new MaterialIcon('CARD_GIFTCARD', 143, 'card_giftcard');
    MaterialIcon$CARD_MEMBERSHIP_instance = new MaterialIcon('CARD_MEMBERSHIP', 144, 'card_membership');
    MaterialIcon$CARD_TRAVEL_instance = new MaterialIcon('CARD_TRAVEL', 145, 'card_travel');
    MaterialIcon$CASINO_instance = new MaterialIcon('CASINO', 146, 'casino');
    MaterialIcon$CAST_instance = new MaterialIcon('CAST', 147, 'cast');
    MaterialIcon$CAST_CONNECTED_instance = new MaterialIcon('CAST_CONNECTED', 148, 'cast_connected');
    MaterialIcon$CENTER_FOCUS_STRONG_instance = new MaterialIcon('CENTER_FOCUS_STRONG', 149, 'center_focus_strong');
    MaterialIcon$CENTER_FOCUS_WEAK_instance = new MaterialIcon('CENTER_FOCUS_WEAK', 150, 'center_focus_weak');
    MaterialIcon$CHANGE_HISTORY_instance = new MaterialIcon('CHANGE_HISTORY', 151, 'change_history');
    MaterialIcon$CHAT_instance = new MaterialIcon('CHAT', 152, 'chat');
    MaterialIcon$CHAT_BUBBLE_instance = new MaterialIcon('CHAT_BUBBLE', 153, 'chat_bubble');
    MaterialIcon$CHAT_BUBBLE_OUTLINE_instance = new MaterialIcon('CHAT_BUBBLE_OUTLINE', 154, 'chat_bubble_outline');
    MaterialIcon$CHECK_instance = new MaterialIcon('CHECK', 155, 'checkUpdates');
    MaterialIcon$CHECK_BOX_instance = new MaterialIcon('CHECK_BOX', 156, 'check_box');
    MaterialIcon$CHECK_BOX_OUTLINE_BLANK_instance = new MaterialIcon('CHECK_BOX_OUTLINE_BLANK', 157, 'check_box_outline_blank');
    MaterialIcon$CHECK_CIRCLE_instance = new MaterialIcon('CHECK_CIRCLE', 158, 'check_circle ');
    MaterialIcon$CHEVRON_LEFT_instance = new MaterialIcon('CHEVRON_LEFT', 159, 'chevron_left ');
    MaterialIcon$CHEVRON_RIGHT_instance = new MaterialIcon('CHEVRON_RIGHT', 160, 'chevron_right');
    MaterialIcon$CHILD_CARE_instance = new MaterialIcon('CHILD_CARE', 161, 'child_care');
    MaterialIcon$CHILD_FRIENDLY_instance = new MaterialIcon('CHILD_FRIENDLY', 162, 'child_friendly');
    MaterialIcon$CHROME_RR_MODE_instance = new MaterialIcon('CHROME_RR_MODE', 163, 'chrome_rr_mode');
    MaterialIcon$CLASS_instance = new MaterialIcon('CLASS', 164, 'class');
    MaterialIcon$CLEAR_instance = new MaterialIcon('CLEAR', 165, 'clear');
    MaterialIcon$CLEAR_ALL_instance = new MaterialIcon('CLEAR_ALL', 166, 'clear_all');
    MaterialIcon$CLOSE_instance = new MaterialIcon('CLOSE', 167, 'close');
    MaterialIcon$CLOSED_CAPTION_instance = new MaterialIcon('CLOSED_CAPTION', 168, 'closed_caption');
    MaterialIcon$CLOUD_instance = new MaterialIcon('CLOUD', 169, 'cloud');
    MaterialIcon$CLOUD_CIRCLE_instance = new MaterialIcon('CLOUD_CIRCLE', 170, 'cloud_circle ');
    MaterialIcon$CLOUD_DONE_instance = new MaterialIcon('CLOUD_DONE', 171, 'cloud_done');
    MaterialIcon$CLOUD_DOWNLOAD_instance = new MaterialIcon('CLOUD_DOWNLOAD', 172, 'cloud_download');
    MaterialIcon$CLOUD_OFF_instance = new MaterialIcon('CLOUD_OFF', 173, 'cloud_off');
    MaterialIcon$CLOUD_QUEUE_instance = new MaterialIcon('CLOUD_QUEUE', 174, 'cloud_queue');
    MaterialIcon$CLOUD_UPLOAD_instance = new MaterialIcon('CLOUD_UPLOAD', 175, 'cloud_upload ');
    MaterialIcon$CODE_instance = new MaterialIcon('CODE', 176, 'code');
    MaterialIcon$COLLECTIONS_instance = new MaterialIcon('COLLECTIONS', 177, 'collections');
    MaterialIcon$COLLECTIONS_BOOKMARK_instance = new MaterialIcon('COLLECTIONS_BOOKMARK', 178, 'collections_bookmark');
    MaterialIcon$COLOR_LENS_instance = new MaterialIcon('COLOR_LENS', 179, 'color_lens');
    MaterialIcon$COLORIZE_instance = new MaterialIcon('COLORIZE', 180, 'colorize');
    MaterialIcon$COMMENT_instance = new MaterialIcon('COMMENT', 181, 'comment');
    MaterialIcon$COMPARE_instance = new MaterialIcon('COMPARE', 182, 'compare');
    MaterialIcon$COMPARE_ARROWS_instance = new MaterialIcon('COMPARE_ARROWS', 183, 'compare_arrows');
    MaterialIcon$COMPUTER_instance = new MaterialIcon('COMPUTER', 184, 'computer');
    MaterialIcon$CONFIRMATION_NUMBER_instance = new MaterialIcon('CONFIRMATION_NUMBER', 185, 'confirmation_number');
    MaterialIcon$CONTACT_MAIL_instance = new MaterialIcon('CONTACT_MAIL', 186, 'contact_mail ');
    MaterialIcon$CONTACT_PHONE_instance = new MaterialIcon('CONTACT_PHONE', 187, 'contact_phone');
    MaterialIcon$CONTACTS_instance = new MaterialIcon('CONTACTS', 188, 'contacts');
    MaterialIcon$CONTENT_COPY_instance = new MaterialIcon('CONTENT_COPY', 189, 'content_copy ');
    MaterialIcon$CONTENT_CUT_instance = new MaterialIcon('CONTENT_CUT', 190, 'content_cut');
    MaterialIcon$CONTENT_PASTE_instance = new MaterialIcon('CONTENT_PASTE', 191, 'content_paste');
    MaterialIcon$CONTROL_POINT_instance = new MaterialIcon('CONTROL_POINT', 192, 'control_point');
    MaterialIcon$CONTROL_POINT_DUPLICATE_instance = new MaterialIcon('CONTROL_POINT_DUPLICATE', 193, 'control_point_duplicate');
    MaterialIcon$COPYRIGHT_instance = new MaterialIcon('COPYRIGHT', 194, 'copyright');
    MaterialIcon$CREATE_instance = new MaterialIcon('CREATE', 195, 'onCreate');
    MaterialIcon$CREATE_NEW_FOLDER_instance = new MaterialIcon('CREATE_NEW_FOLDER', 196, 'create_new_folder');
    MaterialIcon$CREDIT_CARD_instance = new MaterialIcon('CREDIT_CARD', 197, 'credit_card');
    MaterialIcon$CROP_instance = new MaterialIcon('CROP', 198, 'crop');
    MaterialIcon$CROP_16_9_instance = new MaterialIcon('CROP_16_9', 199, 'crop_16_9');
    MaterialIcon$CROP_3_2_instance = new MaterialIcon('CROP_3_2', 200, 'crop_3_2');
    MaterialIcon$CROP_5_4_instance = new MaterialIcon('CROP_5_4', 201, 'crop_5_4');
    MaterialIcon$CROP_7_5_instance = new MaterialIcon('CROP_7_5', 202, 'crop_7_5');
    MaterialIcon$CROP_DIN_instance = new MaterialIcon('CROP_DIN', 203, 'crop_din');
    MaterialIcon$CROP_FREE_instance = new MaterialIcon('CROP_FREE', 204, 'crop_free');
    MaterialIcon$CROP_LANDSCAPE_instance = new MaterialIcon('CROP_LANDSCAPE', 205, 'crop_landscape');
    MaterialIcon$CROP_ORIGINAL_instance = new MaterialIcon('CROP_ORIGINAL', 206, 'crop_original');
    MaterialIcon$CROP_PORTRAIT_instance = new MaterialIcon('CROP_PORTRAIT', 207, 'crop_portrait');
    MaterialIcon$CROP_ROTATE_instance = new MaterialIcon('CROP_ROTATE', 208, 'crop_rotate');
    MaterialIcon$CROP_SQUARE_instance = new MaterialIcon('CROP_SQUARE', 209, 'crop_square');
    MaterialIcon$DASHBOARD_instance = new MaterialIcon('DASHBOARD', 210, 'dashboard');
    MaterialIcon$DATA_USAGE_instance = new MaterialIcon('DATA_USAGE', 211, 'data_usage');
    MaterialIcon$DATE_RANGE_instance = new MaterialIcon('DATE_RANGE', 212, 'date_range');
    MaterialIcon$DEHAZE_instance = new MaterialIcon('DEHAZE', 213, 'dehaze');
    MaterialIcon$DELETE_instance = new MaterialIcon('DELETE', 214, 'delete');
    MaterialIcon$DELETE_FOREVER_instance = new MaterialIcon('DELETE_FOREVER', 215, 'delete_forever');
    MaterialIcon$DELETE_SWEEP_instance = new MaterialIcon('DELETE_SWEEP', 216, 'delete_sweep ');
    MaterialIcon$DESCRIPTION_instance = new MaterialIcon('DESCRIPTION', 217, 'description');
    MaterialIcon$DESKTOP_MAC_instance = new MaterialIcon('DESKTOP_MAC', 218, 'desktop_mac');
    MaterialIcon$DESKTOP_WINDOWS_instance = new MaterialIcon('DESKTOP_WINDOWS', 219, 'desktop_windows');
    MaterialIcon$DETAILS_instance = new MaterialIcon('DETAILS', 220, 'details');
    MaterialIcon$DEVELOPER_BOARD_instance = new MaterialIcon('DEVELOPER_BOARD', 221, 'developer_board');
    MaterialIcon$DEVELOPER_MODE_instance = new MaterialIcon('DEVELOPER_MODE', 222, 'developer_mode');
    MaterialIcon$DEVICE_HUB_instance = new MaterialIcon('DEVICE_HUB', 223, 'device_hub');
    MaterialIcon$DEVICES_instance = new MaterialIcon('DEVICES', 224, 'devices');
    MaterialIcon$DEVICES_OTHER_instance = new MaterialIcon('DEVICES_OTHER', 225, 'devices_other');
    MaterialIcon$DIALER_SIP_instance = new MaterialIcon('DIALER_SIP', 226, 'dialer_sip');
    MaterialIcon$DIALPAD_instance = new MaterialIcon('DIALPAD', 227, 'dialpad');
    MaterialIcon$DIRECTIONS_instance = new MaterialIcon('DIRECTIONS', 228, 'directions');
    MaterialIcon$DIRECTIONS_BIKE_instance = new MaterialIcon('DIRECTIONS_BIKE', 229, 'directions_bike');
    MaterialIcon$DIRECTIONS_BOAT_instance = new MaterialIcon('DIRECTIONS_BOAT', 230, 'directions_boat');
    MaterialIcon$DIRECTIONS_BUS_instance = new MaterialIcon('DIRECTIONS_BUS', 231, 'directions_bus');
    MaterialIcon$DIRECTIONS_CAR_instance = new MaterialIcon('DIRECTIONS_CAR', 232, 'directions_car');
    MaterialIcon$DIRECTIONS_RAILWAY_instance = new MaterialIcon('DIRECTIONS_RAILWAY', 233, 'directions_railway');
    MaterialIcon$DIRECTIONS_RUN_instance = new MaterialIcon('DIRECTIONS_RUN', 234, 'directions_run');
    MaterialIcon$DIRECTIONS_SUBWAY_instance = new MaterialIcon('DIRECTIONS_SUBWAY', 235, 'directions_subway');
    MaterialIcon$DIRECTIONS_TRANSIT_instance = new MaterialIcon('DIRECTIONS_TRANSIT', 236, 'directions_transit');
    MaterialIcon$DIRECTIONS_WALK_instance = new MaterialIcon('DIRECTIONS_WALK', 237, 'directions_walk');
    MaterialIcon$DISC_FULL_instance = new MaterialIcon('DISC_FULL', 238, 'disc_full');
    MaterialIcon$DNS_instance = new MaterialIcon('DNS', 239, 'dns');
    MaterialIcon$DO_NOT_DISTURB_instance = new MaterialIcon('DO_NOT_DISTURB', 240, 'do_not_disturb');
    MaterialIcon$DO_NOT_DISTURB_ALT_instance = new MaterialIcon('DO_NOT_DISTURB_ALT', 241, 'do_not_disturb_alt');
    MaterialIcon$DO_NOT_DISTURB_OFF_instance = new MaterialIcon('DO_NOT_DISTURB_OFF', 242, 'do_not_disturb_off');
    MaterialIcon$DO_NOT_DISTURB_ON_instance = new MaterialIcon('DO_NOT_DISTURB_ON', 243, 'do_not_disturb_on');
    MaterialIcon$DOCK_instance = new MaterialIcon('DOCK', 244, 'dock');
    MaterialIcon$DOMAIN_instance = new MaterialIcon('DOMAIN', 245, 'domain');
    MaterialIcon$DONE_instance = new MaterialIcon('DONE', 246, 'done');
    MaterialIcon$DONE_ALL_instance = new MaterialIcon('DONE_ALL', 247, 'done_all');
    MaterialIcon$DONUT_LARGE_instance = new MaterialIcon('DONUT_LARGE', 248, 'donut_large');
    MaterialIcon$DONUT_SMALL_instance = new MaterialIcon('DONUT_SMALL', 249, 'donut_small');
    MaterialIcon$DRAFTS_instance = new MaterialIcon('DRAFTS', 250, 'drafts');
    MaterialIcon$DRAG_HANDLE_instance = new MaterialIcon('DRAG_HANDLE', 251, 'drag_handle');
    MaterialIcon$DRIVE_ETA_instance = new MaterialIcon('DRIVE_ETA', 252, 'drive_eta');
    MaterialIcon$DVR_instance = new MaterialIcon('DVR', 253, 'dvr');
    MaterialIcon$EDIT_instance = new MaterialIcon('EDIT', 254, 'edit');
    MaterialIcon$EDIT_LOCATION_instance = new MaterialIcon('EDIT_LOCATION', 255, 'edit_location');
    MaterialIcon$EJECT_instance = new MaterialIcon('EJECT', 256, 'eject');
    MaterialIcon$EMAIL_instance = new MaterialIcon('EMAIL', 257, 'email');
    MaterialIcon$ENHANCED_ENCRYPTION_instance = new MaterialIcon('ENHANCED_ENCRYPTION', 258, 'enhanced_encryption');
    MaterialIcon$EQUALIZER_instance = new MaterialIcon('EQUALIZER', 259, 'equalizer');
    MaterialIcon$ERROR_instance = new MaterialIcon('ERROR', 260, 'error');
    MaterialIcon$ERROR_OUTLINE_instance = new MaterialIcon('ERROR_OUTLINE', 261, 'error_outline');
    MaterialIcon$EURO_SYMBOL_instance = new MaterialIcon('EURO_SYMBOL', 262, 'euro_symbol');
    MaterialIcon$EV_STATION_instance = new MaterialIcon('EV_STATION', 263, 'ev_station');
    MaterialIcon$EVENT_instance = new MaterialIcon('EVENT', 264, 'model');
    MaterialIcon$EVENT_AVAILABLE_instance = new MaterialIcon('EVENT_AVAILABLE', 265, 'event_available');
    MaterialIcon$EVENT_BUSY_instance = new MaterialIcon('EVENT_BUSY', 266, 'event_busy');
    MaterialIcon$EVENT_NOTE_instance = new MaterialIcon('EVENT_NOTE', 267, 'event_note');
    MaterialIcon$EVENT_SEAT_instance = new MaterialIcon('EVENT_SEAT', 268, 'event_seat');
    MaterialIcon$EXIT_TO_APP_instance = new MaterialIcon('EXIT_TO_APP', 269, 'exit_to_app');
    MaterialIcon$EXPAND_LESS_instance = new MaterialIcon('EXPAND_LESS', 270, 'expand_less');
    MaterialIcon$EXPAND_MORE_instance = new MaterialIcon('EXPAND_MORE', 271, 'expand_more');
    MaterialIcon$EXPLICIT_instance = new MaterialIcon('EXPLICIT', 272, 'explicit');
    MaterialIcon$EXPLORE_instance = new MaterialIcon('EXPLORE', 273, 'explore');
    MaterialIcon$EXPOSURE_instance = new MaterialIcon('EXPOSURE', 274, 'exposure');
    MaterialIcon$EXPOSURE_NEG_1_instance = new MaterialIcon('EXPOSURE_NEG_1', 275, 'exposure_neg_1');
    MaterialIcon$EXPOSURE_NEG_2_instance = new MaterialIcon('EXPOSURE_NEG_2', 276, 'exposure_neg_2');
    MaterialIcon$EXPOSURE_PLUS_1_instance = new MaterialIcon('EXPOSURE_PLUS_1', 277, 'exposure_plus_1');
    MaterialIcon$EXPOSURE_PLUS_2_instance = new MaterialIcon('EXPOSURE_PLUS_2', 278, 'exposure_plus_2');
    MaterialIcon$EXPOSURE_ZERO_instance = new MaterialIcon('EXPOSURE_ZERO', 279, 'exposure_zero');
    MaterialIcon$EXTENSION_instance = new MaterialIcon('EXTENSION', 280, 'extension');
    MaterialIcon$FACE_instance = new MaterialIcon('FACE', 281, 'face');
    MaterialIcon$FAST_FORWARD_instance = new MaterialIcon('FAST_FORWARD', 282, 'fast_forward ');
    MaterialIcon$FAST_REWIND_instance = new MaterialIcon('FAST_REWIND', 283, 'fast_rewind');
    MaterialIcon$FAVORITE_instance = new MaterialIcon('FAVORITE', 284, 'favorite');
    MaterialIcon$FAVORITE_BORDER_instance = new MaterialIcon('FAVORITE_BORDER', 285, 'favorite_border');
    MaterialIcon$FEATURED_PLAY_LIST_instance = new MaterialIcon('FEATURED_PLAY_LIST', 286, 'featured_play_list');
    MaterialIcon$FEATURED_VIDEO_instance = new MaterialIcon('FEATURED_VIDEO', 287, 'featured_video');
    MaterialIcon$FACK_instance = new MaterialIcon('FACK', 288, 'fack');
    MaterialIcon$FIBER_DVR_instance = new MaterialIcon('FIBER_DVR', 289, 'fiber_dvr');
    MaterialIcon$FIBER_MANUAL_RECORD_instance = new MaterialIcon('FIBER_MANUAL_RECORD', 290, 'fiber_manual_record');
    MaterialIcon$FIBER_NEW_instance = new MaterialIcon('FIBER_NEW', 291, 'fiber_new');
    MaterialIcon$FIBER_PIN_instance = new MaterialIcon('FIBER_PIN', 292, 'fiber_pin');
    MaterialIcon$FIBER_SMART_RECORD_instance = new MaterialIcon('FIBER_SMART_RECORD', 293, 'fiber_smart_record');
    MaterialIcon$FILE_DOWNLOAD_instance = new MaterialIcon('FILE_DOWNLOAD', 294, 'file_download');
    MaterialIcon$FILE_UPLOAD_instance = new MaterialIcon('FILE_UPLOAD', 295, 'file_upload');
    MaterialIcon$FILTER_instance = new MaterialIcon('FILTER', 296, 'filter');
    MaterialIcon$FILTER_1_instance = new MaterialIcon('FILTER_1', 297, 'filter_1');
    MaterialIcon$FILTER_2_instance = new MaterialIcon('FILTER_2', 298, 'filter_2');
    MaterialIcon$FILTER_3_instance = new MaterialIcon('FILTER_3', 299, 'filter_3');
    MaterialIcon$FILTER_4_instance = new MaterialIcon('FILTER_4', 300, 'filter_4');
    MaterialIcon$FILTER_5_instance = new MaterialIcon('FILTER_5', 301, 'filter_5');
    MaterialIcon$FILTER_6_instance = new MaterialIcon('FILTER_6', 302, 'filter_6');
    MaterialIcon$FILTER_7_instance = new MaterialIcon('FILTER_7', 303, 'filter_7');
    MaterialIcon$FILTER_8_instance = new MaterialIcon('FILTER_8', 304, 'filter_8');
    MaterialIcon$FILTER_9_instance = new MaterialIcon('FILTER_9', 305, 'filter_9');
    MaterialIcon$FILTER_9_PLUS_instance = new MaterialIcon('FILTER_9_PLUS', 306, 'filter_9_plus');
    MaterialIcon$FILTER_B_AND_W_instance = new MaterialIcon('FILTER_B_AND_W', 307, 'filter_b_and_w');
    MaterialIcon$FILTER_CENTER_FOCUS_instance = new MaterialIcon('FILTER_CENTER_FOCUS', 308, 'filter_center_focus');
    MaterialIcon$FILTER_DRAMA_instance = new MaterialIcon('FILTER_DRAMA', 309, 'filter_drama ');
    MaterialIcon$FILTER_FRAMES_instance = new MaterialIcon('FILTER_FRAMES', 310, 'filter_frames');
    MaterialIcon$FILTER_HDR_instance = new MaterialIcon('FILTER_HDR', 311, 'filter_hdr');
    MaterialIcon$FILTER_LIST_instance = new MaterialIcon('FILTER_LIST', 312, 'filter_list');
    MaterialIcon$FILTER_NONE_instance = new MaterialIcon('FILTER_NONE', 313, 'filter_none');
    MaterialIcon$FILTER_TILT_SHIFT_instance = new MaterialIcon('FILTER_TILT_SHIFT', 314, 'filter_tilt_shift');
    MaterialIcon$FILTER_VINTAGE_instance = new MaterialIcon('FILTER_VINTAGE', 315, 'filter_vintage');
    MaterialIcon$FIND_IN_PAGE_instance = new MaterialIcon('FIND_IN_PAGE', 316, 'find_in_page ');
    MaterialIcon$FIND_REPLACE_instance = new MaterialIcon('FIND_REPLACE', 317, 'find_replace ');
    MaterialIcon$FINGERPRINT_instance = new MaterialIcon('FINGERPRINT', 318, 'fingerprint');
    MaterialIcon$FIRST_PAGE_instance = new MaterialIcon('FIRST_PAGE', 319, 'first_page');
    MaterialIcon$FITNESS_CENTER_instance = new MaterialIcon('FITNESS_CENTER', 320, 'fitness_center');
    MaterialIcon$FLAG_instance = new MaterialIcon('FLAG', 321, 'flag');
    MaterialIcon$FLARE_instance = new MaterialIcon('FLARE', 322, 'flare');
    MaterialIcon$FLASH_AUTO_instance = new MaterialIcon('FLASH_AUTO', 323, 'flash_auto');
    MaterialIcon$FLASH_OFF_instance = new MaterialIcon('FLASH_OFF', 324, 'flash_off');
    MaterialIcon$FLASH_ON_instance = new MaterialIcon('FLASH_ON', 325, 'flash_on');
    MaterialIcon$FLIGHT_instance = new MaterialIcon('FLIGHT', 326, 'flight');
    MaterialIcon$FLIGHT_LAND_instance = new MaterialIcon('FLIGHT_LAND', 327, 'flight_land');
    MaterialIcon$FLIGHT_TAKEOFF_instance = new MaterialIcon('FLIGHT_TAKEOFF', 328, 'flight_takeoff');
    MaterialIcon$FLIP_instance = new MaterialIcon('FLIP', 329, 'flip');
    MaterialIcon$FLIP_TO_BACK_instance = new MaterialIcon('FLIP_TO_BACK', 330, 'flip_to_back ');
    MaterialIcon$FLIP_TO_FRONT_instance = new MaterialIcon('FLIP_TO_FRONT', 331, 'flip_to_front');
    MaterialIcon$FOLDER_instance = new MaterialIcon('FOLDER', 332, 'folder');
    MaterialIcon$FOLDER_OPEN_instance = new MaterialIcon('FOLDER_OPEN', 333, 'folder_open');
    MaterialIcon$FOLDER_SHARED_instance = new MaterialIcon('FOLDER_SHARED', 334, 'folder_shared');
    MaterialIcon$FOLDER_SPECIAL_instance = new MaterialIcon('FOLDER_SPECIAL', 335, 'folder_special');
    MaterialIcon$FONT_DOWNLOAD_instance = new MaterialIcon('FONT_DOWNLOAD', 336, 'font_download');
    MaterialIcon$FORMAT_ALIGN_CENTER_instance = new MaterialIcon('FORMAT_ALIGN_CENTER', 337, 'format_align_center');
    MaterialIcon$FORMAT_ALIGN_JUSTIFY_instance = new MaterialIcon('FORMAT_ALIGN_JUSTIFY', 338, 'format_align_justify');
    MaterialIcon$FORMAT_ALIGN_LEFT_instance = new MaterialIcon('FORMAT_ALIGN_LEFT', 339, 'format_align_left');
    MaterialIcon$FORMAT_ALIGN_RIGHT_instance = new MaterialIcon('FORMAT_ALIGN_RIGHT', 340, 'format_align_right');
    MaterialIcon$FORMAT_BOLD_instance = new MaterialIcon('FORMAT_BOLD', 341, 'format_bold');
    MaterialIcon$FORMAT_CLEAR_instance = new MaterialIcon('FORMAT_CLEAR', 342, 'format_clear ');
    MaterialIcon$FORMAT_COLOR_FILL_instance = new MaterialIcon('FORMAT_COLOR_FILL', 343, 'format_color_fill');
    MaterialIcon$FORMAT_COLOR_RESET_instance = new MaterialIcon('FORMAT_COLOR_RESET', 344, 'format_color_reset');
    MaterialIcon$FORMAT_COLOR_TEXT_instance = new MaterialIcon('FORMAT_COLOR_TEXT', 345, 'format_color_text');
    MaterialIcon$FORMAT_INDENT_DECREASE_instance = new MaterialIcon('FORMAT_INDENT_DECREASE', 346, 'format_indent_decrease');
    MaterialIcon$FORMAT_INDENT_INCREASE_instance = new MaterialIcon('FORMAT_INDENT_INCREASE', 347, 'format_indent_increase');
    MaterialIcon$FORMAT_ITALIC_instance = new MaterialIcon('FORMAT_ITALIC', 348, 'format_italic');
    MaterialIcon$FORMAT_LINE_SPACING_instance = new MaterialIcon('FORMAT_LINE_SPACING', 349, 'format_line_spacing');
    MaterialIcon$FORMAT_LIST_BULLETED_instance = new MaterialIcon('FORMAT_LIST_BULLETED', 350, 'format_list_bulleted');
    MaterialIcon$FORMAT_LIST_NUMBERED_instance = new MaterialIcon('FORMAT_LIST_NUMBERED', 351, 'format_list_numbered');
    MaterialIcon$FORMAT_PAINT_instance = new MaterialIcon('FORMAT_PAINT', 352, 'format_paint ');
    MaterialIcon$FORMAT_QUOTE_instance = new MaterialIcon('FORMAT_QUOTE', 353, 'format_quote ');
    MaterialIcon$FORMAT_SHAPES_instance = new MaterialIcon('FORMAT_SHAPES', 354, 'format_shapes');
    MaterialIcon$FORMAT_SIZE_instance = new MaterialIcon('FORMAT_SIZE', 355, 'format_size');
    MaterialIcon$FORMAT_STRIKETHROUGH_instance = new MaterialIcon('FORMAT_STRIKETHROUGH', 356, 'format_strikethrough');
    MaterialIcon$FORMAT_TEXTDIRECTION_L_TO_R_instance = new MaterialIcon('FORMAT_TEXTDIRECTION_L_TO_R', 357, 'format_textdirection_l_to_r');
    MaterialIcon$FORMAT_TEXTDIRECTION_R_TO_L_instance = new MaterialIcon('FORMAT_TEXTDIRECTION_R_TO_L', 358, 'format_textdirection_r_to_l');
    MaterialIcon$FORMAT_UNDERLINED_instance = new MaterialIcon('FORMAT_UNDERLINED', 359, 'format_underlined');
    MaterialIcon$FORUM_instance = new MaterialIcon('FORUM', 360, 'forum');
    MaterialIcon$FORWARD_instance = new MaterialIcon('FORWARD', 361, 'forward');
    MaterialIcon$FORWARD_10_instance = new MaterialIcon('FORWARD_10', 362, 'forward_10');
    MaterialIcon$FORWARD_30_instance = new MaterialIcon('FORWARD_30', 363, 'forward_30');
    MaterialIcon$FORWARD_5_instance = new MaterialIcon('FORWARD_5', 364, 'forward_5');
    MaterialIcon$FREE_BREAKFAST_instance = new MaterialIcon('FREE_BREAKFAST', 365, 'free_breakfast');
    MaterialIcon$FULLSCREEN_instance = new MaterialIcon('FULLSCREEN', 366, 'fullscreen');
    MaterialIcon$FULLSCREEN_EXIT_instance = new MaterialIcon('FULLSCREEN_EXIT', 367, 'fullscreen_exit');
    MaterialIcon$FUNCTIONS_instance = new MaterialIcon('FUNCTIONS', 368, 'functions');
    MaterialIcon$G_TRANSLATE_instance = new MaterialIcon('G_TRANSLATE', 369, 'g_translate');
    MaterialIcon$GAMEPAD_instance = new MaterialIcon('GAMEPAD', 370, 'gamepad');
    MaterialIcon$GAMES_instance = new MaterialIcon('GAMES', 371, 'games');
    MaterialIcon$GAVEL_instance = new MaterialIcon('GAVEL', 372, 'gavel');
    MaterialIcon$GESTURE_instance = new MaterialIcon('GESTURE', 373, 'gesture');
    MaterialIcon$GET_APP_instance = new MaterialIcon('GET_APP', 374, 'get_app');
    MaterialIcon$GIF_instance = new MaterialIcon('GIF', 375, 'gif');
    MaterialIcon$GOLF_COURSE_instance = new MaterialIcon('GOLF_COURSE', 376, 'golf_course');
    MaterialIcon$GPS_FIXED_instance = new MaterialIcon('GPS_FIXED', 377, 'gps_fixed');
    MaterialIcon$GPS_NOT_FIXED_instance = new MaterialIcon('GPS_NOT_FIXED', 378, 'gps_not_fixed');
    MaterialIcon$GPS_OFF_instance = new MaterialIcon('GPS_OFF', 379, 'gps_off');
    MaterialIcon$GRADE_instance = new MaterialIcon('GRADE', 380, 'grade');
    MaterialIcon$GRADIENT_instance = new MaterialIcon('GRADIENT', 381, 'gradient');
    MaterialIcon$GRAIN_instance = new MaterialIcon('GRAIN', 382, 'grain');
    MaterialIcon$GRAPHIC_EQ_instance = new MaterialIcon('GRAPHIC_EQ', 383, 'graphic_eq');
    MaterialIcon$GRID_OFF_instance = new MaterialIcon('GRID_OFF', 384, 'grid_off');
    MaterialIcon$GRID_ON_instance = new MaterialIcon('GRID_ON', 385, 'grid_on');
    MaterialIcon$GROUP_instance = new MaterialIcon('GROUP', 386, 'group');
    MaterialIcon$GROUP_ADD_instance = new MaterialIcon('GROUP_ADD', 387, 'group_add');
    MaterialIcon$GROUP_WORK_instance = new MaterialIcon('GROUP_WORK', 388, 'group_work');
    MaterialIcon$HD_instance = new MaterialIcon('HD', 389, 'hd');
    MaterialIcon$HDR_OFF_instance = new MaterialIcon('HDR_OFF', 390, 'hdr_off');
    MaterialIcon$HDR_ON_instance = new MaterialIcon('HDR_ON', 391, 'hdr_on');
    MaterialIcon$HDR_STRONG_instance = new MaterialIcon('HDR_STRONG', 392, 'hdr_strong');
    MaterialIcon$HDR_WEAK_instance = new MaterialIcon('HDR_WEAK', 393, 'hdr_weak');
    MaterialIcon$HEADSET_instance = new MaterialIcon('HEADSET', 394, 'headset');
    MaterialIcon$HEADSET_MIC_instance = new MaterialIcon('HEADSET_MIC', 395, 'headset_mic');
    MaterialIcon$HEALING_instance = new MaterialIcon('HEALING', 396, 'healing');
    MaterialIcon$HEARING_instance = new MaterialIcon('HEARING', 397, 'hearing');
    MaterialIcon$HELP_instance = new MaterialIcon('HELP', 398, 'help');
    MaterialIcon$HELP_OUTLINE_instance = new MaterialIcon('HELP_OUTLINE', 399, 'help_outline ');
    MaterialIcon$HIGH_QUALITY_instance = new MaterialIcon('HIGH_QUALITY', 400, 'high_quality ');
    MaterialIcon$HIGHLIGHT_instance = new MaterialIcon('HIGHLIGHT', 401, 'highlight');
    MaterialIcon$HIGHLIGHT_OFF_instance = new MaterialIcon('HIGHLIGHT_OFF', 402, 'highlight_off');
    MaterialIcon$HISTORY_instance = new MaterialIcon('HISTORY', 403, 'history');
    MaterialIcon$HOME_instance = new MaterialIcon('HOME', 404, 'home');
    MaterialIcon$HOT_TUB_instance = new MaterialIcon('HOT_TUB', 405, 'hot_tub');
    MaterialIcon$HOTEL_instance = new MaterialIcon('HOTEL', 406, 'hotel');
    MaterialIcon$HOURGLASS_EMPTY_instance = new MaterialIcon('HOURGLASS_EMPTY', 407, 'hourglass_empty');
    MaterialIcon$HOURGLASS_FULL_instance = new MaterialIcon('HOURGLASS_FULL', 408, 'hourglass_full');
    MaterialIcon$HTTP_instance = new MaterialIcon('HTTP', 409, 'http');
    MaterialIcon$HTTPS_instance = new MaterialIcon('HTTPS', 410, 'https');
    MaterialIcon$IMAGE_instance = new MaterialIcon('IMAGE', 411, 'image');
    MaterialIcon$IMAGE_ASPECT_RATIO_instance = new MaterialIcon('IMAGE_ASPECT_RATIO', 412, 'image_aspect_ratio');
    MaterialIcon$IMPORT_CONTACTS_instance = new MaterialIcon('IMPORT_CONTACTS', 413, 'import_contacts');
    MaterialIcon$IMPORT_EXPORT_instance = new MaterialIcon('IMPORT_EXPORT', 414, 'import_export');
    MaterialIcon$IMPORTANT_DEVICES_instance = new MaterialIcon('IMPORTANT_DEVICES', 415, 'important_devices');
    MaterialIcon$INBOX_instance = new MaterialIcon('INBOX', 416, 'inbox');
    MaterialIcon$INDETERMINATE_CHECK_BOX_instance = new MaterialIcon('INDETERMINATE_CHECK_BOX', 417, 'indeterminate_check_box');
    MaterialIcon$INFO_instance = new MaterialIcon('INFO', 418, 'info');
    MaterialIcon$INFO_OUTLINE_instance = new MaterialIcon('INFO_OUTLINE', 419, 'info_outline ');
    MaterialIcon$INPUT_instance = new MaterialIcon('INPUT', 420, 'input');
    MaterialIcon$INSERT_CHART_instance = new MaterialIcon('INSERT_CHART', 421, 'insert_chart ');
    MaterialIcon$INSERT_COMMENT_instance = new MaterialIcon('INSERT_COMMENT', 422, 'insert_comment');
    MaterialIcon$INSERT_DRIVE_FILE_instance = new MaterialIcon('INSERT_DRIVE_FILE', 423, 'insert_drive_file');
    MaterialIcon$INSERT_EMOTICON_instance = new MaterialIcon('INSERT_EMOTICON', 424, 'insert_emoticon');
    MaterialIcon$INSERT_INVITATION_instance = new MaterialIcon('INSERT_INVITATION', 425, 'insert_invitation');
    MaterialIcon$INSERT_LINK_instance = new MaterialIcon('INSERT_LINK', 426, 'insert_link');
    MaterialIcon$INSERT_PHOTO_instance = new MaterialIcon('INSERT_PHOTO', 427, 'insert_photo ');
    MaterialIcon$INVERT_COLORS_instance = new MaterialIcon('INVERT_COLORS', 428, 'invert_colors');
    MaterialIcon$INVERT_COLORS_OFF_instance = new MaterialIcon('INVERT_COLORS_OFF', 429, 'invert_colors_off');
    MaterialIcon$ISO_instance = new MaterialIcon('ISO', 430, 'iso');
    MaterialIcon$KEYBOARD_instance = new MaterialIcon('KEYBOARD', 431, 'keyboard');
    MaterialIcon$KEYBOARD_ARROW_DOWN_instance = new MaterialIcon('KEYBOARD_ARROW_DOWN', 432, 'keyboard_arrow_down');
    MaterialIcon$KEYBOARD_ARROW_LEFT_instance = new MaterialIcon('KEYBOARD_ARROW_LEFT', 433, 'keyboard_arrow_left');
    MaterialIcon$KEYBOARD_ARROW_RIGHT_instance = new MaterialIcon('KEYBOARD_ARROW_RIGHT', 434, 'keyboard_arrow_right');
    MaterialIcon$KEYBOARD_ARROW_UP_instance = new MaterialIcon('KEYBOARD_ARROW_UP', 435, 'keyboard_arrow_up');
    MaterialIcon$KEYBOARD_BACKSPACE_instance = new MaterialIcon('KEYBOARD_BACKSPACE', 436, 'keyboard_backspace');
    MaterialIcon$KEYBOARD_CAPSLOCK_instance = new MaterialIcon('KEYBOARD_CAPSLOCK', 437, 'keyboard_capslock');
    MaterialIcon$KEYBOARD_HIDE_instance = new MaterialIcon('KEYBOARD_HIDE', 438, 'keyboard_hide');
    MaterialIcon$KEYBOARD_RETURN_instance = new MaterialIcon('KEYBOARD_RETURN', 439, 'keyboard_return');
    MaterialIcon$KEYBOARD_TAB_instance = new MaterialIcon('KEYBOARD_TAB', 440, 'keyboard_tab ');
    MaterialIcon$KEYBOARD_VOICE_instance = new MaterialIcon('KEYBOARD_VOICE', 441, 'keyboard_voice');
    MaterialIcon$KITCHEN_instance = new MaterialIcon('KITCHEN', 442, 'kitchen');
    MaterialIcon$LABEL_instance = new MaterialIcon('LABEL', 443, 'label');
    MaterialIcon$LABEL_OUTLINE_instance = new MaterialIcon('LABEL_OUTLINE', 444, 'label_outline');
    MaterialIcon$LANDSCAPE_instance = new MaterialIcon('LANDSCAPE', 445, 'landscape');
    MaterialIcon$LANGUAGE_instance = new MaterialIcon('LANGUAGE', 446, 'language');
    MaterialIcon$LAPTOP_instance = new MaterialIcon('LAPTOP', 447, 'laptop');
    MaterialIcon$LAPTOP_CHROMEBOOK_instance = new MaterialIcon('LAPTOP_CHROMEBOOK', 448, 'laptop_chromebook');
    MaterialIcon$LAPTOP_MAC_instance = new MaterialIcon('LAPTOP_MAC', 449, 'laptop_mac');
    MaterialIcon$LAPTOP_WINDOWS_instance = new MaterialIcon('LAPTOP_WINDOWS', 450, 'laptop_windows');
    MaterialIcon$LAST_PAGE_instance = new MaterialIcon('LAST_PAGE', 451, 'last_page');
    MaterialIcon$LAUNCH_instance = new MaterialIcon('LAUNCH', 452, 'launch');
    MaterialIcon$LAYERS_instance = new MaterialIcon('LAYERS', 453, 'layers');
    MaterialIcon$LAYERS_CLEAR_instance = new MaterialIcon('LAYERS_CLEAR', 454, 'layers_clear ');
    MaterialIcon$LEAK_ADD_instance = new MaterialIcon('LEAK_ADD', 455, 'leak_add');
    MaterialIcon$LEAK_REMOVE_instance = new MaterialIcon('LEAK_REMOVE', 456, 'leak_remove');
    MaterialIcon$LENS_instance = new MaterialIcon('LENS', 457, 'lens');
    MaterialIcon$LIBRARY_ADD_instance = new MaterialIcon('LIBRARY_ADD', 458, 'library_add');
    MaterialIcon$LIBRARY_BOOKS_instance = new MaterialIcon('LIBRARY_BOOKS', 459, 'library_books');
    MaterialIcon$LIBRARY_MUSIC_instance = new MaterialIcon('LIBRARY_MUSIC', 460, 'library_music');
    MaterialIcon$LIGHTBULB_OUTLINE_instance = new MaterialIcon('LIGHTBULB_OUTLINE', 461, 'lightbulb_outline');
    MaterialIcon$LINE_STYLE_instance = new MaterialIcon('LINE_STYLE', 462, 'line_style');
    MaterialIcon$LINE_WEIGHT_instance = new MaterialIcon('LINE_WEIGHT', 463, 'line_weight');
    MaterialIcon$LINEAR_SCALE_instance = new MaterialIcon('LINEAR_SCALE', 464, 'linear_scale ');
    MaterialIcon$LINK_instance = new MaterialIcon('LINK', 465, 'link');
    MaterialIcon$LINKED_CAMERA_instance = new MaterialIcon('LINKED_CAMERA', 466, 'linked_camera');
    MaterialIcon$LIST_instance = new MaterialIcon('LIST', 467, 'list');
    MaterialIcon$LIVE_HELP_instance = new MaterialIcon('LIVE_HELP', 468, 'live_help');
    MaterialIcon$LIVE_TV_instance = new MaterialIcon('LIVE_TV', 469, 'live_tv');
    MaterialIcon$LOCAL_ACTIVITY_instance = new MaterialIcon('LOCAL_ACTIVITY', 470, 'local_activity');
    MaterialIcon$LOCAL_AIRPORT_instance = new MaterialIcon('LOCAL_AIRPORT', 471, 'local_airport');
    MaterialIcon$LOCAL_ATM_instance = new MaterialIcon('LOCAL_ATM', 472, 'local_atm');
    MaterialIcon$LOCAL_BAR_instance = new MaterialIcon('LOCAL_BAR', 473, 'local_bar');
    MaterialIcon$LOCAL_CAFE_instance = new MaterialIcon('LOCAL_CAFE', 474, 'local_cafe');
    MaterialIcon$LOCAL_CAR_WASH_instance = new MaterialIcon('LOCAL_CAR_WASH', 475, 'local_car_wash');
    MaterialIcon$LOCAL_CONVENIENCE_STORE_instance = new MaterialIcon('LOCAL_CONVENIENCE_STORE', 476, 'local_convenience_store');
    MaterialIcon$LOCAL_DINING_instance = new MaterialIcon('LOCAL_DINING', 477, 'local_dining ');
    MaterialIcon$LOCAL_DRINK_instance = new MaterialIcon('LOCAL_DRINK', 478, 'local_drink');
    MaterialIcon$LOCAL_FLORIST_instance = new MaterialIcon('LOCAL_FLORIST', 479, 'local_florist');
    MaterialIcon$LOCAL_GAS_STATION_instance = new MaterialIcon('LOCAL_GAS_STATION', 480, 'local_gas_station');
    MaterialIcon$LOCAL_GROCERY_STORE_instance = new MaterialIcon('LOCAL_GROCERY_STORE', 481, 'local_grocery_store');
    MaterialIcon$LOCAL_HOSPITAL_instance = new MaterialIcon('LOCAL_HOSPITAL', 482, 'local_hospital');
    MaterialIcon$LOCAL_HOTEL_instance = new MaterialIcon('LOCAL_HOTEL', 483, 'local_hotel');
    MaterialIcon$LOCAL_LAUNDRY_SERVICE_instance = new MaterialIcon('LOCAL_LAUNDRY_SERVICE', 484, 'local_laundry_service');
    MaterialIcon$LOCAL_LIBRARY_instance = new MaterialIcon('LOCAL_LIBRARY', 485, 'local_library');
    MaterialIcon$LOCAL_MALL_instance = new MaterialIcon('LOCAL_MALL', 486, 'local_mall');
    MaterialIcon$LOCAL_MOVIES_instance = new MaterialIcon('LOCAL_MOVIES', 487, 'local_movies ');
    MaterialIcon$LOCAL_OFFER_instance = new MaterialIcon('LOCAL_OFFER', 488, 'local_offer');
    MaterialIcon$LOCAL_PARKING_instance = new MaterialIcon('LOCAL_PARKING', 489, 'local_parking');
    MaterialIcon$LOCAL_PHARMACY_instance = new MaterialIcon('LOCAL_PHARMACY', 490, 'local_pharmacy');
    MaterialIcon$LOCAL_PHONE_instance = new MaterialIcon('LOCAL_PHONE', 491, 'local_phone');
    MaterialIcon$LOCAL_PIZZA_instance = new MaterialIcon('LOCAL_PIZZA', 492, 'local_pizza');
    MaterialIcon$LOCAL_PLAY_instance = new MaterialIcon('LOCAL_PLAY', 493, 'local_play');
    MaterialIcon$LOCAL_POST_OFFICE_instance = new MaterialIcon('LOCAL_POST_OFFICE', 494, 'local_post_office');
    MaterialIcon$LOCAL_PRINTSHOP_instance = new MaterialIcon('LOCAL_PRINTSHOP', 495, 'local_printshop');
    MaterialIcon$LOCAL_SEE_instance = new MaterialIcon('LOCAL_SEE', 496, 'local_see');
    MaterialIcon$LOCAL_SHIPPING_instance = new MaterialIcon('LOCAL_SHIPPING', 497, 'local_shipping');
    MaterialIcon$LOCAL_TAXI_instance = new MaterialIcon('LOCAL_TAXI', 498, 'local_taxi');
    MaterialIcon$LOCATION_CITY_instance = new MaterialIcon('LOCATION_CITY', 499, 'location_city');
    MaterialIcon$LOCATION_DISABLED_instance = new MaterialIcon('LOCATION_DISABLED', 500, 'location_disabled');
    MaterialIcon$LOCATION_OFF_instance = new MaterialIcon('LOCATION_OFF', 501, 'location_off ');
    MaterialIcon$LOCATION_ON_instance = new MaterialIcon('LOCATION_ON', 502, 'location_on');
    MaterialIcon$LOCATION_SEARCHING_instance = new MaterialIcon('LOCATION_SEARCHING', 503, 'location_searching');
    MaterialIcon$LOCK_instance = new MaterialIcon('LOCK', 504, 'lock');
    MaterialIcon$LOCK_OPEN_instance = new MaterialIcon('LOCK_OPEN', 505, 'lock_open');
    MaterialIcon$LOCK_OUTLINE_instance = new MaterialIcon('LOCK_OUTLINE', 506, 'lock_outline ');
    MaterialIcon$LOOKS_instance = new MaterialIcon('LOOKS', 507, 'looks');
    MaterialIcon$LOOKS_3_instance = new MaterialIcon('LOOKS_3', 508, 'looks_3');
    MaterialIcon$LOOKS_4_instance = new MaterialIcon('LOOKS_4', 509, 'looks_4');
    MaterialIcon$LOOKS_5_instance = new MaterialIcon('LOOKS_5', 510, 'looks_5');
    MaterialIcon$LOOKS_6_instance = new MaterialIcon('LOOKS_6', 511, 'looks_6');
    MaterialIcon$LOOKS_ONE_instance = new MaterialIcon('LOOKS_ONE', 512, 'looks_one');
    MaterialIcon$LOOKS_TWO_instance = new MaterialIcon('LOOKS_TWO', 513, 'looks_two');
    MaterialIcon$LOOP_instance = new MaterialIcon('LOOP', 514, 'loop');
    MaterialIcon$LOUPE_instance = new MaterialIcon('LOUPE', 515, 'loupe');
    MaterialIcon$LOW_PRIORITY_instance = new MaterialIcon('LOW_PRIORITY', 516, 'low_priority ');
    MaterialIcon$LOYALTY_instance = new MaterialIcon('LOYALTY', 517, 'loyalty');
    MaterialIcon$MAIL_instance = new MaterialIcon('MAIL', 518, 'mail');
    MaterialIcon$MAIL_OUTLINE_instance = new MaterialIcon('MAIL_OUTLINE', 519, 'mail_outline ');
    MaterialIcon$MAP_instance = new MaterialIcon('MAP', 520, 'map');
    MaterialIcon$MARKUNREAD_instance = new MaterialIcon('MARKUNREAD', 521, 'markunread');
    MaterialIcon$MARKUNREAD_MAILBOX_instance = new MaterialIcon('MARKUNREAD_MAILBOX', 522, 'markunread_mailbox');
    MaterialIcon$MEMORY_instance = new MaterialIcon('MEMORY', 523, 'memory');
    MaterialIcon$MENU_instance = new MaterialIcon('MENU', 524, 'menu');
    MaterialIcon$MERGE_TYPE_instance = new MaterialIcon('MERGE_TYPE', 525, 'merge_type');
    MaterialIcon$MESSAGE_instance = new MaterialIcon('MESSAGE', 526, 'message');
    MaterialIcon$MIC_instance = new MaterialIcon('MIC', 527, 'mic');
    MaterialIcon$MIC_NONE_instance = new MaterialIcon('MIC_NONE', 528, 'mic_none');
    MaterialIcon$MIC_OFF_instance = new MaterialIcon('MIC_OFF', 529, 'mic_off');
    MaterialIcon$MMS_instance = new MaterialIcon('MMS', 530, 'mms');
    MaterialIcon$MODE_COMMENT_instance = new MaterialIcon('MODE_COMMENT', 531, 'mode_comment ');
    MaterialIcon$MODE_EDIT_instance = new MaterialIcon('MODE_EDIT', 532, 'mode_edit');
    MaterialIcon$MONETIZATION_ON_instance = new MaterialIcon('MONETIZATION_ON', 533, 'monetization_on');
    MaterialIcon$MONEY_OFF_instance = new MaterialIcon('MONEY_OFF', 534, 'money_off');
    MaterialIcon$MONOCHROME_PHOTOS_instance = new MaterialIcon('MONOCHROME_PHOTOS', 535, 'monochrome_photos');
    MaterialIcon$MOOD_instance = new MaterialIcon('MOOD', 536, 'mood');
    MaterialIcon$MOOD_BAD_instance = new MaterialIcon('MOOD_BAD', 537, 'mood_bad');
    MaterialIcon$MORE_instance = new MaterialIcon('MORE', 538, 'more');
    MaterialIcon$MORE_HORIZ_instance = new MaterialIcon('MORE_HORIZ', 539, 'more_horiz');
    MaterialIcon$MORE_VERT_instance = new MaterialIcon('MORE_VERT', 540, 'more_vert');
    MaterialIcon$MOTORCYCLE_instance = new MaterialIcon('MOTORCYCLE', 541, 'motorcycle');
    MaterialIcon$MOUSE_instance = new MaterialIcon('MOUSE', 542, 'mouse');
    MaterialIcon$MOVE_TO_INBOX_instance = new MaterialIcon('MOVE_TO_INBOX', 543, 'move_to_inbox');
    MaterialIcon$MOVIE_instance = new MaterialIcon('MOVIE', 544, 'movie');
    MaterialIcon$MOVIE_CREATION_instance = new MaterialIcon('MOVIE_CREATION', 545, 'movie_creation');
    MaterialIcon$MOVIE_FILTER_instance = new MaterialIcon('MOVIE_FILTER', 546, 'movie_filter ');
    MaterialIcon$MULTILINE_CHART_instance = new MaterialIcon('MULTILINE_CHART', 547, 'multiline_chart');
    MaterialIcon$MUSIC_NOTE_instance = new MaterialIcon('MUSIC_NOTE', 548, 'music_note');
    MaterialIcon$MUSIC_VIDEO_instance = new MaterialIcon('MUSIC_VIDEO', 549, 'music_video');
    MaterialIcon$MY_LOCATION_instance = new MaterialIcon('MY_LOCATION', 550, 'my_location');
    MaterialIcon$NATURE_instance = new MaterialIcon('NATURE', 551, 'nature');
    MaterialIcon$NATURE_PEOPLE_instance = new MaterialIcon('NATURE_PEOPLE', 552, 'nature_people');
    MaterialIcon$NAVIGATE_BEFORE_instance = new MaterialIcon('NAVIGATE_BEFORE', 553, 'navigate_before');
    MaterialIcon$NAVIGATE_NEXT_instance = new MaterialIcon('NAVIGATE_NEXT', 554, 'navigate_next');
    MaterialIcon$NAVIGATION_instance = new MaterialIcon('NAVIGATION', 555, 'navigationDrawer');
    MaterialIcon$NEAR_ME_instance = new MaterialIcon('NEAR_ME', 556, 'near_me');
    MaterialIcon$NETWORK_CELL_instance = new MaterialIcon('NETWORK_CELL', 557, 'network_cell ');
    MaterialIcon$NETWORK_CHECK_instance = new MaterialIcon('NETWORK_CHECK', 558, 'network_check');
    MaterialIcon$NETWORK_LOCKED_instance = new MaterialIcon('NETWORK_LOCKED', 559, 'network_locked');
    MaterialIcon$NETWORK_WIFI_instance = new MaterialIcon('NETWORK_WIFI', 560, 'network_wifi ');
    MaterialIcon$NEW_RELEASES_instance = new MaterialIcon('NEW_RELEASES', 561, 'new_releases ');
    MaterialIcon$NEXT_WEEK_instance = new MaterialIcon('NEXT_WEEK', 562, 'next_week');
    MaterialIcon$NFC_instance = new MaterialIcon('NFC', 563, 'nfc');
    MaterialIcon$NO_ENCRYPTION_instance = new MaterialIcon('NO_ENCRYPTION', 564, 'no_encryption');
    MaterialIcon$NO_SIM_instance = new MaterialIcon('NO_SIM', 565, 'no_sim');
    MaterialIcon$NOT_INTERESTED_instance = new MaterialIcon('NOT_INTERESTED', 566, 'not_interested');
    MaterialIcon$NOTE_instance = new MaterialIcon('NOTE', 567, 'note');
    MaterialIcon$NOTE_ADD_instance = new MaterialIcon('NOTE_ADD', 568, 'note_add');
    MaterialIcon$NOTIFICATIONS_instance = new MaterialIcon('NOTIFICATIONS', 569, 'notifications');
    MaterialIcon$NOTIFICATIONS_ACTIVE_instance = new MaterialIcon('NOTIFICATIONS_ACTIVE', 570, 'notifications_active');
    MaterialIcon$NOTIFICATIONS_NONE_instance = new MaterialIcon('NOTIFICATIONS_NONE', 571, 'notifications_none');
    MaterialIcon$NOTIFICATIONS_OFF_instance = new MaterialIcon('NOTIFICATIONS_OFF', 572, 'notifications_off');
    MaterialIcon$NOTIFICATIONS_PAUSED_instance = new MaterialIcon('NOTIFICATIONS_PAUSED', 573, 'notifications_paused');
    MaterialIcon$OFFLINE_PIN_instance = new MaterialIcon('OFFLINE_PIN', 574, 'offline_pin');
    MaterialIcon$ONDEMAND_VIDEO_instance = new MaterialIcon('ONDEMAND_VIDEO', 575, 'ondemand_video');
    MaterialIcon$OPACITY_instance = new MaterialIcon('OPACITY', 576, 'opacity');
    MaterialIcon$OPEN_IN_BROWSER_instance = new MaterialIcon('OPEN_IN_BROWSER', 577, 'open_in_browser');
    MaterialIcon$OPEN_IN_NEW_instance = new MaterialIcon('OPEN_IN_NEW', 578, 'open_in_new');
    MaterialIcon$OPEN_WITH_instance = new MaterialIcon('OPEN_WITH', 579, 'open_with');
    MaterialIcon$PAGES_instance = new MaterialIcon('PAGES', 580, 'pages');
    MaterialIcon$PAGEVIEW_instance = new MaterialIcon('PAGEVIEW', 581, 'pageview');
    MaterialIcon$PALETTE_instance = new MaterialIcon('PALETTE', 582, 'palette');
    MaterialIcon$PAN_TOOL_instance = new MaterialIcon('PAN_TOOL', 583, 'pan_tool');
    MaterialIcon$PANORAMA_instance = new MaterialIcon('PANORAMA', 584, 'panorama');
    MaterialIcon$PANORAMA_FISH_EYE_instance = new MaterialIcon('PANORAMA_FISH_EYE', 585, 'panorama_fish_eye');
    MaterialIcon$PANORAMA_HORIZONTAL_instance = new MaterialIcon('PANORAMA_HORIZONTAL', 586, 'panorama_horizontal');
    MaterialIcon$PANORAMA_VERTICAL_instance = new MaterialIcon('PANORAMA_VERTICAL', 587, 'panorama_vertical');
    MaterialIcon$PANORAMA_WIDE_ANGLE_instance = new MaterialIcon('PANORAMA_WIDE_ANGLE', 588, 'panorama_wide_angle');
    MaterialIcon$PARTY_MODE_instance = new MaterialIcon('PARTY_MODE', 589, 'party_mode');
    MaterialIcon$PAUSE_instance = new MaterialIcon('PAUSE', 590, 'pause');
    MaterialIcon$PAUSE_CIRCLE_FILLED_instance = new MaterialIcon('PAUSE_CIRCLE_FILLED', 591, 'pause_circle_filled');
    MaterialIcon$PAUSE_CIRCLE_OUTLINE_instance = new MaterialIcon('PAUSE_CIRCLE_OUTLINE', 592, 'pause_circle_outline');
    MaterialIcon$PAYMENT_instance = new MaterialIcon('PAYMENT', 593, 'payment');
    MaterialIcon$PEOPLE_instance = new MaterialIcon('PEOPLE', 594, 'people');
    MaterialIcon$PEOPLE_OUTLINE_instance = new MaterialIcon('PEOPLE_OUTLINE', 595, 'people_outline');
    MaterialIcon$PERM_CAMERA_MIC_instance = new MaterialIcon('PERM_CAMERA_MIC', 596, 'perm_camera_mic');
    MaterialIcon$PERM_CONTACT_CALENDAR_instance = new MaterialIcon('PERM_CONTACT_CALENDAR', 597, 'perm_contact_calendar');
    MaterialIcon$PERM_DATA_SETTING_instance = new MaterialIcon('PERM_DATA_SETTING', 598, 'perm_data_setting');
    MaterialIcon$PERM_DEVICE_INFORMATION_instance = new MaterialIcon('PERM_DEVICE_INFORMATION', 599, 'perm_device_information');
    MaterialIcon$PERM_IDENTITY_instance = new MaterialIcon('PERM_IDENTITY', 600, 'perm_identity');
    MaterialIcon$PERM_MEDIA_instance = new MaterialIcon('PERM_MEDIA', 601, 'perm_media');
    MaterialIcon$PERM_PHONE_MSG_instance = new MaterialIcon('PERM_PHONE_MSG', 602, 'perm_phone_msg');
    MaterialIcon$PERM_SCAN_WIFI_instance = new MaterialIcon('PERM_SCAN_WIFI', 603, 'perm_scan_wifi');
    MaterialIcon$PERSON_instance = new MaterialIcon('PERSON', 604, 'person');
    MaterialIcon$PERSON_ADD_instance = new MaterialIcon('PERSON_ADD', 605, 'person_add');
    MaterialIcon$PERSON_OUTLINE_instance = new MaterialIcon('PERSON_OUTLINE', 606, 'person_outline');
    MaterialIcon$PERSON_PIN_instance = new MaterialIcon('PERSON_PIN', 607, 'person_pin');
    MaterialIcon$PERSON_PIN_CIRCLE_instance = new MaterialIcon('PERSON_PIN_CIRCLE', 608, 'person_pin_circle');
    MaterialIcon$PERSONAL_VIDEO_instance = new MaterialIcon('PERSONAL_VIDEO', 609, 'personal_video');
    MaterialIcon$PETS_instance = new MaterialIcon('PETS', 610, 'pets');
    MaterialIcon$PHONE_instance = new MaterialIcon('PHONE', 611, 'phone');
    MaterialIcon$PHONE_ANDROID_instance = new MaterialIcon('PHONE_ANDROID', 612, 'phone_android');
    MaterialIcon$PHONE_BLUETOOTH_SPEAKER_instance = new MaterialIcon('PHONE_BLUETOOTH_SPEAKER', 613, 'phone_bluetooth_speaker');
    MaterialIcon$PHONE_FORWARDED_instance = new MaterialIcon('PHONE_FORWARDED', 614, 'phone_forwarded');
    MaterialIcon$PHONE_IN_TALK_instance = new MaterialIcon('PHONE_IN_TALK', 615, 'phone_in_talk');
    MaterialIcon$PHONE_IPHONE_instance = new MaterialIcon('PHONE_IPHONE', 616, 'phone_iphone ');
    MaterialIcon$PHONE_LOCKED_instance = new MaterialIcon('PHONE_LOCKED', 617, 'phone_locked ');
    MaterialIcon$PHONE_MISSED_instance = new MaterialIcon('PHONE_MISSED', 618, 'phone_missed ');
    MaterialIcon$PHONE_PAUSED_instance = new MaterialIcon('PHONE_PAUSED', 619, 'phone_paused ');
    MaterialIcon$PHONELINK_instance = new MaterialIcon('PHONELINK', 620, 'phonelink');
    MaterialIcon$PHONELINK_ERASE_instance = new MaterialIcon('PHONELINK_ERASE', 621, 'phonelink_erase');
    MaterialIcon$PHONELINK_LOCK_instance = new MaterialIcon('PHONELINK_LOCK', 622, 'phonelink_lock');
    MaterialIcon$PHONELINK_OFF_instance = new MaterialIcon('PHONELINK_OFF', 623, 'phonelink_off');
    MaterialIcon$PHONELINK_RING_instance = new MaterialIcon('PHONELINK_RING', 624, 'phonelink_ring');
    MaterialIcon$PHONELINK_SETUP_instance = new MaterialIcon('PHONELINK_SETUP', 625, 'phonelink_setup');
    MaterialIcon$PHOTO_instance = new MaterialIcon('PHOTO', 626, 'photo');
    MaterialIcon$PHOTO_ALBUM_instance = new MaterialIcon('PHOTO_ALBUM', 627, 'photo_album');
    MaterialIcon$PHOTO_CAMERA_instance = new MaterialIcon('PHOTO_CAMERA', 628, 'photo_camera ');
    MaterialIcon$PHOTO_FILTER_instance = new MaterialIcon('PHOTO_FILTER', 629, 'photo_filter ');
    MaterialIcon$PHOTO_LIBRARY_instance = new MaterialIcon('PHOTO_LIBRARY', 630, 'photo_library');
    MaterialIcon$PHOTO_SIZE_SELECT_ACTUAL_instance = new MaterialIcon('PHOTO_SIZE_SELECT_ACTUAL', 631, 'photo_size_select_actual');
    MaterialIcon$PHOTO_SIZE_SELECT_LARGE_instance = new MaterialIcon('PHOTO_SIZE_SELECT_LARGE', 632, 'photo_size_select_large');
    MaterialIcon$PHOTO_SIZE_SELECT_SMALL_instance = new MaterialIcon('PHOTO_SIZE_SELECT_SMALL', 633, 'photo_size_select_small');
    MaterialIcon$PICTURE_AS_PDF_instance = new MaterialIcon('PICTURE_AS_PDF', 634, 'picture_as_pdf');
    MaterialIcon$PICTURE_IN_PICTURE_instance = new MaterialIcon('PICTURE_IN_PICTURE', 635, 'picture_in_picture');
    MaterialIcon$PICTURE_IN_PICTURE_ALT_instance = new MaterialIcon('PICTURE_IN_PICTURE_ALT', 636, 'picture_in_picture_alt');
    MaterialIcon$PIE_CHART_instance = new MaterialIcon('PIE_CHART', 637, 'pie_chart');
    MaterialIcon$PIE_CHART_OUTLINED_instance = new MaterialIcon('PIE_CHART_OUTLINED', 638, 'pie_chart_outlined');
    MaterialIcon$PIN_DROP_instance = new MaterialIcon('PIN_DROP', 639, 'pin_drop');
    MaterialIcon$PLACE_instance = new MaterialIcon('PLACE', 640, 'place');
    MaterialIcon$PLAY_ARROW_instance = new MaterialIcon('PLAY_ARROW', 641, 'play_arrow');
    MaterialIcon$PLAY_CIRCLE_FILLED_instance = new MaterialIcon('PLAY_CIRCLE_FILLED', 642, 'play_circle_filled');
    MaterialIcon$PLAY_CIRCLE_OUTLINE_instance = new MaterialIcon('PLAY_CIRCLE_OUTLINE', 643, 'play_circle_outline');
    MaterialIcon$PLAY_FOR_WORK_instance = new MaterialIcon('PLAY_FOR_WORK', 644, 'play_for_work');
    MaterialIcon$PLAYLIST_ADD_instance = new MaterialIcon('PLAYLIST_ADD', 645, 'playlist_add ');
    MaterialIcon$PLAYLIST_ADD_CHECK_instance = new MaterialIcon('PLAYLIST_ADD_CHECK', 646, 'playlist_add_check');
    MaterialIcon$PLAYLIST_PLAY_instance = new MaterialIcon('PLAYLIST_PLAY', 647, 'playlist_play');
    MaterialIcon$PLUS_ONE_instance = new MaterialIcon('PLUS_ONE', 648, 'plus_one');
    MaterialIcon$POLL_instance = new MaterialIcon('POLL', 649, 'poll');
    MaterialIcon$POLYMER_instance = new MaterialIcon('POLYMER', 650, 'polymer');
    MaterialIcon$POOL_instance = new MaterialIcon('POOL', 651, 'pool');
    MaterialIcon$PORTABLE_WIFI_OFF_instance = new MaterialIcon('PORTABLE_WIFI_OFF', 652, 'portable_wifi_off');
    MaterialIcon$PORTRAIT_instance = new MaterialIcon('PORTRAIT', 653, 'portrait');
    MaterialIcon$POWER_instance = new MaterialIcon('POWER', 654, 'power');
    MaterialIcon$POWER_INPUT_instance = new MaterialIcon('POWER_INPUT', 655, 'power_input');
    MaterialIcon$POWER_SETTINGS_NEW_instance = new MaterialIcon('POWER_SETTINGS_NEW', 656, 'power_settings_new');
    MaterialIcon$PREGNANT_WOMAN_instance = new MaterialIcon('PREGNANT_WOMAN', 657, 'pregnant_woman');
    MaterialIcon$PRESENT_TO_ALL_instance = new MaterialIcon('PRESENT_TO_ALL', 658, 'present_to_all');
    MaterialIcon$PRINT_instance = new MaterialIcon('PRINT', 659, 'print');
    MaterialIcon$PRIORITY_HIGH_instance = new MaterialIcon('PRIORITY_HIGH', 660, 'priority_high');
    MaterialIcon$PUBLIC_instance = new MaterialIcon('PUBLIC', 661, 'public');
    MaterialIcon$PUBLISH_instance = new MaterialIcon('PUBLISH', 662, 'publish');
    MaterialIcon$QUERY_BUILDER_instance = new MaterialIcon('QUERY_BUILDER', 663, 'query_builder');
    MaterialIcon$QUESTION_ANSWER_instance = new MaterialIcon('QUESTION_ANSWER', 664, 'question_answer');
    MaterialIcon$QUEUE_instance = new MaterialIcon('QUEUE', 665, 'queue');
    MaterialIcon$QUEUE_MUSIC_instance = new MaterialIcon('QUEUE_MUSIC', 666, 'queue_music');
    MaterialIcon$QUEUE_PLAY_NEXT_instance = new MaterialIcon('QUEUE_PLAY_NEXT', 667, 'queue_play_next');
    MaterialIcon$RADIO_instance = new MaterialIcon('RADIO', 668, 'radio');
    MaterialIcon$RADIO_BUTTON_CHECKED_instance = new MaterialIcon('RADIO_BUTTON_CHECKED', 669, 'radio_button_checked');
    MaterialIcon$RADIO_BUTTON_UNCHECKED_instance = new MaterialIcon('RADIO_BUTTON_UNCHECKED', 670, 'radio_button_unchecked');
    MaterialIcon$RATE_REVIEW_instance = new MaterialIcon('RATE_REVIEW', 671, 'rate_review');
    MaterialIcon$RECEIPT_instance = new MaterialIcon('RECEIPT', 672, 'receipt');
    MaterialIcon$RECENT_ACTORS_instance = new MaterialIcon('RECENT_ACTORS', 673, 'recent_actors');
    MaterialIcon$RECORD_VOICE_OVER_instance = new MaterialIcon('RECORD_VOICE_OVER', 674, 'record_voice_over');
    MaterialIcon$RM_instance = new MaterialIcon('RM', 675, 'rm');
    MaterialIcon$REDO_instance = new MaterialIcon('REDO', 676, 'redo');
    MaterialIcon$REFRESH_instance = new MaterialIcon('REFRESH', 677, 'refresh');
    MaterialIcon$REMOVE_instance = new MaterialIcon('REMOVE', 678, 'remove');
    MaterialIcon$REMOVE_CIRCLE_instance = new MaterialIcon('REMOVE_CIRCLE', 679, 'remove_circle');
    MaterialIcon$REMOVE_CIRCLE_OUTLINE_instance = new MaterialIcon('REMOVE_CIRCLE_OUTLINE', 680, 'remove_circle_outline');
    MaterialIcon$REMOVE_FROM_QUEUE_instance = new MaterialIcon('REMOVE_FROM_QUEUE', 681, 'remove_from_queue');
    MaterialIcon$REMOVE_RED_EYE_instance = new MaterialIcon('REMOVE_RED_EYE', 682, 'remove_red_eye');
    MaterialIcon$REMOVE_SHOPPING_CART_instance = new MaterialIcon('REMOVE_SHOPPING_CART', 683, 'remove_shopping_cart');
    MaterialIcon$REORDER_instance = new MaterialIcon('REORDER', 684, 'reorder');
    MaterialIcon$REPEAT_instance = new MaterialIcon('REPEAT', 685, 'repeat');
    MaterialIcon$REPEAT_ONE_instance = new MaterialIcon('REPEAT_ONE', 686, 'repeat_one');
    MaterialIcon$REPLAY_instance = new MaterialIcon('REPLAY', 687, 'replay');
    MaterialIcon$REPLAY_10_instance = new MaterialIcon('REPLAY_10', 688, 'replay_10');
    MaterialIcon$REPLAY_30_instance = new MaterialIcon('REPLAY_30', 689, 'replay_30');
    MaterialIcon$REPLAY_5_instance = new MaterialIcon('REPLAY_5', 690, 'replay_5');
    MaterialIcon$REPLY_instance = new MaterialIcon('REPLY', 691, 'reply');
    MaterialIcon$REPLY_ALL_instance = new MaterialIcon('REPLY_ALL', 692, 'reply_all');
    MaterialIcon$REPORT_instance = new MaterialIcon('REPORT', 693, 'report');
    MaterialIcon$REPORT_PROBLEM_instance = new MaterialIcon('REPORT_PROBLEM', 694, 'report_problem');
    MaterialIcon$RESTAURANT_instance = new MaterialIcon('RESTAURANT', 695, 'restaurant');
    MaterialIcon$RESTAURANT_MENU_instance = new MaterialIcon('RESTAURANT_MENU', 696, 'restaurant_menu');
    MaterialIcon$RESTORE_instance = new MaterialIcon('RESTORE', 697, 'restore');
    MaterialIcon$RESTORE_PAGE_instance = new MaterialIcon('RESTORE_PAGE', 698, 'restore_page ');
    MaterialIcon$RING_VOLUME_instance = new MaterialIcon('RING_VOLUME', 699, 'ring_volume');
    MaterialIcon$ROOM_instance = new MaterialIcon('ROOM', 700, 'room');
    MaterialIcon$ROOM_SERVICE_instance = new MaterialIcon('ROOM_SERVICE', 701, 'room_service ');
    MaterialIcon$ROTATE_90_DEGREES_CCW_instance = new MaterialIcon('ROTATE_90_DEGREES_CCW', 702, 'rotate_90_degrees_ccw');
    MaterialIcon$ROTATE_LEFT_instance = new MaterialIcon('ROTATE_LEFT', 703, 'rotate_left');
    MaterialIcon$ROTATE_RIGHT_instance = new MaterialIcon('ROTATE_RIGHT', 704, 'rotate_right ');
    MaterialIcon$ROUNDED_CORNER_instance = new MaterialIcon('ROUNDED_CORNER', 705, 'rounded_corner');
    MaterialIcon$ROUTER_instance = new MaterialIcon('ROUTER', 706, 'router');
    MaterialIcon$ROWING_instance = new MaterialIcon('ROWING', 707, 'rowing');
    MaterialIcon$RSS_FEED_instance = new MaterialIcon('RSS_FEED', 708, 'rss_feed');
    MaterialIcon$RV_HOOKUP_instance = new MaterialIcon('RV_HOOKUP', 709, 'rv_hookup');
    MaterialIcon$SATELLITE_instance = new MaterialIcon('SATELLITE', 710, 'satellite');
    MaterialIcon$SAVE_instance = new MaterialIcon('SAVE', 711, 'save');
    MaterialIcon$SCANNER_instance = new MaterialIcon('SCANNER', 712, 'scanner');
    MaterialIcon$SCHEDULE_instance = new MaterialIcon('SCHEDULE', 713, 'schedule');
    MaterialIcon$SCHOOL_instance = new MaterialIcon('SCHOOL', 714, 'school');
    MaterialIcon$SCREEN_LOCK_LANDSCAPE_instance = new MaterialIcon('SCREEN_LOCK_LANDSCAPE', 715, 'screen_lock_landscape');
    MaterialIcon$SCREEN_LOCK_PORTRAIT_instance = new MaterialIcon('SCREEN_LOCK_PORTRAIT', 716, 'screen_lock_portrait');
    MaterialIcon$SCREEN_LOCK_ROTATION_instance = new MaterialIcon('SCREEN_LOCK_ROTATION', 717, 'screen_lock_rotation');
    MaterialIcon$SCREEN_ROTATION_instance = new MaterialIcon('SCREEN_ROTATION', 718, 'screen_rotation');
    MaterialIcon$SCREEN_SHARE_instance = new MaterialIcon('SCREEN_SHARE', 719, 'screen_share ');
    MaterialIcon$SD_CARD_instance = new MaterialIcon('SD_CARD', 720, 'sd_card');
    MaterialIcon$SD_STORAGE_instance = new MaterialIcon('SD_STORAGE', 721, 'sd_storage');
    MaterialIcon$SEARCH_instance = new MaterialIcon('SEARCH', 722, 'search');
    MaterialIcon$SECURITY_instance = new MaterialIcon('SECURITY', 723, 'security');
    MaterialIcon$SELECT_ALL_instance = new MaterialIcon('SELECT_ALL', 724, 'select_all');
    MaterialIcon$SEND_instance = new MaterialIcon('SEND', 725, 'send');
    MaterialIcon$SENTIMENT_DISSATISFIED_instance = new MaterialIcon('SENTIMENT_DISSATISFIED', 726, 'sentiment_dissatisfied');
    MaterialIcon$SENTIMENT_NEUTRAL_instance = new MaterialIcon('SENTIMENT_NEUTRAL', 727, 'sentiment_neutral');
    MaterialIcon$SENTIMENT_SATISFIED_instance = new MaterialIcon('SENTIMENT_SATISFIED', 728, 'sentiment_satisfied');
    MaterialIcon$SENTIMENT_VERY_DISSATISFIED_instance = new MaterialIcon('SENTIMENT_VERY_DISSATISFIED', 729, 'sentiment_very_dissatisfied');
    MaterialIcon$SENTIMENT_VERY_SATISFIED_instance = new MaterialIcon('SENTIMENT_VERY_SATISFIED', 730, 'sentiment_very_satisfied');
    MaterialIcon$SETTINGS_instance = new MaterialIcon('SETTINGS', 731, 'settings');
    MaterialIcon$SETTINGS_APPLICATIONS_instance = new MaterialIcon('SETTINGS_APPLICATIONS', 732, 'settings_applications');
    MaterialIcon$SETTINGS_BACKUP_RESTORE_instance = new MaterialIcon('SETTINGS_BACKUP_RESTORE', 733, 'settings_backup_restore');
    MaterialIcon$SETTINGS_BLUETOOTH_instance = new MaterialIcon('SETTINGS_BLUETOOTH', 734, 'settings_bluetooth');
    MaterialIcon$SETTINGS_BRIGHTNESS_instance = new MaterialIcon('SETTINGS_BRIGHTNESS', 735, 'settings_brightness');
    MaterialIcon$SETTINGS_CELL_instance = new MaterialIcon('SETTINGS_CELL', 736, 'settings_cell');
    MaterialIcon$SETTINGS_ETHERNET_instance = new MaterialIcon('SETTINGS_ETHERNET', 737, 'settings_ethernet');
    MaterialIcon$SETTINGS_INPUT_ANTENNA_instance = new MaterialIcon('SETTINGS_INPUT_ANTENNA', 738, 'settings_input_antenna');
    MaterialIcon$SETTINGS_INPUT_COMPONENT_instance = new MaterialIcon('SETTINGS_INPUT_COMPONENT', 739, 'settings_input_component');
    MaterialIcon$SETTINGS_INPUT_COMPOSITE_instance = new MaterialIcon('SETTINGS_INPUT_COMPOSITE', 740, 'settings_input_composite');
    MaterialIcon$SETTINGS_INPUT_HDMI_instance = new MaterialIcon('SETTINGS_INPUT_HDMI', 741, 'settings_input_hdmi');
    MaterialIcon$SETTINGS_INPUT_SVIDEO_instance = new MaterialIcon('SETTINGS_INPUT_SVIDEO', 742, 'settings_input_svideo');
    MaterialIcon$SETTINGS_OVERSCAN_instance = new MaterialIcon('SETTINGS_OVERSCAN', 743, 'settings_overscan');
    MaterialIcon$SETTINGS_PHONE_instance = new MaterialIcon('SETTINGS_PHONE', 744, 'settings_phone');
    MaterialIcon$SETTINGS_POWER_instance = new MaterialIcon('SETTINGS_POWER', 745, 'settings_power');
    MaterialIcon$SETTINGS_REMOTE_instance = new MaterialIcon('SETTINGS_REMOTE', 746, 'settings_remote');
    MaterialIcon$SETTINGS_SYSTEM_DAYDREAM_instance = new MaterialIcon('SETTINGS_SYSTEM_DAYDREAM', 747, 'settings_system_daydream');
    MaterialIcon$SETTINGS_VOICE_instance = new MaterialIcon('SETTINGS_VOICE', 748, 'settings_voice');
    MaterialIcon$SHARE_instance = new MaterialIcon('SHARE', 749, 'share');
    MaterialIcon$SHOP_instance = new MaterialIcon('SHOP', 750, 'shop');
    MaterialIcon$SHOP_TWO_instance = new MaterialIcon('SHOP_TWO', 751, 'shop_two');
    MaterialIcon$SHOPPING_BASKET_instance = new MaterialIcon('SHOPPING_BASKET', 752, 'shopping_basket');
    MaterialIcon$SHOPPING_CART_instance = new MaterialIcon('SHOPPING_CART', 753, 'shopping_cart');
    MaterialIcon$SHORT_TEXT_instance = new MaterialIcon('SHORT_TEXT', 754, 'short_text');
    MaterialIcon$SHOW_CHART_instance = new MaterialIcon('SHOW_CHART', 755, 'show_chart');
    MaterialIcon$SHUFFLE_instance = new MaterialIcon('SHUFFLE', 756, 'shuffle');
    MaterialIcon$SIGNAL_CELLULAR_4_BAR_instance = new MaterialIcon('SIGNAL_CELLULAR_4_BAR', 757, 'signal_cellular_4_bar');
    MaterialIcon$SIGNAL_CELLULAR_CONNECTED_NO_INTERNET_4_BAR_instance = new MaterialIcon('SIGNAL_CELLULAR_CONNECTED_NO_INTERNET_4_BAR', 758, 'signal_cellular_connected_no_internet_4_bar');
    MaterialIcon$SIGNAL_CELLULAR_NO_SIM_instance = new MaterialIcon('SIGNAL_CELLULAR_NO_SIM', 759, 'signal_cellular_no_sim');
    MaterialIcon$SIGNAL_CELLULAR_NULL_instance = new MaterialIcon('SIGNAL_CELLULAR_NULL', 760, 'signal_cellular_null');
    MaterialIcon$SIGNAL_CELLULAR_OFF_instance = new MaterialIcon('SIGNAL_CELLULAR_OFF', 761, 'signal_cellular_off');
    MaterialIcon$SIGNAL_WIFI_4_BAR_instance = new MaterialIcon('SIGNAL_WIFI_4_BAR', 762, 'signal_wifi_4_bar');
    MaterialIcon$SIGNAL_WIFI_4_BAR_LOCK_instance = new MaterialIcon('SIGNAL_WIFI_4_BAR_LOCK', 763, 'signal_wifi_4_bar_lock');
    MaterialIcon$SIGNAL_WIFI_OFF_instance = new MaterialIcon('SIGNAL_WIFI_OFF', 764, 'signal_wifi_off');
    MaterialIcon$SIM_CARD_instance = new MaterialIcon('SIM_CARD', 765, 'sim_card');
    MaterialIcon$SIM_CARD_ALERT_instance = new MaterialIcon('SIM_CARD_ALERT', 766, 'sim_card_alert');
    MaterialIcon$SKIP_NEXT_instance = new MaterialIcon('SKIP_NEXT', 767, 'skip_next');
    MaterialIcon$SKIP_PREVIOUS_instance = new MaterialIcon('SKIP_PREVIOUS', 768, 'skip_previous');
    MaterialIcon$SLIDESHOW_instance = new MaterialIcon('SLIDESHOW', 769, 'slideshow');
    MaterialIcon$SLOW_MOTION_VIDEO_instance = new MaterialIcon('SLOW_MOTION_VIDEO', 770, 'slow_motion_video');
    MaterialIcon$SMARTPHONE_instance = new MaterialIcon('SMARTPHONE', 771, 'smartphone');
    MaterialIcon$SMOKE_FREE_instance = new MaterialIcon('SMOKE_FREE', 772, 'smoke_free');
    MaterialIcon$SMOKING_ROOMS_instance = new MaterialIcon('SMOKING_ROOMS', 773, 'smoking_rooms');
    MaterialIcon$SMS_instance = new MaterialIcon('SMS', 774, 'sms');
    MaterialIcon$SMS_FAILED_instance = new MaterialIcon('SMS_FAILED', 775, 'sms_failed');
    MaterialIcon$SNOOZE_instance = new MaterialIcon('SNOOZE', 776, 'snooze');
    MaterialIcon$SORT_instance = new MaterialIcon('SORT', 777, 'sort');
    MaterialIcon$SORT_BY_ALPHA_instance = new MaterialIcon('SORT_BY_ALPHA', 778, 'sort_by_alpha');
    MaterialIcon$SPA_instance = new MaterialIcon('SPA', 779, 'spa');
    MaterialIcon$SPACE_BAR_instance = new MaterialIcon('SPACE_BAR', 780, 'space_bar');
    MaterialIcon$SPEAKER_instance = new MaterialIcon('SPEAKER', 781, 'speaker');
    MaterialIcon$SPEAKER_GROUP_instance = new MaterialIcon('SPEAKER_GROUP', 782, 'speaker_group');
    MaterialIcon$SPEAKER_NOTES_instance = new MaterialIcon('SPEAKER_NOTES', 783, 'speaker_notes');
    MaterialIcon$SPEAKER_NOTES_OFF_instance = new MaterialIcon('SPEAKER_NOTES_OFF', 784, 'speaker_notes_off');
    MaterialIcon$SPEAKER_PHONE_instance = new MaterialIcon('SPEAKER_PHONE', 785, 'speaker_phone');
    MaterialIcon$SPELLCHECK_instance = new MaterialIcon('SPELLCHECK', 786, 'spellcheck');
    MaterialIcon$STAR_instance = new MaterialIcon('STAR', 787, 'star');
    MaterialIcon$STAR_BORDER_instance = new MaterialIcon('STAR_BORDER', 788, 'star_border');
    MaterialIcon$STAR_HALF_instance = new MaterialIcon('STAR_HALF', 789, 'star_half');
    MaterialIcon$STARS_instance = new MaterialIcon('STARS', 790, 'stars');
    MaterialIcon$STAY_CURRENT_LANDSCAPE_instance = new MaterialIcon('STAY_CURRENT_LANDSCAPE', 791, 'stay_current_landscape');
    MaterialIcon$STAY_CURRENT_PORTRAIT_instance = new MaterialIcon('STAY_CURRENT_PORTRAIT', 792, 'stay_current_portrait');
    MaterialIcon$STAY_PRIMARY_LANDSCAPE_instance = new MaterialIcon('STAY_PRIMARY_LANDSCAPE', 793, 'stay_primary_landscape');
    MaterialIcon$STAY_PRIMARY_PORTRAIT_instance = new MaterialIcon('STAY_PRIMARY_PORTRAIT', 794, 'stay_primary_portrait');
    MaterialIcon$STOP_instance = new MaterialIcon('STOP', 795, 'stop');
    MaterialIcon$STOP_SCREEN_SHARE_instance = new MaterialIcon('STOP_SCREEN_SHARE', 796, 'stop_screen_share');
    MaterialIcon$STORAGE_instance = new MaterialIcon('STORAGE', 797, 'storage');
    MaterialIcon$STORE_instance = new MaterialIcon('STORE', 798, 'store');
    MaterialIcon$STORE_MALL_DIRECTORY_instance = new MaterialIcon('STORE_MALL_DIRECTORY', 799, 'store_mall_directory');
    MaterialIcon$STRAIGHTEN_instance = new MaterialIcon('STRAIGHTEN', 800, 'straighten');
    MaterialIcon$STREETVIEW_instance = new MaterialIcon('STREETVIEW', 801, 'streetview');
    MaterialIcon$STRIKETHROUGH_S_instance = new MaterialIcon('STRIKETHROUGH_S', 802, 'strikethrough_s');
    MaterialIcon$STYLE_instance = new MaterialIcon('STYLE', 803, 'style');
    MaterialIcon$SUBDIRECTORY_ARROW_LEFT_instance = new MaterialIcon('SUBDIRECTORY_ARROW_LEFT', 804, 'subdirectory_arrow_left');
    MaterialIcon$SUBDIRECTORY_ARROW_RIGHT_instance = new MaterialIcon('SUBDIRECTORY_ARROW_RIGHT', 805, 'subdirectory_arrow_right');
    MaterialIcon$SUBJECT_instance = new MaterialIcon('SUBJECT', 806, 'subject');
    MaterialIcon$SUBSCRIPTIONS_instance = new MaterialIcon('SUBSCRIPTIONS', 807, 'subscriptions');
    MaterialIcon$SUBTITLES_instance = new MaterialIcon('SUBTITLES', 808, 'subtitles');
    MaterialIcon$SUBWAY_instance = new MaterialIcon('SUBWAY', 809, 'subway');
    MaterialIcon$SUPERVISOR_ACCOUNT_instance = new MaterialIcon('SUPERVISOR_ACCOUNT', 810, 'supervisor_account');
    MaterialIcon$SURROUND_SOUND_instance = new MaterialIcon('SURROUND_SOUND', 811, 'surround_sound');
    MaterialIcon$SWAP_CALLS_instance = new MaterialIcon('SWAP_CALLS', 812, 'swap_calls');
    MaterialIcon$SWAP_HORIZ_instance = new MaterialIcon('SWAP_HORIZ', 813, 'swap_horiz');
    MaterialIcon$SWAP_VERT_instance = new MaterialIcon('SWAP_VERT', 814, 'swap_vert');
    MaterialIcon$SWAP_VERTICAL_CIRCLE_instance = new MaterialIcon('SWAP_VERTICAL_CIRCLE', 815, 'swap_vertical_circle');
    MaterialIcon$SWITCH_CAMERA_instance = new MaterialIcon('SWITCH_CAMERA', 816, 'switch_camera');
    MaterialIcon$SWITCH_VIDEO_instance = new MaterialIcon('SWITCH_VIDEO', 817, 'switch_video ');
    MaterialIcon$SYNC_instance = new MaterialIcon('SYNC', 818, 'sync');
    MaterialIcon$SYNC_DISABLED_instance = new MaterialIcon('SYNC_DISABLED', 819, 'sync_disabled');
    MaterialIcon$SYNC_PROBLEM_instance = new MaterialIcon('SYNC_PROBLEM', 820, 'sync_problem ');
    MaterialIcon$SYSTEM_UPDATE_instance = new MaterialIcon('SYSTEM_UPDATE', 821, 'system_update');
    MaterialIcon$SYSTEM_UPDATE_ALT_instance = new MaterialIcon('SYSTEM_UPDATE_ALT', 822, 'system_update_alt');
    MaterialIcon$TAB_instance = new MaterialIcon('TAB', 823, 'tab');
    MaterialIcon$TAB_UNSELECTED_instance = new MaterialIcon('TAB_UNSELECTED', 824, 'tab_unselected');
    MaterialIcon$TABLET_instance = new MaterialIcon('TABLET', 825, 'tablet');
    MaterialIcon$TABLET_ANDROID_instance = new MaterialIcon('TABLET_ANDROID', 826, 'tablet_android');
    MaterialIcon$TABLET_MAC_instance = new MaterialIcon('TABLET_MAC', 827, 'tablet_mac');
    MaterialIcon$TAG_FACES_instance = new MaterialIcon('TAG_FACES', 828, 'tag_faces');
    MaterialIcon$TAP_AND_PLAY_instance = new MaterialIcon('TAP_AND_PLAY', 829, 'tap_and_play ');
    MaterialIcon$TERRAIN_instance = new MaterialIcon('TERRAIN', 830, 'terrain');
    MaterialIcon$TEXT_FIELDS_instance = new MaterialIcon('TEXT_FIELDS', 831, 'text_fields');
    MaterialIcon$TEXT_FORMAT_instance = new MaterialIcon('TEXT_FORMAT', 832, 'text_format');
    MaterialIcon$TEXTSMS_instance = new MaterialIcon('TEXTSMS', 833, 'textsms');
    MaterialIcon$TEXTURE_instance = new MaterialIcon('TEXTURE', 834, 'texture');
    MaterialIcon$THEATERS_instance = new MaterialIcon('THEATERS', 835, 'theaters');
    MaterialIcon$THUMB_DOWN_instance = new MaterialIcon('THUMB_DOWN', 836, 'thumb_down');
    MaterialIcon$THUMB_UP_instance = new MaterialIcon('THUMB_UP', 837, 'thumb_up');
    MaterialIcon$THUMBS_UP_DOWN_instance = new MaterialIcon('THUMBS_UP_DOWN', 838, 'thumbs_up_down');
    MaterialIcon$TIME_TO_LEAVE_instance = new MaterialIcon('TIME_TO_LEAVE', 839, 'time_to_leave');
    MaterialIcon$TIMELAPSE_instance = new MaterialIcon('TIMELAPSE', 840, 'timelapse');
    MaterialIcon$TIMELINE_instance = new MaterialIcon('TIMELINE', 841, 'timeline');
    MaterialIcon$TIMER_instance = new MaterialIcon('TIMER', 842, 'timer');
    MaterialIcon$TIMER_10_instance = new MaterialIcon('TIMER_10', 843, 'timer_10');
    MaterialIcon$TIMER_3_instance = new MaterialIcon('TIMER_3', 844, 'timer_3');
    MaterialIcon$TIMER_OFF_instance = new MaterialIcon('TIMER_OFF', 845, 'timer_off');
    MaterialIcon$TITLE_instance = new MaterialIcon('TITLE', 846, 'title');
    MaterialIcon$TOC_instance = new MaterialIcon('TOC', 847, 'toc');
    MaterialIcon$TODAY_instance = new MaterialIcon('TODAY', 848, 'today');
    MaterialIcon$TOLL_instance = new MaterialIcon('TOLL', 849, 'toll');
    MaterialIcon$TONALITY_instance = new MaterialIcon('TONALITY', 850, 'tonality');
    MaterialIcon$TOUCH_APP_instance = new MaterialIcon('TOUCH_APP', 851, 'touch_app');
    MaterialIcon$TOYS_instance = new MaterialIcon('TOYS', 852, 'toys');
    MaterialIcon$TRACK_CHANGES_instance = new MaterialIcon('TRACK_CHANGES', 853, 'track_changes');
    MaterialIcon$TRAFFIC_instance = new MaterialIcon('TRAFFIC', 854, 'traffic');
    MaterialIcon$TRAIN_instance = new MaterialIcon('TRAIN', 855, 'train');
    MaterialIcon$TRAM_instance = new MaterialIcon('TRAM', 856, 'tram');
    MaterialIcon$TRANSFER_WITHIN_A_STATION_instance = new MaterialIcon('TRANSFER_WITHIN_A_STATION', 857, 'transfer_within_a_station');
    MaterialIcon$TRANSFORM_instance = new MaterialIcon('TRANSFORM', 858, 'transform');
    MaterialIcon$TRANSLATE_instance = new MaterialIcon('TRANSLATE', 859, 'translate');
    MaterialIcon$TRENDING_DOWN_instance = new MaterialIcon('TRENDING_DOWN', 860, 'trending_down');
    MaterialIcon$TRENDING_FLAT_instance = new MaterialIcon('TRENDING_FLAT', 861, 'trending_flat');
    MaterialIcon$TRENDING_UP_instance = new MaterialIcon('TRENDING_UP', 862, 'trending_up');
    MaterialIcon$TUNE_instance = new MaterialIcon('TUNE', 863, 'tune');
    MaterialIcon$TURNED_IN_instance = new MaterialIcon('TURNED_IN', 864, 'turned_in');
    MaterialIcon$TURNED_IN_NOT_instance = new MaterialIcon('TURNED_IN_NOT', 865, 'turned_in_not');
    MaterialIcon$TV_instance = new MaterialIcon('TV', 866, 'tv');
    MaterialIcon$UNARCHIVE_instance = new MaterialIcon('UNARCHIVE', 867, 'unarchive');
    MaterialIcon$UNDO_instance = new MaterialIcon('UNDO', 868, 'undo');
    MaterialIcon$UNFOLD_LESS_instance = new MaterialIcon('UNFOLD_LESS', 869, 'unfold_less');
    MaterialIcon$UNFOLD_MORE_instance = new MaterialIcon('UNFOLD_MORE', 870, 'unfold_more');
    MaterialIcon$UPDATE_instance = new MaterialIcon('UPDATE', 871, 'update');
    MaterialIcon$USB_instance = new MaterialIcon('USB', 872, 'usb');
    MaterialIcon$VERIFIED_USER_instance = new MaterialIcon('VERIFIED_USER', 873, 'verified_user');
    MaterialIcon$VERTICAL_ALIGN_BOTTOM_instance = new MaterialIcon('VERTICAL_ALIGN_BOTTOM', 874, 'vertical_align_bottom');
    MaterialIcon$VERTICAL_ALIGN_CENTER_instance = new MaterialIcon('VERTICAL_ALIGN_CENTER', 875, 'vertical_align_center');
    MaterialIcon$VERTICAL_ALIGN_TOP_instance = new MaterialIcon('VERTICAL_ALIGN_TOP', 876, 'vertical_align_top');
    MaterialIcon$VIBRATION_instance = new MaterialIcon('VIBRATION', 877, 'vibration');
    MaterialIcon$VIDEO_CALL_instance = new MaterialIcon('VIDEO_CALL', 878, 'video_call');
    MaterialIcon$VIDEO_LABEL_instance = new MaterialIcon('VIDEO_LABEL', 879, 'video_label');
    MaterialIcon$VIDEO_LIBRARY_instance = new MaterialIcon('VIDEO_LIBRARY', 880, 'video_library');
    MaterialIcon$VIDEOCAM_instance = new MaterialIcon('VIDEOCAM', 881, 'videocam');
    MaterialIcon$VIDEOCAM_OFF_instance = new MaterialIcon('VIDEOCAM_OFF', 882, 'videocam_off ');
    MaterialIcon$VIDEOGAME_ASSET_instance = new MaterialIcon('VIDEOGAME_ASSET', 883, 'videogame_asset');
    MaterialIcon$VIEW_AGENDA_instance = new MaterialIcon('VIEW_AGENDA', 884, 'view_agenda');
    MaterialIcon$VIEW_ARRAY_instance = new MaterialIcon('VIEW_ARRAY', 885, 'view_array');
    MaterialIcon$VIEW_CAROUSEL_instance = new MaterialIcon('VIEW_CAROUSEL', 886, 'view_carousel');
    MaterialIcon$VIEW_COLUMN_instance = new MaterialIcon('VIEW_COLUMN', 887, 'view_column');
    MaterialIcon$VIEW_COMFY_instance = new MaterialIcon('VIEW_COMFY', 888, 'view_comfy');
    MaterialIcon$VIEW_COMPACT_instance = new MaterialIcon('VIEW_COMPACT', 889, 'view_compact ');
    MaterialIcon$VIEW_DAY_instance = new MaterialIcon('VIEW_DAY', 890, 'view_day');
    MaterialIcon$VIEW_HEADLINE_instance = new MaterialIcon('VIEW_HEADLINE', 891, 'view_headline');
    MaterialIcon$VIEW_LIST_instance = new MaterialIcon('VIEW_LIST', 892, 'view_list');
    MaterialIcon$VIEW_MODULE_instance = new MaterialIcon('VIEW_MODULE', 893, 'view_module');
    MaterialIcon$VIEW_QUILT_instance = new MaterialIcon('VIEW_QUILT', 894, 'view_quilt');
    MaterialIcon$VIEW_STREAM_instance = new MaterialIcon('VIEW_STREAM', 895, 'view_stream');
    MaterialIcon$VIEW_WEEK_instance = new MaterialIcon('VIEW_WEEK', 896, 'view_week');
    MaterialIcon$VIGNETTE_instance = new MaterialIcon('VIGNETTE', 897, 'vignette');
    MaterialIcon$VISIBILITY_instance = new MaterialIcon('VISIBILITY', 898, 'visibility');
    MaterialIcon$VISIBILITY_OFF_instance = new MaterialIcon('VISIBILITY_OFF', 899, 'visibility_off');
    MaterialIcon$VOICE_CHAT_instance = new MaterialIcon('VOICE_CHAT', 900, 'voice_chat');
    MaterialIcon$VOICEMAIL_instance = new MaterialIcon('VOICEMAIL', 901, 'voicemail');
    MaterialIcon$VOLUME_DOWN_instance = new MaterialIcon('VOLUME_DOWN', 902, 'volume_down');
    MaterialIcon$VOLUME_MUTE_instance = new MaterialIcon('VOLUME_MUTE', 903, 'volume_mute');
    MaterialIcon$VOLUME_OFF_instance = new MaterialIcon('VOLUME_OFF', 904, 'volume_off');
    MaterialIcon$VOLUME_UP_instance = new MaterialIcon('VOLUME_UP', 905, 'volume_up');
    MaterialIcon$VPN_KEY_instance = new MaterialIcon('VPN_KEY', 906, 'vpn_key');
    MaterialIcon$VPN_LOCK_instance = new MaterialIcon('VPN_LOCK', 907, 'vpn_lock');
    MaterialIcon$WALLPAPER_instance = new MaterialIcon('WALLPAPER', 908, 'wallpaper');
    MaterialIcon$WARNING_instance = new MaterialIcon('WARNING', 909, 'warning');
    MaterialIcon$WATCH_instance = new MaterialIcon('WATCH', 910, 'watch');
    MaterialIcon$WATCH_LATER_instance = new MaterialIcon('WATCH_LATER', 911, 'watch_later');
    MaterialIcon$WB_AUTO_instance = new MaterialIcon('WB_AUTO', 912, 'wb_auto');
    MaterialIcon$WB_CLOUDY_instance = new MaterialIcon('WB_CLOUDY', 913, 'wb_cloudy');
    MaterialIcon$WB_INCANDESCENT_instance = new MaterialIcon('WB_INCANDESCENT', 914, 'wb_incandescent');
    MaterialIcon$WB_IRIDESCENT_instance = new MaterialIcon('WB_IRIDESCENT', 915, 'wb_iridescent');
    MaterialIcon$WB_SUNNY_instance = new MaterialIcon('WB_SUNNY', 916, 'wb_sunny');
    MaterialIcon$WC_instance = new MaterialIcon('WC', 917, 'wc');
    MaterialIcon$WEB_instance = new MaterialIcon('WEB', 918, 'web');
    MaterialIcon$WEB_ASSET_instance = new MaterialIcon('WEB_ASSET', 919, 'web_asset');
    MaterialIcon$WEEKEND_instance = new MaterialIcon('WEEKEND', 920, 'weekend');
    MaterialIcon$WHATSHOT_instance = new MaterialIcon('WHATSHOT', 921, 'whatshot');
    MaterialIcon$WIDGETS_instance = new MaterialIcon('WIDGETS', 922, 'widgets');
    MaterialIcon$WIFI_instance = new MaterialIcon('WIFI', 923, 'wifi');
    MaterialIcon$WIFI_LOCK_instance = new MaterialIcon('WIFI_LOCK', 924, 'wifi_lock');
    MaterialIcon$WIFI_TETHERING_instance = new MaterialIcon('WIFI_TETHERING', 925, 'wifi_tethering');
    MaterialIcon$WORK_instance = new MaterialIcon('WORK', 926, 'work');
    MaterialIcon$WRAP_TEXT_instance = new MaterialIcon('WRAP_TEXT', 927, 'wrap_text');
    MaterialIcon$YOUTUBE_SEARCHED_FOR_instance = new MaterialIcon('YOUTUBE_SEARCHED_FOR', 928, 'youtube_searched_for');
    MaterialIcon$ZOOM_IN_instance = new MaterialIcon('ZOOM_IN', 929, 'zoom_in');
    MaterialIcon$ZOOM_OUT_instance = new MaterialIcon('ZOOM_OUT', 930, 'zoom_out');
    MaterialIcon$ZOOM_OUT_MAP_instance = new MaterialIcon('ZOOM_OUT_MAP', 931, 'zoom_out_map ');
  }
  var MaterialIcon$ROTATION_3D_instance;
  function MaterialIcon$ROTATION_3D_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ROTATION_3D_instance;
  }
  var MaterialIcon$AC_UNIT_instance;
  function MaterialIcon$AC_UNIT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AC_UNIT_instance;
  }
  var MaterialIcon$ACCESS_ALARM_instance;
  function MaterialIcon$ACCESS_ALARM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ACCESS_ALARM_instance;
  }
  var MaterialIcon$ACCESS_ALARMS_instance;
  function MaterialIcon$ACCESS_ALARMS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ACCESS_ALARMS_instance;
  }
  var MaterialIcon$ACCESS_TIME_instance;
  function MaterialIcon$ACCESS_TIME_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ACCESS_TIME_instance;
  }
  var MaterialIcon$ACCESSIBILITY_instance;
  function MaterialIcon$ACCESSIBILITY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ACCESSIBILITY_instance;
  }
  var MaterialIcon$ACCESSIBLE_instance;
  function MaterialIcon$ACCESSIBLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ACCESSIBLE_instance;
  }
  var MaterialIcon$ACCOUNT_BALANCE_instance;
  function MaterialIcon$ACCOUNT_BALANCE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ACCOUNT_BALANCE_instance;
  }
  var MaterialIcon$ACCOUNT_BALANCE_WALLET_instance;
  function MaterialIcon$ACCOUNT_BALANCE_WALLET_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ACCOUNT_BALANCE_WALLET_instance;
  }
  var MaterialIcon$ACCOUNT_BOX_instance;
  function MaterialIcon$ACCOUNT_BOX_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ACCOUNT_BOX_instance;
  }
  var MaterialIcon$ACCOUNT_CIRCLE_instance;
  function MaterialIcon$ACCOUNT_CIRCLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ACCOUNT_CIRCLE_instance;
  }
  var MaterialIcon$ADB_instance;
  function MaterialIcon$ADB_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ADB_instance;
  }
  var MaterialIcon$ADD_instance;
  function MaterialIcon$ADD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ADD_instance;
  }
  var MaterialIcon$ADD_A_PHOTO_instance;
  function MaterialIcon$ADD_A_PHOTO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ADD_A_PHOTO_instance;
  }
  var MaterialIcon$ADD_ALARM_instance;
  function MaterialIcon$ADD_ALARM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ADD_ALARM_instance;
  }
  var MaterialIcon$ADD_ALERT_instance;
  function MaterialIcon$ADD_ALERT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ADD_ALERT_instance;
  }
  var MaterialIcon$ADD_BOX_instance;
  function MaterialIcon$ADD_BOX_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ADD_BOX_instance;
  }
  var MaterialIcon$ADD_CIRCLE_instance;
  function MaterialIcon$ADD_CIRCLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ADD_CIRCLE_instance;
  }
  var MaterialIcon$ADD_CIRCLE_OUTLINE_instance;
  function MaterialIcon$ADD_CIRCLE_OUTLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ADD_CIRCLE_OUTLINE_instance;
  }
  var MaterialIcon$ADD_LOCATION_instance;
  function MaterialIcon$ADD_LOCATION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ADD_LOCATION_instance;
  }
  var MaterialIcon$ADD_SHOPPING_CART_instance;
  function MaterialIcon$ADD_SHOPPING_CART_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ADD_SHOPPING_CART_instance;
  }
  var MaterialIcon$ADD_TO_PHOTOS_instance;
  function MaterialIcon$ADD_TO_PHOTOS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ADD_TO_PHOTOS_instance;
  }
  var MaterialIcon$ADD_TO_QUEUE_instance;
  function MaterialIcon$ADD_TO_QUEUE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ADD_TO_QUEUE_instance;
  }
  var MaterialIcon$ADJUST_instance;
  function MaterialIcon$ADJUST_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ADJUST_instance;
  }
  var MaterialIcon$AIRLINE_SEAT_FLAT_instance;
  function MaterialIcon$AIRLINE_SEAT_FLAT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AIRLINE_SEAT_FLAT_instance;
  }
  var MaterialIcon$AIRLINE_SEAT_FLAT_ANGLED_instance;
  function MaterialIcon$AIRLINE_SEAT_FLAT_ANGLED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AIRLINE_SEAT_FLAT_ANGLED_instance;
  }
  var MaterialIcon$AIRLINE_SEAT_INDIVIDUAL_SUITE_instance;
  function MaterialIcon$AIRLINE_SEAT_INDIVIDUAL_SUITE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AIRLINE_SEAT_INDIVIDUAL_SUITE_instance;
  }
  var MaterialIcon$AIRLINE_SEAT_LEGROOM_EXTRA_instance;
  function MaterialIcon$AIRLINE_SEAT_LEGROOM_EXTRA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AIRLINE_SEAT_LEGROOM_EXTRA_instance;
  }
  var MaterialIcon$AIRLINE_SEAT_LEGROOM_NORMAL_instance;
  function MaterialIcon$AIRLINE_SEAT_LEGROOM_NORMAL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AIRLINE_SEAT_LEGROOM_NORMAL_instance;
  }
  var MaterialIcon$AIRLINE_SEAT_LEGROOM_REDUCED_instance;
  function MaterialIcon$AIRLINE_SEAT_LEGROOM_REDUCED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AIRLINE_SEAT_LEGROOM_REDUCED_instance;
  }
  var MaterialIcon$AIRLINE_SEAT_RECLINE_EXTRA_instance;
  function MaterialIcon$AIRLINE_SEAT_RECLINE_EXTRA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AIRLINE_SEAT_RECLINE_EXTRA_instance;
  }
  var MaterialIcon$AIRLINE_SEAT_RECLINE_NORMAL_instance;
  function MaterialIcon$AIRLINE_SEAT_RECLINE_NORMAL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AIRLINE_SEAT_RECLINE_NORMAL_instance;
  }
  var MaterialIcon$AIRPLANEMODE_ACTIVE_instance;
  function MaterialIcon$AIRPLANEMODE_ACTIVE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AIRPLANEMODE_ACTIVE_instance;
  }
  var MaterialIcon$AIRPLANEMODE_INACTIVE_instance;
  function MaterialIcon$AIRPLANEMODE_INACTIVE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AIRPLANEMODE_INACTIVE_instance;
  }
  var MaterialIcon$AIRPLAY_instance;
  function MaterialIcon$AIRPLAY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AIRPLAY_instance;
  }
  var MaterialIcon$AIRPORT_SHUTTLE_instance;
  function MaterialIcon$AIRPORT_SHUTTLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AIRPORT_SHUTTLE_instance;
  }
  var MaterialIcon$ALARM_instance;
  function MaterialIcon$ALARM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ALARM_instance;
  }
  var MaterialIcon$ALARM_ADD_instance;
  function MaterialIcon$ALARM_ADD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ALARM_ADD_instance;
  }
  var MaterialIcon$ALARM_OFF_instance;
  function MaterialIcon$ALARM_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ALARM_OFF_instance;
  }
  var MaterialIcon$ALARM_ON_instance;
  function MaterialIcon$ALARM_ON_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ALARM_ON_instance;
  }
  var MaterialIcon$ALBUM_instance;
  function MaterialIcon$ALBUM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ALBUM_instance;
  }
  var MaterialIcon$ALL_INCLUSIVE_instance;
  function MaterialIcon$ALL_INCLUSIVE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ALL_INCLUSIVE_instance;
  }
  var MaterialIcon$ALL_OUT_instance;
  function MaterialIcon$ALL_OUT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ALL_OUT_instance;
  }
  var MaterialIcon$ANDROID_instance;
  function MaterialIcon$ANDROID_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ANDROID_instance;
  }
  var MaterialIcon$ANNOUNCEMENT_instance;
  function MaterialIcon$ANNOUNCEMENT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ANNOUNCEMENT_instance;
  }
  var MaterialIcon$APPS_instance;
  function MaterialIcon$APPS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$APPS_instance;
  }
  var MaterialIcon$ARCHIVE_instance;
  function MaterialIcon$ARCHIVE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ARCHIVE_instance;
  }
  var MaterialIcon$ARROW_BACK_instance;
  function MaterialIcon$ARROW_BACK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ARROW_BACK_instance;
  }
  var MaterialIcon$ARROW_DOWNWARD_instance;
  function MaterialIcon$ARROW_DOWNWARD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ARROW_DOWNWARD_instance;
  }
  var MaterialIcon$ARROW_DROP_DOWN_instance;
  function MaterialIcon$ARROW_DROP_DOWN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ARROW_DROP_DOWN_instance;
  }
  var MaterialIcon$ARROW_DROP_DOWN_CIRCLE_instance;
  function MaterialIcon$ARROW_DROP_DOWN_CIRCLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ARROW_DROP_DOWN_CIRCLE_instance;
  }
  var MaterialIcon$ARROW_DROP_UP_instance;
  function MaterialIcon$ARROW_DROP_UP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ARROW_DROP_UP_instance;
  }
  var MaterialIcon$ARROW_FORWARD_instance;
  function MaterialIcon$ARROW_FORWARD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ARROW_FORWARD_instance;
  }
  var MaterialIcon$ARROW_UPWARD_instance;
  function MaterialIcon$ARROW_UPWARD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ARROW_UPWARD_instance;
  }
  var MaterialIcon$ART_TRACK_instance;
  function MaterialIcon$ART_TRACK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ART_TRACK_instance;
  }
  var MaterialIcon$ASPECT_RATIO_instance;
  function MaterialIcon$ASPECT_RATIO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ASPECT_RATIO_instance;
  }
  var MaterialIcon$ASSESSMENT_instance;
  function MaterialIcon$ASSESSMENT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ASSESSMENT_instance;
  }
  var MaterialIcon$ASSIGNMENT_instance;
  function MaterialIcon$ASSIGNMENT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ASSIGNMENT_instance;
  }
  var MaterialIcon$ASSIGNMENT_IND_instance;
  function MaterialIcon$ASSIGNMENT_IND_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ASSIGNMENT_IND_instance;
  }
  var MaterialIcon$ASSIGNMENT_LATE_instance;
  function MaterialIcon$ASSIGNMENT_LATE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ASSIGNMENT_LATE_instance;
  }
  var MaterialIcon$ASSIGNMENT_RETURN_instance;
  function MaterialIcon$ASSIGNMENT_RETURN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ASSIGNMENT_RETURN_instance;
  }
  var MaterialIcon$ASSIGNMENT_RETURNED_instance;
  function MaterialIcon$ASSIGNMENT_RETURNED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ASSIGNMENT_RETURNED_instance;
  }
  var MaterialIcon$ASSIGNMENT_TURNED_IN_instance;
  function MaterialIcon$ASSIGNMENT_TURNED_IN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ASSIGNMENT_TURNED_IN_instance;
  }
  var MaterialIcon$ASSISTANT_instance;
  function MaterialIcon$ASSISTANT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ASSISTANT_instance;
  }
  var MaterialIcon$ASSISTANT_PHOTO_instance;
  function MaterialIcon$ASSISTANT_PHOTO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ASSISTANT_PHOTO_instance;
  }
  var MaterialIcon$ATTACH_FILE_instance;
  function MaterialIcon$ATTACH_FILE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ATTACH_FILE_instance;
  }
  var MaterialIcon$ATTACH_MONEY_instance;
  function MaterialIcon$ATTACH_MONEY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ATTACH_MONEY_instance;
  }
  var MaterialIcon$ATTACHMENT_instance;
  function MaterialIcon$ATTACHMENT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ATTACHMENT_instance;
  }
  var MaterialIcon$AUDIOTRACK_instance;
  function MaterialIcon$AUDIOTRACK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AUDIOTRACK_instance;
  }
  var MaterialIcon$AUTORENEW_instance;
  function MaterialIcon$AUTORENEW_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AUTORENEW_instance;
  }
  var MaterialIcon$AV_TIMER_instance;
  function MaterialIcon$AV_TIMER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AV_TIMER_instance;
  }
  var MaterialIcon$BACKSPACE_instance;
  function MaterialIcon$BACKSPACE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BACKSPACE_instance;
  }
  var MaterialIcon$BACKUP_instance;
  function MaterialIcon$BACKUP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BACKUP_instance;
  }
  var MaterialIcon$BATTERY_ALERT_instance;
  function MaterialIcon$BATTERY_ALERT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BATTERY_ALERT_instance;
  }
  var MaterialIcon$BATTERY_CHARGING_FULL_instance;
  function MaterialIcon$BATTERY_CHARGING_FULL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BATTERY_CHARGING_FULL_instance;
  }
  var MaterialIcon$BATTERY_FULL_instance;
  function MaterialIcon$BATTERY_FULL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BATTERY_FULL_instance;
  }
  var MaterialIcon$BATTERY_STD_instance;
  function MaterialIcon$BATTERY_STD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BATTERY_STD_instance;
  }
  var MaterialIcon$BATTERY_UNKNOWN_instance;
  function MaterialIcon$BATTERY_UNKNOWN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BATTERY_UNKNOWN_instance;
  }
  var MaterialIcon$BEACH_ACCESS_instance;
  function MaterialIcon$BEACH_ACCESS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BEACH_ACCESS_instance;
  }
  var MaterialIcon$BEENHERE_instance;
  function MaterialIcon$BEENHERE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BEENHERE_instance;
  }
  var MaterialIcon$BLOCK_instance;
  function MaterialIcon$BLOCK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BLOCK_instance;
  }
  var MaterialIcon$BLUETOOTH_instance;
  function MaterialIcon$BLUETOOTH_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BLUETOOTH_instance;
  }
  var MaterialIcon$BLUETOOTH_AUDIO_instance;
  function MaterialIcon$BLUETOOTH_AUDIO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BLUETOOTH_AUDIO_instance;
  }
  var MaterialIcon$BLUETOOTH_CONNECTED_instance;
  function MaterialIcon$BLUETOOTH_CONNECTED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BLUETOOTH_CONNECTED_instance;
  }
  var MaterialIcon$BLUETOOTH_DISABLED_instance;
  function MaterialIcon$BLUETOOTH_DISABLED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BLUETOOTH_DISABLED_instance;
  }
  var MaterialIcon$BLUETOOTH_SEARCHING_instance;
  function MaterialIcon$BLUETOOTH_SEARCHING_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BLUETOOTH_SEARCHING_instance;
  }
  var MaterialIcon$BLUR_CIRCULAR_instance;
  function MaterialIcon$BLUR_CIRCULAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BLUR_CIRCULAR_instance;
  }
  var MaterialIcon$BLUR_LINEAR_instance;
  function MaterialIcon$BLUR_LINEAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BLUR_LINEAR_instance;
  }
  var MaterialIcon$BLUR_OFF_instance;
  function MaterialIcon$BLUR_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BLUR_OFF_instance;
  }
  var MaterialIcon$BLUR_ON_instance;
  function MaterialIcon$BLUR_ON_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BLUR_ON_instance;
  }
  var MaterialIcon$BOOK_instance;
  function MaterialIcon$BOOK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BOOK_instance;
  }
  var MaterialIcon$BOOKMARK_instance;
  function MaterialIcon$BOOKMARK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BOOKMARK_instance;
  }
  var MaterialIcon$BOOKMARK_BORDER_instance;
  function MaterialIcon$BOOKMARK_BORDER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BOOKMARK_BORDER_instance;
  }
  var MaterialIcon$BORDER_ALL_instance;
  function MaterialIcon$BORDER_ALL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BORDER_ALL_instance;
  }
  var MaterialIcon$BORDER_BOTTOM_instance;
  function MaterialIcon$BORDER_BOTTOM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BORDER_BOTTOM_instance;
  }
  var MaterialIcon$BORDER_CLEAR_instance;
  function MaterialIcon$BORDER_CLEAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BORDER_CLEAR_instance;
  }
  var MaterialIcon$BORDER_COLOR_instance;
  function MaterialIcon$BORDER_COLOR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BORDER_COLOR_instance;
  }
  var MaterialIcon$BORDER_HORIZONTAL_instance;
  function MaterialIcon$BORDER_HORIZONTAL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BORDER_HORIZONTAL_instance;
  }
  var MaterialIcon$BORDER_INNER_instance;
  function MaterialIcon$BORDER_INNER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BORDER_INNER_instance;
  }
  var MaterialIcon$BORDER_LEFT_instance;
  function MaterialIcon$BORDER_LEFT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BORDER_LEFT_instance;
  }
  var MaterialIcon$BORDER_OUTER_instance;
  function MaterialIcon$BORDER_OUTER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BORDER_OUTER_instance;
  }
  var MaterialIcon$BORDER_RIGHT_instance;
  function MaterialIcon$BORDER_RIGHT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BORDER_RIGHT_instance;
  }
  var MaterialIcon$BORDER_STYLE_instance;
  function MaterialIcon$BORDER_STYLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BORDER_STYLE_instance;
  }
  var MaterialIcon$BORDER_TOP_instance;
  function MaterialIcon$BORDER_TOP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BORDER_TOP_instance;
  }
  var MaterialIcon$BORDER_VERTICAL_instance;
  function MaterialIcon$BORDER_VERTICAL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BORDER_VERTICAL_instance;
  }
  var MaterialIcon$BRANDING_WATERMARK_instance;
  function MaterialIcon$BRANDING_WATERMARK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BRANDING_WATERMARK_instance;
  }
  var MaterialIcon$BRIGHTNESS_1_instance;
  function MaterialIcon$BRIGHTNESS_1_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BRIGHTNESS_1_instance;
  }
  var MaterialIcon$BRIGHTNESS_2_instance;
  function MaterialIcon$BRIGHTNESS_2_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BRIGHTNESS_2_instance;
  }
  var MaterialIcon$BRIGHTNESS_3_instance;
  function MaterialIcon$BRIGHTNESS_3_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BRIGHTNESS_3_instance;
  }
  var MaterialIcon$BRIGHTNESS_4_instance;
  function MaterialIcon$BRIGHTNESS_4_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BRIGHTNESS_4_instance;
  }
  var MaterialIcon$BRIGHTNESS_5_instance;
  function MaterialIcon$BRIGHTNESS_5_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BRIGHTNESS_5_instance;
  }
  var MaterialIcon$BRIGHTNESS_6_instance;
  function MaterialIcon$BRIGHTNESS_6_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BRIGHTNESS_6_instance;
  }
  var MaterialIcon$BRIGHTNESS_7_instance;
  function MaterialIcon$BRIGHTNESS_7_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BRIGHTNESS_7_instance;
  }
  var MaterialIcon$BRIGHTNESS_AUTO_instance;
  function MaterialIcon$BRIGHTNESS_AUTO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BRIGHTNESS_AUTO_instance;
  }
  var MaterialIcon$BRIGHTNESS_HIGH_instance;
  function MaterialIcon$BRIGHTNESS_HIGH_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BRIGHTNESS_HIGH_instance;
  }
  var MaterialIcon$BRIGHTNESS_LOW_instance;
  function MaterialIcon$BRIGHTNESS_LOW_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BRIGHTNESS_LOW_instance;
  }
  var MaterialIcon$BRIGHTNESS_MEDIUM_instance;
  function MaterialIcon$BRIGHTNESS_MEDIUM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BRIGHTNESS_MEDIUM_instance;
  }
  var MaterialIcon$BROKEN_IMAGE_instance;
  function MaterialIcon$BROKEN_IMAGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BROKEN_IMAGE_instance;
  }
  var MaterialIcon$BRUSH_instance;
  function MaterialIcon$BRUSH_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BRUSH_instance;
  }
  var MaterialIcon$BUBBLE_CHART_instance;
  function MaterialIcon$BUBBLE_CHART_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BUBBLE_CHART_instance;
  }
  var MaterialIcon$BUG_REPORT_instance;
  function MaterialIcon$BUG_REPORT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BUG_REPORT_instance;
  }
  var MaterialIcon$BUILD_instance;
  function MaterialIcon$BUILD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BUILD_instance;
  }
  var MaterialIcon$BURST_MODE_instance;
  function MaterialIcon$BURST_MODE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BURST_MODE_instance;
  }
  var MaterialIcon$BUSINESS_instance;
  function MaterialIcon$BUSINESS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BUSINESS_instance;
  }
  var MaterialIcon$BUSINESS_CENTER_instance;
  function MaterialIcon$BUSINESS_CENTER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BUSINESS_CENTER_instance;
  }
  var MaterialIcon$CACHED_instance;
  function MaterialIcon$CACHED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CACHED_instance;
  }
  var MaterialIcon$CAKE_instance;
  function MaterialIcon$CAKE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CAKE_instance;
  }
  var MaterialIcon$CALL_instance;
  function MaterialIcon$CALL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CALL_instance;
  }
  var MaterialIcon$CALL_END_instance;
  function MaterialIcon$CALL_END_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CALL_END_instance;
  }
  var MaterialIcon$CALL_MADE_instance;
  function MaterialIcon$CALL_MADE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CALL_MADE_instance;
  }
  var MaterialIcon$CALL_MERGE_instance;
  function MaterialIcon$CALL_MERGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CALL_MERGE_instance;
  }
  var MaterialIcon$CALL_MISSED_instance;
  function MaterialIcon$CALL_MISSED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CALL_MISSED_instance;
  }
  var MaterialIcon$CALL_MISSED_OUTGOING_instance;
  function MaterialIcon$CALL_MISSED_OUTGOING_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CALL_MISSED_OUTGOING_instance;
  }
  var MaterialIcon$CALL_RECEIVED_instance;
  function MaterialIcon$CALL_RECEIVED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CALL_RECEIVED_instance;
  }
  var MaterialIcon$CALL_SPLIT_instance;
  function MaterialIcon$CALL_SPLIT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CALL_SPLIT_instance;
  }
  var MaterialIcon$CALL_TO_ACTION_instance;
  function MaterialIcon$CALL_TO_ACTION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CALL_TO_ACTION_instance;
  }
  var MaterialIcon$CAMERA_instance;
  function MaterialIcon$CAMERA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CAMERA_instance;
  }
  var MaterialIcon$CAMERA_ALT_instance;
  function MaterialIcon$CAMERA_ALT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CAMERA_ALT_instance;
  }
  var MaterialIcon$CAMERA_ENHANCE_instance;
  function MaterialIcon$CAMERA_ENHANCE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CAMERA_ENHANCE_instance;
  }
  var MaterialIcon$CAMERA_FRONT_instance;
  function MaterialIcon$CAMERA_FRONT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CAMERA_FRONT_instance;
  }
  var MaterialIcon$CAMERA_REAR_instance;
  function MaterialIcon$CAMERA_REAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CAMERA_REAR_instance;
  }
  var MaterialIcon$CAMERA_ROLL_instance;
  function MaterialIcon$CAMERA_ROLL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CAMERA_ROLL_instance;
  }
  var MaterialIcon$CANCEL_instance;
  function MaterialIcon$CANCEL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CANCEL_instance;
  }
  var MaterialIcon$CARD_GIFTCARD_instance;
  function MaterialIcon$CARD_GIFTCARD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CARD_GIFTCARD_instance;
  }
  var MaterialIcon$CARD_MEMBERSHIP_instance;
  function MaterialIcon$CARD_MEMBERSHIP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CARD_MEMBERSHIP_instance;
  }
  var MaterialIcon$CARD_TRAVEL_instance;
  function MaterialIcon$CARD_TRAVEL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CARD_TRAVEL_instance;
  }
  var MaterialIcon$CASINO_instance;
  function MaterialIcon$CASINO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CASINO_instance;
  }
  var MaterialIcon$CAST_instance;
  function MaterialIcon$CAST_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CAST_instance;
  }
  var MaterialIcon$CAST_CONNECTED_instance;
  function MaterialIcon$CAST_CONNECTED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CAST_CONNECTED_instance;
  }
  var MaterialIcon$CENTER_FOCUS_STRONG_instance;
  function MaterialIcon$CENTER_FOCUS_STRONG_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CENTER_FOCUS_STRONG_instance;
  }
  var MaterialIcon$CENTER_FOCUS_WEAK_instance;
  function MaterialIcon$CENTER_FOCUS_WEAK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CENTER_FOCUS_WEAK_instance;
  }
  var MaterialIcon$CHANGE_HISTORY_instance;
  function MaterialIcon$CHANGE_HISTORY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CHANGE_HISTORY_instance;
  }
  var MaterialIcon$CHAT_instance;
  function MaterialIcon$CHAT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CHAT_instance;
  }
  var MaterialIcon$CHAT_BUBBLE_instance;
  function MaterialIcon$CHAT_BUBBLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CHAT_BUBBLE_instance;
  }
  var MaterialIcon$CHAT_BUBBLE_OUTLINE_instance;
  function MaterialIcon$CHAT_BUBBLE_OUTLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CHAT_BUBBLE_OUTLINE_instance;
  }
  var MaterialIcon$CHECK_instance;
  function MaterialIcon$CHECK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CHECK_instance;
  }
  var MaterialIcon$CHECK_BOX_instance;
  function MaterialIcon$CHECK_BOX_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CHECK_BOX_instance;
  }
  var MaterialIcon$CHECK_BOX_OUTLINE_BLANK_instance;
  function MaterialIcon$CHECK_BOX_OUTLINE_BLANK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CHECK_BOX_OUTLINE_BLANK_instance;
  }
  var MaterialIcon$CHECK_CIRCLE_instance;
  function MaterialIcon$CHECK_CIRCLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CHECK_CIRCLE_instance;
  }
  var MaterialIcon$CHEVRON_LEFT_instance;
  function MaterialIcon$CHEVRON_LEFT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CHEVRON_LEFT_instance;
  }
  var MaterialIcon$CHEVRON_RIGHT_instance;
  function MaterialIcon$CHEVRON_RIGHT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CHEVRON_RIGHT_instance;
  }
  var MaterialIcon$CHILD_CARE_instance;
  function MaterialIcon$CHILD_CARE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CHILD_CARE_instance;
  }
  var MaterialIcon$CHILD_FRIENDLY_instance;
  function MaterialIcon$CHILD_FRIENDLY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CHILD_FRIENDLY_instance;
  }
  var MaterialIcon$CHROME_RR_MODE_instance;
  function MaterialIcon$CHROME_RR_MODE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CHROME_RR_MODE_instance;
  }
  var MaterialIcon$CLASS_instance;
  function MaterialIcon$CLASS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CLASS_instance;
  }
  var MaterialIcon$CLEAR_instance;
  function MaterialIcon$CLEAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CLEAR_instance;
  }
  var MaterialIcon$CLEAR_ALL_instance;
  function MaterialIcon$CLEAR_ALL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CLEAR_ALL_instance;
  }
  var MaterialIcon$CLOSE_instance;
  function MaterialIcon$CLOSE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CLOSE_instance;
  }
  var MaterialIcon$CLOSED_CAPTION_instance;
  function MaterialIcon$CLOSED_CAPTION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CLOSED_CAPTION_instance;
  }
  var MaterialIcon$CLOUD_instance;
  function MaterialIcon$CLOUD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CLOUD_instance;
  }
  var MaterialIcon$CLOUD_CIRCLE_instance;
  function MaterialIcon$CLOUD_CIRCLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CLOUD_CIRCLE_instance;
  }
  var MaterialIcon$CLOUD_DONE_instance;
  function MaterialIcon$CLOUD_DONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CLOUD_DONE_instance;
  }
  var MaterialIcon$CLOUD_DOWNLOAD_instance;
  function MaterialIcon$CLOUD_DOWNLOAD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CLOUD_DOWNLOAD_instance;
  }
  var MaterialIcon$CLOUD_OFF_instance;
  function MaterialIcon$CLOUD_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CLOUD_OFF_instance;
  }
  var MaterialIcon$CLOUD_QUEUE_instance;
  function MaterialIcon$CLOUD_QUEUE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CLOUD_QUEUE_instance;
  }
  var MaterialIcon$CLOUD_UPLOAD_instance;
  function MaterialIcon$CLOUD_UPLOAD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CLOUD_UPLOAD_instance;
  }
  var MaterialIcon$CODE_instance;
  function MaterialIcon$CODE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CODE_instance;
  }
  var MaterialIcon$COLLECTIONS_instance;
  function MaterialIcon$COLLECTIONS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$COLLECTIONS_instance;
  }
  var MaterialIcon$COLLECTIONS_BOOKMARK_instance;
  function MaterialIcon$COLLECTIONS_BOOKMARK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$COLLECTIONS_BOOKMARK_instance;
  }
  var MaterialIcon$COLOR_LENS_instance;
  function MaterialIcon$COLOR_LENS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$COLOR_LENS_instance;
  }
  var MaterialIcon$COLORIZE_instance;
  function MaterialIcon$COLORIZE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$COLORIZE_instance;
  }
  var MaterialIcon$COMMENT_instance;
  function MaterialIcon$COMMENT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$COMMENT_instance;
  }
  var MaterialIcon$COMPARE_instance;
  function MaterialIcon$COMPARE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$COMPARE_instance;
  }
  var MaterialIcon$COMPARE_ARROWS_instance;
  function MaterialIcon$COMPARE_ARROWS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$COMPARE_ARROWS_instance;
  }
  var MaterialIcon$COMPUTER_instance;
  function MaterialIcon$COMPUTER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$COMPUTER_instance;
  }
  var MaterialIcon$CONFIRMATION_NUMBER_instance;
  function MaterialIcon$CONFIRMATION_NUMBER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CONFIRMATION_NUMBER_instance;
  }
  var MaterialIcon$CONTACT_MAIL_instance;
  function MaterialIcon$CONTACT_MAIL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CONTACT_MAIL_instance;
  }
  var MaterialIcon$CONTACT_PHONE_instance;
  function MaterialIcon$CONTACT_PHONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CONTACT_PHONE_instance;
  }
  var MaterialIcon$CONTACTS_instance;
  function MaterialIcon$CONTACTS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CONTACTS_instance;
  }
  var MaterialIcon$CONTENT_COPY_instance;
  function MaterialIcon$CONTENT_COPY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CONTENT_COPY_instance;
  }
  var MaterialIcon$CONTENT_CUT_instance;
  function MaterialIcon$CONTENT_CUT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CONTENT_CUT_instance;
  }
  var MaterialIcon$CONTENT_PASTE_instance;
  function MaterialIcon$CONTENT_PASTE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CONTENT_PASTE_instance;
  }
  var MaterialIcon$CONTROL_POINT_instance;
  function MaterialIcon$CONTROL_POINT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CONTROL_POINT_instance;
  }
  var MaterialIcon$CONTROL_POINT_DUPLICATE_instance;
  function MaterialIcon$CONTROL_POINT_DUPLICATE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CONTROL_POINT_DUPLICATE_instance;
  }
  var MaterialIcon$COPYRIGHT_instance;
  function MaterialIcon$COPYRIGHT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$COPYRIGHT_instance;
  }
  var MaterialIcon$CREATE_instance;
  function MaterialIcon$CREATE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CREATE_instance;
  }
  var MaterialIcon$CREATE_NEW_FOLDER_instance;
  function MaterialIcon$CREATE_NEW_FOLDER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CREATE_NEW_FOLDER_instance;
  }
  var MaterialIcon$CREDIT_CARD_instance;
  function MaterialIcon$CREDIT_CARD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CREDIT_CARD_instance;
  }
  var MaterialIcon$CROP_instance;
  function MaterialIcon$CROP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CROP_instance;
  }
  var MaterialIcon$CROP_16_9_instance;
  function MaterialIcon$CROP_16_9_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CROP_16_9_instance;
  }
  var MaterialIcon$CROP_3_2_instance;
  function MaterialIcon$CROP_3_2_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CROP_3_2_instance;
  }
  var MaterialIcon$CROP_5_4_instance;
  function MaterialIcon$CROP_5_4_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CROP_5_4_instance;
  }
  var MaterialIcon$CROP_7_5_instance;
  function MaterialIcon$CROP_7_5_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CROP_7_5_instance;
  }
  var MaterialIcon$CROP_DIN_instance;
  function MaterialIcon$CROP_DIN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CROP_DIN_instance;
  }
  var MaterialIcon$CROP_FREE_instance;
  function MaterialIcon$CROP_FREE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CROP_FREE_instance;
  }
  var MaterialIcon$CROP_LANDSCAPE_instance;
  function MaterialIcon$CROP_LANDSCAPE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CROP_LANDSCAPE_instance;
  }
  var MaterialIcon$CROP_ORIGINAL_instance;
  function MaterialIcon$CROP_ORIGINAL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CROP_ORIGINAL_instance;
  }
  var MaterialIcon$CROP_PORTRAIT_instance;
  function MaterialIcon$CROP_PORTRAIT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CROP_PORTRAIT_instance;
  }
  var MaterialIcon$CROP_ROTATE_instance;
  function MaterialIcon$CROP_ROTATE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CROP_ROTATE_instance;
  }
  var MaterialIcon$CROP_SQUARE_instance;
  function MaterialIcon$CROP_SQUARE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CROP_SQUARE_instance;
  }
  var MaterialIcon$DASHBOARD_instance;
  function MaterialIcon$DASHBOARD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DASHBOARD_instance;
  }
  var MaterialIcon$DATA_USAGE_instance;
  function MaterialIcon$DATA_USAGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DATA_USAGE_instance;
  }
  var MaterialIcon$DATE_RANGE_instance;
  function MaterialIcon$DATE_RANGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DATE_RANGE_instance;
  }
  var MaterialIcon$DEHAZE_instance;
  function MaterialIcon$DEHAZE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DEHAZE_instance;
  }
  var MaterialIcon$DELETE_instance;
  function MaterialIcon$DELETE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DELETE_instance;
  }
  var MaterialIcon$DELETE_FOREVER_instance;
  function MaterialIcon$DELETE_FOREVER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DELETE_FOREVER_instance;
  }
  var MaterialIcon$DELETE_SWEEP_instance;
  function MaterialIcon$DELETE_SWEEP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DELETE_SWEEP_instance;
  }
  var MaterialIcon$DESCRIPTION_instance;
  function MaterialIcon$DESCRIPTION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DESCRIPTION_instance;
  }
  var MaterialIcon$DESKTOP_MAC_instance;
  function MaterialIcon$DESKTOP_MAC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DESKTOP_MAC_instance;
  }
  var MaterialIcon$DESKTOP_WINDOWS_instance;
  function MaterialIcon$DESKTOP_WINDOWS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DESKTOP_WINDOWS_instance;
  }
  var MaterialIcon$DETAILS_instance;
  function MaterialIcon$DETAILS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DETAILS_instance;
  }
  var MaterialIcon$DEVELOPER_BOARD_instance;
  function MaterialIcon$DEVELOPER_BOARD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DEVELOPER_BOARD_instance;
  }
  var MaterialIcon$DEVELOPER_MODE_instance;
  function MaterialIcon$DEVELOPER_MODE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DEVELOPER_MODE_instance;
  }
  var MaterialIcon$DEVICE_HUB_instance;
  function MaterialIcon$DEVICE_HUB_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DEVICE_HUB_instance;
  }
  var MaterialIcon$DEVICES_instance;
  function MaterialIcon$DEVICES_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DEVICES_instance;
  }
  var MaterialIcon$DEVICES_OTHER_instance;
  function MaterialIcon$DEVICES_OTHER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DEVICES_OTHER_instance;
  }
  var MaterialIcon$DIALER_SIP_instance;
  function MaterialIcon$DIALER_SIP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DIALER_SIP_instance;
  }
  var MaterialIcon$DIALPAD_instance;
  function MaterialIcon$DIALPAD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DIALPAD_instance;
  }
  var MaterialIcon$DIRECTIONS_instance;
  function MaterialIcon$DIRECTIONS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DIRECTIONS_instance;
  }
  var MaterialIcon$DIRECTIONS_BIKE_instance;
  function MaterialIcon$DIRECTIONS_BIKE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DIRECTIONS_BIKE_instance;
  }
  var MaterialIcon$DIRECTIONS_BOAT_instance;
  function MaterialIcon$DIRECTIONS_BOAT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DIRECTIONS_BOAT_instance;
  }
  var MaterialIcon$DIRECTIONS_BUS_instance;
  function MaterialIcon$DIRECTIONS_BUS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DIRECTIONS_BUS_instance;
  }
  var MaterialIcon$DIRECTIONS_CAR_instance;
  function MaterialIcon$DIRECTIONS_CAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DIRECTIONS_CAR_instance;
  }
  var MaterialIcon$DIRECTIONS_RAILWAY_instance;
  function MaterialIcon$DIRECTIONS_RAILWAY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DIRECTIONS_RAILWAY_instance;
  }
  var MaterialIcon$DIRECTIONS_RUN_instance;
  function MaterialIcon$DIRECTIONS_RUN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DIRECTIONS_RUN_instance;
  }
  var MaterialIcon$DIRECTIONS_SUBWAY_instance;
  function MaterialIcon$DIRECTIONS_SUBWAY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DIRECTIONS_SUBWAY_instance;
  }
  var MaterialIcon$DIRECTIONS_TRANSIT_instance;
  function MaterialIcon$DIRECTIONS_TRANSIT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DIRECTIONS_TRANSIT_instance;
  }
  var MaterialIcon$DIRECTIONS_WALK_instance;
  function MaterialIcon$DIRECTIONS_WALK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DIRECTIONS_WALK_instance;
  }
  var MaterialIcon$DISC_FULL_instance;
  function MaterialIcon$DISC_FULL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DISC_FULL_instance;
  }
  var MaterialIcon$DNS_instance;
  function MaterialIcon$DNS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DNS_instance;
  }
  var MaterialIcon$DO_NOT_DISTURB_instance;
  function MaterialIcon$DO_NOT_DISTURB_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DO_NOT_DISTURB_instance;
  }
  var MaterialIcon$DO_NOT_DISTURB_ALT_instance;
  function MaterialIcon$DO_NOT_DISTURB_ALT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DO_NOT_DISTURB_ALT_instance;
  }
  var MaterialIcon$DO_NOT_DISTURB_OFF_instance;
  function MaterialIcon$DO_NOT_DISTURB_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DO_NOT_DISTURB_OFF_instance;
  }
  var MaterialIcon$DO_NOT_DISTURB_ON_instance;
  function MaterialIcon$DO_NOT_DISTURB_ON_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DO_NOT_DISTURB_ON_instance;
  }
  var MaterialIcon$DOCK_instance;
  function MaterialIcon$DOCK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DOCK_instance;
  }
  var MaterialIcon$DOMAIN_instance;
  function MaterialIcon$DOMAIN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DOMAIN_instance;
  }
  var MaterialIcon$DONE_instance;
  function MaterialIcon$DONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DONE_instance;
  }
  var MaterialIcon$DONE_ALL_instance;
  function MaterialIcon$DONE_ALL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DONE_ALL_instance;
  }
  var MaterialIcon$DONUT_LARGE_instance;
  function MaterialIcon$DONUT_LARGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DONUT_LARGE_instance;
  }
  var MaterialIcon$DONUT_SMALL_instance;
  function MaterialIcon$DONUT_SMALL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DONUT_SMALL_instance;
  }
  var MaterialIcon$DRAFTS_instance;
  function MaterialIcon$DRAFTS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DRAFTS_instance;
  }
  var MaterialIcon$DRAG_HANDLE_instance;
  function MaterialIcon$DRAG_HANDLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DRAG_HANDLE_instance;
  }
  var MaterialIcon$DRIVE_ETA_instance;
  function MaterialIcon$DRIVE_ETA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DRIVE_ETA_instance;
  }
  var MaterialIcon$DVR_instance;
  function MaterialIcon$DVR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DVR_instance;
  }
  var MaterialIcon$EDIT_instance;
  function MaterialIcon$EDIT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EDIT_instance;
  }
  var MaterialIcon$EDIT_LOCATION_instance;
  function MaterialIcon$EDIT_LOCATION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EDIT_LOCATION_instance;
  }
  var MaterialIcon$EJECT_instance;
  function MaterialIcon$EJECT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EJECT_instance;
  }
  var MaterialIcon$EMAIL_instance;
  function MaterialIcon$EMAIL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EMAIL_instance;
  }
  var MaterialIcon$ENHANCED_ENCRYPTION_instance;
  function MaterialIcon$ENHANCED_ENCRYPTION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ENHANCED_ENCRYPTION_instance;
  }
  var MaterialIcon$EQUALIZER_instance;
  function MaterialIcon$EQUALIZER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EQUALIZER_instance;
  }
  var MaterialIcon$ERROR_instance;
  function MaterialIcon$ERROR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ERROR_instance;
  }
  var MaterialIcon$ERROR_OUTLINE_instance;
  function MaterialIcon$ERROR_OUTLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ERROR_OUTLINE_instance;
  }
  var MaterialIcon$EURO_SYMBOL_instance;
  function MaterialIcon$EURO_SYMBOL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EURO_SYMBOL_instance;
  }
  var MaterialIcon$EV_STATION_instance;
  function MaterialIcon$EV_STATION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EV_STATION_instance;
  }
  var MaterialIcon$EVENT_instance;
  function MaterialIcon$EVENT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EVENT_instance;
  }
  var MaterialIcon$EVENT_AVAILABLE_instance;
  function MaterialIcon$EVENT_AVAILABLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EVENT_AVAILABLE_instance;
  }
  var MaterialIcon$EVENT_BUSY_instance;
  function MaterialIcon$EVENT_BUSY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EVENT_BUSY_instance;
  }
  var MaterialIcon$EVENT_NOTE_instance;
  function MaterialIcon$EVENT_NOTE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EVENT_NOTE_instance;
  }
  var MaterialIcon$EVENT_SEAT_instance;
  function MaterialIcon$EVENT_SEAT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EVENT_SEAT_instance;
  }
  var MaterialIcon$EXIT_TO_APP_instance;
  function MaterialIcon$EXIT_TO_APP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EXIT_TO_APP_instance;
  }
  var MaterialIcon$EXPAND_LESS_instance;
  function MaterialIcon$EXPAND_LESS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EXPAND_LESS_instance;
  }
  var MaterialIcon$EXPAND_MORE_instance;
  function MaterialIcon$EXPAND_MORE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EXPAND_MORE_instance;
  }
  var MaterialIcon$EXPLICIT_instance;
  function MaterialIcon$EXPLICIT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EXPLICIT_instance;
  }
  var MaterialIcon$EXPLORE_instance;
  function MaterialIcon$EXPLORE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EXPLORE_instance;
  }
  var MaterialIcon$EXPOSURE_instance;
  function MaterialIcon$EXPOSURE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EXPOSURE_instance;
  }
  var MaterialIcon$EXPOSURE_NEG_1_instance;
  function MaterialIcon$EXPOSURE_NEG_1_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EXPOSURE_NEG_1_instance;
  }
  var MaterialIcon$EXPOSURE_NEG_2_instance;
  function MaterialIcon$EXPOSURE_NEG_2_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EXPOSURE_NEG_2_instance;
  }
  var MaterialIcon$EXPOSURE_PLUS_1_instance;
  function MaterialIcon$EXPOSURE_PLUS_1_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EXPOSURE_PLUS_1_instance;
  }
  var MaterialIcon$EXPOSURE_PLUS_2_instance;
  function MaterialIcon$EXPOSURE_PLUS_2_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EXPOSURE_PLUS_2_instance;
  }
  var MaterialIcon$EXPOSURE_ZERO_instance;
  function MaterialIcon$EXPOSURE_ZERO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EXPOSURE_ZERO_instance;
  }
  var MaterialIcon$EXTENSION_instance;
  function MaterialIcon$EXTENSION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EXTENSION_instance;
  }
  var MaterialIcon$FACE_instance;
  function MaterialIcon$FACE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FACE_instance;
  }
  var MaterialIcon$FAST_FORWARD_instance;
  function MaterialIcon$FAST_FORWARD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FAST_FORWARD_instance;
  }
  var MaterialIcon$FAST_REWIND_instance;
  function MaterialIcon$FAST_REWIND_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FAST_REWIND_instance;
  }
  var MaterialIcon$FAVORITE_instance;
  function MaterialIcon$FAVORITE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FAVORITE_instance;
  }
  var MaterialIcon$FAVORITE_BORDER_instance;
  function MaterialIcon$FAVORITE_BORDER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FAVORITE_BORDER_instance;
  }
  var MaterialIcon$FEATURED_PLAY_LIST_instance;
  function MaterialIcon$FEATURED_PLAY_LIST_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FEATURED_PLAY_LIST_instance;
  }
  var MaterialIcon$FEATURED_VIDEO_instance;
  function MaterialIcon$FEATURED_VIDEO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FEATURED_VIDEO_instance;
  }
  var MaterialIcon$FACK_instance;
  function MaterialIcon$FACK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FACK_instance;
  }
  var MaterialIcon$FIBER_DVR_instance;
  function MaterialIcon$FIBER_DVR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FIBER_DVR_instance;
  }
  var MaterialIcon$FIBER_MANUAL_RECORD_instance;
  function MaterialIcon$FIBER_MANUAL_RECORD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FIBER_MANUAL_RECORD_instance;
  }
  var MaterialIcon$FIBER_NEW_instance;
  function MaterialIcon$FIBER_NEW_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FIBER_NEW_instance;
  }
  var MaterialIcon$FIBER_PIN_instance;
  function MaterialIcon$FIBER_PIN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FIBER_PIN_instance;
  }
  var MaterialIcon$FIBER_SMART_RECORD_instance;
  function MaterialIcon$FIBER_SMART_RECORD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FIBER_SMART_RECORD_instance;
  }
  var MaterialIcon$FILE_DOWNLOAD_instance;
  function MaterialIcon$FILE_DOWNLOAD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILE_DOWNLOAD_instance;
  }
  var MaterialIcon$FILE_UPLOAD_instance;
  function MaterialIcon$FILE_UPLOAD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILE_UPLOAD_instance;
  }
  var MaterialIcon$FILTER_instance;
  function MaterialIcon$FILTER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_instance;
  }
  var MaterialIcon$FILTER_1_instance;
  function MaterialIcon$FILTER_1_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_1_instance;
  }
  var MaterialIcon$FILTER_2_instance;
  function MaterialIcon$FILTER_2_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_2_instance;
  }
  var MaterialIcon$FILTER_3_instance;
  function MaterialIcon$FILTER_3_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_3_instance;
  }
  var MaterialIcon$FILTER_4_instance;
  function MaterialIcon$FILTER_4_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_4_instance;
  }
  var MaterialIcon$FILTER_5_instance;
  function MaterialIcon$FILTER_5_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_5_instance;
  }
  var MaterialIcon$FILTER_6_instance;
  function MaterialIcon$FILTER_6_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_6_instance;
  }
  var MaterialIcon$FILTER_7_instance;
  function MaterialIcon$FILTER_7_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_7_instance;
  }
  var MaterialIcon$FILTER_8_instance;
  function MaterialIcon$FILTER_8_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_8_instance;
  }
  var MaterialIcon$FILTER_9_instance;
  function MaterialIcon$FILTER_9_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_9_instance;
  }
  var MaterialIcon$FILTER_9_PLUS_instance;
  function MaterialIcon$FILTER_9_PLUS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_9_PLUS_instance;
  }
  var MaterialIcon$FILTER_B_AND_W_instance;
  function MaterialIcon$FILTER_B_AND_W_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_B_AND_W_instance;
  }
  var MaterialIcon$FILTER_CENTER_FOCUS_instance;
  function MaterialIcon$FILTER_CENTER_FOCUS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_CENTER_FOCUS_instance;
  }
  var MaterialIcon$FILTER_DRAMA_instance;
  function MaterialIcon$FILTER_DRAMA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_DRAMA_instance;
  }
  var MaterialIcon$FILTER_FRAMES_instance;
  function MaterialIcon$FILTER_FRAMES_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_FRAMES_instance;
  }
  var MaterialIcon$FILTER_HDR_instance;
  function MaterialIcon$FILTER_HDR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_HDR_instance;
  }
  var MaterialIcon$FILTER_LIST_instance;
  function MaterialIcon$FILTER_LIST_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_LIST_instance;
  }
  var MaterialIcon$FILTER_NONE_instance;
  function MaterialIcon$FILTER_NONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_NONE_instance;
  }
  var MaterialIcon$FILTER_TILT_SHIFT_instance;
  function MaterialIcon$FILTER_TILT_SHIFT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_TILT_SHIFT_instance;
  }
  var MaterialIcon$FILTER_VINTAGE_instance;
  function MaterialIcon$FILTER_VINTAGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_VINTAGE_instance;
  }
  var MaterialIcon$FIND_IN_PAGE_instance;
  function MaterialIcon$FIND_IN_PAGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FIND_IN_PAGE_instance;
  }
  var MaterialIcon$FIND_REPLACE_instance;
  function MaterialIcon$FIND_REPLACE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FIND_REPLACE_instance;
  }
  var MaterialIcon$FINGERPRINT_instance;
  function MaterialIcon$FINGERPRINT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FINGERPRINT_instance;
  }
  var MaterialIcon$FIRST_PAGE_instance;
  function MaterialIcon$FIRST_PAGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FIRST_PAGE_instance;
  }
  var MaterialIcon$FITNESS_CENTER_instance;
  function MaterialIcon$FITNESS_CENTER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FITNESS_CENTER_instance;
  }
  var MaterialIcon$FLAG_instance;
  function MaterialIcon$FLAG_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FLAG_instance;
  }
  var MaterialIcon$FLARE_instance;
  function MaterialIcon$FLARE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FLARE_instance;
  }
  var MaterialIcon$FLASH_AUTO_instance;
  function MaterialIcon$FLASH_AUTO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FLASH_AUTO_instance;
  }
  var MaterialIcon$FLASH_OFF_instance;
  function MaterialIcon$FLASH_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FLASH_OFF_instance;
  }
  var MaterialIcon$FLASH_ON_instance;
  function MaterialIcon$FLASH_ON_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FLASH_ON_instance;
  }
  var MaterialIcon$FLIGHT_instance;
  function MaterialIcon$FLIGHT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FLIGHT_instance;
  }
  var MaterialIcon$FLIGHT_LAND_instance;
  function MaterialIcon$FLIGHT_LAND_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FLIGHT_LAND_instance;
  }
  var MaterialIcon$FLIGHT_TAKEOFF_instance;
  function MaterialIcon$FLIGHT_TAKEOFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FLIGHT_TAKEOFF_instance;
  }
  var MaterialIcon$FLIP_instance;
  function MaterialIcon$FLIP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FLIP_instance;
  }
  var MaterialIcon$FLIP_TO_BACK_instance;
  function MaterialIcon$FLIP_TO_BACK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FLIP_TO_BACK_instance;
  }
  var MaterialIcon$FLIP_TO_FRONT_instance;
  function MaterialIcon$FLIP_TO_FRONT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FLIP_TO_FRONT_instance;
  }
  var MaterialIcon$FOLDER_instance;
  function MaterialIcon$FOLDER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FOLDER_instance;
  }
  var MaterialIcon$FOLDER_OPEN_instance;
  function MaterialIcon$FOLDER_OPEN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FOLDER_OPEN_instance;
  }
  var MaterialIcon$FOLDER_SHARED_instance;
  function MaterialIcon$FOLDER_SHARED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FOLDER_SHARED_instance;
  }
  var MaterialIcon$FOLDER_SPECIAL_instance;
  function MaterialIcon$FOLDER_SPECIAL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FOLDER_SPECIAL_instance;
  }
  var MaterialIcon$FONT_DOWNLOAD_instance;
  function MaterialIcon$FONT_DOWNLOAD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FONT_DOWNLOAD_instance;
  }
  var MaterialIcon$FORMAT_ALIGN_CENTER_instance;
  function MaterialIcon$FORMAT_ALIGN_CENTER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_ALIGN_CENTER_instance;
  }
  var MaterialIcon$FORMAT_ALIGN_JUSTIFY_instance;
  function MaterialIcon$FORMAT_ALIGN_JUSTIFY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_ALIGN_JUSTIFY_instance;
  }
  var MaterialIcon$FORMAT_ALIGN_LEFT_instance;
  function MaterialIcon$FORMAT_ALIGN_LEFT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_ALIGN_LEFT_instance;
  }
  var MaterialIcon$FORMAT_ALIGN_RIGHT_instance;
  function MaterialIcon$FORMAT_ALIGN_RIGHT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_ALIGN_RIGHT_instance;
  }
  var MaterialIcon$FORMAT_BOLD_instance;
  function MaterialIcon$FORMAT_BOLD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_BOLD_instance;
  }
  var MaterialIcon$FORMAT_CLEAR_instance;
  function MaterialIcon$FORMAT_CLEAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_CLEAR_instance;
  }
  var MaterialIcon$FORMAT_COLOR_FILL_instance;
  function MaterialIcon$FORMAT_COLOR_FILL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_COLOR_FILL_instance;
  }
  var MaterialIcon$FORMAT_COLOR_RESET_instance;
  function MaterialIcon$FORMAT_COLOR_RESET_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_COLOR_RESET_instance;
  }
  var MaterialIcon$FORMAT_COLOR_TEXT_instance;
  function MaterialIcon$FORMAT_COLOR_TEXT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_COLOR_TEXT_instance;
  }
  var MaterialIcon$FORMAT_INDENT_DECREASE_instance;
  function MaterialIcon$FORMAT_INDENT_DECREASE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_INDENT_DECREASE_instance;
  }
  var MaterialIcon$FORMAT_INDENT_INCREASE_instance;
  function MaterialIcon$FORMAT_INDENT_INCREASE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_INDENT_INCREASE_instance;
  }
  var MaterialIcon$FORMAT_ITALIC_instance;
  function MaterialIcon$FORMAT_ITALIC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_ITALIC_instance;
  }
  var MaterialIcon$FORMAT_LINE_SPACING_instance;
  function MaterialIcon$FORMAT_LINE_SPACING_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_LINE_SPACING_instance;
  }
  var MaterialIcon$FORMAT_LIST_BULLETED_instance;
  function MaterialIcon$FORMAT_LIST_BULLETED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_LIST_BULLETED_instance;
  }
  var MaterialIcon$FORMAT_LIST_NUMBERED_instance;
  function MaterialIcon$FORMAT_LIST_NUMBERED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_LIST_NUMBERED_instance;
  }
  var MaterialIcon$FORMAT_PAINT_instance;
  function MaterialIcon$FORMAT_PAINT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_PAINT_instance;
  }
  var MaterialIcon$FORMAT_QUOTE_instance;
  function MaterialIcon$FORMAT_QUOTE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_QUOTE_instance;
  }
  var MaterialIcon$FORMAT_SHAPES_instance;
  function MaterialIcon$FORMAT_SHAPES_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_SHAPES_instance;
  }
  var MaterialIcon$FORMAT_SIZE_instance;
  function MaterialIcon$FORMAT_SIZE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_SIZE_instance;
  }
  var MaterialIcon$FORMAT_STRIKETHROUGH_instance;
  function MaterialIcon$FORMAT_STRIKETHROUGH_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_STRIKETHROUGH_instance;
  }
  var MaterialIcon$FORMAT_TEXTDIRECTION_L_TO_R_instance;
  function MaterialIcon$FORMAT_TEXTDIRECTION_L_TO_R_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_TEXTDIRECTION_L_TO_R_instance;
  }
  var MaterialIcon$FORMAT_TEXTDIRECTION_R_TO_L_instance;
  function MaterialIcon$FORMAT_TEXTDIRECTION_R_TO_L_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_TEXTDIRECTION_R_TO_L_instance;
  }
  var MaterialIcon$FORMAT_UNDERLINED_instance;
  function MaterialIcon$FORMAT_UNDERLINED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_UNDERLINED_instance;
  }
  var MaterialIcon$FORUM_instance;
  function MaterialIcon$FORUM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORUM_instance;
  }
  var MaterialIcon$FORWARD_instance;
  function MaterialIcon$FORWARD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORWARD_instance;
  }
  var MaterialIcon$FORWARD_10_instance;
  function MaterialIcon$FORWARD_10_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORWARD_10_instance;
  }
  var MaterialIcon$FORWARD_30_instance;
  function MaterialIcon$FORWARD_30_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORWARD_30_instance;
  }
  var MaterialIcon$FORWARD_5_instance;
  function MaterialIcon$FORWARD_5_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORWARD_5_instance;
  }
  var MaterialIcon$FREE_BREAKFAST_instance;
  function MaterialIcon$FREE_BREAKFAST_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FREE_BREAKFAST_instance;
  }
  var MaterialIcon$FULLSCREEN_instance;
  function MaterialIcon$FULLSCREEN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FULLSCREEN_instance;
  }
  var MaterialIcon$FULLSCREEN_EXIT_instance;
  function MaterialIcon$FULLSCREEN_EXIT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FULLSCREEN_EXIT_instance;
  }
  var MaterialIcon$FUNCTIONS_instance;
  function MaterialIcon$FUNCTIONS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FUNCTIONS_instance;
  }
  var MaterialIcon$G_TRANSLATE_instance;
  function MaterialIcon$G_TRANSLATE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$G_TRANSLATE_instance;
  }
  var MaterialIcon$GAMEPAD_instance;
  function MaterialIcon$GAMEPAD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GAMEPAD_instance;
  }
  var MaterialIcon$GAMES_instance;
  function MaterialIcon$GAMES_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GAMES_instance;
  }
  var MaterialIcon$GAVEL_instance;
  function MaterialIcon$GAVEL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GAVEL_instance;
  }
  var MaterialIcon$GESTURE_instance;
  function MaterialIcon$GESTURE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GESTURE_instance;
  }
  var MaterialIcon$GET_APP_instance;
  function MaterialIcon$GET_APP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GET_APP_instance;
  }
  var MaterialIcon$GIF_instance;
  function MaterialIcon$GIF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GIF_instance;
  }
  var MaterialIcon$GOLF_COURSE_instance;
  function MaterialIcon$GOLF_COURSE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GOLF_COURSE_instance;
  }
  var MaterialIcon$GPS_FIXED_instance;
  function MaterialIcon$GPS_FIXED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GPS_FIXED_instance;
  }
  var MaterialIcon$GPS_NOT_FIXED_instance;
  function MaterialIcon$GPS_NOT_FIXED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GPS_NOT_FIXED_instance;
  }
  var MaterialIcon$GPS_OFF_instance;
  function MaterialIcon$GPS_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GPS_OFF_instance;
  }
  var MaterialIcon$GRADE_instance;
  function MaterialIcon$GRADE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GRADE_instance;
  }
  var MaterialIcon$GRADIENT_instance;
  function MaterialIcon$GRADIENT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GRADIENT_instance;
  }
  var MaterialIcon$GRAIN_instance;
  function MaterialIcon$GRAIN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GRAIN_instance;
  }
  var MaterialIcon$GRAPHIC_EQ_instance;
  function MaterialIcon$GRAPHIC_EQ_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GRAPHIC_EQ_instance;
  }
  var MaterialIcon$GRID_OFF_instance;
  function MaterialIcon$GRID_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GRID_OFF_instance;
  }
  var MaterialIcon$GRID_ON_instance;
  function MaterialIcon$GRID_ON_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GRID_ON_instance;
  }
  var MaterialIcon$GROUP_instance;
  function MaterialIcon$GROUP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GROUP_instance;
  }
  var MaterialIcon$GROUP_ADD_instance;
  function MaterialIcon$GROUP_ADD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GROUP_ADD_instance;
  }
  var MaterialIcon$GROUP_WORK_instance;
  function MaterialIcon$GROUP_WORK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GROUP_WORK_instance;
  }
  var MaterialIcon$HD_instance;
  function MaterialIcon$HD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HD_instance;
  }
  var MaterialIcon$HDR_OFF_instance;
  function MaterialIcon$HDR_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HDR_OFF_instance;
  }
  var MaterialIcon$HDR_ON_instance;
  function MaterialIcon$HDR_ON_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HDR_ON_instance;
  }
  var MaterialIcon$HDR_STRONG_instance;
  function MaterialIcon$HDR_STRONG_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HDR_STRONG_instance;
  }
  var MaterialIcon$HDR_WEAK_instance;
  function MaterialIcon$HDR_WEAK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HDR_WEAK_instance;
  }
  var MaterialIcon$HEADSET_instance;
  function MaterialIcon$HEADSET_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HEADSET_instance;
  }
  var MaterialIcon$HEADSET_MIC_instance;
  function MaterialIcon$HEADSET_MIC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HEADSET_MIC_instance;
  }
  var MaterialIcon$HEALING_instance;
  function MaterialIcon$HEALING_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HEALING_instance;
  }
  var MaterialIcon$HEARING_instance;
  function MaterialIcon$HEARING_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HEARING_instance;
  }
  var MaterialIcon$HELP_instance;
  function MaterialIcon$HELP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HELP_instance;
  }
  var MaterialIcon$HELP_OUTLINE_instance;
  function MaterialIcon$HELP_OUTLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HELP_OUTLINE_instance;
  }
  var MaterialIcon$HIGH_QUALITY_instance;
  function MaterialIcon$HIGH_QUALITY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HIGH_QUALITY_instance;
  }
  var MaterialIcon$HIGHLIGHT_instance;
  function MaterialIcon$HIGHLIGHT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HIGHLIGHT_instance;
  }
  var MaterialIcon$HIGHLIGHT_OFF_instance;
  function MaterialIcon$HIGHLIGHT_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HIGHLIGHT_OFF_instance;
  }
  var MaterialIcon$HISTORY_instance;
  function MaterialIcon$HISTORY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HISTORY_instance;
  }
  var MaterialIcon$HOME_instance;
  function MaterialIcon$HOME_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HOME_instance;
  }
  var MaterialIcon$HOT_TUB_instance;
  function MaterialIcon$HOT_TUB_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HOT_TUB_instance;
  }
  var MaterialIcon$HOTEL_instance;
  function MaterialIcon$HOTEL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HOTEL_instance;
  }
  var MaterialIcon$HOURGLASS_EMPTY_instance;
  function MaterialIcon$HOURGLASS_EMPTY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HOURGLASS_EMPTY_instance;
  }
  var MaterialIcon$HOURGLASS_FULL_instance;
  function MaterialIcon$HOURGLASS_FULL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HOURGLASS_FULL_instance;
  }
  var MaterialIcon$HTTP_instance;
  function MaterialIcon$HTTP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HTTP_instance;
  }
  var MaterialIcon$HTTPS_instance;
  function MaterialIcon$HTTPS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HTTPS_instance;
  }
  var MaterialIcon$IMAGE_instance;
  function MaterialIcon$IMAGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$IMAGE_instance;
  }
  var MaterialIcon$IMAGE_ASPECT_RATIO_instance;
  function MaterialIcon$IMAGE_ASPECT_RATIO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$IMAGE_ASPECT_RATIO_instance;
  }
  var MaterialIcon$IMPORT_CONTACTS_instance;
  function MaterialIcon$IMPORT_CONTACTS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$IMPORT_CONTACTS_instance;
  }
  var MaterialIcon$IMPORT_EXPORT_instance;
  function MaterialIcon$IMPORT_EXPORT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$IMPORT_EXPORT_instance;
  }
  var MaterialIcon$IMPORTANT_DEVICES_instance;
  function MaterialIcon$IMPORTANT_DEVICES_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$IMPORTANT_DEVICES_instance;
  }
  var MaterialIcon$INBOX_instance;
  function MaterialIcon$INBOX_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$INBOX_instance;
  }
  var MaterialIcon$INDETERMINATE_CHECK_BOX_instance;
  function MaterialIcon$INDETERMINATE_CHECK_BOX_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$INDETERMINATE_CHECK_BOX_instance;
  }
  var MaterialIcon$INFO_instance;
  function MaterialIcon$INFO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$INFO_instance;
  }
  var MaterialIcon$INFO_OUTLINE_instance;
  function MaterialIcon$INFO_OUTLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$INFO_OUTLINE_instance;
  }
  var MaterialIcon$INPUT_instance;
  function MaterialIcon$INPUT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$INPUT_instance;
  }
  var MaterialIcon$INSERT_CHART_instance;
  function MaterialIcon$INSERT_CHART_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$INSERT_CHART_instance;
  }
  var MaterialIcon$INSERT_COMMENT_instance;
  function MaterialIcon$INSERT_COMMENT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$INSERT_COMMENT_instance;
  }
  var MaterialIcon$INSERT_DRIVE_FILE_instance;
  function MaterialIcon$INSERT_DRIVE_FILE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$INSERT_DRIVE_FILE_instance;
  }
  var MaterialIcon$INSERT_EMOTICON_instance;
  function MaterialIcon$INSERT_EMOTICON_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$INSERT_EMOTICON_instance;
  }
  var MaterialIcon$INSERT_INVITATION_instance;
  function MaterialIcon$INSERT_INVITATION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$INSERT_INVITATION_instance;
  }
  var MaterialIcon$INSERT_LINK_instance;
  function MaterialIcon$INSERT_LINK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$INSERT_LINK_instance;
  }
  var MaterialIcon$INSERT_PHOTO_instance;
  function MaterialIcon$INSERT_PHOTO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$INSERT_PHOTO_instance;
  }
  var MaterialIcon$INVERT_COLORS_instance;
  function MaterialIcon$INVERT_COLORS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$INVERT_COLORS_instance;
  }
  var MaterialIcon$INVERT_COLORS_OFF_instance;
  function MaterialIcon$INVERT_COLORS_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$INVERT_COLORS_OFF_instance;
  }
  var MaterialIcon$ISO_instance;
  function MaterialIcon$ISO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ISO_instance;
  }
  var MaterialIcon$KEYBOARD_instance;
  function MaterialIcon$KEYBOARD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$KEYBOARD_instance;
  }
  var MaterialIcon$KEYBOARD_ARROW_DOWN_instance;
  function MaterialIcon$KEYBOARD_ARROW_DOWN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$KEYBOARD_ARROW_DOWN_instance;
  }
  var MaterialIcon$KEYBOARD_ARROW_LEFT_instance;
  function MaterialIcon$KEYBOARD_ARROW_LEFT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$KEYBOARD_ARROW_LEFT_instance;
  }
  var MaterialIcon$KEYBOARD_ARROW_RIGHT_instance;
  function MaterialIcon$KEYBOARD_ARROW_RIGHT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$KEYBOARD_ARROW_RIGHT_instance;
  }
  var MaterialIcon$KEYBOARD_ARROW_UP_instance;
  function MaterialIcon$KEYBOARD_ARROW_UP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$KEYBOARD_ARROW_UP_instance;
  }
  var MaterialIcon$KEYBOARD_BACKSPACE_instance;
  function MaterialIcon$KEYBOARD_BACKSPACE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$KEYBOARD_BACKSPACE_instance;
  }
  var MaterialIcon$KEYBOARD_CAPSLOCK_instance;
  function MaterialIcon$KEYBOARD_CAPSLOCK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$KEYBOARD_CAPSLOCK_instance;
  }
  var MaterialIcon$KEYBOARD_HIDE_instance;
  function MaterialIcon$KEYBOARD_HIDE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$KEYBOARD_HIDE_instance;
  }
  var MaterialIcon$KEYBOARD_RETURN_instance;
  function MaterialIcon$KEYBOARD_RETURN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$KEYBOARD_RETURN_instance;
  }
  var MaterialIcon$KEYBOARD_TAB_instance;
  function MaterialIcon$KEYBOARD_TAB_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$KEYBOARD_TAB_instance;
  }
  var MaterialIcon$KEYBOARD_VOICE_instance;
  function MaterialIcon$KEYBOARD_VOICE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$KEYBOARD_VOICE_instance;
  }
  var MaterialIcon$KITCHEN_instance;
  function MaterialIcon$KITCHEN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$KITCHEN_instance;
  }
  var MaterialIcon$LABEL_instance;
  function MaterialIcon$LABEL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LABEL_instance;
  }
  var MaterialIcon$LABEL_OUTLINE_instance;
  function MaterialIcon$LABEL_OUTLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LABEL_OUTLINE_instance;
  }
  var MaterialIcon$LANDSCAPE_instance;
  function MaterialIcon$LANDSCAPE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LANDSCAPE_instance;
  }
  var MaterialIcon$LANGUAGE_instance;
  function MaterialIcon$LANGUAGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LANGUAGE_instance;
  }
  var MaterialIcon$LAPTOP_instance;
  function MaterialIcon$LAPTOP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LAPTOP_instance;
  }
  var MaterialIcon$LAPTOP_CHROMEBOOK_instance;
  function MaterialIcon$LAPTOP_CHROMEBOOK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LAPTOP_CHROMEBOOK_instance;
  }
  var MaterialIcon$LAPTOP_MAC_instance;
  function MaterialIcon$LAPTOP_MAC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LAPTOP_MAC_instance;
  }
  var MaterialIcon$LAPTOP_WINDOWS_instance;
  function MaterialIcon$LAPTOP_WINDOWS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LAPTOP_WINDOWS_instance;
  }
  var MaterialIcon$LAST_PAGE_instance;
  function MaterialIcon$LAST_PAGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LAST_PAGE_instance;
  }
  var MaterialIcon$LAUNCH_instance;
  function MaterialIcon$LAUNCH_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LAUNCH_instance;
  }
  var MaterialIcon$LAYERS_instance;
  function MaterialIcon$LAYERS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LAYERS_instance;
  }
  var MaterialIcon$LAYERS_CLEAR_instance;
  function MaterialIcon$LAYERS_CLEAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LAYERS_CLEAR_instance;
  }
  var MaterialIcon$LEAK_ADD_instance;
  function MaterialIcon$LEAK_ADD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LEAK_ADD_instance;
  }
  var MaterialIcon$LEAK_REMOVE_instance;
  function MaterialIcon$LEAK_REMOVE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LEAK_REMOVE_instance;
  }
  var MaterialIcon$LENS_instance;
  function MaterialIcon$LENS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LENS_instance;
  }
  var MaterialIcon$LIBRARY_ADD_instance;
  function MaterialIcon$LIBRARY_ADD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LIBRARY_ADD_instance;
  }
  var MaterialIcon$LIBRARY_BOOKS_instance;
  function MaterialIcon$LIBRARY_BOOKS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LIBRARY_BOOKS_instance;
  }
  var MaterialIcon$LIBRARY_MUSIC_instance;
  function MaterialIcon$LIBRARY_MUSIC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LIBRARY_MUSIC_instance;
  }
  var MaterialIcon$LIGHTBULB_OUTLINE_instance;
  function MaterialIcon$LIGHTBULB_OUTLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LIGHTBULB_OUTLINE_instance;
  }
  var MaterialIcon$LINE_STYLE_instance;
  function MaterialIcon$LINE_STYLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LINE_STYLE_instance;
  }
  var MaterialIcon$LINE_WEIGHT_instance;
  function MaterialIcon$LINE_WEIGHT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LINE_WEIGHT_instance;
  }
  var MaterialIcon$LINEAR_SCALE_instance;
  function MaterialIcon$LINEAR_SCALE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LINEAR_SCALE_instance;
  }
  var MaterialIcon$LINK_instance;
  function MaterialIcon$LINK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LINK_instance;
  }
  var MaterialIcon$LINKED_CAMERA_instance;
  function MaterialIcon$LINKED_CAMERA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LINKED_CAMERA_instance;
  }
  var MaterialIcon$LIST_instance;
  function MaterialIcon$LIST_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LIST_instance;
  }
  var MaterialIcon$LIVE_HELP_instance;
  function MaterialIcon$LIVE_HELP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LIVE_HELP_instance;
  }
  var MaterialIcon$LIVE_TV_instance;
  function MaterialIcon$LIVE_TV_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LIVE_TV_instance;
  }
  var MaterialIcon$LOCAL_ACTIVITY_instance;
  function MaterialIcon$LOCAL_ACTIVITY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_ACTIVITY_instance;
  }
  var MaterialIcon$LOCAL_AIRPORT_instance;
  function MaterialIcon$LOCAL_AIRPORT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_AIRPORT_instance;
  }
  var MaterialIcon$LOCAL_ATM_instance;
  function MaterialIcon$LOCAL_ATM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_ATM_instance;
  }
  var MaterialIcon$LOCAL_BAR_instance;
  function MaterialIcon$LOCAL_BAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_BAR_instance;
  }
  var MaterialIcon$LOCAL_CAFE_instance;
  function MaterialIcon$LOCAL_CAFE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_CAFE_instance;
  }
  var MaterialIcon$LOCAL_CAR_WASH_instance;
  function MaterialIcon$LOCAL_CAR_WASH_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_CAR_WASH_instance;
  }
  var MaterialIcon$LOCAL_CONVENIENCE_STORE_instance;
  function MaterialIcon$LOCAL_CONVENIENCE_STORE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_CONVENIENCE_STORE_instance;
  }
  var MaterialIcon$LOCAL_DINING_instance;
  function MaterialIcon$LOCAL_DINING_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_DINING_instance;
  }
  var MaterialIcon$LOCAL_DRINK_instance;
  function MaterialIcon$LOCAL_DRINK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_DRINK_instance;
  }
  var MaterialIcon$LOCAL_FLORIST_instance;
  function MaterialIcon$LOCAL_FLORIST_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_FLORIST_instance;
  }
  var MaterialIcon$LOCAL_GAS_STATION_instance;
  function MaterialIcon$LOCAL_GAS_STATION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_GAS_STATION_instance;
  }
  var MaterialIcon$LOCAL_GROCERY_STORE_instance;
  function MaterialIcon$LOCAL_GROCERY_STORE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_GROCERY_STORE_instance;
  }
  var MaterialIcon$LOCAL_HOSPITAL_instance;
  function MaterialIcon$LOCAL_HOSPITAL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_HOSPITAL_instance;
  }
  var MaterialIcon$LOCAL_HOTEL_instance;
  function MaterialIcon$LOCAL_HOTEL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_HOTEL_instance;
  }
  var MaterialIcon$LOCAL_LAUNDRY_SERVICE_instance;
  function MaterialIcon$LOCAL_LAUNDRY_SERVICE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_LAUNDRY_SERVICE_instance;
  }
  var MaterialIcon$LOCAL_LIBRARY_instance;
  function MaterialIcon$LOCAL_LIBRARY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_LIBRARY_instance;
  }
  var MaterialIcon$LOCAL_MALL_instance;
  function MaterialIcon$LOCAL_MALL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_MALL_instance;
  }
  var MaterialIcon$LOCAL_MOVIES_instance;
  function MaterialIcon$LOCAL_MOVIES_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_MOVIES_instance;
  }
  var MaterialIcon$LOCAL_OFFER_instance;
  function MaterialIcon$LOCAL_OFFER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_OFFER_instance;
  }
  var MaterialIcon$LOCAL_PARKING_instance;
  function MaterialIcon$LOCAL_PARKING_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_PARKING_instance;
  }
  var MaterialIcon$LOCAL_PHARMACY_instance;
  function MaterialIcon$LOCAL_PHARMACY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_PHARMACY_instance;
  }
  var MaterialIcon$LOCAL_PHONE_instance;
  function MaterialIcon$LOCAL_PHONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_PHONE_instance;
  }
  var MaterialIcon$LOCAL_PIZZA_instance;
  function MaterialIcon$LOCAL_PIZZA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_PIZZA_instance;
  }
  var MaterialIcon$LOCAL_PLAY_instance;
  function MaterialIcon$LOCAL_PLAY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_PLAY_instance;
  }
  var MaterialIcon$LOCAL_POST_OFFICE_instance;
  function MaterialIcon$LOCAL_POST_OFFICE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_POST_OFFICE_instance;
  }
  var MaterialIcon$LOCAL_PRINTSHOP_instance;
  function MaterialIcon$LOCAL_PRINTSHOP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_PRINTSHOP_instance;
  }
  var MaterialIcon$LOCAL_SEE_instance;
  function MaterialIcon$LOCAL_SEE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_SEE_instance;
  }
  var MaterialIcon$LOCAL_SHIPPING_instance;
  function MaterialIcon$LOCAL_SHIPPING_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_SHIPPING_instance;
  }
  var MaterialIcon$LOCAL_TAXI_instance;
  function MaterialIcon$LOCAL_TAXI_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_TAXI_instance;
  }
  var MaterialIcon$LOCATION_CITY_instance;
  function MaterialIcon$LOCATION_CITY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCATION_CITY_instance;
  }
  var MaterialIcon$LOCATION_DISABLED_instance;
  function MaterialIcon$LOCATION_DISABLED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCATION_DISABLED_instance;
  }
  var MaterialIcon$LOCATION_OFF_instance;
  function MaterialIcon$LOCATION_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCATION_OFF_instance;
  }
  var MaterialIcon$LOCATION_ON_instance;
  function MaterialIcon$LOCATION_ON_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCATION_ON_instance;
  }
  var MaterialIcon$LOCATION_SEARCHING_instance;
  function MaterialIcon$LOCATION_SEARCHING_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCATION_SEARCHING_instance;
  }
  var MaterialIcon$LOCK_instance;
  function MaterialIcon$LOCK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCK_instance;
  }
  var MaterialIcon$LOCK_OPEN_instance;
  function MaterialIcon$LOCK_OPEN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCK_OPEN_instance;
  }
  var MaterialIcon$LOCK_OUTLINE_instance;
  function MaterialIcon$LOCK_OUTLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCK_OUTLINE_instance;
  }
  var MaterialIcon$LOOKS_instance;
  function MaterialIcon$LOOKS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOOKS_instance;
  }
  var MaterialIcon$LOOKS_3_instance;
  function MaterialIcon$LOOKS_3_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOOKS_3_instance;
  }
  var MaterialIcon$LOOKS_4_instance;
  function MaterialIcon$LOOKS_4_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOOKS_4_instance;
  }
  var MaterialIcon$LOOKS_5_instance;
  function MaterialIcon$LOOKS_5_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOOKS_5_instance;
  }
  var MaterialIcon$LOOKS_6_instance;
  function MaterialIcon$LOOKS_6_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOOKS_6_instance;
  }
  var MaterialIcon$LOOKS_ONE_instance;
  function MaterialIcon$LOOKS_ONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOOKS_ONE_instance;
  }
  var MaterialIcon$LOOKS_TWO_instance;
  function MaterialIcon$LOOKS_TWO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOOKS_TWO_instance;
  }
  var MaterialIcon$LOOP_instance;
  function MaterialIcon$LOOP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOOP_instance;
  }
  var MaterialIcon$LOUPE_instance;
  function MaterialIcon$LOUPE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOUPE_instance;
  }
  var MaterialIcon$LOW_PRIORITY_instance;
  function MaterialIcon$LOW_PRIORITY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOW_PRIORITY_instance;
  }
  var MaterialIcon$LOYALTY_instance;
  function MaterialIcon$LOYALTY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOYALTY_instance;
  }
  var MaterialIcon$MAIL_instance;
  function MaterialIcon$MAIL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MAIL_instance;
  }
  var MaterialIcon$MAIL_OUTLINE_instance;
  function MaterialIcon$MAIL_OUTLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MAIL_OUTLINE_instance;
  }
  var MaterialIcon$MAP_instance;
  function MaterialIcon$MAP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MAP_instance;
  }
  var MaterialIcon$MARKUNREAD_instance;
  function MaterialIcon$MARKUNREAD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MARKUNREAD_instance;
  }
  var MaterialIcon$MARKUNREAD_MAILBOX_instance;
  function MaterialIcon$MARKUNREAD_MAILBOX_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MARKUNREAD_MAILBOX_instance;
  }
  var MaterialIcon$MEMORY_instance;
  function MaterialIcon$MEMORY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MEMORY_instance;
  }
  var MaterialIcon$MENU_instance;
  function MaterialIcon$MENU_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MENU_instance;
  }
  var MaterialIcon$MERGE_TYPE_instance;
  function MaterialIcon$MERGE_TYPE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MERGE_TYPE_instance;
  }
  var MaterialIcon$MESSAGE_instance;
  function MaterialIcon$MESSAGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MESSAGE_instance;
  }
  var MaterialIcon$MIC_instance;
  function MaterialIcon$MIC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MIC_instance;
  }
  var MaterialIcon$MIC_NONE_instance;
  function MaterialIcon$MIC_NONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MIC_NONE_instance;
  }
  var MaterialIcon$MIC_OFF_instance;
  function MaterialIcon$MIC_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MIC_OFF_instance;
  }
  var MaterialIcon$MMS_instance;
  function MaterialIcon$MMS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MMS_instance;
  }
  var MaterialIcon$MODE_COMMENT_instance;
  function MaterialIcon$MODE_COMMENT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MODE_COMMENT_instance;
  }
  var MaterialIcon$MODE_EDIT_instance;
  function MaterialIcon$MODE_EDIT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MODE_EDIT_instance;
  }
  var MaterialIcon$MONETIZATION_ON_instance;
  function MaterialIcon$MONETIZATION_ON_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MONETIZATION_ON_instance;
  }
  var MaterialIcon$MONEY_OFF_instance;
  function MaterialIcon$MONEY_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MONEY_OFF_instance;
  }
  var MaterialIcon$MONOCHROME_PHOTOS_instance;
  function MaterialIcon$MONOCHROME_PHOTOS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MONOCHROME_PHOTOS_instance;
  }
  var MaterialIcon$MOOD_instance;
  function MaterialIcon$MOOD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MOOD_instance;
  }
  var MaterialIcon$MOOD_BAD_instance;
  function MaterialIcon$MOOD_BAD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MOOD_BAD_instance;
  }
  var MaterialIcon$MORE_instance;
  function MaterialIcon$MORE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MORE_instance;
  }
  var MaterialIcon$MORE_HORIZ_instance;
  function MaterialIcon$MORE_HORIZ_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MORE_HORIZ_instance;
  }
  var MaterialIcon$MORE_VERT_instance;
  function MaterialIcon$MORE_VERT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MORE_VERT_instance;
  }
  var MaterialIcon$MOTORCYCLE_instance;
  function MaterialIcon$MOTORCYCLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MOTORCYCLE_instance;
  }
  var MaterialIcon$MOUSE_instance;
  function MaterialIcon$MOUSE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MOUSE_instance;
  }
  var MaterialIcon$MOVE_TO_INBOX_instance;
  function MaterialIcon$MOVE_TO_INBOX_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MOVE_TO_INBOX_instance;
  }
  var MaterialIcon$MOVIE_instance;
  function MaterialIcon$MOVIE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MOVIE_instance;
  }
  var MaterialIcon$MOVIE_CREATION_instance;
  function MaterialIcon$MOVIE_CREATION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MOVIE_CREATION_instance;
  }
  var MaterialIcon$MOVIE_FILTER_instance;
  function MaterialIcon$MOVIE_FILTER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MOVIE_FILTER_instance;
  }
  var MaterialIcon$MULTILINE_CHART_instance;
  function MaterialIcon$MULTILINE_CHART_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MULTILINE_CHART_instance;
  }
  var MaterialIcon$MUSIC_NOTE_instance;
  function MaterialIcon$MUSIC_NOTE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MUSIC_NOTE_instance;
  }
  var MaterialIcon$MUSIC_VIDEO_instance;
  function MaterialIcon$MUSIC_VIDEO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MUSIC_VIDEO_instance;
  }
  var MaterialIcon$MY_LOCATION_instance;
  function MaterialIcon$MY_LOCATION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MY_LOCATION_instance;
  }
  var MaterialIcon$NATURE_instance;
  function MaterialIcon$NATURE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NATURE_instance;
  }
  var MaterialIcon$NATURE_PEOPLE_instance;
  function MaterialIcon$NATURE_PEOPLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NATURE_PEOPLE_instance;
  }
  var MaterialIcon$NAVIGATE_BEFORE_instance;
  function MaterialIcon$NAVIGATE_BEFORE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NAVIGATE_BEFORE_instance;
  }
  var MaterialIcon$NAVIGATE_NEXT_instance;
  function MaterialIcon$NAVIGATE_NEXT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NAVIGATE_NEXT_instance;
  }
  var MaterialIcon$NAVIGATION_instance;
  function MaterialIcon$NAVIGATION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NAVIGATION_instance;
  }
  var MaterialIcon$NEAR_ME_instance;
  function MaterialIcon$NEAR_ME_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NEAR_ME_instance;
  }
  var MaterialIcon$NETWORK_CELL_instance;
  function MaterialIcon$NETWORK_CELL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NETWORK_CELL_instance;
  }
  var MaterialIcon$NETWORK_CHECK_instance;
  function MaterialIcon$NETWORK_CHECK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NETWORK_CHECK_instance;
  }
  var MaterialIcon$NETWORK_LOCKED_instance;
  function MaterialIcon$NETWORK_LOCKED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NETWORK_LOCKED_instance;
  }
  var MaterialIcon$NETWORK_WIFI_instance;
  function MaterialIcon$NETWORK_WIFI_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NETWORK_WIFI_instance;
  }
  var MaterialIcon$NEW_RELEASES_instance;
  function MaterialIcon$NEW_RELEASES_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NEW_RELEASES_instance;
  }
  var MaterialIcon$NEXT_WEEK_instance;
  function MaterialIcon$NEXT_WEEK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NEXT_WEEK_instance;
  }
  var MaterialIcon$NFC_instance;
  function MaterialIcon$NFC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NFC_instance;
  }
  var MaterialIcon$NO_ENCRYPTION_instance;
  function MaterialIcon$NO_ENCRYPTION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NO_ENCRYPTION_instance;
  }
  var MaterialIcon$NO_SIM_instance;
  function MaterialIcon$NO_SIM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NO_SIM_instance;
  }
  var MaterialIcon$NOT_INTERESTED_instance;
  function MaterialIcon$NOT_INTERESTED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NOT_INTERESTED_instance;
  }
  var MaterialIcon$NOTE_instance;
  function MaterialIcon$NOTE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NOTE_instance;
  }
  var MaterialIcon$NOTE_ADD_instance;
  function MaterialIcon$NOTE_ADD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NOTE_ADD_instance;
  }
  var MaterialIcon$NOTIFICATIONS_instance;
  function MaterialIcon$NOTIFICATIONS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NOTIFICATIONS_instance;
  }
  var MaterialIcon$NOTIFICATIONS_ACTIVE_instance;
  function MaterialIcon$NOTIFICATIONS_ACTIVE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NOTIFICATIONS_ACTIVE_instance;
  }
  var MaterialIcon$NOTIFICATIONS_NONE_instance;
  function MaterialIcon$NOTIFICATIONS_NONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NOTIFICATIONS_NONE_instance;
  }
  var MaterialIcon$NOTIFICATIONS_OFF_instance;
  function MaterialIcon$NOTIFICATIONS_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NOTIFICATIONS_OFF_instance;
  }
  var MaterialIcon$NOTIFICATIONS_PAUSED_instance;
  function MaterialIcon$NOTIFICATIONS_PAUSED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NOTIFICATIONS_PAUSED_instance;
  }
  var MaterialIcon$OFFLINE_PIN_instance;
  function MaterialIcon$OFFLINE_PIN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$OFFLINE_PIN_instance;
  }
  var MaterialIcon$ONDEMAND_VIDEO_instance;
  function MaterialIcon$ONDEMAND_VIDEO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ONDEMAND_VIDEO_instance;
  }
  var MaterialIcon$OPACITY_instance;
  function MaterialIcon$OPACITY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$OPACITY_instance;
  }
  var MaterialIcon$OPEN_IN_BROWSER_instance;
  function MaterialIcon$OPEN_IN_BROWSER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$OPEN_IN_BROWSER_instance;
  }
  var MaterialIcon$OPEN_IN_NEW_instance;
  function MaterialIcon$OPEN_IN_NEW_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$OPEN_IN_NEW_instance;
  }
  var MaterialIcon$OPEN_WITH_instance;
  function MaterialIcon$OPEN_WITH_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$OPEN_WITH_instance;
  }
  var MaterialIcon$PAGES_instance;
  function MaterialIcon$PAGES_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PAGES_instance;
  }
  var MaterialIcon$PAGEVIEW_instance;
  function MaterialIcon$PAGEVIEW_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PAGEVIEW_instance;
  }
  var MaterialIcon$PALETTE_instance;
  function MaterialIcon$PALETTE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PALETTE_instance;
  }
  var MaterialIcon$PAN_TOOL_instance;
  function MaterialIcon$PAN_TOOL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PAN_TOOL_instance;
  }
  var MaterialIcon$PANORAMA_instance;
  function MaterialIcon$PANORAMA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PANORAMA_instance;
  }
  var MaterialIcon$PANORAMA_FISH_EYE_instance;
  function MaterialIcon$PANORAMA_FISH_EYE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PANORAMA_FISH_EYE_instance;
  }
  var MaterialIcon$PANORAMA_HORIZONTAL_instance;
  function MaterialIcon$PANORAMA_HORIZONTAL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PANORAMA_HORIZONTAL_instance;
  }
  var MaterialIcon$PANORAMA_VERTICAL_instance;
  function MaterialIcon$PANORAMA_VERTICAL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PANORAMA_VERTICAL_instance;
  }
  var MaterialIcon$PANORAMA_WIDE_ANGLE_instance;
  function MaterialIcon$PANORAMA_WIDE_ANGLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PANORAMA_WIDE_ANGLE_instance;
  }
  var MaterialIcon$PARTY_MODE_instance;
  function MaterialIcon$PARTY_MODE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PARTY_MODE_instance;
  }
  var MaterialIcon$PAUSE_instance;
  function MaterialIcon$PAUSE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PAUSE_instance;
  }
  var MaterialIcon$PAUSE_CIRCLE_FILLED_instance;
  function MaterialIcon$PAUSE_CIRCLE_FILLED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PAUSE_CIRCLE_FILLED_instance;
  }
  var MaterialIcon$PAUSE_CIRCLE_OUTLINE_instance;
  function MaterialIcon$PAUSE_CIRCLE_OUTLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PAUSE_CIRCLE_OUTLINE_instance;
  }
  var MaterialIcon$PAYMENT_instance;
  function MaterialIcon$PAYMENT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PAYMENT_instance;
  }
  var MaterialIcon$PEOPLE_instance;
  function MaterialIcon$PEOPLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PEOPLE_instance;
  }
  var MaterialIcon$PEOPLE_OUTLINE_instance;
  function MaterialIcon$PEOPLE_OUTLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PEOPLE_OUTLINE_instance;
  }
  var MaterialIcon$PERM_CAMERA_MIC_instance;
  function MaterialIcon$PERM_CAMERA_MIC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PERM_CAMERA_MIC_instance;
  }
  var MaterialIcon$PERM_CONTACT_CALENDAR_instance;
  function MaterialIcon$PERM_CONTACT_CALENDAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PERM_CONTACT_CALENDAR_instance;
  }
  var MaterialIcon$PERM_DATA_SETTING_instance;
  function MaterialIcon$PERM_DATA_SETTING_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PERM_DATA_SETTING_instance;
  }
  var MaterialIcon$PERM_DEVICE_INFORMATION_instance;
  function MaterialIcon$PERM_DEVICE_INFORMATION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PERM_DEVICE_INFORMATION_instance;
  }
  var MaterialIcon$PERM_IDENTITY_instance;
  function MaterialIcon$PERM_IDENTITY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PERM_IDENTITY_instance;
  }
  var MaterialIcon$PERM_MEDIA_instance;
  function MaterialIcon$PERM_MEDIA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PERM_MEDIA_instance;
  }
  var MaterialIcon$PERM_PHONE_MSG_instance;
  function MaterialIcon$PERM_PHONE_MSG_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PERM_PHONE_MSG_instance;
  }
  var MaterialIcon$PERM_SCAN_WIFI_instance;
  function MaterialIcon$PERM_SCAN_WIFI_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PERM_SCAN_WIFI_instance;
  }
  var MaterialIcon$PERSON_instance;
  function MaterialIcon$PERSON_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PERSON_instance;
  }
  var MaterialIcon$PERSON_ADD_instance;
  function MaterialIcon$PERSON_ADD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PERSON_ADD_instance;
  }
  var MaterialIcon$PERSON_OUTLINE_instance;
  function MaterialIcon$PERSON_OUTLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PERSON_OUTLINE_instance;
  }
  var MaterialIcon$PERSON_PIN_instance;
  function MaterialIcon$PERSON_PIN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PERSON_PIN_instance;
  }
  var MaterialIcon$PERSON_PIN_CIRCLE_instance;
  function MaterialIcon$PERSON_PIN_CIRCLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PERSON_PIN_CIRCLE_instance;
  }
  var MaterialIcon$PERSONAL_VIDEO_instance;
  function MaterialIcon$PERSONAL_VIDEO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PERSONAL_VIDEO_instance;
  }
  var MaterialIcon$PETS_instance;
  function MaterialIcon$PETS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PETS_instance;
  }
  var MaterialIcon$PHONE_instance;
  function MaterialIcon$PHONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONE_instance;
  }
  var MaterialIcon$PHONE_ANDROID_instance;
  function MaterialIcon$PHONE_ANDROID_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONE_ANDROID_instance;
  }
  var MaterialIcon$PHONE_BLUETOOTH_SPEAKER_instance;
  function MaterialIcon$PHONE_BLUETOOTH_SPEAKER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONE_BLUETOOTH_SPEAKER_instance;
  }
  var MaterialIcon$PHONE_FORWARDED_instance;
  function MaterialIcon$PHONE_FORWARDED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONE_FORWARDED_instance;
  }
  var MaterialIcon$PHONE_IN_TALK_instance;
  function MaterialIcon$PHONE_IN_TALK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONE_IN_TALK_instance;
  }
  var MaterialIcon$PHONE_IPHONE_instance;
  function MaterialIcon$PHONE_IPHONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONE_IPHONE_instance;
  }
  var MaterialIcon$PHONE_LOCKED_instance;
  function MaterialIcon$PHONE_LOCKED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONE_LOCKED_instance;
  }
  var MaterialIcon$PHONE_MISSED_instance;
  function MaterialIcon$PHONE_MISSED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONE_MISSED_instance;
  }
  var MaterialIcon$PHONE_PAUSED_instance;
  function MaterialIcon$PHONE_PAUSED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONE_PAUSED_instance;
  }
  var MaterialIcon$PHONELINK_instance;
  function MaterialIcon$PHONELINK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONELINK_instance;
  }
  var MaterialIcon$PHONELINK_ERASE_instance;
  function MaterialIcon$PHONELINK_ERASE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONELINK_ERASE_instance;
  }
  var MaterialIcon$PHONELINK_LOCK_instance;
  function MaterialIcon$PHONELINK_LOCK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONELINK_LOCK_instance;
  }
  var MaterialIcon$PHONELINK_OFF_instance;
  function MaterialIcon$PHONELINK_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONELINK_OFF_instance;
  }
  var MaterialIcon$PHONELINK_RING_instance;
  function MaterialIcon$PHONELINK_RING_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONELINK_RING_instance;
  }
  var MaterialIcon$PHONELINK_SETUP_instance;
  function MaterialIcon$PHONELINK_SETUP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONELINK_SETUP_instance;
  }
  var MaterialIcon$PHOTO_instance;
  function MaterialIcon$PHOTO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHOTO_instance;
  }
  var MaterialIcon$PHOTO_ALBUM_instance;
  function MaterialIcon$PHOTO_ALBUM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHOTO_ALBUM_instance;
  }
  var MaterialIcon$PHOTO_CAMERA_instance;
  function MaterialIcon$PHOTO_CAMERA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHOTO_CAMERA_instance;
  }
  var MaterialIcon$PHOTO_FILTER_instance;
  function MaterialIcon$PHOTO_FILTER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHOTO_FILTER_instance;
  }
  var MaterialIcon$PHOTO_LIBRARY_instance;
  function MaterialIcon$PHOTO_LIBRARY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHOTO_LIBRARY_instance;
  }
  var MaterialIcon$PHOTO_SIZE_SELECT_ACTUAL_instance;
  function MaterialIcon$PHOTO_SIZE_SELECT_ACTUAL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHOTO_SIZE_SELECT_ACTUAL_instance;
  }
  var MaterialIcon$PHOTO_SIZE_SELECT_LARGE_instance;
  function MaterialIcon$PHOTO_SIZE_SELECT_LARGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHOTO_SIZE_SELECT_LARGE_instance;
  }
  var MaterialIcon$PHOTO_SIZE_SELECT_SMALL_instance;
  function MaterialIcon$PHOTO_SIZE_SELECT_SMALL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHOTO_SIZE_SELECT_SMALL_instance;
  }
  var MaterialIcon$PICTURE_AS_PDF_instance;
  function MaterialIcon$PICTURE_AS_PDF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PICTURE_AS_PDF_instance;
  }
  var MaterialIcon$PICTURE_IN_PICTURE_instance;
  function MaterialIcon$PICTURE_IN_PICTURE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PICTURE_IN_PICTURE_instance;
  }
  var MaterialIcon$PICTURE_IN_PICTURE_ALT_instance;
  function MaterialIcon$PICTURE_IN_PICTURE_ALT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PICTURE_IN_PICTURE_ALT_instance;
  }
  var MaterialIcon$PIE_CHART_instance;
  function MaterialIcon$PIE_CHART_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PIE_CHART_instance;
  }
  var MaterialIcon$PIE_CHART_OUTLINED_instance;
  function MaterialIcon$PIE_CHART_OUTLINED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PIE_CHART_OUTLINED_instance;
  }
  var MaterialIcon$PIN_DROP_instance;
  function MaterialIcon$PIN_DROP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PIN_DROP_instance;
  }
  var MaterialIcon$PLACE_instance;
  function MaterialIcon$PLACE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PLACE_instance;
  }
  var MaterialIcon$PLAY_ARROW_instance;
  function MaterialIcon$PLAY_ARROW_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PLAY_ARROW_instance;
  }
  var MaterialIcon$PLAY_CIRCLE_FILLED_instance;
  function MaterialIcon$PLAY_CIRCLE_FILLED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PLAY_CIRCLE_FILLED_instance;
  }
  var MaterialIcon$PLAY_CIRCLE_OUTLINE_instance;
  function MaterialIcon$PLAY_CIRCLE_OUTLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PLAY_CIRCLE_OUTLINE_instance;
  }
  var MaterialIcon$PLAY_FOR_WORK_instance;
  function MaterialIcon$PLAY_FOR_WORK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PLAY_FOR_WORK_instance;
  }
  var MaterialIcon$PLAYLIST_ADD_instance;
  function MaterialIcon$PLAYLIST_ADD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PLAYLIST_ADD_instance;
  }
  var MaterialIcon$PLAYLIST_ADD_CHECK_instance;
  function MaterialIcon$PLAYLIST_ADD_CHECK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PLAYLIST_ADD_CHECK_instance;
  }
  var MaterialIcon$PLAYLIST_PLAY_instance;
  function MaterialIcon$PLAYLIST_PLAY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PLAYLIST_PLAY_instance;
  }
  var MaterialIcon$PLUS_ONE_instance;
  function MaterialIcon$PLUS_ONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PLUS_ONE_instance;
  }
  var MaterialIcon$POLL_instance;
  function MaterialIcon$POLL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$POLL_instance;
  }
  var MaterialIcon$POLYMER_instance;
  function MaterialIcon$POLYMER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$POLYMER_instance;
  }
  var MaterialIcon$POOL_instance;
  function MaterialIcon$POOL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$POOL_instance;
  }
  var MaterialIcon$PORTABLE_WIFI_OFF_instance;
  function MaterialIcon$PORTABLE_WIFI_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PORTABLE_WIFI_OFF_instance;
  }
  var MaterialIcon$PORTRAIT_instance;
  function MaterialIcon$PORTRAIT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PORTRAIT_instance;
  }
  var MaterialIcon$POWER_instance;
  function MaterialIcon$POWER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$POWER_instance;
  }
  var MaterialIcon$POWER_INPUT_instance;
  function MaterialIcon$POWER_INPUT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$POWER_INPUT_instance;
  }
  var MaterialIcon$POWER_SETTINGS_NEW_instance;
  function MaterialIcon$POWER_SETTINGS_NEW_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$POWER_SETTINGS_NEW_instance;
  }
  var MaterialIcon$PREGNANT_WOMAN_instance;
  function MaterialIcon$PREGNANT_WOMAN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PREGNANT_WOMAN_instance;
  }
  var MaterialIcon$PRESENT_TO_ALL_instance;
  function MaterialIcon$PRESENT_TO_ALL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PRESENT_TO_ALL_instance;
  }
  var MaterialIcon$PRINT_instance;
  function MaterialIcon$PRINT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PRINT_instance;
  }
  var MaterialIcon$PRIORITY_HIGH_instance;
  function MaterialIcon$PRIORITY_HIGH_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PRIORITY_HIGH_instance;
  }
  var MaterialIcon$PUBLIC_instance;
  function MaterialIcon$PUBLIC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PUBLIC_instance;
  }
  var MaterialIcon$PUBLISH_instance;
  function MaterialIcon$PUBLISH_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PUBLISH_instance;
  }
  var MaterialIcon$QUERY_BUILDER_instance;
  function MaterialIcon$QUERY_BUILDER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$QUERY_BUILDER_instance;
  }
  var MaterialIcon$QUESTION_ANSWER_instance;
  function MaterialIcon$QUESTION_ANSWER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$QUESTION_ANSWER_instance;
  }
  var MaterialIcon$QUEUE_instance;
  function MaterialIcon$QUEUE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$QUEUE_instance;
  }
  var MaterialIcon$QUEUE_MUSIC_instance;
  function MaterialIcon$QUEUE_MUSIC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$QUEUE_MUSIC_instance;
  }
  var MaterialIcon$QUEUE_PLAY_NEXT_instance;
  function MaterialIcon$QUEUE_PLAY_NEXT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$QUEUE_PLAY_NEXT_instance;
  }
  var MaterialIcon$RADIO_instance;
  function MaterialIcon$RADIO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RADIO_instance;
  }
  var MaterialIcon$RADIO_BUTTON_CHECKED_instance;
  function MaterialIcon$RADIO_BUTTON_CHECKED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RADIO_BUTTON_CHECKED_instance;
  }
  var MaterialIcon$RADIO_BUTTON_UNCHECKED_instance;
  function MaterialIcon$RADIO_BUTTON_UNCHECKED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RADIO_BUTTON_UNCHECKED_instance;
  }
  var MaterialIcon$RATE_REVIEW_instance;
  function MaterialIcon$RATE_REVIEW_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RATE_REVIEW_instance;
  }
  var MaterialIcon$RECEIPT_instance;
  function MaterialIcon$RECEIPT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RECEIPT_instance;
  }
  var MaterialIcon$RECENT_ACTORS_instance;
  function MaterialIcon$RECENT_ACTORS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RECENT_ACTORS_instance;
  }
  var MaterialIcon$RECORD_VOICE_OVER_instance;
  function MaterialIcon$RECORD_VOICE_OVER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RECORD_VOICE_OVER_instance;
  }
  var MaterialIcon$RM_instance;
  function MaterialIcon$RM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RM_instance;
  }
  var MaterialIcon$REDO_instance;
  function MaterialIcon$REDO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REDO_instance;
  }
  var MaterialIcon$REFRESH_instance;
  function MaterialIcon$REFRESH_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REFRESH_instance;
  }
  var MaterialIcon$REMOVE_instance;
  function MaterialIcon$REMOVE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REMOVE_instance;
  }
  var MaterialIcon$REMOVE_CIRCLE_instance;
  function MaterialIcon$REMOVE_CIRCLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REMOVE_CIRCLE_instance;
  }
  var MaterialIcon$REMOVE_CIRCLE_OUTLINE_instance;
  function MaterialIcon$REMOVE_CIRCLE_OUTLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REMOVE_CIRCLE_OUTLINE_instance;
  }
  var MaterialIcon$REMOVE_FROM_QUEUE_instance;
  function MaterialIcon$REMOVE_FROM_QUEUE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REMOVE_FROM_QUEUE_instance;
  }
  var MaterialIcon$REMOVE_RED_EYE_instance;
  function MaterialIcon$REMOVE_RED_EYE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REMOVE_RED_EYE_instance;
  }
  var MaterialIcon$REMOVE_SHOPPING_CART_instance;
  function MaterialIcon$REMOVE_SHOPPING_CART_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REMOVE_SHOPPING_CART_instance;
  }
  var MaterialIcon$REORDER_instance;
  function MaterialIcon$REORDER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REORDER_instance;
  }
  var MaterialIcon$REPEAT_instance;
  function MaterialIcon$REPEAT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REPEAT_instance;
  }
  var MaterialIcon$REPEAT_ONE_instance;
  function MaterialIcon$REPEAT_ONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REPEAT_ONE_instance;
  }
  var MaterialIcon$REPLAY_instance;
  function MaterialIcon$REPLAY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REPLAY_instance;
  }
  var MaterialIcon$REPLAY_10_instance;
  function MaterialIcon$REPLAY_10_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REPLAY_10_instance;
  }
  var MaterialIcon$REPLAY_30_instance;
  function MaterialIcon$REPLAY_30_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REPLAY_30_instance;
  }
  var MaterialIcon$REPLAY_5_instance;
  function MaterialIcon$REPLAY_5_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REPLAY_5_instance;
  }
  var MaterialIcon$REPLY_instance;
  function MaterialIcon$REPLY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REPLY_instance;
  }
  var MaterialIcon$REPLY_ALL_instance;
  function MaterialIcon$REPLY_ALL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REPLY_ALL_instance;
  }
  var MaterialIcon$REPORT_instance;
  function MaterialIcon$REPORT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REPORT_instance;
  }
  var MaterialIcon$REPORT_PROBLEM_instance;
  function MaterialIcon$REPORT_PROBLEM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REPORT_PROBLEM_instance;
  }
  var MaterialIcon$RESTAURANT_instance;
  function MaterialIcon$RESTAURANT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RESTAURANT_instance;
  }
  var MaterialIcon$RESTAURANT_MENU_instance;
  function MaterialIcon$RESTAURANT_MENU_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RESTAURANT_MENU_instance;
  }
  var MaterialIcon$RESTORE_instance;
  function MaterialIcon$RESTORE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RESTORE_instance;
  }
  var MaterialIcon$RESTORE_PAGE_instance;
  function MaterialIcon$RESTORE_PAGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RESTORE_PAGE_instance;
  }
  var MaterialIcon$RING_VOLUME_instance;
  function MaterialIcon$RING_VOLUME_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RING_VOLUME_instance;
  }
  var MaterialIcon$ROOM_instance;
  function MaterialIcon$ROOM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ROOM_instance;
  }
  var MaterialIcon$ROOM_SERVICE_instance;
  function MaterialIcon$ROOM_SERVICE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ROOM_SERVICE_instance;
  }
  var MaterialIcon$ROTATE_90_DEGREES_CCW_instance;
  function MaterialIcon$ROTATE_90_DEGREES_CCW_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ROTATE_90_DEGREES_CCW_instance;
  }
  var MaterialIcon$ROTATE_LEFT_instance;
  function MaterialIcon$ROTATE_LEFT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ROTATE_LEFT_instance;
  }
  var MaterialIcon$ROTATE_RIGHT_instance;
  function MaterialIcon$ROTATE_RIGHT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ROTATE_RIGHT_instance;
  }
  var MaterialIcon$ROUNDED_CORNER_instance;
  function MaterialIcon$ROUNDED_CORNER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ROUNDED_CORNER_instance;
  }
  var MaterialIcon$ROUTER_instance;
  function MaterialIcon$ROUTER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ROUTER_instance;
  }
  var MaterialIcon$ROWING_instance;
  function MaterialIcon$ROWING_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ROWING_instance;
  }
  var MaterialIcon$RSS_FEED_instance;
  function MaterialIcon$RSS_FEED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RSS_FEED_instance;
  }
  var MaterialIcon$RV_HOOKUP_instance;
  function MaterialIcon$RV_HOOKUP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RV_HOOKUP_instance;
  }
  var MaterialIcon$SATELLITE_instance;
  function MaterialIcon$SATELLITE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SATELLITE_instance;
  }
  var MaterialIcon$SAVE_instance;
  function MaterialIcon$SAVE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SAVE_instance;
  }
  var MaterialIcon$SCANNER_instance;
  function MaterialIcon$SCANNER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SCANNER_instance;
  }
  var MaterialIcon$SCHEDULE_instance;
  function MaterialIcon$SCHEDULE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SCHEDULE_instance;
  }
  var MaterialIcon$SCHOOL_instance;
  function MaterialIcon$SCHOOL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SCHOOL_instance;
  }
  var MaterialIcon$SCREEN_LOCK_LANDSCAPE_instance;
  function MaterialIcon$SCREEN_LOCK_LANDSCAPE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SCREEN_LOCK_LANDSCAPE_instance;
  }
  var MaterialIcon$SCREEN_LOCK_PORTRAIT_instance;
  function MaterialIcon$SCREEN_LOCK_PORTRAIT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SCREEN_LOCK_PORTRAIT_instance;
  }
  var MaterialIcon$SCREEN_LOCK_ROTATION_instance;
  function MaterialIcon$SCREEN_LOCK_ROTATION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SCREEN_LOCK_ROTATION_instance;
  }
  var MaterialIcon$SCREEN_ROTATION_instance;
  function MaterialIcon$SCREEN_ROTATION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SCREEN_ROTATION_instance;
  }
  var MaterialIcon$SCREEN_SHARE_instance;
  function MaterialIcon$SCREEN_SHARE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SCREEN_SHARE_instance;
  }
  var MaterialIcon$SD_CARD_instance;
  function MaterialIcon$SD_CARD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SD_CARD_instance;
  }
  var MaterialIcon$SD_STORAGE_instance;
  function MaterialIcon$SD_STORAGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SD_STORAGE_instance;
  }
  var MaterialIcon$SEARCH_instance;
  function MaterialIcon$SEARCH_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SEARCH_instance;
  }
  var MaterialIcon$SECURITY_instance;
  function MaterialIcon$SECURITY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SECURITY_instance;
  }
  var MaterialIcon$SELECT_ALL_instance;
  function MaterialIcon$SELECT_ALL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SELECT_ALL_instance;
  }
  var MaterialIcon$SEND_instance;
  function MaterialIcon$SEND_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SEND_instance;
  }
  var MaterialIcon$SENTIMENT_DISSATISFIED_instance;
  function MaterialIcon$SENTIMENT_DISSATISFIED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SENTIMENT_DISSATISFIED_instance;
  }
  var MaterialIcon$SENTIMENT_NEUTRAL_instance;
  function MaterialIcon$SENTIMENT_NEUTRAL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SENTIMENT_NEUTRAL_instance;
  }
  var MaterialIcon$SENTIMENT_SATISFIED_instance;
  function MaterialIcon$SENTIMENT_SATISFIED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SENTIMENT_SATISFIED_instance;
  }
  var MaterialIcon$SENTIMENT_VERY_DISSATISFIED_instance;
  function MaterialIcon$SENTIMENT_VERY_DISSATISFIED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SENTIMENT_VERY_DISSATISFIED_instance;
  }
  var MaterialIcon$SENTIMENT_VERY_SATISFIED_instance;
  function MaterialIcon$SENTIMENT_VERY_SATISFIED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SENTIMENT_VERY_SATISFIED_instance;
  }
  var MaterialIcon$SETTINGS_instance;
  function MaterialIcon$SETTINGS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_instance;
  }
  var MaterialIcon$SETTINGS_APPLICATIONS_instance;
  function MaterialIcon$SETTINGS_APPLICATIONS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_APPLICATIONS_instance;
  }
  var MaterialIcon$SETTINGS_BACKUP_RESTORE_instance;
  function MaterialIcon$SETTINGS_BACKUP_RESTORE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_BACKUP_RESTORE_instance;
  }
  var MaterialIcon$SETTINGS_BLUETOOTH_instance;
  function MaterialIcon$SETTINGS_BLUETOOTH_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_BLUETOOTH_instance;
  }
  var MaterialIcon$SETTINGS_BRIGHTNESS_instance;
  function MaterialIcon$SETTINGS_BRIGHTNESS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_BRIGHTNESS_instance;
  }
  var MaterialIcon$SETTINGS_CELL_instance;
  function MaterialIcon$SETTINGS_CELL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_CELL_instance;
  }
  var MaterialIcon$SETTINGS_ETHERNET_instance;
  function MaterialIcon$SETTINGS_ETHERNET_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_ETHERNET_instance;
  }
  var MaterialIcon$SETTINGS_INPUT_ANTENNA_instance;
  function MaterialIcon$SETTINGS_INPUT_ANTENNA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_INPUT_ANTENNA_instance;
  }
  var MaterialIcon$SETTINGS_INPUT_COMPONENT_instance;
  function MaterialIcon$SETTINGS_INPUT_COMPONENT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_INPUT_COMPONENT_instance;
  }
  var MaterialIcon$SETTINGS_INPUT_COMPOSITE_instance;
  function MaterialIcon$SETTINGS_INPUT_COMPOSITE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_INPUT_COMPOSITE_instance;
  }
  var MaterialIcon$SETTINGS_INPUT_HDMI_instance;
  function MaterialIcon$SETTINGS_INPUT_HDMI_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_INPUT_HDMI_instance;
  }
  var MaterialIcon$SETTINGS_INPUT_SVIDEO_instance;
  function MaterialIcon$SETTINGS_INPUT_SVIDEO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_INPUT_SVIDEO_instance;
  }
  var MaterialIcon$SETTINGS_OVERSCAN_instance;
  function MaterialIcon$SETTINGS_OVERSCAN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_OVERSCAN_instance;
  }
  var MaterialIcon$SETTINGS_PHONE_instance;
  function MaterialIcon$SETTINGS_PHONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_PHONE_instance;
  }
  var MaterialIcon$SETTINGS_POWER_instance;
  function MaterialIcon$SETTINGS_POWER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_POWER_instance;
  }
  var MaterialIcon$SETTINGS_REMOTE_instance;
  function MaterialIcon$SETTINGS_REMOTE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_REMOTE_instance;
  }
  var MaterialIcon$SETTINGS_SYSTEM_DAYDREAM_instance;
  function MaterialIcon$SETTINGS_SYSTEM_DAYDREAM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_SYSTEM_DAYDREAM_instance;
  }
  var MaterialIcon$SETTINGS_VOICE_instance;
  function MaterialIcon$SETTINGS_VOICE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_VOICE_instance;
  }
  var MaterialIcon$SHARE_instance;
  function MaterialIcon$SHARE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SHARE_instance;
  }
  var MaterialIcon$SHOP_instance;
  function MaterialIcon$SHOP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SHOP_instance;
  }
  var MaterialIcon$SHOP_TWO_instance;
  function MaterialIcon$SHOP_TWO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SHOP_TWO_instance;
  }
  var MaterialIcon$SHOPPING_BASKET_instance;
  function MaterialIcon$SHOPPING_BASKET_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SHOPPING_BASKET_instance;
  }
  var MaterialIcon$SHOPPING_CART_instance;
  function MaterialIcon$SHOPPING_CART_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SHOPPING_CART_instance;
  }
  var MaterialIcon$SHORT_TEXT_instance;
  function MaterialIcon$SHORT_TEXT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SHORT_TEXT_instance;
  }
  var MaterialIcon$SHOW_CHART_instance;
  function MaterialIcon$SHOW_CHART_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SHOW_CHART_instance;
  }
  var MaterialIcon$SHUFFLE_instance;
  function MaterialIcon$SHUFFLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SHUFFLE_instance;
  }
  var MaterialIcon$SIGNAL_CELLULAR_4_BAR_instance;
  function MaterialIcon$SIGNAL_CELLULAR_4_BAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SIGNAL_CELLULAR_4_BAR_instance;
  }
  var MaterialIcon$SIGNAL_CELLULAR_CONNECTED_NO_INTERNET_4_BAR_instance;
  function MaterialIcon$SIGNAL_CELLULAR_CONNECTED_NO_INTERNET_4_BAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SIGNAL_CELLULAR_CONNECTED_NO_INTERNET_4_BAR_instance;
  }
  var MaterialIcon$SIGNAL_CELLULAR_NO_SIM_instance;
  function MaterialIcon$SIGNAL_CELLULAR_NO_SIM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SIGNAL_CELLULAR_NO_SIM_instance;
  }
  var MaterialIcon$SIGNAL_CELLULAR_NULL_instance;
  function MaterialIcon$SIGNAL_CELLULAR_NULL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SIGNAL_CELLULAR_NULL_instance;
  }
  var MaterialIcon$SIGNAL_CELLULAR_OFF_instance;
  function MaterialIcon$SIGNAL_CELLULAR_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SIGNAL_CELLULAR_OFF_instance;
  }
  var MaterialIcon$SIGNAL_WIFI_4_BAR_instance;
  function MaterialIcon$SIGNAL_WIFI_4_BAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SIGNAL_WIFI_4_BAR_instance;
  }
  var MaterialIcon$SIGNAL_WIFI_4_BAR_LOCK_instance;
  function MaterialIcon$SIGNAL_WIFI_4_BAR_LOCK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SIGNAL_WIFI_4_BAR_LOCK_instance;
  }
  var MaterialIcon$SIGNAL_WIFI_OFF_instance;
  function MaterialIcon$SIGNAL_WIFI_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SIGNAL_WIFI_OFF_instance;
  }
  var MaterialIcon$SIM_CARD_instance;
  function MaterialIcon$SIM_CARD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SIM_CARD_instance;
  }
  var MaterialIcon$SIM_CARD_ALERT_instance;
  function MaterialIcon$SIM_CARD_ALERT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SIM_CARD_ALERT_instance;
  }
  var MaterialIcon$SKIP_NEXT_instance;
  function MaterialIcon$SKIP_NEXT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SKIP_NEXT_instance;
  }
  var MaterialIcon$SKIP_PREVIOUS_instance;
  function MaterialIcon$SKIP_PREVIOUS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SKIP_PREVIOUS_instance;
  }
  var MaterialIcon$SLIDESHOW_instance;
  function MaterialIcon$SLIDESHOW_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SLIDESHOW_instance;
  }
  var MaterialIcon$SLOW_MOTION_VIDEO_instance;
  function MaterialIcon$SLOW_MOTION_VIDEO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SLOW_MOTION_VIDEO_instance;
  }
  var MaterialIcon$SMARTPHONE_instance;
  function MaterialIcon$SMARTPHONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SMARTPHONE_instance;
  }
  var MaterialIcon$SMOKE_FREE_instance;
  function MaterialIcon$SMOKE_FREE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SMOKE_FREE_instance;
  }
  var MaterialIcon$SMOKING_ROOMS_instance;
  function MaterialIcon$SMOKING_ROOMS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SMOKING_ROOMS_instance;
  }
  var MaterialIcon$SMS_instance;
  function MaterialIcon$SMS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SMS_instance;
  }
  var MaterialIcon$SMS_FAILED_instance;
  function MaterialIcon$SMS_FAILED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SMS_FAILED_instance;
  }
  var MaterialIcon$SNOOZE_instance;
  function MaterialIcon$SNOOZE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SNOOZE_instance;
  }
  var MaterialIcon$SORT_instance;
  function MaterialIcon$SORT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SORT_instance;
  }
  var MaterialIcon$SORT_BY_ALPHA_instance;
  function MaterialIcon$SORT_BY_ALPHA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SORT_BY_ALPHA_instance;
  }
  var MaterialIcon$SPA_instance;
  function MaterialIcon$SPA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SPA_instance;
  }
  var MaterialIcon$SPACE_BAR_instance;
  function MaterialIcon$SPACE_BAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SPACE_BAR_instance;
  }
  var MaterialIcon$SPEAKER_instance;
  function MaterialIcon$SPEAKER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SPEAKER_instance;
  }
  var MaterialIcon$SPEAKER_GROUP_instance;
  function MaterialIcon$SPEAKER_GROUP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SPEAKER_GROUP_instance;
  }
  var MaterialIcon$SPEAKER_NOTES_instance;
  function MaterialIcon$SPEAKER_NOTES_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SPEAKER_NOTES_instance;
  }
  var MaterialIcon$SPEAKER_NOTES_OFF_instance;
  function MaterialIcon$SPEAKER_NOTES_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SPEAKER_NOTES_OFF_instance;
  }
  var MaterialIcon$SPEAKER_PHONE_instance;
  function MaterialIcon$SPEAKER_PHONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SPEAKER_PHONE_instance;
  }
  var MaterialIcon$SPELLCHECK_instance;
  function MaterialIcon$SPELLCHECK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SPELLCHECK_instance;
  }
  var MaterialIcon$STAR_instance;
  function MaterialIcon$STAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STAR_instance;
  }
  var MaterialIcon$STAR_BORDER_instance;
  function MaterialIcon$STAR_BORDER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STAR_BORDER_instance;
  }
  var MaterialIcon$STAR_HALF_instance;
  function MaterialIcon$STAR_HALF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STAR_HALF_instance;
  }
  var MaterialIcon$STARS_instance;
  function MaterialIcon$STARS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STARS_instance;
  }
  var MaterialIcon$STAY_CURRENT_LANDSCAPE_instance;
  function MaterialIcon$STAY_CURRENT_LANDSCAPE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STAY_CURRENT_LANDSCAPE_instance;
  }
  var MaterialIcon$STAY_CURRENT_PORTRAIT_instance;
  function MaterialIcon$STAY_CURRENT_PORTRAIT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STAY_CURRENT_PORTRAIT_instance;
  }
  var MaterialIcon$STAY_PRIMARY_LANDSCAPE_instance;
  function MaterialIcon$STAY_PRIMARY_LANDSCAPE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STAY_PRIMARY_LANDSCAPE_instance;
  }
  var MaterialIcon$STAY_PRIMARY_PORTRAIT_instance;
  function MaterialIcon$STAY_PRIMARY_PORTRAIT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STAY_PRIMARY_PORTRAIT_instance;
  }
  var MaterialIcon$STOP_instance;
  function MaterialIcon$STOP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STOP_instance;
  }
  var MaterialIcon$STOP_SCREEN_SHARE_instance;
  function MaterialIcon$STOP_SCREEN_SHARE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STOP_SCREEN_SHARE_instance;
  }
  var MaterialIcon$STORAGE_instance;
  function MaterialIcon$STORAGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STORAGE_instance;
  }
  var MaterialIcon$STORE_instance;
  function MaterialIcon$STORE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STORE_instance;
  }
  var MaterialIcon$STORE_MALL_DIRECTORY_instance;
  function MaterialIcon$STORE_MALL_DIRECTORY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STORE_MALL_DIRECTORY_instance;
  }
  var MaterialIcon$STRAIGHTEN_instance;
  function MaterialIcon$STRAIGHTEN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STRAIGHTEN_instance;
  }
  var MaterialIcon$STREETVIEW_instance;
  function MaterialIcon$STREETVIEW_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STREETVIEW_instance;
  }
  var MaterialIcon$STRIKETHROUGH_S_instance;
  function MaterialIcon$STRIKETHROUGH_S_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STRIKETHROUGH_S_instance;
  }
  var MaterialIcon$STYLE_instance;
  function MaterialIcon$STYLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STYLE_instance;
  }
  var MaterialIcon$SUBDIRECTORY_ARROW_LEFT_instance;
  function MaterialIcon$SUBDIRECTORY_ARROW_LEFT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SUBDIRECTORY_ARROW_LEFT_instance;
  }
  var MaterialIcon$SUBDIRECTORY_ARROW_RIGHT_instance;
  function MaterialIcon$SUBDIRECTORY_ARROW_RIGHT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SUBDIRECTORY_ARROW_RIGHT_instance;
  }
  var MaterialIcon$SUBJECT_instance;
  function MaterialIcon$SUBJECT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SUBJECT_instance;
  }
  var MaterialIcon$SUBSCRIPTIONS_instance;
  function MaterialIcon$SUBSCRIPTIONS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SUBSCRIPTIONS_instance;
  }
  var MaterialIcon$SUBTITLES_instance;
  function MaterialIcon$SUBTITLES_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SUBTITLES_instance;
  }
  var MaterialIcon$SUBWAY_instance;
  function MaterialIcon$SUBWAY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SUBWAY_instance;
  }
  var MaterialIcon$SUPERVISOR_ACCOUNT_instance;
  function MaterialIcon$SUPERVISOR_ACCOUNT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SUPERVISOR_ACCOUNT_instance;
  }
  var MaterialIcon$SURROUND_SOUND_instance;
  function MaterialIcon$SURROUND_SOUND_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SURROUND_SOUND_instance;
  }
  var MaterialIcon$SWAP_CALLS_instance;
  function MaterialIcon$SWAP_CALLS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SWAP_CALLS_instance;
  }
  var MaterialIcon$SWAP_HORIZ_instance;
  function MaterialIcon$SWAP_HORIZ_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SWAP_HORIZ_instance;
  }
  var MaterialIcon$SWAP_VERT_instance;
  function MaterialIcon$SWAP_VERT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SWAP_VERT_instance;
  }
  var MaterialIcon$SWAP_VERTICAL_CIRCLE_instance;
  function MaterialIcon$SWAP_VERTICAL_CIRCLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SWAP_VERTICAL_CIRCLE_instance;
  }
  var MaterialIcon$SWITCH_CAMERA_instance;
  function MaterialIcon$SWITCH_CAMERA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SWITCH_CAMERA_instance;
  }
  var MaterialIcon$SWITCH_VIDEO_instance;
  function MaterialIcon$SWITCH_VIDEO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SWITCH_VIDEO_instance;
  }
  var MaterialIcon$SYNC_instance;
  function MaterialIcon$SYNC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SYNC_instance;
  }
  var MaterialIcon$SYNC_DISABLED_instance;
  function MaterialIcon$SYNC_DISABLED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SYNC_DISABLED_instance;
  }
  var MaterialIcon$SYNC_PROBLEM_instance;
  function MaterialIcon$SYNC_PROBLEM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SYNC_PROBLEM_instance;
  }
  var MaterialIcon$SYSTEM_UPDATE_instance;
  function MaterialIcon$SYSTEM_UPDATE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SYSTEM_UPDATE_instance;
  }
  var MaterialIcon$SYSTEM_UPDATE_ALT_instance;
  function MaterialIcon$SYSTEM_UPDATE_ALT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SYSTEM_UPDATE_ALT_instance;
  }
  var MaterialIcon$TAB_instance;
  function MaterialIcon$TAB_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TAB_instance;
  }
  var MaterialIcon$TAB_UNSELECTED_instance;
  function MaterialIcon$TAB_UNSELECTED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TAB_UNSELECTED_instance;
  }
  var MaterialIcon$TABLET_instance;
  function MaterialIcon$TABLET_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TABLET_instance;
  }
  var MaterialIcon$TABLET_ANDROID_instance;
  function MaterialIcon$TABLET_ANDROID_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TABLET_ANDROID_instance;
  }
  var MaterialIcon$TABLET_MAC_instance;
  function MaterialIcon$TABLET_MAC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TABLET_MAC_instance;
  }
  var MaterialIcon$TAG_FACES_instance;
  function MaterialIcon$TAG_FACES_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TAG_FACES_instance;
  }
  var MaterialIcon$TAP_AND_PLAY_instance;
  function MaterialIcon$TAP_AND_PLAY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TAP_AND_PLAY_instance;
  }
  var MaterialIcon$TERRAIN_instance;
  function MaterialIcon$TERRAIN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TERRAIN_instance;
  }
  var MaterialIcon$TEXT_FIELDS_instance;
  function MaterialIcon$TEXT_FIELDS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TEXT_FIELDS_instance;
  }
  var MaterialIcon$TEXT_FORMAT_instance;
  function MaterialIcon$TEXT_FORMAT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TEXT_FORMAT_instance;
  }
  var MaterialIcon$TEXTSMS_instance;
  function MaterialIcon$TEXTSMS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TEXTSMS_instance;
  }
  var MaterialIcon$TEXTURE_instance;
  function MaterialIcon$TEXTURE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TEXTURE_instance;
  }
  var MaterialIcon$THEATERS_instance;
  function MaterialIcon$THEATERS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$THEATERS_instance;
  }
  var MaterialIcon$THUMB_DOWN_instance;
  function MaterialIcon$THUMB_DOWN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$THUMB_DOWN_instance;
  }
  var MaterialIcon$THUMB_UP_instance;
  function MaterialIcon$THUMB_UP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$THUMB_UP_instance;
  }
  var MaterialIcon$THUMBS_UP_DOWN_instance;
  function MaterialIcon$THUMBS_UP_DOWN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$THUMBS_UP_DOWN_instance;
  }
  var MaterialIcon$TIME_TO_LEAVE_instance;
  function MaterialIcon$TIME_TO_LEAVE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TIME_TO_LEAVE_instance;
  }
  var MaterialIcon$TIMELAPSE_instance;
  function MaterialIcon$TIMELAPSE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TIMELAPSE_instance;
  }
  var MaterialIcon$TIMELINE_instance;
  function MaterialIcon$TIMELINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TIMELINE_instance;
  }
  var MaterialIcon$TIMER_instance;
  function MaterialIcon$TIMER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TIMER_instance;
  }
  var MaterialIcon$TIMER_10_instance;
  function MaterialIcon$TIMER_10_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TIMER_10_instance;
  }
  var MaterialIcon$TIMER_3_instance;
  function MaterialIcon$TIMER_3_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TIMER_3_instance;
  }
  var MaterialIcon$TIMER_OFF_instance;
  function MaterialIcon$TIMER_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TIMER_OFF_instance;
  }
  var MaterialIcon$TITLE_instance;
  function MaterialIcon$TITLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TITLE_instance;
  }
  var MaterialIcon$TOC_instance;
  function MaterialIcon$TOC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TOC_instance;
  }
  var MaterialIcon$TODAY_instance;
  function MaterialIcon$TODAY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TODAY_instance;
  }
  var MaterialIcon$TOLL_instance;
  function MaterialIcon$TOLL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TOLL_instance;
  }
  var MaterialIcon$TONALITY_instance;
  function MaterialIcon$TONALITY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TONALITY_instance;
  }
  var MaterialIcon$TOUCH_APP_instance;
  function MaterialIcon$TOUCH_APP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TOUCH_APP_instance;
  }
  var MaterialIcon$TOYS_instance;
  function MaterialIcon$TOYS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TOYS_instance;
  }
  var MaterialIcon$TRACK_CHANGES_instance;
  function MaterialIcon$TRACK_CHANGES_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TRACK_CHANGES_instance;
  }
  var MaterialIcon$TRAFFIC_instance;
  function MaterialIcon$TRAFFIC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TRAFFIC_instance;
  }
  var MaterialIcon$TRAIN_instance;
  function MaterialIcon$TRAIN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TRAIN_instance;
  }
  var MaterialIcon$TRAM_instance;
  function MaterialIcon$TRAM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TRAM_instance;
  }
  var MaterialIcon$TRANSFER_WITHIN_A_STATION_instance;
  function MaterialIcon$TRANSFER_WITHIN_A_STATION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TRANSFER_WITHIN_A_STATION_instance;
  }
  var MaterialIcon$TRANSFORM_instance;
  function MaterialIcon$TRANSFORM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TRANSFORM_instance;
  }
  var MaterialIcon$TRANSLATE_instance;
  function MaterialIcon$TRANSLATE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TRANSLATE_instance;
  }
  var MaterialIcon$TRENDING_DOWN_instance;
  function MaterialIcon$TRENDING_DOWN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TRENDING_DOWN_instance;
  }
  var MaterialIcon$TRENDING_FLAT_instance;
  function MaterialIcon$TRENDING_FLAT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TRENDING_FLAT_instance;
  }
  var MaterialIcon$TRENDING_UP_instance;
  function MaterialIcon$TRENDING_UP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TRENDING_UP_instance;
  }
  var MaterialIcon$TUNE_instance;
  function MaterialIcon$TUNE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TUNE_instance;
  }
  var MaterialIcon$TURNED_IN_instance;
  function MaterialIcon$TURNED_IN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TURNED_IN_instance;
  }
  var MaterialIcon$TURNED_IN_NOT_instance;
  function MaterialIcon$TURNED_IN_NOT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TURNED_IN_NOT_instance;
  }
  var MaterialIcon$TV_instance;
  function MaterialIcon$TV_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TV_instance;
  }
  var MaterialIcon$UNARCHIVE_instance;
  function MaterialIcon$UNARCHIVE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$UNARCHIVE_instance;
  }
  var MaterialIcon$UNDO_instance;
  function MaterialIcon$UNDO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$UNDO_instance;
  }
  var MaterialIcon$UNFOLD_LESS_instance;
  function MaterialIcon$UNFOLD_LESS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$UNFOLD_LESS_instance;
  }
  var MaterialIcon$UNFOLD_MORE_instance;
  function MaterialIcon$UNFOLD_MORE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$UNFOLD_MORE_instance;
  }
  var MaterialIcon$UPDATE_instance;
  function MaterialIcon$UPDATE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$UPDATE_instance;
  }
  var MaterialIcon$USB_instance;
  function MaterialIcon$USB_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$USB_instance;
  }
  var MaterialIcon$VERIFIED_USER_instance;
  function MaterialIcon$VERIFIED_USER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VERIFIED_USER_instance;
  }
  var MaterialIcon$VERTICAL_ALIGN_BOTTOM_instance;
  function MaterialIcon$VERTICAL_ALIGN_BOTTOM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VERTICAL_ALIGN_BOTTOM_instance;
  }
  var MaterialIcon$VERTICAL_ALIGN_CENTER_instance;
  function MaterialIcon$VERTICAL_ALIGN_CENTER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VERTICAL_ALIGN_CENTER_instance;
  }
  var MaterialIcon$VERTICAL_ALIGN_TOP_instance;
  function MaterialIcon$VERTICAL_ALIGN_TOP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VERTICAL_ALIGN_TOP_instance;
  }
  var MaterialIcon$VIBRATION_instance;
  function MaterialIcon$VIBRATION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIBRATION_instance;
  }
  var MaterialIcon$VIDEO_CALL_instance;
  function MaterialIcon$VIDEO_CALL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIDEO_CALL_instance;
  }
  var MaterialIcon$VIDEO_LABEL_instance;
  function MaterialIcon$VIDEO_LABEL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIDEO_LABEL_instance;
  }
  var MaterialIcon$VIDEO_LIBRARY_instance;
  function MaterialIcon$VIDEO_LIBRARY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIDEO_LIBRARY_instance;
  }
  var MaterialIcon$VIDEOCAM_instance;
  function MaterialIcon$VIDEOCAM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIDEOCAM_instance;
  }
  var MaterialIcon$VIDEOCAM_OFF_instance;
  function MaterialIcon$VIDEOCAM_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIDEOCAM_OFF_instance;
  }
  var MaterialIcon$VIDEOGAME_ASSET_instance;
  function MaterialIcon$VIDEOGAME_ASSET_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIDEOGAME_ASSET_instance;
  }
  var MaterialIcon$VIEW_AGENDA_instance;
  function MaterialIcon$VIEW_AGENDA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIEW_AGENDA_instance;
  }
  var MaterialIcon$VIEW_ARRAY_instance;
  function MaterialIcon$VIEW_ARRAY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIEW_ARRAY_instance;
  }
  var MaterialIcon$VIEW_CAROUSEL_instance;
  function MaterialIcon$VIEW_CAROUSEL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIEW_CAROUSEL_instance;
  }
  var MaterialIcon$VIEW_COLUMN_instance;
  function MaterialIcon$VIEW_COLUMN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIEW_COLUMN_instance;
  }
  var MaterialIcon$VIEW_COMFY_instance;
  function MaterialIcon$VIEW_COMFY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIEW_COMFY_instance;
  }
  var MaterialIcon$VIEW_COMPACT_instance;
  function MaterialIcon$VIEW_COMPACT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIEW_COMPACT_instance;
  }
  var MaterialIcon$VIEW_DAY_instance;
  function MaterialIcon$VIEW_DAY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIEW_DAY_instance;
  }
  var MaterialIcon$VIEW_HEADLINE_instance;
  function MaterialIcon$VIEW_HEADLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIEW_HEADLINE_instance;
  }
  var MaterialIcon$VIEW_LIST_instance;
  function MaterialIcon$VIEW_LIST_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIEW_LIST_instance;
  }
  var MaterialIcon$VIEW_MODULE_instance;
  function MaterialIcon$VIEW_MODULE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIEW_MODULE_instance;
  }
  var MaterialIcon$VIEW_QUILT_instance;
  function MaterialIcon$VIEW_QUILT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIEW_QUILT_instance;
  }
  var MaterialIcon$VIEW_STREAM_instance;
  function MaterialIcon$VIEW_STREAM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIEW_STREAM_instance;
  }
  var MaterialIcon$VIEW_WEEK_instance;
  function MaterialIcon$VIEW_WEEK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIEW_WEEK_instance;
  }
  var MaterialIcon$VIGNETTE_instance;
  function MaterialIcon$VIGNETTE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIGNETTE_instance;
  }
  var MaterialIcon$VISIBILITY_instance;
  function MaterialIcon$VISIBILITY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VISIBILITY_instance;
  }
  var MaterialIcon$VISIBILITY_OFF_instance;
  function MaterialIcon$VISIBILITY_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VISIBILITY_OFF_instance;
  }
  var MaterialIcon$VOICE_CHAT_instance;
  function MaterialIcon$VOICE_CHAT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VOICE_CHAT_instance;
  }
  var MaterialIcon$VOICEMAIL_instance;
  function MaterialIcon$VOICEMAIL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VOICEMAIL_instance;
  }
  var MaterialIcon$VOLUME_DOWN_instance;
  function MaterialIcon$VOLUME_DOWN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VOLUME_DOWN_instance;
  }
  var MaterialIcon$VOLUME_MUTE_instance;
  function MaterialIcon$VOLUME_MUTE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VOLUME_MUTE_instance;
  }
  var MaterialIcon$VOLUME_OFF_instance;
  function MaterialIcon$VOLUME_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VOLUME_OFF_instance;
  }
  var MaterialIcon$VOLUME_UP_instance;
  function MaterialIcon$VOLUME_UP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VOLUME_UP_instance;
  }
  var MaterialIcon$VPN_KEY_instance;
  function MaterialIcon$VPN_KEY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VPN_KEY_instance;
  }
  var MaterialIcon$VPN_LOCK_instance;
  function MaterialIcon$VPN_LOCK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VPN_LOCK_instance;
  }
  var MaterialIcon$WALLPAPER_instance;
  function MaterialIcon$WALLPAPER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WALLPAPER_instance;
  }
  var MaterialIcon$WARNING_instance;
  function MaterialIcon$WARNING_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WARNING_instance;
  }
  var MaterialIcon$WATCH_instance;
  function MaterialIcon$WATCH_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WATCH_instance;
  }
  var MaterialIcon$WATCH_LATER_instance;
  function MaterialIcon$WATCH_LATER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WATCH_LATER_instance;
  }
  var MaterialIcon$WB_AUTO_instance;
  function MaterialIcon$WB_AUTO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WB_AUTO_instance;
  }
  var MaterialIcon$WB_CLOUDY_instance;
  function MaterialIcon$WB_CLOUDY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WB_CLOUDY_instance;
  }
  var MaterialIcon$WB_INCANDESCENT_instance;
  function MaterialIcon$WB_INCANDESCENT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WB_INCANDESCENT_instance;
  }
  var MaterialIcon$WB_IRIDESCENT_instance;
  function MaterialIcon$WB_IRIDESCENT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WB_IRIDESCENT_instance;
  }
  var MaterialIcon$WB_SUNNY_instance;
  function MaterialIcon$WB_SUNNY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WB_SUNNY_instance;
  }
  var MaterialIcon$WC_instance;
  function MaterialIcon$WC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WC_instance;
  }
  var MaterialIcon$WEB_instance;
  function MaterialIcon$WEB_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WEB_instance;
  }
  var MaterialIcon$WEB_ASSET_instance;
  function MaterialIcon$WEB_ASSET_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WEB_ASSET_instance;
  }
  var MaterialIcon$WEEKEND_instance;
  function MaterialIcon$WEEKEND_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WEEKEND_instance;
  }
  var MaterialIcon$WHATSHOT_instance;
  function MaterialIcon$WHATSHOT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WHATSHOT_instance;
  }
  var MaterialIcon$WIDGETS_instance;
  function MaterialIcon$WIDGETS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WIDGETS_instance;
  }
  var MaterialIcon$WIFI_instance;
  function MaterialIcon$WIFI_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WIFI_instance;
  }
  var MaterialIcon$WIFI_LOCK_instance;
  function MaterialIcon$WIFI_LOCK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WIFI_LOCK_instance;
  }
  var MaterialIcon$WIFI_TETHERING_instance;
  function MaterialIcon$WIFI_TETHERING_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WIFI_TETHERING_instance;
  }
  var MaterialIcon$WORK_instance;
  function MaterialIcon$WORK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WORK_instance;
  }
  var MaterialIcon$WRAP_TEXT_instance;
  function MaterialIcon$WRAP_TEXT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WRAP_TEXT_instance;
  }
  var MaterialIcon$YOUTUBE_SEARCHED_FOR_instance;
  function MaterialIcon$YOUTUBE_SEARCHED_FOR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$YOUTUBE_SEARCHED_FOR_instance;
  }
  var MaterialIcon$ZOOM_IN_instance;
  function MaterialIcon$ZOOM_IN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ZOOM_IN_instance;
  }
  var MaterialIcon$ZOOM_OUT_instance;
  function MaterialIcon$ZOOM_OUT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ZOOM_OUT_instance;
  }
  var MaterialIcon$ZOOM_OUT_MAP_instance;
  function MaterialIcon$ZOOM_OUT_MAP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ZOOM_OUT_MAP_instance;
  }
  Object.defineProperty(MaterialIcon.prototype, 'element', {
    get: function () {
      var $receiver = document.createElement('i');
      $receiver.classList.add('material-icons');
      $receiver.textContent = this.ligature_6ddpre$_0;
      return $receiver;
    }
  });
  MaterialIcon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MaterialIcon',
    interfaces: [Icon, Enum]
  };
  function MaterialIcon$values() {
    return [MaterialIcon$ROTATION_3D_getInstance(), MaterialIcon$AC_UNIT_getInstance(), MaterialIcon$ACCESS_ALARM_getInstance(), MaterialIcon$ACCESS_ALARMS_getInstance(), MaterialIcon$ACCESS_TIME_getInstance(), MaterialIcon$ACCESSIBILITY_getInstance(), MaterialIcon$ACCESSIBLE_getInstance(), MaterialIcon$ACCOUNT_BALANCE_getInstance(), MaterialIcon$ACCOUNT_BALANCE_WALLET_getInstance(), MaterialIcon$ACCOUNT_BOX_getInstance(), MaterialIcon$ACCOUNT_CIRCLE_getInstance(), MaterialIcon$ADB_getInstance(), MaterialIcon$ADD_getInstance(), MaterialIcon$ADD_A_PHOTO_getInstance(), MaterialIcon$ADD_ALARM_getInstance(), MaterialIcon$ADD_ALERT_getInstance(), MaterialIcon$ADD_BOX_getInstance(), MaterialIcon$ADD_CIRCLE_getInstance(), MaterialIcon$ADD_CIRCLE_OUTLINE_getInstance(), MaterialIcon$ADD_LOCATION_getInstance(), MaterialIcon$ADD_SHOPPING_CART_getInstance(), MaterialIcon$ADD_TO_PHOTOS_getInstance(), MaterialIcon$ADD_TO_QUEUE_getInstance(), MaterialIcon$ADJUST_getInstance(), MaterialIcon$AIRLINE_SEAT_FLAT_getInstance(), MaterialIcon$AIRLINE_SEAT_FLAT_ANGLED_getInstance(), MaterialIcon$AIRLINE_SEAT_INDIVIDUAL_SUITE_getInstance(), MaterialIcon$AIRLINE_SEAT_LEGROOM_EXTRA_getInstance(), MaterialIcon$AIRLINE_SEAT_LEGROOM_NORMAL_getInstance(), MaterialIcon$AIRLINE_SEAT_LEGROOM_REDUCED_getInstance(), MaterialIcon$AIRLINE_SEAT_RECLINE_EXTRA_getInstance(), MaterialIcon$AIRLINE_SEAT_RECLINE_NORMAL_getInstance(), MaterialIcon$AIRPLANEMODE_ACTIVE_getInstance(), MaterialIcon$AIRPLANEMODE_INACTIVE_getInstance(), MaterialIcon$AIRPLAY_getInstance(), MaterialIcon$AIRPORT_SHUTTLE_getInstance(), MaterialIcon$ALARM_getInstance(), MaterialIcon$ALARM_ADD_getInstance(), MaterialIcon$ALARM_OFF_getInstance(), MaterialIcon$ALARM_ON_getInstance(), MaterialIcon$ALBUM_getInstance(), MaterialIcon$ALL_INCLUSIVE_getInstance(), MaterialIcon$ALL_OUT_getInstance(), MaterialIcon$ANDROID_getInstance(), MaterialIcon$ANNOUNCEMENT_getInstance(), MaterialIcon$APPS_getInstance(), MaterialIcon$ARCHIVE_getInstance(), MaterialIcon$ARROW_BACK_getInstance(), MaterialIcon$ARROW_DOWNWARD_getInstance(), MaterialIcon$ARROW_DROP_DOWN_getInstance(), MaterialIcon$ARROW_DROP_DOWN_CIRCLE_getInstance(), MaterialIcon$ARROW_DROP_UP_getInstance(), MaterialIcon$ARROW_FORWARD_getInstance(), MaterialIcon$ARROW_UPWARD_getInstance(), MaterialIcon$ART_TRACK_getInstance(), MaterialIcon$ASPECT_RATIO_getInstance(), MaterialIcon$ASSESSMENT_getInstance(), MaterialIcon$ASSIGNMENT_getInstance(), MaterialIcon$ASSIGNMENT_IND_getInstance(), MaterialIcon$ASSIGNMENT_LATE_getInstance(), MaterialIcon$ASSIGNMENT_RETURN_getInstance(), MaterialIcon$ASSIGNMENT_RETURNED_getInstance(), MaterialIcon$ASSIGNMENT_TURNED_IN_getInstance(), MaterialIcon$ASSISTANT_getInstance(), MaterialIcon$ASSISTANT_PHOTO_getInstance(), MaterialIcon$ATTACH_FILE_getInstance(), MaterialIcon$ATTACH_MONEY_getInstance(), MaterialIcon$ATTACHMENT_getInstance(), MaterialIcon$AUDIOTRACK_getInstance(), MaterialIcon$AUTORENEW_getInstance(), MaterialIcon$AV_TIMER_getInstance(), MaterialIcon$BACKSPACE_getInstance(), MaterialIcon$BACKUP_getInstance(), MaterialIcon$BATTERY_ALERT_getInstance(), MaterialIcon$BATTERY_CHARGING_FULL_getInstance(), MaterialIcon$BATTERY_FULL_getInstance(), MaterialIcon$BATTERY_STD_getInstance(), MaterialIcon$BATTERY_UNKNOWN_getInstance(), MaterialIcon$BEACH_ACCESS_getInstance(), MaterialIcon$BEENHERE_getInstance(), MaterialIcon$BLOCK_getInstance(), MaterialIcon$BLUETOOTH_getInstance(), MaterialIcon$BLUETOOTH_AUDIO_getInstance(), MaterialIcon$BLUETOOTH_CONNECTED_getInstance(), MaterialIcon$BLUETOOTH_DISABLED_getInstance(), MaterialIcon$BLUETOOTH_SEARCHING_getInstance(), MaterialIcon$BLUR_CIRCULAR_getInstance(), MaterialIcon$BLUR_LINEAR_getInstance(), MaterialIcon$BLUR_OFF_getInstance(), MaterialIcon$BLUR_ON_getInstance(), MaterialIcon$BOOK_getInstance(), MaterialIcon$BOOKMARK_getInstance(), MaterialIcon$BOOKMARK_BORDER_getInstance(), MaterialIcon$BORDER_ALL_getInstance(), MaterialIcon$BORDER_BOTTOM_getInstance(), MaterialIcon$BORDER_CLEAR_getInstance(), MaterialIcon$BORDER_COLOR_getInstance(), MaterialIcon$BORDER_HORIZONTAL_getInstance(), MaterialIcon$BORDER_INNER_getInstance(), MaterialIcon$BORDER_LEFT_getInstance(), MaterialIcon$BORDER_OUTER_getInstance(), MaterialIcon$BORDER_RIGHT_getInstance(), MaterialIcon$BORDER_STYLE_getInstance(), MaterialIcon$BORDER_TOP_getInstance(), MaterialIcon$BORDER_VERTICAL_getInstance(), MaterialIcon$BRANDING_WATERMARK_getInstance(), MaterialIcon$BRIGHTNESS_1_getInstance(), MaterialIcon$BRIGHTNESS_2_getInstance(), MaterialIcon$BRIGHTNESS_3_getInstance(), MaterialIcon$BRIGHTNESS_4_getInstance(), MaterialIcon$BRIGHTNESS_5_getInstance(), MaterialIcon$BRIGHTNESS_6_getInstance(), MaterialIcon$BRIGHTNESS_7_getInstance(), MaterialIcon$BRIGHTNESS_AUTO_getInstance(), MaterialIcon$BRIGHTNESS_HIGH_getInstance(), MaterialIcon$BRIGHTNESS_LOW_getInstance(), MaterialIcon$BRIGHTNESS_MEDIUM_getInstance(), MaterialIcon$BROKEN_IMAGE_getInstance(), MaterialIcon$BRUSH_getInstance(), MaterialIcon$BUBBLE_CHART_getInstance(), MaterialIcon$BUG_REPORT_getInstance(), MaterialIcon$BUILD_getInstance(), MaterialIcon$BURST_MODE_getInstance(), MaterialIcon$BUSINESS_getInstance(), MaterialIcon$BUSINESS_CENTER_getInstance(), MaterialIcon$CACHED_getInstance(), MaterialIcon$CAKE_getInstance(), MaterialIcon$CALL_getInstance(), MaterialIcon$CALL_END_getInstance(), MaterialIcon$CALL_MADE_getInstance(), MaterialIcon$CALL_MERGE_getInstance(), MaterialIcon$CALL_MISSED_getInstance(), MaterialIcon$CALL_MISSED_OUTGOING_getInstance(), MaterialIcon$CALL_RECEIVED_getInstance(), MaterialIcon$CALL_SPLIT_getInstance(), MaterialIcon$CALL_TO_ACTION_getInstance(), MaterialIcon$CAMERA_getInstance(), MaterialIcon$CAMERA_ALT_getInstance(), MaterialIcon$CAMERA_ENHANCE_getInstance(), MaterialIcon$CAMERA_FRONT_getInstance(), MaterialIcon$CAMERA_REAR_getInstance(), MaterialIcon$CAMERA_ROLL_getInstance(), MaterialIcon$CANCEL_getInstance(), MaterialIcon$CARD_GIFTCARD_getInstance(), MaterialIcon$CARD_MEMBERSHIP_getInstance(), MaterialIcon$CARD_TRAVEL_getInstance(), MaterialIcon$CASINO_getInstance(), MaterialIcon$CAST_getInstance(), MaterialIcon$CAST_CONNECTED_getInstance(), MaterialIcon$CENTER_FOCUS_STRONG_getInstance(), MaterialIcon$CENTER_FOCUS_WEAK_getInstance(), MaterialIcon$CHANGE_HISTORY_getInstance(), MaterialIcon$CHAT_getInstance(), MaterialIcon$CHAT_BUBBLE_getInstance(), MaterialIcon$CHAT_BUBBLE_OUTLINE_getInstance(), MaterialIcon$CHECK_getInstance(), MaterialIcon$CHECK_BOX_getInstance(), MaterialIcon$CHECK_BOX_OUTLINE_BLANK_getInstance(), MaterialIcon$CHECK_CIRCLE_getInstance(), MaterialIcon$CHEVRON_LEFT_getInstance(), MaterialIcon$CHEVRON_RIGHT_getInstance(), MaterialIcon$CHILD_CARE_getInstance(), MaterialIcon$CHILD_FRIENDLY_getInstance(), MaterialIcon$CHROME_RR_MODE_getInstance(), MaterialIcon$CLASS_getInstance(), MaterialIcon$CLEAR_getInstance(), MaterialIcon$CLEAR_ALL_getInstance(), MaterialIcon$CLOSE_getInstance(), MaterialIcon$CLOSED_CAPTION_getInstance(), MaterialIcon$CLOUD_getInstance(), MaterialIcon$CLOUD_CIRCLE_getInstance(), MaterialIcon$CLOUD_DONE_getInstance(), MaterialIcon$CLOUD_DOWNLOAD_getInstance(), MaterialIcon$CLOUD_OFF_getInstance(), MaterialIcon$CLOUD_QUEUE_getInstance(), MaterialIcon$CLOUD_UPLOAD_getInstance(), MaterialIcon$CODE_getInstance(), MaterialIcon$COLLECTIONS_getInstance(), MaterialIcon$COLLECTIONS_BOOKMARK_getInstance(), MaterialIcon$COLOR_LENS_getInstance(), MaterialIcon$COLORIZE_getInstance(), MaterialIcon$COMMENT_getInstance(), MaterialIcon$COMPARE_getInstance(), MaterialIcon$COMPARE_ARROWS_getInstance(), MaterialIcon$COMPUTER_getInstance(), MaterialIcon$CONFIRMATION_NUMBER_getInstance(), MaterialIcon$CONTACT_MAIL_getInstance(), MaterialIcon$CONTACT_PHONE_getInstance(), MaterialIcon$CONTACTS_getInstance(), MaterialIcon$CONTENT_COPY_getInstance(), MaterialIcon$CONTENT_CUT_getInstance(), MaterialIcon$CONTENT_PASTE_getInstance(), MaterialIcon$CONTROL_POINT_getInstance(), MaterialIcon$CONTROL_POINT_DUPLICATE_getInstance(), MaterialIcon$COPYRIGHT_getInstance(), MaterialIcon$CREATE_getInstance(), MaterialIcon$CREATE_NEW_FOLDER_getInstance(), MaterialIcon$CREDIT_CARD_getInstance(), MaterialIcon$CROP_getInstance(), MaterialIcon$CROP_16_9_getInstance(), MaterialIcon$CROP_3_2_getInstance(), MaterialIcon$CROP_5_4_getInstance(), MaterialIcon$CROP_7_5_getInstance(), MaterialIcon$CROP_DIN_getInstance(), MaterialIcon$CROP_FREE_getInstance(), MaterialIcon$CROP_LANDSCAPE_getInstance(), MaterialIcon$CROP_ORIGINAL_getInstance(), MaterialIcon$CROP_PORTRAIT_getInstance(), MaterialIcon$CROP_ROTATE_getInstance(), MaterialIcon$CROP_SQUARE_getInstance(), MaterialIcon$DASHBOARD_getInstance(), MaterialIcon$DATA_USAGE_getInstance(), MaterialIcon$DATE_RANGE_getInstance(), MaterialIcon$DEHAZE_getInstance(), MaterialIcon$DELETE_getInstance(), MaterialIcon$DELETE_FOREVER_getInstance(), MaterialIcon$DELETE_SWEEP_getInstance(), MaterialIcon$DESCRIPTION_getInstance(), MaterialIcon$DESKTOP_MAC_getInstance(), MaterialIcon$DESKTOP_WINDOWS_getInstance(), MaterialIcon$DETAILS_getInstance(), MaterialIcon$DEVELOPER_BOARD_getInstance(), MaterialIcon$DEVELOPER_MODE_getInstance(), MaterialIcon$DEVICE_HUB_getInstance(), MaterialIcon$DEVICES_getInstance(), MaterialIcon$DEVICES_OTHER_getInstance(), MaterialIcon$DIALER_SIP_getInstance(), MaterialIcon$DIALPAD_getInstance(), MaterialIcon$DIRECTIONS_getInstance(), MaterialIcon$DIRECTIONS_BIKE_getInstance(), MaterialIcon$DIRECTIONS_BOAT_getInstance(), MaterialIcon$DIRECTIONS_BUS_getInstance(), MaterialIcon$DIRECTIONS_CAR_getInstance(), MaterialIcon$DIRECTIONS_RAILWAY_getInstance(), MaterialIcon$DIRECTIONS_RUN_getInstance(), MaterialIcon$DIRECTIONS_SUBWAY_getInstance(), MaterialIcon$DIRECTIONS_TRANSIT_getInstance(), MaterialIcon$DIRECTIONS_WALK_getInstance(), MaterialIcon$DISC_FULL_getInstance(), MaterialIcon$DNS_getInstance(), MaterialIcon$DO_NOT_DISTURB_getInstance(), MaterialIcon$DO_NOT_DISTURB_ALT_getInstance(), MaterialIcon$DO_NOT_DISTURB_OFF_getInstance(), MaterialIcon$DO_NOT_DISTURB_ON_getInstance(), MaterialIcon$DOCK_getInstance(), MaterialIcon$DOMAIN_getInstance(), MaterialIcon$DONE_getInstance(), MaterialIcon$DONE_ALL_getInstance(), MaterialIcon$DONUT_LARGE_getInstance(), MaterialIcon$DONUT_SMALL_getInstance(), MaterialIcon$DRAFTS_getInstance(), MaterialIcon$DRAG_HANDLE_getInstance(), MaterialIcon$DRIVE_ETA_getInstance(), MaterialIcon$DVR_getInstance(), MaterialIcon$EDIT_getInstance(), MaterialIcon$EDIT_LOCATION_getInstance(), MaterialIcon$EJECT_getInstance(), MaterialIcon$EMAIL_getInstance(), MaterialIcon$ENHANCED_ENCRYPTION_getInstance(), MaterialIcon$EQUALIZER_getInstance(), MaterialIcon$ERROR_getInstance(), MaterialIcon$ERROR_OUTLINE_getInstance(), MaterialIcon$EURO_SYMBOL_getInstance(), MaterialIcon$EV_STATION_getInstance(), MaterialIcon$EVENT_getInstance(), MaterialIcon$EVENT_AVAILABLE_getInstance(), MaterialIcon$EVENT_BUSY_getInstance(), MaterialIcon$EVENT_NOTE_getInstance(), MaterialIcon$EVENT_SEAT_getInstance(), MaterialIcon$EXIT_TO_APP_getInstance(), MaterialIcon$EXPAND_LESS_getInstance(), MaterialIcon$EXPAND_MORE_getInstance(), MaterialIcon$EXPLICIT_getInstance(), MaterialIcon$EXPLORE_getInstance(), MaterialIcon$EXPOSURE_getInstance(), MaterialIcon$EXPOSURE_NEG_1_getInstance(), MaterialIcon$EXPOSURE_NEG_2_getInstance(), MaterialIcon$EXPOSURE_PLUS_1_getInstance(), MaterialIcon$EXPOSURE_PLUS_2_getInstance(), MaterialIcon$EXPOSURE_ZERO_getInstance(), MaterialIcon$EXTENSION_getInstance(), MaterialIcon$FACE_getInstance(), MaterialIcon$FAST_FORWARD_getInstance(), MaterialIcon$FAST_REWIND_getInstance(), MaterialIcon$FAVORITE_getInstance(), MaterialIcon$FAVORITE_BORDER_getInstance(), MaterialIcon$FEATURED_PLAY_LIST_getInstance(), MaterialIcon$FEATURED_VIDEO_getInstance(), MaterialIcon$FACK_getInstance(), MaterialIcon$FIBER_DVR_getInstance(), MaterialIcon$FIBER_MANUAL_RECORD_getInstance(), MaterialIcon$FIBER_NEW_getInstance(), MaterialIcon$FIBER_PIN_getInstance(), MaterialIcon$FIBER_SMART_RECORD_getInstance(), MaterialIcon$FILE_DOWNLOAD_getInstance(), MaterialIcon$FILE_UPLOAD_getInstance(), MaterialIcon$FILTER_getInstance(), MaterialIcon$FILTER_1_getInstance(), MaterialIcon$FILTER_2_getInstance(), MaterialIcon$FILTER_3_getInstance(), MaterialIcon$FILTER_4_getInstance(), MaterialIcon$FILTER_5_getInstance(), MaterialIcon$FILTER_6_getInstance(), MaterialIcon$FILTER_7_getInstance(), MaterialIcon$FILTER_8_getInstance(), MaterialIcon$FILTER_9_getInstance(), MaterialIcon$FILTER_9_PLUS_getInstance(), MaterialIcon$FILTER_B_AND_W_getInstance(), MaterialIcon$FILTER_CENTER_FOCUS_getInstance(), MaterialIcon$FILTER_DRAMA_getInstance(), MaterialIcon$FILTER_FRAMES_getInstance(), MaterialIcon$FILTER_HDR_getInstance(), MaterialIcon$FILTER_LIST_getInstance(), MaterialIcon$FILTER_NONE_getInstance(), MaterialIcon$FILTER_TILT_SHIFT_getInstance(), MaterialIcon$FILTER_VINTAGE_getInstance(), MaterialIcon$FIND_IN_PAGE_getInstance(), MaterialIcon$FIND_REPLACE_getInstance(), MaterialIcon$FINGERPRINT_getInstance(), MaterialIcon$FIRST_PAGE_getInstance(), MaterialIcon$FITNESS_CENTER_getInstance(), MaterialIcon$FLAG_getInstance(), MaterialIcon$FLARE_getInstance(), MaterialIcon$FLASH_AUTO_getInstance(), MaterialIcon$FLASH_OFF_getInstance(), MaterialIcon$FLASH_ON_getInstance(), MaterialIcon$FLIGHT_getInstance(), MaterialIcon$FLIGHT_LAND_getInstance(), MaterialIcon$FLIGHT_TAKEOFF_getInstance(), MaterialIcon$FLIP_getInstance(), MaterialIcon$FLIP_TO_BACK_getInstance(), MaterialIcon$FLIP_TO_FRONT_getInstance(), MaterialIcon$FOLDER_getInstance(), MaterialIcon$FOLDER_OPEN_getInstance(), MaterialIcon$FOLDER_SHARED_getInstance(), MaterialIcon$FOLDER_SPECIAL_getInstance(), MaterialIcon$FONT_DOWNLOAD_getInstance(), MaterialIcon$FORMAT_ALIGN_CENTER_getInstance(), MaterialIcon$FORMAT_ALIGN_JUSTIFY_getInstance(), MaterialIcon$FORMAT_ALIGN_LEFT_getInstance(), MaterialIcon$FORMAT_ALIGN_RIGHT_getInstance(), MaterialIcon$FORMAT_BOLD_getInstance(), MaterialIcon$FORMAT_CLEAR_getInstance(), MaterialIcon$FORMAT_COLOR_FILL_getInstance(), MaterialIcon$FORMAT_COLOR_RESET_getInstance(), MaterialIcon$FORMAT_COLOR_TEXT_getInstance(), MaterialIcon$FORMAT_INDENT_DECREASE_getInstance(), MaterialIcon$FORMAT_INDENT_INCREASE_getInstance(), MaterialIcon$FORMAT_ITALIC_getInstance(), MaterialIcon$FORMAT_LINE_SPACING_getInstance(), MaterialIcon$FORMAT_LIST_BULLETED_getInstance(), MaterialIcon$FORMAT_LIST_NUMBERED_getInstance(), MaterialIcon$FORMAT_PAINT_getInstance(), MaterialIcon$FORMAT_QUOTE_getInstance(), MaterialIcon$FORMAT_SHAPES_getInstance(), MaterialIcon$FORMAT_SIZE_getInstance(), MaterialIcon$FORMAT_STRIKETHROUGH_getInstance(), MaterialIcon$FORMAT_TEXTDIRECTION_L_TO_R_getInstance(), MaterialIcon$FORMAT_TEXTDIRECTION_R_TO_L_getInstance(), MaterialIcon$FORMAT_UNDERLINED_getInstance(), MaterialIcon$FORUM_getInstance(), MaterialIcon$FORWARD_getInstance(), MaterialIcon$FORWARD_10_getInstance(), MaterialIcon$FORWARD_30_getInstance(), MaterialIcon$FORWARD_5_getInstance(), MaterialIcon$FREE_BREAKFAST_getInstance(), MaterialIcon$FULLSCREEN_getInstance(), MaterialIcon$FULLSCREEN_EXIT_getInstance(), MaterialIcon$FUNCTIONS_getInstance(), MaterialIcon$G_TRANSLATE_getInstance(), MaterialIcon$GAMEPAD_getInstance(), MaterialIcon$GAMES_getInstance(), MaterialIcon$GAVEL_getInstance(), MaterialIcon$GESTURE_getInstance(), MaterialIcon$GET_APP_getInstance(), MaterialIcon$GIF_getInstance(), MaterialIcon$GOLF_COURSE_getInstance(), MaterialIcon$GPS_FIXED_getInstance(), MaterialIcon$GPS_NOT_FIXED_getInstance(), MaterialIcon$GPS_OFF_getInstance(), MaterialIcon$GRADE_getInstance(), MaterialIcon$GRADIENT_getInstance(), MaterialIcon$GRAIN_getInstance(), MaterialIcon$GRAPHIC_EQ_getInstance(), MaterialIcon$GRID_OFF_getInstance(), MaterialIcon$GRID_ON_getInstance(), MaterialIcon$GROUP_getInstance(), MaterialIcon$GROUP_ADD_getInstance(), MaterialIcon$GROUP_WORK_getInstance(), MaterialIcon$HD_getInstance(), MaterialIcon$HDR_OFF_getInstance(), MaterialIcon$HDR_ON_getInstance(), MaterialIcon$HDR_STRONG_getInstance(), MaterialIcon$HDR_WEAK_getInstance(), MaterialIcon$HEADSET_getInstance(), MaterialIcon$HEADSET_MIC_getInstance(), MaterialIcon$HEALING_getInstance(), MaterialIcon$HEARING_getInstance(), MaterialIcon$HELP_getInstance(), MaterialIcon$HELP_OUTLINE_getInstance(), MaterialIcon$HIGH_QUALITY_getInstance(), MaterialIcon$HIGHLIGHT_getInstance(), MaterialIcon$HIGHLIGHT_OFF_getInstance(), MaterialIcon$HISTORY_getInstance(), MaterialIcon$HOME_getInstance(), MaterialIcon$HOT_TUB_getInstance(), MaterialIcon$HOTEL_getInstance(), MaterialIcon$HOURGLASS_EMPTY_getInstance(), MaterialIcon$HOURGLASS_FULL_getInstance(), MaterialIcon$HTTP_getInstance(), MaterialIcon$HTTPS_getInstance(), MaterialIcon$IMAGE_getInstance(), MaterialIcon$IMAGE_ASPECT_RATIO_getInstance(), MaterialIcon$IMPORT_CONTACTS_getInstance(), MaterialIcon$IMPORT_EXPORT_getInstance(), MaterialIcon$IMPORTANT_DEVICES_getInstance(), MaterialIcon$INBOX_getInstance(), MaterialIcon$INDETERMINATE_CHECK_BOX_getInstance(), MaterialIcon$INFO_getInstance(), MaterialIcon$INFO_OUTLINE_getInstance(), MaterialIcon$INPUT_getInstance(), MaterialIcon$INSERT_CHART_getInstance(), MaterialIcon$INSERT_COMMENT_getInstance(), MaterialIcon$INSERT_DRIVE_FILE_getInstance(), MaterialIcon$INSERT_EMOTICON_getInstance(), MaterialIcon$INSERT_INVITATION_getInstance(), MaterialIcon$INSERT_LINK_getInstance(), MaterialIcon$INSERT_PHOTO_getInstance(), MaterialIcon$INVERT_COLORS_getInstance(), MaterialIcon$INVERT_COLORS_OFF_getInstance(), MaterialIcon$ISO_getInstance(), MaterialIcon$KEYBOARD_getInstance(), MaterialIcon$KEYBOARD_ARROW_DOWN_getInstance(), MaterialIcon$KEYBOARD_ARROW_LEFT_getInstance(), MaterialIcon$KEYBOARD_ARROW_RIGHT_getInstance(), MaterialIcon$KEYBOARD_ARROW_UP_getInstance(), MaterialIcon$KEYBOARD_BACKSPACE_getInstance(), MaterialIcon$KEYBOARD_CAPSLOCK_getInstance(), MaterialIcon$KEYBOARD_HIDE_getInstance(), MaterialIcon$KEYBOARD_RETURN_getInstance(), MaterialIcon$KEYBOARD_TAB_getInstance(), MaterialIcon$KEYBOARD_VOICE_getInstance(), MaterialIcon$KITCHEN_getInstance(), MaterialIcon$LABEL_getInstance(), MaterialIcon$LABEL_OUTLINE_getInstance(), MaterialIcon$LANDSCAPE_getInstance(), MaterialIcon$LANGUAGE_getInstance(), MaterialIcon$LAPTOP_getInstance(), MaterialIcon$LAPTOP_CHROMEBOOK_getInstance(), MaterialIcon$LAPTOP_MAC_getInstance(), MaterialIcon$LAPTOP_WINDOWS_getInstance(), MaterialIcon$LAST_PAGE_getInstance(), MaterialIcon$LAUNCH_getInstance(), MaterialIcon$LAYERS_getInstance(), MaterialIcon$LAYERS_CLEAR_getInstance(), MaterialIcon$LEAK_ADD_getInstance(), MaterialIcon$LEAK_REMOVE_getInstance(), MaterialIcon$LENS_getInstance(), MaterialIcon$LIBRARY_ADD_getInstance(), MaterialIcon$LIBRARY_BOOKS_getInstance(), MaterialIcon$LIBRARY_MUSIC_getInstance(), MaterialIcon$LIGHTBULB_OUTLINE_getInstance(), MaterialIcon$LINE_STYLE_getInstance(), MaterialIcon$LINE_WEIGHT_getInstance(), MaterialIcon$LINEAR_SCALE_getInstance(), MaterialIcon$LINK_getInstance(), MaterialIcon$LINKED_CAMERA_getInstance(), MaterialIcon$LIST_getInstance(), MaterialIcon$LIVE_HELP_getInstance(), MaterialIcon$LIVE_TV_getInstance(), MaterialIcon$LOCAL_ACTIVITY_getInstance(), MaterialIcon$LOCAL_AIRPORT_getInstance(), MaterialIcon$LOCAL_ATM_getInstance(), MaterialIcon$LOCAL_BAR_getInstance(), MaterialIcon$LOCAL_CAFE_getInstance(), MaterialIcon$LOCAL_CAR_WASH_getInstance(), MaterialIcon$LOCAL_CONVENIENCE_STORE_getInstance(), MaterialIcon$LOCAL_DINING_getInstance(), MaterialIcon$LOCAL_DRINK_getInstance(), MaterialIcon$LOCAL_FLORIST_getInstance(), MaterialIcon$LOCAL_GAS_STATION_getInstance(), MaterialIcon$LOCAL_GROCERY_STORE_getInstance(), MaterialIcon$LOCAL_HOSPITAL_getInstance(), MaterialIcon$LOCAL_HOTEL_getInstance(), MaterialIcon$LOCAL_LAUNDRY_SERVICE_getInstance(), MaterialIcon$LOCAL_LIBRARY_getInstance(), MaterialIcon$LOCAL_MALL_getInstance(), MaterialIcon$LOCAL_MOVIES_getInstance(), MaterialIcon$LOCAL_OFFER_getInstance(), MaterialIcon$LOCAL_PARKING_getInstance(), MaterialIcon$LOCAL_PHARMACY_getInstance(), MaterialIcon$LOCAL_PHONE_getInstance(), MaterialIcon$LOCAL_PIZZA_getInstance(), MaterialIcon$LOCAL_PLAY_getInstance(), MaterialIcon$LOCAL_POST_OFFICE_getInstance(), MaterialIcon$LOCAL_PRINTSHOP_getInstance(), MaterialIcon$LOCAL_SEE_getInstance(), MaterialIcon$LOCAL_SHIPPING_getInstance(), MaterialIcon$LOCAL_TAXI_getInstance(), MaterialIcon$LOCATION_CITY_getInstance(), MaterialIcon$LOCATION_DISABLED_getInstance(), MaterialIcon$LOCATION_OFF_getInstance(), MaterialIcon$LOCATION_ON_getInstance(), MaterialIcon$LOCATION_SEARCHING_getInstance(), MaterialIcon$LOCK_getInstance(), MaterialIcon$LOCK_OPEN_getInstance(), MaterialIcon$LOCK_OUTLINE_getInstance(), MaterialIcon$LOOKS_getInstance(), MaterialIcon$LOOKS_3_getInstance(), MaterialIcon$LOOKS_4_getInstance(), MaterialIcon$LOOKS_5_getInstance(), MaterialIcon$LOOKS_6_getInstance(), MaterialIcon$LOOKS_ONE_getInstance(), MaterialIcon$LOOKS_TWO_getInstance(), MaterialIcon$LOOP_getInstance(), MaterialIcon$LOUPE_getInstance(), MaterialIcon$LOW_PRIORITY_getInstance(), MaterialIcon$LOYALTY_getInstance(), MaterialIcon$MAIL_getInstance(), MaterialIcon$MAIL_OUTLINE_getInstance(), MaterialIcon$MAP_getInstance(), MaterialIcon$MARKUNREAD_getInstance(), MaterialIcon$MARKUNREAD_MAILBOX_getInstance(), MaterialIcon$MEMORY_getInstance(), MaterialIcon$MENU_getInstance(), MaterialIcon$MERGE_TYPE_getInstance(), MaterialIcon$MESSAGE_getInstance(), MaterialIcon$MIC_getInstance(), MaterialIcon$MIC_NONE_getInstance(), MaterialIcon$MIC_OFF_getInstance(), MaterialIcon$MMS_getInstance(), MaterialIcon$MODE_COMMENT_getInstance(), MaterialIcon$MODE_EDIT_getInstance(), MaterialIcon$MONETIZATION_ON_getInstance(), MaterialIcon$MONEY_OFF_getInstance(), MaterialIcon$MONOCHROME_PHOTOS_getInstance(), MaterialIcon$MOOD_getInstance(), MaterialIcon$MOOD_BAD_getInstance(), MaterialIcon$MORE_getInstance(), MaterialIcon$MORE_HORIZ_getInstance(), MaterialIcon$MORE_VERT_getInstance(), MaterialIcon$MOTORCYCLE_getInstance(), MaterialIcon$MOUSE_getInstance(), MaterialIcon$MOVE_TO_INBOX_getInstance(), MaterialIcon$MOVIE_getInstance(), MaterialIcon$MOVIE_CREATION_getInstance(), MaterialIcon$MOVIE_FILTER_getInstance(), MaterialIcon$MULTILINE_CHART_getInstance(), MaterialIcon$MUSIC_NOTE_getInstance(), MaterialIcon$MUSIC_VIDEO_getInstance(), MaterialIcon$MY_LOCATION_getInstance(), MaterialIcon$NATURE_getInstance(), MaterialIcon$NATURE_PEOPLE_getInstance(), MaterialIcon$NAVIGATE_BEFORE_getInstance(), MaterialIcon$NAVIGATE_NEXT_getInstance(), MaterialIcon$NAVIGATION_getInstance(), MaterialIcon$NEAR_ME_getInstance(), MaterialIcon$NETWORK_CELL_getInstance(), MaterialIcon$NETWORK_CHECK_getInstance(), MaterialIcon$NETWORK_LOCKED_getInstance(), MaterialIcon$NETWORK_WIFI_getInstance(), MaterialIcon$NEW_RELEASES_getInstance(), MaterialIcon$NEXT_WEEK_getInstance(), MaterialIcon$NFC_getInstance(), MaterialIcon$NO_ENCRYPTION_getInstance(), MaterialIcon$NO_SIM_getInstance(), MaterialIcon$NOT_INTERESTED_getInstance(), MaterialIcon$NOTE_getInstance(), MaterialIcon$NOTE_ADD_getInstance(), MaterialIcon$NOTIFICATIONS_getInstance(), MaterialIcon$NOTIFICATIONS_ACTIVE_getInstance(), MaterialIcon$NOTIFICATIONS_NONE_getInstance(), MaterialIcon$NOTIFICATIONS_OFF_getInstance(), MaterialIcon$NOTIFICATIONS_PAUSED_getInstance(), MaterialIcon$OFFLINE_PIN_getInstance(), MaterialIcon$ONDEMAND_VIDEO_getInstance(), MaterialIcon$OPACITY_getInstance(), MaterialIcon$OPEN_IN_BROWSER_getInstance(), MaterialIcon$OPEN_IN_NEW_getInstance(), MaterialIcon$OPEN_WITH_getInstance(), MaterialIcon$PAGES_getInstance(), MaterialIcon$PAGEVIEW_getInstance(), MaterialIcon$PALETTE_getInstance(), MaterialIcon$PAN_TOOL_getInstance(), MaterialIcon$PANORAMA_getInstance(), MaterialIcon$PANORAMA_FISH_EYE_getInstance(), MaterialIcon$PANORAMA_HORIZONTAL_getInstance(), MaterialIcon$PANORAMA_VERTICAL_getInstance(), MaterialIcon$PANORAMA_WIDE_ANGLE_getInstance(), MaterialIcon$PARTY_MODE_getInstance(), MaterialIcon$PAUSE_getInstance(), MaterialIcon$PAUSE_CIRCLE_FILLED_getInstance(), MaterialIcon$PAUSE_CIRCLE_OUTLINE_getInstance(), MaterialIcon$PAYMENT_getInstance(), MaterialIcon$PEOPLE_getInstance(), MaterialIcon$PEOPLE_OUTLINE_getInstance(), MaterialIcon$PERM_CAMERA_MIC_getInstance(), MaterialIcon$PERM_CONTACT_CALENDAR_getInstance(), MaterialIcon$PERM_DATA_SETTING_getInstance(), MaterialIcon$PERM_DEVICE_INFORMATION_getInstance(), MaterialIcon$PERM_IDENTITY_getInstance(), MaterialIcon$PERM_MEDIA_getInstance(), MaterialIcon$PERM_PHONE_MSG_getInstance(), MaterialIcon$PERM_SCAN_WIFI_getInstance(), MaterialIcon$PERSON_getInstance(), MaterialIcon$PERSON_ADD_getInstance(), MaterialIcon$PERSON_OUTLINE_getInstance(), MaterialIcon$PERSON_PIN_getInstance(), MaterialIcon$PERSON_PIN_CIRCLE_getInstance(), MaterialIcon$PERSONAL_VIDEO_getInstance(), MaterialIcon$PETS_getInstance(), MaterialIcon$PHONE_getInstance(), MaterialIcon$PHONE_ANDROID_getInstance(), MaterialIcon$PHONE_BLUETOOTH_SPEAKER_getInstance(), MaterialIcon$PHONE_FORWARDED_getInstance(), MaterialIcon$PHONE_IN_TALK_getInstance(), MaterialIcon$PHONE_IPHONE_getInstance(), MaterialIcon$PHONE_LOCKED_getInstance(), MaterialIcon$PHONE_MISSED_getInstance(), MaterialIcon$PHONE_PAUSED_getInstance(), MaterialIcon$PHONELINK_getInstance(), MaterialIcon$PHONELINK_ERASE_getInstance(), MaterialIcon$PHONELINK_LOCK_getInstance(), MaterialIcon$PHONELINK_OFF_getInstance(), MaterialIcon$PHONELINK_RING_getInstance(), MaterialIcon$PHONELINK_SETUP_getInstance(), MaterialIcon$PHOTO_getInstance(), MaterialIcon$PHOTO_ALBUM_getInstance(), MaterialIcon$PHOTO_CAMERA_getInstance(), MaterialIcon$PHOTO_FILTER_getInstance(), MaterialIcon$PHOTO_LIBRARY_getInstance(), MaterialIcon$PHOTO_SIZE_SELECT_ACTUAL_getInstance(), MaterialIcon$PHOTO_SIZE_SELECT_LARGE_getInstance(), MaterialIcon$PHOTO_SIZE_SELECT_SMALL_getInstance(), MaterialIcon$PICTURE_AS_PDF_getInstance(), MaterialIcon$PICTURE_IN_PICTURE_getInstance(), MaterialIcon$PICTURE_IN_PICTURE_ALT_getInstance(), MaterialIcon$PIE_CHART_getInstance(), MaterialIcon$PIE_CHART_OUTLINED_getInstance(), MaterialIcon$PIN_DROP_getInstance(), MaterialIcon$PLACE_getInstance(), MaterialIcon$PLAY_ARROW_getInstance(), MaterialIcon$PLAY_CIRCLE_FILLED_getInstance(), MaterialIcon$PLAY_CIRCLE_OUTLINE_getInstance(), MaterialIcon$PLAY_FOR_WORK_getInstance(), MaterialIcon$PLAYLIST_ADD_getInstance(), MaterialIcon$PLAYLIST_ADD_CHECK_getInstance(), MaterialIcon$PLAYLIST_PLAY_getInstance(), MaterialIcon$PLUS_ONE_getInstance(), MaterialIcon$POLL_getInstance(), MaterialIcon$POLYMER_getInstance(), MaterialIcon$POOL_getInstance(), MaterialIcon$PORTABLE_WIFI_OFF_getInstance(), MaterialIcon$PORTRAIT_getInstance(), MaterialIcon$POWER_getInstance(), MaterialIcon$POWER_INPUT_getInstance(), MaterialIcon$POWER_SETTINGS_NEW_getInstance(), MaterialIcon$PREGNANT_WOMAN_getInstance(), MaterialIcon$PRESENT_TO_ALL_getInstance(), MaterialIcon$PRINT_getInstance(), MaterialIcon$PRIORITY_HIGH_getInstance(), MaterialIcon$PUBLIC_getInstance(), MaterialIcon$PUBLISH_getInstance(), MaterialIcon$QUERY_BUILDER_getInstance(), MaterialIcon$QUESTION_ANSWER_getInstance(), MaterialIcon$QUEUE_getInstance(), MaterialIcon$QUEUE_MUSIC_getInstance(), MaterialIcon$QUEUE_PLAY_NEXT_getInstance(), MaterialIcon$RADIO_getInstance(), MaterialIcon$RADIO_BUTTON_CHECKED_getInstance(), MaterialIcon$RADIO_BUTTON_UNCHECKED_getInstance(), MaterialIcon$RATE_REVIEW_getInstance(), MaterialIcon$RECEIPT_getInstance(), MaterialIcon$RECENT_ACTORS_getInstance(), MaterialIcon$RECORD_VOICE_OVER_getInstance(), MaterialIcon$RM_getInstance(), MaterialIcon$REDO_getInstance(), MaterialIcon$REFRESH_getInstance(), MaterialIcon$REMOVE_getInstance(), MaterialIcon$REMOVE_CIRCLE_getInstance(), MaterialIcon$REMOVE_CIRCLE_OUTLINE_getInstance(), MaterialIcon$REMOVE_FROM_QUEUE_getInstance(), MaterialIcon$REMOVE_RED_EYE_getInstance(), MaterialIcon$REMOVE_SHOPPING_CART_getInstance(), MaterialIcon$REORDER_getInstance(), MaterialIcon$REPEAT_getInstance(), MaterialIcon$REPEAT_ONE_getInstance(), MaterialIcon$REPLAY_getInstance(), MaterialIcon$REPLAY_10_getInstance(), MaterialIcon$REPLAY_30_getInstance(), MaterialIcon$REPLAY_5_getInstance(), MaterialIcon$REPLY_getInstance(), MaterialIcon$REPLY_ALL_getInstance(), MaterialIcon$REPORT_getInstance(), MaterialIcon$REPORT_PROBLEM_getInstance(), MaterialIcon$RESTAURANT_getInstance(), MaterialIcon$RESTAURANT_MENU_getInstance(), MaterialIcon$RESTORE_getInstance(), MaterialIcon$RESTORE_PAGE_getInstance(), MaterialIcon$RING_VOLUME_getInstance(), MaterialIcon$ROOM_getInstance(), MaterialIcon$ROOM_SERVICE_getInstance(), MaterialIcon$ROTATE_90_DEGREES_CCW_getInstance(), MaterialIcon$ROTATE_LEFT_getInstance(), MaterialIcon$ROTATE_RIGHT_getInstance(), MaterialIcon$ROUNDED_CORNER_getInstance(), MaterialIcon$ROUTER_getInstance(), MaterialIcon$ROWING_getInstance(), MaterialIcon$RSS_FEED_getInstance(), MaterialIcon$RV_HOOKUP_getInstance(), MaterialIcon$SATELLITE_getInstance(), MaterialIcon$SAVE_getInstance(), MaterialIcon$SCANNER_getInstance(), MaterialIcon$SCHEDULE_getInstance(), MaterialIcon$SCHOOL_getInstance(), MaterialIcon$SCREEN_LOCK_LANDSCAPE_getInstance(), MaterialIcon$SCREEN_LOCK_PORTRAIT_getInstance(), MaterialIcon$SCREEN_LOCK_ROTATION_getInstance(), MaterialIcon$SCREEN_ROTATION_getInstance(), MaterialIcon$SCREEN_SHARE_getInstance(), MaterialIcon$SD_CARD_getInstance(), MaterialIcon$SD_STORAGE_getInstance(), MaterialIcon$SEARCH_getInstance(), MaterialIcon$SECURITY_getInstance(), MaterialIcon$SELECT_ALL_getInstance(), MaterialIcon$SEND_getInstance(), MaterialIcon$SENTIMENT_DISSATISFIED_getInstance(), MaterialIcon$SENTIMENT_NEUTRAL_getInstance(), MaterialIcon$SENTIMENT_SATISFIED_getInstance(), MaterialIcon$SENTIMENT_VERY_DISSATISFIED_getInstance(), MaterialIcon$SENTIMENT_VERY_SATISFIED_getInstance(), MaterialIcon$SETTINGS_getInstance(), MaterialIcon$SETTINGS_APPLICATIONS_getInstance(), MaterialIcon$SETTINGS_BACKUP_RESTORE_getInstance(), MaterialIcon$SETTINGS_BLUETOOTH_getInstance(), MaterialIcon$SETTINGS_BRIGHTNESS_getInstance(), MaterialIcon$SETTINGS_CELL_getInstance(), MaterialIcon$SETTINGS_ETHERNET_getInstance(), MaterialIcon$SETTINGS_INPUT_ANTENNA_getInstance(), MaterialIcon$SETTINGS_INPUT_COMPONENT_getInstance(), MaterialIcon$SETTINGS_INPUT_COMPOSITE_getInstance(), MaterialIcon$SETTINGS_INPUT_HDMI_getInstance(), MaterialIcon$SETTINGS_INPUT_SVIDEO_getInstance(), MaterialIcon$SETTINGS_OVERSCAN_getInstance(), MaterialIcon$SETTINGS_PHONE_getInstance(), MaterialIcon$SETTINGS_POWER_getInstance(), MaterialIcon$SETTINGS_REMOTE_getInstance(), MaterialIcon$SETTINGS_SYSTEM_DAYDREAM_getInstance(), MaterialIcon$SETTINGS_VOICE_getInstance(), MaterialIcon$SHARE_getInstance(), MaterialIcon$SHOP_getInstance(), MaterialIcon$SHOP_TWO_getInstance(), MaterialIcon$SHOPPING_BASKET_getInstance(), MaterialIcon$SHOPPING_CART_getInstance(), MaterialIcon$SHORT_TEXT_getInstance(), MaterialIcon$SHOW_CHART_getInstance(), MaterialIcon$SHUFFLE_getInstance(), MaterialIcon$SIGNAL_CELLULAR_4_BAR_getInstance(), MaterialIcon$SIGNAL_CELLULAR_CONNECTED_NO_INTERNET_4_BAR_getInstance(), MaterialIcon$SIGNAL_CELLULAR_NO_SIM_getInstance(), MaterialIcon$SIGNAL_CELLULAR_NULL_getInstance(), MaterialIcon$SIGNAL_CELLULAR_OFF_getInstance(), MaterialIcon$SIGNAL_WIFI_4_BAR_getInstance(), MaterialIcon$SIGNAL_WIFI_4_BAR_LOCK_getInstance(), MaterialIcon$SIGNAL_WIFI_OFF_getInstance(), MaterialIcon$SIM_CARD_getInstance(), MaterialIcon$SIM_CARD_ALERT_getInstance(), MaterialIcon$SKIP_NEXT_getInstance(), MaterialIcon$SKIP_PREVIOUS_getInstance(), MaterialIcon$SLIDESHOW_getInstance(), MaterialIcon$SLOW_MOTION_VIDEO_getInstance(), MaterialIcon$SMARTPHONE_getInstance(), MaterialIcon$SMOKE_FREE_getInstance(), MaterialIcon$SMOKING_ROOMS_getInstance(), MaterialIcon$SMS_getInstance(), MaterialIcon$SMS_FAILED_getInstance(), MaterialIcon$SNOOZE_getInstance(), MaterialIcon$SORT_getInstance(), MaterialIcon$SORT_BY_ALPHA_getInstance(), MaterialIcon$SPA_getInstance(), MaterialIcon$SPACE_BAR_getInstance(), MaterialIcon$SPEAKER_getInstance(), MaterialIcon$SPEAKER_GROUP_getInstance(), MaterialIcon$SPEAKER_NOTES_getInstance(), MaterialIcon$SPEAKER_NOTES_OFF_getInstance(), MaterialIcon$SPEAKER_PHONE_getInstance(), MaterialIcon$SPELLCHECK_getInstance(), MaterialIcon$STAR_getInstance(), MaterialIcon$STAR_BORDER_getInstance(), MaterialIcon$STAR_HALF_getInstance(), MaterialIcon$STARS_getInstance(), MaterialIcon$STAY_CURRENT_LANDSCAPE_getInstance(), MaterialIcon$STAY_CURRENT_PORTRAIT_getInstance(), MaterialIcon$STAY_PRIMARY_LANDSCAPE_getInstance(), MaterialIcon$STAY_PRIMARY_PORTRAIT_getInstance(), MaterialIcon$STOP_getInstance(), MaterialIcon$STOP_SCREEN_SHARE_getInstance(), MaterialIcon$STORAGE_getInstance(), MaterialIcon$STORE_getInstance(), MaterialIcon$STORE_MALL_DIRECTORY_getInstance(), MaterialIcon$STRAIGHTEN_getInstance(), MaterialIcon$STREETVIEW_getInstance(), MaterialIcon$STRIKETHROUGH_S_getInstance(), MaterialIcon$STYLE_getInstance(), MaterialIcon$SUBDIRECTORY_ARROW_LEFT_getInstance(), MaterialIcon$SUBDIRECTORY_ARROW_RIGHT_getInstance(), MaterialIcon$SUBJECT_getInstance(), MaterialIcon$SUBSCRIPTIONS_getInstance(), MaterialIcon$SUBTITLES_getInstance(), MaterialIcon$SUBWAY_getInstance(), MaterialIcon$SUPERVISOR_ACCOUNT_getInstance(), MaterialIcon$SURROUND_SOUND_getInstance(), MaterialIcon$SWAP_CALLS_getInstance(), MaterialIcon$SWAP_HORIZ_getInstance(), MaterialIcon$SWAP_VERT_getInstance(), MaterialIcon$SWAP_VERTICAL_CIRCLE_getInstance(), MaterialIcon$SWITCH_CAMERA_getInstance(), MaterialIcon$SWITCH_VIDEO_getInstance(), MaterialIcon$SYNC_getInstance(), MaterialIcon$SYNC_DISABLED_getInstance(), MaterialIcon$SYNC_PROBLEM_getInstance(), MaterialIcon$SYSTEM_UPDATE_getInstance(), MaterialIcon$SYSTEM_UPDATE_ALT_getInstance(), MaterialIcon$TAB_getInstance(), MaterialIcon$TAB_UNSELECTED_getInstance(), MaterialIcon$TABLET_getInstance(), MaterialIcon$TABLET_ANDROID_getInstance(), MaterialIcon$TABLET_MAC_getInstance(), MaterialIcon$TAG_FACES_getInstance(), MaterialIcon$TAP_AND_PLAY_getInstance(), MaterialIcon$TERRAIN_getInstance(), MaterialIcon$TEXT_FIELDS_getInstance(), MaterialIcon$TEXT_FORMAT_getInstance(), MaterialIcon$TEXTSMS_getInstance(), MaterialIcon$TEXTURE_getInstance(), MaterialIcon$THEATERS_getInstance(), MaterialIcon$THUMB_DOWN_getInstance(), MaterialIcon$THUMB_UP_getInstance(), MaterialIcon$THUMBS_UP_DOWN_getInstance(), MaterialIcon$TIME_TO_LEAVE_getInstance(), MaterialIcon$TIMELAPSE_getInstance(), MaterialIcon$TIMELINE_getInstance(), MaterialIcon$TIMER_getInstance(), MaterialIcon$TIMER_10_getInstance(), MaterialIcon$TIMER_3_getInstance(), MaterialIcon$TIMER_OFF_getInstance(), MaterialIcon$TITLE_getInstance(), MaterialIcon$TOC_getInstance(), MaterialIcon$TODAY_getInstance(), MaterialIcon$TOLL_getInstance(), MaterialIcon$TONALITY_getInstance(), MaterialIcon$TOUCH_APP_getInstance(), MaterialIcon$TOYS_getInstance(), MaterialIcon$TRACK_CHANGES_getInstance(), MaterialIcon$TRAFFIC_getInstance(), MaterialIcon$TRAIN_getInstance(), MaterialIcon$TRAM_getInstance(), MaterialIcon$TRANSFER_WITHIN_A_STATION_getInstance(), MaterialIcon$TRANSFORM_getInstance(), MaterialIcon$TRANSLATE_getInstance(), MaterialIcon$TRENDING_DOWN_getInstance(), MaterialIcon$TRENDING_FLAT_getInstance(), MaterialIcon$TRENDING_UP_getInstance(), MaterialIcon$TUNE_getInstance(), MaterialIcon$TURNED_IN_getInstance(), MaterialIcon$TURNED_IN_NOT_getInstance(), MaterialIcon$TV_getInstance(), MaterialIcon$UNARCHIVE_getInstance(), MaterialIcon$UNDO_getInstance(), MaterialIcon$UNFOLD_LESS_getInstance(), MaterialIcon$UNFOLD_MORE_getInstance(), MaterialIcon$UPDATE_getInstance(), MaterialIcon$USB_getInstance(), MaterialIcon$VERIFIED_USER_getInstance(), MaterialIcon$VERTICAL_ALIGN_BOTTOM_getInstance(), MaterialIcon$VERTICAL_ALIGN_CENTER_getInstance(), MaterialIcon$VERTICAL_ALIGN_TOP_getInstance(), MaterialIcon$VIBRATION_getInstance(), MaterialIcon$VIDEO_CALL_getInstance(), MaterialIcon$VIDEO_LABEL_getInstance(), MaterialIcon$VIDEO_LIBRARY_getInstance(), MaterialIcon$VIDEOCAM_getInstance(), MaterialIcon$VIDEOCAM_OFF_getInstance(), MaterialIcon$VIDEOGAME_ASSET_getInstance(), MaterialIcon$VIEW_AGENDA_getInstance(), MaterialIcon$VIEW_ARRAY_getInstance(), MaterialIcon$VIEW_CAROUSEL_getInstance(), MaterialIcon$VIEW_COLUMN_getInstance(), MaterialIcon$VIEW_COMFY_getInstance(), MaterialIcon$VIEW_COMPACT_getInstance(), MaterialIcon$VIEW_DAY_getInstance(), MaterialIcon$VIEW_HEADLINE_getInstance(), MaterialIcon$VIEW_LIST_getInstance(), MaterialIcon$VIEW_MODULE_getInstance(), MaterialIcon$VIEW_QUILT_getInstance(), MaterialIcon$VIEW_STREAM_getInstance(), MaterialIcon$VIEW_WEEK_getInstance(), MaterialIcon$VIGNETTE_getInstance(), MaterialIcon$VISIBILITY_getInstance(), MaterialIcon$VISIBILITY_OFF_getInstance(), MaterialIcon$VOICE_CHAT_getInstance(), MaterialIcon$VOICEMAIL_getInstance(), MaterialIcon$VOLUME_DOWN_getInstance(), MaterialIcon$VOLUME_MUTE_getInstance(), MaterialIcon$VOLUME_OFF_getInstance(), MaterialIcon$VOLUME_UP_getInstance(), MaterialIcon$VPN_KEY_getInstance(), MaterialIcon$VPN_LOCK_getInstance(), MaterialIcon$WALLPAPER_getInstance(), MaterialIcon$WARNING_getInstance(), MaterialIcon$WATCH_getInstance(), MaterialIcon$WATCH_LATER_getInstance(), MaterialIcon$WB_AUTO_getInstance(), MaterialIcon$WB_CLOUDY_getInstance(), MaterialIcon$WB_INCANDESCENT_getInstance(), MaterialIcon$WB_IRIDESCENT_getInstance(), MaterialIcon$WB_SUNNY_getInstance(), MaterialIcon$WC_getInstance(), MaterialIcon$WEB_getInstance(), MaterialIcon$WEB_ASSET_getInstance(), MaterialIcon$WEEKEND_getInstance(), MaterialIcon$WHATSHOT_getInstance(), MaterialIcon$WIDGETS_getInstance(), MaterialIcon$WIFI_getInstance(), MaterialIcon$WIFI_LOCK_getInstance(), MaterialIcon$WIFI_TETHERING_getInstance(), MaterialIcon$WORK_getInstance(), MaterialIcon$WRAP_TEXT_getInstance(), MaterialIcon$YOUTUBE_SEARCHED_FOR_getInstance(), MaterialIcon$ZOOM_IN_getInstance(), MaterialIcon$ZOOM_OUT_getInstance(), MaterialIcon$ZOOM_OUT_MAP_getInstance()];
  }
  MaterialIcon.values = MaterialIcon$values;
  function MaterialIcon$valueOf(name) {
    switch (name) {
      case 'ROTATION_3D':
        return MaterialIcon$ROTATION_3D_getInstance();
      case 'AC_UNIT':
        return MaterialIcon$AC_UNIT_getInstance();
      case 'ACCESS_ALARM':
        return MaterialIcon$ACCESS_ALARM_getInstance();
      case 'ACCESS_ALARMS':
        return MaterialIcon$ACCESS_ALARMS_getInstance();
      case 'ACCESS_TIME':
        return MaterialIcon$ACCESS_TIME_getInstance();
      case 'ACCESSIBILITY':
        return MaterialIcon$ACCESSIBILITY_getInstance();
      case 'ACCESSIBLE':
        return MaterialIcon$ACCESSIBLE_getInstance();
      case 'ACCOUNT_BALANCE':
        return MaterialIcon$ACCOUNT_BALANCE_getInstance();
      case 'ACCOUNT_BALANCE_WALLET':
        return MaterialIcon$ACCOUNT_BALANCE_WALLET_getInstance();
      case 'ACCOUNT_BOX':
        return MaterialIcon$ACCOUNT_BOX_getInstance();
      case 'ACCOUNT_CIRCLE':
        return MaterialIcon$ACCOUNT_CIRCLE_getInstance();
      case 'ADB':
        return MaterialIcon$ADB_getInstance();
      case 'ADD':
        return MaterialIcon$ADD_getInstance();
      case 'ADD_A_PHOTO':
        return MaterialIcon$ADD_A_PHOTO_getInstance();
      case 'ADD_ALARM':
        return MaterialIcon$ADD_ALARM_getInstance();
      case 'ADD_ALERT':
        return MaterialIcon$ADD_ALERT_getInstance();
      case 'ADD_BOX':
        return MaterialIcon$ADD_BOX_getInstance();
      case 'ADD_CIRCLE':
        return MaterialIcon$ADD_CIRCLE_getInstance();
      case 'ADD_CIRCLE_OUTLINE':
        return MaterialIcon$ADD_CIRCLE_OUTLINE_getInstance();
      case 'ADD_LOCATION':
        return MaterialIcon$ADD_LOCATION_getInstance();
      case 'ADD_SHOPPING_CART':
        return MaterialIcon$ADD_SHOPPING_CART_getInstance();
      case 'ADD_TO_PHOTOS':
        return MaterialIcon$ADD_TO_PHOTOS_getInstance();
      case 'ADD_TO_QUEUE':
        return MaterialIcon$ADD_TO_QUEUE_getInstance();
      case 'ADJUST':
        return MaterialIcon$ADJUST_getInstance();
      case 'AIRLINE_SEAT_FLAT':
        return MaterialIcon$AIRLINE_SEAT_FLAT_getInstance();
      case 'AIRLINE_SEAT_FLAT_ANGLED':
        return MaterialIcon$AIRLINE_SEAT_FLAT_ANGLED_getInstance();
      case 'AIRLINE_SEAT_INDIVIDUAL_SUITE':
        return MaterialIcon$AIRLINE_SEAT_INDIVIDUAL_SUITE_getInstance();
      case 'AIRLINE_SEAT_LEGROOM_EXTRA':
        return MaterialIcon$AIRLINE_SEAT_LEGROOM_EXTRA_getInstance();
      case 'AIRLINE_SEAT_LEGROOM_NORMAL':
        return MaterialIcon$AIRLINE_SEAT_LEGROOM_NORMAL_getInstance();
      case 'AIRLINE_SEAT_LEGROOM_REDUCED':
        return MaterialIcon$AIRLINE_SEAT_LEGROOM_REDUCED_getInstance();
      case 'AIRLINE_SEAT_RECLINE_EXTRA':
        return MaterialIcon$AIRLINE_SEAT_RECLINE_EXTRA_getInstance();
      case 'AIRLINE_SEAT_RECLINE_NORMAL':
        return MaterialIcon$AIRLINE_SEAT_RECLINE_NORMAL_getInstance();
      case 'AIRPLANEMODE_ACTIVE':
        return MaterialIcon$AIRPLANEMODE_ACTIVE_getInstance();
      case 'AIRPLANEMODE_INACTIVE':
        return MaterialIcon$AIRPLANEMODE_INACTIVE_getInstance();
      case 'AIRPLAY':
        return MaterialIcon$AIRPLAY_getInstance();
      case 'AIRPORT_SHUTTLE':
        return MaterialIcon$AIRPORT_SHUTTLE_getInstance();
      case 'ALARM':
        return MaterialIcon$ALARM_getInstance();
      case 'ALARM_ADD':
        return MaterialIcon$ALARM_ADD_getInstance();
      case 'ALARM_OFF':
        return MaterialIcon$ALARM_OFF_getInstance();
      case 'ALARM_ON':
        return MaterialIcon$ALARM_ON_getInstance();
      case 'ALBUM':
        return MaterialIcon$ALBUM_getInstance();
      case 'ALL_INCLUSIVE':
        return MaterialIcon$ALL_INCLUSIVE_getInstance();
      case 'ALL_OUT':
        return MaterialIcon$ALL_OUT_getInstance();
      case 'ANDROID':
        return MaterialIcon$ANDROID_getInstance();
      case 'ANNOUNCEMENT':
        return MaterialIcon$ANNOUNCEMENT_getInstance();
      case 'APPS':
        return MaterialIcon$APPS_getInstance();
      case 'ARCHIVE':
        return MaterialIcon$ARCHIVE_getInstance();
      case 'ARROW_BACK':
        return MaterialIcon$ARROW_BACK_getInstance();
      case 'ARROW_DOWNWARD':
        return MaterialIcon$ARROW_DOWNWARD_getInstance();
      case 'ARROW_DROP_DOWN':
        return MaterialIcon$ARROW_DROP_DOWN_getInstance();
      case 'ARROW_DROP_DOWN_CIRCLE':
        return MaterialIcon$ARROW_DROP_DOWN_CIRCLE_getInstance();
      case 'ARROW_DROP_UP':
        return MaterialIcon$ARROW_DROP_UP_getInstance();
      case 'ARROW_FORWARD':
        return MaterialIcon$ARROW_FORWARD_getInstance();
      case 'ARROW_UPWARD':
        return MaterialIcon$ARROW_UPWARD_getInstance();
      case 'ART_TRACK':
        return MaterialIcon$ART_TRACK_getInstance();
      case 'ASPECT_RATIO':
        return MaterialIcon$ASPECT_RATIO_getInstance();
      case 'ASSESSMENT':
        return MaterialIcon$ASSESSMENT_getInstance();
      case 'ASSIGNMENT':
        return MaterialIcon$ASSIGNMENT_getInstance();
      case 'ASSIGNMENT_IND':
        return MaterialIcon$ASSIGNMENT_IND_getInstance();
      case 'ASSIGNMENT_LATE':
        return MaterialIcon$ASSIGNMENT_LATE_getInstance();
      case 'ASSIGNMENT_RETURN':
        return MaterialIcon$ASSIGNMENT_RETURN_getInstance();
      case 'ASSIGNMENT_RETURNED':
        return MaterialIcon$ASSIGNMENT_RETURNED_getInstance();
      case 'ASSIGNMENT_TURNED_IN':
        return MaterialIcon$ASSIGNMENT_TURNED_IN_getInstance();
      case 'ASSISTANT':
        return MaterialIcon$ASSISTANT_getInstance();
      case 'ASSISTANT_PHOTO':
        return MaterialIcon$ASSISTANT_PHOTO_getInstance();
      case 'ATTACH_FILE':
        return MaterialIcon$ATTACH_FILE_getInstance();
      case 'ATTACH_MONEY':
        return MaterialIcon$ATTACH_MONEY_getInstance();
      case 'ATTACHMENT':
        return MaterialIcon$ATTACHMENT_getInstance();
      case 'AUDIOTRACK':
        return MaterialIcon$AUDIOTRACK_getInstance();
      case 'AUTORENEW':
        return MaterialIcon$AUTORENEW_getInstance();
      case 'AV_TIMER':
        return MaterialIcon$AV_TIMER_getInstance();
      case 'BACKSPACE':
        return MaterialIcon$BACKSPACE_getInstance();
      case 'BACKUP':
        return MaterialIcon$BACKUP_getInstance();
      case 'BATTERY_ALERT':
        return MaterialIcon$BATTERY_ALERT_getInstance();
      case 'BATTERY_CHARGING_FULL':
        return MaterialIcon$BATTERY_CHARGING_FULL_getInstance();
      case 'BATTERY_FULL':
        return MaterialIcon$BATTERY_FULL_getInstance();
      case 'BATTERY_STD':
        return MaterialIcon$BATTERY_STD_getInstance();
      case 'BATTERY_UNKNOWN':
        return MaterialIcon$BATTERY_UNKNOWN_getInstance();
      case 'BEACH_ACCESS':
        return MaterialIcon$BEACH_ACCESS_getInstance();
      case 'BEENHERE':
        return MaterialIcon$BEENHERE_getInstance();
      case 'BLOCK':
        return MaterialIcon$BLOCK_getInstance();
      case 'BLUETOOTH':
        return MaterialIcon$BLUETOOTH_getInstance();
      case 'BLUETOOTH_AUDIO':
        return MaterialIcon$BLUETOOTH_AUDIO_getInstance();
      case 'BLUETOOTH_CONNECTED':
        return MaterialIcon$BLUETOOTH_CONNECTED_getInstance();
      case 'BLUETOOTH_DISABLED':
        return MaterialIcon$BLUETOOTH_DISABLED_getInstance();
      case 'BLUETOOTH_SEARCHING':
        return MaterialIcon$BLUETOOTH_SEARCHING_getInstance();
      case 'BLUR_CIRCULAR':
        return MaterialIcon$BLUR_CIRCULAR_getInstance();
      case 'BLUR_LINEAR':
        return MaterialIcon$BLUR_LINEAR_getInstance();
      case 'BLUR_OFF':
        return MaterialIcon$BLUR_OFF_getInstance();
      case 'BLUR_ON':
        return MaterialIcon$BLUR_ON_getInstance();
      case 'BOOK':
        return MaterialIcon$BOOK_getInstance();
      case 'BOOKMARK':
        return MaterialIcon$BOOKMARK_getInstance();
      case 'BOOKMARK_BORDER':
        return MaterialIcon$BOOKMARK_BORDER_getInstance();
      case 'BORDER_ALL':
        return MaterialIcon$BORDER_ALL_getInstance();
      case 'BORDER_BOTTOM':
        return MaterialIcon$BORDER_BOTTOM_getInstance();
      case 'BORDER_CLEAR':
        return MaterialIcon$BORDER_CLEAR_getInstance();
      case 'BORDER_COLOR':
        return MaterialIcon$BORDER_COLOR_getInstance();
      case 'BORDER_HORIZONTAL':
        return MaterialIcon$BORDER_HORIZONTAL_getInstance();
      case 'BORDER_INNER':
        return MaterialIcon$BORDER_INNER_getInstance();
      case 'BORDER_LEFT':
        return MaterialIcon$BORDER_LEFT_getInstance();
      case 'BORDER_OUTER':
        return MaterialIcon$BORDER_OUTER_getInstance();
      case 'BORDER_RIGHT':
        return MaterialIcon$BORDER_RIGHT_getInstance();
      case 'BORDER_STYLE':
        return MaterialIcon$BORDER_STYLE_getInstance();
      case 'BORDER_TOP':
        return MaterialIcon$BORDER_TOP_getInstance();
      case 'BORDER_VERTICAL':
        return MaterialIcon$BORDER_VERTICAL_getInstance();
      case 'BRANDING_WATERMARK':
        return MaterialIcon$BRANDING_WATERMARK_getInstance();
      case 'BRIGHTNESS_1':
        return MaterialIcon$BRIGHTNESS_1_getInstance();
      case 'BRIGHTNESS_2':
        return MaterialIcon$BRIGHTNESS_2_getInstance();
      case 'BRIGHTNESS_3':
        return MaterialIcon$BRIGHTNESS_3_getInstance();
      case 'BRIGHTNESS_4':
        return MaterialIcon$BRIGHTNESS_4_getInstance();
      case 'BRIGHTNESS_5':
        return MaterialIcon$BRIGHTNESS_5_getInstance();
      case 'BRIGHTNESS_6':
        return MaterialIcon$BRIGHTNESS_6_getInstance();
      case 'BRIGHTNESS_7':
        return MaterialIcon$BRIGHTNESS_7_getInstance();
      case 'BRIGHTNESS_AUTO':
        return MaterialIcon$BRIGHTNESS_AUTO_getInstance();
      case 'BRIGHTNESS_HIGH':
        return MaterialIcon$BRIGHTNESS_HIGH_getInstance();
      case 'BRIGHTNESS_LOW':
        return MaterialIcon$BRIGHTNESS_LOW_getInstance();
      case 'BRIGHTNESS_MEDIUM':
        return MaterialIcon$BRIGHTNESS_MEDIUM_getInstance();
      case 'BROKEN_IMAGE':
        return MaterialIcon$BROKEN_IMAGE_getInstance();
      case 'BRUSH':
        return MaterialIcon$BRUSH_getInstance();
      case 'BUBBLE_CHART':
        return MaterialIcon$BUBBLE_CHART_getInstance();
      case 'BUG_REPORT':
        return MaterialIcon$BUG_REPORT_getInstance();
      case 'BUILD':
        return MaterialIcon$BUILD_getInstance();
      case 'BURST_MODE':
        return MaterialIcon$BURST_MODE_getInstance();
      case 'BUSINESS':
        return MaterialIcon$BUSINESS_getInstance();
      case 'BUSINESS_CENTER':
        return MaterialIcon$BUSINESS_CENTER_getInstance();
      case 'CACHED':
        return MaterialIcon$CACHED_getInstance();
      case 'CAKE':
        return MaterialIcon$CAKE_getInstance();
      case 'CALL':
        return MaterialIcon$CALL_getInstance();
      case 'CALL_END':
        return MaterialIcon$CALL_END_getInstance();
      case 'CALL_MADE':
        return MaterialIcon$CALL_MADE_getInstance();
      case 'CALL_MERGE':
        return MaterialIcon$CALL_MERGE_getInstance();
      case 'CALL_MISSED':
        return MaterialIcon$CALL_MISSED_getInstance();
      case 'CALL_MISSED_OUTGOING':
        return MaterialIcon$CALL_MISSED_OUTGOING_getInstance();
      case 'CALL_RECEIVED':
        return MaterialIcon$CALL_RECEIVED_getInstance();
      case 'CALL_SPLIT':
        return MaterialIcon$CALL_SPLIT_getInstance();
      case 'CALL_TO_ACTION':
        return MaterialIcon$CALL_TO_ACTION_getInstance();
      case 'CAMERA':
        return MaterialIcon$CAMERA_getInstance();
      case 'CAMERA_ALT':
        return MaterialIcon$CAMERA_ALT_getInstance();
      case 'CAMERA_ENHANCE':
        return MaterialIcon$CAMERA_ENHANCE_getInstance();
      case 'CAMERA_FRONT':
        return MaterialIcon$CAMERA_FRONT_getInstance();
      case 'CAMERA_REAR':
        return MaterialIcon$CAMERA_REAR_getInstance();
      case 'CAMERA_ROLL':
        return MaterialIcon$CAMERA_ROLL_getInstance();
      case 'CANCEL':
        return MaterialIcon$CANCEL_getInstance();
      case 'CARD_GIFTCARD':
        return MaterialIcon$CARD_GIFTCARD_getInstance();
      case 'CARD_MEMBERSHIP':
        return MaterialIcon$CARD_MEMBERSHIP_getInstance();
      case 'CARD_TRAVEL':
        return MaterialIcon$CARD_TRAVEL_getInstance();
      case 'CASINO':
        return MaterialIcon$CASINO_getInstance();
      case 'CAST':
        return MaterialIcon$CAST_getInstance();
      case 'CAST_CONNECTED':
        return MaterialIcon$CAST_CONNECTED_getInstance();
      case 'CENTER_FOCUS_STRONG':
        return MaterialIcon$CENTER_FOCUS_STRONG_getInstance();
      case 'CENTER_FOCUS_WEAK':
        return MaterialIcon$CENTER_FOCUS_WEAK_getInstance();
      case 'CHANGE_HISTORY':
        return MaterialIcon$CHANGE_HISTORY_getInstance();
      case 'CHAT':
        return MaterialIcon$CHAT_getInstance();
      case 'CHAT_BUBBLE':
        return MaterialIcon$CHAT_BUBBLE_getInstance();
      case 'CHAT_BUBBLE_OUTLINE':
        return MaterialIcon$CHAT_BUBBLE_OUTLINE_getInstance();
      case 'CHECK':
        return MaterialIcon$CHECK_getInstance();
      case 'CHECK_BOX':
        return MaterialIcon$CHECK_BOX_getInstance();
      case 'CHECK_BOX_OUTLINE_BLANK':
        return MaterialIcon$CHECK_BOX_OUTLINE_BLANK_getInstance();
      case 'CHECK_CIRCLE':
        return MaterialIcon$CHECK_CIRCLE_getInstance();
      case 'CHEVRON_LEFT':
        return MaterialIcon$CHEVRON_LEFT_getInstance();
      case 'CHEVRON_RIGHT':
        return MaterialIcon$CHEVRON_RIGHT_getInstance();
      case 'CHILD_CARE':
        return MaterialIcon$CHILD_CARE_getInstance();
      case 'CHILD_FRIENDLY':
        return MaterialIcon$CHILD_FRIENDLY_getInstance();
      case 'CHROME_RR_MODE':
        return MaterialIcon$CHROME_RR_MODE_getInstance();
      case 'CLASS':
        return MaterialIcon$CLASS_getInstance();
      case 'CLEAR':
        return MaterialIcon$CLEAR_getInstance();
      case 'CLEAR_ALL':
        return MaterialIcon$CLEAR_ALL_getInstance();
      case 'CLOSE':
        return MaterialIcon$CLOSE_getInstance();
      case 'CLOSED_CAPTION':
        return MaterialIcon$CLOSED_CAPTION_getInstance();
      case 'CLOUD':
        return MaterialIcon$CLOUD_getInstance();
      case 'CLOUD_CIRCLE':
        return MaterialIcon$CLOUD_CIRCLE_getInstance();
      case 'CLOUD_DONE':
        return MaterialIcon$CLOUD_DONE_getInstance();
      case 'CLOUD_DOWNLOAD':
        return MaterialIcon$CLOUD_DOWNLOAD_getInstance();
      case 'CLOUD_OFF':
        return MaterialIcon$CLOUD_OFF_getInstance();
      case 'CLOUD_QUEUE':
        return MaterialIcon$CLOUD_QUEUE_getInstance();
      case 'CLOUD_UPLOAD':
        return MaterialIcon$CLOUD_UPLOAD_getInstance();
      case 'CODE':
        return MaterialIcon$CODE_getInstance();
      case 'COLLECTIONS':
        return MaterialIcon$COLLECTIONS_getInstance();
      case 'COLLECTIONS_BOOKMARK':
        return MaterialIcon$COLLECTIONS_BOOKMARK_getInstance();
      case 'COLOR_LENS':
        return MaterialIcon$COLOR_LENS_getInstance();
      case 'COLORIZE':
        return MaterialIcon$COLORIZE_getInstance();
      case 'COMMENT':
        return MaterialIcon$COMMENT_getInstance();
      case 'COMPARE':
        return MaterialIcon$COMPARE_getInstance();
      case 'COMPARE_ARROWS':
        return MaterialIcon$COMPARE_ARROWS_getInstance();
      case 'COMPUTER':
        return MaterialIcon$COMPUTER_getInstance();
      case 'CONFIRMATION_NUMBER':
        return MaterialIcon$CONFIRMATION_NUMBER_getInstance();
      case 'CONTACT_MAIL':
        return MaterialIcon$CONTACT_MAIL_getInstance();
      case 'CONTACT_PHONE':
        return MaterialIcon$CONTACT_PHONE_getInstance();
      case 'CONTACTS':
        return MaterialIcon$CONTACTS_getInstance();
      case 'CONTENT_COPY':
        return MaterialIcon$CONTENT_COPY_getInstance();
      case 'CONTENT_CUT':
        return MaterialIcon$CONTENT_CUT_getInstance();
      case 'CONTENT_PASTE':
        return MaterialIcon$CONTENT_PASTE_getInstance();
      case 'CONTROL_POINT':
        return MaterialIcon$CONTROL_POINT_getInstance();
      case 'CONTROL_POINT_DUPLICATE':
        return MaterialIcon$CONTROL_POINT_DUPLICATE_getInstance();
      case 'COPYRIGHT':
        return MaterialIcon$COPYRIGHT_getInstance();
      case 'CREATE':
        return MaterialIcon$CREATE_getInstance();
      case 'CREATE_NEW_FOLDER':
        return MaterialIcon$CREATE_NEW_FOLDER_getInstance();
      case 'CREDIT_CARD':
        return MaterialIcon$CREDIT_CARD_getInstance();
      case 'CROP':
        return MaterialIcon$CROP_getInstance();
      case 'CROP_16_9':
        return MaterialIcon$CROP_16_9_getInstance();
      case 'CROP_3_2':
        return MaterialIcon$CROP_3_2_getInstance();
      case 'CROP_5_4':
        return MaterialIcon$CROP_5_4_getInstance();
      case 'CROP_7_5':
        return MaterialIcon$CROP_7_5_getInstance();
      case 'CROP_DIN':
        return MaterialIcon$CROP_DIN_getInstance();
      case 'CROP_FREE':
        return MaterialIcon$CROP_FREE_getInstance();
      case 'CROP_LANDSCAPE':
        return MaterialIcon$CROP_LANDSCAPE_getInstance();
      case 'CROP_ORIGINAL':
        return MaterialIcon$CROP_ORIGINAL_getInstance();
      case 'CROP_PORTRAIT':
        return MaterialIcon$CROP_PORTRAIT_getInstance();
      case 'CROP_ROTATE':
        return MaterialIcon$CROP_ROTATE_getInstance();
      case 'CROP_SQUARE':
        return MaterialIcon$CROP_SQUARE_getInstance();
      case 'DASHBOARD':
        return MaterialIcon$DASHBOARD_getInstance();
      case 'DATA_USAGE':
        return MaterialIcon$DATA_USAGE_getInstance();
      case 'DATE_RANGE':
        return MaterialIcon$DATE_RANGE_getInstance();
      case 'DEHAZE':
        return MaterialIcon$DEHAZE_getInstance();
      case 'DELETE':
        return MaterialIcon$DELETE_getInstance();
      case 'DELETE_FOREVER':
        return MaterialIcon$DELETE_FOREVER_getInstance();
      case 'DELETE_SWEEP':
        return MaterialIcon$DELETE_SWEEP_getInstance();
      case 'DESCRIPTION':
        return MaterialIcon$DESCRIPTION_getInstance();
      case 'DESKTOP_MAC':
        return MaterialIcon$DESKTOP_MAC_getInstance();
      case 'DESKTOP_WINDOWS':
        return MaterialIcon$DESKTOP_WINDOWS_getInstance();
      case 'DETAILS':
        return MaterialIcon$DETAILS_getInstance();
      case 'DEVELOPER_BOARD':
        return MaterialIcon$DEVELOPER_BOARD_getInstance();
      case 'DEVELOPER_MODE':
        return MaterialIcon$DEVELOPER_MODE_getInstance();
      case 'DEVICE_HUB':
        return MaterialIcon$DEVICE_HUB_getInstance();
      case 'DEVICES':
        return MaterialIcon$DEVICES_getInstance();
      case 'DEVICES_OTHER':
        return MaterialIcon$DEVICES_OTHER_getInstance();
      case 'DIALER_SIP':
        return MaterialIcon$DIALER_SIP_getInstance();
      case 'DIALPAD':
        return MaterialIcon$DIALPAD_getInstance();
      case 'DIRECTIONS':
        return MaterialIcon$DIRECTIONS_getInstance();
      case 'DIRECTIONS_BIKE':
        return MaterialIcon$DIRECTIONS_BIKE_getInstance();
      case 'DIRECTIONS_BOAT':
        return MaterialIcon$DIRECTIONS_BOAT_getInstance();
      case 'DIRECTIONS_BUS':
        return MaterialIcon$DIRECTIONS_BUS_getInstance();
      case 'DIRECTIONS_CAR':
        return MaterialIcon$DIRECTIONS_CAR_getInstance();
      case 'DIRECTIONS_RAILWAY':
        return MaterialIcon$DIRECTIONS_RAILWAY_getInstance();
      case 'DIRECTIONS_RUN':
        return MaterialIcon$DIRECTIONS_RUN_getInstance();
      case 'DIRECTIONS_SUBWAY':
        return MaterialIcon$DIRECTIONS_SUBWAY_getInstance();
      case 'DIRECTIONS_TRANSIT':
        return MaterialIcon$DIRECTIONS_TRANSIT_getInstance();
      case 'DIRECTIONS_WALK':
        return MaterialIcon$DIRECTIONS_WALK_getInstance();
      case 'DISC_FULL':
        return MaterialIcon$DISC_FULL_getInstance();
      case 'DNS':
        return MaterialIcon$DNS_getInstance();
      case 'DO_NOT_DISTURB':
        return MaterialIcon$DO_NOT_DISTURB_getInstance();
      case 'DO_NOT_DISTURB_ALT':
        return MaterialIcon$DO_NOT_DISTURB_ALT_getInstance();
      case 'DO_NOT_DISTURB_OFF':
        return MaterialIcon$DO_NOT_DISTURB_OFF_getInstance();
      case 'DO_NOT_DISTURB_ON':
        return MaterialIcon$DO_NOT_DISTURB_ON_getInstance();
      case 'DOCK':
        return MaterialIcon$DOCK_getInstance();
      case 'DOMAIN':
        return MaterialIcon$DOMAIN_getInstance();
      case 'DONE':
        return MaterialIcon$DONE_getInstance();
      case 'DONE_ALL':
        return MaterialIcon$DONE_ALL_getInstance();
      case 'DONUT_LARGE':
        return MaterialIcon$DONUT_LARGE_getInstance();
      case 'DONUT_SMALL':
        return MaterialIcon$DONUT_SMALL_getInstance();
      case 'DRAFTS':
        return MaterialIcon$DRAFTS_getInstance();
      case 'DRAG_HANDLE':
        return MaterialIcon$DRAG_HANDLE_getInstance();
      case 'DRIVE_ETA':
        return MaterialIcon$DRIVE_ETA_getInstance();
      case 'DVR':
        return MaterialIcon$DVR_getInstance();
      case 'EDIT':
        return MaterialIcon$EDIT_getInstance();
      case 'EDIT_LOCATION':
        return MaterialIcon$EDIT_LOCATION_getInstance();
      case 'EJECT':
        return MaterialIcon$EJECT_getInstance();
      case 'EMAIL':
        return MaterialIcon$EMAIL_getInstance();
      case 'ENHANCED_ENCRYPTION':
        return MaterialIcon$ENHANCED_ENCRYPTION_getInstance();
      case 'EQUALIZER':
        return MaterialIcon$EQUALIZER_getInstance();
      case 'ERROR':
        return MaterialIcon$ERROR_getInstance();
      case 'ERROR_OUTLINE':
        return MaterialIcon$ERROR_OUTLINE_getInstance();
      case 'EURO_SYMBOL':
        return MaterialIcon$EURO_SYMBOL_getInstance();
      case 'EV_STATION':
        return MaterialIcon$EV_STATION_getInstance();
      case 'EVENT':
        return MaterialIcon$EVENT_getInstance();
      case 'EVENT_AVAILABLE':
        return MaterialIcon$EVENT_AVAILABLE_getInstance();
      case 'EVENT_BUSY':
        return MaterialIcon$EVENT_BUSY_getInstance();
      case 'EVENT_NOTE':
        return MaterialIcon$EVENT_NOTE_getInstance();
      case 'EVENT_SEAT':
        return MaterialIcon$EVENT_SEAT_getInstance();
      case 'EXIT_TO_APP':
        return MaterialIcon$EXIT_TO_APP_getInstance();
      case 'EXPAND_LESS':
        return MaterialIcon$EXPAND_LESS_getInstance();
      case 'EXPAND_MORE':
        return MaterialIcon$EXPAND_MORE_getInstance();
      case 'EXPLICIT':
        return MaterialIcon$EXPLICIT_getInstance();
      case 'EXPLORE':
        return MaterialIcon$EXPLORE_getInstance();
      case 'EXPOSURE':
        return MaterialIcon$EXPOSURE_getInstance();
      case 'EXPOSURE_NEG_1':
        return MaterialIcon$EXPOSURE_NEG_1_getInstance();
      case 'EXPOSURE_NEG_2':
        return MaterialIcon$EXPOSURE_NEG_2_getInstance();
      case 'EXPOSURE_PLUS_1':
        return MaterialIcon$EXPOSURE_PLUS_1_getInstance();
      case 'EXPOSURE_PLUS_2':
        return MaterialIcon$EXPOSURE_PLUS_2_getInstance();
      case 'EXPOSURE_ZERO':
        return MaterialIcon$EXPOSURE_ZERO_getInstance();
      case 'EXTENSION':
        return MaterialIcon$EXTENSION_getInstance();
      case 'FACE':
        return MaterialIcon$FACE_getInstance();
      case 'FAST_FORWARD':
        return MaterialIcon$FAST_FORWARD_getInstance();
      case 'FAST_REWIND':
        return MaterialIcon$FAST_REWIND_getInstance();
      case 'FAVORITE':
        return MaterialIcon$FAVORITE_getInstance();
      case 'FAVORITE_BORDER':
        return MaterialIcon$FAVORITE_BORDER_getInstance();
      case 'FEATURED_PLAY_LIST':
        return MaterialIcon$FEATURED_PLAY_LIST_getInstance();
      case 'FEATURED_VIDEO':
        return MaterialIcon$FEATURED_VIDEO_getInstance();
      case 'FACK':
        return MaterialIcon$FACK_getInstance();
      case 'FIBER_DVR':
        return MaterialIcon$FIBER_DVR_getInstance();
      case 'FIBER_MANUAL_RECORD':
        return MaterialIcon$FIBER_MANUAL_RECORD_getInstance();
      case 'FIBER_NEW':
        return MaterialIcon$FIBER_NEW_getInstance();
      case 'FIBER_PIN':
        return MaterialIcon$FIBER_PIN_getInstance();
      case 'FIBER_SMART_RECORD':
        return MaterialIcon$FIBER_SMART_RECORD_getInstance();
      case 'FILE_DOWNLOAD':
        return MaterialIcon$FILE_DOWNLOAD_getInstance();
      case 'FILE_UPLOAD':
        return MaterialIcon$FILE_UPLOAD_getInstance();
      case 'FILTER':
        return MaterialIcon$FILTER_getInstance();
      case 'FILTER_1':
        return MaterialIcon$FILTER_1_getInstance();
      case 'FILTER_2':
        return MaterialIcon$FILTER_2_getInstance();
      case 'FILTER_3':
        return MaterialIcon$FILTER_3_getInstance();
      case 'FILTER_4':
        return MaterialIcon$FILTER_4_getInstance();
      case 'FILTER_5':
        return MaterialIcon$FILTER_5_getInstance();
      case 'FILTER_6':
        return MaterialIcon$FILTER_6_getInstance();
      case 'FILTER_7':
        return MaterialIcon$FILTER_7_getInstance();
      case 'FILTER_8':
        return MaterialIcon$FILTER_8_getInstance();
      case 'FILTER_9':
        return MaterialIcon$FILTER_9_getInstance();
      case 'FILTER_9_PLUS':
        return MaterialIcon$FILTER_9_PLUS_getInstance();
      case 'FILTER_B_AND_W':
        return MaterialIcon$FILTER_B_AND_W_getInstance();
      case 'FILTER_CENTER_FOCUS':
        return MaterialIcon$FILTER_CENTER_FOCUS_getInstance();
      case 'FILTER_DRAMA':
        return MaterialIcon$FILTER_DRAMA_getInstance();
      case 'FILTER_FRAMES':
        return MaterialIcon$FILTER_FRAMES_getInstance();
      case 'FILTER_HDR':
        return MaterialIcon$FILTER_HDR_getInstance();
      case 'FILTER_LIST':
        return MaterialIcon$FILTER_LIST_getInstance();
      case 'FILTER_NONE':
        return MaterialIcon$FILTER_NONE_getInstance();
      case 'FILTER_TILT_SHIFT':
        return MaterialIcon$FILTER_TILT_SHIFT_getInstance();
      case 'FILTER_VINTAGE':
        return MaterialIcon$FILTER_VINTAGE_getInstance();
      case 'FIND_IN_PAGE':
        return MaterialIcon$FIND_IN_PAGE_getInstance();
      case 'FIND_REPLACE':
        return MaterialIcon$FIND_REPLACE_getInstance();
      case 'FINGERPRINT':
        return MaterialIcon$FINGERPRINT_getInstance();
      case 'FIRST_PAGE':
        return MaterialIcon$FIRST_PAGE_getInstance();
      case 'FITNESS_CENTER':
        return MaterialIcon$FITNESS_CENTER_getInstance();
      case 'FLAG':
        return MaterialIcon$FLAG_getInstance();
      case 'FLARE':
        return MaterialIcon$FLARE_getInstance();
      case 'FLASH_AUTO':
        return MaterialIcon$FLASH_AUTO_getInstance();
      case 'FLASH_OFF':
        return MaterialIcon$FLASH_OFF_getInstance();
      case 'FLASH_ON':
        return MaterialIcon$FLASH_ON_getInstance();
      case 'FLIGHT':
        return MaterialIcon$FLIGHT_getInstance();
      case 'FLIGHT_LAND':
        return MaterialIcon$FLIGHT_LAND_getInstance();
      case 'FLIGHT_TAKEOFF':
        return MaterialIcon$FLIGHT_TAKEOFF_getInstance();
      case 'FLIP':
        return MaterialIcon$FLIP_getInstance();
      case 'FLIP_TO_BACK':
        return MaterialIcon$FLIP_TO_BACK_getInstance();
      case 'FLIP_TO_FRONT':
        return MaterialIcon$FLIP_TO_FRONT_getInstance();
      case 'FOLDER':
        return MaterialIcon$FOLDER_getInstance();
      case 'FOLDER_OPEN':
        return MaterialIcon$FOLDER_OPEN_getInstance();
      case 'FOLDER_SHARED':
        return MaterialIcon$FOLDER_SHARED_getInstance();
      case 'FOLDER_SPECIAL':
        return MaterialIcon$FOLDER_SPECIAL_getInstance();
      case 'FONT_DOWNLOAD':
        return MaterialIcon$FONT_DOWNLOAD_getInstance();
      case 'FORMAT_ALIGN_CENTER':
        return MaterialIcon$FORMAT_ALIGN_CENTER_getInstance();
      case 'FORMAT_ALIGN_JUSTIFY':
        return MaterialIcon$FORMAT_ALIGN_JUSTIFY_getInstance();
      case 'FORMAT_ALIGN_LEFT':
        return MaterialIcon$FORMAT_ALIGN_LEFT_getInstance();
      case 'FORMAT_ALIGN_RIGHT':
        return MaterialIcon$FORMAT_ALIGN_RIGHT_getInstance();
      case 'FORMAT_BOLD':
        return MaterialIcon$FORMAT_BOLD_getInstance();
      case 'FORMAT_CLEAR':
        return MaterialIcon$FORMAT_CLEAR_getInstance();
      case 'FORMAT_COLOR_FILL':
        return MaterialIcon$FORMAT_COLOR_FILL_getInstance();
      case 'FORMAT_COLOR_RESET':
        return MaterialIcon$FORMAT_COLOR_RESET_getInstance();
      case 'FORMAT_COLOR_TEXT':
        return MaterialIcon$FORMAT_COLOR_TEXT_getInstance();
      case 'FORMAT_INDENT_DECREASE':
        return MaterialIcon$FORMAT_INDENT_DECREASE_getInstance();
      case 'FORMAT_INDENT_INCREASE':
        return MaterialIcon$FORMAT_INDENT_INCREASE_getInstance();
      case 'FORMAT_ITALIC':
        return MaterialIcon$FORMAT_ITALIC_getInstance();
      case 'FORMAT_LINE_SPACING':
        return MaterialIcon$FORMAT_LINE_SPACING_getInstance();
      case 'FORMAT_LIST_BULLETED':
        return MaterialIcon$FORMAT_LIST_BULLETED_getInstance();
      case 'FORMAT_LIST_NUMBERED':
        return MaterialIcon$FORMAT_LIST_NUMBERED_getInstance();
      case 'FORMAT_PAINT':
        return MaterialIcon$FORMAT_PAINT_getInstance();
      case 'FORMAT_QUOTE':
        return MaterialIcon$FORMAT_QUOTE_getInstance();
      case 'FORMAT_SHAPES':
        return MaterialIcon$FORMAT_SHAPES_getInstance();
      case 'FORMAT_SIZE':
        return MaterialIcon$FORMAT_SIZE_getInstance();
      case 'FORMAT_STRIKETHROUGH':
        return MaterialIcon$FORMAT_STRIKETHROUGH_getInstance();
      case 'FORMAT_TEXTDIRECTION_L_TO_R':
        return MaterialIcon$FORMAT_TEXTDIRECTION_L_TO_R_getInstance();
      case 'FORMAT_TEXTDIRECTION_R_TO_L':
        return MaterialIcon$FORMAT_TEXTDIRECTION_R_TO_L_getInstance();
      case 'FORMAT_UNDERLINED':
        return MaterialIcon$FORMAT_UNDERLINED_getInstance();
      case 'FORUM':
        return MaterialIcon$FORUM_getInstance();
      case 'FORWARD':
        return MaterialIcon$FORWARD_getInstance();
      case 'FORWARD_10':
        return MaterialIcon$FORWARD_10_getInstance();
      case 'FORWARD_30':
        return MaterialIcon$FORWARD_30_getInstance();
      case 'FORWARD_5':
        return MaterialIcon$FORWARD_5_getInstance();
      case 'FREE_BREAKFAST':
        return MaterialIcon$FREE_BREAKFAST_getInstance();
      case 'FULLSCREEN':
        return MaterialIcon$FULLSCREEN_getInstance();
      case 'FULLSCREEN_EXIT':
        return MaterialIcon$FULLSCREEN_EXIT_getInstance();
      case 'FUNCTIONS':
        return MaterialIcon$FUNCTIONS_getInstance();
      case 'G_TRANSLATE':
        return MaterialIcon$G_TRANSLATE_getInstance();
      case 'GAMEPAD':
        return MaterialIcon$GAMEPAD_getInstance();
      case 'GAMES':
        return MaterialIcon$GAMES_getInstance();
      case 'GAVEL':
        return MaterialIcon$GAVEL_getInstance();
      case 'GESTURE':
        return MaterialIcon$GESTURE_getInstance();
      case 'GET_APP':
        return MaterialIcon$GET_APP_getInstance();
      case 'GIF':
        return MaterialIcon$GIF_getInstance();
      case 'GOLF_COURSE':
        return MaterialIcon$GOLF_COURSE_getInstance();
      case 'GPS_FIXED':
        return MaterialIcon$GPS_FIXED_getInstance();
      case 'GPS_NOT_FIXED':
        return MaterialIcon$GPS_NOT_FIXED_getInstance();
      case 'GPS_OFF':
        return MaterialIcon$GPS_OFF_getInstance();
      case 'GRADE':
        return MaterialIcon$GRADE_getInstance();
      case 'GRADIENT':
        return MaterialIcon$GRADIENT_getInstance();
      case 'GRAIN':
        return MaterialIcon$GRAIN_getInstance();
      case 'GRAPHIC_EQ':
        return MaterialIcon$GRAPHIC_EQ_getInstance();
      case 'GRID_OFF':
        return MaterialIcon$GRID_OFF_getInstance();
      case 'GRID_ON':
        return MaterialIcon$GRID_ON_getInstance();
      case 'GROUP':
        return MaterialIcon$GROUP_getInstance();
      case 'GROUP_ADD':
        return MaterialIcon$GROUP_ADD_getInstance();
      case 'GROUP_WORK':
        return MaterialIcon$GROUP_WORK_getInstance();
      case 'HD':
        return MaterialIcon$HD_getInstance();
      case 'HDR_OFF':
        return MaterialIcon$HDR_OFF_getInstance();
      case 'HDR_ON':
        return MaterialIcon$HDR_ON_getInstance();
      case 'HDR_STRONG':
        return MaterialIcon$HDR_STRONG_getInstance();
      case 'HDR_WEAK':
        return MaterialIcon$HDR_WEAK_getInstance();
      case 'HEADSET':
        return MaterialIcon$HEADSET_getInstance();
      case 'HEADSET_MIC':
        return MaterialIcon$HEADSET_MIC_getInstance();
      case 'HEALING':
        return MaterialIcon$HEALING_getInstance();
      case 'HEARING':
        return MaterialIcon$HEARING_getInstance();
      case 'HELP':
        return MaterialIcon$HELP_getInstance();
      case 'HELP_OUTLINE':
        return MaterialIcon$HELP_OUTLINE_getInstance();
      case 'HIGH_QUALITY':
        return MaterialIcon$HIGH_QUALITY_getInstance();
      case 'HIGHLIGHT':
        return MaterialIcon$HIGHLIGHT_getInstance();
      case 'HIGHLIGHT_OFF':
        return MaterialIcon$HIGHLIGHT_OFF_getInstance();
      case 'HISTORY':
        return MaterialIcon$HISTORY_getInstance();
      case 'HOME':
        return MaterialIcon$HOME_getInstance();
      case 'HOT_TUB':
        return MaterialIcon$HOT_TUB_getInstance();
      case 'HOTEL':
        return MaterialIcon$HOTEL_getInstance();
      case 'HOURGLASS_EMPTY':
        return MaterialIcon$HOURGLASS_EMPTY_getInstance();
      case 'HOURGLASS_FULL':
        return MaterialIcon$HOURGLASS_FULL_getInstance();
      case 'HTTP':
        return MaterialIcon$HTTP_getInstance();
      case 'HTTPS':
        return MaterialIcon$HTTPS_getInstance();
      case 'IMAGE':
        return MaterialIcon$IMAGE_getInstance();
      case 'IMAGE_ASPECT_RATIO':
        return MaterialIcon$IMAGE_ASPECT_RATIO_getInstance();
      case 'IMPORT_CONTACTS':
        return MaterialIcon$IMPORT_CONTACTS_getInstance();
      case 'IMPORT_EXPORT':
        return MaterialIcon$IMPORT_EXPORT_getInstance();
      case 'IMPORTANT_DEVICES':
        return MaterialIcon$IMPORTANT_DEVICES_getInstance();
      case 'INBOX':
        return MaterialIcon$INBOX_getInstance();
      case 'INDETERMINATE_CHECK_BOX':
        return MaterialIcon$INDETERMINATE_CHECK_BOX_getInstance();
      case 'INFO':
        return MaterialIcon$INFO_getInstance();
      case 'INFO_OUTLINE':
        return MaterialIcon$INFO_OUTLINE_getInstance();
      case 'INPUT':
        return MaterialIcon$INPUT_getInstance();
      case 'INSERT_CHART':
        return MaterialIcon$INSERT_CHART_getInstance();
      case 'INSERT_COMMENT':
        return MaterialIcon$INSERT_COMMENT_getInstance();
      case 'INSERT_DRIVE_FILE':
        return MaterialIcon$INSERT_DRIVE_FILE_getInstance();
      case 'INSERT_EMOTICON':
        return MaterialIcon$INSERT_EMOTICON_getInstance();
      case 'INSERT_INVITATION':
        return MaterialIcon$INSERT_INVITATION_getInstance();
      case 'INSERT_LINK':
        return MaterialIcon$INSERT_LINK_getInstance();
      case 'INSERT_PHOTO':
        return MaterialIcon$INSERT_PHOTO_getInstance();
      case 'INVERT_COLORS':
        return MaterialIcon$INVERT_COLORS_getInstance();
      case 'INVERT_COLORS_OFF':
        return MaterialIcon$INVERT_COLORS_OFF_getInstance();
      case 'ISO':
        return MaterialIcon$ISO_getInstance();
      case 'KEYBOARD':
        return MaterialIcon$KEYBOARD_getInstance();
      case 'KEYBOARD_ARROW_DOWN':
        return MaterialIcon$KEYBOARD_ARROW_DOWN_getInstance();
      case 'KEYBOARD_ARROW_LEFT':
        return MaterialIcon$KEYBOARD_ARROW_LEFT_getInstance();
      case 'KEYBOARD_ARROW_RIGHT':
        return MaterialIcon$KEYBOARD_ARROW_RIGHT_getInstance();
      case 'KEYBOARD_ARROW_UP':
        return MaterialIcon$KEYBOARD_ARROW_UP_getInstance();
      case 'KEYBOARD_BACKSPACE':
        return MaterialIcon$KEYBOARD_BACKSPACE_getInstance();
      case 'KEYBOARD_CAPSLOCK':
        return MaterialIcon$KEYBOARD_CAPSLOCK_getInstance();
      case 'KEYBOARD_HIDE':
        return MaterialIcon$KEYBOARD_HIDE_getInstance();
      case 'KEYBOARD_RETURN':
        return MaterialIcon$KEYBOARD_RETURN_getInstance();
      case 'KEYBOARD_TAB':
        return MaterialIcon$KEYBOARD_TAB_getInstance();
      case 'KEYBOARD_VOICE':
        return MaterialIcon$KEYBOARD_VOICE_getInstance();
      case 'KITCHEN':
        return MaterialIcon$KITCHEN_getInstance();
      case 'LABEL':
        return MaterialIcon$LABEL_getInstance();
      case 'LABEL_OUTLINE':
        return MaterialIcon$LABEL_OUTLINE_getInstance();
      case 'LANDSCAPE':
        return MaterialIcon$LANDSCAPE_getInstance();
      case 'LANGUAGE':
        return MaterialIcon$LANGUAGE_getInstance();
      case 'LAPTOP':
        return MaterialIcon$LAPTOP_getInstance();
      case 'LAPTOP_CHROMEBOOK':
        return MaterialIcon$LAPTOP_CHROMEBOOK_getInstance();
      case 'LAPTOP_MAC':
        return MaterialIcon$LAPTOP_MAC_getInstance();
      case 'LAPTOP_WINDOWS':
        return MaterialIcon$LAPTOP_WINDOWS_getInstance();
      case 'LAST_PAGE':
        return MaterialIcon$LAST_PAGE_getInstance();
      case 'LAUNCH':
        return MaterialIcon$LAUNCH_getInstance();
      case 'LAYERS':
        return MaterialIcon$LAYERS_getInstance();
      case 'LAYERS_CLEAR':
        return MaterialIcon$LAYERS_CLEAR_getInstance();
      case 'LEAK_ADD':
        return MaterialIcon$LEAK_ADD_getInstance();
      case 'LEAK_REMOVE':
        return MaterialIcon$LEAK_REMOVE_getInstance();
      case 'LENS':
        return MaterialIcon$LENS_getInstance();
      case 'LIBRARY_ADD':
        return MaterialIcon$LIBRARY_ADD_getInstance();
      case 'LIBRARY_BOOKS':
        return MaterialIcon$LIBRARY_BOOKS_getInstance();
      case 'LIBRARY_MUSIC':
        return MaterialIcon$LIBRARY_MUSIC_getInstance();
      case 'LIGHTBULB_OUTLINE':
        return MaterialIcon$LIGHTBULB_OUTLINE_getInstance();
      case 'LINE_STYLE':
        return MaterialIcon$LINE_STYLE_getInstance();
      case 'LINE_WEIGHT':
        return MaterialIcon$LINE_WEIGHT_getInstance();
      case 'LINEAR_SCALE':
        return MaterialIcon$LINEAR_SCALE_getInstance();
      case 'LINK':
        return MaterialIcon$LINK_getInstance();
      case 'LINKED_CAMERA':
        return MaterialIcon$LINKED_CAMERA_getInstance();
      case 'LIST':
        return MaterialIcon$LIST_getInstance();
      case 'LIVE_HELP':
        return MaterialIcon$LIVE_HELP_getInstance();
      case 'LIVE_TV':
        return MaterialIcon$LIVE_TV_getInstance();
      case 'LOCAL_ACTIVITY':
        return MaterialIcon$LOCAL_ACTIVITY_getInstance();
      case 'LOCAL_AIRPORT':
        return MaterialIcon$LOCAL_AIRPORT_getInstance();
      case 'LOCAL_ATM':
        return MaterialIcon$LOCAL_ATM_getInstance();
      case 'LOCAL_BAR':
        return MaterialIcon$LOCAL_BAR_getInstance();
      case 'LOCAL_CAFE':
        return MaterialIcon$LOCAL_CAFE_getInstance();
      case 'LOCAL_CAR_WASH':
        return MaterialIcon$LOCAL_CAR_WASH_getInstance();
      case 'LOCAL_CONVENIENCE_STORE':
        return MaterialIcon$LOCAL_CONVENIENCE_STORE_getInstance();
      case 'LOCAL_DINING':
        return MaterialIcon$LOCAL_DINING_getInstance();
      case 'LOCAL_DRINK':
        return MaterialIcon$LOCAL_DRINK_getInstance();
      case 'LOCAL_FLORIST':
        return MaterialIcon$LOCAL_FLORIST_getInstance();
      case 'LOCAL_GAS_STATION':
        return MaterialIcon$LOCAL_GAS_STATION_getInstance();
      case 'LOCAL_GROCERY_STORE':
        return MaterialIcon$LOCAL_GROCERY_STORE_getInstance();
      case 'LOCAL_HOSPITAL':
        return MaterialIcon$LOCAL_HOSPITAL_getInstance();
      case 'LOCAL_HOTEL':
        return MaterialIcon$LOCAL_HOTEL_getInstance();
      case 'LOCAL_LAUNDRY_SERVICE':
        return MaterialIcon$LOCAL_LAUNDRY_SERVICE_getInstance();
      case 'LOCAL_LIBRARY':
        return MaterialIcon$LOCAL_LIBRARY_getInstance();
      case 'LOCAL_MALL':
        return MaterialIcon$LOCAL_MALL_getInstance();
      case 'LOCAL_MOVIES':
        return MaterialIcon$LOCAL_MOVIES_getInstance();
      case 'LOCAL_OFFER':
        return MaterialIcon$LOCAL_OFFER_getInstance();
      case 'LOCAL_PARKING':
        return MaterialIcon$LOCAL_PARKING_getInstance();
      case 'LOCAL_PHARMACY':
        return MaterialIcon$LOCAL_PHARMACY_getInstance();
      case 'LOCAL_PHONE':
        return MaterialIcon$LOCAL_PHONE_getInstance();
      case 'LOCAL_PIZZA':
        return MaterialIcon$LOCAL_PIZZA_getInstance();
      case 'LOCAL_PLAY':
        return MaterialIcon$LOCAL_PLAY_getInstance();
      case 'LOCAL_POST_OFFICE':
        return MaterialIcon$LOCAL_POST_OFFICE_getInstance();
      case 'LOCAL_PRINTSHOP':
        return MaterialIcon$LOCAL_PRINTSHOP_getInstance();
      case 'LOCAL_SEE':
        return MaterialIcon$LOCAL_SEE_getInstance();
      case 'LOCAL_SHIPPING':
        return MaterialIcon$LOCAL_SHIPPING_getInstance();
      case 'LOCAL_TAXI':
        return MaterialIcon$LOCAL_TAXI_getInstance();
      case 'LOCATION_CITY':
        return MaterialIcon$LOCATION_CITY_getInstance();
      case 'LOCATION_DISABLED':
        return MaterialIcon$LOCATION_DISABLED_getInstance();
      case 'LOCATION_OFF':
        return MaterialIcon$LOCATION_OFF_getInstance();
      case 'LOCATION_ON':
        return MaterialIcon$LOCATION_ON_getInstance();
      case 'LOCATION_SEARCHING':
        return MaterialIcon$LOCATION_SEARCHING_getInstance();
      case 'LOCK':
        return MaterialIcon$LOCK_getInstance();
      case 'LOCK_OPEN':
        return MaterialIcon$LOCK_OPEN_getInstance();
      case 'LOCK_OUTLINE':
        return MaterialIcon$LOCK_OUTLINE_getInstance();
      case 'LOOKS':
        return MaterialIcon$LOOKS_getInstance();
      case 'LOOKS_3':
        return MaterialIcon$LOOKS_3_getInstance();
      case 'LOOKS_4':
        return MaterialIcon$LOOKS_4_getInstance();
      case 'LOOKS_5':
        return MaterialIcon$LOOKS_5_getInstance();
      case 'LOOKS_6':
        return MaterialIcon$LOOKS_6_getInstance();
      case 'LOOKS_ONE':
        return MaterialIcon$LOOKS_ONE_getInstance();
      case 'LOOKS_TWO':
        return MaterialIcon$LOOKS_TWO_getInstance();
      case 'LOOP':
        return MaterialIcon$LOOP_getInstance();
      case 'LOUPE':
        return MaterialIcon$LOUPE_getInstance();
      case 'LOW_PRIORITY':
        return MaterialIcon$LOW_PRIORITY_getInstance();
      case 'LOYALTY':
        return MaterialIcon$LOYALTY_getInstance();
      case 'MAIL':
        return MaterialIcon$MAIL_getInstance();
      case 'MAIL_OUTLINE':
        return MaterialIcon$MAIL_OUTLINE_getInstance();
      case 'MAP':
        return MaterialIcon$MAP_getInstance();
      case 'MARKUNREAD':
        return MaterialIcon$MARKUNREAD_getInstance();
      case 'MARKUNREAD_MAILBOX':
        return MaterialIcon$MARKUNREAD_MAILBOX_getInstance();
      case 'MEMORY':
        return MaterialIcon$MEMORY_getInstance();
      case 'MENU':
        return MaterialIcon$MENU_getInstance();
      case 'MERGE_TYPE':
        return MaterialIcon$MERGE_TYPE_getInstance();
      case 'MESSAGE':
        return MaterialIcon$MESSAGE_getInstance();
      case 'MIC':
        return MaterialIcon$MIC_getInstance();
      case 'MIC_NONE':
        return MaterialIcon$MIC_NONE_getInstance();
      case 'MIC_OFF':
        return MaterialIcon$MIC_OFF_getInstance();
      case 'MMS':
        return MaterialIcon$MMS_getInstance();
      case 'MODE_COMMENT':
        return MaterialIcon$MODE_COMMENT_getInstance();
      case 'MODE_EDIT':
        return MaterialIcon$MODE_EDIT_getInstance();
      case 'MONETIZATION_ON':
        return MaterialIcon$MONETIZATION_ON_getInstance();
      case 'MONEY_OFF':
        return MaterialIcon$MONEY_OFF_getInstance();
      case 'MONOCHROME_PHOTOS':
        return MaterialIcon$MONOCHROME_PHOTOS_getInstance();
      case 'MOOD':
        return MaterialIcon$MOOD_getInstance();
      case 'MOOD_BAD':
        return MaterialIcon$MOOD_BAD_getInstance();
      case 'MORE':
        return MaterialIcon$MORE_getInstance();
      case 'MORE_HORIZ':
        return MaterialIcon$MORE_HORIZ_getInstance();
      case 'MORE_VERT':
        return MaterialIcon$MORE_VERT_getInstance();
      case 'MOTORCYCLE':
        return MaterialIcon$MOTORCYCLE_getInstance();
      case 'MOUSE':
        return MaterialIcon$MOUSE_getInstance();
      case 'MOVE_TO_INBOX':
        return MaterialIcon$MOVE_TO_INBOX_getInstance();
      case 'MOVIE':
        return MaterialIcon$MOVIE_getInstance();
      case 'MOVIE_CREATION':
        return MaterialIcon$MOVIE_CREATION_getInstance();
      case 'MOVIE_FILTER':
        return MaterialIcon$MOVIE_FILTER_getInstance();
      case 'MULTILINE_CHART':
        return MaterialIcon$MULTILINE_CHART_getInstance();
      case 'MUSIC_NOTE':
        return MaterialIcon$MUSIC_NOTE_getInstance();
      case 'MUSIC_VIDEO':
        return MaterialIcon$MUSIC_VIDEO_getInstance();
      case 'MY_LOCATION':
        return MaterialIcon$MY_LOCATION_getInstance();
      case 'NATURE':
        return MaterialIcon$NATURE_getInstance();
      case 'NATURE_PEOPLE':
        return MaterialIcon$NATURE_PEOPLE_getInstance();
      case 'NAVIGATE_BEFORE':
        return MaterialIcon$NAVIGATE_BEFORE_getInstance();
      case 'NAVIGATE_NEXT':
        return MaterialIcon$NAVIGATE_NEXT_getInstance();
      case 'NAVIGATION':
        return MaterialIcon$NAVIGATION_getInstance();
      case 'NEAR_ME':
        return MaterialIcon$NEAR_ME_getInstance();
      case 'NETWORK_CELL':
        return MaterialIcon$NETWORK_CELL_getInstance();
      case 'NETWORK_CHECK':
        return MaterialIcon$NETWORK_CHECK_getInstance();
      case 'NETWORK_LOCKED':
        return MaterialIcon$NETWORK_LOCKED_getInstance();
      case 'NETWORK_WIFI':
        return MaterialIcon$NETWORK_WIFI_getInstance();
      case 'NEW_RELEASES':
        return MaterialIcon$NEW_RELEASES_getInstance();
      case 'NEXT_WEEK':
        return MaterialIcon$NEXT_WEEK_getInstance();
      case 'NFC':
        return MaterialIcon$NFC_getInstance();
      case 'NO_ENCRYPTION':
        return MaterialIcon$NO_ENCRYPTION_getInstance();
      case 'NO_SIM':
        return MaterialIcon$NO_SIM_getInstance();
      case 'NOT_INTERESTED':
        return MaterialIcon$NOT_INTERESTED_getInstance();
      case 'NOTE':
        return MaterialIcon$NOTE_getInstance();
      case 'NOTE_ADD':
        return MaterialIcon$NOTE_ADD_getInstance();
      case 'NOTIFICATIONS':
        return MaterialIcon$NOTIFICATIONS_getInstance();
      case 'NOTIFICATIONS_ACTIVE':
        return MaterialIcon$NOTIFICATIONS_ACTIVE_getInstance();
      case 'NOTIFICATIONS_NONE':
        return MaterialIcon$NOTIFICATIONS_NONE_getInstance();
      case 'NOTIFICATIONS_OFF':
        return MaterialIcon$NOTIFICATIONS_OFF_getInstance();
      case 'NOTIFICATIONS_PAUSED':
        return MaterialIcon$NOTIFICATIONS_PAUSED_getInstance();
      case 'OFFLINE_PIN':
        return MaterialIcon$OFFLINE_PIN_getInstance();
      case 'ONDEMAND_VIDEO':
        return MaterialIcon$ONDEMAND_VIDEO_getInstance();
      case 'OPACITY':
        return MaterialIcon$OPACITY_getInstance();
      case 'OPEN_IN_BROWSER':
        return MaterialIcon$OPEN_IN_BROWSER_getInstance();
      case 'OPEN_IN_NEW':
        return MaterialIcon$OPEN_IN_NEW_getInstance();
      case 'OPEN_WITH':
        return MaterialIcon$OPEN_WITH_getInstance();
      case 'PAGES':
        return MaterialIcon$PAGES_getInstance();
      case 'PAGEVIEW':
        return MaterialIcon$PAGEVIEW_getInstance();
      case 'PALETTE':
        return MaterialIcon$PALETTE_getInstance();
      case 'PAN_TOOL':
        return MaterialIcon$PAN_TOOL_getInstance();
      case 'PANORAMA':
        return MaterialIcon$PANORAMA_getInstance();
      case 'PANORAMA_FISH_EYE':
        return MaterialIcon$PANORAMA_FISH_EYE_getInstance();
      case 'PANORAMA_HORIZONTAL':
        return MaterialIcon$PANORAMA_HORIZONTAL_getInstance();
      case 'PANORAMA_VERTICAL':
        return MaterialIcon$PANORAMA_VERTICAL_getInstance();
      case 'PANORAMA_WIDE_ANGLE':
        return MaterialIcon$PANORAMA_WIDE_ANGLE_getInstance();
      case 'PARTY_MODE':
        return MaterialIcon$PARTY_MODE_getInstance();
      case 'PAUSE':
        return MaterialIcon$PAUSE_getInstance();
      case 'PAUSE_CIRCLE_FILLED':
        return MaterialIcon$PAUSE_CIRCLE_FILLED_getInstance();
      case 'PAUSE_CIRCLE_OUTLINE':
        return MaterialIcon$PAUSE_CIRCLE_OUTLINE_getInstance();
      case 'PAYMENT':
        return MaterialIcon$PAYMENT_getInstance();
      case 'PEOPLE':
        return MaterialIcon$PEOPLE_getInstance();
      case 'PEOPLE_OUTLINE':
        return MaterialIcon$PEOPLE_OUTLINE_getInstance();
      case 'PERM_CAMERA_MIC':
        return MaterialIcon$PERM_CAMERA_MIC_getInstance();
      case 'PERM_CONTACT_CALENDAR':
        return MaterialIcon$PERM_CONTACT_CALENDAR_getInstance();
      case 'PERM_DATA_SETTING':
        return MaterialIcon$PERM_DATA_SETTING_getInstance();
      case 'PERM_DEVICE_INFORMATION':
        return MaterialIcon$PERM_DEVICE_INFORMATION_getInstance();
      case 'PERM_IDENTITY':
        return MaterialIcon$PERM_IDENTITY_getInstance();
      case 'PERM_MEDIA':
        return MaterialIcon$PERM_MEDIA_getInstance();
      case 'PERM_PHONE_MSG':
        return MaterialIcon$PERM_PHONE_MSG_getInstance();
      case 'PERM_SCAN_WIFI':
        return MaterialIcon$PERM_SCAN_WIFI_getInstance();
      case 'PERSON':
        return MaterialIcon$PERSON_getInstance();
      case 'PERSON_ADD':
        return MaterialIcon$PERSON_ADD_getInstance();
      case 'PERSON_OUTLINE':
        return MaterialIcon$PERSON_OUTLINE_getInstance();
      case 'PERSON_PIN':
        return MaterialIcon$PERSON_PIN_getInstance();
      case 'PERSON_PIN_CIRCLE':
        return MaterialIcon$PERSON_PIN_CIRCLE_getInstance();
      case 'PERSONAL_VIDEO':
        return MaterialIcon$PERSONAL_VIDEO_getInstance();
      case 'PETS':
        return MaterialIcon$PETS_getInstance();
      case 'PHONE':
        return MaterialIcon$PHONE_getInstance();
      case 'PHONE_ANDROID':
        return MaterialIcon$PHONE_ANDROID_getInstance();
      case 'PHONE_BLUETOOTH_SPEAKER':
        return MaterialIcon$PHONE_BLUETOOTH_SPEAKER_getInstance();
      case 'PHONE_FORWARDED':
        return MaterialIcon$PHONE_FORWARDED_getInstance();
      case 'PHONE_IN_TALK':
        return MaterialIcon$PHONE_IN_TALK_getInstance();
      case 'PHONE_IPHONE':
        return MaterialIcon$PHONE_IPHONE_getInstance();
      case 'PHONE_LOCKED':
        return MaterialIcon$PHONE_LOCKED_getInstance();
      case 'PHONE_MISSED':
        return MaterialIcon$PHONE_MISSED_getInstance();
      case 'PHONE_PAUSED':
        return MaterialIcon$PHONE_PAUSED_getInstance();
      case 'PHONELINK':
        return MaterialIcon$PHONELINK_getInstance();
      case 'PHONELINK_ERASE':
        return MaterialIcon$PHONELINK_ERASE_getInstance();
      case 'PHONELINK_LOCK':
        return MaterialIcon$PHONELINK_LOCK_getInstance();
      case 'PHONELINK_OFF':
        return MaterialIcon$PHONELINK_OFF_getInstance();
      case 'PHONELINK_RING':
        return MaterialIcon$PHONELINK_RING_getInstance();
      case 'PHONELINK_SETUP':
        return MaterialIcon$PHONELINK_SETUP_getInstance();
      case 'PHOTO':
        return MaterialIcon$PHOTO_getInstance();
      case 'PHOTO_ALBUM':
        return MaterialIcon$PHOTO_ALBUM_getInstance();
      case 'PHOTO_CAMERA':
        return MaterialIcon$PHOTO_CAMERA_getInstance();
      case 'PHOTO_FILTER':
        return MaterialIcon$PHOTO_FILTER_getInstance();
      case 'PHOTO_LIBRARY':
        return MaterialIcon$PHOTO_LIBRARY_getInstance();
      case 'PHOTO_SIZE_SELECT_ACTUAL':
        return MaterialIcon$PHOTO_SIZE_SELECT_ACTUAL_getInstance();
      case 'PHOTO_SIZE_SELECT_LARGE':
        return MaterialIcon$PHOTO_SIZE_SELECT_LARGE_getInstance();
      case 'PHOTO_SIZE_SELECT_SMALL':
        return MaterialIcon$PHOTO_SIZE_SELECT_SMALL_getInstance();
      case 'PICTURE_AS_PDF':
        return MaterialIcon$PICTURE_AS_PDF_getInstance();
      case 'PICTURE_IN_PICTURE':
        return MaterialIcon$PICTURE_IN_PICTURE_getInstance();
      case 'PICTURE_IN_PICTURE_ALT':
        return MaterialIcon$PICTURE_IN_PICTURE_ALT_getInstance();
      case 'PIE_CHART':
        return MaterialIcon$PIE_CHART_getInstance();
      case 'PIE_CHART_OUTLINED':
        return MaterialIcon$PIE_CHART_OUTLINED_getInstance();
      case 'PIN_DROP':
        return MaterialIcon$PIN_DROP_getInstance();
      case 'PLACE':
        return MaterialIcon$PLACE_getInstance();
      case 'PLAY_ARROW':
        return MaterialIcon$PLAY_ARROW_getInstance();
      case 'PLAY_CIRCLE_FILLED':
        return MaterialIcon$PLAY_CIRCLE_FILLED_getInstance();
      case 'PLAY_CIRCLE_OUTLINE':
        return MaterialIcon$PLAY_CIRCLE_OUTLINE_getInstance();
      case 'PLAY_FOR_WORK':
        return MaterialIcon$PLAY_FOR_WORK_getInstance();
      case 'PLAYLIST_ADD':
        return MaterialIcon$PLAYLIST_ADD_getInstance();
      case 'PLAYLIST_ADD_CHECK':
        return MaterialIcon$PLAYLIST_ADD_CHECK_getInstance();
      case 'PLAYLIST_PLAY':
        return MaterialIcon$PLAYLIST_PLAY_getInstance();
      case 'PLUS_ONE':
        return MaterialIcon$PLUS_ONE_getInstance();
      case 'POLL':
        return MaterialIcon$POLL_getInstance();
      case 'POLYMER':
        return MaterialIcon$POLYMER_getInstance();
      case 'POOL':
        return MaterialIcon$POOL_getInstance();
      case 'PORTABLE_WIFI_OFF':
        return MaterialIcon$PORTABLE_WIFI_OFF_getInstance();
      case 'PORTRAIT':
        return MaterialIcon$PORTRAIT_getInstance();
      case 'POWER':
        return MaterialIcon$POWER_getInstance();
      case 'POWER_INPUT':
        return MaterialIcon$POWER_INPUT_getInstance();
      case 'POWER_SETTINGS_NEW':
        return MaterialIcon$POWER_SETTINGS_NEW_getInstance();
      case 'PREGNANT_WOMAN':
        return MaterialIcon$PREGNANT_WOMAN_getInstance();
      case 'PRESENT_TO_ALL':
        return MaterialIcon$PRESENT_TO_ALL_getInstance();
      case 'PRINT':
        return MaterialIcon$PRINT_getInstance();
      case 'PRIORITY_HIGH':
        return MaterialIcon$PRIORITY_HIGH_getInstance();
      case 'PUBLIC':
        return MaterialIcon$PUBLIC_getInstance();
      case 'PUBLISH':
        return MaterialIcon$PUBLISH_getInstance();
      case 'QUERY_BUILDER':
        return MaterialIcon$QUERY_BUILDER_getInstance();
      case 'QUESTION_ANSWER':
        return MaterialIcon$QUESTION_ANSWER_getInstance();
      case 'QUEUE':
        return MaterialIcon$QUEUE_getInstance();
      case 'QUEUE_MUSIC':
        return MaterialIcon$QUEUE_MUSIC_getInstance();
      case 'QUEUE_PLAY_NEXT':
        return MaterialIcon$QUEUE_PLAY_NEXT_getInstance();
      case 'RADIO':
        return MaterialIcon$RADIO_getInstance();
      case 'RADIO_BUTTON_CHECKED':
        return MaterialIcon$RADIO_BUTTON_CHECKED_getInstance();
      case 'RADIO_BUTTON_UNCHECKED':
        return MaterialIcon$RADIO_BUTTON_UNCHECKED_getInstance();
      case 'RATE_REVIEW':
        return MaterialIcon$RATE_REVIEW_getInstance();
      case 'RECEIPT':
        return MaterialIcon$RECEIPT_getInstance();
      case 'RECENT_ACTORS':
        return MaterialIcon$RECENT_ACTORS_getInstance();
      case 'RECORD_VOICE_OVER':
        return MaterialIcon$RECORD_VOICE_OVER_getInstance();
      case 'RM':
        return MaterialIcon$RM_getInstance();
      case 'REDO':
        return MaterialIcon$REDO_getInstance();
      case 'REFRESH':
        return MaterialIcon$REFRESH_getInstance();
      case 'REMOVE':
        return MaterialIcon$REMOVE_getInstance();
      case 'REMOVE_CIRCLE':
        return MaterialIcon$REMOVE_CIRCLE_getInstance();
      case 'REMOVE_CIRCLE_OUTLINE':
        return MaterialIcon$REMOVE_CIRCLE_OUTLINE_getInstance();
      case 'REMOVE_FROM_QUEUE':
        return MaterialIcon$REMOVE_FROM_QUEUE_getInstance();
      case 'REMOVE_RED_EYE':
        return MaterialIcon$REMOVE_RED_EYE_getInstance();
      case 'REMOVE_SHOPPING_CART':
        return MaterialIcon$REMOVE_SHOPPING_CART_getInstance();
      case 'REORDER':
        return MaterialIcon$REORDER_getInstance();
      case 'REPEAT':
        return MaterialIcon$REPEAT_getInstance();
      case 'REPEAT_ONE':
        return MaterialIcon$REPEAT_ONE_getInstance();
      case 'REPLAY':
        return MaterialIcon$REPLAY_getInstance();
      case 'REPLAY_10':
        return MaterialIcon$REPLAY_10_getInstance();
      case 'REPLAY_30':
        return MaterialIcon$REPLAY_30_getInstance();
      case 'REPLAY_5':
        return MaterialIcon$REPLAY_5_getInstance();
      case 'REPLY':
        return MaterialIcon$REPLY_getInstance();
      case 'REPLY_ALL':
        return MaterialIcon$REPLY_ALL_getInstance();
      case 'REPORT':
        return MaterialIcon$REPORT_getInstance();
      case 'REPORT_PROBLEM':
        return MaterialIcon$REPORT_PROBLEM_getInstance();
      case 'RESTAURANT':
        return MaterialIcon$RESTAURANT_getInstance();
      case 'RESTAURANT_MENU':
        return MaterialIcon$RESTAURANT_MENU_getInstance();
      case 'RESTORE':
        return MaterialIcon$RESTORE_getInstance();
      case 'RESTORE_PAGE':
        return MaterialIcon$RESTORE_PAGE_getInstance();
      case 'RING_VOLUME':
        return MaterialIcon$RING_VOLUME_getInstance();
      case 'ROOM':
        return MaterialIcon$ROOM_getInstance();
      case 'ROOM_SERVICE':
        return MaterialIcon$ROOM_SERVICE_getInstance();
      case 'ROTATE_90_DEGREES_CCW':
        return MaterialIcon$ROTATE_90_DEGREES_CCW_getInstance();
      case 'ROTATE_LEFT':
        return MaterialIcon$ROTATE_LEFT_getInstance();
      case 'ROTATE_RIGHT':
        return MaterialIcon$ROTATE_RIGHT_getInstance();
      case 'ROUNDED_CORNER':
        return MaterialIcon$ROUNDED_CORNER_getInstance();
      case 'ROUTER':
        return MaterialIcon$ROUTER_getInstance();
      case 'ROWING':
        return MaterialIcon$ROWING_getInstance();
      case 'RSS_FEED':
        return MaterialIcon$RSS_FEED_getInstance();
      case 'RV_HOOKUP':
        return MaterialIcon$RV_HOOKUP_getInstance();
      case 'SATELLITE':
        return MaterialIcon$SATELLITE_getInstance();
      case 'SAVE':
        return MaterialIcon$SAVE_getInstance();
      case 'SCANNER':
        return MaterialIcon$SCANNER_getInstance();
      case 'SCHEDULE':
        return MaterialIcon$SCHEDULE_getInstance();
      case 'SCHOOL':
        return MaterialIcon$SCHOOL_getInstance();
      case 'SCREEN_LOCK_LANDSCAPE':
        return MaterialIcon$SCREEN_LOCK_LANDSCAPE_getInstance();
      case 'SCREEN_LOCK_PORTRAIT':
        return MaterialIcon$SCREEN_LOCK_PORTRAIT_getInstance();
      case 'SCREEN_LOCK_ROTATION':
        return MaterialIcon$SCREEN_LOCK_ROTATION_getInstance();
      case 'SCREEN_ROTATION':
        return MaterialIcon$SCREEN_ROTATION_getInstance();
      case 'SCREEN_SHARE':
        return MaterialIcon$SCREEN_SHARE_getInstance();
      case 'SD_CARD':
        return MaterialIcon$SD_CARD_getInstance();
      case 'SD_STORAGE':
        return MaterialIcon$SD_STORAGE_getInstance();
      case 'SEARCH':
        return MaterialIcon$SEARCH_getInstance();
      case 'SECURITY':
        return MaterialIcon$SECURITY_getInstance();
      case 'SELECT_ALL':
        return MaterialIcon$SELECT_ALL_getInstance();
      case 'SEND':
        return MaterialIcon$SEND_getInstance();
      case 'SENTIMENT_DISSATISFIED':
        return MaterialIcon$SENTIMENT_DISSATISFIED_getInstance();
      case 'SENTIMENT_NEUTRAL':
        return MaterialIcon$SENTIMENT_NEUTRAL_getInstance();
      case 'SENTIMENT_SATISFIED':
        return MaterialIcon$SENTIMENT_SATISFIED_getInstance();
      case 'SENTIMENT_VERY_DISSATISFIED':
        return MaterialIcon$SENTIMENT_VERY_DISSATISFIED_getInstance();
      case 'SENTIMENT_VERY_SATISFIED':
        return MaterialIcon$SENTIMENT_VERY_SATISFIED_getInstance();
      case 'SETTINGS':
        return MaterialIcon$SETTINGS_getInstance();
      case 'SETTINGS_APPLICATIONS':
        return MaterialIcon$SETTINGS_APPLICATIONS_getInstance();
      case 'SETTINGS_BACKUP_RESTORE':
        return MaterialIcon$SETTINGS_BACKUP_RESTORE_getInstance();
      case 'SETTINGS_BLUETOOTH':
        return MaterialIcon$SETTINGS_BLUETOOTH_getInstance();
      case 'SETTINGS_BRIGHTNESS':
        return MaterialIcon$SETTINGS_BRIGHTNESS_getInstance();
      case 'SETTINGS_CELL':
        return MaterialIcon$SETTINGS_CELL_getInstance();
      case 'SETTINGS_ETHERNET':
        return MaterialIcon$SETTINGS_ETHERNET_getInstance();
      case 'SETTINGS_INPUT_ANTENNA':
        return MaterialIcon$SETTINGS_INPUT_ANTENNA_getInstance();
      case 'SETTINGS_INPUT_COMPONENT':
        return MaterialIcon$SETTINGS_INPUT_COMPONENT_getInstance();
      case 'SETTINGS_INPUT_COMPOSITE':
        return MaterialIcon$SETTINGS_INPUT_COMPOSITE_getInstance();
      case 'SETTINGS_INPUT_HDMI':
        return MaterialIcon$SETTINGS_INPUT_HDMI_getInstance();
      case 'SETTINGS_INPUT_SVIDEO':
        return MaterialIcon$SETTINGS_INPUT_SVIDEO_getInstance();
      case 'SETTINGS_OVERSCAN':
        return MaterialIcon$SETTINGS_OVERSCAN_getInstance();
      case 'SETTINGS_PHONE':
        return MaterialIcon$SETTINGS_PHONE_getInstance();
      case 'SETTINGS_POWER':
        return MaterialIcon$SETTINGS_POWER_getInstance();
      case 'SETTINGS_REMOTE':
        return MaterialIcon$SETTINGS_REMOTE_getInstance();
      case 'SETTINGS_SYSTEM_DAYDREAM':
        return MaterialIcon$SETTINGS_SYSTEM_DAYDREAM_getInstance();
      case 'SETTINGS_VOICE':
        return MaterialIcon$SETTINGS_VOICE_getInstance();
      case 'SHARE':
        return MaterialIcon$SHARE_getInstance();
      case 'SHOP':
        return MaterialIcon$SHOP_getInstance();
      case 'SHOP_TWO':
        return MaterialIcon$SHOP_TWO_getInstance();
      case 'SHOPPING_BASKET':
        return MaterialIcon$SHOPPING_BASKET_getInstance();
      case 'SHOPPING_CART':
        return MaterialIcon$SHOPPING_CART_getInstance();
      case 'SHORT_TEXT':
        return MaterialIcon$SHORT_TEXT_getInstance();
      case 'SHOW_CHART':
        return MaterialIcon$SHOW_CHART_getInstance();
      case 'SHUFFLE':
        return MaterialIcon$SHUFFLE_getInstance();
      case 'SIGNAL_CELLULAR_4_BAR':
        return MaterialIcon$SIGNAL_CELLULAR_4_BAR_getInstance();
      case 'SIGNAL_CELLULAR_CONNECTED_NO_INTERNET_4_BAR':
        return MaterialIcon$SIGNAL_CELLULAR_CONNECTED_NO_INTERNET_4_BAR_getInstance();
      case 'SIGNAL_CELLULAR_NO_SIM':
        return MaterialIcon$SIGNAL_CELLULAR_NO_SIM_getInstance();
      case 'SIGNAL_CELLULAR_NULL':
        return MaterialIcon$SIGNAL_CELLULAR_NULL_getInstance();
      case 'SIGNAL_CELLULAR_OFF':
        return MaterialIcon$SIGNAL_CELLULAR_OFF_getInstance();
      case 'SIGNAL_WIFI_4_BAR':
        return MaterialIcon$SIGNAL_WIFI_4_BAR_getInstance();
      case 'SIGNAL_WIFI_4_BAR_LOCK':
        return MaterialIcon$SIGNAL_WIFI_4_BAR_LOCK_getInstance();
      case 'SIGNAL_WIFI_OFF':
        return MaterialIcon$SIGNAL_WIFI_OFF_getInstance();
      case 'SIM_CARD':
        return MaterialIcon$SIM_CARD_getInstance();
      case 'SIM_CARD_ALERT':
        return MaterialIcon$SIM_CARD_ALERT_getInstance();
      case 'SKIP_NEXT':
        return MaterialIcon$SKIP_NEXT_getInstance();
      case 'SKIP_PREVIOUS':
        return MaterialIcon$SKIP_PREVIOUS_getInstance();
      case 'SLIDESHOW':
        return MaterialIcon$SLIDESHOW_getInstance();
      case 'SLOW_MOTION_VIDEO':
        return MaterialIcon$SLOW_MOTION_VIDEO_getInstance();
      case 'SMARTPHONE':
        return MaterialIcon$SMARTPHONE_getInstance();
      case 'SMOKE_FREE':
        return MaterialIcon$SMOKE_FREE_getInstance();
      case 'SMOKING_ROOMS':
        return MaterialIcon$SMOKING_ROOMS_getInstance();
      case 'SMS':
        return MaterialIcon$SMS_getInstance();
      case 'SMS_FAILED':
        return MaterialIcon$SMS_FAILED_getInstance();
      case 'SNOOZE':
        return MaterialIcon$SNOOZE_getInstance();
      case 'SORT':
        return MaterialIcon$SORT_getInstance();
      case 'SORT_BY_ALPHA':
        return MaterialIcon$SORT_BY_ALPHA_getInstance();
      case 'SPA':
        return MaterialIcon$SPA_getInstance();
      case 'SPACE_BAR':
        return MaterialIcon$SPACE_BAR_getInstance();
      case 'SPEAKER':
        return MaterialIcon$SPEAKER_getInstance();
      case 'SPEAKER_GROUP':
        return MaterialIcon$SPEAKER_GROUP_getInstance();
      case 'SPEAKER_NOTES':
        return MaterialIcon$SPEAKER_NOTES_getInstance();
      case 'SPEAKER_NOTES_OFF':
        return MaterialIcon$SPEAKER_NOTES_OFF_getInstance();
      case 'SPEAKER_PHONE':
        return MaterialIcon$SPEAKER_PHONE_getInstance();
      case 'SPELLCHECK':
        return MaterialIcon$SPELLCHECK_getInstance();
      case 'STAR':
        return MaterialIcon$STAR_getInstance();
      case 'STAR_BORDER':
        return MaterialIcon$STAR_BORDER_getInstance();
      case 'STAR_HALF':
        return MaterialIcon$STAR_HALF_getInstance();
      case 'STARS':
        return MaterialIcon$STARS_getInstance();
      case 'STAY_CURRENT_LANDSCAPE':
        return MaterialIcon$STAY_CURRENT_LANDSCAPE_getInstance();
      case 'STAY_CURRENT_PORTRAIT':
        return MaterialIcon$STAY_CURRENT_PORTRAIT_getInstance();
      case 'STAY_PRIMARY_LANDSCAPE':
        return MaterialIcon$STAY_PRIMARY_LANDSCAPE_getInstance();
      case 'STAY_PRIMARY_PORTRAIT':
        return MaterialIcon$STAY_PRIMARY_PORTRAIT_getInstance();
      case 'STOP':
        return MaterialIcon$STOP_getInstance();
      case 'STOP_SCREEN_SHARE':
        return MaterialIcon$STOP_SCREEN_SHARE_getInstance();
      case 'STORAGE':
        return MaterialIcon$STORAGE_getInstance();
      case 'STORE':
        return MaterialIcon$STORE_getInstance();
      case 'STORE_MALL_DIRECTORY':
        return MaterialIcon$STORE_MALL_DIRECTORY_getInstance();
      case 'STRAIGHTEN':
        return MaterialIcon$STRAIGHTEN_getInstance();
      case 'STREETVIEW':
        return MaterialIcon$STREETVIEW_getInstance();
      case 'STRIKETHROUGH_S':
        return MaterialIcon$STRIKETHROUGH_S_getInstance();
      case 'STYLE':
        return MaterialIcon$STYLE_getInstance();
      case 'SUBDIRECTORY_ARROW_LEFT':
        return MaterialIcon$SUBDIRECTORY_ARROW_LEFT_getInstance();
      case 'SUBDIRECTORY_ARROW_RIGHT':
        return MaterialIcon$SUBDIRECTORY_ARROW_RIGHT_getInstance();
      case 'SUBJECT':
        return MaterialIcon$SUBJECT_getInstance();
      case 'SUBSCRIPTIONS':
        return MaterialIcon$SUBSCRIPTIONS_getInstance();
      case 'SUBTITLES':
        return MaterialIcon$SUBTITLES_getInstance();
      case 'SUBWAY':
        return MaterialIcon$SUBWAY_getInstance();
      case 'SUPERVISOR_ACCOUNT':
        return MaterialIcon$SUPERVISOR_ACCOUNT_getInstance();
      case 'SURROUND_SOUND':
        return MaterialIcon$SURROUND_SOUND_getInstance();
      case 'SWAP_CALLS':
        return MaterialIcon$SWAP_CALLS_getInstance();
      case 'SWAP_HORIZ':
        return MaterialIcon$SWAP_HORIZ_getInstance();
      case 'SWAP_VERT':
        return MaterialIcon$SWAP_VERT_getInstance();
      case 'SWAP_VERTICAL_CIRCLE':
        return MaterialIcon$SWAP_VERTICAL_CIRCLE_getInstance();
      case 'SWITCH_CAMERA':
        return MaterialIcon$SWITCH_CAMERA_getInstance();
      case 'SWITCH_VIDEO':
        return MaterialIcon$SWITCH_VIDEO_getInstance();
      case 'SYNC':
        return MaterialIcon$SYNC_getInstance();
      case 'SYNC_DISABLED':
        return MaterialIcon$SYNC_DISABLED_getInstance();
      case 'SYNC_PROBLEM':
        return MaterialIcon$SYNC_PROBLEM_getInstance();
      case 'SYSTEM_UPDATE':
        return MaterialIcon$SYSTEM_UPDATE_getInstance();
      case 'SYSTEM_UPDATE_ALT':
        return MaterialIcon$SYSTEM_UPDATE_ALT_getInstance();
      case 'TAB':
        return MaterialIcon$TAB_getInstance();
      case 'TAB_UNSELECTED':
        return MaterialIcon$TAB_UNSELECTED_getInstance();
      case 'TABLET':
        return MaterialIcon$TABLET_getInstance();
      case 'TABLET_ANDROID':
        return MaterialIcon$TABLET_ANDROID_getInstance();
      case 'TABLET_MAC':
        return MaterialIcon$TABLET_MAC_getInstance();
      case 'TAG_FACES':
        return MaterialIcon$TAG_FACES_getInstance();
      case 'TAP_AND_PLAY':
        return MaterialIcon$TAP_AND_PLAY_getInstance();
      case 'TERRAIN':
        return MaterialIcon$TERRAIN_getInstance();
      case 'TEXT_FIELDS':
        return MaterialIcon$TEXT_FIELDS_getInstance();
      case 'TEXT_FORMAT':
        return MaterialIcon$TEXT_FORMAT_getInstance();
      case 'TEXTSMS':
        return MaterialIcon$TEXTSMS_getInstance();
      case 'TEXTURE':
        return MaterialIcon$TEXTURE_getInstance();
      case 'THEATERS':
        return MaterialIcon$THEATERS_getInstance();
      case 'THUMB_DOWN':
        return MaterialIcon$THUMB_DOWN_getInstance();
      case 'THUMB_UP':
        return MaterialIcon$THUMB_UP_getInstance();
      case 'THUMBS_UP_DOWN':
        return MaterialIcon$THUMBS_UP_DOWN_getInstance();
      case 'TIME_TO_LEAVE':
        return MaterialIcon$TIME_TO_LEAVE_getInstance();
      case 'TIMELAPSE':
        return MaterialIcon$TIMELAPSE_getInstance();
      case 'TIMELINE':
        return MaterialIcon$TIMELINE_getInstance();
      case 'TIMER':
        return MaterialIcon$TIMER_getInstance();
      case 'TIMER_10':
        return MaterialIcon$TIMER_10_getInstance();
      case 'TIMER_3':
        return MaterialIcon$TIMER_3_getInstance();
      case 'TIMER_OFF':
        return MaterialIcon$TIMER_OFF_getInstance();
      case 'TITLE':
        return MaterialIcon$TITLE_getInstance();
      case 'TOC':
        return MaterialIcon$TOC_getInstance();
      case 'TODAY':
        return MaterialIcon$TODAY_getInstance();
      case 'TOLL':
        return MaterialIcon$TOLL_getInstance();
      case 'TONALITY':
        return MaterialIcon$TONALITY_getInstance();
      case 'TOUCH_APP':
        return MaterialIcon$TOUCH_APP_getInstance();
      case 'TOYS':
        return MaterialIcon$TOYS_getInstance();
      case 'TRACK_CHANGES':
        return MaterialIcon$TRACK_CHANGES_getInstance();
      case 'TRAFFIC':
        return MaterialIcon$TRAFFIC_getInstance();
      case 'TRAIN':
        return MaterialIcon$TRAIN_getInstance();
      case 'TRAM':
        return MaterialIcon$TRAM_getInstance();
      case 'TRANSFER_WITHIN_A_STATION':
        return MaterialIcon$TRANSFER_WITHIN_A_STATION_getInstance();
      case 'TRANSFORM':
        return MaterialIcon$TRANSFORM_getInstance();
      case 'TRANSLATE':
        return MaterialIcon$TRANSLATE_getInstance();
      case 'TRENDING_DOWN':
        return MaterialIcon$TRENDING_DOWN_getInstance();
      case 'TRENDING_FLAT':
        return MaterialIcon$TRENDING_FLAT_getInstance();
      case 'TRENDING_UP':
        return MaterialIcon$TRENDING_UP_getInstance();
      case 'TUNE':
        return MaterialIcon$TUNE_getInstance();
      case 'TURNED_IN':
        return MaterialIcon$TURNED_IN_getInstance();
      case 'TURNED_IN_NOT':
        return MaterialIcon$TURNED_IN_NOT_getInstance();
      case 'TV':
        return MaterialIcon$TV_getInstance();
      case 'UNARCHIVE':
        return MaterialIcon$UNARCHIVE_getInstance();
      case 'UNDO':
        return MaterialIcon$UNDO_getInstance();
      case 'UNFOLD_LESS':
        return MaterialIcon$UNFOLD_LESS_getInstance();
      case 'UNFOLD_MORE':
        return MaterialIcon$UNFOLD_MORE_getInstance();
      case 'UPDATE':
        return MaterialIcon$UPDATE_getInstance();
      case 'USB':
        return MaterialIcon$USB_getInstance();
      case 'VERIFIED_USER':
        return MaterialIcon$VERIFIED_USER_getInstance();
      case 'VERTICAL_ALIGN_BOTTOM':
        return MaterialIcon$VERTICAL_ALIGN_BOTTOM_getInstance();
      case 'VERTICAL_ALIGN_CENTER':
        return MaterialIcon$VERTICAL_ALIGN_CENTER_getInstance();
      case 'VERTICAL_ALIGN_TOP':
        return MaterialIcon$VERTICAL_ALIGN_TOP_getInstance();
      case 'VIBRATION':
        return MaterialIcon$VIBRATION_getInstance();
      case 'VIDEO_CALL':
        return MaterialIcon$VIDEO_CALL_getInstance();
      case 'VIDEO_LABEL':
        return MaterialIcon$VIDEO_LABEL_getInstance();
      case 'VIDEO_LIBRARY':
        return MaterialIcon$VIDEO_LIBRARY_getInstance();
      case 'VIDEOCAM':
        return MaterialIcon$VIDEOCAM_getInstance();
      case 'VIDEOCAM_OFF':
        return MaterialIcon$VIDEOCAM_OFF_getInstance();
      case 'VIDEOGAME_ASSET':
        return MaterialIcon$VIDEOGAME_ASSET_getInstance();
      case 'VIEW_AGENDA':
        return MaterialIcon$VIEW_AGENDA_getInstance();
      case 'VIEW_ARRAY':
        return MaterialIcon$VIEW_ARRAY_getInstance();
      case 'VIEW_CAROUSEL':
        return MaterialIcon$VIEW_CAROUSEL_getInstance();
      case 'VIEW_COLUMN':
        return MaterialIcon$VIEW_COLUMN_getInstance();
      case 'VIEW_COMFY':
        return MaterialIcon$VIEW_COMFY_getInstance();
      case 'VIEW_COMPACT':
        return MaterialIcon$VIEW_COMPACT_getInstance();
      case 'VIEW_DAY':
        return MaterialIcon$VIEW_DAY_getInstance();
      case 'VIEW_HEADLINE':
        return MaterialIcon$VIEW_HEADLINE_getInstance();
      case 'VIEW_LIST':
        return MaterialIcon$VIEW_LIST_getInstance();
      case 'VIEW_MODULE':
        return MaterialIcon$VIEW_MODULE_getInstance();
      case 'VIEW_QUILT':
        return MaterialIcon$VIEW_QUILT_getInstance();
      case 'VIEW_STREAM':
        return MaterialIcon$VIEW_STREAM_getInstance();
      case 'VIEW_WEEK':
        return MaterialIcon$VIEW_WEEK_getInstance();
      case 'VIGNETTE':
        return MaterialIcon$VIGNETTE_getInstance();
      case 'VISIBILITY':
        return MaterialIcon$VISIBILITY_getInstance();
      case 'VISIBILITY_OFF':
        return MaterialIcon$VISIBILITY_OFF_getInstance();
      case 'VOICE_CHAT':
        return MaterialIcon$VOICE_CHAT_getInstance();
      case 'VOICEMAIL':
        return MaterialIcon$VOICEMAIL_getInstance();
      case 'VOLUME_DOWN':
        return MaterialIcon$VOLUME_DOWN_getInstance();
      case 'VOLUME_MUTE':
        return MaterialIcon$VOLUME_MUTE_getInstance();
      case 'VOLUME_OFF':
        return MaterialIcon$VOLUME_OFF_getInstance();
      case 'VOLUME_UP':
        return MaterialIcon$VOLUME_UP_getInstance();
      case 'VPN_KEY':
        return MaterialIcon$VPN_KEY_getInstance();
      case 'VPN_LOCK':
        return MaterialIcon$VPN_LOCK_getInstance();
      case 'WALLPAPER':
        return MaterialIcon$WALLPAPER_getInstance();
      case 'WARNING':
        return MaterialIcon$WARNING_getInstance();
      case 'WATCH':
        return MaterialIcon$WATCH_getInstance();
      case 'WATCH_LATER':
        return MaterialIcon$WATCH_LATER_getInstance();
      case 'WB_AUTO':
        return MaterialIcon$WB_AUTO_getInstance();
      case 'WB_CLOUDY':
        return MaterialIcon$WB_CLOUDY_getInstance();
      case 'WB_INCANDESCENT':
        return MaterialIcon$WB_INCANDESCENT_getInstance();
      case 'WB_IRIDESCENT':
        return MaterialIcon$WB_IRIDESCENT_getInstance();
      case 'WB_SUNNY':
        return MaterialIcon$WB_SUNNY_getInstance();
      case 'WC':
        return MaterialIcon$WC_getInstance();
      case 'WEB':
        return MaterialIcon$WEB_getInstance();
      case 'WEB_ASSET':
        return MaterialIcon$WEB_ASSET_getInstance();
      case 'WEEKEND':
        return MaterialIcon$WEEKEND_getInstance();
      case 'WHATSHOT':
        return MaterialIcon$WHATSHOT_getInstance();
      case 'WIDGETS':
        return MaterialIcon$WIDGETS_getInstance();
      case 'WIFI':
        return MaterialIcon$WIFI_getInstance();
      case 'WIFI_LOCK':
        return MaterialIcon$WIFI_LOCK_getInstance();
      case 'WIFI_TETHERING':
        return MaterialIcon$WIFI_TETHERING_getInstance();
      case 'WORK':
        return MaterialIcon$WORK_getInstance();
      case 'WRAP_TEXT':
        return MaterialIcon$WRAP_TEXT_getInstance();
      case 'YOUTUBE_SEARCHED_FOR':
        return MaterialIcon$YOUTUBE_SEARCHED_FOR_getInstance();
      case 'ZOOM_IN':
        return MaterialIcon$ZOOM_IN_getInstance();
      case 'ZOOM_OUT':
        return MaterialIcon$ZOOM_OUT_getInstance();
      case 'ZOOM_OUT_MAP':
        return MaterialIcon$ZOOM_OUT_MAP_getInstance();
      default:throwISE('No enum constant de.westermann.kwebview.components.MaterialIcon.' + name);
    }
  }
  MaterialIcon.valueOf_61zpoe$ = MaterialIcon$valueOf;
  function OptionView(value) {
    var tmp$;
    var tagName;
    if (null != null) {
      tagName = null;
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLOptionElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName)) {
        tagName = 'div';
      }
    }
    View.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLOptionElement) ? tmp$ : throwCCE());
    this.value = value;
    var tmp$_1;
    this.html_vnqh1g$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, View.prototype, 'html'), HTMLOptionElement) ? tmp$_1 : throwCCE();
  }
  Object.defineProperty(OptionView.prototype, 'html', {
    get: function () {
      return this.html_vnqh1g$_0;
    }
  });
  Object.defineProperty(OptionView.prototype, 'htmlValue', {
    get: function () {
      return this.html.value;
    },
    set: function (value) {
      this.html.value = value;
    }
  });
  Object.defineProperty(OptionView.prototype, 'text', {
    get: function () {
      return this.html.text;
    },
    set: function (value) {
      this.html.text = value;
    }
  });
  Object.defineProperty(OptionView.prototype, 'index', {
    get: function () {
      return this.html.index;
    }
  });
  Object.defineProperty(OptionView.prototype, 'selected', {
    get: function () {
      return this.html.selected;
    },
    set: function (value) {
      this.html.selected = value;
    }
  });
  OptionView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OptionView',
    interfaces: [View]
  };
  function SelectView(dataSet, initValue, transform) {
    if (transform === void 0)
      transform = SelectView_init$lambda;
    var tmp$;
    var tagName;
    if (null != null) {
      tagName = null;
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLSelectElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName)) {
        tagName = 'div';
      }
    }
    ViewCollection.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLSelectElement) ? tmp$ : throwCCE());
    this.initValue_0 = initValue;
    this.transform = transform;
    var tmp$_1;
    this.html_w6ruyz$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, ViewCollection.prototype, 'html'), HTMLSelectElement) ? tmp$_1 : throwCCE();
    this.dataSet_zi3a62$_0 = emptyList();
    this.valueProperty = property_0(getPropertyCallableRef('value', 0, function ($receiver) {
      return $receiver.value;
    }.bind(null, this), function ($receiver, value) {
      $receiver.value = value;
    }.bind(null, this)));
    this.readonlyInternal_2ppa53$_0 = new AttributeDelegate('readonly');
    this.tabindex_7ycq3d$_0 = new AttributeDelegate();
    this.dataSet = dataSet;
    this.value = this.initValue_0;
    this.html.addEventListener('change', new SelectView_init$ObjectLiteral(this));
  }
  Object.defineProperty(SelectView.prototype, 'html', {
    get: function () {
      return this.html_w6ruyz$_0;
    }
  });
  SelectView.prototype.bind_1gog60$ = function (property) {
    this.valueProperty.bind_ybyx9l$(property);
    this.readonly = true;
  };
  SelectView.prototype.bind_bqrw12$ = function (property) {
    this.valueProperty.bindBidirectional_8xvv9u$(property);
  };
  SelectView.prototype.unbind = function () {
    this.valueProperty.unbind();
  };
  Object.defineProperty(SelectView.prototype, 'dataSet', {
    get: function () {
      return this.dataSet_zi3a62$_0;
    },
    set: function (value) {
      this.dataSet_zi3a62$_0 = value;
      this.clear();
      var tmp$, tmp$_0;
      var index = 0;
      tmp$ = value.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
        var $receiver = new OptionView(item);
        $receiver.text = this.transform(item);
        $receiver.htmlValue = index_0.toString();
        this.unaryPlus_o71kt9$($receiver);
      }
    }
  });
  Object.defineProperty(SelectView.prototype, 'index', {
    get: function () {
      return this.html.selectedIndex;
    },
    set: function (value) {
      var invalidate = this.html.selectedIndex !== value;
      this.html.selectedIndex = value;
      if (invalidate) {
        this.valueProperty.invalidate();
      }
    }
  });
  Object.defineProperty(SelectView.prototype, 'value', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrNull(this.dataSet, this.index)) != null ? tmp$ : this.initValue_0;
    },
    set: function (value) {
      this.index = this.dataSet.indexOf_11rb$(value);
    }
  });
  var SelectView$readonlyInternal_metadata = new PropertyMetadata('readonlyInternal');
  Object.defineProperty(SelectView.prototype, 'readonlyInternal_0', {
    get: function () {
      return this.readonlyInternal_2ppa53$_0.getValue_g92zoq$(this, SelectView$readonlyInternal_metadata);
    },
    set: function (readonlyInternal) {
      this.readonlyInternal_2ppa53$_0.setValue_wcp6fr$(this, SelectView$readonlyInternal_metadata, readonlyInternal);
    }
  });
  Object.defineProperty(SelectView.prototype, 'readonly', {
    get: function () {
      return this.readonlyInternal_0 != null;
    },
    set: function (value) {
      this.readonlyInternal_0 = value ? 'readonly' : null;
    }
  });
  var SelectView$tabindex_metadata = new PropertyMetadata('tabindex');
  Object.defineProperty(SelectView.prototype, 'tabindex', {
    get: function () {
      return this.tabindex_7ycq3d$_0.getValue_g92zoq$(this, SelectView$tabindex_metadata);
    },
    set: function (tabindex) {
      this.tabindex_7ycq3d$_0.setValue_wcp6fr$(this, SelectView$tabindex_metadata, tabindex);
    }
  });
  SelectView.prototype.preventTabStop = function () {
    this.tabindex = '-1';
  };
  function SelectView_init$lambda(it) {
    return it.toString();
  }
  function SelectView_init$ObjectLiteral(this$SelectView) {
    this.this$SelectView = this$SelectView;
  }
  SelectView_init$ObjectLiteral.prototype.handleEvent = function (event) {
    this.this$SelectView.valueProperty.invalidate();
  };
  SelectView_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  SelectView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SelectView',
    interfaces: [ViewCollection]
  };
  function selectView$lambda(it) {
    return it.toString();
  }
  function selectView$lambda_0($receiver) {
    return Unit;
  }
  function selectView($receiver, dataSet, initValue, transform, init) {
    if (transform === void 0)
      transform = selectView$lambda;
    if (init === void 0)
      init = selectView$lambda_0;
    var $receiver_0 = new SelectView(dataSet, initValue, transform);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function selectView$lambda_1(it) {
    return it.toString();
  }
  function selectView$lambda_2($receiver) {
    return Unit;
  }
  function selectView_0($receiver, dataSet, property, transform, init) {
    if (transform === void 0)
      transform = selectView$lambda_1;
    if (init === void 0)
      init = selectView$lambda_2;
    var $receiver_0 = new SelectView(dataSet, property.value, transform);
    $receiver_0.bind_1gog60$(property);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function selectView$lambda_3(it) {
    return it.toString();
  }
  function selectView$lambda_4($receiver) {
    return Unit;
  }
  function selectView_1($receiver, dataSet, property, transform, init) {
    if (transform === void 0)
      transform = selectView$lambda_3;
    if (init === void 0)
      init = selectView$lambda_4;
    var $receiver_0 = new SelectView(dataSet, property.value, transform);
    $receiver_0.bind_bqrw12$(property);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  var selectView_2 = defineInlineFunction('ascii-register.de.westermann.kwebview.components.selectView_ga1ra3$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var toList = Kotlin.kotlin.collections.toList_us0mfu$;
    var SelectView_init = _.de.westermann.kwebview.components.SelectView;
    var getCallableRef = Kotlin.getCallableRef;
    function selectView$lambda(it) {
      return it.toString();
    }
    function selectView$lambda_0($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver, initValue, transform, init) {
      if (transform === void 0)
        transform = selectView$lambda;
      if (init === void 0)
        init = selectView$lambda_0;
      var $receiver_0 = new SelectView_init(toList(T_0.values()), initValue, transform);
      getCallableRef('append', function ($receiver, view) {
        return $receiver.append_4q8e84$(view), Unit;
      }.bind(null, $receiver))($receiver_0);
      init($receiver_0);
      return $receiver_0;
    };
  }));
  var selectView_3 = defineInlineFunction('ascii-register.de.westermann.kwebview.components.selectView_4j6g2o$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var toList = Kotlin.kotlin.collections.toList_us0mfu$;
    var SelectView_init = _.de.westermann.kwebview.components.SelectView;
    var getCallableRef = Kotlin.getCallableRef;
    function selectView$lambda(it) {
      return it.toString();
    }
    function selectView$lambda_0($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver, property, transform, init) {
      if (transform === void 0)
        transform = selectView$lambda;
      if (init === void 0)
        init = selectView$lambda_0;
      var $receiver_0 = new SelectView_init(toList(T_0.values()), property.value, transform);
      $receiver_0.bind_1gog60$(property);
      getCallableRef('append', function ($receiver, view) {
        return $receiver.append_4q8e84$(view), Unit;
      }.bind(null, $receiver))($receiver_0);
      init($receiver_0);
      return $receiver_0;
    };
  }));
  var selectView_4 = defineInlineFunction('ascii-register.de.westermann.kwebview.components.selectView_5gp52a$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var toList = Kotlin.kotlin.collections.toList_us0mfu$;
    var SelectView_init = _.de.westermann.kwebview.components.SelectView;
    var getCallableRef = Kotlin.getCallableRef;
    function selectView$lambda(it) {
      return it.toString();
    }
    function selectView$lambda_0($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver, property, transform, init) {
      if (transform === void 0)
        transform = selectView$lambda;
      if (init === void 0)
        init = selectView$lambda_0;
      var $receiver_0 = new SelectView_init(toList(T_0.values()), property.value, transform);
      $receiver_0.bind_bqrw12$(property);
      getCallableRef('append', function ($receiver, view) {
        return $receiver.append_4q8e84$(view), Unit;
      }.bind(null, $receiver))($receiver_0);
      init($receiver_0);
      return $receiver_0;
    };
  }));
  function Table() {
    var tmp$;
    var tagName;
    if (null != null) {
      tagName = null;
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLTableElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName)) {
        tagName = 'div';
      }
    }
    ViewCollection.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLTableElement) ? tmp$ : throwCCE());
    var tmp$_1;
    this.html_43v2na$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, ViewCollection.prototype, 'html'), HTMLTableElement) ? tmp$_1 : throwCCE();
  }
  Object.defineProperty(Table.prototype, 'html', {
    get: function () {
      return this.html_43v2na$_0;
    }
  });
  Table.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Table',
    interfaces: [ViewCollection]
  };
  function table$lambda($receiver) {
    return Unit;
  }
  function table($receiver, classes, init) {
    if (init === void 0)
      init = table$lambda;
    var tmp$;
    var view = new Table();
    for (tmp$ = 0; tmp$ !== classes.length; ++tmp$) {
      var c = classes[tmp$];
      view.classList.plusAssign_61zpoe$(c);
    }
    $receiver.append_4q8e84$(view);
    init(view);
    return view;
  }
  function TableCaption() {
    var tmp$;
    var tagName;
    if ('caption' != null) {
      tagName = 'caption';
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLTableCaptionElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName)) {
        tagName = 'div';
      }
    }
    ViewCollection.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLTableCaptionElement) ? tmp$ : throwCCE());
    var tmp$_1;
    this.html_z7nhj2$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, ViewCollection.prototype, 'html'), HTMLTableCaptionElement) ? tmp$_1 : throwCCE();
  }
  Object.defineProperty(TableCaption.prototype, 'html', {
    get: function () {
      return this.html_z7nhj2$_0;
    }
  });
  TableCaption.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TableCaption',
    interfaces: [ViewCollection]
  };
  function caption$lambda($receiver) {
    return Unit;
  }
  function caption($receiver, init) {
    if (init === void 0)
      init = caption$lambda;
    var view = new TableCaption();
    $receiver.append_4q8e84$(view);
    init(view);
    return view;
  }
  function TableCell(isHead) {
    var tag = isHead ? 'th' : 'td';
    var tmp$;
    var tagName;
    if (tag != null) {
      tagName = tag;
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLTableCellElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName)) {
        tagName = 'div';
      }
    }
    ViewCollection.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLTableCellElement) ? tmp$ : throwCCE());
    this.isHead = isHead;
    var tmp$_1;
    this.html_q38fjc$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, ViewCollection.prototype, 'html'), HTMLTableCellElement) ? tmp$_1 : throwCCE();
    this.colSpanInternal_bqa8l6$_0 = new AttributeDelegate('colspan');
    this.rowSpanInternal_679za8$_0 = new AttributeDelegate('rowspan');
  }
  Object.defineProperty(TableCell.prototype, 'html', {
    get: function () {
      return this.html_q38fjc$_0;
    }
  });
  var TableCell$colSpanInternal_metadata = new PropertyMetadata('colSpanInternal');
  Object.defineProperty(TableCell.prototype, 'colSpanInternal_0', {
    get: function () {
      return this.colSpanInternal_bqa8l6$_0.getValue_g92zoq$(this, TableCell$colSpanInternal_metadata);
    },
    set: function (colSpanInternal) {
      this.colSpanInternal_bqa8l6$_0.setValue_wcp6fr$(this, TableCell$colSpanInternal_metadata, colSpanInternal);
    }
  });
  Object.defineProperty(TableCell.prototype, 'colSpan', {
    get: function () {
      var tmp$;
      return (tmp$ = this.colSpanInternal_0) != null ? toIntOrNull(tmp$) : null;
    },
    set: function (value) {
      this.colSpanInternal_0 = value != null ? value.toString() : null;
    }
  });
  var TableCell$rowSpanInternal_metadata = new PropertyMetadata('rowSpanInternal');
  Object.defineProperty(TableCell.prototype, 'rowSpanInternal_0', {
    get: function () {
      return this.rowSpanInternal_679za8$_0.getValue_g92zoq$(this, TableCell$rowSpanInternal_metadata);
    },
    set: function (rowSpanInternal) {
      this.rowSpanInternal_679za8$_0.setValue_wcp6fr$(this, TableCell$rowSpanInternal_metadata, rowSpanInternal);
    }
  });
  Object.defineProperty(TableCell.prototype, 'rowSpan', {
    get: function () {
      var tmp$;
      return (tmp$ = this.rowSpanInternal_0) != null ? toIntOrNull(tmp$) : null;
    },
    set: function (value) {
      this.rowSpanInternal_0 = value != null ? value.toString() : null;
    }
  });
  TableCell.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TableCell',
    interfaces: [ViewCollection]
  };
  function cell$lambda($receiver) {
    return Unit;
  }
  function cell($receiver, colSpan, init) {
    if (colSpan === void 0)
      colSpan = null;
    if (init === void 0)
      init = cell$lambda;
    var view = new TableCell(false);
    view.colSpan = colSpan;
    $receiver.append_4q8e84$(view);
    init(view);
    return view;
  }
  function head$lambda($receiver) {
    return Unit;
  }
  function head($receiver, colSpan, init) {
    if (colSpan === void 0)
      colSpan = null;
    if (init === void 0)
      init = head$lambda;
    var view = new TableCell(true);
    view.colSpan = colSpan;
    $receiver.append_4q8e84$(view);
    init(view);
    return view;
  }
  function TableRow() {
    var tmp$;
    var tagName;
    if ('tr' != null) {
      tagName = 'tr';
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLTableRowElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName)) {
        tagName = 'div';
      }
    }
    ViewCollection.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLTableRowElement) ? tmp$ : throwCCE());
    var tmp$_1;
    this.html_x6xdl6$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, ViewCollection.prototype, 'html'), HTMLTableRowElement) ? tmp$_1 : throwCCE();
  }
  Object.defineProperty(TableRow.prototype, 'html', {
    get: function () {
      return this.html_x6xdl6$_0;
    }
  });
  TableRow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TableRow',
    interfaces: [ViewCollection]
  };
  function row$lambda($receiver) {
    return Unit;
  }
  function row($receiver, classes, init) {
    if (init === void 0)
      init = row$lambda;
    var tmp$;
    var view = new TableRow();
    for (tmp$ = 0; tmp$ !== classes.length; ++tmp$) {
      var c = classes[tmp$];
      view.classList.plusAssign_61zpoe$(c);
    }
    $receiver.append_4q8e84$(view);
    init(view);
    return view;
  }
  function TableSection(type) {
    var tag = type.tagName;
    var tmp$;
    var tagName;
    if (tag != null) {
      tagName = tag;
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLTableSectionElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName)) {
        tagName = 'div';
      }
    }
    ViewCollection.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLTableSectionElement) ? tmp$ : throwCCE());
    this.type = type;
    var tmp$_1;
    this.html_23hi9r$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, ViewCollection.prototype, 'html'), HTMLTableSectionElement) ? tmp$_1 : throwCCE();
  }
  Object.defineProperty(TableSection.prototype, 'html', {
    get: function () {
      return this.html_23hi9r$_0;
    }
  });
  function TableSection$Type(name, ordinal, tagName) {
    Enum.call(this);
    this.tagName = tagName;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TableSection$Type_initFields() {
    TableSection$Type_initFields = function () {
    };
    TableSection$Type$THEAD_instance = new TableSection$Type('THEAD', 0, 'thead');
    TableSection$Type$TBODY_instance = new TableSection$Type('TBODY', 1, 'tbody');
    TableSection$Type$TFOOT_instance = new TableSection$Type('TFOOT', 2, 'tfoot');
  }
  var TableSection$Type$THEAD_instance;
  function TableSection$Type$THEAD_getInstance() {
    TableSection$Type_initFields();
    return TableSection$Type$THEAD_instance;
  }
  var TableSection$Type$TBODY_instance;
  function TableSection$Type$TBODY_getInstance() {
    TableSection$Type_initFields();
    return TableSection$Type$TBODY_instance;
  }
  var TableSection$Type$TFOOT_instance;
  function TableSection$Type$TFOOT_getInstance() {
    TableSection$Type_initFields();
    return TableSection$Type$TFOOT_instance;
  }
  TableSection$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function TableSection$Type$values() {
    return [TableSection$Type$THEAD_getInstance(), TableSection$Type$TBODY_getInstance(), TableSection$Type$TFOOT_getInstance()];
  }
  TableSection$Type.values = TableSection$Type$values;
  function TableSection$Type$valueOf(name) {
    switch (name) {
      case 'THEAD':
        return TableSection$Type$THEAD_getInstance();
      case 'TBODY':
        return TableSection$Type$TBODY_getInstance();
      case 'TFOOT':
        return TableSection$Type$TFOOT_getInstance();
      default:throwISE('No enum constant de.westermann.kwebview.components.TableSection.Type.' + name);
    }
  }
  TableSection$Type.valueOf_61zpoe$ = TableSection$Type$valueOf;
  TableSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TableSection',
    interfaces: [ViewCollection]
  };
  function thead$lambda($receiver) {
    return Unit;
  }
  function thead($receiver, init) {
    if (init === void 0)
      init = thead$lambda;
    var view = new TableSection(TableSection$Type$THEAD_getInstance());
    $receiver.append_4q8e84$(view);
    init(view);
    return view;
  }
  function tbody$lambda($receiver) {
    return Unit;
  }
  function tbody($receiver, init) {
    if (init === void 0)
      init = tbody$lambda;
    var view = new TableSection(TableSection$Type$TBODY_getInstance());
    $receiver.append_4q8e84$(view);
    init(view);
    return view;
  }
  function tfoot$lambda($receiver) {
    return Unit;
  }
  function tfoot($receiver, init) {
    if (init === void 0)
      init = tfoot$lambda;
    var view = new TableSection(TableSection$Type$TFOOT_getInstance());
    $receiver.append_4q8e84$(view);
    init(view);
    return view;
  }
  function TextView(value) {
    if (value === void 0)
      value = '';
    var tmp$;
    var tagName;
    if (null != null) {
      tagName = null;
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLSpanElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName)) {
        tagName = 'div';
      }
    }
    View.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLSpanElement) ? tmp$ : throwCCE());
    var tmp$_1;
    this.html_xvsv2c$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, View.prototype, 'html'), HTMLSpanElement) ? tmp$_1 : throwCCE();
    this.textProperty = property_0(getPropertyCallableRef('text', 0, function ($receiver) {
      return $receiver.text;
    }.bind(null, this), function ($receiver, value) {
      $receiver.text = value;
    }.bind(null, this)));
    this.text = value;
  }
  Object.defineProperty(TextView.prototype, 'html', {
    get: function () {
      return this.html_xvsv2c$_0;
    }
  });
  TextView.prototype.bind_vbud5z$ = function (property) {
    this.textProperty.bind_ybyx9l$(property);
  };
  TextView.prototype.unbind = function () {
    this.textProperty.unbind();
  };
  Object.defineProperty(TextView.prototype, 'text', {
    get: function () {
      var tmp$;
      return (tmp$ = this.html.textContent) != null ? tmp$ : '';
    },
    set: function (value) {
      this.html.textContent = value;
      this.textProperty.invalidate();
    }
  });
  TextView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextView',
    interfaces: [View]
  };
  function textView$lambda($receiver) {
    return Unit;
  }
  function textView($receiver, text, init) {
    if (text === void 0)
      text = '';
    if (init === void 0)
      init = textView$lambda;
    var $receiver_0 = new TextView(text);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function textView$lambda_0($receiver) {
    return Unit;
  }
  function textView_0($receiver, text, init) {
    if (init === void 0)
      init = textView$lambda_0;
    var $receiver_0 = new TextView(text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_vbud5z$(text);
    init($receiver_0);
    return $receiver_0;
  }
  var createHtmlView = defineInlineFunction('ascii-register.de.westermann.kwebview.createHtmlView_fbk42d$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
    var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
    var throwCCE = Kotlin.throwCCE;
    var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
    return function (V_0, isV, tag) {
      if (tag === void 0)
        tag = null;
      var tmp$;
      var tagName;
      if (tag != null) {
        tagName = tag;
      }
       else {
        var tmp$_0 = get_js(getKClass(V_0)).name.toLowerCase();
        tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
        if (isBlank(tagName)) {
          tagName = 'div';
        }
      }
      return isV(tmp$ = document.createElement(tagName)) ? tmp$ : throwCCE();
    };
  }));
  function toDashCase($receiver) {
    return Regex_init('([a-z])([A-Z])').replace_x2uqeu$($receiver, '$1-$2').toLowerCase();
  }
  var bind = defineInlineFunction('ascii-register.de.westermann.kwebview.bind_tfmpl2$', wrapFunction(function () {
    var throwCCE = Kotlin.throwCCE;
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var Unit = Kotlin.kotlin.Unit;
    function bind$ObjectLiteral(this$bind, isT, typeClosure$T) {
      this.this$bind = this$bind;
      this.isT = isT;
      this.typeClosure$T = typeClosure$T;
    }
    bind$ObjectLiteral.prototype.handleEvent = function (event) {
      var tmp$;
      this.this$bind.emit_11rb$(this.isT(tmp$ = event) ? tmp$ : throwCCE());
    };
    bind$ObjectLiteral.$metadata$ = {
      kind: Kind_CLASS,
      interfaces: []
    };
    function bind$lambda(this$bind, closure$isAttached, closure$element, closure$event, closure$listener) {
      return function () {
        if (this$bind.isEmpty() && closure$isAttached.v) {
          closure$element.removeEventListener(closure$event, closure$listener);
          closure$isAttached.v = false;
        }
         else if (!this$bind.isEmpty() && !closure$isAttached.v) {
          closure$element.addEventListener(closure$event, closure$listener);
          closure$isAttached.v = true;
        }
        return Unit;
      };
    }
    return function (T_0, isT, $receiver, element, event) {
      var listener = new bind$ObjectLiteral($receiver, isT, T_0);
      var isAttached = {v: false};
      var updateState = bind$lambda($receiver, isAttached, element, event, listener);
      $receiver.onAttach = updateState;
      $receiver.onDetach = updateState;
      updateState();
    };
  }));
  function toPoint($receiver) {
    return Point_init($receiver.clientX, $receiver.clientY);
  }
  function toDimension($receiver) {
    return new Dimension($receiver.x, $receiver.y, $receiver.width, $receiver.height);
  }
  function format($receiver, digits) {
    return $receiver.toFixed(digits);
  }
  function delete_0(thing, key) {
    delete(thing[key]);
  }
  function async(timeout, block) {
    if (timeout === void 0)
      timeout = 1;
    if (timeout < 1)
      throw IllegalArgumentException_init('Timeout must be greater than 0!');
    window.setTimeout(block, timeout);
  }
  function interval(timeout, block) {
    if (timeout < 1)
      throw IllegalArgumentException_init('Timeout must be greater than 0!');
    return window.setInterval(block, timeout);
  }
  function clearInterval(id) {
    window.clearInterval(id);
  }
  var bindView$view_metadata = new PropertyMetadata('view');
  function bindView$change(closure$block, closure$view, this$bindView) {
    return function () {
      var new_0 = closure$block();
      if (!equals(new_0, closure$view.getValue_n5byny$(null, bindView$view_metadata))) {
        this$bindView.replace_6kgn13$(closure$view.getValue_n5byny$(null, bindView$view_metadata), new_0);
        closure$view.setValue_sq4zib$(null, bindView$view_metadata, new_0);
      }
    };
  }
  function bindView$lambda(closure$change) {
    return function (it) {
      closure$change();
      return Unit;
    };
  }
  function bindView($receiver, properties, block) {
    var tmp$;
    var viewProperty = property(block());
    var view = viewProperty;
    $receiver.unaryPlus_o71kt9$(view.getValue_n5byny$(null, bindView$view_metadata));
    var change = bindView$change(block, view, $receiver);
    for (tmp$ = 0; tmp$ !== properties.length; ++tmp$) {
      var p = properties[tmp$];
      p.onChange.invoke_qlkmfe$(bindView$lambda(change));
    }
    return viewProperty;
  }
  function get_modifierKey($receiver) {
    return $receiver.altKey || $receiver.ctrlKey || $receiver.shiftKey;
  }
  function listFactory$lambda$lambda(this$listFactory, closure$view) {
    return function () {
      this$listFactory.classList.minusAssign_61zpoe$('animate-add');
      closure$view.classList.minusAssign_61zpoe$('active');
      return Unit;
    };
  }
  function listFactory$lambda(closure$factory, this$listFactory, closure$animateAdd) {
    return function (f) {
      var index = f.component1()
      , element = f.component2();
      var view = closure$factory(element);
      this$listFactory.add_3kdhji$(index, view);
      if (closure$animateAdd != null) {
        this$listFactory.classList.plusAssign_61zpoe$('animate-add');
        view.classList.plusAssign_61zpoe$('active');
        async(closure$animateAdd, listFactory$lambda$lambda(this$listFactory, view));
      }
      return Unit;
    };
  }
  function listFactory$lambda$lambda_0(this$listFactory, closure$view) {
    return function () {
      this$listFactory.classList.minusAssign_61zpoe$('animate-remove');
      closure$view.classList.minusAssign_61zpoe$('active');
      this$listFactory.remove_4q8e84$(closure$view);
      return Unit;
    };
  }
  function listFactory$lambda_0(this$listFactory, closure$animateRemove) {
    return function (f) {
      var index = f.component1();
      var tmp$;
      var view = Kotlin.isType(tmp$ = this$listFactory.get_za3lpa$(index), View) ? tmp$ : throwCCE();
      if (closure$animateRemove == null) {
        this$listFactory.remove_4q8e84$(view);
      }
       else {
        this$listFactory.classList.plusAssign_61zpoe$('animate-remove');
        view.classList.plusAssign_61zpoe$('active');
        async(closure$animateRemove, listFactory$lambda$lambda_0(this$listFactory, view));
      }
      return Unit;
    };
  }
  function listFactory$lambda_1(this$listFactory, closure$factory) {
    return function (f) {
      var oldIndex = f.component1()
      , newIndex = f.component2()
      , element = f.component3();
      this$listFactory.removeAt_za3lpa$(oldIndex);
      this$listFactory.add_3kdhji$(newIndex, closure$factory(element));
      return Unit;
    };
  }
  function listFactory($receiver, list, factory, animateAdd, animateRemove) {
    if (animateAdd === void 0)
      animateAdd = null;
    if (animateRemove === void 0)
      animateRemove = null;
    var tmp$;
    tmp$ = list.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver.unaryPlus_o71kt9$(factory(element));
    }
    list.onAdd.invoke_qlkmfe$(listFactory$lambda(factory, $receiver, animateAdd));
    list.onRemove.invoke_qlkmfe$(listFactory$lambda_0($receiver, animateRemove));
    list.onUpdate.invoke_qlkmfe$(listFactory$lambda_1($receiver, factory));
  }
  function listFactory$lambda_2(it) {
    return it;
  }
  function listFactory_0($receiver, list, animateAdd, animateRemove) {
    if (animateAdd === void 0)
      animateAdd = null;
    if (animateRemove === void 0)
      animateRemove = null;
    listFactory($receiver, list, listFactory$lambda_2, animateAdd, animateRemove);
  }
  function Comparator$ObjectLiteral_3(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_3.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_3.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda_2 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function i18n() {
    i18n_instance = this;
    this.data_0 = LinkedHashMap_init();
    this.fallbackLocale_0 = i18n$Locale$Companion_getInstance().EMPTY;
    this.localeProperty = property(i18n$Locale$Companion_getInstance().EMPTY);
    this.locale_74ustb$_0 = this.localeProperty;
  }
  var i18n$locale_metadata = new PropertyMetadata('locale');
  Object.defineProperty(i18n.prototype, 'locale', {
    get: function () {
      return this.locale_74ustb$_0.getValue_n5byny$(this, i18n$locale_metadata);
    },
    set: function (locale) {
      this.locale_74ustb$_0.setValue_sq4zib$(this, i18n$locale_metadata, locale);
    }
  });
  function i18n$get_i18n$availableLocales$lambda(it) {
    return it.id;
  }
  Object.defineProperty(i18n.prototype, 'availableLocales', {
    get: function () {
      return sortedWith(this.data_0.values, new Comparator$ObjectLiteral_3(compareBy$lambda_2(i18n$get_i18n$availableLocales$lambda)));
    }
  });
  function i18n$register$lambda(it) {
    return it.json();
  }
  function i18n$register$lambda_0(closure$locale) {
    return function (it) {
      closure$locale.json = it;
      closure$locale.isLoaded = true;
      return Unit;
    };
  }
  function i18n$register$lambda_1(it) {
    throw it;
  }
  i18n.prototype.register_shg59h$ = function (id, name, path, fallback) {
    if (fallback === void 0)
      fallback = false;
    var locale = new i18n$Locale(id, name, path, fallback);
    if (fallback) {
      this.fallbackLocale_0 = locale;
      this.localeProperty.invalidate();
    }
    this.data_0.put_xwzc9p$(id, locale);
    window.fetch(path).then(i18n$register$lambda).then(i18n$register$lambda_0(locale)).catch(i18n$register$lambda_1);
  };
  Object.defineProperty(i18n.prototype, 'isReady', {
    get: function () {
      var $receiver = this.data_0.values;
      var all$result;
      all$break: do {
        var tmp$;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          all$result = true;
          break all$break;
        }
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (!element.isLoaded) {
            all$result = false;
            break all$break;
          }
        }
        all$result = true;
      }
       while (false);
      return all$result;
    }
  });
  function i18n$load$ready$lambda(closure$ready) {
    return function () {
      closure$ready();
      return Unit;
    };
  }
  function i18n$load$ready(this$i18n, closure$id, closure$block) {
    return function closure$ready() {
      var tmp$;
      if (this$i18n.isReady) {
        this$i18n.locale = (tmp$ = this$i18n.data_0.get_11rb$(closure$id)) != null ? tmp$ : this$i18n.fallbackLocale_0;
        closure$block();
      }
       else {
        async(50, i18n$load$ready$lambda(closure$ready));
      }
    };
  }
  i18n.prototype.load_a4mwiz$ = function (id, block) {
    var ready = i18n$load$ready(this, id, block);
    ready();
  };
  i18n.prototype.findKey_0 = function (locale, key) {
    var tmp$, tmp$_0;
    var keys = split(key, ['.']);
    var result = locale.json;
    tmp$ = keys.iterator();
    while (tmp$.hasNext()) {
      var k = tmp$.next();
      if (typeof (tmp$_0 = result.hasOwnProperty(k)) === 'boolean' ? tmp$_0 : throwCCE()) {
        result = result[k];
      }
       else {
        return undefined;
      }
    }
    return result;
  };
  i18n.prototype.findKey_1 = function (key) {
    var result = this.findKey_0(this.locale, key);
    if (result == undefined) {
      result = this.findKey_0(this.fallbackLocale_0, key);
    }
    if (result == undefined) {
      console.warn("Cannot translate key '" + key + "'!");
      return key;
    }
     else {
      return result;
    }
  };
  i18n.prototype.replace_0 = function (str, arguments_0) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var destination = ArrayList_init();
    var tmp$_3;
    tmp$_3 = arguments_0.iterator();
    while (tmp$_3.hasNext()) {
      var element = tmp$_3.next();
      if (element.first == null)
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
    var tmp$_4;
    tmp$_4 = destination.iterator();
    while (tmp$_4.hasNext()) {
      var item = tmp$_4.next();
      destination_0.add_11rb$(item.second);
    }
    var unnamed = destination_0;
    var destination_1 = ArrayList_init();
    var tmp$_5;
    tmp$_5 = arguments_0.iterator();
    while (tmp$_5.hasNext()) {
      var element_0 = tmp$_5.next();
      var tmp$_0_0;
      var tmp$_6;
      if ((tmp$_0_0 = (tmp$_6 = element_0.first) != null ? to(tmp$_6, element_0.second) : null) != null) {
        destination_1.add_11rb$(tmp$_0_0);
      }
    }
    var named = destination_1;
    var s = str;
    tmp$ = named.iterator();
    while (tmp$.hasNext()) {
      var tmp$_7 = tmp$.next();
      var key = tmp$_7.component1()
      , replacement = tmp$_7.component2();
      s = replace(s, '{' + key + '}', (tmp$_0 = replacement != null ? replacement.toString() : null) != null ? tmp$_0 : 'null');
    }
    tmp$_1 = unnamed.iterator();
    while (tmp$_1.hasNext()) {
      var replacement_0 = tmp$_1.next();
      if (contains(s, '{}')) {
        s = replaceFirst(s, '{}', (tmp$_2 = replacement_0 != null ? replacement_0.toString() : null) != null ? tmp$_2 : 'null');
      }
    }
    return s;
  };
  i18n.prototype.t_f2l2vj$ = function (key, arguments_0) {
    return this.replace_0(this.findKey_1(key).toString(), arguments_0);
  };
  i18n.prototype.t_u5kxgn$ = function (count, key, arguments_0) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var json = this.findKey_1(key);
    if (numberToDouble(count) === 0.0 && (typeof (tmp$ = json.hasOwnProperty('zero')) === 'boolean' ? tmp$ : throwCCE())) {
      return this.replace_0(json.zero.toString(), arguments_0);
    }
     else if (numberToDouble(count) === 1.0 && (typeof (tmp$_0 = json.hasOwnProperty('one')) === 'boolean' ? tmp$_0 : throwCCE())) {
      return this.replace_0(json.one.toString(), arguments_0);
    }
    if (typeof (tmp$_1 = json.hasOwnProperty('many')) === 'boolean' ? tmp$_1 : throwCCE())
      tmp$_2 = this.replace_0(json.many.toString(), arguments_0);
    else {
      tmp$_2 = this.replace_0(json.toString(), arguments_0);
    }
    return tmp$_2;
  };
  function i18n$Locale(id, name, path, fallback) {
    i18n$Locale$Companion_getInstance();
    this.id = id;
    this.name = name;
    this.path = path;
    this.fallback = fallback;
    this.isLoaded = false;
    this.json = {};
  }
  function i18n$Locale$Companion() {
    i18n$Locale$Companion_instance = this;
    var $receiver = new i18n$Locale('__', '_', '', false);
    $receiver.isLoaded = true;
    this.EMPTY = $receiver;
  }
  i18n$Locale$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var i18n$Locale$Companion_instance = null;
  function i18n$Locale$Companion_getInstance() {
    if (i18n$Locale$Companion_instance === null) {
      new i18n$Locale$Companion();
    }
    return i18n$Locale$Companion_instance;
  }
  i18n$Locale.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Locale',
    interfaces: []
  };
  i18n$Locale.prototype.component1 = function () {
    return this.id;
  };
  i18n$Locale.prototype.component2 = function () {
    return this.name;
  };
  i18n$Locale.prototype.component3 = function () {
    return this.path;
  };
  i18n$Locale.prototype.component4 = function () {
    return this.fallback;
  };
  i18n$Locale.prototype.copy_shg59h$ = function (id, name, path, fallback) {
    return new i18n$Locale(id === void 0 ? this.id : id, name === void 0 ? this.name : name, path === void 0 ? this.path : path, fallback === void 0 ? this.fallback : fallback);
  };
  i18n$Locale.prototype.toString = function () {
    return 'Locale(id=' + Kotlin.toString(this.id) + (', name=' + Kotlin.toString(this.name)) + (', path=' + Kotlin.toString(this.path)) + (', fallback=' + Kotlin.toString(this.fallback)) + ')';
  };
  i18n$Locale.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    result = result * 31 + Kotlin.hashCode(this.fallback) | 0;
    return result;
  };
  i18n$Locale.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.path, other.path) && Kotlin.equals(this.fallback, other.fallback)))));
  };
  i18n.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'i18n',
    interfaces: []
  };
  var i18n_instance = null;
  function i18n_getInstance() {
    if (i18n_instance === null) {
      new i18n();
    }
    return i18n_instance;
  }
  function t$lambda(closure$key) {
    return function (it) {
      return i18n_getInstance().t_f2l2vj$(closure$key, emptyList());
    };
  }
  function t(key) {
    return mapBinding(i18n_getInstance().localeProperty, t$lambda(key));
  }
  function t$lambda_0(closure$key, closure$arguments) {
    return function (it) {
      var tmp$ = i18n_getInstance();
      var tmp$_0 = closure$key;
      var $receiver = closure$arguments;
      var destination = ArrayList_init_0($receiver.length);
      var tmp$_1;
      for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
        var item = $receiver[tmp$_1];
        destination.add_11rb$(to(null, item));
      }
      return tmp$.t_f2l2vj$(tmp$_0, destination);
    };
  }
  function t_0(key, arguments_0) {
    return mapBinding(i18n_getInstance().localeProperty, t$lambda_0(key, arguments_0));
  }
  function t$lambda_1(closure$key, closure$arguments) {
    return function (it) {
      return i18n_getInstance().t_f2l2vj$(closure$key, asList(closure$arguments));
    };
  }
  function t_1(key, arguments_0) {
    return mapBinding(i18n_getInstance().localeProperty, t$lambda_1(key, arguments_0));
  }
  function t$lambda_2(closure$count, closure$key) {
    return function (it) {
      return i18n_getInstance().t_u5kxgn$(closure$count, closure$key, emptyList());
    };
  }
  function t_2(count, key) {
    return mapBinding(i18n_getInstance().localeProperty, t$lambda_2(count, key));
  }
  function t$lambda_3(closure$count, closure$key, closure$arguments) {
    return function (it) {
      var tmp$ = i18n_getInstance();
      var tmp$_0 = closure$count;
      var tmp$_1 = closure$key;
      var $receiver = closure$arguments;
      var destination = ArrayList_init_0($receiver.length);
      var tmp$_2;
      for (tmp$_2 = 0; tmp$_2 !== $receiver.length; ++tmp$_2) {
        var item = $receiver[tmp$_2];
        destination.add_11rb$(to(null, item));
      }
      return tmp$.t_u5kxgn$(tmp$_0, tmp$_1, destination);
    };
  }
  function t_3(count, key, arguments_0) {
    return mapBinding(i18n_getInstance().localeProperty, t$lambda_3(count, key, arguments_0));
  }
  function t$lambda_4(closure$count, closure$key, closure$arguments) {
    return function (it) {
      return i18n_getInstance().t_u5kxgn$(closure$count, closure$key, asList(closure$arguments));
    };
  }
  function t_4(count, key, arguments_0) {
    return mapBinding(i18n_getInstance().localeProperty, t$lambda_4(count, key, arguments_0));
  }
  var package$de = _.de || (_.de = {});
  var package$ascii = package$de.ascii || (package$de.ascii = {});
  package$ascii.BookDialog = BookDialog;
  Object.defineProperty(Cash, 'Companion', {
    get: Cash$Companion_getInstance
  });
  package$ascii.Cash = Cash;
  $$importsForInline$$.KObserve = $module$KObserve;
  package$ascii.CashBox = CashBox;
  Object.defineProperty(package$ascii, 'CalculateEvent', {
    get: CalculateEvent_getInstance
  });
  Object.defineProperty(package$ascii, 'ResetEvent', {
    get: ResetEvent_getInstance
  });
  Object.defineProperty(Mode, 'EDIT', {
    get: Mode$EDIT_getInstance
  });
  Object.defineProperty(Mode, 'CALCULATE', {
    get: Mode$CALCULATE_getInstance
  });
  Object.defineProperty(Mode, 'SETTINGS', {
    get: Mode$SETTINGS_getInstance
  });
  Object.defineProperty(Mode, 'HISOTRY', {
    get: Mode$HISOTRY_getInstance
  });
  package$ascii.Mode = Mode;
  Object.defineProperty(CashEntry, 'Companion', {
    get: CashEntry$Companion_getInstance
  });
  package$ascii.CashEntry = CashEntry;
  CashProblem.prototype.Help = CashProblem$Help;
  Object.defineProperty(package$ascii, 'CashProblem', {
    get: CashProblem_getInstance
  });
  Object.defineProperty(Envelope, 'Companion', {
    get: Envelope$Companion_getInstance
  });
  package$ascii.Envelope = Envelope;
  package$ascii.EnvelopeEntry = EnvelopeEntry;
  package$ascii.History = History;
  Object.defineProperty(MoneyGroup, 'Companion', {
    get: MoneyGroup$Companion_getInstance
  });
  package$ascii.MoneyGroup = MoneyGroup;
  package$ascii.Settings = Settings;
  Object.defineProperty(Snapshot, 'Companion', {
    get: Snapshot$Companion_getInstance
  });
  package$ascii.Snapshot = Snapshot;
  var package$coin = package$ascii.coin || (package$ascii.coin = {});
  package$coin.Coin = Coin;
  package$coin.CoinBox = CoinBox;
  package$coin.CoinGroup = CoinGroup;
  package$coin.CoinStack = CoinStack;
  package$coin.CoinStackGroup = CoinStackGroup;
  package$ascii.main_kand9s$ = main;
  Object.defineProperty(Note, 'Companion', {
    get: Note$Companion_getInstance
  });
  var package$note = package$ascii.note || (package$ascii.note = {});
  package$note.Note = Note;
  package$note.NoteBox = NoteBox;
  package$note.NoteGroup = NoteGroup;
  package$note.NoteStack = NoteStack;
  var package$westermann = package$de.westermann || (package$de.westermann = {});
  var package$kwebview = package$westermann.kwebview || (package$westermann.kwebview = {});
  package$kwebview.AttributeDelegate = AttributeDelegate;
  package$kwebview.ClassDelegate = ClassDelegate;
  package$kwebview.ClassList = ClassList;
  package$kwebview.DataSet = DataSet;
  Object.defineProperty(Dimension, 'Companion', {
    get: Dimension$Companion_getInstance
  });
  package$kwebview.Dimension_init_syd3qs$ = Dimension_init;
  package$kwebview.Dimension = Dimension;
  $$importsForInline$$['ascii-register'] = _;
  Object.defineProperty(package$kwebview, 'Document', {
    get: Document_getInstance
  });
  package$kwebview.KWebViewDsl = KWebViewDsl;
  Object.defineProperty(Point, 'Companion', {
    get: Point$Companion_getInstance
  });
  package$kwebview.Point_init_vux9f0$ = Point_init;
  package$kwebview.Point = Point;
  package$kwebview.get_mh655p$ = get_0;
  package$kwebview.all_o9g2td$ = all;
  package$kwebview.find_mh655p$ = find;
  package$kwebview.View = View;
  package$kwebview.ViewCollection = ViewCollection;
  Object.defineProperty(ViewForLabel, 'Companion', {
    get: ViewForLabel$Companion_getInstance
  });
  package$kwebview.ViewForLabel = ViewForLabel;
  var package$components = package$kwebview.components || (package$kwebview.components = {});
  Object.defineProperty(package$components, 'Body', {
    get: Body_getInstance
  });
  package$components.init_p9xgkf$ = init;
  package$components.BoxView = BoxView;
  package$components.boxView_k4tpi$ = boxView;
  package$components.Button_init_61zpoe$ = Button_init;
  package$components.Button = Button;
  package$components.button_vm1z7l$ = button;
  package$components.button_pvvnso$ = button_0;
  package$components.button_qup9xv$ = button_1;
  package$components.Checkbox = Checkbox;
  package$components.checkbox_md4zoa$ = checkbox;
  package$components.checkbox_n90il3$ = checkbox_0;
  package$components.checkbox_lhi90n$ = checkbox_1;
  package$components.FilterList = FilterList;
  package$components.Filter = Filter;
  package$components.StringFilter = StringFilter;
  package$components.StaticStringFilter = StaticStringFilter;
  package$components.DynamicStringFilter = DynamicStringFilter;
  package$components.filterList_kguhrl$ = filterList;
  Object.defineProperty(Heading$Type, 'H1', {
    get: Heading$Type$H1_getInstance
  });
  Object.defineProperty(Heading$Type, 'H2', {
    get: Heading$Type$H2_getInstance
  });
  Object.defineProperty(Heading$Type, 'H3', {
    get: Heading$Type$H3_getInstance
  });
  Object.defineProperty(Heading$Type, 'H4', {
    get: Heading$Type$H4_getInstance
  });
  Object.defineProperty(Heading$Type, 'H5', {
    get: Heading$Type$H5_getInstance
  });
  Object.defineProperty(Heading$Type, 'H6', {
    get: Heading$Type$H6_getInstance
  });
  Heading.Type = Heading$Type;
  package$components.Heading = Heading;
  package$components.h1_wzoj4d$ = h1;
  package$components.h1_b7eq7w$ = h1_0;
  package$components.h2_wzoj4d$ = h2;
  package$components.h2_b7eq7w$ = h2_0;
  package$components.h3_wzoj4d$ = h3;
  package$components.h3_b7eq7w$ = h3_0;
  package$components.h4_wzoj4d$ = h4;
  package$components.h4_b7eq7w$ = h4_0;
  package$components.h5_wzoj4d$ = h5;
  package$components.h5_b7eq7w$ = h5_0;
  package$components.h6_wzoj4d$ = h6;
  package$components.h6_b7eq7w$ = h6_0;
  package$components.Icon = Icon;
  package$components.IconView = IconView;
  package$components.iconView_28uyuy$ = iconView;
  package$components.iconView_3sarjt$ = iconView_0;
  package$components.ImageView = ImageView;
  package$components.imageView_7vdf7x$ = imageView;
  package$components.imageView_4g1v94$ = imageView_0;
  package$components.InputView = InputView;
  Object.defineProperty(InputType, 'TEXT', {
    get: InputType$TEXT_getInstance
  });
  Object.defineProperty(InputType, 'NUMBER', {
    get: InputType$NUMBER_getInstance
  });
  Object.defineProperty(InputType, 'PASSWORD', {
    get: InputType$PASSWORD_getInstance
  });
  Object.defineProperty(InputType, 'Companion', {
    get: InputType$Companion_getInstance
  });
  package$components.InputType = InputType;
  package$components.inputView_u9he6r$ = inputView;
  package$components.inputView_7utk0m$ = inputView_0;
  package$components.inputView_kx6us8$ = inputView_1;
  package$components.inputView_1c163j$ = inputView_2;
  package$components.inputView_wm9n32$ = inputView_3;
  package$components.inputView_j4tuhz$ = inputView_4;
  package$components.inputView_hbksx5$ = inputView_5;
  package$components.inputView_s8feog$ = inputView_6;
  package$components.Label = Label;
  package$components.label_byaqjq$ = label;
  package$components.label_pm7ln1$ = label_0;
  package$components.Link = Link;
  package$components.link_d3ifn6$ = link;
  Object.defineProperty(MaterialIcon, 'ROTATION_3D', {
    get: MaterialIcon$ROTATION_3D_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AC_UNIT', {
    get: MaterialIcon$AC_UNIT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ACCESS_ALARM', {
    get: MaterialIcon$ACCESS_ALARM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ACCESS_ALARMS', {
    get: MaterialIcon$ACCESS_ALARMS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ACCESS_TIME', {
    get: MaterialIcon$ACCESS_TIME_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ACCESSIBILITY', {
    get: MaterialIcon$ACCESSIBILITY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ACCESSIBLE', {
    get: MaterialIcon$ACCESSIBLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ACCOUNT_BALANCE', {
    get: MaterialIcon$ACCOUNT_BALANCE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ACCOUNT_BALANCE_WALLET', {
    get: MaterialIcon$ACCOUNT_BALANCE_WALLET_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ACCOUNT_BOX', {
    get: MaterialIcon$ACCOUNT_BOX_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ACCOUNT_CIRCLE', {
    get: MaterialIcon$ACCOUNT_CIRCLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ADB', {
    get: MaterialIcon$ADB_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ADD', {
    get: MaterialIcon$ADD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ADD_A_PHOTO', {
    get: MaterialIcon$ADD_A_PHOTO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ADD_ALARM', {
    get: MaterialIcon$ADD_ALARM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ADD_ALERT', {
    get: MaterialIcon$ADD_ALERT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ADD_BOX', {
    get: MaterialIcon$ADD_BOX_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ADD_CIRCLE', {
    get: MaterialIcon$ADD_CIRCLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ADD_CIRCLE_OUTLINE', {
    get: MaterialIcon$ADD_CIRCLE_OUTLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ADD_LOCATION', {
    get: MaterialIcon$ADD_LOCATION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ADD_SHOPPING_CART', {
    get: MaterialIcon$ADD_SHOPPING_CART_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ADD_TO_PHOTOS', {
    get: MaterialIcon$ADD_TO_PHOTOS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ADD_TO_QUEUE', {
    get: MaterialIcon$ADD_TO_QUEUE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ADJUST', {
    get: MaterialIcon$ADJUST_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AIRLINE_SEAT_FLAT', {
    get: MaterialIcon$AIRLINE_SEAT_FLAT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AIRLINE_SEAT_FLAT_ANGLED', {
    get: MaterialIcon$AIRLINE_SEAT_FLAT_ANGLED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AIRLINE_SEAT_INDIVIDUAL_SUITE', {
    get: MaterialIcon$AIRLINE_SEAT_INDIVIDUAL_SUITE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AIRLINE_SEAT_LEGROOM_EXTRA', {
    get: MaterialIcon$AIRLINE_SEAT_LEGROOM_EXTRA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AIRLINE_SEAT_LEGROOM_NORMAL', {
    get: MaterialIcon$AIRLINE_SEAT_LEGROOM_NORMAL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AIRLINE_SEAT_LEGROOM_REDUCED', {
    get: MaterialIcon$AIRLINE_SEAT_LEGROOM_REDUCED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AIRLINE_SEAT_RECLINE_EXTRA', {
    get: MaterialIcon$AIRLINE_SEAT_RECLINE_EXTRA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AIRLINE_SEAT_RECLINE_NORMAL', {
    get: MaterialIcon$AIRLINE_SEAT_RECLINE_NORMAL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AIRPLANEMODE_ACTIVE', {
    get: MaterialIcon$AIRPLANEMODE_ACTIVE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AIRPLANEMODE_INACTIVE', {
    get: MaterialIcon$AIRPLANEMODE_INACTIVE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AIRPLAY', {
    get: MaterialIcon$AIRPLAY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AIRPORT_SHUTTLE', {
    get: MaterialIcon$AIRPORT_SHUTTLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ALARM', {
    get: MaterialIcon$ALARM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ALARM_ADD', {
    get: MaterialIcon$ALARM_ADD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ALARM_OFF', {
    get: MaterialIcon$ALARM_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ALARM_ON', {
    get: MaterialIcon$ALARM_ON_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ALBUM', {
    get: MaterialIcon$ALBUM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ALL_INCLUSIVE', {
    get: MaterialIcon$ALL_INCLUSIVE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ALL_OUT', {
    get: MaterialIcon$ALL_OUT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ANDROID', {
    get: MaterialIcon$ANDROID_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ANNOUNCEMENT', {
    get: MaterialIcon$ANNOUNCEMENT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'APPS', {
    get: MaterialIcon$APPS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ARCHIVE', {
    get: MaterialIcon$ARCHIVE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ARROW_BACK', {
    get: MaterialIcon$ARROW_BACK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ARROW_DOWNWARD', {
    get: MaterialIcon$ARROW_DOWNWARD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ARROW_DROP_DOWN', {
    get: MaterialIcon$ARROW_DROP_DOWN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ARROW_DROP_DOWN_CIRCLE', {
    get: MaterialIcon$ARROW_DROP_DOWN_CIRCLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ARROW_DROP_UP', {
    get: MaterialIcon$ARROW_DROP_UP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ARROW_FORWARD', {
    get: MaterialIcon$ARROW_FORWARD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ARROW_UPWARD', {
    get: MaterialIcon$ARROW_UPWARD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ART_TRACK', {
    get: MaterialIcon$ART_TRACK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ASPECT_RATIO', {
    get: MaterialIcon$ASPECT_RATIO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ASSESSMENT', {
    get: MaterialIcon$ASSESSMENT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ASSIGNMENT', {
    get: MaterialIcon$ASSIGNMENT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ASSIGNMENT_IND', {
    get: MaterialIcon$ASSIGNMENT_IND_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ASSIGNMENT_LATE', {
    get: MaterialIcon$ASSIGNMENT_LATE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ASSIGNMENT_RETURN', {
    get: MaterialIcon$ASSIGNMENT_RETURN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ASSIGNMENT_RETURNED', {
    get: MaterialIcon$ASSIGNMENT_RETURNED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ASSIGNMENT_TURNED_IN', {
    get: MaterialIcon$ASSIGNMENT_TURNED_IN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ASSISTANT', {
    get: MaterialIcon$ASSISTANT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ASSISTANT_PHOTO', {
    get: MaterialIcon$ASSISTANT_PHOTO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ATTACH_FILE', {
    get: MaterialIcon$ATTACH_FILE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ATTACH_MONEY', {
    get: MaterialIcon$ATTACH_MONEY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ATTACHMENT', {
    get: MaterialIcon$ATTACHMENT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AUDIOTRACK', {
    get: MaterialIcon$AUDIOTRACK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AUTORENEW', {
    get: MaterialIcon$AUTORENEW_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AV_TIMER', {
    get: MaterialIcon$AV_TIMER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BACKSPACE', {
    get: MaterialIcon$BACKSPACE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BACKUP', {
    get: MaterialIcon$BACKUP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BATTERY_ALERT', {
    get: MaterialIcon$BATTERY_ALERT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BATTERY_CHARGING_FULL', {
    get: MaterialIcon$BATTERY_CHARGING_FULL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BATTERY_FULL', {
    get: MaterialIcon$BATTERY_FULL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BATTERY_STD', {
    get: MaterialIcon$BATTERY_STD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BATTERY_UNKNOWN', {
    get: MaterialIcon$BATTERY_UNKNOWN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BEACH_ACCESS', {
    get: MaterialIcon$BEACH_ACCESS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BEENHERE', {
    get: MaterialIcon$BEENHERE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BLOCK', {
    get: MaterialIcon$BLOCK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BLUETOOTH', {
    get: MaterialIcon$BLUETOOTH_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BLUETOOTH_AUDIO', {
    get: MaterialIcon$BLUETOOTH_AUDIO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BLUETOOTH_CONNECTED', {
    get: MaterialIcon$BLUETOOTH_CONNECTED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BLUETOOTH_DISABLED', {
    get: MaterialIcon$BLUETOOTH_DISABLED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BLUETOOTH_SEARCHING', {
    get: MaterialIcon$BLUETOOTH_SEARCHING_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BLUR_CIRCULAR', {
    get: MaterialIcon$BLUR_CIRCULAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BLUR_LINEAR', {
    get: MaterialIcon$BLUR_LINEAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BLUR_OFF', {
    get: MaterialIcon$BLUR_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BLUR_ON', {
    get: MaterialIcon$BLUR_ON_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BOOK', {
    get: MaterialIcon$BOOK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BOOKMARK', {
    get: MaterialIcon$BOOKMARK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BOOKMARK_BORDER', {
    get: MaterialIcon$BOOKMARK_BORDER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BORDER_ALL', {
    get: MaterialIcon$BORDER_ALL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BORDER_BOTTOM', {
    get: MaterialIcon$BORDER_BOTTOM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BORDER_CLEAR', {
    get: MaterialIcon$BORDER_CLEAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BORDER_COLOR', {
    get: MaterialIcon$BORDER_COLOR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BORDER_HORIZONTAL', {
    get: MaterialIcon$BORDER_HORIZONTAL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BORDER_INNER', {
    get: MaterialIcon$BORDER_INNER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BORDER_LEFT', {
    get: MaterialIcon$BORDER_LEFT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BORDER_OUTER', {
    get: MaterialIcon$BORDER_OUTER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BORDER_RIGHT', {
    get: MaterialIcon$BORDER_RIGHT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BORDER_STYLE', {
    get: MaterialIcon$BORDER_STYLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BORDER_TOP', {
    get: MaterialIcon$BORDER_TOP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BORDER_VERTICAL', {
    get: MaterialIcon$BORDER_VERTICAL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BRANDING_WATERMARK', {
    get: MaterialIcon$BRANDING_WATERMARK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BRIGHTNESS_1', {
    get: MaterialIcon$BRIGHTNESS_1_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BRIGHTNESS_2', {
    get: MaterialIcon$BRIGHTNESS_2_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BRIGHTNESS_3', {
    get: MaterialIcon$BRIGHTNESS_3_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BRIGHTNESS_4', {
    get: MaterialIcon$BRIGHTNESS_4_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BRIGHTNESS_5', {
    get: MaterialIcon$BRIGHTNESS_5_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BRIGHTNESS_6', {
    get: MaterialIcon$BRIGHTNESS_6_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BRIGHTNESS_7', {
    get: MaterialIcon$BRIGHTNESS_7_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BRIGHTNESS_AUTO', {
    get: MaterialIcon$BRIGHTNESS_AUTO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BRIGHTNESS_HIGH', {
    get: MaterialIcon$BRIGHTNESS_HIGH_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BRIGHTNESS_LOW', {
    get: MaterialIcon$BRIGHTNESS_LOW_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BRIGHTNESS_MEDIUM', {
    get: MaterialIcon$BRIGHTNESS_MEDIUM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BROKEN_IMAGE', {
    get: MaterialIcon$BROKEN_IMAGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BRUSH', {
    get: MaterialIcon$BRUSH_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BUBBLE_CHART', {
    get: MaterialIcon$BUBBLE_CHART_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BUG_REPORT', {
    get: MaterialIcon$BUG_REPORT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BUILD', {
    get: MaterialIcon$BUILD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BURST_MODE', {
    get: MaterialIcon$BURST_MODE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BUSINESS', {
    get: MaterialIcon$BUSINESS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BUSINESS_CENTER', {
    get: MaterialIcon$BUSINESS_CENTER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CACHED', {
    get: MaterialIcon$CACHED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CAKE', {
    get: MaterialIcon$CAKE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CALL', {
    get: MaterialIcon$CALL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CALL_END', {
    get: MaterialIcon$CALL_END_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CALL_MADE', {
    get: MaterialIcon$CALL_MADE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CALL_MERGE', {
    get: MaterialIcon$CALL_MERGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CALL_MISSED', {
    get: MaterialIcon$CALL_MISSED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CALL_MISSED_OUTGOING', {
    get: MaterialIcon$CALL_MISSED_OUTGOING_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CALL_RECEIVED', {
    get: MaterialIcon$CALL_RECEIVED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CALL_SPLIT', {
    get: MaterialIcon$CALL_SPLIT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CALL_TO_ACTION', {
    get: MaterialIcon$CALL_TO_ACTION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CAMERA', {
    get: MaterialIcon$CAMERA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CAMERA_ALT', {
    get: MaterialIcon$CAMERA_ALT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CAMERA_ENHANCE', {
    get: MaterialIcon$CAMERA_ENHANCE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CAMERA_FRONT', {
    get: MaterialIcon$CAMERA_FRONT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CAMERA_REAR', {
    get: MaterialIcon$CAMERA_REAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CAMERA_ROLL', {
    get: MaterialIcon$CAMERA_ROLL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CANCEL', {
    get: MaterialIcon$CANCEL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CARD_GIFTCARD', {
    get: MaterialIcon$CARD_GIFTCARD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CARD_MEMBERSHIP', {
    get: MaterialIcon$CARD_MEMBERSHIP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CARD_TRAVEL', {
    get: MaterialIcon$CARD_TRAVEL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CASINO', {
    get: MaterialIcon$CASINO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CAST', {
    get: MaterialIcon$CAST_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CAST_CONNECTED', {
    get: MaterialIcon$CAST_CONNECTED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CENTER_FOCUS_STRONG', {
    get: MaterialIcon$CENTER_FOCUS_STRONG_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CENTER_FOCUS_WEAK', {
    get: MaterialIcon$CENTER_FOCUS_WEAK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CHANGE_HISTORY', {
    get: MaterialIcon$CHANGE_HISTORY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CHAT', {
    get: MaterialIcon$CHAT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CHAT_BUBBLE', {
    get: MaterialIcon$CHAT_BUBBLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CHAT_BUBBLE_OUTLINE', {
    get: MaterialIcon$CHAT_BUBBLE_OUTLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CHECK', {
    get: MaterialIcon$CHECK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CHECK_BOX', {
    get: MaterialIcon$CHECK_BOX_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CHECK_BOX_OUTLINE_BLANK', {
    get: MaterialIcon$CHECK_BOX_OUTLINE_BLANK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CHECK_CIRCLE', {
    get: MaterialIcon$CHECK_CIRCLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CHEVRON_LEFT', {
    get: MaterialIcon$CHEVRON_LEFT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CHEVRON_RIGHT', {
    get: MaterialIcon$CHEVRON_RIGHT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CHILD_CARE', {
    get: MaterialIcon$CHILD_CARE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CHILD_FRIENDLY', {
    get: MaterialIcon$CHILD_FRIENDLY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CHROME_RR_MODE', {
    get: MaterialIcon$CHROME_RR_MODE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CLASS', {
    get: MaterialIcon$CLASS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CLEAR', {
    get: MaterialIcon$CLEAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CLEAR_ALL', {
    get: MaterialIcon$CLEAR_ALL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CLOSE', {
    get: MaterialIcon$CLOSE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CLOSED_CAPTION', {
    get: MaterialIcon$CLOSED_CAPTION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CLOUD', {
    get: MaterialIcon$CLOUD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CLOUD_CIRCLE', {
    get: MaterialIcon$CLOUD_CIRCLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CLOUD_DONE', {
    get: MaterialIcon$CLOUD_DONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CLOUD_DOWNLOAD', {
    get: MaterialIcon$CLOUD_DOWNLOAD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CLOUD_OFF', {
    get: MaterialIcon$CLOUD_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CLOUD_QUEUE', {
    get: MaterialIcon$CLOUD_QUEUE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CLOUD_UPLOAD', {
    get: MaterialIcon$CLOUD_UPLOAD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CODE', {
    get: MaterialIcon$CODE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'COLLECTIONS', {
    get: MaterialIcon$COLLECTIONS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'COLLECTIONS_BOOKMARK', {
    get: MaterialIcon$COLLECTIONS_BOOKMARK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'COLOR_LENS', {
    get: MaterialIcon$COLOR_LENS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'COLORIZE', {
    get: MaterialIcon$COLORIZE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'COMMENT', {
    get: MaterialIcon$COMMENT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'COMPARE', {
    get: MaterialIcon$COMPARE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'COMPARE_ARROWS', {
    get: MaterialIcon$COMPARE_ARROWS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'COMPUTER', {
    get: MaterialIcon$COMPUTER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CONFIRMATION_NUMBER', {
    get: MaterialIcon$CONFIRMATION_NUMBER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CONTACT_MAIL', {
    get: MaterialIcon$CONTACT_MAIL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CONTACT_PHONE', {
    get: MaterialIcon$CONTACT_PHONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CONTACTS', {
    get: MaterialIcon$CONTACTS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CONTENT_COPY', {
    get: MaterialIcon$CONTENT_COPY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CONTENT_CUT', {
    get: MaterialIcon$CONTENT_CUT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CONTENT_PASTE', {
    get: MaterialIcon$CONTENT_PASTE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CONTROL_POINT', {
    get: MaterialIcon$CONTROL_POINT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CONTROL_POINT_DUPLICATE', {
    get: MaterialIcon$CONTROL_POINT_DUPLICATE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'COPYRIGHT', {
    get: MaterialIcon$COPYRIGHT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CREATE', {
    get: MaterialIcon$CREATE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CREATE_NEW_FOLDER', {
    get: MaterialIcon$CREATE_NEW_FOLDER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CREDIT_CARD', {
    get: MaterialIcon$CREDIT_CARD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CROP', {
    get: MaterialIcon$CROP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CROP_16_9', {
    get: MaterialIcon$CROP_16_9_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CROP_3_2', {
    get: MaterialIcon$CROP_3_2_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CROP_5_4', {
    get: MaterialIcon$CROP_5_4_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CROP_7_5', {
    get: MaterialIcon$CROP_7_5_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CROP_DIN', {
    get: MaterialIcon$CROP_DIN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CROP_FREE', {
    get: MaterialIcon$CROP_FREE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CROP_LANDSCAPE', {
    get: MaterialIcon$CROP_LANDSCAPE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CROP_ORIGINAL', {
    get: MaterialIcon$CROP_ORIGINAL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CROP_PORTRAIT', {
    get: MaterialIcon$CROP_PORTRAIT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CROP_ROTATE', {
    get: MaterialIcon$CROP_ROTATE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CROP_SQUARE', {
    get: MaterialIcon$CROP_SQUARE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DASHBOARD', {
    get: MaterialIcon$DASHBOARD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DATA_USAGE', {
    get: MaterialIcon$DATA_USAGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DATE_RANGE', {
    get: MaterialIcon$DATE_RANGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DEHAZE', {
    get: MaterialIcon$DEHAZE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DELETE', {
    get: MaterialIcon$DELETE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DELETE_FOREVER', {
    get: MaterialIcon$DELETE_FOREVER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DELETE_SWEEP', {
    get: MaterialIcon$DELETE_SWEEP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DESCRIPTION', {
    get: MaterialIcon$DESCRIPTION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DESKTOP_MAC', {
    get: MaterialIcon$DESKTOP_MAC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DESKTOP_WINDOWS', {
    get: MaterialIcon$DESKTOP_WINDOWS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DETAILS', {
    get: MaterialIcon$DETAILS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DEVELOPER_BOARD', {
    get: MaterialIcon$DEVELOPER_BOARD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DEVELOPER_MODE', {
    get: MaterialIcon$DEVELOPER_MODE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DEVICE_HUB', {
    get: MaterialIcon$DEVICE_HUB_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DEVICES', {
    get: MaterialIcon$DEVICES_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DEVICES_OTHER', {
    get: MaterialIcon$DEVICES_OTHER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DIALER_SIP', {
    get: MaterialIcon$DIALER_SIP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DIALPAD', {
    get: MaterialIcon$DIALPAD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DIRECTIONS', {
    get: MaterialIcon$DIRECTIONS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DIRECTIONS_BIKE', {
    get: MaterialIcon$DIRECTIONS_BIKE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DIRECTIONS_BOAT', {
    get: MaterialIcon$DIRECTIONS_BOAT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DIRECTIONS_BUS', {
    get: MaterialIcon$DIRECTIONS_BUS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DIRECTIONS_CAR', {
    get: MaterialIcon$DIRECTIONS_CAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DIRECTIONS_RAILWAY', {
    get: MaterialIcon$DIRECTIONS_RAILWAY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DIRECTIONS_RUN', {
    get: MaterialIcon$DIRECTIONS_RUN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DIRECTIONS_SUBWAY', {
    get: MaterialIcon$DIRECTIONS_SUBWAY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DIRECTIONS_TRANSIT', {
    get: MaterialIcon$DIRECTIONS_TRANSIT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DIRECTIONS_WALK', {
    get: MaterialIcon$DIRECTIONS_WALK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DISC_FULL', {
    get: MaterialIcon$DISC_FULL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DNS', {
    get: MaterialIcon$DNS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DO_NOT_DISTURB', {
    get: MaterialIcon$DO_NOT_DISTURB_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DO_NOT_DISTURB_ALT', {
    get: MaterialIcon$DO_NOT_DISTURB_ALT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DO_NOT_DISTURB_OFF', {
    get: MaterialIcon$DO_NOT_DISTURB_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DO_NOT_DISTURB_ON', {
    get: MaterialIcon$DO_NOT_DISTURB_ON_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DOCK', {
    get: MaterialIcon$DOCK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DOMAIN', {
    get: MaterialIcon$DOMAIN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DONE', {
    get: MaterialIcon$DONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DONE_ALL', {
    get: MaterialIcon$DONE_ALL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DONUT_LARGE', {
    get: MaterialIcon$DONUT_LARGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DONUT_SMALL', {
    get: MaterialIcon$DONUT_SMALL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DRAFTS', {
    get: MaterialIcon$DRAFTS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DRAG_HANDLE', {
    get: MaterialIcon$DRAG_HANDLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DRIVE_ETA', {
    get: MaterialIcon$DRIVE_ETA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DVR', {
    get: MaterialIcon$DVR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EDIT', {
    get: MaterialIcon$EDIT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EDIT_LOCATION', {
    get: MaterialIcon$EDIT_LOCATION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EJECT', {
    get: MaterialIcon$EJECT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EMAIL', {
    get: MaterialIcon$EMAIL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ENHANCED_ENCRYPTION', {
    get: MaterialIcon$ENHANCED_ENCRYPTION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EQUALIZER', {
    get: MaterialIcon$EQUALIZER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ERROR', {
    get: MaterialIcon$ERROR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ERROR_OUTLINE', {
    get: MaterialIcon$ERROR_OUTLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EURO_SYMBOL', {
    get: MaterialIcon$EURO_SYMBOL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EV_STATION', {
    get: MaterialIcon$EV_STATION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EVENT', {
    get: MaterialIcon$EVENT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EVENT_AVAILABLE', {
    get: MaterialIcon$EVENT_AVAILABLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EVENT_BUSY', {
    get: MaterialIcon$EVENT_BUSY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EVENT_NOTE', {
    get: MaterialIcon$EVENT_NOTE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EVENT_SEAT', {
    get: MaterialIcon$EVENT_SEAT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EXIT_TO_APP', {
    get: MaterialIcon$EXIT_TO_APP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EXPAND_LESS', {
    get: MaterialIcon$EXPAND_LESS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EXPAND_MORE', {
    get: MaterialIcon$EXPAND_MORE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EXPLICIT', {
    get: MaterialIcon$EXPLICIT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EXPLORE', {
    get: MaterialIcon$EXPLORE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EXPOSURE', {
    get: MaterialIcon$EXPOSURE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EXPOSURE_NEG_1', {
    get: MaterialIcon$EXPOSURE_NEG_1_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EXPOSURE_NEG_2', {
    get: MaterialIcon$EXPOSURE_NEG_2_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EXPOSURE_PLUS_1', {
    get: MaterialIcon$EXPOSURE_PLUS_1_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EXPOSURE_PLUS_2', {
    get: MaterialIcon$EXPOSURE_PLUS_2_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EXPOSURE_ZERO', {
    get: MaterialIcon$EXPOSURE_ZERO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EXTENSION', {
    get: MaterialIcon$EXTENSION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FACE', {
    get: MaterialIcon$FACE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FAST_FORWARD', {
    get: MaterialIcon$FAST_FORWARD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FAST_REWIND', {
    get: MaterialIcon$FAST_REWIND_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FAVORITE', {
    get: MaterialIcon$FAVORITE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FAVORITE_BORDER', {
    get: MaterialIcon$FAVORITE_BORDER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FEATURED_PLAY_LIST', {
    get: MaterialIcon$FEATURED_PLAY_LIST_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FEATURED_VIDEO', {
    get: MaterialIcon$FEATURED_VIDEO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FACK', {
    get: MaterialIcon$FACK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FIBER_DVR', {
    get: MaterialIcon$FIBER_DVR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FIBER_MANUAL_RECORD', {
    get: MaterialIcon$FIBER_MANUAL_RECORD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FIBER_NEW', {
    get: MaterialIcon$FIBER_NEW_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FIBER_PIN', {
    get: MaterialIcon$FIBER_PIN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FIBER_SMART_RECORD', {
    get: MaterialIcon$FIBER_SMART_RECORD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILE_DOWNLOAD', {
    get: MaterialIcon$FILE_DOWNLOAD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILE_UPLOAD', {
    get: MaterialIcon$FILE_UPLOAD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER', {
    get: MaterialIcon$FILTER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_1', {
    get: MaterialIcon$FILTER_1_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_2', {
    get: MaterialIcon$FILTER_2_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_3', {
    get: MaterialIcon$FILTER_3_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_4', {
    get: MaterialIcon$FILTER_4_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_5', {
    get: MaterialIcon$FILTER_5_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_6', {
    get: MaterialIcon$FILTER_6_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_7', {
    get: MaterialIcon$FILTER_7_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_8', {
    get: MaterialIcon$FILTER_8_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_9', {
    get: MaterialIcon$FILTER_9_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_9_PLUS', {
    get: MaterialIcon$FILTER_9_PLUS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_B_AND_W', {
    get: MaterialIcon$FILTER_B_AND_W_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_CENTER_FOCUS', {
    get: MaterialIcon$FILTER_CENTER_FOCUS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_DRAMA', {
    get: MaterialIcon$FILTER_DRAMA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_FRAMES', {
    get: MaterialIcon$FILTER_FRAMES_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_HDR', {
    get: MaterialIcon$FILTER_HDR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_LIST', {
    get: MaterialIcon$FILTER_LIST_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_NONE', {
    get: MaterialIcon$FILTER_NONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_TILT_SHIFT', {
    get: MaterialIcon$FILTER_TILT_SHIFT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_VINTAGE', {
    get: MaterialIcon$FILTER_VINTAGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FIND_IN_PAGE', {
    get: MaterialIcon$FIND_IN_PAGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FIND_REPLACE', {
    get: MaterialIcon$FIND_REPLACE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FINGERPRINT', {
    get: MaterialIcon$FINGERPRINT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FIRST_PAGE', {
    get: MaterialIcon$FIRST_PAGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FITNESS_CENTER', {
    get: MaterialIcon$FITNESS_CENTER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FLAG', {
    get: MaterialIcon$FLAG_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FLARE', {
    get: MaterialIcon$FLARE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FLASH_AUTO', {
    get: MaterialIcon$FLASH_AUTO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FLASH_OFF', {
    get: MaterialIcon$FLASH_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FLASH_ON', {
    get: MaterialIcon$FLASH_ON_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FLIGHT', {
    get: MaterialIcon$FLIGHT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FLIGHT_LAND', {
    get: MaterialIcon$FLIGHT_LAND_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FLIGHT_TAKEOFF', {
    get: MaterialIcon$FLIGHT_TAKEOFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FLIP', {
    get: MaterialIcon$FLIP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FLIP_TO_BACK', {
    get: MaterialIcon$FLIP_TO_BACK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FLIP_TO_FRONT', {
    get: MaterialIcon$FLIP_TO_FRONT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FOLDER', {
    get: MaterialIcon$FOLDER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FOLDER_OPEN', {
    get: MaterialIcon$FOLDER_OPEN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FOLDER_SHARED', {
    get: MaterialIcon$FOLDER_SHARED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FOLDER_SPECIAL', {
    get: MaterialIcon$FOLDER_SPECIAL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FONT_DOWNLOAD', {
    get: MaterialIcon$FONT_DOWNLOAD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_ALIGN_CENTER', {
    get: MaterialIcon$FORMAT_ALIGN_CENTER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_ALIGN_JUSTIFY', {
    get: MaterialIcon$FORMAT_ALIGN_JUSTIFY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_ALIGN_LEFT', {
    get: MaterialIcon$FORMAT_ALIGN_LEFT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_ALIGN_RIGHT', {
    get: MaterialIcon$FORMAT_ALIGN_RIGHT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_BOLD', {
    get: MaterialIcon$FORMAT_BOLD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_CLEAR', {
    get: MaterialIcon$FORMAT_CLEAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_COLOR_FILL', {
    get: MaterialIcon$FORMAT_COLOR_FILL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_COLOR_RESET', {
    get: MaterialIcon$FORMAT_COLOR_RESET_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_COLOR_TEXT', {
    get: MaterialIcon$FORMAT_COLOR_TEXT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_INDENT_DECREASE', {
    get: MaterialIcon$FORMAT_INDENT_DECREASE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_INDENT_INCREASE', {
    get: MaterialIcon$FORMAT_INDENT_INCREASE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_ITALIC', {
    get: MaterialIcon$FORMAT_ITALIC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_LINE_SPACING', {
    get: MaterialIcon$FORMAT_LINE_SPACING_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_LIST_BULLETED', {
    get: MaterialIcon$FORMAT_LIST_BULLETED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_LIST_NUMBERED', {
    get: MaterialIcon$FORMAT_LIST_NUMBERED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_PAINT', {
    get: MaterialIcon$FORMAT_PAINT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_QUOTE', {
    get: MaterialIcon$FORMAT_QUOTE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_SHAPES', {
    get: MaterialIcon$FORMAT_SHAPES_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_SIZE', {
    get: MaterialIcon$FORMAT_SIZE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_STRIKETHROUGH', {
    get: MaterialIcon$FORMAT_STRIKETHROUGH_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_TEXTDIRECTION_L_TO_R', {
    get: MaterialIcon$FORMAT_TEXTDIRECTION_L_TO_R_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_TEXTDIRECTION_R_TO_L', {
    get: MaterialIcon$FORMAT_TEXTDIRECTION_R_TO_L_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_UNDERLINED', {
    get: MaterialIcon$FORMAT_UNDERLINED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORUM', {
    get: MaterialIcon$FORUM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORWARD', {
    get: MaterialIcon$FORWARD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORWARD_10', {
    get: MaterialIcon$FORWARD_10_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORWARD_30', {
    get: MaterialIcon$FORWARD_30_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORWARD_5', {
    get: MaterialIcon$FORWARD_5_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FREE_BREAKFAST', {
    get: MaterialIcon$FREE_BREAKFAST_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FULLSCREEN', {
    get: MaterialIcon$FULLSCREEN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FULLSCREEN_EXIT', {
    get: MaterialIcon$FULLSCREEN_EXIT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FUNCTIONS', {
    get: MaterialIcon$FUNCTIONS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'G_TRANSLATE', {
    get: MaterialIcon$G_TRANSLATE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GAMEPAD', {
    get: MaterialIcon$GAMEPAD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GAMES', {
    get: MaterialIcon$GAMES_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GAVEL', {
    get: MaterialIcon$GAVEL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GESTURE', {
    get: MaterialIcon$GESTURE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GET_APP', {
    get: MaterialIcon$GET_APP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GIF', {
    get: MaterialIcon$GIF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GOLF_COURSE', {
    get: MaterialIcon$GOLF_COURSE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GPS_FIXED', {
    get: MaterialIcon$GPS_FIXED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GPS_NOT_FIXED', {
    get: MaterialIcon$GPS_NOT_FIXED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GPS_OFF', {
    get: MaterialIcon$GPS_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GRADE', {
    get: MaterialIcon$GRADE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GRADIENT', {
    get: MaterialIcon$GRADIENT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GRAIN', {
    get: MaterialIcon$GRAIN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GRAPHIC_EQ', {
    get: MaterialIcon$GRAPHIC_EQ_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GRID_OFF', {
    get: MaterialIcon$GRID_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GRID_ON', {
    get: MaterialIcon$GRID_ON_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GROUP', {
    get: MaterialIcon$GROUP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GROUP_ADD', {
    get: MaterialIcon$GROUP_ADD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GROUP_WORK', {
    get: MaterialIcon$GROUP_WORK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HD', {
    get: MaterialIcon$HD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HDR_OFF', {
    get: MaterialIcon$HDR_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HDR_ON', {
    get: MaterialIcon$HDR_ON_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HDR_STRONG', {
    get: MaterialIcon$HDR_STRONG_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HDR_WEAK', {
    get: MaterialIcon$HDR_WEAK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HEADSET', {
    get: MaterialIcon$HEADSET_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HEADSET_MIC', {
    get: MaterialIcon$HEADSET_MIC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HEALING', {
    get: MaterialIcon$HEALING_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HEARING', {
    get: MaterialIcon$HEARING_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HELP', {
    get: MaterialIcon$HELP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HELP_OUTLINE', {
    get: MaterialIcon$HELP_OUTLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HIGH_QUALITY', {
    get: MaterialIcon$HIGH_QUALITY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HIGHLIGHT', {
    get: MaterialIcon$HIGHLIGHT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HIGHLIGHT_OFF', {
    get: MaterialIcon$HIGHLIGHT_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HISTORY', {
    get: MaterialIcon$HISTORY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HOME', {
    get: MaterialIcon$HOME_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HOT_TUB', {
    get: MaterialIcon$HOT_TUB_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HOTEL', {
    get: MaterialIcon$HOTEL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HOURGLASS_EMPTY', {
    get: MaterialIcon$HOURGLASS_EMPTY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HOURGLASS_FULL', {
    get: MaterialIcon$HOURGLASS_FULL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HTTP', {
    get: MaterialIcon$HTTP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HTTPS', {
    get: MaterialIcon$HTTPS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'IMAGE', {
    get: MaterialIcon$IMAGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'IMAGE_ASPECT_RATIO', {
    get: MaterialIcon$IMAGE_ASPECT_RATIO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'IMPORT_CONTACTS', {
    get: MaterialIcon$IMPORT_CONTACTS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'IMPORT_EXPORT', {
    get: MaterialIcon$IMPORT_EXPORT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'IMPORTANT_DEVICES', {
    get: MaterialIcon$IMPORTANT_DEVICES_getInstance
  });
  Object.defineProperty(MaterialIcon, 'INBOX', {
    get: MaterialIcon$INBOX_getInstance
  });
  Object.defineProperty(MaterialIcon, 'INDETERMINATE_CHECK_BOX', {
    get: MaterialIcon$INDETERMINATE_CHECK_BOX_getInstance
  });
  Object.defineProperty(MaterialIcon, 'INFO', {
    get: MaterialIcon$INFO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'INFO_OUTLINE', {
    get: MaterialIcon$INFO_OUTLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'INPUT', {
    get: MaterialIcon$INPUT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'INSERT_CHART', {
    get: MaterialIcon$INSERT_CHART_getInstance
  });
  Object.defineProperty(MaterialIcon, 'INSERT_COMMENT', {
    get: MaterialIcon$INSERT_COMMENT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'INSERT_DRIVE_FILE', {
    get: MaterialIcon$INSERT_DRIVE_FILE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'INSERT_EMOTICON', {
    get: MaterialIcon$INSERT_EMOTICON_getInstance
  });
  Object.defineProperty(MaterialIcon, 'INSERT_INVITATION', {
    get: MaterialIcon$INSERT_INVITATION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'INSERT_LINK', {
    get: MaterialIcon$INSERT_LINK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'INSERT_PHOTO', {
    get: MaterialIcon$INSERT_PHOTO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'INVERT_COLORS', {
    get: MaterialIcon$INVERT_COLORS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'INVERT_COLORS_OFF', {
    get: MaterialIcon$INVERT_COLORS_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ISO', {
    get: MaterialIcon$ISO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'KEYBOARD', {
    get: MaterialIcon$KEYBOARD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'KEYBOARD_ARROW_DOWN', {
    get: MaterialIcon$KEYBOARD_ARROW_DOWN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'KEYBOARD_ARROW_LEFT', {
    get: MaterialIcon$KEYBOARD_ARROW_LEFT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'KEYBOARD_ARROW_RIGHT', {
    get: MaterialIcon$KEYBOARD_ARROW_RIGHT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'KEYBOARD_ARROW_UP', {
    get: MaterialIcon$KEYBOARD_ARROW_UP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'KEYBOARD_BACKSPACE', {
    get: MaterialIcon$KEYBOARD_BACKSPACE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'KEYBOARD_CAPSLOCK', {
    get: MaterialIcon$KEYBOARD_CAPSLOCK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'KEYBOARD_HIDE', {
    get: MaterialIcon$KEYBOARD_HIDE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'KEYBOARD_RETURN', {
    get: MaterialIcon$KEYBOARD_RETURN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'KEYBOARD_TAB', {
    get: MaterialIcon$KEYBOARD_TAB_getInstance
  });
  Object.defineProperty(MaterialIcon, 'KEYBOARD_VOICE', {
    get: MaterialIcon$KEYBOARD_VOICE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'KITCHEN', {
    get: MaterialIcon$KITCHEN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LABEL', {
    get: MaterialIcon$LABEL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LABEL_OUTLINE', {
    get: MaterialIcon$LABEL_OUTLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LANDSCAPE', {
    get: MaterialIcon$LANDSCAPE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LANGUAGE', {
    get: MaterialIcon$LANGUAGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LAPTOP', {
    get: MaterialIcon$LAPTOP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LAPTOP_CHROMEBOOK', {
    get: MaterialIcon$LAPTOP_CHROMEBOOK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LAPTOP_MAC', {
    get: MaterialIcon$LAPTOP_MAC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LAPTOP_WINDOWS', {
    get: MaterialIcon$LAPTOP_WINDOWS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LAST_PAGE', {
    get: MaterialIcon$LAST_PAGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LAUNCH', {
    get: MaterialIcon$LAUNCH_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LAYERS', {
    get: MaterialIcon$LAYERS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LAYERS_CLEAR', {
    get: MaterialIcon$LAYERS_CLEAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LEAK_ADD', {
    get: MaterialIcon$LEAK_ADD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LEAK_REMOVE', {
    get: MaterialIcon$LEAK_REMOVE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LENS', {
    get: MaterialIcon$LENS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LIBRARY_ADD', {
    get: MaterialIcon$LIBRARY_ADD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LIBRARY_BOOKS', {
    get: MaterialIcon$LIBRARY_BOOKS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LIBRARY_MUSIC', {
    get: MaterialIcon$LIBRARY_MUSIC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LIGHTBULB_OUTLINE', {
    get: MaterialIcon$LIGHTBULB_OUTLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LINE_STYLE', {
    get: MaterialIcon$LINE_STYLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LINE_WEIGHT', {
    get: MaterialIcon$LINE_WEIGHT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LINEAR_SCALE', {
    get: MaterialIcon$LINEAR_SCALE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LINK', {
    get: MaterialIcon$LINK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LINKED_CAMERA', {
    get: MaterialIcon$LINKED_CAMERA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LIST', {
    get: MaterialIcon$LIST_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LIVE_HELP', {
    get: MaterialIcon$LIVE_HELP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LIVE_TV', {
    get: MaterialIcon$LIVE_TV_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_ACTIVITY', {
    get: MaterialIcon$LOCAL_ACTIVITY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_AIRPORT', {
    get: MaterialIcon$LOCAL_AIRPORT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_ATM', {
    get: MaterialIcon$LOCAL_ATM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_BAR', {
    get: MaterialIcon$LOCAL_BAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_CAFE', {
    get: MaterialIcon$LOCAL_CAFE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_CAR_WASH', {
    get: MaterialIcon$LOCAL_CAR_WASH_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_CONVENIENCE_STORE', {
    get: MaterialIcon$LOCAL_CONVENIENCE_STORE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_DINING', {
    get: MaterialIcon$LOCAL_DINING_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_DRINK', {
    get: MaterialIcon$LOCAL_DRINK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_FLORIST', {
    get: MaterialIcon$LOCAL_FLORIST_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_GAS_STATION', {
    get: MaterialIcon$LOCAL_GAS_STATION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_GROCERY_STORE', {
    get: MaterialIcon$LOCAL_GROCERY_STORE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_HOSPITAL', {
    get: MaterialIcon$LOCAL_HOSPITAL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_HOTEL', {
    get: MaterialIcon$LOCAL_HOTEL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_LAUNDRY_SERVICE', {
    get: MaterialIcon$LOCAL_LAUNDRY_SERVICE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_LIBRARY', {
    get: MaterialIcon$LOCAL_LIBRARY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_MALL', {
    get: MaterialIcon$LOCAL_MALL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_MOVIES', {
    get: MaterialIcon$LOCAL_MOVIES_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_OFFER', {
    get: MaterialIcon$LOCAL_OFFER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_PARKING', {
    get: MaterialIcon$LOCAL_PARKING_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_PHARMACY', {
    get: MaterialIcon$LOCAL_PHARMACY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_PHONE', {
    get: MaterialIcon$LOCAL_PHONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_PIZZA', {
    get: MaterialIcon$LOCAL_PIZZA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_PLAY', {
    get: MaterialIcon$LOCAL_PLAY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_POST_OFFICE', {
    get: MaterialIcon$LOCAL_POST_OFFICE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_PRINTSHOP', {
    get: MaterialIcon$LOCAL_PRINTSHOP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_SEE', {
    get: MaterialIcon$LOCAL_SEE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_SHIPPING', {
    get: MaterialIcon$LOCAL_SHIPPING_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_TAXI', {
    get: MaterialIcon$LOCAL_TAXI_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCATION_CITY', {
    get: MaterialIcon$LOCATION_CITY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCATION_DISABLED', {
    get: MaterialIcon$LOCATION_DISABLED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCATION_OFF', {
    get: MaterialIcon$LOCATION_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCATION_ON', {
    get: MaterialIcon$LOCATION_ON_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCATION_SEARCHING', {
    get: MaterialIcon$LOCATION_SEARCHING_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCK', {
    get: MaterialIcon$LOCK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCK_OPEN', {
    get: MaterialIcon$LOCK_OPEN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCK_OUTLINE', {
    get: MaterialIcon$LOCK_OUTLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOOKS', {
    get: MaterialIcon$LOOKS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOOKS_3', {
    get: MaterialIcon$LOOKS_3_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOOKS_4', {
    get: MaterialIcon$LOOKS_4_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOOKS_5', {
    get: MaterialIcon$LOOKS_5_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOOKS_6', {
    get: MaterialIcon$LOOKS_6_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOOKS_ONE', {
    get: MaterialIcon$LOOKS_ONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOOKS_TWO', {
    get: MaterialIcon$LOOKS_TWO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOOP', {
    get: MaterialIcon$LOOP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOUPE', {
    get: MaterialIcon$LOUPE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOW_PRIORITY', {
    get: MaterialIcon$LOW_PRIORITY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOYALTY', {
    get: MaterialIcon$LOYALTY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MAIL', {
    get: MaterialIcon$MAIL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MAIL_OUTLINE', {
    get: MaterialIcon$MAIL_OUTLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MAP', {
    get: MaterialIcon$MAP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MARKUNREAD', {
    get: MaterialIcon$MARKUNREAD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MARKUNREAD_MAILBOX', {
    get: MaterialIcon$MARKUNREAD_MAILBOX_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MEMORY', {
    get: MaterialIcon$MEMORY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MENU', {
    get: MaterialIcon$MENU_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MERGE_TYPE', {
    get: MaterialIcon$MERGE_TYPE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MESSAGE', {
    get: MaterialIcon$MESSAGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MIC', {
    get: MaterialIcon$MIC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MIC_NONE', {
    get: MaterialIcon$MIC_NONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MIC_OFF', {
    get: MaterialIcon$MIC_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MMS', {
    get: MaterialIcon$MMS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MODE_COMMENT', {
    get: MaterialIcon$MODE_COMMENT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MODE_EDIT', {
    get: MaterialIcon$MODE_EDIT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MONETIZATION_ON', {
    get: MaterialIcon$MONETIZATION_ON_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MONEY_OFF', {
    get: MaterialIcon$MONEY_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MONOCHROME_PHOTOS', {
    get: MaterialIcon$MONOCHROME_PHOTOS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MOOD', {
    get: MaterialIcon$MOOD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MOOD_BAD', {
    get: MaterialIcon$MOOD_BAD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MORE', {
    get: MaterialIcon$MORE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MORE_HORIZ', {
    get: MaterialIcon$MORE_HORIZ_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MORE_VERT', {
    get: MaterialIcon$MORE_VERT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MOTORCYCLE', {
    get: MaterialIcon$MOTORCYCLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MOUSE', {
    get: MaterialIcon$MOUSE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MOVE_TO_INBOX', {
    get: MaterialIcon$MOVE_TO_INBOX_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MOVIE', {
    get: MaterialIcon$MOVIE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MOVIE_CREATION', {
    get: MaterialIcon$MOVIE_CREATION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MOVIE_FILTER', {
    get: MaterialIcon$MOVIE_FILTER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MULTILINE_CHART', {
    get: MaterialIcon$MULTILINE_CHART_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MUSIC_NOTE', {
    get: MaterialIcon$MUSIC_NOTE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MUSIC_VIDEO', {
    get: MaterialIcon$MUSIC_VIDEO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MY_LOCATION', {
    get: MaterialIcon$MY_LOCATION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NATURE', {
    get: MaterialIcon$NATURE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NATURE_PEOPLE', {
    get: MaterialIcon$NATURE_PEOPLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NAVIGATE_BEFORE', {
    get: MaterialIcon$NAVIGATE_BEFORE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NAVIGATE_NEXT', {
    get: MaterialIcon$NAVIGATE_NEXT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NAVIGATION', {
    get: MaterialIcon$NAVIGATION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NEAR_ME', {
    get: MaterialIcon$NEAR_ME_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NETWORK_CELL', {
    get: MaterialIcon$NETWORK_CELL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NETWORK_CHECK', {
    get: MaterialIcon$NETWORK_CHECK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NETWORK_LOCKED', {
    get: MaterialIcon$NETWORK_LOCKED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NETWORK_WIFI', {
    get: MaterialIcon$NETWORK_WIFI_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NEW_RELEASES', {
    get: MaterialIcon$NEW_RELEASES_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NEXT_WEEK', {
    get: MaterialIcon$NEXT_WEEK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NFC', {
    get: MaterialIcon$NFC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NO_ENCRYPTION', {
    get: MaterialIcon$NO_ENCRYPTION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NO_SIM', {
    get: MaterialIcon$NO_SIM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NOT_INTERESTED', {
    get: MaterialIcon$NOT_INTERESTED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NOTE', {
    get: MaterialIcon$NOTE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NOTE_ADD', {
    get: MaterialIcon$NOTE_ADD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NOTIFICATIONS', {
    get: MaterialIcon$NOTIFICATIONS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NOTIFICATIONS_ACTIVE', {
    get: MaterialIcon$NOTIFICATIONS_ACTIVE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NOTIFICATIONS_NONE', {
    get: MaterialIcon$NOTIFICATIONS_NONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NOTIFICATIONS_OFF', {
    get: MaterialIcon$NOTIFICATIONS_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NOTIFICATIONS_PAUSED', {
    get: MaterialIcon$NOTIFICATIONS_PAUSED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'OFFLINE_PIN', {
    get: MaterialIcon$OFFLINE_PIN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ONDEMAND_VIDEO', {
    get: MaterialIcon$ONDEMAND_VIDEO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'OPACITY', {
    get: MaterialIcon$OPACITY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'OPEN_IN_BROWSER', {
    get: MaterialIcon$OPEN_IN_BROWSER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'OPEN_IN_NEW', {
    get: MaterialIcon$OPEN_IN_NEW_getInstance
  });
  Object.defineProperty(MaterialIcon, 'OPEN_WITH', {
    get: MaterialIcon$OPEN_WITH_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PAGES', {
    get: MaterialIcon$PAGES_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PAGEVIEW', {
    get: MaterialIcon$PAGEVIEW_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PALETTE', {
    get: MaterialIcon$PALETTE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PAN_TOOL', {
    get: MaterialIcon$PAN_TOOL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PANORAMA', {
    get: MaterialIcon$PANORAMA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PANORAMA_FISH_EYE', {
    get: MaterialIcon$PANORAMA_FISH_EYE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PANORAMA_HORIZONTAL', {
    get: MaterialIcon$PANORAMA_HORIZONTAL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PANORAMA_VERTICAL', {
    get: MaterialIcon$PANORAMA_VERTICAL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PANORAMA_WIDE_ANGLE', {
    get: MaterialIcon$PANORAMA_WIDE_ANGLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PARTY_MODE', {
    get: MaterialIcon$PARTY_MODE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PAUSE', {
    get: MaterialIcon$PAUSE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PAUSE_CIRCLE_FILLED', {
    get: MaterialIcon$PAUSE_CIRCLE_FILLED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PAUSE_CIRCLE_OUTLINE', {
    get: MaterialIcon$PAUSE_CIRCLE_OUTLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PAYMENT', {
    get: MaterialIcon$PAYMENT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PEOPLE', {
    get: MaterialIcon$PEOPLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PEOPLE_OUTLINE', {
    get: MaterialIcon$PEOPLE_OUTLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PERM_CAMERA_MIC', {
    get: MaterialIcon$PERM_CAMERA_MIC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PERM_CONTACT_CALENDAR', {
    get: MaterialIcon$PERM_CONTACT_CALENDAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PERM_DATA_SETTING', {
    get: MaterialIcon$PERM_DATA_SETTING_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PERM_DEVICE_INFORMATION', {
    get: MaterialIcon$PERM_DEVICE_INFORMATION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PERM_IDENTITY', {
    get: MaterialIcon$PERM_IDENTITY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PERM_MEDIA', {
    get: MaterialIcon$PERM_MEDIA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PERM_PHONE_MSG', {
    get: MaterialIcon$PERM_PHONE_MSG_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PERM_SCAN_WIFI', {
    get: MaterialIcon$PERM_SCAN_WIFI_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PERSON', {
    get: MaterialIcon$PERSON_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PERSON_ADD', {
    get: MaterialIcon$PERSON_ADD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PERSON_OUTLINE', {
    get: MaterialIcon$PERSON_OUTLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PERSON_PIN', {
    get: MaterialIcon$PERSON_PIN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PERSON_PIN_CIRCLE', {
    get: MaterialIcon$PERSON_PIN_CIRCLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PERSONAL_VIDEO', {
    get: MaterialIcon$PERSONAL_VIDEO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PETS', {
    get: MaterialIcon$PETS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONE', {
    get: MaterialIcon$PHONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONE_ANDROID', {
    get: MaterialIcon$PHONE_ANDROID_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONE_BLUETOOTH_SPEAKER', {
    get: MaterialIcon$PHONE_BLUETOOTH_SPEAKER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONE_FORWARDED', {
    get: MaterialIcon$PHONE_FORWARDED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONE_IN_TALK', {
    get: MaterialIcon$PHONE_IN_TALK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONE_IPHONE', {
    get: MaterialIcon$PHONE_IPHONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONE_LOCKED', {
    get: MaterialIcon$PHONE_LOCKED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONE_MISSED', {
    get: MaterialIcon$PHONE_MISSED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONE_PAUSED', {
    get: MaterialIcon$PHONE_PAUSED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONELINK', {
    get: MaterialIcon$PHONELINK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONELINK_ERASE', {
    get: MaterialIcon$PHONELINK_ERASE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONELINK_LOCK', {
    get: MaterialIcon$PHONELINK_LOCK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONELINK_OFF', {
    get: MaterialIcon$PHONELINK_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONELINK_RING', {
    get: MaterialIcon$PHONELINK_RING_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONELINK_SETUP', {
    get: MaterialIcon$PHONELINK_SETUP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHOTO', {
    get: MaterialIcon$PHOTO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHOTO_ALBUM', {
    get: MaterialIcon$PHOTO_ALBUM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHOTO_CAMERA', {
    get: MaterialIcon$PHOTO_CAMERA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHOTO_FILTER', {
    get: MaterialIcon$PHOTO_FILTER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHOTO_LIBRARY', {
    get: MaterialIcon$PHOTO_LIBRARY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHOTO_SIZE_SELECT_ACTUAL', {
    get: MaterialIcon$PHOTO_SIZE_SELECT_ACTUAL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHOTO_SIZE_SELECT_LARGE', {
    get: MaterialIcon$PHOTO_SIZE_SELECT_LARGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHOTO_SIZE_SELECT_SMALL', {
    get: MaterialIcon$PHOTO_SIZE_SELECT_SMALL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PICTURE_AS_PDF', {
    get: MaterialIcon$PICTURE_AS_PDF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PICTURE_IN_PICTURE', {
    get: MaterialIcon$PICTURE_IN_PICTURE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PICTURE_IN_PICTURE_ALT', {
    get: MaterialIcon$PICTURE_IN_PICTURE_ALT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PIE_CHART', {
    get: MaterialIcon$PIE_CHART_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PIE_CHART_OUTLINED', {
    get: MaterialIcon$PIE_CHART_OUTLINED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PIN_DROP', {
    get: MaterialIcon$PIN_DROP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PLACE', {
    get: MaterialIcon$PLACE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PLAY_ARROW', {
    get: MaterialIcon$PLAY_ARROW_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PLAY_CIRCLE_FILLED', {
    get: MaterialIcon$PLAY_CIRCLE_FILLED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PLAY_CIRCLE_OUTLINE', {
    get: MaterialIcon$PLAY_CIRCLE_OUTLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PLAY_FOR_WORK', {
    get: MaterialIcon$PLAY_FOR_WORK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PLAYLIST_ADD', {
    get: MaterialIcon$PLAYLIST_ADD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PLAYLIST_ADD_CHECK', {
    get: MaterialIcon$PLAYLIST_ADD_CHECK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PLAYLIST_PLAY', {
    get: MaterialIcon$PLAYLIST_PLAY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PLUS_ONE', {
    get: MaterialIcon$PLUS_ONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'POLL', {
    get: MaterialIcon$POLL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'POLYMER', {
    get: MaterialIcon$POLYMER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'POOL', {
    get: MaterialIcon$POOL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PORTABLE_WIFI_OFF', {
    get: MaterialIcon$PORTABLE_WIFI_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PORTRAIT', {
    get: MaterialIcon$PORTRAIT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'POWER', {
    get: MaterialIcon$POWER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'POWER_INPUT', {
    get: MaterialIcon$POWER_INPUT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'POWER_SETTINGS_NEW', {
    get: MaterialIcon$POWER_SETTINGS_NEW_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PREGNANT_WOMAN', {
    get: MaterialIcon$PREGNANT_WOMAN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PRESENT_TO_ALL', {
    get: MaterialIcon$PRESENT_TO_ALL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PRINT', {
    get: MaterialIcon$PRINT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PRIORITY_HIGH', {
    get: MaterialIcon$PRIORITY_HIGH_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PUBLIC', {
    get: MaterialIcon$PUBLIC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PUBLISH', {
    get: MaterialIcon$PUBLISH_getInstance
  });
  Object.defineProperty(MaterialIcon, 'QUERY_BUILDER', {
    get: MaterialIcon$QUERY_BUILDER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'QUESTION_ANSWER', {
    get: MaterialIcon$QUESTION_ANSWER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'QUEUE', {
    get: MaterialIcon$QUEUE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'QUEUE_MUSIC', {
    get: MaterialIcon$QUEUE_MUSIC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'QUEUE_PLAY_NEXT', {
    get: MaterialIcon$QUEUE_PLAY_NEXT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RADIO', {
    get: MaterialIcon$RADIO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RADIO_BUTTON_CHECKED', {
    get: MaterialIcon$RADIO_BUTTON_CHECKED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RADIO_BUTTON_UNCHECKED', {
    get: MaterialIcon$RADIO_BUTTON_UNCHECKED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RATE_REVIEW', {
    get: MaterialIcon$RATE_REVIEW_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RECEIPT', {
    get: MaterialIcon$RECEIPT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RECENT_ACTORS', {
    get: MaterialIcon$RECENT_ACTORS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RECORD_VOICE_OVER', {
    get: MaterialIcon$RECORD_VOICE_OVER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RM', {
    get: MaterialIcon$RM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REDO', {
    get: MaterialIcon$REDO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REFRESH', {
    get: MaterialIcon$REFRESH_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REMOVE', {
    get: MaterialIcon$REMOVE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REMOVE_CIRCLE', {
    get: MaterialIcon$REMOVE_CIRCLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REMOVE_CIRCLE_OUTLINE', {
    get: MaterialIcon$REMOVE_CIRCLE_OUTLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REMOVE_FROM_QUEUE', {
    get: MaterialIcon$REMOVE_FROM_QUEUE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REMOVE_RED_EYE', {
    get: MaterialIcon$REMOVE_RED_EYE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REMOVE_SHOPPING_CART', {
    get: MaterialIcon$REMOVE_SHOPPING_CART_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REORDER', {
    get: MaterialIcon$REORDER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REPEAT', {
    get: MaterialIcon$REPEAT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REPEAT_ONE', {
    get: MaterialIcon$REPEAT_ONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REPLAY', {
    get: MaterialIcon$REPLAY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REPLAY_10', {
    get: MaterialIcon$REPLAY_10_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REPLAY_30', {
    get: MaterialIcon$REPLAY_30_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REPLAY_5', {
    get: MaterialIcon$REPLAY_5_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REPLY', {
    get: MaterialIcon$REPLY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REPLY_ALL', {
    get: MaterialIcon$REPLY_ALL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REPORT', {
    get: MaterialIcon$REPORT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REPORT_PROBLEM', {
    get: MaterialIcon$REPORT_PROBLEM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RESTAURANT', {
    get: MaterialIcon$RESTAURANT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RESTAURANT_MENU', {
    get: MaterialIcon$RESTAURANT_MENU_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RESTORE', {
    get: MaterialIcon$RESTORE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RESTORE_PAGE', {
    get: MaterialIcon$RESTORE_PAGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RING_VOLUME', {
    get: MaterialIcon$RING_VOLUME_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ROOM', {
    get: MaterialIcon$ROOM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ROOM_SERVICE', {
    get: MaterialIcon$ROOM_SERVICE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ROTATE_90_DEGREES_CCW', {
    get: MaterialIcon$ROTATE_90_DEGREES_CCW_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ROTATE_LEFT', {
    get: MaterialIcon$ROTATE_LEFT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ROTATE_RIGHT', {
    get: MaterialIcon$ROTATE_RIGHT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ROUNDED_CORNER', {
    get: MaterialIcon$ROUNDED_CORNER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ROUTER', {
    get: MaterialIcon$ROUTER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ROWING', {
    get: MaterialIcon$ROWING_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RSS_FEED', {
    get: MaterialIcon$RSS_FEED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RV_HOOKUP', {
    get: MaterialIcon$RV_HOOKUP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SATELLITE', {
    get: MaterialIcon$SATELLITE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SAVE', {
    get: MaterialIcon$SAVE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SCANNER', {
    get: MaterialIcon$SCANNER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SCHEDULE', {
    get: MaterialIcon$SCHEDULE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SCHOOL', {
    get: MaterialIcon$SCHOOL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SCREEN_LOCK_LANDSCAPE', {
    get: MaterialIcon$SCREEN_LOCK_LANDSCAPE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SCREEN_LOCK_PORTRAIT', {
    get: MaterialIcon$SCREEN_LOCK_PORTRAIT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SCREEN_LOCK_ROTATION', {
    get: MaterialIcon$SCREEN_LOCK_ROTATION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SCREEN_ROTATION', {
    get: MaterialIcon$SCREEN_ROTATION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SCREEN_SHARE', {
    get: MaterialIcon$SCREEN_SHARE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SD_CARD', {
    get: MaterialIcon$SD_CARD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SD_STORAGE', {
    get: MaterialIcon$SD_STORAGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SEARCH', {
    get: MaterialIcon$SEARCH_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SECURITY', {
    get: MaterialIcon$SECURITY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SELECT_ALL', {
    get: MaterialIcon$SELECT_ALL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SEND', {
    get: MaterialIcon$SEND_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SENTIMENT_DISSATISFIED', {
    get: MaterialIcon$SENTIMENT_DISSATISFIED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SENTIMENT_NEUTRAL', {
    get: MaterialIcon$SENTIMENT_NEUTRAL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SENTIMENT_SATISFIED', {
    get: MaterialIcon$SENTIMENT_SATISFIED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SENTIMENT_VERY_DISSATISFIED', {
    get: MaterialIcon$SENTIMENT_VERY_DISSATISFIED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SENTIMENT_VERY_SATISFIED', {
    get: MaterialIcon$SENTIMENT_VERY_SATISFIED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS', {
    get: MaterialIcon$SETTINGS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_APPLICATIONS', {
    get: MaterialIcon$SETTINGS_APPLICATIONS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_BACKUP_RESTORE', {
    get: MaterialIcon$SETTINGS_BACKUP_RESTORE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_BLUETOOTH', {
    get: MaterialIcon$SETTINGS_BLUETOOTH_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_BRIGHTNESS', {
    get: MaterialIcon$SETTINGS_BRIGHTNESS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_CELL', {
    get: MaterialIcon$SETTINGS_CELL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_ETHERNET', {
    get: MaterialIcon$SETTINGS_ETHERNET_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_INPUT_ANTENNA', {
    get: MaterialIcon$SETTINGS_INPUT_ANTENNA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_INPUT_COMPONENT', {
    get: MaterialIcon$SETTINGS_INPUT_COMPONENT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_INPUT_COMPOSITE', {
    get: MaterialIcon$SETTINGS_INPUT_COMPOSITE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_INPUT_HDMI', {
    get: MaterialIcon$SETTINGS_INPUT_HDMI_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_INPUT_SVIDEO', {
    get: MaterialIcon$SETTINGS_INPUT_SVIDEO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_OVERSCAN', {
    get: MaterialIcon$SETTINGS_OVERSCAN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_PHONE', {
    get: MaterialIcon$SETTINGS_PHONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_POWER', {
    get: MaterialIcon$SETTINGS_POWER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_REMOTE', {
    get: MaterialIcon$SETTINGS_REMOTE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_SYSTEM_DAYDREAM', {
    get: MaterialIcon$SETTINGS_SYSTEM_DAYDREAM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_VOICE', {
    get: MaterialIcon$SETTINGS_VOICE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SHARE', {
    get: MaterialIcon$SHARE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SHOP', {
    get: MaterialIcon$SHOP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SHOP_TWO', {
    get: MaterialIcon$SHOP_TWO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SHOPPING_BASKET', {
    get: MaterialIcon$SHOPPING_BASKET_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SHOPPING_CART', {
    get: MaterialIcon$SHOPPING_CART_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SHORT_TEXT', {
    get: MaterialIcon$SHORT_TEXT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SHOW_CHART', {
    get: MaterialIcon$SHOW_CHART_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SHUFFLE', {
    get: MaterialIcon$SHUFFLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SIGNAL_CELLULAR_4_BAR', {
    get: MaterialIcon$SIGNAL_CELLULAR_4_BAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SIGNAL_CELLULAR_CONNECTED_NO_INTERNET_4_BAR', {
    get: MaterialIcon$SIGNAL_CELLULAR_CONNECTED_NO_INTERNET_4_BAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SIGNAL_CELLULAR_NO_SIM', {
    get: MaterialIcon$SIGNAL_CELLULAR_NO_SIM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SIGNAL_CELLULAR_NULL', {
    get: MaterialIcon$SIGNAL_CELLULAR_NULL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SIGNAL_CELLULAR_OFF', {
    get: MaterialIcon$SIGNAL_CELLULAR_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SIGNAL_WIFI_4_BAR', {
    get: MaterialIcon$SIGNAL_WIFI_4_BAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SIGNAL_WIFI_4_BAR_LOCK', {
    get: MaterialIcon$SIGNAL_WIFI_4_BAR_LOCK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SIGNAL_WIFI_OFF', {
    get: MaterialIcon$SIGNAL_WIFI_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SIM_CARD', {
    get: MaterialIcon$SIM_CARD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SIM_CARD_ALERT', {
    get: MaterialIcon$SIM_CARD_ALERT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SKIP_NEXT', {
    get: MaterialIcon$SKIP_NEXT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SKIP_PREVIOUS', {
    get: MaterialIcon$SKIP_PREVIOUS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SLIDESHOW', {
    get: MaterialIcon$SLIDESHOW_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SLOW_MOTION_VIDEO', {
    get: MaterialIcon$SLOW_MOTION_VIDEO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SMARTPHONE', {
    get: MaterialIcon$SMARTPHONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SMOKE_FREE', {
    get: MaterialIcon$SMOKE_FREE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SMOKING_ROOMS', {
    get: MaterialIcon$SMOKING_ROOMS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SMS', {
    get: MaterialIcon$SMS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SMS_FAILED', {
    get: MaterialIcon$SMS_FAILED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SNOOZE', {
    get: MaterialIcon$SNOOZE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SORT', {
    get: MaterialIcon$SORT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SORT_BY_ALPHA', {
    get: MaterialIcon$SORT_BY_ALPHA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SPA', {
    get: MaterialIcon$SPA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SPACE_BAR', {
    get: MaterialIcon$SPACE_BAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SPEAKER', {
    get: MaterialIcon$SPEAKER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SPEAKER_GROUP', {
    get: MaterialIcon$SPEAKER_GROUP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SPEAKER_NOTES', {
    get: MaterialIcon$SPEAKER_NOTES_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SPEAKER_NOTES_OFF', {
    get: MaterialIcon$SPEAKER_NOTES_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SPEAKER_PHONE', {
    get: MaterialIcon$SPEAKER_PHONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SPELLCHECK', {
    get: MaterialIcon$SPELLCHECK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STAR', {
    get: MaterialIcon$STAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STAR_BORDER', {
    get: MaterialIcon$STAR_BORDER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STAR_HALF', {
    get: MaterialIcon$STAR_HALF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STARS', {
    get: MaterialIcon$STARS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STAY_CURRENT_LANDSCAPE', {
    get: MaterialIcon$STAY_CURRENT_LANDSCAPE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STAY_CURRENT_PORTRAIT', {
    get: MaterialIcon$STAY_CURRENT_PORTRAIT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STAY_PRIMARY_LANDSCAPE', {
    get: MaterialIcon$STAY_PRIMARY_LANDSCAPE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STAY_PRIMARY_PORTRAIT', {
    get: MaterialIcon$STAY_PRIMARY_PORTRAIT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STOP', {
    get: MaterialIcon$STOP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STOP_SCREEN_SHARE', {
    get: MaterialIcon$STOP_SCREEN_SHARE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STORAGE', {
    get: MaterialIcon$STORAGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STORE', {
    get: MaterialIcon$STORE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STORE_MALL_DIRECTORY', {
    get: MaterialIcon$STORE_MALL_DIRECTORY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STRAIGHTEN', {
    get: MaterialIcon$STRAIGHTEN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STREETVIEW', {
    get: MaterialIcon$STREETVIEW_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STRIKETHROUGH_S', {
    get: MaterialIcon$STRIKETHROUGH_S_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STYLE', {
    get: MaterialIcon$STYLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SUBDIRECTORY_ARROW_LEFT', {
    get: MaterialIcon$SUBDIRECTORY_ARROW_LEFT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SUBDIRECTORY_ARROW_RIGHT', {
    get: MaterialIcon$SUBDIRECTORY_ARROW_RIGHT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SUBJECT', {
    get: MaterialIcon$SUBJECT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SUBSCRIPTIONS', {
    get: MaterialIcon$SUBSCRIPTIONS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SUBTITLES', {
    get: MaterialIcon$SUBTITLES_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SUBWAY', {
    get: MaterialIcon$SUBWAY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SUPERVISOR_ACCOUNT', {
    get: MaterialIcon$SUPERVISOR_ACCOUNT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SURROUND_SOUND', {
    get: MaterialIcon$SURROUND_SOUND_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SWAP_CALLS', {
    get: MaterialIcon$SWAP_CALLS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SWAP_HORIZ', {
    get: MaterialIcon$SWAP_HORIZ_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SWAP_VERT', {
    get: MaterialIcon$SWAP_VERT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SWAP_VERTICAL_CIRCLE', {
    get: MaterialIcon$SWAP_VERTICAL_CIRCLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SWITCH_CAMERA', {
    get: MaterialIcon$SWITCH_CAMERA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SWITCH_VIDEO', {
    get: MaterialIcon$SWITCH_VIDEO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SYNC', {
    get: MaterialIcon$SYNC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SYNC_DISABLED', {
    get: MaterialIcon$SYNC_DISABLED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SYNC_PROBLEM', {
    get: MaterialIcon$SYNC_PROBLEM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SYSTEM_UPDATE', {
    get: MaterialIcon$SYSTEM_UPDATE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SYSTEM_UPDATE_ALT', {
    get: MaterialIcon$SYSTEM_UPDATE_ALT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TAB', {
    get: MaterialIcon$TAB_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TAB_UNSELECTED', {
    get: MaterialIcon$TAB_UNSELECTED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TABLET', {
    get: MaterialIcon$TABLET_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TABLET_ANDROID', {
    get: MaterialIcon$TABLET_ANDROID_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TABLET_MAC', {
    get: MaterialIcon$TABLET_MAC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TAG_FACES', {
    get: MaterialIcon$TAG_FACES_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TAP_AND_PLAY', {
    get: MaterialIcon$TAP_AND_PLAY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TERRAIN', {
    get: MaterialIcon$TERRAIN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TEXT_FIELDS', {
    get: MaterialIcon$TEXT_FIELDS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TEXT_FORMAT', {
    get: MaterialIcon$TEXT_FORMAT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TEXTSMS', {
    get: MaterialIcon$TEXTSMS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TEXTURE', {
    get: MaterialIcon$TEXTURE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'THEATERS', {
    get: MaterialIcon$THEATERS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'THUMB_DOWN', {
    get: MaterialIcon$THUMB_DOWN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'THUMB_UP', {
    get: MaterialIcon$THUMB_UP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'THUMBS_UP_DOWN', {
    get: MaterialIcon$THUMBS_UP_DOWN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TIME_TO_LEAVE', {
    get: MaterialIcon$TIME_TO_LEAVE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TIMELAPSE', {
    get: MaterialIcon$TIMELAPSE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TIMELINE', {
    get: MaterialIcon$TIMELINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TIMER', {
    get: MaterialIcon$TIMER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TIMER_10', {
    get: MaterialIcon$TIMER_10_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TIMER_3', {
    get: MaterialIcon$TIMER_3_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TIMER_OFF', {
    get: MaterialIcon$TIMER_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TITLE', {
    get: MaterialIcon$TITLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TOC', {
    get: MaterialIcon$TOC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TODAY', {
    get: MaterialIcon$TODAY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TOLL', {
    get: MaterialIcon$TOLL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TONALITY', {
    get: MaterialIcon$TONALITY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TOUCH_APP', {
    get: MaterialIcon$TOUCH_APP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TOYS', {
    get: MaterialIcon$TOYS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TRACK_CHANGES', {
    get: MaterialIcon$TRACK_CHANGES_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TRAFFIC', {
    get: MaterialIcon$TRAFFIC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TRAIN', {
    get: MaterialIcon$TRAIN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TRAM', {
    get: MaterialIcon$TRAM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TRANSFER_WITHIN_A_STATION', {
    get: MaterialIcon$TRANSFER_WITHIN_A_STATION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TRANSFORM', {
    get: MaterialIcon$TRANSFORM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TRANSLATE', {
    get: MaterialIcon$TRANSLATE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TRENDING_DOWN', {
    get: MaterialIcon$TRENDING_DOWN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TRENDING_FLAT', {
    get: MaterialIcon$TRENDING_FLAT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TRENDING_UP', {
    get: MaterialIcon$TRENDING_UP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TUNE', {
    get: MaterialIcon$TUNE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TURNED_IN', {
    get: MaterialIcon$TURNED_IN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TURNED_IN_NOT', {
    get: MaterialIcon$TURNED_IN_NOT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TV', {
    get: MaterialIcon$TV_getInstance
  });
  Object.defineProperty(MaterialIcon, 'UNARCHIVE', {
    get: MaterialIcon$UNARCHIVE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'UNDO', {
    get: MaterialIcon$UNDO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'UNFOLD_LESS', {
    get: MaterialIcon$UNFOLD_LESS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'UNFOLD_MORE', {
    get: MaterialIcon$UNFOLD_MORE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'UPDATE', {
    get: MaterialIcon$UPDATE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'USB', {
    get: MaterialIcon$USB_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VERIFIED_USER', {
    get: MaterialIcon$VERIFIED_USER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VERTICAL_ALIGN_BOTTOM', {
    get: MaterialIcon$VERTICAL_ALIGN_BOTTOM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VERTICAL_ALIGN_CENTER', {
    get: MaterialIcon$VERTICAL_ALIGN_CENTER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VERTICAL_ALIGN_TOP', {
    get: MaterialIcon$VERTICAL_ALIGN_TOP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIBRATION', {
    get: MaterialIcon$VIBRATION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIDEO_CALL', {
    get: MaterialIcon$VIDEO_CALL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIDEO_LABEL', {
    get: MaterialIcon$VIDEO_LABEL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIDEO_LIBRARY', {
    get: MaterialIcon$VIDEO_LIBRARY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIDEOCAM', {
    get: MaterialIcon$VIDEOCAM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIDEOCAM_OFF', {
    get: MaterialIcon$VIDEOCAM_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIDEOGAME_ASSET', {
    get: MaterialIcon$VIDEOGAME_ASSET_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIEW_AGENDA', {
    get: MaterialIcon$VIEW_AGENDA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIEW_ARRAY', {
    get: MaterialIcon$VIEW_ARRAY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIEW_CAROUSEL', {
    get: MaterialIcon$VIEW_CAROUSEL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIEW_COLUMN', {
    get: MaterialIcon$VIEW_COLUMN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIEW_COMFY', {
    get: MaterialIcon$VIEW_COMFY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIEW_COMPACT', {
    get: MaterialIcon$VIEW_COMPACT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIEW_DAY', {
    get: MaterialIcon$VIEW_DAY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIEW_HEADLINE', {
    get: MaterialIcon$VIEW_HEADLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIEW_LIST', {
    get: MaterialIcon$VIEW_LIST_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIEW_MODULE', {
    get: MaterialIcon$VIEW_MODULE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIEW_QUILT', {
    get: MaterialIcon$VIEW_QUILT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIEW_STREAM', {
    get: MaterialIcon$VIEW_STREAM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIEW_WEEK', {
    get: MaterialIcon$VIEW_WEEK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIGNETTE', {
    get: MaterialIcon$VIGNETTE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VISIBILITY', {
    get: MaterialIcon$VISIBILITY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VISIBILITY_OFF', {
    get: MaterialIcon$VISIBILITY_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VOICE_CHAT', {
    get: MaterialIcon$VOICE_CHAT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VOICEMAIL', {
    get: MaterialIcon$VOICEMAIL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VOLUME_DOWN', {
    get: MaterialIcon$VOLUME_DOWN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VOLUME_MUTE', {
    get: MaterialIcon$VOLUME_MUTE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VOLUME_OFF', {
    get: MaterialIcon$VOLUME_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VOLUME_UP', {
    get: MaterialIcon$VOLUME_UP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VPN_KEY', {
    get: MaterialIcon$VPN_KEY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VPN_LOCK', {
    get: MaterialIcon$VPN_LOCK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WALLPAPER', {
    get: MaterialIcon$WALLPAPER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WARNING', {
    get: MaterialIcon$WARNING_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WATCH', {
    get: MaterialIcon$WATCH_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WATCH_LATER', {
    get: MaterialIcon$WATCH_LATER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WB_AUTO', {
    get: MaterialIcon$WB_AUTO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WB_CLOUDY', {
    get: MaterialIcon$WB_CLOUDY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WB_INCANDESCENT', {
    get: MaterialIcon$WB_INCANDESCENT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WB_IRIDESCENT', {
    get: MaterialIcon$WB_IRIDESCENT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WB_SUNNY', {
    get: MaterialIcon$WB_SUNNY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WC', {
    get: MaterialIcon$WC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WEB', {
    get: MaterialIcon$WEB_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WEB_ASSET', {
    get: MaterialIcon$WEB_ASSET_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WEEKEND', {
    get: MaterialIcon$WEEKEND_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WHATSHOT', {
    get: MaterialIcon$WHATSHOT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WIDGETS', {
    get: MaterialIcon$WIDGETS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WIFI', {
    get: MaterialIcon$WIFI_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WIFI_LOCK', {
    get: MaterialIcon$WIFI_LOCK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WIFI_TETHERING', {
    get: MaterialIcon$WIFI_TETHERING_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WORK', {
    get: MaterialIcon$WORK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WRAP_TEXT', {
    get: MaterialIcon$WRAP_TEXT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'YOUTUBE_SEARCHED_FOR', {
    get: MaterialIcon$YOUTUBE_SEARCHED_FOR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ZOOM_IN', {
    get: MaterialIcon$ZOOM_IN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ZOOM_OUT', {
    get: MaterialIcon$ZOOM_OUT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ZOOM_OUT_MAP', {
    get: MaterialIcon$ZOOM_OUT_MAP_getInstance
  });
  package$components.MaterialIcon = MaterialIcon;
  package$components.OptionView = OptionView;
  package$components.SelectView = SelectView;
  package$components.selectView_of9t8j$ = selectView;
  package$components.selectView_usff2y$ = selectView_0;
  package$components.selectView_8ph9k4$ = selectView_1;
  package$components.Table = Table;
  package$components.table_xx7pay$ = table;
  package$components.TableCaption = TableCaption;
  package$components.caption_drsbkx$ = caption;
  package$components.TableCell = TableCell;
  package$components.cell_1n6lke$ = cell;
  package$components.head_1n6lke$ = head;
  package$components.TableRow = TableRow;
  package$components.row_f5wxgu$ = row;
  Object.defineProperty(TableSection$Type, 'THEAD', {
    get: TableSection$Type$THEAD_getInstance
  });
  Object.defineProperty(TableSection$Type, 'TBODY', {
    get: TableSection$Type$TBODY_getInstance
  });
  Object.defineProperty(TableSection$Type, 'TFOOT', {
    get: TableSection$Type$TFOOT_getInstance
  });
  TableSection.Type = TableSection$Type;
  package$components.TableSection = TableSection;
  package$components.thead_u6ce8t$ = thead;
  package$components.tbody_u6ce8t$ = tbody;
  package$components.tfoot_u6ce8t$ = tfoot;
  package$components.TextView = TextView;
  package$components.textView_4w5e81$ = textView;
  package$components.textView_56r808$ = textView_0;
  package$kwebview.toDashCase_pdl1vz$ = toDashCase;
  package$kwebview.toPoint_apx4ki$ = toPoint;
  package$kwebview.toDimension_gf0w06$ = toDimension;
  package$kwebview.format_g814bf$ = format;
  package$kwebview.delete_hwpqgh$ = delete_0;
  package$kwebview.async_n53o35$ = async;
  package$kwebview.interval_n53o35$ = interval;
  package$kwebview.clearInterval_za3lpa$ = clearInterval;
  package$kwebview.bindView_hj30u1$ = bindView;
  package$kwebview.get_modifierKey_8w68rw$ = get_modifierKey;
  var package$extra = package$kwebview.extra || (package$kwebview.extra = {});
  package$extra.listFactory_gfx4w4$ = listFactory;
  package$extra.listFactory_37r4tr$ = listFactory_0;
  Object.defineProperty(i18n$Locale, 'Companion', {
    get: i18n$Locale$Companion_getInstance
  });
  i18n.prototype.Locale = i18n$Locale;
  Object.defineProperty(package$kwebview, 'i18n', {
    get: i18n_getInstance
  });
  package$kwebview.t_61zpoe$ = t;
  package$kwebview.t_25kzsl$ = t_0;
  package$kwebview.t_ctfcqn$ = t_1;
  package$kwebview.t_xfy9o8$ = t_2;
  package$kwebview.t_adnhmn$ = t_3;
  package$kwebview.t_saeb5h$ = t_4;
  main([]);
  Kotlin.defineModule('ascii-register', _);
  return _;
}));

//# sourceMappingURL=ascii-register.js.map
