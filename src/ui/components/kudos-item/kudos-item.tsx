import { Col, Row } from "antd";
import {
  StyledKudosItem,
  StyledReceiverName,
  StyledGiverName,
  StyledFlexEndDiv,
  StyledKudosItemContent,
  StyledCategoiryRow,
  StyledAvatar,
} from "./kudos-item.style";
import { CategoryListContainer } from "../../containers/category-list-container";
import { models } from "../../../domain";

interface KudosItemProps {
  kudos: models.Kudos;
}

export const KudosItem = ({ kudos }: KudosItemProps) => {
  return (
    <StyledKudosItem>
      <Col span={2}>
        <StyledAvatar
          src={
            kudos.receiver.image
              ? kudos.receiver.image
              : `https://neonmusic.online/wp-content/uploads/2023/06/fetchimage.jpg`
          }
        />
      </Col>
      <StyledKudosItemContent span={22}>
        <Row>
          <Col span={18}>
            <StyledReceiverName>{kudos.receiver.name}</StyledReceiverName>
          </Col>
          <Col span={6}>
            <StyledFlexEndDiv>
              {new Date(kudos.createdAt).toLocaleString()}
            </StyledFlexEndDiv>
          </Col>
        </Row>
        <Row>
          <i>&quot;{kudos.description}&quot;</i>
        </Row>
        <StyledCategoiryRow>
          <Col span={17}>
            <CategoryListContainer categories={kudos.categories} />
          </Col>
          <Col span={7}>
            <StyledFlexEndDiv>
              <p>From</p>
              <StyledGiverName>{kudos.sender.name}</StyledGiverName>
            </StyledFlexEndDiv>
          </Col>
        </StyledCategoiryRow>
      </StyledKudosItemContent>
    </StyledKudosItem>
  );
};
