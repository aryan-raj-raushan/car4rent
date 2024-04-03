export const flightData = [
  {
    meta: {
      count: 3,
      links: {
        self: "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAT&destinationLocationCode=DEL&departureDate=2024-05-02&adults=1&nonStop=false&currencyCode=INR&max=250",
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
        lastTicketingDate: "2024-05-02",
        lastTicketingDateTime: "2024-05-02",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT1H50M",
            segments: [
              {
                departure: {
                  iataCode: "PAT",
                  at: "2024-05-02T16:00:00",
                },
                arrival: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-05-02T17:50:00",
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
                id: "137",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "6457.00",
          base: "5525.00",
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
          grandTotal: "6457.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SG"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "6457.00",
              base: "5525.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "137",
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
        id: "2",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        lastTicketingDate: "2024-05-02",
        lastTicketingDateTime: "2024-05-02",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT1H50M",
            segments: [
              {
                departure: {
                  iataCode: "PAT",
                  at: "2024-05-02T19:10:00",
                },
                arrival: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-05-02T21:00:00",
                },
                carrierCode: "AI",
                number: "416",
                aircraft: {
                  code: "319",
                },
                operating: {
                  carrierCode: "AI",
                },
                duration: "PT1H50M",
                id: "139",
                numberOfStops: 1,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "6457.00",
          base: "5525.00",
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
          grandTotal: "6457.00",
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
              total: "6457.00",
              base: "5525.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "139",
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
        id: "1",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        lastTicketingDate: "2024-03-25",
        lastTicketingDateTime: "2024-03-25",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT1H40M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-03-28T18:15:00",
                },
                arrival: {
                  iataCode: "PAT",
                  at: "2024-03-28T19:55:00",
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
                id: "21",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "5264.00",
          base: "4512.00",
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
          grandTotal: "5264.00",
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
              total: "5264.00",
              base: "4512.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "21",
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
        lastTicketingDate: "2024-03-25",
        lastTicketingDateTime: "2024-03-25",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT1H45M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-03-28T08:00:00",
                },
                arrival: {
                  iataCode: "PAT",
                  at: "2024-03-28T09:45:00",
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
                id: "25",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "5264.00",
          base: "4512.00",
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
          grandTotal: "5264.00",
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
              total: "5264.00",
              base: "4512.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "25",
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
        lastTicketingDate: "2024-03-28",
        lastTicketingDateTime: "2024-03-28",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT1H50M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-03-28T13:35:00",
                },
                arrival: {
                  iataCode: "PAT",
                  at: "2024-03-28T15:25:00",
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
                id: "26",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "7104.00",
          base: "6225.00",
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
          grandTotal: "7104.00",
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
              total: "7104.00",
              base: "6225.00",
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
        lastTicketingDate: "2024-03-28",
        lastTicketingDateTime: "2024-03-28",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT1H50M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-03-28T16:45:00",
                },
                arrival: {
                  iataCode: "PAT",
                  at: "2024-03-28T18:35:00",
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
                id: "27",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "7104.00",
          base: "6225.00",
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
          grandTotal: "7104.00",
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
              total: "7104.00",
              base: "6225.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "27",
                cabin: "ECONOMY",
                fareBasis: "GIP",
                class: "G",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
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
        lastTicketingDate: "2024-03-28",
        lastTicketingDateTime: "2024-03-28",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT1H45M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-03-28T07:05:00",
                },
                arrival: {
                  iataCode: "PAT",
                  at: "2024-03-28T08:50:00",
                },
                carrierCode: "SG",
                number: "8721",
                aircraft: {
                  code: "737",
                },
                operating: {
                  carrierCode: "SG",
                },
                duration: "PT1H45M",
                id: "24",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "10943.00",
          base: "8964.00",
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
          grandTotal: "10943.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["GP"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "10943.00",
              base: "8964.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "24",
                cabin: "ECONOMY",
                fareBasis: "USAVER",
                class: "U",
                includedCheckedBags: {
                  weight: 15,
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
        lastTicketingDate: "2024-03-28",
        lastTicketingDateTime: "2024-03-28",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT1H55M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "1D",
                  at: "2024-03-28T14:25:00",
                },
                arrival: {
                  iataCode: "PAT",
                  at: "2024-03-28T16:20:00",
                },
                carrierCode: "SG",
                number: "480",
                aircraft: {
                  code: "737",
                },
                operating: {
                  carrierCode: "SG",
                },
                duration: "PT1H55M",
                id: "28",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "10943.00",
          base: "8964.00",
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
          grandTotal: "10943.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["GP"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "10943.00",
              base: "8964.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "28",
                cabin: "ECONOMY",
                fareBasis: "USAVER",
                class: "U",
                includedCheckedBags: {
                  weight: 15,
                  weightUnit: "KG",
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "7",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        lastTicketingDate: "2024-03-25",
        lastTicketingDateTime: "2024-03-25",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT1H55M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "1D",
                  at: "2024-03-28T14:25:00",
                },
                arrival: {
                  iataCode: "PAT",
                  terminal: "1",
                  at: "2024-03-28T16:20:00",
                },
                carrierCode: "H1",
                number: "2041",
                aircraft: {
                  code: "737",
                },
                operating: {
                  carrierCode: "SG",
                },
                duration: "PT1H55M",
                id: "29",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "19756.00",
          base: "11125.00",
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
          grandTotal: "19756.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["HR"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "19756.00",
              base: "11125.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "29",
                cabin: "ECONOMY",
                fareBasis: "KOWSG",
                class: "K",
                includedCheckedBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "8",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        lastTicketingDate: "2024-03-28",
        lastTicketingDateTime: "2024-03-28",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT8H35M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-03-28T05:00:00",
                },
                arrival: {
                  iataCode: "IXU",
                  at: "2024-03-28T07:00:00",
                },
                carrierCode: "AI",
                number: "443",
                aircraft: {
                  code: "32A",
                },
                operating: {
                  carrierCode: "AI",
                },
                duration: "PT2H",
                id: "18",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "IXU",
                  at: "2024-03-28T08:50:00",
                },
                arrival: {
                  iataCode: "BOM",
                  terminal: "2",
                  at: "2024-03-28T09:50:00",
                },
                carrierCode: "AI",
                number: "400",
                aircraft: {
                  code: "319",
                },
                operating: {
                  carrierCode: "AI",
                },
                duration: "PT1H",
                id: "19",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "BOM",
                  terminal: "2",
                  at: "2024-03-28T11:00:00",
                },
                arrival: {
                  iataCode: "PAT",
                  at: "2024-03-28T13:35:00",
                },
                carrierCode: "AI",
                number: "673",
                aircraft: {
                  code: "32N",
                },
                operating: {
                  carrierCode: "AI",
                },
                duration: "PT2H35M",
                id: "20",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "20135.00",
          base: "17627.00",
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
          grandTotal: "20135.00",
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
              total: "20135.00",
              base: "17627.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "18",
                cabin: "ECONOMY",
                fareBasis: "TIP",
                class: "T",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
              },
              {
                segmentId: "19",
                cabin: "ECONOMY",
                fareBasis: "TIP",
                class: "T",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
              },
              {
                segmentId: "20",
                cabin: "ECONOMY",
                fareBasis: "GIP",
                class: "G",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "9",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        lastTicketingDate: "2024-03-28",
        lastTicketingDateTime: "2024-03-28",
        numberOfBookableSeats: 5,
        itineraries: [
          {
            duration: "PT11H40M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "1D",
                  at: "2024-03-28T06:20:00",
                },
                arrival: {
                  iataCode: "BLR",
                  terminal: "1",
                  at: "2024-03-28T09:10:00",
                },
                carrierCode: "SG",
                number: "191",
                aircraft: {
                  code: "737",
                },
                operating: {
                  carrierCode: "SG",
                },
                duration: "PT2H50M",
                id: "22",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "BLR",
                  terminal: "1",
                  at: "2024-03-28T15:20:00",
                },
                arrival: {
                  iataCode: "PAT",
                  at: "2024-03-28T18:00:00",
                },
                carrierCode: "SG",
                number: "768",
                aircraft: {
                  code: "737",
                },
                operating: {
                  carrierCode: "SG",
                },
                duration: "PT2H40M",
                id: "23",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "26982.00",
          base: "23327.00",
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
          grandTotal: "26982.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["GP"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "26982.00",
              base: "23327.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "22",
                cabin: "ECONOMY",
                fareBasis: "USAVER",
                class: "U",
                includedCheckedBags: {
                  weight: 15,
                  weightUnit: "KG",
                },
              },
              {
                segmentId: "23",
                cabin: "ECONOMY",
                fareBasis: "USAVER",
                class: "U",
                includedCheckedBags: {
                  weight: 15,
                  weightUnit: "KG",
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "10",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        lastTicketingDate: "2024-03-28",
        lastTicketingDateTime: "2024-03-28",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT21H30M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "1D",
                  at: "2024-03-28T20:30:00",
                },
                arrival: {
                  iataCode: "BLR",
                  terminal: "1",
                  at: "2024-03-28T23:05:00",
                },
                carrierCode: "SG",
                number: "143",
                aircraft: {
                  code: "737",
                },
                operating: {
                  carrierCode: "SG",
                },
                duration: "PT2H35M",
                id: "14",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "BLR",
                  terminal: "1",
                  at: "2024-03-29T15:20:00",
                },
                arrival: {
                  iataCode: "PAT",
                  at: "2024-03-29T18:00:00",
                },
                carrierCode: "SG",
                number: "768",
                aircraft: {
                  code: "737",
                },
                operating: {
                  carrierCode: "SG",
                },
                duration: "PT2H40M",
                id: "15",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "26982.00",
          base: "23327.00",
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
          grandTotal: "26982.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["GP"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "26982.00",
              base: "23327.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "14",
                cabin: "ECONOMY",
                fareBasis: "USAVER",
                class: "U",
                includedCheckedBags: {
                  weight: 15,
                  weightUnit: "KG",
                },
              },
              {
                segmentId: "15",
                cabin: "ECONOMY",
                fareBasis: "USAVER",
                class: "U",
                includedCheckedBags: {
                  weight: 15,
                  weightUnit: "KG",
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "11",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        lastTicketingDate: "2024-03-28",
        lastTicketingDateTime: "2024-03-28",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT28H5M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-03-28T13:55:00",
                },
                arrival: {
                  iataCode: "BLR",
                  terminal: "1",
                  at: "2024-03-28T16:40:00",
                },
                carrierCode: "SG",
                number: "8133",
                aircraft: {
                  code: "737",
                },
                operating: {
                  carrierCode: "SG",
                },
                duration: "PT2H45M",
                id: "6",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "BLR",
                  terminal: "1",
                  at: "2024-03-29T15:20:00",
                },
                arrival: {
                  iataCode: "PAT",
                  at: "2024-03-29T18:00:00",
                },
                carrierCode: "SG",
                number: "768",
                aircraft: {
                  code: "737",
                },
                operating: {
                  carrierCode: "SG",
                },
                duration: "PT2H40M",
                id: "7",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "26982.00",
          base: "23327.00",
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
          grandTotal: "26982.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["GP"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "26982.00",
              base: "23327.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "6",
                cabin: "ECONOMY",
                fareBasis: "USAVER",
                class: "U",
                includedCheckedBags: {
                  weight: 15,
                  weightUnit: "KG",
                },
              },
              {
                segmentId: "7",
                cabin: "ECONOMY",
                fareBasis: "USAVER",
                class: "U",
                includedCheckedBags: {
                  weight: 15,
                  weightUnit: "KG",
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "12",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        lastTicketingDate: "2024-03-29",
        lastTicketingDateTime: "2024-03-29",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT21H25M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-03-28T20:35:00",
                },
                arrival: {
                  iataCode: "CCU",
                  at: "2024-03-28T22:50:00",
                },
                carrierCode: "SG",
                number: "8253",
                aircraft: {
                  code: "737",
                },
                operating: {
                  carrierCode: "SG",
                },
                duration: "PT2H15M",
                id: "11",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "CCU",
                  at: "2024-03-29T08:35:00",
                },
                arrival: {
                  iataCode: "BLR",
                  terminal: "1",
                  at: "2024-03-29T11:30:00",
                },
                carrierCode: "SG",
                number: "516",
                aircraft: {
                  code: "7M8",
                },
                operating: {
                  carrierCode: "SG",
                },
                duration: "PT2H55M",
                id: "12",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "BLR",
                  terminal: "1",
                  at: "2024-03-29T15:20:00",
                },
                arrival: {
                  iataCode: "PAT",
                  at: "2024-03-29T18:00:00",
                },
                carrierCode: "SG",
                number: "768",
                aircraft: {
                  code: "737",
                },
                operating: {
                  carrierCode: "SG",
                },
                duration: "PT2H40M",
                id: "13",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "38274.00",
          base: "33170.00",
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
          grandTotal: "38274.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["HR"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "38274.00",
              base: "33170.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "11",
                cabin: "ECONOMY",
                fareBasis: "USAVER",
                class: "U",
                includedCheckedBags: {
                  weight: 15,
                  weightUnit: "KG",
                },
              },
              {
                segmentId: "12",
                cabin: "ECONOMY",
                fareBasis: "USAVER",
                class: "U",
                includedCheckedBags: {
                  weight: 15,
                  weightUnit: "KG",
                },
              },
              {
                segmentId: "13",
                cabin: "ECONOMY",
                fareBasis: "USAVER",
                class: "U",
                includedCheckedBags: {
                  weight: 15,
                  weightUnit: "KG",
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "13",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        lastTicketingDate: "2024-03-28",
        lastTicketingDateTime: "2024-03-28",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT8H5M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-03-28T05:30:00",
                },
                arrival: {
                  iataCode: "AMD",
                  terminal: "1",
                  at: "2024-03-28T07:10:00",
                },
                carrierCode: "AI",
                number: "817",
                aircraft: {
                  code: "320",
                },
                operating: {
                  carrierCode: "AI",
                },
                duration: "PT1H40M",
                id: "3",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "AMD",
                  terminal: "1",
                  at: "2024-03-28T08:25:00",
                },
                arrival: {
                  iataCode: "BOM",
                  terminal: "2",
                  at: "2024-03-28T09:40:00",
                },
                carrierCode: "UK",
                number: "936",
                aircraft: {
                  code: "320",
                },
                operating: {
                  carrierCode: "UK",
                },
                duration: "PT1H15M",
                id: "4",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "BOM",
                  terminal: "2",
                  at: "2024-03-28T11:00:00",
                },
                arrival: {
                  iataCode: "PAT",
                  at: "2024-03-28T13:35:00",
                },
                carrierCode: "AI",
                number: "673",
                aircraft: {
                  code: "32N",
                },
                operating: {
                  carrierCode: "AI",
                },
                duration: "PT2H35M",
                id: "5",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "47645.00",
          base: "44535.00",
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
          grandTotal: "47645.00",
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
              total: "47645.00",
              base: "44535.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "3",
                cabin: "ECONOMY",
                fareBasis: "YIFOW",
                class: "Y",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
              },
              {
                segmentId: "4",
                cabin: "ECONOMY",
                fareBasis: "APTF9YS",
                class: "A",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
              },
              {
                segmentId: "5",
                cabin: "ECONOMY",
                fareBasis: "APTF9YS",
                class: "G",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "14",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        lastTicketingDate: "2024-03-28",
        lastTicketingDateTime: "2024-03-28",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT16H25M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-03-28T21:10:00",
                },
                arrival: {
                  iataCode: "BLR",
                  terminal: "1",
                  at: "2024-03-29T00:05:00",
                },
                carrierCode: "AI",
                number: "504",
                aircraft: {
                  code: "32N",
                },
                operating: {
                  carrierCode: "AI",
                },
                duration: "PT2H55M",
                id: "8",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "BLR",
                  terminal: "2",
                  at: "2024-03-29T06:40:00",
                },
                arrival: {
                  iataCode: "BOM",
                  terminal: "2",
                  at: "2024-03-29T08:05:00",
                },
                carrierCode: "UK",
                number: "858",
                aircraft: {
                  code: "320",
                },
                operating: {
                  carrierCode: "UK",
                },
                duration: "PT1H25M",
                id: "9",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "BOM",
                  terminal: "2",
                  at: "2024-03-29T11:00:00",
                },
                arrival: {
                  iataCode: "PAT",
                  at: "2024-03-29T13:35:00",
                },
                carrierCode: "AI",
                number: "673",
                aircraft: {
                  code: "32N",
                },
                operating: {
                  carrierCode: "AI",
                },
                duration: "PT2H35M",
                id: "10",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "65736.00",
          base: "61765.00",
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
          grandTotal: "65736.00",
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
              total: "65736.00",
              base: "61765.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "8",
                cabin: "ECONOMY",
                fareBasis: "YIFOW",
                class: "Y",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
              },
              {
                segmentId: "9",
                cabin: "ECONOMY",
                fareBasis: "APTF9YS",
                class: "A",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
              },
              {
                segmentId: "10",
                cabin: "ECONOMY",
                fareBasis: "APTF9YS",
                class: "G",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "15",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        lastTicketingDate: "2024-03-28",
        lastTicketingDateTime: "2024-03-28",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H5M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-03-28T07:30:00",
                },
                arrival: {
                  iataCode: "BOM",
                  terminal: "2",
                  at: "2024-03-28T09:45:00",
                },
                carrierCode: "UK",
                number: "943",
                aircraft: {
                  code: "320",
                },
                operating: {
                  carrierCode: "UK",
                },
                duration: "PT2H15M",
                id: "1",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "BOM",
                  terminal: "2",
                  at: "2024-03-28T11:00:00",
                },
                arrival: {
                  iataCode: "PAT",
                  at: "2024-03-28T13:35:00",
                },
                carrierCode: "AI",
                number: "673",
                aircraft: {
                  code: "32N",
                },
                operating: {
                  carrierCode: "AI",
                },
                duration: "PT2H35M",
                id: "2",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "71167.00",
          base: "67107.00",
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
          grandTotal: "71167.00",
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
              total: "71167.00",
              base: "67107.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "1",
                cabin: "ECONOMY",
                fareBasis: "YOIATAYF",
                class: "Y",
                includedCheckedBags: {
                  weight: 15,
                  weightUnit: "KG",
                },
              },
              {
                segmentId: "2",
                cabin: "ECONOMY",
                fareBasis: "YIFOW",
                class: "Y",
                includedCheckedBags: {
                  weight: 15,
                  weightUnit: "KG",
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "16",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        lastTicketingDate: "2024-03-28",
        lastTicketingDateTime: "2024-03-28",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT7H35M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-03-28T06:00:00",
                },
                arrival: {
                  iataCode: "BOM",
                  terminal: "2",
                  at: "2024-03-28T08:00:00",
                },
                carrierCode: "UK",
                number: "975",
                aircraft: {
                  code: "321",
                },
                operating: {
                  carrierCode: "UK",
                },
                duration: "PT2H",
                id: "16",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "BOM",
                  terminal: "2",
                  at: "2024-03-28T11:00:00",
                },
                arrival: {
                  iataCode: "PAT",
                  at: "2024-03-28T13:35:00",
                },
                carrierCode: "AI",
                number: "673",
                aircraft: {
                  code: "32N",
                },
                operating: {
                  carrierCode: "AI",
                },
                duration: "PT2H35M",
                id: "17",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "71167.00",
          base: "67107.00",
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
          grandTotal: "71167.00",
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
              total: "71167.00",
              base: "67107.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "16",
                cabin: "ECONOMY",
                fareBasis: "YOIATAYF",
                class: "Y",
                includedCheckedBags: {
                  weight: 15,
                  weightUnit: "KG",
                },
              },
              {
                segmentId: "17",
                cabin: "ECONOMY",
                fareBasis: "YIFOW",
                class: "Y",
                includedCheckedBags: {
                  weight: 15,
                  weightUnit: "KG",
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "17",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        lastTicketingDate: "2024-03-29",
        lastTicketingDateTime: "2024-03-29",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT19H55M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-03-28T17:40:00",
                },
                arrival: {
                  iataCode: "HYD",
                  at: "2024-03-28T19:50:00",
                },
                carrierCode: "UK",
                number: "879",
                aircraft: {
                  code: "320",
                },
                operating: {
                  carrierCode: "UK",
                },
                duration: "PT2H10M",
                id: "33",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "HYD",
                  at: "2024-03-28T22:30:00",
                },
                arrival: {
                  iataCode: "BOM",
                  terminal: "2",
                  at: "2024-03-29T00:10:00",
                },
                carrierCode: "AI",
                number: "698",
                aircraft: {
                  code: "319",
                },
                operating: {
                  carrierCode: "AI",
                },
                duration: "PT1H40M",
                id: "34",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "BOM",
                  terminal: "2",
                  at: "2024-03-29T11:00:00",
                },
                arrival: {
                  iataCode: "PAT",
                  at: "2024-03-29T13:35:00",
                },
                carrierCode: "AI",
                number: "673",
                aircraft: {
                  code: "32N",
                },
                operating: {
                  carrierCode: "AI",
                },
                duration: "PT2H35M",
                id: "35",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "94018.00",
          base: "88700.00",
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
          grandTotal: "94018.00",
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
              total: "94018.00",
              base: "88700.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "33",
                cabin: "ECONOMY",
                fareBasis: "YOIATAYF",
                class: "Y",
                includedCheckedBags: {
                  weight: 15,
                  weightUnit: "KG",
                },
              },
              {
                segmentId: "34",
                cabin: "ECONOMY",
                fareBasis: "YIFOW",
                class: "Y",
                includedCheckedBags: {
                  weight: 15,
                  weightUnit: "KG",
                },
              },
              {
                segmentId: "35",
                cabin: "ECONOMY",
                fareBasis: "YIFOW",
                class: "Y",
                includedCheckedBags: {
                  weight: 15,
                  weightUnit: "KG",
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "18",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        lastTicketingDate: "2024-03-29",
        lastTicketingDateTime: "2024-03-29",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT18H55M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2024-03-28T18:40:00",
                },
                arrival: {
                  iataCode: "GOI",
                  at: "2024-03-28T21:20:00",
                },
                carrierCode: "UK",
                number: "855",
                aircraft: {
                  code: "320",
                },
                operating: {
                  carrierCode: "UK",
                },
                duration: "PT2H40M",
                id: "30",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "GOI",
                  at: "2024-03-28T23:00:00",
                },
                arrival: {
                  iataCode: "BOM",
                  terminal: "2",
                  at: "2024-03-29T00:20:00",
                },
                carrierCode: "AI",
                number: "697",
                aircraft: {
                  code: "321",
                },
                operating: {
                  carrierCode: "AI",
                },
                duration: "PT1H20M",
                id: "31",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "BOM",
                  terminal: "2",
                  at: "2024-03-29T11:00:00",
                },
                arrival: {
                  iataCode: "PAT",
                  at: "2024-03-29T13:35:00",
                },
                carrierCode: "AI",
                number: "673",
                aircraft: {
                  code: "32N",
                },
                operating: {
                  carrierCode: "AI",
                },
                duration: "PT2H35M",
                id: "32",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "95099.00",
          base: "89730.00",
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
          grandTotal: "95099.00",
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
              total: "95099.00",
              base: "89730.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "30",
                cabin: "ECONOMY",
                fareBasis: "YOIATAYF",
                class: "Y",
                includedCheckedBags: {
                  weight: 15,
                  weightUnit: "KG",
                },
              },
              {
                segmentId: "31",
                cabin: "ECONOMY",
                fareBasis: "YIFOW",
                class: "Y",
                includedCheckedBags: {
                  weight: 15,
                  weightUnit: "KG",
                },
              },
              {
                segmentId: "32",
                cabin: "ECONOMY",
                fareBasis: "YIFOW",
                class: "Y",
                includedCheckedBags: {
                  weight: 15,
                  weightUnit: "KG",
                },
              },
            ],
          },
        ],
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
        PNQ: {
          cityCode: "PNQ",
          countryCode: "IN",
        },
        HYD: {
          cityCode: "HYD",
          countryCode: "IN",
        },
        AMD: {
          cityCode: "AMD",
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
        MAA: {
          cityCode: "MAA",
          countryCode: "IN",
        },
        JDH: {
          cityCode: "JDH",
          countryCode: "IN",
        },
      },
      aircraft: {
        319: "AIRBUS A319",
        320: "AIRBUS A320",
        321: "AIRBUS A321",
        737: "BOEING 737 ALL SERIES PASSENGER",
        788: "BOEING 787-8",
        "32A": "AIRBUS A320 (SHARKLETS)",
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
