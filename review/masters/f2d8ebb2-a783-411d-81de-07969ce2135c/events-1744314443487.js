jQuery("#simulation")
  .on("click", ".m-f2d8ebb2-a783-411d-81de-07969ce2135c .click,.m-f2d8ebb2-a783-411d-81de-07969ce2135c.click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#Cell_36")) {
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_41 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_35 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_39 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_37 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_38 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_20 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_9 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_17 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_16 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_18 svg" ],
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_9 svg" ],
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
    } else if(jFirer.is("#Hotspot_1")) {
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_41 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_35 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_39 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_37 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_38 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_20 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_17 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_16 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_18 svg" ],
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
    } else if(jFirer.is("#Cell_37")) {
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_41 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_35 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_37 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_39 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_38 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_20 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_9 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_17 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_16 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_18 svg" ],
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_37 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_16 svg" ],
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
    } else if(jFirer.is("#Hotspot_2")) {
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_41 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_35 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_39 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_38 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_20 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_9 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_17 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_18 svg" ],
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
    } else if(jFirer.is("#Cell_38")) {
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_41 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_35 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_39 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_37 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_38 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_20 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_9 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_17 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_16 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_18 svg" ],
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_38 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_17 svg" ],
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
    } else if(jFirer.is("#Hotspot_3")) {
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_41 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_35 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_39 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_37 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_20 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_9 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_16 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_18 svg" ],
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
    } else if(jFirer.is("#Cell_39")) {
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_41 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_35 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_37 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_39 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_20 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_9 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_17 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_16 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_18 svg" ],
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_39 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_18 svg" ],
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
    } else if(jFirer.is("#Hotspot_4")) {
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_41 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_35 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_37 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_20 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_9 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_17 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_16 svg" ],
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
    } else if(jFirer.is("#Cell_41")) {
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_41 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_35 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_37 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_39 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_38 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_20 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_9 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_17 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_16 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_18 svg" ],
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_41 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_20 svg" ],
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
    } else if(jFirer.is("#Hotspot_5")) {
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_35 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_37 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_39 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_38 .verticalalign",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_9 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_17 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_16 svg",
                  "#m-f2d8ebb2-a783-411d-81de-07969ce2135c #Path_18 svg" ],
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
  .on("mouseenter dragenter", ".m-f2d8ebb2-a783-411d-81de-07969ce2135c .mouseenter,.m-f2d8ebb2-a783-411d-81de-07969ce2135c.mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#Cell_36") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#Group_17" ],
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
    } else if(jFirer.is("#Hotspot_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#Group_17" ],
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
    } else if(jFirer.is("#Cell_37") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#Group_16" ],
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
    } else if(jFirer.is("#Hotspot_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#Group_16" ],
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
    } else if(jFirer.is("#Cell_38") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#Group_15" ],
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
    } else if(jFirer.is("#Hotspot_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#Group_15" ],
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
    } else if(jFirer.is("#Cell_39") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#Group_14" ],
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
    } else if(jFirer.is("#Hotspot_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#Group_14" ],
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
    } else if(jFirer.is("#Cell_41") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#Group_12" ],
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
  .on("mouseleave dragleave", ".m-f2d8ebb2-a783-411d-81de-07969ce2135c .mouseleave,.m-f2d8ebb2-a783-411d-81de-07969ce2135c.mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#Cell_36")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_1")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Cell_37")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_2")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Cell_38")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_3")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Cell_39")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_4")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Cell_41")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    }
  });