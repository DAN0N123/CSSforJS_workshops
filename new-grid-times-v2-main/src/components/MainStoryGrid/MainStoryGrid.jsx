import React from "react";
import styled from "styled-components";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { COLORS, QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;
  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 3fr 1fr;
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
  }
  @media ${QUERIES.desktopAndUp} {
    gap: 16px 32px;
    grid-template-columns: 8fr 7fr 4fr;
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  @media ${QUERIES.desktopAndUp} {
    border-right: 2px solid ${COLORS.gray[300]};
    padding-right: 16px;
    margin-right: -16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  ${StoryList} {
    a:not(:last-child) {
      border-bottom: 2px solid ${COLORS.gray[300]};
      padding-bottom: 16px;
    }
    a:not(:first-child) {
      padding-top: 16px;
    }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  ${StoryList} {
    @media ${QUERIES.tabletAndUp} {
      display: flex;
      flex-direction: row;
      gap: 32px;
    }

    @media ${QUERIES.desktopAndUp} {
      display: flex;
      flex-direction: column;
      gap: 16px;
      a:not(:last-child) {
        border-bottom: 2px solid ${COLORS.gray[300]};
        padding-bottom: 12px;
      }
      a:not(:first-child) {
        padding-top: 12px;
      }
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.desktopAndUp} {
    border-top: 2px solid ${COLORS.gray[300]};
    padding-top: 16px;
  }
`;

export default MainStoryGrid;
