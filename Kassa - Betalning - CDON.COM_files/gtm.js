
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"393",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return dataLayer.amount})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=window.location.pathname,a=cdonNS.pageCategory;\"\/\"===b||\"\/start\/\"===b?a=\"start\":0===b.indexOf(\"\/search\")?a=\"search\":0===b.indexOf(\"\/brands\")?a=\"brands\":0===b.indexOf(\"\/merchant\")?a=\"merchant\":0===b.indexOf(\"\/marketplace\")?a=\"marketplace\":0===b.indexOf(\"\/giftcertificate\")?a=\"giftcertificate\":0===b.indexOf(\"\/customer\")?a=\"customer\":0===b.indexOf(\"\/checkout\")?a=\"checkout\":0===b.indexOf(\"\/cdon-plus\")?a=\"cdon+\":0===b.indexOf(\"\/rabattkoder\")||0===b.indexOf(\"\/rabatkoder\")||0===b.indexOf(\"\/alennuskoodit\")?\na=\"voucher\":0===b.indexOf(\"\/kampanjtorget\")||0===b.indexOf(\"\/kampanjetorget\")||0===b.indexOf(\"\/kampagnetorvet\")||0===b.indexOf(\"\/kampanjatori\")?a=\"campaigns\":\"1765\"===a?a=\"1765 T-shirt\":\"2800\"===a?a=\"2800 Furniture\":\"1778\"===a\u0026\u0026(a=\"1778 Electronics\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(\"#breadcrumb li\").length})();"]
    },{
      "function":"__v",
      "vtp_name":"products",
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){c_prodid=[];for(var a=0;a\u003C",["escape",["macro",3],8,16],".length;a++)c_prodid[a]=",["escape",["macro",3],8,16],"[a].productId;return c_prodid})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(window.optimizely){var a=optimizely;if(a.activeExperiments\u0026\u0026a.allExperiments)for(var c=0;c\u003Ca.activeExperiments.length;c++){var d=a.activeExperiments[c],b=a.allExperiments[d];if(b\u0026\u0026b.universal_analytics\u0026\u0026(b=b.universal_analytics.slot,2==b\u0026\u0026a.variationIdsMap\u0026\u0026a.variationNamesMap))return a.variationIdsMap[d]+\": \"+a.variationNamesMap[d]}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(window.optimizely){var a=optimizely;if(a.activeExperiments\u0026\u0026a.allExperiments)for(var c=0;c\u003Ca.activeExperiments.length;c++){var d=a.activeExperiments[c],b=a.allExperiments[d];if(b\u0026\u0026b.universal_analytics\u0026\u0026(b=b.universal_analytics.slot,3==b\u0026\u0026a.variationIdsMap\u0026\u0026a.variationNamesMap))return a.variationIdsMap[d]+\": \"+a.variationNamesMap[d]}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b,a=0;a\u003C",["escape",["macro",3],8,16],".length;a++)b=",["escape",["macro",3],8,16],"[a].currency;return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.dataLayer,b;for(b in a)if(\"checkoutPaymentOption\"===a[b].event)return a[b].ecommerce.checkout.actionField.option})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(\"#q\").val()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.dataLayer,b;for(b in a)if(\"addToCart\"===a[b].event)return a[b].ecommerce.add.products[0].id})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.dataLayer,b;for(b in a)if(\"addToCart\"===a[b].event)return a[b].ecommerce.add.products[0].price})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return cdonNS.product.variables.productType})();"]
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__c",
      "vtp_value":"UA-562803-15"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","1"],["map","fieldName","allowLinker","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",15],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_name":"returningCustomer",
      "vtp_dataLayerVersion":2
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_stripWww":true,
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__smm",
      "vtp_input":["macro",18],
      "vtp_map":["list",["map","key","cdon.dk","value","DK"],["map","key","cdon.fi","value","FI"],["map","key","cdon.no","value","NO"],["map","key","cdon.se","value","SE"],["map","key","cdon.eu","value","EU"]]
    },{
      "function":"__v",
      "vtp_name":"skin",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"siteVersion",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eSalesABTestGroupName",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"isPlusCustomer",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"isLoggedIn",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"pageType",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"activeCategory"
    },{
      "function":"__v",
      "vtp_name":"merchant",
      "vtp_dataLayerVersion":2
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__v",
      "vtp_name":"amount",
      "vtp_dataLayerVersion":2
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__v",
      "vtp_name":"google_tag_params",
      "vtp_dataLayerVersion":2
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__v",
      "vtp_name":"eventInteraction",
      "vtp_defaultValue":"false",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventValue",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventPage",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventTitle",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventCategory",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventAction",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventLabel",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"transactionType",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"customerType",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"activeCategory",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"customerId",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"marketCode",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"brand",
      "vtp_dataLayerVersion":2
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_name":"amount",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"orderId",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"productId",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"marketCode",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"amountWithoutTax"
    },{
      "function":"__v",
      "vtp_name":"currency",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__d",
      "vtp_elementSelector":"h1",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":".block .info-box",
      "vtp_selectorType":"CSS"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"amount",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"price",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"totalSum",
      "vtp_dataLayerVersion":2
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"customerEmail"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtin"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__j",
      "vtp_name":"transactionObject"
    },{
      "function":"__v",
      "vtp_name":"category",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"photo",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"title",
      "vtp_dataLayerVersion":2
    },{
      "function":"__c",
      "vtp_value":"quantity"
    },{
      "function":"__d",
      "vtp_elementId":"klarna-checkout-container"
    },{
      "function":"__v",
      "vtp_name":"quantity",
      "vtp_dataLayerVersion":2
    },{
      "function":"__smm",
      "vtp_input":["macro",18],
      "vtp_map":["list",["map","key","cdon.dk","value","73R5Q72QA5F3BKTAWG5E2H"],["map","key","cdon.fi","value","OBPIUXADAVBQLINRQDCY3P"],["map","key","cdon.no","value","XCT6R5MTHRDI7MMR6HOCAW"]]
    },{
      "function":"__smm",
      "vtp_input":["macro",18],
      "vtp_map":["list",["map","key","cdon.dk","value","GWUWILUINBHMREXU6AKDCW"],["map","key","cdon.fi","value","EH4ABQH3KJGYLASSASWPX3"],["map","key","cdon.no","value","Y7W6BTIR6RCFFLCLV6ZMA6"]]
    },{
      "function":"__smm",
      "vtp_input":["macro",18],
      "vtp_map":["list",["map","key","cdon.dk","value","test"],["map","key","cdon.fi","value","test"],["map","key","cdon.no","value","test"],["map","key","cdon.se","value","ee3426fb\/b670\/4447\/a44f\/003f67a3781f"]]
    },{
      "function":"__v",
      "vtp_name":"pageViewFired",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"activeCategory",
      "vtp_dataLayerVersion":2
    },{
      "function":"__j",
      "vtp_name":"cdonNS.siteVersion"
    },{
      "function":"__v",
      "vtp_name":"ecomm_prodid",
      "vtp_dataLayerVersion":2
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"voucher"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"TRADEDOUBLER"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list",["map","index","1","group",["macro",1]]],
      "vtp_gaSettings":["macro",16],
      "vtp_dimension":["list",["map","index","4","dimension",["macro",17]],["map","index","1","dimension",["macro",19]],["map","index","6","dimension",["macro",20]],["map","index","5","dimension",["macro",21]],["map","index","7","dimension",["macro",22]],["map","index","8","dimension",["macro",23]],["map","index","10","dimension",["macro",24]],["map","index","12","dimension",["macro",25]],["map","index","13","dimension",["macro",26]],["map","index","14","dimension",["macro",27]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":29
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",14]]],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",16],
      "vtp_eventAction":"Product Impressions",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":32
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",14]]],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",16],
      "vtp_eventAction":"Product Impressions Click",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":33
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",14]]],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",16],
      "vtp_eventAction":"Menu Banner Impressions",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":34
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",14]]],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",16],
      "vtp_eventAction":"Magic Banner Impressions",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":35
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",14]]],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",16],
      "vtp_eventAction":"Promotions Click",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":36
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",14]]],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",16],
      "vtp_eventAction":"Checkout Confirmation Click",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":37
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",14]]],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",16],
      "vtp_eventAction":"Add To Cart Click",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":38
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",14]]],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",16],
      "vtp_eventAction":"Remove From Cart Click",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":39
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template",["macro",14],"?",["macro",28]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",16],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":42
    },{
      "function":"__sp",
      "vtp_dataLayerVariable":["macro",32],
      "vtp_conversionId":"1066562919",
      "vtp_customParamsFormat":"DATA_LAYER",
      "vtp_conversionLabel":"auaTCKmeoQQQ5-rJ_AM",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",33],
      "tag_id":44
    },{
      "function":"__sp",
      "vtp_dataLayerVariable":["macro",32],
      "vtp_conversionId":"1060078146",
      "vtp_customParamsFormat":"DATA_LAYER",
      "vtp_conversionLabel":"n8guCOqR6AMQwoS--QM",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",33],
      "tag_id":45
    },{
      "function":"__sp",
      "vtp_dataLayerVariable":["macro",32],
      "vtp_conversionId":"1058786586",
      "vtp_customParamsFormat":"DATA_LAYER",
      "vtp_conversionLabel":"qo89CNqT6AMQmprv-AM",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",33],
      "tag_id":46
    },{
      "function":"__sp",
      "vtp_dataLayerVariable":["macro",32],
      "vtp_conversionId":"1058787006",
      "vtp_customParamsFormat":"DATA_LAYER",
      "vtp_conversionLabel":"49aWCN7N8wQQvp3v-AM",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",33],
      "tag_id":47
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",34],
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",35],
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",36]],["map","fieldName","title","value",["macro",37]]],
      "vtp_eventCategory":["macro",38],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",16],
      "vtp_eventAction":["macro",39],
      "vtp_eventLabel":["macro",40],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":49
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",14]]],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",16],
      "vtp_eventAction":"Checkout Login",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":50
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["template","\"row: ",["macro",41],"\""],
      "vtp_eventCategory":"Javascript Error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",16],
      "vtp_eventAction":["macro",42],
      "vtp_eventLabel":["macro",43],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":59
    },{
      "function":"__ua",
      "teardown_tags":["list",["tag",85,2]],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",14]]],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",16],
      "vtp_eventAction":"Purchase",
      "vtp_dimension":["list",["map","index","9","dimension",["macro",45]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":63
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_ordinalType":"STANDARD",
      "vtp_useImageTag":false,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",47]],["map","key","u2","value",["macro",48]],["map","key","u3","value",["macro",18]],["map","key","u4","value",["macro",49]],["map","key","u5","value",["macro",46]]],
      "vtp_groupTag":"onsit0",
      "vtp_activityTag":"categ0",
      "vtp_advertiserId":"5118051",
      "vtp_ordinalStandard":["macro",50],
      "vtp_url":["macro",33],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":79
    },{
      "function":"__fls",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",47]],["map","key","u2","value",["macro",48]],["map","key","u3","value",["macro",18]],["map","key","u9","value","shipping"],["map","key","u10","value",["macro",8]],["map","key","u11","value",["macro",7]],["map","key","u12","value",["macro",48]],["map","key","u13","value","voucher"]],
      "vtp_revenue":["macro",51],
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_enableProductReporting":true,
      "vtp_orderId":["macro",52],
      "vtp_groupTag":"check0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"exist00",
      "vtp_dataSource":"DATA_LAYER",
      "vtp_advertiserId":"5118051",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",33],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":81
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_ordinalType":"STANDARD",
      "vtp_useImageTag":false,
      "vtp_groupTag":"onsit0",
      "vtp_customVariable":["list",["map","key","u1","value",["macro",47]],["map","key","u2","value",["macro",48]],["map","key","u3","value",["macro",18]],["map","key","u6","value",["macro",10]]],
      "vtp_advertiserId":"5118051",
      "vtp_activityTag":"added0",
      "vtp_ordinalStandard":["macro",50],
      "vtp_url":["macro",33],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":83
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_ordinalType":"UNIQUE",
      "vtp_useImageTag":false,
      "vtp_groupTag":"onsit0",
      "vtp_customVariable":["list",["map","key","u1","value",["macro",47]],["map","key","u2","value",["macro",48]],["map","key","u3","value",["macro",18]]],
      "vtp_advertiserId":"5118051",
      "vtp_activityTag":"newsl0",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",50],
      "vtp_url":["macro",33],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":84
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_ordinalType":"STANDARD",
      "vtp_useImageTag":false,
      "vtp_groupTag":"onsit0",
      "vtp_customVariable":["list",["map","key","u1","value",["macro",47]],["map","key","u2","value",["macro",48]],["map","key","u3","value",["macro",18]],["map","key","u6","value",["macro",53]]],
      "vtp_advertiserId":"5118051",
      "vtp_activityTag":"produ0",
      "vtp_ordinalStandard":["macro",50],
      "vtp_url":["macro",33],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":85
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_ordinalType":"STANDARD",
      "vtp_useImageTag":false,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",47]],["map","key","u2","value",["macro",48]],["map","key","u3","value",["macro",18]],["map","key","u8","value",["macro",9]]],
      "vtp_groupTag":"onsit0",
      "vtp_activityTag":"searc0",
      "vtp_advertiserId":"5118051",
      "vtp_ordinalStandard":["macro",50],
      "vtp_url":["macro",33],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":86
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_ordinalType":"UNIQUE",
      "vtp_useImageTag":false,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",47]],["map","key","u2","value",["macro",48]],["map","key","u3","value",["macro",18]]],
      "vtp_groupTag":"onsit0",
      "vtp_activityTag":"landi0",
      "vtp_advertiserId":"5118051",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",50],
      "vtp_url":["macro",33],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":87
    },{
      "function":"__fls",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",47]],["map","key","u2","value",["macro",48]],["map","key","u3","value",["macro",18]],["map","key","u9","value","Shipping"],["map","key","u10","value",["macro",8]],["map","key","u11","value",["macro",7]],["map","key","u12","value",["macro",48]],["map","key","u13","value","Voucher"]],
      "vtp_revenue":["macro",51],
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_enableProductReporting":true,
      "vtp_orderId":["macro",52],
      "vtp_groupTag":"check0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"newcu0",
      "vtp_dataSource":"DATA_LAYER",
      "vtp_advertiserId":"5118051",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",33],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":88
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_tagId":"5856556",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":118
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"809150778",
      "vtp_conversionLabel":"N0-UCKeNu4ABELrS6oED",
      "vtp_url":["macro",33],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":120
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"808914286",
      "vtp_conversionLabel":"muzPCPrdqIABEO6a3IED",
      "vtp_url":["macro",33],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":121
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"808913611",
      "vtp_conversionLabel":"ah63CMmdu4ABEMuV3IED",
      "vtp_url":["macro",33],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":122
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"808878795",
      "vtp_conversionLabel":"VMRvCMXnqIABEMuF2oED",
      "vtp_url":["macro",33],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":123
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "tag_id":125
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"809150778",
      "vtp_conversionLabel":"p4sWCJ7p8YMBELrS6oED",
      "vtp_url":["macro",33],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":128
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"808913611",
      "vtp_conversionLabel":"ImzBCN-UpIkBEMuV3IED",
      "vtp_url":["macro",33],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":129
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",55],
      "vtp_orderId":["macro",52],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1038441223",
      "vtp_currencyCode":["macro",56],
      "vtp_conversionLabel":"-yt3CIaSvIkBEIe2le8D",
      "vtp_url":["macro",33],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":130
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"808914286",
      "vtp_conversionLabel":"3BWtCLSp9okBEO6a3IED",
      "vtp_url":["macro",33],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":131
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_tagId":"13003141",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":132
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_tagId":"20099992",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":134
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_tagId":"27002965",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":135
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"User interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",16],
      "vtp_eventAction":"Visible",
      "vtp_eventLabel":"Footer",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":137
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",16],
      "vtp_eventAction":"Content",
      "vtp_eventLabel":"H1 missing",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":143
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",16],
      "vtp_eventAction":"Content",
      "vtp_eventLabel":["macro",59],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":144
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"User interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",16],
      "vtp_eventAction":"Product click",
      "vtp_eventLabel":["macro",61],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":149
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"User interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",16],
      "vtp_eventAction":"Product click",
      "vtp_eventLabel":["macro",62],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":150
    },{
      "function":"__jel",
      "tag_id":151
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":"footer.site-footer",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"123166_237",
      "tag_id":152
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"123166_280",
      "tag_id":153
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"123166_281",
      "tag_id":154
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"123166_282",
      "tag_id":155
    },{
      "function":"__cl",
      "tag_id":156
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"123166_284",
      "tag_id":157
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"123166_285",
      "tag_id":158
    },{
      "function":"__cl",
      "tag_id":159
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"123166_287",
      "tag_id":160
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"123166_288",
      "tag_id":161
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"123166_289",
      "tag_id":162
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"123166_290",
      "tag_id":163
    },{
      "function":"__html",
      "vtp_html":["template","\u003Cscript\u003E",["escape",["macro",63],8,16],";var amount=",["escape",["macro",63],8,16],".replace(\",\",\".\");document.write(\"\\x3cimg height\\x3d'0' width\\x3d'0' alt\\x3d'' src\\x3d'https:\/\/news.cdongroup.com\/r\/\"+Math.random().toString()+\"?tagid\\x3dpurchase\\x26amount\\x3d\"+amount+\"'\/\\x3e\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"0\" width=\"0\" alt=\"\" src=\"https:\/\/news.cdongroup.com\/r\/?tagid=purchase\u0026amp;amount=",["escape",["macro",63],12],"\"\u003E\n\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":21
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_supportDocumentWrite":false,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{",["escape",["macro",29],8,16],".match(\/^.*-(p)?\\d{8}\/)?dataLayer.push({event:\"fireRmktTag_",["escape",["macro",54],7],"\",google_tag_params:{ecomm_prodid:",["escape",["macro",53],8,16],",ecomm_pagetype:\"product\",ecomm_totalvalue:",["escape",["macro",64],8,16],"}}):",["escape",["macro",14],8,16],".match(\"order\/checkout\")?dataLayer.push({event:\"fireRmktTag_",["escape",["macro",54],7],"\",google_tag_params:{ecomm_prodid:",["escape",["macro",4],8,16],",ecomm_pagetype:\"cart\",ecomm_totalvalue:",["escape",["macro",65],8,16],"}}):",["escape",["macro",14],8,16],".match(\"order\/confirm\")?\ndataLayer.push({event:\"fireRmktTag_",["escape",["macro",54],7],"\",google_tag_params:{ecomm_prodid:",["escape",["macro",4],8,16],",ecomm_pagetype:\"purchase\",ecomm_totalvalue:",["escape",["macro",51],8,16],"}}):dataLayer.push({event:\"fireRmktTag_",["escape",["macro",54],7],"\",google_tag_params:{ecomm_pagetype:\"other\"}})}catch(a){}})();\u003C\/script\u003E"],
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){var c=\"cdon-general\";switch(",["escape",["macro",48],8,16],"){case \"DK\":c=\"cdon-dk-general\";break;case \"NO\":c=\"cdon-no-general\";break;case \"FI\":c=\"cdon-fi-general\"}var b=a.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=\"\/\/eu.widget.mb-srv.com\/load.js?tag\\x3d\"+c;b.id=\"mabayaLoader\";a=a.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":52
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){var c=\"cdon-conv\";switch(",["escape",["macro",48],8,16],"){case \"DK\":c=\"cdon-dk-conv\";break;case \"NO\":c=\"cdon-no-conv\";break;case \"FI\":c=\"cdon-fi-conv\"}var b=a.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=\"https:\/\/eu.widget.mb-srv.com\/load.js?tag\\x3d\"+c;b.id=\"mabayaLoader\";a=a.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":53
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar sendGa=function(a,e){for(var b=ga.getAll(),c=b.length;c--;){var d=b[c].get(\"name\");d+=\".send\";window.ga(d,{hitType:\"event\",eventCategory:a,eventAction:location.href,eventLabel:e})}};jQuery(\"body\").on(\"mousedown\",\"a\",function(a){a=jQuery(this).attr(\"href\");var e=new RegExp(\"(www.)?(\"+window.location.host+\")|(s.cdon.com)\"),b=\/(cloudfront.net)\/,c=\/^http:\\\/\\\/|^https:\\\/\\\/\/,d=\/^mailto:\/;!c.test(a)||e.test(a)||b.test(a)||sendGa(\"Outbound links\",a);d.test(a)\u0026\u0026sendGa(\"Outbound links\",a)});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":56
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_supportDocumentWrite":false,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction checkCookies(){var a=0;var d=\"TID_",["escape",["macro",52],7],"\";for(var c=document.cookie.split(\";\"),b=0;b\u003Cc.length;b++){var e=c[b].trim().toString();if(0===e.indexOf(d)){a+=1;break}}0\u003Ca?dataLayer.push({transactionType:\"old\"}):(a=new Date,a.setTime(a.getTime()+31536E6),a=\"expires\\x3d\"+a.toGMTString(),document.cookie=\"TID_",["escape",["macro",52],7],"; \"+a,dataLayer.push({transactionType:\"new\"}));dataLayer.push({event:\"transactionChecked\"})}checkCookies();\u003C\/script\u003E"],
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":57
    },{
      "function":"__html",
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/cdon.humany.net\/interfaces\/embed.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":60
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar swogoScriptTag=function(){var c=document.querySelector(\"head\"),a=document.createElement(\"script\");a.setAttribute(\"type\",\"text\/javascript\");a.setAttribute(\"id\",\"swogo-bundle-script\");var b=\"https:\/\/ui.swogo.com\/cdonSe\/swogo.js\";switch(",["escape",["macro",48],8,16],"){case \"DK\":b=\"https:\/\/ui.swogo.com\/cdonDk\/swogo.js\";break;case \"NO\":b=\"https:\/\/ui.swogo.com\/cdonNo\/swogo.js\";break;case \"FI\":b=\"https:\/\/ui.swogo.com\/cdonFi\/swogo.js\"}a.setAttribute(\"src\",b);c.appendChild(a)}(),swogoBuyClick=function(){$(\"body\").on(\"click\",\n\".swogo-button-add-to-cart\",function(){var c=$(this).closest(\".swogo-bundle\").data(\"id\");dataLayer.push({event:\"gaCustomEvent\",eventCategory:\"Swogo\",eventAction:\"Click\",eventLabel:\"position: \"+c,eventPage:document.location.pathname,eventInteraction:!0})})}();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":66
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar head=document.getElementsByTagName(\"head\")[0],script=document.createElement(\"script\");script.type=\"text\/javascript\";script.src=\"\/\/static.criteo.net\/js\/ld\/ld.js\";head.appendChild(script);var trackingKey=\"utm_source\",trackingValue=\"criteo\",cookie=\"crtg_dd\",days=60;cr_readTracking(trackingKey,trackingValue);cr_getCookie(\"crtg_dd\");\nfunction cr_readTracking(d,b){var a=window.location.search.substring(1);a=a.split(\"\\x26\");for(var c=0;c\u003Ca.length;c++){var e=a[c].split(\"\\x3d\");e[0]==d\u0026\u0026(e[1]==b?cr_createCookie(cookie,1,days):cr_createCookie(cookie,0,days))}}function cr_createCookie(d,b,a){var c=new Date;c.setTime(c.getTime()+864E5*a);a=\"expires\\x3d\"+c.toUTCString();document.cookie=d+\"\\x3d\"+b+\"; \"+a+\"; path\\x3d\/\"}\nfunction cr_getCookie(d){var b,a=document.cookie.split(\";\");for(b=0;b\u003Ca.length;b++){var c=a[b].substr(0,a[b].indexOf(\"\\x3d\"));var e=a[b].substr(a[b].indexOf(\"\\x3d\")+1);c=c.replace(\/^\\s+|\\s+$\/g,\"\");if(c==d)return unescape(e)}return\"0\"};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":67
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar siteType=\"desktop\"===",["escape",["macro",21],8,16],"?\"d\":\"m\",accountChannel;switch(",["escape",["macro",48],8,16],"){case \"SE\":accountChannel=4287;break;case \"FI\":accountChannel=4286}window.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:accountChannel},{event:\"setHashedEmail\",email:",["escape",["macro",67],8,16],"},{event:\"setSiteType\",type:siteType},{event:\"viewItem\",item:",["escape",["macro",53],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar dedupVal=cr_getCookie(\"crtg_dd\"),siteType=\"desktop\"===",["escape",["macro",21],8,16],"?\"d\":\"m\",accountChannel;switch(",["escape",["macro",48],8,16],"){case \"SE\":accountChannel=4287;break;case \"FI\":accountChannel=4286}window.criteo_q=window.criteo_q||[];\nwindow.criteo_q.push({event:\"setAccount\",account:accountChannel},{event:\"setHashedEmail\",email:",["escape",["macro",67],8,16],"},{event:\"setSiteType\",type:siteType},{event:\"trackTransaction\",id:",["escape",["macro",52],8,16],",deduplication:dedupVal,item:function(){for(var b=[],a=0;a\u003C",["escape",["macro",3],8,16],".length;++a){var c=parseFloat(",["escape",["macro",3],8,16],"[a].amount.replace(\/,\/,\".\"));b.push({id:",["escape",["macro",3],8,16],"[a].productId,price:c,quantity:",["escape",["macro",3],8,16],"[a].quantity})}return b}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":69
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar pl=[],siteType=\"desktop\"===",["escape",["macro",21],8,16],"?\"d\":\"m\",accountChannel;switch(",["escape",["macro",48],8,16],"){case \"SE\":accountChannel=4287;break;case \"FI\":accountChannel=4286}for(var i=0;i\u003CjQuery(\".product-list .product\").slice(0,3).length;++i)pl.push(jQuery(\".product-list .product .product-id\").slice(i,i+1).val());window.criteo_q=window.criteo_q||[];\nwindow.criteo_q.push({event:\"setAccount\",account:accountChannel},{event:\"setHashedEmail\",email:",["escape",["macro",67],8,16],"},{event:\"setSiteType\",type:siteType},{event:\"viewList\",item:pl});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar siteType=\"desktop\"===",["escape",["macro",21],8,16],"?\"d\":\"m\",accountChannel;switch(",["escape",["macro",48],8,16],"){case \"SE\":accountChannel=4287;break;case \"FI\":accountChannel=4286}window.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:accountChannel},{event:\"setHashedEmail\",email:",["escape",["macro",67],8,16],"},{event:\"setSiteType\",type:siteType},{event:\"viewHome\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":71
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar siteType=\"desktop\"===",["escape",["macro",21],8,16],"?\"d\":\"m\",accountChannel;switch(",["escape",["macro",48],8,16],"){case \"SE\":accountChannel=4287;break;case \"FI\":accountChannel=4286}window.criteo_q=window.criteo_q||[];\nwindow.criteo_q.push({event:\"setAccount\",account:accountChannel},{event:\"setHashedEmail\",email:",["escape",["macro",67],8,16],"},{event:\"setSiteType\",type:siteType},{event:\"viewBasket\",item:function(){for(var b=[],a=0;a\u003C",["escape",["macro",3],8,16],".length;++a){var c=parseFloat(",["escape",["macro",3],8,16],"[a].amount.replace(\/,\/,\".\"));b.push({id:",["escape",["macro",3],8,16],"[a].productId,price:c,quantity:",["escape",["macro",3],8,16],"[a].quantity})}return b}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":72
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar ccs_cc_args=ccs_cc_args||[];ccs_cc_args.push([\"cpn\",",["escape",["macro",53],8,16],"]);ccs_cc_args.push([\"mf\",",["escape",["macro",49],8,16],"]);ccs_cc_args.push([\"upcean\",",["escape",["macro",68],8,16],"]);ccs_cc_args.push([\"lang\",cdonNS.languageCode]);ccs_cc_args.push([\"market\",",["escape",["macro",48],8,16],"]);\n(function(){if(0\u003CjQuery('head script[src\\x3d\"http:\/\/cdn.cnetcontent.com\/jsc\/h.js\"]').length)return console.log(\"script already exists\"),!1;var a=ccs_cc_args;a.push([\"_SKey\",\"9862597b\"]);a.push([\"_ZoneId\",\"e649842b90\"]);a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"cdn.cnetcontent.com\/jsc\/h.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();jQuery(document).ready(function(a){a(\".main-content-container\").append('\\x3cdiv id\\x3d\"cnet-wrapper\"\\x3e\\x3cdiv id\\x3d\"ccs-logos\"\\x3e\\x3c\/div\\x3e\\x3cdiv id\\x3d\"ccs-product-fiche\"\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e')});\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar ccs_cc_args=ccs_cc_args||[];ccs_cc_args.push([\"cpn\",",["escape",["macro",53],8,16],"]);ccs_cc_args.push([\"mf\",",["escape",["macro",49],8,16],"]);ccs_cc_args.push([\"upcean\",",["escape",["macro",68],8,16],"]);ccs_cc_args.push([\"lang\",cdonNS.languageCode]);ccs_cc_args.push([\"market\",",["escape",["macro",48],8,16],"]);\n(function(){var a=ccs_cc_args;a.push([\"_SKey\",\"9862597b\"]);a.push([\"_ZoneId\",\"07b24f0a7b\"]);a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"cdn.cnetcontent.com\/jsc\/h.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction checkNewsletterSubscribtion(){jQuery(\"form .info-box.success\").length\u0026\u0026dataLayer.push({event:\"subscribedToNewsletter\"})}checkNewsletterSubscribtion();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":89
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"===typeof fbq\u0026\u0026(!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\"),fbq(\"init\",\"1465408613675168\"),fbq(\"track\",\"PageView\"));\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=1465408613675168\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":93
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{content_ids:[",["escape",["macro",53],8,16],"],content_type:\"product\",value:",["escape",["macro",64],8,16],",currency:",["escape",["macro",56],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":94
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\",{content_ids:[",["escape",["macro",10],8,16],"],content_type:\"product\",value:",["escape",["macro",11],8,16],",currency:",["escape",["macro",56],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":95
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efor(var productArray=[],i=0;i\u003C",["escape",["macro",3],8,16],".length;i++)productArray.push(",["escape",["macro",3],8,16],"[i].productId);fbq(\"track\",\"Purchase\",{content_ids:productArray,content_type:\"product\",value:",["escape",["macro",55],8,16],",currency:",["escape",["macro",56],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":96
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar transactionData=",["escape",["macro",69],8,16],",transactionObject={ecommerce:transactionData};console.log(\"TRANSACTION DATA : \",transactionObject);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":98
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.ecommerce_products=transactionData.purchase.products;var ccs_cc_args=ccs_cc_args||[];(function(){var a=ccs_cc_args;a.push([\"_SKey\",\"9862597b\"]);a.push([\"_ZoneId\",\"7b65e7a987\"]);a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"cdn.cnetcontent.com\/jsc\/h.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":99
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar marketId=\"\";switch(",["escape",["macro",48],8,16],"){case \"SE\":marketId=3208801;break;case \"DK\":marketId=12999413;break;case \"NO\":marketId=3310801;break;case \"FI\":marketId=14068113}for(var productArray=[],i=0;i\u003C",["escape",["macro",3],8,16],".length;i++)console.log(",["escape",["macro",3],8,16],"[i]),productArray.push({productname:\"\",productid:\"",["escape",["macro",3],7],"[i].productId\",svn1:\"",["escape",["macro",3],7],"[i].quantity\",svn2:\"",["escape",["macro",3],7],"[i].amount\"});\nvar _adftrack={pm:343548,divider:encodeURIComponent(\"|\"),comid:12999413,pagename:encodeURIComponent(\"\"+marketId+\"|sale\"),order:{sales:\"",["escape",["macro",51],7],"\",orderid:\"",["escape",["macro",52],7],"\",sv1:\"",["escape",["macro",48],7],"\",itms:productArray}};(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/s.kk-resources.com\/s.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":108
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar _fo=_fo||[];_fo.push([\"orderTotal\",\"",["escape",["macro",55],7],"\"]);_fo.push([\"orderId\",\"",["escape",["macro",52],7],"\"]);\u003C\/script\u003E\n\u003Cscript async=\"async\" type=\"text\/gtmscript\" data-gtmsrc=\"\/\/cdn.feedoptimise.com\/fo.js#854\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":109
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript async=\"async\" type=\"text\/gtmscript\" data-gtmsrc=\"\/\/cdn.feedoptimise.com\/fo.js#298\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":110
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$(\".icon-navigation__item a\").on(\"click\",function(){dataLayer.push({event:\"gaCustomEvent\",eventCategory:\"optimizeTracking\",eventAction:\"verticalBarIconClick\",eventLabel:$(this).attr(\"title\"),eventPage:document.location.pathname,eventInteraction:!1})});$(\"#main-nav-wrapper a\").on(\"click\",function(){dataLayer.push({event:\"gaCustomEvent\",eventCategory:\"optimizeTracking\",eventAction:\"mainMenuLinkClick\",eventLabel:$(this).text(),eventPage:document.location.pathname,eventInteraction:!1})});\n$(\".minors-2__minor a, .product a\").on(\"click\",function(){dataLayer.push({event:\"gaCustomEvent\",eventCategory:\"optimizeTracking\",eventAction:\"contentLinkClick\",eventLabel:\"\",eventPage:document.location.pathname,eventInteraction:!1})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":127
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efor(var items=document.querySelectorAll(\".extended-cart-wrapper .slick-slide .product-buy\"),i=0;i\u003Citems.length;i++)items[i].onclick=function(){ga(\"send\",\"event\",\"Ecommerce\",\"Add To Cart Click\",\"Mobile Checkout Products\")};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":140
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evoid 0!==location.hostname\u0026\u0026void 0!==location.referrer\u0026\u0026-1==location.referrer.indexOf(location.hostname)\u0026\u0026ga(\"set\",\"dimension15\",",["escape",["macro",27],8,16],");\u003C\/script\u003E\t"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":148
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",70],
      "vtp_doubleClick":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list",["map","index","1","group",["macro",1]]],
      "vtp_gaSettings":["macro",16],
      "vtp_dimension":["list",["map","index","4","dimension",["macro",17]],["map","index","1","dimension",["macro",19]],["map","index","6","dimension",["macro",20]],["map","index","5","dimension",["macro",21]],["map","index","7","dimension",["macro",22]],["map","index","8","dimension",["macro",23]],["map","index","10","dimension",["macro",24]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":97
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"pageViewFired"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"^\/order\/confirm.*",
      "ignore_case":true
    },{
      "function":"_sw",
      "arg0":["macro",14],
      "arg1":"\/checkout"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"ecom_impressions"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"productClick"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"ecom_menu_banner_promotions"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"ecom_magic_banner_impressions"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"promotionClick"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"checkoutPaymentOption"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"addToCart"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"removeFromCart"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"filterClicked"
    },{
      "function":"_re",
      "arg0":["macro",29],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"newsletter-unsubscribe"
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"dev\\.|test\\.",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"\/newsletter-unsubscribe"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"\/tracking\/"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"\/newsletter-unsubscribe"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"fireRmktTag_DK"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"fireRmktTag_NO"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"fireRmktTag_FI"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gaCustomEvent"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"checkoutLoginOption"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gtm.pageError"
    },{
      "function":"_eq",
      "arg0":["macro",44],
      "arg1":"new"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"transactionChecked"
    },{
      "function":"_re",
      "arg0":["macro",46],
      "arg1":"^\\s+$|^$|general|bundle",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"productpage"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"startpage"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"new"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"subscribedToNewsletter"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"^\/search*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"current"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"active"
    },{
      "function":"_eq",
      "arg0":["macro",54],
      "arg1":"FI"
    },{
      "function":"_cn",
      "arg0":["macro",54],
      "arg1":"NO"
    },{
      "function":"_cn",
      "arg0":["macro",54],
      "arg1":"DK"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"^\/checkout\/confirm.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"checkoutPageReady"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",57],
      "arg1":"(^$|((^|,)123166_237($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",58],
      "arg1":"null"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"\/"
    },{
      "function":"_sw",
      "arg0":["macro",14],
      "arg1":"\/order"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"\/checkout\/"
    },{
      "function":"_sw",
      "arg0":["macro",14],
      "arg1":"\/search"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",59],
      "arg1":"null"
    },{
      "function":"_css",
      "arg0":["macro",60],
      "arg1":".delivery-time a"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",57],
      "arg1":"(^$|((^|,)123166_280($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",60],
      "arg1":"a#product-review-add"
    },{
      "function":"_re",
      "arg0":["macro",57],
      "arg1":"(^$|((^|,)123166_281($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",60],
      "arg1":".sitelist-wrapper .sitelist-channel-list a"
    },{
      "function":"_re",
      "arg0":["macro",57],
      "arg1":"(^$|((^|,)123166_284($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",60],
      "arg1":"#delivered-by__tooltip a"
    },{
      "function":"_re",
      "arg0":["macro",57],
      "arg1":"(^$|((^|,)123166_285($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",60],
      "arg1":".back-to-search-result a"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gtm.click"
    },{
      "function":"_css",
      "arg0":["macro",60],
      "arg1":"ul#breadcrumb a"
    },{
      "function":"_re",
      "arg0":["macro",57],
      "arg1":"(^$|((^|,)123166_287($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",60],
      "arg1":"a#product-review-link"
    },{
      "function":"_re",
      "arg0":["macro",57],
      "arg1":"(^$|((^|,)123166_288($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",60],
      "arg1":"#part-payment-info-popup a"
    },{
      "function":"_re",
      "arg0":["macro",57],
      "arg1":"(^$|((^|,)123166_289($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",60],
      "arg1":"#product-data .tab-wrapper #tabs a"
    },{
      "function":"_re",
      "arg0":["macro",57],
      "arg1":"(^$|((^|,)123166_290($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",60],
      "arg1":".social-media__share-wrapper a"
    },{
      "function":"_re",
      "arg0":["macro",57],
      "arg1":"(^$|((^|,)123166_282($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",60],
      "arg1":".tip-a-friend-button"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"\/order\/confirm"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"\/checkout\/confirm"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"\/search"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"checkoutPaymentOption"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"cdon.se\/sonic\/tester\/fullsize"
    },{
      "function":"_eq",
      "arg0":["macro",54],
      "arg1":"NO"
    },{
      "function":"_eq",
      "arg0":["macro",54],
      "arg1":"GB"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"^\/order\/checkout.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"games root"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"electronics"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"toy"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"home electronics (document)"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"household appliances (document)"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"^\/checkout.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",47],
      "arg1":"7d02e5f10872acd823bf6c8dc0367df4"
    },{
      "function":"_eq",
      "arg0":["macro",47],
      "arg1":"af3d62ed0d22de026f4f75f8b22dc8f6"
    },{
      "function":"_eq",
      "arg0":["macro",47],
      "arg1":"bfde33edf7c9077482b92b4756b95c37"
    },{
      "function":"_eq",
      "arg0":["macro",47],
      "arg1":"85cc7f5fc28ebac370e733ae8347fc98"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"bundle"
    },{
      "function":"_eq",
      "arg0":["macro",54],
      "arg1":"DK"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"^\/checkout\/confirm.*"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"^\/.*-(p)?\\d{8}",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"movie"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"music"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"homeandgarden"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"outdoor"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"sportsandleisure"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"clothing"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"shoes"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"bundle"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"personalcare"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"beauty"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"2900"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"\/newsletter"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"purchase"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"desktop"
    }],
  "rules":[
    [["if",0],["add",0,26,27,28,29,30,31,61,65,73,84,44,45,46,47,48,49,50,51,52,53,54,55,56]],
    [["if",1],["add",0]],
    [["if",4],["add",1]],
    [["if",5],["add",2]],
    [["if",6],["add",3]],
    [["if",7],["add",4]],
    [["if",8],["add",5]],
    [["if",9],["add",6]],
    [["if",10],["add",7,20,75]],
    [["if",11],["add",8]],
    [["if",12],["add",9]],
    [["if",0,13],["unless",14,15],["add",10,58]],
    [["if",21],["add",11]],
    [["if",22],["add",12]],
    [["if",23],["add",13]],
    [["if",24],["add",14]],
    [["if",25],["add",15]],
    [["if",26],["add",16]],
    [["if",27,28],["add",17,19,25]],
    [["if",30],["unless",29],["add",18,68]],
    [["if",34],["add",21]],
    [["if",30,31],["add",22,66,74,81],["block",18,68]],
    [["if",30,35],["add",23,68]],
    [["if",30,32],["add",24,69,82],["block",18,68]],
    [["if",41,42],["add",32,33,34,35,57,67,76,78,79,80]],
    [["if",0,41],["add",32,33,35,60,64]],
    [["if",0,2],["add",34,57,60,64,67,76,78,79,80],["block",0]],
    [["if",0,38],["add",36],["block",26]],
    [["if",0,39],["add",37],["block",26]],
    [["if",0,40],["add",38],["block",26]],
    [["if",43,44],["add",39]],
    [["if",45,50],["unless",46,47,48,49],["add",40]],
    [["if",50],["unless",49,51],["add",41]],
    [["if",52,53,54],["add",42]],
    [["if",53,55,56],["add",42]],
    [["if",53,57,58],["add",42]],
    [["if",53,59,60],["add",42]],
    [["if",61,62],["add",42]],
    [["if",53,63,64],["add",42]],
    [["if",53,65,66],["add",42]],
    [["if",53,67,68],["add",42]],
    [["if",53,69,70],["add",42]],
    [["if",53,71,72],["add",43]],
    [["if",62,73],["add",43]],
    [["if",0],["unless",74,75,76],["add",59]],
    [["if",9,77],["add",62]],
    [["if",0,78],["add",63]],
    [["if",0,81],["add",64,70]],
    [["if",30,82],["add",64],["block",71]],
    [["if",30,83],["add",64]],
    [["if",30,84],["add",64],["block",71]],
    [["if",30,85],["add",64]],
    [["if",30,86],["add",64]],
    [["if",0,87],["unless",41],["add",64]],
    [["if",42,87],["unless",94],["add",70]],
    [["if",30,95],["add",71]],
    [["if",0,107],["add",72]],
    [["if",108],["add",77]],
    [["if",50],["add",83]],
    [["if",0,3],["block",0]],
    [["if",16,17],["block",10,11,12,13,18,19,20,21,22,23,24,25,26,32,33,35,36,37,38,58,59,60,64,65,66,67,68,69,70,72,73,74,75,76,78,79]],
    [["if",0,18,19,20],["block",10,11,12,13]],
    [["if",28,33],["block",19]],
    [["if",28,36],["block",25]],
    [["if",28,37],["block",25]],
    [["if",17,79],["block",65,66,67,68,69,70]],
    [["if",17,80],["block",64,65,66,67,68,69,70,71,78]],
    [["if",0,88],["block",64]],
    [["if",0,89],["block",64]],
    [["if",0,90],["block",64]],
    [["if",0,91],["block",64]],
    [["if",30,92],["block",64]],
    [["if",17,93],["block",65,66,67,68,69,70]],
    [["if",30,96],["block",71]],
    [["if",30,97],["block",71]],
    [["if",30,98],["block",71]],
    [["if",30,99],["block",71]],
    [["if",30,100],["block",71]],
    [["if",30,101],["block",71]],
    [["if",30,102],["block",71]],
    [["if",30,103],["block",71]],
    [["if",30,104],["block",71]],
    [["if",30,105],["block",71]],
    [["if",30,106],["block",71]],
    [["if",0,109],["block",82]]]
},
"runtime":[
[],[]
]


};
var aa,ca=this,da=/^[\w+/_-]+[=]{0,2}$/,ea=null,fa=function(a,b){function c(){}c.prototype=b.prototype;a.Xg=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Gg=function(d,e,g){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[e].apply(d,h)}};var ha=function(){},ia=function(a){return"function"==typeof a},ja=function(a){return"string"==typeof a},ka=function(a){return"number"==typeof a&&!isNaN(a)},la=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},ma=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},oa=function(a,b){if(a&&la(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},pa=function(a,b){if(!ka(a)||
!ka(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},qa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},ra=function(a){return Math.round(Number(a))||0},sa=function(a){return"false"==String(a).toLowerCase()?!1:!!a},ta=function(a){var b=[];if(la(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},ua=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},va=function(){return(new Date).getTime()},wa=function(){this.prefix="gtm.";this.values=
{}};wa.prototype.set=function(a,b){this.values[this.prefix+a]=b};wa.prototype.get=function(a){return this.values[this.prefix+a]};wa.prototype.contains=function(a){return void 0!==this.get(a)};
var xa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},ya=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},za=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Aa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ba=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ca=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Da=function(a){if(null==a)return String(a);var b=Ca.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ea=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Fa=function(a){if(!a||"object"!=Da(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ea(a,"constructor")&&!Ea(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ea(a,b)},Ga=function(a,b){var c=b||("array"==Da(a)?[]:{}),d;for(d in a)if(Ea(a,d)){var e=a[d];"array"==Da(e)?("array"!=Da(c[d])&&(c[d]=[]),c[d]=Ga(e,c[d])):Fa(e)?(Fa(c[d])||(c[d]={}),c[d]=Ga(e,c[d])):c[d]=e}return c};var f=window,u=document,Ha=navigator,Ia=u.currentScript&&u.currentScript.src,Ja=function(a,b){var c=f[a];f[a]=void 0===c?b:c;return f[a]},Ka=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},La=function(a,b,c){var d=u.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Ka(d,b);c&&(d.onerror=c);var e;if(null===ea)b:{var g=ca.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&da.test(k)){ea=k;break b}}ea=""}e=ea;e&&d.setAttribute("nonce",e);var l=u.getElementsByTagName("script")[0]||u.body||u.head;l.parentNode.insertBefore(d,l);return d},Ma=function(){if(Ia){var a=Ia.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Na=function(a,b){var c=u.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=u.body&&u.body.lastChild||
u.body||u.head;d.parentNode.insertBefore(c,d);Ka(c,b);void 0!==a&&(c.src=a);return c},Oa=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Pa=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Qa=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},z=function(a){f.setTimeout(a,0)},Sa=function(a){var b=
u.getElementById(a);if(b&&Ra(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(Ra(document.all[a][c],"id")==a)return document.all[a][c];return b},Ra=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Ta=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Ua=function(a){var b=u.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=
[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Wa=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;g=g.parentElement}return null};var Xa=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Ya=/:[0-9]+$/,Za=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},bb=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=$a(a.protocol)||$a(f.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:f.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||f.location.hostname).replace(Ya,"").toLowerCase());var g=b,h,k=$a(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=ab(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(Ya,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":h="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=h.split("/");0<=
ma(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=Za(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},$a=function(a){return a?a.replace(":","").toLowerCase():""},ab=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},cb=function(a){var b=u.createElement("a");
a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace(Ya,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var db=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},hb=function(a,b,c,d){var e=eb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=fb(e,function(g){return g.yb},b);if(1===e.length)return e[0].id;e=fb(e,function(g){return g.Ta},c);return e[0]?e[0].id:void 0}};
function ib(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=db(b,e).indexOf(c)}
var lb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var v=jb(),x=0;x<v.length;++x){var y="none"!=v[x]?v[x]:void 0;if(!kb(y,t)&&ib(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!kb(p,t)&&ib(m,a,l)}return k};function fb(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function eb(a,b){for(var c=[],d=db(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),yb:1*k[0]||1,Ta:1*k[1]||1}))}}return c}
var mb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,nb=/(^|\.)doubleclick\.net$/i,kb=function(a,b){return nb.test(document.location.hostname)||"/"===b&&mb.test(a)},jb=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var ob=[],pb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},qb=function(a){return pb[a]},sb=/[\x00\x22\x26\x27\x3c\x3e]/g;var wb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,xb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},yb=function(a){return xb[a]};ob[7]=function(a){return String(a).replace(wb,yb)};
ob[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(wb,yb)+"'"}};var Fb=/['()]/g,Gb=function(a){return"%"+a.charCodeAt(0).toString(16)};ob[12]=function(a){var b=
encodeURIComponent(String(a));Fb.lastIndex=0;return Fb.test(b)?b.replace(Fb,Gb):b};var Hb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Ib={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Jb=function(a){return Ib[a]};ob[16]=function(a){return a};var Lb=[],Mb=[],Nb=[],Ob=[],Pb=[],Qb={},Rb,Sb,Tb,Ub=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Vb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Qb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Qb[c](e):(void 0)(c,e,b)},Xb=function(a,b,c,d){c=c||[];d=d||ha;var e={},g;for(g in a)a.hasOwnProperty(g)&&(e[g]=Wb(a[g],b,
c,d));return e},Yb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Qb[b];return c?c.b||0:0},Wb=function(a,b,c,d){if(la(a)){var e;switch(a[0]){case "function_id":return a[1];case "list":e=[];for(var g=1;g<a.length;g++)e.push(Wb(a[g],b,c,d));return e;case "macro":var h=a[1];if(c[h])return;var k=Lb[h];if(!k||b(k))return;c[h]=!0;try{var l=Xb(k,b,c,d);e=Vb(l,d);Tb&&(e=Tb.ff(e,l))}catch(y){d(y,h),e=!1}c[h]=!1;return e;case "map":e={};for(var m=1;m<a.length;m+=
2)e[Wb(a[m],b,c,d)]=Wb(a[m+1],b,c,d);return e;case "template":e=[];for(var n=!1,p=1;p<a.length;p++){var t=Wb(a[p],b,c,d);Sb&&(n=n||t===Sb.ob);e.push(t)}return Sb&&n?Sb.kf(e):e.join("");case "escape":e=Wb(a[1],b,c,d);if(Sb&&la(a[1])&&"macro"===a[1][0]&&Sb.Nf(a))return Sb.Yf(e);e=String(e);for(var q=2;q<a.length;q++)ob[a[q]]&&(e=ob[a[q]](e));return e;case "tag":var r=a[1];if(!Ob[r])throw Error("Unable to resolve tag reference "+r+".");return e={wd:a[2],index:r};case "zb":var v={arg0:a[2],arg1:a[3],
ignore_case:a[5]};v["function"]=a[1];var x=Zb(v,b,c,d);a[4]&&(x=!x);return x;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Zb=function(a,b,c,d){try{return Rb(Xb(a,b,c,d))}catch(e){JSON.stringify(a)}return null};var $b=null,cc=function(a,b){function c(t){for(var q=0;q<t.length;q++)e[t[q]]=!0}var d=[],e=[];$b=ac(a,b||function(){});for(var g=0;g<Mb.length;g++){var h=Mb[g],k=bc(h);if(k){for(var l=h.add||[],m=0;m<l.length;m++)d[l[m]]=!0;c(h.block||[])}else null===k&&c(h.block||[])}for(var n=[],p=0;p<Ob.length;p++)d[p]&&!e[p]&&(n[p]=!0);return n},bc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=$b(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=$b(e[g]);if(null===
h)return null;if(h)return!1}return!0},ac=function(a,b){var c=[];return function(d){void 0===c[d]&&(c[d]=Zb(Nb[d],a,void 0,b));return c[d]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var dc,ec=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.Se&&(l["fix_"+m]=!0),l.xd=l.xd||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=p.startTag();
if(q){var r=k.slice(q.length);if(r.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var v=r.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(v)return{tagName:q.tagName,D:q.D,content:v[1],length:v[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var r={};q[2].replace(e,function(v,x,y,w,D){var A=y||w||D||g.test(x)&&x||null,B=document.createElement("div");B.innerHTML=A;r[x]=B.textContent||B.innerText||A});return{tagName:q[1],D:r,Ya:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},t=function(){for(var q in n)if(n[q].test(k)){var r=p[q]();return r?(r.type=r.type||q,r.text=k.substr(0,r.length),k=k.slice(r.length),r):null}};l.xd&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,r=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.Id=function(){return this[this.length-1]};v.xc=function(B){var C=this.Id();return C&&C.tagName&&C.tagName.toUpperCase()===B.toUpperCase()};v.ef=
function(B){for(var C=0,H;H=this[C];C++)if(H.tagName===B)return!0;return!1};var x=function(B){B&&"startTag"===B.type&&(B.Ya=q.test(B.tagName)||B.Ya);return B},y=t,w=function(){k="</"+v.pop().tagName+">"+k},D={startTag:function(B){var C=B.tagName;"TR"===C.toUpperCase()&&v.xc("TABLE")?(k="<TBODY>"+k,A()):l.Lg&&r.test(C)&&v.ef(C)?v.xc(C)?w():(k="</"+B.tagName+">"+k,A()):B.Ya||v.push(B)},endTag:function(B){v.Id()?l.vf&&!v.xc(B.tagName)?w():v.pop():l.vf&&(y(),A())}},A=function(){var B=k,C=x(y());k=B;if(C&&
D[C.type])D[C.type](C)};t=function(){A();return x(y())}}();return{append:function(q){k+=q},eg:t,Rg:function(q){for(var r;(r=t())&&(!q[r.type]||!1!==q[r.type](r)););},clear:function(){var q=k;k="";return q},Sg:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.Yg="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.Ug=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.Zg=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,p;for(p in m.D){var t=m.D[p];
n+=" "+p+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.Ya?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.Kg=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.Xe=a.Xe||!b[h]&&h;dc=a})();(function(){function a(){}function b(p){return void 0!==p&&null!==p}function c(p,t,q){var r,v=p&&p.length||0;for(r=0;r<v;r++)t.call(q,p[r],r)}function d(p,t,q){for(var r in p)p.hasOwnProperty(r)&&t.call(q,r,p[r])}function e(p,
t){d(t,function(q,r){p[q]=r});return p}function g(p,t){p=p||{};d(t,function(q,r){b(p[q])||(p[q]=r)});return p}function h(p){try{return m.call(p)}catch(q){var t=[];c(p,function(r){t.push(r)});return t}}var k={Ie:a,Je:a,Ke:a,Le:a,Te:a,Ue:function(p){return p},done:a,error:function(p){throw p;},ig:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function p(q,r,v){var x="data-ps-"+r;if(2===arguments.length){var y=q.getAttribute(x);return b(y)?String(y):y}b(v)&&""!==v?q.setAttribute(x,
v):q.removeAttribute(x)}function t(q,r){var v=q.ownerDocument;e(this,{root:q,options:r,Za:v.defaultView||v.parentWindow,xa:v,Db:dc("",{Se:!0}),bc:[q],Fc:"",Gc:v.createElement(q.nodeName),Xa:[],la:[]});p(this.Gc,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.la,arguments);for(var q;!this.xb&&this.la.length;)q=this.la.shift(),"function"===typeof q?this.af(q):this.Rc(q)};t.prototype.af=function(q){var r={type:"function",value:q.name||q.toString()};this.Cc(r);q.call(this.Za,this.xa);this.Md(r)};
t.prototype.Rc=function(q){this.Db.append(q);for(var r,v=[],x,y;(r=this.Db.eg())&&!(x=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("script"):!1)&&!(y=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("style"):!1);)v.push(r);this.zg(v);x&&this.Bf(r);y&&this.Cf(r)};t.prototype.zg=function(q){var r=this.Ye(q);r.qd&&(r.oc=this.Fc+r.qd,this.Fc+=r.cg,this.Gc.innerHTML=r.oc,this.wg())};t.prototype.Ye=function(q){var r=this.bc.length,v=[],x=[],y=[];c(q,function(w){v.push(w.text);if(w.D){if(!/^noscript$/i.test(w.tagName)){var D=
r++;x.push(w.text.replace(/(\/?>)/," data-ps-id="+D+" $1"));"ps-script"!==w.D.id&&"ps-style"!==w.D.id&&y.push("atomicTag"===w.type?"":"<"+w.tagName+" data-ps-proxyof="+D+(w.Ya?" />":">"))}}else x.push(w.text),y.push("endTag"===w.type?w.text:"")});return{$g:q,raw:v.join(""),qd:x.join(""),cg:y.join("")}};t.prototype.wg=function(){for(var q,r=[this.Gc];b(q=r.shift());){var v=1===q.nodeType;if(!v||!p(q,"proxyof")){v&&(this.bc[p(q,"id")]=q,p(q,"id",null));var x=q.parentNode&&p(q.parentNode,"proxyof");
x&&this.bc[x].appendChild(q)}r.unshift.apply(r,h(q.childNodes))}};t.prototype.Bf=function(q){var r=this.Db.clear();r&&this.la.unshift(r);q.src=q.D.src||q.D.Dg;q.src&&this.Xa.length?this.xb=q:this.Cc(q);var v=this;this.yg(q,function(){v.Md(q)})};t.prototype.Cf=function(q){var r=this.Db.clear();r&&this.la.unshift(r);q.type=q.D.type||q.D.Eg||"text/css";this.Ag(q);r&&this.write()};t.prototype.Ag=function(q){var r=this.$e(q);this.Lf(r);q.content&&(r.styleSheet&&!r.sheet?r.styleSheet.cssText=q.content:
r.appendChild(this.xa.createTextNode(q.content)))};t.prototype.$e=function(q){var r=this.xa.createElement(q.tagName);r.setAttribute("type",q.type);d(q.D,function(v,x){r.setAttribute(v,x)});return r};t.prototype.Lf=function(q){this.Rc('<span id="ps-style"/>');var r=this.xa.getElementById("ps-style");r.parentNode.replaceChild(q,r)};t.prototype.Cc=function(q){q.Uf=this.la;this.la=[];this.Xa.unshift(q)};t.prototype.Md=function(q){q!==this.Xa[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Xa.shift(),this.write.apply(this,q.Uf),!this.Xa.length&&this.xb&&(this.Cc(this.xb),this.xb=null))};t.prototype.yg=function(q,r){var v=this.Ze(q),x=this.pg(v),y=this.options.Ie;q.src&&(v.src=q.src,this.mg(v,x?y:function(){r();y()}));try{this.Kf(v),q.src&&!x||r()}catch(w){this.options.error(w),r()}};t.prototype.Ze=function(q){var r=this.xa.createElement(q.tagName);d(q.D,function(v,x){r.setAttribute(v,x)});q.content&&(r.text=q.content);return r};t.prototype.Kf=function(q){this.Rc('<span id="ps-script"/>');
var r=this.xa.getElementById("ps-script");r.parentNode.replaceChild(q,r)};t.prototype.mg=function(q,r){function v(){q=q.onload=q.onreadystatechange=q.onerror=null}var x=this.options.error;e(q,{onload:function(){v();r()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(v(),r())},onerror:function(){var y={message:"remote script failed "+q.src};v();x(y);r()}})};t.prototype.pg=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.ig&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function p(){var x=r.shift(),y;x&&(y=x[x.length-1],y.Je(),x.stream=t.apply(null,x),y.Ke())}function t(x,y,w){function D(H){H=w.Ue(H);v.write(H);w.Le(H)}v=new n(x,w);v.id=q++;v.name=w.name||v.id;var A=x.ownerDocument,B={close:A.close,open:A.open,write:A.write,writeln:A.writeln};e(A,{close:a,open:a,write:function(){return D(h(arguments).join(""))},writeln:function(){return D(h(arguments).join("")+"\n")}});var C=v.Za.onerror||a;v.Za.onerror=function(H,N,R){w.error({Og:H+
" - "+N+":"+R});C.apply(v.Za,arguments)};v.write(y,function(){e(A,B);v.Za.onerror=C;w.done();v=null;p()});return v}var q=0,r=[],v=null;return e(function(x,y,w){"function"===typeof w&&(w={done:w});w=g(w,k);x=/^#/.test(x)?l.document.getElementById(x.substr(1)):x.Mg?x[0]:x;var D=[x,y,w];x.Xf={cancel:function(){D.stream?D.stream.abort():D[1]=a}};w.Te(D);r.push(D);v||p();return x.Xf},{streams:{},Qg:r,Fg:n})}();ec=l.postscribe}})();var pc={},qc=null,rc=Math.random();pc.m="GTM-8WLW";pc.sb="3i1";var sc="www.googletagmanager.com/gtm.js";var tc=sc,uc=null,vc=null,wc=null,xc="//www.googletagmanager.com/a?id="+pc.m+"&cv=393",yc={},zc={},Ac=function(){var a=qc.sequence||0;qc.sequence=a+1;return a};var E=function(a,b,c,d){return(2===Bc()||d||"http:"!=f.location.protocol?a:b)+c},Bc=function(){var a=Ma(),b;if(1===a)a:{var c=tc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=u.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Cc=!1;var Fc=function(){var a=function(b){return{toString:function(){return b}}};return{Vc:a("convert_case_to"),Wc:a("convert_false_to"),Xc:a("convert_null_to"),Yc:a("convert_true_to"),Zc:a("convert_undefined_to"),ra:a("function"),ye:a("instance_name"),ze:a("live_only"),Ae:a("malware_disabled"),Cg:a("original_vendor_template_id"),Be:a("once_per_event"),md:a("once_per_load"),nd:a("setup_tags"),Ce:a("tag_id"),od:a("teardown_tags")}}();var Gc={},Hc=function(a){Gc.GTM=Gc.GTM||[];Gc.GTM[a]=!0};
var Ic=function(){return"&tc="+Ob.filter(function(a){return a}).length},Rc=function(){Jc&&(f.clearTimeout(Jc),Jc=void 0);void 0===Kc||Lc[Kc]&&!Mc||(Nc[Kc]||Oc.Pf()||0>=Pc--?(Hc(1),Nc[Kc]=!0):(Oc.gg(),Oa(Qc()),Lc[Kc]=!0,Mc=""))},Qc=function(){var a=Kc;if(void 0===a)return"";for(var b,c=[],d=Gc.GTM||[],e=0;e<d.length;e++)d[e]&&(c[Math.floor(e/6)]^=1<<e%6);for(var g=0;g<c.length;g++)c[g]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(c[g]||0);b=c.join("");return[Sc,Lc[a]?"":
"&es=1",Tc[a],b?"&u="+b:"",Ic(),Mc,"&z=0"].join("")},Uc=function(){return[xc,"&v=3&t=t","&pid="+pa(),"&rv="+pc.sb].join("")},Vc="0.005000">Math.random(),Sc=Uc(),Wc=function(){Sc=Uc()},Lc={},Mc="",Kc=void 0,Tc={},Nc={},Jc=void 0,Oc=function(a,b){var c=0,d=0;return{Pf:function(){if(c<a)return!1;va()-d>=b&&(c=0);return c>=a},gg:function(){va()-d>=b&&(c=0);c++;d=va()}}}(2,1E3),Pc=1E3,Xc=function(a,b){if(Vc&&!Nc[a]&&Kc!==a){Rc();Kc=a;Mc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):
"*";Tc[a]="&e="+c+"&eid="+a;Jc||(Jc=f.setTimeout(Rc,500))}},Yc=function(a,b,c){if(Vc&&!Nc[a]&&b){a!==Kc&&(Rc(),Kc=a);var d=c+String(b[Fc.ra]||"").replace(/_/g,"");Mc=Mc?Mc+"."+d:"&tr="+d;Jc||(Jc=f.setTimeout(Rc,500));2022<=Qc().length&&Rc()}};var Zc=new wa,$c={},ad={},ed={set:function(a,b){Ga(bd(a,b),$c);cd()},get:function(a){return dd(a,2)},reset:function(){Zc=new wa;$c={};cd()}},dd=function(a,b){if(2!=b){var c=Zc.get(a);if(Vc){var d=fd(a);c!==d&&Hc(5)}return c}return fd(a)},fd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;
return e?g:hd(d)},hd=function(a){for(var b=$c,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var kd=function(a,b){ad.hasOwnProperty(a)||(Zc.set(a,b),Ga(bd(a,b),$c),cd())},bd=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},cd=function(a){qa(ad,function(b,c){Zc.set(b,c);Ga(bd(b,void 0),$c);Ga(bd(b,c),$c);a&&delete ad[b]})};var ld=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),md={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},nd={cl:["ecl"],customPixels:["customScripts","html"],ecl:["cl"],html:["customScripts"],
customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]};
var pd=function(a){var b=dd("gtm.whitelist");b&&Hc(9);var c=b&&Ba(ta(b),md),d=dd("gtm.blacklist");d||(d=dd("tagTypeBlacklist"))&&Hc(3);d?Hc(8):d=[];
od()&&(d=ta(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=ma(ta(d),"google")&&Hc(2);var e=d&&Ba(ta(d),nd),g={};return function(h){var k=h&&h[Fc.ra];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=zc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>ma(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>ma(c,l[p])){Hc(11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=ma(e,
k);if(q)t=q;else{var r;b:{for(var v=l||[],x=new wa,y=0;y<e.length;y++)x.set(e[y],!0);for(var w=0;w<v.length;w++)if(x.get(v[w])){r=!0;break b}r=!1}var D=r;D&&Hc(10);t=D}}return g[k]=!m||t}},od=function(){return ld.test(f.location&&f.location.hostname)};var rd=function(a){return function(b,c){if(ka(c))a(b,c);else{b instanceof qd||(b=new qd(b));var d=b;c&&d.jc.push(c);throw d;}}},qd=function(a){this.Tf=a;this.jc=[]};fa(qd,Error);var sd={ff:function(a,b){b[Fc.Vc]&&"string"===typeof a&&(a=1==b[Fc.Vc]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Fc.Xc)&&null===a&&(a=b[Fc.Xc]);b.hasOwnProperty(Fc.Zc)&&void 0===a&&(a=b[Fc.Zc]);b.hasOwnProperty(Fc.Yc)&&!0===a&&(a=b[Fc.Yc]);b.hasOwnProperty(Fc.Wc)&&!1===a&&(a=b[Fc.Wc]);return a}};var td={active:!0,isWhitelisted:function(){return!0}},ud=function(a){var b=qc.zones;!b&&a&&(b=qc.zones=a());return b};var vd=!1,wd=0,xd=[];function yd(a){if(!vd){var b=u.createEventObject,c="complete"==u.readyState,d="interactive"==u.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){vd=!0;for(var e=0;e<xd.length;e++)z(xd[e])}xd.push=function(){for(var g=0;g<arguments.length;g++)z(arguments[g]);return 0}}}function zd(){if(!vd&&140>wd){wd++;try{u.documentElement.doScroll("left"),yd()}catch(a){f.setTimeout(zd,50)}}}var Ad=function(a){vd?a():xd.push(a)};var Bd=function(){function a(d){return!ka(d)||0>d?0:d}if(!qc._li&&f.performance&&f.performance.timing){var b=f.performance.timing.navigationStart,c=ka(ed.get("gtm.start"))?ed.get("gtm.start"):0;qc._li={cst:a(c-b),cbt:a(vc-b)}}};var Fd=!1,Gd=function(){return f.GoogleAnalyticsObject&&f[f.GoogleAnalyticsObject]},Hd=!1;var Id=function(a){f.GoogleAnalyticsObject||(f.GoogleAnalyticsObject=a||"ga");var b=f.GoogleAnalyticsObject;if(!f[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);f[b]=c}Bd();return f[b]},Jd=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Gd();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Ld=function(){},Kd=function(){return f.GoogleAnalyticsObject||"ga"},Md=!1;var Td=function(a){};
function Sd(a,b){a.containerId=pc.m;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function Ud(a,b,c,d,e){var g=Ob[a],h=Vd(a,b,c,d,e);if(!h)return null;var k=Wb(g[Fc.nd],d.da,[],ha);if(k&&k.length){var l=k[0];h=Ud(l.index,b,{I:h,O:1===l.wd?c.terminate:h,terminate:c.terminate},d,e)}return h}
function Vd(a,b,c,d,e){function g(){if(h[Fc.Ae])l();else{var y=Xb(h,d.da,[],rd(function(B){Hc(6);Td(B)})),w=!1;y.vtp_gtmOnSuccess=function(){if(!w){w=!0;Yc(d.id,Ob[a],"5");k()}};y.vtp_gtmOnFailure=function(){if(!w){w=!0;Yc(d.id,Ob[a],"6");l()}};y.vtp_gtmTagId=h.tag_id;Yc(d.id,h,"1");var D=
!1,A=function(B,C){if(!D){B instanceof qd||(B=new qd(B));var H=B;C&&H.jc.push(C);throw H;}Td(B);Yc(d.id,h,"7");w||(w=!0,l())};try{Vb(y,A)}catch(B){try{D=!0,A(B)}catch(C){}}}}
var h=Ob[a],k=c.I,l=c.O,m=c.terminate;if(d.da(h))return null;var n=Wb(h[Fc.od],d.da,[],ha);if(n&&n.length){var p=n[0],t=Ud(p.index,b,{I:k,O:l,terminate:m},d,e);if(!t)return null;k=t;l=2===p.wd?m:t}if(h[Fc.md]||h[Fc.Be]){var q=h[Fc.md]?Pb:b,r=k,v=l;if(!q[a]){g=ya(g);var x=Wd(a,q,g);k=x.I;l=x.O}return function(){q[a](r,v)}}return g}function Wd(a,b,c){var d=[],e=[];b[a]=Xd(d,e,c);return{I:function(){b[a]=Yd;for(var g=0;g<d.length;g++)d[g]()},O:function(){b[a]=Zd;for(var g=0;g<e.length;g++)e[g]()}}}
function Xd(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Yd(a){a()}function Zd(a,b){b()};function $d(a){var b=0,c=0,d=!1;return{add:function(){c++;return ya(function(){b++;d&&b>=c&&a()})},Qe:function(){d=!0;b>=c&&a()}}}var ce=function(a){for(var b=$d(a.callback),c=[],d=[],e=0;e<Ob.length;e++)if(a.Va[e]){var g=Ob[e];var h=b.add();try{var k=Ud(e,c,{I:h,O:h,terminate:h},a,e);k?d.push({Wd:e,b:Yb(g),uf:k}):(ae(e,a),h())}catch(m){h()}}b.Qe();d.sort(be);for(var l=0;l<d.length;l++)d[l].uf();return 0<d.length};
function be(a,b){var c,d=b.b,e=a.b;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.Wd,k=b.Wd;g=h>k?1:h<k?-1:0}return g}function ae(a,b){if(!Vc)return;var c=function(d){var e=b.da(Ob[d])?"3":"4",g=Wb(Ob[d][Fc.nd],b.da,[],ha);g&&g.length&&c(g[0].index);Yc(b.id,Ob[d],e);var h=Wb(Ob[d][Fc.od],b.da,[],ha);h&&h.length&&c(h[0].index)};c(a);}
var de=!1,ee=function(a,b,c,d){if("gtm.js"==b){if(de)return!1;de=!0}Xc(a,b);var e=pd(c),g={id:a,name:b,callback:d||ha,da:e,Va:[]};g.Va=cc(e,rd(function(n){Td(n)}));var h=ce(g);"gtm.js"!==b&&"gtm.sync"!==b||Ld();if(!h)return h;for(var k={__cl:!0,__ecl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},l=0;l<g.Va.length;l++)if(g.Va[l]){var m=
Ob[l];if(m&&!k[m[Fc.ra]])return!0}return!1};var F={Pb:"event_callback",Rb:"event_timeout"};var ge={};var he=/[A-Z]+/,ie=/\s/,je=function(a){if(ja(a)&&(a=ua(a),!ie.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(he.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],ca:d}}}}},le=function(a){for(var b={},c=0;c<a.length;++c){var d=je(a[c]);d&&(b[d.id]=d)}ke(b);var e=[];qa(b,function(g,h){e.push(h)});return e};
function ke(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.ca[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var me=null,ne={},oe={},pe,re=function(a,b){var c={event:a};b&&(c.eventModel=Ga(b),b[F.Pb]&&(c.eventCallback=b[F.Pb]),b[F.Rb]&&(c.eventTimeout=b[F.Rb]));return c};
var we={config:function(a){},event:function(a){var b=a[1];if(ja(b)&&!(3<a.length)){var c;if(2<
a.length){if(!Fa(a[2]))return;c=a[2]}var d=re(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];ge[b]||(ge[b]=[]);ge[b].push(c)}},set:function(a){var b;2==a.length&&Fa(a[1])?b=Ga(a[1]):3==a.length&&ja(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=Ga(b),b.event="gtag.set",b._clear=!0,b}},xe={policy:!0};var ye=function(){return!1};var Ee=function(a){if(De(a))return a;this.vg=a};Ee.prototype.Af=function(){return this.vg};var De=function(a){return!a||"object"!==Da(a)||Fa(a)?!1:"getUntrustedUpdateValue"in a};Ee.prototype.getUntrustedUpdateValue=Ee.prototype.Af;var Fe=!1,Ge=[];function He(){if(!Fe){Fe=!0;for(var a=0;a<Ge.length;a++)z(Ge[a])}}var Ie=function(a){Fe?z(a):Ge.push(a)};var Je=[],Ke=!1;function Le(a){var b=a.eventCallback,c=ya(function(){ia(b)&&z(function(){b(pc.m)})}),d=a.eventTimeout;d&&f.setTimeout(c,Number(d));return c}
var Me=function(a){return f["dataLayer"].push(a)},Oe=function(a){var b=a._clear;qa(a,function(g,h){"_clear"!==g&&(b&&kd(g,void 0),kd(g,h))});var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Ac(),a["gtm.uniqueEventId"]=d,kd("gtm.uniqueEventId",d));wc=c;var e=Ne(a);wc=null;if(!uc){uc=a["gtm.start"];}return e};
function Ne(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=qc.zones;d=e?e.checkState(pc.m,c):td;if(!d.active)return!1;var g=Le(a);return ee(c,b,d.isWhitelisted,g)?!0:!1}
var Pe=function(){for(var a=!1;!Ke&&0<Je.length;){Ke=!0;delete $c.eventModel;cd();var b=Je.shift();if(null!=b){var c=De(b);if(c){var d=b;b=De(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=dd(h,1);if(la(k)||Fa(k))k=Ga(k);ad[h]=k}}try{if(ia(b))try{b.call(ed)}catch(v){}else if(la(b)){var l=b;if(ja(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=dd(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&ja(b[0])){var r=we[b[0]];if(r&&(!c||!xe[b[0]])){b=r(b);break a}}b=void 0}if(!b){Ke=!1;continue}}a=Oe(b)||a}}finally{c&&cd(!0)}}Ke=!1}
return!a},Qe=function(){var a=Pe();try{var b=pc.m,c=f["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},Re=function(){var a=Ja("dataLayer",[]),b=Ja("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Ad(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Ie(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var d;
if(0<qc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Ee(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Je.push.apply(Je,d);if(300<this.length)for(Hc(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Pe()&&h};Je.push.apply(Je,a.slice(0));z(Qe)};var Te=function(a){return Se?u.querySelectorAll(a):null},Ue=function(a,b){if(!Se)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!u.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Ve=!1;if(u.querySelectorAll)try{var We=u.querySelectorAll(":root");We&&1==We.length&&We[0]==u.documentElement&&(Ve=!0)}catch(a){}var Se=Ve;var Xe;var tf={};tf.ob=new String("undefined");
var uf=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===tf.ob?b:a[d]);return c.join("")}};uf.prototype.toString=function(){return this.resolve("undefined")};uf.prototype.valueOf=uf.prototype.toString;tf.De=uf;tf.$b={};tf.kf=function(a){return new uf(a)};var vf={};tf.hg=function(a,b){var c=Ac();vf[c]=[a,b];return c};tf.td=function(a){var b=a?0:1;return function(c){var d=vf[c];if(d&&"function"===typeof d[b])d[b]();vf[c]=void 0}};tf.Nf=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};tf.Yf=function(a){if(a===tf.ob)return a;var b=Ac();tf.$b[b]=a;return'google_tag_manager["'+pc.m+'"].macro('+b+")"};tf.Rf=function(a,b,c){a instanceof tf.De&&(a=a.resolve(tf.hg(b,c)),b=ha);return{oc:a,I:b}};var wf=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||Ra(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return d},xf=function(a){qc.hasOwnProperty("autoEventsSettings")||(qc.autoEventsSettings={});var b=qc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},
yf=function(a,b,c){xf(a)[b]=c},zf=function(a,b,c,d){var e=xf(a),g=xa(e,b,d);e[b]=c(g)},Af=function(a,b,c){var d=xf(a);return xa(d,b,c)};var Bf=function(){for(var a=Ha.userAgent+(u.cookie||"")+(u.referrer||""),b=a.length,c=f.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(va()/1E3)].join(".")},Ef=function(a,b,c,d){var e=Cf(b);return hb(a,e,Df(c),d)},Cf=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Df=function(a){if(!a||
"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Ff(a,b){var c=""+Cf(a),d=Df(b);1<d&&(c+="-"+d);return c};var Gf=["1"],Hf={},Lf=function(a,b,c,d){var e=If(a);Hf[e]||Jf(e,b,c)||(Kf(e,Bf(),b,c,d),Jf(e,b,c))};function Kf(a,b,c,d,e){var g;g=["1",Ff(d,c),b].join(".");lb(a,g,c,d,0==e?void 0:new Date(va()+1E3*(void 0==e?7776E3:e)))}function Jf(a,b,c){var d=Ef(a,b,c,Gf);d&&(Hf[a]=d);return d}function If(a){return(a||"_gcl")+"_au"};var Mf=function(){for(var a=[],b=u.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Nc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Nc]||(g[a[h].Nc]=[]),g[a[h].Nc].push({timestamp:k[1],xf:k[2]}))}return g};function Nf(){for(var a=Of,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Pf(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Of,Qf,Rf=function(a){Of=Of||Pf();Qf=Qf||Nf();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(Of[l],Of[m],Of[n],Of[p])}return b.join("")},Sf=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Qf[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Of=Of||Pf();Qf=Qf||
Nf();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Tf;function Uf(a,b){if(!a||b===u.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}var Vf=function(){var a=Ja("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Wf=/(.*?)\*(.*?)\*(.*)/,Xf=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Yf=/^(?:www\.|m\.|amp\.)+/,Zf=/([^?#]+)(\?[^#]*)?(#.*)?/,$f=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,bg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Rf(String(d))))}var e=b.join("*");return["1",ag(e),e].join("*")},ag=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Tf)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Tf=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Tf[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},dg=function(){return function(a){var b=cb(f.location.href),c=b.search.replace("?",""),d=Za(c,"_gl",!0)||"";a.query=cg(d)||{};var e=bb(b,"fragment").match($f);a.fragment=cg(e&&e[3]||
"")||{}}},cg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=Wf.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===ag(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=Sf(t[q+1]);return p}}}}catch(r){}};
function eg(a,b,c){function d(m){var n=m,p=$f.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Zf.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function fg(a,b,c){for(var d={},e={},g=Vf().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Uf(k.domains,b)&&(k.fragment?za(e,k.callback()):za(d,k.callback()))}if(Aa(d)){var l=bg(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=u.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=eg(l,a.action);Xa.test(v)&&(a.action=v)}}}else gg(l,a,!1)}if(!c&&Aa(e)){var x=bg(e);gg(x,a,!0)}}function gg(a,b,c){if(b.href){var d=eg(a,b.href,void 0===c?!1:c);Xa.test(d)&&(b.href=d)}}
var hg=function(a){try{var b;a:{for(var c=a.target||a.srcElement||{},d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||fg(e,e.hostname,!1)}}catch(h){}},ig=function(a){try{var b=a.target||a.srcElement||{};if(b.action){var c=bb(cb(b.action),"host");fg(b,c,!0)}}catch(d){}},jg=function(a,b,c,d){var e=Vf();e.init||(Pa(u,"mousedown",hg),Pa(u,"keyup",hg),Pa(u,"submit",ig),e.init=!0);var g={callback:a,
domains:b,fragment:"fragment"===c,forms:!!d};Vf().decorators.push(g)},kg=function(){var a=u.location.hostname,b=Xf.exec(u.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(Yf,"")===e.replace(Yf,"")},lg=function(a,b){return!1===a?!1:a||b||kg()};var mg=/^\w+$/,ng=/^[\w-]+$/,og=/^~?[\w-]+$/,pg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function qg(a){return a&&"string"==typeof a&&a.match(mg)?a:"_gcl"}var sg=function(){var a=cb(f.location.href),b=bb(a,"query",!1,void 0,"gclid"),c=bb(a,"query",!1,void 0,"gclsrc"),d=bb(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Za(e,"gclid",void 0);c=c||Za(e,"gclsrc",void 0)}return rg(b,c,d)};
function rg(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(ng))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function tg(a,b,c){function d(p,t){var q=ug(p,e);q&&lb(q,t,h,g,l,!0)}b=b||{};var e=qg(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Jd?7776E3:b.Jd;c=c||va();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.bh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var ug=function(a,b){var c=pg[a];if(void 0!==c)return b+c},vg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function wg(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var xg=function(a,b,c,d,e){if(la(b)){var g=qg(e);jg(function(){for(var h={},k=0;k<a.length;++k){var l=ug(a[k],g);if(l){var m=db(l,u.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},yg=function(a){return a.filter(function(b){return og.test(b)})},zg=function(a,b){for(var c=qg(b&&b.prefix),d={},e=0;e<a.length;e++)pg[a[e]]&&(d[a[e]]=pg[a[e]]);qa(d,function(g,h){var k=db(c+h,u.cookie);if(k.length){var l=k[0],m=vg(l),n={};n[g]=[wg(l)];tg(n,b,m)}})};var Ag=/^\d+\.fls\.doubleclick\.net$/;function Bg(a){var b=cb(f.location.href),c=bb(b,"host",!1);if(c&&c.match(Ag)){var d=bb(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Cg(a,b){if("aw"==a||"dc"==a){var c=Bg("gcl"+a);if(c)return c.split(".")}var d=qg(b);if("_gcl"==d){var e;e=sg()[a]||[];if(0<e.length)return e}var g=ug(a,d),h;if(g){var k=[];if(u.cookie){var l=db(g,u.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=wg(l[m]);n&&-1===ma(k,n)&&k.push(n)}h=yg(k)}else h=k}else h=k}else h=[];return h}
var Dg=function(){var a=Bg("gac");if(a)return decodeURIComponent(a);var b=Mf(),c=[];qa(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].xf);g=yg(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Eg=function(a,b,c,d,e){Lf(b,c,d,e);var g=Hf[If(b)],h=sg().dc||[],k=!1;if(g&&0<h.length){var l=qc.joined_au=qc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Ha.sendBeacon&&Ha.sendBeacon(t)||Oa(t);k=l[m]=
!0}}k|=a;if(k&&g){var q=If(b),r=Hf[q];r&&Kf(q,r,c,d,e)}};var Fg;if(3===pc.sb.length)Fg="g";else{var Gg="G";Fg=Gg}
var Hg={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Fg},Ig=function(a){var b=pc.m.split("-"),c=b[0].toUpperCase(),d=Hg[c]||"i",e=a&&"GTM"===c?b[1]:"",g;if(3===pc.sb.length){var h=void 0;g="2"+(h||"w")}else g="";return g+d+pc.sb+e};
var Jg=function(a){return!(void 0===a||null===a||0===(a+"").length)},Kg=function(a,b){var c;if(2===b.L)return a("ord",pa(1E11,1E13)),!0;if(3===b.L)return a("ord","1"),a("num",pa(1E11,1E13)),!0;if(4===b.L)return Jg(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.L)c="1";else if(6===b.L)c=b.Hc;else return!1;Jg(c)&&a("qty",c);Jg(b.vb)&&a("cost",b.vb);Jg(b.transactionId)&&a("ord",b.transactionId);return!0},Lg=encodeURIComponent,Mg=function(a,b){function c(n,p,t){g.hasOwnProperty(n)||(p+="",e+=";"+n+"="+
(t?p:Lg(p)))}var d=a.kc,e=a.protocol;e+=a.Eb?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+Lg(d)+(";type="+Lg(a.nc))+(";cat="+Lg(a.Na));var g=a.nf||{};qa(g,function(n,p){e+=";"+Lg(n)+"="+Lg(p+"")});if(Kg(c,a)){Jg(a.Kb)&&c("u",a.Kb);Jg(a.Jb)&&c("tran",a.Jb);c("gtm",Ig());!1===a.Me&&c("npa","1");if(a.hc){var h=Cg("dc",a.wa);h&&h.length&&c("gcldc",h.join("."));var k=Cg("aw",a.wa);k&&k.length&&c("gclaw",k.join("."));var l=Dg();l&&c("gac",l);Lf(a.wa,void 0,a.hf,a.jf);
var m=Hf[If(a.wa)];m&&c("auiddc",m)}Jg(a.Dc)&&c("prd",a.Dc,!0);qa(a.Qc,function(n,p){c(n,p)});e+=b||"";Jg(a.Cb)&&c("~oref",a.Cb);a.Eb?Na(e+"?",a.I):Oa(e+"?",a.I,a.O)}else z(a.O)};var Pg=!!f.MutationObserver,Qg=void 0,Rg=function(a){if(!Qg){var b=function(){var c=u.body;if(c)if(Pg)(new MutationObserver(function(){for(var e=0;e<Qg.length;e++)z(Qg[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Pa(c,"DOMNodeInserted",function(){d||(d=!0,z(function(){d=!1;for(var e=0;e<Qg.length;e++)z(Qg[e])}))})}};Qg=[];u.body?b():z(b)}Qg.push(a)};
var Zg=function(){var a=u.body,b=u.documentElement||a&&a.parentElement,c,d;if(u.compatMode&&"BackCompat"!==u.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(g,h){return g&&h?Math.min(g,h):Math.max(g,h)};Hc(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},$g=function(a){var b=Zg(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},ah=function(a){if(u.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!f.getComputedStyle)return!0;var c=f.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-1)),g=Math.min(h,
g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=f.getComputedStyle(d,null))}return!1};var bh=[],ch=!(!f.IntersectionObserver||!f.IntersectionObserverEntry),dh=function(a,b,c){for(var d=new f.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var g=0;g<bh.length;g++)if(!bh[g])return bh[g]=d,g;return bh.push(d)-1},eh=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,height:0},n={boundingClientRect:k.getBoundingClientRect(),
intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:va()};z(function(){return a(n)})}for(var e=[],g=[],h=0;h<b.length;h++)e.push(0),g.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=$g(b[k]);if(l>e[k])for(;g[k]<c.length-1&&l>=c[g[k]+1];)d(b[k],l),g[k]++;else if(l<e[k])for(;0<=g[k]&&l<=c[g[k]];)d(b[k],l),g[k]--;e[k]=l}}},fh=function(a,b,c){for(var d=0;d<c.length;d++)1<c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(ch){var e=!1;z(function(){e||
eh(a,b,c)()});return dh(function(g){e=!0;for(var h={Da:0};h.Da<g.length;h={Da:h.Da},h.Da++)z(function(k){return function(){return a(g[k.Da])}}(h))},b,c)}return f.setInterval(eh(a,b,c),1E3)},gh=function(a){ch?0<=a&&a<bh.length&&bh[a]&&(bh[a].disconnect(),bh[a]=void 0):f.clearInterval(a)};var ih=f.clearTimeout,jh=f.setTimeout,G=function(a,b,c){if(ye()){b&&z(b)}else return La(a,b,c)},kh=function(){return new Date},lh=function(){return f.location.href},mh=function(a){return bb(cb(a),"fragment")},nh=function(a){return ab(cb(a))},oh=function(a,b){return dd(a,b||2)},ph=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Me(a)},qh=function(a,b){f[a]=b},K=function(a,b,c){b&&(void 0===f[a]||
c&&!f[a])&&(f[a]=b);return f[a]},rh=function(a,b,c){return db(a,b,void 0===c?!0:!!c)},sh=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Jd:d},g=sg();tg(g,e);zg(["aw"],e);zg(["dc"],e);},th=function(a,b,c,d,e){var g=dg(),h=Vf();h.data||(h.data=
{query:{},fragment:{}},g(h.data));var k={},l=h.data;l&&(za(k,l.query),za(k,l.fragment));for(var m=qg(b),n=0;n<a.length;++n){var p=a[n];if(void 0!==pg[p]){var t=ug(p,m),q=k[t];if(q){var r=Math.min(vg(q),va()),v;b:{for(var x=r,y=db(t,u.cookie),w=0;w<y.length;++w)if(vg(y[w])>x){v=!0;break b}v=!1}v||lb(t,q,c,d,0==e?void 0:new Date(r+1E3*(null==e?7776E3:e)),!0)}}}var D={prefix:b,path:c,domain:d};tg(rg(k.gclid,k.gclsrc),D);},uh=function(a,b,c,d,e){
xg(a,b,c,d,e);},vh=function(a,b){if(ye()){b&&z(b)}else Na(a,b)},wh=function(a){return!!Af(a,"init",!1)},xh=function(a){yf(a,"init",!0)},yh=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":tc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&qa(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});G(E("https://","http://",d))};

var Ah=tf.Rf;
var Bh=new wa;function Ch(a,b){function c(h){var k=cb(h),l=bb(k,"protocol"),m=bb(k,"host",!0),n=bb(k,"port"),p=bb(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0}
function Dh(a){var b=a.arg0,c=a.arg1;if(a.any_of&&la(c)){for(var d=0;d<c.length;d++)if(Dh({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=ma(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Bh.get(q);r||(r=new RegExp(c,t),Bh.set(q,r));p=r.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));
case "_um":return Ch(b,c)}return!1};var Fh=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Gh={},Hh=encodeURI,M=encodeURIComponent,Ih=Oa;var Jh=function(a,b){if(!a)return!1;var c=bb(cb(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Kh=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};Gh.Of=function(){var a=!1;return a};var ti=function(a,b,c,d){this.n=a;this.t=b;this.p=c;this.d=d},ui=function(){this.c=1;this.e=[];this.p=null};function vi(a){var b=qc,c=b.gss=b.gss||{};return c[a]=c[a]||new ui}var wi=function(a,b){vi(a).p=b},xi=function(a){var b=vi(a),c=b.p;if(c){var d=b.e,e=[];b.e=[];var g=function(h){for(var k=0;k<h.length;k++)try{var l=h[k];l.d?(l.d=!1,e.push(l)):c(l.n,l.t,l.p)}catch(m){}};g(d);g(e)}};var zi=function(){var a=f.gaGlobal=f.gaGlobal||{};a.hid=a.hid||pa();return a.hid};var Oi=window,Pi=document,Qi=function(a){var b=Oi._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Oi["ga-disable-"+a])return!0;try{var c=Oi.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=db("AMP_TOKEN",Pi.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Pi.getElementById("__gaOptOutExtension")?!0:!1};var Wi=function(a,b,c){Vi(a);var d=Math.floor(va()/1E3);vi(a).e.push(new ti(b,d,c,void 0));xi(a)},Xi=function(a,b,c){Vi(a);var d=Math.floor(va()/1E3);vi(a).e.push(new ti(b,d,c,!0))},Vi=function(a){if(1===vi(a).c){vi(a).c=2;var b=encodeURIComponent(a);La(("http:"!=f.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},Zi=function(a,b){},Yi=function(a,b){};var X={a:{}};
X.a.jsm=["customScripts"],function(){(function(a){X.__jsm=a;X.__jsm.g="jsm";X.__jsm.h=!0;X.__jsm.b=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=K("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
X.a.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;Mg(b,c)}(function(b){X.__flc=b;X.__flc.g="flc";X.__flc.h=!0;X.__flc.b=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=Kh(b.vtp_customVariable||[],"key","value")||{},e={Na:b.vtp_activityTag,hc:c,wa:b.vtp_conversionCookiePrefix||void 0,vb:void 0,L:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,kc:b.vtp_advertiserId,nc:b.vtp_groupTag,O:b.vtp_gtmOnFailure,I:b.vtp_gtmOnSuccess,Cb:b.vtp_useImageTag?
void 0:b.vtp_url,protocol:"",Hc:void 0,Eb:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,Jb:b.vtp_transactionVariable,transactionId:void 0,Kb:b.vtp_userVariable,Qc:d};if(b.vtp_enableAttribution){var g=b.vtp_attributionFields||[];if(g.length){G("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,K("google_attr").build([Kh(g,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
X.a.sp=["google"],function(){(function(a){X.__sp=a;X.__sp.g="sp";X.__sp.h=!0;X.__sp.b=0})(function(a){var b=a.vtp_gtmOnFailure;Bd();G("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=K("google_trackConversion");if(ia(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=Kh(a.vtp_customParams,"key","value"));var e={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(d.event=a.vtp_eventName),a.vtp_eventValue&&
(e.value=a.vtp_eventValue),a.vtp_eventItems&&(e.items=a.vtp_eventItems));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_gtag_event_data:e,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:Ig()})||b()}else b()},b)})}();X.a.c=["google"],function(){(function(a){X.__c=a;X.__c.g="c";X.__c.h=!0;X.__c.b=0})(function(a){return a.vtp_value})}();
X.a.d=["google"],function(){(function(a){X.__d=a;X.__d.g="d";X.__d.h=!0;X.__d.b=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=Te(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=Sa(a.vtp_elementId);b&&(c=d?Ra(b,d):Ta(b));return ua(String(b&&c))})}();X.a.e=["google"],function(){(function(a){X.__e=a;X.__e.g="e";X.__e.h=!0;X.__e.b=0})(function(){return wc})}();
X.a.f=["google"],function(){(function(a){X.__f=a;X.__f.g="f";X.__f.h=!0;X.__f.b=0})(function(a){var b=oh("gtm.referrer",1)||u.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?bb(cb(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):nh(String(b)):String(b)})}();
X.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=wf(c,"gtm.click");ph(d)}}(function(b){X.__cl=b;X.__cl.g="cl";X.__cl.h=!0;X.__cl.b=0})(function(b){if(!wh("cl")){var c=K("document");Pa(c,"click",a,!0);xh("cl")}z(b.vtp_gtmOnSuccess)})}();
X.a.j=["google"],function(){(function(a){X.__j=a;X.__j.g="j";X.__j.h=!0;X.__j.b=0})(function(a){for(var b=String(a.vtp_name).split("."),c=K(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();X.a.k=["google"],function(){(function(a){X.__k=a;X.__k.g="k";X.__k.h=!0;X.__k.b=0})(function(a){return rh(a.vtp_name,oh("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
X.a.fls=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;Mg(b,c)}(function(b){X.__fls=b;X.__fls.g="fls";X.__fls.h=!0;X.__fls.b=0})(function(b){var c;if(b.vtp_enableProductReporting){var d=function(p){p=p||[];for(var t=[],q=[["i","id"],["p","price"],["q","quantity"],["c","country"],["l","language"],["a","accountId"]],r=0;r<p.length;r++)for(var v=0;v<q.length;v++){var x=q[v],y=p[r][x[1]];void 0!==y&&t.push(x[0]+(r+1)+
":"+M(y))}return t.join("|")};switch(b.vtp_dataSource){case "DATA_LAYER":c=d(oh("ecommerce.purchase.products"));break;case "JSON":c=d(b.vtp_productData);break;case "STRING":for(var e=(b.vtp_productData||"").split("|"),g=0;g<e.length;g++){var h=e[g].split(":");h[1]=h[1]&&M(h[1])||"";e[g]=h.join(":")}c=e.join("|")}}var k=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,l=Kh(b.vtp_customVariable||[],
"key","value")||{},m={Na:b.vtp_activityTag,hc:k,wa:b.vtp_conversionCookiePrefix||void 0,vb:b.vtp_revenue,L:"ITEM_SOLD"===b.vtp_countingMethod?6:5,kc:b.vtp_advertiserId,nc:b.vtp_groupTag,O:b.vtp_gtmOnFailure,I:b.vtp_gtmOnSuccess,Cb:b.vtp_useImageTag?void 0:b.vtp_url,Dc:c,protocol:"",Hc:b.vtp_quantity,Eb:!b.vtp_useImageTag,Jb:b.vtp_transactionVariable,transactionId:b.vtp_orderId,Kb:b.vtp_userVariable,Qc:l};if(b.vtp_enableAttribution){var n=b.vtp_attributionFields||[];if(n.length){G("//www.gstatic.com/attribution/collection/attributiontools.js",
function(){a(m,K("google_attr").build([Kh(n,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(m)})}();
X.a.r=["google"],function(){(function(a){X.__r=a;X.__r.g="r";X.__r.h=!0;X.__r.b=0})(function(a){return pa(a.vtp_min,a.vtp_max)})}();

X.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){X.__u=b;X.__u.g="u";X.__u.h=!0;X.__u.b=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:oh("gtm.url",1))||lh();var d=b[a("vtp_component")];if(!d||"URL"==d)return nh(String(c));var e=cb(String(c)),g;if("QUERY"==d&&b[a("vtp_multiQueryKeys")])a:{var h=b[a("vtp_queryKey")],k;k=la(h)?h:String(h||"").replace(/\s+/g,"").split(",");for(var l=0;l<k.length;l++){var m=bb(e,"QUERY",void 0,void 0,
k[l]);if(null!=m){g=m;break a}}g=void 0}else g=bb(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0);return g})}();X.a.v=["google"],function(){(function(a){X.__v=a;X.__v.g="v";X.__v.h=!0;X.__v.b=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=oh(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();

X.a.ua=["google"],function(){var a,b=function(c){var d={},e={},g={},h={},k={};if(c.vtp_gaSettings){var l=c.vtp_gaSettings;Ga(Kh(l.vtp_fieldsToSet,"fieldName","value"),e);Ga(Kh(l.vtp_contentGroup,"index","group"),g);Ga(Kh(l.vtp_dimension,"index","dimension"),h);Ga(Kh(l.vtp_metric,"index","metric"),k);c.vtp_gaSettings=null;l.vtp_fieldsToSet=void 0;l.vtp_contentGroup=void 0;l.vtp_dimension=void 0;l.vtp_metric=void 0;var m=Ga(l);c=Ga(c,m)}Ga(Kh(c.vtp_fieldsToSet,"fieldName","value"),e);Ga(Kh(c.vtp_contentGroup,
"index","group"),g);Ga(Kh(c.vtp_dimension,"index","dimension"),h);Ga(Kh(c.vtp_metric,"index","metric"),k);var n=Id(c.vtp_functionName);if(ia(n)){var p="",t="";c.vtp_setTrackerName&&"string"==typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(t=c.vtp_trackerName,p=t+"."):(t="gtm"+Ac(),p=t+".");var q={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},r={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},v=function(L){var P=[].slice.call(arguments,0);P[0]=p+P[0];n.apply(window,P)},x=function(L,P){return void 0===P?P:L(P)},y=function(L,P){if(P)for(var ba in P)P.hasOwnProperty(ba)&&v("set",L+ba,P[ba])},w=function(){
var L=function(Va,rb,Cb){if(!Fa(rb))return!1;for(var gb=xa(Object(rb),Cb,[]),qe=0;gb&&qe<gb.length;qe++)v(Va,gb[qe]);return!!gb&&0<gb.length},P;c.vtp_useEcommerceDataLayer?P=oh("ecommerce",1):c.vtp_ecommerceMacroData&&(P=c.vtp_ecommerceMacroData.ecommerce);if(!Fa(P))return;P=Object(P);var ba=xa(e,"currencyCode",P.currencyCode);void 0!==ba&&v("set","&cu",ba);L("ec:addImpression",P,"impressions");if(L("ec:addPromo",P[P.promoClick?"promoClick":"promoView"],"promotions")&&P.promoClick){v("ec:setAction",
"promo_click",P.promoClick.actionField);return}for(var na="detail checkout checkout_option click add remove purchase refund".split(" "),W=0;W<na.length;W++){var Z=P[na[W]];if(Z){L("ec:addProduct",Z,"products");v("ec:setAction",na[W],Z.actionField);break}}},D=function(L,P,ba){var na=0;if(L)for(var W in L)if(L.hasOwnProperty(W)&&(ba&&q[W]||!ba&&void 0===q[W])){var Z=r[W]?sa(L[W]):L[W];"anonymizeIp"!=W||Z||(Z=void 0);P[W]=Z;na++}return na},
A={name:t};D(e,A,!0);n("create",c.vtp_trackingId||d.trackingId,A);v("set","&gtm",Ig(!0));c.vtp_enableRecaptcha&&v("require","recaptcha","recaptcha.js");(function(L,P){void 0!==c[P]&&v("set",L,c[P])})("nonInteraction","vtp_nonInteraction");y("contentGroup",g);y("dimension",h);y("metric",k);var B={};D(e,B,!1)&&v("set",B);var C;c.vtp_enableLinkId&&
v("require","linkid","linkid.js");v("set","hitCallback",function(){var L=e&&e.hitCallback;ia(L)&&L();c.vtp_gtmOnSuccess()});if("TRACK_EVENT"==c.vtp_trackType){c.vtp_enableEcommerce&&(v("require","ec","ec.js"),w());var H={hitType:"event",eventCategory:String(c.vtp_eventCategory||d.category),eventAction:String(c.vtp_eventAction||d.action),eventLabel:x(String,c.vtp_eventLabel||d.label),eventValue:x(ra,c.vtp_eventValue||d.value)};D(C,
H,!1);v("send",H);}else if("TRACK_SOCIAL"==c.vtp_trackType){}else if("TRACK_TRANSACTION"==c.vtp_trackType){}else if("TRACK_TIMING"==
c.vtp_trackType){}else if("DECORATE_LINK"==c.vtp_trackType){}else if("DECORATE_FORM"==c.vtp_trackType){}else if("TRACK_DATA"==c.vtp_trackType){}else{c.vtp_enableEcommerce&&(v("require","ec","ec.js"),w());if(c.vtp_doubleClick||"DISPLAY_FEATURES"==c.vtp_advertisingFeaturesType){var U=
"_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","displayfeatures",void 0,{cookieName:U})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==c.vtp_advertisingFeaturesType){var T="_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","adfeatures",{cookieName:T})}C?v("send","pageview",C):v("send","pageview");}if(!a){var Y=c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";c.vtp_useInternalVersion&&!c.vtp_useDebugVersion&&(Y="internal/"+Y);a=!0;G(E("https:","http:","//www.google-analytics.com/"+Y,e&&e.forceSSL),function(){var L=Gd();L&&L.loaded||c.vtp_gtmOnFailure();},c.vtp_gtmOnFailure)}}else z(c.vtp_gtmOnFailure)};X.__ua=b;X.__ua.g="ua";X.__ua.h=!0;X.__ua.b=0}();
X.a.jel=["google"],function(){(function(a){X.__jel=a;X.__jel.g="jel";X.__jel.h=!0;X.__jel.b=0})(function(a){if(!wh("jel")){var b=K("self"),c=b.onerror;b.onerror=function(d,e,g,h,k){c&&c(d,e,g,h,k);ph({event:"gtm.pageError","gtm.errorMessage":d,"gtm.errorUrl":e,"gtm.errorLineNumber":g});return!1};xh("jel")}z(a.vtp_gtmOnSuccess)})}();



X.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(b){X.__gclidw=b;X.__gclidw.g="gclidw";X.__gclidw.h=!0;X.__gclidw.b=100})(function(b){z(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=e,h=c,k=d;b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||kg())&&th(a,g,h,k));sh(e,c,d);Eg(!1,e,c,d);var l=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&
b.vtp_linkerDomains){var m=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");uh(a,m,b.vtp_urlPosition,!!b.vtp_formDecoration,l)}})}();
X.a.aev=["google"],function(){var a=void 0,b="",c=0,d=void 0,e={ATTRIBUTE:"gtm.elementAttribute",CLASSES:"gtm.elementClasses",ELEMENT:"gtm.element",ID:"gtm.elementId",HISTORY_CHANGE_SOURCE:"gtm.historyChangeSource",HISTORY_NEW_STATE:"gtm.newHistoryState",HISTORY_NEW_URL_FRAGMENT:"gtm.newUrlFragment",HISTORY_OLD_STATE:"gtm.oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"gtm.oldUrlFragment",TARGET:"gtm.elementTarget"},g=function(m){var n=oh(e[m.vtp_varType],1);return void 0!==n?n:m.vtp_defaultValue},h=function(m,
n){if(!m)return!1;var p=l(lh()),t;t=la(n.vtp_affiliatedDomains)?n.vtp_affiliatedDomains:String(n.vtp_affiliatedDomains||"").replace(/\s+/g,"").split(",");for(var q=[p],r=0;r<t.length;r++)if(t[r]instanceof RegExp){if(t[r].test(m))return!1}else{var v=t[r];if(0!=v.length){if(0<=l(m).indexOf(v))return!1;q.push(l(v))}}return!Jh(m,q)},k=/^https?:\/\//i,l=function(m){k.test(m)||(m="http://"+m);return bb(cb(m),"HOST",!0)};(function(m){X.__aev=m;X.__aev.g="aev";X.__aev.h=!0;X.__aev.b=0})(function(m){switch(m.vtp_varType){case "TAG_NAME":return oh("gtm.element",
1).tagName||m.vtp_defaultValue;case "TEXT":var n,p=oh("gtm.element",1),t=oh("event",1),q=Number(kh());a===p&&b===t&&c>q-250?n=d:(d=n=p?Ta(p):"",a=p,b=t);c=q;return n||m.vtp_defaultValue;case "URL":var r;a:{var v=String(oh("gtm.elementUrl",1)||m.vtp_defaultValue||""),x=cb(v);switch(m.vtp_component||"URL"){case "URL":r=v;break a;case "IS_OUTBOUND":r=h(v,m);break a;default:r=bb(x,m.vtp_component,m.vtp_stripWww,m.vtp_defaultPages,m.vtp_queryKey)}}return r;case "ATTRIBUTE":var y;if(void 0===m.vtp_attribute)y=
g(m);else{var w=oh("gtm.element",1);y=Ra(w,m.vtp_attribute)||m.vtp_defaultValue||""}return y;default:return g(m)}})}();
X.a.gas=["google"],function(){(function(a){X.__gas=a;X.__gas.g="gas";X.__gas.h=!0;X.__gas.b=0})(function(a){var b=Ga(a),c=b;c[Fc.ra]=null;c[Fc.ye]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

X.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=K("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){Bd();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Ig()},m=function(p){return function(t,q,r){var v="DATA_LAYER"==p?oh(r):k[q];v&&(l[t]=v)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(p){return{value:p.price,quantity:p.quantity,item_id:p.id}}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),
l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;b.push(l);a||(a=!0,G("//www.googleadservices.com/pagead/conversion_async.js",g(),e("//www.googleadservices.com/pagead/conversion_async.js")))};X.__awct=h;X.__awct.g="awct";X.__awct.h=!0;X.__awct.b=0}();
X.a.baut=["nonGoogleScripts"],function(){var a=!1;(function(b){X.__baut=b;X.__baut.g="baut";X.__baut.h=!0;X.__baut.b=0})(function(b){var c=b.vtp_uetqName||"uetq",d=K(c,[],!0);if("VARIABLE_REVENUE"==b.vtp_eventType)d.push({gv:b.vtp_goalValue}),b.vtp_gtmOnSuccess();else if("CUSTOM"==b.vtp_eventType){var e={},g=function(h,k){void 0!==b[h]&&(e[k]=b[h])};g("vtp_goalValue","gv");g("vtp_eventCategory","ec");g("vtp_eventAction","ea");g("vtp_eventLabel","el");g("vtp_eventValue","ev");d.push(e);b.vtp_gtmOnSuccess()}else if(a)b.vtp_gtmOnSuccess();
else try{G("//bat.bing.com/bat.js",function(){var h=Fh(K("UET"),{ti:b.vtp_tagId,q:d});f[c]=h;h.push("pageLoad");b.vtp_gtmOnSuccess()},b.vtp_gtmOnFailure),a=!0}catch(h){z(b.vtp_gtmOnFailure)}})}();X.a.smm=["google"],function(){(function(a){X.__smm=a;X.__smm.g="smm";X.__smm.h=!0;X.__smm.b=0})(function(a){var b=a.vtp_input,c=Kh(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



X.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=u.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Ka(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){z(h)}}}var b=function(d,e,g){Ad(function(){var h,k=qc;k.postscribe||(k.postscribe=ec);h=k.postscribe;var l={done:e},m=u.createElement("div");m.style.display="none";m.style.visibility="hidden";u.body.appendChild(m);try{h(m,d,l)}catch(n){z(g)}})};var c=function(d){if(u.body){var e=
d.vtp_gtmOnFailure,g=Ah(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.oc,k=g.I;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(u.body,Ua(h),k,e)()}else jh(function(){c(d)},
200)};X.__html=c;X.__html.g="html";X.__html.h=!0;X.__html.b=0}();


X.a.lcl=[],function(){function a(){var c=K("document"),d=0,e=function(g){var h=g.target;if(h&&3!==g.which&&(!g.timeStamp||g.timeStamp!==d)){d=g.timeStamp;h=Wa(h,["a","area"],100);if(!h)return g.returnValue;var k=g.defaultPrevented||!1===g.returnValue,l=Af("lcl",k?"nv.mwt":"mwt",0),m;m=k?Af("lcl","nv.ids",[]):Af("lcl","ids",[]);if(m.length){var n=wf(h,"gtm.linkClick",m);if(b(g,h,c)&&!k&&l&&h.href){var p=K((h.target||"_self").substring(1)),t=!0;if(ph(n,function(){t&&p&&(p.location.href=h.href)},l))t=
!1;else return g.preventDefault&&g.preventDefault(),g.returnValue=!1}else ph(n,function(){},l||2E3);return!0}}};Pa(c,"click",e,!1);Pa(c,"auxclick",e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var g=d.href.indexOf("#"),h=d.target;if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var k=nh(d.href),l=nh(e.location);return k!==l}return!0}(function(c){X.__lcl=c;X.__lcl.g="lcl";X.__lcl.h=!0;X.__lcl.b=0})(function(c){var d=void 0===c.vtp_waitForTags?
!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,g=Number(c.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(g,m)};zf("lcl","mwt",k,0);e||zf("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};zf("lcl","ids",l,[]);e||zf("lcl","nv.ids",l,[]);wh("lcl")||(a(),xh("lcl"));z(c.vtp_gtmOnSuccess)})}();
X.a.evl=["google"],function(){function a(g,h){this.element=g;this.uid=h}function b(){var g=Number(oh("gtm.start"))||0;return kh().getTime()-g}function c(g,h,k,l){function m(){if(!ah(g.target)){h.has(e.rb)||h.set(e.rb,""+b());h.has(e.Zb)||h.set(e.Zb,""+b());var p=0;h.has(e.tb)&&(p=Number(h.get(e.tb)));p+=100;h.set(e.tb,""+p);if(p>=k){var t=wf(g.target,"gtm.elementVisibility",[h.uid]),q=$g(g.target);t["gtm.visibleRatio"]=Math.round(1E3*q)/10;t["gtm.visibleTime"]=k;t["gtm.visibleFirstTime"]=Number(h.get(e.Zb));
t["gtm.visibleLastTime"]=Number(h.get(e.rb));ph(t);l()}}}if(!h.has(e.La)&&(0==k&&m(),!h.has(e.sa))){var n=K("self").setInterval(m,100);h.set(e.La,n)}}function d(g){g.has(e.La)&&(K("self").clearInterval(Number(g.get(e.La))),g.remove(e.La))}var e={La:"polling-id-",Zb:"first-on-screen-",rb:"recent-on-screen-",tb:"total-visible-time-",sa:"has-fired-"};a.prototype.has=function(g){return!!this.element.getAttribute("data-gtm-vis-"+g+this.uid)};a.prototype.get=function(g){return this.element.getAttribute("data-gtm-vis-"+
g+this.uid)};a.prototype.set=function(g,h){this.element.setAttribute("data-gtm-vis-"+g+this.uid,h)};a.prototype.remove=function(g){this.element.removeAttribute("data-gtm-vis-"+g+this.uid)};(function(g){X.__evl=g;X.__evl.g="evl";X.__evl.h=!0;X.__evl.b=0})(function(g){function h(){var y=!1,w=null;if("CSS"===l){try{w=Te(m)}catch(C){}y=!!w&&v.length!=w.length}else if("ID"===l){var D=Sa(m);D&&(w=[D],y=1!=v.length||v[0]!==D)}w||(w=[],y=0<v.length);if(y){for(var A=0;A<v.length;A++)d(new a(v[A],q));v=[];
for(var B=0;B<w.length;B++)v.push(w[B]);0<=x&&gh(x);0<v.length&&(x=fh(k,v,[t]))}}function k(y){var w=new a(y.target,q);y.intersectionRatio>=t?w.has(e.sa)||c(y,w,p,"ONCE"===r?function(){for(var D=0;D<v.length;D++){var A=new a(v[D],q);A.set(e.sa,"1");d(A)}gh(x);if(n&&Qg)for(var B=0;B<Qg.length;B++)Qg[B]===h&&Qg.splice(B,1)}:function(){w.set(e.sa,"1");d(w)}):(d(w),"MANY_PER_ELEMENT"===r&&w.has(e.sa)&&(w.remove(e.sa),w.remove(e.tb)),w.remove(e.rb))}var l=g.vtp_selectorType,m;"ID"===l?m=String(g.vtp_elementId):
"CSS"===l&&(m=String(g.vtp_elementSelector));var n=!!g.vtp_useDomChangeListener,p=g.vtp_useOnScreenDuration&&Number(g.vtp_onScreenDuration)||0,t=(Number(g.vtp_onScreenRatio)||50)/100,q=g.vtp_uniqueTriggerId,r=g.vtp_firingFrequency,v=[],x=-1;h();n&&Rg(h);z(g.vtp_gtmOnSuccess)})}();

var $i={};$i.macro=function(a){if(tf.$b.hasOwnProperty(a))return tf.$b[a]},$i.onHtmlSuccess=tf.td(!0),$i.onHtmlFailure=tf.td(!1);$i.dataLayer=ed;$i.callback=function(a){yc.hasOwnProperty(a)&&ia(yc[a])&&yc[a]();delete yc[a]};$i.Ve=function(){qc[pc.m]=$i;zc=X.a;Sb=Sb||tf;Tb=sd};
$i.Jf=function(){qc=f.google_tag_manager=f.google_tag_manager||{};if(qc[pc.m]){var a=qc.zones;a&&a.unregisterChild(pc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Lb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Ob.push(e[g]);for(var h=b.predicates||[],k=0;k<h.length;k++)Nb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<
n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);Mb.push(p)}Qb=X;Rb=Dh;$i.Ve();Re();vd=!1;wd=0;if("interactive"==u.readyState&&!u.createEventObject||"complete"==u.readyState)yd();else{Pa(u,"DOMContentLoaded",yd);Pa(u,"readystatechange",yd);if(u.createEventObject&&u.documentElement.doScroll){var q=!0;try{q=!f.frameElement}catch(y){}q&&zd()}Pa(f,"load",yd)}Fe=!1;"complete"===u.readyState?He():Pa(f,"load",He);a:{if(!Vc)break a;f.setInterval(Wc,864E5);}vc=(new Date).getTime();}};(0,$i.Jf)();

})()
