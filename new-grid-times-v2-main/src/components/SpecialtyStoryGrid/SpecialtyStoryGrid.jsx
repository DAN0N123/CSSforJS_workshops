import React from "react";
import styled from "styled-components";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";
import { COLORS, QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  @media ${QUERIES.desktopAndUp} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const MarketsSection = styled.section`
  @media ${QUERIES.desktopAndUp} {
    border-right: 2px solid ${COLORS.gray[300]};
    padding-right: 16px;
    margin-right: -16px;
  }
`;

const MarketCards = styled.div`
  @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
  @media ${QUERIES.desktopAndUp} {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
`;

const SportsSection = styled.section`
  overflow: auto;
`;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  @media ${QUERIES.tabletAndUp} {
    display: flex;

    article {
      width: 220px;
    }
    overflow: clip;
  }
`;

export default SpecialtyStoryGrid;
