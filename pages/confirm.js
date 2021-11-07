import React, { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import { useRouter } from 'next/router';
import RideSelector from './components/RideSelector';
import Link from 'next/link';

const confirm = () => {

    const router = useRouter()
    const { pickup, dropoff } = router.query

    const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);

    const getPickupCoordinates = (pickup) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
            new URLSearchParams({
                access_token: 'pk.eyJ1IjoiYmx1ZWxlZ2VuZCIsImEiOiJja3ZseDB3OGIwYnljMzNxZjllbHlqaW1qIn0.Hpfog2_pya3x3zhuQJ80GQ',
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => {
                setPickupCoordinates(data.features[0].center)
            })
    }


    const getDropoffCoordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
            new URLSearchParams({
                access_token: 'pk.eyJ1IjoiYmx1ZWxlZ2VuZCIsImEiOiJja3ZseDB3OGIwYnljMzNxZjllbHlqaW1qIn0.Hpfog2_pya3x3zhuQJ80GQ',
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => {
                setDropoffCoordinates(data.features[0].center)
            })
    }

    useEffect(() => {
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [pickup, dropoff])


    return (
        <Wrapper>
            <Link href='/search'>
                <ButtonContainer>
                    <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
                </ButtonContainer>
            </Link>
            <Map
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />
            <RideContainer>
                <RideSelector
                    pickupCoordinates={pickupCoordinates}
                    dropoffCoordinates={dropoffCoordinates}
                />
                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm Book
                    </ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    )
}

export default confirm


const Wrapper = tw.div`
    flex h-screen flex-col
`

const ButtonContainer = tw.div`
    z-50 cursor-pointer left-4 top-4 px-1 absolute bg-white bg-opacity-100 w-12 border-white rounded-full
`

const BackButton = tw.img`
    h-12  
`

const RideContainer = tw.div`
    flex-1 flex flex-col h-1/2 
`

const ConfirmButtonContainer = tw.div`
    border-t-2
`

const ConfirmButton = tw.div`
bg-black text-white  my-4 mx-4 text-center py-4 text-xl 
`