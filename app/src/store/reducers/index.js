const initialState = {
    breweries: [{
        "address_2": null,
        "address_3": null,
        "brewery_type": "large",
        "city": "Fort Collins",
        "country": "United States",
        "county_province": null,
        "created_at": "2018-07-24T01:33:03.000Z",
        "id": 8385,
        "latitude": "40.61817811",
        "longitude": "-105.0019686",
        "name": "Anheuser-Busch Inc - Fort Collins",
        "obdb_id": "anheuser-busch-inc-fort-collins-fort-collins",
        "phone": "9704904500",
        "postal_code": "80524-9400",
        "state": "Colorado",
        "street": "2351 Busch Dr",
        "updated_at": "2018-08-24T00:05:26.000Z",
        "website_url": null
    },
    {
        "address_2": null,
        "address_3": null,
        "brewery_type": "brewpub",
        "city": "Fort Collins",
        "country": "United States",
        "county_province": null,
        "created_at": "2018-07-24T01:33:04.000Z",
        "id": 8964,
        "latitude": null,
        "longitude": null,
        "name": "Black Bottle Brewery",
        "obdb_id": "black-bottle-brewery-fort-collins",
        "phone": "9704932337",
        "postal_code": "80525-1074",
        "state": "Colorado",
        "street": "1611 S College Ave Ste STE1609",
        "updated_at": "2018-08-11T21:36:32.000Z",
        "website_url": "http://www.blackbottlebrewery.com"
    },
    {
        "address_2": null,
        "address_3": null,
        "brewery_type": "brewpub",
        "city": "Fort Collins",
        "country": "United States",
        "county_province": null,
        "created_at": "2018-07-24T01:33:05.000Z",
        "id": 9870,
        "latitude": "40.5873784",
        "longitude": "-105.0755188",
        "name": "CooperSmiths Pub and Brewing",
        "obdb_id": "coopersmiths-pub-and-brewing-fort-collins",
        "phone": "9704980483",
        "postal_code": "80524-2446",
        "state": "Colorado",
        "street": "5 Old Town Sq",
        "updated_at": "2018-08-24T00:22:39.000Z",
        "website_url": "http://www.coopersmithspub.com"
    }]
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        default: 
        return state;
    }
} 



 