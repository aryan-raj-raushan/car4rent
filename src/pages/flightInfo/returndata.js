export const returnData = [
  {
    meta: {
      count: 74,
      links: {
        self: "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAT&destinationLocationCode=DEL&departureDate=2024-04-02&returnDate=2024-04-09&adults=1&nonStop=false&currencyCode=INR&max=250",
      },
    },
    data: [
      {
        type: "flight-offer",
        id: "1",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        lastTicketingDate: "2024-03-24",
        lastTicketingDateTime: "2024-03-24",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT1H50M",
            segments: [
              {
                departure: {
                  iataCode: "PAT",
                  at: "2024-04-02T10:20:00",
                },
                arrival: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-04-02T12:10:00",
                },
                carrierCode: "UK",
                number: "718",
                aircraft: {
                  code: "320",
                },
                operating: {
                  carrierCode: "UK",
                },
                duration: "PT1H50M",
                id: "27",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT1H40M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-04-09T18:15:00",
                },
                arrival: {
                  iataCode: "PAT",
                  at: "2024-04-09T19:55:00",
                },
                carrierCode: "UK",
                number: "715",
                aircraft: {
                  code: "320",
                },
                operating: {
                  carrierCode: "UK",
                },
                duration: "PT1H40M",
                id: "65",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "10615.00",
          base: "9024.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "10615.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["UK"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "10615.00",
              base: "9024.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "27",
                cabin: "ECONOMY",
                fareBasis: "V0RPRYS",
                brandedFare: "ECOYS",
                brandedFareLabel: "ECO STANDARD",
                class: "V",
                includedCheckedBags: {
                  weight: 15,
                  weightUnit: "KG",
                },
                amenities: [
                  {
                    description: "EXCESS HAND BAGGAGE 5KG",
                    isChargeable: true,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "VISTARA SELECT",
                    isChargeable: false,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL SERVICES",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY CHECK IN",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY BOARDING",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY BAGGAGE HANDLING",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "UPGRADE ELIGIBILITY",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "65",
                cabin: "ECONOMY",
                fareBasis: "V0RPRYS",
                brandedFare: "ECOYS",
                brandedFareLabel: "ECO STANDARD",
                class: "V",
                includedCheckedBags: {
                  weight: 15,
                  weightUnit: "KG",
                },
                amenities: [
                  {
                    description: "EXCESS HAND BAGGAGE 5KG",
                    isChargeable: true,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "VISTARA SELECT",
                    isChargeable: false,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL SERVICES",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY CHECK IN",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY BOARDING",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY BAGGAGE HANDLING",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "UPGRADE ELIGIBILITY",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "2",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        lastTicketingDate: "2024-03-24",
        lastTicketingDateTime: "2024-03-24",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT1H50M",
            segments: [
              {
                departure: {
                  iataCode: "PAT",
                  at: "2024-04-02T20:30:00",
                },
                arrival: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-04-02T22:20:00",
                },
                carrierCode: "UK",
                number: "716",
                aircraft: {
                  code: "320",
                },
                operating: {
                  carrierCode: "UK",
                },
                duration: "PT1H50M",
                id: "31",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT1H40M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-04-09T18:15:00",
                },
                arrival: {
                  iataCode: "PAT",
                  at: "2024-04-09T19:55:00",
                },
                carrierCode: "UK",
                number: "715",
                aircraft: {
                  code: "320",
                },
                operating: {
                  carrierCode: "UK",
                },
                duration: "PT1H40M",
                id: "65",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "10615.00",
          base: "9024.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "10615.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["UK"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "10615.00",
              base: "9024.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "31",
                cabin: "ECONOMY",
                fareBasis: "V0RPRYS",
                brandedFare: "ECOYS",
                brandedFareLabel: "ECO STANDARD",
                class: "V",
                includedCheckedBags: {
                  weight: 15,
                  weightUnit: "KG",
                },
                amenities: [
                  {
                    description: "EXCESS HAND BAGGAGE 5KG",
                    isChargeable: true,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "VISTARA SELECT",
                    isChargeable: false,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL SERVICES",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY CHECK IN",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY BOARDING",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY BAGGAGE HANDLING",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "UPGRADE ELIGIBILITY",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "65",
                cabin: "ECONOMY",
                fareBasis: "V0RPRYS",
                brandedFare: "ECOYS",
                brandedFareLabel: "ECO STANDARD",
                class: "V",
                includedCheckedBags: {
                  weight: 15,
                  weightUnit: "KG",
                },
                amenities: [
                  {
                    description: "EXCESS HAND BAGGAGE 5KG",
                    isChargeable: true,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "VISTARA SELECT",
                    isChargeable: false,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL SERVICES",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY CHECK IN",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY BOARDING",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY BAGGAGE HANDLING",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "UPGRADE ELIGIBILITY",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "3",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        lastTicketingDate: "2024-03-24",
        lastTicketingDateTime: "2024-03-24",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT1H50M",
            segments: [
              {
                departure: {
                  iataCode: "PAT",
                  at: "2024-04-02T10:20:00",
                },
                arrival: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-04-02T12:10:00",
                },
                carrierCode: "UK",
                number: "718",
                aircraft: {
                  code: "320",
                },
                operating: {
                  carrierCode: "UK",
                },
                duration: "PT1H50M",
                id: "27",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT1H45M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-04-09T08:00:00",
                },
                arrival: {
                  iataCode: "PAT",
                  at: "2024-04-09T09:45:00",
                },
                carrierCode: "UK",
                number: "717",
                aircraft: {
                  code: "320",
                },
                operating: {
                  carrierCode: "UK",
                },
                duration: "PT1H45M",
                id: "69",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "10615.00",
          base: "9024.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "10615.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["UK"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "10615.00",
              base: "9024.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "27",
                cabin: "ECONOMY",
                fareBasis: "V0RPRYS",
                brandedFare: "ECOYS",
                brandedFareLabel: "ECO STANDARD",
                class: "V",
                includedCheckedBags: {
                  weight: 15,
                  weightUnit: "KG",
                },
                amenities: [
                  {
                    description: "EXCESS HAND BAGGAGE 5KG",
                    isChargeable: true,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "VISTARA SELECT",
                    isChargeable: false,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL SERVICES",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY CHECK IN",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY BOARDING",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY BAGGAGE HANDLING",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "UPGRADE ELIGIBILITY",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "69",
                cabin: "ECONOMY",
                fareBasis: "V0RPRYS",
                brandedFare: "ECOYS",
                brandedFareLabel: "ECO STANDARD",
                class: "V",
                includedCheckedBags: {
                  weight: 15,
                  weightUnit: "KG",
                },
                amenities: [
                  {
                    description: "EXCESS HAND BAGGAGE 5KG",
                    isChargeable: true,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "VISTARA SELECT",
                    isChargeable: false,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL SERVICES",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY CHECK IN",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY BOARDING",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY BAGGAGE HANDLING",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "UPGRADE ELIGIBILITY",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "4",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        lastTicketingDate: "2024-03-24",
        lastTicketingDateTime: "2024-03-24",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT1H50M",
            segments: [
              {
                departure: {
                  iataCode: "PAT",
                  at: "2024-04-02T20:30:00",
                },
                arrival: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-04-02T22:20:00",
                },
                carrierCode: "UK",
                number: "716",
                aircraft: {
                  code: "320",
                },
                operating: {
                  carrierCode: "UK",
                },
                duration: "PT1H50M",
                id: "31",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT1H45M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-04-09T08:00:00",
                },
                arrival: {
                  iataCode: "PAT",
                  at: "2024-04-09T09:45:00",
                },
                carrierCode: "UK",
                number: "717",
                aircraft: {
                  code: "320",
                },
                operating: {
                  carrierCode: "UK",
                },
                duration: "PT1H45M",
                id: "69",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "10615.00",
          base: "9024.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "10615.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["UK"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "10615.00",
              base: "9024.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "31",
                cabin: "ECONOMY",
                fareBasis: "V0RPRYS",
                brandedFare: "ECOYS",
                brandedFareLabel: "ECO STANDARD",
                class: "V",
                includedCheckedBags: {
                  weight: 15,
                  weightUnit: "KG",
                },
                amenities: [
                  {
                    description: "EXCESS HAND BAGGAGE 5KG",
                    isChargeable: true,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "VISTARA SELECT",
                    isChargeable: false,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL SERVICES",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY CHECK IN",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY BOARDING",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY BAGGAGE HANDLING",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "UPGRADE ELIGIBILITY",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "69",
                cabin: "ECONOMY",
                fareBasis: "V0RPRYS",
                brandedFare: "ECOYS",
                brandedFareLabel: "ECO STANDARD",
                class: "V",
                includedCheckedBags: {
                  weight: 15,
                  weightUnit: "KG",
                },
                amenities: [
                  {
                    description: "EXCESS HAND BAGGAGE 5KG",
                    isChargeable: true,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "VISTARA SELECT",
                    isChargeable: false,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL SERVICES",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY CHECK IN",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY BOARDING",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY BAGGAGE HANDLING",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "UPGRADE ELIGIBILITY",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "5",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        lastTicketingDate: "2024-04-02",
        lastTicketingDateTime: "2024-04-02",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT1H50M",
            segments: [
              {
                departure: {
                  iataCode: "PAT",
                  at: "2024-04-02T16:00:00",
                },
                arrival: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-04-02T17:50:00",
                },
                carrierCode: "AI",
                number: "408",
                aircraft: {
                  code: "319",
                },
                operating: {
                  carrierCode: "AI",
                },
                duration: "PT1H50M",
                id: "28",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT1H50M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-04-09T13:35:00",
                },
                arrival: {
                  iataCode: "PAT",
                  at: "2024-04-09T15:25:00",
                },
                carrierCode: "AI",
                number: "407",
                aircraft: {
                  code: "319",
                },
                operating: {
                  carrierCode: "AI",
                },
                duration: "PT1H50M",
                id: "73",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "13561.00",
          base: "11750.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "13561.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["AI"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "13561.00",
              base: "11750.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "28",
                cabin: "ECONOMY",
                fareBasis: "GIP",
                class: "G",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
              },
              {
                segmentId: "73",
                cabin: "ECONOMY",
                fareBasis: "UIP",
                class: "U",
                includedCheckedBags: {
                  weight: 20,
                  weightUnit: "KG",
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "6",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        lastTicketingDate: "2024-04-02",
        lastTicketingDateTime: "2024-04-02",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT1H50M",
            segments: [
              {
                departure: {
                  iataCode: "PAT",
                  at: "2024-04-02T16:00:00",
                },
                arrival: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-04-02T17:50:00",
                },
                carrierCode: "AI",
                number: "408",
                aircraft: {
                  code: "319",
                },
                operating: {
                  carrierCode: "AI",
                },
                duration: "PT1H50M",
                id: "28",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT1H50M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-04-09T16:45:00",
                },
                arrival: {
                  iataCode: "PAT",
                  at: "2024-04-09T18:35:00",
                },
                carrierCode: "AI",
                number: "415",
                aircraft: {
                  code: "319",
                },
                operating: {
                  carrierCode: "AI",
                },
                duration: "PT1H50M",
                id: "74",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "13561.00",
          base: "11750.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "13561.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["AI"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "13561.00",
              base: "11750.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "28",
                cabin: "ECONOMY",
                fareBasis: "GIP",
                class: "G",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
              },
              {
                segmentId: "74",
                cabin: "ECONOMY",
                fareBasis: "UIP",
                class: "U",
                includedCheckedBags: {
                  weight: 20,
                  weightUnit: "KG",
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "41",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        lastTicketingDate: "2024-04-02",
        lastTicketingDateTime: "2024-04-02",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT24H30M",
            segments: [
              {
                departure: {
                  iataCode: "PAT",
                  at: "2024-04-02T14:15:00",
                },
                arrival: {
                  iataCode: "BOM",
                  terminal: "2",
                  at: "2024-04-02T17:05:00",
                },
                carrierCode: "AI",
                number: "732",
                aircraft: {
                  code: "32N",
                },
                operating: {
                  carrierCode: "AI",
                },
                duration: "PT2H50M",
                id: "26",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "BOM",
                  terminal: "2",
                  at: "2024-04-03T04:00:00",
                },
                arrival: {
                  iataCode: "BLR",
                  terminal: "1",
                  at: "2024-04-03T05:50:00",
                },
                carrierCode: "AI",
                number: "621",
                aircraft: {
                  code: "32N",
                },
                operating: {
                  carrierCode: "AI",
                },
                duration: "PT1H50M",
                id: "27",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "BLR",
                  terminal: "2",
                  at: "2024-04-03T11:45:00",
                },
                arrival: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-04-03T14:45:00",
                },
                carrierCode: "AI",
                number: "507",
                aircraft: {
                  code: "321",
                },
                operating: {
                  carrierCode: "AI",
                },
                duration: "PT3H",
                id: "28",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT1H50M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-04-14T13:35:00",
                },
                arrival: {
                  iataCode: "PAT",
                  at: "2024-04-14T15:25:00",
                },
                carrierCode: "AI",
                number: "407",
                aircraft: {
                  code: "319",
                },
                operating: {
                  carrierCode: "AI",
                },
                duration: "PT1H50M",
                id: "91",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "28032.00",
          base: "25192.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "28032.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["AI"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "28032.00",
              base: "25192.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "26",
                cabin: "ECONOMY",
                fareBasis: "GIP",
                class: "G",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
              },
              {
                segmentId: "27",
                cabin: "ECONOMY",
                fareBasis: "TIP",
                class: "T",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
              },
              {
                segmentId: "28",
                cabin: "ECONOMY",
                fareBasis: "TIP",
                class: "T",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
              },
              {
                segmentId: "91",
                cabin: "ECONOMY",
                fareBasis: "UIP",
                class: "U",
                includedCheckedBags: {
                  weight: 20,
                  weightUnit: "KG",
                },
              },
            ],
          },
        ],
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
                "id": "49",
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
                  "at": "2024-04-14T10:40:00"
                },
                "arrival": {
                  "iataCode": "GOI",
                  "at": "2024-04-14T13:25:00"
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
                "id": "97",
                "numberOfStops": 0,
                "blacklistedInEU": false
              },
              {
                "departure": {
                  "iataCode": "GOI",
                  "at": "2024-04-14T23:00:00"
                },
                "arrival": {
                  "iataCode": "BOM",
                  "terminal": "2",
                  "at": "2024-04-15T00:20:00"
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
                "id": "98",
                "numberOfStops": 0,
                "blacklistedInEU": false
              },
              {
                "departure": {
                  "iataCode": "BOM",
                  "terminal": "2",
                  "at": "2024-04-15T11:00:00"
                },
                "arrival": {
                  "iataCode": "PAT",
                  "at": "2024-04-15T13:35:00"
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
                "id": "99",
                "numberOfStops": 0,
                "blacklistedInEU": false
              }
            ]
          }
        ],
        "price": {
          "currency": "INR",
          "total": "28081.00",
          "base": "25239.00",
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
          "grandTotal": "28081.00"
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
              "total": "28081.00",
              "base": "25239.00"
            },
            "fareDetailsBySegment": [
              {
                "segmentId": "49",
                "cabin": "ECONOMY",
                "fareBasis": "GIP",
                "class": "G",
                "includedCheckedBags": {
                  "weight": 25,
                  "weightUnit": "KG"
                }
              },
              {
                "segmentId": "97",
                "cabin": "ECONOMY",
                "fareBasis": "UIP",
                "class": "U",
                "includedCheckedBags": {
                  "weight": 25,
                  "weightUnit": "KG"
                }
              },
              {
                "segmentId": "98",
                "cabin": "ECONOMY",
                "fareBasis": "WIP",
                "class": "W",
                "includedCheckedBags": {
                  "weight": 25,
                  "weightUnit": "KG"
                }
              },
              {
                "segmentId": "99",
                "cabin": "ECONOMY",
                "fareBasis": "UIP",
                "class": "U",
                "includedCheckedBags": {
                  "weight": 25,
                  "weightUnit": "KG"
                }
              }
            ]
          }
        ]
      },
    ],
    dictionaries: {
      locations: {
        GOI: {
          cityCode: "GOI",
          countryCode: "IN",
        },
        BOM: {
          cityCode: "BOM",
          countryCode: "IN",
        },
        PAT: {
          cityCode: "PAT",
          countryCode: "IN",
        },
        HYD: {
          cityCode: "HYD",
          countryCode: "IN",
        },
        IXU: {
          cityCode: "IXU",
          countryCode: "IN",
        },
        BLR: {
          cityCode: "BLR",
          countryCode: "IN",
        },
        DEL: {
          cityCode: "DEL",
          countryCode: "IN",
        },
      },
      aircraft: {
        319: "AIRBUS A319",
        320: "AIRBUS A320",
        321: "AIRBUS A321",
        737: "BOEING 737 ALL SERIES PASSENGER",
        "32A": "AIRBUS A320 (SHARKLETS)",
        "77W": "BOEING 777-300ER",
        "32N": "AIRBUS A320NEO",
      },
      currencies: {
        INR: "INDIAN RUPEE",
      },
      carriers: {
        SG: "SPICEJET",
        UK: "VISTARA",
        AI: "AIR INDIA",
      },
    },
  },
];
