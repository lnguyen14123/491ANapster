jQuery("#simulation")
  .on("click", ".s-f351a1b3-50a7-40d6-b4e5-75376bf6382f .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Path_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_5" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_14" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Data_grid_1" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Organizations",
                        "value": {
                          "action": "jimContains",
                          "parameter": [ {
                            "field": "63ec036b-387b-4cfa-81be-fb2fd9eec1e9"
                          },{
                            "datatype": "property",
                            "target": "#s-Input_5",
                            "property": "jimGetValue"
                          } ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Data_grid_3" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Organizations",
                        "value": {
                          "action": "jimContains",
                          "parameter": [ {
                            "field": "63ec036b-387b-4cfa-81be-fb2fd9eec1e9"
                          },{
                            "datatype": "property",
                            "target": "#s-Input_5",
                            "property": "jimGetValue"
                          } ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #s-Path_4 svg" ],
                    "attributes": {
                      "path-background-color": "#C9CED4",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #s-Path_10 svg" ],
                    "attributes": {
                      "path-background-color": "#62449D",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #s-Path_4 svg" ],
                    "attributes": {
                      "path-background-color": "#62449D",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #s-Path_10 svg" ],
                    "attributes": {
                      "path-background-color": "#C9CED4",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #s-Path_4 svg" ],
                    "attributes": {
                      "path-background-color": "#62449D",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #s-Path_10 svg" ],
                    "attributes": {
                      "path-background-color": "#C9CED4",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #s-Path_4 svg" ],
                    "attributes": {
                      "path-background-color": "#C9CED4",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #s-Path_10 svg" ],
                    "attributes": {
                      "path-background-color": "#62449D",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-e225a1f7-Cell_36")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Link" ],
                    "value": "home"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cb12f6f0-3e00-423e-af4c-072bc2112237"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_41 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_35 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_39 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_37 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_38 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#62449D"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_20 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_9 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_17 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_16 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_18 svg" ],
                    "attributes": {
                      "path-background-color": "#D7C6F9",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#A78CDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_9 svg" ],
                    "attributes": {
                      "path-background-color": "#FFFFFF",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-e225a1f7-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Link" ],
                    "value": "home"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cb12f6f0-3e00-423e-af4c-072bc2112237"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_41 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_35 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_39 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_37 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_38 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#62449D"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_20 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_17 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_16 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_18 svg" ],
                    "attributes": {
                      "path-background-color": "#D7C6F9",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-e225a1f7-Cell_37")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Link" ],
                    "value": "views"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cb12f6f0-3e00-423e-af4c-072bc2112237"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_41 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_35 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_37 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_39 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_38 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#62449D"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_20 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_9 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_17 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_16 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_18 svg" ],
                    "attributes": {
                      "path-background-color": "#D7C6F9",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_37 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#A78CDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_16 svg" ],
                    "attributes": {
                      "path-background-color": "#FFFFFF",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-e225a1f7-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Link" ],
                    "value": "views"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cb12f6f0-3e00-423e-af4c-072bc2112237"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_41 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_35 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_39 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_38 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#62449D"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_20 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_9 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_17 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_18 svg" ],
                    "attributes": {
                      "path-background-color": "#D7C6F9",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-e225a1f7-Cell_38")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/3a12f488-d7a1-46d7-b8cd-0c2c65e768e2"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_41 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_35 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_39 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_37 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_38 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#62449D"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_20 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_9 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_17 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_16 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_18 svg" ],
                    "attributes": {
                      "path-background-color": "#D7C6F9",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_38 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#A78CDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_17 svg" ],
                    "attributes": {
                      "path-background-color": "#FFFFFF",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-e225a1f7-Hotspot_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/3a12f488-d7a1-46d7-b8cd-0c2c65e768e2"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_41 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_35 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_39 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_37 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#62449D"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_20 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_9 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_16 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_18 svg" ],
                    "attributes": {
                      "path-background-color": "#D7C6F9",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-e225a1f7-Cell_39")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f351a1b3-50a7-40d6-b4e5-75376bf6382f"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_41 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_35 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_37 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_39 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#62449D"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_20 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_9 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_17 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_16 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_18 svg" ],
                    "attributes": {
                      "path-background-color": "#D7C6F9",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_39 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#A78CDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_18 svg" ],
                    "attributes": {
                      "path-background-color": "#FFFFFF",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-e225a1f7-Hotspot_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f351a1b3-50a7-40d6-b4e5-75376bf6382f"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_41 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_35 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_37 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#62449D"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_20 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_9 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_17 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_16 svg" ],
                    "attributes": {
                      "path-background-color": "#D7C6F9",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-e225a1f7-Cell_41")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/56a35899-0244-4107-b5c8-d911635906e7"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_41 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_35 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_37 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_39 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_38 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#62449D"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_20 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_9 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_17 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_16 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_18 svg" ],
                    "attributes": {
                      "path-background-color": "#D7C6F9",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_41 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#A78CDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_20 svg" ],
                    "attributes": {
                      "path-background-color": "#FFFFFF",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-e225a1f7-Hotspot_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/56a35899-0244-4107-b5c8-d911635906e7"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_35 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_37 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_39 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_38 .verticalalign",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#62449D"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_9 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_17 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_16 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_18 svg" ],
                    "attributes": {
                      "path-background-color": "#D7C6F9",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("keyup.jim", ".s-f351a1b3-50a7-40d6-b4e5-75376bf6382f .keyup", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Data_grid_1" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Organizations",
                        "value": {
                          "action": "jimContains",
                          "parameter": [ {
                            "field": "63ec036b-387b-4cfa-81be-fb2fd9eec1e9"
                          },{
                            "datatype": "property",
                            "target": "#s-Input_5",
                            "property": "jimGetValue"
                          } ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Data_grid_3" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Organizations",
                        "value": {
                          "action": "jimContains",
                          "parameter": [ {
                            "field": "63ec036b-387b-4cfa-81be-fb2fd9eec1e9"
                          },{
                            "datatype": "property",
                            "target": "#s-Input_5",
                            "property": "jimGetValue"
                          } ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      if(!jimUtil.isAndroidDevice() || data.which != 229)
      	jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    }
  })
  .on("pageload", ".s-f351a1b3-50a7-40d6-b4e5-75376bf6382f .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_18 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_16 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_9 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_20 svg",
                  "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_17 svg" ],
                    "attributes": {
                      "path-background-color": "#D7C6F9",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Path_18 svg" ],
                    "attributes": {
                      "path-background-color": "#FFFFFF",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_39 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #mi-e225a1f7-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#A78CDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-f351a1b3-50a7-40d6-b4e5-75376bf6382f .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #s-Input_5 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "2.0px",
                      "border-top-color": "#A78CDE",
                      "border-right-width": "2.0px",
                      "border-right-color": "#A78CDE",
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#A78CDE",
                      "border-left-width": "2.0px",
                      "border-left-color": "#A78CDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Path_14" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-f351a1b3-50a7-40d6-b4e5-75376bf6382f .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #s-Input_5 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#CED4DA",
                      "border-right-width": "1.0px",
                      "border-right-color": "#CED4DA",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#CED4DA",
                      "border-left-width": "1.0px",
                      "border-left-color": "#CED4DA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-f351a1b3-50a7-40d6-b4e5-75376bf6382f .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_21") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_22") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#3E1D7F"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 400
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f351a1b3-50a7-40d6-b4e5-75376bf6382f #s-Paragraph_1 span" ],
                    "attributes": {
                      "color": "#0A58CA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-e225a1f7-Cell_36") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-e225a1f7-Group_24" ],
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-e225a1f7-Hotspot_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-e225a1f7-Group_24" ],
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-e225a1f7-Cell_37") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-e225a1f7-Group_23" ],
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-e225a1f7-Hotspot_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-e225a1f7-Group_23" ],
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-e225a1f7-Cell_38") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-e225a1f7-Group_22" ],
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-e225a1f7-Hotspot_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-e225a1f7-Group_22" ],
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-e225a1f7-Cell_39") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-e225a1f7-Group_21" ],
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-e225a1f7-Hotspot_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-e225a1f7-Group_21" ],
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-e225a1f7-Cell_41") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-e225a1f7-Group_14" ],
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-f351a1b3-50a7-40d6-b4e5-75376bf6382f .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_21")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_22")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_4")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_10")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_2")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_1")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-e225a1f7-Cell_36")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-e225a1f7-Hotspot_1")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-e225a1f7-Cell_37")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-e225a1f7-Hotspot_2")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-e225a1f7-Cell_38")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-e225a1f7-Hotspot_3")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-e225a1f7-Cell_39")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-e225a1f7-Hotspot_4")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-e225a1f7-Cell_41")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    }
  });