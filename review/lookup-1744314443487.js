(function(window, undefined) {
  var dictionary = {
    "9707a80c-b56d-43e0-9d4b-53e302c3b614": "Customers data details ",
    "56a35899-0244-4107-b5c8-d911635906e7": "Settings",
    "1df52006-9e02-40dd-a334-67501efd94df": "Sign In",
    "3a12f488-d7a1-46d7-b8cd-0c2c65e768e2": "Customers",
    "f351a1b3-50a7-40d6-b4e5-75376bf6382f": "Organizations",
    "cb12f6f0-3e00-423e-af4c-072bc2112237": "Home / Views",
    "e585a70a-054e-4866-8468-878edabb9618": "Toolbar 2",
    "102fb302-13a4-4c4e-b258-5f7f17eff2be": "None",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "f2d8ebb2-a783-411d-81de-07969ce2135c": "Sideview",
    "95d35c04-c92b-4e04-b246-e4066a69ea34": "Company logo",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);