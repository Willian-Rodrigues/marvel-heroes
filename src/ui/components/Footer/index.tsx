import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
  MentionOfRights,
} from "./style";
import { Typography, Box } from "@mui/material";

export const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Created by Will:</FooterTitle>
          <Typography variant={"body2"} sx={{ mt: 2 }}>
            Web project to consume an MARVEL API
          </Typography>
        </Box>

        <div>
          <FooterTitle>Follow-Me</FooterTitle>
          <AppList>
            <li>
              <a
                href={"https://www.linkedin.com/in/willianrsilva/"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                <img
                  src={
                    "https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                  }
                  alt={"App Store"}
                />
              </a>
            </li>
            <li>
              <a
                href={"https://github.com/Willian-Rodrigues"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                <img
                  src={
                    "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                  }
                  alt={"Google Play"}
                />
              </a>
            </li>
            <li>
              <a
                href={"https://gitlab.com/willian-rodrigues"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                <img
                  src={
                    "https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white"
                  }
                  alt={"Google Play"}
                />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
      <MentionOfRights>
        <a href="http://marvel.com">
          <Typography variant={"body2"} sx={{ mt: 2 }}>
            Data provided by Marvel. ?? 2021 MARVEL ?? 2021 MARVEL
          </Typography>
        </a>
      </MentionOfRights>
    </FooterStyled>
  );
};
