import { Avatar, Col, Row } from "antd";
import styled from "styled-components";

export const StyledKudosItem = styled(Row)`
  color: var(--primary-dark-color);
  border: 1px solid var(--primary-dark-color);
  border-radius: var(--radius-border);
  padding: 10px;
  margin-bottom: 10px;
`;

export const StyledReceiverName = styled.p`
  text-transform: uppercase;
  font-weight: 700;
`;

export const StyledSenderName = styled.p`
  font-weight: 600;
`;

export const StyledFlexEndDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`;

export const StyledKudosItemContent = styled(Col)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledCategoiryRow = styled(Row)`
  margin-top: 0.3rem;
`;

export const StyledAvatar = styled(Avatar)`
  width: 4.2vw;
  min-width: 45px;
  height: 4.2vw;
  min-height: 45px;
`;
