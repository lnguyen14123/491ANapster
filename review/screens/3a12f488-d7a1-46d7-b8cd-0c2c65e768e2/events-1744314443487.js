jQuery("#simulation")
  .on("click", ".s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Path_1")) {
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
                          "field": "8f194430-8f0f-4b80-92af-ba6385bd1eea"
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
    } else if(jFirer.is("#s-Path_2")) {
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
                          "field": "8f194430-8f0f-4b80-92af-ba6385bd1eea"
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
                          "field": "79adc6f3-2db8-4a5b-abc1-83e044ec7e45"
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
                          "field": "79adc6f3-2db8-4a5b-abc1-83e044ec7e45"
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
    } else if(jFirer.is("#s-Path_5")) {
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
                          "field": "d20e8670-79a7-4baa-b09f-752a4af29659"
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
    } else if(jFirer.is("#s-Path_6")) {
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
                          "field": "d20e8670-79a7-4baa-b09f-752a4af29659"
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
                          "field": "90772ca0-4446-469b-8d48-7d008f175ed3"
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
                          "field": "90772ca0-4446-469b-8d48-7d008f175ed3"
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
    } else if(jFirer.is(".s-Current_row_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Row" ],
                    "value": {
                      "datatype": "datarow",
                      "datamaster": "Customers",
                      "element": "#s-Data_grid_1"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9707a80c-b56d-43e0-9d4b-53e302c3b614"
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
    } else if(jFirer.is(".s-Hotspot_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Row" ],
                    "value": {
                      "datatype": "datarow",
                      "datamaster": "Customers",
                      "element": "#s-Data_grid_1"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9707a80c-b56d-43e0-9d4b-53e302c3b614"
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
    } else if(jFirer.is(".s-Hotspot_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Row" ],
                    "value": {
                      "datatype": "datarow",
                      "datamaster": "Customers",
                      "element": "#s-Data_grid_1"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9707a80c-b56d-43e0-9d4b-53e302c3b614"
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
    } else if(jFirer.is(".s-Hotspot_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Row" ],
                    "value": {
                      "datatype": "datarow",
                      "datamaster": "Customers",
                      "element": "#s-Data_grid_1"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9707a80c-b56d-43e0-9d4b-53e302c3b614"
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
    } else if(jFirer.is(".s-Hotspot_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Row" ],
                    "value": {
                      "datatype": "datarow",
                      "datamaster": "Customers",
                      "element": "#s-Data_grid_1"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9707a80c-b56d-43e0-9d4b-53e302c3b614"
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
    } else if(jFirer.is(".s-Hotspot_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Row" ],
                    "value": {
                      "datatype": "datarow",
                      "datamaster": "Customers",
                      "element": "#s-Data_grid_1"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9707a80c-b56d-43e0-9d4b-53e302c3b614"
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
    } else if(jFirer.is(".s-Hotspot_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Row" ],
                    "value": {
                      "datatype": "datarow",
                      "datamaster": "Customers",
                      "element": "#s-Data_grid_1"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9707a80c-b56d-43e0-9d4b-53e302c3b614"
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
    } else if(jFirer.is("#s-Path_14")) {
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
                        "datamaster": "Customers",
                        "value": {
                          "action": "jimContains",
                          "parameter": [ {
                            "field": "8f194430-8f0f-4b80-92af-ba6385bd1eea"
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
    } else if(jFirer.is("#mi-f2c5460c-Cell_36")) {
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_41 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_35 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_39 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_37 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_38 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_20 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_16 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_18 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_17 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_19 svg" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_16 svg" ],
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
    } else if(jFirer.is("#mi-f2c5460c-Hotspot_1")) {
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_41 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_35 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_39 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_37 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_38 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_20 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_18 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_17 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_19 svg" ],
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
    } else if(jFirer.is("#mi-f2c5460c-Cell_37")) {
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_41 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_35 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_37 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_39 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_38 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_20 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_16 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_18 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_17 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_19 svg" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_37 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_17 svg" ],
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
    } else if(jFirer.is("#mi-f2c5460c-Hotspot_2")) {
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_41 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_35 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_39 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_38 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_20 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_16 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_18 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_19 svg" ],
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
    } else if(jFirer.is("#mi-f2c5460c-Cell_38")) {
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_41 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_35 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_39 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_37 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_38 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_20 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_16 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_18 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_17 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_19 svg" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_38 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_18 svg" ],
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
    } else if(jFirer.is("#mi-f2c5460c-Hotspot_3")) {
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_41 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_35 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_39 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_37 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_20 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_16 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_17 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_19 svg" ],
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
    } else if(jFirer.is("#mi-f2c5460c-Cell_39")) {
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_41 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_35 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_37 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_39 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_20 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_16 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_18 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_17 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_19 svg" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_39 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_19 svg" ],
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
    } else if(jFirer.is("#mi-f2c5460c-Hotspot_4")) {
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_41 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_35 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_37 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_20 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_16 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_18 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_17 svg" ],
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
    } else if(jFirer.is("#mi-f2c5460c-Cell_41")) {
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_41 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_35 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_37 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_39 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_38 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_20 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_16 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_18 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_17 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_19 svg" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_41 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_20 svg" ],
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
    } else if(jFirer.is("#mi-f2c5460c-Hotspot_5")) {
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_35 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_37 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_39 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_38 .verticalalign",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_16 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_18 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_17 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_19 svg" ],
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
  .on("keyup.jim", ".s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 .keyup", function(event, data) {
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
                        "datamaster": "Customers",
                        "value": {
                          "action": "jimContains",
                          "parameter": [ {
                            "field": "8f194430-8f0f-4b80-92af-ba6385bd1eea"
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
  .on("pageload", ".s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_19 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_17 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_16 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_20 svg",
                  "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_18 svg" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Path_18 svg" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_38 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #mi-f2c5460c-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
  .on("focusin", ".s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 .focusin", function(event, data) {
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #s-Input_5 > .borderLayer" ],
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
  .on("focusout", ".s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 .focusout", function(event, data) {
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #s-Input_5 > .borderLayer" ],
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
  .on("mouseenter dragenter", ".s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Path_1") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Path_2") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Path_3") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Path_5") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Path_6") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #s-Data_grid_1 .s-Current_row_1" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #s-Data_grid_1 .s-Current_row_1" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #s-Data_grid_1 .s-Current_row_1" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #s-Data_grid_1 .s-Current_row_1" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #s-Data_grid_1 .s-Current_row_1" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #s-Data_grid_1 .s-Current_row_1" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #s-Data_grid_1 .s-Current_row_1" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #s-Paragraph_1 span" ],
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
                    "target": [ "#s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 #s-Button_2 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-f2c5460c-Cell_36") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-f2c5460c-Group_17" ],
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
    } else if(jFirer.is("#mi-f2c5460c-Hotspot_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-f2c5460c-Group_17" ],
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
    } else if(jFirer.is("#mi-f2c5460c-Cell_37") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-f2c5460c-Group_16" ],
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
    } else if(jFirer.is("#mi-f2c5460c-Hotspot_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-f2c5460c-Group_16" ],
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
    } else if(jFirer.is("#mi-f2c5460c-Cell_38") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-f2c5460c-Group_15" ],
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
    } else if(jFirer.is("#mi-f2c5460c-Hotspot_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-f2c5460c-Group_15" ],
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
    } else if(jFirer.is("#mi-f2c5460c-Cell_39") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-f2c5460c-Group_14" ],
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
    } else if(jFirer.is("#mi-f2c5460c-Hotspot_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-f2c5460c-Group_14" ],
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
    } else if(jFirer.is("#mi-f2c5460c-Cell_41") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-f2c5460c-Group_12" ],
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
  .on("mouseleave dragleave", ".s-3a12f488-d7a1-46d7-b8cd-0c2c65e768e2 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Path_1")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_2")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_3")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_4")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_5")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_6")) {
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
    } else if(jFirer.is(".s-Hotspot_11")) {
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
    } else if(jFirer.is(".s-Hotspot_10")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_1")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_2")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-f2c5460c-Cell_36")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-f2c5460c-Hotspot_1")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-f2c5460c-Cell_37")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-f2c5460c-Hotspot_2")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-f2c5460c-Cell_38")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-f2c5460c-Hotspot_3")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-f2c5460c-Cell_39")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-f2c5460c-Hotspot_4")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-f2c5460c-Cell_41")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    }
  });