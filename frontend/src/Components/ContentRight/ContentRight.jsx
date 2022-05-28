import React from 'react'

import {
    ContentRightOuter,
    Header,
    ListElement,
    ChartContainer,
    ViewAll,

} from "./ContentRightStyles";


const ContentRight = () => {
    return (
        <ContentRightOuter>
            <ChartContainer>
                <Header>
                    Top Animes
                </Header>
                <ol>
                    <ListElement><li>One Piece</li></ListElement>
                    <ListElement><li>FMA:B</li></ListElement>
                    <ListElement><li>Attack on Titan</li></ListElement>
                    <ListElement><li>Steins;Gate</li></ListElement>
                    <ListElement><li>Death Note</li></ListElement>
                </ol>
                <ViewAll>View more ...</ViewAll>
            </ChartContainer>
            <ChartContainer>
                <Header>
                    Popular Animes
                </Header>
                <ol>
                    <ListElement><li>Attack on Titan</li></ListElement>
                    <ListElement><li>Death Note</li></ListElement>
                    <ListElement><li>FMA:B</li></ListElement>
                    <ListElement><li>One Punch Man</li></ListElement>
                    <ListElement><li>Sword Art Online</li></ListElement>
                </ol>
                <ViewAll>View more ...</ViewAll>
            </ChartContainer>
        </ContentRightOuter>
    )
}

export default ContentRight