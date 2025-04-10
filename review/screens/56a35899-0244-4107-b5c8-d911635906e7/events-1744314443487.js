jQuery("#simulation")
  .on("click", ".s-56a35899-0244-4107-b5c8-d911635906e7 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_207" ]
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
    } else if(jFirer.is("#s-Paragraph_320")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_207" ]
                  },
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
    } else if(jFirer.is("#s-Paragraph_321")) {
      cases = [
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
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_207" ]
                  },
                  "exectype": "timed",
                  "delay": 500
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_32","#s-Group_28","#s-Group_30" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Rectangle_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#9361F4",
                      "border-right-color": "#9361F4",
                      "border-bottom-color": "#9361F4",
                      "border-left-color": "#9361F4"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_28" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Rectangle_4 > .borderLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Rectangle_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#2E3134",
                      "border-right-color": "#2E3134",
                      "border-bottom-color": "#2E3134",
                      "border-left-color": "#2E3134"
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
    } else if(jFirer.is("#s-Ellipse_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #shapewrapper-s-Ellipse_1" ],
                    "attributes": {
                      "opacity": "0.7"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #shapewrapper-s-Ellipse_1" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
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
    } else if(jFirer.is("#s-Path_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #shapewrapper-s-Ellipse_1" ],
                    "attributes": {
                      "opacity": "0.7"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #shapewrapper-s-Ellipse_1" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
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
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_32","#s-Group_28","#s-Group_30" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Rectangle_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#9361F4",
                      "border-right-color": "#9361F4",
                      "border-bottom-color": "#9361F4",
                      "border-left-color": "#9361F4"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_30" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Rectangle_1 > .borderLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Rectangle_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#2E3134",
                      "border-right-color": "#2E3134",
                      "border-bottom-color": "#2E3134",
                      "border-left-color": "#2E3134"
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
    } else if(jFirer.is("#s-Ellipse_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #shapewrapper-s-Ellipse_2" ],
                    "attributes": {
                      "opacity": "0.7"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #shapewrapper-s-Ellipse_2" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
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
    } else if(jFirer.is("#s-Path_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #shapewrapper-s-Ellipse_2" ],
                    "attributes": {
                      "opacity": "0.7"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #shapewrapper-s-Ellipse_2" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
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
    } else if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_32","#s-Group_28","#s-Group_30" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Rectangle_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#9361F4",
                      "border-right-color": "#9361F4",
                      "border-bottom-color": "#9361F4",
                      "border-left-color": "#9361F4"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_32" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Rectangle_1 > .borderLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Rectangle_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#2E3134",
                      "border-right-color": "#2E3134",
                      "border-bottom-color": "#2E3134",
                      "border-left-color": "#2E3134"
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
    } else if(jFirer.is("#s-Ellipse_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #shapewrapper-s-Ellipse_3" ],
                    "attributes": {
                      "opacity": "0.7"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #shapewrapper-s-Ellipse_3" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
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
    } else if(jFirer.is("#s-Path_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #shapewrapper-s-Ellipse_3" ],
                    "attributes": {
                      "opacity": "0.7"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #shapewrapper-s-Ellipse_3" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
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
    } else if(jFirer.is("#s-Paragraph_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Paragraph_242 span",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Paragraph_3 span",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Paragraph_11 span" ],
                    "attributes": {
                      "color": "#5F6568"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Paragraph_3 span" ],
                    "attributes": {
                      "color": "#2B2B2B"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_33","#s-Rectangle_35","#s-Rectangle_32" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_32" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_5" ]
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
    } else if(jFirer.is("#s-Hotspot_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Paragraph_242 span",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Paragraph_3 span",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Paragraph_11 span" ],
                    "attributes": {
                      "color": "#5F6568"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Paragraph_3 span" ],
                    "attributes": {
                      "color": "#2B2B2B"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_33","#s-Rectangle_35","#s-Rectangle_32" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_32" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_5" ]
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
    } else if(jFirer.is("#s-Paragraph_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Paragraph_242 span",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Paragraph_3 span",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Paragraph_11 span" ],
                    "attributes": {
                      "color": "#5F6568"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Paragraph_3 span" ],
                    "attributes": {
                      "color": "#2B2B2B"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_33","#s-Rectangle_35","#s-Rectangle_32" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_33" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_6" ]
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
    } else if(jFirer.is("#s-Hotspot_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Paragraph_242 span",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Paragraph_3 span",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Paragraph_11 span" ],
                    "attributes": {
                      "color": "#5F6568"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Paragraph_3 span" ],
                    "attributes": {
                      "color": "#2B2B2B"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_33","#s-Rectangle_35","#s-Rectangle_32" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_33" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_6" ]
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
    } else if(jFirer.is("#s-Paragraph_242")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Paragraph_242 span",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Paragraph_3 span",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Paragraph_11 span" ],
                    "attributes": {
                      "color": "#5F6568"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Paragraph_3 span" ],
                    "attributes": {
                      "color": "#2B2B2B"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_33","#s-Rectangle_35","#s-Rectangle_32" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_35" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_7" ]
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
    } else if(jFirer.is("#s-Hotspot_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Paragraph_242 span",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Paragraph_3 span",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Paragraph_11 span" ],
                    "attributes": {
                      "color": "#5F6568"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Paragraph_3 span" ],
                    "attributes": {
                      "color": "#2B2B2B"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_33","#s-Rectangle_35","#s-Rectangle_32" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_35" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_7" ]
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
    } else if(jFirer.is("#mi-23a5141f-Cell_36")) {
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_41 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_35 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_39 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_37 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_38 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_20 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_9 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_17 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_16 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_18 svg" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_9 svg" ],
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
    } else if(jFirer.is("#mi-23a5141f-Hotspot_1")) {
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_41 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_35 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_39 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_37 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_38 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_20 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_17 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_16 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_18 svg" ],
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
    } else if(jFirer.is("#mi-23a5141f-Cell_37")) {
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_41 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_35 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_37 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_39 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_38 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_20 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_9 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_17 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_16 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_18 svg" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_37 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_16 svg" ],
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
    } else if(jFirer.is("#mi-23a5141f-Hotspot_2")) {
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_41 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_35 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_39 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_38 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_20 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_9 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_17 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_18 svg" ],
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
    } else if(jFirer.is("#mi-23a5141f-Cell_38")) {
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_41 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_35 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_39 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_37 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_38 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_20 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_9 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_17 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_16 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_18 svg" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_38 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_17 svg" ],
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
    } else if(jFirer.is("#mi-23a5141f-Hotspot_3")) {
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_41 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_35 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_39 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_37 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_20 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_9 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_16 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_18 svg" ],
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
    } else if(jFirer.is("#mi-23a5141f-Cell_39")) {
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_41 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_35 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_37 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_39 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_20 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_9 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_17 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_16 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_18 svg" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_39 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_18 svg" ],
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
    } else if(jFirer.is("#mi-23a5141f-Hotspot_4")) {
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_41 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_35 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_37 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_20 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_9 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_17 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_16 svg" ],
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
    } else if(jFirer.is("#mi-23a5141f-Cell_41")) {
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_41 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_35 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_37 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_39 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_38 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_20 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_9 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_17 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_16 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_18 svg" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_41 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_20 svg" ],
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
    } else if(jFirer.is("#mi-23a5141f-Hotspot_5")) {
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_35 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_37 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_39 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_38 .verticalalign",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_9 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_17 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_16 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_18 svg" ],
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
  .on("pageload", ".s-56a35899-0244-4107-b5c8-d911635906e7 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-56a35899-0244-4107-b5c8-d911635906e7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_9 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_17 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_20 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_16 svg",
                  "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_18 svg" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Path_20 svg" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_41 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #mi-23a5141f-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
  .on("focusin", ".s-56a35899-0244-4107-b5c8-d911635906e7 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Input_28 > .borderLayer" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Input_28 .paddingLayer" ],
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
    } else if(jFirer.is("#s-Input_27")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Input_27 > .borderLayer" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Input_27 .paddingLayer" ],
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
    } else if(jFirer.is("#s-Input_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Input_25 > .borderLayer" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Input_25 .paddingLayer" ],
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
    } else if(jFirer.is("#s-Input_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Input_24 > .borderLayer" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Input_24 .paddingLayer" ],
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
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Input_2 > .borderLayer" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Input_2 .paddingLayer" ],
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
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Input_3 > .borderLayer" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Input_3 .paddingLayer" ],
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
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Input_4 > .borderLayer" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Input_4 .paddingLayer" ],
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
  .on("focusout", ".s-56a35899-0244-4107-b5c8-d911635906e7 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Input_28 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Input_27")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Input_27 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Input_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Input_25 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Input_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Input_24 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Input_2 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Input_3 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Input_4 > .borderLayer" ],
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
  .on("mouseenter dragenter", ".s-56a35899-0244-4107-b5c8-d911635906e7 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Ellipse_35") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Rectangle_31" ],
                    "attributes": {
                      "opacity": "0.15"
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
    } else if(jFirer.is("#s-Paragraph_320") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_29" ]
                  },
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
    } else if(jFirer.is("#s-Paragraph_321") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_30" ]
                  },
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
    } else if(jFirer.is("#s-Hotspot_18") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Rectangle_31" ],
                    "attributes": {
                      "opacity": "0.3"
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
    } else if(jFirer.is("#s-Button_68") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Button_68 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-56a35899-0244-4107-b5c8-d911635906e7 #s-Button_1 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-23a5141f-Cell_36") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-23a5141f-Group_19" ],
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
    } else if(jFirer.is("#mi-23a5141f-Hotspot_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-23a5141f-Group_19" ],
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
    } else if(jFirer.is("#mi-23a5141f-Cell_37") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-23a5141f-Group_18" ],
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
    } else if(jFirer.is("#mi-23a5141f-Hotspot_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-23a5141f-Group_18" ],
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
    } else if(jFirer.is("#mi-23a5141f-Cell_38") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-23a5141f-Group_17" ],
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
    } else if(jFirer.is("#mi-23a5141f-Hotspot_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-23a5141f-Group_17" ],
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
    } else if(jFirer.is("#mi-23a5141f-Cell_39") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-23a5141f-Group_16" ],
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
    } else if(jFirer.is("#mi-23a5141f-Hotspot_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-23a5141f-Group_16" ],
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
    } else if(jFirer.is("#mi-23a5141f-Cell_41") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-23a5141f-Group_12" ],
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
  .on("mouseleave dragleave", ".s-56a35899-0244-4107-b5c8-d911635906e7 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Ellipse_35")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_320")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_321")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_18")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_68")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_1")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-23a5141f-Cell_36")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-23a5141f-Hotspot_1")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-23a5141f-Cell_37")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-23a5141f-Hotspot_2")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-23a5141f-Cell_38")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-23a5141f-Hotspot_3")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-23a5141f-Cell_39")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-23a5141f-Hotspot_4")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-23a5141f-Cell_41")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    }
  });