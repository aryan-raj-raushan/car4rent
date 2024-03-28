export const data = [
  {
    "meta": {
      "count": 2,
      "links": {
        "self": "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAT&destinationLocationCode=DEL&departureDate=2024-05-02&adults=2&children=1&infants=1&travelClass=BUSINESS&nonStop=true&currencyCode=INR&maxPrice=100000&max=250"
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
        "numberOfBookableSeats": 5,
        "itineraries": [
          {
            "duration": "PT1H50M",
            "segments": [
              {
                "departure": {
                  "iataCode": "PAT",
                  "at": "2024-05-02T10:20:00"
                },
                "arrival": {
                  "iataCode": "DEL",
                  "terminal": "3",
                  "at": "2024-05-02T12:10:00"
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
                "id": "1",
                "numberOfStops": 0,
                "blacklistedInEU": false
              }
            ]
          }
        ],
        "price": {
          "currency": "INR",
          "total": "67423.00",
          "base": "58400.00",
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
          "grandTotal": "67423.00"
        },
        "pricingOptions": {
          "fareType": [
            "PUBLISHED"
          ],
          "includedCheckedBagsOnly": false
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
              "total": "21007.00",
              "base": "18200.00"
            },
            "fareDetailsBySegment": [
              {
                "segmentId": "1",
                "cabin": "BUSINESS",
                "fareBasis": "Z3PCV",
                "brandedFare": "BIZCV",
                "brandedFareLabel": "CCL VALUE",
                "class": "Z",
                "includedCheckedBags": {
                  "weight": 30,
                  "weightUnit": "KG"
                },
                "amenities": [
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
                    "isChargeable": false,
                    "amenityType": "TRAVEL_SERVICES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "PRIORITY BOARDING",
                    "isChargeable": false,
                    "amenityType": "TRAVEL_SERVICES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "PRIORITY BAGGAGE HANDLING",
                    "isChargeable": false,
                    "amenityType": "TRAVEL_SERVICES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "CHANGE ANYTIME",
                    "isChargeable": true,
                    "amenityType": "BRANDED_FARES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "REFUND BEFORE DEPARTURE",
                    "isChargeable": true,
                    "amenityType": "BRANDED_FARES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  }
                ]
              }
            ]
          },
          {
            "travelerId": "2",
            "fareOption": "STANDARD",
            "travelerType": "ADULT",
            "price": {
              "currency": "INR",
              "total": "21007.00",
              "base": "18200.00"
            },
            "fareDetailsBySegment": [
              {
                "segmentId": "1",
                "cabin": "BUSINESS",
                "fareBasis": "Z3PCV",
                "brandedFare": "BIZCV",
                "brandedFareLabel": "CCL VALUE",
                "class": "Z",
                "includedCheckedBags": {
                  "weight": 30,
                  "weightUnit": "KG"
                },
                "amenities": [
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
                    "isChargeable": false,
                    "amenityType": "TRAVEL_SERVICES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "PRIORITY BOARDING",
                    "isChargeable": false,
                    "amenityType": "TRAVEL_SERVICES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "PRIORITY BAGGAGE HANDLING",
                    "isChargeable": false,
                    "amenityType": "TRAVEL_SERVICES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "CHANGE ANYTIME",
                    "isChargeable": true,
                    "amenityType": "BRANDED_FARES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "REFUND BEFORE DEPARTURE",
                    "isChargeable": true,
                    "amenityType": "BRANDED_FARES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  }
                ]
              }
            ]
          },
          {
            "travelerId": "3",
            "fareOption": "STANDARD",
            "travelerType": "CHILD",
            "price": {
              "currency": "INR",
              "total": "21007.00",
              "base": "18200.00"
            },
            "fareDetailsBySegment": [
              {
                "segmentId": "1",
                "cabin": "BUSINESS",
                "fareBasis": "Z3PCV",
                "brandedFare": "BIZCV",
                "brandedFareLabel": "CCL VALUE",
                "class": "Z",
                "amenities": [
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
                    "isChargeable": false,
                    "amenityType": "TRAVEL_SERVICES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "PRIORITY BOARDING",
                    "isChargeable": false,
                    "amenityType": "TRAVEL_SERVICES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "PRIORITY BAGGAGE HANDLING",
                    "isChargeable": false,
                    "amenityType": "TRAVEL_SERVICES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "CHANGE ANYTIME",
                    "isChargeable": true,
                    "amenityType": "BRANDED_FARES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "REFUND BEFORE DEPARTURE",
                    "isChargeable": true,
                    "amenityType": "BRANDED_FARES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  }
                ]
              }
            ]
          },
          {
            "travelerId": "4",
            "fareOption": "STANDARD",
            "travelerType": "HELD_INFANT",
            "associatedAdultId": "1",
            "price": {
              "currency": "INR",
              "total": "4402.00",
              "base": "3800.00"
            },
            "fareDetailsBySegment": [
              {
                "segmentId": "1",
                "cabin": "BUSINESS",
                "fareBasis": "Z3PCV",
                "brandedFare": "BIZCV",
                "brandedFareLabel": "CCL VALUE",
                "class": "Z",
                "amenities": [
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
                    "isChargeable": false,
                    "amenityType": "TRAVEL_SERVICES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "PRIORITY BOARDING",
                    "isChargeable": false,
                    "amenityType": "TRAVEL_SERVICES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "PRIORITY BAGGAGE HANDLING",
                    "isChargeable": false,
                    "amenityType": "TRAVEL_SERVICES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "CHANGE ANYTIME",
                    "isChargeable": true,
                    "amenityType": "BRANDED_FARES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "REFUND BEFORE DEPARTURE",
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
        "numberOfBookableSeats": 5,
        "itineraries": [
          {
            "duration": "PT1H50M",
            "segments": [
              {
                "departure": {
                  "iataCode": "PAT",
                  "at": "2024-05-02T20:30:00"
                },
                "arrival": {
                  "iataCode": "DEL",
                  "terminal": "3",
                  "at": "2024-05-02T22:20:00"
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
                "id": "2",
                "numberOfStops": 0,
                "blacklistedInEU": false
              }
            ]
          }
        ],
        "price": {
          "currency": "INR",
          "total": "67423.00",
          "base": "58400.00",
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
          "grandTotal": "67423.00"
        },
        "pricingOptions": {
          "fareType": [
            "PUBLISHED"
          ],
          "includedCheckedBagsOnly": false
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
              "total": "21007.00",
              "base": "18200.00"
            },
            "fareDetailsBySegment": [
              {
                "segmentId": "2",
                "cabin": "BUSINESS",
                "fareBasis": "Z3PCV",
                "brandedFare": "BIZCV",
                "brandedFareLabel": "CCL VALUE",
                "class": "Z",
                "includedCheckedBags": {
                  "weight": 30,
                  "weightUnit": "KG"
                },
                "amenities": [
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
                    "isChargeable": false,
                    "amenityType": "TRAVEL_SERVICES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "PRIORITY BOARDING",
                    "isChargeable": false,
                    "amenityType": "TRAVEL_SERVICES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "PRIORITY BAGGAGE HANDLING",
                    "isChargeable": false,
                    "amenityType": "TRAVEL_SERVICES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "CHANGE ANYTIME",
                    "isChargeable": true,
                    "amenityType": "BRANDED_FARES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "REFUND BEFORE DEPARTURE",
                    "isChargeable": true,
                    "amenityType": "BRANDED_FARES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  }
                ]
              }
            ]
          },
          {
            "travelerId": "2",
            "fareOption": "STANDARD",
            "travelerType": "ADULT",
            "price": {
              "currency": "INR",
              "total": "21007.00",
              "base": "18200.00"
            },
            "fareDetailsBySegment": [
              {
                "segmentId": "2",
                "cabin": "BUSINESS",
                "fareBasis": "Z3PCV",
                "brandedFare": "BIZCV",
                "brandedFareLabel": "CCL VALUE",
                "class": "Z",
                "includedCheckedBags": {
                  "weight": 30,
                  "weightUnit": "KG"
                },
                "amenities": [
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
                    "isChargeable": false,
                    "amenityType": "TRAVEL_SERVICES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "PRIORITY BOARDING",
                    "isChargeable": false,
                    "amenityType": "TRAVEL_SERVICES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "PRIORITY BAGGAGE HANDLING",
                    "isChargeable": false,
                    "amenityType": "TRAVEL_SERVICES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "CHANGE ANYTIME",
                    "isChargeable": true,
                    "amenityType": "BRANDED_FARES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "REFUND BEFORE DEPARTURE",
                    "isChargeable": true,
                    "amenityType": "BRANDED_FARES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  }
                ]
              }
            ]
          },
          {
            "travelerId": "3",
            "fareOption": "STANDARD",
            "travelerType": "CHILD",
            "price": {
              "currency": "INR",
              "total": "21007.00",
              "base": "18200.00"
            },
            "fareDetailsBySegment": [
              {
                "segmentId": "2",
                "cabin": "BUSINESS",
                "fareBasis": "Z3PCV",
                "brandedFare": "BIZCV",
                "brandedFareLabel": "CCL VALUE",
                "class": "Z",
                "amenities": [
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
                    "isChargeable": false,
                    "amenityType": "TRAVEL_SERVICES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "PRIORITY BOARDING",
                    "isChargeable": false,
                    "amenityType": "TRAVEL_SERVICES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "PRIORITY BAGGAGE HANDLING",
                    "isChargeable": false,
                    "amenityType": "TRAVEL_SERVICES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "CHANGE ANYTIME",
                    "isChargeable": true,
                    "amenityType": "BRANDED_FARES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "REFUND BEFORE DEPARTURE",
                    "isChargeable": true,
                    "amenityType": "BRANDED_FARES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  }
                ]
              }
            ]
          },
          {
            "travelerId": "4",
            "fareOption": "STANDARD",
            "travelerType": "HELD_INFANT",
            "associatedAdultId": "1",
            "price": {
              "currency": "INR",
              "total": "4402.00",
              "base": "3800.00"
            },
            "fareDetailsBySegment": [
              {
                "segmentId": "2",
                "cabin": "BUSINESS",
                "fareBasis": "Z3PCV",
                "brandedFare": "BIZCV",
                "brandedFareLabel": "CCL VALUE",
                "class": "Z",
                "amenities": [
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
                    "isChargeable": false,
                    "amenityType": "TRAVEL_SERVICES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "PRIORITY BOARDING",
                    "isChargeable": false,
                    "amenityType": "TRAVEL_SERVICES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "PRIORITY BAGGAGE HANDLING",
                    "isChargeable": false,
                    "amenityType": "TRAVEL_SERVICES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "CHANGE ANYTIME",
                    "isChargeable": true,
                    "amenityType": "BRANDED_FARES",
                    "amenityProvider": {
                      "name": "BrandedFare"
                    }
                  },
                  {
                    "description": "REFUND BEFORE DEPARTURE",
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
      }
    ],
    "dictionaries": {
      "locations": {
        "PAT": {
          "cityCode": "PAT",
          "countryCode": "IN"
        },
        "DEL": {
          "cityCode": "DEL",
          "countryCode": "IN"
        }
      },
      "aircraft": {
        "320": "AIRBUS A320"
      },
      "currencies": {
        "INR": "INDIAN RUPEE"
      },
      "carriers": {
        "UK": "VISTARA"
      }
    }
  }
];
