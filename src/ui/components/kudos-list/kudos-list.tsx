import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";
import { Divider, Empty, Skeleton, Spin, notification } from "antd";

import {
  StyledKudosList,
  StyledKudosListContainer,
  StyledEmptyContainer,
} from "./kudos-list.style";
import { KudosItem } from "../kudos-item";
import { useAppDispatch, useAppSelector, kudosAction } from "../../../redux";
import { models } from "../../../domain";
import { ActionStatus } from "../../../utils";

export const KudosList = () => {
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.kudos);
  const listKudos: models.Kudos[] = state.kudos;

  const isPagination = state.pagination?.lastKey ? true : false;

  useEffect(() => {
    dispatch(kudosAction.listKudos({ limit: 5 }));
  }, [dispatch]);

  useEffect(() => {
    if (state.listKudosStatus === ActionStatus.ERROR) {
      api.error({
        message: "Failed to load kudos!",
        description: state.error.message,
      });
    }
  }, [api, state.error.message, state.listKudosStatus]);

  const loadMore = () => {
    if (state.listKudosStatus === ActionStatus.PENDING) return;

    dispatch(
      kudosAction.listKudos({
        limit: 5,
        lastKey: state.pagination?.lastKey,
      }),
    );
  };

  return (
    <>
      {contextHolder}
      <div>Please implement filters here!</div>
      <StyledKudosListContainer id="scrollableList">
        {listKudos.length > 0 ? (
          <InfiniteScroll
            dataLength={listKudos.length}
            next={loadMore}
            hasMore={isPagination}
            loader={
              <Skeleton
                avatar
                paragraph={{ rows: 2 }}
                active
                style={{ paddingBottom: "50px" }}
              />
            }
            endMessage={<Divider plain>No older kudos! 😘</Divider>}
            scrollableTarget="scrollableList"
          >
            <StyledKudosList
              dataSource={listKudos}
              renderItem={(kudos) => (
                <KudosItem kudos={kudos as models.Kudos} />
              )}
            />
          </InfiniteScroll>
        ) : (
          <StyledEmptyContainer>
            {state.listKudosStatus === ActionStatus.PENDING ? (
              <Spin size="large" />
            ) : (
              <Empty />
            )}
          </StyledEmptyContainer>
        )}
      </StyledKudosListContainer>
    </>
  );
};
