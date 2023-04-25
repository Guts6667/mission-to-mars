# MSSION TO MARS

## NEXT PROJECT

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## DATAS

### HOMEPAGE

Url : `https://eonet.gsfc.nasa.gov/api/v2.1/events`.
The Earth Observatory Natural Event Tracker (EONET) is a prototype web service with the goal of:
providing a curated source of continuously updated natural event metadata; providing a service that links those natural events to thematically-related web service-enabled image sources (e.g., via WMS, WMTS, etc.)

Example of response: `"events": [
		{
			"id": "EONET_6340",
			"title": "Tropical Storm Sanvu",
            "description": "",
			"link": "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6340",
			"categories": [
				{
					"id": 10,
					"title": "Severe Storms"
				}
			],
			"sources": [
				{
					"id": "GDACS",
					"url": "https://www.gdacs.org/report.aspx?eventid=1000969&amp;episodeid=4&amp;eventtype=TC"
				},
				{
					"id": "JTWC",
					"url": "https://www.metoc.navy.mil/jtwc/products/wp0123.tcw"
				}
			
			],
			"geometries": [
				{
					"date": "2023-04-20T00:00:00Z",
					"type": "Point", 
					"coordinates": [ 157.9, 7.9 ]
				},
                ]
                }
                ]`
*To use the coordinates, the second index must be inserted first and both values must be separated by a comma.*