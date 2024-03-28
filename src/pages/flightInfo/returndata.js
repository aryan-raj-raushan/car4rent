const returnData = [
    {
        "meta": {
          "count": 74,
          "links": {
            "self": "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAT&destinationLocationCode=DEL&departureDate=2024-04-02&returnDate=2024-04-09&adults=1&nonStop=false&currencyCode=INR&max=250"
          }
        },
        "data": [
          {
            "type": "flight-offer",
            "id": "1",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-03-24",
            "lastTicketingDateTime": "2024-03-24",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T10:20:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T12:10:00"
                    },
                    "carrierCode": "UK",
                    "number": "718",
                    "aircraft": {
                      "code": "320"
                    },
                    "operating": {
                      "carrierCode": "UK"
                    },
                    "duration": "PT1H50M",
                    "id": "27",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H40M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T18:15:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T19:55:00"
                    },
                    "carrierCode": "UK",
                    "number": "715",
                    "aircraft": {
                      "code": "320"
                    },
                    "operating": {
                      "carrierCode": "UK"
                    },
                    "duration": "PT1H40M",
                    "id": "65",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "10615.00",
              "base": "9024.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "10615.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "UK"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "10615.00",
                  "base": "9024.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "27",
                    "cabin": "ECONOMY",
                    "fareBasis": "V0RPRYS",
                    "brandedFare": "ECOYS",
                    "brandedFareLabel": "ECO STANDARD",
                    "class": "V",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    },
                    "amenities": [
                      {
                        "description": "EXCESS HAND BAGGAGE 5KG",
                        "isChargeable": true,
                        "amenityType": "BAGGAGE",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "VISTARA SELECT",
                        "isChargeable": false,
                        "amenityType": "PRE_RESERVED_SEAT",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "MEAL SERVICES",
                        "isChargeable": false,
                        "amenityType": "MEAL",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY CHECK IN",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BOARDING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BAGGAGE HANDLING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "UPGRADE ELIGIBILITY",
                        "isChargeable": true,
                        "amenityType": "BRANDED_FARES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      }
                    ]
                  },
                  {
                    "segmentId": "65",
                    "cabin": "ECONOMY",
                    "fareBasis": "V0RPRYS",
                    "brandedFare": "ECOYS",
                    "brandedFareLabel": "ECO STANDARD",
                    "class": "V",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    },
                    "amenities": [
                      {
                        "description": "EXCESS HAND BAGGAGE 5KG",
                        "isChargeable": true,
                        "amenityType": "BAGGAGE",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "VISTARA SELECT",
                        "isChargeable": false,
                        "amenityType": "PRE_RESERVED_SEAT",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "MEAL SERVICES",
                        "isChargeable": false,
                        "amenityType": "MEAL",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY CHECK IN",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BOARDING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BAGGAGE HANDLING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "UPGRADE ELIGIBILITY",
                        "isChargeable": true,
                        "amenityType": "BRANDED_FARES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "2",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-03-24",
            "lastTicketingDateTime": "2024-03-24",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T20:30:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T22:20:00"
                    },
                    "carrierCode": "UK",
                    "number": "716",
                    "aircraft": {
                      "code": "320"
                    },
                    "operating": {
                      "carrierCode": "UK"
                    },
                    "duration": "PT1H50M",
                    "id": "31",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H40M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T18:15:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T19:55:00"
                    },
                    "carrierCode": "UK",
                    "number": "715",
                    "aircraft": {
                      "code": "320"
                    },
                    "operating": {
                      "carrierCode": "UK"
                    },
                    "duration": "PT1H40M",
                    "id": "65",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "10615.00",
              "base": "9024.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "10615.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "UK"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "10615.00",
                  "base": "9024.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "31",
                    "cabin": "ECONOMY",
                    "fareBasis": "V0RPRYS",
                    "brandedFare": "ECOYS",
                    "brandedFareLabel": "ECO STANDARD",
                    "class": "V",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    },
                    "amenities": [
                      {
                        "description": "EXCESS HAND BAGGAGE 5KG",
                        "isChargeable": true,
                        "amenityType": "BAGGAGE",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "VISTARA SELECT",
                        "isChargeable": false,
                        "amenityType": "PRE_RESERVED_SEAT",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "MEAL SERVICES",
                        "isChargeable": false,
                        "amenityType": "MEAL",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY CHECK IN",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BOARDING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BAGGAGE HANDLING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "UPGRADE ELIGIBILITY",
                        "isChargeable": true,
                        "amenityType": "BRANDED_FARES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      }
                    ]
                  },
                  {
                    "segmentId": "65",
                    "cabin": "ECONOMY",
                    "fareBasis": "V0RPRYS",
                    "brandedFare": "ECOYS",
                    "brandedFareLabel": "ECO STANDARD",
                    "class": "V",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    },
                    "amenities": [
                      {
                        "description": "EXCESS HAND BAGGAGE 5KG",
                        "isChargeable": true,
                        "amenityType": "BAGGAGE",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "VISTARA SELECT",
                        "isChargeable": false,
                        "amenityType": "PRE_RESERVED_SEAT",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "MEAL SERVICES",
                        "isChargeable": false,
                        "amenityType": "MEAL",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY CHECK IN",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BOARDING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BAGGAGE HANDLING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "UPGRADE ELIGIBILITY",
                        "isChargeable": true,
                        "amenityType": "BRANDED_FARES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "3",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-03-24",
            "lastTicketingDateTime": "2024-03-24",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T10:20:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T12:10:00"
                    },
                    "carrierCode": "UK",
                    "number": "718",
                    "aircraft": {
                      "code": "320"
                    },
                    "operating": {
                      "carrierCode": "UK"
                    },
                    "duration": "PT1H50M",
                    "id": "27",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H45M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T08:00:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T09:45:00"
                    },
                    "carrierCode": "UK",
                    "number": "717",
                    "aircraft": {
                      "code": "320"
                    },
                    "operating": {
                      "carrierCode": "UK"
                    },
                    "duration": "PT1H45M",
                    "id": "69",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "10615.00",
              "base": "9024.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "10615.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "UK"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "10615.00",
                  "base": "9024.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "27",
                    "cabin": "ECONOMY",
                    "fareBasis": "V0RPRYS",
                    "brandedFare": "ECOYS",
                    "brandedFareLabel": "ECO STANDARD",
                    "class": "V",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    },
                    "amenities": [
                      {
                        "description": "EXCESS HAND BAGGAGE 5KG",
                        "isChargeable": true,
                        "amenityType": "BAGGAGE",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "VISTARA SELECT",
                        "isChargeable": false,
                        "amenityType": "PRE_RESERVED_SEAT",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "MEAL SERVICES",
                        "isChargeable": false,
                        "amenityType": "MEAL",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY CHECK IN",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BOARDING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BAGGAGE HANDLING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "UPGRADE ELIGIBILITY",
                        "isChargeable": true,
                        "amenityType": "BRANDED_FARES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      }
                    ]
                  },
                  {
                    "segmentId": "69",
                    "cabin": "ECONOMY",
                    "fareBasis": "V0RPRYS",
                    "brandedFare": "ECOYS",
                    "brandedFareLabel": "ECO STANDARD",
                    "class": "V",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    },
                    "amenities": [
                      {
                        "description": "EXCESS HAND BAGGAGE 5KG",
                        "isChargeable": true,
                        "amenityType": "BAGGAGE",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "VISTARA SELECT",
                        "isChargeable": false,
                        "amenityType": "PRE_RESERVED_SEAT",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "MEAL SERVICES",
                        "isChargeable": false,
                        "amenityType": "MEAL",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY CHECK IN",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BOARDING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BAGGAGE HANDLING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "UPGRADE ELIGIBILITY",
                        "isChargeable": true,
                        "amenityType": "BRANDED_FARES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "4",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-03-24",
            "lastTicketingDateTime": "2024-03-24",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T20:30:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T22:20:00"
                    },
                    "carrierCode": "UK",
                    "number": "716",
                    "aircraft": {
                      "code": "320"
                    },
                    "operating": {
                      "carrierCode": "UK"
                    },
                    "duration": "PT1H50M",
                    "id": "31",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H45M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T08:00:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T09:45:00"
                    },
                    "carrierCode": "UK",
                    "number": "717",
                    "aircraft": {
                      "code": "320"
                    },
                    "operating": {
                      "carrierCode": "UK"
                    },
                    "duration": "PT1H45M",
                    "id": "69",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "10615.00",
              "base": "9024.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "10615.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "UK"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "10615.00",
                  "base": "9024.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "31",
                    "cabin": "ECONOMY",
                    "fareBasis": "V0RPRYS",
                    "brandedFare": "ECOYS",
                    "brandedFareLabel": "ECO STANDARD",
                    "class": "V",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    },
                    "amenities": [
                      {
                        "description": "EXCESS HAND BAGGAGE 5KG",
                        "isChargeable": true,
                        "amenityType": "BAGGAGE",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "VISTARA SELECT",
                        "isChargeable": false,
                        "amenityType": "PRE_RESERVED_SEAT",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "MEAL SERVICES",
                        "isChargeable": false,
                        "amenityType": "MEAL",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY CHECK IN",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BOARDING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BAGGAGE HANDLING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "UPGRADE ELIGIBILITY",
                        "isChargeable": true,
                        "amenityType": "BRANDED_FARES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      }
                    ]
                  },
                  {
                    "segmentId": "69",
                    "cabin": "ECONOMY",
                    "fareBasis": "V0RPRYS",
                    "brandedFare": "ECOYS",
                    "brandedFareLabel": "ECO STANDARD",
                    "class": "V",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    },
                    "amenities": [
                      {
                        "description": "EXCESS HAND BAGGAGE 5KG",
                        "isChargeable": true,
                        "amenityType": "BAGGAGE",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "VISTARA SELECT",
                        "isChargeable": false,
                        "amenityType": "PRE_RESERVED_SEAT",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "MEAL SERVICES",
                        "isChargeable": false,
                        "amenityType": "MEAL",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY CHECK IN",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BOARDING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BAGGAGE HANDLING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "UPGRADE ELIGIBILITY",
                        "isChargeable": true,
                        "amenityType": "BRANDED_FARES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "5",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T16:00:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T17:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "408",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "28",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T13:35:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T15:25:00"
                    },
                    "carrierCode": "AI",
                    "number": "407",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "73",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "13561.00",
              "base": "11750.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "13561.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "13561.00",
                  "base": "11750.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "28",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "73",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "6",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T16:00:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T17:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "408",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "28",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T16:45:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T18:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "415",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "74",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "13561.00",
              "base": "11750.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "13561.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "13561.00",
                  "base": "11750.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "28",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "74",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "7",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T19:10:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T21:00:00"
                    },
                    "carrierCode": "AI",
                    "number": "416",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "30",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T13:35:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T15:25:00"
                    },
                    "carrierCode": "AI",
                    "number": "407",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "73",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "13561.00",
              "base": "11750.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "13561.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "13561.00",
                  "base": "11750.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "30",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "73",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "8",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T19:10:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T21:00:00"
                    },
                    "carrierCode": "AI",
                    "number": "416",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "30",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T16:45:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T18:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "415",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "74",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "13561.00",
              "base": "11750.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "13561.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "13561.00",
                  "base": "11750.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "30",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "74",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "9",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T16:00:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T17:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "408",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "28",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT6H35M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T07:00:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-09T09:15:00"
                    },
                    "carrierCode": "AI",
                    "number": "887",
                    "aircraft": {
                      "code": "321"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H15M",
                    "id": "55",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-09T11:00:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T13:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "673",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H35M",
                    "id": "56",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "21824.00",
              "base": "19450.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "21824.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "21824.00",
                  "base": "19450.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "28",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "55",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "56",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "10",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T19:10:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T21:00:00"
                    },
                    "carrierCode": "AI",
                    "number": "416",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "30",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT6H35M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T07:00:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-09T09:15:00"
                    },
                    "carrierCode": "AI",
                    "number": "887",
                    "aircraft": {
                      "code": "321"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H15M",
                    "id": "55",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-09T11:00:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T13:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "673",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H35M",
                    "id": "56",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "21824.00",
              "base": "19450.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "21824.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "21824.00",
                  "base": "19450.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "30",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "55",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "56",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "11",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T16:00:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T17:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "408",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "28",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT15H5M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T22:30:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T00:45:00"
                    },
                    "carrierCode": "AI",
                    "number": "814",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H15M",
                    "id": "43",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T11:00:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-10T13:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "673",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H35M",
                    "id": "44",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "21824.00",
              "base": "19450.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "21824.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "21824.00",
                  "base": "19450.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "28",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "43",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "44",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "12",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T19:10:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T21:00:00"
                    },
                    "carrierCode": "AI",
                    "number": "416",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "30",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT15H5M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T22:30:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T00:45:00"
                    },
                    "carrierCode": "AI",
                    "number": "814",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H15M",
                    "id": "43",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T11:00:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-10T13:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "673",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H35M",
                    "id": "44",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "21824.00",
              "base": "19450.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "21824.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "21824.00",
                  "base": "19450.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "30",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "43",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "44",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "13",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T16:00:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T17:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "408",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "28",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT16H15M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T21:20:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-09T23:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "605",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H15M",
                    "id": "45",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T11:00:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-10T13:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "673",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H35M",
                    "id": "46",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "21824.00",
              "base": "19450.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "21824.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "21824.00",
                  "base": "19450.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "28",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "45",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "46",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "14",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T19:10:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T21:00:00"
                    },
                    "carrierCode": "AI",
                    "number": "416",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "30",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT16H15M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T21:20:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-09T23:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "605",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H15M",
                    "id": "45",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T11:00:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-10T13:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "673",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H35M",
                    "id": "46",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "21824.00",
              "base": "19450.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "21824.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "21824.00",
                  "base": "19450.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "30",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "45",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "46",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "15",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T16:00:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T17:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "408",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "28",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT17H35M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T20:00:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-09T22:10:00"
                    },
                    "carrierCode": "AI",
                    "number": "805",
                    "aircraft": {
                      "code": "77W"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H10M",
                    "id": "60",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T11:00:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-10T13:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "673",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H35M",
                    "id": "61",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "21824.00",
              "base": "19450.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "21824.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "21824.00",
                  "base": "19450.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "28",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "60",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "61",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "16",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T19:10:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T21:00:00"
                    },
                    "carrierCode": "AI",
                    "number": "416",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "30",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT17H35M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T20:00:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-09T22:10:00"
                    },
                    "carrierCode": "AI",
                    "number": "805",
                    "aircraft": {
                      "code": "77W"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H10M",
                    "id": "60",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T11:00:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-10T13:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "673",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H35M",
                    "id": "61",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "21824.00",
              "base": "19450.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "21824.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "21824.00",
                  "base": "19450.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "30",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "60",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "61",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "17",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT6H5M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T14:15:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T17:05:00"
                    },
                    "carrierCode": "AI",
                    "number": "732",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H50M",
                    "id": "7",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T18:05:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T20:20:00"
                    },
                    "carrierCode": "AI",
                    "number": "660",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H15M",
                    "id": "8",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T13:35:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T15:25:00"
                    },
                    "carrierCode": "AI",
                    "number": "407",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "73",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "22166.00",
              "base": "19775.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "22166.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "22166.00",
                  "base": "19775.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "7",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "8",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "73",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "18",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT6H5M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T14:15:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T17:05:00"
                    },
                    "carrierCode": "AI",
                    "number": "732",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H50M",
                    "id": "7",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T18:05:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T20:20:00"
                    },
                    "carrierCode": "AI",
                    "number": "660",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H15M",
                    "id": "8",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T16:45:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T18:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "415",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "74",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "22166.00",
              "base": "19775.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "22166.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "22166.00",
                  "base": "19775.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "7",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "8",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "74",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "19",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT7H",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T14:15:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T17:05:00"
                    },
                    "carrierCode": "AI",
                    "number": "732",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H50M",
                    "id": "1",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T19:00:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T21:15:00"
                    },
                    "carrierCode": "AI",
                    "number": "888",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H15M",
                    "id": "2",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T13:35:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T15:25:00"
                    },
                    "carrierCode": "AI",
                    "number": "407",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "73",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "22166.00",
              "base": "19775.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "22166.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "22166.00",
                  "base": "19775.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "1",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "2",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "73",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "20",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT7H",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T14:15:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T17:05:00"
                    },
                    "carrierCode": "AI",
                    "number": "732",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H50M",
                    "id": "1",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T19:00:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T21:15:00"
                    },
                    "carrierCode": "AI",
                    "number": "888",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H15M",
                    "id": "2",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T16:45:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T18:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "415",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "74",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "22166.00",
              "base": "19775.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "22166.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "22166.00",
                  "base": "19775.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "1",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "2",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "74",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "21",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT9H",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T14:15:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T17:05:00"
                    },
                    "carrierCode": "AI",
                    "number": "732",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H50M",
                    "id": "3",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T21:00:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T23:15:00"
                    },
                    "carrierCode": "AI",
                    "number": "816",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H15M",
                    "id": "4",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T13:35:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T15:25:00"
                    },
                    "carrierCode": "AI",
                    "number": "407",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "73",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "22166.00",
              "base": "19775.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "22166.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "22166.00",
                  "base": "19775.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "3",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "4",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "73",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "22",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT9H",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T14:15:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T17:05:00"
                    },
                    "carrierCode": "AI",
                    "number": "732",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H50M",
                    "id": "3",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T21:00:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T23:15:00"
                    },
                    "carrierCode": "AI",
                    "number": "816",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H15M",
                    "id": "4",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T16:45:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T18:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "415",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "74",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "22166.00",
              "base": "19775.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "22166.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "22166.00",
                  "base": "19775.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "3",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "4",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "74",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "23",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT19H",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T14:15:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T17:05:00"
                    },
                    "carrierCode": "AI",
                    "number": "732",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H50M",
                    "id": "5",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-03T07:05:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-03T09:15:00"
                    },
                    "carrierCode": "AI",
                    "number": "864",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H10M",
                    "id": "6",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T13:35:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T15:25:00"
                    },
                    "carrierCode": "AI",
                    "number": "407",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "73",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "22166.00",
              "base": "19775.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "22166.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "22166.00",
                  "base": "19775.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "5",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "6",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "73",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "24",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT19H",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T14:15:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T17:05:00"
                    },
                    "carrierCode": "AI",
                    "number": "732",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H50M",
                    "id": "5",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-03T07:05:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-03T09:15:00"
                    },
                    "carrierCode": "AI",
                    "number": "864",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H10M",
                    "id": "6",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T16:45:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T18:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "415",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "74",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "22166.00",
              "base": "19775.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "22166.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "22166.00",
                  "base": "19775.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "5",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "6",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "74",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "25",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T09:20:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T11:10:00"
                    },
                    "carrierCode": "SG",
                    "number": "8729",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT1H50M",
                    "id": "26",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H45M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T07:05:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T08:50:00"
                    },
                    "carrierCode": "SG",
                    "number": "8721",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT1H45M",
                    "id": "68",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "22317.00",
              "base": "18430.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "22317.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "GP"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "22317.00",
                  "base": "18430.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "26",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "68",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "26",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T17:00:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T18:50:00"
                    },
                    "carrierCode": "SG",
                    "number": "481",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT1H50M",
                    "id": "29",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H45M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T07:05:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T08:50:00"
                    },
                    "carrierCode": "SG",
                    "number": "8721",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT1H45M",
                    "id": "68",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "22317.00",
              "base": "18430.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "22317.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "GP"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "22317.00",
                  "base": "18430.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "29",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "68",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "27",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T09:20:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T11:10:00"
                    },
                    "carrierCode": "SG",
                    "number": "8729",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT1H50M",
                    "id": "26",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H55M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "1D",
                      "at": "2024-04-09T14:25:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T16:20:00"
                    },
                    "carrierCode": "SG",
                    "number": "480",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT1H55M",
                    "id": "75",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "22317.00",
              "base": "18430.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "22317.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "GP"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "22317.00",
                  "base": "18430.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "26",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "75",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "28",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T17:00:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T18:50:00"
                    },
                    "carrierCode": "SG",
                    "number": "481",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT1H50M",
                    "id": "29",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H55M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "1D",
                      "at": "2024-04-09T14:25:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T16:20:00"
                    },
                    "carrierCode": "SG",
                    "number": "480",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT1H55M",
                    "id": "75",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "22317.00",
              "base": "18430.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "22317.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "GP"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "22317.00",
                  "base": "18430.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "29",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "75",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "29",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T16:00:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T17:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "408",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "28",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT26H55M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T10:40:00"
                    },
                    "arrival": {
                      "iataCode": "GOI",
                      "at": "2024-04-09T13:25:00"
                    },
                    "carrierCode": "AI",
                    "number": "885",
                    "aircraft": {
                      "code": "32A"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H45M",
                    "id": "76",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "GOI",
                      "at": "2024-04-09T23:00:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T00:20:00"
                    },
                    "carrierCode": "AI",
                    "number": "697",
                    "aircraft": {
                      "code": "321"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H20M",
                    "id": "77",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T11:00:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-10T13:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "673",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H35M",
                    "id": "78",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "26016.00",
              "base": "23272.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "26016.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "26016.00",
                  "base": "23272.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "28",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "76",
                    "cabin": "ECONOMY",
                    "fareBasis": "SIPYL",
                    "class": "S",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "77",
                    "cabin": "ECONOMY",
                    "fareBasis": "LIP",
                    "class": "L",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "78",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "30",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T19:10:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T21:00:00"
                    },
                    "carrierCode": "AI",
                    "number": "416",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "30",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT26H55M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T10:40:00"
                    },
                    "arrival": {
                      "iataCode": "GOI",
                      "at": "2024-04-09T13:25:00"
                    },
                    "carrierCode": "AI",
                    "number": "885",
                    "aircraft": {
                      "code": "32A"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H45M",
                    "id": "76",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "GOI",
                      "at": "2024-04-09T23:00:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T00:20:00"
                    },
                    "carrierCode": "AI",
                    "number": "697",
                    "aircraft": {
                      "code": "321"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H20M",
                    "id": "77",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T11:00:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-10T13:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "673",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H35M",
                    "id": "78",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "26016.00",
              "base": "23272.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "26016.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "26016.00",
                  "base": "23272.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "30",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "76",
                    "cabin": "ECONOMY",
                    "fareBasis": "SIPYL",
                    "class": "S",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "77",
                    "cabin": "ECONOMY",
                    "fareBasis": "LIP",
                    "class": "L",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "78",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "31",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T16:00:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T17:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "408",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "28",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT8H35M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T05:00:00"
                    },
                    "arrival": {
                      "iataCode": "IXU",
                      "at": "2024-04-09T07:00:00"
                    },
                    "carrierCode": "AI",
                    "number": "443",
                    "aircraft": {
                      "code": "32A"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H",
                    "id": "57",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "IXU",
                      "at": "2024-04-09T08:50:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-09T09:55:00"
                    },
                    "carrierCode": "AI",
                    "number": "400",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H5M",
                    "id": "58",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-09T11:00:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T13:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "673",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H35M",
                    "id": "59",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "26264.00",
              "base": "22805.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "26264.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "26264.00",
                  "base": "22805.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "28",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "57",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "58",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "59",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "32",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T19:10:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T21:00:00"
                    },
                    "carrierCode": "AI",
                    "number": "416",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "30",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT8H35M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T05:00:00"
                    },
                    "arrival": {
                      "iataCode": "IXU",
                      "at": "2024-04-09T07:00:00"
                    },
                    "carrierCode": "AI",
                    "number": "443",
                    "aircraft": {
                      "code": "32A"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H",
                    "id": "57",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "IXU",
                      "at": "2024-04-09T08:50:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-09T09:55:00"
                    },
                    "carrierCode": "AI",
                    "number": "400",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H5M",
                    "id": "58",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-09T11:00:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T13:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "673",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H35M",
                    "id": "59",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "26264.00",
              "base": "22805.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "26264.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "26264.00",
                  "base": "22805.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "30",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "57",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "58",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "59",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "33",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T16:00:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T17:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "408",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "28",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT26H30M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T11:05:00"
                    },
                    "arrival": {
                      "iataCode": "HYD",
                      "at": "2024-04-09T13:25:00"
                    },
                    "carrierCode": "AI",
                    "number": "522",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H20M",
                    "id": "52",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "HYD",
                      "at": "2024-04-09T22:30:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T00:10:00"
                    },
                    "carrierCode": "AI",
                    "number": "698",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H40M",
                    "id": "53",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T11:00:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-10T13:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "673",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H35M",
                    "id": "54",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "26286.00",
              "base": "23529.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "26286.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "26286.00",
                  "base": "23529.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "28",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "52",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "53",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIPYL",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "54",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "34",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T19:10:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T21:00:00"
                    },
                    "carrierCode": "AI",
                    "number": "416",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "30",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT26H30M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T11:05:00"
                    },
                    "arrival": {
                      "iataCode": "HYD",
                      "at": "2024-04-09T13:25:00"
                    },
                    "carrierCode": "AI",
                    "number": "522",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H20M",
                    "id": "52",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "HYD",
                      "at": "2024-04-09T22:30:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T00:10:00"
                    },
                    "carrierCode": "AI",
                    "number": "698",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H40M",
                    "id": "53",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T11:00:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-10T13:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "673",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H35M",
                    "id": "54",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "26286.00",
              "base": "23529.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "26286.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "26286.00",
                  "base": "23529.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "30",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "52",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "53",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIPYL",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "54",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "35",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T16:00:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T17:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "408",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "28",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT20H45M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T16:50:00"
                    },
                    "arrival": {
                      "iataCode": "HYD",
                      "at": "2024-04-09T19:10:00"
                    },
                    "carrierCode": "AI",
                    "number": "544",
                    "aircraft": {
                      "code": "77W"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H20M",
                    "id": "70",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "HYD",
                      "at": "2024-04-09T22:30:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T00:10:00"
                    },
                    "carrierCode": "AI",
                    "number": "698",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H40M",
                    "id": "71",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T11:00:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-10T13:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "673",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H35M",
                    "id": "72",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "26811.00",
              "base": "24029.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "26811.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "26811.00",
                  "base": "24029.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "28",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "70",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "71",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIPYL",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "72",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "36",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T19:10:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T21:00:00"
                    },
                    "carrierCode": "AI",
                    "number": "416",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "30",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT20H45M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T16:50:00"
                    },
                    "arrival": {
                      "iataCode": "HYD",
                      "at": "2024-04-09T19:10:00"
                    },
                    "carrierCode": "AI",
                    "number": "544",
                    "aircraft": {
                      "code": "77W"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H20M",
                    "id": "70",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "HYD",
                      "at": "2024-04-09T22:30:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T00:10:00"
                    },
                    "carrierCode": "AI",
                    "number": "698",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H40M",
                    "id": "71",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T11:00:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-10T13:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "673",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H35M",
                    "id": "72",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "26811.00",
              "base": "24029.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "26811.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "26811.00",
                  "base": "24029.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "30",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "70",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "71",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIPYL",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "72",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "37",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T16:00:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T17:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "408",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "28",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT27H55M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T09:40:00"
                    },
                    "arrival": {
                      "iataCode": "HYD",
                      "at": "2024-04-09T12:00:00"
                    },
                    "carrierCode": "AI",
                    "number": "542",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H20M",
                    "id": "79",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "HYD",
                      "at": "2024-04-09T22:30:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T00:10:00"
                    },
                    "carrierCode": "AI",
                    "number": "698",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H40M",
                    "id": "80",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T11:00:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-10T13:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "673",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H35M",
                    "id": "81",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "26811.00",
              "base": "24029.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "26811.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "26811.00",
                  "base": "24029.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "28",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "79",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "80",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIPYL",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "81",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "38",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T19:10:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T21:00:00"
                    },
                    "carrierCode": "AI",
                    "number": "416",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "30",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT27H55M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T09:40:00"
                    },
                    "arrival": {
                      "iataCode": "HYD",
                      "at": "2024-04-09T12:00:00"
                    },
                    "carrierCode": "AI",
                    "number": "542",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H20M",
                    "id": "79",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "HYD",
                      "at": "2024-04-09T22:30:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T00:10:00"
                    },
                    "carrierCode": "AI",
                    "number": "698",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H40M",
                    "id": "80",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T11:00:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-10T13:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "673",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H35M",
                    "id": "81",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "26811.00",
              "base": "24029.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "26811.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "26811.00",
                  "base": "24029.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "30",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "79",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "80",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIPYL",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "81",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "39",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T16:00:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T17:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "408",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "28",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT30H35M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T07:00:00"
                    },
                    "arrival": {
                      "iataCode": "HYD",
                      "at": "2024-04-09T09:20:00"
                    },
                    "carrierCode": "AI",
                    "number": "560",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H20M",
                    "id": "62",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "HYD",
                      "at": "2024-04-09T22:30:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T00:10:00"
                    },
                    "carrierCode": "AI",
                    "number": "698",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H40M",
                    "id": "63",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T11:00:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-10T13:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "673",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H35M",
                    "id": "64",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "26811.00",
              "base": "24029.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "26811.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "26811.00",
                  "base": "24029.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "28",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "62",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "63",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIPYL",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "64",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "40",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T19:10:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T21:00:00"
                    },
                    "carrierCode": "AI",
                    "number": "416",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "30",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT30H35M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T07:00:00"
                    },
                    "arrival": {
                      "iataCode": "HYD",
                      "at": "2024-04-09T09:20:00"
                    },
                    "carrierCode": "AI",
                    "number": "560",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H20M",
                    "id": "62",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "HYD",
                      "at": "2024-04-09T22:30:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T00:10:00"
                    },
                    "carrierCode": "AI",
                    "number": "698",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H40M",
                    "id": "63",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T11:00:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-10T13:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "673",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H35M",
                    "id": "64",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "26811.00",
              "base": "24029.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "26811.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "26811.00",
                  "base": "24029.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "30",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "62",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "63",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIPYL",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "64",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "41",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T16:00:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T17:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "408",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "28",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT16H25M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T21:10:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-10T00:05:00"
                    },
                    "carrierCode": "AI",
                    "number": "504",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H55M",
                    "id": "47",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "terminal": "2",
                      "at": "2024-04-10T06:40:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T08:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "640",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H55M",
                    "id": "48",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T11:00:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-10T13:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "673",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H35M",
                    "id": "49",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "27573.00",
              "base": "24755.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "27573.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "27573.00",
                  "base": "24755.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "28",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "47",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "48",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "49",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "42",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T19:10:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T21:00:00"
                    },
                    "carrierCode": "AI",
                    "number": "416",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "30",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT16H25M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T21:10:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-10T00:05:00"
                    },
                    "carrierCode": "AI",
                    "number": "504",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H55M",
                    "id": "47",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "terminal": "2",
                      "at": "2024-04-10T06:40:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T08:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "640",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H55M",
                    "id": "48",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-10T11:00:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-10T13:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "673",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H35M",
                    "id": "49",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "27573.00",
              "base": "24755.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "27573.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "27573.00",
                  "base": "24755.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "30",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "47",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "48",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "49",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "43",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT24H30M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T14:15:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T17:05:00"
                    },
                    "carrierCode": "AI",
                    "number": "732",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H50M",
                    "id": "17",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-03T04:00:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-03T05:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "621",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "18",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "terminal": "2",
                      "at": "2024-04-03T11:45:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-03T14:45:00"
                    },
                    "carrierCode": "AI",
                    "number": "507",
                    "aircraft": {
                      "code": "321"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT3H",
                    "id": "19",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T13:35:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T15:25:00"
                    },
                    "carrierCode": "AI",
                    "number": "407",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "73",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "27809.00",
              "base": "24980.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "27809.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "27809.00",
                  "base": "24980.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "17",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "18",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "19",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "73",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "44",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT24H30M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T14:15:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T17:05:00"
                    },
                    "carrierCode": "AI",
                    "number": "732",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H50M",
                    "id": "17",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-03T04:00:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-03T05:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "621",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "18",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "terminal": "2",
                      "at": "2024-04-03T11:45:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-03T14:45:00"
                    },
                    "carrierCode": "AI",
                    "number": "507",
                    "aircraft": {
                      "code": "321"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT3H",
                    "id": "19",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T16:45:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T18:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "415",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "74",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "27809.00",
              "base": "24980.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "27809.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "27809.00",
                  "base": "24980.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "17",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "18",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "19",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "74",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "45",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT27H40M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T14:15:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T17:05:00"
                    },
                    "carrierCode": "AI",
                    "number": "732",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H50M",
                    "id": "20",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-03T04:00:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-03T05:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "621",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "21",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "terminal": "2",
                      "at": "2024-04-03T15:00:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-03T17:55:00"
                    },
                    "carrierCode": "AI",
                    "number": "511",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H55M",
                    "id": "22",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T13:35:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T15:25:00"
                    },
                    "carrierCode": "AI",
                    "number": "407",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "73",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "27809.00",
              "base": "24980.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "27809.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "27809.00",
                  "base": "24980.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "20",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "21",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "22",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "73",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "46",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT27H40M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T14:15:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T17:05:00"
                    },
                    "carrierCode": "AI",
                    "number": "732",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H50M",
                    "id": "20",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-03T04:00:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-03T05:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "621",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "21",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "terminal": "2",
                      "at": "2024-04-03T15:00:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-03T17:55:00"
                    },
                    "carrierCode": "AI",
                    "number": "511",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H55M",
                    "id": "22",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T16:45:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T18:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "415",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "74",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "27809.00",
              "base": "24980.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "27809.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "27809.00",
                  "base": "24980.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "20",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "21",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "22",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "74",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "47",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT19H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T14:15:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T17:05:00"
                    },
                    "carrierCode": "AI",
                    "number": "732",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H50M",
                    "id": "32",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-03T04:00:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-03T05:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "621",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "33",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "terminal": "2",
                      "at": "2024-04-03T07:10:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-03T10:05:00"
                    },
                    "carrierCode": "AI",
                    "number": "513",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H55M",
                    "id": "34",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T13:35:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T15:25:00"
                    },
                    "carrierCode": "AI",
                    "number": "407",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "73",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "28114.00",
              "base": "25270.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "28114.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "28114.00",
                  "base": "25270.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "32",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "33",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "34",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "73",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "48",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT19H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T14:15:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T17:05:00"
                    },
                    "carrierCode": "AI",
                    "number": "732",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H50M",
                    "id": "32",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-03T04:00:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-03T05:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "621",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "33",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "terminal": "2",
                      "at": "2024-04-03T07:10:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-03T10:05:00"
                    },
                    "carrierCode": "AI",
                    "number": "513",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H55M",
                    "id": "34",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T16:45:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T18:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "415",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "74",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "28114.00",
              "base": "25270.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "28114.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "28114.00",
                  "base": "25270.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "32",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "33",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "34",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "74",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "49",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT22H25M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T14:15:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T17:05:00"
                    },
                    "carrierCode": "AI",
                    "number": "732",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H50M",
                    "id": "14",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-03T04:00:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-03T05:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "621",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "15",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "terminal": "2",
                      "at": "2024-04-03T09:40:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-03T12:40:00"
                    },
                    "carrierCode": "AI",
                    "number": "505",
                    "aircraft": {
                      "code": "321"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT3H",
                    "id": "16",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T13:35:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T15:25:00"
                    },
                    "carrierCode": "AI",
                    "number": "407",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "73",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "28114.00",
              "base": "25270.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "28114.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "28114.00",
                  "base": "25270.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "14",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "15",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "16",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "73",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "50",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT22H25M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T14:15:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T17:05:00"
                    },
                    "carrierCode": "AI",
                    "number": "732",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H50M",
                    "id": "14",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-03T04:00:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-03T05:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "621",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "15",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "terminal": "2",
                      "at": "2024-04-03T09:40:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-03T12:40:00"
                    },
                    "carrierCode": "AI",
                    "number": "505",
                    "aircraft": {
                      "code": "321"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT3H",
                    "id": "16",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T16:45:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T18:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "415",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "74",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "28114.00",
              "base": "25270.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "28114.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "28114.00",
                  "base": "25270.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "14",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "15",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "16",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "74",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "51",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT25H55M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T14:15:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T17:05:00"
                    },
                    "carrierCode": "AI",
                    "number": "732",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H50M",
                    "id": "37",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-03T04:00:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-03T05:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "621",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "38",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "terminal": "2",
                      "at": "2024-04-03T13:15:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-03T16:10:00"
                    },
                    "carrierCode": "AI",
                    "number": "501",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H55M",
                    "id": "39",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T13:35:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T15:25:00"
                    },
                    "carrierCode": "AI",
                    "number": "407",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "73",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "28114.00",
              "base": "25270.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "28114.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "28114.00",
                  "base": "25270.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "37",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "38",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "39",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "73",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "52",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT25H55M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T14:15:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T17:05:00"
                    },
                    "carrierCode": "AI",
                    "number": "732",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H50M",
                    "id": "37",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-03T04:00:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-03T05:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "621",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "38",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "terminal": "2",
                      "at": "2024-04-03T13:15:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-03T16:10:00"
                    },
                    "carrierCode": "AI",
                    "number": "501",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H55M",
                    "id": "39",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T16:45:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T18:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "415",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "74",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "28114.00",
              "base": "25270.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "28114.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "28114.00",
                  "base": "25270.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "37",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "38",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "39",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "74",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "53",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT29H55M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T14:15:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T17:05:00"
                    },
                    "carrierCode": "AI",
                    "number": "732",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H50M",
                    "id": "40",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-03T04:00:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-03T05:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "621",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "41",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "terminal": "2",
                      "at": "2024-04-03T17:15:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-03T20:10:00"
                    },
                    "carrierCode": "AI",
                    "number": "503",
                    "aircraft": {
                      "code": "321"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H55M",
                    "id": "42",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T13:35:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T15:25:00"
                    },
                    "carrierCode": "AI",
                    "number": "407",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "73",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "28114.00",
              "base": "25270.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "28114.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "28114.00",
                  "base": "25270.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "40",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "41",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "42",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "73",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "54",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT29H55M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T14:15:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T17:05:00"
                    },
                    "carrierCode": "AI",
                    "number": "732",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H50M",
                    "id": "40",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-03T04:00:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-03T05:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "621",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "41",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "terminal": "2",
                      "at": "2024-04-03T17:15:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-03T20:10:00"
                    },
                    "carrierCode": "AI",
                    "number": "503",
                    "aircraft": {
                      "code": "321"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H55M",
                    "id": "42",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T16:45:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T18:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "415",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "74",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "28114.00",
              "base": "25270.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "28114.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "28114.00",
                  "base": "25270.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "40",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "41",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "42",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "74",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "55",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT32H15M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T14:15:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T17:05:00"
                    },
                    "carrierCode": "AI",
                    "number": "732",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H50M",
                    "id": "9",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-03T04:00:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-03T05:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "621",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "10",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "terminal": "2",
                      "at": "2024-04-03T19:30:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-03T22:30:00"
                    },
                    "carrierCode": "AI",
                    "number": "509",
                    "aircraft": {
                      "code": "321"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT3H",
                    "id": "11",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T13:35:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T15:25:00"
                    },
                    "carrierCode": "AI",
                    "number": "407",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "73",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "28114.00",
              "base": "25270.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "28114.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "28114.00",
                  "base": "25270.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "9",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "10",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "11",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "73",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "56",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT32H15M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T14:15:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T17:05:00"
                    },
                    "carrierCode": "AI",
                    "number": "732",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H50M",
                    "id": "9",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-03T04:00:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-03T05:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "621",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "10",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "terminal": "2",
                      "at": "2024-04-03T19:30:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-03T22:30:00"
                    },
                    "carrierCode": "AI",
                    "number": "509",
                    "aircraft": {
                      "code": "321"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT3H",
                    "id": "11",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T16:45:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T18:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "415",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "74",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "28114.00",
              "base": "25270.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "28114.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "28114.00",
                  "base": "25270.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "9",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "10",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "11",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "74",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "57",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT33H40M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T14:15:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T17:05:00"
                    },
                    "carrierCode": "AI",
                    "number": "732",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H50M",
                    "id": "23",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-03T04:00:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-03T05:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "621",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "24",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "terminal": "2",
                      "at": "2024-04-03T21:00:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-03T23:55:00"
                    },
                    "carrierCode": "AI",
                    "number": "808",
                    "aircraft": {
                      "code": "320"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H55M",
                    "id": "25",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T13:35:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T15:25:00"
                    },
                    "carrierCode": "AI",
                    "number": "407",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "73",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "28114.00",
              "base": "25270.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "28114.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "28114.00",
                  "base": "25270.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "23",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "24",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "25",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "73",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "58",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT33H40M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T14:15:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-02T17:05:00"
                    },
                    "carrierCode": "AI",
                    "number": "732",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H50M",
                    "id": "23",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2024-04-03T04:00:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-03T05:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "621",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "24",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "terminal": "2",
                      "at": "2024-04-03T21:00:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-03T23:55:00"
                    },
                    "carrierCode": "AI",
                    "number": "808",
                    "aircraft": {
                      "code": "320"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H55M",
                    "id": "25",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T16:45:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T18:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "415",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "74",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "28114.00",
              "base": "25270.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "28114.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "28114.00",
                  "base": "25270.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "23",
                    "cabin": "ECONOMY",
                    "fareBasis": "GIP",
                    "class": "G",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "24",
                    "cabin": "ECONOMY",
                    "fareBasis": "TIP",
                    "class": "T",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "25",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "74",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "59",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-03-24",
            "lastTicketingDateTime": "2024-03-24",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T16:00:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T17:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "408",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "28",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H40M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T18:15:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T19:55:00"
                    },
                    "carrierCode": "UK",
                    "number": "715",
                    "aircraft": {
                      "code": "320"
                    },
                    "operating": {
                      "carrierCode": "UK"
                    },
                    "duration": "PT1H40M",
                    "id": "65",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "31854.00",
              "base": "29212.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "31854.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "UK"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "31854.00",
                  "base": "29212.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "28",
                    "cabin": "ECONOMY",
                    "fareBasis": "YIFOW",
                    "class": "Y",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "65",
                    "cabin": "ECONOMY",
                    "fareBasis": "V0RPRYS",
                    "brandedFare": "ECOYS",
                    "brandedFareLabel": "ECO STANDARD",
                    "class": "V",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    },
                    "amenities": [
                      {
                        "description": "EXCESS HAND BAGGAGE 5KG",
                        "isChargeable": true,
                        "amenityType": "BAGGAGE",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "VISTARA SELECT",
                        "isChargeable": false,
                        "amenityType": "PRE_RESERVED_SEAT",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "MEAL SERVICES",
                        "isChargeable": false,
                        "amenityType": "MEAL",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY CHECK IN",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BOARDING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BAGGAGE HANDLING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "UPGRADE ELIGIBILITY",
                        "isChargeable": true,
                        "amenityType": "BRANDED_FARES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "60",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-03-24",
            "lastTicketingDateTime": "2024-03-24",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T19:10:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T21:00:00"
                    },
                    "carrierCode": "AI",
                    "number": "416",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "30",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H40M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T18:15:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T19:55:00"
                    },
                    "carrierCode": "UK",
                    "number": "715",
                    "aircraft": {
                      "code": "320"
                    },
                    "operating": {
                      "carrierCode": "UK"
                    },
                    "duration": "PT1H40M",
                    "id": "65",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "31854.00",
              "base": "29212.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "31854.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "UK"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "31854.00",
                  "base": "29212.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "30",
                    "cabin": "ECONOMY",
                    "fareBasis": "YIFOW",
                    "class": "Y",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "65",
                    "cabin": "ECONOMY",
                    "fareBasis": "V0RPRYS",
                    "brandedFare": "ECOYS",
                    "brandedFareLabel": "ECO STANDARD",
                    "class": "V",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    },
                    "amenities": [
                      {
                        "description": "EXCESS HAND BAGGAGE 5KG",
                        "isChargeable": true,
                        "amenityType": "BAGGAGE",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "VISTARA SELECT",
                        "isChargeable": false,
                        "amenityType": "PRE_RESERVED_SEAT",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "MEAL SERVICES",
                        "isChargeable": false,
                        "amenityType": "MEAL",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY CHECK IN",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BOARDING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BAGGAGE HANDLING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "UPGRADE ELIGIBILITY",
                        "isChargeable": true,
                        "amenityType": "BRANDED_FARES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "61",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-03-24",
            "lastTicketingDateTime": "2024-03-24",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T16:00:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T17:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "408",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "28",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H45M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T08:00:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T09:45:00"
                    },
                    "carrierCode": "UK",
                    "number": "717",
                    "aircraft": {
                      "code": "320"
                    },
                    "operating": {
                      "carrierCode": "UK"
                    },
                    "duration": "PT1H45M",
                    "id": "69",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "31854.00",
              "base": "29212.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "31854.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "UK"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "31854.00",
                  "base": "29212.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "28",
                    "cabin": "ECONOMY",
                    "fareBasis": "YIFOW",
                    "class": "Y",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "69",
                    "cabin": "ECONOMY",
                    "fareBasis": "V0RPRYS",
                    "brandedFare": "ECOYS",
                    "brandedFareLabel": "ECO STANDARD",
                    "class": "V",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    },
                    "amenities": [
                      {
                        "description": "EXCESS HAND BAGGAGE 5KG",
                        "isChargeable": true,
                        "amenityType": "BAGGAGE",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "VISTARA SELECT",
                        "isChargeable": false,
                        "amenityType": "PRE_RESERVED_SEAT",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "MEAL SERVICES",
                        "isChargeable": false,
                        "amenityType": "MEAL",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY CHECK IN",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BOARDING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BAGGAGE HANDLING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "UPGRADE ELIGIBILITY",
                        "isChargeable": true,
                        "amenityType": "BRANDED_FARES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "62",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-03-24",
            "lastTicketingDateTime": "2024-03-24",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T19:10:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T21:00:00"
                    },
                    "carrierCode": "AI",
                    "number": "416",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "30",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H45M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T08:00:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T09:45:00"
                    },
                    "carrierCode": "UK",
                    "number": "717",
                    "aircraft": {
                      "code": "320"
                    },
                    "operating": {
                      "carrierCode": "UK"
                    },
                    "duration": "PT1H45M",
                    "id": "69",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "31854.00",
              "base": "29212.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "31854.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "UK"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "31854.00",
                  "base": "29212.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "30",
                    "cabin": "ECONOMY",
                    "fareBasis": "YIFOW",
                    "class": "Y",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "69",
                    "cabin": "ECONOMY",
                    "fareBasis": "V0RPRYS",
                    "brandedFare": "ECOYS",
                    "brandedFareLabel": "ECO STANDARD",
                    "class": "V",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    },
                    "amenities": [
                      {
                        "description": "EXCESS HAND BAGGAGE 5KG",
                        "isChargeable": true,
                        "amenityType": "BAGGAGE",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "VISTARA SELECT",
                        "isChargeable": false,
                        "amenityType": "PRE_RESERVED_SEAT",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "MEAL SERVICES",
                        "isChargeable": false,
                        "amenityType": "MEAL",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY CHECK IN",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BOARDING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BAGGAGE HANDLING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "UPGRADE ELIGIBILITY",
                        "isChargeable": true,
                        "amenityType": "BRANDED_FARES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "63",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-03-24",
            "lastTicketingDateTime": "2024-03-24",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T10:20:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T12:10:00"
                    },
                    "carrierCode": "UK",
                    "number": "718",
                    "aircraft": {
                      "code": "320"
                    },
                    "operating": {
                      "carrierCode": "UK"
                    },
                    "duration": "PT1H50M",
                    "id": "27",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T13:35:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T15:25:00"
                    },
                    "carrierCode": "AI",
                    "number": "407",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "73",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "31854.00",
              "base": "29212.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "31854.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "UK"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "31854.00",
                  "base": "29212.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "27",
                    "cabin": "ECONOMY",
                    "fareBasis": "V0RPRYS",
                    "brandedFare": "ECOYS",
                    "brandedFareLabel": "ECO STANDARD",
                    "class": "V",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    },
                    "amenities": [
                      {
                        "description": "EXCESS HAND BAGGAGE 5KG",
                        "isChargeable": true,
                        "amenityType": "BAGGAGE",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "VISTARA SELECT",
                        "isChargeable": false,
                        "amenityType": "PRE_RESERVED_SEAT",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "MEAL SERVICES",
                        "isChargeable": false,
                        "amenityType": "MEAL",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY CHECK IN",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BOARDING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BAGGAGE HANDLING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "UPGRADE ELIGIBILITY",
                        "isChargeable": true,
                        "amenityType": "BRANDED_FARES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      }
                    ]
                  },
                  {
                    "segmentId": "73",
                    "cabin": "ECONOMY",
                    "fareBasis": "YIFOW",
                    "class": "Y",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "64",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-03-24",
            "lastTicketingDateTime": "2024-03-24",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T10:20:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T12:10:00"
                    },
                    "carrierCode": "UK",
                    "number": "718",
                    "aircraft": {
                      "code": "320"
                    },
                    "operating": {
                      "carrierCode": "UK"
                    },
                    "duration": "PT1H50M",
                    "id": "27",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T16:45:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T18:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "415",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "74",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "31854.00",
              "base": "29212.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "31854.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "UK"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "31854.00",
                  "base": "29212.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "27",
                    "cabin": "ECONOMY",
                    "fareBasis": "V0RPRYS",
                    "brandedFare": "ECOYS",
                    "brandedFareLabel": "ECO STANDARD",
                    "class": "V",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    },
                    "amenities": [
                      {
                        "description": "EXCESS HAND BAGGAGE 5KG",
                        "isChargeable": true,
                        "amenityType": "BAGGAGE",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "VISTARA SELECT",
                        "isChargeable": false,
                        "amenityType": "PRE_RESERVED_SEAT",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "MEAL SERVICES",
                        "isChargeable": false,
                        "amenityType": "MEAL",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY CHECK IN",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BOARDING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BAGGAGE HANDLING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "UPGRADE ELIGIBILITY",
                        "isChargeable": true,
                        "amenityType": "BRANDED_FARES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      }
                    ]
                  },
                  {
                    "segmentId": "74",
                    "cabin": "ECONOMY",
                    "fareBasis": "YIFOW",
                    "class": "Y",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "65",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-03-24",
            "lastTicketingDateTime": "2024-03-24",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T20:30:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T22:20:00"
                    },
                    "carrierCode": "UK",
                    "number": "716",
                    "aircraft": {
                      "code": "320"
                    },
                    "operating": {
                      "carrierCode": "UK"
                    },
                    "duration": "PT1H50M",
                    "id": "31",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T13:35:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T15:25:00"
                    },
                    "carrierCode": "AI",
                    "number": "407",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "73",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "31854.00",
              "base": "29212.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "31854.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "UK"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "31854.00",
                  "base": "29212.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "31",
                    "cabin": "ECONOMY",
                    "fareBasis": "V0RPRYS",
                    "brandedFare": "ECOYS",
                    "brandedFareLabel": "ECO STANDARD",
                    "class": "V",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    },
                    "amenities": [
                      {
                        "description": "EXCESS HAND BAGGAGE 5KG",
                        "isChargeable": true,
                        "amenityType": "BAGGAGE",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "VISTARA SELECT",
                        "isChargeable": false,
                        "amenityType": "PRE_RESERVED_SEAT",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "MEAL SERVICES",
                        "isChargeable": false,
                        "amenityType": "MEAL",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY CHECK IN",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BOARDING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BAGGAGE HANDLING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "UPGRADE ELIGIBILITY",
                        "isChargeable": true,
                        "amenityType": "BRANDED_FARES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      }
                    ]
                  },
                  {
                    "segmentId": "73",
                    "cabin": "ECONOMY",
                    "fareBasis": "YIFOW",
                    "class": "Y",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "66",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-03-24",
            "lastTicketingDateTime": "2024-03-24",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T20:30:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T22:20:00"
                    },
                    "carrierCode": "UK",
                    "number": "716",
                    "aircraft": {
                      "code": "320"
                    },
                    "operating": {
                      "carrierCode": "UK"
                    },
                    "duration": "PT1H50M",
                    "id": "31",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T16:45:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T18:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "415",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "74",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "31854.00",
              "base": "29212.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "31854.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "UK"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "31854.00",
                  "base": "29212.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "31",
                    "cabin": "ECONOMY",
                    "fareBasis": "V0RPRYS",
                    "brandedFare": "ECOYS",
                    "brandedFareLabel": "ECO STANDARD",
                    "class": "V",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    },
                    "amenities": [
                      {
                        "description": "EXCESS HAND BAGGAGE 5KG",
                        "isChargeable": true,
                        "amenityType": "BAGGAGE",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "VISTARA SELECT",
                        "isChargeable": false,
                        "amenityType": "PRE_RESERVED_SEAT",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "MEAL SERVICES",
                        "isChargeable": false,
                        "amenityType": "MEAL",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY CHECK IN",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BOARDING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "PRIORITY BAGGAGE HANDLING",
                        "isChargeable": true,
                        "amenityType": "TRAVEL_SERVICES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      },
                      {
                        "description": "UPGRADE ELIGIBILITY",
                        "isChargeable": true,
                        "amenityType": "BRANDED_FARES",
                        "amenityProvider": {
                          "name": "BrandedFare"
                        }
                      }
                    ]
                  },
                  {
                    "segmentId": "74",
                    "cabin": "ECONOMY",
                    "fareBasis": "YIFOW",
                    "class": "Y",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "67",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T09:20:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T11:10:00"
                    },
                    "carrierCode": "SG",
                    "number": "8729",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT1H50M",
                    "id": "26",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT11H40M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "1D",
                      "at": "2024-04-09T06:20:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-09T09:10:00"
                    },
                    "carrierCode": "SG",
                    "number": "191",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT2H50M",
                    "id": "66",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-09T15:20:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T18:00:00"
                    },
                    "carrierCode": "SG",
                    "number": "768",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT2H40M",
                    "id": "67",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "37226.00",
              "base": "31717.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "37226.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "HR"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "37226.00",
                  "base": "31717.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "26",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "66",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "67",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "68",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T17:00:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T18:50:00"
                    },
                    "carrierCode": "SG",
                    "number": "481",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT1H50M",
                    "id": "29",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT11H40M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "1D",
                      "at": "2024-04-09T06:20:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-09T09:10:00"
                    },
                    "carrierCode": "SG",
                    "number": "191",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT2H50M",
                    "id": "66",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-09T15:20:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T18:00:00"
                    },
                    "carrierCode": "SG",
                    "number": "768",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT2H40M",
                    "id": "67",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "37226.00",
              "base": "31717.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "37226.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "HR"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "37226.00",
                  "base": "31717.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "29",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "66",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "67",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "69",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T09:20:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T11:10:00"
                    },
                    "carrierCode": "SG",
                    "number": "8729",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT1H50M",
                    "id": "26",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT21H30M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "1D",
                      "at": "2024-04-09T20:30:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-09T23:05:00"
                    },
                    "carrierCode": "SG",
                    "number": "143",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT2H35M",
                    "id": "50",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-10T15:20:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-10T18:00:00"
                    },
                    "carrierCode": "SG",
                    "number": "768",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT2H40M",
                    "id": "51",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "37226.00",
              "base": "31717.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "37226.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "HR"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "37226.00",
                  "base": "31717.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "26",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "50",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "51",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "70",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT1H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T17:00:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-02T18:50:00"
                    },
                    "carrierCode": "SG",
                    "number": "481",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT1H50M",
                    "id": "29",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT21H30M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "1D",
                      "at": "2024-04-09T20:30:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-09T23:05:00"
                    },
                    "carrierCode": "SG",
                    "number": "143",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT2H35M",
                    "id": "50",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-10T15:20:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-10T18:00:00"
                    },
                    "carrierCode": "SG",
                    "number": "768",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT2H40M",
                    "id": "51",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "37226.00",
              "base": "31717.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "37226.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "HR"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "37226.00",
                  "base": "31717.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "29",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "50",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "51",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "71",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT13H55M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T18:40:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-02T21:15:00"
                    },
                    "carrierCode": "SG",
                    "number": "767",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT2H35M",
                    "id": "35",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-03T05:55:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-03T08:35:00"
                    },
                    "carrierCode": "SG",
                    "number": "136",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT2H40M",
                    "id": "36",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H45M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T07:05:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T08:50:00"
                    },
                    "carrierCode": "SG",
                    "number": "8721",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT1H45M",
                    "id": "68",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "37859.00",
              "base": "32320.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "37859.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "HR"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "37859.00",
                  "base": "32320.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "35",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "36",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "68",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "72",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT13H55M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T18:40:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-02T21:15:00"
                    },
                    "carrierCode": "SG",
                    "number": "767",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT2H35M",
                    "id": "35",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-03T05:55:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-03T08:35:00"
                    },
                    "carrierCode": "SG",
                    "number": "136",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT2H40M",
                    "id": "36",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H55M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "1D",
                      "at": "2024-04-09T14:25:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T16:20:00"
                    },
                    "carrierCode": "SG",
                    "number": "480",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT1H55M",
                    "id": "75",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "37859.00",
              "base": "32320.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "37859.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "HR"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "37859.00",
                  "base": "32320.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "35",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "36",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "75",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "73",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT25H20M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T18:40:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-02T21:15:00"
                    },
                    "carrierCode": "SG",
                    "number": "767",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT2H35M",
                    "id": "12",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-03T17:20:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-03T20:00:00"
                    },
                    "carrierCode": "SG",
                    "number": "8134",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT2H40M",
                    "id": "13",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H45M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-09T07:05:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T08:50:00"
                    },
                    "carrierCode": "SG",
                    "number": "8721",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT1H45M",
                    "id": "68",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "37859.00",
              "base": "32320.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "37859.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "HR"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "37859.00",
                  "base": "32320.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "12",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "13",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "68",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "74",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-02",
            "lastTicketingDateTime": "2024-04-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT25H20M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "PAT",
                      "at": "2024-04-02T18:40:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-02T21:15:00"
                    },
                    "carrierCode": "SG",
                    "number": "767",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT2H35M",
                    "id": "12",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2024-04-03T17:20:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2024-04-03T20:00:00"
                    },
                    "carrierCode": "SG",
                    "number": "8134",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT2H40M",
                    "id": "13",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT1H55M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "1D",
                      "at": "2024-04-09T14:25:00"
                    },
                    "arrival": {
                      "iataCode": "PAT",
                      "at": "2024-04-09T16:20:00"
                    },
                    "carrierCode": "SG",
                    "number": "480",
                    "aircraft": {
                      "code": "737"
                    },
                    "operating": {
                      "carrierCode": "SG"
                    },
                    "duration": "PT1H55M",
                    "id": "75",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "37859.00",
              "base": "32320.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "37859.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "HR"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "37859.00",
                  "base": "32320.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "12",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "13",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "75",
                    "cabin": "ECONOMY",
                    "fareBasis": "USAVER",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 15,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "dictionaries": {
          "locations": {
            "GOI": {
              "cityCode": "GOI",
              "countryCode": "IN"
            },
            "BOM": {
              "cityCode": "BOM",
              "countryCode": "IN"
            },
            "PAT": {
              "cityCode": "PAT",
              "countryCode": "IN"
            },
            "HYD": {
              "cityCode": "HYD",
              "countryCode": "IN"
            },
            "IXU": {
              "cityCode": "IXU",
              "countryCode": "IN"
            },
            "BLR": {
              "cityCode": "BLR",
              "countryCode": "IN"
            },
            "DEL": {
              "cityCode": "DEL",
              "countryCode": "IN"
            }
          },
          "aircraft": {
            "319": "AIRBUS A319",
            "320": "AIRBUS A320",
            "321": "AIRBUS A321",
            "737": "BOEING 737 ALL SERIES PASSENGER",
            "32A": "AIRBUS A320 (SHARKLETS)",
            "77W": "BOEING 777-300ER",
            "32N": "AIRBUS A320NEO"
          },
          "currencies": {
            "INR": "INDIAN RUPEE"
          },
          "carriers": {
            "SG": "SPICEJET",
            "UK": "VISTARA",
            "AI": "AIR INDIA"
          }
        }
      }
]