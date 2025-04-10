jQuery("#simulation")
  .on("click", ".s-9707a80c-b56d-43e0-9d4b-53e302c3b614 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_1",
                  "property": "jimGetValue"
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ ".s-Input_7","#s-Input_1" ],
                    "value": "false"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ ".s-Input_7","#s-Input_1" ],
                    "value": "true"
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
    } else if(jFirer.is("#s-Path_3")) {
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
                      "action": "jimSortDataDescendant",
                      "parameter": {
                        "datatype": "datalist",
                        "datamaster": "Customers",
                        "element": "#s-Data_grid_1",
                        "value": {
                          "field": "e3c0aa90-2850-44fb-97f9-e805aa7d5c0b"
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
    } else if(jFirer.is("#s-Path_4")) {
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
                      "action": "jimSortDataAscendant",
                      "parameter": {
                        "datatype": "datalist",
                        "datamaster": "Customers",
                        "element": "#s-Data_grid_1",
                        "value": {
                          "field": "e3c0aa90-2850-44fb-97f9-e805aa7d5c0b"
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
    } else if(jFirer.is("#s-Path_11")) {
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
                      "action": "jimSortDataDescendant",
                      "parameter": {
                        "datatype": "datalist",
                        "datamaster": "Customers",
                        "element": "#s-Data_grid_1",
                        "value": {
                          "field": "e2ac7ec8-7166-4229-bcb3-2d3bc8237517"
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
    } else if(jFirer.is("#s-Path_12")) {
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
                      "action": "jimSortDataAscendant",
                      "parameter": {
                        "datatype": "datalist",
                        "datamaster": "Customers",
                        "element": "#s-Data_grid_1",
                        "value": {
                          "field": "e2ac7ec8-7166-4229-bcb3-2d3bc8237517"
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
    } else if(jFirer.is("#s-Paragraph_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_9","#s-Group_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_5","#s-Rectangle_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Paragraph_6 span" ],
                    "attributes": {
                      "color": "#61449D"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Paragraph_5 span",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Paragraph_8 span" ],
                    "attributes": {
                      "color": "#52575C"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_1" ]
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
    } else if(jFirer.is("#s-Hotspot_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_9","#s-Group_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_5","#s-Rectangle_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Paragraph_6 span" ],
                    "attributes": {
                      "color": "#61449D"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Paragraph_5 span",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Paragraph_8 span" ],
                    "attributes": {
                      "color": "#52575C"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_1" ]
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
    } else if(jFirer.is("#s-Paragraph_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_9","#s-Rectangle_8","#s-Group_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Paragraph_6 span",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Paragraph_8 span" ],
                    "attributes": {
                      "color": "#52575C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Paragraph_5 span" ],
                    "attributes": {
                      "color": "#62449D"
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
        },
        {
          "blocks": [
            {
              "actions": [
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
    } else if(jFirer.is("#s-Hotspot_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_9","#s-Rectangle_8","#s-Group_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Paragraph_6 span",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Paragraph_8 span" ],
                    "attributes": {
                      "color": "#52575C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Paragraph_5 span" ],
                    "attributes": {
                      "color": "#62449D"
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
        },
        {
          "blocks": [
            {
              "actions": [
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
    } else if(jFirer.is("#s-Paragraph_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_9" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_8","#s-Group_5","#s-Group_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Paragraph_6 span",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Paragraph_5 span" ],
                    "attributes": {
                      "color": "#52575C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Paragraph_8 span" ],
                    "attributes": {
                      "color": "#62449D"
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
        },
        {
          "blocks": [
            {
              "actions": [
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
    } else if(jFirer.is("#s-Hotspot_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_9" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_8","#s-Group_5","#s-Group_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Paragraph_6 span",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Paragraph_5 span" ],
                    "attributes": {
                      "color": "#52575C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Paragraph_8 span" ],
                    "attributes": {
                      "color": "#62449D"
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
        },
        {
          "blocks": [
            {
              "actions": [
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
    } else if(jFirer.is("#s-Paragraph_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_9","#s-Group_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_5","#s-Rectangle_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Paragraph_2 span" ],
                    "attributes": {
                      "color": "#61449D"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Paragraph_5 span",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Paragraph_8 span" ],
                    "attributes": {
                      "color": "#52575C"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_1" ]
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
    } else if(jFirer.is("#s-Paragraph_17")) {
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
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-46aed140-Cell_36")) {
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_41 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_35 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_39 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_37 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_38 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_20 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_9 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_17 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_16 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_18 svg" ],
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_9 svg" ],
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
    } else if(jFirer.is("#mi-46aed140-Hotspot_1")) {
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_41 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_35 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_39 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_37 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_38 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_20 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_17 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_16 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_18 svg" ],
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
    } else if(jFirer.is("#mi-46aed140-Cell_37")) {
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_41 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_35 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_37 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_39 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_38 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_20 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_9 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_17 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_16 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_18 svg" ],
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_37 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_16 svg" ],
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
    } else if(jFirer.is("#mi-46aed140-Hotspot_2")) {
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_41 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_35 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_39 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_38 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_20 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_9 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_17 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_18 svg" ],
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
    } else if(jFirer.is("#mi-46aed140-Cell_38")) {
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_41 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_35 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_39 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_37 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_38 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_20 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_9 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_17 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_16 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_18 svg" ],
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_38 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_17 svg" ],
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
    } else if(jFirer.is("#mi-46aed140-Hotspot_3")) {
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_41 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_35 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_39 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_37 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_20 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_9 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_16 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_18 svg" ],
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
    } else if(jFirer.is("#mi-46aed140-Cell_39")) {
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_41 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_35 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_37 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_39 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_20 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_9 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_17 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_16 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_18 svg" ],
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_39 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_18 svg" ],
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
    } else if(jFirer.is("#mi-46aed140-Hotspot_4")) {
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_41 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_35 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_37 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_20 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_9 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_17 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_16 svg" ],
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
    } else if(jFirer.is("#mi-46aed140-Cell_41")) {
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_41 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_35 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_37 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_39 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_38 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_20 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_9 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_17 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_16 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_18 svg" ],
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_41 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_20 svg" ],
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
    } else if(jFirer.is("#mi-46aed140-Hotspot_5")) {
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_35 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_37 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_39 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_38 .verticalalign",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_9 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_17 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_16 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_18 svg" ],
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
    jFirer.parents("tr.datarow").trigger("click", true);
  })
  .on("pageload", ".s-9707a80c-b56d-43e0-9d4b-53e302c3b614 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-9707a80c-b56d-43e0-9d4b-53e302c3b614")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_20 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_18 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_16 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_9 svg",
                  "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_17 svg" ],
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Path_17 svg" ],
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_38 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #mi-46aed140-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#A78CDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Data_grid_2" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Row"
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
    }
  })
  .on("focusin", ".s-9707a80c-b56d-43e0-9d4b-53e302c3b614 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_15")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Paragraph_38",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Input_15 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "2.0px",
                      "border-right-width": "2.0px",
                      "border-bottom-width": "2.0px",
                      "border-left-width": "2.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Input_15 > .borderLayer" ],
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
                  },{
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Input_15 .paddingLayer" ],
                    "attributes": {
                      "padding-left": "15px"
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
    } else if(jFirer.is("#s-Input_16")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Paragraph_39",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Input_16 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "2.0px",
                      "border-right-width": "2.0px",
                      "border-bottom-width": "2.0px",
                      "border-left-width": "2.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Input_16 > .borderLayer" ],
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
                  },{
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Input_16 .paddingLayer" ],
                    "attributes": {
                      "padding-left": "15px"
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
    } else if(jFirer.is("#s-Input_13")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Paragraph_37",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Input_13 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "2.0px",
                      "border-right-width": "2.0px",
                      "border-bottom-width": "2.0px",
                      "border-left-width": "2.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Input_13 > .borderLayer" ],
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
                  },{
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Input_13 .paddingLayer" ],
                    "attributes": {
                      "padding-left": "15px"
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
  .on("focusout", ".s-9707a80c-b56d-43e0-9d4b-53e302c3b614 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_15")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_15",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Input_15 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#DC3545",
                      "border-right-width": "1.0px",
                      "border-right-color": "#DC3545",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#DC3545",
                      "border-left-width": "1.0px",
                      "border-left-color": "#DC3545"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Path_28","#s-Paragraph_38" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Input_15 > .borderLayer" ],
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
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_28","#s-Paragraph_38" ]
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
    } else if(jFirer.is("#s-Input_16")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_16",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Input_16 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#DC3545",
                      "border-right-width": "1.0px",
                      "border-right-color": "#DC3545",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#DC3545",
                      "border-left-width": "1.0px",
                      "border-left-color": "#DC3545"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Path_30","#s-Paragraph_39" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Input_16 > .borderLayer" ],
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
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_30","#s-Paragraph_39" ]
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
    } else if(jFirer.is("#s-Input_13")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_13",
                  "property": "jimGetValue"
                },"@" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Input_13 > .borderLayer" ],
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
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_6","#s-Paragraph_37" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Input_13 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#DC3545",
                      "border-right-width": "1.0px",
                      "border-right-color": "#DC3545",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#DC3545",
                      "border-left-width": "1.0px",
                      "border-left-color": "#DC3545"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Path_6","#s-Paragraph_37" ]
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
  .on("mouseenter dragenter", ".s-9707a80c-b56d-43e0-9d4b-53e302c3b614 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Path_3") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Path_11") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Path_12") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is(".s-Current_row_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Data_grid_1 .s-Current_row_1" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
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
    } else if(jFirer.is(".s-Hotspot_12") && jFirer.has(event.relatedTarget).length === 0) {
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
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Data_grid_1 .s-Current_row_1" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
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
    } else if(jFirer.is(".s-Hotspot_11") && jFirer.has(event.relatedTarget).length === 0) {
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
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Data_grid_1 .s-Current_row_1" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
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
    } else if(jFirer.is(".s-Hotspot_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Data_grid_1 .s-Current_row_1" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
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
    } else if(jFirer.is(".s-Hotspot_6") && jFirer.has(event.relatedTarget).length === 0) {
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
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Data_grid_1 .s-Current_row_1" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
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
    } else if(jFirer.is(".s-Hotspot_7") && jFirer.has(event.relatedTarget).length === 0) {
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
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Data_grid_1 .s-Current_row_1" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
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
    } else if(jFirer.is(".s-Hotspot_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Data_grid_1 .s-Current_row_1" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
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
    } else if(jFirer.is(".s-Hotspot_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Data_grid_1 .s-Current_row_1" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
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
    } else if(jFirer.is(".s-Hotspot_13") && jFirer.has(event.relatedTarget).length === 0) {
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
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Data_grid_1 .s-Current_row_1" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
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
    } else if(jFirer.is("#s-Button_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#3E1D7F"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 200
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
    } else if(jFirer.is("#s-Button_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Button_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#3E1D7F"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 200
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
    } else if(jFirer.is("#s-Paragraph_6") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-Rectangle_7" ]
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
    } else if(jFirer.is("#s-Hotspot_14") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-Rectangle_7" ]
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
    } else if(jFirer.is("#s-Paragraph_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-Rectangle_5" ]
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
    } else if(jFirer.is("#s-Hotspot_15") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-Rectangle_5" ]
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
    } else if(jFirer.is("#s-Paragraph_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-Rectangle_9" ]
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
    } else if(jFirer.is("#s-Hotspot_16") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-Rectangle_9" ]
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
    } else if(jFirer.is("#s-Paragraph_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-Rectangle_7" ]
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
    } else if(jFirer.is("#s-Paragraph_17") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Paragraph_17 span" ],
                    "attributes": {
                      "color": "#3E1D7F"
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
                    "target": [ "#s-9707a80c-b56d-43e0-9d4b-53e302c3b614 #s-Button_2 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-46aed140-Cell_36") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-46aed140-Group_17" ],
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
    } else if(jFirer.is("#mi-46aed140-Hotspot_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-46aed140-Group_17" ],
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
    } else if(jFirer.is("#mi-46aed140-Cell_37") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-46aed140-Group_16" ],
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
    } else if(jFirer.is("#mi-46aed140-Hotspot_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-46aed140-Group_16" ],
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
    } else if(jFirer.is("#mi-46aed140-Cell_38") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-46aed140-Group_15" ],
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
    } else if(jFirer.is("#mi-46aed140-Hotspot_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-46aed140-Group_15" ],
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
    } else if(jFirer.is("#mi-46aed140-Cell_39") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-46aed140-Group_14" ],
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
    } else if(jFirer.is("#mi-46aed140-Hotspot_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-46aed140-Group_14" ],
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
    } else if(jFirer.is("#mi-46aed140-Cell_41") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-46aed140-Group_13" ],
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
  .on("mouseleave dragleave", ".s-9707a80c-b56d-43e0-9d4b-53e302c3b614 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Path_3")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_4")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_11")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_12")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Current_row_1")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Hotspot_12")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Hotspot_11")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Hotspot_10")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Hotspot_6")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Hotspot_7")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Hotspot_8")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Hotspot_9")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Hotspot_13")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_1")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_3")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_6")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_14")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_5")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_15")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_8")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_16")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_2")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_17")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_2")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-46aed140-Cell_36")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-46aed140-Hotspot_1")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-46aed140-Cell_37")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-46aed140-Hotspot_2")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-46aed140-Cell_38")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-46aed140-Hotspot_3")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-46aed140-Cell_39")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-46aed140-Hotspot_4")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-46aed140-Cell_41")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    }
  });