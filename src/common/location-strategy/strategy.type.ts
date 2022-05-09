export type BingResponseType = {
    authenticationResultCode: string,
    brandLogoUri: string,
    copyright: string,
    resourceSets: Array<{
      estimatedTotal: number,
      resources: Array<{
        __type: string,
        bbox: Array<number>,
        id: string,
        distanceUnit: string,
        durationUnit: string,
        trafficCongestion: string,
        trafficDataUsed: string,
        travelDistance: number,
        travelDuration: number,
        travelDurationTraffic: number,
        travelMode: string,
        routeLegs: Array<{
          actualEnd: {
            type: string,
            coordinates: Array<number>,
          },
          actualStart: {
            type: string,
            coordinates: Array<number>,
          },
          alternateVias: Array<any>,
          description: number,
          endTime: string,
          itineraryItems: Array<{
            compassDirection: string,
            details: Array<{
                compassDegrees: number,
                endPathIndices: Array<number>,
                maneuverType: string,
                mode: string,
                names: Array<string>,
                roadType: string,
                startPathIndices: Array<number>,
            }>,
            exit: string,
            iconType: string,
            instruction: {
                formattedText: string | null,
                maneuverType: string,
                text: string,
            },
            isRealTimeTransit: boolean,
            maneuverPoint: {
                type: string,
                coordinates: Array<number>,
            },
            realTimeTransitDelay: number,
            sideOfStreet: string,
            tollZone: string,
            towardsRoadName: string,
            transitTerminus: string,
            travelDistance: string,
            travelDuration: number,
            travelMode: string,
          }>
        }>
      }>
    }>
  }

export type OpenRouteResponseType = {
    type: string,
    bbox: Array<number>,
    features: Array<{
        bbox: Array<number>,
        type: string,
        properties: {
            segments: Array<{
                distance: number,
                duration: number,
                steps: Array<{
                    distance: number,
                    duration: number,
                    type: number,
                    instruction: string,
                    name: string,
                    way_points: Array<number>,  
                }>
            }>,
            summary: {
                distance: number,
                duration: number,
            },
            way_points: Array<number>,
        },
        geometry: {
            coordinates: Array<Array<number>>
        }
    }>,
    metadata: {
        attribution: string,
        service: string,
        timestamp: number,
        query: {
            coordinates: Array<Array<number>>,
            profile: string,
            format: string,
        },
        engine: {
            version: string,
            build_date: string,
            graph_date: string,
        }
    }
}